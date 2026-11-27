/* Time-Blindness & Realistic Departure Buffer Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Time-Blindness & Realistic Departure Buffer Planner | DopaBrain",
    "metaDesc": "Always running 10 minutes late because \"one last quick thing\" ate your commute margin? Audit 5 planning-fallacy traps locally and build a backwards-scheduled departure routine.",
    "kicker": "EXECUTIVE FUNCTION • ADHD TIME-BLINDNESS & DEPARTURE BUFFER",
    "heroTitle": "Time-Blindness & Realistic Departure Buffer Planner",
    "heroLead": "Always running 10 minutes late because \"one last quick thing\" ate your commute margin? Audit 5 planning-fallacy traps locally and build a backwards-scheduled departure routine.",
    "chip1": "5 Time Traps",
    "chip2": "Backwards Buffer",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR DEPARTURE TIME LEAKS (1 = ON TIME, 5 = ALWAYS RUSHED)",
    "step1Title": "Where do the hidden 12 minutes vanish before you leave?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My next appointment & real \"shoes-on\" launch time (100% local):",
    "ctaBtn": "Build My Backwards Departure Buffer",
    "resultBadge": "STEP 2 • YOUR PLANNING-FALLACY-PROOF DEPARTURE PROTOCOL",
    "noteTitle": "My Hard \"Out-the-Door\" Time",
    "meterLabel": "Arrival Calm & Margin",
    "scriptTitle": "No-Last-Minute-Task Rule",
    "stepsTitle": "3 Fast Fixes for Time Blindness & Chronic Rushing",
    "stickyTitle": "Want a visible countdown clock to keep prep time tangible?",
    "stickySub": "Open the free Visible Countdown Timer",
    "stickyBtn": "Open Timer →",
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
    "title": "시간 맹점(만성 지각) 해결·현실 출발 버퍼 설계기 | DopaBrain",
    "metaDesc": "\"딱 2분만 이것만 하고 나가야지\" 하다가 늘 10분씩 아슬아슬하게 늦나요? 5가지 계획 오류 함정을 점검하고 역산 출발 버퍼 루틴으로 마음 편한 도착을 만드세요.",
    "kicker": "실행기능 · 시간 맹점(만성 지각) 출발 버퍼 계산기",
    "heroTitle": "시간 맹점(만성 지각) 해결·현실 출발 버퍼 설계기",
    "heroLead": "\"딱 2분만 이것만 하고 나가야지\" 하다가 늘 10분씩 아슬아슬하게 늦나요? 5가지 계획 오류 함정을 점검하고 역산 출발 버퍼 루틴으로 마음 편한 도착을 만드세요.",
    "chip1": "5가지 시간 함정",
    "chip2": "역산 출발 버퍼",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 외출·미팅 전 시간 누수 습관 점검 (1 = 여유, 5 = 늘 촉박)",
    "step1Title": "집이나 자리에서 출발하기 직전 12분이 늘 사라지는 구간은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 다음 약속 시각과 실제 현관문 통과(신발 신는) 시각 (100% 로컬):",
    "ctaBtn": "내 역산 출발 버퍼 플랜 보기",
    "resultBadge": "2단계 • 계획 오류를 막는 역산 출발 프로토콜",
    "noteTitle": "현관문 통과 절대 시각",
    "meterLabel": "도착 여유도",
    "scriptTitle": "출발 15분 전 추가 작업 금지 룰",
    "stepsTitle": "시간 맹점과 아슬아슬한 지각을 끝내는 3단계",
    "stickyTitle": "준비 시간이 눈에 보이도록 카운트다운 타이머를 띄워 두고 움직여 볼까요?",
    "stickySub": "무료 시각 카운트다운 타이머 열기",
    "stickyBtn": "타이머 열기 →",
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
    "title": "时间盲症与现实出发缓冲时间规划器 | DopaBrain",
    "heroTitle": "时间盲症与现实出发缓冲时间规划器",
    "heroLead": "补齐找钥匙与停车等隐形过渡时间，用倒推闹钟告别总是迟到10分钟。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "時間盲・遅刻グセ解消の逆算バッファ設計 | DopaBrain",
    "heroTitle": "時間盲・遅刻グセ解消の逆算バッファ設計",
    "heroLead": "鍵・駐車・移動の見えない15分を逆算し、余裕ある出発リズムを作ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de Margen de Salida contra la Ceguera Temporal | DopaBrain",
    "heroTitle": "Planificador de Margen de Salida contra la Ceguera Temporal",
    "heroLead": "Evita llegar 10 min tarde calculando hacia atrás los minutos ocultos de transición.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Margem de Saída contra Cegueira Temporal | DopaBrain",
    "heroTitle": "Planejador de Margem de Saída contra Cegueira Temporal",
    "heroLead": "Pare de se atrasar 10 min somando transições invisíveis e alarmes reversos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Zeitblindheit & Realistischer Abfahrts-Puffer-Planer | DopaBrain",
    "heroTitle": "Zeitblindheit & Realistischer Abfahrts-Puffer-Planer",
    "heroLead": "Beende chronisches Zuspätkommen mit Rückwärts-Planung und +15-Min-Übergangspuffer.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Marge de Départ & Cécité Temporelle | DopaBrain",
    "heroTitle": "Planificateur Marge de Départ & Cécité Temporelle",
    "heroLead": "Stoppez les retards de 10 min en ajoutant les transitions cachées à rebours.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Планировщик запаса времени выхода при «слепоте ко времени» | DopaBrain",
    "heroTitle": "Планировщик запаса времени выхода при «слепоте ко времени»",
    "heroLead": "Учтите скрытые 15 минут сборов и перестаньте опаздывать на 10 минут.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "टाइम-ब्लाइंडनेस और प्रस्थान बफ़र प्लानर | DopaBrain",
    "heroTitle": "टाइम-ब्लाइंडनेस और प्रस्थान बफ़र प्लानर",
    "heroLead": "छुपे हुए 15 मिनट जोड़ें और उल्टी गिनती अलार्म से समय पर पहुंचें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Buffer Berangkat Anti Telat & Time-Blindness | DopaBrain",
    "heroTitle": "Perencana Buffer Berangkat Anti Telat & Time-Blindness",
    "heroLead": "Hentikan kebiasaan telat 10 menit dengan jadwal mundur +15 menit transisi.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Zaman Körlüğü ve Gerçekçi Çıkış Tampon Planlayıcı | DopaBrain",
    "heroTitle": "Zaman Körlüğü ve Gerçekçi Çıkış Tampon Planlayıcı",
    "heroLead": "Gizli geçiş dakikalarını ekleyip geriye dönük alarmlarla geç kalmayı bitirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "best_case_commute",
    "en": "Best-Case Traffic Math — Using the fastest-ever 20-min drive instead of real 32-min average",
    "ko": "최단 기록 기준 계산 — 평소 32분 걸리는 길을 역대 최단 20분으로 계산함"
  },
  {
    "id": "one_more_task_trap",
    "en": "\"Just 2 Minutes\" Trap — Starting dishes or an email 6 minutes before leaving",
    "ko": "출발 직전 딴짓 — 나가기 6분 전에 갑자기 메일 답장이나 정리를 시작함"
  },
  {
    "id": "invisible_transitions",
    "en": "Invisible Transition Minutes — Forgetting keys, elevator, parking, and walking to the door",
    "ko": "전환 시간 누락 — 신발·열쇠·엘리베이터·주차 후 도보 10분을 계산에서 뺌"
  },
  {
    "id": "clock_blind_prep",
    "en": "No Mid-Prep Checkpoint — Getting ready without a 15-minute warning chime",
    "ko": "중간 알림 부재 — 15분 전 경고음 없이 준비하다 시계 보고 깜짝 놀람"
  },
  {
    "id": "waiting_boredom_dread",
    "en": "Fear of Arriving Early — Delaying departure to avoid 5 minutes of quiet waiting",
    "ko": "일찍 도착 거부감 — 5분 먼저 기다리는 게 지루해 일부러 늦게 출발함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Time Blindness — Add +15 Min Hidden-Transition Buffer & Two Audio Chimes",
    "koT": "시간 맹점 강함 — 숨은 전환 시간 +15분과 2단계 알람(준비 종료/문 통과)을 고정하세요",
    "enD": "Kahneman & Tversky’s Planning Fallacy research shows human brains estimate best-case scenarios while ignoring transition friction (keys, parking, elevators). Backwards scheduling from \"arrive 10 min early with a podcast\" removes rushing cortisol completely.",
    "koD": "카너먼과 트버스키의 계획 오류 연구에 따르면 뇌는 늘 최선의 시간만 계산하고 전환 마찰(주차·엘리베이터·도보)을 빼먹습니다. \"10분 일찍 도착해 좋아하는 음악 듣기\" 기준으로 역산하세요.",
    "enS": "\"Zero new tasks inside the final 15 minutes—I’d rather read peacefully for 8 minutes early than sprint breathless.\"",
    "koS": "\"출발 15분 전엔 새 작업 절대 금지. 헐레벌떡 뛰는 것보다 8분 일찍 도착해 차분히 숨 고르는 게 훨씬 낫다.\"",
    "enL": [
      "Add a flat +15 minutes to every GPS commute estimate for shoes, keys, parking, and entry walk.",
      "Set 2 labeled phone alarms: \"Stop all tasks & pack\" (-20 min) and \"Lock door NOW\" (-5 min).",
      "Pack an enjoyable 10-minute early-arrival treat (book, podcast, coffee) so arriving early feels rewarding."
    ],
    "koL": [
      "지도 앱 소요 시간에 신발·주차·도보 전환 버퍼로 무조건 +15분을 더하세요.",
      "알람 2개를 이름으로 고정하세요: \"모든 일 중단·짐 챙기기(-20분)\", \"지금 현관문 통과(-5분)\".",
      "일찍 도착했을 때 즐길 팟캐스트·전자책·커피 루틴을 준비해 10분 여유를 보상으로 바꾸세요."
    ]
  },
  "mid": {
    "enT": "Occasional Last-Minute Rush — Pre-Stage Bag & Lock a 15-Min Warning Alarm",
    "koT": "가끔 아슬아슬함 — 전날 가방 세팅 + 출발 15분 전 알림만 넣으면 여유로워집니다",
    "enD": "Your timing is usually close; eliminating the final 5-minute key/wallet hunt makes departures effortless.",
    "koD": "대체로 잘 맞추지만 막판 5분 물건 찾기만 없애도 훨씬 여유롭게 도착합니다.",
    "enS": "\"Keys and bag by the door the night before; stop new tasks 15 minutes early.\"",
    "koS": "\"가방과 열쇠는 전날 현관에, 출발 15분 전엔 새 작업 멈춤.\"",
    "enL": [
      "Stage wallet, keys, and charger in one landing tray by the exit.",
      "Use realistic average travel time rather than best-case traffic.",
      "Keep a 10-minute calendar buffer before every call or departure."
    ],
    "koL": [
      "지갑·열쇠·이어폰을 현관 앞 트레이 한 곳에 고정하세요.",
      "최단 기록이 아닌 평균 소요 시간으로 출발 시각을 잡으세요.",
      "모든 미팅·외출 앞 10분은 빈 완충 블록으로 비워 두세요."
    ]
  },
  "high": {
    "enT": "Calm & Punctual Rhythm — Generous Time Margin",
    "koT": "여유로운 시간 감각 — 안정적인 완충 리듬을 지키고 계십니다",
    "enD": "Arriving unhurried protects your nervous system and sets a calm tone for every meeting.",
    "koD": "서두르지 않는 출발 습관이 하루의 긴장을 크게 줄여 주고 있습니다.",
    "enS": "\"Arrive calm, breathe once, begin clearly.\"",
    "koS": "\"여유 있게 도착해 숨 한 번 고르고 선명하게 시작한다.\"",
    "enL": [
      "Keep enjoying calm 5–10 minute arrival buffers.",
      "Use early minutes for quiet breathing rather than frantic inbox checking.",
      "Share realistic buffer habits gently when planning group outings."
    ],
    "koL": [
      "5~10분 먼저 도착하는 기분 좋은 여유를 계속 누리세요.",
      "먼저 도착한 몇 분은 메일 확인 대신 조용한 호흡으로 쓰세요.",
      "여럿이 움직일 때도 넉넉한 전환 버퍼를 자연스럽게 제안해 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_time_buffer_planner_v1";
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
      window.gtag('event', "time_buffer_planner_complete", {
        tool_slug: "chronic-lateness-time-buffer",
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
      var shareUrl = "https://dopabrain.com/portal/tools/chronic-lateness-time-buffer.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "chronic-lateness-time-buffer",
        filename: 'dopabrain-chronic-lateness-time-buffer-card.png',
        badge: "EXECUTIVE FUNCTION • ADHD TIME-BLINDNESS & DEPARTURE BUFFER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
        accent2: "#f59e0b"
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
