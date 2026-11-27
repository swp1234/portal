/* Neuro-Friendly Study Block & Active-Recall Customizer
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Neuro-Friendly Study Block & Active-Recall Customizer | DopaBrain",
    "metaDesc": "Does the rigid 25/5 Pomodoro bell cut you off right as you hit flow—or feel too long when exhausted? Audit 5 study-stamina patterns locally and customize your ideal focus/recall cadence.",
    "kicker": "LEARNING SCIENCE • NEURO-FRIENDLY STUDY BLOCK CUSTOMIZER",
    "heroTitle": "Neuro-Friendly Study Block & Active-Recall Customizer",
    "heroLead": "Does the rigid 25/5 Pomodoro bell cut you off right as you hit flow—or feel too long when exhausted? Audit 5 study-stamina patterns locally and customize your ideal focus/recall cadence.",
    "chip1": "5 Study Rhythms",
    "chip2": "Recall Cadence",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR STUDY & RETENTION FRICTION (1 = SMOOTH, 5 = STRUGGLING)",
    "step1Title": "What breaks your learning efficiency most during study sessions?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The exact topic I will actively recall from memory at the end of Block 1 (100% local):",
    "ctaBtn": "Build My Custom Study & Recall Cadence",
    "resultBadge": "STEP 2 • YOUR PERSONALIZED STUDY & ACTIVE-RECALL CADENCE",
    "noteTitle": "Block 1 Active-Recall Target",
    "meterLabel": "Retention & Flow Fit",
    "scriptTitle": "End-of-Block 3-Minute Recall Cue",
    "stepsTitle": "3 Cognitive-Science Rules That Double Exam Retention",
    "stickyTitle": "Launch your custom study timer block right now",
    "stickySub": "Open the free Pomodoro Focus Timer",
    "stickyBtn": "Start Study →",
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
    "title": "뇌 친화적 맞춤 공부 블록 & 액티브 리콜 설계기 | DopaBrain",
    "metaDesc": "획일적인 25분 뽀모도로가 몰입 직전에 흐름을 끊거나, 지친 날엔 너무 길게 느껴지나요? 5가지 학습 리듬을 점검하고 액티브 리콜(백지 인출)이 결합된 나만의 맞춤 공부 블록을 설계하세요.",
    "kicker": "학습 과학 · 뇌 친화적 맞춤 공부 블록 & 인출 복습 설계기",
    "heroTitle": "뇌 친화적 맞춤 공부 블록 & 액티브 리콜 설계기",
    "heroLead": "획일적인 25분 뽀모도로가 몰입 직전에 흐름을 끊거나, 지친 날엔 너무 길게 느껴지나요? 5가지 학습 리듬을 점검하고 액티브 리콜(백지 인출)이 결합된 나만의 맞춤 공부 블록을 설계하세요.",
    "chip1": "5가지 학습 리듬",
    "chip2": "인출 복습 주기",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 공부 집중과 기억 정착 마찰 점검 (1 = 원활, 5 = 어려움)",
    "step1Title": "공부·자격증 준비 중 학습 효율을 가장 크게 떨어뜨리는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 1블록 종료 후 책을 덮고 백지로 떠올려 볼 핵심 주제 (100% 로컬):",
    "ctaBtn": "내 맞춤 공부 블록 & 인출 플랜 보기",
    "resultBadge": "2단계 • 맞춤형 학습 블록 & 액티브 리콜 프로토콜",
    "noteTitle": "1블록 백지 인출 목표",
    "meterLabel": "기억 정착·몰입 적합도",
    "scriptTitle": "블록 종료 3분 백지 인출 루틴",
    "stepsTitle": "같은 시간에 기억 정착을 2배 높이는 3가지 학습 과학",
    "stickyTitle": "설계한 맞춤 공부 블록으로 지금 바로 타이머를 시작해 볼까요?",
    "stickySub": "무료 뽀모도로 집중 타이머 실행",
    "stickyBtn": "공부 시작 →",
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
    "title": "脑友好型学习区块与主动回忆定制器 | DopaBrain",
    "heroTitle": "脑友好型学习区块与主动回忆定制器",
    "heroLead": "根据状态定制15/3、25/5或50/10专注节奏与闭卷回忆复盘。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "脳に優しい学習ブロック＆アクティブリコール設計 | DopaBrain",
    "heroTitle": "脳に優しい学習ブロック＆アクティブリコール設計",
    "heroLead": "15/3・25/5・50/10の集中リズムと想起テストを最適化します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Personalizador de Bloques de Estudio y Recuerdo Activo | DopaBrain",
    "heroTitle": "Personalizador de Bloques de Estudio y Recuerdo Activo",
    "heroLead": "Ajusta sesiones 15/3, 25/5 o 50/10 con pausas sin móvil y repaso activo.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Personalizador de Blocos de Estudo e Recordação Ativa | DopaBrain",
    "heroTitle": "Personalizador de Blocos de Estudo e Recordação Ativa",
    "heroLead": "Adapte blocos 15/3, 25/5 ou 50/10 com revisão ativa sem distrações.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Gehirngerechter Lernblock- & Active-Recall-Planer | DopaBrain",
    "heroTitle": "Gehirngerechter Lernblock- & Active-Recall-Planer",
    "heroLead": "Passe 15/3-, 25/5- oder 50/10-Lernblöcke mit aktivem Abruf optimal an.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Personnalisateur de Blocs d’Étude & Rappel Actif | DopaBrain",
    "heroTitle": "Personnalisateur de Blocs d’Étude & Rappel Actif",
    "heroLead": "Adaptez vos cycles 15/3, 25/5 ou 50/10 avec mini-tests de mémorisation.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Конструктор учебных блоков и активного вспоминания | DopaBrain",
    "heroTitle": "Конструктор учебных блоков и активного вспоминания",
    "heroLead": "Подберите ритм 15/3, 25/5 или 50/10 с проверкой памяти без перегрузки.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "न्यूरो-फ्रेंडली स्टडी ब्लॉक और एक्टिव रिकॉल कस्टमाइज़र | DopaBrain",
    "heroTitle": "न्यूरो-फ्रेंडली स्टडी ब्लॉक और एक्टिव रिकॉल कस्टमाइज़र",
    "heroLead": "15/3, 25/5 या 50/10 स्टडी ब्लॉक और एक्टिव रिकॉल से याददाश्त बढ़ाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kustomisasi Blok Belajar & Active Recall | DopaBrain",
    "heroTitle": "Kustomisasi Blok Belajar & Active Recall",
    "heroLead": "Sesuaikan ritme belajar 15/3, 25/5, atau 50/10 dengan latihan ingat aktif.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Beyin Dostu Çalışma Bloğu ve Aktif Hatırlama Planı | DopaBrain",
    "heroTitle": "Beyin Dostu Çalışma Bloğu ve Aktif Hatırlama Planı",
    "heroLead": "15/3, 25/5 veya 50/10 odak ritminizi aktif hatırlama ile kişiselleştirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "passive_rereading",
    "en": "Passive Highlighting Loop — Re-reading notes without testing recall from blank paper",
    "ko": "수동 밑줄 긋기 — 책을 덮고 떠올리지 않고 눈으로만 반복해서 읽음"
  },
  {
    "id": "rigid_bell_mismatch",
    "en": "Timer Length Mismatch — 25 min cuts off deep flow OR feels impossibly long on tired days",
    "ko": "타이머 길이 부조화 — 25분이 몰입을 끊거나, 피곤한 날엔 너무 길어 부담됨"
  },
  {
    "id": "phone_break_hijack",
    "en": "5-Min Break Turns Into 35 Min — Picking up social feeds during study breaks",
    "ko": "5분 휴식의 35분화 — 쉬는 시간에 폰을 집었다가 공부 흐름이 완전히 끊김"
  },
  {
    "id": "marathon_cram_fade",
    "en": "3-Hour Cramming Burn — Studying straight through until comprehension drops to zero",
    "ko": "무휴식 3시간 벼락치기 — 쉬지 않고 밀어붙이다 후반에 기억이 안 남음"
  },
  {
    "id": "zero_spaced_review",
    "en": "No Next-Day Check — Moving on without a quick 5-minute 24-hour recall check",
    "ko": "다음 날 복습 누락 — 24시간 뒤 5분 인출 점검 없이 새 진도만 나감"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Study Friction — Use 15/3 Micro-Starts + Mandatory 2-Min Closed-Book Recall",
    "koT": "학습 마찰 높음 — 15분/3분 미니 블록 + 2분 백지 인출로 리듬을 살리세요",
    "enD": "Cognitive psychology (Roediger & Karpicke, 2006) shows retrieving material from memory beats passive re-reading by 50%+. Starting with low-resistance 15-minute blocks and screen-free 3-minute breaks rebuilds study stamina rapidly.",
    "koD": "인지심리학 연구(Roediger & Karpicke, 2006)에 따르면 책을 덮고 직접 떠올리는 인출 연습이 단순 재독보다 장기 기억을 50% 이상 높입니다. 15분 미니 블록과 스마트폰 없는 3분 휴식으로 시작해 보세요.",
    "enS": "\"15 minutes focused input, 2 minutes blank-paper recall, 3 minutes standing break without my phone.\"",
    "koS": "\"15분 집중 입력 → 2분 책 덮고 백지 인출 → 3분 폰 없는 기지개 휴식.\"",
    "enL": [
      "Start Block 1 at just 15–20 minutes so resistance stays low; extend to 40/10 only if you naturally want to keep going.",
      "Spend the final 2–3 minutes of every block writing 3 key points from memory with the book closed.",
      "Take phone-free breaks (water, stretch, window gaze) so the hippocampus consolidates what you just studied."
    ],
    "koL": [
      "1블록은 부담 없는 15~20분으로 시작하고, 흐름이 붙었을 때만 40/10으로 늘리세요.",
      "매 블록 마지막 2~3분은 책을 덮고 방금 배운 핵심 3가지를 백지에 직접 적어 보세요.",
      "쉬는 시간엔 폰 대신 물 마시기·기지개로 해마가 방금 배운 내용을 정리할 틈을 주세요."
    ]
  },
  "mid": {
    "enT": "Balanced Learner — Upgrade to 40/10 Flow Blocks With Spaced Recall",
    "koT": "안정적 학습 리듬 — 40분 몰입 + 5분 백지 정리 + 10분 오프라인 휴식을 추천합니다",
    "enD": "You have solid baseline stamina; shifting from passive review to closed-book recall and 40/10 flow blocks will boost retention sharply.",
    "koD": "기본 지구력이 좋습니다. 40분 몰입 끝에 5분간 핵심을 스스로 설명해 보는 인출 단계를 넣으면 성적이 크게 뜁니다.",
    "enS": "\"40 minutes deep study, 5 minutes closed-book self-quiz, 10 minutes true offline rest.\"",
    "koS": "\"40분 깊은 학습 + 5분 셀프 퀴즈 + 10분 완전 오프라인 휴식.\"",
    "enL": [
      "End every 40-minute block with 3 self-test questions written for tomorrow morning.",
      "Keep your smartphone in another room during breaks.",
      "Start tomorrow’s session by answering yesterday’s 3 questions cold."
    ],
    "koL": [
      "매 40분 블록 끝에 내일 아침 스스로에게 낼 문제 3개를 적어 두세요.",
      "쉬는 시간에도 스마트폰은 다른 방에 두고 눈을 쉬게 하세요.",
      "내일 공부는 어제 만든 3문제를 책 없이 풀어보는 것으로 시작하세요."
    ]
  },
  "high": {
    "enT": "Elite Learning Cadence — Pair 50/10 Deep Blocks With Interleaving",
    "koT": "최상급 학습 리듬 — 50/10 딥블록에 교차 학습(인터리빙)을 더해 보세요",
    "enD": "Your focus and retrieval habits are already research-grade. Mixing problem types across blocks strengthens real-world exam transfer.",
    "koD": "집중력과 인출 습관이 학습 과학 정석에 매우 가깝습니다. 유사한 문제 유형을 섞어 푸는 교차 학습으로 응용력을 완성하세요.",
    "enS": "\"Test myself early, rest cleanly, mix problem types.\"",
    "koS": "\"일찍 스스로 시험하고, 깔끔히 쉬며, 문제 유형을 섞어 응용한다.\"",
    "enL": [
      "Interleave 2 related topics inside a single 50-minute practice set.",
      "Teach a tricky concept out loud in 60 seconds (Feynman check).",
      "Protect sleep—overnight memory consolidation locks in your study hours."
    ],
    "koL": [
      "50분 연습 블록 안에서 연관된 2가지 개념을 섞어 풀어 보세요.",
      "어려운 개념은 60초 안에 소리 내어 쉽게 설명해 보세요(파인만 점검).",
      "수면 중 기억이 정착되므로 시험 전날에도 7시간 이상 잠을 지키세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_study_pomodoro_customizer_v1";
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
      window.gtag('event', "study_pomodoro_customizer_complete", {
        tool_slug: "study-pomodoro-customizer",
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
      var shareUrl = "https://dopabrain.com/portal/tools/study-pomodoro-customizer.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "study-pomodoro-customizer",
        filename: 'dopabrain-study-pomodoro-customizer-card.png',
        badge: "LEARNING SCIENCE • NEURO-FRIENDLY STUDY BLOCK CUSTOMIZER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#3b82f6",
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
