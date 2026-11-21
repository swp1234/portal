/* Morning Routine & Circadian Energy Architect
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Morning Routine & Circadian Energy Architect | DopaBrain",
    "metaDesc": "Free 12-language Morning Routine & Circadian Energy Architect. Audit 5 morning friction leaks (snoozing, immediate scrolling, caffeine timing) to build a realistic 20-minute high-energy launch sequence locally.",
    "keywords": "morning routine builder, circadian energy planner, stop morning grogginess, realistic morning routine, dopamine friendly morning, dopabrain",
    "kicker": "CIRCADIAN LAUNCH & ZERO-FRICTION ROUTINE",
    "heroTitle": "Morning Routine & Circadian Energy Architect",
    "heroLead": "You do not need an unrealistic 5 AM cold-plunge marathon. Rate 5 morning energy leaks locally to design a realistic 20-minute circadian launch routine that protects focus all afternoon.",
    "chip1": "5 Morning Leaks",
    "chip2": "20-Min Launch Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT YOUR FIRST 45 WAKING MINUTES (1 = RARELY, 5 = DAILY)",
    "step1Title": "Which morning friction traps drain your momentum before 10 AM?",
    "step1Sub": "Honest habits stay 100% browser-local.",
    "inputLabel": "Optional: My #1 non-negotiable 5-minute morning anchor (100% local):",
    "inputPlaceholder": "Example: Drink 1 full glass of water by the sunlit window before checking messages",
    "ctaBtn": "Design My 20-Min Circadian Morning",
    "resultBadge": "STEP 2 • YOUR 20-MINUTE CIRCADIAN LAUNCH SEQUENCE",
    "noteTitle": "My #1 Non-Negotiable Morning Anchor",
    "meterLabel": "Morning Energy Protection",
    "scriptTitle": "Your Low-Friction First-20-Minutes Sequence",
    "stepsTitle": "3 Science-Backed Circadian Tweaks",
    "stickyTitle": "Want to align bedtime & caffeine cutoff too?",
    "stickySub": "Calculate your 90-minute sleep cycles in our Sleep Chronotype Reset",
    "stickyBtn": "Sleep Reset →",
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
    "title": "모닝 루틴 & 생체리듬 에너지 아키텍트 (20분 시동 플랜) | DopaBrain",
    "metaDesc": "기상 직후 45분의 5가지 에너지 누수(스누즈·침대 폰 스크롤·즉시 카페인)를 점검하고, 무리 없는 20분 생체리듬 모닝 루틴을 로컬에서 설계하세요.",
    "kicker": "생체리듬 기상 & 무마찰 모닝 루틴 랩",
    "heroTitle": "모닝 루틴·생체리듬 에너지 아키텍트",
    "heroLead": "새벽 5시 미라클 모닝이 아니어도 됩니다. 기상 직후 45분의 5가지 에너지 누수를 점검해 오후 집중력까지 살려주는 현실적인 20분 생체리듬 시동 루틴을 설계하세요.",
    "chip1": "5가지 아침 누수 점검",
    "chip2": "20분 현실 모닝 플랜",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 기상 후 45분 에너지 누수 점검 (1 = 거의 없음, 5 = 매일)",
    "step1Title": "오전 10시 전부터 집중력을 깎아먹는 아침 습관은 무엇인가요?",
    "step1Sub": "모든 입력은 100% 브라우저 로컬에서만 처리됩니다.",
    "inputLabel": "선택: 내일 아침 반드시 지킬 5분 핵심 앵커 1가지 (100% 로컬):",
    "ctaBtn": "나의 20분 생체리듬 모닝 루틴 설계",
    "resultBadge": "2단계 • 나의 20분 생체리듬 시동 시퀀스",
    "noteTitle": "내일 아침 나의 #1 5분 핵심 앵커",
    "meterLabel": "아침 에너지 보호 지수",
    "scriptTitle": "기상 후 20분 무마찰 시동 시퀀스",
    "stepsTitle": "오후 피로를 줄이는 3가지 생체시계 조정",
    "stickyTitle": "취침 시간과 카페인 컷오프도 함께 맞추고 싶나요?",
    "stickySub": "수면 크로노타입 리셋에서 90분 수면 사이클을 계산해 보세요",
    "stickyBtn": "수면 리셋 →",
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
    "title": "晨间习惯与昼夜节律能量架构师 | DopaBrain",
    "heroTitle": "晨间能量与20分钟启动计划",
    "ctaBtn": "定制我的20分钟晨间流程",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "モーニングルーティン＆体内時計エネルギー設計 | DopaBrain",
    "heroTitle": "20分体内時計モーニング設計",
    "ctaBtn": "20分モーニングプランを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Arquitecto de Rutina Matutina y Energía Circadiana | DopaBrain",
    "heroTitle": "Rutina Matutina (20 Min)",
    "ctaBtn": "Diseñar mi mañana de 20 min",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Arquiteto de Rotina Matinal e Energia Circadiana | DopaBrain",
    "heroTitle": "Rotina Matinal (20 Min)",
    "ctaBtn": "Criar minha manhã de 20 min",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Morgenroutine & Zirkadianer Energie-Architekt | DopaBrain",
    "heroTitle": "20-Min Morgen-Energie Planer",
    "ctaBtn": "Meine 20-Min-Routine bauen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Architecte Routine Matinale & Énergie Circadienne | DopaBrain",
    "heroTitle": "Routine Matinale (20 Min)",
    "ctaBtn": "Créer ma routine 20 min",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Архитектор утренней рутины и циркадной энергии | DopaBrain",
    "heroTitle": "Утренняя энергия (20 мин)",
    "ctaBtn": "Создать план на 20 минут",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "मॉर्निंग रूटीन और सर्केडियन एनर्जी आर्किटेक्ट | DopaBrain",
    "heroTitle": "20-मिनट मॉर्निंग रूटीन प्लानर",
    "ctaBtn": "मेरा 20-मिनट रूटीन बनाएँ",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Arsitek Rutinitas Pagi & Energi Sirkadian | DopaBrain",
    "heroTitle": "Rutinitas Pagi 20 Menit",
    "ctaBtn": "Rancang Pagi 20 Menit",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sabah Rutini ve Sirkadiyen Enerji Mimarı | DopaBrain",
    "heroTitle": "20 Dakikalık Sabah Rutini",
    "ctaBtn": "20dk Sabah Planı Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "bed_scroll",
    "en": "Immediate Bed Scrolling — Checking feeds/news within 2 minutes of waking",
    "ko": "기상 즉시 폰 스크롤 — 눈 뜨자마자 침대에서 2분 안에 피드·뉴스 확인"
  },
  {
    "id": "snooze",
    "en": "Multi-Snooze Fragmentation — Hitting snooze 2+ times creating sleep inertia",
    "ko": "알람 스누즈 반복 — 5~10분 간격 재알람으로 수면 관성·멍함 심화"
  },
  {
    "id": "dim_room",
    "en": "Zero Morning Daylight — Staying in dim indoor light past 9 AM",
    "ko": "아침 자연광 부족 — 기상 후 커튼을 닫아두고 어두운 실내에 머묾"
  },
  {
    "id": "instant_caffeine",
    "en": "Immediate Empty-Stomach Caffeine — Drinking coffee within 15 min of waking",
    "ko": "기상 직후 공복 카페인 — 눈 뜨자마자 커피를 마셔 오후 급피로 유발"
  },
  {
    "id": "no_plan",
    "en": "Reactive Inbox Start — Letting other people’s messages dictate the first hour",
    "ko": "수동적 업무 시작 — 내 우선순위 대신 남의 메시지·알림부터 처리"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Morning Friction — Start With a 3-Step 10-Minute Floor",
    "koT": "높은 아침 마찰 — 부담 없는 \"10분 최소 시퀀스\"부터 시작하세요",
    "enD": "Fragmented wake-ups and instant scrolling flood your brain with reactive stress before your cortisol rhythm stabilizes. Keep tomorrow dead-simple.",
    "koD": "스누즈와 기상 직후 스크롤이 생체시계가 켜지기도 전에 뇌를 수동 반응 모드로 몰아넣고 있습니다. 내일은 딱 3가지 10분 루틴만 지키세요.",
    "enS": "Min 0–2: Feet on floor + 1 glass of water • Min 2–7: Open curtains / step near daylight • Min 7–10: Pick your #1 focus block BEFORE opening feeds.",
    "koS": "0~2분: 기상 즉시 물 한 잔 • 2~7분: 커튼 열고 자연광 5분 쬐기 • 7~10분: 피드·메신저 열기 전 오늘 핵심 1가지만 확인.",
    "enL": [
      "Charge your phone across the room tonight so snoozing and bed-scrolling require standing up.",
      "Get 5 minutes of outdoor or window daylight within 30 minutes of waking to anchor your circadian clock.",
      "Delay coffee 45–60 minutes after waking (water first) to soften the 2 PM energy crash."
    ],
    "koL": [
      "오늘 밤 충전기를 침대에서 떨어진 곳에 두어 스누즈와 침대 폰을 물리적으로 끊으세요.",
      "기상 30분 내 5분간 창가·야외 자연광을 쬐어 생체시계와 밤 수면 타이머를 맞추세요.",
      "기상 직후엔 물부터 마시고 커피는 45~60분 뒤에 마셔 오후 2시 피로 추락을 줄이세요."
    ]
  },
  "mid": {
    "enT": "Solid Foundation — Two Small Tweaks Unlock Afternoon Clarity",
    "koT": "탄탄한 기초 — 2가지 작은 조정으로 오후 집중력을 끌어올리세요",
    "enD": "You already protect part of your morning. Locking in morning daylight and a 25-minute proactive focus block before inbox triage multiplies daily output.",
    "koD": "이미 좋은 기반이 있습니다. 아침 자연광과 메신저 확인 전 25분 주도적 집중 블록만 더하면 하루 체감 에너지가 확 달라집니다.",
    "enS": "Min 0–5: Water + stretch by sunlit window • Min 5–15: Light movement/shower • Min 15–20: Start your #1 priority before opening chat or email.",
    "koS": "0~5분: 물 한 잔 + 창가 스트레칭 • 5~15분: 가벼운 움직임·세면 • 15~20분: 메신저 열기 전 오늘 #1 핵심 업무 바로 착수.",
    "enL": [
      "Set one visual cue the night before (water glass + sticky note with tomorrow’s #1 task).",
      "Keep notifications muted during the first 30 minutes of your workday.",
      "Track morning energy vs. bedtime once this week to spot your sweet spot."
    ],
    "koL": [
      "전날 밤 책상에 물컵과 내일 #1 핵심 메모를 미리 올려두세요.",
      "업무 시작 첫 30분은 알림을 꺼두고 내 페이스를 먼저 잡으세요.",
      "이번 주 취침 시각과 다음 날 아침 컨디션의 연결을 가볍게 관찰해 보세요."
    ]
  },
  "high": {
    "enT": "High-Clarity Circadian Launch — Maintain Your Winning Rhythm",
    "koT": "최적화된 생체리듬 기상 — 지금의 훌륭한 루틴을 유지하세요",
    "enD": "Your morning protects both autonomic energy and proactive focus. Keep it flexible so travel or busy weeks never trigger all-or-nothing restarts.",
    "koD": "생체시계와 주도적 집중력을 모두 지키는 훌륭한 아침 구조입니다. 바쁜 날에도 5분 축소 버전으로 유연하게 이어가세요.",
    "enS": "Keep your 20-minute anchor steady—and on hectic mornings, honor the 5-minute \"water + daylight\" minimum floor.",
    "koS": "지금의 20분 루틴을 유지하되, 유난히 바쁜 날엔 \"물 + 자연광 5분\" 최소 버전만 지켜도 완벽합니다.",
    "enL": [
      "Protect your evening wind-down—great mornings begin 90 minutes before sleep.",
      "Use your cleanest first 90 minutes for creative or high-leverage deep work.",
      "Keep a 5-minute travel/sick-day version so streaks never break from perfectionism."
    ],
    "koL": [
      "좋은 아침은 전날 밤 90분 전부터 시작됩니다—저녁 디지털 일몰을 함께 지키세요.",
      "기상 후 가장 맑은 첫 90분을 가장 가치 높은 몰입 업무에 배치하세요.",
      "출장이나 피곤한 날을 위한 5분 축소 버전을 정해두어 완벽주의 포기를 막으세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_morning_arch_v1";
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
      window.gtag('event', "morning_architect_complete", {
        tool_slug: "morning-energy-architect",
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
      var shareUrl = "https://dopabrain.com/portal/tools/morning-energy-architect.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "morning-energy-architect",
        filename: 'dopabrain-morning-energy-architect-card.png',
        badge: "CIRCADIAN LAUNCH & ZERO-FRICTION ROUTINE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#eab308",
        accent2: "#10b981"
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
