/* Post-Burnout Sustainable Work Re-Entry Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Post-Burnout Sustainable Work Re-Entry Planner | DopaBrain",
    "metaDesc": "Returning to work after burnout, leave, or a heavy stretch and terrified of relapsing? Audit 5 relapse traps locally and build a sustainable 4-week pacing ramp.",
    "kicker": "SUSTAINABLE RE-ENTRY • PACED WORK PLAN",
    "heroTitle": "Post-Burnout Sustainable Work Re-Entry Planner",
    "heroLead": "Returning to work after burnout, leave, or a heavy stretch and terrified of relapsing? Audit 5 relapse traps locally and build a sustainable 4-week pacing ramp.",
    "chip1": "5 Relapse Traps",
    "chip2": "4-Week Pacing Ramp",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK RE-ENTRY RELAPSE RISKS (1 = PROTECTED, 5 = HIGH RISK)",
    "step1Title": "Which old overwork patterns are trying to sneak back in?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My non-negotiable daily shutdown boundary during re-entry (100% local):",
    "ctaBtn": "Build My Sustainable Re-Entry Plan",
    "resultBadge": "STEP 2 • YOUR POST-BURNOUT PACING RAMP",
    "noteTitle": "My Non-Negotiable Re-Entry Guardrail",
    "meterLabel": "Relapse Protection Index",
    "scriptTitle": "Calm Workload-Pacing Script for Managers/Clients",
    "stepsTitle": "3 Pacing Guardrails for Your First 4 Weeks Back",
    "stickyTitle": "Want to check your current burnout stage?",
    "stickySub": "Take the free Burnout Stage Check next",
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
    "title": "번아웃 이후 지속가능한 업무 복귀 플래너 | DopaBrain",
    "metaDesc": "번아웃이나 휴식 후 다시 업무에 복귀하며 재발이 걱정되나요? 5가지 재발 함정을 비공개로 점검하고 무리 없는 4주 페이스 복귀 플랜을 세우세요.",
    "kicker": "번아웃 후 복귀 · 지속가능한 업무 재진입 플래너",
    "heroTitle": "번아웃 이후 지속가능한 업무 복귀 플래너",
    "heroLead": "번아웃이나 휴식 후 다시 업무에 복귀하며 재발이 걱정되나요? 5가지 재발 함정을 비공개로 점검하고 무리 없는 4주 페이스 복귀 플랜을 세우세요.",
    "chip1": "5가지 재발 함정",
    "chip2": "4주 페이스 복귀",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 업무 복귀 재발 위험 점검 (1 = 안전, 5 = 위험 높음)",
    "step1Title": "복귀 과정에서 다시 고개를 들기 쉬운 옛 과로 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 복귀 기간 동안 절대 양보하지 않을 일일 퇴근·휴식 기준 (100% 로컬):",
    "ctaBtn": "지속가능한 업무 복귀 플랜 생성",
    "resultBadge": "2단계 • 번아웃 재발 방지 복귀 플랜",
    "noteTitle": "나의 복귀 기간 핵심 가드레일",
    "meterLabel": "번아웃 재발 방어 지수",
    "scriptTitle": "동료·매니저에게 쓰는 차분한 업무 조율 문구",
    "stepsTitle": "복귀 첫 4주를 지키는 3가지 가드레일",
    "stickyTitle": "현재 나의 번아웃 단계와 회복 상태를 확인해 볼까요?",
    "stickySub": "무료 번아웃 테스트로 에너지 소진 정도 점검",
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
    "title": "倦怠后可持续返岗节奏规划器 | DopaBrain",
    "heroTitle": "倦怠后可持续返岗节奏规划器",
    "heroLead": "排查5大复发陷阱，制定循序渐进、守住边界的4周稳健返岗计划。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "バーンアウト後の職場復帰ペース設計 | DopaBrain",
    "heroTitle": "バーンアウト後の職場復帰ペース設計",
    "heroLead": "再発を招く5つの過労習慣を整理し、持続可能な4週間の復帰プランを作成。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Regreso Sostenible Post-Burnout | DopaBrain",
    "heroTitle": "Plan de Regreso Sostenible Post-Burnout",
    "heroLead": "Audita 5 trampas de recaída y diseña una rampa laboral sostenible de 4 semanas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Retorno Sustentável Pós-Burnout | DopaBrain",
    "heroTitle": "Plano de Retorno Sustentável Pós-Burnout",
    "heroLead": "Identifique 5 armadilhas de recaída e monte uma retomada de trabalho em 4 semanas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Nachhaltiger Wiedereinstiegs-Planer | DopaBrain",
    "heroTitle": "Nachhaltiger Wiedereinstiegs-Planer",
    "heroLead": "Prüfe 5 Burnout-Rückfallfallen und plane deinen gesunden 4-Wochen-Wiedereinstieg.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Reprise Durable Post-Burnout | DopaBrain",
    "heroTitle": "Plan Reprise Durable Post-Burnout",
    "heroLead": "Repérez 5 pièges de rechute et bâtissez une reprise progressive sur 4 semaines.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План мягкого возвращения после выгорания | DopaBrain",
    "heroTitle": "План мягкого возвращения после выгорания",
    "heroLead": "Проверьте 5 ловушек рецидива и выстройте устойчивый 4-недельный темп работы.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "पोस्ट-बर्नआउट वर्क री-एंट्री प्लानर | DopaBrain",
    "heroTitle": "पोस्ट-बर्नआउट वर्क री-एंट्री प्लानर",
    "heroLead": "5 थकान-वापसी जाल पहचानें और 4-सप्ताह की संतुलित वापसी योजना बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Kembali Kerja Pasca-Burnout | DopaBrain",
    "heroTitle": "Perencana Kembali Kerja Pasca-Burnout",
    "heroLead": "Audit 5 jebakan kambuh burnout dan susun ritme kerja 4 minggu yang berkelanjutan.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Tükenmişlik Sonrası İşe Dönüş Planlayıcı | DopaBrain",
    "heroTitle": "Tükenmişlik Sonrası İşe Dönüş Planlayıcı",
    "heroLead": "5 nüksetme tuzağını tespit edin ve sürdürülebilir 4 haftalık dönüş temposu kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "guilt_overcompensate",
    "en": "Guilt Overcompensation — Trying to work 120% to \"make up for\" time spent resting",
    "ko": "죄책감 과잉 보상 — 쉬었던 시간을 만회하려 120% 무리해서 일함"
  },
  {
    "id": "instant_yes",
    "en": "Instant-Yes Reflex — Accepting new requests on the spot before checking capacity",
    "ko": "즉각 수락 반사 — 여력을 확인하기도 전에 새 업무를 바로 떠안음"
  },
  {
    "id": "zero_lunch_break",
    "en": "Skipping Real Breaks — Eating at the desk and skipping midday mental resets",
    "ko": "점심·휴식 생략 — 자리에서 식사하며 낮 시간 회복 틈을 없앰"
  },
  {
    "id": "after_hours_leak",
    "en": "Evening Scope Creep — Checking emails or mentally rehearsing work late at night",
    "ko": "퇴근 후 업무 침투 — 밤늦게 메일을 확인하거나 업무 걱정을 이어감"
  },
  {
    "id": "silent_overload",
    "en": "Hiding Early Strain — Waiting until exhaustion returns before flagging priorities",
    "ko": "초기 과부하 침묵 — 다시 방전될 때까지 우선순위 조정을 요청하지 않음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Relapse Exposure — Lock Two Hard Guardrails Before Scaling Up",
    "koT": "재발 위험 높음 — 업무량을 늘리기 전 2가지 경계부터 단단히 잠그세요",
    "enD": "Guilt-driven overcompensation is the #1 cause of post-burnout relapse. Sustainable reliability at 75–80% pace outperforms short bursts followed by another crash.",
    "koD": "죄책감에서 비롯된 과잉 몰입이 번아웃 재발의 가장 흔한 원인입니다. 75~80%의 꾸준한 페이스가 단기 과로 후 재방전보다 훨씬 신뢰를 지킵니다.",
    "enS": "\"To keep quality consistent this month, I’m focusing on priorities A and B first—which item should move to next week if we add C?\"",
    "koS": "\"이번 달 업무 완성도를 꾸준히 유지하기 위해 A와 B를 우선 진행 중입니다. C를 추가한다면 어떤 항목을 다음 주로 조정하면 좋을까요?\"",
    "enL": [
      "Pause 2 hours before saying yes to any new commitment (\"Let me check my bandwidth and confirm by 3 PM\").",
      "Protect a hard device-off shutdown time and one 20-minute away-from-desk lunch break daily.",
      "Run a Friday 5-minute energy audit: if fatigue hits 4/5, proactively trim next week’s scope by 15%."
    ],
    "koL": [
      "새 요청에는 최소 2시간 여유를 두고 답하세요(\"일정 확인 후 오후 3시까지 회신드릴게요\").",
      "매일 정해진 마감 시간과 자리를 떠나는 20분 점심 휴식을 고정하세요.",
      "금요일마다 5분 에너지 점검을 하고 피로도가 높으면 다음 주 범위를 15% 선제 조정하세요."
    ]
  },
  "mid": {
    "enT": "Steady Re-Entry — Keep Capacity Trade-Offs Visible Early",
    "koT": "안정적 복귀 구간 — 업무 우선순위 교환 원칙을 꾸준히 유지하세요",
    "enD": "You have solid recovery awareness. Making trade-offs explicit whenever new tasks arrive will protect your momentum through month two.",
    "koD": "회복 감각이 잘 잡혀 있습니다. 새 업무가 들어올 때 우선순위 조정을 자연스럽게 공유하면 2개월 차에도 안정적으로 유지됩니다.",
    "enS": "\"I have room for two core deliverables this week; happy to slot this in first thing Monday.\"",
    "koS": "\"이번 주 핵심 산출물 2건에 집중하고 있어, 해당 건은 월요일 오전에 우선 배치하겠습니다.\"",
    "enL": [
      "Keep 25% of weekly calendar unbooked for unexpected work and recovery.",
      "Take a 5-minute screen-free break after every 90-minute focus block.",
      "Celebrate steady, repeatable weeks rather than heroic sprints."
    ],
    "koL": [
      "주간 일정의 25%는 돌발 업무와 회복 여유로 비워두세요.",
      "90분 집중 후에는 화면 없는 5분 휴식을 습관화하세요.",
      "무리한 단기 스퍼트보다 안정적으로 완주한 한 주를 칭찬하세요."
    ]
  },
  "high": {
    "enT": "Resilient Sustainable Rhythm — Maintain Your Early-Warning Check-Ins",
    "koT": "탄탄한 지속가능 리듬 — 주간 점검 습관을 계속 이어가세요",
    "enD": "Your boundaries and pacing habits are protecting your long-term stamina well. Keep reviewing workload monthly so gradual scope creep never builds silently.",
    "koD": "건강한 경계와 페이스 조절이 장기 체력을 잘 지켜주고 있습니다. 월 1회 업무량 점검으로 서서히 쌓이는 과부하만 예방하세요.",
    "enS": "\"Sustainable pacing is how I deliver my best work all year.\"",
    "koS": "\"지속가능한 페이스가 일 년 내내 최고의 결과를 내는 나의 방식이야.\"",
    "enL": [
      "Keep work notifications off during evenings and weekends.",
      "Review your top 3 priorities every Monday before opening inbox.",
      "Protect one restorative non-work activity mid-week."
    ],
    "koL": [
      "저녁과 주말에는 업무 알림을 꺼 둔 상태를 유지하세요.",
      "매주 월요일 메일함을 열기 전 핵심 우선순위 3가지를 먼저 확정하세요.",
      "주중에도 업무와 무관한 회복 활동 1가지를 꼭 지켜가세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_burnout_reentry_v1";
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
      window.gtag('event', "burnout_reentry_complete", {
        tool_slug: "burnout-return-to-work-planner",
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
      var shareUrl = "https://dopabrain.com/portal/tools/burnout-return-to-work-planner.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "burnout-return-to-work-planner",
        filename: 'dopabrain-burnout-return-to-work-planner-card.png',
        badge: "SUSTAINABLE RE-ENTRY • PACED WORK PLAN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#22c55e",
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
