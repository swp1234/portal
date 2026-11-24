/* Pre-Sleep Racing Thoughts Brain-Dump Vault
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Pre-Sleep Racing Thoughts Brain-Dump Vault | DopaBrain",
    "metaDesc": "Head hits the pillow and your brain suddenly lists every awkward memory and tomorrow’s to-dos? Audit 5 bedtime thought loops locally and park them safely until morning.",
    "kicker": "NIGHTTIME MIND OFF-LOAD • 100% LOCAL VAULT",
    "heroTitle": "Pre-Sleep Racing Thoughts Brain-Dump Vault",
    "heroLead": "Head hits the pillow and your brain suddenly lists every awkward memory and tomorrow’s to-dos? Audit 5 bedtime thought loops locally and park them safely until morning.",
    "chip1": "5 Nighttime Loops",
    "chip2": "Morning Parking Vault",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • RATE TONIGHT’S MENTAL NOISE (1 = QUIET, 5 = RACING)",
    "step1Title": "What is keeping your mind spinning at bedtime tonight?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Park tomorrow’s #1 nagging thought here so your brain can let go tonight (100% local):",
    "ctaBtn": "Lock Thoughts Until Morning",
    "resultBadge": "STEP 2 • YOUR BEDTIME MIND OFF-LOAD COMPLETE",
    "noteTitle": "Safely Parked Until Tomorrow Morning",
    "meterLabel": "Bedtime Cognitive Quiet",
    "scriptTitle": "Nighttime Mental Closure Cue",
    "stepsTitle": "3 Gentle Wind-Down Steps After Locking Your Vault",
    "stickyTitle": "Want gentle ambient rain or brown noise to drift off?",
    "stickySub": "Open the free White Noise Soundscape Mixer next",
    "stickyBtn": "White Noise →",
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
    "title": "잠들기 전 꼬리 무는 생각 비우기 금고 | DopaBrain",
    "metaDesc": "베개에 머리만 대면 내일 할 일과 온갖 걱정이 몰려오나요? 5가지 취침 전 생각 루프를 비공개로 점검하고 내일 아침까지 안전하게 보관해 두세요.",
    "kicker": "취침 전 머릿속 비우기 · 100% 로컬 금고",
    "heroTitle": "잠들기 전 꼬리 무는 생각 비우기 금고",
    "heroLead": "베개에 머리만 대면 내일 할 일과 온갖 걱정이 몰려오나요? 5가지 취침 전 생각 루프를 비공개로 점검하고 내일 아침까지 안전하게 보관해 두세요.",
    "chip1": "5가지 야간 생각 루프",
    "chip2": "아침 보관 금고",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 오늘 밤 머릿속 소음 점검 (1 = 고요함, 5 = 복잡함)",
    "step1Title": "오늘 밤 잠들기 전 머릿속을 가장 바쁘게 돌리는 생각은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "오늘 밤 뇌가 붙잡고 있는 내일 걱정 1가지를 여기에 보관하세요 (100% 로컬):",
    "ctaBtn": "내일 아침까지 생각 안전 보관하기",
    "resultBadge": "2단계 • 취침 전 머릿속 비우기 완료",
    "noteTitle": "내일 아침까지 안전하게 맡겨둔 메모",
    "meterLabel": "취침 전 마음 고요 지수",
    "scriptTitle": "뇌에 하루 마감을 알리는 문장",
    "stepsTitle": "생각을 보관한 뒤 바로 이어가는 3단계 이완",
    "stickyTitle": "부드러운 빗소리나 브라운 노이즈로 편안히 잠들어 볼까요?",
    "stickySub": "무료 백색소음·자연 소리 믹서로 숙면 환경 만들기",
    "stickyBtn": "수면 사운드 →",
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
    "title": "睡前思绪清空与担忧寄存箱 | DopaBrain",
    "heroTitle": "睡前思绪清空与担忧寄存箱",
    "heroLead": "排查5大睡前胡思乱想循环，将明日待办与焦虑安全寄存至天亮。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "就寝前の思考デトックス・ブレインダンプ | DopaBrain",
    "heroTitle": "就寝前の思考デトックス・ブレインダンプ",
    "heroLead": "寝る前のぐるぐる思考5要因を整理し、翌朝まで安心して頭から手放します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Bóveda Nocturna para Vaciar la Mente | DopaBrain",
    "heroTitle": "Bóveda Nocturna para Vaciar la Mente",
    "heroLead": "Audita 5 bucles mentales nocturnos y guarda tus pendientes hasta la mañana.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Cofre Mental Pré-Sono para Esvaziar Ideias | DopaBrain",
    "heroTitle": "Cofre Mental Pré-Sono para Esvaziar Ideias",
    "heroLead": "Mapeie 5 ciclos de pensamentos noturnos e estacione preocupações até amanhã.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Gedanken-Tresor vor dem Einschlafen | DopaBrain",
    "heroTitle": "Gedanken-Tresor vor dem Einschlafen",
    "heroLead": "Prüfe 5 abendliche Grübelschleifen und parke offene To-dos sicher bis zum Morgen.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Coffre Vide-Tête Avant de Dormir | DopaBrain",
    "heroTitle": "Coffre Vide-Tête Avant de Dormir",
    "heroLead": "Identifiez 5 boucles mentales du soir et déposez vos soucis jusqu’au lendemain matin.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Хранилище мыслей перед сном | DopaBrain",
    "heroTitle": "Хранилище мыслей перед сном",
    "heroLead": "Проверьте 5 ночных мысленных петель и отложите завтрашние заботы до утра.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "प्री-स्लीप ब्रेन-डम्प वॉल्ट | DopaBrain",
    "heroTitle": "प्री-स्लीप ब्रेन-डम्प वॉल्ट",
    "heroLead": "सोने से पहले के 5 विचार लूप जांचें और कल की चिंताओं को सुबह तक सुरक्षित रखें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Brankas Curhat Pikiran Sebelum Tidur | DopaBrain",
    "heroTitle": "Brankas Curhat Pikiran Sebelum Tidur",
    "heroLead": "Audit 5 lingkaran pikiran malam dan simpan kekhawatiran besok secara privat hingga pagi.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Uyku Öncesi Zihin Boşaltma Kasası | DopaBrain",
    "heroTitle": "Uyku Öncesi Zihin Boşaltma Kasası",
    "heroLead": "5 gece düşünce döngüsünü kontrol edin ve yarının kaygılarını sabaha dek park edin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "tomorrow_tasks",
    "en": "Tomorrow’s To-Do Rehearsal — Repeating tasks in your head so you won’t forget",
    "ko": "내일 할 일 리허설 — 잊을까 봐 머릿속으로 계속 되뇌임"
  },
  {
    "id": "social_replay",
    "en": "Awkward Conversation Replay — Re-editing something you said earlier today",
    "ko": "대화 되감기 — 낮에 했던 말이나 표정을 반복해서 다시 편집함"
  },
  {
    "id": "clock_pressure",
    "en": "Sleep-Math Anxiety — Calculating \"If I fall asleep right now I get X hours...\"",
    "ko": "수면 시간 계산 불안 — \"지금 자면 몇 시간 자지?\" 시계를 계속 확인함"
  },
  {
    "id": "late_scrolling",
    "en": "Bedtime Screen Stimulation — Reading intense news or feeds right before lights out",
    "ko": "취침 직전 자극 스크롤 — 불 끄기 직전까지 뉴스·영상을 시청함"
  },
  {
    "id": "unresolved_worry",
    "en": "Open-Ended \"What If\" Loops — Trying to solve big life questions in the dark",
    "ko": "막연한 \"만약에\" 걱정 — 어둠 속에서 답 없는 큰 고민을 풀려 함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Racing Bedtime Mind — Offload to Paper & Switch to Cognitive Shuffling",
    "koT": "야간 생각 과열 상태 — 메모 보관 후 뇌를 쉬게 하는 인지 셔플로 전환하세요",
    "enD": "Research by Scullin et al. (2018) found spending 5 minutes writing a specific to-do list before bed measurably shortens sleep onset by ending mental rehearsal.",
    "koD": "스컬린(2018) 연구에 따르면 잠들기 전 내일 할 일을 구체적으로 적어 내려놓기만 해도 뇌의 반복 리허설이 멈춰 입면 시간이 뚜렷하게 단축됩니다.",
    "enS": "\"Every open loop is safely written down for tomorrow morning. Nothing needs to be solved in the dark tonight.\"",
    "koS": "\"모든 할 일과 걱정은 내일 아침을 위해 안전하게 적어두었어. 오늘 밤 어둠 속에서 해결해야 할 일은 아무것도 없어.\"",
    "enL": [
      "Turn your clock face away from view—checking the time spikes alertness hormones.",
      "Dim screens and try 60 seconds of slow 4-in / 6-out exhales to cue sleep readiness.",
      "Use gentle \"cognitive shuffling\": picture random neutral objects (apple, bench, cloud, lantern) to interrupt logical worry."
    ],
    "koL": [
      "시계나 스마트폰 시간을 보이지 않게 돌려두세요—시간 확인 자체가 각성을 부릅니다.",
      "화면을 끄고 4초 들숨 / 6초 날숨을 1분간 천천히 이어가세요.",
      "논리적 걱정을 끊기 위해 무관한 평온한 사물(사과, 구름, 나무, 등불)을 하나씩 떠올려 보세요."
    ]
  },
  "mid": {
    "enT": "Mild Bedtime Chatter — Close the Day With One Clear Shutdown Ritual",
    "koT": "가벼운 야간 잡념 — 짧은 하루 마감 의식으로 머리를 정리하세요",
    "enD": "Your mind just needs a clear \"closed for the night\" signal. Writing one next-morning step releases lingering alertness smoothly.",
    "koD": "뇌에 \"오늘 영업 종료\" 신호만 분명히 주면 금세 가라앉는 상태입니다. 내일 첫 행동 1줄을 적어두고 가볍게 하루를 닫으세요.",
    "enS": "\"Today is done; tomorrow’s first step is already waiting safely on my list.\"",
    "koS": "\"오늘은 충분히 끝났어. 내일의 첫걸음은 이미 메모에 안전하게 준비되어 있어.\"",
    "enL": [
      "Place your phone on charge across the room before climbing into bed.",
      "Pair low ambient sound or 5 pages of light paper reading to transition smoothly.",
      "Release shoulders and unclench your tongue from the roof of your mouth as you exhale."
    ],
    "koL": [
      "잠자리에 들기 전 스마트폰은 손이 닿지 않는 곳에서 충전하세요.",
      "은은한 자연 소리나 가벼운 종이책 몇 페이지로 자연스럽게 수면 모드로 넘어가세요.",
      "숨을 내쉬며 어깨와 턱, 혀끝의 긴장을 부드럽게 풀어주세요."
    ]
  },
  "high": {
    "enT": "Calm Pre-Sleep Mind — Enjoy Restorative Deep Rest",
    "koT": "고요한 취침 컨디션 — 편안하고 깊은 숙면을 누리세요",
    "enD": "Your cognitive wind-down is smooth and quiet tonight. Keep honoring this gentle transition between evening wrap-up and bed.",
    "koD": "마음이 아주 차분하게 정리된 밤입니다. 지금의 부드러운 취침 전환 리듬을 편안하게 즐기세요.",
    "enS": "\"My mind is quiet and ready for deep, effortless rest tonight.\"",
    "koS": "\"마음이 고요하게 정돈되어 오늘 밤 편안하고 깊은 휴식을 맞을 준비가 됐어.\"",
    "enL": [
      "Keep bedroom cool, dark, and quiet.",
      "Let sleep arrive naturally without forcing it.",
      "Wake tomorrow to your parked note only after your first sip of water."
    ],
    "koL": [
      "침실을 서늘하고 어둡고 조용하게 유지하세요.",
      "억지로 자려 애쓰지 말고 자연스럽게 잠이 오도록 맡기세요.",
      "내일 아침 물 한 잔을 마신 뒤 보관해 둔 메모를 가볍게 확인하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_presleep_vault_v1";
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
      window.gtag('event', "presleep_vault_complete", {
        tool_slug: "pre-sleep-brain-dump-vault",
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
      var shareUrl = "https://dopabrain.com/portal/tools/pre-sleep-brain-dump-vault.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "pre-sleep-brain-dump-vault",
        filename: 'dopabrain-pre-sleep-brain-dump-vault-card.png',
        badge: "NIGHTTIME MIND OFF-LOAD • 100% LOCAL VAULT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#818cf8",
        accent2: "#38bdf8"
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
