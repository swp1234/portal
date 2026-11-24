/* Financial Stress & Money-Worry Action Triage
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Financial Stress & Money-Worry Action Triage | DopaBrain",
    "metaDesc": "Lying awake calculating bills or avoiding banking apps out of dread? Separate controllable money steps from runaway catastrophic loops locally in 60 seconds.",
    "kicker": "MONEY ANXIETY RELIEF • ACTION TRIAGE",
    "heroTitle": "Financial Stress & Money-Worry Action Triage",
    "heroLead": "Lying awake calculating bills or avoiding banking apps out of dread? Separate controllable money steps from runaway catastrophic loops locally in 60 seconds.",
    "chip1": "5 Money Stressors",
    "chip2": "1-Step Calm Triage",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • RATE YOUR CURRENT MONEY-STRESS SIGNALS (1 = LOW, 5 = HIGH)",
    "step1Title": "Which money-worry patterns are driving tension right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One concrete 10-minute money admin step I can do in daylight (100% local):",
    "ctaBtn": "Build My Money-Calm Triage",
    "resultBadge": "STEP 2 • YOUR FINANCIAL WORRY CALM PROTOCOL",
    "noteTitle": "My Daylight 10-Minute Action Anchor",
    "meterLabel": "Financial Calm & Clarity Index",
    "scriptTitle": "Late-Night Worry Containment Line",
    "stepsTitle": "3 Grounded Moves to Replace Money Dread with Clarity",
    "stickyTitle": "Want to measure how money stress affects your nervous system?",
    "stickySub": "Take the free 60-second Stress Check next",
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
    "title": "금전 스트레스·돈 걱정 현실 행동 트리아지 | DopaBrain",
    "metaDesc": "고지서와 통장 잔고 생각에 밤잠을 설치거나 앱 열기조차 두려운가요? 통제 가능한 현실 행동과 과장된 불안을 60초 만에 비공개로 분리하세요.",
    "kicker": "금전 불안 진정 · 현실 행동 트리아지",
    "heroTitle": "금전 스트레스·돈 걱정 현실 행동 트리아지",
    "heroLead": "고지서와 통장 잔고 생각에 밤잠을 설치거나 앱 열기조차 두려운가요? 통제 가능한 현실 행동과 과장된 불안을 60초 만에 비공개로 분리하세요.",
    "chip1": "5가지 금전 스트레스",
    "chip2": "1단계 현실 정리",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 금전 불안 신호 점검 (1 = 낮음, 5 = 높음)",
    "step1Title": "지금 마음을 가장 무겁게 누르는 돈 걱정 패턴은 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 낮 시간에 10분만 투자해 확인할 구체적 금전 행동 1가지 (100% 로컬):",
    "ctaBtn": "내 금전 불안 진정 플랜 만들기",
    "resultBadge": "2단계 • 금전 불안 진정 및 실행 프로토콜",
    "noteTitle": "낮 시간에 실행할 10분 금전 행동 앵커",
    "meterLabel": "금전 평온·명료도 지수",
    "scriptTitle": "밤중 돈 걱정을 멈추는 현실 문장",
    "stepsTitle": "막연한 불안을 현실 통제감으로 바꾸는 3단계",
    "stickyTitle": "금전 걱정이 현재 스트레스 지수에 얼마나 영향을 주는지 확인해 볼까요?",
    "stickySub": "무료 60초 스트레스 체크로 전체 긴장도 점검하기",
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
    "title": "财务焦虑与金钱担忧行动分流器 | DopaBrain",
    "heroTitle": "财务焦虑与金钱担忧行动分流器",
    "heroLead": "60秒本地拆解深夜金钱恐慌，聚焦明天白天可执行的一个具体步骤。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "お金の不安＆現実行動トリアージ | DopaBrain",
    "heroTitle": "お金の不安＆現実行動トリアージ",
    "heroLead": "夜の過度なお金の不安と今できる具体的な一歩を60秒で切り分けます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Triaje de Estrés Financiero y Calma | DopaBrain",
    "heroTitle": "Triaje de Estrés Financiero y Calma",
    "heroLead": "Separa pasos reales de dinero de los bucles nocturnos de ansiedad en 60 segundos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Triagem de Estresse Financeiro | DopaBrain",
    "heroTitle": "Triagem de Estresse Financeiro",
    "heroLead": "Separe ações financeiras práticas dos ciclos noturnos de ansiedade em 60 segundos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Finanzstress- & Geldsorgen-Triage | DopaBrain",
    "heroTitle": "Finanzstress- & Geldsorgen-Triage",
    "heroLead": "Trenne machbare Geldschritte in 60 Sek. von nächtlichem Katastrophendenken.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Triage Stress Financier & Clarté | DopaBrain",
    "heroTitle": "Triage Stress Financier & Clarté",
    "heroLead": "Séparez vos actions concrètes des spirales d’angoisse financière en 60 secondes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Триаж финансовой тревоги и ясности | DopaBrain",
    "heroTitle": "Триаж финансовой тревоги и ясности",
    "heroLead": "Отделите реальный шаг по финансам от ночной паники за 60 секунд локально.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "फाइनेंशियल स्ट्रेस व मनी-वरी ट्रायेज | DopaBrain",
    "heroTitle": "फाइनेंशियल स्ट्रेस व मनी-वरी ट्रायेज",
    "heroLead": "रात की पैसे की चिंता को 60 सेकंड में दिन के एक ठोस कदम से अलग करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Triase Stres Finansial & Ketenangan | DopaBrain",
    "heroTitle": "Triase Stres Finansial & Ketenangan",
    "heroLead": "Pisahkan langkah keuangan nyata dari kepanikan larut malam secara privat dalam 60 detik.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Finansal Stres ve Para Kaygısı Triyajı | DopaBrain",
    "heroTitle": "Finansal Stres ve Para Kaygısı Triyajı",
    "heroLead": "Gece para kaygısını 60 saniyede kontrol edilebilir tek bir gündüz adımına ayırın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "account_avoidance",
    "en": "Ostrich Avoidance — Putting off opening banking apps, statements, or bills out of fear",
    "ko": "통장·명세서 회피 — 불안감 때문에 앱이나 고지서 확인을 계속 미룸"
  },
  {
    "id": "late_night_math",
    "en": "Midnight Mental Math — Re-running worst-case numbers in bed when nothing can be solved",
    "ko": "새벽 머릿속 계산 — 해결할 수 없는 밤중에 최악의 숫자를 반복 계산함"
  },
  {
    "id": "income_comparison",
    "en": "Social Wealth Comparison — Feeling behind peers after seeing lifestyle posts online",
    "ko": "타인 자산 비교 — 주변이나 SNS 소비를 보며 뒤처졌다는 압박감을 느낌"
  },
  {
    "id": "impulse_relief",
    "en": "Stress-Spending Loop — Small convenience buys used to soothe exhaustion, followed by guilt",
    "ko": "스트레스 소비 루프 — 지친 마음을 달래려 소액 결제 후 다시 죄책감을 느낌"
  },
  {
    "id": "unclear_numbers",
    "en": "Foggy Baseline — Not knowing exact monthly essentials vs. optional expenses",
    "ko": "흐릿한 고정비 기준 — 한 달 필수 지출과 선택 지출의 정확한 경계를 모름"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Money-Stress Fog — Shrink the Problem to One Daylight Number",
    "koT": "금전 불안 안개 짙음 — 문제를 낮 시간의 숫자 1개로 축소하세요",
    "enD": "Behavioral finance research shows financial avoidance amplifies anxiety far more than knowing the exact number. You do not need a 5-year plan tonight—only one calm 10-minute daylight check-in.",
    "koD": "행동재무 연구에 따르면 정확한 숫자를 마주하는 것보다 외면할 때 불안이 훨씬 커집니다. 오늘 밤 5년 계획을 세울 필요는 없습니다. 낮에 단 10분만 현실 숫자 1개를 확인하세요.",
    "enS": "\"No financial problem has ever been solved at midnight. Tomorrow at 10 AM I will spend 10 calm minutes on one concrete step.\"",
    "koS": "\"새벽 침대 위에서 해결된 돈 문제는 없어. 내일 낮 10시에 딱 10분만 차분하게 한 가지부터 확인할게.\"",
    "enL": [
      "Write down ONLY your 4 bare-minimum monthly survival costs (housing, food, utilities, transport).",
      "Pick one small win for tomorrow morning (cancel one unused subscription or call one billing desk).",
      "Ban financial math after 9 PM—park any number on paper and close the notebook."
    ],
    "koL": [
      "주거·식비·공과금·교통비 등 최소 생존 고정비 4가지만 종이에 적어보세요.",
      "내일 오전 10분 안에 끝낼 작은 승리 1개(안 쓰는 구독 해지 등)를 고르세요.",
      "밤 9시 이후에는 금전 계산을 금지하고 떠오른 생각은 메모장에만 적어 덮으세요."
    ]
  },
  "mid": {
    "enT": "Manageable Tension — Set a Weekly 15-Minute Money Date",
    "koT": "관리 가능한 긴장 — 주 1회 15분 머니 데이트로 불안을 격리하세요",
    "enD": "You have solid awareness, yet sporadic worry leaks into daily focus. Giving money admin a fixed weekly container keeps it from hijacking every afternoon.",
    "koD": "현실 감각은 좋지만 수시로 떠오르는 걱정이 일상 집중력을 흐립니다. 주 1회 고정 점검 시간을 정하면 나머지 6일이 훨씬 가벼워집니다.",
    "enS": "\"Money belongs in my Sunday 15-minute review, not in every spare moment of my week.\"",
    "koS": "\"돈 계산은 일요일 15분 점검 시간에만 다루고, 평일 내내 머릿속에 띄워두지 않을게.\"",
    "enL": [
      "Schedule a recurring 15-minute weekly \"money clarity\" slot with coffee or tea.",
      "Automate minimum bill alerts so memory load drops to zero.",
      "Replace one stress-scroll shopping app with a 24-hour wishlist pause rule."
    ],
    "koL": [
      "차 한 잔과 함께 매주 15분 고정 금전 점검 루틴을 캘린더에 등록하세요.",
      "자동이체·납부 알림을 설정해 머릿속 기억 부담을 0으로 줄이세요.",
      "충동 구매 전 24시간 장바구니 보류 규칙을 적용해 죄책감 루프를 끊으세요."
    ]
  },
  "high": {
    "enT": "Grounded Financial Calm — Keep Simple Systems Doing the Heavy Lifting",
    "koT": "안정적인 금전 평온 — 단순한 시스템으로 지금의 명료함을 유지하세요",
    "enD": "Your emotional relationship with money is steady and proactive. Maintain your lightweight routines and guard against lifestyle comparison noise.",
    "koD": "돈에 대한 정서적 거리와 현실 통제감이 건강하게 균형을 이루고 있습니다. 가벼운 점검 루틴을 유지하며 외부 비교 소음만 차단하세요.",
    "enS": "\"My financial plan matches my real life, not someone else’s highlight reel.\"",
    "koS": "\"나의 재정 리듬은 타인의 하이라이트가 아니라 내 실제 삶에 맞춰져 있어.\"",
    "enL": [
      "Keep your monthly essentials snapshot updated in 5 minutes once a month.",
      "Mute finance-comparison feeds that trigger unnecessary urgency.",
      "Acknowledge one tangible area where your steady habits already protected you."
    ],
    "koL": [
      "월 1회 5분만 투자해 필수 고정비 스냅샷을 최신 상태로 유지하세요.",
      "불필요한 조급함을 유발하는 비교성 피드는 과감히 뮤트하세요.",
      "꾸준한 습관이 나를 지켜준 구체적인 성과 1가지를 스스로 인정해 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_financial_worry_triage_v1";
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
      window.gtag('event', "financial_worry_triage_complete", {
        tool_slug: "financial-worry-action-triage",
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
      var shareUrl = "https://dopabrain.com/portal/tools/financial-worry-action-triage.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "financial-worry-action-triage",
        filename: 'dopabrain-financial-worry-action-triage-card.png',
        badge: "MONEY ANXIETY RELIEF • ACTION TRIAGE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
        accent2: "#0ea5e9"
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
