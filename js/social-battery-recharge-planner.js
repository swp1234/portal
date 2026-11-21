/* Social Battery & Introvert / HSP Recharge Calculator
 * 100% client-side, deterministic, privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Social Battery & Introvert / HSP Recharge Calculator | DopaBrain',
      metaDesc: 'Free 12-language Social Battery Calculator for introverts and HSPs. Measure remaining social energy, calculate solitude recharge minutes, and get a polite exit script.',
      skip: 'Skip to Social Battery Calculator',
      back: '← Tools Catalog',
      langLabel: 'Language:',
      kicker: 'INTROVERT & HSP ENERGY LAB',
      heroTitle: 'Social Battery & Recharge Calculator',
      heroLead: 'Check your live Social Battery percentage after meetings, crowds, or masking — and get an instant solitude recharge plan, polite early-exit script, and 1080×1920 Story Card.',
      chip1: '6 Social Drainers',
      chip2: 'Polite Exit Scripts',
      chip3: '100% Private (Local)',
      step1Badge: "STEP 1 • TEMPERAMENT & TODAY'S DRAINERS",
      step1Title: 'What drained your social energy today?',
      step1Sub: 'Choose your baseline temperament, then tap every social or sensory drainer you experienced today.',
      tempLabel: 'Your Social Energy Baseline:',
      calcBtn: 'Calculate My Social Battery',
      resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR SOCIAL BATTERY & RECHARGE PLAN',
      meterBat: 'Remaining Social Battery',
      meterRec: 'Recommended Quiet Recharge',
      menuTitle: '3-Step Low-Input Decompression Menu',
      exitTitle: 'Warm, Guilt-Free Early-Exit Script',
      storyBtn: 'Save 1080×1920 Battery Card (PNG)',
      copyBtn: 'Copy Exit Script',
      shareBtn: 'Share Tool',
      bridgeSensoryTitle: '5-Minute Sensory Reset',
      bridgeSensoryDesc: 'Lower noise, light, and overstimulation with a timed pocket plan.',
      bridgeBoundaryTitle: 'Boundary Script Generator',
      bridgeBoundaryDesc: 'Decline extra plans clearly without over-explaining or guilt.',
      bridgeWotTitle: 'Window of Tolerance Check',
      bridgeWotDesc: 'Check nervous-system arousal and launch a 60s vagal reset.',
      refTitle: 'Scientific Frameworks & References',
      discTitle: 'Editorial Self-Reflection Disclaimer',
      discText: 'This social energy calculator is a recreational self-awareness and sensory-pacing aid, not a clinical assessment.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: "Need to decline tonight's extra plan?",
      stickySub: 'Generate a warm, guilt-free boundary script in 10 seconds',
      stickyBtn: 'Boundary Scripts →',
      copied: 'Polite exit script copied!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Social Battery Card saved!',
      tIntro: 'Introvert / HSP',
      tAmbi: 'Ambivert',
      tExtra: 'Extravert (Overextended)'
    },
    ko: {
      title: '사회적 배터리 & 내향인·HSP 충전 계산기 | DopaBrain',
      metaDesc: '회의·모임·눈치 보기 후 남은 사회적 배터리(%)와 필요한 혼자만의 충전 시간, 죄책감 없이 먼저 귀가하는 정중한 멘트를 즉시 계산하세요.',
      skip: '사회적 배터리 계산기로 이동',
      back: '← 도구 목록',
      langLabel: '언어:',
      kicker: '내향인 & HSP 에너지 랩',
      heroTitle: '사회적 배터리 & 충전 계산기',
      heroLead: '오늘 모임·화상회의·감정노동으로 소진된 사회적 배터리 잔량(%)을 확인하고, 필요한 고요한 회복 시간과 정중한 조기 귀가 스크립트·스토리 카드를 받아보세요.',
      chip1: '6가지 소진 요인',
      chip2: '정중한 귀가 멘트',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 기질 선택 및 오늘의 소진 요인',
      step1Title: '오늘 어떤 상황이 사회적 에너지를 깎아먹었나요?',
      step1Sub: '평소 에너지 기질을 고르고, 오늘 겪은 사회적·감각적 소진 항목을 모두 선택하세요.',
      tempLabel: '나의 평소 사회적 에너지 기질:',
      calcBtn: '내 사회적 배터리 계산하기',
      resetBtn: '초기화',
      resultBadge: '2단계 • 현재 사회적 배터리 & 회복 처방',
      meterBat: '남은 사회적 배터리',
      meterRec: '권장 혼자만의 충전 시간',
      menuTitle: '저자극 감각 회복 메뉴 3단계',
      exitTitle: '죄책감 없는 정중한 조기 귀가·거절 스크립트',
      storyBtn: '1080×1920 배터리 카드 저장 (PNG)',
      copyBtn: '귀가 멘트 복사',
      shareBtn: '도구 공유',
      bridgeSensoryTitle: '5분 감각 리셋 카드',
      bridgeSensoryDesc: '소음·조명·사람 과자극을 즉시 낮추는 5분 포켓 플랜.',
      bridgeBoundaryTitle: '거절·경계선 스크립트 빌더',
      bridgeBoundaryDesc: '무리한 약속을 죄책감이나 긴 변명 없이 정중히 거절합니다.',
      bridgeWotTitle: '인내의 창 신경계 체크',
      bridgeWotDesc: '현재 과각성/저각성 구간을 확인하고 60초 미주신경 리셋을 실행합니다.',
      refTitle: '과학적 프레임워크 및 참고문헌',
      discTitle: '편집 및 자기성찰 안내',
      discText: '본 사회적 에너지 계산기는 자기이해와 감각 조절을 돕는 교육용 도구이며 의학적 진단이 아닙니다.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '오늘 저녁 추가 약속을 정중히 거절해야 하나요?',
      stickySub: '10초 만에 부담 없는 경계선 스크립트를 만들어 보세요',
      stickyBtn: '거절 스크립트 →',
      copied: '정중한 귀가 스크립트를 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 사회적 배터리 카드를 저장했습니다!',
      tIntro: '내향인 / HSP (고민감)',
      tAmbi: '양향인 (상황별)',
      tExtra: '외향인 (에너지 과소비)'
    },
    zh: { title: '社交电量与内向者/HSP 充电计算器 | DopaBrain', heroTitle: '社交电量与独处充电计算器', calcBtn: '计算我的社交电量', resetBtn: '重置', storyBtn: '保存 1080×1920 电量卡 (PNG)', copyBtn: '复制离场话术', shareBtn: '分享工具', back: '← 工具目录', stickyBtn: '边界话术 →' },
    ja: { title: 'ソーシャルバッテリー＆内向型・HSP充電計算機 | DopaBrain', heroTitle: 'ソーシャルバッテリー＆充電計算機', calcBtn: 'バッテリー残量を計算', resetBtn: 'リセット', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'フレーズをコピー', shareBtn: '共有', back: '← ツール一覧', stickyBtn: '断り方スクリプト →' },
    es: { title: 'Calculadora de Batería Social y Recarga HSP | DopaBrain', heroTitle: 'Calculadora de Batería Social', calcBtn: 'Calcular mi batería social', resetBtn: 'Reiniciar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar guión', shareBtn: 'Compartir', back: '← Catálogo', stickyBtn: 'Guiones de límites →' },
    pt: { title: 'Calculadora de Bateria Social e Recarga HSP | DopaBrain', heroTitle: 'Calculadora de Bateria Social', calcBtn: 'Calcular bateria social', resetBtn: 'Redefinir', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar frase', shareBtn: 'Compartilhar', back: '← Catálogo', stickyBtn: 'Roteiros de limites →' },
    de: { title: 'Soziale Batterie & Introvertiert/HSP-Ladeplaner | DopaBrain', heroTitle: 'Soziale Batterie & Lade-Rechner', calcBtn: 'Soziale Batterie berechnen', resetBtn: 'Zurücksetzen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Skript kopieren', shareBtn: 'Teilen', back: '← Katalog', stickyBtn: 'Grenzen-Skripte →' },
    fr: { title: 'Calculateur de Batterie Sociale & Recharge HSP | DopaBrain', heroTitle: 'Batterie Sociale & Plan de Recharge', calcBtn: 'Calculer ma batterie sociale', resetBtn: 'Réinitialiser', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier le script', shareBtn: 'Partager', back: '← Catalogue', stickyBtn: 'Scripts limites →' },
    ru: { title: 'Калькулятор социальной батарейки и отдыха HSP | DopaBrain', heroTitle: 'Калькулятор социальной батарейки', calcBtn: 'Рассчитать заряд', resetBtn: 'Сбросить', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать фразу', shareBtn: 'Поделиться', back: '← Каталог', stickyBtn: 'Скрипты границ →' },
    hi: { title: 'सोशल बैटरी और इंट्रोवर्ट / HSP रिचार्ज कैलकुलेटर | DopaBrain', heroTitle: 'सोशल बैटरी रिचार्ज कैलकुलेटर', calcBtn: 'मेरी सोशल बैटरी जांचें', resetBtn: 'रीसेट', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'स्क्रिप्ट कॉपी करें', shareBtn: 'शेयर करें', back: '← कैटलॉग', stickyBtn: 'बाउंड्री स्क्रिप्ट →' },
    id: { title: 'Kalkulator Baterai Sosial & Pemulihan Introvert/HSP | DopaBrain', heroTitle: 'Kalkulator Baterai Sosial', calcBtn: 'Hitung Baterai Sosialku', resetBtn: 'Reset', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin Skrip', shareBtn: 'Bagikan', back: '← Katalog', stickyBtn: 'Skrip Batasan →' },
    tr: { title: 'Sosyal Pil ve İçe Dönük / HSP Şarj Hesaplayıcı | DopaBrain', heroTitle: 'Sosyal Pil & Şarj Hesaplayıcı', calcBtn: 'Sosyal Pilimi Hesapla', resetBtn: 'Sıfırla', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Metni Kopyala', shareBtn: 'Paylaş', back: '← Katalog', stickyBtn: 'Sınır Metinleri →' }
  };

  var DRAINERS = [
    { id: 'meetings', cost: 16, emoji: '💻', enName: 'Back-to-Back Calls / Meetings', koName: '연속 화상회의·미팅', enSub: 'Camera-on focus and rapid verbal turn-taking', koSub: '카메라 켠 상태의 연속 대화와 집중 소모' },
    { id: 'crowds', cost: 18, emoji: '🏙️', enName: 'Crowded / Noisy Environment', koName: '시끄럽고 붐비는 공간', enSub: 'Bright lights, overlapping voices, transit rush', koSub: '강한 조명, 겹치는 소음, 혼잡한 이동' },
    { id: 'smalltalk', cost: 14, emoji: '🗣️', enName: 'Extended Small Talk', koName: '길어진 스몰토크·어색한 자리', enSub: 'Keeping polite surface conversation flowing', koSub: '어색한 공백을 메우며 이어간 사교 대화' },
    { id: 'masking', cost: 22, emoji: '🎭', enName: 'Social Masking / People-Pleasing', koName: '감정노동·눈치 보기·가면 쓰기', enSub: 'Monitoring tone, smiling through exhaustion', koSub: '피곤한데도 밝은 척 표정과 말투를 계속 관리함' },
    { id: 'interruptions', cost: 12, emoji: '🔔', enName: 'Constant Pings & Interruptions', koName: '끊임없는 알림과 흐름 방해', enSub: 'Context switches with zero quiet buffer', koSub: '메신저·호출로 혼자 집중할 틈이 없었음' },
    { id: 'venting', cost: 16, emoji: '🌧️', enName: 'Absorbing Others\' Heavy Emotions', koName: '타인의 감정·고민 떠안기', enSub: 'High empathy listening without decompression', koSub: '높은 공감력으로 남의 불안을 고스란히 흡수함' }
  ];

  var currentLang = 'en';
  var temperament = 'intro';
  var selected = { meetings: true, masking: true };
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

  function renderControls() {
    var tempRow = document.getElementById('tempRow');
    if (tempRow) {
      tempRow.textContent = '';
      var temps = [
        { id: 'intro', label: t('tIntro') },
        { id: 'ambi', label: t('tAmbi') },
        { id: 'extra', label: t('tExtra') }
      ];
      for (var i = 0; i < temps.length; i++) {
        (function (tp) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'preset-btn' + (temperament === tp.id ? ' active' : '');
          b.setAttribute('data-temp', tp.id);
          b.setAttribute('aria-pressed', temperament === tp.id ? 'true' : 'false');
          b.textContent = tp.label;
          b.addEventListener('click', function () { temperament = tp.id; renderControls(); });
          tempRow.appendChild(b);
        })(temps[i]);
      }
    }

    var grid = document.getElementById('drainerGrid');
    if (grid) {
      grid.textContent = '';
      for (var j = 0; j < DRAINERS.length; j++) {
        (function (dr) {
          var on = Boolean(selected[dr.id]);
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'toggle-card' + (on ? ' active' : '');
          btn.setAttribute('data-drainer', dr.id);
          btn.setAttribute('aria-pressed', on ? 'true' : 'false');
          var s = document.createElement('strong');
          s.textContent = dr.emoji + ' ' + (isKo() ? dr.koName : dr.enName);
          var sp = document.createElement('span');
          sp.textContent = isKo() ? dr.koSub : dr.enSub;
          btn.appendChild(s);
          btn.appendChild(sp);
          btn.addEventListener('click', function () {
            selected[dr.id] = !selected[dr.id];
            renderControls();
          });
          grid.appendChild(btn);
        })(DRAINERS[j]);
      }
    }
  }

  function toast(msg) {
    var el = document.createElement('div');
    el.className = 'wl-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2600);
  }

  function calculate() {
    var mult = temperament === 'intro' ? 1.2 : (temperament === 'ambi' ? 1.0 : 0.8);
    var drain = 0;
    for (var i = 0; i < DRAINERS.length; i++) {
      if (selected[DRAINERS[i].id]) drain += Math.round(DRAINERS[i].cost * mult);
    }
    var battery = Math.max(5, Math.min(100, 100 - drain));
    var rechargeMins = Math.max(15, Math.min(120, Math.round((100 - battery) * 1.15)));

    var tier = battery <= 25 ? 'critical' : (battery <= 55 ? 'low' : 'steady');
    currentResult = { battery: battery, rechargeMins: rechargeMins, tier: tier };
    renderResult();

    var card = document.getElementById('resultCard');
    if (card) {
      card.hidden = false;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'social_battery_complete', {
          event_category: 'wellness_tool',
          tool_slug: 'social-battery-recharge-planner',
          language: currentLang
        });
      } catch (e) {}
    }
  }

  function getTierCopy(res) {
    if (res.tier === 'critical') {
      return {
        title: isKo() ? '배터리 위험 구간 — 즉시 저자극 휴식 모드' : 'Critical Battery — Immediate Low-Input Recovery',
        desc: isKo() ? '사회적·감각적 과부하가 임계치에 도달했습니다. 오늘은 추가 약속이나 답장을 미루고 빛과 소리를 줄인 완전한 혼자만의 시간이 필요합니다.' : 'Your sensory and social circuits are near empty. Pause non-urgent replies and claim uninterrupted low-stimulation quiet tonight.',
        steps: isKo() ? [
          '즉시 10분 차단: 방해금지 모드를 켜고 조명을 낮춘 뒤, 이어폰·소음 없이 10분간 눈을 쉬게 하세요.',
          '스크롤 금지 원칙: SNS 피드는 뇌를 계속 사회적 비교 모드에 묶어둡니다. 따뜻한 샤워나 조용한 산책으로 전환하세요.',
          '내일 완충 여백: 내일 오전 첫 60분은 대화 없는 단독 작업으로 비워두세요.'
        ] : [
          '10-Minute Sensory Cutoff: Switch on Do Not Disturb, dim lights, and sit without voices or screens for 10 minutes.',
          'Skip Social Scrolling: Feeds keep your social brain firing. Choose a warm shower, silence, brown noise, or paper reading instead.',
          'Buffer Tomorrow: Protect the first 60 minutes tomorrow morning with zero meetings or calls.'
        ],
        exit: isKo()
          ? '"오늘 함께해서 정말 반가웠어요! 저는 내일 컨디션 관리 때문에 먼저 들어가 쉬려고 해요. 조심히 들어가시고 조만간 또 봬요."'
          : '"It was so good seeing everyone tonight! I\'m heading out a bit early to recharge for tomorrow — thanks for a lovely evening and talk soon."'
      };
    }
    if (res.tier === 'low') {
      return {
        title: isKo() ? '절전 모드 — 오늘 저녁 고요한 충전 필수' : 'Low-Power Mode — Protect Tonight\'s Quiet Buffer',
        desc: isKo() ? '아직 버틸 수는 있지만 방치하면 내일 "사회적 숙취"로 이어집니다. 오늘 밤 45~60분 정도 혼자만의 저자극 회복 시간을 확보하세요.' : 'You still have reserve fuel, but pushing through extra socializing will trigger a social hangover tomorrow. Schedule a quiet decompression window tonight.',
        steps: isKo() ? [
          '5분 전환 버퍼: 다음 일정이나 귀가 직후 바로 대화하지 말고 5분간 물 한 잔 마시며 혼자 숨을 고르세요.',
          '선택적 응답: 급하지 않은 개인 메시지는 "내일 여유 있을 때 천천히 답장"으로 미뤄도 괜찮습니다.',
          '저자극 취미 30분: 가벼운 스트레칭, 산책, 음악 감상 등 아무도 신경 쓰지 않는 활동에 몰입하세요.'
        ] : [
          '5-Minute Transition Buffer: Take 5 quiet minutes alone before diving into the next conversation or chore.',
          'Batch Replies: Leave non-urgent personal texts until tomorrow when your bandwidth is refreshed.',
          '30-Minute Solo Anchor: Enjoy one low-demand solo activity (walk, tea, instrumental music, or light fiction).'
        ],
        exit: isKo()
          ? '"초대해 주셔서 감사해요! 오늘은 에너지가 조금 소진돼서 집에서 쉬어야 할 것 같아요. 다음 주에 컨디션 좋을 때 꼭 같이 봐요."'
          : '"Thanks so much for inviting me! I\'m a little low on bandwidth tonight so I\'m going to stay in and recharge — let\'s catch up next week."'
      };
    }
    return {
      title: isKo() ? '안정 구간 — 여백 유지하며 페이싱하기' : 'Steady Charge — Maintain Healthy Social Pacing',
      desc: isKo() ? '아직 여유 에너지가 충분합니다. 무리하지 않고 일정 사이에 짧은 혼자만의 휴식을 끼워 넣으면 내일까지 컨디션을 안정적으로 유지할 수 있습니다.' : 'Your social battery is healthy right now. Keep micro-buffers between interactions so you stay energized instead of crashing later.',
      steps: isKo() ? [
        '15분 미니 리셋: 큰 약속 전후로 15분씩 조용한 혼자만의 준비·정리 시간을 확보하세요.',
        '깊은 대화 우선: 여러 사람과의 얕은 자리보다 마음이 편한 1~2명과의 교류가 에너지를 덜 소모합니다.',
        '종료 시간 미리 정하기: 모임 전에 "오늘은 9시까지만 있다 가야지"처럼 가벼운 종료선을 잡아두세요.'
      ] : [
        '15-Minute Bookends: Leave a 15-minute quiet buffer before and after social plans to prevent stealth drain.',
        'Prioritize Low-Masking Company: Favor relaxed 1-on-1 conversations over loud, high-masking groups.',
        'Pre-Set a Soft Exit Time: Decide in advance when you want to head home so you leave while still feeling good.'
      ],
      exit: isKo()
        ? '"오늘 너무 즐거웠어요! 저는 미리 정해둔 시간이 돼서 이만 일어나 볼게요. 다음에 또 편하게 만나요!"'
        : '"I had a great time catching up! I\'m going to head out now to keep my evening paced — let\'s do this again soon!"'
    };
  }

  function renderResult() {
    if (!currentResult) return;
    var copy = getTierCopy(currentResult);

    var big = document.getElementById('batteryBigNum');
    var titleEl = document.getElementById('verdictTitle');
    var descEl = document.getElementById('verdictDesc');
    if (big) big.textContent = currentResult.battery + '%';
    if (titleEl) titleEl.textContent = copy.title;
    if (descEl) descEl.textContent = copy.desc;

    var bPct = document.getElementById('batPct');
    var bFill = document.getElementById('batFill');
    var rMins = document.getElementById('recMins');
    var rFill = document.getElementById('recFill');
    if (bPct) bPct.textContent = currentResult.battery + '%';
    if (bFill) bFill.style.width = currentResult.battery + '%';
    if (rMins) rMins.textContent = currentResult.rechargeMins + (isKo() ? '분' : ' min');
    if (rFill) rFill.style.width = Math.min(100, Math.round((currentResult.rechargeMins / 120) * 100)) + '%';

    var list = document.getElementById('rechargeList');
    if (list) {
      list.textContent = '';
      for (var i = 0; i < copy.steps.length; i++) {
        var li = document.createElement('li');
        li.textContent = copy.steps[i];
        list.appendChild(li);
      }
    }

    var exitEl = document.getElementById('exitScriptOut');
    if (exitEl) exitEl.textContent = copy.exit;
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
    renderControls();
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

    var calcBtn = document.getElementById('calcBtn');
    if (calcBtn) calcBtn.addEventListener('click', calculate);

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        temperament = 'intro';
        selected = { meetings: true, masking: true };
        currentResult = null;
        renderControls();
        var card = document.getElementById('resultCard');
        if (card) card.hidden = true;
      });
    }

    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        if (!currentResult) return;
        var copy = getTierCopy(currentResult);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(copy.exit).then(function () { toast(t('copied')); }).catch(function () { toast(t('copied')); });
        } else {
          toast(t('copied'));
        }
      });
    }

    var shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        var shareUrl = 'https://dopabrain.com/portal/tools/social-battery-recharge-planner.html?lang=' + currentLang;
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
        var copy = getTierCopy(currentResult);
        var ok = window.DopaBrainStoryCard.downloadStoryCard({
          slug: 'social-battery-recharge-planner',
          badge: t('kicker'),
          emoji: '🔋',
          toolName: t('heroTitle'),
          headline: currentResult.battery + '% • ' + copy.title,
          subtitle: copy.desc,
          accent: '#10b981',
          accent2: '#06b6d4',
          metrics: [
            { label: t('meterBat'), pct: currentResult.battery, color: '#10b981' },
            { label: t('meterRec'), pct: Math.min(100, Math.round((currentResult.rechargeMins / 120) * 100)), valueText: currentResult.rechargeMins + 'm', color: '#38bdf8' }
          ],
          takeawayLabel: t('exitTitle'),
          takeaway: copy.exit,
          footerUrl: 'dopabrain.com/portal/tools/social-battery-recharge-planner.html'
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
