/* Sustainable Pace & Healthy Work Boundary Audit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Sustainable Pace & Healthy Work Boundary Audit | DopaBrain",
    "metaDesc": "Caught between chronic over-functioning and total disengagement? Audit 5 invisible overwork leaks locally and design a calm, high-pride sustainable work rhythm.",
    "kicker": "SUSTAINABLE WORK • ANTI-OVERWORK ENERGY BOUNDARY AUDIT",
    "heroTitle": "Sustainable Pace & Healthy Work Boundary Audit",
    "heroLead": "Caught between chronic over-functioning and total disengagement? Audit 5 invisible overwork leaks locally and design a calm, high-pride sustainable work rhythm.",
    "chip1": "5 Overwork Leaks",
    "chip2": "Sustainable 80% Pace",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR INVISIBLE OVERWORK LEAKS (1 = BOUNDED, 5 = DEPLETED)",
    "step1Title": "Where is unrewarded over-functioning draining your life?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One clean work boundary I will honor starting tomorrow (100% local):",
    "ctaBtn": "Build My Sustainable Pace Boundary Plan",
    "resultBadge": "STEP 2 • YOUR HEALTHY SUSTAINABLE-PACE PROTOCOL",
    "noteTitle": "My Tomorrow Boundary",
    "meterLabel": "Pace Sustainability",
    "scriptTitle": "Polite Scope-Negotiation Line (No Guilt)",
    "stepsTitle": "3 Shifts From Exhausting Overwork to Calm Craft",
    "stickyTitle": "Check where you sit on the stress-to-burnout spectrum.",
    "stickySub": "Take the free 2-Min Burnout Check",
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
    "title": "과도한 헌신 멈춤 & 건강한 정시·에너지 경계 점검기 | DopaBrain",
    "metaDesc": "과도한 희생과 완전한 무기력 사이에서 흔들리고 있나요? 5가지 보이지 않는 과로 누수를 점검하고 자부심과 체력을 동시에 지키는 지속 가능한 업무 경계를 세우세요.",
    "kicker": "지속 가능한 페이스 · 무리한 헌신 멈춤 & 건강한 업무 경계 점검",
    "heroTitle": "과도한 헌신 멈춤 & 건강한 정시·에너지 경계 점검기",
    "heroLead": "과도한 희생과 완전한 무기력 사이에서 흔들리고 있나요? 5가지 보이지 않는 과로 누수를 점검하고 자부심과 체력을 동시에 지키는 지속 가능한 업무 경계를 세우세요.",
    "chip1": "5가지 과로 누수",
    "chip2": "지속 가능한 80% 페이스",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 보이지 않는 과로·에너지 누수 점검 (1 = 건강, 5 = 소진)",
    "step1Title": "보상 없는 과잉 헌신이 가장 크게 에너지를 빼앗는 지점은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 내일부터 지킬 건강한 업무 경계 1가지 (100% 로컬):",
    "ctaBtn": "내 지속 가능한 업무 경계 플랜 보기",
    "resultBadge": "2단계 • 자부심과 체력을 지키는 지속 가능 프로토콜",
    "noteTitle": "내일부터 지킬 업무 경계",
    "meterLabel": "페이스 지속 가능도",
    "scriptTitle": "죄책감 없이 업무 우선순위를 조율하는 1줄",
    "stepsTitle": "소진되는 야근에서 단단한 프로 페이스로 바꾸는 3단계",
    "stickyTitle": "현재 스트레스와 번아웃 스펙트럼 중 어디에 있는지 점검해 보세요.",
    "stickySub": "무료 2분 번아웃 테스트 바로가기",
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
    "title": "可持续工作节奏与健康职场边界自测 | DopaBrain",
    "heroTitle": "可持续工作节奏与健康职场边界自测",
    "heroLead": "停止隐形过度消耗，用清晰优先级权衡守住精力与专业成就感。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "無理な過剰献身ストップ＆健全な業務境界チェック | DopaBrain",
    "heroTitle": "無理な過剰献身ストップ＆健全な業務境界チェック",
    "heroLead": "消耗する残業ループから抜け出し、優先度調整と持続可能なペースを整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Auditoría de Ritmo Sostenible y Límites Laborales | DopaBrain",
    "heroTitle": "Auditoría de Ritmo Sostenible y Límites Laborales",
    "heroLead": "Sustituye la sobrecarga silenciosa por acuerdos claros de prioridades y descanso real.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Auditoria de Ritmo Sustentável e Limites no Trabalho | DopaBrain",
    "heroTitle": "Auditoria de Ritmo Sustentável e Limites no Trabalho",
    "heroLead": "Troque a sobrecarga invisível por prioridades transparentes e pausas saudáveis.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Nachhaltiges Arbeitstempo & Gesunde-Grenzen-Audit | DopaBrain",
    "heroTitle": "Nachhaltiges Arbeitstempo & Gesunde-Grenzen-Audit",
    "heroLead": "Ersetze stilles Überarbeiten durch klare Prioritäten-Abgleiche und echten Feierabend.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Audit Rythme Durable & Limites Saines au Travail | DopaBrain",
    "heroTitle": "Audit Rythme Durable & Limites Saines au Travail",
    "heroLead": "Remplacez la surcharge silencieuse par des arbitrages clairs et une vraie déconnexion.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Аудит устойчивого темпа и здоровых рабочих границ | DopaBrain",
    "heroTitle": "Аудит устойчивого темпа и здоровых рабочих границ",
    "heroLead": "Замените тихую переработку понятным согласованием приоритетов и отдыхом.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सस्टेनेबल वर्क पेस और हेल्दी बाउंड्री ऑडिट | DopaBrain",
    "heroTitle": "सस्टेनेबल वर्क पेस और हेल्दी बाउंड्री ऑडिट",
    "heroLead": "अतिरिक्त थकान छोड़कर स्पष्ट प्राथमिकताओं और स्वस्थ कार्य सीमाओं को अपनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Audit Ritme Kerja Berkelanjutan & Batas Sehat | DopaBrain",
    "heroTitle": "Audit Ritme Kerja Berkelanjutan & Batas Sehat",
    "heroLead": "Ganti kerja berlebihan tanpa batas dengan negosiasi prioritas yang tenang dan sehat.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sürdürülebilir Tempo ve Sağlıklı İş Sınırı Denetimi | DopaBrain",
    "heroTitle": "Sürdürülebilir Tempo ve Sağlıklı İş Sınırı Denetimi",
    "heroLead": "Sessiz aşırı çalışmayı net öncelik dengesi ve sağlıklı mesai sınırlarıyla değiştirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "instant_reply_reflex",
    "en": "Instant-Reply Reflex — Treating non-urgent pings like 911 emergencies all evening",
    "ko": "즉답 강박 — 급하지 않은 저녁 메시지에도 몇 초 만에 답장함"
  },
  {
    "id": "unasked_heroics",
    "en": "Unasked Heroics — Silently absorbing teammates’ dropped tasks to avoid conflict",
    "ko": "말 없는 떠안기 — 갈등을 피하려고 남이 미룬 일까지 조용히 다 떠맡음"
  },
  {
    "id": "skipping_lunch_breaks",
    "en": "Desk-Eating Marathons — Working 9 hours straight with zero 15-min mental reset",
    "ko": "점심·휴식 생략 — 9시간 내리 화면만 보며 짧은 회복도 없이 버팀"
  },
  {
    "id": "identity_fusion",
    "en": "Job-Identity Fusion — Feeling personally worthless whenever a work metric dips",
    "ko": "직업-자아 동일시 — 업무 지표가 조금만 흔들려도 내 가치가 떨어진 기분"
  },
  {
    "id": "cynical_detachment",
    "en": "Exhaustion Cynicism — Feeling flat and resentful instead of rested and clear",
    "ko": "소진형 냉소 — 푹 쉬지도 못한 채 일에 대한 냉소와 무력감만 쌓임"
  }
];
  var TIERS = {
  "low": {
    "enT": "Depleted Over-Functioning — Reclaim Off-Hours, Negotiate Trade-Offs & Deliver Clean 80% Craft",
    "koT": "과잉 헌신 소진 — 퇴근 후 알림 차단·우선순위 트레이드오프·건강한 80% 페이스를 회복하세요",
    "enD": "Healthy boundary-setting is not laziness—it is how high-craft professionals stay sharp for years instead of burning out in 6 months. Replacing silent overwork with clear priority trade-offs protects both quality and sanity.",
    "koD": "건강한 경계 설정은 태만이 아니라 몇 년이고 실력을 지키는 프로의 기술입니다. 말없이 떠안기 대신 명확한 우선순위 조율로 전환하면 일의 품질과 마음의 여유가 함께 살아납니다.",
    "enS": "\"I’d be happy to take on [New Task]—to keep quality high during core hours, which current priority should we move to next week?\"",
    "koS": "\"[새 업무] 맡아서 잘 진행하겠습니다! 핵심 근무 시간 안에 완성도를 지키려면 기존 A/B 중 어느 항목을 다음 주로 미루는 게 좋을까요?\"",
    "enL": [
      "Remove work chat badges from your personal phone home screen tonight.",
      "Use the Trade-Off Question whenever new rush work arrives instead of absorbing it silently.",
      "Take one true 20-minute screen-free lunch walk daily to reset nervous-system tone."
    ],
    "koL": [
      "오늘 밤 개인 폰 첫 화면에서 업무 메신저 알림 배지를 치워 두세요.",
      "급한 업무가 추가될 때 조용히 떠안지 말고 \"무엇을 뒤로 미룰까요?\" 질문으로 조율하세요.",
      "매일 20분만 화면 없이 점심 산책을 하며 자율신경을 환기하세요."
    ]
  },
  "mid": {
    "enT": "Calibrating — Guard Off-Hours & Keep Scope Transparent",
    "koT": "페이스 조율 중 — 퇴근 경계와 우선순위 투명성만 유지하세요",
    "enD": "You spot overwork drift early; tiny weekly resets keep energy sustainable.",
    "koD": "과로 신호를 일찍 알아차리고 있습니다. 주간 점검으로 건강한 리듬을 지켜 가세요.",
    "enS": "\"Sustainable output beats heroic sprints every quarter.\"",
    "koS": "\"분기마다 무리한 전력질주보다 꾸준한 80% 페이스가 결국 더 멀리 간다.\"",
    "enL": [
      "Honor your hard log-off time 4+ days/week.",
      "Protect lunch away from your keyboard.",
      "Keep hobbies and friends bigger than job titles."
    ],
    "koL": [
      "주 4일 이상 정시 퇴근 종료선을 지키세요.",
      "점심시간엔 키보드에서 손을 떼고 쉬세요.",
      "직함 바깥의 취미와 인간관계 비중을 키워 두세요."
    ]
  },
  "high": {
    "enT": "Grounded Sustainable Pace — High Craft Without Self-Erasure",
    "koT": "단단한 지속 가능 페이스 — 자부심과 워라밸이 균형을 이룹니다",
    "enD": "You deliver solid work while keeping personal energy and identity intact.",
    "koD": "일의 완성도와 개인의 삶 모두를 건강하게 지키고 있습니다.",
    "enS": "\"I bring clear focus during work hours and full presence to my life afterward.\"",
    "koS": "\"일할 때는 명료하게 집중하고, 퇴근 후에는 온전히 내 삶을 산다.\"",
    "enL": [
      "Keep modeling healthy response-time norms.",
      "Review workload once a month.",
      "Invest restored energy into joy outside work."
    ],
    "koL": [
      "건강한 응답 시간 기준을 계속 지켜 나가세요.",
      "월 1회 업무량과 에너지 균형을 점검하세요.",
      "남겨 둔 에너지를 일 밖의 즐거움에 투자하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_sustainable_pace_v1";
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
      window.gtag('event', "sustainable_pace_audit_complete", {
        tool_slug: "quiet-quitting-energy-boundary-audit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/quiet-quitting-energy-boundary-audit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "quiet-quitting-energy-boundary-audit",
        filename: 'dopabrain-quiet-quitting-energy-boundary-audit-card.png',
        badge: "SUSTAINABLE WORK • ANTI-OVERWORK ENERGY BOUNDARY AUDIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
        accent2: "#0ea5e9"
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
