/* Chronic Indecision & Two-Way Door Deadline Tool
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Chronic Indecision & Two-Way Door Deadline Tool | DopaBrain",
    "metaDesc": "Comparing 14 tabs for hours over a reversible everyday choice? Score 5 analysis-paralysis traps locally and apply the satisficer deadline rule to decide cleanly.",
    "kicker": "ANALYSIS PARALYSIS • TWO-WAY DOOR RULE",
    "heroTitle": "Chronic Indecision & Two-Way Door Deadline Tool",
    "heroLead": "Comparing 14 tabs for hours over a reversible everyday choice? Score 5 analysis-paralysis traps locally and apply the satisficer deadline rule to decide cleanly.",
    "chip1": "5 Paralysis Traps",
    "chip2": "Two-Way Door Rule",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHAT IS FREEZING THIS CHOICE (1 = LIGHT, 5 = STUCK)",
    "step1Title": "Why is this decision looping in your head without closing?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The choice I will close with a \"good-enough\" pick in the next 15 minutes (100% local):",
    "ctaBtn": "Unlock My Decision Deadline",
    "resultBadge": "STEP 2 • YOUR ANTI-PARALYSIS DECISION PROTOCOL",
    "noteTitle": "Decision to Close Within 15 Minutes",
    "meterLabel": "Decisive Momentum Index",
    "scriptTitle": "Satisficer Closure Mantra",
    "stepsTitle": "3 Fast Moves to End Analysis Paralysis",
    "stickyTitle": "Curious how your brain naturally balances logic vs. intuition?",
    "stickySub": "Take the free Brain Type Quiz in 60 seconds",
    "stickyBtn": "Brain Type →",
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
    "title": "결정 마비·우유부단 탈출 & 선택 마감 타이머 툴 | DopaBrain",
    "metaDesc": "되돌릴 수 있는 일상 선택에 브라우저 탭 14개를 띄워두고 몇 시간째 고민 중인가요? 5가지 분석 마비 함정을 점검하고 깔끔한 만족화 마감 룰로 결론을 내리세요.",
    "kicker": "결정 장애·우유부단 탈출 · 되돌릴 수 있는 선택 룰",
    "heroTitle": "결정 마비·우유부단 탈출 & 선택 마감 타이머 툴",
    "heroLead": "되돌릴 수 있는 일상 선택에 브라우저 탭 14개를 띄워두고 몇 시간째 고민 중인가요? 5가지 분석 마비 함정을 점검하고 깔끔한 만족화 마감 룰로 결론을 내리세요.",
    "chip1": "5가지 결정 마비",
    "chip2": "가역 선택 마감 룰",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 이 결정을 멈추게 만드는 요인 점검 (1 = 가벼움, 5 = 완전히 멈춤)",
    "step1Title": "지금 이 선택이 결론 나지 않고 머릿속에서 맴도는 진짜 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 15분 안에 \"충분히 좋은 선택\"으로 확정 지을 고민 1가지 (100% 로컬):",
    "ctaBtn": "내 결정 마감 프로토콜 보기",
    "resultBadge": "2단계 • 결정 마비 탈출 실행 프로토콜",
    "noteTitle": "15분 안에 마무리할 나의 선택",
    "meterLabel": "결단 실행 탄력도",
    "scriptTitle": "비교 탐색을 끝내는 만족화 문장",
    "stepsTitle": "분석 마비를 즉시 끝내는 3가지 결단 규칙",
    "stickyTitle": "내 뇌가 논리형과 직관형 중 어떤 의사결정 스타일인지 궁금하신가요?",
    "stickySub": "무료 두뇌 유형 테스트로 나의 사고·판단 성향 확인하기",
    "stickyBtn": "두뇌 유형 →",
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
    "title": "选择困难与决策截止倒计时工具 | DopaBrain",
    "heroTitle": "选择困难与决策截止倒计时工具",
    "heroLead": "用10分钟“足够好”截止规则打破可逆选择的反复对比与分析瘫痪。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "優柔不断＆決断デッドラインツール | DopaBrain",
    "heroTitle": "優柔不断＆決断デッドラインツール",
    "heroLead": "やり直せる選択の比較地獄を10分の満足化ルールでスッキリ終わらせます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Herramienta contra Indecisión Crónica | DopaBrain",
    "heroTitle": "Herramienta contra Indecisión Crónica",
    "heroLead": "Rompe la parálisis por análisis en decisiones reversibles con límite de 10 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Ferramenta contra Indecisão Crônica | DopaBrain",
    "heroTitle": "Ferramenta contra Indecisão Crônica",
    "heroLead": "Quebre a paralisia de análise em escolhas reversíveis com regra de 10 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Entscheidungsblockade- & Deadline-Tool | DopaBrain",
    "heroTitle": "Entscheidungsblockade- & Deadline-Tool",
    "heroLead": "Beende Analyse-Paralyse bei umkehrbaren Entscheidungen mit dem 10-Minuten-Limit.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Outil Anti-Indécision & Règle 10 Min | DopaBrain",
    "heroTitle": "Outil Anti-Indécision & Règle 10 Min",
    "heroLead": "Sortez de la paralysie d’analyse sur les choix réversibles grâce à une limite claire.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Инструмент от хронической нерешительности | DopaBrain",
    "heroTitle": "Инструмент от хронической нерешительности",
    "heroLead": "Снимите паралич анализа в обратимых выборах правилом 10-минутного дедлайна.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "क्रोनिक इंडिसीजन व डेडलाइन टूल | DopaBrain",
    "heroTitle": "क्रोनिक इंडिसीजन व डेडलाइन टूल",
    "heroLead": "10-मिनट के सैटिस्फाइसर नियम से बार-बार तुलना करने की आदत और निर्णय अवरोध तोड़ें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Alat Anti-Ragu & Batas Keputusan | DopaBrain",
    "heroTitle": "Alat Anti-Ragu & Batas Keputusan",
    "heroLead": "Hentikan kelumpuhan analisis pada pilihan fleksibel dengan batas waktu 10 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kronik Kararsızlık ve Karar Sınırı Aracı | DopaBrain",
    "heroTitle": "Kronik Kararsızlık ve Karar Sınırı Aracı",
    "heroLead": "Geri dönülebilir seçimlerdeki analiz felcini 10 dakikalık net kuralla bitirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "tab_hoarding",
    "en": "Infinite Comparison Tabs — Opening more reviews even after 2 good options already meet your needs",
    "ko": "무한 비교 탭 증식 — 이미 조건에 맞는 후보가 2개 있는데도 리뷰를 계속 더 찾음"
  },
  {
    "id": "regret_fear",
    "en": "Anticipated Regret — Terrified that Option B might turn out 5% better than Option A",
    "ko": "미리 하는 후회 공포 — 선택하지 않은 B안이 5% 더 좋을까 봐 결정을 못 내림"
  },
  {
    "id": "reversible_blindness",
    "en": "Treating Reversible as Permanent — agonizing over a low-stakes choice as if it were irreversible",
    "ko": "가역 선택 과대평가 — 바꾸거나 취소할 수 있는 선택을 평생 결정처럼 고민함"
  },
  {
    "id": "poll_everyone",
    "en": "Crowdsourcing Doubt — Asking 4 friends for opinions and getting even more confused",
    "ko": "과잉 의견 수집 — 지인 여러 명에게 물어보다 오히려 기준이 더 흔들림"
  },
  {
    "id": "no_cutoff",
    "en": "Zero Decision Deadline — Leaving the choice open indefinitely so it taxes mental RAM all week",
    "ko": "마감 시한 부재 — 언제 결정할지 정하지 않아 일주일 내내 머릿속 메모리를 점유함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Maximizer Paralysis — Flip the Coin & Use the 10-Minute Cutoff",
    "koT": "극대화 완벽 마비 — 10분 마감 타이머와 2개 기준 컷오프를 즉시 적용하세요",
    "enD": "Psychologist Barry Schwartz showed \"maximizers\" who hunt for the absolute optimal option report more regret and exhaustion than \"satisficers\" who pick the first option meeting their top 2 criteria.",
    "koD": "배리 슈워츠의 선택의 역설 연구에 따르면 최고의 1%를 끝까지 찾으려는 극대화형보다 핵심 기준 2가지를 충족하는 첫 대안을 고르는 만족화형이 훨씬 덜 후회하고 더 행복합니다.",
    "enS": "\"This is a reversible two-way door. Choosing a good option now and reclaiming 2 hours of peace beats finding a 3% better option tonight.\"",
    "koS": "\"이건 나중에 바꿀 수 있는 문이야. 3% 더 나은 선택을 찾느라 밤을 새우기보다, 지금 충분히 좋은 선택을 확정하고 내 시간을 지킬게.\"",
    "enL": [
      "Write down ONLY 2 non-negotiable criteria (e.g., budget + date). Eliminate everything else.",
      "Set a 10-minute timer; whichever remaining finalist meets both criteria gets locked in when it rings.",
      "Immediately close all comparison tabs and do NOT check reviews again after deciding."
    ],
    "koL": [
      "절대 양보할 수 없는 핵심 기준 딱 2개(예: 예산+일정)만 적고 나머지는 무시하세요.",
      "10분 타이머를 켜고 울리는 순간 2가지 기준을 통과한 후보 중 하나를 바로 확정하세요.",
      "결정 직후 모든 비교 탭을 닫고 이후에는 추가 후기를 절대 검색하지 마세요."
    ]
  },
  "mid": {
    "enT": "Option Drag — Narrow to Two Finalists & Pick Your Tie-Breaker",
    "koT": "후보 과다 지연 — 최종 2개만 남기고 단순한 타이브레이커로 끝내세요",
    "enD": "You already have enough data—what is missing is a clean stopping rule. Cut your shortlist to two and let ease or speed break the tie.",
    "koD": "정보는 이미 충분합니다. 지금 필요한 건 추가 검색이 아니라 종료 규칙입니다. 최종 2개로 압축하고 간편함 기준으로 마무리하세요.",
    "enS": "\"When two options are within 10% of each other, either choice works—the real win is finishing the choice.\"",
    "koS": "\"두 선택지가 비슷하다면 어느 쪽을 골라도 괜찮아. 진짜 승리는 고민을 끝내는 거야.\"",
    "enL": [
      "Delete all but your top 2 contenders immediately.",
      "Ask: \"Which option creates less friction this week?\" and pick it.",
      "Commit to a 48-hour no-second-guessing window after clicking confirm."
    ],
    "koL": [
      "상위 후보 2개만 남기고 나머지 비교 자료는 지금 바로 지우세요.",
      "\"이번 주 내 에너지를 덜 쓰는 쪽은 어느 쪽인가?\"로 최종 결정을 내리세요.",
      "확정 후 48시간 동안은 다시 비교 검색하지 않겠다고 스스로 약속하세요."
    ]
  },
  "high": {
    "enT": "Clean Satisficer Rhythm — Keep Protecting Your Mental Bandwidth",
    "koT": "명쾌한 만족화 결단력 — 지금의 깔끔한 선택 속도를 유지하세요",
    "enD": "You match decision effort proportionally to real stakes. Keep reserving deep research for genuinely irreversible one-way doors.",
    "koD": "선택의 중요도에 맞춰 고민 시간을 정확히 배분하고 있습니다. 진짜 되돌리기 어려운 큰 결정에만 깊은 분석을 아껴 쓰세요.",
    "enS": "\"I move fast on reversible choices and save deep thinking for decisions that truly matter.\"",
    "koS": "\"바꿀 수 있는 선택은 빠르게 확정하고, 깊은 고민은 진짜 중요한 결정에만 쓴다.\"",
    "enL": [
      "Keep default go-to picks for routine weekly meals, travel, and purchases.",
      "Use a 5-minute cap on small purchases under your preset threshold.",
      "Notice how much lighter your mind feels when open loops stay closed."
    ],
    "koL": [
      "식사·일상 구매 같은 반복 선택은 나만의 기본값(Default)을 유지하세요.",
      "일정 금액 이하의 소소한 선택에는 5분 상한 룰을 계속 활용하세요.",
      "열린 고민을 빨리 닫았을 때 얻는 머릿속 가벼움을 즐기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_chronic_indecision_v1";
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
      window.gtag('event', "chronic_indecision_complete", {
        tool_slug: "chronic-indecision-deadline-tool",
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
      var shareUrl = "https://dopabrain.com/portal/tools/chronic-indecision-deadline-tool.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "chronic-indecision-deadline-tool",
        filename: 'dopabrain-chronic-indecision-deadline-tool-card.png',
        badge: "ANALYSIS PARALYSIS • TWO-WAY DOOR RULE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
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
