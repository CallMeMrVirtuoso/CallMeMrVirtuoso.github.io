/*
 * Tiny dependency-free syntax highlighter used by the project pages.
 * Supports JavaScript ("js"), PowerShell ("ps1"), Python ("py") and a plain-text fallback.
 * It tokenizes with one combined regular expression per language, escapes
 * everything as HTML, and wraps tokens in <span class="tok-*"> elements.
 */
(function () {
  'use strict';

  const escapeHtml = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const JS_KEYWORDS = new Set(('const let var function return if else for while do switch case break continue new class extends ' +
    'try catch finally throw typeof instanceof in of import export default from async await yield this null undefined true false').split(' '));

  const PS_KEYWORDS = new Set(('function param begin process end if elseif else foreach for while do until switch return break continue ' +
    'try catch finally throw trap filter in exit').split(' '));

  const PY_KEYWORDS = new Set(('def return if elif else for while in not and or is import from as with try except finally raise ' +
    'class lambda yield None True False pass break continue global').split(' '));

  // Each rule: [tokenClass, regexSource]. Order matters: earlier rules win.
  const RULES = {
    js: [
      ['com', String.raw`\/\*[\s\S]*?\*\/|\/\/[^\n]*`],
      ['str', String.raw`'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*"|` + '`(?:\\\\.|[^`\\\\])*`'],
      ['num', String.raw`\b(?:0x[0-9a-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b`],
      ['word', String.raw`[A-Za-z_$][\w$]*`],
      ['op', String.raw`=>|[=!<>]=?=?|&&|\|\||[+\-*/%?:]`],
    ],
    ps1: [
      ['com', String.raw`<#[\s\S]*?#>|#[^\n]*`],
      ['str', String.raw`@"[\s\S]*?\n"@|@'[\s\S]*?\n'@|"(?:` + '`' + String.raw`.|[^"` + '`' + String.raw`])*"|'(?:''|[^'])*'`],
      ['var', String.raw`\$(?:\{[^}]+\}|[\w:?]+)`],
      ['type', String.raw`\[[A-Za-z][\w.]*(?:\[\])?\]`],
      ['op', String.raw`-(?:eq|ne|gt|ge|lt|le|like|notlike|match|notmatch|contains|notcontains|in|notin|and|or|not|f|replace|split|join|is|isnot)\b`],
      ['num', String.raw`\b\d+(?:\.\d+)?\b`],
      ['word', String.raw`[A-Za-z_][\w-]*`],
    ],
    py: [
      ['str', String.raw`[rbfu]?(?:"""[\s\S]*?"""|'''[\s\S]*?''')`],
      ['com', String.raw`#[^\n]*`],
      ['str', String.raw`[rbfu]?(?:'(?:\\.|[^'\\\n])*'|"(?:\\.|[^"\\\n])*")`],
      ['num', String.raw`\b\d+(?:\.\d+)?\b`],
      ['word', String.raw`[A-Za-z_]\w*`],
    ],
  };

  function highlight(code, lang) {
    const rules = RULES[lang];
    if (!rules) return escapeHtml(code);
    const re = new RegExp(rules.map(([, src]) => `(${src})`).join('|'), 'g');
    let out = '';
    let last = 0;
    for (const m of code.matchAll(re)) {
      out += escapeHtml(code.slice(last, m.index));
      const idx = m.slice(1).findIndex((g) => g !== undefined);
      let cls = rules[idx][0];
      const text = m[0];
      if (cls === 'word') {
        const lower = text.toLowerCase();
        if (lang === 'js' && JS_KEYWORDS.has(text)) cls = 'kw';
        else if (lang === 'ps1' && PS_KEYWORDS.has(lower)) cls = 'kw';
        else if (lang === 'ps1' && /^[A-Za-z]+-[A-Za-z]+$/.test(text)) cls = 'fn'; // Verb-Noun cmdlets
        else if (lang === 'py' && PY_KEYWORDS.has(text)) cls = 'kw';
        else if ((lang === 'js' || lang === 'py') && code[m.index + text.length] === '(') cls = 'fn';
        else cls = null;
      }
      out += cls ? `<span class="tok-${cls}">${escapeHtml(text)}</span>` : escapeHtml(text);
      last = m.index + text.length;
    }
    out += escapeHtml(code.slice(last));
    return out;
  }

  // Wrap each line so CSS can draw line numbers.
  function withLineNumbers(html) {
    return html.split('\n').map((line, i) => `<span class="ln">${i + 1}</span>${line}`).join('\n');
  }

  /** Fetch a same-origin source file and render it highlighted into `pre`. */
  async function renderFile(pre, url, lang) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = (await res.text()).replace(/\r\n/g, '\n');
      pre.innerHTML = withLineNumbers(highlight(text, lang));
      return text;
    } catch (err) {
      pre.textContent = `Could not load ${url}: ${err.message}`;
      return null;
    }
  }

  window.Highlight = { highlight, withLineNumbers, renderFile, escapeHtml };
})();
