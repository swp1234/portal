/* Winter & Low-Sunlight Circadian Mood Light Plan
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Winter & Low-Sunlight Circadian Mood Light Plan | DopaBrain",
    "metaDesc": "Feeling sluggish, carb-craving, and hard to wake up when days turn short and gray? Audit 5 winter circadian light gaps locally and design a realistic morning brightness routine.",
    "kicker": "WINTER ENERGY DIP • CIRCADIAN LIGHT ROUTINE",
    "heroTitle": "Winter & Low-Sunlight Circadian Mood Light Plan",
    "heroLead": "Feeling sluggish, carb-craving, and hard to wake up when days turn short and gray? Audit 5 winter circadian light gaps locally and design a realistic morning brightness routine.",
    "chip1": "5 Sunlight Gaps",
    "chip2": "Morning Light Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR LOW-SUNLIGHT & WINTER ENERGY SIGNALS (1 = STEADY, 5 = SLUGGISH)",
    "step1Title": "Which dark-season habits are dampening your daily energy?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My concrete 15-minute outdoor or bright-window morning anchor (100% local):",
    "ctaBtn": "Build My Winter Light & Mood Plan",
    "resultBadge": "STEP 2 • YOUR LOW-SUNLIGHT CIRCADIAN BOOST PLAN",
    "noteTitle": "My Daily Morning Light Anchor",
    "meterLabel": "Circadian Brightness Alignment",
    "scriptTitle": "Cozy Winter Pacing Reframe",
    "stepsTitle": "3 Evidence-Based Moves for Dark, Short Days",
    "stickyTitle": "Want cozy fireplace or gentle morning rain audio for winter focus?",
    "stickySub": "Open the free Cozy Soundscapes & White Noise Mixer",
    "stickyBtn": "Cozy Sounds →",
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
    "title": "겨울철 무기력·일조량 부족 아침 빛 & 활력 루틴 플래너 | DopaBrain",
    "metaDesc": "해가 짧아지고 흐린 날이 늘면서 아침 기상이 힘들고 무기력해지나요? 5가지 겨울철 빛·리듬 공백을 점검하고 현실적인 아침 조도·활력 루틴을 설계하세요.",
    "kicker": "겨울철 기분 저하·일조량 부족 · 아침 빛 루틴 플래너",
    "heroTitle": "겨울철 무기력·일조량 부족 아침 빛 & 활력 루틴 플래너",
    "heroLead": "해가 짧아지고 흐린 날이 늘면서 아침 기상이 힘들고 무기력해지나요? 5가지 겨울철 빛·리듬 공백을 점검하고 현실적인 아침 조도·활력 루틴을 설계하세요.",
    "chip1": "5가지 일조량 공백",
    "chip2": "아침 빛 루틴",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 일조량 부족·겨울 무기력 신호 점검 (1 = 활기참, 5 = 매우 처짐)",
    "step1Title": "해가 짧은 계절에 에너지와 기분을 가장 크게 가라앉히는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 매일 오전 실천할 15분 야외 산책 또는 밝은 창가 빛 앵커 (100% 로컬):",
    "ctaBtn": "내 겨울 아침 빛·활력 루틴 만들기",
    "resultBadge": "2단계 • 일조량 부족 극복 아침 빛 프로토콜",
    "noteTitle": "나의 매일 아침 빛 노출 앵커",
    "meterLabel": "생체시계 빛 정렬 지수",
    "scriptTitle": "어두운 계절을 지혜롭게 보내는 문장",
    "stepsTitle": "짧고 흐린 겨울날 활력을 지키는 3단계",
    "stickyTitle": "겨울날 포근한 장작불 소리나 잔잔한 배경음으로 집중과 휴식을 더해 볼까요?",
    "stickySub": "무료 화이트노이즈·포근한 사운드 믹서 열기",
    "stickyBtn": "포근한 소리 →",
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
    "title": "冬季日照不足与晨光情绪节律规划 | DopaBrain",
    "heroTitle": "冬季日照不足与晨光情绪节律规划",
    "heroLead": "排查5大冬季光照缺口，建立阴天也能保持清醒与活力的晨间采光习惯。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "冬の日照不足＆朝の光サーカディアン設計 | DopaBrain",
    "heroTitle": "冬の日照不足＆朝の光サーカディアン設計",
    "heroLead": "短い日照の5つのリズム乱れを整え、曇りの朝でも活力を守る光習慣を設計。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Luz Matinal y Ánimo en Invierno | DopaBrain",
    "heroTitle": "Plan de Luz Matinal y Ánimo en Invierno",
    "heroLead": "Audita 5 brechas de luz solar y diseña una rutina circadiana energizante para días cortos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Luz Matinal e Humor no Inverno | DopaBrain",
    "heroTitle": "Plano de Luz Matinal e Humor no Inverno",
    "heroLead": "Mapeie 5 lacunas de luz natural e crie uma rotina matinal para dias curtos e cinzentos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Winterstimmung- & Morgenlicht-Planer | DopaBrain",
    "heroTitle": "Winterstimmung- & Morgenlicht-Planer",
    "heroLead": "Prüfe 5 Tageslicht-Lücken im Winter und baue eine belebende Morgenlicht-Routine auf.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Lumière Matinale & Moral d’Hiver | DopaBrain",
    "heroTitle": "Plan Lumière Matinale & Moral d’Hiver",
    "heroLead": "Repérez 5 manques de lumière hivernaux et créez un rituel circadien énergisant.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План утреннего света для зимнего тонуса | DopaBrain",
    "heroTitle": "План утреннего света для зимнего тонуса",
    "heroLead": "Закройте 5 зимних дефицитов дневного света с помощью простой утренней рутины.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "विंटर लो-सनलाइट मूड व लाइट प्लानर | DopaBrain",
    "heroTitle": "विंटर लो-सनलाइट मूड व लाइट प्लानर",
    "heroLead": "कम धूप वाले दिनों की 5 सर्केडियन कमियां जांचें और सुबह की ऊर्जा रूटीन बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Rencana Cahaya Pagi & Mood Musim Mendung | DopaBrain",
    "heroTitle": "Rencana Cahaya Pagi & Mood Musim Mendung",
    "heroLead": "Audit 5 celah ritme sirkadian kurang cahaya dan bangun rutinitas pagi yang segar.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Kış Mevsimi Gün Işığı ve Enerji Planı | DopaBrain",
    "heroTitle": "Kış Mevsimi Gün Işığı ve Enerji Planı",
    "heroLead": "Kısa kış günlerindeki 5 ışık boşluğunu ölçün ve sabah enerji rutininizi kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "dark_wakeups",
    "en": "Pitch-Dark Wakeups — Rolling out of bed in dim light with zero bright cues until noon",
    "ko": "어두운 기상 — 정오가 될 때까지 흐릿한 실내등 아래서만 지냄"
  },
  {
    "id": "indoor_all_day",
    "en": "Zero Outdoor Sky Time — Working indoors from sunrise to sunset without stepping outside",
    "ko": "야외 자연광 0분 — 출근부터 퇴근까지 실내에만 있어 하늘 빛을 못 봄"
  },
  {
    "id": "hibernation_sleep",
    "en": "Weekend Oversleep Drift — Sleeping 2–3 hours later on weekends, worsening Monday fog",
    "ko": "주말 과수면 밀림 — 주말마다 2~3시간 늦게 일어나 월요일 멍함이 심해짐"
  },
  {
    "id": "cozy_isolation",
    "en": "Winter Social Hibernation — Canceling plans because cold dark evenings make leaving home hard",
    "ko": "겨울 사회적 동면 — 춥고 어두워 약속을 다 미루고 집에만 머무름"
  },
  {
    "id": "afternoon_slump",
    "en": "4 PM Sunset Crash — Feeling like bedtime at 5 PM as soon as the sky turns dark",
    "ko": "오후 5시 방전 — 해가 일찍 지면 오후 5시부터 밤처럼 에너지가 뚝 떨어짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "Deep Winter Circadian Drift — Anchor Bright Morning Light Within 60 Min of Waking",
    "koT": "겨울철 리듬 저하 심함 — 기상 1시간 이내 \"밝은 아침 빛\"을 최우선 앵커로 세팅하세요",
    "enD": "Even an overcast winter sky delivers 5,000–10,000 lux outdoors—over 10× brighter than typical indoor bulbs (~300 lux). Morning light triggers an immediate cortisol-awakening pulse and sets your melatonin timer 14–16 hours later.",
    "koD": "흐린 겨울 하늘이라도 야외 조도는 5,000~10,000럭스로 일반 실내 조명(300럭스)보다 10배 이상 밝습니다. 기상 1시간 이내 야외 빛 15분만 쬐어도 낮 활력과 밤 숙면 리듬이 뚜렷하게 살아납니다.",
    "enS": "\"My body isn’t lazy in winter—it’s simply hungry for morning brightness and warm rhythm.\"",
    "koS": "\"겨울에 처지는 건 게을러서가 아니라 내 생체시계가 아침 햇빛과 따뜻한 리듬을 원하고 있기 때문이야.\"",
    "enL": [
      "Step outdoors for 15–20 minutes within an hour of waking (even under clouds) or sit directly beside a bright window.",
      "Turn on crisp bright overhead/task lights until 2 PM, then shift to warm cozy lamps after sunset.",
      "Schedule one warm daytime social anchor (lunch walk or coffee) so dark evenings do not isolate you."
    ],
    "koL": [
      "흐린 날이라도 기상 1시간 이내에 15~20분 밖을 걷거나 밝은 창가 바로 옆에 앉으세요.",
      "오후 2시까지는 실내를 밝게 유지하고 해가 진 뒤에는 따뜻한 간접등으로 전환하세요.",
      "저녁 외출이 부담스러운 겨울에는 낮 점심 산책이나 커피 약속 1개를 의도적으로 넣으세요."
    ]
  },
  "mid": {
    "enT": "Mild Seasonal Dip — Protect Morning Light & Midday Movement",
    "koT": "가벼운 계절 저하 — 오전 자연광과 점심 10분 걷기만 지켜도 활기가 돌아옵니다",
    "enD": "You handle shorter days reasonably well; pairing midday outdoor light with steady wake times prevents the late-afternoon slump.",
    "koD": "짧은 해에도 비교적 잘 적응하고 있습니다. 점심시간 10분 야외 산책과 주말 기상 시각 유지(±1시간 이내)만 챙기면 오후 방전을 막을 수 있습니다.",
    "enS": "\"Ten minutes of winter sky at lunch keeps my whole afternoon brighter.\"",
    "koS": "\"점심때 10분 겨울 하늘을 보는 것만으로 오후 전체가 훨씬 맑아진다.\"",
    "enL": [
      "Keep wake time within 60 minutes on weekends to avoid winter social jet lag.",
      "Take a brisk 10-minute outdoor loop right around solar noon.",
      "Create one cozy evening ritual (warm tea, music, blanket) you genuinely enjoy."
    ],
    "koL": [
      "주말 기상 시각을 평일 대비 1시간 이내로 유지해 월요일 시차 피로를 막으세요.",
      "해가 가장 높은 점심 무렵 10분 야외 산책을 고정 루틴으로 두세요.",
      "따뜻한 차·음악·조명처럼 어두운 겨울 저녁을 즐기는 나만의 코지 의식을 만드세요."
    ]
  },
  "high": {
    "enT": "Strong Seasonal Resilience — Balanced Light & Cozy Rhythm",
    "koT": "탄탄한 계절 회복력 — 밝은 낮과 포근한 밤의 조화가 아주 좋습니다",
    "enD": "Your light and movement habits keep winter energy remarkably steady. Keep savoring the slower, cozier cadence of the season.",
    "koD": "빛 노출과 움직임 루틴 덕분에 겨울철에도 에너지가 매우 안정적입니다. 지금의 좋은 리듬을 유지하며 계절 특유의 포근함을 즐기세요.",
    "enS": "\"Bright mornings and cozy evenings make every season energizing.\"",
    "koS": "\"밝은 아침과 포근한 저녁이 어떤 계절에도 단단한 활력을 만들어 준다.\"",
    "enL": [
      "Keep your morning outdoor light walk active through the darkest weeks.",
      "Stay connected with friends via warm indoor gatherings or daytime walks.",
      "Consult a clinician if persistent low mood lasts weeks despite strong light habits."
    ],
    "koL": [
      "해가 가장 짧은 몇 주 동안 아침 야외 빛 루틴을 꾸준히 이어 가세요.",
      "따뜻한 실내 모임이나 낮 산책으로 사람들과의 온기를 유지하세요.",
      "만약 생활 습관 개선에도 깊은 우울감이 수주 지속되면 전문가 상담을 받아 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_seasonal_light_plan_v1";
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
      window.gtag('event', "seasonal_light_plan_complete", {
        tool_slug: "seasonal-winter-mood-light-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/seasonal-winter-mood-light-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "seasonal-winter-mood-light-plan",
        filename: 'dopabrain-seasonal-winter-mood-light-plan-card.png',
        badge: "WINTER ENERGY DIP • CIRCADIAN LIGHT ROUTINE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
        accent2: "#38bdf8"
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
