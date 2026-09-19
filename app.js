'use strict';

/* ---------------------------------------------------------------------
 * DATA — de zes opdrachten, in de volgorde waarin ze gespeeld worden.
 * ------------------------------------------------------------------- */

var PUZZLES = [
  {
    id: 'broos',
    eyebrow: 'Opdracht 1',
    title: 'Twee wedstrijdbladen',
    blocks: [
      { type: 'text', value: 'Twee wedstrijden. Zeven jaar verschil.' },
      { type: 'mono', value: '05.02.2017 — Libreville\nCMR  2 — 1  EGY' },
      { type: 'mono', value: '10.02.2024 — Abidjan\nRSA  0 — 0  COD\n         (6 — 5 na strafschoppen)' },
      { type: 'text', value: 'Eén achternaam verbindt beide wedstrijdbladen.\nWe zoeken geen speler.' }
    ],
    question: 'Welke achternaam?',
    aliases: ['BROOS', 'HUGOBROOS'],
    canonical: 'BROOS',
    hints: [
      'Zoek niet alleen naar wie er op het veld stond.',
      'De persoon die je zoekt had bij beide wedstrijden een andere nationale ploeg onder zijn hoede.'
    ],
    hint2DelayMin: 4
  },
  {
    id: 'jette',
    eyebrow: 'Opdracht 2',
    title: '24 jaar',
    blocks: [
      { type: 'text', value: 'Wat hebben deze vier gegevens met elkaar te maken?' },
      { type: 'mono', value: '1930 → 1954\nGEORGETTE\n135\nATELIER ACHTER IN DE TUIN' },
      { type: 'text', value: 'Ze leiden naar één plaats in Brussel.' }
    ],
    question: 'Welke plaats zoeken we?',
    aliases: ['JETTE'],
    canonical: 'JETTE',
    hints: [
      'Bij 135 ontbreekt iets wat normaal op een envelop staat.',
      'Georgette woonde hier samen met een zeer bekende Belgische kunstenaar.'
    ],
    hint2DelayMin: 3
  },
  {
    id: 'simon',
    eyebrow: 'Opdracht 3',
    title: 'Voor de smartphone',
    blocks: [
      { type: 'mono', value: '7777   444   6   666   66' },
      { type: 'text', value: 'Meer krijg je niet. Of toch:' },
      { type: 'mono', value: 'NOKIA — voorspellende tekst uit\nGEEN T9' }
    ],
    question: 'Welk woord staat hierboven?',
    aliases: ['SIMON'],
    canonical: 'SIMON',
    hints: [
      'Een moderne smartphone is voor deze opdracht eigenlijk te modern.',
      'Hoe stuurde je twintig jaar geleden een sms wanneer je voorspellende tekst uitschakelde? Elke toets heeft meerdere letters — je drukt hem net zo vaak in als de letter er staat.'
    ],
    hint2DelayMin: 2
  },
  {
    id: 'vaf',
    eyebrow: 'Opdracht 4',
    title: 'Drie takken, één stam',
    blocks: [
      { type: 'mono', value: 'FILM\nMEDIA\nGAME' },
      { type: 'text', value: 'en:' },
      { type: 'mono', value: 'Bischoffsheimlaan 38\n1000 Brussel' },
      { type: 'text', value: 'De drie woorden hierboven kunnen elk gevolgd worden door hetzelfde woord:\nFilm_____ · Media_____ · Game_____\n\nMaar we zoeken niet dat gemeenschappelijke woord. We zoeken de drie letters van de organisatie waar deze drie onderdelen onder vallen.' }
    ],
    question: 'Welke drie letters?',
    aliases: ['VAF'],
    canonical: 'VAF',
    hints: [
      'Het adres is waarschijnlijk nuttiger dan de drie woorden.',
      'De organisatie ondersteunt audiovisuele projecten in Vlaanderen: film, media én games.'
    ],
    hint2DelayMin: 3
  },
  {
    id: 'duivel',
    eyebrow: 'Opdracht 5',
    title: '1844',
    blocks: [
      { type: 'mono', value: '− · ·     · · −     · ·     · · · −     ·     · − · ·' },
      { type: 'text', value: 'Daaronder staat slechts:' },
      { type: 'mono', value: '24 MEI 1844\nWASHINGTON → BALTIMORE' }
    ],
    question: 'Welk Nederlands woord staat gecodeerd?',
    aliases: ['DUIVEL'],
    canonical: 'DUIVEL',
    hints: [
      'De datum verwijst naar een beroemd bericht.',
      'Punten en strepen zijn hier belangrijker dan letters — denk aan morse.'
    ],
    hint2DelayMin: 2
  },
  {
    id: 'powell',
    eyebrow: 'Opdracht 6',
    title: 'Een eiland en een boek',
    blocks: [
      { type: 'mono', value: '1907\nBROWNSEA ISLAND\n20 JONGENS' },
      { type: 'text', value: 'en:' },
      { type: 'mono', value: '1908\nEEN BOEK\nEEN WERELDWIJDE BEWEGING' },
      { type: 'text', value: 'Eén persoon verbindt beide blokken.\nZijn familienaam bestaat uit twee delen met een koppelteken.\nWij zoeken uitsluitend het tweede deel.' }
    ],
    question: 'We zoeken het 2de deel.',
    aliases: ['POWELL', 'BADENPOWELL'],
    canonical: 'POWELL',
    hints: [
      'Het experiment op het eiland was het begin van iets dat vandaag nog bestaat.',
      'Denk aan een jeugdbeweging: scouting.'
    ],
    hint2DelayMin: 4
  }
];

