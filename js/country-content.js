// Country-aware content routing for the root and portal hubs.
(function() {
    'use strict';

    var MARKET_ALIASES = {
        mx: 'mx', mexico: 'mx', es: 'mx',
        zh: 'zh', cn: 'zh', china: 'zh', tw: 'zh', hk: 'zh',
        ja: 'ja', jp: 'ja', japan: 'ja',
        fr: 'fr', france: 'fr',
        de: 'de', germany: 'de',
        id: 'id', indonesia: 'id',
        my: 'my', malaysia: 'my', ms: 'my',
        pt: 'pt', br: 'pt', brazil: 'pt', portugal: 'pt',
        ru: 'ru', russia: 'ru',
        hi: 'hi', hindi: 'hi', 'in': 'hi', india: 'hi',
        tr: 'tr', turkey: 'tr', turkiye: 'tr',
        sg: 'sg', singapore: 'sg',
        ko: 'ko', kr: 'ko', korea: 'ko',
        en: 'en', us: 'en', usa: 'en', gb: 'en', uk: 'en'
    };

    var LANGUAGE_MARKETS = {
        ko: 'ko',
        en: 'en',
        zh: 'zh',
        ja: 'ja',
        es: 'mx',
        pt: 'pt',
        id: 'id',
        tr: 'tr',
        de: 'de',
        fr: 'fr',
        hi: 'hi',
        ru: 'ru'
    };

    var MARKETS = {
        mx: {
            label: 'Mexico',
            title: 'Popular in Mexico',
            desc: 'Recent Mexico sessions stay longest on shareable personality paths, with Animal Personality and Stress Check leading the group.',
            preferences: ['Shareable result quizzes', 'Animal identity', 'Spanish-first copy', 'Fast completion'],
            items: [
                { key: 'mx-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/?lang=es', icon: '🦁', badge: 'MX #1', title: 'Test de Personalidad Animal', desc: 'La ruta con mejor retencion reciente en Mexico.', accent: '#22c55e' },
                { key: 'mx-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=es', icon: '⚡', badge: 'Stress', title: 'Test de Nivel de Estres', desc: 'Evalua tu patron de estres actual en 3 minutos.', accent: '#ef4444' },
                { key: 'mx-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=es', icon: '💔', badge: 'Deep', title: 'Estilo de Apego', desc: 'Convierte curiosidad de personalidad en una lectura relacional.', accent: '#ec4899' },
                { key: 'mx-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=es', icon: '🌿', badge: 'HSP', title: 'Test de Alta Sensibilidad', desc: 'Descubre tu sensibilidad sensorial y emocional.', accent: '#7c3aed' }
            ]
        },
        zh: {
            label: 'Chinese',
            title: '中文热门内容',
            desc: '中文读者最近在压力自测、HSP 高敏感测试、未来自我探索和回避型依恋路径上停留更久。',
            preferences: ['压力自测', 'HSP 高敏感', '依恋模式', '未来自我'],
            items: [
                { key: 'zh-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=zh', icon: '⚡', badge: '热门', title: '压力水平测试', desc: '快速评估当前的压力模式与恢复节奏。', accent: '#ef4444' },
                { key: 'zh-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=zh', icon: 'HSP', badge: '自测', title: 'HSP 高敏感测试', desc: '承接高敏感与自我理解的后续测试。', accent: '#7c3aed' },
                { key: 'zh-avoidant', type: 'blog', href: '/portal/blog/zh/avoidant-attachment-dating-guide.html', icon: '💞', badge: '关系', title: '回避型依恋指南', desc: '近期移动端互动最强的亲密关系阅读路径。', accent: '#ec4899' },
                { key: 'zh-future', type: 'app', appId: 'future-self', href: '/future-self/?lang=zh', icon: '🔮', badge: '探索', title: '未来自我探索', desc: '发现长期路径与个人精力分配。', accent: '#00bcd4' }
            ]
        },
        ja: {
            label: 'Japan',
            title: '日本で人気の導線',
            desc: 'Japan traffic is strongest on stress check, HSP sensitivity, and self-discovery follow-ups.',
            preferences: ['Stress & recovery', 'HSP sensitivity', 'Long result sessions', 'Self-discovery tests'],
            items: [
                { key: 'ja-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=ja', icon: '⚡', badge: 'JP #1', title: 'ストレスチェック', desc: '現在のストレスパターンと回復のヒントを確認。', accent: '#ef4444' },
                { key: 'ja-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=ja', icon: '🌿', badge: 'HSP', title: 'HSP 繊細さん診断', desc: '感覚の敏感さと休息の取り方をセルフチェック。', accent: '#7c3aed' },
                { key: 'ja-future', type: 'app', appId: 'future-self', href: '/future-self/?lang=ja', icon: '🔮', badge: 'Test', title: '未来の自分診断', desc: '価値観とこれからの方向性を整理する診断。', accent: '#6366f1' },
                { key: 'ja-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=ja', icon: '💞', badge: 'Deep', title: '愛着スタイル診断', desc: '人間関係や恋愛の距離感を振り返るテスト。', accent: '#ec4899' }
            ]
        },
        fr: {
            label: 'France',
            title: 'Populaire en France',
            desc: 'French readers are clustering around stress check, HSP sensitivity, and self-knowledge content.',
            preferences: ['Stress & equilibre', 'Tests courts', 'HSP / sensibilite', 'Guides de connaissance de soi'],
            items: [
                { key: 'fr-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=fr', icon: '⚡', badge: 'FR #1', title: 'Test de Niveau de Stress', desc: 'Evaluez votre niveau de stress en 3 minutes.', accent: '#ef4444' },
                { key: 'fr-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=fr', icon: '🌿', badge: 'HSP', title: 'Test d Hypersensibilite', desc: 'Explorez votre sensibilite sensorielle et emotionnelle.', accent: '#7c3aed' },
                { key: 'fr-future', type: 'app', appId: 'future-self', href: '/future-self/?lang=fr', icon: '🔮', badge: 'Futur', title: 'Test du Futur Soi', desc: 'Une suite claire sur vos priorites et votre trajectoire.', accent: '#00bcd4' },
                { key: 'fr-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/?lang=fr', icon: '🦁', badge: 'Partage', title: 'Personalite Animale', desc: 'Un test visuel pour prolonger la session.', accent: '#22c55e' }
            ]
        },
        id: {
            label: 'Indonesia',
            title: 'Populer di Indonesia',
            desc: 'Indonesia traffic is responding to emotional regulation and practical self-check paths.',
            preferences: ['Regulasi emosi', 'Cek stres praktis', 'Relationship follow-up', 'Sensitivitas HSP'],
            items: [
                { key: 'id-emotion', type: 'blog', href: '/portal/blog/id/emotional-regulation-techniques.html', icon: '🧘', badge: 'ID #1', title: 'Teknik Regulasi Emosi', desc: 'Artikel dengan waktu baca kuat untuk pengunjung Indonesia.', accent: '#10b981' },
                { key: 'id-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=id', icon: '⚡', badge: 'Stres', title: 'Tes Tingkat Stres', desc: 'Lanjutkan dari regulasi emosi ke tes singkat.', accent: '#ef4444' },
                { key: 'id-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=id', icon: '🧠', badge: 'HSP', title: 'Tes HSP', desc: 'Untuk pembaca yang tertarik pada sensitivitas diri.', accent: '#7c3aed' },
                { key: 'id-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=id', icon: '💔', badge: 'Relasi', title: 'Tes Gaya Keterikatan', desc: 'Jalur hubungan setelah konten emosi.', accent: '#ec4899' }
            ]
        },
        de: {
            label: 'Germany',
            title: 'Beliebt in Deutschland',
            desc: 'German organic sessions are strongest on personality-test discovery, stress check, and HSP follow-ups.',
            preferences: ['Personality discovery', 'HSP sensitivity', 'Emotional regulation', 'Stress response'],
            items: [
                { key: 'de-tests-guide', type: 'blog', href: '/portal/blog/de/personality-tests.html', icon: '🧪', badge: 'DE #1', title: 'Beste Persönlichkeitstests', desc: 'Der beste Einstieg fur deutsche Suchbesuche.', accent: '#8b5cf6' },
                { key: 'de-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=de', icon: '⚡', badge: 'Test', title: 'Stresslevel-Test', desc: 'Vom Ratgeber direkt in den praktischen Selbsttest.', accent: '#ef4444' },
                { key: 'de-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=de', icon: '🧠', badge: 'HSP', title: 'HSP-Test', desc: 'Ein ruhiger Folgepfad fur Selbstverstandnis.', accent: '#7c3aed' },
                { key: 'de-future', type: 'app', appId: 'future-self', href: '/future-self/?lang=de', icon: '🔮', badge: 'Fokus', title: 'Zukunfts-Ich-Test', desc: 'Kurz, klar und gut als zweiter Klick.', accent: '#00bcd4' }
            ]
        },
        en: {
            label: 'English markets',
            title: 'Fast result tests for English markets',
            desc: 'Recent US traffic has the strongest revenue per page view, so route English visitors into high-retention result flows first.',
            preferences: ['Fast result screens', 'Self-discovery tests', 'Shareable identity', 'Mobile-friendly flow'],
            items: [
                { key: 'en-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=en', icon: 'SC', badge: 'Fast', title: 'Stress Level Check', desc: 'A 15-question stress reflection with an instant 7-day reset plan.', accent: '#22c55e' },
                { key: 'en-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=en', icon: 'HSP', badge: 'HSP', title: 'HSP Test', desc: 'The strongest recent result-test path for deeper mobile sessions.', accent: '#7c3aed' },
                { key: 'en-future', type: 'app', appId: 'future-self', href: '/future-self/?lang=en', icon: 'FS', badge: 'Path', title: 'Future Self Archetype', desc: 'Explore long-term priorities and energy themes in 8 questions.', accent: '#00bcd4' },
                { key: 'en-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=en', icon: 'AS', badge: 'Deep', title: 'Attachment Style', desc: 'A relationship reflection flow with high completion rate.', accent: '#ec4899' }
            ]
        },
        sg: {
            label: 'Singapore',
            title: 'Quick picks for Singapore',
            desc: 'Recent Singapore desktop traffic is high-volume, so route it straight into high-retention result flows.',
            preferences: ['Fast result tests', 'English-first paths', 'Shareable identity', 'Low-friction follow-up'],
            items: [
                { key: 'sg-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=en', icon: 'SC', badge: 'Fast', title: 'Stress Level Check', desc: 'A quick stress reflection with an actionable reset plan.', accent: '#22c55e' },
                { key: 'sg-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/?lang=en', icon: 'AP', badge: 'Share', title: 'Animal Personality', desc: 'A shareable identity quiz with proven retention.', accent: '#22c55e' },
                { key: 'sg-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=en', icon: 'HSP', badge: 'HSP', title: 'HSP Test', desc: 'Short sensory-sensitivity flow for second clicks.', accent: '#7c3aed' },
                { key: 'sg-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=en', icon: 'AS', badge: 'Deep', title: 'Attachment Style', desc: 'A relationship self-check after a quick result.', accent: '#ec4899' }
            ]
        },
        ko: {
            label: 'Korea',
            title: '한국 인기 추천',
            desc: '한국어 방문자는 스트레스 체크, HSP 민감도 테스트, MBTI 궁합 허브로 바로 이동할 때 체류 흐름이 좋습니다.',
            preferences: ['스트레스 진단', 'MBTI/성격', 'HSP 민감도', '빠른 결과'],
            items: [
                { key: 'ko-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=ko', icon: '⚡', badge: '인기', title: '스트레스 자가진단', desc: '15문항으로 현재 스트레스 패턴과 7일 리셋 플랜을 확인합니다.', accent: '#22c55e' },
                { key: 'ko-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=ko', icon: '🌿', badge: 'HSP', title: 'HSP 예민성 테스트', desc: '감각 과부하와 회복 루틴을 점검하는 자기이해 테스트입니다.', accent: '#7c3aed' },
                { key: 'ko-mbti', type: 'hub', href: '/portal/mbti/?lang=ko', icon: '💞', badge: 'MBTI', title: 'MBTI 궁합 허브', desc: '256가지 궁합표와 후속 테스트로 이어집니다.', accent: '#ff2d78' },
                { key: 'ko-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=ko', icon: '💬', badge: '관계', title: '애착유형 테스트', desc: '관계 속 소통 방식과 거리감을 빠르게 확인합니다.', accent: '#ec4899' }
            ]
        },
        my: {
            label: 'Malaysia',
            title: 'Popular in Malaysia',
            desc: 'Malaysia is showing a strong preference for deep test exploration across stress, IQ, HSP, and identity quizzes.',
            preferences: ['Deep test hopping', 'IQ / stress checks', 'HSP sensitivity', 'Identity quizzes'],
            items: [
                { key: 'my-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=en', icon: '⚡', badge: 'Stress', title: 'Stress Level Check', desc: 'A strong first stop for exploratory test sessions.', accent: '#22c55e' },
                { key: 'my-iq', type: 'app', appId: 'iq-test', href: '/iq-test/?lang=en', icon: '🧩', badge: 'IQ', title: 'Quick IQ Test', desc: 'For visitors who move between cognitive tests.', accent: '#3498db' },
                { key: 'my-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=en', icon: '🌿', badge: 'HSP', title: 'HSP Test', desc: 'A thoughtful self-discovery follow-up.', accent: '#7c3aed' },
                { key: 'my-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/?lang=en', icon: '🐾', badge: 'Fun', title: 'Animal Personality', desc: 'A maintained identity quiz after serious tests.', accent: '#ff8c42' }
            ]
        },
        pt: {
            label: 'Portuguese markets',
            title: 'Popular in Portuguese markets',
            desc: 'Portuguese-language visitors stay longest on stress check, animal identity, and relationship self-reflection.',
            preferences: ['Stress check', 'HSP sensitivity', 'Animal identity', 'Personality tests'],
            items: [
                { key: 'pt-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=pt', icon: '⚡', badge: 'BR #1', title: 'Teste de Nivel de Estresse', desc: 'Avalie seu padrao de estresse atual com um plano pratico.', accent: '#22c55e' },
                { key: 'pt-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=pt', icon: '🌿', badge: 'HSP', title: 'Teste de Alta Sensibilidade', desc: 'Descubra como voce processa estimulos e recupera energia.', accent: '#7c3aed' },
                { key: 'pt-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/?lang=pt', icon: 'AN', badge: 'Animal', title: 'Teste de Personalidade Animal', desc: 'A shareable identity path after the self-check.', accent: '#22c55e' },
                { key: 'pt-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=pt', icon: '💞', badge: 'Relacao', title: 'Teste de Estilo de Apego', desc: 'Entenda seus padroes de conexao nos relacionamentos.', accent: '#ec4899' }
            ]
        },
        ru: {
            label: 'Russia',
            title: 'Популярно для русскоязычных',
            desc: 'Russian-language signals are strongest on stress checks, HSP reflection, and lightweight self-tests.',
            preferences: ['Stress checks', 'Quick tests', 'HSP reflection', 'Light discovery'],
            items: [
                { key: 'ru-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=ru', icon: '⚡', badge: 'Stress', title: 'Тест стресса', desc: 'A short self-check with low friction.', accent: '#22c55e' },
                { key: 'ru-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=ru', icon: '🌿', badge: 'HSP', title: 'Тест высокой чувствительности', desc: 'A calm reflection on sensory overload and recovery.', accent: '#7c3aed' },
                { key: 'ru-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/?lang=ru', icon: '🦁', badge: 'Animal', title: 'Тест: какое вы животное?', desc: 'A shareable identity result path.', accent: '#22c55e' },
                { key: 'ru-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=ru', icon: '💞', badge: 'Deep', title: 'Тип привязанности', desc: 'A deeper follow-up for relationship self-knowledge.', accent: '#ec4899' }
            ]
        },
        hi: {
            label: 'India',
            title: 'भारत के लिए लोकप्रिय',
            desc: 'भारत के लिए तेज़ mobile-first self-discovery रास्ते: stress, IQ, HSP और future-self checks.',
            preferences: ['Stress self-check', 'IQ / pattern checks', 'HSP sensitivity', 'Mobile-first quick tests'],
            items: [
                { key: 'hi-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=hi', icon: '⚡', badge: 'Stress', title: 'तनाव स्तर टेस्ट', desc: 'अपने वर्तमान तनाव पैटर्न को तेज़ result flow में समझें.', accent: '#22c55e' },
                { key: 'hi-iq', type: 'app', appId: 'iq-test', href: '/iq-test/?lang=hi', icon: '🧩', badge: 'IQ', title: 'तेज़ IQ टेस्ट', desc: 'Pattern और logic curiosity के लिए छोटा cognitive check.', accent: '#3498db' },
                { key: 'hi-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=hi', icon: '🌿', badge: 'HSP', title: 'HSP संवेदनशीलता टेस्ट', desc: 'Self-awareness को sensory reset से जोड़ें.', accent: '#7c3aed' },
                { key: 'hi-future', type: 'app', appId: 'future-self', href: '/future-self/?lang=hi', icon: '🔮', badge: 'Future', title: 'भविष्य का स्वयं टेस्ट', desc: 'अपने दीर्घकालिक लक्ष्यों को हल्के self-check में बदलें.', accent: '#00bcd4' }
            ]
        },
        tr: {
            label: 'Turkey',
            title: 'Türkiye için popüler',
            desc: 'Türkiye için kısa, sosyal ve kendini tanıma odaklı testler öne çıkarılıyor.',
            preferences: ['İlişki farkındalığı', 'Stres / 회복', 'HSP duyarlılık', 'Kısa viral testler'],
            items: [
                { key: 'tr-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=tr&source=red_flag_retirement', icon: '💬', badge: 'İlişki', title: 'Bağlanma Stili', desc: 'On ilişki senaryosu üzerinden açık yöntemli bir düşünme aracı.', accent: '#ec4899' },
                { key: 'tr-stress', type: 'app', appId: 'stress-check', href: '/stress-check/?lang=tr', icon: '⚡', badge: 'Stres', title: 'Stres Seviyesi Testi', desc: 'Kısa ve güvenli bir stres öz değerlendirme aracı.', accent: '#22c55e' },
                { key: 'tr-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=tr', icon: '🌿', badge: 'HSP', title: 'HSP Duyarlılık Testi', desc: 'Duyusal yüklenmeyi ve dinlenme ihtiyacını hızlı sonuca çevirir.', accent: '#7c3aed' }
            ]
        },
        global: {
            label: 'Global',
            title: 'Popular around the world',
            desc: 'Start with the highest-retention paths before browsing the full library.',
            preferences: ['Stress & recovery', 'HSP sensitivity', 'Shareable results', 'Relationship insight'],
            items: [
                { key: 'global-stress', type: 'app', appId: 'stress-check', href: '/stress-check/', icon: '⚡', badge: 'Top', title: 'Stress Level Check', desc: 'A 15-question reflection with a practical 7-day reset plan.', accent: '#22c55e' },
                { key: 'global-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/', icon: '🌿', badge: 'HSP', title: 'HSP Test', desc: 'Explore sensory sensitivity and overload recovery.', accent: '#7c3aed' },
                { key: 'global-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/', icon: '💔', badge: 'Deep', title: 'Attachment Style', desc: 'Relationship self-check for high-intent readers.', accent: '#ec4899' },
                { key: 'global-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/', icon: '🦁', badge: 'Hot', title: 'Animal Personality', desc: 'A shareable personality result that keeps users moving.', accent: '#22c55e' }
            ]
        }
    };

    function normalizeMarket(value) {
        if (!value) return '';
        value = String(value).toLowerCase().replace(/[^a-z]/g, '');
        return MARKET_ALIASES[value] || '';
    }

    function normalizeLanguageMarket(value) {
        if (!value) return '';
        value = String(value).toLowerCase().replace(/_/g, '-').split('-')[0].replace(/[^a-z]/g, '');
        return LANGUAGE_MARKETS[value] || '';
    }

    function getQueryOverride() {
        try {
            var params = new URLSearchParams(window.location.search || '');
            return normalizeMarket(params.get('market') || params.get('country') || params.get('cc'));
        } catch(e) {
            return '';
        }
    }

    function getQueryLanguageMarket() {
        try {
            var params = new URLSearchParams(window.location.search || '');
            return normalizeLanguageMarket(params.get('lang'));
        } catch(e) {
            return '';
        }
    }

    function getSelectedLanguageMarket() {
        var market = getQueryLanguageMarket();
        if (market) return market;

        try {
            var activeI18n = window.i18n || (typeof i18n !== 'undefined' ? i18n : null);
            if (activeI18n && typeof activeI18n.getCurrentLanguage === 'function') {
                market = normalizeLanguageMarket(activeI18n.getCurrentLanguage());
                if (market) return market;
            }
        } catch(e) {}

        try {
            market = normalizeLanguageMarket(localStorage.getItem('app_language'));
            if (market) return market;
        } catch(e) {}

        return '';
    }

    function getLangs() {
        var list = [];
        try {
            list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
        } catch(e) {}
        return list.filter(Boolean).map(function(lang) { return String(lang).toLowerCase(); });
    }

    function getTimezone() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        } catch(e) {
            return '';
        }
    }

    function detectMarket() {
        var override = getQueryOverride();
        if (override) return override;

        var selectedLanguageMarket = getSelectedLanguageMarket();
        if (selectedLanguageMarket) return selectedLanguageMarket;

        var langs = getLangs();
        var primary = langs[0] || '';
        var allLangs = langs.join('|');
        var timezone = getTimezone();

        if (/^es(?:-|$)/.test(primary) || /America\/Mexico/i.test(timezone)) return 'mx';
        if (/^zh(?:-|$)/.test(primary) || /Asia\/(Shanghai|Hong_Kong|Taipei|Macau|Chongqing|Urumqi)/i.test(timezone)) return 'zh';
        if (/^ja(?:-|$)/.test(primary) || timezone === 'Asia/Tokyo') return 'ja';
        if (/^fr(?:-|$)/.test(primary) || timezone === 'Europe/Paris') return 'fr';
        if (/^de(?:-|$)/.test(primary) || timezone === 'Europe/Berlin') return 'de';
        if (/^id(?:-|$)/.test(primary) || timezone === 'Asia/Jakarta') return 'id';
        if (/^ms(?:-|$)/.test(primary) || timezone === 'Asia/Kuala_Lumpur') return 'my';
        if (/^pt(?:-|$)/.test(primary) || /America\/Sao_Paulo|Europe\/Lisbon/i.test(timezone)) return 'pt';
        if (/^ru(?:-|$)/.test(primary) || /Europe\/Moscow/i.test(timezone)) return 'ru';
        if (/^hi(?:-|$)/.test(primary) || /Asia\/(Kolkata|Calcutta)/i.test(timezone)) return 'hi';
        if (/^tr(?:-|$)/.test(primary) || timezone === 'Europe/Istanbul') return 'tr';
        if (timezone === 'Asia/Singapore') return 'sg';
        if (/^ko(?:-|$)/.test(primary) || timezone === 'Asia/Seoul') return 'ko';
        if (/^en(?:-|$)/.test(primary) && /America\/|Europe\/London|Australia\//.test(timezone)) return 'en';
        if (allLangs.indexOf('zh') === 0) return 'zh';

        return 'global';
    }

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function withTracking(href, market, surface, item) {
        var glue = href.indexOf('?') === -1 ? '?' : '&';
        return href + glue
            + 'utm_source=country_slot'
            + '&utm_medium=' + encodeURIComponent(surface || 'hub')
            + '&utm_campaign=' + encodeURIComponent(market + '_' + item.key);
    }

    function getMarketConfig(market) {
        return MARKETS[market] || MARKETS.global;
    }

    function getPreferenceProfile(config) {
        return (config.preferences || []).join('|');
    }

    function track(name, params) {
        if (typeof gtag !== 'function') return;
        try {
            gtag('event', name, Object.assign({
                event_category: 'country_content',
                transport_type: 'beacon'
            }, params || {}));
        } catch(e) {}
    }

    function renderRail(target, options) {
        var el = typeof target === 'string' ? document.querySelector(target) : target;
        if (!el) return null;

        options = options || {};
        var surface = options.surface || el.getAttribute('data-country-surface') || 'hub';
        var market = options.market || detectMarket();
        var config = getMarketConfig(market);
        var limit = options.limit || 4;
        var items = config.items.slice(0, limit);
        var preferences = config.preferences || [];
        var preferenceProfile = getPreferenceProfile(config);

        el.dataset.detectedMarket = market;
        el.dataset.countryLabel = config.label;
        el.dataset.preferenceProfile = preferenceProfile;
        el.classList.add('is-visible');

        var html = ''
            + '<div class="country-rail-copy">'
            + '<span class="country-rail-kicker">' + escapeHtml(config.label) + '</span>'
            + '<h2 class="country-rail-title">' + escapeHtml(config.title) + '</h2>'
            + '<p class="country-rail-desc">' + escapeHtml(config.desc) + '</p>';

        if (preferences.length) {
            html += '<div class="country-preferences" aria-label="Country content preferences">';
            preferences.slice(0, 4).forEach(function(pref) {
                html += '<span class="country-pref-chip">' + escapeHtml(pref) + '</span>';
            });
            html += '</div>';
        }

        html += '</div>'
            + '<div class="country-rail-grid">';

        items.forEach(function(item, index) {
            var href = withTracking(item.href, market, surface, item);
            html += '<a class="country-content-card js-prefetch-link" href="' + escapeHtml(href) + '"'
                + ' data-country-card="true"'
                + ' data-country-market="' + escapeHtml(market) + '"'
                + ' data-country-key="' + escapeHtml(item.key) + '"'
                + ' data-content-type="' + escapeHtml(item.type || '') + '"'
                + ' data-app="' + escapeHtml(item.appId || '') + '"'
                + ' data-slot="' + (index + 1) + '"'
                + ' style="--country-accent:' + escapeHtml(item.accent || '#00e5ff') + '">'
                + '<span class="country-card-icon">' + escapeHtml(item.icon || '✦') + '</span>'
                + '<span class="country-card-body">'
                + '<span class="country-card-badge">' + escapeHtml(item.badge || config.label) + '</span>'
                + '<strong class="country-card-title">' + escapeHtml(item.title) + '</strong>'
                + '<span class="country-card-desc">' + escapeHtml(item.desc) + '</span>'
                + '</span>'
                + '<span class="country-card-arrow" aria-hidden="true">→</span>'
                + '</a>';
        });

        html += '</div>';
        el.innerHTML = html;

        if (!el.dataset.countryRailBound) {
            el.dataset.countryRailBound = 'true';
            el.addEventListener('click', function(e) {
                var card = e.target.closest('.country-content-card');
                if (!card) return;
                track('country_content_click', {
                    detected_market: el.dataset.detectedMarket || '',
                    market_label: el.dataset.countryLabel || '',
                    surface_name: surface,
                    preference_profile: el.dataset.preferenceProfile || '',
                    content_key: card.dataset.countryKey || '',
                    content_type: card.dataset.contentType || '',
                    app_id: card.dataset.app || '',
                    slot: Number(card.dataset.slot || 0),
                    destination: card.getAttribute('href') || ''
                });
            });
        }

        track('country_content_view', {
            detected_market: market,
            market_label: config.label,
            surface_name: surface,
            preference_profile: preferenceProfile,
            preference_count: preferences.length,
            item_count: items.length
        });

        return { market: market, config: config };
    }

    window.CountryContent = {
        MARKETS: MARKETS,
        detectMarket: detectMarket,
        getMarketConfig: getMarketConfig,
        renderRail: renderRail
    };
})();
