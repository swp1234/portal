/* Adult Child & Parent Loving Boundary Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Adult Child & Parent Loving Boundary Planner | DopaBrain",
    "metaDesc": "Loving your parents while still feeling 14 years old during unsolicited advice, money, or visit guilt-trips? Audit 5 enmeshment triggers locally and craft warm, adult-to-adult scripts.",
    "kicker": "FAMILY PEACE • ADULT CHILD & PARENT LOVING BOUNDARY PLANNER",
    "heroTitle": "Adult Child & Parent Loving Boundary Planner",
    "heroLead": "Loving your parents while still feeling 14 years old during unsolicited advice, money, or visit guilt-trips? Audit 5 enmeshment triggers locally and craft warm, adult-to-adult scripts.",
    "chip1": "5 Parent Loops",
    "chip2": "Warm Adult Scripts",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR ADULT-CHILD BOUNDARY TRIGGERS (1 = CALM, 5 = GUILT-TRAPPED)",
    "step1Title": "Where does love blur into guilt or loss of adulthood?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One boundary I want to hold warmly without blowing up (100% local):",
    "ctaBtn": "Build My Loving Adult Boundary Script",
    "resultBadge": "STEP 2 • YOUR WARM ADULT-TO-ADULT BOUNDARY PROTOCOL",
    "noteTitle": "My Warm Boundary Anchor",
    "meterLabel": "Adult Differentiation",
    "scriptTitle": "Warm-Yet-Firm Adult-to-Adult Boundary Line",
    "stepsTitle": "3 Shifts From Guilty Teen Mode to Calm Adulthood",
    "stickyTitle": "Explore how early family patterns shape your adult relationships.",
    "stickySub": "Take the free 2-Min Attachment Style Check",
    "stickyBtn": "Attachment Test →",
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
    "title": "성인 자녀의 부모님 존중 & 죄책감 없는 경계선 플래너 | DopaBrain",
    "metaDesc": "부모님을 사랑하지만 잔소리·결혼·진로·방문 강요 앞에서 자꾸 어린 시절로 돌아가나요? 5가지 가족 밀착 트리거를 점검하고 사랑과 독립을 함께 지키는 성인 대 성인 대화법을 준비하세요.",
    "kicker": "가족 관계 · 성인 자녀의 부모님 존중 & 건강한 경계선 플래너",
    "heroTitle": "성인 자녀의 부모님 존중 & 죄책감 없는 경계선 플래너",
    "heroLead": "부모님을 사랑하지만 잔소리·결혼·진로·방문 강요 앞에서 자꾸 어린 시절로 돌아가나요? 5가지 가족 밀착 트리거를 점검하고 사랑과 독립을 함께 지키는 성인 대 성인 대화법을 준비하세요.",
    "chip1": "5가지 가족 밀착",
    "chip2": "따뜻한 성인 멘트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 부모님과의 경계선·죄책감 트리거 점검 (1 = 편안, 5 = 죄책감)",
    "step1Title": "부모님과의 대화에서 가장 자주 경계가 무너지는 지점은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 화내지 않고 따뜻하게 지키고 싶은 나의 독립 경계 1가지 (100% 로컬):",
    "ctaBtn": "내 따뜻한 성인 경계선 스크립트 보기",
    "resultBadge": "2단계 • 사랑과 독립을 함께 지키는 성인 대화 프로토콜",
    "noteTitle": "따뜻하게 지킬 나의 독립 경계",
    "meterLabel": "성인 분화·자율 지수",
    "scriptTitle": "상처 주지 않으면서 단단히 선을 긋는 1줄",
    "stepsTitle": "죄책감 모드에서 당당한 성인 관계로 옮겨 가는 3단계",
    "stickyTitle": "어린 시절 가족 관계 패턴이 성인 대인관계에 어떤 흔적을 남겼는지 살펴볼까요?",
    "stickySub": "무료 2분 애착 유형 테스트 바로가기",
    "stickyBtn": "애착 테스트 →",
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
    "title": "成年子女与父母温柔边界规划器 | DopaBrain",
    "heroTitle": "成年子女与父母温柔边界规划器",
    "heroLead": "用“爱意+温和界限+转换话题”三步法，在不伤感情的前提下守住独立空间。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "大人の子どもと親の優しい境界線プランナー | DopaBrain",
    "heroTitle": "大人の子どもと親の優しい境界線プランナー",
    "heroLead": "感謝＋短い線引き＋話題転換で罪悪感なく自立と親孝行を両立します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador de Límites Cariñosos entre Hijos Adultos y Padres | DopaBrain",
    "heroTitle": "Planificador de Límites Cariñosos entre Hijos Adultos y Padres",
    "heroLead": "Cuida tu independencia adulta sin culpa con el guion Amor + Límite + Cambio de tema.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Limites Afetuosos entre Filhos Adultos e Pais | DopaBrain",
    "heroTitle": "Planejador de Limites Afetuosos entre Filhos Adultos e Pais",
    "heroLead": "Mantenha autonomia sem culpa usando acolhimento, limite curto e mudança de assunto.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Liebevoller Grenzen-Planer: Erwachsene Kinder & Eltern | DopaBrain",
    "heroTitle": "Liebevoller Grenzen-Planer: Erwachsene Kinder & Eltern",
    "heroLead": "Wahre deine Selbstständigkeit ohne Schuldgefühle mit Wärme, klarer Grenze und Themenwechsel.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur de Limites Bienveillantes Parents & Enfants Adultes | DopaBrain",
    "heroTitle": "Planificateur de Limites Bienveillantes Parents & Enfants Adultes",
    "heroLead": "Préservez votre autonomie sans culpabilité grâce à la formule Amour + Limite + Pivot.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План тёплых границ для взрослых детей и родителей | DopaBrain",
    "heroTitle": "План тёплых границ для взрослых детей и родителей",
    "heroLead": "Сохраняйте взрослую самостоятельность без чувства вины по формуле «Тепло + Граница + Переход».",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "वयस्क संतान और माता-पिता स्नेहपूर्ण सीमा प्लानर | DopaBrain",
    "heroTitle": "वयस्क संतान और माता-पिता स्नेहपूर्ण सीमा प्लानर",
    "heroLead": "बिना अपराधबोध के स्नेह + स्पष्ट सीमा + विषय परिवर्तन से स्वस्थ पारिवारिक संतुलन बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Batas Penuh Kasih Anak Dewasa & Orang Tua | DopaBrain",
    "heroTitle": "Perencana Batas Penuh Kasih Anak Dewasa & Orang Tua",
    "heroLead": "Jaga kemandirian tanpa rasa bersalah dengan skrip Kasih + Batas + Alihkan Topik.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yetişkin Çocuk ve Ebeveyn Sevgi Dolu Sınır Planlayıcı | DopaBrain",
    "heroTitle": "Yetişkin Çocuk ve Ebeveyn Sevgi Dolu Sınır Planlayıcı",
    "heroLead": "Suçluluk duymadan yetişkin bağımsızlığınızı Sevgi + Sınır + Konu Değişimiyle koruyun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "unsolicited_life_advice",
    "en": "Unsolicited Advice Avalanches — Feeling critiqued on career, partner, diet, or parenting",
    "ko": "원치 않는 인생 훈수 — 직장·연애·결혼·육아까지 사사건건 지시를 듣는 느낌"
  },
  {
    "id": "guilt_sigh_compliance",
    "en": "Guilt-Sigh Compliance — Rearranging your whole life whenever a parent sounds disappointed",
    "ko": "한숨·서운함 죄책감 — 부모님이 조금만 서운해하시면 내 일정을 다 접고 맞춰 드림"
  },
  {
    "id": "information_overshare",
    "en": "Oversharing Sensitive Decisions — Telling them undecided plans and inviting anxious feedback",
    "ko": "미결정 사안 공유 — 아직 결정도 안 된 고민을 미리 말했다가 불안과 간섭을 키움"
  },
  {
    "id": "explosive_pushback",
    "en": "Silent Resentment → Blowup — Staying quiet for months until snapping harshly",
    "ko": "참다 폭발 패턴 — 몇 달을 속으로 참다가 사소한 말에 날카롭게 화를 내고 후회함"
  },
  {
    "id": "emotional_caretaker",
    "en": "Parent’s Mood Caretaker — Feeling responsible for fixing their boredom or loneliness",
    "ko": "감정 책임자 역할 — 부모님의 외로움이나 기분까지 내가 다 해결해야 할 것 같음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Enmeshment Guilt — Use the \"Love + Limit + Pivot\" Formula & Share Decisions After Deciding",
    "koT": "가족 밀착·죄책감 높음 — \"사랑 표현 + 짧은 선 + 주제 전환\"과 결정 후 공유 원칙을 쓰세요",
    "enD": "Family systems research (Bowen) calls healthy adulthood \"differentiation\"—staying emotionally connected without letting another person’s anxiety steer your choices. Warm, brief boundaries without long debates preserve love far better than silent resentment.",
    "koD": "가족체계 이론(Bowen)에서는 연결을 유지하면서도 타인의 불안에 휘둘리지 않는 힘을 \"자아 분화\"라 부릅니다. 긴 설득 대신 \"감사+짧은 선+화제 전환\"으로 따뜻하게 선을 지키면 오히려 관계가 더 건강해집니다.",
    "enS": "\"I love you and know you care so much about me—[Partner/I] have this decision handled, so let’s not stress about it! Tell me how your garden/trip went this week.\"",
    "koS": "\"걱정해 주시는 마음 정말 감사해요. 이 부분은 제가 잘 고민해서 결정할 테니까 너무 염려 마세요! 그보다 이번 주에 다녀오신 모임은 즐거우셨어요?\"",
    "enL": [
      "Put sensitive topics on a gentle \"Information Diet\"—share big choices AFTER you decide, not while vulnerable.",
      "Use Love + Limit + Pivot (warm acknowledgment + calm 1-line boundary + cheerful topic change).",
      "Allow your parent to feel mildly disappointed for a day without rushing to rescue or argue—that is how both adults grow."
    ],
    "koL": [
      "민감한 주제는 \"정보 다이어트\"를 적용해 고민 중일 때가 아니라 결정이 끝난 뒤에 차분히 공유하세요.",
      "\"감사 표현 + 짧은 경계 + 밝은 화제 전환\" 3박자로 논쟁 없이 부드럽게 넘기세요.",
      "부모님이 하루쯤 서운해하셔도 즉시 달려가 해명하지 않고 감정을 존중하며 기다려 드리는 연습을 해 보세요."
    ]
  },
  "mid": {
    "enT": "Growing Adult Independence — Keep Explanations Short & Stay Warm",
    "koT": "성인 독립 성장 중 — 구구절절한 설득만 줄이고 따뜻함은 유지하세요",
    "enD": "You hold boundaries well; skipping long justifications prevents old parent-child loops.",
    "koD": "건강한 경계 감각이 자라고 있습니다. 긴 설득만 덜어내면 훨씬 평온해집니다.",
    "enS": "\"Warm heart, brief boundary, zero courtroom defense.\"",
    "koS": "\"마음은 따뜻하게, 선은 짧게, 법정 변론 같은 해명은 생략한다.\"",
    "enL": [
      "Set predictable call times you genuinely enjoy.",
      "Thank them for caring without adopting every suggestion.",
      "Celebrate calm, drama-free visits."
    ],
    "koL": [
      "내가 진심으로 반갑게 통화할 수 있는 고정 시간을 정해 보세요.",
      "조언을 다 따르지 않아도 \"생각해 주셔서 감사해요\"로 따뜻하게 받으세요.",
      "평온하게 마친 만남을 스스로 칭찬해 주세요."
    ]
  },
  "high": {
    "enT": "Healthy Differentiated Adulthood — Connected & Independent",
    "koT": "성숙한 성인 관계 — 애정과 독립이 아름답게 공존합니다",
    "enD": "You honor your parents while calmly steering your own adult life.",
    "koD": "부모님을 존중하면서도 자신의 삶을 주체적으로 잘 이끌고 있습니다.",
    "enS": "\"Love grows stronger when both adults have room to breathe.\"",
    "koS": "\"두 어른 모두 숨 쉴 공간이 있을 때 가족의 사랑은 더 단단해진다.\"",
    "enL": [
      "Keep nurturing joyful shared moments.",
      "Maintain clear visit & communication rhythms.",
      "Model respectful boundaries for the next generation."
    ],
    "koL": [
      "즐거운 추억을 쌓는 대화를 계속 이어 가세요.",
      "편안한 연락·방문 리듬을 유지하세요.",
      "건강한 가족 경계의 좋은 본보기가 되어 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_parent_boundary_v1";
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
      window.gtag('event', "parent_boundary_plan_complete", {
        tool_slug: "parent-adult-child-boundary-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/parent-adult-child-boundary-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "parent-adult-child-boundary-plan",
        filename: 'dopabrain-parent-adult-child-boundary-plan-card.png',
        badge: "FAMILY PEACE • ADULT CHILD & PARENT LOVING BOUNDARY PLANNER",
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