var PUZZLE_BY_ID = {};
PUZZLES.forEach(function (p) { PUZZLE_BY_ID[p.id] = p; });

/* Finale: zes naamkaartjes, getoond in "tafel"-volgorde (niet de oplos-volgorde) */
var FINALE_CARDS = [
  { id: 'oude-gsm',       label: 'OUDE GSM',       roman: 'II',  letterIndex: 2, puzzleId: 'simon' },
  { id: 'brownsea',       label: 'BROWNSEA',       roman: 'VI',  letterIndex: 6, puzzleId: 'powell' },
  { id: 'libreville',     label: 'LIBREVILLE',     roman: 'III', letterIndex: 3, puzzleId: 'broos' },
  { id: 'bischoffsheim',  label: 'BISCHOFFSHEIM',  roman: 'I',   letterIndex: 1, puzzleId: 'vaf' },
  { id: 'georgette',      label: 'GEORGETTE',      roman: 'V',   letterIndex: 5, puzzleId: 'jette' },
  { id: '1844',           label: '1844',           roman: 'II',  letterIndex: 2, puzzleId: 'duivel' }
];
var FINALE_CARD_BY_ID = {};
FINALE_CARDS.forEach(function (c) { FINALE_CARD_BY_ID[c.id] = c; });

var FINALE_SOLUTION_ORDER = ['oude-gsm', 'brownsea', 'libreville', 'bischoffsheim', 'georgette', '1844'];

var ORDER_CLUES = [
  'Eerst wie bij naam werd genoemd.',
  'Daarna de man van het eiland.',
  'Dan de man langs het veld.',
  'Vervolgens de drie letters uit Brussel.',
  'Daarna de plaats van de schilder.',
  'En als laatste wat in punten en strepen verborgen zat.'
];

var FINAL_CODE = 'ILOVEU';

/* ---------------------------------------------------------------------
 * STATE
 * ------------------------------------------------------------------- */

var STORAGE_KEY = 'schattenjacht_state_v1';
var storageAvailable = true;

function makeDefaultState() {
  return {
    step: 0, /* 0..5 = puzzel index, 6 = finale, 7 = klaar */
    answers: {}, /* puzzleId -> canonical answer */
    hintsOpened: {}, /* puzzleId -> [bool, bool] */
    puzzleStartTimes: {}, /* puzzleId -> timestamp */
    gameStartTime: null,
    finishTime: null,
    finalePlacement: [], /* array van card-ids */
    finaleRevealed: false,
    finaleDirectMode: false,
    finaleCardOrder: [] /* geschudde weergave-volgorde van de kaartjes op "tafel" */
  };
}

function shuffledArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function ensureFinaleCardOrder() {
  if (state.finaleCardOrder && state.finaleCardOrder.length === FINALE_CARDS.length) return;
  var ids = FINALE_CARDS.map(function (c) { return c.id; });
  var shuffled = shuffledArray(ids);
  /* voorkom (zeldzame) toevallige gelijkenis met de oplos-volgorde, dat zou de puzzel triviaal maken */
  var attempts = 0;
  while (shuffled.every(function (id, i) { return id === FINALE_SOLUTION_ORDER[i]; }) && attempts < 10) {
    shuffled = shuffledArray(ids);
    attempts++;
  }
  state.finaleCardOrder = shuffled;
  saveState();
}

var state = loadState();

function loadState() {
  try {
    var raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return makeDefaultState();
    var parsed = JSON.parse(raw);
    var fresh = makeDefaultState();
    for (var k in fresh) {
      if (parsed.hasOwnProperty(k)) fresh[k] = parsed[k];
    }
    return fresh;
  } catch (e) {
    storageAvailable = false;
    return makeDefaultState();
  }
}

function saveState() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    storageAvailable = false;
  }
}

function resetGame() {
  state = makeDefaultState();
  saveState();
  render();
}

/* ---------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------- */

function normalize(str) {
  return String(str || '')
    .toUpperCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Z0-9]/g, '');
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function renderTextWithBreaks(text) {
  return escapeHtml(text).replace(/\n/g, '<br>');
}

function formatDuration(ms) {
  var totalSec = Math.max(0, Math.floor(ms / 1000));
  var h = Math.floor(totalSec / 3600);
  var m = Math.floor((totalSec % 3600) / 60);
  var s = totalSec % 60;
  var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
  if (h > 0) return h + ':' + pad(m) + ':' + pad(s);
  return m + ':' + pad(s);
}

function ensurePuzzleStartTime(id) {
  if (!state.puzzleStartTimes[id]) {
    state.puzzleStartTimes[id] = Date.now();
    saveState();
  }
}

function el(html) {
  var d = document.createElement('div');
  d.innerHTML = html.trim();
  return d.firstChild;
}

/* ---------------------------------------------------------------------
 * RENDER — topbar / progress
 * ------------------------------------------------------------------- */

var screenEl = document.getElementById('screen');
var topbarEl = document.getElementById('topbar');
var progressEl = document.getElementById('progress');
var menuBtn = document.getElementById('menu-btn');
var modalBackdrop = document.getElementById('modal-backdrop');
var modalEl = document.getElementById('modal');

var hint2Timers = [];

function clearHint2Timers() {
  hint2Timers.forEach(function (t) { clearInterval(t); });
  hint2Timers = [];
}

function renderTopbar() {
  if (!state.gameStartTime) {
    topbarEl.hidden = true;
    return;
  }
  topbarEl.hidden = false;
  var dots = '';
  PUZZLES.forEach(function (p, i) {
    var solved = state.answers.hasOwnProperty(p.id);
    var current = state.step === i;
    var cls = 'dot' + (solved ? ' solved' : '') + (current ? ' current' : '');
    var disabled = solved ? '' : 'disabled';
    dots += '<button class="' + cls + '" data-review="' + p.id + '" ' + disabled +
      ' aria-label="Opdracht ' + (i + 1) + (solved ? ' (opgelost)' : ' (nog niet bereikt)') + '">' + (i + 1) + '</button>';
  });
  var finaleSolved = state.step === 7;
  var finaleCurrent = state.step === 6;
  var finaleDisabled = state.step < 6 ? 'disabled' : '';
  dots += '<button class="dot' + (finaleSolved ? ' solved' : '') + (finaleCurrent ? ' current' : '') + '" data-goto-finale ' + finaleDisabled + ' aria-label="Finale">🔒</button>';
  progressEl.innerHTML = dots;
}

/* ---------------------------------------------------------------------
 * RENDER — intro
 * ------------------------------------------------------------------- */

