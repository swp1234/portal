/* Self-Worth & Shadow Integration Evidence Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Self-Worth & Shadow Integration Evidence Builder | DopaBrain",
    "metaDesc": "Free 12-language Self-Worth & Shadow Integration Evidence Builder. Spot 5 conditional-worth traps locally and build an honest, unconditional self-respect anchor.",
    "keywords": "self worth builder, conditional self esteem worksheet, shadow work integration tool, stop comparing yourself, grounded self respect, dopabrain",
    "kicker": "UNCONDITIONAL WORTH & SHADOW ACCEPTANCE",
    "heroTitle": "Self-Worth & Shadow Integration Evidence Builder",
    "heroLead": "Does your self-respect spike only after praise or productivity—and crash the moment you rest or make a mistake? Rate 5 conditional-worth traps locally to anchor steady dignity.",
    "chip1": "5 Worth Traps",
    "chip2": "Grounded Anchor",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK CONDITIONAL-WORTH TRAPS (1 = STEADY, 5 = FRAGILE)",
    "step1Title": "Which habits are tying your worth to fragile external scoreboards?",
    "step1Sub": "Your reflections stay strictly on your device—zero personal notes are uploaded.",
    "inputLabel": "Optional: 1 quiet personal quality or hard season I survived (100% local):",
    "inputPlaceholder": "Example: I stayed kind and kept showing up even during a difficult year",
    "ctaBtn": "Build Self-Worth Anchor Card",
    "resultBadge": "STEP 2 • YOUR GROUNDED SELF-WORTH ANCHOR",
    "noteTitle": "My Unshakable Personal Evidence",
    "meterLabel": "Internal Self-Worth Stability",
    "scriptTitle": "Grounded Self-Respect Anchor Statement",
    "stepsTitle": "3 Practices for Steady Internal Worth",
    "stickyTitle": "Hearing a harsh inner voice criticizing your mistakes?",
    "stickySub": "Translate inner-critic attacks into calm coaching statements",
    "stickyBtn": "Compassion Lab →",
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
    "title": "자존감·그림자 통합 근거 빌더 | DopaBrain",
    "metaDesc": "성과나 칭찬이 있을 때만 괜찮고 쉬거나 실수하면 자존감이 뚝 떨어지나요? 5가지 조건부 자존감 함정을 로컬에서 점검하고 흔들리지 않는 자기 존중 앵커를 만드세요.",
    "kicker": "조건 없는 자기 존중 · 그림자 수용",
    "heroTitle": "자존감·그림자 통합 근거 빌더",
    "heroLead": "잘 해낸 날에만 나를 인정하고, 쉬거나 부족한 면이 보이면 곧바로 스스로를 깎아내리나요? 5가지 조건부 가치 함정을 비공개로 점검해 단단한 내면 기준을 세우세요.",
    "chip1": "5가지 가치 함정",
    "chip2": "내면 근거 앵커",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 조건부 자존감 함정 점검 (1 = 단단함, 5 = 흔들림)",
    "step1Title": "지금 나의 자존감을 외부 성적표에 묶어두고 있는 습관은 무엇인가요?",
    "step1Sub": "모든 기록은 브라우저 로컬에만 저장되며 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 성과와 무관하게 내가 지켜온 성품이나 버텨낸 시간 1가지 (100% 로컬):",
    "ctaBtn": "단단한 자존감 앵커 카드 만들기",
    "resultBadge": "2단계 • 나의 내면 자존감 근거 카드",
    "noteTitle": "흔들리지 않는 나의 내면 증거",
    "meterLabel": "내면 자존감 안정 지수",
    "scriptTitle": "실수나 비교 앞에서 나를 지키는 현실 문장",
    "stepsTitle": "외부 평가에 덜 흔들리는 3가지 실천",
    "stickyTitle": "실수할 때마다 가혹한 내면 비판자가 목소리를 높이나요?",
    "stickySub": "내면 비판 문장을 따뜻한 코칭 언어로 바꿔보세요",
    "stickyBtn": "자기연민 랩 →",
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
    "title": "自我价值与阴影整合证据构建器 | DopaBrain",
    "heroTitle": "自我价值证据构建器",
    "ctaBtn": "生成自我价值锚点",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "自己価値・シャドウ統合ビルダー | DopaBrain",
    "heroTitle": "自己価値ビルダー",
    "ctaBtn": "自己肯定アンカーを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Constructor de Evidencias de Autoestima | DopaBrain",
    "heroTitle": "Constructor de Autoestima",
    "ctaBtn": "Crear ancla de valor",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Construtor de Evidências de Autoestima | DopaBrain",
    "heroTitle": "Construtor de Autoestima",
    "ctaBtn": "Criar âncora de valor",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Selbstwert-Evidenz-Builder | DopaBrain",
    "heroTitle": "Selbstwert-Builder",
    "ctaBtn": "Selbstwert-Anker erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Constructeur d’Estime de Soi | DopaBrain",
    "heroTitle": "Constructeur d’Estime",
    "ctaBtn": "Créer mon ancrage",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Конструктор опор самоценности | DopaBrain",
    "heroTitle": "Конструктор самоценности",
    "ctaBtn": "Создать опору",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सेल्फ-वर्थ एविडेंस बिल्डर | DopaBrain",
    "heroTitle": "सेल्फ-वर्थ बिल्डर",
    "ctaBtn": "आत्म-सम्मान एंकर बनाएं",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pembangun Bukti Harga Diri | DopaBrain",
    "heroTitle": "Pembangun Harga Diri",
    "ctaBtn": "Buat Jangkar Diri",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Öz-Değer Kanıt Oluşturucu | DopaBrain",
    "heroTitle": "Öz-Değer Oluşturucu",
    "ctaBtn": "Öz-Değer Çapası Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "perf_worth",
    "en": "Productivity-Only Worth — Feeling guilty or \"useless\" whenever you rest or slow down",
    "ko": "성과 조건부 가치 — 생산적으로 일하지 않거나 쉬는 날이면 쓸모없는 기분이 듦"
  },
  {
    "id": "compare_loop",
    "en": "Upward Comparison — Measuring your behind-the-scenes against others’ highlight reels",
    "ko": "비교 루프 — 나의 평범한 일상과 남의 가장 빛나는 순간을 비교하며 위축됨"
  },
  {
    "id": "shadow_hide",
    "en": "Hiding Imperfections — Feeling that if people saw your messy or tired side, they would leave",
    "ko": "그림자 숨기기 — 약하거나 지친 모습을 보이면 사람들이 떠날 것 같아 완벽한 척함"
  },
  {
    "id": "approval_need",
    "en": "Approval Weathervane — Mood rising and falling sharply based on one person’s praise or silence",
    "ko": "인정 풍향계 — 타인의 칭찬 한마디나 무반응에 하루 전체 기분이 크게 요동침"
  },
  {
    "id": "harsh_ledger",
    "en": "Asymmetric Scorekeeping — Remembering every flaw vividly while brushing off real progress",
    "ko": "불공정 채점 — 작은 실수는 오래 기억하면서 잘 해낸 일은 운이라고 넘겨버림"
  }
];
  var TIERS = {
  "low": {
    "enT": "Fragile Conditional Scoreboard — Separate Who You Are From Your Output",
    "koT": "조건부 성적표 과의존 — \"내가 해낸 일\"과 \"나라는 사람\"을 분리하세요",
    "enD": "When worth depends on daily flawless output, every normal human off-day feels like an identity crisis. True stability comes from self-compassion + integrating imperfect parts without shame.",
    "koD": "매일의 성과에 존재 가치를 걸어두면 평범한 컨디션 난조조차 자기 부정으로 이어집니다. 완벽함이 아니라 불완전한 나까지 품는 자기 존중이 진짜 힘입니다.",
    "enS": "\"My mistakes are data I can learn from, not a verdict on my dignity. I am allowed to be a work in progress and still deserve rest and respect.\"",
    "koS": "\"실수는 배울 수 있는 정보일 뿐, 내 존재 가치에 대한 판결이 아니야. 나는 완성되지 않은 과정 속에서도 휴식과 존중을 누릴 자격이 있어.\"",
    "enL": [
      "Write 1 neutral fact of integrity from this week unrelated to money, looks, or metrics.",
      "Unfollow or mute 3 social accounts that reliably spark comparison dread.",
      "Notice one \"shadow\" emotion (envy, fatigue, irritation) and name it with curiosity instead of disgust."
    ],
    "koL": [
      "돈·외모·수치와 무관하게 이번 주 내가 지킨 소소한 성실함 1가지를 적어보세요.",
      "볼 때마다 비교감과 위축감을 주는 SNS 계정 3개를 오늘 조용히 뮤트하세요.",
      "질투·피곤함·짜증 같은 그림자 감정이 올라올 때 혐오 대신 \"지금 많이 지쳤구나\" 하고 호기심으로 바라보세요."
    ]
  },
  "mid": {
    "enT": "Growing Internal Ground — Reinforce Your Evidence Over Comparison",
    "koT": "성장 중인 내면 기반 — 비교보다 나의 실제 증거를 강화하세요",
    "enD": "You have solid self-respect most days, yet comparison or critical feedback can still temporarily knock you off center. Anchor back into observable character values.",
    "koD": "평소에는 꽤 단단하지만 비교 상황이나 날카로운 피드백 앞에서 일시적으로 흔들리는 구간입니다. 내가 중요시하는 가치 행동으로 중심을 되찾으세요.",
    "enS": "\"Someone else’s strength does not shrink mine. I can appreciate their path while staying loyal to my own pace.\"",
    "koS": "\"다른 사람의 빛남이 내 가치를 줄이지 않아. 그들의 속도를 존중하면서도 나는 내 리듬에 충실할 수 있어.\"",
    "enL": [
      "Keep a private weekly 3-bullet log of effort & kindness (not just wins).",
      "When receiving feedback, ask: \"What is useful here, and what does not belong to me?\"",
      "Take one unapologetic rest block without earning it first."
    ],
    "koL": [
      "결과뿐만 아니라 노력과 친절을 기록하는 주간 3줄 근거 노트를 유지하세요.",
      "피드백을 들을 때 \"도움 되는 정보\"와 \"내 몫이 아닌 감정\"을 분리해 받아들이세요.",
      "뭔가를 성취해서 따낸 보상이 아니라 그냥 나에게 주는 휴식 시간을 가져보세요."
    ]
  },
  "high": {
    "enT": "Steady Unconditional Worth — Wholehearted Confidence & Shadow Acceptance",
    "koT": "단단한 내면 자존감 — 빛과 그림자를 함께 품은 여유",
    "enD": "Your self-respect is anchored internally rather than leased from external applause. That steadiness lets you learn faster from mistakes without collapsing into shame.",
    "koD": "외부 박수에 빌려 쓰는 자존감이 아니라 내면에서 단단히 지지되는 상태입니다. 이런 여유 덕분에 실수 앞에서도 무너지지 않고 더 빠르게 성장할 수 있습니다.",
    "enS": "\"I can own my flaws openly, repair when needed, and celebrate growth without needing to prove my worth.\"",
    "koS": "\"부족한 점은 담백하게 인정하고, 필요하면 회복하며, 증명하려 애쓰지 않아도 나의 성장을 기쁘게 누릴 수 있어.\"",
    "enL": [
      "Model honest imperfection around people you care about—it creates instant psychological safety.",
      "Stay curious about blind spots as growth invitations, never threats.",
      "Keep nurturing the quiet values that ground you."
    ],
    "koL": [
      "주변 사람들에게 완벽한 척 대신 솔직한 인간미를 보여주면 관계의 안전감이 깊어집니다.",
      "약점을 위협이 아닌 성장의 초대장으로 바라보는 태도를 이어가세요.",
      "나를 단단하게 지탱해 주는 핵심 가치 습관을 계속 가꾸세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_self_worth_v1";
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
      window.gtag('event', "self_worth_complete", {
        tool_slug: "self-worth-evidence-builder",
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
      var shareUrl = "https://dopabrain.com/portal/tools/self-worth-evidence-builder.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "self-worth-evidence-builder",
        filename: 'dopabrain-self-worth-evidence-builder-card.png',
        badge: "UNCONDITIONAL WORTH & SHADOW ACCEPTANCE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
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
