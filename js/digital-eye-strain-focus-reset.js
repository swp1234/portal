/* Digital Eye Strain & 20-20-20 Focus Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Digital Eye Strain & 20-20-20 Focus Reset | DopaBrain",
    "metaDesc": "Dry eyes, brow tension, or afternoon brain fog after hours of close screens? Audit 5 visual-ergonomic stressors locally and run a 60-second panoramic focus reset.",
    "kicker": "VISUAL FATIGUE • 20-20-20 FOCUS RESET",
    "heroTitle": "Digital Eye Strain & 20-20-20 Focus Reset",
    "heroLead": "Dry eyes, brow tension, or afternoon brain fog after hours of close screens? Audit 5 visual-ergonomic stressors locally and run a 60-second panoramic focus reset.",
    "chip1": "5 Visual Stressors",
    "chip2": "20-20-20 Reset",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT SCREEN & VISUAL FATIGUE FACTORS (1 = LOW, 5 = HIGH)",
    "step1Title": "What is straining your eyes and visual focus right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The distant landmark (6m+ away) I will gaze at every 20 minutes (100% local):",
    "ctaBtn": "Generate My Visual Focus Reset",
    "resultBadge": "STEP 2 • YOUR 60-SECOND VISUAL RECOVERY PROTOCOL",
    "noteTitle": "My 20-20-20 Distant Focal Landmark",
    "meterLabel": "Visual Comfort & Clarity",
    "scriptTitle": "60-Second Panoramic Vision Reset Cue",
    "stepsTitle": "3 Immediate Moves to Relieve Screen Fatigue",
    "stickyTitle": "Want to check your visual contrast sensitivity?",
    "stickySub": "Try the free Color Sensitivity Check next",
    "stickyBtn": "Color Check →",
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
    "title": "디지털 눈 피로·20-20-20 시야 집중 리셋 | DopaBrain",
    "metaDesc": "장시간 모니터·스마트폰 사용 후 눈이 뻑뻑하고 미간 긴장과 오후 멍함이 몰려오나요? 5가지 시각 피로 요인을 점검하고 60초 원거리 시야 리셋을 실행하세요.",
    "kicker": "디지털 눈 피로 · 20-20-20 시야 집중 리셋",
    "heroTitle": "디지털 눈 피로·20-20-20 시야 집중 리셋",
    "heroLead": "장시간 모니터·스마트폰 사용 후 눈이 뻑뻑하고 미간 긴장과 오후 멍함이 몰려오나요? 5가지 시각 피로 요인을 점검하고 60초 원거리 시야 리셋을 실행하세요.",
    "chip1": "5가지 시각 피로",
    "chip2": "20-20-20 리셋",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 화면·시각 피로 요인 점검 (1 = 낮음, 5 = 높음)",
    "step1Title": "지금 눈과 시각 집중력을 가장 지치게 하는 환경 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 20분마다 20초씩 바라볼 6m 이상 먼 곳의 목표물 (100% 로컬):",
    "ctaBtn": "내 눈 피로·집중 리셋 플랜 만들기",
    "resultBadge": "2단계 • 60초 시각·집중 회복 프로토콜",
    "noteTitle": "나의 20-20-20 원거리 휴식 지점",
    "meterLabel": "시각 쾌적도·선명도",
    "scriptTitle": "60초 파노라마 시야 이완 가이드",
    "stepsTitle": "화면 피로를 바로 덜어주는 3가지 행동",
    "stickyTitle": "나의 색채 대비 민감도와 시각 인지를 점검해 볼까요?",
    "stickySub": "무료 색감·시각 변별력 테스트 바로 해보기",
    "stickyBtn": "시각 테스트 →",
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
    "title": "数字视疲劳与 20-20-20 护眼专注重置 | DopaBrain",
    "heroTitle": "数字视疲劳与 20-20-20 护眼专注重置",
    "heroLead": "排查5大屏幕用眼负担，执行60秒远眺视野放松，缓解下午脑雾。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "デジタル眼精疲労＆20-20-20リセット | DopaBrain",
    "heroTitle": "デジタル眼精疲労＆20-20-20リセット",
    "heroLead": "画面疲れの5要因を点検し、60秒の遠景フォーカス回復プロトコルを実行します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reset de Fatiga Visual 20-20-20 y Foco | DopaBrain",
    "heroTitle": "Reset de Fatiga Visual 20-20-20 y Foco",
    "heroLead": "Audita 5 factores de fatiga por pantalla y realiza un descanso visual panorámico de 60s.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Fadiga Visual 20-20-20 e Foco | DopaBrain",
    "heroTitle": "Reset de Fadiga Visual 20-20-20 e Foco",
    "heroLead": "Audite 5 estressores de tela e faça um descanso visual panorâmico de 60 segundos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Digital-Eye-Strain & 20-20-20 Fokus-Reset | DopaBrain",
    "heroTitle": "Digital-Eye-Strain & 20-20-20 Fokus-Reset",
    "heroLead": "Prüfe 5 Bildschirm-Belastungen und nutze einen 60-Sekunden-Fernblick-Reset.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Fatigue Visuelle 20-20-20 & Focus | DopaBrain",
    "heroTitle": "Reset Fatigue Visuelle 20-20-20 & Focus",
    "heroLead": "Évaluez 5 facteurs de fatigue écran et faites une pause panoramique de 60 secondes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс усталости глаз 20-20-20 и фокуса | DopaBrain",
    "heroTitle": "Сброс усталости глаз 20-20-20 и фокуса",
    "heroLead": "Проверьте 5 факторов усталости от экрана и сделайте 60-секундную разгрузку зрения.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "डिजिटल आई स्ट्रेन व 20-20-20 फोकस रीसेट | DopaBrain",
    "heroTitle": "डिजिटल आई स्ट्रेन व 20-20-20 फोकस रीसेट",
    "heroLead": "5 स्क्रीन थकान कारण जांचें और 60-सेकंड का पैनोरमिक विज़ुअल ब्रेक लें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Lelah Mata Digital 20-20-20 | DopaBrain",
    "heroTitle": "Reset Lelah Mata Digital 20-20-20",
    "heroLead": "Audit 5 pemicu kelelahan layar dan lakukan relaksasi pandang jauh 60 detik.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Dijital Göz Yorgunluğu ve 20-20-20 Sıfırlama | DopaBrain",
    "heroTitle": "Dijital Göz Yorgunluğu ve 20-20-20 Sıfırlama",
    "heroLead": "5 ekran yorgunluğu etkenini kontrol edin ve 60 saniyelik uzak odak molası verin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "long_close_focus",
    "en": "Unbroken Close Focus — Staring at a screen 45+ minutes without looking far away",
    "ko": "연속 근거리 응시 — 먼 곳을 보지 않고 45분 이상 계속 화면 집중"
  },
  {
    "id": "low_blink",
    "en": "Reduced Blinking & Dryness — Feeling gritty, tired, or squinting at small text",
    "ko": "눈 깜빡임 감소 — 눈이 뻑뻑하거나 작은 글씨에 미간을 찌푸림"
  },
  {
    "id": "glare_contrast",
    "en": "Harsh Glare or Dark Room — Bright screen in dim room or overhead window glare",
    "ko": "눈부심·조명 불균형 — 어두운 방의 밝은 화면 또는 강한 빛 반사"
  },
  {
    "id": "close_distance",
    "en": "Leaning Too Close — Screen closer than arm’s length or phone held near chin",
    "ko": "지나치게 가까운 거리 — 팔 길이보다 가깝게 모니터·폰을 봄"
  },
  {
    "id": "neck_jaw_lock",
    "en": "Forward-Head Tension — Tight shoulders, jaw, or brow paired with screen work",
    "ko": "거북목·턱 긴장 — 화면에 집중하며 어깨·턱·미간에 힘이 들어감"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Visual Fatigue — Step Away for a 60-Second Panoramic Eye Reset Now",
    "koT": "시각 피로 누적 — 지금 바로 60초 원거리 파노라마 휴식이 필요합니다",
    "enD": "Sustained close-up focus locks your ciliary eye muscles and narrows autonomic alertness. Widening your gaze to distant scenery releases eye strain and mental tunnel vision together.",
    "koD": "장시간 근거리 응시는 눈의 조절근을 긴장시키고 뇌의 피로감까지 키웁니다. 먼 풍경으로 시야를 넓히면 눈의 긴장과 머리의 답답함이 함께 풀립니다.",
    "enS": "\"Soften the brow, blink slowly 10 times, look 6 meters away for 20 seconds, and notice your peripheral edges without moving your eyes.\"",
    "koS": "\"미간 힘을 풀고 천천히 10번 깜빡인 뒤, 6m 이상 먼 곳을 20초간 바라보며 양옆 주변 시야까지 부드럽게 느껴보세요.\"",
    "enL": [
      "Look at a point at least 6 meters (20 feet) away for 20 full seconds and do 10 deliberate full blinks.",
      "Increase browser zoom to 110–125% and match screen brightness to room light.",
      "Drop your shoulders, unclench your jaw, and place screens an arm’s length away."
    ],
    "koL": [
      "지금 6m 이상 먼 지점을 20초간 바라보며 눈을 천천히 10번 완전히 깜빡이세요.",
      "브라우저 글씨 크기를 110~125%로 키우고 화면 밝기를 실내 조명과 맞추세요.",
      "어깨와 턱 힘을 빼고 모니터를 팔 길이만큼 떨어뜨려 배치하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Screen Strain — Anchor 20-20-20 Pauses to Natural Breakpoints",
    "koT": "중간 화면 피로 — 작업 전환마다 20초 원거리 보기를 연결하세요",
    "enD": "Your visual setup is mostly fine, and pairing brief far-gaze resets with water sips will keep afternoon focus noticeably sharper.",
    "koD": "기본 환경은 무난합니다. 물 한 모금 마실 때마다 20초 먼 곳 보기를 묶어두면 오후 집중력이 훨씬 오래 유지됩니다.",
    "enS": "\"Every sip of water is my cue to look far away and relax my eyes.\"",
    "koS": "\"물 한 모금 마실 때마다 먼 곳을 20초 바라보며 눈을 쉬게 해줄게.\"",
    "enL": [
      "Look far away for 20 seconds whenever a file saves, loads, or a call ends.",
      "Turn on warm evening color temperature 2 hours before sleep.",
      "Keep a small glass of water beside your desk to encourage hydration and blinking."
    ],
    "koL": [
      "회의가 끝나거나 작업이 전환될 때마다 20초간 창밖이나 먼 곳을 보세요.",
      "취침 2시간 전에는 야간 따뜻한 색온도(나이트 시프트)를 켜 두세요.",
      "책상 옆 물 한 잔을 두고 마실 때마다 눈 깜빡임과 휴식을 함께 챙기세요."
    ]
  },
  "high": {
    "enT": "Comfortable Visual Ergonomics — Keep Your Clean Eye-Rest Rhythm",
    "koT": "쾌적한 시각 환경 — 지금의 눈 휴식 리듬을 꾸준히 유지하세요",
    "enD": "Your lighting, distance, and break habits are supporting crisp visual focus well. Keep protecting brief outdoor daylight breaks when possible.",
    "koD": "조명·거리·휴식 습관이 눈의 피로를 잘 예방하고 있습니다. 가능하다면 낮에 짧은 야외 자연광 휴식도 함께 유지해 보세요.",
    "enS": "\"Rested eyes keep my mind calm and steady all afternoon.\"",
    "koS": "\"편안한 눈 컨디션이 오후 내내 맑은 집중력을 지켜준다.\"",
    "enL": [
      "Keep your 20-20-20 distant landmark habit during deep work sessions.",
      "Take a 5-minute natural-light break around midday.",
      "Avoid bright close screens during the last 30 minutes before bed."
    ],
    "koL": [
      "깊은 집중 작업 중에도 20-20-20 원거리 휴식 습관을 유지하세요.",
      "점심 무렵 5분간 자연광을 쬐며 시야를 넓혀주세요.",
      "취침 전 마지막 30분은 가까운 밝은 화면을 피하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_eye_strain_reset_v1";
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
      window.gtag('event', "eye_strain_reset_complete", {
        tool_slug: "digital-eye-strain-focus-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/digital-eye-strain-focus-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "digital-eye-strain-focus-reset",
        filename: 'dopabrain-digital-eye-strain-focus-reset-card.png',
        badge: "VISUAL FATIGUE • 20-20-20 FOCUS RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#06b6d4",
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
