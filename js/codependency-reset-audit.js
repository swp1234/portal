/* Codependency & Interdependence Reset Audit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Codependency & Interdependence Reset Audit | DopaBrain',
      metaDesc: 'Free 12-language Codependency & Interdependence Reset Audit. Assess 6 over-responsibility and enmeshment habits locally to build a Detach-With-Love plan and Own-Lane script.',
      skip: 'Skip to Codependency Audit',
      back: '← Mental Wellness Lab',
      langLabel: 'Language:',
      kicker: 'INTERDEPENDENCE & EMOTIONAL SEPARATION',
      heroTitle: 'Codependency & Interdependence Reset Audit',
      heroLead: 'Constantly scanning other people’s moods, rescuing at your own expense, or feeling guilty when you prioritize yourself? Rate 6 relationship habits locally to build your Detach-With-Love plan and Own-Lane boundary script.',
      chip1: '6 Enmeshment Axes',
      chip2: 'Detach-With-Love Script',
      chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • RATE 6 RELATIONSHIP HABITS (1 = RARELY, 5 = ALMOST ALWAYS)',
      step1Title: 'How often do these over-responsibility habits pull you off center?',
      step1Sub: 'Slide honestly—nothing is uploaded or tracked.',
      needLabel: 'Optional: 1 personal need I have postponed for someone else (stays 100% local):',
      calcBtn: 'Calculate Interdependence Balance',
      resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR INTERDEPENDENCE RESET PLAN',
      needBoxTitle: 'The Personal Need I Am Reclaiming This Week',
      meterInterdep: 'Interdependence Balance',
      scriptTitle: 'Warm "Stay in My Own Lane" Script',
      stepsTitle: '3 Detach-With-Love Shifts',
      storyBtn: 'Save 1080×1920 Reset Card (PNG)',
      copyBtn: 'Copy Own-Lane Script',
      shareBtn: 'Share Tool',
      bridgeBoundaryTitle: 'Boundary Script Builder',
      bridgeBoundaryDesc: 'Turn people-pleasing guilt into clear, respectful boundary statements.',
      bridgeAttTitle: 'Attachment Trigger Decoder',
      bridgeAttDesc: 'Decode anxious abandonment spikes and rehearse grounded responses.',
      bridgeGasTitle: 'Gaslighting Reality-Check',
      bridgeGasDesc: 'Distinguish healthy mutual care from manipulation or DARVO guilt hooks.',
      faqTitle: 'Frequently Asked Questions',
      refTitle: 'Psychological Frameworks & References',
      discTitle: 'Editorial Self-Reflection Disclaimer:',
      discText: 'This self-audit is an educational relationship-reflection aid inspired by differentiation-of-self and boundary principles, not clinical psychotherapy or medical diagnosis.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: 'Ready to practice saying no without guilt?',
      stickySub: 'Build custom warm or firm scripts in our Boundary Builder',
      stickyBtn: 'Boundary Builder →',
      copied: 'Own-Lane script copied!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Interdependence Reset Card saved!'
    },
    ko: {
      title: '공동의존·상호독립 리셋 감사 & 자기 경계 회복 플랜 | DopaBrain',
      metaDesc: '타인의 기분을 살피며 내 욕구를 미루는 6가지 공동의존 습관을 비공개로 점검하고, 건강한 상호독립(Detach with Love) 실천 전략과 대화문을 받으세요.',
      skip: '공동의존 감사로 이동',
      back: '← 멘탈 웰니스 랩',
      langLabel: '언어:',
      kicker: '건강한 상호독립 & 감정 분리 랩',
      heroTitle: '공동의존·상호독립 리셋 감사',
      heroLead: '상대의 표정과 기분을 수시로 살피고, 내 한계를 넘어 문제를 대신 해결하려다 지쳐 있나요? 6가지 과잉책임 습관을 로컬에서 점검하고 건강한 거리 두기(Detach with Love) 스크립트를 받아보세요.',
      chip1: '6가지 과잉책임 축',
      chip2: '내 레인 지키기 스크립트',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 6가지 관계 습관 평가 (1 = 거의 없음, 5 = 거의 항상)',
      step1Title: '아래 과잉책임 습관들이 나를 얼마나 자주 흔드나요?',
      step1Sub: '솔직하게 조절해 보세요—어떠한 점수도 외부로 전송되지 않습니다.',
      needLabel: '선택: 남을 배려하느라 미뤄온 나의 욕구 1가지 (100% 로컬 전용):',
      calcBtn: '상호독립 균형 계산하기',
      resetBtn: '초기화',
      resultBadge: '2단계 • 나의 상호독립 회복 플랜',
      needBoxTitle: '이번 주 내가 되찾을 나의 욕구 1가지',
      meterInterdep: '건강한 상호독립 균형도',
      scriptTitle: '따뜻하지만 선명한 "내 레인 지키기" 대화문',
      stepsTitle: '사랑하면서도 분리하는 3가지 실천 전환',
      storyBtn: '1080×1920 리셋 카드 저장 (PNG)',
      copyBtn: '대화문 복사',
      shareBtn: '도구 공유',
      bridgeBoundaryTitle: '거절·경계선 스크립트 빌더',
      bridgeBoundaryDesc: '미안함에 휩쓸리지 않고 정중하고 명확하게 거절하는 문장을 만듭니다.',
      bridgeAttTitle: '애착 트리거 디코더',
      bridgeAttDesc: '버림받을까 봐 생기는 불안 신호를 해독하고 안정형 소통을 연습합니다.',
      bridgeGasTitle: '가스라이팅 현실 점검',
      bridgeGasDesc: '건강한 배려와 죄책감 유발·조작 패턴을 명확히 구분합니다.',
      faqTitle: '자주 묻는 질문',
      refTitle: '심리학적 프레임워크 및 참고문헌',
      discTitle: '편집 및 자기성찰 안내:',
      discText: '본 감사는 자기분화 및 경계 이론을 바탕으로 한 교육용 자기성찰 도구이며 임상 심리치료나 의학적 진단이 아닙니다.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '죄책감 없이 거절하는 연습이 필요하신가요?',
      stickySub: '상황별 맞춤 경계 스크립트를 60초 만에 만들어 보세요',
      stickyBtn: '경계 빌더 →',
      copied: '내 레인 지키기 대화문을 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 상호독립 리셋 카드를 저장했습니다!'
    },
    zh: { title: '共生依赖与健康互赖重置审计 | DopaBrain', heroTitle: '共生依赖与健康互赖审计', calcBtn: '计算健康互赖平衡度', resetBtn: '重置', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制话术', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '边界话术 →' },
    ja: { title: '共依存・健全な相互依存リセット診断 | DopaBrain', heroTitle: '共依存リセット＆境界線診断', calcBtn: '相互依存バランスを計算', resetBtn: 'リセット', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: '境界線ビルダー →' },
    es: { title: 'Auditoría de Codependencia e Interdependencia | DopaBrain', heroTitle: 'Auditoría de Codependencia', calcBtn: 'Calcular equilibrio', resetBtn: 'Reiniciar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Límites →' },
    pt: { title: 'Auditoria de Codependência e Interdependência | DopaBrain', heroTitle: 'Auditoria de Codependência', calcBtn: 'Calcular equilíbrio', resetBtn: 'Redefinir', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Limites →' },
    de: { title: 'Co-Abhängigkeit & Interdependenz Audit | DopaBrain', heroTitle: 'Co-Abhängigkeit Reset-Audit', calcBtn: 'Balance berechnen', resetBtn: 'Zurücksetzen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Grenzen-Skript →' },
    fr: { title: 'Audit Codépendance & Interdépendance Saine | DopaBrain', heroTitle: 'Audit de Codépendance', calcBtn: 'Calculer mon équilibre', resetBtn: 'Réinitialiser', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Limites →' },
    ru: { title: 'Аудит созависимости и здоровой близости | DopaBrain', heroTitle: 'Аудит созависимости', calcBtn: 'Рассчитать баланс', resetBtn: 'Сбросить', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Границы →' },
    hi: { title: 'कोडिपेंडेंसी और स्वस्थ संबंध ऑडिट | DopaBrain', heroTitle: 'कोडिपेंडेंसी रीसेट ऑडिट', calcBtn: 'संतुलन की गणना करें', resetBtn: 'रीसेट', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'सीमा स्क्रिप्ट →' },
    id: { title: 'Audit Kodependensi & Kemandirian Emosional | DopaBrain', heroTitle: 'Audit Reset Kodependensi', calcBtn: 'Hitung Keseimbangan', resetBtn: 'Reset', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Skrip Batasan →' },
    tr: { title: 'Karşılıklı Bağımlılık (Codependency) Denetimi | DopaBrain', heroTitle: 'Codependency Sıfırlama Denetimi', calcBtn: 'Dengeyi Hesapla', resetBtn: 'Sıfırla', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Sınır Oluşturucu →' }
  };

  var AXES = [
    { id: 'mood_scan', en: 'Mood Scanning — Feeling responsible when someone else is quiet or upset', ko: '기분 살피기 — 상대가 조용하거나 언짢으면 내 탓처럼 느껴짐' },
    { id: 'rescuing', en: 'Compulsive Rescuing — Jumping in to solve problems nobody asked me to fix', ko: '과잉 구원 — 부탁받지 않은 상대의 문제까지 대신 해결하려 뛰어듦' },
    { id: 'self_abandon', en: 'Self-Abandonment — Dropping my rest, budget, or plans to keep the peace', ko: '자기 방기 — 갈등을 피하려고 내 휴식·시간·계획을 쉽게 포기함' },
    { id: 'approval', en: 'Approval Anchor — My calm depends heavily on whether they seem pleased with me', ko: '승인 의존 — 상대의 만족 여부에 따라 내 하루 평온함이 크게 흔들림' },
    { id: 'guilt_no', en: 'Guilt After Boundaries — Feeling selfish or cruel simply for saying "no"', ko: '거절 죄책감 — 정당하게 거절하고도 이기적인 사람이 된 듯 괴로움' },
    { id: 'conflict_fear', en: 'Conflict Avoidance — Swallowing honest needs until quiet resentment builds', ko: '갈등 회피 — 솔직한 욕구를 삼키다 결국 속으로 원망이 쌓임' }
  ];

  var STORAGE_KEY = 'dopabrain_codependency_audit_v1';
  var state = {
    lang: 'en',
    scores: { mood_scan: 4, rescuing: 3, self_abandon: 4, approval: 3, guilt_no: 4, conflict_fear: 3 },
    need: ''
  };

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function sendSafeEvent(tier, dominant) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'codependency_audit_complete', {
        tool_slug: 'codependency-reset-audit',
        balance_tier: tier,
        dominant_axis: dominant,
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
      val.id = 'val-' + ax.id;
      val.textContent = state.scores[ax.id] + ' / 5';
      head.appendChild(lbl);
      head.appendChild(val);

      var inp = document.createElement('input');
      inp.type = 'range';
      inp.min = '1';
      inp.max = '5';
      inp.value = String(state.scores[ax.id]);
      inp.id = 'ax-' + ax.id;
      inp.className = 'axis-range';
      inp.addEventListener('input', function () {
        state.scores[ax.id] = Number(inp.value);
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
    var dominant = AXES[0].id;
    var topScore = 0;
    AXES.forEach(function (ax) {
      var v = Number(state.scores[ax.id]) || 3;
      sum += v;
      if (v > topScore) { topScore = v; dominant = ax.id; }
    });
    // sum ranges 6..30 -> interdependence balance 100%..0%
    var balancePct = Math.round(((30 - sum) / 24) * 100);
    var tier = balancePct < 40 ? 'high_enmeshment' : balancePct < 70 ? 'transitional' : 'interdependent';
    var isKo = state.lang === 'ko';
    var title, desc, script, steps;

    if (tier === 'high_enmeshment') {
      title = isKo ? '높은 과잉책임 패턴 — "사랑하되 분리하기" 연습 필요' : 'High Over-Responsibility Loop — Reclaim Your Emotional Lane';
      desc = isKo
        ? '상대의 감정을 내 어깨에 짊어지느라 정작 나의 에너지와 욕구가 소진되고 있습니다. 돕는 것과 대신 짊어지는 것을 분리하면 관계가 오히려 더 건강해집니다.'
        : 'You are carrying emotional labor that belongs to other adults. Allowing others to feel disappointed while staying kind is the turning point toward sustainable intimacy.';
      script = isKo
        ? '"네가 힘든 마음은 충분히 이해하고 응원해. 다만 이 결정과 해결은 네 몫이라 내가 대신 맡기는 어려워. 대신 내 시간을 지킨 뒤 편하게 이야기 나누자."'
        : '"I care about you and I know this is stressful. I trust you to handle your part of this, and I need to protect my own energy tonight."';
      steps = isKo
        ? ['누군가 고민을 말할 때 "내가 해결해야 하나?" 대신 10초 멈추고 "들어주기만 해도 충분하다"고 되뇌세요.', '하루에 1번은 상대의 불편한 감정을 내가 고치지 않고 그대로 두는 작은 연습을 해보세요.', '이번 주 미뤄둔 내 휴식·약속 1가지를 달력에 최우선으로 고정하세요.']
        : ['Pause 10 seconds before volunteering to fix a problem—ask "Do you want listening or brainstorming?"', 'Let one minor moment of someone else’s disappointment pass without over-apologizing.', 'Schedule and keep one non-negotiable personal recharge block this week.'];
    } else if (tier === 'transitional') {
      title = isKo ? '전환기 균형 — 눈치와 자기돌봄 사이의 줄다리기' : 'Transitional Balance — Strengthening Your Own Lane';
      desc = isKo
        ? '건강한 경계의 필요성을 잘 알고 있지만, 스트레스가 높거나 가까운 관계일수록 옛 습관(과잉배려·죄책감)이 되살아나는 구간입니다.'
        : 'You already hold healthy awareness, yet high-stress moments or close relationships still trigger rescuing or guilt. Consistent small boundaries lock in lasting change.';
      script = isKo
        ? '"내 의견과 일정도 중요해서 이번에는 어렵겠어. 대신 다음 주에 가능한 시간으로 맞춰보자."'
        : '"I want to be honest so resentment does not build—I cannot take this on right now, and I appreciate you understanding."';
      steps = isKo
        ? ['부탁을 받으면 즉답하지 말고 "내 일정 확인해 보고 답할게"로 1시간 여유를 두세요.', '거절 뒤 길게 변명하지 말고 따뜻한 한 문장으로 마무리하세요.', '상대의 기분과 내 하루 컨디션을 별개의 날씨로 바라보세요.']
        : ['Use a 1-hour pause before saying yes to new favors: "Let me check my bandwidth first."', 'State preferences directly instead of hoping others guess what you need.', 'Separate empathy ("I see you are upset") from responsibility ("It is my job to fix it").'];
    } else {
      title = isKo ? '건강한 상호독립 균형 유지 중' : 'Grounded Interdependence Balance';
      desc = isKo
        ? '따뜻한 연결과 건강한 자기 경계가 비교적 균형을 이루고 있습니다. 지치는 시기에도 이 기준을 지키는 것이 핵심입니다.'
        : 'You maintain healthy emotional differentiation—offering care without abandoning your own needs. Keep checking in during high-stress seasons.';
      script = isKo
        ? '"서로 솔직하게 필요한 걸 말할 수 있어서 좋아. 나는 오늘 이렇게 쉬고 내일 다시 힘내볼게."'
        : '"I value supporting each other openly—here is what works for me this week, and I would love to hear what works for you."';
      steps = isKo
        ? ['건강하게 거절하고 지켜낸 순간들을 스스로 인정해 주세요.', '에너지가 떨어질 때만 과잉책임 습관이 올라오지 않는지 주 1회 점검하세요.', '상호 존중이 통하는 관계에 더 많은 시간을 투자하세요.']
        : ['Reinforce what works by naming clear expectations early in new projects or friendships.', 'Watch for fatigue dips—exhaustion is when old people-pleasing habits briefly return.', 'Invest deeply in reciprocal relationships that celebrate your boundaries.'];
    }
    return { balancePct: balancePct, tier: tier, dominant: dominant, title: title, desc: desc, script: script, steps: steps };
  }

  function renderResult(emit) {
    var inp = document.getElementById('needInput');
    state.need = inp ? inp.value.trim() : '';
    var res = compute();

    document.getElementById('verdictTitle').textContent = res.title;
    document.getElementById('verdictDesc').textContent = res.desc;
    document.getElementById('balanceOut').textContent = res.balancePct + '%';
    document.getElementById('balanceBar').style.width = res.balancePct + '%';
    document.getElementById('ownLaneScript').textContent = res.script;

    var needBox = document.getElementById('needBox');
    var needOut = document.getElementById('needOut');
    if (state.need) {
      needOut.textContent = state.need;
      needBox.hidden = false;
    } else {
      needOut.textContent = '';
      needBox.hidden = true;
    }

    var list = document.getElementById('actionList');
    list.textContent = '';
    res.steps.forEach(function (s) {
      var li = document.createElement('li');
      li.textContent = s;
      list.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emit) sendSafeEvent(res.tier, res.dominant);
  }

  function saveLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ scores: state.scores, need: state.need })); } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (p.scores && typeof p.scores === 'object') state.scores = Object.assign(state.scores, p.scores);
      if (typeof p.need === 'string') state.need = p.need;
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
    var needInput = document.getElementById('needInput');
    if (needInput && state.need) needInput.value = state.need;

    document.getElementById('calcBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('resetBtn').addEventListener('click', function () {
      AXES.forEach(function (a) { state.scores[a.id] = 3; });
      state.need = '';
      if (needInput) needInput.value = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      buildAxes();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var txt = document.getElementById('ownLaneScript').textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/codependency-reset-audit.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'codependency-reset-audit',
        filename: 'dopabrain-interdependence-reset-card.png',
        badge: 'INTERDEPENDENCE · DETACH WITH LOVE',
        headline: res.title,
        subtitle: 'Interdependence Balance: ' + res.balancePct + '%',
        metrics: [
          { label: 'Balance', value: res.balancePct + '%' },
          { label: 'Mode', value: 'Own Lane' }
        ],
        quote: res.script,
        accent: '#38bdf8',
        accent2: '#a855f7'
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
