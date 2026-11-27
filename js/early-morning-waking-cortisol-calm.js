/* 5 AM Early Waking & Morning Cortisol Anxiety Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "5 AM Early Waking & Morning Cortisol Anxiety Reset | DopaBrain",
    "metaDesc": "Waking up at 5 AM with a pounding chest and instant dread before your alarm even rings? Learn how the Cortisol Awakening Response works locally and calm your first 10 minutes.",
    "kicker": "MORNING CALM • 5 AM EARLY WAKING & CORTISOL SURGE RESET",
    "heroTitle": "5 AM Early Waking & Morning Cortisol Anxiety Reset",
    "heroLead": "Waking up at 5 AM with a pounding chest and instant dread before your alarm even rings? Learn how the Cortisol Awakening Response works locally and calm your first 10 minutes.",
    "chip1": "5 Morning Triggers",
    "chip2": "10-Min CAR Reset",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR EARLY-MORNING ANXIETY TRIGGERS (1 = CALM, 5 = RACING)",
    "step1Title": "What amplifies that sudden 5–6 AM chest dread?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One calm physical anchor I will do in the first 5 minutes after waking (100% local):",
    "ctaBtn": "Build My 10-Minute Morning Cortisol Reset",
    "resultBadge": "STEP 2 • YOUR CALM 10-MINUTE MORNING CORTISOL PROTOCOL",
    "noteTitle": "My First-5-Minute Physical Anchor",
    "meterLabel": "Morning Nervous-System Steadiness",
    "scriptTitle": "Morning Dread Biology Reframe",
    "stepsTitle": "3 Fast Ways to Ride Out the Morning Cortisol Wave",
    "stickyTitle": "Want to check if chronic stress is amplifying morning cortisol?",
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
    "title": "새벽 5시 조기 각성 & 기상 직후 코르티솔 불안 진정 리셋기 | DopaBrain",
    "metaDesc": "알람이 울리기도 전인 새벽 5시에 눈이 번쩍 뜨이고 이유 없이 가슴이 두근거리나요? 기상 코르티솔 반응(CAR)을 점검하고 첫 10분을 차분히 가라앉히는 프로토콜을 만드세요.",
    "kicker": "아침 평온 · 새벽 5시 조기 각성 & 기상 코르티솔 불안 진정기",
    "heroTitle": "새벽 5시 조기 각성 & 기상 직후 코르티솔 불안 진정 리셋기",
    "heroLead": "알람이 울리기도 전인 새벽 5시에 눈이 번쩍 뜨이고 이유 없이 가슴이 두근거리나요? 기상 코르티솔 반응(CAR)을 점검하고 첫 10분을 차분히 가라앉히는 프로토콜을 만드세요.",
    "chip1": "5가지 조기 각성 요인",
    "chip2": "10분 코르티솔 리셋",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 새벽·기상 직후 두근거림 유발 요인 점검 (1 = 편안, 5 = 심함)",
    "step1Title": "새벽 5~6시 눈 뜨자마자 불안을 키우는 패턴은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 눈 뜨고 첫 5분 안에 폰 대신 할 신체 안정 행동 1가지 (100% 로컬):",
    "ctaBtn": "내 10분 아침 코르티솔 진정 플랜 보기",
    "resultBadge": "2단계 • 기상 직후 10분 코르티솔 안정 프로토콜",
    "noteTitle": "기상 첫 5분 신체 안정 앵커",
    "meterLabel": "아침 자율신경 안정도",
    "scriptTitle": "아침 두근거림을 생리 현상으로 해석하는 한 줄",
    "stepsTitle": "아침 코르티솔 파도를 10분 만에 가라앉히는 3단계",
    "stickyTitle": "누적 스트레스가 아침 코르티솔을 끌어올리고 있는지 2분 점검해 볼까요?",
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
    "title": "凌晨5点早醒与晨间皮质醇焦虑重置器 | DopaBrain",
    "heroTitle": "凌晨5点早醒与晨间皮质醇焦虑重置器",
    "heroLead": "理解晨间皮质醇唤醒反应，用起床前10分钟锚点平复莫名心慌。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "早朝5時覚醒・朝のコルチゾール不安リセット | DopaBrain",
    "heroTitle": "早朝5時覚醒・朝のコルチゾール不安リセット",
    "heroLead": "目覚め直後の動悸や焦りをCAR（起床時コルチゾール反応）対策と最初の10分で鎮めます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reset de Despertar Temprano 5 AM y Cortisol Matutino | DopaBrain",
    "heroTitle": "Reset de Despertar Temprano 5 AM y Cortisol Matutino",
    "heroLead": "Calma la angustia al despertar entendiendo el pico matutino de cortisol en 10 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Acordar às 5h e Cortisol Matinal | DopaBrain",
    "heroTitle": "Reset de Acordar às 5h e Cortisol Matinal",
    "heroLead": "Acalme o aperto no peito ao acordar com protocolo de 10 minutos para o pico de cortisol.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "5-Uhr-Früherwachen & Morgen-Cortisol-Reset | DopaBrain",
    "heroTitle": "5-Uhr-Früherwachen & Morgen-Cortisol-Reset",
    "heroLead": "Beruhige morgendliches Herzklopfen mit biologischem Reframe und 10-Min-Startanker.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Réveil Précoce 5h & Pic de Cortisol Matinal | DopaBrain",
    "heroTitle": "Reset Réveil Précoce 5h & Pic de Cortisol Matinal",
    "heroLead": "Apaisez l’angoisse du réveil grâce au recadrage du pic de cortisol et aux 10 premières minutes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс раннего пробуждения в 5 утра и утреннего кортизола | DopaBrain",
    "heroTitle": "Сброс раннего пробуждения в 5 утра и утреннего кортизола",
    "heroLead": "Успокойте утреннюю тревогу с помощью понимания пика кортизола и первых 10 минут дня.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सुबह 5 बजे जल्दी जागना और मॉर्निंग कॉर्टिसोल रीसेट | DopaBrain",
    "heroTitle": "सुबह 5 बजे जल्दी जागना और मॉर्निंग कॉर्टिसोल रीसेट",
    "heroLead": "जागते ही होने वाली बेचैनी को पहले 10 मिनट के शांत रूटीन से संतुलित करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Bangun Pagi 5 AM & Lonjakan Kortisol | DopaBrain",
    "heroTitle": "Reset Bangun Pagi 5 AM & Lonjakan Kortisol",
    "heroLead": "Redakan cemas mendadak saat bangun dengan pahami respons kortisol dan jangkar 10 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sabah 5 Erken Uyanma ve Kortizol Sakinleştirici | DopaBrain",
    "heroTitle": "Sabah 5 Erken Uyanma ve Kortizol Sakinleştirici",
    "heroLead": "Uyanır uyanmaz gelen çarpıntıyı kortizol yanıtı ve ilk 10 dakika planıyla yatıştırın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "bed_doomscroll",
    "en": "Phone in Bed at 5 AM — Grabbing news, work email, or clock math while still horizontal",
    "ko": "누워서 새벽 폰 확인 — 눈 뜨자마자 침대에서 뉴스·업무 메일·남은 시간을 봄"
  },
  {
    "id": "empty_stomach_coffee",
    "en": "Immediate Empty-Stomach Coffee — Stacking caffeine right on top of peak morning cortisol",
    "ko": "공복 즉시 카페인 — 코르티솔 정점 시간에 공복 커피를 바로 부어 심박을 높임"
  },
  {
    "id": "blood_sugar_alcohol",
    "en": "Evening Alcohol or Late Sugar — Triggering a 4–5 AM blood-sugar / rebound cortisol jolt",
    "ko": "저녁 음주·야식 반동 — 새벽 4~5시 혈당 변동·각성 반동을 유발함"
  },
  {
    "id": "horizontal_worry",
    "en": "Lying Still Rehearsing Problems — Staying pinned in bed while the mind invents disasters",
    "ko": "누운 채 걱정 리허설 — 이불 속에서 눈만 뜬 채 오늘 하루 걱정을 키움"
  },
  {
    "id": "dread_mislabel",
    "en": "Mislabeling Biology as Danger — Thinking \"my heart is pounding so something terrible must be wrong\"",
    "ko": "생리 현상 오해 — 자연스런 기상 코르티솔 상승을 \"큰일 났다\"는 위험 신호로 착각함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Morning Cortisol Surge — Label It \"Just Biology,\" Hydrate & Delay Coffee 60 Min",
    "koT": "강한 기상 코르티솔 반응 — \"그저 생리적 기상 호르몬\"이라 이름 붙이고 물·빛·60분 후 커피를 쓰세요",
    "enD": "Neuroendocrinology shows the Cortisol Awakening Response (CAR) naturally spikes cortisol 35–60% around dawn to wake your body. Under stress, that normal chemical surge feels like sudden panic unless you label it neutrally and discharge it with gentle movement and hydration.",
    "koD": "신경내분비학에 따르면 기상 코르티솔 반응(CAR)은 몸을 깨우기 위해 새벽에 코르티솔을 자연스레 35~60% 끌어올립니다. 스트레스가 높을 땐 이 정상 호르몬 파동이 이유 없는 불안처럼 느껴지므로, 생리 현상으로 명명하고 수분·가벼운 움직임으로 흘려보내야 합니다.",
    "enS": "\"This chest flutter is just my natural morning cortisol wave waking me up—not an emergency. It peaks and settles within 20 minutes.\"",
    "koS": "\"이 가슴 두근거림은 비상사태가 아니라 몸을 깨우는 자연스런 기상 코르티솔 파동일 뿐이다. 20분 안에 저절로 가라앉는다.\"",
    "enL": [
      "If wide awake within 45 min of your alarm, get up gently instead of lying horizontal rehearsing worries.",
      "Drink a full glass of water, splash cool water on your face, and open curtains before touching phone news/email.",
      "Eat a small protein bite and wait 45–60 minutes before coffee so caffeine doesn’t double-spike cortisol."
    ],
    "koL": [
      "알람 45분 전 이미 완전히 깼다면 누워서 걱정하지 말고 가볍게 일어나 창문을 여세요.",
      "뉴스·메일을 보기 전에 물 한 컵을 마시고 찬물 세안으로 부교감 신경을 깨우세요.",
      "가벼운 단백질 아침을 먹은 뒤 기상 45~60분 후에 커피를 마셔 이중 각성을 막으세요."
    ]
  },
  "mid": {
    "enT": "Moderate Morning Edge — Swap Bedside Scrolling for Water & 3-Min Light",
    "koT": "중간 아침 긴장 — 침대 위 폰 확인만 물 한 컵 + 3분 햇빛으로 바꿔도 확 달라집니다",
    "enD": "Delaying work notifications by just 20 minutes keeps morning cortisol steady instead of anxious.",
    "koD": "기상 후 20분만 업무 알림을 미뤄도 아침의 뾰족한 긴장이 부드러운 에너지로 바뀝니다.",
    "enS": "\"Water, daylight, slow exhale—messages can wait 20 minutes.\"",
    "koS": "\"물 한 잔, 아침 빛, 느린 날숨 — 메시지는 20분 뒤에 봐도 충분하다.\"",
    "enL": [
      "Charge your phone away from the pillow.",
      "Do 60 seconds of shoulder rolls or gentle stretching.",
      "Note whether evening alcohol triggers earlier 5 AM wakes."
    ],
    "koL": [
      "폰 충전기를 머리맡 밖으로 옮겨 두세요.",
      "기상 직후 60초 어깨 돌리기와 가벼운 스트레칭을 해 보세요.",
      "저녁 음주·야식과 새벽 5시 각성의 상관관계를 3일만 관찰해 보세요."
    ]
  },
  "high": {
    "enT": "Steady Morning Launch — Calm Cortisol Curve & Clear Start",
    "koT": "차분한 아침 기동 — 건강한 기상 코르티솔 곡선을 유지 중입니다",
    "enD": "Your morning cues work harmoniously with your circadian biology.",
    "koD": "생체 시계와 조화롭게 맞는 평온한 아침 루틴을 잘 지키고 있습니다.",
    "enS": "\"A calm first 10 minutes sets the tone for the whole day.\"",
    "koS": "\"하루의 첫 10분의 평온이 오늘 전체의 리듬을 결정한다.\"",
    "enL": [
      "Keep enjoying natural morning light and hydration.",
      "Protect screen-free first 15 minutes.",
      "Keep consistent wake anchors across the week."
    ],
    "koL": [
      "아침 자연광과 수분 섭취 습관을 계속 유지하세요.",
      "기상 후 첫 15분 무화면 원칙을 지켜 주세요.",
      "주중·주말 비슷한 기상 앵커를 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_early_morning_cortisol_v1";
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
      window.gtag('event', "early_morning_cortisol_complete", {
        tool_slug: "early-morning-waking-cortisol-calm",
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
      var shareUrl = "https://dopabrain.com/portal/tools/early-morning-waking-cortisol-calm.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "early-morning-waking-cortisol-calm",
        filename: 'dopabrain-early-morning-waking-cortisol-calm-card.png',
        badge: "MORNING CALM • 5 AM EARLY WAKING & CORTISOL SURGE RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
        accent2: "#14b8a6"
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
