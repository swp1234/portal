/* Sleep Debt & 7-Day Circadian Recovery Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Sleep Debt & 7-Day Circadian Recovery Planner | DopaBrain",
    "metaDesc": "Running on 5–6 hours all week and crashing hard on weekends without feeling rested? Audit 5 sleep-debt drivers locally and get a realistic 7-day circadian catch-up plan.",
    "kicker": "CIRCADIAN RECOVERY • 7-DAY SLEEP RESET",
    "heroTitle": "Sleep Debt & 7-Day Circadian Recovery Planner",
    "heroLead": "Running on 5–6 hours all week and crashing hard on weekends without feeling rested? Audit 5 sleep-debt drivers locally and get a realistic 7-day circadian catch-up plan.",
    "chip1": "5 Sleep Debt Drivers",
    "chip2": "7-Day Catch-Up Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK SLEEP DEBT SIGNALS (1 = RESTED, 5 = SEVERE DEBT)",
    "step1Title": "What is quietly compounding your sleep debt this week?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My realistic lights-out target time tonight (100% local):",
    "ctaBtn": "Build 7-Day Sleep Catch-Up",
    "resultBadge": "STEP 2 • YOUR 7-DAY CIRCADIAN RECOVERY PLAN",
    "noteTitle": "Tonight’s Realistic Sleep Anchor",
    "meterLabel": "Sleep Restoration Index",
    "scriptTitle": "Evening Wind-Down Permission Cue",
    "stepsTitle": "3 Evidence-Informed Moves to Repay Sleep Debt Gently",
    "stickyTitle": "Need calm rain, brown noise, or ocean audio tonight?",
    "stickySub": "Open the free White Noise & Ambient Sound Mixer",
    "stickyBtn": "White Noise →",
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
    "title": "수면 부채·7일 생체리듬 회복 플래너 | DopaBrain",
    "metaDesc": "평일엔 5~6시간 자고 주말에 몰아 자도 계속 피곤한가요? 5가지 수면 부채 원인을 점검하고 생체시계를 망가뜨리지 않는 7일 회복 플랜을 받으세요.",
    "kicker": "수면 부채 해소 · 7일 생체리듬 회복",
    "heroTitle": "수면 부채·7일 생체리듬 회복 플래너",
    "heroLead": "평일엔 5~6시간 자고 주말에 몰아 자도 계속 피곤한가요? 5가지 수면 부채 원인을 점검하고 생체시계를 망가뜨리지 않는 7일 회복 플랜을 받으세요.",
    "chip1": "5가지 수면 부채 원인",
    "chip2": "7일 회복 스케줄",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 수면 부채 신호 점검 (1 = 충분함, 5 = 누적 심함)",
    "step1Title": "이번 주 내 수면 부채를 가장 크게 쌓고 있는 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 밤 현실적인 취침 목표 시각 (100% 로컬):",
    "ctaBtn": "7일 수면 회복 플랜 만들기",
    "resultBadge": "2단계 • 7일 생체리듬 수면 회복 프로토콜",
    "noteTitle": "오늘 밤 현실적인 취침 앵커",
    "meterLabel": "수면 회복 균형 지수",
    "scriptTitle": "밤의 휴식을 허락하는 문장",
    "stepsTitle": "생체시계를 지키며 수면 부채를 갚는 3단계",
    "stickyTitle": "오늘 밤 숙면을 돕는 빗소리·브라운 노이즈가 필요하신가요?",
    "stickySub": "무료 화이트 노이즈·자연 백색소음 믹서 바로 열기",
    "stickyBtn": "백색소음 →",
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
    "title": "睡眠负债与7天节律恢复计划 | DopaBrain",
    "heroTitle": "睡眠负债与7天节律恢复计划",
    "heroLead": "排查5大熬夜与睡眠债诱因，定制不打乱生物钟的7天温和补觉方案。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "睡眠負債・7日間リズム回復プラン | DopaBrain",
    "heroTitle": "睡眠負債・7日間リズム回復プラン",
    "heroLead": "睡眠不足の5要因を整理し、体内時計を崩さず7日間で回復する計画を作成。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de Deuda de Sueño (7 Días) | DopaBrain",
    "heroTitle": "Planificador de Deuda de Sueño (7 Días)",
    "heroLead": "Identifica 5 causas de déficit de sueño y arma un plan circadiano realista de 7 días.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Dívida de Sono (7 Dias) | DopaBrain",
    "heroTitle": "Planejador de Dívida de Sono (7 Dias)",
    "heroLead": "Mapeie 5 causas da falta de sono e crie um plano circadiano gradual de 7 dias.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Schlafschuld- & 7-Tage-Rhythmus-Planer | DopaBrain",
    "heroTitle": "Schlafschuld- & 7-Tage-Rhythmus-Planer",
    "heroLead": "Prüfe 5 Schlafdefizit-Treiber und erstelle einen sanften 7-Tage-Erholungsplan.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Dette de Sommeil (7 Jours) | DopaBrain",
    "heroTitle": "Planificateur Dette de Sommeil (7 Jours)",
    "heroLead": "Repérez 5 causes de manque de sommeil et créez un rattrapage circadien doux sur 7 jours.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План восстановления после недосыпа (7 дней) | DopaBrain",
    "heroTitle": "План восстановления после недосыпа (7 дней)",
    "heroLead": "Проверьте 5 причин нехватки сна и соберите мягкий 7-дневный план без сбоя режима.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "स्लीप डेब्ट व 7-दिन सर्कैडियन प्लानर | DopaBrain",
    "heroTitle": "स्लीप डेब्ट व 7-दिन सर्कैडियन प्लानर",
    "heroLead": "नींद की कमी के 5 कारण जांचें और 7-दिन का संतुलित रिकवरी प्लान बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Pemulihan Utang Tidur 7 Hari | DopaBrain",
    "heroTitle": "Perencana Pemulihan Utang Tidur 7 Hari",
    "heroLead": "Audit 5 pemicu kurang tidur dan buat jadwal pemulihan ritme sirkadian 7 hari.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Uyku Borcu ve 7 Günlük Ritim Planlayıcı | DopaBrain",
    "heroTitle": "Uyku Borcu ve 7 Günlük Ritim Planlayıcı",
    "heroLead": "5 uyku borcu nedenini ölçün ve biyolojik saati bozmadan 7 günlük toparlanma planı kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "revenge_bedtime",
    "en": "Revenge Bedtime Scrolling — Staying up past tiredness to reclaim quiet personal time",
    "ko": "보복성 취침 미루기 — 피곤한데도 내 시간을 보상받으려 늦게까지 스마트폰 시청"
  },
  {
    "id": "wake_drift",
    "en": "Weekend Social Jetlag — Waking 2+ hours later on weekends than weekdays",
    "ko": "주말 수면 시차 — 평일보다 주말 기상 시각이 2시간 이상 뒤로 밀림"
  },
  {
    "id": "late_caffeine",
    "en": "Late Stimulants — Caffeine, heavy meals, or intense work within 6 hours of bed",
    "ko": "늦은 각성 자극 — 취침 6시간 이내 카페인·야식·고강도 업무"
  },
  {
    "id": "racing_pillow",
    "en": "Pillow Rumination — Mind suddenly replaying to-do lists the moment lights go out",
    "ko": "베개 위 생각 폭주 — 불만 끄면 내일 할 일과 걱정이 쏟아짐"
  },
  {
    "id": "morning_dim",
    "en": "Dim Morning Start — Skipping natural daylight in the first hour after waking",
    "ko": "어두운 아침 시작 — 기상 후 1시간 이내 자연 채광 노출 부족"
  }
];
  var TIERS = {
  "low": {
    "enT": "Accumulated Sleep Debt — Repay Gently Over 5–7 Nights (No 4-Hour Weekend Crash)",
    "koT": "수면 부채 누적 상태 — 주말 몰아자기 대신 5~7일간 30분씩 앞당겨 회복하세요",
    "enD": "Extreme weekend oversleeping creates Monday social jetlag. Adding 30–45 minutes earlier bedtime across 5 nights plus bright morning light restores energy far more smoothly.",
    "koD": "주말에 3~4시간 몰아 자면 월요일 시차가 심해집니다. 5일간 취침을 30~45분씩 앞당기고 아침 햇볕을 쬐는 편이 훨씬 안정적으로 회복됩니다.",
    "enS": "\"Rest is not lost time—going to bed 30 minutes earlier tonight buys back tomorrow’s mood, focus, and patience.\"",
    "koS": "\"잠은 버리는 시간이 아니야—오늘 밤 30분만 일찍 자면 내일의 집중력과 평온함을 되찾을 수 있어.\"",
    "enL": [
      "Move bedtime earlier by just 30 minutes tonight rather than aiming for an unrealistic 2-hour jump.",
      "Get 10 minutes of outdoor morning daylight within 60 minutes of waking to anchor your clock.",
      "Park your phone charger outside arm’s reach and swap the last 20 minutes for audio or paper reading."
    ],
    "koL": [
      "무리하게 2시간 당기기보다 오늘 밤 딱 30분만 일찍 눕는 것을 목표로 하세요.",
      "기상 후 1시간 안에 10분간 자연 채광을 쬐어 생체시계를 고정하세요.",
      "충전기를 침대에서 멀리 두고 마지막 20분은 백색소음이나 종이책으로 전환하세요."
    ]
  },
  "mid": {
    "enT": "Mild Sleep Drift — Tighten Your Morning Light & 30-Min Dim-Down",
    "koT": "경미한 수면 밀림 — 아침 채광과 취침 30분 전 조도 낮추기만 챙기세요",
    "enD": "Your sleep foundation is close to steady; dimming overhead lights 30 minutes before bed and keeping wake time within 60 minutes will sharpen daytime alertness.",
    "koD": "수면 리듬이 거의 안정적입니다. 취침 30분 전 조명 낮추기와 기상 시각 1시간 이내 유지 만으로도 낮 컨디션이 확 올라갑니다.",
    "enS": "\"Dimming lights 30 minutes earlier tells my brain the workday is officially done.\"",
    "koS": "\"취침 30분 전 조명을 낮추면 내 뇌가 오늘 하루가 끝났음을 자연스럽게 알아차린다.\"",
    "enL": [
      "Set a gentle \"dim screens & lights\" alarm 30 minutes before your target bedtime.",
      "Keep caffeine before 2 PM to protect deep slow-wave sleep.",
      "Keep weekend wake time within 60 minutes of weekdays; use a 20-min early-afternoon nap if needed."
    ],
    "koL": [
      "목표 취침 30분 전에 화면·조명 낮추기 알림을 설정하세요.",
      "깊은 수면을 지키기 위해 카페인은 오후 2시 이전으로 제한해 보세요.",
      "주말 기상도 평일 대비 1시간 이내로 유지하고 피곤하면 이른 오후 20분 낮잠을 활용하세요."
    ]
  },
  "high": {
    "enT": "Aligned Sleep Rhythm — Protect Your Consistent Circadian Anchor",
    "koT": "건강한 생체리듬 유지 중 — 일정한 기상·취침 앵커를 계속 지키세요",
    "enD": "Your sleep timing and recovery habits are working in sync. Keep honoring steady wake times and low-stimulation wind-downs.",
    "koD": "수면 리듬과 회복 습관이 조화롭게 유지되고 있습니다. 일정한 기상 시각과 저자극 취침 루틴을 꾸준히 이어가세요.",
    "enS": "\"Consistent sleep is my quiet superpower for calm mood and sharp thinking.\"",
    "koS": "\"규칙적인 수면은 흔들리지 않는 기분과 맑은 사고력을 지키는 가장 확실한 기반이다.\"",
    "enL": [
      "Keep morning daylight and consistent wake time as your primary anchors.",
      "Protect your bedroom as a cool, dark, low-stress space.",
      "Use calm ambient sound whenever travel or noise disrupts your routine."
    ],
    "koL": [
      "아침 자연광과 일정한 기상 시각을 핵심 앵커로 유지하세요.",
      "침실을 시원하고 어두우며 자극이 적은 휴식 공간으로 지키세요.",
      "여행이나 소음이 있는 날엔 백색소음으로 익숙한 수면 신호를 만들어 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_sleep_debt_v1";
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
      window.gtag('event', "sleep_debt_plan_complete", {
        tool_slug: "sleep-debt-recovery-planner",
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
      var shareUrl = "https://dopabrain.com/portal/tools/sleep-debt-recovery-planner.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "sleep-debt-recovery-planner",
        filename: 'dopabrain-sleep-debt-recovery-planner-card.png',
        badge: "CIRCADIAN RECOVERY • 7-DAY SLEEP RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
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
