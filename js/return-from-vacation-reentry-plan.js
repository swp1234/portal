/* Post-Vacation & Holiday Work Re-Entry Buffer Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Post-Vacation & Holiday Work Re-Entry Buffer Planner | DopaBrain",
    "metaDesc": "Losing an entire week of vacation relaxation in the first 90 minutes back at your desk? Build a calm Day-1 re-entry buffer (2-hour protected triage + zero Day-1 meetings) locally.",
    "kicker": "WORK RECOVERY • POST-VACATION & HOLIDAY RE-ENTRY PLANNER",
    "heroTitle": "Post-Vacation & Holiday Work Re-Entry Buffer Planner",
    "heroLead": "Losing an entire week of vacation relaxation in the first 90 minutes back at your desk? Build a calm Day-1 re-entry buffer (2-hour protected triage + zero Day-1 meetings) locally.",
    "chip1": "5 Re-Entry Traps",
    "chip2": "2-Hour Day-1 Ramp",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR POST-BREAK RE-ENTRY STRESSORS (1 = SMOOTH, 5 = SHOCK)",
    "step1Title": "What erases your vacation calm fastest on Day 1 back?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Only 2 priorities I will complete on Day 1 back—and nothing else (100% local):",
    "ctaBtn": "Build My Smooth Day-1 Re-Entry Buffer",
    "resultBadge": "STEP 2 • YOUR CALM POST-VACATION RE-ENTRY PROTOCOL",
    "noteTitle": "My Day-1 Top-2 Finish Line",
    "meterLabel": "Re-Entry Smoothness",
    "scriptTitle": "Extended Buffer Out-of-Office / Slack Status Line",
    "stepsTitle": "3 Moves That Preserve Vacation Energy All Week",
    "stickyTitle": "Still exhausted even right after taking time off?",
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
    "title": "휴가·연휴 후 출근 충격 완화 & 첫날 2시간 복귀 램프 | DopaBrain",
    "metaDesc": "일주일 푹 쉰 휴가 효과가 출근 첫날 90분 만에 증발해 버리나요? 첫날 오전 2시간 비공개 정리 블록과 회의 방어 멘트로 연휴 후유증을 부드럽게 넘기세요.",
    "kicker": "업무 복귀 · 휴가·연휴 후 출근 충격 완화 & 2시간 복귀 램프",
    "heroTitle": "휴가·연휴 후 출근 충격 완화 & 첫날 2시간 복귀 램프",
    "heroLead": "일주일 푹 쉰 휴가 효과가 출근 첫날 90분 만에 증발해 버리나요? 첫날 오전 2시간 비공개 정리 블록과 회의 방어 멘트로 연휴 후유증을 부드럽게 넘기세요.",
    "chip1": "5가지 복귀 함정",
    "chip2": "첫날 2시간 램프",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 연휴·휴가 복귀 직후 스트레스 요인 점검 (1 = 여유, 5 = 충격)",
    "step1Title": "휴가 후 출근 첫날 가장 빠르게 평온을 깨뜨리는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 복귀 첫날 딱 이것만 끝내면 성공인 2가지 우선순위 (100% 로컬):",
    "ctaBtn": "내 부드러운 첫날 복귀 버퍼 보기",
    "resultBadge": "2단계 • 휴가 효과를 지켜주는 복귀 프로토콜",
    "noteTitle": "복귀 첫날 핵심 완료 2가지",
    "meterLabel": "복귀 순항 지수",
    "scriptTitle": "복귀 첫날 오전을 지켜주는 상태 안내 1줄",
    "stepsTitle": "휴가 회복 효과를 일주일 내내 유지하는 3단계",
    "stickyTitle": "충분히 쉬고 돌아왔는데도 피로가 안 풀린다면 번아웃 신호일 수 있습니다.",
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
    "title": "假期后返工缓冲与首日2小时重启计划 | DopaBrain",
    "heroTitle": "假期后返工缓冲与首日2小时重启计划",
    "heroLead": "用首日2小时无会整理时段与倒序清邮件法，告别节后返工焦虑。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "連休・休暇明けの出社ショック緩和ランプ | DopaBrain",
    "heroTitle": "連休・休暇明けの出社ショック緩和ランプ",
    "heroLead": "初日午前2時間の整理ブロックと新着順トリアージで休暇の回復を守ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Planificador Suave de Regreso al Trabajo tras Vacaciones | DopaBrain",
    "heroTitle": "Planificador Suave de Regreso al Trabajo tras Vacaciones",
    "heroLead": "Protege tu descanso con un bloque de 2 horas el primer día y lectura desde lo más reciente.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Planejador de Retorno Suave Pós-Férias e Feriados | DopaBrain",
    "heroTitle": "Planejador de Retorno Suave Pós-Férias e Feriados",
    "heroLead": "Evite o choque da volta ao trabalho com 2 horas protegidas no primeiro dia.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Urlaubs-Rückkehr & Sanfter Wiedereinstiegs-Planer | DopaBrain",
    "heroTitle": "Urlaubs-Rückkehr & Sanfter Wiedereinstiegs-Planer",
    "heroLead": "Erhalte deine Erholung mit 2 Stunden Schutzblock am ersten Tag ohne Meetings.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Planificateur Retour de Vacances en Douceur | DopaBrain",
    "heroTitle": "Planificateur Retour de Vacances en Douceur",
    "heroLead": "Préservez votre repos avec un sas de 2 heures le premier matin et tri du plus récent.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План мягкого возвращения к работе после отпуска | DopaBrain",
    "heroTitle": "План мягкого возвращения к работе после отпуска",
    "heroLead": "Сохраните эффект отдыха с 2-часовым буфером без встреч в первый рабочий день.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "छुट्टी के बाद शांत काम वापसी (री-एंट्री) प्लानर | DopaBrain",
    "heroTitle": "छुट्टी के बाद शांत काम वापसी (री-एंट्री) प्लानर",
    "heroLead": "पहले दिन 2 घंटे के शांत ट्रायेज ब्लॉक से पोस्ट-वेकेशन तनाव कम करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Kembali Kerja Mulus Setelah Liburan | DopaBrain",
    "heroTitle": "Perencana Kembali Kerja Mulus Setelah Liburan",
    "heroLead": "Jaga energi liburan dengan blok triase 2 jam tanpa rapat di hari pertama masuk.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Tatil Sonrası Yumuşak İşe Dönüş Planlayıcı | DopaBrain",
    "heroTitle": "Tatil Sonrası Yumuşak İşe Dönüş Planlayıcı",
    "heroLead": "İlk gün 2 saatlik toplantısız toparlanma bloğuyla tatil sonrası şoku azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "sunday_night_landing",
    "en": "Zero Home Buffer Day — Landing late Sunday night and jumping straight into 9 AM Monday",
    "ko": "귀가 직후 출근 — 일요일 밤늦게 돌아와 짐도 못 풀고 월요일 9시에 직행함"
  },
  {
    "id": "day1_meeting_wall",
    "en": "Back-to-Back Day-1 Meetings — Letting calendars fill with 6 calls before reading a single update",
    "ko": "첫날 회의 폭탄 — 상황 파악도 하기 전에 오전부터 회의가 빽빽하게 잡힘"
  },
  {
    "id": "inbox_chronological",
    "en": "Reading Oldest Emails First — Replying to resolved 5-day-old threads before seeing the latest update",
    "ko": "오래된 메일부터 읽기 — 이미 해결된 5일 전 메일에 답장하느라 시간을 날림"
  },
  {
    "id": "catchup_sprint",
    "en": "Guilty Catch-Up Overwork — Working 11 hours Day 1 to \"make up\" for taking earned rest",
    "ko": "죄책감 야근 — 쉰 걸 만회하려고 첫날부터 11시간씩 무리해서 일함"
  },
  {
    "id": "zero_next_joy",
    "en": "Post-Holiday Cliff — Returning with nothing pleasant scheduled for the upcoming week",
    "ko": "기대감 절벽 — 복귀 후 이번 주에 기대할 소소한 즐거움이 하나도 없음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Re-Entry Shock — Block First 2 Hours Private, Read Newest-First & Cap Day 1 at Normal Hours",
    "koT": "복귀 충격 높음 — 첫날 오전 2시간 비공개 잠금 + 최신순 메일 읽기 + 정시 퇴근을 고정하세요",
    "enD": "Vacation-fadeout research (de Bloom et al.) shows relaxation fades within days when workers dive straight into chaotic catch-up marathons. Keeping a 2-hour protected landing block and reading threads newest-first preserves recovery.",
    "koD": "휴가 회복 연구(de Bloom 등)에 따르면 복귀 첫날 무리한 만회 야근을 하면 휴가 효과가 며칠 만에 사라집니다. 첫날 2시간 정리 블록과 최신순 스레드 확인이 회복을 지켜 줍니다.",
    "enS": "\"Back online today and catching up on messages from the break—blocking this morning for triage and will reply by afternoon!\"",
    "koS": "\"오늘 복귀해 밀린 소식을 정리 중입니다! 오전은 파악 시간으로 비워 두었고, 오후부터 순차적으로 회신드리겠습니다.\"",
    "enL": [
      "Block the first 2 hours of Day 1 as \"Re-entry Triage\" on your calendar—zero calls.",
      "Sort inbox/chat NEWEST-first so you skip 60% of threads that resolved themselves while you were away.",
      "Schedule one tiny pleasant ritual on Day 1 evening (good dinner, walk, or favorite show) so work doesn’t feel like a cliff."
    ],
    "koL": [
      "복귀 첫날 오전 2시간은 캘린더에 \"복귀 정리\"로 잠그고 회의를 잡지 마세요.",
      "메일·메신저는 반드시 최신순(위에서 아래)으로 읽어 이미 해결된 스레드 60%를 건너뛰세요.",
      "첫날 저녁에 좋아하는 식사나 산책 같은 작은 즐거움 1개를 미리 예약해 두세요."
    ]
  },
  "mid": {
    "enT": "Manageable Landing — Sort Newest-First & Protect One Normal-Length Day 1",
    "koT": "순조로운 복귀 — 최신순 정리와 첫날 정시 퇴근만 지키면 완벽합니다",
    "enD": "You pace re-entry fairly well; skipping solved old threads saves an hour instantly.",
    "koD": "기본 복귀 감각이 좋습니다. 최신순 확인과 정시 퇴근으로 휴가 여운을 오래 지키세요.",
    "enS": "\"Ease in steadily—vacation recovery is meant to last past Tuesday.\"",
    "koS": "\"서두르지 않고 부드럽게 착륙한다. 휴가의 여유는 화요일 이후까지 이어져야 한다.\"",
    "enL": [
      "Keep OOO active an extra half-day if culture allows.",
      "Finish only your top 2 priorities on Day 1.",
      "Leave on time and get a full night’s sleep."
    ],
    "koL": [
      "가능하다면 복귀 첫날 오전까지 부재중 안내를 여유 있게 유지하세요.",
      "첫날엔 핵심 2가지만 끝내도 충분합니다.",
      "정시 퇴근 후 푹 자며 생체 리듬을 부드럽게 맞추세요."
    ]
  },
  "high": {
    "enT": "Smooth Re-Entry Pro — Sustained Post-Break Energy",
    "koT": "프로급 복귀 리듬 — 휴가의 에너지를 일주일 내내 잘 이어가고 있습니다",
    "enD": "Your boundaries protect rest before, during, and after time off.",
    "koD": "휴가 전·중·후의 경계선이 매우 건강합니다. 차분한 페이스를 유지하세요.",
    "enS": "\"Rest fuels clarity—I return rested, not indebted.\"",
    "koS": "\"휴식은 빚이 아니라 명료함의 연료다. 죄책감 없이 가볍게 돌아온다.\"",
    "enL": [
      "Keep planning a tiny joy in your return week.",
      "Share one favorite trip memory with a colleague.",
      "Protect normal hours all week."
    ],
    "koL": [
      "복귀 주간의 작은 즐거움 루틴을 유지하세요.",
      "동료와 휴가 중 좋았던 순간을 가볍게 나누어 보세요.",
      "복귀 첫 주 정시 퇴근 리듬을 지켜 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_vacation_reentry_v1";
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
      window.gtag('event', "vacation_reentry_plan_complete", {
        tool_slug: "return-from-vacation-reentry-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/return-from-vacation-reentry-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "return-from-vacation-reentry-plan",
        filename: 'dopabrain-return-from-vacation-reentry-plan-card.png',
        badge: "WORK RECOVERY • POST-VACATION & HOLIDAY RE-ENTRY PLANNER",
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
