/* Afternoon Brain Fog Clarity & Reset Checklist
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Afternoon Brain Fog Clarity & Reset Checklist | DopaBrain",
    "metaDesc": "Re-reading the same sentence four times with heavy eyes? Audit the 5 most common non-medical triggers of daily brain fog—hydration, stale air, glucose swings, multitasking, and eye strain—for a crisp 15-minute reset.",
    "kicker": "COGNITIVE CLARITY • BRAIN FOG RESET CHECKLIST",
    "heroTitle": "Afternoon Brain Fog Clarity & Reset Checklist",
    "heroLead": "Re-reading the same sentence four times with heavy eyes? Audit the 5 most common non-medical triggers of daily brain fog—hydration, stale air, glucose swings, multitasking, and eye strain—for a crisp 15-minute reset.",
    "chip1": "5 Clarity Triggers",
    "chip2": "15-Min Reset",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR CURRENT BRAIN FOG TRIGGERS (1 = CLEAR, 5 = HEAVY FOG)",
    "step1Title": "Which physical or workspace drains are hitting you right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The one clear task I want fresh mental energy for next (100% local):",
    "ctaBtn": "Generate My 15-Minute Clarity Protocol",
    "resultBadge": "STEP 2 • YOUR 15-MINUTE COGNITIVE CLARITY RESET",
    "noteTitle": "Next Clear-Head Target",
    "meterLabel": "Current Mental Clarity",
    "scriptTitle": "15-Minute Physical Reboot Cue",
    "stepsTitle": "3 Fast Evidence-Based Moves to Lift Daily Brain Fog",
    "stickyTitle": "Want to test your pattern-reasoning sharpness once the fog clears?",
    "stickySub": "Try the free visual Pattern & IQ Warmup",
    "stickyBtn": "Brain Check →",
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
    "title": "오후 브레인 포그(머리 멍함) 원인 점검 & 15분 리셋 | DopaBrain",
    "metaDesc": "같은 문장을 네 번 읽어도 머리에 안 들어오고 눈이 뻑뻑한가요? 탈수·환기 부족·혈당 스파이크·탭 과부하·안구 피로 등 5대 일상 원인을 점검하고 15분 만에 머리를 맑게 비우세요.",
    "kicker": "인지 명료도 · 브레인 포그 원인 점검 & 15분 리셋",
    "heroTitle": "오후 브레인 포그(머리 멍함) 원인 점검 & 15분 리셋",
    "heroLead": "같은 문장을 네 번 읽어도 머리에 안 들어오고 눈이 뻑뻑한가요? 탈수·환기 부족·혈당 스파이크·탭 과부하·안구 피로 등 5대 일상 원인을 점검하고 15분 만에 머리를 맑게 비우세요.",
    "chip1": "5대 멍함 원인",
    "chip2": "15분 명료 리셋",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 지금 머리가 멍해진 일상 요인 점검 (1 = 맑음, 5 = 매우 멍함)",
    "step1Title": "지금 이 순간 뇌를 가장 무겁게 누르고 있는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 머리를 맑게 비운 뒤 바로 끝내고 싶은 핵심 작업 1가지 (100% 로컬):",
    "ctaBtn": "내 15분 브레인 포그 리셋 플랜 보기",
    "resultBadge": "2단계 • 15분 인지 명료도 회복 프로토콜",
    "noteTitle": "회복 후 집중할 단일 과제",
    "meterLabel": "현재 두뇌 명료도",
    "scriptTitle": "15분 물리적 리부트 실행 문구",
    "stepsTitle": "일상 브레인 포그를 빠르게 걷어내는 3단계",
    "stickyTitle": "머리가 맑아진 뒤 패턴 추론과 집중력을 가볍게 워밍업해 볼까요?",
    "stickySub": "무료 시각 패턴·IQ 퀴즈로 두뇌 예열하기",
    "stickyBtn": "두뇌 워밍업 →",
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
    "title": "午后脑雾排查与15分钟清醒重置清单 | DopaBrain",
    "heroTitle": "午后脑雾排查与15分钟清醒重置清单",
    "heroLead": "排查缺水、闷热、血糖骤降、多标签切换与眼疲劳，快速恢复清晰思维。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "午後のブレインフォグ原因チェック＆15分リセット | DopaBrain",
    "heroTitle": "午後のブレインフォグ原因チェック＆15分リセット",
    "heroLead": "水分・換気・血糖・タブ過多・眼精疲労の5要因を点検し思考をクリアにします。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Checklist de Claridad para Niebla Mental Vespertina | DopaBrain",
    "heroTitle": "Checklist de Claridad para Niebla Mental Vespertina",
    "heroLead": "Audita hidratación, aire, pestañas y vista para un reinicio cognitivo en 15 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Checklist de Clareza contra Névoa Mental à Tarde | DopaBrain",
    "heroTitle": "Checklist de Clareza contra Névoa Mental à Tarde",
    "heroLead": "Verifique água, ventilação, foco e cansaço visual para um reset de 15 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Brain-Fog Klarheits-Check & 15-Minuten-Reset | DopaBrain",
    "heroTitle": "Brain-Fog Klarheits-Check & 15-Minuten-Reset",
    "heroLead": "Prüfe Wasser, Luftqualität, Blutzucker und Bildschirmstress für klaren Kopf.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Checklist Brouillard Mental & Reset Clarté 15 Min | DopaBrain",
    "heroTitle": "Checklist Brouillard Mental & Reset Clarté 15 Min",
    "heroLead": "Identifiez hydratation, air confiné et surcharge d’onglets pour retrouver un esprit vif.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Чек-лист ясности ума при «тумане в голове» | DopaBrain",
    "heroTitle": "Чек-лист ясности ума при «тумане в голове»",
    "heroLead": "Проверьте 5 частых причин затуманенности и верните ясность за 15 минут.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "ब्रेन फ़ॉग क्लैरिटी चेकलिस्ट और 15-मिनट रीसेट | DopaBrain",
    "heroTitle": "ब्रेन फ़ॉग क्लैरिटी चेकलिस्ट और 15-मिनट रीसेट",
    "heroLead": "पानी, हवा, शुगर और स्क्रीन थकान की जांच कर तुरंत मानसिक स्पष्टता पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Ceklis Kejernihan Brain Fog & Reset 15 Menit | DopaBrain",
    "heroTitle": "Ceklis Kejernihan Brain Fog & Reset 15 Menit",
    "heroLead": "Audit 5 pemicu otak berkabut (air, udara, tab, gula, mata) untuk fokus instan.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Öğleden Sonra Beyin Sisi Netlik Kontrolü | DopaBrain",
    "heroTitle": "Öğleden Sonra Beyin Sisi Netlik Kontrolü",
    "heroLead": "Su, hava, ekran ve dikkat yorgunluğunu denetleyip 15 dakikada zihninizi açın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "dehydration_drag",
    "en": "Mild Dehydration — Less than 2 glasses of plain water in the past 4 hours",
    "ko": "경미한 탈수 — 최근 4시간 동안 맹물을 2잔 미만 마심"
  },
  {
    "id": "co2_stale_room",
    "en": "Stale Indoor Air — Sitting in a closed room with high CO₂ and zero daylight",
    "ko": "실내 환기 부족 — 닫힌 방에서 이산화탄소 축적·자연광 부족"
  },
  {
    "id": "heavy_carb_crash",
    "en": "Post-Lunch Glucose Dip — Heavy refined-carb lunch followed by desk immobility",
    "ko": "식곤증·혈당 급락 — 정제 탄수화물 식사 후 바로 앉아 있음"
  },
  {
    "id": "tab_switch_overload",
    "en": "Context-Switch Exhaustion — 20+ open tabs and nonstop Slack/email pings",
    "ko": "맥락 전환 과부하 — 20개 이상 탭과 끊임없는 메신저 알림"
  },
  {
    "id": "near_screen_strain",
    "en": "Visual Tunnel Fatigue — Staring at a close screen 2+ hours without distant gaze",
    "ko": "근거리 안구 피로 — 2시간 넘게 먼 곳을 안 보고 모니터만 응시"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Fog Load — Step Away for a Full 15-Minute Sensory & Oxygen Reset",
    "koT": "브레인 포그 심함 — 지금 당장 15분 산소·수분·원거리 시선 리셋이 필요합니다",
    "enD": "Even 1–2% mild dehydration and indoor CO₂ buildup above 1,000 ppm measurably slow cognitive processing (Allen et al., Harvard Chan School). Pushing through with more coffee rarely helps as much as water, fresh air, and a 5-minute walk.",
    "koD": "하버드 보건대학원 연구에 따르면 실내 CO₂ 농도 상승과 1~2%의 가벼운 탈수만으로도 인지 처리 속도가 뚜렷이 저하됩니다. 커피를 추가하기보다 물 한 잔·환기·5분 걷기가 훨씬 빠릅니다.",
    "enS": "\"Close the extra tabs, drink a full glass of water, open a window, and walk 5 minutes before reading another word.\"",
    "koS": "\"불필요한 탭을 닫고 물 한 컵·창문 환기·5분 걷기를 끝낸 뒤에 다시 화면을 본다.\"",
    "enL": [
      "Drink 350–500ml cool water immediately (add a pinch of electrolytes if sweaty).",
      "Open a window or step outdoors for 5 minutes of brisk walking + distant horizon gaze.",
      "Close all non-essential tabs so only 1 single window greets you when you return."
    ],
    "koL": [
      "시원한 물 350~500ml를 지금 바로 천천히 마시세요.",
      "창문을 열어 환기하거나 5분간 바깥 공기를 마시며 먼 곳을 바라보세요.",
      "자리에 돌아왔을 때 작업 창 딱 1개만 남기고 나머지 탭은 모두 닫으세요."
    ]
  },
  "mid": {
    "enT": "Moderate Mental Haze — Run a 5-Minute Water + Horizon Break",
    "koT": "중간 수준 멍함 — 5분 수분 보충 + 창밖 시선 휴식으로 금방 맑아집니다",
    "enD": "Your brain is mildly fatigued from continuous screen focus. A brief 5-minute hydration and posture reset restores crisp thinking.",
    "koD": "연속 화면 응시로 인한 가벼운 피로입니다. 5분간 물 마시기·기지개·먼 곳 보기만으로도 집중이 빠르게 돌아옵니다.",
    "enS": "\"Hydrate, stand tall, look 20 feet away for 20 seconds, then resume one clean task.\"",
    "koS": "\"물 한 잔, 기지개, 6m 밖 20초 바라보기 후 단일 작업 재개.\"",
    "enL": [
      "Drink a full glass of water and stretch shoulders/neck.",
      "Apply the 20-20-20 eye rule looking out a window.",
      "Mute notifications for the next 45-minute clarity block."
    ],
    "koL": [
      "물 한 잔을 마시고 목과 어깨 긴장을 가볍게 풀어 주세요.",
      "창밖 먼 곳을 20초 이상 응시해 눈 근육을 이완하세요.",
      "이어지는 45분 동안 메신저 알림을 잠시 꺼 두세요."
    ]
  },
  "high": {
    "enT": "Sharp Cognitive Clarity — Prime Window for Deep Thinking",
    "koT": "두뇌 명료도 최상 — 고난도 사고·창작 작업을 배치할 골든타임입니다",
    "enD": "Your hydration, oxygen, and attention are well aligned. Tackle your hardest analytical or creative work right now.",
    "koD": "수분·산소·주의력 상태가 아주 좋습니다. 오늘 가장 중요한 판단이나 창작 업무를 지금 처리하세요.",
    "enS": "\"Ride this clear window on my single highest-leverage problem.\"",
    "koS": "\"지금의 맑은 컨디션을 오늘 가장 중요한 과제 1개에 쓴다.\"",
    "enL": [
      "Protect this 60-minute window from routine admin emails.",
      "Keep water within reach to sustain clarity.",
      "Schedule a quick movement break after 90 minutes."
    ],
    "koL": [
      "이 60분 동안은 단순 행정 메일 답장을 뒤로 미루세요.",
      "책상 옆에 물을 두고 맑은 컨디션을 유지하세요.",
      "90분 집중 후 가벼운 움직임 휴식을 예약해 두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_brain_fog_clarity_v1";
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
      window.gtag('event', "brain_fog_clarity_complete", {
        tool_slug: "brain-fog-clarity-checklist",
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
      var shareUrl = "https://dopabrain.com/portal/tools/brain-fog-clarity-checklist.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "brain-fog-clarity-checklist",
        filename: 'dopabrain-brain-fog-clarity-checklist-card.png',
        badge: "COGNITIVE CLARITY • BRAIN FOG RESET CHECKLIST",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
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
