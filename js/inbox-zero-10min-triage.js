/* 10-Minute Email & Message Overload Triage
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "10-Minute Email & Message Overload Triage | DopaBrain",
    "metaDesc": "Staring at 1,400 unread emails and 12 unreturned chats until guilt freezes you? Run a 10-minute 4-bucket triage locally (Archive / 2-Min / Defer / Unsubscribe) without perfectionism.",
    "kicker": "FOCUS HYGIENE • 10-MINUTE INBOX OVERLOAD TRIAGE",
    "heroTitle": "10-Minute Email & Message Overload Triage",
    "heroLead": "Staring at 1,400 unread emails and 12 unreturned chats until guilt freezes you? Run a 10-minute 4-bucket triage locally (Archive / 2-Min / Defer / Unsubscribe) without perfectionism.",
    "chip1": "5 Inbox Traps",
    "chip2": "4-Bucket Triage",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR INBOX OVERLOAD HABITS (1 = CLEAR, 5 = BURIED)",
    "step1Title": "What turns your inbox into a daily source of dread?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One avoided reply I will send in 2 honest sentences today (100% local):",
    "ctaBtn": "Build My 10-Minute Triage Protocol",
    "resultBadge": "STEP 2 • YOUR 10-MINUTE INBOX RELIEF PROTOCOL",
    "noteTitle": "First 2-Sentence Reply to Clear",
    "meterLabel": "Inbox Control Score",
    "scriptTitle": "Guilt-Free Late-Reply Opener",
    "stepsTitle": "The 10-Minute 4-Bucket Triage Sequence",
    "stickyTitle": "Ready to run a crisp 10-minute timed triage sprint?",
    "stickySub": "Open the free Distraction-Free Timer",
    "stickyBtn": "Start 10-Min Timer →",
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
    "title": "쌓인 이메일·메신저 10분 쾌속 트리아지 정리기 | DopaBrain",
    "metaDesc": "안 읽은 메일 수백 통·미답장 메시지 앞에서 죄책감에 마비되셨나요? 완벽주의 없이 10분 만에 보관·2분 답장·보류·구독 해지로 깔끔히 비우는 트리아지 플랜을 만드세요.",
    "kicker": "집중 위생 · 쌓인 메일·메신저 10분 쾌속 정리 트리아지",
    "heroTitle": "쌓인 이메일·메신저 10분 쾌속 트리아지 정리기",
    "heroLead": "안 읽은 메일 수백 통·미답장 메시지 앞에서 죄책감에 마비되셨나요? 완벽주의 없이 10분 만에 보관·2분 답장·보류·구독 해지로 깔끔히 비우는 트리아지 플랜을 만드세요.",
    "chip1": "5가지 인박스 함정",
    "chip2": "4분류 쾌속 정리",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 메일·메신저 과부하 패턴 점검 (1 = 쾌적, 5 = 파묻힘)",
    "step1Title": "받은편지함·메신저가 매일 부담이 되는 가장 큰 원인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 미뤄둔 답장 중 오늘 2줄로 솔직히 보낼 1건 (100% 로컬):",
    "ctaBtn": "내 10분 인박스 쾌속 정리 플랜 보기",
    "resultBadge": "2단계 • 10분 인박스 해방 트리아지 프로토콜",
    "noteTitle": "가장 먼저 끝낼 2줄 답장 1건",
    "meterLabel": "인박스 통제력",
    "scriptTitle": "늦은 답장 죄책감 없이 여는 1줄 멘트",
    "stepsTitle": "10분 만에 숨통을 트는 4분류 정리 순서",
    "stickyTitle": "지금 바로 10분 타이머를 켜고 한 번에 정리해 볼까요?",
    "stickySub": "무료 집중 타이머로 10분 정리 시작",
    "stickyBtn": "10분 타이머 →",
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
    "title": "邮件与消息积压10分钟快速分诊器 | DopaBrain",
    "heroTitle": "邮件与消息积压10分钟快速分诊器",
    "heroLead": "用归档/2分钟回复/暂缓/退订4步法，10分钟打破未读焦虑。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "溜まったメール・チャット10分トリアージ整理 | DopaBrain",
    "heroTitle": "溜まったメール・チャット10分トリアージ整理",
    "heroLead": "未読の山を4分類と2行返信テンプレートで罪悪感なく10分で片付けます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Triaje Rápido de 10 Minutos para Bandeja Saturada | DopaBrain",
    "heroTitle": "Triaje Rápido de 10 Minutos para Bandeja Saturada",
    "heroLead": "Rompe el bloqueo de correos acumulados con 4 categorías y respuestas de 2 frases.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Triagem de 10 Minutos para Caixa de Entrada Lotada | DopaBrain",
    "heroTitle": "Triagem de 10 Minutos para Caixa de Entrada Lotada",
    "heroLead": "Destrave e-mails acumulados com 4 categorias simples e respostas curtas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "10-Minuten-Postfach-Überlastungs-Triagierer | DopaBrain",
    "heroTitle": "10-Minuten-Postfach-Überlastungs-Triagierer",
    "heroLead": "Löse E-Mail-Blockaden in 10 Minuten mit 4 klaren Kategorien und 2-Satz-Antworten.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Tri Express 10 Min Boîte Mail Saturée | DopaBrain",
    "heroTitle": "Tri Express 10 Min Boîte Mail Saturée",
    "heroLead": "Débloquez vos e-mails en retard grâce aux 4 paniers et réponses en 2 phrases.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "10-минутный разбор завалов в почте и чатах | DopaBrain",
    "heroTitle": "10-минутный разбор завалов в почте и чатах",
    "heroLead": "Снимите паралич от непрочитанных сообщений за 4 шага и 2-строчные ответы.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "10-मिनट ईमेल और इनबॉक्स ट्रायेज | DopaBrain",
    "heroTitle": "10-मिनट ईमेल और इनबॉक्स ट्रायेज",
    "heroLead": "जमे हुए ईमेल के तनाव को 4-बकेट छंटाई और 2-वाक्य उत्तर से दूर करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Triase Cepat 10 Menit untuk Inbox Penuh | DopaBrain",
    "heroTitle": "Triase Cepat 10 Menit untuk Inbox Penuh",
    "heroLead": "Urai tumpukan email dan chat dengan 4 kategori dan balasan 2 kalimat tanpa rasa bersalah.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "10 Dakikalık Gelen Kutusu Yığılma Triyajı | DopaBrain",
    "heroTitle": "10 Dakikalık Gelen Kutusu Yığılma Triyajı",
    "heroLead": "Biriken e-postaları 4 hızlı kategori ve 2 cümlelik yanıtla 10 dakikada rahatlatın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "inbox_as_todo",
    "en": "Inbox-as-To-Do-List — Leaving 80 messages open as \"reminders\" until everything blurs",
    "ko": "할일 목록 겸용 — 기억하려고 80통을 계속 열어 두어 시야가 마비됨"
  },
  {
    "id": "perfect_reply_stall",
    "en": "Essay-Reply Perfectionism — Delaying a 2-sentence answer waiting for \"time to write properly\"",
    "ko": "장문 완벽주의 — 2줄이면 될 답장을 정성껏 쓰려다 2주씩 미룸"
  },
  {
    "id": "promo_noise",
    "en": "Newsletter Avalanche — Letting 40 daily promos bury 3 real human messages",
    "ko": "광고·뉴스레터 홍수 — 안 보는 홍보 메일이 중요한 메시지 3통을 덮어버림"
  },
  {
    "id": "all_day_tab",
    "en": "Always-Open Email Tab — Checking every 9 minutes and shattering deep work",
    "ko": "상시 탭 열어두기 — 9분마다 새로고침하느라 깊은 집중이 끊김"
  },
  {
    "id": "late_reply_shame",
    "en": "Late-Reply Shame Spiral — Feeling too guilty after 4 days to reply at all",
    "ko": "지연 답장 죄책감 — 며칠 늦어지니 미안해서 아예 열지도 못함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Inbox Paralysis — Bulk-Archive Anything Older Than 14 Days & Send One 2-Sentence Reply",
    "koT": "인박스 마비 높음 — 14일 이전 알림은 일괄 보관하고 2줄 답장 1건부터 보내세요",
    "enD": "Research on email-checking frequency (Kushlev & Dunn) found batching email to 2–3 daily windows significantly lowers daily stress compared to continuous monitoring.",
    "koD": "이메일 빈도 연구(Kushlev & Dunn)에 따르면 수시 확인을 멈추고 하루 2~3회 묶어서 처리할 때 일일 스트레스가 뚜렷하게 낮아집니다.",
    "enS": "\"Thanks for your patience! Here is the quick update: [2 crisp sentences]. Let me know if Thursday works.\"",
    "koS": "\"기다려 주셔서 감사합니다! 핵심부터 바로 공유드립니다: [2줄 답변]. 목요일 오후에 확인 가능하실까요?\"",
    "enL": [
      "Minute 1–3: Search & bulk-archive unread promos/newsletters older than 14 days (zero guilt).",
      "Minute 4–7: Reply to 3 short messages in <=2 sentences each—done beats polished.",
      "Minute 8–10: Move remaining complex items onto a 3-item action list and close the email tab."
    ],
    "koL": [
      "1~3분: 14일 지난 홍보·알림 메일은 죄책감 없이 일괄 보관하고 3곳 구독 해지.",
      "4~7분: 2줄 이내로 끝낼 수 있는 답장 3건을 완벽주의 없이 바로 전송.",
      "8~10분: 긴 작업이 필요한 메일만 할 일 목록 3줄로 옮기고 메일 탭을 닫으세요."
    ]
  },
  "mid": {
    "enT": "Occasional Pile-Up — Batch Checks Into 2 Daily Windows & Unsubscribe 5 Lists",
    "koT": "가끔 쌓임 — 하루 2회 묶음 확인 + 안 보는 구독 5개 해지로 쾌적해집니다",
    "enD": "A tiny batching boundary will eliminate 80% of your inbox friction.",
    "koD": "하루 두 번 정해진 시간에만 확인하는 규칙만 세워도 피로도가 확 줄어듭니다.",
    "enS": "\"Batch twice daily, 2 sentences over essays, close the tab between sprints.\"",
    "koS": "\"하루 2회 묶음 확인, 장문보다 2줄 답장, 처리 후엔 탭 닫기.\"",
    "enL": [
      "Check email at 11 AM and 4 PM instead of first thing at 8:30 AM.",
      "Unsubscribe from 3 noisy lists every Friday.",
      "Turn off desktop toast popups during focus blocks."
    ],
    "koL": [
      "아침 첫 1시간 대신 오전 11시·오후 4시 2회 묶음 확인으로 바꿔 보세요.",
      "매주 금요일 안 읽은 뉴스레터 3개씩 가볍게 구독 해지하세요.",
      "집중 블록 중에는 메일·메신저 팝업 알림을 꺼 두세요."
    ]
  },
  "high": {
    "enT": "Clean Communication Rhythm — Low Noise, High Focus",
    "koT": "쾌적한 커뮤니케이션 리듬 — 노이즈 없이 집중을 잘 지키고 있습니다",
    "enD": "Your inbox works for you instead of dictating your mood.",
    "koD": "받은편지함에 끌려가지 않고 주도적으로 소통 리듬을 관리하고 있습니다.",
    "enS": "\"Attention belongs to meaningful work, not real-time notifications.\"",
    "koS": "\"내 주의력은 실시간 알림이 아니라 의미 있는 일에 쓰인다.\"",
    "enL": [
      "Keep notifications silent during deep-work mornings.",
      "Maintain short, warm replies.",
      "Review subscriptions once a quarter."
    ],
    "koL": [
      "오전 딥워크 시간의 무음 원칙을 계속 지키세요.",
      "짧고 따뜻한 답장 습관을 유지하세요.",
      "분기마다 불필요한 알림 채널을 정리하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_inbox_10min_triage_v1";
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
      window.gtag('event', "inbox_10min_triage_complete", {
        tool_slug: "inbox-zero-10min-triage",
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
      var shareUrl = "https://dopabrain.com/portal/tools/inbox-zero-10min-triage.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "inbox-zero-10min-triage",
        filename: 'dopabrain-inbox-zero-10min-triage-card.png',
        badge: "FOCUS HYGIENE • 10-MINUTE INBOX OVERLOAD TRIAGE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
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
