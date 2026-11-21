/* NVC Conflict De-Escalation Script Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Nonviolent Communication (NVC) & Conflict De-Escalation Builder | DopaBrain",
    "metaDesc": "Free 12-language Nonviolent Communication (NVC) Script Builder. Turn heated tension into calm 4-part OFNR scripts (Observation, Feeling, Need, Request) locally without blaming.",
    "keywords": "nvc script builder, nonviolent communication template, conflict de-escalation script, marshall rosenberg ofnr, difficult conversation helper, dopabrain",
    "kicker": "MARSHALL ROSENBERG OFNR · CONFLICT CLARITY",
    "heroTitle": "NVC Conflict De-Escalation Script Builder",
    "heroLead": "Dreading a tense conversation at work or home? Rate 5 conflict heat signals locally and assemble a calm 4-part Nonviolent Communication (Observation → Feeling → Need → Request) script that lowers defensiveness.",
    "chip1": "4-Part OFNR Model",
    "chip2": "Low-Defensiveness",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK CONFLICT HEAT SIGNALS (1 = LOW, 5 = HIGH)",
    "step1Title": "What makes this upcoming conversation feel risky or tense?",
    "step1Sub": "Everything stays strictly on your device—zero text leaves your browser.",
    "inputLabel": "Optional: 1 concrete request I want to make (e.g., \"Can we share updates by Thursday noon?\"):",
    "inputPlaceholder": "Example: Could we agree on a 24-hour heads-up before changing weekend plans?",
    "ctaBtn": "Build Calm OFNR De-Escalation Script",
    "resultBadge": "STEP 2 • YOUR CALM NVC CONVERSATION SCRIPT",
    "noteTitle": "My Clear, Concrete Request",
    "meterLabel": "De-Escalation Readiness",
    "scriptTitle": "4-Part NVC Script (Observation → Feeling → Need → Request)",
    "stepsTitle": "3 High-EQ Delivery Tips to Keep Them Open",
    "stickyTitle": "Need a firmer boundary if NVC is ignored?",
    "stickySub": "Generate warm, firm, or broken-record scripts in 60 seconds",
    "stickyBtn": "Boundary Builder →",
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
    "title": "비폭력대화(NVC) 갈등 완화 스크립트 빌더 (OFNR 4단계) | DopaBrain",
    "metaDesc": "감정이 격해지기 쉬운 직장·가족·연인 대화를 관찰·느낌·욕구·부탁(OFNR) 4단계 비폭력대화(NVC) 문장으로 차분하게 설계하세요. 100% 로컬 비공개.",
    "kicker": "비폭력대화(NVC) OFNR · 갈등 완화 랩",
    "heroTitle": "비폭력대화(NVC) 갈등 완화 스크립트 빌더",
    "heroLead": "말을 꺼내면 싸움으로 번질까 봐 참고만 있나요? 5가지 갈등 과열 요인을 점검하고 상대의 방어심을 낮추는 관찰→느낌→욕구→부탁(OFNR) 4단계 대화문을 만들어 보세요.",
    "chip1": "OFNR 4단계 구조",
    "chip2": "방어심 최소화",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 이번 대화의 갈등 과열 요인 점검 (1 = 낮음, 5 = 높음)",
    "step1Title": "이 대화가 어렵거나 긴장되는 가장 큰 이유는 무엇인가요?",
    "step1Sub": "입력한 문장과 점수는 100% 브라우저 로컬에만 남습니다.",
    "inputLabel": "선택: 상대에게 전하고 싶은 구체적 부탁 1가지 (100% 로컬):",
    "ctaBtn": "차분한 OFNR 대화 스크립트 생성",
    "resultBadge": "2단계 • 나의 비폭력대화(NVC) 갈등 완화 스크립트",
    "noteTitle": "내가 정리한 구체적이고 실행 가능한 부탁",
    "meterLabel": "갈등 완화 준비도",
    "scriptTitle": "관찰 → 느낌 → 욕구 → 부탁 (OFNR) 완성 문장",
    "stepsTitle": "상대가 마음을 열게 만드는 3가지 전달 포인트",
    "stickyTitle": "부드러운 부탁에도 선을 넘는다면?",
    "stickySub": "단호한 거절·경계선 스크립트 빌더에서 다음 단계를 준비하세요",
    "stickyBtn": "경계 빌더 →",
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
    "title": "非暴力沟通（NVC）冲突缓和话术生成器 | DopaBrain",
    "heroTitle": "非暴力沟通（NVC）话术生成器",
    "ctaBtn": "生成温和OFNR沟通话术",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "非暴力コミュニケーション（NVC）会話ビルダー | DopaBrain",
    "heroTitle": "NVC対立緩和スクリプト作成",
    "ctaBtn": "落ち着いたOFNR会話文を作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Constructor de Comunicación No Violenta (CNV) | DopaBrain",
    "heroTitle": "Guiones de Comunicación No Violenta",
    "ctaBtn": "Crear guion CNV tranquilo",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Construtor de Comunicação Não-Violenta (CNV) | DopaBrain",
    "heroTitle": "Roteiros de Comunicação Não-Violenta",
    "ctaBtn": "Criar roteiro CNV calmo",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Gewaltfreie Kommunikation (GFK) Skript-Builder | DopaBrain",
    "heroTitle": "GFK Konflikt-Skript Builder",
    "ctaBtn": "Ruhiges GFK-Skript erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Constructeur Communication Non Violente (CNV) | DopaBrain",
    "heroTitle": "Scripts de Communication Non Violente",
    "ctaBtn": "Créer mon script CNV",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Конструктор Ненасильственного общения (ННО) | DopaBrain",
    "heroTitle": "Скрипты Ненасильственного общения",
    "ctaBtn": "Создать спокойный скрипт",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "अहिंसक संवाद (NVC) और संघर्ष समाधान स्क्रिप्ट | DopaBrain",
    "heroTitle": "NVC संवाद स्क्रिप्ट बिल्डर",
    "ctaBtn": "शांत संवाद स्क्रिप्ट बनाएँ",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pembuat Skrip Komunikasi Non-Kekerasan (NVC) | DopaBrain",
    "heroTitle": "Skrip De-Eskalasi Konflik NVC",
    "ctaBtn": "Buat Skrip NVC Tenang",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Şiddetsiz İletişim (NVC) Çatışma Çözücü | DopaBrain",
    "heroTitle": "Şiddetsiz İletişim (NVC) Oluşturucu",
    "ctaBtn": "Sakin İletişim Metni Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "defensive",
    "en": "High Defensiveness Risk — They tend to shut down or counter-attack quickly",
    "ko": "방어적 반응 우려 — 이야기를 꺼내면 곧바로 반박하거나 닫혀버림"
  },
  {
    "id": "resentment",
    "en": "Built-Up Resentment — I have stayed silent too long and feel close to snapping",
    "ko": "누적된 서운함 — 너무 오래 참아서 말하다 감정이 폭발할 것 같음"
  },
  {
    "id": "blame_words",
    "en": "\"Always / Never\" Framing — Tempted to bring up past mistakes during the talk",
    "ko": "과거·일반화 유혹 — \"맨날\", \"절대\" 같은 단어나 옛날 일이 자꾸 떠오름"
  },
  {
    "id": "unclear_ask",
    "en": "Vague Request — I know I am frustrated, but unsure what concrete change to ask for",
    "ko": "모호한 요구 — 답답한 건 알겠는데 구체적으로 뭘 부탁해야 할지 막막함"
  },
  {
    "id": "high_stakes",
    "en": "High Relationship/Work Stakes — Preserving trust matters as much as the issue",
    "ko": "높은 관계 중요도 — 문제 해결만큼 관계와 신뢰를 지키는 것도 중요함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Emotional Charge — Cool Down First, Then Use Ultra-Clean Facts",
    "koT": "높은 감정 과열 상태 — 먼저 열기를 식히고 사실 1가지만 전하세요",
    "enD": "When heat is high, starting with character labels triggers instant defense. Open with one neutral camera-level observation and one doable request.",
    "koD": "감정이 크게 쌓인 상태에서는 평가 섞인 첫 마디가 즉각 싸움을 부릅니다. 카메라에 찍힌 객관적 사실 1가지와 실행 가능한 부탁 1가지로만 압축하세요.",
    "enS": "\"When [specific event happened without judgment], I felt overwhelmed because I really value clarity and mutual respect. Would you be willing to [concrete next step]?\"",
    "koS": "\"[판단 없이 구체적 사실]이 있었을 때, 서로 존중하고 예측 가능한 소통이 중요해서 내가 많이 당황하고 지쳤어. 앞으로는 [구체적 행동 1가지]로 맞춰갈 수 있을까?\"",
    "enL": [
      "Drop \"always\", \"never\", and motive guessing—describe only what a video camera would record.",
      "Speak slowly and keep the opener under 3 sentences so they can actually hear you.",
      "Agree on a 15-minute pause rule upfront if voices start rising."
    ],
    "koL": [
      "\"맨날\", \"일부러\" 같은 추측을 빼고 CCTV에 찍힐 객관적 사실만 말하세요.",
      "상대가 방어벽을 치지 않도록 첫 발언은 3문장 이내로 차분히 끝내세요.",
      "목소리가 커지면 15분 쉬었다 다시 이야기하자고 시작 전에 합의하세요."
    ]
  },
  "mid": {
    "enT": "Balanced Tension — Classic 4-Step OFNR Opens Dialogue",
    "koT": "대화 가능한 긴장 구간 — 정석 OFNR 4단계가 가장 잘 통합니다",
    "enD": "You have enough calm to stay constructive. Pairing an honest \"I feel\" statement with a specific positive request invites collaboration.",
    "koD": "건설적인 대화가 충분히 가능한 상태입니다. 솔직한 \"나는 ~느꼈어\"와 긍정적 행동 부탁을 연결하면 협력을 이끌어내기 좋습니다.",
    "enS": "\"I want us on the same team. Lately when [observation], I feel stretched because reliability matters to me. Could we try [specific request] this week?\"",
    "koS": "\"우리 같은 편으로 잘 맞춰가고 싶어. 최근 [구체적 사실]이 있을 때 안정감이 중요해서 조금 버거웠어. 이번 주부터 [구체적 부탁]을 시도해 볼 수 있을까?\"",
    "enL": [
      "Ask for what you DO want (\"a quick message by 5 PM\") rather than what you do not want.",
      "After stating your request, pause and ask: \"How does that land for you?\"",
      "Stick to one issue per conversation—do not stack three old grievances."
    ],
    "koL": [
      "\"하지 마\" 대신 \"오후 5시까지 짧게 공유해 줘\"처럼 원하는 행동으로 부탁하세요.",
      "말을 마친 뒤 \"네 생각은 어때?\"라고 물어 쌍방향 대화로 여세요.",
      "한 번의 대화에서는 딱 1가지 주제만 다루세요."
    ]
  },
  "high": {
    "enT": "Calm & Constructive Readiness — Clear Collaborative Ask",
    "koT": "차분하고 높은 대화 준비도 — 명료한 협력 제안",
    "enD": "Your emotional steadiness is an asset. Keep your request warm, brief, and mutually respectful.",
    "koD": "감정이 안정되어 있어 매우 효과적인 대화가 가능합니다. 따뜻하고 간결하게 핵심을 전달하세요.",
    "enS": "\"Thanks for making time to talk. For me to do my best here, I need clear expectations—would [specific request] work well for both of us?\"",
    "koS": "\"시간 내줘서 고마워. 나도 더 즐겁게 함께하려면 기준이 분명한 게 좋아서, [구체적 부탁] 방향으로 맞춰보면 어떨까?\"",
    "enL": [
      "Open with genuine appreciation for their time or partnership.",
      "Confirm the agreed next step in one concise sentence at the end.",
      "Follow through consistently on your own side of the agreement."
    ],
    "koL": [
      "대화에 응해 준 것에 짧은 감사로 부드럽게 시작하세요.",
      "대화가 끝나면 합의된 다음 행동을 한 문장으로 깔끔히 확인하세요.",
      "내가 약속한 부분도 일관되게 지켜 신뢰를 쌓으세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_nvc_builder_v1";
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
      window.gtag('event', "nvc_conflict_complete", {
        tool_slug: "nvc-conflict-script-builder",
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
      var shareUrl = "https://dopabrain.com/portal/tools/nvc-conflict-script-builder.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "nvc-conflict-script-builder",
        filename: 'dopabrain-nvc-conflict-script-builder-card.png',
        badge: "MARSHALL ROSENBERG OFNR · CONFLICT CLARITY",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
        accent2: "#3b82f6"
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
