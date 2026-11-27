/* Phone-Call Anxiety & 2-Minute Opening Script Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Phone-Call Anxiety & 2-Minute Opening Script Builder | DopaBrain",
    "metaDesc": "Putting off a 3-minute phone call for three weeks because you dread freezing mid-sentence? Audit 5 call-anxiety blocks locally and build a crisp 2-line opening card so you can dial calmly.",
    "kicker": "COMMUNICATION CALM • PHONE-CALL ANXIETY & OPENING SCRIPT",
    "heroTitle": "Phone-Call Anxiety & 2-Minute Opening Script Builder",
    "heroLead": "Putting off a 3-minute phone call for three weeks because you dread freezing mid-sentence? Audit 5 call-anxiety blocks locally and build a crisp 2-line opening card so you can dial calmly.",
    "chip1": "5 Call Blocks",
    "chip2": "2-Line Opener",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PHONE-CALL FRICTION (1 = EASY, 5 = AVOIDING FOR DAYS)",
    "step1Title": "What makes pressing the green dial button feel hardest?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The 1 exact thing I need from this call (name, account #, or question — 100% local):",
    "ctaBtn": "Build My 2-Minute Call Opener Card",
    "resultBadge": "STEP 2 • YOUR CALM DIALING & OPENING-LINE CARD",
    "noteTitle": "My 1-Line Call Goal (Read Directly)",
    "meterLabel": "Dialing Confidence",
    "scriptTitle": "Exact First 10 Seconds Script",
    "stepsTitle": "3 Simple Tricks That Dissolve Phone-Call Dread Fast",
    "stickyTitle": "Feeling lingering social tension in your body after tough tasks?",
    "stickySub": "Check your nervous-system stress in 2 minutes",
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
    "title": "전화 공포(콜포비아) 완화 & 2분 첫마디·용건 카드 빌더 | DopaBrain",
    "metaDesc": "3분이면 끝날 예약·문의 전화를 말문이 막힐까 봐 3주째 미루고 있나요? 5가지 콜포비아 장벽을 점검하고 보고 그대로 읽는 2줄 첫마디 카드로 편안하게 통화를 시작하세요.",
    "kicker": "소통 평온 · 전화 공포(콜포비아) 2분 첫마디 빌더",
    "heroTitle": "전화 공포(콜포비아) 완화 & 2분 첫마디·용건 카드 빌더",
    "heroLead": "3분이면 끝날 예약·문의 전화를 말문이 막힐까 봐 3주째 미루고 있나요? 5가지 콜포비아 장벽을 점검하고 보고 그대로 읽는 2줄 첫마디 카드로 편안하게 통화를 시작하세요.",
    "chip1": "5가지 통화 장벽",
    "chip2": "2줄 첫마디 카드",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 전화 걸기 전 막히는 지점 점검 (1 = 편함, 5 = 며칠째 회피)",
    "step1Title": "통화 버튼을 누르기 직전 가장 긴장되는 순간은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 통화에서 얻을 딱 1가지 용건 (예약일·문의번호 등 — 100% 로컬):",
    "ctaBtn": "내 2분 통화 첫마디 카드 만들기",
    "resultBadge": "2단계 • 차분한 통화 시작 & 첫마디 카드",
    "noteTitle": "보고 읽는 핵심 용건 1줄",
    "meterLabel": "통화 착수 자신감",
    "scriptTitle": "연결 직후 그대로 읽는 첫 10초 대본",
    "stepsTitle": "전화 공포를 빠르게 녹이는 3가지 실전 팁",
    "stickyTitle": "미뤄둔 연락이나 대인 업무로 몸에 긴장이 남아 있나요?",
    "stickySub": "무료 2분 스트레스 체크로 긴장도 점검",
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
    "title": "打电话焦虑缓解与2分钟开场白脚本卡 | DopaBrain",
    "heroTitle": "打电话焦虑缓解与2分钟开场白脚本卡",
    "heroLead": "告别拖延3周不敢拨号，本地生成可直接照读的10秒开场卡片。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "電話恐怖症（コールフォビア）緩和＆2分話し出しカード | DopaBrain",
    "heroTitle": "電話恐怖症（コールフォビア）緩和＆2分話し出しカード",
    "heroLead": "電話前の緊張を整理し、そのまま読める最初の10秒台本を作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Guion de 2 Minutos contra la Ansiedad de Llamar por Teléfono | DopaBrain",
    "heroTitle": "Guion de 2 Minutos contra la Ansiedad de Llamar por Teléfono",
    "heroLead": "Supera el bloqueo al marcar con una tarjeta de apertura clara de 10 segundos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Roteiro de 2 Minutos contra Ansiedade de Ligar | DopaBrain",
    "heroTitle": "Roteiro de 2 Minutos contra Ansiedade de Ligar",
    "heroLead": "Vença o travamento antes de discar com um cartão de abertura pronto.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Telefonangst-Starter & 2-Minuten-Einstiegs-Skript | DopaBrain",
    "heroTitle": "Telefonangst-Starter & 2-Minuten-Einstiegs-Skript",
    "heroLead": "Überwinde Anruf-Aufschieben mit einer klaren 10-Sekunden-Einstiegskarte.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Starter Anti-Anxiété Téléphonique & Phrase d’Ouverture | DopaBrain",
    "heroTitle": "Starter Anti-Anxiété Téléphonique & Phrase d’Ouverture",
    "heroLead": "Dépassez la peur d’appeler grâce à une fiche d’ouverture prête en 2 minutes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Помощник при страхе звонков и скрипт первых 10 секунд | DopaBrain",
    "heroTitle": "Помощник при страхе звонков и скрипт первых 10 секунд",
    "heroLead": "Преодолейте откладывание звонков с готовой карточкой спокойного начала.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "फ़ोन कॉल एंग्ज़ायटी और 2-मिनट ओपनिंग स्क्रिप्ट | DopaBrain",
    "heroTitle": "फ़ोन कॉल एंग्ज़ायटी और 2-मिनट ओपनिंग स्क्रिप्ट",
    "heroLead": "कॉल करने की झिझक हटाएं और सीधे पढ़ने वाला 10-सेकंड का शुरुआती कार्ड बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pembuat Skrip Pembuka 2 Menit Anti Cemas Telepon | DopaBrain",
    "heroTitle": "Pembuat Skrip Pembuka 2 Menit Anti Cemas Telepon",
    "heroLead": "Atasi gugup menelepon dengan kartu kalimat pembuka 10 detik siap baca.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Telefon Görüşmesi Kaygısı ve 2 Dk Açılış Kartı | DopaBrain",
    "heroTitle": "Telefon Görüşmesi Kaygısı ve 2 Dk Açılış Kartı",
    "heroLead": "Arama çekincesini 10 saniyelik hazır açılış cümlesi ve sakin adımlarla aşın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "blank_first_sentence",
    "en": "First-Sentence Freeze — Worrying I’ll stumble over \"Hi, I’m calling about...\"",
    "ko": "첫 문장 정지 — \"안녕하세요, 다름이 아니라...\"부터 꼬일까 봐 걱정됨"
  },
  {
    "id": "no_visual_cues",
    "en": "Missing Facial Cues — Feeling tense without seeing the other person’s expression",
    "ko": "표정 부재 불안 — 상대 표정이 안 보여 반응을 알기 어려워 긴장됨"
  },
  {
    "id": "unexpected_question",
    "en": "Curveball Fear — Dreading a question I don’t immediately have the answer to",
    "ko": "돌발 질문 두려움 — 예상 못 한 번호나 일정을 물으면 당황할까 봐 두려움"
  },
  {
    "id": "overhead_listeners",
    "en": "Being Overheard — Feeling self-conscious talking when coworkers or roommates are nearby",
    "ko": "주변 시선 의식 — 사무실이나 가족 옆에서 통화 목소리가 들리는 게 불편함"
  },
  {
    "id": "avoidance_snowball",
    "en": "3-Week Snowball — Delaying so long that calling now feels even heavier",
    "ko": "회피 눈덩이 — 오래 미뤄둔 탓에 이제 와서 걸기가 더 부담스러워짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Call Dread — Stand Up, Read Your First 2 Lines Verbatim & Dial on 3-2-1",
    "koT": "콜포비아 강함 — 조용한 자리에서 서서 2줄 첫마디를 보고 읽으며 3-2-1에 바로 누르세요",
    "enD": "CBT exposure principles show phone avoidance grows solely from anticipatory uncertainty—not the actual 90-second call. Reading a written opening line while standing up steadies your diaphragm and removes cognitive load.",
    "koD": "인지행동치료(CBT) 원리에 따르면 전화 공포는 실제 90초 통화가 아니라 \"걸기 전의 불확실성\"에서 커집니다. 첫 2줄을 미리 적고 서서 통화하면 호흡이 안정되고 1분 만에 해방감을 느낍니다.",
    "enS": "\"Hi, my name is [Name]. I’m calling to [1-line goal]—could you point me in the right direction? (And if asked something unexpected: Let me check and call right back, thank you!)\"",
    "koS": "\"안녕하세요, [이름]입니다. [핵심 용건 1줄] 문의드리려고 연락드렸습니다. 확인 부탁드려도 될까요? (예상 밖 질문 시: 잠깐 확인 후 다시 연락드리겠습니다!)\"",
    "enL": [
      "Step into a private hallway or room and stand up while dialing—standing opens your breathing.",
      "Keep your 1-line goal, calendar, and reference number open right in front of you.",
      "Count 3-2-1 and tap Dial before your brain talks you out of it; celebrate the instant relief afterward."
    ],
    "koL": [
      "다른 사람 시선이 없는 조용한 곳으로 이동해 일어선 채로 통화 버튼을 누르세요.",
      "핵심 용건 1줄·달력·예약번호를 눈앞 화면에 미리 띄워 두세요.",
      "고민이 길어지기 전에 3-2-1 세고 바로 누르세요. 끊는 순간의 시원함이 다음 통화를 쉽게 만듭니다."
    ]
  },
  "mid": {
    "enT": "Mild Call Friction — Batch 2 Quick Calls Into One 10-Minute Slot",
    "koT": "가벼운 통화 부담 — 미뤄둔 전화 2건을 10분 한 타임에 몰아서 끝내세요",
    "enD": "Once you dial Call #1, momentum carries you effortlessly through Call #2.",
    "koD": "첫 통화 버튼만 누르면 탄력이 붙어 두 번째 통화는 훨씬 가볍게 끝납니다.",
    "enS": "\"Write 2 bullets, stand up, clear both calls in 10 minutes flat.\"",
    "koS": "\"메모 2줄, 서서 통화, 10분 만에 2건 깔끔히 끝내기.\"",
    "enL": [
      "Write 2 bullet points before dialing so nothing gets skipped.",
      "Use speakerphone or earbuds so your hands stay free to jot notes.",
      "Reward yourself with coffee or a stretch right after hanging up."
    ],
    "koL": [
      "통화 전 확인할 항목 2가지만 메모해 빠뜨림을 막으세요.",
      "이어폰을 끼고 손을 자유롭게 두면 메모하기 훨씬 편합니다.",
      "전화를 끊자마자 작은 휴식으로 깔끔한 성취감을 챙기세요."
    ]
  },
  "high": {
    "enT": "Comfortable Communicator — Clear & Steady Phone Presence",
    "koT": "편안한 통화 자신감 — 명료하고 차분한 소통 역량입니다",
    "enD": "You handle live voice calls smoothly. Keep using concise opening lines to save everyone time.",
    "koD": "실시간 음성 통화를 여유롭게 소화하고 계십니다. 지금의 간결한 소통 습관을 유지하세요.",
    "enS": "\"Clear opener, kind tone, fast resolution.\"",
    "koS": "\"명확한 첫마디, 따뜻한 톤, 빠른 해결.\"",
    "enL": [
      "Confirm any dates or numbers briefly before hanging up.",
      "Keep a pen nearby for confirmation codes.",
      "Enjoy solving in 2 minutes what 10 emails would take."
    ],
    "koL": [
      "통화 마무리 전 날짜·시간을 한 번만 복창해 정확도를 높이세요.",
      "접수번호를 적을 메모지를 곁에 두세요.",
      "메일 10통 걸릴 일을 2분 만에 해결하는 효율을 누리세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_difficult_call_starter_v1";
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
      window.gtag('event', "difficult_call_starter_complete", {
        tool_slug: "difficult-phone-call-starter",
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
      var shareUrl = "https://dopabrain.com/portal/tools/difficult-phone-call-starter.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "difficult-phone-call-starter",
        filename: 'dopabrain-difficult-phone-call-starter-card.png',
        badge: "COMMUNICATION CALM • PHONE-CALL ANXIETY & OPENING SCRIPT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
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
