/* Background Audio & Podcast Focus Interference Audit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Background Audio & Podcast Focus Interference Audit | DopaBrain",
    "metaDesc": "Playing podcasts, lyric playlists, or YouTube talk shows while writing or coding—then re-reading the same sentence 4 times? Match the right soundscape to each cognitive task locally.",
    "kicker": "COGNITIVE ACOUSTICS • PODCAST & BACKGROUND AUDIO FOCUS AUDIT",
    "heroTitle": "Background Audio & Podcast Focus Interference Audit",
    "heroLead": "Playing podcasts, lyric playlists, or YouTube talk shows while writing or coding—then re-reading the same sentence 4 times? Match the right soundscape to each cognitive task locally.",
    "chip1": "5 Audio Traps",
    "chip2": "Task-Sound Matcher",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • CHECK YOUR BACKGROUND AUDIO HABITS (1 = MATCHED, 5 = COMPETING)",
    "step1Title": "How is background audio currently competing with your working memory?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The task I need deep verbal/coding focus for right now (100% local):",
    "ctaBtn": "Match My Optimal Focus Sound",
    "resultBadge": "STEP 2 • YOUR COGNITIVE SOUND-TASK MATCH",
    "noteTitle": "Target Focus Task",
    "meterLabel": "Auditory Focus Clarity",
    "scriptTitle": "Golden Acoustic Rule for Deep Work",
    "stepsTitle": "3 Sound Shifts That Instantly Double Reading & Writing Speed",
    "stickyTitle": "Ready to swap talking tabs for clean brown noise or gentle rain?",
    "stickySub": "Open the free Rain & Brown Noise Mixer",
    "stickyBtn": "Play Rain / Noise →",
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
    "title": "유튜브·팟캐스트 배경 소리 집중 간섭 점검 & 작업별 사운드 매칭 랩 | DopaBrain",
    "metaDesc": "글쓰기·코딩·공부할 때 유튜브 토크나 가사 있는 노래를 틀어 두었다가 같은 문장을 4번씩 다시 읽고 계신가요? 작업 유형별 최적 집중 사운드를 60초 만에 매칭하세요.",
    "kicker": "집중 음향 · 팟캐스트·유튜브 배경 소리 집중력 간섭 점검 & 사운드 매칭 랩",
    "heroTitle": "유튜브·팟캐스트 배경 소리 집중 간섭 점검 & 작업별 사운드 매칭 랩",
    "heroLead": "글쓰기·코딩·공부할 때 유튜브 토크나 가사 있는 노래를 틀어 두었다가 같은 문장을 4번씩 다시 읽고 계신가요? 작업 유형별 최적 집중 사운드를 60초 만에 매칭하세요.",
    "chip1": "5가지 청각 간섭",
    "chip2": "작업별 사운드 매칭",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 배경 소리·음향 습관 점검 (1 = 최적 매칭, 5 = 집중 방해)",
    "step1Title": "지금 틀어 둔 배경 소리가 작업 기억과 충돌하는 방식은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 지금 깊은 집중이 필요한 핵심 작업 1가지 (100% 로컬):",
    "ctaBtn": "내 작업별 최적 집중 사운드 보기",
    "resultBadge": "2단계 • 작업 기억을 살리는 사운드 매칭 처방",
    "noteTitle": "목표 집중 작업",
    "meterLabel": "청각 집중 명료도",
    "scriptTitle": "딥워크 음향 황금 규칙",
    "stepsTitle": "읽기·쓰기 속도를 바로 끌어올리는 3가지 음향 전환",
    "stickyTitle": "말소리 탭을 끄고 깔끔한 백색소음·빗소리로 바로 전환해 볼까요?",
    "stickySub": "무료 백색소음·빗소리 플레이어 열기",
    "stickyBtn": "백색소음 열기 →",
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
    "title": "播客与背景音专注干扰审计 | DopaBrain",
    "heroTitle": "播客与背景音专注干扰审计",
    "heroLead": "识别写作编程时的语音干扰，匹配最适合深度专注的无词白噪音与雨声。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "ポッドキャスト・BGM集中干渉診断ラボ | DopaBrain",
    "heroTitle": "ポッドキャスト・BGM集中干渉診断ラボ",
    "heroLead": "執筆・学習中の話し声干渉を見直し、作業に最適な無歌詞サウンドをマッチングします。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Auditoría de Audio de Fondo y Enfoque | DopaBrain",
    "heroTitle": "Auditoría de Audio de Fondo y Enfoque",
    "heroLead": "Detecta interferencia verbal al escribir o programar y elige el sonido ideal sin letra.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Auditoria de Áudio de Fundo e Foco | DopaBrain",
    "heroTitle": "Auditoria de Áudio de Fundo e Foco",
    "heroLead": "Veja quando podcasts atrapalham leitura/código e combine sons ideais sem voz.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Podcast- & Hintergrund-Audio Fokus-Audit | DopaBrain",
    "heroTitle": "Podcast- & Hintergrund-Audio Fokus-Audit",
    "heroLead": "Erkenne Sprach-Interferenz beim Schreiben/Coden und finde optimale wortlose Fokus-Klänge.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Audit Audio de Fond & Focus (Podcasts) | DopaBrain",
    "heroTitle": "Audit Audio de Fond & Focus (Podcasts)",
    "heroLead": "Repérez l’interférence vocale en lecture/code et associez le bon fond sonore sans paroles.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Аудит фонового аудио и подкастов для фокуса | DopaBrain",
    "heroTitle": "Аудит фонового аудио и подкастов для фокуса",
    "heroLead": "Проверьте речевую интерференцию при работе с текстом и подберите идеальный фоновый звук.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "पॉडकास्ट और बैकग्राउंड ऑडियो फ़ोकस ऑडिट | DopaBrain",
    "heroTitle": "पॉडकास्ट और बैकग्राउंड ऑडियो फ़ोकस ऑडिट",
    "heroLead": "पढ़ते/कोडिंग करते समय बोलने वाले ऑडियो की रुकावट जाँचें और सही शांत ध्वनि चुनें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Audit Gangguan Fokus Podcast & Audio Latar | DopaBrain",
    "heroTitle": "Audit Gangguan Fokus Podcast & Audio Latar",
    "heroLead": "Kenali benturan audio bicara saat menulis/coding dan pilih suara fokus tanpa lirik.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Podcast ve Arka Plan Sesi Odak Denetimi | DopaBrain",
    "heroTitle": "Podcast ve Arka Plan Sesi Odak Denetimi",
    "heroLead": "Yazarken konuşma sesinin odak bölmesini ölçün ve sözsüz odak sesini eşleştirin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "verbal_podcast_clash",
    "en": "Talk/Podcast During Writing — Listening to human speech while trying to read, write, or code",
    "ko": "글쓰기 중 말소리 — 읽기·쓰기·코딩하면서 팟캐스트나 유튜브 토크를 틀어 둠"
  },
  {
    "id": "new_lyrics_distraction",
    "en": "Unfamiliar Vocal Tracks — Playing brand-new lyric songs that pull attention onto the singer",
    "ko": "새로운 가사 음악 — 처음 듣는 가사 있는 노래로 언어 뇌가 계속 분산됨"
  },
  {
    "id": "autoplay_rabbit_hole",
    "en": "YouTube Tab Switching — Spending 8 minutes hunting for the \"perfect focus video\" every half hour",
    "ko": "BGM 탐색 루프 — 30분마다 \"딱 맞는 플리\"를 찾느라 유튜브 탭을 헤맴"
  },
  {
    "id": "ad_volume_jolt",
    "en": "Mid-Roll Audio Ads — Sudden loud commercial breaks jolting you out of flow state",
    "ko": "중간 광고 충격 — 몰입할 때쯤 갑자기 터지는 광고 소리에 흐름이 끊김"
  },
  {
    "id": "silence_restlessness",
    "en": "Silence Under-Stimulation — Feeling restless in dead silence without steady low-level ambient noise",
    "ko": "완전 무음 불안 — 너무 조용하면 오히려 잡생각이 늘어 일정한 배경음이 필요함"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Verbal Interference — Pause Speech/Lyrics & Switch to Rain, Brown Noise, or 1 Loop Track",
    "koT": "언어 간섭 높음 — 말소리·가사를 끄고 빗소리·브라운노이즈 또는 익숙한 연주곡 1개로 전환하세요",
    "enD": "Cognitive psychology (\"irrelevant speech effect\", Baddeley) shows human speech directly collides with your phonological loop—cutting reading comprehension and writing fluency while feeling deceptively cozy.",
    "koD": "인지심리학의 \"무관한 말소리 효과(Baddeley)\"에 따르면 사람의 목소리와 가사는 읽기·쓰기를 담당하는 음운 회로를 직접 점유해 이해력과 속도를 크게 떨어뜨립니다.",
    "enS": "\"Save podcasts for chores, walks, and admin; give reading, writing, and coding wordless brown noise, rain, or steady instrumental loops.\"",
    "koS": "\"팟캐스트·토크는 산책·설거지·단순 정리에 아껴 두고, 읽기·쓰기·코딩에는 가사 없는 빗소리·브라운노이즈를 켜세요.\"",
    "enL": [
      "Close YouTube talk tabs before writing and open one wordless rain/brown-noise stream.",
      "Reserve podcasts and lyric albums strictly for physical/routine tasks (dishes, commuting, sorting files).",
      "Use a single familiar game soundtrack or ambient track on repeat so you stop playlist-hunting."
    ],
    "koL": [
      "글쓰기·공부 전 말소리 탭을 닫고 가사 없는 빗소리·브라운노이즈 1개만 켜 두세요.",
      "팟캐스트와 노래는 산책·청소·단순 파일 정리 시간의 보상으로 남겨 두세요.",
      "플리 탐색을 막기 위해 익숙한 연주곡 1개나 단색 노이즈를 고정 루프로 쓰세요."
    ]
  },
  "mid": {
    "enT": "Mild Audio Drift — Match Wordless Audio to Writing & Save Podcasts for Routine Tasks",
    "koT": "가벼운 청각 분산 — 글쓰기엔 무가사 사운드, 단순 작업엔 팟캐스트로 분리하세요",
    "enD": "Separating verbal tasks from verbal audio clears surprising mental friction immediately.",
    "koD": "언어 작업과 말소리 콘텐츠만 분리해도 집중 밀도가 체감될 만큼 올라갑니다.",
    "enS": "\"Wordless sound for word-heavy work.\"",
    "koS": "\"글을 다루는 작업에는 말 없는 소리를.\"",
    "enL": [
      "Keep 1 bookmarked brown-noise or rain page.",
      "Mute auto-playing video queues.",
      "Use instrumental lo-fi only at low background volume."
    ],
    "koL": [
      "빗소리·브라운노이즈 탭 1개를 즐겨찾기해 두세요.",
      "자동 재생 영상 대기열을 꺼 두세요.",
      "연주곡 BGM도 말소리보다 낮은 잔잔한 볼륨으로 유지하세요."
    ]
  },
  "high": {
    "enT": "Clean Acoustic Hygiene — Flow-Friendly Soundscape",
    "koT": "깔끔한 음향 위생 — 몰입에 최적화된 사운드 환경",
    "enD": "Your audio choices protect verbal working memory and eliminate playlist friction.",
    "koD": "작업 성격에 맞는 음향 선택으로 언어 작업 기억을 잘 보호하고 있습니다.",
    "enS": "\"Consistent sound cues trigger fast flow.\"",
    "koS": "\"일관된 소리 신호가 빠른 몰입을 부른다.\"",
    "enL": [
      "Use the same rain/ambient cue to start deep blocks.",
      "Keep volume gentle to avoid ear fatigue.",
      "Enjoy favorite podcasts guilt-free on walks."
    ],
    "koL": [
      "딥워크 시작 시 항상 같은 빗소리·환경음을 신호로 쓰세요.",
      "귀 피로를 막기 위해 낮은 볼륨을 유지하세요.",
      "산책 시간에 좋아하는 팟캐스트를 마음껏 즐기세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_audio_focus_v1";
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
      window.gtag('event', "audio_focus_audit_complete", {
        tool_slug: "podcast-background-noise-focus-audit",
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
      var shareUrl = "https://dopabrain.com/portal/tools/podcast-background-noise-focus-audit.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "podcast-background-noise-focus-audit",
        filename: 'dopabrain-podcast-background-noise-focus-audit-card.png',
        badge: "COGNITIVE ACOUSTICS • PODCAST & BACKGROUND AUDIO FOCUS AUDIT",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#8b5cf6",
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
