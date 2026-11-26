/* New Parent Fragmented-Sleep & Sanity Shift Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "New Parent Fragmented-Sleep & Sanity Shift Planner | DopaBrain",
    "metaDesc": "Running on 90-minute stretches of broken sleep while feeling foggy, tearful, or snappy? Audit 5 early-parenting exhaustion triggers locally and protect one uninterrupted 4-hour restorative shift.",
    "kicker": "NEW PARENT RECOVERY • FRAGMENTED-SLEEP SHIFT PLAN",
    "heroTitle": "New Parent Fragmented-Sleep & Sanity Shift Planner",
    "heroLead": "Running on 90-minute stretches of broken sleep while feeling foggy, tearful, or snappy? Audit 5 early-parenting exhaustion triggers locally and protect one uninterrupted 4-hour restorative shift.",
    "chip1": "5 Parent Sleep Drains",
    "chip2": "4-Hr Shift Block",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR CURRENT FRAGMENTED-SLEEP LOAD (1 = SUPPORTED, 5 = RUNNING ON FUMES)",
    "step1Title": "What is making broken sleep hardest to recover from right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One 4-hour uninterrupted sleep block or 1 chore to drop this week (100% local):",
    "ctaBtn": "Build My Parent Sleep-Sanity Plan",
    "resultBadge": "STEP 2 • YOUR REALISTIC NEW-PARENT SURVIVAL & REST PLAN",
    "noteTitle": "My Protected 4-Hour Sleep or Dropped Chore",
    "meterLabel": "Parent Recovery & Sanity Reserve",
    "scriptTitle": "Zero-Guilt Support & Shift Line",
    "stepsTitle": "3 Evidence-Based Moves for Broken-Sleep Survival",
    "stickyTitle": "Need gentle steady rain or brown noise to fall asleep fast between feeds?",
    "stickySub": "Open the free White Noise Sound Mixer next",
    "stickyBtn": "Sleep Audio →",
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
    "title": "신생아·육아 수면 부족 & 4시간 연속 수면 보호 플래너 | DopaBrain",
    "metaDesc": "90분마다 끊기는 쪽잠으로 머리가 멍하고 감정이 예민해졌나요? 5가지 초기 육아 수면 소진 요인을 점검하고 최소 4시간 연속 회복 수면 교대 플랜을 설계하세요.",
    "kicker": "육아 수면 부족 · 4시간 연속 수면 & 멘탈 보호 플랜",
    "heroTitle": "신생아·육아 수면 부족 & 4시간 연속 수면 보호 플래너",
    "heroLead": "90분마다 끊기는 쪽잠으로 머리가 멍하고 감정이 예민해졌나요? 5가지 초기 육아 수면 소진 요인을 점검하고 최소 4시간 연속 회복 수면 교대 플랜을 설계하세요.",
    "chip1": "5가지 육아 수면 소진",
    "chip2": "4시간 연속 수면",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 현재 육아 수면 부족·피로 부하 점검 (1 = 여유 있음, 5 = 한계 상태)",
    "step1Title": "지금 끊긴 수면에서 회복하기 가장 어렵게 만드는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 이번 주 확보할 4시간 연속 수면 구간 또는 과감히 내려놓을 집안일 1가지 (100% 로컬):",
    "ctaBtn": "내 육아 수면·멘탈 보호 플랜 보기",
    "resultBadge": "2단계 • 현실적인 육아 수면 및 멘탈 보호 플랜",
    "noteTitle": "이번 주 지킬 4시간 연속 수면 / 내려놓은 집안일",
    "meterLabel": "육아 회복·평온 여유 지수",
    "scriptTitle": "파트너·가족과 수면 교대를 나누는 명확한 문장",
    "stepsTitle": "쪽잠 시기 멘탈과 체력을 지키는 3가지 전략",
    "stickyTitle": "짧은 수면 틈에 빠르게 잠들 수 있도록 부드러운 빗소리·브라운노이즈가 필요하신가요?",
    "stickySub": "무료 화이트노이즈 믹서로 짧고 깊은 회복 수면 돕기",
    "stickyBtn": "수면 사운드 →",
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
    "title": "新手父母碎片睡眠与4小时轮班规划 | DopaBrain",
    "heroTitle": "新手父母碎片睡眠与4小时轮班规划",
    "heroLead": "本地排查5大育儿失眠损耗，保护每天一次连续4小时深度恢复睡眠。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "産後・育児の細切れ睡眠＆4時間確保プラン | DopaBrain",
    "heroTitle": "産後・育児の細切れ睡眠＆4時間確保プラン",
    "heroLead": "細切れ睡眠の5つの消耗を整理し、連続4時間の回復シフトを設計します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Sueño y Turnos para Nuevos Padres | DopaBrain",
    "heroTitle": "Plan de Sueño y Turnos para Nuevos Padres",
    "heroLead": "Audita 5 fugas de cansancio y protege un bloque continuo de 4 horas de descanso.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Sono e Turnos para Pais Recentes | DopaBrain",
    "heroTitle": "Plano de Sono e Turnos para Pais Recentes",
    "heroLead": "Mapeie 5 drenos de sono picado e proteja 1 bloco contínuo de 4 horas de descanso.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Eltern-Schlafmangel- & 4-Stunden-Schichtplan | DopaBrain",
    "heroTitle": "Eltern-Schlafmangel- & 4-Stunden-Schichtplan",
    "heroLead": "Prüfe 5 Erschöpfungsfaktoren und schütze einen ungestörten 4-Stunden-Schlafblock.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Sommeil & Relais Jeunes Parents | DopaBrain",
    "heroTitle": "Plan Sommeil & Relais Jeunes Parents",
    "heroLead": "Repérez 5 causes d’épuisement nocturne et protégez un bloc continu de 4 heures.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План сна и смен для молодых родителей | DopaBrain",
    "heroTitle": "План сна и смен для молодых родителей",
    "heroLead": "Оцените 5 факторов недосыпа и защитите один непрерывный 4-часовой блок сна.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "न्यू पेरेंट स्लीप व 4-आवर शिफ्ट प्लानर | DopaBrain",
    "heroTitle": "न्यू पेरेंट स्लीप व 4-आवर शिफ्ट प्लानर",
    "heroLead": "टुकड़ों में नींद की 5 थकान वजहें जांचें और लगातार 4 घंटे की सुरक्षित नींद प्लान करें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Tidur & Kewarasan Orang Tua Baru | DopaBrain",
    "heroTitle": "Perencana Tidur & Kewarasan Orang Tua Baru",
    "heroLead": "Audit 5 pemicu lelah tidur terputus dan lindungi 1 blok tidur 4 jam tanpa gangguan.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Yeni Ebeveyn Uyku ve Vardiya Planlayıcı | DopaBrain",
    "heroTitle": "Yeni Ebeveyn Uyku ve Vardiya Planlayıcı",
    "heroLead": "Bölünmüş uykunun 5 etkisini ölçün ve kesintisiz 4 saatlik dinlenme bloğu oluşturun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "zero_4hr_block",
    "en": "Zero 4-Hour Unbroken Stretch — Waking every 1–2 hours with never one consolidated sleep cycle",
    "ko": "4시간 연속 수면 0회 — 1~2시간마다 깨어 단 한 번도 깊은 수면 주기를 못 채움"
  },
  {
    "id": "chore_during_nap",
    "en": "Chores Over Rest — Cleaning kitchen or folding laundry during every baby nap instead of resting",
    "ko": "아기 잘 때 집안일 — 아기가 잠든 귀한 틈에 쉬지 못하고 설거지·정리만 함"
  },
  {
    "id": "middle_night_scroll",
    "en": "3 AM Feeding Doomscroll — Bright phone screens during night feeds keeping adrenaline up afterward",
    "ko": "새벽 수유 스마트폰 — 수유 중 밝은 폰 화면을 보다가 아기가 자도 나는 못 잠"
  },
  {
    "id": "both_awake_always",
    "en": "Both Parents Awake — Both caregivers waking up for every single night wakeup instead of taking shifts",
    "ko": "동시 기상 비효율 — 교대 없이 새벽마다 두 사람이 동시에 깨어 같이 지침"
  },
  {
    "id": "perfect_home_pressure",
    "en": "Invisible Perfectionism — Trying to keep pre-baby standards for hosting, meals, and housekeeping",
    "ko": "출산 전 기준 고수 — 아기 전과 똑같은 집 정리·요리·손님맞이 기준을 유지하려 함"
  }
];
  var TIERS = {
  "low": {
    "enT": "Severe Sleep Fragmentation — Protect One 4-Hour Uninterrupted Block Immediately",
    "koT": "심각한 수면 파편화 — 최우선으로 \"4시간 연속 비방해 수면 블록\" 1개를 즉시 확보하세요",
    "enD": "Perinatal sleep research (Montgomery-Downs et al.) shows getting even ONE consolidated 4-hour block of unbroken sleep protects mood and executive function far more than 6 scattered 45-minute naps. Drop non-essential chores immediately.",
    "koD": "산후·초기 육아 수면 연구에 따르면 45분씩 6번 자는 것보다 단 한 번이라도 \"4시간 연속 수면\"을 확보하는 것이 감정 안정과 회복에 훨씬 결정적입니다. 비필수 집안일은 지금 과감히 내려놓으세요.",
    "enS": "\"Getting one protected 4-hour sleep block isn’t a luxury—it keeps me patient, safe, and steady for our baby. Let’s split tonight into two shifts.\"",
    "koS": "\"4시간 연속 수면은 사치가 아니라 아이를 안전하고 따뜻하게 돌보기 위한 필수 안전장치야. 오늘 밤은 두 구간으로 나눠 교대하자.\"",
    "enL": [
      "Set up shift sleeping tonight (e.g., 8 PM–12:30 AM and 12:30 AM–5 AM) or invite 1 trusted helper for a 3-hour daytime relief window.",
      "Keep night lights warm/dim amber and avoid bright phone scrolling during night care so you fall back asleep in 5 minutes.",
      "Declare a temporary moratorium on folding laundry and fancy meals—eat easy one-handed nourishing food."
    ],
    "koL": [
      "오늘 밤부터 교대 수면(예: 20:00~00:30 / 00:30~05:00)을 나누거나 주간 3시간 도우미·가족 지원을 요청하세요.",
      "새벽 돌봄 때는 은은한 호박색 수유등만 켜고 밝은 폰 화면을 피해야 직후 5분 안에 다시 잠들 수 있습니다.",
      "빨래 개기·복잡한 요리는 당분간 중단하고 한 손으로 먹을 수 있는 간편 영양식으로 에너지를 아끼세요."
    ]
  },
  "mid": {
    "enT": "Manageable Survival Stretch — Trade One Daily Chore for One Horizontal Rest",
    "koT": "버틸 만한 생존 구간 — 하루 집안일 1개를 수평 휴식 20분과 맞바꾸세요",
    "enD": "You have some structure working; remember that even 20 minutes of quiet horizontal rest with eyes closed lowers cortisol during daytime naps.",
    "koD": "어느 정도 리듬이 잡혀 가고 있습니다. 아기 낮잠 때 꼭 잠들지 못하더라도 눈을 감고 20분 누워만 있어도 회복 효과가 큽니다.",
    "enS": "\"Dishes can wait until evening; my nervous system gets 20 quiet minutes right now.\"",
    "koS": "\"설거지는 저녁에 해도 돼. 지금은 내 신경계가 20분 조용히 쉴 차례야.\"",
    "enL": [
      "Use ONE baby nap per day purely for your own horizontal rest—zero chores allowed.",
      "Step outside for 10 minutes of daylight with the stroller to anchor both your and baby’s circadian cues.",
      "Accept specific help when offered (meals, groceries, or a 60-minute hold)."
    ],
    "koL": [
      "하루 아기 낮잠 중 최소 1회는 집안일 금지, 오직 내 휴식 시간으로 지정하세요.",
      "유모차나 아기띠로 하루 10분 자연광을 쬐면 부모와 아기의 생체시계가 함께 잡힙니다.",
      "주변에서 도울 일을 물으면 반찬·장보기·1시간 봐주기를 구체적으로 수락하세요."
    ]
  },
  "high": {
    "enT": "Steady New-Parent Pacing — Keep Guarding Shared Shifts & Kindness",
    "koT": "안정적인 육아 페이스 — 함께 나누는 교대와 자기 배려를 잘 지키고 있습니다",
    "enD": "You have built realistic, compassionate systems for an intense season. Keep communicating openly as sleep windows shift.",
    "koD": "가장 힘든 시기를 현실적이고 다정한 시스템으로 잘 헤쳐 나가고 계십니다. 아이의 수면 패턴이 바뀔 때마다 가볍게 교대를 재조정하세요.",
    "enS": "\"This season is temporary, and taking care of the parents takes care of the baby.\"",
    "koS": "\"이 시기는 지나가고, 부모를 잘 돌보는 것이 곧 아이를 가장 잘 돌보는 일이다.\"",
    "enL": [
      "Keep protecting each caregiver’s personal reset pocket every week.",
      "Celebrate small milestones instead of chasing impossible online ideals.",
      "Reach out promptly to a healthcare provider if persistent sadness or overwhelm lingers beyond two weeks."
    ],
    "koL": [
      "매주 각자의 짧은 개인 재충전 시간을 꾸준히 지켜 주세요.",
      "SNS 속 완벽한 육아 이미지 대신 오늘의 작은 미소와 버팀을 축하하세요.",
      "혹시 깊은 우울감이나 압도감이 2주 이상 이어지면 주저하지 말고 전문 의료진과 상담하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_new_parent_sanity_v1";
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
      window.gtag('event', "new_parent_sanity_complete", {
        tool_slug: "new-parent-sleep-sanity-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/new-parent-sleep-sanity-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "new-parent-sleep-sanity-plan",
        filename: 'dopabrain-new-parent-sleep-sanity-plan-card.png',
        badge: "NEW PARENT RECOVERY • FRAGMENTED-SLEEP SHIFT PLAN",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#14b8a6",
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
