/* Creative Block & Blank-Page Momentum Starter
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Creative Block & Blank-Page Momentum Starter | DopaBrain",
    "metaDesc": "Staring at a blinking cursor on a blank doc, canvas, or codebase while your inner editor kills every first line? Diagnose 5 creative-friction locks locally and ship a messy 5-minute draft.",
    "kicker": "CREATIVE BLOCK • UGLY-FIRST-DRAFT MOMENTUM",
    "heroTitle": "Creative Block & Blank-Page Momentum Starter",
    "heroLead": "Staring at a blinking cursor on a blank doc, canvas, or codebase while your inner editor kills every first line? Diagnose 5 creative-friction locks locally and ship a messy 5-minute draft.",
    "chip1": "5 Creative Locks",
    "chip2": "5-Min Ugly Draft",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • SPOT WHAT IS FREEZING YOUR CREATIVE FLOW (1 = FLOWING, 5 = STUCK)",
    "step1Title": "Which friction trap is keeping the page blank right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Write 1 intentionally messy, imperfect starting sentence or bullet right here (100% local):",
    "ctaBtn": "Unlock My 5-Minute Creative Sprint",
    "resultBadge": "STEP 2 • YOUR CREATIVE MOMENTUM PROTOCOL",
    "noteTitle": "Seed Line Already Started (Blank Page Broken!)",
    "meterLabel": "Creative Momentum Index",
    "scriptTitle": "Inner-Editor Timeout Cue",
    "stepsTitle": "3 Fast Moves to Separate Creating from Editing",
    "stickyTitle": "Ready to lock in a 10-minute no-backspace messy draft sprint?",
    "stickySub": "Launch the free Pomodoro Focus Timer next",
    "stickyBtn": "10-Min Sprint →",
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
    "title": "창작 막힘·백지 공포 탈출 & 첫 5분 모멘텀 스타터 | DopaBrain",
    "metaDesc": "빈 문서·캔버스·코드 에디터 앞에서 첫 줄을 쓰자마자 지우기를 반복하고 있나요? 5가지 창작 마찰 요인을 진단하고 5분 만에 거친 초안의 시동을 거세요.",
    "kicker": "창작 슬럼프·백지 공포 탈출 · 초안 스타터",
    "heroTitle": "창작 막힘·백지 공포 탈출 & 첫 5분 모멘텀 스타터",
    "heroLead": "빈 문서·캔버스·코드 에디터 앞에서 첫 줄을 쓰자마자 지우기를 반복하고 있나요? 5가지 창작 마찰 요인을 진단하고 5분 만에 거친 초안의 시동을 거세요.",
    "chip1": "5가지 창작 잠금",
    "chip2": "5분 거친 초안",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 창작 흐름을 막고 있는 요인 점검 (1 = 원활함, 5 = 꽉 막힘)",
    "step1Title": "지금 첫 줄을 못 쓰게 만드는 가장 큰 방해 요소는 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 일부러 투박하고 완벽하지 않게 써보는 나의 첫 문장·아이디어 1줄 (100% 로컬):",
    "ctaBtn": "내 5분 창작 시동 프로토콜 보기",
    "resultBadge": "2단계 • 백지 공포 탈출 모멘텀 프로토콜",
    "noteTitle": "이미 시작된 첫 문장 (백지 상태 돌파!)",
    "meterLabel": "창작 시동 탄력도",
    "scriptTitle": "내면의 비평가를 잠시 내보내는 문장",
    "stepsTitle": "생성과 수정을 분리해 흐름을 여는 3단계",
    "stickyTitle": "지금 바로 백스페이스 금지 10분 초안 스프린트를 시작해 볼까요?",
    "stickySub": "무료 뽀모도로 타이머로 10분 거침없이 써 내려가기",
    "stickyBtn": "10분 스프린트 →",
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
    "title": "创作卡壳与空白页启动器 | DopaBrain",
    "heroTitle": "创作卡壳与空白页启动器",
    "heroLead": "关闭过早自我挑剔，用5分钟“允许粗糙的初稿”冲刺打破空白页恐惧。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "創作スランプ＆白紙ブロック解除ツール | DopaBrain",
    "heroTitle": "創作スランプ＆白紙ブロック解除ツール",
    "heroLead": "早すぎる自己添削を止め、5分のラフ下書きで創作の勢いを取り戻します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Arrancador contra Bloqueo Creativo | DopaBrain",
    "heroTitle": "Arrancador contra Bloqueo Creativo",
    "heroLead": "Silencia al editor interno y rompe la página en blanco en un sprint de 5 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Destravador de Bloqueio Criativo | DopaBrain",
    "heroTitle": "Destravador de Bloqueio Criativo",
    "heroLead": "Desligue o crítico interno e quebre a página em branco com um rascunho de 5 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Kreativblockade- & Leere-Seite-Starter | DopaBrain",
    "heroTitle": "Kreativblockade- & Leere-Seite-Starter",
    "heroLead": "Schalte den inneren Kritiker ab und starte in 5 Minuten mit einem rohen Erstentwurf.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Débloqueur de Page Blanche & Créativité | DopaBrain",
    "heroTitle": "Débloqueur de Page Blanche & Créativité",
    "heroLead": "Mettez l’éditeur intérieur en pause et lancez un brouillon libre de 5 minutes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Старт против творческого ступора | DopaBrain",
    "heroTitle": "Старт против творческого ступора",
    "heroLead": "Отключите внутреннего критика и сломайте страх чистого листа за 5 минут.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "क्रिएटिव ब्लॉक व ब्लैंक-पेज स्टार्टर | DopaBrain",
    "heroTitle": "क्रिएटिव ब्लॉक व ब्लैंक-पेज स्टार्टर",
    "heroLead": "भीतर के आलोचक को रोकें और 5-मिनट रफ़ ड्राफ्ट स्प्रिंट से रचनात्मक प्रवाह शुरू करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pemecah Creative Block & Halaman Kosong | DopaBrain",
    "heroTitle": "Pemecah Creative Block & Halaman Kosong",
    "heroLead": "Matikan editor batin terlalu dini dan mulai draf kasar 5 menit tanpa takut salah.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yaratıcı Tıkanıklık ve Boş Sayfa Başlatıcı | DopaBrain",
    "heroTitle": "Yaratıcı Tıkanıklık ve Boş Sayfa Başlatıcı",
    "heroLead": "İç eleştirmeni susturun ve 5 dakikalık ham taslakla akışı hemen başlatın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "premature_editing",
    "en": "Premature Editing — Judging and deleting every sentence before finishing paragraph one",
    "ko": "조기 편집 병목 — 첫 문단도 끝나기 전에 문장을 평가하고 계속 지움"
  },
  {
    "id": "vague_scope",
    "en": "Oversized Scope — Trying to imagine the finished masterpiece instead of one tiny piece",
    "ko": "거대한 완성품 압박 — 작은 조각 하나가 아니라 최종 걸작 전체를 한 번에 떠올림"
  },
  {
    "id": "taste_gap",
    "en": "Taste-Skill Friction — Comparing your raw draft to someone else’s 10th published revision",
    "ko": "안목과 초안의 괴리 — 내 날것의 초안을 타인의 10차 완성본과 비교함"
  },
  {
    "id": "input_drought",
    "en": "Empty Tank / Burnout — Trying to produce ideas without recent walks, reading, or play",
    "ko": "영감 고갈 — 산책·관찰·충전 없이 메마른 상태에서 아이디어만 쥐어짬"
  },
  {
    "id": "audience_fear",
    "en": "Imagined Critics — Writing defensively for skeptical critics instead of one curious friend",
    "ko": "가상의 비평가 의식 — 호기심 있는 친구 1명이 아니라 까다로운 심사위원을 의식함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Inner-Editor Lockout — Ban Backspace for 7 Minutes & Write \"Badly\" on Purpose",
    "koT": "내면 비평가 과열 — 7분간 삭제 금지 룰로 \"일부러 형편없는 초안\"을 써 내려가세요",
    "enD": "Neuroscience imaging of jazz improvisation and writing (Charles Limb) shows the brain’s self-monitoring editor (DLPFC) actively suppresses generative flow when both run simultaneously. Give yourself permission to write a terrible first draft; you can always polish an existing page.",
    "koD": "창작 뇌과학 연구에 따르면 평가·검열 회로(배외측 전전두피질)가 동시에 켜지면 아이디어 생성 회로가 억제됩니다. 일단 \"일부러 엉성한 초안\"을 7분간 쏟아내면 편집할 재료가 생겨 흐름이 즉시 열립니다.",
    "enS": "\"My job in the next 7 minutes is not to make it brilliant—my job is to make it exist.\"",
    "koS": "\"앞으로 7분 동안 내 목표는 멋지게 만드는 게 아니라, 일단 존재하게 만드는 거야.\"",
    "enL": [
      "Open a scratchpad titled \"UGLY DRAFT — NO ONE SEES THIS\" and type 5 messy bullets without hitting backspace.",
      "Shrink the target to 1 tiny corner (one 3-line intro, one rough sketch, or one stub function).",
      "Step away for a 5-minute phone-free walk afterward—incubation solves stuck angles automatically."
    ],
    "koL": [
      "파일명을 \"거친 초안 — 비공개\"로 열고 백스페이스 없이 5줄 메모만 거침없이 적으세요.",
      "전체 완성이 아니라 아주 작은 모서리 1개(3줄 도입·러프 스케치 1장)로 목표를 쪼개세요.",
      "7분 뒤 5분간 폰 없이 걸으면 뇌의 부화(Incubation) 효과로 다음 아이디어가 자연히 떠오릅니다."
    ]
  },
  "mid": {
    "enT": "Mild Friction — Explain It Out Loud to One Friend First",
    "koT": "가벼운 시동 지연 — 친구 1명에게 말로 설명하듯 편하게 시작하세요",
    "enD": "You have real ideas waiting just beneath stiffness. Switching from \"formal presentation voice\" to \"explaining over coffee to a friend\" breaks stiffness in 60 seconds.",
    "koD": "아이디어는 이미 안에 있지만 형식적인 완벽함이 입구를 막고 있습니다. 카페에서 친구에게 설명하듯 가볍게 시작하면 60초 만에 풀립니다.",
    "enS": "\"Write like I’m sending a helpful voice note to one curious friend.\"",
    "koS": "\"호기심 많은 친구 한 명에게 편하게 설명해 주듯 가볍게 써 내려가자.\"",
    "enL": [
      "Start in the middle—skip the intro and build the single part you find most interesting first.",
      "Set a playful constraint (3 bullets only, 10-minute timer, or 2 colors).",
      "Save editing for a completely separate pass at least 30 minutes later."
    ],
    "koL": [
      "어려운 도입부는 건너뛰고 가장 재미있는 중간 파트부터 먼저 만드세요.",
      "10분 제한이나 3문장 요약 같은 가벼운 제약 조건을 걸어 재미를 붙이세요.",
      "수정과 다듬기는 최소 30분 뒤 완전히 별도의 시간으로 분리하세요."
    ]
  },
  "high": {
    "enT": "Open Creative Channel — Ride the Wave & Leave a Hook for Tomorrow",
    "koT": "창작 흐름 개방 — 좋은 탄력을 타되 내일 이어갈 고리를 남겨 두세요",
    "enD": "Your generative flow is humming. Stop while you still know what comes next (the Hemingway Bridge) so tomorrow’s session starts effortlessly.",
    "koD": "생성 에너지가 아주 원활합니다. 완전히 바닥날 때까지 쓰기보다 다음에 쓸 1줄이 보일 때 멈추는 \"헤밍웨이 브릿지\"를 쓰면 내일도 쉽게 시작할 수 있습니다.",
    "enS": "\"Create freely first, edit kindly second.\"",
    "koS": "\"생성은 자유롭게 먼저, 편집은 다정하게 나중에.\"",
    "enL": [
      "Protect this 30–45 minute window from notifications.",
      "Before stopping, jot 1 rough bullet for where tomorrow’s session picks up.",
      "Feed the tank later with curiosity—a walk, book, or music unrelated to work."
    ],
    "koL": [
      "지금의 30~45분 몰입 구간은 알림을 완전히 차단해 지켜 주세요.",
      "마무리 전 내일 바로 이어갈 첫 줄 메모 1개를 남겨 두세요.",
      "작업 후에는 일과 무관한 산책·독서·음악으로 영감 탱크를 채워 두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_creative_block_v1";
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
      window.gtag('event', "creative_block_complete", {
        tool_slug: "creative-block-momentum-starter",
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
      var shareUrl = "https://dopabrain.com/portal/tools/creative-block-momentum-starter.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "creative-block-momentum-starter",
        filename: 'dopabrain-creative-block-momentum-starter-card.png',
        badge: "CREATIVE BLOCK • UGLY-FIRST-DRAFT MOMENTUM",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ec4899",
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
