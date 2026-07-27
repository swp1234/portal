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
            ko: { kicker: '읽은 내용을 지금 활용하세요', title: '5분 감각 과부하 리셋 카드', desc: '지금 가장 강한 자극과 장소를 고르고, 한 단계씩 따라갈 작은 시간별 계획을 만드세요.', action: '무료 리셋 카드 만들기' },
            en: { kicker: 'USE THIS GUIDE NOW', title: 'Build a 5-minute sensory reset card', desc: 'Choose the strongest input and your current setting, then follow one small timed step at a time.', action: 'Build my free reset card' },
            zh: { kicker: '立即使用这篇指南', title: '制作5分钟感官过载重置卡', desc: '选择最强刺激和当前场所，然后一次执行一个简短的计时步骤。', action: '免费制作重置卡' },
            hi: { kicker: 'इस गाइड का अभी उपयोग करें', title: '5-मिनट सेंसरी रीसेट कार्ड बनाएँ', desc: 'सबसे तेज़ इनपुट और अपनी जगह चुनें, फिर एक-एक छोटा समयबद्ध कदम लें।', action: 'मुफ़्त रीसेट कार्ड बनाएँ' },
            ru: { kicker: 'ИСПОЛЬЗУЙТЕ СОВЕТЫ СЕЙЧАС', title: 'Создайте 5-минутную сенсорную карточку', desc: 'Выберите самый сильный стимул и место, затем выполняйте по одному короткому шагу.', action: 'Создать карточку бесплатно' },
            ja: { kicker: 'ガイドを今すぐ活用', title: '5分間の感覚リセットカードを作る', desc: '最も強い刺激と今いる場所を選び、小さな時間別ステップを一つずつ進めます。', action: '無料でカードを作る' },
            es: { kicker: 'USA ESTA GUÍA AHORA', title: 'Crea una tarjeta de reinicio sensorial de 5 minutos', desc: 'Elige el estímulo más intenso y tu entorno, y sigue pequeños pasos cronometrados.', action: 'Crear tarjeta gratis' },
            pt: { kicker: 'USE ESTE GUIA AGORA', title: 'Crie um cartão de reset sensorial de 5 minutos', desc: 'Escolha o estímulo mais intenso e o local, depois siga pequenos passos cronometrados.', action: 'Criar cartão grátis' },
            id: { kicker: 'GUNAKAN PANDUAN INI SEKARANG', title: 'Buat kartu reset sensorik 5 menit', desc: 'Pilih input terkuat dan lokasi Anda, lalu ikuti satu langkah singkat pada satu waktu.', action: 'Buat kartu gratis' },
            tr: { kicker: 'BU REHBERİ ŞİMDİ KULLAN', title: '5 dakikalık duyusal sıfırlama kartı oluştur', desc: 'En güçlü uyaranı ve bulunduğunuz yeri seçip küçük zamanlı adımları izleyin.', action: 'Ücretsiz kart oluştur' },
            de: { kicker: 'RATGEBER JETZT ANWENDEN', title: '5-Minuten-Karte bei Reizüberflutung erstellen', desc: 'Wähle den stärksten Reiz und deine Umgebung, dann folge kleinen Schritten mit Zeitangaben.', action: 'Kostenlose Reset-Karte' },
            fr: { kicker: 'UTILISEZ CE GUIDE MAINTENANT', title: 'Créez une carte sensorielle de 5 minutes', desc: 'Choisissez le stimulus le plus fort et le lieu, puis suivez de petites étapes chronométrées.', action: 'Créer ma carte gratuitement' }
        };

        return {
            locale: supportedLocale,
            copy: copyByLocale[supportedLocale],
            url: '/hsp-test/reset.html?lang=' + encodeURIComponent(supportedLocale)
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
            '.cp-sensory-reset-link{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:11px 16px;border-radius:11px;background:#16a34a;color:#fff;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-sensory-reset-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-couple-deck{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(244,114,182,0.3);border-radius:16px;background:linear-gradient(135deg,rgba(233,30,99,0.12),rgba(124,58,237,0.07));box-shadow:0 14px 34px rgba(0,0,0,0.12)}',
            '.cp-couple-deck-kicker{font-size:11px;font-weight:900;letter-spacing:.08em;color:#f9a8d4;margin-bottom:5px}',
            '.cp-couple-deck-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-couple-deck-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,0.7);margin-bottom:13px}',
            '.cp-couple-deck-link{display:inline-flex;align-items:center;justify-content:center;min-height:46px;padding:11px 16px;border-radius:11px;background:#db2777;color:#fff;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-couple-deck-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-palworld-game{max-width:720px;margin:18px auto 26px;padding:18px;border:1px solid rgba(70,217,232,0.3);border-radius:16px;background:linear-gradient(135deg,rgba(6,35,45,0.96),rgba(35,24,67,0.92));box-shadow:0 14px 34px rgba(0,0,0,0.16)}',
            '.cp-palworld-game-kicker{font-size:11px;font-weight:900;letter-spacing:.1em;color:#b7ef5d;margin-bottom:5px}',
            '.cp-palworld-game-title{font-size:20px;font-weight:850;line-height:1.25;color:#fff;margin-bottom:6px}',
            '.cp-palworld-game-desc{font-size:14px;line-height:1.55;color:rgba(255,255,255,0.72);margin-bottom:13px}',
            '.cp-palworld-game-actions{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px}',
            '.cp-palworld-game-link{display:flex;align-items:center;justify-content:center;min-height:46px;padding:11px 14px;border-radius:11px;background:#46d9e8;color:#061017;text-decoration:none;font-size:14px;font-weight:850}',
            '.cp-palworld-game-link:last-child{background:#b7ef5d}',
            '.cp-palworld-game-link:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:3px}',
            '.cp-sticky-sprint{position:fixed;left:12px;right:12px;bottom:max(12px,env(safe-area-inset-bottom));z-index:2147483000;display:flex;align-items:center;gap:10px;max-width:680px;margin:0 auto;padding:10px 10px 10px 12px;border:1px solid rgba(124,58,237,0.28);border-radius:8px;background:rgba(17,24,39,0.94);box-shadow:0 12px 32px rgba(0,0,0,0.28);backdrop-filter:blur(12px)}',
            '.cp-sticky-copy{min-width:0;flex:1}',
            '.cp-sticky-kicker{font-size:11px;font-weight:800;color:rgba(255,255,255,0.58);text-transform:uppercase;letter-spacing:0}',
            '.cp-sticky-name{font-size:14px;font-weight:800;color:#fff;line-height:1.25;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
            '.cp-sticky-alt{display:block;max-width:100%;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#67e8f9;text-decoration:none;font-size:11px;font-weight:800;line-height:1.2}',
            '.cp-sticky-link{flex:0 0 auto;padding:10px 12px;border-radius:8px;background:#7c3aed;color:#fff;text-decoration:none;font-size:13px;font-weight:800;line-height:1}',
            '.cp-sticky-close{width:32px;height:32px;border:0;border-radius:8px;background:rgba(255,255,255,0.08);color:#fff;font-size:18px;line-height:1;cursor:pointer}',
            '.cp-sticky-link:focus-visible,.cp-sticky-alt:focus-visible,.cp-sticky-close:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:2px}',
            '@media(min-width:900px){.cp-sticky-sprint{display:none}}',
            '.cp-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}',
            '.cp-name{font-size:13px;font-weight:700;color:rgba(255,255,255,0.92);line-height:1.3}',
            '.cp-desc{font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px;line-height:1.35}',
            '@media(max-width:720px){.cp-mobile-sprint .cp-grid,.cp-revenue-recovery .cp-grid,.cp-scan-recovery .cp-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}',
            '@media(max-width:560px){.cp-grid{grid-template-columns:1fr}.cp-section{padding:18px 12px}.cp-mobile-sprint .cp-grid,.cp-revenue-recovery .cp-grid,.cp-scan-recovery .cp-grid{grid-template-columns:1fr}.cp-stress-script-link,.cp-boundary-library-link{display:flex;margin:8px 0 0}}',
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
            '@media(max-width:480px){.cp-palworld-game-actions{grid-template-columns:1fr}}',
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
        var coupleDeck = stressPlan || boundaryScript || sensoryReset ? null : getCoupleDeckBridgeConfig();
        var palworldGame = stressPlan || boundaryScript || sensoryReset || coupleDeck ? null : getPalworldGameBridgeConfig();
        if (palworldGame) scanRecovery = false;
        var revenueSprint = stressPlan || boundaryScript || sensoryReset || coupleDeck || palworldGame ? null : getRevenueSprintStrategy(bridge);
        var sprintPicks = revenueSprint ? revenueSprint.ids
            .map(function(id) { return apps.find(function(app) { return app.id === id; }); })
            .filter(Boolean) : [];
        var earlyRecovery = !stressPlan && !boundaryScript && !sensoryReset && !coupleDeck && !palworldGame && !scanRecovery && (bridge.market === 'zh' || bridge.topicKey !== 'market');

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
                + '<a class="cp-sensory-reset-link" href="' + sensoryReset.url + '">' + sensoryReset.copy.action + '</a>'
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
                    gtag('event', 'sensory_reset_bridge_click', {
                        event_category: 'engagement',
                        source_app: 'blog',
                        surface_name: 'blog_sensory_reset',
                        content_locale: sensoryReset.locale,
                        destination_path: sensoryReset.url,
                        revenue_goal: 'daily_0_10'
                    });
                });
            }
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
