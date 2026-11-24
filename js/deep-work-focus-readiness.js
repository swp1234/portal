/* Deep Work & Distraction Friction Audit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Deep Work & Distraction Friction Audit | DopaBrain",
    "metaDesc": "Sitting down to work yet somehow losing 40 minutes to small distractions? Score 5 pre-flight readiness levers locally and launch a clean 25- or 50-minute deep work block.",
    "kicker": "PRE-FLIGHT CHECK • ZERO-FRICTION FOCUS",
    "heroTitle": "Deep Work & Distraction Friction Audit",
    "heroLead": "Sitting down to work yet somehow losing 40 minutes to small distractions? Score 5 pre-flight readiness levers locally and launch a clean 25- or 50-minute deep work block.",
    "chip1": "5 Pre-Flight Levers",
    "chip2": "25m / 50m Block",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK DISTRACTION FRICTION (1 = CLEAR, 5 = HIGH FRICTION)",
    "step1Title": "Which friction points are blocking deep work right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Exact deliverable I will finish before checking my phone (100% local):",
    "ctaBtn": "Launch Deep Work Blueprint",
    "resultBadge": "STEP 2 • YOUR DEEP WORK LAUNCH CHECKLIST",
    "noteTitle": "My Concrete Deliverable Target",
    "meterLabel": "Deep Work Readiness Score",
    "scriptTitle": "Pre-Session Commitment Line",
    "stepsTitle": "3 Pre-Flight Tweaks Before Starting the Timer",
    "stickyTitle": "Ready to run your focus block right now?",
    "stickySub": "Open the free Pomodoro Focus Timer with built-in breaks",
    "stickyBtn": "Open Timer →",
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
    "title": "딥워크 몰입 준비도·방해 마찰 감사 | DopaBrain",
    "metaDesc": "책상에 앉았는데도 40분째 딴짓에 빠지고 있나요? 5가지 딥워크 사전 조건을 점검하고 깔끔한 25분/50분 몰입 블록을 시작하세요.",
    "kicker": "딥워크 사전 점검 · 몰입 준비도 랩",
    "heroTitle": "딥워크 몰입 준비도·방해 마찰 감사",
    "heroLead": "책상에 앉았는데도 40분째 딴짓에 빠지고 있나요? 5가지 딥워크 사전 조건을 점검하고 깔끔한 25분/50분 몰입 블록을 시작하세요.",
    "chip1": "5가지 몰입 조건",
    "chip2": "25분/50분 블록",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 몰입 방해 마찰 점검 (1 = 쾌적함, 5 = 방해 큼)",
    "step1Title": "지금 딥워크 진입을 막고 있는 마찰 요소는 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 스마트폰 보기 전까지 끝낼 구체적 결과물 1가지 (100% 로컬):",
    "ctaBtn": "딥워크 실행 블루프린트 만들기",
    "resultBadge": "2단계 • 맞춤 딥워크 시작 체크리스트",
    "noteTitle": "이번 블록의 구체적 완료 목표",
    "meterLabel": "딥워크 준비도 지수",
    "scriptTitle": "몰입 시작 선언 문장",
    "stepsTitle": "타이머 누르기 전 3가지 환경 세팅",
    "stickyTitle": "지금 바로 집중 타이머를 켜고 시작해 볼까요?",
    "stickySub": "무료 뽀모도로 집중 타이머로 25분 블록 바로 실행",
    "stickyBtn": "타이머 열기 →",
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
    "title": "深度工作准备度与分心摩擦自查 | DopaBrain",
    "heroTitle": "深度工作准备度与分心摩擦自查",
    "heroLead": "评估5项专注起飞条件，快速启动无干扰的25或50分钟深度工作块。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "ディープワーク集中準備度チェック | DopaBrain",
    "heroTitle": "ディープワーク集中準備度チェック",
    "heroLead": "5つの邪魔要因を点検し、迷わず25分・50分の深い集中ブロックへ入ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Auditoría de Deep Work y Distracción | DopaBrain",
    "heroTitle": "Auditoría de Deep Work y Distracción",
    "heroLead": "Evalúa 5 palancas previas al foco y lanza un bloque limpio de 25 o 50 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Auditoria de Deep Work e Fricção de Foco | DopaBrain",
    "heroTitle": "Auditoria de Deep Work e Fricção de Foco",
    "heroLead": "Avalie 5 fatores de prontidão e inicie um bloco limpo de 25 ou 50 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Deep-Work-Bereitschafts- & Fokus-Audit | DopaBrain",
    "heroTitle": "Deep-Work-Bereitschafts- & Fokus-Audit",
    "heroLead": "Prüfe 5 Ablenkungsbremsen vorab und starte einen klaren 25- oder 50-Min-Fokusblock.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Audit Deep Work & Friction Attentionnelle | DopaBrain",
    "heroTitle": "Audit Deep Work & Friction Attentionnelle",
    "heroLead": "Évaluez 5 leviers de concentration et lancez un bloc Deep Work propre de 25 ou 50 min.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Аудит готовности к глубокой работе | DopaBrain",
    "heroTitle": "Аудит готовности к глубокой работе",
    "heroLead": "Проверьте 5 источников трения и запустите чистый 25- или 50-минутный блок Deep Work.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "डीप वर्क व डिस्ट्रैक्शन फ्रिक्शन ऑडिट | DopaBrain",
    "heroTitle": "डीप वर्क व डिस्ट्रैक्शन फ्रिक्शन ऑडिट",
    "heroLead": "5 प्री-फ़्लाइट फ़ोकस लीवर जांचें और 25 या 50 मिनट का डीप वर्क ब्लॉक शुरू करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Audit Kesiapan Deep Work & Distraksi | DopaBrain",
    "heroTitle": "Audit Kesiapan Deep Work & Distraksi",
    "heroLead": "Nilai 5 faktor persiapan fokus dan mulai blok kerja mendalam 25 atau 50 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Deep Work ve Dikkat Sürtünmesi Denetimi | DopaBrain",
    "heroTitle": "Deep Work ve Dikkat Sürtünmesi Denetimi",
    "heroLead": "5 odak hazırlık eksenini ölçün ve temiz bir 25 veya 50 dakikalık blok başlatın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "vague_goal",
    "en": "Vague Task Scope — Sitting down to \"work on project\" with no tiny visible finish line",
    "ko": "모호한 목표 — 눈에 보이는 작은 완료 기준 없이 막연히 \"프로젝트 하기\""
  },
  {
    "id": "phone_proximity",
    "en": "Phone Within Reach — Smartphone visible on desk creating passive temptation",
    "ko": "손 닿는 스마트폰 — 책상 위 폰이 시야에 들어와 무의식적 유혹 유발"
  },
  {
    "id": "energy_dip",
    "en": "Biological Dip — Starting heavy work hungry, dehydrated, or post-meal sluggish",
    "ko": "신체 에너지 저하 — 배고픔·수분 부족·식곤증 상태에서 무리하게 시작"
  },
  {
    "id": "perfection_freeze",
    "en": "First-Draft Perfectionism — Feeling pressured to produce polished output immediately",
    "ko": "초안 완벽주의 — 처음부터 완벽한 결과물을 내야 한다는 부담감"
  },
  {
    "id": "interruption_risk",
    "en": "Unprotected Time — Open calendar/chat inviting mid-block interruptions",
    "ko": "열린 방해 경로 — 채팅·알림·주변 요청에 언제든 끊길 수 있는 상태"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Distraction Friction — Shrink to a 10-Minute Ugly-Draft Start",
    "koT": "방해 마찰 높음 — 10분 \"대충 초안\"으로 진입 장벽을 확 낮추세요",
    "enD": "When friction is high, willpower loses to environment. Shrink the scope to 10 messy minutes and physically move your phone out of sight first.",
    "koD": "마찰이 클 때는 의지력보다 환경 설계가 우선입니다. 먼저 폰을 시야 밖으로 치우고 10분짜리 거친 초안으로 시작해 보세요.",
    "enS": "\"I only need 10 imperfect minutes to break inertia. Once I start, momentum does the heavy lifting.\"",
    "koS": "\"관성을 깨는 데는 완벽하지 않은 10분이면 충분해. 일단 시작하면 흐름이 나를 이끌어 줄 거야.\"",
    "enL": [
      "Move your phone to another room or inside a zipped bag for the next 15 minutes.",
      "Write one ugly bullet list or rough paragraph—forbid editing until the timer rings.",
      "Set a 10-minute starter timer; stop guilt-free or extend by 15 minutes if flow kicks in."
    ],
    "koL": [
      "스마트폰을 다른 방이나 가방 속에 넣고 15분간 시야에서 치우세요.",
      "수정은 금지하고 거친 메모나 초안 한 문단만 빠르게 써 내려가세요.",
      "10분 타이머만 켜고 시작하세요—끝난 뒤 흐름이 붙으면 15분만 연장합니다."
    ]
  },
  "mid": {
    "enT": "Solid Setup — Lock One 25-Minute Single-Deliverable Sprint",
    "koT": "양호한 준비 상태 — 25분 단일 목표 스프린트를 실행하세요",
    "enD": "You are one small boundary away from smooth deep work. Define your exact 25-minute output and silence pings before starting.",
    "koD": "작은 경계 하나만 세우면 곧바로 몰입할 수 있습니다. 25분 뒤 끝낼 결과물 하나를 정하고 알림을 잠시 끄세요.",
    "enS": "\"25 clean minutes on one deliverable, then a real 5-minute break away from screens.\"",
    "koS": "\"25분 동안 딱 한 가지 결과물에만 집중하고, 끝나면 화면 없는 5분 휴식을 갖자.\"",
    "enL": [
      "State the exact visible output you want in 25 minutes.",
      "Enable Do Not Disturb and close messaging tabs until the bell rings.",
      "Stand up and stretch during your 5-minute break instead of scrolling feeds."
    ],
    "koL": [
      "25분 뒤에 눈에 보일 구체적 결과물 하나를 확정하세요.",
      "방해 금지 모드를 켜고 타이머가 울릴 때까지 메신저 탭을 닫아두세요.",
      "5분 휴식 때는 피드 스크롤 대신 일어나 가볍게 스트레칭하세요."
    ]
  },
  "high": {
    "enT": "Peak Deep Work Readiness — Run a 45–50 Minute Flow Block",
    "koT": "최적의 딥워크 준비 완료 — 45~50분 깊은 몰입 블록을 추천합니다",
    "enD": "Your goal, energy, and environment are aligned. Protect a 45–50 minute uninterrupted window for your highest-impact creation.",
    "koD": "목표·에너지·환경이 모두 정렬되었습니다. 방해 없는 45~50분 블록으로 가장 임팩트 큰 작업을 완성하세요.",
    "enS": "\"Everything is set—I am protecting the next 50 minutes for calm, high-craft work.\"",
    "koS": "\"준비는 끝났어—다음 50분은 온전히 깊고 완성도 높은 작업에 집중한다.\"",
    "enL": [
      "Begin immediately on the hardest 20% of your deliverable.",
      "Keep a scratchpad beside you to jot down stray ideas without leaving the work.",
      "Reward completion with a 10-minute walk, sunlight, or hydration break."
    ],
    "koL": [
      "과제에서 가장 까다로운 핵심 20% 부분부터 바로 착수하세요.",
      "떠오르는 다른 아이디어는 옆 메모지에만 적고 작업 창을 벗어나지 마세요.",
      "완료 후에는 10분 산책·햇볕·수분 보충으로 뇌를 충분히 회복하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_deep_work_v1";
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
      window.gtag('event', "deep_work_readiness_complete", {
        tool_slug: "deep-work-focus-readiness",
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
      var shareUrl = "https://dopabrain.com/portal/tools/deep-work-focus-readiness.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "deep-work-focus-readiness",
        filename: 'dopabrain-deep-work-focus-readiness-card.png',
        badge: "PRE-FLIGHT CHECK • ZERO-FRICTION FOCUS",
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
