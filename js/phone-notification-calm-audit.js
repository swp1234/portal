/* Smartphone Alert & Digital Calm Notification Audit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Smartphone Alert & Digital Calm Notification Audit | DopaBrain",
    "metaDesc": "Feeling mentally scattered before noon from tiny red badges and vibration pings? Audit 5 smartphone interruption leaks locally and silence 80% of noise in 3 minutes.",
    "kicker": "DIGITAL MINIMALISM • ALERT HYGIENE AUDIT",
    "heroTitle": "Smartphone Alert & Digital Calm Notification Audit",
    "heroLead": "Feeling mentally scattered before noon from tiny red badges and vibration pings? Audit 5 smartphone interruption leaks locally and silence 80% of noise in 3 minutes.",
    "chip1": "5 Alert Leaks",
    "chip2": "3-Min Calm Settings",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • RATE YOUR DAILY PHONE INTERRUPTIONS (1 = QUIET, 5 = CONSTANT)",
    "step1Title": "Which phone alerts are hijacking your attention without permission?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: 3 non-human apps whose notifications I will turn OFF right now (100% local):",
    "ctaBtn": "Generate My 3-Minute Calm Phone Plan",
    "resultBadge": "STEP 2 • YOUR CALM NOTIFICATION ARCHITECTURE",
    "noteTitle": "First 3 Apps to Silence Today",
    "meterLabel": "Attention Sanctuary Score",
    "scriptTitle": "Human-Only Notification Rule",
    "stepsTitle": "3 Immediate Phone Settings That Cut Daily Stress",
    "stickyTitle": "Ready to test a calm 30-minute phone-free focus window?",
    "stickySub": "Start the free Digital Detox Timer next",
    "stickyBtn": "Detox Timer →",
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
    "title": "스마트폰 알림 소음 점검 & 디지털 평온 감사 툴 | DopaBrain",
    "metaDesc": "오전부터 울리는 진동과 빨간 배지 숫자 때문에 집중이 산산조각 나나요? 5가지 알림 집중 누수를 점검하고 3분 만에 불필요한 소음의 80%를 정리하세요.",
    "kicker": "스마트폰 알림 정리 · 디지털 평온 감사 툴",
    "heroTitle": "스마트폰 알림 소음 점검 & 디지털 평온 감사 툴",
    "heroLead": "오전부터 울리는 진동과 빨간 배지 숫자 때문에 집중이 산산조각 나나요? 5가지 알림 집중 누수를 점검하고 3분 만에 불필요한 소음의 80%를 정리하세요.",
    "chip1": "5가지 알림 누수",
    "chip2": "3분 평온 설정",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 일상 스마트폰 알림 방해 점검 (1 = 고요함, 5 = 쉴 새 없음)",
    "step1Title": "지금 내 허락 없이 주의력을 빼앗아 가는 스마트폰 알림은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 지금 바로 알림을 끌 비(非)사람 앱 3가지 (100% 로컬):",
    "ctaBtn": "내 3분 스마트폰 평온 설정 플랜 보기",
    "resultBadge": "2단계 • 디지털 평온 알림 아키텍처",
    "noteTitle": "오늘 가장 먼저 알림을 끌 앱 3가지",
    "meterLabel": "주의력 고요함 지수",
    "scriptTitle": "사람 중심 알림 필터 원칙",
    "stepsTitle": "3분 만에 하루 집중력을 되살리는 설정 3가지",
    "stickyTitle": "알림을 정리한 김에 30분 폰 프리 디지털 디톡스를 바로 시작해 볼까요?",
    "stickySub": "무료 디지털 디톡스 타이머로 고요한 집중 체험하기",
    "stickyBtn": "디톡스 타이머 →",
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
    "title": "手机通知降噪与数字清净审计 | DopaBrain",
    "heroTitle": "手机通知降噪与数字清净审计",
    "heroLead": "本地排查5类手机打断源，3分钟关闭80%非必要推送与红点干扰。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "スマホ通知ノイズ＆デジタル静寂監査 | DopaBrain",
    "heroTitle": "スマホ通知ノイズ＆デジタル静寂監査",
    "heroLead": "集中を奪う5つの通知漏れを点検し、3分で不要な通知の80%を静かにします。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Auditoría de Notificaciones y Calma Digital | DopaBrain",
    "heroTitle": "Auditoría de Notificaciones y Calma Digital",
    "heroLead": "Detecta 5 fugas de atención en tu móvil y silencia el 80 % del ruido en 3 minutos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Auditoria de Notificações e Calma Digital | DopaBrain",
    "heroTitle": "Auditoria de Notificações e Calma Digital",
    "heroLead": "Mapeie 5 distrações do celular e silencie 80% do ruído de alertas em 3 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Smartphone-Benachrichtigungs-Ruhe-Audit | DopaBrain",
    "heroTitle": "Smartphone-Benachrichtigungs-Ruhe-Audit",
    "heroLead": "Entdecke 5 Ablenkungsquellen am Handy und schalte 80 % unnötiger Pings in 3 Min. ab.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Audit Notifications & Calme Numérique | DopaBrain",
    "heroTitle": "Audit Notifications & Calme Numérique",
    "heroLead": "Repérez 5 fuites d’attention sur mobile et coupez 80 % du bruit en 3 minutes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Аудит уведомлений и цифровой тишины | DopaBrain",
    "heroTitle": "Аудит уведомлений и цифровой тишины",
    "heroLead": "Найдите 5 утечек внимания в смартфоне и отключите 80% лишних оповещений за 3 минуты.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "स्मार्टफोन अलर्ट व डिजिटल काम ऑडिट | DopaBrain",
    "heroTitle": "स्मार्टफोन अलर्ट व डिजिटल काम ऑडिट",
    "heroLead": "5 फोन रुकावटें पहचानें और 3 मिनट में 80% गैर-ज़रूरी नोटिफिकेशन बंद करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Audit Notifikasi HP & Ketenangan Digital | DopaBrain",
    "heroTitle": "Audit Notifikasi HP & Ketenangan Digital",
    "heroLead": "Audit 5 kebocoran fokus dari ponsel dan senyapkan 80% notifikasi berisik dalam 3 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Telefon Bildirim ve Dijital Sakinlik Denetimi | DopaBrain",
    "heroTitle": "Telefon Bildirim ve Dijital Sakinlik Denetimi",
    "heroLead": "5 telefon dikkat sızıntısını tespit edin ve gereksiz bildirimlerin %80’ini 3 dk’da susturun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "bot_alerts",
    "en": "Algorithmic Push Pings — Promo, news, delivery, and social apps vibrating all day",
    "ko": "알고리즘 푸시 남발 — 쇼핑·뉴스·SNS 좋아요 알림이 하루 종일 울림"
  },
  {
    "id": "red_badges",
    "en": "Red Badge Pull — Unread dot counts creating low-grade urgency every time you unlock",
    "ko": "빨간 배지 압박 — 잠금을 풀 때마다 안 읽은 숫자 배지가 무의식적 조급함 유발"
  },
  {
    "id": "desk_presence",
    "en": "Phone on Desk — Keeping your screen face-up beside your keyboard while working",
    "ko": "책상 위 상시 노출 — 작업 중 키보드 옆에 화면이 보이도록 폰을 올려둠"
  },
  {
    "id": "phantom_check",
    "en": "Phantom Unlock Habit — Picking up your phone during every 10-second wait or elevator ride",
    "ko": "반사적 잠금 해제 — 10초만 비어도 무의식적으로 폰을 집어 들어 확인함"
  },
  {
    "id": "evening_pings",
    "en": "No Quiet Hours — Letting group chats and email banners light up past 9 PM",
    "ko": "야간 방해금지 부재 — 밤 9시 이후에도 단톡방·메일 배너가 계속 화면을 깨움"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Alert Noise — Apply the \"Humans Only\" Notification Purge Now",
    "koT": "알림 소음 과다 — 지금 바로 \"사람 연락만 허용\" 알림 대청소를 실행하세요",
    "enD": "University of Texas research on \"brain drain\" shows even a visible phone on your desk lowers available working memory, and push notifications fragment attention for 15–23 minutes per ping.",
    "koD": "텍사스대 인지 연구에 따르면 폰이 책상 위에 보이는 것만으로도 작업기억 용량이 줄어들고, 잦은 푸시 알림은 매번 15분 이상 집중 복구 비용을 발생시킵니다.",
    "enS": "\"My phone works on my schedule. Only real humans and calendar alarms get to interrupt my focus.\"",
    "koS": "\"스마트폰은 내 일정에 맞춰 움직여. 오직 실제 사람과 중요한 일정 알람만 내 집중을 두드릴 수 있어.\"",
    "enL": [
      "Turn OFF banners, sounds, and red badges for every shopping, news, social, and game app (takes 2 min).",
      "Enable automatic Scheduled Summary / Focus Mode during work blocks and after 9:30 PM.",
      "Place your phone face-down in another room or drawer during your #1 daily task."
    ],
    "koL": [
      "쇼핑·뉴스·SNS·게임 앱의 배너·소리·빨간 배지를 지금 2분 만에 모두 끄세요.",
      "업무 블록과 밤 9시 30분 이후에는 자동 집중/방해금지 모드가 켜지도록 예약하세요.",
      "하루 핵심 업무 1가지를 할 때는 폰을 시야 밖 서랍이나 다른 방에 두세요."
    ]
  },
  "mid": {
    "enT": "Partial Quiet — Batch Group Chats & Hide Red Badges",
    "koT": "부분적 소음 — 단체 채팅 뮤트와 빨간 배지 숨기기로 한 단계 더 고요하게",
    "enD": "You have cut some noise already, yet red dots and active group threads still pull micro-glances. One 60-second badge cleanup will feel surprisingly peaceful.",
    "koD": "이미 꽤 정리했지만 빨간 숫자 배지와 활발한 단톡방이 여전히 시선을 빼앗고 있습니다. 60초만 투자해 배지를 끄면 체감 평온도가 크게 올라갑니다.",
    "enS": "\"I check messages intentionally on my own clock instead of reacting to every red dot.\"",
    "koS": "\"빨간 점에 끌려가지 않고 내가 정한 시간에 의도적으로 메시지를 확인한다.\"",
    "enL": [
      "Disable red unread badges on email and messaging apps—check them 3 fixed times daily.",
      "Mute non-urgent group chats while keeping direct VIP contacts allowed.",
      "Move tempting social apps off your first home screen into a folder."
    ],
    "koL": [
      "메일·메신저의 빨간 숫자 배지를 끄고 하루 3회 정해진 시간에 확인하세요.",
      "비긴급 단톡방은 알림을 끄고 가족·핵심 연락처만 예외 허용하세요.",
      "습관적으로 누르는 앱은 첫 홈 화면에서 치워 2번째 페이지 폴더로 옮기세요."
    ]
  },
  "high": {
    "enT": "Calm Phone Architecture — Enjoy Your High-Signal Environment",
    "koT": "고요한 스마트폰 환경 — 높은 집중력과 평온함을 잘 지키고 있습니다",
    "enD": "Your digital hygiene is sharp. Keep reviewing newly installed apps once a month so promotional alerts never sneak back in.",
    "koD": "디지털 알림 위생이 아주 훌륭합니다. 새로 설치하는 앱이 기본 알림을 켜놓지 않도록 월 1회만 가볍게 점검하세요.",
    "enS": "\"Quiet devices create space for clear, unhurried thinking.\"",
    "koS": "\"조용한 기기가 맑고 서두르지 않는 생각의 여백을 만든다.\"",
    "enL": [
      "Tap \"Don’t Allow\" by default whenever a newly installed app asks for notifications.",
      "Keep your bedroom charger away from the pillow.",
      "Protect one screen-free meal or walk every single day."
    ],
    "koL": [
      "새 앱을 깔 때 알림 권한 요청은 기본값으로 \"허용 안 함\"을 누르세요.",
      "침실 충전기는 머리맡에서 멀리 떨어뜨려 두는 습관을 유지하세요.",
      "매일 최소 한 끼 식사나 산책은 폰 없이 온전히 즐기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_phone_notification_audit_v1";
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
      window.gtag('event', "phone_notification_audit_complete", {
        tool_slug: "phone-notification-calm-audit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/phone-notification-calm-audit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "phone-notification-calm-audit",
        filename: 'dopabrain-phone-notification-calm-audit-card.png',
        badge: "DIGITAL MINIMALISM • ALERT HYGIENE AUDIT",
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
