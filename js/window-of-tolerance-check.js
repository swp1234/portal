/* Window of Tolerance & Nervous System Check-In (12-Language Client-Side Engine)
 * Privacy-safe: somatic selections and results stay 100% local in browser.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Window of Tolerance & Nervous System Check-In | DopaBrain',
      metaDesc: 'Free 12-language Window of Tolerance self-check. Identify Hyperarousal, Optimal Window, or Hypoarousal and launch a state-matched somatic reset.',
      skip: 'Skip to Window of Tolerance Check-In',
      back: '← Tools Catalog',
      langLabel: 'Language:',
      kicker: 'SOMATIC NERVOUS SYSTEM MAP',
      heroTitle: 'Window of Tolerance & Nervous System Check-In',
      heroLead: 'Check whether your nervous system is currently in Hyperarousal (Fight/Flight), your Optimal Ventral Window, or Hypoarousal (Functional Freeze/Numbness) — and launch a matched 60-second somatic reset.',
      chip1: '6 Somatic Markers',
      chip2: '60s Vagal Re-Entry Pacer',
      chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • SCAN 6 SOMATIC SIGNALS',
      step1Title: 'How does your body feel right now?',
      step1Sub: 'Select the option that best matches your current physical and cognitive state across all 6 markers.',
      analyzeBtn: 'Map My Nervous System Zone',
      resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR CURRENT AROUSAL ZONE',
      zoneHyperTitle: 'Hyperarousal',
      zoneHyperSub: 'Fight / Flight • Over-activated',
      zoneOptTitle: 'Optimal Window',
      zoneOptSub: 'Grounded • Present • Flexible',
      zoneHypoTitle: 'Hypoarousal',
      zoneHypoSub: 'Freeze / Numb • Under-activated',
      meterHyper: 'Sympathetic Surge (Hyper)',
      meterHypo: 'Dorsal Shutdown (Hypo)',
      protocolTitle: 'State-Matched Vagal Re-Entry Protocol',
      startTimer: 'Start 60s Somatic Reset',
      stopTimer: 'Stop',
      storyBtn: 'Save 1080×1920 Story Card (PNG)',
      copyBtn: 'Copy Protocol',
      shareBtn: 'Share Tool',
      bridgeGroundingTitle: '5-4-3-2-1 Grounding Exercise',
      bridgeGroundingDesc: 'Fast sensory orienting to pull out of acute panic or racing thoughts.',
      bridgeBurnoutTitle: 'Burnout vs. Stress Check',
      bridgeBurnoutDesc: 'Separate temporary sympathetic overload from deep depletion.',
      bridgeDailyTitle: 'Daily Mind Check-In',
      bridgeDailyDesc: 'Track your 7-day baseline energy, calm, and focus locally.',
      refTitle: 'Scientific Frameworks & References',
      discTitle: 'Editorial & Somatic Self-Reflection Disclaimer',
      discText: 'This nervous system check-in is an educational self-regulation workspace and is not a medical or psychiatric diagnosis.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: 'Need an immediate sensory anchor?',
      stickySub: 'Try the interactive 5-4-3-2-1 Grounding Exercise',
      stickyBtn: 'Start Grounding →',
      copied: 'Somatic protocol copied locally!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Story Card saved!',
      needAll: 'Please select an option for all 6 somatic markers first.',
      timerReady: 'Ready for your 60-second state-matched somatic reset.',
      timerDone: '60-second somatic reset complete. Notice any subtle shift in your jaw, shoulders, or breath.',
      zoneBadgeHyper: 'HYPERAROUSAL • SYMPATHETIC SURGE',
      zoneBadgeOptimal: 'OPTIMAL VENTRAL WINDOW',
      zoneBadgeHypo: 'HYPOAROUSAL • FUNCTIONAL FREEZE',
      zoneBadgeMixed: 'MIXED AUTONOMIC STATE • WIRED & TIRED'
    },
    ko: {
      title: '인내의 창(Window of Tolerance) 신경계 자가체크 | DopaBrain',
      metaDesc: '과각성(투쟁/도피), 최적의 창, 저각성(기능적 동결/감정 무감각) 상태를 6가지 신체 신호로 진단하고 맞춤형 60초 미주신경 리셋을 시작하세요.',
      skip: '신경계 자가체크 본문으로 이동',
      back: '← 도구 목록',
      langLabel: '언어:',
      kicker: '자율신경계 체성 매핑',
      heroTitle: '인내의 창 & 신경계 자가체크',
      heroLead: '현재 내 자율신경계가 과각성(긴장/불안), 최적의 창(안정), 저각성(기능적 동결/무기력) 중 어디에 있는지 확인하고 상태별 60초 신체 리셋을 실행하세요.',
      chip1: '6가지 신체 신호',
      chip2: '60초 미주신경 페이서',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 6가지 신체 신호 스캔',
      step1Title: '지금 내 몸과 머리의 감각은 어떤가요?',
      step1Sub: '6가지 항목마다 지금 상태에 가장 가까운 선택지를 고르세요.',
      analyzeBtn: '내 신경계 구간 확인하기',
      resetBtn: '초기화',
      resultBadge: '2단계 • 현재 자율신경계 구간',
      zoneHyperTitle: '과각성 (Hyperarousal)',
      zoneHyperSub: '투쟁/도피 • 교감신경 과활성',
      zoneOptTitle: '최적의 창 (Optimal)',
      zoneOptSub: '안정 • 현재 집중 • 유연함',
      zoneHypoTitle: '저각성 (Hypoarousal)',
      zoneHypoSub: '동결/무감각 • 에너지 셧다운',
      meterHyper: '교감신경 과각성 지수',
      meterHypo: '배측 미주신경 저각성 지수',
      protocolTitle: '상태 맞춤형 신경계 재진입 프로토콜',
      startTimer: '60초 신체 리셋 시작',
      stopTimer: '중지',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)',
      copyBtn: '프로토콜 복사',
      shareBtn: '도구 공유',
      bridgeGroundingTitle: '5-4-3-2-1 그라운딩 연습',
      bridgeGroundingDesc: '급격한 불안과 과각성을 즉각 낮추는 오감 안정화 도구.',
      bridgeBurnoutTitle: '번아웃 vs 스트레스 감별',
      bridgeBurnoutDesc: '일시적 과부하와 만성 에너지 고갈을 명확히 구분합니다.',
      bridgeDailyTitle: '데일리 마인드 체크인',
      bridgeDailyDesc: '7일간 나의 에너지·안정감·집중력 흐름을 로컬에 기록합니다.',
      refTitle: '과학적 프레임워크 및 참고문헌',
      discTitle: '편집 및 자기성찰 안내',
      discText: '본 신경계 체크인은 교육용 자기조절 도구이며 의학적 또는 정신건강의학적 진단이 아닙니다.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '지금 바로 오감 안정화가 필요하신가요?',
      stickySub: '대화형 5-4-3-2-1 그라운딩 연습으로 신경계를 진정시키세요',
      stickyBtn: '그라운딩 시작 →',
      copied: '신체 리셋 프로토콜을 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 스토리 카드를 저장했습니다!',
      needAll: '6가지 신체 신호 항목을 모두 선택해 주세요.',
      timerReady: '상태에 맞춘 60초 신경계 리셋 준비가 완료되었습니다.',
      timerDone: '60초 리셋 완료! 턱, 어깨, 호흡의 미세한 변화를 느껴보세요.',
      zoneBadgeHyper: '과각성 • 교감신경 급상승',
      zoneBadgeOptimal: '최적의 인내의 창',
      zoneBadgeHypo: '저각성 • 기능적 동결 상태',
      zoneBadgeMixed: '혼합 상태 • 긴장과 탈진 공존'
    },
    zh: {
      title: '耐受窗口与神经系统自检 | DopaBrain',
      heroTitle: '耐受窗口与神经系统自检',
      heroLead: '识别你当前处于高唤醒（战/逃）、最佳稳定窗口还是低唤醒（功能性冻结/麻木），并启动匹配的 60 秒躯体复位。',
      analyzeBtn: '定位我的神经系统区域',
      resetBtn: '重置',
      startTimer: '开始 60 秒躯体复位',
      stopTimer: '停止',
      storyBtn: '保存 1080×1920 分享卡片 (PNG)',
      copyBtn: '复制方案',
      shareBtn: '分享工具',
      back: '← 工具目录',
      stickyBtn: '开始着陆练习 →'
    },
    ja: {
      title: '耐性の窓（Window of Tolerance）神経系チェック | DopaBrain',
      heroTitle: '耐性の窓＆自律神経チェックイン',
      heroLead: '現在の神経系が過覚醒（闘争・逃走）、最適ウィンドウ、低覚醒（フリーズ・感情の麻痺）のどこにあるかを確認し、60秒の体感覚リセットを行います。',
      analyzeBtn: '神経系ゾーンを診断',
      resetBtn: 'リセット',
      startTimer: '60秒ソマティック・リセット開始',
      stopTimer: '停止',
      storyBtn: '1080×1920 ストーリーカード保存 (PNG)',
      copyBtn: 'プロトコルをコピー',
      shareBtn: 'ツールを共有',
      back: '← ツール一覧',
      stickyBtn: 'グラウンディング開始 →'
    },
    es: {
      title: 'Ventana de Tolerancia y Chequeo del Sistema Nervioso | DopaBrain',
      heroTitle: 'Ventana de Tolerancia y Sistema Nervioso',
      heroLead: 'Identifica si estás en Hiperactivación, Ventana Óptima o Hipoactivación (congelamiento) y activa un reinicio somático de 60 segundos.',
      analyzeBtn: 'Mapear mi zona nerviosa',
      resetBtn: 'Reiniciar',
      startTimer: 'Iniciar reinicio de 60s',
      stopTimer: 'Detener',
      storyBtn: 'Guardar tarjeta 1080×1920 (PNG)',
      copyBtn: 'Copiar protocolo',
      shareBtn: 'Compartir herramienta',
      back: '← Catálogo de herramientas',
      stickyBtn: 'Iniciar anclaje →'
    },
    pt: {
      title: 'Janela de Tolerância e Check-In do Sistema Nervoso | DopaBrain',
      heroTitle: 'Janela de Tolerância e Sistema Nervioso',
      heroLead: 'Identifique se você está em Hiperativação, Janela Ótima ou Hipoativação (congelamento) e inicie um reset somático de 60 segundos.',
      analyzeBtn: 'Mapear minha zona nervosa',
      resetBtn: 'Redefinir',
      startTimer: 'Iniciar reset de 60s',
      stopTimer: 'Parar',
      storyBtn: 'Salvar cartão 1080×1920 (PNG)',
      copyBtn: 'Copiar protocolo',
      shareBtn: 'Compartilhar ferramenta',
      back: '← Catálogo de ferramentas',
      stickyBtn: 'Iniciar aterramento →'
    },
    de: {
      title: 'Toleranzfenster & Nervensystem-Check-In | DopaBrain',
      heroTitle: 'Toleranzfenster & Nervensystem-Check',
      heroLead: 'Erkenne, ob du in Hyperarousal, im optimalen Fenster oder in Hypoarousal (Freeze) bist, und starte einen passenden 60-Sekunden-Reset.',
      analyzeBtn: 'Nervensystem-Zone bestimmen',
      resetBtn: 'Zurücksetzen',
      startTimer: '60s-Reset starten',
      stopTimer: 'Stopp',
      storyBtn: '1080×1920 Story-Karte speichern (PNG)',
      copyBtn: 'Protokoll kopieren',
      shareBtn: 'Tool teilen',
      back: '← Tool-Katalog',
      stickyBtn: 'Grounding starten →'
    },
    fr: {
      title: 'Fenêtre de Tolérance & Bilan du Système Nerveux | DopaBrain',
      heroTitle: 'Fenêtre de Tolérance & Système Nerveux',
      heroLead: 'Identifiez si vous êtes en hyperactivation, fenêtre optimale ou hypoactivation (figement) et lancez une régulation somatique de 60s.',
      analyzeBtn: 'Cartographier ma zone',
      resetBtn: 'Réinitialiser',
      startTimer: 'Lancer le reset de 60s',
      stopTimer: 'Arrêter',
      storyBtn: 'Enregistrer la carte 1080×1920 (PNG)',
      copyBtn: 'Copier le protocole',
      shareBtn: 'Partager l’outil',
      back: '← Catalogue des outils',
      stickyBtn: 'Commencer l’ancrage →'
    },
    ru: {
      title: 'Окно толерантности и проверка нервной системы | DopaBrain',
      heroTitle: 'Окно толерантности и нервная система',
      heroLead: 'Определите текущую зону (гипервозбуждение, оптимум или оцепенение) и запустите подходящую 60-секундную соматическую настройку.',
      analyzeBtn: 'Определить зону',
      resetBtn: 'Сбросить',
      startTimer: 'Старт 60с сброса',
      stopTimer: 'Стоп',
      storyBtn: 'Сохранить карточку 1080×1920 (PNG)',
      copyBtn: 'Копировать протокол',
      shareBtn: 'Поделиться',
      back: '← Каталог инструментов',
      stickyBtn: 'К заземлению →'
    },
    hi: {
      title: 'विंडो ऑफ टॉलरेंस और नर्वस सिस्टम चेक-इन | DopaBrain',
      heroTitle: 'विंडो ऑफ टॉलरेंस चेक-इन',
      heroLead: 'जांचें कि आपका नर्वस सिस्टम हाइपरअराउज़ल, ऑप्टिमल विंडो या फ्रीज़ ज़ोन में है और 60 सेकंड का सोमैटिक रीसेट शुरू करें।',
      analyzeBtn: 'मेरा नर्वस ज़ोन देखें',
      resetBtn: 'रीसेट',
      startTimer: '60s रीसेट शुरू करें',
      stopTimer: 'रोकें',
      storyBtn: '1080×1920 स्टोरी कार्ड सेव करें (PNG)',
      copyBtn: 'प्रोटोकॉल कॉपी करें',
      shareBtn: 'टूल शेयर करें',
      back: '← टूल्स कैटलॉग',
      stickyBtn: 'ग्राउंडिंग शुरू करें →'
    },
    id: {
      title: 'Cek Window of Tolerance & Sistem Saraf | DopaBrain',
      heroTitle: 'Cek Window of Tolerance & Sistem Saraf',
      heroLead: 'Kenali apakah sistem sarafmu berada di Hyperarousal, Zona Optimal, atau Hypoarousal (Freeze) dan mulai reset somatik 60 detik.',
      analyzeBtn: 'Petakan Zona Sarafku',
      resetBtn: 'Reset',
      startTimer: 'Mulai Reset 60 Detik',
      stopTimer: 'Berhenti',
      storyBtn: 'Simpan Kartu 1080×1920 (PNG)',
      copyBtn: 'Salin Protokol',
      shareBtn: 'Bagikan Alat',
      back: '← Katalog Alat',
      stickyBtn: 'Mulai Grounding →'
    },
    tr: {
      title: 'Tolerans Penceresi ve Sinir Sistemi Kontrolü | DopaBrain',
      heroTitle: 'Tolerans Penceresi Kontrolü',
      heroLead: 'Sinir sisteminizin aşırı uyarılma, optimal pencere veya donma (hipo-uyarılma) bölgesinde olup olmadığını belirleyin ve 60 sn somatik sıfırlamayı başlatın.',
      analyzeBtn: 'Sinir Bölgemi Belirle',
      resetBtn: 'Sıfırla',
      startTimer: '60 sn Sıfırlamayı Başlat',
      stopTimer: 'Durdur',
      storyBtn: '1080×1920 Hikaye Kartını Kaydet (PNG)',
      copyBtn: 'Protokolü Kopyala',
      shareBtn: 'Aracı Paylaş',
      back: '← Araç Kataloğu',
      stickyBtn: 'Topraklamaya Başla →'
    }
  };

  var MARKERS = [
    {
      id: 'breath',
      en: '1. Breathing & Heart Tempo',
      ko: '1. 호흡과 심박 속도',
      opts: [
        { val: 'hyper', en: 'Fast, shallow, tight chest', ko: '빠르고 얕은 호흡, 가슴 답답함' },
        { val: 'optimal', en: 'Steady, rhythmic, easy exhale', ko: '안정적이고 부드러운 호흡' },
        { val: 'hypo', en: 'Very slow, heavy sighing, low air', ko: '느리고 무거운 한숨, 기운 없음' }
      ]
    },
    {
      id: 'muscles',
      en: '2. Muscle Tone & Posture',
      ko: '2. 근육 긴장도와 자세',
      opts: [
        { val: 'hyper', en: 'Clenched jaw, raised shoulders, restless', ko: '악문 턱, 올라간 어깨, 안절부절' },
        { val: 'optimal', en: 'Relaxed yet upright and mobile', ko: '이완되어 있으면서도 안정된 자세' },
        { val: 'hypo', en: 'Heavy limbs, slumped, hard to move', ko: '팔다리가 무겁고 움직이기 힘듦' }
      ]
    },
    {
      id: 'thoughts',
      en: '3. Thought Speed & Clarity',
      ko: '3. 생각의 속도와 명료함',
      opts: [
        { val: 'hyper', en: 'Racing loops, urgent worst-case thoughts', ko: '꼬리를 무는 걱정, 급박한 최악 시나리오' },
        { val: 'optimal', en: 'Clear, flexible, able to prioritize', ko: '명료하고 유연하게 우선순위 판단 가능' },
        { val: 'hypo', en: 'Brain fog, blank mind, zoned out', ko: '브레인 포그, 멍함, 생각이 멈춘 느낌' }
      ]
    },
    {
      id: 'emotion',
      en: '4. Emotional Signal',
      ko: '4. 현재 감정 신호',
      opts: [
        { val: 'hyper', en: 'Anxious, irritable, on edge, overwhelmed', ko: '불안, 예민, 초조, 압도되는 느낌' },
        { val: 'optimal', en: 'Grounded, curious, able to feel without flooding', ko: '차분함, 호기심, 감정을 감당 가능함' },
        { val: 'hypo', en: 'Numb, detached, flat, hopeless', ko: '무감각, 붕 뜬 느낌, 공허함·무기력' }
      ]
    },
    {
      id: 'social',
      en: '5. Social & Communication Impulse',
      ko: '5. 대인관계 및 소통 충동',
      opts: [
        { val: 'hyper', en: 'Defensive, hyper-vigilant, urge to fix fast', ko: '방어적, 눈치 살핌, 당장 해결해야 할 것 같음' },
        { val: 'optimal', en: 'Open to safe connection or calm solo time', ko: '편안한 대화나 건강한 혼자만의 시간 가능' },
        { val: 'hypo', en: 'Shut down, avoiding messages, wanting to vanish', ko: '연락 회피, 모든 것을 끊고 숨고 싶음' }
      ]
    },
    {
      id: 'energy',
      en: '6. Action Readiness',
      ko: '6. 행동 에너지 수준',
      opts: [
        { val: 'hyper', en: 'Wired, multitasking frantically, cannot stop', ko: '과열 상태, 멈추지 못하고 계속 무언가 함' },
        { val: 'optimal', en: 'Balanced energy for one focused step', ko: '한 가지 일에 차분히 집중할 에너지 있음' },
        { val: 'hypo', en: 'Stuck in functional freeze / scrolling paralysis', ko: '기능적 동결, 멍하니 스크롤하며 멈춰 있음' }
      ]
    }
  ];

  var PROFILES = {
    hyper: {
      enTitle: 'Hyperarousal Zone (Fight / Flight Surge)',
      koTitle: '과각성 구간 (투쟁 / 도피 교감신경 급상승)',
      enDesc: 'Your nervous system is signaling threat or overload with high sympathetic energy. Avoid forcing big decisions right now—first lengthen your exhale to activate the parasympathetic brake.',
      koDesc: '교감신경이 위협이나 과부하 신호를 강하게 보내고 있습니다. 지금 큰 결정을 내리기보다, 날숨을 길게 내쉬어 부교감신경 브레이크를 먼저 작동시키세요.',
      enSteps: [
        'Physiological Sigh (×3): Take two short inhales through your nose, then one long slow exhale through your mouth.',
        'Temperature Shift: Place cool water or a cold glass against your wrists or cheekbones for 15 seconds.',
        'Peripheral Gaze: Soften your eyes and notice the far left and right edges of the room without turning your head.'
      ],
      koSteps: [
        '생리적 한숨 3회: 코로 짧게 두 번 들이마시고(들숨+추가 들숨), 입으로 길고 천천히 내쉬세요.',
        '온도 전환: 찬물이나 차가운 컵을 손목이나 광대뼈에 15초간 대어 미주신경을 진정시키세요.',
        '주변 시야 확장: 고개를 고정한 채 눈의 힘을 풀고 방의 양쪽 끝 시야를 넓게 바라보세요.'
      ],
      cuesEn: [
        'Inhale slowly for 4 seconds…',
        'Top-up micro-inhale, then exhale gently for 8 seconds…',
        'Unclench your jaw and drop both shoulders 2 centimeters…',
        'Widen your gaze to the edges of the room…'
      ],
      cuesKo: [
        '4초간 코로 천천히 들이마세요…',
        '입으로 8초간 길고 부드럽게 내쉬며 긴장을 내려놓으세요…',
        '어금니 힘을 풀고 양쪽 어깨를 아래로 툭 떨어뜨리세요…',
        '시야를 넓혀 방의 양쪽 끝을 부드럽게 인식해 보세요…'
      ]
    },
    optimal: {
      enTitle: 'Optimal Window of Tolerance (Ventral Safety)',
      koTitle: '최적의 인내의 창 (안정 및 유연 구간)',
      enDesc: 'Your autonomic system is currently balanced and regulated. This is the ideal zone for creative work, honest boundary conversations, and building resilience reserves.',
      koDesc: '현재 자율신경계가 균형 잡힌 최적 구간에 있습니다. 중요한 결정, 솔직한 경계 대화, 회복 탄력성을 쌓기에 가장 좋은 상태입니다.',
      enSteps: [
        'Coherent Breathing (5s in / 5s out): Lock in calm vagal tone for 60 seconds.',
        'Savor 1 Anchor: Name one thing in your environment right now that feels steady or supportive.',
        'Single Priority Pick: Choose one meaningful 20-minute task while your cognitive clarity is high.'
      ],
      koSteps: [
        '5-5 공명 호흡: 5초 들숨, 5초 날숨으로 60초간 안정적인 미주신경 톤을 고정하세요.',
        '안전 앵커 인식: 지금 주변에서 편안하거나 든든하게 느껴지는 감각 하나를 10초간 음미하세요.',
        '핵심 과제 선택: 사고력이 명료한 지금, 가장 중요한 20분 과제 하나를 시작하세요.'
      ],
      cuesEn: [
        'Inhale smoothly for 5 seconds…',
        'Exhale smoothly for 5 seconds…',
        'Notice the steady support of the chair or floor beneath you…',
        'Carry this calm clarity into one intentional next step…'
      ],
      cuesKo: [
        '5초간 부드럽게 들이마세요…',
        '5초간 일정한 속도로 내쉬세요…',
        '몸을 받쳐주는 의자나 바닥의 단단한 지지감을 느껴보세요…',
        '이 고요한 명료함을 다음 한 걸음으로 이어가세요…'
      ]
    },
    hypo: {
      enTitle: 'Hypoarousal Zone (Functional Freeze / Shutdown)',
      koTitle: '저각성 구간 (기능적 동결 / 에너지 셧다운)',
      enDesc: 'Your nervous system has hit the dorsal brake to conserve energy after prolonged overwhelm. Skip harsh self-criticism or passive stillness—use tiny, warm sensory mobilization to thaw gently.',
      koDesc: '누적된 과부하로부터 자신을 보호하기 위해 배측 미주신경 브레이크가 켜진 상태입니다. 자책하거나 가만히 누워있기보다, 따뜻하고 작은 감각 움직임으로 서서히 시동을 거세요.',
      enSteps: [
        'Orient to 3 Colors: Slowly turn your head left and right, naming 3 bright objects out loud to wake visual cortex.',
        'Micro-Mobilization: Rub your palms together until warm, wiggle your toes, and stand up for 20 seconds.',
        'Low-Friction Activation: Sip warm water or step near sunlight before attempting any cognitive work.'
      ],
      koSteps: [
        '3가지 색깔 찾기: 고개를 천천히 좌우로 돌리며 눈에 띄는 밝은 색 사물 3개를 소리 내어 말하세요.',
        '미세 움직임 깨우기: 두 손바닥을 따뜻해질 때까지 비비고 발가락을 꼼지락거린 뒤 20초간 일어서세요.',
        '저마찰 시동: 무거운 일 대신 따뜻한 물 한 모금 마시기나 햇빛 보기로 에너지를 올리세요.'
      ],
      cuesEn: [
        'Rub both palms briskly together to generate gentle warmth…',
        'Slowly look left, then right, naming 3 objects you see…',
        'Press both feet firmly into the floor and lift your spine tall…',
        'Take an energizing inhale through your nose and roll your shoulders back…'
      ],
      cuesKo: [
        '양손바닥을 따뜻해질 때까지 가볍게 비벼 감각을 깨우세요…',
        '고개를 천천히 좌우로 돌려 눈에 보이는 사물 3가지를 확인하세요…',
        '양발 바닥을 땅에 단단히 누르며 척추를 가볍게 세워보세요…',
        '코로 상쾌하게 숨을 들이마시며 어깨를 뒤로 크게 돌려주세요…'
      ]
    },
    mixed: {
      enTitle: 'Mixed State (Wired & Tired / Freeze-Fight Oscillation)',
      koTitle: '혼합 구간 (긴장과 탈진의 동시 공존)',
      enDesc: 'You are carrying both high mental urgency (sympathetic) and physical exhaustion (dorsal brake). First discharge excess tension with a gentle shake, then orient calmly to safety.',
      koDesc: '머리는 초조하게 돌아가지만 몸은 방전된 복합 상태입니다. 먼저 가벼운 털어내기로 과긴장을 배출한 뒤, 부드러운 호흡으로 몸에 안전 신호를 보내세요.',
      enSteps: [
        '15-Second Hand Shake: Gently shake out your hands and wrists to discharge trapped sympathetic adrenaline.',
        'Supported Exhale: Sit back against a chair and extend your exhale 2 seconds longer than your inhale.',
        'Drop One Expectation: Pick one non-urgent demand today and consciously defer it to tomorrow.'
      ],
      koSteps: [
        '15초 손목 털기: 양손과 손목을 가볍게 털어내며 갇혀 있는 아드레날린 긴장을 배출하세요.',
        '등 기대어 내쉬기: 등받이에 편안히 기댄 채 들숨보다 날숨을 2초 길게 내쉬세요.',
        '기대치 하나 내려놓기: 오늘 당장 급하지 않은 일 하나를 의식적으로 내일로 미루세요.'
      ],
      cuesEn: [
        'Shake out your hands gently for 10 seconds to release built-up tension…',
        'Lean back, feel the backrest, and exhale slowly…',
        'Inhale 4 seconds, exhale 6 seconds—no force needed…',
        'Remind yourself: I do not need to solve everything in this minute…'
      ],
      cuesKo: [
        '10초간 양손을 가볍게 털어내며 쌓인 긴장을 밖으로 흘려보내세요…',
        '등받이에 편안히 기대어 천천히 숨을 내쉬세요…',
        '4초 들이마시고 6초 내쉬며 무리 없이 리듬을 맞추세요…',
        '스스로에게 말하세요: 지금 이 순간에 모든 것을 해결하지 않아도 괜찮다…'
      ]
    }
  };

  var currentLang = 'en';
  var answers = {};
  var currentResult = null;
  var timerId = null;
  var timerLeft = 60;

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

  function t(key) {
    return (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || key;
  }

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

  function renderQuestions() {
    var stack = document.getElementById('questionStack');
    if (!stack) return;
    stack.textContent = '';

    for (var i = 0; i < MARKERS.length; i++) {
      var m = MARKERS[i];
      var box = document.createElement('div');
      box.className = 'callout-box';
      box.style.marginBottom = '12px';

      var h3 = document.createElement('h3');
      h3.textContent = isKo() ? m.ko : m.en;
      box.appendChild(h3);

      var row = document.createElement('div');
      row.className = 'preset-grid';
      row.style.marginBottom = '0';

      for (var j = 0; j < m.opts.length; j++) {
        (function (markerId, opt) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'preset-btn' + (answers[markerId] === opt.val ? ' active' : '');
          btn.setAttribute('data-marker', markerId);
          btn.setAttribute('data-val', opt.val);
          btn.setAttribute('aria-pressed', answers[markerId] === opt.val ? 'true' : 'false');
          btn.textContent = isKo() ? opt.ko : opt.en;
          btn.addEventListener('click', function () {
            answers[markerId] = opt.val;
            renderQuestions();
          });
          row.appendChild(btn);
        })(m.id, m.opts[j]);
      }

      box.appendChild(row);
      stack.appendChild(box);
    }
  }

  function toast(msg) {
    var el = document.createElement('div');
    el.className = 'wl-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2600);
  }

  function stopTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function formatSec(s) {
    var m = Math.floor(s / 60);
    var r = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }

  function startTimer() {
    if (!currentResult) return;
    stopTimer();
    timerLeft = 60;
    var disp = document.getElementById('timerDisplay');
    var cueEl = document.getElementById('timerCue');
    var prof = PROFILES[currentResult.zone];
    var cues = isKo() ? prof.cuesKo : prof.cuesEn;

    if (disp) disp.textContent = formatSec(timerLeft);
    if (cueEl) cueEl.textContent = cues[0];

    if (typeof window.gtag === 'function') {
      try { window.gtag('event', 'wot_timer_start', { event_category: 'wellness_tool', tool_slug: 'window-of-tolerance-check', language: currentLang }); } catch (e) {}
    }

    timerId = setInterval(function () {
      timerLeft -= 1;
      if (disp) disp.textContent = formatSec(Math.max(0, timerLeft));
      if (timerLeft <= 0) {
        stopTimer();
        if (cueEl) cueEl.textContent = t('timerDone');
        return;
      }
      var idx = Math.min(cues.length - 1, Math.floor((60 - timerLeft) / 15));
      if (cueEl) cueEl.textContent = cues[idx];
    }, 1000);
  }

  function analyze() {
    var hyperCount = 0;
    var optCount = 0;
    var hypoCount = 0;
    var answered = 0;

    for (var i = 0; i < MARKERS.length; i++) {
      var v = answers[MARKERS[i].id];
      if (!v) continue;
      answered += 1;
      if (v === 'hyper') hyperCount += 1;
      else if (v === 'optimal') optCount += 1;
      else if (v === 'hypo') hypoCount += 1;
    }

    if (answered < MARKERS.length) {
      toast(t('needAll'));
      return;
    }

    var zone = 'optimal';
    if (hyperCount >= 2 && hypoCount >= 2 && Math.abs(hyperCount - hypoCount) <= 1) {
      zone = 'mixed';
    } else if (hyperCount > optCount && hyperCount >= hypoCount) {
      zone = 'hyper';
    } else if (hypoCount > optCount && hypoCount > hyperCount) {
      zone = 'hypo';
    } else if (optCount >= hyperCount && optCount >= hypoCount) {
      zone = 'optimal';
    }

    var hyperPct = Math.round((hyperCount / MARKERS.length) * 100);
    var hypoPct = Math.round((hypoCount / MARKERS.length) * 100);
    currentResult = { zone: zone, hyperPct: hyperPct, hypoPct: hypoPct };
    renderResult();

    var card = document.getElementById('resultCard');
    if (card) {
      card.hidden = false;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'wot_check_complete', {
          event_category: 'wellness_tool',
          tool_slug: 'window-of-tolerance-check',
          language: currentLang
        });
      } catch (e) {}
    }
  }

  function renderResult() {
    if (!currentResult) return;
    stopTimer();
    timerLeft = 60;
    var disp = document.getElementById('timerDisplay');
    var cueEl = document.getElementById('timerCue');
    if (disp) disp.textContent = '01:00';
    if (cueEl) cueEl.textContent = t('timerReady');

    var prof = PROFILES[currentResult.zone];
    var titleEl = document.getElementById('verdictTitle');
    var descEl = document.getElementById('verdictDesc');
    if (titleEl) titleEl.textContent = isKo() ? prof.koTitle : prof.enTitle;
    if (descEl) descEl.textContent = isKo() ? prof.koDesc : prof.enDesc;

    var zHyper = document.getElementById('zoneHyper');
    var zOpt = document.getElementById('zoneOptimal');
    var zHypo = document.getElementById('zoneHypo');
    if (zHyper) zHyper.className = 'wot-zone' + (currentResult.zone === 'hyper' || currentResult.zone === 'mixed' ? ' active-hyper' : '');
    if (zOpt) zOpt.className = 'wot-zone' + (currentResult.zone === 'optimal' ? ' active-optimal' : '');
    if (zHypo) zHypo.className = 'wot-zone' + (currentResult.zone === 'hypo' || currentResult.zone === 'mixed' ? ' active-hypo' : '');

    var hScore = document.getElementById('hyperScore');
    var hFill = document.getElementById('hyperFill');
    var lScore = document.getElementById('hypoScore');
    var lFill = document.getElementById('hypoFill');
    if (hScore) hScore.textContent = currentResult.hyperPct + '%';
    if (hFill) hFill.style.width = currentResult.hyperPct + '%';
    if (lScore) lScore.textContent = currentResult.hypoPct + '%';
    if (lFill) lFill.style.width = currentResult.hypoPct + '%';

    var list = document.getElementById('protocolList');
    if (list) {
      list.textContent = '';
      var steps = isKo() ? prof.koSteps : prof.enSteps;
      for (var i = 0; i < steps.length; i++) {
        var li = document.createElement('li');
        li.textContent = steps[i];
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
    renderQuestions();
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

    var analyzeBtn = document.getElementById('analyzeBtn');
    if (analyzeBtn) analyzeBtn.addEventListener('click', analyze);

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        stopTimer();
        answers = {};
        currentResult = null;
        renderQuestions();
        var card = document.getElementById('resultCard');
        if (card) card.hidden = true;
      });
    }

    var startBtn = document.getElementById('startTimerBtn');
    if (startBtn) startBtn.addEventListener('click', startTimer);

    var stopBtn = document.getElementById('stopTimerBtn');
    if (stopBtn) stopBtn.addEventListener('click', stopTimer);

    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        if (!currentResult) return;
        var prof = PROFILES[currentResult.zone];
        var steps = isKo() ? prof.koSteps : prof.enSteps;
        var txt = (isKo() ? prof.koTitle : prof.enTitle) + '\n\n' + steps.map(function (s, idx) { return (idx + 1) + '. ' + s; }).join('\n');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(txt).then(function () { toast(t('copied')); }).catch(function () { toast(t('copied')); });
        } else {
          toast(t('copied'));
        }
        if (typeof window.gtag === 'function') {
          try { window.gtag('event', 'wot_copy', { event_category: 'wellness_tool' }); } catch (e) {}
        }
      });
    }

    var shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        var shareUrl = 'https://dopabrain.com/portal/tools/window-of-tolerance-check.html?lang=' + currentLang;
        if (navigator.share) {
          navigator.share({ title: document.title, url: shareUrl }).catch(function () {});
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(shareUrl).then(function () { toast(t('shared')); }).catch(function () { toast(t('shared')); });
        } else {
          toast(t('shared'));
        }
        if (typeof window.gtag === 'function') {
          try { window.gtag('event', 'wot_share', { event_category: 'wellness_tool' }); } catch (e) {}
        }
      });
    }

    var storyBtn = document.getElementById('storyBtn');
    if (storyBtn) {
      storyBtn.addEventListener('click', function () {
        if (!currentResult || !window.DopaBrainStoryCard) return;
        var prof = PROFILES[currentResult.zone];
        var badgeMap = {
          hyper: t('zoneBadgeHyper'),
          optimal: t('zoneBadgeOptimal'),
          hypo: t('zoneBadgeHypo'),
          mixed: t('zoneBadgeMixed')
        };
        var accentMap = {
          hyper: '#f97316',
          optimal: '#10b981',
          hypo: '#6366f1',
          mixed: '#ec4899'
        };
        var steps = isKo() ? prof.koSteps : prof.enSteps;
        var ok = window.DopaBrainStoryCard.downloadStoryCard({
          slug: 'window-of-tolerance-check',
          badge: badgeMap[currentResult.zone] || 'WINDOW OF TOLERANCE',
          emoji: '🌊',
          toolName: t('heroTitle'),
          headline: isKo() ? prof.koTitle : prof.enTitle,
          subtitle: isKo() ? prof.koDesc : prof.enDesc,
          accent: accentMap[currentResult.zone] || '#14b8a6',
          accent2: '#38bdf8',
          metrics: [
            { label: t('meterHyper'), pct: currentResult.hyperPct, color: '#f97316' },
            { label: t('meterHypo'), pct: currentResult.hypoPct, color: '#818cf8' }
          ],
          takeawayLabel: t('protocolTitle'),
          takeaway: steps[0] || '',
          footerUrl: 'dopabrain.com/portal/tools/window-of-tolerance-check.html'
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
