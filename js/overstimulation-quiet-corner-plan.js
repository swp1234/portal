/* Rapid Home Overstimulation & Quiet-Corner Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Rapid Home Overstimulation & Quiet-Corner Planner | DopaBrain",
    "metaDesc": "Snapping at family because the kitchen fan, bright overheads, and phone pings all hit at once? Audit your 5 loudest home sensory triggers locally and design a 5-minute low-input quiet corner.",
    "kicker": "SENSORY CALM • HOME OVERSTIMULATION QUIET-CORNER PLANNER",
    "heroTitle": "Rapid Home Overstimulation & Quiet-Corner Planner",
    "heroLead": "Snapping at family because the kitchen fan, bright overheads, and phone pings all hit at once? Audit your 5 loudest home sensory triggers locally and design a 5-minute low-input quiet corner.",
    "chip1": "5 Sensory Triggers",
    "chip2": "5-Min Calm Kit",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR LOUDEST HOME SENSORY TRIGGERS (1 = CALM, 5 = OVERWHELMED)",
    "step1Title": "Which environmental inputs stack up and push you over the edge?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The one calm spot & 2 sensory items for my 5-minute quiet corner (100% local):",
    "ctaBtn": "Design My 5-Minute Quiet-Corner Reset",
    "resultBadge": "STEP 2 • YOUR 5-MINUTE SENSORY DECOMPRESSION BLUEPRINT",
    "noteTitle": "My Low-Input Quiet Spot",
    "meterLabel": "Home Sensory Comfort",
    "scriptTitle": "Kind 1-Line Household Boundary Cue",
    "stepsTitle": "3 Fast Environmental Swaps That Cut Overstimulation in Half",
    "stickyTitle": "Curious how strongly your nervous system processes sensory details?",
    "stickySub": "Take the free 2-min HSP Sensitivity Test",
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
    "title": "과자극 순간을 진정시키는 집 안 1평 쉼터·감각 리셋 설계기 | DopaBrain",
    "metaDesc": "주방 환풍기 소리, 눈부신 형광등, 알림음이 한꺼번에 쏟아져 이유 없이 예민해지나요? 5가지 집 안 감각 과부하를 점검하고 5분 만에 신경을 가라앉히는 나만의 1평 쉼터를 설계하세요.",
    "kicker": "감각 진정 · 과자극 집 안 1평 쉼터(콰이어트 코너) 설계기",
    "heroTitle": "과자극 순간을 진정시키는 집 안 1평 쉼터·감각 리셋 설계기",
    "heroLead": "주방 환풍기 소리, 눈부신 형광등, 알림음이 한꺼번에 쏟아져 이유 없이 예민해지나요? 5가지 집 안 감각 과부하를 점검하고 5분 만에 신경을 가라앉히는 나만의 1평 쉼터를 설계하세요.",
    "chip1": "5가지 감각 과부하",
    "chip2": "5분 진정 키트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 집 안에서 신경을 가장 거슬리게 하는 감각 자극 (1 = 편안, 5 = 과부하)",
    "step1Title": "동시에 겹치면 금방 짜증·피로가 치솟는 실내 감각 자극은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 나만의 5분 쉼터 자리 & 진정 소품 2가지 (100% 로컬):",
    "ctaBtn": "내 집 안 5분 감각 진정 쉼터 플랜 보기",
    "resultBadge": "2단계 • 5분 감각 감압 & 콰이어트 코너 설계도",
    "noteTitle": "나의 저자극 쉼터 세팅",
    "meterLabel": "실내 감각 쾌적도",
    "scriptTitle": "가족·동거인에게 부드럽게 쓰는 1줄 안내",
    "stepsTitle": "실내 과자극을 절반으로 줄이는 3가지 환경 전환",
    "stickyTitle": "나의 신경계가 빛·소리·자극에 얼마나 민감한지 확인해 볼까요?",
    "stickySub": "무료 2분 HSP 초민감성 테스트 진행하기",
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
    "title": "居家感官过载与5分钟安静角落规划器 | DopaBrain",
    "heroTitle": "居家感官过载与5分钟安静角落规划器",
    "heroLead": "排查灯光与噪音叠加压力，打造迅速平复神经的居家低刺激角落。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "自宅の感覚過負荷・クワイエットコーナー設計 | DopaBrain",
    "heroTitle": "自宅の感覚過負荷・クワイエットコーナー設計",
    "heroLead": "照明・生活音の過刺激を点検し、5分で神経を休める静かな居場所を作ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de Rincón Tranquilo contra Sobreestimulación | DopaBrain",
    "heroTitle": "Planificador de Rincón Tranquilo contra Sobreestimulación",
    "heroLead": "Reduce el ruido y brillo en casa con un refugio sensorial de 5 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Cantinho Calmo contra Superestimulação | DopaBrain",
    "heroTitle": "Planejador de Cantinho Calmo contra Superestimulação",
    "heroLead": "Alivie barulho e excesso de luz em casa com um refúgio sensorial de 5 min.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Reizüberflutung-Zuhause & Ruhe-Ecken-Planer | DopaBrain",
    "heroTitle": "Reizüberflutung-Zuhause & Ruhe-Ecken-Planer",
    "heroLead": "Entlaste dein Nervensystem daheim mit einem 5-Minuten-Reizschutz-Platz.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Coin Calme Anti-Surcharge Sensorielle | DopaBrain",
    "heroTitle": "Planificateur Coin Calme Anti-Surcharge Sensorielle",
    "heroLead": "Apaisez bruit et lumières vives à la maison avec un sas calme de 5 minutes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План «тихого уголка» дома при сенсорной перегрузке | DopaBrain",
    "heroTitle": "План «тихого уголка» дома при сенсорной перегрузке",
    "heroLead": "Снизьте шум и яркий свет дома, создав 5-минутную зону спокойствия.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "होम ओवरस्टिमुलेशन और क्वाइट-कॉर्नर प्लानर | DopaBrain",
    "heroTitle": "होम ओवरस्टिमुलेशन और क्वाइट-कॉर्नर प्लानर",
    "heroLead": "शोर व तेज़ रोशनी से राहत पाने के लिए 5-मिनट का शांत कोना तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Sudut Tenang Anti Overstimulasi Rumah | DopaBrain",
    "heroTitle": "Perencana Sudut Tenang Anti Overstimulasi Rumah",
    "heroLead": "Redakan kebisingan dan silau di rumah dengan sudut tenang 5 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Evde Aşırı Uyarılma ve Sessiz Köşe Planlayıcı | DopaBrain",
    "heroTitle": "Evde Aşırı Uyarılma ve Sessiz Köşe Planlayıcı",
    "heroLead": "Gürültü ve parlak ışığı azaltıp 5 dakikalık sakin bir dinlenme köşesi kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "harsh_overhead_light",
    "en": "Harsh Overhead Glare — Cool-white ceiling LEDs running at night",
    "ko": "눈부신 천장 직사광 — 저녁에도 차가운 백색 형광등이 환하게 켜져 있음"
  },
  {
    "id": "layered_noise_hum",
    "en": "Layered Background Noise — TV, appliances, notifications, and overlapping chatter",
    "ko": "겹치는 배경 소음 — TV·가전 소음·알림음·대화가 동시에 울림"
  },
  {
    "id": "visual_pile_clutter",
    "en": "Visual Clutter Density — Crowded counters and open piles pulling constant micro-attention",
    "ko": "시각적 어지러움 — 시야에 잡동사니와 미처리 물건이 가득함"
  },
  {
    "id": "uncomfortable_clothes",
    "en": "Tactile & Clothing Irritation — Tight waistbands, scratchy tags, or stuffy room temp",
    "ko": "촉각·온도 불쾌감 — 답답한 옷·실내 더위·건조함이 신경을 긁음"
  },
  {
    "id": "zero_transition_buffer",
    "en": "No Arrival Buffer — Jumping straight from commute/work into chores and requests",
    "ko": "귀가 완충 부재 — 퇴근하자마자 5분도 못 쉬고 바로 요청과 집안일에 투입됨"
  }
];
  var TIERS = {
  "low": {
    "enT": "Acute Sensory Stacking — Switch Off Overhead Glare & Claim 10 Quiet Minutes",
    "koT": "감각 과부하 누적 — 지금 천장등을 끄고 10분간 저자극 코너로 대피하세요",
    "enD": "Sensory-processing research (Aron, 1997; Dunn, 2001) shows irritation during overstimulation is a physiological threshold signal, not a character flaw. Lowering just 2 sensory channels (light + sound) rapidly calms sympathetic arousal.",
    "koD": "감각처리 연구(Aron, 1997; Dunn, 2001)에 따르면 과자극 시의 예민함은 성격 문제가 아니라 신경계 한계 신호입니다. 빛과 소리 2개 채널만 동시에 낮춰도 교감신경 흥분이 빠르게 가라앉습니다.",
    "enS": "\"My senses are maxed out right now—I’m taking 10 quiet minutes with a warm lamp so I can come back kind and present.\"",
    "koS": "\"지금 감각이 꽉 차서 딱 10분만 조용한 방에서 숨 돌리고 밝은 얼굴로 다시 올게.\"",
    "enL": [
      "Switch off cool overhead ceiling lights after sunset and use 1 warm 2700K floor/desk lamp.",
      "Keep earplugs or noise-canceling headphones in one dedicated spot for instant sound relief.",
      "Build a 1-chair \"quiet corner\" with soft fabric, water, and zero screens for a 10-minute post-work buffer."
    ],
    "koL": [
      "해 진 뒤에는 차가운 천장등을 끄고 따뜻한 전구색(2700K) 스탠드 1개만 켜 두세요.",
      "귀마개나 노이즈캔슬링 이어폰을 늘 같은 자리에 두어 필요할 때 3초 만에 착용하세요.",
      "퇴근 후 10분간 화면 없이 앉을 수 있는 1인 의자·쿠션·물컵 쉼터를 정해 두세요."
    ]
  },
  "mid": {
    "enT": "Moderate Sensory Friction — Tame Evening Lighting & Noise Layers",
    "koT": "중간 감각 마찰 — 저녁 조명 톤 다운과 배경 소음 정리만 해도 확 편안해집니다",
    "enD": "Your home baseline is fairly steady; turning off unused background media and softening evening light prevents end-of-day irritability.",
    "koD": "전반적으로 무난하지만 저녁 조명과 배경 소음만 정리해도 하루 끝 피로감이 크게 줄어듭니다.",
    "enS": "\"One calm sound source, one warm lamp after 8 PM.\"",
    "koS": "\"밤 8시 이후엔 따뜻한 조명 하나, 잔잔한 소리 하나.\"",
    "enL": [
      "Mute background TV/videos when nobody is actively watching.",
      "Clear one small visual landing zone (desk or dining table) each evening.",
      "Change into soft, comfortable clothes immediately upon getting home."
    ],
    "koL": [
      "아무도 안 보는 배경 TV·영상 소리는 습관적으로 꺼 두세요.",
      "저녁마다 시선이 가장 자주 닿는 테이블 한 구역만 깔끔히 비우세요.",
      "귀가 즉시 조이지 않는 부드러운 홈웨어로 갈아입으세요."
    ]
  },
  "high": {
    "enT": "Restorative Sensory Sanctuary — Calm & Regulated Environment",
    "koT": "편안한 감각 안식처 — 신경계가 잘 회복되는 공간입니다",
    "enD": "Your home setup naturally supports nervous-system recovery. Keep honoring quiet transitions on busy weeks.",
    "koD": "집 안 환경이 신경계 회복을 아주 잘 돕고 있습니다. 바쁜 주간에도 이 고요한 완충 습관을 지켜 나가세요.",
    "enS": "\"My home is designed to recharge my nervous system.\"",
    "koS": "\"내 공간은 신경계를 부드럽게 충전하는 안식처다.\"",
    "enL": [
      "Keep evening light warm and low-glare.",
      "Preserve your 10-minute arrival decompression ritual.",
      "Refresh calming scents or indoor greenery seasonally."
    ],
    "koL": [
      "저녁의 따뜻한 간접 조명 습관을 유지하세요.",
      "귀가 후 10분 조용한 전환 시간을 계속 지켜 주세요.",
      "계절에 맞는 은은한 향이나 식물로 공간의 생기를 더해 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_quiet_corner_plan_v1";
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
      window.gtag('event', "quiet_corner_plan_complete", {
        tool_slug: "overstimulation-quiet-corner-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/overstimulation-quiet-corner-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "overstimulation-quiet-corner-plan",
        filename: 'dopabrain-overstimulation-quiet-corner-plan-card.png',
        badge: "SENSORY CALM • HOME OVERSTIMULATION QUIET-CORNER PLANNER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
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
