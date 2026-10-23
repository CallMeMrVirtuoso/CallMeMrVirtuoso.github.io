/* Code viewer: code.html?f=<project-slug>/<file>. Only files listed below can be shown. */
(function () {
  'use strict';
  const PROJECTS = {
    'password-checker': { name: 'Password Strength & Breach-Pattern Checker', files: ['analyzer.js', 'app.js', 'index.html', 'style.css'] },
    'log-analyzer': { name: 'Windows Security Log Analyzer', files: ['analyzer.js', 'app.js', 'Export-LogonEvents.ps1', 'generate_sample.py', 'index.html', 'sample-security-events.csv'] },
    'ad-hygiene-audit': { name: 'AD Account Hygiene Audit', files: ['Invoke-ADHygieneAudit.ps1', 'Test-WithMockData.ps1', 'README.md', 'example-output.csv'] },
    'subnet-calculator': { name: 'Subnet & VLAN Planner', files: ['subnet.js', 'app.js', 'index.html'] },
  };
  const LANG = { js: 'js', ps1: 'ps1', py: 'py' };
  const $ = (id) => document.getElementById(id);

  const f = new URLSearchParams(location.search).get('f') || '';
  const m = f.match(/^([a-z0-9-]+)\/([A-Za-z0-9._-]+)$/);
  const project = m && PROJECTS[m[1]];
  if (!project || !project.files.includes(m[2])) {
    $('title').textContent = 'File not found';
    $('subtitle').textContent = 'Pick a project from the list.';
    $('code').textContent = 'Unknown file.';
    $('download').hidden = true;
    return;
  }
  const [, slug, file] = m;
  document.title = `${file} · ${project.name} · Alex Smith`;
  $('title').textContent = file;
  $('subtitle').textContent = `Part of ${project.name}.`;
  $('project-link').href = `${slug}/`;
  $('download').href = `${slug}/${file}`;
  $('download').setAttribute('download', file);

  for (const name of project.files) {
    const a = document.createElement('a');
    a.href = `code.html?f=${slug}/${name}`;
    a.textContent = name;
    if (name === file) { a.className = 'active'; a.setAttribute('aria-current', 'page'); }
    $('files').appendChild(a);
  }

  const ext = file.split('.').pop().toLowerCase();
  window.Highlight.renderFile($('code'), `${slug}/${file}`, LANG[ext] || 'text').then((text) => {
    if (text !== null) $('meta').textContent = `${text.split('\n').length} lines · ${(new Blob([text]).size / 1024).toFixed(1)} KB`;
  });
})();
