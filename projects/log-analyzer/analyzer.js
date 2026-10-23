/*
 * Windows Security Log Analyzer: detection engine
 * ------------------------------------------------------------
 * Input: CSV rows of Windows logon events (4624 success, 4625 failure,
 * 4740 lockout) with the columns produced by Export-LogonEvents.ps1.
 * Output: summary statistics and alerts.
 *
 * Detection rules (all thresholds configurable):
 *   R1 Brute force         >= N failures from one source IP within W minutes, few accounts  (MITRE T1110.001)
 *   R2 Password spraying   one source IP failing against >= K distinct accounts            (MITRE T1110.003)
 *   R3 Success after fails a 4624 from an IP that just produced >= S failures               (MITRE T1078)
 *   R4 Account enumeration >= 3 failures for non-existent accounts (0xC0000064) from one IP (MITRE T1087)
 *   R5 Account lockout     every 4740, correlated with the IPs that failed for that account
 *   R6 Disabled account    failures with 0xC0000072 (account disabled)
 *
 * Runs entirely in the browser; no data leaves the page.
 */
(function (global) {
  'use strict';

  const MIN = 60 * 1000;

  // NTSTATUS codes commonly seen in 4625 Status / SubStatus fields.
  const STATUS_CODES = {
    '0xc000006d': 'Bad user name or authentication information',
    '0xc000006a': 'Wrong password',
    '0xc0000064': 'User name does not exist',
    '0xc0000072': 'Account disabled',
    '0xc0000234': 'Account locked out',
    '0xc000006f': 'Logon outside allowed hours',
    '0xc0000070': 'Workstation restriction',
    '0xc0000071': 'Password expired',
    '0xc0000193': 'Account expired',
    '0xc0000224': 'Password must change at next logon',
    '0xc0000133': 'Clock out of sync with DC',
    '0xc000015b': 'Logon type not granted',
  };

  const LOGON_TYPES = {
    2: 'Interactive', 3: 'Network', 4: 'Batch', 5: 'Service', 7: 'Unlock',
    8: 'NetworkCleartext', 9: 'NewCredentials', 10: 'RemoteInteractive (RDP)', 11: 'CachedInteractive',
  };

  // Accept a few alternative column names (e.g. from other exports).
  const ALIASES = {
    time: ['timecreated', 'time', 'timestamp', 'date', 'datetime'],
    id: ['eventid', 'id', 'event_id'],
    user: ['targetusername', 'user', 'username', 'account'],
    domain: ['targetdomainname', 'domain'],
    ip: ['ipaddress', 'sourcenetworkaddress', 'source_ip', 'ip', 'sourceip'],
    logonType: ['logontype', 'logon_type'],
    status: ['status'],
    subStatus: ['substatus', 'sub_status', 'failurereason'],
    workstation: ['workstationname', 'workstation', 'computer'],
  };

  /** RFC 4180-style CSV parser (quoted fields, escaped quotes, CRLF). Lines starting with # are comments. */
  function parseCsv(text) {
    const rows = [];
    let row = [], field = '', inQuotes = false, atLineStart = true;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (inQuotes) {
        if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
        else if (c === '"') inQuotes = false;
        else field += c;
        continue;
      }
      if (atLineStart && c === '#') { // skip comment line
        while (i < text.length && text[i] !== '\n') i++;
        continue;
      }
      atLineStart = false;
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(field); field = '';
        if (row.some((v) => v !== '')) rows.push(row);
        row = []; atLineStart = true;
      } else field += c;
    }
    row.push(field);
    if (row.some((v) => v !== '')) rows.push(row);
    return rows;
  }

  /** Turn CSV text into normalized event objects. Returns { events, skipped, error }. */
  function loadEvents(text) {
    const rows = parseCsv(text.replace(/^\uFEFF/, ''));
    if (rows.length < 2) return { events: [], skipped: 0, error: 'No data rows found.' };
    const header = rows[0].map((h) => h.trim().toLowerCase());
    const col = {};
    for (const [key, names] of Object.entries(ALIASES)) col[key] = header.findIndex((h) => names.includes(h));
    if (col.time < 0 || col.id < 0) return { events: [], skipped: 0, error: 'CSV needs at least TimeCreated and EventID columns.' };

    const events = [];
    let skipped = 0;
    for (const r of rows.slice(1)) {
      const get = (k) => (col[k] >= 0 ? (r[col[k]] || '').trim() : '');
      const t = Date.parse(get('time'));
      const id = Number(get('id'));
      if (!isFinite(t) || ![4624, 4625, 4740].includes(id)) { skipped++; continue; }
      let ip = get('ip');
      if (!ip || ip === '-' || ip === '::1' || ip === '127.0.0.1') ip = '(local)';
      events.push({
        t, id, ip,
        user: get('user') || '(unknown)',
        domain: get('domain'),
        logonType: get('logonType'),
        status: get('status').toLowerCase(),
        subStatus: get('subStatus').toLowerCase(),
        workstation: get('workstation'),
      });
    }
    events.sort((a, b) => a.t - b.t);
    return { events, skipped, error: events.length ? null : 'No 4624/4625/4740 events found.' };
  }

  const reason = (e) => STATUS_CODES[e.subStatus] || STATUS_CODES[e.status] || e.subStatus || e.status || '';

  // Largest number of events inside any sliding window of `windowMs`.
  function maxInWindow(events, windowMs) {
    let best = 0, left = 0;
    for (let right = 0; right < events.length; right++) {
      while (events[right].t - events[left].t > windowMs) left++;
      best = Math.max(best, right - left + 1);
    }
    return best;
  }

  const groupBy = (list, key) => list.reduce((m, x) => (m.get(key(x)) || m.set(key(x), []).get(key(x))).push(x) && m, new Map());

  /** Run all detection rules. */
  function analyze(events, opts = {}) {
    const o = { bruteCount: 10, bruteWindowMin: 5, sprayAccounts: 5, sprayWindowMin: 30, successAfter: 5, ...opts };
    const failures = events.filter((e) => e.id === 4625);
    const successes = events.filter((e) => e.id === 4624);
    const lockouts = events.filter((e) => e.id === 4740);
    const alerts = [];
    const alert = (a) => alerts.push({ ...a, first: a.events[0].t, last: a.events[a.events.length - 1].t });

    // R1 + R2: split each IP's failures into sessions (gap > spray window ends a session).
    for (const [ip, list] of groupBy(failures, (e) => e.ip)) {
      let session = [];
      const flush = () => {
        if (!session.length) return;
        const accounts = [...new Set(session.map((e) => e.user.toLowerCase()))];
        const peak = maxInWindow(session, o.bruteWindowMin * MIN);
        if (accounts.length >= o.sprayAccounts) {
          alert({ rule: 'Password spraying', severity: 'high', mitre: 'T1110.003', ip, accounts, count: session.length, events: session,
            detail: `${session.length} failures across ${accounts.length} different accounts` });
        } else if (peak >= o.bruteCount) {
          alert({ rule: 'Brute force', severity: 'high', mitre: 'T1110.001', ip, accounts, count: session.length, events: session,
            detail: `${session.length} failures (peak ${peak} in ${o.bruteWindowMin} min) against ${accounts.join(', ')}` });
        }
        session = [];
      };
      for (const e of list) {
        if (session.length && e.t - session[session.length - 1].t > o.sprayWindowMin * MIN) flush();
        session.push(e);
      }
      flush();
    }

    // R3: a success from an IP with many recent failures.
    const failsByIp = groupBy(failures, (e) => e.ip);
    for (const s of successes) {
      if (s.ip === '(local)') continue;
      const prior = (failsByIp.get(s.ip) || []).filter((f) => f.t <= s.t && s.t - f.t <= o.sprayWindowMin * MIN);
      if (prior.length >= o.successAfter) {
        alert({ rule: 'Successful logon after repeated failures', severity: 'critical', mitre: 'T1078', ip: s.ip, accounts: [s.user],
          count: prior.length + 1, events: [...prior, s],
          detail: `${prior.length} failures then a successful logon as ${s.user} (type ${s.logonType || '?'}): possible compromised credentials` });
      }
    }

    // R4: failures for accounts that do not exist.
    for (const [ip, list] of groupBy(failures.filter((e) => e.subStatus === '0xc0000064'), (e) => e.ip)) {
      if (list.length >= 3) {
        const accounts = [...new Set(list.map((e) => e.user))];
        alert({ rule: 'Account enumeration (non-existent users)', severity: 'medium', mitre: 'T1087', ip, accounts, count: list.length, events: list,
          detail: `${list.length} attempts for ${accounts.length} user names that do not exist` });
      }
    }

    // R5: lockouts, with the source IPs that failed for that account shortly before.
    for (const l of lockouts) {
      const prior = failures.filter((f) => f.user.toLowerCase() === l.user.toLowerCase() && f.t <= l.t && l.t - f.t <= o.sprayWindowMin * MIN);
      const ips = [...new Set(prior.map((f) => f.ip))];
      alert({ rule: 'Account locked out', severity: 'medium', mitre: 'T1110', ip: ips.join(', ') || '(unknown)', accounts: [l.user],
        count: prior.length + 1, events: [...prior, l],
        detail: `${l.user} locked out (caller ${l.workstation || 'unknown'}) after ${prior.length} recent failure(s)` });
    }

    // R6: attempts against disabled accounts.
    for (const [ip, list] of groupBy(failures.filter((e) => e.subStatus === '0xc0000072'), (e) => e.ip)) {
      const accounts = [...new Set(list.map((e) => e.user))];
      alert({ rule: 'Logon attempt on disabled account', severity: 'low', mitre: 'T1078', ip, accounts, count: list.length, events: list,
        detail: `${list.length} attempt(s) against disabled account(s) ${accounts.join(', ')}` });
    }

    const order = { critical: 0, high: 1, medium: 2, low: 3 };
    alerts.sort((a, b) => order[a.severity] - order[b.severity] || a.first - b.first);

    const count = (list, key) => [...groupBy(list, key)].map(([k, v]) => ({ key: k, count: v.length })).sort((a, b) => b.count - a.count);
    return {
      alerts,
      stats: {
        total: events.length, failures: failures.length, successes: successes.length, lockouts: lockouts.length,
        uniqueIps: new Set(failures.map((e) => e.ip)).size,
        uniqueAccounts: new Set(failures.map((e) => e.user.toLowerCase())).size,
        first: events.length ? events[0].t : null, last: events.length ? events[events.length - 1].t : null,
      },
      topIps: count(failures, (e) => e.ip),
      topAccounts: count(failures, (e) => e.user),
      topReasons: count(failures, reason),
    };
  }

  /** Failures per time bucket, for the timeline chart. */
  function timeline(events, bucketMin = 30) {
    if (!events.length) return [];
    const size = bucketMin * MIN;
    const start = Math.floor(events[0].t / size) * size;
    const end = events[events.length - 1].t;
    const buckets = [];
    for (let t = start; t <= end; t += size) buckets.push({ t, failures: 0, successes: 0 });
    for (const e of events) {
      const b = buckets[Math.floor((e.t - start) / size)];
      if (e.id === 4625) b.failures++; else if (e.id === 4624) b.successes++;
    }
    return buckets;
  }

  global.LogAnalyzer = { parseCsv, loadEvents, analyze, timeline, reason, STATUS_CODES, LOGON_TYPES };
})(typeof window !== 'undefined' ? window : globalThis);
