/* Last-Minute Event Anxiety & Honest RSVP Calibration Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Last-Minute Event Anxiety & Honest RSVP Calibration Kit | DopaBrain",
    "metaDesc": "Two hours before a party or dinner suddenly wanting to cancel everything? Tell genuine burnout apart from normal anticipatory jitters locally—and copy either a 45-min cameo plan or a warm, guilt-free decline.",
    "kicker": "SOCIAL CALM • PRE-EVENT DREAD & HONEST RSVP CALIBRATION KIT",
    "heroTitle": "Last-Minute Event Anxiety & Honest RSVP Calibration Kit",
    "heroLead": "Two hours before a party or dinner suddenly wanting to cancel everything? Tell genuine burnout apart from normal anticipatory jitters locally—and copy either a 45-min cameo plan or a warm, guilt-free decline.",
    "chip1": "5 Dread vs Drain Checks",
    "chip2": "45-Min Cameo or Warm Cancel",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PRE-EVENT SIGNALS (1 = READY, 5 = OVERWHELMED)",
    "step1Title": "What is driving the urge to cancel tonight’s plans?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The event + my honest 45-minute cameo cap OR warm reschedule date (100% local):",
    "ctaBtn": "Calibrate My RSVP & Copy Warm Script",
    "resultBadge": "STEP 2 • YOUR HONEST RSVP & ZERO-GUILT SCRIPT",
    "noteTitle": "My Clear Plan Tonight",
    "meterLabel": "Event Energy Margin",
    "scriptTitle": "Warm, Honest Text (Cameo Heads-Up OR Kind Cancel With New Date)",
    "stepsTitle": "3 Rules That Keep Friendships Warm Without Burning Yourself Out",
    "stickyTitle": "See how anticipatory social anxiety interacts with your nervous system.",
    "stickySub": "Take the free 2-Min Anxiety Type Test",
    "stickyBtn": "Anxiety Type Test →",
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
    "title": "모임·약속 직전 취소 충동 점검 & 45분 참석·정중 거절 스크립트 | DopaBrain",
    "metaDesc": "모임 2시간 전만 되면 갑자기 취소하고 싶고 죄책감이 밀려오나요? 진짜 체력 방전과 단순 예기 불안을 구분하고 45분 짧은 참석 플랜 또는 따뜻한 취소 멘트를 선택하세요.",
    "kicker": "사교 불안 케어 · 약속 직전 취소 충동 점검 & 45분 참석/정중 거절 키트",
    "heroTitle": "모임·약속 직전 취소 충동 점검 & 45분 참석·정중 거절 스크립트",
    "heroLead": "모임 2시간 전만 되면 갑자기 취소하고 싶고 죄책감이 밀려오나요? 진짜 체력 방전과 단순 예기 불안을 구분하고 45분 짧은 참석 플랜 또는 따뜻한 취소 멘트를 선택하세요.",
    "chip1": "5가지 불안 vs 방전",
    "chip2": "45분 참석·따뜻한 거절",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 모임 직전 긴장·에너지 상태 점검 (1 = 여유, 5 = 완전 방전)",
    "step1Title": "오늘 약속을 취소하고 싶게 만드는 가장 큰 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 약속 + 45분만 들르기 목표 또는 다음 만남 대체 날짜 (100% 로컬):",
    "ctaBtn": "내 약속 판단 & 따뜻한 스크립트 보기",
    "resultBadge": "2단계 • 후회와 죄책감을 줄이는 약속 조율 프로토콜",
    "noteTitle": "오늘 나의 깔끔한 약속 계획",
    "meterLabel": "사교 에너지 여유도",
    "scriptTitle": "상대 기분을 지키며 깔끔하게 전하는 1줄 문자",
    "stepsTitle": "체력과 우정을 모두 지키는 3가지 약속 원칙",
    "stickyTitle": "약속 전 예기 불안이 내 불안 패턴과 어떻게 연결되는지 알아볼까요?",
    "stickySub": "무료 2분 불안 유형 테스트 바로가기",
    "stickyBtn": "불안 유형 테스트 →",
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
    "title": "聚会临阵退缩自测与45分钟露面/温和婉拒话术 | DopaBrain",
    "heroTitle": "聚会临阵退缩自测与45分钟露面/温和婉拒话术",
    "heroLead": "区分真实耗竭与出行前焦虑，一键准备45分钟短留或诚恳改期短信。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "直前キャンセル衝動診断＆45分参加・丁寧お断りキット | DopaBrain",
    "heroTitle": "直前キャンセル衝動診断＆45分参加・丁寧お断りキット",
    "heroLead": "本当の疲労と予期不安を見分け、45分顔出し案や温かい別日提案文を作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Ansiedad Pre-Evento y Cancelación Honesta sin Culpa | DopaBrain",
    "heroTitle": "Kit de Ansiedad Pre-Evento y Cancelación Honesta sin Culpa",
    "heroLead": "Distingue cansancio real de nervios previos: visita de 45 min o cancelación cálida con nueva fecha.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Ansiedade Pré-Evento e Cancelamento Honesto | DopaBrain",
    "heroTitle": "Kit de Ansiedade Pré-Evento e Cancelamento Honesto",
    "heroLead": "Separe cansaço real de nervosismo: aparição de 45 min ou desmarque carinhoso com nova data.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Last-Minute-Event-Angst & Ehrliches Absage-Kit | DopaBrain",
    "heroTitle": "Last-Minute-Event-Angst & Ehrliches Absage-Kit",
    "heroLead": "Unterscheide Erschöpfung von Lampenfieber: 45-Min-Kurzbesuch oder herzliche Absage.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Anxiété Avant Sortie & Annulation Bienveillante | DopaBrain",
    "heroTitle": "Kit Anxiété Avant Sortie & Annulation Bienveillante",
    "heroLead": "Distinguez vraie fatigue et trac : passage de 45 min ou report chaleureux avec nouvelle date.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Кит против тревоги перед встречей и вежливой отмены | DopaBrain",
    "heroTitle": "Кит против тревоги перед встречей и вежливой отмены",
    "heroLead": "Отличите реальную усталость от волнения: визит на 45 минут или тёплый перенос на новую дату.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "लास्ट-मिनट इवेंट चिंता और ईमानदार RSVP किट | DopaBrain",
    "heroTitle": "लास्ट-मिनट इवेंट चिंता और ईमानदार RSVP किट",
    "heroLead": "असली थकान व घबराहट को अलग करें: 45-मिनट विज़िट या नई तारीख के साथ विनम्र संदेश।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Cemas Sebelum Acara & Skrip Batal Sopan | DopaBrain",
    "heroTitle": "Kit Cemas Sebelum Acara & Skrip Batal Sopan",
    "heroLead": "Bedakan lelah asli vs gugup sesaat: mampir 45 menit atau batal hangat dengan jadwal pengganti.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Son Dakika Etkinlik Kaygısı ve Nazik İptal Kiti | DopaBrain",
    "heroTitle": "Son Dakika Etkinlik Kaygısı ve Nazik İptal Kiti",
    "heroLead": "Gerçek yorgunlukla ön kaygıyı ayırın: 45 dk uğrama veya yeni tarihli sıcak iptal mesajı.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "genuine_physical_exhaustion",
    "en": "True Physical Depletion — Running on <5h sleep, illness, or emotional overload today",
    "ko": "진짜 체력 고갈 — 수면 부족·컨디션 저하로 물리적 에너지가 바닥난 상태"
  },
  {
    "id": "anticipatory_jitters",
    "en": "Classic 2-Hour Pre-Event Jitters — Feeling dread right before leaving even though you usually enjoy it once there",
    "ko": "출발 2시간 전 예기 불안 — 막상 가면 괜찮은데 나가기 직전에만 유독 귀찮고 떨림"
  },
  {
    "id": "all_or_nothing_stay",
    "en": "All-or-Nothing Stay Trap — Thinking \"If I go I must stay 4 hours until midnight\"",
    "ko": "전부 아니면 전무 — \"한 번 가면 밤 12시까지 끝까지 있어야 한다\"는 압박감"
  },
  {
    "id": "elaborate_fake_excuse",
    "en": "Fake-Excuse Guilt — Inventing dramatic lies instead of a short, warm honest note",
    "ko": "거짓 핑계 죄책감 — 짧고 솔직한 양해 대신 복잡한 거짓말을 지어내다 더 괴로움"
  },
  {
    "id": "last_minute_ghosting",
    "en": "Waiting Until 15 Min Before — Delaying the text out of guilt, which hurts hosts most",
    "ko": "임박 통보 — 미안해서 미루다가 15분 전에야 연락해 오히려 더 미안해짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "Truly Drained — Cancel Early & Warmly With a Concrete Replacement Date (Zero Fake Excuses)",
    "koT": "진짜 방전 상태 — 거짓 핑계 없이 일찍·따뜻하게 양해를 구하고 대체 날짜를 먼저 제안하세요",
    "enD": "When you are genuinely depleted, pushing through builds resentment. Friends rarely mind an honest early heads-up—what preserves trust is warmth, zero elaborate lies, and proposing a specific coffee/call next week.",
    "koD": "진짜 체력이 바닥났을 때 억지로 가면 서로 피곤해집니다. 거짓말을 길게 늘어놓기보다 일찍 솔직하고 따뜻하게 알리고, 구체적인 다음 만남 날짜를 먼저 제안하면 신뢰가 오히려 단단해집니다.",
    "enS": "\"Hey [Name], I’m completely wiped out today and wouldn’t be great company—I’m so sorry to miss tonight! Can I treat you to coffee next Thursday or Saturday to catch up properly?\"",
    "koS": "\"[이름]아, 오늘 컨디션이 너무 떨어져서 도저히 제대로 함께하기 어려울 것 같아 미리 연락해. 정말 미안해! 다음 주 목요일이나 토요일에 내가 커피 살게, 그때 꼭 얼굴 보자!\"",
    "enL": [
      "Send the honest text as early as you know—never wait until 10 minutes before start time.",
      "Skip dramatic fake excuses; \"running on empty today\" is warm, adult, and relatable.",
      "Always include a concrete follow-up invite so the other person feels valued, not brushed off."
    ],
    "koL": [
      "못 갈 것 같다면 10분 전까지 끌지 말고 결정되는 즉시 일찍 연락하세요.",
      "복잡한 거짓말은 빼고 \"오늘 체력이 바닥나서\"처럼 담백하고 진솔하게 전하세요.",
      "상대가 거절당했다고 느끼지 않도록 구체적인 다음 만남 제안 1줄을 꼭 덧붙이세요."
    ]
  },
  "mid": {
    "enT": "Anticipatory Jitters — Try the 45-Minute Cameo Option (Permission to Leave Early!)",
    "koT": "예기 불안 구간 — \"45분만 반갑게 들르고 먼저 나오기\" 카메오 전략을 써 보세요",
    "enD": "Behavioral activation shows pre-event dread peaks 90 minutes before arriving and usually drops within 15 minutes of walking in. Giving yourself explicit permission to stay just 45 minutes removes the trapped feeling.",
    "koD": "행동활성화 연구에 따르면 모임 전 불안은 출발 90분 전에 정점을 찍고 도착 후 15분이면 대부분 가라앉습니다. \"45분만 인사하고 먼저 나온다\"고 미리 정하면 압박감이 사라집니다.",
    "enS": "\"So excited to see you tonight! Quick heads-up I have an early morning tomorrow, so I’ll drop by for the first hour to say hi and celebrate!\"",
    "koS": "\"오늘 너무 기대돼! 내일 아침 일정이 있어서 초반 1시간 정도 반갑게 얼굴 보고 먼저 들어갈 것 같아—이따 보자!\"",
    "enL": [
      "Text your early-exit heads-up BEFORE arriving so leaving at minute 45 feels effortless.",
      "Arrive with 1 friendly question ready to skip awkward openings.",
      "Re-check your mood at minute 30: stay if energized, leave proudly at 45 if ready."
    ],
    "koL": [
      "도착 전에 \"초반 1시간만 들른다\"고 미리 알리면 45분 뒤 일어설 때 눈치가 전혀 안 보입니다.",
      "어색한 첫 5분을 넘길 가벼운 안부 질문 1개만 챙겨 가세요.",
      "30분 뒤 즐겁다면 더 있고, 피곤하면 약속대로 45분에 당당히 귀가하세요."
    ]
  },
  "high": {
    "enT": "Steady Social Margin — Enjoy Connection at Your Own Pace",
    "koT": "충분한 사교 여유 — 편안한 페이스로 만남을 즐기실 상태입니다",
    "enD": "Your energy and boundaries are aligned for a relaxed gathering.",
    "koD": "에너지와 경계가 잘 맞아 편안하게 교류할 수 있는 좋은 컨디션입니다.",
    "enS": "\"Showing up lightly beats forcing perfection.\"",
    "koS": "\"완벽하게 어울리려 애쓰지 않고 가볍게 함께하는 것만으로 충분하다.\"",
    "enL": [
      "Take a 3-minute quiet breather outside if noise climbs.",
      "Focus on 1–2 genuine conversations over working the whole room.",
      "Leave while you still feel good."
    ],
    "koL": [
      "공간이 시끄러우면 잠깐 3분 바깥 공기를 쐬고 들어오세요.",
      "모두와 친해지려 하기보다 1~2명과 깊은 대화를 나눠 보세요.",
      "기분이 가장 좋을 때 기분 좋게 마무리하고 귀가하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_event_rsvp_v1";
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
      window.gtag('event', "event_rsvp_calm_complete", {
        tool_slug: "social-event-cancel-guilt-script",
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
      var shareUrl = "https://dopabrain.com/portal/tools/social-event-cancel-guilt-script.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "social-event-cancel-guilt-script",
        filename: 'dopabrain-social-event-cancel-guilt-script-card.png',
        badge: "SOCIAL CALM • PRE-EVENT DREAD & HONEST RSVP CALIBRATION KIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f97316",
        accent2: "#ec4899"
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
