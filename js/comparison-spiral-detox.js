/* Social Comparison Spiral Grounding Lab
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Social Comparison Spiral Grounding Lab | DopaBrain",
    "metaDesc": "Feeling behind in life after scrolling highlight reels or peer milestones? Audit 5 comparison triggers locally and anchor back to your own real timeline.",
    "kicker": "SOCIAL COMPARISON • GROUNDING DETOX",
    "heroTitle": "Social Comparison Spiral Grounding Lab",
    "heroLead": "Feeling behind in life after scrolling highlight reels or peer milestones? Audit 5 comparison triggers locally and anchor back to your own real timeline.",
    "chip1": "5 Comparison Triggers",
    "chip2": "Own-Timeline Anchor",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • IDENTIFY ACTIVE COMPARISON TRIGGERS (1 = CALM, 5 = SPIRALING)",
    "step1Title": "Where is unfair comparison pulling your focus away from your own life?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One real sign of growth I have made in the last 12 months (100% local):",
    "ctaBtn": "Reset My Comparison Spiral",
    "resultBadge": "STEP 2 • YOUR OWN-LANE GROUNDING PLAN",
    "noteTitle": "My Real 12-Month Growth Evidence",
    "meterLabel": "Internal-Compass Grounding",
    "scriptTitle": "Perspective Re-Centering Line",
    "stepsTitle": "3 Immediate Moves to Step Out of Comparison",
    "stickyTitle": "Want a grounded daily self-compassion anchor?",
    "stickySub": "Open today’s Daily Affirmation Card next",
    "stickyBtn": "Affirmation →",
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
    "title": "SNS·타인 비교 나선 차단 & 자기 기준 랩 | DopaBrain",
    "metaDesc": "SNS 하이라이트나 주변 소식을 본 뒤 나만 뒤처진 기분이 드나요? 5가지 비교 트리거를 비공개로 점검하고 나만의 실제 타임라인으로 중심을 되찾으세요.",
    "kicker": "비교 나선 차단 · 자기 기준 회복 랩",
    "heroTitle": "SNS·타인 비교 나선 차단 & 자기 기준 랩",
    "heroLead": "SNS 하이라이트나 주변 소식을 본 뒤 나만 뒤처진 기분이 드나요? 5가지 비교 트리거를 비공개로 점검하고 나만의 실제 타임라인으로 중심을 되찾으세요.",
    "chip1": "5가지 비교 트리거",
    "chip2": "내 기준 앵커",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 작동 중인 비교 트리거 점검 (1 = 평온, 5 = 심함)",
    "step1Title": "지금 불공평한 비교가 내 시선과 마음을 가장 크게 흔드는 영역은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 지난 1년 동안 나만의 속도로 이뤄낸 실제 성장 1가지 (100% 로컬):",
    "ctaBtn": "비교 나선 멈추고 내 기준 회복하기",
    "resultBadge": "2단계 • 나만의 속도 회복 플랜",
    "noteTitle": "지난 1년 나의 실제 성장 증거",
    "meterLabel": "내면 나침반 안정도",
    "scriptTitle": "비교를 멈추는 관점 전환 문장",
    "stepsTitle": "비교의 늪에서 빠져나오는 3가지 행동",
    "stickyTitle": "매일 마음을 다잡아 주는 따뜻한 확언을 받아보실래요?",
    "stickySub": "오늘의 데일리 긍정 확언 카드로 내면 중심 세우기",
    "stickyBtn": "오늘의 확언 →",
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
    "title": "社交比较焦虑解脱实验室 | DopaBrain",
    "heroTitle": "社交比较焦虑解脱实验室",
    "heroLead": "识别5大向上比较陷阱，跳出他人高光滤镜，重新锚定自己的真实节奏。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "SNS比較ループ解除＆自分軸ラボ | DopaBrain",
    "heroTitle": "SNS比較ループ解除＆自分軸ラボ",
    "heroLead": "5つの比較トリガーを整理し、他人のハイライトではなく自分のペースを取り戻します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Lab de Desconexión de Comparación Social | DopaBrain",
    "heroTitle": "Lab de Desconexión de Comparación Social",
    "heroLead": "Audita 5 detonantes de comparación social y vuelve a anclarte en tu propio ritmo.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Laboratório Detox de Comparação Social | DopaBrain",
    "heroTitle": "Laboratório Detox de Comparação Social",
    "heroLead": "Identifique 5 gatilhos de comparação social e retome o foco no seu próprio ritmo.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Sozialer-Vergleich-Detox-Labor | DopaBrain",
    "heroTitle": "Sozialer-Vergleich-Detox-Labor",
    "heroLead": "Erkenne 5 Vergleichs-Trigger und kehre ruhig zu deiner eigenen Lebenslinie zurück.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Labo Détox Comparaison Sociale | DopaBrain",
    "heroTitle": "Labo Détox Comparaison Sociale",
    "heroLead": "Repérez 5 déclencheurs de comparaison sociale et recentrez-vous sur votre propre rythme.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Детокс от спирали сравнений с другими | DopaBrain",
    "heroTitle": "Детокс от спирали сравнений с другими",
    "heroLead": "Найдите 5 триггеров сравнения в соцсетях и вернитесь к собственному темпу жизни.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सोशल कम्पैरिज़न स्पाइरल डिटॉक्स लैब | DopaBrain",
    "heroTitle": "सोशल कम्पैरिज़न स्पाइरल डिटॉक्स लैब",
    "heroLead": "5 तुलना ट्रिगर्स पहचानें और दूसरों की हाइलाइट्स छोड़ अपनी गति पर लौटें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Lab Detox Spiral Perbandingan Sosial | DopaBrain",
    "heroTitle": "Lab Detox Spiral Perbandingan Sosial",
    "heroLead": "Audit 5 pemicu perbandingan sosial dan kembali tenang pada linimasa hidupmu sendiri.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sosyal Kıyaslama Sarmalı Arınma Labı | DopaBrain",
    "heroTitle": "Sosyal Kıyaslama Sarmalı Arınma Labı",
    "heroLead": "5 kıyaslama tetikleyicisini fark edin ve kendi gerçek zaman çizelgenize dönün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "highlight_reel",
    "en": "Highlight-Reel Distortion — Comparing your messy behind-the-scenes to curated posts",
    "ko": "하이라이트 왜곡 — 남의 편집된 결과물과 나의 거친 과정을 직접 비교함"
  },
  {
    "id": "age_timeline",
    "en": "Arbitrary Age Deadlines — Feeling \"too late\" compared to peers’ career or life timing",
    "ko": "나이·속도 압박 — 또래의 커리어·결혼·자산 시점과 비교하며 조급해짐"
  },
  {
    "id": "envy_as_shame",
    "en": "Turning Envy into Self-Attack — Judging yourself instead of reading envy as a clue",
    "ko": "부러움의 자책화 — 부러움을 욕구의 단서가 아닌 자기 비난으로 연결함"
  },
  {
    "id": "doomscroll_check",
    "en": "Passive Feed Checking — Opening feeds when tired or lonely and leaving feeling worse",
    "ko": "피곤할 때 피드 확인 — 외롭거나 지칠 때 SNS를 열었다가 더 우울해짐"
  },
  {
    "id": "scorekeeping",
    "en": "External Validation Scorekeeping — Measuring worth mostly by visible metrics or praise",
    "ko": "외부 지표 의존 — 내 가치를 숫자·조회수·타인의 인정으로만 평가함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Active Comparison Spiral — Mute the Trigger & Translate Envy into Clarity",
    "koT": "비교 나선 활성화 상태 — 자극을 잠시 끄고 내 욕구의 단서로 번역하세요",
    "enD": "Upward social comparison spikes inadequacy because you only see others’ curated peaks without their hidden trade-offs. Stepping offline for 24 hours resets perspective quickly.",
    "koD": "상향 비교는 타인의 숨겨진 대가는 보지 못한 채 편집된 정점만 보기 때문에 무력감을 키웁니다. 24시간만 자극을 멀리해도 시야가 빠르게 돌아옵니다.",
    "enS": "\"I am comparing my full, unedited life to someone else’s 3-second highlight. My timeline only needs to fit me.\"",
    "koS": "\"나는 지금 편집되지 않은 내 삶 전체를 남의 3초짜리 하이라이트와 비교하고 있어. 내 속도는 나에게 맞으면 충분해.\"",
    "enL": [
      "Mute or temporarily hide 3 accounts that consistently leave you feeling drained (muting is quiet and reversible).",
      "Ask: \"What specific value is this feeling pointing to that I want more of in my own lane?\"",
      "Spend 10 minutes acting on one small goal of your own rather than watching someone else’s feed."
    ],
    "koL": [
      "볼 때마다 기운이 빠지는 계정 3개를 조용히 숨기기/뮤트하세요.",
      "\"이 부러움이 알려주는, 내가 내 삶에서 진짜 원하는 가치는 무엇일까?\" 질문해 보세요.",
      "남의 피드를 보는 대신 내 목표를 위한 10분짜리 작은 행동 1개를 바로 실행하세요."
    ]
  },
  "mid": {
    "enT": "Occasional Comparison Pinch — Shift From Spectatorship to Creation",
    "koT": "간헐적 비교 자극 — 구경하는 시간을 만드는 시간으로 돌리세요",
    "enD": "You have solid self-awareness, and reducing passive scrolling during tired hours will protect your mood and self-trust noticeably.",
    "koD": "자기 인식이 단단한 편입니다. 피곤한 시간대의 수동적 스크롤만 줄여도 기분과 자존감이 훨씬 안정됩니다.",
    "enS": "\"Inspiration feels energizing; comparison feels shrinking. I choose what builds my own craft.\"",
    "koS": "\"영감은 나를 움직이게 하고, 비교는 나를 움츠러들게 해. 나는 내 일에 집중할게.\"",
    "enL": [
      "Keep social apps off your phone’s first home screen.",
      "Measure progress against who you were 6 months ago, not strangers online.",
      "End tonight by noting 1 genuine effort you are proud of today."
    ],
    "koL": [
      "SNS 앱을 스마트폰 첫 화면에서 치워 무의식적 실행을 줄이세요.",
      "온라인 타인이 아니라 6개월 전의 나와 오늘의 나를 비교해 보세요.",
      "오늘 밤 내가 성실하게 노력한 점 1가지를 적으며 하루를 마무리하세요."
    ]
  },
  "high": {
    "enT": "Strong Own-Lane Grounding — Stay Anchored to Your Values",
    "koT": "단단한 자기 기준 유지 — 지금의 건강한 관점을 계속 지켜가세요",
    "enD": "You are navigating peers’ milestones with healthy perspective and self-respect. Keep curating feeds that inspire curiosity rather than scarcity.",
    "koD": "주변의 성취를 건강한 시선으로 바라보며 나만의 중심을 잘 지키고 있습니다. 결핍이 아닌 호기심을 주는 환경 구성을 유지하세요.",
    "enS": "\"Someone else’s win does not shrink my space—there is room for my path too.\"",
    "koS": "\"다른 사람의 성취가 내 자리를 줄이지 않아. 내 길에도 충분한 공간이 있어.\"",
    "enL": [
      "Keep following creators who share honest process rather than perfection.",
      "Celebrate a friend’s win genuinely—abundance mindset reinforces calm.",
      "Protect weekly offline hobbies that exist purely for joy, not metrics."
    ],
    "koL": [
      "완벽한 결과보다 솔직한 과정을 나누는 콘텐츠 위주로 피드를 유지하세요.",
      "지인의 기쁜 소식을 진심으로 축하하며 여유로운 감각을 키워보세요.",
      "숫자나 평가와 무관하게 순수히 즐거운 오프라인 취미를 지켜가세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_comparison_detox_v1";
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
      window.gtag('event', "comparison_detox_complete", {
        tool_slug: "comparison-spiral-detox",
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
      var shareUrl = "https://dopabrain.com/portal/tools/comparison-spiral-detox.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "comparison-spiral-detox",
        filename: 'dopabrain-comparison-spiral-detox-card.png',
        badge: "SOCIAL COMPARISON • GROUNDING DETOX",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
        accent2: "#8b5cf6"
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
