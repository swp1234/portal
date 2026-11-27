/* Smartphone Scroll Friction & Grayscale Setup Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Smartphone Scroll Friction & Grayscale Setup Builder | DopaBrain",
    "metaDesc": "Willpower fails against billion-dollar feed algorithms, but adding 15 seconds of friction breaks autopilot pickups. Audit 5 automatic phone triggers locally and build a 3-layer friction setup.",
    "kicker": "HABIT DESIGN • SMARTPHONE SCROLL FRICTION BUILDER",
    "heroTitle": "Smartphone Scroll Friction & Grayscale Setup Builder",
    "heroLead": "Willpower fails against billion-dollar feed algorithms, but adding 15 seconds of friction breaks autopilot pickups. Audit 5 automatic phone triggers locally and build a 3-layer friction setup.",
    "chip1": "5 Autopilot Triggers",
    "chip2": "3-Layer Setup",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR AUTOPILOT PHONE PICKUPS (1 = RARE, 5 = AUTOMATIC)",
    "step1Title": "Where does your thumb open apps before your conscious mind notices?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The #1 time-sink app I will move off my home screen today (100% local):",
    "ctaBtn": "Build My 3-Layer Phone Friction Setup",
    "resultBadge": "STEP 2 • YOUR 3-LAYER PHONE FRICTION BLUEPRINT",
    "noteTitle": "Primary App to Add Friction To",
    "meterLabel": "Intentional Phone Control",
    "scriptTitle": "15-Second Speed-Bump Rule",
    "stepsTitle": "3 Friction Tweaks That Outperform Pure Willpower",
    "stickyTitle": "Check how constant screen switching impacts your daily stress",
    "stickySub": "Take the free 2-min Stress Check next",
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
    "title": "스마트폰 무의식 스크롤 차단·물리적 마찰 설계기 | DopaBrain",
    "metaDesc": "의지력만으로 알고리즘을 이기긴 어렵지만, 딱 15초의 불편한 마찰을 넣으면 무의식 터치가 멈춥니다. 5가지 자동 습관을 점검하고 3단계 스마트폰 마찰 세팅을 완성하세요.",
    "kicker": "습관 설계 · 스마트폰 무의식 스크롤 마찰 빌더",
    "heroTitle": "스마트폰 무의식 스크롤 차단·물리적 마찰 설계기",
    "heroLead": "의지력만으로 알고리즘을 이기긴 어렵지만, 딱 15초의 불편한 마찰을 넣으면 무의식 터치가 멈춥니다. 5가지 자동 습관을 점검하고 3단계 스마트폰 마찰 세팅을 완성하세요.",
    "chip1": "5가지 무의식 트리거",
    "chip2": "3단계 마찰 세팅",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 무의식 스마트폰 집어 들기 패턴 점검 (1 = 드묾, 5 = 자동 반사)",
    "step1Title": "의식하기도 전에 엄지손가락이 먼저 앱을 여는 순간은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 홈 화면에서 치울 1순위 시간 도둑 앱 이름 (100% 로컬):",
    "ctaBtn": "내 3단계 스마트폰 마찰 세팅 보기",
    "resultBadge": "2단계 • 3단계 스마트폰 스크롤 마찰 설계도",
    "noteTitle": "마찰을 걸 1순위 앱",
    "meterLabel": "스마트폰 주도권 지수",
    "scriptTitle": "15초 감속 룰",
    "stepsTitle": "의지력보다 강력한 3가지 환경 마찰 세팅",
    "stickyTitle": "잦은 스마트폰 확인이 일상 스트레스에 미치는 영향을 측정해 볼까요?",
    "stickySub": "무료 2분 스트레스 체크로 피로도 확인",
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
    "title": "手机无意识刷屏阻力构建器 | DopaBrain",
    "heroTitle": "手机无意识刷屏阻力构建器",
    "heroLead": "用灰度屏幕、关闭红点与物理距离3层摩擦打破自动刷屏。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "スマホ無意識スクロール防止・摩擦ビルダー | DopaBrain",
    "heroTitle": "スマホ無意識スクロール防止・摩擦ビルダー",
    "heroLead": "意志力に頼らず白黒表示・通知整理・物理配置で自動スクロールを断ちます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Constructor de Fricción contra el Scroll Infinito | DopaBrain",
    "heroTitle": "Constructor de Fricción contra el Scroll Infinito",
    "heroLead": "Rompe el hábito automático del móvil con escala de grises y frenos de 15 seg.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Construtor de Fricção contra Rolagem Infinita | DopaBrain",
    "heroTitle": "Construtor de Fricção contra Rolagem Infinita",
    "heroLead": "Quebre o piloto automático no celular com tela cinza e barreiras inteligentes.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Smartphone Scroll-Reibungs-Planer | DopaBrain",
    "heroTitle": "Smartphone Scroll-Reibungs-Planer",
    "heroLead": "Stoppe automatisches Scrollen durch Graustufen, Badge-Aus und Ladeplatz-Wechsel.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Constructeur de Friction Anti-Scroll Téléphone | DopaBrain",
    "heroTitle": "Constructeur de Friction Anti-Scroll Téléphone",
    "heroLead": "Brisez le réflexe écran grâce aux niveaux de gris et freins visuels simples.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Конструктор «трения» против скроллинга телефона | DopaBrain",
    "heroTitle": "Конструктор «трения» против скроллинга телефона",
    "heroLead": "Сломайте автопилот с помощью ч/б экрана, отключения бейджей и дистанции.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "स्मार्टफोन स्क्रॉल फ्रिक्शन बिल्डर | DopaBrain",
    "heroTitle": "स्मार्टफोन स्क्रॉल फ्रिक्शन बिल्डर",
    "heroLead": "ग्रेस्केल और 3-लेयर स्मार्ट बाधाओं से अनजाने फोन स्क्रॉलिंग को रोकें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pembuat Hambatan Scroll HP Otomatis | DopaBrain",
    "heroTitle": "Pembuat Hambatan Scroll HP Otomatis",
    "heroLead": "Hentikan kebiasaan buka HP refleks dengan layar abu-abu & 3 lapis friksi cerdas.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Telefon Otomatik Kaydırma Sürtünme Planlayıcı | DopaBrain",
    "heroTitle": "Telefon Otomatik Kaydırma Sürtünme Planlayıcı",
    "heroLead": "Gri tonlama ve akıllı engellerle refleks telefon kullanımını azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "muscle_memory_tap",
    "en": "Home-Screen Muscle Memory — Opening social apps purely from thumb position",
    "ko": "홈 화면 근육 기억 — 습관적으로 같은 자리 아이콘을 누름"
  },
  {
    "id": "badge_color_pull",
    "en": "Red Notification Badges — Bright red dots demanding instant clearance",
    "ko": "빨간 배지 유혹 — 숫자 배지를 보면 참지 못하고 바로 탭함"
  },
  {
    "id": "bedside_charger",
    "en": "Pillow-Side Charging — Phone plugged in within arm’s reach of bed",
    "ko": "머리맡 충전 — 침대에서 팔만 뻗으면 닿는 곳에 폰이 있음"
  },
  {
    "id": "desk_face_up",
    "en": "Face-Up Desk Distraction — Screen lighting up next to keyboard all day",
    "ko": "책상 위 화면 켜짐 — 업무 중 알림 불빛이 계속 시선을 뺏음"
  },
  {
    "id": "logged_in_feeds",
    "en": "One-Tap Logged-In Feeds — Zero password or browser friction before endless scroll",
    "ko": "원탭 자동 로그인 — 비밀번호나 검색 없이 0.5초 만에 피드 진입"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Autopilot Pull — Install All 3 Physical & UI Speed Bumps Today",
    "koT": "자동 반사 강함 — 오늘 바로 3단계 물리·화면 감속 장치를 설치하세요",
    "enD": "Habit science (Wood, 2019; Clear, 2018) proves adding even 10–20 seconds of friction collapses unconscious loops. Redesigning your phone interface works 24/7 without draining willpower.",
    "koD": "습관 심리학(Wood, 2019; Clear, 2018)에 따르면 10~20초의 작은 마찰만 추가해도 무의식 습관의 70% 이상이 깨집니다. 의지력을 쥐어짜는 대신 폰 구조 자체를 바꾸세요.",
    "enS": "\"Make intentional tools 1 tap away, and make infinite feeds 4 deliberate steps away.\"",
    "koS": "\"필요한 도구는 1탭 거리에, 무한 피드는 4단계 귀찮은 거리에 둔다.\"",
    "enL": [
      "Remove all infinite-scroll apps from your home screen (access only via search or mobile browser).",
      "Turn off every red badge icon and bind a 3-click Grayscale shortcut for evenings.",
      "Move your overnight phone charger across the room or into the hallway tonight."
    ],
    "koL": [
      "무한 스크롤 앱을 홈 화면에서 모두 빼고 검색이나 웹 브라우저로만 열게 하세요.",
      "모든 SNS 빨간 배지 알림을 끄고 저녁 시간 흑백(그레이스케일) 단축키를 설정하세요.",
      "오늘 밤부터 스마트폰 충전기를 침대 손이 닿지 않는 반대편 벽이나 거실로 옮기세요."
    ]
  },
  "mid": {
    "enT": "Moderate Habit Leak — Hide Badges & Move Charger Out of Arm’s Reach",
    "koT": "중간 습관 누수 — 배지 끄기와 침대 밖 충전 2가지만 바꿔도 확 줄어듭니다",
    "enD": "A couple of quick UI tweaks will eliminate most mindless pickups while keeping your phone convenient.",
    "koD": "간단한 화면 정리 2가지만 적용해도 불편함 없이 무의식 사용 시간이 크게 줄어듭니다.",
    "enS": "\"No red dots, no bedside scrolling.\"",
    "koS": "\"빨간 배지 제거, 침대 밖 충전.\"",
    "enL": [
      "Disable red notification badges on social and shopping apps.",
      "Keep your phone in a drawer or behind your monitor during focus blocks.",
      "Use Focus / Do Not Disturb schedules automatically after 10 PM."
    ],
    "koL": [
      "SNS·쇼핑 앱의 빨간 숫자 배지를 모두 꺼 두세요.",
      "집중 시간에는 폰을 서랍이나 모니터 뒤에 보이지 않게 두세요.",
      "밤 10시 이후 방해금지(집중 모드)를 자동 예약해 두세요."
    ]
  },
  "high": {
    "enT": "High Phone Intentionality — Keep Your Clean Setup",
    "koT": "높은 스마트폰 주도권 — 깔끔한 현재 환경을 그대로 유지하세요",
    "enD": "Your phone works for you rather than pulling your attention away. Audit new apps quarterly to keep clutter out.",
    "koD": "스마트폰을 도구로 아주 건강하게 쓰고 계십니다. 분기마다 새로 깐 앱 알림만 정리해 주세요.",
    "enS": "\"My phone is a quiet tool, not a slot machine.\"",
    "koS": "\"스마트폰은 슬롯머신이 아니라 내가 부리는 조용한 도구다.\"",
    "enL": [
      "Say \"Don’t Allow\" by default to new app notification prompts.",
      "Keep your home screen limited to genuine utilities.",
      "Enjoy the extra hours of calm real-world presence."
    ],
    "koL": [
      "새 앱 설치 시 알림 권한 요청은 기본 \"허용 안 함\"으로 유지하세요.",
      "홈 화면에는 꼭 쓰는 실용 도구만 깔끔하게 남겨 두세요.",
      "되찾은 오프라인 여유 시간을 충분히 누리세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_phone_friction_builder_v1";
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
      window.gtag('event', "phone_friction_builder_complete", {
        tool_slug: "phone-scroll-friction-builder",
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
      var shareUrl = "https://dopabrain.com/portal/tools/phone-scroll-friction-builder.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "phone-scroll-friction-builder",
        filename: 'dopabrain-phone-scroll-friction-builder-card.png',
        badge: "HABIT DESIGN • SMARTPHONE SCROLL FRICTION BUILDER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f97316",
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
