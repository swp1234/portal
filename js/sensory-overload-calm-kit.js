/* Sensory Overload & HSP 5-Minute Calm Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Sensory Overload & HSP 5-Minute Calm Kit | DopaBrain",
    "metaDesc": "Free 12-language Sensory Overload & HSP Calm Kit. Rate 5 sensory drains (noise, bright lights, crowds, emotional contagion) locally and build a 5-minute low-stimulation reset.",
    "keywords": "sensory overload calm kit, hsp overstimulation reset, highly sensitive person coping tool, noise light overload relief, low stimulation recovery, dopabrain",
    "kicker": "HSP & SENSORY OVERLOAD RECOVERY",
    "heroTitle": "Sensory Overload & HSP 5-Minute Calm Kit",
    "heroLead": "Fluorescent lights buzzing, overlapping voices, constant notifications, and absorbing everyone else’s mood? Rate 5 sensory channels locally to cut the loudest drain in 5 minutes.",
    "chip1": "5 Sensory Channels",
    "chip2": "5m Low-Stim Reset",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK SENSORY SATURATION (1 = CALM, 5 = FLOODED)",
    "step1Title": "Which sensory inputs are flooding your bandwidth right now?",
    "step1Sub": "Your sensitivity is a wiring trait, not a flaw. Everything stays 100% local.",
    "inputLabel": "Optional: 1 sensory input I can dim, mute, or step away from right now (100% local):",
    "inputPlaceholder": "Example: Putting on noise-canceling headphones, dimming overhead light, and 5 mins alone",
    "ctaBtn": "Build 5-Minute Calm Kit",
    "resultBadge": "STEP 2 • YOUR 5-MINUTE SENSORY DECOMPRESSION KIT",
    "noteTitle": "My Immediate Sensory Dimmer Switch",
    "meterLabel": "Remaining Sensory Bandwidth",
    "scriptTitle": "Polite 5-Minute Sensory Break Script",
    "stepsTitle": "3 Fast Ways to Lower Sensory Noise Now",
    "stickyTitle": "Want a full 5-Minute Interactive Sensory Reset timer?",
    "stickySub": "Open our dedicated HSP Sensory Reset workspace right now",
    "stickyBtn": "HSP Reset →",
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
    "title": "HSP·감각 과부하 5분 진정 키트 | DopaBrain",
    "metaDesc": "시끄러운 소음, 눈부신 조명, 겹치는 대화와 타인의 감정까지 한꺼번에 밀려와 머리가 터질 듯한가요? 5가지 감각 과부하 채널을 비공개로 점검하고 5분 저자극 회복 키트를 받으세요.",
    "kicker": "HSP · 감각 과부하 5분 저자극 회복",
    "heroTitle": "HSP·감각 과부하 5분 진정 키트",
    "heroLead": "형광등 불빛, 여러 사람의 목소리, 끊임없는 알림에 신경이 곤두서나요? 5가지 감각 과부하 채널을 로컬에서 점검해 가장 시끄러운 자극부터 5분 만에 꺼보세요.",
    "chip1": "5가지 감각 채널",
    "chip2": "5분 저자극 리셋",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 감각 포화도 점검 (1 = 쾌적, 5 = 포화 초과)",
    "step1Title": "지금 내 신경계를 가장 크게 자극하고 있는 감각은 무엇인가요?",
    "step1Sub": "높은 민감성은 결함이 아니라 정교한 처리 특성입니다. 모든 입력은 기기 안에만 남습니다.",
    "inputLabel": "선택: 지금 바로 줄이거나 잠시 피할 감각 자극 1가지 (100% 로컬):",
    "ctaBtn": "5분 감각 진정 키트 생성",
    "resultBadge": "2단계 • 나의 5분 감각 디컴프레션 키트",
    "noteTitle": "지금 당장 내릴 나의 감각 볼륨 스위치",
    "meterLabel": "남은 감각 처리 여유도",
    "scriptTitle": "눈치 보지 않고 5분 숨 돌리는 정중한 멘트",
    "stepsTitle": "지금 바로 감각 소음을 낮추는 3가지 행동",
    "stickyTitle": "전용 5분 감각 리셋 워크스페이스가 필요하신가요?",
    "stickySub": "HSP 감각 리셋 도구에서 바로 조용한 회복을 시작하세요",
    "stickyBtn": "HSP 리셋 →",
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
    "title": "HSP感官过载5分钟舒缓包 | DopaBrain",
    "heroTitle": "感官过载舒缓包",
    "ctaBtn": "生成5分钟降噪方案",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "HSP・感覚過負荷 5分クールダウン | DopaBrain",
    "heroTitle": "感覚過負荷クールダウン",
    "ctaBtn": "5分回復キットを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Calma Sobrecarga Sensorial | DopaBrain",
    "heroTitle": "Kit Sobrecarga Sensorial",
    "ctaBtn": "Crear kit de 5 minutos",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Calma Sobrecarga Sensorial | DopaBrain",
    "heroTitle": "Kit Sobrecarga Sensorial",
    "ctaBtn": "Criar kit de 5 minutos",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Reizüberflutungs- & HSP-Ruhe-Kit | DopaBrain",
    "heroTitle": "HSP-Reizpausen-Kit",
    "ctaBtn": "5-Min-Ruhe-Kit erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Surcharge Sensorielle HSP | DopaBrain",
    "heroTitle": "Kit Surcharge Sensorielle",
    "ctaBtn": "Créer mon kit 5 min",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор при сенсорной перегрузке | DopaBrain",
    "heroTitle": "Сенсорная разгрузка (5м)",
    "ctaBtn": "Создать набор на 5 мин",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "HSP सेंसरी ओवरलोड 5-मिनट किट | DopaBrain",
    "heroTitle": "सेंसरी ओवरलोड किट",
    "ctaBtn": "5-मिनट किट बनाएं",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Tenang Beban Sensorik HSP | DopaBrain",
    "heroTitle": "Kit Beban Sensorik",
    "ctaBtn": "Buat Kit 5 Menit",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Duyusal Aşırı Yüklenme 5 Dk Kiti | DopaBrain",
    "heroTitle": "Duyusal Sakinleşme Kiti",
    "ctaBtn": "5 Dk Kit Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "sound_noise",
    "en": "Auditory Clutter — Overlapping chatter, background TV, traffic, or notification pings",
    "ko": "청각 과부하 — 겹치는 대화 소리, 배경 소음, 잦은 알림음에 머리가 울림"
  },
  {
    "id": "visual_glare",
    "en": "Visual Glare & Screens — Harsh overhead lighting, cluttered tabs, or rapid motion",
    "ko": "시각 피로 — 눈부신 조명, 복잡한 화면·창, 빠른 움직임에 눈과 머리가 아픔"
  },
  {
    "id": "crowd_pace",
    "en": "Crowds & Multitasking — Being rushed or pulled in 3 directions simultaneously",
    "ko": "인파·멀티태스킹 — 사람이 많거나 여러 요청이 동시에 쏟아져 사고가 멈춤"
  },
  {
    "id": "emo_sponge",
    "en": "Emotional Contagion — Absorbing tension, frustration, or sadness from people nearby",
    "ko": "감정 흡수 — 주변 사람의 짜증·불안·무거운 분위기가 그대로 내 것처럼 스며듦"
  },
  {
    "id": "tactile_body",
    "en": "Physical & Tactile Friction — Tight clothes, temperature discomfort, hunger, or caffeine jitters",
    "ko": "신체·촉각 마찰 — 불편한 옷감, 더위/추위, 공복, 카페인 과다로 몸이 예민함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Sensory Redline — Step Into a 5-Minute Dark/Quiet Cave Immediately",
    "koT": "감각 적색 한계 — 지금 바로 5분 조용한 저자극 공간으로 이동하세요",
    "enD": "Your sensory buffer is overflowing. Trying to keep socializing or making complex decisions right now causes shutdown or snappy irritability—step out for 5 quiet minutes first.",
    "koD": "감각 버퍼가 완전히 넘쳤습니다. 이 상태에서 대화를 이어가거나 결정을 내리면 예민함이나 셧다운으로 이어집니다. 먼저 5분만 자극을 차단하세요.",
    "enS": "\"Excuse me for just 5 minutes—I need a quick quiet breather to reset my focus, then I will be right back.\"",
    "koS": "\"잠깐 5분만 조용히 바람 쐬고 올게요—머리 좀 식히고 바로 돌아와서 이야기 이어가요.\"",
    "enL": [
      "Cut 2 inputs at once: silence phone/put in earplugs AND dim lights or close your eyes for 180 seconds.",
      "Drink cool water and loosen anything tight (collar, watch, posture).",
      "Avoid scrolling during your break—screens add visual noise instead of real rest."
    ],
    "koL": [
      "두 가지 자극을 동시에 끄세요: 이어폰/귀마개로 소리를 줄이고 3분간 조명을 낮추거나 눈을 감으세요.",
      "시원한 물을 한 잔 마시고 목·손목·어깨의 답답한 긴장을 풀어주세요.",
      "쉬는 5분 동안 폰을 보지 마세요—화면은 휴식이 아니라 시각 자극을 더합니다."
    ]
  },
  "mid": {
    "enT": "Elevated Sensory Load — Trim Background Friction Before Depletion",
    "koT": "감각 부하 상승 구간 — 방전되기 전에 배경 소음을 덜어내세요",
    "enD": "You still have steady capacity, though background noise and visual clutter are taxing your nervous system. Small environmental tweaks now protect your evening.",
    "koD": "아직 여유가 있지만 배경 소음과 시각적 어수선함이 조용히 에너지를 깎고 있습니다. 지금 작은 환경 조절을 해주면 저녁 컨디션이 지켜집니다.",
    "enS": "\"Could we move somewhere slightly quieter or handle this one item at a time so I can give you my full attention?\"",
    "koS": "\"조금 더 조용한 곳으로 옮기거나 한 가지씩 차근히 얘기해도 될까요? 그래야 더 잘 집중할 수 있을 것 같아요.\"",
    "enL": [
      "Close extra browser tabs and switch your screen to warm low brightness.",
      "Play gentle steady brown/pink noise or silence to mask unpredictable chatter.",
      "Build a 15-minute solo decompression buffer right after work or social plans."
    ],
    "koL": [
      "열어둔 불필요한 탭을 닫고 화면 밝기를 부드러운 난색으로 낮추세요.",
      "불규칙한 소음을 가리기 위해 잔잔한 브라운/핑크 노이즈나 완전한 정적을 활용하세요.",
      "퇴근이나 모임 직후 15분간 혼자만의 조용한 전환 시간을 미리 비워두세요."
    ]
  },
  "high": {
    "enT": "Balanced Sensory Buffer — Clear Focus & Subtle Depth",
    "koT": "쾌적한 감각 버퍼 — 맑은 집중력과 깊은 통찰이 살아나는 상태",
    "enD": "When stimulation stays well-paced, sensory sensitivity becomes a superpower for creativity, empathy, and noticing detail. Protect your quiet anchors.",
    "koD": "자극이 적정선으로 관리될 때 높은 민감성은 깊은 공감·창의력·디테일 파악의 강점이 됩니다. 지금의 쾌적한 환경 리듬을 유지하세요.",
    "enS": "\"My environment feels calm and balanced today—protecting small quiet pauses keeps me at my best.\"",
    "koS": "\"오늘 환경이 참 편안하네요—중간중간 짧은 정적을 지켜줄 때 내 장점이 가장 잘 발휘돼요.\"",
    "enL": [
      "Keep earplugs or headphones handy as preventive armor before busy transit or cafes.",
      "Protect one low-stimulation hour before bed.",
      "Use white/brown noise gently when deep focus is needed."
    ],
    "koL": [
      "혼잡한 이동이나 카페에 가기 전 예방용으로 이어폰·귀마개를 챙기는 습관을 유지하세요.",
      "취침 전 1시간 저자극 환경을 꾸준히 지켜주세요.",
      "깊은 몰입이 필요할 때 부드러운 화이트/브라운 노이즈를 활용해 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_sensory_kit_v1";
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
      window.gtag('event', "sensory_calm_complete", {
        tool_slug: "sensory-overload-calm-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/sensory-overload-calm-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "sensory-overload-calm-kit",
        filename: 'dopabrain-sensory-overload-calm-kit-card.png',
        badge: "HSP & SENSORY OVERLOAD RECOVERY",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
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
