/* Weekly Meal & Errand Decision-Fatigue Simplifier
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Weekly Meal & Errand Decision-Fatigue Simplifier | DopaBrain",
    "metaDesc": "Exhausted at 6 PM trying to answer \"what’s for dinner?\" for the 300th time this year? Audit 5 repetitive daily-choice drains locally and build a 5-default rotation that saves 300+ micro-decisions a month.",
    "kicker": "DAILY LIFE ADMIN • DECISION-FATIGUE SIMPLIFIER",
    "heroTitle": "Weekly Meal & Errand Decision-Fatigue Simplifier",
    "heroLead": "Exhausted at 6 PM trying to answer \"what’s for dinner?\" for the 300th time this year? Audit 5 repetitive daily-choice drains locally and build a 5-default rotation that saves 300+ micro-decisions a month.",
    "chip1": "5 Daily Choice Drains",
    "chip2": "5-Default Rotation",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • SPOT REPETITIVE HOUSEHOLD & MEAL CHOICE DRAINS (1 = EASY, 5 = EXHAUSTING)",
    "step1Title": "Which recurring everyday decisions drain your evening willpower most?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My 3 zero-thought \"emergency 10-minute dinners\" to keep stocked (100% local):",
    "ctaBtn": "Build My Zero-Friction Defaults",
    "resultBadge": "STEP 2 • YOUR LOW-FRICTION WEEKLY DEFAULTS PLAN",
    "noteTitle": "My 3 Zero-Thought 10-Minute Dinners",
    "meterLabel": "Evening Mental Bandwidth Saved",
    "scriptTitle": "Good-Enough Household Standard",
    "stepsTitle": "3 Simple Default Systems That Free Your Evenings",
    "stickyTitle": "Curious how your brain naturally handles routines vs. novelty?",
    "stickySub": "Take the free 60-second Brain Type Quiz next",
    "stickyBtn": "Brain Type →",
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
    "title": "매일 저녁 메뉴·생활 집안일 결정 피로 단순화 플래너 | DopaBrain",
    "metaDesc": "오후 6시마다 \"오늘 저녁 뭐 먹지?\"를 고민하다 지쳐 배달 앱만 켜게 되나요? 5가지 반복 생활 결정 누수를 점검하고 한 달 300개 고민을 없애는 기본값 로테이션을 만드세요.",
    "kicker": "식사·집안일 결정 피로 · 생활 기본값(Default) 설계",
    "heroTitle": "매일 저녁 메뉴·생활 집안일 결정 피로 단순화 플래너",
    "heroLead": "오후 6시마다 \"오늘 저녁 뭐 먹지?\"를 고민하다 지쳐 배달 앱만 켜게 되나요? 5가지 반복 생활 결정 누수를 점검하고 한 달 300개 고민을 없애는 기본값 로테이션을 만드세요.",
    "chip1": "5가지 생활 결정 피로",
    "chip2": "5가지 기본값 로테이션",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 반복되는 식사·생활 결정 피로 점검 (1 = 간편함, 5 = 매우 지침)",
    "step1Title": "퇴근 후 저녁 에너지를 가장 크게 깎아 먹는 반복 생활 고민은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 고민 0초 만에 만들 수 있는 나만의 \"10분 비상 저녁\" 3가지 (100% 로컬):",
    "ctaBtn": "내 생활 기본값(Default) 로테이션 만들기",
    "resultBadge": "2단계 • 결정 피로를 줄이는 주간 기본값 플랜",
    "noteTitle": "고민 0초 10분 비상 저녁 3종",
    "meterLabel": "저녁 정신 에너지 보존 지수",
    "scriptTitle": "완벽한 살림 압박을 내려놓는 기준 문장",
    "stepsTitle": "저녁을 가볍게 만드는 3가지 기본값 시스템",
    "stickyTitle": "내 뇌가 루틴형인지 탐험형인지 인지 성향도 확인해 볼까요?",
    "stickySub": "무료 60초 두뇌 유형 테스트로 나의 사고 스타일 확인",
    "stickyBtn": "두뇌 유형 →",
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
    "title": "每日三餐与家务决策疲劳简化器 | DopaBrain",
    "heroTitle": "每日三餐与家务决策疲劳简化器",
    "heroLead": "用工作日5大默认主题与10分钟应急餐单彻底消除傍晚选餐焦虑。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "献立＆家事の決定疲れシンプル化ツール | DopaBrain",
    "heroTitle": "献立＆家事の決定疲れシンプル化ツール",
    "heroLead": "夕方6時の「今日何食べる？」疲れを平日5テーマ定番化で解消します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Simplificador de Fatiga de Comidas y Rutinas | DopaBrain",
    "heroTitle": "Simplificador de Fatiga de Comidas y Rutinas",
    "heroLead": "Elimina el agobio de qué cenar con 5 temas semanales por defecto sin estrés.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Simplificador de Fadiga de Refeições | DopaBrain",
    "heroTitle": "Simplificador de Fadiga de Refeições",
    "heroLead": "Elimine o cansaço de decidir o jantar todo dia com 5 padrões semanais simples.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Essens- & Alltags-Entscheidungshelfer | DopaBrain",
    "heroTitle": "Essens- & Alltags-Entscheidungshelfer",
    "heroLead": "Stoppe den 18-Uhr-Kochstress mit 5 einfachen Wochentags-Standards.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Simplificateur Fatigue Repas & Quotidien | DopaBrain",
    "heroTitle": "Simplificateur Fatigue Repas & Quotidien",
    "heroLead": "Éliminez la charge mentale du dîner avec 5 thèmes simples par défaut.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Упрощение выбора ужинов и быта | DopaBrain",
    "heroTitle": "Упрощение выбора ужинов и быта",
    "heroLead": "Уберите вечернюю усталость от выбора еды с помощью 5 простых шаблонов недели.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "वीकली मील व डेली डिसीज़न सिम्प्लीफ़ायर | DopaBrain",
    "heroTitle": "वीकली मील व डेली डिसीज़न सिम्प्लीफ़ायर",
    "heroLead": "5 आसान वीकडे थीम से रोज़ शाम \"क्या बनाएं\" की निर्णय थकान खत्म करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Penyederhana Lelah Memilih Menu & Urusan | DopaBrain",
    "heroTitle": "Penyederhana Lelah Memilih Menu & Urusan",
    "heroLead": "Hilangkan bingung makan malam jam 6 sore dengan rotasi 5 menu default mingguan.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Akşam Yemeği ve Günlük Karar Sadeleştirici | DopaBrain",
    "heroTitle": "Akşam Yemeği ve Günlük Karar Sadeleştirici",
    "heroLead": "5 haftalık varsayılan tema ile akşam 6 karar yorgunluğunu zahmetsizce bitirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "dinner_blank",
    "en": "6 PM Dinner Blank — Deciding meals from scratch every evening while hungry and tired",
    "ko": "오후 6시 저녁 공백 — 배고프고 지친 상태에서 매일 백지부터 저녁 메뉴 고민"
  },
  {
    "id": "grocery_drift",
    "en": "Unplanned Grocery Runs — Multiple mid-week trips without a reusable core list",
    "ko": "즉흥 장보기 반복 — 고정 장바구니 목록 없이 주중에 여러 번 마트·앱을 뒤짐"
  },
  {
    "id": "outfit_morning",
    "en": "Morning Friction — Hunting for clothes, keys, or lunch items while rushing out",
    "ko": "아침 준비 마찰 — 출근·등교 직전 옷·소지품·점심을 찾느라 에너지를 먼저 소모"
  },
  {
    "id": "chore_negotiation",
    "en": "Invisible Chore Tax — Tracking laundry, dishes, and bills mentally without fixed days",
    "ko": "보이지 않는 가사 부하 — 빨래·청소·장보기를 요일 기준 없이 머릿속으로만 기억함"
  },
  {
    "id": "variety_guilt",
    "en": "Novelty Guilt — Believing every weekday meal must be exciting and restaurant-worthy",
    "ko": "매끼 특별함 강박 — 평일 저녁도 매번 새롭고 완벽하게 차려야 한다는 부담"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Domestic Decision Drain — Switch to a 5-Theme Weekday Rotation",
    "koT": "생활 결정 피로 높음 — 평일 5가지 고정 테마 로테이션으로 즉시 전환하세요",
    "enD": "Psychologists studying ego depletion and household cognitive load (Daminger, 2019) found that \"deciding what needs doing\" is often more tiring than the physical chore itself. Pre-deciding 5 simple weekday defaults hands back hours of calm.",
    "koD": "가사 인지 부하 연구(Daminger, 2019)에 따르면 실제 요리·청소보다 \"무엇을 할지 결정하는 과정\"이 뇌를 훨씬 더 지치게 합니다. 평일 5개 테마 기본값만 정해두어도 저녁이 놀랍게 가벼워집니다.",
    "enS": "\"Weekday meals are fuel and comfort, not a cooking competition. Repeating 5 easy favorites is smart energy management.\"",
    "koS": "\"평일 저녁은 요리 경연대회가 아니라 나를 먹여 살리는 연료야. 쉬운 5가지 단골 메뉴를 반복하는 게 가장 똑똑한 전략이야.\"",
    "enL": [
      "Assign 5 effortless weekday dinner themes (e.g., Mon Bowls, Tue Pasta, Wed Sheet-Pan, Thu Soup/Salad, Fri Takeout/Easy).",
      "Save ONE reusable 15-item core grocery checklist on your phone so shopping takes 10 minutes.",
      "Assign 1 fixed weekday per recurring chore (e.g., Wed laundry, Sun 15-min reset) instead of deciding daily."
    ],
    "koL": [
      "평일 5일 간편 테마(예: 월 덮밥·화 파스타/면·수 구이·목 국/샐러드·금 자유식)를 고정하세요.",
      "스마트폰 메모에 매주 반복 구매하는 15개 기본 식재료 체크리스트를 저장해 두세요.",
      "빨래·정리 같은 반복 집안일은 매일 고민하지 말고 고정 요일(예: 수요일 빨래)을 배정하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Evening Drag — Keep 3 Backup 10-Minute Meals Stocked",
    "koT": "중간 수준 저녁 피로 — 10분 비상 식사 3종만 상시 구비해도 충분합니다",
    "enD": "Most days flow fine, yet unexpected late evenings still trigger takeaway fatigue. Keeping 3 reliable zero-thought pantry meals closes that gap cleanly.",
    "koD": "평소에는 괜찮지만 야근하거나 갑자기 지친 날 결정 마비가 옵니다. 냉장·냉동실에 고민 0초 비상 식사 3종만 늘 채워두면 해결됩니다.",
    "enS": "\"When energy drops below 30%, I reach straight for my 10-minute backup meal with zero guilt.\"",
    "koS": "\"에너지가 30% 아래로 떨어지면 죄책감 없이 바로 10분 비상 메뉴를 꺼내 먹을게.\"",
    "enL": [
      "Restock your 3 backup pantry/freezer meals every Sunday.",
      "Cook double portions twice a week so tomorrow’s lunch/dinner is automatic.",
      "Prep tomorrow’s essentials (bag, water, outfit) in 3 minutes before bed."
    ],
    "koL": [
      "매주 일요일 10분 비상 식사 재료 3종이 떨어지지 않게 채워 두세요.",
      "주 2회만 2배 분량으로 만들어 다음 날 한 끼를 자동화하세요.",
      "취침 전 3분만 들여 내일 옷·가방·소지품을 미리 놓아두세요."
    ]
  },
  "high": {
    "enT": "Smooth Life Defaults — Enjoy the Cognitive Space You Protected",
    "koT": "매끄러운 생활 기본값 — 잘 다져진 자동화 루틴 덕분에 여유가 풍부합니다",
    "enD": "Your everyday systems remove unnecessary friction gracefully. Keep updating your seasonal favorites once a quarter so defaults stay enjoyable.",
    "koD": "일상 의사결정 자동화가 매우 깔끔합니다. 계절이 바뀔 때 단골 메뉴 1~2개만 교체해 주면 지루함 없이 오래 유지할 수 있습니다.",
    "enS": "\"Simple defaults for routine life leave my best brainpower for people and projects I love.\"",
    "koS": "\"일상의 단순한 기본값이 사랑하는 사람과 중요한 일에 쓸 뇌 에너지를 지켜 준다.\"",
    "enL": [
      "Keep your core grocery list synced for effortless restocks.",
      "Rotate 1 fun new recipe on relaxed weekends only, never tired Tuesdays.",
      "Appreciate how calm 6 PM feels when defaults handle the basics."
    ],
    "koL": [
      "기본 장보기 체크리스트를 계속 유지해 장보기 시간을 최소화하세요.",
      "새로운 요리는 지친 화요일이 아닌 여유로운 주말에만 가볍게 시도하세요.",
      "기본값이 지켜주는 오후 6시의 평온함을 충분히 누리세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_life_defaults_v1";
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
      window.gtag('event', "life_defaults_complete", {
        tool_slug: "sunday-meal-decision-fatigue",
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
      var shareUrl = "https://dopabrain.com/portal/tools/sunday-meal-decision-fatigue.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "sunday-meal-decision-fatigue",
        filename: 'dopabrain-sunday-meal-decision-fatigue-card.png',
        badge: "DAILY LIFE ADMIN • DECISION-FATIGUE SIMPLIFIER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#22c55e",
        accent2: "#f59e0b"
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
