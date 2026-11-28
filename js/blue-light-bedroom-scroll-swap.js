/* Bedside Phone Charging & 15-Min Analog Wind-Down Swap
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Bedside Phone Charging & 15-Min Analog Wind-Down Swap | DopaBrain",
    "metaDesc": "Promising \"just 5 minutes of Reels\" in bed and blinking at 1:20 AM? Audit 5 bedside-scroll triggers locally and design a painless 15-minute analog replacement (audio, dim book, hallway charger).",
    "kicker": "SLEEP HYGIENE • BEDSIDE PHONE CHARGING & 15-MIN ANALOG SWAP",
    "heroTitle": "Bedside Phone Charging & 15-Min Analog Wind-Down Swap",
    "heroLead": "Promising \"just 5 minutes of Reels\" in bed and blinking at 1:20 AM? Audit 5 bedside-scroll triggers locally and design a painless 15-minute analog replacement (audio, dim book, hallway charger).",
    "chip1": "5 Bedside Traps",
    "chip2": "15-Min Analog Swap",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR BEDSIDE SCREEN TRAPS (1 = PHONE-FREE, 5 = LATE-NIGHT SCROLL)",
    "step1Title": "What keeps pulling your phone onto the pillow every night?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My 15-minute cozy analog swap tonight + exact spot where my phone will charge (100% local):",
    "ctaBtn": "Build My Phone-Free Bedtime Swap",
    "resultBadge": "STEP 2 • YOUR ZERO-WILLPOWER BEDSIDE SWAP PROTOCOL",
    "noteTitle": "My Tonight Analog Swap",
    "meterLabel": "Bedside Calm Score",
    "scriptTitle": "10 PM \"Dock & Swap\" Cue (Never Leave a Boring Void)",
    "stepsTitle": "3 Friction Fixes That Beat Midnight Scrolling Without Willpower",
    "stickyTitle": "Start a 30-min rain or brown-noise sleep timer, then dock your phone across the room.",
    "stickySub": "Open Free White Noise & Rain Player",
    "stickyBtn": "Play Bedtime Sound →",
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
    "title": "침대 위 스마트폰 끊기 & 15분 아날로그 수면 교체 플래너 | DopaBrain",
    "metaDesc": "침대에서 \"딱 5분만 쇼츠 보고 자야지\" 했다가 새벽 1시 20분이 되시나요? 5가지 침대 스마트폰 함정을 점검하고 의지력 없이 성공하는 충전 위치 변경 + 15분 아날로그 교체를 설계하세요.",
    "kicker": "수면 위생 · 침대 밖 충전 & 잠들기 15분 전 아날로그 교체 플래너",
    "heroTitle": "침대 위 스마트폰 끊기 & 15분 아날로그 수면 교체 플래너",
    "heroLead": "침대에서 \"딱 5분만 쇼츠 보고 자야지\" 했다가 새벽 1시 20분이 되시나요? 5가지 침대 스마트폰 함정을 점검하고 의지력 없이 성공하는 충전 위치 변경 + 15분 아날로그 교체를 설계하세요.",
    "chip1": "5가지 침대 폰 함정",
    "chip2": "15분 아날로그 교체",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 침대 위 스마트폰 습관 점검 (1 = 폰 프리, 5 = 새벽 스크롤)",
    "step1Title": "매일 밤 침대 위로 휴대폰을 다시 집어 들게 만드는 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 밤 폰 대신 즐길 15분 아날로그 루틴 + 휴대폰 충전 위치 (100% 로컬):",
    "ctaBtn": "내 침대 폰 프리 & 15분 교체 플랜 보기",
    "resultBadge": "2단계 • 의지력 없이 성공하는 침대 스마트폰 교체 프로토콜",
    "noteTitle": "오늘 밤 나의 15분 아날로그 교체",
    "meterLabel": "침실 수면 환경 지수",
    "scriptTitle": "지루함 없이 자연스럽게 폰을 내려놓는 밤 10시 전환 1줄",
    "stepsTitle": "의지력 싸움 없이 새벽 스크롤을 멈추는 3가지 환경 설계",
    "stickyTitle": "빗소리·브라운 노이즈를 켠 뒤 휴대폰을 침대 밖 충전기에 꽂고 편안히 누워 보세요.",
    "stickySub": "무료 백색소음·빗소리 플레이어 열기",
    "stickyBtn": "수면 사운드 켜기 →",
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
    "title": "床头手机断联与睡前15分钟模拟替代计划 | DopaBrain",
    "heroTitle": "床头手机断联与睡前15分钟模拟替代计划",
    "heroLead": "把充电器移出触手范围，用15分钟纸质书或雨声音频告别熬夜刷屏。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "寝室スマホ断ち＆就寝15分アナログ置換プランナー | DopaBrain",
    "heroTitle": "寝室スマホ断ち＆就寝15分アナログ置換プランナー",
    "heroLead": "枕元充電をやめてベッド外充電＋15分の読書・雨音へ無理なく切り替えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Carga Fuera de la Cama y Cambio Analógico 15 Min | DopaBrain",
    "heroTitle": "Plan de Carga Fuera de la Cama y Cambio Analógico 15 Min",
    "heroLead": "Deja el scroll nocturno sin fuerza de voluntad cargando el móvil lejos y leyendo 15 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Celular Longe da Cama & Troca Analógica 15 Min | DopaBrain",
    "heroTitle": "Plano de Celular Longe da Cama & Troca Analógica 15 Min",
    "heroLead": "Pare de rolar o feed de madrugada carregando o celular distante com ritual analógico.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Handy-freie Bettzeit & 15-Min-Analog-Tausch-Planer | DopaBrain",
    "heroTitle": "Handy-freie Bettzeit & 15-Min-Analog-Tausch-Planer",
    "heroLead": "Beende nächtliches Scrollen mühelos mit Ladegerät außer Reichweite und 15-Min-Ritual.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Téléphone Hors du Lit & Rituel Analogique 15 Min | DopaBrain",
    "heroTitle": "Plan Téléphone Hors du Lit & Rituel Analogique 15 Min",
    "heroLead": "Stoppez le scroll nocturne en chargeant à distance avec 15 min de lecture ou pluie douce.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План зарядки телефона вне кровати и 15-мин аналоговой замены | DopaBrain",
    "heroTitle": "План зарядки телефона вне кровати и 15-мин аналоговой замены",
    "heroLead": "Уберите ночной скроллинг без силы воли: зарядка в другом углу и 15 минут чтения или аудио.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "बेडसाइड फ़ोन चार्जिंग और 15-मिनट एनालॉग स्वैप प्लान | DopaBrain",
    "heroTitle": "बेडसाइड फ़ोन चार्जिंग और 15-मिनट एनालॉग स्वैप प्लान",
    "heroLead": "फ़ोन दूर चार्ज कर और 15-मिनट किताब/ऑडियो स्वैप से रात की स्क्रॉलिंग छोड़ें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Rencana Cas HP Luar Kasur & Tukar Analog 15 Menit | DopaBrain",
    "heroTitle": "Rencana Cas HP Luar Kasur & Tukar Analog 15 Menit",
    "heroLead": "Hentikan scroll tengah malam tanpa paksaan dengan cas di seberang kamar dan ritual 15 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yatak Dışı Telefon Şarjı ve 15 Dk Analog Değişim Planı | DopaBrain",
    "heroTitle": "Yatak Dışı Telefon Şarjı ve 15 Dk Analog Değişim Planı",
    "heroLead": "Şarjı uzağa taşıyıp 15 dakikalık sakin analog rutinle gece kaydırmayı bırakın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "arm_reach_charger",
    "en": "Arm’s-Reach Charging Cable — Phone sitting 6 inches from your pillow begging for \"one quick check\"",
    "ko": "손 닿는 충전기 — 베개 바로 옆에 충전 케이블이 있어 무의식적으로 집어 듦"
  },
  {
    "id": "phone_as_alarm_excuse",
    "en": "\"It’s My Alarm\" Excuse — Keeping the phone in bed because you have no $10 standalone alarm clock",
    "ko": "알람 핑계 — 별도 탁상시계가 없어 알람 때문에 폰을 머리맡에 둘 수밖에 없음"
  },
  {
    "id": "no_cozy_replacement",
    "en": "Trying to Stare at the Ceiling — Dropping the phone with ZERO pleasant analog substitute ready",
    "ko": "대체 즐길거리 부재 — 폰을 내려놓아도 대신 즐길 책·오디오가 없어 심심해서 다시 켬"
  },
  {
    "id": "autoplay_short_video",
    "en": "Infinite Autoplay Feeds — Algorithmic short videos firing fresh dopamine right when melatonin should rise",
    "ko": "무한 자동재생 쇼츠 — 멜라토닌이 나올 시간에 강한 도파민 자극이 계속 쏟아짐"
  },
  {
    "id": "morning_bed_scroll",
    "en": "30-Min Morning Bed Scroll — Starting every day tangled in feeds before your feet hit the floor",
    "ko": "아침 이불 속 스크롤 — 눈 뜨자마자 30분간 침대에서 피드를 보며 하루를 지쳐서 시작함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Bedside Scroll Pull — Move the Charger 8 Feet Away & Pre-Place a Cozy 15-Min Swap",
    "koT": "침대 스크롤 강함 — 충전기를 침대 밖 2m 거리로 옮기고 베개 옆에 포근한 15분 대체 루틴을 미리 두세요",
    "enD": "Sleep neuroscience (Chang et al.) shows bright interactive screens before bed delay melatonin, shorten REM sleep, and impair next-morning alertness. Environment beats willpower: docking your phone across the room (or using a $10 alarm clock) + placing a cozy paperback or audio timer solves the loop effortlessly.",
    "koD": "하버드 수면 연구(Chang 등)에 따르면 취침 전 밝은 인터랙티브 화면은 멜라토닌 분비를 지연시키고 REM 수면과 다음 날 각성을 떨어뜨립니다. 의지력 대신 충전기를 침대에서 두 걸음 밖으로 옮기고 종이책·라디오·오디오북을 미리 두면 습관이 자연스럽게 바뀝니다.",
    "enS": "\"At 10:30 PM my phone goes to bed on the dresser—and I get 15 cozy minutes of dim-light paper reading or calm rain audio.\"",
    "koS": "\"밤 10시 반이면 휴대폰도 책상 위 충전기에서 재우고, 나는 은은한 조명 아래 15분 종이책이나 잔잔한 빗소리를 즐긴다.\"",
    "enL": [
      "Move your charging cable across the room (or outside the bedroom with a cheap standalone alarm clock) tonight—make scrolling require standing up.",
      "Pre-place ONE genuinely enjoyable analog swap on your nightstand (fiction paperback, e-ink reader on warm dim light, or sleep-timer audiobook/rain).",
      "Turn on automatic Grayscale + Downtime 45 minutes before bed so feeds look instantly dull."
    ],
    "koL": [
      "오늘 밤 충전 케이블을 침대에서 일어나야 닿는 책상·서랍장 위로 옮기세요(탁상 알람시계를 두면 완벽합니다).",
      "침대 옆엔 지루한 공백 대신 진짜 즐길 수 있는 1가지(가벼운 소설 종이책·따뜻한 조명의 이북리더·타이머 오디오)를 미리 놓아 두세요.",
      "취침 45분 전 자동 흑백(그레이스케일) 모드를 예약해 두면 피드 매력이 즉시 반감됩니다."
    ]
  },
  "mid": {
    "enT": "Almost Phone-Free — Add Automatic Grayscale & Keep Phone Face-Down Across Room",
    "koT": "거의 폰 프리 — 자동 흑백 모드와 충전 위치 1m 이동만 더해 주세요",
    "enD": "Adding tiny physical distance preserves 30+ extra minutes of deep sleep every night.",
    "koD": "단 1~2m의 물리적 거리만 두어도 매일 밤 30분 이상의 숙면을 되찾을 수 있습니다.",
    "enS": "\"Out of arm’s reach, out of midnight autopilot.\"",
    "koS": "\"손 닿지 않는 곳에 두면 새벽 자동 스크롤은 저절로 멈춘다.\"",
    "enL": [
      "Switch on Bedtime Grayscale at 10 PM.",
      "Queue a calm podcast or rain sound BEFORE getting under the covers.",
      "Enjoy waking up without instant morning feed noise."
    ],
    "koL": [
      "밤 10시 자동 흑백 모드를 켜 두세요.",
      "이불에 들어가기 전에 편안한 오디오나 빗소리를 미리 재생해 두세요.",
      "아침에 눈 뜨자마자 피드 대신 상쾌한 공기로 하루를 열어 보세요."
    ]
  },
  "high": {
    "enT": "Sanctuary Bedroom — Restorative Screen-Free Wind-Down",
    "koT": "완벽한 수면 성소 — 화면 없는 포근한 취침 리듬입니다",
    "enD": "Your bedroom cues deep sleep immediately every night.",
    "koD": "침실이 온전한 휴식 공간으로 자리 잡아 매일 밤 깊게 잠들고 있습니다.",
    "enS": "\"My bed is reserved for sleep and genuine rest.\"",
    "koS": "\"내 침대는 오직 숙면과 온전한 휴식만을 위한 공간이다.\"",
    "enL": [
      "Keep your phone docked outside arm’s reach.",
      "Keep a favorite light book on your nightstand.",
      "Enjoy sharper, calmer mornings."
    ],
    "koL": [
      "침대 밖 충전 습관을 계속 지켜 나가세요.",
      "침대 옆 가벼운 독서 루틴을 이어 가세요.",
      "한결 맑고 차분한 아침 컨디션을 누리세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_bedside_swap_v1";
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
      window.gtag('event', "bedside_scroll_swap_complete", {
        tool_slug: "blue-light-bedroom-scroll-swap",
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
      var shareUrl = "https://dopabrain.com/portal/tools/blue-light-bedroom-scroll-swap.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "blue-light-bedroom-scroll-swap",
        filename: 'dopabrain-blue-light-bedroom-scroll-swap-card.png',
        badge: "SLEEP HYGIENE • BEDSIDE PHONE CHARGING & 15-MIN ANALOG SWAP",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
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
