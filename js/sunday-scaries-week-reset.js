/* Sunday Scaries & Monday Anxiety 15-Min Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Sunday Scaries & Monday Anxiety 15-Min Reset Planner | DopaBrain",
    "metaDesc": "Free 12-language Sunday Scaries & Anticipatory Monday Anxiety Reset. Audit 5 Sunday-dread triggers locally and reclaim your evening with a 15-minute brain-dump & Monday Top-1 launch.",
    "keywords": "sunday scaries reset, monday anxiety coping tool, anticipatory work dread planner, sunday evening routine anxiety, reclaim sunday night, dopabrain",
    "kicker": "RECLAIM SUNDAY EVENING • 15-MIN RESET",
    "heroTitle": "Sunday Scaries & Monday Anxiety 15-Min Reset",
    "heroLead": "Feeling a heavy knot in your stomach every Sunday at 4 PM as Monday looms? Rate 5 anticipatory-dread triggers locally to close open loops in 15 minutes and actually enjoy your evening.",
    "chip1": "5 Sunday Triggers",
    "chip2": "Monday Top-1 Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK SUNDAY DREAD SIGNALS (1 = PEACEFUL, 5 = HEAVY DREAD)",
    "step1Title": "What is quietly stealing your Sunday calm right now?",
    "step1Sub": "Your plan stays 100% local in your browser—zero work details are ever sent anywhere.",
    "inputLabel": "Optional: The ONLY 1 tiny first step I will do Monday at 9 AM (100% local):",
    "inputPlaceholder": "Example: Review top 3 priorities with coffee for 10 mins before opening chat pings",
    "ctaBtn": "Build 15-Min Sunday Reset Plan",
    "resultBadge": "STEP 2 • YOUR CALM SUNDAY EVENING PROTOCOL",
    "noteTitle": "My Clear Monday 9 AM First Step",
    "meterLabel": "Sunday Evening Peace Margin",
    "scriptTitle": "Mindset Boundary to Protect Your Remaining Weekend",
    "stepsTitle": "3 Moves to Close the Dread Loop in 15 Minutes",
    "stickyTitle": "Does weekday workload keep spilling into your weekends?",
    "stickySub": "Run the Workplace Stress Triage & 10-Min Shutdown Planner",
    "stickyBtn": "Work Triage →",
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
    "title": "월요병·일요일 저녁 불안 15분 리셋 플래너 | DopaBrain",
    "metaDesc": "일요일 오후 4시만 되면 가슴이 답답해지고 월요일 걱정이 밀려오나요? 5가지 월요병 원인을 비공개로 점검하고 15분 브레인덤프로 일요일 저녁의 평온을 되찾으세요.",
    "kicker": "일요일 저녁 되찾기 · 15분 리셋",
    "heroTitle": "월요병·일요일 저녁 불안 15분 리셋",
    "heroLead": "아직 휴일이 남아 있는데도 월요일 업무와 회의 생각에 일요일 저녁을 통째로 빼앗기고 있나요? 5가지 예기불안 원인을 로컬에서 점검해 15분 만에 머릿속을 비우세요.",
    "chip1": "5가지 월요병 신호",
    "chip2": "월요일 첫 1단계",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 일요일 예기불안 점검 (1 = 평온함, 5 = 매우 답답함)",
    "step1Title": "지금 내 일요일 저녁의 여유를 가장 크게 빼앗는 요소는 무엇인가요?",
    "step1Sub": "모든 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 월요일 아침 9시에 딱 1가지만 먼저 시작할 작은 행동 (100% 로컬):",
    "ctaBtn": "15분 일요일 리셋 플랜 만들기",
    "resultBadge": "2단계 • 일요일 밤을 지키는 15분 프로토콜",
    "noteTitle": "월요일 오전 9시 나의 유일한 첫 행동",
    "meterLabel": "일요일 저녁 평온 여유도",
    "scriptTitle": "남은 주말을 업무 걱정으로부터 지키는 문장",
    "stepsTitle": "15분 안에 월요병 회로를 닫는 3단계",
    "stickyTitle": "평일 업무 압박이 계속 주말까지 넘어오나요?",
    "stickySub": "직장 스트레스 트리아지 & 10분 퇴근 리셋을 확인해 보세요",
    "stickyBtn": "직장 트리아지 →",
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
    "title": "周日焦虑与周一恐惧15分钟重置 | DopaBrain",
    "heroTitle": "周日焦虑15分钟重置",
    "ctaBtn": "生成15分钟重置计划",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "日曜夜・月曜不安15分リセット | DopaBrain",
    "heroTitle": "日曜夜15分リセット",
    "ctaBtn": "15分リセットを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reinicio de Ansiedad del Domingo (15m) | DopaBrain",
    "heroTitle": "Reinicio del Domingo",
    "ctaBtn": "Crear plan de 15 minutos",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset da Ansiedade de Domingo (15m) | DopaBrain",
    "heroTitle": "Reset de Domingo (15m)",
    "ctaBtn": "Criar plano de 15 minutos",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Sonntags-Blues & Montag-Reset (15m) | DopaBrain",
    "heroTitle": "Sonntags-Reset (15m)",
    "ctaBtn": "15-Min-Reset erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Sunday Scaries & Lundi (15m) | DopaBrain",
    "heroTitle": "Reset Dimanche Soir",
    "ctaBtn": "Créer mon reset 15 min",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс воскресной тревоги (15 мин) | DopaBrain",
    "heroTitle": "Воскресный сброс (15м)",
    "ctaBtn": "Создать план на 15 мин",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "संडे स्केरीज़ 15-मिनट रीसेट | DopaBrain",
    "heroTitle": "संडे स्केरीज़ रीसेट",
    "ctaBtn": "15-मिनट प्लान बनाएं",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Kecemasan Minggu Malam (15m) | DopaBrain",
    "heroTitle": "Reset Minggu Malam",
    "ctaBtn": "Buat Rencana 15 Menit",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Pazar Sendromu 15 Dk Sıfırlama | DopaBrain",
    "heroTitle": "Pazar Sendromu Reset",
    "ctaBtn": "15 Dk Plan Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "open_loops",
    "en": "Vague Monday Fog — Worrying about a blurry pile of tasks instead of 1 clear first step",
    "ko": "모호한 월요일 안개 — 구체적 첫 행동 없이 막연한 업무 더미가 머릿속을 맴돔"
  },
  {
    "id": "rest_deficit",
    "en": "Unrestored Weekend — Spending Saturday/Sunday on errands or scrolling without real rest",
    "ko": "충전 실패 주말 — 밀린 집안일과 스크롤로 쉬었다는 느낌이 전혀 없음"
  },
  {
    "id": "dread_event",
    "en": "One Dreaded Meeting or Deadline — A single tense item coloring the whole evening",
    "ko": "부담스런 일정 1개 — 월요일 회의나 마감 하나가 저녁 전체를 덮어버림"
  },
  {
    "id": "inbox_peek",
    "en": "Compulsive Work-Email Peeking — Checking messages \"just to see\" and spiking cortisol",
    "ko": "업무 메신저 훔쳐보기 — \"혹시나\" 하고 열었다가 긴장만 치솟음"
  },
  {
    "id": "social_jetlag",
    "en": "Weekend Sleep Shift — Staying up late and dreading the early Monday alarm",
    "ko": "주말 수면 시차 — 늦잠·늦은 취침으로 월요일 기상 알람이 공포로 다가옴"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Sunday Dread — Run a 10-Min External Brain Dump, Then Hard-Stop",
    "koT": "강한 월요병 예기불안 — 10분 외부 브레인덤프 후 완전히 닫으세요",
    "enD": "Anticipatory anxiety thrives on vague, unscheduled loops spinning inside working memory. Spending exactly 10 minutes writing Monday’s first step on paper lets your brain stop rehearsing it all night.",
    "koD": "예기불안은 머릿속에서 정리되지 않은 막연한 걱정을 먹고 자랍니다. 딱 10분만 종이에 월요일 첫 단계를 꺼내 적고 덮으면 뇌가 밤새 리허설을 멈춥니다.",
    "enS": "\"Worrying on Sunday evening does not solve Monday—it only charges me twice. I wrote down my first 9 AM step, and the rest of tonight belongs to me.\"",
    "koS": "\"일요일 밤에 미리 걱정한다고 월요일이 해결되지 않아—같은 피로를 두 번 치를 뿐이야. 내일 9시 첫 단계를 적어뒀으니 오늘 남은 밤은 온전히 내 시간이야.\"",
    "enL": [
      "Set a 10-minute timer: dump every Monday worry onto paper, circle ONLY 1 first step, then put the paper out of sight.",
      "Close work email/Slack completely until Monday start time—no \"quick peeks.\"",
      "Anchor Sunday night with 1 genuinely pleasurable non-work ritual (warm shower, favorite meal, cozy show, or early sleep)."
    ],
    "koL": [
      "10분 타이머를 켜고 월요일 걱정을 종이에 다 적은 뒤 첫 행동 1개만 동그라미 치고 서랍에 넣으세요.",
      "월요일 출근 시각까지 업무 메일과 메신저 확인을 완전히 차단하세요.",
      "따뜻한 샤워·좋아하는 저녁·포근한 휴식처럼 일요일 밤만의 기분 좋은 의식 1개를 즐기세요."
    ]
  },
  "mid": {
    "enT": "Mild Sunday Restlessness — Prep One Friction-Free Morning Anchor",
    "koT": "은은한 일요일 초조감 — 월요일 아침 마찰 1개만 미리 줄여두세요",
    "enD": "Removing just two tiny Monday-morning decisions (outfit, bag, first task) turns Sunday restlessness into calm readiness.",
    "koD": "월요일 아침의 자잘한 결정 2개(옷·가방·첫 업무)만 미리 정해두면 일요일 저녁의 묘한 초조감이 차분한 준비감으로 바뀝니다.",
    "enS": "\"Monday is already set up simply—I can relax fully into the rest of my Sunday evening.\"",
    "koS": "\"월요일 시작 준비는 이미 깔끔하게 끝냈어—이제 남은 일요일 저녁을 마음껏 누려도 돼.\"",
    "enL": [
      "Lay out Monday’s clothes/bag and pick your Top-1 morning priority in 5 minutes.",
      "Start dimming screens 45 minutes earlier tonight to soften Monday’s alarm.",
      "Plan one small pleasant thing for Monday lunch or afternoon so Monday isn’t all grind."
    ],
    "koL": [
      "5분만 투자해 월요일 옷·가방과 오전 최우선 1가지를 미리 정해두세요.",
      "월요일 기상이 덜 힘들도록 오늘 밤은 평소보다 45분 일찍 화면 조명을 낮추세요.",
      "월요일 점심이나 오후에 즐길 소소한 즐거움 1가지를 미리 예약해 두세요."
    ]
  },
  "high": {
    "enT": "Peaceful Sunday Baseline — Protect Your Weekend Boundary",
    "koT": "평온한 일요일 저녁 — 지금의 건강한 주말 경계를 지켜주세요",
    "enD": "Your weekend recovery and Monday clarity are in healthy balance. Keep protecting a calm Sunday transition so weeks start steady instead of frantic.",
    "koD": "주말 회복과 월요일 준비가 균형 있게 유지되고 있습니다. 매주 시작이 흔들리지 않도록 지금의 편안한 일요일 전환 루틴을 이어가세요.",
    "enS": "\"I am entering the new week rested, clear on my first step, and grounded in my pace.\"",
    "koS": "\"충분히 쉬고 첫걸음이 명확한 상태로 이번 주도 내 페이스로 차분하게 시작할 수 있어.\"",
    "enL": [
      "Keep Monday’s first 30 minutes free of reactive inbox chaos whenever possible.",
      "Protect Sunday evenings as a consistent low-pressure recharge zone.",
      "Carry your calm morning launch routine into Monday."
    ],
    "koL": [
      "월요일 첫 30분은 가급적 알림 대응 대신 내 핵심 우선순위로 시작하세요.",
      "일요일 저녁을 꾸준히 저자극 회복 시간으로 지켜주세요.",
      "편안한 아침 기상 루틴을 월요일에도 그대로 이어가세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_sunday_reset_v1";
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
      window.gtag('event', "sunday_reset_complete", {
        tool_slug: "sunday-scaries-week-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/sunday-scaries-week-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "sunday-scaries-week-reset",
        filename: 'dopabrain-sunday-scaries-week-reset-card.png',
        badge: "RECLAIM SUNDAY EVENING • 15-MIN RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f97316",
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
