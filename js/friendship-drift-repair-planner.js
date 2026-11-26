/* Adult Friendship Drift & Warm Reconnection Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Adult Friendship Drift & Warm Reconnection Planner | DopaBrain",
    "metaDesc": "Want to reach out to an old friend you haven’t texted in 8 months, yet stuck in guilt over waiting so long? Audit 5 reconnection myths locally and copy a zero-pressure warm message.",
    "kicker": "ADULT FRIENDSHIPS • ZERO-AWKWARDNESS RECONNECT",
    "heroTitle": "Adult Friendship Drift & Warm Reconnection Planner",
    "heroLead": "Want to reach out to an old friend you haven’t texted in 8 months, yet stuck in guilt over waiting so long? Audit 5 reconnection myths locally and copy a zero-pressure warm message.",
    "chip1": "5 Reconnect Myths",
    "chip2": "Warm 2-Line Texts",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHAT IS HOLDING BACK YOUR TEXT (1 = EASY, 5 = HOLDING BACK)",
    "step1Title": "What makes reaching back out feel harder than it actually is?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Name/initial of 1 friend + the tiny thing that reminded me of them today (100% local):",
    "ctaBtn": "Draft My Zero-Pressure Reconnect Plan",
    "resultBadge": "STEP 2 • YOUR WARM ADULT-FRIENDSHIP RECONNECT KIT",
    "noteTitle": "Friend & Warm Memory Spark",
    "meterLabel": "Reconnection Readiness",
    "scriptTitle": "Zero-Pressure 2-Line \"Thinking of You\" Text",
    "stepsTitle": "3 Research-Backed Truths About Reaching Out",
    "stickyTitle": "Curious how your attachment style shapes adult friendships?",
    "stickySub": "Take the free Attachment Style Test next",
    "stickyBtn": "Attachment Test →",
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
    "title": "멀어진 어른 친구 관계 회복 & 어색함 없는 연락 플래너 | DopaBrain",
    "metaDesc": "8개월 넘게 연락 못 한 소중한 친구가 떠오르는데 너무 오래돼서 어색할까 봐 망설여지나요? 5가지 재연결 오해를 풀고 부담 없는 따뜻한 첫 안부 문장을 만들어 보세요.",
    "kicker": "멀어진 친구 다시 연락 · 어색함 없는 안부 플래너",
    "heroTitle": "멀어진 어른 친구 관계 회복 & 어색함 없는 연락 플래너",
    "heroLead": "8개월 넘게 연락 못 한 소중한 친구가 떠오르는데 너무 오래돼서 어색할까 봐 망설여지나요? 5가지 재연결 오해를 풀고 부담 없는 따뜻한 첫 안부 문장을 만들어 보세요.",
    "chip1": "5가지 연락 오해",
    "chip2": "부담 없는 2줄 안부",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 연락 버튼을 누르지 못하게 막는 생각 점검 (1 = 가벼움, 5 = 강함)",
    "step1Title": "오랜만에 안부를 건네는 일이 유독 어렵게 느껴지는 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 문득 떠오른 친구 이니셜 1명 + 오늘 그 친구가 생각난 소소한 계기 (100% 로컬):",
    "ctaBtn": "어색함 없는 따뜻한 안부 멘트 보기",
    "resultBadge": "2단계 • 부담 없는 어른 친구 재연결 키트",
    "noteTitle": "떠오른 친구와 따뜻한 기억 한 조각",
    "meterLabel": "재연결 용기·편안함 지수",
    "scriptTitle": "답장 부담 0% 따뜻한 2줄 안부 문장",
    "stepsTitle": "연구가 증명한 오래된 친구 연락의 3가지 진실",
    "stickyTitle": "나의 애착 성향이 어른 친구 관계와 거리감에 어떤 영향을 주는지 알아볼까요?",
    "stickySub": "무료 애착 유형 테스트로 관계 소통 패턴 확인하기",
    "stickyBtn": "애착 테스트 →",
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
    "title": "成年人友谊疏远修复与破冰问候计划 | DopaBrain",
    "heroTitle": "成年人友谊疏远修复与破冰问候计划",
    "heroLead": "放下久未联系的尴尬心理，生成轻松无压力的2句温暖破冰问候。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "疎遠な友人への気軽な再連絡プランナー | DopaBrain",
    "heroTitle": "疎遠な友人への気軽な再連絡プランナー",
    "heroLead": "連絡が遅れた罪悪感を手放し、返信負担ゼロの温かい2行メッセージを作成。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan para Reconectar con Viejos Amigos | DopaBrain",
    "heroTitle": "Plan para Reconectar con Viejos Amigos",
    "heroLead": "Supera la culpa por el tiempo pasado con mensajes cálidos sin presión de respuesta.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano para Reconectar Velhas Amizades | DopaBrain",
    "heroTitle": "Plano para Reconectar Velhas Amizades",
    "heroLead": "Deixe a culpa pelo sumiço de lado e envie uma mensagem leve e calorosa em 2 linhas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Freundschafts-Wiederbelebungs-Planer | DopaBrain",
    "heroTitle": "Freundschafts-Wiederbelebungs-Planer",
    "heroLead": "Löse Kontaktpause-Schuldgefühle und sende eine herzliche 2-Zeilen-Nachricht ohne Druck.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Reconnexion Amicale sans Gêne | DopaBrain",
    "heroTitle": "Plan Reconnexion Amicale sans Gêne",
    "heroLead": "Dépasser la culpabilité du silence avec un message chaleureux en 2 lignes sans pression.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План тёплого возвращения старой дружбы | DopaBrain",
    "heroTitle": "План тёплого возвращения старой дружбы",
    "heroLead": "Отпустите неловкость паузы и напишите тёплое сообщение в 2 строки без давления.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "फ्रेंडशिप ड्रिफ्ट व रीकनेक्ट प्लानर | DopaBrain",
    "heroTitle": "फ्रेंडशिप ड्रिफ्ट व रीकनेक्ट प्लानर",
    "heroLead": "लंबे समय बाद मैसेज करने की झिझक छोड़ें और बिना दबाव का 2-लाइन संदेश भेजें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Sambung Kembali Pertemanan Lama | DopaBrain",
    "heroTitle": "Perencana Sambung Kembali Pertemanan Lama",
    "heroLead": "Lepas rasa canggung lama tidak chat dan kirim sapaan hangat 2 baris tanpa beban.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Eski Arkadaşla Yeniden Bağ Kurma Planı | DopaBrain",
    "heroTitle": "Eski Arkadaşla Yeniden Bağ Kurma Planı",
    "heroLead": "Uzun sessizlik suçluluğunu bırakın ve baskısız sıcak 2 satırlık mesaj gönderin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "too_late_guilt",
    "en": "Delayed-Reply Shame — Thinking \"it’s been too long, they’re probably annoyed with me\"",
    "ko": "늦은 연락 죄책감 — \"너무 오래 잠수 타서 분명 서운하거나 화났을 거야\"라고 단정함"
  },
  {
    "id": "underestimate_joy",
    "en": "Underestimating Warmth — Assuming a quick check-in will feel intrusive or unwelcome",
    "ko": "반가움 과소평가 — 내 짧은 안부가 상대에게 귀찮거나 뜬금없을 거라 과소평가함"
  },
  {
    "id": "big_catchup_pressure",
    "en": "All-or-Nothing Catch-Up — Thinking you must schedule a 3-hour dinner instead of a 2-line text",
    "ko": "거창한 약속 부담 — 짧은 톡이 아니라 꼭 몇 시간짜리 저녁 약속을 잡아야 할 것 같음"
  },
  {
    "id": "life_stage_gap",
    "en": "Different Life Seasons — Feeling unsure what to talk about after job, city, or family changes",
    "ko": "생활 환경 변화 — 직장·거주지·가정 환경이 달라져 공통 화제가 없을까 봐 망설임"
  },
  {
    "id": "scorekeeping_fear",
    "en": "Who-Texted-Last Math — Waiting for them to reach out first out of quiet insecurity",
    "ko": "먼저 연락 눈치 — \"저번에도 내가 먼저 했으니까\"라며 서로 기다리다 멀어짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "Overthinking the Awkwardness — Send the 2-Line \"No-Reply-Needed\" Text Today",
    "koT": "어색함 과대평가 — 오늘 바로 \"답장 부담 0%\" 2줄 안부부터 가볍게 보내 보세요",
    "enD": "A landmark study by Peggy Liu et al. (2022, Journal of Personality and Social Psychology) found that people systematically UNDERESTIMATE how deeply delighted old friends feel when receiving an unexpected brief check-in—especially after long gaps!",
    "koD": "미국 심리학회지(Liu et al., 2022) 연구에 따르면 우리는 오랜만에 건네는 짧은 안부를 상대방이 얼마나 크게 반가워하는지 늘 과소평가합니다. 특히 연락 공백이 길수록 뜻밖의 짧은 안부가 주는 기쁨은 더 큽니다.",
    "enS": "\"Hey [Name]! I just saw [tiny reminder] and immediately thought of you—no rush to reply at all, just hoping life is treating you gently lately!\"",
    "koS": "\"[이름]아! 오늘 우연히 [소소한 계기] 보다가 문득 네 생각나서 톡 남겨. 바쁘면 답장 천천히 해도 괜찮아, 요즘 별일 없이 잘 지내지?\"",
    "enL": [
      "Drop the heavy apology (\"so sorry I’m a terrible friend\")—start directly with warmth and the memory.",
      "Add \"no pressure to reply right away\" so it feels like a gift rather than a chore.",
      "Hit send within 60 seconds before perfectionism edits it into silence."
    ],
    "koL": [
      "\"연락 못 해서 진짜 미안해, 나쁜 친구지\" 같은 무거운 사과 대신 따뜻한 안부로 바로 시작하세요.",
      "\"답장 천천히 해도 돼\" 한 줄을 덧붙이면 숙제가 아닌 반가운 선물처럼 느껴집니다.",
      "완벽하게 고치려다 지우기 전에 60초 안에 가볍게 전송 버튼을 눌러 보세요."
    ]
  },
  "mid": {
    "enT": "Warm Intention Ready — Keep the First Step Tiny & Playful",
    "koT": "따뜻한 마음 준비됨 — 거창한 약속 대신 사진·메모 1장으로 문을 여세요",
    "enD": "You already value the friendship; lowering the bar from a huge catch-up call to a simple meme, photo, or 15-minute voice note makes reconnecting effortless.",
    "koD": "마음은 이미 따뜻합니다. 거창한 저녁 약속 대신 15분 통화나 짧은 사진 한 장으로 문턱을 낮추면 자연스럽게 이어집니다.",
    "enS": "\"Saw this and smiled thinking of our old laughs—would love a quick 15-min coffee or call sometime this month if you’re free!\"",
    "koS": "\"이거 보다가 예전에 같이 웃던 생각나서 보내! 이번 달 중 편할 때 잠깐 커피나 짧은 통화 한 번 하자.\"",
    "enL": [
      "Send a tiny spark (photo, article, or shared joke) that takes 10 seconds to enjoy.",
      "Propose an easy low-stakes option (15-min walk or quick coffee) if they reply warmly.",
      "Repeat once a month for 1 friend you miss—micro-touches keep friendships alive for decades."
    ],
    "koL": [
      "10초 만에 웃을 수 있는 사진·기사·추억 한 조각으로 가볍게 말을 건네 보세요.",
      "상대가 반갑게 답하면 15분 산책이나 가벼운 커피 같은 낮은 문턱의 만남을 제안하세요.",
      "한 달에 딱 1명씩 떠오르는 친구에게 짧은 안부를 보내는 습관이 평생 인연을 지킵니다."
    ]
  },
  "high": {
    "enT": "Generous Friendship Builder — Keep Spreading Warm Micro-Connections",
    "koT": "따뜻한 관계 리더 — 먼저 손 내미는 멋진 습관을 가지고 계십니다",
    "enD": "Being the friend who reaches out warmly without keeping score is a rare superpower in adulthood.",
    "koD": "계산하지 않고 먼저 따뜻한 안부를 건네는 능력은 어른의 삶에서 정말 귀한 힘입니다.",
    "enS": "\"Warm, unexpected check-ins are the quiet glue of lifelong friendship.\"",
    "koS": "\"예상치 못한 따뜻한 안부 한 통이 오래가는 우정을 지키는 가장 큰 힘이다.\"",
    "enL": [
      "Keep sending brief \"thought of you\" notes whenever a friend crosses your mind.",
      "Celebrate friendships that gracefully pick right back up after busy seasons.",
      "Enjoy the genuine warmth your outreach creates today."
    ],
    "koL": [
      "친구가 문득 떠오른 그 순간 미루지 말고 바로 짧은 안부를 전하세요.",
      "바쁜 시기를 지나도 언제든 편하게 이어지는 성숙한 우정을 즐기세요.",
      "오늘 건넨 따뜻한 안부가 만들어낼 미소를 기대해 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_friendship_repair_v1";
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
      window.gtag('event', "friendship_repair_complete", {
        tool_slug: "friendship-drift-repair-planner",
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
      var shareUrl = "https://dopabrain.com/portal/tools/friendship-drift-repair-planner.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "friendship-drift-repair-planner",
        filename: 'dopabrain-friendship-drift-repair-planner-card.png',
        badge: "ADULT FRIENDSHIPS • ZERO-AWKWARDNESS RECONNECT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#22c55e",
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
