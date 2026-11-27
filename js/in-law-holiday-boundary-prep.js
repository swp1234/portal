/* Family Gathering & Holiday Boundary Phrase Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Family Gathering & Holiday Boundary Phrase Kit | DopaBrain",
    "metaDesc": "Dreading intrusive questions about marriage, career, parenting, or money at family dinners? Audit 5 gathering triggers locally and pack 3 warm, drama-free deflection lines plus an exit time.",
    "kicker": "FAMILY BOUNDARIES • GATHERING & HOLIDAY PHRASE KIT",
    "heroTitle": "Family Gathering & Holiday Boundary Phrase Kit",
    "heroLead": "Dreading intrusive questions about marriage, career, parenting, or money at family dinners? Audit 5 gathering triggers locally and pack 3 warm, drama-free deflection lines plus an exit time.",
    "chip1": "5 Family Triggers",
    "chip2": "3 Calm Deflections",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR FAMILY-GATHERING TRIGGERS (1 = RELAXED, 5 = DREADING)",
    "step1Title": "What drains your emotional battery fastest at family events?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My planned arrival/exit window & 1 kind topic-pivot line (100% local):",
    "ctaBtn": "Build My Calm Family Gathering Kit",
    "resultBadge": "STEP 2 • YOUR DRAMA-FREE FAMILY BOUNDARY PLAN",
    "noteTitle": "My Planned Time Cap & Topic Pivot",
    "meterLabel": "Gathering Emotional Cushion",
    "scriptTitle": "Warm \"Deflect + Redirect\" Phrase (Zero Arguing)",
    "stepsTitle": "3 Calm Moves That Protect Your Peace at Any Family Table",
    "stickyTitle": "Do loud multi-hour family gatherings drain your sensory battery too?",
    "stickySub": "Check your HSP sensitivity profile in 2 minutes",
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
    "title": "명절·가족 모임 스트레스 예방 & 부드러운 경계 문장 키트 | DopaBrain",
    "metaDesc": "가족 모임만 다가오면 결혼·연봉·육아 잔소리와 비교 질문 때문에 숨이 막히나요? 5가지 모임 스트레스를 점검하고 싸우지 않고 대화를 돌리는 따뜻한 3문장과 퇴장 시각을 준비하세요.",
    "kicker": "가족 경계 · 명절·가족 모임 스트레스 & 부드러운 선 긋기 키트",
    "heroTitle": "명절·가족 모임 스트레스 예방 & 부드러운 경계 문장 키트",
    "heroLead": "가족 모임만 다가오면 결혼·연봉·육아 잔소리와 비교 질문 때문에 숨이 막히나요? 5가지 모임 스트레스를 점검하고 싸우지 않고 대화를 돌리는 따뜻한 3문장과 퇴장 시각을 준비하세요.",
    "chip1": "5가지 모임 스트레스",
    "chip2": "부드러운 3문장",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 가족·친척 모임에서 가장 지치는 요소 점검 (1 = 편안, 5 = 극도 부담)",
    "step1Title": "모임 자리에서 감정 배터리를 가장 빠르게 소진시키는 상황은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 미리 정해 두는 머무는 시간 & 자연스럽게 화제를 돌릴 주제 1가지 (100% 로컬):",
    "ctaBtn": "내 평온한 가족 모임 경계 키트 보기",
    "resultBadge": "2단계 • 갈등 없는 가족 모임 경계 & 회복 프로토콜",
    "noteTitle": "나의 체류 시간 상한 & 화제 전환 카드",
    "meterLabel": "모임 감정 완충 지수",
    "scriptTitle": "싸우지 않고 넘기는 \"미소 + 화제 전환\" 1줄",
    "stepsTitle": "어떤 가족 식탁에서도 내 평온을 지키는 3가지 요령",
    "stickyTitle": "시끌벅적한 다인 모임이 감각 배터리까지 빠르게 방전시키나요?",
    "stickySub": "무료 2분 HSP 민감성 체크 + 회복 가이드",
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
    "title": "家庭聚会与节假日边界感话术锦囊 | DopaBrain",
    "heroTitle": "家庭聚会与节假日边界感话术锦囊",
    "heroLead": "轻松化解催婚催生等越界提问，准备3句温和转移话题金句。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "家族の集まり・帰省の境界線フレーズキット | DopaBrain",
    "heroTitle": "家族の集まり・帰省の境界線フレーズキット",
    "heroLead": "踏み込んだ質問を角を立てずにかわす3フレーズと滞在時間ルールを設計します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Límites y Frases para Reuniones Familiares | DopaBrain",
    "heroTitle": "Kit de Límites y Frases para Reuniones Familiares",
    "heroLead": "Prepara 3 respuestas amables y un límite de tiempo para visitas sin drama.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Limites e Frases para Reuniões de Família | DopaBrain",
    "heroTitle": "Kit de Limites e Frases para Reuniões de Família",
    "heroLead": "Leve 3 respostas elegantes e um horário de saída combinado sem estresse.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Familienfeier- & Feiertags-Grenzen-Satz-Kit | DopaBrain",
    "heroTitle": "Familienfeier- & Feiertags-Grenzen-Satz-Kit",
    "heroLead": "Bleibe ruhig bei neugierigen Fragen mit 3 charmanten Themenwechseln.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Limites & Phrases Calmes pour Réunions de Famille | DopaBrain",
    "heroTitle": "Kit Limites & Phrases Calmes pour Réunions de Famille",
    "heroLead": "Désamorcez les questions indiscrètes avec 3 phrases douces et un horaire clair.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор спокойных фраз и границ для семейных встреч | DopaBrain",
    "heroTitle": "Набор спокойных фраз и границ для семейных встреч",
    "heroLead": "Подготовьте 3 мягких перевода темы и комфортное время ухода без конфликтов.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "पारिवारिक मिलन और त्योहार बाउंड्री फ़्रेज़ किट | DopaBrain",
    "heroTitle": "पारिवारिक मिलन और त्योहार बाउंड्री फ़्रेज़ किट",
    "heroLead": "असहज सवालों को विनम्रता से टालने के 3 शांत वाक्य और समय-सीमा तय करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Batasan & Kalimat Halus untuk Acara Keluarga | DopaBrain",
    "heroTitle": "Kit Batasan & Kalimat Halus untuk Acara Keluarga",
    "heroLead": "Siapkan 3 kalimat alihkan topik yang sopan agar kumpul keluarga tetap tenang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Aile Toplantısı ve Bayram Sınır İfadeleri Kiti | DopaBrain",
    "heroTitle": "Aile Toplantısı ve Bayram Sınır İfadeleri Kiti",
    "heroLead": "Özel soruları tartışmadan nazikçe yönlendirecek 3 sakin cümle hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "intrusive_questions",
    "en": "Intrusive Life Audits — Unsolicited questions on marriage, kids, weight, or pay",
    "ko": "선 넘는 질문 — 결혼·출산·연봉·외모에 대한 원치 않는 참견"
  },
  {
    "id": "unending_visit_window",
    "en": "Open-Ended Stay — Arriving without a clear departure time until everyone is exhausted",
    "ko": "끝없는 체류 — 갈 시간을 안 정해 지쳐 쓰러질 때까지 앉아 있음"
  },
  {
    "id": "old_family_role_pull",
    "en": "Regression Trap — Falling back into old teenage defensiveness within 20 minutes",
    "ko": "어린 시절 역할 회귀 — 20분 만에 옛날의 방어적·예민한 태도로 돌아감"
  },
  {
    "id": "debate_baiting",
    "en": "Hot-Button Bait — Politics or generational critiques designed to provoke arguments",
    "ko": "논쟁 유도 — 정치·세대 비교 등 싸움 붙는 화제에 말려듦"
  },
  {
    "id": "zero_breathing_breaks",
    "en": "No Micro-Escapes — Staying glued to the table 4 hours without stepping outside",
    "ko": "중간 숨통 부재 — 4시간 내내 자리를 못 뜨고 바깥 바람을 한 번도 못 쐼"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Gathering Tension — Set a Firm Time Cap + Pack 2 Warm Topic Pivots",
    "koT": "모임 긴장 높음 — 체류 시간 상한을 미리 알리고 따뜻한 화제 전환 2문장을 챙기세요",
    "enD": "Family-systems therapists (Tawwab, 2021) emphasize that boundaries don’t require convincing relatives to change—only deciding calmly how long you stay and which topics you decline to debate.",
    "koD": "가족 경계 전문가(Tawwab, 2021)에 따르면 건강한 선 긋기는 상대를 설득해 바꾸는 것이 아니라, 내가 머무는 시간과 반응할 주제를 미리 정하고 차분히 지키는 것입니다.",
    "enS": "\"Thanks for caring—we’re keeping that chapter private for now! By the way, how did your garden / trip turn out?\"",
    "koS": "\"신경 써 주셔서 감사해요, 그 부분은 저희끼리 차근차근 정하고 있어요! 그나저나 요즘 다니시는 운동/여행은 어떠셨어요?\"",
    "enL": [
      "Announce your departure time warmly at the start (\"So happy to be here—we have to head out at 5 PM!\").",
      "Practice \"Smile + Brief Non-Answer + Curious Pivot Question\" so you never JADE (Justify, Argue, Defend, Explain).",
      "Take two 5-minute sensory resets (help carry dishes, step onto the porch, or wash hands slowly with cool water)."
    ],
    "koL": [
      "도착하자마자 웃으며 귀가 시각을 먼저 알리세요(\"오늘 반가워요! 저녁 일정 있어 5시에 일어나야 해요\").",
      "길게 해명·논쟁하지 말고 \"미소 + 짧은 마무리 + 상대 관심사 질문\"으로 가볍게 돌리세요.",
      "중간에 5분씩 두 번(바깥 공기 쐬기·찬물 세수·심부름) 자리를 비워 신경을 환기하세요."
    ]
  },
  "mid": {
    "enT": "Manageable Friction — Pre-Plan One Walk Break & Post-Event Decompression",
    "koT": "관리 가능한 부담 — 중간 10분 산책과 귀가 후 휴식 시간만 확보하면 거뜬합니다",
    "enD": "Most of the visit is warm; having a gentle topic pivot and a quiet evening afterward protects your mood.",
    "koD": "대체로 따뜻한 자리지만 중간 환기와 귀가 후 조용한 회복 시간을 미리 빼 두면 훨씬 편안합니다.",
    "enS": "\"Stay warm, skip the bait, leave while energy is still good.\"",
    "koS": "\"따뜻하게 웃되 논쟁 미끼는 삼키지 않고, 기분 좋을 때 일어선다.\"",
    "enL": [
      "Offer a quick 10-minute neighborhood walk after the meal.",
      "Align privately with your partner on a subtle \"ready to wrap up\" signal.",
      "Keep the evening after the gathering completely unscheduled."
    ],
    "koL": [
      "식사 후 가볍게 10분 동네 산책을 제안해 분위기를 환기하세요.",
      "동반자가 있다면 \"슬슬 일어날 신호\"를 미리 가볍게 맞춰 두세요.",
      "모임이 끝난 저녁이나 다음 날 오전은 완전히 비워 두고 쉬세요."
    ]
  },
  "high": {
    "enT": "Relaxed Family Rhythm — Warm Connection With Healthy Boundaries",
    "koT": "편안한 가족 리듬 — 따뜻한 교류와 건강한 경계가 잘 서 있습니다",
    "enD": "You navigate family gatherings with steadiness and warmth. Enjoy the connection while keeping your pacing light.",
    "koD": "여유롭고 따뜻하게 모임을 즐기는 균형을 잘 잡고 계십니다.",
    "enS": "\"Show up present, stay kind, honor my energy.\"",
    "koS": "\"온전히 함께하되 내 에너지의 경계도 부드럽게 지킨다.\"",
    "enL": [
      "Share warm curiosity across generations.",
      "Keep pacing visits so everyone leaves smiling.",
      "Enjoy low-pressure post-gathering downtime."
    ],
    "koL": [
      "세대 간 따뜻한 호기심으로 기분 좋은 대화를 이끌어 보세요.",
      "모두가 웃을 때 깔끔하게 마무리하는 리듬을 유지하세요.",
      "모임 뒤 편안한 휴식 시간도 넉넉히 챙기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_holiday_boundary_prep_v1";
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
      window.gtag('event', "holiday_boundary_prep_complete", {
        tool_slug: "in-law-holiday-boundary-prep",
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
      var shareUrl = "https://dopabrain.com/portal/tools/in-law-holiday-boundary-prep.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "in-law-holiday-boundary-prep",
        filename: 'dopabrain-in-law-holiday-boundary-prep-card.png',
        badge: "FAMILY BOUNDARIES • GATHERING & HOLIDAY PHRASE KIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#a855f7",
        accent2: "#ec4899"
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
