/* Overwhelming Group-Chat Noise & Polite Mute Boundary Plan
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Overwhelming Group-Chat Noise & Polite Mute Boundary Plan | DopaBrain",
    "metaDesc": "Waking up to 148 unread messages, heated side-arguments, or family/parent group-chat chaos? Audit 5 group-chat stress traps locally and set a calm mute + digest rhythm without burning bridges.",
    "kicker": "DIGITAL RELATIONSHIPS • OVERWHELMING GROUP-CHAT MUTE & BOUNDARY PLAN",
    "heroTitle": "Overwhelming Group-Chat Noise & Polite Mute Boundary Plan",
    "heroLead": "Waking up to 148 unread messages, heated side-arguments, or family/parent group-chat chaos? Audit 5 group-chat stress traps locally and set a calm mute + digest rhythm without burning bridges.",
    "chip1": "5 Group-Chat Drains",
    "chip2": "Mute & Digest Rhythm",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR GROUP-CHAT STRESS SIGNALS (1 = PEACEFUL, 5 = BUZZING)",
    "step1Title": "What makes active group chats drain your mental battery?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONE noisy group chat I will mute today and check only once daily (100% local):",
    "ctaBtn": "Build My Group-Chat Calm Boundary",
    "resultBadge": "STEP 2 • YOUR ZERO-DRAMA GROUP-CHAT PROTOCOL",
    "noteTitle": "My Muted Digest Chat",
    "meterLabel": "Messaging Peace",
    "scriptTitle": "Warm Exit or Low-Availability Line (Zero Drama)",
    "stepsTitle": "3 Digital Moves That Silence Group-Chat Chaos Politely",
    "stickyTitle": "Check how constant digital pings affect your baseline stress.",
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
    "title": "시끄러운 단톡방 피로 완화 & 죄책감 없는 무음·응답 경계 플래너 | DopaBrain",
    "metaDesc": "눈 뜨자마자 쌓인 단톡방 148개 메시지와 논쟁·눈치 보기 때문에 지치시나요? 5가지 단톡방 피로 패턴을 점검하고 관계를 해치지 않는 무음·요약 확인 규칙을 세팅하세요.",
    "kicker": "디지털 관계 · 시끄러운 단톡방 피로 완화 & 눈치 없는 무음·정리 가이드",
    "heroTitle": "시끄러운 단톡방 피로 완화 & 죄책감 없는 무음·응답 경계 플래너",
    "heroLead": "눈 뜨자마자 쌓인 단톡방 148개 메시지와 논쟁·눈치 보기 때문에 지치시나요? 5가지 단톡방 피로 패턴을 점검하고 관계를 해치지 않는 무음·요약 확인 규칙을 세팅하세요.",
    "chip1": "5가지 단톡 피로",
    "chip2": "무음·일괄 확인",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 단톡방 알림·감정 피로 신호 점검 (1 = 편안, 5 = 시달림)",
    "step1Title": "여러 명이 모인 단톡방에서 가장 크게 지치는 순간은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 바로 무음 처리하고 하루 1번만 확인할 단톡방 1곳 (100% 로컬):",
    "ctaBtn": "내 단톡방 평화 경계 플랜 보기",
    "resultBadge": "2단계 • 관계를 지키면서 알림 피로를 끄는 프로토콜",
    "noteTitle": "무음 + 1일 1회 확인 단톡방",
    "meterLabel": "메신저 평온 지수",
    "scriptTitle": "서운함 없이 응답 빈도를 낮추거나 조용히 나오는 1줄",
    "stepsTitle": "단톡방 소음을 정중하게 잠재우는 3가지 기술",
    "stickyTitle": "끊임없는 디지털 알림이 내 기본 스트레스에 미치는 영향을 확인해 보세요.",
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
    "title": "群聊轰炸疲惫缓解与礼貌静音边界计划 | DopaBrain",
    "heroTitle": "群聊轰炸疲惫缓解与礼貌静音边界计划",
    "heroLead": "用永久免打扰、只看最后5条法则与温和说明，摆脱上百条未读群消息压力。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "グループLINE・チャット疲れ緩和＆ミュート境界プラン | DopaBrain",
    "heroTitle": "グループLINE・チャット疲れ緩和＆ミュート境界プラン",
    "heroLead": "大量通知の疲労を常時ミュート・最後5行ルール・丁寧な一言で穏やかに整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Calma y Silencio para Grupos de Chat Abrumadores | DopaBrain",
    "heroTitle": "Plan de Calma y Silencio para Grupos de Chat Abrumadores",
    "heroLead": "Silencia grupos ruidosos sin culpa con la regla de los últimos 5 mensajes y aviso amable.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Calma e Silêncio para Grupos de Chat Barulhentos | DopaBrain",
    "heroTitle": "Plano de Calma e Silêncio para Grupos de Chat Barulhentos",
    "heroLead": "Silencie grupos lotados sem culpa usando a regra das últimas 5 mensagens e aviso gentil.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Gruppenchat-Lärm & Höflicher Stumm-Grenzen-Plan | DopaBrain",
    "heroTitle": "Gruppenchat-Lärm & Höflicher Stumm-Grenzen-Plan",
    "heroLead": "Beruhige 150-Nachrichten-Chats höflich mit Dauer-Stumm und der Letzte-5-Zeilen-Regel.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Calme & Mise en Sourdine des Groupes de Chat | DopaBrain",
    "heroTitle": "Plan Calme & Mise en Sourdine des Groupes de Chat",
    "heroLead": "Coupez le bruit des groupes surchargés avec sourdine permanente et règle des 5 derniers messages.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План спокойствия и беззвучного режима для шумных групповых чатов | DopaBrain",
    "heroTitle": "План спокойствия и беззвучного режима для шумных групповых чатов",
    "heroLead": "Отключите шум чатов вежливо с постоянным беззвучным режимом и правилом последних 5 строк.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "शोरगुल ग्रुप-चैट थकान और विनम्र म्यूट बाउंड्री प्लान | DopaBrain",
    "heroTitle": "शोरगुल ग्रुप-चैट थकान और विनम्र म्यूट बाउंड्री प्लान",
    "heroLead": "स्थायी म्यूट और आखिरी 5 संदेश नियम से ग्रुप चैट तनाव शांत करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Rencana Tenang & Batas Mute Grup Chat Ramai | DopaBrain",
    "heroTitle": "Rencana Tenang & Batas Mute Grup Chat Ramai",
    "heroLead": "Redam ratusan notifikasi grup dengan mute permanen, aturan 5 pesan terakhir, dan info sopan.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yoğun Grup Sohbeti Gürültüsü ve Sessize Alma Planı | DopaBrain",
    "heroTitle": "Yoğun Grup Sohbeti Gürültüsü ve Sessize Alma Planı",
    "heroLead": "Sürekli sessiz ve son 5 mesaj kuralıyla kalabalık sohbet yorgunluğunu nazikçe bitirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "rapid_ping_flood",
    "en": "40-Ping Rapid Floods — Phone buzzing nonstop during work or dinner over trivial banter",
    "ko": "연속 폭탄 알림 — 일하거나 식사하는 내내 잡담 알림이 40개씩 울림"
  },
  {
    "id": "political_drama_bait",
    "en": "Heated Debate Bait — Watching passive-aggressive arguments unfold and feeling pulled in",
    "ko": "논쟁·정치 떡밥 — 예민한 논쟁이 벌어질 때 마음이 불편해지고 휘말릴까 긴장됨"
  },
  {
    "id": "read_every_line_guilt",
    "en": "Scroll-Back Guilt — Feeling obligated to read all 180 missed messages word for word",
    "ko": "정독 강박 — 밀린 180개 대화를 처음부터 끝까지 다 읽어야 할 것 같은 의무감"
  },
  {
    "id": "emoji_validation_pressure",
    "en": "Instant-Reaction Pressure — Worrying people will be mad if you do not react to every photo",
    "ko": "즉각 호응 압박 — 올라오는 사진·공지마다 바로 이모티콘을 안 누르면 미안함"
  },
  {
    "id": "afraid_to_exit",
    "en": "Fear of Exiting Dormant/Toxic Chats — Staying trapped in an outdated group to avoid an exit notice",
    "ko": "나가기 눈치 — 끝난 모임이나 불편한 방인데 \"나갔습니다\" 문구가 뜰까 봐 못 나감"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Group-Chat Fatigue — Mute Forever, Archive Out of Sight & Use the \"Last 5 Messages\" Rule",
    "koT": "단톡 피로 높음 — 즉시 영구 무음·상단 고정 해제·\"최근 5줄만 훑기\" 규칙을 적용하세요",
    "enD": "Group chats are asynchronous broadcasts, not live emergencies. Permanently muting notifications, dropping the urge to read 150 back-messages, and replying selectively protects both your peace and genuine 1:1 friendships.",
    "koD": "단톡방은 실시간 비상 호출이 아니라 비동기 게시판입니다. 알림을 영구 무음으로 두고 밀린 150줄을 전부 읽지 않아도 실제 인간관계는 흔들리지 않습니다.",
    "enS": "\"Hey everyone, keeping my phone on quiet mode for work/focus lately so I’ll be way slower in group chats—always feel free to DM me directly if you need me!\"",
    "koS": "\"요즘 업무·집중 시간 확보하려고 단톡방 알림을 꺼 두어서 확인이 많이 늦을 수 있어요! 급하거나 중요한 용건은 편하게 개인 톡으로 주세요 :)\"",
    "enL": [
      "Mute noisy group chats permanently (not just 8 hours) and disable badge counts—check once daily at 7 PM if you want.",
      "Use the \"Last 5 Messages Rule\": skim only the bottom screen; if something truly involves you, someone will @mention or DM you.",
      "Decline heated group debates 100% of the time—silence is dignified and drains zero energy."
    ],
    "koL": [
      "시끄러운 단톡방은 8시간이 아니라 \"영구 무음\"으로 두고 원할 때 저녁 7시에 한 번만 열어 보세요.",
      "\"마지막 5줄 규칙\"을 쓰세요: 맨 아래 화면만 훑고 정말 내가 필요한 일은 멘션(@)이나 개인 톡이 오도록 맡기세요.",
      "단톡방 내 감정 논쟁에는 100% 침묵을 유지하세요—가장 품위 있고 에너지를 아끼는 선택입니다."
    ]
  },
  "mid": {
    "enT": "Moderate Noise — Mute High-Volume Rooms & Favor 1:1 Check-Ins",
    "koT": "중간 알림 소음 — 대화가 잦은 방만 무음 처리하고 1:1 소통 비중을 높이세요",
    "enD": "Muting broadcasts lets you enjoy friends when you actually have bandwidth.",
    "koD": "알림만 꺼 두어도 여유 있을 때 훨씬 반갑게 대화에 참여할 수 있습니다.",
    "enS": "\"Muted notifications, warm heart.\"",
    "koS": "\"알림은 무음으로, 마음은 여유롭게.\"",
    "enL": [
      "Mute chats with >15 daily messages.",
      "Use a single quick emoji react instead of forced long banter.",
      "Leave finished event groups quietly after 2 weeks."
    ],
    "koL": [
      "하루 15개 이상 울리는 방은 기본 무음으로 두세요.",
      "억지 긴 답장 대신 가벼운 공감 이모티콘 하나로 충분합니다.",
      "행사가 끝난 단톡방은 2주 뒤 자연스럽게 정리하세요."
    ]
  },
  "high": {
    "enT": "Calm Digital Boundaries — Clean & Intentional Messaging",
    "koT": "건강한 메신저 경계 — 단톡방에 휘둘리지 않는 쾌적한 소통입니다",
    "enD": "You connect on your terms without constant buzz fatigue.",
    "koD": "불필요한 알림 소음 없이 원하는 속도로 따뜻하게 소통하고 있습니다.",
    "enS": "\"My phone notifies me only for people and moments I choose.\"",
    "koS": "\"내 휴대폰은 내가 허락한 사람과 순간에만 울린다.\"",
    "enL": [
      "Keep group alerts selective.",
      "Nurture deeper 1:1 voice notes or coffees.",
      "Review muted/archived chats monthly."
    ],
    "koL": [
      "선별적 알림 설정을 계속 유지하세요.",
      "단톡방 대신 깊이 있는 1:1 대화를 더 챙겨 보세요.",
      "월 1회 불필요한 채팅방을 가볍게 정리하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_group_chat_v1";
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
      window.gtag('event', "group_chat_boundary_complete", {
        tool_slug: "group-chat-drama-mute-boundary",
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
      var shareUrl = "https://dopabrain.com/portal/tools/group-chat-drama-mute-boundary.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "group-chat-drama-mute-boundary",
        filename: 'dopabrain-group-chat-drama-mute-boundary-card.png',
        badge: "DIGITAL RELATIONSHIPS • OVERWHELMING GROUP-CHAT MUTE & BOUNDARY PLAN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
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
