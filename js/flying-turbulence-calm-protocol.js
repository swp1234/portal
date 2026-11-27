/* Flight & Turbulence Anxiety Grounding Protocol
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Flight & Turbulence Anxiety Grounding Protocol | DopaBrain",
    "metaDesc": "Gripping the armrests at every bump or unfamiliar cabin sound? Audit 5 flight-anxiety triggers locally and pack an offline-ready Jell-O physics reminder + breathing anchor for your next trip.",
    "kicker": "TRAVEL CALM • FLIGHT & TURBULENCE ANXIETY PROTOCOL",
    "heroTitle": "Flight & Turbulence Anxiety Grounding Protocol",
    "heroLead": "Gripping the armrests at every bump or unfamiliar cabin sound? Audit 5 flight-anxiety triggers locally and pack an offline-ready Jell-O physics reminder + breathing anchor for your next trip.",
    "chip1": "5 Flight Triggers",
    "chip2": "Turbulence Physics",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR FLIGHT ANXIETY TRIGGERS (1 = RELAXED, 5 = GRIPPING SEAT)",
    "step1Title": "Which part of flying triggers the biggest adrenaline surge?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One offline comfort item (playlist, movie, snack) I will pre-download before boarding (100% local):",
    "ctaBtn": "Build My Flight & Turbulence Calm Card",
    "resultBadge": "STEP 2 • YOUR IN-FLIGHT GROUNDING & TURBULENCE CARD",
    "noteTitle": "My Pre-Downloaded Cabin Anchor",
    "meterLabel": "In-Flight Calm Readiness",
    "scriptTitle": "Turbulence Reality-Anchor Mantra",
    "stepsTitle": "3 In-Seat Resets When Bumps or Cabin Noises Start",
    "stickyTitle": "Want steady brown noise to mask unfamiliar cabin sounds?",
    "stickySub": "Try the free White & Brown Noise Generator",
    "stickyBtn": "Open Soundscape →",
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
    "title": "비행기 공포·난기류 흔들림 안심 & 오감 그라운딩 키트 | DopaBrain",
    "metaDesc": "비행기 흔들림이나 엔진 소리 변화마다 팔걸이를 꽉 쥐게 되나요? 5가지 비행 불안 포인트를 점검하고 오프라인에서도 쓸 수 있는 난기류 젤리 원리·호흡 안심 프로토콜을 챙기세요.",
    "kicker": "비행 평온 · 비행기 공포·난기류 흔들림 진정 프로토콜",
    "heroTitle": "비행기 공포·난기류 흔들림 안심 & 오감 그라운딩 키트",
    "heroLead": "비행기 흔들림이나 엔진 소리 변화마다 팔걸이를 꽉 쥐게 되나요? 5가지 비행 불안 포인트를 점검하고 오프라인에서도 쓸 수 있는 난기류 젤리 원리·호흡 안심 프로토콜을 챙기세요.",
    "chip1": "5가지 비행 불안",
    "chip2": "난기류 안심 원리",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 비행 중 긴장이 올라오는 순간 점검 (1 = 여유, 5 = 팔걸이 꽉 쥠)",
    "step1Title": "비행 과정 중 심장이 가장 크게 뛰는 구간은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 탑승 전 미리 오프라인 저장할 안심 아이템 1가지 (음악·영상·간식, 100% 로컬):",
    "ctaBtn": "내 비행·난기류 안심 프로토콜 보기",
    "resultBadge": "2단계 • 기내 난기류 안심 & 그라운딩 카드",
    "noteTitle": "오프라인 저장 안심 아이템",
    "meterLabel": "기내 평온 준비도",
    "scriptTitle": "흔들릴 때 속으로 읽는 난기류 사실 앵커",
    "stepsTitle": "기체가 흔들릴 때 좌석에서 바로 쓰는 3가지 진정법",
    "stickyTitle": "낯선 기내 소음을 부드럽게 덮어 주는 브라운 노이즈를 미리 확인해 볼까요?",
    "stickySub": "무료 화이트·브라운 노이즈 플레이어",
    "stickyBtn": "사운드 열기 →",
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
    "title": "飞行恐惧与气流颠簸安抚协议 | DopaBrain",
    "heroTitle": "飞行恐惧与气流颠簸安抚协议",
    "heroLead": "用物理常识锚点与手掌放松接地法，缓解起飞和颠簸时的紧张感。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "飛行機恐怖・乱気流の揺れ安心プロトコル | DopaBrain",
    "heroTitle": "飛行機恐怖・乱気流の揺れ安心プロトコル",
    "heroLead": "「不快≠危険」の物理アンカーと機内呼吸リセットでフライト不安を和らげます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Protocolo de Calma para Miedo a Volar y Turbulencias | DopaBrain",
    "heroTitle": "Protocolo de Calma para Miedo a Volar y Turbulencias",
    "heroLead": "Aplaca los nervios en vuelo con anclas físicas reales y respiración en asiento.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Protocolo de Calma para Medo de Voar e Turbulência | DopaBrain",
    "heroTitle": "Protocolo de Calma para Medo de Voar e Turbulência",
    "heroLead": "Reduza a ansiedade no avião com fatos de voo e respiração guiada no assento.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Flugangst- & Turbulenzen-Ruhe-Protokoll | DopaBrain",
    "heroTitle": "Flugangst- & Turbulenzen-Ruhe-Protokoll",
    "heroLead": "Beruhige Flugnerven mit Physik-Fakten, offener Handhaltung und Atemanker.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Protocole Calme Peur de l’Avion & Turbulences | DopaBrain",
    "heroTitle": "Protocole Calme Peur de l’Avion & Turbulences",
    "heroLead": "Apaisez l’angoisse en vol avec des repères physiques rassurants et respiration assise.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Протокол спокойствия при аэрофобии и турбулентности | DopaBrain",
    "heroTitle": "Протокол спокойствия при аэрофобии и турбулентности",
    "heroLead": "Снимите тревогу в полёте с помощью фактов о воздухе и заземления в кресле.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "फ्लाइट और टर्बुलेंस चिंता शांत प्रोटोकॉल | DopaBrain",
    "heroTitle": "फ्लाइट और टर्बुलेंस चिंता शांत प्रोटोकॉल",
    "heroLead": "उड़ान के डर को सरल भौतिकी तथ्यों और सीट ग्राउंडिंग से शांत करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Protokol Tenang Cemas Terbang & Turbulensi | DopaBrain",
    "heroTitle": "Protokol Tenang Cemas Terbang & Turbulensi",
    "heroLead": "Redakan gugup di pesawat dengan fakta fisika udara dan teknik grounding kursi.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Uçuş Korkusu ve Türbülans Sakinlik Protokolü | DopaBrain",
    "heroTitle": "Uçuş Korkusu ve Türbülans Sakinlik Protokolü",
    "heroLead": "Türbülans gerçekleri ve koltuk içi nefes teknikleriyle uçuş kaygısını yatıştırın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "turbulence_drop_fear",
    "en": "Turbulence Fear — Feeling like bumps mean the plane is dropping instead of riding air waves",
    "ko": "난기류 추락 공포 — 기체 흔들림을 공기 파도가 아니라 추락 위험으로 느낌"
  },
  {
    "id": "cabin_sound_hypervigilance",
    "en": "Sound Hypervigilance — Scanning every engine pitch change, chime, or wing flap noise",
    "ko": "소리 과경계 — 엔진음 변화·벨 소리·날개 작동음마다 위험 신호인지 살핌"
  },
  {
    "id": "closed_door_claustro",
    "en": "Closed-Door Trapped Feeling — Feeling uneasy once the cabin door locks before pushback",
    "ko": "폐쇄감 긴장 — 탑승문이 닫히는 순간 나갈 수 없다는 생각에 답답해짐"
  },
  {
    "id": "takeoff_surge",
    "en": "Takeoff Acceleration Rush — Heart racing during runway roll and initial climb",
    "ko": "이륙 가속 긴장 — 활주로 가속과 상승 각도에서 아드레날린이 확 치솟음"
  },
  {
    "id": "pre_trip_dread",
    "en": "Pre-Flight Anticipation — Worrying about the flight days before reaching the airport",
    "ko": "출발 전 예기 불안 — 공항 가기 며칠 전부터 비행 걱정으로 잠을 설침"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Flight Nerves — Anchor on \"Uncomfortable ≠ Unsafe\" + Jell-O Physics + Unclenched Hands",
    "koT": "비행 긴장 높음 — \"불편함 ≠ 위험\" 사실 앵커 + 젤리 공기 원리 + 손바닥 펴기를 쓰세요",
    "enD": "Aviation psychology & pilot coaching emphasize that air at 500 mph acts like dense Jell-O supporting the wings—turbulence is simply bumpy pavement in the sky, uncomfortable for passengers yet routine for aircraft engineered for far greater loads.",
    "koD": "항공 심리학·파일럿 코칭에 따르면 시속 800km에서 공기는 날개를 단단히 받치는 젤리처럼 작용합니다. 난기류는 하늘의 울퉁불퉁한 도로일 뿐 승객에게 불편할지언정 기체에는 일상적인 구간입니다.",
    "enS": "\"Turbulence is uncomfortable, not unsafe. Like a boat on choppy water or a car on gravel, the air is firmly holding the wings.\"",
    "koS": "\"난기류는 불편할 뿐 위험하지 않다. 물결 위 배나 자갈길 위 자동차처럼 두꺼운 공기가 날개를 단단히 받치고 있다.\"",
    "enL": [
      "Open your palms face-up on your lap (unclenching armrests signals physical safety to your amygdala).",
      "Watch the flight attendants calmly pouring coffee or chatting—they know normal bumps instinctively.",
      "Put on downloaded familiar comfort audio/video and try writing your name with your non-dominant hand during bumps to occupy working memory."
    ],
    "koL": [
      "팔걸이에서 손을 떼고 무릎 위에 손바닥을 펴 올려 두세요(근육 이완이 뇌에 안전 신호를 보냅니다).",
      "승무원들의 평소처럼 침착한 표정과 움직임을 기준 앵커로 삼으세요.",
      "오프라인 저장한 익숙한 영상·음악을 켜고, 흔들릴 땐 왼손(비주손)으로 이름을 써 보며 주의력을 전환하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Flight Jitters — Pre-Download Comfort Media & Choose Wing/Aisle Seat",
    "koT": "중간 비행 긴장 — 날개 부근·통로 좌석 선택과 오프라인 안정 콘텐츠가 효과적입니다",
    "enD": "Seats directly over the wings experience the least pivot motion, and familiar audio smooths takeoff.",
    "koD": "날개 위 좌석은 흔들림 체감이 가장 적고, 익숙한 오디오가 이륙 소음 긴장을 크게 낮춰 줍니다.",
    "enS": "\"Bumps pass in minutes; my seatbelt and breath keep me steady.\"",
    "koS": "\"흔들림은 몇 분이면 지나간다. 안전벨트와 느린 호흡이 나를 단단히 잡아준다.\"",
    "enL": [
      "Choose a seat over the wings (minimal pitch) or aisle for extra breathing space.",
      "Skip pre-flight coffee/alcohol that amplify heart rate.",
      "Sip cold water slowly during climb and descent."
    ],
    "koL": [
      "체감 흔들림이 가장 적은 날개 위 좌석이나 답답함이 덜한 통로석을 골라 보세요.",
      "탑승 전 심박을 올리는 과도한 카페인·알코올은 피하세요.",
      "이착륙 중에는 시원한 물을 조금씩 천천히 마셔 보세요."
    ]
  },
  "high": {
    "enT": "Steady Flyer — Calm Routine & Smooth Travel Habits",
    "koT": "여유로운 비행 리듬 — 차분하고 안정적인 여행 습관을 갖고 있습니다",
    "enD": "You handle cabin sensations calmly; keep enjoying smooth, well-paced travel.",
    "koD": "기내 감각과 환경 변화를 침착하게 받아들이고 있습니다. 편안한 여정을 즐기세요.",
    "enS": "\"Air travel is my quiet offline reading and rest window.\"",
    "koS": "\"비행 시간은 알림 없이 온전히 쉬고 읽는 나만의 오프라인 휴식처다.\"",
    "enL": [
      "Stay hydrated across long flights.",
      "Stretch calves lightly in the aisle when signs are off.",
      "Enjoy offline books or podcasts in peace."
    ],
    "koL": [
      "장거리 비행 중 수분을 충분히 보충하세요.",
      "좌석 벨트 등이 꺼지면 가볍게 종아리를 스트레칭하세요.",
      "오프라인 독서와 휴식을 여유롭게 즐기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_flying_turbulence_calm_v1";
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
      window.gtag('event', "flying_turbulence_calm_complete", {
        tool_slug: "flying-turbulence-calm-protocol",
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
      var shareUrl = "https://dopabrain.com/portal/tools/flying-turbulence-calm-protocol.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "flying-turbulence-calm-protocol",
        filename: 'dopabrain-flying-turbulence-calm-protocol-card.png',
        badge: "TRAVEL CALM • FLIGHT & TURBULENCE ANXIETY PROTOCOL",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
        accent2: "#8b5cf6"
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
