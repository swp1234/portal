/* ADHD Body-Doubling & Co-Working Session Prep
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "ADHD Body-Doubling & Co-Working Session Prep | DopaBrain",
    "metaDesc": "Struggling to start boring tasks alone even when you know they only take 20 minutes? Audit 5 solo-initiation blocks locally and structure a crisp 25-minute body-doubling sprint.",
    "kicker": "ADHD FOCUS • BODY-DOUBLING SESSION PREP",
    "heroTitle": "ADHD Body-Doubling & Co-Working Session Prep",
    "heroLead": "Struggling to start boring tasks alone even when you know they only take 20 minutes? Audit 5 solo-initiation blocks locally and structure a crisp 25-minute body-doubling sprint.",
    "chip1": "5 Initiation Locks",
    "chip2": "25-Min Sprint Card",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR SOLO TASK-INITIATION FRICTION (1 = EASY, 5 = FROZEN)",
    "step1Title": "What stalls your brain most when working alone on a task?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My 1 concrete 25-minute target to announce at check-in (100% local):",
    "ctaBtn": "Build My Body-Doubling Sprint Plan",
    "resultBadge": "STEP 2 • YOUR 25-MINUTE BODY-DOUBLING PROTOCOL",
    "noteTitle": "My Check-In Declaration (One Clear Output)",
    "meterLabel": "Session Start Momentum",
    "scriptTitle": "2-Line Co-Working Check-In Script",
    "stepsTitle": "3 Proven Moves That Make Body Doubling Click",
    "stickyTitle": "Ready to start your 25-minute quiet sprint clock right now?",
    "stickySub": "Launch the free Pomodoro Focus Timer next",
    "stickyBtn": "Start 25m →",
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
    "title": "ADHD 바디 더블링·동반 집중 세션 준비 플래너 | DopaBrain",
    "metaDesc": "20분이면 끝날 일인데 혼자서는 도저히 시작이 안 되나요? 5가지 단독 착수 마찰을 비공개로 점검하고 딱 떨어지는 25분 바디 더블링 집중 세션을 설계하세요.",
    "kicker": "ADHD 바디 더블링 · 동반 집중 세션 설계",
    "heroTitle": "ADHD 바디 더블링·동반 집중 세션 준비 플래너",
    "heroLead": "20분이면 끝날 일인데 혼자서는 도저히 시작이 안 되나요? 5가지 단독 착수 마찰을 비공개로 점검하고 딱 떨어지는 25분 바디 더블링 집중 세션을 설계하세요.",
    "chip1": "5가지 착수 장벽",
    "chip2": "25분 세션 카드",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 혼자 시작할 때의 마찰 신호 점검 (1 = 쉬움, 5 = 완전 정지)",
    "step1Title": "혼자 앉아 일을 시작하려 할 때 가장 크게 발목을 잡는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 세션 시작할 때 선언할 25분 단일 목표 1가지 (100% 로컬):",
    "ctaBtn": "내 바디 더블링 25분 세션 플랜 보기",
    "resultBadge": "2단계 • 25분 바디 더블링 집중 프로토콜",
    "noteTitle": "체크인 선언 목표 (단일 산출물)",
    "meterLabel": "세션 착수 탄력도",
    "scriptTitle": "동반 집중 파트너에게 쓰는 2줄 체크인 멘트",
    "stepsTitle": "바디 더블링 효과를 극대화하는 3단계",
    "stickyTitle": "선언한 목표를 가지고 바로 25분 집중 타이머를 시작해 볼까요?",
    "stickySub": "무료 뽀모도로 타이머로 즉시 실행 들어가기",
    "stickyBtn": "25분 시작 →",
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
    "title": "ADHD陪伴专注(Body Doubling)冲刺规划 | DopaBrain",
    "heroTitle": "ADHD陪伴专注(Body Doubling)冲刺规划",
    "heroLead": "打破独自开工拖延僵局，快速定制25分钟低阻力结伴专注冲刺。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "ADHDボディダブリング集中セッション準備 | DopaBrain",
    "heroTitle": "ADHDボディダブリング集中セッション準備",
    "heroLead": "一人だと進まない着手の壁を25分並走スプリントで軽やかに突破します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Sesión Body Doubling (TDAH) | DopaBrain",
    "heroTitle": "Plan de Sesión Body Doubling (TDAH)",
    "heroLead": "Supera el bloqueo al iniciar tareas con un sprint guiado de 25 minutos acompañado.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Preparador de Sessão Body Doubling | DopaBrain",
    "heroTitle": "Preparador de Sessão Body Doubling",
    "heroLead": "Quebre a paralisia ao iniciar tarefas sozinho com um sprint simples de 25 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "ADHS Body-Doubling-Session-Planer | DopaBrain",
    "heroTitle": "ADHS Body-Doubling-Session-Planer",
    "heroLead": "Überwinde Startblockaden allein mit einem klaren 25-Minuten-Co-Working-Sprint.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Préparateur Session Body Doubling (TDAH) | DopaBrain",
    "heroTitle": "Préparateur Session Body Doubling (TDAH)",
    "heroLead": "Débloquez le démarrage de tâche grâce à un sprint clair de 25 minutes accompagné.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Подготовка сессии боди-даблинга (СДВГ) | DopaBrain",
    "heroTitle": "Подготовка сессии боди-даблинга (СДВГ)",
    "heroLead": "Снимите ступор старта задач за счёт чёткого 25-минутного совместного спринта.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "ADHD बॉडी-डबलिंग फोकस सेशन प्लानर | DopaBrain",
    "heroTitle": "ADHD बॉडी-डबलिंग फोकस सेशन प्लानर",
    "heroLead": "अकेले काम शुरू करने की जड़ता तोड़ें और 25-मिनट का स्पष्ट फोकस स्प्रिंट बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Persiapan Sesi Body Doubling (ADHD) | DopaBrain",
    "heroTitle": "Persiapan Sesi Body Doubling (ADHD)",
    "heroLead": "Atasi macet memulai tugas sendirian dengan sprint fokus 25 menit yang terstruktur.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "DEHB Body Doubling Odak Oturumu Planı | DopaBrain",
    "heroTitle": "DEHB Body Doubling Odak Oturumu Planı",
    "heroLead": "Tek başına başlama kilidini 25 dakikalık net eşlik sprintiyle aşın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "blank_start_wall",
    "en": "Vague Task Wall — Sitting down with \"clean room\" instead of one visible micro-step",
    "ko": "모호한 목표 장벽 — \"방 정리\"처럼 막연한 과제라 어디서 손댈지 모름"
  },
  {
    "id": "time_blindness",
    "en": "Time Blindness — Losing track of 45 minutes scrolling before opening the actual file",
    "ko": "시간 감각 실종 — 파일 열기 전에 잠깐 딴짓하다 45분이 훌쩍 지나감"
  },
  {
    "id": "low_dopamine_chore",
    "en": "Boring Admin Drag — Paperwork, emails, or chores that offer zero immediate reward",
    "ko": "저자극 행정 피로 — 즉각적 재미가 없는 서류·메일·청소 업무"
  },
  {
    "id": "distraction_drift",
    "en": "Mid-Task Tab Wander — Jumping to unrelated tabs 3 minutes after starting",
    "ko": "3분 만의 탭 이탈 — 시작하고 3분 만에 무의식적으로 다른 창을 염"
  },
  {
    "id": "isolation_slump",
    "en": "Quiet-Room Isolation — Working alone in silence lowers gentle social accountability",
    "ko": "단독 고립감 — 아무도 없는 공간이라 가벼운 사회적 앵커가 없음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Solo Friction — Use Structured 2-Min Check-In + 25-Min Parallel Work",
    "koT": "단독 착수 마찰 높음 — 2분 선언 + 25분 병렬 작업으로 뇌 시동을 거세요",
    "enD": "Body doubling works by supplying a gentle, judgment-free social anchor that reduces initiation friction and time blindness—whether via a friend on mute video, a coffee shop table, or a quiet virtual co-working room.",
    "koD": "바디 더블링은 평가 없는 타인의 조용한 존재감만으로 착수 마찰과 시간 맹점을 낮춰 주는 기법입니다. 지인과 음소거 통화, 카페 창가, 온라인 스터디룸 어디서든 25분 단위로 실행하세요.",
    "enS": "\"Hey! For the next 25 minutes my ONLY goal is [one concrete task]. I’ll check back at :30 with a quick done/progress emoji!\"",
    "koS": "\"안녕! 지금부터 25분 동안 내 유일한 목표는 [구체적 작업 1개]야. 30분 뒤에 완료 여부만 가볍게 공유하자!\"",
    "enL": [
      "Open ONLY the 1 document/tab needed BEFORE starting the 25-minute timer.",
      "Pair with a live muted partner, study-with-me stream, or café corner so gentle presence anchors you.",
      "Celebrate checking out at minute 25—even 60% progress breaks the avoidance wall."
    ],
    "koL": [
      "25분 타이머를 누르기 전에 필요한 문서·탭 딱 1개만 미리 화면에 열어 두세요.",
      "지인 음소거 통화·Study-with-me 영상·카페 테이블 등 가벼운 동반 환경을 세팅하세요.",
      "25분 뒤 완벽히 못 끝냈더라도 착수 장벽을 깼다는 사실 자체를 체크아웃으로 축하하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Drift — Add a Visible Countdown & Midpoint Check",
    "koT": "중간 집중 이탈 — 눈에 보이는 카운트다운과 종료 체크아웃만 붙이세요",
    "enD": "You can start once the goal is concrete; keeping a visible timer and a brief text check-out prevents tab wandering halfway through.",
    "koD": "목표만 구체화하면 시작은 잘 됩니다. 눈에 보이는 타이머와 짧은 완료 인증만 추가하면 중간 이탈이 확 줄어듭니다.",
    "enS": "\"One open tab, 25 visible minutes, quick text check-in when the bell rings.\"",
    "koS": "\"탭은 하나, 타이머는 눈에 보이게 25분, 끝나면 짧은 완료 보고.\"",
    "enL": [
      "Shrink your target so it clearly fits inside 25 minutes.",
      "Keep your phone out of reach until the 5-minute break.",
      "Stack two 25-minute blocks with a 5-minute stretch between them."
    ],
    "koL": [
      "25분 안에 분명히 손에 잡히는 분량으로 목표를 작게 자르세요.",
      "5분 휴식 전까지 스마트폰은 손이 닿지 않는 곳에 두세요.",
      "25분 집중 2세트를 5분 스트레칭을 사이에 두고 이어서 진행하세요."
    ]
  },
  "high": {
    "enT": "Strong Execution Flow — Use Body Doubling as a Bonus Booster",
    "koT": "안정적인 실행 흐름 — 지루한 행정 업무용 부스터로 가볍게 활용하세요",
    "enD": "Your self-starting muscles are steady. Save body-doubling sprints specifically for dull admin days when you want extra lightness and speed.",
    "koD": "스스로 시작하는 힘이 이미 단단합니다. 바디 더블링은 유독 하기 싫은 행정·정리 업무를 가볍게 털어내는 날의 부스터로 쓰면 딱 좋습니다.",
    "enS": "\"Parallel presence turns dull chores into easy 25-minute wins.\"",
    "koS": "\"함께하는 조용한 리듬이 지루한 행정 업무를 25분짜리 가벼운 승리로 바꾼다.\"",
    "enL": [
      "Batch weekly boring paperwork into one Friday body-doubling hour.",
      "Share quick wins with an accountability buddy to keep momentum fun.",
      "Enjoy your clean desk and clear evening afterward."
    ],
    "koL": [
      "매주 귀찮은 서류·정리는 금요일 1시간 바디 더블링에 몰아 처리하세요.",
      "집중 메이트와 짧은 완료 소감을 나누며 리듬을 즐기세요.",
      "깔끔하게 끝낸 뒤의 홀가분한 저녁을 만끽하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_body_doubling_prep_v1";
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
      window.gtag('event', "body_doubling_prep_complete", {
        tool_slug: "adhd-body-doubling-session-prep",
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
      var shareUrl = "https://dopabrain.com/portal/tools/adhd-body-doubling-session-prep.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "adhd-body-doubling-session-prep",
        filename: 'dopabrain-adhd-body-doubling-session-prep-card.png',
        badge: "ADHD FOCUS • BODY-DOUBLING SESSION PREP",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
        accent2: "#06b6d4"
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
