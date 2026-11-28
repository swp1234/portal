/* Late Dinner & Heavy-Meal Sleep Recovery Plan
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Late Dinner & Heavy-Meal Sleep Recovery Plan | DopaBrain",
    "metaDesc": "Ate a heavy late dinner or midnight snack and now feeling warm, restless, or uncomfortable lying flat? Use a gentle 10-min walk, left-side rest cue, and zero-guilt recovery plan locally.",
    "kicker": "NIGHT DIGESTION & REST • LATE DINNER & HEAVY-MEAL SLEEP RECOVERY PLAN",
    "heroTitle": "Late Dinner & Heavy-Meal Sleep Recovery Plan",
    "heroLead": "Ate a heavy late dinner or midnight snack and now feeling warm, restless, or uncomfortable lying flat? Use a gentle 10-min walk, left-side rest cue, and zero-guilt recovery plan locally.",
    "chip1": "5 Late-Meal Loops",
    "chip2": "3-Step Comfort Reset",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHAT IS DISRUPTING REST TONIGHT (1 = LIGHT, 5 = HEAVY)",
    "step1Title": "How did tonight’s late or heavy meal affect your wind-down?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Tomorrow’s simple 6 PM protein/snack buffer so I do not arrive starving at 10 PM (100% local):",
    "ctaBtn": "Build My Tonight Comfort & Tomorrow Buffer",
    "resultBadge": "STEP 2 • YOUR GENTLE DIGESTION-TO-SLEEP RESET",
    "noteTitle": "Tomorrow’s 5:30 PM Buffer",
    "meterLabel": "Overnight Digestion Comfort",
    "scriptTitle": "Zero-Guilt Tonight Reset Mantra",
    "stepsTitle": "3 Gentle Physical Moves Before Lying Down Tonight",
    "stickyTitle": "Want soft rain audio while resting upright for 20 minutes?",
    "stickySub": "Open the free Rain & Brown Noise Mixer",
    "stickyBtn": "Play Rain Audio →",
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
    "title": "늦은 저녁·야식·과식 후 더부룩한 밤 편안한 수면 회복 플랜 | DopaBrain",
    "metaDesc": "늦은 야근 저녁이나 야식 후 속이 더부룩하고 열감이 올라 잠이 안 오시나요? 자책 없이 10분 가벼운 산책·왼쪽 눕기·상체 각도로 오늘 밤 수면을 부드럽게 회복하세요.",
    "kicker": "야식·수면 회복 · 늦은 저녁·과식 후 속 불편·얕은 잠 완화 3단계 리커버리 플랜",
    "heroTitle": "늦은 저녁·야식·과식 후 더부룩한 밤 편안한 수면 회복 플랜",
    "heroLead": "늦은 야근 저녁이나 야식 후 속이 더부룩하고 열감이 올라 잠이 안 오시나요? 자책 없이 10분 가벼운 산책·왼쪽 눕기·상체 각도로 오늘 밤 수면을 부드럽게 회복하세요.",
    "chip1": "5가지 야식 수면방해",
    "chip2": "3단계 속편안 루틴",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 늦은 식사 후 수면 방해 신호 점검 (1 = 가벼움, 5 = 매우 불편)",
    "step1Title": "늦은 저녁·야식 이후 지금 가장 수면을 방해하는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 내일 밤 10시 폭식을 막기 위한 오후 6시 가벼운 간식 계획 1가지 (100% 로컬):",
    "ctaBtn": "오늘 밤 회복 & 내일 예방 플랜 보기",
    "resultBadge": "2단계 • 속 편한 수면 회복 프로토콜",
    "noteTitle": "내일 오후 5:30 허기 완충",
    "meterLabel": "야간 소화·수면 편안도",
    "scriptTitle": "자책 없이 오늘 밤을 편하게 넘기는 한 문장",
    "stepsTitle": "오늘 밤 눕기 전 속을 편하게 하는 3가지 실천",
    "stickyTitle": "20분간 기대어 소화시키는 동안 잔잔한 빗소리를 켜 볼까요?",
    "stickySub": "무료 빗소리·백색소음 플레이어 열기",
    "stickyBtn": "빗소리 켜기 →",
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
    "title": "晚饭过晚与夜宵后舒适助眠恢复计划 | DopaBrain",
    "heroTitle": "晚饭过晚与夜宵后舒适助眠恢复计划",
    "heroLead": "用10分钟缓步、左侧卧位与凉爽卧室缓解饱胀燥热，无愧疚安稳入睡。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "遅い夕食・夜食後の安眠リカバリープラン | DopaBrain",
    "heroTitle": "遅い夕食・夜食後の安眠リカバリープラン",
    "heroLead": "食後の重さや火照りを10分散歩・左向き休息・罪悪感ゼロの習慣で穏やかに整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Recuperación de Sueño tras Cena Tardía | DopaBrain",
    "heroTitle": "Plan de Recuperación de Sueño tras Cena Tardía",
    "heroLead": "Alivia la pesadez nocturna con 10 min de paseo suave, descanso lado izquierdo y cero culpa.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Sono Após Jantar Tardio ou Pesado | DopaBrain",
    "heroTitle": "Plano de Sono Após Jantar Tardio ou Pesado",
    "heroLead": "Alivie desconforto noturno com caminhada leve de 10 min, lado esquerdo e zero culpa.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Spätes Abendessen & Schlaf-Erholungsplan | DopaBrain",
    "heroTitle": "Spätes Abendessen & Schlaf-Erholungsplan",
    "heroLead": "Lindere Völlegefühl nachts mit 10-Min-Spaziergang, Linksseitenlage & kühlem Schlafzimmer.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Sommeil Après Dîner Tardif ou Copieux | DopaBrain",
    "heroTitle": "Plan Sommeil Après Dîner Tardif ou Copieux",
    "heroLead": "Apaisez l’inconfort digestif avec 10 min de marche douce, côté gauche et pièce fraîche.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План спокойного сна после позднего ужина | DopaBrain",
    "heroTitle": "План спокойного сна после позднего ужина",
    "heroLead": "Снимите тяжесть 10-минутной прогулкой, положением на левом боку и прохладой без чувства вины.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "देर रात भारी भोजन के बाद आरामदायक नींद प्लान | DopaBrain",
    "heroTitle": "देर रात भारी भोजन के बाद आरामदायक नींद प्लान",
    "heroLead": "10 मिनट हल्की सैर, बाईं करवट आराम और ठंडे कमरे से रात की भारीपन शांत करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Rencana Pemulihan Tidur Setelah Makan Malam Larut | DopaBrain",
    "heroTitle": "Rencana Pemulihan Tidur Setelah Makan Malam Larut",
    "heroLead": "Redakan begah malam dengan jalan pelan 10 menit, tidur miring kiri, dan tanpa rasa bersalah.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Geç Akşam Yemeği Sonrası Uyku Toparlama Planı | DopaBrain",
    "heroTitle": "Geç Akşam Yemeği Sonrası Uyku Toparlama Planı",
    "heroLead": "Gece ağırlığını 10 dk hafif yürüyüş, sol yan yatış ve serin oda ile rahatlatın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "immediate_flat_bed",
    "en": "Lying Flat Too Soon — Getting straight into bed under 60 minutes after a heavy meal",
    "ko": "식후 바로 눕기 — 무거운 식사 후 1시간도 안 돼 수평으로 누워 속이 답답함"
  },
  {
    "id": "spicy_fatty_alcohol",
    "en": "Rich / Spicy / Late Drinks — High-fat, spicy food, or nightcaps raising core body temp & heart rate",
    "ko": "기름진·매운 야식/음주 — 심부 체온과 심박수가 올라 잠이 얕아짐"
  },
  {
    "id": "food_guilt_spiral",
    "en": "Late-Night Guilt Loop — Beating yourself up over eating late, adding cortisol on top of fullness",
    "ko": "야식 자책 루프 — 먹은 것을 후회하며 스트레스 호르몬까지 더해져 잠이 달아남"
  },
  {
    "id": "skipped_afternoon_fuel",
    "en": "Under-Eating Earlier — Skipping afternoon nutrition and arriving home ravenous at 9:30 PM",
    "ko": "낮 시간 과소 섭취 — 오후에 굶다시피 해서 밤 9~10시에 허기가 폭발함"
  },
  {
    "id": "warm_room_restless",
    "en": "Overheated Bedroom — Digestion heat + warm blankets causing 2 AM wakeups",
    "ko": "더운 침실 온도 — 소화 열감과 두꺼운 이불이 겹쳐 새벽 2시에 깸"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Late-Meal Load — Walk 10 Min, Sip Warm Water, Rest on Left Side & Cool the Room",
    "koT": "소화 부담 높음 — 10분 가벼운 걸음·따뜻한 물·왼쪽 눕기·시원한 침실로 회복하세요",
    "enD": "Digesting a large meal raises core body temperature and stomach pressure when flat. A slow 10-minute indoor walk, slight upper-body elevation, sleeping on your left side, and zero food-guilt make tonight dramatically smoother.",
    "koD": "늦은 과식은 심부 체온과 위 압력을 높입니다. 10분 천천히 걷기, 상체 살짝 높이기, 왼쪽으로 눕기, 시원한 실내 온도, 그리고 자책 멈추기가 오늘 밤을 가장 편하게 돕습니다.",
    "enS": "\"One late dinner is just human life—guilt raises cortisol, while a gentle 10-minute stroll and cool room help my body digest and rest cleanly.\"",
    "koS": "\"늦은 식사 하루쯤은 자연스러운 일이다. 자책은 각성만 높일 뿐, 10분 천천히 걷고 시원하게 기대어 쉬면 몸이 알아서 회복한다.\"",
    "enL": [
      "Take an easy 10-minute slow walk (or light tidying upright) and sip a small cup of warm water or caffeine-free ginger/chamomile tea.",
      "Wait 45–60 minutes before lying fully flat; prop your upper torso slightly and start resting on your left side for gentler stomach comfort.",
      "Cool the bedroom by 1–2°C tonight to offset digestion heat, and pack a 5:30 PM snack for tomorrow."
    ],
    "koL": [
      "10분간 천천히 실내를 걷거나 서서 가볍게 정리하며 따뜻한 물·생강/캐모마일차를 조금 마시세요.",
      "최소 45~60분 뒤 베개로 상체를 살짝 높이고 왼쪽으로 누워 위장 부담을 줄이세요.",
      "소화 열감을 상쇄하도록 방 온도를 평소보다 1~2도 시원하게 맞추고, 내일 오후 5:30 간식을 미리 챙기세요."
    ]
  },
  "mid": {
    "enT": "Mild Fullness — 10-Min Upright Buffer + Cool Room & Left-Side Start",
    "koT": "가벼운 포만감 — 10분 서 있기 + 시원한 방·왼쪽 눕기로 충분합니다",
    "enD": "A brief upright buffer and cool sheets help core temperature drop smoothly into deep sleep.",
    "koD": "잠시 서서 소화하고 시원하게 눕기만 해도 깊은 잠으로 부드럽게 넘어갈 수 있습니다.",
    "enS": "\"Calm digestion, cool pillow, zero guilt.\"",
    "koS": "\"편안한 소화, 시원한 베개, 자책 제로.\"",
    "enL": [
      "Stay upright reading or listening to rain for 20 minutes.",
      "Avoid chugging large volumes of cold water right before lying down.",
      "Keep tomorrow’s breakfast light and hydrating."
    ],
    "koL": [
      "20분만 기대어 빗소리나 가벼운 책을 보며 쉬세요.",
      "눕기 직전 찬물을 한꺼번에 많이 마시지 마세요.",
      "내일 아침은 수분 위주로 가볍게 시작하세요."
    ]
  },
  "high": {
    "enT": "Balanced Evening Fueling — Restorative Sleep Rhythm",
    "koT": "안정적인 저녁 식사 리듬 — 깊은 수면 준비 완료",
    "enD": "Finishing dinner 2–3 hours before bed keeps overnight heart rate low and REM restorative.",
    "koD": "취침 2~3시간 전 식사 마무리로 편안한 야간 회복 리듬을 잘 지키고 있습니다.",
    "enS": "\"Steady daytime fuel prevents midnight hunger.\"",
    "koS": "\"낮의 규칙적인 에너지가 편안한 밤을 만든다.\"",
    "enL": [
      "Keep a go-to 5 PM protein snack on busy workdays.",
      "Enjoy warm herbal tea as your kitchen-closed cue.",
      "Keep bedroom cool and dim."
    ],
    "koL": [
      "바쁜 날을 위한 오후 5시 단백질 간식을 상비해 두세요.",
      "따뜻한 허브티 한 잔을 주방 마감 신호로 쓰세요.",
      "침실은 시원하고 어둡게 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_late_meal_v1";
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
      window.gtag('event', "late_meal_sleep_complete", {
        tool_slug: "late-night-heavy-meal-sleep-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/late-night-heavy-meal-sleep-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "late-night-heavy-meal-sleep-reset",
        filename: 'dopabrain-late-night-heavy-meal-sleep-reset-card.png',
        badge: "NIGHT DIGESTION & REST • LATE DINNER & HEAVY-MEAL SLEEP RECOVERY PLAN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
        accent2: "#10b981"
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
