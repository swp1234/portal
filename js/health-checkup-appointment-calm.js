/* Doctor Visit & Medical Appointment Anxiety Calm Prep
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Doctor Visit & Medical Appointment Anxiety Calm Prep | DopaBrain",
    "metaDesc": "Putting off routine checkups or feeling your pulse spike in the waiting room and forgetting every question once the doctor walks in? Organize 5 appointment nerves locally and pack a 3-question note.",
    "kicker": "APPOINTMENT ANXIETY • WAITING-ROOM CALM PREP",
    "heroTitle": "Doctor Visit & Medical Appointment Anxiety Calm Prep",
    "heroLead": "Putting off routine checkups or feeling your pulse spike in the waiting room and forgetting every question once the doctor walks in? Organize 5 appointment nerves locally and pack a 3-question note.",
    "chip1": "5 Visit Triggers",
    "chip2": "3-Question Prep",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR APPOINTMENT NERVES (1 = STEADY, 5 = AVOIDING VISIT)",
    "step1Title": "What makes medical or dental visits feel most stressful for you?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Top 2 questions or symptoms I want to read straight off my phone in the room (100% local):",
    "ctaBtn": "Build My Calm Appointment Kit",
    "resultBadge": "STEP 2 • YOUR WAITING-ROOM & EXAM-ROOM CALM PROTOCOL",
    "noteTitle": "My Exam-Room Question Anchor (Read Aloud Calmly)",
    "meterLabel": "Appointment Composure Score",
    "scriptTitle": "Honest, Helpful Opening Line for Your Clinician",
    "stepsTitle": "3 Grounding Moves From Waiting Room to Follow-Up",
    "stickyTitle": "Want to measure your overall baseline stress load too?",
    "stickySub": "Take the free 60-second Stress Check next",
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
    "title": "병원·치과·건강검진 불안 완화 & 질문 메모 준비 키트 | DopaBrain",
    "metaDesc": "정기 검진이나 치과 예약을 자꾸 미루거나, 진료실에 들어가면 긴장해서 물어볼 말을 다 까먹나요? 5가지 진료 불안을 정리하고 대기실 진정 루틴과 3줄 질문 메모를 준비하세요.",
    "kicker": "병원·건강검진 대기 불안 · 진료 준비 캘름 키트",
    "heroTitle": "병원·치과·건강검진 불안 완화 & 질문 메모 준비 키트",
    "heroLead": "정기 검진이나 치과 예약을 자꾸 미루거나, 진료실에 들어가면 긴장해서 물어볼 말을 다 까먹나요? 5가지 진료 불안을 정리하고 대기실 진정 루틴과 3줄 질문 메모를 준비하세요.",
    "chip1": "5가지 진료 불안",
    "chip2": "3줄 질문 메모",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 병원·검진 방문 전 긴장 신호 점검 (1 = 차분함, 5 = 예약 미룸)",
    "step1Title": "병원이나 검진 방문에서 마음을 가장 긴장시키는 요인은 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 진료실에서 폰을 보고 그대로 읽을 핵심 질문·증상 2줄 (100% 로컬):",
    "ctaBtn": "내 병원 대기실 진정 & 질문 플랜 보기",
    "resultBadge": "2단계 • 대기실·진료실 평정심 프로토콜",
    "noteTitle": "진료실에서 그대로 읽을 질문 메모",
    "meterLabel": "진료 방문 평정심 지수",
    "scriptTitle": "의료진에게 편하게 협조를 구하는 첫 한마디",
    "stepsTitle": "대기실부터 귀가까지 불안을 낮추는 3단계",
    "stickyTitle": "평소 누적된 전반적인 스트레스 긴장도도 함께 확인해 볼까요?",
    "stickySub": "무료 60초 스트레스 체크로 긴장도 점검하기",
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
    "title": "体检与就医候诊焦虑舒缓及提问准备 | DopaBrain",
    "heroTitle": "体检与就医候诊焦虑舒缓及提问准备",
    "heroLead": "缓解白大褂紧张与候诊心跳加速，提前备好诊室2条核心提问清单。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "病院・健康診断の待ち時間不安＆質問メモ | DopaBrain",
    "heroTitle": "病院・健康診断の待ち時間不安＆質問メモ",
    "heroLead": "白衣緊張を呼吸で和らげ、診察室で迷わず聞ける質問2行をローカル整理。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Preparación Calma para Citas Médicas | DopaBrain",
    "heroTitle": "Preparación Calma para Citas Médicas",
    "heroLead": "Alivia los nervios en la sala de espera y lleva 2 preguntas claras anotadas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Preparo Calmo para Consultas e Exames | DopaBrain",
    "heroTitle": "Preparo Calmo para Consultas e Exames",
    "heroLead": "Reduza a ansiedade na sala de espera e leve 2 perguntas objetivas anotadas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Arzttermin- & Vorsorge-Ruhe-Vorbereitung | DopaBrain",
    "heroTitle": "Arzttermin- & Vorsorge-Ruhe-Vorbereitung",
    "heroLead": "Beruhige Weißkittel-Nervosität im Wartezimmer und nimm 2 klare Fragen mit.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Préparation Sereine Rendez-Vous Médical | DopaBrain",
    "heroTitle": "Préparation Sereine Rendez-Vous Médical",
    "heroLead": "Apaisez le stress en salle d’attente et notez vos 2 questions clés en privé.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Спокойная подготовка к визиту к врачу | DopaBrain",
    "heroTitle": "Спокойная подготовка к визиту к врачу",
    "heroLead": "Снимите волнение в очереди и возьмите с собой 2 чётких вопроса врачу.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "डॉक्टर विज़िट व मेडिकल चेकअप काम प्रेप | DopaBrain",
    "heroTitle": "डॉक्टर विज़िट व मेडिकल चेकअप काम प्रेप",
    "heroLead": "वेटिंग रूम की घबराहट शांत करें और डॉक्टर से पूछने के 2 स्पष्ट सवाल तैयार रखें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Persiapan Tenang Kunjungan Dokter & Cek Kesehatan | DopaBrain",
    "heroTitle": "Persiapan Tenang Kunjungan Dokter & Cek Kesehatan",
    "heroLead": "Redakan gugup ruang tunggu dan siapkan 2 pertanyaan utama untuk dokter.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Doktor Randevusu Sakinlik ve Soru Hazırlığı | DopaBrain",
    "heroTitle": "Doktor Randevusu Sakinlik ve Soru Hazırlığı",
    "heroLead": "Bekleme odası heyecanını yatıştırın ve muayene için net 2 soru hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "white_coat_pulse",
    "en": "Waiting-Room Pulse Spike — Blood pressure and heart rate climbing the moment you sit in the lobby",
    "ko": "대기실 심박 상승(백의 긴장) — 접수하고 대기실에 앉자마자 맥박과 혈압이 올라감"
  },
  {
    "id": "symptom_googling",
    "en": "Pre-Visit Symptom Searching — Reading worst-case forum threads the night before an exam",
    "ko": "방문 전 증상 검색 — 검진 전날 밤 온라인 최악의 사례만 찾아보며 겁이 커짐"
  },
  {
    "id": "blank_in_room",
    "en": "Exam-Room Blank Mind — Forgetting your main questions or feeling rushed once the clinician enters",
    "ko": "진료실 머릿속 백지 — 의사 선생님을 마주하면 준비한 질문을 다 잊어버림"
  },
  {
    "id": "avoidance_delay",
    "en": "Postponing Routine Checks — Delaying simple dental or annual visits out of vague dread",
    "ko": "정기 검진 회피 — 막연한 두려움 때문에 간단한 치과·정기검진을 계속 미룸"
  },
  {
    "id": "results_waiting",
    "en": "Portal-Refresh Anxiety — Checking lab portals repeatedly before the clinician explains results",
    "ko": "결과창 강박 확인 — 설명을 듣기 전 검사 수치만 보며 스스로 최악을 추측함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Appointment Nerves — Name It Upfront & Bring Your Written Note",
    "koT": "진료 긴장도 높음 — \"긴장된다\"고 먼저 말하고 적어둔 메모를 그대로 읽으세요",
    "enD": "Clinicians see white-coat anxiety every single day and appreciate when patients say so upfront—they naturally slow down, explain each step clearly, and let you breathe before taking vitals.",
    "koD": "의료진은 백의 긴장과 병원 불안을 매일 접하며, 환자가 \"제가 조금 긴장하는 편이라 메모를 보고 여쭤볼게요\"라고 먼저 말해주면 훨씬 천천히 친절하게 설명해 줍니다.",
    "enS": "\"Hi! I get a bit nervous at medical appointments, so I jotted down 2 quick questions on my phone—could you walk me through each step as we go?\"",
    "koS": "\"안녕하세요, 제가 병원에 오면 조금 긴장해서 질문을 2가지 적어 왔어요. 진행하실 때 단계별로 짧게 설명해 주시면 마음이 훨씬 편할 것 같아요.\"",
    "enL": [
      "Pause all symptom-Googling 24 hours before your visit—save questions solely for the clinician.",
      "In the waiting room, uncross your legs, drop your shoulders, and take 6 slow 4-in/6-out breaths before vitals.",
      "Plan a small pleasant post-visit reward (favorite coffee, pastry, or quiet walk) right afterward."
    ],
    "koL": [
      "방문 24시간 전부터는 온라인 증상 검색을 멈추고 모든 질문은 의료진에게만 아껴 두세요.",
      "대기실에서 다리를 풀고 어깨 힘을 뺀 채 4초 들숨·6초 날숨을 6회 천천히 쉬세요.",
      "진료 직후 나에게 주는 작은 보상(좋아하는 커피·디저트·가벼운 산책)을 미리 정해 두세요."
    ]
  },
  "mid": {
    "enT": "Manageable Pre-Visit Butterflies — Bring Your 2-Line Checklist",
    "koT": "가벼운 진료 전 긴장 — 2줄 질문 메모만 챙겨도 훨씬 든든합니다",
    "enD": "Writing down your top questions removes memory pressure and ensures you leave the appointment with clear next steps.",
    "koD": "핵심 질문 2가지만 메모해 가면 진료실에서 당황하지 않고 필요한 답을 명확히 얻어 나올 수 있습니다.",
    "enS": "\"Showing up for routine care is an act of calm self-respect.\"",
    "koS": "\"미루지 않고 정기 점검을 챙기는 건 나를 아끼는 가장 현명한 행동이야.\"",
    "enL": [
      "Arrive 10 minutes early so rushing does not spike your heart rate.",
      "Ask \"What are the main 1–2 takeaways I should remember?\" before wrapping up.",
      "Book your next routine check at the desk so you do not have to think about it later."
    ],
    "koL": [
      "서두르다 맥박이 뛰지 않도록 10분 여유 있게 도착하세요.",
      "진료 마무리 전 \"제가 가장 기억해야 할 핵심 1~2가지만 다시 짚어주실 수 있을까요?\"라고 물어보세요.",
      "다음 정기 검진은 데스크에서 미리 예약해 두어 나중의 결정 피로를 없애세요."
    ]
  },
  "high": {
    "enT": "Calm Preventive Care Mindset — Proactive & Grounded",
    "koT": "안정적인 건강 관리 태도 — 차분하고 주도적으로 잘 챙기고 있습니다",
    "enD": "You treat checkups as routine maintenance rather than emergencies. Keep using clear written notes to get maximum value from every visit.",
    "koD": "병원 방문을 위기가 아닌 정기 점검으로 담담하게 대하고 계십니다. 지금처럼 간결한 질문 메모 습관을 유지하세요.",
    "enS": "\"Information brings clarity and calm action.\"",
    "koS": "\"정확한 확인이 막연한 걱정보다 훨씬 큰 안심을 준다.\"",
    "enL": [
      "Keep an updated one-page list of medications/dates in your private notes.",
      "Take a calm breath and appreciate completing your preventive care.",
      "Treat yourself to a nice post-appointment break."
    ],
    "koL": [
      "복용 중인 영양제·약과 최근 검진 날짜를 개인 메모 한 페이지에 유지하세요.",
      "건강을 챙긴 스스로를 가볍게 칭찬하며 하루를 이어 가세요.",
      "진료 후 짧은 휴식과 수분 보충을 챙기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_clinic_appointment_calm_v1";
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
      window.gtag('event', "clinic_appointment_calm_complete", {
        tool_slug: "health-checkup-appointment-calm",
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
      var shareUrl = "https://dopabrain.com/portal/tools/health-checkup-appointment-calm.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "health-checkup-appointment-calm",
        filename: 'dopabrain-health-checkup-appointment-calm-card.png',
        badge: "APPOINTMENT ANXIETY • WAITING-ROOM CALM PREP",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
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
