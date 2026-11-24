/* Nervous System State Mapper & Reset Guide
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Nervous System State Mapper & Reset Guide | DopaBrain",
    "metaDesc": "Unsure whether your body needs calming down (wired/tense) or gentle warming up (numb/flat)? Map 5 somatic cues locally to match the right regulation move to your actual state.",
    "kicker": "AUTONOMIC CHECK-IN • STATE-MATCHED RESET",
    "heroTitle": "Nervous System State Mapper & Reset Guide",
    "heroLead": "Unsure whether your body needs calming down (wired/tense) or gentle warming up (numb/flat)? Map 5 somatic cues locally to match the right regulation move to your actual state.",
    "chip1": "5 Somatic Cues",
    "chip2": "State-Matched Reset",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK CURRENT BODY SIGNALS (1 = STEADY, 5 = INTENSE)",
    "step1Title": "What signals is your nervous system broadcasting right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One neutral object or texture I can notice in the room right now (100% local):",
    "ctaBtn": "Map My State & Reset",
    "resultBadge": "STEP 2 • YOUR STATE-MATCHED REGULATION MENU",
    "noteTitle": "My Present-Room Sensory Anchor",
    "meterLabel": "Grounded Safety Baseline",
    "scriptTitle": "Somatic Orienting Cue",
    "stepsTitle": "3 Body-First Moves Matched to Right Now",
    "stickyTitle": "Want a broader picture of your weekly stress load?",
    "stickySub": "Take the free 2-min Stress Check + 7-day reset",
    "stickyBtn": "Stress Check →",
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
    "title": "자율신경 상태 매퍼 & 맞춤 리셋 가이드 | DopaBrain",
    "metaDesc": "지금 내 몸에 필요한 것이 진정(과각성)인지 부드러운 활력(저각성·무기력)인지 헷갈리나요? 5가지 신체 신호를 점검해 현재 상태에 맞는 안정화 단계를 받으세요.",
    "kicker": "자율신경 상태 지도 · 맞춤 안정화 랩",
    "heroTitle": "자율신경 상태 매퍼 & 맞춤 리셋 가이드",
    "heroLead": "지금 내 몸에 필요한 것이 진정(과각성)인지 부드러운 활력(저각성·무기력)인지 헷갈리나요? 5가지 신체 신호를 점검해 현재 상태에 맞는 안정화 단계를 받으세요.",
    "chip1": "5가지 신체 신호",
    "chip2": "상태별 맞춤 리셋",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 신체·자율신경 신호 확인 (1 = 안정적, 5 = 강함)",
    "step1Title": "지금 내 몸과 자율신경이 보내는 신호는 어떤가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 지금 방 안에서 눈에 보이는 편안한 사물이나 촉감 1가지 (100% 로컬):",
    "ctaBtn": "내 자율신경 상태 & 리셋 확인",
    "resultBadge": "2단계 • 현재 상태 맞춤 자율신경 안정 메뉴",
    "noteTitle": "지금 이 공간의 안전 앵커",
    "meterLabel": "현재 신경계 안정 여유도",
    "scriptTitle": "신경계를 안심시키는 문장",
    "stepsTitle": "지금 바로 적용할 신체 우선 안정화 3단계",
    "stickyTitle": "최근 한 주 전체 스트레스 부하도 함께 점검해 볼까요?",
    "stickySub": "무료 2분 스트레스 체크 + 7일 회복 가이드",
    "stickyBtn": "스트레스 체크 →",
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
    "title": "自主神经状态图谱与减压指南 | DopaBrain",
    "heroTitle": "自主神经状态图谱与减压指南",
    "heroLead": "评估5项身体信号，区分亢奋与低落并匹配最合适的当下调节步骤。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "自律神経ステート・マッパー | DopaBrain",
    "heroTitle": "自律神経ステート・マッパー",
    "heroLead": "5つの身体サインから今の緊張・低活性を見分け、状態に合う調整法を提案します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Mapa del Estado del Sistema Nervioso | DopaBrain",
    "heroTitle": "Mapa del Estado del Sistema Nervioso",
    "heroLead": "Identifica 5 señales somáticas para elegir la regulación corporal exacta que necesitas hoy.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Mapa do Estado do Sistema Nervoso | DopaBrain",
    "heroTitle": "Mapa do Estado do Sistema Nervoso",
    "heroLead": "Mapeie 5 sinais somáticos para escolher o ajuste corporal ideal para seu estado atual.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Nervensystem-Zustands-Mapper & Reset | DopaBrain",
    "heroTitle": "Nervensystem-Zustands-Mapper & Reset",
    "heroLead": "Erkenne 5 Körpersignale und wähle die genau passende somatische Regulation für jetzt.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Carte d’État du Système Nerveux | DopaBrain",
    "heroTitle": "Carte d’État du Système Nerveux",
    "heroLead": "Repérez 5 signaux corporels pour choisir la régulation somatique adaptée à votre état.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Карта состояния нервной системы | DopaBrain",
    "heroTitle": "Карта состояния нервной системы",
    "heroLead": "Оцените 5 телесных сигналов и подберите точный способ регуляции под текущее состояние.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "नर्वस सिस्टम स्टेट मैपर व रीसेट | DopaBrain",
    "heroTitle": "नर्वस सिस्टम स्टेट मैपर व रीसेट",
    "heroLead": "5 शारीरिक संकेतों को जांचें और अपनी वर्तमान स्थिति के अनुरूप शांत करने के कदम पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pemeta Kondisi Sistem Saraf & Reset | DopaBrain",
    "heroTitle": "Pemeta Kondisi Sistem Saraf & Reset",
    "heroLead": "Kenali 5 sinyal tubuh untuk memilih langkah regulasi somatik yang paling pas sekarang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sinir Sistemi Durum Haritası ve Reset | DopaBrain",
    "heroTitle": "Sinir Sistemi Durum Haritası ve Reset",
    "heroLead": "5 bedensel sinyali ölçün ve anlık durumunuza uygun sakinleşme adımını seçin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "breath_shallow",
    "en": "Upper-Chest Breathing — Fast, tight, or unconsciously held breath",
    "ko": "얕은 흉식 호흡 — 숨이 가쁘거나 무의식적으로 숨을 참고 있음"
  },
  {
    "id": "muscle_bracing",
    "en": "Jaw / Shoulder Bracing — Clenched teeth, raised shoulders, or tight stomach",
    "ko": "턱·어깨 긴장 — 어금니를 악물거나 어깨·배에 힘이 잔뜩 들어감"
  },
  {
    "id": "urgency_surge",
    "en": "Mental Urgency — Feeling rushed, irritable, or scanning for what might go wrong",
    "ko": "조급함·경계심 — 이유 없이 서두르게 되고 나쁜 일이 생길까 경계됨"
  },
  {
    "id": "flat_fog",
    "en": "Heavy Flatness — Feeling spaced-out, heavy-limbed, or disconnected from surroundings",
    "ko": "무거운 멍함 — 몸이 납처럼 무겁고 주변과 동떨어진 느낌"
  },
  {
    "id": "sensory_edge",
    "en": "Sensory Edgy-ness — Everyday sounds or notifications feeling jarringly sharp",
    "ko": "감각 예민화 — 평소 괜찮던 소리나 알림이 날카롭게 거슬림"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Autonomic Activation — Downshift Body First, Thoughts Second",
    "koT": "자율신경 높은 활성화 — 생각 정리보다 신체 진정이 먼저입니다",
    "enD": "When your body is in high alert or heavy overload, logic alone rarely calms it. Long exhales and slow visual orienting send direct physical safety signals.",
    "koD": "몸이 경계나 과부하에 빠졌을 때는 머리로 설득해도 잘 가라앉지 않습니다. 긴 날숨과 천천히 주변 둘러보기가 뇌에 직접 안전 신호를 보냅니다.",
    "enS": "\"My body is doing its job to protect me, and right now in this room I am physically safe enough to exhale slowly.\"",
    "koS": "\"내 몸이 나를 지키려 반응한 것뿐이야. 지금 이 방에서 나는 천천히 숨을 길게 내쉬어도 안전해.\"",
    "enL": [
      "Run 3 physiological sighs (two short inhales through the nose, one long slow exhale through the mouth).",
      "Turn your head slowly left and right, naming 3 neutral objects you see.",
      "Drop your shoulders 2 cm and unclench your jaw while feeling both feet press the floor."
    ],
    "koL": [
      "생리적 한숨 3회(코로 짧게 두 번 들이마시고 입으로 아주 길게 내쉬기)를 실행하세요.",
      "고개를 천천히 좌우로 돌려 눈에 띄는 중립적인 사물 3가지를 이름 불러 보세요.",
      "어깨를 2cm 툭 떨어뜨리고 턱 힘을 뺀 채 두 발이 바닥에 닿는 감각을 느끼세요."
    ]
  },
  "mid": {
    "enT": "Mixed Activation — Gentle 2-Minute Somatic Recalibration",
    "koT": "중간 각성 상태 — 2분 부드러운 신체 재조정이 효과적입니다",
    "enD": "You are carrying noticeable background tension, yet still close enough to your calm baseline to reset smoothly in two minutes.",
    "koD": "배경 긴장이 쌓여 있지만 아직 안정 기준선과 가까워 2분만 투자해도 부드럽게 균형을 되찾을 수 있습니다.",
    "enS": "\"I can slow down by 15% right now without falling behind.\"",
    "koS": "\"지금 속도를 15%만 낮춰도 뒤처지지 않고 훨씬 안정적으로 해낼 수 있어.\"",
    "enL": [
      "Exhale 2 seconds longer than your inhale for 6 unhurried breaths.",
      "Roll your shoulders back and sip cool or warm water slowly.",
      "Choose just one simple physical next step instead of multitasking."
    ],
    "koL": [
      "6번의 호흡 동안 들숨보다 날숨을 2초 더 길게 내쉬세요.",
      "어깨를 크게 뒤로 돌리고 물 한 모금을 천천히 마시세요.",
      "여러 일을 동시에 붙잡지 말고 단순한 다음 행동 1가지만 선택하세요."
    ]
  },
  "high": {
    "enT": "Grounded & Steady Baseline — Savor & Anchor This Calm",
    "koT": "안정된 자율신경 기준선 — 이 편안한 감각을 몸에 기억시키세요",
    "enD": "Your nervous system is steady and regulated. Taking 15 seconds to notice what calm feels like physically makes it easier to return here later.",
    "koD": "자율신경이 차분하고 균형 잡힌 상태입니다. 지금의 편안한 신체 감각을 15초간 음미해 두면 나중에 긴장될 때 돌아오기 쉬워집니다.",
    "enS": "\"I notice what steady feels like in my shoulders, breath, and jaw right now.\"",
    "koS": "\"지금 내 어깨와 호흡, 턱이 얼마나 편안한지 그 감각을 그대로 기억해 둔다.\"",
    "enL": [
      "Notice two physical cues of ease (warm hands, unhurried breath, relaxed gaze).",
      "Protect one brief recovery pause later today before fatigue builds.",
      "Use this clear state for meaningful connection or creative work."
    ],
    "koL": [
      "지금 느껴지는 편안한 신체 신호 2가지(따뜻한 손, 느긋한 호흡 등)를 알아차리세요.",
      "피로가 쌓이기 전에 오늘 오후 짧은 회복 휴식 1회를 미리 예약해 두세요.",
      "이 맑은 에너지를 의미 있는 대화나 몰입 작업에 활용해 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_ns_state_map_v1";
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
      window.gtag('event', "ns_state_map_complete", {
        tool_slug: "nervous-system-state-mapper",
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
      var shareUrl = "https://dopabrain.com/portal/tools/nervous-system-state-mapper.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "nervous-system-state-mapper",
        filename: 'dopabrain-nervous-system-state-mapper-card.png',
        badge: "AUTONOMIC CHECK-IN • STATE-MATCHED RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
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
