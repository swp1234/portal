/* Bedtime Racing-Mind Worry Shelf & 90-Second Offload
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Bedtime Racing-Mind Worry Shelf & 90-Second Offload | DopaBrain",
    "metaDesc": "Body exhausted yet your brain suddenly replays 2019 embarrassments and tomorrow’s bills the second your head hits the pillow? Park 1 worry locally and trigger cognitive-shuffle sleep cues.",
    "kicker": "NIGHT CALM • BEDTIME RACING-MIND WORRY SHELF & COGNITIVE SHUFFLE",
    "heroTitle": "Bedtime Racing-Mind Worry Shelf & 90-Second Offload",
    "heroLead": "Body exhausted yet your brain suddenly replays 2019 embarrassments and tomorrow’s bills the second your head hits the pillow? Park 1 worry locally and trigger cognitive-shuffle sleep cues.",
    "chip1": "5 Night Loops",
    "chip2": "Cognitive Shuffle",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PILLOW-TIME RACING PATTERNS (1 = QUIET, 5 = LOUD)",
    "step1Title": "What flips your brain \"ON\" the moment lights go out?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Park ONE loud thought onto tomorrow’s 10 AM Worry Shelf (100% local, never uploaded):",
    "ctaBtn": "Park Thought & Start 90-Second Sleep Shuffle",
    "resultBadge": "STEP 2 • YOUR BEDTIME COGNITIVE-SHUFFLE SLEEP PROTOCOL",
    "noteTitle": "Safely Parked Until Tomorrow 10 AM",
    "meterLabel": "Bedtime Mind Quiet",
    "scriptTitle": "Cognitive Shuffle Sleep Prompt (Luc Beaudoin Method)",
    "stepsTitle": "3 Gentle Tricks That Quiet a Racing Pillow Brain",
    "stickyTitle": "Give your ears one soft, predictable sound anchor while drifting off.",
    "stickySub": "Open Free White Noise & Rain Player",
    "stickyBtn": "Play Night Sound →",
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
    "title": "잠들기 전 꼬리무는 잡생각 선반 & 90초 인지 셔플 | DopaBrain",
    "metaDesc": "몸은 천근만근인데 베개에만 누우면 옛날 실수와 내일 걱정이 쏟아지나요? 머릿속 1가지 걱정을 \"내일 선반\"에 잠시 올려두고 90초 인지 셔플로 수면 스위치를 켜세요.",
    "kicker": "취침 마인드 오프로드 · 잠들기 전 잡생각 선반 & 90초 인지 셔플",
    "heroTitle": "잠들기 전 꼬리무는 잡생각 선반 & 90초 인지 셔플",
    "heroLead": "몸은 천근만근인데 베개에만 누우면 옛날 실수와 내일 걱정이 쏟아지나요? 머릿속 1가지 걱정을 \"내일 선반\"에 잠시 올려두고 90초 인지 셔플로 수면 스위치를 켜세요.",
    "chip1": "5가지 밤 잡생각",
    "chip2": "90초 인지 셔플",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 취침 직전 잡생각·과각성 패턴 점검 (1 = 고요, 5 = 시끄러움)",
    "step1Title": "불을 끄자마자 머릿속 스위치를 켜 버리는 주된 생각은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 지금 제일 시끄러운 생각 1가지를 \"내일 오전 10시 선반\"에 올려두기 (100% 로컬):",
    "ctaBtn": "걱정 올려두고 90초 수면 셔플 보기",
    "resultBadge": "2단계 • 잡생각을 잠재우는 취침 인지 셔플 프로토콜",
    "noteTitle": "내일 오전 10시 선반에 안전 보관됨",
    "meterLabel": "취침 마인드 고요 지수",
    "scriptTitle": "뇌에 \"이제 자도 안전해\" 신호를 보내는 인지 셔플 방법",
    "stepsTitle": "베개 위 폭주하는 생각을 부드럽게 멈추는 3단계",
    "stickyTitle": "잠들기 직전 귀에 잔잔한 빗소리·파도 소리를 배경으로 깔아 보세요.",
    "stickySub": "무료 백색소음·빗소리 플레이어 열기",
    "stickyBtn": "수면 사운드 켜기 →",
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
    "title": "睡前思绪寄存架与90秒认知洗牌助眠器 | DopaBrain",
    "heroTitle": "睡前思绪寄存架与90秒认知洗牌助眠器",
    "heroLead": "把深夜胡思乱想暂存到明天上午10点，用认知洗牌法快速安静入睡。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "就寝前の思考棚＆90秒認知シャッフル安眠ツール | DopaBrain",
    "heroTitle": "就寝前の思考棚＆90秒認知シャッフル安眠ツール",
    "heroLead": "枕元のぐるぐる思考を明日10時の棚に預け、認知シャッフルで穏やかに入眠します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Estante de Preocupaciones Nocturnas y Cognitive Shuffle | DopaBrain",
    "heroTitle": "Estante de Preocupaciones Nocturnas y Cognitive Shuffle",
    "heroLead": "Aparca los pensamientos acelerados para mañana y activa el sueño con imágenes neutras.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Prateleira de Preocupações Noturnas e Embaralhamento Cognitivo | DopaBrain",
    "heroTitle": "Prateleira de Preocupações Noturnas e Embaralhamento Cognitivo",
    "heroLead": "Estacione pensamentos acelerados para amanhã e acalme a mente antes de dormir.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Gedanken-Ablage vorm Schlafen & Cognitive Shuffle | DopaBrain",
    "heroTitle": "Gedanken-Ablage vorm Schlafen & Cognitive Shuffle",
    "heroLead": "Parke nächtliches Grübeln für morgen 10 Uhr und aktiviere ruhiges Einschlafen.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Étagère à Soucis du Soir & Cognitive Shuffle Sommeil | DopaBrain",
    "heroTitle": "Étagère à Soucis du Soir & Cognitive Shuffle Sommeil",
    "heroLead": "Déposez vos pensées nocturnes pour demain 10h et apaisez votre mental en 90 secondes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Полка тревог перед сном и 90-секундный когнитивный шаффл | DopaBrain",
    "heroTitle": "Полка тревог перед сном и 90-секундный когнитивный шаффл",
    "heroLead": "Отложите ночные мысли до завтра на 10 утра и мягко переключите мозг в сон.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सोने से पहले चिंता शेल्फ़ और 90-सेकंड कॉग्निटिव शफ़ल | DopaBrain",
    "heroTitle": "सोने से पहले चिंता शेल्फ़ और 90-सेकंड कॉग्निटिव शफ़ल",
    "heroLead": "तेज़ रात के विचारों को कल सुबह 10 बजे पर पार्क करें और शांत नींद पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Rak Pikiran Sebelum Tidur & Cognitive Shuffle 90 Detik | DopaBrain",
    "heroTitle": "Rak Pikiran Sebelum Tidur & Cognitive Shuffle 90 Detik",
    "heroLead": "Parkir pikiran ramai ke besok pagi dan aktifkan kantuk alami dengan teknik visual acak.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Uyku Öncesi Düşünce Rafı ve 90 Saniye Bilişsel Karıştırma | DopaBrain",
    "heroTitle": "Uyku Öncesi Düşünce Rafı ve 90 Saniye Bilişsel Karıştırma",
    "heroLead": "Yastıkta hızlanan düşünceleri yarına park edip bilişsel karıştırma ile uykuya geçin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "unprocessed_day_backlog",
    "en": "First Quiet Moment All Day — Zero daytime pauses so all emotions arrive at 11:30 PM",
    "ko": "하루 첫 정적 폭발 — 낮에 쉴 틈이 없어 미뤄 둔 생각들이 밤 11시 반에 한꺼번에 몰려옴"
  },
  {
    "id": "cringe_memory_reel",
    "en": "Midnight Cringe Replay — Reliving awkward conversations from years ago in HD detail",
    "ko": "이불킥 기억 재생 — 몇 년 전 민망했던 말실수가 고화질로 갑자기 떠오름"
  },
  {
    "id": "problem_solving_in_bed",
    "en": "Bedtime Problem-Solving — Trying to fix complex finances or career dilemmas at 1 AM",
    "ko": "새벽 1시 문제 해결 시도 — 피곤한 뇌로 복잡한 인생·돈 문제를 침대에서 풀려 함"
  },
  {
    "id": "phone_distraction_loop",
    "en": "Bright-Screen Escape — Grabbing your phone to drown thoughts, spiking alertness further",
    "ko": "스마트폰 도피 — 생각을 덮으려 폰을 켰다가 블루라이트·도파민으로 더 깸"
  },
  {
    "id": "frustration_trying_hard",
    "en": "Trying Too Hard to Blank Out — Getting angry at thoughts, which pumps adrenaline",
    "ko": "잡생각 억누르기 — \"생각하지 마!\" 하고 애쓸수록 오히려 각성이 높아짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "Loud Racing Mind — Park It on the 10 AM Shelf & Run a 90-Second \"Random Word\" Cognitive Shuffle",
    "koT": "취침 잡생각 높음 — 내일 10시 선반에 주차하고 \"임의 단어 시각화\" 인지 셔플을 실행하세요",
    "enD": "Cognitive scientist Luc Beaudoin showed that logical problem-solving tells your brain \"stay alert!\", whereas picturing harmless, disconnected images (Cognitive Shuffle) mimics natural micro-dreaming and signals the brain it is safe to fall asleep.",
    "koD": "인지과학자 뤽 보두앵(Luc Beaudoin)의 연구에 따르면 논리적 고민은 뇌를 깨우지만, 서로 무관하고 평온한 사물을 떠올리는 \"인지 셔플\"은 자연스러운 입면 꿈 상태를 모방해 뇌에 수면 허가 신호를 보냅니다.",
    "enS": "\"Pick a neutral word like B-E-D-T-I-M-E → Picture 3 cozy objects starting with B (bear, bread, boat), then E (elephant, envelope)... let images drift without effort.\"",
    "koS": "\"마음속으로 가·나·다 순서로 평온한 사물 3개씩을 그림처럼 떠올려 보세요(가: 가방·가로등·가을 낙엽 → 나: 나무·나비·난로...). 논리 없이 흐르듯 넘깁니다.\"",
    "enL": [
      "Remind your brain gently: \"This thought is safely written on tomorrow’s 10 AM shelf—the night shift is off duty.\"",
      "Run the Cognitive Shuffle (random harmless visual images letter by letter) to occupy verbal worry channels.",
      "Keep lights off and phone out of reach—pair with steady rain or brown noise."
    ],
    "koL": [
      "뇌에게 부드럽게 말해 주세요: \"이 고민은 내일 오전 10시 선반에 잘 적어 두었어. 야간 당직은 퇴근!\"",
      "가·나·다(또는 알파벳) 순서로 무해한 사물을 하나씩 머릿속 그림으로 띄우는 인지 셔플로 걱정 회로를 비우세요.",
      "휴대폰은 손 닿지 않는 곳에 두고 잔잔한 빗소리·브라운 노이즈를 배경으로 깔아 보세요."
    ]
  },
  "mid": {
    "enT": "Occasional Pillow Chatter — Keep a Paper Pad Beside Bed & Try 60s Shuffle",
    "koT": "가끔 찾아오는 잡생각 — 침대 옆 종이 메모장과 60초 인지 셔플을 챙겨 두세요",
    "enD": "Writing one quick 5-word reminder in the dark stops your brain from repeating it all night.",
    "koD": "짧게 5단어만 종이에 적어 내려놓으면 뇌가 잊지 않으려 반복 재생하는 습관이 금방 멈춥니다.",
    "enS": "\"Write it once, picture something cozy, drift.\"",
    "koS": "\"한 번 적어 내려놓고, 포근한 이미지를 떠올리며 흘려보낸다.\"",
    "enL": [
      "Keep a pen and notepad (not phone) on your nightstand.",
      "Do a 3-minute brain offload at 9:30 PM before brushing teeth.",
      "Exhale softly through slightly parted lips 4 times."
    ],
    "koL": [
      "침대 옆엔 폰 대신 작은 메모지와 펜을 두세요.",
      "밤 9시 반 양치 전 3분만 머릿속 메모를 비워 두세요.",
      "입술을 살짝 벌리고 부드럽게 4번 길게 내쉬어 보세요."
    ]
  },
  "high": {
    "enT": "Peaceful Night Wind-Down — Calm Pre-Sleep Mind",
    "koT": "고요한 밤 전환 — 잠들기 전 마음이 아주 평온합니다",
    "enD": "Your mind transitions smoothly from daytime thinking into restorative sleep.",
    "koD": "낮의 생각에서 밤의 깊은 휴식으로 부드럽게 넘어가는 훌륭한 리듬을 갖추고 있습니다.",
    "enS": "\"Today is complete; tomorrow can wait for daylight.\"",
    "koS": "\"오늘 하루는 충분했다. 내일의 일은 아침 햇살에 맡긴다.\"",
    "enL": [
      "Keep protecting your pre-bed screen curfew.",
      "Maintain your evening brain-offload habit.",
      "Enjoy deep, uninterrupted rest."
    ],
    "koL": [
      "취침 전 화면 끄기 습관을 계속 지켜 나가세요.",
      "저녁 생각 정리 루틴을 유지하세요.",
      "깊고 개운한 숙면을 누리세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_worry_shelf_v1";
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
      window.gtag('event', "bedtime_worry_shelf_complete", {
        tool_slug: "racing-mind-bedtime-worry-shelf",
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
      var shareUrl = "https://dopabrain.com/portal/tools/racing-mind-bedtime-worry-shelf.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "racing-mind-bedtime-worry-shelf",
        filename: 'dopabrain-racing-mind-bedtime-worry-shelf-card.png',
        badge: "NIGHT CALM • BEDTIME RACING-MIND WORRY SHELF & COGNITIVE SHUFFLE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
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
