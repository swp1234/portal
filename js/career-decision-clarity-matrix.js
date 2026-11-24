/* High-Stakes Career Decision Clarity Matrix
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "High-Stakes Career Decision Clarity Matrix | DopaBrain",
    "metaDesc": "Torn between staying, pivoting, or taking a new offer while overthinking every downside? Weigh 5 decision-clarity dimensions locally and define one low-risk 14-day test.",
    "kicker": "CAREER CROSSROADS • VALUES & ENERGY MATRIX",
    "heroTitle": "High-Stakes Career Decision Clarity Matrix",
    "heroLead": "Torn between staying, pivoting, or taking a new offer while overthinking every downside? Weigh 5 decision-clarity dimensions locally and define one low-risk 14-day test.",
    "chip1": "5 Decision Axes",
    "chip2": "14-Day Low-Risk Test",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • RATE CURRENT CAREER DECISION FRICTION (1 = CLEAR, 5 = FOGGY)",
    "step1Title": "What is clouding your career decision right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONE concrete question I can test in the next 14 days (100% local):",
    "ctaBtn": "Build My Career Clarity Plan",
    "resultBadge": "STEP 2 • YOUR CAREER CLARITY & EXPERIMENT PLAN",
    "noteTitle": "My 14-Day Real-World Evidence Test",
    "meterLabel": "Decision Clarity Readiness",
    "scriptTitle": "Anti-Regret Decision Framing Line",
    "stepsTitle": "3 Structured Moves to Move From Overthinking to Evidence",
    "stickyTitle": "Curious what your future priorities are trying to tell you?",
    "stickySub": "Explore the free Future Self Perspective Check next",
    "stickyBtn": "Future Self →",
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
    "title": "커리어·이직 결정 명료도 매트릭스 | DopaBrain",
    "metaDesc": "현 직장 유지·이직·커리어 전환 사이에서 밤새 고민만 반복되나요? 5가지 커리어 결정 축을 비공개로 점검하고 부담 없는 14일 현실 검증 실험을 설계하세요.",
    "kicker": "커리어 결정 나침반 · 가치와 에너지 매트릭스",
    "heroTitle": "커리어·이직 결정 명료도 매트릭스",
    "heroLead": "현 직장 유지·이직·커리어 전환 사이에서 밤새 고민만 반복되나요? 5가지 커리어 결정 축을 비공개로 점검하고 부담 없는 14일 현실 검증 실험을 설계하세요.",
    "chip1": "5가지 결정 축",
    "chip2": "14일 검증 실험",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 커리어 고민 마찰도 점검 (1 = 명확, 5 = 혼란)",
    "step1Title": "지금 커리어 선택을 가장 흐리게 만드는 고민 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 앞으로 14일 안에 직접 확인해 볼 수 있는 현실 질문 1가지 (100% 로컬):",
    "ctaBtn": "내 커리어 결정 명료화 플랜 보기",
    "resultBadge": "2단계 • 커리어 명료화 & 14일 실험 플랜",
    "noteTitle": "나의 14일 현실 검증 실험",
    "meterLabel": "결정 명료도 지수",
    "scriptTitle": "후회를 줄이는 결정 관점 문장",
    "stepsTitle": "고민에서 확실한 근거로 옮기는 3단계",
    "stickyTitle": "미래의 내가 중요하게 여길 삶의 방향이 궁금하신가요?",
    "stickySub": "무료 미래의 나 관점 테스트로 장기 우선순위 확인",
    "stickyBtn": "미래의 나 →",
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
    "title": "职业选择与跳槽清晰度矩阵 | DopaBrain",
    "heroTitle": "职业选择与跳槽清晰度矩阵",
    "heroLead": "从5大维度拆解职业纠结，设计零负担的14天低风险现实验证实验。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "キャリア・転職意思決定マトリクス | DopaBrain",
    "heroTitle": "キャリア・転職意思決定マトリクス",
    "heroLead": "5つの迷い要因を整理し、14日間の低リスク検証ステップを設計します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Matriz de Claridad para Decisiones Laborales | DopaBrain",
    "heroTitle": "Matriz de Claridad para Decisiones Laborales",
    "heroLead": "Evalúa 5 ejes de claridad profesional y diseña una prueba sin riesgo de 14 días.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Matriz de Clareza para Decisões de Carreira | DopaBrain",
    "heroTitle": "Matriz de Clareza para Decisões de Carreira",
    "heroLead": "Avalie 5 eixos de decisão profissional e crie um teste de baixo risco em 14 dias.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Karriere-Entscheidungs-Klarheitsmatrix | DopaBrain",
    "heroTitle": "Karriere-Entscheidungs-Klarheitsmatrix",
    "heroLead": "Prüfe 5 Karriere-Entscheidungsachsen und plane einen risikoarmen 14-Tage-Test.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Matrice de Clarté Décision de Carrière | DopaBrain",
    "heroTitle": "Matrice de Clarté Décision de Carrière",
    "heroLead": "Évaluez 5 axes de choix professionnel et concevez un test sans risque sur 14 jours.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Матрица ясности карьерного выбора | DopaBrain",
    "heroTitle": "Матрица ясности карьерного выбора",
    "heroLead": "Оцените 5 факторов выбора работы и наметьте безопасный 14-дневный тест.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "करियर निर्णय स्पष्टता मैट्रिक्स | DopaBrain",
    "heroTitle": "करियर निर्णय स्पष्टता मैट्रिक्स",
    "heroLead": "5 करियर निर्णय पहलुओं को तौलें और 14-दिन का कम-जोखिम प्रयोग तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Matriks Kejelasan Keputusan Karier | DopaBrain",
    "heroTitle": "Matriks Kejelasan Keputusan Karier",
    "heroLead": "Timbang 5 dimensi keputusan karier secara privat dan rancang uji coba 14 hari.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kariyer Kararı Netlik Matrisi | DopaBrain",
    "heroTitle": "Kariyer Kararı Netlik Matrisi",
    "heroLead": "5 kariyer karar boyutunu analiz edin ve risksiz 14 günlük deneme planı kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "sunk_cost",
    "en": "Sunk-Cost Pull — Staying mostly because of years already invested rather than future fit",
    "ko": "매몰 비용 집착 — 앞으로의 적합성보다 그동안 들인 시간이 아까워 버팀"
  },
  {
    "id": "status_pressure",
    "en": "External Status Noise — Weighing prestige or others’ expectations above daily energy",
    "ko": "타인 시선 압박 — 매일의 에너지보다 타이틀·주변 기대를 더 크게 의식함"
  },
  {
    "id": "energy_mismatch",
    "en": "Chronic Energy Drain — Feeling depleted by core daily tasks, not just temporary crunch",
    "ko": "핵심 업무 소진 — 일시적 바쁨이 아니라 일상 업무 자체에서 지속적 방전"
  },
  {
    "id": "missing_data",
    "en": "Imagining Instead of Testing — Ruminating in your head without talking to people on the inside",
    "ko": "상상만 반복 — 현직자 대화나 작은 실험 없이 머릿속 시뮬레이션만 돌림"
  },
  {
    "id": "all_or_nothing",
    "en": "Permanent-Choice Fear — Treating the next step like an irreversible lifelong contract",
    "ko": "영구 선택 공포 — 다음 결정을 되돌릴 수 없는 평생 계약처럼 무겁게 느낌"
  }
];
  var TIERS = {
  "low": {
    "enT": "Decision Fog High — Replace Abstract Rumination With a 14-Day Prototype",
    "koT": "결정 안개 짙음 — 추상적 고민을 멈추고 14일 작은 현실 실험으로 바꾸세요",
    "enD": "Career decisions feel paralyzing when you try to solve a 5-year mystery inside your head. Gathering 2 real data points in 14 days turns anxiety into clear comparison.",
    "koD": "앞으로 5년을 머릿속으로만 완벽히 예측하려 하면 결정 마비가 옵니다. 14일 안에 실제 현장의 근거 2개만 모아도 불안이 명료한 비교로 바뀝니다.",
    "enS": "\"I don’t need a 10-year guarantee—I only need enough real evidence to choose the strongest next 12-month chapter.\"",
    "koS": "\"10년 치 완벽한 보장은 필요 없어. 앞으로 12개월을 가장 잘 보낼 수 있는 현실 근거만 모으면 충분해.\"",
    "enL": [
      "Write a 2-column truth sheet: what energizes you weekly vs. what drains you regardless of manager.",
      "Schedule two 15-minute informational chats with people doing the target path before deciding.",
      "Set a clear decision review date 14 days from today so you stop agonizing every night."
    ],
    "koL": [
      "매주 에너지를 주는 일 vs 누가 시켜도 나를 지치게 하는 일을 2열로 적어보세요.",
      "결정 전 목표 분야 현직자 2명과 15분 정보 대화를 먼저 잡아보세요.",
      "매일 밤 고민하지 않도록 14일 뒤 하루를 공식 결정 검토일로 정해두세요."
    ]
  },
  "mid": {
    "enT": "Emerging Clarity — Pressure-Test Your Top Option Against Energy & Growth",
    "koT": "윤곽이 잡히는 단계 — 에너지·성장·재정 3축으로 최종 점검하세요",
    "enD": "Your priorities are coming into focus. Testing your assumptions against one concrete worst-case backup plan will give you quiet confidence.",
    "koD": "핵심 우선순위가 꽤 선명해졌습니다. 최악의 경우에도 버틸 수 있는 현실 대안 1가지만 확인하면 차분한 확신이 생깁니다.",
    "enS": "\"A reversible next step backed by real conversations beats staying frozen by fear.\"",
    "koS": "\"실제 대화와 근거로 선택한 유연한 다음 걸음이 두려움에 멈춰 있는 것보다 낫다.\"",
    "enL": [
      "Score your top two options 1–5 on daily energy, skill growth, compensation, and autonomy.",
      "Identify the single biggest unknown and answer it with one concrete email or question this week.",
      "Write down your 6-month check-in metric so you know the choice stays adaptable."
    ],
    "koL": [
      "최종 후보 2개를 일일 에너지·성장·보상·자율성 4항목(1~5점)으로 비교하세요.",
      "가장 큰 불확실성 1가지를 정해 이번 주 실제 질문이나 조사로 해소하세요.",
      "6개월 뒤 재점검 기준을 적어두어 언제든 조정 가능한 선택임을 확인하세요."
    ]
  },
  "high": {
    "enT": "High Decision Clarity — Commit Calmly to Your Chosen Next Chapter",
    "koT": "높은 결정 명료도 — 선택한 다음 챕터를 차분하게 실행하세요",
    "enD": "You have separated external noise from your real values and gathered solid perspective. Move forward calmly and give your chosen path a clean runway.",
    "koD": "외부 시선과 나의 진짜 기준이 잘 분리되어 있습니다. 선택한 방향을 믿고 첫 90일 실행에 차분히 집중해 보세요.",
    "enS": "\"I made an informed choice with the best clarity I have today, and I can adjust as I learn.\"",
    "koS": "\"오늘 가진 최선의 근거로 내린 결정이니 차분히 실행하며 배워나가면 돼.\"",
    "enL": [
      "Take the first concrete administrative step (apply, negotiate, or redesign current scope) within 48 hours.",
      "Stop browsing alternate listings once you commit so post-decision doubt stays quiet.",
      "Set a 90-day reflection reminder to evaluate how the new chapter feels in practice."
    ],
    "koL": [
      "48시간 안에 첫 실질 행동(지원·협상·현재 역할 재설계)을 바로 실행하세요.",
      "결정한 뒤에는 다른 공고 탐색을 멈추어 불필요한 미련을 줄이세요.",
      "90일 뒤 실제 만족도를 돌아보는 캘린더 리마인더를 남겨두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_career_clarity_v1";
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
      window.gtag('event', "career_clarity_complete", {
        tool_slug: "career-decision-clarity-matrix",
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
      var shareUrl = "https://dopabrain.com/portal/tools/career-decision-clarity-matrix.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "career-decision-clarity-matrix",
        filename: 'dopabrain-career-decision-clarity-matrix-card.png',
        badge: "CAREER CROSSROADS • VALUES & ENERGY MATRIX",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
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
