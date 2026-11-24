/* Caregiver Exhaustion & Respite Support Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Caregiver Exhaustion & Respite Support Planner | DopaBrain",
    "metaDesc": "Caring for a parent, child, or partner while running on fumes and feeling guilty whenever you rest? Check 5 caregiver burnout loads locally and draft one concrete respite ask.",
    "kicker": "CAREGIVER FATIGUE • SUSTAINABLE RESPITE",
    "heroTitle": "Caregiver Exhaustion & Respite Support Planner",
    "heroLead": "Caring for a parent, child, or partner while running on fumes and feeling guilty whenever you rest? Check 5 caregiver burnout loads locally and draft one concrete respite ask.",
    "chip1": "5 Caregiver Loads",
    "chip2": "Concrete Ask Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR CURRENT CAREGIVING LOAD (1 = SUPPORTED, 5 = SOLO OVERLOAD)",
    "step1Title": "Which invisible caregiving demands are weighing heaviest right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One specific task (groceries, 1-hour sit, phone call) I can delegate this week (100% local):",
    "ctaBtn": "Build My Caregiver Respite Plan",
    "resultBadge": "STEP 2 • YOUR GUILT-FREE CAREGIVER SUSTAINABILITY PLAN",
    "noteTitle": "One Concrete Task to Hand Off This Week",
    "meterLabel": "Caregiver Sustainability Reserve",
    "scriptTitle": "Specific, Easy-to-Say-Yes Respite Request",
    "stepsTitle": "3 Sustainable Moves to Protect the Caregiver",
    "stickyTitle": "Want to check your body’s hidden chronic stress load?",
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
    "title": "돌봄·간병 피로 점검 & 죄책감 없는 휴식 플래너 | DopaBrain",
    "metaDesc": "부모님·아이·가족을 돌보느라 정작 내 에너지가 바닥났는데 쉬면 죄책감이 드나요? 5가지 돌봄 소진 부하를 비공개로 점검하고 현실적인 도움 요청 문장을 준비하세요.",
    "kicker": "돌봄 피로·간병 소진 점검 · 지속 가능 휴식 플랜",
    "heroTitle": "돌봄·간병 피로 점검 & 죄책감 없는 휴식 플래너",
    "heroLead": "부모님·아이·가족을 돌보느라 정작 내 에너지가 바닥났는데 쉬면 죄책감이 드나요? 5가지 돌봄 소진 부하를 비공개로 점검하고 현실적인 도움 요청 문장을 준비하세요.",
    "chip1": "5가지 돌봄 부하",
    "chip2": "구체적 도움 요청",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 돌봄 부담 점검 (1 = 여유 있음, 5 = 혼자 과부하)",
    "step1Title": "지금 돌봄 과정에서 나를 가장 지치게 하는 보이지 않는 부담은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주 가족·지인·서비스에 맡길 수 있는 구체적 일 1가지 (100% 로컬):",
    "ctaBtn": "내 돌봄 휴식·도움 요청 플랜 보기",
    "resultBadge": "2단계 • 죄책감 없는 지속 가능 돌봄 회복 플랜",
    "noteTitle": "이번 주 나누어 맡길 구체적 항목 1가지",
    "meterLabel": "돌봄 지속 가능 에너지 지수",
    "scriptTitle": "상대가 바로 수락하기 쉬운 구체적 도움 요청 멘트",
    "stepsTitle": "돌보는 나 자신을 지키기 위한 3가지 현실 단계",
    "stickyTitle": "돌봄 속에 누적된 나의 전반적인 스트레스 지수도 점검해 볼까요?",
    "stickySub": "무료 60초 스트레스 체크로 현재 회복 필요도 확인하기",
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
    "title": "照护者倦怠与喘息支持规划师 | DopaBrain",
    "heroTitle": "照护者倦怠与喘息支持规划师",
    "heroLead": "本地评估5大照护负荷，生成具体易接受的求助话术与无负罪感休息方案。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "介護・ケア疲労＆レスパイト計画 | DopaBrain",
    "heroTitle": "介護・ケア疲労＆レスパイト計画",
    "heroLead": "5つのケア負担を整理し、罪悪感なく頼める具体的なサポート依頼文を作成します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Alivio para Fatiga del Cuidador | DopaBrain",
    "heroTitle": "Plan de Alivio para Fatiga del Cuidador",
    "heroLead": "Evalúa 5 cargas de cuidado y prepara una petición concreta de descanso sin culpa.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Alívio para Fadiga do Cuidador | DopaBrain",
    "heroTitle": "Plano de Alívio para Fadiga do Cuidador",
    "heroLead": "Mapeie 5 sobrecargas de cuidado e monte um pedido objetivo de pausa sem culpa.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Pflege-Erschöpfungs- & Entlastungsplaner | DopaBrain",
    "heroTitle": "Pflege-Erschöpfungs- & Entlastungsplaner",
    "heroLead": "Prüfe 5 Pflegebelastungen lokal und formuliere eine konkrete, schuldfreie Bitte um Pause.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Répit & Épuisement de l’Aidant | DopaBrain",
    "heroTitle": "Plan Répit & Épuisement de l’Aidant",
    "heroLead": "Évaluez 5 charges d’aidant localement et préparez une demande de relais concrète.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План отдыха при выгорании ухаживающего | DopaBrain",
    "heroTitle": "План отдыха при выгорании ухаживающего",
    "heroLead": "Оцените 5 нагрузок ухода и составьте конкретную просьбу о передышке без вины.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "केयरगिवर थकान व रेस्पाइट प्लानर | DopaBrain",
    "heroTitle": "केयरगिवर थकान व रेस्पाइट प्लानर",
    "heroLead": "5 देखभाल बोझ जांचें और बिना अपराधबोध के एक ठोस मदद अनुरोध तैयार करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Pemulihan Lelah Caregiver | DopaBrain",
    "heroTitle": "Perencana Pemulihan Lelah Caregiver",
    "heroLead": "Audit 5 beban pengasuhan secara lokal dan susun permintaan bantuan konkret tanpa rasa bersalah.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Bakım Veren Yorgunluğu ve Mola Planlayıcı | DopaBrain",
    "heroTitle": "Bakım Veren Yorgunluğu ve Mola Planlayıcı",
    "heroLead": "5 bakım yükünü değerlendirin ve suçluluk duymadan somut destek isteği hazırlayın.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "solo_default",
    "en": "Default Solo Carrier — Handling appointments, meds, and meals alone without backup",
    "ko": "단독 전담 부담 — 병원·약·식사·행정을 대체 인력 없이 혼자 떠안고 있음"
  },
  {
    "id": "rest_guilt",
    "en": "Rest Guilt — Feeling selfish whenever you step away for 30 minutes of personal quiet",
    "ko": "휴식 죄책감 — 30분만 혼자 쉬어도 이기적인 것 같아 마음이 불편함"
  },
  {
    "id": "on_call_alert",
    "en": "24/7 On-Call Vigilance — Keeping ears open and phone loud even while trying to sleep",
    "ko": "24시간 대기 긴장 — 잠들거나 쉴 때도 혹시 모를 호출에 귀를 열어둠"
  },
  {
    "id": "erased_self",
    "en": "Postponed Own Care — Skipping your own checkups, meals, or friendships for months",
    "ko": "내 건강 후순위 — 정작 나의 병원·식사·친구 만남은 몇 달째 미루는 중"
  },
  {
    "id": "silent_grief",
    "en": "Unspoken Resentment & Grief — Carrying complicated emotions with nobody safe to vent to",
    "ko": "말 못 할 감정 누적 — 서운함·막막함·슬픔을 털어놓을 안전한 창구가 없음"
  }
];
  var TIERS = {
  "low": {
    "enT": "Critical Caregiver Depletion — Shift from Solo Hero to Specific Delegation",
    "koT": "돌봄 소진 위험 — 혼자 버티기에서 \"구체적 1건 위임\"으로 즉시 전환하세요",
    "enD": "Longitudinal caregiver studies show solo vigilance without planned respite harms both caregiver health and care quality. Asking for one narrow, time-boxed task makes it far easier for others to say yes.",
    "koD": "돌봄 연구에 따르면 휴식 없는 단독 간병은 돌보는 사람의 건강과 돌봄의 질을 동시에 떨어뜨립니다. \"도와줘\" 대신 시간과 내용이 분명한 1가지를 요청할 때 주변의 실제 지원율이 크게 올라갑니다.",
    "enS": "\"I need a 2-hour recharge window this week to stay steady. Could you cover [specific time/errand] on Thursday or Saturday?\"",
    "koS": "\"지치지 않고 계속 잘 돌보려면 이번 주 2시간 정도 온전히 쉬는 시간이 꼭 필요해. 목요일이나 토요일 중 [특정 심부름/2시간 돌봄]을 맡아줄 수 있을까?\"",
    "enL": [
      "Replace vague \"I’m fine\" replies with one concrete 60-minute task someone can take over this week.",
      "Book one postponed personal health or rest anchor for yourself before Friday.",
      "Explore one local/community respite option, delivery shortcut, or support group to widen your safety net."
    ],
    "koL": [
      "\"괜찮아\" 대신 이번 주 누군가 대신해 줄 수 있는 60분짜리 구체적 일 1개를 바로 요청하세요.",
      "금요일 전까지 미뤄둔 나의 건강 검진·식사·휴식 앵커 1개를 먼저 예약하세요.",
      "반찬 배달·지역 돌봄 지원 서비스·돌봄 커뮤니티 등 외부 완충 장치를 1가지 찾아보세요."
    ]
  },
  "mid": {
    "enT": "Heavy Stretch — Lock In Two Weekly Micro-Respite Pockets",
    "koT": "부담 누적 구간 — 주 2회 고정 미니 휴식 포켓을 먼저 확보하세요",
    "enD": "You are showing up with tremendous heart, and building small predictable breaks now will keep your compassion sustainable for the long haul.",
    "koD": "큰 책임감으로 잘 해내고 계시지만, 지금부터 예측 가능한 짧은 휴식을 고정해 두어야 장기전에서 지치지 않습니다.",
    "enS": "\"Resting for an hour is part of the care plan, not taking away from it.\"",
    "koS": "\"내가 한 시간 쉬는 것도 돌봄 계획의 일부이지, 누군가의 몫을 빼앗는 게 아니야.\"",
    "enL": [
      "Keep a running \"Easy Help List\" (3 small chores) ready whenever someone asks how to help.",
      "Protect 20 minutes daily for something purely yours (walk, music, tea, call a friend).",
      "Lower non-essential household standards (paper plates or simple meals count as smart care)."
    ],
    "koL": [
      "누군가 \"도울 일 없어?\"라고 물을 때 바로 건넬 \"간단 도움 목록 3가지\"를 메모해 두세요.",
      "하루 20분은 오직 나만을 위한 시간(산책·음악·차 한 잔)으로 꼭 지키세요.",
      "집안일 완벽 기준을 낮춰 간편식이나 배달을 쓰는 것도 현명한 돌봄 전략입니다."
    ]
  },
  "high": {
    "enT": "Balanced Care Rhythm — Keep Shared Support Channels Open",
    "koT": "균형 잡힌 돌봄 리듬 — 함께 나누는 지원망을 계속 열어 두세요",
    "enD": "You have built healthier boundaries and pacing around caregiving. Keep checking in monthly as care needs evolve.",
    "koD": "돌봄과 자기 돌봄 사이의 균형이 아주 건강하게 유지되고 있습니다. 돌봄 강도가 변할 때마다 월 1회 부담을 재점검하세요.",
    "enS": "\"Caring sustainably means caring for the caregiver too.\"",
    "koS": "\"오래 따뜻하게 돌보려면 돌보는 나 역시 돌봄의 대상에 포함되어야 해.\"",
    "enL": [
      "Maintain your regular respite swaps before exhaustion ever spikes.",
      "Keep one personal friendship or joy ritual active outside caregiving.",
      "Give yourself credit for steady, compassionate presence every week."
    ],
    "koL": [
      "피로가 쌓이기 전에 정기적인 휴식 교대 일정을 꾸준히 유지하세요.",
      "돌봄 역할 밖의 개인적 우정이나 작은 즐거움을 계속 지켜 나가세요.",
      "매주 묵묵히 곁을 지키고 있는 스스로를 따뜻하게 인정해 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_caregiver_relief_v1";
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
      window.gtag('event', "caregiver_relief_complete", {
        tool_slug: "caregiver-exhaustion-relief-check",
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
      var shareUrl = "https://dopabrain.com/portal/tools/caregiver-exhaustion-relief-check.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "caregiver-exhaustion-relief-check",
        filename: 'dopabrain-caregiver-exhaustion-relief-check-card.png',
        badge: "CAREGIVER FATIGUE • SUSTAINABLE RESPITE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
        accent2: "#3b82f6"
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