function renderIntro() {
  screenEl.innerHTML =
    '<div class="screen-center">' +
      '<div style="font-size:3.2rem">🗺️</div>' +
      '<h1>De Schattenjacht</h1>' +
      '<p class="subtitle">Zes opdrachten. Zes letters. Eén codewoord voor de kist.<br>' +
      'Los ze op in je eigen tempo — hints staan klaar, maar je krijgt ze pas als je erom vraagt.</p>' +
      '<button class="btn" id="start-btn">' + (Object.keys(state.answers).length > 0 || state.step > 0 ? 'Verdergaan' : 'Start het spel') + '</button>' +
      (Object.keys(state.answers).length > 0 ? '<button class="btn ghost" id="restart-from-intro">Opnieuw beginnen</button>' : '') +
    '</div>';

  document.getElementById('start-btn').addEventListener('click', function () {
    if (!state.gameStartTime) {
      state.gameStartTime = Date.now();
      saveState();
    }
    render();
  });
  var restartBtn = document.getElementById('restart-from-intro');
  if (restartBtn) {
    restartBtn.addEventListener('click', function () {
      openConfirmReset();
    });
  }
}

/* ---------------------------------------------------------------------
 * RENDER — puzzel
 * ------------------------------------------------------------------- */

function renderPuzzle(index, opts) {
  opts = opts || {};
  var puzzle = PUZZLES[index];
  ensurePuzzleStartTime(puzzle.id);

  var opened = state.hintsOpened[puzzle.id] || [false, false];

  var blocksHtml = puzzle.blocks.map(function (b) {
    if (b.type === 'mono') return '<div class="clue-block">' + renderTextWithBreaks(b.value) + '</div>';
    return '<p class="clue-text">' + renderTextWithBreaks(b.value) + '</p>';
  }).join('');

  var startedAt = state.puzzleStartTimes[puzzle.id];
  var hint2UnlockAt = startedAt + puzzle.hint2DelayMin * 60000;

  screenEl.innerHTML =
    '<div class="card">' +
      '<div class="puzzle-eyebrow">' + escapeHtml(puzzle.eyebrow) + '</div>' +
      '<h2 class="puzzle-title">' + escapeHtml(puzzle.title) + '</h2>' +
      blocksHtml +
      '<div class="question">' + escapeHtml(puzzle.question) + '</div>' +
      '<form class="answer-form" id="answer-form" autocomplete="off">' +
        '<input type="text" id="answer-input" placeholder="Jouw antwoord" autocapitalize="characters" autocorrect="off" spellcheck="false" aria-label="Jouw antwoord">' +
        '<div class="feedback" id="feedback" aria-live="polite"></div>' +
        '<button type="submit" class="btn">Controleer</button>' +
      '</form>' +
      '<div class="hints-area" id="hints-area"></div>' +
    '</div>';

  renderHints(puzzle, opened, hint2UnlockAt);

  var form = document.getElementById('answer-form');
  var input = document.getElementById('answer-input');
  var feedback = document.getElementById('feedback');

  if (opts.flash) {
    feedback.textContent = opts.flash.msg;
    feedback.className = 'feedback ' + opts.flash.cls;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var raw = input.value;
    var norm = normalize(raw);
    if (!norm) {
      feedback.textContent = 'Vul eerst een antwoord in.';
      feedback.className = 'feedback err';
      return;
    }
    if (puzzle.aliases.indexOf(norm) !== -1) {
      state.answers[puzzle.id] = puzzle.canonical;
      state.step = index + 1;
      saveState();
      render();
    } else {
      feedback.textContent = 'Nog niet juist. Probeer opnieuw.';
      feedback.className = 'feedback err';
      input.classList.remove('error');
      void input.offsetWidth; /* restart animation */
      input.classList.add('error');
      input.select();
    }
  });

  input.addEventListener('input', function () {
    input.classList.remove('error');
  });
}

