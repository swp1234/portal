/* 48-Hour Realistic Dopamine Detox Weekend Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "48-Hour Realistic Dopamine Detox Weekend Planner | DopaBrain",
    "metaDesc": "Tired of extreme monk-mode detoxes that fail by Saturday noon? Audit 5 high-stimulation reward loops locally and build a sustainable 48-hour low-stim weekend reset.",
    "kicker": "DIGITAL RESET • 48-HOUR DOPAMINE DETOX PLANNER",
    "heroTitle": "48-Hour Realistic Dopamine Detox Weekend Planner",
    "heroLead": "Tired of extreme monk-mode detoxes that fail by Saturday noon? Audit 5 high-stimulation reward loops locally and build a sustainable 48-hour low-stim weekend reset.",
    "chip1": "5 Reward Loops",
    "chip2": "48h Swap Card",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR WEEKLY OVERSTIMULATION LOOPS (1 = CALM, 5 = COMPULSIVE)",
    "step1Title": "Which rapid-reward habits hijack your attention most?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One offline activity I actually look forward to this weekend (100% local):",
    "ctaBtn": "Build My 48-Hour Dopamine Reset Plan",
    "resultBadge": "STEP 2 • YOUR SUSTAINABLE 48-HOUR DOPAMINE RESET",
    "noteTitle": "My Weekend Offline Anchor",
    "meterLabel": "Baseline Attention Calm",
    "scriptTitle": "Weekend Self-Commitment Cue",
    "stepsTitle": "3 Realistic Rules That Make a 48-Hour Reset Stick",
    "stickyTitle": "Curious how digital overstimulation affects your overall stress?",
    "stickySub": "Take the free 2-min Stress Check next",
    "stickyBtn": "Stress Check →",
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
    "title": "현실적인 48시간 도파민 디톡스 주말 플래너 | DopaBrain",
    "metaDesc": "토요일 점심이면 포기하는 극단적 금욕 디톡스는 이제 그만! 5가지 과자극 보상 루프를 비공개로 점검하고 주말 48시간 동안 지킬 수 있는 현실적 저자극 리셋 계획을 세우세요.",
    "kicker": "디지털 리셋 · 48시간 도파민 디톡스 주말 플래너",
    "heroTitle": "현실적인 48시간 도파민 디톡스 주말 플래너",
    "heroLead": "토요일 점심이면 포기하는 극단적 금욕 디톡스는 이제 그만! 5가지 과자극 보상 루프를 비공개로 점검하고 주말 48시간 동안 지킬 수 있는 현실적 저자극 리셋 계획을 세우세요.",
    "chip1": "5가지 과자극 점검",
    "chip2": "48시간 대체 카드",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 주간 과자극 보상 루프 점검 (1 = 안정, 5 = 강박적)",
    "step1Title": "평소 집중력과 휴식을 가장 자주 빼앗는 즉각 보상 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주말 진심으로 기대되는 오프라인 활동 1가지 (100% 로컬):",
    "ctaBtn": "내 48시간 도파민 디톡스 플랜 보기",
    "resultBadge": "2단계 • 지속 가능한 48시간 도파민 리셋 프로토콜",
    "noteTitle": "주말 오프라인 앵커 활동",
    "meterLabel": "기저 주의력 안정도",
    "scriptTitle": "주말 나와의 약속 1줄",
    "stepsTitle": "48시간 리셋을 끝까지 성공시키는 3가지 현실 규칙",
    "stickyTitle": "디지털 과자극이 현재 스트레스에 미치는 영향을 확인해 볼까요?",
    "stickySub": "무료 2분 스트레스 체크로 현재 피로도 측정",
    "stickyBtn": "스트레스 체크 →",
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
    "title": "48小时现实多巴胺排毒周末规划器 | DopaBrain",
    "heroTitle": "48小时现实多巴胺排毒周末规划器",
    "heroLead": "排查5大高刺激成瘾循环，制定可持续的低刺激周末恢复清单。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "48時間リアル・ドーパミンデトックス週末プランナー | DopaBrain",
    "heroTitle": "48時間リアル・ドーパミンデトックス週末プランナー",
    "heroLead": "無理な禁欲ではなく心地よいアナログ習慣で48時間のデジタル疲れを整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador Realista de Detox de Dopamina 48h | DopaBrain",
    "heroTitle": "Planificador Realista de Detox de Dopamina 48h",
    "heroLead": "Evalúa bucles de sobreestimulación y diseña un fin de semana analógico sostenible.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador Realista de Detox de Dopamina 48h | DopaBrain",
    "heroTitle": "Planejador Realista de Detox de Dopamina 48h",
    "heroLead": "Avalie loops de superestimulação e monte um fim de semana de reset sustentável.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "48-Stunden Dopamin-Detox Wochenend-Planer | DopaBrain",
    "heroTitle": "48-Stunden Dopamin-Detox Wochenend-Planer",
    "heroLead": "Prüfe Reiz-Schleifen und plane ein realistisches digitales Reset-Wochenende.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Détox Dopamine Réaliste 48h | DopaBrain",
    "heroTitle": "Planificateur Détox Dopamine Réaliste 48h",
    "heroLead": "Évaluez vos boucles hyper-stimulantes et bâtissez un week-end de pause durable.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Реалистичный план 48-часового дофаминового детокса | DopaBrain",
    "heroTitle": "Реалистичный план 48-часового дофаминового детокса",
    "heroLead": "Проверьте циклы перестимуляции и составьте комфортный план цифрового отдыха.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "48-घंटे का वास्तविक डोपामाइन डिटॉक्स प्लानर | DopaBrain",
    "heroTitle": "48-घंटे का वास्तविक डोपामाइन डिटॉक्स प्लानर",
    "heroLead": "अति-उत्तेजना की आदतों को जांचें और संतुलित ऑफलाइन सप्ताहांत योजना बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Dopamine Detox Akhir Pekan 48 Jam | DopaBrain",
    "heroTitle": "Perencana Dopamine Detox Akhir Pekan 48 Jam",
    "heroLead": "Audit kebiasaan layar berlebih dan susun rencana reset akhir pekan yang realistis.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "48 Saatlik Gerçekçi Dopamin Detoksu Planlayıcı | DopaBrain",
    "heroTitle": "48 Saatlik Gerçekçi Dopamin Detoksu Planlayıcı",
    "heroLead": "Aşırı uyaran döngülerini inceleyin ve sürdürülebilir hafta sonu sıfırlaması kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "short_video_loop",
    "en": "Infinite Short-Video Loop — Opening Shorts/Reels/TikTok for \"2 minutes\" and losing an hour",
    "ko": "쇼츠·릴스 무한 루프 — \"2분만\" 보려다 1시간이 훌쩍 사라짐"
  },
  {
    "id": "morning_bed_scroll",
    "en": "First-5-Minute Bed Scroll — Checking feeds before getting out of bed",
    "ko": "기상 직후 침대 스크롤 — 눈 뜨자마자 피드부터 확인함"
  },
  {
    "id": "double_screen_habit",
    "en": "Second-Screen Restlessness — Scrolling phone while watching TV or eating",
    "ko": "멀티스크린 습관 — 밥 먹거나 영상 볼 때도 손에서 폰을 못 놓음"
  },
  {
    "id": "boredom_allergy",
    "en": "Zero Tolerance for Boredom — Reaching for a screen during every 30-second wait",
    "ko": "지루함 불내성 — 엘리베이터·신호 대기 30초도 화면 없이 못 견딤"
  },
  {
    "id": "late_night_revenge",
    "en": "Revenge Bedtime Scrolling — Delaying sleep for mindless novelty",
    "ko": "보복성 취침 지연 — 피곤한데도 자극을 찾느라 잠을 미룸"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Stimulation Debt — Run a Structured 48-Hour Friction Reset",
    "koT": "과자극 부채 높음 — 물리적 마찰을 넣은 48시간 리셋이 딱 맞습니다",
    "enD": "Behavioral neuroscience (Lembke, 2021) shows supernormal digital stimuli temporarily raise your pleasure threshold so ordinary reading, walks, and quiet hobbies feel flat. A 48-hour low-friction reset—paired with enjoyable analog swaps—restores calm curiosity fast.",
    "koD": "행동신경과학(Lembke, 2021)에 따르면 초정상 디지털 자극은 쾌락 역치를 높여 독서·산책 같은 평범한 즐거움을 밋밋하게 만듭니다. 극단적 단식 대신 즐거운 아날로그 대안을 채운 48시간 리셋이 감각을 빠르게 회복시킵니다.",
    "enS": "\"I’m not punishing myself—I’m clearing noisy feeds for 48 hours so quiet life feels vivid again.\"",
    "koS": "\"나를 벌주는 게 아니라 48시간 소음을 비워 평범한 주말의 감각을 되찾는 중이다.\"",
    "enL": [
      "Log out of short-video apps Friday 9 PM and switch phone display to Grayscale.",
      "Charge your phone outside the bedroom and use a cheap alarm clock.",
      "Fill Saturday morning with one enjoyable analog swap (walk, cafe paperback, cooking, or music)."
    ],
    "koL": [
      "금요일 밤 9시에 숏폼 앱 로그아웃 후 화면을 흑백(그레이스케일) 모드로 전환하세요.",
      "스마트폰은 침실 밖에서 충전하고 아침 기상은 별도 알람을 쓰세요.",
      "토요일 오전에 산책·종이책·요리·음악 등 즐거운 아날로그 일정을 먼저 채우세요."
    ]
  },
  "mid": {
    "enT": "Moderate Feed Creep — Apply Two Protected Screen-Free Windows",
    "koT": "중간 피드 침식 — 오전 2시간 + 취침 전 1시간 보호 구역부터 시작하세요",
    "enD": "Your reward loops are manageable; carving out screen-free mornings and evenings resets focus without needing full abstinence.",
    "koD": "습관이 크게 무너지진 않았습니다. 주말 아침 첫 2시간과 잠들기 전 1시간만 화면 없이 지켜도 집중력이 뚜렷하게 살아납니다.",
    "enS": "\"No feeds before breakfast, no feeds after 10 PM.\"",
    "koS": "\"아침 식사 전 피드 금지, 밤 10시 이후 피드 금지.\"",
    "enL": [
      "Keep phone in another room during Saturday & Sunday morning coffee.",
      "Delete infinite-scroll shortcuts from your home screen.",
      "Leave phone in your bag during walks so your mind can wander freely."
    ],
    "koL": [
      "주말 아침 커피·식사 시간에는 폰을 다른 방에 두세요.",
      "홈 화면 첫 페이지에서 무한 스크롤 앱 아이콘을 치우세요.",
      "산책할 때는 폰을 가방 속에 넣어 두고 생각의 여백을 즐기세요."
    ]
  },
  "high": {
    "enT": "Healthy Digital Balance — Maintain Light Weekly Guardrails",
    "koT": "건강한 디지털 균형 — 가벼운 주말 아날로그 루틴만 유지하세요",
    "enD": "Your baseline attention is steady. Keep one weekly offline morning to stay grounded and creative.",
    "koD": "주의력 기저선이 매우 안정적입니다. 주 1회 오프라인 오전 루틴만 유지해도 맑은 컨디션이 이어집니다.",
    "enS": "\"Protect one quiet offline morning every week.\"",
    "koS": "\"매주 한 번, 조용한 오프라인 오전을 선물한다.\"",
    "enL": [
      "Keep notifications muted for non-human apps.",
      "Continue prioritizing real-world movement and conversations.",
      "Use short intentional timers whenever browsing social feeds."
    ],
    "koL": [
      "사람이 보낸 메시지가 아닌 앱 알림은 계속 꺼 두세요.",
      "야외 움직임과 오프라인 대화를 우선순위로 유지하세요.",
      "피드를 볼 때는 짧은 의도적 타이머로 깔끔하게 마무리하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_dopamine_detox_weekend_v1";
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
      window.gtag('event', "dopamine_detox_weekend_complete", {
        tool_slug: "dopamine-detox-weekend-planner",
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
      var shareUrl = "https://dopabrain.com/portal/tools/dopamine-detox-weekend-planner.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "dopamine-detox-weekend-planner",
        filename: 'dopabrain-dopamine-detox-weekend-planner-card.png',
        badge: "DIGITAL RESET • 48-HOUR DOPAMINE DETOX PLANNER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
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
