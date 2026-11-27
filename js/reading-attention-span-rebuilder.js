/* Deep Reading Stamina & Attention Span Rebuilder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Deep Reading Stamina & Attention Span Rebuilder | DopaBrain",
    "metaDesc": "Used to devour books but now reach for your phone after two paragraphs? Audit 5 modern skimming habits locally and follow a gentle 4-week reading stamina ladder from 5 to 25 uninterrupted minutes.",
    "kicker": "DEEP READING • ATTENTION SPAN REBUILDER",
    "heroTitle": "Deep Reading Stamina & Attention Span Rebuilder",
    "heroLead": "Used to devour books but now reach for your phone after two paragraphs? Audit 5 modern skimming habits locally and follow a gentle 4-week reading stamina ladder from 5 to 25 uninterrupted minutes.",
    "chip1": "5 Skimming Traps",
    "chip2": "5→25 Min Ladder",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR READING STAMINA FRICTION (1 = SMOOTH, 5 = RESTLESS)",
    "step1Title": "What pulls you off the page fastest when reading?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The enjoyable book I will read for just 10 quiet minutes tonight (100% local):",
    "ctaBtn": "Build My 4-Week Reading Stamina Ladder",
    "resultBadge": "STEP 2 • YOUR 5→25 MINUTE DEEP READING LADDER",
    "noteTitle": "Tonight’s Enjoyable 10-Minute Book",
    "meterLabel": "Current Reading Stamina",
    "scriptTitle": "Zero-Guilt Reading Rule",
    "stepsTitle": "3 Gentle Steps That Restore Deep Reading Enjoyment",
    "stickyTitle": "Want quiet rain or library ambience while rebuilding reading focus?",
    "stickySub": "Open the free White Noise & Ambience Mixer",
    "stickyBtn": "Read Sounds →",
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
    "title": "짧아진 독서 집중력·문해 지구력 복원 플래너 (5→25분) | DopaBrain",
    "metaDesc": "예전엔 책 한 권을 거뜬히 읽었는데 요즘은 두 문단 만에 폰을 보게 되나요? 5가지 훑어읽기 습관을 점검하고 5분에서 25분까지 부담 없이 늘리는 4주 독서 지구력 사다리를 설계하세요.",
    "kicker": "깊은 독서 · 짧아진 문해·독서 집중력 복원 플래너",
    "heroTitle": "짧아진 독서 집중력·문해 지구력 복원 플래너 (5→25분)",
    "heroLead": "예전엔 책 한 권을 거뜬히 읽었는데 요즘은 두 문단 만에 폰을 보게 되나요? 5가지 훑어읽기 습관을 점검하고 5분에서 25분까지 부담 없이 늘리는 4주 독서 지구력 사다리를 설계하세요.",
    "chip1": "5가지 독서 이탈",
    "chip2": "5→25분 복원 사다리",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 책 읽을 때 집중이 끊기는 패턴 점검 (1 = 편안함, 5 = 바로 이탈)",
    "step1Title": "책을 펼쳤을 때 시선과 집중이 가장 빨리 떨어지는 순간은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 밤 딱 10분만 편하게 읽을 책 제목 (100% 로컬):",
    "ctaBtn": "내 4주 독서 집중력 복원 플랜 보기",
    "resultBadge": "2단계 • 5분→25분 깊은 독서 지구력 복원표",
    "noteTitle": "오늘 밤 10분 편안히 읽을 책",
    "meterLabel": "현재 독서 지구력",
    "scriptTitle": "부담 제로 독서 원칙",
    "stepsTitle": "읽는 즐거움과 집중력을 되살리는 3단계",
    "stickyTitle": "독서 집중력을 되살릴 때 잔잔한 빗소리·도서관 배경음을 켜 볼까요?",
    "stickySub": "무료 화이트 노이즈·빗소리 믹서로 독서 몰입",
    "stickyBtn": "독서 사운드 →",
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
    "title": "深度阅读专注力重建阶梯规划器 | DopaBrain",
    "heroTitle": "深度阅读专注力重建阶梯规划器",
    "heroLead": "克服碎片化扫读习惯，用4周从5分钟稳步恢复25分钟沉浸阅读。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "読書集中力・読解持久力リカバリープランナー | DopaBrain",
    "heroTitle": "読書集中力・読解持久力リカバリープランナー",
    "heroLead": "スマホ読み癖を点検し、5分から25分へ無理なく深い読書力を戻します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reconstructor de Resistencia de Lectura Profunda | DopaBrain",
    "heroTitle": "Reconstructor de Resistencia de Lectura Profunda",
    "heroLead": "Recupera el placer y foco lector de 5 a 25 minutos con una escalera de 4 semanas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reconstrutor de Foco em Leitura Profunda | DopaBrain",
    "heroTitle": "Reconstrutor de Foco em Leitura Profunda",
    "heroLead": "Recupere o fôlego de leitura de 5 a 25 minutos sem culpa em 4 semanas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Lesekonzentration & Tiefenlesen Aufbau-Planer | DopaBrain",
    "heroTitle": "Lesekonzentration & Tiefenlesen Aufbau-Planer",
    "heroLead": "Baue deine Lesespanne sanft in 4 Wochen von 5 auf 25 Minuten wieder auf.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reconstructeur d’Endurance de Lecture Profonde | DopaBrain",
    "heroTitle": "Reconstructeur d’Endurance de Lecture Profonde",
    "heroLead": "Retrouvez 25 minutes de lecture fluide grâce à une progression douce sur 4 semaines.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Восстановление глубины и выносливости чтения | DopaBrain",
    "heroTitle": "Восстановление глубины и выносливости чтения",
    "heroLead": "Верните спокойное чтение от 5 до 25 минут за 4 недели без перегрузки.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "डीप रीडिंग अटेंशन स्पैन रीबिल्डर | DopaBrain",
    "heroTitle": "डीप रीडिंग अटेंशन स्पैन रीबिल्डर",
    "heroLead": "4-सप्ताह की सरल सीढ़ी से 5 से 25 मिनट की गहरी पढ़ाई की क्षमता वापस पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pemulih Rentang Fokus & Stamina Membaca | DopaBrain",
    "heroTitle": "Pemulih Rentang Fokus & Stamina Membaca",
    "heroLead": "Bangun kembali fokus baca buku dari 5 hingga 25 menit dalam 4 minggu.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Derin Okuma Odak Süresi Yenileyici | DopaBrain",
    "heroTitle": "Derin Okuma Odak Süresi Yenileyici",
    "heroLead": "4 haftalık yumuşak basamakla okuma odağınızı 5 dakikadan 25 dakikaya çıkarın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "skim_scan_reflex",
    "en": "F-Pattern Skimming — Eyes jumping down the page hunting bold keywords",
    "ko": "훑어읽기 반사 — 문장을 곱씹지 못하고 핵심 단어만 건너뛰며 찾음"
  },
  {
    "id": "two_page_phone_itch",
    "en": "Two-Page Phone Itch — Checking messages after just 3–5 minutes of quiet reading",
    "ko": "3분 폰 충동 — 두 쪽만 넘겨도 무의식적으로 스마트폰에 손이 감"
  },
  {
    "id": "homework_book_choice",
    "en": "Duty-Heavy Book Choice — Forcing dense self-help or dense textbooks when tired",
    "ko": "숙제 같은 책 선택 — 지친 저녁에 너무 딱딱한 자기계발서·전공서만 고름"
  },
  {
    "id": "reading_only_exhausted",
    "en": "Midnight-Only Reading — Only opening books at 11:45 PM when eyes are closing",
    "ko": "잠들기 직전 독서 — 눈이 감기는 밤 12시에만 책을 펼쳐 늘 2쪽에서 졸음"
  },
  {
    "id": "reread_blank_loop",
    "en": "Blank-Mind Re-Reading — Eyes moving over lines while thoughts drift elsewhere",
    "ko": "눈만 이동 현상 — 글자는 보는데 머릿속은 다른 생각 중이라 다시 읽음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Skimming Overload — Start With 7-Minute Paper Reading & Zero Phone in Room",
    "koT": "훑어읽기 피로 높음 — 폰 없는 7분 종이책·재미있는 이야기부터 근육을 깨우세요",
    "enD": "Neuroscientist Maryanne Wolf (2018) notes that years of rapid screen skimming temporarily atrophy our \"deep reading circuit\"—yet neuroplasticity brings it right back within 2–4 weeks of short, enjoyable paper reading.",
    "koD": "신경과학자 메리앤 울프(2018)에 따르면 화면 훑어읽기가 길어지면 깊은 독서 회로가 일시적으로 약해지지만, 즐거운 종이책을 하루 7~10분씩만 읽어도 2~4주 만에 뇌 회로가 빠르게 회복됩니다.",
    "enS": "\"Seven uninterrupted minutes of a book I genuinely enjoy beats forcing an hour of homework reading.\"",
    "koS": "\"억지로 버티는 1시간보다 진심으로 재밌는 책 7분 몰입이 독서 근육을 훨씬 빨리 키운다.\"",
    "enL": [
      "Week 1: Pick a genuinely gripping novel or short essays (drop boring \"obligation\" books guilt-free).",
      "Leave your phone in another room and read for a modest 7–10 minutes with a physical bookmark.",
      "Add just +5 minutes each week until 25-minute deep immersion feels effortless again."
    ],
    "koL": [
      "1주차: 억지 의무감 책은 잠시 덮고 술술 넘어가는 소설·에세이부터 고르세요.",
      "스마트폰을 다른 방에 두고 딱 7~10분만 종이책(또는 전용 리더기)으로 읽으세요.",
      "매주 5분씩만 늘려 4주차에 자연스럽게 25분 몰입 구간을 되찾으세요."
    ]
  },
  "mid": {
    "enT": "Rebuilding Momentum — Anchor a 15-Minute Screen-Free Reading Slot",
    "koT": "독서 근육 회복 중 — 하루 15분 화면 없는 고정 독서 슬롯을 심으세요",
    "enD": "Your attention span responds quickly once phone interruptions are removed. Pairing 15 minutes of reading with morning coffee or early evening locks the habit in.",
    "koD": "폰 방해만 치우면 집중력이 금방 살아납니다. 모닝 커피나 초저녁 15분 고정 슬롯과 묶으면 습관이 단단해집니다.",
    "enS": "\"15 quiet minutes with a book before evening screens turn on.\"",
    "koS": "\"저녁 화면을 켜기 전, 조용한 종이책 15분.\"",
    "enL": [
      "Keep your current book visibly open on the table where your phone usually sits.",
      "Use a pencil or finger pace gently if eyes start skimming.",
      "Track finished chapters rather than rigid page quotas."
    ],
    "koL": [
      "늘 폰을 두던 테이블 자리에 현재 읽는 책을 펼쳐 두세요.",
      "눈이 건너뛰려 할 때는 연필이나 손가락으로 천천히 줄을 따라가세요.",
      "억지 페이지 할당보다 챕터 하나 끝내는 즐거움에 집중하세요."
    ]
  },
  "high": {
    "enT": "Strong Deep-Reading Circuit — Enjoy Long-Form Immersion",
    "koT": "탄탄한 깊은 독서 회로 — 긴 호흡의 독서 몰입을 마음껏 즐기세요",
    "enD": "Your sustained reading stamina is strong—a rare cognitive superpower in an algorithmic era.",
    "koD": "긴 글을 끝까지 소화하는 훌륭한 문해 지구력을 갖추고 계십니다. 이 귀한 집중 습관을 계속 지켜 나가세요.",
    "enS": "\"Deep reading keeps my thinking original, calm, and sharp.\"",
    "koS": "\"깊은 독서가 내 사고를 차분하고 단단하게 만든다.\"",
    "enL": [
      "Jot 2-line margin reflections at the end of a chapter to boost retention.",
      "Alternate demanding non-fiction with restorative fiction.",
      "Protect your favorite quiet reading nook."
    ],
    "koL": [
      "챕터 끝에 여백에 2줄 소감을 적으면 기억과 사유가 훨씬 깊어집니다.",
      "지적인 비문학과 마음을 쉬게 하는 문학을 번갈아 읽어 보세요.",
      "가장 편안한 나만의 독서 자리를 계속 아껴 두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_reading_span_rebuilder_v1";
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
      window.gtag('event', "reading_span_rebuilder_complete", {
        tool_slug: "reading-attention-span-rebuilder",
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
      var shareUrl = "https://dopabrain.com/portal/tools/reading-attention-span-rebuilder.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "reading-attention-span-rebuilder",
        filename: 'dopabrain-reading-attention-span-rebuilder-card.png',
        badge: "DEEP READING • ATTENTION SPAN REBUILDER",
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
