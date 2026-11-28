/* Sleep-Tracker Score Anxiety (Orthosomnia) Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Sleep-Tracker Score Anxiety (Orthosomnia) Reset | DopaBrain",
    "metaDesc": "Waking up feeling fine—until your watch flashes \"Sleep Score: 58\" and ruins your whole morning? Break wearable sleep perfectionism with a 7-Day Body-First Check locally.",
    "kicker": "SLEEP CALM • WEARABLE SLEEP-SCORE ANXIETY (ORTHOSOMNIA) RESET",
    "heroTitle": "Sleep-Tracker Score Anxiety (Orthosomnia) Reset",
    "heroLead": "Waking up feeling fine—until your watch flashes \"Sleep Score: 58\" and ruins your whole morning? Break wearable sleep perfectionism with a 7-Day Body-First Check locally.",
    "chip1": "5 Tracker Loops",
    "chip2": "7-Day Score Detox",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR SLEEP-DATA ANXIETY SIGNALS (1 = RELAXED, 5 = OBSESSED)",
    "step1Title": "How is sleep tracking accidentally making your sleep feel harder?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One body-first morning check I will use BEFORE looking at any app (100% local):",
    "ctaBtn": "Build My Orthosomnia Calm Reset",
    "resultBadge": "STEP 2 • YOUR BODY-FIRST SLEEP TRUST PROTOCOL",
    "noteTitle": "My Body-First Morning Check",
    "meterLabel": "Tracker-Free Sleep Peace",
    "scriptTitle": "Evidence-Based Truth About Consumer Sleep Scores",
    "stepsTitle": "3 Steps to Reclaim Natural, Unmeasured Sleep Trust",
    "stickyTitle": "Swap bedtime data-checking for gentle rain or brown noise tonight?",
    "stickySub": "Open the free Rain & Brown Noise Mixer",
    "stickyBtn": "Play Rain Audio →",
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
    "title": "스마트워치·수면 앱 점수 강박(오르소솜니아) 해제 & 편안한 수면 리셋 | DopaBrain",
    "metaDesc": "아침에 꽤 개운하게 일어났는데 워치의 \"수면 점수 58점\"을 본 순간 하루 종일 피곤해진 기분이 드시나요? 7일 체감 우선 리셋으로 수면 점수 강박(오르소솜니아)에서 벗어나세요.",
    "kicker": "수면 평온 · 스마트워치 수면 점수 강박(오르소솜니아) 해제 & 체감 회복 리셋",
    "heroTitle": "스마트워치·수면 앱 점수 강박(오르소솜니아) 해제 & 편안한 수면 리셋",
    "heroLead": "아침에 꽤 개운하게 일어났는데 워치의 \"수면 점수 58점\"을 본 순간 하루 종일 피곤해진 기분이 드시나요? 7일 체감 우선 리셋으로 수면 점수 강박(오르소솜니아)에서 벗어나세요.",
    "chip1": "5가지 점수 강박",
    "chip2": "7일 점수 디톡스",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 수면 트래커·점수 집착 신호 점검 (1 = 여유, 5 = 강박)",
    "step1Title": "수면 측정 앱·워치가 오히려 수면 스트레스를 키우는 패턴은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 앱을 열기 전에 내 몸 상태를 먼저 확인하는 나만의 기준 1가지 (100% 로컬):",
    "ctaBtn": "내 수면 점수 강박 해제 플랜 보기",
    "resultBadge": "2단계 • 숫자보다 내 몸을 믿는 수면 회복 프로토콜",
    "noteTitle": "내 아침 체감 확인 기준",
    "meterLabel": "점수 해방 수면 평온도",
    "scriptTitle": "스마트워치 수면 점수에 대한 과학적 현실 문장",
    "stepsTitle": "자연스러운 수면 신뢰를 되찾는 3가지 실천",
    "stickyTitle": "오늘 밤은 수면 점수 걱정 대신 잔잔한 빗소리로 편히 잠들어 볼까요?",
    "stickySub": "무료 빗소리·백색소음 플레이어 열기",
    "stickyBtn": "빗소리 켜기 →",
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
    "title": "智能手表睡眠评分焦虑（完美睡眠强迫）重置 | DopaBrain",
    "heroTitle": "智能手表睡眠评分焦虑（完美睡眠强迫）重置",
    "heroLead": "打破低分反安慰剂效应，用7天身体体感优先实验告别睡前数据内耗。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "睡眠トラッカー点数不安（オルソソムニア）リセット | DopaBrain",
    "heroTitle": "睡眠トラッカー点数不安（オルソソムニア）リセット",
    "heroLead": "朝の低い睡眠スコアに振り回される不安を手放し、7日間の体感重視リセットで安眠を取り戻します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reset de Ansiedad por Puntuación de Sueño (Ortosomnia) | DopaBrain",
    "heroTitle": "Reset de Ansiedad por Puntuación de Sueño (Ortosomnia)",
    "heroLead": "Rompe la obsesión por los gráficos del reloj inteligente con un reset corporal de 7 días.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Ansiedade por Nota de Sono (Ortossomnia) | DopaBrain",
    "heroTitle": "Reset de Ansiedade por Nota de Sono (Ortossomnia)",
    "heroLead": "Quebre o perfeccionismo do relógio inteligente com um detox de 7 dias guiado pelo corpo.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Schlaftracker-Score-Angst (Orthosomnie) Reset | DopaBrain",
    "heroTitle": "Schlaftracker-Score-Angst (Orthosomnie) Reset",
    "heroLead": "Beende den Smartwatch-Schlafnoten-Stress mit einem 7-Tage-Körpergefühl-Reset.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Anxiété Score de Sommeil (Orthosomnie) | DopaBrain",
    "heroTitle": "Reset Anxiété Score de Sommeil (Orthosomnie)",
    "heroLead": "Sortez du perfectionnisme des montres connectées avec un reset ressenti de 7 jours.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс тревоги из-за оценок трекера сна (ортосомния) | DopaBrain",
    "heroTitle": "Сброс тревоги из-за оценок трекера сна (ортосомния)",
    "heroLead": "Остановите перфекционизм вокруг баллов часов 7-дневным тестом доверия телу.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "स्लीप-ट्रैकर स्कोर एंग्ज़ायटी (ऑर्थोसोम्निया) रीसेट | DopaBrain",
    "heroTitle": "स्लीप-ट्रैकर स्कोर एंग्ज़ायटी (ऑर्थोसोम्निया) रीसेट",
    "heroLead": "स्मार्टवॉच के कम स्लीप स्कोर तनाव को 7-दिन के बॉडी-फर्स्ट रीसेट से शांत करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Cemas Skor Tidur Smartwatch (Orthosomnia) | DopaBrain",
    "heroTitle": "Reset Cemas Skor Tidur Smartwatch (Orthosomnia)",
    "heroLead": "Hentikan stres melihat skor tidur rendah dengan reset 7 hari berbasis rasa tubuh.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Uyku Takip Skoru Kaygısı (Ortosomni) Sıfırlama | DopaBrain",
    "heroTitle": "Uyku Takip Skoru Kaygısı (Ortosomni) Sıfırlama",
    "heroLead": "Akıllı saat uyku puanı takıntısını 7 günlük beden odaklı güven deneyiyle bırakın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "nocebo_morning_score",
    "en": "Morning Score Nocebo — Feeling okay until a low app score instantly makes you feel exhausted",
    "ko": "아침 점수 노시보 — 멀쩡히 일어났다가 낮은 수면 점수를 보는 순간 갑자기 피곤해짐"
  },
  {
    "id": "rem_deep_obsession",
    "en": "Stage-Graph Worrying — Stressing over wrist-estimated \"Deep Sleep %\" or \"REM minutes\"",
    "ko": "REM·깊은잠 그래프 집착 — 손목 추정치인 깊은 수면 분 수에 과도하게 불안해함"
  },
  {
    "id": "bedtime_performance",
    "en": "Trying Harder to Score 90 — Lying tense in bed trying to \"optimize\" tonight’s readiness score",
    "ko": "90점 압박 — 내일 높은 점수를 받으려고 애쓰다 오히려 긴장해서 잠이 안 옴"
  },
  {
    "id": "midnight_check_habit",
    "en": "Nighttime Watch Glances — Lighting up your wrist at 2 AM to see how much sleep you logged",
    "ko": "새벽 워치 확인 — 새벽 2시에 시계 화면을 켜서 지금까지 잔 시간을 확인함"
  },
  {
    "id": "ignoring_actual_energy",
    "en": "Distrusting Your Own Body — Trusting an opaque algorithm over how clear you actually feel",
    "ko": "내 몸 감각 불신 — 실제 내 컨디션보다 불투명한 앱 점수를 더 믿어 버림"
  }
];
  var TIERS = {
  "low": {
    "enT": "Active Orthosomnia — Try a 7-Day \"No-Score Morning\" or Take the Watch Off at Night",
    "koT": "수면 점수 강박 높음 — 7일간 밤에 워치를 벗거나 아침 점수 확인을 쉬어 보세요",
    "enD": "Sleep researchers (Baron et al., 2017) coined \"orthosomnia\" for perfectionistic pursuit of ideal wearable sleep scores—wrist devices cannot measure brainwaves (EEG) accurately, and placebo/nocebo studies show a fake low score measurably worsens daytime alertness.",
    "koD": "수면의학 연구진(Baron et al., 2017)은 완벽한 수면 점수에 집착해 오히려 불면이 심해지는 현상을 \"오르소솜니아(Orthosomnia)\"라 명명했습니다. 손목 기기는 뇌파를 직접 재지 못하며, 낮은 점수를 보는 것 자체가 낮 피로를 키우는 노시보 효과를 일으킵니다.",
    "enS": "\"My watch guesses sleep from wrist motion; my actual morning clarity after sunlight and water is a far better measure of recovery.\"",
    "koS": "\"워치는 손목 움직임으로 수면을 추정할 뿐이다. 물 한 잔과 햇빛을 쬔 뒤 내 몸이 느끼는 개운함이 훨씬 정확한 지표다.\"",
    "enL": [
      "Try a 7-night experiment: charge your watch on your desk overnight (or turn off morning readiness push alerts).",
      "Check how your body actually feels 30 minutes after waking (water + daylight) BEFORE ever glancing at an app.",
      "If you keep tracking, look only at 14-day bedtime consistency trends—never single-night REM/Deep percentages."
    ],
    "koL": [
      "7일만 밤에 워치를 책상 위에서 충전하거나 아침 수면 점수 푸시 알림을 꺼 두세요.",
      "기상 후 30분(물 한 잔 + 햇빛) 뒤에 내 몸의 실제 컨디션을 먼저 느껴 보세요.",
      "측정을 유지하더라도 하루치 REM/깊은잠 % 대신 2주 단위 취침 시각 일관성만 가볍게 참고하세요."
    ]
  },
  "mid": {
    "enT": "Mild Score Sensitivity — Mute Morning Score Alerts & Look Weekly Instead of Daily",
    "koT": "가벼운 점수 민감성 — 매일 아침 확인 대신 주 1회 추세만 가볍게 보세요",
    "enD": "Checking weekly trends removes daily nocebo dips while keeping useful bedtime awareness.",
    "koD": "매일 점수 대신 주간 리듬만 봐도 아침 기분이 훨씬 가벼워집니다.",
    "enS": "\"My body decides how rested I feel—not a morning badge.\"",
    "koS": "\"오늘의 컨디션은 앱 점수가 아니라 내 몸이 결정한다.\"",
    "enL": [
      "Disable \"Sleep Score Ready\" morning push notifications.",
      "Put watch in Theater/Sleep Mode so screen stays dark at night.",
      "Focus on enjoyable wind-down rather than hitting a numeric target."
    ],
    "koL": [
      "아침 \"수면 점수 도착\" 푸시 알림을 끄세요.",
      "밤중 화면이 켜지지 않도록 수면/극장 모드를 켜 두세요.",
      "숫자 목표 대신 편안한 취침 의식 자체에 집중하세요."
    ]
  },
  "high": {
    "enT": "Healthy Body-First Sleep Trust — Zero Data Pressure",
    "koT": "건강한 체감 중심 수면 신뢰 — 숫자 압박 제로",
    "enD": "You treat wearable metrics as loose curiosity rather than a daily grade.",
    "koD": "수면 데이터를 성적표가 아닌 가벼운 참고치로 건강하게 다루고 있습니다.",
    "enS": "\"Sleep is a gentle biological rhythm, never a graded exam.\"",
    "koS": "\"수면은 채점받는 시험이 아니라 자연스러운 생체 리듬이다.\"",
    "enL": [
      "Keep mornings grounded in light and hydration.",
      "Take periodic tracker-free weekends.",
      "Trust steady habits over nightly graphs."
    ],
    "koL": [
      "아침은 햇빛과 물 한 잔으로 가볍게 시작하세요.",
      "가끔 주말엔 워치 없이 자유롭게 쉬어 보세요.",
      "하루치 그래프보다 꾸준한 생활 리듬을 믿으세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_orthosomnia_v1";
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
      window.gtag('event', "orthosomnia_reset_complete", {
        tool_slug: "sleep-tracker-orthosomnia-calm-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/sleep-tracker-orthosomnia-calm-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "sleep-tracker-orthosomnia-calm-reset",
        filename: 'dopabrain-sleep-tracker-orthosomnia-calm-reset-card.png',
        badge: "SLEEP CALM • WEARABLE SLEEP-SCORE ANXIETY (ORTHOSOMNIA) RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
        accent2: "#14b8a6"
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
