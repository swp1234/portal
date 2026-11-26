/* Night-Shift & Rotating-Shift Circadian Sleep Anchor
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Night-Shift & Rotating-Shift Circadian Sleep Anchor | DopaBrain",
    "metaDesc": "Working nights or rotating shifts and struggling to stay asleep past noon? Audit 5 circadian-light and caffeine leaks locally and lock in a protected anchor sleep window.",
    "kicker": "SHIFT WORK SLEEP • ANCHOR CIRCADIAN PROTOCOL",
    "heroTitle": "Night-Shift & Rotating-Shift Circadian Sleep Anchor",
    "heroLead": "Working nights or rotating shifts and struggling to stay asleep past noon? Audit 5 circadian-light and caffeine leaks locally and lock in a protected anchor sleep window.",
    "chip1": "5 Shift Sleep Leaks",
    "chip2": "Light & Anchor Plan",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT YOUR SHIFT-WORK SLEEP DISRUPTORS (1 = PROTECTED, 5 = SEVERE)",
    "step1Title": "What is breaking up your daytime sleep or shift transitions?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: My consistent 4-hour \"anchor sleep\" overlap window across work & off days (100% local):",
    "ctaBtn": "Build My Shift Circadian Plan",
    "resultBadge": "STEP 2 • YOUR SHIFT-WORKER LIGHT & ANCHOR PROTOCOL",
    "noteTitle": "My Protected Anchor Sleep Window",
    "meterLabel": "Circadian Protection Score",
    "scriptTitle": "Household Daytime-Sleep Boundary Line",
    "stepsTitle": "3 Evidence-Based Circadian Moves for Shift Workers",
    "stickyTitle": "Need steady brown noise to block daytime street & household noise?",
    "stickySub": "Open the free White Noise & Sound Masking Mixer",
    "stickyBtn": "Sound Masker →",
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
    "title": "야간·교대근무 수면 앵커 & 생체리듬 보호 플래너 | DopaBrain",
    "metaDesc": "야간·교대근무 후 정오만 되면 눈이 번쩍 떠져 만성 피로에 시달리나요? 5가지 빛·카페인·체온 방해 요인을 점검하고 안정적인 앵커 수면 구간을 설계하세요.",
    "kicker": "교대·야간근무 수면 · 생체시계 앵커 플래너",
    "heroTitle": "야간·교대근무 수면 앵커 & 생체리듬 보호 플래너",
    "heroLead": "야간·교대근무 후 정오만 되면 눈이 번쩍 떠져 만성 피로에 시달리나요? 5가지 빛·카페인·체온 방해 요인을 점검하고 안정적인 앵커 수면 구간을 설계하세요.",
    "chip1": "5가지 교대수면 누수",
    "chip2": "빛·앵커 수면 플랜",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 야간·교대근무 수면 방해 요인 점검 (1 = 양호, 5 = 심각)",
    "step1Title": "낮 수면이나 교대 전환 시 가장 크게 리듬을 깨뜨리는 요인은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 근무일과 휴무일에 공통으로 지킬 4시간 \"앵커 수면\" 고정 구간 (100% 로컬):",
    "ctaBtn": "내 교대근무 수면 앵커 플랜 보기",
    "resultBadge": "2단계 • 교대근무자 빛 조절 및 앵커 수면 프로토콜",
    "noteTitle": "나의 고정 앵커 수면 구간",
    "meterLabel": "생체시계 보호 지수",
    "scriptTitle": "낮 수면을 지키기 위한 가족·주변 안내 문장",
    "stepsTitle": "교대근무 수면 질을 높이는 3가지 핵심 전략",
    "stickyTitle": "낮 수면 중 바깥 소음과 생활 소음을 덮어줄 브라운노이즈가 필요하신가요?",
    "stickySub": "무료 화이트노이즈 사운드 믹서로 조용한 낮 수면 환경 만들기",
    "stickyBtn": "소음 차단 →",
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
    "title": "夜班与倒班昼夜节律锚定睡眠规划 | DopaBrain",
    "heroTitle": "夜班与倒班昼夜节律锚定睡眠规划",
    "heroLead": "阻断清晨强光与咖啡因干扰，为倒班人群设计稳固的锚定睡眠窗口。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "夜勤・シフト勤務サーカディアン睡眠設計 | DopaBrain",
    "heroTitle": "夜勤・シフト勤務サーカディアン睡眠設計",
    "heroLead": "帰宅時の朝日遮断とアンカー睡眠で交代勤務の昼間睡眠を守ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Ancla Circadiana para Turnos Nocturnos | DopaBrain",
    "heroTitle": "Ancla Circadiana para Turnos Nocturnos",
    "heroLead": "Bloquea la luz matutina y protege un sueño ancla estable en trabajos por turnos.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Âncora Circadiana para Turno Noturno | DopaBrain",
    "heroTitle": "Âncora Circadiana para Turno Noturno",
    "heroLead": "Bloqueie luz matinal e monte um sono âncora consistente para trabalho em turnos.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Nachtschicht- & Zirkadian-Schlafanker | DopaBrain",
    "heroTitle": "Nachtschicht- & Zirkadian-Schlafanker",
    "heroLead": "Stoppe Morgenlicht-Lecks und plane ein stabiles Anker-Schlaffenster für Schichtarbeit.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Ancre Circadienne Travail de Nuit | DopaBrain",
    "heroTitle": "Ancre Circadienne Travail de Nuit",
    "heroLead": "Bloquez la lumière matinale et protégez un sommeil ancre stable en horaires décalés.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Якорный сон для ночных смен | DopaBrain",
    "heroTitle": "Якорный сон для ночных смен",
    "heroLead": "Защитите дневной сон от утреннего света и настройте стабильный циркадный якорь.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "नाइट-शिफ्ट सर्केडियन स्लीप एंकर प्लानर | DopaBrain",
    "heroTitle": "नाइट-शिफ्ट सर्केडियन स्लीप एंकर प्लानर",
    "heroLead": "सुबह की धूप व कैफीन को नियंत्रित करें और शिफ्ट वर्क के लिए स्थिर नींद एंकर बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Perencana Tidur Jangkar Shift Malam | DopaBrain",
    "heroTitle": "Perencana Tidur Jangkar Shift Malam",
    "heroLead": "Atur pemblokiran cahaya pagi dan jadwal tidur jangkar untuk pekerja shift malam.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Gece Vardiyası Sirkadiyen Uyku Planlayıcı | DopaBrain",
    "heroTitle": "Gece Vardiyası Sirkadiyen Uyku Planlayıcı",
    "heroLead": "Sabah ışığı sızıntılarını engelleyin ve vardiya için sabit uyku penceresi kurun.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "morning_commute_sun",
    "en": "Unfiltered Morning Sun — Driving home into bright daylight without dark sunglasses",
    "ko": "퇴근길 직사광선 — 선글라스 없이 밝은 아침 햇빛을 그대로 쬐며 귀가함"
  },
  {
    "id": "late_shift_caffeine",
    "en": "Late-Shift Caffeine — Drinking coffee or energy drinks in the last 5 hours of a shift",
    "ko": "근무 후반 카페인 — 퇴근 5시간 이내에 커피·에너지음료를 마심"
  },
  {
    "id": "light_noise_bedroom",
    "en": "Daytime Light & Noise Leaks — Thin curtains, doorbell chimes, or phone pings during sleep",
    "ko": "낮 빛·소음 유입 — 암막 부족, 택배·초인종·알림 때문에 낮잠이 자주 끊김"
  },
  {
    "id": "full_flip_days_off",
    "en": "Extreme Off-Day Flip — Swinging 12 hours back to full daytime schedule on every 2-day break",
    "ko": "휴무일 극단 반전 — 이틀 쉴 때마다 12시간 리듬을 완전히 뒤집어 시차병 반복"
  },
  {
    "id": "heavy_pre_bed_meal",
    "en": "Heavy Pre-Sleep Meal — Eating a large sugary or greasy meal right before daytime bedtime",
    "ko": "취침 직전 과식 — 낮 취침 직전 무거운 식사로 소화·체온 각성이 지속됨"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Circadian Clash — Block Morning Light & Lock In Blackout Conditions First",
    "koT": "생체시계 충돌 심함 — 퇴근길 햇빛 차단과 암막·소음 차단을 최우선으로 세팅하세요",
    "enD": "Circadian researcher Charmane Eastman proved that morning sunlight on the commute home tells the brain’s master clock (SCN) to halt melatonin immediately. Wearing dark wraparound sunglasses on the way home plus full blackout curtains adds 60–90 minutes of daytime sleep.",
    "koD": "생체리듬 연구에 따르면 야간 퇴근길 아침 햇빛은 뇌 시교차상핵(SCN)에 즉시 기상 신호를 보내 멜라토닌을 끊습니다. 퇴근 시 짙은 선글라스 착용과 완전 암막·소음 마스킹만으로 낮 수면이 1시간 이상 깊어집니다.",
    "enS": "\"Daytime between 8 AM and 3 PM is my true midnight—my phone stays on Do Not Disturb and my room stays cool, dark, and quiet.\"",
    "koS": "\"오전 8시~오후 3시는 나만의 한밤중이야. 방해금지·암막·소음 차단으로 이 시간을 온전히 지킬게.\"",
    "enL": [
      "Put on dark blue-blocking sunglasses BEFORE stepping outside after your night shift.",
      "Cut all caffeine at least 5–6 hours before your planned daytime bedtime.",
      "Combine blackout curtains (or a contoured sleep mask) + cool 18–20°C room + continuous brown noise."
    ],
    "koL": [
      "야간 퇴근 후 건물 밖으로 나가기 전에 미리 짙은 선글라스를 착용하세요.",
      "목표 낮 취침 5~6시간 전부터는 모든 카페인 섭취를 중단하세요.",
      "완전 암막 커튼(또는 수면안대) + 서늘한 19도 안팎 온도 + 연속 브라운노이즈를 결합하세요."
    ]
  },
  "mid": {
    "enT": "Partial Protection — Use Compromise Anchor Sleep on Off Days",
    "koT": "부분 보호 상태 — 휴무일에도 \"절충 앵커 수면\"으로 시차 피로를 줄이세요",
    "enD": "Your bedroom setup is decent, yet full 12-hour off-day flips keep creating permanent jet lag. Keeping a 3–4 hour overlapping \"anchor sleep\" window softens transitions dramatically.",
    "koD": "수면 환경은 갖춰졌지만 휴무일마다 리듬을 완전히 뒤집으면 매주 시차병을 겪게 됩니다. 근무일과 휴무일에 3~4시간 겹치는 \"앵커 수면\"을 유지하면 훨씬 덜 피곤합니다.",
    "enS": "\"Keeping a steady 4-hour anchor sleep protects both my shift alertness and my days off.\"",
    "koS": "\"4시간 겹치는 앵커 수면을 지켜야 근무일 집중력과 휴무일 컨디션을 둘 다 지킬 수 있어.\"",
    "enL": [
      "On days off after nights, take a shorter morning recovery sleep + stay up slightly later rather than swinging 12 hours abruptly.",
      "Use bright light intentionally during the first half of your night shift.",
      "Eat your main meal early in the shift and keep pre-bed food light and warm."
    ],
    "koL": [
      "야간 근무 후 휴무일에는 리듬을 12시간 확 뒤집지 말고 3~4시간 겹치는 절충 구간을 유지하세요.",
      "야간 근무 전반부에 밝은 조명을 의도적으로 활용해 각성을 도우세요.",
      "주 식사는 근무 초반에 마치고 낮 취침 전에는 가벼운 간식 정도로 조절하세요."
    ]
  },
  "high": {
    "enT": "Pro-Grade Shift Sleep Hygiene — Keep Guarding Your Light Timing",
    "koT": "숙련된 교대 수면 관리 — 빛·카페인 타이밍을 훌륭하게 지키고 있습니다",
    "enD": "You have mastered the hardest circadian discipline in modern work. Keep protecting your blackout zone and strategic caffeine cutoff.",
    "koD": "가장 어려운 교대근무 생체리듬 관리를 매우 잘 실천하고 계십니다. 지금의 빛 차단과 카페인 컷오프 원칙을 꾸준히 유지하세요.",
    "enS": "\"Light timing and dark recovery are my strongest performance tools on shift work.\"",
    "koS": "\"빛 타이밍과 어두운 회복 환경이 교대근무 컨디션을 지키는 최고의 무기다.\"",
    "enL": [
      "Keep your bedroom strictly cool and phone-silenced during daytime sleep.",
      "Use a short 20-minute prophylactic nap before starting a fresh block of nights.",
      "Review caffeine timing whenever your shift rotation changes."
    ],
    "koL": [
      "낮 수면 시간 동안 서늘한 침실과 방해금지 모드를 계속 유지하세요.",
      "새 야간 로테이션 시작 전 20분 예방적 낮잠으로 첫날 피로를 줄이세요.",
      "교대 스케줄이 바뀔 때마다 카페인 컷오프 시각을 함께 재조정하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_night_shift_anchor_v1";
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
      window.gtag('event', "night_shift_anchor_complete", {
        tool_slug: "night-shift-circadian-anchor",
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
      var shareUrl = "https://dopabrain.com/portal/tools/night-shift-circadian-anchor.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "night-shift-circadian-anchor",
        filename: 'dopabrain-night-shift-circadian-anchor-card.png',
        badge: "SHIFT WORK SLEEP • ANCHOR CIRCADIAN PROTOCOL",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#38bdf8",
        accent2: "#818cf8"
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
