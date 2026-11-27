/* 45-Minute Evening Wind-Down & Melatonin Buffer
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "45-Minute Evening Wind-Down & Melatonin Buffer | DopaBrain",
    "metaDesc": "Going straight from bright laptop screens or intense chats into bed—and wondering why your brain stays wired for 90 minutes? Build a gentle 45-minute 3-stage landing buffer locally.",
    "kicker": "SLEEP HYGIENE • 45-MINUTE EVENING WIND-DOWN BUFFER",
    "heroTitle": "45-Minute Evening Wind-Down & Melatonin Buffer",
    "heroLead": "Going straight from bright laptop screens or intense chats into bed—and wondering why your brain stays wired for 90 minutes? Build a gentle 45-minute 3-stage landing buffer locally.",
    "chip1": "5 Bedtime Brakes",
    "chip2": "45-Min 3-Stage Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PRE-BED AROUSAL HABITS (1 = CALM, 5 = WIRED)",
    "step1Title": "What keeps your brain running in fifth gear right up to lights-out?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My target lights-out time & favorite low-screen wind-down cue (100% local):",
    "ctaBtn": "Build My 45-Minute Wind-Down Buffer",
    "resultBadge": "STEP 2 • YOUR 45-MINUTE SLEEP LANDING RUNWAY",
    "noteTitle": "My Target Wind-Down Cue",
    "meterLabel": "Sleep-Onset Readiness",
    "scriptTitle": "Evening Brake Mantra",
    "stepsTitle": "The 15-15-15 Evening Downshift Sequence",
    "stickyTitle": "Pair your final 15 minutes with calm rain or brown noise?",
    "stickySub": "Open the free Sleep Soundscape Player",
    "stickyBtn": "Play Sleep Sound →",
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
    "title": "취침 45분 전 3단계 저녁 다운시프트 & 멜라토닌 버퍼 설계기 | DopaBrain",
    "metaDesc": "밝은 모니터·카톡에서 침대로 직행했다가 90분씩 잠 못 들고 뒤척이나요? 15분 정리·15분 조명/체온 다운·15분 아날로그 휴식의 45분 착륙 버퍼를 설계하세요.",
    "kicker": "수면 위생 · 취침 45분 전 3단계 저녁 다운시프트 버퍼",
    "heroTitle": "취침 45분 전 3단계 저녁 다운시프트 & 멜라토닌 버퍼 설계기",
    "heroLead": "밝은 모니터·카톡에서 침대로 직행했다가 90분씩 잠 못 들고 뒤척이나요? 15분 정리·15분 조명/체온 다운·15분 아날로그 휴식의 45분 착륙 버퍼를 설계하세요.",
    "chip1": "5가지 수면 브레이크",
    "chip2": "45분 3단계 착륙",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 취침 1시간 전 각성 습관 점검 (1 = 차분, 5 = 각성 심함)",
    "step1Title": "불 끄기 직전까지 뇌를 5단 기어로 돌게 만드는 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 목표 소등 시각과 좋아하는 아날로그 휴식 1가지 (100% 로컬):",
    "ctaBtn": "내 45분 저녁 착륙 버퍼 플랜 보기",
    "resultBadge": "2단계 • 45분 수면 착륙 활주로 프로토콜",
    "noteTitle": "내 저녁 다운시프트 시작 앵커",
    "meterLabel": "입면 준비도",
    "scriptTitle": "저녁 각성 스위치를 내리는 한 줄 앵커",
    "stepsTitle": "뇌를 5단에서 1단으로 내리는 15-15-15 순서",
    "stickyTitle": "마지막 15분 착륙 구간에 잔잔한 빗소리·브라운 노이즈를 더해 볼까요?",
    "stickySub": "무료 수면 화이트·브라운 노이즈 열기",
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
    "title": "睡前45分钟三阶段放松缓冲器 | DopaBrain",
    "heroTitle": "睡前45分钟三阶段放松缓冲器",
    "heroLead": "用15-15-15调暗灯光、温水降温与无屏放松，平稳过渡到深睡。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "就寝45分前・3段階イブニング着陸バッファ | DopaBrain",
    "heroTitle": "就寝45分前・3段階イブニング着陸バッファ",
    "heroLead": "画面から布団へ直行する覚醒習慣を15-15-15の減光・入浴・アナログ休息へ整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Buffer Nocturno de 45 Minutos para Dormir Mejor | DopaBrain",
    "heroTitle": "Buffer Nocturno de 45 Minutos para Dormir Mejor",
    "heroLead": "Desacelera con la secuencia 15-15-15 de luz tenue, ducha tibia y pausa sin pantallas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Buffer Noturno de 45 Minutos para Desacelerar | DopaBrain",
    "heroTitle": "Buffer Noturno de 45 Minutos para Desacelerar",
    "heroLead": "Troque telas intensas por um pouso suave 15-15-15 de luz baixa e banho morno.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "45-Minuten Abend-Wind-Down-Puffer | DopaBrain",
    "heroTitle": "45-Minuten Abend-Wind-Down-Puffer",
    "heroLead": "Komm mit dem 15-15-15-Plan aus Lichtdimmung, Wärme und analoger Ruhe sanft zur Ruhe.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Sas de Décompression du Soir 45 Minutes | DopaBrain",
    "heroTitle": "Sas de Décompression du Soir 45 Minutes",
    "heroLead": "Passez des écrans au sommeil grâce au sas 15-15-15 lumière douce, douche tiède et lecture.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "45-минутный вечерний буфер перед сном | DopaBrain",
    "heroTitle": "45-минутный вечерний буфер перед сном",
    "heroLead": "Мягкий переход от экранов ко сну по схеме 15-15-15: свет, тепло и аналоговый отдых.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "45-मिनट शाम वाइंड-डाउन स्लीप बफर | DopaBrain",
    "heroTitle": "45-मिनट शाम वाइंड-डाउन स्लीप बफर",
    "heroLead": "15-15-15 धीमी रोशनी, गुनगुने स्नान और शांत विश्राम से गहरी नींद की तैयारी करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Buffer Santai Malam 45 Menit Sebelum Tidur | DopaBrain",
    "heroTitle": "Buffer Santai Malam 45 Menit Sebelum Tidur",
    "heroLead": "Transisi mulus dari layar ke tidur nyenyak dengan urutan 15-15-15 cahaya redup & analog.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "45 Dakikalık Akşam Sakinleşme Tamponu | DopaBrain",
    "heroTitle": "45 Dakikalık Akşam Sakinleşme Tamponu",
    "heroLead": "15-15-15 loş ışık, ılık duş ve ekransız geçiş planıyla uykuya yumuşak inin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "overhead_bright_light",
    "en": "Overhead White LEDs — Keeping bright ceiling lights on until the exact second I get into bed",
    "ko": "밝은 천장 조명 — 침대 눕기 1분 전까지 대낮 같은 형광등·LED를 켜 둠"
  },
  {
    "id": "late_work_chat",
    "en": "Late Work/News Input — Reading emails, debates, or intense news inside the final 60 minutes",
    "ko": "심야 업무·뉴스 자극 — 자기 전 1시간 안에 업무 메일이나 자극적 뉴스를 봄"
  },
  {
    "id": "zero_runway",
    "en": "Zero Landing Buffer — Expecting my brain to switch from 100 mph to asleep in 3 minutes",
    "ko": "착륙 활주로 없음 — 100km로 달리다 불 끄면 3분 만에 잠들길 기대함"
  },
  {
    "id": "warm_stuffy_room",
    "en": "Warm Bedroom / Late Heavy Meal — Skipping the core body temperature drop that signals sleep",
    "ko": "체온 하강 방해 — 더운 실내나 늦은 야식으로 심부 체온 하강을 막음"
  },
  {
    "id": "inconsistent_cue",
    "en": "No Repeating Cue — Doing something totally different every night so the brain lacks a sleep trigger",
    "ko": "고정 수면 신호 부재 — 매일 취침 패턴이 제각각이라 뇌가 잠들 타이밍을 모름"
  }
];
  var TIERS = {
  "low": {
    "enT": "Wired at Bedtime — Run the 15-15-15 Runway (Dim + Shower + Analog 15 Min)",
    "koT": "취침 직전 과각성 — 15분 정리 · 15분 조도/온수 샤워 · 15분 아날로그 착륙을 고정하세요",
    "enD": "Sleep neuroscience (Walker; Haghayegh et al.) shows dimming overhead light 45–60 minutes before bed plus a warm shower (which triggers a post-shower core temperature drop) cuts sleep-onset latency significantly.",
    "koD": "수면 신경과학 연구에 따르면 취침 45~60분 전 간접 조명 전환과 따뜻한 샤워(샤워 후 심부 체온 하강 유도)가 멜라토닌 분비와 입면 속도를 뚜렷하게 높여 줍니다.",
    "enS": "\"Brains don’t have an off switch—they have a 45-minute dimmer switch.\"",
    "koS": "\"뇌에는 즉시 꺼지는 스위치가 아니라 45분짜리 조도 조절기(디머)가 있다.\"",
    "enL": [
      "Min 0–15 (Close Day): Set tomorrow’s clothes/list, plug phone outside reach, switch off ceiling LEDs.",
      "Min 15–30 (Body Drop): Warm shower or warm washcloth + cool bedroom (~18–20°C / 65–68°F).",
      "Min 30–45 (Analog Glide): Low-stakes paper book, light stretching, or calm rain audio until eyelids feel heavy."
    ],
    "koL": [
      "0~15분(하루 닫기): 내일 준비·할 일 3줄 정리 후 폰 충전기를 침대 밖으로 두고 천장등 소등.",
      "15~30분(체온 하강): 따뜻한 샤워나 족욕으로 혈관을 넓힌 뒤 침실을 서늘하게 유지.",
      "30~45분(아날로그 착륙): 종이책·가벼운 스트레칭·빗소리로 눈꺼풀이 무거워질 때 눕기."
    ]
  },
  "mid": {
    "enT": "Almost Smooth — Dim Lights 30 Min Earlier & Park Work/News Feeds",
    "koT": "거의 안정적 — 간접 조명 30분 앞당기기와 심야 뉴스·업무 차단만 더하면 완벽합니다",
    "enD": "You already have decent sleep instincts; dimming overhead lights is the easiest high-impact lever.",
    "koD": "기본 수면 리듬이 좋습니다. 천장등을 30분만 일찍 끄고 간접등으로 바꿔도 입면이 훨씬 부드러워집니다.",
    "enS": "\"Warm lamp on, screens parked, quiet mind.\"",
    "koS": "\"따뜻한 스탠드 켜기, 화면 내려놓기, 고요한 마무리.\"",
    "enL": [
      "Set an automatic 10 PM \"dim lights\" reminder.",
      "Swap exciting thrillers/news for calm familiar audio or fiction.",
      "Keep the same 2-step cue every night to train sleepiness."
    ],
    "koL": [
      "매일 취침 45분 전 \"간접등 전환\" 자동 알림을 걸어 두세요.",
      "자극적인 뉴스·스릴러 대신 익숙한 오디오나 잔잔한 책으로 바꾸세요.",
      "매일 같은 2단계 신호를 반복해 뇌에 수면 조건반사를 만드세요."
    ]
  },
  "high": {
    "enT": "Restorative Evening Rhythm — Smooth Melatonin Glide Into Sleep",
    "koT": "이상적인 저녁 리듬 — 부드러운 멜라토닌 착륙을 잘 지키고 있습니다",
    "enD": "Your pre-sleep buffer protects deep sleep quality night after night.",
    "koD": "취침 전 착륙 버퍼가 깊은 수면의 질을 안정적으로 지켜 주고 있습니다.",
    "enS": "\"Protecting my last 45 minutes protects all of tomorrow.\"",
    "koS": "\"하루의 마지막 45분을 지키는 것이 내일 하루 전체를 지킨다.\"",
    "enL": [
      "Keep preserving your dim-light final hour.",
      "Enjoy unhurried screen-free evenings.",
      "Keep wake-up time steady for effortless sleep pressure."
    ],
    "koL": [
      "어두운 조명 마지막 1시간 습관을 계속 유지하세요.",
      "화면 없는 여유로운 저녁 시간을 즐기세요.",
      "기상 시각을 일정하게 유지해 자연스러운 수면압을 지키세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_evening_winddown_timer_v1";
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
      window.gtag('event', "evening_winddown_timer_complete", {
        tool_slug: "shift-end-evening-winddown-timer",
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
      var shareUrl = "https://dopabrain.com/portal/tools/shift-end-evening-winddown-timer.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "shift-end-evening-winddown-timer",
        filename: 'dopabrain-shift-end-evening-winddown-timer-card.png',
        badge: "SLEEP HYGIENE • 45-MINUTE EVENING WIND-DOWN BUFFER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
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
