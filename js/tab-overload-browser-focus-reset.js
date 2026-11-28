/* 50-Tab Browser Overload & Single-Task Focus Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "50-Tab Browser Overload & Single-Task Focus Reset | DopaBrain",
    "metaDesc": "47 tiny favicons silently screaming for your attention while you stall on one task? Audit 5 tab-hoarding traps locally and run a guilt-free 3-minute Parking Folder reset.",
    "kicker": "DIGITAL FOCUS • 50-TAB BROWSER OVERLOAD RESET",
    "heroTitle": "50-Tab Browser Overload & Single-Task Focus Reset",
    "heroLead": "47 tiny favicons silently screaming for your attention while you stall on one task? Audit 5 tab-hoarding traps locally and run a guilt-free 3-minute Parking Folder reset.",
    "chip1": "5 Tab Traps",
    "chip2": "3-Tab Rule",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR BROWSER TAB FRICTION (1 = CLEAN, 5 = 50+ TABS)",
    "step1Title": "Why do dozens of open tabs quietly drain your brain?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONLY 1–3 tabs I actually need open for the next 30 minutes (100% local):",
    "ctaBtn": "Build My 3-Minute Tab Reset Protocol",
    "resultBadge": "STEP 2 • YOUR ZERO-GUILT 3-TAB FOCUS PROTOCOL",
    "noteTitle": "My Active 30-Min Tabs",
    "meterLabel": "Screen Clarity Score",
    "scriptTitle": "Zero-Loss Permission Rule (Ends \"What If I Need It?\" Fear)",
    "stepsTitle": "3 Moves to Collapse 50 Tabs Into Calm Focus in 180 Seconds",
    "stickyTitle": "Now that your screen is clean, lock in one 25-minute sprint.",
    "stickySub": "Launch the free Pomodoro Focus Timer",
    "stickyBtn": "Start 25-Min Focus →",
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
    "title": "브라우저 탭 50개 과부하 정리 & 3탭 단일 집중 리셋 | DopaBrain",
    "metaDesc": "열려 있는 브라우저 탭 47개가 눈앞에서 주의력을 갉아먹고 있나요? 5가지 탭 축적 습관을 점검하고 죄책감 없는 3분 \"보관 폴더\" 리셋으로 3탭 집중 모드를 되찾으세요.",
    "kicker": "디지털 집중력 · 50개 브라우저 탭 과부하 & 3탭 집중 리셋",
    "heroTitle": "브라우저 탭 50개 과부하 정리 & 3탭 단일 집중 리셋",
    "heroLead": "열려 있는 브라우저 탭 47개가 눈앞에서 주의력을 갉아먹고 있나요? 5가지 탭 축적 습관을 점검하고 죄책감 없는 3분 \"보관 폴더\" 리셋으로 3탭 집중 모드를 되찾으세요.",
    "chip1": "5가지 탭 함정",
    "chip2": "3탭 집중 법칙",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 브라우저 탭 과부하·주의 분산 점검 (1 = 깔끔, 5 = 50개 이상)",
    "step1Title": "수십 개의 열린 탭이 집중력을 빼앗는 주된 패턴은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 앞으로 30분 동안 정말 필요한 딱 1~3개 탭만 적어 두기 (100% 로컬):",
    "ctaBtn": "내 3분 브라우저 탭 리셋 프로토콜 보기",
    "resultBadge": "2단계 • 죄책감 없는 3탭 단일 집중 프로토콜",
    "noteTitle": "지금 30분 핵심 허용 탭",
    "meterLabel": "화면 명료도 지수",
    "scriptTitle": "\"나중에 필요할까 봐\" 불안을 끝내는 무손실 정리 원칙",
    "stepsTitle": "3분 만에 50개 탭을 차분한 집중 화면으로 줄이는 3단계",
    "stickyTitle": "화면이 깔끔해졌다면 바로 25분 집중 타이머로 1개만 끝내 보세요.",
    "stickySub": "무료 25분 뽀모도로 타이머 시작",
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
    "title": "浏览器50标签页过载与3标签专注重置 | DopaBrain",
    "heroTitle": "浏览器50标签页过载与3标签专注重置",
    "heroLead": "用零丢失一键归档法在3分钟内清理50个混乱标签，恢复单任务专注。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "ブラウザタブ50個過負荷＆3タブリセット | DopaBrain",
    "heroTitle": "ブラウザタブ50個過負荷＆3タブリセット",
    "heroLead": "全タブ一括保存で不安なく50タブを閉じ、3分で静かな集中画面を取り戻します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reinicio de Sobrecarga de 50 Pestañas del Navegador | DopaBrain",
    "heroTitle": "Reinicio de Sobrecarga de 50 Pestañas del Navegador",
    "heroLead": "Archiva todas tus pestañas sin perder nada y recupera el enfoque con máximo 3 pestañas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Sobrecarga de 50 Abas e Foco Único | DopaBrain",
    "heroTitle": "Reset de Sobrecarga de 50 Abas e Foco Único",
    "heroLead": "Salve todas as abas em uma pasta sem culpa e volte a focar com apenas 3 abas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "50-Tabs-Überlastung & 3-Tab-Fokus-Reset | DopaBrain",
    "heroTitle": "50-Tabs-Überlastung & 3-Tab-Fokus-Reset",
    "heroLead": "Sichere alle offenen Tabs verlustfrei in 5 Sekunden und schaffe sofort Ruhe im Browser.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Surcharge 50 Onglets & Focus 3 Onglets | DopaBrain",
    "heroTitle": "Reset Surcharge 50 Onglets & Focus 3 Onglets",
    "heroLead": "Archivez tous vos onglets sans rien perdre en 5 secondes et retrouvez un écran clair.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс перегрузки 50 вкладок браузера и фокус 3 вкладок | DopaBrain",
    "heroTitle": "Сброс перегрузки 50 вкладок браузера и фокус 3 вкладок",
    "heroLead": "Сохраните все вкладки в папку без потерь за 5 секунд и верните ясный фокус.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "50-टैब ब्राउज़र ओवरलोड और 3-टैब फोकस रीसेट | DopaBrain",
    "heroTitle": "50-टैब ब्राउज़र ओवरलोड और 3-टैब फोकस रीसेट",
    "heroLead": "बिना लिंक खोए 50 खुले टैब 3 मिनट में समेटें और शांत एकाग्रता पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Kelebihan 50 Tab Browser & Fokus 3 Tab | DopaBrain",
    "heroTitle": "Reset Kelebihan 50 Tab Browser & Fokus 3 Tab",
    "heroLead": "Simpan semua tab ke folder parkir tanpa takut hilang dan pulihkan fokus dalam 3 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "50 Sekme Yükü ve 3 Sekme Odak Sıfırlama | DopaBrain",
    "heroTitle": "50 Sekme Yükü ve 3 Sekme Odak Sıfırlama",
    "heroLead": "Tüm sekmeleri kayıpsız klasörleyip 3 dakikada sakin tek görev odağına dönün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "tabs_as_todolist",
    "en": "Tabs as a Chaotic To-Do List — Leaving 30 articles open hoping sight equals action",
    "ko": "탭=할일 목록 착각 — 열어 두면 언젠가 읽겠지 하며 30개씩 쌓아 둠"
  },
  {
    "id": "close_fear_fomo",
    "en": "Bookmark FOMO — Feeling anxious closing a tab even if untouched for 2 weeks",
    "ko": "닫기 불안(FOMO) — 2주째 안 본 탭인데도 닫으면 손해 볼 것 같아 못 닫음"
  },
  {
    "id": "chat_email_pinned",
    "en": "Always-Visible Chat/Mail Badges — Watching red unread dots pull eyes every 4 minutes",
    "ko": "메신저·메일 상시 노출 — 빨간 숫자 배지가 4분마다 시선을 빼앗음"
  },
  {
    "id": "rabbit_hole_spawning",
    "en": "Curiosity Rabbit Holes — Opening 8 research links mid-task and forgetting the original goal",
    "ko": "꼬리물기 검색 — 작업 중 궁금한 링크 8개를 새 탭으로 열다 원래 일을 잊음"
  },
  {
    "id": "ram_and_brain_lag",
    "en": "Visual Noise Exhaustion — Feeling tired just looking at tiny unreadable tab icons",
    "ko": "시각 소음 피로 — 글자도 안 보이는 작은 탭 아이콘들만 봐도 머리가 무거움"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Tab Overload — Run \"Bookmark All Tabs → Fresh Window\" Right Now (Zero Loss)",
    "koT": "탭 과부하 높음 — 지금 즉시 \"모든 탭 폴더 저장 → 새 창 1개\"로 무손실 초기화하세요",
    "enD": "Visual-clutter attention studies (McMains & Kastner) show competing items in your field of view continuously drain visual cortex bandwidth. Saving all open tabs into a dated folder (\"Park-Nov28\") satisfies FOMO in 5 seconds so you can close 45 tabs guilt-free.",
    "koD": "시각 주의력 연구에 따르면 시야에 경쟁 자극이 많을수록 뇌의 작업 대역폭이 계속 소모됩니다. \"모든 탭을 날짜 폴더로 저장(Ctrl+Shift+D)\" 후 새 창에 핵심 1~3탭만 열면 1개도 잃지 않고 5초 만에 시야가 트입니다.",
    "enS": "\"Ctrl+Shift+D (Bookmark All Open Tabs to today’s Park folder) → Open 1 clean window → Keep max 3 tabs for this sprint.\"",
    "koS": "\"Ctrl+Shift+D(열린 탭 전체 오늘 날짜 폴더 저장) → 깨끗한 새 창 1개 열기 → 이번 30분은 최대 3탭만 유지!\"",
    "enL": [
      "Press Ctrl+Shift+D (Cmd+Shift+D on Mac) to save every open tab into one dated Parking folder—nothing is lost.",
      "Close the old 50-tab window and open a fresh window with ONLY the 1–3 tabs for your active task.",
      "Move Slack, email, and social feeds to a separate minimized window so red badges never sit in your sightline."
    ],
    "koL": [
      "Ctrl+Shift+D(맥 Cmd+Shift+D)로 열린 탭을 오늘 날짜 폴더에 한 번에 보관하세요—절대 잃어버리지 않습니다.",
      "기존 50탭 창을 닫고 지금 할 일에 꼭 필요한 1~3개 탭만 새 창에 띄우세요.",
      "메신저·메일은 별도 창으로 분리해 최소화하고 작업 중 시야에서 치워 두세요."
    ]
  },
  "mid": {
    "enT": "Moderate Tab Creep — Split Active Work & Reference Into Two Windows",
    "koT": "중간 탭 누적 — 작업 창과 참고 창을 2개로 분리해 시야를 비우세요",
    "enD": "Keeping under 6 active tabs preserves speed without feeling restrictive.",
    "koD": "적정선 가까이 있습니다. 작업 창은 6탭 이하로 유지하면 몰입감이 확 올라갑니다.",
    "enS": "\"One window for creating, one tucked window for reference.\"",
    "koS": "\"만드는 창 1개, 참고 자료 창 1개를 분리해 둔다.\"",
    "enL": [
      "Do a 60-second tab sweep at lunch and 5 PM.",
      "Close finished search tabs immediately.",
      "Use full-screen mode for writing or coding."
    ],
    "koL": [
      "점심 전과 퇴근 전 60초 탭 정리를 습관화하세요.",
      "해결된 검색 탭은 바로 닫아 주세요.",
      "글쓰기·코딩할 때는 전체 화면 모드를 활용해 보세요."
    ]
  },
  "high": {
    "enT": "Crisp Digital Workspace — Clean Visual Focus",
    "koT": "깔끔한 디지털 작업대 — 시야 방해 없는 높은 집중력",
    "enD": "Your browser serves your task instead of scattering your attention.",
    "koD": "브라우저가 주의력을 흩뜨리지 않고 일의 도구로 깔끔하게 기능하고 있습니다.",
    "enS": "\"Calm screen, calm mind.\"",
    "koS": "\"화면이 고요하면 생각도 또렷해진다.\"",
    "enL": [
      "Keep ending days with a clean tab bar.",
      "Continue separating communication from deep work.",
      "Park cool articles into one weekly reading folder."
    ],
    "koL": [
      "하루를 빈 탭바로 마무리하는 습관을 유지하세요.",
      "소통 창과 집중 창의 분리를 계속 지켜 주세요.",
      "흥미로운 글은 주간 읽기 폴더 1곳에만 모아 두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_tab_overload_v1";
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
      window.gtag('event', "tab_overload_reset_complete", {
        tool_slug: "tab-overload-browser-focus-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/tab-overload-browser-focus-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "tab-overload-browser-focus-reset",
        filename: 'dopabrain-tab-overload-browser-focus-reset-card.png',
        badge: "DIGITAL FOCUS • 50-TAB BROWSER OVERLOAD RESET",
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
