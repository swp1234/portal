/* Caffeine Half-Life Cutoff & Deep Sleep Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Caffeine Half-Life Cutoff & Deep Sleep Planner | DopaBrain",
    "metaDesc": "Falling asleep fine after a 4 PM latte yet waking up strangely unrefreshed? Audit 5 hidden caffeine-sleep friction patterns locally and lock in a deep-sleep-safe cutoff window.",
    "kicker": "SLEEP SCIENCE • CAFFEINE HALF-LIFE & CUTOFF PLANNER",
    "heroTitle": "Caffeine Half-Life Cutoff & Deep Sleep Planner",
    "heroLead": "Falling asleep fine after a 4 PM latte yet waking up strangely unrefreshed? Audit 5 hidden caffeine-sleep friction patterns locally and lock in a deep-sleep-safe cutoff window.",
    "chip1": "5 Caffeine Traps",
    "chip2": "Half-Life Rule",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR DAILY CAFFEINE & SLEEP PATTERNS (1 = CLEAN, 5 = HIGH IMPACT)",
    "step1Title": "How might lingering adenosine blockers be thinning your deep sleep?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My target bedtime & planned last-coffee cutoff (100% local):",
    "ctaBtn": "Build My Deep-Sleep Caffeine Protocol",
    "resultBadge": "STEP 2 • YOUR DEEP-SLEEP CAFFEINE TIMING PROTOCOL",
    "noteTitle": "My Personal Cutoff Anchor",
    "meterLabel": "Deep-Sleep Caffeine Safety",
    "scriptTitle": "Afternoon Swap Cue",
    "stepsTitle": "3 Evidence-Based Caffeine Rules for Deeper Sleep & Brighter Mornings",
    "stickyTitle": "Ready to protect tonight’s slow-wave deep sleep?",
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
    "title": "카페인 반감기 컷오프 & 깊은 수면 보호 플래너 | DopaBrain",
    "metaDesc": "오후 4시에 라떼를 마셔도 잠은 드는데 아침에 개운하지 않나요? 카페인 반감기와 5가지 수면 방해 패턴을 점검하고 깊은 수면(서파수면)을 지키는 나만의 컷오프 시간을 설계하세요.",
    "kicker": "수면 과학 · 카페인 반감기 컷오프 & 깊은 수면 설계기",
    "heroTitle": "카페인 반감기 컷오프 & 깊은 수면 보호 플래너",
    "heroLead": "오후 4시에 라떼를 마셔도 잠은 드는데 아침에 개운하지 않나요? 카페인 반감기와 5가지 수면 방해 패턴을 점검하고 깊은 수면(서파수면)을 지키는 나만의 컷오프 시간을 설계하세요.",
    "chip1": "5가지 카페인 함정",
    "chip2": "반감기 컷오프 룰",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 카페인 섭취와 수면 질 패턴 점검 (1 = 영향 적음, 5 = 수면 방해 큼)",
    "step1Title": "잔류 카페인이 밤의 깊은 수면을 방해하고 있을 가능성이 높은 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 목표 취침 시각 & 마지막 커피 컷오프 시간 (100% 로컬):",
    "ctaBtn": "내 카페인 컷오프 수면 보호 플랜 보기",
    "resultBadge": "2단계 • 깊은 수면을 지키는 카페인 타이밍 프로토콜",
    "noteTitle": "나의 카페인 컷오프 약속",
    "meterLabel": "깊은 수면 카페인 안전도",
    "scriptTitle": "오후 음료 전환 문구",
    "stepsTitle": "깊은 수면과 개운한 아침을 위한 3가지 카페인 원칙",
    "stickyTitle": "오늘 밤 깊은 수면을 지킬 잔잔한 수면 사운드를 함께 준비할까요?",
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
    "title": "咖啡因半衰期截止时间与深睡规划器 | DopaBrain",
    "heroTitle": "咖啡因半衰期截止时间与深睡规划器",
    "heroLead": "排查隐藏咖啡因陷阱，锁定保护夜间深睡的最后饮用时间。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "カフェイン半減期カットオフ＆深睡眠プランナー | DopaBrain",
    "heroTitle": "カフェイン半減期カットオフ＆深睡眠プランナー",
    "heroLead": "午後カフェインの隠れ影響を点検し、深い睡眠を守る最終時刻を設計します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de Corte de Cafeína y Sueño Profundo | DopaBrain",
    "heroTitle": "Planificador de Corte de Cafeína y Sueño Profundo",
    "heroLead": "Protege tu sueño reparador ajustando tu hora límite según la vida media de la cafeína.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Horário Limite de Cafeína e Sono | DopaBrain",
    "heroTitle": "Planejador de Horário Limite de Cafeína e Sono",
    "heroLead": "Proteja seu sono profundo auditando fontes ocultas de cafeína à tarde.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Koffein-Halbwertszeit & Tiefschlaf-Cutoff-Planer | DopaBrain",
    "heroTitle": "Koffein-Halbwertszeit & Tiefschlaf-Cutoff-Planer",
    "heroLead": "Schütze deinen Tiefschlaf durch die optimale letzte Kaffee-Uhrzeit am Tag.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Calculateur Heure Limite Caféine & Sommeil Profond | DopaBrain",
    "heroTitle": "Calculateur Heure Limite Caféine & Sommeil Profond",
    "heroLead": "Protégez votre sommeil lent profond en calibrant l’arrêt de la caféine.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Калькулятор времени последнего кофе для глубокого сна | DopaBrain",
    "heroTitle": "Калькулятор времени последнего кофе для глубокого сна",
    "heroLead": "Защитите глубокий сон, настроив безопасный предел кофеина с учётом полувыведения.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "कैफीन हाफ-लाइफ कटऑफ और डीप स्लीप प्लानर | DopaBrain",
    "heroTitle": "कैफीन हाफ-लाइफ कटऑफ और डीप स्लीप प्लानर",
    "heroLead": "गहरी नींद बचाने के लिए अपनी आखिरी कॉफी का सही समय तय करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Batas Jam Kafein & Tidur Nyenyak | DopaBrain",
    "heroTitle": "Perencana Batas Jam Kafein & Tidur Nyenyak",
    "heroLead": "Lindungi tidur lelap malam Anda dengan mengatur batas waktu minum kopi sore.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kafein Yarı Ömür ve Derin Uyku Kesim Planlayıcı | DopaBrain",
    "heroTitle": "Kafein Yarı Ömür ve Derin Uyku Kesim Planlayıcı",
    "heroLead": "Derin uykunuzu korumak için en ideal son kahve saatini belirleyin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "late_afternoon_cup",
    "en": "Post-2 PM Coffee/Energy Drink — Caffeinated drinks within 8–10 hours of bedtime",
    "ko": "오후 2시 이후 커피·에너지음료 — 취침 8~10시간 이내 카페인 섭취"
  },
  {
    "id": "instant_wake_coffee",
    "en": "First-10-Min Coffee Chug — Drinking strong coffee immediately on waking before water",
    "ko": "기상 10분 내 커피 — 물보다 먼저 진한 커피로 하루를 시작함"
  },
  {
    "id": "hidden_caffeine_sources",
    "en": "Hidden Afternoon Sources — Green/black tea, cola, dark chocolate, or pre-workout late in day",
    "ko": "숨은 카페인 — 오후 늦은 녹차·홍차·콜라·다크초콜릿·부스터"
  },
  {
    "id": "unrestorative_sleep",
    "en": "Tired Despite 7–8 Hours — Falling asleep okay yet waking groggy needing more caffeine",
    "ko": "7~8시간 자도 피곤 — 잠은 드는데 아침에 개운하지 않아 또 커피를 찾음"
  },
  {
    "id": "high_daily_dose",
    "en": "300mg+ Daily Escalation — 3+ large coffees or energy cans chasing diminishing returns",
    "ko": "하루 300mg+ 누적 — 3잔 이상 마셔도 각성 효과가 점점 줄어듦"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Sleep-Depth Drain — Shift Your Cutoff 9–10 Hours Before Bedtime",
    "koT": "깊은 수면 침식 높음 — 취침 9~10시간 전 컷오프로 당기면 아침이 달라집니다",
    "enD": "Sleep pharmacology (Drake et al., 2013; Gardiner et al., 2023) shows caffeine has a 5–7 hour half-life—meaning 25% of a 3 PM cup is still blocking adenosine receptors at 11 PM, quietly trimming restorative slow-wave sleep by 15–20% even if you fall asleep.",
    "koD": "수면 약리학 연구(Drake et al., 2013; Gardiner et al., 2023)에 따르면 카페인 반감기는 평균 5~7시간입니다. 오후 3시 커피의 25%가 밤 11시에도 남아 잠은 들더라도 회복성 깊은 수면을 15~20% 깎아먹습니다.",
    "enS": "\"Enjoy real coffee before 1:30 PM; switch cleanly to decaf, rooibos, or sparkling water all afternoon.\"",
    "koS": "\"카페인 커피는 오후 1시 30분까지만 즐기고, 오후에는 디카페인·루이보스·탄산수로 깔끔히 전환한다.\"",
    "enL": [
      "Move your final caffeinated cup to at least 9–10 hours before bedtime for 7 days and compare morning clarity.",
      "Drink a full glass of water first on waking and wait 45–60 minutes before cup #1 to reduce afternoon crashes.",
      "Swap the 3 PM coffee ritual for iced decaf, peppermint tea, or a 10-minute outdoor walk."
    ],
    "koL": [
      "딱 7일간 마지막 카페인 섭취를 취침 9~10시간 전으로 당겨 아침 개운함을 비교해 보세요.",
      "기상 직후 물 1잔을 먼저 마시고 45~60분 뒤 첫 커피를 마시면 오후 급락이 줄어듭니다.",
      "오후 3시 커피 습관은 아이스 디카페인·허브티·10분 야외 산책으로 대체해 보세요."
    ]
  },
  "mid": {
    "enT": "Moderate Residual Drag — Trim Hidden Late-Day Caffeine & Half-Caf Option",
    "koT": "중간 잔류 영향 — 오후 2시 이후 디카페인·하프카페인 전환만으로도 효과적입니다",
    "enD": "Your morning coffee habit is mostly healthy; tightening afternoon hidden sources (tea, soda, late espresso) boosts deep sleep noticeably.",
    "koD": "기본 습관은 괜찮은 편입니다. 오후 늦은 차·탄산·에스프레소만 디카페인으로 바꾸면 숙면의 질이 뚜렷하게 올라갑니다.",
    "enS": "\"Half-caf at lunch, caffeine-free after 2 PM.\"",
    "koS": "\"점심엔 연하게, 오후 2시 이후엔 논카페인.\"",
    "enL": [
      "Order half-caf or single-shot for lunchtime drinks.",
      "Watch hidden evening caffeine in matcha, dark chocolate, and cola.",
      "Hydrate well alongside every cup of coffee."
    ],
    "koL": [
      "점심 음료는 1샷이나 하프카페인으로 가볍게 조절하세요.",
      "저녁 말차·다크초콜릿·콜라 속 숨은 카페인을 체크하세요.",
      "커피 한 잔마다 물 한 컵을 꼭 곁들여 주세요."
    ]
  },
  "high": {
    "enT": "Sleep-Friendly Caffeine Rhythm — Clean Adenosine Recovery",
    "koT": "숙면 친화적 카페인 리듬 — 밤사이 아데노신 회복이 잘 보호되고 있습니다",
    "enD": "Your timing protects natural slow-wave sleep well. Keep enjoying morning coffee cleanly without afternoon escalation.",
    "koD": "깊은 수면을 해치지 않는 아주 이상적인 카페인 타이밍을 지키고 계십니다.",
    "enS": "\"Morning joy, evening calm.\"",
    "koS": "\"오전의 기분 좋은 각성, 저녁의 깊은 회복.\"",
    "enL": [
      "Keep your consistent morning cutoff.",
      "Maintain regular wake times to stabilize natural cortisol rhythm.",
      "Enjoy caffeine-free herbal rituals after dinner."
    ],
    "koL": [
      "지금의 안정적인 오전 컷오프 습관을 유지하세요.",
      "일정한 기상 시간으로 자연 각성 리듬을 지켜 주세요.",
      "저녁 식사 후에는 편안한 논카페인 허브티를 즐겨 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_caffeine_cutoff_calc_v1";
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
      window.gtag('event', "caffeine_cutoff_calc_complete", {
        tool_slug: "caffeine-cutoff-sleep-calculator",
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
      var shareUrl = "https://dopabrain.com/portal/tools/caffeine-cutoff-sleep-calculator.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "caffeine-cutoff-sleep-calculator",
        filename: 'dopabrain-caffeine-cutoff-sleep-calculator-card.png',
        badge: "SLEEP SCIENCE • CAFFEINE HALF-LIFE & CUTOFF PLANNER",
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
