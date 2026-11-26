/* Work-From-Home 5-Minute Shutdown Ritual Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Work-From-Home 5-Minute Shutdown Ritual Builder | DopaBrain",
    "metaDesc": "Working from your living room or bedroom and feeling like your workday never truly ends at 6 PM? Audit 5 remote-work bleed leaks locally and install a crisp 5-minute physical off-switch.",
    "kicker": "REMOTE WORK BOUNDARY • 5-MINUTE SHUTDOWN RITUAL",
    "heroTitle": "Work-From-Home 5-Minute Shutdown Ritual Builder",
    "heroLead": "Working from your living room or bedroom and feeling like your workday never truly ends at 6 PM? Audit 5 remote-work bleed leaks locally and install a crisp 5-minute physical off-switch.",
    "chip1": "5 WFH Bleed Leaks",
    "chip2": "5-Min Off-Switch",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK WHERE WORK BLEEDS INTO HOME LIFE (1 = CLEAN, 5 = ALWAYS ON)",
    "step1Title": "What keeps your brain stuck in \"work mode\" after logging off at home?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My 3-step physical 5-minute shutdown sequence (e.g., close laptop → change shirt → 10-min walk, 100% local):",
    "ctaBtn": "Build My 5-Minute Shutdown Ritual",
    "resultBadge": "STEP 2 • YOUR REMOTE-WORK PSYCHOLOGICAL DETACHMENT PLAN",
    "noteTitle": "My Daily 5-Minute Physical Off-Switch",
    "meterLabel": "Evening Detachment Strength",
    "scriptTitle": "Zeigarnik-Effect Closure Cue",
    "stepsTitle": "3 Research-Backed Moves to Separate Desk from Home",
    "stickyTitle": "Is blurred work-from-home time quietly fueling burnout?",
    "stickySub": "Take the free 90-second Burnout Test next",
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
    "title": "재택근무 완벽 퇴근·5분 업무 종료 스위치 빌더 | DopaBrain",
    "metaDesc": "집에서 일하다 보니 오후 6시가 지나도 머릿속 업무 탭이 계속 열려 있나요? 5가지 재택 경계 누수를 점검하고 뇌에 퇴근 신호를 주는 5분 물리적 스위치를 설계하세요.",
    "kicker": "재택근무 퇴근 스위치 · 5분 업무 종료 의식 빌더",
    "heroTitle": "재택근무 완벽 퇴근·5분 업무 종료 스위치 빌더",
    "heroLead": "집에서 일하다 보니 오후 6시가 지나도 머릿속 업무 탭이 계속 열려 있나요? 5가지 재택 경계 누수를 점검하고 뇌에 퇴근 신호를 주는 5분 물리적 스위치를 설계하세요.",
    "chip1": "5가지 재택 경계 누수",
    "chip2": "5분 퇴근 스위치",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 재택근무와 일상이 섞이는 지점 점검 (1 = 분리됨, 5 = 계속 이어짐)",
    "step1Title": "집에서 일과를 마친 뒤에도 뇌가 계속 \"업무 모드\"에 머무르는 이유는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 나만의 5분 물리적 퇴근 시퀀스 3단계 (예: 노트북 덮기 → 옷 갈아입기 → 10분 산책, 100% 로컬):",
    "ctaBtn": "내 5분 재택 퇴근 스위치 완성하기",
    "resultBadge": "2단계 • 재택근무 심리적 분리(퇴근) 프로토콜",
    "noteTitle": "나의 매일 5분 물리적 퇴근 의식",
    "meterLabel": "퇴근 후 심리적 분리 지수",
    "scriptTitle": "미완성 업무 생각을 닫는 종료 선언 문장",
    "stepsTitle": "책상과 집을 확실히 분리하는 3가지 습관",
    "stickyTitle": "흐릿한 재택 경계선이 만성 번아웃으로 이어지고 있지는 않을까요?",
    "stickySub": "무료 90초 번아웃 테스트로 회복 필요도 점검하기",
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
    "title": "居家办公5分钟下班关机仪式生成器 | DopaBrain",
    "heroTitle": "居家办公5分钟下班关机仪式生成器",
    "heroLead": "排查5大远程工作越界点，用5分钟物理关机仪式彻底切换回生活模式。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "在宅ワーク5分シャットダウン儀式ビルダー | DopaBrain",
    "heroTitle": "在宅ワーク5分シャットダウン儀式ビルダー",
    "heroLead": "テレワークのダラダラ残業思考を5分の物理オフスイッチで切り替えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Ritual de Cierre de 5 Min para Teletrabajo | DopaBrain",
    "heroTitle": "Ritual de Cierre de 5 Min para Teletrabajo",
    "heroLead": "Desconecta del trabajo remoto a las 6 PM con una secuencia física clara.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Ritual de Desligamento de 5 Min no Home Office | DopaBrain",
    "heroTitle": "Ritual de Desligamento de 5 Min no Home Office",
    "heroLead": "Separe trabalho e casa com um ritual físico de 5 minutos ao fim do expediente.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Homeoffice 5-Minuten-Feierabend-Ritual | DopaBrain",
    "heroTitle": "Homeoffice 5-Minuten-Feierabend-Ritual",
    "heroLead": "Beende den Arbeitstag zu Hause klar mit einem physischen 5-Minuten-Abschalt-Plan.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Rituel de Déconnexion Télétravail (5 Min) | DopaBrain",
    "heroTitle": "Rituel de Déconnexion Télétravail (5 Min)",
    "heroLead": "Coupez net le mode travail à la maison grâce à un SAS physique de 5 minutes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "5-минутный ритуал завершения удалёнки | DopaBrain",
    "heroTitle": "5-минутный ритуал завершения удалёнки",
    "heroLead": "Отделите работу дома от вечера с помощью чёткого 5-минутного ритуала.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "वर्क-फ्रॉम-होम 5-मिनट शटडाउन रिचुअल | DopaBrain",
    "heroTitle": "वर्क-फ्रॉम-होम 5-मिनट शटडाउन रिचुअल",
    "heroLead": "रिमोट काम को शाम में घुसने से रोकें और 5-मिनट का स्पष्ट ऑफ-स्विच बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Ritual Selesai Kerja WFH 5 Menit | DopaBrain",
    "heroTitle": "Ritual Selesai Kerja WFH 5 Menit",
    "heroLead": "Hentikan kerja remote merembes ke malam hari dengan saklar fisik 5 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Evden Çalışma 5 Dakikalık Kapanış Ritüeli | DopaBrain",
    "heroTitle": "Evden Çalışma 5 Dakikalık Kapanış Ritüeli",
    "heroLead": "Uzaktan çalışmanın akşama taşmasını 5 dakikalık fiziksel kapanışla durdurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "visible_laptop",
    "en": "Open Laptop in Sight — Seeing your glowing work monitor from the couch or bed all evening",
    "ko": "시야 속 업무 노트북 — 소파나 침대에서도 켜진 업무 모니터가 계속 눈에 들어옴"
  },
  {
    "id": "zeigarnik_loops",
    "en": "Unwritten Loose Ends — Stopping abruptly without jotting tomorrow’s first step, so tasks replay at dinner",
    "ko": "미정리 잔여 업무 — 내일 첫 할 일을 안 적고 덮어 저녁 내내 머릿속에 맴돔"
  },
  {
    "id": "phone_work_chat",
    "en": "Work Chat on Personal Phone — Glancing at Slack/Teams/work email from the kitchen or sofa",
    "ko": "개인폰 업무 메신저 — 저녁 식사 중이나 소파에서 슬랙·업무 메일을 습관적으로 확인"
  },
  {
    "id": "same_outfit_room",
    "en": "Zero Sensory Transition — Staying in the exact same chair, lighting, and clothes after 6 PM",
    "ko": "감각 전환 부재 — 6시 이후에도 똑같은 옷·조명·자리에서 계속 머무름"
  },
  {
    "id": "no_fake_commute",
    "en": "Missing Transition Buffer — Jumping straight from final call to dinner with zero decompression gap",
    "ko": "퇴근길 완충 부재 — 마지막 회의 직후 숨 돌릴 틈 없이 바로 저녁 일상으로 넘어감"
  }
];
  var TIERS = {
  "low": {
    "enT": "Blurred Always-On Home — Install a Physical Closing Ritual & Fake Commute Today",
    "koT": "경계 붕괴 상태 — 오늘부터 물리적 덮개 의식과 10분 \"가짜 퇴근길\"을 설치하세요",
    "enD": "Organizational psychologist Sabine Sonnentag proved \"psychological detachment\" after hours is the single strongest predictor of next-day recovery. Without an office commute, your brain needs a deliberate 5-minute closing sequence to release the Zeigarnik open-loop effect.",
    "koD": "조직심리학자 자비네 조넨타크의 연구에 따르면 퇴근 후 \"심리적 분리\"가 다음 날 회복력의 가장 강력한 예측 변수입니다. 출퇴근길이 없는 재택에서는 의도적인 5분 종료 시퀀스가 뇌에 퇴근 신호를 전달합니다.",
    "enS": "\"Tomorrow’s top 2 priorities are written down safely. The office is closed until 9 AM—my home belongs to rest now.\"",
    "koS": "\"내일 아침 첫 할 일 2가지를 안전하게 적어 두었어. 오전 9시까지 사무실은 문 닫음—이제 이 공간은 온전한 내 집이야.\"",
    "enL": [
      "Spend 2 minutes writing tomorrow’s #1–2 starting steps so your brain drops unfinished loops (Zeigarnik closure).",
      "Physically close and cover/stash your work laptop out of sight + switch room lighting from bright cool to warm.",
      "Take a 10-minute \"fake commute\" (walk around the block, change shirts, or play one favorite song)."
    ],
    "koL": [
      "퇴근 전 2분간 내일 아침 바로 시작할 1~2가지를 메모해 미완성 업무 잔상을 닫으세요.",
      "업무 노트북을 덮어 시야 밖 서랍이나 덮개 아래로 치우고 방 조명을 따뜻한 전구색으로 바꾸세요.",
      "동네 한 바퀴 10분 산책·옷 갈아입기·좋아하는 노래 1곡으로 나만의 \"가짜 퇴근길\"을 만드세요."
    ]
  },
  "mid": {
    "enT": "Partial Detachment — Silence Evening Work Pings & Change Lighting",
    "koT": "부분 분리 상태 — 저녁 업무 알림 자동 차단과 조명 전환만 더하세요",
    "enD": "Your end-of-day boundary works most evenings, yet stray chat pings pull you right back into problem-solving. Scheduled notification pause closes that leak.",
    "koD": "대체로 잘 마무리하고 있지만 가끔 울리는 업무 알림이 저녁 집중을 깨뜨립니다. 자동 알림 일시중지만 설정해도 완벽해집니다.",
    "enS": "\"Work notifications sleep from 6:30 PM to 8:30 AM so my evenings stay genuinely restorative.\"",
    "koS": "\"오후 6시 30분부터 다음 날 아침까지 업무 알림을 재워야 저녁이 진짜 휴식이 된다.\"",
    "enL": [
      "Enable automatic quiet schedule on work chat/email apps every evening.",
      "Change one sensory cue at log-off (lamp, candle, music, or comfy hoodie).",
      "Avoid \"just checking one quick email\" after dinner."
    ],
    "koL": [
      "업무 메신저·메일 앱에 매일 저녁 자동 방해금지 일정을 설정하세요.",
      "퇴근 시각에 조명·음악·편한 옷 중 감각 신호 1가지를 반드시 바꾸세요.",
      "저녁 식사 후 \"딱 한 통만 확인\" 습관을 의식적으로 멈추세요."
    ]
  },
  "high": {
    "enT": "Clean Remote-Work Boundary — Strong Evening Restoration",
    "koT": "깔끔한 재택 경계선 — 집과 일의 분리가 매우 건강하게 유지되고 있습니다",
    "enD": "You have created clear physical and mental cues that protect your home sanctuary. Keep honoring your shutdown ritual even during busy sprints.",
    "koD": "물리적·심리적 퇴근 신호가 아주 잘 자리 잡았습니다. 바쁜 주간에도 이 5분 의식만큼은 건너뛰지 말고 지켜 주세요.",
    "enS": "\"A clean shutdown today is the secret to sharp focus tomorrow.\"",
    "koS": "\"오늘 깔끔하게 닫는 습관이 내일 아침 맑은 몰입의 비결이다.\"",
    "enL": [
      "Keep your 2-minute tomorrow-list habit at log-off.",
      "Protect weekend rooms completely free of work devices.",
      "Notice how much fresher Monday feels when evenings stay truly off."
    ],
    "koL": [
      "퇴근 직전 2분 내일 메모 습관을 계속 이어 가세요.",
      "주말에는 업무 기기가 보이지 않는 쾌적한 집 환경을 유지하세요.",
      "저녁이 온전히 분리될 때 월요일 컨디션이 얼마나 가벼워지는지 느껴 보세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_wfh_shutdown_v1";
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
      window.gtag('event', "wfh_shutdown_complete", {
        tool_slug: "work-from-home-shutdown-ritual",
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
      var shareUrl = "https://dopabrain.com/portal/tools/work-from-home-shutdown-ritual.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "work-from-home-shutdown-ritual",
        filename: 'dopabrain-work-from-home-shutdown-ritual-card.png',
        badge: "REMOTE WORK BOUNDARY • 5-MINUTE SHUTDOWN RITUAL",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
        accent2: "#22c55e"
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
