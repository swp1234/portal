/* Emotional Flashback & Present-Time Grounding Companion
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Emotional Flashback & Present-Time Grounding Companion | DopaBrain',
      metaDesc: 'Free 12-language 6-Step Emotional Flashback Grounding Companion. Anchor back to the present year, calm somatic alarm with a 60s timer, and save a private comfort card.',
      skip: 'Skip to Flashback Grounding', back: '← Mental Wellness Lab', langLabel: 'Language:',
      kicker: 'PRESENT-TIME SAFETY & GROUNDING', heroTitle: 'Emotional Flashback & Present-Time Grounding',
      heroLead: 'Hit by a sudden wave of dread, shame, or feeling small out of proportion to today? Tap through 6 calm, trauma-informed present-time grounding steps at your own pace—100% private in your browser.',
      chip1: '6 Calm Steps', chip2: '60s Safety Timer', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • WALK THROUGH 6 PRESENT-TIME ANCHORS',
      step1Title: 'Tap each step gently as you read and breathe through it',
      step1Sub: 'Take your time—even completing 2 steps helps calm the nervous system.',
      anchorLabel: 'Optional: 1 safe detail I can see or touch in this room right now (100% local):',
      completeBtn: 'Lock In Present-Time Safety Card', resetBtn: 'Reset Steps',
      resultBadge: 'STEP 2 • YOU ARE IN THE PRESENT',
      anchorBoxTitle: 'My Present-Room Sensory Proof',
      timerTitle: '60-Second Gentle Breathing Space',
      timerSub: 'No decisions required for the next 60 seconds—just let your shoulders soften.',
      timerStart: 'Start 60s Calm', timerPause: 'Pause Timer',
      gentleTitle: 'Your Gentle Next-Hour Reminder',
      storyBtn: 'Save 1080×1920 Safety Card (PNG)', copyBtn: 'Copy Grounding Steps', shareBtn: 'Share Tool',
      bridgeVagalTitle: 'Vagal Nervous System Reset', bridgeVagalDesc: 'Slow heart rate gently with our 60-second Physiological Sigh pacer.',
      bridgeInnerTitle: 'Inner Child Need Decoder', bridgeInnerDesc: 'Identify the unmet emotional need asking for warmth today.',
      bridge543Title: '5-4-3-2-1 Sensory Grounding', bridge543Desc: 'Step through all five senses to anchor completely in your surroundings.',
      faqTitle: 'Frequently Asked Questions', refTitle: 'Trauma-Informed Frameworks & References',
      discTitle: 'Safety & Clinical Disclaimer:',
      discText: 'This grounding companion provides gentle self-guided mindfulness reminders and is not clinical trauma therapy or crisis intervention. If you are in acute crisis, please reach out to local emergency or crisis support services.',
      privacy: 'Privacy Policy', terms: 'Terms',
      stickyTitle: 'Want a guided 60-second somatic exhale?',
      stickySub: 'Open our Vagal Tone & Physiological Sigh Reset Menu',
      stickyBtn: 'Vagal Reset →',
      copied: '6 present-time grounding steps copied!', shared: 'Tool link copied!', savedCard: '1080×1920 Present-Time Safety Card saved!'
    },
    ko: {
      title: '감정 플래시백 6단계 현재 시점 그라운딩 컴패니언 | DopaBrain',
      metaDesc: '갑작스러운 두려움·수치심·작아지는 기분이 밀려올 때, 6단계 현재 시점 앵커 체크리스트와 60초 안전 타이머로 지금 여기의 안전함으로 돌아오세요.',
      skip: '감정 플래시백 그라운딩으로 이동', back: '← 멘탈 웰니스 랩', langLabel: '언어:',
      kicker: '현재 시점 안전 & 트라우마-인폼드 그라운딩', heroTitle: '감정 플래시백 6단계 그라운딩',
      heroLead: '오늘 일어난 일보다 훨씬 큰 두려움·수치심·무력감의 파도가 갑자기 덮쳤나요? 서두르지 말고 6가지 현재 시점 안전 단계를 하나씩 누르며 호흡해 보세요. 모든 내용은 100% 로컬 비공개입니다.',
      chip1: '6단계 안전 체크', chip2: '60초 호흡 타이머', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 6가지 현재 시점 안전 앵커 천천히 밟아가기',
      step1Title: '각 문장을 읽고 천천히 숨 쉬며 하나씩 체크해 보세요',
      step1Sub: '다 하지 못해도 괜찮습니다—단 2단계만 밟아도 신경계 경보가 한결 가라앉습니다.',
      anchorLabel: '선택: 지금 이 방에서 눈에 보이거나 손에 닿는 안전한 감각 1가지 (100% 로컬):',
      completeBtn: '현재 시점 안전 카드 고정하기', resetBtn: '단계 초기화',
      resultBadge: '2단계 • 나는 지금 안전하게 현재에 있습니다',
      anchorBoxTitle: '지금 이 공간의 감각적 증거',
      timerTitle: '60초 판단 중지 · 부드러운 호흡 공간',
      timerSub: '앞으로 60초 동안은 아무 결정도 내리지 않아도 됩니다—어깨 힘만 살짝 빼세요.',
      timerStart: '60초 안정 시작', timerPause: '일시 정지',
      gentleTitle: '앞으로 1시간을 위한 부드러운 약속',
      storyBtn: '1080×1920 안전 카드 저장 (PNG)', copyBtn: '6단계 복사', shareBtn: '도구 공유',
      bridgeVagalTitle: '미주신경·신경계 리셋', bridgeVagalDesc: '60초 생리적 한숨 페이서로 심박수를 부드럽게 낮춥니다.',
      bridgeInnerTitle: '내면아이 핵심 욕구 디코더', bridgeInnerDesc: '지금 따뜻함을 원하고 있는 오래된 감정 욕구를 살핍니다.',
      bridge543Title: '5-4-3-2-1 감각 그라운딩', bridge543Desc: '오감을 차례로 확인하며 지금 이 방으로 완전히 돌아옵니다.',
      faqTitle: '자주 묻는 질문', refTitle: '트라우마-인폼드 이론 및 참고문헌',
      discTitle: '안전 및 임상 안내:',
      discText: '본 도구는 일상 속 부드러운 마음챙김·그라운딩을 돕기 위한 안내 도구이며 임상 트라우마 치료나 위기 개입이 아닙니다. 급성 위기 시 지역 전문 상담 핫라인이나 의료기관에 연락하세요.',
      privacy: '개인정보처리방침', terms: '이용약관',
      stickyTitle: '60초 호흡 페이서로 몸의 긴장을 더 풀고 싶나요?',
      stickySub: '미주신경 리셋과 생리적 한숨 안내 메뉴를 열어보세요',
      stickyBtn: '신경계 리셋 →',
      copied: '6단계 그라운딩 문장을 복사했습니다!', shared: '도구 링크를 복사했습니다!', savedCard: '1080×1920 현재 시점 안전 카드를 저장했습니다!'
    },
    zh: { title: '情绪闪回 6 步当下着陆陪伴工具 | DopaBrain', heroTitle: '情绪闪回 6 步当下着陆', completeBtn: '生成当下安全锚定卡', resetBtn: '重置步骤', timerStart: '开始60秒平复', timerPause: '暂停', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '迷走神经重置 →' },
    ja: { title: '感情フラッシュバック 6ステップ現在地グラウンディング | DopaBrain', heroTitle: '感情フラッシュバック・グラウンディング', completeBtn: '現在地の安心カードを作成', resetBtn: 'リセット', timerStart: '60秒リラックス開始', timerPause: '一時停止', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: '神経リセット →' },
    es: { title: 'Compañero de Anclaje ante Flashbacks Emocionales (6 Pasos) | DopaBrain', heroTitle: 'Anclaje ante Flashbacks Emocionales', completeBtn: 'Guardar tarjeta de seguridad', resetBtn: 'Reiniciar', timerStart: 'Iniciar 60s', timerPause: 'Pausar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Reset Vagal →' },
    pt: { title: 'Guia de Aterramento para Flashbacks Emocionais (6 Passos) | DopaBrain', heroTitle: 'Aterramento para Flashback Emocional', completeBtn: 'Fixar cartão de segurança', resetBtn: 'Redefinir', timerStart: 'Iniciar 60s', timerPause: 'Pausar', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Reset Vagal →' },
    de: { title: 'Emotionaler Flashback 6-Schritte-Grounding Begleiter | DopaBrain', heroTitle: 'Emotionaler-Flashback Grounding', completeBtn: 'Sicherheitskarte sichern', resetBtn: 'Zurücksetzen', timerStart: '60s Ruhe starten', timerPause: 'Pause', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Vagus-Reset →' },
    fr: { title: 'Compagnon d’Ancrage Flashback Émotionnel (6 Étapes) | DopaBrain', heroTitle: 'Ancrage Flashback Émotionnel', completeBtn: 'Créer ma carte de sécurité', resetBtn: 'Réinitialiser', timerStart: 'Lancer 60s', timerPause: 'Pause', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Reset Vagal →' },
    ru: { title: 'Заземление при эмоциональном флешбэке (6 шагов) | DopaBrain', heroTitle: 'Заземление: эмоциональный флешбэк', completeBtn: 'Закрепить карту безопасности', resetBtn: 'Сбросить', timerStart: 'Старт 60с', timerPause: 'Пауза', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Сброс нервов →' },
    hi: { title: 'इमोशनल फ़्लैशबैक 6-स्टेप ग्राउंडिंग साथी | DopaBrain', heroTitle: 'इमोशनल फ़्लैशबैक ग्राउंडिंग', completeBtn: 'सुरक्षा कार्ड बनाएँ', resetBtn: 'रीसेट', timerStart: '60s शांति शुरू करें', timerPause: 'रोकें', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'वैगल रीसेट →' },
    id: { title: 'Pendamping Grounding Flashback Emosional (6 Langkah) | DopaBrain', heroTitle: 'Grounding Flashback Emosional', completeBtn: 'Kunci Kartu Keamanan', resetBtn: 'Reset', timerStart: 'Mulai 60 Detik', timerPause: 'Jeda', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Reset Vagal →' },
    tr: { title: 'Duygusal Flashback 6 Adımlı Topraklama Rehberi | DopaBrain', heroTitle: 'Duygusal Flashback Topraklama', completeBtn: 'Güvenlik Kartını Kilitle', resetBtn: 'Sıfırla', timerStart: '60sn Başlat', timerPause: 'Duraklat', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Vagal Sıfırlama →' }
  };

  var STEPS = [
    { id: 'name', en: 'Name it softly: "I am having an emotional flashback—this intensity is an old memory echo, not a present emergency."', ko: '부드럽게 이름 붙이기: "지금 감정 플래시백을 겪고 있어. 이 강렬한 감정은 과거 기억의 메아리일 뿐 현재의 위기가 아니야."' },
    { id: 'year', en: 'Orient to present time: Say today’s year, your adult age, and 2 objects you can physically see in this room.', ko: '현재 시점 확인: 지금의 연도와 어른이 된 내 나이, 그리고 눈앞에 실제로 보이는 물건 2가지를 확인하세요.' },
    { id: 'body', en: 'Re-inhabit your body: Unclench your jaw, press both feet firmly into the floor, and exhale slowly for 6 seconds.', ko: '몸으로 돌아오기: 어금니 힘을 풀고 양발을 바닥에 단단히 디딘 채 6초간 천천히 숨을 내쉬세요.' },
    { id: 'critic', en: 'Pause the Inner Critic: Refuse harsh self-blame right now—you do not have to solve your entire life in this moment.', ko: '내면 비판 잠시 멈춤: 지금 당장 나를 탓하거나 인생의 모든 문제를 해결하려 하지 마세요.' },
    { id: 'choices', en: 'Remember adult choices: Today you have options, boundaries, and allies that your younger self did not have.', ko: '어른의 선택권 기억하기: 오늘의 나에게는 어린 시절엔 없었던 경계선, 이동할 자유, 도움을 요청할 힘이 있습니다.' },
    { id: 'gentle', en: 'Shrink the next hour: Choose one tiny comfort—warm water, dim light, a blanket, or stepping away from screens.', ko: '다음 1시간만 부드럽게: 따뜻한 물, 은은한 조명, 담요, 화면 끄기 중 아주 작은 위로 1가지만 선택하세요.' }
  ];

  var STORAGE_KEY = 'dopabrain_flashback_grounding_v1';
  var state = { lang: 'en', done: ['name', 'year'], anchor: '' };
  var timerSec = 60;
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

  function sendSafeEvent(doneCount) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'flashback_grounding_complete', {
        tool_slug: 'emotional-flashback-grounding',
        steps_completed: doneCount,
        locale: state.lang
      });
    }
  }

  function buildSteps() {
    var wrap = document.getElementById('stepList');
    if (!wrap) return;
    wrap.textContent = '';
    STEPS.forEach(function (st, idx) {
      var active = state.done.indexOf(st.id) !== -1;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'step-check-btn' + (active ? ' is-done' : '');
      btn.setAttribute('data-step', st.id);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');

      var num = document.createElement('span');
      num.className = 'step-num';
      num.textContent = active ? '✓' : String(idx + 1);
      var txt = document.createElement('span');
      txt.textContent = state.lang === 'ko' ? st.ko : st.en;

      btn.appendChild(num);
      btn.appendChild(txt);
      btn.addEventListener('click', function () {
        var pos = state.done.indexOf(st.id);
        if (pos === -1) state.done.push(st.id);
        else state.done.splice(pos, 1);
        saveLocal();
        buildSteps();
      });
      wrap.appendChild(btn);
    });
  }

  function renderResult(emit) {
    var inp = document.getElementById('anchorInput');
    state.anchor = inp ? inp.value.trim() : '';
    var doneCount = state.done.length;
    var isKo = state.lang === 'ko';

    document.getElementById('verdictTitle').textContent = isKo
      ? '현재 시점 앵커 완료 (' + doneCount + ' / 6단계) — 지금 여기는 안전합니다'
      : 'Present-Time Anchor Active (' + doneCount + ' / 6 Steps) — You Are Safe Here';
    document.getElementById('verdictDesc').textContent = isKo
      ? '감정의 파도는 반드시 지나갑니다. 지금 당장 어려운 대화를 하거나 큰 결정을 내리지 말고, 앞으로 1시간은 몸을 부드럽게 돌보는 데만 집중하세요.'
      : 'This wave will pass—flashbacks are temporary autonomic echoes. Hold off on major texts or big decisions for the next hour and let your body settle.';
    document.getElementById('gentleQuote').textContent = isKo
      ? '"나는 과거의 무력한 아이가 아니라, 지금 여기 안전하게 숨 쉬고 있는 어른이다. 천천히 지나가도록 두면 된다."'
      : '"I am in my adult body in the present day. This feeling is passing through, and I am allowed to move gently for the next hour."';

    var box = document.getElementById('anchorBox');
    var out = document.getElementById('anchorOut');
    if (state.anchor) {
      out.textContent = state.anchor;
      box.hidden = false;
    } else {
      out.textContent = '';
      box.hidden = true;
    }

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emit) sendSafeEvent(doneCount);
  }

  function toggleTimer() {
    var btn = document.getElementById('timerBtn');
    var clock = document.getElementById('groundClock');
    if (timerHandle) {
      clearInterval(timerHandle);
      timerHandle = null;
      if (btn) btn.textContent = t('timerStart');
      return;
    }
    if (timerSec <= 0) timerSec = 60;
    if (btn) btn.textContent = t('timerPause');
    timerHandle = setInterval(function () {
      timerSec = Math.max(0, timerSec - 1);
      var m = String(Math.floor(timerSec / 60)).padStart(2, '0');
      var s = String(timerSec % 60).padStart(2, '0');
      if (clock) clock.textContent = m + ':' + s;
      if (timerSec === 0) {
        clearInterval(timerHandle);
        timerHandle = null;
        if (btn) btn.textContent = t('timerStart');
      }
    }, 1000);
  }

  function saveLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ done: state.done, anchor: state.anchor })); } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (Array.isArray(p.done)) state.done = p.done;
      if (typeof p.anchor === 'string') state.anchor = p.anchor;
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
    buildSteps();
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
    var anchorInput = document.getElementById('anchorInput');
    if (anchorInput && state.anchor) anchorInput.value = state.anchor;

    document.getElementById('completeBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('timerBtn').addEventListener('click', toggleTimer);
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.done = [];
      state.anchor = '';
      if (anchorInput) anchorInput.value = '';
      if (timerHandle) { clearInterval(timerHandle); timerHandle = null; }
      timerSec = 60;
      document.getElementById('groundClock').textContent = '01:00';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      buildSteps();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var isKo = state.lang === 'ko';
      var txt = STEPS.map(function (st, i) { return (i + 1) + '. ' + (isKo ? st.ko : st.en); }).join('\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/emotional-flashback-grounding.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'emotional-flashback-grounding',
        filename: 'dopabrain-present-safety-card.png',
        badge: 'PRESENT-TIME SAFETY ANCHOR',
        headline: 'You Are Safe in the Present',
        subtitle: state.done.length + ' / 6 Grounding Steps Completed',
        metrics: [
          { label: 'Steps', value: state.done.length + '/6' },
          { label: 'Pace', value: 'Gentle' }
        ],
        quote: document.getElementById('gentleQuote').textContent,
        accent: '#2dd4bf',
        accent2: '#818cf8'
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
