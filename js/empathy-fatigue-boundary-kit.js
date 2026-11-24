/* Empathy Fatigue & Caregiver Boundary Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Empathy Fatigue & Caregiver Boundary Kit | DopaBrain",
    "metaDesc": "Absorbing everyone else’s stress until you feel emotionally numb or quietly resentful? Audit 5 empathy-overload leaks locally and build warm, guilt-free caring boundaries.",
    "kicker": "COMPASSION SUSTAINABILITY • EMPATHY BOUNDARY KIT",
    "heroTitle": "Empathy Fatigue & Caregiver Boundary Kit",
    "heroLead": "Absorbing everyone else’s stress until you feel emotionally numb or quietly resentful? Audit 5 empathy-overload leaks locally and build warm, guilt-free caring boundaries.",
    "chip1": "5 Empathy Leaks",
    "chip2": "Warm Boundary Scripts",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK EMPATHY OVERLOAD SIGNALS (1 = GROUNDED, 5 = ABSORBING)",
    "step1Title": "How are other people’s emotions draining your reserve right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One warm boundary I will practice this week without over-explaining (100% local):",
    "ctaBtn": "Build My Empathy Boundary Kit",
    "resultBadge": "STEP 2 • YOUR SUSTAINABLE COMPASSION PLAN",
    "noteTitle": "My Warm Boundary Practice This Week",
    "meterLabel": "Emotional Autonomy Reserve",
    "scriptTitle": "Warm, Clear Caring-Without-Carrying Script",
    "stepsTitle": "3 Grounding Shifts From Emotional Sponge to Warm Anchor",
    "stickyTitle": "Curious how sensitive your nervous system is to others’ moods?",
    "stickySub": "Take the free HSP Sensitivity Profile next",
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
    "title": "공감 피로·돌봄 에너지 경계 키트 | DopaBrain",
    "metaDesc": "주변 사람들의 감정을 모두 떠안다가 어느새 감정적 마비나 속상함이 쌓이나요? 5가지 공감 과부하 누수를 비공개로 점검하고 죄책감 없는 따뜻한 경계를 세우세요.",
    "kicker": "공감 피로 회복 · 따뜻한 경계 키트",
    "heroTitle": "공감 피로·돌봄 에너지 경계 키트",
    "heroLead": "주변 사람들의 감정을 모두 떠안다가 어느새 감정적 마비나 속상함이 쌓이나요? 5가지 공감 과부하 누수를 비공개로 점검하고 죄책감 없는 따뜻한 경계를 세우세요.",
    "chip1": "5가지 공감 누수",
    "chip2": "따뜻한 경계 스크립트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 공감 과부하 신호 점검 (1 = 안정적, 5 = 과도 흡수)",
    "step1Title": "지금 타인의 감정과 기대가 내 에너지를 가장 크게 소모하는 방식은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 과한 해명 없이 이번 주 실천할 따뜻한 경계 1가지 (100% 로컬):",
    "ctaBtn": "내 공감 피로 경계 키트 만들기",
    "resultBadge": "2단계 • 지속가능한 공감·경계 플랜",
    "noteTitle": "이번 주 실천할 따뜻한 경계",
    "meterLabel": "감정적 독립성·여유 지수",
    "scriptTitle": "따뜻하지만 떠안지 않는 경계 문장",
    "stepsTitle": "감정 스펀지에서 단단한 지지자로 바뀌는 3단계",
    "stickyTitle": "타인의 감정과 자극에 대한 나의 민감도가 궁금하신가요?",
    "stickySub": "무료 HSP 민감성 테스트로 나의 감각·공감 성향 확인",
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
    "title": "共情疲劳与温和边界工具包 | DopaBrain",
    "heroTitle": "共情疲劳与温和边界工具包",
    "heroLead": "排查5大情绪吸收消耗，建立不带内疚感的温和关怀边界话术。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "共感疲労＆ケア境界線キット | DopaBrain",
    "heroTitle": "共感疲労＆ケア境界線キット",
    "heroLead": "他人の感情を抱え込む5つの癖を整理し、温かい境界線スクリプトを作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Fatiga por Empatía y Límites | DopaBrain",
    "heroTitle": "Kit de Fatiga por Empatía y Límites",
    "heroLead": "Audita 5 fugas de sobrecarga empática y crea límites cálidos sin culpa.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Fadiga de Empatia e Limites | DopaBrain",
    "heroTitle": "Kit de Fadiga de Empatia e Limites",
    "heroLead": "Identifique 5 fugas de sobrecarga empática e crie limites afetuosos sem culpa.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Empathie-Müdigkeits- & Grenzen-Kit | DopaBrain",
    "heroTitle": "Empathie-Müdigkeits- & Grenzen-Kit",
    "heroLead": "Prüfe 5 Empathie-Energielecks und nutze herzliche, schuldfreie Abgrenzungssätze.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Fatigue Empathique & Limites Saines | DopaBrain",
    "heroTitle": "Kit Fatigue Empathique & Limites Saines",
    "heroLead": "Repérez 5 fuites d’hyper-empathie et adoptez des limites chaleureuses sans culpabilité.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор границ при усталости от эмпатии | DopaBrain",
    "heroTitle": "Набор границ при усталости от эмпатии",
    "heroLead": "Выявите 5 утечек эмоционального выгорания и соберите тёплые границы без чувства вины.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "एम्पैथी फटीग व केयरगिवर बाउंड्री किट | DopaBrain",
    "heroTitle": "एम्पैथी फटीग व केयरगिवर बाउंड्री किट",
    "heroLead": "5 भावनात्मक थकान स्रोतों की जांच करें और बिना अपराधबोध के स्वस्थ सीमाएं बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Batas Kelelahan Empati & Perawat | DopaBrain",
    "heroTitle": "Kit Batas Kelelahan Empati & Perawat",
    "heroLead": "Audit 5 kebocoran beban empati dan bangun batas hangat tanpa rasa bersalah.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Empati Yorgunluğu ve Sınır Kiti | DopaBrain",
    "heroTitle": "Empati Yorgunluğu ve Sınır Kiti",
    "heroLead": "5 empati yükü sızıntısını analiz edin ve suçluluk duymadan sıcak sınırlar kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "emotional_sponge",
    "en": "Mood Absorption — Carrying a friend’s or colleague’s bad mood for hours afterward",
    "ko": "감정 흡수 — 대화 후에도 상대의 우울·짜증을 몇 시간씩 내 것처럼 안고 감"
  },
  {
    "id": "unsolicited_fixer",
    "en": "Automatic Rescuer Mode — Feeling responsible to solve problems others didn’t ask you to fix",
    "ko": "자동 해결사 모드 — 부탁받지 않은 상대의 문제까지 내가 해결해야 할 것 같음"
  },
  {
    "id": "one_way_venting",
    "en": "Unbounded Venting Calls — Listening past exhaustion without checking your own capacity",
    "ko": "무제한 하소연 수용 — 내가 지쳐 있는데도 끝없이 들어주다 방전됨"
  },
  {
    "id": "guilt_on_rest",
    "en": "Self-Care Guilt — Feeling selfish whenever you rest while someone else is struggling",
    "ko": "휴식 죄책감 — 다른 사람이 힘들어할 때 내가 쉬면 이기적이라고 느낌"
  },
  {
    "id": "quiet_resentment",
    "en": "Silent Resentment Creep — Feeling irritable or numb because your own needs went unspoken",
    "ko": "숨은 서운함 누적 — 내 필요를 말하지 못해 점점 무감각하거나 날카로워짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "Empathy Reserve Depleted — Shift From Rescuing to Compassionate Witnessing",
    "koT": "공감 에너지 고갈 — 해결사 역할에서 내려와 따뜻한 경계를 먼저 세우세요",
    "enD": "Neuroscience distinguishes empathetic distress (absorbing pain until you shut down) from sustainable compassion (warm care with clear emotional borders). Recharging protects your kindness.",
    "koD": "신경과학은 타인의 고통을 그대로 떠안는 공감 피로와, 경계를 지키는 지속가능한 연민을 구분합니다. 내가 먼저 충전되어야 따뜻함도 오래갑니다.",
    "enS": "\"I care about what you’re going through, and I’m low on bandwidth tonight—can we talk for 15 minutes tomorrow when I can really be present?\"",
    "koS": "\"네가 겪는 일에 진심으로 마음이 쓰이지만, 오늘은 내 에너지가 바닥이야. 내일 내가 온전히 집중해서 들을 수 있을 때 15분 정도 이야기할까?\"",
    "enL": [
      "After heavy conversations, do a 60-second physical hand-wash or shoulder shake to mark \"their feeling is theirs.\"",
      "Ask before advising: \"Do you want listening or brainstorming right now?\"",
      "Protect one completely unscheduled hour this week where nobody needs anything from you."
    ],
    "koL": [
      "무거운 대화 뒤에는 손 씻기나 어깨 털기로 \"상대의 감정은 상대의 몫\"임을 몸으로 구분하세요.",
      "조언하기 전 먼저 물어보세요(\"지금은 들어주길 원해, 함께 해결책을 찾을까?\").",
      "이번 주 아무도 나에게 무언가를 기대하지 않는 완전한 자유 시간 1시간을 확보하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Empathy Strain — Name Your Listening Window Up Front",
    "koT": "중간 공감 피로 — 대화를 시작할 때 나의 여유 시간을 먼저 알려주세요",
    "enD": "Your warmth is a genuine strength; adding gentle time containers before heavy talks stops resentment before it starts.",
    "koD": "따뜻한 공감력은 큰 강점입니다. 깊은 대화를 시작할 때 나의 가능한 시간 범위를 부드럽게 미리 알리면 지치지 않습니다.",
    "enS": "\"I’d love to hear what’s going on—I have about 20 minutes before I need to wind down for the evening.\"",
    "koS": "\"무슨 일인지 편하게 들려줘. 다만 오늘 저녁 정리 시간이 있어서 20분 정도 집중해서 들을 수 있어.\"",
    "enL": [
      "Share your available time container gently at the start of support conversations.",
      "Check in with your own body tension once per afternoon.",
      "Balance giving support with letting one trusted person support you too."
    ],
    "koL": [
      "위로·상담 대화 초반에 내가 집중할 수 있는 시간 범위를 자연스럽게 공유하세요.",
      "오후마다 한 번씩 내 어깨·가슴의 긴장 상태를 체크하세요.",
      "들어주기만 하지 말고 믿을 수 있는 사람에게 내 이야기도 나눠보세요."
    ]
  },
  "high": {
    "enT": "Grounded Compassion — Sustainable Warmth With Clear Borders",
    "koT": "건강하고 단단한 공감력 — 경계 있는 따뜻함을 잘 유지하고 있습니다",
    "enD": "You are showing care without losing your own emotional center. Keep honoring your recharge rituals so your empathy remains joyful and resilient.",
    "koD": "내 감정 중심을 잃지 않으면서도 타인을 따뜻하게 대하고 있습니다. 지금의 충전 루틴을 계속 소중히 지켜가세요.",
    "enS": "\"I can hold warm space for others while honoring my own energy limits.\"",
    "koS": "\"내 에너지 한계를 존중하면서도 타인에게 따뜻한 여백을 건넬 수 있어.\"",
    "enL": [
      "Keep modeling clear, kind boundaries—it teaches others they can be honest too.",
      "Maintain brief transition rituals between caregiving/work and personal rest.",
      "Notice one joy-giving activity weekly that refills your own cup."
    ],
    "koL": [
      "분명하고 친절한 경계를 계속 보여주세요—상대에게도 건강한 기준이 됩니다.",
      "돌봄·업무와 개인 휴식 사이의 짧은 전환 의식을 유지하세요.",
      "매주 나만의 기쁨을 채워주는 활동을 1가지 이상 챙기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_empathy_boundary_v1";
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
      window.gtag('event', "empathy_boundary_complete", {
        tool_slug: "empathy-fatigue-boundary-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/empathy-fatigue-boundary-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "empathy-fatigue-boundary-kit",
        filename: 'dopabrain-empathy-fatigue-boundary-kit-card.png',
        badge: "COMPASSION SUSTAINABILITY • EMPATHY BOUNDARY KIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
        accent2: "#8b5cf6"
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
