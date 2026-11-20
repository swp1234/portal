/* Inner Critic & Self-Compassion Reframer (Kristin Neff 3-Pillar + IFS Parts Lens)
 * 100% client-side, XSS-safe (textContent only), privacy-safe, 12-language support.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Inner Critic & Self-Compassion Reframer | DopaBrain',
      metaDesc: "Free 12-language Inner Critic & Self-Compassion workspace grounded in Kristin Neff's 3-pillar model and IFS parts work.",
      skip: 'Skip to Self-Compassion Lab',
      back: '← Tools Catalog',
      langLabel: 'Language:',
      kicker: 'SELF-COMPASSION & PARTS WORK LAB',
      heroTitle: 'Inner Critic & Self-Compassion Reframer',
      heroLead: 'Notice the harsh inner voice, understand what protective fear drives it, and rewrite it into a grounded 3-pillar self-compassion response — 100% locally in your browser.',
      chip1: '5 Critic Archetypes',
      chip2: '3-Pillar Neff Reframe',
      chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • IDENTIFY THE ACTIVE INNER CRITIC',
      step1Title: 'Which inner critic voice is loudest today?',
      step1Sub: 'Select the archetype that sounds most like your harsh self-talk right now.',
      inputLabel: 'Optional: What harsh sentence is repeating in your mind? (stays 100% local):',
      reframeBtn: 'Build Self-Compassion Reframe',
      resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR 3-PILLAR ALLY RESPONSE',
      capturedTitle: 'Harsh Thought Externalized (Not Your Identity)',
      intentTitle: 'Hidden Protective Intention (IFS Lens)',
      pillarsTitle: '3-Pillar Self-Compassion Response',
      allyTitle: 'Grounded Inner Ally Statement',
      storyBtn: 'Save 1080×1920 Story Card (PNG)',
      copyBtn: 'Copy Reframe',
      shareBtn: 'Share Tool',
      bridgeCbtTitle: 'CBT Thought Reframer',
      bridgeCbtDesc: 'Fact-check distorted thinking traps with Socratic evidence testing.',
      bridgeImposterTitle: 'Imposter Syndrome Proof Vault',
      bridgeImposterDesc: 'Counter self-doubt with a local vault of your real evidence & wins.',
      bridgeBoundaryTitle: 'Boundary Script Generator',
      bridgeBoundaryDesc: 'Replace guilt and people-pleasing with calm, assertive limits.',
      refTitle: 'Scientific Frameworks & References',
      discTitle: 'Editorial Self-Reflection Disclaimer',
      discText: 'This self-compassion tool is an educational reflection exercise inspired by compassion-focused psychology and IFS, not clinical therapy or diagnosis.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: 'Challenge looping negative thoughts',
      stickySub: 'Test cognitive distortions with our Socratic CBT Reframer',
      stickyBtn: 'CBT Reframer →',
      copied: 'Self-compassion reframe copied!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Story Card saved!'
    },
    ko: {
      title: '내면 비판가 해체 & 자기연민 리프레이머 | DopaBrain',
      metaDesc: '크리스틴 네프의 자기연민 3요소와 IFS 내면가족체계 관점으로 가혹한 자기비판을 따뜻한 내면 동맹의 언어로 전환하세요.',
      skip: '자기연민 리프레이머로 이동',
      back: '← 도구 목록',
      langLabel: '언어:',
      kicker: '자기연민 & 내면아이 치유 랩',
      heroTitle: '내면 비판가 & 자기연민 리프레이머',
      heroLead: '스스로를 몰아세우는 가혹한 내면의 목소리를 포착하고, 그 뒤에 숨은 보호 의도를 이해한 뒤 3단계 자기연민 응답으로 재구성하세요.',
      chip1: '5가지 내면 비판가 유형',
      chip2: '네프 3요소 리프레임',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 오늘 가장 큰 내면 비판가 선택',
      step1Title: '지금 머릿속에서 어떤 비판의 목소리가 가장 큰가요?',
      step1Sub: '현재 내 자기비판 패턴과 가장 비슷한 유형을 선택하세요.',
      inputLabel: '선택: 머릿속에서 맴도는 가혹한 문장 (100% 로컬에만 남음):',
      reframeBtn: '자기연민 응답 생성하기',
      resetBtn: '초기화',
      resultBadge: '2단계 • 나의 3단계 내면 동맹 응답',
      capturedTitle: '외부화한 비판 문장 (이것은 내 정체성이 아닙니다)',
      intentTitle: '숨어 있는 보호 의도 (IFS 관점)',
      pillarsTitle: '3요소 자기연민 재구성',
      allyTitle: '따뜻하고 단단한 내면 동맹 선언문',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)',
      copyBtn: '응답 복사',
      shareBtn: '도구 공유',
      bridgeCbtTitle: 'CBT 인지왜곡 리프레이머',
      bridgeCbtDesc: '소크라테스식 질문으로 흑백논리·파국화를 팩트체크합니다.',
      bridgeImposterTitle: '가면 증후군 증거 금고',
      bridgeImposterDesc: '객관적인 성취 기록으로 자기 의심을 차분히 반박합니다.',
      bridgeBoundaryTitle: '거절·경계선 스크립트 빌더',
      bridgeBoundaryDesc: '죄책감 대신 명확하고 건강한 대인관계 경계를 세웁니다.',
      refTitle: '과학적 프레임워크 및 참고문헌',
      discTitle: '편집 및 자기성찰 안내',
      discText: '본 자기연민 도구는 심리학 교육용 자기성찰 워크스페이스이며 임상 심리치료나 의학적 진단이 아닙니다.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '반복되는 부정적 생각을 점검해 보세요',
      stickySub: 'CBT 인지왜곡 리프레이머로 자동적 사고를 객관화합니다',
      stickyBtn: 'CBT 리프레이머 →',
      copied: '자기연민 응답을 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 스토리 카드를 저장했습니다!'
    },
    zh: { title: '内在批评者与自我关怀重构器 | DopaBrain', heroTitle: '内在批评者与自我关怀重构器', reframeBtn: '生成自我关怀回应', resetBtn: '重置', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制回应', shareBtn: '分享工具', back: '← 工具目录', stickyBtn: 'CBT 重构 →' },
    ja: { title: 'インナー・クリティック＆セルフコンパッション変換ツール | DopaBrain', heroTitle: '内なる批判者＆セルフコンパッション', reframeBtn: 'セルフコンパッション応答を作成', resetBtn: 'リセット', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ツール一覧', stickyBtn: 'CBT変換へ →' },
    es: { title: 'Crítico Interno y Autocompasión | DopaBrain', heroTitle: 'Reframing del Crítico Interno', reframeBtn: 'Crear respuesta compasiva', resetBtn: 'Reiniciar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Catálogo', stickyBtn: 'Reframer TCC →' },
    pt: { title: 'Crítico Interno e Autocompaixão | DopaBrain', heroTitle: 'Reframing do Crítico Interno', reframeBtn: 'Gerar resposta compassiva', resetBtn: 'Redefinir', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Catálogo', stickyBtn: 'Reframer TCC →' },
    de: { title: 'Innerer Kritiker & Selbstmitgefühl-Lab | DopaBrain', heroTitle: 'Innerer Kritiker & Selbstmitgefühl', reframeBtn: 'Mitgefühls-Antwort erstellen', resetBtn: 'Zurücksetzen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Katalog', stickyBtn: 'KVT-Reframer →' },
    fr: { title: 'Critique Intérieur et Autocompassion | DopaBrain', heroTitle: 'Critique Intérieur & Autocompassion', reframeBtn: 'Générer une réponse bienveillante', resetBtn: 'Réinitialiser', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Catalogue', stickyBtn: 'Reframer TCC →' },
    ru: { title: 'Внутренний критик и самосострадание | DopaBrain', heroTitle: 'Внутренний критик и самосострадание', reframeBtn: 'Создать ответ поддержки', resetBtn: 'Сбросить', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Каталог', stickyBtn: 'КПТ-рефрейминг →' },
    hi: { title: 'इनर क्रिटिक और सेल्फ-कंपैशन रिफ्रेमर | DopaBrain', heroTitle: 'इनर क्रिटिक और आत्म-करुणा लैब', reframeBtn: 'आत्म-करुणा उत्तर बनाएं', resetBtn: 'रीसेट', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← टूल्स कैटलॉग', stickyBtn: 'CBT रिफ्रेमर →' },
    id: { title: 'Reframer Kritik Batin & Welas Asih Diri | DopaBrain', heroTitle: 'Lab Kritik Batin & Self-Compassion', reframeBtn: 'Buat Respons Welas Asih', resetBtn: 'Reset', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Katalog Alat', stickyBtn: 'Reframer CBT →' },
    tr: { title: 'İç Eleştirmen ve Öz Şefkat Laboratuvarı | DopaBrain', heroTitle: 'İç Eleştirmen ve Öz Şefkat', reframeBtn: 'Öz Şefkat Yanıtı Oluştur', resetBtn: 'Sıfırla', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Katalog', stickyBtn: 'BDT Aracı →' }
  };

  var ARCHETYPES = [
    {
      id: 'perfectionist',
      emoji: '🎯',
      enName: 'The Perfectionist',
      koName: '완벽주의 감시자',
      enCue: '"One flaw ruins everything. Nothing is ever good enough."',
      koCue: '"작은 실수 하나가 전부를 망쳤어. 아직 한참 부족해."',
      enDesc: 'Sets impossibly high bars and treats ordinary learning curves as personal failure.',
      koDesc: '비현실적으로 높은 기준을 세우고 자연스러운 시행착오를 개인의 결함으로 몰아갑니다.',
      enIntent: 'This part is actually trying to protect you from public shame, rejection, or criticism by demanding flawlessness beforehand.',
      koIntent: '이 내면 파트는 사실 남들의 비난이나 거절, 수치심으로부터 당신을 미리 방어하려고 완벽을 강요하고 있습니다.',
      enPillars: [
        'Mindfulness: "I notice my Perfectionist part is loud right now because this outcome matters to me."',
        'Common Humanity: "Every skilled human iterates through messy drafts — flawless performance does not exist."',
        'Self-Kindness: "Done, honest, and learning beats paralyzed by impossible standards."'
      ],
      koPillars: [
        '마음챙김: "이 일이 중요하기 때문에 지금 완벽주의 파트가 유독 크게 걱정하고 있구나."',
        '보편적 인간성: "숙련된 사람들도 모두 엉성한 초안과 실수를 거쳐 성장한다. 무결점은 환상이다."',
        '자기친절: "불가능한 완벽함 때문에 멈추기보다, 정직하게 시도하고 배우는 내가 훨씬 용감하다."'
      ],
      enAlly: 'I thank my Perfectionist part for wanting to keep me safe, and I choose "good enough and growing" today.',
      koAlly: '나를 지키려 애쓴 완벽주의 파트에게 고맙지만, 오늘 나는 완벽 대신 "충분히 괜찮고 성장하는 나"를 선택한다.'
    },
    {
      id: 'taskmaster',
      emoji: '⏱️',
      enName: 'The Taskmaster',
      koName: '채찍질 감독관',
      enCue: '"You are lazy. Rest is only allowed after every list is empty."',
      koCue: '"넌 너무 게을러. 할 일을 다 끝내기 전엔 쉴 자격이 없어."',
      enDesc: 'Equates your entire human worth with nonstop output and treats fatigue as moral weakness.',
      koDesc: '인간으로서의 가치를 오직 끊임없는 생산성과 성과로만 평가하며 피로를 나태함으로 낙인찍습니다.',
      enIntent: 'This part fears that if you slow down for even one hour, you will fall behind, lose stability, or become unworthy.',
      koIntent: '이 파트는 잠시라도 속도를 늦추면 뒤처지거나 안전과 인정을 잃을까 봐 두려워하며 당신을 몰아붙입니다.',
      enPillars: [
        'Mindfulness: "I hear urgency and exhaustion colliding inside me right now."',
        'Common Humanity: "Humans are cyclical organisms, not machines — recovery is part of sustainable work."',
        'Self-Kindness: "My worth does not drop to zero when I pause to refuel my nervous system."'
      ],
      koPillars: [
        '마음챙김: "지금 내 안에서 조급함과 깊은 피로가 동시에 부딪히고 있다는 걸 알아차린다."',
        '보편적 인간성: "인간은 기계가 아니라 리듬을 가진 생명체다. 회복 없이는 지속 가능한 성과도 없다."',
        '자기친절: "잠시 쉬어간다고 해서 내 가치나 성실함이 사라지지 않는다. 휴식도 책임 있는 선택이다."'
      ],
      enAlly: 'Rest is not the enemy of my goals — it is the fuel that lets me show up steady tomorrow.',
      koAlly: '휴식은 목표의 적이 아니라, 내일 다시 흔들리지 않고 나아가기 위한 필수 연료다.'
    },
    {
      id: 'guilt_tripper',
      emoji: '⚖️',
      enName: 'The Guilt-Tripper',
      koName: '죄책감 재판관',
      enCue: '"You let people down. You should have known better back then."',
      koCue: '"네가 사람들을 실망시켰어. 그때 더 잘했어야지."',
      enDesc: 'Replays past mistakes on an endless loop, confusing healthy repair with permanent self-punishment.',
      koDesc: '과거의 실수를 끝없이 재상영하며, 건강한 반성과 영원한 자기처벌을 혼동합니다.',
      enIntent: 'This part cares deeply about integrity and connection, and believes harsh guilt is the only way to keep you from hurting others.',
      koIntent: '이 파트는 관계와 도덕성을 소중히 여기며, 강한 죄책감으로 괴롭혀야만 실수를 반복하지 않을 거라 믿고 있습니다.',
      enPillars: [
        'Mindfulness: "This pang of regret shows I have empathy — it does not mean I am irredeemable."',
        'Common Humanity: "Every caring person makes missteps with the limited information they had at the time."',
        'Self-Kindness: "I can take one clean repair step or extract one lesson, and release endless self-trial."'
      ],
      koPillars: [
        '마음챙김: "이 후회와 쓰라림은 내게 공감과 양심이 살아있다는 증거이지, 내가 나쁜 사람이라는 뜻이 아니다."',
        '보편적 인간성: "누구나 당시의 제한된 정보와 여유 속에서 실수를 저지른다."',
        '자기친절: "필요한 사과나 배움 한 가지를 챙겼다면, 끝없는 자기 재판은 여기서 종료해도 된다."'
      ],
      enAlly: 'I did the best I could with what I knew then; now I can learn cleanly without punishing myself forever.',
      koAlly: '그때의 나는 당시 알던 범위 안에서 최선이었다. 이제 자기처벌 대신 배움과 회복을 선택한다.'
    },
    {
      id: 'molder',
      emoji: '🎭',
      enName: 'The Conformist / Molder',
      koName: '눈치·비교 조형가',
      enCue: '"Everyone else is ahead. Don\'t stand out or be too much."',
      koCue: '"남들은 다 앞서가는데 나만 뒤처졌어. 튀면 안 돼."',
      enDesc: 'Measures your life against curated external timelines and polices your authenticity to fit in.',
      koDesc: '타인의 편집된 하이라이트와 나를 비교하며 소속감을 지키기 위해 본래의 개성을 억누릅니다.',
      enIntent: 'This part learned early that belonging meant blending in, and is trying to keep you accepted by the group.',
      koIntent: '이 파트는 과거에 튀지 않고 맞춰야 안전하고 사랑받을 수 있다고 배웠기에, 당신이 고립되지 않도록 단속합니다.',
      enPillars: [
        'Mindfulness: "Comparison is making me feel small right now, even though I am seeing only others\' highlights."',
        'Common Humanity: "No two nervous systems or life paths unfold on the same schedule."',
        'Self-Kindness: "Real belonging comes from honesty, not shrinking myself into a mold."'
      ],
      koPillars: [
        '마음챙김: "타인의 겉모습과 내 속마음을 비교하면서 지금 마음이 위축되고 있다는 걸 알아차린다."',
        '보편적 인간성: "모든 사람의 삶의 속도와 계절은 다르며, 정해진 단일 시간표는 존재하지 않는다."',
        '자기친절: "나를 억지로 틀에 맞춰 줄일 때가 아니라 솔직한 내 모습일 때 진짜 연결이 시작된다."'
      ],
      enAlly: 'My timeline is allowed to look different; I do not need to shrink myself to earn belonging.',
      koAlly: '내 삶의 속도는 남과 달라도 괜찮다. 사랑받기 위해 나를 억지로 축소할 필요는 없다.'
    },
    {
      id: 'underminer',
      emoji: '🌫️',
      enName: 'The Underminer',
      koName: '자신감 약화자',
      enCue: '"Why even try? You\'ll probably fail anyway."',
      koCue: '"해봤자 어차피 안 될 텐데 왜 힘 빼?"',
      enDesc: 'Preemptively drains confidence before you take risks so disappointment won\'t catch you off guard.',
      koDesc: '실패의 충격을 피하기 위해 도전하기도 전에 미리 자신감과 의욕을 꺾어버립니다.',
      enIntent: 'This part is trying to cushion your inner child from the sting of hope followed by rejection or failure.',
      koIntent: '이 파트는 기대했다가 상처받던 과거의 아픔을 다시 겪지 않도록 미리 기대치를 낮춰 당신을 보호하려 합니다.',
      enPillars: [
        'Mindfulness: "My Underminer voice is really just fear of disappointment speaking in disguise."',
        'Common Humanity: "Feeling self-doubt right before stretching into new territory is a universal human reflex."',
        'Self-Kindness: "I can take one low-stakes experimental step without needing guaranteed perfection."'
      ],
      koPillars: [
        '마음챙김: "어차피 안 될 거라는 목소리는 사실 실망이 두려운 마음이 변장한 것이다."',
        '보편적 인간성: "새로운 도전을 앞두고 자기 의심이 올라오는 것은 누구나 겪는 자연스러운 반응이다."',
        '자기친절: "결과를 100% 보장받지 않아도, 부담 없는 작은 실험 한 걸음은 충분히 해볼 가치가 있다."'
      ],
      enAlly: 'Self-doubt is just a nervous passenger, not the driver — I can try one small experiment today.',
      koAlly: '자기 의심은 불안한 동승자일 뿐 운전자가 아니다. 오늘 나는 작은 실험 한 걸음을 시도해 본다.'
    }
  ];

  var currentLang = 'en';
  var selectedId = 'perfectionist';
  var currentResult = null;

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

  function renderGrid() {
    var grid = document.getElementById('criticGrid');
    if (!grid) return;
    grid.textContent = '';

    for (var i = 0; i < ARCHETYPES.length; i++) {
      (function (arc) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'toggle-card' + (selectedId === arc.id ? ' active' : '');
        btn.setAttribute('data-critic', arc.id);
        btn.setAttribute('aria-pressed', selectedId === arc.id ? 'true' : 'false');

        var title = document.createElement('strong');
        title.textContent = arc.emoji + ' ' + (isKo() ? arc.koName : arc.enName);
        var cue = document.createElement('span');
        cue.textContent = isKo() ? arc.koCue : arc.enCue;
        btn.appendChild(title);
        btn.appendChild(cue);

        btn.addEventListener('click', function () {
          selectedId = arc.id;
          renderGrid();
        });
        grid.appendChild(btn);
      })(ARCHETYPES[i]);
    }
  }

  function toast(msg) {
    var el = document.createElement('div');
    el.className = 'wl-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2600);
  }

  function findArchetype(id) {
    for (var i = 0; i < ARCHETYPES.length; i++) {
      if (ARCHETYPES[i].id === id) return ARCHETYPES[i];
    }
    return ARCHETYPES[0];
  }

  function buildReframe() {
    var rawLine = (document.getElementById('criticLineInput')?.value || '').trim();
    currentResult = { id: selectedId, criticLine: rawLine };
    renderResult();

    var card = document.getElementById('resultCard');
    if (card) {
      card.hidden = false;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'inner_critic_reframe_complete', {
          event_category: 'wellness_tool',
          tool_slug: 'inner-critic-compassion-lab',
          language: currentLang
        });
      } catch (e) {}
    }
  }

  function renderResult() {
    if (!currentResult) return;
    var arc = findArchetype(currentResult.id);

    var titleEl = document.getElementById('verdictTitle');
    var descEl = document.getElementById('verdictDesc');
    if (titleEl) titleEl.textContent = arc.emoji + ' ' + (isKo() ? arc.koName : arc.enName);
    if (descEl) descEl.textContent = isKo() ? arc.koDesc : arc.enDesc;

    var capBox = document.getElementById('capturedBox');
    var capOut = document.getElementById('capturedCriticOut');
    if (capBox && capOut) {
      if (currentResult.criticLine) {
        capBox.hidden = false;
        capOut.textContent = currentResult.criticLine; // XSS-safe textContent!
      } else {
        capBox.hidden = true;
        capOut.textContent = '';
      }
    }

    var intentEl = document.getElementById('protectiveIntent');
    if (intentEl) intentEl.textContent = isKo() ? arc.koIntent : arc.enIntent;

    var list = document.getElementById('pillarsList');
    if (list) {
      list.textContent = '';
      var pillars = isKo() ? arc.koPillars : arc.enPillars;
      for (var i = 0; i < pillars.length; i++) {
        var li = document.createElement('li');
        li.textContent = pillars[i];
        list.appendChild(li);
      }
    }

    var allyEl = document.getElementById('allyVoiceOut');
    if (allyEl) allyEl.textContent = isKo() ? arc.koAlly : arc.enAlly;
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
    renderGrid();
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

    var reframeBtn = document.getElementById('reframeBtn');
    if (reframeBtn) reframeBtn.addEventListener('click', buildReframe);

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        selectedId = 'perfectionist';
        currentResult = null;
        var inp = document.getElementById('criticLineInput');
        if (inp) inp.value = '';
        renderGrid();
        var card = document.getElementById('resultCard');
        if (card) card.hidden = true;
      });
    }

    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        if (!currentResult) return;
        var arc = findArchetype(currentResult.id);
        var pillars = isKo() ? arc.koPillars : arc.enPillars;
        var txt = (isKo() ? arc.koName : arc.enName) + '\n\n' + pillars.join('\n') + '\n\n' + (isKo() ? arc.koAlly : arc.enAlly);
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
        var shareUrl = 'https://dopabrain.com/portal/tools/inner-critic-compassion-lab.html?lang=' + currentLang;
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
        var arc = findArchetype(currentResult.id);
        var ok = window.DopaBrainStoryCard.downloadStoryCard({
          slug: 'inner-critic-compassion-lab',
          badge: t('kicker'),
          emoji: arc.emoji,
          toolName: t('heroTitle'),
          headline: isKo() ? arc.koName : arc.enName,
          subtitle: isKo() ? arc.koIntent : arc.enIntent,
          accent: '#ec4899',
          accent2: '#8b5cf6',
          takeawayLabel: t('allyTitle'),
          takeaway: isKo() ? arc.koAlly : arc.enAlly,
          footerUrl: 'dopabrain.com/portal/tools/inner-critic-compassion-lab.html'
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
