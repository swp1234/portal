/* Manager 1:1 & Performance Feedback Calm Prep
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Manager 1:1 & Performance Feedback Calm Prep | DopaBrain",
    "metaDesc": "Stomach dropping whenever a 1:1 or review appears on your calendar? Turn vague anxiety into a crisp 3-bullet agenda and calm non-defensive feedback responses locally.",
    "kicker": "WORKPLACE CALM • 1:1 & PERFORMANCE REVIEW PREP",
    "heroTitle": "Manager 1:1 & Performance Feedback Calm Prep",
    "heroLead": "Stomach dropping whenever a 1:1 or review appears on your calendar? Turn vague anxiety into a crisp 3-bullet agenda and calm non-defensive feedback responses locally.",
    "chip1": "5 1:1 Traps",
    "chip2": "3-Bullet Agenda",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR 1:1 ANXIETY TRIGGERS (1 = CALM, 5 = TENSE)",
    "step1Title": "What makes manager check-ins feel draining or stressful?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One blocker or priority trade-off I want clarity on (100% local):",
    "ctaBtn": "Build My Calm 1:1 Agenda & Script",
    "resultBadge": "STEP 2 • YOUR CALM 1:1 MEETING BLUEPRINT",
    "noteTitle": "My Top Priority Clarification",
    "meterLabel": "1:1 Composure & Clarity",
    "scriptTitle": "Non-Defensive Feedback & Trade-Off Line",
    "stepsTitle": "3 Moves That Turn 1:1s From Interrogation Into Partnership",
    "stickyTitle": "Want to check your overall work stress load in 2 minutes?",
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
    "title": "상사 1:1 면담·성과 피드백 긴장 완화 & 아젠다 준비기 | DopaBrain",
    "metaDesc": "캘린더에 1:1 면담이나 피드백 일정이 뜨면 속이 쓰리나요? 막연한 불안을 3줄 핵심 아젠다와 방어적이지 않은 차분한 피드백 응답으로 바꿔 보세요.",
    "kicker": "직장 소통 · 상사 1:1 면담·피드백 긴장 완화 준비기",
    "heroTitle": "상사 1:1 면담·성과 피드백 긴장 완화 & 아젠다 준비기",
    "heroLead": "캘린더에 1:1 면담이나 피드백 일정이 뜨면 속이 쓰리나요? 막연한 불안을 3줄 핵심 아젠다와 방어적이지 않은 차분한 피드백 응답으로 바꿔 보세요.",
    "chip1": "5가지 면담 함정",
    "chip2": "3줄 핵심 아젠다",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 1:1 면담·피드백 직전 긴장 포인트 점검 (1 = 여유, 5 = 긴장)",
    "step1Title": "상사와의 1:1 면담을 가장 부담스럽게 만드는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 면담에서 명확히 조율하고 싶은 우선순위·장애물 1가지 (100% 로컬):",
    "ctaBtn": "내 차분한 1:1 면담 아젠다·멘트 보기",
    "resultBadge": "2단계 • 흔들리지 않는 1:1 면담 프로토콜",
    "noteTitle": "핵심 우선순위 조율 항목",
    "meterLabel": "면담 주도권 지수",
    "scriptTitle": "피드백을 차분히 받고 우선순위를 조율하는 멘트",
    "stepsTitle": "1:1을 평가 자리가 아닌 협업 자리로 바꾸는 3단계",
    "stickyTitle": "전반적인 직장 스트레스 지수도 2분 만에 점검해 볼까요?",
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
    "title": "主管1对1面谈与反馈冷静准备器 | DopaBrain",
    "heroTitle": "主管1对1面谈与反馈冷静准备器",
    "heroLead": "化解面谈紧张，本地生成3点清晰议程与不防御的沟通回应话术。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "上司1on1・評価面談の緊張ほぐし＆3行アジェンダ | DopaBrain",
    "heroTitle": "上司1on1・評価面談の緊張ほぐし＆3行アジェンダ",
    "heroLead": "1on1前の不安を整え、成果・課題・優先度調整の3行メモをローカル準備。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Preparador Calmo para 1:1 y Feedback Laboral | DopaBrain",
    "heroTitle": "Preparador Calmo para 1:1 y Feedback Laboral",
    "heroLead": "Convierte los nervios del 1:1 en una agenda de 3 puntos y respuestas serenas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Preparador Calmo para 1:1 e Feedback | DopaBrain",
    "heroTitle": "Preparador Calmo para 1:1 e Feedback",
    "heroLead": "Transforme a ansiedade de reuniões 1:1 em pauta de 3 pontos e respostas tranquilas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "1:1-Gespräch & Feedback Ruhe-Planer | DopaBrain",
    "heroTitle": "1:1-Gespräch & Feedback Ruhe-Planer",
    "heroLead": "Erstelle lokal eine klare 3-Punkte-Agenda und ruhige Antworten auf Kritik.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Préparateur Calme 1:1 Manager & Feedback | DopaBrain",
    "heroTitle": "Préparateur Calme 1:1 Manager & Feedback",
    "heroLead": "Transformez le stress des entretiens en agenda 3 points et réponses posées.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Спокойная подготовка к 1:1 и фидбэку | DopaBrain",
    "heroTitle": "Спокойная подготовка к 1:1 и фидбэку",
    "heroLead": "Соберите чёткую повестку из 3 пунктов и спокойные ответы на обратную связь.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "मैनेजर 1:1 और फीडबैक शांत तैयारी | DopaBrain",
    "heroTitle": "मैनेजर 1:1 और फीडबैक शांत तैयारी",
    "heroLead": "1:1 घबराहट को 3-पॉइंट एजेंडा और शांत संवाद में बदलें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Persiapan Tenang 1:1 Manajer & Feedback | DopaBrain",
    "heroTitle": "Persiapan Tenang 1:1 Manajer & Feedback",
    "heroLead": "Ubah gugup 1:1 menjadi agenda 3 poin dan respons umpan balik yang tenang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yönetici 1:1 ve Geri Bildirim Sakin Hazırlık | DopaBrain",
    "heroTitle": "Yönetici 1:1 ve Geri Bildirim Sakin Hazırlık",
    "heroLead": "Görüşme stresini 3 maddelik net gündem ve savunmasız yanıtlara dönüştürün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "catastrophic_invite",
    "en": "Mind-Reading Invites — Seeing \"Quick chat\" and immediately assuming I’m in trouble",
    "ko": "초대장 파국화 — \"잠깐 얘기해요\" 알림만 봐도 혼날 거라 단정함"
  },
  {
    "id": "no_written_agenda",
    "en": "Entering Empty-Handed — Waiting passively to be quizzed instead of bringing 3 bullets",
    "ko": "빈손 입장 — 3줄 아젠다 없이 수동적으로 질문만 기다림"
  },
  {
    "id": "defensive_spike",
    "en": "Instant Defensiveness — Rushing to explain away critique before hearing the core point",
    "ko": "방어 반사 — 피드백 핵심을 듣기 전에 변명부터 급하게 쏟아냄"
  },
  {
    "id": "hidden_overload",
    "en": "Hiding Bandwidth Limits — Saying \"all good!\" while silently drowning in 6 priorities",
    "ko": "과부하 숨기기 — 6가지 업무에 치이면서 습관적으로 \"괜찮습니다\"라고 답함"
  },
  {
    "id": "zero_next_step",
    "en": "Vague Wrap-Up — Leaving unsure what actually matters most before next week",
    "ko": "모호한 마무리 — 끝나고도 다음 주 최우선 순위가 뭔지 불명확함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High 1:1 Tension — Bring a 3-Bullet Doc (Win / Blocker / Priority Trade-Off)",
    "koT": "면담 긴장 높음 — 성과 1·장애물 1·우선순위 질문 1의 3줄 메모로 주도권을 잡으세요",
    "enD": "Organizational psychology shows bringing a short shared agenda shifts your brain from threatened subordinate to proactive partner—and prevents vague ambush anxiety.",
    "koD": "조직 심리학 연구에 따르면 짧은 3줄 아젠다를 먼저 공유하면 뇌가 \"평가받는 수동 모드\"에서 \"문제를 함께 푸는 파트너 모드\"로 전환되어 긴장이 급감합니다.",
    "enS": "\"Thanks for that perspective—let me note it down so I can apply it cleanly. Given X and Y on my plate this week, which one should take top priority?\"",
    "koS": "\"좋은 피드백 감사합니다, 메모해 두고 바로 반영하겠습니다. 이번 주 A와 B가 함께 걸려 있는데 어떤 쪽을 최우선으로 두면 좋을까요?\"",
    "enL": [
      "Send 3 bullets 2 hours before: 1 Win, 1 Blocker/Trade-Off, 1 Growth Question.",
      "When receiving tough feedback, breathe out once and say \"That helps—let me think on how to apply it.\"",
      "End by repeating the top 1–2 agreed priorities aloud so nothing stays fuzzy."
    ],
    "koL": [
      "면담 2시간 전 3줄을 공유하세요: 성과 1개, 조율할 장애물 1개, 질문 1개.",
      "따끔한 피드백이 오면 숨을 한 번 내쉬고 \"정리해서 적용해 보겠습니다\"로 시간을 버세요.",
      "마무리 시 합의된 최우선 과제 1~2개를 소리 내어 확인하고 끝내세요."
    ]
  },
  "mid": {
    "enT": "Solid Check-In Base — Add Explicit Trade-Off Questions to Protect Focus",
    "koT": "안정적 소통 — 업무 우선순위 트레이드오프 질문 1개만 추가해 보세요",
    "enD": "You handle check-ins reasonably well; surfacing workload trade-offs early prevents quiet burnout.",
    "koD": "기본 소통이 좋습니다. 업무가 겹칠 때 우선순위를 미리 묻는 습관만 더하면 훨씬 편해집니다.",
    "enS": "\"Clarity beats guessing—surface trade-offs early and calmly.\"",
    "koS": "\"추측보다 명확함이 낫다. 우선순위 충돌은 조용히, 일찍 꺼낸다.\"",
    "enL": [
      "Keep a running weekly wins note so review season takes 5 minutes.",
      "Ask one forward-looking career question once a month.",
      "Write down agreed action items immediately after the call."
    ],
    "koL": [
      "주간 성과 메모를 1줄씩 쌓아 두면 연말 평가 준비가 5분 만에 끝납니다.",
      "한 달에 한 번은 성장·커리어 방향 질문을 넣어 보세요.",
      "끝나자마자 합의 사항을 2줄로 정리해 남겨 두세요."
    ]
  },
  "high": {
    "enT": "High-Trust Partner Mindset — Calm, Proactive & Clear",
    "koT": "높은 신뢰의 협업 모드 — 차분하고 주도적인 1:1을 이끌고 있습니다",
    "enD": "Your preparation and emotional steadiness make 1:1s genuinely productive for both sides.",
    "koD": "준비성과 평정심이 모두 탄탄해 면담을 실질적 성장의 기회로 잘 활용하고 있습니다.",
    "enS": "\"Feedback is data for craft, never a verdict on my worth.\"",
    "koS": "\"피드백은 내 존재에 대한 판결이 아니라 일의 완성도를 높이는 데이터다.\"",
    "enL": [
      "Continue sharing crisp written pre-reads.",
      "Use 1:1s to align on scope and visibility.",
      "Acknowledge teammates’ wins alongside your own."
    ],
    "koL": [
      "간결한 사전 메모 습관을 계속 유지하세요.",
      "면담을 업무 범위와 가시성을 맞추는 시간으로 활용하세요.",
      "동료의 기여도 함께 나누며 신뢰를 넓히세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_manager_1on1_prep_v1";
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
      window.gtag('event', "manager_1on1_prep_complete", {
        tool_slug: "manager-1on1-feedback-prep",
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
      var shareUrl = "https://dopabrain.com/portal/tools/manager-1on1-feedback-prep.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "manager-1on1-feedback-prep",
        filename: 'dopabrain-manager-1on1-feedback-prep-card.png',
        badge: "WORKPLACE CALM • 1:1 & PERFORMANCE REVIEW PREP",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
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