function renderHints(puzzle, opened, hint2UnlockAt) {
  var area = document.getElementById('hints-area');
  var html = '';

  if (!opened[0]) {
    html += '<button class="hint-btn" data-hint="0">💡 Hint 1 tonen</button>';
  } else {
    html += '<div class="hint-revealed">💡 ' + escapeHtml(puzzle.hints[0]) + '</div>';
  }

  var now = Date.now();
  if (opened[0]) {
    if (!opened[1]) {
      if (now >= hint2UnlockAt) {
        html += '<button class="hint-btn" data-hint="1">💡 Hint 2 tonen</button>';
      } else {
        html += '<button class="hint-btn" id="hint2-locked" disabled>💡 Hint 2 beschikbaar over <span id="hint2-countdown">' + formatDuration(hint2UnlockAt - now) + '</span></button>';
      }
    } else {
      html += '<div class="hint-revealed">💡 ' + escapeHtml(puzzle.hints[1]) + '</div>';
    }
  }

  area.innerHTML = html;

  var b0 = area.querySelector('[data-hint="0"]');
  if (b0) b0.addEventListener('click', function () {
    var arr = state.hintsOpened[puzzle.id] || [false, false];
    arr[0] = true;
    state.hintsOpened[puzzle.id] = arr;
    saveState();
    renderHints(puzzle, arr, hint2UnlockAt);
  });

  var b1 = area.querySelector('[data-hint="1"]');
  if (b1) b1.addEventListener('click', function () {
    var arr = state.hintsOpened[puzzle.id] || [false, false];
    arr[1] = true;
    state.hintsOpened[puzzle.id] = arr;
    saveState();
    renderHints(puzzle, arr, hint2UnlockAt);
  });

  var countdown = document.getElementById('hint2-countdown');
  if (countdown) {
    var t = setInterval(function () {
      var remaining = hint2UnlockAt - Date.now();
      if (remaining <= 0) {
        clearInterval(t);
        renderHints(puzzle, opened, hint2UnlockAt);
      } else {
        var c = document.getElementById('hint2-countdown');
        if (c) c.textContent = formatDuration(remaining);
        else clearInterval(t);
      }
    }, 1000);
    hint2Timers.push(t);
  }
}

/* ---------------------------------------------------------------------
 * RENDER — review (read-only) modal voor een opgeloste opdracht
 * ------------------------------------------------------------------- */

function openReview(puzzleId) {
  var puzzle = PUZZLE_BY_ID[puzzleId];
  if (!puzzle || !state.answers.hasOwnProperty(puzzleId)) return;
  var opened = state.hintsOpened[puzzleId] || [false, false];

  var blocksHtml = puzzle.blocks.map(function (b) {
    if (b.type === 'mono') return '<div class="clue-block">' + renderTextWithBreaks(b.value) + '</div>';
    return '<p class="clue-text">' + renderTextWithBreaks(b.value) + '</p>';
  }).join('');

  var hintsHtml = '';
  if (opened[0]) hintsHtml += '<div class="hint-revealed">💡 ' + escapeHtml(puzzle.hints[0]) + '</div>';
  if (opened[1]) hintsHtml += '<div class="hint-revealed" style="margin-top:6px">💡 ' + escapeHtml(puzzle.hints[1]) + '</div>';

  modalEl.innerHTML =
    '<div class="puzzle-eyebrow">' + escapeHtml(puzzle.eyebrow) + ' — opgelost</div>' +
    '<h3>' + escapeHtml(puzzle.title) + '</h3>' +
    blocksHtml +
    '<div class="question">' + escapeHtml(puzzle.question) + '</div>' +
    '<p><strong>Jouw antwoord:</strong> ' + escapeHtml(state.answers[puzzleId]) + '</p>' +
    (hintsHtml ? '<div class="hints-area">' + hintsHtml + '</div>' : '') +
    '<div class="btn-row"><button class="btn secondary" id="close-modal">Sluiten</button></div>';

  modalBackdrop.hidden = false;
  document.getElementById('close-modal').addEventListener('click', closeModal);
}

function closeModal() {
  modalBackdrop.hidden = true;
  modalEl.innerHTML = '';
}

