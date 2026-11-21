/* Overthinking & Rumination Circuit Breaker + 90s Cognitive Shuffle
 * 100% client-side, deterministic, XSS-safe, privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Overthinking & Rumination Circuit Breaker + 3 AM Cognitive Shuffle | DopaBrain',
      metaDesc: 'Free 12-language Overthinking & Rumination Breaker. Sort worries with the CBT Worry Tree and run a 90-second Cognitive Shuffle privately.',
      skip: 'Skip to Overthinking Breaker',
      back: '← Tools Catalog',
      langLabel: 'Language:',
      kicker: 'WORRY TREE & COGNITIVE SHUFFLE',
      heroTitle: 'Overthinking & Rumination Circuit Breaker',
      heroLead: 'Caught in a repetitive mental replay or 3 AM spiral? Classify the loop with the CBT Worry Tree, park it out of working memory, and run a 90-second Cognitive Shuffle locally.',
      chip1: '5 Mental Loop Types',
      chip2: '90s Cognitive Shuffle',
      chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • IDENTIFY THE LOOP & CONTROL LEVEL',
      step1Title: 'What kind of thought loop is running right now?',
      step1Sub: 'Select your current loop pattern and whether you can take a concrete action within 24 hours.',
      controlLabel: 'CBT Worry Tree Check — Can you take a concrete action in the next 24 hours?',
      inputLabel: 'Optional: Park the exact looping thought here to clear your RAM (stays 100% local):',
      breakBtn: 'Break This Mental Loop',
      resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR CIRCUIT-BREAKER PROTOCOL',
      parkedTitle: "Parked Outside Working Memory (Scheduled for Tomorrow's 15-Min Worry Window)",
      stepsTitle: '3-Step Rumination Circuit Breaker',
      startShuffle: 'Start 90s Cognitive Shuffle',
      stopShuffle: 'Stop',
      storyBtn: 'Save 1080×1920 Story Card (PNG)',
      copyBtn: 'Copy Protocol',
      shareBtn: 'Share Tool',
      bridgeSleepTitle: 'Sleep Cycle & Circadian Reset',
      bridgeSleepDesc: 'Plan 90-minute sleep cycles, caffeine cutoff, and digital sunset.',
      bridgeCbtTitle: 'CBT Thought Reframer',
      bridgeCbtDesc: 'Challenge catastrophizing or mind-reading with Socratic evidence.',
      bridgeGroundingTitle: '5-4-3-2-1 Grounding Exercise',
      bridgeGroundingDesc: 'Drop out of racing thoughts into immediate physical senses.',
      refTitle: 'Scientific Frameworks & References',
      discTitle: 'Editorial Self-Reflection Disclaimer',
      discText: 'This tool is an educational cognitive-behavioral self-regulation aid and does not diagnose or treat insomnia, OCD, or anxiety disorders.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: 'Racing thoughts keeping you up?',
      stickySub: 'Calculate your 90-min sleep cycles & digital sunset time',
      stickyBtn: 'Sleep Reset →',
      copied: 'Circuit-breaker protocol copied!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Story Card saved!',
      ctrlYes: 'Yes — I can take 1 small action within 24h',
      ctrlNo: 'No — Outside my control right now (or it is late at night)',
      shuffleCue: 'Picture each neutral object calmly for 10 seconds to switch off analytical overdrive.',
      shuffleDone: '90-second Cognitive Shuffle complete. Notice how your mind feels softer and less gripped by the loop.'
    },
    ko: {
      title: '과잉사고·반추 차단기 & 새벽 3시 인지 셔플 | DopaBrain',
      metaDesc: 'CBT 걱정 나무(Worry Tree)로 통제 가능한 고민과 반추를 분류하고, 90초 인지 셔플(Cognitive Shuffle)로 꼬리를 무는 생각을 멈추세요.',
      skip: '과잉사고 차단기 본문으로 이동',
      back: '← 도구 목록',
      langLabel: '언어:',
      kicker: 'CBT 걱정 나무 & 인지 셔플',
      heroTitle: '과잉사고 & 반추 회로 차단기',
      heroLead: '이미 지난 일을 곱씹거나 새벽 3시 꼬리를 무는 걱정에 갇혔나요? CBT 걱정 나무로 생각을 분류하고 머릿속 밖으로 주차한 뒤, 90초 인지 셔플로 과열된 사고 회로를 식히세요.',
      chip1: '5가지 사고 루프 분류',
      chip2: '90초 인지 셔플',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 반복 루프 유형과 통제 가능성 점검',
      step1Title: '지금 머릿속에서 어떤 생각 루프가 돌고 있나요?',
      step1Sub: '현재 패턴을 고르고 24시간 내에 실행할 수 있는 행동이 있는지 선택하세요.',
      controlLabel: 'CBT 걱정 나무 점검 — 앞으로 24시간 안에 내가 직접 할 수 있는 구체적 행동이 있나요?',
      inputLabel: '선택: 머릿속에서 맴도는 생각을 여기에 잠깐 주차해 두세요 (100% 로컬):',
      breakBtn: '반추 루프 차단하기',
      resetBtn: '초기화',
      resultBadge: '2단계 • 맞춤형 반추 차단 프로토콜',
      parkedTitle: '작업기억 외부에 주차됨 (내일 15분 걱정 시간으로 이관)',
      stepsTitle: '3단계 과잉사고 회로 차단 프로토콜',
      startShuffle: '90초 인지 셔플 시작',
      stopShuffle: '중지',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)',
      copyBtn: '프로토콜 복사',
      shareBtn: '도구 공유',
      bridgeSleepTitle: '수면 주기 & 생체리듬 리셋',
      bridgeSleepDesc: '90분 수면 사이클, 카페인 컷오프, 디지털 선셋 시간을 계산합니다.',
      bridgeCbtTitle: 'CBT 인지왜곡 리프레이머',
      bridgeCbtDesc: '파국화·독심술 사고를 소크라테스식 질문으로 객관화합니다.',
      bridgeGroundingTitle: '5-4-3-2-1 감각 그라운딩',
      bridgeGroundingDesc: '생각의 소용돌이에서 빠져나와 현재 오감에 즉시 착지합니다.',
      refTitle: '과학적 프레임워크 및 참고문헌',
      discTitle: '편집 및 자기성찰 안내',
      discText: '본 도구는 교육용 인지행동 자기조절 도구이며 불면증·강박·불안장애의 의학적 진단이나 치료가 아닙니다.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '꼬리를 무는 생각 때문에 잠이 안 오나요?',
      stickySub: '90분 수면 주기와 디지털 선셋 시간을 계산해 보세요',
      stickyBtn: '수면 리셋 →',
      copied: '반추 차단 프로토콜을 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 스토리 카드를 저장했습니다!',
      ctrlYes: '예 — 24시간 안에 할 수 있는 작은 행동 1가지가 있습니다',
      ctrlNo: '아니요 — 지금 당장 통제할 수 없거나 밤늦은 시간입니다',
      shuffleCue: '10초마다 바뀌는 중립적 사물을 머릿속에 부드럽게 그려보며 분석 과열을 식히세요.',
      shuffleDone: '90초 인지 셔플 완료! 생각의 압력이 조금 느슨해졌는지 호흡을 느껴보세요.'
    },
    zh: { title: '过度思考与反刍阻断器 + 90秒认知洗牌 | DopaBrain', heroTitle: '过度思考与反刍阻断器', breakBtn: '打断思绪循环', resetBtn: '重置', startShuffle: '开始 90 秒认知洗牌', stopShuffle: '停止', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制方案', shareBtn: '分享工具', back: '← 工具目录', stickyBtn: '睡眠重置 →' },
    ja: { title: '考えすぎ・反芻ブレイカー＆90秒認知シャッフル | DopaBrain', heroTitle: '考えすぎ＆反芻サーキットブレイカー', breakBtn: '思考ループを止める', resetBtn: 'リセット', startShuffle: '90秒認知シャッフル開始', stopShuffle: '停止', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ツール一覧', stickyBtn: '睡眠リセット →' },
    es: { title: 'Rompedor de Rumiación y Pensamiento Excesivo (90s) | DopaBrain', heroTitle: 'Rompedor de Rumiación y Sobreanálisis', breakBtn: 'Detener el bucle mental', resetBtn: 'Reiniciar', startShuffle: 'Iniciar Cognitive Shuffle (90s)', stopShuffle: 'Detener', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Catálogo', stickyBtn: 'Reset de sueño →' },
    pt: { title: 'Quebrador de Ruminação e Excesso de Pensamentos | DopaBrain', heroTitle: 'Quebrador de Ruminação Mental', breakBtn: 'Interromper este loop', resetBtn: 'Redefinir', startShuffle: 'Iniciar Cognitive Shuffle (90s)', stopShuffle: 'Parar', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Catálogo', stickyBtn: 'Reset do sono →' },
    de: { title: 'Grübel-Stopp & 90s Cognitive Shuffle | DopaBrain', heroTitle: 'Overthinking- & Grübel-Unterbrecher', breakBtn: 'Gedankenkarussell stoppen', resetBtn: 'Zurücksetzen', startShuffle: '90s Cognitive Shuffle starten', stopShuffle: 'Stopp', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Katalog', stickyBtn: 'Schlaf-Reset →' },
    fr: { title: 'Coupe-Circuit Rumination & Cognitive Shuffle 90s | DopaBrain', heroTitle: 'Coupe-Circuit Rumination & Pensées', breakBtn: 'Couper cette boucle', resetBtn: 'Réinitialiser', startShuffle: 'Lancer Cognitive Shuffle (90s)', stopShuffle: 'Arrêter', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Catalogue', stickyBtn: 'Reset sommeil →' },
    ru: { title: 'Стоп-кран навязчивых мыслей и Когнитивный шаффл | DopaBrain', heroTitle: 'Прерыватель руминации и тревожных циклов', breakBtn: 'Остановить цикл мыслей', resetBtn: 'Сбросить', startShuffle: 'Старт 90с когнитивного шаффла', stopShuffle: 'Стоп', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Каталог', stickyBtn: 'Режим сна →' },
    hi: { title: 'ओवरथिंकिंग और रुमिनेशन सर्किट ब्रेकर | DopaBrain', heroTitle: 'ओवरथिंकिंग सर्किट ब्रेकर (90s)', breakBtn: 'विचार चक्र रोकें', resetBtn: 'रीसेट', startShuffle: '90s कॉग्निटिव शफल शुरू करें', stopShuffle: 'रोकें', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← कैटलॉग', stickyBtn: 'स्लीप रीसेट →' },
    id: { title: 'Pemutus Overthinking & Cognitive Shuffle 90 Detik | DopaBrain', heroTitle: 'Pemutus Loop Overthinking', breakBtn: 'Hentikan Loop Pikiran', resetBtn: 'Reset', startShuffle: 'Mulai Cognitive Shuffle 90d', stopShuffle: 'Berhenti', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Katalog', stickyBtn: 'Reset Tidur →' },
    tr: { title: 'Aşırı Düşünme & Ruminasyon Kesici (90 sn) | DopaBrain', heroTitle: 'Aşırı Düşünme Devre Kesici', breakBtn: 'Düşünce Döngüsünü Kes', resetBtn: 'Sıfırla', startShuffle: '90 sn Bilişsel Karıştırmayı Başlat', stopShuffle: 'Durdur', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Katalog', stickyBtn: 'Uyku Sıfırlama →' }
  };

  var LOOPS = [
    { id: 'past_replay', emoji: '⏪', enName: 'Past Regret Replay', koName: '과거 실수 무한 재생', enSub: '"Why did I say that? I should have done it differently."', koSub: '"그때 왜 그렇게 말했을까? 다르게 했어야 했는데."' },
    { id: 'future_whatif', emoji: '🌀', enName: 'Future What-If Spiral', koName: '미래 최악 시나리오', enSub: '"What if everything goes wrong next week?"', koSub: '"다음 주에 일이 다 틀어지면 어떡하지?"' },
    { id: 'social_postmortem', emoji: '💬', enName: 'Social Post-Mortem', koName: '대화·눈치 복기 루프', enSub: '"Did they sound annoyed? Are they mad at me?"', koSub: '"방금 표정이 안 좋았던 것 같은데 나한테 화났나?"' },
    { id: 'decision_loop', emoji: '⚖️', enName: 'Decision Paralysis', koName: '선택 장애·비교 과부하', enSub: '"Option A vs B — what if I regret choosing wrong?"', koSub: '"A와 B 중 잘못 고르면 어쩌지? 계속 비교만 됨."' },
    { id: 'night_3am', emoji: '🌙', enName: '3 AM Bedtime Racing Mind', koName: '새벽 3시 불면 사고 과열', enSub: '"I need to sleep, so my brain won\'t stop talking."', koSub: '"빨리 자야 하는데 누우니까 생각이 더 또렷해짐."' }
  ];

  var SHUFFLE_EN = [
    'Warm Wooden Sailboat',
    'Crisp Green Apple',
    'Quiet Pine Forest Trail',
    'Ceramic Blue Teacup',
    'Soft Cotton Pillow',
    'Red Bicycle by a Bakery',
    'Smooth River Pebble',
    'Golden Autumn Leaf',
    'Lighthouse on Calm Water'
  ];

  var SHUFFLE_KO = [
    '잔잔한 호수 위의 나무 돛단배',
    '아삭하고 신선한 초록 사과',
    '안개 낀 고요한 소나무 숲길',
    '따뜻한 푸른색 도자기 찻잔',
    '포근하고 부드러운 면 베개',
    '빵집 앞에 세워둔 빨간 자전거',
    '물결에 둥글게 깎인 강가 조약돌',
    '천천히 떨어지는 노란 가을 낙엽',
    '고요한 밤바다 끝의 작은 등대'
  ];

  var currentLang = 'en';
  var selectedLoop = 'night_3am';
  var controllable = 'no';
  var currentResult = null;
  var shuffleId = null;
  var shuffleLeft = 90;

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

  function renderSelectors() {
    var grid = document.getElementById('loopGrid');
    if (grid) {
      grid.textContent = '';
      for (var i = 0; i < LOOPS.length; i++) {
        (function (lp) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'toggle-card' + (selectedLoop === lp.id ? ' active' : '');
          btn.setAttribute('data-loop', lp.id);
          btn.setAttribute('aria-pressed', selectedLoop === lp.id ? 'true' : 'false');
          var s = document.createElement('strong');
          s.textContent = lp.emoji + ' ' + (isKo() ? lp.koName : lp.enName);
          var sp = document.createElement('span');
          sp.textContent = isKo() ? lp.koSub : lp.enSub;
          btn.appendChild(s);
          btn.appendChild(sp);
          btn.addEventListener('click', function () { selectedLoop = lp.id; renderSelectors(); });
          grid.appendChild(btn);
        })(LOOPS[i]);
      }
    }

    var row = document.getElementById('controlRow');
    if (row) {
      row.textContent = '';
      var opts = [
        { val: 'yes', label: t('ctrlYes') },
        { val: 'no', label: t('ctrlNo') }
      ];
      for (var j = 0; j < opts.length; j++) {
        (function (opt) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'preset-btn' + (controllable === opt.val ? ' active' : '');
          b.setAttribute('data-control', opt.val);
          b.setAttribute('aria-pressed', controllable === opt.val ? 'true' : 'false');
          b.textContent = opt.label;
          b.addEventListener('click', function () { controllable = opt.val; renderSelectors(); });
          row.appendChild(b);
        })(opts[j]);
      }
    }
  }

  function toast(msg) {
    var el = document.createElement('div');
    el.className = 'wl-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2600);
  }

  function stopShuffle() {
    if (shuffleId) {
      clearInterval(shuffleId);
      shuffleId = null;
    }
  }

  function fmt(s) {
    var m = Math.floor(s / 60);
    var r = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }

  function startShuffle() {
    stopShuffle();
    shuffleLeft = 90;
    var clockEl = document.getElementById('shuffleClock');
    var wordEl = document.getElementById('shuffleWord');
    var cueEl = document.getElementById('shuffleCue');
    var words = isKo() ? SHUFFLE_KO : SHUFFLE_EN;

    if (clockEl) clockEl.textContent = fmt(shuffleLeft);
    if (wordEl) wordEl.textContent = (isKo() ? '상상하기: ' : 'Visualize: ') + words[0];
    if (cueEl) cueEl.textContent = t('shuffleCue');

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'overthinking_shuffle_start', {
          event_category: 'wellness_tool',
          tool_slug: 'overthinking-rumination-breaker',
          language: currentLang
        });
      } catch (e) {}
    }

    shuffleId = setInterval(function () {
      shuffleLeft -= 1;
      if (clockEl) clockEl.textContent = fmt(Math.max(0, shuffleLeft));
      if (shuffleLeft <= 0) {
        stopShuffle();
        if (cueEl) cueEl.textContent = t('shuffleDone');
        return;
      }
      var idx = Math.min(words.length - 1, Math.floor((90 - shuffleLeft) / 10));
      if (wordEl) wordEl.textContent = (isKo() ? '상상하기: ' : 'Visualize: ') + words[idx];
    }, 1000);
  }

  function buildProtocol() {
    var rawThought = (document.getElementById('loopInput')?.value || '').trim();
    currentResult = { loopId: selectedLoop, controllable: controllable, thought: rawThought };
    renderResult();

    var card = document.getElementById('resultCard');
    if (card) {
      card.hidden = false;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'overthinking_breaker_complete', {
          event_category: 'wellness_tool',
          tool_slug: 'overthinking-rumination-breaker',
          language: currentLang
        });
      } catch (e) {}
    }
  }

  function getProtocolCopy(res) {
    var isActionable = res.controllable === 'yes';
    if (isActionable) {
      return {
        title: isKo() ? '통제 가능한 걱정 — 1가지 최소 행동으로 종결' : 'Actionable Worry — Convert Into 1 Bounded Next Step',
        desc: isKo() ? '머릿속 시뮬레이션은 여기까지면 충분합니다. 24시간 안에 할 수 있는 가장 작은 5분 행동 하나를 정하고 나머지는 놓아주세요.' : 'Mental rehearsal has reached diminishing returns. Lock in one tiny 5-minute action for the next 24 hours and close the loop.',
        steps: isKo() ? [
          '1단계 (시점 고정): "내일 오전 10시에 5분만 확인한다"처럼 실행 시간을 딱 정해 뇌의 반복 경보를 끕니다.',
          '2단계 (제3자 거리두기): 나 자신을 이름으로 부르며("지금 [이름]은 충분히 준비했어") 심리적 거리를 둡니다.',
          '3단계 (인지 셔플 전환): 아래 90초 인지 셔플을 실행해 분석 모드를 부드럽게 종료합니다.'
        ] : [
          'Step 1 (Time-Box Action): Schedule exactly ONE 5-minute action tomorrow morning so your brain stops re-pinging you tonight.',
          'Step 2 (Distanced Self-Talk): Refer to yourself in the third person ("You can handle step one tomorrow") to lower amygdala arousal.',
          'Step 3 (Shift Gears): Run the 90-second Cognitive Shuffle below to clear working memory.'
        ]
      };
    }
    return {
      title: isKo() ? '비통제 반추 루프 — 주차 후 감각 전환' : 'Uncontrollable Rumination — Park, Defuse & Shuffle',
      desc: isKo() ? '지금 당장 바꿀 수 없거나 밤늦은 시간의 고민은 해결책이 아니라 에너지 소모입니다. 내일 낮 "15분 걱정 시간"으로 미루고 지금 이 순간을 되찾으세요.' : 'Replaying something you cannot change right now burns nervous-system fuel without creating safety. Park it for tomorrow\'s 15-minute Worry Window and step off the loop.',
      steps: isKo() ? [
        '1단계 (이름 붙이기): "이건 해결이 아니라 반추 루프다"라고 소리 내어 명명해 생각과 나를 분리합니다.',
        '2단계 (걱정 시간 예약): "내일 오후 5시 15분 동안만 고민한다"고 선언하고 지금은 분석을 중단합니다.',
        '3단계 (90초 인지 셔플): 아래 90초 중립 이미지 셔플로 전전두엽의 과열된 언어 회로를 꺼주세요.'
      ] : [
        'Step 1 (Cognitive Defusion): Label it explicitly — "I am having the thought that…" rather than treating the replay as an emergency.',
        'Step 2 (Scheduled Worry Window): Postpone analysis to a bounded 15-minute slot tomorrow at 5:00 PM so tonight stays protected.',
        'Step 3 (90s Cognitive Shuffle): Run the neutral visual shuffle below to signal safety and interrupt analytical overdrive.'
      ]
    };
  }

  function renderResult() {
    if (!currentResult) return;
    stopShuffle();
    shuffleLeft = 90;
    var clockEl = document.getElementById('shuffleClock');
    var wordEl = document.getElementById('shuffleWord');
    var cueEl = document.getElementById('shuffleCue');
    var words = isKo() ? SHUFFLE_KO : SHUFFLE_EN;
    if (clockEl) clockEl.textContent = '01:30';
    if (wordEl) wordEl.textContent = (isKo() ? '상상하기: ' : 'Visualize: ') + words[0];
    if (cueEl) cueEl.textContent = t('shuffleCue');

    var copy = getProtocolCopy(currentResult);
    var titleEl = document.getElementById('verdictTitle');
    var descEl = document.getElementById('verdictDesc');
    if (titleEl) titleEl.textContent = copy.title;
    if (descEl) descEl.textContent = copy.desc;

    var pBox = document.getElementById('parkedBox');
    var pOut = document.getElementById('parkedThoughtOut');
    if (pBox && pOut) {
      if (currentResult.thought) {
        pBox.hidden = false;
        pOut.textContent = currentResult.thought; // XSS-safe textContent!
      } else {
        pBox.hidden = true;
        pOut.textContent = '';
      }
    }

    var list = document.getElementById('breakerSteps');
    if (list) {
      list.textContent = '';
      for (var i = 0; i < copy.steps.length; i++) {
        var li = document.createElement('li');
        li.textContent = copy.steps[i];
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
    renderSelectors();
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

    var breakBtn = document.getElementById('breakBtn');
    if (breakBtn) breakBtn.addEventListener('click', buildProtocol);

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        stopShuffle();
        selectedLoop = 'night_3am';
        controllable = 'no';
        currentResult = null;
        var inp = document.getElementById('loopInput');
        if (inp) inp.value = '';
        renderSelectors();
        var card = document.getElementById('resultCard');
        if (card) card.hidden = true;
      });
    }

    var startBtn = document.getElementById('startShuffleBtn');
    if (startBtn) startBtn.addEventListener('click', startShuffle);

    var stopBtn = document.getElementById('stopShuffleBtn');
    if (stopBtn) stopBtn.addEventListener('click', stopShuffle);

    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        if (!currentResult) return;
        var copy = getProtocolCopy(currentResult);
        var txt = copy.title + '\n\n' + copy.steps.join('\n');
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
        var shareUrl = 'https://dopabrain.com/portal/tools/overthinking-rumination-breaker.html?lang=' + currentLang;
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
        var copy = getProtocolCopy(currentResult);
        var ok = window.DopaBrainStoryCard.downloadStoryCard({
          slug: 'overthinking-rumination-breaker',
          badge: t('kicker'),
          emoji: '🌀',
          toolName: t('heroTitle'),
          headline: copy.title,
          subtitle: copy.desc,
          accent: '#6366f1',
          accent2: '#38bdf8',
          takeawayLabel: t('stepsTitle'),
          takeaway: copy.steps[0] || '',
          footerUrl: 'dopabrain.com/portal/tools/overthinking-rumination-breaker.html'
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
