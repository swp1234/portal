/* 3-Minute Post-Meeting Clarity & Action Distiller
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "3-Minute Post-Meeting Clarity & Action Distiller | DopaBrain",
    "metaDesc": "Walking out of 4 meetings with messy notes and zero clue who owns what? Audit 5 meeting-fog leaks locally and lock a crisp 3-line Decision / Owner / Next-Step recap.",
    "kicker": "WORK CLARITY • 3-MINUTE POST-MEETING ACTION DISTILLER",
    "heroTitle": "3-Minute Post-Meeting Clarity & Action Distiller",
    "heroLead": "Walking out of 4 meetings with messy notes and zero clue who owns what? Audit 5 meeting-fog leaks locally and lock a crisp 3-line Decision / Owner / Next-Step recap.",
    "chip1": "5 Fog Leaks",
    "chip2": "3-Line Recap",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR POST-MEETING CLARITY LEAKS (1 = CRISP, 5 = FOGGY)",
    "step1Title": "What turns meetings into lingering cognitive clutter?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONE concrete action + deadline I actually own from my last meeting (100% local):",
    "ctaBtn": "Build My 3-Minute Meeting Clarity Recap",
    "resultBadge": "STEP 2 • YOUR ZERO-FOG MEETING ACTION PROTOCOL",
    "noteTitle": "My Confirmed Owner Action",
    "meterLabel": "Meeting Action Clarity",
    "scriptTitle": "3-Line Alignment Follow-Up Template",
    "stepsTitle": "3 Habits That Cut Re-Meetings & Mental Carryover in Half",
    "stickyTitle": "Ready to knock out your top post-meeting action in 25 focused minutes?",
    "stickySub": "Launch the free Pomodoro Focus Timer",
    "stickyBtn": "Start Focus →",
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
    "title": "회의 직후 3분 핵심 결정·액션 정리 & 뇌 비우기 툴 | DopaBrain",
    "metaDesc": "회의 4개를 연달아 마치고 나니 메모만 어지럽고 누가 뭘 맡았는지 헷갈리나요? 5가지 회의 안개 원인을 점검하고 결정·담당·다음 행동 3줄로 뇌를 비우세요.",
    "kicker": "업무 명료화 · 회의 직후 3분 핵심 액션·결정 요약 정리기",
    "heroTitle": "회의 직후 3분 핵심 결정·액션 정리 & 뇌 비우기 툴",
    "heroLead": "회의 4개를 연달아 마치고 나니 메모만 어지럽고 누가 뭘 맡았는지 헷갈리나요? 5가지 회의 안개 원인을 점검하고 결정·담당·다음 행동 3줄로 뇌를 비우세요.",
    "chip1": "5가지 회의 안개",
    "chip2": "3줄 핵심 요약",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 회의 후 실행력 누수 습관 점검 (1 = 선명, 5 = 흐릿함)",
    "step1Title": "회의가 끝난 뒤에도 머릿속을 무겁게 만드는 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 방금 회의에서 내가 실제로 맡은 행동 1가지 + 기한 (100% 로컬):",
    "ctaBtn": "내 3분 회의 핵심 액션 정리 보기",
    "resultBadge": "2단계 • 회의 안개를 지우는 3분 요약 프로토콜",
    "noteTitle": "내가 맡은 확정 액션 1줄",
    "meterLabel": "회의 실행 명료도",
    "scriptTitle": "회의 직후 공유하는 3줄 정렬 템플릿",
    "stepsTitle": "중복 회의와 머릿속 잔상을 절반으로 줄이는 3습관",
    "stickyTitle": "정리한 핵심 액션 1건을 25분 집중 타이머로 바로 끝내 볼까요?",
    "stickySub": "무료 25분 뽀모도로 타이머 시작",
    "stickyBtn": "집중 시작 →",
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
    "title": "会后3分钟决策与行动提炼器 | DopaBrain",
    "heroTitle": "会后3分钟决策与行动提炼器",
    "heroLead": "用决定、负责人、截止日期3行速记法清除连轴开会后的大脑混沌。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "会議直後3分・決定事項＆アクション抽出ツール | DopaBrain",
    "heroTitle": "会議直後3分・決定事項＆アクション抽出ツール",
    "heroLead": "連続会議の頭のもやを「決定・担当・期限」の3行まとめで瞬時に整理します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Destilador de Decisiones y Acciones en 3 Minutos | DopaBrain",
    "heroTitle": "Destilador de Decisiones y Acciones en 3 Minutos",
    "heroLead": "Elimina la niebla tras reuniones con un resumen claro de Decisión, Responsable y Fecha.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Destilador de Decisões e Ações Pós-Reunião (3 Min) | DopaBrain",
    "heroTitle": "Destilador de Decisões e Ações Pós-Reunião (3 Min)",
    "heroLead": "Limpe a névoa mental após chamadas com 3 linhas de Decisão, Dono e Prazo.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "3-Minuten Meeting-Aktions- & Klarheits-Destillierer | DopaBrain",
    "heroTitle": "3-Minuten Meeting-Aktions- & Klarheits-Destillierer",
    "heroLead": "Löse Meeting-Nebel lokal mit 3 Zeilen für Entscheidung, Verantwortung und Termin.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Synthétiseur Actions & Décisions Post-Réunion (3 Min) | DopaBrain",
    "heroTitle": "Synthétiseur Actions & Décisions Post-Réunion (3 Min)",
    "heroLead": "Dissipez le brouillard des réunions grâce au mémo 3 lignes Décision, Porteur, Date.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "3-минутный дистиллятор решений и задач после встреч | DopaBrain",
    "heroTitle": "3-минутный дистиллятор решений и задач после встреч",
    "heroLead": "Снимите туман после созвонов с помощью 3 строк: Решение, Ответственный и Срок.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "3-मिनट पोस्ट-मीटिंग एक्शन और निर्णय डिस्टिलर | DopaBrain",
    "heroTitle": "3-मिनट पोस्ट-मीटिंग एक्शन और निर्णय डिस्टिलर",
    "heroLead": "मीटिंग की उलझन दूर करें और निर्णय, ज़िम्मेदारी व तारीख की 3-लाइन समरी बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Penyaring Keputusan & Aksi Rapat 3 Menit | DopaBrain",
    "heroTitle": "Penyaring Keputusan & Aksi Rapat 3 Menit",
    "heroLead": "Hilangkan kabut otak usai rapat dengan ringkasan 3 baris Keputusan, PIC, dan Tenggat.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "3 Dakikalık Toplantı Karar ve Eylem Özeti Aracı | DopaBrain",
    "heroTitle": "3 Dakikalık Toplantı Karar ve Eylem Özeti Aracı",
    "heroLead": "Toplantı sonrası bulanıklığı Karar, Sorumlu ve Tarih şeklinde 3 satırda netleştirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "back_to_back_zero_gap",
    "en": "Zero 3-Min Post-Call Buffer — Jumping straight into the next Zoom before writing 2 bullets",
    "ko": "연속 회의 0분 간격 — 2줄 정리도 못 하고 바로 다음 화상회의로 넘어감"
  },
  {
    "id": "verbatim_transcript_mess",
    "en": "Wall-of-Text Notes — Typing everything spoken without highlighting final decisions",
    "ko": "받아쓰기 메모 — 대화 내용을 다 적느라 정작 최종 결정 사항이 안 보임"
  },
  {
    "id": "orphan_action_items",
    "en": "\"We Should...\" Orphan Tasks — Leaving calls with vague wishes instead of 1 named owner + date",
    "ko": "주인 없는 \"우리 해보자\" — 담당자와 날짜 없는 막연한 다짐으로 끝남"
  },
  {
    "id": "unwritten_memory",
    "en": "Trusting Tired Memory — Assuming \"I’ll remember that Friday task\" after 5 calls",
    "ko": "피곤한 기억력 과신 — 회의 5개 돌면서 \"금요일 할 일 기억하겠지\" 하고 안 적음"
  },
  {
    "id": "silent_confusion",
    "en": "Polite Nodding — Staying quiet when scope or priority feels fuzzy at minute 58",
    "ko": "모호한 끄덕임 — 종료 2분 전 범위가 애매한데 그냥 고개만 끄덕이고 나옴"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Meeting Fog — End Calls 3 Min Early & Post a 3-Line Decision / Owner / Date Note",
    "koT": "회의 안개 높음 — 종료 3분 전 \"결정·담당·기한\" 3줄을 소리 내어 확인하고 메모하세요",
    "enD": "Cognitive load research shows uncaptured verbal commitments consume active working memory all afternoon. Spending 180 seconds writing Decision + Owner + Due Date immediately clears mental RAM.",
    "koD": "인지 부하 연구에 따르면 기록되지 않은 구두 약속은 오후 내내 작업 기억을 점유합니다. 회의 직후 3분만 투자해 결정·담당·기한 3줄을 남기면 뇌 메모리가 즉시 비워집니다.",
    "enS": "\"Quick 3-line recap so we stay aligned: 1) Decided: [X] · 2) Next step: [Owner -> Task by Date] · 3) Open parking lot: [Y]. Let me know if I missed anything!\"",
    "koS": "\"회의 핵심 3줄 정리드립니다: 1) 확정 결정: [X] · 2) 다음 액션: [담당자/기한] · 3) 보류 안건: [Y]. 수정할 부분 있으면 편히 말씀 주세요!\"",
    "enL": [
      "Reserve the last 3 minutes of every meeting to ask: \"Just to confirm—who owns what by when?\"",
      "Capture only Decisions & Actions (skip verbatim quotes) onto ONE single running inbox.",
      "Take 60 seconds away from screens between calls to flush attention residue."
    ],
    "koL": [
      "모든 회의 종료 3분 전에 \"정리하면 누가 언제까지 무엇을 맡는 걸로 할까요?\"를 확인하세요.",
      "받아쓰기 대신 최종 결정과 담당 액션만 딱 1곳의 메인 메모장에 모으세요.",
      "회의 사이 60초만 화면에서 눈을 떼고 숨을 고르며 주의 잔류를 털어내세요."
    ]
  },
  "mid": {
    "enT": "Mostly Clear — Add a Named Owner + Date to Every Action Line",
    "koT": "대체로 선명 — 액션 옆에 담당자 이름과 날짜만 꼭 붙여 주세요",
    "enD": "Your note-taking is strong; tagging explicit dates eliminates 90% of follow-up chasing.",
    "koD": "정리 습관이 좋습니다. 액션 옆에 기한만 명시하면 재확인 메시지가 90% 줄어듭니다.",
    "enS": "\"No owner + no date = not an action item yet.\"",
    "koS": "\"담당자와 날짜가 없으면 아직 액션 아이템이 아니다.\"",
    "enL": [
      "Default calendar invites to 25 or 50 minutes for built-in wrap-up.",
      "Star your own action items in bold immediately.",
      "Archive raw notes once tasks enter your planner."
    ],
    "koL": [
      "회의 기본 길이를 25분/50분으로 잡아 5분 정리 여백을 확보하세요.",
      "내가 맡은 항목은 회의 중에 굵게 표시해 두세요.",
      "할 일 앱으로 옮긴 원본 메모는 깔끔히 보관 처리하세요."
    ]
  },
  "high": {
    "enT": "Crisp Executive Clarity — Zero Meeting Carryover",
    "koT": "명쾌한 실행력 — 회의 잔상 없이 깔끔하게 업무를 연결 중입니다",
    "enD": "Your structured wrap-ups save hours of confusion for both you and your team.",
    "koD": "명료한 마무리 습관이 나와 팀 모두의 불필요한 재논의를 크게 줄여 주고 있습니다.",
    "enS": "\"Three crisp lines after a call save three extra meetings next week.\"",
    "koS": "\"회의 뒤 3줄 정리가 다음 주 불필요한 회의 3개를 없애 준다.\"",
    "enL": [
      "Keep modeling concise 3-line recaps.",
      "Protect deep-work blocks between call windows.",
      "Decline meetings that lack a clear decision goal."
    ],
    "koL": [
      "간결한 3줄 요약 공유 문화를 계속 이끌어 주세요.",
      "회의 묶음 사이에 깊은 집중 블록을 지키세요.",
      "목적이 불명확한 회의는 정중히 비동기로 전환해 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_meeting_action_distiller_v1";
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
      window.gtag('event', "meeting_action_distiller_complete", {
        tool_slug: "meeting-note-action-distiller",
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
      var shareUrl = "https://dopabrain.com/portal/tools/meeting-note-action-distiller.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "meeting-note-action-distiller",
        filename: 'dopabrain-meeting-note-action-distiller-card.png',
        badge: "WORK CLARITY • 3-MINUTE POST-MEETING ACTION DISTILLER",
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
