/* Windows Security Log Analyzer: page UI. Detection logic lives in analyzer.js. */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const L = window.LogAnalyzer;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (t) => new Date(t).toISOString().replace('T', ' ').slice(0, 19);
  const fmtShort = (t) => new Date(t).toISOString().slice(11, 16);

  let events = [];
  let result = null;

  function options() {
    const o = {};
    for (const k of ['bruteCount', 'bruteWindowMin', 'sprayAccounts', 'sprayWindowMin', 'successAfter']) {
      const v = Number($('o-' + k).value);
      if (v > 0) o[k] = v;
    }
    return o;
  }

  function load(text, label) {
    const parsed = L.loadEvents(text);
    if (parsed.error) {
      $('load-status').textContent = '⚠️ ' + parsed.error;
      $('results').hidden = true;
      return;
    }
    events = parsed.events;
    $('load-status').textContent = `Loaded ${events.length} events${parsed.skipped ? `, skipped ${parsed.skipped} other/invalid rows` : ''}.`;
    $('source-label').textContent = label;
    run();
  }

  function run() {
    if (!events.length) return;
    result = L.analyze(events, options());
    $('results').hidden = false;
    renderStats();
    renderAlerts();
    renderBars('top-ips', result.topIps.slice(0, 8));
    renderBars('top-accounts', result.topAccounts.slice(0, 8));
    renderEvents();
    drawChart();
  }

  function renderStats() {
    const s = result.stats;
    const cell = (v, l) => `<div class="stat"><b>${esc(v)}</b><span>${esc(l)}</span></div>`;
    $('stats').innerHTML = cell(s.total, 'events') + cell(s.failures, 'failed logons') + cell(s.successes, 'successful logons') +
      cell(s.lockouts, 'lockouts') + cell(s.uniqueIps, 'failing source IPs') + cell(result.alerts.length, 'alerts') +
      `<p class="mono" style="margin:4px 0 0;font-size:13px">Range: ${fmt(s.first)} → ${fmt(s.last)} UTC</p>`;
  }

  function renderAlerts() {
    if (!result.alerts.length) {
      $('alerts').innerHTML = '<tr><td colspan="7">✅ No alerts with the current thresholds.</td></tr>';
      return;
    }
    $('alerts').innerHTML = result.alerts.map((a) => `
      <tr class="sev-${a.severity}">
        <td><span class="badge ${a.severity}">${a.severity.toUpperCase()}</span></td>
        <td><b>${esc(a.rule)}</b></td>
        <td class="mono">${a.ip.split(', ').map((ip) => `<a href="#events" data-filter="${esc(ip)}">${esc(ip)}</a>`).join(', ')}</td>
        <td class="mono">${esc(a.accounts.slice(0, 6).join(', '))}${a.accounts.length > 6 ? ` +${a.accounts.length - 6} more` : ''}</td>
        <td class="mono">${fmt(a.first).slice(11)} → ${fmt(a.last).slice(11)}</td>
        <td><a href="https://attack.mitre.org/techniques/${a.mitre.replace('.', '/')}/" target="_blank" rel="noopener noreferrer">${a.mitre}</a></td>
        <td>${esc(a.detail)}</td>
      </tr>`).join('');
  }

  function renderBars(id, list) {
    const max = list.length ? list[0].count : 1;
    $(id).innerHTML = list.map((x) => `
      <div class="bar-row"><button type="button" data-filter="${esc(x.key)}" title="Filter events">${esc(x.key)}</button>
      <div class="bar"><div style="width:${(100 * x.count / max).toFixed(1)}%"></div></div><span class="mono">${x.count}</span></div>`).join('') || '<p>None.</p>';
  }

  function renderEvents() {
    const q = $('filter').value.trim().toLowerCase();
    const onlyFail = $('only-fail').checked;
    const rows = events.filter((e) => {
      if (onlyFail && e.id !== 4625) return false;
      if (!q) return true;
      return [e.ip, e.user, String(e.id), L.reason(e), e.workstation].some((v) => v.toLowerCase().includes(q));
    });
    $('filter-label').textContent = `(${rows.length} of ${events.length})`;
    const name = { 4624: '✅ 4624', 4625: '❌ 4625', 4740: '🔒 4740' };
    $('events').innerHTML = rows.slice(0, 500).map((e) => `
      <tr><td class="mono">${fmt(e.t)}</td><td>${name[e.id]}</td><td class="mono">${esc(e.user)}</td><td class="mono">${esc(e.ip)}</td>
      <td>${esc(e.logonType ? `${e.logonType} ${L.LOGON_TYPES[e.logonType] || ''}` : '')}</td><td>${esc(e.id === 4625 ? L.reason(e) : '')}</td>
      <td class="mono">${esc(e.workstation)}</td></tr>`).join('') +
      (rows.length > 500 ? `<tr><td colspan="7">Showing first 500 rows; refine the filter.</td></tr>` : '');
  }

  function drawChart() {
    const canvas = $('chart');
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = 160;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);
    const buckets = L.timeline(events, 30);
    if (!buckets.length) return;
    const max = Math.max(1, ...buckets.map((b) => b.failures + b.successes));
    const pad = { l: 34, r: 8, t: 10, b: 22 };
    const bw = (w - pad.l - pad.r) / buckets.length;
    ctx.font = '11px ui-monospace, monospace';
    ctx.fillStyle = '#666';
    ctx.fillText(String(max), 4, pad.t + 8);
    ctx.fillText('0', 4, h - pad.b);
    buckets.forEach((b, i) => {
      const x = pad.l + i * bw;
      const fh = (b.failures / max) * (h - pad.t - pad.b);
      const sh = (b.successes / max) * (h - pad.t - pad.b);
      ctx.fillStyle = '#d62839';
      ctx.fillRect(x + 1, h - pad.b - fh, Math.max(1, bw - 2), fh);
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(x + 1, h - pad.b - fh - sh, Math.max(1, bw - 2), sh);
      if (i % Math.ceil(buckets.length / 8) === 0) { ctx.fillStyle = '#666'; ctx.fillText(fmtShort(b.t), x, h - 6); }
    });
  }

  function exportAlerts() {
    if (!result) return;
    const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const lines = [['Severity', 'Rule', 'SourceIP', 'Accounts', 'FirstSeenUTC', 'LastSeenUTC', 'Events', 'MITRE', 'Details'].map(q).join(',')];
    for (const a of result.alerts) {
      lines.push([a.severity, a.rule, a.ip, a.accounts.join(' '), fmt(a.first), fmt(a.last), a.count, a.mitre, a.detail].map(q).join(','));
    }
    const url = URL.createObjectURL(new Blob([lines.join('\r\n')], { type: 'text/csv' }));
    const link = Object.assign(document.createElement('a'), { href: url, download: 'logon-alerts.csv' });
    document.body.appendChild(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // ---- wiring ----
  $('load-sample').addEventListener('click', async () => {
    $('load-status').textContent = 'Loading sample…';
    try {
      const res = await fetch('sample-security-events.csv');
      if (!res.ok) throw new Error(res.status);
      load(await res.text(), 'SAMPLE DATA (synthetic)');
    } catch (err) {
      $('load-status').textContent = '⚠️ Could not load the sample file (' + err.message + ').';
    }
  });
  $('file').addEventListener('change', (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => load(String(reader.result), f.name);
    reader.readAsText(f);
  });
  $('analyze-paste').addEventListener('click', () => load($('paste').value, 'pasted CSV'));
  document.querySelectorAll('.thresholds input').forEach((i) => i.addEventListener('change', run));
  $('filter').addEventListener('input', renderEvents);
  $('only-fail').addEventListener('change', renderEvents);
  $('export').addEventListener('click', exportAlerts);
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-filter]');
    if (!t) return;
    $('filter').value = t.dataset.filter;
    renderEvents();
    if (t.tagName === 'BUTTON') $('events').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  window.addEventListener('resize', () => result && drawChart());
})();
