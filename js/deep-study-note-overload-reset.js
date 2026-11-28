/* Study & Reading Note-Overload Active Recall Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Study & Reading Note-Overload Active Recall Reset | DopaBrain",
    "metaDesc": "Highlighting 80% of every textbook page yet drawing a blank on exam day? Audit 5 passive-study illusions locally and switch to a fast 3-Question Active Recall loop.",
    "kicker": "LEARNING CLARITY • STUDY NOTE-OVERLOAD & ACTIVE RECALL RESET",
    "heroTitle": "Study & Reading Note-Overload Active Recall Reset",
    "heroLead": "Highlighting 80% of every textbook page yet drawing a blank on exam day? Audit 5 passive-study illusions locally and switch to a fast 3-Question Active Recall loop.",
    "chip1": "5 Passive Illusions",
    "chip2": "3-Question Recall Loop",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PASSIVE-STUDY TRAPS (1 = ACTIVE, 5 = PASSIVE RE-READING)",
    "step1Title": "What makes hours of studying vanish before test day?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONE concept I will close my book and explain in 3 plain sentences today (100% local):",
    "ctaBtn": "Build My Active Recall Study Loop",
    "resultBadge": "STEP 2 • YOUR HIGH-RETENTION ACTIVE RECALL PROTOCOL",
    "noteTitle": "My Closed-Book Teach-Back Topic",
    "meterLabel": "Retention Efficiency",
    "scriptTitle": "Feynman 3-Question Closed-Book Prompt",
    "stepsTitle": "3 Evidence-Based Study Shifts (Dunlosky et al.) That Double Recall",
    "stickyTitle": "Run a 20-min study + 5-min closed-book recall block right now.",
    "stickySub": "Launch Free Study Pomodoro Timer",
    "stickyBtn": "Start Study Sprint →",
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
    "title": "필기·하이라이트 과부하 탈출 & 3질문 능동 회상(Active Recall) 리셋 | DopaBrain",
    "metaDesc": "교재 80%에 형광펜을 칠하고 필기만 쌓았는데 정작 시험·면접에서 기억이 안 나시나요? 5가지 수동 학습 착각을 점검하고 3질문 능동 회상 루프로 학습 효율을 2배 높이세요.",
    "kicker": "학습 효율 · 필기 과부하 탈출 & 3질문 능동 회상(Active Recall) 리셋",
    "heroTitle": "필기·하이라이트 과부하 탈출 & 3질문 능동 회상(Active Recall) 리셋",
    "heroLead": "교재 80%에 형광펜을 칠하고 필기만 쌓았는데 정작 시험·면접에서 기억이 안 나시나요? 5가지 수동 학습 착각을 점검하고 3질문 능동 회상 루프로 학습 효율을 2배 높이세요.",
    "chip1": "5가지 수동 착각",
    "chip2": "3질문 능동 회상",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 수동 학습·필기 과부하 습관 점검 (1 = 능동 회상, 5 = 단순 재독)",
    "step1Title": "몇 시간을 공부해도 머리에 잘 남지 않게 만드는 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 책을 덮고 나만의 쉬운 말 3문장으로 설명해 볼 핵심 개념 1가지 (100% 로컬):",
    "ctaBtn": "내 능동 회상 학습 루프 보기",
    "resultBadge": "2단계 • 기억 유지율을 높이는 능동 회상 프로토콜",
    "noteTitle": "책 덮고 3문장 설명할 개념",
    "meterLabel": "기억 정착 효율도",
    "scriptTitle": "파인만 3질문 백지 복습 프레임",
    "stepsTitle": "학습 심리학이 검증한 기억력 2배 3단계 전환",
    "stickyTitle": "20분 학습 + 5분 책 덮고 백지 복습 블록을 바로 시작해 볼까요?",
    "stickySub": "무료 학습 뽀모도로 타이머 열기",
    "stickyBtn": "학습 스프린트 →",
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
    "title": "笔记过载打破与3问题主动回忆学习重置 | DopaBrain",
    "heroTitle": "笔记过载打破与3问题主动回忆学习重置",
    "heroLead": "告别荧光笔被动重读假象，用20/5闭卷回忆法与1-3-7间隔复习稳固记忆。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "ノート過多脱出＆3質問アクティブリコール学習リセット | DopaBrain",
    "heroTitle": "ノート過多脱出＆3質問アクティブリコール学習リセット",
    "heroLead": "マーカー再読の錯覚を抜け、20分学習＋5分白紙想起と1-3-7間隔復習へ切り替えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reset de Sobrecarga de Apuntes y Recuerdo Activo | DopaBrain",
    "heroTitle": "Reset de Sobrecarga de Apuntes y Recuerdo Activo",
    "heroLead": "Cambia el subrayado pasivo por bloques 20/5 a libro cerrado y repaso espaciado 1-3-7.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Sobrecarga de Anotações e Recordação Ativa | DopaBrain",
    "heroTitle": "Reset de Sobrecarga de Anotações e Recordação Ativa",
    "heroLead": "Troque releitura passiva pelo ciclo 20/5 de livro fechado e revisão espaçada 1-3-7.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Lernnotizen-Überlastung & Active-Recall-Reset | DopaBrain",
    "heroTitle": "Lernnotizen-Überlastung & Active-Recall-Reset",
    "heroLead": "Ersetze passives Markieren durch 20/5-Buch-zu-Abruf und 1-3-7-Wiederholung.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Surcharge de Notes & Rappel Actif (Active Recall) | DopaBrain",
    "heroTitle": "Reset Surcharge de Notes & Rappel Actif (Active Recall)",
    "heroLead": "Remplacez le surlignage passif par le cycle 20/5 livre fermé et la révision 1-3-7.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс перегрузки конспектами и активное припоминание | DopaBrain",
    "heroTitle": "Сброс перегрузки конспектами и активное припоминание",
    "heroLead": "Замените пассивное перечитывание циклом 20/5 с закрытой книгой и интервалами 1-3-7.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "स्टडी नोट ओवरलोड और एक्टिव रिकॉल रीसेट | DopaBrain",
    "heroTitle": "स्टडी नोट ओवरलोड और एक्टिव रिकॉल रीसेट",
    "heroLead": "निष्क्रिय हाइलाइटिंग छोड़कर 20/5 क्लोज्ड-बुक रिकॉल और 1-3-7 स्पेसिंग अपनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Kebanyakan Catatan & Active Recall 20/5 | DopaBrain",
    "heroTitle": "Reset Kebanyakan Catatan & Active Recall 20/5",
    "heroLead": "Ganti kebiasaan stabilo pasif dengan siklus 20 menit belajar + 5 menit ingat tanpa melihat buku.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Ders Notu Yükü ve Aktif Hatırlama (Active Recall) Sıfırlama | DopaBrain",
    "heroTitle": "Ders Notu Yükü ve Aktif Hatırlama (Active Recall) Sıfırlama",
    "heroLead": "Pasif tekrar yerine 20/5 kapalı kitap hatırlama ve 1-3-7 aralıklı tekrara geçin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "neon_highlighting",
    "en": "Rainbow Highlighting — Painting entire paragraphs yellow while on mental autopilot",
    "ko": "형광펜 도배 — 내용 이해보다 습관적으로 문단 전체에 밑줄만 긋고 지나감"
  },
  {
    "id": "verbatim_copying",
    "en": "Pretty Verbatim Copying — Spending hours transcribing slides word-for-word instead of testing memory",
    "ko": "예쁜 베끼기 필기 — 머리로 떠올리기보다 슬라이드를 예쁘게 옮겨 적는 데 시간을 다 씀"
  },
  {
    "id": "familiarity_illusion",
    "en": "Re-Reading Familiarity Illusion — Confusing \"this looks familiar\" with \"I can retrieve this cold\"",
    "ko": "익숙함의 착각 — 눈으로 다시 읽으며 \"아는 것 같다\"고 착각하고 시험에서 막힘"
  },
  {
    "id": "marathon_cramming",
    "en": "Single-Night Cramming — Studying 6 hours once instead of 3 short spaced sessions across a week",
    "ko": "벼락치기 몰아 공부 — 3일에 나누어 복습하지 않고 하루에 6시간 몰아 봐서 금방 휘발됨"
  },
  {
    "id": "zero_blank_sheet",
    "en": "Never Closing the Book — Avoiding the slight discomfort of testing yourself from a blank page",
    "ko": "백지 테스트 회피 — 기억이 안 나는 약간의 불편함을 피해 늘 교재를 펼친 채로만 봄"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Passive Illusion — Swap Re-Reading for the 20/5 Closed-Book Recall Loop & 1-3-7 Spacing",
    "koT": "수동 학습 높음 — 단순 재독을 멈추고 \"20분 학습 + 5분 책 덮고 3질문 복습\"과 1-3-7 간격 복습으로 전환하세요",
    "enD": "Dunlosky’s landmark meta-analysis of 10 study methods ranked highlighting and re-reading among the LOWEST utility techniques, while Practice Testing (Active Recall) and Distributed Practice (Spaced Repetition) ranked HIGHEST across every age and subject.",
    "koD": "던로스키(Dunlosky)의 대규모 학습법 메타분석에서 형광펜·재독은 최하위 효율로, 스스로 인출하는 \"능동 회상(Practice Testing)\"과 \"간격 복습(Spaced Practice)\"이 최상위 효율로 입증되었습니다.",
    "enS": "\"Close the book now: 1) What is the core idea in 1 plain sentence? 2) Why does it matter or work? 3) Give 1 concrete example—then peek ONLY to fill gaps.\"",
    "koS": "\"지금 책을 덮고 답해 보세요: 1) 핵심 개념을 초등학생도 알게 1줄로? 2) 왜/어떻게 작동하나? 3) 구체적 예시 1가지는? 막힌 부분만 펼쳐서 보완합니다.\"",
    "enL": [
      "After every 20 minutes of reading/lecture, close all notes for 5 minutes and scribble everything you recall onto a scrap sheet.",
      "Convert slide headings into Questions in your margin instead of copying bullet answers verbatim.",
      "Review your hardest 3 questions on Day 1, Day 3, and Day 7 (takes 5 minutes each and locks long-term memory)."
    ],
    "koL": [
      "20분 읽기·강의마다 5분간 책을 덮고 기억나는 핵심을 연습장에 거칠게 쏟아내는 백지 복습을 붙이세요.",
      "노트에 답을 베끼지 말고 목차를 \"질문 형태\"로 적어 두고 나중에 스스로 답해 보세요.",
      "가장 헷갈린 질문 3개만 1일차·3일차·7일차에 5분씩 간격 복습하면 장기 기억에 단단히 박힙니다."
    ]
  },
  "mid": {
    "enT": "Mixed Habits — Add 5 Minutes of Closed-Book Recall at the End of Every Session",
    "koT": "혼합 학습 단계 — 매 공부 끝 5분만 책 덮고 요약 테스트를 추가하세요",
    "enD": "That single 5-minute retrieval struggle builds stronger neural pathways than 30 minutes of re-reading.",
    "koD": "끝무렵 5분의 능동 인출이 30분 다시 읽기보다 훨씬 강한 기억 회로를 만듭니다.",
    "enS": "\"Effortful retrieval today equals effortless recall on test day.\"",
    "koS": "\"오늘 살짝 끙끙대며 떠올린 기억이 시험 날 자동으로 튀어나온다.\"",
    "enL": [
      "Limit highlighting to max 1 phrase per page.",
      "Quiz yourself before re-reading a chapter.",
      "Explain one tough concept aloud while walking."
    ],
    "koL": [
      "형광펜은 한 페이지당 핵심 1구절로 제한해 보세요.",
      "챕터를 다시 읽기 전에 기억나는 것부터 먼저 테스트하세요.",
      "어려운 개념 1개를 걸으며 혼잣말로 설명해 보세요."
    ]
  },
  "high": {
    "enT": "Active-Recall Pro — High-Retention, Low-Stress Studying",
    "koT": "능동 회상 프로 — 적은 시간으로 오래 기억하는 최고 효율 학습법입니다",
    "enD": "Your retrieval and spacing habits maximize learning without marathon cramming.",
    "koD": "인출 연습과 간격 복습이 잘 자리 잡아 적은 시간에도 높은 성취를 내고 있습니다.",
    "enS": "\"Test to learn—not just to measure.\"",
    "koS": "\"시험은 평가 수단이 아니라 최고의 기억 훈련 도구다.\"",
    "enL": [
      "Keep spacing tough cards at 1-3-7-14 days.",
      "Mix related problem types (interleaving).",
      "Protect sleep after intense study sessions."
    ],
    "koL": [
      "어려운 질문은 1-3-7-14일 간격 복습을 유지하세요.",
      "비슷한 유형을 섞어 푸는 교차 학습도 더해 보세요.",
      "공부한 날 밤 숙면으로 기억 고정을 마무리하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_study_recall_v1";
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
      window.gtag('event', "study_recall_reset_complete", {
        tool_slug: "deep-study-note-overload-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/deep-study-note-overload-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "deep-study-note-overload-reset",
        filename: 'dopabrain-deep-study-note-overload-reset-card.png',
        badge: "LEARNING CLARITY • STUDY NOTE-OVERLOAD & ACTIVE RECALL RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
        accent2: "#6366f1"
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
