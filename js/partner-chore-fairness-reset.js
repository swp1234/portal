/* Couple Mental-Load & Household Fairness Reset Map
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Couple Mental-Load & Household Fairness Reset Map | DopaBrain",
    "metaDesc": "Building quiet resentment over who always notices the empty milk, appointments, and bills? Audit 5 invisible mental-load leaks locally and prepare a blame-free 20-minute ownership reset.",
    "kicker": "PARTNERSHIP FAIRNESS • INVISIBLE MENTAL LOAD & CHORE RESET",
    "heroTitle": "Couple Mental-Load & Household Fairness Reset Map",
    "heroLead": "Building quiet resentment over who always notices the empty milk, appointments, and bills? Audit 5 invisible mental-load leaks locally and prepare a blame-free 20-minute ownership reset.",
    "chip1": "5 Mental-Load Leaks",
    "chip2": "Ownership Reset",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT INVISIBLE HOUSEHOLD MENTAL LOAD (1 = BALANCED, 5 = ONE-SIDED)",
    "step1Title": "Where is silent resentment building around shared home logistics?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One recurring task I want to hand over end-to-end (conceive + plan + do — 100% local):",
    "ctaBtn": "Build Our Blame-Free Fairness Reset",
    "resultBadge": "STEP 2 • YOUR END-TO-END OWNERSHIP RESET PROTOCOL",
    "noteTitle": "Task Ready for Full End-to-End Handoff",
    "meterLabel": "Household Partnership Balance",
    "scriptTitle": "Blame-Free \"Us vs. The System\" Conversation Opener",
    "stepsTitle": "3 Fair-Play Rules That End Chore Arguments Permanently",
    "stickyTitle": "Want to understand how you and your partner react during conflict?",
    "stickySub": "Take the free Attachment Response Reflection",
    "stickyBtn": "Attachment Check →",
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
    "title": "커플·가족 보이지 않는 가사·정신적 노동 공정 분담 리셋 맵 | DopaBrain",
    "metaDesc": "떨어진 생필품, 일정, 청구서를 늘 한 사람만 기억하고 챙겨서 서운함이 쌓이나요? 5가지 보이지 않는 정신적 노동을 점검하고 비난 없이 소유권을 나누는 20분 대화 카드를 만드세요.",
    "kicker": "파트너십 균형 · 보이지 않는 집안일·정신적 노동 공정 리셋",
    "heroTitle": "커플·가족 보이지 않는 가사·정신적 노동 공정 분담 리셋 맵",
    "heroLead": "떨어진 생필품, 일정, 청구서를 늘 한 사람만 기억하고 챙겨서 서운함이 쌓이나요? 5가지 보이지 않는 정신적 노동을 점검하고 비난 없이 소유권을 나누는 20분 대화 카드를 만드세요.",
    "chip1": "5대 정신노동 누수",
    "chip2": "완전 소유권 리셋",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 보이지 않는 집안일·기획 노동 불균형 점검 (1 = 균형, 5 = 한쪽 편중)",
    "step1Title": "함께 사는 공간의 살림·일정 관리에서 가장 억울함이 쌓이는 지점은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 기획부터 실행까지 통째로 넘기고 싶은 반복 업무 1가지 (100% 로컬):",
    "ctaBtn": "비난 없는 가사 공정 분담 리셋 플랜 보기",
    "resultBadge": "2단계 • 끝까지 책임지는 완전 소유권 분담 프로토콜",
    "noteTitle": "완전 이관할 1순위 업무",
    "meterLabel": "가사·정신노동 균형도",
    "scriptTitle": "비난 없이 꺼내는 \"우리 vs 시스템\" 대화 첫마디",
    "stepsTitle": "가사 다툼과 서운함을 끝내는 3가지 공정 원칙",
    "stickyTitle": "갈등이나 서운함이 생길 때 나의 관계 반응 패턴을 알아볼까요?",
    "stickySub": "무료 10문항 애착 반응 리플렉션",
    "stickyBtn": "애착 리플렉션 →",
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
    "title": "伴侣隐形家务与心理负担公平重置图 | DopaBrain",
    "heroTitle": "伴侣隐形家务与心理负担公平重置图",
    "heroLead": "排查5大隐形家庭管理压力，用无指责对话重新划分完整负责权。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "パートナー間の「名もなき家事」公平リセットマップ | DopaBrain",
    "heroTitle": "パートナー間の「名もなき家事」公平リセットマップ",
    "heroLead": "見えない家事・管理負担を可視化し、責め合わずに役割を再設計します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Mapa de Equidad de Carga Mental y Tareas en Pareja | DopaBrain",
    "heroTitle": "Mapa de Equidad de Carga Mental y Tareas en Pareja",
    "heroLead": "Termina con el resentimiento doméstico mediante acuerdos claros sin culpas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Mapa de Justiça da Carga Mental e Tarefas do Casal | DopaBrain",
    "heroTitle": "Mapa de Justiça da Carga Mental e Tarefas do Casal",
    "heroLead": "Reduza o desgaste doméstico dividindo domínios completos sem brigas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Paar-Mental-Load & Haushalts-Fairness-Reset | DopaBrain",
    "heroTitle": "Paar-Mental-Load & Haushalts-Fairness-Reset",
    "heroLead": "Löse unsichtbare Planungs-Last mit einem wertschätzenden 20-Minuten-Reset.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Carte Charge Mentale & Équité des Tâches en Couple | DopaBrain",
    "heroTitle": "Carte Charge Mentale & Équité des Tâches en Couple",
    "heroLead": "Allégez la charge invisible grâce à un partage complet sans reproches.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Карта справедливого распределения быта и ментальной нагрузки | DopaBrain",
    "heroTitle": "Карта справедливого распределения быта и ментальной нагрузки",
    "heroLead": "Снимите скрытое напряжение, спокойно разделив зоны полной ответственности.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "कपल मेंटल-लोड और घरेलू कार्य संतुलन मैप | DopaBrain",
    "heroTitle": "कपल मेंटल-लोड और घरेलू कार्य संतुलन मैप",
    "heroLead": "बिना आरोप लगाए अदृश्य घरेलू जिम्मेदारियों का निष्पक्ष बंटवारा तय करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Peta Keadilan Beban Mental & Tugas Rumah Pasangan | DopaBrain",
    "heroTitle": "Peta Keadilan Beban Mental & Tugas Rumah Pasangan",
    "heroLead": "Kurangi rasa kesal beban rumah tangga dengan reset pembagian tugas tanpa menyalahkan.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Çift Zihinsel Yük ve Ev İşi Adaleti Haritası | DopaBrain",
    "heroTitle": "Çift Zihinsel Yük ve Ev İşi Adaleti Haritası",
    "heroLead": "Görünmeyen ev organizasyonu yükünü suçlamadan tam sorumlulukla dengeleyin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "project_manager_burden",
    "en": "Default Project Manager — Having to remind, delegate, and double-check instead of sharing ownership",
    "ko": "전담 매니저 부담 — 시켜야 움직여 늘 기억하고 지시까지 내가 도맡음"
  },
  {
    "id": "invisible_anticipation",
    "en": "Invisible Anticipation — Tracking groceries, gifts, bills, and appointments alone",
    "ko": "보이지 않는 사전 기획 — 장보기·선물·예약·공과금을 혼자 미리 챙김"
  },
  {
    "id": "uneven_leisure_gap",
    "en": "Uneven Rest Gap — One partner getting uninterrupted downtime while the other cleans",
    "ko": "휴식 시간 격차 — 한쪽이 쉬는 동안 다른 쪽만 계속 치우고 정리함"
  },
  {
    "id": "mid_fight_negotiation",
    "en": "Fighting Over Dishes — Only bringing up fairness when already exhausted and snappy",
    "ko": "지친 밤 폭발 — 평소에 참다가 피곤한 밤 설거지 앞에서 터져 버림"
  },
  {
    "id": "micromanage_takeback",
    "en": "Standard Friction — Taking tasks back because the other person does them differently",
    "ko": "방식 충돌 — 내 방식과 달라 답답해서 결국 내가 다시 끌어안아 버림"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Invisible Load — Shift From \"Helping\" to Full End-to-End Ownership Cards",
    "koT": "정신적 노동 편중 — \"도와주기\"를 끝내고 기획·실행 완전 소유권 카드로 재분배하세요",
    "enD": "Relationship research (Gottman; Rodsky’s Fair Play) shows resentment fades when partners own entire domains end-to-end (Notice -> Plan -> Execute) instead of one person acting as unpaid household manager issuing reminders.",
    "koD": "관계 심리학 연구에 따르면 \"말하면 도와주는 구조\"에서는 매니저 역할을 맡은 쪽의 소진이 멈추지 않습니다. 인식→계획→실행을 통째로 맡는 완전 소유권 전환이 핵심입니다.",
    "enS": "\"I love our team, and lately carrying the mental checklist has left me stretched thin. Can we sit down Sunday for 20 minutes with coffee and split full ownership of a few domains so neither of us feels like a manager?\"",
    "koS": "\"우리 팀을 아끼는데 요즘 살림 체크리스트를 머릿속에 계속 담고 있으려니 많이 지치네. 일요일에 커피 마시며 20분만 몇 가지 영역의 전담을 새로 나눠 볼까?\"",
    "enL": [
      "Hold the 20-minute reset on a calm weekend morning—never mid-chore while hungry or tired.",
      "Assign full CPE ownership (Conceive, Plan, Execute) per recurring domain so zero reminders are needed.",
      "Agree on a simple \"good enough\" baseline and resist micromanaging how your partner executes their owned domain."
    ],
    "koL": [
      "피곤한 밤 대신 여유로운 주말 오전에 커피와 함께 20분 리셋 미팅을 여세요.",
      "영역별로 인식·계획·실행을 한 사람이 통째로 맡아 잔소리·리마인드가 필요 없게 만드세요.",
      "상대가 맡은 영역은 최소 합의 기준만 맞으면 방식에 간섭하지 않고 완전히 믿고 맡기세요."
    ]
  },
  "mid": {
    "enT": "Mostly Fair — Rebalance 2 Invisible Admin Tasks & Equal Rest Hours",
    "koT": "대체로 양호 — 보이지 않는 행정 업무 2개와 평등한 개인 휴식 시간만 맞춰 보세요",
    "enD": "Physical chores are fairly shared; auditing calendar planning and equal guilt-free leisure time makes partnership feel even lighter.",
    "koD": "눈에 보이는 집안일은 잘 나누고 있습니다. 일정 관리와 각자의 온전한 휴식 시간 균형만 맞춰 보세요.",
    "enS": "\"Equal guilt-free rest matters just as much as equal chores.\"",
    "koS": "\"공평한 집안일만큼 공평한 개인 휴식 시간도 중요하다.\"",
    "enL": [
      "Trade 1 recurring invisible admin domain (bills, groceries, or bookings) cleanly.",
      "Compare weekly uninterrupted personal rest hours to keep energy fair.",
      "Express one specific thank-you each week for owned tasks."
    ],
    "koL": [
      "보이지 않는 관리 업무(장보기·공과금·예약) 1가지를 깔끔히 맞교환해 보세요.",
      "서로의 방해받지 않는 주간 개인 휴식 시간이 비슷한지 점검하세요.",
      "매주 상대가 전담해 주는 일에 구체적인 감사 1마디를 건네 보세요."
    ]
  },
  "high": {
    "enT": "High-Trust Partnership — Balanced Ownership & Appreciation",
    "koT": "건강한 팀워크 — 상호 존중과 균형 잡힌 역할 분담이 이루어지고 있습니다",
    "enD": "You have built a genuinely collaborative home rhythm. Revisit divisions briefly whenever work seasons or life stages shift.",
    "koD": "서로의 시간과 에너지를 존중하는 아주 건강한 파트너십입니다. 계절이나 업무 강도가 바뀔 때만 가볍게 재조정하세요.",
    "enS": "\"We are on the same team against the logistics, never against each other.\"",
    "koS": "\"우리는 서로가 아니라 집안일 시스템을 함께 푸는 같은 팀이다.\"",
    "enL": [
      "Keep quarterly 10-minute seasonal check-ins.",
      "Protect shared fun time alongside logistics.",
      "Keep gratitude visible and specific."
    ],
    "koL": [
      "분기마다 10분만 바뀐 일정에 맞춰 역할을 가볍게 조율하세요.",
      "효율적인 살림만큼 함께 웃는 데이트 시간도 꼭 챙기세요.",
      "당연해지기 쉬운 일상 기여에 따뜻한 감사를 계속 표현하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_partner_chore_reset_v1";
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
      window.gtag('event', "partner_chore_reset_complete", {
        tool_slug: "partner-chore-fairness-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/partner-chore-fairness-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "partner-chore-fairness-reset",
        filename: 'dopabrain-partner-chore-fairness-reset-card.png',
        badge: "PARTNERSHIP FAIRNESS • INVISIBLE MENTAL LOAD & CHORE RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
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
