/* Career Burnout & Micro-Sabbatical Recovery Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Career Burnout & Micro-Sabbatical Recovery Planner | DopaBrain",
    "metaDesc": "Not sure whether you need a new career or just real rest? Audit 5 career-drain signals locally and design a realistic 72-hour to 2-week micro-sabbatical before making huge jumps.",
    "kicker": "CAREER PLATEAU • MICRO-SABBATICAL PLAN",
    "heroTitle": "Career Burnout & Micro-Sabbatical Recovery Planner",
    "heroLead": "Not sure whether you need a new career or just real rest? Audit 5 career-drain signals locally and design a realistic 72-hour to 2-week micro-sabbatical before making huge jumps.",
    "chip1": "5 Career Drains",
    "chip2": "Rest vs Pivot Clarity",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT YOUR CAREER EXHAUSTION SIGNALS (1 = FRESH, 5 = DEPLETED)",
    "step1Title": "What is quietly draining your motivation at work right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One realistic rest window (weekend, 3 days, or PTO week) I can claim soon (100% local):",
    "ctaBtn": "Diagnose Drain & Plan Micro-Sabbatical",
    "resultBadge": "STEP 2 • YOUR CAREER RECOVERY & CLARITY ROADMAP",
    "noteTitle": "Protected Micro-Sabbatical Window",
    "meterLabel": "Career Energy & Alignment Score",
    "scriptTitle": "Clean PTO / Unplugged Reset Message",
    "stepsTitle": "3 Smart Moves Before Making Any Major Career Jump",
    "stickyTitle": "Want a full burnout score across exhaustion, cynicism & efficacy?",
    "stickySub": "Take the free Burnout Test to benchmark your baseline",
    "stickyBtn": "Burnout Test →",
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
    "title": "커리어 번아웃·정체기 미니 안식 회복 플래너 | DopaBrain",
    "metaDesc": "이직이 답인지, 아니면 진짜 휴식이 필요한지 헷갈리나요? 5가지 커리어 소진 신호를 비공개로 점검하고 충동 결정 전 현실적인 미니 안식 회복 플랜을 설계하세요.",
    "kicker": "커리어 정체기·번아웃 · 미니 안식월 설계",
    "heroTitle": "커리어 번아웃·정체기 미니 안식 회복 플래너",
    "heroLead": "이직이 답인지, 아니면 진짜 휴식이 필요한지 헷갈리나요? 5가지 커리어 소진 신호를 비공개로 점검하고 충동 결정 전 현실적인 미니 안식 회복 플랜을 설계하세요.",
    "chip1": "5가지 커리어 소진",
    "chip2": "휴식 vs 전환 판단",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 커리어 소진·정체 신호 점검 (1 = 양호, 5 = 심각)",
    "step1Title": "지금 일에 대한 의욕을 가장 조용히 갉아먹고 있는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 가까운 시일 내 확보할 수 있는 현실적인 완전 휴식 구간 (100% 로컬):",
    "ctaBtn": "소진 유형 점검 & 미니 안식 플랜 보기",
    "resultBadge": "2단계 • 커리어 회복 및 방향 명료화 로드맵",
    "noteTitle": "내가 지키기로 한 미니 안식 휴식 구간",
    "meterLabel": "커리어 에너지·정렬도 지수",
    "scriptTitle": "죄책감 없는 연차·완전 오프라인 공지 문장",
    "stepsTitle": "큰 커리어 결정을 내리기 전 반드시 거칠 3단계",
    "stickyTitle": "피로·냉소·효능감 저하까지 포함한 전체 번아웃 지수를 확인해 볼까요?",
    "stickySub": "무료 번아웃 테스트로 현재 커리어 회복 필요도 측정하기",
    "stickyBtn": "번아웃 테스트 →",
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
    "title": "职业倦怠与微间隔期恢复规划 | DopaBrain",
    "heroTitle": "职业倦怠与微间隔期恢复规划",
    "heroLead": "区分精力耗竭与职业错配，在做重大转行决定前规划3-14天离线重启。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "キャリア燃え尽き＆ミニ休養プランナー | DopaBrain",
    "heroTitle": "キャリア燃え尽き＆ミニ休養プランナー",
    "heroLead": "単なる疲労と仕事ミスマッチを見極め、3〜14日の完全オフ回復を設計します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Micro-Sabático y Burnout Laboral | DopaBrain",
    "heroTitle": "Plan de Micro-Sabático y Burnout Laboral",
    "heroLead": "Distingue el agotamiento de un cambio de carrera y diseña un descanso real sin conexión.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Micro-Sabático e Carreira | DopaBrain",
    "heroTitle": "Planejador de Micro-Sabático e Carreira",
    "heroLead": "Diferencie exaustão de desalinhamento profissional e planeje um reset desconectado.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Karriere-Burnout & Mikro-Sabbatical-Planer | DopaBrain",
    "heroTitle": "Karriere-Burnout & Mikro-Sabbatical-Planer",
    "heroLead": "Trenne Erschöpfung von Job-Mismatch und plane eine echte 3–14-tägige Offline-Auszeit.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Micro-Sabbatique & Burnout Pro | DopaBrain",
    "heroTitle": "Plan Micro-Sabbatique & Burnout Pro",
    "heroLead": "Distinguez fatigue intense et reconversion grâce à une vraie coupure de 3 à 14 jours.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План микро-саббатикала при выгорании | DopaBrain",
    "heroTitle": "План микро-саббатикала при выгорании",
    "heroLead": "Отличите истощение от неверной карьеры и запланируйте 3–14 дней полного офлайна.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "करियर बर्नआउट व माइक्रो-सबैटिकल प्लानर | DopaBrain",
    "heroTitle": "करियर बर्नआउट व माइक्रो-सबैटिकल प्लानर",
    "heroLead": "थकान और गलत करियर में अंतर समझें और बड़ा फैसला लेने से पहले 3–14 दिन का रीसेट प्लान करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Micro-Sabbatical & Burnout Karier | DopaBrain",
    "heroTitle": "Perencana Micro-Sabbatical & Burnout Karier",
    "heroLead": "Bedakan kelelahan kerja dengan salah jalur karier lewat jeda offline 3–14 hari.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kariyer Tükenmişliği ve Mikro İzin Planlayıcı | DopaBrain",
    "heroTitle": "Kariyer Tükenmişliği ve Mikro İzin Planlayıcı",
    "heroLead": "Yorgunluğu kariyer uyumsuzluğundan ayırın ve 3–14 günlük çevrimdışı mola planlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "sunday_dread",
    "en": "Chronic Cynicism — Feeling detached or numb toward projects you once cared about",
    "ko": "만성 냉소·무감각 — 예전엔 재밌던 일에도 아무 감흥이나 의미가 느껴지지 않음"
  },
  {
    "id": "value_mismatch",
    "en": "Values Friction — Spending most of your week on work that conflicts with your core strengths",
    "ko": "가치관·강점 불일치 — 내 강점과 전혀 맞지 않는 업무가 일주일 대부분을 차지함"
  },
  {
    "id": "zero_unplug",
    "en": "Never Truly Off — Checking work chat on evenings, weekends, or vacations",
    "ko": "완전 단절 부재 — 퇴근 후·주말·휴가에도 업무 메신저를 계속 확인함"
  },
  {
    "id": "growth_stall",
    "en": "Learning Plateau — Repeating familiar tasks for 12+ months with no craft growth",
    "ko": "성장 정체기 — 1년 이상 새로운 배움 없이 익숙한 일만 기계적으로 반복함"
  },
  {
    "id": "decision_escape",
    "en": "Escape Fantasy — Browsing job boards at midnight purely for instant emotional relief",
    "ko": "도피성 이직 탐색 — 실제 준비보다 당장의 답답함을 잊으려 밤마다 채용공고만 봄"
  }
];
  var TIERS = {
  "low": {
    "enT": "Deep Depletion — Rest First, Decide Second (Never Pivot on Empty)",
    "koT": "깊은 소진 상태 — 이직·퇴사 결정 전에 먼저 진짜 휴식부터 채우세요",
    "enD": "Christina Maslach’s burnout research warns that exhausted brains misread rest needs as total career failure—or jump into an identical high-burnout role. Claim a true 72-hour unplugged micro-sabbatical before making irreversible calls.",
    "koD": "번아웃 연구에 따르면 에너지가 바닥난 뇌는 단순 피로를 커리어 실패로 오해하거나, 비슷한 소진 환경으로 성급히 이동하기 쉽습니다. 큰 결정을 내리기 전 최소 72시간 완전 오프라인 휴식을 먼저 확보하세요.",
    "enS": "\"I’ll be completely offline from [Date] to [Date] to recharge. [Colleague] is covering urgent requests, and I’ll follow up refreshed on [Return Date].\"",
    "koS": "\"[날짜]부터 [날짜]까지 재충전을 위해 완전 오프라인 휴가를 사용합니다. 긴급 건은 [동료]님이 대응하며 복귀 후 순차 회신드리겠습니다.\"",
    "enL": [
      "Book a 3-to-4-day unplugged break within the next 30 days and remove work chat from your phone.",
      "Spend Day 1 resting passively, Day 2 outdoors or moving, and ONLY on Day 3 write 3 things you want more/less of.",
      "Separate \"bad workload/culture\" from \"wrong profession\" once your sleep is restored."
    ],
    "koL": [
      "30일 안에 3~4일 완전 단절 휴식을 예약하고 기간 중 폰에서 업무 메신저를 잠시 지우세요.",
      "1일 차는 완전 수동 휴식, 2일 차는 야외·신체 활동, 3일 차에만 원하는 일/줄이고 싶은 일 3가지를 적으세요.",
      "수면이 회복된 상태에서 \"과도한 업무량 문제\"와 \"직무 부적합\"을 차분히 구분하세요."
    ]
  },
  "mid": {
    "enT": "Plateau & Friction — Run a 2-Week Job-Crafting Experiment",
    "koT": "정체기·마찰 구간 — 이직 전 2주 직무 리디자인(Job Crafting)을 실험하세요",
    "enD": "You still have real fuel, yet monotony or blurred boundaries are eroding satisfaction. Tweaking 20% of your weekly scope often reveals whether to stay and grow or plan a calm exit.",
    "koD": "여력은 남아 있지만 단조로움과 흐릿한 경계가 만족도를 깎고 있습니다. 주간 업무의 20%를 재조정해 보면 남아서 성장할지, 차분히 이직할지 선명해집니다.",
    "enS": "\"I’d love to spend 20% of next month focusing on [high-impact skill/project] and streamline [low-value recurring task].\"",
    "koS": "\"다음 달에는 [핵심 성장 과제]에 20% 비중을 두고 반복 행정 업무는 간소화해 보고 싶습니다.\"",
    "enL": [
      "Log your energy (high/low) after each major task for 5 workdays.",
      "Propose one small scope upgrade or skill-stretch project in your next 1:1.",
      "Protect hard log-off hours 4 evenings a week so curiosity returns outside work."
    ],
    "koL": [
      "5일간 주요 업무 직후 내 에너지가 올랐는지 떨어졌는지 간단히 표시해 보세요.",
      "다음 1:1 면담에서 새로운 기술을 써볼 작은 프로젝트 1개를 제안해 보세요.",
      "주 4일 저녁은 완전 로그오프를 지켜 일 밖의 호기심을 되살리세요."
    ]
  },
  "high": {
    "enT": "Strong Career Vitality — Maintain Quarterly Mini-Resets",
    "koT": "건강한 커리어 활력 — 분기별 미니 안식 리듬으로 롱런하세요",
    "enD": "Your alignment and recovery habits are working well. Schedule proactive quarterly rest weekends so you stay energized before fatigue ever accumulates.",
    "koD": "직무 정렬도와 회복 습관이 아주 건강합니다. 피로가 쌓이기 전에 분기마다 선제적인 미니 휴식을 미리 심어 두면 오래 지치지 않습니다.",
    "enS": "\"Sustainable careers are built on planned recovery, not waiting until burnout forces a stop.\"",
    "koS": "\"지속 가능한 커리어는 방전 후 멈추는 것이 아니라 미리 설계한 회복 위에서 자란다.\"",
    "enL": [
      "Block one 3-day recharge weekend per quarter on your annual calendar.",
      "Keep one curiosity-driven craft skill alive each season.",
      "Review your career values once every 6 months when feeling calm and clear."
    ],
    "koL": [
      "연간 캘린더에 분기당 1회 3일 재충전 주말을 미리 표시해 두세요.",
      "계절마다 순수한 호기심으로 배우는 실무 기술을 하나씩 유지하세요.",
      "마음이 가장 차분할 때 6개월마다 커리어 가치관 점검을 진행하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_career_sabbatical_v1";
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
      window.gtag('event', "career_sabbatical_complete", {
        tool_slug: "career-burnout-sabbatical-planner",
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
      var shareUrl = "https://dopabrain.com/portal/tools/career-burnout-sabbatical-planner.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "career-burnout-sabbatical-planner",
        filename: 'dopabrain-career-burnout-sabbatical-planner-card.png',
        badge: "CAREER PLATEAU • MICRO-SABBATICAL PLAN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
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
