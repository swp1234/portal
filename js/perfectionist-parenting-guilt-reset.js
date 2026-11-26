/* Good-Enough Parenting Guilt & Pressure Relief Check
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Good-Enough Parenting Guilt & Pressure Relief Check | DopaBrain",
    "metaDesc": "Ending the day replaying one impatient moment or comparing yourself to curated social-media parenting ideals? Audit 5 parenting-guilt traps locally and anchor in Winnicott’s \"good-enough\" repair.",
    "kicker": "GOOD-ENOUGH PARENTING • GUILT & PRESSURE RESET",
    "heroTitle": "Good-Enough Parenting Guilt & Pressure Relief Check",
    "heroLead": "Ending the day replaying one impatient moment or comparing yourself to curated social-media parenting ideals? Audit 5 parenting-guilt traps locally and anchor in Winnicott’s \"good-enough\" repair.",
    "chip1": "5 Parent Guilt Traps",
    "chip2": "Repair Over Perfect",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHICH PARENTING PRESSURES WEIGH HEAVIEST (1 = LIGHT, 5 = CRUSHING)",
    "step1Title": "Where is harsh parenting perfectionism draining your joy?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: 1 moment of real care or warmth I showed my child today (100% local):",
    "ctaBtn": "Reset My Parenting Guilt",
    "resultBadge": "STEP 2 • YOUR GOOD-ENOUGH PARENTING COMPASSION PLAN",
    "noteTitle": "Real Care I Already Showed Today",
    "meterLabel": "Parental Self-Compassion Index",
    "scriptTitle": "Simple, Healing Parent-Child Repair Line",
    "stepsTitle": "3 Research-Backed Truths of \"Good-Enough\" Parenting",
    "stickyTitle": "Want to check your overall parental stress & fatigue baseline?",
    "stickySub": "Take the free 60-second Stress Check next",
    "stickyBtn": "Stress Check →",
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
    "title": "완벽한 부모 강박·육아 죄책감 완화 & 회복 리셋 체크 | DopaBrain",
    "metaDesc": "아이에게 한 번 화낸 순간을 밤새 자책하거나 SNS 속 완벽한 육아와 비교하며 지치나요? 5가지 육아 죄책감 함정을 점검하고 \"충분히 좋은 부모\"의 회복 원칙으로 숨을 고르세요.",
    "kicker": "완벽주의 육아 죄책감 · \"충분히 좋은 부모\" 리셋",
    "heroTitle": "완벽한 부모 강박·육아 죄책감 완화 & 회복 리셋 체크",
    "heroLead": "아이에게 한 번 화낸 순간을 밤새 자책하거나 SNS 속 완벽한 육아와 비교하며 지치나요? 5가지 육아 죄책감 함정을 점검하고 \"충분히 좋은 부모\"의 회복 원칙으로 숨을 고르세요.",
    "chip1": "5가지 육아 죄책감",
    "chip2": "완벽보다 회복",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 지금 마음을 가장 무겁게 누르는 육아 압박 점검 (1 = 가벼움, 5 = 매우 무거움)",
    "step1Title": "지금 완벽주의 육아 기준이 에너지와 기쁨을 가장 크게 깎는 지점은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 내가 아이에게 진심으로 건넨 따뜻한 돌봄·순간 1가지 (100% 로컬):",
    "ctaBtn": "내 육아 죄책감 완화 & 회복 문장 보기",
    "resultBadge": "2단계 • \"충분히 좋은 부모\" 자기 자비 및 회복 플랜",
    "noteTitle": "오늘 내가 이미 건넨 진짜 사랑의 증거",
    "meterLabel": "부모 자기 자비·여유 지수",
    "scriptTitle": "실수 후 관계를 더 단단하게 만드는 1문장 사과",
    "stepsTitle": "발달심리학이 증명한 \"충분히 좋은 부모\" 3원칙",
    "stickyTitle": "육아와 일상 속에 쌓인 나의 전체 스트레스 지수도 점검해 볼까요?",
    "stickySub": "무료 60초 스트레스 체크로 회복 필요도 확인하기",
    "stickyBtn": "스트레스 체크 →",
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
    "title": "完美主义育儿内疚与“足够好父母”重置 | DopaBrain",
    "heroTitle": "完美主义育儿内疚与“足够好父母”重置",
    "heroLead": "放下育儿内疚与刷屏比较，用温和修复取代苛刻自我苛责。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "完璧主義な育児罪悪感＆ほどよい親リセット | DopaBrain",
    "heroTitle": "完璧主義な育児罪悪感＆ほどよい親リセット",
    "heroLead": "SNS比較や怒ってしまった自責を和らげ、関係修復ベースの安心育児へ。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reset de Culpa Parental y Perfeccionismo | DopaBrain",
    "heroTitle": "Reset de Culpa Parental y Perfeccionismo",
    "heroLead": "Cambia la culpa materna/paterna por reparación afectiva y estándares realistas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Culpa Parental e Perfeccionismo | DopaBrain",
    "heroTitle": "Reset de Culpa Parental e Perfeccionismo",
    "heroLead": "Troque a culpa na criação por reparo acolhedor e o conceito de pais suficientemente bons.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Eltern-Schuldgefühle & Gut-Genug-Reset | DopaBrain",
    "heroTitle": "Eltern-Schuldgefühle & Gut-Genug-Reset",
    "heroLead": "Ersetze strengen Erziehungs-Perfektionismus durch warmherzige Wiedergutmachung.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Culpabilité Parentale & Parent Suffisamment Bon | DopaBrain",
    "heroTitle": "Reset Culpabilité Parentale & Parent Suffisamment Bon",
    "heroLead": "Remplacez la culpabilité parentale par la réparation bienveillante au quotidien.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс родительской вины и перфекционизма | DopaBrain",
    "heroTitle": "Сброс родительской вины и перфекционизма",
    "heroLead": "Замените самобичевание на тёплое восстановление контакта и принцип «достаточно хорошего родителя».",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "पेरेंटिंग गिल्ट व गुड-इनफ़ रीसेट | DopaBrain",
    "heroTitle": "पेरेंटिंग गिल्ट व गुड-इनफ़ रीसेट",
    "heroLead": "माता-पिता के अपराधबोध को छोड़ें और स्नेहपूर्ण सुधार (रिपेयर) अपनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Rasa Bersalah Parenting Perfeksionis | DopaBrain",
    "heroTitle": "Reset Rasa Bersalah Parenting Perfeksionis",
    "heroLead": "Ganti rasa bersalah orang tua dengan perbaikan hangat dan standar yang manusiawi.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Mükemmeliyetçi Ebeveynlik Suçluluğu Sıfırlama | DopaBrain",
    "heroTitle": "Mükemmeliyetçi Ebeveynlik Suçluluğu Sıfırlama",
    "heroLead": "Anne-baba suçluluğunu sıcak onarım ve yeterince iyi ebeveynlik anlayışıyla hafifletin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "snap_guilt_replay",
    "en": "Impatience Replay — Beating yourself up all night over losing your cool once when tired",
    "ko": "화낸 순간 밤샘 자책 — 피곤해서 한 번 큰소리 낸 일을 밤새도록 곱씹으며 자책함"
  },
  {
    "id": "curated_parent_feeds",
    "en": "Curated Parenting Comparison — Comparing real life to spotless aesthetic parenting feeds",
    "ko": "SNS 육아 비교 — 현실의 육아를 편집된 완벽한 육아 계정들과 비교하며 위축됨"
  },
  {
    "id": "entertainer_pressure",
    "en": "Constant Entertainer Pressure — Feeling guilty if every hour isn’t an educational enrichment activity",
    "ko": "상시 교육·놀이 압박 — 매 시간 유익한 활동을 못 해주면 나쁜 부모 같아 불안함"
  },
  {
    "id": "work_home_split",
    "en": "Two-Way Split Guilt — Feeling behind at work when with kids, and guilty about kids while working",
    "ko": "양방향 죄책감 — 일할 땐 아이에게 미안하고, 아이와 있을 땐 밀린 일 때문에 초조함"
  },
  {
    "id": "zero_parent_rest",
    "en": "Martyr Exhaustion — Skipping your own meals, water, and 15-minute breaks until patience runs dry",
    "ko": "부모 자기 돌봄 0 — 내 식사·휴식을 전부 미루다 인내심 바닥에서 폭발함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Parental Guilt Load — Trade Perfection for Warm Repair (30% Rule)",
    "koT": "육아 죄책감 과부하 — \"완벽한 부모\"를 내려놓고 따뜻한 회복(Repair)으로 전환하세요",
    "enD": "Developmental researcher Ed Tronick found secure attachment requires attunement only ~30% of the time—what actually builds resilient kids is warm REPAIR after everyday mismatches, not robotic perfection. Caring this much already proves your deep love.",
    "koD": "발달심리학자 에드 트로닉의 연구에 따르면 안정 애착은 100% 완벽함이 아니라 약 30%의 조율과 어긋난 뒤의 \"따뜻한 회복(Repair)\"에서 자랍니다. 자책하는 그 마음 자체가 이미 깊은 사랑의 증거입니다.",
    "enS": "\"I got frustrated earlier and raised my voice—that wasn’t your fault. I love you, I’m sorry, and let’s try again together.\"",
    "koS": "\"아까 엄마/아빠가 피곤해서 목소리를 크게 냈네. 네 잘못이 아니야, 미안해. 사랑해, 우리 다시 차분하게 해보자.\"",
    "enL": [
      "Practice a 15-second warm repair instead of 3 hours of silent self-punishment—it models emotional maturity for your child.",
      "Unfollow 5 perfectionist parenting accounts that leave you feeling inadequate.",
      "Protect one 15-minute oxygen-mask pause today so you parent from steadier ground."
    ],
    "koL": [
      "3시간 혼자 자책하는 대신 15초의 따뜻한 사과(Repair)를 건네세요—아이에게 최고의 감정 회복 본보기가 됩니다.",
      "볼 때마다 죄책감을 키우는 완벽주의 육아 계정 5개를 오늘 바로 언팔로우하세요.",
      "오늘 단 15분이라도 부모 자신의 산소마스크 휴식을 확보해야 아이에게 더 부드러워집니다."
    ]
  },
  "mid": {
    "enT": "Moderate Pressure — Lower One Non-Essential Standard This Week",
    "koT": "중간 수준 압박 — 이번 주 비핵심 육아 기준 1가지만 과감히 낮추세요",
    "enD": "You are showing up with real devotion. Letting go of one exhausting \"should\" (like elaborate snacks or constant activities) creates a calmer home for everyone.",
    "koD": "이미 진심을 다해 잘 해내고 계십니다. 아이가 진짜 원하는 건 완벽한 이벤트가 아니라 조금 덜 지치고 웃어주는 부모입니다.",
    "enS": "\"A calm, rested good-enough parent beats an exhausted perfectionist every single day.\"",
    "koS": "\"완벽하려다 지친 부모보다, 조금 여유 있고 편안한 충분히 좋은 부모가 아이에게 훨씬 좋다.\"",
    "enL": [
      "Allow healthy boredom—unstructured playtime actually sparks kids’ creativity.",
      "Keep weeknight meals and tidy standards simple and forgiving.",
      "Name one small genuine win every evening before lights out."
    ],
    "koL": [
      "아이가 잠시 심심해하는 자유 시간을 허용하세요—실제로 창의력을 키우는 소중한 시간입니다.",
      "평일 식사와 집 정리 기준을 한 단계 너그럽게 낮추세요.",
      "잠들기 전 오늘 아이와 나눈 소소한 좋은 순간 1가지를 꼭 떠올려 보세요."
    ]
  },
  "high": {
    "enT": "Grounded Good-Enough Presence — Warm, Resilient Leadership",
    "koT": "단단한 \"충분히 좋은 부모\" 중심 — 따뜻하고 회복력 있는 양육 리듬입니다",
    "enD": "You balance love, boundaries, and human imperfection with healthy grace. Keep modeling kindness toward yourself right alongside your kids.",
    "koD": "사랑과 경계, 그리고 인간적인 불완전함을 아주 건강하게 조화시키고 계십니다. 아이에게 보여주듯 스스로에게도 같은 다정함을 유지하세요.",
    "enS": "\"Connection and repair matter infinitely more than spotless perfection.\"",
    "koS": "\"티 없는 완벽함보다 따뜻한 연결과 솔직한 회복이 백 배 더 중요하다.\"",
    "enL": [
      "Keep trusting your real-world intuition over noisy internet rules.",
      "Protect small pockets of personal joy outside the parenting role.",
      "Savor ordinary messy moments—they are the real memories."
    ],
    "koL": [
      "시끄러운 인터넷 육아 공식보다 내 아이를 가장 잘 아는 나의 직관을 신뢰하세요.",
      "부모 역할 밖의 개인적 즐거움도 소중히 지켜 나가세요.",
      "조금 어수선하지만 따뜻한 오늘의 평범한 순간들을 마음껏 누리세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_parenting_guilt_v1";
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
      window.gtag('event', "parenting_guilt_complete", {
        tool_slug: "perfectionist-parenting-guilt-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/perfectionist-parenting-guilt-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "perfectionist-parenting-guilt-reset",
        filename: 'dopabrain-perfectionist-parenting-guilt-reset-card.png',
        badge: "GOOD-ENOUGH PARENTING • GUILT & PRESSURE RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f97316",
        accent2: "#ec4899"
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
