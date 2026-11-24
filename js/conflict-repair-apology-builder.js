/* Calm Conflict Repair & Accountability Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Calm Conflict Repair & Accountability Builder | DopaBrain",
    "metaDesc": "Want to repair tension with a partner, friend, or teammate without slipping into defensiveness or over-apologizing? Audit 5 friction points locally and draft a clear 3-part repair message.",
    "kicker": "RELATIONSHIP REPAIR • CALM ACCOUNTABILITY",
    "heroTitle": "Calm Conflict Repair & Accountability Builder",
    "heroLead": "Want to repair tension with a partner, friend, or teammate without slipping into defensiveness or over-apologizing? Audit 5 friction points locally and draft a clear 3-part repair message.",
    "chip1": "5 Repair Checks",
    "chip2": "Non-Defensive Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK CURRENT CONFLICT TENSION SIGNALS (1 = CALM, 5 = HEATED)",
    "step1Title": "What is making this conversation hard to repair smoothly?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONE specific impact I want to acknowledge cleanly (100% local):",
    "ctaBtn": "Draft My Calm Repair Script",
    "resultBadge": "STEP 2 • YOUR 3-PART REPAIR & DE-ESCALATION PLAN",
    "noteTitle": "Specific Impact I Am Owning",
    "meterLabel": "Repair Readiness Calm",
    "scriptTitle": "Ready-to-Adapt Non-Defensive Repair Script",
    "stepsTitle": "3 Evidence-Informed Steps for Clean Repair",
    "stickyTitle": "Curious how you and others feel most understood?",
    "stickySub": "Explore the free Love Language & Connection Style Test",
    "stickyBtn": "Love Language →",
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
    "title": "갈등 회복·방어 없는 사과 & 대화 빌더 | DopaBrain",
    "metaDesc": "연인·친구·동료와의 갈등을 변명이나 과도한 자책 없이 건강하게 풀고 싶나요? 5가지 대화 마찰을 비공개로 점검하고 진심 어린 3단계 회복 문장을 완성하세요.",
    "kicker": "갈등 회복 · 방어 없는 진심 사과 빌더",
    "heroTitle": "갈등 회복·방어 없는 사과 & 대화 빌더",
    "heroLead": "연인·친구·동료와의 갈등을 변명이나 과도한 자책 없이 건강하게 풀고 싶나요? 5가지 대화 마찰을 비공개로 점검하고 진심 어린 3단계 회복 문장을 완성하세요.",
    "chip1": "5가지 회복 점검",
    "chip2": "방어 없는 대화문",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 갈등 긴장 신호 점검 (1 = 차분함, 5 = 격앙됨)",
    "step1Title": "이번 갈등 대화를 매끄럽게 풀기 어렵게 만드는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 변명 없이 담백하게 인정하고 싶은 상대의 입장/영향 1가지 (100% 로컬):",
    "ctaBtn": "차분한 갈등 회복 스크립트 만들기",
    "resultBadge": "2단계 • 3단계 갈등 회복·대화 플랜",
    "noteTitle": "담백하게 인정할 구체적 지점",
    "meterLabel": "대화 회복 준비도",
    "scriptTitle": "바로 활용하는 방어 없는 회복 문장",
    "stepsTitle": "신뢰를 회복하는 3단계 대화 원칙",
    "stickyTitle": "나와 상대가 가장 존중받는 소통 방식을 알아볼까요?",
    "stickySub": "무료 사랑의 언어·소통 스타일 테스트 해보기",
    "stickyBtn": "소통 스타일 →",
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
    "title": "温和冲突修复与真诚道歉生成器 | DopaBrain",
    "heroTitle": "温和冲突修复与真诚道歉生成器",
    "heroLead": "排查5大沟通摩擦，避开防御性辩解，生成清晰真诚的三步修复话术。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "穏やかな関係修復＆謝罪スクリプト作成 | DopaBrain",
    "heroTitle": "穏やかな関係修復＆謝罪スクリプト作成",
    "heroLead": "防衛的な言い訳を避け、信頼を取り戻す3ステップの対話文を作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Constructor de Reparación y Disculpa Serena | DopaBrain",
    "heroTitle": "Constructor de Reparación y Disculpa Serena",
    "heroLead": "Audita 5 fricciones y redacta un mensaje de reparación claro y sin actitud defensiva.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Construtor de Reparo de Conflito e Desculpa | DopaBrain",
    "heroTitle": "Construtor de Reparo de Conflito e Desculpa",
    "heroLead": "Audite 5 pontos de atrito e crie uma mensagem de reparo clara e sem defensiva.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Konfliktreparatur- & Entschuldigungs-Builder | DopaBrain",
    "heroTitle": "Konfliktreparatur- & Entschuldigungs-Builder",
    "heroLead": "Prüfe 5 Reibungspunkte und formuliere eine klare, nicht-defensive Reparaturnachricht.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Atelier Réparation de Conflit & Excuse Calme | DopaBrain",
    "heroTitle": "Atelier Réparation de Conflit & Excuse Calme",
    "heroLead": "Repérez 5 frictions et rédigez un message de réparation clair, sans posture défensive.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Конструктор примирения и честных извинений | DopaBrain",
    "heroTitle": "Конструктор примирения и честных извинений",
    "heroLead": "Разберите 5 точек трения и составьте спокойное сообщение без оправданий.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "कॉन्फ्लिक्ट रिपेयर व शांत संवाद बिल्डर | DopaBrain",
    "heroTitle": "कॉन्फ्लिक्ट रिपेयर व शांत संवाद बिल्डर",
    "heroLead": "5 संवाद बाधाएं जांचें और बिना बहाने का स्पष्ट 3-चरणीय समाधान संदेश तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pembuat Skrip Perbaikan Konflik & Maaf | DopaBrain",
    "heroTitle": "Pembuat Skrip Perbaikan Konflik & Maaf",
    "heroLead": "Audit 5 pemicu gesekan dan susun pesan perbaikan hubungan 3 langkah tanpa defensif.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sakin Çatışma Onarımı ve Özür Oluşturucu | DopaBrain",
    "heroTitle": "Sakin Çatışma Onarımı ve Özür Oluşturucu",
    "heroLead": "5 iletişim sürtüşmesini analiz edin ve savunmasız, net bir onarım mesajı hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "flooding_heat",
    "en": "Emotional Flooding — Heart racing, defensive urge to explain intent immediately",
    "ko": "감정 과열 — 심장이 뛰고 내 의도를 당장 해명·변명하고 싶음"
  },
  {
    "id": "but_reflex",
    "en": "The \"Sorry, But...\" Reflex — Adding excuses that undo the acknowledgment",
    "ko": "\"미안한데…\" 반사 — 사과 뒤에 변명을 덧붙여 진심을 희석함"
  },
  {
    "id": "shame_collapse",
    "en": "Over-Apologizing Collapse — Spiraling into \"I’m the worst\" so the other person has to comfort you",
    "ko": "과잉 자책 붕괴 — \"다 내 탓이야\"로 무너져 오히려 상대에게 위로를 요구하게 됨"
  },
  {
    "id": "mind_reading",
    "en": "Assuming Worst Intent — Treating one tense moment as proof they don’t care",
    "ko": "최악의 의도 추측 — 한 번의 마찰을 관계 전체의 거절로 확대 해석함"
  },
  {
    "id": "vague_fix",
    "en": "Missing Next-Time Action — Saying sorry without naming what will look different next time",
    "ko": "재발 방지 누락 — 사과만 하고 다음에 다르게 할 구체적 행동이 빠짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Emotional Heat — Take a 20-Minute Physiological Cool-Down First",
    "koT": "감정 온도 높음 — 대화 전 20분 생리적 진정 시간부터 가지세요",
    "enD": "Gottman’s research shows repair attempts rarely land while flooded. A clear, time-bounded 20-minute pause protects both people and makes accountability far easier.",
    "koD": "감정이 과열된 상태에서는 어떤 진심 어린 사과도 방어로 흐르기 쉽습니다. 돌아올 시간을 명확히 알리는 20분 휴식이 가장 효과적인 첫걸음입니다.",
    "enS": "\"I care about us and want to hear you properly, not react defensively. I need 20 minutes to cool down, and I will come back at [time] ready to listen.\"",
    "koS": "\"우리 관계가 소중해서 방어적으로 반응하지 않고 제대로 듣고 싶어. 20분만 숨을 고르고 [시간]에 돌아와서 차분히 이야기할게.\"",
    "enL": [
      "Pause for 20 minutes without rehearsing arguments—walk, splash cool water, or breathe out slowly.",
      "Open with ownership minus \"but\": name the specific impact and validate their feeling.",
      "Propose one concrete next-time behavior and ask what feels supportive to them."
    ],
    "koL": [
      "20분간 반박 시나리오를 멈추고 산책·찬물 세수·긴 호흡으로 심박을 낮추세요.",
      "\"~했지만\"을 뺀 담백한 인정으로 구체적 영향과 상대 감정을 먼저 짚어주세요.",
      "다음에 다르게 행동할 구체적 1가지를 제안하고 상대의 의견을 물어보세요."
    ]
  },
  "mid": {
    "enT": "Ready for Clean Repair — Use Impact + Ownership + Next-Time Action",
    "koT": "회복 대화 준비 완료 — 영향 인정 + 책임 + 다음 행동 3박자로 말하세요",
    "enD": "You are calm enough to repair constructively. Keeping your message concise and free of defensive footnotes builds trust fastest.",
    "koD": "건설적인 회복 대화가 가능한 차분한 상태입니다. 길게 해명하기보다 핵심 3가지를 짧고 명확하게 전할 때 신뢰가 가장 빠르게 회복됩니다.",
    "enS": "\"I’m sorry for how my reaction landed earlier—I can see why that felt frustrating. Next time I feel overwhelmed, I’ll ask for a brief pause instead of snapping. Are you open to talking it through?\"",
    "koS": "\"아까 내 반응 때문에 속상했을 것 같아 미안해. 다음엔 내가 여유가 없을 때 날카롭게 말하지 않고 잠깐 멈추겠다고 먼저 말할게. 지금 이야기 나눠볼 수 있을까?\"",
    "enL": [
      "State what you own in 1–2 calm sentences without adding \"but you also...\"",
      "Leave space for the other person’s perspective without jumping in to fix immediately.",
      "Close by agreeing on one simple signal you can both use if tension rises again."
    ],
    "koL": [
      "\"근데 너도...\" 없이 내가 책임질 지점을 1~2문장으로 담백하게 전하세요.",
      "상대가 마음을 말할 때 즉각 해결하려 들지 말고 끝까지 들어주세요.",
      "비슷한 긴장이 생길 때 둘이 함께 쓸 짧은 멈춤 신호 1가지를 정해보세요."
    ]
  },
  "high": {
    "enT": "Grounded & Receptive — Lead With Curiosity and Shared Problem-Solving",
    "koT": "차분하고 열린 상태 — 호기심과 공동 해결 태도로 대화를 여세요",
    "enD": "Your nervous system is steady and non-defensive. This is the ideal state for collaborative repair that leaves the relationship stronger than before.",
    "koD": "방어심 없이 매우 안정된 상태입니다. 서로를 탓하기보다 함께 문제를 푸는 대화로 관계를 한 단계 더 단단하게 만들 수 있습니다.",
    "enS": "\"I value our trust and want to make sure we’re on the same team—how did that moment feel from your side?\"",
    "koS": "\"나는 우리 신뢰를 소중하게 생각하고 같은 편으로 풀고 싶어. 그 순간 네 입장에서는 어땠는지 편하게 들려줄래?\"",
    "enL": [
      "Open with appreciation for the relationship before reviewing the rough moment.",
      "Reflect back the core concern in your own words to confirm understanding.",
      "Agree on one small tweak for next time and move forward cleanly."
    ],
    "koL": [
      "아쉬웠던 순간을 짚기 전 관계에 대한 존중과 감사를 먼저 표현하세요.",
      "상대의 핵심 우려를 내 말로 한 번 되짚어 정확히 이해했음을 확인하세요.",
      "다음에 바꿀 작은 약속 1가지만 합의하고 가볍게 마무리하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_conflict_repair_v1";
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
      window.gtag('event', "conflict_repair_complete", {
        tool_slug: "conflict-repair-apology-builder",
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
      var shareUrl = "https://dopabrain.com/portal/tools/conflict-repair-apology-builder.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "conflict-repair-apology-builder",
        filename: 'dopabrain-conflict-repair-apology-builder-card.png',
        badge: "RELATIONSHIP REPAIR • CALM ACCOUNTABILITY",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ec4899",
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
