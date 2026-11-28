/* Early-Morning Flight & Pre-Travel Insomnia Calm Plan
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Early-Morning Flight & Pre-Travel Insomnia Calm Plan | DopaBrain",
    "metaDesc": "Lying wide awake at 11 PM terrified you will sleep through your 4:30 AM airport alarm? Audit 5 pre-travel sleep saboteurs locally and set a fail-safe 2-alarm + pre-packed calm night.",
    "kicker": "TRAVEL SLEEP • EARLY-MORNING FLIGHT & PRE-TRAVEL INSOMNIA PLAN",
    "heroTitle": "Early-Morning Flight & Pre-Travel Insomnia Calm Plan",
    "heroLead": "Lying wide awake at 11 PM terrified you will sleep through your 4:30 AM airport alarm? Audit 5 pre-travel sleep saboteurs locally and set a fail-safe 2-alarm + pre-packed calm night.",
    "chip1": "5 Pre-Trip Traps",
    "chip2": "2-Alarm Fail-Safe",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PRE-TRAVEL SLEEP BLOCKERS (1 = RESTFUL, 5 = WIRED)",
    "step1Title": "What keeps your eyes wide open the night before an early trip?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My 3 \"Doorstep Ready\" items packed by 8 PM (passport, charger, boarding pass — 100% local):",
    "ctaBtn": "Build My Pre-Flight Calm Sleep Plan",
    "resultBadge": "STEP 2 • YOUR ZERO-OVERSLEEP PRE-TRAVEL PROTOCOL",
    "noteTitle": "My 8 PM Doorstep Checklist",
    "meterLabel": "Pre-Travel Sleep Calm",
    "scriptTitle": "Oversleep-Anxiety Off-Switch Reassurance",
    "stepsTitle": "3 Moves That End \"First-Night / Early-Alarm\" Wakefulness",
    "stickyTitle": "Mask pre-trip adrenaline with steady rain or cabin brown noise.",
    "stickySub": "Open Free White Noise & Rain Player",
    "stickyBtn": "Play Sleep Audio →",
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
    "title": "새벽 비행기·여행 전날 알람 불안 & 잠 못 드는 밤 안심 플랜 | DopaBrain",
    "metaDesc": "새벽 4시 반 비행기 알람을 못 들을까 봐 전날 밤 한숨도 못 자고 뒤척이시나요? 5가지 여행 전날 불면 원인을 점검하고 이중 알람·전날 패킹 완료 안심 프로토콜을 세팅하세요.",
    "kicker": "여행 수면 케어 · 새벽 비행기·출장 전날 잠 못 이루는 불면 완화 플랜",
    "heroTitle": "새벽 비행기·여행 전날 알람 불안 & 잠 못 드는 밤 안심 플랜",
    "heroLead": "새벽 4시 반 비행기 알람을 못 들을까 봐 전날 밤 한숨도 못 자고 뒤척이시나요? 5가지 여행 전날 불면 원인을 점검하고 이중 알람·전날 패킹 완료 안심 프로토콜을 세팅하세요.",
    "chip1": "5가지 전날 함정",
    "chip2": "이중 알람 안심",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 여행·출장 전날 수면 방해 요인 점검 (1 = 꿀잠, 5 = 완전 각성)",
    "step1Title": "새벽 출발 전날 밤 가장 크게 잠을 쫓는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 저녁 8시 전에 현관에 미리 챙겨 둘 핵심 3가지 (여권·충전기·탑승권 등, 100% 로컬):",
    "ctaBtn": "내 새벽 출발 전날 안심 수면 플랜 보기",
    "resultBadge": "2단계 • 알람 불안을 꺼 주는 여행 전날 숙면 프로토콜",
    "noteTitle": "저녁 8시 완료 현관 체크리스트",
    "meterLabel": "출발 전날 수면 안정도",
    "scriptTitle": "\"알람 못 들으면 어쩌지\" 불안을 끄는 안심 1줄",
    "stepsTitle": "새벽 알람 불면과 반쯤 깨어 있는 잠을 끝내는 3단계",
    "stickyTitle": "여행 전날 설렘·긴장을 차분한 빗소리·기내 브라운 노이즈로 가라앉혀 보세요.",
    "stickySub": "무료 백색소음·빗소리 플레이어 열기",
    "stickyBtn": "수면 사운드 재생 →",
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
    "title": "早班机与出行前夜失眠安抚计划 | DopaBrain",
    "heroTitle": "早班机与出行前夜失眠安抚计划",
    "heroLead": "用晚8点打包完毕、双设备闹钟与合理入睡时间告别怕睡过头的焦虑。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "早朝フライト・旅行前夜の不眠＆アラーム不安プラン | DopaBrain",
    "heroTitle": "早朝フライト・旅行前夜の不眠＆アラーム不安プラン",
    "heroLead": "20時パッキング完了と二重アラームで早朝出発前夜の寝不足不安を和らげます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Calma contra el Insomnio antes de Vuelos Madrugadores | DopaBrain",
    "heroTitle": "Plan de Calma contra el Insomnio antes de Vuelos Madrugadores",
    "heroLead": "Evita el miedo a quedarte dormido con maleta lista a las 20h y doble alarma verificada.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Calma contra Insônia antes de Voos de Madrugada | DopaBrain",
    "heroTitle": "Plano de Calma contra Insônia antes de Voos de Madrugada",
    "heroLead": "Acabe com o medo de perder o alarme fechando a mala às 20h com alarme duplo testado.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Frühflug- & Vor-Reise-Schlaflosigkeit Ruhe-Plan | DopaBrain",
    "heroTitle": "Frühflug- & Vor-Reise-Schlaflosigkeit Ruhe-Plan",
    "heroLead": "Beende Verschlaf-Angst mit 20-Uhr-Packstopp, Doppel-Wecker und realistischer Bettzeit.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Anti-Insomnie Avant Vol Matinal & Voyage | DopaBrain",
    "heroTitle": "Plan Anti-Insomnie Avant Vol Matinal & Voyage",
    "heroLead": "Évitez la peur de rater le réveil avec valise bouclée à 20h et double alarme testée.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План спокойного сна перед ранним рейсом и поездкой | DopaBrain",
    "heroTitle": "План спокойного сна перед ранним рейсом и поездкой",
    "heroLead": "Уберите страх проспать с готовым чемоданом к 20:00 и двумя независимыми будильниками.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सुबह की फ्लाइट और प्री-ट्रैवल अनिद्रा शांत प्लान | DopaBrain",
    "heroTitle": "सुबह की फ्लाइट और प्री-ट्रैवल अनिद्रा शांत प्लान",
    "heroLead": "रात 8 बजे पैकिंग और डबल अलार्म के साथ अलार्म मिस होने की चिंता दूर करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Rencana Tidur Tenang Sebelum Penerbangan Subuh | DopaBrain",
    "heroTitle": "Rencana Tidur Tenang Sebelum Penerbangan Subuh",
    "heroLead": "Hentikan cemas ketiduran dengan beres koper jam 8 malam dan alarm ganda terpisah.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Erken Uçuş ve Seyahat Öncesi Uykusuzluk Sakinlik Planı | DopaBrain",
    "heroTitle": "Erken Uçuş ve Seyahat Öncesi Uykusuzluk Sakinlik Planı",
    "heroLead": "Saat 20:00 bavul kapanışı ve çift bağımsız alarmla uyuyakalma kaygısını bitirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "oversleep_vigilance",
    "en": "Alarm-Watch Vigilance — Waking up every 40 minutes checking if your phone died or muted",
    "ko": "알람 감시 각성 — 폰이 꺼졌거나 무음일까 봐 40분마다 깨서 시간을 확인함"
  },
  {
    "id": "midnight_packing",
    "en": "11 PM Panic Packing — Folding clothes and searching for your passport 20 minutes before bed",
    "ko": "밤 11시 막판 짐 싸기 — 잠들기 20분 전까지 여권·충전기를 찾느라 아드레날린이 치솟음"
  },
  {
    "id": "forced_8pm_bedtime",
    "en": "Forcing Bed 3 Hours Early — Lying tense at 8:30 PM when your circadian clock says \"daytime!\"",
    "ko": "억지 8시 반 취침 — 생체시계는 낮인데 일찍 자려고 억지로 누웠다가 오히려 깸"
  },
  {
    "id": "unverified_transit",
    "en": "Morning Logistics Doubt — Still unsure about taxi/train timing or terminal gate at bedtime",
    "ko": "새벽 이동 미확정 — 공항 택시·리무진 시간이나 터미널 확인이 덜 돼 머릿속이 바쁨"
  },
  {
    "id": "sleep_catastrophizing",
    "en": "Trip-Ruined Catastrophizing — Telling yourself \"If I only get 4 hours, tomorrow is ruined\"",
    "ko": "수면 파국화 — \"오늘 4시간밖에 못 자면 여행/출장 다 망칠 거야\"라고 스스로 압박함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Pre-Trip Vigilance — Finish Packing by 8 PM, Set 2 Independent Alarms & Sleep Near Normal Bedtime",
    "koT": "전날 각성 높음 — 저녁 8시 패킹 마감·서로 다른 기기 2중 알람·평소보다 최대 45분만 앞당겨 누우세요",
    "enD": "Sleep lab research shows \"anticipated early waking\" spikes stress hormones an hour early AND causes shallow fragmented sleep when you fear missing an alarm. Finishing packing by 8 PM, setting a backup alarm across the room, and aiming for at most 45 min earlier than normal restores real deep sleep.",
    "koD": "수면 연구에 따르면 새벽 기상 불안이 있으면 뇌가 알람을 감시하느라 깊은 잠에 들지 못합니다. 저녁 8시 패킹 마감, 서로 다른 기기(폰+시계) 2중 알람, 평소보다 최대 45분만 앞당긴 취침이 훨씬 깊은 잠을 보장합니다.",
    "enS": "\"Bags are zipped, two independent alarms are tested at max volume, and even 4–5 calm hours carry me smoothly onto the plane.\"",
    "koS": "\"짐도 다 쌌고 두 대의 알람도 소리 테스트를 끝냈다. 오늘 4~5시간만 편하게 자도 내일 일정은 충분히 거뜬히 소화한다.\"",
    "enL": [
      "Finish 100% of packing, check-in, and airport transport booking by 8 PM—place bags and outfit visibly by the door.",
      "Set TWO independent alarms (phone plugged into charger + backup watch/clock/partner 5 min later) and test volume once, then flip clocks face-down.",
      "Do NOT go to bed 3 hours early (you will just lie awake); aim for 30–45 minutes earlier than normal and let quiet rest count."
    ],
    "koL": [
      "저녁 8시 전에 짐 싸기·모바일 체크인·공항 이동 예약을 100% 끝내고 옷과 가방을 현관에 두세요.",
      "충전 중인 휴대폰 알람 + 5분 뒤 보조 시계/워치 2중 알람을 소리 테스트 1회 후 시계 화면을 뒤집어 두세요.",
      "평소보다 3시간 일찍 억지로 눕지 말고 최대 30~45분만 앞당겨 누워 눈 감고 쉬는 시간을 허용하세요."
    ]
  },
  "mid": {
    "enT": "Light Pre-Trip Jitters — Verify Double Alarm & Unwind 30 Min Before Bed",
    "koT": "가벼운 출발 설렘 — 2중 알람 확인과 취침 30분 전 화면 끄기만 챙기세요",
    "enD": "With bags packed early and two alarms set, your mind can safely let go.",
    "koD": "일찍 짐을 싸고 2중 알람을 걸어 두면 마음이 한결 편안해집니다.",
    "enS": "\"Packed early, alarms verified, mind off duty.\"",
    "koS": "\"준비는 끝났고 알람은 든든하다. 이제 내 뇌는 휴식 모드.\"",
    "enL": [
      "Put phone on charger across the nightstand so battery cannot die.",
      "Skip late alcohol (it fragments early-morning sleep).",
      "Enjoy a 15-min plane power nap if tired tomorrow."
    ],
    "koL": [
      "배터리 방전 걱정이 없도록 휴대폰을 충전기에 꼭 꽂아 두세요.",
      "전날 밤 음주는 새벽 각성을 악화시키니 피해 주세요.",
      "내일 피곤하면 이동 중 15분 짧은 눈 붙이기로 보충하면 충분합니다."
    ]
  },
  "high": {
    "enT": "Calm Pre-Travel Pro — Smooth Rest Before Takeoff",
    "koT": "노련한 여행 수면가 — 출발 전날에도 차분하게 잘 쉬고 있습니다",
    "enD": "Your logistics checklist keeps bedtime quiet and predictable.",
    "koD": "체계적인 사전 준비 덕분에 출발 전날 밤도 평온하게 보내고 있습니다.",
    "enS": "\"Prepared by evening, rested by morning.\"",
    "koS": "\"저녁에 준비를 끝내고, 가벼운 마음으로 아침을 맞는다.\"",
    "enL": [
      "Keep your reusable 8 PM travel checklist.",
      "Hydrate well on travel day.",
      "Use morning sunlight at your destination to reset fast."
    ],
    "koL": [
      "저녁 8시 여행 체크리스트 습관을 유지하세요.",
      "이동 당일 수분을 충분히 섭취해 주세요.",
      "도착지 아침 햇빛으로 리듬을 빠르게 맞추세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_early_flight_v1";
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
      window.gtag('event', "early_flight_sleep_complete", {
        tool_slug: "pre-travel-early-flight-sleep-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/pre-travel-early-flight-sleep-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "pre-travel-early-flight-sleep-plan",
        filename: 'dopabrain-pre-travel-early-flight-sleep-plan-card.png',
        badge: "TRAVEL SLEEP • EARLY-MORNING FLIGHT & PRE-TRAVEL INSOMNIA PLAN",
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
