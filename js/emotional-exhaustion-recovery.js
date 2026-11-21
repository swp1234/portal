/* Emotional Exhaustion & Compassion Fatigue Gauge
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Emotional Exhaustion & Compassion Fatigue Recovery Gauge | DopaBrain",
    "metaDesc": "Free 12-language Emotional Exhaustion & Compassion Fatigue Recovery Gauge. Measure empathy depletion across 5 dimensions locally and build a 48-hour gentle nervous system recovery plan.",
    "keywords": "emotional exhaustion recovery, compassion fatigue gauge, empathy burnout test, emotional depletion reset, burnout recovery planner, dopabrain",
    "kicker": "EMPATHY DEPLETION & 48-HOUR RECOVERY",
    "heroTitle": "Emotional Exhaustion & Compassion Fatigue Gauge",
    "heroLead": "Feeling emotionally flat, irritable, or unable to care after months of supporting everyone else? Rate 5 compassion-fatigue markers locally to generate a realistic 48-hour recovery prescription.",
    "chip1": "5 Exhaustion Axes",
    "chip2": "48h Recovery Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR EMOTIONAL RESERVE (1 = LOW, 5 = SEVERE)",
    "step1Title": "How heavy do these emotional depletion signals feel this week?",
    "step1Sub": "Honest ratings stay strictly inside your browser—nothing is sent anywhere.",
    "inputLabel": "Optional: 1 emotional responsibility I can pause for 48 hours (100% local):",
    "inputPlaceholder": "Example: Pausing late-night advice calls and taking Saturday morning completely offline",
    "ctaBtn": "Calculate Reserve & Build 48h Plan",
    "resultBadge": "STEP 2 • YOUR 48-HOUR EMOTIONAL RECOVERY PLAN",
    "noteTitle": "My 48-Hour Emotional Pause Boundary",
    "meterLabel": "Remaining Emotional Reserve",
    "scriptTitle": "Warm Boundary When Your Tank Is Empty",
    "stepsTitle": "3 Restorative Moves for the Next 48 Hours",
    "stickyTitle": "Want to plug the hidden leaks draining your week?",
    "stickySub": "Audit 6 invisible energy drains vs. 4 restorers in 2 minutes",
    "stickyBtn": "Energy Audit →",
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
    "title": "감정적 소진·공감 피로 회복 게이지 & 48시간 플랜 | DopaBrain",
    "metaDesc": "타인을 돌보고 버티느라 마음이 텅 빈 느낌인가요? 5가지 감정 소진·공감 피로 축을 비공개로 점검하고 48시간 회복 처방과 따뜻한 경계 문장을 받으세요.",
    "kicker": "공감 피로 & 48시간 감정 회복 랩",
    "heroTitle": "감정적 소진·공감 피로 회복 게이지",
    "heroLead": "오래 참고 남을 챙기다 정작 내 감정이 메마르거나 사소한 일에도 지치나요? 5가지 소진 신호를 로컬에서 점검해 현실적인 48시간 회복 계획을 받아보세요.",
    "chip1": "5가지 감정 소진 축",
    "chip2": "48시간 회복 처방",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 나의 감정 예비력 점검 (1 = 거의 없음, 5 = 매우 심함)",
    "step1Title": "이번 주 아래 감정 소진 신호가 얼마나 크게 느껴지나요?",
    "step1Sub": "모든 점수는 내 기기 안에서만 계산되며 외부로 전송되지 않습니다.",
    "inputLabel": "선택: 앞으로 48시간 동안 잠시 내려놓을 감정 노동 1가지 (100% 로컬):",
    "ctaBtn": "감정 예비력 계산 & 48시간 회복 플랜",
    "resultBadge": "2단계 • 나의 48시간 감정 회복 플랜",
    "noteTitle": "48시간 동안 잠시 멈추는 나의 감정 노동",
    "meterLabel": "남은 감정 예비력",
    "scriptTitle": "마음 탱크가 비었을 때 쓰는 따뜻한 경계 문장",
    "stepsTitle": "앞으로 48시간을 살리는 3가지 회복 행동",
    "stickyTitle": "내 에너지를 빼앗는 숨은 누수를 찾고 싶나요?",
    "stickySub": "6가지 보이지 않는 에너지 누수를 2분 만에 감사해 보세요",
    "stickyBtn": "에너지 감사 →",
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
    "title": "情绪耗竭与共情疲劳恢复仪 | DopaBrain",
    "heroTitle": "情绪耗竭与共情疲劳恢复仪",
    "ctaBtn": "计算储备并生成48小时计划",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "感情的消耗・共感疲労リカバリー診断 | DopaBrain",
    "heroTitle": "感情的消耗・共感疲労リカバリー",
    "ctaBtn": "48時間回復プランを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Medidor de Agotamiento Emocional (Plan 48h) | DopaBrain",
    "heroTitle": "Agotamiento Emocional y Fatiga",
    "ctaBtn": "Crear plan de 48 horas",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Medidor de Exaustão Emocional (Plano 48h) | DopaBrain",
    "heroTitle": "Exaustão Emocional e Compaixão",
    "ctaBtn": "Criar plano de 48 horas",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Emotionale Erschöpfung & Mitgefühls-Müdigkeit | DopaBrain",
    "heroTitle": "Emotionale Erschöpfung Check",
    "ctaBtn": "48h-Erholungsplan erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Jauge d’Épuisement Émotionnel (Plan 48h) | DopaBrain",
    "heroTitle": "Épuisement Émotionnel (48h)",
    "ctaBtn": "Créer mon plan 48h",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Шкала эмоционального истощения (план 48ч) | DopaBrain",
    "heroTitle": "Эмоциональное истощение",
    "ctaBtn": "Создать план на 48 часов",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "इमोशनल एग्ज़ॉशन और रिकवरी गेज (48 घंटे) | DopaBrain",
    "heroTitle": "इमोशनल एग्ज़ॉशन रिकवरी गेज",
    "ctaBtn": "48-घंटे का प्लान बनाएँ",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pengukur Kelelahan Emosional (Rencana 48 Jam) | DopaBrain",
    "heroTitle": "Pemulihan Kelelahan Emosional",
    "ctaBtn": "Buat Rencana 48 Jam",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Duygusal Tükenme ve Şefkat Yorgunluğu Ölçer | DopaBrain",
    "heroTitle": "Duygusal Tükenme Ölçer",
    "ctaBtn": "48 Saatlik Plan Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "empathy_numb",
    "en": "Emotional Numbness — Struggling to feel excited or moved by good news",
    "ko": "감정 둔화 — 좋은 소식을 들어도 기쁘거나 와닿지 않음"
  },
  {
    "id": "irritability",
    "en": "Short Fuse — Small requests or noises trigger instant exhaustion",
    "ko": "예민함 급증 — 사소한 부탁이나 소음에도 즉각 지치고 짜증이 남"
  },
  {
    "id": "caregiver_drain",
    "en": "Caregiver / Helper Fatigue — Tired of holding space for everyone else",
    "ko": "돌봄 피로 — 주변 사람 감정을 받아주고 챙기는 역할에 탈진함"
  },
  {
    "id": "dread_morning",
    "en": "Heavy Morning Dread — Waking up already tired before the day starts",
    "ko": "아침 무기력 — 하루를 시작하기도 전부터 이미 기운이 바닥남"
  },
  {
    "id": "cynicism",
    "en": "Detached Cynicism — Pulling away from friends to avoid pretending you are fine",
    "ko": "냉소·거리두기 — 괜찮은 척하기 힘들어 연락과 만남을 피하게 됨"
  }
];
  var TIERS = {
  "low": {
    "enT": "Critical Empathy Depletion — Enter 48-Hour Protected Rest",
    "koT": "심각한 감정 예비력 고갈 — 48시간 보호 휴식 모드 진입",
    "enD": "Your emotional fuel tank is nearly empty. You cannot pour care from an empty cup—reduce emotional labor to bare essentials for 48 hours.",
    "koD": "감정 탱크가 거의 바닥났습니다. 빈 컵에서는 아무것도 따를 수 없습니다. 앞으로 48시간은 감정 노동을 최소한으로 줄이세요.",
    "enS": "\"I care about you a lot, and my bandwidth is genuinely maxed out this weekend. Can we catch up once I have recharged on Monday?\"",
    "koS": "\"네 이야기가 소중하지만 이번 주말 내 에너지가 완전히 바닥나서 혼자 회복할 시간이 필요해. 월요일에 충전하고 다시 편하게 얘기하자.\"",
    "enL": [
      "Cancel or postpone 1 non-essential social or helping obligation right now.",
      "Choose passive, zero-performance rest (warm shower, quiet walk, early sleep) over scrolling.",
      "Eat steady protein/water and skip emotionally intense news or drama for 48 hours."
    ],
    "koL": [
      "필수가 아닌 모임·상담 역할 1가지를 지금 바로 다음 주로 미루세요.",
      "폰 스크롤 대신 따뜻한 샤워·산책·일찍 자기 같은 무자극 휴식을 선택하세요.",
      "48시간 동안 자극적인 뉴스와 타인의 갈등 소식을 잠시 차단하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Emotional Strain — Refill Before Full Burnout",
    "koT": "중간 수준의 감정 피로 — 완전 번아웃 전 선제적 충전 필요",
    "enD": "Warning lights are blinking. Building two deliberate pockets of solitude and low-demand rest over the next 48 hours prevents deeper crash.",
    "koD": "경고등이 켜진 구간입니다. 앞으로 48시간 안에 혼자만의 저자극 휴식 블록 2개를 확보하면 깊은 번아웃을 막을 수 있습니다.",
    "enS": "\"I would love to help, though I only have 15 minutes of energy right now—let us keep it brief so I can stay present.\"",
    "koS": "\"도와주고 싶지만 지금 쓸 수 있는 에너지가 15분 정도라 핵심만 짧게 이야기하면 좋겠어.\"",
    "enL": [
      "Block one 90-minute \"no one needs anything from me\" window in the next 48 hours.",
      "Name one unspoken resentment and set a gentle boundary before it grows.",
      "Switch from fixing others’ problems to simply saying \"That sounds really tough.\""
    ],
    "koL": [
      "48시간 안에 \"아무도 내게 아무것도 요구하지 않는 90분\"을 달력에 잠그세요.",
      "속으로 쌓인 서운함 1가지를 부드러운 경계 문장으로 미리 정리하세요.",
      "남의 문제를 해결해 주려 하지 말고 \"정말 힘들었겠다\" 한 마디로만 공감하세요."
    ]
  },
  "high": {
    "enT": "Healthy Emotional Reserve — Protect Your Sustainable Rhythm",
    "koT": "안정적인 감정 예비력 — 지금의 건강한 리듬을 지켜주세요",
    "enD": "Your emotional tank still holds steady capacity. Keep protecting micro-recovery habits before peak busy weeks arrive.",
    "koD": "아직 건강한 감정 여유가 남아 있습니다. 바쁜 주간이 오기 전에 지금의 회복 루틴을 꾸준히 유지하는 것이 핵심입니다.",
    "enS": "\"I am glad to be here for you—and I will also protect my rest tonight so I stay grounded all week.\"",
    "koS": "\"기꺼이 함께 이야기 나눌게—나도 이번 주 컨디션을 지키기 위해 밤에는 푹 쉬려고 해.\"",
    "enL": [
      "Keep one daily 15-minute screen-free transition after work.",
      "Notice early irritability as an invitation to rest rather than push harder.",
      "Continue checking your energy balance once a week."
    ],
    "koL": [
      "퇴근 후 15분 화면 없는 전환 시간을 매일 유지하세요.",
      "예민함이 올라오는 순간을 \"더 버틸 때\"가 아니라 \"쉴 신호\"로 읽으세요.",
      "주 1회 감정 에너지 균형을 가볍게 점검하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_emo_exhaust_v1";
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
      window.gtag('event', "emotional_exhaustion_complete", {
        tool_slug: "emotional-exhaustion-recovery",
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
      var shareUrl = "https://dopabrain.com/portal/tools/emotional-exhaustion-recovery.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "emotional-exhaustion-recovery",
        filename: 'dopabrain-emotional-exhaustion-recovery-card.png',
        badge: "EMPATHY DEPLETION & 48-HOUR RECOVERY",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f43f5e",
        accent2: "#f59e0b"
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
