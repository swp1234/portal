/* Roommate & Shared-Space Calm Agreement Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Roommate & Shared-Space Calm Agreement Builder | DopaBrain",
    "metaDesc": "Silently fuming over piled-up dishes, late-night noise, or unannounced guests? Audit 5 shared-living friction points locally and draft a friendly, zero-passive-aggressive house reset text.",
    "kicker": "SHARED LIVING • ROOMMATE & HOUSEHOLD CALM AGREEMENT BUILDER",
    "heroTitle": "Roommate & Shared-Space Calm Agreement Builder",
    "heroLead": "Silently fuming over piled-up dishes, late-night noise, or unannounced guests? Audit 5 shared-living friction points locally and draft a friendly, zero-passive-aggressive house reset text.",
    "chip1": "5 Shared Friction Points",
    "chip2": "Zero-Snark House Text",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR SHARED-SPACE FRICTION SIGNALS (1 = PEACEFUL, 5 = TENSE)",
    "step1Title": "Which unspoken household norm is creating tension?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONE specific, observable house request I want to align on kindly (100% local):",
    "ctaBtn": "Build My Calm Roommate Reset Script",
    "resultBadge": "STEP 2 • YOUR ZERO-DRAMA SHARED-SPACE AGREEMENT",
    "noteTitle": "My Clear House Request",
    "meterLabel": "Home Peace Score",
    "scriptTitle": "Friendly \"House Systems Check\" Text (No Passive-Aggressive Notes)",
    "stepsTitle": "3 Shared-Living Habits That Prevent Silent Resentment",
    "stickyTitle": "See how you naturally handle closeness, space, and everyday friction.",
    "stickySub": "Take the free 2-Min Attachment Style Check",
    "stickyBtn": "Attachment Test →",
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
    "title": "룸메이트·동거인 감정 상하지 않는 4대 생활 규칙 & 대화 키트 | DopaBrain",
    "metaDesc": "쌓인 설거지·심야 소음·사전 연락 없는 손님 때문에 속으로만 화가 쌓이고 있나요? 5가지 공동 주거 마찰 지점을 점검하고 감정 상하지 않는 깔끔한 생활 합의 멘트를 준비하세요.",
    "kicker": "공동 주거 평화 · 룸메이트·하우스메이트 갈등 없는 4대 생활 합의 키트",
    "heroTitle": "룸메이트·동거인 감정 상하지 않는 4대 생활 규칙 & 대화 키트",
    "heroLead": "쌓인 설거지·심야 소음·사전 연락 없는 손님 때문에 속으로만 화가 쌓이고 있나요? 5가지 공동 주거 마찰 지점을 점검하고 감정 상하지 않는 깔끔한 생활 합의 멘트를 준비하세요.",
    "chip1": "5가지 생활 마찰",
    "chip2": "부드러운 합의 문자",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 공동 주거 마찰·눈치 스트레스 점검 (1 = 평온, 5 = 팽팽함)",
    "step1Title": "말로 정해 두지 않아 가장 크게 불편함이 쌓이는 영역은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 감정 없이 구체적으로 맞추고 싶은 생활 규칙 1가지 (100% 로컬):",
    "ctaBtn": "내 부드러운 룸메이트 합의 스크립트 보기",
    "resultBadge": "2단계 • 어색함 없이 평화를 지키는 생활 합의 프로토콜",
    "noteTitle": "구체적으로 맞출 생활 규칙 1가지",
    "meterLabel": "공동 주거 평화 지수",
    "scriptTitle": "비난 없이 산뜻하게 꺼내는 \"생활 규칙 점검\" 1줄 문자",
    "stepsTitle": "집 안 냉전을 예방하는 3가지 공동 주거 원칙",
    "stickyTitle": "가까운 공간에서 갈등과 경계를 다루는 내 관계 성향을 살펴볼까요?",
    "stickySub": "무료 2분 애착 유형 테스트 바로가기",
    "stickyBtn": "애착 테스트 →",
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
    "title": "室友与合租空间4大和平协议与沟通话术 | DopaBrain",
    "heroTitle": "室友与合租空间4大和平协议与沟通话术",
    "heroLead": "用“对事不对人”的4项基础约定轻松化解洗碗、噪音与访客摩擦。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "ルームメイト・同居人4大生活ルール合意キット | DopaBrain",
    "heroTitle": "ルームメイト・同居人4大生活ルール合意キット",
    "heroLead": "洗い物・騒音・来客のモヤモヤを角を立てずに整える穏やかな合意メッセージを作成。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Acuerdo de Paz para Compañeros de Piso (4 Reglas) | DopaBrain",
    "heroTitle": "Acuerdo de Paz para Compañeros de Piso (4 Reglas)",
    "heroLead": "Resuelve platos, ruido y visitas sin notas pasivo-agresivas con mensajes claros y amables.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Acordo de Paz para Colegas de Quarto e Casa Compartilhada | DopaBrain",
    "heroTitle": "Acordo de Paz para Colegas de Quarto e Casa Compartilhada",
    "heroLead": "Alinhe louça, silêncio e visitas com leveza e zero clima pesado no apartamento.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "WG- & Mitbewohner-Friedensplan (4 Haus-Regeln) | DopaBrain",
    "heroTitle": "WG- & Mitbewohner-Friedensplan (4 Haus-Regeln)",
    "heroLead": "Kläre Abwasch, Ruhezeiten und Besuch freundlich ohne passiv-aggressive Zettel.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Accord de Paix Colocation & Espaces Partagés | DopaBrain",
    "heroTitle": "Accord de Paix Colocation & Espaces Partagés",
    "heroLead": "Réglez vaisselle, bruit et invités avec tact grâce à un point colocation bienveillant.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Конструктор мирных правил для соседей по квартире | DopaBrain",
    "heroTitle": "Конструктор мирных правил для соседей по квартире",
    "heroLead": "Договоритесь о посуде, тишине и гостях доброжелательно и без пассивной агрессии.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "रूममेट और शेयर्ड-स्पेस पीस एग्रीमेंट बिल्डर | DopaBrain",
    "heroTitle": "रूममेट और शेयर्ड-स्पेस पीस एग्रीमेंट बिल्डर",
    "heroLead": "बर्तन, शोर और मेहमानों के नियम बिना मनमुटाव के विनम्रता से तय करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pembuat Kesepakatan Damai Teman Sekamar (4 Aturan) | DopaBrain",
    "heroTitle": "Pembuat Kesepakatan Damai Teman Sekamar (4 Aturan)",
    "heroLead": "Atasi gesekan cucian, suara, dan tamu dengan pesan sopan tanpa sindiran.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Ev Arkadaşı ve Ortak Alan Barış Anlaşması Oluşturucu | DopaBrain",
    "heroTitle": "Ev Arkadaşı ve Ortak Alan Barış Anlaşması Oluşturucu",
    "heroLead": "Bulaşık, gürültü ve misafir konularını gerginlik olmadan nazikçe netleştirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "silent_dish_seething",
    "en": "Silent Sink Seething — Doing someone else’s dishes angrily while saying \"it’s fine\"",
    "ko": "속으로 삭히는 설거지 — 화를 참으며 남의 설거지를 해 주고 겉으론 \"괜찮아\"라 함"
  },
  {
    "id": "unspoken_quiet_hours",
    "en": "Vague Quiet Hours — Assuming everyone shares the same 11 PM sleep/noise standard",
    "ko": "모호한 정숙 시간 — 말하지 않아도 밤 11시엔 조용히 할 거라 막연히 기대함"
  },
  {
    "id": "surprise_guests",
    "en": "Unannounced Guests — Walking out in pajamas to unexpected strangers in the kitchen",
    "ko": "예고 없는 손님 — 편한 차림으로 나왔는데 거실에 모르는 손님이 있어 당황함"
  },
  {
    "id": "passive_sticky_notes",
    "en": "Snarky Sticky Notes — Leaving sharp notes instead of a warm 2-minute face-to-face reset",
    "ko": "날 선 메모지 — 2분 부드러운 대화 대신 비꼬는 쪽지나 단톡 메시지로 감정이 상함"
  },
  {
    "id": "shared_supply_drift",
    "en": "Shared-Supply Drift — One person quietly buying all toilet paper, soap, and trash bags",
    "ko": "공용 생필품 불균형 — 휴지·세제·종량제 봉투를 매번 한 사람만 사게 됨"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Home Tension — Run a 10-Min \"House Systems Reset\" Using Specific Behavior + Shared Benefit",
    "koT": "집 안 긴장 높음 — 성격을 탓하지 말고 \"구체적 행동 + 서로의 편안함\" 10분 생활 점검을 제안하세요",
    "enD": "Living peacefully with roommates rarely requires becoming best friends—it requires explicit, observable defaults (sink cutoff time, quiet hours, guest heads-up, shared bill split app) agreed calmly during daylight.",
    "koD": "공동 주거의 평화는 절친이 되는 게 아니라 눈에 보이는 기본 기준(싱크대 마감 시간·정숙 시간·손님 사전 공유·공용 물품 정산)을 밝은 낮에 부드럽게 합의하는 데서 나옵니다.",
    "enS": "\"Hey [Name]! Really appreciate living together—could we do a quick 5-min house systems check this weekend (sink rhythm, quiet hours, shared supplies) so we’re both super comfortable?\"",
    "koS": "\"[이름]님, 같이 지내면서 편하게 잘 맞추고 싶어서요! 이번 주말에 5분만 설거지·정숙 시간·공용 생필품 기준을 서로 편한 쪽으로 가볍게 정리해 볼까요?\"",
    "enL": [
      "Critique the SYSTEM, never the person (\"Let’s set a 24-hour sink rule\" instead of \"You’re messy\").",
      "Lock 4 concrete defaults: 1) Kitchen/dishes window · 2) Weekday quiet hours · 3) Guest heads-up text · 4) Shared supplies split app.",
      "Bring up small annoyances within 48 hours while your voice is still warm and light."
    ],
    "koL": [
      "사람 성격이 아니라 \"시스템\"을 말하세요(\"너 지저분해\" 대신 \"우리 싱크대는 취침 전 비우기 규칙으로 해 볼까?\").",
      "4대 기본 기준만 명확히 맞추세요: ①주방/설거지 마감 ②평일 정숙 시간 ③손님 사전 톡 ④공용 물품 1/N 정산.",
      "작은 불편은 쌓여서 터지기 전 48시간 안에 목소리가 부드러울 때 가볍게 꺼내세요."
    ]
  },
  "mid": {
    "enT": "Mostly Smooth — Clarify One Lingering Gray Area Over Coffee",
    "koT": "대체로 원만함 — 애매한 1가지 기준만 가볍게 맞춰 두세요",
    "enD": "Clarifying a single recurring snag early keeps your home genuinely restful.",
    "koD": "반복되는 사소한 1가지만 일찍 맞추면 집이 훨씬 편안한 휴식처가 됩니다.",
    "enS": "\"Clear house rules make relaxed roommates.\"",
    "koS": "\"명확한 생활 규칙이 오히려 가장 편하고 유쾌한 동거를 만든다.\"",
    "enL": [
      "Use a simple split app for shared soap/trash bags.",
      "Send a friendly heads-up text before guests visit.",
      "Appreciate each other’s considerate habits aloud."
    ],
    "koL": [
      "공용 생필품은 정산 앱이나 공동 통장으로 자동화해 보세요.",
      "손님이 올 땐 먼저 가볍게 사전 톡을 보내는 문화를 여세요.",
      "상대가 배려해 준 사소한 행동에 고맙다고 한마디 건네 보세요."
    ]
  },
  "high": {
    "enT": "Peaceful Shared Home — Respectful & Easygoing Living",
    "koT": "평화로운 공동 주거 — 서로 존중하는 쾌적한 생활 리듬입니다",
    "enD": "Clear defaults and warm communication keep home stress-free.",
    "koD": "명확한 배려와 편안한 소통으로 집이 진정한 쉼터로 유지되고 있습니다.",
    "enS": "\"Good boundaries make great neighbors under one roof.\"",
    "koS": "\"건강한 선이 한 지붕 아래 최고의 평화를 지킨다.\"",
    "enL": [
      "Do a friendly seasonal check-in once a quarter.",
      "Keep shared supplies effortless.",
      "Enjoy a calm, drama-free living space."
    ],
    "koL": [
      "분기마다 5분 가볍게 생활 불편이 없는지 안부를 나눠 보세요.",
      "공용 물품 관리 루틴을 유지하세요.",
      "평온한 집 안 분위기를 계속 만끽하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_roommate_peace_v1";
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
      window.gtag('event', "roommate_peace_plan_complete", {
        tool_slug: "roommate-shared-space-peace-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/roommate-shared-space-peace-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "roommate-shared-space-peace-plan",
        filename: 'dopabrain-roommate-shared-space-peace-plan-card.png',
        badge: "SHARED LIVING • ROOMMATE & HOUSEHOLD CALM AGREEMENT BUILDER",
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
