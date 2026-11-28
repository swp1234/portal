/* Weekend & After-Hours Work Email Boundary Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Weekend & After-Hours Work Email Boundary Kit | DopaBrain",
    "metaDesc": "Checking work Slack \"just for 30 seconds\" on Saturday morning and ruining the next 6 hours? Audit 5 off-hours leak habits locally and install a clean Delay-Send + Monday-9AM boundary.",
    "kicker": "WORK RECOVERY • WEEKEND & AFTER-HOURS WORK EMAIL BOUNDARY KIT",
    "heroTitle": "Weekend & After-Hours Work Email Boundary Kit",
    "heroLead": "Checking work Slack \"just for 30 seconds\" on Saturday morning and ruining the next 6 hours? Audit 5 off-hours leak habits locally and install a clean Delay-Send + Monday-9AM boundary.",
    "chip1": "5 Off-Hours Leaks",
    "chip2": "Schedule-Send Rule",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR OFF-HOURS WORK BLEED (1 = UNPLUGGED, 5 = ALWAYS ON)",
    "step1Title": "How does work keep sneaking into your evenings and weekends?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One concrete notification rule I will switch on before Friday 6 PM (100% local):",
    "ctaBtn": "Build My Weekend Unplug Protocol",
    "resultBadge": "STEP 2 • YOUR CLEAN RIGHT-TO-DISCONNECT PROTOCOL",
    "noteTitle": "My Friday 6 PM Switch",
    "meterLabel": "True Off-Hours Recovery",
    "scriptTitle": "Polite Expectation-Setting Signature / Status Line",
    "stepsTitle": "3 Switches That Reclaim 48 Hours of Genuine Mental Rest",
    "stickyTitle": "Is always-on weekend alertness draining your weekday energy?",
    "stickySub": "Take the free 2-Min Burnout Check",
    "stickyBtn": "Burnout Test →",
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
    "title": "주말·퇴근 후 업무 메일·슬랙 차단 & 진짜 휴식 복원 키트 | DopaBrain",
    "metaDesc": "토요일 아침 \"딱 30초만\" 업무 메일을 봤다가 하루 기분을 다 망치시나요? 5가지 퇴근 후 업무 침투 습관을 점검하고 예약 발송·알림 차단 프로토콜을 세팅하세요.",
    "kicker": "주말 회복 · 퇴근·주말 업무 메일·슬랙 알림 차단 & 복원 플래너",
    "heroTitle": "주말·퇴근 후 업무 메일·슬랙 차단 & 진짜 휴식 복원 키트",
    "heroLead": "토요일 아침 \"딱 30초만\" 업무 메일을 봤다가 하루 기분을 다 망치시나요? 5가지 퇴근 후 업무 침투 습관을 점검하고 예약 발송·알림 차단 프로토콜을 세팅하세요.",
    "chip1": "5가지 주말 침투",
    "chip2": "예약 발송 규칙",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 퇴근·주말 업무 침투 습관 점검 (1 = 완전 분리, 5 = 상시 대기)",
    "step1Title": "퇴근 후와 주말 휴식에 업무가 스며드는 가장 큰 경로는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주 금요일 오후 6시 전에 설정할 알림 차단 규칙 1가지 (100% 로컬):",
    "ctaBtn": "내 주말 완전 분리 프로토콜 보기",
    "resultBadge": "2단계 • 뇌를 진짜로 쉬게 하는 연결 차단 프로토콜",
    "noteTitle": "금요일 6시 알림 차단 스위치",
    "meterLabel": "주말 순수 회복 지수",
    "scriptTitle": "상대에게 부담 없이 주말 응답 기준을 알리는 1줄",
    "stepsTitle": "48시간 진짜 휴식을 되찾는 3가지 물리적 스위치",
    "stickyTitle": "주말 상시 대기 긴장이 평일 에너지까지 갉아먹고 있는지 확인해 볼까요?",
    "stickySub": "무료 2분 번아웃 테스트 바로가기",
    "stickyBtn": "번아웃 테스트 →",
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
    "title": "周末与下班后工作邮件边界与断联工具包 | DopaBrain",
    "heroTitle": "周末与下班后工作邮件边界与断联工具包",
    "heroLead": "用自动免打扰、隐藏红点与周一预约发送，找回真正不受打扰的周末休息。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "休日・退勤後の仕事メール遮断＆休息回復キット | DopaBrain",
    "heroTitle": "休日・退勤後の仕事メール遮断＆休息回復キット",
    "heroLead": "土日のチャット確認癖を通知スケジュールと月曜予約送信で穏やかに手放します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Límites de Correo Laboral en Fines de Semana | DopaBrain",
    "heroTitle": "Kit de Límites de Correo Laboral en Fines de Semana",
    "heroLead": "Frena los vistazos al chat el sábado con modo silencio y envíos programados al lunes.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Limites de E-mail de Trabalho no Fim de Semana | DopaBrain",
    "heroTitle": "Kit de Limites de E-mail de Trabalho no Fim de Semana",
    "heroLead": "Pare de checar o Slack no sábado usando silêncio programado e envio agendado para segunda.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Wochenend- & Feierabend-Mail-Grenzen-Kit | DopaBrain",
    "heroTitle": "Wochenend- & Feierabend-Mail-Grenzen-Kit",
    "heroLead": "Stoppe Samstags-Slack-Blicke mit Ruhezeiten, versteckten Badges und Montag-Versandplanung.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Droit à la Déconnexion & E-mails du Week-end | DopaBrain",
    "heroTitle": "Kit Droit à la Déconnexion & E-mails du Week-end",
    "heroLead": "Stoppez les coups d’œil Slack du samedi grâce au mode silence et à l’envoi programmé lundi.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Набор границ рабочей почты в выходные и после работы | DopaBrain",
    "heroTitle": "Набор границ рабочей почты в выходные и после работы",
    "heroLead": "Остановите субботние проверки чатов с режимом тишины и отложенной отправкой на понедельник.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "वीकेंड और ऑफ-आवर्स वर्क ईमेल बाउंड्री किट | DopaBrain",
    "heroTitle": "वीकेंड और ऑफ-आवर्स वर्क ईमेल बाउंड्री किट",
    "heroLead": "क्वाइट आवर्स और सोमवार शेड्यूल-सेंड के साथ शनिवार-रविवार सच्चा आराम पाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Batas Email & Chat Kerja Akhir Pekan | DopaBrain",
    "heroTitle": "Kit Batas Email & Chat Kerja Akhir Pekan",
    "heroLead": "Hentikan kebiasaan intip Slack hari Sabtu dengan jadwal senyap dan kirim terjadwal Senin.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Hafta Sonu ve Mesai Dışı İş E-postası Sınır Kiti | DopaBrain",
    "heroTitle": "Hafta Sonu ve Mesai Dışı İş E-postası Sınır Kiti",
    "heroLead": "Sessiz saatler ve Pazartesi zamanlı gönderimle hafta sonu zihinsel dinlenmenizi koruyun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "quick_peek_habit",
    "en": "The \"30-Second Peek\" — Opening Slack on Saturday morning and spiraling over an issue you cannot fix until Monday",
    "ko": "\"30초만 확인\" 습관 — 토요일에 슬랙을 열었다가 월요일까지 못 고칠 일로 주말 내내 찜찜함"
  },
  {
    "id": "bedtime_badge_red",
    "en": "Home-Screen Red Badges — Seeing work email counts every time you check the weather or texts",
    "ko": "홈 화면 빨간 배지 — 날씨나 가족 문자를 볼 때마다 업무 메일 숫자가 눈에 밟힘"
  },
  {
    "id": "guilty_weekend_reply",
    "en": "Training Weekend Expectations — Replying Sunday afternoon and accidentally signaling you are always available",
    "ko": "주말 즉시 답장 — 일요일에 답장해서 오히려 주말 연락 기대치를 높여 놓음"
  },
  {
    "id": "laptop_in_livingroom",
    "en": "Open Work Laptop on Table — Visual cue keeping your nervous system half-clocked-in all weekend",
    "ko": "거실 위 업무 노트북 — 시야에 업무 기기가 보여 뇌가 쉬지 못하고 대기 상태를 유지함"
  },
  {
    "id": "vague_emergency_channel",
    "en": "No Clear True-Emergency Path — Checking every channel because you do not separate real 911s from routine FYI",
    "ko": "진짜 비상 채널 미분리 — 일반 참고 공지와 진짜 긴급 연락을 구분하지 않아 전부 열어 봄"
  }
];
  var TIERS = {
  "low": {
    "enT": "Always-On Bleed — Schedule Quiet Hours, Hide Work Apps & Use Monday 9 AM Schedule-Send",
    "koT": "상시 대기 과다 — 주말 방해금지 예약·업무 앱 폴더 숨김·월요일 오전 9시 예약 발송을 켜세요",
    "enD": "Occupational recovery research (Sonnentag) shows \"psychological detachment\" during non-work hours is the #1 predictor of Monday vigor and lower burnout—even a 2-minute Saturday work peek disrupts full detachment for hours.",
    "koD": "직업 회복 연구(Sonnentag)에 따르면 퇴근 후 \"심리적 분리\"가 월요일 활력과 번아웃 예방의 핵심입니다. 토요일 2분 확인만으로도 뇌의 휴식 모드가 몇 시간씩 끊어집니다.",
    "enS": "\"Note: I’m unplugged evenings & weekends to recharge—if anything is genuinely urgent, please call/SMS; otherwise I’ll reply promptly Monday at 9 AM!\"",
    "koS": "\"주말과 퇴근 후에는 재충전을 위해 알림을 꺼 두고 있습니다. 진짜 긴급한 사안은 전화/문자 부탁드리며, 일반 업무는 월요일 오전 9시에 빠르게 회신드리겠습니다!\"",
    "enL": [
      "Enable automated Quiet Hours on Slack/Teams/Mail (Fri 6 PM – Mon 9 AM) and move work icons off Page 1 of your phone.",
      "If you ever draft a thought over the weekend, hit \"Schedule Send → Monday 9:05 AM\" so you never trigger weekend reply ping-pong.",
      "Close and tuck your work laptop out of sight Friday at 6 PM so your living space feels 100% yours."
    ],
    "koL": [
      "업무 메신저·메일에 자동 방해금지(금 18시~월 09시)를 걸고 업무 앱을 휴대폰 두 번째 페이지 폴더로 옮기세요.",
      "주말에 문득 떠오른 답장은 바로 보내지 말고 반드시 \"월요일 오전 9시 예약 발송\"으로 설정하세요.",
      "금요일 저녁 업무 노트북을 가방이나 서랍에 넣어 시야에서 완전히 치워 두세요."
    ]
  },
  "mid": {
    "enT": "Mostly Detached — Swap Quick Peeks for Monday 9 AM Schedule-Send",
    "koT": "대체로 분리 중 — 가끔 확인하는 습관만 월요일 예약 발송으로 바꾸세요",
    "enD": "Removing home-screen badges closes the last tiny leak in your weekend rest.",
    "koD": "홈 화면 배지만 꺼도 주말 휴식의 밀도가 확연히 높아집니다.",
    "enS": "\"Rested weekends produce sharper Mondays.\"",
    "koS": "\"온전히 쉰 주말이 가장 명료한 월요일을 만든다.\"",
    "enL": [
      "Turn off red unread badges on work mail.",
      "Keep work phone/laptop outside the bedroom.",
      "Define one true phone-call channel for real emergencies."
    ],
    "koL": [
      "업무 메일 앱의 빨간 숫자 배지를 꺼 두세요.",
      "업무 기기는 침실 밖에 보관하세요.",
      "진짜 비상시 연락 수단(전화) 1개만 명확히 정해 두세요."
    ]
  },
  "high": {
    "enT": "Clean Psychological Detachment — Restorative Off-Hours",
    "koT": "완벽한 심리적 분리 — 주말이 온전히 내 회복 시간입니다",
    "enD": "Your boundaries protect genuine recovery and healthy team norms.",
    "koD": "건강한 연결 차단 습관으로 본인과 팀 모두의 리듬을 잘 지키고 있습니다.",
    "enS": "\"When I’m off, I’m truly off.\"",
    "koS": "\"쉴 때는 온전히 쉬고, 일할 때 깊게 몰입한다.\"",
    "enL": [
      "Keep modeling Monday schedule-send for teammates.",
      "Enjoy screen-light weekend mornings.",
      "Protect your Friday shutdown ritual."
    ],
    "koL": [
      "동료들에게도 월요일 예약 발송 문화를 자연스럽게 보여 주세요.",
      "주말 아침의 여유를 계속 누리세요.",
      "금요일 퇴근 마감 루틴을 꾸준히 이어 가세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_weekend_email_v1";
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
      window.gtag('event', "weekend_email_boundary_complete", {
        tool_slug: "sunday-work-email-boundary-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/sunday-work-email-boundary-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "sunday-work-email-boundary-plan",
        filename: 'dopabrain-sunday-work-email-boundary-plan-card.png',
        badge: "WORK RECOVERY • WEEKEND & AFTER-HOURS WORK EMAIL BOUNDARY KIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
        accent2: "#6366f1"
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
