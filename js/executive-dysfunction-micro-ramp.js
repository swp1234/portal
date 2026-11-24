/* Executive Dysfunction & Task-Initiation Micro-Ramp
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Executive Dysfunction & Task-Initiation Micro-Ramp | DopaBrain",
    "metaDesc": "Staring at a simple task for two hours unable to start even though you genuinely want to? Rate 5 initiation blocks locally and generate a frictionless 90-second micro-ramp.",
    "kicker": "TASK INITIATION • ZERO-WALL MICRO-RAMP",
    "heroTitle": "Executive Dysfunction & Task-Initiation Micro-Ramp",
    "heroLead": "Staring at a simple task for two hours unable to start even though you genuinely want to? Rate 5 initiation blocks locally and generate a frictionless 90-second micro-ramp.",
    "chip1": "5 Initiation Blocks",
    "chip2": "90s Micro-Ramp",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • IDENTIFY THE INVISIBLE WALL (1 = LOW, 5 = STUCK SOLID)",
    "step1Title": "What is making the first 60 seconds feel impossible right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The laughably tiny 30-second physical first move (100% local):",
    "ctaBtn": "Build 90-Second Micro-Ramp",
    "resultBadge": "STEP 2 • YOUR ZERO-WALL LAUNCH SEQUENCE",
    "noteTitle": "My 30-Second Physical First Move",
    "meterLabel": "Task Launch Ease",
    "scriptTitle": "Anti-Paralysis Permission Cue",
    "stepsTitle": "3 Zero-Shame Steps to Break Task Paralysis",
    "stickyTitle": "Need deeper ADHD & focus-friction scaffolding?",
    "stickySub": "Open the ADHD Focus Friction & Micro-Start Audit",
    "stickyBtn": "Focus Audit →",
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
    "title": "실행기능 마비·작업 착수 90초 램프 | DopaBrain",
    "metaDesc": "해야 한다는 걸 알면서도 2시간째 시작 버튼을 못 누르고 멈춰 있나요? 5가지 착수 장벽을 비공개로 점검하고 부담 0의 90초 시작 램프를 생성하세요.",
    "kicker": "실행기능 마비 탈출 · 90초 착수 램프",
    "heroTitle": "실행기능 마비·작업 착수 90초 램프",
    "heroLead": "해야 한다는 걸 알면서도 2시간째 시작 버튼을 못 누르고 멈춰 있나요? 5가지 착수 장벽을 비공개로 점검하고 부담 0의 90초 시작 램프를 생성하세요.",
    "chip1": "5가지 착수 장벽",
    "chip2": "90초 마이크로 시작",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 보이지 않는 시작 장벽 점검 (1 = 가벼움, 5 = 꽉 막힘)",
    "step1Title": "지금 첫 60초를 시작하기 가장 어렵게 만드는 원인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 웃길 정도로 작은 30초짜리 첫 물리적 동작 (100% 로컬):",
    "ctaBtn": "90초 착수 램프 만들기",
    "resultBadge": "2단계 • 장벽 없는 90초 착수 시퀀스",
    "noteTitle": "나의 30초 첫 물리적 동작",
    "meterLabel": "작업 착수 용이도",
    "scriptTitle": "시작 마비를 푸는 허락 문장",
    "stepsTitle": "시작 마비를 푸는 3단계",
    "stickyTitle": "ADHD·집중 마찰을 더 깊이 점검해 볼까요?",
    "stickySub": "ADHD 집중 마찰 감사 & 맞춤 실행 설계 도구 열기",
    "stickyBtn": "집중 감사 →",
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
    "title": "执行功能卡顿90秒微启动斜坡 | DopaBrain",
    "heroTitle": "执行功能卡顿90秒微启动斜坡",
    "heroLead": "排查5大拖延启动阻力，生成零羞耻、90秒轻松起步的行动斜坡。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "実行機能ストップ・90秒着手ランプ | DopaBrain",
    "heroTitle": "実行機能ストップ・90秒着手ランプ",
    "heroLead": "動けない5つの壁を整理し、90秒で軽く着手できるマイクロ手順を作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Rampa de Inicio de 90s (Disfunción Ejecutiva) | DopaBrain",
    "heroTitle": "Rampa de Inicio de 90s (Disfunción Ejecutiva)",
    "heroLead": "Supera 5 bloqueos de inicio de tareas con una micro-rampa sin culpa de 90 segundos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Micro-Rampa de Início 90s (Disfunção Executiva) | DopaBrain",
    "heroTitle": "Micro-Rampa de Início 90s (Disfunção Executiva)",
    "heroLead": "Identifique 5 travas para começar tarefas e monte uma rampa leve de 90 segundos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Exekutive Starthilfe: 90s-Mikro-Rampe | DopaBrain",
    "heroTitle": "Exekutive Starthilfe: 90s-Mikro-Rampe",
    "heroLead": "Prüfe 5 Start-Blockaden und nutze eine schamfreie 90-Sekunden-Rampe zum Loslegen.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Micro-Rampe 90s (Paralysie de Tâche) | DopaBrain",
    "heroTitle": "Micro-Rampe 90s (Paralysie de Tâche)",
    "heroLead": "Identifiez 5 blocages au démarrage et lancez une micro-rampe sans pression de 90s.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Микро-старт за 90с при параличе задач | DopaBrain",
    "heroTitle": "Микро-старт за 90с при параличе задач",
    "heroLead": "Разберите 5 барьеров старта и запустите лёгкий 90-секундный разгон без чувства вины.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "एग्जीक्यूटिव डिसफंक्शन 90-सेकंड रैंप | DopaBrain",
    "heroTitle": "एग्जीक्यूटिव डिसफंक्शन 90-सेकंड रैंप",
    "heroLead": "काम शुरू करने की 5 बाधाएं पहचानें और 90-सेकंड का आसान माइक्रो-स्टार्ट बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Mikro-Ramp 90 Detik Atasi Macet Tugas | DopaBrain",
    "heroTitle": "Mikro-Ramp 90 Detik Atasi Macet Tugas",
    "heroLead": "Kenali 5 penghambat mulai tugas dan bangun langkah mikro 90 detik tanpa rasa bersalah.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Görev Başlatma 90 Saniye Mikro Rampası | DopaBrain",
    "heroTitle": "Görev Başlatma 90 Saniye Mikro Rampası",
    "heroLead": "5 başlama engelini analiz edin ve baskısız 90 saniyelik başlangıç rampası kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "too_many_steps",
    "en": "Unchunked Blob — Seeing 15 hidden sub-steps mashed into one overwhelming label",
    "ko": "쪼개지지 않은 덩어리 — 15개 세부 단계가 하나의 거대한 숙제처럼 보임"
  },
  {
    "id": "emotional_dread",
    "en": "Emotional Wall — Associating the task with boredom, critique, or past frustration",
    "ko": "감정적 벽 — 지루함·평가·과거 실패 기억이 과제와 연결되어 회피 유발"
  },
  {
    "id": "zero_dopamine",
    "en": "Flat Interest / Novelty — Task feels painfully dry so your brain seeks any quick hit",
    "ko": "흥미·보상 부족 — 너무 건조해서 뇌가 계속 다른 자극을 찾음"
  },
  {
    "id": "setup_friction",
    "en": "Setup Friction — Missing file, messy desk, or login hurdle blocking immediate entry",
    "ko": "준비 마찰 — 파일 찾기·로그인·어지러운 환경 때문에 시작 전부터 지침"
  },
  {
    "id": "time_blindness",
    "en": "Time Uncertainty — Not knowing if it takes 10 minutes or 3 hours, so delaying indefinitely",
    "ko": "시간 감각 불확실 — 10분 걸릴지 3시간 걸릴지 몰라 선뜻 시작 못 함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Full Task Paralysis — Separate \"Opening\" From \"Doing\"",
    "koT": "강한 착수 마비 — \"열기\"와 \"완성하기\"를 완전히 분리하세요",
    "enD": "Executive paralysis is not a moral failure—it’s an activation-energy bottleneck. Making the goal literally just opening the file or standing up bypasses the threat response.",
    "koD": "실행 마비는 의지 부족이 아니라 \"시작 에너지 병목\"입니다. 목표를 완성하기가 아니라 \"파일만 열기\"로 낮추면 뇌의 거부 반응이 풀립니다.",
    "enS": "\"My only job for the next 90 seconds is setup—not finishing. Once it’s open, I have full permission to pause.\"",
    "koS": "\"다음 90초 동안 내 목표는 완성이 아니라 준비만 해두기야. 열어두고 멈춰도 완전히 괜찮아.\"",
    "enL": [
      "Do ONLY the physical setup (open tab, put shoes on, place bowl on counter) and stop if you want.",
      "Add gentle body-doubling or upbeat instrumental sound to raise baseline stimulation.",
      "Set a playful 5-minute \"see how far I get\" timer—no pressure to finish."
    ],
    "koL": [
      "오직 물리적 준비(문서 열기, 신발 꺼내기, 재료 놓기) 1가지만 하고 멈춰도 괜찮다고 정하세요.",
      "가벼운 경쾌한 연주곡이나 작업 ASMR을 틀어 뇌의 각성을 부드럽게 올려주세요.",
      "완성 압박 없이 \"5분만 어디까지 가나 보자\" 타이머를 켜고 시작하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Activation Friction — Chunk Into Three 5-Minute Stepping Stones",
    "koT": "중간 착수 마찰 — 5분짜리 징검다리 3개로 쪼개세요",
    "enD": "Once you see the first concrete 5-minute step, momentum will carry you smoothly through the rest.",
    "koD": "눈에 보이는 5분짜리 첫 징검다리만 정하면 나머지는 관성으로 자연스럽게 이어집니다.",
    "enS": "\"Small visible steps beat big heroic intentions every time.\"",
    "koS": "\"거창한 결심보다 눈에 보이는 5분짜리 첫걸음이 훨씬 강력하다.\"",
    "enL": [
      "Write 3 micro-steps that each take under 5 minutes.",
      "Start with the easiest 2-minute step to spark momentum.",
      "Pair the task with a pleasant drink or cozy workspace cue."
    ],
    "koL": [
      "각각 5분 안에 끝나는 아주 작은 단계 3개를 적어두세요.",
      "가장 만만한 2분짜리 단계부터 시작해 추진력을 붙이세요.",
      "좋아하는 음료나 아늑한 조명과 과제를 연결해 보세요."
    ]
  },
  "high": {
    "enT": "Low Friction — Launch Directly Into Your First Sprint",
    "koT": "착수 장벽 낮음 — 지금 바로 첫 스프린트에 진입하세요",
    "enD": "Activation energy is already in your favor. Dive straight in while inertia is light.",
    "koD": "시작 에너지가 이미 충분합니다. 망설임 없이 바로 첫 블록에 들어가세요.",
    "enS": "\"I’m starting smoothly now—progress over perfection.\"",
    "koS": "\"지금 가볍게 시작한다—완벽보다 꾸준한 진전이 우선이야.\"",
    "enL": [
      "Start a 20-minute focus block right away.",
      "Check off your first micro-milestone visibly for a clean reward cue.",
      "Keep the workspace clear for tomorrow’s easy start."
    ],
    "koL": [
      "지금 바로 20분 집중 블록을 시작하세요.",
      "첫 작은 단계를 완료할 때마다 눈에 보이게 체크해 보상감을 챙기세요.",
      "내일도 쉽게 시작할 수 있게 마무리 후 책상을 1분만 정돈해 두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_exec_ramp_v1";
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
      window.gtag('event', "exec_ramp_complete", {
        tool_slug: "executive-dysfunction-micro-ramp",
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
      var shareUrl = "https://dopabrain.com/portal/tools/executive-dysfunction-micro-ramp.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "executive-dysfunction-micro-ramp",
        filename: 'dopabrain-executive-dysfunction-micro-ramp-card.png',
        badge: "TASK INITIATION • ZERO-WALL MICRO-RAMP",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#3b82f6",
        accent2: "#14b8a6"
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
