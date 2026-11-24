/* Burnout Load vs. Recovery Capacity Calculator
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Burnout Load vs. Recovery Capacity Calculator | DopaBrain",
    "metaDesc": "Working harder while feeling emptier every week? Compare 5 weekly depletion drains against your real recovery margin locally and get a concrete 7-day load-trimming plan.",
    "kicker": "LOAD VS. RECOVERY • 7-DAY REBALANCE",
    "heroTitle": "Burnout Load vs. Recovery Capacity Calculator",
    "heroLead": "Working harder while feeling emptier every week? Compare 5 weekly depletion drains against your real recovery margin locally and get a concrete 7-day load-trimming plan.",
    "chip1": "5 Burnout Drains",
    "chip2": "7-Day Trim Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • RATE WEEKLY DEPLETION DRIVERS (1 = SUSTAINABLE, 5 = CRITICAL)",
    "step1Title": "Where is weekly output outrunning your recovery capacity?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One non-essential obligation I can pause, shrink, or delegate this week (100% local):",
    "ctaBtn": "Calculate Recovery Margin",
    "resultBadge": "STEP 2 • YOUR 7-DAY RECOVERY & BOUNDARY PLAN",
    "noteTitle": "My One Load-Trim Commitment This Week",
    "meterLabel": "Weekly Recovery Margin",
    "scriptTitle": "Clean Capacity-Boundary Script",
    "stepsTitle": "3 Practical Moves to Restore Positive Margin",
    "stickyTitle": "Check your full Burnout Reflection Profile next",
    "stickySub": "Free 12-language burnout reflection • Zero signup",
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
    "title": "번아웃 부하 vs 회복 용량 계산기 | DopaBrain",
    "metaDesc": "매주 열심히 사는데도 회복은 안 되고 점점 비어가는 느낌인가요? 5가지 주간 소진 요인을 점검해 현실적인 7일 부하 감축 플랜을 만드세요.",
    "kicker": "번아웃 부하 vs 회복 용량 계산기",
    "heroTitle": "번아웃 부하 vs 회복 용량 계산기",
    "heroLead": "매주 열심히 사는데도 회복은 안 되고 점점 비어가는 느낌인가요? 5가지 주간 소진 요인을 점검해 현실적인 7일 부하 감축 플랜을 만드세요.",
    "chip1": "5가지 소진 요인",
    "chip2": "7일 부하 감축",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 주간 소진 요인 점검 (1 = 지속 가능, 5 = 한계 임박)",
    "step1Title": "이번 주 내 회복 용량을 가장 크게 초과하는 소진 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주 잠시 멈추거나 줄이거나 위임할 비핵심 의무 1가지 (100% 로컬):",
    "ctaBtn": "회복 여유도 & 7일 플랜 계산",
    "resultBadge": "2단계 • 7일 번아웃 회복 & 경계 플랜",
    "noteTitle": "이번 주 내가 덜어낼 1가지",
    "meterLabel": "주간 회복 여유율",
    "scriptTitle": "업무·일정 용량을 지키는 정중한 문장",
    "stepsTitle": "회복 여유를 플러스로 돌리는 3가지 실천",
    "stickyTitle": "나의 전체 번아웃 자가점검 프로필 확인하기",
    "stickySub": "가입 없는 무료 번아웃 다차원 분석",
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
    "title": "倦怠负荷与恢复容量计算器 | DopaBrain",
    "heroTitle": "倦怠负荷与恢复容量计算器",
    "heroLead": "对比5项每周消耗源与真实恢复余量，生成7天减负与边界计划。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "バーンアウト負荷 vs 回復容量計算 | DopaBrain",
    "heroTitle": "バーンアウト負荷 vs 回復容量計算",
    "heroLead": "5つの消耗要因と回復余力を比較し、7日間の負荷軽減プランを作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Calculadora de Carga Burnout vs. Recuperación | DopaBrain",
    "heroTitle": "Calculadora de Carga Burnout vs. Recuperación",
    "heroLead": "Compara 5 desgastes semanales con tu margen real y crea un plan de ajuste de 7 días.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Calculadora Burnout vs. Capacidade de Recuperação | DopaBrain",
    "heroTitle": "Calculadora Burnout vs. Capacidade de Recuperação",
    "heroLead": "Compare 5 drenos semanais com sua margem real e monte um plano de 7 dias.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Burnout-Last vs. Erholungs-Rechner | DopaBrain",
    "heroTitle": "Burnout-Last vs. Erholungs-Rechner",
    "heroLead": "Vergleiche 5 Erschöpfungsfaktoren mit deiner Erholungsreserve für einen 7-Tage-Plan.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Calculateur Charge Burn-out vs Récupération | DopaBrain",
    "heroTitle": "Calculateur Charge Burn-out vs Récupération",
    "heroLead": "Comparez 5 facteurs d’épuisement à votre marge réelle pour un plan d’allègement 7 jours.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Калькулятор выгорания и запаса восстановления | DopaBrain",
    "heroTitle": "Калькулятор выгорания и запаса восстановления",
    "heroLead": "Сравните 5 источников истощения с вашим ресурсом и составьте план разгрузки на 7 дней.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "बर्नआउट लोड बनाम रिकवरी कैलकुलेटर | DopaBrain",
    "heroTitle": "बर्नआउट लोड बनाम रिकवरी कैलकुलेटर",
    "heroLead": "5 साप्ताहिक थकान कारकों की जांच करें और 7-दिन का व्यावहारिक रिकवरी प्लान बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kalkulator Beban Burnout vs. Pemulihan | DopaBrain",
    "heroTitle": "Kalkulator Beban Burnout vs. Pemulihan",
    "heroLead": "Bandingkan 5 penguras mingguan dengan ruang pulih Anda untuk rencana 7 hari.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Tükenmişlik Yükü ve Toparlanma Hesaplayıcı | DopaBrain",
    "heroTitle": "Tükenmişlik Yükü ve Toparlanma Hesaplayıcı",
    "heroLead": "5 haftalık yorgunluk kaynağını ölçün ve 7 günlük yük azaltma planı kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "hours_creep",
    "en": "After-Hours Bleed — Work thoughts or messages spilling into evenings and weekends",
    "ko": "퇴근 후 침범 — 저녁·주말에도 업무 메시지와 걱정이 계속 이어짐"
  },
  {
    "id": "cynicism_drop",
    "en": "Detachment & Cynicism — Feeling numb, irritable, or resentful toward tasks you used to care about",
    "ko": "냉소·거리두기 — 예전엔 보람있던 일에도 무감각하거나 짜증이 앞섬"
  },
  {
    "id": "sleep_unrestored",
    "en": "Unrestorative Rest — Waking up tired even after a full night or weekend off",
    "ko": "회복 없는 휴식 — 주말을 쉬거나 잠을 자도 피로가 풀리지 않음"
  },
  {
    "id": "invisible_labor",
    "en": "Unrecognized Invisible Load — Carrying emotional caretaking or uncredited coordination",
    "ko": "보이지 않는 감정노동 — 티 나지 않는 조율·배려·뒷수습을 혼자 떠안음"
  },
  {
    "id": "autonomy_pinch",
    "en": "Low Control / High Demand — Endless urgent requests with little say over priorities",
    "ko": "통제권 부족 — 우선순위 결정권 없이 쏟아지는 긴급 요청만 처리"
  }
];
  var TIERS = {
  "low": {
    "enT": "Negative Recovery Margin — Cut Load First, Don’t Add More Self-Care Chores",
    "koT": "회복 마진 적자 상태 — 자기계발 추가보다 부하 감축이 최우선입니다",
    "enD": "You cannot bubble-bath your way out of chronic overload. Restoring margin starts by subtracting one recurring drain and locking a hard evening stop time.",
    "koD": "만성 과부하 상태에서는 힐링 숙제를 늘리는 것보다 반복되는 소진 요인 1개를 빼고 퇴근 경계를 세우는 것이 먼저입니다.",
    "enS": "\"To keep quality high on my core priorities, I don’t have bandwidth to add this until next week—which item should we deprioritize if this is urgent?\"",
    "koS": "\"핵심 과제의 완성도를 지키기 위해 이번 주 추가 배정은 어렵습니다. 긴급 건이라면 기존 항목 중 어떤 것을 다음 주로 미룰까요?\"",
    "enL": [
      "Subtract or defer 1 non-critical commitment this week before adding anything new.",
      "Set a non-negotiable evening cutoff for work notifications and honor it for 5 straight nights.",
      "Schedule 20 minutes of passive, zero-goal rest daily (no optimizing, no productivity audio)."
    ],
    "koL": [
      "새 일을 추가하기 전에 이번 주 비핵심 약속·업무 1가지를 반드시 덜어내세요.",
      "5일 연속 업무 알림 완전 종료 시각을 정하고 예외 없이 지키세요.",
      "매일 20분은 아무 목표도 성과도 없는 완전한 수동 휴식으로 비워두세요."
    ]
  },
  "mid": {
    "enT": "Thin Margin — Reclaim Two Protected Recovery Windows This Week",
    "koT": "얇은 회복 여유 — 이번 주 보호된 회복 구간 2곳을 확보하세요",
    "enD": "You are keeping up on the surface, but a single unexpected stressor could tip you into exhaustion. Build small buffers now.",
    "koD": "겉으로는 버티고 있지만 예상치 못한 변수 하나에 쉽게 방전될 수 있는 경계선입니다. 지금 작은 완충 구간을 만드세요.",
    "enS": "\"I can take that on next Tuesday once my current sprint wraps cleanly.\"",
    "koS": "\"현재 진행 중인 마감을 깔끔히 끝낸 뒤 다음 주 화요일부터 진행할 수 있습니다.\"",
    "enL": [
      "Protect two evenings this week with zero chores or catch-up work.",
      "Clarify your top 3 priorities with stakeholders so invisible busywork stops expanding.",
      "Pair one physical stress-cycle outlet (brisk walk, stretching, music) after work."
    ],
    "koL": [
      "이번 주 최소 이틀 저녁은 밀린 집안일·잔업 없는 회복 시간으로 비우세요.",
      "핵심 우선순위 3가지를 명확히 합의해 끝없는 잔업 확장을 막으세요.",
      "퇴근 직후 15분 빠른 걷기·스트레칭으로 신체 스트레스 회로를 마무리하세요."
    ]
  },
  "high": {
    "enT": "Sustainable Pace — Protect Your Healthy Boundary System",
    "koT": "지속 가능한 페이스 — 지금의 건강한 경계 시스템을 지켜나가세요",
    "enD": "Your workload and recovery capacity are in solid balance. Keep reviewing commitments weekly so scope creep never quietly erodes your buffer.",
    "koD": "업무 부하와 회복 용량이 균형을 이루고 있습니다. 매주 일정을 가볍게 점검해 보이지 않는 과부하가 스며들지 않게 지키세요.",
    "enS": "\"Saying no early protects my best energy for the work and people I value most.\"",
    "koS": "\"미리 정중히 선을 긋는 습관이 내가 소중히 여기는 일과 사람을 지켜준다.\"",
    "enL": [
      "Do a 5-minute Friday check: what energized me vs. what drained me?",
      "Keep your weekend recovery boundary consistent.",
      "Invest surplus energy into one joyful, non-monetized hobby."
    ],
    "koL": [
      "매주 금요일 5분 점검: 나를 채운 일과 소진시킨 일을 간단히 기록하세요.",
      "주말 회복 경계와 수면 리듬을 꾸준히 유지하세요.",
      "남는 에너지는 성과와 무관한 즐거운 취미 1가지에 써 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_burnout_calc_v1";
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
      window.gtag('event', "burnout_recovery_calc_complete", {
        tool_slug: "burnout-boundary-recovery-calc",
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
      var shareUrl = "https://dopabrain.com/portal/tools/burnout-boundary-recovery-calc.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "burnout-boundary-recovery-calc",
        filename: 'dopabrain-burnout-boundary-recovery-calc-card.png',
        badge: "LOAD VS. RECOVERY • 7-DAY REBALANCE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f43f5e",
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
