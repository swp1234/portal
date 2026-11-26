/* Breakup No-Contact Urge & Emotional Anchor Plan
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Breakup No-Contact Urge & Emotional Anchor Plan | DopaBrain",
    "metaDesc": "Tempted to text an ex at midnight or check their social profile one more time? Ride out the 15-minute attachment-withdrawal wave locally with a grounding reality anchor.",
    "kicker": "HEARTBREAK RECOVERY • NO-CONTACT URGE ANCHOR",
    "heroTitle": "Breakup No-Contact Urge & Emotional Anchor Plan",
    "heroLead": "Tempted to text an ex at midnight or check their social profile one more time? Ride out the 15-minute attachment-withdrawal wave locally with a grounding reality anchor.",
    "chip1": "5 Contact Triggers",
    "chip2": "15-Min Urge Surf",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHAT IS TRIGGERING THE URGE RIGHT NOW (1 = CALM, 5 = INTENSE)",
    "step1Title": "What is pulling you back toward checking or texting right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: 1 honest reason the relationship ended (my reality anchor for hard nights, 100% local):",
    "ctaBtn": "Anchor My 15-Minute Urge Reset",
    "resultBadge": "STEP 2 • YOUR HEARTBREAK GROUNDING & NO-CONTACT PLAN",
    "noteTitle": "My Reality Anchor (Read Before Texting)",
    "meterLabel": "Emotional Self-Steadiness",
    "scriptTitle": "Self-Respecting Urge-Surfing Line",
    "stepsTitle": "3 Compassionate Moves When the Urge Peaks",
    "stickyTitle": "Want to understand why breakups trigger intense protest urges?",
    "stickySub": "Explore your relationship pattern with the free Attachment Style Test",
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
    "title": "이별 후 연락 충동·SNS 염탐 멈춤 & 감정 앵커 플래너 | DopaBrain",
    "metaDesc": "새벽에 전 연인에게 연락하고 싶거나 SNS를 다시 확인하고 싶은 충동이 밀려오나요? 15분 애착 금단 파도를 비공개 현실 앵커로 안전하게 넘기세요.",
    "kicker": "이별 후 연락 충동 진정 · 노컨택 앵커 플래너",
    "heroTitle": "이별 후 연락 충동·SNS 염탐 멈춤 & 감정 앵커 플래너",
    "heroLead": "새벽에 전 연인에게 연락하고 싶거나 SNS를 다시 확인하고 싶은 충동이 밀려오나요? 15분 애착 금단 파도를 비공개 현실 앵커로 안전하게 넘기세요.",
    "chip1": "5가지 연락 충동",
    "chip2": "15분 파도 타기",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 지금 연락·확인 충동을 키우는 요인 점검 (1 = 잔잔함, 5 = 매우 강함)",
    "step1Title": "지금 마음을 다시 흔들어 연락·확인을 부추기는 가장 큰 원인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이 관계가 끝날 수밖에 없었던 솔직한 현실 이유 1줄 (힘든 밤의 앵커, 100% 로컬):",
    "ctaBtn": "15분 충동 진정 & 현실 앵커 플랜 보기",
    "resultBadge": "2단계 • 이별 감정 안정 및 노컨택 보호 플랜",
    "noteTitle": "연락 전 다시 읽을 나의 현실 앵커",
    "meterLabel": "감정 자기 중심 지수",
    "scriptTitle": "충동 파도를 넘기는 자기 존중 문장",
    "stepsTitle": "연락 충동이 치솟을 때 나를 지키는 3단계",
    "stickyTitle": "이별 후 왜 이렇게 강한 불안과 연락 충동이 올라오는지 이해해 볼까요?",
    "stickySub": "무료 애착 유형 테스트로 나의 관계 패턴과 회복 포인트 확인",
    "stickyBtn": "애착 테스트 →",
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
    "title": "分手断联冲动与情绪锚定计划 | DopaBrain",
    "heroTitle": "分手断联冲动与情绪锚定计划",
    "heroLead": "本地写下清醒锚点，安全度过深夜想发消息或偷看前任动态的15分钟冲动波。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "失恋ノーコンタクト＆連絡衝動アンカー | DopaBrain",
    "heroTitle": "失恋ノーコンタクト＆連絡衝動アンカー",
    "heroLead": "深夜の連絡衝動やSNS確認の波を15分の現実アンカーで穏やかに乗り切ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Ancla de Contacto Cero tras Ruptura | DopaBrain",
    "heroTitle": "Ancla de Contacto Cero tras Ruptura",
    "heroLead": "Supera el impulso nocturno de escribir o revisar redes con un ancla de realidad.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Âncora de Contato Zero Pós-Término | DopaBrain",
    "heroTitle": "Âncora de Contato Zero Pós-Término",
    "heroLead": "Atravesse o impulso de mandar mensagem ou checar redes com calma em 15 minutos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Trennung-No-Contact- & Impuls-Anker | DopaBrain",
    "heroTitle": "Trennung-No-Contact- & Impuls-Anker",
    "heroLead": "Überstehe nächtliche Schreibimpulse und Profil-Checks mit einem klaren Realitätsanker.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Ancre No-Contact & Apaisement Rupture | DopaBrain",
    "heroTitle": "Ancre No-Contact & Apaisement Rupture",
    "heroLead": "Traversez l’envie d’écrire ou de regarder son profil en 15 min avec un ancrage lucide.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Якорь бесконтактного восстановления | DopaBrain",
    "heroTitle": "Якорь бесконтактного восстановления",
    "heroLead": "Переждите ночной порыв написать бывшему за 15 минут с опорой на реальность.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "ब्रेकअप नो-कॉन्टैक्ट व इमोशनल एंकर प्लान | DopaBrain",
    "heroTitle": "ब्रेकअप नो-कॉन्टैक्ट व इमोशनल एंकर प्लान",
    "heroLead": "आधी रात मैसेज करने या प्रोफ़ाइल देखने की बेचैनी को 15 मिनट में शांत करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Jangkar No-Contact & Reda Impuls Putus Cinta | DopaBrain",
    "heroTitle": "Jangkar No-Contact & Reda Impuls Putus Cinta",
    "heroLead": "Lewati dorongan chat mantan di tengah malam secara privat dalam 15 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Ayrılık Sonrası İletişimsizlik ve Dürtü Çapası | DopaBrain",
    "heroTitle": "Ayrılık Sonrası İletişimsizlik ve Dürtü Çapası",
    "heroLead": "Gece mesaj atma ve profil kontrol dürtüsünü 15 dakikalık gerçeklik çapasıyla aşın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "late_night_loneliness",
    "en": "Evening Quiet Spike — Urge hits hardest after 10 PM when daily distractions stop",
    "ko": "밤 10시 이후 외로움 — 하루 소음이 멎는 늦은 밤에 그리움과 충동이 급격히 커짐"
  },
  {
    "id": "euphoric_recall",
    "en": "Euphoric Recall — Remembering only the highlight reel while forgetting why it hurt",
    "ko": "미화된 기억 편향 — 아팠던 이유는 잊고 좋았던 몇 장면만 반복 재생함"
  },
  {
    "id": "profile_checking",
    "en": "Digital Breadcrumb Check — Looking at stories, likes, or \"last seen\" timestamps",
    "ko": "SNS 염탐 습관 — 스토리·접속 시간·좋아요 흔적을 자꾸 확인하고 싶어짐"
  },
  {
    "id": "closure_fantasy",
    "en": "One-More-Talk Fantasy — Believing one clean text will finally give magical closure",
    "ko": "마지막 대화 환상 — 딱 한 번만 더 말하면 깔끔한 마무리가 될 거라 기대함"
  },
  {
    "id": "dopamine_habit",
    "en": "Texting Reflex — Missing the routine habit of sharing small daily moments with someone",
    "ko": "일상 공유 습관 공백 — 특별한 감정보다 소소한 일상을 보낼 상대가 비어 허전함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Peak Withdrawal Wave — Do Not Text Tonight; Surf 15 Minutes First",
    "koT": "애착 금단 파도 절정 — 오늘 밤은 보내지 말고 15분만 먼저 버텨 보세요",
    "enD": "Neuroimaging research (Fisher et al., 2010) shows romantic rejection activates the exact reward-craving circuitry as physical withdrawal. Every profile peek or impulsive text resets the craving clock back to Day 0; riding out 15 minutes lets the chemical spike fade naturally.",
    "koD": "뇌영상 연구(Fisher et al., 2010)에 따르면 이별 직후의 연락 충동은 실제 금단 회로와 동일한 보상 갈망 반응입니다. 프로필을 한 번 보거나 메시지를 보내면 회복 시계가 다시 0일로 돌아가므로, 지금 딱 15분만 파도를 넘기세요.",
    "enS": "\"Missing someone is a normal nervous-system wave, not proof that I should go back. I can wait 24 hours before deciding anything.\"",
    "koS": "\"그리움이 밀려오는 건 정상적인 신경계 파도일 뿐, 다시 돌아가야 한다는 신호가 아니야. 어떤 결정도 최소 24시간 뒤로 미룰게.\"",
    "enL": [
      "Write the message you want to send in a private Notes app (never in the chat box) and wait 24 hours.",
      "Mute or archive their chat & social profiles so accidental scrolling cannot ambush you.",
      "Text a safe friend instead (\"Need a quick distraction—tell me the funniest thing from your week!\")."
    ],
    "koL": [
      "보내고 싶은 말은 대화창이 아닌 개인 메모장에만 적고 정확히 24시간 보류하세요.",
      "우연히 화면에 뜨지 않도록 대화방 보관·SNS 뮤트 처리로 시야에서 잠시 분리하세요.",
      "전 연인 대신 믿을 수 있는 친구에게 \"잠깐 기분 전환하게 요즘 재밌었던 얘기 하나만 해줘\"라고 연락하세요."
    ]
  },
  "mid": {
    "enT": "Passing Nostalgia Wave — Redirect the Daily Habit Loop",
    "koT": "지나가는 그리움 파도 — 비어 있는 일상 공유 습관만 안전하게 채우세요",
    "enD": "Your rational clarity is returning; most of the tug now is simply an unreplaced daily routine (morning coffee, commute texts). Building two fresh micro-rituals accelerates healing.",
    "koD": "이성적 중심이 점점 돌아오고 있습니다. 지금의 허전함은 사랑 자체보다 비어 있는 일상 루틴 때문입니다. 작은 대체 습관 2개만 넣어도 훨씬 빨리 편해집니다.",
    "enS": "\"I can honor the good memories while trusting the honest reasons I moved forward.\"",
    "koS": "\"좋았던 기억은 그대로 존중하되, 앞으로 나아가기로 한 솔직한 이유를 신뢰할게.\"",
    "enL": [
      "Swap the old texting time slot (e.g., commute or bedtime) with a favorite podcast or walk.",
      "Re-read your reality anchor line whenever nostalgic recall creeps in.",
      "Plan one small offline joy to look forward to this weekend."
    ],
    "koL": [
      "예전에 주로 연락하던 시간대(출퇴근·취침 전)를 좋아하는 오디오나 산책으로 교체하세요.",
      "미화된 기억이 떠오를 때마다 위에 적어둔 현실 앵커 1줄을 조용히 다시 읽으세요.",
      "이번 주말 내가 온전히 기대할 수 있는 작은 오프라인 즐거움 1개를 예약하세요."
    ]
  },
  "high": {
    "enT": "Steady Emotional Grounding — Real Healing Momentum",
    "koT": "단단해진 감정 중심 — 진짜 회복과 자립의 궤도에 올랐습니다",
    "enD": "You are observing passing waves with calm dignity rather than acting on impulse. Keep investing this reclaimed energy into your friendships, health, and future.",
    "koD": "충동에 휘둘리지 않고 감정의 파도를 품위 있게 바라보고 계십니다. 되찾은 이 소중한 에너지를 나의 건강과 인간관계, 미래에 투자하세요.",
    "enS": "\"My peace and self-respect matter more than temporary relief.\"",
    "koS": "\"잠시의 안도감보다 나의 평온함과 자기 존중이 훨씬 더 소중하다.\"",
    "enL": [
      "Acknowledge how much calmer you feel compared to two weeks ago.",
      "Keep social-media boundaries clean while healing completes.",
      "Channel fresh bandwidth into a personal goal or curiosity you put on hold."
    ],
    "koL": [
      "2주 전보다 훨씬 차분해진 자신의 회복력을 스스로 인정해 주세요.",
      "완전히 단단해질 때까지 SNS 경계는 깔끔하게 유지하세요.",
      "그동안 미뤄뒀던 나만의 목표나 호기심에 에너지를 쏟아 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_breakup_anchor_v1";
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
      window.gtag('event', "breakup_anchor_complete", {
        tool_slug: "breakup-no-contact-anchor",
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
      var shareUrl = "https://dopabrain.com/portal/tools/breakup-no-contact-anchor.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "breakup-no-contact-anchor",
        filename: 'dopabrain-breakup-no-contact-anchor-card.png',
        badge: "HEARTBREAK RECOVERY • NO-CONTACT URGE ANCHOR",
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
