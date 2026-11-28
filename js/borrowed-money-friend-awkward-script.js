/* Ask for Lent Money Back Without Ruining the Friendship
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Ask for Lent Money Back Without Ruining the Friendship | DopaBrain",
    "metaDesc": "Waiting weeks for a friend to pay back split dinner bills or a short-term loan—feeling silently resentful yet too awkward to text? Copy warm, zero-shame reminders locally.",
    "kicker": "RELATIONSHIP CLARITY • ASKING FOR LENT MONEY BACK WITHOUT AWKWARDNESS",
    "heroTitle": "Ask for Lent Money Back Without Ruining the Friendship",
    "heroLead": "Waiting weeks for a friend to pay back split dinner bills or a short-term loan—feeling silently resentful yet too awkward to text? Copy warm, zero-shame reminders locally.",
    "chip1": "5 Money-Awkward Loops",
    "chip2": "3-Stage Text Scripts",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR MONEY-REMINDER FRICTION (1 = CLEAR, 5 = STUCK)",
    "step1Title": "What makes sending a simple repayment reminder feel so uncomfortable?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The occasion/amount so your reminder stays casual and specific (100% local):",
    "ctaBtn": "Generate My Friendly Repayment Text",
    "resultBadge": "STEP 2 • YOUR ZERO-AWKWARDNESS REMINDER SCRIPT",
    "noteTitle": "Specific Item / Amount",
    "meterLabel": "Financial Boundary Clarity",
    "scriptTitle": "Casual, Zero-Shame Reminder Text (Copy & Send)",
    "stepsTitle": "3 Principles That Protect Both Your Wallet and Friendship",
    "stickyTitle": "Feeling lingering money or relationship stress right now?",
    "stickySub": "Take the free 2-Min Stress Check",
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
    "title": "친구·지인에게 빌려준 돈 어색하지 않게 돌려받는 정중한 3단계 문자 키트 | DopaBrain",
    "metaDesc": "더치페이 정산이나 빌려준 돈이 몇 주째 감감무소식인데 말 꺼내기 어색해서 속만 끓이고 계신가요? 우정을 해치지 않으면서 깔끔하게 정산받는 3단계 문자를 만드세요.",
    "kicker": "관계·금전 경계 · 친구·지인에게 빌려준 돈 어색하지 않게 돌려받는 3단계 문자 키트",
    "heroTitle": "친구·지인에게 빌려준 돈 어색하지 않게 돌려받는 정중한 3단계 문자 키트",
    "heroLead": "더치페이 정산이나 빌려준 돈이 몇 주째 감감무소식인데 말 꺼내기 어색해서 속만 끓이고 계신가요? 우정을 해치지 않으면서 깔끔하게 정산받는 3단계 문자를 만드세요.",
    "chip1": "5가지 정산 망설임",
    "chip2": "3단계 정산 문자",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 정산·상환 요청 망설임 점검 (1 = 편함, 5 = 매우 난감)",
    "step1Title": "당연히 받아야 할 돈을 달라고 말하기가 가장 어색한 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 정산할 내역이나 금액 메모 (자연스러운 문자용, 100% 로컬):",
    "ctaBtn": "어색하지 않은 정산 문자 보기",
    "resultBadge": "2단계 • 관계를 지키는 깔끔한 정산 프로토콜",
    "noteTitle": "정산 내역",
    "meterLabel": "금전 경계 명료도",
    "scriptTitle": "부담 없이 바로 보내는 정중한 정산 문자",
    "stepsTitle": "돈과 우정을 모두 지키는 3가지 정산 원칙",
    "stickyTitle": "금전·인간관계에서 쌓인 스트레스 부담을 가볍게 확인해 볼까요?",
    "stickySub": "무료 2분 스트레스 테스트 바로가기",
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
    "title": "朋友借钱/AA制礼貌催款不尴尬话术 | DopaBrain",
    "heroTitle": "朋友借钱/AA制礼貌催款不尴尬话术",
    "heroLead": "告别不好意思开口的内耗，生成轻松自然、既保钱包又保友情的3步提醒短信。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "貸したお金を気まずくなく返してもらう連絡文キット | DopaBrain",
    "heroTitle": "貸したお金を気まずくなく返してもらう連絡文キット",
    "heroLead": "友情を壊さずに割り勘・立替金の精算をさらっと伝える3段階メッセージを作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Guiones para Pedir Dinero Prestado sin Incomodidad | DopaBrain",
    "heroTitle": "Guiones para Pedir Dinero Prestado sin Incomodidad",
    "heroLead": "Copia recordatorios amables y claros para cobrar gastos compartidos sin dañar la amistad.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Textos para Cobrar Dinheiro Emprestado sem Climão | DopaBrain",
    "heroTitle": "Textos para Cobrar Dinheiro Emprestado sem Climão",
    "heroLead": "Envie lembretes leves e objetivos para receber contas divididas preservando a amizade.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Geliehenes Geld ohne Peinlichkeit zurückfragen | DopaBrain",
    "heroTitle": "Geliehenes Geld ohne Peinlichkeit zurückfragen",
    "heroLead": "Kopiere lockere, freundliche Erinnerungen für Auslagen, die Freundschaft und Konto schützen.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Demander de l’Argent Prêté Sans Gêne (Scripts) | DopaBrain",
    "heroTitle": "Demander de l’Argent Prêté Sans Gêne (Scripts)",
    "heroLead": "Copiez des rappels légers et bienveillants pour récupérer un remboursement sans malaise.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Как вежливо напомнить другу о долге без неловкости | DopaBrain",
    "heroTitle": "Как вежливо напомнить другу о долге без неловкости",
    "heroLead": "Скопируйте лёгкие и корректные напоминания о возврате денег без вреда для дружбы.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "दोस्त से उधार पैसे बिना झिझक वापस माँगने की स्क्रिप्ट | DopaBrain",
    "heroTitle": "दोस्त से उधार पैसे बिना झिझक वापस माँगने की स्क्रिप्ट",
    "heroLead": "दोस्ती बचाते हुए हल्के और विनम्र रिमाइंडर मैसेज लोकल तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Skrip Sopan Menagih Uang Pinjaman ke Teman | DopaBrain",
    "heroTitle": "Skrip Sopan Menagih Uang Pinjaman ke Teman",
    "heroLead": "Salin pengingat santai dan jelas untuk tagihan patungan tanpa merusak pertemanan.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Arkadaştan Borç İstemeden Kırmayan Mesaj Kiti | DopaBrain",
    "heroTitle": "Arkadaştan Borç İstemeden Kırmayan Mesaj Kiti",
    "heroLead": "Arkadaşlığı bozmadan kibarca alacak ve hesap bölüşümü hatırlatma mesajları oluşturun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "petty_fear",
    "en": "Fear of Seeming \"Petty\" — Worrying a friendly reminder makes you look cheap or strict",
    "ko": "쪼잔해 보일까 봐 걱정 — 정산 문자를 보내면 인색해 보일까 봐 망설임"
  },
  {
    "id": "silent_resentment",
    "en": "Silent Resentment Buildup — Saying nothing while quietly avoiding hanging out with them",
    "ko": "속앓이 누적 — 말은 못 하고 속으로 서운해하며 만남 자체를 피하게 됨"
  },
  {
    "id": "missing_payment_link",
    "en": "High Friction to Pay — Mentioning the debt without including your exact handle/bank details",
    "ko": "송금 정보 누락 — 계좌나 송금 링크 없이 말만 꺼내서 상대가 또 깜빡함"
  },
  {
    "id": "repeated_forgetting",
    "en": "Second-Reminder Awkwardness — They said \"I’ll send it tonight\" a week ago and forgot again",
    "ko": "재요청 난감함 — \"오늘 보낼게\" 해 놓고 일주일째 감감무소식임"
  },
  {
    "id": "future_lending_guilt",
    "en": "Repeat Lending Trap — Struggling to say no when the same person asks to borrow again",
    "ko": "반복 대여 함정 — 이전 정산도 안 끝났는데 또 부탁할 때 거절하지 못함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Awkwardness — Send 1 Light, Matter-of-Fact Text With Exact Amount + Payment Handle",
    "koT": "말 꺼내기 매우 어색함 — 감정 빼고 \"가벼운 안부 + 금액 + 계좌\" 2줄로 바로 보내세요",
    "enD": "Nine times out of ten, friends genuinely forgot—and silent resentment harms a friendship far more than a casual, friction-free text with your exact payment link.",
    "koD": "열에 아홉은 진짜 깜빡했을 뿐입니다. 말 못 하고 서운해하는 것보다 계좌번호를 함께 적은 가벼운 2줄 문자가 우정을 훨씬 건강하게 지킵니다.",
    "enS": "\"Hey [Name]! Hope your week is going great — quick nudge on the [$X] for [event/tickets] whenever you get a sec! Here’s my handle/info to make it easy: [Link/Details]. Thanks so much!\"",
    "koS": "\"OO아 이번 주 잘 보내고 있지? 지난번 [모임/티켓] 정산 [금액]원 생각나서 편하게 보내려고 계좌 남겨 둬! [계좌번호] 시간 될 때 편히 보내줘~ 고마워!\"",
    "enL": [
      "Assume forgetfulness, not bad intent—keep tone warm, breezy, and short (2 lines max).",
      "Always include the exact amount AND your payment link/account in the same message to remove friction.",
      "If unpaid after 2 gentle nudges, offer a calm split option (\"Want to do half this Friday and half next?\") and pause future lending."
    ],
    "koL": [
      "악의가 아니라 \"깜빡함\"을 전제로 짧고 밝게 2줄로 보내세요.",
      "상대가 다시 물어보지 않도록 금액과 계좌번호를 반드시 한 메시지에 함께 넣으세요.",
      "2번 안내 후에도 미뤄지면 \"이번 주 반, 다음 주 반 나눠서 편하게 보내도 돼\"로 구체적 일정을 잡으세요."
    ]
  },
  "mid": {
    "enT": "Mild Hesitation — Include Exact Amount + Easy Payment Info in One Casual Line",
    "koT": "가벼운 망설임 — 금액과 계좌를 한 줄에 담아 자연스럽게 보내세요",
    "enD": "Making payment one-tap easy gets 90% of forgotten splits settled within the hour.",
    "koD": "바로 복사해 보낼 수 있게 계좌를 같이 적으면 대부분 한 시간 안에 깔끔히 정산됩니다.",
    "enS": "\"Hey! Closing out my monthly budget—could you shoot over the [$X] for [item] when you have a moment? [Handle] Thanks!\"",
    "koS": "\"이번 달 가계부 정리 중인데 지난번 [항목] [금액]원 편할 때 [계좌]로 보내줄 수 있을까? 고마워!\"",
    "enL": [
      "Anchor the reminder to \"closing out my monthly budget\" so it feels neutral and routine.",
      "Send during daytime hours when they are free to open their banking app.",
      "Thank them warmly once received to close the loop cleanly."
    ],
    "koL": [
      "\"월말 가계부 정리 중\"처럼 중립적 맥락을 붙이면 서로 훨씬 덜 민망합니다.",
      "송금 앱을 바로 열 수 있는 낮 시간대에 보내세요.",
      "입금되면 \"확인했어 고마워!\"로 밝게 마무리해 어색함을 없애세요."
    ]
  },
  "high": {
    "enT": "Clear Money Boundaries — Healthy, Resentment-Free Friendships",
    "koT": "건강한 금전 경계 — 서운함 없는 깔끔한 관계",
    "enD": "You normalize transparent bill-splitting so money never quietly poisons good relationships.",
    "koD": "투명하고 편안한 정산 습관으로 돈 때문에 관계가 상하는 일을 잘 예방하고 있습니다.",
    "enS": "\"Clear accounts make long friendships.\"",
    "koS": "\"깔끔한 정산이 오래가는 우정을 만든다.\"",
    "enL": [
      "Send split requests within 24 hours while fresh.",
      "Keep lending within amounts you are genuinely comfortable with.",
      "Keep tone light and matter-of-fact."
    ],
    "koL": [
      "모임 후 24시간 안에 바로 정산 안내를 보내세요.",
      "내가 감당 가능한 범위 안에서만 금전 거래를 하세요.",
      "언제나 담백하고 밝은 톤을 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_lent_money_v1";
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
      window.gtag('event', "lent_money_script_complete", {
        tool_slug: "borrowed-money-friend-awkward-script",
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
      var shareUrl = "https://dopabrain.com/portal/tools/borrowed-money-friend-awkward-script.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "borrowed-money-friend-awkward-script",
        filename: 'dopabrain-borrowed-money-friend-awkward-script-card.png',
        badge: "RELATIONSHIP CLARITY • ASKING FOR LENT MONEY BACK WITHOUT AWKWARDNESS",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ec4899",
        accent2: "#f59e0b"
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
