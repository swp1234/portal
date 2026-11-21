/* Doomscrolling & Nighttime Screen Circuit Breaker
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Doomscrolling & Nighttime Screen Circuit Breaker | DopaBrain',
      metaDesc: 'Free 12-language Doomscrolling Circuit Breaker. Calculate how many full days per year mindless scrolling costs you, stack 4 physical friction locks, and set an analog bedtime swap locally.',
      skip: 'Skip to Doomscrolling Breaker', back: '← Mental Wellness Lab', langLabel: 'Language:',
      kicker: 'DIGITAL MINIMALISM & FRICTION DESIGN', heroTitle: 'Doomscrolling & Nighttime Screen Circuit Breaker',
      heroLead: 'Stop fighting infinite-scroll algorithms with depleted late-night willpower. Measure how many full days per year mindless feeds cost you, stack physical friction locks, and lock in one zero-effort analog swap tonight.',
      chip1: 'Annual Days Calculator', chip2: '4 Friction Locks', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • MEASURE MINDLESS SCROLL TIME & PICK FRICTION LOCKS',
      step1Title: 'How many minutes a day disappear into mindless scrolling?',
      step1Sub: 'Include bed-scrolling, short-form video loops, and reflexively checking news/social feeds.',
      minsLabel: 'Daily mindless scroll time:',
      swapLabel: "Optional: Tonight's 10-minute analog swap (stays 100% local):",
      buildBtn: 'Calculate Reclaimed Time & Build Protocol', resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR RECLAIMED LIFE & FRICTION PROTOCOL',
      statHours: 'Hours / Year', statDays: '16-Hr Waking Days / Yr', statHalf: 'Saved by Cutting 50%',
      swapBoxTitle: "Tonight's 10-Minute Analog Swap",
      stepsTitle: 'Your Active Physical Friction Protocol',
      storyBtn: 'Save 1080×1920 Reclaim Card (PNG)', copyBtn: 'Copy Friction Plan', shareBtn: 'Share Tool',
      bridgeDopamineTitle: 'Dopamine Detox Protocol', bridgeDopamineDesc: 'Design a 24-hour low-stimulation reset schedule with offline swaps.',
      bridgeSleepTitle: 'Sleep Chronotype Reset', bridgeSleepDesc: 'Calculate your exact digital sunset and optimal 90-minute bedtime window.',
      bridgeOverTitle: 'Overthinking Loop Breaker', bridgeOverDesc: 'Swap 1 AM anxious scrolling for a 90-second Cognitive Shuffle.',
      faqTitle: 'Frequently Asked Questions', refTitle: 'Digital Wellbeing & Behavioral References',
      discTitle: 'Editorial Self-Reflection Disclaimer:',
      discText: 'This screen-time calculator and habit friction planner is an educational digital wellbeing aid, not clinical addiction treatment.',
      privacy: 'Privacy Policy', terms: 'Terms',
      stickyTitle: 'Late-night scrolling hurting your sleep?',
      stickySub: 'Calculate your exact digital sunset & 90-min sleep cycle window',
      stickyBtn: 'Sleep Reset →',
      copied: 'Doomscrolling friction protocol copied!', shared: 'Tool link copied!', savedCard: '1080×1920 Reclaim Time Card saved!'
    },
    ko: {
      title: '둠스크롤링·야간 폰 중독 차단기 & 연간 시간 회수 계산기 | DopaBrain',
      metaDesc: '무의식적 쇼츠·피드 스크롤이 1년에 며칠을 빼앗아 가는지 계산하고, 의지력 대신 물리적 마찰 잠금 4가지와 오늘 밤 아날로그 대체 습관을 설계하세요.',
      skip: '둠스크롤링 차단기로 이동', back: '← 멘탈 웰니스 랩', langLabel: '언어:',
      kicker: '디지털 미니멀리즘 & 마찰 설계 랩', heroTitle: '둠스크롤링·야간 스크롤 차단기',
      heroLead: '밤 11시 방전된 의지력으로 무한 스크롤 알고리즘과 싸우지 마세요. 무의식 스크롤이 1년에 빼앗는 시간을 숫자로 확인하고, 자동으로 멈추게 만드는 물리적 마찰 4가지와 오늘 밤 아날로그 대체 습관을 세팅하세요.',
      chip1: '연간 회수 일수 계산', chip2: '4가지 물리 마찰 잠금', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 하루 무의식 스크롤 시간 & 마찰 잠금 선택',
      step1Title: '하루 몇 분 정도가 무의식적 스크롤로 사라지나요?',
      step1Sub: '침대 속 쇼츠·릴스, 습관적 뉴스·커뮤니티 새로고침을 모두 포함해 보세요.',
      minsLabel: '하루 무의식 스크롤 시간:',
      swapLabel: '선택: 오늘 밤 폰 대신 할 10분 아날로그 대체 활동 (100% 로컬):',
      buildBtn: '회수 가능 시간 계산 & 차단 프로토콜 생성', resetBtn: '초기화',
      resultBadge: '2단계 • 나의 연간 시간 회수 & 마찰 차단 플랜',
      statHours: '연간 소비 시간', statDays: '16시간 깨어있는 날 환산', statHalf: '절반만 줄여도 되찾는 시간',
      swapBoxTitle: '오늘 밤 나의 10분 아날로그 대체 약속',
      stepsTitle: '지금 바로 적용할 물리적 마찰 차단 프로토콜',
      storyBtn: '1080×1920 시간 회수 카드 저장 (PNG)', copyBtn: '차단 플랜 복사', shareBtn: '도구 공유',
      bridgeDopamineTitle: '도파민 디톡스 프로토콜', bridgeDopamineDesc: '24시간 저자극 리셋과 오프라인 대체 메뉴를 맞춤 설계합니다.',
      bridgeSleepTitle: '수면 크로노타입 리셋', bridgeSleepDesc: '내 생체시계에 맞는 디지털 일몰 시간과 90분 수면 주기를 계산합니다.',
      bridgeOverTitle: '과잉사고·반추 차단기', bridgeOverDesc: '새벽 1시 불안한 폰 확인 대신 90초 인지 셔플로 잠들 준비를 돕습니다.',
      faqTitle: '자주 묻는 질문', refTitle: '디지털 웰빙 및 행동과학 참고문헌',
      discTitle: '편집 및 자기성찰 안내:',
      discText: '본 도구는 교육용 디지털 웰빙 습관 설계 도구이며 임상 중독 치료를 대체하지 않습니다.',
      privacy: '개인정보처리방침', terms: '이용약관',
      stickyTitle: '야간 스크롤 때문에 수면 리듬이 무너졌나요?',
      stickySub: '나만의 디지털 일몰 시간과 90분 수면 사이클을 계산해 보세요',
      stickyBtn: '수면 리셋 →',
      copied: '둠스크롤링 차단 플랜을 복사했습니다!', shared: '도구 링크를 복사했습니다!', savedCard: '1080×1920 시간 회수 카드를 저장했습니다!'
    },
    zh: { title: '刷屏停不下来与夜间手机断路器 | DopaBrain', heroTitle: '无意识刷屏断路器', buildBtn: '计算可夺回时间并生成方案', resetBtn: '重置', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '睡眠重置 →' },
    ja: { title: 'ドゥームスクロール・夜間スマホ遮断ツール | DopaBrain', heroTitle: '夜間スマホ・スクロール遮断', buildBtn: '取り戻せる時間と対策を計算', resetBtn: 'リセット', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: '睡眠リセット →' },
    es: { title: 'Cortacircuitos de Doomscrolling y Pantalla Nocturna | DopaBrain', heroTitle: 'Cortacircuitos de Doomscrolling', buildBtn: 'Calcular tiempo recuperable', resetBtn: 'Reiniciar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Reset Sueño →' },
    pt: { title: 'Quebrador de Doomscrolling e Tela Noturna | DopaBrain', heroTitle: 'Quebrador de Doomscrolling', buildBtn: 'Calcular tempo recuperado', resetBtn: 'Redefinir', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Reset Sono →' },
    de: { title: 'Doomscrolling- & Nacht-Handy-Schutzschalter | DopaBrain', heroTitle: 'Doomscrolling-Schutzschalter', buildBtn: 'Zurückgewonnene Zeit berechnen', resetBtn: 'Zurücksetzen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Schlaf-Reset →' },
    fr: { title: 'Coupe-Circuit Doomscrolling & Écran Nocturne | DopaBrain', heroTitle: 'Coupe-Circuit Doomscrolling', buildBtn: 'Calculer le temps récupérable', resetBtn: 'Réinitialiser', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Reset Sommeil →' },
    ru: { title: 'Стоп-кран думскроллинга и ночного экрана | DopaBrain', heroTitle: 'Стоп-кран думскроллинга', buildBtn: 'Рассчитать время и план', resetBtn: 'Сбросить', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Сброс сна →' },
    hi: { title: 'डूमस्क्रॉलिंग और नाइट स्क्रीन सर्किट ब्रेकर | DopaBrain', heroTitle: 'डूमस्क्रॉलिंग सर्किट ब्रेकर', buildBtn: 'बचा हुआ समय और प्लान बनाएँ', resetBtn: 'रीसेट', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'स्लीप रीसेट →' },
    id: { title: 'Pemutus Siklus Doomscrolling & Layar Malam | DopaBrain', heroTitle: 'Pemutus Siklus Doomscrolling', buildBtn: 'Hitung Waktu & Buat Protokol', resetBtn: 'Reset', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Reset Tidur →' },
    tr: { title: 'Doomscrolling ve Gece Ekran Devre Kesici | DopaBrain', heroTitle: 'Doomscrolling Devre Kesici', buildBtn: 'Kazanılacak Zamanı Hesapla', resetBtn: 'Sıfırla', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Uyku Sıfırlama →' }
  };

  var LOCKS = [
    { id: 'charger', emoji: '🔌', enName: 'Across-the-Room Charger Exile', koName: '침대 밖 충전기 격리', enSub: 'Plug phone 3 meters from bed + use a $10 alarm clock', koSub: '침대에서 3m 떨어진 곳에 충전하고 별도 알람시계 사용' },
    { id: 'grayscale', emoji: '🌫️', enName: 'Auto Grayscale at 9:30 PM', koName: '밤 9시 30분 자동 흑백 모드', enSub: 'Removes candy-colored notification dopamine immediately', koSub: '화려한 색상 자극을 없애 피드 몰입도를 즉시 절반으로 낮춤' },
    { id: 'logout', emoji: '🔒', enName: 'Delete 1 Infinite-Feed App (Web Only)', koName: '무한 피드 앱 1개 삭제 (웹만 사용)', enSub: 'Keep account, add 15 seconds of login friction', koSub: '계정은 유지하되 15초 로그인 마찰만 추가해 자동 터치 차단' },
    { id: 'delay10', emoji: '⏱️', enName: '10-Minute "Drink Water First" Rule', koName: '폰 켜기 전 10분 물 마시기 룰', enSub: 'Never touch feeds during the first 10 waking minutes', koSub: '기상 직후·귀가 직후 10분은 물과 스트레칭 먼저 실행' }
  ];

  var STORAGE_KEY = 'dopabrain_doomscroll_breaker_v1';
  var state = { lang: 'en', mins: 90, locks: ['charger', 'grayscale'], swap: '' };

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function sendSafeEvent(mins) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'doomscroll_breaker_complete', {
        tool_slug: 'doomscrolling-circuit-breaker',
        scroll_band: mins >= 120 ? 'heavy' : mins >= 60 ? 'moderate' : 'light',
        locks_count: state.locks.length,
        locale: state.lang
      });
    }
  }

  function buildLocks() {
    var grid = document.getElementById('lockGrid');
    if (!grid) return;
    grid.textContent = '';
    LOCKS.forEach(function (lk) {
      var btn = document.createElement('button');
      btn.type = 'button';
      var active = state.locks.indexOf(lk.id) !== -1;
      btn.className = 'toggle-card' + (active ? ' is-selected' : '');
      btn.setAttribute('data-lock', lk.id);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');

      var em = document.createElement('span');
      em.className = 'card-emoji';
      em.textContent = lk.emoji;
      var st = document.createElement('strong');
      st.textContent = state.lang === 'ko' ? lk.koName : lk.enName;
      var sub = document.createElement('span');
      sub.className = 'card-sub';
      sub.textContent = state.lang === 'ko' ? lk.koSub : lk.enSub;

      btn.appendChild(em);
      btn.appendChild(st);
      btn.appendChild(sub);
      btn.addEventListener('click', function () {
        var idx = state.locks.indexOf(lk.id);
        if (idx === -1) state.locks.push(lk.id);
        else state.locks.splice(idx, 1);
        btn.classList.toggle('is-selected', idx === -1);
        btn.setAttribute('aria-pressed', idx === -1 ? 'true' : 'false');
        saveLocal();
      });
      grid.appendChild(btn);
    });
  }

  function renderResult(emit) {
    var inp = document.getElementById('swapInput');
    state.swap = inp ? inp.value.trim() : '';
    var hoursYr = Math.round((state.mins * 365) / 60);
    var wakingDays = Math.round(hoursYr / 16);
    var savedHalf = Math.round(hoursYr / 2);
    var isKo = state.lang === 'ko';

    document.getElementById('verdictTitle').textContent = isKo
      ? '절반만 줄여도 1년에 ' + savedHalf + '시간(' + Math.round(wakingDays / 2) + '일)을 되찾습니다'
      : 'Cutting 50% Reclaims ' + savedHalf + ' Hours (' + Math.round(wakingDays / 2) + ' Waking Days) / Year';
    document.getElementById('verdictDesc').textContent = isKo
      ? '하루 ' + state.mins + '분의 무의식 스크롤은 1년 동안 깨어있는 시간 기준 ' + wakingDays + '일 전체와 같습니다. 오늘 선택한 물리적 마찰 잠금만 켜 두면 의지력 소모 없이 자동으로 사용량이 절반 이하로 줄어듭니다.'
      : 'At ' + state.mins + ' min/day, infinite feeds absorb ' + hoursYr + ' hours/year (' + wakingDays + ' full 16-hour waking days). Stacking physical friction locks breaks the automatic reflex without needing heroic willpower.';

    document.getElementById('hoursYearOut').textContent = hoursYr + (isKo ? '시간' : ' hrs');
    document.getElementById('daysYearOut').textContent = wakingDays + (isKo ? '일' : ' days');
    document.getElementById('savedHalfOut').textContent = savedHalf + (isKo ? '시간' : ' hrs');

    var swapBox = document.getElementById('swapBox');
    var swapOut = document.getElementById('swapOut');
    if (state.swap) {
      swapOut.textContent = state.swap;
      swapBox.hidden = false;
    } else {
      swapOut.textContent = '';
      swapBox.hidden = true;
    }

    var ul = document.getElementById('lockPlanList');
    ul.textContent = '';
    var chosen = LOCKS.filter(function (lk) { return state.locks.indexOf(lk.id) !== -1; });
    if (chosen.length === 0) chosen = [LOCKS[0], LOCKS[1]];
    chosen.forEach(function (lk) {
      var li = document.createElement('li');
      li.textContent = (isKo ? lk.koName + ' — ' + lk.koSub : lk.enName + ' — ' + lk.enSub);
      ul.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emit) sendSafeEvent(state.mins);
  }

  function saveLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ mins: state.mins, locks: state.locks, swap: state.swap })); } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (typeof p.mins === 'number') state.mins = p.mins;
      if (Array.isArray(p.locks)) state.locks = p.locks;
      if (typeof p.swap === 'string') state.swap = p.swap;
    } catch (_) {}
  }

  function updateMinsDisplay() {
    var el = document.getElementById('minsVal');
    if (el) el.textContent = state.mins + (state.lang === 'ko' ? '분 / 일' : ' min / day');
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
    updateMinsDisplay();
    buildLocks();
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
    var range = document.getElementById('minsRange');
    if (range) {
      range.value = String(state.mins);
      range.addEventListener('input', function () {
        state.mins = Number(range.value);
        updateMinsDisplay();
        saveLocal();
      });
    }
    var swapInput = document.getElementById('swapInput');
    if (swapInput && state.swap) swapInput.value = state.swap;

    document.getElementById('buildBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.mins = 90;
      state.locks = ['charger', 'grayscale'];
      state.swap = '';
      if (range) range.value = '90';
      if (swapInput) swapInput.value = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      updateMinsDisplay();
      buildLocks();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var txt = document.getElementById('verdictTitle').textContent + '\n' + Array.from(document.querySelectorAll('#lockPlanList li')).map(function (li) { return '- ' + li.textContent; }).join('\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/doomscrolling-circuit-breaker.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var savedHalf = Math.round(((state.mins * 365) / 60) / 2);
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'doomscrolling-circuit-breaker',
        filename: 'dopabrain-reclaim-time-card.png',
        badge: 'DIGITAL MINIMALISM · FRICTION LOCKS',
        headline: 'Reclaiming ' + savedHalf + ' Hours This Year',
        subtitle: state.locks.length + ' Physical Friction Locks Active',
        metrics: [
          { label: 'Current', value: state.mins + 'm/d' },
          { label: 'Reclaimed', value: savedHalf + 'h/yr' }
        ],
        quote: state.swap || 'Charge phone across the room. Protect sleep & attention automatically.',
        accent: '#8b5cf6',
        accent2: '#ec4899'
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
