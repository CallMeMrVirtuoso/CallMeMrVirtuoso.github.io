/*
 * Password Strength & Breach-Pattern Analyzer
 * ------------------------------------------------------------
 * Pure client-side logic: no network calls, nothing is stored.
 *
 * Idea (a simplified take on the approach used by tools like zxcvbn):
 *   1. Find "patterns" inside the password that attacker wordlists and
 *      mangling rules try early: common passwords, dictionary words
 *      (including leetspeak), keyboard walks, sequences, repeats,
 *      years/dates, and personal info supplied by the user.
 *   2. Give every pattern a rough guess count.
 *   3. Use dynamic programming to find the cheapest way to cover the
 *      whole password with patterns + brute-forced characters. That
 *      cheapest total is the estimated number of guesses.
 *
 * Estimates are approximate and are meant for education, not a guarantee.
 */
(function (global) {
  'use strict';

  /* ---------------- Embedded wordlists (small, illustrative) ---------------- */

  // Frequently seen passwords from public "most common passwords" lists.
  const COMMON_PASSWORDS = [
    '123456', 'password', '123456789', '12345678', '12345', 'qwerty', '1234567', '111111', '123123', 'abc123',
    'password1', '1234567890', 'iloveyou', '000000', 'qwerty123', '1q2w3e4r', 'admin', 'welcome', 'monkey', 'dragon',
    'letmein', 'football', 'baseball', 'sunshine', 'princess', 'master', 'shadow', 'superman', 'michael', 'trustno1',
    '654321', '666666', '121212', 'starwars', 'whatever', 'freedom', 'hello', 'charlie', 'login', 'passw0rd',
    'zaq12wsx', 'qwertyuiop', 'access', 'flower', 'loveme', 'batman', 'mustang', 'ninja', 'azerty', '7777777',
    '987654321', 'changeme', 'p@ssw0rd', 'welcome1', 'password123', 'admin123', 'root', 'toor', 'test', 'guest',
    'default', 'secret', 'pass', '1qaz2wsx', 'qazwsx', 'asdfgh', 'asdfghjkl', 'zxcvbnm', 'hunter2', 'killer',
    'jordan', 'hockey', 'ranger', 'buster', 'soccer', 'harley', 'tigger', 'pepper', 'cheese', 'computer',
    'internet', 'samsung', 'apple', 'google', 'summer', 'winter', 'spring', 'autumn', 'football1', 'iloveyou1',
    'qwerty1', 'password!', 'password12', 'abcd1234', 'aa123456', '11111111', '88888888', 'a1b2c3', 'temp123', 'letmein1',
  ];

  // Base words that rule-based cracking (word + capital + digits + symbol) starts from.
  const DICTIONARY = [
    'password', 'admin', 'welcome', 'letmein', 'dragon', 'monkey', 'football', 'baseball', 'basketball', 'soccer',
    'hockey', 'sunshine', 'princess', 'qwerty', 'iloveyou', 'master', 'shadow', 'superman', 'batman', 'starwars',
    'freedom', 'whatever', 'hello', 'secret', 'login', 'access', 'flower', 'computer', 'internet', 'security',
    'secure', 'network', 'server', 'office', 'company', 'manager', 'support', 'helpdesk', 'service', 'system',
    'windows', 'microsoft', 'google', 'apple', 'samsung', 'summer', 'winter', 'spring', 'autumn', 'fall',
    'january', 'february', 'march', 'april', 'june', 'july', 'august', 'september', 'october', 'november',
    'december', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'love', 'angel',
    'baby', 'family', 'friend', 'happy', 'lucky', 'money', 'music', 'pizza', 'coffee', 'chocolate',
    'cookie', 'cheese', 'orange', 'banana', 'purple', 'yellow', 'silver', 'golden', 'diamond', 'tiger',
    'lion', 'eagle', 'falcon', 'wolf', 'bear', 'killer', 'ninja', 'pirate', 'wizard', 'thunder',
    'michigan', 'detroit', 'america', 'london', 'paris', 'jesus', 'christ', 'god', 'mother', 'father',
    'sister', 'brother', 'michael', 'jennifer', 'jessica', 'ashley', 'daniel', 'david', 'james', 'robert',
    'john', 'charlie', 'jordan', 'thomas', 'matthew', 'andrew', 'joshua', 'chris', 'alex', 'smith',
    'test', 'guest', 'user', 'root', 'default', 'changeme', 'temp', 'pass', 'welcome', 'trustno',
  ];

  // Leetspeak substitutions to undo before dictionary lookup.
  const LEET = { '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '7': 't', '8': 'b', '9': 'g', '@': 'a', '$': 's', '!': 'i', '|': 'l', '+': 't' };

  // Keyboard paths (rows, reversed rows and common "column" walks).
  const KEYBOARD_WALKS = [
    '`1234567890-=', 'qwertyuiop[]\\', "asdfghjkl;'", 'zxcvbnm,./',
    '1qaz2wsx3edc4rfv5tgb6yhn7ujm8ik,9ol.0p;/', 'qazwsxedcrfvtgbyhnujmikolp', 'zaq1xsw2cde3vfr4bgt5nhy6mju7',
    '!qaz@wsx#edc$rfv%tgb', '!@#$%^&*()_+',
  ];

  const CHAR_CLASSES = [
    { name: 'lowercase letters', re: /[a-z]/, size: 26 },
    { name: 'uppercase letters', re: /[A-Z]/, size: 26 },
    { name: 'digits', re: /[0-9]/, size: 10 },
    { name: 'symbols', re: /[^a-zA-Z0-9]/, size: 33 },
  ];

  const COMMON_RANK = new Map(COMMON_PASSWORDS.map((p, i) => [p, i + 1]));
  const DICT_RANK = new Map(DICTIONARY.map((w, i) => [w, i + 1]));

  /* ---------------------------- Pattern finders ---------------------------- */

  const unleet = (s) => [...s.toLowerCase()].map((c) => LEET[c] || c).join('');

  // Extra guesses needed to try capitalisation variants of a word.
  function caseVariations(token) {
    if (token === token.toLowerCase()) return 1;
    if (/^[A-Z][^A-Z]*$/.test(token) || token === token.toUpperCase()) return 2; // "Word" or "WORD"
    let upper = 0;
    for (const c of token) if (c >= 'A' && c <= 'Z') upper++;
    return Math.min(2 ** token.length, 1 + upper * token.length * 4);
  }

  function findCommonPasswords(pw, add) {
    const whole = pw.toLowerCase();
    const rank = COMMON_RANK.get(whole) || COMMON_RANK.get(unleet(pw));
    if (rank) add(0, pw.length - 1, rank, 'common', 'Appears on common-password lists');
  }

  function findDictionaryWords(pw, add) {
    const lower = pw.toLowerCase();
    const plain = unleet(pw);
    for (let i = 0; i < pw.length; i++) {
      for (let j = i + 3; j < pw.length; j++) {
        // Try the raw lowercase slice first, then the de-leeted slice.
        const raw = lower.slice(i, j + 1);
        const sub = plain.slice(i, j + 1);
        const rank = DICT_RANK.get(raw) || DICT_RANK.get(sub);
        if (!rank) continue;
        const token = pw.slice(i, j + 1);
        const leeted = !DICT_RANK.has(raw);
        const guesses = rank * caseVariations(token) * (leeted ? 4 : 1);
        add(i, j, guesses, 'dictionary', leeted ? `Dictionary word with leetspeak ("${sub}")` : `Dictionary word ("${raw}")`);
      }
    }
  }

  function findKeyboardWalks(pw, add) {
    const lower = pw.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
      let best = 0;
      for (let j = i + 4; j <= lower.length; j++) {
        const slice = lower.slice(i, j);
        const rev = [...slice].reverse().join('');
        if (KEYBOARD_WALKS.some((w) => w.includes(slice) || w.includes(rev))) best = j;
      }
      if (best) add(i, best - 1, 40 * (best - i), 'keyboard', 'Keyboard walk');
    }
  }

  function findSequences(pw, add) {
    // Runs like "abc", "6789", "zyx" (step of +1 or -1 within letters or digits).
    let start = 0;
    for (let i = 1; i <= pw.length; i++) {
      const prev = pw.charCodeAt(i - 1), cur = pw.charCodeAt(i);
      const step = cur - prev;
      const sameKind = i < pw.length && /[a-z]/i.test(pw[i]) === /[a-z]/i.test(pw[i - 1]) && /[a-z0-9]/i.test(pw[i]);
      const dir = i - start >= 2 ? pw.charCodeAt(start + 1) - pw.charCodeAt(start) : step;
      if (i < pw.length && sameKind && Math.abs(step) === 1 && step === dir) continue;
      if (i - start >= 3) add(start, i - 1, 20 * (i - start), 'sequence', 'Alphabetic or numeric sequence');
      start = i;
    }
  }

  function findRepeats(pw, add) {
    for (const m of pw.matchAll(/(.+?)\1+/g)) {
      if (m[0].length < 3) continue;
      const unit = m[1];
      const count = m[0].length / unit.length;
      // Guess the repeated unit (brute force), then the number of repeats.
      const unitGuesses = Math.min(bruteForce(unit), 1e6);
      add(m.index, m.index + m[0].length - 1, unitGuesses * count, 'repeat', `Repeated "${unit.length === 1 ? 'character' : 'chunk'}"`);
    }
  }

  function findDates(pw, add) {
    for (const m of pw.matchAll(/(19|20)\d\d/g)) {
      const year = Number(m[0]);
      if (year >= 1900 && year <= 2039) add(m.index, m.index + 3, 140, 'year', 'Looks like a year');
    }
    // 6 or 8 digit dates such as 071590 or 07151990 (MMDDYY / MMDDYYYY / DDMMYYYY).
    for (const m of pw.matchAll(/\d{6,8}/g)) {
      const d = m[0];
      if (d.length === 6 || d.length === 8) {
        const a = Number(d.slice(0, 2)), b = Number(d.slice(2, 4));
        const looksLikeDate = (a >= 1 && a <= 12 && b >= 1 && b <= 31) || (b >= 1 && b <= 12 && a >= 1 && a <= 31);
        if (looksLikeDate) add(m.index, m.index + d.length - 1, 365 * 100, 'date', 'Looks like a date');
      }
    }
  }

  function findPersonalInfo(pw, personal, add) {
    const lower = pw.toLowerCase();
    const plain = unleet(pw);
    for (const raw of personal) {
      const word = raw.toLowerCase();
      if (word.length < 3) continue;
      for (const hay of [lower, plain]) {
        let idx = hay.indexOf(word);
        while (idx !== -1) {
          add(idx, idx + word.length - 1, 2 * caseVariations(pw.slice(idx, idx + word.length)), 'personal', `Contains your personal info ("${word}")`);
          idx = hay.indexOf(word, idx + 1);
        }
      }
    }
  }

  /* ------------------------------ Estimation ------------------------------- */

  function cardinality(pw) {
    return CHAR_CLASSES.reduce((sum, c) => sum + (c.re.test(pw) ? c.size : 0), 0) || 1;
  }
  function bruteForce(str) {
    return cardinality(str) ** str.length;
  }

  /**
   * Analyze a password.
   * @param {string} pw - the password (never leaves the page)
   * @param {string[]} [personal] - optional names/usernames to look for
   */
  function analyze(pw, personal = []) {
    const matches = [];
    const add = (i, j, guesses, type, label) => matches.push({ i, j, guesses: Math.max(1, guesses), type, label, token: pw.slice(i, j + 1) });

    if (pw) {
      findCommonPasswords(pw, add);
      findDictionaryWords(pw, add);
      findKeyboardWalks(pw, add);
      findSequences(pw, add);
      findRepeats(pw, add);
      findDates(pw, add);
      findPersonalInfo(pw, personal.filter(Boolean), add);
    }

    // Dynamic programming: cheapest way to "explain" the first k characters.
    const C = cardinality(pw);
    const n = pw.length;
    const best = new Array(n + 1).fill(Infinity);
    const via = new Array(n + 1).fill(null);
    best[0] = 1;
    for (let k = 1; k <= n; k++) {
      // Option A: brute force one more character.
      best[k] = best[k - 1] * C;
      via[k] = { bruteforce: true, i: k - 1 };
      // Option B: end a known pattern here.
      for (const m of matches) {
        if (m.j !== k - 1) continue;
        // Each extra segment costs a little (attackers must also guess the structure).
        const cost = best[m.i] * m.guesses * (m.i > 0 ? 2 : 1);
        if (cost < best[k]) { best[k] = cost; via[k] = m; }
      }
    }

    // Walk back to list the patterns that were actually used.
    const used = [];
    for (let k = n; k > 0;) {
      const step = via[k];
      if (step.bruteforce) { k -= 1; continue; }
      used.unshift(step);
      k = step.i;
    }

    const guesses = n ? best[n] : 0;
    const log10 = n ? Math.log10(guesses) : 0;
    let score = log10 < 3 ? 0 : log10 < 6 ? 1 : log10 < 8 ? 2 : log10 < 10 ? 3 : 4;
    if (n < 8) score = Math.min(score, 1); // short passwords are never "good"

    const classes = CHAR_CLASSES.filter((c) => c.re.test(pw)).map((c) => c.name);
    const has = (t) => matches.some((m) => m.type === t);
    const checks = [
      { ok: n >= 12, text: n >= 15 ? `Length ${n}: great (15+ characters)` : `Length ${n}: aim for at least 12, ideally 15+ characters` },
      { ok: classes.length >= 3 || n >= 16, text: `Character variety: ${classes.length ? classes.join(', ') : 'none'}` },
      { ok: !has('common'), text: 'Not on common-password lists' },
      { ok: !has('dictionary'), text: 'No dictionary words (including leetspeak like P@ssw0rd)' },
      { ok: !has('keyboard'), text: 'No keyboard walks (qwerty, 1qaz2wsx…)' },
      { ok: !has('sequence'), text: 'No sequences (abc, 1234, 9876…)' },
      { ok: !has('repeat'), text: 'No repeated characters or chunks' },
      { ok: !has('year') && !has('date'), text: 'No years or dates' },
      { ok: !has('personal'), text: 'No names or usernames you entered' },
    ];
    // "Season+Year" / "Word+digits+symbol" are classic corporate password-policy patterns.
    const policyPattern = /^[A-Za-z]+[0-9]{1,4}[!@#$%^&*?.]?$/.test(pw) && (has('dictionary') || has('common') || has('personal'));
    if (policyPattern) score = Math.min(score, 1); // first thing cracking rules try

    return { length: n, cardinality: C, guesses, log10, score, matches, used, checks, classes, policyPattern };
  }

  /* ----------------------------- Presentation ------------------------------ */

  const SCORE_LABELS = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'];

  // Human readable duration for an average attack: half the guess space at `perSecond`.
  function crackTime(guesses, perSecond) {
    const seconds = guesses / 2 / perSecond;
    if (seconds < 1) return 'instantly';
    const units = [['second', 60], ['minute', 60], ['hour', 24], ['day', 30.44], ['month', 12], ['year', 100]];
    let v = seconds;
    for (const [name, size] of units) {
      if (v < size) { const r = Math.round(v); return `${r} ${name}${r === 1 ? '' : 's'}`; }
      v /= size;
    }
    return v < 1000 ? `${Math.round(v)} centuries` : 'centuries+';
  }

  global.PasswordAnalyzer = { analyze, crackTime, SCORE_LABELS };
})(typeof window !== 'undefined' ? window : globalThis);
