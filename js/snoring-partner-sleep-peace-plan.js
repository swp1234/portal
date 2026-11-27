/* Sleeping Next to a Snoring Partner Peace Planner
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Sleeping Next to a Snoring Partner Peace Planner | DopaBrain",
    "metaDesc": "Lying awake at 2 AM staring at the ceiling while quiet resentment builds—without wanting to hurt your partner’s feelings? Build a calm acoustic-masking + non-blaming sleep-divorce/side-sleep plan locally.",
    "kicker": "COUPLE SLEEP • SNORING PARTNER PEACE & SOUND-MASKING PLAN",
    "heroTitle": "Sleeping Next to a Snoring Partner Peace Planner",
    "heroLead": "Lying awake at 2 AM staring at the ceiling while quiet resentment builds—without wanting to hurt your partner’s feelings? Build a calm acoustic-masking + non-blaming sleep-divorce/side-sleep plan locally.",
    "chip1": "5 Sleep Frictions",
    "chip2": "Kind Couple Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR SHARED-BEDROOM FRICTION (1 = RESTED, 5 = EXHAUSTED)",
    "step1Title": "What makes sharing a bedroom feel hardest right now?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One practical adjustment we can test together for 7 nights (100% local):",
    "ctaBtn": "Build Our Kind Sleep-Peace Plan",
    "resultBadge": "STEP 2 • YOUR ZERO-BLAME COUPLE SLEEP PROTOCOL",
    "noteTitle": "Our 7-Night Experiment",
    "meterLabel": "Shared-Sleep Harmony",
    "scriptTitle": "Daytime Non-Blaming Couple Talk Script",
    "stepsTitle": "3 Practical Ways Couples Save Both Sleep & Affection",
    "stickyTitle": "Test low-frequency brown noise right now to soften snoring peaks?",
    "stickySub": "Open the free Brown & Pink Noise Player",
    "stickyBtn": "Test Brown Noise →",
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
    "title": "코골이 파트너 옆에서 숙면 지키기 & 다정한 수면 조율 플래너 | DopaBrain",
    "metaDesc": "새벽 2시 코골이 소리에 잠 못 들고 서운함만 쌓이는데, 상대가 상처받을까 봐 말도 못 꺼내고 있나요? 소음 마스킹·취침 시차·비난 없는 다정한 대화 스크립트를 준비하세요.",
    "kicker": "부부·커플 수면 · 코골이 파트너 옆 숙면 지키기 & 다정한 조율 플랜",
    "heroTitle": "코골이 파트너 옆에서 숙면 지키기 & 다정한 수면 조율 플래너",
    "heroLead": "새벽 2시 코골이 소리에 잠 못 들고 서운함만 쌓이는데, 상대가 상처받을까 봐 말도 못 꺼내고 있나요? 소음 마스킹·취침 시차·비난 없는 다정한 대화 스크립트를 준비하세요.",
    "chip1": "5가지 수면 마찰",
    "chip2": "다정한 대화 대본",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 코골이·수면 방해로 인한 피로·갈등 점검 (1 = 쾌적, 5 = 극도 피로)",
    "step1Title": "함께 잠자는 환경에서 가장 힘든 지점은 무엇인가요?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 파트너와 7일 동안 가볍게 실험해 볼 수면 조정 1가지 (100% 로컬):",
    "ctaBtn": "우리 커플 숙면 평화 플랜 보기",
    "resultBadge": "2단계 • 사랑과 숙면을 함께 지키는 수면 조율 프로토콜",
    "noteTitle": "7일간 함께 시도할 수면 실험",
    "meterLabel": "커플 수면 조화도",
    "scriptTitle": "낮에 다정하게 꺼내는 비난 없는 대화 멘트",
    "stepsTitle": "숙면과 애정을 동시에 지키는 3가지 현실 해법",
    "stickyTitle": "저주파 코골이 소리를 부드럽게 덮어 주는 브라운 노이즈를 지금 테스트해 볼까요?",
    "stickySub": "무료 브라운·핑크 노이즈 플레이어 열기",
    "stickyBtn": "브라운 노이즈 →",
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
    "title": "伴侣打鼾安睡与温和沟通方案规划器 | DopaBrain",
    "heroTitle": "伴侣打鼾安睡与温和沟通方案规划器",
    "heroLead": "用布朗噪音掩蔽、提前20分钟入睡与不指责话术，同时守护睡眠与感情。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "パートナーのいびき対策＆穏やか睡眠プラン | DopaBrain",
    "heroTitle": "パートナーのいびき対策＆穏やか睡眠プラン",
    "heroLead": "ブラウンノイズ・20分先寝・責めない会話スクリプトで睡眠と愛情を両立します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Plan de Paz del Sueño con Pareja que Ronca | DopaBrain",
    "heroTitle": "Plan de Paz del Sueño con Pareja que Ronca",
    "heroLead": "Protege el descanso y el cariño con ruido marrón, ventaja de 20 min y diálogo amable.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Plano de Paz no Sono com Parceiro que Ronca | DopaBrain",
    "heroTitle": "Plano de Paz no Sono com Parceiro que Ronca",
    "heroLead": "Preserve sono e afeto com ruído marrom, 20 min de vantagem e conversa gentil.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Schnarchenden-Partner Schlaf-Friedens-Planer | DopaBrain",
    "heroTitle": "Schnarchenden-Partner Schlaf-Friedens-Planer",
    "heroLead": "Schütze Schlaf & Liebe mit Braun-Rauschen, 20-Min-Vorsprung und sanftem Gespräch.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Plan Paix du Sommeil face aux Ronflements du Partenaire | DopaBrain",
    "heroTitle": "Plan Paix du Sommeil face aux Ronflements du Partenaire",
    "heroLead": "Protégez sommeil et couple grâce au bruit brun, 20 min d’avance et dialogue doux.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "План спокойного сна рядом с храпящим партнёром | DopaBrain",
    "heroTitle": "План спокойного сна рядом с храпящим партнёром",
    "heroLead": "Защитите сон и отношения: коричневый шум, фора 20 минут и бережный разговор днём.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "खर्राटे लेने वाले पार्टनर के साथ शांत नींद प्लानर | DopaBrain",
    "heroTitle": "खर्राटे लेने वाले पार्टनर के साथ शांत नींद प्लानर",
    "heroLead": "ब्राउन नॉइज़, 20 मिनट पहले सोने और विनम्र संवाद से नींद और रिश्ता दोनों बचाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Tidur Damai Bersama Pasangan Mendengkur | DopaBrain",
    "heroTitle": "Perencana Tidur Damai Bersama Pasangan Mendengkur",
    "heroLead": "Jaga tidur dan keharmonisan dengan brown noise, tidur 20 menit lebih dulu, dan dialog lembut.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Horlayan Partnerle Huzurlu Uyku Planlayıcı | DopaBrain",
    "heroTitle": "Horlayan Partnerle Huzurlu Uyku Planlayıcı",
    "heroLead": "Kahverengi gürültü, 20 dk erken uyuma ve suçlayıcı olmayan diyalogla uykunuzu koruyun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "2am_resentment",
    "en": "2 AM Quiet Resentment — Nudging or glaring at the ceiling while exhausted and frustrated",
    "ko": "새벽 2시 속앓이 — 잠 못 들고 천장만 보며 혼자 서운함과 짜증이 쌓임"
  },
  {
    "id": "defensive_talk",
    "en": "Sensitive Topic Avoidance — Worrying bringing up snoring will make my partner feel blamed",
    "ko": "화제 회피 — 말 꺼내면 상대가 상처받거나 방어적으로 나올까 봐 참기만 함"
  },
  {
    "id": "silent_room_echo",
    "en": "Dead-Silent Room Contrast — Every snore sounds 5x louder with zero low-frequency masking",
    "ko": "완전 무음 실내 — 배경 소음이 없어 코골이 한 번마다 5배 더 크게 들림"
  },
  {
    "id": "same_bedtime_race",
    "en": "Losing the Fall-Asleep Race — Going to bed after the snorer is already in deep back-sleep",
    "ko": "입면 순서 밀림 — 파트너가 이미 똑바로 누워 깊이 든 뒤에 눕느라 못 잠"
  },
  {
    "id": "sleep_apnea_unchecked",
    "en": "Gasping / Pauses Unchecked — Loud choking/pauses that have never been checked by a doctor",
    "ko": "무호흡 의심 방치 — 숨이 멈췄다 몰아쉬는 소리가 나는데 검진을 미룸"
  }
];
  var TIERS = {
  "low": {
    "enT": "Severe Sleep Loss — Talk Calmly Over Daytime Coffee + Layer 20-Min Head Start, Brown Noise & Separate-Room Option",
    "koT": "수면 손실 심각 — 낮에 다정히 대화하고 20분 먼저 눕기 + 브라운 노이즈 + 분리 수면 옵션을 열어 두세요",
    "enD": "Sleep-medicine research shows chronic sleep loss harms relationship warmth far more than separate sleeping (\"sleep divorce\"). Framing it as \"us vs. the noise\" over daytime coffee—and screening loud gasping/apnea with a doctor—protects both health and love.",
    "koD": "수면 의학 연구에 따르면 만성 수면 부족이 분리 수면보다 부부 관계에 훨씬 더 큰 타격을 줍니다. 새벽 2시가 아닌 낮 커피 타임에 \"너 vs 나\"가 아니라 \"우리 둘 vs 소음\"으로 이야기하고, 숨 멈춤이 동반되면 꼭 수면 검진을 권해 보세요.",
    "enS": "\"I love cuddling with you before sleep, AND I’ve been waking up exhausted from noise at 2 AM. Can we team up on a 7-night experiment—maybe a 20-min head start, brown noise, or trying separate sleep on work nights so we’re both happier?\"",
    "koS": "\"자기 전에 같이 붙어 있는 시간 너무 좋은데, 내가 새벽에 소음 때문에 너무 지쳐서 낮에도 예민해져. 우리 둘 다 개운하게 7일만 실험해 볼까? 내가 20분 먼저 눕고 브라운 노이즈 틀어 보거나, 평일엔 따로 자고 주말에 같이 자는 건 어때?\"",
    "enL": [
      "Layer low-frequency brown noise + comfortable silicone sleep earplugs (masks low-rumble peaks far better than silence).",
      "Take a 20-minute head start into bed so you enter deep sleep BEFORE your partner lies down, and test side-sleeping pillows.",
      "Normalize guilt-free \"cuddle first, sleep separate on work nights\" if needed—and encourage a medical check if you hear breathing pauses or gasping."
    ],
    "koL": [
      "완전 무음 대신 저주파 브라운 노이즈와 부드러운 수면 귀마개를 함께 써서 소음 대비를 낮추세요.",
      "파트너보다 20분 먼저 누워 깊은 잠에 든 뒤 합류하게 하고, 옆으로 눕기 베개를 시험해 보세요.",
      "필요하다면 \"잠들기 전 20분 포옹 + 평일 분리 수면\"을 죄책감 없이 활용하고, 숨 멈춤이 보이면 수면 검진을 권하세요."
    ]
  },
  "mid": {
    "enT": "Occasional Noise Disruption — Add Brown Noise & A 20-Minute Bedtime Head Start",
    "koT": "가끔 수면 방해 — 브라운 노이즈와 20분 먼저 눕기만으로도 크게 개선됩니다",
    "enD": "Two gentle tweaks usually restore full sleep without changing sleeping arrangements.",
    "koD": "두 가지 가벼운 조정만으로도 같은 침실에서 훨씬 편안하게 숙면할 수 있습니다.",
    "enS": "\"Cuddle warmly, protect deep sleep, zero 2 AM resentment.\"",
    "koS": "\"잠들기 전엔 따뜻하게, 수면의 질은 확실하게, 새벽 속앓이는 제로.\"",
    "enL": [
      "Play steady brown noise near the middle of the room.",
      "Skip late-evening alcohol (relaxes airway muscles and spikes snoring).",
      "Check in kindly after 7 nights to see what helped most."
    ],
    "koL": [
      "방 한가운데서 잔잔한 브라운 노이즈를 틀어 두세요.",
      "취침 3시간 전 음주를 줄이면 기도 이완 코골이가 눈에 띄게 줄어듭니다.",
      "7일 뒤 서로 잠의 질이 얼마나 좋아졌는지 다정히 점검하세요."
    ]
  },
  "high": {
    "enT": "Peaceful Shared Sleep — Rested & Connected",
    "koT": "평온한 동반 숙면 — 휴식과 애정 모두 균형이 좋습니다",
    "enD": "You have found a thoughtful sleep setup that respects both partners’ rest.",
    "koD": "서로의 수면권을 배려하는 건강하고 따뜻한 수면 환경을 잘 지키고 있습니다.",
    "enS": "\"Two well-rested partners make a far gentler home.\"",
    "koS": "\"둘 다 푹 자고 일어난 아침이 집안을 가장 따뜻하게 만든다.\"",
    "enL": [
      "Keep evening wind-down cues consistent.",
      "Maintain open, zero-shame check-ins whenever sleep shifts.",
      "Protect quiet, cool bedroom comfort."
    ],
    "koL": [
      "저녁 마무리 루틴을 계속 함께 지켜 나가세요.",
      "수면 패턴이 바뀔 때마다 부담 없이 솔직히 조율하세요.",
      "시원하고 쾌적한 침실 환경을 유지하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_snoring_partner_peace_v1";
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
      window.gtag('event', "snoring_partner_peace_complete", {
        tool_slug: "snoring-partner-sleep-peace-plan",
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
      var shareUrl = "https://dopabrain.com/portal/tools/snoring-partner-sleep-peace-plan.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "snoring-partner-sleep-peace-plan",
        filename: 'dopabrain-snoring-partner-sleep-peace-plan-card.png',
        badge: "COUPLE SLEEP • SNORING PARTNER PEACE & SOUND-MASKING PLAN",
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
