/* 3 PM Energy Crash & 10-Min NSDR Recovery Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "3 PM Energy Crash & 10-Min NSDR Recovery Planner | DopaBrain",
    "metaDesc": "Hitting a brick wall every afternoon between 2 and 4 PM? Audit 5 circadian and metabolic crash drivers locally and build a caffeine-free 10-minute NSDR or daylight recovery protocol.",
    "kicker": "ENERGY SCIENCE • 3 PM CRASH & NSDR RECOVERY PLANNER",
    "heroTitle": "3 PM Energy Crash & 10-Min NSDR Recovery Planner",
    "heroLead": "Hitting a brick wall every afternoon between 2 and 4 PM? Audit 5 circadian and metabolic crash drivers locally and build a caffeine-free 10-minute NSDR or daylight recovery protocol.",
    "chip1": "5 Crash Drivers",
    "chip2": "10-Min NSDR Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR 2–4 PM ENERGY CRASH PATTERNS (1 = STEADY, 5 = CRASHING)",
    "step1Title": "What makes your afternoon focus drop off a cliff?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My 10-minute caffeine-free 2:30 PM recharge move (100% local):",
    "ctaBtn": "Build My 3 PM Recovery Protocol",
    "resultBadge": "STEP 2 • YOUR CAFFEINE-FREE 3 PM RECHARGE PROTOCOL",
    "noteTitle": "My Scheduled 2:30 PM Recharge",
    "meterLabel": "Afternoon Energy Stability",
    "scriptTitle": "Post-Lunch Energy Reset Cue",
    "stepsTitle": "3 Fast Ways to Beat the Post-Lunch Dip Without Ruining Tonight’s Sleep",
    "stickyTitle": "Want gentle brown noise for a 10-minute eyes-closed NSDR rest?",
    "stickySub": "Open the free White Noise Mixer for 10-min rest",
    "stickyBtn": "10m Rest Sound →",
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
    "title": "오후 3시 에너지 급락 & 10분 NSDR 회복 플래너 | DopaBrain",
    "metaDesc": "매일 오후 2~4시만 되면 눈꺼풀이 천근만근 무거워지나요? 일주기 리듬과 식후 에너지 급락 5대 원인을 점검하고 카페인 없이 10분 만에 활력을 되찾는 NSDR·산책 회복 루틴을 설계하세요.",
    "kicker": "에너지 회복 · 오후 3시 급격한 졸음·NSDR 10분 리커버리",
    "heroTitle": "오후 3시 에너지 급락 & 10분 NSDR 회복 플래너",
    "heroLead": "매일 오후 2~4시만 되면 눈꺼풀이 천근만근 무거워지나요? 일주기 리듬과 식후 에너지 급락 5대 원인을 점검하고 카페인 없이 10분 만에 활력을 되찾는 NSDR·산책 회복 루틴을 설계하세요.",
    "chip1": "5대 오후 급락 원인",
    "chip2": "10분 NSDR 회복",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 오후 2~4시 에너지 급락 패턴 점검 (1 = 안정, 5 = 극심한 졸음)",
    "step1Title": "오후 시간대 집중력을 가장 크게 떨어뜨리는 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오후 2시 30분에 실천할 카페인 없는 10분 회복 행동 (100% 로컬):",
    "ctaBtn": "내 오후 3시 에너지 회복 플랜 보기",
    "resultBadge": "2단계 • 카페인 없는 오후 3시 활력 회복 프로토콜",
    "noteTitle": "오후 2시 30분 회복 앵커",
    "meterLabel": "오후 에너지 안정도",
    "scriptTitle": "식후 활력 리셋 문구",
    "stepsTitle": "밤잠을 망치지 않고 오후 졸음을 이기는 3단계",
    "stickyTitle": "10분간 눈을 감고 쉬는 NSDR 휴식에 잔잔한 브라운 노이즈를 켜 볼까요?",
    "stickySub": "무료 브라운 노이즈·빗소리 믹서 열기",
    "stickyBtn": "10분 휴식음 →",
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
    "title": "下午3点精力骤降与10分钟NSDR恢复方案 | DopaBrain",
    "heroTitle": "下午3点精力骤降与10分钟NSDR恢复方案",
    "heroLead": "不靠晚间咖啡，用饭后步行、采光与10分钟深度静休化解午后困倦。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "午後3時の眠気＆10分NSDRリカバリー設計 | DopaBrain",
    "heroTitle": "午後3時の眠気＆10分NSDRリカバリー設計",
    "heroLead": "午後のコーヒーに頼らず食後散歩と10分閉眼休息で午後の集中を取り戻します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Protocolo de Recuperación para el Bajón de las 3 PM | DopaBrain",
    "heroTitle": "Protocolo de Recuperación para el Bajón de las 3 PM",
    "heroLead": "Supera la somnolencia vespertina sin café tarde con caminata y descanso NSDR de 10 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Protocolo de Recuperação para a Queda das 15h | DopaBrain",
    "heroTitle": "Protocolo de Recuperação para a Queda das 15h",
    "heroLead": "Vença o cansaço pós-almoço sem café tarde com caminhada leve e NSDR de 10 min.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "15-Uhr-Tief & 10-Minuten-NSDR Erholungsplan | DopaBrain",
    "heroTitle": "15-Uhr-Tief & 10-Minuten-NSDR Erholungsplan",
    "heroLead": "Überwinde das Nachmittagstief ohne späten Kaffee mit Licht, Spaziergang & NSDR.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Protocole Coup de Barre 15h & Pause NSDR 10 Min | DopaBrain",
    "heroTitle": "Protocole Coup de Barre 15h & Pause NSDR 10 Min",
    "heroLead": "Retrouvez votre énergie l’après-midi sans café tardif grâce à la marche et au repos NSDR.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Восстановление после дневного спада в 15:00 и NSDR | DopaBrain",
    "heroTitle": "Восстановление после дневного спада в 15:00 и NSDR",
    "heroLead": "Преодолейте послеобеденную сонливость без позднего кофе за 10 минут отдыха.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "दोपहर 3 बजे की थकान और 10-मिनट NSDR रिकवरी | DopaBrain",
    "heroTitle": "दोपहर 3 बजे की थकान और 10-मिनट NSDR रिकवरी",
    "heroLead": "बिना कॉफी के हल्की सैर और 10-मिनट NSDR विश्राम से दोपहर की सुस्ती दूर करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Protokol Pemulihan Lelah Jam 3 Sore & NSDR 10 Menit | DopaBrain",
    "heroTitle": "Protokol Pemulihan Lelah Jam 3 Sore & NSDR 10 Menit",
    "heroLead": "Atasi kantuk setelah makan siang tanpa kopi sore dengan jalan ringan dan NSDR.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Saat 15 Enerji Düşüşü ve 10 Dk NSDR Toparlanma | DopaBrain",
    "heroTitle": "Saat 15 Enerji Düşüşü ve 10 Dk NSDR Toparlanma",
    "heroLead": "Geç kahve içmeden yürüyüş, gün ışığı ve 10 dk NSDR ile öğleden sonra odağını koruyun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "carb_heavy_lunch",
    "en": "Refined-Carb Lunch Spike — Pasta, white rice, or sweet drinks with low protein/fiber",
    "ko": "정제 탄수화물 점심 — 단백질·식이섬유 없이 면·빵·달달한 음료 위주 식사"
  },
  {
    "id": "zero_lunch_walk",
    "en": "Desk-Locked Afternoon — Zero 5-minute standing or walking after eating",
    "ko": "식후 바로 착석 — 점심 먹고 5분도 안 걷고 바로 의자에 앉음"
  },
  {
    "id": "heavy_task_at_trough",
    "en": "Wrong Task at 3 PM — Scheduling heavy analytical writing during the natural circadian trough",
    "ko": "오후 3시 고난도 배치 — 생체 리듬 최저점에 가장 무거운 업무를 배치"
  },
  {
    "id": "scroll_break_trap",
    "en": "Fake Phone Break — Scrolling feeds at lunch instead of letting eyes & mind actually rest",
    "ko": "가짜 스마트폰 휴식 — 쉬는 시간에도 눈과 뇌를 계속 화면에 혹사함"
  },
  {
    "id": "sleep_debt_carryover",
    "en": "Sub-7h Sleep Carryover — Arriving at 2 PM already running on accumulated sleep debt",
    "ko": "수면 부채 누적 — 7시간 미만 수면이 쌓여 오후에 한꺼번에 쏟아짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "Steep 3 PM Trough — Pair a 10-Min Post-Lunch Walk + 10-Min Eyes-Closed NSDR",
    "koT": "오후 급락 큼 — 식후 10분 걷기 + 10분 눈 감기 NSDR 휴식으로 리듬을 되살리세요",
    "enD": "Human circadian biology naturally includes a mild alertness dip ~7–8 hours after waking—amplified sharply by high-glycemic lunches. A 10-minute post-meal walk flattens glucose swings, and 10 minutes of Non-Sleep Deep Rest (NSDR) restores alertness without late caffeine.",
    "koD": "인간의 일주기 리듬은 기상 후 7~8시간 뒤에 자연스러운 졸음 골짜기가 오며, 고혈당 점심이 이를 증폭시킵니다. 식후 10분 걷기로 혈당을 완만하게 만들고, 10분 눈 감고 쉬는 NSDR 휴식을 쓰면 커피 없이도 오후가 맑아집니다.",
    "enS": "\"Ten minutes of sunlight after lunch + ten minutes of eyes-closed quiet beats a 3 PM double espresso.\"",
    "koS": "\"식후 10분 햇빛 걷기와 10분 눈 감은 정적이 오후 3시 에스프레소 두 잔보다 낫다.\"",
    "enL": [
      "Eat protein/greens first at lunch and take a brisk 8–10 minute walk right afterward.",
      "If drowsiness hits around 2:30 PM, close your eyes for 10 minutes of slow exhales (no phone, max 20 min).",
      "Move light admin, replies, or collaborative calls into the 2:30–4:00 PM trough and keep deep work in the morning."
    ],
    "koL": [
      "점심에 단백질·채소를 먼저 먹고 식후 8~10분간 가볍게 걸어 혈당 급락을 막으세요.",
      "오후 2시 30분에 졸음이 오면 폰을 덮고 10분간 눈을 감고 길게 숨을 내쉬세요(최대 20분).",
      "오후 2시 반~4시엔 가벼운 소통·정리 업무를 배치하고 고난도 작업은 오전에 두세요."
    ]
  },
  "mid": {
    "enT": "Mild Afternoon Dip — Add Protein Balance & a 5-Minute Outdoor Reset",
    "koT": "가벼운 식곤증 — 점심 단백질 보강 + 5분 야외 바람 쐬기면 충분합니다",
    "enD": "Your baseline energy holds well; brief afternoon daylight and water keep your late-afternoon focus crisp.",
    "koD": "기초 체력은 탄탄합니다. 짧은 오후 햇빛과 시원한 물 한 컵만 더해도 퇴근 전까지 집중이 깔끔히 이어집니다.",
    "enS": "\"Step outside for 5 minutes of sky light and water at 2:30 PM.\"",
    "koS": "\"오후 2시 30분, 5분 바깥 하늘 보기와 물 한 컵.\"",
    "enL": [
      "Add protein or nuts to lunch to steady afternoon glucose.",
      "Step outside or near a bright window for 5 minutes at 2:30 PM.",
      "Stand up for 15 minutes during afternoon check-ins."
    ],
    "koL": [
      "점심에 단백질이나 견과류를 곁들여 오후 혈당을 안정화하세요.",
      "오후 2시 30분에 5분간 바깥이나 밝은 창가에서 눈을 쉬게 하세요.",
      "오후 회의나 정리 업무 중 15분은 서서 진행해 보세요."
    ]
  },
  "high": {
    "enT": "Steady All-Day Energy — Smooth Circadian Alignment",
    "koT": "하루 종일 안정적인 에너지 — 훌륭한 생체 리듬 균형입니다",
    "enD": "Your sleep, nutrition, and task timing support steady afternoon vitality without relying on late stimulants.",
    "koD": "수면·식사·업무 배치가 생체 리듬과 아주 잘 맞물려 있습니다. 지금의 리듬을 유지하세요.",
    "enS": "\"Work with my biological rhythm instead of fighting it.\"",
    "koS": "\"생체 리듬과 싸우지 않고 리듬에 올라타 일한다.\"",
    "enL": [
      "Keep protecting 7.5+ hours of consistent sleep.",
      "Continue pairing deep thinking with your peak morning energy.",
      "Enjoy caffeine-free afternoon hydration."
    ],
    "koL": [
      "7시간 30분 이상의 일정한 수면 리듬을 계속 지켜 나가세요.",
      "핵심 사고 업무는 가장 맑은 오전 시간대에 계속 배치하세요.",
      "오후에는 카페인 없는 수분 보충을 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_afternoon_slump_recovery_v1";
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
      window.gtag('event', "afternoon_slump_recovery_complete", {
        tool_slug: "afternoon-slump-recovery-protocol",
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
      var shareUrl = "https://dopabrain.com/portal/tools/afternoon-slump-recovery-protocol.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "afternoon-slump-recovery-protocol",
        filename: 'dopabrain-afternoon-slump-recovery-protocol-card.png',
        badge: "ENERGY SCIENCE • 3 PM CRASH & NSDR RECOVERY PLANNER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
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
