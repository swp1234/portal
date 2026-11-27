/* Needle & Blood-Draw Fear Applied-Tension Calm Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Needle & Blood-Draw Fear Applied-Tension Calm Kit | DopaBrain",
    "metaDesc": "Feel woozy, cold-sweaty, or faint around blood draws and vaccines? Learn why normal relaxation can backfire for needle fainting—and prep Öst’s evidence-based Applied Tension + recline request locally.",
    "kicker": "CLINICAL CBT SKILL • NEEDLE & BLOOD-DRAW APPLIED TENSION KIT",
    "heroTitle": "Needle & Blood-Draw Fear Applied-Tension Calm Kit",
    "heroLead": "Feel woozy, cold-sweaty, or faint around blood draws and vaccines? Learn why normal relaxation can backfire for needle fainting—and prep Öst’s evidence-based Applied Tension + recline request locally.",
    "chip1": "5 Vasovagal Cues",
    "chip2": "Applied Tension",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR NEEDLE / BLOOD-DRAW SYMPTOMS (1 = NONE, 5 = STRONG)",
    "step1Title": "What usually happens during blood tests or injections?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One request I will tell the nurse/phlebotomist upfront (100% local):",
    "ctaBtn": "Build My Blood-Draw Calm & Applied-Tension Plan",
    "resultBadge": "STEP 2 • YOUR APPLIED-TENSION & CLINIC REQUEST PROTOCOL",
    "noteTitle": "My Nurse Check-In Request",
    "meterLabel": "Blood-Draw Steadiness",
    "scriptTitle": "Simple Upfront Recline & Look-Away Script",
    "stepsTitle": "3 Clinical Steps (Applied Tension + Hydration + Recline)",
    "stickyTitle": "Want to understand your broader physical anxiety patterns?",
    "stickySub": "Take the free Anxiety Type Test next",
    "stickyBtn": "Anxiety Test →",
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
    "title": "주사·채혈 공포 & 어지러움 예방 응용 긴장법(Applied Tension) 키트 | DopaBrain",
    "metaDesc": "채혈이나 예방접종만 하면 식은땀이 나고 눈앞이 핑 돌 것 같나요? 일반 이완 대신 혈압을 안정시키는 응용 긴장법(Applied Tension)과 눕기 요청 멘트를 미리 준비하세요.",
    "kicker": "불안 완화 · 주사·채혈 공포 & 미주신경 어지러움 예방 키트",
    "heroTitle": "주사·채혈 공포 & 어지러움 예방 응용 긴장법(Applied Tension) 키트",
    "heroLead": "채혈이나 예방접종만 하면 식은땀이 나고 눈앞이 핑 돌 것 같나요? 일반 이완 대신 혈압을 안정시키는 응용 긴장법(Applied Tension)과 눕기 요청 멘트를 미리 준비하세요.",
    "chip1": "5가지 어지럼 신호",
    "chip2": "응용 긴장법",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 주사·채혈 시 나타나는 신체 반응 점검 (1 = 없음, 5 = 강함)",
    "step1Title": "채혈·주사 전후로 가장 신경 쓰이는 신체 반응은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 채혈 전 간호사·임상병리사에게 미리 전할 1줄 요청 (100% 로컬):",
    "ctaBtn": "내 채혈 안심 & 응용 긴장법 플랜 보기",
    "resultBadge": "2단계 • 어지러움 예방 응용 긴장법 & 요청 프로토콜",
    "noteTitle": "채혈 전 의료진 전달 1줄",
    "meterLabel": "채혈 안정 준비도",
    "scriptTitle": "채혈 전 편하게 말하는 눕기·시선 돌리기 멘트",
    "stepsTitle": "채혈 어지러움을 줄이는 임상 3단계",
    "stickyTitle": "신체형 불안 패턴을 무료 2분 불안 유형 테스트로 점검해 볼까요?",
    "stickySub": "무료 2분 불안 유형 테스트 바로가기",
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
    "title": "打针抽血恐惧与防晕血应用紧张法工具包 | DopaBrain",
    "heroTitle": "打针抽血恐惧与防晕血应用紧张法工具包",
    "heroLead": "本地准备防晕血腿部应用紧张法与提前告知护士平躺抽血的话术。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "注射・採血恐怖＆迷走神経めまい予防キット | DopaBrain",
    "heroTitle": "注射・採血恐怖＆迷走神経めまい予防キット",
    "heroLead": "採血時のふらつきを防ぐ応用緊張法と横になって受ける事前リクエストを準備。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Tensión Aplicada para Miedo a Agujas y Análisis | DopaBrain",
    "heroTitle": "Kit de Tensión Aplicada para Miedo a Agujas y Análisis",
    "heroLead": "Evita mareos al sacarte sangre con tensión aplicada, hidratación y petición de camilla.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Tensão Aplicada para Medo de Agulha e Exame de Sangue | DopaBrain",
    "heroTitle": "Kit de Tensão Aplicada para Medo de Agulha e Exame de Sangue",
    "heroLead": "Evite tonturas na coleta com técnica de tensão muscular, hidratação e pedido de maca.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Spritzen- & Blutabnahme-Angst Applied-Tension-Kit | DopaBrain",
    "heroTitle": "Spritzen- & Blutabnahme-Angst Applied-Tension-Kit",
    "heroLead": "Beuge Schwindel beim Blutabnehmen mit Muskelspannung, Wasser und Liege-Bitte vor.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Tension Appliquée Peur des Piqûres & Prises de Sang | DopaBrain",
    "heroTitle": "Kit Tension Appliquée Peur des Piqûres & Prises de Sang",
    "heroLead": "Prévenez les vertiges vasovagaux grâce à la tension appliquée et au script allongé.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор от страха уколов и обморока при сдаче крови | DopaBrain",
    "heroTitle": "Набор от страха уколов и обморока при сдаче крови",
    "heroLead": "Техника прикладного напряжения и фраза для медсестры против головокружения.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "सुई और ब्लड-ड्रॉ डर एप्लाइड टेंशन शांत किट | DopaBrain",
    "heroTitle": "सुई और ब्लड-ड्रॉ डर एप्लाइड टेंशन शांत किट",
    "heroLead": "ब्लड टेस्ट में चक्कर रोकने के लिए एप्लाइड टेंशन और नर्स अनुरोध स्क्रिप्ट तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Tenang Takut Jarum & Cegah Pusing Ambil Darah | DopaBrain",
    "heroTitle": "Kit Tenang Takut Jarum & Cegah Pusing Ambil Darah",
    "heroLead": "Siapkan teknik Applied Tension dan skrip minta berbaring untuk tes darah yang tenang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "İğne ve Kan Alma Korkusu Uygulamalı Gerilim Kiti | DopaBrain",
    "heroTitle": "İğne ve Kan Alma Korkusu Uygulamalı Gerilim Kiti",
    "heroLead": "Kan alımında baş dönmesini önlemek için kas germe tekniği ve uzanma talebi hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "dizzy_drop",
    "en": "Sudden Wooziness / Tunnel Vision — Feeling blood pressure dip or ears ringing at sight of needles",
    "ko": "갑작스런 어지러움·시야 좁아짐 — 바늘을 보거나 찌르는 순간 혈압이 떨어지는 느낌"
  },
  {
    "id": "fasting_dehydration",
    "en": "Dehydrated / Empty Stomach — Skipping water before blood draws (making veins harder to find)",
    "ko": "수분 부족·공복 상태 — 채혈 전 물까지 안 마셔서 혈관이 좁아지고 더 어지러움"
  },
  {
    "id": "watching_needle",
    "en": "Watching the Syringe — Staring directly at the vial or tray instead of looking away",
    "ko": "주사기 응시 — 시선을 돌리지 못하고 바늘과 채혈 튜브를 계속 쳐다봄"
  },
  {
    "id": "silent_embarrassment",
    "en": "Hiding Fainting History — Sitting upright silently instead of asking to lie down",
    "ko": "부끄러워 숨김 — 어지러운 편인데 말 못 하고 꼿꼿이 앉아 버팀"
  },
  {
    "id": "standing_too_fast",
    "en": "Jumping Up Immediately — Standing up 10 seconds after the bandage goes on",
    "ko": "직후 급기립 — 반창고 붙이자마자 10초 만에 벌떡 일어섬"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Vasovagal Response — Request Lying Flat + Practice Öst’s Applied Tension (Non-Draw Arm & Legs)",
    "koT": "어지러움 반응 강함 — 누워서 채혈 요청 + 비채혈쪽 다리·팔 응용 긴장법(Applied Tension)을 쓰세요",
    "enD": "Clinical research (Öst & Sterner) discovered that blood-needle fainting involves a sudden dip in blood pressure (vasovagal reflex). Gently tensing leg and core muscles for 10–15 seconds (Applied Tension—keeping the blood-draw arm completely relaxed!) helps keep blood pressure steady. Always inform your clinician.",
    "koD": "임상 심리학(Öst & Sterner)에 따르면 채혈 어지러움은 일시적 혈압 저하(미주신경 반사)와 관련 있습니다. 채혈하는 팔은 완전히 힘 빼고, 다리와 반대쪽 주먹만 10~15초 부드럽게 힘주었다 푸는 \"응용 긴장법\"과 누워서 받기가 큰 도움이 됩니다(반드시 의료진에게 알리세요).",
    "enS": "\"Hi! I sometimes feel lightheaded during blood draws—could I lie down for this, look away, and chat briefly while you go?\"",
    "koS": "\"안녕하세요! 제가 채혈할 때 어지러울 때가 있어서 혹시 누워서 시선을 돌리고 받아도 괜찮을까요?\"",
    "enL": [
      "Ask upfront to lie flat (zero embarrassment—phlebotomists LOVE knowing beforehand!) and drink extra plain water (allowed even for fasting labs unless told otherwise).",
      "Applied Tension: gently tense your leg, glute, and non-draw hand muscles for 10–15s until face feels warm, release to neutral 20s, repeat (keep the draw arm totally limp!).",
      "Rest 3–5 minutes afterward with juice or a snack before standing up slowly."
    ],
    "koL": [
      "시작 전 \"누워서 받을 수 있을까요?\"라고 편히 말씀하세요(의료진이 미리 알면 훨씬 안전하고 환영합니다). 금식 검사라도 보통 맹물은 충분히 마셔도 됩니다.",
      "응용 긴장법: 채혈하는 팔은 완전히 힘 빼고, 양쪽 다리·엉덩이·반대쪽 손만 10~15초 지긋이 힘주었다가 20초 풀기를 반복해 혈압을 유지하세요.",
      "끝난 뒤 바로 일어서지 말고 3~5분간 천천히 쉬며 수분·간식을 챙긴 뒤 일어나세요."
    ]
  },
  "mid": {
    "enT": "Mild Needle Nerves — Hydrate Well, Look Away & Chat During the 30-Second Draw",
    "koT": "가벼운 주사 긴장 — 충분한 물 섭취 + 시선 돌리기 + 짧은 대화만으로 훨씬 수월합니다",
    "enD": "Hydration plumps veins for a fast single-try draw, and chatting occupies attention cleanly.",
    "koD": "충분히 물을 마시면 혈관이 잘 잡혀 훨씬 빠르고 덜 아프게 끝납니다.",
    "enS": "\"Hydrate well, look away, keep my draw arm loose, and take 2 slow minutes after.\"",
    "koS": "\"물 충분히 마시기, 시선 돌리기, 채혈 팔 힘 빼기, 끝나고 2분 쉬기.\"",
    "enL": [
      "Drink 2 glasses of plain water 1 hour beforehand (confirm fasting rules).",
      "Look at a poster on the opposite wall and ask the nurse one casual question.",
      "Sit 2 minutes afterward before walking out."
    ],
    "koL": [
      "검사 1시간 전 맹물 2컵으로 수분을 보충하세요(금식 안내 확인).",
      "반대쪽 벽을 보며 간호사와 가벼운 한 마디를 나눠 보세요.",
      "채혈 직후 2분만 앉아 숨을 고른 뒤 이동하세요."
    ]
  },
  "high": {
    "enT": "Steady & Calm — Easy Routine Lab Visits",
    "koT": "안정적인 대처 — 정기 혈액검사와 접종을 편안하게 소화하고 있습니다",
    "enD": "Your hydration and calm routine make medical labs quick and stress-free.",
    "koD": "수분 보충과 차분한 태도로 정기 검진을 아주 매끄럽게 해내고 있습니다.",
    "enS": "\"A 30-second routine check protects my long-term health.\"",
    "koS": "\"30초의 가벼운 검진이 내 건강을 든든히 지켜 준다.\"",
    "enL": [
      "Keep hydrating well before lab mornings.",
      "Keep shoulders and draw arm relaxed.",
      "Treat yourself to a nice breakfast afterward."
    ],
    "koL": [
      "검사 전날·당일 수분 섭취 습관을 유지하세요.",
      "어깨와 팔 힘을 편안히 빼고 받으세요.",
      "검사 후 맛있는 아침 식사로 스스로를 챙기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_needle_blood_draw_v1";
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
      window.gtag('event', "needle_blood_draw_calm_complete", {
        tool_slug: "needle-blood-draw-faint-calm-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/needle-blood-draw-faint-calm-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "needle-blood-draw-faint-calm-kit",
        filename: 'dopabrain-needle-blood-draw-faint-calm-kit-card.png',
        badge: "CLINICAL CBT SKILL • NEEDLE & BLOOD-DRAW APPLIED TENSION KIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ec4899",
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
