/* Introvert Social-Hangover & Post-Event Recovery Plan
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Introvert Social-Hangover & Post-Event Recovery Plan | DopaBrain",
    "metaDesc": "Loved seeing friends or attending a conference—yet woke up completely foggy, irritable, and needing total silence? Audit 5 social-drain multipliers locally and map guilt-free solitude recovery.",
    "kicker": "INTROVERT & HSP RECOVERY • SOCIAL HANGOVER PLAN",
    "heroTitle": "Introvert Social-Hangover & Post-Event Recovery Plan",
    "heroLead": "Loved seeing friends or attending a conference—yet woke up completely foggy, irritable, and needing total silence? Audit 5 social-drain multipliers locally and map guilt-free solitude recovery.",
    "chip1": "5 Social Drains",
    "chip2": "Solitude Recharge",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHAT DRAINED YOUR SOCIAL BATTERY MOST (1 = LIGHT, 5 = DEPLETED)",
    "step1Title": "Why did this social stretch leave you feeling physically hungover?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My protected zero-talk, low-stimulation recovery pocket today (100% local):",
    "ctaBtn": "Build My Social-Hangover Recovery Plan",
    "resultBadge": "STEP 2 • YOUR LOW-STIMULATION SOLITUDE RECHARGE PLAN",
    "noteTitle": "My Protected Zero-Talk Recharge Pocket",
    "meterLabel": "Remaining Social Battery",
    "scriptTitle": "Warm, Honest Rain-Check Script",
    "stepsTitle": "3 Fast Ways to Clear a Social Hangover",
    "stickyTitle": "Wondering if sensory sensitivity speeds up your social drain?",
    "stickySub": "Take the free 2-minute HSP Sensitivity Test next",
    "stickyBtn": "HSP Test →",
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
    "title": "모임 후 방전·내향인 소셜 행오버 회복 플래너 | DopaBrain",
    "metaDesc": "분명 즐거운 모임이나 행사였는데 다음 날 머리가 멍하고 아무 말도 하기 싫은가요? 5가지 사교 방전 요인을 점검하고 죄책감 없는 고요한 충전 시간을 설계하세요.",
    "kicker": "사교 피로·내향인 방전 회복 · 소셜 행오버 리셋",
    "heroTitle": "모임 후 방전·내향인 소셜 행오버 회복 플래너",
    "heroLead": "분명 즐거운 모임이나 행사였는데 다음 날 머리가 멍하고 아무 말도 하기 싫은가요? 5가지 사교 방전 요인을 점검하고 죄책감 없는 고요한 충전 시간을 설계하세요.",
    "chip1": "5가지 사교 방전",
    "chip2": "혼자만의 충전",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 이번 모임·일정에서 에너지를 가장 많이 쓴 요인 (1 = 가벼움, 5 = 완전 방전)",
    "step1Title": "모임 후 유독 심한 피로와 침묵 욕구가 올라온 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 내가 온전히 확보할 무대화·저자극 혼자만의 충전 시간 (100% 로컬):",
    "ctaBtn": "내 소셜 행오버 회복 플랜 만들기",
    "resultBadge": "2단계 • 저자극 고요 회복 프로토콜",
    "noteTitle": "나의 무대화·저자극 충전 시간",
    "meterLabel": "남은 사회적 배터리 잔량",
    "scriptTitle": "관계를 지키며 혼자 쉬는 정중한 양해 멘트",
    "stepsTitle": "소셜 행오버를 빠르게 회복하는 3단계",
    "stickyTitle": "높은 감각 민감성(HSP) 때문에 모임 후 유독 빨리 지치는지 확인해 볼까요?",
    "stickySub": "무료 2분 HSP 테스트로 나의 자극 처리 성향 알아보기",
    "stickyBtn": "HSP 테스트 →",
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
    "title": "内向者社交宿醉与聚会后回血计划 | DopaBrain",
    "heroTitle": "内向者社交宿醉与聚会后回血计划",
    "heroLead": "排查5大聚会耗电原因，安排无负罪感的低刺激独处回血时段。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "内向型の社交疲れ＆イベント後回復プラン | DopaBrain",
    "heroTitle": "内向型の社交疲れ＆イベント後回復プラン",
    "heroLead": "楽しい集まりの翌日の電池切れを罪悪感ゼロの静かな一人時間で整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Recuperación de Resaca Social | DopaBrain",
    "heroTitle": "Plan de Recuperación de Resaca Social",
    "heroLead": "Recarga tu batería tras eventos sociales con soledad tranquila y sin culpa.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Recuperação de Ressaca Social | DopaBrain",
    "heroTitle": "Plano de Recuperação de Ressaca Social",
    "heroLead": "Recupere o esgotamento após eventos com descanso silencioso e sem culpa.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Introvertierten-Social-Hangover-Planer | DopaBrain",
    "heroTitle": "Introvertierten-Social-Hangover-Planer",
    "heroLead": "Erhole dich nach geselligen Tagen schuldfrei mit reizarmer Ruhezeit.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Récupération Gueule de Bois Sociale | DopaBrain",
    "heroTitle": "Plan Récupération Gueule de Bois Sociale",
    "heroLead": "Rechargez votre batterie après un événement grâce à un temps calme sans culpabilité.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Восстановление после «социального похмелья» | DopaBrain",
    "heroTitle": "Восстановление после «социального похмелья»",
    "heroLead": "Снимите усталость после встреч с помощью тихого отдыха без чувства вины.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "इंट्रोवर्ट सोशल-हैंगओवर रिकवरी प्लान | DopaBrain",
    "heroTitle": "इंट्रोवर्ट सोशल-हैंगओवर रिकवरी प्लान",
    "heroLead": "पार्टी या मीटिंग के बाद की थकान को बिना अपराधबोध शांत एकांत से दूर करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Rencana Pemulihan Social Hangover Introvert | DopaBrain",
    "heroTitle": "Rencana Pemulihan Social Hangover Introvert",
    "heroLead": "Pulihkan kelelahan pasca-kumpul dengan waktu tenang minim stimulasi tanpa rasa bersalah.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "İçe Dönük Sosyal Yorgunluk Toparlanma Planı | DopaBrain",
    "heroTitle": "İçe Dönük Sosyal Yorgunluk Toparlanma Planı",
    "heroLead": "Etkinlik sonrası tükenmişliği suçluluk duymadan sakin yalnızlıkla iyileştirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "loud_venue",
    "en": "Loud Crowded Acoustics — Restaurants, bars, or halls forcing constant voice strain & filtering",
    "ko": "시끄러운 공간 소음 — 배경 소음이 커서 대화를 알아듣고 목소리를 키우느라 진이 빠짐"
  },
  {
    "id": "small_talk_marathon",
    "en": "Small-Talk Marathon — Performing upbeat surface chatter with many acquaintances",
    "ko": "스몰토크 마라톤 — 여러 지인과 계속 밝은 표정으로 가벼운 대화를 이어감"
  },
  {
    "id": "stacked_events",
    "en": "Back-to-Back Social Days — Two or more group outings in a single weekend with zero solo gap",
    "ko": "연속 모임 일정 — 주말 동안 혼자 쉬는 틈 없이 모임이 2개 이상 겹침"
  },
  {
    "id": "hosting_vigilance",
    "en": "Host/People-Monitoring Load — Making sure everyone else feels included and comfortable",
    "ko": "분위기 챙김 피로 — 다른 사람들이 어색하지 않은지 계속 살피며 배려함"
  },
  {
    "id": "post_event_guilt",
    "en": "Guilt Over Needing Quiet — Forcing yourself to answer texts immediately while totally spent",
    "ko": "침묵 죄책감 — 방전됐는데도 바로 답장하거나 다음 약속을 잡아야 할 것 같음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Full Social Hangover — Switch to Low-Input Quiet Recovery Without Guilt",
    "koT": "완전 방전(소셜 행오버) — 죄책감 없이 저자극·침묵 회복 모드로 즉시 전환하세요",
    "enD": "Personality researcher Brian Little’s \"restorative niche\" work shows acting extroverted for hours is deeply rewarding yet burns real nervous-system fuel. Needing quiet solitude afterward does NOT mean you disliked the people—it is simply biological recharge.",
    "koD": "성격심리학자 브라이언 리틀의 \"회복 틈새(Restorative Niche)\" 연구에 따르면 사교적 몰입 후 침묵이 필요한 건 사람이 싫어서가 아니라 신경계가 연료를 보충하는 자연스러운 과정입니다.",
    "enS": "\"I had such a great time seeing you! I’m doing a quiet recharge day today so I’ll reply properly tomorrow!\"",
    "koS": "\"어제 만나서 정말 즐거웠어! 오늘은 집에서 조용히 에너지 충전하는 날이라 내일 여유롭게 다시 연락할게!\"",
    "enL": [
      "Give yourself at least 60–120 minutes of true low-input solitude (dim light, quiet room, no podcasts or loud feeds).",
      "Delay non-urgent texts and social calls until your bandwidth returns—real friends respect honest recharge.",
      "Drink water, eat a simple warm meal, and do a gentle solo walk or stretch to clear residual adrenaline."
    ],
    "koL": [
      "최소 60~120분은 팟캐스트·영상마저 끈 진짜 저자극 고요한 혼자만의 시간을 확보하세요.",
      "급하지 않은 톡 답장과 통화는 에너지가 돌아온 내일로 미루세요—진짜 친구는 이해합니다.",
      "따뜻한 물·간단한 식사와 조용한 혼자 산책으로 몸에 남은 사회적 각성을 부드럽게 풀어 주세요."
    ]
  },
  "mid": {
    "enT": "Low Battery Dip — Protect Tonight as a Solo Buffer",
    "koT": "배터리 저하 — 오늘 저녁만큼은 100% 혼자만의 완충 시간으로 비워 두세요",
    "enD": "You have enough energy for basics, provided you skip adding another social plan tonight.",
    "koD": "기본 일상은 충분하지만 오늘 저녁에 추가 약속만 넣지 않으면 내일 말끔히 회복됩니다.",
    "enS": "\"One fun social outing pairs best with one calm solo evening.\"",
    "koS": "\"즐거운 모임 하루에는 고요한 혼자만의 저녁 하루가 최고의 짝꿍이야.\"",
    "enL": [
      "Keep tonight completely unscheduled and comfortable.",
      "Switch from group chats to quiet solo hobbies (reading, music, cooking).",
      "Next weekend, pencil in a \"solo buffer\" block right after big events on your calendar."
    ],
    "koL": [
      "오늘 저녁은 어떤 추가 일정도 없이 편안하게 비워 두세요.",
      "단톡방 대신 독서·음악·가벼운 취미로 시선을 안쪽으로 돌리세요.",
      "앞으로는 큰 모임 다음 날 달력에 미리 \"혼자 충전 버퍼\"를 함께 적어 두세요."
    ]
  },
  "high": {
    "enT": "Well-Paced Social Energy — Balanced Connection & Solitude",
    "koT": "균형 잡힌 사교 에너지 — 만남과 고독의 리듬이 아주 건강합니다",
    "enD": "You paced your social energy well and noticed early recovery cues before full exhaustion hit.",
    "koD": "완전 방전되기 전에 에너지 신호를 잘 알아차리고 페이스를 조절하고 계십니다.",
    "enS": "\"Warm connection feels best when I honor my natural recharge rhythm.\"",
    "koS": "\"나만의 충전 리듬을 존중할 때 사람들과의 만남도 훨씬 더 따뜻하고 즐겁다.\"",
    "enL": [
      "Keep preferring smaller quieter venues when choosing catch-up spots.",
      "Hold onto your pre-scheduled solo rest pockets after busy weeks.",
      "Enjoy the glow of good company alongside peaceful solitude."
    ],
    "koL": [
      "약속 장소를 고를 때 소음이 적은 아늑한 공간을 계속 선호해 보세요.",
      "바쁜 주간 뒤의 혼자 휴식 포켓을 꾸준히 지켜 나가세요.",
      "좋은 만남의 여운과 고요한 혼자만의 평온을 함께 누리세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_social_hangover_v1";
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
      window.gtag('event', "social_hangover_complete", {
        tool_slug: "social-hangover-recovery-timer",
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
      var shareUrl = "https://dopabrain.com/portal/tools/social-hangover-recovery-timer.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "social-hangover-recovery-timer",
        filename: 'dopabrain-social-hangover-recovery-timer-card.png',
        badge: "INTROVERT & HSP RECOVERY • SOCIAL HANGOVER PLAN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
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
