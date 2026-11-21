/* Perfectionism & Self-Sabotage Loop Decoder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Perfectionism & Self-Sabotage Loop Decoder | DopaBrain',
      metaDesc: 'Free 12-language Perfectionism & Self-Sabotage Loop Decoder. Identify which perfectionist trap stalls your momentum, sign a private 80% Good-Enough Ship Contract, and launch a 5-minute ugly-first-draft sprint.',
      skip: 'Skip to Perfectionism Decoder',
      back: '← Mental Wellness Lab',
      langLabel: 'Language:',
      kicker: 'CBT PERFECTIONISM & SELF-SABOTAGE RESET',
      heroTitle: 'Perfectionism & Self-Sabotage Loop Decoder',
      heroLead: 'Stuck endlessly polishing, restarting from scratch, or quitting right before the finish line? Decode your primary perfectionist loop, define an 80% Good-Enough Ship standard locally, and launch a 5-minute ugly-first-draft sprint.',
      chip1: '5 Sabotage Loops',
      chip2: '5-Min Ugly Draft Timer',
      chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • PICK YOUR ACTIVE PERFECTIONISM LOOP',
      step1Title: 'Which perfectionist trap is slowing you down right now?',
      step1Sub: 'Select the loop that feels most familiar today.',
      shipLabel: 'Optional: 1 task I will ship at "80% Good Enough" today (stays 100% local):',
      decodeBtn: 'Decode Loop & Unlock 80% Plan',
      resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR 80% GOOD-ENOUGH ANTI-SABOTAGE PLAN',
      shipBoxTitle: 'My 80% Good-Enough Ship Contract Today',
      reframeTitle: 'CBT Perfectionism Reframe',
      sprintTitle: '5-Minute Ugly-First-Draft Sprint',
      sprintSub: 'Permission to write/build terribly for 5 minutes—zero editing allowed until the clock hits zero.',
      sprintStart: 'Start 5m Draft',
      sprintPause: 'Pause Sprint',
      stepsTitle: '3 Anti-Perfectionism Moves',
      storyBtn: 'Save 1080×1920 Ship Card (PNG)',
      copyBtn: 'Copy 80% Reframe',
      shareBtn: 'Share Tool',
      bridgeProcTitle: 'Procrastination Root Decoder',
      bridgeProcDesc: 'Break emotional task-initiation delay with a 2-minute micro-step.',
      bridgeCriticTitle: 'Inner Critic Compassion Lab',
      bridgeCriticDesc: 'Quiet the harsh perfectionist voice holding you to impossible standards.',
      bridgeImpTitle: 'Imposter Syndrome Audit',
      bridgeImpDesc: 'Anchor your competence in an objective local proof vault.',
      faqTitle: 'Frequently Asked Questions',
      refTitle: 'Psychological Frameworks & References',
      discTitle: 'Editorial Self-Reflection Disclaimer:',
      discText: 'This tool is an educational cognitive-behavioral productivity aid for overcoming perfectionism and self-sabotage, not clinical therapy or medical diagnosis.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: 'Harsh inner voice driving perfectionism?',
      stickySub: 'Transform self-criticism into supportive coaching in 2 minutes',
      stickyBtn: 'Compassion Lab →',
      copied: '80% Good-Enough reframe copied!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Ship Contract Card saved!'
    },
    ko: {
      title: '완벽주의·자기방해 루프 디코더 & 80% 완료 계약 | DopaBrain',
      metaDesc: '끝없는 다듬기, 백지 재시작, 마감 직전 포기 등 5가지 완벽주의 자기방해 패턴을 해독하고, 80% 완료 기준과 5분 "못생긴 초안" 타이머로 실행력을 되찾으세요.',
      skip: '완벽주의 디코더로 이동',
      back: '← 멘탈 웰니스 랩',
      langLabel: '언어:',
      kicker: 'CBT 완벽주의 & 자기방해 차단 랩',
      heroTitle: '완벽주의·자기방해 루프 디코더',
      heroLead: '끝없이 고치기만 하다 제출을 미루거나, 완벽하지 않으면 처음부터 다시 시작하느라 지쳐 있나요? 지금 작동 중인 완벽주의 함정을 해독하고 80% 완료 계약과 5분 못생긴 초안 타이머로 시동을 거세요.',
      chip1: '5가지 자기방해 루프',
      chip2: '5분 못생긴 초안 타이머',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 지금 작동 중인 완벽주의 루프 선택',
      step1Title: '지금 내 발목을 가장 세게 붙잡는 완벽주의 함정은 무엇인가요?',
      step1Sub: '오늘 가장 공감되는 패턴 1가지를 선택하세요.',
      shipLabel: '선택: 오늘 "80%면 충분하다" 기준으로 완료할 과제 1가지 (100% 로컬):',
      decodeBtn: '루프 해독 & 80% 완료 플랜 열기',
      resetBtn: '초기화',
      resultBadge: '2단계 • 나의 80% 완료 반-완벽주의 플랜',
      shipBoxTitle: '오늘 나의 80% 완료(Good-Enough) 약속',
      reframeTitle: 'CBT 완벽주의 인지 전환 문장',
      sprintTitle: '5분 "못생긴 초안" 스프린트 타이머',
      sprintSub: '5분 동안은 일부러 서툴게 써도 됩니다—타이머가 끝날 때까지 수정 버튼 금지!',
      sprintStart: '5분 초안 시작',
      sprintPause: '일시 정지',
      stepsTitle: '완벽주의 마비를 깨는 3가지 즉각 행동',
      storyBtn: '1080×1920 완료 계약 카드 저장 (PNG)',
      copyBtn: '전환 문장 복사',
      shareBtn: '도구 공유',
      bridgeProcTitle: '미루기 근본 원인 디코더',
      bridgeProcDesc: '시작을 막는 감정적 저항을 2분 초소형 행동으로 쪼갭니다.',
      bridgeCriticTitle: '내면 비판가 → 자기연민 랩',
      bridgeCriticDesc: '가혹한 완벽주의 내면 목소리를 현실적인 코칭 언어로 전환합니다.',
      bridgeImpTitle: '가면 증후군 & 증거 금고',
      bridgeImpDesc: '불안한 자기 의심을 객관적 성취 증거 목록으로 잠재웁니다.',
      faqTitle: '자주 묻는 질문',
      refTitle: '심리학적 프레임워크 및 참고문헌',
      discTitle: '편집 및 자기성찰 안내:',
      discText: '본 도구는 완벽주의와 자기방해 습관을 다루기 위한 교육용 CBT 실행 도구이며 임상 치료나 의학적 진단이 아닙니다.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '가혹한 내면 비판가가 완벽주의를 부추기나요?',
      stickySub: '2분 자기연민 랩으로 내면의 기준을 부드럽게 재조정하세요',
      stickyBtn: '자기연민 랩 →',
      copied: '80% 완료 전환 문장을 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 완료 계약 카드를 저장했습니다!'
    },
    zh: { title: '完美主义与自我破坏循环解码器 | DopaBrain', heroTitle: '完美主义与自我破坏解码器', decodeBtn: '解码循环并解锁80%完成计划', resetBtn: '重置', sprintStart: '开始5分钟丑陋初稿', sprintPause: '暂停', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '自我关怀 →' },
    ja: { title: '完璧主義・自己妨害ループデコーダー | DopaBrain', heroTitle: '完璧主義・自己妨害デコーダー', decodeBtn: 'ループを解読して80%計画を作成', resetBtn: 'リセット', sprintStart: '5分ドラフト開始', sprintPause: '一時停止', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: 'コンパッション →' },
    es: { title: 'Decodificador de Perfeccionismo y Autosabotaje | DopaBrain', heroTitle: 'Decodificador de Perfeccionismo', decodeBtn: 'Decodificar y crear plan 80%', resetBtn: 'Reiniciar', sprintStart: 'Iniciar borrador 5m', sprintPause: 'Pausar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Autocompasión →' },
    pt: { title: 'Decodificador de Perfeccionismo e Autossabotagem | DopaBrain', heroTitle: 'Decodificador de Perfeccionismo', decodeBtn: 'Decodificar e criar plano 80%', resetBtn: 'Redefinir', sprintStart: 'Iniciar rascunho 5m', sprintPause: 'Pausar', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Autocompaixão →' },
    de: { title: 'Perfektionismus- & Selbstsabotage-Decoder | DopaBrain', heroTitle: 'Perfektionismus-Loop-Decoder', decodeBtn: 'Loop entschlüsseln (80%-Plan)', resetBtn: 'Zurücksetzen', sprintStart: '5-Min-Entwurf starten', sprintPause: 'Pause', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Selbstmitgefühl →' },
    fr: { title: 'Décodeur de Perfectionnisme & Auto-Sabotage | DopaBrain', heroTitle: 'Décodeur de Perfectionnisme', decodeBtn: 'Décoder & plan 80% suffisant', resetBtn: 'Réinitialiser', sprintStart: 'Lancer brouillon 5 min', sprintPause: 'Pause', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Auto-compassion →' },
    ru: { title: 'Декодер перфекционизма и самосаботажа | DopaBrain', heroTitle: 'Декодер перфекционизма', decodeBtn: 'Разобрать цикл и план 80%', resetBtn: 'Сбросить', sprintStart: 'Старт черновика 5м', sprintPause: 'Пауза', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Самосострадание →' },
    hi: { title: 'परफेक्शनिज़्म और सेल्फ-सैबोटाज लूप डिकोडर | DopaBrain', heroTitle: 'परफेक्शनिज़्म लूप डिकोडर', decodeBtn: '80% प्लान अनलॉक करें', resetBtn: 'रीसेट', sprintStart: '5-मिनट ड्राफ्ट शुरू करें', sprintPause: 'रोकें', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'करुणा लैब →' },
    id: { title: 'Dekoder Siklus Perfeksionisme & Sabotase Diri | DopaBrain', heroTitle: 'Dekoder Perfeksionisme', decodeBtn: 'Buka Rencana 80% Cukup', resetBtn: 'Reset', sprintStart: 'Mulai Draf 5 Menit', sprintPause: 'Jeda', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Lab Kasih Diri →' },
    tr: { title: 'Mükemmeliyetçilik ve Öz-Sabotaj Döngüsü Çözücü | DopaBrain', heroTitle: 'Mükemmeliyetçilik Çözücü', decodeBtn: 'Döngüyü Çöz ve %80 Planı Aç', resetBtn: 'Sıfırla', sprintStart: '5dk Taslak Başlat', sprintPause: 'Duraklat', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Öz-Şefkat →' }
  };

  var LOOPS = [
    {
      id: 'all_or_nothing', emoji: '⚡',
      enName: 'All-or-Nothing Restart Trap', koName: '전부 아니면 전무(백지 재시작) 함정',
      enSub: 'One tiny slip makes you scrap the whole routine until Monday', koSub: '작은 실수 하나에 전체 계획이 망했다며 월요일로 미룸',
      enVerdict: 'All-or-Nothing Restart Loop', koVerdict: '전부 아니면 전무 — 백지 재시작 루프',
      enDesc: 'Treating 70% consistency as 0% destroys compounding momentum. Resilience comes from resuming after a 1-day miss, not an unbroken streak.',
      koDesc: '70%의 꾸준함을 0% 실패로 취급하면 복리 효과가 끊어집니다. 진짜 성장은 완벽한 연속 기록이 아니라 흔들린 다음 날 바로 재개하는 힘에서 나옵니다.',
      enReframe: '"A messy 15-minute version beats a mythical 100% plan I never start. Never miss twice—just resume at 20% today."',
      koReframe: '"시작조차 못 하는 완벽한 100% 계획보다, 지금 당장 해낸 어설픈 20%가 훨씬 강하다. 오늘 아주 작게 다시 잇는다."',
      enSteps: ['Define a "Minimum Floor" version of the habit (5 minutes counts as a full win).', 'Ban full restarts—edit or resume right where you paused.', 'Celebrate recovery days louder than flawless days.'],
      koSteps: ['5분만 해도 성공으로 인정하는 "최소 하한선" 기준을 정하세요.', '처음부터 다시 갈아엎기를 금지하고 멈춘 자리에서 그대로 이어가세요.', '완벽한 날보다 무너진 뒤 다시 일어난 날을 더 크게 칭찬하세요.']
    },
    {
      id: 'endless_polish', emoji: '🔍',
      enName: 'Endless Polish & Over-Researching', koName: '끝없는 다듬기 · 과잉 준비',
      enSub: 'Tweaking details or reading one more guide to delay publishing', koSub: '세부 수정과 자료 조사만 반복하며 제출·공개를 계속 미룸',
      enVerdict: 'Endless Polish Avoidance Loop', koVerdict: '끝없는 다듬기 — 공개 회피 루프',
      enDesc: 'Past 80% quality, extra tweaking rarely improves real-world impact—it is usually nervous-system avoidance disguised as high standards.',
      koDesc: '80% 완성도 이후의 과도한 수정은 실제 가치 향상보다 평가를 미루려는 회피 반응인 경우가 많습니다.',
      enReframe: '"Done and iterated in reality beats flawless and trapped in my drafts folder. Version 1 only needs to exist."',
      koReframe: '"내 폴더 속에 갇힌 완벽한 초안보다 세상에 나가 피드백을 받는 1차 버전이 백 배 낫다."',
      enSteps: ['Set a hard 15-minute final-pass clock; ship the moment it chimes.', 'Ask: "Will anyone notice this tweak a week from now?" If not, skip it.', 'Start the 5-minute ugly draft timer below before doing any more research.'],
      koSteps: ['최종 점검 제한 시간을 15분으로 걸고 종이 울리면 바로 전송·제출하세요.', '"일주일 뒤에 이 디테일을 기억할 사람이 있을까?" 묻고 아니면 넘어가세요.', '자료를 더 찾기 전에 아래 5분 못생긴 초안 타이머부터 누르세요.']
    },
    {
      id: 'self_handicap', emoji: '🎭',
      enName: 'Ego-Shield Self-Handicapping', koName: '자존심 방어용 자기방해',
      enSub: 'Waiting until the last minute so failure can be blamed on low time', koSub: '전력을 다했다가 실패할까 봐 일부러 막판까지 미루며 핑계 확보',
      enVerdict: 'Ego-Shield Self-Handicapping Loop', koVerdict: '자존심 방어 — 자기방해 루프',
      enDesc: 'When your identity feels glued to outcomes, sabotaging your prep protects you from finding out your best was "not enough."',
      koDesc: '결과와 나의 존재 가치가 하나로 붙어 있으면, 최선을 다했다가 실망하는 고통을 피하려 무의식중에 준비를 방해하게 됩니다.',
      enReframe: '"My effort is data, not a verdict on my worth. Giving an honest 80% builds real skill even if the result is imperfect."',
      koReframe: '"결과는 내 가치에 대한 판결이 아니라 다음 시도를 위한 데이터일 뿐이다. 솔직하게 시도하는 것 자체가 실력이다."',
      enSteps: ['Separate identity ("I am learning") from artifact ("this draft has flaws").', 'Work in a low-stakes 5-minute block before urgency forces panic.', 'Share work-in-progress early with one supportive peer to desensitize perfection pressure.'],
      koSteps: ['"내가 부족하다" 대신 "이 초안의 2단계가 보완이 필요하다"로 나와 결과물을 분리하세요.', '마감 공포가 오기 전에 부담 없는 5분 초안 블록을 먼저 끝내세요.', '미완성 상태에서 신뢰하는 동료 1명에게 가볍게 공유해 평가 불안을 낮추세요.']
    },
    {
      id: 'moving_bar', emoji: '📈',
      enName: 'Moving Goalpost Dissatisfaction', koName: '성취 즉시 기준 상향(만족 불가)',
      enSub: 'Minimizing wins within minutes and immediately raising the bar', koSub: '목표를 이뤄도 곧바로 "이 정도는 당연해"라며 기준을 올려버림',
      enVerdict: 'Moving-Bar Achievement Loop', koVerdict: '끝없이 올라가는 기준 — 만성 불만족 루프',
      enDesc: 'Instantly erasing wins starves your brain of dopamine reward, turning ambition into chronic burnout and imposter anxiety.',
      koDesc: '성취를 인정하지 않고 바로 다음 목표로 넘어가면 뇌가 보상 신호를 받지 못해 결국 만성 탈진과 가면 증후군으로 이어집니다.',
      enReframe: '"I am allowed to feel proud of today’s progress while still growing tomorrow. Appreciation fuels endurance."',
      koReframe: '"내일 더 성장할 수 있다는 사실이 오늘 해낸 성과를 축하하지 못할 이유는 되지 않는다."',
      enSteps: ['Write down 3 concrete wins from this week before setting the next goal.', 'Hold a 24-hour moratorium on raising standards after finishing a milestone.', 'Measure from where you started (the gain), not only against an infinite ideal (the gap).'],
      koSteps: ['다음 목표를 세우기 전, 이번 주 이미 끝낸 3가지 성과를 먼저 적어 인정하세요.', '큰 일을 마친 뒤 24시간 동안은 "더 잘할 수 있었는데" 금지 규칙을 적용하세요.', '이상적 완벽(Gap)이 아니라 출발점 대비 얼마나 왔는지(Gain)로 자신을 평가하세요.']
    },
    {
      id: 'preemptive_quit', emoji: '🚪',
      enName: 'Preemptive Quitting Near Finish', koName: '결승선 직전 선제적 포기',
      enSub: 'Losing steam or abandoning goals at 85% to dodge final judgment', koSub: '85%까지 해놓고 최종 평가나 거절이 두려워 막판에 손을 놓음',
      enVerdict: 'Finish-Line Preemptive Quit Loop', koVerdict: '결승선 직전 선제적 포기 루프',
      enDesc: 'The last 15% triggers the highest visibility anxiety. Quitting early feels like relief for an hour, then deepens regret for months.',
      koDesc: '마지막 15% 구간은 타인의 시선이 가장 가까워지는 순간입니다. 여기서 멈추면 잠깐 안도하지만 장기적인 후회가 커집니다.',
      enReframe: '"Discomfort at the finish line means I am close to shipping, not that I am failing. Push the last 10% imperfectly."',
      koReframe: '"막판에 올라오는 불편함은 실패 신호가 아니라 완료 직전이라는 증거다. 불완전해도 마지막 10%를 밀고 나간다."',
      enSteps: ['List the single smallest action that marks the task "closed" (send email, click publish).', 'Expect a spike of dread right before hitting send—treat it as normal launch adrenaline.', 'Pair finishing with an immediate pleasant reward so your nervous system links completion to safety.'],
      koSteps: ['이 일을 "종료" 상태로 만드는 단 하나의 마지막 버튼(전송·제출·업로드)만 적으세요.', '제출 직전 올라오는 찝찝함을 위험 신호가 아니라 정상적인 출발 긴장감으로 받아들이세요.', '완료 직후 작은 보상을 연결해 뇌가 "끝맺음 = 안전"으로 학습하게 만드세요.']
    }
  ];

  var STORAGE_KEY = 'dopabrain_perfectionism_decoder_v1';
  var state = { lang: 'en', loopId: 'endless_polish', shipTask: '' };
  var timerSec = 300;
  var timerHandle = null;

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function getLoop() {
    for (var i = 0; i < LOOPS.length; i++) {
      if (LOOPS[i].id === state.loopId) return LOOPS[i];
    }
    return LOOPS[0];
  }

  function sendSafeEvent(loopId) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'perfectionism_decoder_complete', {
        tool_slug: 'perfectionism-loop-decoder',
        loop_type: loopId,
        locale: state.lang
      });
    }
  }

  function formatClock(sec) {
    var m = String(Math.floor(sec / 60)).padStart(2, '0');
    var s = String(sec % 60).padStart(2, '0');
    return m + ':' + s;
  }

  function buildGrid() {
    var grid = document.getElementById('loopGrid');
    if (!grid) return;
    grid.textContent = '';
    LOOPS.forEach(function (lp) {
      var btn = document.createElement('button');
      btn.type = 'button';
      var active = lp.id === state.loopId;
      btn.className = 'toggle-card' + (active ? ' is-selected' : '');
      btn.setAttribute('data-loop', lp.id);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');

      var em = document.createElement('span');
      em.className = 'card-emoji';
      em.textContent = lp.emoji;
      var st = document.createElement('strong');
      st.textContent = state.lang === 'ko' ? lp.koName : lp.enName;
      var sub = document.createElement('span');
      sub.className = 'card-sub';
      sub.textContent = state.lang === 'ko' ? lp.koSub : lp.enSub;

      btn.appendChild(em);
      btn.appendChild(st);
      btn.appendChild(sub);
      btn.addEventListener('click', function () {
        state.loopId = lp.id;
        saveLocal();
        buildGrid();
      });
      grid.appendChild(btn);
    });
  }

  function renderResult(emit) {
    var inp = document.getElementById('shipInput');
    state.shipTask = inp ? inp.value.trim() : '';
    var lp = getLoop();
    var isKo = state.lang === 'ko';

    document.getElementById('verdictTitle').textContent = isKo ? lp.koVerdict : lp.enVerdict;
    document.getElementById('verdictDesc').textContent = isKo ? lp.koDesc : lp.enDesc;
    document.getElementById('reframeOut').textContent = isKo ? lp.koReframe : lp.enReframe;

    var shipBox = document.getElementById('shipBox');
    var shipOut = document.getElementById('shipOut');
    if (state.shipTask) {
      shipOut.textContent = state.shipTask;
      shipBox.hidden = false;
    } else {
      shipOut.textContent = '';
      shipBox.hidden = true;
    }

    var list = document.getElementById('actionList');
    list.textContent = '';
    (isKo ? lp.koSteps : lp.enSteps).forEach(function (s) {
      var li = document.createElement('li');
      li.textContent = s;
      list.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emit) sendSafeEvent(lp.id);
  }

  function toggleSprint() {
    var btn = document.getElementById('sprintStartBtn');
    var clock = document.getElementById('sprintClock');
    if (timerHandle) {
      clearInterval(timerHandle);
      timerHandle = null;
      if (btn) btn.textContent = t('sprintStart');
      return;
    }
    if (timerSec <= 0) timerSec = 300;
    if (btn) btn.textContent = t('sprintPause');
    timerHandle = setInterval(function () {
      timerSec = Math.max(0, timerSec - 1);
      if (clock) clock.textContent = formatClock(timerSec);
      if (timerSec === 0) {
        clearInterval(timerHandle);
        timerHandle = null;
        if (btn) btn.textContent = t('sprintStart');
      }
    }, 1000);
  }

  function saveLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ loopId: state.loopId, shipTask: state.shipTask })); } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (typeof p.loopId === 'string') state.loopId = p.loopId;
      if (typeof p.shipTask === 'string') state.shipTask = p.shipTask;
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
    buildGrid();
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
    var shipInput = document.getElementById('shipInput');
    if (shipInput && state.shipTask) shipInput.value = state.shipTask;

    document.getElementById('decodeBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('sprintStartBtn').addEventListener('click', toggleSprint);
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.loopId = 'endless_polish';
      state.shipTask = '';
      if (shipInput) shipInput.value = '';
      if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
      timerSec = 300;
      document.getElementById('sprintClock').textContent = '05:00';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      buildGrid();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var txt = document.getElementById('reframeOut').textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/perfectionism-loop-decoder.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var lp = getLoop();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'perfectionism-loop-decoder',
        filename: 'dopabrain-80-percent-ship-card.png',
        badge: '80% GOOD-ENOUGH SHIP CONTRACT',
        headline: isKo ? lp.koVerdict : lp.enVerdict,
        subtitle: '5-Minute Ugly First Draft Protocol',
        metrics: [
          { label: 'Target', value: '80% Ship' },
          { label: 'Sprint', value: '5 Min' }
        ],
        quote: isKo ? lp.koReframe : lp.enReframe,
        accent: '#f59e0b',
        accent2: '#10b981'
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
