/* Toxic Workplace Reality Check & Calm Exit Readiness
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Toxic Workplace Reality Check & Calm Exit Readiness | DopaBrain",
    "metaDesc": "Not sure whether a rough job is just a busy quarter or a genuinely unhealthy environment? Audit 5 objective workplace red flags locally and map a calm, financially safe exit timeline.",
    "kicker": "WORKPLACE REALITY CHECK • CALM EXIT PLANNER",
    "heroTitle": "Toxic Workplace Reality Check & Calm Exit Readiness",
    "heroLead": "Not sure whether a rough job is just a busy quarter or a genuinely unhealthy environment? Audit 5 objective workplace red flags locally and map a calm, financially safe exit timeline.",
    "chip1": "5 Culture Red Flags",
    "chip2": "Safe Exit Roadmap",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT OBJECTIVE WORKPLACE CONDITIONS (1 = HEALTHY, 5 = CHRONIC RED FLAG)",
    "step1Title": "Which systemic workplace patterns are eroding your health?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One concrete exit-readiness step I can complete privately this week (100% local):",
    "ctaBtn": "Assess Culture & Exit Readiness",
    "resultBadge": "STEP 2 • YOUR CALM WORKPLACE PROTECTION & EXIT PLAN",
    "noteTitle": "My Private This-Week Readiness Step",
    "meterLabel": "Workplace Psychological Safety",
    "scriptTitle": "Calm Emotional Detachment Boundary",
    "stepsTitle": "3 Practical Moves to Protect Your Health & Leverage",
    "stickyTitle": "Check how deeply this workplace is affecting your burnout score",
    "stickySub": "Take the free 90-second Burnout Test next",
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
    "title": "유해 직장·조직 스트레스 현실 점검 & 차분한 이직 준비도 | DopaBrain",
    "metaDesc": "지금 직장의 고통이 일시적 성수기인지, 구조적으로 건강하지 않은 환경인지 헷갈리나요? 5가지 객관적 조직 위험 신호를 점검하고 안전한 탈출 준비 단계를 설계하세요.",
    "kicker": "유해 직장 현실 점검 · 차분한 탈출 준비 플래너",
    "heroTitle": "유해 직장·조직 스트레스 현실 점검 & 차분한 이직 준비도",
    "heroLead": "지금 직장의 고통이 일시적 성수기인지, 구조적으로 건강하지 않은 환경인지 헷갈리나요? 5가지 객관적 조직 위험 신호를 점검하고 안전한 탈출 준비 단계를 설계하세요.",
    "chip1": "5가지 조직 위험신호",
    "chip2": "안전한 탈출 로드맵",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 객관적 직장 환경 신호 점검 (1 = 건강함, 5 = 만성 위험)",
    "step1Title": "지금 건강과 자존감을 갉아먹고 있는 구조적 조직 패턴은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주 조용히 완료할 수 있는 구체적 탈출 준비 1단계 (100% 로컬):",
    "ctaBtn": "조직 현실 진단 & 안전한 준비 플랜 보기",
    "resultBadge": "2단계 • 차분한 자기 보호 및 이직 준비 로드맵",
    "noteTitle": "이번 주 조용히 실행할 준비 1단계",
    "meterLabel": "직장 심리적 안전감 지수",
    "scriptTitle": "조직 혼란과 나를 분리하는 심리 경계 문장",
    "stepsTitle": "건강과 협상력을 동시에 지키는 3단계",
    "stickyTitle": "현재 직장 환경이 내 번아웃 지수에 얼마나 영향을 주는지 확인해 볼까요?",
    "stickySub": "무료 90초 번아웃 테스트로 현재 소진 단계 측정",
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
    "title": "有毒职场现实自检与冷静离职准备 | DopaBrain",
    "heroTitle": "有毒职场现实自检与冷静离职准备",
    "heroLead": "本地评估5大组织红旗信号，制定财务与心理双稳妥的90天体面撤离计划。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "ブラック職場現実チェック＆静かな転職準備 | DopaBrain",
    "heroTitle": "ブラック職場現実チェック＆静かな転職準備",
    "heroLead": "5つの組織レッドフラッグを客観点検し、安全な90日イグジット計画を作成。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Chequeo de Trabajo Tóxico y Plan de Salida | DopaBrain",
    "heroTitle": "Chequeo de Trabajo Tóxico y Plan de Salida",
    "heroLead": "Evalúa 5 señales objetivas de cultura tóxica y prepara una salida segura en 90 días.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Check de Trabalho Tóxico e Plano de Saída | DopaBrain",
    "heroTitle": "Check de Trabalho Tóxico e Plano de Saída",
    "heroLead": "Mapeie 5 sinais de cultura tóxica e planeje uma saída calma e financeiramente segura.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Toxischer Arbeitsplatz & Ruhiger Exit-Plan | DopaBrain",
    "heroTitle": "Toxischer Arbeitsplatz & Ruhiger Exit-Plan",
    "heroLead": "Prüfe 5 objektive Kultur-Warnsignale lokal und plane einen sicheren 90-Tage-Wechsel.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Bilan Travail Toxique & Plan de Sortie | DopaBrain",
    "heroTitle": "Bilan Travail Toxique & Plan de Sortie",
    "heroLead": "Évaluez 5 signaux de culture toxique en privé et préparez une sortie sereine en 90 jours.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Проверка токсичной работы и план выхода | DopaBrain",
    "heroTitle": "Проверка токсичной работы и план выхода",
    "heroLead": "Оцените 5 объективных красных флагов культуры и составьте спокойный 90-дневный план.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "टॉक्सिक वर्कप्लेस व शांत एग्ज़िट प्लानर | DopaBrain",
    "heroTitle": "टॉक्सिक वर्कप्लेस व शांत एग्ज़िट प्लानर",
    "heroLead": "5 कार्यस्थल रेड फ्लैग जांचें और सुरक्षित 90-दिन की नौकरी बदलाव योजना बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Cek Lingkungan Kerja Toksik & Kesiapan Pindah | DopaBrain",
    "heroTitle": "Cek Lingkungan Kerja Toksik & Kesiapan Pindah",
    "heroLead": "Audit 5 tanda budaya kerja tidak sehat secara lokal dan susun rencana pindah 90 hari.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Toksik İş Yeri Kontrolü ve Sakin Çıkış Planı | DopaBrain",
    "heroTitle": "Toksik İş Yeri Kontrolü ve Sakin Çıkış Planı",
    "heroLead": "5 nesnel iş kültürü uyarısını ölçün ve 90 günlük güvenli geçiş planı hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "moving_goalposts",
    "en": "Moving Goalposts & Blame — Expectations shift unpredictably with public blame instead of coaching",
    "ko": "변덕스러운 기준·책임 전가 — 명확한 기준 없이 결과가 안 좋으면 공개적으로 탓함"
  },
  {
    "id": "chronic_boundary_breach",
    "en": "Always-On Boundary Violation — Routine late-night or weekend urgency for non-emergencies",
    "ko": "만성 경계 침범 — 진짜 긴급 건도 아닌데 야간·주말 즉시 응답을 당연시함"
  },
  {
    "id": "psych_unsafe",
    "en": "Fear of Speaking Up — Raising realistic risks triggers defensiveness or retaliation",
    "ko": "심리적 안전감 부재 — 현실적 리스크를 말하면 방어적 반응이나 불이익이 돌아옴"
  },
  {
    "id": "body_sunday_dread",
    "en": "Physical Somatic Signals — Persistent stomach knots, headaches, or dread every Sunday afternoon",
    "ko": "신체 경보 신호 — 매주 일요일 오후부터 두통·소화불량·심한 압박감이 반복됨"
  },
  {
    "id": "zero_repair",
    "en": "Broken Promises — Repeated commitments on workload, pay, or support quietly vanish",
    "ko": "반복되는 빈 약속 — 인력 충원·처우 개선·업무 조정 약속이 계속 무산됨"
  }
];
  var TIERS = {
  "low": {
    "enT": "Chronically Unhealthy Culture — Shift to Quiet Self-Protection & 90-Day Exit Prep",
    "koT": "만성 유해 환경 신호 — 감정적 소모를 멈추고 90일 조용한 탈출 준비에 착수하세요",
    "enD": "Organizational psychologist Amy Edmondson’s work shows chronically low psychological safety cannot be fixed by working harder as an individual. Shift from trying to \"earn fairness\" to calmly documenting your achievements and building outside options.",
    "koD": "심리적 안전감 연구에 따르면 구조적으로 망가진 조직 문화는 개인이 더 열심히 일한다고 바뀌지 않습니다. 억울함을 증명하려 에너지를 쓰기보다, 조용히 내 성과를 정리하고 안전한 외부 선택지를 구축하세요.",
    "enS": "\"My job is a contract, not my identity. While I build my next chapter quietly, I will deliver steady B+ work and stop donating my nervous system.\"",
    "koS": "\"직장은 계약 관계이지 내 존재 가치 자체가 아니야. 다음 챕터를 조용히 준비하는 동안, 무리한 과몰입 대신 안정적인 선만 지킬게.\"",
    "enL": [
      "Start a private personal log of 5 measurable achievements and key metrics (never on work devices).",
      "Pull back from unpaid emotional over-functioning—meet written expectations cleanly and log off.",
      "Check your personal cash buffer and start 2 low-pressure networking or recruiter chats per month."
    ],
    "koL": [
      "회사 기기가 아닌 개인 노트에 내가 만든 정량적 성과 5가지를 지금부터 정리해 두세요.",
      "보상 없는 감정 과잉 헌신을 멈추고, 명시된 핵심 업무만 깔끔히 끝낸 뒤 정시 로그오프하세요.",
      "개인 비상금 여유를 확인하고 월 2건 정도 부담 없는 업계 커피챗·탐색을 시작하세요."
    ]
  },
  "mid": {
    "enT": "Strained Culture — Run a 60-Day Boundary Test Before Deciding",
    "koT": "긴장된 조직 환경 — 최종 결정 전 60일 명확한 경계선 테스트를 해보세요",
    "enD": "Some friction may come from disorganized management rather than malice. Testing clear written priorities for 60 days reveals quickly whether things improve or confirm an exit.",
    "koD": "악의보다는 체계 부족에서 온 혼란일 수도 있습니다. 60일간 서면 우선순위 합의와 정시 경계를 테스트해 보면 남을지 떠날지가 명확해집니다.",
    "enS": "\"To deliver [Project A] well by Friday, which of these other two items should we move to next week?\"",
    "koS": "\"금요일까지 [프로젝트 A]를 제대로 끝내기 위해 나머지 두 업무 중 무엇을 다음 주로 조정하면 좋을까요?\"",
    "enL": [
      "Put workload trade-offs in writing politely so priorities stay visible.",
      "Set a 60-day calendar checkpoint to re-score these 5 workplace signals objectively.",
      "Keep your resume and portfolio updated twice a year regardless of job status."
    ],
    "koL": [
      "업무 과부하 조율은 구두가 아닌 짧은 메일·메신저로 남겨 우선순위를 투명하게 하세요.",
      "60일 뒤 캘린더에 알림을 걸어 이 5가지 신호가 개선됐는지 객관적으로 재점검하세요.",
      "이직 여부와 무관하게 반기 1회 이력서·포트폴리오를 최신화해 선택권을 유지하세요."
    ]
  },
  "high": {
    "enT": "Fundamentally Healthy Environment — Focus on Normal Pacing & Growth",
    "koT": "기본적으로 건강한 조직 — 일시적 피로 관리와 성장에 집중하세요",
    "enD": "Your workplace shows solid respect and psychological safety. Address temporary workload spikes through open communication and regular rest.",
    "koD": "심리적 안전감과 기본 존중이 잘 유지되는 환경입니다. 일시적인 바쁜 시기는 솔직한 소통과 휴식 루틴으로 충분히 관리할 수 있습니다.",
    "enS": "\"A busy sprint in a respectful team is manageable when I communicate early and rest afterward.\"",
    "koS": "\"존중이 있는 팀에서의 바쁜 시기는 조기 소통과 사후 휴식으로 충분히 회복할 수 있다.\"",
    "enL": [
      "Communicate bandwidth early during crunch weeks.",
      "Appreciate supportive teammates and keep strong recovery habits.",
      "Invest saved emotional energy in craft growth."
    ],
    "koL": [
      "바쁜 주간에는 한계에 닿기 전 미리 리소스 상황을 공유하세요.",
      "건강한 동료 관계를 지키며 규칙적인 휴식 습관을 유지하세요.",
      "아낀 감정 에너지를 본인의 전문성 성장에 투자하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_toxic_workplace_exit_v1";
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
      window.gtag('event', "toxic_workplace_exit_complete", {
        tool_slug: "toxic-workplace-exit-readiness",
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
      var shareUrl = "https://dopabrain.com/portal/tools/toxic-workplace-exit-readiness.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "toxic-workplace-exit-readiness",
        filename: 'dopabrain-toxic-workplace-exit-readiness-card.png',
        badge: "WORKPLACE REALITY CHECK • CALM EXIT PLANNER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f97316",
        accent2: "#ef4444"
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
