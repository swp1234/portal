// Cross-Promotion Widget for DopaBrain Apps
// Include this script in any app: <script src="/portal/js/cross-promo.js" defer></script>
(function() {
    'use strict';

    // Detect current app from URL
    var path = window.location.pathname.replace(/\/$/, '').split('/').pop();
    var STORAGE_KEY = 'dopabrain_personalize';
    var MAX_HISTORY = 50;
    var SCAN_GUARD_DELAY_MS = 8000;
    var BLOG_BRIDGE_IDS = ['hsp-test', 'animal-personality', 'eq-test', 'attachment-style'];
    var EN_TOOL_BLOG_PATTERN = /\/portal\/blog\/en\/(?:qr-generator-guide|unit-converter-guide|password-generator-guide|typing-speed-test-guide|habit-tracker-guide|pomodoro-timer-guide|todo-list-guide|json-formatter-guide|free-games)\.html$/;
    var EN_TOOL_BRIDGE_IDS = ['qr-generator', 'unit-converter', 'password-generator', 'typing-speed'];
    var BLOG_TOPIC_STRATEGIES = [
        { key: 'self_check', pattern: /(?:hsp|sensory|highly-sensitive|emotional-regulation|emotion-management|cognitive-distortions|rumination|people-pleasing|trauma-response|attachment|avoidant|anxious|inner-child|shadow-work)/, ids: ['hsp-test', 'brain-type', 'dopamine-type', 'eq-test'], title: 'Try a matching self-check' },
        { key: 'fortune', pattern: /(?:tarot|past-life|dream|zodiac|fortune|numerology)/, ids: ['daily-tarot', 'past-life', 'dream-fortune', 'numerology'], title: 'Open a quick reading' },
        { key: 'productivity', pattern: /(?:habit|routine|pomodoro|todo|detox|focus|dopamine)/, ids: ['habit-tracker', 'pomodoro-timer', 'detox-timer', 'routine-planner'], title: 'Turn this into a quick tool' },
        { key: 'game', pattern: /(?:2048|brick|reaction|typing|free-games|browser-games|game-guide|casual-games|puzzle)/, ids: ['puzzle-2048', 'reaction-test', 'typing-speed', 'brick-breaker'], title: 'Play the related game now' },
        { key: 'kpop', pattern: /(?:kpop|k-pop)/, ids: ['kpop-position', 'aura-score', 'color-personality', 'animal-personality'], title: 'Try the related viral test' },
        { key: 'personality', pattern: /(?:mbti|personality-tests|personality-test|color-personality)/, ids: ['hsp-test', 'color-personality', 'animal-personality', 'eq-test'], title: 'Continue with a result test' }
    ];
    var BLOG_BRIDGE_BY_MARKET = {
        mx: ['animal-personality', 'brain-type', 'eq-test', 'attachment-style'],
        zh: ['mental-age', 'hsp-test', 'brain-type', 'dopamine-type', 'eq-test'],
        ja: ['brain-type', 'mbti-city', 'mental-age', 'hsp-test'],
        fr: ['brain-type', 'hsp-test', 'eq-test', 'animal-personality'],
        id: ['eq-test', 'hsp-test', 'attachment-style', 'brain-type'],
        de: ['brain-type', 'hsp-test', 'eq-test', 'mbti-city'],
        my: ['brain-type', 'iq-test', 'mental-age', 'rizz-score'],
        pt: ['mental-age', 'brain-type', 'animal-personality', 'eq-test'],
        ru: ['stress-check', 'animal-personality', 'brain-type', 'puzzle-2048'],
        hi: ['brain-type', 'iq-test', 'eq-test', 'anxiety-type'],
        tr: ['red-flag-test', 'anxiety-type', 'social-battery', 'brainrot-score'],
        sg: ['past-life', 'animal-personality', 'eq-test', 'attachment-style'],
        en: ['brain-type', 'hsp-test', 'animal-personality', 'eq-test'],
        ko: ['hsp-test', 'brain-type', 'dopamine-type', 'mbti-love']
    };
    var REVENUE_SPRINT_BY_MARKET = {
        en: ['brain-type', 'hsp-test', 'animal-personality', 'eq-test'],
        ko: ['hsp-test', 'brain-type', 'dopamine-type', 'mbti-love'],
        ja: ['brain-type', 'mbti-city', 'hsp-test', 'mental-age'],
        fr: ['brain-type', 'hsp-test', 'eq-test', 'animal-personality'],
        de: ['brain-type', 'hsp-test', 'eq-test', 'dopamine-type'],
        pt: ['mental-age', 'brain-type', 'animal-personality', 'eq-test'],
        mx: ['animal-personality', 'brain-type', 'eq-test', 'hsp-test'],
        id: ['eq-test', 'hsp-test', 'brain-type', 'dopamine-type'],
        zh: ['mental-age', 'hsp-test', 'brain-type', 'dopamine-type', 'eq-test'],
        global: ['hsp-test', 'brain-type', 'animal-personality', 'eq-test']
    };
    var APP_LABEL_OVERRIDES = {
        zh: {
            'hsp-test': { name: 'HSP 高敏感测试', shortDesc: '了解你的敏感度' },
            'brain-type': { name: '大脑类型测试', shortDesc: '发现你的思维模式' },
            'dopamine-type': { name: '多巴胺类型测试', shortDesc: '分析你的奖励系统' },
            'animal-personality': { name: '动物人格测试', shortDesc: '找到你的内在动物' },
            'eq-test': { name: 'EQ 情商测试', shortDesc: '测试你的情绪理解力' },
            'mbti-love': { name: 'MBTI 恋爱匹配', shortDesc: '看看你的恋爱风格' },
            'attachment-style': { name: '依恋类型测试', shortDesc: '确认你的关系模式' },
            'mental-age': { name: '心理年龄测试', shortDesc: '看看你的内在年龄' }
        }
    };
    var BLOG_BRIDGE_TITLES = {
        mx: 'Continua con una prueba rapida',
        zh: '继续探索中文热门路径',
        ja: '次におすすめの診断',
        fr: 'Continuez avec un test rapide',
        id: 'Lanjutkan dengan tes singkat',
        de: 'Weiter mit einem kurzen Test',
        my: 'Continue with a quick test',
        pt: 'Continue com um teste rapido',
        ru: 'Продолжите быстрым тестом',
        hi: 'अगला छोटा टेस्ट चुनें',
        tr: 'Kısa bir testle devam edin',
        sg: 'Start a quick result test',
        en: 'Continue with a quick test',
        ko: '이어서 해볼 인기 테스트'
    };

    var BLOG_BRIDGE_SAFE_TITLES = {
        mx: 'Continue with a quick test',
        zh: 'Continue with a quick test',
        ja: 'Continue with a quick test',
        fr: 'Continue with a quick test',
        id: 'Continue with a quick test',
        de: 'Continue with a quick test',
        my: 'Continue with a quick test',
        pt: 'Continue with a quick test',
        ru: 'Continue with a quick test',
        hi: 'Continue with a quick test',
        tr: 'Continue with a quick test',
        sg: 'Start a quick result test',
        en: 'Continue with a quick test',
        ko: 'Continue with a quick test',
        global: 'Continue with a quick test'
    };

    function getDeviceType() {
        if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return 'touch';
        if (window.matchMedia && window.matchMedia('(min-width: 900px)').matches) return 'desktop';
        return 'small_screen';
    }

    function getPathGroup() {
        var pathname = window.location.pathname || '/';
        if (pathname === '/' || pathname === '') return 'root';
        if (pathname.indexOf('/portal/blog/') === 0) return 'blog';
        if (pathname.indexOf('/portal/') === 0) return 'portal';
        return 'app';
    }

    function getBlogLocale() {
        var match = /^\/portal\/blog\/([^/]+)\//.exec(window.location.pathname || '');
        return match ? match[1].toLowerCase() : '';
    }

    function getBlogSlug() {
        var match = /^\/portal\/blog\/[^/]+\/([^/?#]+)\.html$/.exec(window.location.pathname || '');
        return match ? match[1].toLowerCase() : '';
    }

    function getStressPlanBridgeConfig() {
        var slug = getBlogSlug();
        if (!/(?:stress|burnout|overwhelm)/.test(slug)) return null;

        var locale = getBlogLocale();
        var copyByLocale = {
            ko: { kicker: '읽기에서 실천으로', title: '나의 7일 스트레스 리셋 플랜', desc: '가장 부담되는 영역을 고르고 오늘 할 작은 행동 하나부터 시작하세요.', action: '무료 플랜 만들기', scriptAction: '어려운 대화 문장 만들기' },
            en: { kicker: 'TURN READING INTO ACTION', title: 'Build your 7-day stress reset plan', desc: 'Choose your main pressure area and leave with one small action for today.', action: 'Build my free plan', scriptAction: 'Build a difficult-conversation script' },
            zh: { kicker: '从阅读到行动', title: '创建你的7天压力重置计划', desc: '选择主要压力领域，从今天一个小行动开始。', action: '免费创建计划', scriptAction: '生成困难对话话术' },
            hi: { kicker: 'पढ़ने से अभ्यास तक', title: 'अपनी 7-दिन की तनाव रीसेट योजना बनाएँ', desc: 'मुख्य दबाव क्षेत्र चुनें और आज के एक छोटे कदम से शुरू करें।', action: 'मुफ़्त योजना बनाएँ', scriptAction: 'कठिन बातचीत की स्क्रिप्ट बनाएँ' },
            ru: { kicker: 'ОТ ЧТЕНИЯ К ДЕЙСТВИЮ', title: 'Создайте 7-дневный план снижения стресса', desc: 'Выберите главную область давления и начните с одного небольшого шага.', action: 'Создать бесплатный план', scriptAction: 'Подготовить трудный разговор' },
            ja: { kicker: '読むだけで終わらせない', title: '7日間ストレス・リセットプランを作る', desc: '主な負担領域を選び、今日の小さな一歩から始めます。', action: '無料プランを作る', scriptAction: '難しい会話の文章を作る' },
            es: { kicker: 'DE LA LECTURA A LA ACCIÓN', title: 'Crea tu plan de 7 días para reducir el estrés', desc: 'Elige tu principal área de presión y empieza con una acción pequeña hoy.', action: 'Crear plan gratis', scriptAction: 'Crear un guión para una conversación difícil' },
            pt: { kicker: 'DA LEITURA PARA A AÇÃO', title: 'Crie seu plano de 7 dias para reduzir o estresse', desc: 'Escolha a principal área de pressão e comece com uma pequena ação hoje.', action: 'Criar plano grátis', scriptAction: 'Criar roteiro para uma conversa difícil' },
            id: { kicker: 'DARI MEMBACA KE BERTINDAK', title: 'Buat rencana reset stres 7 hari', desc: 'Pilih area tekanan utama dan mulai dengan satu tindakan kecil hari ini.', action: 'Buat rencana gratis', scriptAction: 'Buat skrip percakapan sulit' },
            tr: { kicker: 'OKUMADAN EYLEME', title: '7 günlük stres sıfırlama planını oluştur', desc: 'Ana baskı alanını seç ve bugün küçük bir adımla başla.', action: 'Ücretsiz plan oluştur', scriptAction: 'Zor konuşma metni oluştur' },
            de: { kicker: 'VOM LESEN ZUM HANDELN', title: 'Erstelle deinen 7-Tage-Stress-Reset-Plan', desc: 'Wähle deine Hauptbelastung und beginne heute mit einem kleinen Schritt.', action: 'Kostenlosen Plan erstellen', scriptAction: 'Text für ein schwieriges Gespräch erstellen' },
            fr: { kicker: 'DE LA LECTURE À L’ACTION', title: 'Créez votre plan anti-stress sur 7 jours', desc: 'Choisissez votre principale source de pression et commencez par une petite action.', action: 'Créer mon plan gratuit', scriptAction: 'Préparer une conversation difficile' }
        };
        var focus = /(?:workplace|work-stress|job-stress|career-stress)/.test(slug) ? 'work'
            : /(?:financial|money-stress|finance)/.test(slug) ? 'finance'
            : /(?:relationship|couple|family-stress)/.test(slug) ? 'relationship'
            : /(?:physical|chronic|sleep|health)/.test(slug) ? 'health'
            : 'daily';

        return {
            locale: /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale) ? locale : 'en',
            copy: copyByLocale[locale] || copyByLocale.en,
            focus: focus,
            url: '/stress-check/plan.html?lang=' + encodeURIComponent(locale || 'en')
                + '&focus=' + encodeURIComponent(focus)
                + '&level=moderate&source=blog_stress_bridge',
            scriptUrl: focus === 'work' || focus === 'relationship'
                ? '/stress-check/script.html?lang=' + encodeURIComponent(locale || 'en')
                    + '&context=' + encodeURIComponent(focus)
                    + '&tone=clear&source=blog_stress_bridge'
                : ''
        };
    }

    function getBoundaryScriptBridgeConfig() {
        var slug = getBlogSlug();
        var safeRelationshipPattern = /(?:people-pleasing|healthy-boundaries|boundaries-setting|conflict-resolution-relationship|relationship-tips)/;
        var safeWorkPattern = /(?:hsp-workplace-survival|emotional-intelligence-workplace)/;
        if (!safeRelationshipPattern.test(slug) && !safeWorkPattern.test(slug)) return null;

        var locale = getBlogLocale();
        var supportedLocale = /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale) ? locale : 'en';
        var copyByLocale = {
            ko: { kicker: '읽은 내용을 실제 문장으로', title: '경계와 부탁을 명확히 전하는 문장 만들기', desc: '상황, 부탁, 내가 취할 다음 행동을 입력하면 차분하고 구체적인 초안을 만듭니다.', action: '무료 대화문 만들기', libraryAction: '먼저 예문 둘러보기' },
            en: { kicker: 'TURN INSIGHT INTO WORDS', title: 'Draft a clear boundary or request', desc: 'Add the facts, your request, and your next action to build a calm, specific script.', action: 'Build my free script', libraryAction: 'Browse phrase examples first' },
            zh: { kicker: '把想法变成话语', title: '起草清晰的界限或请求', desc: '填写事实、你的请求和下一步行动，生成冷静而具体的表达草稿。', action: '免费生成对话稿', libraryAction: '先浏览表达示例' },
            hi: { kicker: 'समझ को शब्दों में बदलें', title: 'स्पष्ट सीमा या अनुरोध का मसौदा बनाएँ', desc: 'तथ्य, अपना अनुरोध और अगला कदम जोड़कर शांत और स्पष्ट संवाद तैयार करें।', action: 'मुफ़्त संवाद बनाएँ', libraryAction: 'पहले वाक्य उदाहरण देखें' },
            ru: { kicker: 'ПРЕВРАТИТЕ МЫСЛЬ В СЛОВА', title: 'Сформулируйте границу или просьбу', desc: 'Добавьте факты, просьбу и свой следующий шаг, чтобы получить спокойный и конкретный текст.', action: 'Создать текст бесплатно', libraryAction: 'Сначала посмотреть примеры' },
            ja: { kicker: '気づきを言葉に', title: '境界線やお願いを明確な文章にする', desc: '事実、お願い、自分の次の行動を入力して、落ち着いた具体的な下書きを作ります。', action: '無料で会話文を作る', libraryAction: 'まず例文を見る' },
            es: { kicker: 'CONVIERTE LA IDEA EN PALABRAS', title: 'Redacta un límite o una petición clara', desc: 'Añade los hechos, tu petición y tu siguiente paso para crear un guion sereno y concreto.', action: 'Crear mi guion gratis', libraryAction: 'Ver ejemplos primero' },
            pt: { kicker: 'TRANSFORME A IDEIA EM PALAVRAS', title: 'Escreva um limite ou pedido com clareza', desc: 'Adicione os fatos, seu pedido e o próximo passo para criar um roteiro calmo e específico.', action: 'Criar roteiro grátis', libraryAction: 'Ver exemplos primeiro' },
            id: { kicker: 'UBAH PEMAHAMAN MENJADI KATA', title: 'Susun batasan atau permintaan yang jelas', desc: 'Tambahkan fakta, permintaan, dan langkah berikutnya untuk membuat skrip yang tenang dan spesifik.', action: 'Buat skrip gratis', libraryAction: 'Lihat contoh frasa dahulu' },
            tr: { kicker: 'DÜŞÜNCEYİ SÖZE DÖK', title: 'Net bir sınır veya rica taslağı hazırla', desc: 'Sakin ve somut bir metin için gerçekleri, ricayı ve sonraki adımını ekle.', action: 'Ücretsiz metin oluştur', libraryAction: 'Önce örnekleri gör' },
            de: { kicker: 'AUS ERKENNTNIS WERDEN WORTE', title: 'Eine klare Grenze oder Bitte formulieren', desc: 'Ergänze Fakten, Bitte und nächsten Schritt für einen ruhigen, konkreten Gesprächsentwurf.', action: 'Kostenlosen Text erstellen', libraryAction: 'Zuerst Beispiele ansehen' },
            fr: { kicker: 'METTEZ VOS IDÉES EN MOTS', title: 'Formulez une limite ou une demande claire', desc: 'Ajoutez les faits, votre demande et votre prochaine action pour obtenir un texte calme et précis.', action: 'Créer mon texte gratuitement', libraryAction: 'Voir d’abord des exemples' }
        };
        var context = safeWorkPattern.test(slug) ? 'work' : 'relationship';

        return {
            locale: supportedLocale,
            copy: copyByLocale[supportedLocale],
            context: context,
            url: '/stress-check/script.html?lang=' + encodeURIComponent(supportedLocale)
                + '&context=' + encodeURIComponent(context)
                + '&tone=clear&source=blog_communication_bridge',
            libraryUrl: '/stress-check/library.html?lang=' + encodeURIComponent(supportedLocale)
                + '&context=' + encodeURIComponent(context)
                + '&tone=clear&source=blog_communication_bridge'
        };
    }

    function getSensoryResetBridgeConfig() {
        var slug = getBlogSlug();
        if (!/(?:sensory-overload-hsp-coping|hsp-coping-strategies-highly-sensitive)/.test(slug)) return null;

        var locale = getBlogLocale();
        var supportedLocale = /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale) ? locale : 'en';
        var copyByLocale = {
            ko: { kicker: '읽은 내용을 지금 활용하세요', title: '감각 과부하: 지금 리셋하거나 미리 계획하기', desc: '이미 자극이 강하면 5분 리셋을, 반복되는 환경을 준비하려면 감각 부하 지도를 선택하세요.', action: '5분 리셋 만들기', mapAction: '감각 부하 지도 만들기' },
            en: { kicker: 'USE THIS GUIDE NOW', title: 'Sensory overload: reset now or plan ahead', desc: 'Use the 5-minute reset when input is already intense, or map recurring environments before they become too much.', action: 'Build a 5-minute reset', mapAction: 'Build a sensory load map' },
            zh: { kicker: '立即使用这篇指南', title: '感官过载：立即重置或提前规划', desc: '刺激已经很强时使用5分钟重置；要准备反复出现的环境时，使用感官负荷地图。', action: '制作5分钟重置卡', mapAction: '制作感官负荷地图' },
            hi: { kicker: 'इस गाइड का अभी उपयोग करें', title: 'संवेदी भार: अभी रीसेट या आगे की योजना', desc: 'तेज़ इनपुट के लिए 5-मिनट रीसेट चुनें या दोहराते वातावरण की पहले से योजना बनाएँ।', action: '5-मिनट रीसेट बनाएँ', mapAction: 'संवेदी भार मानचित्र बनाएँ' },
            ru: { kicker: 'ИСПОЛЬЗУЙТЕ СОВЕТЫ СЕЙЧАС', title: 'Сенсорная нагрузка: сбросить или спланировать', desc: 'Выберите 5-минутный сброс при сильной нагрузке или заранее составьте карту среды.', action: 'Создать 5-минутную карточку', mapAction: 'Создать карту нагрузки' },
            ja: { kicker: 'ガイドを今すぐ活用', title: '感覚過負荷：今リセットするか事前に備える', desc: '刺激がすでに強い時は5分リセット、繰り返す環境には感覚負荷マップを使います。', action: '5分リセットを作る', mapAction: '感覚負荷マップを作る' },
            es: { kicker: 'USA ESTA GUÍA AHORA', title: 'Carga sensorial: reinicia o planifica', desc: 'Usa el reinicio de 5 minutos si el estímulo ya es intenso, o prepara un mapa para entornos recurrentes.', action: 'Crear reinicio de 5 minutos', mapAction: 'Crear mapa sensorial' },
            pt: { kicker: 'USE ESTE GUIA AGORA', title: 'Carga sensorial: resetar ou planejar', desc: 'Use o reset de 5 minutos quando o estímulo já estiver intenso ou planeje ambientes recorrentes.', action: 'Criar reset de 5 minutos', mapAction: 'Criar mapa sensorial' },
            id: { kicker: 'GUNAKAN PANDUAN INI SEKARANG', title: 'Beban sensorik: reset atau rencanakan', desc: 'Gunakan reset 5 menit saat input sudah intens, atau petakan lingkungan berulang sebelumnya.', action: 'Buat reset 5 menit', mapAction: 'Buat peta beban sensorik' },
            tr: { kicker: 'BU REHBERİ ŞİMDİ KULLAN', title: 'Duyusal yük: sıfırla veya planla', desc: 'Uyaran zaten yoğunsa 5 dakikalık sıfırlamayı, tekrarlanan ortamlar için haritayı seçin.', action: '5 dakikalık sıfırlama', mapAction: 'Duyusal yük haritası' },
            de: { kicker: 'RATGEBER JETZT ANWENDEN', title: 'Reizbelastung: jetzt senken oder vorausplanen', desc: 'Nutze den 5-Minuten-Reset bei akuter Belastung oder plane wiederkehrende Umgebungen.', action: '5-Minuten-Reset erstellen', mapAction: 'Belastungskarte erstellen' },
            fr: { kicker: 'UTILISEZ CE GUIDE MAINTENANT', title: 'Charge sensorielle : réduire ou anticiper', desc: 'Utilisez la carte de 5 minutes si la stimulation est forte, ou préparez les environnements récurrents.', action: 'Créer un reset de 5 minutes', mapAction: 'Créer une carte sensorielle' }
        };

        return {
            locale: supportedLocale,
            copy: copyByLocale[supportedLocale],
            url: '/hsp-test/reset.html?lang=' + encodeURIComponent(supportedLocale)
                + '&source=blog_sensory_bridge',
            mapUrl: '/hsp-test/map.html?lang=' + encodeURIComponent(supportedLocale)
                + '&source=blog_sensory_bridge'
        };
    }

    function getCoupleDeckBridgeConfig() {
        var slug = getBlogSlug();
        if (!/(?:^|-)(?:mbti-(?:love|compatibility)|love-compatibility)(?:-|$)/.test(slug)) return null;
        if (/(?:zodiac|valentine|biorhythm|name)/.test(slug)) return null;

        var locale = getBlogLocale();
        var supportedLocale = /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale) ? locale : 'en';
        var copyByLocale = {
            ko: { kicker: '궁합 점수 다음에는 실제 대화', title: '둘이 함께 뽑는 MBTI 커플 대화 카드', desc: '가볍게, 더 가까이, 관계 회복 중 오늘의 분위기를 고르고 한 장씩 이야기해 보세요.', action: '무료 카드 덱 열기' },
            en: { kicker: 'AFTER COMPATIBILITY, TALK', title: 'Draw an MBTI couple conversation card', desc: 'Choose playful, closer, or repair mode and take one question at a time together.', action: 'Open the free card deck' },
            zh: { kicker: '看完配对，开始对话', title: '一起抽一张MBTI情侣对话卡', desc: '选择轻松、更靠近或修复模式，一次聊一个问题。', action: '打开免费卡牌' },
            hi: { kicker: 'अनुकूलता के बाद, बातचीत', title: 'MBTI कपल बातचीत कार्ड साथ में चुनें', desc: 'हल्का, करीब या सुधार मोड चुनें और एक बार में एक सवाल लें।', action: 'मुफ़्त कार्ड खोलें' },
            ru: { kicker: 'ПОСЛЕ СОВМЕСТИМОСТИ — РАЗГОВОР', title: 'Вытяните карту для разговора вдвоём', desc: 'Выберите лёгкий, близкий или восстановительный режим и обсуждайте по одному вопросу.', action: 'Открыть бесплатные карты' },
            ja: { kicker: '相性の次は、実際の会話', title: '二人でMBTI会話カードを引く', desc: '気軽、もっと近く、関係修復から選び、一つずつ話してみましょう。', action: '無料カードを開く' },
            es: { kicker: 'DESPUÉS DE LA COMPATIBILIDAD, HABLEN', title: 'Saquen una carta de conversación MBTI', desc: 'Elijan modo ligero, cercano o de reparación y conversen una pregunta a la vez.', action: 'Abrir cartas gratis' },
            pt: { kicker: 'DEPOIS DA COMPATIBILIDADE, CONVERSEM', title: 'Tirem uma carta de conversa MBTI', desc: 'Escolham o modo leve, próximo ou reparo e conversem uma pergunta por vez.', action: 'Abrir cartas grátis' },
            id: { kicker: 'SETELAH KECOCOKAN, MARI BICARA', title: 'Ambil kartu percakapan pasangan MBTI', desc: 'Pilih mode santai, lebih dekat, atau memperbaiki lalu bahas satu pertanyaan.', action: 'Buka kartu gratis' },
            tr: { kicker: 'UYUMLULUKTAN SONRA, SOHBET', title: 'Bir MBTI çift sohbet kartı çekin', desc: 'Eğlenceli, yakınlaşma veya onarım modunu seçip her seferinde bir soruyu konuşun.', action: 'Ücretsiz kartları aç' },
            de: { kicker: 'NACH DER KOMPATIBILITÄT: REDEN', title: 'Zieht eine MBTI-Gesprächskarte für Paare', desc: 'Wählt locker, näher oder reparieren und besprecht jeweils eine Frage.', action: 'Kostenlose Karten öffnen' },
            fr: { kicker: 'APRÈS LA COMPATIBILITÉ, PARLEZ', title: 'Tirez une carte de conversation MBTI', desc: 'Choisissez léger, rapprochement ou réparation, puis discutez une question à la fois.', action: 'Ouvrir les cartes gratuites' }
        };

        return {
            locale: supportedLocale,
            copy: copyByLocale[supportedLocale],
            url: '/mbti-love/deck.html?lang=' + encodeURIComponent(supportedLocale)
                + '&source=blog_mbti_love_bridge'
        };
    }

    function getPalworldGameBridgeConfig() {
        var slug = getBlogSlug();
        var gamePattern = /(?:2048|browser-games|free-games|casual-games|dopabrain-games|brain-training-games|flappy-bird|snake-game|minesweeper|block-puzzle|stack-tower|reaction-test-game|brick-breaker|number-puzzle|word-(?:guess|scramble)|maze-runner|zigzag-runner)/;
        if (!gamePattern.test(slug)) return null;
        var locale = getBlogLocale();
        var supportedLocale = /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale) ? locale : 'en';
        var copyByLocale = {
            ko: { kicker: '다음 전략 게임을 계획하세요', title: '팰월드 진행·거점·교배 도구', desc: '진행 루트부터 거점 인력 배치와 교배 실험 기록까지, 티어표 대신 실행 가능한 계획을 만드세요.', field: '필드 가이드', base: '거점 플래너', breeding: '교배 실험 노트' },
            en: { kicker: 'PLAN YOUR NEXT STRATEGY GAME', title: 'Palworld progression, base and breeding tools', desc: 'Turn your next session into a route, workforce plan, or breeding experiment—without a fragile tier list.', field: 'Field guide', base: 'Base planner', breeding: 'Breeding notebook' },
            zh: { kicker: '规划下一场策略游戏', title: '幻兽帕鲁进度、据点与配种工具', desc: '把下一次游戏变成清晰路线、据点人员方案或配种实验，无需依赖易过时的排名。', field: '野外指南', base: '据点规划器', breeding: '配种实验笔记' },
            ja: { kicker: '次の攻略を計画', title: 'Palworld 攻略・拠点・配合ツール', desc: '次のセッションを進行ルート、拠点人員計画、配合実験の記録に変えます。', field: 'フィールドガイド', base: '拠点プランナー', breeding: '配合実験ノート' },
            es: { kicker: 'PLANEA TU PRÓXIMA ESTRATEGIA', title: 'Herramientas de progreso, base y cría de Palworld', desc: 'Convierte la próxima sesión en una ruta, plan de personal o experimento de cría.', field: 'Guía de campo', base: 'Planificador de base', breeding: 'Cuaderno de cría' },
            pt: { kicker: 'PLANEJE SUA PRÓXIMA ESTRATÉGIA', title: 'Ferramentas de progresso, base e reprodução de Palworld', desc: 'Transforme a próxima sessão em uma rota, plano de equipe ou experimento de reprodução.', field: 'Guia de campo', base: 'Planejador de base', breeding: 'Caderno de reprodução' },
            de: { kicker: 'PLANE DEINE NÄCHSTE STRATEGIE', title: 'Palworld-Fortschritts-, Basis- und Zuchtwerkzeuge', desc: 'Erstelle eine Route, einen Personalplan oder ein Zuchtexperiment für deine nächste Sitzung.', field: 'Feldhandbuch', base: 'Basisplaner', breeding: 'Zuchtnotizbuch' },
            fr: { kicker: 'PLANIFIEZ VOTRE PROCHAINE STRATÉGIE', title: 'Outils de progression, de base et d’élevage Palworld', desc: 'Transformez la prochaine session en itinéraire, plan de personnel ou expérience d’élevage.', field: 'Guide de terrain', base: 'Planificateur de base', breeding: 'Carnet d’élevage' }
        };
        return {
            locale: supportedLocale,
            copy: copyByLocale[supportedLocale] || copyByLocale.en,
            fieldUrl: '/portal/tools/palworld-field-guide.html?lang=' + encodeURIComponent(supportedLocale) + '&source=blog_game_bridge',
            baseUrl: '/portal/tools/palworld-base-planner.html?lang=' + encodeURIComponent(supportedLocale) + '&source=blog_game_bridge',
            breedingUrl: '/portal/tools/palworld-breeding-notebook.html?lang=' + encodeURIComponent(supportedLocale) + '&source=blog_game_bridge'
        };
    }

    function getKpopRosterBridgeConfig() {
        var slug = getBlogSlug();
        if (!/(?:kpop|k-pop)-(?:position|positions)|(?:posicion-kpop)/.test(slug)) return null;
        var locale = getBlogLocale();
        var supportedLocale = /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale) ? locale : 'en';
        var copyByLocale = {
            ko: { kicker: '포지션을 읽었다면 직접 배치하세요', title: 'K-pop 그룹 포지션 로스터 만들기', desc: '3~12인 멤버의 강점을 비교해 메인·리드·센터·리더 태그와 전체 커버리지를 한 장에 정리하세요.', roster: '그룹 로스터 설계', test: '내 포지션 테스트' },
            en: { kicker: 'TURN POSITION THEORY INTO A LINEUP', title: 'Build a K-pop group role roster', desc: 'Compare two strengths across 3–12 members, then map main, lead, center, leadership and group coverage.', roster: 'Plan a group roster', test: 'Find my own position' },
            zh: { kicker: '把定位知识变成阵容', title: '制作K-pop组合定位阵容', desc: '比较3至12名成员的两项优势，整理主力、领衔、中心、队长和整体覆盖。', roster: '规划组合阵容', test: '测试我的定位' },
            hi: { kicker: 'पोज़िशन जानकारी से लाइनअप बनाएँ', title: 'K-pop समूह भूमिका रोस्टर बनाएँ', desc: '3–12 सदस्यों की दो ताकतों की तुलना कर मुख्य, लीड, सेंटर और नेतृत्व टैग बनाएँ।', roster: 'समूह रोस्टर बनाएँ', test: 'मेरी पोज़िशन खोजें' },
            ru: { kicker: 'ОТ ТЕОРИИ ПОЗИЦИЙ К СОСТАВУ', title: 'Составьте ролевой ростер K-pop группы', desc: 'Сравните две сильные стороны 3–12 участников и распределите основные, ведущие, центральные и лидерские роли.', roster: 'Создать состав', test: 'Узнать свою позицию' },
            ja: { kicker: 'ポジション解説を編成に変える', title: 'K-popグループ役割ロスターを作る', desc: '3〜12人の2つの強みを比べ、メイン・リード・センター・リーダーと全体のカバーを整理します。', roster: 'グループ編成を作る', test: '自分のポジション診断' },
            es: { kicker: 'DE LA TEORÍA A LA FORMACIÓN', title: 'Crea una plantilla de roles K-pop', desc: 'Compara dos fortalezas de 3–12 integrantes y organiza roles principales, líderes, centro y cobertura.', roster: 'Planear el grupo', test: 'Descubrir mi posición' },
            pt: { kicker: 'DA TEORIA À FORMAÇÃO', title: 'Crie uma escalação de posições K-pop', desc: 'Compare duas forças de 3–12 integrantes e organize posições principais, líderes, centro e cobertura.', roster: 'Planejar o grupo', test: 'Descobrir minha posição' },
            id: { kicker: 'DARI TEORI POSISI KE FORMASI', title: 'Buat roster peran grup K-pop', desc: 'Bandingkan dua kekuatan untuk 3–12 anggota lalu petakan peran utama, lead, center, dan pemimpin.', roster: 'Rancang roster grup', test: 'Cari posisi saya' },
            tr: { kicker: 'POZİSYON BİLGİSİNDEN KADROYA', title: 'K-pop grup rol kadrosu oluştur', desc: '3–12 üyenin iki gücünü karşılaştırıp ana, lider, merkez ve yönetim rollerini düzenleyin.', roster: 'Grup kadrosu planla', test: 'Pozisyonumu bul' },
            de: { kicker: 'VON DER POSITIONSTHEORIE ZUR BESETZUNG', title: 'Plane einen K-pop-Gruppenrollenplan', desc: 'Vergleiche zwei Stärken von 3–12 Mitgliedern und verteile Haupt-, Lead-, Center- und Führungsrollen.', roster: 'Gruppenrollen planen', test: 'Meine Position finden' },
            fr: { kicker: 'DE LA THÉORIE À LA FORMATION', title: 'Créez une répartition des rôles K-pop', desc: 'Comparez deux forces pour 3 à 12 membres et répartissez rôles principaux, leaders, centre et coordination.', roster: 'Planifier le groupe', test: 'Trouver ma position' }
        };
        var quizLocale = supportedLocale === 'ko' ? 'ko' : 'en';
        return {
            locale: supportedLocale,
            copy: copyByLocale[supportedLocale],
            rosterUrl: '/portal/tools/kpop-role-roster.html?lang=' + encodeURIComponent(supportedLocale) + '&source=blog_kpop_position_bridge',
            testUrl: '/kpop-position/?lang=' + quizLocale + '&start=1&surface=blog_kpop_position_bridge'
        };
    }

    function getPastLifeStoryBridgeConfig() {
        var slug = getBlogSlug();
        if (!/past-life/.test(slug)) return null;
        var locale = getBlogLocale();
        var supportedLocale = /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale) ? locale : 'en';
        var copyByLocale = {
            ko: { kicker: '계산 결과를 한 편의 이야기로', title: '전생 이야기 스튜디오', desc: '시대·장소·역할·분위기·상징을 조합해 다섯 장면의 허구 카드를 만들고 브라우저 서가에 보관하세요.', studio: '이야기 만들기', test: '전생 직업 모험' },
            en: { kicker: 'TURN THE IDEA INTO A FICTIONAL TALE', title: 'Build a past-life-inspired story card', desc: 'Mix an era, place, role, tone and motif into five fictional scenes, then remix or keep the cards you like.', studio: 'Open the story studio', test: 'Try the era adventure' },
            zh: { kicker: '把灵感变成虚构故事', title: '创作前世灵感故事卡', desc: '组合时代、地点、角色、基调和意象，生成五幕虚构故事并收藏喜欢的版本。', studio: '打开故事工作室', test: '体验时代冒险' },
            hi: { kicker: 'विचार को काल्पनिक कहानी बनाएँ', title: 'पिछले जीवन से प्रेरित कहानी कार्ड बनाएँ', desc: 'युग, स्थान, भूमिका, भाव और प्रतीक को पाँच काल्पनिक दृश्यों में मिलाएँ।', studio: 'कहानी स्टूडियो खोलें', test: 'युग यात्रा आज़माएँ' },
            ru: { kicker: 'ПРЕВРАТИТЕ ИДЕЮ В ВЫМЫШЛЕННЫЙ РАССКАЗ', title: 'Создайте карточку истории о прошлой жизни', desc: 'Соедините эпоху, место, роль, настроение и символ в пяти вымышленных сценах.', studio: 'Открыть студию', test: 'Начать путешествие' },
            ja: { kicker: 'アイデアを架空の物語に', title: '前世風ストーリーカードを作る', desc: '時代、場所、役割、雰囲気、象徴を組み合わせて五場面の架空物語を作ります。', studio: '物語スタジオを開く', test: '時代の旅を試す' },
            es: { kicker: 'CONVIERTE LA IDEA EN FICCIÓN', title: 'Crea una historia inspirada en vidas pasadas', desc: 'Combina época, lugar, papel, tono y símbolo en cinco escenas ficticias.', studio: 'Abrir el estudio', test: 'Probar la aventura' },
            pt: { kicker: 'TRANSFORME A IDEIA EM FICÇÃO', title: 'Crie uma história inspirada em vidas passadas', desc: 'Combine época, lugar, papel, tom e símbolo em cinco cenas fictícias.', studio: 'Abrir o estúdio', test: 'Experimentar a aventura' },
            id: { kicker: 'UBAH IDE MENJADI KISAH FIKSI', title: 'Buat kartu cerita kehidupan lampau', desc: 'Gabungkan era, tempat, peran, suasana, dan simbol menjadi lima adegan fiksi.', studio: 'Buka studio cerita', test: 'Coba petualangan era' },
            tr: { kicker: 'FİKRİ KURGUYA DÖNÜŞTÜR', title: 'Geçmiş yaşam esintili hikâye kartı oluştur', desc: 'Çağ, mekân, rol, ton ve simgeyi beş kurgu sahnede birleştirin.', studio: 'Hikâye stüdyosunu aç', test: 'Çağ macerasını dene' },
            de: { kicker: 'MACH AUS DER IDEE EINE FIKTION', title: 'Erstelle eine inspirierte Geschichtenkarte', desc: 'Kombiniere Epoche, Ort, Rolle, Stimmung und Symbol zu fünf fiktiven Szenen.', studio: 'Geschichtenstudio öffnen', test: 'Epochenabenteuer starten' },
            fr: { kicker: 'TRANSFORMEZ L’IDÉE EN FICTION', title: 'Créez une histoire inspirée d’une vie antérieure', desc: 'Mélangez époque, lieu, rôle, ton et symbole en cinq scènes fictives.', studio: 'Ouvrir le studio', test: 'Essayer l’aventure' }
        };
        return { locale: supportedLocale, copy: copyByLocale[supportedLocale], studioUrl: '/portal/tools/past-life-story-studio.html?lang=' + encodeURIComponent(supportedLocale) + '&source=blog_past_life_story_bridge', testUrl: '/past-life/?lang=' + encodeURIComponent(supportedLocale) + '&source=blog_past_life_story_bridge' };
    }

    function get2048CoachBridgeConfig() {
        var slug = getBlogSlug();
        if (!/(?:^|-)2048(?:-|$)/.test(slug)) return null;
        var locale = getBlogLocale();
        var supportedLocale = /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale) ? locale : 'en';
        var copyByLocale = {
            ko: { kicker: '지금 막힌 보드를 가져오세요', title: '2048 다음 수를 네 방향 모두 비교', desc: '현재 4×4 타일을 입력하면 실제 합치기 규칙과 한 단계 예측으로 추천 이동과 미리보기를 보여줍니다.', coach: '보드 분석하기', play: '2048 플레이' },
            en: { kicker: 'BRING THE BOARD THAT STOPPED YOU', title: 'Compare every possible 2048 move', desc: 'Enter your current 4×4 tiles to preview each legal move with exact merge rules and one-step lookahead.', coach: 'Analyze my board', play: 'Play 2048' },
            zh: { kicker: '把卡住你的棋盘带过来', title: '比较 2048 的每一个合法方向', desc: '输入当前 4×4 方块，按准确合并规则和一步前瞻查看推荐移动及预览。', coach: '分析我的棋盘', play: '玩 2048' },
            hi: { kicker: 'अपना अटका हुआ बोर्ड लाएँ', title: '2048 की चारों चालों की तुलना करें', desc: 'वर्तमान 4×4 टाइलें भरें और हर वैध चाल का पूर्वावलोकन देखें।', coach: 'बोर्ड का विश्लेषण', play: '2048 खेलें' },
            ru: { kicker: 'ПРОВЕРЬТЕ СЛОЖНУЮ ПОЗИЦИЮ', title: 'Сравните все ходы в 2048', desc: 'Введите поле 4×4 и посмотрите каждый допустимый ход по точным правилам слияния.', coach: 'Анализировать поле', play: 'Играть в 2048' },
            ja: { kicker: '迷った盤面を入力', title: '2048の4方向をすべて比較', desc: '現在の4×4タイルを入力し、正確な合体ルールと1手先評価でプレビューします。', coach: '盤面を分析', play: '2048をプレイ' },
            es: { kicker: 'TRAE EL TABLERO QUE TE BLOQUEÓ', title: 'Compara todos los movimientos de 2048', desc: 'Introduce tus fichas 4×4 y previsualiza cada movimiento legal.', coach: 'Analizar mi tablero', play: 'Jugar 2048' },
            pt: { kicker: 'TRAGA O TABULEIRO QUE TRAVOU', title: 'Compare todas as jogadas de 2048', desc: 'Digite suas peças 4×4 e visualize cada movimento válido.', coach: 'Analisar meu tabuleiro', play: 'Jogar 2048' },
            id: { kicker: 'BAWA PAPAN YANG MEMBUATMU MACET', title: 'Bandingkan semua langkah 2048', desc: 'Masukkan ubin 4×4 dan lihat pratinjau setiap langkah yang valid.', coach: 'Analisis papan', play: 'Main 2048' },
            tr: { kicker: 'TAKILDIĞIN TAHTAYI GETİR', title: 'Tüm 2048 hamlelerini karşılaştır', desc: '4×4 taşlarını gir ve her geçerli hamleyi önizle.', coach: 'Tahtayı analiz et', play: '2048 oyna' },
            de: { kicker: 'BRING DEINE SCHWIERIGE POSITION MIT', title: 'Vergleiche alle 2048-Züge', desc: 'Gib dein 4×4-Brett ein und prüfe jeden gültigen Zug.', coach: 'Brett analysieren', play: '2048 spielen' },
            fr: { kicker: 'APPORTEZ LA GRILLE QUI VOUS BLOQUE', title: 'Comparez tous les coups de 2048', desc: 'Saisissez vos tuiles 4×4 et prévisualisez chaque coup valide.', coach: 'Analyser ma grille', play: 'Jouer à 2048' }
        };
        return {
            locale: supportedLocale,
            copy: copyByLocale[supportedLocale] || copyByLocale.en,
            coachUrl: '/puzzle-2048/coach.html?lang=' + encodeURIComponent(supportedLocale) + '&source=blog_2048_bridge',
            playUrl: '/puzzle-2048/?lang=' + encodeURIComponent(supportedLocale) + '&surface=coach_2048_bridge'
        };
    }

    function getBrainWorkoutBridgeConfig() {
        var slug = getBlogSlug();
        if (!/(?:brain-training|brain-games|memory-card-game|dopabrain-games|best-brain-games)/.test(slug)) return null;
        var locale = getBlogLocale();
        var supportedLocale = /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale) ? locale : 'en';
        var copyByLocale = {
            ko:{kicker:'읽었다면 짧게 플레이하세요',title:'오늘의 두뇌 게임 서킷 만들기',desc:'집중 영역과 5·10·15분 시간을 고르면 무료 게임을 한 세션으로 묶어드립니다.',action:'오늘의 서킷 만들기'},
            en:{kicker:'TURN READING INTO PLAY',title:'Build today’s brain game circuit',desc:'Choose a focus and 5, 10 or 15 minutes to turn free games into one clear session.',action:'Build today’s circuit'},
            zh:{kicker:'把阅读变成游戏',title:'创建今天的益智游戏循环',desc:'选择方向和5、10或15分钟，把免费游戏组合成一次明确的娱乐会话。',action:'创建今日循环'},
            hi:{kicker:'पढ़ने के बाद खेलें',title:'आज का ब्रेन गेम सर्किट बनाएँ',desc:'फोकस और 5, 10 या 15 मिनट चुनकर मुफ्त गेम का छोटा सत्र बनाएँ।',action:'आज का सर्किट बनाएँ'},
            ru:{kicker:'ОТ ЧТЕНИЯ К ИГРЕ',title:'Соберите игровой комплекс на сегодня',desc:'Выберите цель и 5, 10 или 15 минут для короткой сессии из бесплатных игр.',action:'Составить комплекс'},
            ja:{kicker:'読んだら短くプレイ',title:'今日の脳トレゲーム・サーキット',desc:'目的と5・10・15分を選び、無料ゲームを一つの短いセッションにまとめます。',action:'今日のサーキットを作る'},
            es:{kicker:'DE LA LECTURA AL JUEGO',title:'Crea el circuito de juegos de hoy',desc:'Elige un enfoque y 5, 10 o 15 minutos para combinar juegos gratuitos en una sesión.',action:'Crear circuito'},
            pt:{kicker:'DA LEITURA AO JOGO',title:'Crie o circuito de jogos de hoje',desc:'Escolha um foco e 5, 10 ou 15 minutos para reunir jogos grátis em uma sessão.',action:'Criar circuito'},
            id:{kicker:'DARI MEMBACA KE BERMAIN',title:'Buat sirkuit game hari ini',desc:'Pilih fokus dan 5, 10, atau 15 menit untuk satu sesi game gratis.',action:'Buat sirkuit'},
            tr:{kicker:'OKUMADAN OYUNA',title:'Bugünün zihin oyunu turunu oluştur',desc:'Bir odak ve 5, 10 ya da 15 dakika seçerek ücretsiz oyunları tek oturumda birleştir.',action:'Turu oluştur'},
            de:{kicker:'VOM LESEN ZUM SPIELEN',title:'Stelle den heutigen Denkspiel-Parcours zusammen',desc:'Wähle einen Fokus und 5, 10 oder 15 Minuten für eine klare Runde kostenloser Spiele.',action:'Parcours erstellen'},
            fr:{kicker:'DE LA LECTURE AU JEU',title:'Créez le circuit de jeux du jour',desc:'Choisissez un objectif et 5, 10 ou 15 minutes pour une session de jeux gratuits.',action:'Créer le circuit'}
        };
        return {locale:supportedLocale,copy:copyByLocale[supportedLocale],url:'/portal/tools/brain-game-workout.html?lang='+encodeURIComponent(supportedLocale)+'&source=blog_brain_game_bridge'};
    }

    function getEmotionActionBridgeConfig() {
        var slug=getBlogSlug();
        if (!/(?:emotional-regulation|emotion-management|emotional-dysregulation|emotional-triggers)/.test(slug)) return null;
        var locale=getBlogLocale(),supportedLocale=/^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(locale)?locale:'en';
        var copy={
            ko:{kicker:'읽기에서 작은 행동으로',title:'지금–다음–나중 행동 카드 만들기',desc:'감정, 상황, 가능한 시간을 고르고 현실적인 다음 행동 하나를 정리하세요.',action:'비공개 카드 만들기'},en:{kicker:'TURN READING INTO ONE ACTION',title:'Build a now–next–later action card',desc:'Choose the emotion, situation and time to organize one realistic next action.',action:'Build a private card'},
            zh:{kicker:'把阅读变成一个小行动',title:'创建“现在–下一步–稍后”行动卡',desc:'选择情绪、情境和时间，整理一个现实可行的下一行动。',action:'创建私密卡片'},id:{kicker:'DARI MEMBACA KE SATU TINDAKAN',title:'Buat kartu sekarang–berikutnya–nanti',desc:'Pilih emosi, situasi, dan waktu untuk satu langkah yang realistis.',action:'Buat kartu pribadi'},pt:{kicker:'DA LEITURA PARA UMA AÇÃO',title:'Crie um cartão agora–depois–mais tarde',desc:'Escolha emoção, situação e tempo para organizar uma próxima ação realista.',action:'Criar cartão privado'},
            ja:{kicker:'読むだけから小さな行動へ',title:'「今・次・後で」行動カード',desc:'感情、状況、時間を選び、現実的な次の一歩を整理します。',action:'非公開カードを作る'},es:{kicker:'DE LA LECTURA A UNA ACCIÓN',title:'Crea una tarjeta ahora–después–más tarde',desc:'Elige emoción, situación y tiempo para ordenar un siguiente paso realista.',action:'Crear tarjeta privada'},fr:{kicker:'DE LA LECTURE À UNE ACTION',title:'Créez une carte maintenant–ensuite–plus tard',desc:'Choisissez émotion, situation et durée pour une prochaine action réaliste.',action:'Créer une carte privée'},de:{kicker:'VOM LESEN ZU EINER HANDLUNG',title:'Erstelle eine Jetzt–Danach–Später-Karte',desc:'Wähle Gefühl, Situation und Zeit für einen realistischen nächsten Schritt.',action:'Private Karte erstellen'},tr:{kicker:'OKUMADAN TEK BİR EYLEME',title:'Şimdi–sonra–daha sonra kartı oluştur',desc:'Gerçekçi bir sonraki adım için duygu, durum ve süre seçin.',action:'Özel kart oluştur'},ru:{kicker:'ОТ ЧТЕНИЯ К ОДНОМУ ДЕЙСТВИЮ',title:'Создайте карточку «сейчас–затем–позже»',desc:'Выберите эмоцию, ситуацию и время для реалистичного следующего шага.',action:'Создать личную карточку'},hi:{kicker:'पढ़ने से एक छोटे कार्य तक',title:'अभी–अगला–बाद में कार्य कार्ड बनाएँ',desc:'एक व्यावहारिक अगला कदम तय करने के लिए भावना, स्थिति और समय चुनें।',action:'निजी कार्ड बनाएँ'}
        };
        return {locale:supportedLocale,copy:copy[supportedLocale],url:'/portal/tools/emotion-regulation-planner.html?lang='+encodeURIComponent(supportedLocale)+'&source=blog_emotion_action_bridge'};
    }

    function getBlogTopicStrategy() {
        var slug = getBlogSlug();
        if (!slug) return null;

        for (var i = 0; i < BLOG_TOPIC_STRATEGIES.length; i += 1) {
            if (BLOG_TOPIC_STRATEGIES[i].pattern.test(slug)) {
                return BLOG_TOPIC_STRATEGIES[i];
            }
        }
        return null;
    }

    function normalizeMarket(value) {
        value = String(value || '').toLowerCase().replace(/[^a-z]/g, '');
        if (value === 'mx' || value === 'mexico' || value === 'es') return 'mx';
        if (value === 'zh' || value === 'cn' || value === 'china' || value === 'tw' || value === 'hk') return 'zh';
        if (value === 'ja' || value === 'jp') return 'ja';
        if (value === 'fr') return 'fr';
        if (value === 'de') return 'de';
        if (value === 'id') return 'id';
        if (value === 'my' || value === 'malaysia' || value === 'ms') return 'my';
        if (value === 'pt' || value === 'br' || value === 'brazil' || value === 'portugal') return 'pt';
        if (value === 'ru' || value === 'russia') return 'ru';
        if (value === 'hi' || value === 'hindi' || value === 'in' || value === 'india') return 'hi';
        if (value === 'tr' || value === 'turkey' || value === 'turkiye') return 'tr';
        if (value === 'sg' || value === 'singapore') return 'sg';
        if (value === 'ko' || value === 'kr') return 'ko';
        if (value === 'en' || value === 'us' || value === 'uk' || value === 'gb') return 'en';
        return '';
    }

    function detectMarket() {
        var queryLocaleMarket = '';
        try {
            var params = new URLSearchParams(window.location.search || '');
            var override = normalizeMarket(params.get('market') || params.get('country') || params.get('cc'));
            if (override) return override;
            queryLocaleMarket = normalizeMarket(params.get('lang') || params.get('hl'));
        } catch(e) {}

        try {
            if ((Intl.DateTimeFormat().resolvedOptions().timeZone || '') === 'Asia/Singapore') return 'sg';
        } catch(e) {}

        var localeMarket = normalizeMarket(getBlogLocale());
        if (localeMarket) return localeMarket;
        if (queryLocaleMarket) return queryLocaleMarket;

        var lang = '';
        var timezone = '';
        try { lang = (navigator.language || '').toLowerCase(); } catch(e) {}
        try { timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch(e) {}

        if (/^es(?:-|$)/.test(lang) || /America\/Mexico/i.test(timezone)) return 'mx';
        if (/^zh(?:-|$)/.test(lang) || /Asia\/(Shanghai|Hong_Kong|Taipei|Macau|Chongqing|Urumqi)/i.test(timezone)) return 'zh';
        if (/^ja(?:-|$)/.test(lang) || timezone === 'Asia/Tokyo') return 'ja';
        if (/^fr(?:-|$)/.test(lang) || timezone === 'Europe/Paris') return 'fr';
        if (/^de(?:-|$)/.test(lang) || timezone === 'Europe/Berlin') return 'de';
        if (/^id(?:-|$)/.test(lang) || timezone === 'Asia/Jakarta') return 'id';
        if (/^ms(?:-|$)/.test(lang) || timezone === 'Asia/Kuala_Lumpur') return 'my';
        if (/^pt(?:-|$)/.test(lang) || /America\/Sao_Paulo|Europe\/Lisbon/i.test(timezone)) return 'pt';
        if (/^ru(?:-|$)/.test(lang) || /Europe\/Moscow/i.test(timezone)) return 'ru';
        if (/^hi(?:-|$)/.test(lang) || /Asia\/(Kolkata|Calcutta)/i.test(timezone)) return 'hi';
        if (/^tr(?:-|$)/.test(lang) || timezone === 'Europe/Istanbul') return 'tr';
        if (timezone === 'Asia/Singapore') return 'sg';
        if (/^ko(?:-|$)/.test(lang) || timezone === 'Asia/Seoul') return 'ko';
        if (/^en(?:-|$)/.test(lang) && /America\/|Europe\/London|Australia\//.test(timezone)) return 'en';
        return 'global';
    }

    function getBlogBridgeStrategy() {
        var locale = getBlogLocale();
        var market = detectMarket();
        var ids = BLOG_BRIDGE_BY_MARKET[market] || BLOG_BRIDGE_IDS;
        var title = BLOG_BRIDGE_SAFE_TITLES[market] || BLOG_BRIDGE_SAFE_TITLES.en;
        var topic = getBlogTopicStrategy();
        var topicKey = topic ? topic.key : 'market';

        if (locale === 'en' && EN_TOOL_BLOG_PATTERN.test(window.location.pathname || '')) {
            ids = EN_TOOL_BRIDGE_IDS;
            title = 'Continue with a free tool';
            topicKey = 'en_tool';
        } else if (topic) {
            ids = topic.ids;
            title = topic.title;
        }

        return {
            locale: locale,
            market: market,
            ids: ids,
            title: title,
            topicKey: topicKey
        };
    }

    function isScanRiskVisit(market) {
        return market === 'sg' && getDeviceType() === 'desktop' && !document.referrer;
    }

    function getRevenueSprintStrategy(bridge) {
        if (!bridge || isScanRiskVisit(bridge.market)) return null;

        var device = getDeviceType();
        var ids = REVENUE_SPRINT_BY_MARKET[bridge.market] || null;
        var highValueDesktop = /^(en|ko|ja|fr|de|pt|mx)$/.test(bridge.market);
        var topicEligible = /^(self_check|personality|productivity)$/.test(bridge.topicKey || '');
        var preserveTopicIntent = /^(kpop|game|fortune|en_tool)$/.test(bridge.topicKey || '');

        if (preserveTopicIntent) return null;

        if (!ids && (device !== 'desktop' || topicEligible)) {
            ids = REVENUE_SPRINT_BY_MARKET.global;
        }

        if (!ids) return null;
        if (device === 'desktop' && !highValueDesktop && !topicEligible) return null;

        return {
            ids: ids,
            title: device === 'desktop' ? 'Fast result paths' : 'Fast result tests',
            topicKey: 'revenue_sprint_' + (bridge.topicKey || 'market')
        };
    }

    function getRevenueSprintIdsForMarket(market) {
        return (REVENUE_SPRINT_BY_MARKET[market] || REVENUE_SPRINT_BY_MARKET.global || []).slice();
    }

    function getAppRevenueSprintPicks(current, apps, market) {
        if (!current || !apps || String(current.category || '').toLowerCase() !== 'test') return [];
        if (isScanRiskVisit(market)) return [];

        var device = getDeviceType();
        var desktopEligible = /^(en|ko|ja|fr|de|pt|mx|zh|id|global)$/.test(market || 'global');
        if (device === 'desktop' && !desktopEligible) return [];

        var byId = {};
        apps.forEach(function(app) {
            if (app && app.id) byId[app.id] = app;
        });

        var picks = [];
        function addById(id) {
            var app = byId[id];
            if (!app || app.id === current.id || picks.indexOf(app) !== -1) return;
            picks.push(app);
        }

        getRevenueSprintIdsForMarket(market).forEach(addById);

        if (picks.length < 4 && market !== 'global') {
            getRevenueSprintIdsForMarket('global').forEach(addById);
        }

        if (picks.length < 4) {
            apps.forEach(function(app) {
                if (!app || app.id === current.id || picks.indexOf(app) !== -1) return;
                if (String(app.category || '').toLowerCase() === 'test' && app.isPopular) picks.push(app);
            });
        }

        return picks.slice(0, 4);
    }

    function sendQualityEvent(name, params) {
        if (typeof gtag !== 'function') return;
        try {
            gtag('event', name, Object.assign({
                event_category: 'traffic_quality',
                path_group: getPathGroup(),
                page_path: window.location.pathname || '/',
                referrer_state: document.referrer ? 'has_referrer' : 'direct_or_empty',
                device_hint: getDeviceType(),
                detected_market: detectMarket(),
                quality_version: '2026-06-16',
                transport_type: 'beacon'
            }, params || {}));
        } catch(e) {}
    }

    function initTrafficQualitySignals() {
        var startedAt = Date.now();
        var market = detectMarket();
        var device = getDeviceType();
        var scanRisk = market === 'sg' && device === 'desktop' && !document.referrer;
        var viewSent = false;
        var engaged = false;

        function sendView(reason) {
            if (viewSent) return;
            viewSent = true;
            sendQualityEvent('traffic_quality_view', {
                quality_view_reason: reason,
                view_after_ms: Math.max(0, Date.now() - startedAt),
                scan_risk: scanRisk ? 'sg_desktop_direct' : ''
            });
        }

        window.setTimeout(function() {
            if (!document.hidden) sendView(scanRisk ? 'delayed_scan_guard_8s' : 'delayed_visible');
        }, scanRisk ? SCAN_GUARD_DELAY_MS : 1200);

        function markEngaged(reason) {
            if (engaged) return;
            if (scanRisk && reason === 'timer_20s_visible') return;
            engaged = true;
            sendView('engagement_' + reason);
            sendQualityEvent('traffic_quality_engaged', {
                quality_signal: reason,
                engaged_after_ms: Math.max(0, Date.now() - startedAt),
                scan_risk: scanRisk ? 'sg_desktop_direct' : ''
            });
        }

        function bindOnce(eventName, reason, target) {
            (target || window).addEventListener(eventName, function() {
                markEngaged(reason);
            }, { once: true, passive: true });
        }

        bindOnce('click', 'click', document);
        bindOnce('keydown', 'key', document);
        bindOnce('touchstart', 'touch', document);
        window.addEventListener('scroll', function() {
            if (scanRisk) return;
            var doc = document.documentElement || document.body;
            var max = Math.max(1, (doc.scrollHeight || 0) - window.innerHeight);
            var depth = Math.round(((window.scrollY || doc.scrollTop || 0) / max) * 100);
            if (depth >= 45 && Date.now() - startedAt >= 3000) {
                markEngaged('scroll_45');
            }
        }, { passive: true });
        window.setTimeout(function() {
            if (!document.hidden) markEngaged('timer_20s_visible');
        }, 20000);
    }

    initTrafficQualitySignals();

    if (!path || path === 'portal') return;

    // Wait for APP_DATA or load it
    function init() {
        if (typeof APP_DATA !== 'undefined') {
            render(APP_DATA);
        } else {
            var s = document.createElement('script');
            s.src = '/portal/js/app-data.js';
            s.onload = function() {
                if (typeof APP_DATA !== 'undefined') render(APP_DATA);
            };
            s.onerror = function() {}; // silent fail
            document.head.appendChild(s);
        }
    }

    function getAppLabelOverride(app, lang) {
        var langKey = String(lang || '').slice(0, 2).toLowerCase();
        var labels = APP_LABEL_OVERRIDES[langKey];
        return labels && app && app.id ? labels[app.id] : null;
    }

    function getAppName(app, preferredLang) {
        var lang = preferredLang || 'en';
        try {
            if (!preferredLang && typeof i18n !== 'undefined' && i18n.getCurrentLanguage) {
                lang = i18n.getCurrentLanguage();
            } else if (!preferredLang) {
                lang = (navigator.language || 'en').slice(0, 2);
            }
        } catch(e) {}
        var override = getAppLabelOverride(app, lang);
        if (override && override.name) return override.name;
        if (lang !== 'ko' && app.i18n && app.i18n[lang] && app.i18n[lang].name) {
            return app.i18n[lang].name;
        }
        return app.name;
    }

    function getAppDesc(app, preferredLang) {
        var lang = preferredLang || 'en';
        try {
            if (!preferredLang && typeof i18n !== 'undefined' && i18n.getCurrentLanguage) {
                lang = i18n.getCurrentLanguage();
            } else if (!preferredLang) {
                lang = (navigator.language || 'en').slice(0, 2);
            }
        } catch(e) {}
        var override = getAppLabelOverride(app, lang);
        if (override && override.shortDesc) return override.shortDesc;
        if (lang !== 'ko' && app.i18n && app.i18n[lang] && app.i18n[lang].shortDesc) {
            return app.i18n[lang].shortDesc;
        }
        return app.shortDesc;
    }

    function getCurrentLang() {
        try {
            var params = new URLSearchParams(window.location.search || '');
            var queryLang = params.get('lang');
            if (/^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(queryLang || '')) {
                return queryLang;
            }
        } catch(e) {}

        try {
            if (typeof i18n !== 'undefined' && i18n.getCurrentLanguage) {
                var i18nLang = i18n.getCurrentLanguage();
                if (/^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(i18nLang || '')) {
                    return i18nLang;
                }
            }
        } catch(e) {}

        try {
            var navLang = (navigator.language || 'en').slice(0, 2);
            if (/^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(navLang)) {
                return navLang;
            }
        } catch(e) {}

        return 'en';
    }

    function withLangParam(url, lang) {
        if (!lang || /[?&]lang=/.test(url)) return url;
        return url + (url.indexOf('?') === -1 ? '?' : '&') + 'lang=' + encodeURIComponent(lang);
    }

    function withParam(url, key, value) {
        if (!key || /[?&]/.test(key) || new RegExp('[?&]' + key + '=').test(url)) return url;
        return url + (url.indexOf('?') === -1 ? '?' : '&') + key + '=' + encodeURIComponent(value);
    }

    function shouldAutoStartFromSticky(appId) {
        return appId === 'hsp-test' || appId === 'brain-type' || appId === 'mental-age';
    }

    function withStickyAutoStart(url, appId, surfaceName) {
        if (!shouldAutoStartFromSticky(appId)) return url;
        url = withParam(url, 'start', '1');
        return withParam(url, 'surface', surfaceName || 'blog_sticky_sprint');
    }

    function scheduleBackground(task) {
        if (window.scheduler && typeof window.scheduler.postTask === 'function') {
            window.scheduler.postTask(task, { priority: 'background' }).catch(function() {
                task();
            });
        } else if ('requestIdleCallback' in window) {
            window.requestIdleCallback(task, { timeout: 1000 });
        } else {
            window.setTimeout(task, 0);
        }
    }

    function createPersonalizeDefault() {
        return { clicks: {}, visits: {}, recent: [], catClicks: {}, firstVisit: Date.now(), lastVisit: 0 };
    }

    function normalizePersonalizeData(data) {
        if (!data || typeof data !== 'object') return createPersonalizeDefault();

        data.clicks = data.clicks || {};
        data.visits = data.visits || {};
        data.recent = Array.isArray(data.recent) ? data.recent : [];
        data.catClicks = data.catClicks || {};
        data.firstVisit = data.firstVisit || Date.now();
        data.lastVisit = data.lastVisit || 0;

        return data;
    }

    function loadPersonalizeData() {
        try {
            return normalizePersonalizeData(JSON.parse(localStorage.getItem(STORAGE_KEY)));
        } catch(e) {
            return createPersonalizeDefault();
        }
    }

    function savePersonalizeData(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch(e) {}
    }

    function updateRecent(data, appId) {
        data.recent = data.recent.filter(function(id) { return id !== appId; });
        data.recent.unshift(appId);
        if (data.recent.length > MAX_HISTORY) data.recent = data.recent.slice(0, MAX_HISTORY);
    }

    function rememberAppVisit(app) {
        if (!app || !app.id) return;

        scheduleBackground(function() {
            var data = loadPersonalizeData();
            data.visits[app.id] = (data.visits[app.id] || 0) + 1;
            data.lastVisit = Date.now();
            if (app.category) data.lastCategory = app.category;
            updateRecent(data, app.id);
            savePersonalizeData(data);
        });
    }

    function rememberAppClick(appId, category) {
        if (!appId) return;

        scheduleBackground(function() {
            var data = loadPersonalizeData();
            data.clicks[appId] = (data.clicks[appId] || 0) + 1;
            if (category) data.catClicks[category] = (data.catClicks[category] || 0) + 1;
            data.lastVisit = Date.now();
            updateRecent(data, appId);
            savePersonalizeData(data);
        });
    }

    function render(apps) {
        var current = apps.find(function(a) { return a.id === path; });
        if (!current) {
            renderBlogBridge(apps);
            return;
        }
        rememberAppVisit(current);

        var market = detectMarket();
        var recommendationStrategy = 'category_popular_mix';
        var revenueGoal = '';
        var picks = getAppRevenueSprintPicks(current, apps, market);

        if (picks.length >= 3) {
            recommendationStrategy = 'app_revenue_sprint';
            revenueGoal = 'daily_0_20';
        } else {
            // Get related apps: same category first, then popular
            var sameCategory = apps.filter(function(a) {
                return a.id !== path && a.category === current.category;
            });
            var otherPopular = apps.filter(function(a) {
                return a.id !== path && a.category !== current.category && a.isPopular;
            });

            // Shuffle arrays
            shuffle(sameCategory);
            shuffle(otherPopular);

            // Pick 2 same category + 2 popular (or fill from either)
            picks = [];
            picks = picks.concat(sameCategory.slice(0, 2));
            picks = picks.concat(otherPopular.slice(0, 4 - picks.length));
            if (picks.length < 4) {
                var remaining = apps.filter(function(a) {
                    return a.id !== path && picks.indexOf(a) === -1;
                });
                shuffle(remaining);
                picks = picks.concat(remaining.slice(0, 4 - picks.length));
            }
        }

        if (picks.length === 0) return;

        // Inject CSS
        var style = document.createElement('style');
        style.textContent = [
            '.cp-section{max-width:600px;margin:24px auto 0;padding:20px 16px;border-top:1px solid rgba(255,255,255,0.08)}',
            '.cp-title{font-size:14px;font-weight:600;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;text-align:center}',
            '.cp-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}',
            '.cp-card{display:flex;align-items:center;gap:10px;padding:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:12px;text-decoration:none;color:inherit;transition:all 0.2s ease}',
            '.cp-card:hover{background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.12);transform:translateY(-1px)}',
            '.cp-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}',
            '.cp-name{font-size:13px;font-weight:600;color:rgba(255,255,255,0.9);line-height:1.3}',
            '.cp-desc{font-size:11px;color:rgba(255,255,255,0.4);margin-top:2px;line-height:1.3}',
            '@media(max-width:480px){.cp-grid{grid-template-columns:1fr}.cp-section{padding:16px 12px}}',
            'html.light-mode .cp-section,[data-theme="light"] .cp-section{border-top-color:rgba(0,0,0,0.08)}',
            'html.light-mode .cp-title,[data-theme="light"] .cp-title{color:rgba(0,0,0,0.45)}',
            'html.light-mode .cp-card,[data-theme="light"] .cp-card{background:rgba(0,0,0,0.03);border-color:rgba(0,0,0,0.06)}',
            'html.light-mode .cp-card:hover,[data-theme="light"] .cp-card:hover{background:rgba(0,0,0,0.06);border-color:rgba(0,0,0,0.1)}',
            'html.light-mode .cp-name,[data-theme="light"] .cp-name{color:rgba(0,0,0,0.85)}',
            'html.light-mode .cp-desc,[data-theme="light"] .cp-desc{color:rgba(0,0,0,0.45)}',
            '.cp-card:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:2px}'
        ].join('');
        document.head.appendChild(style);

        // Localized title
        var titles = {
            ko: '이것도 해보세요', en: 'You might also like', ja: 'こちらもおすすめ',
            zh: '你可能还喜欢', es: 'También te puede gustar', pt: 'Você também pode gostar',
            id: 'Mungkin kamu juga suka', tr: 'Bunları da beğenebilirsiniz', de: 'Das könnte dir auch gefallen',
            fr: 'Vous aimerez aussi', hi: 'आपको यह भी पसंद आएगा', ru: 'Вам также понравится'
        };
        var lang = getCurrentLang();
        var title = titles[lang] || titles.en;

        // Build HTML
        var html = '<nav class="cp-section" aria-label="' + title + '" data-detected-market="' + market + '" data-recommendation-strategy="' + recommendationStrategy + '" data-revenue-goal="' + (revenueGoal || 'none') + '"><div class="cp-title">' + title + '</div><div class="cp-grid">';
        picks.forEach(function(app, index) {
            var url = withLangParam(app.url.replace('https://dopabrain.com', ''), lang);
            html += '<a href="' + url + '" class="cp-card" aria-label="' + getAppName(app, lang) + '" data-destination-id="' + app.id + '" data-destination-category="' + app.category + '" data-position="' + (index + 1) + '">'
                + '<div class="cp-icon" style="background:linear-gradient(135deg,' + app.color + '22,' + app.color + '08)">' + app.icon + '</div>'
                + '<div><div class="cp-name">' + getAppName(app, lang) + '</div>'
                + '<div class="cp-desc">' + getAppDesc(app, lang) + '</div></div></a>';
        });
        html += '</div></nav>';

        // Insert before footer or at end of main/body
        var footer = document.querySelector('.game-footer') || document.querySelector('footer');
        if (footer) {
            footer.insertAdjacentHTML('beforebegin', html);
        } else {
            var main = document.querySelector('main') || document.body;
            main.insertAdjacentHTML('beforeend', html);
        }

        var section = document.querySelector('.cp-section');
        if (!section) return;

        var viewTracked = false;
        function trackVisibleCrossPromoView() {
            if (viewTracked || typeof gtag !== 'function') return;
            var rect = section.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            viewTracked = true;
            gtag('event', 'cross_promo_view', {
                event_category: 'engagement',
                source_app: path,
                surface_type: 'cross_promo',
                surface_name: path,
                detected_market: market,
                recommendation_strategy: recommendationStrategy,
                revenue_goal: revenueGoal || 'none',
                item_count: picks.length
            });
        }

        if ('IntersectionObserver' in window) {
            var viewObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        trackVisibleCrossPromoView();
                        if (viewTracked) viewObserver.disconnect();
                    }
                });
            }, { threshold: 0.05 });
            viewObserver.observe(section);
        } else {
            setTimeout(trackVisibleCrossPromoView, 1500);
        }

        // Track cross-promo clicks
        section.addEventListener('click', function(e) {
            var card = e.target.closest('.cp-card');
            if (card) {
                rememberAppClick(card.getAttribute('data-destination-id'), card.getAttribute('data-destination-category'));
            }
            if (card && typeof gtag === 'function') {
                var destinationPath = card.getAttribute('href') || '';
                gtag('event', 'cross_promo_click', {
                    event_category: 'engagement',
                    event_label: destinationPath,
                    source_app: path,
                    surface_type: 'cross_promo',
                    surface_name: path,
                    destination_path: destinationPath,
                    destination_id: card.getAttribute('data-destination-id'),
                    destination_category: card.getAttribute('data-destination-category'),
                    destination_position: card.getAttribute('data-position'),
                    detected_market: market,
                    recommendation_strategy: recommendationStrategy,
                    revenue_goal: revenueGoal || 'none'
                });
            }
        });
    }

    function renderBlogBridge(apps) {
        if (window.location.pathname.indexOf('/portal/blog/') !== 0) return;
        if (document.querySelector('.cp-section')) return;

        var bridge = getBlogBridgeStrategy();
        var picks = bridge.ids
            .map(function(id) { return apps.find(function(app) { return app.id === id; }); })
            .filter(Boolean);
        if (picks.length === 0) return;

        var style = document.createElement('style');
        style.textContent = [
            '.cp-section{max-width:720px;margin:32px auto 0;padding:22px 16px;border-top:1px solid rgba(255,255,255,0.08)}',
            '.cp-title{font-size:14px;font-weight:700;color:rgba(255,255,255,0.62);text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;text-align:center}',
            '.cp-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}',
            '.cp-card{display:flex;align-items:center;gap:10px;min-height:72px;padding:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;text-decoration:none;color:inherit;transition:all 0.2s ease}',
            '.cp-card:hover{background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.16);transform:translateY(-1px)}',
            '.cp-scan-recovery{margin:20px auto 28px;padding:16px;border:1px solid rgba(0,229,255,0.16);border-radius:14px;background:rgba(0,229,255,0.05)}',
            '.cp-scan-recovery .cp-title{text-align:left;margin-bottom:10px}',
            '.cp-scan-recovery .cp-grid{grid-template-columns:repeat(4,minmax(0,1fr))}',
            '.cp-scan-recovery .cp-card{min-height:64px;padding:10px}',
            '.cp-scan-recovery .cp-desc{display:none}',
            '.cp-revenue-recovery{margin:18px auto 26px;padding:16px;border:1px solid rgba(255,184,0,0.18);border-radius:14px;background:rgba(255,184,0,0.055)}',
            '.cp-revenue-recovery .cp-title{text-align:left;margin-bottom:10px}',
            '.cp-revenue-recovery .cp-grid{grid-template-columns:repeat(4,minmax(0,1fr))}',
            '.cp-revenue-recovery .cp-card{min-height:64px;padding:10px}',
            '.cp-revenue-recovery .cp-desc{display:none}',
            '.cp-mobile-sprint{margin:18px auto 26px;padding:16px;border:1px solid rgba(124,58,237,0.22);border-radius:14px;background:linear-gradient(135deg,rgba(124,58,237,0.08),rgba(0,188,212,0.05))}',
            '.cp-mobile-sprint .cp-title{text-align:left;margin-bottom:10px}',
            '.cp-mobile-sprint .cp-grid{grid-template-columns:repeat(4,minmax(0,1fr))}',
            '.cp-mobile-sprint .cp-card{min-height:64px;padding:10px}',
            '.cp-mobile-sprint .cp-desc{display:none}',
            '.cp-stress-plan{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(74,222,128,0.24);border-radius:16px;background:linear-gradient(135deg,rgba(74,222,128,0.09),rgba(0,188,212,0.055));box-shadow:0 14px 34px rgba(0,0,0,0.12)}',
            '.cp-stress-plan-kicker{font-size:11px;font-weight:900;letter-spacing:.08em;color:#86efac;margin-bottom:5px}',
            '.cp-stress-plan-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-stress-plan-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,0.7);margin-bottom:13px}',
            '.cp-stress-plan-link{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:11px 16px;border-radius:11px;background:#16a34a;color:#fff;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-stress-script-link{display:inline-flex;align-items:center;min-height:44px;margin-left:10px;color:#bfdbfe;text-decoration:underline;text-underline-offset:3px;font-size:13px;font-weight:800}',
            '.cp-stress-plan-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-stress-script-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-boundary-script{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(96,165,250,0.28);border-radius:16px;background:linear-gradient(135deg,rgba(59,130,246,0.1),rgba(124,58,237,0.06));box-shadow:0 14px 34px rgba(0,0,0,0.12)}',
            '.cp-boundary-script-kicker{font-size:11px;font-weight:900;letter-spacing:.08em;color:#93c5fd;margin-bottom:5px}',
            '.cp-boundary-script-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-boundary-script-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,0.7);margin-bottom:13px}',
            '.cp-boundary-script-link{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:11px 16px;border-radius:11px;background:#2563eb;color:#fff;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-boundary-library-link{display:inline-flex;align-items:center;min-height:44px;margin-left:10px;color:#ddd6fe;text-decoration:underline;text-underline-offset:3px;font-size:13px;font-weight:800}',
            '.cp-boundary-script-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-boundary-library-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-sensory-reset{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(74,222,128,0.28);border-radius:16px;background:linear-gradient(135deg,rgba(22,163,74,0.1),rgba(13,148,136,0.06));box-shadow:0 14px 34px rgba(0,0,0,0.12)}',
            '.cp-sensory-reset-kicker{font-size:11px;font-weight:900;letter-spacing:.08em;color:#86efac;margin-bottom:5px}',
            '.cp-sensory-reset-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-sensory-reset-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,0.7);margin-bottom:13px}',
            '.cp-sensory-reset-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}',
            '.cp-sensory-reset-link{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:11px 16px;border-radius:11px;background:#16a34a;color:#fff;text-decoration:none;text-align:center;font-size:14px;font-weight:850}',
            '.cp-sensory-reset-link[data-destination="map"]{background:#2563eb}',
            '.cp-sensory-reset-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '@media(max-width:560px){.cp-sensory-reset-actions{grid-template-columns:1fr}}',
            '.cp-couple-deck{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(244,114,182,0.3);border-radius:16px;background:linear-gradient(135deg,rgba(233,30,99,0.12),rgba(124,58,237,0.07));box-shadow:0 14px 34px rgba(0,0,0,0.12)}',
            '.cp-couple-deck-kicker{font-size:11px;font-weight:900;letter-spacing:.08em;color:#f9a8d4;margin-bottom:5px}',
            '.cp-couple-deck-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-couple-deck-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,0.7);margin-bottom:13px}',
            '.cp-couple-deck-link{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:11px 16px;border-radius:11px;background:#db2777;color:#fff;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-couple-deck-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-kpop-roster{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(244,114,182,.34);border-radius:16px;background:linear-gradient(135deg,rgba(72,20,55,.96),rgba(38,29,72,.94));box-shadow:0 14px 34px rgba(0,0,0,.16)}',
            '.cp-kpop-roster-kicker{font-size:11px;font-weight:900;letter-spacing:.1em;color:#f9a8d4;margin-bottom:5px}',
            '.cp-kpop-roster-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-kpop-roster-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,.72);margin-bottom:13px}',
            '.cp-kpop-roster-actions{display:grid;grid-template-columns:1fr 1fr;gap:9px}',
            '.cp-kpop-roster-link{display:flex;align-items:center;justify-content:center;min-height:46px;padding:11px 14px;border-radius:11px;background:#f472b6;color:#2b071e;text-align:center;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-kpop-roster-link:last-child{background:#8b5cf6;color:#fff}',
            '.cp-kpop-roster-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-past-life-story{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(233,189,105,.36);border-radius:16px;background:linear-gradient(135deg,rgba(38,29,61,.97),rgba(37,27,49,.95));box-shadow:0 14px 34px rgba(0,0,0,.16)}',
            '.cp-past-life-story-kicker{font-size:11px;font-weight:900;letter-spacing:.1em;color:#e9bd69;margin-bottom:5px}',
            '.cp-past-life-story-title{font:800 20px/1.25 Georgia,serif;color:#fff9eb;margin-bottom:6px}',
            '.cp-past-life-story-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,.72);margin-bottom:13px}',
            '.cp-past-life-story-actions{display:grid;grid-template-columns:1.2fr 1fr;gap:9px}',
            '.cp-past-life-story-link{display:flex;align-items:center;justify-content:center;min-height:46px;padding:11px 14px;border-radius:11px;background:#e9bd69;color:#2c2135;text-align:center;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-past-life-story-link:last-child{background:#8b6aa8;color:#fff}',
            '.cp-past-life-story-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-palworld-game{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(70,217,232,0.3);border-radius:16px;background:linear-gradient(135deg,rgba(6,35,45,0.96),rgba(35,24,67,0.92));box-shadow:0 14px 34px rgba(0,0,0,0.16)}',
            '.cp-palworld-game-kicker{font-size:11px;font-weight:900;letter-spacing:.1em;color:#b7ef5d;margin-bottom:5px}',
            '.cp-palworld-game-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-palworld-game-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,0.72);margin-bottom:13px}',
            '.cp-palworld-game-actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}',
            '.cp-palworld-game-link{display:flex;align-items:center;justify-content:center;min-height:46px;padding:11px 14px;border-radius:11px;background:#46d9e8;color:#061017;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-palworld-game-link:last-child{background:#b7ef5d}',
            '.cp-palworld-game-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-2048-coach{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(246,196,83,.38);border-radius:16px;background:linear-gradient(135deg,rgba(58,45,23,.96),rgba(38,29,72,.94));box-shadow:0 14px 34px rgba(0,0,0,.16)}',
            '.cp-2048-coach-kicker{font-size:11px;font-weight:900;letter-spacing:.1em;color:#f6c453;margin-bottom:5px}',
            '.cp-2048-coach-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-2048-coach-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,.72);margin-bottom:13px}',
            '.cp-2048-coach-actions{display:grid;grid-template-columns:1fr 1fr;gap:9px}',
            '.cp-2048-coach-link{display:flex;align-items:center;justify-content:center;min-height:46px;padding:11px 14px;border-radius:11px;background:#f6c453;color:#21180b;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-2048-coach-link:last-child{background:#8b7cf6;color:#fff}',
            '.cp-2048-coach-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-brain-workout{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(94,234,212,.38);border-radius:16px;background:linear-gradient(135deg,rgba(8,42,49,.96),rgba(38,29,72,.94));box-shadow:0 14px 34px rgba(0,0,0,.16)}',
            '.cp-brain-workout-kicker{font-size:11px;font-weight:900;letter-spacing:.1em;color:#5eead4;margin-bottom:5px}',
            '.cp-brain-workout-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-brain-workout-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,.72);margin-bottom:13px}',
            '.cp-brain-workout-link{display:flex;align-items:center;justify-content:center;min-height:46px;padding:11px 14px;border-radius:11px;background:#5eead4;color:#06211e;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-brain-workout-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-emotion-action{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(251,113,133,.38);border-radius:16px;background:linear-gradient(135deg,rgba(65,22,38,.96),rgba(20,42,59,.94));box-shadow:0 14px 34px rgba(0,0,0,.16)}',
            '.cp-emotion-action-kicker{font-size:11px;font-weight:900;letter-spacing:.1em;color:#fda4af;margin-bottom:5px}',
            '.cp-emotion-action-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-emotion-action-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,.72);margin-bottom:13px}',
            '.cp-emotion-action-link{display:flex;align-items:center;justify-content:center;min-height:46px;padding:11px 14px;border-radius:11px;background:#fb7185;color:#2b0710;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-sticky-sprint{position:fixed;left:12px;right:12px;bottom:max(12px,env(safe-area-inset-bottom));z-index:2147483000;display:flex;align-items:center;gap:10px;max-width:680px;margin:0 auto;padding:10px 10px 10px 12px;border:1px solid rgba(124,58,237,0.28);border-radius:8px;background:rgba(17,24,39,0.94);box-shadow:0 12px 32px rgba(0,0,0,0.28);backdrop-filter:blur(12px)}',
            '.cp-sticky-copy{min-width:0;flex:1}',
            '.cp-sticky-kicker{font-size:11px;font-weight:800;color:rgba(255,255,255,0.58);text-transform:uppercase;letter-spacing:0}',
            '.cp-sticky-name{font-size:14px;font-weight:800;color:#fff;line-height:1.25;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
            '.cp-sticky-alt{display:flex;align-items:center;max-width:100%;min-height:44px;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#67e8f9;text-decoration:none;font-size:11px;font-weight:800;line-height:1.2}',
            '.cp-sticky-link{display:inline-flex;align-items:center;justify-content:center;flex:0 0 auto;min-height:44px;padding:10px 12px;border-radius:8px;background:#7c3aed;color:#fff;text-decoration:none;font-size:13px;font-weight:800;line-height:1}',
            '.cp-sticky-close{width:44px;height:44px;flex:0 0 44px;border:0;border-radius:8px;background:rgba(255,255,255,0.08);color:#fff;font-size:18px;line-height:1;cursor:pointer}',
            '.cp-sticky-link:focus-visible,.cp-sticky-alt:focus-visible,.cp-sticky-close:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:2px}',
            '@media(min-width:900px){.cp-sticky-sprint{display:none}}',
            '.cp-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}',
            '.cp-name{font-size:13px;font-weight:700;color:rgba(255,255,255,0.92);line-height:1.3}',
            '.cp-desc{font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px;line-height:1.35}',
            '@media(max-width:720px){.cp-mobile-sprint .cp-grid,.cp-revenue-recovery .cp-grid,.cp-scan-recovery .cp-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}',
            '@media(max-width:560px){.cp-grid{grid-template-columns:1fr}.cp-section{padding:18px 12px}.cp-mobile-sprint .cp-grid,.cp-revenue-recovery .cp-grid,.cp-scan-recovery .cp-grid,.cp-kpop-roster-actions,.cp-past-life-story-actions{grid-template-columns:1fr}.cp-stress-script-link,.cp-boundary-library-link{display:flex;margin:8px 0 0}}',
            'html.light-mode .cp-section,[data-theme="light"] .cp-section{border-top-color:rgba(0,0,0,0.08)}',
            'html.light-mode .cp-title,[data-theme="light"] .cp-title{color:rgba(0,0,0,0.52)}',
            'html.light-mode .cp-card,[data-theme="light"] .cp-card{background:rgba(0,0,0,0.03);border-color:rgba(0,0,0,0.07)}',
            'html.light-mode .cp-card:hover,[data-theme="light"] .cp-card:hover{background:rgba(0,0,0,0.06);border-color:rgba(0,0,0,0.12)}',
            'html.light-mode .cp-name,[data-theme="light"] .cp-name{color:rgba(0,0,0,0.85)}',
            'html.light-mode .cp-desc,[data-theme="light"] .cp-desc{color:rgba(0,0,0,0.48)}',
            'html.light-mode .cp-stress-plan,[data-theme="light"] .cp-stress-plan{background:linear-gradient(135deg,rgba(22,163,74,0.08),rgba(8,145,178,0.05));border-color:rgba(22,163,74,0.24)}',
            'html.light-mode .cp-stress-plan-kicker,[data-theme="light"] .cp-stress-plan-kicker{color:#15803d}',
            'html.light-mode .cp-stress-plan-title,[data-theme="light"] .cp-stress-plan-title{color:rgba(0,0,0,0.88)}',
            'html.light-mode .cp-stress-plan-desc,[data-theme="light"] .cp-stress-plan-desc{color:rgba(0,0,0,0.62)}',
            'html.light-mode .cp-stress-script-link,[data-theme="light"] .cp-stress-script-link{color:#1d4ed8}',
            'html.light-mode .cp-boundary-script,[data-theme="light"] .cp-boundary-script{background:linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.05));border-color:rgba(37,99,235,0.24)}',
            'html.light-mode .cp-boundary-script-kicker,[data-theme="light"] .cp-boundary-script-kicker{color:#1d4ed8}',
            'html.light-mode .cp-boundary-script-title,[data-theme="light"] .cp-boundary-script-title{color:rgba(0,0,0,0.88)}',
            'html.light-mode .cp-boundary-script-desc,[data-theme="light"] .cp-boundary-script-desc{color:rgba(0,0,0,0.62)}',
            'html.light-mode .cp-boundary-library-link,[data-theme="light"] .cp-boundary-library-link{color:#6d28d9}',
            'html.light-mode .cp-sensory-reset,[data-theme="light"] .cp-sensory-reset{background:linear-gradient(135deg,rgba(22,163,74,0.08),rgba(13,148,136,0.05));border-color:rgba(22,163,74,0.24)}',
            'html.light-mode .cp-sensory-reset-kicker,[data-theme="light"] .cp-sensory-reset-kicker{color:#15803d}',
            'html.light-mode .cp-sensory-reset-title,[data-theme="light"] .cp-sensory-reset-title{color:rgba(0,0,0,0.88)}',
            'html.light-mode .cp-sensory-reset-desc,[data-theme="light"] .cp-sensory-reset-desc{color:rgba(0,0,0,0.62)}',
            'html.light-mode .cp-couple-deck,[data-theme="light"] .cp-couple-deck{background:linear-gradient(135deg,rgba(219,39,119,0.08),rgba(124,58,237,0.05));border-color:rgba(219,39,119,0.24)}',
            'html.light-mode .cp-couple-deck-kicker,[data-theme="light"] .cp-couple-deck-kicker{color:#be185d}',
            'html.light-mode .cp-couple-deck-title,[data-theme="light"] .cp-couple-deck-title{color:rgba(0,0,0,0.88)}',
            'html.light-mode .cp-couple-deck-desc,[data-theme="light"] .cp-couple-deck-desc{color:rgba(0,0,0,0.62)}',
            'html.light-mode .cp-palworld-game,[data-theme="light"] .cp-palworld-game{background:linear-gradient(135deg,rgba(70,217,232,0.1),rgba(183,239,93,0.08));border-color:rgba(6,100,120,0.24)}',
            'html.light-mode .cp-palworld-game-title,[data-theme="light"] .cp-palworld-game-title{color:rgba(0,0,0,0.88)}',
            'html.light-mode .cp-palworld-game-desc,[data-theme="light"] .cp-palworld-game-desc{color:rgba(0,0,0,0.62)}',
            'html.light-mode .cp-2048-coach,[data-theme="light"] .cp-2048-coach{background:linear-gradient(135deg,rgba(246,196,83,.12),rgba(139,124,246,.08));border-color:rgba(160,110,20,.28)}',
            'html.light-mode .cp-2048-coach-title,[data-theme="light"] .cp-2048-coach-title{color:rgba(0,0,0,.88)}',
            'html.light-mode .cp-2048-coach-desc,[data-theme="light"] .cp-2048-coach-desc{color:rgba(0,0,0,.62)}',
            'html.light-mode .cp-brain-workout,[data-theme="light"] .cp-brain-workout{background:linear-gradient(135deg,rgba(94,234,212,.1),rgba(139,124,246,.08));border-color:rgba(15,118,110,.28)}',
            'html.light-mode .cp-brain-workout-title,[data-theme="light"] .cp-brain-workout-title{color:rgba(0,0,0,.88)}',
            'html.light-mode .cp-brain-workout-desc,[data-theme="light"] .cp-brain-workout-desc{color:rgba(0,0,0,.62)}',
            'html.light-mode .cp-emotion-action,[data-theme="light"] .cp-emotion-action{background:linear-gradient(135deg,rgba(251,113,133,.1),rgba(103,232,249,.08));border-color:rgba(190,24,93,.25)}',
            'html.light-mode .cp-emotion-action-title,[data-theme="light"] .cp-emotion-action-title{color:rgba(0,0,0,.88)}',
            'html.light-mode .cp-emotion-action-desc,[data-theme="light"] .cp-emotion-action-desc{color:rgba(0,0,0,.62)}',
            '@media(max-width:480px){.cp-palworld-game-actions,.cp-2048-coach-actions{grid-template-columns:1fr}}',
            '.cp-card:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:2px}'
        ].join('');
        document.head.appendChild(style);

        function buildBridgeHtml(extraClass, surfaceName, itemList, titleOverride, topicKeyOverride, strategyIdsOverride) {
            var title = titleOverride || bridge.title;
            var cards = itemList || picks;
            var topicKey = topicKeyOverride || bridge.topicKey;
            var strategyIds = strategyIdsOverride || bridge.ids;
            var html = '<nav class="cp-section cp-blog-bridge ' + extraClass + '" aria-label="' + title + '" data-detected-market="' + bridge.market + '" data-content-locale="' + bridge.locale + '" data-surface-name="' + surfaceName + '" data-topic-strategy="' + topicKey + '" data-bridge-strategy="' + strategyIds.join(',') + '" data-revenue-goal="daily_0_20"><div class="cp-title">' + title + '</div><div class="cp-grid">';
            cards.forEach(function(app) {
                var url = withLangParam(app.url.replace('https://dopabrain.com', ''), bridge.locale);
                html += '<a href="' + url + '" class="cp-card" aria-label="' + getAppName(app, bridge.locale) + '" data-destination-id="' + app.id + '" data-destination-category="' + app.category + '">'
                    + '<div class="cp-icon" style="background:linear-gradient(135deg,' + app.color + '22,' + app.color + '08)">' + app.icon + '</div>'
                    + '<div><div class="cp-name">' + getAppName(app, bridge.locale) + '</div>'
                    + '<div class="cp-desc">' + getAppDesc(app, bridge.locale) + '</div></div></a>';
            });
            html += '</div></nav>';
            return html;
        }

        function getStickySprintCopy(locale) {
            if (locale === 'zh') {
                return { kicker: '60 秒快速测试', action: '开始', close: '关闭' };
            }
            if (locale === 'ko') {
                return { kicker: '60초 빠른 테스트', action: '시작', close: '닫기' };
            }
            return { kicker: '60-second test', action: 'Start', close: 'Dismiss' };
        }

        function getStickyPrimaryApp(itemList, revenueSprint) {
            if (bridge.market === 'zh' && revenueSprint && /^revenue_sprint_/.test(revenueSprint.topicKey || '')) {
                return itemList.find(function(candidate) {
                    return candidate && candidate.id === 'mental-age';
                }) || itemList[0];
            }
            return itemList[0];
        }

        function getStickyAlternateApp(primaryApp, itemList, revenueSprint) {
            if (bridge.market !== 'zh' || !revenueSprint || !itemList || !itemList.length) return null;
            if (!/^revenue_sprint_/.test(revenueSprint.topicKey || '')) return null;
            var preferredId = primaryApp.id === 'mental-age' ? 'hsp-test' : 'mental-age';
            return itemList.find(function(candidate) {
                return candidate && candidate.id === preferredId && candidate.id !== primaryApp.id;
            }) || null;
        }

        function getStickyAlternatePrefix(locale, appId) {
            if (locale === 'zh' && appId === 'mental-age') return '高互动';
            if (locale === 'zh') return '相关';
            if (locale === 'ko') return '추천';
            return 'Trending';
        }

        function getStickyDelayMs(revenueSprint) {
            if (bridge.market === 'zh' && revenueSprint && /^revenue_sprint_/.test(revenueSprint.topicKey || '')) {
                return 500;
            }
            return 1400;
        }

        function mountStickySprint(revenueSprint, itemList) {
            if (!revenueSprint || !itemList || !itemList.length) return;
            if (isScanRiskVisit(bridge.market) || getDeviceType() === 'desktop') return;
            if (document.querySelector('.cp-sticky-sprint')) return;
            try {
                if (sessionStorage.getItem('dopabrain_sticky_sprint_dismissed') === '1') return;
            } catch(e) {}

            var app = getStickyPrimaryApp(itemList, revenueSprint);
            var copy = getStickySprintCopy(bridge.locale);
            var destinationPath = withStickyAutoStart(withLangParam(app.url.replace('https://dopabrain.com', ''), bridge.locale), app.id, 'blog_sticky_sprint');
            var label = getAppName(app, bridge.locale);
            var altApp = getStickyAlternateApp(app, itemList, revenueSprint);
            var altPath = altApp ? withStickyAutoStart(withLangParam(altApp.url.replace('https://dopabrain.com', ''), bridge.locale), altApp.id, 'blog_sticky_sprint_alt') : '';
            var altHtml = altApp ? '<a class="cp-sticky-alt" href="' + altPath + '" data-destination-id="' + altApp.id + '" data-destination-category="' + altApp.category + '" data-position="2">' + getStickyAlternatePrefix(bridge.locale, altApp.id) + ': ' + getAppName(altApp, bridge.locale) + '</a>' : '';
            var html = '<aside class="cp-sticky-sprint" data-detected-market="' + bridge.market + '" data-content-locale="' + bridge.locale + '" data-surface-name="blog_sticky_sprint" data-topic-strategy="' + revenueSprint.topicKey + '" data-bridge-strategy="' + revenueSprint.ids.join(',') + '" data-revenue-goal="daily_0_20">'
                + '<div class="cp-sticky-copy"><div class="cp-sticky-kicker">' + copy.kicker + '</div><div class="cp-sticky-name">' + label + '</div>' + altHtml + '</div>'
                + '<a class="cp-sticky-link" href="' + destinationPath + '" data-destination-id="' + app.id + '" data-destination-category="' + app.category + '" data-position="1">' + copy.action + '</a>'
                + '<button class="cp-sticky-close" type="button" aria-label="' + copy.close + '">&times;</button>'
                + '</aside>';

            window.setTimeout(function() {
                if (document.hidden || document.querySelector('.cp-sticky-sprint')) return;
                document.body.insertAdjacentHTML('beforeend', html);
                var sticky = document.querySelector('.cp-sticky-sprint');
                if (!sticky) return;
                if (typeof gtag === 'function') {
                    gtag('event', 'cross_promo_view', {
                        event_category: 'engagement',
                        source_app: 'blog',
                        surface_type: 'cross_promo',
                        surface_name: 'blog_sticky_sprint',
                        detected_market: bridge.market,
                        content_locale: bridge.locale,
                        topic_strategy: revenueSprint.topicKey,
                        bridge_strategy: revenueSprint.ids.join(','),
                        revenue_goal: 'daily_0_20',
                        item_count: altApp ? 2 : 1,
                        transport_type: 'beacon'
                    });
                }
                sticky.addEventListener('click', function(e) {
                    var close = e.target.closest('.cp-sticky-close');
                    if (close) {
                        try { sessionStorage.setItem('dopabrain_sticky_sprint_dismissed', '1'); } catch(err) {}
                        sticky.remove();
                        if (typeof gtag === 'function') {
                            gtag('event', 'cross_promo_dismiss', {
                                event_category: 'engagement',
                                source_app: 'blog',
                                surface_type: 'cross_promo',
                                surface_name: 'blog_sticky_sprint',
                                detected_market: bridge.market,
                                content_locale: bridge.locale,
                                revenue_goal: 'daily_0_20'
                            });
                        }
                        return;
                    }
                    var link = e.target.closest('.cp-sticky-link,.cp-sticky-alt');
                    if (!link) return;
                    var destinationId = link.getAttribute('data-destination-id');
                    var destinationCategory = link.getAttribute('data-destination-category');
                    var clickedPath = link.getAttribute('href') || destinationPath;
                    rememberAppClick(link.getAttribute('data-destination-id'), link.getAttribute('data-destination-category'));
                    if (typeof gtag === 'function') {
                        gtag('event', 'cross_promo_click', {
                            event_category: 'engagement',
                            event_label: clickedPath,
                            source_app: 'blog',
                            surface_type: 'cross_promo',
                            surface_name: 'blog_sticky_sprint',
                            destination_path: clickedPath,
                            destination_id: destinationId,
                            destination_category: destinationCategory,
                            destination_position: link.getAttribute('data-position') || '1',
                            detected_market: bridge.market,
                            content_locale: bridge.locale,
                            topic_strategy: revenueSprint.topicKey,
                            bridge_strategy: revenueSprint.ids.join(','),
                            revenue_goal: 'daily_0_20'
                        });
                    }
                });
            }, getStickyDelayMs(revenueSprint));
        }

        var anchor = document.querySelector('article') || document.querySelector('main') || document.body;
        var hasQuickRail = !!document.querySelector('.quick-actions,[data-content-surface="quick_rail"]');
        var scanRecovery = isScanRiskVisit(bridge.market) && !hasQuickRail;
        var stressPlan = getStressPlanBridgeConfig();
        var boundaryScript = stressPlan ? null : getBoundaryScriptBridgeConfig();
        var sensoryReset = stressPlan || boundaryScript ? null : getSensoryResetBridgeConfig();
        var emotionAction = stressPlan || boundaryScript || sensoryReset ? null : getEmotionActionBridgeConfig();
        var coupleDeck = stressPlan || boundaryScript || sensoryReset || emotionAction ? null : getCoupleDeckBridgeConfig();
        var pastLifeStory = stressPlan || boundaryScript || sensoryReset || emotionAction || coupleDeck ? null : getPastLifeStoryBridgeConfig();
        var kpopRoster = stressPlan || boundaryScript || sensoryReset || emotionAction || coupleDeck || pastLifeStory ? null : getKpopRosterBridgeConfig();
        var coach2048 = stressPlan || boundaryScript || sensoryReset || emotionAction || coupleDeck || pastLifeStory || kpopRoster ? null : get2048CoachBridgeConfig();
        var brainWorkout = stressPlan || boundaryScript || sensoryReset || emotionAction || coupleDeck || pastLifeStory || kpopRoster || coach2048 ? null : getBrainWorkoutBridgeConfig();
        var palworldGame = stressPlan || boundaryScript || sensoryReset || emotionAction || coupleDeck || pastLifeStory || kpopRoster || coach2048 || brainWorkout ? null : getPalworldGameBridgeConfig();
        if (palworldGame || coach2048 || brainWorkout || emotionAction || kpopRoster || pastLifeStory) scanRecovery = false;
        var revenueSprint = stressPlan || boundaryScript || sensoryReset || emotionAction || coupleDeck || pastLifeStory || kpopRoster || coach2048 || brainWorkout || palworldGame ? null : getRevenueSprintStrategy(bridge);
        var sprintPicks = revenueSprint ? revenueSprint.ids
            .map(function(id) { return apps.find(function(app) { return app.id === id; }); })
            .filter(Boolean) : [];
        var earlyRecovery = !stressPlan && !boundaryScript && !sensoryReset && !emotionAction && !coupleDeck && !pastLifeStory && !kpopRoster && !coach2048 && !brainWorkout && !palworldGame && !scanRecovery && (bridge.market === 'zh' || bridge.topicKey !== 'market');

        if (stressPlan) {
            var planHtml = '<aside class="cp-stress-plan" data-surface-name="blog_stress_plan" data-content-locale="' + stressPlan.locale + '" data-plan-focus="' + stressPlan.focus + '">'
                + '<div class="cp-stress-plan-kicker">' + stressPlan.copy.kicker + '</div>'
                + '<div class="cp-stress-plan-title">' + stressPlan.copy.title + '</div>'
                + '<div class="cp-stress-plan-desc">' + stressPlan.copy.desc + '</div>'
                + '<a class="cp-stress-plan-link" href="' + stressPlan.url + '">' + stressPlan.copy.action + '</a>'
                + (stressPlan.scriptUrl ? '<a class="cp-stress-script-link" href="' + stressPlan.scriptUrl + '">' + stressPlan.copy.scriptAction + '</a>' : '')
                + '</aside>';
            var planPara = anchor.querySelector('p');
            if (planPara) planPara.insertAdjacentHTML('afterend', planHtml);
            else anchor.insertAdjacentHTML('afterbegin', planHtml);

            var planElement = document.querySelector('.cp-stress-plan');
            var planViewTracked = false;
            var trackPlanView = function() {
                if (planViewTracked || typeof gtag !== 'function') return;
                planViewTracked = true;
                gtag('event', 'stress_plan_bridge_view', {
                    event_category: 'engagement',
                    source_app: 'blog',
                    surface_name: 'blog_stress_plan',
                    content_locale: stressPlan.locale,
                    plan_focus: stressPlan.focus,
                    revenue_goal: 'daily_0_10'
                });
            };
            if (planElement && 'IntersectionObserver' in window) {
                var planObserver = new IntersectionObserver(function(entries) {
                    if (entries.some(function(entry) { return entry.isIntersecting; })) {
                        trackPlanView();
                        planObserver.disconnect();
                    }
                }, { threshold: 0.35 });
                planObserver.observe(planElement);
            } else {
                trackPlanView();
            }
            if (planElement) {
                planElement.addEventListener('click', function(event) {
                    var scriptLink = event.target.closest('.cp-stress-script-link');
                    var planLink = event.target.closest('.cp-stress-plan-link');
                    if ((!planLink && !scriptLink) || typeof gtag !== 'function') return;
                    gtag('event', scriptLink ? 'boundary_script_bridge_click' : 'stress_plan_bridge_click', {
                        event_category: 'engagement',
                        source_app: 'blog',
                        surface_name: 'blog_stress_plan',
                        content_locale: stressPlan.locale,
                        plan_focus: stressPlan.focus,
                        destination_path: scriptLink ? stressPlan.scriptUrl : stressPlan.url,
                        revenue_goal: 'daily_0_10'
                    });
                });
            }
        }

        if (boundaryScript) {
            var scriptHtml = '<aside class="cp-boundary-script" data-surface-name="blog_communication_script" data-content-locale="' + boundaryScript.locale + '" data-script-context="' + boundaryScript.context + '">'
                + '<div class="cp-boundary-script-kicker">' + boundaryScript.copy.kicker + '</div>'
                + '<div class="cp-boundary-script-title">' + boundaryScript.copy.title + '</div>'
                + '<div class="cp-boundary-script-desc">' + boundaryScript.copy.desc + '</div>'
                + '<a class="cp-boundary-script-link" href="' + boundaryScript.url + '">' + boundaryScript.copy.action + '</a>'
                + '<a class="cp-boundary-library-link" href="' + boundaryScript.libraryUrl + '">' + boundaryScript.copy.libraryAction + '</a>'
                + '</aside>';
            var scriptPara = anchor.querySelector('p');
            if (scriptPara) scriptPara.insertAdjacentHTML('afterend', scriptHtml);
            else anchor.insertAdjacentHTML('afterbegin', scriptHtml);

            var scriptElement = document.querySelector('.cp-boundary-script');
            var scriptViewTracked = false;
            var trackScriptView = function() {
                if (scriptViewTracked || typeof gtag !== 'function') return;
                scriptViewTracked = true;
                gtag('event', 'boundary_script_bridge_view', {
                    event_category: 'engagement',
                    source_app: 'blog',
                    surface_name: 'blog_communication_script',
                    content_locale: boundaryScript.locale,
                    script_context: boundaryScript.context,
                    revenue_goal: 'daily_0_10'
                });
            };
            if (scriptElement && 'IntersectionObserver' in window) {
                var scriptObserver = new IntersectionObserver(function(entries) {
                    if (entries.some(function(entry) { return entry.isIntersecting; })) {
                        trackScriptView();
                        scriptObserver.disconnect();
                    }
                }, { threshold: 0.35 });
                scriptObserver.observe(scriptElement);
            } else {
                trackScriptView();
            }
            if (scriptElement) {
                scriptElement.addEventListener('click', function(event) {
                    var scriptLink = event.target.closest('.cp-boundary-script-link');
                    var libraryLink = event.target.closest('.cp-boundary-library-link');
                    if ((!scriptLink && !libraryLink) || typeof gtag !== 'function') return;
                    gtag('event', libraryLink ? 'boundary_library_bridge_click' : 'boundary_script_bridge_click', {
                        event_category: 'engagement',
                        source_app: 'blog',
                        surface_name: 'blog_communication_script',
                        content_locale: boundaryScript.locale,
                        script_context: boundaryScript.context,
                        destination_path: libraryLink ? boundaryScript.libraryUrl : boundaryScript.url,
                        revenue_goal: 'daily_0_10'
                    });
                });
            }
        }

        if (sensoryReset) {
            var resetHtml = '<aside class="cp-sensory-reset" data-surface-name="blog_sensory_reset" data-content-locale="' + sensoryReset.locale + '">'
                + '<div class="cp-sensory-reset-kicker">' + sensoryReset.copy.kicker + '</div>'
                + '<div class="cp-sensory-reset-title">' + sensoryReset.copy.title + '</div>'
                + '<div class="cp-sensory-reset-desc">' + sensoryReset.copy.desc + '</div>'
                + '<div class="cp-sensory-reset-actions">'
                + '<a class="cp-sensory-reset-link" data-destination="reset" href="' + sensoryReset.url + '">' + sensoryReset.copy.action + '</a>'
                + '<a class="cp-sensory-reset-link" data-destination="map" href="' + sensoryReset.mapUrl + '">' + sensoryReset.copy.mapAction + '</a>'
                + '</div>'
                + '</aside>';
            var resetPara = anchor.querySelector('p');
            if (resetPara) resetPara.insertAdjacentHTML('afterend', resetHtml);
            else anchor.insertAdjacentHTML('afterbegin', resetHtml);

            var resetElement = document.querySelector('.cp-sensory-reset');
            var resetViewTracked = false;
            var trackResetView = function() {
                if (resetViewTracked || typeof gtag !== 'function') return;
                resetViewTracked = true;
                gtag('event', 'sensory_reset_bridge_view', {
                    event_category: 'engagement',
                    source_app: 'blog',
                    surface_name: 'blog_sensory_reset',
                    content_locale: sensoryReset.locale,
                    revenue_goal: 'daily_0_10'
                });
            };
            if (resetElement && 'IntersectionObserver' in window) {
                var resetObserver = new IntersectionObserver(function(entries) {
                    if (entries.some(function(entry) { return entry.isIntersecting; })) {
                        trackResetView();
                        resetObserver.disconnect();
                    }
                }, { threshold: 0.35 });
                resetObserver.observe(resetElement);
            } else {
                trackResetView();
            }
            if (resetElement) {
                resetElement.addEventListener('click', function(event) {
                    var resetLink = event.target.closest('.cp-sensory-reset-link');
                    if (!resetLink || typeof gtag !== 'function') return;
                    var destination = resetLink.dataset.destination === 'map' ? 'map' : 'reset';
                    gtag('event', destination === 'map' ? 'sensory_map_bridge_click' : 'sensory_reset_bridge_click', {
                        event_category: 'engagement',
                        source_app: 'blog',
                        surface_name: 'blog_sensory_reset',
                        content_locale: sensoryReset.locale,
                        destination_path: resetLink.getAttribute('href'),
                        revenue_goal: 'daily_0_10'
                    });
                });
            }
        }

        if (emotionAction) {
            var emotionHtml='<aside class="cp-emotion-action" data-surface-name="blog_emotion_action" data-content-locale="'+emotionAction.locale+'"><div class="cp-emotion-action-kicker">'+emotionAction.copy.kicker+'</div><div class="cp-emotion-action-title">'+emotionAction.copy.title+'</div><div class="cp-emotion-action-desc">'+emotionAction.copy.desc+'</div><a class="cp-emotion-action-link" href="'+emotionAction.url+'">'+emotionAction.copy.action+'</a></aside>';
            var emotionPara=anchor.querySelector('p');if(emotionPara)emotionPara.insertAdjacentHTML('afterend',emotionHtml);else anchor.insertAdjacentHTML('afterbegin',emotionHtml);
            var emotionElement=document.querySelector('.cp-emotion-action'),emotionViewed=false;
            var trackEmotionView=function(){if(emotionViewed||typeof gtag!=='function')return;emotionViewed=true;gtag('event','emotion_action_bridge_view',{event_category:'engagement',source_app:'blog',surface_name:'blog_emotion_action',content_locale:emotionAction.locale,revenue_goal:'daily_0_10'});};
            if(emotionElement&&'IntersectionObserver'in window){var emotionObserver=new IntersectionObserver(function(entries){if(entries.some(function(entry){return entry.isIntersecting;})){trackEmotionView();emotionObserver.disconnect();}},{threshold:.35});emotionObserver.observe(emotionElement);}else trackEmotionView();
            if(emotionElement)emotionElement.addEventListener('click',function(event){var link=event.target.closest('.cp-emotion-action-link');if(!link||typeof gtag!=='function')return;gtag('event','emotion_action_bridge_click',{event_category:'engagement',source_app:'blog',surface_name:'blog_emotion_action',content_locale:emotionAction.locale,destination_path:link.getAttribute('href')||'',revenue_goal:'daily_0_10'});});
        }

        if (coupleDeck) {
            var deckHtml = '<aside class="cp-couple-deck" data-surface-name="blog_couple_deck" data-content-locale="' + coupleDeck.locale + '">'
                + '<div class="cp-couple-deck-kicker">' + coupleDeck.copy.kicker + '</div>'
                + '<div class="cp-couple-deck-title">' + coupleDeck.copy.title + '</div>'
                + '<div class="cp-couple-deck-desc">' + coupleDeck.copy.desc + '</div>'
                + '<a class="cp-couple-deck-link" href="' + coupleDeck.url + '">' + coupleDeck.copy.action + '</a>'
                + '</aside>';
            var deckPara = anchor.querySelector('p');
            if (deckPara) deckPara.insertAdjacentHTML('afterend', deckHtml);
            else anchor.insertAdjacentHTML('afterbegin', deckHtml);

            var deckElement = document.querySelector('.cp-couple-deck');
            var deckViewTracked = false;
            var trackDeckView = function() {
                if (deckViewTracked || typeof gtag !== 'function') return;
                deckViewTracked = true;
                gtag('event', 'couple_deck_bridge_view', {
                    event_category: 'engagement',
                    source_app: 'blog',
                    surface_name: 'blog_couple_deck',
                    content_locale: coupleDeck.locale,
                    revenue_goal: 'daily_0_10'
                });
            };
            if (deckElement && 'IntersectionObserver' in window) {
                var deckObserver = new IntersectionObserver(function(entries) {
                    if (entries.some(function(entry) { return entry.isIntersecting; })) {
                        trackDeckView();
                        deckObserver.disconnect();
                    }
                }, { threshold: 0.35 });
                deckObserver.observe(deckElement);
            } else {
                trackDeckView();
            }
            if (deckElement) {
                deckElement.addEventListener('click', function(event) {
                    var deckLink = event.target.closest('.cp-couple-deck-link');
                    if (!deckLink || typeof gtag !== 'function') return;
                    gtag('event', 'couple_deck_bridge_click', {
                        event_category: 'engagement',
                        source_app: 'blog',
                        surface_name: 'blog_couple_deck',
                        content_locale: coupleDeck.locale,
                        destination_path: coupleDeck.url,
                        revenue_goal: 'daily_0_10'
                    });
                });
            }
        }

        if (kpopRoster) {
            var kpopHtml = '<aside class="cp-kpop-roster" data-surface-name="blog_kpop_roster" data-content-locale="' + kpopRoster.locale + '">'
                + '<div class="cp-kpop-roster-kicker">' + kpopRoster.copy.kicker + '</div>'
                + '<div class="cp-kpop-roster-title">' + kpopRoster.copy.title + '</div>'
                + '<div class="cp-kpop-roster-desc">' + kpopRoster.copy.desc + '</div>'
                + '<div class="cp-kpop-roster-actions">'
                + '<a class="cp-kpop-roster-link" data-destination="group_roster" href="' + kpopRoster.rosterUrl + '">' + kpopRoster.copy.roster + '</a>'
                + '<a class="cp-kpop-roster-link" data-destination="position_test" href="' + kpopRoster.testUrl + '">' + kpopRoster.copy.test + '</a>'
                + '</div></aside>';
            var kpopPara = anchor.querySelector('p');
            if (kpopPara) kpopPara.insertAdjacentHTML('afterend', kpopHtml);
            else anchor.insertAdjacentHTML('afterbegin', kpopHtml);
            var kpopElement = document.querySelector('.cp-kpop-roster');
            var kpopViewed = false;
            var trackKpopView = function() {
                if (kpopViewed || typeof gtag !== 'function') return;
                kpopViewed = true;
                gtag('event', 'kpop_roster_bridge_view', { event_category: 'engagement', source_app: 'blog', surface_name: 'blog_kpop_roster', content_locale: kpopRoster.locale, revenue_goal: 'daily_0_10' });
            };
            if (kpopElement && 'IntersectionObserver' in window) {
                var kpopObserver = new IntersectionObserver(function(entries) { if (entries.some(function(entry) { return entry.isIntersecting; })) { trackKpopView(); kpopObserver.disconnect(); } }, { threshold: 0.35 });
                kpopObserver.observe(kpopElement);
            } else trackKpopView();
            if (kpopElement) kpopElement.addEventListener('click', function(event) {
                var link = event.target.closest('.cp-kpop-roster-link');
                if (!link || typeof gtag !== 'function') return;
                gtag('event', 'kpop_roster_bridge_click', { event_category: 'engagement', source_app: 'blog', surface_name: 'blog_kpop_roster', content_locale: kpopRoster.locale, destination_id: link.getAttribute('data-destination') || '', destination_path: link.getAttribute('href') || '', revenue_goal: 'daily_0_10' });
            });
        }

        if (pastLifeStory) {
            var storyHtml = '<aside class="cp-past-life-story" data-surface-name="blog_past_life_story" data-content-locale="' + pastLifeStory.locale + '">'
                + '<div class="cp-past-life-story-kicker">' + pastLifeStory.copy.kicker + '</div>'
                + '<div class="cp-past-life-story-title">' + pastLifeStory.copy.title + '</div>'
                + '<div class="cp-past-life-story-desc">' + pastLifeStory.copy.desc + '</div>'
                + '<div class="cp-past-life-story-actions">'
                + '<a class="cp-past-life-story-link" data-destination="story_studio" href="' + pastLifeStory.studioUrl + '">' + pastLifeStory.copy.studio + '</a>'
                + '<a class="cp-past-life-story-link" data-destination="era_adventure" href="' + pastLifeStory.testUrl + '">' + pastLifeStory.copy.test + '</a>'
                + '</div></aside>';
            var storyPara = anchor.querySelector('p');
            if (storyPara) storyPara.insertAdjacentHTML('afterend', storyHtml);
            else anchor.insertAdjacentHTML('afterbegin', storyHtml);
            var storyElement = document.querySelector('.cp-past-life-story');
            var storyViewed = false;
            var trackStoryView = function() { if (storyViewed || typeof gtag !== 'function') return; storyViewed = true; gtag('event', 'past_life_story_bridge_view', { event_category: 'engagement', source_app: 'blog', surface_name: 'blog_past_life_story', content_locale: pastLifeStory.locale, revenue_goal: 'daily_0_10' }); };
            if (storyElement && 'IntersectionObserver' in window) { var storyObserver = new IntersectionObserver(function(entries) { if (entries.some(function(entry) { return entry.isIntersecting; })) { trackStoryView(); storyObserver.disconnect(); } }, { threshold: 0.35 }); storyObserver.observe(storyElement); } else trackStoryView();
            if (storyElement) storyElement.addEventListener('click', function(event) { var link = event.target.closest('.cp-past-life-story-link'); if (!link || typeof gtag !== 'function') return; gtag('event', 'past_life_story_bridge_click', { event_category: 'engagement', source_app: 'blog', surface_name: 'blog_past_life_story', content_locale: pastLifeStory.locale, destination_id: link.getAttribute('data-destination') || '', destination_path: link.getAttribute('href') || '', revenue_goal: 'daily_0_10' }); });
        }

        if (coach2048) {
            var coach2048Html = '<aside class="cp-2048-coach" data-surface-name="blog_2048_coach" data-content-locale="' + coach2048.locale + '">'
                + '<div class="cp-2048-coach-kicker">' + coach2048.copy.kicker + '</div>'
                + '<div class="cp-2048-coach-title">' + coach2048.copy.title + '</div>'
                + '<div class="cp-2048-coach-desc">' + coach2048.copy.desc + '</div>'
                + '<div class="cp-2048-coach-actions">'
                + '<a class="cp-2048-coach-link" data-destination="board_coach" href="' + coach2048.coachUrl + '">' + coach2048.copy.coach + '</a>'
                + '<a class="cp-2048-coach-link" data-destination="play_2048" href="' + coach2048.playUrl + '">' + coach2048.copy.play + '</a>'
                + '</div></aside>';
            var coach2048Para = anchor.querySelector('p');
            if (coach2048Para) coach2048Para.insertAdjacentHTML('afterend', coach2048Html);
            else anchor.insertAdjacentHTML('afterbegin', coach2048Html);

            var coach2048Element = document.querySelector('.cp-2048-coach');
            var coach2048ViewTracked = false;
            var trackCoach2048View = function() {
                if (coach2048ViewTracked || typeof gtag !== 'function') return;
                coach2048ViewTracked = true;
                gtag('event', 'coach_2048_bridge_view', {
                    event_category: 'engagement',
                    source_app: 'blog',
                    surface_name: 'blog_2048_coach',
                    content_locale: coach2048.locale,
                    revenue_goal: 'daily_0_10'
                });
            };
            if (coach2048Element && 'IntersectionObserver' in window) {
                var coach2048Observer = new IntersectionObserver(function(entries) {
                    if (entries.some(function(entry) { return entry.isIntersecting; })) {
                        trackCoach2048View();
                        coach2048Observer.disconnect();
                    }
                }, { threshold: 0.35 });
                coach2048Observer.observe(coach2048Element);
            } else {
                trackCoach2048View();
            }
            if (coach2048Element) {
                coach2048Element.addEventListener('click', function(event) {
                    var link = event.target.closest('.cp-2048-coach-link');
                    if (!link || typeof gtag !== 'function') return;
                    gtag('event', 'coach_2048_bridge_click', {
                        event_category: 'engagement',
                        source_app: 'blog',
                        surface_name: 'blog_2048_coach',
                        content_locale: coach2048.locale,
                        destination_id: link.getAttribute('data-destination') || '',
                        destination_path: link.getAttribute('href') || '',
                        revenue_goal: 'daily_0_10'
                    });
                });
            }
        }

        if (brainWorkout) {
            var workoutHtml = '<aside class="cp-brain-workout" data-surface-name="blog_brain_game_workout" data-content-locale="' + brainWorkout.locale + '">'
                + '<div class="cp-brain-workout-kicker">' + brainWorkout.copy.kicker + '</div>'
                + '<div class="cp-brain-workout-title">' + brainWorkout.copy.title + '</div>'
                + '<div class="cp-brain-workout-desc">' + brainWorkout.copy.desc + '</div>'
                + '<a class="cp-brain-workout-link" href="' + brainWorkout.url + '">' + brainWorkout.copy.action + '</a></aside>';
            var workoutPara = anchor.querySelector('p');
            if (workoutPara) workoutPara.insertAdjacentHTML('afterend', workoutHtml);
            else anchor.insertAdjacentHTML('afterbegin', workoutHtml);
            var workoutElement = document.querySelector('.cp-brain-workout');
            var workoutViewTracked = false;
            var trackWorkoutView = function() {
                if (workoutViewTracked || typeof gtag !== 'function') return;
                workoutViewTracked = true;
                gtag('event','brain_game_workout_bridge_view',{event_category:'engagement',source_app:'blog',surface_name:'blog_brain_game_workout',content_locale:brainWorkout.locale,revenue_goal:'daily_0_10'});
            };
            if (workoutElement && 'IntersectionObserver' in window) {
                var workoutObserver = new IntersectionObserver(function(entries){if(entries.some(function(entry){return entry.isIntersecting;})){trackWorkoutView();workoutObserver.disconnect();}},{threshold:.35});
                workoutObserver.observe(workoutElement);
            } else trackWorkoutView();
            if (workoutElement) workoutElement.addEventListener('click',function(event){
                var link=event.target.closest('.cp-brain-workout-link');if(!link||typeof gtag!=='function')return;
                gtag('event','brain_game_workout_bridge_click',{event_category:'engagement',source_app:'blog',surface_name:'blog_brain_game_workout',content_locale:brainWorkout.locale,destination_path:link.getAttribute('href')||'',revenue_goal:'daily_0_10'});
            });
        }

        if (palworldGame) {
            var palworldHtml = '<aside class="cp-palworld-game" data-surface-name="blog_palworld_game" data-content-locale="' + palworldGame.locale + '">'
                + '<div class="cp-palworld-game-kicker">' + palworldGame.copy.kicker + '</div>'
                + '<div class="cp-palworld-game-title">' + palworldGame.copy.title + '</div>'
                + '<div class="cp-palworld-game-desc">' + palworldGame.copy.desc + '</div>'
                + '<div class="cp-palworld-game-actions">'
                + '<a class="cp-palworld-game-link" data-destination="field_guide" href="' + palworldGame.fieldUrl + '">' + palworldGame.copy.field + '</a>'
                + '<a class="cp-palworld-game-link" data-destination="base_planner" href="' + palworldGame.baseUrl + '">' + palworldGame.copy.base + '</a>'
                + '<a class="cp-palworld-game-link" data-destination="breeding_notebook" href="' + palworldGame.breedingUrl + '">' + palworldGame.copy.breeding + '</a>'
                + '</div></aside>';
            var palworldPara = anchor.querySelector('p');
            if (palworldPara) palworldPara.insertAdjacentHTML('afterend', palworldHtml);
            else anchor.insertAdjacentHTML('afterbegin', palworldHtml);

            var palworldElement = document.querySelector('.cp-palworld-game');
            var palworldViewTracked = false;
            var trackPalworldView = function() {
                if (palworldViewTracked || typeof gtag !== 'function') return;
                palworldViewTracked = true;
                gtag('event', 'palworld_game_bridge_view', {
                    event_category: 'engagement',
                    source_app: 'blog',
                    surface_name: 'blog_palworld_game',
                    content_locale: palworldGame.locale,
                    revenue_goal: 'daily_0_10'
                });
            };
            if (palworldElement && 'IntersectionObserver' in window) {
                var palworldObserver = new IntersectionObserver(function(entries) {
                    if (entries.some(function(entry) { return entry.isIntersecting; })) {
                        trackPalworldView();
                        palworldObserver.disconnect();
                    }
                }, { threshold: 0.35 });
                palworldObserver.observe(palworldElement);
            } else {
                trackPalworldView();
            }
            if (palworldElement) {
                palworldElement.addEventListener('click', function(event) {
                    var link = event.target.closest('.cp-palworld-game-link');
                    if (!link || typeof gtag !== 'function') return;
                    gtag('event', 'palworld_game_bridge_click', {
                        event_category: 'engagement',
                        source_app: 'blog',
                        surface_name: 'blog_palworld_game',
                        content_locale: palworldGame.locale,
                        destination_id: link.getAttribute('data-destination') || '',
                        destination_path: link.getAttribute('href') || '',
                        revenue_goal: 'daily_0_10'
                    });
                });
            }
        }

        if (scanRecovery) {
            var firstPara = anchor.querySelector('p');
            var recoveryHtml = buildBridgeHtml('cp-scan-recovery', 'blog_scan_recovery');
            if (firstPara) firstPara.insertAdjacentHTML('afterend', recoveryHtml);
            else anchor.insertAdjacentHTML('afterbegin', recoveryHtml);
        }

        if (sprintPicks.length) {
            var sprintPara = anchor.querySelector('p');
            var sprintHtml = buildBridgeHtml('cp-mobile-sprint', 'blog_revenue_sprint', sprintPicks, revenueSprint.title, revenueSprint.topicKey, revenueSprint.ids);
            if (sprintPara) sprintPara.insertAdjacentHTML('afterend', sprintHtml);
            else anchor.insertAdjacentHTML('afterbegin', sprintHtml);
            mountStickySprint(revenueSprint, sprintPicks);
        } else if (earlyRecovery) {
            var earlyPara = anchor.querySelector('p');
            var earlyHtml = buildBridgeHtml('cp-revenue-recovery', 'blog_revenue_recovery');
            if (earlyPara) earlyPara.insertAdjacentHTML('afterend', earlyHtml);
            else anchor.insertAdjacentHTML('afterbegin', earlyHtml);
        }

        anchor.insertAdjacentHTML('beforeend', buildBridgeHtml('', 'blog_bridge'));

        function trackBridgeView(bridgeEl, surfaceName, itemCount) {
            if (typeof gtag !== 'function') return;
            var fire = function() {
                if (document.hidden) return;
                gtag('event', 'cross_promo_view', {
                    event_category: 'engagement',
                    source_app: 'blog',
                    surface_type: 'cross_promo',
                    surface_name: surfaceName,
                    detected_market: bridge.market,
                    content_locale: bridge.locale,
                    topic_strategy: bridgeEl.dataset.topicStrategy || bridge.topicKey,
                    bridge_strategy: bridgeEl.dataset.bridgeStrategy || bridge.ids.join(','),
                    revenue_goal: bridgeEl.dataset.revenueGoal || '',
                    item_count: itemCount,
                    view_delay_ms: bridge.market === 'sg' && getDeviceType() === 'desktop' && !document.referrer ? SCAN_GUARD_DELAY_MS : 0,
                    transport_type: 'beacon'
                });
            };
            if (bridge.market === 'sg' && getDeviceType() === 'desktop' && !document.referrer) {
                window.setTimeout(fire, SCAN_GUARD_DELAY_MS);
            } else {
                fire();
            }
        }

        document.querySelectorAll('.cp-blog-bridge').forEach(function(bridgeEl) {
            var surfaceName = bridgeEl.dataset.surfaceName || 'blog_bridge';
            trackBridgeView(bridgeEl, surfaceName, bridgeEl.querySelectorAll('.cp-card').length);
            bridgeEl.addEventListener('click', function(e) {
                var card = e.target.closest('.cp-card');
                if (!card) return;
                rememberAppClick(card.getAttribute('data-destination-id'), card.getAttribute('data-destination-category'));
                if (typeof gtag === 'function') {
                    var destinationPath = card.getAttribute('href') || '';
                    gtag('event', 'cross_promo_click', {
                        event_category: 'engagement',
                        event_label: destinationPath,
                        source_app: 'blog',
                        surface_type: 'cross_promo',
                        surface_name: surfaceName,
                        destination_path: destinationPath,
                        detected_market: bridge.market,
                        content_locale: bridge.locale,
                        topic_strategy: bridgeEl.dataset.topicStrategy || bridge.topicKey,
                        bridge_strategy: bridgeEl.dataset.bridgeStrategy || bridge.ids.join(','),
                        revenue_goal: bridgeEl.dataset.revenueGoal || ''
                    });
                }
            });
        });
    }

    function shuffle(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
        }
        return arr;
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
