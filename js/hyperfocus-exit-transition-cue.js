/* ADHD Hyperfocus Exit & Smooth Transition Cue
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "ADHD Hyperfocus Exit & Smooth Transition Cue | DopaBrain",
    "metaDesc": "Locked into one rabbit hole for 4 hours—forgetting water, lunch, and bedtime—because stopping feels physically painful? Build a gentle 3-step breadcrumb exit ramp locally.",
    "kicker": "ADHD & NEURO-FOCUS • HYPERFOCUS EXIT & TASK-SWITCH CUE",
    "heroTitle": "ADHD Hyperfocus Exit & Smooth Transition Cue",
    "heroLead": "Locked into one rabbit hole for 4 hours—forgetting water, lunch, and bedtime—because stopping feels physically painful? Build a gentle 3-step breadcrumb exit ramp locally.",
    "chip1": "5 Lock-In Traps",
    "chip2": "3-Step Exit Ramp",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR HYPERFOCUS LOCK-IN SIGNALS (1 = FLEXIBLE, 5 = STUCK)",
    "step1Title": "What makes stepping away from intense focus hardest?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My 1-line \"breadcrumb note\" so my brain trusts it can resume tomorrow (100% local):",
    "ctaBtn": "Build My Gentle Hyperfocus Exit Ramp",
    "resultBadge": "STEP 2 • YOUR PAIN-FREE HYPERFOCUS EXIT PROTOCOL",
    "noteTitle": "My Resume Breadcrumb Anchor",
    "meterLabel": "Transition Flexibility",
    "scriptTitle": "Gentle Transition Bridge Line",
    "stepsTitle": "3-Step Breadcrumb Ramp Out of Deep Hyperfocus",
    "stickyTitle": "Curious how your dopamine reward rhythm drives focus spikes?",
    "stickySub": "Take the free Dopamine Type Test next",
    "stickyBtn": "Dopamine Type →",
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
    "title": "ADHD 과몰입(하이퍼포커스) 부드러운 종료·전환 큐 설계기 | DopaBrain",
    "metaDesc": "한 가지에 4시간째 과몰입해 물·식사·취침까지 놓치면서도 멈추기가 고통스럽게 느껴지나요? 작업 맥락을 안전하게 저장하고 부드럽게 빠져나오는 3단계 전환 램프를 설계하세요.",
    "kicker": "ADHD 집중 전환 · 과몰입(하이퍼포커스) 부드러운 탈출 큐",
    "heroTitle": "ADHD 과몰입(하이퍼포커스) 부드러운 종료·전환 큐 설계기",
    "heroLead": "한 가지에 4시간째 과몰입해 물·식사·취침까지 놓치면서도 멈추기가 고통스럽게 느껴지나요? 작업 맥락을 안전하게 저장하고 부드럽게 빠져나오는 3단계 전환 램프를 설계하세요.",
    "chip1": "5가지 과몰입 함정",
    "chip2": "3단계 전환 램프",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 과몰입·작업 전환 어려움 점검 (1 = 유연, 5 = 멈추기 힘듦)",
    "step1Title": "몰입하던 작업에서 빠져나오기 가장 어렵게 만드는 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 내일 바로 이어갈 수 있게 남길 1줄 \"작업 맥락 메모\" (100% 로컬):",
    "ctaBtn": "내 부드러운 과몰입 종료·전환 램프 보기",
    "resultBadge": "2단계 • 자극 충돌 없는 과몰입 종료 프로토콜",
    "noteTitle": "내일 바로 이어갈 1줄 맥락 메모",
    "meterLabel": "작업 전환 유연성",
    "scriptTitle": "과몰입에서 몸을 부드럽게 떼어내는 전환 문구",
    "stepsTitle": "뇌 저항 없이 과몰입에서 나오는 3단계",
    "stickyTitle": "내 도파민 보상 리듬과 과몰입 패턴을 2분 테스트로 확인해 볼까요?",
    "stickySub": "무료 2분 도파민 유형 테스트 바로가기",
    "stickyBtn": "도파민 유형 →",
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
    "title": "ADHD过度专注温和退出与切换提示器 | DopaBrain",
    "heroTitle": "ADHD过度专注温和退出与切换提示器",
    "heroLead": "用1行断点备忘和5分钟着陆缓冲，轻松走出停不下来的过度专注。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "ADHD過集中（ハイパーフォーカス）穏やか終了キュー | DopaBrain",
    "heroTitle": "ADHD過集中（ハイパーフォーカス）穏やか終了キュー",
    "heroLead": "止まれない過集中を1行の引き継ぎメモと5分着陸ランプで優しく切り替えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Guía de Salida Suave del Hiperfoco TDAH | DopaBrain",
    "heroTitle": "Guía de Salida Suave del Hiperfoco TDAH",
    "heroLead": "Sal del hiperfoco sin fricción usando una nota puente de 1 línea y rampa de 5 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Guia de Saída Suave do Hiperfoco TDAH | DopaBrain",
    "heroTitle": "Guia de Saída Suave do Hiperfoco TDAH",
    "heroLead": "Saia do hiperfoco com tranquilidade usando uma nota de retomada e aviso de 5 min.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "ADHS-Hyperfokus Sanfter Ausstiegs-Planer | DopaBrain",
    "heroTitle": "ADHS-Hyperfokus Sanfter Ausstiegs-Planer",
    "heroLead": "Beende tiefen Hyperfokus entspannt mit 1-Zeilen-Lesezeichen und 5-Min-Landerampe.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Rampe de Sortie Douce d’Hyperfocus TDAH | DopaBrain",
    "heroTitle": "Rampe de Sortie Douce d’Hyperfocus TDAH",
    "heroLead": "Sortez de l’hyperfocus sans tension grâce au mémo reprise 1 ligne et palier 5 min.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Мягкий выход из гиперфокуса СДВГ | DopaBrain",
    "heroTitle": "Мягкий выход из гиперфокуса СДВГ",
    "heroLead": "Выходите из глубокого гиперфокуса без стресса с 1-строчной закладкой и 5-мин буфером.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "ADHD हाइपरफोकस सौम्य निकास क्यू | DopaBrain",
    "heroTitle": "ADHD हाइपरफोकस सौम्य निकास क्यू",
    "heroLead": "1-लाइन बुकमार्क और 5-मिनट रैंप के साथ हाइपरफोकस से सहजता से बाहर निकलें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Panduan Keluar Lembut dari Hiperfokus ADHD | DopaBrain",
    "heroTitle": "Panduan Keluar Lembut dari Hiperfokus ADHD",
    "heroLead": "Keluar mulus dari hiperfokus dengan catatan 1 baris dan transisi 5 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "DEHB Hiperodak Yumuşak Çıkış ve Geçiş Planı | DopaBrain",
    "heroTitle": "DEHB Hiperodak Yumuşak Çıkış ve Geçiş Planı",
    "heroLead": "1 satırlık devam notu ve 5 dakikalık iniş rampasıyla hiperodaktan rahatça çıkın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "fear_losing_thread",
    "en": "Fear of Losing Mental Thread — Refusing to stop because \"if I pause I’ll forget everything\"",
    "ko": "흐름 증발 공포 — \"지금 멈추면 머릿속 구상이 다 날아갈 것 같아\" 못 끊음"
  },
  {
    "id": "body_signal_blind",
    "en": "Body-Cue Blindness — Missing hunger, thirst, posture ache, and bathroom cues for hours",
    "ko": "신체 신호 차단 — 배고픔·갈증·어깨 통증을 몇 시간째 알아차리지 못함"
  },
  {
    "id": "alarm_dismiss_reflex",
    "en": "Auto-Snoozing Alarms — Hitting dismiss on a timer without even looking up",
    "ko": "알람 자동 무시 — 타이머가 울려도 무의식적으로 끄고 계속함"
  },
  {
    "id": "late_night_spiral",
    "en": "Midnight Rabbit Hole — Starting a \"quick fix\" at 11:30 PM and looking up at 2:30 AM",
    "ko": "심야 과몰입 — 밤 11시 반에 잠깐 손대다가 새벽 2시 반을 넘김"
  },
  {
    "id": "abrupt_stop_irritation",
    "en": "Abrupt Interruption Spike — Feeling sudden sharp frustration when pulled out cold",
    "ko": "급정지 짜증 — 갑자기 중단해야 할 때 예민함·짜증이 확 치솟음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Deep Lock-In — Use a 5-Min Warning Chime + 1-Line Breadcrumb Note + Physical Cue",
    "koT": "강한 과몰입 잠김 — 5분 예고음 + 1줄 맥락 저장 + 물리적 이동(물 한 잔)을 연결하세요",
    "enD": "ADHD executive-function research shows brains cling to hyperfocus because switching costs feel steep and working memory fears losing its thread. Writing a 1-line \"next exact step\" bookmark lets your brain let go safely.",
    "koD": "ADHD 실행기능 연구에 따르면 뇌가 과몰입을 놓지 못하는 핵심 이유는 \"작업 기억이 날아갈까 봐\" 생기는 전환 비용 때문입니다. 다음 1스텝을 1줄로 저장하면 뇌가 안심하고 손을 놓습니다.",
    "enS": "\"My exact next step is safely written down—pausing now protects tomorrow’s energy, not breaks my flow.\"",
    "koS": "\"다음에 할 첫 스텝은 메모에 안전히 저장했다. 지금 멈추는 건 흐름을 깨는 게 아니라 내일 체력을 지키는 일이다.\"",
    "enL": [
      "Set a 2-stage exit cue: a gentle 5-minute \"write your breadcrumb\" chime before the hard stop.",
      "Write 1 concrete sentence of where to resume (\"Next: edit section 2\"), then close the lid/tab.",
      "Pair exit with a sensory bridge: stand up, drink a full glass of water, and play 1 transition song."
    ],
    "koL": [
      "종료 5분 전 \"맥락 메모 쓰기\" 예고 알람과 실제 종료 알람 2단계를 두세요.",
      "내일 이어할 첫 문장 1줄(\"다음: 2번 항목 수정\")을 적은 뒤 화면을 닫으세요.",
      "일어서서 물 한 컵 마시기·전환 음악 1곡 틀기 같은 신체 전환 신호를 붙이세요."
    ]
  },
  "mid": {
    "enT": "Moderate Stickiness — Add a Visible Water Bottle & 5-Min Exit Bookmark",
    "koT": "중간 전환 마찰 — 5분 전 북마크 메모와 물리적 휴식 큐만 더하면 부드러워집니다",
    "enD": "Your focus is a genuine superpower; adding a 5-minute landing runway keeps it sustainable.",
    "koD": "깊은 집중력은 큰 강점입니다. 5분 착륙 활주로만 붙이면 탈진 없이 오래 유지할 수 있습니다.",
    "enS": "\"Write the breadcrumb, drink water, step away smoothly.\"",
    "koS": "\"맥락 1줄 저장, 물 한 잔, 부드러운 착륙.\"",
    "enL": [
      "Place water within reach and stand every 90 minutes.",
      "Avoid opening new rabbit-hole tabs after 10 PM.",
      "Tell loved ones you need a 5-minute landing cue before switching."
    ],
    "koL": [
      "90분마다 자리에서 일어나 물 한 잔 마시는 앵커를 두세요.",
      "밤 10시 이후에는 새로운 탐구 탭을 열지 않는 경계를 두세요.",
      "가족·동료에게 전환 5분 전 미리 알려 달라고 부탁해 두세요."
    ]
  },
  "high": {
    "enT": "Balanced Deep Focus — Strong Flow With Healthy Exit Ramps",
    "koT": "균형 잡힌 딥포커스 — 몰입과 휴식 전환을 건강하게 조절 중입니다",
    "enD": "You harness intense concentration while still honoring body cues and rest.",
    "koD": "깊은 몰입의 장점을 누리면서도 신체 신호와 전환 리듬을 잘 지키고 있습니다.",
    "enS": "\"Deep focus shines brightest when paired with gentle recovery.\"",
    "koS": "\"깊은 몰입은 부드러운 회복과 짝을 이룰 때 가장 오래 빛난다.\"",
    "enL": [
      "Keep using breadcrumb notes at the end of creative sprints.",
      "Protect evening wind-down times.",
      "Enjoy guilt-free rest after focused blocks."
    ],
    "koL": [
      "집중 세션 끝에 1줄 맥락 남기기 습관을 유지하세요.",
      "저녁 마무리 시간 경계를 계속 지켜 주세요.",
      "몰입 뒤에는 죄책감 없이 온전히 쉬세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_hyperfocus_exit_v1";
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
      window.gtag('event', "hyperfocus_exit_cue_complete", {
        tool_slug: "hyperfocus-exit-transition-cue",
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
      var shareUrl = "https://dopabrain.com/portal/tools/hyperfocus-exit-transition-cue.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "hyperfocus-exit-transition-cue",
        filename: 'dopabrain-hyperfocus-exit-transition-cue-card.png',
        badge: "ADHD & NEURO-FOCUS • HYPERFOCUS EXIT & TASK-SWITCH CUE",
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
