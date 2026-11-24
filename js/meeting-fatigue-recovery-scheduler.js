/* Video Call & Meeting Fatigue Recovery Scheduler
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Video Call & Meeting Fatigue Recovery Scheduler | DopaBrain",
    "metaDesc": "Drained after back-to-back video calls even when you barely spoke? Score 5 proven Zoom-fatigue triggers locally and build a 5-minute buffer protocol between calls.",
    "kicker": "REMOTE WORK BURNOUT • MEETING RECOVERY",
    "heroTitle": "Video Call & Meeting Fatigue Recovery Scheduler",
    "heroLead": "Drained after back-to-back video calls even when you barely spoke? Score 5 proven Zoom-fatigue triggers locally and build a 5-minute buffer protocol between calls.",
    "chip1": "5 Video-Call Drains",
    "chip2": "5-Min Buffer Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT TODAY’S MEETING FATIGUE FACTORS (1 = LOW, 5 = EXTREME)",
    "step1Title": "Which virtual-meeting drains are taxing your brain most?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One recurring meeting I can shorten by 10 min, make audio-only, or move async (100% local):",
    "ctaBtn": "Build My Meeting Recovery Plan",
    "resultBadge": "STEP 2 • YOUR BACK-TO-BACK CALL RECOVERY PROTOCOL",
    "noteTitle": "Calendar Simplification Target",
    "meterLabel": "Post-Call Cognitive Reserve",
    "scriptTitle": "Polite Camera-Off / Async Boundary Script",
    "stepsTitle": "3 Evidence-Based Resets Between Video Calls",
    "stickyTitle": "Are stacked meetings pushing you toward deeper burnout?",
    "stickySub": "Take the free Burnout Risk Test in 90 seconds",
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
    "title": "화상회의·연속 미팅 피로 회복 스케줄러 | DopaBrain",
    "metaDesc": "말을 많이 하지도 않았는데 연속 화상회의만 끝나면 녹초가 되나요? 5가지 화상회의 피로 요인을 점검하고 회의 사이 5분 회복 버퍼 루틴을 설계하세요.",
    "kicker": "화상회의 피로 회복 · 줌 피로 리셋 플래너",
    "heroTitle": "화상회의·연속 미팅 피로 회복 스케줄러",
    "heroLead": "말을 많이 하지도 않았는데 연속 화상회의만 끝나면 녹초가 되나요? 5가지 화상회의 피로 요인을 점검하고 회의 사이 5분 회복 버퍼 루틴을 설계하세요.",
    "chip1": "5가지 회의 피로 요인",
    "chip2": "5분 회복 버퍼",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 오늘의 화상회의 피로 요인 점검 (1 = 낮음, 5 = 매우 심함)",
    "step1Title": "지금 뇌 에너지를 가장 빠르게 소모시키는 회의 요인은 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 10분 단축·음성 전용·비동기 공유로 전환할 수 있는 회의 1건 (100% 로컬):",
    "ctaBtn": "내 회의 피로 회복 스케줄 만들기",
    "resultBadge": "2단계 • 연속 회의 회복·버퍼 프로토콜",
    "noteTitle": "캘린더 다이어트 실행 대상",
    "meterLabel": "회의 후 남은 인지 여유도",
    "scriptTitle": "정중한 카메라 오프·비동기 전환 멘트",
    "stepsTitle": "회의 사이 뇌 피로를 씻어내는 3가지 즉시 루틴",
    "stickyTitle": "연속 회의 피로가 만성 번아웃으로 이어지고 있지는 않을까요?",
    "stickySub": "무료 90초 번아웃 테스트로 현재 에너지 고갈 단계 확인",
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
    "title": "视频会议疲劳与间隔恢复排程器 | DopaBrain",
    "heroTitle": "视频会议疲劳与间隔恢复排程器",
    "heroLead": "评估5大视频会议耗竭诱因，制定连轴会议间的5分钟脑力恢复缓冲计划。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "オンライン会議疲労＆回復スケジューラー | DopaBrain",
    "heroTitle": "オンライン会議疲労＆回復スケジューラー",
    "heroLead": "Zoom疲れの5要因を可視化し、会議間の5分バッファ回復ルーチンを設計します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador contra Fatiga de Reuniones | DopaBrain",
    "heroTitle": "Planificador contra Fatiga de Reuniones",
    "heroLead": "Evalúa 5 causas de fatiga por videollamadas y diseña pausas de 5 minutos entre citas.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Recuperação de Fadiga de Reuniões | DopaBrain",
    "heroTitle": "Recuperação de Fadiga de Reuniões",
    "heroLead": "Mapeie 5 gatilhos de cansaço em videochamadas e crie pausas de 5 minutos entre elas.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Meeting- & Zoom-Fatigue-Erholungsplaner | DopaBrain",
    "heroTitle": "Meeting- & Zoom-Fatigue-Erholungsplaner",
    "heroLead": "Analysiere 5 Videocall-Stressfaktoren und plane 5-Minuten-Puffer zwischen Terminen.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Anti-Fatigue Visio | DopaBrain",
    "heroTitle": "Planificateur Anti-Fatigue Visio",
    "heroLead": "Évaluez 5 facteurs de fatigue visio et intégrez des sas de récupération de 5 minutes.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Восстановление после усталости от созвонов | DopaBrain",
    "heroTitle": "Восстановление после усталости от созвонов",
    "heroLead": "Оцените 5 факторов Zoom-усталости и настройте 5-минутные буферы между встречами.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "वीडियो कॉल व मीटिंग फटीग शेड्यूलर | DopaBrain",
    "heroTitle": "वीडियो कॉल व मीटिंग फटीग शेड्यूलर",
    "heroLead": "5 ज़ूम-फटीग कारण जांचें और लगातार मीटिंग के बीच 5-मिनट रिकवरी बफर बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Penjadwal Pemulihan Lelah Meeting Online | DopaBrain",
    "heroTitle": "Penjadwal Pemulihan Lelah Meeting Online",
    "heroLead": "Ukur 5 pemicu lelah Zoom dan susun jeda pemulihan 5 menit di antara rapat beruntun.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Video Toplantı Yorgunluğu Planlayıcı | DopaBrain",
    "heroTitle": "Video Toplantı Yorgunluğu Planlayıcı",
    "heroLead": "5 Zoom yorgunluğu tetikleyicisini puanlayın ve toplantılar arası 5 dk mola planlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "mirror_anxiety",
    "en": "Self-View Mirror Load — Watching your own camera thumbnail throughout calls",
    "ko": "내 화면 응시 피로 — 회의 내내 카메라 속 내 표정과 모습을 계속 의식함"
  },
  {
    "id": "zero_buffers",
    "en": "Back-to-Back Stacking — Jumping straight from one call to the next with 0 minutes between",
    "ko": "연속 무버퍼 일정 — 회의가 끝나자마자 0분 간격으로 다음 회의에 입장함"
  },
  {
    "id": "physical_freeze",
    "en": "Seated Camera Lock — Staying rigid in one frame angle for hours without moving",
    "ko": "카메라 고정 자세 — 프레임 안에 맞추느라 몇 시간째 몸을 못 움직임"
  },
  {
    "id": "nonverbal_strain",
    "en": "Grid Eye-Contact Overload — Scanning multiple close-up faces and nodding harder than in person",
    "ko": "다중 시선·표정 과부하 — 여러 얼굴을 가까이 보며 과장된 고개 끄덕임 유지"
  },
  {
    "id": "status_bloat",
    "en": "Low-Agency Status Calls — Sitting through recurring updates that could be a 2-minute note",
    "ko": "단순 보고형 회의 과다 — 짧은 글로 대체 가능한 공유 회의에 장시간 참석"
  }
];
  var TIERS = {
  "low": {
    "enT": "Severe Video-Call Exhaustion — Insert 5-Minute Buffers & Hide Self-View Now",
    "koT": "심한 화상회의 탈진 — 지금 당장 내 화면 숨기기 & 5분 버퍼를 넣으세요",
    "enD": "Stanford’s Zoom Fatigue research shows constant self-view monitoring, close-up eye gaze, and zero movement rapidly spike stress hormones. Small mechanical tweaks slash exhaustion immediately.",
    "koD": "스탠퍼드대 화상회의 피로 연구에 따르면 내 얼굴 지속 노출, 근접 시선, 부동 자세가 뇌 피로를 급격히 높입니다. 설정 몇 가지만 바꿔도 피로도가 즉시 절반 가까이 줄어듭니다.",
    "enS": "\"I’ll be listening actively off-camera for the next 20 minutes while taking notes so I can stay fresh for our afternoon review.\"",
    "koS": "\"오후 리뷰 집중력을 위해 이번 공유 세션 20분은 카메라를 끄고 메모하며 경청하겠습니다.\"",
    "enL": [
      "Click \"Hide Self-View\" permanently in Zoom/Meet/Teams right now.",
      "Set default calendar invites to 25 or 50 minutes to protect a 5–10 min screen-free walk between calls.",
      "Convert at least one low-interactivity call this week to audio-only while standing or pacing."
    ],
    "koL": [
      "지금 바로 Zoom/Meet/Teams에서 \"내 화면 숨기기\"를 기본값으로 켜세요.",
      "기본 회의 길이를 25분/50분으로 설정해 회의 사이 5분 이상 화면 이탈 버퍼를 확보하세요.",
      "이번 주 단순 공유 회의 1건은 이어폰 음성 전용으로 전환해 서서 걸으며 들으세요."
    ]
  },
  "mid": {
    "enT": "Moderate Meeting Drag — Cluster Calls & Protect One Deep Block",
    "koT": "중간 수준 회의 피로 — 회의를 한 시간대에 묶어 집중 블록을 지키세요",
    "enD": "Your meeting load is tolerable, but scattered calls shatter deep focus. Grouping syncs and adding 3-minute eye resets will restore afternoon energy.",
    "koD": "감당할 수 있는 회의량이지만 중간중간 흩어진 회의가 몰입을 끊고 있습니다. 회의를 묶고 3분 시각 휴식을 넣으면 오후 컨디션이 크게 살아납니다.",
    "enS": "\"Could we bundle our quick check-in into Thursday’s 15-minute sync so both of us keep Wednesday morning clear?\"",
    "koS": "\"수요일 오전 집중 시간을 서로 지킬 수 있도록 간단한 확인 사항은 목요일 15분 싱크에 묶어 논의해도 될까요?\"",
    "enL": [
      "Look 20 feet away from screens for 60 seconds after every call.",
      "Hold a daily 90-minute \"No-Meeting Focus\" block on your calendar.",
      "Shrink meeting windows by 20% on screen so faces appear further away."
    ],
    "koL": [
      "매 회의 직후 60초간 창밖 6m 이상 먼 곳을 바라보며 안구 긴장을 푸세요.",
      "캘린더에 매일 90분 \"회의 없는 집중 블록\"을 미리 잠가 두세요.",
      "화상회의 창 크기를 전체 화면 대신 70%로 줄여 시선 압박감을 낮추세요."
    ]
  },
  "high": {
    "enT": "Sustainable Call Rhythm — Keep Guarding Async-First Norms",
    "koT": "건강한 회의 리듬 — 비동기 우선 원칙과 버퍼 습관을 잘 지키고 있습니다",
    "enD": "Your calendar structure protects cognitive recovery well. Keep using concise agendas and screen-free transition breaks.",
    "koD": "인지 회복을 지키는 회의 구조가 잘 잡혀 있습니다. 짧은 안건 공유와 회의 사이 눈 휴식 습관을 그대로 유지하세요.",
    "enS": "\"Clear async notes keep our live conversations shorter, sharper, and more energizing.\"",
    "koS": "\"명확한 비동기 사전 공유가 실시간 회의를 더 짧고 생산적으로 만들어 준다.\"",
    "enL": [
      "Share 3-line written pre-reads before live sessions to cut call time in half.",
      "Keep standing or stretching during audio-friendly check-ins.",
      "Audit recurring invites once a month and sunset stale meetings."
    ],
    "koL": [
      "회의 전 3줄 요약 사전 공유로 실시간 소요 시간을 절반으로 유지하세요.",
      "음성 중심 미팅에서는 가볍게 서 있거나 스트레칭을 병행하세요.",
      "월 1회 반복 회의를 점검해 목적이 끝난 미팅을 정리하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_meeting_fatigue_v1";
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
      window.gtag('event', "meeting_fatigue_complete", {
        tool_slug: "meeting-fatigue-recovery-scheduler",
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
      var shareUrl = "https://dopabrain.com/portal/tools/meeting-fatigue-recovery-scheduler.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "meeting-fatigue-recovery-scheduler",
        filename: 'dopabrain-meeting-fatigue-recovery-scheduler-card.png',
        badge: "REMOTE WORK BURNOUT • MEETING RECOVERY",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
        accent2: "#06b6d4"
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
