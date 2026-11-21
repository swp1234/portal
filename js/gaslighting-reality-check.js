/* Gaslighting & Manipulation Reality-Check Log
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Gaslighting & Manipulation Reality-Check Log | DopaBrain',
      metaDesc: 'Free 12-language private Gaslighting & Manipulation Reality-Check Log. Spot 8 recurring reality-distortion patterns, anchor objective facts locally, and generate calm Grey-Rock boundary scripts.',
      skip: 'Skip to Reality-Check Log',
      back: '← Mental Wellness Lab',
      langLabel: 'Language:',
      kicker: 'REALITY ANCHORING & BOUNDARY CLARITY',
      heroTitle: 'Gaslighting & Manipulation Reality-Check Log',
      heroLead: 'Walking away from conversations feeling confused, guilty, or doubting your own memory? Check 8 recurring manipulation signals, anchor one objective fact privately in your browser, and get calm Grey-Rock boundary scripts.',
      chip1: '8 Signal Patterns',
      chip2: 'Grey-Rock Scripts',
      chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • CHECK RECURRING INTERACTION PATTERNS',
      step1Title: 'Which patterns repeatedly show up in this relationship or workplace?',
      step1Sub: 'Select every pattern you have experienced more than once (patterns matter more than one-off bad days).',
      step2Badge: 'STEP 2 • ANCHOR ONE OBJECTIVE FACT (LOCAL ONLY)',
      step2Title: 'Ground your memory in one observable fact',
      step2Sub: 'Optional: write what actually happened (dates, messages, or actions). This stays strictly on your device and never leaves your browser.',
      factLabel: 'One verifiable fact I witnessed (100% private, never transmitted):',
      analyzeBtn: 'Generate Reality-Check & Scripts',
      resetBtn: 'Clear Everything',
      resultBadge: 'STEP 3 • YOUR REALITY ANCHOR & GREY-ROCK PLAN',
      factAnchorTitle: 'My Grounded Objective Fact Anchor',
      meterSignal: 'Reality-Distortion Signal Density',
      scriptTitle: 'Calm Grey-Rock Boundary Response (No JADE Loop)',
      stepsTitle: '3 Practical Reality-Protection Steps',
      storyBtn: 'Save 1080×1920 Clarity Card (PNG)',
      copyBtn: 'Copy Boundary Script',
      shareBtn: 'Share Tool',
      bridgeBoundaryTitle: 'Boundary Script Builder',
      bridgeBoundaryDesc: 'Craft firm, broken-record limits without apologizing or over-explaining.',
      bridgeCodepTitle: 'Codependency Reset Audit',
      bridgeCodepDesc: 'Spot over-responsibility and guilt hooks keeping you in draining dynamics.',
      bridgeWotTitle: 'Window of Tolerance Check',
      bridgeWotDesc: 'Calm your nervous system after a disorienting or heated conflict.',
      faqTitle: 'Frequently Asked Questions',
      refTitle: 'Psychological Frameworks & References',
      discTitle: 'Safety & Editorial Disclaimer:',
      discText: 'This self-reflection checklist is an educational clarity tool, not clinical diagnosis or legal advice. If you are experiencing abuse or feel unsafe, please contact a trusted local domestic support helpline or licensed professional.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: 'Need exact words for a firm boundary?',
      stickySub: 'Generate warm, firm, or broken-record scripts in 60 seconds',
      stickyBtn: 'Boundary Builder →',
      copied: 'Calm Grey-Rock script copied!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Reality Clarity Card saved!'
    },
    ko: {
      title: '가스라이팅·감정 조작 현실 점검 로그 & 그레이락 스크립트 | DopaBrain',
      metaDesc: '대화 후 늘 혼란스럽고 내 기억을 의심하게 되나요? 8가지 가스라이팅·DARVO 패턴을 점검하고, 객관적 사실을 기기 안에만 기록해 차분한 그레이락 경계 문장을 생성하세요.',
      skip: '현실 점검 로그로 이동',
      back: '← 멘탈 웰니스 랩',
      langLabel: '언어:',
      kicker: '현실 앵커링 & 경계 명확화 랩',
      heroTitle: '가스라이팅·조작 현실 점검 로그',
      heroLead: '대화를 끝내고 나면 늘 머리가 멍하고 괜히 죄책감이 들거나 내 기억이 틀렸나 의심하게 되나요? 8가지 반복 패턴을 객관적으로 점검하고, 내 기기에만 남는 사실 앵커와 차분한 그레이락 대응 문장을 받아보세요.',
      chip1: '8가지 조작 패턴 점검',
      chip2: '그레이락 대응 문장',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 반복되는 대화 패턴 점검',
      step1Title: '이 관계나 직장에서 반복적으로 나타나는 신호는 무엇인가요?',
      step1Sub: '우연한 한 번이 아니라, 두 번 이상 반복된 패턴을 모두 선택하세요.',
      step2Badge: '2단계 • 객관적 사실 1가지 고정 (로컬 전용)',
      step2Title: '실제로 관찰한 사실 1가지를 적어 현실 기준점을 세우세요',
      step2Sub: '선택 사항입니다. 날짜·메시지·구체적 행동은 오직 내 브라우저에만 저장되며 외부로 전송되지 않습니다.',
      factLabel: '내가 직접 목격한 객관적 사실 1가지 (100% 비공개, 서버 전송 없음):',
      analyzeBtn: '현실 점검 & 그레이락 스크립트 생성',
      resetBtn: '모두 지우기',
      resultBadge: '3단계 • 나의 현실 앵커 & 그레이락 대응 플랜',
      factAnchorTitle: '내가 고정한 객관적 사실 앵커',
      meterSignal: '현실 왜곡 신호 밀도',
      scriptTitle: '차분한 그레이락(Grey-Rock) 경계 대응 문장',
      stepsTitle: '현실 감각을 지키는 3가지 실전 보호 단계',
      storyBtn: '1080×1920 명료성 카드 저장 (PNG)',
      copyBtn: '대응 문장 복사',
      shareBtn: '도구 공유',
      bridgeBoundaryTitle: '거절·경계선 스크립트 빌더',
      bridgeBoundaryDesc: '변명이나 사과 없이 단호하고 일관된 경계 문장을 만듭니다.',
      bridgeCodepTitle: '공동의존·눈치보기 리셋 감사',
      bridgeCodepDesc: '상대의 기분까지 책임지려는 죄책감 고리를 끊어냅니다.',
      bridgeWotTitle: '인내의 창 신경계 체크',
      bridgeWotDesc: '혼란스러운 갈등 직후 흔들린 신경계를 60초 안에 진정시킵니다.',
      faqTitle: '자주 묻는 질문',
      refTitle: '심리학적 프레임워크 및 참고문헌',
      discTitle: '안전 및 편집 안내:',
      discText: '본 체크리스트는 교육용 자기성찰 도구이며 의학적 진단이나 법률 자문이 아닙니다. 안전이 위협받거나 학대가 의심될 경우 신뢰할 수 있는 전문 상담기관이나 지원 핫라인에 연락하세요.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '단호한 경계 문장이 더 필요하신가요?',
      stickySub: '60초 만에 상황별 거절·경계 스크립트를 생성해 보세요',
      stickyBtn: '경계 빌더 →',
      copied: '그레이락 경계 문장을 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 현실 명료성 카드를 저장했습니다!'
    },
    zh: { title: '煤气灯效应与情感操控现实核查日志 | DopaBrain', heroTitle: '煤气灯与操控现实核查日志', analyzeBtn: '生成现实核查与灰岩话术', resetBtn: '清空内容', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制话术', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '边界话术 →' },
    ja: { title: 'ガスライティング・心理操作リアリティチェック | DopaBrain', heroTitle: 'ガスライティング現実確認ログ', analyzeBtn: '現実チェックと対処文を作成', resetBtn: 'すべて消去', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: '境界線ビルダー →' },
    es: { title: 'Registro de Claridad ante Gaslighting y Manipulación | DopaBrain', heroTitle: 'Registro de Claridad ante Gaslighting', analyzeBtn: 'Generar revisión y guion', resetBtn: 'Borrar todo', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar guion', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Constructor →' },
    pt: { title: 'Registro de Realidade contra Gaslighting e Manipulação | DopaBrain', heroTitle: 'Registro de Realidade: Gaslighting', analyzeBtn: 'Gerar análise e roteiro', resetBtn: 'Limpar tudo', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar roteiro', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Limites →' },
    de: { title: 'Gaslighting & Manipulation Realitäts-Check | DopaBrain', heroTitle: 'Gaslighting Realitäts-Check', analyzeBtn: 'Check & Skript erstellen', resetBtn: 'Alles löschen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Grenzen-Skript →' },
    fr: { title: 'Journal de Clarté face au Gaslighting | DopaBrain', heroTitle: 'Vérificateur de Réalité : Gaslighting', analyzeBtn: 'Générer l’analyse et le script', resetBtn: 'Tout effacer', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Limites →' },
    ru: { title: 'Дневник реальности при газлайтинге | DopaBrain', heroTitle: 'Проверка реальности: газлайтинг', analyzeBtn: 'Создать анализ и ответ', resetBtn: 'Очистить', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Границы →' },
    hi: { title: 'गैसलाइटिंग और मैनिपुलेशन रियलिटी-चेक लॉग | DopaBrain', heroTitle: 'गैसलाइटिंग रियलिटी-चेक लॉग', analyzeBtn: 'रियलिटी-चेक और स्क्रिप्ट बनाएँ', resetBtn: 'सब साफ़ करें', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'सीमा स्क्रिप्ट →' },
    id: { title: 'Log Cek Realitas Gaslighting & Manipulasi | DopaBrain', heroTitle: 'Log Cek Realitas Gaslighting', analyzeBtn: 'Buat Analisis & Skrip', resetBtn: 'Hapus Semua', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin Skrip', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Skrip Batasan →' },
    tr: { title: 'Gaslighting ve Manipülasyon Gerçeklik Kontrolü | DopaBrain', heroTitle: 'Gaslighting Gerçeklik Kontrolü', analyzeBtn: 'Analiz ve Yanıt Oluştur', resetBtn: 'Temizle', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Sınır Oluşturucu →' }
  };

  var SIGNALS = [
    { id: 'denial', emoji: '🚫', enName: 'Flat Denial of Documented Facts', koName: '명백한 사실·약속의 전면 부인', enSub: '"I never said that" even when texts or witnesses confirm it', koSub: '대화 기록이나 증인이 있는데도 "난 그런 말 한 적 없다"고 단정' },
    { id: 'darvo', emoji: '🔄', enName: 'DARVO Blame Reversal', koName: 'DARVO 책임 전가·피해자 코스프레', enSub: 'Raising a concern ends with you comforting or apologizing to them', koSub: '문제를 제기했는데 결국 내가 상대를 달래고 사과하며 끝남' },
    { id: 'sensitive', emoji: '🎭', enName: '"Too Sensitive / Crazy" Dismissal', koName: '"네가 너무 예민해" 감정 축소', enSub: 'Valid hurt is reframed as overreacting, drama, or a joke', koSub: '정당한 불편함을 과민반응·농담으로 치부하며 입을 막음' },
    { id: 'goalposts', emoji: '🏁', enName: 'Constantly Shifting Goalposts', koName: '끝없이 바뀌는 기준과 요구', enSub: 'Whenever you meet one expectation, a brand-new flaw replaces it', koSub: '요구를 들어줘도 곧바로 새로운 트집을 잡아 늘 부족하게 만듦' },
    { id: 'lovebomb', emoji: '🎢', enName: 'Hot-Cold Idealize & Devalue Cycle', koName: '극단적 찬사와 냉담함의 반복', enSub: 'Intense warmth alternates sharply with cold withdrawal or contempt', koSub: '과도한 애정 공세 뒤 갑작스러운 무시와 비난이 주기적으로 반복' },
    { id: 'isolate', emoji: '🕸️', enName: 'Subtle Isolation from Support', koName: '주변 지지망과의 은근한 단절', enSub: 'Friends or family are framed as "bad influences" or untrustworthy', koSub: '가족·친구를 부정적으로 몰아가며 외부 조언을 듣지 못하게 유도' },
    { id: 'silent', emoji: '🧊', enName: 'Punitive Silent Treatment', koName: '처벌성 침묵·잠수', enSub: 'Cold stonewalling used to force compliance rather than calm cooling-off', koSub: '감정 정리가 아니라 굴복과 사과를 받아내기 위한 일방적 무시' },
    { id: 'rewrite', emoji: '📝', enName: 'Rewriting History / Motive Projection', koName: '과거 재해석 및 의도 왜곡', enSub: 'Your neutral tone or actions are repeatedly assigned malicious motives', koSub: '평범한 말투나 행동에도 악의적 의도를 씌워 나를 방어적으로 만듦' }
  ];

  var STORAGE_KEY = 'dopabrain_gaslighting_check_v1';
  var state = { lang: 'en', selected: ['denial', 'darvo'], fact: '' };

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function sendSafeEvent(name, tier, count) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, {
        tool_slug: 'gaslighting-reality-check',
        pattern_tier: tier,
        signal_bucket: count >= 5 ? 'high' : count >= 2 ? 'moderate' : 'low',
        locale: state.lang
      });
    }
  }

  function buildGrid() {
    var grid = document.getElementById('signalGrid');
    if (!grid) return;
    grid.textContent = '';
    SIGNALS.forEach(function (sig) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toggle-card' + (state.selected.indexOf(sig.id) !== -1 ? ' is-selected' : '');
      btn.setAttribute('data-signal', sig.id);
      btn.setAttribute('aria-pressed', state.selected.indexOf(sig.id) !== -1 ? 'true' : 'false');

      var em = document.createElement('span');
      em.className = 'card-emoji';
      em.textContent = sig.emoji;
      var strong = document.createElement('strong');
      strong.textContent = state.lang === 'ko' ? sig.koName : sig.enName;
      var sub = document.createElement('span');
      sub.className = 'card-sub';
      sub.textContent = state.lang === 'ko' ? sig.koSub : sig.enSub;

      btn.appendChild(em);
      btn.appendChild(strong);
      btn.appendChild(sub);
      btn.addEventListener('click', function () {
        var idx = state.selected.indexOf(sig.id);
        if (idx === -1) state.selected.push(sig.id);
        else state.selected.splice(idx, 1);
        btn.classList.toggle('is-selected', idx === -1);
        btn.setAttribute('aria-pressed', idx === -1 ? 'true' : 'false');
        saveLocal();
      });
      grid.appendChild(btn);
    });
  }

  function computeResult() {
    var count = state.selected.length;
    var isKo = state.lang === 'ko';
    var tier = count >= 5 ? 'high' : count >= 2 ? 'moderate' : 'low';
    var title, desc, script, steps;

    if (tier === 'high') {
      title = isKo ? '높은 현실 왜곡 패턴 — 즉시 거리 두기와 사실 기록 필요' : 'High Reality-Distortion Pattern — Protect Your Grounding';
      desc = isKo
        ? '반복되는 부인·책임 전가·감정 축소가 중첩되어 자기 신뢰를 흔들고 있습니다. 설득이나 해명(JADE)을 멈추고 외부 지지망과 객관적 기록을 확보하세요.'
        : 'Multiple overlapping distortion signals are present. Stop trying to win the argument (avoid JADE: Justify, Argue, Defend, Explain) and anchor yourself with brief factual limits and trusted outside perspective.';
      script = isKo
        ? '"내 기억과 경험은 분명합니다. 이 주제로 더 논쟁하지 않겠습니다. 서로 존중하며 대화할 수 있을 때 다시 이야기하죠."'
        : '"I remember what happened clearly, and I am not going to debate my reality. I am stepping away from this conversation now."';
      steps = isKo
        ? ['날짜·시간·핵심 사실만 짧게 비공개 메모에 기록해 기억 흔들림을 막으세요.', '변명·논쟁·방어·과잉설명(JADE)을 멈추고 한 문장 경계만 반복하세요.', '관계 밖의 신뢰하는 친구·가족 또는 전문 상담가에게 객관적 시각을 확인하세요.']
        : ['Keep a brief, private dated log of concrete events—never rely solely on memory after high-stress arguments.', 'Use Grey-Rock responses: short, neutral, non-defensive sentences without taking emotional bait.', 'Reality-check with one trusted friend, family member, or licensed counselor outside the dynamic.'];
    } else if (tier === 'moderate') {
      title = isKo ? '주의가 필요한 왜곡·방어 패턴 감지' : 'Notable Distortion Signals — Clarify & Hold Boundaries';
      desc = isKo
        ? '단순한 오해를 넘어 대화의 초점이 반복적으로 흐려지거나 책임이 뒤집히는 경향이 보입니다. 중요한 약속은 글로 남기고 감정이 격해질 때 대화를 잠시 중단하세요.'
        : 'Recurring deflection or invalidation patterns are draining clarity. Put key agreements in writing and state clear boundaries before circular arguments escalate.';
      script = isKo
        ? '"지금은 주제가 원래 문제에서 벗어나고 있어요. 원래 합의했던 내용만 차분하게 확인하고 싶습니다."'
        : '"We are getting pulled away from the original issue. I am comfortable sticking to the facts we agreed on, and we can pause if things get heated."';
      steps = isKo
        ? ['중요한 일정·합의는 문자나 이메일로 짧게 확인해 모호함을 줄이세요.', '상대가 인신공격이나 과거 이야기로 돌리면 "지금 주제만 이야기하자"고 선을 그으세요.', '대화 후 내 몸의 긴장감과 혼란 정도를 1분간 체크해 패턴을 관찰하세요.']
        : ['Confirm key plans or expectations in writing so there is less room for revisionist memory.', 'Redirect topic-switching calmly: "Let us stay on today’s topic first."', 'Notice whether accountability improves when you hold a calm, consistent limit.'];
    } else {
      title = isKo ? '낮은 조작 신호 밀도 — 건강한 소통 점검 유지' : 'Low Distortion Signal Density — Stay Grounded';
      desc = isKo
        ? '현재 선택된 패턴은 적지만, 불편함이 느껴졌다면 그 감각 자체를 존중하세요. 명확한 경계 표현과 상호 책임감을 기준으로 관계를 지켜보면 됩니다.'
        : 'Few classic manipulation patterns are flagged right now, though your discomfort still deserves respect. Watch how the other person responds to calm, direct requests over time.';
      script = isKo
        ? '"내 입장은 이렇습니다. 서로 오해가 없도록 앞으로는 이렇게 맞춰가면 좋겠어요."'
        : '"Here is how I experienced that moment. Going forward, I would like us to agree clearly on how we handle this."';
      steps = isKo
        ? ['불편했던 지점을 추측 대신 구체적인 사실과 부탁으로 전달해 보세요.', '상대가 사과하고 행동을 실제로 바꾸는지(말과 행동의 일치) 관찰하세요.', '내 감정을 스스로 축소하지 말고 균형 잡힌 기준을 유지하세요.']
        : ['State your observation and request directly without apologizing for having a preference.', 'Observe consistency: healthy partners respect clear boundaries without punishing you.', 'Revisit this log if similar confusion repeats across multiple weeks.'];
    }
    return { tier: tier, count: count, title: title, desc: desc, script: script, steps: steps };
  }

  function renderResult(emitEvent) {
    var input = document.getElementById('factInput');
    state.fact = input ? input.value.trim() : '';
    var res = computeResult();

    document.getElementById('verdictTitle').textContent = res.title;
    document.getElementById('verdictDesc').textContent = res.desc;
    document.getElementById('signalCountOut').textContent = res.count + ' / 8';
    document.getElementById('signalBar').style.width = Math.round((res.count / 8) * 100) + '%';
    document.getElementById('greyRockOut').textContent = res.script;

    var factBox = document.getElementById('factAnchorBox');
    var factOut = document.getElementById('factAnchorOut');
    if (state.fact) {
      factOut.textContent = state.fact;
      factBox.hidden = false;
    } else {
      factOut.textContent = '';
      factBox.hidden = true;
    }

    var list = document.getElementById('actionList');
    list.textContent = '';
    res.steps.forEach(function (step) {
      var li = document.createElement('li');
      li.textContent = step;
      list.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emitEvent) sendSafeEvent('gaslighting_check_complete', res.tier, res.count);
  }

  function saveLocal() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ selected: state.selected, fact: state.fact }));
    } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      if (Array.isArray(parsed.selected)) state.selected = parsed.selected;
      if (typeof parsed.fact === 'string') state.fact = parsed.fact;
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
    var factInput = document.getElementById('factInput');
    if (factInput && state.fact) factInput.value = state.fact;

    document.getElementById('analyzeBtn').addEventListener('click', function () {
      renderResult(true);
    });
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.selected = [];
      state.fact = '';
      if (factInput) factInput.value = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      buildGrid();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var text = document.getElementById('greyRockOut').textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/gaslighting-reality-check.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = computeResult();
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'gaslighting-reality-check',
        filename: 'dopabrain-reality-clarity-card.png',
        badge: 'REALITY ANCHOR · CLARITY',
        headline: res.title,
        subtitle: res.count + ' / 8 patterns noted · Grey-Rock Boundary Plan',
        metrics: [
          { label: 'Patterns', value: res.count + '/8' },
          { label: 'Mode', value: 'Grey-Rock' }
        ],
        quote: res.script,
        accent: '#ec4899',
        accent2: '#8b5cf6'
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
