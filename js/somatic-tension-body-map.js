/* Somatic Stress & Body Tension Map + 60s Jacobson PMR Pacer
 * 100% client-side, deterministic, privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Somatic Stress & Body Tension Map + 60s PMR Release | DopaBrain',
      metaDesc: 'Free 12-language Somatic Stress Body Map. Tap where tension sits in your body and run a targeted 60-second Progressive Muscle Relaxation release privately.',
      skip: 'Skip to Somatic Body Map',
      back: '← Tools Catalog',
      langLabel: 'Language:',
      kicker: 'SOMATIC BODY SCAN & PMR LAB',
      heroTitle: 'Somatic Stress & Body Tension Map',
      heroLead: 'Check in with your body before stress spirals. Tap every zone holding tightness right now to decode your somatic bracing pattern and run a targeted 60-second Progressive Muscle Release.',
      chip1: '6 Body Tension Zones',
      chip2: '60s Guided PMR Pacer',
      chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • TAP EVERY TENSE BODY ZONE',
      step1Title: 'Where is your body holding tension right now?',
      step1Sub: 'Select one or more somatic zones — your scan stays 100% private in your browser.',
      decodeBtn: 'Decode Somatic Map & Release',
      resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR SOMATIC RELEASE PROTOCOL',
      meterLoad: 'Somatic Bracing Load',
      meterZones: 'Active Tension Zones',
      stepsTitle: 'Zone-Matched Somatic Unwinding Steps',
      startPmr: 'Start 60s PMR Release',
      stopPmr: 'Stop',
      storyBtn: 'Save 1080×1920 Story Card (PNG)',
      copyBtn: 'Copy Protocol',
      shareBtn: 'Share Tool',
      bridgeWotTitle: 'Window of Tolerance Check',
      bridgeWotDesc: 'Map Hyperarousal, Optimal Window, or Freeze with a vagal reset.',
      bridgeGroundingTitle: '5-4-3-2-1 Grounding Exercise',
      bridgeGroundingDesc: 'Anchor racing adrenaline with guided 5-sense orientation.',
      bridgeSleepTitle: 'Sleep Cycle & Circadian Reset',
      bridgeSleepDesc: 'Release physical cortisol before bed with a digital sunset plan.',
      refTitle: 'Scientific Frameworks & References',
      discTitle: 'Medical & Physical Safety Disclaimer',
      discText: 'This somatic relaxation guide is educational only and not medical advice. Never tense injured muscles, and seek urgent medical evaluation for unexplained chest pain or persistent symptoms.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: 'Check your nervous system state',
      stickySub: 'Map Hyperarousal, Optimal Window, or Freeze in 60 seconds',
      stickyBtn: 'Nervous System Check →',
      copied: 'Somatic release protocol copied!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Somatic Card saved!',
      needOne: 'Please tap at least 1 body zone first.',
      pmrReady: 'Ready for 4 cycles of gentle 5s engage → 10s slow exhale release.',
      pmrDone: '60-second PMR release complete! Scan your jaw, shoulders, and breath for subtle softness.'
    },
    ko: {
      title: '신체 스트레스 긴장 지도 & 60초 점진적 근육이완(PMR) | DopaBrain',
      metaDesc: '턱·어깨·가슴·복부·골반 등 스트레스가 쌓인 신체 부위를 탭해 긴장 패턴을 해독하고 60초 점진적 근육이완(PMR)을 실행하세요.',
      skip: '신체 긴장 지도로 이동',
      back: '← 도구 목록',
      langLabel: '언어:',
      kicker: '신체 감각 스캔 & 근육이완 랩',
      heroTitle: '신체 스트레스 긴장 지도 & 60초 PMR',
      heroLead: '스트레스가 머리로 폭발하기 전에 몸이 먼저 신호를 보냅니다. 지금 뻣뻣하거나 조이는 부위를 선택해 맞춤형 60초 점진적 근육이완(PMR)을 바로 시작하세요.',
      chip1: '6개 신체 긴장 존',
      chip2: '60초 PMR 이완 페이서',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 현재 긴장된 신체 부위 선택',
      step1Title: '지금 내 몸의 어디에 힘이 들어가 있나요?',
      step1Sub: '조이거나 무거운 부위를 하나 이상 선택하세요 (브라우저에만 저장됩니다).',
      decodeBtn: '긴장 패턴 분석 & 이완 프로토콜',
      resetBtn: '초기화',
      resultBadge: '2단계 • 부위별 맞춤형 신체 이완 프로토콜',
      meterLoad: '신체 방어 긴장도',
      meterZones: '활성 긴장 부위',
      stepsTitle: '선택 부위 맞춤 이완 가이드',
      startPmr: '60초 PMR 이완 시작',
      stopPmr: '중지',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)',
      copyBtn: '프로토콜 복사',
      shareBtn: '도구 공유',
      bridgeWotTitle: '인내의 창 신경계 체크',
      bridgeWotDesc: '과각성·최적 구간·저각성을 구분하고 60초 미주신경 리셋을 실행합니다.',
      bridgeGroundingTitle: '5-4-3-2-1 감각 그라운딩',
      bridgeGroundingDesc: '급격한 아드레날린 상승을 오감 안정화로 빠르게 가라앉힙니다.',
      bridgeSleepTitle: '수면 주기 & 생체리듬 리셋',
      bridgeSleepDesc: '잠들기 전 코르티솔 긴장을 낮추는 디지털 선셋 시간을 계산합니다.',
      refTitle: '과학적 프레임워크 및 참고문헌',
      discTitle: '의학 및 신체 안전 안내',
      discText: '본 신체 이완 가이드는 교육용이며 의학적 조언이 아닙니다. 부상 부위에 힘을 주지 마시고, 원인 불명의 흉통이나 지속적인 신체 증상은 반드시 전문의의 진료를 받으세요.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '자율신경계 현재 상태를 확인해 보세요',
      stickySub: '과각성·최적 창·기능적 동결 여부를 60초 만에 매핑합니다',
      stickyBtn: '신경계 체크 →',
      copied: '신체 이완 프로토콜을 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 신체 이완 카드를 저장했습니다!',
      needOne: '긴장된 신체 부위를 1곳 이상 선택해 주세요.',
      pmrReady: '부드럽게 5초 힘주기 → 10초 천천히 내쉬며 풀기 4사이클 준비 완료.',
      pmrDone: '60초 PMR 이완 완료! 턱, 어깨, 호흡이 한결 부드러워졌는지 느껴보세요.'
    },
    zh: { title: '身体压力紧张地图与 60 秒渐进式肌肉放松 | DopaBrain', heroTitle: '身体压力紧张地图 & 60秒 PMR', decodeBtn: '解析紧张部位与放松方案', resetBtn: '重置', startPmr: '开始 60 秒 PMR 放松', stopPmr: '停止', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制方案', shareBtn: '分享', back: '← 工具目录', stickyBtn: '神经系统自检 →' },
    ja: { title: '体のストレス緊張マップ＆60秒筋弛緩法(PMR) | DopaBrain', heroTitle: '体の緊張マップ＆60秒PMR', decodeBtn: '緊張パターンと緩和手順を見る', resetBtn: 'リセット', startPmr: '60秒PMRリラックス開始', stopPmr: '停止', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ツール一覧', stickyBtn: '神経系チェック →' },
    es: { title: 'Mapa Somático de Tensión Corporal + PMR 60s | DopaBrain', heroTitle: 'Mapa Somático de Tensión y PMR 60s', decodeBtn: 'Decodificar tensión corporal', resetBtn: 'Reiniciar', startPmr: 'Iniciar PMR de 60s', stopPmr: 'Detener', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Catálogo', stickyBtn: 'Sistema nervioso →' },
    pt: { title: 'Mapa Somático de Tensão Corporal + PMR 60s | DopaBrain', heroTitle: 'Mapa Somático de Tensão e PMR', decodeBtn: 'Decodificar mapa somático', resetBtn: 'Redefinir', startPmr: 'Iniciar PMR de 60s', stopPmr: 'Parar', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Catálogo', stickyBtn: 'Sistema nervoso →' },
    de: { title: 'Somatische Stress-Körperkarte + 60s PMR | DopaBrain', heroTitle: 'Körper-Spannungskarte & 60s PMR', decodeBtn: 'Spannungsmuster entschlüsseln', resetBtn: 'Zurücksetzen', startPmr: '60s PMR starten', stopPmr: 'Stopp', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Katalog', stickyBtn: 'Nervensystem-Check →' },
    fr: { title: 'Carte Somatique des Tensions + PMR 60s | DopaBrain', heroTitle: 'Carte des Tensions & Relaxation PMR', decodeBtn: 'Analyser mes tensions', resetBtn: 'Réinitialiser', startPmr: 'Lancer PMR 60s', stopPmr: 'Arrêter', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Catalogue', stickyBtn: 'Système nerveux →' },
    ru: { title: 'Соматическая карта напряжения + 60с ПМР | DopaBrain', heroTitle: 'Карта телесного напряжения и ПМР', decodeBtn: 'Расшифровать напряжение', resetBtn: 'Сбросить', startPmr: 'Старт 60с релаксации', stopPmr: 'Стоп', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Каталог', stickyBtn: 'Нервная система →' },
    hi: { title: 'सोमैटिक स्ट्रेस बॉडी मैप और 60s PMR | DopaBrain', heroTitle: 'शरीर तनाव मैप और 60s PMR रिलीज़', decodeBtn: 'तनाव पैटर्न देखें', resetBtn: 'रीसेट', startPmr: '60s PMR शुरू करें', stopPmr: 'रोकें', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← कैटलॉग', stickyBtn: 'नर्वस सिस्टम चेक →' },
    id: { title: 'Peta Ketegangan Somatik & Relaksasi PMR 60 Detik | DopaBrain', heroTitle: 'Peta Ketegangan Tubuh & PMR 60d', decodeBtn: 'Analisis Ketegangan Tubuh', resetBtn: 'Reset', startPmr: 'Mulai PMR 60 Detik', stopPmr: 'Berhenti', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Katalog', stickyBtn: 'Cek Sistem Saraf →' },
    tr: { title: 'Somatik Stres Vücut Haritası + 60 sn PMR | DopaBrain', heroTitle: 'Vücut Gerginlik Haritası & PMR', decodeBtn: 'Gerginlik Haritasını Çöz', resetBtn: 'Sıfırla', startPmr: '60 sn PMR Başlat', stopPmr: 'Durdur', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Katalog', stickyBtn: 'Sinir Sistemi →' }
  };

  var ZONES = [
    {
      id: 'jaw', emoji: '😬',
      enName: 'Jaw, Temples & Forehead', koName: '턱·관자놀이·미간',
      enSub: 'Clenched teeth, brow furrow, held-back words', koSub: '어금니 악물기, 찌푸린 미간, 참아온 말',
      enStep: 'Jaw Unclench: Drop your tongue from the roof of your mouth, part your back teeth slightly, and massage your jawline for 15 seconds.',
      koStep: '턱 이완: 입천장에 붙은 혀를 아래로 툭 떨어뜨리고 어금니 사이를 살짝 벌린 채 턱선을 15초간 부드럽게 마사지하세요.'
    },
    {
      id: 'shoulders', emoji: '🏋️',
      enName: 'Neck & Upper Shoulders', koName: '목·승모근·어깨',
      enSub: 'Shoulders crept up toward ears, carrying heavy load', koSub: '귀 쪽으로 올라간 어깨, 과도한 책임감 긴장',
      enStep: 'Shoulder Contrast Drop: Gently lift both shoulders up toward your ears for 5 seconds, then let them fall completely on a slow audible sigh.',
      koStep: '어깨 대비 이완: 양쪽 어깨를 귀 쪽으로 5초간 부드럽게 끌어올렸다가, 입으로 길게 한숨 내쉬며 아래로 툭 떨어뜨리세요.'
    },
    {
      id: 'chest', emoji: '🫁',
      enName: 'Chest & Upper Breath', koName: '가슴·얕은 호흡',
      enSub: 'Shallow chest breathing, urgency, tight ribcage', koSub: '가슴 답답함, 얕고 빠른 숨, 조급함',
      enStep: 'Extended Exhale Rib Softening: Place one warm palm on your sternum and exhale 2 seconds longer than your inhale (4s in / 6s out).',
      koStep: '흉곽 날숨 이완: 따뜻한 손바닥을 가슴 중앙에 얹고 4초 들숨, 6초 길게 내쉬며 갈비뼈 긴장을 풀어주세요.'
    },
    {
      id: 'gut', emoji: '🌀',
      enName: 'Stomach & Diaphragm', koName: '명치·복부 뭉침',
      enSub: 'Butterflies, tight belly, anticipatory worry', koSub: '명치 답답함, 배에 들어간 힘, 예기 불안',
      enStep: 'Belly Unbracing: Unclench your abdominal wall consciously on each exhale — imagine your lower ribs expanding sideways like an umbrella.',
      koStep: '복부 힘 빼기: 숨을 내쉴 때마다 배에 들어간 힘을 의식적으로 풀고, 아랫배가 부드럽게 부풀도록 허용하세요.'
    },
    {
      id: 'hips', emoji: '🪑',
      enName: 'Lower Back & Hips (Psoas)', koName: '허리·고관절·골반',
      enSub: 'Seated stiffness, fight-or-flight hip bracing', koSub: '오래 앉은 뻣뻣함, 도피 근육(장요근) 경직',
      enStep: 'Psoas Release Shift: Stand up or uncross your legs, press both feet evenly into the floor, and gently sway your weight left and right.',
      koStep: '골반·발바닥 착지: 꼬았던 다리를 풀고 양발 바닥 전체로 지면을 지그시 누르며 체중을 좌우로 부드럽게 흔들어 주세요.'
    },
    {
      id: 'hands', emoji: '✊',
      enName: 'Hands, Forearms & Eyes', koName: '손·팔뚝·눈 피로',
      enSub: 'Screen glare fatigue, gripping mouse/phone tightly', koSub: '화면 눈 피로, 스마트폰·마우스를 꽉 쥔 긴장',
      enStep: '20-20-20 & Hand Shake: Look 20 feet away for 20 seconds while gently shaking both hands loose at the wrists.',
      koStep: '시야 원거리 전환 & 손목 털기: 20초간 먼 곳을 바라보며 양손과 손목을 가볍게 털어 긴장을 배출하세요.'
    }
  ];

  var currentLang = 'en';
  var selected = { jaw: true, shoulders: true };
  var currentResult = null;
  var pmrId = null;
  var pmrLeft = 60;

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

  function t(key) { return (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || key; }
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

  function renderZones() {
    var grid = document.getElementById('zoneGrid');
    if (!grid) return;
    grid.textContent = '';
    for (var i = 0; i < ZONES.length; i++) {
      (function (z) {
        var on = Boolean(selected[z.id]);
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'toggle-card' + (on ? ' active' : '');
        btn.setAttribute('data-zone', z.id);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        var s = document.createElement('strong');
        s.textContent = z.emoji + ' ' + (isKo() ? z.koName : z.enName);
        var sp = document.createElement('span');
        sp.textContent = isKo() ? z.koSub : z.enSub;
        btn.appendChild(s);
        btn.appendChild(sp);
        btn.addEventListener('click', function () { selected[z.id] = !selected[z.id]; renderZones(); });
        grid.appendChild(btn);
      })(ZONES[i]);
    }
  }

  function toast(msg) {
    var el = document.createElement('div');
    el.className = 'wl-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2600);
  }

  function stopPmr() {
    if (pmrId) { clearInterval(pmrId); pmrId = null; }
  }

  function fmt(s) {
    var m = Math.floor(s / 60);
    var r = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }

  function startPmr() {
    stopPmr();
    pmrLeft = 60;
    var clockEl = document.getElementById('pmrClock');
    var cueEl = document.getElementById('pmrCue');
    if (clockEl) clockEl.textContent = '01:00';
    if (cueEl) cueEl.textContent = isKo() ? '사이클 1/4: 어깨·주먹에 5초간 부드럽게 힘을 주세요…' : 'Cycle 1/4: Gently engage tense muscles (30% effort) for 5 seconds…';

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'somatic_pmr_start', {
          event_category: 'wellness_tool',
          tool_slug: 'somatic-tension-body-map',
          language: currentLang
        });
      } catch (e) {}
    }

    pmrId = setInterval(function () {
      pmrLeft -= 1;
      if (clockEl) clockEl.textContent = fmt(Math.max(0, pmrLeft));
      if (pmrLeft <= 0) {
        stopPmr();
        if (cueEl) cueEl.textContent = t('pmrDone');
        return;
      }
      var elapsed = 60 - pmrLeft;
      var cycle = Math.floor(elapsed / 15) + 1;
      var inCycle = elapsed % 15;
      if (cueEl) {
        if (inCycle < 5) {
          cueEl.textContent = isKo()
            ? ('사이클 ' + cycle + '/4: 5초간 부드럽게 긴장 인식하기…')
            : ('Cycle ' + cycle + '/4: Gently tense (30% effort) for 5 seconds…');
        } else {
          cueEl.textContent = isKo()
            ? ('사이클 ' + cycle + '/4: 입으로 길게 내쉬며 10초간 모든 힘 툭 내려놓기…')
            : ('Cycle ' + cycle + '/4: Exhale slowly and let every fiber drop heavy for 10 seconds…');
        }
      }
    }, 1000);
  }

  function decodeMap() {
    var active = ZONES.filter(function (z) { return Boolean(selected[z.id]); });
    if (active.length === 0) {
      toast(t('needOne'));
      return;
    }
    var loadPct = Math.round((active.length / ZONES.length) * 100);
    currentResult = { activeIds: active.map(function (z) { return z.id; }), count: active.length, loadPct: loadPct };
    renderResult();

    var card = document.getElementById('resultCard');
    if (card) {
      card.hidden = false;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'somatic_map_complete', {
          event_category: 'wellness_tool',
          tool_slug: 'somatic-tension-body-map',
          language: currentLang
        });
      } catch (e) {}
    }
  }

  function renderResult() {
    if (!currentResult) return;
    stopPmr();
    pmrLeft = 60;
    var clockEl = document.getElementById('pmrClock');
    var cueEl = document.getElementById('pmrCue');
    if (clockEl) clockEl.textContent = '01:00';
    if (cueEl) cueEl.textContent = t('pmrReady');

    var active = ZONES.filter(function (z) { return currentResult.activeIds.indexOf(z.id) !== -1; });
    var titleEl = document.getElementById('verdictTitle');
    var descEl = document.getElementById('verdictDesc');
    if (currentResult.count >= 4) {
      if (titleEl) titleEl.textContent = isKo() ? '전신 방어 긴장 패턴 (높은 교감신경 부하)' : 'Full-Body Protective Bracing Pattern';
      if (descEl) descEl.textContent = isKo() ? '여러 부위에 동시에 긴장이 쌓여 있습니다. 생각으로 풀려 하지 말고 아래 60초 PMR 대비 이완으로 몸부터 먼저 내려놓으세요.' : 'Multiple muscle groups are bracing simultaneously. Use the 60-second contrast release below to send a bottom-up safety signal.';
    } else if (currentResult.count >= 2) {
      if (titleEl) titleEl.textContent = isKo() ? '국소 누적 긴장 패턴 (중간 부하)' : 'Focused Somatic Tension Pattern';
      if (descEl) descEl.textContent = isKo() ? '특정 부위에 스트레스 신호가 집중되고 있습니다. 지금 60초만 투자해 만성 통증과 피로로 굳어지기 전에 풀어주세요.' : 'Stress is concentrating in a few specific armor zones. Unwind them now with 60 seconds of targeted contrast relaxation.';
    } else {
      if (titleEl) titleEl.textContent = isKo() ? '초기 미세 긴장 감지 (조기 리셋 적기)' : 'Early Micro-Tension Signal (Ideal Reset Window)';
      if (descEl) descEl.textContent = isKo() ? '몸이 보내는 초기 신호를 아주 잘 포착했습니다. 짧은 호흡과 이완으로 부드러운 컨디션을 유지하세요.' : 'Great body awareness — catching tension in a single zone makes a 60-second release remarkably fast.';
    }

    var lPct = document.getElementById('loadPct');
    var lFill = document.getElementById('loadFill');
    var zCnt = document.getElementById('zoneCountOut');
    var zFill = document.getElementById('zoneFill');
    if (lPct) lPct.textContent = currentResult.loadPct + '%';
    if (lFill) lFill.style.width = currentResult.loadPct + '%';
    if (zCnt) zCnt.textContent = currentResult.count + ' / ' + ZONES.length;
    if (zFill) zFill.style.width = currentResult.loadPct + '%';

    var list = document.getElementById('releaseList');
    if (list) {
      list.textContent = '';
      for (var i = 0; i < Math.min(4, active.length); i++) {
        var li = document.createElement('li');
        li.textContent = isKo() ? active[i].koStep : active[i].enStep;
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
    renderZones();
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

    var decodeBtn = document.getElementById('decodeBtn');
    if (decodeBtn) decodeBtn.addEventListener('click', decodeMap);

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        stopPmr();
        selected = { jaw: true, shoulders: true };
        currentResult = null;
        renderZones();
        var card = document.getElementById('resultCard');
        if (card) card.hidden = true;
      });
    }

    var startBtn = document.getElementById('startPmrBtn');
    if (startBtn) startBtn.addEventListener('click', startPmr);

    var stopBtn = document.getElementById('stopPmrBtn');
    if (stopBtn) stopBtn.addEventListener('click', stopPmr);

    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        if (!currentResult) return;
        var active = ZONES.filter(function (z) { return currentResult.activeIds.indexOf(z.id) !== -1; });
        var txt = (document.getElementById('verdictTitle')?.textContent || '') + '\n\n' + active.map(function (z, idx) { return (idx + 1) + '. ' + (isKo() ? z.koStep : z.enStep); }).join('\n');
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
        var shareUrl = 'https://dopabrain.com/portal/tools/somatic-tension-body-map.html?lang=' + currentLang;
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
        var active = ZONES.filter(function (z) { return currentResult.activeIds.indexOf(z.id) !== -1; });
        var ok = window.DopaBrainStoryCard.downloadStoryCard({
          slug: 'somatic-tension-body-map',
          badge: t('kicker'),
          emoji: '🧘',
          toolName: t('heroTitle'),
          headline: document.getElementById('verdictTitle')?.textContent || '',
          subtitle: document.getElementById('verdictDesc')?.textContent || '',
          accent: '#0ea5e9',
          accent2: '#10b981',
          metrics: [
            { label: t('meterLoad'), pct: currentResult.loadPct, color: '#0ea5e9' },
            { label: t('meterZones'), pct: currentResult.loadPct, valueText: currentResult.count + '/6', color: '#10b981' }
          ],
          takeawayLabel: t('stepsTitle'),
          takeaway: active[0] ? (isKo() ? active[0].koStep : active[0].enStep) : '',
          footerUrl: 'dopabrain.com/portal/tools/somatic-tension-body-map.html'
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
