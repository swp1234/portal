/* Working Memory & Focus Span Trainer
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Working Memory & Focus Span Trainer | DopaBrain",
    "metaDesc": "Losing your train of thought mid-sentence or rereading the same paragraph three times? Audit 5 working-memory drains locally and build a distraction-proof 15-minute focus sprint.",
    "kicker": "COGNITIVE BANDWIDTH • 2-MIN CALIBRATION",
    "heroTitle": "Working Memory & Focus Span Trainer",
    "heroLead": "Losing your train of thought mid-sentence or rereading the same paragraph three times? Audit 5 working-memory drains locally and build a distraction-proof 15-minute focus sprint.",
    "chip1": "5 Memory Drains",
    "chip2": "15-Min Focus Sprint",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • RATE CURRENT MEMORY LOAD (1 = SHARP, 5 = OVERLOADED)",
    "step1Title": "What is saturating your working memory right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONE single task I will finish in my next 15-min focus block (100% local):",
    "ctaBtn": "Build My Focus Span Protocol",
    "resultBadge": "STEP 2 • YOUR WORKING MEMORY & FOCUS PLAN",
    "noteTitle": "My Next 15-Minute Single-Thread Target",
    "meterLabel": "Working Memory Headroom",
    "scriptTitle": "Focus Anchor Statement",
    "stepsTitle": "3 Immediate Moves to Free Up Mental RAM",
    "stickyTitle": "Curious how your cognitive strengths naturally operate?",
    "stickySub": "Take the free 2-min Brain Type Profile next",
    "stickyBtn": "Brain Type →",
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
    "title": "작업 기억력·집중 스팬 트레이너 | DopaBrain",
    "metaDesc": "문장을 읽다 자꾸 놓치거나 방금 하려던 일을 잊어버리나요? 5가지 작업 기억력 누수 요인을 비공개로 점검하고 방해 없는 15분 집중 루틴을 설계하세요.",
    "kicker": "작업 기억력 · 2분 집중 스팬 점검",
    "heroTitle": "작업 기억력·집중 스팬 트레이너",
    "heroLead": "문장을 읽다 자꾸 놓치거나 방금 하려던 일을 잊어버리나요? 5가지 작업 기억력 누수 요인을 비공개로 점검하고 방해 없는 15분 집중 루틴을 설계하세요.",
    "chip1": "5가지 기억 누수",
    "chip2": "15분 집중 스프린트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 작업 기억 부하 점검 (1 = 또렷함, 5 = 과부하)",
    "step1Title": "지금 머릿속 작업 기억 용량을 가장 많이 차지하는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 다음 15분 집중 블록에서 딱 1가지만 끝낼 핵심 작업 (100% 로컬):",
    "ctaBtn": "내 집중 스팬 프로토콜 만들기",
    "resultBadge": "2단계 • 맞춤 작업 기억력 회복 플랜",
    "noteTitle": "다음 15분 단일 집중 목표",
    "meterLabel": "작업 기억 여유 공간",
    "scriptTitle": "집중력을 지키는 앵커 문장",
    "stepsTitle": "머릿속 RAM을 비우는 3가지 즉시 행동",
    "stickyTitle": "나의 두뇌 유형과 인지 강점이 궁금하신가요?",
    "stickySub": "무료 2분 브레인 타입 테스트로 인지 스타일 확인",
    "stickyBtn": "브레인 타입 →",
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
    "title": "工作记忆与专注跨度训练器 | DopaBrain",
    "heroTitle": "工作记忆与专注跨度训练器",
    "heroLead": "排查5大工作记忆消耗源，生成防打扰的15分钟深度专注冲刺方案。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "ワーキングメモリ＆集中スパン設計 | DopaBrain",
    "heroTitle": "ワーキングメモリ＆集中スパン設計",
    "heroLead": "作業記憶を圧迫する5要因を整理し、15分の深い集中ブロックを作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Entrenador de Memoria de Trabajo y Foco | DopaBrain",
    "heroTitle": "Entrenador de Memoria de Trabajo y Foco",
    "heroLead": "Audita 5 fugas de memoria operativa y diseña un bloque de foco limpio de 15 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Treinador de Memória de Trabalho e Foco | DopaBrain",
    "heroTitle": "Treinador de Memória de Trabalho e Foco",
    "heroLead": "Mapeie 5 drenos da memória operacional e monte um sprint de foco de 15 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Arbeitsgedächtnis- & Fokus-Trainer | DopaBrain",
    "heroTitle": "Arbeitsgedächtnis- & Fokus-Trainer",
    "heroLead": "Prüfe 5 Belastungsfaktoren fürs Arbeitsgedächtnis und starte einen klaren 15-Min-Fokusblock.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Entraîneur Mémoire de Travail & Focus | DopaBrain",
    "heroTitle": "Entraîneur Mémoire de Travail & Focus",
    "heroLead": "Repérez 5 fuites de mémoire de travail et lancez un sprint focus de 15 min sans distraction.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Тренажёр рабочей памяти и фокуса | DopaBrain",
    "heroTitle": "Тренажёр рабочей памяти и фокуса",
    "heroLead": "Проверьте 5 утечек внимания и соберите чистый 15-минутный фокус-спринт без помех.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "वर्किंग मेमोरी व फोकस स्पैन ट्रेनर | DopaBrain",
    "heroTitle": "वर्किंग मेमोरी व फोकस स्पैन ट्रेनर",
    "heroLead": "5 वर्किंग मेमोरी बाधाओं की जांच करें और 15-मिनट का साफ फोकस स्प्रिंट बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pelatih Memori Kerja & Rentang Fokus | DopaBrain",
    "heroTitle": "Pelatih Memori Kerja & Rentang Fokus",
    "heroLead": "Audit 5 penguras memori kerja dan buat blok fokus 15 menit bebas gangguan secara privat.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Çalışma Belleği ve Odak Süresi Planlayıcı | DopaBrain",
    "heroTitle": "Çalışma Belleği ve Odak Süresi Planlayıcı",
    "heroLead": "5 bellek yükünü analiz edin ve dikkat dağıtıcısız 15 dakikalık odak bloğu kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "tab_overload",
    "en": "Open-Tab Overload — Switching across 5+ apps, messages, or unfinished tasks at once",
    "ko": "열린 탭 과부하 — 5개 이상 앱·창·미완성 할 일을 동시에 오감"
  },
  {
    "id": "notification_chime",
    "en": "Alert Fragmentation — Checking pings every few minutes and losing deep thread",
    "ko": "알림 파편화 — 몇 분마다 알림을 확인해 몰입 흐름이 계속 끊김"
  },
  {
    "id": "mental_to_do",
    "en": "Unwritten Mental Sticky Notes — Trying to remember errands inside your head",
    "ko": "머릿속 메모 과잉 — 적지 않고 기억에만 의존해 계속 신경이 쓰임"
  },
  {
    "id": "visual_clutter",
    "en": "Environmental Noise — Background chatter, clutter, or autoplay tabs pulling attention",
    "ko": "주변 자극 소음 — 배경 소음·어지러운 책상·자동재생 화면이 시선을 뺏음"
  },
  {
    "id": "fatigue_fog",
    "en": "Sustained-Screen Fatigue — Pushing past 90 minutes without hydration or eye break",
    "ko": "연속 화면 피로 — 90분 넘게 휴식·수분 섭취 없이 화면만 계속 응시"
  }
];
  var TIERS = {
  "low": {
    "enT": "Saturated Working Memory — Externalize Open Loops Before Starting",
    "koT": "작업 기억 포화 상태 — 시작 전 머릿속 열린 루프부터 비우세요",
    "enD": "Human working memory holds roughly 4 chunks at once. Trying to focus while juggling unwritten tasks and live pings drains executive bandwidth rapidly.",
    "koD": "인간의 작업 기억은 한 번에 약 4개 덩어리만 유지할 수 있습니다. 적지 않은 할 일과 알림을 안고 집중하려 하면 뇌 에너지가 빠르게 고갈됩니다.",
    "enS": "\"My brain is for thinking, not storage. I will park every stray thought on paper and protect one clean 15-minute single-task block.\"",
    "koS": "\"내 머리는 저장 장치가 아니라 생각하는 공간이야. 잡념은 종이에 옮겨 두고 딱 15분만 하나의 일에 집중할게.\"",
    "enL": [
      "Write every nagging open loop onto a single scratchpad so your brain stops rehearsing it.",
      "Close all unrelated tabs and place your phone face-down out of arm’s reach for 15 minutes.",
      "Drink a glass of water, blink/look 6 meters away for 20 seconds, then start only your single chosen task."
    ],
    "koL": [
      "머릿속에 맴도는 할 일을 메모지에 모두 적어 뇌의 리허설을 멈추세요.",
      "관련 없는 탭을 모두 닫고 스마트폰을 손이 닿지 않는 곳에 15분간 두세요.",
      "물 한 잔을 마시고 20초간 먼 곳을 본 뒤 정해둔 딱 1가지 작업만 시작하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Cognitive Load — Trim One Friction Source for Smooth Flow",
    "koT": "중간 수준 인지 부하 — 마찰 요인 1개만 줄여도 집중이 살아납니다",
    "enD": "You have solid mental capacity available, but minor background switching is adding unnecessary residue between steps.",
    "koD": "충분한 집중 여력이 남아 있지만, 사소한 창 전환과 잔여 주의 분산이 몰입 효율을 깎고 있습니다.",
    "enS": "\"One window, one 15-minute block, zero multitasking—then a clean 3-minute reset.\"",
    "koS": "\"창 하나, 15분 집중 블록, 멀티태스킹 금지—끝나면 3분 깔끔하게 쉬기.\"",
    "enL": [
      "Use full-screen mode on a single workspace window for the next 15 minutes.",
      "Batch message replies into one dedicated check after the timer ends.",
      "Note your exact stopping point before taking a 3-minute stretch break."
    ],
    "koL": [
      "다음 15분 동안 작업 창 하나만 전체 화면으로 유지하세요.",
      "메시지 답장은 타이머가 끝난 뒤 한 번에 몰아서 처리하세요.",
      "3분 스트레칭 전에 다음 재개 지점을 한 줄 메모로 남겨두세요."
    ]
  },
  "high": {
    "enT": "High Working-Memory Clarity — Prime Window for Deep Work",
    "koT": "작업 기억 최상 컨디션 — 고난도 몰입 작업에 최적의 시간입니다",
    "enD": "Your cognitive headroom is clear and steady. Use this low-friction window for your most creative or analytical work before reactive inbox tasks.",
    "koD": "인지 여유 공간이 매우 쾌적합니다. 단순 응답 업무 전에 가장 창의적이거나 분석적인 핵심 과제를 배치하세요.",
    "enS": "\"My mind is clear right now—I will invest this peak focus window into what matters most.\"",
    "koS": "\"지금 머리가 가장 맑은 시간이니 단순 업무 대신 가장 중요한 핵심 과제에 먼저 투자할게.\"",
    "enL": [
      "Start directly with your highest-leverage analytical or creative task for 25–45 minutes.",
      "Keep notifications paused until the first milestone is drafted.",
      "Protect this rhythm with a brief 5-minute non-screen recovery pause afterward."
    ],
    "koL": [
      "가장 가치가 높은 분석·창작 과제로 25~45분 바로 몰입하세요.",
      "첫 마일스톤 초안이 나올 때까지 알림을 꺼 두세요.",
      "집중 블록 후에는 화면 없는 5분 휴식으로 리듬을 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_memory_span_v1";
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
      window.gtag('event', "memory_span_complete", {
        tool_slug: "working-memory-span-trainer",
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
      var shareUrl = "https://dopabrain.com/portal/tools/working-memory-span-trainer.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "working-memory-span-trainer",
        filename: 'dopabrain-working-memory-span-trainer-card.png',
        badge: "COGNITIVE BANDWIDTH • 2-MIN CALIBRATION",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#06b6d4",
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
