/* Performance Review & Appraisal Nerves Prep Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Performance Review & Appraisal Nerves Prep Kit | DopaBrain",
    "metaDesc": "Dreading your annual performance review or assuming one critical comment erases 12 months of work? Audit 5 review-anxiety loops and pack 3 concrete impact bullets locally.",
    "kicker": "CAREER CALM • PERFORMANCE REVIEW & APPRAISAL NERVES PREP KIT",
    "heroTitle": "Performance Review & Appraisal Nerves Prep Kit",
    "heroLead": "Dreading your annual performance review or assuming one critical comment erases 12 months of work? Audit 5 review-anxiety loops and pack 3 concrete impact bullets locally.",
    "chip1": "5 Review Traps",
    "chip2": "3-Bullet Impact Sheet",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR REVIEW-DAY ANXIETY SIGNALS (1 = GROUNDED, 5 = SPIRALING)",
    "step1Title": "What makes performance reviews feel heavy or threatening right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One quantifiable win from the past 6 months I must not forget (100% local):",
    "ctaBtn": "Build My Calm Review Prep Sheet",
    "resultBadge": "STEP 2 • YOUR CALM APPRAISAL PREP PROTOCOL",
    "noteTitle": "My Anchor Win",
    "meterLabel": "Review Composure Index",
    "scriptTitle": "Calm Response When Receiving Tough Feedback Live",
    "stepsTitle": "3 Moves for a Grounded, High-Trust Review Conversation",
    "stickyTitle": "Want to check your overall work tension before review week?",
    "stickySub": "Take the free 2-Min Stress Check",
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
    "title": "인사평가·연말 성과 면담 긴장 완화 & 3줄 성과 정리 키트 | DopaBrain",
    "metaDesc": "인사평가·성과 면담을 앞두고 사소한 실수 하나가 1년 노력을 지울 것 같아 불안하신가요? 5가지 면담 긴장 패턴을 점검하고 차분한 3줄 성과·성장 답변을 준비하세요.",
    "kicker": "커리어 안정 · 인사평가·성과 면담 긴장 완화 & 증거 3줄 준비 키트",
    "heroTitle": "인사평가·연말 성과 면담 긴장 완화 & 3줄 성과 정리 키트",
    "heroLead": "인사평가·성과 면담을 앞두고 사소한 실수 하나가 1년 노력을 지울 것 같아 불안하신가요? 5가지 면담 긴장 패턴을 점검하고 차분한 3줄 성과·성장 답변을 준비하세요.",
    "chip1": "5가지 면담 불안",
    "chip2": "3줄 성과 요약",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 성과 면담 긴장 신호 점검 (1 = 여유, 5 = 매우 긴장)",
    "step1Title": "인사평가 면담을 앞두고 가장 마음을 무겁게 누르는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 최근 6개월 동안 내가 기여한 구체적 성과 1가지 (100% 로컬):",
    "ctaBtn": "내 차분한 성과 면담 시트 보기",
    "resultBadge": "2단계 • 흔들리지 않는 성과 면담 프로토콜",
    "noteTitle": "핵심 기여 증거",
    "meterLabel": "면담 안정 지수",
    "scriptTitle": "아쉬운 피드백을 들었을 때 차분하게 받는 1문장",
    "stepsTitle": "신뢰를 높이는 성과 면담 3단계 실행법",
    "stickyTitle": "평가 주간 전 현재 직장 스트레스 지수를 점검해 볼까요?",
    "stickySub": "무료 2분 스트레스 테스트 바로가기",
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
    "title": "绩效面谈紧张缓解与3条成果准备工具 | DopaBrain",
    "heroTitle": "绩效面谈紧张缓解与3条成果准备工具",
    "heroLead": "打破近因偏见，本地整理3条量化成果与冷静接住改进建议的回应话术。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "人事評価・査定面談の緊張ケア＆3行成果準備キット | DopaBrain",
    "heroTitle": "人事評価・査定面談の緊張ケア＆3行成果準備キット",
    "heroLead": "査定面談前の不安を整え、3行の成果メモと落ち着いたフィードバック受け答えを準備します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Guía de Calma para Evaluación de Desempeño | DopaBrain",
    "heroTitle": "Guía de Calma para Evaluación de Desempeño",
    "heroLead": "Prepara 3 logros concretos y frases serenas para recibir feedback sin bloquearte.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Preparo Calmo para Avaliação de Desempenho | DopaBrain",
    "heroTitle": "Preparo Calmo para Avaliação de Desempenho",
    "heroLead": "Organize 3 entregas reais e respostas tranquilas para receber feedback sem ansiedade.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Mitarbeitergespräch-Nervosität & 3-Punkte-Prep | DopaBrain",
    "heroTitle": "Mitarbeitergespräch-Nervosität & 3-Punkte-Prep",
    "heroLead": "Bereite 3 konkrete Erfolge und ruhige Antworten auf kritisches Feedback lokal vor.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Préparation Calme Entretien Annuel & Feedback | DopaBrain",
    "heroTitle": "Préparation Calme Entretien Annuel & Feedback",
    "heroLead": "Préparez 3 réalisations clés et des réponses posées face aux retours critiques en local.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Подготовка к Performance Review без паники | DopaBrain",
    "heroTitle": "Подготовка к Performance Review без паники",
    "heroLead": "Соберите 3 конкретных результата и спокойные фразы для обратной связи локально.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "परफ़ॉर्मेंस रिव्यू घबराहट और 3-पॉइंट तैयारी किट | DopaBrain",
    "heroTitle": "परफ़ॉर्मेंस रिव्यू घबराहट और 3-पॉइंट तैयारी किट",
    "heroLead": "3 ठोस उपलब्धियां और फ़ीडबैक शांत तरीके से लेने की स्क्रिप्ट लोकल तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Persiapan Tenang Review Kinerja & Evaluasi | DopaBrain",
    "heroTitle": "Persiapan Tenang Review Kinerja & Evaluasi",
    "heroLead": "Siapkan 3 pencapaian konkret dan kalimat tenang menerima masukan tanpa panik.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Performans Değerlendirme Heyecanı Hazırlık Kiti | DopaBrain",
    "heroTitle": "Performans Değerlendirme Heyecanı Hazırlık Kiti",
    "heroLead": "3 somut başarı maddesi ve geri bildirimleri sakin karşılama cümleleri hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "recency_bias_dread",
    "en": "Recency Bias Trap — Remembering only last week’s tiny slip while forgetting 10 months of steady wins",
    "ko": "최근 편향 — 지난주 작은 실수만 크게 보이고 10개월의 꾸준한 성과는 잊힘"
  },
  {
    "id": "vague_memory_blank",
    "en": "Blank-Mind Bragging — Struggling to recall concrete metrics when asked \"What are you proud of?\"",
    "ko": "성과 기억 백지화 — 잘한 점을 물어볼 때 구체적 사례가 바로 떠오르지 않음"
  },
  {
    "id": "criticism_sting",
    "en": "Constructive Feedback Sting — Hearing one growth note as total rejection of your competence",
    "ko": "피드백 과민 반응 — 보완점 1개를 내 전체 역량에 대한 부정으로 받아들임"
  },
  {
    "id": "comp_avoidance",
    "en": "Scope/Pay Hesitation — Avoiding clear growth or promotion questions to stay \"easy to work with\"",
    "ko": "보상·성장 질문 회피 — 부담 줄까 봐 다음 레벨 기준을 물어보지 못함"
  },
  {
    "id": "post_meeting_replay",
    "en": "Post-Review Over-Replay — Replaying every word for days instead of focusing on 1 next-quarter goal",
    "ko": "면담 후 과반추 — 끝나고 나서도 말 한마디를 며칠씩 곱씹으며 소진됨"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Review Tension — Bring a 3-Win Sheet, Take Notes Live & Ask 1 Forward Question",
    "koT": "면담 긴장 높음 — 3줄 성과 메모·현장 필기·다음 분기 질문 1개로 중심을 잡으세요",
    "enD": "Writing 3 concrete achievements before walking in prevents memory blanks, and taking notes during feedback turns emotional sting into calm curiosity.",
    "koD": "들어가기 전 3가지 기여 사례를 적어 두면 백지화를 막아 주고, 피드백을 들으며 메모하면 감정적 위축이 객관적 대화로 바뀝니다.",
    "enS": "\"Thanks for sharing that specifically—I’m jotting it down so I can build a clear focus plan for next quarter. What would great progress look like in 60 days?\"",
    "koS": "\"구체적으로 짚어 주셔서 감사합니다. 메모해 두고 다음 분기 개선 계획에 반영하겠습니다. 60일 뒤 어떤 모습이면 잘 개선됐다고 볼 수 있을까요?\"",
    "enL": [
      "List 3 concrete wins (problem -> action -> outcome) on a single index card before the meeting.",
      "If surprised by critique, pause 3 seconds, take notes, and say you will follow up with a short action summary tomorrow.",
      "Close by asking one forward-looking question about next-half priorities."
    ],
    "koL": [
      "면담 전 메모지 1장에 3가지 기여 사례(문제→실행→결과)를 짧게 정리해 지참하세요.",
      "예상치 못한 지적을 들으면 3초 숨을 고르고 메모한 뒤 내일 짧은 정리 메일로 회신하세요.",
      "마무리에 다음 반기 최우선 기대치 1가지를 질문하며 주도적으로 닫으세요."
    ]
  },
  "mid": {
    "enT": "Steady Prep — Add 1 Quantifiable Win & 1 Forward Growth Question",
    "koT": "안정적 준비 — 수치화된 성과 1개와 다음 반기 성장 질문 1개만 추가하세요",
    "enD": "One clear impact bullet and one forward question shift the conversation from judgment to partnership.",
    "koD": "구체적 성과 1줄과 미래 지향 질문 1개만으로 면담 분위기가 협력적으로 바뀝니다.",
    "enS": "\"Here are the three outcomes I’m most proud of—where can my work create the highest leverage next quarter?\"",
    "koS": "\"이번 반기 가장 의미 있었던 결과 3가지입니다. 다음 분기에는 어디에 집중하면 팀에 가장 큰 도움이 될까요?\"",
    "enL": [
      "Skim sent emails/PRs from the last 6 months for 5 minutes to refresh concrete wins.",
      "Keep a pen/notebook open to stay grounded during feedback.",
      "Summarize agreed next-quarter goals in 3 bullets afterward."
    ],
    "koL": [
      "최근 6개월 완료 업무를 5분만 훑어 구체적 성과를 떠올리세요.",
      "피드백을 들을 때 펜을 쥐고 적으며 감정을 객관화하세요.",
      "면담 후 합의된 다음 분기 목표를 3줄로 정리해 공유하세요."
    ]
  },
  "high": {
    "enT": "Grounded & Prepared — Constructive Career Dialogue",
    "koT": "단단한 면담 준비 — 성장 중심의 건강한 커리어 대화",
    "enD": "You treat performance reviews as a two-way calibration rather than a personal verdict.",
    "koD": "평가를 인격 심판이 아닌 양방향 업무 조율로 건강하게 활용하고 있습니다.",
    "enS": "\"Clear evidence + curious questions build trust fast.\"",
    "koS": "\"객관적 증거와 호기심 있는 질문이 신뢰를 만든다.\"",
    "enL": [
      "Keep a monthly 2-line brag doc all year.",
      "Celebrate one concrete skill you leveled up.",
      "Align on one stretch project for next half."
    ],
    "koL": [
      "매달 2줄씩 월간 성과 로그를 쌓아 두세요.",
      "올해 성장한 핵심 역량 1가지를 스스로 인정하세요.",
      "다음 반기 도전 과제 1가지를 함께 합의하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_perf_review_v1";
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
      window.gtag('event', "perf_review_prep_complete", {
        tool_slug: "performance-review-nerves-prep",
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
      var shareUrl = "https://dopabrain.com/portal/tools/performance-review-nerves-prep.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "performance-review-nerves-prep",
        filename: 'dopabrain-performance-review-nerves-prep-card.png',
        badge: "CAREER CALM • PERFORMANCE REVIEW & APPRAISAL NERVES PREP KIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
        accent2: "#0ea5e9"
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
