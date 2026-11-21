/* Relationship Green-Flag & Emotional Maturity Audit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Relationship Green-Flag & Emotional Maturity Audit | DopaBrain",
    "metaDesc": "Free 12-language Relationship Green-Flag & Emotional Maturity Audit. Evaluate 5 evidence-based relational safety pillars locally—repair, boundary respect, consistency, and accountability.",
    "keywords": "relationship green flags audit, emotional maturity signs test, healthy relationship checklist, relational safety score, dating green flags, dopabrain",
    "kicker": "RELATIONAL SAFETY & MATURITY AUDIT",
    "heroTitle": "Relationship Green-Flag & Emotional Maturity Audit",
    "heroLead": "When chemistry feels loud, it is easy to overlook whether a relationship actually feels emotionally safe. Rate 5 observable maturity behaviors privately to clarify what is working and what needs a firm boundary.",
    "chip1": "5 Safety Pillars",
    "chip2": "Clarity Score",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK OBSERVABLE SAFETY FRICTION (1 = STRONG GREEN FLAG, 5 = MISSING / STRAINED)",
    "step1Title": "How often do these relational safety gaps show up right now?",
    "step1Sub": "Rate observable actions—not promises. Everything stays strictly local on your device.",
    "inputLabel": "Optional: 1 non-negotiable relational standard I want to honor (100% local):",
    "inputPlaceholder": "Example: Disagreements end with repair and accountability, never silent punishment",
    "ctaBtn": "Calculate Safety Index & Next Step",
    "resultBadge": "STEP 2 • YOUR RELATIONAL SAFETY AUDIT",
    "noteTitle": "My Non-Negotiable Relational Standard",
    "meterLabel": "Relational Green-Flag Index",
    "scriptTitle": "Direct Standard-Setting Conversation Script",
    "stepsTitle": "3 Grounded Moves Based on This Audit",
    "stickyTitle": "Need words to test whether someone respects a clear \"no\"?",
    "stickySub": "Generate calm, guilt-free boundary scripts in 12 languages",
    "stickyBtn": "Boundary Scripts →",
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
    "title": "관계 그린플래그 & 정서적 성숙도 감사 | DopaBrain",
    "metaDesc": "설렘이나 말뿐인 약속 말고 실제로 정서적으로 안전한 관계인가요? 거절 존중·갈등 회복·언행 일치 등 5가지 성숙도 지표를 비공개로 점검하고 기준 문장을 받으세요.",
    "kicker": "관계 안전성 & 정서적 성숙도 점검",
    "heroTitle": "관계 그린플래그 & 정서적 성숙도 감사",
    "heroLead": "감정적 끌림이 클수록 정작 안전한 관계인지 놓치기 쉽습니다. 약속이 아닌 실제 행동 5가지를 로컬에서 점검해 건강한 관계인지, 분명한 경계가 필요한지 명확히 확인하세요.",
    "chip1": "5가지 안전 지표",
    "chip2": "그린플래그 지수",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 관계 안전성 마찰 점검 (1 = 매우 건강함, 5 = 반복 부족)",
    "step1Title": "현재 관계에서 아래 안전 지표의 빈틈이 얼마나 자주 보이나요?",
    "step1Sub": "말이 아니라 실제 행동 패턴으로 평가하세요. 모든 기록은 내 기기에만 남습니다.",
    "inputLabel": "선택: 내가 절대 타협하지 않을 건강한 관계 기준 1가지 (100% 로컬):",
    "ctaBtn": "그린플래그 지수 계산 & 다음 행동 보기",
    "resultBadge": "2단계 • 나의 관계 그린플래그 감사 결과",
    "noteTitle": "내가 지키기로 정한 관계 기준",
    "meterLabel": "관계 그린플래그 안전 지수",
    "scriptTitle": "건강한 관계 기준을 담백하게 전달하는 문장",
    "stepsTitle": "이 결과에 맞춘 3가지 현실 행동",
    "stickyTitle": "상대가 나의 정중한 \"아니오\"를 존중하는지 확인하고 싶나요?",
    "stickySub": "죄책감 없는 경계선 스크립트 빌더로 대화문을 준비하세요",
    "stickyBtn": "경계선 빌더 →",
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
    "title": "关系绿旗与情绪成熟度审计 | DopaBrain",
    "heroTitle": "关系绿旗与成熟度审计",
    "ctaBtn": "计算安全指数与建议",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "関係グリーンフラッグ＆成熟度診断 | DopaBrain",
    "heroTitle": "関係グリーンフラッグ診断",
    "ctaBtn": "安心指数をチェック",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Auditoría de Banderas Verdes y Madurez | DopaBrain",
    "heroTitle": "Auditoría de Banderas Verdes",
    "ctaBtn": "Calcular índice seguro",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Auditoria de Sinais Verdes e Maturidade | DopaBrain",
    "heroTitle": "Sinais Verdes no Relacionamento",
    "ctaBtn": "Calcular índice seguro",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Beziehungs-Green-Flag- & Reife-Audit | DopaBrain",
    "heroTitle": "Beziehungs-Green-Flag-Audit",
    "ctaBtn": "Sicherheitsindex prüfen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Audit Green Flags & Maturité Émotionnelle | DopaBrain",
    "heroTitle": "Audit Green Flags Relationnels",
    "ctaBtn": "Calculer l’indice de sécurité",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Аудит зелёных флагов и зрелости | DopaBrain",
    "heroTitle": "Аудит зелёных флагов",
    "ctaBtn": "Рассчитать индекс",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "रिलेशनशिप ग्रीन-फ्लैग और मैच्योरिटी ऑडिट | DopaBrain",
    "heroTitle": "ग्रीन-फ्लैग ऑडिट",
    "ctaBtn": "सेफ्टी इंडेक्स देखें",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Audit Green Flag & Kematangan Relasi | DopaBrain",
    "heroTitle": "Audit Green Flag Relasi",
    "ctaBtn": "Hitung Indeks Aman",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "İlişki Yeşil Bayrak ve Olgunluk Denetimi | DopaBrain",
    "heroTitle": "İlişki Yeşil Bayrak Denetimi",
    "ctaBtn": "Güven Endeksini Hesapla",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "respect_no",
    "en": "Friction Around \"No\" — Pushing back, sulking, or guilting when you set a small limit",
    "ko": "거절 수용 부족 — 작은 경계나 거절을 말하면 삐지거나 죄책감을 유발함"
  },
  {
    "id": "repair_gap",
    "en": "Unrepaired Conflicts — Arguments end in stonewalling, blame-shifting, or sweeping under the rug",
    "ko": "갈등 회복 부재 — 다툼 후 회피·책임 전가·잠수로 넘어가고 진정한 사과가 없음"
  },
  {
    "id": "consistency",
    "en": "Hot-and-Cold Inconsistency — Warm promises followed by unpredictable withdrawal or mixed signals",
    "ko": "일관성 결여 — 따뜻함과 냉담함이 오가고 말과 행동이 자주 어긋남"
  },
  {
    "id": "accountability",
    "en": "Defensiveness Over Curiosity — Any gentle feedback turns into an attack or victim-reversal",
    "ko": "방어적 태도 — 부드러운 피드백도 공격으로 받아들이거나 오히려 피해자 역할을 취함"
  },
  {
    "id": "mutual_space",
    "en": "Loss of Individuality — Feeling uneasy seeing friends, resting alone, or having separate opinions",
    "ko": "개별 공간 침해 — 혼자 쉬거나 친구를 만나고 다른 의견을 내는 게 눈치 보임"
  }
];
  var TIERS = {
  "low": {
    "enT": "Low Relational Safety — Trust Observable Patterns Over Potential",
    "koT": "낮은 관계 안전 지수 — 가능성이 아닌 반복되는 실제 행동을 믿으세요",
    "enD": "Multiple core pillars of emotional maturity are missing right now. Loving someone’s potential cannot compensate for chronic defensiveness, mixed signals, or boundary violations.",
    "koD": "정서적 성숙도의 핵심 기둥 여러 개가 비어 있습니다. \"언젠가 바뀔 거야\"라는 기대보다 지금 반복되는 행동 패턴을 직시하고 내 안전을 먼저 지켜야 할 시점입니다.",
    "enS": "\"I care about being honest with you: consistent follow-through and respectful repair after disagreements are non-negotiable for me to continue investing here.\"",
    "koS": "\"솔직하게 말할게요. 언행의 일관성과 갈등 후 서로 존중하며 회복하는 과정은 제가 관계를 이어가기 위해 반드시 필요한 기준입니다.\"",
    "enL": [
      "Test ONE clear, calm boundary this week and observe the reaction without softening it.",
      "Journal facts (what was said vs. done) so intermittent warmth does not blur reality.",
      "Lean back into trusted friends or outside support rather than isolating."
    ],
    "koL": [
      "이번 주 작고 분명한 경계선 1가지를 말해보고 상대가 어떻게 반응하는지 있는 그대로 관찰하세요.",
      "가끔 보여주는 다정함에 흔들리지 않도록 말과 실제 행동의 차이를 객관적으로 기록하세요.",
      "혼자 고민하지 말고 믿을 수 있는 친구·가족과의 연결을 넓혀 시야를 지키세요."
    ]
  },
  "mid": {
    "enT": "Mixed Signals — Clarify Expectations & Watch Follow-Through",
    "koT": "혼합 신호 구간 — 기대치를 명확히 말하고 일관된 변화를 지켜보세요",
    "enD": "There are real strengths here alongside a few recurring friction points. Emotional maturity shows up in whether both people can discuss a gap calmly and adjust behaviors consistently.",
    "koD": "좋은 점과 반복되는 마찰 지점이 함께 공존합니다. 성숙한 관계인지는 불편한 주제를 꺼냈을 때 방어하지 않고 실제로 행동을 조율하는지로 판가름 납니다.",
    "enS": "\"I really value what we share, and I noticed we keep getting stuck around [topic]. Can we agree on one clearer habit for handling that next time?\"",
    "koS": "\"함께하는 시간을 소중히 여기지만 [특정 주제]에서 계속 엇갈리는 느낌이에요. 다음번에는 서로 더 편하도록 구체적인 약속을 하나 정해볼 수 있을까요?\"",
    "enL": [
      "Pick the single highest-scoring friction axis and bring it up during a calm moment, not mid-fight.",
      "Watch actions over the next 30 days—sustained effort beats dramatic apologies.",
      "Keep nurturing your own hobbies, friendships, and nervous system stability."
    ],
    "koL": [
      "가장 점수가 높았던 마찰 항목 1가지만 골라 싸울 때가 아닌 평온한 시간에 대화해 보세요.",
      "화려한 사과보다 앞으로 30일간 작은 행동이 꾸준히 바뀌는지 지켜보세요.",
      "관계에 과몰입하지 않도록 나만의 취미·인간관계·휴식 리듬을 계속 유지하세요."
    ]
  },
  "high": {
    "enT": "Strong Green-Flag Foundation — Deepen Mutual Trust & Appreciation",
    "koT": "탄탄한 그린플래그 기반 — 상호 신뢰와 감사를 계속 키워가세요",
    "enD": "This dynamic shows genuine emotional maturity: room for honest \"no\"s, consistent follow-through, and repair after bumps. Healthy love often feels calm and steady rather than chaotic.",
    "koD": "정중한 거절이 통하고, 언행이 일관되며, 갈등 후에도 회복이 가능한 성숙한 관계 기반입니다. 건강한 관계는 롤러코스터가 아니라 편안하고 예측 가능한 안정감으로 다가옵니다.",
    "enS": "\"I really appreciate how calmly we can talk things through and respect each other’s space—it makes me feel genuinely safe with you.\"",
    "koS": "\"서로의 공간을 존중하고 불편한 이야기도 차분하게 풀어갈 수 있어서 정말 고맙고 안전하게 느껴져요.\"",
    "enL": [
      "Name and appreciate specific green-flag behaviors out loud so they stay strong.",
      "Keep practicing proactive check-ins before small misunderstandings grow.",
      "Remember that calm steadiness is a sign of safety, not boredom."
    ],
    "koL": [
      "상대의 성숙한 배려와 일관된 행동을 구체적으로 표현하며 긍정적 순환을 강화하세요.",
      "작은 오해가 커지기 전에 가볍게 마음을 나누는 소통 습관을 이어가세요.",
      "자극 없는 편안함이 지루함이 아니라 진짜 정서적 안전의 신호임을 기억하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_green_flag_v1";
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
      window.gtag('event', "green_flag_audit_complete", {
        tool_slug: "relationship-green-flag-audit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/relationship-green-flag-audit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "relationship-green-flag-audit",
        filename: 'dopabrain-relationship-green-flag-audit-card.png',
        badge: "RELATIONAL SAFETY & MATURITY AUDIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
        accent2: "#06b6d4"
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
