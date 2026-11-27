/* Texting Anxiety, Read-Receipt & Reply-Pace Calm Guide
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Texting Anxiety, Read-Receipt & Reply-Pace Calm Guide | DopaBrain",
    "metaDesc": "Re-reading a 4-word text or checking \"last seen\" 12 times while your stomach knots? Audit 5 digital-attachment loops locally and choose a grounded non-anxious response pace.",
    "kicker": "DIGITAL RELATIONSHIPS • TEXTING ANXIETY & READ-RECEIPT CALM",
    "heroTitle": "Texting Anxiety, Read-Receipt & Reply-Pace Calm Guide",
    "heroLead": "Re-reading a 4-word text or checking \"last seen\" 12 times while your stomach knots? Audit 5 digital-attachment loops locally and choose a grounded non-anxious response pace.",
    "chip1": "5 Texting Loops",
    "chip2": "Grounded Pace",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR TEXTING-WAIT TRIGGERS (1 = RELAXED, 5 = SPIRALING)",
    "step1Title": "What digital cue pulls you into overthinking fastest?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One 15-minute offline activity I will switch to instead of re-checking chat (100% local):",
    "ctaBtn": "Build My Calm Texting & Wait Protocol",
    "resultBadge": "STEP 2 • YOUR DIGITAL ATTACHMENT CALM PROTOCOL",
    "noteTitle": "My 15-Min Phone-Down Redirect",
    "meterLabel": "Digital Attachment Steadiness",
    "scriptTitle": "Secure Low-Pressure Follow-Up Line",
    "stepsTitle": "3 Reality Checks That Break Read-Receipt Overthinking",
    "stickyTitle": "Want to see how your attachment style shapes texting reactions?",
    "stickySub": "Take the free Attachment Style Test next",
    "stickyBtn": "Attachment Test →",
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
    "title": "카톡·문자 답장 불안·읽씹 과해석 진정 & 건강한 페이스 가이드 | DopaBrain",
    "metaDesc": "짧은 답장이나 읽씹 상태를 10번씩 다시 보며 \"나한테 화났나?\" 가슴이 철렁하나요? 5가지 문자 과해석 루프를 점검하고 흔들리지 않는 건강한 답장 페이스를 세팅하세요.",
    "kicker": "관계 평온 · 답장 불안·읽씹 과해석 진정 & 페이스 가이드",
    "heroTitle": "카톡·문자 답장 불안·읽씹 과해석 진정 & 건강한 페이스 가이드",
    "heroLead": "짧은 답장이나 읽씹 상태를 10번씩 다시 보며 \"나한테 화났나?\" 가슴이 철렁하나요? 5가지 문자 과해석 루프를 점검하고 흔들리지 않는 건강한 답장 페이스를 세팅하세요.",
    "chip1": "5가지 문자 과해석",
    "chip2": "안정 답장 페이스",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 메신저·문자 대기 중 불안 신호 점검 (1 = 여유, 5 = 과해석 심함)",
    "step1Title": "메신저에서 가장 빠르게 불안을 자극하는 신호는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 채팅창 다시 여는 대신 바로 전환할 15분 오프라인 행동 1가지 (100% 로컬):",
    "ctaBtn": "내 흔들리지 않는 답장·대기 프로토콜 보기",
    "resultBadge": "2단계 • 디지털 과해석 차단 안정 프로토콜",
    "noteTitle": "채팅 확인 대신 실행할 15분 행동",
    "meterLabel": "디지털 관계 안정감",
    "scriptTitle": "집착·눈치 없이 담백하게 쓰는 안부·확인 멘트",
    "stepsTitle": "읽씹·단답 과해석을 바로 멈추는 3가지 현실 체크",
    "stickyTitle": "내 애착 유형이 연락 불안과 어떻게 연결되는지 2분 테스트로 볼까요?",
    "stickySub": "무료 2분 애착 유형 테스트 바로가기",
    "stickyBtn": "애착 유형 →",
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
    "title": "消息已读不回与回复焦虑安抚指南 | DopaBrain",
    "heroTitle": "消息已读不回与回复焦虑安抚指南",
    "heroLead": "打破对简短回复和未回消息的过度脑补，建立从容健康的聊天节奏。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "LINE・既読スルー返信不安＆過解釈リセット | DopaBrain",
    "heroTitle": "LINE・既読スルー返信不安＆過解釈リセット",
    "heroLead": "短い返信や既読無視の深読みを現実チェックと15分オフライン切替で落ち着かせます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Guía de Calma ante Ansiedad por Mensajes y Visto | DopaBrain",
    "heroTitle": "Guía de Calma ante Ansiedad por Mensajes y Visto",
    "heroLead": "Detén la sobreinterpretación del doble check y recupera un ritmo sereno al responder.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Guia de Calma para Ansiedade com Mensagens e Visualizado | DopaBrain",
    "heroTitle": "Guia de Calma para Ansiedade com Mensagens e Visualizado",
    "heroLead": "Pare de superinterpretar demoras no chat e retome um ritmo seguro e leve.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Chat- & Lesebestätigungs-Angst Ruhe-Guide | DopaBrain",
    "heroTitle": "Chat- & Lesebestätigungs-Angst Ruhe-Guide",
    "heroLead": "Stoppe Grübeln bei kurzen Antworten oder blauen Haken mit klarem Realitäts-Check.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Guide Calme Anxiété SMS & Accusés de Lecture | DopaBrain",
    "heroTitle": "Guide Calme Anxiété SMS & Accusés de Lecture",
    "heroLead": "Coupez la surinterprétation des messages courts ou vus sans réponse localement.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Гид спокойствия при тревоге из-за переписок и «прочитано» | DopaBrain",
    "heroTitle": "Гид спокойствия при тревоге из-за переписок и «прочитано»",
    "heroLead": "Остановите накручивание из-за задержки ответа с помощью проверки реальности.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "टेक्स्टिंग चिंता और रीड-रसीद शांत गाइड | DopaBrain",
    "heroTitle": "टेक्स्टिंग चिंता और रीड-रसीद शांत गाइड",
    "heroLead": "देर से जवाब या छोटे टेक्स्ट पर ओवरथिंकिंग रोकें और शांत संवाद गति अपनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Panduan Tenang Cemas Chat & Centang Biru | DopaBrain",
    "heroTitle": "Panduan Tenang Cemas Chat & Centang Biru",
    "heroLead": "Hentikan overthinking balasan singkat dengan cek realitas dan jeda 15 menit offline.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Mesajlaşma ve Görüldü Kaygısı Sakinlik Rehberi | DopaBrain",
    "heroTitle": "Mesajlaşma ve Görüldü Kaygısı Sakinlik Rehberi",
    "heroLead": "Kısa yanıt ve görüldü stresini gerçeklik kontrolüyle yerel olarak yatıştırın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "punct_mind_read",
    "en": "Punctuation Mind-Reading — Reading \"Okay.\" or a shorter reply as sudden anger",
    "ko": "말투·마침표 과해석 — \"응.\"이나 짧은 답장을 화난 신호로 단정함"
  },
  {
    "id": "compulsive_refresh",
    "en": "Compulsive Status Checking — Opening the app repeatedly to check online/read indicators",
    "ko": "접속·읽음 반복 확인 — 알림도 안 왔는데 몇 분마다 채팅창을 열어봄"
  },
  {
    "id": "double_text_panic",
    "en": "Urgent Double-Text Impulse — Sending follow-ups just to stop my own anxiety spike",
    "ko": "조급한 추가 전송 — 내 불안을 끄려고 확인 문자를 급히 덧보냄"
  },
  {
    "id": "tone_rehearsal",
    "en": "Drafting 7 Versions — Over-editing a casual 1-line text for 20 minutes out of fear",
    "ko": "1줄 답장 20분 고민 — 거절당할까 봐 가벼운 문장을 일곱 번씩 고침"
  },
  {
    "id": "mood_hostage",
    "en": "Mood Held Hostage — Letting one delayed reply ruin my entire evening focus",
    "ko": "기분 저당잡힘 — 답장 지연 하나에 저녁 시간 전체 집중과 기분이 무너짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Texting Spiral — List 3 Boring Explanations & Park Phone Face-Down for 20 Min",
    "koT": "문자 과해석 높음 — 평범한 이유 3가지를 떠올리고 폰을 20분간 다른 방에 두세요",
    "enD": "Relationship psychology shows text strips away 90% of vocal warmth and facial cues, prompting anxious brains to fill silence with rejection stories—when 9 out of 10 delays are simply meetings, driving, dead batteries, or low social energy.",
    "koD": "관계 심리학에 따르면 텍스트는 목소리 톤과 표정의 90%가 빠진 매체입니다. 불안한 뇌는 침묵을 거절로 채우지만, 실제 지연의 90%는 회의·운전·배터리·피로 같은 평범한 이유입니다.",
    "enS": "\"No rush at all—just wanted to check in on Friday plans when you have a free moment!\"",
    "koS": "\"급한 건 아니야! 여유 있을 때 금요일 일정만 편하게 알려 줘 :)\"",
    "enL": [
      "Name 3 mundane reasons for a slow reply (busy workday, driving, mentally tired—zero to do with you).",
      "Turn off read receipts / last-seen visibility if they trigger compulsive checking.",
      "Put your phone in another room for 20 minutes and shift into your offline activity immediately."
    ],
    "koL": [
      "답장이 늦는 지극히 평범한 이유 3가지(업무·이동·피로)를 먼저 떠올려 보세요.",
      "강박적 확인을 부르는 접속 표시·알림 미리보기는 과감히 꺼 두세요.",
      "지금 당장 폰을 다른 방에 두고 미리 정한 15분 오프라인 행동으로 전환하세요."
    ]
  },
  "mid": {
    "enT": "Occasional Over-Reading — Pause 5 Minutes & Choose Voice Calls for Sensitive Topics",
    "koT": "가끔 과해석 — 5분 숨 고르기 + 민감한 대화는 통화로 옮기면 훨씬 편해집니다",
    "enD": "Text is great for logistics and terrible for nuance; moving tricky talks to voice removes 80% of misunderstandings.",
    "koD": "텍스트는 일정 조율엔 좋지만 감정 전달엔 취약합니다. 미묘한 이야기는 2분 통화로 푸는 게 훨씬 안전합니다.",
    "enS": "\"Text is for logistics; tone belongs to voice or in-person warmth.\"",
    "koS": "\"문자는 일정 확인용, 진짜 감정과 뉘앙스는 목소리와 얼굴로 확인한다.\"",
    "enL": [
      "Send warm, natural replies without 10 rewrites.",
      "Assume neutral-to-kind intent unless someone states an issue directly.",
      "Keep your own evenings anchored to hobbies you enjoy."
    ],
    "koL": [
      "열 번 고치지 말고 자연스럽고 따뜻한 첫 문장을 보내 보세요.",
      "상대가 직접 말하기 전엔 중립·호의로 해석하는 기본값을 두세요.",
      "연락 여부와 무관하게 즐거운 나만의 저녁 루틴을 지키세요."
    ]
  },
  "high": {
    "enT": "Secure Digital Pace — Grounded, Warm & Unrushed",
    "koT": "안정적인 연락 페이스 — 여유롭고 건강한 디지털 관계를 유지 중입니다",
    "enD": "You treat texting as asynchronous convenience rather than a live barometer of your worth.",
    "koD": "메신저를 실시간 애정 시험대가 아니라 편리한 비동기 소통 도구로 건강하게 다루고 있습니다.",
    "enS": "\"Real connection stays steady even across quiet hours.\"",
    "koS": "\"진짜 신뢰 관계는 몇 시간의 고요함 속에서도 단단히 유지된다.\"",
    "enL": [
      "Keep enjoying calm asynchronous pacing.",
      "Use short voice notes when warmth matters.",
      "Model zero-pressure texting with friends and partners."
    ],
    "koL": [
      "서두르지 않는 비동기 소통 페이스를 계속 지키세요.",
      "온기가 필요할 땐 짧은 통화나 음성 메시지를 활용해 보세요.",
      "서로 부담 없는 연락 문화를 자연스럽게 이어 가세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_texting_anxiety_pace_v1";
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
      window.gtag('event', "texting_anxiety_pace_complete", {
        tool_slug: "texting-anxiety-reply-pace-guide",
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
      var shareUrl = "https://dopabrain.com/portal/tools/texting-anxiety-reply-pace-guide.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "texting-anxiety-reply-pace-guide",
        filename: 'dopabrain-texting-anxiety-reply-pace-guide-card.png',
        badge: "DIGITAL RELATIONSHIPS • TEXTING ANXIETY & READ-RECEIPT CALM",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#ec4899",
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
