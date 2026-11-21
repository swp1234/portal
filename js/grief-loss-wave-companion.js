/* Grief, Loss & Heavy Wave Gentle Companion
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Grief, Loss & Heavy Wave Gentle Companion | DopaBrain",
    "metaDesc": "Free 12-language Grief & Loss Wave Companion. Gently check today’s emotional capacity using the Dual-Process Model of coping locally—without rigid timelines or toxic positivity.",
    "keywords": "grief wave companion, coping with loss worksheet, dual process model grief, gentle grief check in, non linear grief support, dopabrain",
    "kicker": "GENTLE DUAL-PROCESS GRIEF CARE",
    "heroTitle": "Grief, Loss & Heavy Wave Gentle Companion",
    "heroLead": "Grief does not follow neat linear stages—it arrives in unpredictable waves. Gently check your energy and tenderness today privately to choose one kind, zero-pressure anchor.",
    "chip1": "Dual-Process Pacing",
    "chip2": "Zero Forced Timelines",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK TODAY’S WAVE WEIGHT (1 = SOFT, 5 = VERY HEAVY)",
    "step1Title": "How heavy does today’s wave of loss or transition feel?",
    "step1Sub": "Move at your own pace. Everything stays strictly private on your device.",
    "inputLabel": "Optional: 1 gentle permission or remembrance I want to hold today (100% local):",
    "inputPlaceholder": "Example: Today it is enough to drink water, rest early, and miss them without rushing",
    "ctaBtn": "Build Today’s Gentle Care Plan",
    "resultBadge": "STEP 2 • YOUR GENTLE TODAY-ONLY CARE ANCHOR",
    "noteTitle": "My Gentle Permission for Today",
    "meterLabel": "Today’s Available Emotional Capacity",
    "scriptTitle": "Kind Boundary When You Do Not Have Energy to Explain",
    "stepsTitle": "3 Low-Pressure Care Anchors for Today",
    "stickyTitle": "Tired of people rushing you with \"everything happens for a reason\"?",
    "stickySub": "Replace dismissive platitudes with honest self-validation",
    "stickyBtn": "Validation Lab →",
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
    "title": "상실·애도 파도 동반자 & 부드러운 하루 돌봄 | DopaBrain",
    "metaDesc": "상실과 이별의 슬픔은 순서대로 끝나지 않고 파도처럼 찾아옵니다. 이중 과정(Dual-Process) 관점으로 오늘 감당 가능한 부드러운 하루 돌봄과 경계 문장을 로컬에서 받아보세요.",
    "kicker": "부드러운 상실 돌봄 · 강요 없는 애도",
    "heroTitle": "상실·애도 파도 동반자",
    "heroLead": "슬픔은 정해진 5단계대로 깔끔하게 끝나지 않고 불현듯 파도처럼 밀려옵니다. 오늘 나의 마음 무게를 비공개로 살피고, 억지 극복 없이 지금 감당할 수 있는 따뜻한 돌봄 1가지를 골라보세요.",
    "chip1": "이중 과정 페이싱",
    "chip2": "억지 극복 없음",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 오늘의 파도 무게 살피기 (1 = 잔잔함, 5 = 매우 무거움)",
    "step1Title": "오늘 마음속 상실감과 피로의 무게는 어느 정도인가요?",
    "step1Sub": "서두를 필요 없습니다. 모든 기록은 내 기기 안에만 안전하게 남습니다.",
    "inputLabel": "선택: 오늘 나에게 허락하고 싶은 따뜻한 문장 1가지 (100% 로컬):",
    "ctaBtn": "오늘만을 위한 부드러운 돌봄 플랜 보기",
    "resultBadge": "2단계 • 오늘 하루를 위한 부드러운 돌봄 앵커",
    "noteTitle": "오늘 나에게 건네는 허락의 문장",
    "meterLabel": "오늘 감당 가능한 마음 여력",
    "scriptTitle": "설명할 기운이 없을 때 쓰는 부드러운 경계 문장",
    "stepsTitle": "오늘 하루를 무리 없이 건너는 3가지 돌봄",
    "stickyTitle": "\"다 잘 될 거야\" 같은 억지 위로가 더 힘들게 느껴지나요?",
    "stickySub": "감정을 있는 그대로 인정하는 현실 타당화 문장을 만나보세요",
    "stickyBtn": "감정 타당화 →",
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
    "title": "哀伤与失落海浪温和陪伴器 | DopaBrain",
    "heroTitle": "哀伤与失落陪伴器",
    "ctaBtn": "生成今日温和照护计划",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "グリーフ＆喪失の波コンパニオン | DopaBrain",
    "heroTitle": "喪失の波コンパニオン",
    "ctaBtn": "今日の優しいケア計画",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Acompañante Suave para Olas de Duelo | DopaBrain",
    "heroTitle": "Acompañante de Duelo",
    "ctaBtn": "Crear plan suave de hoy",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Companheiro Gentil para Ondas de Luto | DopaBrain",
    "heroTitle": "Companheiro de Luto",
    "ctaBtn": "Criar cuidado gentil",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Sanfter Trauer- & Verlust-Begleiter | DopaBrain",
    "heroTitle": "Sanfter Trauer-Begleiter",
    "ctaBtn": "Sanften Tagesplan erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Compagnon Doux pour les Vagues de Deuil | DopaBrain",
    "heroTitle": "Compagnon de Deuil",
    "ctaBtn": "Créer mon ancrage doux",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Бережный помощник при волнах горя | DopaBrain",
    "heroTitle": "Бережный помощник горя",
    "ctaBtn": "Создать бережный план",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "दुख और हानि के लिए कोमल साथी | DopaBrain",
    "heroTitle": "कोमल शोक साथी",
    "ctaBtn": "आज की देखभाल योजना",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pendamping Lembut Gelombang Duka | DopaBrain",
    "heroTitle": "Pendamping Gelombang Duka",
    "ctaBtn": "Buat Rencana Lembut",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yas ve Kayıp Dalgaları İçin Nazik Rehber | DopaBrain",
    "heroTitle": "Yas Dalgaları Rehberi",
    "ctaBtn": "Nazik Bakım Planı",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "wave_heaviness",
    "en": "Sudden Grief Waves — Unexpected memories, songs, or dates bringing sharp ache",
    "ko": "갑작스런 슬픔 파도 — 예상치 못한 기억·장소·날짜에 울컥 무거워짐"
  },
  {
    "id": "grief_fog",
    "en": "Grief Brain & Fog — Forgetting small things, feeling slow or detached",
    "ko": "애도 브레인포그 — 사소한 일을 잊거나 머리가 멍하고 현실감이 떨어짐"
  },
  {
    "id": "social_mask",
    "en": "Exhaustion From \"Being Strong\" — Drained by updating people or pretending you are fine",
    "ko": "괜찮은 척하는 피로 — 주변 안부에 답하고 씩씩한 척하느라 기운이 빠짐"
  },
  {
    "id": "body_ache",
    "en": "Physical Heaviness — Tight chest, restless sleep, or appetite changes",
    "ko": "신체적 무거움 — 가슴 답답함, 얕은 수면, 식욕 변화 같은 몸의 피로"
  },
  {
    "id": "guilt_timeline",
    "en": "Pressure to \"Move On\" — Feeling behind or judged for still grieving",
    "ko": "빨리 털어내야 한다는 압박 — 아직 힘든 나를 자책하거나 눈치 보게 됨"
  }
];
  var TIERS = {
  "low": {
    "enT": "Heavy Loss Wave — Bare-Minimum Shelter Mode Today",
    "koT": "깊은 상실의 파도 — 오늘은 최소한의 보호 모드면 충분합니다",
    "enD": "When a heavy wave hits, your only job is basic physical shelter—not productivity, not explaining yourself, and not forcing silver linings. Waves always rise and eventually soften.",
    "koD": "무거운 파도가 밀려오는 날에는 생산성이나 긍정적 의미 찾기가 필요 없습니다. 오늘의 유일한 목표는 기본적인 몸의 안전과 휴식입니다. 파도는 반드시 잦아듭니다.",
    "enS": "\"Thank you for thinking of me. Today is a heavier wave day, so I am staying offline and resting—I will reach out when I have more capacity.\"",
    "koS": "\"마음 써줘서 고마워요. 오늘은 파도가 조금 무거운 날이라 조용히 쉬면서 보내려고 해요. 기운이 조금 돌아오면 먼저 연락할게요.\"",
    "enL": [
      "Lower today’s checklist to 3 basics: water, one warm meal, and early rest.",
      "Let yourself feel the wave for 10 minutes without judging it—then wrap in a warm blanket or shower.",
      "Skip social obligations that require smiling through pain today."
    ],
    "koL": [
      "오늘 할 일은 딱 3가지로 줄이세요: 물 마시기, 따뜻한 한 끼, 일찍 눕기.",
      "슬픔을 억누르지 말고 10분만 그대로 허용한 뒤 따뜻한 샤워나 담요로 몸을 감싸세요.",
      "억지로 웃어야 하는 연락이나 자리는 오늘 하루 정중히 미루세요."
    ]
  },
  "mid": {
    "enT": "Oscillating Day — Alternate Brief Remembrance With Restorative Breaks",
    "koT": "오가는 파도의 날 — 짧은 애도와 일상 회복을 부드럽게 번갈아 주세요",
    "enD": "Research on the Dual-Process Model shows healthy grief naturally oscillates between feeling loss and taking small restorative breaks in ordinary life. Neither side erases the other.",
    "koD": "이중 과정(Dual-Process) 연구에 따르면 건강한 애도는 슬픔을 느끼는 시간과 평범한 일상으로 잠시 숨 돌리는 시간을 자연스럽게 오갑니다. 잠깐 웃어도 사랑이 줄어들지 않습니다.",
    "enS": "\"I am taking things one day at a time—I would love a quiet walk or tea together without needing to talk about heavy things the whole time.\"",
    "koS": "\"하루하루 천천히 지나가고 있어요. 무거운 얘기만 하기보다 잠깐 조용히 산책하거나 차 한 잔 함께하면 좋을 것 같아요.\"",
    "enL": [
      "Set aside 10 intentional minutes to remember or journal, then gently transition to one ordinary comfort.",
      "Accept 1 small practical favor from someone safe instead of carrying everything solo.",
      "Release guilt whenever a brief moment of lightness or laughter appears."
    ],
    "koL": [
      "10분 정도 마음을 적어 내려간 뒤, 자연스럽게 좋아하는 음악이나 산책 같은 일상으로 전환해 보세요.",
      "모든 걸 혼자 감당하지 말고 믿을 수 있는 사람의 작은 도움 1가지를 받아보세요.",
      "잠깐 숨이 트이거나 웃음이 난 순간에 죄책감을 갖지 마세요."
    ]
  },
  "high": {
    "enT": "Gentler Tide — Carrying Love Forward With Steady Ground",
    "koT": "잔잔해진 물결 — 소중한 기억을 품고 차분히 오늘을 걷는 날",
    "enD": "Today’s tide feels steadier. Grief shrinks not because love disappears, but because life slowly grows around it. Enjoy today’s steadiness without fearing future waves.",
    "koD": "오늘은 물결이 조금 잔잔한 날입니다. 슬픔이 사라져서가 아니라, 그 기억을 품은 채 삶이 천천히 넓어지고 있기 때문입니다. 오늘의 평온을 그대로 누리세요.",
    "enS": "\"Today feels a bit steadier, and I am grateful for the quiet moments that help me carry forward.\"",
    "koS": "\"오늘은 마음이 한결 차분하네요. 이 기억을 소중히 품은 채 오늘의 평온한 시간을 감사히 보내려고 해요.\"",
    "enL": [
      "Do one small life-giving thing you enjoy without guilt.",
      "Honor a meaningful memory in a quiet personal ritual if it feels warm.",
      "Remember that if a heavier wave returns next month, it is normal—not a setback."
    ],
    "koL": [
      "죄책감 없이 오늘 나를 살리는 소소한 즐거움 1가지를 선택하세요.",
      "마음이 편안하다면 따뜻한 기억을 조용히 기리는 작은 의식을 가져보세요.",
      "훗날 다시 큰 파도가 와도 후퇴가 아니라 자연스러운 흐름임을 기억하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_grief_wave_v1";
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
      window.gtag('event', "grief_companion_complete", {
        tool_slug: "grief-loss-wave-companion",
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
      var shareUrl = "https://dopabrain.com/portal/tools/grief-loss-wave-companion.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "grief-loss-wave-companion",
        filename: 'dopabrain-grief-loss-wave-companion-card.png',
        badge: "GENTLE DUAL-PROCESS GRIEF CARE",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#a855f7",
        accent2: "#38bdf8"
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
