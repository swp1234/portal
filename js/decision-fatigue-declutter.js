/* Decision Fatigue & Mental Declutter Filter
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Decision Fatigue & Mental Declutter Filter | DopaBrain',
      metaDesc: 'Free 12-language Decision Fatigue & Mental Declutter Filter. Audit 6 daily micro-decision drains and lock in 3 Default Automation Rules locally.',
      skip: 'Skip to Decision Fatigue Filter', back: '← Mental Wellness Lab', langLabel: 'Language:',
      kicker: 'ESSENTIALISM & EXECUTIVE RELIEF', heroTitle: 'Decision Fatigue & Mental Declutter Filter',
      heroLead: 'Too tired by 4 PM to choose dinner or answer one email? Check the 6 daily micro-decision drains burning your executive fuel and generate a personalized 3-rule Default Automation Rulebook locally.',
      chip1: '6 Choice Drains', chip2: '3 Default Rules', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • CHECK DAILY MICRO-DECISION DRAINS',
      step1Title: 'Which repetitive daily choices drain your brain most?',
      step1Sub: 'Tap every decision category that repeatedly stalls you or steals mental RAM.',
      ruleLabel: 'Optional: 1 daily choice I will turn into a fixed Default Rule tomorrow (100% local):',
      buildBtn: 'Calculate Fatigue & Build Default Rules', resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR DEFAULT AUTOMATION RULEBOOK',
      ruleBoxTitle: 'My #1 Automated Default Rule Starting Tomorrow',
      meterLoad: 'Daily Micro-Decision Load',
      stepsTitle: '3 High-Leverage Default Rules to Protect Prefrontal Fuel',
      storyBtn: 'Save 1080×1920 Rulebook Card (PNG)', copyBtn: 'Copy Default Rules', shareBtn: 'Share Tool',
      bridgeMatTitle: 'Weighted Decision Matrix', bridgeMatDesc: 'Resolve one big high-stakes dilemma objectively in 2 minutes.',
      bridgeCogTitle: 'Cognitive Load Calculator', bridgeCogDesc: 'Measure working-memory saturation and trim open tabs.',
      bridgeEngTitle: 'Emotional Energy Audit', bridgeEngDesc: 'Cut low-value obligations with an 80/20 Stop-Doing boundary.',
      faqTitle: 'Frequently Asked Questions', refTitle: 'Behavioral Science & Productivity References',
      discTitle: 'Editorial Self-Reflection Disclaimer:',
      discText: 'This mental declutter filter is an educational productivity and cognitive-load planning aid, not medical or clinical assessment.',
      privacy: 'Privacy Policy', terms: 'Terms',
      stickyTitle: 'Stuck on one big choice right now?',
      stickySub: 'Score your options objectively in our Weighted Decision Matrix',
      stickyBtn: 'Decision Matrix →',
      copied: 'Default automation rules copied!', shared: 'Tool link copied!', savedCard: '1080×1920 Default Rulebook Card saved!'
    },
    ko: {
      title: '결정 피로·정신 정리 필터 & 기본값(Default) 자동화 규칙 | DopaBrain',
      metaDesc: '오후 4시만 되면 저녁 메뉴 고르기도 힘든가요? 6가지 일상 미세 결정 피로 원인을 점검하고 전전두엽 에너지를 지키는 3가지 기본값 자동화 규칙을 만드세요.',
      skip: '결정 피로 필터로 이동', back: '← 멘탈 웰니스 랩', langLabel: '언어:',
      kicker: '본질주의 & 전전두엽 에너지 보호 랩', heroTitle: '결정 피로·정신 정리 필터',
      heroLead: '오후만 되면 사소한 답장이나 식사 선택조차 버거우신가요? 하루 에너지를 갉아먹는 6가지 반복 미세 결정을 점검하고, 고민 없이 굴러가는 3가지 "기본값 자동화 규칙"을 설계하세요.',
      chip1: '6가지 결정 누수 점검', chip2: '3가지 기본값 자동화', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 매일 반복되는 미세 결정 누수 선택',
      step1Title: '어떤 반복 선택이 내 뇌 에너지를 가장 많이 깎아먹나요?',
      step1Sub: '자주 멈칫하게 만들거나 머릿속 RAM을 점유하는 항목을 모두 선택하세요.',
      ruleLabel: '선택: 내일부터 고민 없이 고정할 나만의 기본값(Default) 1가지 (100% 로컬):',
      buildBtn: '결정 피로 계산 & 기본값 규칙 생성', resetBtn: '초기화',
      resultBadge: '2단계 • 나의 기본값 자동화 룰북',
      ruleBoxTitle: '내일부터 고정하는 나의 #1 기본값 규칙',
      meterLoad: '일일 미세 결정 부하',
      stepsTitle: '전전두엽 연료를 아끼는 3가지 기본값 규칙',
      storyBtn: '1080×1920 룰북 카드 저장 (PNG)', copyBtn: '규칙 복사', shareBtn: '도구 공유',
      bridgeMatTitle: '가중치 의사결정 매트릭스', bridgeMatDesc: '중요한 큰 고민 1가지를 2분 만에 객관적으로 점수화합니다.',
      bridgeCogTitle: '인지 부하 계산기', bridgeCogDesc: '머릿속 열린 탭과 작업 기억 과부하를 수치로 확인합니다.',
      bridgeEngTitle: '감정 에너지 누수 감사', bridgeEngDesc: '80/20 중단 목록으로 저효율 약속을 정리합니다.',
      faqTitle: '자주 묻는 질문', refTitle: '행동과학 및 생산성 참고문헌',
      discTitle: '편집 및 자기성찰 안내:',
      discText: '본 도구는 교육용 생산성·인지 부하 정리 가이드이며 의학적 진단이 아닙니다.',
      privacy: '개인정보처리방침', terms: '이용약관',
      stickyTitle: '지금 당장 결정해야 할 큰 선택이 있나요?',
      stickySub: '가중치 의사결정 매트릭스로 2분 만에 객관적 비교표를 만들어 보세요',
      stickyBtn: '결정 매트릭스 →',
      copied: '기본값 자동화 규칙을 복사했습니다!', shared: '도구 링크를 복사했습니다!', savedCard: '1080×1920 기본값 룰북 카드를 저장했습니다!'
    },
    zh: { title: '决策疲劳与大脑减负过滤器 | DopaBrain', heroTitle: '决策疲劳与大脑减负过滤器', buildBtn: '测算疲劳度并生成默认规则', resetBtn: '重置', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '决策矩阵 →' },
    ja: { title: '決断疲れ・脳の断捨離フィルター | DopaBrain', heroTitle: '決断疲れ・デフォルト自動化', buildBtn: '負荷を計算してルールを作成', resetBtn: 'リセット', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: '決定マトリクス →' },
    es: { title: 'Filtro de Fatiga de Decisión y Despeje Mental | DopaBrain', heroTitle: 'Filtro de Fatiga de Decisión', buildBtn: 'Calcular y crear reglas', resetBtn: 'Reiniciar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Matriz →' },
    pt: { title: 'Filtro de Fadiga de Decisão e Clareza Mental | DopaBrain', heroTitle: 'Filtro de Fadiga de Decisão', buildBtn: 'Calcular e criar regras', resetBtn: 'Redefinir', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Matriz →' },
    de: { title: 'Entscheidungsmüdigkeit & Mental-Declutter-Filter | DopaBrain', heroTitle: 'Entscheidungsmüdigkeit-Filter', buildBtn: 'Standardregeln erstellen', resetBtn: 'Zurücksetzen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Matrix →' },
    fr: { title: 'Filtre Fatigue Décisionnelle & Règles par Défaut | DopaBrain', heroTitle: 'Filtre Fatigue Décisionnelle', buildBtn: 'Calculer et créer mes règles', resetBtn: 'Réinitialiser', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Matrice →' },
    ru: { title: 'Фильтр усталости от решений и правила по умолчанию | DopaBrain', heroTitle: 'Фильтр усталости от решений', buildBtn: 'Рассчитать и создать правила', resetBtn: 'Сбросить', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Матрица →' },
    hi: { title: 'डिसीज़न फ़टीग और मेंटल डीक्लटर फ़िल्टर | DopaBrain', heroTitle: 'डिसीज़न फ़टीग फ़िल्टर', buildBtn: 'डिफ़ॉल्ट नियम बनाएँ', resetBtn: 'रीसेट', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'मैट्रिक्स →' },
    id: { title: 'Filter Kelelahan Keputusan & Aturan Otomatis | DopaBrain', heroTitle: 'Filter Kelelahan Keputusan', buildBtn: 'Hitung & Buat Aturan Default', resetBtn: 'Reset', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Matriks →' },
    tr: { title: 'Karar Yorgunluğu ve Zihinsel Sadeleştirme Filtresi | DopaBrain', heroTitle: 'Karar Yorgunluğu Filtresi', buildBtn: 'Varsayılan Kuralları Oluştur', resetBtn: 'Sıfırla', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Karar Matrisi →' }
  };

  var DRAINS = [
    { id: 'meals', emoji: '🥗', enName: 'Daily Meals & Grocery Loops', koName: '매일 반복되는 식사·메뉴 고민', enSub: '"What should I eat?" draining willpower 3 times a day', koSub: '하루 세 번 "오늘 뭐 먹지?"로 의지력 소모', enRule: 'Rotate 3 fixed weekday breakfasts/lunches so weekday food needs zero debate.', koRule: '평일 아침·점심 기본 메뉴 3가지를 고정 로테이션해 메뉴 고민을 없애세요.' },
    { id: 'inbox', emoji: '📩', enName: 'Constant Message & Email Triage', koName: '수시 메신저·이메일 답장 판단', enSub: 'Deciding "reply now or later?" 40+ times daily', koSub: '"지금 답할까 나중에 답할까?" 하루 수십 번 판단', enRule: 'Batch non-urgent replies into 2 fixed windows (11:30 AM & 4:30 PM).', koRule: '긴급하지 않은 답장은 오전 11:30·오후 4:30 두 타임으로 묶어 처리하세요.' },
    { id: 'morning', emoji: '☀️', enName: 'Unstructured Morning Start', koName: '아침 첫 업무 우선순위 방황', enSub: 'Opening laptop and wondering which of 12 tasks comes first', koSub: '책상에 앉아 10가지 일 중 무엇부터 할지 매번 고민', enRule: 'Write tomorrow’s #1 30-minute starter task on a sticky note before closing work.', koRule: '전날 저녁, 내일 아침 가장 먼저 끝낼 30분 핵심 1가지를 미리 고정해 두세요.' },
    { id: 'shopping', emoji: '🛒', enName: 'Micro-Shopping & Comparison Tabs', koName: '사소한 쇼핑·리뷰 비교 탭 과다', enSub: 'Spending 40 minutes researching a $15 item across 9 tabs', koSub: '만원짜리 물건 하나에 리뷰 20분씩 비교하는 에너지 누수', enRule: 'Apply the 2-Minute Reversible Rule: under $25 and reversible? Pick the first 4.5+ option.', koRule: '3만원 이하·수정 가능한 소비는 2분 안에 첫 번째 무난한 옵션으로 즉시 결정하세요.' },
    { id: 'schedule', emoji: '📅', enName: 'Ad-Hoc Meeting & Favor Requests', koName: '수시 일정·부탁 수락 여부 고민', enSub: 'Negotiating every invite and calendar slot from scratch', koSub: '들어오는 약속과 회의마다 매번 거절할지 수락할지 고민', enRule: 'Use one calendar policy: "No meetings before 11 AM" + default 25-minute slots.', koRule: '"오전 11시 전 회의 금지" 등 고정 캘린더 원칙 1개로 매번의 고민을 대체하세요.' },
    { id: 'evening', emoji: '🌙', enName: 'Evening Entertainment & Wind-Down', koName: '퇴근 후 뭘 볼지·언제 잘지 고민', enSub: 'Scrolling menus for 25 minutes instead of actually resting', koSub: '넷플릭스·유튜브 고르느라 정작 쉬지 못하고 취침 지연', enRule: 'Set a 10 PM Auto-Wind-Down default: same lamp, same book/audio, zero browsing.', koRule: '밤 10시 이후엔 새 콘텐츠 탐색 금지, 정해진 책·오디오 1가지로 바로 전환하세요.' }
  ];

  var STORAGE_KEY = 'dopabrain_decision_fatigue_v1';
  var state = { lang: 'en', selected: ['meals', 'inbox', 'morning'], customRule: '' };

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function sendSafeEvent(count) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'decision_fatigue_complete', {
        tool_slug: 'decision-fatigue-declutter',
        load_band: count >= 4 ? 'high' : count >= 2 ? 'moderate' : 'low',
        locale: state.lang
      });
    }
  }

  function buildGrid() {
    var grid = document.getElementById('drainGrid');
    if (!grid) return;
    grid.textContent = '';
    DRAINS.forEach(function (dr) {
      var btn = document.createElement('button');
      btn.type = 'button';
      var active = state.selected.indexOf(dr.id) !== -1;
      btn.className = 'toggle-card' + (active ? ' is-selected' : '');
      btn.setAttribute('data-drain', dr.id);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');

      var em = document.createElement('span');
      em.className = 'card-emoji';
      em.textContent = dr.emoji;
      var st = document.createElement('strong');
      st.textContent = state.lang === 'ko' ? dr.koName : dr.enName;
      var sub = document.createElement('span');
      sub.className = 'card-sub';
      sub.textContent = state.lang === 'ko' ? dr.koSub : dr.enSub;

      btn.appendChild(em);
      btn.appendChild(st);
      btn.appendChild(sub);
      btn.addEventListener('click', function () {
        var idx = state.selected.indexOf(dr.id);
        if (idx === -1) state.selected.push(dr.id);
        else state.selected.splice(idx, 1);
        btn.classList.toggle('is-selected', idx === -1);
        btn.setAttribute('aria-pressed', idx === -1 ? 'true' : 'false');
        saveLocal();
      });
      grid.appendChild(btn);
    });
  }

  function renderResult(emit) {
    var inp = document.getElementById('ruleInput');
    state.customRule = inp ? inp.value.trim() : '';
    var count = state.selected.length;
    var isKo = state.lang === 'ko';

    document.getElementById('verdictTitle').textContent = count >= 4
      ? (isKo ? '높은 미세 결정 과부하 — 당장 3가지 기본값 고정이 필요합니다' : 'High Choice-Overload Drain — Automate 3 Defaults First')
      : count >= 2
        ? (isKo ? '중간 수준의 결정 피로 — 핵심 루틴 자동화로 오후 집중력 회복' : 'Moderate Decision Load — Protect Your Afternoon Fuel')
        : (isKo ? '깔끔한 선택 구조 — 1가지 예방 규칙으로 여유 유지' : 'Lean Decision Load — Lock In 1 Preventive Default');
    document.getElementById('verdictDesc').textContent = isKo
      ? '선택한 ' + count + '가지 영역의 반복 판단만 기본값으로 고정해도 매주 수십 번의 전전두엽 에너지 소모를 즉시 절약할 수 있습니다.'
      : 'Replacing ' + count + ' repetitive daily decision loops with upstream Default Rules protects hours of executive clarity every week.';

    document.getElementById('loadOut').textContent = count + ' / 6';
    document.getElementById('loadBar').style.width = Math.round((count / 6) * 100) + '%';

    var ruleBox = document.getElementById('ruleBox');
    var ruleOut = document.getElementById('ruleOut');
    if (state.customRule) {
      ruleOut.textContent = state.customRule;
      ruleBox.hidden = false;
    } else {
      ruleOut.textContent = '';
      ruleBox.hidden = true;
    }

    var chosen = DRAINS.filter(function (d) { return state.selected.indexOf(d.id) !== -1; }).slice(0, 3);
    if (chosen.length === 0) chosen = DRAINS.slice(0, 3);
    var ul = document.getElementById('ruleList');
    ul.textContent = '';
    chosen.forEach(function (dr) {
      var li = document.createElement('li');
      li.textContent = isKo ? dr.koRule : dr.enRule;
      ul.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emit) sendSafeEvent(count);
  }

  function saveLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ selected: state.selected, customRule: state.customRule })); } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (Array.isArray(p.selected)) state.selected = p.selected;
      if (typeof p.customRule === 'string') state.customRule = p.customRule;
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
    var ruleInput = document.getElementById('ruleInput');
    if (ruleInput && state.customRule) ruleInput.value = state.customRule;

    document.getElementById('buildBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.selected = [];
      state.customRule = '';
      if (ruleInput) ruleInput.value = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      buildGrid();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var txt = Array.from(document.querySelectorAll('#ruleList li')).map(function (li) { return '- ' + li.textContent; }).join('\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/decision-fatigue-declutter.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'decision-fatigue-declutter',
        filename: 'dopabrain-default-rulebook-card.png',
        badge: 'MENTAL DECLUTTER · DEFAULT RULES',
        headline: 'Automating ' + state.selected.length + ' Daily Choice Drains',
        subtitle: 'Protect Prefrontal Fuel for What Matters',
        metrics: [
          { label: 'Drains', value: state.selected.length + '/6' },
          { label: 'Rules', value: '3 Active' }
        ],
        quote: state.customRule || 'Decide once upstream so trivial choices stop stealing your afternoon.',
        accent: '#10b981',
        accent2: '#0ea5e9'
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
