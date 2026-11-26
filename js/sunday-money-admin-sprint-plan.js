/* Weekly Life-Admin & Paperwork 20-Minute Sprint Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Weekly Life-Admin & Paperwork 20-Minute Sprint Planner | DopaBrain",
    "metaDesc": "Unopened mail, medical claims, warranty returns, and tiny forms lingering on your mind for weeks? Score 5 life-admin bottlenecks locally and knock out your top 3 items in one 20-minute burst.",
    "kicker": "LIFE ADMIN • 20-MINUTE WEEKLY PAPERWORK SPRINT",
    "heroTitle": "Weekly Life-Admin & Paperwork 20-Minute Sprint Planner",
    "heroLead": "Unopened mail, medical claims, warranty returns, and tiny forms lingering on your mind for weeks? Score 5 life-admin bottlenecks locally and knock out your top 3 items in one 20-minute burst.",
    "chip1": "5 Admin Bottlenecks",
    "chip2": "20-Min Power Burst",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • SPOT YOUR BACKGROUND LIFE-ADMIN DRAG (1 = CLEAR, 5 = PILING UP)",
    "step1Title": "Which tiny adulting errands are quietly eating mental RAM all week?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The exact 3 tiny admin items I will clear in one 20-minute timer (100% local):",
    "ctaBtn": "Launch My 20-Minute Admin Sprint",
    "resultBadge": "STEP 2 • YOUR 20-MINUTE LIFE-ADMIN CLEARANCE PROTOCOL",
    "noteTitle": "My Top 3 Sprint Targets (20 Minutes Total)",
    "meterLabel": "Mental RAM Clearance Score",
    "scriptTitle": "Two-Minute Rule Kickoff Cue",
    "stepsTitle": "3 Moves to Keep Life Admin From Ever Piling Up Again",
    "stickyTitle": "Ready to knock out your top 3 admin items right now in 20 minutes?",
    "stickySub": "Open the free Pomodoro Timer & finish fast",
    "stickyBtn": "20m Timer →",
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
    "title": "밀린 생활 행정·공과금·서류 20분 일괄 처리 스프린트 플래너 | DopaBrain",
    "metaDesc": "안 뜯은 우편물, 보험 청구, 반품, 자잘한 서류들이 몇 주째 머릿속을 맴도나요? 5가지 생활 행정 회피 병목을 점검하고 단 20분 스프린트로 상위 3건을 털어내세요.",
    "kicker": "생활 행정·서류 밀림 탈출 · 주간 20분 행정 스프린트",
    "heroTitle": "밀린 생활 행정·공과금·서류 20분 일괄 처리 스프린트 플래너",
    "heroLead": "안 뜯은 우편물, 보험 청구, 반품, 자잘한 서류들이 몇 주째 머릿속을 맴도나요? 5가지 생활 행정 회피 병목을 점검하고 단 20분 스프린트로 상위 3건을 털어내세요.",
    "chip1": "5가지 행정 병목",
    "chip2": "20분 집중 처리",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 밀려 있는 생활 행정 피로 점검 (1 = 깔끔함, 5 = 산더미)",
    "step1Title": "일주일 내내 머릿속 메모리를 은근히 차지하는 사소한 행정 업무는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 20분 타이머 안에 딱 끝내버릴 밀린 행정 3가지 (100% 로컬):",
    "ctaBtn": "내 20분 생활 행정 정리 플랜 만들기",
    "resultBadge": "2단계 • 20분 생활 행정 일괄 정리 프로토콜",
    "noteTitle": "20분 안에 털어낼 핵심 행정 3건",
    "meterLabel": "머릿속 잔여 부하 해소도",
    "scriptTitle": "미루기를 깨는 2분 착수 문장",
    "stepsTitle": "생활 행정이 다시 쌓이지 않게 막는 3단계",
    "stickyTitle": "적어둔 3가지 생활 행정을 지금 바로 20분 타이머로 끝내버릴까요?",
    "stickySub": "무료 뽀모도로 타이머로 20분 만에 홀가분하게 완료",
    "stickyBtn": "20분 타이머 →",
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
    "title": "每周生活琐事与账单20分钟冲刺清理 | DopaBrain",
    "heroTitle": "每周生活琐事与账单20分钟冲刺清理",
    "heroLead": "本地列出3件拖延小事，用一个20分钟番茄钟一次性清空后台脑力负担。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "生活事務・手続き20分一括スプリント | DopaBrain",
    "heroTitle": "生活事務・手続き20分一括スプリント",
    "heroLead": "後回しにした郵便・解約・予約の上位3件を20分タイマーでスッキリ完了。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Sprint de 20 Min para Trámites y Pendientes | DopaBrain",
    "heroTitle": "Sprint de 20 Min para Trámites y Pendientes",
    "heroLead": "Despeja facturas, formularios y recados acumulados en una ráfaga ligera de 20 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Sprint de 20 Min para Burocracias da Semana | DopaBrain",
    "heroTitle": "Sprint de 20 Min para Burocracias da Semana",
    "heroLead": "Liquide contas, formulários e pendências chatas em apenas 20 minutos sem travar.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Alltags-Admin 20-Minuten-Sprint-Planer | DopaBrain",
    "heroTitle": "Alltags-Admin 20-Minuten-Sprint-Planer",
    "heroLead": "Erledige aufgeschobene Briefe, Formulare und Termine entspannt in einem 20-Min-Sprint.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Sprint Administratif 20 Minutes (Anti-Charge) | DopaBrain",
    "heroTitle": "Sprint Administratif 20 Minutes (Anti-Charge)",
    "heroLead": "Liquidez vos 3 démarches en attente en 20 minutes chrono pour libérer votre esprit.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "20-минутный спринт по бытовым делам | DopaBrain",
    "heroTitle": "20-минутный спринт по бытовым делам",
    "heroLead": "Разберите зависшие счета, формы и заявки за один лёгкий 20-минутный таймер.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "लाइफ-एडमिन 20-मिनट स्प्रिंट प्लानर | DopaBrain",
    "heroTitle": "लाइफ-एडमिन 20-मिनट स्प्रिंट प्लानर",
    "heroLead": "लटके हुए बिल, फॉर्म और छोटे कामों को 20 मिनट के एक शांत स्प्रिंट में निपटाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Sprint Urusan Harian 20 Menit | DopaBrain",
    "heroTitle": "Perencana Sprint Urusan Harian 20 Menit",
    "heroLead": "Beresskan tagihan, formulir, dan urusan tertunda dalam satu sesi cepat 20 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Haftalık Evrak ve Günlük İşler 20 Dk Sprinti | DopaBrain",
    "heroTitle": "Haftalık Evrak ve Günlük İşler 20 Dk Sprinti",
    "heroLead": "Biriken fatura, form ve küçük işleri tek 20 dakikalık sprintte temizleyin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "mail_pile",
    "en": "Unopened Mail & Receipts — Paper envelopes or PDF notices sitting untouched for weeks",
    "ko": "미개봉 우편·영수증 — 고지서·안내문·영수증이 몇 주째 한쪽에 쌓여 있음"
  },
  {
    "id": "phone_call_dread",
    "en": "Hold-Music Dread — Avoiding 1 quick customer-service call or appointment booking",
    "ko": "고객센터 통화 회피 — 5분이면 끝날 전화 예약이나 문의를 계속 미룸"
  },
  {
    "id": "subscription_leaks",
    "en": "Zombie Subscriptions — Paying for forgotten apps or trials you meant to cancel months ago",
    "ko": "좀비 구독 방치 — 몇 달 전 해지하려던 안 쓰는 구독이 계속 자동 결제됨"
  },
  {
    "id": "password_form_friction",
    "en": "Login & Form Friction — Stalling on tiny portals because resetting one password feels annoying",
    "ko": "로그인·양식 귀찮음 — 비밀번호 찾기나 서류 첨부가 번거로워 창을 닫아버림"
  },
  {
    "id": "scattered_notes",
    "en": "Zero Single Inbox — Remembering errands randomly in the shower with no single weekly slot",
    "ko": "고정 처리 시간 부재 — 샤워할 때만 문득 떠오르고 주간 처리 시간이 따로 없음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Admin Backlog — Do Only Top 3 Items in One 20-Min Burst & Stop",
    "koT": "생활 행정 적체 심함 — 다 끝내려 하지 말고 딱 3건만 20분 안에 끝내고 멈추세요",
    "enD": "Trying to conquer an entire 2-month backlog in one exhausting Saturday guarantees avoidance. Capping your sprint at 20 minutes with a favorite playlist turns dreaded chores into a crisp dopamine win.",
    "koD": "밀린 두 달 치를 한 번에 다 처리하려 하면 시작조차 하기 싫어집니다. 좋아하는 음악을 틀고 딱 20분 타이머로 가장 쉬운 3건만 끝내면 머릿속 짐이 절반 이상 가벼워집니다.",
    "enS": "\"I am NOT fixing my whole life today—I am spending 20 easy minutes clearing 3 tiny annoyances and enjoying the relief.\"",
    "koS": "\"오늘 인생 전체를 정리하는 게 아니야. 딱 20분만 써서 가장 거슬리는 작은 일 3개만 치우고 홀가분해질게.\"",
    "enL": [
      "Start with the easiest 2-minute task first (open 3 envelopes or cancel 1 trial) to spark momentum.",
      "Put on an upbeat playlist or warm drink while running a strict 20-minute timer.",
      "Throw remaining non-urgent items onto one \"Next Sunday 20-Min Admin\" list and close the folder."
    ],
    "koL": [
      "가장 쉬운 2분짜리 일(우편물 3개 뜯기·구독 1개 해지)부터 손대어 시동을 거세요.",
      "기분 좋은 음악이나 따뜻한 음료를 곁들이며 정확히 20분 타이머를 돌리세요.",
      "남은 비긴급 항목은 \"다음 주 일요일 20분 행정\" 메모 한 곳에 몰아넣고 폴더를 닫으세요."
    ]
  },
  "mid": {
    "enT": "Manageable Drift — Lock In One Weekly 20-Min \"Admin Power Hour\"",
    "koT": "가벼운 밀림 — 매주 고정 20분 \"행정 정리 타임\"만 예약하면 깔끔해집니다",
    "enD": "You handle urgent items well; giving routine paperwork one weekly home prevents random weekday interruptions.",
    "koD": "급한 일은 잘 처리하고 계십니다. 주 1회 20분 고정 타임만 두면 평일 내내 자잘한 일이 떠오르지 않습니다.",
    "enS": "\"Routine paperwork belongs in Sunday’s 20-minute window, not in my weekday focus.\"",
    "koS": "\"자잘한 서류와 행정은 일요일 20분 타임에 몰아두고 평일 집중력을 지킨다.\"",
    "enL": [
      "Keep one single \"Admin Inbox\" note on your phone where every errand lands immediately.",
      "Use auto-pay and digital alerts for recurring bills to eliminate manual clicks.",
      "Pair your 20-minute weekly sprint with a cozy coffee ritual."
    ],
    "koL": [
      "떠오르는 모든 자잘한 볼일을 바로 적는 \"생활 행정함\" 메모 1개를 폰에 고정하세요.",
      "공과금·고정비는 자동이체와 알림으로 수동 클릭을 없애세요.",
      "매주 20분 행정 타임을 맛있는 커피 한 잔과 짝지어 기분 좋은 루틴으로 만드세요."
    ]
  },
  "high": {
    "enT": "Crisp Admin Systems — Low Mental Clutter & High Clarity",
    "koT": "깔끔한 행정 시스템 — 머릿속 잔여 부하 없이 매우 명료한 상태입니다",
    "enD": "Your background life admin runs smoothly on light rails. Keep doing quick 10-minute weekly sweeps so clutter never accumulates.",
    "koD": "생활 행정이 가벼운 시스템 위에서 매끄럽게 돌아가고 있습니다. 주 1회 10분 가벼운 점검만 유지하세요.",
    "enS": "\"Small weekly sweeps keep life effortlessly light.\"",
    "koS": "\"매주 10분의 가벼운 정리가 일상을 놀랍도록 가볍게 유지해 준다.\"",
    "enL": [
      "Keep your single digital inbox tidy.",
      "Review annual renewals/subscriptions once a quarter.",
      "Enjoy the calm mental RAM you freed up for creative work and rest."
    ],
    "koL": [
      "단일 행정 메모함을 깔끔하게 유지하세요.",
      "분기 1회 연간 구독·보험 갱신만 가볍게 점검하세요.",
      "비워 둔 머릿속 여유를 창작과 휴식에 마음껏 쓰세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_life_admin_sprint_v1";
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
      window.gtag('event', "life_admin_sprint_complete", {
        tool_slug: "sunday-money-admin-sprint-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/sunday-money-admin-sprint-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "sunday-money-admin-sprint-plan",
        filename: 'dopabrain-sunday-money-admin-sprint-plan-card.png',
        badge: "LIFE ADMIN • 20-MINUTE WEEKLY PAPERWORK SPRINT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
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
