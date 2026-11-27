/* Salary & Raise Negotiation Nerves & Value Script Prep
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Salary & Raise Negotiation Nerves & Value Script Prep | DopaBrain",
    "metaDesc": "Heart pounding at the thought of asking for fair pay? Audit 5 negotiation-anxiety traps locally and build a calm, evidence-backed 3-line compensation script.",
    "kicker": "CAREER CALM • SALARY & RAISE NEGOTIATION PREP",
    "heroTitle": "Salary & Raise Negotiation Nerves & Value Script Prep",
    "heroLead": "Heart pounding at the thought of asking for fair pay? Audit 5 negotiation-anxiety traps locally and build a calm, evidence-backed 3-line compensation script.",
    "chip1": "5 Nerve Traps",
    "chip2": "3-Line Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR NEGOTIATION NERVES (1 = CALM, 5 = HIGH TENSION)",
    "step1Title": "What makes asking for fair compensation feel hardest?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One concrete impact or metric I delivered this year (100% local):",
    "ctaBtn": "Build My Calm Negotiation Script",
    "resultBadge": "STEP 2 • YOUR EVIDENCE-FIRST NEGOTIATION BLUEPRINT",
    "noteTitle": "My Anchor Contribution Metric",
    "meterLabel": "Negotiation Composure",
    "scriptTitle": "Calm 3-Line Value & Range Script",
    "stepsTitle": "3 Moves That Keep Your Voice Steady During Pay Talks",
    "stickyTitle": "Is underpayment or workload strain driving quiet burnout?",
    "stickySub": "Take the free 2-min Burnout Check next",
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
    "title": "연봉·승진 협상 긴장 완화 & 3줄 근거 스크립트 준비기 | DopaBrain",
    "metaDesc": "정당한 보상을 요구할 생각만 해도 심장이 뛰고 목소리가 작아지나요? 5가지 협상 긴장 함정을 비공개로 점검하고 차분한 3줄 근거 스크립트를 완성하세요.",
    "kicker": "커리어 평온 · 연봉 협상 긴장 완화 & 3줄 가치 스크립트",
    "heroTitle": "연봉·승진 협상 긴장 완화 & 3줄 근거 스크립트 준비기",
    "heroLead": "정당한 보상을 요구할 생각만 해도 심장이 뛰고 목소리가 작아지나요? 5가지 협상 긴장 함정을 비공개로 점검하고 차분한 3줄 근거 스크립트를 완성하세요.",
    "chip1": "5가지 긴장 함정",
    "chip2": "3줄 근거 대본",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 협상 직전 긴장 신호 점검 (1 = 여유, 5 = 극도 긴장)",
    "step1Title": "연봉·처우 이야기를 꺼낼 때 가장 망설여지는 지점은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 올해 내가 만든 구체적 성과 지표 1가지 (100% 로컬):",
    "ctaBtn": "내 차분한 연봉 협상 스크립트 보기",
    "resultBadge": "2단계 • 근거 중심 연봉 협상 프로토콜",
    "noteTitle": "핵심 성과 근거 1줄",
    "meterLabel": "협상 평정심 지수",
    "scriptTitle": "차분하게 쓰는 3줄 가치·희망 범위 멘트",
    "stepsTitle": "협상 자리에서 흔들리지 않는 3가지 전략",
    "stickyTitle": "과도한 업무 대비 보상 불균형이 번아웃으로 이어지고 있나요?",
    "stickySub": "무료 2분 번아웃 테스트로 에너지 상태 점검",
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
    "title": "薪资谈判紧张缓解与3句价值脚本准备器 | DopaBrain",
    "heroTitle": "薪资谈判紧张缓解与3句价值脚本准备器",
    "heroLead": "排查5大谈薪心理陷阱，本地生成冷静有据的3句加薪沟通话术。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "年収・昇給交渉の緊張緩和＆3行スクリプト準備 | DopaBrain",
    "heroTitle": "年収・昇給交渉の緊張緩和＆3行スクリプト準備",
    "heroLead": "交渉前の不安を整理し、実績ベースの落ち着いた3行トークをローカルで作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Preparador de Calma y Guion para Negociación Salarial | DopaBrain",
    "heroTitle": "Preparador de Calma y Guion para Negociación Salarial",
    "heroLead": "Reduce nervios al pedir aumento y redacta un guion de 3 líneas con logros reales.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Preparador de Calma e Roteiro para Negociação Salarial | DopaBrain",
    "heroTitle": "Preparador de Calma e Roteiro para Negociação Salarial",
    "heroLead": "Diminua a ansiedade na conversa de salário com um roteiro objetivo de 3 linhas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Gehaltsverhandlung Ruhe- & 3-Zeilen-Skript-Planer | DopaBrain",
    "heroTitle": "Gehaltsverhandlung Ruhe- & 3-Zeilen-Skript-Planer",
    "heroLead": "Beruhige Lampenfieber und formuliere dein faktenbasiertes Gehaltsgespräch lokal.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Préparateur Calme & Script Négociation Salariale | DopaBrain",
    "heroTitle": "Préparateur Calme & Script Négociation Salariale",
    "heroLead": "Apaisez le trac et préparez un argumentaire chiffré en 3 lignes localement.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Подготовка к переговорам о зарплате и скрипт из 3 фраз | DopaBrain",
    "heroTitle": "Подготовка к переговорам о зарплате и скрипт из 3 фраз",
    "heroLead": "Снимите волнение и соберите спокойный аргументированный скрипт на фактах.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सैलरी नेगोशिएशन शांत तैयारी और 3-लाइन स्क्रिप्ट | DopaBrain",
    "heroTitle": "सैलरी नेगोशिएशन शांत तैयारी और 3-लाइन स्क्रिप्ट",
    "heroLead": "वेतन बातचीत की घबराहट कम करें और साक्ष्य-आधारित 3-लाइन स्क्रिप्ट तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Persiapan Tenang & Skrip Negosiasi Gaji | DopaBrain",
    "heroTitle": "Persiapan Tenang & Skrip Negosiasi Gaji",
    "heroLead": "Redakan gugup minta kenaikan gaji dengan skrip 3 baris berbasis kontribusi nyata.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Maaş Pazarlığı Sakinlik ve 3 Satırlık Senaryo | DopaBrain",
    "heroTitle": "Maaş Pazarlığı Sakinlik ve 3 Satırlık Senaryo",
    "heroLead": "Görüşme heyecanını yatıştırın ve somut başarıya dayalı 3 satırlık metin hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "apology_reflex",
    "en": "Over-Apologizing Reflex — Feeling greedy simply for citing market rates",
    "ko": "과잉 사과 반사 — 시장 평균을 제시하면서도 괜히 미안한 마음이 듦"
  },
  {
    "id": "silence_panic",
    "en": "Filling Awkward Silence — Dropping my own ask before the manager even responds",
    "ko": "침묵 불안 — 상대가 답하기 전에 내가 먼저 조건을 낮춰 버림"
  },
  {
    "id": "vague_impact_memory",
    "en": "Blanking on Wins — Forgetting concrete results once the meeting starts",
    "ko": "성과 기억 증발 — 막상 자리에 앉으면 내가 해낸 수치들이 떠오르지 않음"
  },
  {
    "id": "rejection_catastrophe",
    "en": "All-or-Nothing Fear — Assuming a \"not right now\" means they dislike me",
    "ko": "거절 파국화 — \"지금은 어렵다\"는 답을 인격 거절로 받아들임"
  },
  {
    "id": "zero_market_range",
    "en": "Unanchored Range — Entering the room without a clear market target band",
    "ko": "시장 범위 미준비 — 객관적 희망 구간 없이 막연하게 들어감"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Negotiation Nerves — Bring a Written 1-Page Impact Card & Hold 5 Seconds of Silence",
    "koT": "협상 긴장 높음 — 1장 성과 메모를 들고 들어가고 제안 뒤 5초 침묵을 지키세요",
    "enD": "Negotiation psychology (Fisher & Ury; Bowles et al.) shows framing compensation as a shared problem-solving conversation—backed by 3 written outcomes—shifts your nervous system from pleading to collaborating.",
    "koD": "협상 심리학 연구에 따르면 보상을 부탁이 아니라 \"성과와 역할 확장의 공동 설계\"로 프레이밍하고 3가지 수치를 적어 가면 긴장이 크게 낮아집니다.",
    "enS": "\"Over the past year I delivered [key outcome] and expanded scope into [area]. Based on market benchmarks for this impact, I’d like to discuss moving my compensation into [range]. How can we work toward that?\"",
    "koS": "\"지난 1년간 [핵심 성과]를 만들었고 [영역]까지 역할을 확장했습니다. 시장 기준과 기여도를 고려해 [희망 구간] 조정을 논의하고 싶은데, 어떤 로드맵으로 맞춰갈 수 있을까요?\"",
    "enL": [
      "Write 3 measurable wins + your target range on a neat note so working memory never blanks.",
      "Practice saying your number out loud 3 times slowly, then pause silently for 5 seconds.",
      "If the answer is \"not this cycle,\" ask calmly: \"What exact milestones in 6 months unlock that band?\""
    ],
    "koL": [
      "측정 가능한 성과 3가지와 희망 범위를 메모에 적어 가 백지화를 막으세요.",
      "희망 금액을 소리 내어 3번 천천히 연습하고, 말한 뒤 5초간 조용히 기다리세요.",
      "당장 어렵다는 답이 오면 \"6개월 내 어떤 지표를 달성하면 가능할까요?\"로 전환하세요."
    ]
  },
  "mid": {
    "enT": "Steady Base — Tighten Your Market Range & 6-Month Milestone Fallback",
    "koT": "안정적 준비 — 객관적 시장 구간과 대안(보너스·유연근무·6개월 리뷰)만 보강하세요",
    "enD": "You have clear value to present; locking in your opening sentence and secondary perks keeps the conversation smooth.",
    "koD": "근거는 충분합니다. 첫 문장과 비금전적 대안(리뷰 일정·유연근무)만 미리 정해 두면 아주 매끄럽게 진행됩니다.",
    "enS": "\"Lead with impact, anchor with market data, stay warm and collaborative.\"",
    "koS": "\"성과로 열고, 시장 데이터로 기준을 세우며, 차분하게 협업한다.\"",
    "enL": [
      "Send a brief 3-bullet recap agenda 24 hours before the review.",
      "Anchor slightly above your comfortable midpoint with calm posture.",
      "Follow up in writing summarizing agreed next steps."
    ],
    "koL": [
      "미팅 24시간 전에 핵심 성과 3줄을 가볍게 공유해 두세요.",
      "편안한 호흡으로 목표치 상단 구간을 담백하게 제시하세요.",
      "미팅 후 합의된 다음 일정을 짧은 메일로 깔끔히 남기세요."
    ]
  },
  "high": {
    "enT": "Composed Negotiator — Ready for a High-Trust Executive Conversation",
    "koT": "노련한 평정심 — 신뢰 기반의 프로페셔널한 대화가 준비되어 있습니다",
    "enD": "Your grounding and evidence preparation are strong. Enter calmly and treat the talk as a routine business alignment.",
    "koD": "근거와 평정심이 모두 탄탄합니다. 일상적인 비즈니스 조율처럼 여유 있게 임하세요.",
    "enS": "\"Fair compensation aligns long-term value for both sides.\"",
    "koS": "\"공정한 보상은 나와 조직 모두의 장기 성과를 높이는 조율이다.\"",
    "enL": [
      "Frame next year’s roadmap alongside your ask.",
      "Stay curious about team priorities and budget timing.",
      "Celebrate advocating clearly for your craft."
    ],
    "koL": [
      "내년 기여 로드맵과 보상을 자연스럽게 연결해 제안하세요.",
      "조직의 예산 주기와 우선순위를 함께 경청하세요.",
      "스스로의 가치를 당당히 표현한 자신을 격려하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_salary_negotiation_prep_v1";
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
      window.gtag('event', "salary_negotiation_prep_complete", {
        tool_slug: "salary-negotiation-nerves-prep",
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
      var shareUrl = "https://dopabrain.com/portal/tools/salary-negotiation-nerves-prep.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "salary-negotiation-nerves-prep",
        filename: 'dopabrain-salary-negotiation-nerves-prep-card.png',
        badge: "CAREER CALM • SALARY & RAISE NEGOTIATION PREP",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
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
