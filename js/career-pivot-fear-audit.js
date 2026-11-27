/* Career Pivot & Uncertainty Fear Reality-Check Audit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Career Pivot & Uncertainty Fear Reality-Check Audit | DopaBrain",
    "metaDesc": "Feeling trapped between staying in a draining role and terror of starting over? Separate real constraints from sunk-cost fear locally and design one low-risk 30-day career prototype.",
    "kicker": "CAREER CLARITY • PIVOT & LAYOFF FEAR AUDIT",
    "heroTitle": "Career Pivot & Uncertainty Fear Reality-Check Audit",
    "heroLead": "Feeling trapped between staying in a draining role and terror of starting over? Separate real constraints from sunk-cost fear locally and design one low-risk 30-day career prototype.",
    "chip1": "5 Pivot Fears",
    "chip2": "30-Day Experiment",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT YOUR CAREER-CHANGE FRICTION (1 = CLEAR, 5 = PARALYZED)",
    "step1Title": "Which fear keeps you stuck between staying and pivoting?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One curious adjacent role or skill I could test for 30 days without quitting (100% local):",
    "ctaBtn": "Build My Low-Risk 30-Day Pivot Map",
    "resultBadge": "STEP 2 • YOUR LOW-RISK 30-DAY CAREER PROTOTYPE PLAN",
    "noteTitle": "My 30-Day No-Quit Prototype",
    "meterLabel": "Career Transition Readiness",
    "scriptTitle": "Informational Coffee-Chat Outreach Line",
    "stepsTitle": "3 Prototype Moves That Replace Leap-of-Faith Panic",
    "stickyTitle": "Want to clarify the 10-year direction you are building toward?",
    "stickySub": "Try the free Future Self Archetype Reflection",
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
    "title": "이직·커리어 전환 두려움 현실 점검 & 30일 실험 맵 | DopaBrain",
    "metaDesc": "지친 직장에 남기도, 새로 시작하기도 두려워 제자리걸음 중인가요? 매몰비용 두려움과 현실 제약을 비공개로 분리하고 리스크 없는 30일 미니 커리어 실험을 설계하세요.",
    "kicker": "커리어 전환 · 이직·커리어 피벗 두려움 현실 점검기",
    "heroTitle": "이직·커리어 전환 두려움 현실 점검 & 30일 실험 맵",
    "heroLead": "지친 직장에 남기도, 새로 시작하기도 두려워 제자리걸음 중인가요? 매몰비용 두려움과 현실 제약을 비공개로 분리하고 리스크 없는 30일 미니 커리어 실험을 설계하세요.",
    "chip1": "5가지 전환 두려움",
    "chip2": "30일 미니 실험",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 커리어 전환을 가로막는 두려움 점검 (1 = 선명, 5 = 마비)",
    "step1Title": "변화를 원하면서도 첫 발을 떼기 어렵게 만드는 가장 큰 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 퇴사 없이 30일간 가볍게 탐색해 볼 인접 직무·스킬 1가지 (100% 로컬):",
    "ctaBtn": "내 저위험 30일 커리어 실험 맵 보기",
    "resultBadge": "2단계 • 저위험 30일 커리어 프로토타입 프로토콜",
    "noteTitle": "퇴사 없는 30일 미니 실험",
    "meterLabel": "커리어 전환 준비도",
    "scriptTitle": "현직자 15분 커피챗 요청 2줄 멘트",
    "stepsTitle": "무모한 도약 대신 안전한 검증을 돕는 3단계",
    "stickyTitle": "10년 뒤 내가 닮고 싶은 커리어·삶의 원형을 그려 볼까요?",
    "stickySub": "무료 3분 미래의 나 아키타입 리플렉션",
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
    "title": "职业转型恐惧排查与30天低风险实验图 | DopaBrain",
    "heroTitle": "职业转型恐惧排查与30天低风险实验图",
    "heroLead": "区分沉没成本焦虑与现实条件，制定不盲目辞职的30天探索计划。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "転職・キャリア転換の不安チェック＆30日実験マップ | DopaBrain",
    "heroTitle": "転職・キャリア転換の不安チェック＆30日実験マップ",
    "heroLead": "サンクコストの恐怖を整理し、辞めずに試せる30日プロトタイプを設計します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Auditoría de Miedo al Cambio Profesional | DopaBrain",
    "heroTitle": "Auditoría de Miedo al Cambio Profesional",
    "heroLead": "Separa el sesgo de costo hundido y diseña un experimento laboral de 30 días.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Auditoria de Medo de Transição de Carreira | DopaBrain",
    "heroTitle": "Auditoria de Medo de Transição de Carreira",
    "heroLead": "Separe o medo de recomeçar e planeje um teste de carreira sem risco em 30 dias.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Karrierewechsel-Angst-Check & 30-Tage-Experiment | DopaBrain",
    "heroTitle": "Karrierewechsel-Angst-Check & 30-Tage-Experiment",
    "heroLead": "Trenne Sunk-Cost-Angst von Fakten und teste neue Rollen risikoarm in 30 Tagen.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Audit Peur de Reconversion & Prototype 30 Jours | DopaBrain",
    "heroTitle": "Audit Peur de Reconversion & Prototype 30 Jours",
    "heroLead": "Distinguez biais des coûts irrécupérables et testez une piste sans tout quitter.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Аудит страха смены карьеры и 30-дневный тест | DopaBrain",
    "heroTitle": "Аудит страха смены карьеры и 30-дневный тест",
    "heroLead": "Отделите страх перемен от фактов и проверьте новое направление без риска.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "करियर पिवट डर ऑडिट और 30-दिन का प्रयोग मैप | DopaBrain",
    "heroTitle": "करियर पिवट डर ऑडिट और 30-दिन का प्रयोग मैप",
    "heroLead": "संकोच को वास्तविकता से अलग करें और 30-दिन का कम-जोखिम करियर प्रयोग बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Audit Rasa Takut Pindah Karier & Tes 30 Hari | DopaBrain",
    "heroTitle": "Audit Rasa Takut Pindah Karier & Tes 30 Hari",
    "heroLead": "Pisahkan rasa takut rugi waktu dan rancang eksperimen karier minim risiko 30 hari.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kariyer Değişimi Korkusu ve 30 Günlük Deney Planı | DopaBrain",
    "heroTitle": "Kariyer Değişimi Korkusu ve 30 Günlük Deney Planı",
    "heroLead": "Batık maliyet korkusunu ayırın ve risksiz 30 günlük kariyer prototipi kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "sunk_cost_trap",
    "en": "Sunk-Cost Identity — Thinking \"I spent 6 years on this degree/title so I can’t pivot\"",
    "ko": "매몰비용 함정 — \"지금까지 쌓은 경력이 아까워서 못 바꾼다\"는 압박"
  },
  {
    "id": "all_or_nothing_leap",
    "en": "Cliff-Jump Illusion — Believing a pivot requires quitting blindly overnight",
    "ko": "벼랑 끝 착각 — 전환은 반드시 모든 걸 접고 뛰어내려야 한다고 생각함"
  },
  {
    "id": "status_loss_dread",
    "en": "Title & Status Fear — Worrying what peers or family will think of a lateral move",
    "ko": "시선·직함 불안 — 수평 이동이나 새 출발에 대한 주변의 평가가 두려움"
  },
  {
    "id": "financial_fog",
    "en": "Unmapped Runway — Feeling financial panic without knowing my exact 6-month buffer",
    "ko": "재무 안개 — 정확한 생활비·비상금 숫자를 보지 않아 막연한 공포만 커짐"
  },
  {
    "id": "zero_real_data",
    "en": "Pure Imagination Loop — Researching job titles alone without talking to 2 real practitioners",
    "ko": "머릿속 시뮬레이션 — 현직자 대화 없이 혼자 인터넷 후기만 보며 고민함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Pivot Paralysis — Replace \"Quit Everything\" With Two 15-Min Coffee Chats",
    "koT": "전환 마비 높음 — 거창한 퇴사 고민을 멈추고 15분 커피챗 2건으로 현실 데이터를 얻으세요",
    "enD": "Stanford Life Design research (Burnett & Evans) shows career clarity comes from tiny real-world prototypes, not endless armchair agonizing. Two 15-minute conversations give 10x more insight than 50 hours of anxious searching.",
    "koD": "스탠퍼드 라이프 디자인 연구에 따르면 커리어 확신은 머릿속 고민이 아니라 작은 현실 실험에서 나옵니다. 15분 현직자 대화 2건이 혼자 50시간 고민하는 것보다 10배 정확합니다.",
    "enS": "\"Hi [Name], I admire your path into [role]. I’m exploring how my background in [skill] translates—would you have 15 minutes next week for 2 quick questions?\"",
    "koS": "\"안녕하세요 [이름]님, [직무]로 확장하신 여정이 인상 깊어 연락드립니다. 제 [강점] 경험을 연결해 보고 싶은데 다음 주 15분만 여쭤봐도 될까요?\"",
    "enL": [
      "Calculate your exact monthly bare-bones runway once so vague money dread turns into a clear number.",
      "List 3 transferable skills you already own—pivots reuse 70% of prior craft, not 0%.",
      "Run one tiny 30-day evening/weekend sample project or 2 informational chats before making any big move."
    ],
    "koL": [
      "최소 월 생활비와 비상금 개월 수를 한 번만 정확히 적어 막연한 공포를 숫자로 바꾸세요.",
      "이미 보유한 전이 가능 역량 3가지를 적으세요. 전환은 0에서 시작이 아니라 70% 재활용입니다.",
      "큰 결정 전에 30일간 미니 포트폴리오 1개 또는 현직자 2명 대화를 먼저 실행하세요."
    ]
  },
  "mid": {
    "enT": "Exploring Actively — Build One Proof-of-Work Artifact in 30 Days",
    "koT": "탐색 궤도 진입 — 30일 안에 보여줄 수 있는 작은 실물 사례 1개를 만드세요",
    "enD": "You have good awareness of your options; turning curiosity into one small visible artifact builds confidence fast.",
    "koD": "방향성이 꽤 잡혔습니다. 관심 분야의 작은 실물 결과물 1개가 이력서 10줄보다 강력한 자신감이 됩니다.",
    "enS": "\"Test small, gather real feedback, keep my financial floor calm.\"",
    "koS": "\"작게 실험하고, 현실 피드백을 얻으며, 재무 바닥을 단단히 지킨다.\"",
    "enL": [
      "Build 1 small public or private case study demonstrating your target skill.",
      "Refresh your resume around outcomes rather than old job titles.",
      "Review energy levels weekly to confirm the new direction truly excites you."
    ],
    "koL": [
      "목표 직무의 문제를 해결해 본 미니 케이스 스터디 1개를 만들어 보세요.",
      "옛 직함 대신 해결한 문제와 성과 중심으로 프로필을 재정렬하세요.",
      "매주 에너지 기록을 보며 새 방향이 진짜 나를 살리는지 확인하세요."
    ]
  },
  "high": {
    "enT": "Grounded Transition Clarity — Ready for Intentional Next Steps",
    "koT": "명료한 커리어 준비 완료 — 차분하고 주도적인 실행 단계입니다",
    "enD": "Your finances, curiosity, and real-world data are well balanced. Execute your transition steps steadily.",
    "koD": "현실 데이터·재무 안전망·방향성이 잘 맞물려 있습니다. 계획대로 차분히 실행해 나가세요.",
    "enS": "\"Every career chapter builds compound skills—I’m pivoting from strength.\"",
    "koS": "\"지금까지의 경력은 버려지는 게 아니라 새 챕터의 복리 자산이 된다.\"",
    "enL": [
      "Keep nurturing warm peer relationships across industries.",
      "Pace interviews to protect energy and discernment.",
      "Negotiate role scope as thoughtfully as salary."
    ],
    "koL": [
      "인접 업계 동료들과의 따뜻한 네트워크를 계속 가꾸세요.",
      "체력과 분별력을 지키며 면접·탐색 속도를 조절하세요.",
      "연봉만큼이나 역할 범위와 성장 환경을 꼼꼼히 조율하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_career_pivot_audit_v1";
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
      window.gtag('event', "career_pivot_audit_complete", {
        tool_slug: "career-pivot-fear-audit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/career-pivot-fear-audit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "career-pivot-fear-audit",
        filename: 'dopabrain-career-pivot-fear-audit-card.png',
        badge: "CAREER CLARITY • PIVOT & LAYOFF FEAR AUDIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
        accent2: "#0ea5e9"
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
