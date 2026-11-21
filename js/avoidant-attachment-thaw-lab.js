/* Avoidant Attachment Thaw & Space-With-Return Lab
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Avoidant Attachment Thaw & Space-With-Return Script Lab | DopaBrain",
    "metaDesc": "Free 12-language Avoidant Attachment Thaw Lab. Spot 5 emotional deactivation reflexes locally and replace silent ghosting with a calm \"Space With a Return Time\" message.",
    "keywords": "avoidant attachment healing tool, fear of engulfment script, deactivation strategies relationship, asking for space securely, disorganized attachment calm, dopabrain",
    "kicker": "AUTONOMY + CONNECTION • ZERO GHOSTING",
    "heroTitle": "Avoidant Attachment Thaw & Space-With-Return Lab",
    "heroLead": "Feeling suddenly suffocated right after a great weekend—and tempted to pull away in silence or hyper-focus on minor flaws? Rate 5 deactivation reflexes locally to protect space without hurting connection.",
    "chip1": "5 Deactivation Signs",
    "chip2": "Space+Return Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK DEACTIVATION URGE (1 = OPEN, 5 = PULLING AWAY)",
    "step1Title": "How strongly are these closeness-shutdown reflexes firing right now?",
    "step1Sub": "Needing solitude is healthy; disappearing in silence breaks trust. Everything stays local.",
    "inputLabel": "Optional: Exact time I can realistically reconnect after recharging (100% local):",
    "inputPlaceholder": "Example: Tomorrow at 7 PM after work once I have had a quiet solo evening",
    "ctaBtn": "Decode Urge & Build Space Script",
    "resultBadge": "STEP 2 • YOUR SECURE SPACE-WITH-RETURN PLAN",
    "noteTitle": "My Realistic Reconnection Anchor",
    "meterLabel": "Connection-Autonomy Balance",
    "scriptTitle": "Calm \"Space With a Return Time\" Script",
    "stepsTitle": "3 Secure Habits That Preserve Both Freedom & Trust",
    "stickyTitle": "Want to map both anxious & avoidant relationship triggers?",
    "stickySub": "Open the full Attachment Trigger Decoder in 12 languages",
    "stickyBtn": "Trigger Decoder →",
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
    "title": "회피형 애착 거리두기 해독 & 안전 공간 스크립트 랩 | DopaBrain",
    "metaDesc": "좋은 시간을 보낸 직후 갑자기 숨이 막히고 연락을 끊고 싶어지나요? 5가지 회피형 비활성화(Deactivation) 반사를 로컬에서 점검하고 \"돌아올 시각이 담긴 공간 요청\" 문장을 만드세요.",
    "kicker": "자율성과 연결의 균형 · 잠수 없는 휴식",
    "heroTitle": "회피형 애착 해독 & 안전 공간 요청 랩",
    "heroLead": "가까워질수록 오히려 답답해지거나 갑자기 상대의 단점이 크게 보이며 혼자만의 동굴로 숨고 싶어지나요? 5가지 회피 반사를 비공개로 점검해 관계를 지키며 숨 쉴 공간을 요청하세요.",
    "chip1": "5가지 회피 반사",
    "chip2": "복귀 시각 스크립트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 거리두기 충동 점검 (1 = 편안함, 5 = 강하게 닫힘)",
    "step1Title": "지금 아래 회피·비활성화 신호가 얼마나 강하게 작동하고 있나요?",
    "step1Sub": "혼자만의 시간은 건강한 욕구입니다. 말없이 사라지지 않고 표현하면 신뢰가 자랍니다.",
    "inputLabel": "선택: 충전 후 실제로 다시 연락할 수 있는 구체적 시각 (100% 로컬):",
    "ctaBtn": "회피 충동 해독 & 안전 공간 문장 만들기",
    "resultBadge": "2단계 • 나의 자율성 + 신뢰 동시 보호 플랜",
    "noteTitle": "현실적으로 약속할 나의 재연결 시각",
    "meterLabel": "연결-자율성 균형 지수",
    "scriptTitle": "상대를 안심시키며 혼자 쉴 시간을 얻는 문장",
    "stepsTitle": "자유와 신뢰를 함께 지키는 3가지 안정형 습관",
    "stickyTitle": "불안형·회피형 애착 트리거를 함께 해독하고 싶나요?",
    "stickySub": "12개국어 애착 트리거 디코더에서 전체 대화문을 확인하세요",
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
    "title": "回避型依恋解冻与安全沟通实验室 | DopaBrain",
    "heroTitle": "回避型依恋解冻实验室",
    "ctaBtn": "生成温和空间话术",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "回避型愛着・安心スペース設計 | DopaBrain",
    "heroTitle": "回避型愛着ラボ",
    "ctaBtn": "安心メッセージを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Lab de Apego Evitativo y Espacio Seguro | DopaBrain",
    "heroTitle": "Lab Apego Evitativo",
    "ctaBtn": "Crear mensaje de espacio",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Lab de Apego Evitativo e Espaço Seguro | DopaBrain",
    "heroTitle": "Lab Apego Evitativo",
    "ctaBtn": "Criar mensagem de espaço",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Vermeidende-Bindung- & Raum-Lab | DopaBrain",
    "heroTitle": "Bindungs- & Raum-Lab",
    "ctaBtn": "Pause-Nachricht erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Labo Attachement Évitant & Espace | DopaBrain",
    "heroTitle": "Labo Attachement Évitant",
    "ctaBtn": "Créer mon message serein",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Лаборатория избегающей привязанности | DopaBrain",
    "heroTitle": "Лаборатория привязанности",
    "ctaBtn": "Создать фразу паузы",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "अवॉइडेंट अटैचमेंट व स्पेस लैब | DopaBrain",
    "heroTitle": "अवॉइडेंट अटैचमेंट लैब",
    "ctaBtn": "सुरक्षित स्पेस स्क्रिप्ट",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Lab Pemulihan Attachment Menghindar | DopaBrain",
    "heroTitle": "Lab Attachment Menghindar",
    "ctaBtn": "Buat Pesan Ruang Aman",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kaçıngan Bağlanma Güvenli Alan Labı | DopaBrain",
    "heroTitle": "Kaçıngan Bağlanma Labı",
    "ctaBtn": "Güvenli Alan Metni",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "engulf_fear",
    "en": "Closeness Claustrophobia — Feeling suddenly trapped right after deep intimacy or big plans",
    "ko": "친밀감 답답함 — 즐겁고 가까워진 직후 오히려 자유를 잃을 것 같은 압박감이 밀려옴"
  },
  {
    "id": "flaw_lens",
    "en": "Sudden Flaw-Finding — Zooming in on tiny habits or minor imperfections to justify pulling back",
    "ko": "급작스런 단점 확대 — 멀어질 명분을 찾듯 상대의 사소한 버릇이 갑자기 크게 거슬림"
  },
  {
    "id": "silent_cave",
    "en": "Silent Cave Urge — Leaving messages unread for days rather than saying \"I need a quiet night\"",
    "ko": "침묵 동굴 충동 — \"오늘 혼자 쉬고 싶어\" 한마디 대신 읽씹·잠수로 거리를 벌리고 싶음"
  },
  {
    "id": "hyper_indep",
    "en": "Hyper-Independence — Feeling uncomfortable asking for help or letting someone see stress",
    "ko": "과잉 독립심 — 힘든 모습이나 부탁을 꺼내는 게 약점 잡히는 것처럼 불편함"
  },
  {
    "id": "conflict_exit",
    "en": "Emotional Flood Exit — Shutting down blankly when a partner expresses strong emotion",
    "ko": "감정 과부하 차단 — 상대가 감정을 강하게 표현하면 머리가 하얘지며 대화를 끝내고 싶음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Deactivation Wave — Ask for Space Explicitly (Never Disappear)",
    "koT": "강한 비활성화 파동 — 잠수 대신 \"복귀 시각\"을 담아 공간을 요청하세요",
    "enD": "Your nervous system equates emotional intensity with loss of freedom. Taking solo time is completely valid—the one habit that prevents spiral damage is naming when you will return.",
    "koD": "신경계가 감정적 밀착을 자유 상실로 인식해 비상 탈출을 외치고 있습니다. 혼자 쉬는 건 당연한 권리입니다—다만 \"언제 다시 연락할지\" 한 문장만 남기면 관계가 무너지지 않습니다.",
    "enS": "\"I really care about us, and my battery is honestly overstimulated right now. I need a quiet solo evening to recharge—I will text you tomorrow around 7 PM once I am grounded.\"",
    "koS": "\"우리 관계를 소중하게 생각하지만 지금 내 에너지가 너무 과부하 상태라 오늘 저녁은 혼자 조용히 충전할 시간이 필요해. 마음 정리하고 내일 저녁 7시쯤 꼭 먼저 연락할게.\"",
    "enL": [
      "Send the 2-sentence Space-With-Return message BEFORE muting notifications.",
      "Notice sudden \"flaw-finding\" thoughts as a nervous-system defense, not a final breakup verdict—wait 48 hours before major decisions.",
      "Honor the exact return time you promised; reliability builds effortless trust."
    ],
    "koL": [
      "알림을 끄기 전에 먼저 \"돌아올 시각\"이 포함된 2문장을 보내고 편하게 쉬세요.",
      "갑자기 상대 단점이 크게 보일 때는 이별 결론 대신 \"신경계 방어 중\"이라 메모하고 48시간만 유예하세요.",
      "약속한 복귀 시각에 짧은 안부라도 꼭 먼저 연락하세요—이 일관성이 최고의 신뢰를 만듭니다."
    ]
  },
  "mid": {
    "enT": "Moderate Autonomy Friction — Practice Micro-Transparency Early",
    "koT": "중간 자율성 마찰 — 답답함이 커지기 전에 작은 솔직함을 연습하세요",
    "enD": "You want real connection and still value independence. Naming your need for solo recharge early—before resentment or claustrophobia peaks—keeps both people relaxed.",
    "koD": "진정한 연결을 원하면서도 독립성을 중요시하는 단계입니다. 숨이 막히기 직전까지 참다가 닫히지 말고, 여유 있을 때 미리 혼자만의 시간을 자연스럽게 공유해 보세요.",
    "enS": "\"I had a great time together—I am going to take a few solo hours tomorrow morning to unwind, and I am looking forward to catching up after.\"",
    "koS": "\"함께한 시간 정말 좋았어—내일 오전엔 혼자 느긋하게 쉬면서 충전하고 오후에 또 즐겁게 얘기하자.\"",
    "enL": [
      "Share 1 small honest feeling (\"I feel a bit stretched thin today\") instead of pretending everything is fine.",
      "Schedule protected solo time proactively each week so connection never feels like a cage.",
      "Stay in the room for 2 extra minutes when mild emotion surfaces instead of pivoting to logic immediately."
    ],
    "koL": [
      "괜찮은 척 대신 \"오늘 좀 피곤해서 말이 줄어드네\"처럼 작은 솔직함 1가지를 나눠보세요.",
      "매주 혼자 쉬는 시간을 미리 자연스럽게 일정에 넣어두면 친밀감이 압박으로 느껴지지 않습니다.",
      "감정 대화가 나올 때 곧바로 해결책으로 끊지 말고 2분만 함께 머물러 보세요."
    ]
  },
  "high": {
    "enT": "Earned Secure Balance — Freedom and Warmth Coexisting Cleanly",
    "koT": "성숙한 안정형 균형 — 자유와 따뜻함이 함께 숨 쉬는 관계",
    "enD": "You can ask for personal space cleanly without disappearing, and return warmly without losing yourself. That rare blend of autonomy and consistency defines earned security.",
    "koD": "잠수하지 않고도 개인 공간을 정중히 요청하고, 나를 잃지 않으면서도 따뜻하게 돌아올 수 있는 성숙한 균형입니다. 자율성과 일관성의 공존이 바로 안정형 애착입니다.",
    "enS": "\"I love that we can both enjoy our own recharge time and still feel completely connected.\"",
    "koS": "\"서로 각자 충전하는 시간도 존중하면서 언제든 편안하게 연결될 수 있어서 참 좋아.\"",
    "enL": [
      "Keep communicating recharge needs proactively and kindly.",
      "Celebrate moments when vulnerability brought relief rather than danger.",
      "Maintain honest check-ins during big life milestones or transitions."
    ],
    "koL": [
      "충전이 필요할 때 미리 따뜻하게 알리는 좋은 습관을 계속 지켜주세요.",
      "솔직하게 마음을 열었을 때 오히려 편안해진 경험을 기억해 두세요.",
      "이사·이직 같은 큰 변화 시기에 가볍게 서로의 공간 리듬을 맞춰보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_avoidant_thaw_v1";
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
      window.gtag('event', "avoidant_thaw_complete", {
        tool_slug: "avoidant-attachment-thaw-lab",
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
      var shareUrl = "https://dopabrain.com/portal/tools/avoidant-attachment-thaw-lab.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "avoidant-attachment-thaw-lab",
        filename: 'dopabrain-avoidant-attachment-thaw-lab-card.png',
        badge: "AUTONOMY + CONNECTION • ZERO GHOSTING",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
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
