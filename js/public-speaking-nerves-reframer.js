/* Presentation & Public Speaking Nerves Reset Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Presentation & Public Speaking Nerves Reset Kit | DopaBrain",
    "metaDesc": "Heart racing or voice shaking before a presentation, team demo, or interview? Reframe 5 pre-stage adrenaline loops locally and lock in a steady 20-second opening line.",
    "kicker": "PERFORMANCE ANXIETY • EXCITEMENT REFRAME",
    "heroTitle": "Presentation & Public Speaking Nerves Reset Kit",
    "heroLead": "Heart racing or voice shaking before a presentation, team demo, or interview? Reframe 5 pre-stage adrenaline loops locally and lock in a steady 20-second opening line.",
    "chip1": "5 Stage Triggers",
    "chip2": "Excitement Reframe",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PRE-SPEAKING NERVES (1 = STEADY, 5 = RACING)",
    "step1Title": "Which performance-anxiety signals show up most before you speak?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My calm, memorized first opening sentence (100% local):",
    "ctaBtn": "Build My Pre-Stage Calm Protocol",
    "resultBadge": "STEP 2 • YOUR 3-MINUTE BACKSTAGE RESET PROTOCOL",
    "noteTitle": "My Anchor Opening Line (Deliver 20% Slower)",
    "meterLabel": "Pre-Stage Composure Score",
    "scriptTitle": "Anxiety-to-Excitement Reframe Cue",
    "stepsTitle": "3 Science-Backed Moves 3 Minutes Before Speaking",
    "stickyTitle": "Want to check your overall nervous-system stress baseline?",
    "stickySub": "Take the free 60-second Stress Check next",
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
    "title": "발표 울렁증·면접 긴장 완화 & 오프닝 리셋 키트 | DopaBrain",
    "metaDesc": "발표·팀 데모·면접 직전 심장이 두근거리고 목소리가 떨릴까 봐 걱정되나요? 5가지 발표 긴장 신호를 흥분 에너지로 전환하고 안정적인 첫 20초 오프닝을 설계하세요.",
    "kicker": "발표 긴장·무대 공포 전환 · 자신감 리셋 키트",
    "heroTitle": "발표 울렁증·면접 긴장 완화 & 오프닝 리셋 키트",
    "heroLead": "발표·팀 데모·면접 직전 심장이 두근거리고 목소리가 떨릴까 봐 걱정되나요? 5가지 발표 긴장 신호를 흥분 에너지로 전환하고 안정적인 첫 20초 오프닝을 설계하세요.",
    "chip1": "5가지 발표 긴장",
    "chip2": "에너지 전환 루틴",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 발표·면접 직전 긴장 신호 점검 (1 = 차분함, 5 = 매우 떨림)",
    "step1Title": "발표나 면접을 앞두고 가장 크게 올라오는 긴장 신호는 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 어떤 상황에서도 천천히 내뱉을 나만의 첫 오프닝 문장 1줄 (100% 로컬):",
    "ctaBtn": "내 발표 직전 긴장 완화 플랜 보기",
    "resultBadge": "2단계 • 발표 3분 전 백스테이지 리셋 프로토콜",
    "noteTitle": "20% 천천히 말할 나의 첫 오프닝 문장",
    "meterLabel": "발표 평정심 지수",
    "scriptTitle": "불안을 에너지로 바꾸는 리프레임 문장",
    "stepsTitle": "발표 3분 전 목소리와 심박을 안정시키는 3단계",
    "stickyTitle": "평소 나의 스트레스 긴장도 기준선도 함께 확인해 볼까요?",
    "stickySub": "무료 60초 스트레스 체크로 전반적 긴장도 점검하기",
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
    "title": "演讲紧张与面试怯场重置工具箱 | DopaBrain",
    "heroTitle": "演讲紧张与面试怯场重置工具箱",
    "heroLead": "将5类上台前肾上腺素焦虑转化为专注能量，稳住开场前20秒。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "人前スピーチ＆発表緊張リセットキット | DopaBrain",
    "heroTitle": "人前スピーチ＆発表緊張リセットキット",
    "heroLead": "発表前の5つの緊張サインをワクワクへ転換し、最初の20秒を落ち着いて始めます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Calma para Hablar en Público | DopaBrain",
    "heroTitle": "Kit de Calma para Hablar en Público",
    "heroLead": "Reencuadra 5 nervios previos a presentar en energía serena y asegura tu frase inicial.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Calma para Falar em Público | DopaBrain",
    "heroTitle": "Kit de Calma para Falar em Público",
    "heroLead": "Reenquadre 5 sinais de nervosismo em energia firme e garanta seus 20s iniciais.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Lampenfieber- & Präsentations-Reset-Kit | DopaBrain",
    "heroTitle": "Lampenfieber- & Präsentations-Reset-Kit",
    "heroLead": "Wandle 5 Bühnenangst-Signale in ruhige Energie um und sichere deinen Einstiegssatz.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Calme Prise de Parole & Présentation | DopaBrain",
    "heroTitle": "Kit Calme Prise de Parole & Présentation",
    "heroLead": "Transformez 5 signaux de trac en énergie posée et sécurisez vos 20 premières secondes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Снятие волнения перед выступлением | DopaBrain",
    "heroTitle": "Снятие волнения перед выступлением",
    "heroLead": "Переведите 5 сигналов сценического стресса в спокойную энергию и закрепите старт.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "पब्लिक स्पीकिंग व प्रेजेंटेशन काम किट | DopaBrain",
    "heroTitle": "पब्लिक स्पीकिंग व प्रेजेंटेशन काम किट",
    "heroLead": "मंच के 5 घबराहट संकेतों को सकारात्मक ऊर्जा में बदलें और शुरुआती 20 सेकंड स्थिर करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Reset Gugup Presentasi & Public Speaking | DopaBrain",
    "heroTitle": "Kit Reset Gugup Presentasi & Public Speaking",
    "heroLead": "Ubah 5 pemicu gugup panggung menjadi energi tenang dan kunci kalimat pembuka Anda.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Topluluk Önünde Konuşma Sakinlik Kiti | DopaBrain",
    "heroTitle": "Topluluk Önünde Konuşma Sakinlik Kiti",
    "heroLead": "5 sahne gerginliği işaretini sakin enerjiye çevirin ve ilk 20 saniyenizi sabitleyin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "spotlight_effect",
    "en": "Spotlight Illusion — Feeling every tiny pause or blush looks 10x bigger to the room",
    "ko": "조명 효과 착각 — 작은 말더듬이나 표정 변화가 청중에게 10배 크게 보일 거라 느낌"
  },
  {
    "id": "voice_adrenaline",
    "en": "Adrenaline Voice Tightness — Fast shallow breathing making your throat feel tight or shaky",
    "ko": "목소리 떨림·숨 가쁨 — 얕고 빠른 호흡으로 목이 잠기고 말 속도가 빨라짐"
  },
  {
    "id": "blank_mind_fear",
    "en": "Fear of Going Blank — Worrying you will forget your exact memorized script mid-slide",
    "ko": "머릿속 백지 공포 — 외워둔 대본을 중간에 까먹고 멈출까 봐 초조함"
  },
  {
    "id": "hostile_room",
    "en": "Mind-Reading Judgment — Assuming neutral or tired audience faces mean disapproval",
    "ko": "청중 표정 확대 해석 — 무표정하거나 피곤한 얼굴을 부정적 평가로 오해함"
  },
  {
    "id": "perfection_delivery",
    "en": "Flawless Performance Pressure — Believing one stumble ruins the entire message",
    "ko": "무결점 발표 압박 — 한 번이라도 버벅이면 전체 발표가 망한다는 생각"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Adrenaline Surge — Reframe to Excitement & Slow Your First 20 Seconds",
    "koT": "아드레날린 급상승 — \"흥분 에너지\"로 재해석하고 첫 20초만 천천히 시작하세요",
    "enD": "Harvard Business School researcher Alison Wood Brooks found that telling yourself \"I am excited\" outperforms \"I need to calm down\" because both anxiety and excitement are high-arousal states—only the label flips from threat to opportunity.",
    "koD": "하버드 경영대학원 연구에 따르면 긴장할 때 \"진정해\"라고 억누르는 것보다 \"나는 기대되고 에너지가 넘친다\"로 재명명할 때 발표 성과와 목소리 안정감이 훨씬 높아집니다.",
    "enS": "\"My racing heart is just extra oxygen fueling my voice. I am excited to help this room with one clear idea.\"",
    "koS": "\"두근거리는 심장은 내 목소리에 에너지를 실어주는 연료야. 완벽한 연기가 아니라 청중에게 도움이 되는 핵심 1가지를 전하러 가는 거야.\"",
    "enL": [
      "Do 3 physiological sighs (two short inhales through the nose, one long slow exhale through the mouth) to drop throat tightness.",
      "Deliver your very first opening sentence 20% slower than normal, then pause 2 full seconds to breathe.",
      "Shift focus outward: look for 1 friendly face and speak as if helping a single colleague."
    ],
    "koL": [
      "생리적 한숨 3회(코로 짧게 2번 들이마시고 입으로 길게 내쉬기)로 목과 횡격막 긴장을 즉시 푸세요.",
      "첫 오프닝 문장은 평소보다 20% 천천히 말하고, 문장 끝에서 2초간 넉넉히 숨을 고르세요.",
      "시선을 내 안의 떨림이 아닌 청중 중 가장 편안한 얼굴 1명에게 맞추고 대화하듯 말하세요."
    ]
  },
  "mid": {
    "enT": "Normal Pre-Stage Butterflies — Anchor Your Opening & Key 3 Bullets",
    "koT": "자연스러운 발표 전 설렘 — 첫 문장과 핵심 3포인트만 앵커로 잡으세요",
    "enD": "Moderate butterflies sharpen alertness and warmth. Anchoring your opening line and 3 simple signposts prevents blank-mind panic completely.",
    "koD": "적당한 긴장은 목소리에 생동감을 더해 줍니다. 첫 문장과 핵심 키워드 3개만 손에 쥐고 있으면 머릿속이 하얘질 걱정이 사라집니다.",
    "enS": "\"I don’t need a memorized script—I just guide the room through 3 clear takeaways.\"",
    "koS": "\"토씨 하나 안 틀리고 외울 필요 없어. 핵심 포인트 3가지만 친절하게 안내하면 충분해.\"",
    "enL": [
      "Hum gently for 15 seconds backstage to warm up your vocal cords.",
      "Plant both feet firmly on the floor and relax your shoulders before your cue.",
      "Keep a 3-word cue card visible so your brain knows you cannot get lost."
    ],
    "koL": [
      "발표 전 15초간 낮게 허밍해 성대와 목소리 울림을 부드럽게 열어 두세요.",
      "두 발을 바닥에 단단히 붙이고 어깨 힘을 툭 뺀 상태에서 시작하세요.",
      "핵심 단어 3개만 적은 메모를 시야에 두어 안전망을 확보하세요."
    ]
  },
  "high": {
    "enT": "Grounded Speaker Presence — Focus on Value & Natural Pacing",
    "koT": "안정된 발표자 중심 — 내용의 가치와 자연스러운 호흡에 집중하세요",
    "enD": "Your composure is strong. Use intentional pauses after key points so listeners absorb your message effortlessly.",
    "koD": "발표 평정심이 아주 단단합니다. 핵심 문장 뒤에 1~2초 여유 있는 쉼표를 넣으면 전달력이 한층 더 깊어집니다.",
    "enS": "\"A calm 2-second pause sounds confident, never awkward.\"",
    "koS": "\"핵심 뒤에 2초 멈추는 여유는 어색함이 아니라 자신감으로 들린다.\"",
    "enL": [
      "Sip room-temperature water 2 minutes before starting.",
      "Pause briefly after your headline takeaway so the room can digest it.",
      "End with one crisp closing line instead of trailing off."
    ],
    "koL": [
      "시작 2분 전 미지근한 물 한 모금으로 목을 가볍게 적시세요.",
      "가장 중요한 결론을 말한 뒤 2초 멈춰 청중이 소화할 틈을 주세요.",
      "끝맺음을 흐리지 말고 미리 정한 깔끔한 마무리 한 문장으로 닫으세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_public_speaking_reframe_v1";
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
      window.gtag('event', "public_speaking_reframe_complete", {
        tool_slug: "public-speaking-nerves-reframer",
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
      var shareUrl = "https://dopabrain.com/portal/tools/public-speaking-nerves-reframer.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "public-speaking-nerves-reframer",
        filename: 'dopabrain-public-speaking-nerves-reframer-card.png',
        badge: "PERFORMANCE ANXIETY • EXCITEMENT REFRAME",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ef4444",
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