function openConfirmReset() {
  modalEl.innerHTML =
    '<h3>Spel herstarten?</h3>' +
    '<p>Al je antwoorden en voortgang worden gewist. Dit kan niet ongedaan gemaakt worden.</p>' +
    '<div class="btn-row">' +
      '<button class="btn secondary" id="cancel-reset">Annuleren</button>' +
      '<button class="btn" id="confirm-reset" style="background:linear-gradient(180deg,#e07a72,#b8433c)">Ja, herstart</button>' +
    '</div>';
  modalBackdrop.hidden = false;
  document.getElementById('cancel-reset').addEventListener('click', closeModal);
  document.getElementById('confirm-reset').addEventListener('click', function () {
    closeModal();
    resetGame();
  });
}

function openAbout() {
  modalEl.innerHTML =
    '<h3>Over dit spel</h3>' +
    '<p>Zes opdrachten leveren elk één woord op. Van elk woord neem je later, in de finale, precies één letter — samen vormen ze het codewoord van de kist.</p>' +
    '<p class="small-note">Je voortgang wordt lokaal op dit toestel bewaard' + (storageAvailable ? '' : ' — al lukte dat in deze browser niet, dus voortgang gaat verloren bij het herladen') + '.</p>' +
    '<div class="btn-row">' +
      '<button class="btn secondary" id="close-about">Sluiten</button>' +
      '<button class="btn ghost" id="reset-from-about">Spel herstarten</button>' +
    '</div>';
  modalBackdrop.hidden = false;
  document.getElementById('close-about').addEventListener('click', closeModal);
  document.getElementById('reset-from-about').addEventListener('click', function () {
    closeModal();
    openConfirmReset();
  });
}

/* ---------------------------------------------------------------------
 * RENDER — finale
 * ------------------------------------------------------------------- */

function renderFinale() {
  if (state.finaleDirectMode) {
    renderFinaleDirect();
    return;
  }

  ensureFinaleCardOrder();

  var placement = state.finalePlacement || [];
  var placedSet = {};
  placement.forEach(function (id) { placedSet[id] = true; });

  var tray = state.finaleCardOrder.map(function (id) {
    var c = FINALE_CARD_BY_ID[id];
    var placed = !!placedSet[c.id];
    return '<button class="name-card' + (placed ? ' placed' : '') + '" data-card="' + c.id + '" ' + (placed ? 'disabled' : '') + '>' +
      escapeHtml(c.label) + '<span class="roman">' + c.roman + '</span></button>';
  }).join('');

  var slots = '';
  for (var i = 0; i < 6; i++) {
    var cardId = placement[i];
    var card = cardId ? FINALE_CARD_BY_ID[cardId] : null;
    var slotDisabled = !card || state.finaleRevealed;
    slots += '<button class="slot' + (card ? ' filled' : '') + '" data-slot="' + i + '" ' + (slotDisabled ? 'disabled' : '') + '>' +
      '<span class="slot-num">' + (i + 1) + '</span>' + (card ? escapeHtml(card.roman) : '') +
      '</button>';
  }

  var cluesHtml = '<ol>' + ORDER_CLUES.map(function (c) { return '<li>' + escapeHtml(c) + '</li>'; }).join('') + '</ol>';

  var allPlaced = placement.length === 6;

  screenEl.innerHTML =
    '<div class="card">' +
      '<div class="puzzle-eyebrow">Finale</div>' +
      '<h2 class="puzzle-title">Zes antwoorden, zes stoelen</h2>' +
      '<p class="clue-text">Elk kaartje verwijst naar precies één van je zes antwoorden. Het Romeinse cijfer vertelt welke letter je uit dat antwoord moet nemen. Maar eerst: in welke volgorde lees je ze?</p>' +
      '<div class="finale-clues"><strong>Op de achterkant van de kaartjes staat:</strong>' + cluesHtml + '</div>' +
      '<p class="clue-text">Tik de kaartjes in de juiste volgorde aan.</p>' +
      '<div class="card-tray">' + tray + '</div>' +
      '<div class="slot-row">' + slots + '</div>' +
      '<div class="feedback" id="finale-feedback" aria-live="polite"></div>' +
      '<div class="btn-row section-gap">' +
        '<button class="btn" id="check-order-btn" ' + (allPlaced ? '' : 'disabled') + '>Controleer volgorde</button>' +
        '<button class="btn ghost" id="clear-order-btn"' + (placement.length ? '' : ' disabled') + '>Opnieuw leggen</button>' +
      '</div>' +
      '<button class="btn ghost" id="direct-mode-btn" style="margin-top:10px">Ik ken het codewoord al →</button>' +
    '</div>';

  Array.prototype.forEach.call(document.querySelectorAll('[data-card]'), function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-card');
      if (state.finalePlacement.indexOf(id) !== -1) return;
      if (state.finalePlacement.length >= 6) return;
      state.finalePlacement.push(id);
      saveState();
      renderFinale();
    });
  });

  Array.prototype.forEach.call(document.querySelectorAll('[data-slot]'), function (btn) {
    btn.addEventListener('click', function () {
      var idx = parseInt(btn.getAttribute('data-slot'), 10);
      if (idx >= state.finalePlacement.length) return;
      state.finalePlacement.splice(idx, 1);
      saveState();
      renderFinale();
    });
  });

  var clearBtn = document.getElementById('clear-order-btn');
  if (clearBtn) clearBtn.addEventListener('click', function () {
    state.finalePlacement = [];
    state.finaleRevealed = false;
    saveState();
    renderFinale();
  });

  var checkBtn = document.getElementById('check-order-btn');
  if (checkBtn) checkBtn.addEventListener('click', function () {
    var correct = state.finalePlacement.length === 6 &&
      state.finalePlacement.every(function (id, i) { return id === FINALE_SOLUTION_ORDER[i]; });
    var fb = document.getElementById('finale-feedback');
    if (correct) {
      state.finaleRevealed = true;
      saveState();
      renderFinale();
    } else {
      fb.textContent = 'Nog niet de juiste volgorde. Herlees de aanwijzingen hierboven en probeer opnieuw.';
      fb.className = 'feedback err';
    }
  });

  document.getElementById('direct-mode-btn').addEventListener('click', function () {
    state.finaleDirectMode = true;
    saveState();
    renderFinale();
  });

  if (state.finaleRevealed) {
    renderLettersAndCodeInput();
  }
}

