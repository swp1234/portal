/* Micromanager Stress & Proactive Status Buffer Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Micromanager Stress & Proactive Status Buffer Planner | DopaBrain",
    "metaDesc": "Constant Slack check-ins and hover-management draining your focus? Audit 5 autonomy leaks locally and generate a calm pre-emptive status rhythm that earns breathing room.",
    "kicker": "WORKPLACE CALM • MICROMANAGER AUTONOMY BUFFER PLANNER",
    "heroTitle": "Micromanager Stress & Proactive Status Buffer Planner",
    "heroLead": "Constant Slack check-ins and hover-management draining your focus? Audit 5 autonomy leaks locally and generate a calm pre-emptive status rhythm that earns breathing room.",
    "chip1": "5 Hover Triggers",
    "chip2": "Pre-Emptive 3-Line Update",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR MICROMANAGEMENT FRICTION POINTS (1 = CALM, 5 = SUFFOCATING)",
    "step1Title": "What drains your work autonomy most right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One project I want clean autonomy on this week (100% local):",
    "ctaBtn": "Build My Autonomy Buffer & Status Script",
    "resultBadge": "STEP 2 • YOUR CALM AUTONOMY BUFFER PROTOCOL",
    "noteTitle": "Protected Focus Deliverable",
    "meterLabel": "Work Autonomy Calm",
    "scriptTitle": "Pre-Emptive 3-Line Status Script (Beats Ping-Anxiety)",
    "stepsTitle": "3 Moves That Shift Hovering Into Earned Trust",
    "stickyTitle": "Is low workplace autonomy quietly accelerating burnout?",
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
    "title": "마이크로매니징 스트레스 완충 & 선제 보고 3줄 플래너 | DopaBrain",
    "metaDesc": "사사건건 확인하는 상사의 잦은 체크인 때문에 집중력이 끊기나요? 5가지 자율성 누수 원인을 점검하고 숨통을 틔워 주는 선제 3줄 공유 리듬을 설계하세요.",
    "kicker": "직장 자율성 · 마이크로매니징 완충 & 선제 공유 3줄 플래너",
    "heroTitle": "마이크로매니징 스트레스 완충 & 선제 보고 3줄 플래너",
    "heroLead": "사사건건 확인하는 상사의 잦은 체크인 때문에 집중력이 끊기나요? 5가지 자율성 누수 원인을 점검하고 숨통을 틔워 주는 선제 3줄 공유 리듬을 설계하세요.",
    "chip1": "5가지 간섭 트리거",
    "chip2": "선제 3줄 공유",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 마이크로매니징 마찰 신호 점검 (1 = 여유, 5 = 숨막힘)",
    "step1Title": "현재 업무 자율성과 집중력을 가장 크게 흔드는 상황은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주 불필요한 간섭 없이 깔끔히 진행하고 싶은 업무 1건 (100% 로컬):",
    "ctaBtn": "내 자율성 완충 & 선제 공유 스크립트 보기",
    "resultBadge": "2단계 • 숨통을 틔우는 선제 공유 프로토콜",
    "noteTitle": "자율성을 지킬 핵심 업무",
    "meterLabel": "업무 자율성 지수",
    "scriptTitle": "상사의 잦은 확인을 미리 잠재우는 선제 3줄 공유 문구",
    "stepsTitle": "과도한 간섭을 신뢰와 자율로 전환하는 3단계",
    "stickyTitle": "낮은 업무 자율성이 번아웃을 앞당기고 있는지 확인해 볼까요?",
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
    "title": "微管理压力缓冲与主动三行同步规划器 | DopaBrain",
    "heroTitle": "微管理压力缓冲与主动三行同步规划器",
    "heroLead": "用可预期的三行主动汇报与明确验收标准，减少高频催问并赢回专注空间。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "マイクロマネジメント緩和＆先回り3行共有プランナー | DopaBrain",
    "heroTitle": "マイクロマネジメント緩和＆先回り3行共有プランナー",
    "heroLead": "細かすぎる進捗確認を先回り3行報告と完了基準合意で静かに整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de Calma y Autonomía ante Micromanagement | DopaBrain",
    "heroTitle": "Planificador de Calma y Autonomía ante Micromanagement",
    "heroLead": "Reduce interrupciones constantes con reportes breves proactivos de 3 líneas 100 % local.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Autonomia contra Microgerenciamento | DopaBrain",
    "heroTitle": "Planejador de Autonomia contra Microgerenciamento",
    "heroLead": "Diminua cobranças constantes usando atualizações proativas de 3 linhas no navegador.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Mikromanagement-Puffer & Autonomie-Planer | DopaBrain",
    "heroTitle": "Mikromanagement-Puffer & Autonomie-Planer",
    "heroLead": "Beruhige ständige Nachfragen mit einem kurzen 3-Zeilen-Update-Rhythmus lokal.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur d’Autonomie Face au Micromanagement | DopaBrain",
    "heroTitle": "Planificateur d’Autonomie Face au Micromanagement",
    "heroLead": "Réduisez les relances incessantes grâce à un point proactif en 3 lignes localement.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План буфера автономии при микроменеджменте | DopaBrain",
    "heroTitle": "План буфера автономии при микроменеджменте",
    "heroLead": "Снизьте частые проверки с помощью короткого упреждающего отчёта из 3 строк.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "माइक्रोमैनेजर तनाव और कार्य स्वायत्तता बफर प्लानर | DopaBrain",
    "heroTitle": "माइक्रोमैनेजर तनाव और कार्य स्वायत्तता बफर प्लानर",
    "heroLead": "3-लाइन प्रोएक्टिव स्टेटस अपडेट से बार-बार के हस्तक्षेप को शांत करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Buffer Stres Micromanager & Otonomi Kerja | DopaBrain",
    "heroTitle": "Perencana Buffer Stres Micromanager & Otonomi Kerja",
    "heroLead": "Redakan gangguan cek berkala dengan laporan proaktif 3 baris dan kriteria selesai jelas.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Mikro Yönetim Stresi ve Özerklik Tampon Planlayıcı | DopaBrain",
    "heroTitle": "Mikro Yönetim Stresi ve Özerklik Tampon Planlayıcı",
    "heroLead": "Proaktif 3 satırlık durum güncellemesiyle sürekli kontrol baskısını azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "unscheduled_pings",
    "en": "Unpredictable \"Any update?\" Pings — Interrupted mid-deep-work every hour",
    "ko": "예고 없는 수시 확인 — 깊은 집중 도중 매시간 진행 상황을 물어봄"
  },
  {
    "id": "style_over_outcome",
    "en": "Format Nitpicking — Minor font/phrasing edits overshadowing real progress",
    "ko": "디테일 과다 간섭 — 본질보다 사소한 표현·서식 수정에 에너지가 소모됨"
  },
  {
    "id": "unclear_done_bar",
    "en": "Moving Goalposts — Ambiguous expectations causing endless rework loops",
    "ko": "모호한 완료 기준 — 기대치가 불분명해 반복 수정이 발생함"
  },
  {
    "id": "silent_resentment",
    "en": "Defensive Withdrawal — Sharing fewer updates out of annoyance, which triggers more hovering",
    "ko": "방어적 침묵 — 귀찮아서 공유를 줄였다가 오히려 확인이 더 잦아짐"
  },
  {
    "id": "after_hours_carry",
    "en": "Evening Replaying — Rehearsing frustrated comebacks long after logging off",
    "ko": "퇴근 후 잔상 — 퇴근 뒤에도 억울한 장면을 머릿속으로 계속 되감음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Autonomy Friction — Beat the Ping With a Scheduled 3-Line Update & Written Done-Criteria",
    "koT": "간섭 피로 높음 — 상사가 묻기 전 정해진 시간에 3줄 선제 공유와 완료 기준 합의를 고정하세요",
    "enD": "Organizational psychology shows most micromanagement stems from the manager’s own visibility anxiety. Sending a predictable 3-line bullet update before they ask reduces surprise pings fast while documenting clear scope.",
    "koD": "조직심리 연구에 따르면 마이크로매니징의 상당수는 상사의 불확실성 불안에서 비롯됩니다. 묻기 전에 정해진 시간에 3줄 요약과 완료 기준을 먼저 보내면 불시 호출이 눈에 띄게 줄어듭니다.",
    "enS": "\"Quick update on [Project]: 1) Completed X today · 2) Next milestone Y by Thu 2 PM · 3) No blockers—I’ll send the next check-in Thu at 2 PM unless you need anything sooner!\"",
    "koS": "\"[업무] 짧은 공유드립니다: 1) 오늘 완료: X · 2) 다음 단계: 목요일 오후 2시까지 Y 초안 · 3) 특이 이슈 없음. 별도 요청 없으시면 목요일 2시에 다시 공유드리겠습니다!\"",
    "enL": [
      "Send a 3-bullet update 30 minutes BEFORE your manager usually checks in.",
      "Ask once upfront: \"What does an A+ v1 look like so I nail it on the first pass?\"",
      "Keep written scope agreements in Slack/email and detach emotionally after 6 PM."
    ],
    "koL": [
      "상사가 보통 확인하는 시간보다 30분 먼저 3줄 진행 요약을 선제 공유하세요.",
      "착수 전 딱 한 번 \"첫 초안에서 가장 중점적으로 보실 포인트 2가지는 무엇일까요?\"를 확인하세요.",
      "합의된 기준은 텍스트로 남기고 퇴근 후에는 감정적 되새김을 끊어 내세요."
    ]
  },
  "mid": {
    "enT": "Manageable Friction — Lock Predictable Check-In Cadence & Focus Blocks",
    "koT": "조절 가능한 마찰 — 예측 가능한 보고 주기와 집중 블록만 고정하세요",
    "enD": "A fixed daily/twice-weekly check-in rhythm protects your deep work cleanly.",
    "koD": "기본 호흡이 나쁘지 않습니다. 고정 공유 시간만 잡으면 집중 시간을 안정적으로 확보할 수 있습니다.",
    "enS": "\"Predictable visibility buys uninterrupted deep work.\"",
    "koS": "\"예측 가능한 짧은 공유가 방해받지 않는 집중 시간을 사 온다.\"",
    "enL": [
      "Batch status updates at 11:30 AM or 4:30 PM.",
      "Confirm success criteria before starting new tasks.",
      "Protect 90-min focus blocks on your shared calendar."
    ],
    "koL": [
      "진행 공유는 오전 11시 반 또는 오후 4시 반으로 묶어 보내세요.",
      "새 업무 시작 전 완료 기준을 2줄로 먼저 확인하세요.",
      "공유 캘린더에 90분 집중 블록을 명시해 두세요."
    ]
  },
  "high": {
    "enT": "Healthy Autonomy — Clear Trust & Clean Communication Rhythm",
    "koT": "건강한 자율성 — 신뢰와 명확한 소통 리듬이 자리 잡았습니다",
    "enD": "You have strong alignment without hovering overhead.",
    "koD": "불필요한 간섭 없이 투명하고 안정적인 협업 구조를 유지하고 있습니다.",
    "enS": "\"Clear expectations keep collaboration light and high-trust.\"",
    "koS": "\"명확한 기대치가 가볍고 신뢰 높은 협업을 만든다.\"",
    "enL": [
      "Maintain crisp milestone updates.",
      "Keep documenting key decisions briefly.",
      "Protect end-of-day shutdown boundaries."
    ],
    "koL": [
      "간결한 마일스톤 공유 습관을 유지하세요.",
      "핵심 결정 사항은 짧게 기록해 두세요.",
      "퇴근 경계 리듬을 계속 지켜 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_micromanager_buffer_v1";
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
      window.gtag('event', "micromanager_buffer_complete", {
        tool_slug: "workplace-micromanager-calm-buffer",
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
      var shareUrl = "https://dopabrain.com/portal/tools/workplace-micromanager-calm-buffer.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "workplace-micromanager-calm-buffer",
        filename: 'dopabrain-workplace-micromanager-calm-buffer-card.png',
        badge: "WORKPLACE CALM • MICROMANAGER AUTONOMY BUFFER PLANNER",
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
