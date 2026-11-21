/* Anxiety vs. Panic Attack Somatic Differential & 90s Wave Calm Card
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Anxiety vs. Panic Attack Somatic Differential & Calm Card | DopaBrain',
      metaDesc: 'Free 12-language Anxiety vs. Panic Attack Differential & 90-Second Calm Card. Distinguish gradual anticipatory anxiety from acute panic spikes.',
      skip: 'Skip to Anxiety vs. Panic Check', back: '← Mental Wellness Lab', langLabel: 'Language:',
      kicker: 'SOMATIC DIFFERENTIAL & WAVE RESET', heroTitle: 'Anxiety vs. Panic Attack Somatic Differential',
      heroLead: 'Not sure whether you are riding slow-build anticipatory anxiety or a sudden adrenaline panic surge? Check 6 physical & timing markers locally to match the right calming response + 90-second wave timer.',
      chip1: '6 Somatic Markers', chip2: '90s Adrenaline Timer', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • CHECK WHAT YOUR BODY IS DOING RIGHT NOW',
      step1Title: 'Which onset and body signals match this moment?',
      step1Sub: 'Tap every marker that fits—educational self-orientation only.',
      checkBtn: 'Match State & Open Calm Protocol', resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR MATCHED SOMATIC CALM CARD',
      waveTitle: '90-Second Adrenaline Wave Timer',
      waveSub: 'Drop your shoulders, lengthen each exhale, and let the chemical wave crest and recede.',
      waveStart: 'Ride 90s Wave', wavePause: 'Pause Wave',
      stepsTitle: '3 Immediate State-Matched Steps', cueTitle: 'Calm Reality Reminder',
      storyBtn: 'Save 1080×1920 Calm Card (PNG)', copyBtn: 'Copy Calm Steps', shareBtn: 'Share Tool',
      bridge543Title: '5-4-3-2-1 Sensory Grounding', bridge543Desc: 'Anchor acute physical panic into the physical room right now.',
      bridgeVagalTitle: 'Vagal 60s Sigh Reset', bridgeVagalDesc: 'Follow a guided double-inhale physiological sigh pacer.',
      bridgeOverTitle: 'Overthinking Loop Breaker', bridgeOverDesc: 'Break slow-burn anticipatory worry with the CBT Worry Tree.',
      faqTitle: 'Frequently Asked Questions', refTitle: 'Clinical & CBT References',
      discTitle: 'Medical Safety Disclaimer:',
      discText: 'This tool is an educational self-calming reference, not medical diagnosis. If you experience new, severe chest pain, fainting, or difficulty breathing, seek immediate medical evaluation.',
      privacy: 'Privacy Policy', terms: 'Terms',
      stickyTitle: 'Need immediate 5-4-3-2-1 sensory anchoring?',
      stickySub: 'Open our interactive panic grounding & breathwork coach',
      stickyBtn: 'Ground Now →',
      copied: 'Calm protocol steps copied!', shared: 'Tool link copied!', savedCard: '1080×1920 Calm Card saved!'
    },
    ko: {
      title: '불안 발작 vs 공황 발작 신체 감별 & 90초 진정 카드 | DopaBrain',
      metaDesc: '서서히 쌓이는 예기 불안인지, 갑작스러운 아드레날린 공황 파도인지 6가지 신체·시간 신호로 구분하고 90초 진정 타이머와 맞춤 대처법을 따라해 보세요.',
      skip: '불안·공황 감별로 이동', back: '← 멘탈 웰니스 랩', langLabel: '언어:',
      kicker: '신체 감별 & 90초 파도 진정 랩', heroTitle: '불안 vs 공황 발작 신체 감별',
      heroLead: '지금 올라오는 감각이 서서히 쌓인 걱정·불안인지, 갑작스러운 아드레날린 공황 파도인지 헷갈리나요? 6가지 신호를 로컬에서 체크하고 지금 상태에 맞는 90초 진정 가이드를 바로 확인하세요.',
      chip1: '6가지 신체·발현 신호', chip2: '90초 파도 타이머', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 지금 몸의 발현 방식과 감각 선택',
      step1Title: '지금 순간과 가장 비슷한 신호를 모두 선택하세요',
      step1Sub: '교육용 자기 이해 도구이며 의학적 진단이 아닙니다.',
      checkBtn: '상태 구분 & 맞춤 진정 카드 열기', resetBtn: '초기화',
      resultBadge: '2단계 • 나의 상태 맞춤 진정 프로토콜',
      waveTitle: '90초 아드레날린 파도 넘기기 타이머',
      waveSub: '억지로 싸우지 말고 어깨 힘을 뺀 채 날숨을 길게 내쉬며 파도가 정점을 지나가게 두세요.',
      waveStart: '90초 파도 시작', wavePause: '일시 정지',
      stepsTitle: '지금 바로 실행하는 3단계 진정 행동', cueTitle: '차분한 현실 안심 문장',
      storyBtn: '1080×1920 진정 카드 저장 (PNG)', copyBtn: '대처법 복사', shareBtn: '도구 공유',
      bridge543Title: '5-4-3-2-1 감각 그라운딩', bridge543Desc: '급성 신체 공황 감각을 지금 이 방의 오감으로 단단히 고정합니다.',
      bridgeVagalTitle: '미주신경 60초 한숨 리셋', bridgeVagalDesc: '두 번 들이마시고 길게 내쉬는 생리적 한숨 페이서를 따라하세요.',
      bridgeOverTitle: '과잉사고·반추 차단기', bridgeOverDesc: '꼬리에 꼬리를 무는 예기 불안을 CBT 걱정 트리로 정리합니다.',
      faqTitle: '자주 묻는 질문', refTitle: '임상 및 CBT 참고문헌',
      discTitle: '의료 안전 안내:',
      discText: '본 도구는 교육용 자기진정 참고 도구이며 의학적 진단이 아닙니다. 처음 겪는 심한 흉통·실신·호흡곤란 시 즉시 전문 의료 진료를 받으세요.',
      privacy: '개인정보처리방침', terms: '이용약관',
      stickyTitle: '지금 당장 5-4-3-2-1 감각 고정이 필요하신가요?',
      stickySub: '인터랙티브 감각 그라운딩과 호흡 코치를 바로 열어보세요',
      stickyBtn: '그라운딩 열기 →',
      copied: '진정 프로토콜을 복사했습니다!', shared: '도구 링크를 복사했습니다!', savedCard: '1080×1920 진정 카드를 저장했습니다!'
    },
    zh: { title: '焦虑发作与惊恐发作躯体鉴别与90秒平复卡 | DopaBrain', heroTitle: '焦虑 vs 惊恐发作鉴别', checkBtn: '匹配状态并开启平复方案', resetBtn: '重置', waveStart: '开启90秒平复', wavePause: '暂停', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '感官着陆 →' },
    ja: { title: '不安発作 vs パニック発作 鑑別＆90秒鎮静カード | DopaBrain', heroTitle: '不安 vs パニック発作 鑑別', checkBtn: '状態を確認して鎮静ガイドを開く', resetBtn: 'リセット', waveStart: '90秒ウェーブ開始', wavePause: '一時停止', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: 'グラウンディング →' },
    es: { title: 'Diferencial Ansiedad vs. Ataque de Pánico (90s) | DopaBrain', heroTitle: 'Ansiedad vs. Ataque de Pánico', checkBtn: 'Ver protocolo de calma', resetBtn: 'Reiniciar', waveStart: 'Iniciar ola 90s', wavePause: 'Pausar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Anclaje →' },
    pt: { title: 'Diferencial Ansiedade vs. Crise de Pânico (90s) | DopaBrain', heroTitle: 'Ansiedade vs. Crise de Pânico', checkBtn: 'Abrir protocolo de calma', resetBtn: 'Redefinir', waveStart: 'Iniciar onda 90s', wavePause: 'Pausar', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Aterramento →' },
    de: { title: 'Angst vs. Panikattacke Differential & 90s-Ruhekarte | DopaBrain', heroTitle: 'Angst vs. Panikattacke Check', checkBtn: 'Zustand prüfen & Ruheplan öffnen', resetBtn: 'Zurücksetzen', waveStart: '90s Welle starten', wavePause: 'Pause', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Grounding →' },
    fr: { title: 'Anxiété vs. Crise de Panique : Différentiel 90s | DopaBrain', heroTitle: 'Anxiété vs. Crise de Panique', checkBtn: 'Ouvrir mon protocole calme', resetBtn: 'Réinitialiser', waveStart: 'Lancer 90s', wavePause: 'Pause', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Ancrage →' },
    ru: { title: 'Тревога или паническая атака: дифференциал 90с | DopaBrain', heroTitle: 'Тревога vs. Паническая атака', checkBtn: 'Открыть план успокоения', resetBtn: 'Сбросить', waveStart: 'Старт 90с', wavePause: 'Пауза', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Заземление →' },
    hi: { title: 'एंग्ज़ायटी बनाम पैनिक अटैक 90s शांत कार्ड | DopaBrain', heroTitle: 'एंग्ज़ायटी vs पैनिक अटैक जाँच', checkBtn: 'शांत प्रोटोकॉल खोलें', resetBtn: 'रीसेट', waveStart: '90s वेव शुरू करें', wavePause: 'रोकें', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'ग्राउंडिंग →' },
    id: { title: 'Beda Cemas vs. Serangan Panik & Kartu Tenang 90d | DopaBrain', heroTitle: 'Cemas vs. Serangan Panik', checkBtn: 'Buka Protokol Tenang', resetBtn: 'Reset', waveStart: 'Mulai 90 Detik', wavePause: 'Jeda', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Grounding →' },
    tr: { title: 'Kaygı ve Panik Atak Ayrımı & 90sn Sakinlik Kartı | DopaBrain', heroTitle: 'Kaygı vs. Panik Atak Ayrımı', checkBtn: 'Sakinleşme Planını Aç', resetBtn: 'Sıfırla', waveStart: '90sn Dalgayı Başlat', wavePause: 'Duraklat', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Topraklama →' }
  };

  var MARKERS = [
    { id: 'sudden', type: 'panic', emoji: '⚡', enName: 'Sudden 0-to-100 Spike in Minutes', koName: '몇 분 만에 0→100으로 급격히 치솟음', enSub: 'Hit abruptly, even without an obvious immediate trigger', koSub: '뚜렷한 계기 없이도 갑자기 강한 파도가 덮침' },
    { id: 'somatic_peak', type: 'panic', emoji: '💓', enName: 'Intense Physical Rush (Pulse / Dizzy / Tingling)', koName: '강렬한 신체 증상 (심박 급증·어지럼·손발 저림)', enSub: 'Body feels flooded with adrenaline or unreal/detached', koSub: '몸에 아드레날린이 쏟아지거나 붕 뜬 비현실감' },
    { id: 'dread_now', type: 'panic', emoji: '🚨', enName: 'Urgent Fear of Losing Control Right Now', koName: '지금 당장 통제를 잃을 것 같은 급박한 공포', enSub: 'Feeling like you must escape the room immediately', koSub: '당장 이 자리를 벗어나야 할 것 같은 강렬한 압박감' },
    { id: 'gradual', type: 'anxiety', emoji: '📈', enName: 'Gradual Build-Up Over Hours or Days', koName: '몇 시간·며칠에 걸쳐 서서히 쌓인 긴장', enSub: 'Linked to a looming deadline, conflict, or "what-if" loop', koSub: '마감·갈등·미래 걱정과 맞물려 천천히 고조됨' },
    { id: 'worry_loop', type: 'anxiety', emoji: '💭', enName: 'Repetitive Mental Rehearsal & Restlessness', koName: '끝없는 최악의 시나리오 머릿속 반복', enSub: 'Mind keeps scanning problems, hard to concentrate or relax', koSub: '해결되지 않는 "만약에" 생각이 계속 맴돔' },
    { id: 'muscle_knot', type: 'anxiety', emoji: '🪢', enName: 'Sustained Neck/Stomach Knot & Fatigue', koName: '지속적인 어깨·위장 뭉침과 피로감', enSub: 'Ongoing physical tension rather than an abrupt 10-min peak', koSub: '급성 정점보다 오래 지속되는 근육 긴장과 소진' }
  ];

  var state = { lang: 'en', selected: ['sudden', 'somatic_peak'] };
  var waveSec = 90;
  var waveHandle = null;

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function sendSafeEvent(profile) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'anxiety_panic_check_complete', {
        tool_slug: 'anxiety-vs-panic-reset',
        somatic_profile: profile,
        locale: state.lang
      });
    }
  }

  function buildGrid() {
    var grid = document.getElementById('markerGrid');
    if (!grid) return;
    grid.textContent = '';
    MARKERS.forEach(function (mk) {
      var btn = document.createElement('button');
      btn.type = 'button';
      var active = state.selected.indexOf(mk.id) !== -1;
      btn.className = 'toggle-card' + (active ? ' is-selected' : '');
      btn.setAttribute('data-marker', mk.id);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');

      var em = document.createElement('span');
      em.className = 'card-emoji';
      em.textContent = mk.emoji;
      var st = document.createElement('strong');
      st.textContent = state.lang === 'ko' ? mk.koName : mk.enName;
      var sub = document.createElement('span');
      sub.className = 'card-sub';
      sub.textContent = state.lang === 'ko' ? mk.koSub : mk.enSub;

      btn.appendChild(em);
      btn.appendChild(st);
      btn.appendChild(sub);
      btn.addEventListener('click', function () {
        var idx = state.selected.indexOf(mk.id);
        if (idx === -1) state.selected.push(mk.id);
        else state.selected.splice(idx, 1);
        btn.classList.toggle('is-selected', idx === -1);
        btn.setAttribute('aria-pressed', idx === -1 ? 'true' : 'false');
      });
      grid.appendChild(btn);
    });
  }

  function compute() {
    var pCount = 0;
    var aCount = 0;
    MARKERS.forEach(function (mk) {
      if (state.selected.indexOf(mk.id) !== -1) {
        if (mk.type === 'panic') pCount++;
        else aCount++;
      }
    });
    var profile = pCount > aCount ? 'panic_surge' : aCount > pCount ? 'anticipatory_anxiety' : 'mixed_overload';
    var isKo = state.lang === 'ko';

    if (profile === 'panic_surge') {
      return {
        profile: profile,
        title: isKo ? '급성 공황 아드레날린 파도 패턴 — 저항을 내려놓으세요' : 'Acute Panic Adrenaline Surge — Ride, Do Not Fight',
        desc: isKo ? '갑작스러운 교감신경 과잉 경보입니다. 무섭게 느껴지지만 아드레날린 파도는 정점을 찍으면 생리적으로 반드시 가라앉습니다.' : 'Your body fired a false-alarm adrenaline rush. It feels terrifying, yet panic peaks quickly and cannot stay at maximum intensity.',
        steps: isKo
          ? ['"지금 당장 없애야 해" 대신 "불편하지만 안전한 아드레날린 파도가 지나가는 중"이라 이름 붙이세요.', '양발을 바닥에 단단히 붙이고 4초 들이마시고 7초 길게 내쉬며 위 90초 타이머를 함께 지켜보세요.', '눈앞의 사물 3가지 색깔과 손에 닿는 차가운 표면에 감각을 고정하세요.']
          : ['Stop fighting the sensations—say "This is a temporary adrenaline surge, uncomfortable but not dangerous."', 'Press both feet flat on the floor, drop your shoulders, and exhale longer than you inhale with the 90s timer.', 'Anchor visually on 3 solid objects in the room until your pulse begins easing down.'],
        cue: isKo ? '"공황 감각은 100% 무섭지만 0% 위험하다. 파도와 싸우지 않고 90초만 흘려보내면 몸이 알아서 내려온다."' : '"Panic sensations feel intense, not lethal. I do not need to escape—I just need to let this 90-second wave pass through."'
      };
    }
    if (profile === 'anticipatory_anxiety') {
      return {
        profile: profile,
        title: isKo ? '서서히 쌓인 예기 불안·긴장 패턴 — 생각을 외부화하세요' : 'Gradual Anticipatory Anxiety — Externalize & Unwind',
        desc: isKo ? '구체적 걱정이나 누적 스트레스가 교감신경을 계속 살짝 밟고 있는 상태입니다. 몸의 긴장을 풀고 머릿속 걱정을 종이로 꺼내는 것이 가장 효과적입니다.' : 'Sustained worry loops are keeping your nervous system simmering. Offloading mental loops onto paper and releasing physical bracing works best.',
        steps: isKo
          ? ['머릿속 걱정 1가지를 "오늘 통제 가능 vs 불가능"으로 단 1줄로 분류해 보세요.', '턱·목·어깨의 힘을 5초간 주었다가 10초간 툭 풀며 누적된 신체 긴장을 비우세요.', '오늘 할 수 있는 가장 작은 5분 행동 1가지만 정하고 나머지는 내일로 미루세요.']
          : ['Write down the single loudest worry and label whether any 5-minute action is possible today.', 'Release physical bracing: unclench your jaw, drop your shoulders, and take 4 slow cyclic sighs.', 'Shift from endless mental rehearsing into one tiny grounded action or rest break.'],
        cue: isKo ? '"미래의 모든 변수를 오늘 다 해결할 필요는 없다. 지금 호흡을 고르고 작은 한 걸음만 내디디면 충분하다."' : '"I do not have to solve next week’s uncertainty tonight. One calm breath and one small step are enough right now."'
      };
    }
    return {
      profile: profile,
      title: isKo ? '혼합형 과부하 상태 — 먼저 몸부터 90초 식히세요' : 'Mixed Anxiety & Somatic Overload — Body First, Thoughts Second',
      desc: isKo ? '누적된 걱정 위에 신체적 급성 긴장이 겹친 상태입니다. 생각을 분석하기 전에 먼저 90초 동안 몸의 각성도를 낮추세요.' : 'Ongoing worry has tipped into physical hyperarousal. Calm your body first for 90 seconds before trying to reason with any worries.',
      steps: isKo
        ? ['위 90초 파도 타이머를 켜고 날숨을 길게 늘리며 심박수를 먼저 안정시키세요.', '찬물 한 모금을 천천히 마시며 방 안의 소리와 빛을 3가지만 확인하세요.', '몸이 30% 가라앉은 뒤에 과잉사고 차단기나 5-4-3-2-1 그라운딩으로 넘어가세요.']
        : ['Run the 90-second wave timer above with slow mouth exhales before analyzing any thoughts.', 'Sip cool water slowly and press your palms firmly together for 10 seconds to ground your body.', 'Once physical intensity drops by 30%, use the Overthinking Breaker to clear the remaining worry loop.'],
      cue: isKo ? '"생각을 정리하기 전에 먼저 몸의 경보부터 끄자. 90초 뒤의 나는 지금보다 훨씬 차분할 것이다."' : '"Body first, thoughts second. Once my nervous system softens over the next 90 seconds, clarity returns naturally."'
    };
  }

  function renderResult(emit) {
    var res = compute();
    document.getElementById('verdictTitle').textContent = res.title;
    document.getElementById('verdictDesc').textContent = res.desc;
    document.getElementById('calmCue').textContent = res.cue;

    var ul = document.getElementById('stepList');
    ul.textContent = '';
    res.steps.forEach(function (s) {
      var li = document.createElement('li');
      li.textContent = s;
      ul.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    if (emit) sendSafeEvent(res.profile);
  }

  function toggleWave() {
    var btn = document.getElementById('waveBtn');
    var clock = document.getElementById('waveClock');
    if (waveHandle) {
      clearInterval(waveHandle);
      waveHandle = null;
      if (btn) btn.textContent = t('waveStart');
      return;
    }
    if (waveSec <= 0) waveSec = 90;
    if (btn) btn.textContent = t('wavePause');
    waveHandle = setInterval(function () {
      waveSec = Math.max(0, waveSec - 1);
      var m = String(Math.floor(waveSec / 60)).padStart(2, '0');
      var s = String(waveSec % 60).padStart(2, '0');
      if (clock) clock.textContent = m + ':' + s;
      if (waveSec === 0) {
        clearInterval(waveHandle);
        waveHandle = null;
        if (btn) btn.textContent = t('waveStart');
      }
    }, 1000);
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

    document.getElementById('checkBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('waveBtn').addEventListener('click', toggleWave);
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.selected = [];
      if (waveHandle) { clearInterval(waveHandle); waveHandle = null; }
      waveSec = 90;
      document.getElementById('waveClock').textContent = '01:30';
      document.getElementById('resultCard').hidden = true;
      buildGrid();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var txt = Array.from(document.querySelectorAll('#stepList li')).map(function (li) { return '- ' + li.textContent; }).join('\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/anxiety-vs-panic-reset.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'anxiety-vs-panic-reset',
        filename: 'dopabrain-calm-wave-card.png',
        badge: 'SOMATIC CALM · 90S WAVE',
        headline: res.title,
        subtitle: 'Ride the Wave · Lengthen Your Exhale',
        metrics: [
          { label: 'Reset', value: '90 Sec' },
          { label: 'Focus', value: 'Exhale' }
        ],
        quote: res.cue,
        accent: '#3b82f6',
        accent2: '#06b6d4'
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
