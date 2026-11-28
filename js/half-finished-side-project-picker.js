/* Half-Finished Side Project Picker & 1-Active-Goal Rule
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Half-Finished Side Project Picker & 1-Active-Goal Rule | DopaBrain",
    "metaDesc": "Sitting on 7 half-built repos, drafts, or hobbies—jumping to shiny idea #8 whenever #1 hits the boring middle? Park 6 guilt-free and pick 1 project to ship in 14 days locally.",
    "kicker": "MAKER FOCUS • HALF-FINISHED SIDE PROJECT PICKER & 1-SHIP RULE",
    "heroTitle": "Half-Finished Side Project Picker & 1-Active-Goal Rule",
    "heroLead": "Sitting on 7 half-built repos, drafts, or hobbies—jumping to shiny idea #8 whenever #1 hits the boring middle? Park 6 guilt-free and pick 1 project to ship in 14 days locally.",
    "chip1": "5 Shiny-Object Leaks",
    "chip2": "14-Day Ship Lock",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT YOUR PROJECT-HOPPING HABITS (1 = SHIPPING, 5 = SCATTERED)",
    "step1Title": "Why do promising side projects stall at 60% completion?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONE project I am locking in to finish a tiny v1 of first (100% local):",
    "ctaBtn": "Lock In My 1-Project Ship Plan",
    "resultBadge": "STEP 2 • YOUR 14-DAY SHIP-ONE PROTOCOL",
    "noteTitle": "My Active #1 Ship Lock",
    "meterLabel": "Finishing Momentum",
    "scriptTitle": "Your Shiny-Idea Parking Rule",
    "stepsTitle": "3 Maker Rules That Turn Half-Built Drafts Into Shipped Work",
    "stickyTitle": "Ready to put 25 focused minutes into your #1 project right now?",
    "stickySub": "Open the free 25-Min Focus Timer",
    "stickyBtn": "Start 25-Min Sprint →",
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
    "title": "쌓인 미완성 사이드 프로젝트 정리 & \"단 1개 먼저 출시\" 선택기 | DopaBrain",
    "metaDesc": "미완성 저장소·초안·취미가 7개나 쌓여 있는데 지루한 중반부만 되면 8번째 새 아이디어로 갈아타시나요? 6개를 죄책감 없이 보류하고 14일 안에 끝낼 단 1개를 고르세요.",
    "kicker": "메이커 집중 · 미완성 사이드 프로젝트 정리 & 단 1개 완주 선택기",
    "heroTitle": "쌓인 미완성 사이드 프로젝트 정리 & \"단 1개 먼저 출시\" 선택기",
    "heroLead": "미완성 저장소·초안·취미가 7개나 쌓여 있는데 지루한 중반부만 되면 8번째 새 아이디어로 갈아타시나요? 6개를 죄책감 없이 보류하고 14일 안에 끝낼 단 1개를 고르세요.",
    "chip1": "5가지 새아이디어 함정",
    "chip2": "14일 1개 완주",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 프로젝트 갈아타기 패턴 점검 (1 = 완주 중심, 5 = 분산 심각)",
    "step1Title": "야심 차게 시작한 사이드 프로젝트가 60%에서 멈추는 가장 큰 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 다른 6개를 잠시 보류하고 가장 먼저 v1을 끝낼 단 1개의 프로젝트 (100% 로컬):",
    "ctaBtn": "내 1개 완주 플랜 확정하기",
    "resultBadge": "2단계 • 14일 단 1개 완주 프로토콜",
    "noteTitle": "최우선 완주 프로젝트",
    "meterLabel": "완주 추진 지수",
    "scriptTitle": "새 아이디어가 떠올랐을 때의 보류 규칙",
    "stepsTitle": "미완성 초안을 실제 결과물로 바꾸는 3가지 규칙",
    "stickyTitle": "지금 바로 최우선 프로젝트 1개에 25분 집중 타이머를 돌려볼까요?",
    "stickySub": "무료 25분 포모도로 타이머 열기",
    "stickyBtn": "25분 집중 시작 →",
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
    "title": "半成品副业项目整理与单项目交付选择器 | DopaBrain",
    "heroTitle": "半成品副业项目整理与单项目交付选择器",
    "heroLead": "摆脱三分钟热度，无愧疚暂存多余草稿，锁定1个14天内可上线的最小版本。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "やりかけプロジェクト整理＆「まず1つ完成」選択器 | DopaBrain",
    "heroTitle": "やりかけプロジェクト整理＆「まず1つ完成」選択器",
    "heroLead": "目移りを止めて他を一時保管し、14日で公開できる最小v1を1つに絞ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Selector de Proyectos a Medias (Regla 1 Activo) | DopaBrain",
    "heroTitle": "Selector de Proyectos a Medias (Regla 1 Activo)",
    "heroLead": "Frena el salto de ideas: aparca borradores sin culpa y termina 1 versión v1 en 14 días.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Seletor de Projetos Pela Metade (Regra 1 Ativo) | DopaBrain",
    "heroTitle": "Seletor de Projetos Pela Metade (Regra 1 Ativo)",
    "heroLead": "Pare de pular de ideia em ideia e feche 1 projeto v1 enxuto em 14 dias.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Halbfertige-Projekte-Picker & 1-Ziel-Regel | DopaBrain",
    "heroTitle": "Halbfertige-Projekte-Picker & 1-Ziel-Regel",
    "heroLead": "Stoppe Ideen-Hopping: parke Extras schuldfrei und bringe 1 kleine v1 in 14 Tagen ins Ziel.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Sélecteur de Projets Inachevés (Règle 1 Actif) | DopaBrain",
    "heroTitle": "Sélecteur de Projets Inachevés (Règle 1 Actif)",
    "heroLead": "Stoppez le zapping d’idées : mettez le reste en pause et livrez 1 petite v1 en 14 jours.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Выбор одного незавершённого проекта (14 дней) | DopaBrain",
    "heroTitle": "Выбор одного незавершённого проекта (14 дней)",
    "heroLead": "Остановите скачки между идеями: отложите лишнее и доведите до релиза 1 проект v1.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "अधूरे साइड-प्रोजेक्ट पिकर और 1-लक्ष्य नियम | DopaBrain",
    "heroTitle": "अधूरे साइड-प्रोजेक्ट पिकर और 1-लक्ष्य नियम",
    "heroLead": "नए आइडिया पर कूदना रोकें और 14 दिनों में 1 छोटा v1 पूरा करने का प्लान बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pemilih Proyek Setengah Jadi & Aturan 1 Selesai | DopaBrain",
    "heroTitle": "Pemilih Proyek Setengah Jadi & Aturan 1 Selesai",
    "heroLead": "Hentikan loncat ide baru: parkir draf lain dan selesaikan 1 v1 kecil dalam 14 hari.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yarım Kalan Proje Seçici ve 1 Hedef Kuralı | DopaBrain",
    "heroTitle": "Yarım Kalan Proje Seçici ve 1 Hedef Kuralı",
    "heroLead": "Yeni fikir zıplamasını durdurun, diğerlerini park edip 14 günde 1 küçük v1 tamamlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "boring_middle_escape",
    "en": "Boring-Middle Escape — Starting a fresh repo/notebook the exact week polish & debugging begins",
    "ko": "지루한 중반부 이탈 — 초기 설렘이 끝나고 마무리·디버깅이 시작되면 새 프로젝트를 엶"
  },
  {
    "id": "no_wip_limit",
    "en": "Zero WIP Limit — Trying to advance 5 big side goals in the same week and finishing zero",
    "ko": "동시 진행 무제한 — 한 주에 5개 목표를 동시에 밀다가 아무것도 못 끝냄"
  },
  {
    "id": "scope_ballooning",
    "en": "V1 Feature Bloat — Turning a 2-weekend idea into a 6-month perfectionist monster",
    "ko": "v1 범위 비대화 — 2주짜리 아이디어를 6개월짜리 거대 계획으로 키워 압도됨"
  },
  {
    "id": "fear_of_publishing",
    "en": "Shipping Fear — Polishing privately forever so nobody can judge the finished work",
    "ko": "공개 두려움 — 평가받을까 봐 완벽한 다듬기만 반복하며 출시를 미룸"
  },
  {
    "id": "unparked_ideas",
    "en": "Fear of Losing New Ideas — Jumping immediately because you lack a trusted \"Later Vault\"",
    "ko": "아이디어 유실 불안 — \"나중에 볼 보관함\"이 없어서 떠오르자마자 손대 버림"
  }
];
  var TIERS = {
  "low": {
    "enT": "Severe WIP Scatter — Archive Everything Except 1 Tiny 14-Day V1",
    "koT": "동시 진행 과부하 — 14일 안에 끝낼 초소형 v1 단 1개만 남기고 나머지를 보류하세요",
    "enD": "Finishing one imperfect 80% project builds ten times the confidence and real-world feedback of ten 60% folders sitting on your hard drive.",
    "koD": "하드디스크에 잠든 60%짜리 10개보다 80% 완성도로 세상에 내놓은 단 1개가 훨씬 큰 자신감과 피드백을 줍니다.",
    "enS": "\"Every new idea goes straight into my Later Vault for 14 days—not killed, just patiently queued behind my active #1 ship.\"",
    "koS": "\"새로 떠오른 아이디어는 버리는 게 아니라 14일 동안 보류 노트에 고이 저장해 두고, 지금 #1 v1 완주에만 집중한다.\"",
    "enL": [
      "Move all other side-project folders into a single \"_PAUSED_FOR_14_DAYS\" archive folder today.",
      "Cut your #1 project’s v1 scope in half so it can ship within 14 days.",
      "Put one visible \"Definition of Done\" sticky note on your desk and work 25 minutes daily until shipped."
    ],
    "koL": [
      "지금 당장 다른 프로젝트 폴더들을 \"_14일_보류함\"으로 옮겨 시야를 비우세요.",
      "#1 프로젝트의 v1 기능을 절반으로 줄여 14일 안에 공개 가능한 크기로 자르세요.",
      "\"출시 완료 기준 3줄\"을 적어 두고 완주할 때까지 매일 25분씩만 투자하세요."
    ]
  },
  "mid": {
    "enT": "Mild Shiny-Object Pull — Enforce a Strict 1-Active-Project Rule & Idea Vault",
    "koT": "새 아이디어 유혹 있음 — 동시 진행 1개 제한과 아이디어 보관함을 쓰세요",
    "enD": "Capturing new sparks in a vault without switching contexts lets you finish fast.",
    "koD": "새 영감을 보관함에만 적고 작업을 바꾸지 않으면 완주 속도가 두 배로 빨라집니다.",
    "enS": "\"Finish one small thing before opening the next.\"",
    "koS": "\"작은 것 하나를 끝낸 뒤에 다음 문을 연다.\"",
    "enL": [
      "Keep 1 plain text \"Later Ideas\" file.",
      "Define a 1-hour weekend shipping milestone.",
      "Share a tiny work-in-progress screenshot to build momentum."
    ],
    "koL": [
      "\"나중에 할 아이디어\" 메모 파일 1개만 두세요.",
      "주말 1시간 단위 작은 완료 마일스톤을 정하세요.",
      "진행 화면을 작게 기록하며 마무리 동력을 만드세요."
    ]
  },
  "high": {
    "enT": "Strong Finisher Rhythm — Clean WIP Discipline",
    "koT": "단단한 완주 리듬 — 실행력과 마무리가 균형 잡힘",
    "enD": "You protect focus by finishing small v1 releases before expanding scope.",
    "koD": "작은 v1 출시를 끝까지 마무리한 뒤 확장하는 건강한 습관을 갖고 있습니다.",
    "enS": "\"Shipped small beats imagined huge.\"",
    "koS": "\"거대한 상상보다 작은 완주가 강하다.\"",
    "enL": [
      "Celebrate your latest finished milestone.",
      "Pick just 1 next upgrade from real feedback.",
      "Keep WIP strictly at 1–2 active goals."
    ],
    "koL": [
      "최근 완료한 결과물을 충분히 축하하세요.",
      "실제 반응을 보고 다음 개선 1가지만 고르세요.",
      "동시 진행 프로젝트는 항상 1~2개 이하로 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_side_project_v1";
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
      window.gtag('event', "side_project_picker_complete", {
        tool_slug: "half-finished-side-project-picker",
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
      var shareUrl = "https://dopabrain.com/portal/tools/half-finished-side-project-picker.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "half-finished-side-project-picker",
        filename: 'dopabrain-half-finished-side-project-picker-card.png',
        badge: "MAKER FOCUS • HALF-FINISHED SIDE PROJECT PICKER & 1-SHIP RULE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
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
