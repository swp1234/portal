/* Anger & Irritability 90-Second Cooldown De-escalator
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Anger & Irritability 90-Second Cooldown De-escalator | DopaBrain",
    "metaDesc": "Free 12-language Anger & Irritability Cooldown De-escalator. Uncover 5 protective needs hiding underneath frustration locally and generate a calm, firm boundary script without explosive regret.",
    "keywords": "anger cooldown tool, frustration deescalator, how to calm down anger fast, anger iceberg worksheet, firm boundary without yelling, dopabrain",
    "kicker": "ANGER ICEBERG & 90-SECOND COOLDOWN",
    "heroTitle": "Anger & Irritability 90-Second Cooldown De-escalator",
    "heroLead": "Feeling your chest heat up, jaw tighten, or about to fire off a sharp text you will regret? Rate 5 underlying anger fuels locally to cool the surge and voice the real boundary cleanly.",
    "chip1": "5 Anger Fuels",
    "chip2": "Regret-Free Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHAT IS FUELING THE HEAT (1 = LOW, 5 = BOILING)",
    "step1Title": "Which hidden signals are feeding your anger or irritability right now?",
    "step1Sub": "Anger is often a bodyguard protecting a hurt or boundary. Everything stays strictly local.",
    "inputLabel": "Optional: 1 boundary or need my anger is actually trying to protect (100% local):",
    "inputPlaceholder": "Example: I need my weekend time respected instead of last-minute surprises",
    "ctaBtn": "Cool Down Heat & Build Firm Script",
    "resultBadge": "STEP 2 • YOUR CALM, FIRM DE-ESCALATION PLAN",
    "noteTitle": "The Core Need My Anger Is Protecting",
    "meterLabel": "Prefrontal Cooldown Margin",
    "scriptTitle": "Firm, Non-Explosive Boundary Statement",
    "stepsTitle": "3 Physical Moves to Vent Heat Safely in 90 Seconds",
    "stickyTitle": "Need a structured 4-part dialogue to resolve the disagreement?",
    "stickySub": "Build an Observation-Feeling-Need-Request (OFNR) script",
    "stickyBtn": "NVC Builder →",
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
    "title": "분노·짜증 90초 쿨다운 & 핵심 경계 번역기 | DopaBrain",
    "metaDesc": "화가 치밀어 올라 후회할 말이나 메시지를 보내기 직전인가요? 분노 빙산 아래 숨은 5가지 신호를 로컬에서 점검하고 폭발 없이 단호하게 전달하는 문장을 만드세요.",
    "kicker": "분노 빙산 해독 · 90초 쿨다운",
    "heroTitle": "분노·짜증 90초 쿨다운 번역기",
    "heroLead": "가슴이 뜨거워지고 날카로운 말이 목구멍까지 차올랐나요? 분노는 종종 침범당한 경계를 지키는 경보입니다. 5가지 원인을 비공개로 점검해 폭발 대신 단단한 경계 문장으로 바꾸세요.",
    "chip1": "5가지 분노 연료",
    "chip2": "후회 없는 단호함",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 지금 분노를 키우는 신호 점검 (1 = 잔잔함, 5 = 끓어오름)",
    "step1Title": "지금 올라오는 화와 짜증 아래에 어떤 신호가 겹쳐 있나요?",
    "step1Sub": "모든 입력은 내 브라우저 안에서만 처리되며 외부로 전송되지 않습니다.",
    "inputLabel": "선택: 이 분노가 사실 지키려고 하는 나의 경계·욕구 1가지 (100% 로컬):",
    "ctaBtn": "열기 식히기 & 단호한 경계 문장 생성",
    "resultBadge": "2단계 • 폭발 없이 전달하는 쿨다운 플랜",
    "noteTitle": "내 분노가 지키려던 핵심 경계",
    "meterLabel": "이성적 쿨다운 여유도",
    "scriptTitle": "화내지 않고도 분명하게 선을 긋는 문장",
    "stepsTitle": "90초 안에 몸의 열기를 안전하게 빼는 3단계",
    "stickyTitle": "상대와 갈등을 차분히 풀 4단계 대화문이 필요하신가요?",
    "stickySub": "비폭력대화(NVC) OFNR 스크립트 빌더로 정리해 보세요",
    "stickyBtn": "NVC 빌더 →",
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
    "title": "愤怒与烦躁90秒降温转化器 | DopaBrain",
    "heroTitle": "愤怒90秒降温转化器",
    "ctaBtn": "降温并生成坚定话术",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "怒り・イライラ90秒クールダウン | DopaBrain",
    "heroTitle": "怒り90秒クールダウン",
    "ctaBtn": "クールダウンと境界文を作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Desescalador de Ira y Frustración (90s) | DopaBrain",
    "heroTitle": "Desescalador de Ira (90s)",
    "ctaBtn": "Enfriar y crear límite",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Desescalador de Raiva e Frustração (90s) | DopaBrain",
    "heroTitle": "Desescalador de Raiva",
    "ctaBtn": "Esfriar e criar limite",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Wut- & Frust-Cooldown-Deeskalator | DopaBrain",
    "heroTitle": "Wut-Cooldown (90s)",
    "ctaBtn": "Abkühlen & Grenze formulieren",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Désamorceur Colère & Frustration (90s) | DopaBrain",
    "heroTitle": "Désamorceur Colère",
    "ctaBtn": "Apaiser et poser une limite",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Охладитель гнева и раздражения (90с) | DopaBrain",
    "heroTitle": "Охладитель гнева (90с)",
    "ctaBtn": "Остыть и создать границу",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "गुस्सा व चिड़चिड़ाहट 90-सेकंड कूलडाउन | DopaBrain",
    "heroTitle": "गुस्सा 90s कूलडाउन",
    "ctaBtn": "शांत सीमा वाक्य बनाएं",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pereda Amarah & Frustrasi (90 Detik) | DopaBrain",
    "heroTitle": "Pereda Amarah (90d)",
    "ctaBtn": "Tenangkan & Buat Batas",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Öfke ve Sinir 90 Saniye Soğutucu | DopaBrain",
    "heroTitle": "Öfke 90s Soğutucu",
    "ctaBtn": "Sakin Sınır Cümlesi Kur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "crossed_limit",
    "en": "Crossed Boundary — Someone ignored a clear preference, commitment, or limit",
    "ko": "경계 침범 — 분명히 말한 기준이나 약속이 무시당해 억울함"
  },
  {
    "id": "stacked_resent",
    "en": "Stacked Unspoken Resentment — Swallowing 5 small annoyances until #6 detonates",
    "ko": "쌓인 서운함 — 작은 불편함 5번을 참다가 6번째에 한꺼번에 터짐"
  },
  {
    "id": "exhausted_fuse",
    "en": "Depleted Physical Fuse — Hungry, sleep-deprived, or overstimulated before this happened",
    "ko": "체력 방전 — 이미 배고프고 잠이 부족하거나 지쳐 있어 인내심 바닥"
  },
  {
    "id": "disrespect",
    "en": "Feeling Dismissed or Blamed — Sensing condescension, unfair blame, or broken trust",
    "ko": "무시·억울한 비난 — 깔보는 태도나 부당한 책임 전가에 방어심이 치솟음"
  },
  {
    "id": "helpless",
    "en": "Loss of Control / Helplessness — Feeling trapped in an unfair situation with no fast fix",
    "ko": "무력감·통제 상실 — 불공평한 상황에서 바로 해결할 수 없어 답답함이 폭발"
  }
];
  var TIERS = {
  "low": {
    "enT": "Red-Hot Surge — Pause All Replies & Discharge Adrenaline First",
    "koT": "고열 폭발 직전 — 모든 답장을 멈추고 아드레날린부터 빼세요",
    "enD": "Your sympathetic nervous system is flooded with fight energy. Sending a message right now gives away your power—step away for 15 minutes so you can speak with calm authority instead of heat.",
    "koD": "교감신경이 전투 에너지로 가득 찼습니다. 지금 보내는 말은 정당한 내 입장마저 약하게 만듭니다. 딱 15분만 자리를 피해 차가운 단호함을 되찾으세요.",
    "enS": "\"I am too heated to have a productive conversation right now, and I do not want to say something unfair. I am stepping back for 20 minutes and will come back to address this clearly.\"",
    "koS": "\"지금은 감정이 너무 올라와서 생산적인 대화가 어렵고 서로 상처 줄 말을 하고 싶지 않아요. 20분만 식히고 돌아와서 분명하게 이야기할게요.\"",
    "enL": [
      "Splash cold water on your face or wrists (activates the mammalian dive reflex to slow heart rate).",
      "Burn excess fight energy physically: brisk 2-minute walk, wall push-ups, or shaking out hands.",
      "Do NOT hit send on any draft written while your pulse is racing—save it in notes only."
    ],
    "koL": [
      "얼굴이나 손목에 찬물을 끼얹어 심박수를 즉각 낮추는 포유류 잠수 반사를 켜세요.",
      "2분 빠른 걷기·벽 밀기·손 털기처럼 넘치는 전투 에너지를 몸으로 먼저 배출하세요.",
      "맥박이 뛰는 동안 쓴 초안은 절대 전송하지 말고 메모장에만 저장해 두세요."
    ]
  },
  "mid": {
    "enT": "Simmering Frustration — Translate Irritability Into One Clear Limit",
    "koT": "끓어오르는 짜증 — 날 선 말 대신 분명한 기준 1문장으로 바꾸세요",
    "enD": "You have enough control to avoid a blowup while still honoring that something genuinely bothered you. Firmness does not require raising your voice.",
    "koD": "폭발하지 않으면서도 불편했던 지점을 정확히 짚을 수 있는 골든타임입니다. 단호함은 목소리를 높이지 않아도 충분히 전달됩니다.",
    "enS": "\"I want to be direct with you: when [behavior] happened, it crossed a boundary for me. Going forward, I need [specific change].\"",
    "koS": "\"솔직하게 말씀드릴게요. 방금 [특정 행동]은 저에게 불편한 선을 넘었습니다. 앞으로는 [구체적 기준]으로 맞춰 주시면 좋겠습니다.\"",
    "enL": [
      "Check HALT (Hungry, Angry, Lonely, Tired) before deciding whether to address this tonight or tomorrow.",
      "Speak 20% slower and drop your shoulders—calm delivery carries stronger weight.",
      "Focus on 1 concrete future rule rather than relitigating past mistakes."
    ],
    "koL": [
      "지금 당장 말할지 내일 말할지 정하기 전에 배고픔·수면부족·피로(HALT)를 먼저 점검하세요.",
      "말 속도를 평소보다 20% 늦추고 어깨 힘을 빼면 훨씬 묵직한 설득력이 생깁니다.",
      "과거 잘못을 나열하기보다 앞으로 지킬 구체적 기준 1가지에 집중하세요."
    ]
  },
  "high": {
    "enT": "Cool & Grounded Clarity — Direct, Respectful Self-Advocacy",
    "koT": "차분하고 명료한 상태 — 존중과 단호함이 공존하는 소통",
    "enD": "Your nervous system is steady enough to protect your boundaries without defensiveness or aggression. Address small frictions early so resentment never stacks.",
    "koD": "공격성이나 위축 없이 내 기준을 또렷하게 지킬 수 있는 안정된 상태입니다. 작은 불편을 초기에 담백하게 표현하면 큰 폭발을 평생 예방할 수 있습니다.",
    "enS": "\"Quick heads-up so it stays easy between us—I work best when we align on [expectation] ahead of time.\"",
    "koS": "\"서로 편하게 지내기 위해 미리 말씀드릴게요—[기대 기준]을 사전에 맞춰두면 훨씬 수월할 것 같아요.\"",
    "enL": [
      "Voice minor boundary drifts calmly before they repeat three times.",
      "Notice early jaw tightness as useful data rather than an enemy.",
      "Protect rest and transitions so your baseline fuse stays long."
    ],
    "koL": [
      "사소한 경계 침범을 세 번 참기 전에 처음에 담백하게 알리는 습관을 유지하세요.",
      "턱에 힘이 들어가는 초기 신호를 유용한 경계 정보로 활용하세요.",
      "충분한 휴식과 전환 시간을 지켜 평소 인내심 버퍼를 넉넉히 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_anger_cool_v1";
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
      window.gtag('event', "anger_cooldown_complete", {
        tool_slug: "anger-cooldown-deescalator",
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
      var shareUrl = "https://dopabrain.com/portal/tools/anger-cooldown-deescalator.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "anger-cooldown-deescalator",
        filename: 'dopabrain-anger-cooldown-deescalator-card.png',
        badge: "ANGER ICEBERG & 90-SECOND COOLDOWN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ef4444",
        accent2: "#f97316"
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
