/* Revenge Bedtime Procrastination Reclamation Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Revenge Bedtime Procrastination Reclamation Planner | DopaBrain",
    "metaDesc": "Staying up way too late scrolling even when exhausted because nighttime is the only quiet hour that belongs to you? Audit 5 daytime-autonomy gaps locally and reclaim real leisure earlier.",
    "kicker": "REVENGE BEDTIME PROCRASTINATION • AUTONOMY RESET",
    "heroTitle": "Revenge Bedtime Procrastination Reclamation Planner",
    "heroLead": "Staying up way too late scrolling even when exhausted because nighttime is the only quiet hour that belongs to you? Audit 5 daytime-autonomy gaps locally and reclaim real leisure earlier.",
    "chip1": "5 Autonomy Gaps",
    "chip2": "Daytime Leisure Swap",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • SPOT WHY YOU GUARD LATE-NIGHT HOURS (1 = RARE, 5 = EVERY NIGHT)",
    "step1Title": "What makes staying up past exhaustion feel strangely rewarding right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One guilt-free 25-minute \"just-for-me\" pocket I will move BEFORE 10 PM tomorrow (100% local):",
    "ctaBtn": "Build My Night-Reclamation Plan",
    "resultBadge": "STEP 2 • YOUR AUTONOMY-FIRST BEDTIME RECOVERY PLAN",
    "noteTitle": "My Protected Pre-10 PM \"Just-For-Me\" Pocket",
    "meterLabel": "Daytime Autonomy & Sleep Harmony",
    "scriptTitle": "Gentle Night-Closure Permission Line",
    "stepsTitle": "3 Compassionate Moves to End Revenge Bedtime Procrastination",
    "stickyTitle": "Ready for a cozy 15-minute wind-down soundtrack instead of endless clips?",
    "stickySub": "Open the free White Noise & Sleep Sound Mixer",
    "stickyBtn": "Sleep Mixer →",
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
    "title": "보복성 취침 미루기(밤샘 스크롤) 탈출·자유시간 회복 플래너 | DopaBrain",
    "metaDesc": "너무 피곤한데도 \"이 시간만큼은 온전히 내 것\"이라며 새벽까지 폰을 못 놓나요? 낮 동안 빼앗긴 5가지 자율성 공백을 점검하고 잠을 깎지 않는 진짜 자유시간을 되찾으세요.",
    "kicker": "취침 미루기(보복성 밤샘) · 나만의 자유시간 회복 툴",
    "heroTitle": "보복성 취침 미루기(밤샘 스크롤) 탈출·자유시간 회복 플래너",
    "heroLead": "너무 피곤한데도 \"이 시간만큼은 온전히 내 것\"이라며 새벽까지 폰을 못 놓나요? 낮 동안 빼앗긴 5가지 자율성 공백을 점검하고 잠을 깎지 않는 진짜 자유시간을 되찾으세요.",
    "chip1": "5가지 자율성 공백",
    "chip2": "낮 자유시간 확보",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 늦은 밤을 놓지 못하는 진짜 이유 점검 (1 = 드묾, 5 = 매일 밤)",
    "step1Title": "피곤한데도 자꾸 잠을 미루며 밤 시간을 붙잡게 만드는 진짜 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 내일 밤 10시 이전으로 미리 옮겨둘 25분짜리 온전한 나만의 자유시간 (100% 로컬):",
    "ctaBtn": "내 취침 미루기 탈출 플랜 만들기",
    "resultBadge": "2단계 • 자율성 회복 중심 취침 미루기 탈출 플랜",
    "noteTitle": "밤 10시 전 확보한 온전한 내 자유시간",
    "meterLabel": "낮 자율성·수면 조화 지수",
    "scriptTitle": "미련 없이 하루를 닫는 자기 배려 문장",
    "stepsTitle": "의지력 탓 없이 보복성 밤샘을 끝내는 3단계",
    "stickyTitle": "끝없는 숏폼 대신 포근한 15분 수면 사운드로 하루를 마무리해 볼까요?",
    "stickySub": "무료 화이트노이즈 믹서로 편안한 취침 전환 만들기",
    "stickyBtn": "수면 믹서 →",
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
    "title": "报复性熬夜与自由时间找回计划 | DopaBrain",
    "heroTitle": "报复性熬夜与自由时间找回计划",
    "heroLead": "排查白天5大自主感缺失，在晚10点前夺回无负罪感的专属放松时间。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "リベンジ夜更かし＆自由時間リカバリー | DopaBrain",
    "heroTitle": "リベンジ夜更かし＆自由時間リカバリー",
    "heroLead": "日中の5つの自律性不足を整理し、睡眠を削らず22時前に自由時間を取り戻します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reset de Procrastinación Nocturna | DopaBrain",
    "heroTitle": "Reset de Procrastinación Nocturna",
    "heroLead": "Detecta 5 vacíos de autonomía diurna y recupera ocio sin culpa antes de las 10 PM.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Procrastinação do Sono | DopaBrain",
    "heroTitle": "Reset de Procrastinação do Sono",
    "heroLead": "Mapeie 5 lacunas de autonomia diurna e recupere lazer sem culpa antes das 22h.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Revenge-Bedtime-Procrastination-Reset | DopaBrain",
    "heroTitle": "Revenge-Bedtime-Procrastination-Reset",
    "heroLead": "Erkenne 5 Autonomie-Lücken am Tag und hole dir echte Freizeit vor 22 Uhr zurück.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Procrastination du Coucher | DopaBrain",
    "heroTitle": "Reset Procrastination du Coucher",
    "heroLead": "Repérez 5 manques d’autonomie diurne et récupérez un vrai temps libre avant 22h.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс отложенного сна и возврат досуга | DopaBrain",
    "heroTitle": "Сброс отложенного сна и возврат досуга",
    "heroLead": "Найдите 5 пробелов дневной автономии и верните личное время до 22:00 без ущерба сну.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "रिवेंज बेडटाइम प्रोक्रैस्टिनेशन रीसेट | DopaBrain",
    "heroTitle": "रिवेंज बेडटाइम प्रोक्रैस्टिनेशन रीसेट",
    "heroLead": "दिन की 5 स्वायत्तता कमियां पहचानें और रात 10 बजे से पहले अपना सुकून समय वापस पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Revenge Bedtime Procrastination | DopaBrain",
    "heroTitle": "Reset Revenge Bedtime Procrastination",
    "heroLead": "Audit 5 celah otonomi siang hari dan ambil kembali waktu santai bebas rasa bersalah sebelum jam 10 malam.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "İntikam Uyku Erteleme Sıfırlayıcı | DopaBrain",
    "heroTitle": "İntikam Uyku Erteleme Sıfırlayıcı",
    "heroLead": "Gündüz 5 özerklik boşluğunu bulun ve saat 22’den önce suçsuz serbest zaman kazanın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "zero_day_leisure",
    "en": "Zero Daytime Ownership — Every waking hour belongs to work, chores, or other people’s needs",
    "ko": "낮 자유시간 0분 — 깨어 있는 모든 시간이 일·집안일·타인의 요구로만 채워짐"
  },
  {
    "id": "transition_friction",
    "en": "Bedtime Chore Wall — Avoiding sleep because brushing teeth, skincare, or tidying feels exhausting",
    "ko": "취침 준비 장벽 — 세안·양치·정리 과정이 귀찮아 소파나 침대 위에서 폰만 붙잡음"
  },
  {
    "id": "dread_tomorrow",
    "en": "Delaying Tomorrow — Staying awake so tomorrow morning’s obligations arrive later",
    "ko": "내일 도착 미루기 — 잠들면 바로 내일 출근·할 일이 시작될 것 같아 오늘을 늘림"
  },
  {
    "id": "low_energy_scroll",
    "en": "Passive Dopamine Drift — Too tired for real hobbies, so you default to endless short videos",
    "ko": "저에너지 수동 스크롤 — 진짜 취미를 할 힘은 없어 숏폼만 무의식적으로 넘김"
  },
  {
    "id": "guilty_enjoyment",
    "en": "Guilty Daytime Rest — Feeling you only \"earn\" relaxation once everyone else is asleep",
    "ko": "낮 휴식 죄책감 — 모두가 잠든 밤이 되어서야 비로소 쉴 자격이 생긴다고 느낌"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Autonomy Hunger — Stop Fighting Bedtime & Move Leisure Earlier",
    "koT": "자유시간 갈증 심함 — 밤의 의지력을 탓하지 말고 낮·저녁에 내 시간을 먼저 떼어 두세요",
    "enD": "Sleep researcher Floor Kroese showed bedtime procrastination is rarely laziness—it is a self-regulation drain after a day with zero personal autonomy. Moving just 25 minutes of guilt-free leisure before 10 PM solves the root cause.",
    "koD": "수면 심리 연구에 따르면 취침 미루기는 게으름이 아니라 낮 동안 자율성을 뺏긴 뇌가 밤에 보상받으려는 현상입니다. 밤 10시 이전에 죄책감 없는 25분 자유시간을 먼저 챙겨주면 밤샘 욕구가 자연히 줄어듭니다.",
    "enS": "\"I deserve real, unhurried free time while I am awake enough to enjoy it—not stolen from tomorrow’s sleep.\"",
    "koS": "\"나는 내일 잠을 깎아 먹으며 몰래 쉴 게 아니라, 깨어 있을 때 당당하게 즐거운 나만의 시간을 누릴 자격이 있어.\"",
    "enL": [
      "Claim a non-negotiable 25-minute \"off-duty\" leisure block between 8–10 PM where chores stop completely.",
      "Do your bathroom/bedtime prep 45 minutes BEFORE you want to sleep so transition friction drops to zero.",
      "Replace infinite short-form feeds in bed with a finite treat (1 podcast episode, 1 comic chapter, or cozy audio)."
    ],
    "koL": [
      "오후 8~10시 사이에 집안일과 업무를 완전히 멈추는 25분 \"무조건 내 자유시간\"을 먼저 확보하세요.",
      "자고 싶은 시간보다 45분 먼저 양치·세안을 끝내두어 잠자리 전환 장벽을 0으로 낮추세요.",
      "침대 위 무한 숏폼 대신 끝이 있는 즐거움(에피소드 1편·책 1챕터·오디오북 타이머)으로 바꾸세요."
    ]
  },
  "mid": {
    "enT": "Evening Drift — Add a Cozy Finite Wind-Down Ritual",
    "koT": "저녁 관성 지연 — 끝이 있는 포근한 취침 의식을 하나 심어 두세요",
    "enD": "You have some personal space, yet passive scrolling blurs the finish line of your day. A pleasant, finite closing ritual makes going to bed feel like a reward instead of a chore.",
    "koD": "어느 정도 여유는 있지만 수동적인 스크롤이 하루의 마침표를 흐리고 있습니다. 끝이 정해진 기분 좋은 취침 의식을 넣으면 자러 가는 시간이 보상으로 바뀝니다.",
    "enS": "\"Closing my day at a cozy hour is a gift to tomorrow-me, not a punishment.\"",
    "koS": "\"포근한 시간에 하루를 닫는 건 통제가 아니라 내일의 나에게 주는 선물이야.\"",
    "enL": [
      "Set a gentle \"wind-down chime\" 30 minutes before target lights-out.",
      "Plug your phone charger 6 feet away from the bed and switch to warm lamp light.",
      "Move bedtime earlier by just 15 minutes this week instead of trying a huge jump overnight."
    ],
    "koL": [
      "목표 취침 30분 전에 부드러운 \"마무리 알림\"을 설정해 하루 종료 신호를 주세요.",
      "충전기를 침대에서 두 걸음 떨어진 곳에 두고 은은한 무드등으로 조명을 낮추세요.",
      "한 번에 2시간 당기려 하지 말고 이번 주는 딱 15분만 일찍 눕는 것으로 시작하세요."
    ]
  },
  "high": {
    "enT": "Healthy Autonomy-Sleep Balance — Keep Protecting Daytime Breathing Room",
    "koT": "건강한 자율성·수면 균형 — 낮의 작은 자유 포켓을 계속 지켜 나가세요",
    "enD": "Your waking hours include enough personal ownership that sleep feels restorative rather than restrictive. Keep honoring your evening boundary.",
    "koD": "낮 동안 나만의 자율성이 충분히 충족되어 밤잠을 빼앗지 않고도 만족감을 얻고 있습니다. 지금의 좋은 저녁 경계를 꾸준히 지키세요.",
    "enS": "\"Because I claim small joys in daylight, I can greet sleep peacefully at night.\"",
    "koS": "\"낮에 작은 즐거움을 충분히 챙기기에 밤에는 미련 없이 편안히 잠들 수 있어.\"",
    "enL": [
      "Keep defending at least one small daily joy pocket during daylight hours.",
      "Notice how much sharper and kinder tomorrow feels after a full night’s rest.",
      "Enjoy your screen-free closing 20 minutes tonight."
    ],
    "koL": [
      "낮 시간 속 작은 나만의 즐거움 포켓을 계속 우선순위로 지켜 두세요.",
      "충분히 잔 다음 날의 맑은 기분과 여유를 자주 떠올려 보세요.",
      "오늘 밤도 화면 없는 편안한 20분 마무리를 즐기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_bedtime_revenge_v1";
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
      window.gtag('event', "bedtime_revenge_complete", {
        tool_slug: "bedtime-revenge-procrastination-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/bedtime-revenge-procrastination-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "bedtime-revenge-procrastination-reset",
        filename: 'dopabrain-bedtime-revenge-procrastination-reset-card.png',
        badge: "REVENGE BEDTIME PROCRASTINATION • AUTONOMY RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#a855f7",
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
