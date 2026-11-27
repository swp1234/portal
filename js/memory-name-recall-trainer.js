/* Everyday Name & Conversation Recall Warmup Lab
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Everyday Name & Conversation Recall Warmup Lab | DopaBrain",
    "metaDesc": "Forgetting someone’s name three seconds after shaking hands? It is usually an attention leak, not bad memory. Audit 5 encoding slips locally and apply the 3-step LIRA name-lock method.",
    "kicker": "BRAIN TRAINING • EVERYDAY NAME & CONVERSATION RECALL",
    "heroTitle": "Everyday Name & Conversation Recall Warmup Lab",
    "heroLead": "Forgetting someone’s name three seconds after shaking hands? It is usually an attention leak, not bad memory. Audit 5 encoding slips locally and apply the 3-step LIRA name-lock method.",
    "chip1": "5 Encoding Leaks",
    "chip2": "LIRA Name Lock",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHY NAMES SLIP AWAY (1 = SHARP, 5 = INSTANT BLANK)",
    "step1Title": "What usually happens in the 3 seconds someone introduces themselves?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Practice 1 vivid association for a name you want to remember this week (100% local):",
    "ctaBtn": "Build My Everyday Name-Recall Protocol",
    "resultBadge": "STEP 2 • YOUR 3-STEP LIRA NAME-ENCODING PROTOCOL",
    "noteTitle": "My Practice Memory Hook",
    "meterLabel": "Active Encoding Focus",
    "scriptTitle": "Graceful \"Name Refresh\" Recovery Line",
    "stepsTitle": "3 Memory-Science Habits That Lock Names Into Long-Term Recall",
    "stickyTitle": "Want to keep warming up visual & pattern working memory?",
    "stickySub": "Try the free Visual Pattern & IQ Warmup",
    "stickyBtn": "Brain Warmup →",
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
    "title": "방금 들은 사람 이름·대화 핵심 기억력 훈련 랩 | DopaBrain",
    "metaDesc": "악수하고 3초 만에 방금 들은 이름이 하얗게 지워지나요? 기억력 저하가 아니라 입력 순간의 주의 분산 때문입니다. 5가지 입력 누수를 점검하고 3단계 이름 각인 공식을 익히세요.",
    "kicker": "두뇌 기억력 · 방금 들은 이름·대화 기억력 훈련 랩",
    "heroTitle": "방금 들은 사람 이름·대화 핵심 기억력 훈련 랩",
    "heroLead": "악수하고 3초 만에 방금 들은 이름이 하얗게 지워지나요? 기억력 저하가 아니라 입력 순간의 주의 분산 때문입니다. 5가지 입력 누수를 점검하고 3단계 이름 각인 공식을 익히세요.",
    "chip1": "5가지 입력 누수",
    "chip2": "3단계 이름 각인",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 사람 이름과 대화 내용이 빠지는 순간 점검 (1 = 또렷, 5 = 3초 망각)",
    "step1Title": "상대가 이름을 말할 때 그 3초 사이에 내 머릿속에서 일어나는 일은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주 꼭 기억하고 싶은 이름 1개와 연상 이미지 연습 (100% 로컬):",
    "ctaBtn": "내 이름·대화 기억력 강화 프로토콜 보기",
    "resultBadge": "2단계 • 3단계 이름·대화 기억 각인 프로토콜",
    "noteTitle": "나의 연상 기억 훅 연습",
    "meterLabel": "기억 입력 집중도",
    "scriptTitle": "이름이 가물가물할 때 품격 있게 다시 묻는 1줄",
    "stepsTitle": "이름을 장기 기억에 단단히 꽂는 3단계",
    "stickyTitle": "기억력 예열에 이어 시각 패턴·논리 두뇌 워밍업도 해 볼까요?",
    "stickySub": "무료 시각 패턴·IQ 퀴즈로 두뇌 활성",
    "stickyBtn": "두뇌 워밍업 →",
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
    "title": "日常人名与对话记忆热身实验室 | DopaBrain",
    "heroTitle": "日常人名与对话记忆热身实验室",
    "heroLead": "解决握手3秒就忘名字的注意力漏损，掌握3步记忆锚定法。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "人の名前・会話の記憶力ウォームアップラボ | DopaBrain",
    "heroTitle": "人の名前・会話の記憶力ウォームアップラボ",
    "heroLead": "挨拶3秒後に名前を忘れる原因を点検し、3ステップ定着法で記憶力を鍛えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Laboratorio de Memoria de Nombres y Conversaciones | DopaBrain",
    "heroTitle": "Laboratorio de Memoria de Nombres y Conversaciones",
    "heroLead": "Deja de olvidar nombres a los 3 segundos con el método de atención y eco.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Laboratório de Memória para Nomes e Conversas | DopaBrain",
    "heroTitle": "Laboratório de Memória para Nomes e Conversas",
    "heroLead": "Pare de esquecer nomes em 3 segundos com o método de repetição e âncora visual.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Namensgedächtnis- & Gesprächs-Merk-Labor | DopaBrain",
    "heroTitle": "Namensgedächtnis- & Gesprächs-Merk-Labor",
    "heroLead": "Merke dir Namen sofort sicherer mit der 3-Schritte-Aufmerksamkeits-Methode.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Labo Mémoire des Prénoms & Conversations | DopaBrain",
    "heroTitle": "Labo Mémoire des Prénoms & Conversations",
    "heroLead": "Ne perdez plus un prénom 3 secondes après les présentations grâce à 3 réflexes simples.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Тренажёр памяти на имена и детали разговоров | DopaBrain",
    "heroTitle": "Тренажёр памяти на имена и детали разговоров",
    "heroLead": "Перестаньте забывать имена через 3 секунды с помощью 3-шаговой фиксации.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "नाम और बातचीत याददाश्त वार्मअप लैब | DopaBrain",
    "heroTitle": "नाम और बातचीत याददाश्त वार्मअप लैब",
    "heroLead": "मिलने के 3 सेकंड बाद नाम भूलना रोकें—3-चरण ध्यान तकनीक अपनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Lab Latihan Ingat Nama & Percakapan Sehari-hari | DopaBrain",
    "heroTitle": "Lab Latihan Ingat Nama & Percakapan Sehari-hari",
    "heroLead": "Atasi lupa nama 3 detik setelah kenalan dengan teknik fokus dan pengulangan 3 langkah.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Günlük İsim ve Sohbet Hatırlama Laboratuvarı | DopaBrain",
    "heroTitle": "Günlük İsim ve Sohbet Hatırlama Laboratuvarı",
    "heroLead": "Tanıştıktan 3 saniye sonra isim unutmayı 3 adımlı odak yöntemiyle azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "rehearsing_own_intro",
    "en": "Self-Focus Hijack — Thinking about what I will say next while they say their name",
    "ko": "내 소개 걱정 — 상대가 이름 말할 때 내 다음 말을 머릿속으로 연습 중임"
  },
  {
    "id": "zero_verbal_echo",
    "en": "Silent Nod Only — Saying \"Nice to meet you\" without repeating their name once",
    "ko": "무반복 인사 — 상대 이름을 입 밖으로 한 번도 안 따라 하고 고개만 끄덕임"
  },
  {
    "id": "no_visual_anchor",
    "en": "Abstract Sound Only — Hearing syllables without linking a detail, role, or image",
    "ko": "단순 소리 통과 — 얼굴 특징·직업·이미지와 연결 없이 소리만 흘려보냄"
  },
  {
    "id": "group_batch_overload",
    "en": "5-Person Rapid Intro — Meeting a whole table at once without picking 2 anchors",
    "ko": "단체 인사 과부하 — 5명을 한 번에 소개받고 전부 뭉뚱그려 잊어버림"
  },
  {
    "id": "no_goodbye_recall",
    "en": "Skipped Goodbye Echo — Leaving the chat without using their name one final time",
    "ko": "작별 인출 생략 — 헤어질 때 이름을 한 번 더 부르지 않고 끝냄"
  }
];
  var TIERS = {
  "low": {
    "enT": "Attention-At-Encoding Leak — Use Repeat + Visual Hook + Goodbye Echo",
    "koT": "입력 순간 주의 누수 — \"즉시 1회 복창 + 특징 연결 + 작별 호명\" 3단 콤보를 쓰세요",
    "enD": "Memory researchers call this the Baker/baker paradox: our brain easily recalls meaningful context (\"a baker\") far better than arbitrary labels (\"Mr. Baker\"). Repeating the name immediately and tying it to one vivid detail triples recall.",
    "koD": "기억 심리학의 \"베이커 역설\"에 따르면 뇌는 추상적 이름보다 구체적 맥락·이미지를 훨씬 잘 기억합니다. 듣자마자 자연스레 1번 따라 말하고 인상·관심사와 연결하면 기억률이 3배 오릅니다.",
    "enS": "\"I want to make sure I remember your name properly—could you remind me one more time? Thank you, [Name]!\"",
    "koS": "\"성함을 정확히 기억하고 싶어서요, 한 번만 다시 여쭤봐도 될까요? 감사합니다, [이름]님!\"",
    "enL": [
      "Listen 100% during the 2-second intro—pause planning your own reply.",
      "Echo their name naturally right away (\"Great to meet you, Minji!\") and link 1 visual/topic cue.",
      "Use their name once when saying goodbye—spaced retrieval after 10 minutes locks it in."
    ],
    "koL": [
      "상대가 이름 말하는 2초 동안은 내 인사말 고민을 완전히 멈추고 귀만 열어 두세요.",
      "즉시 자연스럽게 1번 따라 말하고(\"반갑습니다, 민지님!\") 직업·취미 1가지와 묶으세요.",
      "헤어질 때 이름을 딱 1번 더 부르세요. 10분 뒤 인출이 장기 기억으로 넘깁니다."
    ]
  },
  "mid": {
    "enT": "Good Social Recall — Add a 10-Second Post-Event Note Anchor",
    "koT": "양호한 기억력 — 모임 직후 10초 키워드 메모만 더하면 완벽해집니다",
    "enD": "You catch most names in 1-on-1 chats; jotting 3 words privately after group events cements names effortlessly.",
    "koD": "1:1 대화 기억은 좋은 편입니다. 단체 모임 직후 10초만 이름+키워드 1단어를 메모해 두면 다음 만남이 훨씬 편해집니다.",
    "enS": "\"Listen cleanly, echo once, jot 1 warm detail afterward.\"",
    "koS": "\"잘 듣고, 한 번 부르고, 헤어져 1단어만 남긴다.\"",
    "enL": [
      "Ask a curious follow-up question right after hearing their name.",
      "In group rooms, focus on locking 2–3 names well rather than straining for all 10.",
      "Review your quick note right before meeting that group again."
    ],
    "koL": [
      "이름을 들은 직후 상대의 관심사에 대해 가벼운 질문을 1개 던져 연결 고리를 만드세요.",
      "단체 자리에서는 10명 다 외우려 애쓰기보다 2~3명부터 확실히 기억하세요.",
      "다음 모임 1분 전에 지난번 적어 둔 키워드를 훑어보세요."
    ]
  },
  "high": {
    "enT": "Sharp Social Memory — Strong Presence & Recall Habit",
    "koT": "뛰어난 사회적 기억력 — 높은 경청 집중력과 인출 습관을 갖추고 계십니다",
    "enD": "Remembering names and small details makes people feel genuinely seen. Keep enjoying this warm social superpower.",
    "koD": "상대의 이름과 작은 이야기를 기억하는 능력은 최고의 신뢰 자산입니다.",
    "enS": "\"Presence is the secret behind effortless memory.\"",
    "koS": "\"진심 어린 경청이 가장 강력한 기억력이다.\"",
    "enL": [
      "Keep using warm spaced recall at follow-ups.",
      "Pair name recall with remembering one topic they care about.",
      "Train working memory playfully with pattern & reading habits."
    ],
    "koL": [
      "다음 만남에서 상대가 전에 언급한 관심사를 자연스레 꺼내 보세요.",
      "독서와 패턴 워밍업으로 작업기억의 탄력을 계속 유지하세요.",
      "이름을 기억해 주는 따뜻한 습관을 계속 나눠 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_memory_name_recall_v1";
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
      window.gtag('event', "memory_name_recall_complete", {
        tool_slug: "memory-name-recall-trainer",
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
      var shareUrl = "https://dopabrain.com/portal/tools/memory-name-recall-trainer.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "memory-name-recall-trainer",
        filename: 'dopabrain-memory-name-recall-trainer-card.png',
        badge: "BRAIN TRAINING • EVERYDAY NAME & CONVERSATION RECALL",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#06b6d4",
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
