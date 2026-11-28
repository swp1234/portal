/* Blank-Page Freeze & 5-Minute Ugly-First-Draft Starter
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Blank-Page Freeze & 5-Minute Ugly-First-Draft Starter | DopaBrain",
    "metaDesc": "Staring at a blinking cursor for 40 minutes editing Sentence 1 in your head? Audit 5 perfectionist drafting blocks locally and unlock a 5-minute ugly-draft launch.",
    "kicker": "CREATIVE FLOW • BLANK-PAGE FREEZE & UGLY-FIRST-DRAFT KIT",
    "heroTitle": "Blank-Page Freeze & 5-Minute Ugly-First-Draft Starter",
    "heroLead": "Staring at a blinking cursor for 40 minutes editing Sentence 1 in your head? Audit 5 perfectionist drafting blocks locally and unlock a 5-minute ugly-draft launch.",
    "chip1": "5 Drafting Blocks",
    "chip2": "5-Min Ugly Draft",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR BLANK-PAGE PARALYSIS TRIGGERS (1 = FLOWING, 5 = FROZEN)",
    "step1Title": "What freezes your hands before paragraph one?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Write ONE messy, zero-pressure opening sentence or bullet right now (100% local):",
    "ctaBtn": "Launch My 5-Minute Ugly-Draft Protocol",
    "resultBadge": "STEP 2 • YOUR ANTI-PERFECTIONISM DRAFTING LAUNCH",
    "noteTitle": "My Unfiltered Starting Seed",
    "meterLabel": "Drafting Momentum",
    "scriptTitle": "Editor-Off Permission Cue (Separates Drafting From Editing)",
    "stepsTitle": "3 Tricks That Break Blinking-Cursor Paralysis in 5 Minutes",
    "stickyTitle": "Ready to type nonstop without pressing Backspace for 10 minutes?",
    "stickySub": "Launch the free Distraction-Free Timer",
    "stickyBtn": "Start Writing Timer →",
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
    "title": "백지 공포 탈출 & 5분 거친 초안(Ugly Draft) 시동 키트 | DopaBrain",
    "metaDesc": "깜빡이는 커서 앞에서 첫 문장만 40분째 고치며 멈춰 있나요? 5가지 완벽주의 집필 브레이크를 점검하고 5분 \"거친 초안\" 시동 루틴으로 손가락을 먼저 움직이세요.",
    "kicker": "창작 몰입 · 백지 공포 탈출 & 5분 거친 초안 시동 키트",
    "heroTitle": "백지 공포 탈출 & 5분 거친 초안(Ugly Draft) 시동 키트",
    "heroLead": "깜빡이는 커서 앞에서 첫 문장만 40분째 고치며 멈춰 있나요? 5가지 완벽주의 집필 브레이크를 점검하고 5분 \"거친 초안\" 시동 루틴으로 손가락을 먼저 움직이세요.",
    "chip1": "5가지 백지 브레이크",
    "chip2": "5분 거친 초안",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 백지 공포·집필 마비 원인 점검 (1 = 술술, 5 = 완전 정지)",
    "step1Title": "첫 문단을 쓰기 전에 손을 가장 세게 멈추게 하는 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 완벽하지 않아도 되는 거친 첫 문장이나 키워드 1줄을 지금 바로 적어 보기 (100% 로컬):",
    "ctaBtn": "내 5분 거친 초안 시동 프로토콜 보기",
    "resultBadge": "2단계 • 완벽주의 브레이크를 푸는 5분 시동 프로토콜",
    "noteTitle": "이미 시작된 나의 첫 문장 씨앗",
    "meterLabel": "초안 추진력 지수",
    "scriptTitle": "편집자 뇌를 잠시 끄는 초안 허가 문구",
    "stepsTitle": "5분 안에 깜빡이는 커서 마비를 깨는 3가지 기술",
    "stickyTitle": "백스페이스 없이 10분간 거친 초안만 쏟아낼 타이머를 켜 볼까요?",
    "stickySub": "무료 집중 타이머 바로 시작",
    "stickyBtn": "글쓰기 타이머 →",
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
    "title": "空白页恐惧打破与5分钟粗糙初稿启动器 | DopaBrain",
    "heroTitle": "空白页恐惧打破与5分钟粗糙初稿启动器",
    "heroLead": "把起草与修改分离，用5分钟禁删粗糙初稿立刻打破写作卡顿。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "白紙恐怖ストップ＆5分ラフ下書き起動キット | DopaBrain",
    "heroTitle": "白紙恐怖ストップ＆5分ラフ下書き起動キット",
    "heroLead": "点滅カーソル前の完璧主義フリーズを5分間のラフ下書きルールで突破します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit contra el Bloqueo de Página en Blanco (5 Min) | DopaBrain",
    "heroTitle": "Kit contra el Bloqueo de Página en Blanco (5 Min)",
    "heroLead": "Rompe la parálisis perfeccionista separando borrador rápido y edición en 5 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit Anti-Página em Branco & Rascunho de 5 Minutos | DopaBrain",
    "heroTitle": "Kit Anti-Página em Branco & Rascunho de 5 Minutos",
    "heroLead": "Destrave o cursor piscando com um primeiro rascunho livre de julgamento em 5 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Leere-Seite-Blockade & 5-Min-Rohentwurf-Starter | DopaBrain",
    "heroTitle": "Leere-Seite-Blockade & 5-Min-Rohentwurf-Starter",
    "heroLead": "Löse Schreibstarre, indem du 5 Minuten ohne Zurück-Taste einfach losschreibst.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Anti-Page Blanche & Brouillon Libre 5 Min | DopaBrain",
    "heroTitle": "Kit Anti-Page Blanche & Brouillon Libre 5 Min",
    "heroLead": "Cassez la paralysie du curseur avec un premier jet imparfait de 5 minutes sans effacer.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Анти-страх чистого листа и черновик за 5 минут | DopaBrain",
    "heroTitle": "Анти-страх чистого листа и черновик за 5 минут",
    "heroLead": "Разделите написание и редактуру: 5 минут свободного черновика без кнопки Backspace.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "ब्लैंक-पेज फ्रीज़ और 5-मिनट रफ़ ड्राफ्ट स्टार्टर | DopaBrain",
    "heroTitle": "ब्लैंक-पेज फ्रीज़ और 5-मिनट रफ़ ड्राफ्ट स्टार्टर",
    "heroLead": "परफेक्शनिज़्म रोककर 5 मिनट के बेझिझक रफ़ ड्राफ्ट से लिखना शुरू करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Atasi Kaku Halaman Kosong & Draf 5 Menit | DopaBrain",
    "heroTitle": "Kit Atasi Kaku Halaman Kosong & Draf 5 Menit",
    "heroLead": "Pecahkan kebuntuan menulis dengan memisahkan draf cepat 5 menit dari proses sunting.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Boş Sayfa Donması ve 5 Dakikalık Taslak Başlatıcı | DopaBrain",
    "heroTitle": "Boş Sayfa Donması ve 5 Dakikalık Taslak Başlatıcı",
    "heroLead": "Yazma ve düzenlemeyi ayırarak 5 dakikalık özgür ilk taslakla akışı başlatın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "inner_editor_early",
    "en": "Premature Inner Editor — Deleting and polishing Sentence 1 ten times before Sentence 2 exists",
    "ko": "조기 편집자 개입 — 두 번째 문장도 쓰기 전에 첫 문장을 열 번씩 지우고 다듬음"
  },
  {
    "id": "opening_hook_pressure",
    "en": "Brilliant-Intro Pressure — Refusing to start until the opening line sounds publish-ready",
    "ko": "완벽한 도입부 강박 — 기가 막힌 첫 문장이 떠오를 때까지 시작을 미룸"
  },
  {
    "id": "research_procrastination",
    "en": "Endless \"One More Tab\" Research — Reading 12 extra sources to avoid typing 50 words",
    "ko": "자료 조사 회피 — 50자 쓰기를 피하려고 참고 자료만 12개 더 열어 봄"
  },
  {
    "id": "audience_judgment_fear",
    "en": "Imaginary Critic Gaze — Picturing a harsh boss, professor, or internet commenter reading live",
    "ko": "가상 비평가 시선 — 까다로운 상사·교수·독자가 실시간으로 평가하는 상상을 함"
  },
  {
    "id": "blank_white_canvas",
    "en": "Empty Document Terror — Facing a stark blank screen with zero messy outline bullets",
    "ko": "하얀 백지 위압감 — 거친 뼈대 키워드 하나 없이 텅 빈 문서만 바라봄"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Blank-Page Freeze — Type \"[TK]\" Placeholders, Start at Section 2 & Ban Backspace for 5 Min",
    "koT": "백지 마비 높음 — 첫 문장은 건너뛰고 본문 중간부터 5분간 백스페이스 금지로 쏟아내세요",
    "enD": "Cognitive writing studies show drafting (divergent) and editing (convergent) compete for working memory. Trying to do both simultaneously stalls output; writing a deliberately ugly 5-minute draft gets clay onto the wheel so editing becomes effortless.",
    "koD": "인지 글쓰기 연구에 따르면 초안 쓰기(발산)와 퇴고(수렴)를 동시에 하려 들면 작업 기억이 충돌해 멈춰 버립니다. 일부러 엉성한 5분 초안을 먼저 쏟아내면 이후 다듬기는 훨씬 쉬워집니다.",
    "enS": "\"Permission granted to write the worst first draft of my life for 5 minutes. I can always edit a messy page—I can never edit a blank one.\"",
    "koS": "\"지금 5분은 내 인생에서 가장 엉성한 초안을 써도 좋다. 지저분한 문장은 고칠 수 있지만, 백지는 고칠 수 없다.\"",
    "enL": [
      "Skip the intro completely—type \"[INTRO LATER]\" and write 3 messy bullets for the easiest middle point.",
      "Talk it out like texting a smart friend (\"Basically what I’m trying to say is...\") for 5 minutes with ZERO Backspace.",
      "Use \"[TK]\" for any missing stat or link so you never leave the document to open browser rabbit holes."
    ],
    "koL": [
      "서론은 과감히 건너뛰고 \"[서론 나중에]\"라 적은 뒤 가장 쓰기 쉬운 중간 내용부터 3줄 적으세요.",
      "친한 친구에게 카톡으로 설명하듯(\"쉽게 말하면 핵심은 이거야...\") 5분간 백스페이스 없이 타이핑하세요.",
      "정확한 수치나 출처가 막히면 검색하러 나가지 말고 \"[확인]\" 표시만 넣고 계속 쓰세요."
    ]
  },
  "mid": {
    "enT": "Warming Up — Drop 3 Skeleton Bullets Before Drafting Prose",
    "koT": "시동 직전 — 문장을 쓰기 전 뼈대 키워드 3줄부터 던져 놓으세요",
    "enD": "Once three rough headers exist on screen, the blank-page spell breaks immediately.",
    "koD": "화면에 거친 소제목 3개만 올라가도 백지 공포의 80%가 즉시 사라집니다.",
    "enS": "\"Bullets first, ugly draft second, crisp polish last.\"",
    "koS": "\"1단계 뼈대 3줄 → 2단계 거친 초안 → 3단계 퇴고로 완전히 분리한다.\"",
    "enL": [
      "Write 3 ugly section headers in 60 seconds.",
      "Keep research tabs closed during the 10-min draft.",
      "Polish only after reaching the bottom of the page."
    ],
    "koL": [
      "60초 안에 거친 소제목 3개만 먼저 적으세요.",
      "10분 초안 작성 동안은 참고 탭을 닫아 두세요.",
      "끝 문장까지 도달한 뒤에야 첫 문장을 다듬으세요."
    ]
  },
  "high": {
    "enT": "Smooth Drafting Flow — Healthy Creator/Editor Separation",
    "koT": "매끄러운 집필 흐름 — 창작자와 편집자의 역할 분리가 훌륭합니다",
    "enD": "You get words onto the page fast and refine calmly afterward.",
    "koD": "초안을 빠르게 쏟아낸 뒤 차분히 다듬는 이상적인 흐름을 갖추고 있습니다.",
    "enS": "\"Momentum first, refinement second.\"",
    "koS": "\"먼저 흐름을 만들고, 나중에 칼을 댄다.\"",
    "enL": [
      "Keep using [TK] placeholders during flow.",
      "Save one unfinished sentence for tomorrow’s easy start.",
      "Celebrate shipped drafts over endless tinkering."
    ],
    "koL": [
      "[확인] 플레이스홀더로 흐름 끊김을 계속 막으세요.",
      "내일 쉽게 이어 쓰도록 마지막 문장을 반만 남기고 멈춰 보세요.",
      "완벽한 미완성보다 완성해 낸 초안을 칭찬해 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_blank_page_v1";
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
      window.gtag('event', "blank_page_momentum_complete", {
        tool_slug: "writer-blank-page-momentum-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/writer-blank-page-momentum-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "writer-blank-page-momentum-kit",
        filename: 'dopabrain-writer-blank-page-momentum-kit-card.png',
        badge: "CREATIVE FLOW • BLANK-PAGE FREEZE & UGLY-FIRST-DRAFT KIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
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
