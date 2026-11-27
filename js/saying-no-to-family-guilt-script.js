/* Saying No to Family Without Guilt Script Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Saying No to Family Without Guilt Script Builder | DopaBrain",
    "metaDesc": "Saying \"yes\" to family money, favors, or weekend demands while quietly burning out—because saying \"no\" triggers crushing guilt? Build a warm, firm, non-apologetic family script locally.",
    "kicker": "FAMILY BOUNDARIES • SAYING NO WITHOUT GUILT SCRIPT BUILDER",
    "heroTitle": "Saying No to Family Without Guilt Script Builder",
    "heroLead": "Saying \"yes\" to family money, favors, or weekend demands while quietly burning out—because saying \"no\" triggers crushing guilt? Build a warm, firm, non-apologetic family script locally.",
    "chip1": "5 Guilt Traps",
    "chip2": "Warm-Firm Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR FAMILY GUILT TRIGGERS (1 = CLEAR, 5 = CRUSHING GUILT)",
    "step1Title": "What makes holding a limit with family feel hardest?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One request I want to decline warmly while offering a smaller alternative (100% local):",
    "ctaBtn": "Build My Warm, Guilt-Free Family Script",
    "resultBadge": "STEP 2 • YOUR WARM-FIRM FAMILY BOUNDARY SCRIPT",
    "noteTitle": "My Clear Limit / Smaller Alternative",
    "meterLabel": "Boundary Steadiness",
    "scriptTitle": "Warm-Firm Broken-Record Script",
    "stepsTitle": "3 Principles That Separate Love From Endless Self-Sacrifice",
    "stickyTitle": "Do you absorb family moods deeply as a Highly Sensitive Person?",
    "stickySub": "Take the free 2-Min HSP Sensitivity Test",
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
    "title": "가족의 무리한 부탁, 죄책감 없이 거절하는 따뜻한 대본 생성기 | DopaBrain",
    "metaDesc": "가족의 금전·주말·돌봄 부탁을 거절하면 불효나 이기심 같아 늘 \"알겠어\" 하고 속으로 지쳐가나요? 사랑은 지키되 무리한 선은 단호히 긋는 따뜻한 가족 거절 대본을 만드세요.",
    "kicker": "가족 경계선 · 가족 부탁 죄책감 없이 거절하는 따뜻한 대본",
    "heroTitle": "가족의 무리한 부탁, 죄책감 없이 거절하는 따뜻한 대본 생성기",
    "heroLead": "가족의 금전·주말·돌봄 부탁을 거절하면 불효나 이기심 같아 늘 \"알겠어\" 하고 속으로 지쳐가나요? 사랑은 지키되 무리한 선은 단호히 긋는 따뜻한 가족 거절 대본을 만드세요.",
    "chip1": "5가지 죄책감 함정",
    "chip2": "따뜻·단호 대본",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 가족 요청 거절 시 죄책감 패턴 점검 (1 = 담담, 5 = 큰 죄책감)",
    "step1Title": "가족에게 \"이번엔 어렵다\"고 말할 때 가장 발목을 잡는 마음은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 따뜻하게 거절하거나 작은 대안으로 조율할 요청 1가지 (100% 로컬):",
    "ctaBtn": "내 따뜻하고 단호한 가족 거절 대본 보기",
    "resultBadge": "2단계 • 사랑과 경계를 함께 지키는 가족 대본",
    "noteTitle": "내가 지킬 현실적 한계·대안",
    "meterLabel": "경계선 단단함 지수",
    "scriptTitle": "죄책감 없이 반복해 쓰는 따뜻한 거절 멘트",
    "stepsTitle": "사랑과 자기희생을 건강하게 분리하는 3원칙",
    "stickyTitle": "가족의 감정 기복을 남들보다 깊게 흡수하는 HSP 기질인지 확인해 볼까요?",
    "stickySub": "무료 2분 HSP 민감성 테스트 바로가기",
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
    "title": "无负罪感婉拒家人要求话术生成器 | DopaBrain",
    "heroTitle": "无负罪感婉拒家人要求话术生成器",
    "heroLead": "不委屈自己也不伤感情，本地生成温和坚定的家庭边界回应话术。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "家族への無理な頼みを罪悪感なく断るスクリプト | DopaBrain",
    "heroTitle": "家族への無理な頼みを罪悪感なく断るスクリプト",
    "heroLead": "言い訳せず温かくはっきり線引きする家族向けフレーズをローカルで作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Guion para Decir No a la Familia sin Culpa | DopaBrain",
    "heroTitle": "Guion para Decir No a la Familia sin Culpa",
    "heroLead": "Rechaza peticiones agotadoras con cariño, claridad y sin sobreexplicarte.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Roteiro para Dizer Não à Família sem Culpa | DopaBrain",
    "heroTitle": "Roteiro para Dizer Não à Família sem Culpa",
    "heroLead": "Estabeleça limites familiares com afeto, firmeza e sem justificativas longas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Familie ohne Schuldgefühle Nein-Sagen-Skript | DopaBrain",
    "heroTitle": "Familie ohne Schuldgefühle Nein-Sagen-Skript",
    "heroLead": "Sag bei familiären Bitten herzlich und klar Nein – ohne langes Rechtfertigen.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Script Dire Non à la Famille sans Culpabilité | DopaBrain",
    "heroTitle": "Script Dire Non à la Famille sans Culpabilité",
    "heroLead": "Posez des limites familiales chaleureuses et fermes sans vous surjustifier.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Скрипт: как сказать «нет» семье без чувства вины | DopaBrain",
    "heroTitle": "Скрипт: как сказать «нет» семье без чувства вины",
    "heroLead": "Мягко и твёрдо отказывайте в лишних просьбах без оправданий и обид.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "परिवार को बिना अपराधबोध ना कहने की स्क्रिप्ट | DopaBrain",
    "heroTitle": "परिवार को बिना अपराधबोध ना कहने की स्क्रिप्ट",
    "heroLead": "बिना लंबी सफाई दिए स्नेह और स्पष्टता के साथ परिवार की सीमा तय करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Skrip Menolak Permintaan Keluarga Tanpa Rasa Bersalah | DopaBrain",
    "heroTitle": "Skrip Menolak Permintaan Keluarga Tanpa Rasa Bersalah",
    "heroLead": "Tolak beban berlebihan dengan hangat, singkat, dan tetap menjaga kasih sayang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Aileye Suçluluk Duymadan Hayır Deme Metni | DopaBrain",
    "heroTitle": "Aileye Suçluluk Duymadan Hayır Deme Metni",
    "heroLead": "Aşırı açıklama yapmadan sıcak ve net aile sınır cümleleri hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "guilt_equals_wrong",
    "en": "Equating Guilt With Wrongdoing — Assuming \"if I feel guilty, my boundary must be selfish\"",
    "ko": "죄책감=잘못 등식 — \"마음이 불편하니까 내가 이기적인 거다\"라고 착각함"
  },
  {
    "id": "silent_sigh_fold",
    "en": "Folding at Disappointment — Reversing my \"no\" the moment I hear a sigh or cold tone",
    "ko": "한숨에 철회 — 상대의 서운한 한숨이나 냉랭한 말투에 바로 말을 바꿈"
  },
  {
    "id": "over_explaining",
    "en": "Over-Explaining Reasons — Giving 5 excuses that get picked apart one by one",
    "ko": "변명 5종 세트 — 구구절절 이유를 대다 오히려 설득·반박에 말려듦"
  },
  {
    "id": "default_fixer",
    "en": "Designated Family Fixer — Automatically stepping in to solve crises nobody else tries to fix",
    "ko": "가족 해결사 역할 — 아무도 안 나서는 문제를 늘 내가 떠안는 역할이 굳어짐"
  },
  {
    "id": "quiet_resentment",
    "en": "Saying Yes With Resentment — Agreeing externally while feeling bitter and distant inside",
    "ko": "억지 승낙과 원망 — 겉으론 웃으며 수락하고 속으론 서운함과 거리가 쌓임"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Family Guilt — Use the \"Love + Clear Limit + Zero Excuses\" Formula",
    "koT": "가족 죄책감 높음 — \"애정 표현 + 짧은 한계 + 변명 생략\" 3박자 공식을 쓰세요",
    "enD": "Family systems therapy notes that guilt when setting a new boundary is simply an old habit alarm—not proof of cruelty. Honest limits actually protect long-term affection by preventing quiet resentment.",
    "koD": "가족 체계 치료에 따르면 새 경계선을 세울 때 드는 죄책감은 내가 나빠서가 아니라 \"오래된 역할 습관의 경고음\"일 뿐입니다. 솔직한 한계가 오히려 속마음의 원망을 막아 관계를 오래 지킵니다.",
    "enS": "\"I love you and want to stay close, AND I can’t take on [request] this time. What I CAN happily do is [smaller option]. Thanks for understanding.\"",
    "koS": "\"가족을 아끼고 잘 지내고 싶지만, 이번 [부탁]은 내 여력상 어렵습니다. 대신 [작은 대안] 정도는 기쁘게 함께할게요. 이해해 주셔서 고마워요.\"",
    "enL": [
      "Remind yourself: someone’s brief disappointment is allowed—you do not need to rescue them from it.",
      "Keep your reason to 1 calm line (\"It doesn’t fit our capacity/budget right now\") and repeat gently if pressed.",
      "Notice how much warmer you feel toward family once you stop saying resentful yeses."
    ],
    "koL": [
      "상대가 잠시 서운해할 권리를 허용하세요. 그 서운함까지 내가 해결해 줄 의무는 없습니다.",
      "이유는 1줄(\"지금 내 체력·예산상 어렵다\")로 끝내고 재차 요청이 와도 같은 문장을 부드럽게 반복하세요.",
      "억지 수락이 줄어들수록 오히려 가족을 대하는 마음이 더 따뜻하고 편안해짐을 관찰하세요."
    ]
  },
  "mid": {
    "enT": "Growing Boundary Muscle — Practice Warm Repetition Without Over-Explaining",
    "koT": "경계선 성장 중 — 변명을 줄이고 따뜻한 반복(브로큰 레코드)만 익히면 충분합니다",
    "enD": "You recognize your limits clearly; keeping explanations short prevents debates.",
    "koD": "자기 한계를 잘 알고 있습니다. 설명을 짧게 줄일수록 대화가 훨씬 부드럽게 마무리됩니다.",
    "enS": "\"Kind tone, short sentence, steady limit.\"",
    "koS": "\"목소리는 따뜻하게, 문장은 짧게, 한계는 흔들리지 않게.\"",
    "enL": [
      "Give advance notice before busy holiday or family weeks.",
      "Offer only alternatives you genuinely want to fulfill.",
      "Decompress for 15 minutes after tough family calls."
    ],
    "koL": [
      "바쁜 명절·가족 행사 전에는 미리 여유 일정을 공유해 두세요.",
      "정말 기쁘게 해 줄 수 있는 대안만 제안하세요.",
      "어려운 통화 후에는 15분간 나만의 진정 시간을 챙기세요."
    ]
  },
  "high": {
    "enT": "Healthy Loving Limits — Clear, Warm & Free of Resentment",
    "koT": "건강하고 따뜻한 경계선 — 사랑과 자율의 균형을 잘 지키고 있습니다",
    "enD": "You balance genuine family care with honest self-respect.",
    "koD": "가족에 대한 진심 어린 배려와 자기 존중의 균형을 아주 성숙하게 유지하고 있습니다.",
    "enS": "\"Honest nos make my yeses genuinely joyful.\"",
    "koS": "\"솔직한 거절이 가능할 때 나의 수락도 진짜 기쁨이 된다.\"",
    "enL": [
      "Keep communicating expectations early and kindly.",
      "Celebrate healthy mutual respect in your family.",
      "Protect your core recharge routines."
    ],
    "koL": [
      "기대치를 미리 다정하게 나누는 습관을 유지하세요.",
      "서로의 한계를 존중하는 건강한 가족 문화를 가꾸세요.",
      "핵심 회복 루틴을 꾸준히 지켜 나가세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_family_no_guilt_v1";
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
      window.gtag('event', "family_no_guilt_script_complete", {
        tool_slug: "saying-no-to-family-guilt-script",
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
      var shareUrl = "https://dopabrain.com/portal/tools/saying-no-to-family-guilt-script.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "saying-no-to-family-guilt-script",
        filename: 'dopabrain-saying-no-to-family-guilt-script-card.png',
        badge: "FAMILY BOUNDARIES • SAYING NO WITHOUT GUILT SCRIPT BUILDER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
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
