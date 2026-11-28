/* Sunday-Night Insomnia & Pre-Monday Sleep Clock Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Sunday-Night Insomnia & Pre-Monday Sleep Clock Reset | DopaBrain",
    "metaDesc": "Wide awake at midnight every Sunday dreading your 7 AM Monday alarm? Audit 5 Sunday-insomnia culprits (sleep-in jetlag + performance pressure) and fix tonight’s sleep drive.",
    "kicker": "SLEEP RHYTHM • SUNDAY-NIGHT INSOMNIA & SOCIAL-JETLAG RESET",
    "heroTitle": "Sunday-Night Insomnia & Pre-Monday Sleep Clock Reset",
    "heroLead": "Wide awake at midnight every Sunday dreading your 7 AM Monday alarm? Audit 5 Sunday-insomnia culprits (sleep-in jetlag + performance pressure) and fix tonight’s sleep drive.",
    "chip1": "5 Sunday Traps",
    "chip2": "Social-Jetlag Math",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR SUNDAY-NIGHT SLEEP BLOCKERS (1 = RESTFUL, 5 = WIDE AWAKE)",
    "step1Title": "Why does Sunday night feel impossible to fall asleep?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My Monday first-hour plan parked on paper so my brain stops rehearsing (100% local):",
    "ctaBtn": "Build My Sunday-Night Sleep Reset Plan",
    "resultBadge": "STEP 2 • YOUR CALM SUNDAY-NIGHT SLEEP PROTOCOL",
    "noteTitle": "My Parked Monday Morning Plan",
    "meterLabel": "Sunday Sleep Readiness",
    "scriptTitle": "Anti-Clock-Watching Sleep-Pressure Reassurance",
    "stepsTitle": "3 Evidence-Based Moves That Cure Sunday Insomnia Fast",
    "stickyTitle": "Quiet pre-Monday mental chatter with steady rain or brown noise.",
    "stickySub": "Open Free White Noise & Rain Player",
    "stickyBtn": "Play Sleep Audio →",
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
    "title": "일요일 밤 불면증 & 월요일 전 생체시계 리셋 플래너 | DopaBrain",
    "metaDesc": "유독 일요일 밤만 되면 말똥말똥해져 월요일 아침을 망치시나요? 주말 늦잠 시차와 수면 압박 등 5가지 일요 불면 원인을 점검하고 오늘 밤 숙면 리듬을 되찾으세요.",
    "kicker": "수면 리듬 · 일요일 밤 불면증 & 주말 시차(Social Jetlag) 리셋",
    "heroTitle": "일요일 밤 불면증 & 월요일 전 생체시계 리셋 플래너",
    "heroLead": "유독 일요일 밤만 되면 말똥말똥해져 월요일 아침을 망치시나요? 주말 늦잠 시차와 수면 압박 등 5가지 일요 불면 원인을 점검하고 오늘 밤 숙면 리듬을 되찾으세요.",
    "chip1": "5가지 일요 불면",
    "chip2": "주말 시차 교정",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 일요일 밤 숙면 방해 요인 점검 (1 = 꿀잠, 5 = 완전 말똥)",
    "step1Title": "유독 일요일 밤에 잠이 안 오는 가장 큰 원인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 머릿속 리허설을 멈추기 위해 미리 적어 두는 월요일 첫 1시간 할 일 (100% 로컬):",
    "ctaBtn": "내 일요일 밤 수면 리셋 플랜 보기",
    "resultBadge": "2단계 • 월요일을 살리는 일요일 밤 숙면 프로토콜",
    "noteTitle": "종이에 주차해 둔 월요일 첫 1시간",
    "meterLabel": "일요일 숙면 준비도",
    "scriptTitle": "시계 확인 강박을 풀어 주는 수면 안심 1줄",
    "stepsTitle": "일요일 밤 불면을 빠르게 줄이는 3가지 수면 과학 팁",
    "stickyTitle": "일요일 밤 잡생각을 차분한 빗소리·브라운 노이즈로 부드럽게 덮어 보세요.",
    "stickySub": "무료 백색소음·빗소리 플레이어 열기",
    "stickyBtn": "수면 사운드 재생 →",
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
    "title": "周日失眠与周一前生物钟重置规划器 | DopaBrain",
    "heroTitle": "周日失眠与周一前生物钟重置规划器",
    "heroLead": "化解周末晚起社会时差与盯表焦虑，找回周日晚上的自然睡意。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "日曜夜の不眠＆体内時計リセットプランナー | DopaBrain",
    "heroTitle": "日曜夜の不眠＆体内時計リセットプランナー",
    "heroLead": "週末寝だめ時差と時計チェック癖を整え、月曜前の入眠プレッシャーを和らげます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reinicio del Insomnio de Domingo y Reloj de Sueño | DopaBrain",
    "heroTitle": "Reinicio del Insomnio de Domingo y Reloj de Sueño",
    "heroLead": "Supera el desvelo del domingo corrigiendo el jetlag social y soltando la presión del reloj.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset da Insônia de Domingo e Relógio do Sono | DopaBrain",
    "heroTitle": "Reset da Insônia de Domingo e Relógio do Sono",
    "heroLead": "Quebre o ciclo de virar na cama no domingo ajustando o jetlag social e a ansiedade da segunda.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Sonntags-Schlaflosigkeit & Schlafuhr-Reset | DopaBrain",
    "heroTitle": "Sonntags-Schlaflosigkeit & Schlafuhr-Reset",
    "heroLead": "Löse das Sonntags-Wachliegen mit Social-Jetlag-Anker und ohne Blick auf die Uhr.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Insomnie du Dimanche Soir & Horloge Biologique | DopaBrain",
    "heroTitle": "Reset Insomnie du Dimanche Soir & Horloge Biologique",
    "heroLead": "Brisez l’insomnie d’avant-lundi en corrigeant le jetlag social et la pression du réveil.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс воскресной бессонницы и биоритмов сна | DopaBrain",
    "heroTitle": "Сброс воскресной бессонницы и биоритмов сна",
    "heroLead": "Снимите пред-понедельничное напряжение и социальный джетлаг для спокойного сна.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "रविवार रात की अनिद्रा और स्लीप क्लॉक रीसेट | DopaBrain",
    "heroTitle": "रविवार रात की अनिद्रा और स्लीप क्लॉक रीसेट",
    "heroLead": "सोशल जेटलैग और घड़ी देखने की चिंता छोड़कर रविवार की रात शांत नींद पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Insomnia Malam Minggu & Jam Tidur | DopaBrain",
    "heroTitle": "Reset Insomnia Malam Minggu & Jam Tidur",
    "heroLead": "Atasi susah tidur malam Minggu dengan atur social jetlag dan parkir agenda Senin.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Pazar Gecesi Uykusuzluk ve Biyolojik Saat Sıfırlama | DopaBrain",
    "heroTitle": "Pazar Gecesi Uykusuzluk ve Biyolojik Saat Sıfırlama",
    "heroLead": "Sosyal jetlag ve saate bakma döngüsünü kırarak Pazar gecesi rahat uykuya geçin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "sunday_late_sleepin",
    "en": "3-Hour Sunday Sleep-In — Waking at 10:30 AM and erasing nighttime sleep pressure (social jetlag)",
    "ko": "일요일 3시간 늦잠 — 오전 10~11시에 일어나 밤 11시 수면 압력이 바닥남"
  },
  {
    "id": "early_bed_forcing",
    "en": "Forcing Bed 90 Min Early — Lying in the dark wide awake trying to \"bank sleep\" for Monday",
    "ko": "억지 조기 취침 — 월요일 대비해 평소보다 일찍 누웠다가 오히려 눈만 말똥함"
  },
  {
    "id": "clock_countdown_math",
    "en": "Hours-Left Clock Math — Calculating \"If I sleep right now I’ll get 5h 18m...\" every 15 minutes",
    "ko": "남은 시간 계산 — \"지금 자면 5시간 18분...\" 하며 15분마다 시계를 확인함"
  },
  {
    "id": "monday_mental_rehearsal",
    "en": "Monday Rehearsal Loop — Running through emails and meetings in bed instead of on paper",
    "ko": "월요일 머릿속 예행연습 — 침대에서 내일 회의와 할 일을 계속 시뮬레이션함"
  },
  {
    "id": "late_sunday_nap_caffeine",
    "en": "Late Sunday Nap or Sugar/Alcohol — Pushing melatonin back right before the workweek",
    "ko": "일요일 늦은 낮잠·카페인 — 오후 늦은 낮잠이나 음료가 밤 멜라토닌을 밀어냄"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Sunday Insomnia — Hide the Clock, Wait Until Sleepy & Cap Sunday Sleep-In to +60 Min",
    "koT": "일요 불면 높음 — 시계 숨기기·졸릴 때 눕기·다음 일요일 늦잠 1시간 이내 제한을 적용하세요",
    "enD": "Sleep medicine calls Sunday insomnia a classic double-whammy of \"social jetlag\" (late weekend wake time shifting your circadian clock 2–3 time zones west) plus sleep-performance pressure. Hiding the clock and waiting until genuine eyelid heaviness restores natural sleep fast.",
    "koD": "수면의학에서 일요 불면은 주말 늦잠으로 인한 \"사회적 시차(서쪽으로 2~3시간 비행한 효과)\"와 \"월요일 위해 꼭 자야 한다\"는 압박이 겹쳐 생깁니다. 시계를 뒤집어 두고 진짜 졸릴 때 눕는 것만으로도 입면이 훨씬 빨라집니다.",
    "enS": "\"Resting calmly in the dark still restores my body—I do not need to force sleep, and one shorter night never ruins Monday.\"",
    "koS": "\"어둠 속에서 편안히 눈 감고 쉬는 것만으로도 몸은 회복된다. 억지로 잠들려 애쓰지 않아도 내일은 충분히 해낼 수 있다.\"",
    "enL": [
      "Turn clocks and phones face-down tonight—zero \"hours remaining\" math.",
      "If awake past 20 minutes, sit in dim light reading a calm paper page (cognitive shuffle) until eyelids droop.",
      "Next Sunday: wake within 60 minutes of your weekday time and get 10 minutes of bright morning sun to anchor your clock."
    ],
    "koL": [
      "오늘 밤 시계와 휴대폰 화면은 뒤집어 두고 남은 수면 시간 계산을 완전히 멈추세요.",
      "20분 넘게 잠이 안 오면 침대에서 버티지 말고 어두운 조명 아래 가벼운 종이책을 읽다 눈꺼풀이 무거워질 때 다시 누우세요.",
      "다음 주 일요일엔 평일 기상 시간 +1시간 이내로 일어나 아침 햇빛을 10분만 쬐어 주세요."
    ]
  },
  "mid": {
    "enT": "Mild Sunday Drift — Park Monday’s First Task by 7 PM & Dim Screens at 10 PM",
    "koT": "가벼운 일요 시차 — 저녁 7시 월요일 메모 주차와 밤 10시 조명 낮추기만 챙기세요",
    "enD": "Offloading Monday logistics before dinner keeps bedtime peaceful and familiar.",
    "koD": "저녁 전 월요일 첫 1시간만 적어 두어도 침대 위 잡생각이 눈에 띄게 줄어듭니다.",
    "enS": "\"Monday is written down; tonight belongs to rest.\"",
    "koS": "\"월요일은 종이에 맡겨 두었다. 오늘 밤은 온전히 휴식의 시간이다.\"",
    "enL": [
      "Write 3 Monday morning bullets by 7 PM.",
      "Skip naps after 2 PM on Sunday.",
      "Play low rain or brown noise to mask quiet-room thoughts."
    ],
    "koL": [
      "저녁 7시 전에 월요일 오전 할 일 3줄을 종이에 적어 두세요.",
      "일요일 오후 2시 이후 낮잠은 피해 주세요.",
      "조용한 방 잡생각은 잔잔한 빗소리·브라운 노이즈로 덮어 보세요."
    ]
  },
  "high": {
    "enT": "Anchored Sunday Clock — Smooth Transition Into Monday",
    "koT": "안정적인 일요일 생체시계 — 가볍게 월요일로 이어집니다",
    "enD": "Your consistent wake time and calm Sunday evening protect deep sleep.",
    "koD": "일정한 기상 리듬과 차분한 일요일 저녁 습관이 숙면을 든든히 지켜 줍니다.",
    "enS": "\"Steady wake times make Sunday sleep effortless.\"",
    "koS": "\"일정한 기상 시간이 일요일 밤 꿀잠을 자연스럽게 만든다.\"",
    "enL": [
      "Keep your 60-minute weekend wake window.",
      "Keep Sunday evenings cozy and screen-light.",
      "Enjoy waking refreshed on Monday."
    ],
    "koL": [
      "주말 기상 시간 +1시간 이내 원칙을 계속 유지하세요.",
      "일요일 밤은 화면 대신 포근한 아날로그 휴식으로 채우세요.",
      "상쾌한 월요일 아침 리듬을 만끽하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_sunday_insomnia_v1";
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
      window.gtag('event', "sunday_insomnia_reset_complete", {
        tool_slug: "sunday-night-insomnia-clock-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/sunday-night-insomnia-clock-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "sunday-night-insomnia-clock-reset",
        filename: 'dopabrain-sunday-night-insomnia-clock-reset-card.png',
        badge: "SLEEP RHYTHM • SUNDAY-NIGHT INSOMNIA & SOCIAL-JETLAG RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
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
