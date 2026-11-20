/* ADHD & Executive Function Friction Audit + 10-Min Body-Doubling Timer
 * 100% client-side, privacy-safe, XSS-safe (textContent only), 12-language support.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'ADHD & Executive Function Friction Audit + Body-Doubling Timer | DopaBrain',
      metaDesc: 'Free 12-language executive function self-check. Pinpoint Task Initiation, Time Blindness, Working Memory, or Dopamine friction and launch a 10-minute body-doubling sprint.',
      skip: 'Skip to Executive Function Audit',
      back: '← Tools Catalog',
      langLabel: 'Language:',
      kicker: 'EXECUTIVE FUNCTION & FOCUS LAB',
      heroTitle: 'ADHD & Executive Function Friction Audit',
      heroLead: 'Stuck staring at an open tab? Rate 5 executive function friction points to pinpoint your exact bottleneck — then launch a gentle 10-minute body-doubling sprint with one tiny anchor step.',
      chip1: '5 Friction Axes',
      chip2: '10-Min Body-Doubling Timer',
      chip3: '100% Private (Local)',
      step1Badge: "STEP 1 • RATE TODAY'S 5 FRICTION AXES",
      step1Title: 'Where is your focus getting stuck right now?',
      step1Sub: 'Rate each executive function friction axis from 0 (None) to 3 (Severe) — your answers never leave this browser.',
      anchorLabel: 'Optional: One tiny 10-minute anchor task (stays 100% local):',
      auditBtn: 'Pinpoint My Focus Bottleneck',
      resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR PRIMARY FRICTION PROFILE',
      yourAnchorTitle: 'Your Single 10-Minute Anchor',
      meterLoad: 'Executive Friction Load',
      meterPeak: 'Peak Bottleneck Intensity',
      accomTitle: '3 Low-Friction Micro-Accommodations',
      startSprint: 'Start 10-Min Body-Doubling Sprint',
      stopSprint: 'Pause',
      storyBtn: 'Save 1080×1920 Story Card (PNG)',
      copyBtn: 'Copy Plan',
      shareBtn: 'Share Tool',
      bridgeProcTitle: 'Procrastination Root Decoder',
      bridgeProcDesc: 'Unpack emotional avoidance and kick off a 5-min micro-sprint.',
      bridgeDopamineTitle: 'Dopamine Detox Protocol',
      bridgeDopamineDesc: 'Recalibrate high-stimulation loops and protect morning focus.',
      bridgeRsdTitle: 'RSD Sensitivity Audit',
      bridgeRsdDesc: 'Calm rejection sensitivity spikes with a 90s somatic cool-down.',
      refTitle: 'Scientific Frameworks & References',
      discTitle: 'Non-Diagnostic Educational Disclaimer',
      discText: 'This tool is an educational productivity and executive-function reflection aid, not an ADHD clinical screening or medical diagnosis.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: 'Protect your focus bandwidth',
      stickySub: 'Build a realistic Dopamine Reset Protocol for deep work',
      stickyBtn: 'Dopamine Reset →',
      copied: 'Micro-accommodation plan copied!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Story Card saved!',
      sprintReady: 'Silent body-doubling mode ready. Just stay with your one tiny step for 10 minutes.',
      sprintDone: '10-minute sprint complete! You broke inertia — celebrate this win before deciding whether to continue.'
    },
    ko: {
      title: 'ADHD·실행기능 마찰 점검 & 10분 바디더블링 타이머 | DopaBrain',
      metaDesc: '과제 시작 마비, 시간 감각 저하, 작업기억 과부하, 도파민 부족 등 5가지 실행기능 병목을 점검하고 10분 바디더블링 스프린트를 시작하세요.',
      skip: '실행기능 마찰 점검으로 이동',
      back: '← 도구 목록',
      langLabel: '언어:',
      kicker: '실행기능 & 집중력 랩',
      heroTitle: 'ADHD & 실행기능 마찰 점검',
      heroLead: '해야 할 일을 알면서도 시작하지 못하고 멈춰 있나요? 5가지 실행기능 마찰 축을 점검해 핵심 병목을 찾고, 부담 없는 10분 바디더블링 타이머로 시동을 거세요.',
      chip1: '5가지 실행기능 축',
      chip2: '10분 바디더블링 타이머',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 오늘의 5가지 실행기능 마찰 평가',
      step1Title: '지금 집중력이 어디서 막히고 있나요?',
      step1Sub: '각 항목을 0(없음) ~ 3(심함)으로 선택하세요. 모든 입력은 브라우저에만 머뭅니다.',
      anchorLabel: '선택: 딱 10분만 해볼 초미니 과제 1개 (100% 로컬 저장):',
      auditBtn: '내 핵심 집중 병목 찾기',
      resetBtn: '초기화',
      resultBadge: '2단계 • 오늘의 핵심 실행기능 병목',
      yourAnchorTitle: '나의 10분 초미니 앵커 과제',
      meterLoad: '전체 실행기능 부하도',
      meterPeak: '핵심 병목 강도',
      accomTitle: '저마찰 맞춤형 환경 조정 3가지',
      startSprint: '10분 바디더블링 스프린트 시작',
      stopSprint: '일시정지',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)',
      copyBtn: '전략 복사',
      shareBtn: '도구 공유',
      bridgeProcTitle: '미루기 원인 디코더',
      bridgeProcDesc: '감정적 회피 원인을 풀고 5분 초단기 시동을 겁니다.',
      bridgeDopamineTitle: '도파민 디톡스 프로토콜',
      bridgeDopamineDesc: '과자극 루프를 재조정해 아침 딥워크 집중력을 회복합니다.',
      bridgeRsdTitle: 'RSD 거절 민감성 점검',
      bridgeRsdDesc: '비판·거절 불안 급등 시 90초 신체 진정 타이머를 실행합니다.',
      refTitle: '과학적 프레임워크 및 참고문헌',
      discTitle: '비진단 교육용 안내',
      discText: '본 도구는 교육용 실행기능·생산성 자기성찰 도구이며 의학적 ADHD 진단 또는 임상 선별검사가 아닙니다.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '깊은 집중력을 지켜보세요',
      stickySub: '현실적인 도파민 리셋 프로토콜로 주의력을 회복하세요',
      stickyBtn: '도파민 리셋 →',
      copied: '실행기능 맞춤 전략을 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 스토리 카드를 저장했습니다!',
      sprintReady: '조용한 바디더블링 모드 준비 완료. 딱 10분만 아주 작은 첫 단계에 머물러 보세요.',
      sprintDone: '10분 바디더블링 완료! 멈춤 관성을 깨뜨렸습니다. 계속할지 쉬어갈지 가볍게 선택하세요.'
    },
    zh: { title: 'ADHD 与执行功能摩擦自检 + 10分钟陪伴专注计时器 | DopaBrain', heroTitle: 'ADHD 与执行功能摩擦自检', auditBtn: '定位我的专注瓶颈', resetBtn: '重置', startSprint: '开始 10 分钟陪伴专注', stopSprint: '暂停', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制方案', shareBtn: '分享工具', back: '← 工具目录', stickyBtn: '多巴胺重置 →' },
    ja: { title: 'ADHD・実行機能フリクション診断＆10分集中タイマー | DopaBrain', heroTitle: 'ADHD＆実行機能フリクション診断', auditBtn: '集中ボトルネックを特定', resetBtn: 'リセット', startSprint: '10分伴走スプリント開始', stopSprint: '一時停止', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'プランをコピー', shareBtn: 'ツールを共有', back: '← ツール一覧', stickyBtn: 'ドーパミンリセット →' },
    es: { title: 'Auditoría de Fricción Ejecutiva y Temporizador 10 Min | DopaBrain', heroTitle: 'Auditoría de Función Ejecutiva (TDAH)', auditBtn: 'Detectar mi bloqueo', resetBtn: 'Reiniciar', startSprint: 'Iniciar sprint de 10 min', stopSprint: 'Pausar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar plan', shareBtn: 'Compartir', back: '← Catálogo', stickyBtn: 'Reset de dopamina →' },
    pt: { title: 'Auditoria de Função Executiva e Timer 10 Min | DopaBrain', heroTitle: 'Auditoria de Função Executiva (TDAH)', auditBtn: 'Identificar gargalo', resetBtn: 'Redefinir', startSprint: 'Iniciar sprint de 10 min', stopSprint: 'Pausar', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar plano', shareBtn: 'Compartilhar', back: '← Catálogo', stickyBtn: 'Reset de dopamina →' },
    de: { title: 'ADHS- & Exekutivfunktion-Check + 10-Min-Timer | DopaBrain', heroTitle: 'ADHS & Exekutivfunktion-Check', auditBtn: 'Engpass erkennen', resetBtn: 'Zurücksetzen', startSprint: '10-Min-Sprint starten', stopSprint: 'Pause', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Plan kopieren', shareBtn: 'Teilen', back: '← Katalog', stickyBtn: 'Dopamin-Reset →' },
    fr: { title: 'Audit des Fonctions Exécutives (TDAH) + Chrono 10 Min | DopaBrain', heroTitle: 'Audit Fonctions Exécutives (TDAH)', auditBtn: 'Identifier mon blocage', resetBtn: 'Réinitialiser', startSprint: 'Lancer sprint 10 min', stopSprint: 'Pause', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier le plan', shareBtn: 'Partager', back: '← Catalogue', stickyBtn: 'Reset dopamine →' },
    ru: { title: 'Аудит исполнительных функций и таймер 10 мин | DopaBrain', heroTitle: 'Аудит исполнительных функций', auditBtn: 'Найти барьер фокуса', resetBtn: 'Сбросить', startSprint: 'Старт 10-мин спринта', stopSprint: 'Пауза', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать план', shareBtn: 'Поделиться', back: '← Каталог', stickyBtn: 'Дофамин-детокс →' },
    hi: { title: 'एक्जीक्यूटिव फंक्शन और फोकस ऑडिट + 10-मिनट टाइमर | DopaBrain', heroTitle: 'ADHD और फोकस फ्रिक्शन ऑडिट', auditBtn: 'मेरा फोकस अवरोध खोजें', resetBtn: 'रीसेट', startSprint: '10-मिनट स्प्रिंट शुरू करें', stopSprint: 'रोकें', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'प्लान कॉपी करें', shareBtn: 'शेयर करें', back: '← टूल्स कैटलॉग', stickyBtn: 'डोपामाइन रीसेट →' },
    id: { title: 'Audit Fungsi Eksekutif (ADHD) & Timer 10 Menit | DopaBrain', heroTitle: 'Audit Fokus & Fungsi Eksekutif', auditBtn: 'Temukan Hambatan Fokus', resetBtn: 'Reset', startSprint: 'Mulai Sprint 10 Menit', stopSprint: 'Jeda', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin Rencana', shareBtn: 'Bagikan', back: '← Katalog Alat', stickyBtn: 'Reset Dopamin →' },
    tr: { title: 'DEHB & Yürütücü İşlev Denetimi + 10 Dk Zamanlayıcı | DopaBrain', heroTitle: 'Yürütücü İşlev & Odak Denetimi', auditBtn: 'Odak Engelini Belirle', resetBtn: 'Sıfırla', startSprint: '10 Dk Sprint Başlat', stopSprint: 'Duraklat', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Planı Kopyala', shareBtn: 'Paylaş', back: '← Katalog', stickyBtn: 'Dopamin Sıfırlama →' }
  };

  var AXES = [
    { id: 'initiation', en: '1. Task Initiation Paralysis ("Wall of Awful" — knowing what to do yet feeling frozen)', ko: '1. 과제 시작 마비 (해야 할 걸 알면서도 첫 클릭조차 안 되는 느낌)' },
    { id: 'time', en: '2. Time Blindness (losing hours unexpectedly or feeling only "Now" vs "Not Now")', ko: '2. 시간 감각 저하 ("지금 당장" 아니면 "나중에"만 느껴지고 시간 흐름을 놓침)' },
    { id: 'memory', en: '3. Working-Memory Overload (too many open tabs/steps causing instant mental fog)', ko: '3. 작업기억 과부하 (열린 탭과 할 일이 너무 많아 머릿속이 하얘짐)' },
    { id: 'dopamine', en: '4. Dopamine Under-Stimulation (boring tasks feel physically painful; checking phone compulsively)', ko: '4. 도파민 저자극 (지루한 일은 고통스럽고 무의식적으로 폰을 계속 확인함)' },
    { id: 'transition', en: '5. Context-Switch Friction (hard to stop hyperfocus or pivot from rest to work)', ko: '5. 전환 마찰 (하던 일을 끊고 다음 활동으로 넘어가는 데 엄청난 에너지 소모)' }
  ];

  var LEVELS_EN = ['0 • None', '1 • Mild', '2 • Strong', '3 • Severe'];
  var LEVELS_KO = ['0 • 없음', '1 • 약함', '2 • 강함', '3 • 매우 심함'];

  var PROFILES = {
    initiation: {
      enTitle: 'Primary Bottleneck: Task Initiation Paralysis',
      koTitle: '핵심 병목: 과제 시작 마비 (활성화 에너지 장벽)',
      enDesc: 'Your brain is treating the starting line as a high-threat cliff. Lower the activation threshold until the first action feels almost laughably small.',
      koDesc: '뇌가 시작 지점을 거대한 위협처럼 인식하고 있습니다. 첫 행동이 우스울 정도로 작아질 때까지 진입 장벽을 극단적으로 낮춰야 합니다.',
      enSteps: [
        '2-Minute Ugly Draft: Give yourself explicit permission to write 3 messy bullet points or open just ONE file — perfection is banned for 10 minutes.',
        'Physical Micro-Trigger: Change posture (stand up or shift chairs) and touch only the first physical object needed for the task.',
        'Drop the Whole Project: Hide the full checklist; look ONLY at the single 10-minute anchor below.'
      ],
      koSteps: [
        '2분 엉망 초안 법칙: 완벽주의를 10분간 금지하고, 엉성한 메모 3줄만 적거나 파일 1개만 여는 것을 목표로 삼으세요.',
        '신체 미세 트리거: 의자에서 잠깐 일어서거나 자세를 바꾼 뒤 과제에 필요한 첫 도구 하나만 손으로 잡으세요.',
        '전체 목록 숨기기: 거대한 체크리스트는 치우고 오직 아래 10분 초미니 과제 하나만 시야에 두세요.'
      ]
    },
    time: {
      enTitle: 'Primary Bottleneck: Time Blindness',
      koTitle: '핵심 병목: 시간 감각 저하 (Time Blindness)',
      enDesc: 'Abstract clock time feels invisible to an interest-based nervous system. Externalize time visually so your brain can feel the boundary.',
      koDesc: '추상적인 시계 숫자는 관심 기반 신경계에 잘 체감되지 않습니다. 시간의 경계를 눈으로 보이게 외부화하세요.',
      enSteps: [
        'Keep the 10-Minute Visual Countdown visible on screen — never rely on internal time guessing.',
        'Anchor to a Concrete Cue: Pair this sprint with one tangible boundary (e.g., "until this song playlist ends" or "10 minutes flat").',
        'Buffer the Exit: When the timer hits 00:00, stop immediately for 60 seconds so your brain trusts future timers.'
      ],
      koSteps: [
        '10분 시각 타이머를 화면에 띄워두세요 — 머릿속 감각으로 시간을 추측하지 마세요.',
        '구체적 경계 묶기: "타이머가 끝날 때까지 딱 10분"처럼 끝이 명확한 단위로만 작업하세요.',
        '종료 신뢰 지키기: 타이머가 00:00이 되면 1분간 꼭 쉬어 뇌가 타이머의 약속을 신뢰하게 만드세요.'
      ]
    },
    memory: {
      enTitle: 'Primary Bottleneck: Working-Memory Overload',
      koTitle: '핵심 병목: 작업기억 과부하 (RAM 포화)',
      enDesc: 'Holding 8 half-finished loops in RAM stalls executive focus. Empty your mental cache onto paper before trying to produce.',
      koDesc: '머릿속 RAM에 미완성 항목 8개가 떠 있으면 실행 회로가 멈춥니다. 생산을 시도하기 전에 뇌 캐시를 외부로 비우세요.',
      enSteps: [
        '60-Second Parking Lot Dump: Write every nagging stray thought on a single scrap note so your brain stops re-alerting you.',
        'Tab Collapse: Close or group all browser tabs except the 1 window needed for the next 10 minutes.',
        'Single-Track Rule: If a new idea pops up mid-sprint, jot 3 words down and return immediately to the anchor.'
      ],
      koSteps: [
        '60초 임시 주차 메모: 머릿속에 맴도는 잡념과 할 일을 종이 한 장에 모두 쏟아내 뇌의 반복 알림을 끄세요.',
        '탭 정리: 앞으로 10분간 필요한 창 1개만 남기고 나머지 브라우저 탭을 모두 접거나 최소화하세요.',
        '단일 트랙 규칙: 스프린트 중 새 아이디어가 떠오르면 3단어만 적어두고 즉시 원래 과제로 돌아오세요.'
      ]
    },
    dopamine: {
      enTitle: 'Primary Bottleneck: Dopamine Under-Stimulation',
      koTitle: '핵심 병목: 도파민 저자극 (지루함 마찰)',
      enDesc: 'Low-interest administrative work starves an attention-seeking brain. Add harmless, non-distracting sensory scaffolding instead of fighting willpower.',
      koDesc: '흥미가 낮은 단순 작업은 주의력 회로에 도파민 결핍을 일으킵니다. 의지력으로 버티지 말고 방해되지 않는 감각 자극을 더하세요.',
      enSteps: [
        'Sensory Pairing: Add instrumental lo-fi/brown noise, a warm drink, or gentle fidget movement to raise baseline arousal.',
        'Phone Out of Reach: Put your phone in another room or face-down across the desk for just 10 minutes to break auto-checking.',
        'Gamify the Sprint: Race the 10-minute clock to see how many tiny micro-pieces you can finish before the buzzer.'
      ],
      koSteps: [
        '감각 페어링: 가사 없는 로파이/브라운 노이즈, 따뜻한 음료, 가벼운 손 움직임을 더해 기본 각성도를 올리세요.',
        '스마트폰 시야 차단: 딱 10분만 폰을 손이 닿지 않는 책상 반대편에 뒤집어 두어 무의식적 확인을 끊으세요.',
        '10분 미니 챌린지화: 타이머가 끝나기 전 아주 작은 조각을 몇 개나 끝낼 수 있는지 가벼운 게임처럼 진행하세요.'
      ]
    },
    transition: {
      enTitle: 'Primary Bottleneck: Context-Switch Friction',
      koTitle: '핵심 병목: 전환 마찰 (모드 전환 장벽)',
      enDesc: 'Shifting gears between rest, scrolling, and deep work burns huge executive fuel. Build a 30-second physical bridge between modes.',
      koDesc: '휴식·스크롤 모드에서 작업 모드로 기어를 바꾸는 데 엄청난 에너지가 듭니다. 모드 사이에 30초짜리 물리적 다리를 놓으세요.',
      enSteps: [
        '30-Second Reset Ritual: Drink one glass of water, stretch both arms overhead, and exhale audibly to signal "new mode."',
        'Leave Breadcrumbs: Before ever pausing, write the exact next 5-word step so re-entry tomorrow takes zero guesswork.',
        'Gentle Ramp: Spend the first 2 minutes of the sprint simply reading or organizing — no heavy output required yet.'
      ],
      koSteps: [
        '30초 전환 의식: 물 한 잔 마시기, 기지개 켜기, 소리 내어 한숨 내쉬기로 뇌에 "새 모드 시작" 신호를 보내세요.',
        '빵부스러기 남기기: 작업을 멈출 때 다음에 할 5단어 행동을 미리 적어두면 재진입 마찰이 사라집니다.',
        '완만한 예열: 10분 중 처음 2분은 가볍게 읽기·정리만 해도 충분합니다. 곧바로 무거운 산출물을 요구하지 마세요.'
      ]
    }
  };

  var CUES_EN = [
    'Minute 1–2: Ugly start! Just open the surface and make one tiny mark.',
    'Minute 3–4: Still here with you. Notice any urge to switch tabs and gently return.',
    'Minute 5–6: Halfway through! Unclench your jaw and stay on your single anchor.',
    'Minute 7–8: Strong momentum — keep it small, messy, and moving forward.',
    'Minute 9–10: Final stretch! Leave a clear breadcrumb note for your next step.'
  ];
  var CUES_KO = [
    '1~2분: 엉망으로 시작하기! 파일만 열고 아주 작은 첫 흔적을 남기세요.',
    '3~4분: 함께 집중 중입니다. 다른 탭을 누르고 싶은 충동이 와도 부드럽게 돌아오세요.',
    '5~6분: 절반 통과! 턱과 어깨 힘을 풀고 오직 하나의 앵커 과제에 머무르세요.',
    '7~8분: 좋은 흐름입니다 — 완벽하지 않아도 작게 앞으로 나아가세요.',
    '9~10분: 마무리 구간! 다음 번 재진입을 위한 짧은 메모를 남겨보세요.'
  ];

  var currentLang = 'en';
  var scores = { initiation: 2, time: 1, memory: 2, dopamine: 1, transition: 1 };
  var currentResult = null;
  var sprintId = null;
  var sprintLeft = 600;

  function detectLang() {
    try {
      var sp = new URLSearchParams(window.location.search);
      var q = (sp.get('lang') || '').toLowerCase().slice(0, 2);
      if (SUPPORTED.indexOf(q) !== -1) return q;
      var saved = (localStorage.getItem('dopabrain_lang') || '').toLowerCase().slice(0, 2);
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
      var nav = (navigator.language || 'en').toLowerCase().slice(0, 2);
      if (SUPPORTED.indexOf(nav) !== -1) return nav;
    } catch (e) {}
    return 'en';
  }

  function t(key) {
    return (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || key;
  }

  function isKo() { return currentLang === 'ko'; }

  function updateLinks() {
    var anchors = document.querySelectorAll('a[href^="/"]');
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      var raw = a.getAttribute('href');
      if (!raw || raw.indexOf('#') === 0) continue;
      try {
        var u = new URL(raw, window.location.origin);
        u.searchParams.set('lang', currentLang);
        a.setAttribute('href', u.pathname + u.search + u.hash);
      } catch (e) {}
    }
  }

  function renderAxes() {
    var stack = document.getElementById('axisStack');
    if (!stack) return;
    stack.textContent = '';
    var labels = isKo() ? LEVELS_KO : LEVELS_EN;

    for (var i = 0; i < AXES.length; i++) {
      var ax = AXES[i];
      var box = document.createElement('div');
      box.className = 'callout-box';
      box.style.marginBottom = '12px';

      var h3 = document.createElement('h3');
      h3.textContent = isKo() ? ax.ko : ax.en;
      box.appendChild(h3);

      var row = document.createElement('div');
      row.className = 'opt-row';
      for (var v = 0; v <= 3; v++) {
        (function (axisId, val) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'preset-btn' + (scores[axisId] === val ? ' active' : '');
          btn.setAttribute('data-axis', axisId);
          btn.setAttribute('data-score', String(val));
          btn.setAttribute('aria-pressed', scores[axisId] === val ? 'true' : 'false');
          btn.textContent = labels[val];
          btn.addEventListener('click', function () {
            scores[axisId] = val;
            renderAxes();
          });
          row.appendChild(btn);
        })(ax.id, v);
      }
      box.appendChild(row);
      stack.appendChild(box);
    }
  }

  function toast(msg) {
    var el = document.createElement('div');
    el.className = 'wl-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2600);
  }

  function stopSprint() {
    if (sprintId) {
      clearInterval(sprintId);
      sprintId = null;
    }
  }

  function fmt(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function startSprint() {
    stopSprint();
    if (sprintLeft <= 0) sprintLeft = 600;
    var disp = document.getElementById('sprintDisplay');
    var cueEl = document.getElementById('sprintCue');
    var cues = isKo() ? CUES_KO : CUES_EN;

    if (disp) disp.textContent = fmt(sprintLeft);
    if (cueEl) cueEl.textContent = cues[0];

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'adhd_sprint_start', {
          event_category: 'wellness_tool',
          tool_slug: 'adhd-focus-friction-audit',
          language: currentLang
        });
      } catch (e) {}
    }

    sprintId = setInterval(function () {
      sprintLeft -= 1;
      if (disp) disp.textContent = fmt(Math.max(0, sprintLeft));
      if (sprintLeft <= 0) {
        stopSprint();
        if (cueEl) cueEl.textContent = t('sprintDone');
        return;
      }
      var idx = Math.min(cues.length - 1, Math.floor((600 - sprintLeft) / 120));
      if (cueEl) cueEl.textContent = cues[idx];
    }, 1000);
  }

  function runAudit() {
    var total = 0;
    var peakKey = 'initiation';
    var peakVal = -1;
    for (var i = 0; i < AXES.length; i++) {
      var id = AXES[i].id;
      var val = scores[id] || 0;
      total += val;
      if (val > peakVal) {
        peakVal = val;
        peakKey = id;
      }
    }
    var loadPct = Math.round((total / 15) * 100);
    var peakPct = Math.round((peakVal / 3) * 100);
    var rawAnchor = (document.getElementById('anchorTaskInput')?.value || '').trim();

    currentResult = { peakKey: peakKey, loadPct: loadPct, peakPct: peakPct, anchorText: rawAnchor };
    renderResult();

    var card = document.getElementById('resultCard');
    if (card) {
      card.hidden = false;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'adhd_friction_complete', {
          event_category: 'wellness_tool',
          tool_slug: 'adhd-focus-friction-audit',
          language: currentLang
        });
      } catch (e) {}
    }
  }

  function renderResult() {
    if (!currentResult) return;
    stopSprint();
    sprintLeft = 600;
    var disp = document.getElementById('sprintDisplay');
    var cueEl = document.getElementById('sprintCue');
    if (disp) disp.textContent = '10:00';
    if (cueEl) cueEl.textContent = t('sprintReady');

    var prof = PROFILES[currentResult.peakKey];
    var titleEl = document.getElementById('verdictTitle');
    var descEl = document.getElementById('verdictDesc');
    if (titleEl) titleEl.textContent = isKo() ? prof.koTitle : prof.enTitle;
    if (descEl) descEl.textContent = isKo() ? prof.koDesc : prof.enDesc;

    var anchorBox = document.getElementById('anchorTaskBox');
    var anchorOut = document.getElementById('anchorTaskOut');
    if (anchorBox && anchorOut) {
      if (currentResult.anchorText) {
        anchorBox.hidden = false;
        anchorOut.textContent = currentResult.anchorText; // XSS-safe textContent!
      } else {
        anchorBox.hidden = true;
        anchorOut.textContent = '';
      }
    }

    var lPct = document.getElementById('loadPct');
    var lFill = document.getElementById('loadFill');
    var pPct = document.getElementById('peakPct');
    var pFill = document.getElementById('peakFill');
    if (lPct) lPct.textContent = currentResult.loadPct + '%';
    if (lFill) lFill.style.width = currentResult.loadPct + '%';
    if (pPct) pPct.textContent = currentResult.peakPct + '%';
    if (pFill) pFill.style.width = currentResult.peakPct + '%';

    var list = document.getElementById('accomList');
    if (list) {
      list.textContent = '';
      var steps = isKo() ? prof.koSteps : prof.enSteps;
      for (var i = 0; i < steps.length; i++) {
        var li = document.createElement('li');
        li.textContent = steps[i];
        list.appendChild(li);
      }
    }
  }

  function applyLang(lang) {
    currentLang = SUPPORTED.indexOf(lang) !== -1 ? lang : 'en';
    document.documentElement.lang = currentLang;
    try { localStorage.setItem('dopabrain_lang', currentLang); } catch (e) {}

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.tagName === 'META') el.setAttribute('content', val);
      else if (el.tagName === 'TITLE') document.title = val;
      else el.textContent = val;
    }

    var sel = document.getElementById('langSelect');
    if (sel) sel.value = currentLang;
    updateLinks();
    renderAxes();
    if (currentResult) renderResult();
  }

  window.i18n = {
    getLanguage: function () { return currentLang; },
    setLanguage: function (l) { applyLang(l); },
    t: t
  };

  function bindEvents() {
    var sel = document.getElementById('langSelect');
    if (sel) {
      sel.addEventListener('change', function () {
        applyLang(sel.value);
        try {
          var u = new URL(window.location.href);
          u.searchParams.set('lang', currentLang);
          window.history.replaceState({}, '', u.toString());
        } catch (e) {}
      });
    }

    var auditBtn = document.getElementById('auditBtn');
    if (auditBtn) auditBtn.addEventListener('click', runAudit);

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        stopSprint();
        scores = { initiation: 2, time: 1, memory: 2, dopamine: 1, transition: 1 };
        currentResult = null;
        var inp = document.getElementById('anchorTaskInput');
        if (inp) inp.value = '';
        renderAxes();
        var card = document.getElementById('resultCard');
        if (card) card.hidden = true;
      });
    }

    var startBtn = document.getElementById('startSprintBtn');
    if (startBtn) startBtn.addEventListener('click', startSprint);

    var stopBtn = document.getElementById('stopSprintBtn');
    if (stopBtn) stopBtn.addEventListener('click', stopSprint);

    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        if (!currentResult) return;
        var prof = PROFILES[currentResult.peakKey];
        var steps = isKo() ? prof.koSteps : prof.enSteps;
        var txt = (isKo() ? prof.koTitle : prof.enTitle) + '\n\n' + steps.map(function (s, idx) { return (idx + 1) + '. ' + s; }).join('\n');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(txt).then(function () { toast(t('copied')); }).catch(function () { toast(t('copied')); });
        } else {
          toast(t('copied'));
        }
      });
    }

    var shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        var shareUrl = 'https://dopabrain.com/portal/tools/adhd-focus-friction-audit.html?lang=' + currentLang;
        if (navigator.share) {
          navigator.share({ title: document.title, url: shareUrl }).catch(function () {});
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(shareUrl).then(function () { toast(t('shared')); }).catch(function () { toast(t('shared')); });
        } else {
          toast(t('shared'));
        }
      });
    }

    var storyBtn = document.getElementById('storyBtn');
    if (storyBtn) {
      storyBtn.addEventListener('click', function () {
        if (!currentResult || !window.DopaBrainStoryCard) return;
        var prof = PROFILES[currentResult.peakKey];
        var steps = isKo() ? prof.koSteps : prof.enSteps;
        var ok = window.DopaBrainStoryCard.downloadStoryCard({
          slug: 'adhd-focus-friction-audit',
          badge: t('kicker'),
          emoji: '⚡',
          toolName: t('heroTitle'),
          headline: isKo() ? prof.koTitle : prof.enTitle,
          subtitle: isKo() ? prof.koDesc : prof.enDesc,
          accent: '#f59e0b',
          accent2: '#ec4899',
          metrics: [
            { label: t('meterLoad'), pct: currentResult.loadPct, color: '#f59e0b' },
            { label: t('meterPeak'), pct: currentResult.peakPct, color: '#ec4899' }
          ],
          takeawayLabel: t('accomTitle'),
          takeaway: steps[0] || '',
          footerUrl: 'dopabrain.com/portal/tools/adhd-focus-friction-audit.html'
        });
        if (ok) toast(t('savedCard'));
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(detectLang());
    bindEvents();
  });
})();
