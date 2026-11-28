/* Elevator, Tunnel & MRI Enclosed-Space Calm Protocol
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Elevator, Tunnel & MRI Enclosed-Space Calm Protocol | DopaBrain",
    "metaDesc": "Chest tightening the second elevator doors close or an MRI scan approaches? Audit 5 enclosed-space panic loops locally and build a sensory-anchor + air-flow calm script.",
    "kicker": "SITUATIONAL CALM • ELEVATOR, TUNNEL & MRI ENCLOSED-SPACE KIT",
    "heroTitle": "Elevator, Tunnel & MRI Enclosed-Space Calm Protocol",
    "heroLead": "Chest tightening the second elevator doors close or an MRI scan approaches? Audit 5 enclosed-space panic loops locally and build a sensory-anchor + air-flow calm script.",
    "chip1": "5 Trapped Loops",
    "chip2": "Sensory & Breath Anchor",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR ENCLOSED-SPACE STRESS SIGNALS (1 = STEADY, 5 = PANICKY)",
    "step1Title": "What spikes your enclosed-space alarm fastest?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The upcoming enclosed situation + one comfort support I will request (100% local):",
    "ctaBtn": "Build My Enclosed-Space Calm Protocol",
    "resultBadge": "STEP 2 • YOUR GROUNDED ENCLOSED-SPACE CALM KIT",
    "noteTitle": "My Comfort Plan Anchor",
    "meterLabel": "Enclosed-Space Steadiness",
    "scriptTitle": "1-Line Tech / Companion Comfort Request (Zero Embarrassment)",
    "stepsTitle": "3 Somatic Anchors That Defuse the \"Trapped\" Alarm Fast",
    "stickyTitle": "Want to understand your core anxiety trigger pattern?",
    "stickySub": "Take the free 2-Min Anxiety Type Test",
    "stickyBtn": "Anxiety Type Test →",
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
    "title": "엘리베이터·MRI·터널 밀폐 공간 답답함 완화 & 안심 프로토콜 | DopaBrain",
    "metaDesc": "엘리베이터 문이 닫히거나 MRI 검사·긴 터널에 들어설 때 숨이 턱 막히나요? 5가지 밀폐 불안 패턴을 점검하고 시선·호흡·스태프 요청 안심 프로토콜을 준비하세요.",
    "kicker": "상황 불안 케어 · 엘리베이터·MRI·터널 밀폐 공간 안심 프로토콜",
    "heroTitle": "엘리베이터·MRI·터널 밀폐 공간 답답함 완화 & 안심 프로토콜",
    "heroLead": "엘리베이터 문이 닫히거나 MRI 검사·긴 터널에 들어설 때 숨이 턱 막히나요? 5가지 밀폐 불안 패턴을 점검하고 시선·호흡·스태프 요청 안심 프로토콜을 준비하세요.",
    "chip1": "5가지 밀폐 불안",
    "chip2": "감각·호흡 앵커",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 밀폐 공간 불안·답답함 신호 점검 (1 = 편안, 5 = 극도 답답)",
    "step1Title": "밀폐 공간에서 심박과 답답함을 가장 빠르게 키우는 순간은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 다가오는 상황 + 미리 챙길 안심 도구 1가지 (예: MRI 귀마개·눈가리개, 100% 로컬):",
    "ctaBtn": "내 밀폐 공간 안심 프로토콜 보기",
    "resultBadge": "2단계 • 숨통을 넓혀 주는 밀폐 공간 안심 프로토콜",
    "noteTitle": "나의 사전 안심 요청 메모",
    "meterLabel": "밀폐 공간 안정 지수",
    "scriptTitle": "검사 기사님·동행에게 미리 건네는 1줄 안심 요청",
    "stepsTitle": "\"갇혔다\"는 뇌 경보를 빠르게 낮추는 3가지 감각 기술",
    "stickyTitle": "내 불안이 어떤 유형에서 가장 민감하게 반응하는지 확인해 볼까요?",
    "stickySub": "무료 2분 불안 유형 테스트 바로가기",
    "stickyBtn": "불안 유형 테스트 →",
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
    "title": "电梯、隧道与核磁共振密闭空间安抚工具包 | DopaBrain",
    "heroTitle": "电梯、隧道与核磁共振密闭空间安抚工具包",
    "heroLead": "用4-6呼气节律、通风请求与倒计时锚点化解密闭空间紧张感。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "エレベーター・MRI・トンネル閉所リラックスキット | DopaBrain",
    "heroTitle": "エレベーター・MRI・トンネル閉所リラックスキット",
    "heroLead": "閉所の息苦しさを4-6呼吸・送風リクエスト・時間アナウンスで穏やかに整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Calma para Ascensores, Túneles y Resonancias (MRI) | DopaBrain",
    "heroTitle": "Kit de Calma para Ascensores, Túneles y Resonancias (MRI)",
    "heroLead": "Alivia la opresión en espacios cerrados con respiración 4-6 y frase de apoyo técnico.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Calma para Elevador, Túnel e Ressonância (MRI) | DopaBrain",
    "heroTitle": "Kit de Calma para Elevador, Túnel e Ressonância (MRI)",
    "heroLead": "Reduza a sensação de aperto com expiração longa 4-6 e pedido claro de conforto.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Aufzug-, Tunnel- & MRT-Platzangst Ruhe-Kit | DopaBrain",
    "heroTitle": "Aufzug-, Tunnel- & MRT-Platzangst Ruhe-Kit",
    "heroLead": "Beruhige Engegefühle mit 4-6-Ausatmung, Frischluft-Tipps und klarem Praxis-Satz.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Calme Ascenseur, Tunnel & IRM (Claustrophobie) | DopaBrain",
    "heroTitle": "Kit Calme Ascenseur, Tunnel & IRM (Claustrophobie)",
    "heroLead": "Apaisez l’oppression en espace clos grâce à l’expiration 4-6 et aux repères temps.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Протокол спокойствия в лифте, тоннеле и на МРТ | DopaBrain",
    "heroTitle": "Протокол спокойствия в лифте, тоннеле и на МРТ",
    "heroLead": "Снимите чувство тесноты с помощью выдоха 4-6, обдува и чёткой просьбы специалисту.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "लिफ्ट, सुरंग और MRI बंद-स्थान शांत प्रोटोकॉल | DopaBrain",
    "heroTitle": "लिफ्ट, सुरंग और MRI बंद-स्थान शांत प्रोटोकॉल",
    "heroLead": "4-6 धीमी सांस और स्पष्ट सहायता अनुरोध से बंद जगह की घबराहट शांत करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Tenang Ruang Sempit: Lift, Terowongan & MRI | DopaBrain",
    "heroTitle": "Kit Tenang Ruang Sempit: Lift, Terowongan & MRI",
    "heroLead": "Redakan rasa sesak ruang tertutup dengan napas 4-6 dan permintaan kenyamanan singkat.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Asansör, Tünel ve MR Kapalı Alan Sakinlik Kiti | DopaBrain",
    "heroTitle": "Asansör, Tünel ve MR Kapalı Alan Sakinlik Kiti",
    "heroLead": "4-6 nefes ritmi ve teknisyen iletişim cümlesiyle kapalı alan gerginliğini azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "door_close_spike",
    "en": "Door-Latch Spike — Instant adrenaline surge the moment doors click shut",
    "ko": "문 닫힘 경보 — 문이 닫히거나 벨트가 채워지는 순간 심박이 급상승함"
  },
  {
    "id": "air_hunger_myth",
    "en": "Air-Hunger Catastrophizing — Shallow chest breathing feeling like \"there isn’t enough air\"",
    "ko": "산소 부족 착각 — 얕은 흉식 호흡 때문에 공기가 부족하다고 느끼며 더 헐떡임"
  },
  {
    "id": "no_time_marker",
    "en": "Time-Distortion Dread — Feeling like 45 seconds or a 10-min scan lasts forever",
    "ko": "시간 왜곡 공포 — 30초 엘리베이터나 10분 검사가 영원처럼 길게 느껴짐"
  },
  {
    "id": "silent_endurance",
    "en": "Hiding Discomfort — Not telling the MRI tech or companion you feel tight beforehand",
    "ko": "혼자 참기 — 부끄러워서 검사 전 미리 불편함을 말하지 못함"
  },
  {
    "id": "total_avoidance",
    "en": "Growing Avoidance — Skipping checkups or climbing 12 flights to avoid every lift",
    "ko": "회피 확대 — 불안 때문에 필요한 검사나 이동을 계속 미루게 됨"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Enclosed-Space Alarm — Pair Cool Airflow, Closed-Eye Visualization & Timed Check-Ins",
    "koT": "밀폐 경보 높음 — 시원한 바람·눈 감고 공간 확장 이미지·시간 카운트다운 요청을 결합하세요",
    "enD": "Anxiety feels like suffocation because rapid chest breaths blow off CO2—not because oxygen is actually low. Elevators and MRI bores are continuously ventilated; requesting cool bore airflow, keeping eyes gently closed before entering, and exhaling slowly for 6 counts settles the alarm.",
    "koD": "밀폐 공간의 숨막힘은 실제 산소 부족이 아니라 빠른 흉식 호흡으로 인한 과호흡 신호입니다. 엘리베이터와 MRI 기기는 상시 환기되므로, 진입 전 눈을 감고 시원한 송풍·시간 안내·6초 길게 내쉬기를 쓰면 경보가 빠르게 진정됩니다.",
    "enS": "\"Hi, I get a little claustrophobic in tight spaces—could we turn the bore fan on, hand me the squeeze ball first, and let me know every 3 minutes how much time is left?\"",
    "koS": "\"안녕하세요, 제가 좁은 공간에서 조금 긴장하는 편이라서요—송풍 바람을 켜 주시고, 중간중간 남은 시간을 3분마다 알려 주실 수 있을까요?\"",
    "enL": [
      "Exhale longer than you inhale (4-sec gentle inhale through nose, 6–7 sec soft exhale) to end air-hunger.",
      "For MRIs: close your eyes BEFORE the table slides in, picture a wide sunny beach or mountain ridge, and keep a hand near the call bulb so agency stays tangible.",
      "For elevators/tunnels: count floors or seconds down aloud/silently and press feet firmly into the floor."
    ],
    "koL": [
      "숨이 막힐수록 들이마시기보다 \"4초 코로 들이쉬고 6~7초 입으로 천천히 내쉬기\"로 과호흡을 푸세요.",
      "MRI는 테이블이 들어가기 전 미리 눈을 감고 탁 트인 바다·산을 떠올리며, 비상 호출 버튼을 손에 쥐고 통제감을 유지하세요.",
      "엘리베이터·터널에서는 층수나 초를 거꾸로 세고 양발바닥을 바닥에 단단히 눌러 접지하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Tightness — Pre-Plan Airflow, Music & Countdown Anchors",
    "koT": "중간 긴장감 — 송풍·음악·남은 시간 안내 3가지만 미리 챙기세요",
    "enD": "Knowing the exact duration and holding a rhythmic exhale keeps nerves comfortably manageable.",
    "koD": "정확한 소요 시간과 긴 내쉬기 리듬만 챙겨도 훨씬 수월하게 통과할 수 있습니다.",
    "enS": "\"Ventilated space, timed minutes, steady long exhales.\"",
    "koS": "\"공기는 충분하고 시간은 흐르며, 나는 길게 내쉬고 있다.\"",
    "enL": [
      "Ask for headphones/music during scans.",
      "Focus on slow 6-second exhales before doors close.",
      "Celebrate every calm completed ride or checkup."
    ],
    "koL": [
      "검사 시 헤드폰·음악과 송풍을 편히 요청하세요.",
      "문이 닫히기 전부터 6초 내쉬기를 미리 시작하세요.",
      "무사히 통과한 작은 성공을 꼭 스스로 인정해 주세요."
    ]
  },
  "high": {
    "enT": "Steady & Grounded — Strong Situational Regulation",
    "koT": "안정적인 조절력 — 좁은 공간에서도 호흡과 감각이 차분합니다",
    "enD": "Your breath pacing and realistic self-talk keep enclosed situations routine.",
    "koD": "차분한 호흡과 현실적인 자기 대화가 잘 작동하고 있습니다.",
    "enS": "\"Uncomfortable is temporary—not unsafe.\"",
    "koS": "\"잠깐의 불편함은 위험이 아니라 지나가는 감각일 뿐이다.\"",
    "enL": [
      "Keep using long exhales on crowded lifts.",
      "Continue routine health checkups confidently.",
      "Share calm prep tips with anxious friends."
    ],
    "koL": [
      "붐비는 엘리베이터에서도 긴 내쉬기 습관을 유지하세요.",
      "정기 건강검진도 편안하게 이어 가세요.",
      "긴장하는 지인에게도 사전 요청 팁을 나눠 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_enclosed_calm_v1";
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
      window.gtag('event', "enclosed_space_calm_complete", {
        tool_slug: "claustrophobia-elevator-mri-calm-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/claustrophobia-elevator-mri-calm-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "claustrophobia-elevator-mri-calm-kit",
        filename: 'dopabrain-claustrophobia-elevator-mri-calm-kit-card.png',
        badge: "SITUATIONAL CALM • ELEVATOR, TUNNEL & MRI ENCLOSED-SPACE KIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ef4444",
        accent2: "#f97316"
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
