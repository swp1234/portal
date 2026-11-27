/* Sunday 10-Minute Mental Clarity & Cognitive Load Review
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Sunday 10-Minute Mental Clarity & Cognitive Load Review | DopaBrain",
    "metaDesc": "Starting every Monday feeling behind before 9 AM? Run a crisp 10-minute weekly mental declutter across 5 open-loop drains so your upcoming week feels light, focused, and intentional.",
    "kicker": "COGNITIVE HYGIENE • 10-MINUTE WEEKLY MENTAL CLARITY REVIEW",
    "heroTitle": "Sunday 10-Minute Mental Clarity & Cognitive Load Review",
    "heroLead": "Starting every Monday feeling behind before 9 AM? Run a crisp 10-minute weekly mental declutter across 5 open-loop drains so your upcoming week feels light, focused, and intentional.",
    "chip1": "5 Open-Loop Drains",
    "chip2": "10-Min Review",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT YOUR CARRYOVER MENTAL CLUTTER (1 = CLEAR, 5 = CROWDED)",
    "step1Title": "What invisible clutter is weighing down next week already?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The Top 3 outcomes that would make next week a genuine win (100% local):",
    "ctaBtn": "Generate My 10-Minute Weekly Clarity Plan",
    "resultBadge": "STEP 2 • YOUR 10-MINUTE SUNDAY CLARITY PROTOCOL",
    "noteTitle": "My Top 3 Wins for Next Week",
    "meterLabel": "Weekly Cognitive Clarity",
    "scriptTitle": "Monday-Morning Calm Anchor",
    "stepsTitle": "3 Fast Weekly Review Moves That Eliminate Monday Scramble",
    "stickyTitle": "Want to check whether weekly overload is drifting toward burnout?",
    "stickySub": "Take the free 2-min Burnout Test next",
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
    "title": "일요일 10분 주간 두뇌 정리 & 인지 과부하 리뷰 | DopaBrain",
    "metaDesc": "월요일 아침 9시도 되기 전에 이미 뒤처진 기분이 드나요? 5가지 미결 인지 누수를 10분 만에 비공개로 점검하고 가볍고 선명한 한 주를 여세요.",
    "kicker": "인지 위생 · 일요일 10분 주간 두뇌 정리 & 과부하 리뷰",
    "heroTitle": "일요일 10분 주간 두뇌 정리 & 인지 과부하 리뷰",
    "heroLead": "월요일 아침 9시도 되기 전에 이미 뒤처진 기분이 드나요? 5가지 미결 인지 누수를 10분 만에 비공개로 점검하고 가볍고 선명한 한 주를 여세요.",
    "chip1": "5대 미결 누수 점검",
    "chip2": "10분 주간 리셋",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 지난주에서 넘어온 머릿속 미결 과부하 점검 (1 = 깔끔, 5 = 복잡함)",
    "step1Title": "다음 주가 시작되기도 전에 마음을 무겁게 누르고 있는 보이지 않는 짐은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 다음 주 딱 이것만 끝내도 성공이라 느낄 핵심 3가지 (100% 로컬):",
    "ctaBtn": "내 10분 주간 두뇌 정리 플랜 보기",
    "resultBadge": "2단계 • 일요일 10분 주간 명료도 프로토콜",
    "noteTitle": "다음 주 핵심 3대 목표",
    "meterLabel": "주간 인지 명료도",
    "scriptTitle": "월요일 아침 평온 앵커 문구",
    "stepsTitle": "월요일 혼란을 없애는 3단계 주간 리뷰",
    "stickyTitle": "반복되는 주간 과부하가 번아웃으로 이어지고 있는지 점검해 볼까요?",
    "stickySub": "무료 2분 번아웃 테스트로 회복 필요도 확인",
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
    "title": "周日10分钟思维清空与周度复盘器 | DopaBrain",
    "heroTitle": "周日10分钟思维清空与周度复盘器",
    "heroLead": "10分钟清空未完待办与脑力杂音，锁定下周最重要的3个目标。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "日曜10分・週間メンタル整理＆認知負荷レビュー | DopaBrain",
    "heroTitle": "日曜10分・週間メンタル整理＆認知負荷レビュー",
    "heroLead": "未完了タスクを10分で棚卸しし、来週の最重要3目標をスッキリ決めます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Revisión Semanal de Claridad Mental en 10 Minutos | DopaBrain",
    "heroTitle": "Revisión Semanal de Claridad Mental en 10 Minutos",
    "heroLead": "Vacía pendientes mentales el domingo y define tus 3 prioridades semanales.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Revisão Semanal de Clareza Mental em 10 Minutos | DopaBrain",
    "heroTitle": "Revisão Semanal de Clareza Mental em 10 Minutos",
    "heroLead": "Limpe pendências da semana no domingo e defina suas 3 prioridades reais.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Sonntags 10-Minuten Mentale Klarheits-Review | DopaBrain",
    "heroTitle": "Sonntags 10-Minuten Mentale Klarheits-Review",
    "heroLead": "Leere offene Gedankenschleifen und fixiere deine Top-3-Wochenziele.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Bilan Clarté Mentale Hebdomadaire en 10 Minutes | DopaBrain",
    "heroTitle": "Bilan Clarté Mentale Hebdomadaire en 10 Minutes",
    "heroLead": "Videz votre charge mentale le dimanche et verrouillez vos 3 priorités.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Воскресный 10-минутный обзор ясности ума | DopaBrain",
    "heroTitle": "Воскресный 10-минутный обзор ясности ума",
    "heroLead": "Разгрузите незавершённые дела и выберите 3 главные цели на неделю.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "रविवार 10-मिनट साप्ताहिक मानसिक स्पष्टता समीक्षा | DopaBrain",
    "heroTitle": "रविवार 10-मिनट साप्ताहिक मानसिक स्पष्टता समीक्षा",
    "heroLead": "अधूरे विचारों का बोझ हटाएं और अगले सप्ताह के शीर्ष 3 लक्ष्य तय करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Review Kejernihan Mental Mingguan 10 Menit | DopaBrain",
    "heroTitle": "Review Kejernihan Mental Mingguan 10 Menit",
    "heroLead": "Kosongkan beban pikiran hari Minggu dan kunci 3 target utama pekan depan.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Pazar 10 Dakikalık Zihinsel Netlik Haftalık Gözden Geçirme | DopaBrain",
    "heroTitle": "Pazar 10 Dakikalık Zihinsel Netlik Haftalık Gözden Geçirme",
    "heroLead": "Açık zihinsel döngüleri boşaltın ve haftanın 3 ana hedefini belirleyin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "uncaptured_tasks",
    "en": "Mental-List Carryover — Holding 15+ errands in my head instead of one trusted list",
    "ko": "머릿속 투두 과부하 — 15개 이상 잡일을 메모 없이 기억에만 담아둠"
  },
  {
    "id": "overbooked_calendar",
    "en": "Zero-Margin Calendar — Back-to-back meetings leaving no time for real work or rest",
    "ko": "여백 없는 달력 — 연달아 잡힌 일정 탓에 정작 중요한 일·휴식 시간이 없음"
  },
  {
    "id": "unanswered_inbox_guilt",
    "en": "Lingering Unread Threads — 10+ half-read emails/texts generating quiet guilt",
    "ko": "미답장 부채감 — 읽고 넘긴 메일·메시지들이 계속 마음에 걸림"
  },
  {
    "id": "missing_top3_focus",
    "en": "Everything-Is-Urgent Blur — Starting Monday reacting to whoever pings loudest",
    "ko": "우선순위 실종 — 핵심 목표 없이 월요일 아침 급한 요청에만 휘둘림"
  },
  {
    "id": "skipped_recovery_slot",
    "en": "Unscheduled Recharge — Hoping for rest \"if time permits\" instead of blocking it first",
    "ko": "휴식 미배정 — 시간 나면 쉬려다 매주 방전 상태로 주말을 맞음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Carryover Load — Run a 10-Minute Brain Dump & Cut 3 Low-Value Commitments",
    "koT": "미결 과부하 높음 — 10분 브레인 덤프 후 저효율 약속 3개를 과감히 비우세요",
    "enD": "Cognitive load theory and GTD research show your brain is built for having ideas, not holding 30 unorganized reminders. A 10-minute Sunday review—capturing open loops, picking 3 real wins, and protecting 2 recovery blocks—drops Monday stress sharply.",
    "koD": "인지부하 이론에 따르면 인간의 뇌는 아이디어를 내는 곳이지 30개 잡일을 저장하는 창고가 아닙니다. 일요일 10분간 미결 사항을 쏟아내고 핵심 3개와 휴식 2칸만 먼저 심어도 월요일이 완전히 달라집니다.",
    "enS": "\"Empty my head onto one page, pick 3 real wins, and decline or defer the noisy rest.\"",
    "koS": "\"머릿속 잡일을 한 페이지에 비우고, 진짜 중요한 3가지만 남긴 뒤 나머지는 과감히 미룬다.\"",
    "enL": [
      "Minutes 0–4: Dump every loose errand, email, and worry onto one single list.",
      "Minutes 4–7: Highlight ONLY 3 true weekly wins and block calendar time for them first.",
      "Minutes 7–10: Cancel, delegate, or defer 2 low-impact commitments and protect 2 rest windows."
    ],
    "koL": [
      "0~4분: 머릿속에 떠다니는 잡일·메일·걱정을 한 페이지에 빠짐없이 쏟아내세요.",
      "4~7분: 이번 주 진짜 중요한 핵심 3가지만 형광펜으로 골라 달력에 먼저 배정하세요.",
      "7~10분: 덜 중요한 일 2개는 미루거나 거절하고, 나를 위한 휴식 시간 2칸을 미리 잠그세요."
    ]
  },
  "mid": {
    "enT": "Moderate Weekly Noise — Lock Your Top 3 Wins & One Recovery Anchor",
    "koT": "중간 주간 잡음 — 핵심 3대 목표와 휴식 1칸만 미리 잠그면 깔끔합니다",
    "enD": "Your system mostly works; spending 5 minutes Sunday evening choosing Monday’s first block prevents reactive mornings.",
    "koD": "기본 정리력은 좋은 편입니다. 일요일 저녁 5분만 투자해 월요일 첫 1시간 과제를 못 박아 두세요.",
    "enS": "\"Know Monday’s first 60-minute win before Sunday night ends.\"",
    "koS": "\"일요일 밤 전에 월요일 첫 60분 핵심 목표를 확정해 둔다.\"",
    "enL": [
      "Write Monday’s #1 focus block on a sticky note.",
      "Reply to or archive 3 lingering messages in 3 minutes flat.",
      "Schedule one pleasant mid-week recharge activity."
    ],
    "koL": [
      "월요일 아침 첫 집중 과제 1개를 포스트잇에 적어 두세요.",
      "마음에 걸리던 미답장 3건만 3분 안에 깔끔히 정리하세요.",
      "수요일 저녁쯤 기분 좋은 미니 리충전 일정을 하나 넣어 두세요."
    ]
  },
  "high": {
    "enT": "Crisp Weekly Clarity — Intentional & Sustainable Rhythm",
    "koT": "선명한 주간 명료도 — 주도적이고 지속 가능한 리듬입니다",
    "enD": "You begin the week light, clear, and well-bounded. Keep savoring the calm this 10-minute habit creates.",
    "koD": "가볍고 선명하게 한 주를 여는 훌륭한 인지 위생 습관을 갖추고 계십니다.",
    "enS": "\"Clarity first, calm execution all week.\"",
    "koS": "\"명료한 우선순위, 평온한 한 주 실행.\"",
    "enL": [
      "Celebrate 2 genuine wins from the past week before planning the next.",
      "Keep protecting white space between meetings.",
      "Stay generous with sleep and offline time."
    ],
    "koL": [
      "새 주를 계획하기 전에 지난주의 잘한 일 2가지를 먼저 칭찬해 주세요.",
      "일정 사이의 숨 쉴 여백을 계속 지켜 나가세요.",
      "충분한 수면과 오프라인 휴식을 최우선 자산으로 아끼세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_mental_clarity_weekly_review_v1";
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
      window.gtag('event', "mental_clarity_weekly_review_complete", {
        tool_slug: "mental-clarity-weekly-review",
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
      var shareUrl = "https://dopabrain.com/portal/tools/mental-clarity-weekly-review.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "mental-clarity-weekly-review",
        filename: 'dopabrain-mental-clarity-weekly-review-card.png',
        badge: "COGNITIVE HYGIENE • 10-MINUTE WEEKLY MENTAL CLARITY REVIEW",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
        accent2: "#10b981"
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
