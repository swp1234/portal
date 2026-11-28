/* Phone Call & Voicemail Dread 3-Line Starter Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Phone Call & Voicemail Dread 3-Line Starter Kit | DopaBrain",
    "metaDesc": "Putting off a 2-minute doctor, bank, or client phone call for three weeks? Audit 5 call-anxiety loops locally and build a 3-line opening + voicemail backup script.",
    "kicker": "SOCIAL ANXIETY • PHONE CALL & VOICEMAIL DREAD STARTER",
    "heroTitle": "Phone Call & Voicemail Dread 3-Line Starter Kit",
    "heroLead": "Putting off a 2-minute doctor, bank, or client phone call for three weeks? Audit 5 call-anxiety loops locally and build a 3-line opening + voicemail backup script.",
    "chip1": "5 Call Loops",
    "chip2": "3-Line Opener + Voicemail",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PHONE-CALL DREAD PATTERNS (1 = EASY, 5 = AVOIDING)",
    "step1Title": "What makes pressing the green Call button feel so heavy?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The ONE quick call I’ve been avoiding + my 1-sentence goal (100% local):",
    "ctaBtn": "Build My 3-Line Call & Voicemail Script",
    "resultBadge": "STEP 2 • YOUR ZERO-FREEZE 3-LINE PHONE SCRIPT",
    "noteTitle": "My 1-Call Target Today",
    "meterLabel": "Call Readiness Score",
    "scriptTitle": "Exact 3-Line Opening + Calm Voicemail Template",
    "stepsTitle": "3 Tricks That Turn Phone Dread Into a 90-Second Relief",
    "stickyTitle": "Curious how social & anticipatory anxiety show up across your day?",
    "stickySub": "Take the free 2-Min Anxiety Type Test",
    "stickyBtn": "Anxiety Type Test →",
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
    "title": "전화 공포증(콜 포비아) 완화 & 3줄 통화 스크립트 키트 | DopaBrain",
    "metaDesc": "2분이면 끝날 병원·은행·고객 전화를 3주째 미루고 있나요? 5가지 통화 공포 패턴을 점검하고 3줄 첫마디·음성메시지 백업 메모로 지금 바로 걸어 보세요.",
    "kicker": "통화 불안 케어 · 전화 공포증(콜 포비아) & 3줄 통화 메모 키트",
    "heroTitle": "전화 공포증(콜 포비아) 완화 & 3줄 통화 스크립트 키트",
    "heroLead": "2분이면 끝날 병원·은행·고객 전화를 3주째 미루고 있나요? 5가지 통화 공포 패턴을 점검하고 3줄 첫마디·음성메시지 백업 메모로 지금 바로 걸어 보세요.",
    "chip1": "5가지 통화 불안",
    "chip2": "3줄 첫마디·메모",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 전화 통화 불안·회피 패턴 점검 (1 = 편함, 5 = 극도 회피)",
    "step1Title": "초록색 통화 버튼을 누르기 전에 가장 망설여지는 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 미뤄 둔 전화 1통 + 통화로 해결할 목적 1줄 (100% 로컬):",
    "ctaBtn": "내 3줄 통화 첫마디 & 안심 메모 보기",
    "resultBadge": "2단계 • 말문이 막히지 않는 3줄 통화 스크립트",
    "noteTitle": "오늘 끝낼 전화 1통",
    "meterLabel": "통화 실행 준비도",
    "scriptTitle": "그대로 읽으면 되는 3줄 첫마디 & 부재중 메모",
    "stepsTitle": "전화 공포를 90초 만에 후련함으로 바꾸는 3가지 요령",
    "stickyTitle": "일상 속 사회적·예기 불안이 어떤 패턴으로 나타나는지 알아볼까요?",
    "stickySub": "무료 2분 불안 유형 테스트 바로가기",
    "stickyBtn": "불안 유형 테스트 →",
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
    "title": "电话恐惧与语音信箱3行开场工具包 | DopaBrain",
    "heroTitle": "电话恐惧与语音信箱3行开场工具包",
    "heroLead": "用3行开场纸条、停顿缓冲语与留言模板，90秒搞定拖延数周的电话。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "電話恐怖（コールフォビア）緩和3行スタートキット | DopaBrain",
    "heroTitle": "電話恐怖（コールフォビア）緩和3行スタートキット",
    "heroLead": "先延ばししがちな2分の電話を3行の冒頭メモと留守電テンプレで楽に済ませます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de 3 Líneas contra el Miedo a Llamar por Teléfono | DopaBrain",
    "heroTitle": "Kit de 3 Líneas contra el Miedo a Llamar por Teléfono",
    "heroLead": "Supera la ansiedad telefónica con guion de 3 líneas, frase de pausa y buzón de voz.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de 3 Linhas contra Ansiedade de Ligar no Telefone | DopaBrain",
    "heroTitle": "Kit de 3 Linhas contra Ansiedade de Ligar no Telefone",
    "heroLead": "Vença o medo de fazer ligações rápidas com roteiro de 3 linhas e recado pronto.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Telefonangst- & Voicemail-3-Zeilen-Starter-Kit | DopaBrain",
    "heroTitle": "Telefonangst- & Voicemail-3-Zeilen-Starter-Kit",
    "heroLead": "Erledige aufgeschobene 2-Minuten-Anrufe entspannt mit 3-Zeilen-Notiz und Pausen-Satz.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit 3 Lignes contre la Phobie du Téléphone | DopaBrain",
    "heroTitle": "Kit 3 Lignes contre la Phobie du Téléphone",
    "heroLead": "Passez enfin vos appels repoussés grâce à une accroche en 3 lignes et phrase tampon.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор из 3 строк против страха телефонных звонков | DopaBrain",
    "heroTitle": "Набор из 3 строк против страха телефонных звонков",
    "heroLead": "Сделайте отложенный 2-минутный звонок спокойно с подсказкой из 3 строк на стикере.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "फ़ोन कॉल और वॉइसमेल घबराहट 3-लाइन स्टार्टर किट | DopaBrain",
    "heroTitle": "फ़ोन कॉल और वॉइसमेल घबराहट 3-लाइन स्टार्टर किट",
    "heroLead": "3-लाइन ओपनिंग नोट और शांत पॉज़ वाक्य के साथ टाली हुई कॉल 2 मिनट में निपटाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Pemula 3 Baris Atasi Takut Menelepon | DopaBrain",
    "heroTitle": "Kit Pemula 3 Baris Atasi Takut Menelepon",
    "heroLead": "Selesaikan telepon 2 menit yang tertunda dengan catatan pembuka 3 baris dan jeda tenang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Telefon Görüşmesi Kaygısı 3 Satırlık Başlangıç Kiti | DopaBrain",
    "heroTitle": "Telefon Görüşmesi Kaygısı 3 Satırlık Başlangıç Kiti",
    "heroLead": "Ertelenen 2 dakikalık aramaları 3 satırlık açılış notuyla rahatça tamamlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "mind_blank_fear",
    "en": "Mind-Blank Fear — Worrying I’ll stumble over my name or forget why I called",
    "ko": "머릿속 백지 공포 — 상대가 받자마자 말이 꼬이거나 용건을 잊을까 봐 두려움"
  },
  {
    "id": "surprise_question_dread",
    "en": "Unscripted Curveballs — Fearing they’ll ask for an account number or date I don’t have ready",
    "ko": "돌발 질문 걱정 — 준비 안 된 예약 번호나 날짜를 갑자기 물어볼까 봐 긴장함"
  },
  {
    "id": "bothering_stranger",
    "en": "\"I’m Bothering Them\" Guilt — Feeling intrusive calling someone whose job is to answer",
    "ko": "민폐 죄책감 — 응대가 업무인 곳에 전화하면서도 방해하는 기분이 듦"
  },
  {
    "id": "voicemail_freeze",
    "en": "Voicemail Beep Panic — Hanging up awkwardly the moment an automated greeting plays",
    "ko": "음성사서함 당황 — 자동응답 삐 소리가 나면 당황해서 그냥 끊어 버림"
  },
  {
    "id": "weeks_of_micro_dread",
    "en": "3-Week Tax for a 2-Min Call — Carrying daily guilt far heavier than the call itself",
    "ko": "2분 전화를 3주간 걱정 — 실제 통화보다 미루는 동안의 스트레스가 10배 큼"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Call Avoidance — Write 3 Bullets on Paper, Stand Up & Dial on a 3-2-1 Count",
    "koT": "통화 회피 높음 — 종이에 3줄 메모를 적고 일어서서 3-2-1 카운트 후 바로 걸어 보세요",
    "enD": "Phone anxiety thrives on lack of visual cues and fear of blanking out. Writing your exact first sentence, key ID/date, and a calm pause phrase (\"Let me check that for one second!\") on a sticky note eliminates 90% of the freeze.",
    "koD": "전화 공포는 표정이 보이지 않는 상태에서 말이 막힐까 두려워 생깁니다. 첫 문장·필요한 번호·여유 문구(\"잠시만 확인해 볼게요\") 3줄을 메모지에 적어 두고 읽으면 말 막힘의 90%가 사라집니다.",
    "enS": "\"Hi, my name is [Name]—I’m calling about [1-line goal]. Could you point me to the right person or help me check [Detail]?\" (Pause phrase: \"Great, give me two seconds to jot that down.\")",
    "koS": "\"안녕하세요, [이름]입니다. [한 줄 용건] 때문에 연락드렸는데요, 확인 부탁드릴 수 있을까요?\" (여유 멘트: \"네, 잠시만요—메모하면서 들을게요!\")",
    "enL": [
      "Jot 3 items before dialing: 1) Your opening line · 2) Account/date info · 3) Pen in hand.",
      "Stand up or pace slowly while talking—upright posture opens your diaphragm and steadies your voice.",
      "Count \"3-2-1\" and tap Call before your brain negotiates another delay; reward yourself immediately after hanging up."
    ],
    "koL": [
      "걸기 전 메모지에 ①첫 문장 ②예약/계좌 정보 ③펜 3가지만 미리 준비하세요.",
      "앉아서 움츠리기보다 서서 천천히 걸으며 통화하면 호흡과 목소리가 훨씬 편안해집니다.",
      "\"3-2-1\"을 세고 생각이 끼어들기 전에 누른 뒤, 끊자마자 시원한 물 한 잔으로 보상해 주세요."
    ]
  },
  "mid": {
    "enT": "Mild Phone Nerves — Prep One Sticky Note & Batch 2 Calls Together",
    "koT": "가벼운 통화 긴장 — 포스트잇 1장 메모로 2통을 한 번에 처리하세요",
    "enD": "Once call #1 ends smoothly, momentum carries you straight through call #2.",
    "koD": "첫 통화 1통만 넘기면 긴장이 풀려 두 번째 통화는 훨씬 가볍게 끝납니다.",
    "enS": "\"Two minutes of awkwardness beats two weeks of nagging guilt.\"",
    "koS": "\"2분의 어색함이 2주간의 찝찝한 죄책감을 끝낸다.\"",
    "enL": [
      "Write your callback number at the top for voicemails.",
      "Make routine calls right after lunch when energy steadies.",
      "Remember: a slight stumble sounds completely human."
    ],
    "koL": [
      "부재중 대비 회신 번호를 메모 맨 위에 적어 두세요.",
      "점심 직후 에너지가 안정될 때 몰아서 처리해 보세요.",
      "말이 살짝 더듬어져도 상대는 전혀 신경 쓰지 않습니다."
    ]
  },
  "high": {
    "enT": "Confident Caller — Smooth, Low-Friction Phone Habits",
    "koT": "여유로운 통화 감각 — 불필요한 미루기 없이 깔끔히 해결합니다",
    "enD": "You knock out voice admin quickly without letting it pile up.",
    "koD": "전화 업무를 미루지 않고 가볍게 처리하는 좋은 리듬을 갖고 있습니다.",
    "enS": "\"Quick clarity beats endless back-and-forth threads.\"",
    "koS": "\"짧은 통화 한 통이 10통의 문자를 대신한다.\"",
    "enL": [
      "Keep jotting key confirmation numbers during calls.",
      "Batch admin calls into one 15-min weekly slot.",
      "Enjoy the instant relief of closed loops."
    ],
    "koL": [
      "통화 중 접수 번호·담당자 이름을 짧게 적는 습관을 유지하세요.",
      "주 1회 15분 행정 통화 슬롯을 활용해 보세요.",
      "미완료 항목이 사라지는 개운함을 만끽하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_phone_dread_v1";
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
      window.gtag('event', "phone_call_dread_complete", {
        tool_slug: "phone-call-voicemail-dread-reset",
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
      var shareUrl = "https://dopabrain.com/portal/tools/phone-call-voicemail-dread-reset.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "phone-call-voicemail-dread-reset",
        filename: 'dopabrain-phone-call-voicemail-dread-reset-card.png',
        badge: "SOCIAL ANXIETY • PHONE CALL & VOICEMAIL DREAD STARTER",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#f59e0b",
        accent2: "#ef4444"
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
