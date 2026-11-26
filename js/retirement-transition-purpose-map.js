/* Retirement & Major Life-Transition Purpose Rhythm Map
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Retirement & Major Life-Transition Purpose Rhythm Map | DopaBrain",
    "metaDesc": "Stepping out of a long career, finishing school, or entering an empty-nest chapter and feeling unexpectedly unmoored? Audit 5 structure & identity pillars locally and design a vibrant weekly rhythm.",
    "kicker": "MAJOR LIFE TRANSITION • PURPOSE & RHYTHM MAP",
    "heroTitle": "Retirement & Major Life-Transition Purpose Rhythm Map",
    "heroLead": "Stepping out of a long career, finishing school, or entering an empty-nest chapter and feeling unexpectedly unmoored? Audit 5 structure & identity pillars locally and design a vibrant weekly rhythm.",
    "chip1": "5 Purpose Pillars",
    "chip2": "Weekly Rhythm Map",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR TRANSITION PILLARS (1 = STRONG, 5 = MISSING RIGHT NOW)",
    "step1Title": "Which life-structure anchors feel most open or undefined right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: 1 weekly curiosity, craft, or community rhythm I want to try this month (100% local):",
    "ctaBtn": "Build My Next-Chapter Rhythm Map",
    "resultBadge": "STEP 2 • YOUR NEXT-CHAPTER PURPOSE & WEEKLY RHYTHM PLAN",
    "noteTitle": "My First Monthly Curiosity Experiment",
    "meterLabel": "Transition Structure & Vitality",
    "scriptTitle": "Identity-Expansion Affirmation",
    "stepsTitle": "3 Proven Moves for a Fulfilling Life Transition",
    "stickyTitle": "Want to map your 10-year values and future-self archetype?",
    "stickySub": "Take the free Future Self Test next",
    "stickyBtn": "Future Self →",
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
    "title": "은퇴·경력 전환·인생 2막 일상 리듬 & 의미 설계 맵 | DopaBrain",
    "metaDesc": "오랜 직장·학업·양육의 한 챕터를 마친 뒤 갑작스러운 공허함과 막막함이 찾아왔나요? 5가지 일상 구조·정체성 기둥을 점검하고 설레는 주간 리듬을 설계하세요.",
    "kicker": "은퇴·인생 2막 전환 · 일상 리듬 & 의미 설계 맵",
    "heroTitle": "은퇴·경력 전환·인생 2막 일상 리듬 & 의미 설계 맵",
    "heroLead": "오랜 직장·학업·양육의 한 챕터를 마친 뒤 갑작스러운 공허함과 막막함이 찾아왔나요? 5가지 일상 구조·정체성 기둥을 점검하고 설레는 주간 리듬을 설계하세요.",
    "chip1": "5가지 의미 기둥",
    "chip2": "주간 리듬 설계",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 전환기 삶의 기둥 점검 (1 = 탄탄함, 5 = 비어 있음)",
    "step1Title": "새 챕터에서 가장 비어 있거나 새로 채우고 싶은 삶의 기둥은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 달 가볍게 시도해 보고 싶은 주간 호기심·취미·커뮤니티 활동 1가지 (100% 로컬):",
    "ctaBtn": "내 인생 2막 리듬·의미 설계 보기",
    "resultBadge": "2단계 • 인생 전환기 의미 및 주간 리듬 플랜",
    "noteTitle": "이번 달 시작할 첫 호기심 실험",
    "meterLabel": "전환기 일상 구조·활력 지수",
    "scriptTitle": "역할을 넘어 나를 확장하는 문장",
    "stepsTitle": "건강하고 활기찬 인생 전환을 여는 3단계",
    "stickyTitle": "10년 뒤 내가 그리는 가치관과 미래의 나 아키타입을 탐색해 볼까요?",
    "stickySub": "무료 미래의 나 테스트로 다음 챕터 방향성 확인하기",
    "stickyBtn": "미래의 나 →",
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
    "title": "退休与人生转折期目标节奏规划图 | DopaBrain",
    "heroTitle": "退休与人生转折期目标节奏规划图",
    "heroLead": "重构离开旧角色后的日常结构、社交连接与每周好奇心小实验。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "退職・人生転機のパーパス＆週間リズム設計 | DopaBrain",
    "heroTitle": "退職・人生転機のパーパス＆週間リズム設計",
    "heroLead": "大きな節目の空白を「運動・人・好奇心」の3つの週間アンカーで彩ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Mapa de Propósito para Transiciones y Retiro | DopaBrain",
    "heroTitle": "Mapa de Propósito para Transiciones y Retiro",
    "heroLead": "Reconstruye rutina, comunidad y curiosidad en nuevas etapas de vida.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Mapa de Propósito para Aposentadoria e Transições | DopaBrain",
    "heroTitle": "Mapa de Propósito para Aposentadoria e Transições",
    "heroLead": "Redesenhe rotina, comunidade e curiosidade em novos capítulos da vida.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Ruhestand- & Lebensübergangs-Kompass | DopaBrain",
    "heroTitle": "Ruhestand- & Lebensübergangs-Kompass",
    "heroLead": "Gestalte Struktur, Gemeinschaft und Neugier für dein nächstes Lebenskapitel.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Carte Rythme & Sens — Retraite et Transitions | DopaBrain",
    "heroTitle": "Carte Rythme & Sens — Retraite et Transitions",
    "heroLead": "Rebâtissez structure, liens et curiosité lors d’un grand tournant de vie.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Карта смысла и ритма при смене этапа жизни | DopaBrain",
    "heroTitle": "Карта смысла и ритма при смене этапа жизни",
    "heroLead": "Соберите новые опоры — движение, общение и любопытство — для следующей главы.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "रिटायरमेंट व लाइफ-ट्रांज़िशन पर्पज़ मैप | DopaBrain",
    "heroTitle": "रिटायरमेंट व लाइफ-ट्रांज़िशन पर्पज़ मैप",
    "heroLead": "जीवन के नए अध्याय में दिनचर्या, समुदाय और जिज्ञासा के 3 स्तंभ तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Peta Ritme & Makna Masa Pensiun & Transisi | DopaBrain",
    "heroTitle": "Peta Ritme & Makna Masa Pensiun & Transisi",
    "heroLead": "Bangun kembali rutinitas, komunitas, dan rasa ingin tahu di babak baru hidup Anda.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Emeklilik ve Yaşam Geçişi Amaç Haritası | DopaBrain",
    "heroTitle": "Emeklilik ve Yaşam Geçişi Amaç Haritası",
    "heroLead": "Yeni yaşam dönemlerinde rutin, topluluk ve merak sütunlarını güvenle kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "unstructured_week",
    "en": "Unstructured Days — Every day blending together with zero anchor times or weekly rhythm",
    "ko": "구조 없는 하루 — 요일 구분 없이 매일 비슷한 흐름으로 흘러가 활력이 떨어짐"
  },
  {
    "id": "role_identity_gap",
    "en": "Title/Role Identity Gap — Feeling unsure how to introduce yourself without your former job or role",
    "ko": "역할·직함 공백 — 예전 직함이나 역할 없이 나를 어떻게 정의할지 낯섦"
  },
  {
    "id": "built_in_community",
    "en": "Lost Built-In Community — Missing casual everyday chats with colleagues, classmates, or parents",
    "ko": "자동 커뮤니티 상실 — 매일 마주치던 동료·이웃과의 소소한 대화가 사라짐"
  },
  {
    "id": "curiosity_rust",
    "en": "Paused Curiosity — Years of busy duty left little practice exploring hobbies just for joy",
    "ko": "호기심 휴면 — 바쁜 의무에 치여 순수한 즐거움으로 배우는 감각이 무뎌짐"
  },
  {
    "id": "contribution_spark",
    "en": "Contribution Hunger — Wanting a light, meaningful way to share experience or help others",
    "ko": "기여 감각 갈증 — 내 경험이나 손길이 누군가에게 도움이 되는 작은 통로가 필요함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Wide-Open Blank Canvas — Install 3 Light Weekly Anchors (Body, People, Curiosity)",
    "koT": "넓은 전환기 백지 — \"신체·사람·호기심\" 3가지 가벼운 주간 앵커부터 심어 보세요",
    "enD": "Transition research (Bridges, 2004; Harvard Study of Adult Development) shows the \"neutral zone\" between old and new chapters feels awkward for almost everyone. Installing just 3 gentle recurring weekly anchors—movement, one community touchpoint, and one playful curiosity—brings vitality back quickly.",
    "koD": "하버드 성인발달 연구와 전환기 심리학(Bridges)에 따르면 큰 역할이 끝난 직후의 \"중립 지대\"는 누구나 어색하고 공허합니다. 완벽한 사명을 찾기보다 \"움직임·사람·호기심\" 3가지 가벼운 주간 앵커만 심으면 활력이 빠르게 돌아옵니다.",
    "enS": "\"I don’t need a grand 10-year master plan today—I’m running small, curious 30-day experiments to see what lights me up.\"",
    "koS": "\"오늘 거창한 10년 계획이 다 필요하지 않아. 앞으로 30일간 나를 미소 짓게 만드는 작은 호기심 실험부터 가볍게 해볼게.\"",
    "enL": [
      "Anchor 3 recurring weekly touchpoints on your calendar: 1 movement ritual, 1 social group/coffee, 1 curiosity/learning hour.",
      "Treat the next 90 days as low-pressure \"prototyping\"—keep what energizes you, drop what doesn’t.",
      "Reach out to 1 local club, volunteer circle, or peer class where faces become familiar weekly."
    ],
    "koL": [
      "주간 달력에 딱 3개 앵커를 심으세요: 규칙적 움직임 1개, 주 1회 대면 모임/커피, 순수 호기심 배움 1시간.",
      "앞으로 90일은 정답 찾기가 아닌 \"가벼운 실험 기간\"으로 두고 재밌는 것만 남기세요.",
      "매주 같은 얼굴을 자연스레 마주치는 동네 걷기·동호회·봉사·강좌 중 1곳을 탐색해 보세요."
    ]
  },
  "mid": {
    "enT": "Emerging Rhythm — Add One Generous Contribution or Creative Project",
    "koT": "리듬 형성 중 — 작은 기여 또는 창작 프로젝트 1개로 깊이를 더해 보세요",
    "enD": "Your weekly cadence is taking shape nicely. Adding one small outlet where your curiosity or hard-won experience helps someone else turns comfort into deep fulfillment.",
    "koD": "일상 리듬이 보기 좋게 잡혀가고 있습니다. 내 경험이나 손길이 작게라도 세상에 닿는 창구 1개를 더하면 편안함이 깊은 보람으로 확장됩니다.",
    "enS": "\"My curiosity and lived wisdom have plenty of fresh ways to matter.\"",
    "koS": "\"내가 쌓아온 경험과 호기심이 빛날 새로운 무대는 여전히 많다.\"",
    "enL": [
      "Pick one 4-week mini-project (garden, memoir notes, craft, mentoring, or local walk map).",
      "Protect slow mornings alongside your structured social days.",
      "Notice which weekly activities leave you genuinely energized afterward."
    ],
    "koL": [
      "4주짜리 작은 미니 프로젝트 1개(글쓰기·식물·공예·멘토링·동네 탐방)를 정해 보세요.",
      "약속이 있는 날과 여유로운 느린 아침의 균형을 지켜 나가세요.",
      "활동을 마친 뒤 진짜 에너지가 채워지는 항목을 가볍게 기록해 두세요."
    ]
  },
  "high": {
    "enT": "Vibrant Next Chapter — Rich Autonomy, Connection & Meaning",
    "koT": "활기찬 인생 2막 — 자율성·연결·의미가 풍성하게 어우러져 있습니다",
    "enD": "You have turned transition into genuine renewal. Keep staying curious and nurturing the friendships that bring warmth to each season.",
    "koD": "삶의 전환기를 진정한 새로움으로 멋지게 꽃피우고 계십니다. 지금의 호기심과 따뜻한 사람 관계를 계속 가꾸어 나가세요.",
    "enS": "\"Every new chapter is an invitation to stay curious, connected, and alive.\"",
    "koS": "\"인생의 매 새로운 챕터는 여전히 호기심 있고 따뜻하게 살아갈 수 있는 초대장이다.\"",
    "enL": [
      "Keep refreshing one seasonal curiosity every few months.",
      "Share your rhythm and encouragement with friends entering their own transitions.",
      "Savor the freedom to spend time on what genuinely matters most."
    ],
    "koL": [
      "계절마다 작은 새로운 호기심 하나씩을 계속 초대해 보세요.",
      "비슷한 전환기를 앞둔 지인들에게 당신의 여유와 지혜를 나누어 주세요.",
      "진짜 소중한 것들에 시간을 쓸 수 있는 지금의 자유를 마음껏 누리세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_next_chapter_map_v1";
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
      window.gtag('event', "next_chapter_map_complete", {
        tool_slug: "retirement-transition-purpose-map",
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
      var shareUrl = "https://dopabrain.com/portal/tools/retirement-transition-purpose-map.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "retirement-transition-purpose-map",
        filename: 'dopabrain-retirement-transition-purpose-map-card.png',
        badge: "MAJOR LIFE TRANSITION • PURPOSE & RHYTHM MAP",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
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
