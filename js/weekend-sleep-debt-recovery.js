/* Social Jetlag & Weekend Sleep-Debt Recovery Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Social Jetlag & Weekend Sleep-Debt Recovery Planner | DopaBrain",
    "metaDesc": "Sleeping until noon on Saturday and Sunday yet feeling wrecked every Monday morning? Audit 5 social-jetlag habits locally and build a smooth sleep-debt recovery weekend.",
    "kicker": "CIRCADIAN HEALTH • SOCIAL JETLAG & WEEKEND SLEEP RECOVERY",
    "heroTitle": "Social Jetlag & Weekend Sleep-Debt Recovery Planner",
    "heroLead": "Sleeping until noon on Saturday and Sunday yet feeling wrecked every Monday morning? Audit 5 social-jetlag habits locally and build a smooth sleep-debt recovery weekend.",
    "chip1": "5 Jetlag Traps",
    "chip2": "90-Min Anchor Rule",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR WEEKEND SLEEP-SHIFT PATTERNS (1 = STEADY, 5 = 3H+ SHIFT)",
    "step1Title": "How far does your weekend clock drift from Monday morning?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My weekday wake time & max +60–90 min weekend wake target (100% local):",
    "ctaBtn": "Build My Social-Jetlag Recovery Plan",
    "resultBadge": "STEP 2 • YOUR MONDAY-PROOF WEEKEND SLEEP PROTOCOL",
    "noteTitle": "My Weekend Wake-Time Anchor",
    "meterLabel": "Circadian Consistency",
    "scriptTitle": "Smart Sleep-Debt Rule (Early Bed + Short Nap)",
    "stepsTitle": "3 Chronobiology Rules That Erase Monday Social Jetlag",
    "stickyTitle": "Need help winding down 30 minutes earlier Sunday night?",
    "stickySub": "Open the free White Noise & Rain Sleep Mixer",
    "stickyBtn": "Sunday Sleep →",
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
    "title": "주말 몰아자기(사회적 시차) 교정 & 월요병 없는 수면 회복기 | DopaBrain",
    "metaDesc": "주말에 정오까지 몰아 잤는데 월요일 아침이 오히려 시차 적응처럼 멍한가요? 5가지 사회적 시차 습관을 점검하고 월요병 없이 피로를 갚는 주말 수면 회복 공식을 설계하세요.",
    "kicker": "일주기 건강 · 주말 몰아자기(사회적 시차) 회복 & 월요병 예방기",
    "heroTitle": "주말 몰아자기(사회적 시차) 교정 & 월요병 없는 수면 회복기",
    "heroLead": "주말에 정오까지 몰아 잤는데 월요일 아침이 오히려 시차 적응처럼 멍한가요? 5가지 사회적 시차 습관을 점검하고 월요병 없이 피로를 갚는 주말 수면 회복 공식을 설계하세요.",
    "chip1": "5가지 시차 함정",
    "chip2": "90분 기상 앵커",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 평일·주말 수면 리듬 격차 점검 (1 = 일정, 5 = 3시간+ 어긋남)",
    "step1Title": "평일과 주말 사이의 기상·취침 리듬이 가장 크게 벌어지는 부분은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 평일 기상 시각 & 주말 최대 +60~90분 기상 목표 (100% 로컬):",
    "ctaBtn": "내 사회적 시차 교정·주말 회복 플랜 보기",
    "resultBadge": "2단계 • 월요병을 없애는 주말 수면 회복 프로토콜",
    "noteTitle": "주말 기상 앵커 시각",
    "meterLabel": "생체시계 일관성 지수",
    "scriptTitle": "현명한 수면 부채 상환 공식",
    "stepsTitle": "월요일 아침 멍함을 지우는 3가지 시간생물학 원칙",
    "stickyTitle": "일요일 밤 30분 일찍 편안히 잠들도록 수면 사운드를 맞춰 볼까요?",
    "stickySub": "무료 빗소리·화이트 노이즈 수면 믹서 열기",
    "stickyBtn": "일요일 숙면 →",
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
    "title": "社交时差与周末睡眠债科学恢复器 | DopaBrain",
    "heroTitle": "社交时差与周末睡眠债科学恢复器",
    "heroLead": "打破周末补觉越睡周一越困的怪圈，用90分钟锚点稳住生物钟。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "社会的時差ボケ＆週末睡眠負債リカバリー設計 | DopaBrain",
    "heroTitle": "社会的時差ボケ＆週末睡眠負債リカバリー設計",
    "heroLead": "休日の寝だめで月曜がつらい原因を点検し、+90分ルールで整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador contra el Jet Lag Social de Fin de Semana | DopaBrain",
    "heroTitle": "Planificador contra el Jet Lag Social de Fin de Semana",
    "heroLead": "Elimina el agotamiento del lunes manteniendo tu despertar dentro de +60–90 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador contra Jet Lag Social de Fim de Semana | DopaBrain",
    "heroTitle": "Planejador contra Jet Lag Social de Fim de Semana",
    "heroLead": "Acabe com a ressaca de segunda ajustando o despertar em até +60–90 min.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Social-Jetlag & Wochenend-Schlaf-Erholungsplan | DopaBrain",
    "heroTitle": "Social-Jetlag & Wochenend-Schlaf-Erholungsplan",
    "heroLead": "Vermeide Montags-Müdigkeit mit der +90-Minuten-Aufwachregel und Kurzschlaf.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Jet Lag Social & Récupération Week-End | DopaBrain",
    "heroTitle": "Planificateur Jet Lag Social & Récupération Week-End",
    "heroLead": "Évitez la lourdeur du lundi en limitant le décalage du réveil à +60–90 min.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План восстановления сна и защиты от «социального джетлага» | DopaBrain",
    "heroTitle": "План восстановления сна и защиты от «социального джетлага»",
    "heroLead": "Избавьтесь от разбитости в понедельник с правилом сдвига пробуждения до +90 мин.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सोशल जेटलैग और वीकेंड स्लीप रिकवरी प्लानर | DopaBrain",
    "heroTitle": "सोशल जेटलैग और वीकेंड स्लीप रिकवरी प्लानर",
    "heroLead": "वीकेंड जागने का अंतर +90 मिनट के भीतर रखकर सोमवार की सुस्ती दूर करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Pemulihan Social Jetlag & Tidur Akhir Pekan | DopaBrain",
    "heroTitle": "Perencana Pemulihan Social Jetlag & Tidur Akhir Pekan",
    "heroLead": "Hilangkan lemas Senin pagi dengan batas bangun akhir pekan +60–90 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sosyal Jetlag ve Hafta Sonu Uyku Toparlanma Planı | DopaBrain",
    "heroTitle": "Sosyal Jetlag ve Hafta Sonu Uyku Toparlanma Planı",
    "heroLead": "Hafta sonu uyanma kaymasını +90 dakikada tutarak Pazartesi yorgunluğunu bitirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "three_hour_sleep_in",
    "en": "3-Hour Weekend Sleep-In — Waking at 10–11 AM after 7 AM weekdays (3-timezone jetlag)",
    "ko": "3시간+ 주말 늦잠 — 평일 7시 기상인데 주말엔 10~11시 넘어 일어남"
  },
  {
    "id": "sunday_night_insomnia",
    "en": "Sunday-Night Wide-Awake — Unable to sleep before 1 AM Sunday because of late Sunday waking",
    "ko": "일요일 밤 불면 — 일요일 늦잠 탓에 밤 1시까지 잠이 안 와 월요일을 망침"
  },
  {
    "id": "weekday_five_hour_burn",
    "en": "Weekday Sleep Starvation — Running on 5.5–6h Mon–Fri hoping Saturday fixes everything",
    "ko": "평일 수면 기아 — 주중에 5~6시간만 자고 토요일에 한꺼번에 갚으려 함"
  },
  {
    "id": "late_friday_binge",
    "en": "2 AM Weekend Screens — Staying up 3 hours past weekday bedtime Friday & Saturday",
    "ko": "주말 새벽 2시 화면 — 금·토 밤 평일보다 3시간 이상 늦게까지 화면을 봄"
  },
  {
    "id": "two_hour_sunday_nap",
    "en": "Long Late-Sunday Nap — Napping 2 hours at 4 PM Sunday, erasing Sunday-night sleep drive",
    "ko": "일요일 늦은 긴 낮잠 — 일요일 오후 4시에 2시간 자서 밤잠 압력을 지워 버림"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Social Jetlag — Keep Weekend Wake Within +60–90 Min & Repay Debt Earlier",
    "koT": "사회적 시차 큼 — 주말 기상을 +60~90분 이내로 지키고, 이른 취침+25분 낮잠으로 갚으세요",
    "enD": "Chronobiologist Till Roenneberg coined \"social jetlag\" because shifting your sleep midpoint by 3 hours every weekend is biologically identical to flying across 3 time zones every Friday and flying back every Monday.",
    "koD": "시간생물학자 틸 뢰네베르크의 \"사회적 시차\" 연구에 따르면 주말마다 3시간 늦게 자고 늦게 일어나는 것은 매주 금요일 3시간 시차 해외로 날아갔다 월요일에 돌아오는 것과 같습니다.",
    "enS": "\"Wake within 90 minutes of my weekday alarm, catch 15 minutes of morning light, and repay extra sleep with an early bedtime or 25-minute early-afternoon nap.\"",
    "koS": "\"주말에도 평일 기상 +90분 이내에 일어나 햇빛을 쬐고, 부족한 잠은 일찍 자거나 오후 2시 전 25분 낮잠으로 갚는다.\"",
    "enL": [
      "Cap Saturday & Sunday wake time at +60 to +90 minutes past your weekday alarm.",
      "Repay weekday fatigue with a 20–25 minute early-afternoon power nap (before 2 PM) instead of sleeping till noon.",
      "Step into morning daylight Sunday and dim lights 60 minutes before your normal bedtime Sunday night."
    ],
    "koL": [
      "토·일 기상 시각을 평일 알람에서 최대 +60~90분 안쪽으로만 여유를 두세요.",
      "쌓인 피로는 정오 늦잠 대신 오후 2시 전 20~25분 파워냅이나 금요일 이른 취침으로 갚으세요.",
      "일요일 아침 자연광을 쬐고 일요일 밤엔 평소 취침 1시간 전부터 조명을 낮추세요."
    ]
  },
  "mid": {
    "enT": "Moderate Weekend Drift — Anchor Sunday Morning Light & 25-Min Nap Limit",
    "koT": "중간 시차 — 일요일 아침 햇빛과 25분 낮잠 상한만 지켜도 월요일이 상쾌해집니다",
    "enD": "Saturday flexibility is fine when Sunday morning returns close to your weekday rhythm.",
    "koD": "토요일은 조금 여유롭게 보내더라도 일요일 아침만 평일 리듬에 가깝게 맞춰 주면 월요병이 확 줄어듭니다.",
    "enS": "\"Sunday morning light guarantees an easy Monday morning.\"",
    "koS": "\"일요일 아침의 15분 햇빛이 상쾌한 월요일을 보장한다.\"",
    "enL": [
      "Wake within 60 minutes of your weekday time on Sunday morning.",
      "Get 15 minutes of outdoor sky light before noon Sunday.",
      "Avoid napping after 2:30 PM on Sunday."
    ],
    "koL": [
      "일요일 아침만이라도 평일 기상 +60분 이내에 일어나 보세요.",
      "일요일 오전 중 15분간 바깥 자연광을 쬐어 생체시계를 고정하세요.",
      "일요일 오후 2시 30분 이후에는 낮잠을 피하세요."
    ]
  },
  "high": {
    "enT": "Rock-Solid Circadian Rhythm — Smooth Weekday-to-Weekend Energy",
    "koT": "탄탄한 생체시계 일관성 — 평일과 주말 모두 맑은 컨디션입니다",
    "enD": "Consistent wake timing is one of the strongest predictors of mood, metabolic health, and effortless sleep onset.",
    "koD": "일정한 기상 리듬은 기분 안정과 깊은 숙면의 가장 강력한 기반입니다.",
    "enS": "\"Steady rhythm, effortless Mondays.\"",
    "koS": "\"일정한 생체 리듬, 가벼운 월요일 아침.\"",
    "enL": [
      "Keep protecting 7.5+ hours across weekdays so debt stays near zero.",
      "Enjoy natural morning light all week.",
      "Use brief 20-minute naps whenever extra recovery is needed."
    ],
    "koL": [
      "평일에도 7시간 30분 안팎 수면을 지켜 주말 부채를 줄이세요.",
      "일주일 내내 아침 자연광 습관을 유지하세요.",
      "특별히 피곤한 날엔 20분 이내 짧은 낮잠으로 깔끔히 보충하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_weekend_sleep_recovery_v1";
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
      window.gtag('event', "weekend_sleep_recovery_complete", {
        tool_slug: "weekend-sleep-debt-recovery",
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
      var shareUrl = "https://dopabrain.com/portal/tools/weekend-sleep-debt-recovery.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "weekend-sleep-debt-recovery",
        filename: 'dopabrain-weekend-sleep-debt-recovery-card.png',
        badge: "CIRCADIAN HEALTH • SOCIAL JETLAG & WEEKEND SLEEP RECOVERY",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
        accent2: "#8b5cf6"
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
