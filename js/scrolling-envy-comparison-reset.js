/* Social Media Envy & FOMO Grounding Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Social Media Envy & FOMO Grounding Reset | DopaBrain",
    "metaDesc": "Feeling suddenly behind in life, career, or travel after 10 minutes on social feeds? Audit 5 algorithmic envy triggers locally and turn passive FOMO into calm clarity.",
    "kicker": "SOCIAL MEDIA ENVY • FOMO REALITY GROUNDING",
    "heroTitle": "Social Media Envy & FOMO Grounding Reset",
    "heroLead": "Feeling suddenly behind in life, career, or travel after 10 minutes on social feeds? Audit 5 algorithmic envy triggers locally and turn passive FOMO into calm clarity.",
    "chip1": "5 Feed Envy Traps",
    "chip2": "FOMO-to-JOMO Shift",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHICH FEED PATTERNS TRIGGER ENVY OR FOMO (1 = RARE, 5 = STRONG)",
    "step1Title": "What leaves you feeling subtly worse right after scrolling?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: 1 real-life thing I genuinely appreciate right now that would never go viral (100% local):",
    "ctaBtn": "Reset My FOMO & Feed Hygiene",
    "resultBadge": "STEP 2 • YOUR CALM REALITY-ANCHOR & FEED RESET",
    "noteTitle": "My Real-Life Anchor (Off-Camera Value)",
    "meterLabel": "Emotional Independence from Feeds",
    "scriptTitle": "Highlight-Reel Reality Reminder",
    "stepsTitle": "3 Immediate Moves to Turn FOMO into Calm Focus",
    "stickyTitle": "Want a clean 20-minute break away from highlight-reel feeds?",
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
    "title": "SNS 상대적 박탈감·FOMO 진정 & 현실 감각 리셋 | DopaBrain",
    "metaDesc": "SNS를 딱 10분 봤을 뿐인데 나만 뒤처지고 초라해진 기분이 드나요? 5가지 알고리즘 박탈감 유발 요인을 점검하고 FOMO를 차분한 내 삶의 기준으로 되돌리세요.",
    "kicker": "SNS 박탈감·FOMO 진정 · 현실 앵커 리셋",
    "heroTitle": "SNS 상대적 박탈감·FOMO 진정 & 현실 감각 리셋",
    "heroLead": "SNS를 딱 10분 봤을 뿐인데 나만 뒤처지고 초라해진 기분이 드나요? 5가지 알고리즘 박탈감 유발 요인을 점검하고 FOMO를 차분한 내 삶의 기준으로 되돌리세요.",
    "chip1": "5가지 피드 박탈감",
    "chip2": "FOMO→JOMO 전환",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 박탈감·FOMO를 유발하는 피드 패턴 점검 (1 = 드묾, 5 = 강함)",
    "step1Title": "스크롤 직후 기분을 은근히 가라앉히는 가장 큰 원인은 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: SNS에 자랑할 일은 아니지만 지금 내 삶에서 진짜 소중한 것 1가지 (100% 로컬):",
    "ctaBtn": "내 FOMO 진정 & 피드 정리 플랜 보기",
    "resultBadge": "2단계 • 현실 앵커 복원 및 피드 위생 플랜",
    "noteTitle": "카메라 밖 나의 진짜 소중한 가치",
    "meterLabel": "피드 비교로부터의 정서적 독립도",
    "scriptTitle": "하이라이트 착시를 깨는 현실 문장",
    "stepsTitle": "FOMO를 내 삶의 집중력으로 바꾸는 3단계",
    "stickyTitle": "비교 피드에서 벗어나 20분간 조용한 디지털 휴식을 가져볼까요?",
    "stickySub": "무료 디지털 디톡스 타이머로 고요한 현실 감각 되찾기",
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
    "title": "社交媒体嫉妒与FOMO错失焦虑重置 | DopaBrain",
    "heroTitle": "社交媒体嫉妒与FOMO错失焦虑重置",
    "heroLead": "打破高光时刻对比陷阱，将刷屏焦虑转化为踏实的当下满足感。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "SNS嫉妬＆FOMO現実グラウンディング | DopaBrain",
    "heroTitle": "SNS嫉妬＆FOMO現実グラウンディング",
    "heroLead": "受動スクロールの比較疲れを断ち切り、自分基準のJOMO感覚を取り戻します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reset de Envidia en Redes y FOMO | DopaBrain",
    "heroTitle": "Reset de Envidia en Redes y FOMO",
    "heroLead": "Rompe la comparación con vidas editadas y recupera calma real con JOMO.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Inveja nas Redes e FOMO | DopaBrain",
    "heroTitle": "Reset de Inveja nas Redes e FOMO",
    "heroLead": "Saia da comparação com destaques editados e recupere paz no mundo real.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Social-Media-Neid- & FOMO-Reset | DopaBrain",
    "heroTitle": "Social-Media-Neid- & FOMO-Reset",
    "heroLead": "Durchbrich Highlight-Vergleiche im Feed und finde zurück zu echter JOMO-Ruhe.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Envie Réseaux Sociaux & FOMO | DopaBrain",
    "heroTitle": "Reset Envie Réseaux Sociaux & FOMO",
    "heroLead": "Sortez de la comparaison aux vies filtrées et retrouvez un ancrage réel serein.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс зависти от соцсетей и FOMO | DopaBrain",
    "heroTitle": "Сброс зависти от соцсетей и FOMO",
    "heroLead": "Прервите сравнение с чужими хайлайтами и верните спокойную опору в реальности.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सोशल मीडिया जलन व FOMO ग्राउंडिंग रीसेट | DopaBrain",
    "heroTitle": "सोशल मीडिया जलन व FOMO ग्राउंडिंग रीसेट",
    "heroLead": "सोशल फीड की तुलना तोड़ें और असली जीवन के सुकून (JOMO) पर लौटें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Iri Media Sosial & FOMO | DopaBrain",
    "heroTitle": "Reset Iri Media Sosial & FOMO",
    "heroLead": "Hentikan perbandingan hidup di feed medsos dan kembalikan ketenangan JOMO Anda.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sosyal Medya Kıskançlığı ve FOMO Sıfırlama | DopaBrain",
    "heroTitle": "Sosyal Medya Kıskançlığı ve FOMO Sıfırlama",
    "heroLead": "Filtrelenmiş akış kıyaslamasını bırakın ve gerçek hayat dinginliğine dönün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "passive_lurking",
    "en": "Passive Scroll Spiral — Consuming curated life updates silently without real two-way chat",
    "ko": "수동적 눈팅 스크롤 — 실제 대화 없이 타인의 화려한 근황만 묵묵히 소비함"
  },
  {
    "id": "milestone_envy",
    "en": "Milestone Highlight Shock — Promotions, homes, or vacations making your real week feel small",
    "ko": "성취 하이라이트 충격 — 승진·집·여행 소식에 내 평범한 일상이 갑자기 초라해 보임"
  },
  {
    "id": "fomo_events",
    "en": "Social FOMO Pull — Seeing group outings online and feeling left out even when you needed rest",
    "ko": "모임 소외감(FOMO) — 쉴 필요가 있었으면서도 남들 모임 사진을 보면 불안해짐"
  },
  {
    "id": "envy_follow_trap",
    "en": "Hate-Following Accounts — Still following pages that reliably leave you feeling inadequate",
    "ko": "비교 계정 유지 — 볼 때마다 위축되는 계정을 습관적으로 계속 팔로우함"
  },
  {
    "id": "late_night_scroll",
    "en": "Tired-Brain Scrolling — Opening social apps when lonely or exhausted (lowest resilience)",
    "ko": "지친 밤 피드 접속 — 외롭거나 방전된 밤에 무방비 상태로 피드를 열음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Feed-Envy Spike — Mute 5 Trigger Accounts & Switch to Direct Connection",
    "koT": "피드 박탈감 높음 — 비교 유발 계정 5개 뮤트와 \"진짜 1:1 연락\"으로 즉시 전환하세요",
    "enD": "Experimental psychology studies (Verduyn et al., 2015) found that passive scrolling increases envy and lowers mood reliably, while active direct messaging with a real friend lifts mood. You are comparing your messy behind-the-scenes to 500 strangers’ best 3 seconds.",
    "koD": "심리학 실험(Verduyn et al., 2015)에 따르면 수동적 피드 소비는 시기심과 우울감을 높이는 반면, 실제 지인과의 1:1 대화는 기분을 회복시킵니다. 나의 일상 뒷모습을 수백 명의 편집된 3초 하이라이트와 비교하지 마세요.",
    "enS": "\"I am seeing a composite highlight reel stitched together from hundreds of different people—no single human lives all of those highlights at once.\"",
    "koS": "\"내가 보고 있는 건 수백 명의 가장 좋은 3초만 이어 붙인 합성 화면이야. 그 모든 걸 동시에 다 누리며 사는 사람은 아무도 없어.\"",
    "enL": [
      "Mute (quietly, no drama) the top 5 accounts that trigger comparison today.",
      "Close the feed and send ONE real text or voice note to a friend you actually like.",
      "Turn envy into 1 clear clue: ask \"Does this show a genuine value I want to build slowly, or just status noise?\""
    ],
    "koL": [
      "볼 때마다 기분이 가라앉는 계정 5개를 오늘 조용히 뮤트(숨기기)하세요.",
      "피드를 닫고 진짜 좋아하는 친구 1명에게 짧은 안부 메시지를 직접 보내세요.",
      "부러움이 올라올 때 \"진짜 내가 천천히 키우고 싶은 가치인가, 단순 과시 소음인가?\" 딱 한 번만 구분해 보세요."
    ]
  },
  "mid": {
    "enT": "Occasional FOMO Dip — Curate Feed for Craft & Joy, Not Status",
    "koT": "간헐적 FOMO — 과시형 피드를 줄이고 배움·취향 중심으로 재정렬하세요",
    "enD": "You spot comparison fairly quickly, yet tired evening scrolling still sneaks in. Curating your feed toward hobbies, humor, and craft turns it back into an inspiring tool.",
    "koD": "비교 심리를 꽤 잘 알아차리지만 지친 밤에 가끔 흔들립니다. 피드를 과시형에서 취미·유머·배움 중심으로만 조정해도 체감이 완전히 달라집니다.",
    "enS": "\"Choosing quiet rest tonight is JOMO—the joy of missing out on noise I didn’t want.\"",
    "koS": "\"오늘 밤 조용히 쉬는 선택은 소외가 아니라 내가 고른 평온(JOMO)이야.\"",
    "enL": [
      "Set a 15-minute daily app timer on passive image/video feeds.",
      "Keep social apps off your nightstand after 10 PM.",
      "Replace one scroll break with a quick walk, tea, or offline hobby."
    ],
    "koL": [
      "수동 소비가 심한 피드 앱에 하루 15분 사용 제한 타이머를 걸어 두세요.",
      "밤 10시 이후 침대에서는 피드 앱을 열지 않는 원칙을 지키세요.",
      "무의식적 스크롤 타임 1회를 차 한 잔이나 가벼운 스트레칭으로 바꿔 보세요."
    ]
  },
  "high": {
    "enT": "Strong Grounded Perspective — Healthy JOMO & Real-World Anchors",
    "koT": "단단한 현실 중심 — 피드 소음에 흔들리지 않는 건강한 JOMO 상태입니다",
    "enD": "Your sense of worth is firmly rooted in real life rather than algorithmic feeds. Keep investing in offline friendships and personal craft.",
    "koD": "자존감과 만족의 기준이 알고리즘이 아닌 실제 삶에 단단히 뿌리내려 있습니다. 지금의 건강한 오프라인 중심 생활을 유지하세요.",
    "enS": "\"My real life does not need an audience to feel meaningful.\"",
    "koS": "\"내 진짜 삶은 누군가의 좋아요가 없어도 충분히 의미 있고 충만하다.\"",
    "enL": [
      "Keep following only accounts that spark genuine curiosity or kindness.",
      "Continue nurturing direct 1:1 friendships offline.",
      "Enjoy the peace of moving at your own pace."
    ],
    "koL": [
      "진심으로 호기심과 따뜻함을 주는 계정만 소수로 유지하세요.",
      "오프라인의 진솔한 1:1 관계를 계속 가꾸어 나가세요.",
      "남의 속도가 아닌 나만의 리듬으로 걷는 평온함을 즐기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_scrolling_envy_v1";
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
      window.gtag('event', "scrolling_envy_complete", {
        tool_slug: "scrolling-envy-comparison-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/scrolling-envy-comparison-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "scrolling-envy-comparison-reset",
        filename: 'dopabrain-scrolling-envy-comparison-reset-card.png',
        badge: "SOCIAL MEDIA ENVY • FOMO REALITY GROUNDING",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#a855f7",
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
