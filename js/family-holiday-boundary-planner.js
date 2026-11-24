/* Difficult Family & Holiday Gathering Boundary Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Difficult Family & Holiday Gathering Boundary Planner | DopaBrain",
    "metaDesc": "Dreading intrusive questions, old family roles, or emotional guilt trips at upcoming gatherings? Map 5 predictable friction points locally and pack ready-to-use polite exits.",
    "kicker": "FAMILY GATHERINGS • BOUNDARY GAME PLAN",
    "heroTitle": "Difficult Family & Holiday Gathering Boundary Planner",
    "heroLead": "Dreading intrusive questions, old family roles, or emotional guilt trips at upcoming gatherings? Map 5 predictable friction points locally and pack ready-to-use polite exits.",
    "chip1": "5 Family Triggers",
    "chip2": "Polite Exit Scripts",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • SPOT LIKELY GATHERING FRICTION POINTS (1 = RARE, 5 = CERTAIN)",
    "step1Title": "Which recurring family dynamics drain your peace most?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My planned arrival/exit window or solo breather spot (100% local):",
    "ctaBtn": "Build My Gathering Boundary Plan",
    "resultBadge": "STEP 2 • YOUR CALM FAMILY BOUNDARY PLAYBOOK",
    "noteTitle": "My Pre-Committed Exit & Breather Anchor",
    "meterLabel": "Emotional Autonomy Buffer",
    "scriptTitle": "Warm Topic-Pivot Script (No Arguing Needed)",
    "stepsTitle": "3 Calm Moves Before & During Family Gatherings",
    "stickyTitle": "Do crowded family rooms overstimulate your nervous system?",
    "stickySub": "Check your sensitivity profile with the free HSP Test",
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
    "title": "부담스러운 가족 모임·명절 경계선 대응 플래너 | DopaBrain",
    "metaDesc": "다가오는 가족·명절 모임의 선 넘는 질문, 낡은 역할 강요, 감정적 죄책감이 부담스럽나요? 5가지 갈등 지점을 미리 점검하고 정중한 전환 멘트를 준비하세요.",
    "kicker": "가족 모임·명절 경계선 · 평온 대응 플래너",
    "heroTitle": "부담스러운 가족 모임·명절 경계선 대응 플래너",
    "heroLead": "다가오는 가족·명절 모임의 선 넘는 질문, 낡은 역할 강요, 감정적 죄책감이 부담스럽나요? 5가지 갈등 지점을 미리 점검하고 정중한 전환 멘트를 준비하세요.",
    "chip1": "5가지 가족 갈등 요인",
    "chip2": "정중한 전환 멘트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 예상되는 가족 모임 갈등 지점 점검 (1 = 드묾, 5 = 확실함)",
    "step1Title": "가족·친척 모임에서 마음을 가장 지치게 하는 반복 패턴은 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 내가 정해둘 참석 시간 상한선 또는 잠시 숨 돌릴 혼자만의 공간 (100% 로컬):",
    "ctaBtn": "내 가족 모임 경계선 플랜 만들기",
    "resultBadge": "2단계 • 평온한 가족 모임 경계선 플레이북",
    "noteTitle": "미리 정해둔 귀가·휴식 앵커",
    "meterLabel": "정서적 자율성 방어력",
    "scriptTitle": "싸우지 않고 화제를 돌리는 부드러운 멘트",
    "stepsTitle": "가족 모임 전·중 평정심을 지키는 3단계",
    "stickyTitle": "시끌벅적한 가족 모임에서 감각·감정 과부하를 쉽게 느끼시나요?",
    "stickySub": "무료 HSP 민감도 테스트로 나의 자극 허용치 확인하기",
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
    "title": "家庭聚会与节日边界规划师 | DopaBrain",
    "heroTitle": "家庭聚会与节日边界规划师",
    "heroLead": "提前梳理5类家庭聚会摩擦点，准备温和体面的转移话题与离场话术。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "家族・帰省の境界線＆穏やか対策プラン | DopaBrain",
    "heroTitle": "家族・帰省の境界線＆穏やか対策プラン",
    "heroLead": "帰省や家族の集まりの5大ストレスを整理し、角の立たない話題転換フレーズを準備。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Límites para Reuniones Familiares | DopaBrain",
    "heroTitle": "Plan de Límites para Reuniones Familiares",
    "heroLead": "Anticipa 5 roces familiares y lleva frases amables para cambiar de tema sin discutir.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Limites para Reuniões de Família | DopaBrain",
    "heroTitle": "Plano de Limites para Reuniões de Família",
    "heroLead": "Mapeie 5 gatilhos familiares e prepare saídas gentis sem entrar em discussões.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Familien- & Feiertags-Grenzen-Planer | DopaBrain",
    "heroTitle": "Familien- & Feiertags-Grenzen-Planer",
    "heroLead": "Erkenne 5 typische Familientrigger und nimm höfliche Themenwechsel-Skripte mit.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan de Limites Réunions de Famille | DopaBrain",
    "heroTitle": "Plan de Limites Réunions de Famille",
    "heroLead": "Anticipez 5 tensions familiales et préparez des transitions polies sans conflit.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План границ для семейных встреч | DopaBrain",
    "heroTitle": "План границ для семейных встреч",
    "heroLead": "Разберите 5 триггеров семейных застолий и возьмите мягкие фразы для смены темы.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "फैमिली व हॉलिडे बाउंड्री प्लानर | DopaBrain",
    "heroTitle": "फैमिली व हॉलिडे बाउंड्री प्लानर",
    "heroLead": "पारिवारिक मिलन के 5 तनाव बिंदु पहचानें और विनम्र विषय-बदल स्क्रिप्ट तैयार रखें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Batasan Kumpul Keluarga | DopaBrain",
    "heroTitle": "Perencana Batasan Kumpul Keluarga",
    "heroLead": "Petakan 5 pemicu gesekan keluarga dan siapkan kalimat alih topik yang sopan & tenang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Aile ve Bayram Sınır Planlayıcısı | DopaBrain",
    "heroTitle": "Aile ve Bayram Sınır Planlayıcısı",
    "heroLead": "5 tipik aile toplantısı tetikleyicisini belirleyin ve nazik konu değiştirme cümleleri hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "intrusive_questions",
    "en": "Intrusive Life Questions — Unsolicited remarks on career, marriage, body, or money",
    "ko": "선 넘는 사생활 질문 — 진로·결혼·외모·연봉에 대한 원치 않는 참견"
  },
  {
    "id": "old_role_pull",
    "en": "Childhood Role Regression — Feeling pulled back into the peacekeeper or scapegoat role",
    "ko": "어린 시절 역할 회귀 — 어느새 중재자나 눈치 보는 역할로 되돌아감"
  },
  {
    "id": "guilt_leverage",
    "en": "Obligation & Guilt Trips — Subtle pressure to stay longer or overextend to keep peace",
    "ko": "죄책감·의무 압박 — 평화를 지키기 위해 더 머물거나 무리해야 할 것 같은 압박"
  },
  {
    "id": "trapped_logistics",
    "en": "No Independent Exit — Sharing rides or staying overnight with zero private decompression space",
    "ko": "퇴로 없는 동선 — 단독 귀가 수단이나 혼자 숨 돌릴 방이 없음"
  },
  {
    "id": "unspoken_tension",
    "en": "Walking on Eggshells — Monitoring moods around the table to stop arguments before they start",
    "ko": "눈치 살피기 긴장 — 다툼이 터지지 않도록 식탁 분위기를 계속 감시함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Gathering Stress — Protect Your Logistics & Use Short, Warm Pivots",
    "koT": "모임 긴장도 높음 — 독립 귀가 동선과 짧은 화제 전환 멘트를 먼저 확보하세요",
    "enD": "Family systems researcher Murray Bowen showed that old emotional triangles reactivate fastest when you are tired and have no exit. Short visits, clear time limits, and boring-friendly answers protect your peace without drama.",
    "koD": "가족체계 이론에 따르면 피곤하고 퇴로가 없을 때 오래된 가족 갈등 패턴이 가장 빨리 재작동합니다. 방문 시간을 짧게 정하고, 논쟁 없이 부드럽게 넘기는 문장을 미리 준비하면 불필요한 소모를 막을 수 있습니다.",
    "enS": "\"Thanks for asking! I’m keeping that chapter private for now—tell me how your garden / latest trip has been going!\"",
    "koS": "\"신경 써주셔서 감사해요! 그 부분은 아직 제가 조용히 정리 중이라 나중에 좋은 소식 있을 때 말씀드릴게요. 요즘 여행/건강은 어떠세요?\"",
    "enL": [
      "Arrange your own transportation or stay window upfront (\"We can stay from 2 to 5 PM!\").",
      "Use the \"Bean-Dip Pivot\": 1 warm acknowledgment + 1 immediate question about the other person or food.",
      "Schedule a 10-minute solo walk, porch breather, or errand run halfway through the gathering."
    ],
    "koL": [
      "도착 전부터 머물 시간(\"2시부터 5시까지 있다가 이동해요\")을 미리 밝히고 독립 귀가 수단을 확보하세요.",
      "\"감자전 피벗\": 1문장으로 부드럽게 받아넘긴 뒤 즉시 상대방 취미나 음식 이야기로 화제를 전환하세요.",
      "모임 중간에 10분 혼자 산책하거나 심부름을 핑계로 감각을 식히는 숨통을 넣으세요."
    ]
  },
  "mid": {
    "enT": "Predictable Friction — Pack Two Scripts & One Decompression Habit",
    "koT": "예측 가능한 마찰 — 전환 멘트 2개와 귀가 후 회복 루틴을 챙기세요",
    "enD": "Most of the gathering can feel pleasant if you stop trying to win debates or fix everyone’s mood. Let minor comments pass like background weather.",
    "koD": "모든 사람의 기분을 맞추거나 논쟁에서 이기려 애쓰지 않으면 모임 대부분을 무난히 넘길 수 있습니다. 사소한 코멘트는 지나가는 날씨처럼 흘려보내세요.",
    "enS": "\"That’s an interesting way to look at it—I’m going to grab some water, can I bring you anything?\"",
    "koS": "\"그렇게 보실 수도 있겠네요. 저 물 한 잔 가져올 건데 필요한 거 있으세요?\"",
    "enL": [
      "Decide beforehand which 2 topics are strictly off-limits for debate.",
      "Sit near the relative or friend who feels most grounding to you.",
      "Plan a quiet, zero-obligation evening right after the gathering to decompress."
    ],
    "koL": [
      "절대 토론하지 않을 민감 주제 2가지를 미리 마음속에 정해 두세요.",
      "식탁에서 가장 편안하고 안정감을 주는 가족·지인 옆자리에 앉으세요.",
      "모임이 끝난 직후 저녁은 아무 일정도 없는 나만의 회복 시간으로 비워 두세요."
    ]
  },
  "high": {
    "enT": "Steady Adult Presence — Enjoy Connection Without Absorbing Tension",
    "koT": "단단한 어른의 중심 — 긴장은 흡수하지 않고 따뜻한 연결만 누리세요",
    "enD": "You have strong emotional differentiation heading into this gathering. Stay curious, keep your normal pacing, and enjoy the moments that genuinely feel good.",
    "koD": "정서적 분화가 아주 안정적으로 잡혀 있습니다. 무리하지 않는 페이스를 유지하며 진짜 따뜻한 순간만 가볍게 즐기세요.",
    "enS": "\"I can stay warm and present while remaining completely grounded in my own adult choices.\"",
    "koS": "\"나는 나만의 어른다운 선택 위에 단단히 서 있으면서도 따뜻하게 함께할 수 있어.\"",
    "enL": [
      "Bring one lighthearted conversation starter or shared activity.",
      "Keep short micro-breaks to stay refreshed throughout the day.",
      "Notice one sincere moment of warmth before you head home."
    ],
    "koL": [
      "분위기를 부드럽게 여는 가벼운 화제나 소소한 놀이를 하나 챙겨 가세요.",
      "하루 중간 짧은 숨 돌리기 루틴으로 에너지를 고르게 유지하세요.",
      "귀가 전 오늘 모임에서 진심으로 좋았던 한 장면을 마음에 담아 두세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_family_holiday_boundary_v1";
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
      window.gtag('event', "family_holiday_boundary_complete", {
        tool_slug: "family-holiday-boundary-planner",
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
      var shareUrl = "https://dopabrain.com/portal/tools/family-holiday-boundary-planner.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "family-holiday-boundary-planner",
        filename: 'dopabrain-family-holiday-boundary-planner-card.png',
        badge: "FAMILY GATHERINGS • BOUNDARY GAME PLAN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ec4899",
        accent2: "#f59e0b"
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
