/* Vagal Tone & Nervous System Reset Menu (60s Physiological Sigh Pacer)
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Vagal Tone & Nervous System Reset Menu (60s Sigh Pacer) | DopaBrain',
      metaDesc: 'Free 12-language Vagal Tone & Nervous System Reset Menu. Match your autonomic state to evidence-based somatic micro-resets and a guided 60-second Physiological Sigh pacer.',
      skip: 'Skip to Vagal Reset Menu', back: '← Mental Wellness Lab', langLabel: 'Language:',
      kicker: 'SOMATIC & VAGAL REGULATION LAB', heroTitle: 'Vagal Tone & Nervous System Reset Menu',
      heroLead: 'Your body cannot think its way out of an autonomic alarm. Pick your current nervous system state—Wired, Shut-Down, or Overstimulated—for a 3-step somatic reset menu and a 60-second Physiological Sigh pacer.',
      chip1: '3 Autonomic States', chip2: '60s Physiological Sigh', chip3: '100% Private (Local)',
      step1Badge: "STEP 1 • CHECK YOUR BODY'S CURRENT SIGNAL",
      step1Title: 'Which autonomic state feels closest right now?',
      step1Sub: 'Select the state your body is signaling—not what you wish you felt.',
      buildBtn: 'Generate Matched Vagal Reset Menu', resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR STATE-MATCHED SOMATIC MENU',
      pacerTitle: '60-Second Physiological Sigh Pacer',
      pacerStart: 'Start 60s Sigh', pacerPause: 'Pause Pacer',
      menuTitle: '3-Step Vagal Reset Menu (Under 3 Minutes)',
      cueTitle: 'Body Safety Cue',
      storyBtn: 'Save 1080×1920 Reset Card (PNG)', copyBtn: 'Copy Reset Menu', shareBtn: 'Share Tool',
      bridgeSomaticTitle: 'Somatic Body Tension Map', bridgeSomaticDesc: 'Unwind jaw, neck, chest & gut tightness with 60s Jacobson PMR.',
      bridgeWotTitle: 'Window of Tolerance Check', bridgeWotDesc: 'Map hyperarousal vs. freeze patterns across your week.',
      bridgeGroundTitle: '5-4-3-2-1 Grounding Tool', bridgeGroundDesc: 'Anchor dissociation or sudden panic back into the physical room.',
      faqTitle: 'Frequently Asked Questions', refTitle: 'Somatic & Neuroscience References',
      discTitle: 'Editorial Self-Reflection Disclaimer:',
      discText: 'This somatic regulation menu offers general breathing and orienting practices for everyday stress recovery, not medical treatment or emergency mental health care.',
      privacy: 'Privacy Policy', terms: 'Terms',
      stickyTitle: 'Still holding tension in your jaw or shoulders?',
      stickySub: 'Open the 6-Zone Somatic Body Map & 60s PMR Unwinder',
      stickyBtn: 'Body Map →',
      copied: 'Vagal reset menu copied!', shared: 'Tool link copied!', savedCard: '1080×1920 Nervous System Reset Card saved!'
    },
    ko: {
      title: '미주신경·자율신경계 리셋 메뉴 (60초 생리적 한숨 페이서) | DopaBrain',
      metaDesc: '과각성(초조)·저각성(무기력/동결)·감각 과부하 중 지금 몸의 자율신경 상태를 고르고 60초 생리적 한숨 페이서와 3분 신체 리셋 메뉴를 실행하세요.',
      skip: '미주신경 리셋 메뉴로 이동', back: '← 멘탈 웰니스 랩', langLabel: '언어:',
      kicker: '신체 기반 미주신경 조절 랩', heroTitle: '미주신경·신경계 리셋 메뉴',
      heroLead: '자율신경계 경보는 생각만으로 꺼지지 않습니다. 지금 몸이 보내는 신호(과각성·무기력 동결·감각 과부하)를 선택해 맞춤 3단계 미주신경 리셋과 60초 생리적 한숨 호흡을 바로 따라해 보세요.',
      chip1: '3가지 자율신경 상태', chip2: '60초 생리적 한숨', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 지금 몸의 자율신경 신호 선택',
      step1Title: '지금 내 몸 상태와 가장 가까운 신호는 무엇인가요?',
      step1Sub: '바람이 아니라 지금 실제 몸에서 느껴지는 감각을 고르세요.',
      buildBtn: '맞춤 미주신경 리셋 메뉴 생성', resetBtn: '초기화',
      resultBadge: '2단계 • 나의 상태 맞춤 3분 신경계 리셋',
      pacerTitle: '60초 생리적 한숨(Physiological Sigh) 페이서',
      pacerStart: '60초 호흡 시작', pacerPause: '일시 정지',
      menuTitle: '3분 안에 끝내는 3단계 미주신경 리셋',
      cueTitle: '신경계 안전 신호 문장',
      storyBtn: '1080×1920 리셋 카드 저장 (PNG)', copyBtn: '메뉴 복사', shareBtn: '도구 공유',
      bridgeSomaticTitle: '신체 긴장 바디맵 & PMR', bridgeSomaticDesc: '턱·목·어깨·가슴에 뭉친 긴장을 60초 근육 이완으로 풀어냅니다.',
      bridgeWotTitle: '인내의 창 자가체크', bridgeWotDesc: '주간 과각성과 무기력 동결 패턴을 한눈에 파악합니다.',
      bridgeGroundTitle: '5-4-3-2-1 감각 그라운딩', bridgeGroundDesc: '갑작스러운 불안이나 멍함을 오감으로 지금 여기에 고정합니다.',
      faqTitle: '자주 묻는 질문', refTitle: '신체 심리 및 신경과학 참고문헌',
      discTitle: '편집 및 자기성찰 안내:',
      discText: '본 도구는 일상적 스트레스 회복을 돕는 호흡·감각 안내 메뉴이며 의학적 치료나 응급 의료 개입이 아닙니다.',
      privacy: '개인정보처리방침', terms: '이용약관',
      stickyTitle: '턱이나 어깨에 아직 긴장이 남아 있나요?',
      stickySub: '6부위 신체 긴장 바디맵 & 60초 PMR 이완을 이어가세요',
      stickyBtn: '바디맵 열기 →',
      copied: '미주신경 리셋 메뉴를 복사했습니다!', shared: '도구 링크를 복사했습니다!', savedCard: '1080×1920 신경계 리셋 카드를 저장했습니다!'
    },
    zh: { title: '迷走神经与神经系统重置菜单（60秒生理叹息）| DopaBrain', heroTitle: '迷走神经与神经系统重置', buildBtn: '生成专属神经重置菜单', resetBtn: '重置', pacerStart: '开始60秒呼气', pacerPause: '暂停', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '身体地图 →' },
    ja: { title: '迷走神経・自律神経リセットメニュー（60秒呼吸）| DopaBrain', heroTitle: '迷走神経・自律神経リセット', buildBtn: '状態別リセットを作成', resetBtn: 'リセット', pacerStart: '60秒呼吸を開始', pacerPause: '一時停止', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: 'ボディマップ →' },
    es: { title: 'Menú de Reinicio Vagal y Sistema Nervioso (60s) | DopaBrain', heroTitle: 'Reinicio Vagal y Sistema Nervioso', buildBtn: 'Generar menú de reinicio', resetBtn: 'Reiniciar', pacerStart: 'Iniciar 60s', pacerPause: 'Pausar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Mapa Corporal →' },
    pt: { title: 'Menu de Reset Vagal e Sistema Nervoso (60s) | DopaBrain', heroTitle: 'Reset Vagal e Sistema Nervioso', buildBtn: 'Gerar menu de reset', resetBtn: 'Redefinir', pacerStart: 'Iniciar 60s', pacerPause: 'Pausar', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Mapa Corporal →' },
    de: { title: 'Vagusnerv & Nervensystem Reset-Menü (60s) | DopaBrain', heroTitle: 'Vagusnerv & Nervensystem Reset', buildBtn: 'Reset-Menü erstellen', resetBtn: 'Zurücksetzen', pacerStart: '60s starten', pacerPause: 'Pause', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Körperkarte →' },
    fr: { title: 'Menu de Réinitialisation Vagale & Système Nerveux | DopaBrain', heroTitle: 'Reset Vagal & Système Nerveux', buildBtn: 'Créer mon menu vagal', resetBtn: 'Réinitialiser', pacerStart: 'Lancer 60s', pacerPause: 'Pause', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Carte Corporelle →' },
    ru: { title: 'Перезагрузка блуждающего нерва и нервной системы | DopaBrain', heroTitle: 'Сброс нервной системы (60с)', buildBtn: 'Создать план сброса', resetBtn: 'Сбросить', pacerStart: 'Старт 60с', pacerPause: 'Пауза', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Карта тела →' },
    hi: { title: 'वैगल टोन और नर्वस सिस्टम रीसेट मेनू (60s) | DopaBrain', heroTitle: 'नर्वस सिस्टम रीसेट मेनू', buildBtn: 'रीसेट मेनू बनाएँ', resetBtn: 'रीसेट', pacerStart: '60s साँस शुरू करें', pacerPause: 'रोकें', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'बॉडी मैप →' },
    id: { title: 'Menu Reset Saraf Vagus & Sistem Saraf (60d) | DopaBrain', heroTitle: 'Reset Saraf Vagus & Sistem Saraf', buildBtn: 'Buat Menu Reset', resetBtn: 'Reset', pacerStart: 'Mulai 60 Detik', pacerPause: 'Jeda', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Peta Tubuh →' },
    tr: { title: 'Vagal Tonus ve Sinir Sistemi Sıfırlama Menüsü | DopaBrain', heroTitle: 'Sinir Sistemi Sıfırlama (60sn)', buildBtn: 'Sıfırlama Menüsü Oluştur', resetBtn: 'Sıfırla', pacerStart: '60sn Başlat', pacerPause: 'Duraklat', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Beden Haritası →' }
  };

  var STATES = [
    {
      id: 'wired', emoji: '⚡',
      enName: 'Wired, Racing or On-Edge (Sympathetic)', koName: '과각성 · 심장 두근거림 · 초조 (교감신경 항진)',
      enSub: 'Tight chest, fast thoughts, irritability, or sudden dread', koSub: '가슴 답답함, 빠른 생각, 예민함, 갑작스러운 불안',
      enTitle: 'Engage the Vagal Brake — Lengthen Your Exhale', koTitle: '미주신경 브레이크 가동 — 날숨을 길게 늘리세요',
      enDesc: 'Your sympathetic accelerator is stuck down. Extended exhales and cool facial temperature signal the vagus nerve to slow heart rate within 60 seconds.',
      koDesc: '교감신경 가속 페달이 밟힌 상태입니다. 들숨보다 긴 날숨과 차가운 물 자극은 60초 안에 심박수를 낮추는 가장 빠른 생리적 브레이크입니다.',
      enSteps: ['Run 4 cycles of the 60s Physiological Sigh pacer above (double inhale through nose, long slow mouth exhale).', 'Splash cool water on your cheeks/forehead or hold a cold glass against your palms for 20 seconds (mammalian dive reflex).', 'Drop your shoulders 2 inches away from your ears and unclench your jaw on the next exhale.'],
      koSteps: ['위 60초 생리적 한숨 페이서를 따라 4회 호흡하세요 (코로 두 번 들이마시고 입으로 길게 내쉬기).', '찬물로 얼굴이나 손목을 20초간 식히거나 차가운 컵을 양손에 감싸세요 (포유류 잠수 반사).', '다음 날숨에 어금니 힘을 풀고 어깨를 귀에서 3cm 아래로 툭 떨어뜨리세요.'],
      enCue: '"My nervous system is firing a false alarm, not a real emergency. Every long exhale tells my heart it is safe to slow down."',
      koCue: '"지금 심장이 뛰는 것은 과민 경보일 뿐 실제 위기가 아니다. 길게 내쉬는 숨마다 내 몸에 안전 신호가 전달된다."'
    },
    {
      id: 'shutdown', emoji: '🧊',
      enName: 'Shut-Down, Heavy or Numb (Dorsal Freeze)', koName: '저각성 · 멍함 · 무기력 동결 (배측 미주신경)',
      enSub: 'Brain fog, flat mood, staring at screens, feeling disconnected', koSub: '아무것도 하기 싫음, 멍한 느낌, 감정 마비, 현실감 저하',
      enTitle: 'Gentle Mobilization — Warm Up Without Pressure', koTitle: '부드러운 깨우기 — 압박 없이 감각을 되살리세요',
      enDesc: 'When overloaded for too long, the nervous system flips into energy-saving freeze. Skip intense workouts—use gentle orienting, warmth, and vocal vibration.',
      koDesc: '과부하가 오래 지속되면 신경계가 에너지를 아끼려고 동결 모드로 전환합니다. 무리한 의지 대신 부드러운 시선 이동·온기·허밍으로 천천히 깨우세요.',
      enSteps: ['Slowly turn your head left and right, naming 3 neutral colors or textures in the room (gentle orienting).', 'Hum a low, steady "vooo" sound for 3 exhales—throat vibration stimulates ventral vagal fibers.', 'Stand up, shake out your wrists for 15 seconds, and drink half a glass of warm or room-temperature water.'],
      koSteps: ['고개를 천천히 좌우로 돌리며 방 안의 색깔 3가지와 질감 2가지를 소리 내어 이름 붙이세요.', '낮고 부드러운 "음—" 허밍으로 3회 길게 내쉬어 목의 미주신경 진동을 깨우세요.', '자리에서 일어나 손목을 15초간 가볍게 털고 미지근한 물 반 잔을 마시세요.'],
      enCue: '"Freeze is my body trying to protect me from burnout. One tiny gentle movement is enough to begin thawing."',
      koCue: '"무기력함은 게으름이 아니라 지친 몸의 보호 모드다. 아주 작은 움직임 하나면 다시 흐름을 열기에 충분하다."'
    },
    {
      id: 'overstim', emoji: '🔊',
      enName: 'Overstimulated & Sensory-Flooded (HSP Load)', koName: '감각 과부하 · 소음/화면 피로 (초민감 상태)',
      enSub: 'Too many tabs, noise, bright screens, snapping at tiny interruptions', koSub: '소음·빛·알림에 예민해지고 사소한 자극에도 짜증이 치밀어 오름',
      enTitle: 'Reduce Input First — Give Your Cortex Quiet', koTitle: '자극 차단 우선 — 감각 입력을 먼저 낮추세요',
      enDesc: 'Your sensory filter is saturated. Removing 2 minutes of visual and auditory noise restores executive calm far faster than pushing through.',
      koDesc: '감각 필터가 꽉 찬 상태입니다. 의지로 버티기보다 빛과 소리를 단 2분만 줄여도 전전두엽의 안정감이 빠르게 회복됩니다.',
      enSteps: ['Dim your screen brightness, silence notifications for 15 minutes, and step away from overhead glare.', 'Soften your gaze into wide panoramic vision (notice the walls on your left and right edges without moving your eyes).', 'Complete 60 seconds of slow sighing above with your hands resting warmly over your stomach or thighs.'],
      koSteps: ['화면 밝기를 낮추고 알림을 15분간 끈 뒤 강한 조명이나 소음에서 잠깐 벗어나세요.', '시선을 한 점에 고정하지 말고 양옆 주변 시야까지 넓게 보는 파노라마 시선으로 풀어주세요.', '배나 허벅지에 손을 따뜻하게 얹고 위 60초 생리적 한숨 호흡을 따라하세요.'],
      enCue: '"Nothing is wrong with me—my sensory bandwidth is simply full. Stepping back for 2 minutes protects the rest of my day."',
      koCue: '"내가 예민해서가 아니라 오늘 감각 용량이 꽉 찼을 뿐이다. 지금 2분의 고요함이 남은 하루를 지켜준다."'
    }
  ];

  var state = { lang: 'en', modeId: 'wired' };
  var pacerSec = 60;
  var pacerHandle = null;

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function getMode() {
    for (var i = 0; i < STATES.length; i++) {
      if (STATES[i].id === state.modeId) return STATES[i];
    }
    return STATES[0];
  }

  function sendSafeEvent(modeId) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'vagal_reset_complete', {
        tool_slug: 'vagal-nervous-system-reset',
        autonomic_state: modeId,
        locale: state.lang
      });
    }
  }

  function buildGrid() {
    var grid = document.getElementById('stateGrid');
    if (!grid) return;
    grid.textContent = '';
    STATES.forEach(function (st) {
      var btn = document.createElement('button');
      btn.type = 'button';
      var active = st.id === state.modeId;
      btn.className = 'toggle-card' + (active ? ' is-selected' : '');
      btn.setAttribute('data-state', st.id);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');

      var em = document.createElement('span');
      em.className = 'card-emoji';
      em.textContent = st.emoji;
      var strong = document.createElement('strong');
      strong.textContent = state.lang === 'ko' ? st.koName : st.enName;
      var sub = document.createElement('span');
      sub.className = 'card-sub';
      sub.textContent = state.lang === 'ko' ? st.koSub : st.enSub;

      btn.appendChild(em);
      btn.appendChild(strong);
      btn.appendChild(sub);
      btn.addEventListener('click', function () {
        state.modeId = st.id;
        buildGrid();
      });
      grid.appendChild(btn);
    });
  }

  function renderResult(emit) {
    var m = getMode();
    var isKo = state.lang === 'ko';
    document.getElementById('verdictTitle').textContent = isKo ? m.koTitle : m.enTitle;
    document.getElementById('verdictDesc').textContent = isKo ? m.koDesc : m.enDesc;
    document.getElementById('safetyCue').textContent = isKo ? m.koCue : m.enCue;

    var ul = document.getElementById('menuList');
    ul.textContent = '';
    (isKo ? m.koSteps : m.enSteps).forEach(function (step) {
      var li = document.createElement('li');
      li.textContent = step;
      ul.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    if (emit) sendSafeEvent(m.id);
  }

  function phaseLabel(elapsed) {
    var cycle = elapsed % 11;
    var isKo = state.lang === 'ko';
    if (cycle < 4) return isKo ? '1단계: 코로 천천히 들이마시기 (4초)' : 'Inhale gently through nose (4s)';
    if (cycle < 5) return isKo ? '2단계: 코로 짧게 한 번 더 채우기 (1초)' : 'Quick second top-up inhale (1s)';
    return isKo ? '3단계: 입으로 길고 느리게 내쉬기 (6초)' : 'Long, slow exhale through mouth (6s)';
  }

  function togglePacer() {
    var btn = document.getElementById('sighStartBtn');
    var clock = document.getElementById('sighClock');
    var phase = document.getElementById('sighPhase');
    if (pacerHandle) {
      clearInterval(pacerHandle);
      pacerHandle = null;
      if (btn) btn.textContent = t('pacerStart');
      return;
    }
    if (pacerSec <= 0) pacerSec = 60;
    if (btn) btn.textContent = t('pacerPause');
    if (phase) phase.textContent = phaseLabel(60 - pacerSec);
    pacerHandle = setInterval(function () {
      pacerSec = Math.max(0, pacerSec - 1);
      var m = String(Math.floor(pacerSec / 60)).padStart(2, '0');
      var s = String(pacerSec % 60).padStart(2, '0');
      if (clock) clock.textContent = m + ':' + s;
      if (phase) phase.textContent = phaseLabel(60 - pacerSec);
      if (pacerSec === 0) {
        clearInterval(pacerHandle);
        pacerHandle = null;
        if (btn) btn.textContent = t('pacerStart');
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

    document.getElementById('buildBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('sighStartBtn').addEventListener('click', togglePacer);
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.modeId = 'wired';
      if (pacerHandle) { clearInterval(pacerHandle); pacerHandle = null; }
      pacerSec = 60;
      document.getElementById('sighClock').textContent = '01:00';
      document.getElementById('resultCard').hidden = true;
      buildGrid();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var m = getMode();
      var txt = (state.lang === 'ko' ? m.koSteps : m.enSteps).join('\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/vagal-nervous-system-reset.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var m = getMode();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'vagal-nervous-system-reset',
        filename: 'dopabrain-vagal-reset-card.png',
        badge: 'VAGAL TONE · 60S SIGH RESET',
        headline: isKo ? m.koTitle : m.enTitle,
        subtitle: '4s Inhale · 1s Top-Up · 6s Long Exhale',
        metrics: [
          { label: 'Duration', value: '60 Sec' },
          { label: 'State', value: m.id.toUpperCase() }
        ],
        quote: isKo ? m.koCue : m.enCue,
        accent: '#0ea5e9',
        accent2: '#14b8a6'
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
