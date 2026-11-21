/* Loneliness & Disconnection Micro-Connection Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Loneliness & Disconnection 5-Min Micro-Connection Planner | DopaBrain",
    "metaDesc": "Free 12-language Loneliness Micro-Connection Planner. Spot 5 social disconnection barriers locally and generate a warm, zero-awkwardness 5-minute reach-out text that actually gets sent.",
    "keywords": "loneliness micro connection plan, how to reach out when lonely, low energy social connection script, overcoming isolation gently, social disconnection reset, dopabrain",
    "kicker": "LOW-FRICTION WARMTH • 5-MIN CONNECTION",
    "heroTitle": "Loneliness & Disconnection Micro-Connection Planner",
    "heroLead": "Feeling lonely yet too drained—or worried about being awkward—to plan a big hangout? Rate 5 connection barriers locally to send one effortless, zero-pressure 5-minute reach-out.",
    "chip1": "5 Barrier Checks",
    "chip2": "Zero-Awkward Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHAT MAKES REACHING OUT HARD (1 = EASY, 5 = BLOCKED)",
    "step1Title": "Which friction points are keeping you feeling disconnected this week?",
    "step1Sub": "Loneliness is a normal hunger signal for belonging, never a personal flaw. Everything stays local.",
    "inputLabel": "Optional: 1 low-pressure person or cozy third-place I can connect with (100% local):",
    "inputPlaceholder": "Example: Texting my college friend a quick photo of a coffee shop or sitting in a quiet library",
    "ctaBtn": "Build 5-Minute Micro-Connection Plan",
    "resultBadge": "STEP 2 • YOUR LOW-PRESSURE CONNECTION PLAN",
    "noteTitle": "My Gentle Connection Anchor This Week",
    "meterLabel": "Connection Readiness Margin",
    "scriptTitle": "Warm, Zero-Awkwardness \"Thinking of You\" Text",
    "stepsTitle": "3 Tiny Connection Moves (Zero Big-Party Energy Needed)",
    "stickyTitle": "Does social anxiety make reaching out feel nerve-wracking?",
    "stickySub": "Sort 6 gentle steps on the CBT Social Confidence Ladder",
    "stickyBtn": "Confidence Ladder →",
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
    "title": "외로움·관계 단절 5분 마이크로 연결 플래너 | DopaBrain",
    "metaDesc": "외롭지만 큰 약속을 잡을 기운은 없고, 먼저 연락하자니 어색하거나 민폐일까 망설여지나요? 5가지 연결 장벽을 비공개로 점검하고 부담 없는 5분 안부 문장을 받아보세요.",
    "kicker": "저에너지 따뜻한 연결 · 5분 안부",
    "heroTitle": "외로움·단절 5분 마이크로 연결 플래너",
    "heroLead": "누군가와 연결되고 싶지만 거창한 모임은 부담스럽고 먼저 연락하기 어색하신가요? 5가지 연결 마찰을 로컬에서 점검해 답장 압박 없는 가벼운 5분 연결부터 시작하세요.",
    "chip1": "5가지 연결 장벽",
    "chip2": "무부담 안부 문장",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 연결을 막는 마찰 점검 (1 = 쉬움, 5 = 막막함)",
    "step1Title": "이번 주 사람들과 연결되는 데 가장 크게 걸리는 부분은 무엇인가요?",
    "step1Sub": "외로움은 배고픔처럼 자연스러운 소속감 신호일 뿐 결함이 아닙니다. 기록은 로컬에만 남습니다.",
    "inputLabel": "선택: 부담 없이 가볍게 안부 건넬 사람이나 편안한 공간 1곳 (100% 로컬):",
    "ctaBtn": "5분 마이크로 연결 플랜 & 안부 문장 만들기",
    "resultBadge": "2단계 • 나의 저에너지 마이크로 연결 플랜",
    "noteTitle": "이번 주 가볍게 이어볼 나의 연결 앵커",
    "meterLabel": "현재 사회적 연결 여유도",
    "scriptTitle": "어색함과 답장 부담을 없앤 따뜻한 1문장 안부",
    "stepsTitle": "큰 에너지 없이 외로움을 녹이는 3가지 마이크로 연결",
    "stickyTitle": "먼저 다가가거나 대화할 때 긴장이 크게 올라오나요?",
    "stickySub": "사회불안 CBT 노출 사다리에서 가장 쉬운 1단계부터 시작하세요",
    "stickyBtn": "자신감 사다리 →",
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
    "title": "孤独感5分钟轻量微连接计划 | DopaBrain",
    "heroTitle": "5分钟轻量微连接计划",
    "ctaBtn": "生成零尴尬问候话术",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "孤独感 5分マイクロつながり設計 | DopaBrain",
    "heroTitle": "5分マイクロつながり",
    "ctaBtn": "気軽な連絡文を作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Micro-Conexión (Soledad 5m) | DopaBrain",
    "heroTitle": "Plan de Micro-Conexión",
    "ctaBtn": "Crear mensaje cálido 5m",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Micro-Conexão (Solidão 5m) | DopaBrain",
    "heroTitle": "Plano de Micro-Conexão",
    "ctaBtn": "Criar mensagem leve 5m",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Einsamkeit: 5-Min-Mikro-Verbindung | DopaBrain",
    "heroTitle": "5-Min-Mikro-Verbindung",
    "ctaBtn": "Lockere Nachricht erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Micro-Connexion Solitude (5m) | DopaBrain",
    "heroTitle": "Plan Micro-Connexion",
    "ctaBtn": "Créer un message doux",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План микро-связи при одиночестве | DopaBrain",
    "heroTitle": "План микро-связи (5м)",
    "ctaBtn": "Создать тёплое сообщение",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "अकेलेपन के लिए 5-मिनट माइक्रो-कनेक्शन | DopaBrain",
    "heroTitle": "माइक्रो-कनेक्शन प्लान",
    "ctaBtn": "आत्मीय संदेश बनाएं",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Rencana Mikro-Koneksi Atasi Kesepian | DopaBrain",
    "heroTitle": "Rencana Mikro-Koneksi",
    "ctaBtn": "Buat Pesan Hangat 5m",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yalnızlık İçin 5 Dk Mikro Bağlantı | DopaBrain",
    "heroTitle": "5 Dk Mikro Bağlantı",
    "ctaBtn": "Samimi Mesaj Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "effort_wall",
    "en": "High-Effort Wall — Feeling too tired to organize dinners, calls, or long meetups",
    "ko": "약속 피로 장벽 — 식사·통화·긴 만남을 잡기엔 에너지가 너무 부족함"
  },
  {
    "id": "bother_fear",
    "en": "Fear of Bothering Others — Assuming friends are too busy or forgot about you",
    "ko": "민폐 걱정 — 상대가 바쁘거나 내 연락을 부담스러워할 것 같아 망설임"
  },
  {
    "id": "feed_sub",
    "en": "Passive Feed Substitution — Scrolling social media hoping to feel close, yet feeling emptier",
    "ko": "피드 대리 만족 — SNS를 보며 연결감을 찾지만 오히려 더 공허해짐"
  },
  {
    "id": "mask_tired",
    "en": "Small-Talk Mask Fatigue — Exhausted by pretending to be upbeat when you just want quiet company",
    "ko": "가면 피로 — 억지로 밝은 척 스몰토크하는 게 힘들어 차라리 혼자를 택함"
  },
  {
    "id": "rusty_gap",
    "en": "Time-Gap Awkwardness — Waiting so long to text back that starting fresh feels weird",
    "ko": "공백 어색함 — 연락이 끊긴 지 오래돼서 지금 다시 말 걸기가 어색함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Deep Isolation Fatigue — Start With 1 \"Zero-Reply-Required\" Ping",
    "koT": "깊은 단절 피로 — \"답장 없어도 되는 1줄 안부\"로 가볍게 시작하세요",
    "enD": "Research shows people consistently underestimate how warmly friends receive an unexpected check-in text (Liu et al., 2022). Skip big plans—send one tiny warm note or spend 20 minutes around gentle human presence.",
    "koD": "심리학 연구(Liu et al., 2022)에 따르면 사람들은 상대가 자신의 안부 연락을 얼마나 반가워할지 실제보다 훨씬 낮게 예상합니다. 큰 약속 대신 답장 부담 없는 1줄이나 카페·도서관의 느슨한 온기부터 시작하세요.",
    "enS": "\"Hey! Something just reminded me of you today—no pressure to reply at all, just hoping your week is treating you kindly.\"",
    "koS": "\"안녕! 오늘 문득 네 생각이 나서 가볍게 안부 남겨. 바쁘면 답장 안 해도 괜찮아—이번 주도 편안하게 잘 보내고 있길 바라!\"",
    "enL": [
      "Send 1 \"no-reply-needed\" text, meme, or photo to someone kind from your past.",
      "Spend 20 minutes in a low-pressure \"third place\" (quiet cafe, bookstore, park bench) to get ambient social warmth.",
      "Swap 15 minutes of passive scrolling for 1 short voice note or real human exchange."
    ],
    "koL": [
      "편안했던 지인 1명에게 \"답장 부담 없는\" 짧은 안부나 사진·밈 1개를 보내보세요.",
      "조용한 카페·서점·공원 같은 제3의 공간에서 20분간 느슨한 사람 온기를 느껴보세요.",
      "수동적인 SNS 스크롤 15분 대신 짧은 음성 메시지나 진짜 안부 1건으로 바꿔보세요."
    ]
  },
  "mid": {
    "enT": "Mild Disconnection Drift — Anchor One Recurring Low-Effort Touchpoint",
    "koT": "가벼운 연결 느슨함 — 부담 적은 정기 접점 1개를 만들어 두세요",
    "enD": "You have solid social capacity once the initiation friction drops. Parallel hangouts (walking, co-working, tea) beat exhausting high-performance dinners.",
    "koD": "첫 연락 장벽만 낮추면 금세 온기가 돌아오는 상태입니다. 거창한 식사보다 함께 산책하기·조용히 차 마시기 같은 나란히 있는 만남이 훨씬 편합니다.",
    "enS": "\"Would love to catch up low-key sometime soon—even a 20-minute walk or coffee next week if you have a window!\"",
    "koS": "\"조만간 가볍게 얼굴 한 번 보자—다음 주에 잠깐 20분 산책이나 커피 한 잔도 너무 좋을 것 같아!\"",
    "enL": [
      "Suggest a time-bounded 30-minute walk or coffee so neither person feels drained.",
      "Do a quick warm greeting with a neighbor, barista, or coworker today—micro-interactions measurably boost mood.",
      "Reach out to 1 person who energizes you rather than drains your mask."
    ],
    "koL": [
      "서로 부담 없도록 30분 산책이나 짧은 커피처럼 끝 시간이 명확한 만남을 제안해 보세요.",
      "이웃·카페 직원·동료에게 가벼운 미소와 짧은 인사를 건네보세요(미세 상호작용이 기분을 눈에 띄게 높입니다).",
      "가면을 써야 하는 모임보다 함께 있으면 편한 1명에게 먼저 손을 내밀어 보세요."
    ]
  },
  "high": {
    "enT": "Warm Connected Rhythm — Nurture Small Consistent Rituals",
    "koT": "따뜻한 연결 리듬 — 소소한 정기 안부를 계속 가꾸세요",
    "enD": "Your sense of belonging feels nourished right now. Friendships stay effortless when tended in tiny weekly doses rather than rare marathon catch-ups.",
    "koD": "현재 정서적 연결감이 안정적으로 채워져 있습니다. 드물게 큰 만남을 잡기보다 매주 작은 안부로 물을 줄 때 관계가 가장 오래 건강하게 유지됩니다.",
    "enS": "\"Grateful for our easy check-ins—let us keep our next casual catch-up on the calendar!\"",
    "koS": "\"편하게 안부 나눌 수 있어서 참 고마워—다음에도 가볍게 또 보자!\"",
    "enL": [
      "Send 1 unexpected appreciation note to someone you value this week.",
      "Balance warm social time with protected solo recharge.",
      "Remember how good small reach-outs feel whenever busy seasons return."
    ],
    "koL": [
      "이번 주 고마운 사람 1명에게 뜻밖의 짧은 감사 인사를 보내보세요.",
      "따뜻한 만남과 혼자만의 충전 시간의 균형을 계속 지켜주세요.",
      "바쁜 시기가 와도 작은 안부 한 통의 힘을 기억해 두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_micro_conn_v1";
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
      window.gtag('event', "micro_connection_complete", {
        tool_slug: "loneliness-micro-connection-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/loneliness-micro-connection-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "loneliness-micro-connection-plan",
        filename: 'dopabrain-loneliness-micro-connection-plan-card.png',
        badge: "LOW-FRICTION WARMTH • 5-MIN CONNECTION",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
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
