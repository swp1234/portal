/* Toxic Positivity & Emotional Validation Reframer
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Toxic Positivity & Emotional Validation Reframer | DopaBrain",
    "metaDesc": "Free 12-language Toxic Positivity & Emotional Validation Reframer. Replace dismissive \"good vibes only\" phrases with grounded, honest emotional validation and self-acceptance locally.",
    "keywords": "toxic positivity reframer, emotional validation tool, how to validate emotions, stop suppressing feelings, emotional agility exercise, dopabrain",
    "kicker": "EMOTIONAL AGILITY & HONEST VALIDATION",
    "heroTitle": "Toxic Positivity & Emotional Validation Reframer",
    "heroLead": "Forcing \"good vibes only\" or telling yourself \"others have it worse\" actually amplifies shame and emotional numbness. Rate 5 self-dismissal habits locally to replace toxic positivity with grounded emotional validation.",
    "chip1": "5 Dismissal Traps",
    "chip2": "Honest Validation",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK SELF-INVALIDATION PATTERNS (1 = RARELY, 5 = OFTEN)",
    "step1Title": "How often do you pressure yourself to \"stay positive\" over real feelings?",
    "step1Sub": "Honest reflection stays 100% private in your browser.",
    "inputLabel": "Optional: 1 difficult feeling I give myself permission to name honestly today (100% local):",
    "inputPlaceholder": "Example: I am genuinely disappointed about how that project ended, and that is allowed",
    "ctaBtn": "Generate Grounded Validation Reframe",
    "resultBadge": "STEP 2 • YOUR EMOTIONAL VALIDATION ANCHOR",
    "noteTitle": "The Honest Feeling I Am Allowing Today",
    "meterLabel": "Emotional Permission Score",
    "scriptTitle": "Grounded Validation Statement (No Forced Positivity)",
    "stepsTitle": "3 Emotional Agility Shifts Today",
    "stickyTitle": "Harsh inner voice judging your emotions?",
    "stickySub": "Reframe self-criticism in our Inner Critic Compassion Lab",
    "stickyBtn": "Compassion Lab →",
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
    "title": "독성 긍정 차단 & 감정 타당화 리프레이머 | DopaBrain",
    "metaDesc": "\"긍정적으로 생각해\", \"남들은 더 힘들어\" 같은 독성 긍정 습관을 점검하고, 억압된 감정을 있는 그대로 인정하는 건강한 감정 타당화 문장을 생성하세요.",
    "kicker": "감정 유연성 & 정직한 감정 타당화 랩",
    "heroTitle": "독성 긍정 & 감정 타당화 리프레이머",
    "heroLead": "억지로 밝은 척하거나 \"이 정도는 별거 아니야\"라며 감정을 누를수록 마음은 더 무감각해지고 지칩니다. 5가지 감정 억압 습관을 점검해 현실적이고 따뜻한 감정 타당화 문장으로 바꿔보세요.",
    "chip1": "5가지 감정 억압 함정",
    "chip2": "정직한 타당화 문장",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 감정 억압·독성 긍정 습관 점검 (1 = 거의 없음, 5 = 자주)",
    "step1Title": "힘든 감정을 억지로 긍정으로 덮으려는 습관이 얼마나 잦나요?",
    "step1Sub": "입력 내용은 100% 브라우저 로컬에만 남습니다.",
    "inputLabel": "선택: 오늘 억지로 숨기지 않고 솔직하게 인정할 감정 1가지 (100% 로컬):",
    "ctaBtn": "감정 타당화 리프레임 생성",
    "resultBadge": "2단계 • 나의 정직한 감정 타당화 앵커",
    "noteTitle": "오늘 있는 그대로 허락하는 나의 감정",
    "meterLabel": "감정 허용·타당화 지수",
    "scriptTitle": "억지 긍정 없는 건강한 감정 타당화 문장",
    "stepsTitle": "감정을 억누르지 않는 3가지 실천 전환",
    "stickyTitle": "내 감정을 스스로 비난하는 목소리가 큰가요?",
    "stickySub": "내면 비판가 → 자기연민 전환 랩에서 부드럽게 풀어보세요",
    "stickyBtn": "자기연민 랩 →",
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
    "title": "有毒积极思维与情绪接纳重构器 | DopaBrain",
    "heroTitle": "有毒积极与情绪接纳重构",
    "ctaBtn": "生成真实情绪接纳句",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "トキシック・ポジティビティ解除＆感情受容ツール | DopaBrain",
    "heroTitle": "無理なポジティブ解除・感情受容",
    "ctaBtn": "誠実な受容リフレームを作成",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Reencuadre de Positividad Tóxica y Validación | DopaBrain",
    "heroTitle": "Positividad Tóxica y Validación",
    "ctaBtn": "Generar validación honesta",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Reenquadrador de Positividade Tóxica e Validação | DopaBrain",
    "heroTitle": "Positividade Tóxica e Validação",
    "ctaBtn": "Gerar validação honesta",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Toxische Positivität & Emotionale Validierung | DopaBrain",
    "heroTitle": "Toxische Positivität Reframer",
    "ctaBtn": "Ehrliche Validierung erstellen",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Recadrage Positivité Toxique & Validation | DopaBrain",
    "heroTitle": "Positivité Toxique & Validation",
    "ctaBtn": "Générer ma validation",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Рефреймер токсичного позитива и валидации | DopaBrain",
    "heroTitle": "Токсичный позитив и валидация",
    "ctaBtn": "Создать честную поддержку",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "टॉक्सिक पॉज़िटिविटी और इमोशनल वैलिडेशन टूल | DopaBrain",
    "heroTitle": "इमोशनल वैलिडेशन रिफ्रेमर",
    "ctaBtn": "ईमानदार रिफ्रेम बनाएँ",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Reframer Toxic Positivity & Validasi Emosi | DopaBrain",
    "heroTitle": "Validasi Emosi & Toxic Positivity",
    "ctaBtn": "Buat Validasi Jujur",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Toksik Pozitiflik ve Duygusal Onaylama Aracı | DopaBrain",
    "heroTitle": "Toksik Pozitiflik Çözücü",
    "ctaBtn": "Dürüst Onaylama Oluştur",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "minimize",
    "en": "Comparative Minimizing — \"Other people have it worse, I should not complain\"",
    "ko": "비교 축소 — \"나보다 힘든 사람도 많은데 투정 부리면 안 돼\""
  },
  {
    "id": "silver_lining",
    "en": "Premature Silver Lining — Rushing to find a \"lesson\" before feeling hurt",
    "ko": "성급한 교훈 찾기 — 아픔을 느끼기도 전에 \"다 배움이야\"로 덮음"
  },
  {
    "id": "hide_mask",
    "en": "Smiling Mask — Saying \"I am fine!\" automatically even when overwhelmed",
    "ko": "괜찮은 척 가면 — 무너질 것 같아도 습관적으로 \"나 괜찮아\"라고 말함"
  },
  {
    "id": "guilt_sad",
    "en": "Guilt Over Negative Moods — Treating sadness or anger as personal weakness",
    "ko": "부정 감정 죄책감 — 슬픔·분노를 나약함이나 실패로 취급함"
  },
  {
    "id": "numb_out",
    "en": "Emotional Numbing — Pushing feelings down until everything feels flat",
    "ko": "감정 마비 — 불편한 감정을 계속 누르다 결국 기쁨까지 무뎌짐"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Toxic-Positivity Pressure — Drop the Mask Safely",
    "koT": "강한 독성 긍정 압박 — 억지 미소 가면을 내려놓으세요",
    "enD": "Suppressing difficult emotions takes enormous energy and fuels numbness. Naming pain honestly is not pessimism—it is how emotions actually metabolize.",
    "koD": "불편한 감정을 억누르는 데 막대한 에너지가 새고 있습니다. 힘듦을 인정하는 것은 비관이 아니라 감정이 지나가도록 여는 유일한 통로입니다.",
    "enS": "\"This genuinely hurts right now, and I do not need to spin it into a silver lining today. Both grief and hope can coexist.\"",
    "koS": "\"지금 이건 진짜 속상하고 힘든 일이야. 오늘 억지로 긍정적인 교훈을 찾지 않아도 괜찮아. 힘듦과 희망은 함께 있을 수 있어.\"",
    "enL": [
      "Replace \"At least...\" with \"This is genuinely hard right now, and it makes sense that I feel this way.\"",
      "Name the exact emotion with granularity (disappointed, lonely, drained—not just \"bad\").",
      "Allow 5 minutes of honest feeling without fixing, debating, or cheering yourself up."
    ],
    "koL": [
      "\"그래도 다행히...\" 대신 \"지금 이건 진짜 버겁고, 이렇게 느끼는 게 당연해\"로 바꿔 말하세요.",
      "\"기분 별로\" 대신 구체적 감정 이름(서운함·허탈함·외로움)을 붙여 주세요.",
      "5분 동안 감정을 고치려 들지 말고 그대로 느껴지도록 두세요."
    ]
  },
  "mid": {
    "enT": "Mixed Validation Habit — Practice \"Both-And\" Honesty",
    "koT": "혼합형 감정 수용 — \"둘 다 맞다(Both-And)\" 연습 구간",
    "enD": "You accept emotions in theory, yet pressure yourself to bounce back quickly when stressed. Replacing \"but\" with \"and\" unlocks emotional agility.",
    "koD": "감정 존중의 중요성을 알지만 스트레스가 오면 빨리 털어내야 한다는 압박이 올라옵니다. \"하지만\"을 \"그리고\"로 바꾸는 연습이 효과적입니다.",
    "enS": "\"I am grateful for what works AND I am exhausted by what is hard right now. Both are completely true.\"",
    "koS": "\"감사한 점도 있지만, 지금 이 부분은 정말 지치고 힘들어. 두 마음 다 내 진짜 감정이야.\"",
    "enL": [
      "Catch yourself before saying \"I shouldn’t feel this way\"—swap it for \"I notice I am feeling...\"",
      "Tell one safe friend the unedited truth instead of \"I am fine.\"",
      "Treat emotions as useful weather data, never commands or character flaws."
    ],
    "koL": [
      "\"이러면 안 되는데\"가 나올 때 \"지금 내 안에 이런 감정이 올라왔구나\"로 관찰자 시점을 쓰세요.",
      "신뢰하는 사람 1명에게 \"괜찮아\" 대신 오늘의 솔직한 1줄을 전해 보세요.",
      "감정을 고쳐야 할 결함이 아니라 상태를 알려주는 날씨 데이터로 대하세요."
    ]
  },
  "high": {
    "enT": "Strong Emotional Agility — Honest, Grounded Self-Validation",
    "koT": "건강한 감정 유연성 — 정직하고 단단한 자기 타당화 유지 중",
    "enD": "You let difficult emotions exist without forcing fake optimism. Keep holding that honest space for yourself and others.",
    "koD": "억지 긍정 없이 감정을 있는 그대로 바라보는 건강한 태도를 갖추고 있습니다. 이 정직한 여유를 계속 지켜가세요.",
    "enS": "\"Every emotion carries information without defining my whole future. I can feel this honestly and still move forward.\"",
    "koS": "\"모든 감정은 나를 무너뜨리는 적이 아니라 중요한 신호다. 솔직히 느끼면서도 내 길을 걸어갈 수 있다.\"",
    "enL": [
      "Continue using \"and\" statements to hold complex feelings calmly.",
      "Model honest validation for friends (\"That really stinks—I am here with you\").",
      "Check in briefly when big life changes stir unexpected grief or relief."
    ],
    "koL": [
      "복합적인 감정을 \"그리고\" 문장으로 부드럽게 품는 습관을 유지하세요.",
      "주변이 힘들 때도 조언 대신 \"정말 속상했겠다\"로 먼저 타당화해 주세요.",
      "큰 변화가 올 때 예상치 못한 감정도 반갑게 맞아 주세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_emo_val_v1";
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
      window.gtag('event', "emotional_validation_complete", {
        tool_slug: "emotional-validation-reframer",
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
      var shareUrl = "https://dopabrain.com/portal/tools/emotional-validation-reframer.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "emotional-validation-reframer",
        filename: 'dopabrain-emotional-validation-reframer-card.png',
        badge: "EMOTIONAL AGILITY & HONEST VALIDATION",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#a855f7",
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
