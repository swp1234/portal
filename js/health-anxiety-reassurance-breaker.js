/* Health Anxiety & Symptom-Search Loop Breaker
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Health Anxiety & Symptom-Search Loop Breaker | DopaBrain",
    "metaDesc": "Stuck in late-night symptom Googling and body-checking that spikes panic instead of bringing relief? Audit 5 reassurance-loop triggers locally and practice a calm, bounded check-in plan.",
    "kicker": "SYMPTOM-SEARCH LOOP • CALM UNCERTAINTY",
    "heroTitle": "Health Anxiety & Symptom-Search Loop Breaker",
    "heroLead": "Stuck in late-night symptom Googling and body-checking that spikes panic instead of bringing relief? Audit 5 reassurance-loop triggers locally and practice a calm, bounded check-in plan.",
    "chip1": "5 Reassurance Traps",
    "chip2": "Calm Pause Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK REASSURANCE LOOP SIGNALS (1 = CALM, 5 = COMPULSIVE)",
    "step1Title": "Which patterns are feeding the health-worry spiral right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One grounded, non-search activity I will do for the next 20 minutes (100% local):",
    "ctaBtn": "Break the Search Loop",
    "resultBadge": "STEP 2 • YOUR CALM UNCERTAINTY & ACTION PLAN",
    "noteTitle": "My 20-Minute Off-Search Anchor",
    "meterLabel": "Calm Perspective Margin",
    "scriptTitle": "Grounded CBT Perspective Cue",
    "stepsTitle": "3 Evidence-Informed Steps to Step Out of Cyberchondria",
    "stickyTitle": "Understand how your anxiety patterns operate overall",
    "stickySub": "Free 2-min Anxiety Type Reflection • Private & instant",
    "stickyBtn": "Anxiety Type →",
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
    "title": "건강염려·증상 검색 루프 브레이커 | DopaBrain",
    "metaDesc": "밤마다 증상을 검색하고 몸을 반복 확인하다 안심되기는커녕 불안만 더 커지나요? 5가지 재확인 루프 신호를 점검하고 차분한 현실 기준을 세우세요.",
    "kicker": "건강염려 검색 루프 멈춤 · 불확실성 안정화",
    "heroTitle": "건강염려·증상 검색 루프 브레이커",
    "heroLead": "밤마다 증상을 검색하고 몸을 반복 확인하다 안심되기는커녕 불안만 더 커지나요? 5가지 재확인 루프 신호를 점검하고 차분한 현실 기준을 세우세요.",
    "chip1": "5가지 검색 함정",
    "chip2": "차분한 멈춤 플랜",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 증상 검색·재확인 루프 점검 (1 = 차분함, 5 = 멈추기 어려움)",
    "step1Title": "지금 건강 걱정 루프를 가장 크게 키우고 있는 행동은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 검색 대신 다음 20분간 할 차분한 현실 활동 1가지 (100% 로컬):",
    "ctaBtn": "검색 루프 멈춤 플랜 만들기",
    "resultBadge": "2단계 • 건강 불안 안정화 & 현실 대응 플랜",
    "noteTitle": "나의 20분 검색 중단 앵커",
    "meterLabel": "차분한 관점 여유도",
    "scriptTitle": "불안을 진정시키는 CBT 현실 문장",
    "stepsTitle": "증상 검색 루프에서 빠져나오는 3단계",
    "stickyTitle": "나의 전반적인 불안 유형 패턴 알아보기",
    "stickySub": "무료 2분 불안 유형 성찰 테스트 · 즉시 결과 확인",
    "stickyBtn": "불안 유형 →",
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
    "title": "健康焦虑与症状搜索循环终结器 | DopaBrain",
    "heroTitle": "健康焦虑与症状搜索循环终结器",
    "heroLead": "识别5大熬夜搜症状陷阱，用温和CBT不确定性练习打破越查越慌的循环。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "健康不安・症状検索ループ解消 | DopaBrain",
    "heroTitle": "健康不安・症状検索ループ解消",
    "heroLead": "夜の症状検索や過剰な確認癖を落ち着かせ、穏やかな対処基準を整えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Freno de Ansiedad por Salud y Búsquedas | DopaBrain",
    "heroTitle": "Freno de Ansiedad por Salud y Búsquedas",
    "heroLead": "Detén las búsquedas nocturnas de síntomas con un plan sereno basado en TCC.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Freio de Ansiedade de Saúde e Buscas | DopaBrain",
    "heroTitle": "Freio de Ansiedade de Saúde e Buscas",
    "heroLead": "Interrompa buscas noturnas de sintomas com um plano calmo baseado em TCC.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Gesundheitsangst- & Such-Loop-Stopper | DopaBrain",
    "heroTitle": "Gesundheitsangst- & Such-Loop-Stopper",
    "heroLead": "Beende nächtliches Symptom-Googeln mit einem ruhigen, klaren KVT-Plan.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Coupe-Circuit Anxiété Santé & Recherche | DopaBrain",
    "heroTitle": "Coupe-Circuit Anxiété Santé & Recherche",
    "heroLead": "Stoppez les recherches nocturnes de symptômes grâce à un plan TCC apaisé.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Стоп-кран для ипохондрии и поиска симптомов | DopaBrain",
    "heroTitle": "Стоп-кран для ипохондрии и поиска симптомов",
    "heroLead": "Остановите ночной поиск симптомов в сети с помощью спокойного КПТ-плана.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "हेल्थ एंग्ज़ायटी व सिम्पटम-सर्च ब्रेकर | DopaBrain",
    "heroTitle": "हेल्थ एंग्ज़ायटी व सिम्पटम-सर्च ब्रेकर",
    "heroLead": "देर रात लक्षण खोजने की चिंता-लूप को शांत CBT योजना से रोकें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pemutus Loop Cemas Kesehatan & Cari Gejala | DopaBrain",
    "heroTitle": "Pemutus Loop Cemas Kesehatan & Cari Gejala",
    "heroLead": "Hentikan kebiasaan mencari gejala tengah malam dengan rencana CBT yang tenang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Sağlık Kaygısı ve Belirti Arama Kırıcı | DopaBrain",
    "heroTitle": "Sağlık Kaygısı ve Belirti Arama Kırıcı",
    "heroLead": "Gece belirti arama döngüsünü sakin bir BDT belirsizlik planıyla durdurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "symptom_search",
    "en": "Worst-Case Searching — Typing normal body sensations into search engines and reading rare outcomes",
    "ko": "최악 검색 습관 — 사소한 신체 감각을 검색해 희귀·중증 사례까지 읽음"
  },
  {
    "id": "body_scanning",
    "en": "Hyper-Scanning — Repeatedly checking pulse, symmetry, or sensations every few minutes",
    "ko": "반복 신체 스캔 — 맥박·통증·느낌을 몇 분 간격으로 계속 확인"
  },
  {
    "id": "reassurance_ask",
    "en": "Reassurance Seeking — Asking friends or AI the same question hoping for 100% certainty",
    "ko": "반복 안심 요청 — 100% 확신을 얻으려 주변이나 AI에 같은 질문을 반복"
  },
  {
    "id": "sensations_equal_danger",
    "en": "Sensation = Danger Reflex — Interpreting benign stress cues (tension, heart rate) as catastrophe",
    "ko": "감각=위험 자동 해석 — 피로·긴장으로 생긴 흔한 신체 반응을 심각한 이상으로 해석"
  },
  {
    "id": "night_amplification",
    "en": "Late-Night Spiral — Worry escalating when tired and alone in quiet rooms",
    "ko": "심야 증폭 — 피곤하고 조용한 밤 시간대에 걱정이 눈덩이처럼 불어남"
  }
];
  var TIERS = {
  "low": {
    "enT": "Active Symptom-Search Spiral — Close the Tabs & Use a Rational Check-In Window",
    "koT": "증상 검색 루프 활성 — 검색창을 닫고 현실적인 확인 기준을 세우세요",
    "enD": "Search engines rank dramatic worst-case pages higher than benign explanations, creating a short relief-then-spike panic cycle. Note: this is a self-reflection tool—always consult a qualified clinician for new, severe, or urgent symptoms.",
    "koD": "검색 결과는 흔한 정상 반응보다 자극적인 최악 사례를 먼저 보여줘 오히려 불안을 키웁니다. (※ 본 도구는 자기성찰용이며, 새롭거나 심하거나 응급한 신체 증상은 반드시 전문 의료진의 진료를 받으세요.)",
    "enS": "\"Searching ten more tabs won’t give me medical certainty—it only spikes adrenaline. If a symptom persists or worries me reasonably, I will book a calm check with a real doctor instead of Dr. Search.\"",
    "koS": "\"검색 탭을 10개 더 연다고 의학적 확신이 생기지 않고 아드레날린만 치솟아. 진짜 확인이 필요한 증상이라면 밤새 검색하는 대신 낮에 전문 의료진과 차분히 상담할게.\"",
    "enL": [
      "Close all symptom-search tabs right now and delay any searching for at least 24 hours.",
      "Write the concern on paper once: if it still matters in 3 days (or is urgent), schedule a real clinical check instead of Googling.",
      "Run 60 seconds of slow exhales below—stress adrenaline itself causes real, benign chest tightness and dizziness."
    ],
    "koL": [
      "지금 열린 증상 검색 탭을 모두 닫고 최소 24시간 검색을 보류하세요.",
      "걱정되는 증상은 메모지에 1번만 적고, 며칠 지속되거나 급하면 검색 대신 실제 병원 진료를 예약하세요.",
      "아래 60초 호흡 페이서로 긴장을 낮추세요—불안 아드레날린 자체도 가슴 답답함이나 어지럼을 유발합니다."
    ]
  },
  "mid": {
    "enT": "Moderate Reassurance Pull — Set a Clean \"No Late-Night Search\" Boundary",
    "koT": "중간 재확인 충동 — \"심야 증상 검색 금지\" 규칙을 정해보세요",
    "enD": "You can spot when checking stops being helpful. Keeping health questions for daytime clinical guidance prevents midnight spirals.",
    "koD": "반복 확인이 도움이 안 되는 시점을 알고 계십니다. 건강 질문은 밤 검색이 아니라 낮 시간 전문 상담으로만 제한해 보세요.",
    "enS": "\"A passing body sensation is normal human noise, not an automatic emergency.\"",
    "koS": "\"스쳐 가는 사소한 신체 감각은 살아있는 몸의 자연스러운 신호이지 자동 응급 상황이 아니야.\"",
    "enL": [
      "Create a firm \"no symptom searching after 8 PM\" rule.",
      "Wait 15 minutes before checking a sensation a second time; notice if it fades when distracted.",
      "Shift focus outward to a pleasant conversation, walk, or book."
    ],
    "koL": [
      "\"오후 8시 이후 증상 검색 금지\" 원칙을 세워보세요.",
      "신체 감각을 다시 확인하기 전 15분만 기다리며 다른 일에 집중해 보세요.",
      "시선을 몸 안쪽에서 바깥의 기분 좋은 활동·대화·산책으로 옮기세요."
    ]
  },
  "high": {
    "enT": "Grounded Health Perspective — Balanced Care Without Spiraling",
    "koT": "균형 잡힌 건강 관점 — 불필요한 검색 없이 차분하게 관리 중입니다",
    "enD": "You are balancing sensible self-care and medical follow-up without letting search loops steal your peace.",
    "koD": "필요한 건강 관리와 마음의 평온을 균형 있게 잘 지키고 계십니다.",
    "enS": "\"I care for my body calmly through routine checkups, rest, and steady habits.\"",
    "koS": "\"나는 불안에 휘둘리기보다 정기 검진과 꾸준한 휴식으로 내 몸을 차분하게 돌본다.\"",
    "enL": [
      "Stick to trusted routine checkups instead of ad-hoc online searching.",
      "Keep daily stress-reduction and sleep habits strong.",
      "Remember that bodies naturally produce harmless quirks every day."
    ],
    "koL": [
      "즉흥적인 인터넷 검색 대신 정기적인 건강 검진 리듬을 유지하세요.",
      "충분한 수면과 일상 스트레스 관리 습관을 이어가세요.",
      "사람의 몸은 매일 무해한 작은 신호들을 자연스럽게 낸다는 점을 기억하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_health_worry_v1";
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
      window.gtag('event', "health_worry_breaker_complete", {
        tool_slug: "health-anxiety-reassurance-breaker",
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
      var shareUrl = "https://dopabrain.com/portal/tools/health-anxiety-reassurance-breaker.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "health-anxiety-reassurance-breaker",
        filename: 'dopabrain-health-anxiety-reassurance-breaker-card.png',
        badge: "SYMPTOM-SEARCH LOOP • CALM UNCERTAINTY",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
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
