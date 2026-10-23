/* Subnet & VLAN Planner: page UI (math lives in subnet.js). */
(function () {
  'use strict';
  const S = window.Subnet;
  const $ = (id) => document.getElementById(id);
  const ip = S.ipToString;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const COLORS = ['#7b5cff', '#00c2d1', '#ff5a5f', '#ffc93c', '#3ddc84', '#ff8fb1', '#2563eb', '#d97706'];

  // ---------- Calculator ----------
  function binaryWithSplit(n, prefix) {
    const bits = S.toBinary(n);
    let count = 0, out = '';
    for (const ch of bits) {
      if (ch === '.') { out += '.'; continue; }
      out += count < prefix ? `<span class="n">${ch}</span>` : ch;
      count++;
    }
    return out;
  }

  function renderCalc() {
    const parsed = S.parseCidr($('cidr').value);
    if (parsed.error) { $('calc-out').innerHTML = `<p class="err">⚠️ ${esc(parsed.error)}</p>`; return; }
    const i = S.subnetInfo(parsed.ip, parsed.prefix);
    const hostNote = i.prefix === 31 ? ' (point-to-point link, RFC 3021)' : i.prefix === 32 ? ' (single host)' : '';
    const rows = [
      ['Address', `${ip(i.ip)} (${i.type})`],
      ['Network', i.cidr],
      ['Subnet mask', `${ip(i.mask)} (/${i.prefix})`],
      ['Wildcard mask', ip(i.wildcard)],
      ['Broadcast', i.prefix >= 31 ? 'n/a' : ip(i.broadcast)],
      ['Usable host range', `${ip(i.first)} – ${ip(i.last)}`],
      ['Usable hosts', `${i.usable.toLocaleString()}${hostNote}`],
      ['Total addresses', i.total.toLocaleString()],
      ['Classful (legacy)', `Class ${i.cls}`],
    ];
    $('calc-out').innerHTML = `<div class="grid2"><dl class="kv">${rows.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
      <div><b style="font-size:14px">Binary</b> <span style="font-size:12px;color:#666">(network bits in bold)</span>
      <p class="mono bin">Address&nbsp;&nbsp; ${binaryWithSplit(i.ip, i.prefix)}<br>Mask&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${binaryWithSplit(i.mask, i.prefix)}<br>Network&nbsp;&nbsp; ${binaryWithSplit(i.network, i.prefix)}</p></div></div>`;
  }

  // ---------- VLSM planner ----------
  const DEFAULT_VLANS = [
    { vlan: 10, name: 'Staff', hosts: 200 },
    { vlan: 20, name: 'Voice', hosts: 100 },
    { vlan: 30, name: 'Printers', hosts: 25 },
    { vlan: 40, name: 'Guest-WiFi', hosts: 120 },
    { vlan: 99, name: 'Management', hosts: 10 },
  ];

  function addRow(v = { vlan: '', name: '', hosts: '' }) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><input type="number" min="1" max="4094" class="v-id" aria-label="VLAN ID"></td>
      <td><input type="text" class="v-name" maxlength="32" aria-label="VLAN name"></td>
      <td><input type="number" min="1" class="v-hosts" aria-label="Hosts needed"></td>
      <td><button class="btn ghost v-del" type="button" title="Remove" style="padding:4px 10px">✕</button></td>`;
    tr.querySelector('.v-id').value = v.vlan;
    tr.querySelector('.v-name').value = v.name;
    tr.querySelector('.v-hosts').value = v.hosts;
    tr.querySelector('.v-del').addEventListener('click', () => { tr.remove(); renderPlan(); });
    $('vlans').appendChild(tr);
  }

  function readVlans() {
    const out = [], errors = [];
    const ids = new Set();
    [...$('vlans').rows].forEach((tr, n) => {
      const vlan = Number(tr.querySelector('.v-id').value);
      const name = tr.querySelector('.v-name').value.trim() || `VLAN${vlan || n + 1}`;
      const hosts = Number(tr.querySelector('.v-hosts').value);
      if (!Number.isInteger(vlan) || vlan < 1 || vlan > 4094) errors.push(`Row ${n + 1}: VLAN ID must be 1–4094`);
      else if (ids.has(vlan)) errors.push(`Row ${n + 1}: duplicate VLAN ${vlan}`);
      if (!Number.isInteger(hosts) || hosts < 1) errors.push(`Row ${n + 1}: hosts must be a whole number ≥ 1`);
      ids.add(vlan);
      out.push({ vlan, name, hosts });
    });
    return { vlans: out, errors };
  }

  function iosConfig(plan) {
    // Convention used here: first usable address of each subnet is the default gateway (SVI).
    return plan.allocations.slice().sort((a, b) => a.vlan - b.vlan).map((a) =>
      `vlan ${a.vlan}\n name ${a.name.replace(/\s+/g, '_')}\n!\ninterface Vlan${a.vlan}\n description ${a.name} (${a.hosts} hosts needed, ${a.cidr})\n ip address ${ip(a.first)} ${ip(a.mask)}\n no shutdown\n!`
    ).join('\n');
  }

  function renderPlan() {
    const out = $('plan-out');
    const base = S.parseCidr($('base').value);
    if (base.error) { out.innerHTML = `<p class="err">⚠️ Address block: ${esc(base.error)}</p>`; return; }
    const { vlans, errors } = readVlans();
    if (!vlans.length) { out.innerHTML = '<p>Add at least one VLAN.</p>'; return; }
    if (errors.length) { out.innerHTML = errors.map((e) => `<p class="err">⚠️ ${esc(e)}</p>`).join(''); return; }
    const plan = S.planVlsm(base.ip, base.prefix, vlans);
    if (plan.error) { out.innerHTML = `<p class="err">⚠️ ${esc(plan.error)}</p>`; return; }

    const aligned = ip(plan.base.network) !== ip(base.ip) ? `<p class="note">ℹ️ ${esc(ip(base.ip))} is inside ${esc(plan.base.cidr)}; planning from the network address.</p>` : '';
    const bar = plan.allocations.map((a, i) => `<div title="VLAN ${a.vlan} ${esc(a.name)} ${a.cidr}" style="width:${(100 * a.total / plan.base.total).toFixed(3)}%;background:${COLORS[i % COLORS.length]}"></div>`).join('');
    out.innerHTML = `${aligned}
      <p style="margin:0">Block <b class="mono">${esc(plan.base.cidr)}</b>: ${plan.used.toLocaleString()} of ${plan.base.total.toLocaleString()} addresses allocated
      (${(100 * plan.used / plan.base.total).toFixed(1)}%). ${plan.nextFree ? `Next free address: <span class="mono">${plan.nextFree}</span>.` : 'Block fully used.'}</p>
      <div class="usage" aria-hidden="true">${bar}</div>
      <div class="table-scroll" style="max-height:none"><table><thead><tr><th>VLAN</th><th>Name</th><th>Needed</th><th>Subnet</th><th>Mask</th><th>Gateway</th><th>Usable range</th><th>Broadcast</th><th>Usable</th><th>Spare</th></tr></thead><tbody>
      ${plan.allocations.map((a, i) => `<tr><td><span class="badge" style="background:${COLORS[i % COLORS.length]}">${a.vlan}</span></td><td>${esc(a.name)}</td><td>${a.hosts}</td>
        <td class="mono">${a.cidr}</td><td class="mono">${ip(a.mask)}</td><td class="mono">${ip(a.first)}</td><td class="mono">${ip(a.first)} – ${ip(a.last)}</td>
        <td class="mono">${ip(a.broadcast)}</td><td>${a.usable}</td><td>${a.spare}</td></tr>`).join('')}
      </tbody></table></div>
      <p style="font-size:13px;color:#555">Largest subnets are placed first so every block lands on its natural boundary. Gateway = first usable address (a common convention; adjust to your standard).</p>
      <h3>Cisco IOS-style config (review before use)</h3>
      <pre class="code" id="ios"></pre>
      <div class="row" style="margin-top:8px"><button class="btn ghost" id="copy-ios" type="button">Copy config</button><span id="copy-status" class="mono"></span></div>`;
    $('ios').textContent = iosConfig(plan);
    $('copy-ios').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText($('ios').textContent); $('copy-status').textContent = 'Copied ✓'; }
      catch { $('copy-status').textContent = 'Select the text and copy manually'; }
    });
  }

  $('cidr').addEventListener('input', renderCalc);
  $('add').addEventListener('click', () => addRow());
  $('plan').addEventListener('click', renderPlan);
  $('base').addEventListener('change', renderPlan);
  $('vlans').addEventListener('change', renderPlan);
  DEFAULT_VLANS.forEach(addRow);
  renderCalc();
  renderPlan();
})();
