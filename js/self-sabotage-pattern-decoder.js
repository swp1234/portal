/* Self-Sabotage & Procrastination Pattern Decoder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Self-Sabotage & Procrastination Pattern Decoder | DopaBrain",
    "metaDesc": "Stalling right when a goal starts going well, or picking fights right before closeness? Decode 5 protective self-sabotage loops locally and pick one safe next micro-move.",
    "kicker": "PROTECTIVE HABITS • SELF-SABOTAGE DECODER",
    "heroTitle": "Self-Sabotage & Procrastination Pattern Decoder",
    "heroLead": "Stalling right when a goal starts going well, or picking fights right before closeness? Decode 5 protective self-sabotage loops locally and pick one safe next micro-move.",
    "chip1": "5 Protective Loops",
    "chip2": "Safe Micro-Step",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • SPOT YOUR ACTIVE SELF-SABOTAGE SIGNALS (1 = RARE, 5 = STRONG)",
    "step1Title": "Which protective loop is slowing your progress right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The tiny 3-minute step I can complete even while feeling imperfect (100% local):",
    "ctaBtn": "Decode My Pattern & Next Step",
    "resultBadge": "STEP 2 • YOUR PROTECTIVE PATTERN REFRAME",
    "noteTitle": "My Imperfect 3-Minute Safe Step",
    "meterLabel": "Forward Momentum Clarity",
    "scriptTitle": "Compassionate Pattern-Interrupt Line",
    "stepsTitle": "3 Grounded Ways to Move Past Self-Sabotage",
    "stickyTitle": "Want to explore deeper hidden emotional patterns?",
    "stickySub": "Try the free Shadow Work Reflection Guide next",
    "stickyBtn": "Shadow Work →",
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
    "title": "자기방해·미루기 보호 패턴 해독기 | DopaBrain",
    "metaDesc": "일이 잘 풀릴 때쯤 갑자기 미루거나 중요한 순간에 스스로 발목을 잡나요? 5가지 자기방해 보호 패턴을 비공개로 해독하고 안전한 다음 1걸음을 설계하세요.",
    "kicker": "자기방해 패턴 해독 · 보호 습관 전환",
    "heroTitle": "자기방해·미루기 보호 패턴 해독기",
    "heroLead": "일이 잘 풀릴 때쯤 갑자기 미루거나 중요한 순간에 스스로 발목을 잡나요? 5가지 자기방해 보호 패턴을 비공개로 해독하고 안전한 다음 1걸음을 설계하세요.",
    "chip1": "5가지 보호 루프",
    "chip2": "안전한 1걸음",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 작동 중인 자기방해 신호 점검 (1 = 드묾, 5 = 강함)",
    "step1Title": "지금 나의 전진을 막고 있는 익숙한 자기방해 패턴은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 완벽하지 않아도 지금 당장 3분 안에 끝낼 수 있는 작은 행동 (100% 로컬):",
    "ctaBtn": "내 패턴 해독 & 안전한 다음 행동 보기",
    "resultBadge": "2단계 • 자기방해 패턴 리프레임 플랜",
    "noteTitle": "불완전해도 괜찮은 나의 3분 실행",
    "meterLabel": "실행 추진 명료도",
    "scriptTitle": "패턴을 부드럽게 멈추는 한 문장",
    "stepsTitle": "자기방해를 넘어서는 3가지 현실적 전환",
    "stickyTitle": "내 안의 숨은 감정 패턴을 더 깊이 탐색해 볼까요?",
    "stickySub": "무료 섀도우 워크 성찰 가이드로 무의식 습관 이해하기",
    "stickyBtn": "섀도우 워크 →",
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
    "title": "自我妨碍与拖延模式解码器 | DopaBrain",
    "heroTitle": "自我妨碍与拖延模式解码器",
    "heroLead": "识别5大潜意识保护性拖延循环，选出零压力的3分钟微小行动。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "自己妨害・先延ばしパターン解読 | DopaBrain",
    "heroTitle": "自己妨害・先延ばしパターン解読",
    "heroLead": "5つの防衛的な先延ばしループを整理し、安全な3分の第一歩を作ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Decodificador de Autosabotaje y Procrastinación | DopaBrain",
    "heroTitle": "Decodificador de Autosabotaje y Procrastinación",
    "heroLead": "Descifra 5 bucles protectores de autosabotaje y elige un micro-paso seguro de 3 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Decodificador de Autossabotagem | DopaBrain",
    "heroTitle": "Decodificador de Autossabotagem",
    "heroLead": "Decodifique 5 ciclos protetores de autossabotagem e escolha um micro-passo de 3 min.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Selbstsabotage- & Prokrastinations-Decoder | DopaBrain",
    "heroTitle": "Selbstsabotage- & Prokrastinations-Decoder",
    "heroLead": "Entschlüssle 5 schützende Selbstsabotage-Schleifen und wähle einen sicheren 3-Min-Schritt.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Décodeur d’Auto-Sabotage & Procrastination | DopaBrain",
    "heroTitle": "Décodeur d’Auto-Sabotage & Procrastination",
    "heroLead": "Décodez 5 boucles protectrices d’auto-sabotage et lancez un micro-pas sûr de 3 min.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Декодер самосаботажа и прокрастинации | DopaBrain",
    "heroTitle": "Декодер самосаботажа и прокрастинации",
    "heroLead": "Разберите 5 защитных петель самосаботажа и выберите безопасный шаг на 3 минуты.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सेल्फ-सैबोटाज पैटर्न डिकोडर | DopaBrain",
    "heroTitle": "सेल्फ-सैबोटाज पैटर्न डिकोडर",
    "heroLead": "5 सुरक्षात्मक टालमटोल लूप समझें और एक आसान 3-मिनट का पहला कदम चुनें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Dekoder Pola Sabotase Diri & Menunda | DopaBrain",
    "heroTitle": "Dekoder Pola Sabotase Diri & Menunda",
    "heroLead": "Urai 5 pola sabotase diri yang protektif dan pilih langkah mikro aman 3 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kendini Sabote Etme Kalıbı Çözücü | DopaBrain",
    "heroTitle": "Kendini Sabote Etme Kalıbı Çözücü",
    "heroLead": "5 koruyucu kendini sabote etme döngüsünü çözün ve güvenli 3 dakikalık adım seçin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "upper_limit",
    "en": "Success Discomfort — Losing steam or creating friction right when things go well",
    "ko": "성공 직전 브레이크 — 잘 풀릴 때쯤 괜히 불안해져 속도를 늦춤"
  },
  {
    "id": "perfection_delay",
    "en": "Perfectionism Stall — Waiting for the \"ideal mood\" or plan until deadlines loom",
    "ko": "완벽주의 지연 — 완벽한 컨디션과 계획을 기다리다 시작을 놓침"
  },
  {
    "id": "self_handicap",
    "en": "Last-Minute Self-Handicapping — Leaving too little time so failure feels safer",
    "ko": "막판 자충수 — 실패의 상처를 피하려 일부러 시간을 촉박하게 남김"
  },
  {
    "id": "novelty_escape",
    "en": "Shiny-Object Detour — Starting a brand-new project whenever the current one gets hard",
    "ko": "새 프로젝트 도피 — 현재 일이 까다로워지면 새로운 아이디어로 시선 회피"
  },
  {
    "id": "harsh_self_talk",
    "en": "Shame Spiral After Slip — Turning one small missed day into \"I ruined everything\"",
    "ko": "실수 후 자책 루프 — 하루 놓친 것을 전체 포기로 확대 해석함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Protective Loop Active — Treat Resistance as Safety-Seeking, Not Laziness",
    "koT": "강한 보호 루프 작동 중 — 게으름이 아니라 상처를 피하려는 방어입니다",
    "enD": "Self-sabotage usually protects you from judgment, visibility, or disappointment. Lowering the stakes to a messy 3-minute draft lets your nervous system stay calm while moving forward.",
    "koD": "자기방해는 대개 평가·실패·실망의 아픔을 피하려는 뇌의 보호 전략입니다. 기준을 3분짜리 거친 초안으로 낮추면 저항이 빠르게 줄어듭니다.",
    "enS": "\"This hesitation is an old safety habit, not a verdict on my ability. I can take one tiny, imperfect step safely right now.\"",
    "koS": "\"이 망설임은 능력 부족이 아니라 오래된 보호 습관이야. 지금 당장 완벽하지 않은 3분짜리 첫걸음만 안전하게 내디딜게.\"",
    "enL": [
      "Name the fear neutrally (\"Part of me worries this won’t be good enough\") instead of attacking yourself.",
      "Set a 3-minute timer to produce an intentionally ugly rough version—zero editing allowed.",
      "Celebrate showing up once rather than demanding a flawless streak."
    ],
    "koL": [
      "자책 대신 두려움을 객관적으로 이름 붙여주세요(\"완벽하지 않을까 걱정되는구나\").",
      "3분 타이머를 켜고 수정 금지 규칙으로 일부러 투박한 초안만 만드세요.",
      "완벽한 연속 기록보다 오늘 1번 다시 시작한 사실 자체를 인정해 주세요."
    ]
  },
  "mid": {
    "enT": "Mild Friction Loop — Shrink the First Step and Remove Excuse Paths",
    "koT": "중간 수준 저항 루프 — 첫 단추만 작게 줄이면 바로 풀립니다",
    "enD": "You have clear direction, with occasional perfectionist stalls. Defining a tiny visible milestone breaks the loop before procrastination grows.",
    "koD": "방향은 분명하지만 가끔 완벽주의적 주저가 끼어듭니다. 눈에 보이는 아주 작은 첫 마일스톤을 정하면 금세 궤도에 오릅니다.",
    "enS": "\"Progress beats polish; version 0.1 is the only gate to version 1.0.\"",
    "koS": "\"완성도보다 전진이 먼저야. 0.1 버전이 있어야 1.0 버전도 만들 수 있어.\"",
    "enL": [
      "Split the avoided task into a 5-minute opener with a clear finish line.",
      "Remove one escape tab or app before starting the timer.",
      "Check in with yourself kindly after finishing the first 5 minutes."
    ],
    "koL": [
      "미루고 있는 일을 끝이 명확한 5분짜리 첫 단계로 쪼개세요.",
      "타이머를 누르기 전 도피용 탭이나 앱 1개만 먼저 닫아두세요.",
      "5분을 마친 뒤 스스로에게 짧고 따뜻한 격려를 건네세요."
    ]
  },
  "high": {
    "enT": "High Self-Trust & Follow-Through — Guard Against All-or-Nothing Thinking",
    "koT": "안정적인 자기 신뢰 상태 — 흑백논리만 경계하며 꾸준히 나아가세요",
    "enD": "Your actions align well with your goals right now. Keep treating minor off-days as normal data rather than reasons to abandon momentum.",
    "koD": "목표와 행동이 잘 맞물려 있습니다. 가끔 찾아오는 저조한 날도 포기의 이유가 아닌 자연스러운 리듬으로 받아들이세요.",
    "enS": "\"I keep small promises to myself calmly, one day at a time.\"",
    "koS": "\"나와의 작은 약속을 무리 없이 차분하게 하루씩 이어가고 있어.\"",
    "enL": [
      "Pick one meaningful milestone to ship this week without over-polishing.",
      "Keep a quick \"proof log\" of finished small wins to counter doubt later.",
      "Rest intentionally after finishing so progress feels rewarding, not punishing."
    ],
    "koL": [
      "이번 주 과도한 수정 없이 완료할 의미 있는 마일스톤 1개를 확정하세요.",
      "작은 완수 기록을 짧게 남겨두어 나중에 의심이 들 때 근거로 삼으세요.",
      "완수 후에는 충분히 쉬어주어 성취가 부담이 아닌 보상으로 느껴지게 하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_self_sabotage_v1";
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
      window.gtag('event', "self_sabotage_complete", {
        tool_slug: "self-sabotage-pattern-decoder",
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
      var shareUrl = "https://dopabrain.com/portal/tools/self-sabotage-pattern-decoder.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "self-sabotage-pattern-decoder",
        filename: 'dopabrain-self-sabotage-pattern-decoder-card.png',
        badge: "PROTECTIVE HABITS • SELF-SABOTAGE DECODER",
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
