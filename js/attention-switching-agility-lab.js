/* Attention Switching & Context-Shift Lab
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Attention Switching & Context-Shift Lab | DopaBrain",
    "metaDesc": "Feeling mentally wiped out after jumping between meetings, chats, and deep tasks? Audit 5 context-switching traps locally and install a 60-second clean transition ritual.",
    "kicker": "EXECUTIVE AGILITY • CUT ATTENTION RESIDUE",
    "heroTitle": "Attention Switching & Context-Shift Lab",
    "heroLead": "Feeling mentally wiped out after jumping between meetings, chats, and deep tasks? Audit 5 context-switching traps locally and install a 60-second clean transition ritual.",
    "chip1": "5 Switching Traps",
    "chip2": "60s Transition Reset",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT YOUR TASK-SWITCHING FRICTION (1 = SMOOTH, 5 = SEVERE)",
    "step1Title": "Where is attention residue costing you the most energy today?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The clean \"parking note\" I will write before my next switch (100% local):",
    "ctaBtn": "Build Clean Transition Protocol",
    "resultBadge": "STEP 2 • YOUR CONTEXT-SWITCH RECOVERY PLAN",
    "noteTitle": "My Next Clean Parking Note",
    "meterLabel": "Attention Continuity Score",
    "scriptTitle": "Boundary Line for Protecting Focus Blocks",
    "stepsTitle": "3 Steps to Clear Attention Residue Fast",
    "stickyTitle": "Want a 5-minute cognitive agility warm-up?",
    "stickySub": "Build a tailored memory, logic & reaction drill plan",
    "stickyBtn": "Brain Workout →",
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
    "title": "주의 전환·컨텍스트 스위칭 회복 랩 | DopaBrain",
    "metaDesc": "회의·메신저·실무를 오가다 하루가 금방 방전되나요? 5가지 컨텍스트 스위칭 피로 원인을 점검하고 60초 깔끔한 전환 루틴을 만드세요.",
    "kicker": "전환 피로 해소 · 주의력 민첩성 랩",
    "heroTitle": "주의 전환·컨텍스트 스위칭 회복 랩",
    "heroLead": "회의·메신저·실무를 오가다 하루가 금방 방전되나요? 5가지 컨텍스트 스위칭 피로 원인을 점검하고 60초 깔끔한 전환 루틴을 만드세요.",
    "chip1": "5가지 전환 함정",
    "chip2": "60초 전환 리셋",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 작업 전환 마찰 점검 (1 = 원활함, 5 = 매우 심함)",
    "step1Title": "오늘 주의 잔여물(Attention Residue)이 가장 크게 쌓이는 지점은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 다음 작업 전환 직전에 남길 1줄 마무리 메모 (100% 로컬):",
    "ctaBtn": "깔끔한 작업 전환 프로토콜 생성",
    "resultBadge": "2단계 • 컨텍스트 스위칭 회복 플랜",
    "noteTitle": "나의 다음 작업 전환 1줄 메모",
    "meterLabel": "주의력 연속성 지수",
    "scriptTitle": "집중 블록을 지키는 안내 문구",
    "stepsTitle": "전환 피로를 빠르게 비우는 3단계",
    "stickyTitle": "5분 두뇌 민첩성 워밍업 루틴을 만들어 볼까요?",
    "stickySub": "현재 컨디션에 맞는 기억·논리·반응 조합 추천",
    "stickyBtn": "두뇌 루틴 →",
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
    "title": "注意力切换与任务转换恢复室 | DopaBrain",
    "heroTitle": "注意力切换与任务转换恢复室",
    "heroLead": "排查5大上下文切换消耗，建立60秒清爽收尾与专注衔接仪式。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "注意切替・タスクスイッチ回復ラボ | DopaBrain",
    "heroTitle": "注意切替・タスクスイッチ回復ラボ",
    "heroLead": "マルチタスク疲れの5要因を整理し、60秒の切り替えリセット習慣を作成。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Laboratorio de Cambio de Atención y Foco | DopaBrain",
    "heroTitle": "Laboratorio de Cambio de Atención y Foco",
    "heroLead": "Detecta 5 trampas de multitarea e instala un ritual de transición limpia de 60s.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Laboratório de Troca de Atenção e Foco | DopaBrain",
    "heroTitle": "Laboratório de Troca de Atenção e Foco",
    "heroLead": "Audite 5 armadilhas de multitarefa e crie um ritual de transição limpa de 60s.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Aufmerksamkeits- & Kontextwechsel-Labor | DopaBrain",
    "heroTitle": "Aufmerksamkeits- & Kontextwechsel-Labor",
    "heroLead": "Erkenne 5 Multitasking-Fallen und richte ein klares 60-Sekunden-Übergangsritual ein.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Labo Agilité Attentionnelle & Contexte | DopaBrain",
    "heroTitle": "Labo Agilité Attentionnelle & Contexte",
    "heroLead": "Repérez 5 pièges du multitâche et installez un sas de transition net de 60 secondes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Лаборатория переключения внимания | DopaBrain",
    "heroTitle": "Лаборатория переключения внимания",
    "heroLead": "Найдите 5 ловушек многозадачности и настройте 60-секундный чистый переход между делами.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "अटेंशन स्विचिंग व कॉन्टेक्स्ट-शिफ्ट लैब | DopaBrain",
    "heroTitle": "अटेंशन स्विचिंग व कॉन्टेक्स्ट-शिफ्ट लैब",
    "heroLead": "5 मल्टीटास्किंग बाधाएं पहचानें और 60-सेकंड का साफ ट्रांजिशन रिचुअल बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Lab Pemulihan Perpindahan Fokus | DopaBrain",
    "heroTitle": "Lab Pemulihan Perpindahan Fokus",
    "heroLead": "Audit 5 jebakan multitasking dan pasang ritual transisi fokus 60 detik yang bersih.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Dikkat Geçişi ve Bağlam Değişimi Labı | DopaBrain",
    "heroTitle": "Dikkat Geçişi ve Bağlam Değişimi Labı",
    "heroLead": "5 çoklu görev tuzağını analiz edin ve 60 saniyelik temiz geçiş rutini kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "chat_ping_loop",
    "en": "Instant-Reply Reflex — Dropping deep work every time a message badge appears",
    "ko": "즉각 답장 반사 — 메신저 배지가 뜰 때마다 하던 일을 멈추고 확인"
  },
  {
    "id": "back_to_back",
    "en": "Zero-Buffer Meetings — Jumping straight from one call into another task with no pause",
    "ko": "완충 없는 연속 회의 — 숨 돌릴 틈 없이 회의 직후 바로 다음 업무 투입"
  },
  {
    "id": "unfinished_exit",
    "en": "Abrupt Task Exits — Leaving tasks mid-sentence without writing a 1-line resume note",
    "ko": "미완성 이탈 — 다음 재개 지점을 적지 않고 급하게 다른 일로 이동"
  },
  {
    "id": "dual_screen",
    "en": "Split-Screen Multitasking — Keeping video, feed, or inbox open beside primary work",
    "ko": "분할 화면 멀티태스킹 — 메인 작업 옆에 영상·피드·받은편지함 상시 노출"
  },
  {
    "id": "micro_checks",
    "en": "Boredom Micro-Switches — Reflexively opening a new tab whenever a task feels hard",
    "ko": "지루함 탭 전환 — 조금 막힐 때마다 무의식적으로 새 탭이나 폰을 엶"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Switching Tax — Install a 60-Second \"Close & Park\" Buffer",
    "koT": "전환 비용 과다 — 60초 \"닫고 주차하기\" 완충 루틴이 필요합니다",
    "enD": "Frequent micro-switches force your prefrontal cortex to reload rules repeatedly. A 60-second parking note cuts residual mental drag before entering the next block.",
    "koD": "잦은 미세 전환은 전전두엽이 규칙을 반복해서 다시 불러오게 만들어 피로를 키웁니다. 60초 마무리 메모만으로도 다음 몰입 진입 속도가 빨라집니다.",
    "enS": "\"I am stepping into a 45-minute focus block and will batch replies at the top of the hour.\"",
    "koS": "\"45분 집중 작업 중입니다. 정각에 메시지 확인 후 차례로 답변드릴게요.\"",
    "enL": [
      "Before switching, write 1 sentence: \"Next tiny action when I return is ___.\"",
      "Physically stand or exhale slowly for 30 seconds to mark a clean mental boundary.",
      "Group similar small tasks (emails, approvals, admin) into two fixed batch windows today."
    ],
    "koL": [
      "작업을 바꾸기 직전 \"돌아와서 할 첫 1단계\"를 한 문장으로 적어두세요.",
      "30초간 자리에서 일어나거나 길게 내쉬며 뇌에 전환 신호를 주세요.",
      "메일·승인·단순 업무는 오늘 고정된 2개 배치 시간대에 몰아서 처리하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Switching Friction — Batch Reactive Checks Twice Daily",
    "koT": "중간 전환 마찰 — 알림 확인을 하루 2~3회로 묶어보세요",
    "enD": "Your focus base is workable, and batching reactive communications will recover noticeable mental stamina by late afternoon.",
    "koD": "기본 집중력은 양호합니다. 수동적인 알림 확인만 묶어두어도 오후 피로가 눈에 띄게 줄어듭니다.",
    "enS": "\"Batching my messages lets me respond more thoughtfully while protecting deep work.\"",
    "koS": "\"메시지를 모아서 확인하면 집중도 지키고 더 성실하게 답변할 수 있어.\"",
    "enL": [
      "Mute non-urgent chat channels during your next 30-minute work sprint.",
      "Keep only one active task visible on screen at a time.",
      "Use a 2-minute buffer after every meeting to capture decisions before switching."
    ],
    "koL": [
      "다음 30분 스프린트 동안 비긴급 채팅 알림을 잠시 음소거하세요.",
      "화면에는 현재 진행 중인 작업 창 하나만 띄워두세요.",
      "회의 직후 2분만 투자해 결정 사항을 정리한 뒤 다음 업무로 넘어가세요."
    ]
  },
  "high": {
    "enT": "Strong Executive Continuity — Sustain Your Clean Focus Cadence",
    "koT": "우수한 주의력 연속성 — 깔끔한 작업 전환 리듬을 유지하세요",
    "enD": "You are minimizing attention residue effectively. Keep protecting clean starts and intentional recovery pauses between cognitive modes.",
    "koD": "주의 잔여물을 잘 관리하고 계십니다. 작업 간 깔끔한 시작과 의도적인 짧은 휴식 리듬을 계속 지켜나가세요.",
    "enS": "\"Clear transitions keep my focus sharp and my evenings lighter.\"",
    "koS": "\"깔끔한 작업 전환 덕분에 낮의 몰입은 깊어지고 저녁은 더 가벼워진다.\"",
    "enL": [
      "Reserve your cleanest focus window for strategic work.",
      "Keep a brief end-of-day shutdown note so tomorrow opens smoothly.",
      "Take a 5-minute eyes-off-screen reset every 60–90 minutes."
    ],
    "koL": [
      "가장 맑은 집중 시간대를 핵심 전략 업무에 우선 배정하세요.",
      "퇴근 전 1줄 마감 메모로 내일 시작을 가볍게 만드세요.",
      "60~90분마다 화면에서 눈을 떼는 5분 휴식을 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_attention_switch_v1";
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
      window.gtag('event', "attention_switch_complete", {
        tool_slug: "attention-switching-agility-lab",
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
      var shareUrl = "https://dopabrain.com/portal/tools/attention-switching-agility-lab.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "attention-switching-agility-lab",
        filename: 'dopabrain-attention-switching-agility-lab-card.png',
        badge: "EXECUTIVE AGILITY • CUT ATTENTION RESIDUE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#eab308",
        accent2: "#3b82f6"
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
