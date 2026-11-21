/* Abandonment Anxiety & Self-Soothing Anchor Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Abandonment Anxiety & Self-Soothing Anchor Builder | DopaBrain",
    "metaDesc": "Free 12-language Abandonment Anxiety & Self-Soothing Anchor Builder. De-escalate silent-text spirals, check 5 anxious attachment protest urges locally, and craft a grounded secure pause script.",
    "keywords": "abandonment anxiety tool, anxious attachment self soothing, fear of abandonment reset, stop double texting spiral, secure attachment script, dopabrain",
    "kicker": "SECURE SELF-SOOTHING & PAUSE ANCHOR",
    "heroTitle": "Abandonment Anxiety & Self-Soothing Anchor Builder",
    "heroLead": "Delayed reply, subtle tone shift, or cancelled plan sending your chest into panic? Check 5 abandonment-alarm triggers locally to interrupt anxious protest urges and craft a calm, dignified self-soothing plan.",
    "chip1": "5 Alarm Triggers",
    "chip2": "Secure Pause Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • RATE CURRENT ABANDONMENT ALARM (1 = CALM, 5 = INTENSE)",
    "step1Title": "How loud are these abandonment-fear urges right now?",
    "step1Sub": "Your ratings stay 100% local in your browser.",
    "inputLabel": "Optional: 1 neutral alternative explanation besides \"they are leaving me\" (100% local):",
    "inputPlaceholder": "Example: They are in back-to-back meetings or recharging after a long day",
    "ctaBtn": "Build Self-Soothing Anchor & Secure Pause",
    "resultBadge": "STEP 2 • YOUR SECURE SELF-SOOTHING PLAN",
    "noteTitle": "My Grounded Alternative Explanation",
    "meterLabel": "Self-Soothing Stability",
    "scriptTitle": "Dignified Secure Check-In Script (After a 20-Min Pause)",
    "stepsTitle": "3 Nervous-System Soothing Moves Before Texting",
    "stickyTitle": "Want tailored anxious/avoidant conversation scripts?",
    "stickySub": "Open our Attachment Trigger Decoder & Secure Script Builder",
    "stickyBtn": "Attachment Decoder →",
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
    "title": "유기 불안(버림받음 공포) 자가진정 앵커 빌더 | DopaBrain",
    "metaDesc": "답장이 늦거나 말투가 달라졌을 때 치솟는 버림받음 공포를 5가지 불안 신호로 점검하고, 충동 연락을 멈추는 20분 자가진정 플랜과 품위 있는 안정형 문장을 만드세요.",
    "kicker": "안정 애착 자가진정 & 충동 멈춤 랩",
    "heroTitle": "유기 불안·자가진정 앵커 빌더",
    "heroLead": "늦은 답장이나 미묘한 온도 차이에 가슴이 철렁 내려앉고 당장 확인 메시지를 보내고 싶나요? 5가지 유기 불안 경보를 로컬에서 진정시키고 품위 있는 안정형 멈춤 플랜을 만들어 보세요.",
    "chip1": "5가지 유기 경보 점검",
    "chip2": "20분 안정 멈춤 스크립트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 지금 올라오는 유기 불안 강도 (1 = 차분, 5 = 매우 강함)",
    "step1Title": "지금 아래 버림받음 불안 신호가 얼마나 강하게 울리나요?",
    "step1Sub": "모든 입력은 100% 브라우저 로컬에만 남습니다.",
    "inputLabel": "선택: \"날 떠나려는 거야\" 말고 가능한 현실적 대안 설명 1가지 (100% 로컬):",
    "ctaBtn": "자가진정 앵커 & 안정형 스크립트 생성",
    "resultBadge": "2단계 • 나의 안정 애착 자가진정 플랜",
    "noteTitle": "내가 떠올린 중립적·현실적 대안 설명",
    "meterLabel": "자가진정 안정도",
    "scriptTitle": "20분 진정 후 보내는 품위 있는 안정형 문장",
    "stepsTitle": "메시지를 보내기 전 실행하는 3가지 자가진정",
    "stickyTitle": "불안형·회피형 맞춤 대화 스크립트가 더 필요하신가요?",
    "stickySub": "애착 트리거 디코더에서 상황별 안전 문장을 만들어 보세요",
    "stickyBtn": "애착 디코더 →",
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
    "title": "遗弃焦虑与自我安抚锚点生成器 | DopaBrain",
    "heroTitle": "遗弃焦虑与自我安抚",
    "ctaBtn": "生成自我安抚与安全话术",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "見捨てられ不安・セルフスーシング診断 | DopaBrain",
    "heroTitle": "見捨てられ不安セルフケア",
    "ctaBtn": "安心アンカーと返信文を作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Ansiedad de Abandono y Ancla de Autocalma | DopaBrain",
    "heroTitle": "Ansiedad de Abandono",
    "ctaBtn": "Crear plan de autocalma",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Ansiedade de Abandono e Autoacalma | DopaBrain",
    "heroTitle": "Ansiedade de Abandono",
    "ctaBtn": "Criar âncora segura",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Verlustangst & Selbstberuhigungs-Anker | DopaBrain",
    "heroTitle": "Verlustangst-Anker Builder",
    "ctaBtn": "Beruhigungsplan erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Anxiété d’Abandon & Ancrage Apaisant | DopaBrain",
    "heroTitle": "Anxiété d’Abandon",
    "ctaBtn": "Créer mon ancrage serein",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Тревога отвержения и якорь самоподдержки | DopaBrain",
    "heroTitle": "Тревога брошенности",
    "ctaBtn": "Создать план успокоения",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "अकेले छूटने की चिंता और सेल्फ-सूथिंग एंकर | DopaBrain",
    "heroTitle": "अबंडनमेंट एंग्ज़ायटी सूथर",
    "ctaBtn": "शांत एंकर बनाएँ",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pereda Kecemasan Ditinggalkan & Jangkar Aman | DopaBrain",
    "heroTitle": "Pereda Cemas Ditinggalkan",
    "ctaBtn": "Buat Jangkar Tenang",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Terk Edilme Kaygısı ve Öz-Yatıştırma Çıpası | DopaBrain",
    "heroTitle": "Terk Edilme Kaygısı Aracı",
    "ctaBtn": "Güvenli Plan Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "reply_panic",
    "en": "Reply-Delay Spiral — Checking \"last seen\" or read receipts repeatedly",
    "ko": "답장 지연 불안 — 읽음 표시나 접속 시간을 반복해서 확인하게 됨"
  },
  {
    "id": "mind_read",
    "en": "Negative Tone Mind-Reading — Interpreting brief texts as coldness or rejection",
    "ko": "말투 과해석 — 짧은 답장을 마음이 식었거나 화난 신호로 단정함"
  },
  {
    "id": "protest_urge",
    "en": "Urgent Need to Fix Now — Strong impulse to double-text or demand reassurance",
    "ko": "즉각 확인 충동 — 당장 연달아 연락하거나 마음을 확인받고 싶음"
  },
  {
    "id": "body_drop",
    "en": "Chest Drop / Pit in Stomach — Sudden somatic panic when plans change",
    "ko": "신체적 철렁함 — 약속이 바뀌면 가슴이 쿵 내려앉고 불안이 급증함"
  },
  {
    "id": "self_blame",
    "en": "Instant Self-Blame — Assuming \"I must have said something wrong\"",
    "ko": "즉각 자기비난 — \"내가 또 뭔가 실수해서 질렸나 보다\"로 결론 내림"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Abandonment Alarm — Pause 20 Minutes Before Acting",
    "koT": "높은 유기 불안 경보 — 행동 전 반드시 20분 멈춤을 거세요",
    "enD": "Your attachment alarm is treating a pause in contact like an emergency. Put the phone in another room for 20 minutes and soothe your body first—never negotiate connection from panic.",
    "koD": "애착 경보기가 연락 공백을 생존 위기처럼 오인하고 있습니다. 지금 연락하면 후회할 확률이 높습니다. 휴대폰을 잠시 내려놓고 20분간 몸부터 진정시키세요.",
    "enS": "\"Hey, hope your day is going smoothly—no rush at all, would love to catch up tonight or tomorrow whenever you have a moment.\"",
    "koS": "\"오늘 하루 바쁘게 보내고 있지? 급한 건 아니니 여유 될 때 편하게 연락해 줘. 나도 오늘 내 시간 잘 보내고 있을게!\"",
    "enL": [
      "Place your phone face-down in another room for 20 minutes—zero checking read receipts.",
      "Place one hand on your chest and take 5 long exhales; remind yourself \"Silence is not proof of rejection.\"",
      "Do one grounding activity rooted in YOUR life (walk, music, snack, call a friend) before replying."
    ],
    "koL": [
      "휴대폰을 다른 방에 20분간 두고 읽음·접속 확인을 잠시 멈추세요.",
      "가슴에 손을 얹고 5번 길게 내쉬며 \"침묵이 곧 거절의 증거는 아니다\"라고 되뇌세요.",
      "상대에게 집중된 시선을 내 일상(산책·음악·간식·다른 친구 연락)으로 돌리세요."
    ]
  },
  "mid": {
    "enT": "Moderate Attachment Trigger — Anchor in Facts, Not Fear",
    "koT": "중간 수준의 애착 트리거 — 추측 대신 사실에 기준을 두세요",
    "enD": "Uncertainty is tugging at old stories, yet you still have space to choose a secure response. Separate observable facts from anxious predictions.",
    "koD": "불확실성이 옛 불안 기억을 건드리고 있지만, 아직 안정형 선택을 할 여유가 있습니다. 관찰한 사실과 불안한 추측을 분리하세요.",
    "enS": "\"I noticed I felt a little disconnected after plans shifted—I value our time and would love to reschedule when you are free.\"",
    "koS": "\"일정이 바뀌어서 조금 아쉬웠어. 함께하는 시간을 소중하게 생각해서, 편한 날로 다시 잡아보면 좋겠어.\"",
    "enL": [
      "List 3 concrete recent signs that you are valued and safe in your wider life.",
      "Ask clearly for what you want once—instead of hinting, testing, or withdrawing.",
      "Keep your evening plans intact regardless of when a text arrives."
    ],
    "koL": [
      "최근 나를 아끼고 지지해 준 일상의 증거 3가지를 떠올려 보세요.",
      "떠보거나 서운함을 숨기기보다 원하는 바를 담백하게 한 문장으로 전하세요.",
      "답장 여부와 상관없이 오늘 저녁 내 계획을 그대로 즐기세요."
    ]
  },
  "high": {
    "enT": "Grounded Secure Stability — Steady Self-Trust Active",
    "koT": "단단한 안정 애착 균형 — 건강한 자기 신뢰 유지 중",
    "enD": "Your attachment system feels relatively settled. Keep nurturing independent joy and clear, direct communication.",
    "koD": "애착 경보가 차분히 안정된 상태입니다. 독립적인 즐거움과 담백한 소통 습관을 계속 이어가세요.",
    "enS": "\"Take your time today—I am enjoying a quiet evening and happy to reconnect whenever works for both of us.\"",
    "koS": "\"오늘 여유 있게 보내고 있어—서로 편한 시간에 또 즐겁게 이야기 나누자.\"",
    "enL": [
      "Celebrate staying grounded without seeking constant external reassurance.",
      "Keep investing in hobbies and friendships outside one single relationship.",
      "Revisit this pause anchor whenever fatigue lowers your emotional buffer."
    ],
    "koL": [
      "외부의 즉각적인 확인 없이도 평온을 유지한 스스로를 인정해 주세요.",
      "한 관계에만 기대지 않고 취미·우정·나만의 리듬을 풍성하게 유지하세요.",
      "피곤한 날 불안이 올라오면 언제든 20분 멈춤 규칙을 꺼내 쓰세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_abandonment_v1";
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
      window.gtag('event', "abandonment_soother_complete", {
        tool_slug: "abandonment-anxiety-soother",
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
      var shareUrl = "https://dopabrain.com/portal/tools/abandonment-anxiety-soother.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "abandonment-anxiety-soother",
        filename: 'dopabrain-abandonment-anxiety-soother-card.png',
        badge: "SECURE SELF-SOOTHING & PAUSE ANCHOR",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ec4899",
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
