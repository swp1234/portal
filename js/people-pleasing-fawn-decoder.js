/* People-Pleasing & Fawn Response Decoder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "People-Pleasing & Fawn Response Decoder (24h Pause) | DopaBrain",
    "metaDesc": "Free 12-language People-Pleasing & Fawn Response Decoder. Rate 5 fawn-reflex habits locally and build a calm 24-hour \"Pause Before Yes\" script to stop silent resentment.",
    "keywords": "people pleasing decoder, fawn response test, how to stop people pleasing, pause before saying yes script, over apologizing habit, dopabrain",
    "kicker": "FAWN RESPONSE & 24-HOUR PAUSE",
    "heroTitle": "People-Pleasing & Fawn Response Decoder",
    "heroLead": "Saying \"sure, no problem!\" on autopilot while secretly feeling exhausted or resentful? Rate 5 fawn-response habits privately to install a calm 24-hour \"Pause Before Yes\" rule.",
    "chip1": "5 Fawn Reflexes",
    "chip2": "24h Pause Rule",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR FAWN REFLEXES (1 = RARE, 5 = AUTOMATIC)",
    "step1Title": "How automatically do these people-pleasing patterns take over?",
    "step1Sub": "Honest ratings stay strictly on your device—nothing is uploaded.",
    "inputLabel": "Optional: 1 upcoming request where I will pause before answering (100% local):",
    "inputPlaceholder": "Example: Saying \"Let me check my week and reply tomorrow\" before taking on an extra favor",
    "ctaBtn": "Decode Fawn Pattern & Build Script",
    "resultBadge": "STEP 2 • YOUR 24-HOUR PAUSE-BEFORE-YES PLAN",
    "noteTitle": "My Protected Pause-Before-Yes Commitment",
    "meterLabel": "Self-Alignment vs. Autopilot Yes",
    "scriptTitle": "Guilt-Free \"Pause Before Yes\" Script",
    "stepsTitle": "3 Small Reps to Rewire the Fawn Reflex",
    "stickyTitle": "Need exact refusal wording for work, family, or dating?",
    "stickySub": "Generate calm boundary scripts across 4 real-life contexts",
    "stickyBtn": "Boundary Builder →",
    "skip": "Skip to Tool",
    "back": "← Mental Wellness Lab",
    "langLabel": "Language:",
    "resetBtn": "Reset",
    "storyBtn": "Save 1080×1920 Summary Card (PNG)",
    "copyBtn": "Copy Script",
    "shareBtn": "Share Tool",
    "faqTitle": "Frequently Asked Questions",
    "refTitle": "Psychological Frameworks & References",
    "discTitle": "Editorial Self-Reflection Disclaimer:",
    "discText": "This interactive workspace is an educational self-reflection tool, not clinical diagnosis or medical treatment.",
    "privacy": "Privacy Policy",
    "terms": "Terms",
    "copied": "Plan script copied!",
    "shared": "Tool link copied!",
    "savedCard": "1080×1920 PNG Summary Card saved!"
  },
  "ko": {
    "title": "눈치보기·과잉순응(Fawn) 디코더 & 24시간 보류 플랜 | DopaBrain",
    "metaDesc": "거절하면 미움받을까 봐 자동 반사로 \"괜찮아요!\"라고 답하고 속으로 지치나요? 5가지 과잉순응(Fawn) 습관을 비공개로 점검하고 24시간 보류 대화문을 받아보세요.",
    "kicker": "과잉순응(FAWN) 해독 · 24시간 보류 규칙",
    "heroTitle": "눈치보기·과잉순응(Fawn) 디코더",
    "heroLead": "상대 기분이 상할까 봐 자동 반사로 승낙한 뒤 뒤늦게 서운함과 피로가 몰려오나요? 5가지 눈치보기 반사 신경을 로컬에서 점검해 부드러운 24시간 보류 습관을 세팅하세요.",
    "chip1": "5가지 순응 반사",
    "chip2": "24시간 보류 규칙",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 과잉순응 패턴 점검 (1 = 드묾, 5 = 자동 반사)",
    "step1Title": "아래 눈치보기·과잉배려 신호가 얼마나 자동으로 작동하나요?",
    "step1Sub": "모든 응답은 내 브라우저 안에서만 계산되며 외부로 전송되지 않습니다.",
    "inputLabel": "선택: 즉답하지 않고 하루 보류해 볼 부탁 1가지 (100% 로컬):",
    "ctaBtn": "과잉순응 패턴 해독 & 보류 문장 생성",
    "resultBadge": "2단계 • 나의 24시간 보류 플랜",
    "noteTitle": "즉답을 멈추고 보류할 나의 경계 약속",
    "meterLabel": "자기 일치도 (자동 승낙 대비)",
    "scriptTitle": "죄책감 없이 시간을 버는 24시간 보류 문장",
    "stepsTitle": "과잉순응 반사를 천천히 바꾸는 3가지 연습",
    "stickyTitle": "직장·가족·연인별 거절 문장이 바로 필요하신가요?",
    "stickySub": "4가지 상황별 정중한 경계선 스크립트를 생성해 보세요",
    "stickyBtn": "경계선 빌더 →",
    "skip": "도구 본문으로 이동",
    "back": "← 멘탈 웰니스 랩",
    "langLabel": "언어:",
    "resetBtn": "초기화",
    "storyBtn": "1080×1920 요약 카드 저장 (PNG)",
    "copyBtn": "문장 복사",
    "shareBtn": "도구 공유",
    "faqTitle": "자주 묻는 질문",
    "refTitle": "심리학적 프레임워크 및 참고문헌",
    "discTitle": "편집 및 자기성찰 안내:",
    "discText": "본 인터랙티브 도구는 교육용 자기성찰 도구이며 임상 진단이나 의학적 치료가 아닙니다.",
    "privacy": "개인정보처리방침",
    "terms": "이용약관",
    "copied": "맞춤 문장을 복사했습니다!",
    "shared": "도구 링크를 복사했습니다!",
    "savedCard": "1080×1920 요약 카드를 저장했습니다!"
  },
  "zh": {
    "title": "讨好型与迎合反应解码器 | DopaBrain",
    "heroTitle": "讨好型与迎合反应解码器",
    "ctaBtn": "解码模式并生成话术",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "いい人癖・迎合(Fawn)デコーダー | DopaBrain",
    "heroTitle": "いい人癖・迎合デコーダー",
    "ctaBtn": "パターンを解読する",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Decodificador de Complacencia (Fawn) | DopaBrain",
    "heroTitle": "Decodificador de Complacencia",
    "ctaBtn": "Crear guion de pausa 24h",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Decodificador de Agradar Demais (Fawn) | DopaBrain",
    "heroTitle": "Decodificador Fawn",
    "ctaBtn": "Criar roteiro de pausa 24h",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "People-Pleasing- & Fawn-Decoder | DopaBrain",
    "heroTitle": "People-Pleasing-Decoder",
    "ctaBtn": "24h-Pause-Skript erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Décodeur People-Pleasing & Fawn | DopaBrain",
    "heroTitle": "Décodeur People-Pleasing",
    "ctaBtn": "Créer mon script de pause",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Декодер угодливости (Fawn) | DopaBrain",
    "heroTitle": "Декодер угодливости",
    "ctaBtn": "Создать скрипт паузы",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "पीपल-प्लीज़िंग व फॉन डिकोडर | DopaBrain",
    "heroTitle": "पीपल-प्लीज़िंग डिकोडर",
    "ctaBtn": "24-घंटे पॉज़ स्क्रिप्ट बनाएं",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Dekoder People-Pleasing & Fawn | DopaBrain",
    "heroTitle": "Dekoder People-Pleasing",
    "ctaBtn": "Buat Skrip Jeda 24 Jam",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "İnsanları Memnun Etme (Fawn) Çözücü | DopaBrain",
    "heroTitle": "Fawn Tepkisi Çözücü",
    "ctaBtn": "24 Saatlik Mola Metni",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "auto_yes",
    "en": "Autopilot \"Yes\" Reflex — Agreeing to favors before checking your real energy or calendar",
    "ko": "자동 승낙 반사 — 내 일정과 체력을 확인하기도 전에 일단 \"네!\"부터 나옴"
  },
  {
    "id": "mood_radar",
    "en": "Room Mood Scanning — Constantly tracking subtle sighs or tone shifts to keep everyone happy",
    "ko": "실시간 기분 레이더 — 상대의 작은 한숨이나 말투 변화에 촉각을 곤두세움"
  },
  {
    "id": "over_apology",
    "en": "Over-Apologizing — Saying \"sorry\" for taking up space, asking questions, or having needs",
    "ko": "과잉 사과 습관 — 잘못한 일이 없는데도 부탁하거나 의견을 낼 때 \"죄송해요\"가 먼저 나옴"
  },
  {
    "id": "conflict_dread",
    "en": "Disappointment Dread — Feeling physical panic if someone seems mildly inconvenienced by you",
    "ko": "실망 공포 — 누군가 나 때문에 조금이라도 불편해 보이면 가슴이 철렁 내려앉음"
  },
  {
    "id": "quiet_resent",
    "en": "Silent Resentment — Feeling unseen or drained after over-giving without ever voicing your limit",
    "ko": "조용한 서운함 — 말없이 다 맞춰주다 혼자 지치고 억울함이 쌓임"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Fawn Autopilot — Install the 24-Hour Pause Rule Today",
    "koT": "강한 과잉순응 자동모드 — 오늘부터 24시간 보류 규칙을 켜세요",
    "enD": "Your nervous system learned that keeping others pleased equals safety. You do not need to leap straight to harsh \"no\"s—simply stop saying \"yes\" on the spot for 24 hours.",
    "koD": "신경계가 \"상대를 기쁘게 해야 안전하다\"고 학습한 상태입니다. 단번에 단호하게 거절하려 애쓰지 말고, 먼저 \"즉답하지 않고 24시간 보류하기\" 하나만 시작하세요.",
    "enS": "\"Thanks for asking me! I have a new habit of checking my bandwidth before committing—let me get back to you tomorrow afternoon.\"",
    "koS": "\"물어봐 줘서 고마워요! 요즘 일정과 컨디션을 먼저 확인하고 답하는 습관을 들이고 있어서, 내일 오후에 확인 후 답장드릴게요.\"",
    "enL": [
      "Replace 1 \"Sorry to bother you\" with \"Thanks for your patience\" today.",
      "Delay every non-urgent favor reply by at least 2 hours before deciding.",
      "Let someone feel mild disappointment for 5 minutes without rushing to rescue them."
    ],
    "koL": [
      "오늘 \"죄송한데요\" 1번을 \"기다려 주셔서 감사합니다\"로 바꿔 말해 보세요.",
      "급하지 않은 부탁은 최소 2시간 뒤에 내 컨디션을 확인하고 답장하세요.",
      "상대가 잠깐 아쉬워하더라도 바로 해결해 주려 뛰어들지 말고 5분만 견뎌 보세요."
    ]
  },
  "mid": {
    "enT": "Situational Fawning — Tighten Your Boundary Around High-Drain People",
    "koT": "상황적 눈치보기 — 에너지 소모가 큰 관계부터 경계를 선명히 하세요",
    "enD": "You already know how to speak up in safe spaces, yet specific high-pressure relationships still pull you back into over-giving. Practice one small honest preference this week.",
    "koD": "편한 관계에서는 자기 표현을 하지만, 특정 압박 관계에서는 여전히 과잉배려로 돌아가는 경향이 있습니다. 이번 주 작은 선호 1가지를 솔직히 말해 보세요.",
    "enS": "\"I would like to help, and I only have room for the smaller piece this week—would that still work for you?\"",
    "koS": "\"돕고 싶지만 이번 주엔 전체는 어렵고 앞부분만 함께할 수 있어요—그렇게 맞춰도 괜찮을까요?\"",
    "enL": [
      "Voice 1 small honest preference (food, timing, rest) before asking what everyone else wants.",
      "Notice stomach tightness as an early signal that you are about to say a fake yes.",
      "Keep your refusal under 2 sentences—over-explaining invites negotiation."
    ],
    "koL": [
      "메뉴나 시간처럼 사소한 선택 1가지에서 내 취향을 먼저 말해 보세요.",
      "배가 뭉치거나 숨이 막히는 감각을 \"억지 승낙 직전 신호\"로 알아차리세요.",
      "거절할 때 변명을 길게 붙이지 말고 2문장 이내로 담백하게 마무리하세요."
    ]
  },
  "high": {
    "enT": "Grounded Self-Advocacy — Kindness Without Self-Erasure",
    "koT": "건강한 자기 존중 — 나를 지우지 않는 진짜 친절",
    "enD": "Your generosity comes from genuine choice rather than fear of rejection. Keep protecting honest \"yes\"s so your warmth remains sustainable and resentment-free.",
    "koD": "두려움 때문이 아니라 진심에서 우러난 선택으로 배려하고 있습니다. 진짜 \"예\"를 지키기 위해 정중한 \"아니오\"의 여백을 계속 유지하세요.",
    "enS": "\"I am happy to help when I genuinely have the space, and I will also let you know honestly when my plate is full.\"",
    "koS": "\"여유가 될 때는 기꺼이 함께할게요—반대로 벅찰 때도 솔직하게 말씀드릴게요.\"",
    "enL": [
      "Keep pausing briefly before big commitments even when excited.",
      "Celebrate moments where honesty deepened mutual respect.",
      "Re-check your energy balance during high-stress family or work seasons."
    ],
    "koL": [
      "신나는 제안이라도 큰 약속 전엔 잠깐 일정을 확인하는 여유를 유지하세요.",
      "솔직한 경계가 오히려 관계를 더 편하게 만든 순간을 기억해 두세요.",
      "명절·마감 시즌처럼 압박이 커질 때 가볍게 과잉순응 신호를 점검하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_fawn_decoder_v1";
  var state = { lang: 'en', vals: {}, note: '' };
  AXES.forEach(function (a) { state.vals[a.id] = 3; });

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function sendSafeEvent(band) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', "fawn_decoder_complete", {
        tool_slug: "people-pleasing-fawn-decoder",
        result_band: band,
        locale: state.lang
      });
    }
  }

  function buildAxes() {
    var wrap = document.getElementById('axisList');
    if (!wrap) return;
    wrap.textContent = '';
    AXES.forEach(function (ax) {
      var row = document.createElement('div');
      row.className = 'axis-row';
      var head = document.createElement('div');
      head.className = 'axis-head';
      var lbl = document.createElement('label');
      lbl.setAttribute('for', 'ax-' + ax.id);
      lbl.textContent = state.lang === 'ko' ? ax.ko : ax.en;
      var val = document.createElement('span');
      val.className = 'axis-val';
      val.textContent = state.vals[ax.id] + ' / 5';
      head.appendChild(lbl);
      head.appendChild(val);

      var inp = document.createElement('input');
      inp.type = 'range';
      inp.min = '1';
      inp.max = '5';
      inp.value = String(state.vals[ax.id]);
      inp.id = 'ax-' + ax.id;
      inp.className = 'axis-range';
      inp.addEventListener('input', function () {
        state.vals[ax.id] = Number(inp.value);
        val.textContent = inp.value + ' / 5';
        saveLocal();
      });
      row.appendChild(head);
      row.appendChild(inp);
      wrap.appendChild(row);
    });
  }

  function compute() {
    var sum = 0;
    AXES.forEach(function (a) { sum += Number(state.vals[a.id]) || 3; });
    var pct = Math.round(((25 - sum) / 20) * 100);
    var band = pct < 38 ? 'low' : pct < 70 ? 'mid' : 'high';
    return { pct: pct, band: band, tier: TIERS[band] };
  }

  function renderResult(emit) {
    var inp = document.getElementById('noteInput');
    state.note = inp ? inp.value.trim() : '';
    var res = compute();
    var isKo = state.lang === 'ko';

    document.getElementById('verdictTitle').textContent = isKo ? res.tier.koT : res.tier.enT;
    document.getElementById('verdictDesc').textContent = isKo ? res.tier.koD : res.tier.enD;
    document.getElementById('pctOut').textContent = res.pct + '%';
    document.getElementById('pctBar').style.width = res.pct + '%';
    document.getElementById('scriptOut').textContent = isKo ? res.tier.koS : res.tier.enS;

    var nb = document.getElementById('noteBox');
    var no = document.getElementById('noteOut');
    if (state.note) {
      no.textContent = state.note;
      nb.hidden = false;
    } else {
      no.textContent = '';
      nb.hidden = true;
    }

    var ul = document.getElementById('actionList');
    ul.textContent = '';
    (isKo ? res.tier.koL : res.tier.enL).forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emit) sendSafeEvent(res.band);
  }

  function saveLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ vals: state.vals, note: state.note })); } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (p.vals && typeof p.vals === 'object') state.vals = Object.assign(state.vals, p.vals);
      if (typeof p.note === 'string') state.note = p.note;
    } catch (_) {}
  }

  function applyI18n() {
    document.documentElement.lang = state.lang;
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (!val) return;
      if (el.tagName === 'META') el.setAttribute('content', val);
      else el.textContent = val;
    });
    var back = document.getElementById('backLink');
    if (back) back.href = state.lang === 'en' ? '/portal/tools/wellness-lab.html' : '/portal/tools/wellness-lab.html?lang=' + state.lang;
    buildAxes();
    if (!document.getElementById('resultCard').hidden) renderResult(false);
  }

  function showToast(msg) {
    var toast = document.getElementById('statusToast');
    if (toast) toast.textContent = msg;
  }

  function init() {
    state.lang = detectLang();
    loadLocal();
    var select = document.getElementById('langSelect');
    if (select) {
      select.value = state.lang;
      select.addEventListener('change', function () {
        state.lang = select.value;
        var u = new URL(window.location.href);
        u.searchParams.set('lang', state.lang);
        window.history.replaceState({}, '', u.toString());
        applyI18n();
      });
    }
    var ni = document.getElementById('noteInput');
    if (ni && state.note) ni.value = state.note;

    document.getElementById('runBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('resetBtn').addEventListener('click', function () {
      AXES.forEach(function (a) { state.vals[a.id] = 3; });
      state.note = '';
      if (ni) ni.value = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      buildAxes();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var txt = document.getElementById('scriptOut').textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = "https://dopabrain.com/portal/tools/people-pleasing-fawn-decoder.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "people-pleasing-fawn-decoder",
        filename: 'dopabrain-people-pleasing-fawn-decoder-card.png',
        badge: "FAWN RESPONSE & 24-HOUR PAUSE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ec4899",
        accent2: "#8b5cf6"
      });
      showToast(t('savedCard'));
    });

    window.i18n = {
      getLanguage: function () { return state.lang; },
      setLanguage: function (l) { if (SUPPORTED.indexOf(l) !== -1) { state.lang = l; applyI18n(); } },
      t: t
    };

    applyI18n();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
