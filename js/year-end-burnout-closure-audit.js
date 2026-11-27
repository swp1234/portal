/* Year-End Burnout & Open-Loop Closure Audit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Year-End Burnout & Open-Loop Closure Audit | DopaBrain",
    "metaDesc": "Dragging 11 months of unfinished goals and holiday fatigue into December? Audit 5 year-end exhaustion triggers locally and build a guilt-free 3-item closure plan.",
    "kicker": "SEASONAL RECOVERY • YEAR-END BURNOUT & CLOSURE AUDIT",
    "heroTitle": "Year-End Burnout & Open-Loop Closure Audit",
    "heroLead": "Dragging 11 months of unfinished goals and holiday fatigue into December? Audit 5 year-end exhaustion triggers locally and build a guilt-free 3-item closure plan.",
    "chip1": "5 Exhaustion Leaks",
    "chip2": "3-Item Closure",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR YEAR-END FATIGUE SIGNALS (1 = LIGHT, 5 = DRAINED)",
    "step1Title": "What is draining your energy most as the year closes?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One unfinished 2026 goal I consciously defer or drop without guilt (100% local):",
    "ctaBtn": "Build My Guilt-Free Year-End Closure Plan",
    "resultBadge": "STEP 2 • YOUR CALM YEAR-END CLOSURE BLUEPRINT",
    "noteTitle": "Consciously Deferred / Released Loop",
    "meterLabel": "Year-End Recovery Margin",
    "scriptTitle": "Polite Year-End Scope Boundary Line",
    "stepsTitle": "3 Moves to Close the Year Rested Instead of Crawling",
    "stickyTitle": "Want a 2-minute check on your current burnout depth?",
    "stickySub": "Take the free Burnout Risk Test next",
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
    "title": "연말 번아웃 & 미완결 업무 깔끔 마감 리셋기 | DopaBrain",
    "metaDesc": "11개월치 미완결 목표와 연말 피로를 끌어안은 채 지쳐가고 있나요? 5가지 연말 번아웃 원인을 점검하고 죄책감 없는 3가지 마감·이월 플랜을 만드세요.",
    "kicker": "연말 회복 · 연말 번아웃 & 미완결 업무 마감 점검기",
    "heroTitle": "연말 번아웃 & 미완결 업무 깔끔 마감 리셋기",
    "heroLead": "11개월치 미완결 목표와 연말 피로를 끌어안은 채 지쳐가고 있나요? 5가지 연말 번아웃 원인을 점검하고 죄책감 없는 3가지 마감·이월 플랜을 만드세요.",
    "chip1": "5가지 연말 소진",
    "chip2": "3가지 마감 룰",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 연말 피로·마감 압박 신호 점검 (1 = 여유, 5 = 극도 피로)",
    "step1Title": "연말로 갈수록 에너지를 가장 크게 깎아먹는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 올해 안에 억지로 끝내지 않고 깔끔히 이월·포기할 목표 1가지 (100% 로컬):",
    "ctaBtn": "내 죄책감 없는 연말 마감 플랜 보기",
    "resultBadge": "2단계 • 차분한 연말 마감·회복 프로토콜",
    "noteTitle": "죄책감 없이 이월·종료할 항목",
    "meterLabel": "연말 회복 여유도",
    "scriptTitle": "연말 무리한 요청 정중히 이월하는 1줄 멘트",
    "stepsTitle": "녹초가 아닌 회복 상태로 한 해를 닫는 3단계",
    "stickyTitle": "현재 번아웃 깊이를 2분 테스트로 객관적으로 점검해 볼까요?",
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
    "title": "年末倦怠与未完成任务收尾复盘器 | DopaBrain",
    "heroTitle": "年末倦怠与未完成任务收尾复盘器",
    "heroLead": "排查年末精力透支陷阱，制定无负罪感的3项核心收尾与次年顺延计划。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "年末バーンアウト＆未完了タスク締めリセット | DopaBrain",
    "heroTitle": "年末バーンアウト＆未完了タスク締めリセット",
    "heroLead": "12月の消耗原因を点検し、罪悪感ゼロの3項目完了＋1月繰越プランを作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Auditoría de Agotamiento de Fin de Año | DopaBrain",
    "heroTitle": "Auditoría de Agotamiento de Fin de Año",
    "heroLead": "Cierra el año sin culpa eligiendo 3 entregas clave y posponiendo el resto a enero.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Auditoria de Esgotamento de Fim de Ano | DopaBrain",
    "heroTitle": "Auditoria de Esgotamento de Fim de Ano",
    "heroLead": "Feche o ano com leveza definindo 3 prioridades e adiando o resto sem culpa.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Jahresend-Burnout & Abschluss-Audit | DopaBrain",
    "heroTitle": "Jahresend-Burnout & Abschluss-Audit",
    "heroLead": "Reduziere Dezember-Stress mit 3 Kern-Abschlüssen und klarem Januar-Übertrag.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Audit Épuisement de Fin d’Année & Clôture | DopaBrain",
    "heroTitle": "Audit Épuisement de Fin d’Année & Clôture",
    "heroLead": "Allégez décembre avec 3 priorités clés et un report serein à janvier sans culpabilité.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Аудит выгорания в конце года и план закрытия дел | DopaBrain",
    "heroTitle": "Аудит выгорания в конце года и план закрытия дел",
    "heroLead": "Снимите декабрьский перегруз: 3 главных итога и спокойный перенос остального на январь.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "ईयर-एंड बर्नआउट और क्लोज़र ऑडिट | DopaBrain",
    "heroTitle": "ईयर-एंड बर्नआउट और क्लोज़र ऑडिट",
    "heroLead": "दिसंबर की थकान जांचें और 3 मुख्य लक्ष्यों के साथ शांत वर्षांत योजना बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Audit Burnout Akhir Tahun & Rencana Penutup | DopaBrain",
    "heroTitle": "Audit Burnout Akhir Tahun & Rencana Penutup",
    "heroLead": "Atasi lelah Desember dengan 3 target inti dan penjadwalan ulang yang tenang ke Januari.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yıl Sonu Tükenmişlik ve Kapanış Denetimi | DopaBrain",
    "heroTitle": "Yıl Sonu Tükenmişlik ve Kapanış Denetimi",
    "heroLead": "Aralık yorgunluğunu 3 temel hedef ve suçluluksuz Ocak erteleme planıyla azaltın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "fake_dec_deadline",
    "en": "Artificial Dec 31 Urgency — Treating optional projects as life-or-death year-end deadlines",
    "ko": "가짜 12월 31일 마감 — 굳이 올해 안 끝내도 될 일까지 억지 마감에 몰아넣음"
  },
  {
    "id": "social_event_pileup",
    "en": "Holiday Event Overload — Stacking dinners, errands, and deadlines with zero blank evenings",
    "ko": "연말 모임 과밀 — 모임·선물·마감이 겹쳐 비어 있는 저녁이 하루도 없음"
  },
  {
    "id": "unclaimed_wins",
    "en": "Zero Celebration — Focusing only on missed goals while erasing 10 real wins",
    "ko": "성취 삭제 — 해낸 10가지는 잊고 못 끝낸 2가지만 자책함"
  },
  {
    "id": "short_daylight_dip",
    "en": "Winter Daylight Slump — Expecting July energy during the darkest weeks of the year",
    "ko": "일조량 저하 무시 — 가장 해가 짧은 계절에 여름과 같은 체력을 강요함"
  },
  {
    "id": "open_inbox_carryover",
    "en": "No Clean Out-of-Office Boundary — Leaving half-open threads hanging over break",
    "ko": "휴식 경계 실종 — 연휴 전 정리를 안 해 쉬면서도 머리가 계속 일함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Peak December Drain — Cut Scope to 3 Essential Finishes & Protect 2 Blank Evenings",
    "koT": "연말 소진 경보 — 핵심 마감 3개만 남기고 빈 저녁 2일을 즉시 잠그세요",
    "enD": "Zeigarnik-effect research shows unclosed goals drain mental RAM until they receive an explicit \"done, deferred to January, or dropped\" decision. Closing loops intentionally beats frantic multitasking.",
    "koD": "자이가르닉 효과 연구에 따르면 미완결 목표는 \"완료·1월 이월·종료\" 중 하나로 명시적 결정을 내릴 때까지 뇌 메모리를 계속 소모합니다.",
    "enS": "\"To deliver quality on our top priorities before break, let’s move [item] to the first week of January—does Jan 8 work?\"",
    "koS": "\"연말 핵심 과제 완성도를 지키기 위해 [항목]은 1월 첫째 주 일정으로 깔끔히 배치해 진행하면 어떨까요?\"",
    "enL": [
      "Pick only 3 true year-end must-finishes and explicitly reschedule everything else to January.",
      "Write 5 real wins from this year before writing a single resolution for next year.",
      "Schedule 2 completely blank evenings this week with zero errands or events."
    ],
    "koL": [
      "올해 꼭 끝낼 3가지만 남기고 나머지는 모두 1월 날짜로 공식 이월하세요.",
      "새해 계획을 쓰기 전에 올해 실제로 버텨내고 해낸 5가지를 먼저 적으세요.",
      "이번 주 약속과 집안일 없는 완전한 빈 저녁 2일을 캘린더에 잠그세요."
    ]
  },
  "mid": {
    "enT": "Manageable Pace — Lock Your Break Boundary & Capture 5 Yearly Wins",
    "koT": "안정적 마무리 — 휴식 경계선과 올해의 성취 5줄만 정리하면 완벽합니다",
    "enD": "Your workload is within reach; trimming optional holiday commitments keeps your energy intact.",
    "koD": "충분히 관리 가능한 상태입니다. 선택적 일정 1~2개만 덜어내면 편안히 연말을 보낼 수 있습니다.",
    "enS": "\"Close 3 things well, defer the rest cleanly, enter the new year rested.\"",
    "koS": "\"3가지를 깔끔히 닫고 나머지는 정중히 이월하며 회복된 상태로 새해를 맞는다.\"",
    "enL": [
      "Set a crisp out-of-office or quiet-hours responder early.",
      "Decline 1 low-joy optional gathering warmly.",
      "Get 15 minutes of morning daylight daily to steady winter mood."
    ],
    "koL": [
      "연휴 전 부재중·응답 지연 안내를 미리 세팅해 두세요.",
      "부담만 큰 선택 모임 1개는 따뜻하게 정중히 거절하세요.",
      "아침 15분 햇빛으로 겨울철 기분 리듬을 챙기세요."
    ]
  },
  "high": {
    "enT": "Grounded Year-End Rhythm — Finishing With Clarity & Rest",
    "koT": "여유로운 연말 리듬 — 명료함과 회복을 모두 지키고 있습니다",
    "enD": "You are closing the year intentionally without letting artificial urgency hijack your peace.",
    "koD": "불필요한 조급함에 휘둘리지 않고 차분하게 한 해를 정리하고 있습니다.",
    "enS": "\"Rest is part of the craft, not a prize earned only after exhaustion.\"",
    "koS": "\"휴식은 탈진 뒤에 받는 상이 아니라 다음 해를 여는 기본 설계다.\"",
    "enL": [
      "Savor unhurried time with people who recharge you.",
      "Keep January’s first week intentionally light.",
      "Celebrate showing up steadily all year."
    ],
    "koL": [
      "에너지를 채워주는 사람들과 여유로운 시간을 만끽하세요.",
      "1월 첫 주는 무리한 회의 없이 가볍게 열어 두세요.",
      "한 해 동안 꾸준히 걸어온 스스로를 따뜻하게 격려하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_year_end_burnout_v1";
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
      window.gtag('event', "year_end_burnout_audit_complete", {
        tool_slug: "year-end-burnout-closure-audit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/year-end-burnout-closure-audit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "year-end-burnout-closure-audit",
        filename: 'dopabrain-year-end-burnout-closure-audit-card.png',
        badge: "SEASONAL RECOVERY • YEAR-END BURNOUT & CLOSURE AUDIT",
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
