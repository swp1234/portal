/* Social Comparison & Status-Envy Perspective Reset
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Social Comparison & Status-Envy Perspective Reset | DopaBrain",
    "metaDesc": "Closing Instagram or LinkedIn feeling strangely behind on your own life? Audit 5 upward-comparison traps locally and convert envy into one concrete, self-chosen next step.",
    "kicker": "EMOTIONAL CLARITY • SOCIAL COMPARISON & STATUS-ENVY RESET",
    "heroTitle": "Social Comparison & Status-Envy Perspective Reset",
    "heroLead": "Closing Instagram or LinkedIn feeling strangely behind on your own life? Audit 5 upward-comparison traps locally and convert envy into one concrete, self-chosen next step.",
    "chip1": "5 Comparison Traps",
    "chip2": "Envy-to-Clarity",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR COMPARISON TRIGGERS (1 = GROUNDED, 5 = DRAINED)",
    "step1Title": "Which curated highlight reels steal your peace fastest?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One real win or quiet blessing in my own life right now (100% local):",
    "ctaBtn": "Reset My Comparison Lens",
    "resultBadge": "STEP 2 • YOUR COMPARISON DETOX & OWN-LANE ANCHOR",
    "noteTitle": "My Real-Life Grounding Anchor",
    "meterLabel": "Internal Self-Anchor",
    "scriptTitle": "Highlight-Reel Reality Reminder",
    "stepsTitle": "3 Fast Ways to Step Out of Upward-Comparison Spirals",
    "stickyTitle": "Notice comparison tension sitting in your chest or shoulders?",
    "stickySub": "Check your overall stress load in 2 minutes",
    "stickyBtn": "Stress Check →",
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
    "title": "SNS 비교·상대적 박탈감 시선 리셋 & 나만의 기준 회복기 | DopaBrain",
    "metaDesc": "인스타나 링크드인을 닫고 나면 괜히 나만 뒤처진 기분이 드나요? 5가지 상향 비교 함정을 점검하고 씁쓸한 박탈감을 나만의 차분한 기준과 다음 행동으로 전환하세요.",
    "kicker": "감정 명료도 · SNS 비교·박탈감 시선 리셋 랩",
    "heroTitle": "SNS 비교·상대적 박탈감 시선 리셋 & 나만의 기준 회복기",
    "heroLead": "인스타나 링크드인을 닫고 나면 괜히 나만 뒤처진 기분이 드나요? 5가지 상향 비교 함정을 점검하고 씁쓸한 박탈감을 나만의 차분한 기준과 다음 행동으로 전환하세요.",
    "chip1": "5가지 비교 함정",
    "chip2": "기준 회복 리셋",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 비교와 박탈감이 올라오는 순간 점검 (1 = 담담, 5 = 크게 위축)",
    "step1Title": "남의 하이라이트를 볼 때 내 평온을 가장 빠르게 뺏어가는 영역은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 지금 내 삶에 분명히 존재하는 감사하거나 잘 해낸 점 1가지 (100% 로컬):",
    "ctaBtn": "내 비교 시선 리셋 & 기준 회복 보기",
    "resultBadge": "2단계 • 비교 디톡스 & 나만의 레인 복귀 프로토콜",
    "noteTitle": "내 현실의 단단한 중심 1가지",
    "meterLabel": "내면 기준 안정도",
    "scriptTitle": "하이라이트 왜곡 해제 1줄",
    "stepsTitle": "상향 비교 소용돌이에서 빠져나오는 3단계",
    "stickyTitle": "비교 스트레스가 가슴 답답함이나 긴장으로 쌓여 있나요?",
    "stickySub": "무료 2분 스트레스 체크로 긴장도 확인",
    "stickyBtn": "스트레스 체크 →",
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
    "title": "社交媒体攀比与落差感视角重置器 | DopaBrain",
    "heroTitle": "社交媒体攀比与落差感视角重置器",
    "heroLead": "跳出他人高光滤镜陷阱，回归自己的真实节奏与内在标准。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "SNS比較・嫉妬リセット＆自分軸リカバリー | DopaBrain",
    "heroTitle": "SNS比較・嫉妬リセット＆自分軸リカバリー",
    "heroLead": "他人のハイライト比較から抜け出し、自分のペースを取り戻すリセットツール。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reset de Comparación Social y Envidia en Redes | DopaBrain",
    "heroTitle": "Reset de Comparación Social y Envidia en Redes",
    "heroLead": "Sal de la trampa de vidas editadas y vuelve a tu propio ritmo.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reset de Comparação Social e Inveja de Redes | DopaBrain",
    "heroTitle": "Reset de Comparação Social e Inveja de Redes",
    "heroLead": "Saia da armadilha dos destaques editados e volte ao seu próprio ritmo.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Social-Media-Vergleich & Neid-Perspektiven-Reset | DopaBrain",
    "heroTitle": "Social-Media-Vergleich & Neid-Perspektiven-Reset",
    "heroLead": "Löse dich von inszenierten Highlights und finde zurück in deine eigene Spur.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Reset Comparaison Sociale & Envie sur les Réseaux | DopaBrain",
    "heroTitle": "Reset Comparaison Sociale & Envie sur les Réseaux",
    "heroLead": "Sortez du piège des vitrines idéalisées et retrouvez votre propre cap.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Сброс социального сравнения и зависти в соцсетях | DopaBrain",
    "heroTitle": "Сброс социального сравнения и зависти в соцсетях",
    "heroLead": "Выйдите из ловушки чужих «витрин» и вернитесь к своим ориентирам.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सोशल मीडिया तुलना और ईर्ष्या रीसेट लैब | DopaBrain",
    "heroTitle": "सोशल मीडिया तुलना और ईर्ष्या रीसेट लैब",
    "heroLead": "दूसरों की हाईलाइट रील से तुलना छोड़ें और अपने रास्ते पर शांत फोकस पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reset Perbandingan Sosial & Iri Media Sosial | DopaBrain",
    "heroTitle": "Reset Perbandingan Sosial & Iri Media Sosial",
    "heroLead": "Lepaskan diri dari jebakan sorotan media sosial dan kembali ke jalur Anda.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sosyal Medya Kıyaslama ve Haset Perspektif Sıfırlama | DopaBrain",
    "heroTitle": "Sosyal Medya Kıyaslama ve Haset Perspektif Sıfırlama",
    "heroLead": "Filtreli hayatlarla kıyaslamayı bırakıp kendi hızınıza ve değerlerinize dönün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "highlight_vs_behind_scenes",
    "en": "Highlight-vs-Messy-Middle — Comparing my raw Tuesday to 50 people’s best annual milestones",
    "ko": "하이라이트 대 일상 비교 — 내 평범한 화요일과 남의 1년 중 최고 순간을 비교함"
  },
  {
    "id": "linkedin_career_dread",
    "en": "Career-Ladder Panic — Scrolling promotions and feeling behind on an imaginary timeline",
    "ko": "커리어 조급함 — 승진·이직 소식을 보며 정해지지 않은 시간표에 쫓김"
  },
  {
    "id": "lifestyle_spending_pull",
    "en": "Curated Lifestyle Drift — Wanting purchases I didn’t even care about 10 minutes earlier",
    "ko": "취향 전염 — 10분 전엔 관심도 없던 소비·여행이 갑자기 부족하게 느껴짐"
  },
  {
    "id": "muted_accounts_missing",
    "en": "Unfiltered Feed — Still following accounts that consistently trigger inadequacy",
    "ko": "피드 미정리 — 볼 때마다 기분이 가라앉는 계정을 그대로 팔로우 중임"
  },
  {
    "id": "forgetting_hidden_tradeoffs",
    "en": "Invisible Trade-Offs — Envying one visible slice without seeing the unseen costs behind it",
    "ko": "보이지 않는 대가 망각 — 겉의 결과만 부러워하고 그 뒤의 대가·고민은 보지 못함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Comparison Drain — Mute 5 Trigger Accounts & Extract 1 Honest Desire",
    "koT": "비교 소진 높음 — 마음을 깎는 계정 5개를 뮤트하고, 부러움 속 내 진짜 욕구 1개만 꺼내세요",
    "enD": "Social comparison theory (Festinger; Verduyn et al.) shows passive feed browsing spikes inadequacy because algorithms compress 500 people’s peak wins into one 60-second scroll. Muting triggers and turning benign envy into curiosity restores agency fast.",
    "koD": "사회비교 이론 연구에 따르면 수동적 피드 탐색은 수백 명의 최고 순간을 1분 안에 압축해 보여주기 때문에 뇌가 정상 기준을 왜곡합니다. 자극 계정을 조용히 뮤트하고 내 레인으로 돌아오세요.",
    "enS": "\"I am comparing my uncut behind-the-scenes to an edited highlight reel. Mute the noise, focus on my own next step.\"",
    "koS": "\"나는 편집 없는 내 일상과 남의 편집된 하이라이트를 비교하고 있었다. 소음을 끄고 내 다음 한 걸음에 집중한다.\"",
    "enL": [
      "Silently mute (not even dramatic unfollow) 5 accounts that leave you feeling smaller after viewing.",
      "Ask: \"What specific value does this envy point to—freedom, creativity, rest?\" and take 1 tiny action toward it.",
      "Switch from passive scrolling to active creating or messaging 1 real friend today."
    ],
    "koL": [
      "볼 때마다 기분이 가라앉는 계정 5개만 오늘 조용히 숨기기(뮤트) 처리하세요.",
      "부러움 뒤에 숨은 내 진짜 가치(여유·창작·안정)를 1단어로 적고 내 일상에 작게 적용하세요.",
      "수동적 피드 구경 대신 직접 무언가 만들거나 진짜 친구 1명에게 안부를 보내세요."
    ]
  },
  "mid": {
    "enT": "Moderate Comparison Pull — Curate Your Feed & Protect Post-Work Energy",
    "koT": "중간 수준 비교 피로 — 피곤한 저녁 시간 피드 차단만으로도 마음이 훨씬 편안해집니다",
    "enD": "You notice comparison fairly quickly; keeping feeds closed when tired prevents unnecessary self-doubt.",
    "koD": "비교 심리를 비교적 잘 알아차리고 있습니다. 지친 밤 시간만 피드를 닫아 두어도 흔들림이 크게 줄어듭니다.",
    "enS": "\"Run my own race at my own season.\"",
    "koS": "\"남의 속도가 아니라 지금 내 계절의 속도로 달린다.\"",
    "enL": [
      "Avoid opening status-heavy feeds right before sleep or when exhausted.",
      "Follow educators, nature, and craft accounts that leave you inspired rather than lacking.",
      "Compare yourself only to yourself 6 months ago."
    ],
    "koL": [
      "피곤하거나 잠들기 직전에는 과시성 피드를 열지 마세요.",
      "부족함 대신 배움과 영감을 주는 계정 위주로 피드를 정돈하세요.",
      "유일한 비교 대상을 6개월 전의 나 자신으로 고정하세요."
    ]
  },
  "high": {
    "enT": "Grounded Internal Compass — Calm & Self-Directed",
    "koT": "단단한 내면 기준 — 타인의 속도에 흔들리지 않는 건강한 중심입니다",
    "enD": "Your sense of worth stays anchored in your own values and relationships rather than curated feeds.",
    "koD": "외부의 편집된 기준보다 내 가치관과 관계에 중심이 잘 잡혀 있습니다.",
    "enS": "\"Other people’s wins don’t shrink my path.\"",
    "koS": "\"남의 성취가 내 길의 가치를 조금도 줄이지 않는다.\"",
    "enL": [
      "Keep celebrating others genuinely while honoring your own pace.",
      "Maintain clean digital boundaries.",
      "Invest time in real-world joy that needs no posting."
    ],
    "koL": [
      "남의 기쁨을 진심으로 축하하면서도 내 페이스를 지켜 나가세요.",
      "깔끔한 디지털 경계를 계속 유지하세요.",
      "사진으로 증명하지 않아도 행복한 오프라인 순간들을 아끼세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_social_envy_detox_v1";
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
      window.gtag('event', "social_envy_detox_complete", {
        tool_slug: "social-media-envy-detox",
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
      var shareUrl = "https://dopabrain.com/portal/tools/social-media-envy-detox.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "social-media-envy-detox",
        filename: 'dopabrain-social-media-envy-detox-card.png',
        badge: "EMOTIONAL CLARITY • SOCIAL COMPARISON & STATUS-ENVY RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ec4899",
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
