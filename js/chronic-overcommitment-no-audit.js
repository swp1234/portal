/* Calendar Overcommitment & Polite "No" Audit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Calendar Overcommitment & Polite \"No\" Audit | DopaBrain",
    "metaDesc": "Saying \"yes\" to future favors because next month looks empty—then drowning in commitments when the week arrives? Audit 5 overcommitment traps locally and copy warm, respectful decline scripts.",
    "kicker": "CALENDAR OVERLOAD • POLITE \"NO\" AUDIT",
    "heroTitle": "Calendar Overcommitment & Polite \"No\" Audit",
    "heroLead": "Saying \"yes\" to future favors because next month looks empty—then drowning in commitments when the week arrives? Audit 5 overcommitment traps locally and copy warm, respectful decline scripts.",
    "chip1": "5 Yes-Traps",
    "chip2": "Warm \"No\" Scripts",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • SPOT WHY YOUR CALENDAR OVERFLOWS (1 = RARE, 5 = EVERY WEEK)",
    "step1Title": "Which automatic \"yes\" habits are crowding out your real priorities?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One optional commitment I will gracefully decline or reschedule this week (100% local):",
    "ctaBtn": "Audit Load & Generate Polite \"No\"",
    "resultBadge": "STEP 2 • YOUR CALENDAR PROTECTION & POLITE DECLINE KIT",
    "noteTitle": "Commitment to Reclaim This Week",
    "meterLabel": "Calendar Breathing Room Score",
    "scriptTitle": "Warm, Zero-Over-Explaining \"No\" Script",
    "stepsTitle": "3 Habits to Stop Future-Self Overbooking",
    "stickyTitle": "Is chronic overcommitment pushing you close to burnout?",
    "stickySub": "Take the free 90-second Burnout Test next",
    "stickyBtn": "Burnout Test →",
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
    "title": "무리한 약속·일정 과부하 점검 & 죄책감 없는 거절 툴 | DopaBrain",
    "metaDesc": "다음 달 달력이 비어 보여 쉽게 수락했다가 막상 그 주가 되면 일정에 치여 숨 막히나요? 5가지 과잉 수락 함정을 점검하고 관계를 해치지 않는 정중한 거절 멘트를 준비하세요.",
    "kicker": "과잉 수락·일정 과부하 점검 · 정중한 거절 스크립트",
    "heroTitle": "무리한 약속·일정 과부하 점검 & 죄책감 없는 거절 툴",
    "heroLead": "다음 달 달력이 비어 보여 쉽게 수락했다가 막상 그 주가 되면 일정에 치여 숨 막히나요? 5가지 과잉 수락 함정을 점검하고 관계를 해치지 않는 정중한 거절 멘트를 준비하세요.",
    "chip1": "5가지 수락 함정",
    "chip2": "정중한 거절 멘트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 일정이 넘치는 과잉 수락 원인 점검 (1 = 드묾, 5 = 매주 반복)",
    "step1Title": "정작 중요한 일과 휴식을 밀어내는 무의식적 수락 습관은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주 정중히 거절하거나 일정을 조정할 비핵심 약속 1건 (100% 로컬):",
    "ctaBtn": "일정 과부하 진단 & 정중한 거절 멘트 보기",
    "resultBadge": "2단계 • 일정 보호 및 정중한 거절 프로토콜",
    "noteTitle": "이번 주 되찾을 나의 시간 항목",
    "meterLabel": "일정 여유·자율성 지수",
    "scriptTitle": "구구절절 변명 없는 정중한 거절 문장",
    "stepsTitle": "미래의 나를 과부하에서 지키는 3가지 습관",
    "stickyTitle": "거절하지 못한 일정들이 번아웃으로 쌓이고 있지는 않나요?",
    "stickySub": "무료 90초 번아웃 테스트로 현재 에너지 여력 확인",
    "stickyBtn": "번아웃 테스트 →",
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
    "title": "日程过度承诺审计与礼貌拒绝话术 | DopaBrain",
    "heroTitle": "日程过度承诺审计与礼貌拒绝话术",
    "heroLead": "告别“未来时间充裕”错觉，生成温和不伤感情的2句拒绝模板。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "予定詰め込み過多＆丁寧な断り方ツール | DopaBrain",
    "heroTitle": "予定詰め込み過多＆丁寧な断り方ツール",
    "heroLead": "先々の引き受け過ぎを防ぎ、角の立たない2行の断りフレーズを作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Auditoría de Sobrecarga y \"No\" Amable | DopaBrain",
    "heroTitle": "Auditoría de Sobrecarga y \"No\" Amable",
    "heroLead": "Frena el exceso de compromisos y usa frases claras y amables para decir no.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Auditoria de Agenda Cheia e \"Não\" Gentil | DopaBrain",
    "heroTitle": "Auditoria de Agenda Cheia e \"Não\" Gentil",
    "heroLead": "Evite dizer sim por impulso e use respostas gentis para proteger sua semana.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Termin-Überlastungs- & Höflich-Nein-Audit | DopaBrain",
    "heroTitle": "Termin-Überlastungs- & Höflich-Nein-Audit",
    "heroLead": "Stoppe Überbuchung mit der 24-Stunden-Regel und klaren, freundlichen Absagen.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Audit Surcharge d’Agenda & « Non » Poli | DopaBrain",
    "heroTitle": "Audit Surcharge d’Agenda & « Non » Poli",
    "heroLead": "Évitez de trop dire oui et préparez des refus chaleureux en 2 phrases.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Аудит перегрузки дел и мягкого «нет» | DopaBrain",
    "heroTitle": "Аудит перегрузки дел и мягкого «нет»",
    "heroLead": "Остановите привычку соглашаться на всё и получите вежливые формулы отказа.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "ओवरकमिटमेंट व विनम्र \"नहीं\" ऑडिट | DopaBrain",
    "heroTitle": "ओवरकमिटमेंट व विनम्र \"नहीं\" ऑडिट",
    "heroLead": "भविष्य की ज़्यादा हामी भरना रोकें और 2-लाइन की विनम्र मनाही स्क्रिप्ट पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Audit Overcommitment & Cara Menolak Sopan | DopaBrain",
    "heroTitle": "Audit Overcommitment & Cara Menolak Sopan",
    "heroLead": "Hentikan kebiasaan mudah mengiyakan jadwal dan siapkan kalimat menolak yang hangat.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Aşırı Taahhüt ve Nazik \"Hayır\" Denetimi | DopaBrain",
    "heroTitle": "Aşırı Taahhüt ve Nazik \"Hayır\" Denetimi",
    "heroLead": "Takvim aşırı yükünü 24 saat kuralı ve nazik ret cümleleriyle durdurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "future_self_illusion",
    "en": "Future-Self Illusion — Assuming next month’s you will magically have endless free time",
    "ko": "미래의 나 착시 — 다음 달의 나는 지금보다 훨씬 한가하고 체력이 넘칠 거라 착각함"
  },
  {
    "id": "instant_yes_reflex",
    "en": "Instant \"Yes\" Reflex — Agreeing on the spot before checking your actual calendar or energy",
    "ko": "즉각 수락 반사 — 달력과 체력을 확인하기도 전에 그 자리에서 바로 \"네\"라고 답함"
  },
  {
    "id": "over_explaining",
    "en": "Over-Explaining Guilt — Writing long excuses when declining, inviting counter-negotiation",
    "ko": "구구절절 변명 — 거절할 때 긴 핑계를 대다가 오히려 상대에게 설득당함"
  },
  {
    "id": "zero_buffer_blocks",
    "en": "Wall-to-Wall Booking — Scheduling tasks back-to-back with zero margin for delays",
    "ko": "여백 없는 빽빽한 일정 — 돌발 변수나 이동·휴식 버퍼 없이 일정을 꽉 채움"
  },
  {
    "id": "invisible_favors",
    "en": "Scope Creep Favors — Accepting \"quick 10-minute favors\" that routinely eat 2 hours",
    "ko": "작은 부탁 누적 — \"금방 끝나는 일\"이라며 수락한 부탁이 2시간씩 잡아먹음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Chronically Overbooked — Adopt the 24-Hour Pause Rule & Trim 1 Item Today",
    "koT": "만성 일정 과부하 — \"24시간 보류 규칙\"을 도입하고 오늘 1건부터 정중히 비우세요",
    "enD": "Behavioral economists call overbooking future months the \"Yes-Damn Effect\" (Zauberman & Lynch, 2005): distant weeks always look spacious until they arrive. Never answer a new request on the spot—pause 24 hours and test whether you would say yes if it were TOMORROW.",
    "koD": "행동경제학의 \"예스-댐 효과(Zauberman & Lynch, 2005)\"에 따르면 먼 미래의 시간은 실제보다 훨씬 넉넉해 보입니다. 앞으로 모든 요청은 즉답 대신 24시간 보류하고, \"내일 당장 해야 해도 수락할까?\"로 검증하세요.",
    "enS": "\"Thank you so much for thinking of me! My plate is completely full right now so I have to pass to keep my current commitments solid—wishing you a great session!\"",
    "koS": "\"먼저 떠올려 주셔서 정말 감사합니다! 현재 맡고 있는 핵심 일정에 집중해야 해서 이번에는 함께하기 어렵습니다. 멋진 진행 응원하겠습니다!\"",
    "enL": [
      "Adopt the 24-Hour Buffer Phrase: \"Let me check my calendar and get back to you tomorrow.\"",
      "Use the \"Tomorrow Test\": if you would dread doing it tomorrow, decline it for next month too.",
      "Renegotiate or drop 1 low-priority obligation already on this week’s calendar before Friday."
    ],
    "koL": [
      "즉답 대신 \"일정 확인 후 내일 말씀드리겠습니다\" 24시간 보류 문장을 기본값으로 쓰세요.",
      "\"내일 테스트\": 내일 당장 해야 한다면 부담스러울 일은 다음 달 일정이라도 지금 거절하세요.",
      "이번 주 이미 잡힌 비핵심 일정 1건을 정중히 조정하거나 취소해 숨통을 여세요."
    ]
  },
  "mid": {
    "enT": "Tight Calendar — Cap Daily Commitments & Keep 20% Open Buffer",
    "koT": "빠듯한 일정 — 하루 핵심 약속 상한과 20% 여백 버퍼를 잠가 두세요",
    "enD": "You protect major priorities well, yet small ad-hoc favors keep eroding your margins. Blocking visible buffer slots stops accidental overbooking.",
    "koD": "큰 우선순위는 잘 지키지만 자잘한 부탁이 여유를 갉아먹고 있습니다. 캘린더에 눈에 보이는 \"여백 블록\"을 미리 잠가두면 과잉 수락이 확 줄어듭니다.",
    "enS": "\"I can’t take on the full scope this week, though I can share a quick 5-minute tip on Wednesday.\"",
    "koS": "\"이번 주 전체를 맡기는 어렵지만 수요일에 5분 정도 간단한 방향 의견만 드리는 건 가능합니다.\"",
    "enL": [
      "Block a visible 20% \"overflow/recovery\" buffer on your weekly calendar.",
      "Keep decline messages under 2 warm sentences—never over-explain.",
      "Audit recurring obligations once a month and sunset anything past its season."
    ],
    "koL": [
      "주간 캘린더에 20% \"여유·버퍼\" 블록을 미리 일정처럼 등록해 두세요.",
      "거절 메시지는 따뜻한 2문장 이내로 끝내고 긴 변명을 덧붙이지 마세요.",
      "월 1회 정기 모임·반복 약속을 점검해 유효기간이 끝난 항목을 정리하세요."
    ]
  },
  "high": {
    "enT": "Intentional Calendar Stewardship — Strong Boundaries & High Impact",
    "koT": "주도적인 일정 관리 — 건강한 경계선과 높은 집중도를 유지하고 있습니다",
    "enD": "Your \"yes\" truly means yes because you protect your bandwidth honestly. Keep honoring your clear priorities.",
    "koD": "나의 한계를 솔직하게 지키기 때문에 당신의 수락은 더욱 신뢰받습니다. 지금의 명료한 우선순위를 계속 유지하세요.",
    "enS": "\"Every clear no protects the quality of my most important yes.\"",
    "koS": "\"명확한 거절 하나가 내가 진짜 지키고 싶은 약속의 품질을 높여 준다.\"",
    "enL": [
      "Keep using your 24-hour check-in before accepting new commitments.",
      "Protect your non-negotiable rest and deep-work blocks first.",
      "Enjoy delivering calm, unhurried quality on fewer, better priorities."
    ],
    "koL": [
      "새로운 제안 전 하루 점검하는 여유를 계속 유지하세요.",
      "핵심 몰입과 휴식 블록을 늘 캘린더 최우선에 두세요.",
      "덜 채우고 더 깊게 완성하는 여유로운 리듬을 즐기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_overcommitment_audit_v1";
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
      window.gtag('event', "overcommitment_audit_complete", {
        tool_slug: "chronic-overcommitment-no-audit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/chronic-overcommitment-no-audit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "chronic-overcommitment-no-audit",
        filename: 'dopabrain-chronic-overcommitment-no-audit-card.png',
        badge: "CALENDAR OVERLOAD • POLITE \"NO\" AUDIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
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
