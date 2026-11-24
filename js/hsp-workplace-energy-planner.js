/* HSP Workplace Energy & Sensory Budget Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "HSP Workplace Energy & Sensory Budget Planner | DopaBrain",
    "metaDesc": "Open-plan noise, harsh lighting, and back-to-back Slack pings draining you by 2 PM? Map 5 workplace sensory stressors locally and build a discreet workday pacing & boundary script.",
    "kicker": "HIGHLY SENSITIVE WORKDAY • ENERGY BUDGET",
    "heroTitle": "HSP Workplace Energy & Sensory Budget Planner",
    "heroLead": "Open-plan noise, harsh lighting, and back-to-back Slack pings draining you by 2 PM? Map 5 workplace sensory stressors locally and build a discreet workday pacing & boundary script.",
    "chip1": "5 Office Stressors",
    "chip2": "Discreet Pacing Scripts",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • RATE WORKPLACE SENSORY LOAD (1 = CALM, 5 = EXHAUSTING)",
    "step1Title": "Which workplace inputs drain your nervous system fastest?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One 5-minute sensory micro-break I can take mid-day (100% local):",
    "ctaBtn": "Build HSP Workday Plan",
    "resultBadge": "STEP 2 • YOUR HSP WORKDAY PACING PROTOCOL",
    "noteTitle": "My Mid-Day 5-Minute Decompression Anchor",
    "meterLabel": "Workday Sensory Reserve",
    "scriptTitle": "Professional, Low-Friction Boundary Script",
    "stepsTitle": "3 Discreet Adjustments for a Calmer Workday",
    "stickyTitle": "Explore your full Sensory Processing Sensitivity (HSP) profile",
    "stickySub": "Free 20-signal reflection + private 5-minute sensory reset room",
    "stickyBtn": "HSP Test →",
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
    "title": "HSP 직장 감각·에너지 예산 플래너 | DopaBrain",
    "metaDesc": "오픈 오피스 소음, 강한 조명, 끝없는 메신저 알림에 오후 2시면 방전되나요? 5가지 직장 감각 부하를 점검하고 티 나지 않는 회복 루틴과 정중한 경계 문장을 만드세요.",
    "kicker": "HSP 직장 에너지 설계 · 감각 보호 플래너",
    "heroTitle": "HSP 직장 감각·에너지 예산 플래너",
    "heroLead": "오픈 오피스 소음, 강한 조명, 끝없는 메신저 알림에 오후 2시면 방전되나요? 5가지 직장 감각 부하를 점검하고 티 나지 않는 회복 루틴과 정중한 경계 문장을 만드세요.",
    "chip1": "5가지 직장 감각 부하",
    "chip2": "정중한 경계 스크립트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 직장 감각·대인 부하 점검 (1 = 편안함, 5 = 매우 소모적)",
    "step1Title": "직장에서 내 신경계를 가장 빠르게 소모시키는 자극은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 낮 시간 중 실천할 나만의 5분 감각 리셋 (100% 로컬):",
    "ctaBtn": "HSP 직장 에너지 보호 플랜 만들기",
    "resultBadge": "2단계 • HSP 직장 페이싱 & 보호 프로토콜",
    "noteTitle": "나의 낮 시간 5분 감각 휴식 앵커",
    "meterLabel": "직장 감각 에너지 여유도",
    "scriptTitle": "직장에서 쓰기 좋은 정중한 경계 문장",
    "stepsTitle": "티 나지 않게 직장을 편안하게 만드는 3가지 조정",
    "stickyTitle": "나의 전체 HSP 감각 민감도 프로필 확인하기",
    "stickySub": "무료 20문항 민감도 분석 + 5분 감각 리셋 룸",
    "stickyBtn": "HSP 테스트 →",
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
    "title": "HSP高敏感职场感官与精力预算器 | DopaBrain",
    "heroTitle": "HSP高敏感职场感官与精力预算器",
    "heroLead": "排查5大办公室感官耗电项，生成低调得体的专注边界与午间恢复方案。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "HSP職場の感覚・エネルギー予算設計 | DopaBrain",
    "heroTitle": "HSP職場の感覚・エネルギー予算設計",
    "heroLead": "職場の5大刺激負荷を整理し、周囲に角を立てない静かな回復ルーティンを作成。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador Laboral de Energía HSP | DopaBrain",
    "heroTitle": "Planificador Laboral de Energía HSP",
    "heroLead": "Mapea 5 estresores sensoriales de oficina y crea pausas discretas y límites claros.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Energia no Trabalho HSP | DopaBrain",
    "heroTitle": "Planejador de Energia no Trabalho HSP",
    "heroLead": "Mapeie 5 estressores sensoriais do trabalho e crie pausas discretas e limites claros.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "HSP-Arbeitsplatz-Energie- & Reiz-Planer | DopaBrain",
    "heroTitle": "HSP-Arbeitsplatz-Energie- & Reiz-Planer",
    "heroLead": "Prüfe 5 sensorische Büro-Belastungen und erstelle diskrete Pausen- & Grenzenskripte.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Énergie & Travail HSP | DopaBrain",
    "heroTitle": "Planificateur Énergie & Travail HSP",
    "heroLead": "Cartographiez 5 surcharges sensorielles au bureau et créez vos pauses et limites discrètes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Планировщик энергии на работе для ВЧЛ | DopaBrain",
    "heroTitle": "Планировщик энергии на работе для ВЧЛ",
    "heroLead": "Оцените 5 сенсорных нагрузок в офисе и соберите деликатные границы и паузы.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "HSP कार्यस्थल ऊर्जा व सेंसरी प्लानर | DopaBrain",
    "heroTitle": "HSP कार्यस्थल ऊर्जा व सेंसरी प्लानर",
    "heroLead": "ऑफिस के 5 सेंसरी तनाव कारकों की जांच करें और शांत वर्क-डे बाउंड्री प्लान बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Energi Kerja & Sensorik HSP | DopaBrain",
    "heroTitle": "Perencana Energi Kerja & Sensorik HSP",
    "heroLead": "Petakan 5 pemicu sensorik kantor dan susun skrip batasan kerja yang tenang dan sopan.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "HSP İş Yeri Enerji ve Duyu Planlayıcı | DopaBrain",
    "heroTitle": "HSP İş Yeri Enerji ve Duyu Planlayıcı",
    "heroLead": "5 ofis duyusal stresörünü ölçün ve nazik iş yeri sınır metinleri oluşturun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "office_acoustics",
    "en": "Acoustic Overload — Open-office chatter, keyboard clatter, or overlapping calls",
    "ko": "청각 과부하 — 사무실 대화 소음, 전화 소리, 배경 소음 지속"
  },
  {
    "id": "emotional_contagion",
    "en": "Team Mood Absorption — Picking up on stressed managers or tense Slack tone",
    "ko": "감정 전염 — 예민한 상사·동료의 긴장이나 메신저 말투를 그대로 흡수"
  },
  {
    "id": "meeting_density",
    "en": "Meeting Stack — Back-to-back video or in-person meetings with zero quiet buffer",
    "ko": "연속 회의 밀도 — 휴식 없이 이어지는 화상·대면 회의"
  },
  {
    "id": "scrutiny_pressure",
    "en": "Being Watched / Rushed — Performing under sudden deadlines or live screen-sharing",
    "ko": "주시·재촉 압박 — 갑작스러운 마감이나 실시간 관찰 속 업무 수행"
  },
  {
    "id": "visual_glare",
    "en": "Lighting & Screen Glare — Harsh overhead fluorescents or cluttered notifications",
    "ko": "조명·화면 눈부심 — 강한 형광등과 쉴 새 없이 뜨는 팝업 알림"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Workplace Sensory Drain — Install Quiet Buffers & Async Windows",
    "koT": "직장 감각 소모 높음 — 조용한 완충 시간과 비동기 응답 구간을 확보하세요",
    "enD": "Deep processing is a real strength at work, but without sensory buffers it hits a wall fast. Small structural tweaks protect both output and evening energy.",
    "koD": "깊은 정보 처리는 직장에서 큰 강점이지만, 감각 완충 없이 달면 빠르게 방전됩니다. 작은 구조 조정만으로도 업무 품질과 퇴근 후 체력을 지킬 수 있습니다.",
    "enS": "\"To give this thorough attention, I am going heads-down for 90 minutes and will share a written update at 2:30 PM.\"",
    "koS": "\"이 작업을 꼼꼼히 정리하기 위해 90분간 집중한 뒤 오후 2시 30분에 문서로 공유드리겠습니다.\"",
    "enL": [
      "Block two 10-minute \"buffer holds\" after heavy meetings so you can step into a quiet space.",
      "Switch one ad-hoc verbal sync to a clear written bullet summary whenever possible.",
      "Use neutral noise dampening (earplugs, brown noise, or softer screen warmth) during solo tasks."
    ],
    "koL": [
      "부담이 큰 회의 직후 10분 완충 일정을 캘린더에 확보해 조용히 숨을 고르세요.",
      "가능한 즉흥 구두 미팅 1건은 핵심 불릿 문서 공유로 전환해 보세요.",
      "개인 집중 시간에는 귀마개·브라운 노이즈·화면 색온도 조절로 자극을 낮추세요."
    ]
  },
  "mid": {
    "enT": "Moderate Office Load — Guard Your Peak Focus Window & Lunch Reset",
    "koT": "중간 감각 부하 — 핵심 집중 시간대와 조용한 점심 리셋을 지키세요",
    "enD": "Your workday is manageable, and adding one solo quiet reset at midday will prevent evening depletion.",
    "koD": "감당 가능한 수준이지만, 점심 무렵 혼자만의 조용한 리셋 15분을 넣으면 퇴근 후 방전을 크게 줄일 수 있습니다.",
    "enS": "\"I work best when I batch quick questions—let’s review these together at 3 PM.\"",
    "koS": "\"질문을 모아 한 번에 정리할 때 정확도가 높습니다. 오후 3시에 함께 검토할까요?\"",
    "enL": [
      "Take at least 15 minutes of solo, low-chatter rest during lunch.",
      "Turn off non-critical desktop pop-ups so you choose when to look.",
      "Close your workday with a 5-minute transition walk or wash-up to leave work mood behind."
    ],
    "koL": [
      "점심시간 중 최소 15분은 대화 없는 혼자만의 저자극 휴식으로 확보하세요.",
      "필수 외 데스크톱 팝업 알림을 꺼 두고 정해진 시간에만 확인하세요.",
      "퇴근 직후 5분 산책이나 세안으로 직장 긴장을 몸에서 털어내세요."
    ]
  },
  "high": {
    "enT": "Balanced HSP Workday — Sustain Your Low-Friction Rhythm",
    "koT": "안정적인 HSP 업무 리듬 — 현재의 건강한 감각 균형을 유지하세요",
    "enD": "Your sensory pacing and boundaries are working well. Keep protecting quiet deep-processing blocks where your conscientiousness shines.",
    "koD": "감각 페이싱과 업무 경계가 잘 작동하고 있습니다. 세심한 통찰력이 빛나는 조용한 집중 블록을 계속 지켜나가세요.",
    "enS": "\"Protecting calm focus lets me bring my sharpest thinking and calm presence to the team.\"",
    "koS": "\"차분한 집중 시간을 지킬수록 팀에도 가장 깊고 안정적인 기여를 할 수 있다.\"",
    "enL": [
      "Keep your weekly calendar balanced between collaborative and solo days.",
      "Reuse written templates for recurring requests to save emotional energy.",
      "Check in every Friday on which tiny tweak gave you the most calm."
    ],
    "koL": [
      "주간 일정에서 협업 시간과 혼자 집중하는 시간의 비율을 꾸준히 관리하세요.",
      "반복 요청에는 미리 만든 정중한 문구 템플릿을 활용해 에너지를 아끼세요.",
      "매주 금요일 이번 주 가장 효과적이었던 감각 보호 습관 1개를 기록해 두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_hsp_workplace_v1";
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
      window.gtag('event', "hsp_workplace_plan_complete", {
        tool_slug: "hsp-workplace-energy-planner",
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
      var shareUrl = "https://dopabrain.com/portal/tools/hsp-workplace-energy-planner.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "hsp-workplace-energy-planner",
        filename: 'dopabrain-hsp-workplace-energy-planner-card.png',
        badge: "HIGHLY SENSITIVE WORKDAY • ENERGY BUDGET",
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
