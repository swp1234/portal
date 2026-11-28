/* Waiting for Medical & Lab Test Results Calm Companion
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Waiting for Medical & Lab Test Results Calm Companion | DopaBrain",
    "metaDesc": "Refreshing your patient portal every 15 minutes and Googling worst-case outcomes while waiting for lab results? Steady your nervous system with a Portal-Check Window & grounding anchor locally.",
    "kicker": "UNCERTAINTY CALM • WAITING FOR MEDICAL / LAB TEST RESULTS COMPANION",
    "heroTitle": "Waiting for Medical & Lab Test Results Calm Companion",
    "heroLead": "Refreshing your patient portal every 15 minutes and Googling worst-case outcomes while waiting for lab results? Steady your nervous system with a Portal-Check Window & grounding anchor locally.",
    "chip1": "5 Waiting Loops",
    "chip2": "Portal-Check Window",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR WAITING-PERIOD ANXIETY LOOPS (1 = STEADY, 5 = CONSUMED)",
    "step1Title": "How is waiting for results pulling at your nervous system today?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One gentle, absorbing activity I can lean into today while waiting (100% local):",
    "ctaBtn": "Build My Waiting-Period Calm Anchor",
    "resultBadge": "STEP 2 • YOUR UNCERTAINTY GROUNDING PROTOCOL",
    "noteTitle": "My Gentle Waiting Anchor",
    "meterLabel": "Uncertainty Steadiness",
    "scriptTitle": "Compassionate Reality Statement for Waiting Days",
    "stepsTitle": "3 Gentle Guardrails Until Official Results Arrive",
    "stickyTitle": "Feeling physical tension build up during a stressful waiting week?",
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
    "title": "건강검진·병원 검사 결과 기다릴 때 불안 완화 & 검색 차단 컴패니언 | DopaBrain",
    "metaDesc": "병원 검사·건강검진 결과를 기다리며 15분마다 앱을 새로고침하고 최악의 병명을 검색하고 계신가요? 포털 확인 시간 창과 현실 그라운딩으로 대기 불안을 부드럽게 진정시키세요.",
    "kicker": "불확실성 진정 · 건강검진·병원 검사 결과 대기 불안 완화 컴패니언",
    "heroTitle": "건강검진·병원 검사 결과 기다릴 때 불안 완화 & 검색 차단 컴패니언",
    "heroLead": "병원 검사·건강검진 결과를 기다리며 15분마다 앱을 새로고침하고 최악의 병명을 검색하고 계신가요? 포털 확인 시간 창과 현실 그라운딩으로 대기 불안을 부드럽게 진정시키세요.",
    "chip1": "5가지 대기 불안",
    "chip2": "앱 확인 시간창",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 검사 결과 대기 중 불안 신호 점검 (1 = 안정, 5 = 매우 불안)",
    "step1Title": "검사 결과를 기다리는 동안 가장 크게 마음을 흔드는 패턴은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 결과를 기다리는 동안 오늘 마음을 잠시 내려놓을 편안한 활동 1가지 (100% 로컬):",
    "ctaBtn": "내 결과 대기 안정 앵커 보기",
    "resultBadge": "2단계 • 불확실한 대기 시간을 버티는 안정 프로토콜",
    "noteTitle": "오늘의 편안한 몰입 활동",
    "meterLabel": "대기 시간 안정 지수",
    "scriptTitle": "기다리는 동안 마음을 붙잡아 주는 현실 문장",
    "stepsTitle": "공식 결과가 나오기 전까지 마음을 지키는 3가지 안전장치",
    "stickyTitle": "기다림 속에서 쌓인 신체 스트레스 긴장을 가볍게 점검해 볼까요?",
    "stickySub": "무료 2분 스트레스 테스트 바로가기",
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
    "title": "等待体检与化验结果焦虑安抚工具 | DopaBrain",
    "heroTitle": "等待体检与化验结果焦虑安抚工具",
    "heroLead": "停止反复刷新与深夜查病，用每日2次查看窗口与着陆锚点平稳度过等待期。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "検査結果待ちの不安（スキャンザイエティ）ケア | DopaBrain",
    "heroTitle": "検査結果待ちの不安（スキャンザイエティ）ケア",
    "heroLead": "結果確認ループや深夜検索を止め、1日2回の確認ルールで穏やかに待つ支えを作ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Guía de Calma al Esperar Resultados Médicos | DopaBrain",
    "heroTitle": "Guía de Calma al Esperar Resultados Médicos",
    "heroLead": "Frena la búsqueda nocturna y las recargas constantes con 2 ventanas de revisión al día.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Guia Calmo para Espera de Exames Médicos | DopaBrain",
    "heroTitle": "Guia Calmo para Espera de Exames Médicos",
    "heroLead": "Reduza a ansiedade de espera limitando checagens a 2 janelas e pausando buscas online.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Warten auf Arzt- & Laborbefunde Ruhe-Kit | DopaBrain",
    "heroTitle": "Warten auf Arzt- & Laborbefunde Ruhe-Kit",
    "heroLead": "Stoppe Dauer-Aktualisieren und spätes Googeln mit 2 festen Check-Fenstern pro Tag.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Compagnon Calme d’Attente de Résultats Médicaux | DopaBrain",
    "heroTitle": "Compagnon Calme d’Attente de Résultats Médicaux",
    "heroLead": "Apaisez l’attente des analyses avec 2 créneaux de vérification et une pause des recherches.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Спокойное ожидание результатов анализов | DopaBrain",
    "heroTitle": "Спокойное ожидание результатов анализов",
    "heroLead": "Остановите навязчивый гуглинг и обновления портала с правилом 2 проверок в день.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "मेडिकल टेस्ट रिज़ल्ट प्रतीक्षा शांति किट | DopaBrain",
    "heroTitle": "मेडिकल टेस्ट रिज़ल्ट प्रतीक्षा शांति किट",
    "heroLead": "बार-बार पोर्टल चेक और रात की सर्च रोकें—दिन में 2 बार चेक नियम और ग्राउंडिंग अपनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pendamping Tenang Menunggu Hasil Tes Medis | DopaBrain",
    "heroTitle": "Pendamping Tenang Menunggu Hasil Tes Medis",
    "heroLead": "Hentikan refresh portal dan cari penyakit tengah malam dengan aturan cek 2 kali sehari.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Tıbbi Test Sonucu Bekleme Sakinlik Kiti | DopaBrain",
    "heroTitle": "Tıbbi Test Sonucu Bekleme Sakinlik Kiti",
    "heroLead": "Sürekli sonuç yenileme ve gece aramalarını günde 2 kontrol penceresiyle yatıştırın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "portal_refresh_loop",
    "en": "Portal Refreshing — Checking email or patient portal dozens of times a day for updates",
    "ko": "결과 앱 반복 확인 — 하루에도 수십 번 병원 앱이나 문자를 새로고침함"
  },
  {
    "id": "symptom_search_spiral",
    "en": "Worst-Case Searching — Googling raw lab numbers or rare diagnoses late at night",
    "ko": "최악 시나리오 검색 — 밤마다 희귀 질환이나 무서운 후기를 찾아봄"
  },
  {
    "id": "silence_as_bad_news",
    "en": "Reading Silence as Danger — Assuming \"no call yet\" automatically means bad news",
    "ko": "침묵=나쁜 소식 해석 — 연락이 늦어질수록 안 좋은 결과일 거라 단정함"
  },
  {
    "id": "body_hyper_scanning",
    "en": "Body Hyper-Scanning — Monitoring every tiny twinge or heartbeat as \"proof\"",
    "ko": "신체 과민 관찰 — 평범한 뻐근함이나 심박까지 이상 신호로 과잉 해석함"
  },
  {
    "id": "holding_life_pause",
    "en": "Putting Today on Hold — Unable to enjoy meals, walks, or friends until the result lands",
    "ko": "일상 전면 정지 — 결과 전까지 식사·산책·대화조차 전혀 즐기지 못함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Waiting Anxiety — Cap Portal Checks to 2 Times/Day & Pause Medical Searching",
    "koT": "대기 불안 높음 — 앱 확인을 하루 2회로 제한하고 증상 검색을 잠시 멈추세요",
    "enD": "Research on waiting uncertainty (Sweeny) shows \"scanxiety\" peaks because humans have zero control during the gap—limiting portal refreshes and engaging in flow activities meaningfully reduces distress without changing outcomes.",
    "koD": "불확실성 대기 심리 연구(Sweeny)에 따르면 결과를 통제할 수 없는 공백기엔 확인 행동을 줄이고 몰입 활동으로 주의를 옮기는 것이 불안을 가장 효과적으로 낮춥니다.",
    "enS": "\"Checking the portal 20 times today will not speed up the lab or change the answer. I will check once at 11 AM and once at 4 PM, and let my doctor interpret the actual numbers.\"",
    "koS": "\"오늘 앱을 20번 새로고침해도 결과가 빨라지거나 바뀌지 않는다. 오전 11시와 오후 4시 딱 두 번만 확인하고, 해석은 전문 의료진에게 맡기겠다.\"",
    "enL": [
      "Set two fixed 2-minute portal check windows (e.g., 11 AM & 4 PM) instead of continuous refreshing.",
      "Agree not to Google raw lab acronyms—write questions on paper for your doctor instead.",
      "Schedule one absorbing, hands-on activity (cooking, walking with a friend, puzzle, warm shower) to give your mind real relief."
    ],
    "koL": [
      "수시 확인 대신 오전 11시·오후 4시 딱 두 번만 2분간 확인하는 시간창을 정하세요.",
      "검색창 대신 종이에 의사 선생님께 물어볼 질문 2가지만 적어 두세요.",
      "요리·산책·퍼즐·따뜻한 샤워처럼 손을 쓰는 편안한 활동 1가지를 오늘 일정에 넣으세요."
    ]
  },
  "mid": {
    "enT": "Moderate Waiting Nerves — Keep 2 Check Windows & Write Doctor Questions on Paper",
    "koT": "중간 대기 긴장 — 하루 2회 확인 규칙과 질문 메모로 중심을 지키세요",
    "enD": "Replacing midnight web searches with a short question list protects sleep while keeping you prepared.",
    "koD": "밤중 검색 대신 질문 메모 2줄로 바꾸면 수면과 마음의 여유를 함께 지킬 수 있습니다.",
    "enS": "\"Today I only need to live today—we will handle real facts together when they arrive.\"",
    "koS": "\"오늘은 오늘의 하루만 살면 된다. 실제 결과가 나오면 그때 사실에 맞게 대처하면 된다.\"",
    "enL": [
      "Mute raw health-portal push alerts if they startle you.",
      "Tell one trusted friend you are in a waiting window for warm company.",
      "Keep caffeine light and protect bedtime calm."
    ],
    "koL": [
      "갑작스러운 알림이 놀랍다면 푸시 알림을 끄고 정해진 시간에 직접 열어 보세요.",
      "신뢰하는 지인 1명에게 기다리는 중이라고 가볍게 나누어 보세요.",
      "카페인을 줄이고 저녁 휴식 루틴을 지켜 주세요."
    ]
  },
  "high": {
    "enT": "Steady Uncertainty Tolerance — Grounded Waiting Mindset",
    "koT": "안정적인 불확실성 대처 — 차분한 대기 태도",
    "enD": "You are honoring uncertainty with self-kindness rather than compulsive checking.",
    "koD": "강박적 검색 대신 스스로를 돌보며 기다리는 건강한 태도를 유지하고 있습니다.",
    "enS": "\"Facts come later; kindness and rest belong right now.\"",
    "koS": "\"사실 확인은 결과와 함께, 휴식과 다정함은 지금 여기에.\"",
    "enL": [
      "Keep normal meal and walk rhythms.",
      "Prepare 2 clear questions for your follow-up visit.",
      "Give yourself extra grace this week."
    ],
    "koL": [
      "평소 식사와 가벼운 산책 리듬을 유지하세요.",
      "진료 시 물어볼 핵심 질문 2가지만 준비해 두세요.",
      "이번 주는 평소보다 자신에게 더 너그럽게 대해 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_med_wait_v1";
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
      window.gtag('event', "medical_wait_calm_complete", {
        tool_slug: "waiting-for-medical-test-results-calm",
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
      var shareUrl = "https://dopabrain.com/portal/tools/waiting-for-medical-test-results-calm.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "waiting-for-medical-test-results-calm",
        filename: 'dopabrain-waiting-for-medical-test-results-calm-card.png',
        badge: "UNCERTAINTY CALM • WAITING FOR MEDICAL / LAB TEST RESULTS COMPANION",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#06b6d4",
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
