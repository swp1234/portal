/* Crowded Grocery Store & Mall Sensory Calm Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Crowded Grocery Store & Mall Sensory Calm Kit | DopaBrain",
    "metaDesc": "Fluorescent aisle glare, loud store radio, 40 cereal choices, and narrow checkout lines making you feel dizzy or irritable in minutes? Pack a low-friction sensory shopping plan locally.",
    "kicker": "HSP & SENSORY CALM • CROWDED SUPERMARKET & MALL SENSORY OVERLOAD KIT",
    "heroTitle": "Crowded Grocery Store & Mall Sensory Calm Kit",
    "heroLead": "Fluorescent aisle glare, loud store radio, 40 cereal choices, and narrow checkout lines making you feel dizzy or irritable in minutes? Pack a low-friction sensory shopping plan locally.",
    "chip1": "5 Aisle Triggers",
    "chip2": "15-Min Loop Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • MAP YOUR STORE SENSORY TRIGGERS (1 = FINE, 5 = OVERWHELMING)",
    "step1Title": "What drains your nervous system fastest inside supermarkets or malls?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My 3 must-buy essentials for this trip so I can exit fast (100% local):",
    "ctaBtn": "Build My Sensory-Safe Shopping Plan",
    "resultBadge": "STEP 2 • YOUR LOW-SENSORY STORE PROTOCOL",
    "noteTitle": "My Fast-Exit Essentials",
    "meterLabel": "Sensory Shopping Buffer",
    "scriptTitle": "Permission Statement Inside Busy Aisles",
    "stepsTitle": "3 Simple Buffers That Cut Store Exhaustion by 70%",
    "stickyTitle": "Curious how strongly bright lights, noise, and crowds affect your baseline?",
    "stickySub": "Take the free 2-Min HSP Sensitivity Check",
    "stickyBtn": "HSP Test →",
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
    "title": "붐비는 대형마트·쇼핑몰 감각 과부하 진정 & 15분 빠른 장보기 키트 | DopaBrain",
    "metaDesc": "눈부신 형광등·시끄러운 매장 방송·수십 가지 선택지·좁은 계산대 줄 때문에 마트만 가면 금세 어지럽고 지치시나요? 15분 만에 편안하게 마치는 감각 보호 장보기 키트를 세팅하세요.",
    "kicker": "HSP 감각 보호 · 붐비는 마트·쇼핑몰 감각 과부하 진정 & 15분 장보기 키트",
    "heroTitle": "붐비는 대형마트·쇼핑몰 감각 과부하 진정 & 15분 빠른 장보기 키트",
    "heroLead": "눈부신 형광등·시끄러운 매장 방송·수십 가지 선택지·좁은 계산대 줄 때문에 마트만 가면 금세 어지럽고 지치시나요? 15분 만에 편안하게 마치는 감각 보호 장보기 키트를 세팅하세요.",
    "chip1": "5가지 매장 자극",
    "chip2": "15분 동선 플랜",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 마트·쇼핑몰 감각 자극 점검 (1 = 무난, 5 = 매우 버거움)",
    "step1Title": "대형마트나 쇼핑몰에서 신경계를 가장 빠르게 지치게 만드는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 장보기에서 꼭 사야 할 핵심 3가지 (빠른 퇴장용, 100% 로컬):",
    "ctaBtn": "내 감각 보호 장보기 플랜 보기",
    "resultBadge": "2단계 • 과자극 없는 편안한 장보기 프로토콜",
    "noteTitle": "빠른 퇴장 핵심 품목",
    "meterLabel": "감각 보호 여유 지수",
    "scriptTitle": "복잡한 매장에서 스스로에게 주는 허락 문장",
    "stepsTitle": "장보기 피로를 70% 줄여 주는 3가지 감각 버퍼",
    "stickyTitle": "빛·소음·인파에 대한 나의 감각 민감도(HSP)를 확인해 볼까요?",
    "stickySub": "무료 2분 HSP 민감성 테스트 바로가기",
    "stickyBtn": "HSP 테스트 →",
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
    "title": "拥挤超市与商场感官过载镇静工具 | DopaBrain",
    "heroTitle": "拥挤超市与商场感官过载镇静工具",
    "heroLead": "缓解刺眼灯光、嘈杂广播与排队焦躁，规划15分钟低耗能采购动线。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "混雑スーパー・商業施設の感覚過負荷ケアキット | DopaBrain",
    "heroTitle": "混雑スーパー・商業施設の感覚過負荷ケアキット",
    "heroLead": "蛍光灯の眩しさや店内騒音、レジ待ちの緊張を和らげる15分買い物プランを作ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit Sensorial para Supermercados Llenos | DopaBrain",
    "heroTitle": "Kit Sensorial para Supermercados Llenos",
    "heroLead": "Reduce mareo por luces, ruido y filas con un plan de compra tranquilo de 15 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit Sensorial para Supermercados Lotados | DopaBrain",
    "heroTitle": "Kit Sensorial para Supermercados Lotados",
    "heroLead": "Alivie luz forte, barulho e tensão na fila com um plano rápido e calmo de 15 min.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Supermarkt- & Einkaufszentrum Reizschutz-Kit | DopaBrain",
    "heroTitle": "Supermarkt- & Einkaufszentrum Reizschutz-Kit",
    "heroLead": "Reduziere Neonlicht-, Lärm- und Kassenstress mit einem ruhigen 15-Min-Einkaufsplan.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Calme Sensoriel Supermarché & Foule | DopaBrain",
    "heroTitle": "Kit Calme Sensoriel Supermarché & Foule",
    "heroLead": "Réduisez néons, bruit et pression en caisse grâce à un parcours apaisé de 15 min.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Антистресс-кит для шумных супермаркетов | DopaBrain",
    "heroTitle": "Антистресс-кит для шумных супермаркетов",
    "heroLead": "Снизьте сенсорную перегрузку от света, шума и очередей планом покупок за 15 минут.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "भीड़भाड़ सुपरमार्केट सेंसरी काम किट | DopaBrain",
    "heroTitle": "भीड़भाड़ सुपरमार्केट सेंसरी काम किट",
    "heroLead": "तेज़ रोशनी, शोर और लाइन के तनाव को 15-मिनट के शांत शॉपिंग प्लान से कम करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Tenang Sensorik Supermarket Ramai | DopaBrain",
    "heroTitle": "Kit Tenang Sensorik Supermarket Ramai",
    "heroLead": "Redakan pusing lampu terang, bising, dan antrean kasir dengan rencana belanja 15 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kalabalık Market Duyusal Aşırı Yük Kiti | DopaBrain",
    "heroTitle": "Kalabalık Market Duyusal Aşırı Yük Kiti",
    "heroLead": "Parlak ışık, gürültü ve kasa gerginliğini 15 dakikalık sakin alışveriş planıyla azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "fluorescent_glare",
    "en": "Overhead Fluorescent Glare — Bright harsh ceiling lights causing eye strain or mild dizziness",
    "ko": "천장 형광등 눈부심 — 강한 매장 조명 아래 있으면 금세 눈이 시리고 멍해짐"
  },
  {
    "id": "audio_clutter",
    "en": "Store Radio & Cart Clatter — Overlapping music, PA announcements, beeping scanners, and chatter",
    "ko": "매장 소음 중첩 — 배경음악·안내 방송·바코드 소리·말소리가 한꺼번에 쏟아짐"
  },
  {
    "id": "aisle_choice_fatigue",
    "en": "Wall-of-Options Paralysis — Freezing in front of 35 brands trying to pick the \"optimal\" one",
    "ko": "선택지 과부하 — 비슷한 제품 30개 앞에서 비교하다가 에너지가 방전됨"
  },
  {
    "id": "checkout_trapped_line",
    "en": "Checkout Line Pressure — Feeling rushed or boxed in while bagging groceries with people behind",
    "ko": "계산대 줄 압박 — 뒷사람 시선 속에서 급하게 물건을 담을 때 심장이 빨라짐"
  },
  {
    "id": "peak_weekend_crowds",
    "en": "Weekend Rush Crowds — Navigating tight cart traffic jams on Saturday afternoon",
    "ko": "주말 피크 인파 — 토요일 오후 카트 정체와 좁은 통로에서 금세 예민해짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Store Sensory Load — Use Earbuds + Ordered List + Off-Peak 15-Min Perimeter Loop",
    "koT": "매장 과자극 높음 — 이어폰·동선순 메모·비혼잡 시간대 15분 루프를 활용하세요",
    "enD": "Supermarkets are literally engineered for sensory bombardment. Wearing noise-dampening earbuds, grouping your list by store zone, and shopping off-peak (or using curbside pickup) turns an exhausting ordeal into a calm 15-minute errand.",
    "koD": "대형마트는 감각 자극이 극대화된 공간입니다. 노이즈캔슬링 이어폰, 코너별 메모, 비혼잡 시간대(또는 픽업/배송)만 써도 지치는 장보기가 15분 만에 편하게 끝납니다.",
    "enS": "\"I am allowed to wear headphones, skip browsing extra aisles, buy my familiar defaults, or use delivery/pickup on low-energy weeks—that is smart energy care, not laziness.\"",
    "koS": "\"이어폰을 끼고, 익숙한 기본 제품만 고르고, 컨디션이 낮은 주에는 배송·픽업을 써도 된다. 게으름이 아니라 현명한 에너지 관리다.\"",
    "enL": [
      "Pop in noise-canceling earbuds (playing gentle rain or silence) + tinted glasses or a brimmed cap to soften fluorescent glare.",
      "Group your short list into 3 zones (Produce -> Protein/Dairy -> Checkout) and stick to familiar brand defaults.",
      "If checkout tension spikes, exhale slowly for 6 counts, grip the cart handle for grounding, and take your time bagging."
    ],
    "koL": [
      "노이즈캔슬링 이어폰(잔잔한 빗소리/무음)과 챙 모자·안경으로 소음과 천장 빛을 부드럽게 줄이세요.",
      "장보기 메모를 3구역(채소→단백질/유제품→계산대)으로 묶고 평소 쓰던 익숙한 브랜드를 바로 집으세요.",
      "계산대 줄에서 긴장되면 카트 손잡이를 느끼며 6초 길게 내쉬고 내 속도로 천천히 담으세요."
    ]
  },
  "mid": {
    "enT": "Moderate Sensory Drain — Group Your List by Zone & Wear Light Earbuds",
    "koT": "중간 감각 피로 — 코너별 메모와 가벼운 이어폰만 챙겨도 훨씬 편해집니다",
    "enD": "Off-peak mornings and a 5-item default list remove almost all in-store decision fatigue.",
    "koD": "한산한 오전 시간대와 기본 장보기 목록 5개만 있어도 피로가 절반 이하로 줄어듭니다.",
    "enS": "\"Short list, calm ears, fast exit.\"",
    "koS": "\"짧은 메모, 편안한 귀, 빠른 퇴장.\"",
    "enL": [
      "Shop weekday mornings or late evenings when aisles are open.",
      "Eat a small snack beforehand so low blood sugar does not amplify sensory stress.",
      "Pause 2 minutes in your car/outside to decompress afterward."
    ],
    "koL": [
      "평일 오전이나 늦은 저녁 등 한산한 시간대를 이용하세요.",
      "공복 저혈당이 예민함을 키우므로 가볍게 먹고 출발하세요.",
      "장보기 직후 2분만 조용히 숨을 고른 뒤 이동하세요."
    ]
  },
  "high": {
    "enT": "Comfortable Store Resilience — Calm Errand Flow",
    "koT": "안정적인 매장 적응력 — 편안한 장보기 흐름",
    "enD": "You navigate busy retail spaces smoothly while keeping sensory energy intact.",
    "koD": "복잡한 매장 환경에서도 감각 에너지를 안정적으로 유지하고 있습니다.",
    "enS": "\"Simple lists keep errands light.\"",
    "koS": "\"간단한 목록이 일상을 가볍게 만든다.\"",
    "enL": [
      "Keep a reusable 10-staples checklist.",
      "Enjoy calm music on your commute home.",
      "Pair errands with a pleasant treat."
    ],
    "koL": [
      "자주 사는 필수 10품목 체크리스트를 재사용하세요.",
      "귀갓길엔 편안한 음악으로 여유를 즐기세요.",
      "장보기 후 작은 보상을 곁들여 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_grocery_sensory_v1";
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
      window.gtag('event', "grocery_sensory_kit_complete", {
        tool_slug: "crowded-grocery-store-sensory-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/crowded-grocery-store-sensory-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "crowded-grocery-store-sensory-kit",
        filename: 'dopabrain-crowded-grocery-store-sensory-kit-card.png',
        badge: "HSP & SENSORY CALM • CROWDED SUPERMARKET & MALL SENSORY OVERLOAD KIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
        accent2: "#0ea5e9"
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
