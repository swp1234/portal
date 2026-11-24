/* Perfectionist Task & Inbox Triage Lab
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Perfectionist Task & Inbox Triage Lab | DopaBrain",
    "metaDesc": "Spending 40 minutes rewriting a 3-line email or avoiding an overflowing inbox out of guilt? Audit 5 perfectionist bottlenecks locally and ship \"B+ done\" fast.",
    "kicker": "PERFECTIONISM RELIEF • GOOD-ENOUGH TRIAGE",
    "heroTitle": "Perfectionist Task & Inbox Triage Lab",
    "heroLead": "Spending 40 minutes rewriting a 3-line email or avoiding an overflowing inbox out of guilt? Audit 5 perfectionist bottlenecks locally and ship \"B+ done\" fast.",
    "chip1": "5 Perfectionist Traps",
    "chip2": "B+ Done Standard",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • SPOT PERFECTIONIST BOTTLENECKS (1 = LIGHT, 5 = PARALYZING)",
    "step1Title": "Where is over-polishing quietly stalling your workday?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One message or task I will finish to \"80% good enough\" in 10 minutes (100% local):",
    "ctaBtn": "Build My B+ Triage Plan",
    "resultBadge": "STEP 2 • YOUR PERFECTIONISM-FREE TRIAGE PROTOCOL",
    "noteTitle": "My 10-Minute \"80% Good Enough\" Ship Target",
    "meterLabel": "Shipping Agility Score",
    "scriptTitle": "Clean, Polite 2-Line Reply Template",
    "stepsTitle": "3 Immediate Moves to Clear Backlog Without Over-Polishing",
    "stickyTitle": "Ready to clear your top 3 triage items in one sprint?",
    "stickySub": "Launch the free Pomodoro Focus Timer next",
    "stickyBtn": "Focus Timer →",
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
    "title": "완벽주의 할 일·받은편지함 트리아지 랩 | DopaBrain",
    "metaDesc": "3줄짜리 메일을 40분째 고쳐 쓰거나 밀린 할 일 목록이 부담스러워 외면하게 되나요? 5가지 완벽주의 병목을 비공개로 점검하고 깔끔한 \"충분한 완료\" 기준으로 전환하세요.",
    "kicker": "완벽주의 작업 분류 · 충분함 기준 트리아지 랩",
    "heroTitle": "완벽주의 할 일·받은편지함 트리아지 랩",
    "heroLead": "3줄짜리 메일을 40분째 고쳐 쓰거나 밀린 할 일 목록이 부담스러워 외면하게 되나요? 5가지 완벽주의 병목을 비공개로 점검하고 깔끔한 \"충분한 완료\" 기준으로 전환하세요.",
    "chip1": "5가지 완벽주의 병목",
    "chip2": "충분한 완료 기준",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 완벽주의 병목 점검 (1 = 가벼움, 5 = 마비 수준)",
    "step1Title": "지금 과도한 완벽주의가 하루 실행 속도를 가장 크게 늦추는 곳은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 10분 안에 \"80%면 충분해\" 기준으로 바로 끝낼 메일·할 일 1건 (100% 로컬):",
    "ctaBtn": "내 B+ 빠른 완료 트리아지 플랜 만들기",
    "resultBadge": "2단계 • 완벽주의 탈출 트리아지 프로토콜",
    "noteTitle": "10분 안에 끝낼 나의 80% 완료 목표",
    "meterLabel": "실행·완료 민첩도",
    "scriptTitle": "과한 고민 없이 바로 쓰는 2줄 답장 템플릿",
    "stepsTitle": "과도한 수정 없이 밀린 일을 비우는 3단계",
    "stickyTitle": "분류한 핵심 3가지를 짧은 집중 스프린트로 바로 끝내볼까요?",
    "stickySub": "무료 뽀모도로 타이머로 10~25분 깔끔하게 실행하기",
    "stickyBtn": "집중 타이머 →",
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
    "title": "完美主义任务与收件箱分流室 | DopaBrain",
    "heroTitle": "完美主义任务与收件箱分流室",
    "heroLead": "排查5大过度打磨瓶颈，建立轻松高效的“80分即交付”行动准则。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "完璧主義タスク＆受信箱トリアージ | DopaBrain",
    "heroTitle": "完璧主義タスク＆受信箱トリアージ",
    "heroLead": "メールや作業の完璧主義ボトルネックを整理し、8割完了で軽やかに進めます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Lab de Triaje para Perfeccionistas e Inbox | DopaBrain",
    "heroTitle": "Lab de Triaje para Perfeccionistas e Inbox",
    "heroLead": "Detecta 5 cuellos perfeccionistas y entrega tareas claras sin quedarte bloqueado.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Lab de Triagem Perfeccionista e Inbox | DopaBrain",
    "heroTitle": "Lab de Triagem Perfeccionista e Inbox",
    "heroLead": "Mapeie 5 gargalos perfeccionistas e conclua tarefas e e-mails sem travar.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Perfektionismus- & Inbox-Triage-Labor | DopaBrain",
    "heroTitle": "Perfektionismus- & Inbox-Triage-Labor",
    "heroLead": "Löse 5 Perfektionismus-Bremsen und erledige Routineaufgaben klar nach dem 80%-Prinzip.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Labo Triage Inbox & Perfectionnisme | DopaBrain",
    "heroTitle": "Labo Triage Inbox & Perfectionnisme",
    "heroLead": "Repérez 5 freins perfectionnistes et avancez sereinement avec la règle du 80 % suffisant.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Триаж задач и почты для перфекционистов | DopaBrain",
    "heroTitle": "Триаж задач и почты для перфекционистов",
    "heroLead": "Уберите 5 затыков перфекционизма и закрывайте рутинные дела по правилу 80%.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "परफेक्शनिस्ट टास्क व इनबॉक्स ट्रायेज लैब | DopaBrain",
    "heroTitle": "परफेक्शनिस्ट टास्क व इनबॉक्स ट्रायेज लैब",
    "heroLead": "5 परफेक्शनिज़्म बाधाएं पहचानें और 80% पर्याप्त नियम से काम तेज़ी से पूरा करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Lab Triase Tugas & Inbox Perfeksionis | DopaBrain",
    "heroTitle": "Lab Triase Tugas & Inbox Perfeksionis",
    "heroLead": "Audit 5 hambatan perfeksionis dan selesaikan tugas harian secara ringkas tanpa macet.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Mükemmeliyetçi Görev ve Gelen Kutusu Labı | DopaBrain",
    "heroTitle": "Mükemmeliyetçi Görev ve Gelen Kutusu Labı",
    "heroLead": "5 mükemmeliyetçi darboğazı çözün ve rutin işleri hızla temizleyin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "email_rewrite",
    "en": "Message Over-Editing — Re-reading short emails or texts 4+ times before hitting send",
    "ko": "메시지 과잉 수정 — 짧은 메일·톡을 보내기 전 4번 이상 다시 읽고 고침"
  },
  {
    "id": "shame_backlog",
    "en": "Delayed-Reply Guilt — Avoiding an old message because apologizing for the delay feels awkward",
    "ko": "늦은 답장 회피 — 답장이 늦어졌다는 미안함 때문에 아예 열지 못함"
  },
  {
    "id": "flat_priority",
    "en": "Treating Every Task as A+ — Giving routine admin the same perfectionism as flagship work",
    "ko": "모든 일에 A+ 기준 — 단순 행정 업무에도 핵심 프로젝트급 완벽함 요구"
  },
  {
    "id": "endless_research",
    "en": "Preparation Loop — Reading one more article or organizing tools instead of shipping",
    "ko": "준비 단계 무한 반복 — 실행 대신 자료 조사·도구 정리만 계속 늘림"
  },
  {
    "id": "fear_tiny_typo",
    "en": "Micro-Mistake Catastrophizing — Treating a minor typo or brief tone as a reputation disaster",
    "ko": "작은 실수 확대 해석 — 사소한 오타나 간결한 말투를 큰 실수로 걱정함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Perfectionism Bottleneck — Apply the 3-Bucket Triage & 10-Minute Cap",
    "koT": "완벽주의 병목 심함 — 3단 분류와 10분 마감 제한을 바로 적용하세요",
    "enD": "Research on maladaptive perfectionism shows treating routine tasks as high-stakes tests multiplies anxiety while slowing actual output. Reserve A+ craft for your top 20% work only.",
    "koD": "일상 업무까지 완벽을 요구하면 불안은 커지고 정작 중요한 성과는 느려집니다. A+ 완성도는 상위 20% 핵심 업무에만 아껴 쓰세요.",
    "enS": "\"Thanks for your patience! Here is the quick update on [X]: [1–2 clear sentences]. Let me know if you need anything else.\"",
    "koS": "\"기다려 주셔서 감사합니다! [X] 건 핵심 내용 공유드립니다: [1~2문장]. 추가로 필요하신 점 있으시면 편히 말씀해 주세요.\"",
    "enL": [
      "Tag 80% of today’s inbox/tasks as \"B+ Done\" (clear, polite, under 3 minutes per reply).",
      "Set a hard 10-minute timer on your most avoided delayed message and hit send when it rings.",
      "Archive or snooze anything that does not need action in the next 72 hours."
    ],
    "koL": [
      "오늘 할 일의 80%에 \"B+ 완료(명확·친절·3분 이내)\" 라벨을 붙이세요.",
      "가장 미뤄둔 답장 1건에 10분 타이머를 맞추고 울리면 바로 전송하세요.",
      "72시간 안에 조치할 필요 없는 메일·작업은 과감히 보관함/보류로 치우세요."
    ]
  },
  "mid": {
    "enT": "Selective Over-Polishing — Cap Draft Passes at Two",
    "koT": "부분적 과잉 다듬기 — 초안 수정 횟수를 최대 2회로 제한하세요",
    "enD": "Your standards drive good quality, and capping revision passes on routine items will hand you back an hour every day.",
    "koD": "높은 기준은 좋은 자산이지만, 일상 업무의 수정 횟수만 2회로 제한해도 매일 1시간 이상 여유가 생깁니다.",
    "enS": "\"Clear and sent beats polished and stuck in Drafts.\"",
    "koS": "\"임시보관함에 갇힌 완벽한 글보다 지금 보낸 명확한 한 줄이 훨씬 가치 있어.\"",
    "enL": [
      "Limit routine replies to 1 draft + 1 quick read-through—then send.",
      "Separate \"flagship A+ work\" (max 1 item today) from \"B+ maintenance.\"",
      "Clear 5 oldest small items in one 15-minute sprint to shrink mental clutter."
    ],
    "koL": [
      "일상 답장은 초안 1회 + 가벼운 확인 1회 후 즉시 발송하세요.",
      "오늘 A+ 완성도를 쓸 핵심 업무는 딱 1개만 지정하세요.",
      "15분 스프린트로 오래된 작은 항목 5개를 털어내어 머릿속 짐을 가볍게 하세요."
    ]
  },
  "high": {
    "enT": "Healthy High Standards — Keep Matching Effort to Real Impact",
    "koT": "건강한 고효율 기준 — 중요도에 맞는 에너지 배분을 잘 유지하고 있습니다",
    "enD": "You are balancing craftsmanship with momentum smoothly. Keep protecting deep craft for work that truly matters while letting routine admin stay crisp and light.",
    "koD": "완성도와 실행 속도의 균형이 아주 좋습니다. 정말 중요한 일에는 깊이 몰입하고 일상 업무는 가볍게 처리하는 지금의 감각을 유지하세요.",
    "enS": "\"I invest deep craft where it counts and keep routine tasks simple and swift.\"",
    "koS": "\"정말 중요한 일에 깊은 정성을 쓰고, 일상 업무는 간결하고 빠르게 끝낸다.\"",
    "enL": [
      "Keep using short reusable templates for recurring messages.",
      "Batch inbox triage twice daily rather than keeping it open all day.",
      "Enjoy the extra bandwidth you freed up for creative thinking."
    ],
    "koL": [
      "반복되는 안내 메시지는 짧은 템플릿으로 유지하세요.",
      "받은편지함은 상시 열어두지 말고 하루 2회 배치 처리하세요.",
      "아껴둔 시간과 에너지를 창의적인 핵심 작업에 투자하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_perfectionist_triage_v1";
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
      window.gtag('event', "perfectionist_triage_complete", {
        tool_slug: "perfectionist-inbox-triage-lab",
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
      var shareUrl = "https://dopabrain.com/portal/tools/perfectionist-inbox-triage-lab.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "perfectionist-inbox-triage-lab",
        filename: 'dopabrain-perfectionist-inbox-triage-lab-card.png',
        badge: "PERFECTIONISM RELIEF • GOOD-ENOUGH TRIAGE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
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
