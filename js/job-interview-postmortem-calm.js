/* Post-Interview Replay & Waiting-Period Calm Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Post-Interview Replay & Waiting-Period Calm Kit | DopaBrain",
    "metaDesc": "Replaying one awkward answer on loop for 3 days while refreshing your inbox every ten minutes? Separate useful 5-minute takeaways from harsh self-rumination locally.",
    "kicker": "POST-INTERVIEW REPLAY • WAITING-PERIOD CALM",
    "heroTitle": "Post-Interview Replay & Waiting-Period Calm Kit",
    "heroLead": "Replaying one awkward answer on loop for 3 days while refreshing your inbox every ten minutes? Separate useful 5-minute takeaways from harsh self-rumination locally.",
    "chip1": "5 Replay Loops",
    "chip2": "5-Min Clean Debrief",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR POST-INTERVIEW RUMINATION SIGNALS (1 = LIGHT, 5 = ON LOOP)",
    "step1Title": "Which post-interview thought loops are draining your week?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: 1 thing that went genuinely well + 1 crisp note for future interviews (100% local):",
    "ctaBtn": "Close My Post-Interview Loop",
    "resultBadge": "STEP 2 • YOUR CLEAN POST-INTERVIEW CLOSURE PLAN",
    "noteTitle": "Balanced 2-Line Interview Takeaway",
    "meterLabel": "Post-Interview Equanimity Score",
    "scriptTitle": "Clean Mental Closure Line",
    "stepsTitle": "3 Calm Moves While Waiting for Interview Decisions",
    "stickyTitle": "Is job-search uncertainty keeping your nervous system wired?",
    "stickySub": "Take the free 60-second Stress Check next",
    "stickyBtn": "Stress Check →",
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
    "title": "면접 후 이불킥·결과 대기 불안 진정 키트 | DopaBrain",
    "metaDesc": "면접이 끝난 뒤 아쉬운 답변 하나만 며칠째 곱씹으며 메일함을 10분마다 새로고침하고 있나요? 유익한 5분 복기와 소모적인 자책을 비공개로 분리하세요.",
    "kicker": "면접 후 복기 과몰입 · 결과 대기 불안 진정",
    "heroTitle": "면접 후 이불킥·결과 대기 불안 진정 키트",
    "heroLead": "면접이 끝난 뒤 아쉬운 답변 하나만 며칠째 곱씹으며 메일함을 10분마다 새로고침하고 있나요? 유익한 5분 복기와 소모적인 자책을 비공개로 분리하세요.",
    "chip1": "5가지 면접 후회 루프",
    "chip2": "5분 깔끔한 복기",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 면접 후 곱씹기·대기 불안 신호 점검 (1 = 가벼움, 5 = 계속 맴돔)",
    "step1Title": "면접 직후 지금 가장 에너지를 빼앗고 있는 생각 루프는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 실제로 잘 답한 점 1가지 + 다음 면접용 핵심 메모 1줄 (100% 로컬):",
    "ctaBtn": "면접 후 곱씹기 정리 & 대기 평온 플랜 보기",
    "resultBadge": "2단계 • 깔끔한 면접 복기 및 대기 프로토콜",
    "noteTitle": "균형 잡힌 2줄 면접 복기 메모",
    "meterLabel": "결과 대기 평정심 지수",
    "scriptTitle": "곱씹기를 멈추는 현실 수용 문장",
    "stepsTitle": "결과를 기다리는 동안 마음을 지키는 3단계",
    "stickyTitle": "구직·이직 대기로 스트레스 지수가 계속 높은 상태인가요?",
    "stickySub": "무료 60초 스트레스 체크로 현재 긴장도 확인하기",
    "stickyBtn": "스트레스 체크 →",
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
    "title": "面试后反复复盘与等结果安心工具 | DopaBrain",
    "heroTitle": "面试后反复复盘与等结果安心工具",
    "heroLead": "5分钟温和复盘，停止反复回放小失误与频繁刷新邮箱的等待焦虑。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "面接後の反省ループ＆結果待ちリセット | DopaBrain",
    "heroTitle": "面接後の反省ループ＆結果待ちリセット",
    "heroLead": "面接の1フレーズを思い返す不安とメール確認癖を5分の整理で手放します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Calma Post-Entrevista y Espera | DopaBrain",
    "heroTitle": "Kit de Calma Post-Entrevista y Espera",
    "heroLead": "Detén la repetición mental tras entrevistas y el estrés de esperar respuesta.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Calma Pós-Entrevista de Emprego | DopaBrain",
    "heroTitle": "Kit de Calma Pós-Entrevista de Emprego",
    "heroLead": "Encerre o loop de autocrítica pós-entrevista e a ansiedade pela resposta.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Nach-Interview-Grübelstopp & Warte-Ruhe | DopaBrain",
    "heroTitle": "Nach-Interview-Grübelstopp & Warte-Ruhe",
    "heroLead": "Beende Gedankenschleifen nach Vorstellungsgesprächen mit einem klaren 5-Min-Debrief.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Calme Post-Entretien & Attente | DopaBrain",
    "heroTitle": "Kit Calme Post-Entretien & Attente",
    "heroLead": "Stoppez les ruminations après un entretien d’embauche avec un bilan clair de 5 min.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Спокойствие после собеседования | DopaBrain",
    "heroTitle": "Спокойствие после собеседования",
    "heroLead": "Остановите прокручивание ответов и стресс ожидания оффера за 5 минут.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "पोस्ट-इंटरव्यू रीप्ले व वेटिंग काम किट | DopaBrain",
    "heroTitle": "पोस्ट-इंटरव्यू रीप्ले व वेटिंग काम किट",
    "heroLead": "इंटरव्यू के बाद की गलतियाँ दोहराना और ईमेल रिफ्रेश करने की चिंता 5 मिनट में शांत करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Tenang Pasca-Wawancara Kerja | DopaBrain",
    "heroTitle": "Kit Tenang Pasca-Wawancara Kerja",
    "heroLead": "Hentikan overthinking jawaban wawancara dan stres menunggu kabar HRD dalam 5 menit.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Mülakat Sonrası Düşünce Durdurma Kiti | DopaBrain",
    "heroTitle": "Mülakat Sonrası Düşünce Durdurma Kiti",
    "heroLead": "Mülakat sonrası pişmanlık döngüsünü ve sonuç bekleme kaygısını 5 dk’da kapatın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "cringe_replay",
    "en": "Highlight-Reel Cringe — Replaying one imperfect answer while erasing 9 good answers",
    "ko": "실수 확대 재생 — 잘한 9개 답변은 잊고 아쉬운 1문장만 무한 재생함"
  },
  {
    "id": "inbox_refresh",
    "en": "Inbox Refresh Reflex — Checking email and phone notifications dozens of times daily",
    "ko": "메일함 강박 새로고침 — 결과 연락이 왔는지 하루 수십 번 폰을 확인함"
  },
  {
    "id": "mind_reading_panel",
    "en": "Panel Mind-Reading — Interpreting a busy interviewer’s neutral face as certain rejection",
    "ko": "면접관 표정 독심술 — 피곤하거나 무표정한 반응을 탈락 확정으로 해석함"
  },
  {
    "id": "all_eggs_basket",
    "en": "Single-Outcome Attachment — Putting your whole mood and future on this one role",
    "ko": "단일 결과 올인 — 이 한 자리의 합불에 내 자존감과 미래 전체를 걸어둠"
  },
  {
    "id": "delayed_silences",
    "en": "Silence Catastrophizing — Assuming 4 quiet days means disaster rather than slow HR scheduling",
    "ko": "침묵 확대 해석 — 내부 결재 지연일 뿐인데 연락이 늦어지면 무조건 탈락이라 단정함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Post-Interview Loop — Archive the Debrief & Reclaim Today",
    "koT": "면접 복기 과몰입 — 5분 메모로 복기를 종결하고 오늘의 일상을 되찾으세요",
    "enD": "Research on post-event processing shows replaying social performances selectively amplifies perceived flaws while hiding what went right. Hiring decisions also depend heavily on internal headcount, timing, and budget—factors outside your control.",
    "koD": "사후 반추 연구에 따르면 면접 직후 기억은 실수만 3배 크게 확대합니다. 게다가 채용 결과에는 내부 예산·타이밍·포지션 적합도 등 내 통제 밖 변수가 매우 큽니다. 5분 메모 후 복기 창을 닫으세요.",
    "enS": "\"I did my part in that room. Replaying my answers will not change a hiring committee’s calendar—today belongs back to my life.\"",
    "koS": "\"나는 그 자리에서 최선을 다했어. 지금 머릿속으로 되감기해도 면접관의 일정은 바뀌지 않아. 오늘 하루는 내 삶으로 돌려놓을게.\"",
    "enL": [
      "Write 1 strength + 1 tweak in 2 minutes, then declare the postmortem officially CLOSED.",
      "Limit inbox checks to 2 fixed windows per day (11 AM and 4 PM) instead of every 10 minutes.",
      "Do one completely non-career physical or joyful activity tonight to break waiting-room limbo."
    ],
    "koL": [
      "잘한 점 1개 + 개선점 1개만 2분 안에 적고 이번 면접 복기를 공식 종료 선언하세요.",
      "메일함 확인은 오전 11시·오후 4시 딱 2회로 제한해 강박 루프를 끊으세요.",
      "오늘 저녁은 취업·이직과 무관한 운동이나 산책으로 뇌의 대기 모드를 끄세요."
    ]
  },
  "mid": {
    "enT": "Mild Waiting Limbo — Batch Email Checks & Keep Momentum Moving",
    "koT": "가벼운 대기 초조함 — 메일 확인을 묶고 다음 기회의 파이프라인을 가볍게 유지하세요",
    "enD": "You have good perspective overall; keeping one or two light parallel actions prevents any single role from holding your mood hostage.",
    "koD": "전반적으로 균형 잡힌 시각을 갖고 계십니다. 결과 통보를 기다리는 동안 가벼운 병행 루틴만 유지하면 흔들리지 않습니다.",
    "enS": "\"Hiring timelines are slow by nature; silence is logistics, not a verdict.\"",
    "koS": "\"채용 절차는 원래 느려. 연락이 아직 없는 건 행정 일정이지 내 가치에 대한 판정이 아니야.\"",
    "enL": [
      "Send one brief, gracious thank-you note if appropriate, then step back.",
      "Set a calm calendar reminder to follow up politely after 7 business days.",
      "Keep your normal sleep, exercise, and friend plans intact all week."
    ],
    "koL": [
      "필요하다면 짧은 감사 메일 1통만 보내고 깔끔하게 손을 떼세요.",
      "영업일 기준 7일 뒤에 정중히 문의할 캘린더 알림 1개만 걸어두세요.",
      "결과와 무관하게 이번 주 수면·운동·지인 약속 루틴을 그대로 지키세요."
    ]
  },
  "high": {
    "enT": "Grounded Career Equanimity — Strong Long-Game Mindset",
    "koT": "단단한 구직 평정심 — 건강한 장기전 마인드를 유지하고 있습니다",
    "enD": "You treat interviews as two-way conversations rather than personal verdicts. Keep that calm clarity as offers and next steps unfold.",
    "koD": "면접을 일방적 심판이 아닌 상호 적합성 대화로 바라보는 건강한 태도입니다. 이 차분한 중심을 끝까지 지키세요.",
    "enS": "\"Every interview sharpens my clarity on the exact team and role I want next.\"",
    "koS": "\"모든 면접은 내가 진짜 원하는 팀과 역할을 더 선명하게 만드는 과정이다.\"",
    "enL": [
      "Save your 2-line notes in a reusable interview prep log.",
      "Celebrate showing up and articulating your work clearly.",
      "Rest well so you bring fresh energy to the next conversation."
    ],
    "koL": [
      "2줄 복기 메모를 나만의 면접 노트 폴더에 가볍게 쌓아 두세요.",
      "긴장되는 자리에 당당히 임해 내 경험을 설명한 스스로를 칭찬하세요.",
      "다음 대화를 위해 충분히 쉬며 맑은 에너지를 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_interview_postmortem_v1";
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
      window.gtag('event', "interview_postmortem_complete", {
        tool_slug: "job-interview-postmortem-calm",
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
      var shareUrl = "https://dopabrain.com/portal/tools/job-interview-postmortem-calm.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "job-interview-postmortem-calm",
        filename: 'dopabrain-job-interview-postmortem-calm-card.png',
        badge: "POST-INTERVIEW REPLAY • WAITING-PERIOD CALM",
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
