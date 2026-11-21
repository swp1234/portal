/* Workplace Stress Triage & Decompression Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Workplace Stress Triage & 10-Minute Decompression Reset | DopaBrain",
    "metaDesc": "Free 12-language Workplace Stress Triage tool. Measure 5 daily job-pressure axes locally, separate acute workload spikes from chronic burnout, and build a 10-minute workday reset.",
    "keywords": "workplace stress triage, work stress relief tool, job stress vs burnout, workday decompression protocol, office stress boundary script, dopabrain",
    "kicker": "WORKDAY PRESSURE & 10-MINUTE RESET",
    "heroTitle": "Workplace Stress Triage & Decompression Planner",
    "heroLead": "Carrying work tension into your evening or drowning in competing \"urgent\" pings? Rate 5 workplace friction signals privately to cut low-value pressure and run a 10-minute nervous system shift.",
    "chip1": "5 Work Pressure Axes",
    "chip2": "10m Reset Protocol",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT TODAY’S WORKDAY LOAD (1 = LIGHT, 5 = OVERLOAD)",
    "step1Title": "Which workplace stressors are squeezing your bandwidth most today?",
    "step1Sub": "100% browser-local—nothing about your workplace or team is ever sent to any server.",
    "inputLabel": "Optional: 1 non-urgent task I can defer or clarify today (100% local):",
    "inputPlaceholder": "Example: Moving the optional deck polish to Thursday so I finish the core deliverable calmly",
    "ctaBtn": "Run Stress Triage & Build 10m Reset",
    "resultBadge": "STEP 2 • YOUR WORKDAY STRESS TRIAGE PLAN",
    "noteTitle": "Today’s Protected Scope Decision",
    "meterLabel": "Sustainable Workday Capacity",
    "scriptTitle": "Calm Bandwidth & Priority-Clarification Script",
    "stepsTitle": "3 Moves to Decompress Your Next 10 Minutes",
    "stickyTitle": "Not sure if this is temporary stress or deeper burnout?",
    "stickySub": "Run the Burnout vs. Stress Differential Matrix in 2 minutes",
    "stickyBtn": "Burnout Matrix →",
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
    "title": "직장 스트레스 트리아지 & 10분 퇴근 디컴프레션 | DopaBrain",
    "metaDesc": "끝없는 메신저 알림과 모호한 업무 범위로 퇴근 후에도 머리가 안 쉬나요? 5가지 직장 압박 축을 로컬에서 점검하고 우선순위 대화문과 10분 리셋 루틴을 받으세요.",
    "kicker": "직장 압박 트리아지 & 10분 신경계 전환",
    "heroTitle": "직장 스트레스 트리아지 & 10분 리셋 플래너",
    "heroLead": "모든 일이 다 급하다고 쏟아지거나 퇴근 후에도 업무 긴장이 이어지나요? 5가지 직장 스트레스 축을 비공개로 점검해 우선순위를 정리하고 10분 만에 스위치를 끄세요.",
    "chip1": "5가지 직장 압박 축",
    "chip2": "10분 전환 루틴",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 오늘의 업무 부하 점검 (1 = 여유, 5 = 한계 초과)",
    "step1Title": "오늘 내 집중력과 에너지를 가장 크게 갉아먹은 요소는 무엇인가요?",
    "step1Sub": "모든 선택은 내 브라우저 안에서만 계산되며 외부로 전송되지 않습니다.",
    "inputLabel": "선택: 오늘 당장 뒤로 미루거나 범위를 조율할 업무 1가지 (100% 로컬):",
    "ctaBtn": "업무 스트레스 트리아지 & 10분 리셋 생성",
    "resultBadge": "2단계 • 오늘의 직장 스트레스 트리아지 플랜",
    "noteTitle": "오늘 보호하기로 정한 나의 업무 범위",
    "meterLabel": "지속 가능한 업무 여력",
    "scriptTitle": "상사·동료에게 우선순위를 차분히 조율하는 문장",
    "stepsTitle": "지금 10분 안에 긴장을 내리는 3단계 리셋",
    "stickyTitle": "단순 스트레스인지 만성 번아웃인지 헷갈리나요?",
    "stickySub": "번아웃 vs 스트레스 감별 매트릭스로 2분 만에 확인하세요",
    "stickyBtn": "번아웃 감별 →",
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
    "title": "职场压力分级与10分钟减压器 | DopaBrain",
    "heroTitle": "职场压力分级器",
    "ctaBtn": "生成10分钟减压方案",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "職場ストレス・トリアージ（10分切替） | DopaBrain",
    "heroTitle": "職場ストレス・トリアージ",
    "ctaBtn": "10分リセットを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Triaje de Estrés Laboral (Reinicio 10m) | DopaBrain",
    "heroTitle": "Triaje de Estrés Laboral",
    "ctaBtn": "Crear plan de 10 minutos",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Triagem de Estresse no Trabalho (10m) | DopaBrain",
    "heroTitle": "Triagem de Estresse Laboral",
    "ctaBtn": "Criar reset de 10 minutos",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Arbeitsstress-Triage & 10-Min-Reset | DopaBrain",
    "heroTitle": "Arbeitsstress-Triage",
    "ctaBtn": "10-Min-Reset erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Triage du Stress au Travail (Reset 10m) | DopaBrain",
    "heroTitle": "Triage Stress Professionnel",
    "ctaBtn": "Créer mon reset 10 min",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Триаж рабочего стресса (сброс 10 мин) | DopaBrain",
    "heroTitle": "Триаж рабочего стресса",
    "ctaBtn": "Создать план на 10 мин",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "वर्कप्लेस स्ट्रेस ट्राइएज (10-मिनट रीसेट) | DopaBrain",
    "heroTitle": "वर्कप्लेस स्ट्रेस ट्राइएज",
    "ctaBtn": "10-मिनट प्लान बनाएँ",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Triase Stres Kerja & Reset 10 Menit | DopaBrain",
    "heroTitle": "Triase Stres Kerja",
    "ctaBtn": "Buat Reset 10 Menit",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "İş Stresi Triyajı ve 10 Dk Sıfırlama | DopaBrain",
    "heroTitle": "İş Stresi Triyajı",
    "ctaBtn": "10 Dk Plan Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "urgency_pings",
    "en": "Constant Context Switching — Slack, email & ad-hoc \"quick\" pings breaking deep focus",
    "ko": "끊임없는 알림 전환 — 메신저·메일·갑작스런 요청으로 깊은 몰입이 계속 끊김"
  },
  {
    "id": "scope_fog",
    "en": "Unclear Priorities — Everything labeled high priority with no clear trade-off",
    "ko": "모호한 우선순위 — 무엇을 먼저 버려야 할지 기준 없이 모든 일이 급함"
  },
  {
    "id": "boundary_bleed",
    "en": "After-Hours Spillover — Checking messages late or replaying work talks at night",
    "ko": "퇴근 경계 붕괴 — 저녁·주말에도 업무 알림을 보거나 머릿속으로 계속 복기함"
  },
  {
    "id": "control_gap",
    "en": "High Responsibility, Low Control — Tight deadlines without matching authority or support",
    "ko": "높은 책임·낮은 통제권 — 권한이나 지원은 부족한데 마감 압박만 큼"
  },
  {
    "id": "recovery_debt",
    "en": "Skipped Micro-Breaks — Working straight through lunch with stiff shoulders & shallow breath",
    "ko": "휴식 부채 누적 — 점심·쉬는 시간 없이 내리 달려 어깨 결림과 두통이 쌓임"
  }
];
  var TIERS = {
  "low": {
    "enT": "Red-Zone Overload — Cut Scope Today & Close the Stress Cycle",
    "koT": "적색 과부하 구간 — 오늘 범위를 자르고 스트레스 회로를 닫으세요",
    "enD": "Trying to sprint harder at red-zone load lowers output quality and accelerates burnout. Force a clean priority trade-off today and run a physical 10-minute shutdown ritual.",
    "koD": "과부하 상태에서 무리하게 버티면 집중력과 판단력이 급락합니다. 오늘 당장 우선순위 트레이드오프를 요청하고 10분 물리적 퇴근 의식으로 회로를 끊으세요.",
    "enS": "\"To deliver [Project A] at high quality by Friday, I will need to move [Task B] to early next week—which priority should take the lead?\"",
    "koS": "\"[A 업무]를 금요일까지 완성도 있게 마무리하려면 [B 업무]는 다음 주 초로 조정해야 할 것 같습니다. 두 가지 중 어느 쪽을 우선순위로 둘까요?\"",
    "enL": [
      "Mute non-critical notifications for 60 minutes and finish ONLY 1 visible milestone.",
      "At clock-out, write tomorrow’s top 2 items on paper, close the laptop, and walk outside for 10 minutes.",
      "Do 60 seconds of shoulder drops + long exhales before entering home mode."
    ],
    "koL": [
      "60분간 비필수 알림을 끄고 눈에 보이는 핵심 마일스톤 단 1개만 끝내세요.",
      "퇴근 시 내일 할 핵심 2가지를 종이에 적은 뒤 노트북을 덮고 10분간 바깥 공기를 쐬세요.",
      "집 모드에 들어가기 전 60초간 어깨 이완과 긴 날숨 호흡으로 업무 모드를 종료하세요."
    ]
  },
  "mid": {
    "enT": "Yellow-Zone Friction — Batch Pings & Protect One 90-Min Block",
    "koT": "황색 마찰 구간 — 알림을 묶고 90분 집중 블록 1개를 잠그세요",
    "enD": "Your workload is manageable once fragmentation stops. Batching communication into 2–3 check windows immediately cuts cognitive fatigue by half.",
    "koD": "업무량 자체보다 잦은 끊김이 피로의 주범입니다. 메신저 확인을 하루 2~3회로 묶고 90분 집중 블록을 확보하면 체감 스트레스가 크게 줄어듭니다.",
    "enS": "\"I am heads-down in a focus block until 2:30 PM to wrap up the draft—I will reply to messages right after.\"",
    "koS": "\"초안 마무리를 위해 오후 2시 30분까지 집중 블록 진행 중입니다. 마치는 대로 메시지 답변드릴게요.\"",
    "enL": [
      "Take a genuine 10-minute screen-free break away from your desk mid-afternoon.",
      "Group similar small admin tasks into one 25-minute end-of-day sprint.",
      "Name your exact stop time today and honor it."
    ],
    "koL": [
      "오후 중반 자리를 떠나 화면 없이 10분간 진짜 휴식을 취하세요.",
      "자잘한 행정·답변 업무는 하루 말미 25분 블록에 한 번에 몰아서 처리하세요.",
      "오늘 업무 종료 시각을 미리 정하고 알람이 울리면 깔끔하게 마무리하세요."
    ]
  },
  "high": {
    "enT": "Green-Zone Sustainable Pace — Lock In Your Winning Habits",
    "koT": "녹색 지속 가능 페이스 — 현재의 건강한 업무 리듬을 고정하세요",
    "enD": "Your workday boundaries and pacing are supporting clear execution without burnout spillover. Keep your micro-breaks and clear shutdown cue steady.",
    "koD": "업무 경계와 리듬이 안정적으로 유지되고 있습니다. 바쁜 시즌이 와도 무너지지 않도록 지금의 작은 휴식과 퇴근 신호를 루틴으로 고정하세요.",
    "enS": "\"I have room to support this cleanly—let us confirm the exact deliverable and timeline up front.\"",
    "koS": "\"여유 있게 지원 가능합니다—시작 전에 목표 산출물과 일정만 명확히 맞춰두고 진행하죠.\"",
    "enL": [
      "Keep protecting one deep-work morning block before checking inbox noise.",
      "Maintain a 5-minute physical transition between work and personal time.",
      "Check in weekly before minor scope creep compounds."
    ],
    "koL": [
      "메일함 열기 전 오전 핵심 집중 블록 1개를 계속 지켜주세요.",
      "업무와 개인 시간 사이 5분 물리적 전환 습관을 유지하세요.",
      "작은 업무 확장이 쌓이기 전에 주 1회 부하를 가볍게 점검하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_work_stress_v1";
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
      window.gtag('event', "workplace_stress_complete", {
        tool_slug: "workplace-stress-triage",
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
      var shareUrl = "https://dopabrain.com/portal/tools/workplace-stress-triage.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "workplace-stress-triage",
        filename: 'dopabrain-workplace-stress-triage-card.png',
        badge: "WORKDAY PRESSURE & 10-MINUTE RESET",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#0ea5e9",
        accent2: "#14b8a6"
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
