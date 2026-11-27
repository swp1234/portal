/* Layoff & Job-Security Anxiety Safety-Net Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Layoff & Job-Security Anxiety Safety-Net Planner | DopaBrain",
    "metaDesc": "Rumor mills and tech/corporate headlines keeping your stomach in knots? Turn helpless layoff dread into a concrete 7-day career safety net (metrics backup, runway math, warm contacts) locally.",
    "kicker": "CAREER RESILIENCE • LAYOFF & JOB-SECURITY ANXIETY PLAN",
    "heroTitle": "Layoff & Job-Security Anxiety Safety-Net Planner",
    "heroLead": "Rumor mills and tech/corporate headlines keeping your stomach in knots? Turn helpless layoff dread into a concrete 7-day career safety net (metrics backup, runway math, warm contacts) locally.",
    "chip1": "5 Dread Loops",
    "chip2": "7-Day Safety Net",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR JOB-SECURITY STRESS SIGNALS (1 = GROUNDED, 5 = SPIRALING)",
    "step1Title": "What amplifies your job-uncertainty stress right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One concrete backup action I can finish in 30 minutes this week (100% local):",
    "ctaBtn": "Build My 7-Day Career Safety-Net Plan",
    "resultBadge": "STEP 2 • YOUR CALM 7-DAY CAREER SAFETY-NET PROTOCOL",
    "noteTitle": "My 30-Min Action Anchor",
    "meterLabel": "Career Readiness Calm",
    "scriptTitle": "Low-Key Warm Network Check-In Line",
    "stepsTitle": "3 Control-Restoring Moves That Shrink Layoff Dread",
    "stickyTitle": "Is constant job vigilance pushing you toward chronic burnout?",
    "stickySub": "Take the free 2-Min Burnout Check",
    "stickyBtn": "Burnout Test →",
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
    "title": "구조조정·고용 불안 현실 안전망 & 7일 행동 플래너 | DopaBrain",
    "metaDesc": "사내 소문과 구조조정 뉴스 때문에 매일 밤 불안하신가요? 막연한 고용 공포를 7일 커리어 안전망(성과 아카이브·생활비 계산·따뜻한 연락 3명)으로 전환하세요.",
    "kicker": "커리어 회복탄력성 · 구조조정·고용 불안 현실 안전망 플래너",
    "heroTitle": "구조조정·고용 불안 현실 안전망 & 7일 행동 플래너",
    "heroLead": "사내 소문과 구조조정 뉴스 때문에 매일 밤 불안하신가요? 막연한 고용 공포를 7일 커리어 안전망(성과 아카이브·생활비 계산·따뜻한 연락 3명)으로 전환하세요.",
    "chip1": "5가지 고용 불안",
    "chip2": "7일 안전망 플랜",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 고용 불안·구조조정 스트레스 신호 점검 (1 = 차분, 5 = 극도 불안)",
    "step1Title": "현재 고용 불확실성 스트레스를 가장 크게 키우는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주 30분 안에 끝낼 수 있는 커리어 안전망 행동 1가지 (100% 로컬):",
    "ctaBtn": "내 7일 커리어 안전망 플랜 보기",
    "resultBadge": "2단계 • 차분한 7일 커리어 안전망 프로토콜",
    "noteTitle": "이번 주 30분 안전망 첫 행동",
    "meterLabel": "커리어 안전망 준비도",
    "scriptTitle": "부담 없이 안부를 나누는 따뜻한 네트워크 1줄",
    "stepsTitle": "막연한 고용 불안을 통제감으로 바꾸는 3단계",
    "stickyTitle": "지속적인 고용 경계심이 만성 번아웃으로 번지고 있는지 점검해 볼까요?",
    "stickySub": "무료 2분 번아웃 테스트 바로가기",
    "stickyBtn": "번아웃 테스트 →",
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
    "title": "裁员与职业安全感焦虑7日安全网规划器 | DopaBrain",
    "heroTitle": "裁员与职业安全感焦虑7日安全网规划器",
    "heroLead": "把裁员传闻恐慌转化为成果备份、现金流测算与人脉联系的7天冷静行动。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "リストラ・雇用不安の現実セーフティネット計画 | DopaBrain",
    "heroTitle": "リストラ・雇用不安の現実セーフティネット計画",
    "heroLead": "漠然とした将来不安を7日間の実績整理・生活防衛計算・緩やかな連絡へ転換します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de Calma y Red de Seguridad ante Despidos | DopaBrain",
    "heroTitle": "Planificador de Calma y Red de Seguridad ante Despidos",
    "heroLead": "Convierte la incertidumbre laboral en un plan práctico de 7 días 100 % local.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Calma e Rede de Segurança contra Demissões | DopaBrain",
    "heroTitle": "Planejador de Calma e Rede de Segurança contra Demissões",
    "heroLead": "Transforme medo de demissão em um plano prático de 7 dias no navegador.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Jobunsicherheit- & Sicherheitsnetz-Planer (7 Tage) | DopaBrain",
    "heroTitle": "Jobunsicherheit- & Sicherheitsnetz-Planer (7 Tage)",
    "heroLead": "Wandle Kündigungsangst in ein konkretes 7-Tage-Sicherheitsnetz lokal im Browser.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Sécurité Emploi & Filet de Sécurité 7 Jours | DopaBrain",
    "heroTitle": "Planificateur Sécurité Emploi & Filet de Sécurité 7 Jours",
    "heroLead": "Transformez l’angoisse de restructuration en plan d’action calme sur 7 jours.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План спокойствия и подушки безопасности при тревоге увольнения | DopaBrain",
    "heroTitle": "План спокойствия и подушки безопасности при тревоге увольнения",
    "heroLead": "Превратите страх сокращения в спокойный 7-дневный план карьерной опоры.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "लेऑफ और जॉब-सिक्योरिटी चिंता 7-दिवसीय सुरक्षा योजना | DopaBrain",
    "heroTitle": "लेऑफ और जॉब-सिक्योरिटी चिंता 7-दिवसीय सुरक्षा योजना",
    "heroLead": "नौकरी की अनिश्चितता को 7-दिन के ठोस करियर बैकअप प्लान में बदलें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Jaring Pengaman Cemas PHK (7 Hari) | DopaBrain",
    "heroTitle": "Perencana Jaring Pengaman Cemas PHK (7 Hari)",
    "heroLead": "Ubah kecemasan pekerjaan menjadi rencana cadangan karier 7 hari yang tenang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "İş Güvencesi Kaygısı ve 7 Günlük Güvenlik Ağı Planı | DopaBrain",
    "heroTitle": "İş Güvencesi Kaygısı ve 7 Günlük Güvenlik Ağı Planı",
    "heroLead": "İşten çıkarma endişesini somut 7 günlük kariyer hazırlığına dönüştürün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "rumor_doomscroll",
    "en": "Layoff Forum Doomscrolling — Refreshing anonymous boards and news late at night",
    "ko": "익명 게시판·뉴스 과다 확인 — 밤늦게까지 구조조정 소문을 찾아보며 공포를 키움"
  },
  {
    "id": "unbacked_wins",
    "en": "Unrecorded Impact — Having zero personal copy of my measurable achievements & portfolio",
    "ko": "성과 기록 부재 — 개인 노트에 정리해 둔 내 핵심 성과·수치가 전혀 없음"
  },
  {
    "id": "unknown_runway",
    "en": "Vague Cash Runway — Guessing finances instead of knowing exact bare-bones months",
    "ko": "비상금 숫자 미파악 — 실제 몇 달 버틸 수 있는지 계산 없이 막연히 두려워함"
  },
  {
    "id": "overwork_shield",
    "en": "Panic Overworking — Working 12-hour days hoping exhaustion buys immunity",
    "ko": "공포 과로 — 야근으로 버티면 안전할 거라 믿고 체력을 소진함"
  },
  {
    "id": "isolated_network",
    "en": "Dormant Network — Feeling awkward reaching out to past peers only during emergencies",
    "ko": "네트워크 단절 — 평소 연락이 끊겨 비상시에 도움을 청하기 막막함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Layoff Dread — Mute Rumor Boards & Execute a 3-Step Personal Safety Net This Week",
    "koT": "고용 불안 높음 — 소문 게시판 알림을 끄고 이번 주 3단계 안전망부터 구축하세요",
    "enD": "Occupational stress research shows uncertainty triggers stronger cortisol than known bad news because the brain lacks a concrete contingency plan. Building a quiet personal \"Plan B\" restores agency immediately—even if you never need it.",
    "koD": "직업 스트레스 연구에 따르면 불확실성 자체가 실제 나쁜 소식보다 더 강한 불안을 만듭니다. 실제로 쓰지 않더라도 나만의 \"플랜 B\"를 한 번 정리해 두면 뇌의 경보음이 즉시 낮아집니다.",
    "enS": "\"Hey [Name], saw your recent update and thought of our old project—would love to catch up for a quick 15-min coffee or call next month!\"",
    "koS": "\"안녕하세요 [이름]님, 문득 예전 함께했던 프로젝트가 떠올라 연락드렸습니다! 다음 달쯤 15분 가볍게 근황 나눌 수 있을까요?\"",
    "enL": [
      "Save a clean personal log of your 5 biggest measurable wins (no confidential company IP—just public outcomes & skills).",
      "Calculate your bare-bones monthly survival budget + emergency runway once on paper.",
      "Send 2 genuinely warm, zero-ask check-in notes to former teammates this week."
    ],
    "koL": [
      "사내 기밀 제외, 내가 만든 핵심 성과 지표 5가지를 개인 노트에 깔끔히 정리해 두세요.",
      "최소 월 생활비와 비상금 유지 개월 수를 종이에 한 번만 정확히 적어 불안을 숫자로 바꾸세요.",
      "이번 주 예전 동료 2명에게 부탁 없이 따뜻한 안부 메시지를 먼저 보내 보세요."
    ]
  },
  "mid": {
    "enT": "Cautious Awareness — Refresh Resume Bullets & Cap News Checks to Once Daily",
    "koT": "건전한 경계 상태 — 이력서 3줄 업데이트와 뉴스 1일 1회 제한만 추가하세요",
    "enD": "You have solid grounding; keeping your achievements fresh once a quarter removes sudden scrambling.",
    "koD": "균형이 잘 잡혀 있습니다. 분기마다 성과 3줄만 업데이트해 두면 어떤 변화에도 흔들리지 않습니다.",
    "enS": "\"Prepare quietly on calm days so headlines never hijack my peace.\"",
    "koS": "\"평온한 날 조용히 준비해 두면 어떤 뉴스에도 마음이 흔들리지 않는다.\"",
    "enL": [
      "Update LinkedIn/resume bullets with 2 fresh metrics.",
      "Stop refreshing anonymous layoff forums after 8 PM.",
      "Protect sleep and focus—overworking never replaces clear visibility."
    ],
    "koL": [
      "프로필·이력서에 최근 6개월 성과 지표 2줄을 반영해 두세요.",
      "밤 8시 이후에는 익명 직장 게시판 확인을 멈추세요.",
      "무작정 야근하기보다 핵심 성과 가시성과 체력을 지키세요."
    ]
  },
  "high": {
    "enT": "Resilient & Ready — Strong Contingency Clarity",
    "koT": "탄탄한 회복탄력성 — 든든한 커리어 안전망이 준비되어 있습니다",
    "enD": "Your finances, portfolio, and relationships give you genuine career optionality.",
    "koD": "성과 기록·재무 감각·네트워크가 모두 탄탄해 높은 주도권을 지키고 있습니다.",
    "enS": "\"My skills and relationships belong to me—not to any single org chart.\"",
    "koS": "\"내 실력과 신뢰 관계는 특정 조직도가 아니라 온전히 나의 자산이다.\"",
    "enL": [
      "Keep quarterly wins notes fresh.",
      "Continue nurturing warm industry friendships.",
      "Invest energy into high-leverage craft."
    ],
    "koL": [
      "분기별 성과 기록 습관을 계속 유지하세요.",
      "업계 동료들과의 따뜻한 교류를 이어 가세요.",
      "어디서나 통하는 핵심 역량에 에너지를 집중하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_layoff_anxiety_plan_v1";
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
      window.gtag('event', "layoff_anxiety_plan_complete", {
        tool_slug: "layoff-job-security-anxiety-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/layoff-job-security-anxiety-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "layoff-job-security-anxiety-plan",
        filename: 'dopabrain-layoff-job-security-anxiety-plan-card.png',
        badge: "CAREER RESILIENCE • LAYOFF & JOB-SECURITY ANXIETY PLAN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
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
