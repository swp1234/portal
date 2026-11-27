/* New City & Adult Friendship 30-Day Rhythm Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "New City & Adult Friendship 30-Day Rhythm Planner | DopaBrain",
    "metaDesc": "Realized making friends after school feels 10x harder without built-in classrooms? Use friendship-science \"repeated unplanned interaction\" (1 weekly third-place anchor + low-pressure invites) locally.",
    "kicker": "SOCIAL CONNECTION • MAKING FRIENDS IN A NEW CITY PLANNER",
    "heroTitle": "New City & Adult Friendship 30-Day Rhythm Planner",
    "heroLead": "Realized making friends after school feels 10x harder without built-in classrooms? Use friendship-science \"repeated unplanned interaction\" (1 weekly third-place anchor + low-pressure invites) locally.",
    "chip1": "5 Social Barriers",
    "chip2": "30-Day Third-Place",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR ADULT FRIENDSHIP BARRIERS (1 = EASY, 5 = STUCK)",
    "step1Title": "What makes building new adult friendships feel hardest right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One recurring weekly \"third place\" I will attend 4 times in a row (100% local):",
    "ctaBtn": "Build My 30-Day Adult Friendship Rhythm",
    "resultBadge": "STEP 2 • YOUR REPEATED-CONTACT 30-DAY CONNECTION PLAN",
    "noteTitle": "My 4-Week Recurring Third Place",
    "meterLabel": "Connection Momentum",
    "scriptTitle": "Zero-Awkwardness \"Level-Up\" Coffee Invite",
    "stepsTitle": "3 Research-Backed Rules of Adult Friendship (Jeffrey Hall)",
    "stickyTitle": "Curious how your attachment style shapes opening up to new people?",
    "stickySub": "Take the free Attachment Style Test",
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
    "title": "새로운 도시·성인 친구 만들기 30일 반복 접점 플래너 | DopaBrain",
    "metaDesc": "졸업·이직·이사 후 어른이 되어 새 친구 사귀기가 너무 막막한가요? 우정 심리학의 \"반복 접점(주 1회 제3의 공간)\"과 부담 없는 초대 멘트로 30일 연결 루틴을 설계하세요.",
    "kicker": "관계 연결 · 타지·이직 후 어른의 친구 만들기 30일 루틴 플래너",
    "heroTitle": "새로운 도시·성인 친구 만들기 30일 반복 접점 플래너",
    "heroLead": "졸업·이직·이사 후 어른이 되어 새 친구 사귀기가 너무 막막한가요? 우정 심리학의 \"반복 접점(주 1회 제3의 공간)\"과 부담 없는 초대 멘트로 30일 연결 루틴을 설계하세요.",
    "chip1": "5가지 연결 장벽",
    "chip2": "30일 제3의 공간",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 성인 인간관계·새 도시 정착 장벽 점검 (1 = 수월, 5 = 막막함)",
    "step1Title": "새로운 사람과 자연스럽게 친해지기 가장 어렵게 만드는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 앞으로 4주 연속 매주 같은 시간에 가 볼 \"제3의 공간\" 1곳 (100% 로컬):",
    "ctaBtn": "내 30일 성인 친구 만들기 루틴 보기",
    "resultBadge": "2단계 • 반복 접점 기반 30일 관계 형성 프로토콜",
    "noteTitle": "4주 연속 출석할 제3의 공간",
    "meterLabel": "관계 형성 모멘텀",
    "scriptTitle": "어색함 없이 다음 만남으로 이어주는 1줄 초대",
    "stepsTitle": "우정 심리학(Jeffrey Hall)이 밝힌 친밀감 3원칙",
    "stickyTitle": "새로운 사람에게 다가가는 내 애착 패턴을 2분 테스트로 알아볼까요?",
    "stickySub": "무료 2분 애착 유형 테스트 바로가기",
    "stickyBtn": "애착 유형 →",
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
    "title": "新城市成年人交友30天重复接触规划器 | DopaBrain",
    "heroTitle": "新城市成年人交友30天重复接触规划器",
    "heroLead": "利用每周固定“第三空间”与无压力20分钟咖啡邀请，自然建立成年友谊。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "新しい街・大人の友達づくり30日リズム計画 | DopaBrain",
    "heroTitle": "新しい街・大人の友達づくり30日リズム計画",
    "heroLead": "週1回のサードプレイス4回連続参加と気軽な20分コーヒー誘いで繋がりを育てます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de 30 Días para Hacer Amigos en Nueva Ciudad | DopaBrain",
    "heroTitle": "Planificador de 30 Días para Hacer Amigos en Nueva Ciudad",
    "heroLead": "Construye amistades adultas reales con un tercer lugar semanal e invitaciones ligeras.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de 30 Dias para Fazer Amigos em Nova Cidade | DopaBrain",
    "heroTitle": "Planejador de 30 Dias para Fazer Amigos em Nova Cidade",
    "heroLead": "Crie conexões reais na vida adulta com um grupo recorrente semanal e convites leves.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Neue Stadt & Erwachsenen-Freundschafts-Planer (30 Tage) | DopaBrain",
    "heroTitle": "Neue Stadt & Erwachsenen-Freundschafts-Planer (30 Tage)",
    "heroLead": "Finde echte Freunde mit wöchentlichem „Drittem Ort“ und entspannten Kaffee-Einladungen.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Amitiés Adultes & Nouvelle Ville (30 Jours) | DopaBrain",
    "heroTitle": "Planificateur Amitiés Adultes & Nouvelle Ville (30 Jours)",
    "heroLead": "Créez de vrais liens grâce à un tiers-lieu hebdomadaire et des invitations sans pression.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "30-дневный план поиска друзей в новом городе | DopaBrain",
    "heroTitle": "30-дневный план поиска друзей в новом городе",
    "heroLead": "Стройте взрослую дружбу через регулярное «третье место» и лёгкие приглашения на кофе.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "नए शहर में एडल्ट फ्रेंडशिप 30-दिवसीय प्लानर | DopaBrain",
    "heroTitle": "नए शहर में एडल्ट फ्रेंडशिप 30-दिवसीय प्लानर",
    "heroLead": "साप्ताहिक ग्रुप और सहज कॉफी निमंत्रण के साथ नए शहर में सच्ची दोस्ती बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Pertemanan Dewasa di Kota Baru (30 Hari) | DopaBrain",
    "heroTitle": "Perencana Pertemanan Dewasa di Kota Baru (30 Hari)",
    "heroLead": "Bangun pertemanan nyata lewat komunitas rutin mingguan dan ajakan kopi santai.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yeni Şehir ve Yetişkin Arkadaşlığı 30 Günlük Planı | DopaBrain",
    "heroTitle": "Yeni Şehir ve Yetişkin Arkadaşlığı 30 Günlük Planı",
    "heroLead": "Haftalık düzenli mekanlar ve baskısız kahve davetleriyle gerçek dostluklar kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "one_off_events",
    "en": "One-Off Mixers Only — Attending random single events where you never see the same faces twice",
    "ko": "일회성 모임만 참석 — 두 번 다시 못 볼 사람만 만나는 단발 모임에서 에너지만 소진함"
  },
  {
    "id": "waiting_to_be_invited",
    "en": "Waiting to Be Invited — Hoping others make the first move while feeling lonely at home",
    "ko": "초대 기다리기 — 먼저 말 걸기 민망해 상대가 다가오길 기다리다 집에서 외로워짐"
  },
  {
    "id": "liking_gap_fear",
    "en": "The \"Liking Gap\" — Assuming new people liked me way less than they actually did",
    "ko": "호감 격차 착각 — 상대가 나를 좋아한 것보다 훨씬 낮게 평가해 연락을 포기함"
  },
  {
    "id": "big_hangout_pressure",
    "en": "Heavy Invite Pressure — Thinking an invite must be an elaborate dinner instead of a 20-min coffee",
    "ko": "거창한 약속 부담 — 가벼운 커피 20분 대신 거창한 식사·주말 약속만 떠올림"
  },
  {
    "id": "quitting_week_2",
    "en": "Quitting After Visit 1 — Stopping a class or club before familiarity kicks in on Week 4",
    "ko": "1회차 포기 — 얼굴이 익기 시작하는 3~4주 차 전에 어색해서 그만둠"
  }
];
  var TIERS = {
  "low": {
    "enT": "New-City Isolation — Pick ONE Weekly Recurring Group & Commit to 4 Visits Before Judging",
    "koT": "초기 정착 고립감 — 매주 같은 사람이 오는 모임 1곳을 골라 \"4주 연속 출석\"만 약속하세요",
    "enD": "Friendship research (Jeffrey Hall; Boothby’s \"Liking Gap\") shows adult friendships require ~50 shared hours of casual proximity—and people consistently like you MORE after chatting than your anxious brain assumes.",
    "koD": "우정 심리학(Jeffrey Hall)과 호감 격차 연구에 따르면 성인 우정은 우연한 반복 접촉(약 50시간)에서 자라며, 대화 후 상대는 내가 생각하는 것보다 나를 훨씬 더 호의적으로 기억합니다.",
    "enS": "\"Hey [Name], loved chatting after class today—there’s a great coffee spot around the corner, want to grab a quick cup after next Tuesday’s session?\"",
    "koS": "\"오늘 모임에서 이야기 너무 반가웠어요! 다음 주 끝날 때 근처 카페에서 20분만 가볍게 커피 한 잔 하실래요?\"",
    "enL": [
      "Choose 1 recurring weekly group (running, climbing, book club, language exchange, volunteering) and show up 4 weeks straight—mere familiarity melts awkwardness.",
      "Keep first invites tiny and anchored to the existing event (\"coffee right after class\" beats \"free Saturday?\").",
      "Remember the Liking Gap: assume they enjoyed talking to you and send the warm follow-up text!"
    ],
    "koL": [
      "매주 같은 얼굴을 보는 정기 모임(러닝·독서·운동·언어교환·봉사) 1곳을 골라 딱 4주만 연속 출석하세요.",
      "첫 제안은 거창한 주말 약속 대신 모임 직후 \"근처에서 20분 커피\"처럼 가볍게 연결하세요.",
      "호감 격차를 기억하세요: 상대도 나를 반가워했을 가능성이 높으니 먼저 따뜻한 연락을 보내 보세요."
    ]
  },
  "mid": {
    "enT": "Building Familiarity — Turn One Regular Acquaintance Into a 20-Min Coffee Invite",
    "koT": "얼굴 익힘 단계 — 자주 보는 지인 1명에게 20분 커피 제안을 건네 볼 타이밍입니다",
    "enD": "You are showing up in good spaces; bridging one conversation outside the group unlocks real friendship.",
    "koD": "좋은 공간에 잘 출석하고 있습니다. 모임 밖 20분 커피 1번이 지인을 친구로 바꿔 줍니다.",
    "enS": "\"Familiarity opens the door; one tiny low-pressure invite walks through it.\"",
    "koS": "\"반복 출석이 문을 열고, 20분짜리 가벼운 초대 한 번이 친구로 이어진다.\"",
    "enL": [
      "Ask one curious follow-up question remembering something they mentioned last week.",
      "Host a casual 3-person coffee or walk.",
      "Keep nurturing 1–2 long-distance old friends alongside new locals."
    ],
    "koL": [
      "지난주 상대가 했던 이야기를 기억해 가벼운 안부 질문을 건네 보세요.",
      "2~3명이 가볍게 산책하거나 커피 마시는 소모임을 열어 보세요.",
      "새로운 지역 친구와 더불어 오래된 원거리 친구와도 가끔 통화를 이어 가세요."
    ]
  },
  "high": {
    "enT": "Thriving Social Roots — Consistent, Warm Community Rhythm",
    "koT": "따뜻한 관계 뿌리내림 — 건강한 지역 커뮤니티 리듬을 잘 가꾸고 있습니다",
    "enD": "You have built reliable third-place rhythms and genuine reciprocal warmth.",
    "koD": "꾸준한 반복 접점과 따뜻한 상호 교류로 든든한 관계망을 만들어 가고 있습니다.",
    "enS": "\"Community grows one small repeated hello at a time.\"",
    "koS": "\"공동체는 거창한 이벤트가 아니라 매주 반복되는 작은 인사에서 자란다.\"",
    "enL": [
      "Welcome newcomers in your recurring groups.",
      "Keep small low-pressure rituals on the calendar.",
      "Enjoy the genuine roots you’ve grown."
    ],
    "koL": [
      "모임에 새로 온 분에게 먼저 반갑게 인사를 건네 보세요.",
      "부담 없는 소소한 정기 만남을 캘린더에 유지하세요.",
      "스스로 키워낸 든든한 관계의 뿌리를 기쁘게 누리세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_adult_friendship_plan_v1";
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
      window.gtag('event', "adult_friendship_plan_complete", {
        tool_slug: "new-city-adult-friendship-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/new-city-adult-friendship-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "new-city-adult-friendship-plan",
        filename: 'dopabrain-new-city-adult-friendship-plan-card.png',
        badge: "SOCIAL CONNECTION • MAKING FRIENDS IN A NEW CITY PLANNER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
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
