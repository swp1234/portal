/* Dental & Medical Appointment Calm & Control Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Dental & Medical Appointment Calm & Control Kit | DopaBrain",
    "metaDesc": "Putting off dental cleanings or doctor visits because the waiting room makes your heart race? Audit 5 chair-anxiety triggers locally and prepare a simple hand-signal script that restores control.",
    "kicker": "ANXIETY RELIEF • DENTAL & MEDICAL VISIT CALM KIT",
    "heroTitle": "Dental & Medical Appointment Calm & Control Kit",
    "heroLead": "Putting off dental cleanings or doctor visits because the waiting room makes your heart race? Audit 5 chair-anxiety triggers locally and prepare a simple hand-signal script that restores control.",
    "chip1": "5 Visit Triggers",
    "chip2": "Hand-Signal Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR APPOINTMENT ANXIETY TRIGGERS (1 = CALM, 5 = HIGH FEAR)",
    "step1Title": "What part of dental or medical appointments spikes tension most?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One calm request I will share with the clinician at check-in (100% local):",
    "ctaBtn": "Build My Appointment Calm & Control Card",
    "resultBadge": "STEP 2 • YOUR APPOINTMENT CALM & CONTROL PROTOCOL",
    "noteTitle": "My Check-In Comfort Request",
    "meterLabel": "Appointment Calm Readiness",
    "scriptTitle": "Clear 2-Line Clinician Hand-Signal Script",
    "stepsTitle": "3 Evidence-Backed Ways to Stay Grounded in the Chair",
    "stickyTitle": "Want to map how your nervous system handles anticipatory worry?",
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
    "title": "치과·병원 진료 불안 진정 & 중단 신호 준비 키트 | DopaBrain",
    "metaDesc": "치과 의자나 병원 대기실만 떠올려도 심장이 뛰고 예약을 미루게 되나요? 5가지 진료 불안 요소를 점검하고 통제감을 되찾는 손신호·사전 요청 스크립트를 준비하세요.",
    "kicker": "불안 완화 · 치과·병원 진료 공포 진정 & 손신호 준비 키트",
    "heroTitle": "치과·병원 진료 불안 진정 & 중단 신호 준비 키트",
    "heroLead": "치과 의자나 병원 대기실만 떠올려도 심장이 뛰고 예약을 미루게 되나요? 5가지 진료 불안 요소를 점검하고 통제감을 되찾는 손신호·사전 요청 스크립트를 준비하세요.",
    "chip1": "5가지 진료 불안",
    "chip2": "손신호·요청 대본",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 병원·치과 방문 시 가장 긴장되는 요소 점검 (1 = 편안, 5 = 극도 긴장)",
    "step1Title": "치과·병원 진료에서 긴장을 가장 크게 올리는 순간은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 진료 시작 전 의료진에게 미리 부탁할 1줄 요청 (100% 로컬):",
    "ctaBtn": "내 진료실 안심·통제 카드 보기",
    "resultBadge": "2단계 • 진료실 통제감 회복 안심 프로토콜",
    "noteTitle": "진료 전 의료진 전달 요청 1줄",
    "meterLabel": "진료실 평온 준비도",
    "scriptTitle": "진료 전 편하게 말하는 2줄 손신호 요청 멘트",
    "stepsTitle": "진료 의자에서 몸과 마음을 진정시키는 3가지 방법",
    "stickyTitle": "예기 불안 패턴을 무료 2분 불안 유형 테스트로 확인해 볼까요?",
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
    "title": "看牙与就医焦虑安抚及控制感工具包 | DopaBrain",
    "heroTitle": "看牙与就医焦虑安抚及控制感工具包",
    "heroLead": "本地准备举手暂停暗号和医生沟通脚本，缓解候诊室与牙椅紧张。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "歯医者・病院の診察不安ケア＆合図スクリプト | DopaBrain",
    "heroTitle": "歯医者・病院の診察不安ケア＆合図スクリプト",
    "heroLead": "左手の休止合図やステップ説明リクエストを事前準備し、診察室の緊張を和らげます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Calma y Control para Citas Dentales y Médicas | DopaBrain",
    "heroTitle": "Kit de Calma y Control para Citas Dentales y Médicas",
    "heroLead": "Prepara una señal de pausa con tu médico y reduce la ansiedad en sala de espera.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Calma e Controle para Consultas Dentárias e Médicas | DopaBrain",
    "heroTitle": "Kit de Calma e Controle para Consultas Dentárias e Médicas",
    "heroLead": "Combine um sinal de pausa com o profissional e acalme o nervosismo antes da consulta.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Zahnarzt- & Arzttermin Ruhe- & Kontroll-Kit | DopaBrain",
    "heroTitle": "Zahnarzt- & Arzttermin Ruhe- & Kontroll-Kit",
    "heroLead": "Bereite ein klares Handzeichen-Skript und Atemanker für entspannte Termine vor.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Calme & Contrôle Rendez-vous Dentiste / Médecin | DopaBrain",
    "heroTitle": "Kit Calme & Contrôle Rendez-vous Dentiste / Médecin",
    "heroLead": "Préparez un signal main de pause et des repères sensoriels pour apaiser la consultation.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор спокойствия перед визитом к стоматологу и врачу | DopaBrain",
    "heroTitle": "Набор спокойствия перед визитом к стоматологу и врачу",
    "heroLead": "Подготовьте сигнал паузы рукой и спокойный скрипт для уверенности в кресле.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "डेंटल और मेडिकल विज़िट शांत नियंत्रण किट | DopaBrain",
    "heroTitle": "डेंटल और मेडिकल विज़िट शांत नियंत्रण किट",
    "heroLead": "क्लिनिक की घबराहट कम करने के लिए हैंड-सिग्नल स्क्रिप्ट और शांत तैयारी बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Tenang & Kontrol Kunjungan Dokter/Gigi | DopaBrain",
    "heroTitle": "Kit Tenang & Kontrol Kunjungan Dokter/Gigi",
    "heroLead": "Siapkan sinyal jeda tangan dan skrip tenang untuk meredakan cemas di ruang periksa.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Diş ve Doktor Randevusu Sakinlik ve Kontrol Kiti | DopaBrain",
    "heroTitle": "Diş ve Doktor Randevusu Sakinlik ve Kontrol Kiti",
    "heroLead": "Doktorla el durdurma işareti ve nefes planı hazırlayarak koltuk kaygısını azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "loss_of_control",
    "en": "Feeling Trapped in the Chair — Fear of not being able to speak or pause during procedures",
    "ko": "통제감 상실 공포 — 의자에 누워 말을 못 하거나 멈출 수 없을 것 같은 두려움"
  },
  {
    "id": "sensory_sounds",
    "en": "Drill Sounds & Bright Lights — Sensory overload from clinic smells, lights, or instruments",
    "ko": "소리·조명 과자극 — 치과 기계음·밝은 조명·소독약 냄새에 몸이 굳음"
  },
  {
    "id": "judgment_shame",
    "en": "Fear of Being Scolded — Worrying the dentist/doctor will judge me for waiting so long",
    "ko": "혼날까 봐 두려움 — 오래 미뤘다고 의료진에게 타박받을 것 같은 위축감"
  },
  {
    "id": "waiting_room_spike",
    "en": "Waiting-Room Anticipation — Heart pounding and worst-case imagining before my name is called",
    "ko": "대기실 예기 불안 — 이름 불리기 전부터 최악의 상상을 하며 심장이 뜀"
  },
  {
    "id": "pain_catastrophize",
    "en": "Surprise-Pain Fear — Tensing every muscle waiting for sudden sharp discomfort",
    "ko": "갑작스런 통증 경계 — 언제 아플지 몰라 온몸에 힘을 주고 숨을 참음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Clinic Anxiety — Pre-Agree a Left-Hand Pause Signal + Bring Earbuds & Sunglass Tint",
    "koT": "진료 불안 높음 — 왼손 중단 신호 사전 합의 + 이어폰·단계별 설명 요청이 핵심입니다",
    "enD": "Clinical dental-anxiety studies show the #1 fear reducer is perceived control: agreeing on a simple \"raise left hand = immediate pause\" cue and asking for \"tell-show-do\" narration drops chair distress dramatically.",
    "koD": "치과 불안 임상 연구에서 긴장을 가장 크게 낮추는 요소는 \"통제감\"입니다. 시작 전 \"왼손을 들면 바로 잠깐 멈춰 주세요\"와 \"다음 단계를 미리 말씀해 주세요\"만 합의해도 공포가 절반 이하로 줄어듭니다.",
    "enS": "\"Hi, I get pretty nervous at appointments—would you mind briefly telling me each step before you do it, and pausing for a breath if I raise my left hand?\"",
    "koS": "\"안녕하세요, 제가 진료를 많이 긴장하는 편이라 다음 단계를 짧게 먼저 알려 주시고, 제가 왼손을 들면 잠깐 숨 돌리게 멈춰 주실 수 있을까요?\"",
    "enL": [
      "Agree on the Left-Hand Pause Signal BEFORE reclining so your nervous system knows you have brakes.",
      "Bring earbuds/podcast or calming audio (ask if one earbud is okay) and request sunglasses against bright overhead lamps.",
      "In the chair, unclench your toes and drop your shoulders on every slow nasal exhale."
    ],
    "koL": [
      "의자가 젖혀지기 전에 \"왼손 들기 = 즉시 잠깐 멈춤\" 신호를 미리 합의해 브레이크를 확보하세요.",
      "가능하면 한쪽 이어폰으로 잔잔한 오디오를 듣고, 눈부신 조명이 부담되면 선글라스·눈가림을 요청하세요.",
      "진료 중에는 발가락 힘을 풀고 코로 천천히 내쉴 때마다 어깨를 툭 떨어뜨리세요."
    ]
  },
  "mid": {
    "enT": "Manageable Jitters — Use Tell-Show-Do Narration & Waiting-Room Breathing",
    "koT": "가벼운 긴장 — 단계별 설명 요청과 대기실 천천히 내쉬기만으로 충분합니다",
    "enD": "A brief heads-up to your clinician and a calm waiting-room anchor will make the visit smooth.",
    "koD": "의료진에게 미리 한 줄만 전해 두고 대기실에서 호흡을 고르면 훨씬 수월하게 지나갑니다.",
    "enS": "\"I have a pause signal, I can breathe slowly, and showing up is real self-care.\"",
    "koS": "\"언제든 멈춤 신호를 보낼 수 있고, 오늘 방문 자체가 내 몸을 지키는 용기다.\"",
    "enL": [
      "Book morning slots when waiting rooms run closest to schedule.",
      "Skip extra caffeine 3 hours before the visit.",
      "Plan a gentle small reward right afterward."
    ],
    "koL": [
      "대기 지연이 적은 오전 시간대 예약을 추천합니다.",
      "진료 3시간 전에는 심박을 올리는 카페인을 줄여 보세요.",
      "진료 직후 나를 위한 작은 보상을 미리 정해 두세요."
    ]
  },
  "high": {
    "enT": "Calm & Prepared — Steady Routine Preventive Care",
    "koT": "차분한 준비 완료 — 건강한 정기 검진 리듬을 잘 지키고 있습니다",
    "enD": "You have strong coping strategies for keeping preventive healthcare calm and stress-free.",
    "koD": "정기 검진과 진료를 차분하게 소화할 수 있는 안정적인 대처 전략을 갖추고 있습니다.",
    "enS": "\"Small routine checkups prevent big surprises.\"",
    "koS": "\"가벼운 정기 점검이 큰 걱정을 미리 막아 준다.\"",
    "enL": [
      "Book your next routine checkup before leaving the front desk.",
      "Keep shoulders relaxed while waiting.",
      "Celebrate prioritizing preventive health."
    ],
    "koL": [
      "접수처에서 다음 정기 검진 일정을 바로 잡아 두세요.",
      "대기 중 어깨와 턱 힘을 가볍게 풀어 주세요.",
      "건강을 미리 챙긴 스스로를 칭찬해 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_dental_medical_calm_v1";
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
      window.gtag('event', "dental_medical_calm_complete", {
        tool_slug: "dental-medical-visit-calm-kit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/dental-medical-visit-calm-kit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "dental-medical-visit-calm-kit",
        filename: 'dopabrain-dental-medical-visit-calm-kit-card.png',
        badge: "ANXIETY RELIEF • DENTAL & MEDICAL VISIT CALM KIT",
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