function renderLettersAndCodeInput() {
  var letters = FINALE_SOLUTION_ORDER.map(function (cardId) {
    var card = FINALE_CARD_BY_ID[cardId];
    var word = state.answers[card.puzzleId] || '';
    return word.charAt(card.letterIndex - 1) || '?';
  });

  var tilesHtml = letters.map(function (l, i) {
    return '<div class="letter-tile" style="animation-delay:' + (i * 0.15) + 's">' + escapeHtml(l) + '</div>';
  }).join('');

  var wrap = el(
    '<div class="section-gap">' +
      '<p class="clue-text" style="text-align:center"><strong>Juist!</strong> Dit zijn de zes letters:</p>' +
      '<div class="letter-reveal">' + tilesHtml + '</div>' +
      '<form id="code-form" class="answer-form">' +
        '<input type="text" id="code-input" placeholder="Voer het codewoord in" autocapitalize="characters" autocorrect="off" spellcheck="false">' +
        '<div class="feedback" id="code-feedback" aria-live="polite"></div>' +
        '<button type="submit" class="btn">🔓 Open de kist</button>' +
      '</form>' +
    '</div>'
  );
  document.querySelector('.card').appendChild(wrap);
  wireCodeForm();
}

function renderFinaleDirect() {
  screenEl.innerHTML =
    '<div class="card">' +
      '<div class="puzzle-eyebrow">Finale</div>' +
      '<h2 class="puzzle-title">Codewoord invoeren</h2>' +
      '<p class="clue-text">Je hebt zelf al bepaald welke letter je uit elk antwoord haalt. Voer het codewoord in om de kist te openen.</p>' +
      '<form id="code-form" class="answer-form">' +
        '<input type="text" id="code-input" placeholder="Voer het codewoord in" autocapitalize="characters" autocorrect="off" spellcheck="false">' +
        '<div class="feedback" id="code-feedback" aria-live="polite"></div>' +
        '<button type="submit" class="btn">🔓 Open de kist</button>' +
      '</form>' +
      '<button class="btn ghost" id="back-to-cards" style="margin-top:10px">← Terug naar de kaartjes</button>' +
    '</div>';
  wireCodeForm();
  document.getElementById('back-to-cards').addEventListener('click', function () {
    state.finaleDirectMode = false;
    saveState();
    renderFinale();
  });
}

