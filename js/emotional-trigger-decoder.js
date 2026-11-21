/* Emotional Trigger & 60-Second Response Decoder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Emotional Trigger Decoder & 60-Second Response Pause | DopaBrain",
    "metaDesc": "Free 12-language Emotional Trigger Decoder. Identify what activated a sudden emotional spike across 5 core wound signals locally and get a calm 60-second response-pause script.",
    "keywords": "emotional trigger decoder, why did i get triggered, emotional triggers worksheet, 60 second pause script, trauma trigger response, dopabrain",
    "kicker": "TRIGGER CLARITY & 60-SECOND PAUSE",
    "heroTitle": "Emotional Trigger & 60-Second Response Decoder",
    "heroLead": "Did a small comment, tone shift, or delay suddenly feel 10x bigger than the moment? Rate 5 core trigger signals privately to separate the old alarm from today’s reality and choose a calm response.",
    "chip1": "5 Trigger Wounds",
    "chip2": "60s Pause Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK TRIGGER INTENSITY (1 = CALM, 5 = SPIKING)",
    "step1Title": "Which emotional alarm bells are ringing loudest right now?",
    "step1Sub": "Your ratings stay strictly inside your browser—zero private notes are ever uploaded.",
    "inputLabel": "Optional: 1 neutral fact about what actually happened (100% local):",
    "inputPlaceholder": "Example: They answered briefly while busy—not proof they are angry at me",
    "ctaBtn": "Decode Trigger & Build Pause Plan",
    "resultBadge": "STEP 2 • YOUR CALM TRIGGER DECODER CARD",
    "noteTitle": "My Present-Time Neutral Fact Anchor",
    "meterLabel": "Current Groundedness Margin",
    "scriptTitle": "60-Second Pause Script Before Replying",
    "stepsTitle": "3 Steps to Respond Instead of React",
    "stickyTitle": "Does this spike feel like an older memory flooding in?",
    "stickySub": "Walk through 6 present-time flashback grounding anchors",
    "stickyBtn": "6-Step Grounding →",
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
    "title": "감정 트리거 해독기 & 60초 반응 브레이크 | DopaBrain",
    "metaDesc": "사소한 말투나 표정에 갑자기 감정이 10배로 커졌나요? 5가지 핵심 감정 트리거 신호를 로컬에서 점검하고 후회 없는 60초 대응 스크립트를 받아보세요.",
    "kicker": "감정 방아쇠 해독 & 60초 반응 브레이크",
    "heroTitle": "감정 트리거 해독기 & 60초 반응 포즈",
    "heroLead": "작은 말 한마디나 무심한 태도에 가슴이 쿵 내려앉거나 화가 치밀었나요? 5가지 핵심 트리거 신호를 비공개로 점검해 과거 경보와 현재 사실을 분리하세요.",
    "chip1": "5가지 핵심 트리거",
    "chip2": "60초 대응 문장",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 지금 울리는 감정 경보 점검 (1 = 평온, 5 = 급상승)",
    "step1Title": "지금 순간 가장 강하게 건드려진 감각은 무엇인가요?",
    "step1Sub": "모든 입력은 내 기기 안에서만 처리되며 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 해석을 빼고 지금 일어난 객관적 사실 1가지 (100% 로컬):",
    "ctaBtn": "트리거 해독 & 60초 대응 플랜 생성",
    "resultBadge": "2단계 • 나의 감정 트리거 해독 카드",
    "noteTitle": "지금 시점의 객관적 사실 앵커",
    "meterLabel": "현재 감정 여유도",
    "scriptTitle": "바로 반응하기 전 쓰는 60초 포즈 문장",
    "stepsTitle": "충동 반응 대신 선택으로 바꾸는 3단계",
    "stickyTitle": "오래된 기억이 한꺼번에 밀려오는 느낌인가요?",
    "stickySub": "6단계 현재 시점 그라운딩으로 안전하게 돌아오세요",
    "stickyBtn": "6단계 그라운딩 →",
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
    "title": "情绪触发点解码与60秒暂停器 | DopaBrain",
    "heroTitle": "情绪触发点解码器",
    "ctaBtn": "解码触发点并生成暂停方案",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "感情トリガー・デコーダー（60秒ポーズ） | DopaBrain",
    "heroTitle": "感情トリガー・デコーダー",
    "ctaBtn": "トリガーを解読する",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Decodificador de Detonantes Emocionales (60s) | DopaBrain",
    "heroTitle": "Decodificador de Detonantes",
    "ctaBtn": "Decodificar y crear pausa",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Decodificador de Gatilhos Emocionais (60s) | DopaBrain",
    "heroTitle": "Decodificador de Gatilhos",
    "ctaBtn": "Decodificar gatilho",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Emotions-Trigger-Decoder & 60s-Pause | DopaBrain",
    "heroTitle": "Emotions-Trigger-Decoder",
    "ctaBtn": "Trigger entschlüsseln",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Décodeur de Déclencheurs Émotionnels (60s) | DopaBrain",
    "heroTitle": "Décodeur de Déclencheurs",
    "ctaBtn": "Décoder le déclencheur",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Декодер эмоциональных триггеров (60с) | DopaBrain",
    "heroTitle": "Декодер триггеров",
    "ctaBtn": "Расшифровать триггер",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "इमोशनल ट्रिगर डिकोडर (60-सेकंड पॉज़) | DopaBrain",
    "heroTitle": "इमोशनल ट्रिगर डिकोडर",
    "ctaBtn": "ट्रिगर डिकोड करें",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Dekoder Pemicu Emosi & Jeda 60 Detik | DopaBrain",
    "heroTitle": "Dekoder Pemicu Emosi",
    "ctaBtn": "Dekode Pemicu Sekarang",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Duygusal Tetikleyici Çözücü (60s Mola) | DopaBrain",
    "heroTitle": "Duygusal Tetikleyici Çözücü",
    "ctaBtn": "Tetikleyiciyi Çöz",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "unheard",
    "en": "Feeling Dismissed or Unheard — Being talked over, brushed off, or minimized",
    "ko": "무시·경청 부재 — 내 말이 끊기거나 대수롭지 않게 넘겨진 느낌"
  },
  {
    "id": "criticized",
    "en": "Sharp Criticism / Shame Alarm — Sensing disapproval, blame, or \"not good enough\"",
    "ko": "비판·수치심 경보 — 질책이나 실망의 기색에 즉각 위축되거나 방어적이 됨"
  },
  {
    "id": "controlled",
    "en": "Loss of Autonomy — Feeling cornered, micromanaged, or forced to comply",
    "ko": "통제감 상실 — 선택권 없이 밀리거나 간섭받는 느낌에 반발심이 치솟음"
  },
  {
    "id": "abandoned",
    "en": "Disconnection / Coldness — Sudden silence, distance, or feeling left out",
    "ko": "단절·소외 경보 — 갑작스러운 냉랭함이나 거리감에 버려질 것 같은 불안"
  },
  {
    "id": "overloaded",
    "en": "Sensory & Demand Overload — Too many requests hitting an already depleted brain",
    "ko": "과부하 폭발 — 이미 지친 상태에서 추가 요구가 들어와 인내심이 끊어짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "High-Intensity Trigger Surge — Delay Any Reply for 20 Minutes",
    "koT": "고강도 트리거 급상승 — 지금 20분간 답변을 멈추세요",
    "enD": "Your nervous system is in full defense mode right now. Any text or conversation sent during a high-adrenaline wave usually escalates regret. Let the 90-second chemical surge clear first.",
    "koD": "지금 신경계가 완전 방어 모드에 들어갔습니다. 아드레날린이 치솟은 상태에서 보내는 답장은 후회로 이어지기 쉽습니다. 먼저 생리적 파도를 가라앉히세요.",
    "enS": "\"I want to respond thoughtfully rather than react in the heat of the moment. Give me 20 minutes to collect my thoughts and I will get right back to you.\"",
    "koS": "\"감정이 올라온 상태에서 성급하게 답하고 싶지 않아요. 20분만 생각을 정리한 뒤 차분하게 다시 이야기할게요.\"",
    "enL": [
      "Drop your shoulders, unclench your jaw, and take 3 double-inhale physiological sighs.",
      "Write the raw unfiltered reaction in a private note—do NOT send it.",
      "Ask: \"What is 10% true about today, and what is 90% an old memory?\""
    ],
    "koL": [
      "어깨와 턱 힘을 풀고 코로 두 번 들이마신 뒤 길게 내쉬는 호흡을 3회 반복하세요.",
      "당장 하고 싶은 말은 전송하지 말고 개인 메모장에만 적어 감정을 배출하세요.",
      "\"지금 반응의 10%는 현재 사건이고, 90%는 과거 상처가 아닐까?\" 스스로 물어보세요."
    ]
  },
  "mid": {
    "enT": "Active Trigger Ripple — Name the Core Need Before Speaking",
    "koT": "활성 트리거 파동 — 말하기 전에 핵심 욕구 1가지를 확인하세요",
    "enD": "You feel a noticeable sting, yet you still have enough prefrontal clarity to pause, name the underlying need (respect, clarity, breathing room), and make one clean request.",
    "koD": "따끔한 자극이 올라왔지만 아직 이성적 여유가 남아 있는 골든타임입니다. 비난 대신 내가 진짜 원하는 욕구(존중·명확성·여유)를 1문장으로 정리하세요.",
    "enS": "\"When that happened, I noticed myself getting tense because I really value clarity here. Could we slow down for a minute and align?\"",
    "koS": "\"방금 상황에서 내가 명확한 소통을 중요하게 여겨서 살짝 긴장됐어요. 잠깐 숨 고르고 서로 원하는 지점을 맞춰볼 수 있을까요?\"",
    "enL": [
      "Label the emotion in 2 words (\"I feel dismissed\" instead of \"You never listen\").",
      "Drink cold water or shift posture to signal physical safety.",
      "State 1 concrete request focused on the next step, not past scorekeeping."
    ],
    "koL": [
      "\"넌 항상 그래\" 대신 \"내가 방금 무시당한 느낌이 들었어\"처럼 내 감정 두 단어로 이름 붙이세요.",
      "차가운 물을 한 모금 마시거나 자세를 바꿔 몸의 긴장을 먼저 낮추세요.",
      "과거 잘못을 따지기보다 앞으로 원하는 구체적 행동 1가지만 요청하세요."
    ]
  },
  "high": {
    "enT": "Grounded Window — High Clarity & Steady Self-Leadership",
    "koT": "안정적인 내성 창 — 높은 명료함과 차분한 자기 주도 상태",
    "enD": "Your nervous system is steady enough to read the situation accurately without hijacking. Capture what helped you stay regulated so you can reuse it on tougher days.",
    "koD": "신경계가 안정되어 상황을 과장 없이 바라볼 수 있는 상태입니다. 오늘 흔들리지 않게 도와준 요인을 기억해 두면 힘든 날의 자산이 됩니다.",
    "enS": "\"Thanks for sharing your perspective—let me reflect on that and share what works best on my side too.\"",
    "koS": "\"생각을 나눠줘서 고마워요. 내 입장에서도 잘 맞는 방향을 차분히 정리해서 같이 맞춰가 볼게요.\"",
    "enL": [
      "Respond directly using calm, observable facts.",
      "Notice subtle body tightness early before it builds.",
      "Keep protecting sleep and margin so your trigger threshold stays resilient."
    ],
    "koL": [
      "감정 추측 없이 관찰된 사실 중심으로 담백하게 소통하세요.",
      "어깨나 호흡이 얕아지는 미세 신호를 일찍 알아차리는 습관을 유지하세요.",
      "수면과 여유 시간을 지켜 감정 내성 한계선을 탄탄하게 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_emo_trigger_v1";
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
      window.gtag('event', "emotional_trigger_complete", {
        tool_slug: "emotional-trigger-decoder",
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
      var shareUrl = "https://dopabrain.com/portal/tools/emotional-trigger-decoder.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "emotional-trigger-decoder",
        filename: 'dopabrain-emotional-trigger-decoder-card.png',
        badge: "TRIGGER CLARITY & 60-SECOND PAUSE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f43f5e",
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
