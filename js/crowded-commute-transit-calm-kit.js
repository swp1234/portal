/* Crowded Subway, Bus & Commute Sensory Calm Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Crowded Subway, Bus & Commute Sensory Calm Kit | DopaBrain",
    "metaDesc": "Packed train cars, screeching brakes, and sudden stops making your pulse race before work even starts? Audit 5 transit stress triggers locally and build a 3-sense commuter shield.",
    "kicker": "SENSORY & TRANSIT CALM • CROWDED SUBWAY, BUS & COMMUTE RESET",
    "heroTitle": "Crowded Subway, Bus & Commute Sensory Calm Kit",
    "heroLead": "Packed train cars, screeching brakes, and sudden stops making your pulse race before work even starts? Audit 5 transit stress triggers locally and build a 3-sense commuter shield.",
    "chip1": "5 Transit Triggers",
    "chip2": "3-Sense Shield",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR TRANSIT STRESS SIGNALS (1 = CALM, 5 = OVERWHELMED)",
    "step1Title": "What spikes your nervous system most on crowded commutes?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My go-to calm audio/playlist + preferred train car/seat spot (100% local):",
    "ctaBtn": "Build My Commuter Sensory Calm Kit",
    "resultBadge": "STEP 2 • YOUR 3-SENSE COMMUTER GROUNDING PROTOCOL",
    "noteTitle": "My Go-To Commute Anchor",
    "meterLabel": "Transit Steadiness",
    "scriptTitle": "Mid-Stop Tunnel Delay Grounding Cue (Zero Spiral)",
    "stepsTitle": "3 Commuter Tricks That Cut Transit Stress Before 9 AM",
    "stickyTitle": "Mask screeching rails and crowd chatter with steady brown or rain audio.",
    "stickySub": "Open Free White Noise & Rain Player",
    "stickyBtn": "Play Masking Audio →",
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
    "title": "만원 지하철·버스 과자극 & 출퇴근 이동 불안 완화 키트 | DopaBrain",
    "metaDesc": "숨 막히는 만원 지하철과 소음, 갑작스러운 정차 때문에 출근 전부터 진이 빠지나요? 5가지 대중교통 과자극 요인을 점검하고 3감각 출퇴근 방패 루틴을 준비하세요.",
    "kicker": "대중교통 불안 케어 · 출퇴근 지옥철·만원버스 과자극 완화 키트",
    "heroTitle": "만원 지하철·버스 과자극 & 출퇴근 이동 불안 완화 키트",
    "heroLead": "숨 막히는 만원 지하철과 소음, 갑작스러운 정차 때문에 출근 전부터 진이 빠지나요? 5가지 대중교통 과자극 요인을 점검하고 3감각 출퇴근 방패 루틴을 준비하세요.",
    "chip1": "5가지 이동 자극",
    "chip2": "3감각 방패 루틴",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 대중교통 이동 중 불안·과자극 신호 점검 (1 = 편안, 5 = 압도됨)",
    "step1Title": "지하철·버스 이동 중 신경을 가장 예민하게 만드는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 출퇴근 시 마음을 가라앉혀 주는 나만의 사운드·추천 칸 위치 (100% 로컬):",
    "ctaBtn": "내 출퇴근 과자극 방패 키트 보기",
    "resultBadge": "2단계 • 만원 출퇴근을 차분히 넘기는 3감각 프로토콜",
    "noteTitle": "나만의 출퇴근 안심 세팅",
    "meterLabel": "이동 안정 지수",
    "scriptTitle": "터널 내 갑작스러운 정차 시 불안을 멈추는 1줄 앵커",
    "stepsTitle": "출근 전 에너지 소모를 절반으로 줄이는 3가지 이동 팁",
    "stickyTitle": "열차 소음과 인파 소리를 잔잔한 브라운 노이즈·빗소리로 부드럽게 차단해 보세요.",
    "stickySub": "무료 백색소음·빗소리 플레이어 열기",
    "stickyBtn": "차단 사운드 재생 →",
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
    "title": "拥挤地铁公交感官过载与通勤安抚工具包 | DopaBrain",
    "heroTitle": "拥挤地铁公交感官过载与通勤安抚工具包",
    "heroLead": "用首尾车厢策略、提前散热与三感官护盾化解早晚高峰通勤紧张感。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "満員電車・バス過刺激＆通勤リラックスキット | DopaBrain",
    "heroTitle": "満員電車・バス過刺激＆通勤リラックスキット",
    "heroLead": "ラッシュ時の息苦しさや途中停車不安を端車両・体温調整・3感覚シールドで和らげます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Calma Sensorial para Metro y Transporte Lleno | DopaBrain",
    "heroTitle": "Kit de Calma Sensorial para Metro y Transporte Lleno",
    "heroLead": "Reduce el estrés en hora punta con vagones extremos, aire fresco y escudo auditivo.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Calma Sensorial para Metrô e Ônibus Lotados | DopaBrain",
    "heroTitle": "Kit de Calma Sensorial para Metrô e Ônibus Lotados",
    "heroLead": "Alivie a sobrecarga no horário de pico com vagões das pontas, água fria e áudio calmo.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Volle U-Bahn-, Bus- & Pendler-Ruhe-Kit | DopaBrain",
    "heroTitle": "Volle U-Bahn-, Bus- & Pendler-Ruhe-Kit",
    "heroLead": "Senke Pendler-Stress mit Endwagen-Tipp, Abkühlung und ruhigem Audio-Schutzschild.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Calme Métro Bondé, Bus & Transports en Commun | DopaBrain",
    "heroTitle": "Kit Calme Métro Bondé, Bus & Transports en Commun",
    "heroLead": "Apaisez la surcharge aux heures de pointe avec voitures d’extrémité, air frais et audio doux.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор сенсорного спокойствия в переполненном метро и автобусе | DopaBrain",
    "heroTitle": "Набор сенсорного спокойствия в переполненном метро и автобусе",
    "heroLead": "Снизьте стресс часа пик с помощью крайних вагонов, охлаждения и звукового щита.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "भीड़-भाड़ मेट्रो, बस और कम्यूट सेंसरी शांत किट | DopaBrain",
    "heroTitle": "भीड़-भाड़ मेट्रो, बस और कम्यूट सेंसरी शांत किट",
    "heroLead": "एंड-कार चुनाव, ठंडे पानी और शांत ऑडियो शील्ड से यात्रा का तनाव कम करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Tenang Sensorik Kereta & Bus Komuter Padat | DopaBrain",
    "heroTitle": "Kit Tenang Sensorik Kereta & Bus Komuter Padat",
    "heroLead": "Kurangi sesak jam sibuk dengan gerbong ujung, air dingin, dan pelindung audio tenang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kalabalık Metro, Otobüs ve Ulaşım Sakinlik Kiti | DopaBrain",
    "heroTitle": "Kalabalık Metro, Otobüs ve Ulaşım Sakinlik Kiti",
    "heroLead": "Uç vagon seçimi, serinleme ve ses kalkanıyla yoğun saat ulaşım stresini azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "packed_shoulder_press",
    "en": "Zero Personal Space — Feeling boxed in shoulder-to-shoulder during rush hour",
    "ko": "개인 공간 상실 — 출근길 인파에 끼여 몸을 움직이기 어려울 때 답답함이 급상승함"
  },
  {
    "id": "unexpected_tunnel_stop",
    "en": "Sudden Between-Station Stops — Heart spiking whenever a train pauses inside a dark tunnel",
    "ko": "역 사이 갑작스러운 정차 — 터널 안에서 열차가 멈추면 심박이 급격히 빨라짐"
  },
  {
    "id": "harsh_noise_heat",
    "en": "Harsh Screech & Stuffy Heat — Loud rails, bright LEDs, and warm coat overheating triggering dizziness",
    "ko": "소음·후텁지근한 열기 — 철로 굉음과 두꺼운 외투 속 답답한 열기가 어지러움을 유발함"
  },
  {
    "id": "doomscrolling_motion",
    "en": "Standing Feed-Scrolling — Reading stressful news while swaying, doubling motion & cognitive nausea",
    "ko": "서서 스트레스 뉴스 스크롤 — 흔들리는 차 안에서 자극적인 뉴스를 보며 멀미·긴장을 키움"
  },
  {
    "id": "rushed_departure",
    "en": "Sprint-to-Platform Adrenaline — Running onto the train already breathless with high heart rate",
    "ko": "플랫폼 전력질주 — 지각할까 봐 뛰어 타느라 이미 심박이 130인 상태로 탑승함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Transit Overload — Unzip Coat Early, Pick End-Car Doorway & Pair Audio + Cool Water + 4-6 Exhales",
    "koT": "이동 과자극 높음 — 탑승 전 외투 지퍼 열기·끝칸 출입문 자리·차단 오디오+찬물+4-6 호흡을 세팅하세요",
    "enD": "Overheating + elevated sprint heart rate + harsh acoustic spikes mimic panic sensations inside crowded transit. Pre-cooling your neck/wrists, riding less-crowded end cars, and masking sound with steady audio lowers autonomic arousal fast.",
    "koD": "만원 전철 속 답답함은 열기(체온 상승)+급하게 뛰어 탄 심박+소음 자극이 겹쳐 공황처럼 느껴지는 경우가 많습니다. 탑승 전 외투를 살짝 열고 한산한 끝칸·차단 사운드·찬물 한 모금을 쓰면 자율신경이 빠르게 진정됩니다.",
    "enS": "\"Routine signal spacing pause—the train is ventilated, doors open at the next station in 2 minutes, and I am cooling my exhale (4 in / 6 out).\"",
    "koS": "\"앞 열차 간격 조절용 일상 정차일 뿐이다. 환기는 계속 되고 있고 2분 뒤 다음 역에서 문이 열린다. 지금 4초 들이쉬고 6초 천천히 내쉰다.\"",
    "enL": [
      "Board the first or last car (consistently 25–40% less crowded than transfer-stair middle cars) and stand with your back to a wall/divider.",
      "Unzip your coat BEFORE stepping onto the warm train and carry a small cool water bottle or mint for instant trigeminal cooling.",
      "Swap stressful news feeds for calming brown noise, rain, or a familiar comfort podcast/audiobook."
    ],
    "koL": [
      "환승 통로와 먼 맨 앞칸·맨 끝칸을 이용하면 혼잡도가 25~40% 낮아지고 벽 쪽에 안정감 있게 기댈 수 있습니다.",
      "따뜻한 열차에 타기 직전 외투 지퍼를 미리 열고, 시원한 물이나 민트 캔디로 체온·호흡을 즉각 식혀 주세요.",
      "흔들리는 차 안 뉴스 스크롤 대신 브라운 노이즈·빗소리나 편안한 오디오북으로 청각을 보호하세요."
    ]
  },
  "mid": {
    "enT": "Manageable Commute Friction — Leave 5 Min Earlier & Upgrade Acoustic Shield",
    "koT": "조절 가능한 이동 피로 — 5분 여유 출발과 이어폰 사운드 방패만 챙기세요",
    "enD": "Walking onto the platform calmly instead of sprinting cuts baseline commute heart rate dramatically.",
    "koD": "뛰어 타지 않고 5분 여유 있게 탑승하는 것만으로도 이동 중 긴장이 절반으로 줄어듭니다.",
    "enS": "\"Calm platform arrival, cool air, steady soundtrack.\"",
    "koS": "\"뛰지 않고 차분히 탑승해 나만의 사운드 방패 속으로 들어간다.\"",
    "enL": [
      "Aim for one train earlier to avoid sprint adrenaline.",
      "Keep eyes on a stable horizon point or closed gently.",
      "Use your commute as a protected music/podcast zone."
    ],
    "koL": [
      "한 대 일찍 타는 5분 여유로 전력질주 심박을 없애세요.",
      "멀미가 올라올 땐 화면을 끄고 먼 고정점을 보거나 눈을 감으세요.",
      "출퇴근 시간을 좋아하는 음악·오디오북 전용 존으로 바꿔 보세요."
    ]
  },
  "high": {
    "enT": "Smooth Commuter Flow — Protected Mental Buffer",
    "koT": "편안한 출퇴근 리듬 — 이동 시간을 나만의 완충 지대로 활용 중입니다",
    "enD": "You arrive at work and home with your nervous system intact.",
    "koD": "출퇴근 이동 중에도 신경계 에너지를 잘 보존하고 있습니다.",
    "enS": "\"Transit is my quiet bridge between worlds.\"",
    "koS": "\"이동 시간은 집과 일터를 부드럽게 이어 주는 나만의 고요한 다리다.\"",
    "enL": [
      "Keep using calm audio or reading.",
      "Enjoy a 2-minute stretch upon arriving.",
      "Share end-car tips with stressed colleagues."
    ],
    "koL": [
      "편안한 오디오·독서 루틴을 계속 유지하세요.",
      "도착 후 2분 가벼운 어깨 스트레칭으로 전환해 주세요.",
      "여유로운 출퇴근 팁을 주변에도 나눠 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_commute_calm_v1";
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
      window.gtag('event', "commute_transit_calm_complete", {
        tool_slug: "crowded-commute-transit-calm-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/crowded-commute-transit-calm-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "crowded-commute-transit-calm-kit",
        filename: 'dopabrain-crowded-commute-transit-calm-kit-card.png',
        badge: "SENSORY & TRANSIT CALM • CROWDED SUBWAY, BUS & COMMUTE RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ef4444",
        accent2: "#6366f1"
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
