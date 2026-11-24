/* 3 AM Middle-of-the-Night Awakening & Thought Parker
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "3 AM Middle-of-the-Night Awakening & Thought Parker | DopaBrain",
    "metaDesc": "Wide awake at 3 AM staring at the clock while tomorrow’s problems feel huge? Offload racing midnight thoughts locally and follow a calm CBT-I return-to-sleep reset.",
    "kicker": "MIDDLE-OF-THE-NIGHT WAKING • CBT-I CALM",
    "heroTitle": "3 AM Middle-of-the-Night Awakening & Thought Parker",
    "heroLead": "Wide awake at 3 AM staring at the clock while tomorrow’s problems feel huge? Offload racing midnight thoughts locally and follow a calm CBT-I return-to-sleep reset.",
    "chip1": "5 Awakening Triggers",
    "chip2": "CBT-I Re-Entry Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHAT IS KEEPING YOU AWAKE RIGHT NOW (1 = CALM, 5 = RACING)",
    "step1Title": "What happened right after you woke up in the middle of the night?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Park the #1 looping thought here so your brain can let it go until morning (100% local):",
    "ctaBtn": "Park Thought & Start Calm Reset",
    "resultBadge": "STEP 2 • YOUR 3 AM GENTLE RETURN-TO-SLEEP PLAN",
    "noteTitle": "Safely Parked Until Morning",
    "meterLabel": "Sleep-Reentry Calm Index",
    "scriptTitle": "No-Pressure Rest Permission Line",
    "stepsTitle": "3 CBT-I Moves for 3 AM Wakeups",
    "stickyTitle": "Want gentle brown noise or rain to quiet a 3 AM mind?",
    "stickySub": "Open the free White Noise Sound Mixer with sleep timer",
    "stickyBtn": "Sleep Sounds →",
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
    "title": "새벽 3시 깨어남·잡념 주차 및 재입면 프로토콜 | DopaBrain",
    "metaDesc": "새벽 3시에 눈이 떠져 시계만 보며 내일 걱정이 눈덩이처럼 커지나요? 떠오른 생각을 비공개로 주차하고 CBT-I 기반 재입면 안정 루틴으로 돌아가세요.",
    "kicker": "새벽 3시 각성 진정 · 생각 주차 프로토콜",
    "heroTitle": "새벽 3시 깨어남·잡념 주차 및 재입면 프로토콜",
    "heroLead": "새벽 3시에 눈이 떠져 시계만 보며 내일 걱정이 눈덩이처럼 커지나요? 떠오른 생각을 비공개로 주차하고 CBT-I 기반 재입면 안정 루틴으로 돌아가세요.",
    "chip1": "5가지 새벽 각성 요인",
    "chip2": "CBT-I 재입면 루틴",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 지금 새벽 각성을 유지시키는 요인 점검 (1 = 잔잔함, 5 = 심함)",
    "step1Title": "새벽에 눈을 뜬 직후 어떤 패턴이 잠을 더 달아나게 만들고 있나요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "아침까지 뇌가 붙잡지 않아도 되도록 가장 맴도는 생각 1줄을 여기에 주차하세요 (100% 로컬):",
    "ctaBtn": "생각 주차하고 재입면 안정 플랜 보기",
    "resultBadge": "2단계 • 새벽 3시 부드러운 재입면 프로토콜",
    "noteTitle": "아침까지 안전하게 주차된 생각",
    "meterLabel": "재입면 이완 지수",
    "scriptTitle": "억지로 자려 애쓰지 않는 이완 문장",
    "stepsTitle": "새벽 각성 시 뇌를 다시 재우는 CBT-I 3단계",
    "stickyTitle": "새벽 3시 잡념을 부드럽게 덮어줄 빗소리·브라운노이즈가 필요하신가요?",
    "stickySub": "무료 화이트노이즈 사운드 믹서 & 수면 타이머 바로 열기",
    "stickyBtn": "수면 사운드 →",
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
    "title": "凌晨3点惊醒与思绪暂存站 | DopaBrain",
    "heroTitle": "凌晨3点惊醒与思绪暂存站",
    "heroLead": "本地暂存深夜停不下来的念头，按CBT-I温和步骤重新放松入睡。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "午前3時の中途覚醒＆思考パーキング | DopaBrain",
    "heroTitle": "午前3時の中途覚醒＆思考パーキング",
    "heroLead": "深夜のグルグル思考をローカルに預け、CBT-Iベースの穏やかな再入眠へ導きます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Despertar a las 3 AM y Calma CBT-I | DopaBrain",
    "heroTitle": "Despertar a las 3 AM y Calma CBT-I",
    "heroLead": "Aparca pensamientos nocturnos localmente y vuelve a dormir sin mirar el reloj.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Despertar às 3h e Estacionador Mental | DopaBrain",
    "heroTitle": "Despertar às 3h e Estacionador Mental",
    "heroLead": "Estacione pensamentos acelerados da madrugada e retome o sono com calma CBT-I.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "3-Uhr-Wachliegen & Gedanken-Parkplatz | DopaBrain",
    "heroTitle": "3-Uhr-Wachliegen & Gedanken-Parkplatz",
    "heroLead": "Parke nächtliche Grübeleien lokal und finde mit ruhiger CBT-I-Routine zurück in den Schlaf.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Réveil à 3h & Parking à Pensées CBT-I | DopaBrain",
    "heroTitle": "Réveil à 3h & Parking à Pensées CBT-I",
    "heroLead": "Déposez vos pensées nocturnes localement et retrouvez le sommeil sans pression.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Пробуждение в 3 ночи и парковка мыслей | DopaBrain",
    "heroTitle": "Пробуждение в 3 ночи и парковка мыслей",
    "heroLead": "Отложите ночные тревожные мысли локально и мягко вернитесь ко сну по CBT-I.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "रात 3 बजे जागना व थॉट पार्कर (CBT-I) | DopaBrain",
    "heroTitle": "रात 3 बजे जागना व थॉट पार्कर (CBT-I)",
    "heroLead": "आधी रात के दौड़ते विचारों को स्थानीय रूप से पार्क करें और शांत होकर दोबारा सोएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Terbangun Jam 3 Pagi & Parkir Pikiran | DopaBrain",
    "heroTitle": "Reset Terbangun Jam 3 Pagi & Parkir Pikiran",
    "heroLead": "Parkir pikiran gelisah tengah malam secara lokal dan kembali tidur dengan teknik CBT-I.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Gece 3 Uyanması ve Düşünce Parkı | DopaBrain",
    "heroTitle": "Gece 3 Uyanması ve Düşünce Parkı",
    "heroLead": "Gece yarışan düşünceleri yerel olarak park edin ve sakin CBT-I adımlarıyla uykuya dönün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "clock_math",
    "en": "Clock-Watching Math — Calculating exact hours left until your alarm rings",
    "ko": "시계 역산 습관 — 알람까지 몇 시간 남았는지 시계를 계속 확인하며 계산함"
  },
  {
    "id": "phone_glow",
    "en": "Phone Check Reflex — Grabbing your bright phone screen to scroll or check messages",
    "ko": "스마트폰 확인 반사 — 습관처럼 밝은 화면을 켜서 알림이나 피드를 확인함"
  },
  {
    "id": "problem_solving",
    "en": "3 AM Problem Solving — Trying to rehearse conversations or fix tomorrow’s stress in bed",
    "ko": "새벽 문제 해결 모드 — 침대 위에서 내일 할 일이나 대화를 미리 시뮬레이션함"
  },
  {
    "id": "sleep_effort",
    "en": "Forcing Sleep — Getting frustrated and ordering yourself to fall asleep right now",
    "ko": "억지 수면 압박 — 빨리 자야 한다는 초조함에 오히려 심장이 더 빨라짐"
  },
  {
    "id": "body_heat",
    "en": "Restless Body Tension — Clenched jaw, warm room, or tossing and turning in place",
    "ko": "신체 긴장·열감 — 턱에 힘이 들어가고 몸이 더워져 계속 뒤척임"
  }
];
  var TIERS = {
  "low": {
    "enT": "Alertness Spike — Step Out of the Struggle (CBT-I 20-Min Rule)",
    "koT": "각성도 급상승 — 침대 위 씨름을 멈추고 CBT-I 20분 규칙을 쓰세요",
    "enD": "Brief middle-of-the-night awakenings are biologically normal between 90-minute sleep cycles. Fighting to sleep triggers adrenaline; shifting to calm rest lets sleep pressure return naturally.",
    "koD": "90분 수면 주기 사이의 짧은 각성은 자연스러운 생리 현상입니다. 억지로 자려 애쓸수록 아드레날린이 나오므로, \"휴식만 해도 충분하다\"로 전환하면 잠이 다시 찾아옵니다.",
    "enS": "\"Quiet horizontal rest still restores my body. I do not have to force sleep—my brain knows how to drift back when I stop watching the clock.\"",
    "koS": "\"눈을 감고 고요히 누워 쉬는 것만으로도 몸은 회복돼. 시계를 보지 않고 힘을 빼면 잠은 알아서 돌아와.\"",
    "enL": [
      "Turn your clock face away and place your phone face-down across the room.",
      "Try cognitive shuffling: mentally picture random neutral objects (apple, bridge, cloud, lantern) for 2 minutes.",
      "If still wide awake after ~20 minutes, sit in dim light with a dull paper book until your eyelids feel heavy."
    ],
    "koL": [
      "시계 화면을 돌려놓고 스마트폰은 손이 닿지 않는 곳에 엎어 두세요.",
      "인지 셔플링: 관련 없는 평범한 단어(사과·다리·구름·우산)를 2분간 천천히 떠올려 보세요.",
      "20분 이상 말똥말똥하면 어두운 조명 아래 앉아 지루한 종이책을 읽다 졸릴 때 다시 누우세요."
    ]
  },
  "mid": {
    "enT": "Light Wakefulness — Park the Thought & Cool Down Your Nervous System",
    "koT": "가벼운 새벽 각성 — 생각을 주차하고 호흡과 체온을 살짝 낮추세요",
    "enD": "Your sleep pressure is still close. Dropping cognitive problem-solving and lengthening your exhale usually brings sleep back within 10–15 minutes.",
    "koD": "아직 수면 압력이 충분히 남아 있습니다. 머릿속 계산을 멈추고 날숨만 길게 늘려도 10~15분 안에 다시 잠들 수 있습니다.",
    "enS": "\"This thought is safely written down for 9 AM. Right now my only job is soft breathing.\"",
    "koS": "\"이 생각은 아침 9시용으로 안전하게 적어 두었어. 지금 내가 할 일은 부드럽게 숨 내쉬기뿐이야.\"",
    "enL": [
      "Unclench your jaw, drop your shoulders, and exhale 2 counts longer than you inhale for 6 breaths.",
      "Stick one foot slightly outside the blanket to let core temperature dip gently.",
      "Keep your eyes softly closed without checking the time again."
    ],
    "koL": [
      "턱 힘과 어깨를 툭 풀고 들이마시는 숨보다 내쉬는 숨을 2박자 길게 6회 쉬세요.",
      "이불 밖으로 발 하나를 살짝 내어 심부 체온을 부드럽게 낮춰 주세요.",
      "시간을 다시 확인하지 말고 눈꺼풀에 힘을 뺀 채 편안히 머무세요."
    ]
  },
  "high": {
    "enT": "Calm Night Transition — Let Natural Drowsiness Carry You Back",
    "koT": "안정적인 새벽 이완 — 자연스러운 졸림에 몸을 맡기세요",
    "enD": "You caught the awakening early before stress escalated. Put the screen away now and enjoy calm, pressure-free rest.",
    "koD": "불안이 커지기 전에 아주 잘 멈추셨습니다. 지금 화면을 끄고 부담 없는 고요한 휴식으로 돌아가세요.",
    "enS": "\"Waking briefly between sleep cycles is normal; I drift back easily.\"",
    "koS": "\"수면 주기 사이 잠깐 깨는 건 자연스러운 일이야. 편안하게 다시 잠들 수 있어.\"",
    "enL": [
      "Lock your screen right now to preserve melatonin.",
      "Let your breathing find its slow, automatic rhythm.",
      "Picture a calm, familiar place with zero agenda until morning."
    ],
    "koL": [
      "멜라토닌 분비를 지키기 위해 지금 바로 화면을 잠그세요.",
      "호흡을 조절하려 하지 말고 저절로 느려지는 리듬에 맡기세요.",
      "아침까지 아무 계획 없는 평온한 장면을 떠올리며 쉬세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_insomnia_3am_v1";
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
      window.gtag('event', "insomnia_3am_complete", {
        tool_slug: "insomnia-3am-thought-parker",
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
      var shareUrl = "https://dopabrain.com/portal/tools/insomnia-3am-thought-parker.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "insomnia-3am-thought-parker",
        filename: 'dopabrain-insomnia-3am-thought-parker-card.png',
        badge: "MIDDLE-OF-THE-NIGHT WAKING • CBT-I CALM",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#38bdf8",
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
