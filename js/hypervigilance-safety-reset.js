/* Hypervigilance & Threat-Scanning Safety Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Hypervigilance & Threat-Scanning 3-Min Safety Reset | DopaBrain",
    "metaDesc": "Free 12-language Hypervigilance & Nervous System Safety Reset. Rate 5 threat-scanning habits locally and walk through a gentle 3-minute somatic orienting protocol to stand down.",
    "keywords": "hypervigilance reset tool, nervous system always on guard, threat scanning anxiety, somatic orienting safety exercise, trauma hyperarousal calm, dopabrain",
    "kicker": "STAND DOWN THE ALARM • 3-MIN ORIENTING",
    "heroTitle": "Hypervigilance & Threat-Scanning Safety Reset",
    "heroLead": "Always scanning rooms, bracing your shoulders, or reading micro-shifts in someone’s voice for danger—even when nothing is wrong? Rate 5 guard-mode signals locally to cue physical safety.",
    "chip1": "5 Alarm Signals",
    "chip2": "3m Safety Orienting",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK GUARD-MODE INTENSITY (1 = RELAXED, 5 = HIGH ALERT)",
    "step1Title": "How tightly is your internal radar scanning right now?",
    "step1Sub": "Your check-in stays 100% local in your browser—zero data leaves your device.",
    "inputLabel": "Optional: 1 neutral sign in my room right now showing I am safe (100% local):",
    "inputPlaceholder": "Example: Locked quiet room, solid chair beneath me, warm lamp light, no immediate threat",
    "ctaBtn": "Run Safety Check & 3m Reset",
    "resultBadge": "STEP 2 • YOUR 3-MINUTE SAFETY ORIENTING PROTOCOL",
    "noteTitle": "My Present-Room Safety Evidence",
    "meterLabel": "Nervous System Stand-Down Margin",
    "scriptTitle": "Present-Time Safety Cue for Your Body",
    "stepsTitle": "3-Minute Orienting Sequence to Lower the Radar",
    "stickyTitle": "Need a guided 5-4-3-2-1 sensory grounding pacer?",
    "stickySub": "Pair visual orienting with slow exhale breathing right now",
    "stickyBtn": "Grounding Pacer →",
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
    "title": "과각성·위협감지 신경계 3분 안전 리셋 | DopaBrain",
    "metaDesc": "별일이 없는데도 늘 어깨에 힘이 들어가고 주변 소리·사람 말투를 경계하나요? 5가지 과각성(Hypervigilance) 신호를 로컬에서 점검하고 3분 신체 안전 오리엔팅을 진행하세요.",
    "kicker": "위협 경보 해제 · 3분 안전 오리엔팅",
    "heroTitle": "과각성·위협감지 신경계 안전 리셋",
    "heroLead": "안전한 공간에 있는데도 문 쪽을 확인하거나 상대 말투의 미세한 변화에 바짝 긴장하나요? 5가지 과각성 레이더 신호를 비공개로 점검해 몸에 \"지금은 안전하다\"는 신호를 보내세요.",
    "chip1": "5가지 경계 신호",
    "chip2": "3분 안전 오리엔팅",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 경계 레이더 강도 점검 (1 = 이완, 5 = 최고 경계)",
    "step1Title": "지금 내 몸의 위협 감지 레이더가 얼마나 켜져 있나요?",
    "step1Sub": "모든 응답은 내 기기 안에서만 계산되며 외부로 전송되지 않습니다.",
    "inputLabel": "선택: 지금 이 방에서 내가 안전하다는 중립적 증거 1가지 (100% 로컬):",
    "ctaBtn": "경계 강도 확인 & 3분 안전 리셋",
    "resultBadge": "2단계 • 나의 3분 안전 오리엔팅 프로토콜",
    "noteTitle": "지금 공간에서 확인한 안전의 증거",
    "meterLabel": "신경계 경계 해제 여유도",
    "scriptTitle": "몸의 경보를 내려놓는 현재 시점 안전 문장",
    "stepsTitle": "경계 레이더를 낮추는 3분 오리엔팅 순서",
    "stickyTitle": "5-4-3-2-1 감각 그라운딩과 호흡 페이서가 필요하신가요?",
    "stickySub": "시선 오리엔팅과 느린 날숨 호흡을 바로 함께 진행해 보세요",
    "stickyBtn": "그라운딩 페이서 →",
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
    "title": "过度警觉3分钟安全重置 | DopaBrain",
    "heroTitle": "过度警觉安全重置",
    "ctaBtn": "开始3分钟安全定向",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "過覚醒・警戒モード 3分安心リセット | DopaBrain",
    "heroTitle": "過覚醒 安心リセット",
    "ctaBtn": "3分安心プロトコルを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reinicio de Seguridad Hipervigilancia | DopaBrain",
    "heroTitle": "Reinicio Hipervigilancia",
    "ctaBtn": "Iniciar orientación 3m",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Segurança Hipervigilância | DopaBrain",
    "heroTitle": "Reset Hipervigilância",
    "ctaBtn": "Iniciar orientação 3m",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Hypervigilanz-Sicherheits-Reset (3m) | DopaBrain",
    "heroTitle": "Hypervigilanz-Reset",
    "ctaBtn": "3-Min-Orientierung starten",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Sécurité Hypervigilance (3m) | DopaBrain",
    "heroTitle": "Reset Hypervigilance",
    "ctaBtn": "Lancer l’orientation 3m",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс гипербдительности (3 мин) | DopaBrain",
    "heroTitle": "Сброс гипербдительности",
    "ctaBtn": "Начать сброс за 3 мин",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "हाइपरविजिलेंस 3-मिनट सेफ्टी रीसेट | DopaBrain",
    "heroTitle": "हाइपरविजिलेंस रीसेट",
    "ctaBtn": "3-मिनट रीसेट शुरू करें",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Keamanan Hipervigilansi (3m) | DopaBrain",
    "heroTitle": "Reset Hipervigilansi",
    "ctaBtn": "Mulai Orientasi 3m",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Hipervijilans 3 Dk Güven Sıfırlama | DopaBrain",
    "heroTitle": "Hipervijilans Sıfırlama",
    "ctaBtn": "3 Dk Yönelim Başlat",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "room_scan",
    "en": "Exit & Sound Scanning — Tracking footsteps, doors, or sudden noises automatically",
    "ko": "공간·소리 감시 — 발소리, 문 열림, 작은 소음에도 신경이 즉각 쏠림"
  },
  {
    "id": "tone_radar",
    "en": "Micro-Tone Decoding — Replaying brief texts or facial expressions to predict anger",
    "ko": "말투·표정 과해석 — 짧은 답장이나 무표정에서 화난 기색을 먼저 찾게 됨"
  },
  {
    "id": "body_brace",
    "en": "Chronic Muscle Bracing — Unconsciously clenching jaw, stomach, or raised shoulders",
    "ko": "지속적 근육 긴장 — 나도 모르게 턱을 악물거나 어깨와 배에 힘이 들어가 있음"
  },
  {
    "id": "startle",
    "en": "High Startle Reflex — Jumping sharply at phone pings, knocks, or unexpected movement",
    "ko": "예민한 놀람 반사 — 알림음이나 갑작스러운 움직임에 심장이 크게 뜀"
  },
  {
    "id": "rest_unease",
    "en": "Unease When Quiet — Feeling weirdly exposed or waiting for \"the other shoe to drop\" when calm",
    "ko": "고요함의 어색함 — 조용하고 평온하면 오히려 무슨 일이 터질 것 같아 불안함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High-Alert Guard Mode — Run 3-Minute Visual Orienting First",
    "koT": "고강도 경계 모드 — 먼저 3분 시각 오리엔팅으로 경보를 낮추세요",
    "enD": "Your threat-detection system is working overtime to keep you safe. Telling yourself \"just relax\" rarely works—show your eyes and neck slowly that the room is calm right now.",
    "koD": "위협 감지 시스템이 나를 지키려고 초과 근무 중입니다. 머리로 \"진정해\"라고 말하기보다, 눈과 목을 천천히 움직여 지금 공간이 안전하다는 증거를 몸에 직접 보여주세요.",
    "enS": "\"Thank you for trying to protect me, nervous system. I have checked the room—right here, right now, there is no emergency.\"",
    "koS": "\"나를 지키려 애써줘서 고마워, 신경계야. 방금 주변을 확인했어—지금 이 순간 여기엔 어떤 위기도 없어.\"",
    "enL": [
      "Turn your head slowly left, right, and behind your shoulders—let your eyes linger on 3 neutral objects.",
      "Drop your jaw 2mm, let your tongue rest off the roof of your mouth, and exhale twice as long as you inhale.",
      "Feel the solid weight of your back and feet supported by the chair or floor for 30 seconds."
    ],
    "koL": [
      "고개를 좌우와 어깨 너머로 천천히 돌리며 방 안의 평범한 사물 3곳에 시선을 머무르세요.",
      "어금니 사이를 2mm 띄우고 혀 힘을 뺀 뒤, 들이마시는 숨보다 2배 길게 내쉬세요.",
      "의자와 바닥이 내 등과 발을 단단히 받치고 있는 무게감을 30초간 느껴보세요."
    ]
  },
  "mid": {
    "enT": "Elevated Background Radar — Soften Bracing Before Fatigue Hits",
    "koT": "배경 경계 활성 구간 — 피로가 쌓이기 전에 긴장을 풀어주세요",
    "enD": "You are functioning well, yet low-grade bracing is quietly draining your afternoon energy. Two 60-second shoulder-and-gaze resets will noticeably restore calm.",
    "koD": "일상은 잘 굴러가지만 은은한 긴장 유지가 오후 에너지를 조용히 빼앗고 있습니다. 60초짜리 어깨·시선 리셋 2번만으로도 체감 피로가 확 줄어듭니다.",
    "enS": "\"I do not need to predict everyone’s mood right now—I can stay in my own steady breath.\"",
    "koS": "\"지금 모든 사람의 기분을 미리 예측할 필요 없어—나는 내 차분한 호흡 안에 머물러도 괜찮아.\"",
    "enL": [
      "Widen your gaze from the narrow screen to the edges of the room (peripheral vision calms the amygdala).",
      "Roll your shoulders up for 3 seconds, then drop them completely on a slow sigh.",
      "Mute non-essential notification sounds for the next 2 hours."
    ],
    "koL": [
      "좁은 화면에서 시선을 떼어 방 양쪽 끝까지 넓게 바라보세요(주변 시야는 편도체를 진정시킵니다).",
      "어깨를 3초간 귀 쪽으로 올렸다가 긴 한숨과 함께 툭 떨어뜨리세요.",
      "앞으로 2시간 동안 비필수 알림 소리를 무음으로 전환하세요."
    ]
  },
  "high": {
    "enT": "Settled Safety Baseline — Steady Rest & Open Presence",
    "koT": "안정된 안전 기저선 — 편안한 휴식과 열린 현재 감각",
    "enD": "Your nervous system registers genuine safety right now. Savor this calm for 20 seconds so your brain stores a clear reference point for busier days.",
    "koD": "신경계가 지금의 안전함을 온전히 느끼고 있습니다. 바쁜 날에 다시 꺼내 쓸 수 있도록 이 평온한 몸의 감각을 20초간 천천히 음미해 두세요.",
    "enS": "\"Calm is safe. I can enjoy this quiet moment without scanning for what might go wrong next.\"",
    "koS": "\"평온함은 안전해. 다음에 무슨 일이 생길지 미리 경계하지 않고 지금의 고요함을 그대로 누려도 괜찮아.\"",
    "enL": [
      "Notice how relaxed shoulders and easy breathing feel in your body right now.",
      "Protect consistent wind-down rituals before sleep.",
      "Keep checking in briefly after loud or crowded days."
    ],
    "koL": [
      "지금 편안하게 내려온 어깨와 부드러운 호흡의 감각을 몸에 기억해 두세요.",
      "잠들기 전 조용한 진정 루틴을 꾸준히 지켜주세요.",
      "시끄럽거나 사람이 많았던 날 저녁엔 2분 오리엔팅으로 깔끔히 정리하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_hypervig_v1";
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
      window.gtag('event', "hypervigilance_reset_complete", {
        tool_slug: "hypervigilance-safety-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/hypervigilance-safety-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "hypervigilance-safety-reset",
        filename: 'dopabrain-hypervigilance-safety-reset-card.png',
        badge: "STAND DOWN THE ALARM • 3-MIN ORIENTING",
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
