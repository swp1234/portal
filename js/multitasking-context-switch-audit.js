/* Multitasking Context-Switch Audit & Single-Thread Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Multitasking Context-Switch Audit & Single-Thread Planner | DopaBrain",
    "metaDesc": "Busy for 8 straight hours yet finishing almost nothing meaningful? Audit 5 attention-residue leaks locally and switch to 3 clean single-thread focus blocks.",
    "kicker": "DEEP WORK • CONTEXT-SWITCH RECOVERY & SINGLE-THREAD PLANNER",
    "heroTitle": "Multitasking Context-Switch Audit & Single-Thread Planner",
    "heroLead": "Busy for 8 straight hours yet finishing almost nothing meaningful? Audit 5 attention-residue leaks locally and switch to 3 clean single-thread focus blocks.",
    "chip1": "5 Switch Leaks",
    "chip2": "3-Block Single-Thread",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR CONTEXT-SWITCHING LEAKS (1 = SINGLE-THREAD, 5 = PING-PONG)",
    "step1Title": "Where is rapid task-switching silently eating your day?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My ONE protected 45-minute single-thread block tomorrow morning (100% local):",
    "ctaBtn": "Build My Single-Thread Focus Schedule",
    "resultBadge": "STEP 2 • YOUR ZERO-RESIDUE SINGLE-THREAD PROTOCOL",
    "noteTitle": "My Protected 45-Min Thread",
    "meterLabel": "Single-Thread Clarity",
    "scriptTitle": "2-Line Team Focus-Block Status Note",
    "stepsTitle": "3 Habits That Cut Attention-Residue Tax in Half",
    "stickyTitle": "Run one distraction-free single-thread sprint right now.",
    "stickySub": "Launch Free Pomodoro Focus Timer",
    "stickyBtn": "Start Single-Thread →",
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
    "title": "멀티태스킹 전환 비용 점검 & 단일 스레드 3블록 집중 플래너 | DopaBrain",
    "metaDesc": "하루 8시간 쉴 새 없이 바빴는데 정작 끝낸 핵심 일이 없나요? 5가지 주의 잔류(Context Switch) 누수를 점검하고 하루 3개의 깔끔한 단일 스레드 집중 블록으로 재설계하세요.",
    "kicker": "싱글태스킹 · 멀티태스킹 전환 비용 점검 & 단일 스레드 집중 설계",
    "heroTitle": "멀티태스킹 전환 비용 점검 & 단일 스레드 3블록 집중 플래너",
    "heroLead": "하루 8시간 쉴 새 없이 바빴는데 정작 끝낸 핵심 일이 없나요? 5가지 주의 잔류(Context Switch) 누수를 점검하고 하루 3개의 깔끔한 단일 스레드 집중 블록으로 재설계하세요.",
    "chip1": "5가지 전환 누수",
    "chip2": "단일 스레드 3블록",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 멀티태스킹·작업 전환 비용 점검 (1 = 단일 집중, 5 = 수시 전환)",
    "step1Title": "하루 집중 시간을 가장 많이 갉아먹는 작업 전환 패턴은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 내일 오전 딱 1개만 몰입할 45분 단일 스레드 작업 (100% 로컬):",
    "ctaBtn": "내 단일 스레드 집중 스케줄 보기",
    "resultBadge": "2단계 • 전환 피로를 줄이는 단일 스레드 프로토콜",
    "noteTitle": "내일 오전 45분 단일 스레드",
    "meterLabel": "단일 집중 명료도",
    "scriptTitle": "방해받지 않고 45분 집중하기 위한 팀 상태 안내 1줄",
    "stepsTitle": "주의 잔류(전환 피로)를 절반으로 줄이는 3가지 습관",
    "stickyTitle": "지금 바로 방해 없는 단일 스레드 집중 타이머를 시작해 보세요.",
    "stickySub": "무료 집중 타이머 바로가기",
    "stickyBtn": "단일 집중 시작 →",
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
    "title": "多任务切换损耗自测与单线程专注规划器 | DopaBrain",
    "heroTitle": "多任务切换损耗自测与单线程专注规划器",
    "heroLead": "用分心暂存纸条和45分钟单线程专注块，大幅减少注意力残留损耗。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "マルチタスク切替コスト診断＆シングルスレッド計画 | DopaBrain",
    "heroTitle": "マルチタスク切替コスト診断＆シングルスレッド計画",
    "heroLead": "中断の23分ロスを防ぐメモ退避と45分シングル集中ブロックを設計します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Auditoría de Cambio de Contexto y Enfoque Monotarea | DopaBrain",
    "heroTitle": "Auditoría de Cambio de Contexto y Enfoque Monotarea",
    "heroLead": "Reduce el coste de interrupciones con bloques monotarea de 45 min y libreta de captura.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Auditoria de Troca de Contexto e Foco em Tarefa Única | DopaBrain",
    "heroTitle": "Auditoria de Troca de Contexto e Foco em Tarefa Única",
    "heroLead": "Elimine o resíduo de atenção com blocos de 45 min sem interrupções e bloco de captura.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Multitasking-Wechselkosten & Single-Thread-Planer | DopaBrain",
    "heroTitle": "Multitasking-Wechselkosten & Single-Thread-Planer",
    "heroLead": "Spare 23-Minuten-Unterbrechungen mit 45-Min-Fokusblöcken und Park-Notizblock.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Audit Changement de Contexte & Focus Mono-Tâche | DopaBrain",
    "heroTitle": "Audit Changement de Contexte & Focus Mono-Tâche",
    "heroLead": "Réduisez le résidu attentionnel avec des blocs mono-tâche de 45 min et carnet parking.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Аудит переключений контекста и однозадачный план | DopaBrain",
    "heroTitle": "Аудит переключений контекста и однозадачный план",
    "heroLead": "Снизьте потери от прерываний с 45-минутными блоками и листком для парковки идей.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "मल्टीटास्किंग कॉन्टेक्स्ट-स्विच और सिंगल-थ्रेड प्लानर | DopaBrain",
    "heroTitle": "मल्टीटास्किंग कॉन्टेक्स्ट-स्विच और सिंगल-थ्रेड प्लानर",
    "heroLead": "45-मिनट सिंगल-थ्रेड ब्लॉक और डिस्ट्रैक्शन पार्किंग पैड से एकाग्रता दोगुनी करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Audit Biaya Multitasking & Perencana Fokus Tunggal | DopaBrain",
    "heroTitle": "Audit Biaya Multitasking & Perencana Fokus Tunggal",
    "heroLead": "Potong biaya perpindahan konteks dengan blok fokus 45 menit dan catatan parkir distraksi.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Çoklu Görev Bağlam Değiştirme ve Tek Odak Planlayıcı | DopaBrain",
    "heroTitle": "Çoklu Görev Bağlam Değiştirme ve Tek Odak Planlayıcı",
    "heroLead": "45 dakikalık tek görev blokları ve dikkat park notuyla kesinti maliyetini azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "chat_every_6min",
    "en": "6-Minute Chat Peeking — Interrupting deep work 30 times/day for non-urgent messages",
    "ko": "6분마다 메신저 확인 — 급하지 않은 채팅 때문에 하루 30번 이상 흐름이 끊김"
  },
  {
    "id": "dual_monitor_distraction",
    "en": "Second-Screen Temptation — Keeping inbox, news, or video open beside active work",
    "ko": "보조 모니터 유혹 — 작업 화면 옆에 메일·뉴스·영상을 늘 띄워 둠"
  },
  {
    "id": "mid_task_errands",
    "en": "Impulse Micro-Errands — Stopping mid-paragraph to pay a bill or answer a text",
    "ko": "충동 잔심부름 — 문단을 쓰다 갑자기 택배 조회나 답장을 하러 이탈함"
  },
  {
    "id": "zero_parking_pad",
    "en": "No Capture Scratchpad — Switching immediately whenever a random thought pops up",
    "ko": "아이디어 주차 메모 부재 — 문득 떠오른 일을 적어 두지 않고 즉시 탭을 바꿈"
  },
  {
    "id": "unbatched_admin",
    "en": "Sprinkled Admin Chaos — Mixing tiny 2-minute tasks throughout peak morning energy",
    "ko": "오전 잡무 혼재 — 두뇌가 가장 맑은 오전에 자잘한 2분 잡무를 섞어 처리함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Context-Switch Tax — Protect One 45-Min Morning Block + Keep a Paper Capture Pad",
    "koT": "전환 비용 높음 — 오전 45분 단일 블록 잠금 + 옆에 종이 \"떠오른 일 주차장\" 메모를 두세요",
    "enD": "Sophie Leroy’s attention-residue research and Gloria Mark’s interruption studies show each unscheduled switch takes 15–23 minutes to regain full depth. Protecting just two 45-minute single-thread blocks daily doubles real output.",
    "koD": "소피 르로이(Attention Residue)와 글로리아 마크의 연구에 따르면 예고 없는 작업 전환 1회당 깊은 몰입 복구에 15~23분이 듭니다. 하루 45분 단일 블록 2개만 지켜도 실질 산출물이 2배로 늘어납니다.",
    "enS": "\"Heads-down on [Project] until 10:30 AM (notifications paused)—will catch up on all messages right at 10:30!\"",
    "koS": "\"[핵심 업무] 집중 작업으로 오전 10시 30분까지 알림을 잠시 꺼 둡니다. 10시 반에 메시지 일괄 확인하겠습니다!\"",
    "enL": [
      "Keep a paper \"Distraction Parking Pad\" next to your keyboard: jot random thoughts down in 3 words instead of switching windows.",
      "Close Slack/mail completely for 45 minutes, then batch ALL tiny replies together in one 15-min admin window.",
      "Finish each focus block by writing 1 line (\"Next micro-step: ...\") so restarting later costs zero mental friction."
    ],
    "koL": [
      "키보드 옆에 \"잡생각 주차 메모지\"를 두고 떠오른 일은 탭을 바꾸지 말고 3단어만 적어 둔 뒤 계속 작업하세요.",
      "45분간 메신저·메일 창을 완전히 닫고, 직후 15분 잡무 배치 창에서 답장을 몰아 처리하세요.",
      "블록을 마칠 때 \"다음 첫 행동 1줄\"을 남겨 두면 나중에 이어서 할 때 시동 비용이 0이 됩니다."
    ]
  },
  "mid": {
    "enT": "Moderate Switching — Batch Small Admin Into Two Daily Windows",
    "koT": "중간 전환 빈도 — 자잘한 잡무만 하루 2번 배치 창으로 묶어 주세요",
    "enD": "Moving tiny pings out of your morning peak immediately unlocks smoother flow.",
    "koD": "오전 골든타임에서 자잘한 알림만 분리해도 몰입도가 크게 좋아집니다.",
    "enS": "\"Deep work first, admin batch second.\"",
    "koS": "\"오전엔 굵직한 단일 집중, 잡무는 정해진 시간에 한꺼번에.\"",
    "enL": [
      "Mute desktop popups during morning focus.",
      "Park side ideas on paper until break time.",
      "Keep one active app full-screen."
    ],
    "koL": [
      "오전 집중 시간엔 데스크톱 팝업 알림을 꺼 두세요.",
      "옆길 아이디어는 쉬는 시간까지 종이에만 모아 두세요.",
      "지금 작업하는 앱 1개만 화면에 띄워 보세요."
    ]
  },
  "high": {
    "enT": "Single-Thread Mastery — Clean, High-Leverage Focus",
    "koT": "단일 스레드 달인 — 전환 손실 없는 높은 몰입력을 유지 중입니다",
    "enD": "Your focus boundaries protect deep thinking and calm evenings.",
    "koD": "주의 잔류 없이 깔끔한 집중과 여유로운 마무리를 모두 지키고 있습니다.",
    "enS": "\"One thread at a time finishes twice as fast.\"",
    "koS": "\"한 번에 한 가닥씩 풀면 결국 두 배 더 빨리 끝난다.\"",
    "enL": [
      "Keep defending your morning focus block.",
      "Continue batching chat & email cleanly.",
      "Protect short offline breaks between sprints."
    ],
    "koL": [
      "오전 핵심 집중 블록을 꾸준히 지켜 나가세요.",
      "메신저·메일 일괄 처리 리듬을 유지하세요.",
      "스프린트 사이 짧은 화면 휴식도 꼭 챙기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_context_switch_v1";
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
      window.gtag('event', "context_switch_audit_complete", {
        tool_slug: "multitasking-context-switch-audit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/multitasking-context-switch-audit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "multitasking-context-switch-audit",
        filename: 'dopabrain-multitasking-context-switch-audit-card.png',
        badge: "DEEP WORK • CONTEXT-SWITCH RECOVERY & SINGLE-THREAD PLANNER",
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