function wireCodeForm() {
  var form = document.getElementById('code-form');
  var input = document.getElementById('code-input');
  var feedback = document.getElementById('code-feedback');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var norm = normalize(input.value);
    if (!norm) {
      feedback.textContent = 'Vul eerst een codewoord in.';
      feedback.className = 'feedback err';
      return;
    }
    if (norm === FINAL_CODE) {
      state.step = 7;
      state.finishTime = Date.now();
      saveState();
      render();
    } else {
      feedback.textContent = 'Nog niet juist. Probeer opnieuw.';
      feedback.className = 'feedback err';
      input.classList.remove('error');
      void input.offsetWidth;
      input.classList.add('error');
      input.select();
    }
  });
  input.addEventListener('input', function () { input.classList.remove('error'); });
}

/* ---------------------------------------------------------------------
 * RENDER — succes
 * ------------------------------------------------------------------- */

function renderSuccess() {
  var duration = state.gameStartTime && state.finishTime ? formatDuration(state.finishTime - state.gameStartTime) : null;

  screenEl.innerHTML =
    '<div class="screen-center">' +
      '<div class="chest">🏆</div>' +
      '<h1>De kist is open!</h1>' +
      '<p class="subtitle">Het codewoord was <strong>' + FINAL_CODE + '</strong> — I L O V E U.</p>' +
      (duration ? '<p class="stat-line">Totale speeltijd: ' + duration + '</p>' : '') +
      '<button class="btn secondary" id="restart-btn">Opnieuw spelen</button>' +
    '</div>';

  document.getElementById('restart-btn').addEventListener('click', openConfirmReset);
  launchConfetti();
}

function launchConfetti() {
  var wrap = document.createElement('div');
  wrap.className = 'confetti-wrap';
  var colors = ['#d4af37', '#f4e9d4', '#a1832a', '#4caf6d', '#e07a72'];
  for (var i = 0; i < 60; i++) {
    var piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = (Math.random() * 100) + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2.5 + Math.random() * 2) + 's';
    piece.style.animationDelay = (Math.random() * 0.6) + 's';
    wrap.appendChild(piece);
  }
  document.body.appendChild(wrap);
  setTimeout(function () {
    if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
  }, 5200);
}

/* ---------------------------------------------------------------------
 * MASTER RENDER
 * ------------------------------------------------------------------- */

function render() {
  clearHint2Timers();
  renderTopbar();

  if (state.step === 0 && !state.gameStartTime) {
    renderIntro();
    return;
  }
  if (state.step >= 0 && state.step < PUZZLES.length) {
    renderPuzzle(state.step);
    return;
  }
  if (state.step === PUZZLES.length) {
    renderFinale();
    return;
  }
  renderSuccess();
}

/* ---------------------------------------------------------------------
 * GLOBAL WIRING
 * ------------------------------------------------------------------- */

progressEl.addEventListener('click', function (e) {
  var reviewBtn = e.target.closest('[data-review]');
  if (reviewBtn && !reviewBtn.disabled) {
    openReview(reviewBtn.getAttribute('data-review'));
    return;
  }
  var finaleBtn = e.target.closest('[data-goto-finale]');
  if (finaleBtn && !finaleBtn.disabled) {
    if (state.step > 6) {
      /* al klaar; toon gewoon de finale-oplossing ter referentie is niet nodig, ga naar succes */
      render();
    } else {
      state.step = 6;
      saveState();
      render();
    }
  }
});

menuBtn.addEventListener('click', openAbout);

modalBackdrop.addEventListener('click', function (e) {
  if (e.target === modalBackdrop) closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalBackdrop.hidden) closeModal();
});

/* ---------------------------------------------------------------------
 * INIT
 * ------------------------------------------------------------------- */

render();
