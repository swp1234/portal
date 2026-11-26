/* Exam & Certification Test Anxiety Cooldown Lab
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Exam & Certification Test Anxiety Cooldown Lab | DopaBrain",
    "metaDesc": "Blanking out on material you studied for weeks as soon as the test timer starts? Score 5 test-anxiety interference signals locally and run a 3-minute working-memory cooldown.",
    "kicker": "EXAM & TEST ANXIETY • WORKING-MEMORY COOLDOWN",
    "heroTitle": "Exam & Certification Test Anxiety Cooldown Lab",
    "heroLead": "Blanking out on material you studied for weeks as soon as the test timer starts? Score 5 test-anxiety interference signals locally and run a 3-minute working-memory cooldown.",
    "chip1": "5 Test Interference Traps",
    "chip2": "3-Min Cooldown",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PRE-EXAM ANXIETY SIGNALS (1 = CALM, 5 = BLANKING OUT)",
    "step1Title": "What is interfering most with your recall during exams?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One concrete topic I already know well to start with confidence (100% local):",
    "ctaBtn": "Build My Exam Cooldown Plan",
    "resultBadge": "STEP 2 • YOUR EXAM-DAY RECALL RECOVERY PROTOCOL",
    "noteTitle": "My Confidence Anchor Topic",
    "meterLabel": "Working-Memory Clarity Score",
    "scriptTitle": "Pre-Test Cognitive Reframe Line",
    "stepsTitle": "3 Research-Backed Moves Before & During Your Exam",
    "stickyTitle": "Want to check your overall study stress & nervous-system baseline?",
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
    "title": "시험·자격증 불안 진정 & 작업기억 회복 랩 | DopaBrain",
    "metaDesc": "몇 주간 공부한 내용이 시험 타이머가 켜지는 순간 하얗게 지워지나요? 5가지 시험 불안 간섭 요인을 비공개로 점검하고 3분 작업기억 회복 프로토콜을 실행하세요.",
    "kicker": "시험 불안 진정 · 작업기억 쿨다운 랩",
    "heroTitle": "시험·자격증 불안 진정 & 작업기억 회복 랩",
    "heroLead": "몇 주간 공부한 내용이 시험 타이머가 켜지는 순간 하얗게 지워지나요? 5가지 시험 불안 간섭 요인을 비공개로 점검하고 3분 작업기억 회복 프로토콜을 실행하세요.",
    "chip1": "5가지 시험 간섭",
    "chip2": "3분 쿨다운",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 시험 직전 불안 신호 점검 (1 = 차분함, 5 = 머리가 하얘짐)",
    "step1Title": "시험 중 기억 인출을 가장 크게 방해하는 요인은 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이미 잘 알고 있어 자신감의 앵커가 될 핵심 영역 1가지 (100% 로컬):",
    "ctaBtn": "내 시험 불안 쿨다운 플랜 보기",
    "resultBadge": "2단계 • 시험 당일 기억력 회복 프로토콜",
    "noteTitle": "나의 자신감 앵커 영역",
    "meterLabel": "작업기억 명료도 지수",
    "scriptTitle": "시험 직전 뇌를 안정시키는 리프레임 문장",
    "stepsTitle": "시험 전·중 작업기억을 지키는 3단계",
    "stickyTitle": "시험 준비 기간 중 누적된 전체 스트레스 지수도 점검해 볼까요?",
    "stickySub": "무료 60초 스트레스 체크로 긴장도 확인하기",
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
    "title": "考试焦虑与工作记忆冷却室 | DopaBrain",
    "heroTitle": "考试焦虑与工作记忆冷却室",
    "heroLead": "用3分钟情绪释放与两轮答题法消除考场大脑空白与时间恐慌。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "試験・資格テスト不安クールダウン | DopaBrain",
    "heroTitle": "試験・資格テスト不安クールダウン",
    "heroLead": "本番で頭が真っ白になる不安干渉を3分リセットと2周解法で整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Lab de Calma para Ansiedad de Exámenes | DopaBrain",
    "heroTitle": "Lab de Calma para Ansiedad de Exámenes",
    "heroLead": "Libera tu memoria de trabajo ante exámenes con un reseteo de 3 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Lab de Calma para Ansiedade em Provas | DopaBrain",
    "heroTitle": "Lab de Calma para Ansiedade em Provas",
    "heroLead": "Destrave a memória de trabalho na hora da prova com um cooldown de 3 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Prüfungsangst- & Cooldown-Labor | DopaBrain",
    "heroTitle": "Prüfungsangst- & Cooldown-Labor",
    "heroLead": "Befreie dein Arbeitsgedächtnis vor Klausuren mit 3-Minuten-Cooldown & 2-Pass-Strategie.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Labo Calme Stress des Examens | DopaBrain",
    "heroTitle": "Labo Calme Stress des Examens",
    "heroLead": "Libérez votre mémoire de travail avant un examen grâce au reset de 3 minutes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Снятие экзаменационной тревоги | DopaBrain",
    "heroTitle": "Снятие экзаменационной тревоги",
    "heroLead": "Уберите ступор на экзамене за 3 минуты и верните ясность рабочей памяти.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "एग्ज़ाम एंग्ज़ायटी कूलडाउन लैब | DopaBrain",
    "heroTitle": "एग्ज़ाम एंग्ज़ायटी कूलडाउन लैब",
    "heroLead": "3-मिनट कूलडाउन और 2-पास नियम से परीक्षा के दौरान दिमाग खाली होने की घबराहट मिटाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Lab Reda Cemas Ujian & Sertifikasi | DopaBrain",
    "heroTitle": "Lab Reda Cemas Ujian & Sertifikasi",
    "heroLead": "Hentikan blank saat ujian dengan pendinginan memori kerja 3 menit dan strategi 2 putaran.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sınav Kaygısı Soğutma Laboratuvarı | DopaBrain",
    "heroTitle": "Sınav Kaygısı Soğutma Laboratuvarı",
    "heroLead": "3 dakikalık çalışma belleği sıfırlamasıyla sınav anı kilitlenmesini çözün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "working_mem_hijack",
    "en": "Worry-Loop Hijack — Replaying \"what if I fail\" while trying to read a question",
    "ko": "실패 걱정 침투 — 문제를 읽는 동안 \"떨어지면 어쩌지\" 생각이 계속 끼어듦"
  },
  {
    "id": "clock_panic",
    "en": "Timer Tunnel Vision — Checking remaining minutes after every single item",
    "ko": "타이머 강박 — 한 문제 풀 때마다 남은 시간을 계속 확인하며 초조해짐"
  },
  {
    "id": "hard_q_stall",
    "en": "Hard-Question Freeze — Getting stuck 6 minutes on one tough question instead of flagging it",
    "ko": "난문 정체 — 어려운 한 문제에 붙들려 뒤의 쉬운 문제 시간을 날림"
  },
  {
    "id": "cram_exhaustion",
    "en": "Pre-Exam Sleep Debt — Late-night cramming leaving recall foggy on test morning",
    "ko": "전날 밤샘 피로 — 벼락치기로 수면이 부족해 시험 당일 뇌가 흐릿함"
  },
  {
    "id": "physical_rush",
    "en": "Fast Heart & Shallow Breath — Tight chest making simple wording look confusing",
    "ko": "신체 각성 과다 — 숨이 가쁘고 심장이 빨라 쉬운 지문도 눈에 안 들어옴"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Test Interference — Offload Worry on Paper & Run the 2-Pass Strategy",
    "koT": "시험 불안 간섭 높음 — 5분 걱정 메모 방출과 2회독 풀이 전략을 즉시 쓰세요",
    "enD": "University of Chicago cognitive scientist Sian Beilock showed test anxiety steals working memory—not actual knowledge. Spending 5 minutes writing out worries before the test frees working memory and improves exam performance measurably.",
    "koD": "시카고대 시안 베일록 연구에 따르면 시험 불안은 지식 부족이 아니라 작업기억을 갉아먹어 발생합니다. 시험 직전 5분간 걱정을 종이에 털어내고 쉬운 문제부터 푸는 2회독 전략이 실력 발휘를 즉시 회복시킵니다.",
    "enS": "\"My knowledge is already stored. My only job in the first 10 minutes is to harvest easy wins and let my brain warm up.\"",
    "koS": "\"공부한 내용은 이미 머릿속에 있어. 처음 10분은 쉬운 문제만 먼저 챙겨 뇌를 워밍업하는 데 집중할게.\"",
    "enL": [
      "Do a 3-minute expressive worry dump on scrap paper before entering the exam room.",
      "Use the 2-Pass Rule: flag any question taking >60 seconds on Pass 1 and return calmly on Pass 2.",
      "Do 2 long slow exhales before reading dense multi-step prompts."
    ],
    "koL": [
      "시험 전 3분간 떠오르는 걱정을 연습장에 모두 적어 머릿속 작업기억을 비우세요.",
      "2회독 규칙: 1차 풀이에서 60초 넘게 막히는 문제는 표시만 하고 넘어간 뒤 2차에 푸세요.",
      "긴 지문을 읽기 전 길게 내쉬는 호흡 2회로 시야와 심박을 안정시키세요."
    ]
  },
  "mid": {
    "enT": "Moderate Exam Nerves — Lock In Your Pacing Checkpoints",
    "koT": "적당한 시험 긴장 — 구간별 시간 체크포인트만 잡아두면 안정됩니다",
    "enD": "Mild adrenaline sharpens focus. Checking the clock only every 25% of questions keeps your rhythm smooth without panic.",
    "koD": "적당한 긴장은 집중력을 높여줍니다. 매 문제마다 시계를 보지 말고 전체의 25% 지점마다만 시간을 확인하면 페이스가 안정됩니다.",
    "enS": "\"One tricky question never defines the whole exam—flag it and keep moving.\"",
    "koS": "\"까다로운 한 문제가 시험 전체를 결정하지 않아. 표시해 두고 리듬을 지킬게.\"",
    "enL": [
      "Write 3 key checkpoint times on the corner of your scratch sheet.",
      "Read the final question sentence first so you know exactly what is being asked.",
      "Protect a full night of sleep the night before—sleep consolidates recall far better than midnight cramming."
    ],
    "koL": [
      "시험지 모서리에 25%·50%·75% 구간 목표 시간 3개만 적어 두세요.",
      "긴 문제는 마지막 질문 문장을 먼저 읽어 핵심 요구사항을 파악하세요.",
      "전날 밤샘 암기보다 충분한 수면이 기억 인출 속도를 훨씬 높여줍니다."
    ]
  },
  "high": {
    "enT": "Steady Test Composure — Trust Your Preparation & Clean Execution",
    "koT": "안정적인 시험 평정심 — 준비한 실력을 차분히 펼칠 상태입니다",
    "enD": "Your focus and pacing habits are strong. Keep breathing evenly and double-check only flagged items at the end.",
    "koD": "시험 운영 감각과 평정심이 매우 좋습니다. 일정한 호흡을 유지하고 마지막에는 표시해 둔 문제만 침착하게 재확인하세요.",
    "enS": "\"Steady pace, clear reading, one question at a time.\"",
    "koS": "\"일정한 페이스, 정확한 읽기, 한 번에 딱 한 문제씩.\"",
    "enL": [
      "Start with a brisk 2-minute scan to spot familiar sections.",
      "Avoid changing your first instinct answer unless you spot a clear misread.",
      "Hydrate lightly and relax your jaw between sections."
    ],
    "koL": [
      "시작 직후 2분간 전체 구성을 훑어 익숙한 파트부터 탄력을 붙이세요.",
      "명확한 오독을 발견한 경우가 아니면 첫 직관 답안을 무리하게 고치지 마세요.",
      "파트가 바뀔 때마다 턱과 어깨 힘을 툭 풀어 피로를 줄이세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_exam_anxiety_v1";
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
      window.gtag('event', "exam_anxiety_complete", {
        tool_slug: "exam-test-anxiety-cooldown",
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
      var shareUrl = "https://dopabrain.com/portal/tools/exam-test-anxiety-cooldown.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "exam-test-anxiety-cooldown",
        filename: 'dopabrain-exam-test-anxiety-cooldown-card.png',
        badge: "EXAM & TEST ANXIETY • WORKING-MEMORY COOLDOWN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
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
