/* First 90-Day New-Job Overwhelm & Onboarding Calm Plan
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "First 90-Day New-Job Overwhelm & Onboarding Calm Plan | DopaBrain",
    "metaDesc": "Drowning in 80 acronyms, new tools, and \"Did they hire the wrong person?\" panic during Month 1? Audit 5 onboarding overwhelm traps locally and map a calm 30-60-90 clarity buffer.",
    "kicker": "CAREER TRANSITION • FIRST 90-DAY NEW-JOB OVERWHELM BUFFER",
    "heroTitle": "First 90-Day New-Job Overwhelm & Onboarding Calm Plan",
    "heroLead": "Drowning in 80 acronyms, new tools, and \"Did they hire the wrong person?\" panic during Month 1? Audit 5 onboarding overwhelm traps locally and map a calm 30-60-90 clarity buffer.",
    "chip1": "5 Onboarding Traps",
    "chip2": "30-60-90 Calm Ramp",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR NEW-JOB STRESS SIGNALS (1 = STEADY, 5 = SWAMPED)",
    "step1Title": "What makes the first weeks in a new role feel exhausting?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One smart, curious question I will ask a teammate tomorrow (100% local):",
    "ctaBtn": "Build My Calm 30-60-90 Onboarding Buffer",
    "resultBadge": "STEP 2 • YOUR ZERO-PANIC NEW-ROLE ONBOARDING PROTOCOL",
    "noteTitle": "My Tomorrow Smart Question",
    "meterLabel": "Onboarding Steadiness",
    "scriptTitle": "Confident \"New-Hire Context\" Question Line (Zero Awkwardness)",
    "stepsTitle": "3 Moves That Turn Month-1 Firehose Fog Into Quiet Confidence",
    "stickyTitle": "Measure how much cognitive load your transition is adding right now.",
    "stickySub": "Take the free 2-Min Stress Check",
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
    "title": "이직·첫 출근 90일 정보 과부하 & 적응 스트레스 완충 플래너 | DopaBrain",
    "metaDesc": "새 직장의 낯선 용어와 시스템 속에서 \"내가 잘할 수 있을까?\" 위축되고 계신가요? 5가지 적응기 과부하 함정을 점검하고 첫 30·60·90일 차분한 질문·정리 루틴을 세팅하세요.",
    "kicker": "커리어 적응 · 이직·신입 첫 90일 정보 과부하 & 가면증후군 완충 플래너",
    "heroTitle": "이직·첫 출근 90일 정보 과부하 & 적응 스트레스 완충 플래너",
    "heroLead": "새 직장의 낯선 용어와 시스템 속에서 \"내가 잘할 수 있을까?\" 위축되고 계신가요? 5가지 적응기 과부하 함정을 점검하고 첫 30·60·90일 차분한 질문·정리 루틴을 세팅하세요.",
    "chip1": "5가지 적응 함정",
    "chip2": "30-60-90 안심 램프",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 이직·온보딩 초기 스트레스 신호 점검 (1 = 여유, 5 = 압도됨)",
    "step1Title": "새 직장 적응 초기에 가장 큰 피로와 긴장을 주는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 내일 동료에게 가볍게 물어볼 핵심 질문 1가지 (100% 로컬):",
    "ctaBtn": "내 차분한 첫 90일 적응 버퍼 보기",
    "resultBadge": "2단계 • 조급함을 내려놓는 첫 90일 적응 프로토콜",
    "noteTitle": "내일 물어볼 핵심 질문 1줄",
    "meterLabel": "온보딩 안정 지수",
    "scriptTitle": "눈치 보지 않고 맥락을 파악하는 센스 있는 질문 1줄",
    "stepsTitle": "첫 달 정보 홍수를 단단한 자신감으로 바꾸는 3단계",
    "stickyTitle": "새로운 환경 적응이 현재 스트레스에 얼마나 영향을 주는지 확인해 보세요.",
    "stickySub": "무료 2분 스트레스 체크 바로가기",
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
    "title": "入职前90天信息过载与适应焦虑缓冲计划 | DopaBrain",
    "heroTitle": "入职前90天信息过载与适应焦虑缓冲计划",
    "heroLead": "用一页术语表、15分钟提问法则与30天目标对齐平稳度过新岗位适应期。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "転職・入社90日の情報過多＆緊張緩和プランナー | DopaBrain",
    "heroTitle": "転職・入社90日の情報過多＆緊張緩和プランナー",
    "heroLead": "専門用語と初月疲労を1枚用語集・15分質問ルール・30日期待値合わせで整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Calma para los Primeros 90 Días en un Nuevo Empleo | DopaBrain",
    "heroTitle": "Plan de Calma para los Primeros 90 Días en un Nuevo Empleo",
    "heroLead": "Supera la sobrecarga de incorporación con glosario en 1 página y regla de 15 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Calma para os Primeiros 90 Dias no Novo Emprego | DopaBrain",
    "heroTitle": "Plano de Calma para os Primeiros 90 Dias no Novo Emprego",
    "heroLead": "Vença a sobrecarga do onboarding com glossário próprio e alinhamento claro de 30 dias.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Neue-Job-Onboarding & 90-Tage-Überforderungs-Puffer | DopaBrain",
    "heroTitle": "Neue-Job-Onboarding & 90-Tage-Überforderungs-Puffer",
    "heroLead": "Meistere den ersten Monat entspannt mit 1-Seiten-Glossar und 15-Minuten-Frageregel.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Anti-Surcharge des 90 Premiers Jours en Poste | DopaBrain",
    "heroTitle": "Plan Anti-Surcharge des 90 Premiers Jours en Poste",
    "heroLead": "Domptez l’onboarding avec un glossaire personnel et la règle des 15 minutes avant de demander.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План спокойной адаптации в первые 90 дней на новой работе | DopaBrain",
    "heroTitle": "План спокойной адаптации в первые 90 дней на новой работе",
    "heroLead": "Снимите перегрузку первого месяца глоссарием на 1 страницу и правилом 15 минут.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "नई नौकरी के पहले 90 दिन ओवरव्हेल्म बफर प्लान | DopaBrain",
    "heroTitle": "नई नौकरी के पहले 90 दिन ओवरव्हेल्म बफर प्लान",
    "heroLead": "1-पेज शब्दावली और 15-मिनट प्रश्न नियम से नए काम में शांत आत्मविश्वास बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Rencana Tenang 90 Hari Pertama Kerja Baru | DopaBrain",
    "heroTitle": "Rencana Tenang 90 Hari Pertama Kerja Baru",
    "heroLead": "Atasi kelelahan adaptasi kerja baru dengan glosarium 1 halaman dan aturan tanya 15 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yeni İş İlk 90 Gün Adaptasyon ve Sakinlik Planı | DopaBrain",
    "heroTitle": "Yeni İş İlk 90 Gün Adaptasyon ve Sakinlik Planı",
    "heroLead": "İlk ay bilgi yükünü 1 sayfalık sözlük ve 15 dakikalık soru kuralıyla yönetin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "instant_expert_pressure",
    "en": "Instant-Expert Pressure — Expecting yourself to perform like a 2-year veteran by Week 2",
    "ko": "즉시 에이스 강박 — 입사 2주 만에 2년 차처럼 모든 걸 완벽히 해내려 스스로를 몰아붙임"
  },
  {
    "id": "hiding_questions",
    "en": "Afraid to Ask Questions — Staying silent on unfamiliar acronyms out of fear of looking slow",
    "ko": "질문 공포 — 사내 약어나 절차를 모르는데 무능해 보일까 봐 못 물어보고 혼자 헤맴"
  },
  {
    "id": "zero_glossary_doc",
    "en": "Mental-Only Memory — Trying to memorize 40 names, tools, and workflows without a personal glossary",
    "ko": "머리로만 암기 — 40명의 이름·도구·약어를 개인 메모장 없이 머릿속으로만 외우려 함"
  },
  {
    "id": "no_30day_bar",
    "en": "Unspoken 30-Day Expectations — Guessing what your manager actually counts as a great first month",
    "ko": "기대치 미확인 — 첫 한 달 동안 상사가 진짜 기대하는 수준이 무엇인지 물어보지 않음"
  },
  {
    "id": "evening_study_burnout",
    "en": "Late-Night Catch-Up Crashes — Reading docs until midnight instead of letting sleep consolidate memory",
    "ko": "야간 과잉 공부 — 밤늦게까지 문서를 보느라 수면이 무너지고 다음 날 학습력이 더 떨어짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Onboarding Overload — Start a 1-Page Acronym Glossary, Batch Questions & Clarify Your 30-Day Bar",
    "koT": "적응 과부하 높음 — 1페이지 용어집 만들기·질문 묶어 묻기·30일 기대치 확인 3가지만 세팅하세요",
    "enD": "Cognitive-load studies confirm that learning a new social & technical environment burns 2x normal mental glucose—so feeling tired at 5 PM during Month 1 is pure biology, not incompetence.",
    "koD": "인지 부하 연구에 따르면 낯선 환경·사람·시스템을 동시에 익히는 첫 달은 평소의 2배 뇌 에너지를 씁니다. 오후 5시에 녹초가 되는 건 실력 부족이 아니라 지극히 정상적인 학습 피로입니다.",
    "enS": "\"I’m building my context map this week—could I batch 3 quick questions for 10 minutes after lunch, and also check what a solid first 30 days looks like to you?\"",
    "koS": "\"이번 주 업무 맥락을 정리 중인데요, 점심 후 10분 정도 궁금한 3가지를 한 번에 여쭤봐도 될까요? 첫 30일 동안 가장 집중해야 할 포인트도 함께 듣고 싶습니다!\"",
    "enL": [
      "Open ONE private \"My Glossary\" note for every new acronym, person’s role, and key link—zero mental memorizing.",
      "Use the 15-Minute Rule: try figuring a blocker out for 15 min, then ask cleanly with what you already checked.",
      "Protect 8 hours of sleep during Month 1—sleep is literally when your hippocampus locks in new job skills."
    ],
    "koL": [
      "사내 약어·담당자·핵심 링크를 모아 두는 나만의 \"1페이지 용어집\" 문서를 오늘 바로 만드세요.",
      "\"15분 규칙\"을 쓰세요: 15분 혼자 찾아본 뒤 시도한 내용과 함께 깔끔하게 질문하면 프로다워 보입니다.",
      "첫 달에는 밤샘 복습보다 7~8시간 숙면이 훨씬 빠르게 업무를 몸에 익혀 줍니다."
    ]
  },
  "mid": {
    "enT": "Settling In — Keep Your Glossary Fresh & Celebrate Small First Wins",
    "koT": "순조롭게 적응 중 — 용어집 정리와 작은 첫 완료 경험만 차곡차곡 쌓으세요",
    "enD": "You are pacing the learning curve well; a quick Day-30 check-in locks confidence.",
    "koD": "학습 곡선을 잘 타며 적응하고 있습니다. 30일 차 짧은 정렬 미팅으로 자신감을 굳히세요.",
    "enS": "\"Curiosity is my superpower during the first 90 days.\"",
    "koS": "\"첫 90일 동안 가장 큰 무기는 완벽함이 아니라 명쾌한 호기심이다.\"",
    "enL": [
      "Log 1 tiny win every Friday afternoon.",
      "Schedule two casual 15-min coffee chats with adjacent teammates.",
      "Rest your brain cleanly after 6 PM."
    ],
    "koL": [
      "매주 금요일 오후 작은 적응 성과 1줄을 기록해 두세요.",
      "유관 부서 동료 2명과 15분 가벼운 커피챗을 잡아 보세요.",
      "퇴근 후에는 뇌가 지식을 정리하도록 푹 쉬어 주세요."
    ]
  },
  "high": {
    "enT": "Grounded New-Hire Rhythm — Calm & Sustainable Ramp",
    "koT": "탄탄한 온보딩 리듬 — 차분하고 건강하게 안착하고 있습니다",
    "enD": "Your structured note-taking and clear questions build rapid trust.",
    "koD": "체계적인 기록과 명쾌한 질문 습관으로 빠르게 신뢰를 쌓고 있습니다.",
    "enS": "\"Steady ramp, clear questions, lasting impact.\"",
    "koS": "\"조급함 없이 단단하게 익혀 오래 가는 실력을 만든다.\"",
    "enL": [
      "Keep refining onboarding docs for the next hire.",
      "Review 60-day goals with your lead.",
      "Maintain normal restorative sleep hours."
    ],
    "koL": [
      "익힌 내용을 다음 신입을 위한 문서로 살짝 다듬어 보세요.",
      "60일 목표를 리더와 가볍게 맞춰 보세요.",
      "건강한 수면 리듬을 계속 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_new_job_v1";
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
      window.gtag('event', "new_job_onboarding_complete", {
        tool_slug: "new-job-onboarding-overwhelm-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/new-job-onboarding-overwhelm-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "new-job-onboarding-overwhelm-plan",
        filename: 'dopabrain-new-job-onboarding-overwhelm-plan-card.png',
        badge: "CAREER TRANSITION • FIRST 90-DAY NEW-JOB OVERWHELM BUFFER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
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
