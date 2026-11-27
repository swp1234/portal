/* 20-Minute Power Nap & Sleep-Inertia-Free Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "20-Minute Power Nap & Sleep-Inertia-Free Planner | DopaBrain",
    "metaDesc": "Wake up from afternoon naps feeling groggier and heavier than before—then unable to sleep at midnight? Lock the exact 20-minute Stage-2 window and pre-2 PM cutoff locally.",
    "kicker": "CIRCADIAN ENERGY • 20-MINUTE POWER NAP & NAPPUCCINO PLANNER",
    "heroTitle": "20-Minute Power Nap & Sleep-Inertia-Free Planner",
    "heroLead": "Wake up from afternoon naps feeling groggier and heavier than before—then unable to sleep at midnight? Lock the exact 20-minute Stage-2 window and pre-2 PM cutoff locally.",
    "chip1": "5 Nap Mistakes",
    "chip2": "20-Min Window",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR AFTERNOON NAP HABITS (1 = SHARP, 5 = GROGGY)",
    "step1Title": "What usually makes your afternoon naps backfire?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My ideal pre-2 PM 20-minute nap window & wake-up light cue (100% local):",
    "ctaBtn": "Build My Sleep-Inertia-Free Power Nap Plan",
    "resultBadge": "STEP 2 • YOUR ZERO-GROGGINESS POWER NAP PROTOCOL",
    "noteTitle": "My Optimal Power-Nap Window",
    "meterLabel": "Post-Nap Alertness Score",
    "scriptTitle": "20-Min Power Nap / Coffee-Nap Formula",
    "stepsTitle": "3 NASA & Circadian Rules for Crisp Afternoon Naps",
    "stickyTitle": "Pair your 20-minute power nap with soft rain or pink noise?",
    "stickySub": "Open the free Calm Nap Soundscape",
    "stickyBtn": "Play Nap Sound →",
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
    "title": "몽롱함 없는 20분 파워냅 & 커피냅(Nappuccino) 타이밍 설계기 | DopaBrain",
    "metaDesc": "낮잠 자고 일어나면 오히려 머리가 띵하고 밤엔 잠이 안 오나요? 수면 관성(몽롱함)을 피하는 정확한 20분 얕은 수면 창과 오후 2시 컷오프·커피냅 공식을 설계하세요.",
    "kicker": "오후 에너지 · 몽롱함 없는 20분 파워냅 & 커피냅 타이밍 설계기",
    "heroTitle": "몽롱함 없는 20분 파워냅 & 커피냅(Nappuccino) 타이밍 설계기",
    "heroLead": "낮잠 자고 일어나면 오히려 머리가 띵하고 밤엔 잠이 안 오나요? 수면 관성(몽롱함)을 피하는 정확한 20분 얕은 수면 창과 오후 2시 컷오프·커피냅 공식을 설계하세요.",
    "chip1": "5가지 낮잠 실수",
    "chip2": "20분 황금 창",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 오후 낮잠 습관 및 수면 관성 점검 (1 = 개운, 5 = 몽롱함)",
    "step1Title": "낮잠을 자고 난 뒤 오히려 컨디션이 무거워지는 원인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 나에게 딱 맞는 오후 2시 전 20분 낮잠 시간대 & 기상 신호 (100% 로컬):",
    "ctaBtn": "내 몽롱함 없는 20분 파워냅 플랜 보기",
    "resultBadge": "2단계 • 수면 관성 제로 파워냅 프로토콜",
    "noteTitle": "내 황금 20분 낮잠 시간대",
    "meterLabel": "기상 개운함 지수",
    "scriptTitle": "바로 쓰는 20분 파워냅 · 커피냅 공식",
    "stepsTitle": "NASA·수면과학이 검증한 개운한 낮잠 3원칙",
    "stickyTitle": "20분 파워냅 동안 잔잔한 빗소리·핑크 노이즈를 틀어 두고 바로 쉬어 볼까요?",
    "stickySub": "무료 파워냅 빗소리·사운드 열기",
    "stickyBtn": "빗소리 열기 →",
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
    "title": "无昏沉20分钟高效午睡与咖啡小憩规划器 | DopaBrain",
    "heroTitle": "无昏沉20分钟高效午睡与咖啡小憩规划器",
    "heroLead": "避开45分钟深睡惯性陷阱，锁定14点前20分钟浅睡恢复窗口。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "だるさゼロの20分パワーナップ＆コーヒーナップ設計 | DopaBrain",
    "heroTitle": "だるさゼロの20分パワーナップ＆コーヒーナップ設計",
    "heroLead": "45分昼寝の睡眠慣性を防ぐ14時前20分ウィンドウと起床ルーティンを作成。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de Siesta Energética de 20 Minutos | DopaBrain",
    "heroTitle": "Planificador de Siesta Energética de 20 Minutos",
    "heroLead": "Evita despertar aturdido con la ventana exacta de 20 min antes de las 14:00 y luz al despertar.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Cochilo Power Nap de 20 Minutos | DopaBrain",
    "heroTitle": "Planejador de Cochilo Power Nap de 20 Minutos",
    "heroLead": "Evite a inércia do sono com a janela de 20 minutos antes das 14h e café-nap opcional.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "20-Minuten-Powernap- & Coffee-Nap-Planer | DopaBrain",
    "heroTitle": "20-Minuten-Powernap- & Coffee-Nap-Planer",
    "heroLead": "Vermeide Schlafträgheit mit dem exakten 20-Minuten-Fenster vor 14 Uhr und Tageslicht.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Micro-Sieste 20 Min & Coffee-Nap | DopaBrain",
    "heroTitle": "Planificateur Micro-Sieste 20 Min & Coffee-Nap",
    "heroLead": "Évitez l’inertie du sommeil grâce au créneau exact de 20 minutes avant 14h.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Планировщик 20-минутного дневного сна без разбитости | DopaBrain",
    "heroTitle": "Планировщик 20-минутного дневного сна без разбитости",
    "heroLead": "Избегайте инерции сна с окном 20 минут до 14:00 и правилом яркого света.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "20-मिनट पावर नैप और कॉफी-नैप प्लानर | DopaBrain",
    "heroTitle": "20-मिनट पावर नैप और कॉफी-नैप प्लानर",
    "heroLead": "दोपहर 2 बजे से पहले 20 मिनट की सटीक झपकी से सुस्ती के बिना ताज़गी पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Power Nap 20 Menit Bebas Pusing | DopaBrain",
    "heroTitle": "Perencana Power Nap 20 Menit Bebas Pusing",
    "heroLead": "Hindari bangun lemas dari tidur siang 45 menit dengan jendela 20 menit sebelum jam 2 siang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sersemliksiz 20 Dakikalık Power Nap Planlayıcı | DopaBrain",
    "heroTitle": "Sersemliksiz 20 Dakikalık Power Nap Planlayıcı",
    "heroLead": "Saat 14:00 öncesi 20 dakikalık ideal uyku penceresiyle öğleden sonra enerjinizi tazeleyin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "danger_45min_zone",
    "en": "The 45-Minute Trap — Napping 40–60 min and waking straight out of deep slow-wave sleep",
    "ko": "45분 함정 — 깊은 서파 수면에 막 진입한 40~60분 만에 깨어 심하게 몽롱함"
  },
  {
    "id": "late_4pm_nap",
    "en": "Late 4–5 PM Napping — Stealing evening adenosine sleep pressure and wrecking midnight sleep",
    "ko": "오후 4~5시 늦은 낮잠 — 밤에 잠들 수면압을 다 써 버려 밤에 말똥말똥함"
  },
  {
    "id": "zero_fall_asleep_pad",
    "en": "No 5-Min Settling Pad — Setting a 20-min timer yet stressing \"I have to fall asleep NOW!\"",
    "ko": "입면 여유 누락 — 20분 타이머를 켜고 \"빨리 자야 해!\" 조급해하다 못 잠"
  },
  {
    "id": "dark_bed_trap",
    "en": "Full Pitch-Black Pajama Trap — Sliding deep under heavy blankets and snoozing 90 minutes",
    "ko": "완전 취침 모드 — 이불 깊이 파고들어 알람을 끄고 90분씩 자 버림"
  },
  {
    "id": "zero_wake_light",
    "en": "Staying Horizontal After Alarm — Scrolling on the couch for 15 minutes instead of bright light + water",
    "ko": "기상 후 멍때리기 — 알람 후 빛·물 없이 15분간 누워 폰만 보며 더 처짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "Severe Nap Grogginess — Lock 20–25 Min Max Before 2 PM (Or Try a 20-Min Coffee Nap) + Bright Light on Wake",
    "koT": "낮잠 몽롱함 심함 — 오후 2시 전 20~25분 상한 + 기상 직후 밝은 빛·찬물 1컵을 고정하세요",
    "enD": "NASA pilot-alertness studies (Rosekind et al.) and sleep-inertia research (Brooks & Lack) show a 10–20 minute nap boosts alertness and memory for 2–3 hours with zero slow-wave grogginess, while 40–60 minute naps wake you mid-deep-sleep.",
    "koD": "NASA 조종사 각성 연구와 수면 관성 연구에 따르면 10~20분 얕은 수면(Stage 2) 낮잠은 몽롱함 없이 2~3시간 집중력을 끌어올리는 반면, 40~60분 낮잠은 깊은 수면 도중 깨어 심한 피로를 유발합니다.",
    "enS": "\"25-min timer (5 min settle + 20 min nap), eyes closed before 2 PM—even quiet non-sleep rest recharges 70% of the benefit.\"",
    "koS": "\"오후 2시 전 25분 타이머(5분 이완 + 20분 눈 감기). 꼭 깊이 잠들지 않아도 눈 감고 쉬는 것만으로 70% 회복된다.\"",
    "enL": [
      "Keep total timer to 20–25 minutes (5 min to settle + 15–20 min Stage-2 rest) and NEVER nap past 2–3 PM.",
      "Optional \"Coffee Nap\" (if caffeine-tolerant before 2 PM): sip a small coffee right before lying down—caffeine kicks in right as your 20-minute alarm rings!",
      "Stand up immediately at the chime, drink cool water, and look at bright daylight for 60 seconds to clear any trace of grogginess."
    ],
    "koL": [
      "전체 타이머를 20~25분(이완 5분+낮잠 15~20분)으로 고정하고 오후 2~3시 이후엔 낮잠을 피하세요.",
      "선택 커피냅(오후 2시 이전): 눕기 직전 작은 커피를 마시면 20분 뒤 알람이 울릴 때쯤 카페인이 딱 작용해 개운하게 일어납니다.",
      "알람이 울리면 바로 일어나 찬물 한 컵을 마시고 창밖 밝은 빛을 60초 보며 각성 스위치를 켜세요."
    ]
  },
  "mid": {
    "enT": "Decent Nap Rhythm — Cap Duration at 25 Min & Add 60-Sec Bright Light on Wake",
    "koT": "무난한 낮잠 — 25분 상한과 기상 직후 60초 햇빛만 더하면 훨씬 개운해집니다",
    "enD": "Stopping before the 30-minute slow-wave boundary keeps afternoons crisp and nights sleepy.",
    "koD": "30분 깊은 수면 경계선 전에만 끊어도 오후 집중력과 밤 숙면을 모두 지킬 수 있습니다.",
    "enS": "\"Short, early, bright wake-up—afternoon clarity without stealing tonight’s sleep.\"",
    "koS": "\"짧고, 이르고, 밝게 깨기 — 밤잠을 뺏지 않는 깔끔한 오후 충전.\"",
    "enL": [
      "Rest slightly propped on a couch/chair instead of under deep bed covers.",
      "Remind yourself quiet eyes-closed NSDR works even if you don’t fully drift off.",
      "Track bedtime sleepiness if you nap after 2 PM."
    ],
    "koL": [
      "깊은 이불 속보다 소파·의자에 살짝 기대어 쉬면 20분 만에 깨기 쉽습니다.",
      "완전히 잠들지 못해도 20분 눈 감기(NSDR)만으로 뇌 피로가 크게 줄어듭니다.",
      "오후 2시 이후 낮잠이 밤잠에 영향을 주는지 3일만 관찰해 보세요."
    ]
  },
  "high": {
    "enT": "Precision Power-Napper — Crisp Afternoon Recharge",
    "koT": "완벽한 파워냅 리듬 — 오후 집중력과 밤 숙면을 모두 챙기고 있습니다",
    "enD": "Your timing and duration hit the circadian sweet spot effortlessly.",
    "koD": "생체 리듬의 황금 시간대와 20분 공식을 정확히 활용하고 있습니다.",
    "enS": "\"Twenty intentional minutes unlock three focused afternoon hours.\"",
    "koS": "\"의도적인 20분 휴식이 오후 3시간의 선명한 집중을 열어 준다.\"",
    "enL": [
      "Keep preserving your pre-2 PM window.",
      "Pair wake-up with hydration and light.",
      "Enjoy sustained late-afternoon focus."
    ],
    "koL": [
      "오후 2시 이전 황금 낮잠 창을 계속 유지하세요.",
      "기상 직후 물 한 잔과 빛 쐬기 습관을 이어 가세요.",
      "상쾌한 오후 집중 시간을 만끽하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_power_nap_planner_v1";
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
      window.gtag('event', "power_nap_planner_complete", {
        tool_slug: "afternoon-power-nap-timer-guide",
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
      var shareUrl = "https://dopabrain.com/portal/tools/afternoon-power-nap-timer-guide.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "afternoon-power-nap-timer-guide",
        filename: 'dopabrain-afternoon-power-nap-timer-guide-card.png',
        badge: "CIRCADIAN ENERGY • 20-MINUTE POWER NAP & NAPPUCCINO PLANNER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
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
