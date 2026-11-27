/* 2-Minute Cognitive Warmup & Attention Primer
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "2-Minute Cognitive Warmup & Attention Primer | DopaBrain",
    "metaDesc": "Jumping straight from noisy messages into deep analysis leaves \"attention residue\" for 20+ minutes. Audit 5 focus leaks locally and run a crisp 2-minute cognitive warmup before deep work.",
    "kicker": "BRAIN TRAINING • 2-MINUTE COGNITIVE FOCUS WARMUP",
    "heroTitle": "2-Minute Cognitive Warmup & Attention Primer",
    "heroLead": "Jumping straight from noisy messages into deep analysis leaves \"attention residue\" for 20+ minutes. Audit 5 focus leaks locally and run a crisp 2-minute cognitive warmup before deep work.",
    "chip1": "5 Focus Leaks",
    "chip2": "2-Min Primer",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR PRE-SESSION ATTENTION RESIDUE (1 = LOCKED IN, 5 = SCATTERED)",
    "step1Title": "What is pulling cognitive RAM away before you start?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: Single problem or study chapter I am priming my brain for (100% local):",
    "ctaBtn": "Build My 2-Minute Focus Warmup",
    "resultBadge": "STEP 2 • YOUR 2-MINUTE COGNITIVE ATTENTION PRIMER",
    "noteTitle": "Locked-In Session Target",
    "meterLabel": "Deep-Focus Readiness",
    "scriptTitle": "Pre-Session Launch Cue",
    "stepsTitle": "3 Fast Steps to Clear Attention Residue in 120 Seconds",
    "stickyTitle": "Brain warmed up? Lock into a focused countdown right now",
    "stickySub": "Open the free Pomodoro Focus Timer next",
    "stickyBtn": "Start Timer →",
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
    "title": "2분 두뇌 집중 워밍업 & 주의력 예열 루틴 | DopaBrain",
    "metaDesc": "메신저와 잡무에서 바로 고난도 집중 작업으로 넘어가면 20분 넘게 주의력 잔여물이 남습니다. 5가지 집중 누수를 점검하고 2분 두뇌 예열 루틴으로 몰입 스위치를 켜세요.",
    "kicker": "두뇌 워밍업 · 2분 주의력 전환 & 집중 시동 플래너",
    "heroTitle": "2분 두뇌 집중 워밍업 & 주의력 예열 루틴",
    "heroLead": "메신저와 잡무에서 바로 고난도 집중 작업으로 넘어가면 20분 넘게 주의력 잔여물이 남습니다. 5가지 집중 누수를 점검하고 2분 두뇌 예열 루틴으로 몰입 스위치를 켜세요.",
    "chip1": "5가지 집중 누수",
    "chip2": "2분 예열 루틴",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 작업 직전 주의력 분산 신호 점검 (1 = 몰입 준비, 5 = 산만함)",
    "step1Title": "집중 시작 직전 머릿속 작업기억(RAM)을 가장 많이 차지하는 요소는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 예열 후 바로 몰입할 단일 과제나 학습 챕터 (100% 로컬):",
    "ctaBtn": "내 2분 집중 워밍업 루틴 보기",
    "resultBadge": "2단계 • 2분 두뇌 집중 예열 프로토콜",
    "noteTitle": "몰입 고정 목표",
    "meterLabel": "딥포커스 준비도",
    "scriptTitle": "집중 시작 트리거 문구",
    "stepsTitle": "120초 만에 주의력 잔여물을 비우는 3단계",
    "stickyTitle": "두뇌 예열이 끝났다면 바로 집중 타이머를 켜고 시작할까요?",
    "stickySub": "무료 뽀모도로 타이머로 즉시 몰입 실행",
    "stickyBtn": "타이머 시작 →",
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
    "title": "2分钟大脑专注热身与注意力清空器 | DopaBrain",
    "heroTitle": "2分钟大脑专注热身与注意力清空器",
    "heroLead": "120秒清除任务切换残留，快速进入深度专注状态。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "2分間・脳の集中ウォームアップ＆注意リセット | DopaBrain",
    "heroTitle": "2分間・脳の集中ウォームアップ＆注意リセット",
    "heroLead": "作業前の注意残留を120秒で払い、深い集中モードへ切り替えます。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Calentamiento Cognitivo de Enfoque en 2 Minutos | DopaBrain",
    "heroTitle": "Calentamiento Cognitivo de Enfoque en 2 Minutos",
    "heroLead": "Limpia el residuo atencional y prepara tu mente para trabajo profundo.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Aquecimento Cognitivo de Foco em 2 Minutos | DopaBrain",
    "heroTitle": "Aquecimento Cognitivo de Foco em 2 Minutos",
    "heroLead": "Limpe o resíduo de atenção e entre em foco profundo em 120 segundos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "2-Minuten Kognitives Fokus-Warmup | DopaBrain",
    "heroTitle": "2-Minuten Kognitives Fokus-Warmup",
    "heroLead": "Löse Aufmerksamkeitsreste in 120 Sekunden vor tiefem Arbeiten.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Échauffement Cognitif & Focus en 2 Minutes | DopaBrain",
    "heroTitle": "Échauffement Cognitif & Focus en 2 Minutes",
    "heroLead": "Évacuez le résidu attentionnel et lancez votre concentration profonde en 120 s.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "2-минутная когнитивная разминка для фокуса | DopaBrain",
    "heroTitle": "2-минутная когнитивная разминка для фокуса",
    "heroLead": "Уберите остаточное внимание за 120 секунд перед глубокой работой.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "2-मिनट कॉग्निटिव फोकस वार्मअप प्राइमर | DopaBrain",
    "heroTitle": "2-मिनट कॉग्निटिव फोकस वार्मअप प्राइमर",
    "heroLead": "120 सेकंड में ध्यान भटकाव साफ़ करें और डीप वर्क शुरू करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pemanasan Fokus Kognitif 2 Menit | DopaBrain",
    "heroTitle": "Pemanasan Fokus Kognitif 2 Menit",
    "heroLead": "Bersihkan sisa distraksi dan aktifkan mode kerja mendalam dalam 120 detik.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "2 Dakikalık Bilişsel Odak Isınma Rutini | DopaBrain",
    "heroTitle": "2 Dakikalık Bilişsel Odak Isınma Rutini",
    "heroLead": "Dikkat kalıntılarını 120 saniyede temizleyip derin çalışmaya geçin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "unfinished_chat_loop",
    "en": "Open Chat Residue — Mentally replaying an email or message I just read",
    "ko": "미결 메신저 잔상 — 방금 본 메시지·메일 답장이 머릿속에 맴돔"
  },
  {
    "id": "visual_desk_clutter",
    "en": "Visual Screen Clutter — 15+ browser tabs and badges competing for eye focus",
    "ko": "시각적 탭 잡음 — 15개 이상 탭과 빨간 배지가 시야를 분산시킴"
  },
  {
    "id": "undefined_first_move",
    "en": "Fuzzy First Action — Knowing the topic but not the exact first 60-second step",
    "ko": "첫 동작 모호함 — 주제는 아는데 첫 1분에 무엇부터 칠지 안 정해짐"
  },
  {
    "id": "jittery_tempo",
    "en": "High-Speed Restlessness — Fast shallow breathing after rushing between tasks",
    "ko": "조급한 호흡 리듬 — 일정에 쫓겨 호흡이 얕고 마음이 급함"
  },
  {
    "id": "phone_in_sight",
    "en": "Phone on Desk — Smartphone sitting face-up within peripheral vision",
    "ko": "시야 안의 스마트폰 — 책상 위 화면이 시야 끝에 계속 걸림"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Attention Residue — Run Full 2-Minute RAM Flush Before Starting",
    "koT": "주의력 잔여물 높음 — 2분 작업기억 비우기 후 시작해야 효율이 2배 오릅니다",
    "enD": "Sophie Leroy’s landmark attention-residue studies show switching tasks without closing open mental loops leaves substantial cognitive drag. A 120-second physical & visual flush clears your working-memory desk cleanly.",
    "koD": "소피 르로이의 주의력 잔여물 연구에 따르면 열린 생각의 고리를 닫지 않고 다음 작업으로 넘어가면 집중 효율이 크게 떨어집니다. 딱 2분간 시각·메모·시선 정리를 거치면 몰입 속도가 확 빨라집니다.",
    "enS": "\"Park every stray thought on paper, hide the phone, fix my gaze on one spot for 30 seconds, and begin.\"",
    "koS": "\"떠다니는 잡념은 메모에 주차하고, 폰을 치우고, 30초 한 점 응시 뒤 바로 시작한다.\"",
    "enL": [
      "Write any nagging errand on a sticky note so working memory stops rehearsing it.",
      "Move phone out of sight and switch your work window to full-screen mode.",
      "Hold a steady gaze on one visual anchor for 30 seconds while breathing slowly, then type line 1."
    ],
    "koL": [
      "신경 쓰이는 잡일은 포스트잇에 1줄 적어 작업기억에서 내려놓으세요.",
      "스마트폰을 시야 밖으로 치우고 작업 창을 전체 화면으로 전환하세요.",
      "한 점을 30초간 조용히 응시하며 천천히 숨을 고른 뒤 첫 줄을 바로 시작하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Scatter — 60-Second Full-Screen & First-Step Lock",
    "koT": "가벼운 분산 — 60초 전체화면 전환 + 첫 동작 고정이면 충분합니다",
    "enD": "You are close to flow; hiding extra tabs and naming your exact opening move unlocks smooth concentration.",
    "koD": "몰입 문턱 바로 앞입니다. 여분 탭만 닫고 첫 1분 동작을 정하면 부드럽게 집중에 들어갑니다.",
    "enS": "\"One full-screen window, one exact first sentence.\"",
    "koS": "\"전체화면 창 하나, 명확한 첫 문장 하나.\"",
    "enL": [
      "Collapse extra windows into one minimized group.",
      "Name the exact first 2-minute action.",
      "Set a clean 25–45 minute focus timer."
    ],
    "koL": [
      "다른 창들은 한 번에 최소화해 시야를 비우세요.",
      "처음 2분 안에 할 아주 구체적인 동작 1개를 정하세요.",
      "25~45분 타이머를 켜고 첫 블록을 완주하세요."
    ]
  },
  "high": {
    "enT": "Clean Focus State — Enter Deep Work Immediately",
    "koT": "완벽한 집중 준비 상태 — 지금 바로 깊은 몰입에 들어가세요",
    "enD": "Minimal residue detected. Start your timer and stay in flow without over-preparing.",
    "koD": "주의력 누수가 거의 없습니다. 더 준비하지 말고 바로 타이머를 누르고 몰입하세요.",
    "enS": "\"Start now and protect the next 45 minutes.\"",
    "koS": "\"지금 바로 시작해 다음 45분을 지킨다.\"",
    "enL": [
      "Start immediately on the hardest piece first.",
      "Batch questions for after the block.",
      "Take a screen-free 5-minute walk when the timer ends."
    ],
    "koL": [
      "가장 어려운 핵심 부분부터 바로 손을 대세요.",
      "중간에 떠오른 잡일은 메모에만 적고 블록 뒤에 처리하세요.",
      "타이머가 끝나면 화면 없이 5분간 가볍게 움직이세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_focus_warmup_drill_v1";
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
      window.gtag('event', "focus_warmup_drill_complete", {
        tool_slug: "dual-n-back-focus-warmup",
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
      var shareUrl = "https://dopabrain.com/portal/tools/dual-n-back-focus-warmup.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "dual-n-back-focus-warmup",
        filename: 'dopabrain-dual-n-back-focus-warmup-card.png',
        badge: "BRAIN TRAINING • 2-MINUTE COGNITIVE FOCUS WARMUP",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#6366f1",
        accent2: "#ec4899"
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
