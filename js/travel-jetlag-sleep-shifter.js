/* Jet Lag & Time-Zone Circadian Shift Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Jet Lag & Time-Zone Circadian Shift Planner | DopaBrain",
    "metaDesc": "Dreading 3 days of groggy afternoons and 4 AM hotel wakeups after an international flight? Audit 5 jet-lag multipliers locally and map your arrival-day light and meal cues.",
    "kicker": "TIME-ZONE TRAVEL • LIGHT & MELATONIN TIMING",
    "heroTitle": "Jet Lag & Time-Zone Circadian Shift Planner",
    "heroLead": "Dreading 3 days of groggy afternoons and 4 AM hotel wakeups after an international flight? Audit 5 jet-lag multipliers locally and map your arrival-day light and meal cues.",
    "chip1": "5 Jet-Lag Factors",
    "chip2": "Light-Cue Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR TRIP’S JET-LAG INTENSITY (1 = MILD, 5 = INTENSE)",
    "step1Title": "Which travel factors will challenge your body clock most?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Destination local breakfast & outdoor sunlight anchor time on Day 1 (100% local):",
    "ctaBtn": "Build My Jet-Lag Shift Plan",
    "resultBadge": "STEP 2 • YOUR TIME-ZONE CIRCADIAN RESET PROTOCOL",
    "noteTitle": "Day-1 Local Light & Meal Anchor",
    "meterLabel": "Circadian Adaptation Readiness",
    "scriptTitle": "Arrival-Day Energy Pacing Cue",
    "stepsTitle": "3 Proven Moves to Cut Jet Lag in Half",
    "stickyTitle": "Sleeping in an unfamiliar noisy hotel room tonight?",
    "stickySub": "Open the free White Noise Mixer for steady travel sleep",
    "stickyBtn": "Hotel Sleep →",
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
    "title": "시차 적응·해외 비행 빛 노출 & 수면 시프트 플래너 | DopaBrain",
    "metaDesc": "장거리 비행 후 사흘 내내 오후 졸음과 새벽 4시 기상에 시달리나요? 5가지 시차 악화 요인을 점검하고 도착 첫날의 빛·식사·수면 타이밍을 설계하세요.",
    "kicker": "해외여행 시차 적응 · 빛·수면 시프트 플래너",
    "heroTitle": "시차 적응·해외 비행 빛 노출 & 수면 시프트 플래너",
    "heroLead": "장거리 비행 후 사흘 내내 오후 졸음과 새벽 4시 기상에 시달리나요? 5가지 시차 악화 요인을 점검하고 도착 첫날의 빛·식사·수면 타이밍을 설계하세요.",
    "chip1": "5가지 시차 요인",
    "chip2": "도착일 빛 플랜",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 이번 여행의 시차 강도 점검 (1 = 가벼움, 5 = 매우 큼)",
    "step1Title": "이번 이동에서 생체시계를 가장 크게 흔들 요인은 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 도착 첫날 현지 아침 식사 및 야외 햇빛 산책 목표 시각 (100% 로컬):",
    "ctaBtn": "내 시차 적응 빛·수면 플랜 보기",
    "resultBadge": "2단계 • 현지 시차 빠른 적응 프로토콜",
    "noteTitle": "도착 1일 차 현지 햇빛·식사 앵커",
    "meterLabel": "시차 적응 준비도 지수",
    "scriptTitle": "도착 첫날 컨디션 조절 문장",
    "stepsTitle": "시차 적응 기간을 절반으로 줄이는 3단계",
    "stickyTitle": "낯선 호텔 객실 소음 때문에 잠들기 어려우신가요?",
    "stickySub": "무료 화이트노이즈 믹서로 낯선 공간에서도 편안한 숙면",
    "stickyBtn": "여행 숙면 →",
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
    "title": "倒时差与跨时区光照睡眠调整规划 | DopaBrain",
    "heroTitle": "倒时差与跨时区光照睡眠调整规划",
    "heroLead": "规划抵达首日光照、进餐与25分钟小睡上限，让跨时区倒时差快一倍。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "時差ボケ＆タイムゾーン睡眠シフト設計 | DopaBrain",
    "heroTitle": "時差ボケ＆タイムゾーン睡眠シフト設計",
    "heroLead": "到着初日の太陽光・食事・25分仮眠ルールで時差ボケを半減させます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de Jet Lag y Cambio Horario | DopaBrain",
    "heroTitle": "Planificador de Jet Lag y Cambio Horario",
    "heroLead": "Ajusta luz solar, comidas y límite de siesta el día 1 para reducir el jet lag.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Jet Lag e Fuso Horário | DopaBrain",
    "heroTitle": "Planejador de Jet Lag e Fuso Horário",
    "heroLead": "Alinhe luz natural, refeições e cochilos curtos para vencer o jet lag mais rápido.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Jetlag- & Zeitzonen-Schlafplaner | DopaBrain",
    "heroTitle": "Jetlag- & Zeitzonen-Schlafplaner",
    "heroLead": "Plane Tageslicht, Mahlzeiten und 25-Min-Powernap am Ankunftstag gegen Jetlag.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Décalage Horaire & Jet Lag | DopaBrain",
    "heroTitle": "Planificateur Décalage Horaire & Jet Lag",
    "heroLead": "Synchronisez lumière, repas et micro-sieste de 25 min dès le jour d’arrivée.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План адаптации к джетлагу и часовым поясам | DopaBrain",
    "heroTitle": "План адаптации к джетлагу и часовым поясам",
    "heroLead": "Настройте дневной свет, питание и лимит сна 25 минут для быстрого выхода из джетлага.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "जेट लैग व टाइम-ज़ोन स्लीप शिफ्टर | DopaBrain",
    "heroTitle": "जेट लैग व टाइम-ज़ोन स्लीप शिफ्टर",
    "heroLead": "यात्रा के पहले दिन धूप, भोजन और 25-मिनट नैप नियम से जेट लैग आधा करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Reset Jet Lag & Zona Waktu | DopaBrain",
    "heroTitle": "Perencana Reset Jet Lag & Zona Waktu",
    "heroLead": "Atur paparan sinar matahari, jam makan, dan batas tidur siang agar cepat pulih dari jet lag.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Jet Lag ve Saat Dilimi Uyku Planlayıcı | DopaBrain",
    "heroTitle": "Jet Lag ve Saat Dilimi Uyku Planlayıcı",
    "heroLead": "Varış günü gün ışığı, öğün ve 25 dk şekerleme kuralıyla jet lag’i yarıya indirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "eastward_jump",
    "en": "Eastward 5+ Hour Jump — Flying east forces an earlier bedtime (harder than flying west)",
    "ko": "동쪽 5시간+ 이동 — 취침을 앞당겨야 하는 동쪽 비행(서쪽보다 시차 적응이 어려움)"
  },
  {
    "id": "redeye_deficit",
    "en": "Red-Eye Sleep Deprivation — Arriving with <3 hours of upright cabin sleep",
    "ko": "야간 비행 수면 부족 — 기내에서 3시간 미만 자고 바로 현지 아침에 도착"
  },
  {
    "id": "in_flight_alcohol",
    "en": "Cabin Dehydration & Alcohol — Dry cabin air, alcohol, or mismatched in-flight caffeine",
    "ko": "기내 탈수·음주 — 건조한 기내 환경과 비행 중 음주·무계획 카페인 섭취"
  },
  {
    "id": "hotel_nap_trap",
    "en": "Long Afternoon Crash Nap — Collapsing for a 3-hour hotel nap at 4 PM local time",
    "ko": "오후 3시간 뻗기 — 도착 첫날 오후 4시에 3시간 자버려 현지 밤에 말똥말똥함"
  },
  {
    "id": "indoor_arrival",
    "en": "Zero Outdoor Daylight — Staying inside dim conference rooms or hotels on Day 1",
    "ko": "실내 체류 — 도착 첫날 햇빛을 못 보고 어두운 호텔·회의실에만 머무름"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Time-Zone Shift — Use Outdoor Daylight + Strict 25-Min Nap Cap",
    "koT": "큰 시차 이동 — 도착 첫날 야외 햇빛 노출과 낮잠 25분 상한을 꼭 지키세요",
    "enD": "Circadian clocks shift ~1 hour per day naturally, but strategic outdoor sunlight and local meal timing can double adaptation speed. Avoiding a 3-hour arrival-day crash nap is the #1 secret to sleeping through Night 1.",
    "koD": "생체시계는 원래 하루 1시간씩 느리게 이동하지만, 도착 첫날 야외 자연광과 현지 식사 시각을 맞추면 적응 속도가 2배 빨라집니다. 오후에 3시간 자버리지 않는 것이 첫날 밤 숙면의 핵심입니다.",
    "enS": "\"Today I live on local time immediately: bright outdoor sun in the morning, light movement, and no nap longer than 25 minutes.\"",
    "koS": "\"오늘부터 즉시 현지 시각으로 살 거야. 아침 야외 햇빛, 가벼운 산책, 낮잠은 최대 25분까지만.\"",
    "enL": [
      "Switch your watch/phone to destination time the moment you board the plane.",
      "Get 20–30 minutes of bright outdoor daylight on Day 1 (morning light after flying east; late-afternoon light after flying west).",
      "If exhausted on arrival, take ONE 20-to-25-minute power nap before 2 PM—never 2+ hours—and hold out until 9:30 PM local bedtime."
    ],
    "koL": [
      "비행기 탑승 직후 시계와 폰을 현지 시각으로 미리 바꾸고 기내 식사·휴식도 현지 기준으로 맞추세요.",
      "도착 1일 차에 20~30분 야외 자연광을 쬐세요(동쪽 이동은 오전 햇빛, 서쪽 이동은 늦은 오후 햇빛).",
      "도착 후 너무 졸려도 오후 2시 전 딱 20~25분만 짧게 자고 현지 밤 9시 30분까지 버티세요."
    ]
  },
  "mid": {
    "enT": "Moderate Shift — Align Local Meals & Hydrate Early",
    "koT": "중간 시차 이동 — 현지 식사 시각 정렬과 수분 보충만 챙겨도 가볍습니다",
    "enD": "Your trip crosses a manageable gap. Synchronizing breakfast/dinner to local time and stepping outside briefly resets peripheral body clocks within 48 hours.",
    "koD": "충분히 수월하게 넘길 수 있는 시차입니다. 현지 아침·저녁 식사 시각을 맞추고 짧게 야외를 걸으면 48시간 안에 컨디션이 돌아옵니다.",
    "enS": "\"Local sunlight and local meal times pull my body clock into sync smoothly.\"",
    "koS": "\"현지 햇빛과 현지 식사 시각이 내 생체시계를 부드럽게 맞춰 준다.\"",
    "enL": [
      "Drink steady water on the flight and skip in-flight alcohol.",
      "Eat breakfast at local morning time even if it is light (protein + fruit).",
      "Keep hotel blinds closed at night and open them wide immediately upon local wake-up."
    ],
    "koL": [
      "비행 중 충분한 물을 마시고 기내 음주는 피하세요.",
      "입맛이 없어도 현지 아침 시각에 가벼운 단백질·과일로 식사 신호를 주세요.",
      "밤에는 암막을 닫고 현지 기상 시각에 커튼을 활짝 열어 빛을 들이세요."
    ]
  },
  "high": {
    "enT": "Light Time-Zone Hop — Protect Normal Hydration & Hotel Sleep",
    "koT": "가벼운 시차 — 수분과 낯선 잠자리 환경만 챙기면 거뜬합니다",
    "enD": "A small time shift barely disturbs your master clock. Keep your usual evening wind-down and enjoy the trip at full energy.",
    "koD": "생체시계 부담이 크지 않은 이동입니다. 평소 취침 전 루틴과 수분 보충만 가볍게 유지하면 첫날부터 최상의 컨디션으로 즐길 수 있습니다.",
    "enS": "\"Hydrate well, walk outside upon landing, and enjoy the new city.\"",
    "koS": "\"물 충분히 마시고 도착 후 가볍게 걸으며 새 도시를 즐기자.\"",
    "enL": [
      "Walk 15 minutes outdoors after hotel check-in to shake off cabin stiffness.",
      "Keep caffeine before 2 PM local time.",
      "Bring earplugs or gentle rain audio for unfamiliar hotel rooms."
    ],
    "koL": [
      "호텔 체크인 후 15분 가볍게 걸어 기내 뭉침을 풀어 주세요.",
      "카페인은 현지 오후 2시 이전까지만 즐기세요.",
      "낯선 객실 소음 대비용 귀마개나 빗소리 사운드를 활용하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_jetlag_shifter_v1";
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
      window.gtag('event', "jetlag_shifter_complete", {
        tool_slug: "travel-jetlag-sleep-shifter",
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
      var shareUrl = "https://dopabrain.com/portal/tools/travel-jetlag-sleep-shifter.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "travel-jetlag-sleep-shifter",
        filename: 'dopabrain-travel-jetlag-sleep-shifter-card.png',
        badge: "TIME-ZONE TRAVEL • LIGHT & MELATONIN TIMING",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#06b6d4",
        accent2: "#3b82f6"
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
