/* 15-Minute Digital Workspace & 50-Tab Declutter Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "15-Minute Digital Workspace & 50-Tab Declutter Reset | DopaBrain",
    "metaDesc": "47 open browser tabs, 200 desktop screenshots, and red badges quietly spiking cortisol every time you unlock your screen? Run a zero-fear 15-minute 3-zone sweep locally.",
    "kicker": "VISUAL CALM • 15-MINUTE DIGITAL WORKSPACE DECLUTTER",
    "heroTitle": "15-Minute Digital Workspace & 50-Tab Declutter Reset",
    "heroLead": "47 open browser tabs, 200 desktop screenshots, and red badges quietly spiking cortisol every time you unlock your screen? Run a zero-fear 15-minute 3-zone sweep locally.",
    "chip1": "5 Visual Leaks",
    "chip2": "3-Zone 15-Min Sweep",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR DIGITAL CLUTTER FRICTION (1 = CLEAN, 5 = CHAOTIC)",
    "step1Title": "Which digital mess creates visual stress every time you open your device?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The 1 cluttered zone I will sweep first in the next 5 minutes (100% local):",
    "ctaBtn": "Build My 15-Minute Digital Declutter Sweep",
    "resultBadge": "STEP 2 • YOUR ZERO-FEAR 15-MINUTE SWEEP SEQUENCE",
    "noteTitle": "My First 5-Min Sweep Target",
    "meterLabel": "Digital Visual Calm",
    "scriptTitle": "Zero-Loss Archive Rule",
    "stepsTitle": "The 5-5-5 Digital Sweep (Tabs / Desktop / Home Screen)",
    "stickyTitle": "Want a crisp 15-minute timer to run your sweep right now?",
    "stickySub": "Start the free 15-Min Focus Timer",
    "stickyBtn": "Start 15-Min Timer →",
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
    "title": "열린 탭 50개·어지러운 바탕화면 15분 디지털 대청소 리셋 | DopaBrain",
    "metaDesc": "열린 탭 47개, 쌓인 스크린샷 200장, 빨간 배지가 화면을 열 때마다 은근히 스트레스를 올리나요? 삭제 공포 없이 15분 만에 3구역을 비우는 디지털 대청소를 시작하세요.",
    "kicker": "시각 평온 · 47개 탭·바탕화면 15분 디지털 대청소 리셋기",
    "heroTitle": "열린 탭 50개·어지러운 바탕화면 15분 디지털 대청소 리셋",
    "heroLead": "열린 탭 47개, 쌓인 스크린샷 200장, 빨간 배지가 화면을 열 때마다 은근히 스트레스를 올리나요? 삭제 공포 없이 15분 만에 3구역을 비우는 디지털 대청소를 시작하세요.",
    "chip1": "5가지 시각 소음",
    "chip2": "3구역 15분 대청소",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 디지털 화면·파일 혼잡도 점검 (1 = 쾌적, 5 = 혼잡)",
    "step1Title": "기기를 켤 때마다 가장 먼저 시야를 답답하게 만드는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 지금 5분 안에 가장 먼저 비울 디지털 구역 1곳 (100% 로컬):",
    "ctaBtn": "내 15분 디지털 대청소 플랜 보기",
    "resultBadge": "2단계 • 분실 걱정 없는 15분 3구역 정리 순서",
    "noteTitle": "첫 5분 집중 정리 구역",
    "meterLabel": "디지털 시각 평온도",
    "scriptTitle": "삭제 불안 없이 비우는 1줄 아카이브 원칙",
    "stepsTitle": "15분 만에 화면을 되살리는 5-5-5 정리 순서",
    "stickyTitle": "지금 바로 15분 타이머를 켜고 한 번에 화면을 비워 볼까요?",
    "stickySub": "무료 15분 집중 타이머 바로가기",
    "stickyBtn": "15분 타이머 →",
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
    "title": "50个标签页与桌面15分钟数字断舍离 | DopaBrain",
    "heroTitle": "50个标签页与桌面15分钟数字断舍离",
    "heroLead": "无需担心误删，用日期归档箱5-5-5法15分钟清爽电脑与手机界面。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "タブ50個・デスクトップ15分デジタル大掃除 | DopaBrain",
    "heroTitle": "タブ50個・デスクトップ15分デジタル大掃除",
    "heroLead": "消す不安ゼロの一括アーカイブ5-5-5手順で15分で視界をすっきり整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Limpieza Digital de 15 Minutos (Pestañas y Escritorio) | DopaBrain",
    "heroTitle": "Limpieza Digital de 15 Minutos (Pestañas y Escritorio)",
    "heroLead": "Cierra 50 pestañas sin miedo a perder nada con el barrido de archivo en 3 zonas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Limpeza Digital de 15 Minutos (Abas e Área de Trabalho) | DopaBrain",
    "heroTitle": "Limpeza Digital de 15 Minutos (Abas e Área de Trabalho)",
    "heroLead": "Organize 50 abas e arquivos soltos sem medo de apagar nada em 3 etapas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "15-Minuten Digital-Entrümpelung (Tabs & Desktop) | DopaBrain",
    "heroTitle": "15-Minuten Digital-Entrümpelung (Tabs & Desktop)",
    "heroLead": "Schließe 50 Tabs ohne Löschangst dank 5-5-5-Archivordner für sofortige visuelle Ruhe.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Grand Ménage Numérique 15 Min (Onglets & Bureau) | DopaBrain",
    "heroTitle": "Grand Ménage Numérique 15 Min (Onglets & Bureau)",
    "heroLead": "Fermez 50 onglets sans crainte de perte grâce à la méthode archive 5-5-5.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "15-минутная цифровая уборка вкладок и рабочего стола | DopaBrain",
    "heroTitle": "15-минутная цифровая уборка вкладок и рабочего стола",
    "heroLead": "Закройте 50 вкладок без страха потерь с помощью архивации по схеме 5-5-5.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "15-मिनट डिजिटल वर्कस्पेस और टैब डीक्लटर | DopaBrain",
    "heroTitle": "15-मिनट डिजिटल वर्कस्पेस और टैब डीक्लटर",
    "heroLead": "बिना डेटा खोए एक आर्काइव फोल्डर से 50 टैब और डेस्कटॉप को 15 मिनट में साफ करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Rapikan Digital 15 Menit (Tab & Desktop) | DopaBrain",
    "heroTitle": "Reset Rapikan Digital 15 Menit (Tab & Desktop)",
    "heroLead": "Bersihkan puluhan tab terbuka dan desktop berantakan dalam 15 menit tanpa takut hilang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "15 Dakikalık Dijital Alan ve Sekme Temizliği | DopaBrain",
    "heroTitle": "15 Dakikalık Dijital Alan ve Sekme Temizliği",
    "heroLead": "Silme korkusu olmadan tarihli arşiv yöntemiyle 50 sekmeyi 15 dakikada rahatlatın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "tab_hoarding",
    "en": "40+ Open Tabs — Keeping unread articles open for months as \"guilt reminders\"",
    "ko": "40개+ 열린 탭 — 언젠가 읽겠다고 몇 달째 열어 둔 탭이 죄책감 목록이 됨"
  },
  {
    "id": "desktop_screenshot_pile",
    "en": "Desktop File Avalanche — 100+ untitled screenshots covering your wallpaper",
    "ko": "바탕화면 스크린샷 산더미 — 이름 없는 캡처 파일 100장이 배경을 뒤덮음"
  },
  {
    "id": "phone_home_chaos",
    "en": "Busy Phone Page 1 — 30 colorful apps and red badges competing for attention",
    "ko": "복잡한 스마트폰 첫 화면 — 30개 앱과 빨간 배지가 시선을 분산시킴"
  },
  {
    "id": "photo_download_bloat",
    "en": "Overflowing Downloads — Spending 5 minutes hunting every PDF or attachment",
    "ko": "다운로드 폴더 마비 — 파일 하나 찾느라 매번 5분씩 뒤적거림"
  },
  {
    "id": "fear_of_deleting",
    "en": "Fear of Deleting Anything — Hoarding clutter because \"what if I need that link someday?\"",
    "ko": "삭제 공포 — \"혹시 나중에 필요하면 어쩌지?\" 하며 아무것도 못 닫음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Visual Overload — Never Delete, Just Bulk-Park Into One Dated Archive Folder in 15 Min",
    "koT": "시각 과부하 높음 — 삭제 고민 대신 날짜 폴더 1개에 일괄 보관하는 5-5-5 대청소를 하세요",
    "enD": "Visual-attention research (McMains & Kastner) proves competing visual clutter directly reduces processing bandwidth. Moving everything into ONE dated \"Archive-2026-11\" folder bypasses deletion anxiety completely.",
    "koD": "시각 주의력 연구(McMains & Kastner)에 따르면 시야의 시각적 잡음이 많을수록 뇌의 처리 속도가 떨어집니다. 하나씩 지우려 하지 말고 \"2026-11-보관\" 폴더 1개에 통째로 옮기면 5분 만에 해결됩니다.",
    "enS": "\"Archive everything, delete nothing—zero loss, instant clean slate.\"",
    "koS": "\"삭제 고민은 0초, 날짜 폴더 1개에 통째로 보관해 단번에 깨끗한 화면을 만든다.\"",
    "enL": [
      "Min 0–5 (Browser): Bookmark all open tabs into one dated folder (\"Tabs-Nov-2026\") and close down to 3 active tabs.",
      "Min 5–10 (Desktop): Create one folder \"Desktop-Archive-2026\", select all stray desktop files, and drag them in cleanly.",
      "Min 10–15 (Phone): Move distracting apps off Page 1 and turn off non-human red notification badges."
    ],
    "koL": [
      "0~5분(브라우저): 열린 탭 전체를 \"2026-11-탭보관\" 북마크 폴더에 일괄 저장하고 현재 작업 3개만 남기기.",
      "5~10분(바탕화면): \"2026-11-바탕화면정리\" 폴더 1개를 만들어 흩어진 파일을 한 번에 쓸어 넣기.",
      "10~15분(스마트폰): 첫 화면에서 유혹 앱을 치우고 사람 연락 외 빨간 배지를 모두 끄기."
    ]
  },
  "mid": {
    "enT": "Light Digital Dust — Run a Weekly 5-Minute Friday Tab & Desktop Sweep",
    "koT": "가벼운 디지털 먼지 — 매주 금요일 5분 탭·바탕화면 정리만 붙이면 쾌적합니다",
    "enD": "Your workspace is mostly tidy; one tiny Friday habit stops tab sprawl permanently.",
    "koD": "꽤 깔끔한 편입니다. 금요일 퇴근 전 5분 쓸어 담기 습관만 들이면 늘 쾌적합니다.",
    "enS": "\"Clear screen Friday = calm focus Monday.\"",
    "koS": "\"금요일 5분 화면 비우기가 월요일 아침의 맑은 집중을 만든다.\"",
    "enL": [
      "Cap browser tabs to 10 visible tabs max.",
      "Empty Downloads into a monthly folder every Friday.",
      "Keep your desktop wallpaper calm and mostly empty."
    ],
    "koL": [
      "브라우저 탭은 최대 10개 이내로 유지해 보세요.",
      "매주 금요일 다운로드 폴더를 월별 폴더로 한 번에 옮기세요.",
      "바탕화면은 늘 90% 이상 비워 두어 시각적 휴식을 주세요."
    ]
  },
  "high": {
    "enT": "Minimalist Digital Zen — Crisp, Calm & Fast Workspace",
    "koT": "쾌적한 디지털 미니멀리즘 — 시야와 집중이 아주 맑습니다",
    "enD": "Your clean digital environment actively protects working memory and calm.",
    "koD": "깔끔한 디지털 환경이 작업 기억과 정서적 평온을 든든히 지켜 주고 있습니다.",
    "enS": "\"Every closed tab returns quiet mental space.\"",
    "koS": "\"닫힌 탭 하나마다 고요한 정신적 여백이 돌아온다.\"",
    "enL": [
      "Keep enjoying clean one-window deep work.",
      "Run a quick quarterly app & subscription trim.",
      "Protect peaceful phone Page 1 layouts."
    ],
    "koL": [
      "단일 창 딥워크 습관을 계속 즐기세요.",
      "분기마다 안 쓰는 앱과 구독을 가볍게 정리하세요.",
      "평온한 스마트폰 첫 화면 구성을 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_digital_declutter_15min_v1";
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
      window.gtag('event', "digital_declutter_15min_complete", {
        tool_slug: "digital-declutter-15min-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/digital-declutter-15min-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "digital-declutter-15min-reset",
        filename: 'dopabrain-digital-declutter-15min-reset-card.png',
        badge: "VISUAL CALM • 15-MINUTE DIGITAL WORKSPACE DECLUTTER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
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
