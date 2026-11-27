/* 3 AM Middle-of-Night Wakeup & Clock-Watching Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "3 AM Middle-of-Night Wakeup & Clock-Watching Reset | DopaBrain",
    "metaDesc": "Wide awake at 3:14 AM calculating how many hours remain before your alarm? Audit 5 nighttime wakefulness traps locally and build a calm CBT-I 3 AM return-to-sleep protocol.",
    "kicker": "CBT-I SLEEP SCIENCE • 3 AM MIDDLE-OF-NIGHT WAKEUP RESET",
    "heroTitle": "3 AM Middle-of-Night Wakeup & Clock-Watching Reset",
    "heroLead": "Wide awake at 3:14 AM calculating how many hours remain before your alarm? Audit 5 nighttime wakefulness traps locally and build a calm CBT-I 3 AM return-to-sleep protocol.",
    "chip1": "5 Wake Traps",
    "chip2": "CBT-I 3 AM Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR 3 AM WAKEUP HABITS (1 = RARE, 5 = EVERY NIGHT)",
    "step1Title": "What turns a brief normal wakeup into an hour of wide-awake frustration?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My boring, screen-free 3 AM reset anchor (book, audio, or cognitive shuffle — 100% local):",
    "ctaBtn": "Build My Calm 3 AM Return-to-Sleep Plan",
    "resultBadge": "STEP 2 • YOUR CBT-I 3 AM WAKEUP PROTOCOL",
    "noteTitle": "My Screen-Free 3 AM Plan",
    "meterLabel": "Nighttime Sleep Ease",
    "scriptTitle": "3 AM Calm Reassurance Cue",
    "stepsTitle": "3 CBT-I Moves That Take the Pressure Off 3 AM Wakeups",
    "stickyTitle": "Want steady low-volume rain or brown noise to mask 3 AM silence?",
    "stickySub": "Open the free Rain & Brown Noise Mixer",
    "stickyBtn": "Sleep Sounds →",
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
    "title": "새벽 3시 중도 각성 & 시계 계산 불안 진정 프로토콜 | DopaBrain",
    "metaDesc": "새벽 3시 14분에 눈이 번쩍 떠져 알람까지 남은 시간을 계산하며 괴로워하고 있나요? 5가지 야간 각성 악순환을 점검하고 CBT-I 기반 새벽 재입면 프로토콜을 준비하세요.",
    "kicker": "수면 인지행동 · 새벽 3시 중도 각성·시계 확인 멈춤 프로토콜",
    "heroTitle": "새벽 3시 중도 각성 & 시계 계산 불안 진정 프로토콜",
    "heroLead": "새벽 3시 14분에 눈이 번쩍 떠져 알람까지 남은 시간을 계산하며 괴로워하고 있나요? 5가지 야간 각성 악순환을 점검하고 CBT-I 기반 새벽 재입면 프로토콜을 준비하세요.",
    "chip1": "5가지 새벽 함정",
    "chip2": "CBT-I 재입면 플랜",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 새벽에 깼을 때의 습관 점검 (1 = 드묾, 5 = 자주 반복)",
    "step1Title": "잠깐 깬 상태를 1시간 넘게 말똥말똥한 각성으로 키워 버리는 행동은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 새벽에 깼을 때 폰 대신 쓸 지루한 저자극 수단 1가지 (100% 로컬):",
    "ctaBtn": "내 새벽 3시 재입면 프로토콜 보기",
    "resultBadge": "2단계 • CBT-I 새벽 3시 각성 진정 프로토콜",
    "noteTitle": "스마트폰 없는 새벽 3시 대처법",
    "meterLabel": "야간 재입면 평온도",
    "scriptTitle": "새벽 3시 나에게 건네는 안심 1줄",
    "stepsTitle": "새벽 각성 압박을 풀고 다시 잠들게 돕는 3단계",
    "stickyTitle": "새벽 적막과 잡생각을 부드럽게 덮어 줄 잔잔한 빗소리를 준비해 둘까요?",
    "stickySub": "무료 빗소리·브라운 노이즈 수면 믹서 열기",
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
    "title": "凌晨3点醒来与看表焦虑平静重置方案 | DopaBrain",
    "heroTitle": "凌晨3点醒来与看表焦虑平静重置方案",
    "heroLead": "运用CBT-I原则与认知洗牌法，打破半夜看表越算越清醒的循环。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "午前3時の中途覚醒・時計確認リセットプロトコル | DopaBrain",
    "heroTitle": "午前3時の中途覚醒・時計確認リセットプロトコル",
    "heroLead": "CBT-Iと認知シャッフル睡眠法で夜中の目覚め焦りを静めます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Protocolo de Calma para Despertares a las 3 AM | DopaBrain",
    "heroTitle": "Protocolo de Calma para Despertares a las 3 AM",
    "heroLead": "Deja de mirar el reloj con reglas CBT-I y barajado cognitivo de 2 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Protocolo de Calma para Acordar às 3 da Manhã | DopaBrain",
    "heroTitle": "Protocolo de Calma para Acordar às 3 da Manhã",
    "heroLead": "Pare de calcular horas no relógio com CBT-I e embaralhamento cognitivo.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "3-Uhr-Nachts-Aufwachen & Uhr-Check-Stopp-Reset | DopaBrain",
    "heroTitle": "3-Uhr-Nachts-Aufwachen & Uhr-Check-Stopp-Reset",
    "heroLead": "Beende nächtliches Grübeln mit CBT-I-Regeln und dem 2-Minuten Cognitive Shuffle.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Protocole Réveil 3h du Matin & Calme CBT-I | DopaBrain",
    "heroTitle": "Protocole Réveil 3h du Matin & Calme CBT-I",
    "heroLead": "Stoppez le calcul des heures grâce au cognitive shuffle et aux règles CBT-I.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Протокол спокойного возврата ко сну при пробуждении в 3 ночи | DopaBrain",
    "heroTitle": "Протокол спокойного возврата ко сну при пробуждении в 3 ночи",
    "heroLead": "Уберите тревожный подсчёт часов с помощью КПТ-И и когнитивного шаффла.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सुबह 3 बजे जागने और घड़ी देखने की चिंता का रीसेट | DopaBrain",
    "heroTitle": "सुबह 3 बजे जागने और घड़ी देखने की चिंता का रीसेट",
    "heroLead": "CBT-I और कॉग्निटिव शफ़ल तकनीक से आधी रात दोबारा शांत नींद पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Protokol Tenang Bangun Jam 3 Pagi & Stop Cek Jam | DopaBrain",
    "heroTitle": "Protokol Tenang Bangun Jam 3 Pagi & Stop Cek Jam",
    "heroLead": "Hentikan panik melihat jam dini hari dengan CBT-I dan teknik cognitive shuffle.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Gece 3 Uyanması ve Saate Bakma Kaygısı Sıfırlama | DopaBrain",
    "heroTitle": "Gece 3 Uyanması ve Saate Bakma Kaygısı Sıfırlama",
    "heroLead": "CBT-I kuralları ve bilişsel karıştırma ile gece uyanınca sakinleşip uyuyun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "clock_math_panic",
    "en": "Clock-Watching Math — Checking the phone clock and calculating \"only 3h 40m left!\"",
    "ko": "시계 계산 공포 — 폰 시계를 보고 \"알람까지 3시간 반밖에 안 남았어!\"라며 초조해함"
  },
  {
    "id": "blue_light_check",
    "en": "Quick Phone Peek — Opening news or messages \"until I feel sleepy again\"",
    "ko": "새벽 스마트폰 확인 — 다시 졸릴 때까지 뉴스나 피드를 켜서 눈을 밝힘"
  },
  {
    "id": "trying_too_hard",
    "en": "Forcing Sleep Effort — Tossing angrily trying to command yourself back to sleep",
    "ko": "억지 수면 압박 — \"빨리 자야 내일 망하지 않는데\"라며 뒤척이며 긴장함"
  },
  {
    "id": "three_am_problem_solving",
    "en": "3 AM Life Audits — Solving work or money problems while your rational prefrontal lobe is offline",
    "ko": "새벽 인생 고민 — 전전두엽이 잠든 새벽에 일·돈·관계 걱정을 풀려 함"
  },
  {
    "id": "late_alcohol_or_heat",
    "en": "Warm Room / Late Drink — Overheated bedroom or late alcohol fragmenting second-half sleep",
    "ko": "더운 방·야간 음주 — 침실 온도 상승이나 늦은 술이 새벽 수면을 끊어 놓음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High 3 AM Arousal Loop — Hide the Clock & Run the 2-Minute Cognitive Shuffle",
    "koT": "새벽 각성 루프 강함 — 시계를 뒤집어 숨기고 \"인지 셔플(무작위 단어 떠올리기)\"로 생각을 끊으세요",
    "enD": "CBT for Insomnia (CBT-I) shows brief 1–2 minute awakenings between sleep cycles are completely normal biology—checking the clock and worrying is what triggers adrenaline. Turning clocks away and using Luc Beaudoin’s Cognitive Shuffle gently cues sleep onset.",
    "koD": "불면증 인지행동치료(CBT-I)에 따르면 수면 주기 사이 잠깐 깨는 것은 지극히 정상입니다. 시계 확인과 내일 걱정이 아드레날린을 깨웁니다. 시계를 가리고 무작위 단어를 떠올리는 \"인지 셔플\"로 뇌를 다시 졸리게 유도하세요.",
    "enS": "\"Brief wakeups are normal. Resting quietly in the dark still restores my body—no clock, no phone, no solving life at 3 AM.\"",
    "koS": "\"새벽에 잠깐 깨는 건 자연스러운 현상이다. 어둠 속에 조용히 누워 있는 것만으로도 몸은 회복된다. 시계도 폰도 보지 않는다.\"",
    "enL": [
      "Turn your clock away and never check the time once in bed—trust your morning alarm.",
      "Try Cognitive Shuffle: pick a neutral word (e.g. \"GARDEN\") and picture 3 random harmless objects for each letter (G: giraffe, grape, guitar...) to interrupt worry.",
      "If wide awake and restless after ~20 minutes, sit in a dim chair reading a dull paperback until eyelids droop, then return to bed."
    ],
    "koL": [
      "침대에 누운 뒤엔 절대 시계나 폰 시간을 보지 마세요. 기상은 알람에게만 맡기세요.",
      "인지 셔플을 해 보세요: \"가-나-다\" 또는 무작위 단어 글자마다 상관없는 사물(기린·구름·기타)을 머릿속으로 그리면 걱정이 끊깁니다.",
      "20분 넘게 말똥말똥하고 답답하면 어두운 의자에서 지루한 종이책을 몇 쪽 읽다 눈꺼풀이 무거워질 때 다시 눕세요."
    ]
  },
  "mid": {
    "enT": "Occasional 3 AM Wakeups — Cool Bedroom + Zero Clock Peeks",
    "koT": "간헐적 새벽 각성 — 시원한 침실 온도(18~20℃)와 시계 안 보기만 지켜도 금방 다시 잠듭니다",
    "enD": "Small environmental tweaks keep brief between-cycle wakeups short and calm.",
    "koD": "작은 환경 조정만으로도 잠깐 깬 뒤 5분 내에 부드럽게 재입면할 수 있습니다.",
    "enS": "\"Cool room, dark clock, slow exhale.\"",
    "koS": "\"시원한 방, 가려진 시계, 느린 날숨.\"",
    "enL": [
      "Keep bedroom cool (18–20°C / 65–68°F) and dark.",
      "Avoid alcohol within 3 hours of bed, which fragments second-half REM sleep.",
      "Use 4–6 slow exhales instead of checking your phone."
    ],
    "koL": [
      "침실을 약간 서늘하게(18~20℃) 유지하면 새벽 각성이 줄어듭니다.",
      "취침 3시간 전 음주는 새벽 수면 분절의 주원인이므로 피하세요.",
      "깨더라도 폰 대신 4~6회 긴 날숨으로 다시 잠의 파도를 타세요."
    ]
  },
  "high": {
    "enT": "Steady Continuous Sleep — Healthy Sleep Confidence",
    "koT": "안정적인 통잠 리듬 — 건강한 수면 신뢰도를 유지하고 계십니다",
    "enD": "Your low-pressure attitude toward sleep protects continuous rest well. Keep honoring your consistent wake time.",
    "koD": "잠에 대한 불필요한 압박이 없어 자연스러운 숙면이 잘 이어지고 있습니다.",
    "enS": "\"Sleep comes naturally when I stop chasing it.\"",
    "koS": "\"억지로 쫓지 않을 때 잠은 가장 자연스럽게 찾아온다.\"",
    "enL": [
      "Maintain your steady wake time and morning daylight.",
      "Keep screens out of bed.",
      "Trust occasional light nights without over-compensating."
    ],
    "koL": [
      "일정한 기상 시간과 아침 햇빛 습관을 계속 지켜 주세요.",
      "침대는 오직 휴식과 수면의 공간으로 유지하세요.",
      "가끔 덜 잔 날이 있어도 다음 날 자연스럽게 회복됨을 믿으세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_three_am_wake_reset_v1";
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
      window.gtag('event', "three_am_wake_reset_complete", {
        tool_slug: "middle-of-night-3am-wake-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/middle-of-night-3am-wake-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "middle-of-night-3am-wake-reset",
        filename: 'dopabrain-middle-of-night-3am-wake-reset-card.png',
        badge: "CBT-I SLEEP SCIENCE • 3 AM MIDDLE-OF-NIGHT WAKEUP RESET",
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
