/* Functional Freeze & Shutdown 5-Min Thaw Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Functional Freeze & Shutdown 5-Min Thaw Planner | DopaBrain",
    "metaDesc": "Free 12-language Functional Freeze & Dissociation Thaw Planner. Recognize 5 dorsal-vagal shutdown signs locally and unlock a zero-shame 5-minute somatic micro-movement ladder.",
    "keywords": "functional freeze recovery, dorsal vagal shutdown thaw, couch paralysis coping, dissociation grounding planner, nervous system freeze reset, dopabrain",
    "kicker": "ZERO-SHAME SOMATIC THAW LADDER",
    "heroTitle": "Functional Freeze & Shutdown 5-Min Thaw Planner",
    "heroLead": "Looking \"fine\" on the outside while feeling numb, stuck on the couch, or watching hours vanish on autopilot? Rate 5 freeze signals locally to build a gentle 5-minute thaw—no willpower shaming required.",
    "chip1": "5 Shutdown Signals",
    "chip2": "5m Somatic Thaw",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK SHUTDOWN WEIGHT (1 = FLOWING, 5 = FROZEN)",
    "step1Title": "How strongly are these functional-freeze signals showing up right now?",
    "step1Sub": "Freeze is nervous-system protection, not laziness. Everything stays strictly local.",
    "inputLabel": "Optional: 1 tiny 2-minute physical motion I can try without pressure (100% local):",
    "inputPlaceholder": "Example: Sitting up, drinking half a glass of cool water, and stepping onto the balcony for 60s",
    "ctaBtn": "Build Zero-Shame 5m Thaw Plan",
    "resultBadge": "STEP 2 • YOUR GENTLE 5-MINUTE THAW LADDER",
    "noteTitle": "My Zero-Pressure Tiny First Motion",
    "meterLabel": "Nervous System Mobility Reserve",
    "scriptTitle": "Compassionate Cue to Break Freeze Shame",
    "stepsTitle": "3 Gentle Somatic Steps (Bottom-Up First)",
    "stickyTitle": "Want a guided 60-second nervous-system reset menu?",
    "stickySub": "Try gentle orienting & physiological sighs matched to shutdown",
    "stickyBtn": "Vagal Reset →",
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
    "title": "기능적 동결·해리 5분 부드러운 해동 플래너 | DopaBrain",
    "metaDesc": "겉으로는 일상생활을 하지만 속은 멍하고 소파에서 꼼짝 못 하겠나요? 5가지 기능적 동결(Functional Freeze) 신호를 비공개로 점검하고 자책 없는 5분 신체 해동 단계를 받아보세요.",
    "kicker": "자책 없는 5분 신체 해동 사다리",
    "heroTitle": "기능적 동결·셧다운 5분 해동 플래너",
    "heroLead": "해야 할 일을 알면서도 몸이 납처럼 무겁거나 무의식 스크롤로 몇 시간이 훅 지나가나요? 게으름이 아니라 신경계 보호 반응입니다. 5가지 동결 신호를 점검해 아주 작은 움직임부터 해동하세요.",
    "chip1": "5가지 동결 신호",
    "chip2": "5분 신체 해동",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 동결·멍함 정도 점검 (1 = 가벼움, 5 = 단단히 굳음)",
    "step1Title": "지금 아래 기능적 동결 신호가 얼마나 크게 느껴지나요?",
    "step1Sub": "동결은 의지 부족이 아니라 과부하 차단기입니다. 모든 입력은 기기 안에만 남습니다.",
    "inputLabel": "선택: 부담 없이 시도할 아주 작은 2분 움직임 1가지 (100% 로컬):",
    "ctaBtn": "자책 없는 5분 해동 플랜 만들기",
    "resultBadge": "2단계 • 나의 5분 부드러운 해동 사다리",
    "noteTitle": "부담 없이 시작할 나의 첫 번째 미세 움직임",
    "meterLabel": "현재 신경계 가동 여유도",
    "scriptTitle": "게으름 자책을 멈추는 따뜻한 전환 문장",
    "stepsTitle": "뇌가 아니라 몸부터 부드럽게 깨우는 3단계",
    "stickyTitle": "60초 미주신경 리셋과 생리적 한숨이 필요하신가요?",
    "stickySub": "동결 상태에 맞춘 부드러운 신체 활성화 메뉴를 열어보세요",
    "stickyBtn": "미주신경 리셋 →",
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
    "title": "功能性冻结5分钟温和解冻器 | DopaBrain",
    "heroTitle": "功能性冻结解冻计划",
    "ctaBtn": "生成5分钟解冻步骤",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "機能的フリーズ 5分解凍プランナー | DopaBrain",
    "heroTitle": "機能的フリーズ解凍",
    "ctaBtn": "5分解凍プランを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Descongelamiento Funcional (5m) | DopaBrain",
    "heroTitle": "Descongelamiento Funcional",
    "ctaBtn": "Crear plan suave de 5m",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Descongelamento Funcional (5m) | DopaBrain",
    "heroTitle": "Descongelamento Funcional",
    "ctaBtn": "Criar plano de 5m",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Functional-Freeze-Auftau-Planer (5m) | DopaBrain",
    "heroTitle": "Functional-Freeze-Planer",
    "ctaBtn": "5-Min-Auftauplan erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan de Dégel Functional Freeze (5m) | DopaBrain",
    "heroTitle": "Plan de Dégel Nerveux",
    "ctaBtn": "Créer mon plan 5 min",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План выхода из функционального ступора | DopaBrain",
    "heroTitle": "Выход из ступора (5 мин)",
    "ctaBtn": "Создать план на 5 мин",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "फंक्शनल फ्रीज़ 5-मिनट थॉ प्लानर | DopaBrain",
    "heroTitle": "फंक्शनल फ्रीज़ प्लानर",
    "ctaBtn": "5-मिनट प्लान बनाएं",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Cairkan Functional Freeze | DopaBrain",
    "heroTitle": "Cairkan Functional Freeze",
    "ctaBtn": "Buat Rencana 5 Menit",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "İşlevsel Donma 5 Dk Çözülme Planı | DopaBrain",
    "heroTitle": "İşlevsel Donma Planı",
    "ctaBtn": "5 Dk Çözülme Planı",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "autopilot",
    "en": "Autopilot Numbness — Doing bare-minimum tasks while feeling detached or foggy inside",
    "ko": "자동조종 멍함 — 겉으로는 일상을 해내지만 속은 텅 비거나 남의 일처럼 느껴짐"
  },
  {
    "id": "couch_lock",
    "en": "Body Heaviness / Couch Lock — Knowing what to do yet feeling glued in place",
    "ko": "몸의 납덩이감 — 할 일이 머리에 있는데 손가락 하나 까딱하기가 너무 무거움"
  },
  {
    "id": "scroll_trance",
    "en": "Numbed Scroll Trance — Losing 1–2 hours to feeds without actually enjoying them",
    "ko": "무감각 스크롤 — 재미도 없는데 화면을 내리며 1~2시간이 멍하게 사라짐"
  },
  {
    "id": "time_fog",
    "en": "Time & Sensory Fuzziness — Feeling slightly outside the room or losing track of hours",
    "ko": "시간·감각 흐림 — 방 안이 약간 멀게 느껴지거나 몇 시인지 감각이 흐려짐"
  },
  {
    "id": "shame_loop",
    "en": "Self-Shame Spiral — Calling yourself \"lazy\" which only deepens the shutdown",
    "ko": "자책 악순환 — \"왜 이렇게 게으르지\" 자책할수록 몸이 더 굳어버림"
  }
];
  var TIERS = {
  "low": {
    "enT": "Deep Dorsal Freeze — Micro-Sensory Thaw Only (Zero Big Tasks)",
    "koT": "깊은 동결 상태 — 큰 목표 금지, 미세 감각 해동부터 시작하세요",
    "enD": "Forcing productivity during deep freeze backfires because your nervous system is conserving energy after overload. Start with warm temperature, gentle eye movement, and a single tiny motion.",
    "koD": "깊은 동결 상태에서 큰 할 일을 밀어붙이면 신경계가 더 단단히 닫힙니다. 따뜻한 온도·시선 돌리기·발가락 움직이기 같은 아주 작은 감각 신호부터 천천히 깨우세요.",
    "enS": "\"My body hit the circuit breaker to protect me from overload—I am not broken or lazy. One gentle 60-second movement is enough right now.\"",
    "koS": "\"내 몸이 과부하를 막으려고 차단기를 내린 것뿐이야—게으른 게 아니야. 지금은 60초짜리 아주 작은 움직임 하나면 충분해.\"",
    "enL": [
      "Wiggle your toes and roll your wrists slowly for 20 seconds while staying seated.",
      "Look slowly around the room and name 3 colors or textures to cue present-time safety.",
      "Hold a warm mug or splash cool water on your wrists—skip big to-do lists for the next hour."
    ],
    "koL": [
      "앉은 채로 발가락과 손목을 20초간 아주 천천히 꼼지락거려 몸의 감각을 깨우세요.",
      "고개를 천천히 돌려 방 안의 색깔 3가지를 눈으로 확인하며 현재 공간을 인식하세요.",
      "따뜻한 컵을 쥐거나 손목에 시원한 물을 적신 뒤, 1시간 동안 큰 할 일 목록은 덮어두세요."
    ]
  },
  "mid": {
    "enT": "Partial Functional Freeze — Gentle Activation Ladder (5 Minutes)",
    "koT": "부분 기능적 동결 — 5분 부드러운 활성화 사다리",
    "enD": "You have enough energy to shift from numbness into light motion as long as the first step feels almost laughably small and pleasant.",
    "koD": "첫걸음만 부담 없이 작고 기분 좋게 잡으면 멍한 상태에서 부드러운 흐름으로 넘어갈 수 있는 구간입니다.",
    "enS": "\"I do not have to finish everything today—I am just going to move my body for 5 gentle minutes and see how I feel.\"",
    "koS": "\"오늘 다 끝낼 필요 없어—딱 5분만 부드럽게 몸을 움직여 보고 그다음에 결정하자.\"",
    "enL": [
      "Put on 1 familiar upbeat or warm song and stand up to stretch for its length.",
      "Drink a full glass of water and open a window or curtains for natural light.",
      "Pick 1 two-minute tidy or comfort step (not your hardest chore) to build momentum."
    ],
    "koL": [
      "좋아하는 음악 1곡을 틀고 곡이 끝날 때까지만 일어나 가볍게 기지개를 켜세요.",
      "물 한 잔을 천천히 마시고 창문이나 커튼을 열어 자연광과 공기를 들이세요.",
      "가장 어려운 일 말고 2분 만에 끝나는 기분 좋은 작은 일 1개만 먼저 움직여 보세요."
    ]
  },
  "high": {
    "enT": "Connected & Mobile — Protect Gentle Pacing Before Overload",
    "koT": "연결되고 유연한 상태 — 과부하 전에 부드러운 페이스를 지키세요",
    "enD": "Your nervous system is engaged and present without needing shutdown protection. Keep inserting short sensory breaks so exhaustion never forces another freeze.",
    "koD": "신경계가 안전하게 연결되어 움직일 수 있는 상태입니다. 다시 차단기가 내려가지 않도록 바쁜 날에도 짧은 감각 휴식을 중간중간 넣어주세요.",
    "enS": "\"I can stay steady today by pacing my energy instead of sprinting until I crash.\"",
    "koS": "\"방전될 때까지 달리지 않고 중간중간 쉬어가며 오늘의 흐름을 안정적으로 지킬 수 있어.\"",
    "enL": [
      "Take a 3-minute posture & sunlight reset every 90 minutes.",
      "Notice early zoning-out as a cue to rest, not push harder.",
      "Keep evening screen friction gentle so sleep restores real energy."
    ],
    "koL": [
      "90분마다 3분씩 일어나 기지개와 창밖 보기로 신경계를 환기하세요.",
      "살짝 멍해지는 초기 신호를 \"더 버틸 때\"가 아니라 \"잠깐 쉴 때\"로 읽으세요.",
      "저녁 화면 자극을 줄여 수면 중에 진짜 에너지가 채워지도록 도우세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_freeze_thaw_v1";
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
      window.gtag('event', "freeze_thaw_complete", {
        tool_slug: "functional-freeze-thaw-planner",
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
      var shareUrl = "https://dopabrain.com/portal/tools/functional-freeze-thaw-planner.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "functional-freeze-thaw-planner",
        filename: 'dopabrain-functional-freeze-thaw-planner-card.png',
        badge: "ZERO-SHAME SOMATIC THAW LADDER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#38bdf8",
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
