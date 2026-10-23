/* UI wiring for the password checker. All analysis lives in analyzer.js. */
(function () {
  'use strict';
  const A = window.PasswordAnalyzer;
  const $ = (id) => document.getElementById(id);
  const pw = $('pw'), personal = $('personal');
  const COLORS = ['#d62839', '#f97316', '#eab308', '#22c55e', '#15803d'];
  let showing = false;

  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const mask = (s) => (showing ? s : '•'.repeat(s.length));
  const fmtGuesses = (g) => (g < 1e4 ? Math.round(g).toLocaleString() : `≈ 10^${Math.log10(g).toFixed(1)}`);

  function render() {
    const value = pw.value;
    const names = personal.value.split(/[\s,;]+/).filter(Boolean);
    if (!value) {
      $('score-label').textContent = 'Start typing…';
      $('entropy').textContent = '';
      $('meter').style.width = '0';
      $('times').innerHTML = '';
      $('policy').hidden = true;
      $('checks').innerHTML = '<li class="fail">Enter a password to begin</li>';
      $('patterns').innerHTML = '<tr><td colspan="3">None yet.</td></tr>';
      return;
    }
    const r = A.analyze(value, names);
    $('score-label').textContent = `${A.SCORE_LABELS[r.score]} (${r.score}/4)`;
    $('score-label').style.color = COLORS[r.score];
    $('entropy').textContent = `guesses ${fmtGuesses(r.guesses)}`;
    $('meter').style.width = `${(r.score + 1) * 20}%`;
    $('meter').style.background = COLORS[r.score];
    $('times').innerHTML =
      `<div><span>Offline, fast hash (10B/s)</span><b>${A.crackTime(r.guesses, 1e10)}</b></div>` +
      `<div><span>Online, rate-limited (10/s)</span><b>${A.crackTime(r.guesses, 10)}</b></div>`;
    $('policy').hidden = !r.policyPattern;
    $('checks').innerHTML = r.checks.map((c) => `<li class="${c.ok ? 'pass' : 'fail'}">${esc(c.text)}</li>`).join('');
    $('patterns').innerHTML = r.used.length
      ? r.used.map((m) => `<tr><td class="mono">${esc(mask(m.token))}</td><td>${esc(m.label)}</td><td class="mono">${fmtGuesses(m.guesses)}</td></tr>`).join('')
      : '<tr><td colspan="3">No known patterns: the estimate is pure brute force over the character set.</td></tr>';
  }

  pw.addEventListener('input', render);
  personal.addEventListener('input', render);
  $('toggle').addEventListener('click', () => {
    showing = !showing;
    pw.type = showing ? 'text' : 'password';
    $('toggle').textContent = showing ? 'Hide' : 'Show';
    $('toggle').setAttribute('aria-pressed', String(showing));
    render();
  });

  /* ------------- Random password generator (CSPRNG, unbiased) ------------- */
  const CHARSET = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*-_=+?';
  function randomIndex(max) {
    // Rejection sampling: discard values that would bias the modulo.
    const limit = Math.floor(256 / max) * max;
    const buf = new Uint8Array(1);
    do crypto.getRandomValues(buf); while (buf[0] >= limit);
    return buf[0] % max;
  }
  function generate(length) {
    let out = '';
    for (let i = 0; i < length; i++) out += CHARSET[randomIndex(CHARSET.length)];
    return out;
  }
  $('gen').addEventListener('click', () => {
    const len = Math.max(12, Math.min(64, Number($('len').value) || 20));
    $('len').value = len;
    $('generated').value = generate(len);
    $('copy-status').textContent = '';
  });
  $('copy').addEventListener('click', async () => {
    if (!$('generated').value) return;
    try { await navigator.clipboard.writeText($('generated').value); $('copy-status').textContent = 'Copied ✓'; }
    catch { $('generated').select(); $('copy-status').textContent = 'Press Ctrl+C to copy'; }
  });
  $('test-gen').addEventListener('click', () => { if ($('generated').value) { pw.value = $('generated').value; render(); } });

  $('gen').click();
})();
