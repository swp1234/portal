/* Awkward Small-Talk & Party Conversation Calm Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Awkward Small-Talk & Party Conversation Calm Kit | DopaBrain",
    "metaDesc": "Dreading holiday parties, work mixers, or elevator silences because your mind goes blank after \"So, what do you do?\" Prep 3 effortless curiosity openers and graceful exit lines locally.",
    "kicker": "SOCIAL EASE • SMALL-TALK & PARTY CONVERSATION CALM KIT",
    "heroTitle": "Awkward Small-Talk & Party Conversation Calm Kit",
    "heroLead": "Dreading holiday parties, work mixers, or elevator silences because your mind goes blank after \"So, what do you do?\" Prep 3 effortless curiosity openers and graceful exit lines locally.",
    "chip1": "5 Chat Traps",
    "chip2": "3 Warm Openers",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR SMALL-TALK FRICTION POINTS (1 = EASY, 5 = AWKWARD)",
    "step1Title": "What makes casual parties or mixers feel draining?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One fun recent thing (show, trip, hobby, food) I can share when asked \"What’s new?\" (100% local):",
    "ctaBtn": "Build My Pocket Small-Talk & Graceful Exit Kit",
    "resultBadge": "STEP 2 • YOUR ZERO-PRESSURE CONVERSATION POCKET CARD",
    "noteTitle": "My Ready \"What’s New?\" Story",
    "meterLabel": "Social Conversation Ease",
    "scriptTitle": "3 Effortless Openers + 1 Graceful Exit Line",
    "stepsTitle": "3 Listening Tricks That Make You Effortlessly Likable",
    "stickyTitle": "Do crowded rooms drain your social battery faster than average?",
    "stickySub": "Take the free 2-Min HSP Sensitivity Test",
    "stickyBtn": "HSP Test →",
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
    "title": "모임·파티 어색한 스몰톡 탈출 & 자연스러운 대화 이어가기 키트 | DopaBrain",
    "metaDesc": "연말 모임이나 네트워킹 자리에서 \"무슨 일 하세요?\" 다음에 할 말이 끊겨 어색하신가요? 상대가 기분 좋게 말문을 여는 질문 3가지와 깔끔한 자리 이동 멘트를 미리 챙기세요.",
    "kicker": "대화 평온 · 모임·네트워킹 어색한 스몰톡 탈출 & 자연스러운 질문 키트",
    "heroTitle": "모임·파티 어색한 스몰톡 탈출 & 자연스러운 대화 이어가기 키트",
    "heroLead": "연말 모임이나 네트워킹 자리에서 \"무슨 일 하세요?\" 다음에 할 말이 끊겨 어색하신가요? 상대가 기분 좋게 말문을 여는 질문 3가지와 깔끔한 자리 이동 멘트를 미리 챙기세요.",
    "chip1": "5가지 대화 함정",
    "chip2": "3가지 호기심 질문",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 모임·스몰톡에서 가장 어색한 순간 점검 (1 = 편안, 5 = 어색함)",
    "step1Title": "가벼운 모임이나 네트워킹에서 대화가 가장 막히는 순간은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: \"요즘 어떻게 지내세요?\" 물을 때 꺼낼 가벼운 근황 1가지 (100% 로컬):",
    "ctaBtn": "내 주머니 속 스몰톡 질문 & 마무리 멘트 보기",
    "resultBadge": "2단계 • 부담 없는 모임 대화 & 자연스런 이동 카드",
    "noteTitle": "준비된 가벼운 근황 1줄",
    "meterLabel": "스몰톡 여유도",
    "scriptTitle": "바로 써먹는 질문 2개 + 자연스런 자리 이동 멘트",
    "stepsTitle": "말을 많이 안 해도 호감 가는 3가지 대화 습관",
    "stickyTitle": "시끌벅적한 모임이 남들보다 유독 에너지를 빨리 깎아먹는 HSP 기질인가요?",
    "stickySub": "무료 2분 HSP 민감성 테스트 바로가기",
    "stickyBtn": "HSP 테스트 →",
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
    "title": "聚会尴尬闲聊破冰与优雅退场话术包 | DopaBrain",
    "heroTitle": "聚会尴尬闲聊破冰与优雅退场话术包",
    "heroLead": "提前备好3个轻松好奇开场白、1句近况分享和礼貌告辞话术，轻松应对社交。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "パーティー・雑談の気まずさ解消＆会話キット | DopaBrain",
    "heroTitle": "パーティー・雑談の気まずさ解消＆会話キット",
    "heroLead": "仕事以外の自然な質問3選・近況1行・角を立てない離脱フレーズをローカル準備。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Calma para Charlas Incómodas y Fiestas | DopaBrain",
    "heroTitle": "Kit de Calma para Charlas Incómodas y Fiestas",
    "heroLead": "Lleva 3 preguntas naturales, una anécdota corta y una salida amable sin presión.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Calma para Conversas de Festa e Networking | DopaBrain",
    "heroTitle": "Kit de Calma para Conversas de Festa e Networking",
    "heroLead": "Prepare 3 perguntas leves, uma novidade rápida e uma despedida elegante sem travar.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Small-Talk- & Party-Gesprächs-Ruhe-Kit | DopaBrain",
    "heroTitle": "Small-Talk- & Party-Gesprächs-Ruhe-Kit",
    "heroLead": "Nimm 3 lockere Neugier-Fragen und eine charmante Verabschiedung lokal mit.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Calme Small-Talk & Conversations de Soirée | DopaBrain",
    "heroTitle": "Kit Calme Small-Talk & Conversations de Soirée",
    "heroLead": "Emportez 3 questions naturelles, une brève anecdote et une sortie élégante sans gêne.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор для лёгкого смол-тока на вечеринках и нетворкинге | DopaBrain",
    "heroTitle": "Набор для лёгкого смол-тока на вечеринках и нетворкинге",
    "heroLead": "3 живых вопроса, короткий ответ «что нового» и вежливый способ завершить беседу.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "असहज स्मॉल-टॉक और पार्टी बातचीत शांत किट | DopaBrain",
    "heroTitle": "असहज स्मॉल-टॉक और पार्टी बातचीत शांत किट",
    "heroLead": "3 सहज सवाल और विनम्र विदाई वाक्य पहले से तैयार रखें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Tenang Basa-Basi & Obrolan Pesta | DopaBrain",
    "heroTitle": "Kit Tenang Basa-Basi & Obrolan Pesta",
    "heroLead": "Siapkan 3 pembuka obrolan hangat dan kalimat pamit sopan tanpa canggung.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Garip Sohbetleri Aşma ve Parti İletişim Kiti | DopaBrain",
    "heroTitle": "Garip Sohbetleri Aşma ve Parti İletişim Kiti",
    "heroLead": "3 doğal merak sorusu, kısa gündem cevabı ve nazik ayrılma cümlesi hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "blank_after_hello",
    "en": "Mind Blank After \"Hello\" — Running out of topics after asking about work or weather",
    "ko": "인사 직후 정적 — 직업·날씨 물어본 뒤 다음 질문이 안 떠올라 당황함"
  },
  {
    "id": "impress_pressure",
    "en": "Pressure to Sound Interesting — Trying hard to perform instead of simply being curious",
    "ko": "재미있어야 한다는 압박 — 호기심으로 듣기보다 멋진 말을 해야 한다는 부담이 큼"
  },
  {
    "id": "stuck_in_loop",
    "en": "No Graceful Exit Line — Getting trapped in one chat for 40 minutes unsure how to step away",
    "ko": "마무리 멘트 부재 — 대화를 자연스럽게 끊고 이동할 타이밍을 못 잡음"
  },
  {
    "id": "whats_new_freeze",
    "en": "Freezing at \"What’s New?\" — Saying \"just busy\" because nothing comes to mind",
    "ko": "\"요즘 어때?\" 백지화 — 갑자기 물으면 \"그냥 바빠요\" 말고 할 말이 안 떠오름"
  },
  {
    "id": "post_party_replay",
    "en": "Post-Party Replay — Over-analyzing every sentence I said on the ride home",
    "ko": "귀가 후 이불킥 — 집에 오면서 내가 했던 말 한 마디 한 마디를 검열함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Small-Talk Tension — Be Interested (Not Interesting) & Carry 2 Openers + 1 Warm Exit",
    "koT": "스몰톡 긴장 높음 — \"재미있는 사람\" 대신 \"관심 갖는 사람\" 모드로 질문 2개+이동 멘트 1개만 챙기세요",
    "enD": "Conversation research (Huang et al., Harvard) proved people who ask warm follow-up questions are consistently rated far more likable than people who try to impress with clever stories.",
    "koD": "하버드 대화 연구(Huang 등)에 따르면 화려한 이야기를 늘어놓는 사람보다 상대의 말에 따뜻한 꼬리 질문을 던지는 사람이 압도적으로 높은 호감을 얻습니다.",
    "enS": "Openers: \"How do you know the host?\" / \"What’s been the highlight of your week so far?\" · Exit: \"It was so great meeting you—I’m going to grab a fresh drink and say hi to a few folks, enjoy the evening!\"",
    "koS": "질문: \"주최자분과는 어떻게 알게 되셨어요?\" / \"요즘 제일 빠져 있는 취미나 콘텐츠 있으세요?\" · 이동: \"이야기 정말 반가웠어요! 저는 음료 한 잔 더 챙기고 다른 분께도 인사드려 볼게요, 즐거운 시간 보내세요!\"",
    "enL": [
      "Ask one \"shared context\" opener (the food, music, venue, or how they know the host) + one follow-up (\"Oh nice, how did you get into that?\").",
      "Keep your 1-line \"What’s new?\" pocket story ready so you never freeze when asked.",
      "Set a calm 60–90 min party cap and use your warm exit line guilt-free whenever your battery dips."
    ],
    "koL": [
      "\"주최자와의 인연·음식·요즘 소소한 즐거움\" 질문 1개와 \"오, 어떻게 시작하게 되셨어요?\" 꼬리 질문 1개만 챙기세요.",
      "미리 적은 가벼운 근황 1줄을 주머니처럼 꺼내 쓰면 \"요즘 어때?\" 질문에 절대 막히지 않습니다.",
      "모임 체류 상한선(60~90분)을 미리 정하고 에너지가 떨어지면 따뜻한 이동 멘트로 가볍게 마무리하세요."
    ]
  },
  "mid": {
    "enT": "Mostly Comfortable — Add One Warm Follow-Up & A Clean Exit Line",
    "koT": "무난한 대화 감각 — 꼬리 질문 1개와 깔끔한 자리 이동 멘트만 더하면 완벽합니다",
    "enD": "You connect well once rolling; having a ready exit phrase removes 90% of mixer fatigue.",
    "koD": "말문이 트이면 대화를 잘 이어갑니다. 편하게 이동하는 마무리 한 줄만 익혀 두면 피로가 확 줄어듭니다.",
    "enS": "\"Warm curiosity opens chats; kind honesty closes them.\"",
    "koS": "\"따뜻한 호기심으로 열고, 다정한 인사로 가볍게 닫는다.\"",
    "enL": [
      "Look for fellow solo guests near the snack table—they are happiest to chat!",
      "Use people’s names once naturally while talking.",
      "Skip post-party self-critique on the ride home."
    ],
    "koL": [
      "음료·다과 테이블 근처에 혼자 서 있는 분께 먼저 가볍게 말을 걸어 보세요.",
      "대화 중 상대 이름을 자연스럽게 한 번 불러 주면 금세 친근해집니다.",
      "귀갓길에는 잘한 순간 1가지만 떠올리고 말실수 복기는 멈추세요."
    ]
  },
  "high": {
    "enT": "Natural Warm Connector — Easy, Curious & Grounded",
    "koT": "자연스러운 대화 메이커 — 편안하고 따뜻한 호기심으로 분위기를 이끕니다",
    "enD": "Your relaxed curiosity puts everyone around you at ease immediately.",
    "koD": "힘을 뺀 따뜻한 호기심 덕분에 주변 사람들이 금세 편안해집니다.",
    "enS": "\"Real connection starts with noticing and listening warmly.\"",
    "koS": "\"진짜 대화는 잘 말하기보다 따뜻하게 귀 기울이는 데서 시작된다.\"",
    "enL": [
      "Introduce two quiet guests to each other when you spot a shared interest.",
      "Protect recharge time after big social weeks.",
      "Enjoy genuine everyday curiosity."
    ],
    "koL": [
      "공통 관심사가 보이는 두 사람을 자연스럽게 이어 주어 보세요.",
      "모임이 많은 주간엔 혼자 충전하는 시간도 꼭 챙기세요.",
      "일상의 가벼운 호기심을 즐겁게 이어 가세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_small_talk_icebreaker_v1";
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
      window.gtag('event', "small_talk_icebreaker_complete", {
        tool_slug: "awkward-small-talk-icebreaker-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/awkward-small-talk-icebreaker-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "awkward-small-talk-icebreaker-kit",
        filename: 'dopabrain-awkward-small-talk-icebreaker-kit-card.png',
        badge: "SOCIAL EASE • SMALL-TALK & PARTY CONVERSATION CALM KIT",
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
