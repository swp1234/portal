/* Highway & Bridge Driving Anxiety Grounding Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Highway & Bridge Driving Anxiety Grounding Kit | DopaBrain",
    "metaDesc": "Palms sweating at highway merge ramps, bridges, or fast-lane traffic? Audit 5 driving-anxiety triggers BEFORE driving and build a calm right-lane, exit-ladder confidence plan locally.",
    "kicker": "ANXIETY RELIEF • HIGHWAY & BRIDGE DRIVING CALM KIT",
    "heroTitle": "Highway & Bridge Driving Anxiety Grounding Kit",
    "heroLead": "Palms sweating at highway merge ramps, bridges, or fast-lane traffic? Audit 5 driving-anxiety triggers BEFORE driving and build a calm right-lane, exit-ladder confidence plan locally.",
    "chip1": "5 Road Triggers",
    "chip2": "Graded Exit Ladder",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR DRIVING ANXIETY TRIGGERS (PREP BEFORE DRIVING!)",
    "step1Title": "Which road situation spikes tension most before or during a drive?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One tiny 1-exit practice route I can try on a quiet weekend morning (100% local):",
    "ctaBtn": "Build My Pre-Drive Calm & Exit-Ladder Plan",
    "resultBadge": "STEP 2 • YOUR PRE-DRIVE GROUNDING & GRADED EXPOSURE PLAN",
    "noteTitle": "My Low-Traffic 1-Exit Practice Route",
    "meterLabel": "Driving Calm Readiness",
    "scriptTitle": "Pre-Drive Steering-Wheel Grounding Cue",
    "stepsTitle": "3 Safe CBT Habits That Rebuild Highway Confidence",
    "stickyTitle": "Want to map how your nervous system responds to trapped-space fears?",
    "stickySub": "Take the free Anxiety Type Test next",
    "stickyBtn": "Anxiety Test →",
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
    "title": "고속도로·터널·교량 운전 불안 진정 & 단계별 자신감 키트 | DopaBrain",
    "metaDesc": "고속도로 합류 구간·터널·큰 다리만 떠올려도 손에 땀이 나고 핸들을 꽉 쥐게 되나요? 운전 전 5가지 운전 불안을 점검하고 안전한 1~2구간 점진적 노출 플랜을 세워 보세요.",
    "kicker": "불안 완화 · 고속도로·교량 운전 공포 진정 & 점진 노출 키트",
    "heroTitle": "고속도로·터널·교량 운전 불안 진정 & 단계별 자신감 키트",
    "heroLead": "고속도로 합류 구간·터널·큰 다리만 떠올려도 손에 땀이 나고 핸들을 꽉 쥐게 되나요? 운전 전 5가지 운전 불안을 점검하고 안전한 1~2구간 점진적 노출 플랜을 세워 보세요.",
    "chip1": "5가지 운전 불안",
    "chip2": "단계별 출구 사다리",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 운전 전 미리 점검하는 도로 불안 요소 (반드시 주행 전 확인)",
    "step1Title": "주행 전이나 도로 위에서 긴장을 가장 크게 올리는 상황은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 한적한 주말 오전에 연습해 볼 1구간 짧은 코스 (100% 로컬):",
    "ctaBtn": "내 주행 전 안심 & 1구간 연습 플랜 보기",
    "resultBadge": "2단계 • 주행 전 안심 세팅 & 단계별 자신감 프로토콜",
    "noteTitle": "한적한 시간대 1구간 연습 코스",
    "meterLabel": "주행 평온 준비도",
    "scriptTitle": "출발 전 운전석에서 되뇌는 안심 앵커",
    "stepsTitle": "고속도로·교량 자신감을 안전하게 되찾는 3가지 CBT 습관",
    "stickyTitle": "긴장 유발 패턴을 무료 2분 불안 유형 테스트로 확인해 볼까요?",
    "stickySub": "무료 2분 불안 유형 테스트 바로가기",
    "stickyBtn": "불안 유형 →",
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
    "title": "高速与桥梁驾驶焦虑安抚与阶梯练习包 | DopaBrain",
    "heroTitle": "高速与桥梁驾驶焦虑安抚与阶梯练习包",
    "heroLead": "出发前规划右侧车道平静锚点与周末单出口渐进练习，安全重建驾驶信心。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "高速道路・橋梁の運転不安ケア＆1区間練習プラン | DopaBrain",
    "heroTitle": "高速道路・橋梁の運転不安ケア＆1区間練習プラン",
    "heroLead": "運転前の事前準備で右車線安心アンカーと週末1区間ステップアップを作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Calma para Ansiedad al Conducir en Autopista | DopaBrain",
    "heroTitle": "Kit de Calma para Ansiedad al Conducir en Autopista",
    "heroLead": "Prepara antes de arrancar tu plan de carril derecho y práctica gradual de 1 salida.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Calma para Medo de Dirigir em Rodovias e Pontes | DopaBrain",
    "heroTitle": "Kit de Calma para Medo de Dirigir em Rodovias e Pontes",
    "heroLead": "Monte antes de sair um plano seguro de faixa direita e exposição gradual de 1 saída.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Autobahn- & Brücken-Fahrangst Ruhe-Kit | DopaBrain",
    "heroTitle": "Autobahn- & Brücken-Fahrangst Ruhe-Kit",
    "heroLead": "Plane vor der Fahrt entspannt deine Rechtsfahr-Anker und 1-Ausfahrt-Übungsschritte.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Calme Peur de Conduire sur Autoroute & Ponts | DopaBrain",
    "heroTitle": "Kit Calme Peur de Conduire sur Autoroute & Ponts",
    "heroLead": "Préparez avant le départ vos repères voie de droite et votre palier progressif 1 sortie.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор спокойствия при страхе вождения по трассе и мостам | DopaBrain",
    "heroTitle": "Набор спокойствия при страхе вождения по трассе и мостам",
    "heroLead": "Подготовьте до поездки план правой полосы и пошаговую практику на 1 съезд.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "हाईवे और ब्रिज ड्राइविंग चिंता शांत किट | DopaBrain",
    "heroTitle": "हाईवे और ब्रिज ड्राइविंग चिंता शांत किट",
    "heroLead": "ड्राइविंग से पहले शांत लेन एंकर और 1-एग्ज़िट अभ्यास सीढ़ी तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Tenang Cemas Mengemudi di Tol & Jembatan | DopaBrain",
    "heroTitle": "Kit Tenang Cemas Mengemudi di Tol & Jembatan",
    "heroLead": "Siapkan sebelum berangkat rencana jalur tenang dan latihan bertahap 1 pintu keluar.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Otoyol ve Köprü Sürüş Kaygısı Sakinlik Kiti | DopaBrain",
    "heroTitle": "Otoyol ve Köprü Sürüş Kaygısı Sakinlik Kiti",
    "heroLead": "Sürüş öncesi sağ şerit sakinlik planı ve 1 çıkışlık kademeli güven adımları kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "trapped_between_exits",
    "en": "Trapped-Between-Exits Fear — Worrying \"what if I panic and can’t pull over right away?\"",
    "ko": "출구 사이 고립 불안 — \"중간에 심장이 뛰면 바로 못 세우면 어쩌지?\" 하는 공포"
  },
  {
    "id": "merge_fast_lanes",
    "en": "High-Speed Merging & Trucks — Tensing shoulders around heavy trucks or fast highway traffic",
    "ko": "고속 합류·대형차 긴장 — 합류 구간이나 큰 화물차 옆에서 어깨가 바짝 굳음"
  },
  {
    "id": "bridges_tunnels",
    "en": "Bridges, Overpasses & Tunnels — Feeling dizzy or hyper-aware of heights and enclosed lanes",
    "ko": "교량·고가·터널 어지러움 — 높은 다리나 긴 터널에서 시야가 좁아지고 답답함"
  },
  {
    "id": "white_knuckle_grip",
    "en": "White-Knuckle Grip & Shallow Breath — Gripping the wheel hard and holding breath without realizing",
    "ko": "핸들 꽉 쥐기·얕은 호흡 — 무의식중에 핸들을 힘껏 쥐고 숨을 얕게 쉼"
  },
  {
    "id": "avoidance_shrink",
    "en": "Shrinking Driving Radius — Taking 45-min detours or avoiding trips entirely to stay safe",
    "ko": "운전 반경 축소 — 우회도로만 고집하거나 외출 자체를 피하게 됨"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Road Anxiety — Use Quiet-Hour 1-Exit Reps, Right-Lane Pace & Cool AC Air (Prep Parked Only!)",
    "koT": "운전 불안 높음 — 한적한 시간 1구간 연습 + 우측 차로 정속 + 시원한 송풍 세팅을 활용하세요",
    "enD": "CBT exposure therapy for driving anxiety (Taylor et al.) shows avoidance keeps fear growing, while short, calm, low-traffic 1-exit drives with relaxed grip and cool airflow retrain your nervous system safely. Always plan while parked—never look at screens while driving.",
    "koD": "운전 불안 CBT 노출 연구에 따르면 회피가 길어질수록 공포가 커집니다. 차가 적은 시간대에 우측 차로로 딱 1개 출구만 왕복하는 짧은 성공 경험이 뇌의 안전 회로를 빠르게 복구합니다(모든 점검은 반드시 주차 상태에서!).",
    "enS": "\"I stay calmly in the right lane at a safe speed, keep my grip soft, breathe out slowly, and the next exit is always just minutes away.\"",
    "koS": "\"우측 차로에서 내 안전한 속도로 달린다. 손힘을 풀고 길게 내쉬면 다음 출구는 늘 몇 분 안에 나온다.\"",
    "enL": [
      "Before shifting out of Park: set GPS audio-only, aim cool AC vent toward your face, and cue a familiar calm podcast/playlist.",
      "Loosen your wheel grip slightly, drop your shoulders, and focus eyes smoothly down the center of your lane—not on rear bumpers.",
      "Practice one quiet Sunday morning 1-exit highway hop and celebrate the rep so your radius expands step by step."
    ],
    "koL": [
      "출발 전 주차 상태에서 내비 음성 안내·시원한 에어컨 송풍·익숙한 라디오/음악을 미리 세팅하세요.",
      "주행 중엔 어깨를 내리고 핸들 힘을 살짝 풀며, 앞차 범퍼가 아니라 차로 먼 중앙을 부드럽게 바라보세요.",
      "한적한 주말 오전 1개 출구만 왕복하는 짧은 연습을 반복하며 안전 반경을 넓혀 가세요."
    ]
  },
  "mid": {
    "enT": "Manageable Road Nerves — Preview Route Map Ahead & Own the Right Lane",
    "koT": "가벼운 도로 긴장 — 출발 전 합류·출구 미리 보기와 우측 차로 정속으로 충분합니다",
    "enD": "Knowing which exit lane to hold ahead of time removes 80% of split-second road stress.",
    "koD": "어느 차로로 빠질지만 출발 전에 미리 익혀 두어도 순간 긴장의 80%가 사라집니다.",
    "enS": "\"No rush to match fast lanes—steady, predictable driving is safest.\"",
    "koS": "\"추월 차로 속도에 맞출 필요 없다. 일정하고 예측 가능한 주행이 가장 안전하다.\"",
    "enL": [
      "Preview tricky merges on street view while parked at home.",
      "Leave 10 minutes early so time pressure never spikes adrenaline.",
      "Keep cool water handy for red lights or rest stops."
    ],
    "koL": [
      "복잡한 합류·분기점은 집에서 출발 전에 미리 지도로 한 번 확인하세요.",
      "10분 일찍 출발해 시간 압박이 운전 긴장에 겹치지 않게 하세요.",
      "휴게소나 정차 시 마실 시원한 물을 챙겨 두세요."
    ]
  },
  "high": {
    "enT": "Steady Confident Driver — Calm Focus & Safe Margin",
    "koT": "여유로운 안전 운전 — 차분한 시야와 여유를 잘 유지 중입니다",
    "enD": "You keep steady posture, calm breathing, and safe following distances on the road.",
    "koD": "안정된 자세·호흡·안전거리로 편안하게 도로를 다루고 있습니다.",
    "enS": "\"Calm attention and generous following distance make every trip smooth.\"",
    "koS": "\"차분한 시야와 넉넉한 안전거리가 모든 이동을 평온하게 만든다.\"",
    "enL": [
      "Keep preserving generous following margins.",
      "Take a 5-minute stretch break every 2 hours on road trips.",
      "Enjoy stress-free music or audiobooks safely."
    ],
    "koL": [
      "넉넉한 앞차 간격과 여유 출발 습관을 유지하세요.",
      "장거리 주행 시 2시간마다 5분 스트레칭 휴식을 챙기세요.",
      "안전하게 오디오북이나 음악과 함께 이동을 즐기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_driving_highway_calm_v1";
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
      window.gtag('event', "driving_highway_calm_complete", {
        tool_slug: "driving-highway-anxiety-calm-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/driving-highway-anxiety-calm-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "driving-highway-anxiety-calm-kit",
        filename: 'dopabrain-driving-highway-anxiety-calm-kit-card.png',
        badge: "ANXIETY RELIEF • HIGHWAY & BRIDGE DRIVING CALM KIT",
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
