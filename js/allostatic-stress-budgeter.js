/* Allostatic Stress Load & Daily Energy Budgeter
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Allostatic Stress Load & Daily Energy Budgeter | DopaBrain",
    "metaDesc": "Wondering why small tasks feel heavy even after a weekend off? Map 5 hidden allostatic stress deposits locally and balance today’s energy budget before hitting empty.",
    "kicker": "ALLOSTATIC LOAD • DAILY ENERGY BUDGET",
    "heroTitle": "Allostatic Stress Load & Daily Energy Budgeter",
    "heroLead": "Wondering why small tasks feel heavy even after a weekend off? Map 5 hidden allostatic stress deposits locally and balance today’s energy budget before hitting empty.",
    "chip1": "5 Stress Deposits",
    "chip2": "Daily Budget Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • RATE HIDDEN STRESS DEPOSITS TODAY (1 = LIGHT, 5 = HEAVY)",
    "step1Title": "What invisible loads are draining your daily energy budget?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One non-essential obligation I will postpone or simplify today (100% local):",
    "ctaBtn": "Calculate My Stress Budget",
    "resultBadge": "STEP 2 • YOUR DAILY ALLOSTATIC ENERGY PLAN",
    "noteTitle": "Today’s Intentional Energy Trade-Off",
    "meterLabel": "Remaining Adaptive Reserve",
    "scriptTitle": "Self-Pacing Permission Line",
    "stepsTitle": "3 Immediate Moves to Lower Allostatic Load",
    "stickyTitle": "Want a full 60-second stress-load profile?",
    "stickySub": "Take the free Stress Check & get a personalized reset plan",
    "stickyBtn": "Stress Check →",
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
    "title": "만성 스트레스 부하·일일 에너지 예산 플래너 | DopaBrain",
    "metaDesc": "주말에 쉬었는데도 사소한 일에 쉽게 지치나요? 누적된 5가지 만성 스트레스 요인을 비공개로 점검하고 오늘의 에너지 예산을 균형 있게 재조정하세요.",
    "kicker": "만성 스트레스 부하 · 하루 에너지 예산표",
    "heroTitle": "만성 스트레스 부하·일일 에너지 예산 플래너",
    "heroLead": "주말에 쉬었는데도 사소한 일에 쉽게 지치나요? 누적된 5가지 만성 스트레스 요인을 비공개로 점검하고 오늘의 에너지 예산을 균형 있게 재조정하세요.",
    "chip1": "5가지 스트레스 부하",
    "chip2": "일일 에너지 예산",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 오늘의 누적 스트레스 부하 점검 (1 = 가벼움, 5 = 매우 무거움)",
    "step1Title": "오늘 내 에너지 통장에서 가장 크게 빠져나가는 보이지 않는 부하는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 과감히 미루거나 단순화할 비핵심 일정 1가지 (100% 로컬):",
    "ctaBtn": "내 스트레스 에너지 예산 계산하기",
    "resultBadge": "2단계 • 오늘의 스트레스 부하 균형 플랜",
    "noteTitle": "오늘 내가 지키기로 한 에너지 절약 선택",
    "meterLabel": "남은 회복·적응 여유 에너지",
    "scriptTitle": "속도를 조절하는 자기 허용 문장",
    "stepsTitle": "스트레스 부하를 낮추는 3가지 즉시 행동",
    "stickyTitle": "60초 만에 나의 전체 스트레스 지수를 점검해 볼까요?",
    "stickySub": "무료 스트레스 체크로 현재 긴장도와 회복 루틴 확인",
    "stickyBtn": "스트레스 체크 →",
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
    "title": "慢性压力负荷与每日能量预算器 | DopaBrain",
    "heroTitle": "慢性压力负荷与每日能量预算器",
    "heroLead": "排查5大隐性压力消耗，在耗竭前科学平衡今日精力预算与恢复节奏。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "慢性ストレス負荷＆エネルギー予算設計 | DopaBrain",
    "heroTitle": "慢性ストレス負荷＆エネルギー予算設計",
    "heroLead": "隠れた5つのストレス消耗を可視化し、燃え尽き前に今日のエネルギー配分を整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Presupuesto de Carga Alostática y Energía | DopaBrain",
    "heroTitle": "Presupuesto de Carga Alostática y Energía",
    "heroLead": "Mapea 5 fugas ocultas de estrés acumulado y equilibra tu presupuesto diario de energía.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Orçamento de Carga Alostática e Energia | DopaBrain",
    "heroTitle": "Orçamento de Carga Alostática e Energia",
    "heroLead": "Mapeie 5 drenos ocultos de estresse crônico e equilibre sua energia diária com calma.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Allostatische Stresslast & Energie-Budget | DopaBrain",
    "heroTitle": "Allostatische Stresslast & Energie-Budget",
    "heroLead": "Erfasse 5 versteckte Stressfaktoren und plane dein realistisches Tages-Energiebudget.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Budget Énergie & Charge Allostatique | DopaBrain",
    "heroTitle": "Budget Énergie & Charge Allostatique",
    "heroLead": "Identifiez 5 fuites invisibles de stress cumulé et équilibrez votre budget énergie du jour.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Бюджет энергии и аллостатической нагрузки | DopaBrain",
    "heroTitle": "Бюджет энергии и аллостатической нагрузки",
    "heroLead": "Выявите 5 скрытых утечек хронического стресса и сбалансируйте запас сил на день.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "एलोस्टैटिक स्ट्रेस लोड व एनर्जी बटर | DopaBrain",
    "heroTitle": "एलोस्टैटिक स्ट्रेस लोड व एनर्जी बटर",
    "heroLead": "5 छिपे हुए तनाव स्रोतों को पहचानें और थकान से पहले आज की ऊर्जा का संतुलन बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kalkulator Beban Stres & Anggaran Energi | DopaBrain",
    "heroTitle": "Kalkulator Beban Stres & Anggaran Energi",
    "heroLead": "Petakan 5 penguras stres tersembunyi dan atur anggaran energi harian sebelum burnout.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Allostatik Stres Yükü ve Enerji Bütçesi | DopaBrain",
    "heroTitle": "Allostatik Stres Yükü ve Enerji Bütçesi",
    "heroLead": "5 gizli stres tüketimini haritalayın ve tükenmeden günlük enerji bütçenizi dengeleyin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "sleep_deficit",
    "en": "Sleep & Circadian Debt — Running on fragmented or short sleep for 2+ nights",
    "ko": "수면·리듬 부채 — 이틀 이상 짧거나 끊긴 수면 상태로 버팀"
  },
  {
    "id": "emotional_masking",
    "en": "Emotional Masking — Staying upbeat or polite all day while feeling depleted",
    "ko": "감정 가면 피로 — 지쳐 있는데도 하루 종일 밝고 친절한 태도 유지"
  },
  {
    "id": "decision_volume",
    "en": "Micro-Decision Fatigue — Making dozens of small choices with zero templates",
    "ko": "미세 결정 피로 — 기준 없이 수많은 작은 선택을 계속 처리함"
  },
  {
    "id": "unfinished_admin",
    "en": "Background Life Admin — Bills, forms, or unresolved logistics hovering mentally",
    "ko": "밀린 생활 행정 — 고지서·서류·연락 등 미처리 일이 머릿속에 맴돔"
  },
  {
    "id": "sensory_noise",
    "en": "Continuous Sensory Input — Commute noise, bright screens, or zero quiet breaks",
    "ko": "연속 감각 자극 — 소음·강한 조명·화면 노출로 고요한 틈이 없음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Reserve Running Thin — Switch to Maintenance-Mode Energy Budget Today",
    "koT": "적응 여유 에너지 고갈 직전 — 오늘은 유지 모드로 예산을 줄이세요",
    "enD": "When cumulative allostatic load stacks across sleep, emotions, and admin, even small friction triggers exhaustion. Protect minimum essentials and add two quiet recovery pockets.",
    "koD": "수면·감정·생활 부하가 겹치면 작은 일도 버겁게 느껴집니다. 오늘은 필수 1~2가지만 남기고 의도적인 회복 구간을 먼저 확보하세요.",
    "enS": "\"My energy budget is real, not infinite. Protecting a smaller list today prevents a multi-day crash tomorrow.\"",
    "koS": "\"내 에너지 통장은 무한하지 않아. 오늘 목록을 줄여 지키는 것이 내일 더 큰 방전을 막는 가장 현명한 선택이야.\"",
    "enL": [
      "Cut today’s must-do list down to 1 essential output and defer optional errands.",
      "Insert two 10-minute zero-screen quiet breaks before dinner.",
      "Automate dinner and bedtime tonight so you make zero extra decisions after 8 PM."
    ],
    "koL": [
      "오늘 반드시 끝낼 일을 딱 1개로 줄이고 선택 일정은 과감히 미루세요.",
      "저녁 식사 전 화면 없는 10분 고요한 휴식을 2회 넣으세요.",
      "오후 8시 이후 추가 결정이 없도록 저녁 메뉴와 취침 루틴을 단순화하세요."
    ]
  },
  "mid": {
    "enT": "Balanced-Tight Budget — Trim One Hidden Drain to Stay Steady",
    "koT": "빠듯한 균형 상태 — 숨은 누수 요인 1개만 줄여도 안정됩니다",
    "enD": "You have enough capacity for key priorities, provided you stop spending reserve on low-value multitasking and unspoken favors.",
    "koD": "핵심 과제를 해낼 여력은 충분합니다. 가치가 낮은 멀티태스킹과 무리한 부탁 수락만 줄이면 하루를 안정적으로 마칠 수 있습니다.",
    "enS": "\"I can do important work today without saying yes to every extra request.\"",
    "koS": "\"모든 추가 부탁을 다 들어주지 않아도 오늘 중요한 일은 충분히 잘 해낼 수 있어.\"",
    "enL": [
      "Batch all minor life-admin messages into one 15-minute afternoon window.",
      "Take a brisk 5-minute outdoor walk or stretch between work blocks.",
      "Set a clear stop time tonight to protect sleep recovery."
    ],
    "koL": [
      "사소한 생활·업무 메시지는 오후 15분 한 타임에 몰아서 처리하세요.",
      "업무 블록 사이에 5분 산책이나 가벼운 스트레칭을 넣으세요.",
      "수면 회복을 위해 오늘의 명확한 마감 시간을 미리 정해두세요."
    ]
  },
  "high": {
    "enT": "Healthy Adaptive Reserve — Invest Surplus Wisely Without Overbooking",
    "koT": "여유로운 적응 에너지 — 과부하 없이 핵심 목표에 투자하세요",
    "enD": "Your allostatic balance is in a strong recovery zone. Use this clarity for meaningful progress while preserving the sleep and quiet habits that built it.",
    "koD": "스트레스 부하가 안정적으로 관리되고 있습니다. 이 맑은 에너지를 의미 있는 목표에 쓰되, 지금의 수면·휴식 리듬을 깨지 마세요.",
    "enS": "\"Feeling good is a signal to stay steady, not to double my workload.\"",
    "koS": "\"컨디션이 좋을수록 무리하게 일정을 2배로 늘리지 않고 이 좋은 리듬을 꾸준히 지킬게.\"",
    "enL": [
      "Invest your best 60 minutes into a high-value creative or strategic goal.",
      "Keep a 20% buffer open on your calendar rather than filling every gap.",
      "Log which habit helped most today so you can repeat it next week."
    ],
    "koL": [
      "가장 맑은 60분을 가치 높은 창작·전략 목표에 먼저 투자하세요.",
      "빈 시간마다 일정을 채우지 말고 20% 완충 여유를 남겨두세요.",
      "오늘 컨디션 유지에 가장 도움 된 습관 1가지를 기억해 두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_allostatic_budget_v1";
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
      window.gtag('event', "allostatic_budget_complete", {
        tool_slug: "allostatic-stress-budgeter",
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
      var shareUrl = "https://dopabrain.com/portal/tools/allostatic-stress-budgeter.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "allostatic-stress-budgeter",
        filename: 'dopabrain-allostatic-stress-budgeter-card.png',
        badge: "ALLOSTATIC LOAD • DAILY ENERGY BUDGET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f97316",
        accent2: "#ec4899"
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
