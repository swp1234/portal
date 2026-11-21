/* Inner Child & Core Emotional Need Decoder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Inner Child & Core Emotional Need Decoder | DopaBrain',
      metaDesc: 'Free 12-language Inner Child & Core Emotional Need Decoder. Identify which unmet emotional need drives present triggers and craft a calm reparenting micro-ritual locally.',
      skip: 'Skip to Inner Child Decoder', back: '← Mental Wellness Lab', langLabel: 'Language:',
      kicker: 'SCHEMA & SELF-REPARENTING LAB', heroTitle: 'Inner Child & Core Emotional Need Decoder',
      heroLead: 'Big adult reactions often protect an old unmet childhood need. Pick the emotional ache showing up today to uncover the core need underneath and build a calm, grounded reparenting micro-ritual locally.',
      chip1: '5 Core Needs', chip2: 'Reparenting Script', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • IDENTIFY THE EMOTIONAL ACHE UNDER THE SURFACE',
      step1Title: 'Which familiar trigger or longing feels loudest today?',
      step1Sub: 'Choose the emotional pattern that resonates most right now.',
      letterLabel: 'Optional: 1 reassuring line to your younger self (stays 100% private in browser):',
      decodeBtn: 'Decode Core Need & Reparenting Plan', resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR SELF-REPARENTING ANCHOR',
      letterBoxTitle: 'My One-Line Promise to Younger Me',
      scriptTitle: 'Healthy Adult Reparenting Statement',
      stepsTitle: '3 Gentle Reparenting Micro-Actions Today',
      storyBtn: 'Save 1080×1920 Reparenting Card (PNG)', copyBtn: 'Copy Reassurance', shareBtn: 'Share Tool',
      bridgeCriticTitle: 'Inner Critic Compassion Lab', bridgeCriticDesc: 'Soften the harsh internalized voice into a steady ally.',
      bridgeFlashTitle: 'Emotional Flashback Grounding', bridgeFlashDesc: 'Walk through 6 present-time grounding steps when old overwhelm hits.',
      bridgeAttTitle: 'Attachment Trigger Decoder', bridgeAttDesc: 'Translate fear of abandonment into clear, secure communication.',
      faqTitle: 'Frequently Asked Questions', refTitle: 'Psychological Frameworks & References',
      discTitle: 'Editorial Self-Reflection Disclaimer:',
      discText: 'This reflection guide is an educational self-compassion aid inspired by schema therapy concepts, not clinical trauma psychotherapy.',
      privacy: 'Privacy Policy', terms: 'Terms',
      stickyTitle: 'Feeling suddenly overwhelmed by an old emotion?',
      stickySub: 'Open our 6-Step Emotional Flashback Grounding Companion',
      stickyBtn: 'Ground Now →',
      copied: 'Reparenting statement copied!', shared: 'Tool link copied!', savedCard: '1080×1920 Reparenting Card saved!'
    },
    ko: {
      title: '내면아이 핵심 감정 욕구 디코더 & 셀프 리페어런팅 랩 | DopaBrain',
      metaDesc: '지금 나를 크게 흔드는 감정의 뿌리에 어떤 미충족 핵심 욕구가 숨어 있는지 5가지 스키마 욕구로 해독하고, 따뜻한 셀프 리페어런팅 실천 문장을 만드세요.',
      skip: '내면아이 디코더로 이동', back: '← 멘탈 웰니스 랩', langLabel: '언어:',
      kicker: '스키마 심리 & 셀프 리페어런팅 랩', heroTitle: '내면아이 핵심 욕구 디코더',
      heroLead: '현재의 과도한 감정 반응 뒤에는 오래전 채워지지 못한 핵심 욕구가 숨어 있는 경우가 많습니다. 오늘 유독 크게 올라오는 감정을 골라 따뜻한 어른 자아의 돌봄 문장을 만들어 보세요.',
      chip1: '5가지 핵심 감정 욕구', chip2: '리페어런팅 돌봄 문장', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 오늘 유독 올라오는 감정 신호 선택',
      step1Title: '지금 마음 깊은 곳에서 가장 크게 울리는 감정은 무엇인가요?',
      step1Sub: '오늘 가장 공감되는 감정 패턴 1가지를 선택하세요.',
      letterLabel: '선택: 어린 시절의 나에게 건네는 한 줄 약속 (100% 브라우저 비공개):',
      decodeBtn: '핵심 욕구 해독 & 리페어런팅 플랜 보기', resetBtn: '초기화',
      resultBadge: '2단계 • 나의 건강한 어른 자아 돌봄 앵커',
      letterBoxTitle: '어린 나에게 건네는 오늘의 한 줄 약속',
      scriptTitle: '건강한 어른 자아의 리페어런팅 문장',
      stepsTitle: '오늘 바로 나를 돌보는 3가지 부드러운 행동',
      storyBtn: '1080×1920 돌봄 카드 저장 (PNG)', copyBtn: '돌봄 문장 복사', shareBtn: '도구 공유',
      bridgeCriticTitle: '내면 비판가 → 자기연민 랩', bridgeCriticDesc: '가혹한 내면의 비난을 따뜻한 지지 목소리로 전환합니다.',
      bridgeFlashTitle: '감정 플래시백 6단계 그라운딩', bridgeFlashDesc: '오래된 압도감이 밀려올 때 현재 시점으로 안전하게 돌아옵니다.',
      bridgeAttTitle: '애착 트리거 디코더', bridgeAttDesc: '버림받을 불안을 안정형 소통 문장으로 바꿉니다.',
      faqTitle: '자주 묻는 질문', refTitle: '심리학적 프레임워크 및 참고문헌',
      discTitle: '편집 및 자기성찰 안내:',
      discText: '본 도구는 스키마 치료의 핵심 욕구 개념을 참고한 교육용 자기연민 도구이며 임상 트라우마 치료를 대체하지 않습니다.',
      privacy: '개인정보처리방침', terms: '이용약관',
      stickyTitle: '오래된 감정에 갑자기 압도되는 느낌인가요?',
      stickySub: '6단계 감정 플래시백 그라운딩 컴패니언으로 지금 여기로 돌아오세요',
      stickyBtn: '그라운딩 열기 →',
      copied: '리페어런팅 문장을 복사했습니다!', shared: '도구 링크를 복사했습니다!', savedCard: '1080×1920 리페어런팅 카드를 저장했습니다!'
    },
    zh: { title: '内在小孩与核心情感需求解码器 | DopaBrain', heroTitle: '内在小孩核心需求解码器', decodeBtn: '解码核心需求与自我滋养计划', resetBtn: '重置', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '情绪着陆 →' },
    ja: { title: 'インナーチャイルド＆核心感情ニーズデコーダー | DopaBrain', heroTitle: 'インナーチャイルド欲求デコーダー', decodeBtn: '核心ニーズとケア文を作成', resetBtn: 'リセット', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: 'グラウンディング →' },
    es: { title: 'Decodificador del Niño Interior y Necesidades Emocionales | DopaBrain', heroTitle: 'Decodificador del Niño Interior', decodeBtn: 'Decodificar necesidad central', resetBtn: 'Reiniciar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Anclaje →' },
    pt: { title: 'Decodificador da Criança Interior e Necessidades | DopaBrain', heroTitle: 'Decodificador da Criança Interior', decodeBtn: 'Decodificar necessidade central', resetBtn: 'Redefinir', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Aterramento →' },
    de: { title: 'Inneres Kind & Emotionale Grundbedürfnisse Decoder | DopaBrain', heroTitle: 'Inneres-Kind-Bedürfnis-Decoder', decodeBtn: 'Grundbedürfnis entschlüsseln', resetBtn: 'Zurücksetzen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Grounding →' },
    fr: { title: 'Décodeur de l’Enfant Intérieur & Besoins Fondamentaux | DopaBrain', heroTitle: 'Décodeur de l’Enfant Intérieur', decodeBtn: 'Décoder le besoin central', resetBtn: 'Réinitialiser', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Ancrage →' },
    ru: { title: 'Декодер внутреннего ребёнка и базовых потребностей | DopaBrain', heroTitle: 'Декодер внутреннего ребёнка', decodeBtn: 'Раскрыть базовую потребность', resetBtn: 'Сбросить', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Заземление →' },
    hi: { title: 'इनर चाइल्ड और मूल भावनात्मक ज़रूरत डिकोडर | DopaBrain', heroTitle: 'इनर चाइल्ड नीड डिकोडर', decodeBtn: 'मूल ज़रूरत डिकोड करें', resetBtn: 'रीसेट', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'ग्राउंडिंग →' },
    id: { title: 'Dekoder Inner Child & Kebutuhan Emosional Inti | DopaBrain', heroTitle: 'Dekoder Kebutuhan Inner Child', decodeBtn: 'Buka Rencana Reparenting', resetBtn: 'Reset', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Grounding →' },
    tr: { title: 'İç Çocuk ve Temel Duygusal İhtiyaç Çözücü | DopaBrain', heroTitle: 'İç Çocuk İhtiyaç Çözücü', decodeBtn: 'Temel İhtiyacı Çöz', resetBtn: 'Sıfırla', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Topraklama →' }
  };

  var NEEDS = [
    {
      id: 'safety', emoji: '🏠',
      enName: 'Walking on Eggshells / Hypervigilance', koName: '늘 눈치 보고 긴장하는 불안 (예측 가능성 부족)',
      enSub: 'Bracing for sudden anger, change, or something going wrong', koSub: '갑작스러운 화·변화·비난이 올까 봐 늘 경계 태세 유지',
      enTitle: 'Core Need: Predictable Safety & Steadiness', koTitle: '핵심 욕구: 예측 가능한 안전감과 평온',
      enDesc: 'When early environments felt unpredictable, your nervous system learned to stay on guard 24/7. Today, adult you can offer structure and steady safety.',
      koDesc: '어린 시절 환경이 불안정했을수록 신경계는 24시간 경계하는 습관을 들입니다. 지금의 어른 자아는 스스로에게 예측 가능한 안전과 일상을 줄 수 있습니다.',
      enScript: '"We are safe in this room right now. I am an adult with choices, and I do not have to scan everyone’s mood to survive."',
      koScript: '"지금 이 공간은 안전해. 나는 선택권이 있는 어른이고, 더 이상 주변 눈치를 보며 버틸 필요가 없어."',
      enSteps: ['Create one tiny predictable anchor today (warm tea, tidy corner, calm playlist).', 'Remind yourself of 2 adult freedoms you have now that younger you did not.', 'Step away politely from chaotic conversations instead of freezing in place.'],
      koSteps: ['오늘 예측 가능한 작은 안정 루틴 1가지(따뜻한 차, 정돈된 책상)를 챙기세요.', '어린 시절엔 없었지만 지금 어른인 나에게 있는 선택권 2가지를 떠올리세요.', '불안정한 분위기가 감지되면 얼어붙지 말고 잠시 자리를 피하는 권한을 쓰세요.']
    },
    {
      id: 'seen', emoji: '👂',
      enName: 'Feeling Invisible or Unheard', koName: '내 마음을 아무도 몰라주는 외로움 (경청·공감 부족)',
      enSub: 'Swallowing feelings because "nobody really cares anyway"', koSub: '"말해봤자 소용없어"라며 속으로 감정을 삼켜버림',
      enTitle: 'Core Need: Being Seen, Heard & Validated', koTitle: '핵심 욕구: 진심으로 보이고 이해받고 싶음',
      enDesc: 'Growing up around distracted or dismissive caregivers teaches you to hide your voice. Healing starts when you stop dismissing your own feelings first.',
      koDesc: '내 감정이 자주 무시당했던 기억은 스스로도 내 마음을 축소하게 만듭니다. 치유는 내가 먼저 내 감정에 고개를 끄덕여 주는 순간 시작됩니다.',
      enScript: '"My feelings make sense, even if someone else is too busy to notice. I am listening to myself today."',
      koScript: '"다른 사람이 몰라줘도 내 감정은 충분히 그럴 만한 이유가 있어. 오늘 내가 먼저 내 이야기를 끝까지 들어줄게."',
      enSteps: ['Name your exact emotion aloud without adding "but I shouldn’t feel this way."', 'Share one honest preference today—even small (food, pace, schedule).', 'Invest energy in people who ask follow-up questions and listen back.'],
      koSteps: ['"이러면 안 되는데"를 붙이지 말고 지금 감정을 그대로 이름 불러 주세요.', '오늘 아주 작은 선호 1가지(메뉴·시간·속도)를 솔직히 말해 보세요.', '내 이야기를 진심으로 되묻고 들어주는 사람과 시간을 보내세요.']
    },
    {
      id: 'rest', emoji: '🛋️',
      enName: 'Guilt Whenever You Rest or Play', koName: '쉬거나 놀 때 밀려오는 죄책감 (조건부 사랑)',
      enSub: 'Feeling worthy only when productive, helpful, or achieving', koSub: '성과를 내거나 남을 도울 때만 존재 가치가 있다고 느껴짐',
      enTitle: 'Core Need: Unconditional Worth & Playfulness', koTitle: '핵심 욕구: 조건 없는 가치와 쉴 권리',
      enDesc: 'When praise only arrived after high performance, rest starts feeling dangerous. You are a human being, not a productivity machine.',
      koDesc: '칭찬이 늘 성적이나 성과 뒤에만 따라왔다면, 쉬는 순간조차 불안해집니다. 휴식은 게으름이 아니라 존재의 기본 권리입니다.',
      enScript: '"I do not have to earn my right to breathe, rest, or enjoy 20 minutes of pointless joy today."',
      koScript: '"나는 완전히 지칠 때까지 증명해야만 쉴 수 있는 사람이 아니야. 오늘 아무 쓸모없어도 즐거운 20분을 허락해."',
      enSteps: ['Schedule 15 guilt-free minutes doing something purely fun with zero metrics.', 'Notice the urge to "make it productive" and smile at it gently without obeying.', 'Treat sleep and meals as baseline care, never rewards to earn.'],
      koSteps: ['성과·기록·효율과 완전히 무관한 즐거운 15분을 오늘 일정에 넣으세요.', '"이 시간에 생산적인 걸 해야지"라는 목소리가 올라오면 부드럽게 넘기세요.', '휴식과 식사를 보상이 아니라 기본 돌봄으로 대하세요.']
    },
    {
      id: 'belonging', emoji: '🤝',
      enName: 'Fear of Being "Too Much" or Left Behind', koName: '"내가 부담스러울까 봐" 버려질 두려움 (소속감)',
      enSub: 'Shrinking yourself or over-giving to keep people close', koSub: '관계가 끊어질까 봐 나를 숨기고 과도하게 맞춰줌',
      enTitle: 'Core Need: Unconditional Belonging', koTitle: '핵심 욕구: 있는 그대로 받아들여지는 소속감',
      enDesc: 'Authentic connection cannot grow where you have to wear a mask. Shrinking yourself only leaves you lonely inside crowded rooms.',
      koDesc: '가면을 써야만 유지되는 관계는 곁에 사람이 있어도 마음을 외롭게 만듭니다. 진짜 소속감은 나를 숨기지 않을 때 시작됩니다.',
      enScript: '"The right people will not leave when I am honest. I do not have to shrink myself to keep love."',
      koScript: '"내가 솔직해졌다고 떠날 관계라면 억지로 붙잡을 필요가 없어. 사랑받기 위해 나를 작게 줄이지 않아도 돼."',
      enSteps: ['Stop over-apologizing once today when you did nothing wrong.', 'Recall 1 person or community where you felt relaxed being yourself.', 'Remember: healthy disagreement does not equal abandonment.'],
      koSteps: ['잘못한 일이 없는데 습관적으로 "미안해"라고 말하는 횟수를 오늘 1번 줄이세요.', '가장 편안하게 나다웠던 사람이나 공간을 떠올리며 감각을 기억하세요.', '건강한 의견 차이는 곧바로 버림받음을 뜻하지 않는다는 걸 되뇌세요.']
    },
    {
      id: 'autonomy', emoji: '🧭',
      enName: 'Second-Guessing Every Choice', koName: '내 선택을 믿지 못하고 자꾸 흔들림 (자율성)',
      enSub: 'Seeking constant permission or fearing disappointing authority', koSub: '스스로 결정하고도 남의 허락이나 확신이 없으면 불안함',
      enTitle: 'Core Need: Trusting Your Own Autonomy', koTitle: '핵심 욕구: 나만의 판단과 자율성 신뢰',
      enDesc: 'Over-controlling environments make self-trust feel risky. Building autonomy starts with making small choices and honoring them without polling five people.',
      koDesc: '지나친 간섭이나 통제 속에서 자랐다면 스스로 결정하는 일 자체가 낯설고 두렵습니다. 작은 결정 하나를 내 감각대로 지키며 자기 신뢰를 쌓아보세요.',
      enScript: '"I am allowed to choose what fits my life—even if someone else would choose differently."',
      koScript: '"다른 사람 기준과 달라도 내 삶에 맞는 선택을 내릴 권리가 내게 있어. 내 판단을 믿어볼게."',
      enSteps: ['Make 1 small decision today without asking anyone else for validation.', 'Remind yourself: a small mistake is reversible feedback, not catastrophe.', 'Notice what YOU actually want before checking what others expect.'],
      koSteps: ['오늘 작은 결정 1가지는 누구에게도 묻지 않고 내 감각만으로 선택해 보세요.', '작은 시행착오는 치명적 실패가 아니라 수정 가능한 경험임을 기억하세요.', '남의 기대를 확인하기 전에 "나는 뭘 원하지?"를 먼저 10초 물어보세요.']
    }
  ];

  var STORAGE_KEY = 'dopabrain_inner_child_decoder_v1';
  var state = { lang: 'en', needId: 'rest', letter: '' };

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function getNeed() {
    for (var i = 0; i < NEEDS.length; i++) {
      if (NEEDS[i].id === state.needId) return NEEDS[i];
    }
    return NEEDS[0];
  }

  function sendSafeEvent(needId) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'inner_child_decoder_complete', {
        tool_slug: 'inner-child-need-decoder',
        core_need: needId,
        locale: state.lang
      });
    }
  }

  function buildGrid() {
    var grid = document.getElementById('needGrid');
    if (!grid) return;
    grid.textContent = '';
    NEEDS.forEach(function (nd) {
      var btn = document.createElement('button');
      btn.type = 'button';
      var active = nd.id === state.needId;
      btn.className = 'toggle-card' + (active ? ' is-selected' : '');
      btn.setAttribute('data-need', nd.id);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');

      var em = document.createElement('span');
      em.className = 'card-emoji';
      em.textContent = nd.emoji;
      var st = document.createElement('strong');
      st.textContent = state.lang === 'ko' ? nd.koName : nd.enName;
      var sub = document.createElement('span');
      sub.className = 'card-sub';
      sub.textContent = state.lang === 'ko' ? nd.koSub : nd.enSub;

      btn.appendChild(em);
      btn.appendChild(st);
      btn.appendChild(sub);
      btn.addEventListener('click', function () {
        state.needId = nd.id;
        saveLocal();
        buildGrid();
      });
      grid.appendChild(btn);
    });
  }

  function renderResult(emit) {
    var inp = document.getElementById('letterInput');
    state.letter = inp ? inp.value.trim() : '';
    var nd = getNeed();
    var isKo = state.lang === 'ko';

    document.getElementById('verdictTitle').textContent = isKo ? nd.koTitle : nd.enTitle;
    document.getElementById('verdictDesc').textContent = isKo ? nd.koDesc : nd.enDesc;
    document.getElementById('reparentOut').textContent = isKo ? nd.koScript : nd.enScript;

    var letterBox = document.getElementById('letterBox');
    var letterOut = document.getElementById('letterOut');
    if (state.letter) {
      letterOut.textContent = state.letter;
      letterBox.hidden = false;
    } else {
      letterOut.textContent = '';
      letterBox.hidden = true;
    }

    var ul = document.getElementById('actionList');
    ul.textContent = '';
    (isKo ? nd.koSteps : nd.enSteps).forEach(function (step) {
      var li = document.createElement('li');
      li.textContent = step;
      ul.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emit) sendSafeEvent(nd.id);
  }

  function saveLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ needId: state.needId, letter: state.letter })); } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (typeof p.needId === 'string') state.needId = p.needId;
      if (typeof p.letter === 'string') state.letter = p.letter;
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
    var letterInput = document.getElementById('letterInput');
    if (letterInput && state.letter) letterInput.value = state.letter;

    document.getElementById('decodeBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.needId = 'rest';
      state.letter = '';
      if (letterInput) letterInput.value = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      buildGrid();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var txt = document.getElementById('reparentOut').textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/inner-child-need-decoder.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var nd = getNeed();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'inner-child-need-decoder',
        filename: 'dopabrain-reparenting-card.png',
        badge: 'SELF-REPARENTING ANCHOR',
        headline: isKo ? nd.koTitle : nd.enTitle,
        subtitle: 'Healthy Adult Care Reminder',
        metrics: [
          { label: 'Core Need', value: nd.id.toUpperCase() },
          { label: 'Mode', value: 'Warmth' }
        ],
        quote: isKo ? nd.koScript : nd.enScript,
        accent: '#f472b6',
        accent2: '#fb923c'
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
