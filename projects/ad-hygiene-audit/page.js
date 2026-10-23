/* AD audit project page: renders the script, usage, and example output. */
(function () {
  'use strict';
  const H = window.Highlight;
  const esc = H.escapeHtml;

  document.getElementById('usage').innerHTML = H.highlight(
    '# Whole domain, default thresholds\n.\\Invoke-ADHygieneAudit.ps1\n\n' +
    '# One OU, 60-day stale threshold\n.\\Invoke-ADHygieneAudit.ps1 -SearchBase "OU=Staff,DC=corp,DC=example" -StaleDays 60\n\n' +
    '# Privileged findings only\n.\\Invoke-ADHygieneAudit.ps1 -PassThru | Where-Object Privileged', 'ps1');

  H.renderFile(document.getElementById('source'), 'Invoke-ADHygieneAudit.ps1', 'ps1')
    .then((text) => text && document.getElementById('source').classList.add('loaded'));

  fetch('example-console-output.txt').then((r) => r.text()).then((t) => {
    document.getElementById('console').textContent = t.replace(/\r\n/g, '\n');
  });

  // Reuse the log analyzer's RFC 4180 CSV parser for the example CSV.
  fetch('example-output.csv').then((r) => r.text()).then((t) => {
    const [header, ...rows] = window.LogAnalyzer.parseCsv(t);
    const col = (name) => header.indexOf(name);
    document.getElementById('example').innerHTML = rows.map((r) => {
      const sev = r[col('Severity')].toLowerCase();
      return `<tr><td><span class="badge ${esc(sev)}">${esc(r[col('Severity')])}</span></td><td class="mono">${esc(r[col('Check')])}</td>` +
        `<td class="mono">${esc(r[col('SamAccountName')])}</td><td>${r[col('Privileged')] === 'True' ? '👑 yes' : ''}</td>` +
        `<td>${esc(r[col('Groups')])}</td><td>${esc(r[col('Detail')])}</td></tr>`;
    }).join('');
  });
})();
