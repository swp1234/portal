/* Difficult Coworker Professional Grey-Rock Script Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Difficult Coworker Professional Grey-Rock Script Builder | DopaBrain",
    "metaDesc": "Dealing with passive-aggressive jabs, credit-stealing, or relentless office drama? Audit 5 baiting patterns locally and copy boringly polite, drama-proof professional scripts.",
    "kicker": "WORKPLACE BOUNDARIES • DIFFICULT COWORKER GREY-ROCK SCRIPTS",
    "heroTitle": "Difficult Coworker Professional Grey-Rock Script Builder",
    "heroLead": "Dealing with passive-aggressive jabs, credit-stealing, or relentless office drama? Audit 5 baiting patterns locally and copy boringly polite, drama-proof professional scripts.",
    "chip1": "5 Baiting Traps",
    "chip2": "Drama-Proof Scripts",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHICH COWORKER PATTERNS DRAIN YOU (1 = UNAFFECTED, 5 = HOOKED)",
    "step1Title": "How does workplace drama pull you into unnecessary stress?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One recurring bait or topic I will respond to with neutral brevity (100% local):",
    "ctaBtn": "Build My Professional Grey-Rock Scripts",
    "resultBadge": "STEP 2 • YOUR CALM WORKPLACE GREY-ROCK PLAYBOOK",
    "noteTitle": "My Neutral-Response Target",
    "meterLabel": "Emotional Shield Score",
    "scriptTitle": "Polite, Boring, Unhookable Professional Lines",
    "stepsTitle": "3 Professional Grey-Rock Rules That Starve Office Drama",
    "stickyTitle": "Notice how relational conflict triggers your stress response?",
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
    "title": "까다로운 동료·가십 차단 프로페셔널 그레이 락(Grey Rock) 스크립트 | DopaBrain",
    "metaDesc": "은근한 비아냥·공 가로채기·사내 가십에 에너지를 빼앗기고 있나요? 5가지 감정 도발 패턴을 점검하고 정중하면서도 지루할 만큼 단호한 프로페셔널 그레이 락 멘트를 준비하세요.",
    "kicker": "직장 인간관계 · 까다로운 동료 감정 소모 차단(그레이 락) 스크립트",
    "heroTitle": "까다로운 동료·가십 차단 프로페셔널 그레이 락(Grey Rock) 스크립트",
    "heroLead": "은근한 비아냥·공 가로채기·사내 가십에 에너지를 빼앗기고 있나요? 5가지 감정 도발 패턴을 점검하고 정중하면서도 지루할 만큼 단호한 프로페셔널 그레이 락 멘트를 준비하세요.",
    "chip1": "5가지 도발 함정",
    "chip2": "정중한 차단 멘트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 직장 내 감정 소모 유발 패턴 점검 (1 = 무덤덤, 5 = 크게 흔들림)",
    "step1Title": "까다로운 동료와의 마찰에서 가장 크게 신경 쓰이는 지점은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 앞으로 감정 없이 짧고 정중하게 넘길 단골 도발·가십 주제 1가지 (100% 로컬):",
    "ctaBtn": "내 프로페셔널 그레이 락 스크립트 보기",
    "resultBadge": "2단계 • 품위와 에너지를 지키는 그레이 락 응대법",
    "noteTitle": "무반응·중립 응대 적용 대상",
    "meterLabel": "감정 방패 지수",
    "scriptTitle": "감정 먹이를 주지 않는 정중·건조 프로 멘트",
    "stepsTitle": "사내 드라마의 연료를 끊는 3가지 그레이 락 원칙",
    "stickyTitle": "대인 갈등에서 내 관계 반응 패턴이 어떻게 작동하는지 알아볼까요?",
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
    "title": "难缠同事职场灰岩法(Grey Rock)专业话术 | DopaBrain",
    "heroTitle": "难缠同事职场灰岩法(Grey Rock)专业话术",
    "heroLead": "用礼貌简洁的BIFF事实回应切断职场阴阳怪气与八卦消耗。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "厄介な同僚グレーロック＆BIFFプロ応答スクリプト | DopaBrain",
    "heroTitle": "厄介な同僚グレーロック＆BIFFプロ応答スクリプト",
    "heroLead": "職場の嫌味や噂話に感情を奪われない丁寧・簡潔な中立フレーズを作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Guiones Profesionales Piedra Gris para Compañeros Difíciles | DopaBrain",
    "heroTitle": "Guiones Profesionales Piedra Gris para Compañeros Difíciles",
    "heroLead": "Desactiva el drama laboral y comentarios pasivo-agresivos con respuestas corteses y neutras.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Scripts Profissionais Pedra Cinza para Colegas Difíceis | DopaBrain",
    "heroTitle": "Scripts Profissionais Pedra Cinza para Colegas Difíceis",
    "heroLead": "Corte fofocas e provocações no trabalho com respostas educadas, curtas e factuais.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Grey-Rock- & BIFF-Skripte für schwierige Kollegen | DopaBrain",
    "heroTitle": "Grey-Rock- & BIFF-Skripte für schwierige Kollegen",
    "heroLead": "Entziehe Büro-Drama den Nährboden mit höflichen, sachlichen und kurzen Antworten.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Scripts Professionnels Pierre Grise (Collègue Difficile) | DopaBrain",
    "heroTitle": "Scripts Professionnels Pierre Grise (Collègue Difficile)",
    "heroLead": "Coupez court au drame de bureau grâce à des réponses polies, brèves et factuelles.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Профессиональные скрипты «Серого камня» для трудных коллег | DopaBrain",
    "heroTitle": "Профессиональные скрипты «Серого камня» для трудных коллег",
    "heroLead": "Остановите офисную драму вежливыми, короткими и деловыми ответами BIFF.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "मुश्किल सहकर्मी के लिए प्रोफेशनल ग्रे-रॉक स्क्रिप्ट | DopaBrain",
    "heroTitle": "मुश्किल सहकर्मी के लिए प्रोफेशनल ग्रे-रॉक स्क्रिप्ट",
    "heroLead": "ऑफिस ड्रामा और तानों को विनम्र, संक्षिप्त और तथ्य-आधारित जवाबों से शांत करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Skrip Grey Rock Profesional untuk Rekan Kerja Sulit | DopaBrain",
    "heroTitle": "Skrip Grey Rock Profesional untuk Rekan Kerja Sulit",
    "heroLead": "Hentikan drama kantor dan sindiran halus dengan jawaban singkat, sopan, dan faktual.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Zor İş Arkadaşı için Profesyonel Gri Kaya (Grey Rock) Metinleri | DopaBrain",
    "heroTitle": "Zor İş Arkadaşı için Profesyonel Gri Kaya (Grey Rock) Metinleri",
    "heroLead": "Ofis dramasını ve pasif-agresif iğnelemeleri nazik, kısa ve net yanıtlarla durdurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "over_explaining",
    "en": "JADE Over-Explaining — Justifying, Arguing, Defending, or Explaining every small choice",
    "ko": "과잉 해명(JADE) — 사소한 트집에도 길게 변명·설득·방어하느라 진이 빠짐"
  },
  {
    "id": "gossip_pull",
    "en": "Venting & Gossip Traps — Getting pulled into complaining sessions that backfire later",
    "ko": "가십·험담 덫 — 동조해 주려다 원치 않는 사내 정치와 뒷담화에 말려듦"
  },
  {
    "id": "passive_aggressive_hook",
    "en": "Passive-Aggressive Hooks — Taking subtle jabs personally and stewing all afternoon",
    "ko": "수동공격 미끼 — 비꼬는 한마디를 종일 곱씹으며 업무 집중을 놓침"
  },
  {
    "id": "verbal_only_promises",
    "en": "Undocumented Verbal Agreements — Relying on hallway chats that later get twisted",
    "ko": "구두 합의 함정 — 복도에서 말로만 맞춘 내용이 나중에 다르게 전달됨"
  },
  {
    "id": "personal_oversharing",
    "en": "Sharing Personal Vulnerability — Giving sensitive personal details to an untrustworthy peer",
    "ko": "사생활 과다 공유 — 신뢰하기 어려운 동료에게 개인적인 고민까지 털어놓음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Drama Drain — Switch to BIFF (Brief, Informative, Friendly, Firm) & Written Recaps",
    "koT": "감정 소모 높음 — BIFF(짧고·사실 중심·정중·단호) 응대와 텍스트 기록으로 즉시 전환하세요",
    "enD": "High-conflict colleagues feed on emotional reactions, long justifications, and gossip. Professional Grey-Rocking stays impeccably polite yet as uninteresting as a smooth grey pebble—starving drama while protecting your reputation.",
    "koD": "갈등 유발형 동료는 상대의 감정 동요와 긴 해명에서 에너지를 얻습니다. 프로페셔널 그레이 락은 예의는 완벽히 지키되 조약돌처럼 건조하고 사실 중심으로만 답해 드라마의 연료를 차단합니다.",
    "enS": "\"Thanks for flagging—I’ll stick to the agreed sprint plan and share the status doc in Slack at 3 PM. Let’s keep focus on deliverable #2.\"",
    "koS": "\"말씀 감사합니다. 합의된 일정대로 진행해서 오후 3시에 공유 문서에 업데이트해 두겠습니다. 그럼 2번 안건부터 마무리할게요.\"",
    "enL": [
      "Drop JADE (never Justify, Argue, Defend, or Explain emotionally)—answer only factual work questions in 1–2 neutral sentences.",
      "Move messy verbal requests to email/Slack (\"Just recapping our alignment in writing so nothing slips!\").",
      "Keep small talk strictly boring (weather, coffee, calendar logistics)—zero personal vulnerability."
    ],
    "koL": [
      "감정적 해명·설득(JADE)을 멈추고 업무 사실 질문에만 1~2문장으로 건조하고 정중하게 답하세요.",
      "모호한 구두 요청은 반드시 \"누락 방지용 정리\" 명목으로 메일·슬랙에 짧게 남기세요.",
      "잡담은 날씨·일정 같은 지루한 주제로만 유지하고 사적인 고민은 절대 공유하지 마세요."
    ]
  },
  "mid": {
    "enT": "Mostly Shielded — Tighten Written Follow-Ups & Shorten Replies",
    "koT": "어느 정도 방어 중 — 답변 길이만 절반으로 줄이고 기록 습관을 더하세요",
    "enD": "Your instincts are solid; keeping replies under 2 sentences prevents hook-ins.",
    "koD": "감정 거리 조절이 꽤 좋습니다. 답변을 2문장 이내로만 유지하면 훨씬 편해집니다.",
    "enS": "\"Polite tone, short facts, zero emotional fuel.\"",
    "koS": "\"말투는 정중하게, 내용은 사실만 짧게, 감정 연료는 제로로.\"",
    "enL": [
      "Wait 10 minutes before replying to snarky messages.",
      "Redirect gossip smoothly (\"Sounds tricky—I’ve gotta jump into this report!\").",
      "Save venting for trusted friends outside work."
    ],
    "koL": [
      "날 선 메시지에는 10분 숨 고른 뒤 건조하게 답하세요.",
      "가십이 시작되면 \"아, 저 지금 마감 건이 있어서 먼저 들어가 볼게요\"로 자연스럽게 빠지세요.",
      "속풀이는 직장 밖 신뢰하는 지인과만 나누세요."
    ]
  },
  "high": {
    "enT": "Unshakeable Professional Calm — Clean Workplace Boundaries",
    "koT": "흔들리지 않는 프로 평정심 — 건강한 직장 경계를 지키고 있습니다",
    "enD": "You keep interactions courteous, factual, and drama-free.",
    "koD": "예의와 사실 중심 소통으로 불필요한 사내 소모전을 완벽히 피하고 있습니다.",
    "enS": "\"My peace at work is not up for negotiation.\"",
    "koS": "\"직장에서의 내 평정심은 타인의 기분에 휘둘리지 않는다.\"",
    "enL": [
      "Keep documenting key handoffs cleanly.",
      "Invest energy in supportive allies.",
      "Leave office politics at the door at 6 PM."
    ],
    "koL": [
      "핵심 인수인계 기록 습관을 이어 가세요.",
      "건강하고 신뢰할 수 있는 동료들에게 에너지를 쓰세요.",
      "퇴근과 함께 사내 정치는 문 밖에 두고 나오세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_coworker_grey_rock_v1";
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
      window.gtag('event', "coworker_grey_rock_complete", {
        tool_slug: "toxic-coworker-grey-rock-script",
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
      var shareUrl = "https://dopabrain.com/portal/tools/toxic-coworker-grey-rock-script.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "toxic-coworker-grey-rock-script",
        filename: 'dopabrain-toxic-coworker-grey-rock-script-card.png',
        badge: "WORKPLACE BOUNDARIES • DIFFICULT COWORKER GREY-ROCK SCRIPTS",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#64748b",
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
