/* False Guilt vs. True Responsibility Clarity Filter
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "False Guilt vs. True Responsibility Clarity Filter | DopaBrain",
    "metaDesc": "Free 12-language False Guilt vs. True Responsibility Filter. Distinguish healthy accountability from 5 inherited false-guilt traps (resting, boundaries, others’ moods) locally.",
    "keywords": "false guilt vs healthy guilt, stop feeling guilty for resting, guilt after setting boundaries, responsibility clarity worksheet, emotional guilt release, dopabrain",
    "kicker": "DROP FALSE GUILT • KEEP CLEAN INTEGRITY",
    "heroTitle": "False Guilt vs. True Responsibility Clarity Filter",
    "heroLead": "Feeling crushed by guilt simply for resting, saying no, or not fixing someone else’s bad mood? Rate 5 false-guilt traps locally to sort what actually belongs to you from what to release.",
    "chip1": "5 Guilt Traps",
    "chip2": "Clean Release Cue",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK FALSE-GUILT SIGNALS (1 = FREE, 5 = HEAVY GUILT)",
    "step1Title": "Which false-guilt weights are you carrying right now?",
    "step1Sub": "Healthy guilt says \"I broke my values and can repair.\" False guilt punishes normal human limits.",
    "inputLabel": "Optional: 1 unfair guilt weight I am choosing to set down today (100% local):",
    "inputPlaceholder": "Example: Feeling guilty for taking Sunday off instead of answering non-urgent messages",
    "ctaBtn": "Filter Guilt & Build Release Plan",
    "resultBadge": "STEP 2 • YOUR GUILT VS. RESPONSIBILITY VERDICT",
    "noteTitle": "The Unfair Weight I Am Releasing Today",
    "meterLabel": "Freedom From False Guilt",
    "scriptTitle": "Grounded Reality Check When False Guilt Hits",
    "stepsTitle": "3 Steps to Release Inherited or Unfair Guilt",
    "stickyTitle": "Often feeling responsible for managing everyone else’s emotions?",
    "stickySub": "Run the Codependency & Interdependence Reset Audit",
    "stickyBtn": "Own-Lane Audit →",
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
    "title": "거짓 죄책감 vs 진짜 책임 분리 필터 | DopaBrain",
    "metaDesc": "조금 쉬거나 정중히 거절했을 뿐인데 죄책감이 짓누르나요? 5가지 거짓 죄책감 함정을 비공개로 점검해 진짜 책임과 내려놓아도 되는 마음을 명확히 분리하세요.",
    "kicker": "거짓 죄책감 내려놓기 · 건강한 책임감",
    "heroTitle": "거짓 죄책감 vs 진짜 책임 분리 필터",
    "heroLead": "잘못한 게 없는데도 쉬거나 거절했다는 이유만으로 마음이 불편한가요? 5가지 거짓 죄책감 신호를 로컬에서 걸러내 진짜 내 몫과 내려놓을 짐을 깔끔히 구분하세요.",
    "chip1": "5가지 죄책감 함정",
    "chip2": "현실 해소 문장",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 거짓 죄책감 무게 점검 (1 = 가벼움, 5 = 매우 무거움)",
    "step1Title": "지금 내 어깨를 누르고 있는 불필요한 죄책감은 무엇인가요?",
    "step1Sub": "건강한 책임감은 잘못을 바로잡게 하지만, 거짓 죄책감은 정상적인 한계마저 벌줍니다.",
    "inputLabel": "선택: 오늘 내려놓기로 결정한 불필요한 죄책감 1가지 (100% 로컬):",
    "ctaBtn": "거짓 죄책감 걸러내기 & 해소 플랜",
    "resultBadge": "2단계 • 나의 죄책감 vs 책임 분리 결과",
    "noteTitle": "오늘 내려놓기로 정한 나의 무거운 짐",
    "meterLabel": "거짓 죄책감 해방 지수",
    "scriptTitle": "이유 없는 죄책감이 올라올 때 쓰는 현실 문장",
    "stepsTitle": "내 몫이 아닌 죄책감을 내려놓는 3단계",
    "stickyTitle": "주변 사람 감정까지 내 책임처럼 떠안곤 하나요?",
    "stickySub": "공동의존·상호독립 리셋 감사로 건강한 경계를 세우세요",
    "stickyBtn": "공동의존 감사 →",
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
    "title": "虚假内疚与真实责任分离过滤器 | DopaBrain",
    "heroTitle": "虚假内疚分离过滤器",
    "ctaBtn": "过滤内疚并生成方案",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "偽りの罪悪感 vs 責任フィルター | DopaBrain",
    "heroTitle": "罪悪感と責任の仕分け",
    "ctaBtn": "不要な罪悪感を整理",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Filtro Culpa Falsa vs. Responsabilidad | DopaBrain",
    "heroTitle": "Filtro de Culpa Falsa",
    "ctaBtn": "Separar culpa y responsabilidad",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Filtro Culpa Falsa vs. Responsabilidade | DopaBrain",
    "heroTitle": "Filtro de Culpa Falsa",
    "ctaBtn": "Separar culpa real",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Falsche Schuld vs. Verantwortung-Filter | DopaBrain",
    "heroTitle": "Schuld- & Verantwortungs-Filter",
    "ctaBtn": "Schuldgefühle klären",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Filtre Fausse Culpabilité vs Responsabilité | DopaBrain",
    "heroTitle": "Filtre Fausse Culpabilité",
    "ctaBtn": "Clarifier ma responsabilité",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Фильтр ложной вины и ответственности | DopaBrain",
    "heroTitle": "Фильтр ложной вины",
    "ctaBtn": "Отделить ложную вину",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "झूठा अपराधबोध बनाम जिम्मेदारी फ़िल्टर | DopaBrain",
    "heroTitle": "अपराधबोध फ़िल्टर",
    "ctaBtn": "जिम्मेदारी स्पष्ट करें",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Filter Rasa Bersalah Semu vs. Tanggung Jawab | DopaBrain",
    "heroTitle": "Filter Rasa Bersalah",
    "ctaBtn": "Saring Rasa Bersalah",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sahte Suçluluk vs. Sorumluluk Filtresi | DopaBrain",
    "heroTitle": "Sahte Suçluluk Filtresi",
    "ctaBtn": "Suçluluk ve Sorumluluğu Ayır",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "no_guilt",
    "en": "Boundary Guilt — Feeling \"selfish\" simply for declining an extra favor or request",
    "ko": "거절 죄책감 — 정중히 거절했을 뿐인데 이기적인 사람이 된 기분이 듦"
  },
  {
    "id": "rest_guilt",
    "en": "Rest & Recovery Guilt — Feeling anxious or undeserving whenever you sit still and recharge",
    "ko": "휴식 죄책감 — 아무것도 안 하고 쉬는 시간에도 뭔가 해야 할 것 같아 불안함"
  },
  {
    "id": "mood_guilt",
    "en": "Others’ Emotion Guilt — Feeling at fault when another adult is disappointed or stressed",
    "ko": "타인 기분 죄책감 — 다른 성인이 실망하거나 스트레스받으면 내 탓처럼 느껴짐"
  },
  {
    "id": "hindsight",
    "en": "Unfair Hindsight Guilt — Blaming your past self using knowledge you did not have back then",
    "ko": "과거 후견지명 자책 — 당시엔 몰랐던 정보로 과거의 나를 가혹하게 심판함"
  },
  {
    "id": "outgrow",
    "en": "Outgrowing Guilt — Feeling guilty for changing priorities, habits, or energy limits",
    "ko": "변화 죄책감 — 예전 역할이나 기대와 달라진 지금의 나를 미안해함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy False-Guilt Overload — Apply the Two-Question Integrity Test",
    "koT": "거짓 죄책감 과부하 — 두 가지 진실 테스트로 짐을 내려놓으세요",
    "enD": "You are carrying emotional debt you never actually incurred. Disappointing someone’s preference is NOT the same as harming them—let normal human limits exist without self-punishment.",
    "koD": "실제로 진 적 없는 마음의 빚을 혼자 갚고 있습니다. 상대의 기대를 다 채우지 못한 것은 해를 끼친 게 아닙니다. 정상적인 한계에 죄책감을 붙이지 마세요.",
    "enS": "\"Did I act with cruelty or break a promise? No—I simply honored a reasonable human limit. Disappointment is survivable, and I do not need to punish myself for having needs.\"",
    "koS": "\"내가 악의를 품거나 약속을 어겼나? 아니야—그저 자연스러운 인간의 한계를 지켰을 뿐이야. 상대의 아쉬움은 내가 벌받아야 할 잘못이 아니야.\"",
    "enL": [
      "Ask two factual questions: (1) Did I intentionally harm anyone? (2) Is there a real repair needed? If both are no, label it \"False Guilt.\"",
      "Allow uncomfortable guilt feelings to sit in the background for 10 minutes WITHOUT undoing your boundary.",
      "Extend the exact same grace to your past self that you would offer a close friend."
    ],
    "koL": [
      "두 가지만 물어보세요: (1) 의도적으로 해를 끼쳤는가? (2) 실제 사과·복구가 필요한가? 둘 다 아니라면 \"거짓 죄책감\"이라 이름 붙이세요.",
      "불편한 죄책감이 스쳐 지나가더라도 방금 세운 경계를 취소하지 말고 10분만 견뎌 보세요.",
      "가장 친한 친구의 과거 선택에 건넬 관대함을 똑같이 과거의 나에게 적용해 보세요."
    ]
  },
  "mid": {
    "enT": "Mixed Guilt Signals — Separate Clean Repair From Over-Responsibility",
    "koT": "혼합 죄책감 구간 — 깔끔한 복구와 과잉 책임을 구분하세요",
    "enD": "Part of your discomfort comes from genuine care and conscientiousness. Keep the clean integrity (apologizing briefly if truly needed) and drop the lingering self-flagellation.",
    "koD": "배려심과 책임감이 깊어 생기는 불편함입니다. 진짜 복구가 필요한 10%만 깔끔히 처리하고, 나머지 90%의 끝없는 자책은 내려놓으세요.",
    "enS": "\"I own my part cleanly—and I release responsibility for managing how everyone else feels about my healthy limits.\"",
    "koS": "\"내 몫인 부분은 깔끔하게 책임질게—하지만 내 건강한 경계에 대한 타인의 감정까지 내가 떠안지는 않을게.\"",
    "enL": [
      "If a real small mistake happened, make 1 crisp repair and close the loop—no endless rumination.",
      "Practice resting for 30 guilt-free minutes this week as nervous-system maintenance.",
      "Notice when \"guilt\" is actually just unfamiliarity with a healthier habit."
    ],
    "koL": [
      "실제 작은 실수가 있었다면 깔끔하게 1번 사과·보완하고 마음속 사건을 종결하세요.",
      "이번 주 죄책감 없는 30분 휴식을 \"신경계 유지보수\"로 일정에 넣어보세요.",
      "불편한 죄책감이 사실은 새로운 건강한 습관이 낯설어서 생기는 감각임을 기억하세요."
    ]
  },
  "high": {
    "enT": "Clean Accountability — Integrity Without Self-Punishment",
    "koT": "맑은 책임감 — 자기 처벌 없는 단단한 진정성",
    "enD": "You distinguish real values-alignment from manipulative or inherited guilt cleanly. That clarity lets you show up warmly while staying grounded in your limits.",
    "koD": "진짜 가치에 따른 책임과 불필요한 눈치 죄책감을 잘 구분하고 있습니다. 이런 명료함 덕분에 관계에서도 지치지 않고 따뜻함을 유지할 수 있습니다.",
    "enS": "\"I care deeply about integrity, and honoring my own rest and boundaries is part of how I stay reliable.\"",
    "koS": "\"나는 성실함을 소중히 여기며, 나의 휴식과 경계를 지키는 것이 곧 오래 신뢰받는 방법이야.\"",
    "enL": [
      "Keep using quick factual checks whenever old guilt habits whisper.",
      "Model guilt-free rest and clear boundaries for people around you.",
      "Celebrate clean, honest choices over anxious over-explaining."
    ],
    "koL": [
      "오래된 죄책감 습관이 스멀스멀 올라올 때 사실 2문항으로 가볍게 정리하세요.",
      "주변 사람들에게도 죄책감 없이 쉬고 경계를 지키는 건강한 본보기를 보여주세요.",
      "불안한 과잉 변명 대신 담백하고 정직한 선택을 계속 신뢰하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_guilt_filter_v1";
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
      window.gtag('event', "guilt_filter_complete", {
        tool_slug: "guilt-vs-responsibility-filter",
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
      var shareUrl = "https://dopabrain.com/portal/tools/guilt-vs-responsibility-filter.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "guilt-vs-responsibility-filter",
        filename: 'dopabrain-guilt-vs-responsibility-filter-card.png',
        badge: "DROP FALSE GUILT • KEEP CLEAN INTEGRITY",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#a855f7",
        accent2: "#06b6d4"
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
