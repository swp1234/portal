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
        ko: 'ko', kr: 'ko', korea: 'ko',
        en: 'en', us: 'en', usa: 'en', gb: 'en', uk: 'en'
    };

    var MARKETS = {
        mx: {
            label: 'Mexico',
            title: 'Popular in Mexico',
            desc: 'Recent Mexico sessions stay longest on shareable personality paths, with Animal Personality leading the group.',
            items: [
                { key: 'mx-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/?lang=es', icon: '🦁', badge: 'MX #1', title: 'Test de Personalidad Animal', desc: 'La ruta con mejor retencion reciente en Mexico.', accent: '#22c55e' },
                { key: 'mx-city', type: 'app', appId: 'mbti-city', href: '/mbti-city/?lang=es', icon: '🏙️', badge: 'City', title: 'Test de Ciudad MBTI', desc: 'Una segunda prueba visual para seguir explorando.', accent: '#1A535C' },
                { key: 'mx-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=es', icon: '💔', badge: 'Deep', title: 'Estilo de Apego', desc: 'Convierte curiosidad de personalidad en una lectura relacional.', accent: '#ec4899' },
                { key: 'mx-eq', type: 'app', appId: 'eq-test', href: '/eq-test/?lang=es', icon: '🎭', badge: 'EQ', title: 'Test de Inteligencia Emocional', desc: 'Cierre emocional rapido despues de una prueba viral.', accent: '#00bcd4' }
            ]
        },
        zh: {
            label: 'Chinese',
            title: '中文热门内容',
            desc: '中文读者最近在 2048 攻略、情绪调节和多巴胺重置内容上停留更久。',
            items: [
                { key: 'zh-2048-guide', type: 'blog', href: '/portal/blog/zh/2048-strategy-guide.html', icon: '🔢', badge: '攻略', title: '2048策略指南', desc: '高停留时长的中文游戏攻略入口。', accent: '#f59e0b' },
                { key: 'zh-emotion', type: 'blog', href: '/portal/blog/zh/emotional-regulation-techniques.html', icon: '🧘', badge: '情绪', title: '情绪调节技巧', desc: '把长阅读转成下一步自测。', accent: '#10b981' },
                { key: 'zh-2048-app', type: 'app', appId: 'puzzle-2048', href: '/puzzle-2048/?lang=zh', icon: '🔢', badge: 'Play', title: '2048 拼图', desc: '从攻略直接进入可玩的数字拼图。', accent: '#f39c12' },
                { key: 'zh-dopamine', type: 'app', appId: 'dopamine-type', href: '/dopamine-type/?lang=zh', icon: '⚡', badge: '测试', title: '多巴胺类型测试', desc: '承接多巴胺重置和专注力主题。', accent: '#f59e0b' }
            ]
        },
        ja: {
            label: 'Japan',
            title: '日本で人気の導線',
            desc: 'Japan traffic is strongest on MBTI City and self-discovery follow-ups.',
            items: [
                { key: 'ja-city', type: 'app', appId: 'mbti-city', href: '/mbti-city/?lang=ja', icon: '🏙️', badge: 'JP #1', title: 'MBTI都市診断', desc: '最近の日本セッションで最も長く読まれた入口。', accent: '#1A535C' },
                { key: 'ja-city-guide', type: 'blog', href: '/portal/blog/ja/mbti-city-seikaku-toshi.html', icon: '🗺️', badge: 'Guide', title: 'MBTI都市ガイド', desc: '診断前後に読みやすい関連ガイド。', accent: '#3b82f6' },
                { key: 'ja-mental-age', type: 'app', appId: 'mental-age', href: '/mental-age/?lang=ja', icon: '🧠', badge: 'Test', title: '精神年齢診断', desc: '都市診断の次に試しやすい自己理解テスト。', accent: '#6366f1' },
                { key: 'ja-brain', type: 'app', appId: 'brain-type', href: '/brain-type/?lang=ja', icon: '🧠', badge: 'Brain', title: '脳型診断テスト', desc: '長めの滞在につなげる認知タイプ診断。', accent: '#8b5cf6' }
            ]
        },
        fr: {
            label: 'France',
            title: 'Populaire en France',
            desc: 'French readers are clustering around brain-type and self-knowledge content.',
            items: [
                { key: 'fr-brain-guide', type: 'blog', href: '/portal/blog/fr/test-type-cerveau.html', icon: '🧠', badge: 'FR #1', title: 'Test de Type de Cerveau', desc: 'La page francaise avec le meilleur engagement recent.', accent: '#6366f1' },
                { key: 'fr-brain', type: 'app', appId: 'brain-type', href: '/brain-type/?lang=fr', icon: '🧠', badge: 'Test', title: 'Test de Type de Cerveau', desc: 'Passez directement du guide au test.', accent: '#8b5cf6' },
                { key: 'fr-eq', type: 'app', appId: 'eq-test', href: '/eq-test/?lang=fr', icon: '🎭', badge: 'EQ', title: 'Test EQ', desc: 'Une suite courte sur l intelligence emotionnelle.', accent: '#00bcd4' },
                { key: 'fr-city', type: 'app', appId: 'mbti-city', href: '/mbti-city/?lang=fr', icon: '🏙️', badge: 'MBTI', title: 'Test Ville MBTI', desc: 'Un test plus visuel pour prolonger la session.', accent: '#1A535C' }
            ]
        },
        id: {
            label: 'Indonesia',
            title: 'Populer di Indonesia',
            desc: 'Indonesia traffic is responding to emotional regulation and practical self-check paths.',
            items: [
                { key: 'id-emotion', type: 'blog', href: '/portal/blog/id/emotional-regulation-techniques.html', icon: '🧘', badge: 'ID #1', title: 'Teknik Regulasi Emosi', desc: 'Artikel dengan waktu baca kuat untuk pengunjung Indonesia.', accent: '#10b981' },
                { key: 'id-eq', type: 'app', appId: 'eq-test', href: '/eq-test/?lang=id', icon: '🎭', badge: 'EQ', title: 'Tes EQ', desc: 'Lanjutkan dari regulasi emosi ke tes singkat.', accent: '#00bcd4' },
                { key: 'id-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=id', icon: '🧠', badge: 'HSP', title: 'Tes HSP', desc: 'Untuk pembaca yang tertarik pada sensitivitas diri.', accent: '#7c3aed' },
                { key: 'id-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/?lang=id', icon: '💔', badge: 'Relasi', title: 'Tes Gaya Keterikatan', desc: 'Jalur hubungan setelah konten emosi.', accent: '#ec4899' }
            ]
        },
        de: {
            label: 'Germany',
            title: 'Beliebt in Deutschland',
            desc: 'German organic sessions are strongest on personality-test discovery and brain-style follow-ups.',
            items: [
                { key: 'de-tests-guide', type: 'blog', href: '/portal/blog/de/personality-tests.html', icon: '🧪', badge: 'DE #1', title: 'Beste Persönlichkeitstests', desc: 'Der beste Einstieg fur deutsche Suchbesuche.', accent: '#8b5cf6' },
                { key: 'de-brain', type: 'app', appId: 'brain-type', href: '/brain-type/?lang=de', icon: '🧠', badge: 'Test', title: 'Gehirn-Typ-Test', desc: 'Vom Ratgeber direkt in den Test.', accent: '#6366f1' },
                { key: 'de-hsp', type: 'app', appId: 'hsp-test', href: '/hsp-test/?lang=de', icon: '🧠', badge: 'HSP', title: 'HSP-Test', desc: 'Ein ruhiger Folgepfad fur Selbstverstandnis.', accent: '#7c3aed' },
                { key: 'de-eq', type: 'app', appId: 'eq-test', href: '/eq-test/?lang=de', icon: '🎭', badge: 'EQ', title: 'EQ-Test', desc: 'Kurz, klar und gut als zweiter Klick.', accent: '#00bcd4' }
            ]
        },
        en: {
            label: 'United States',
            title: 'Popular in the U.S.',
            desc: 'English traffic is currently strongest on past-life curiosity and lightweight personality paths.',
            items: [
                { key: 'en-past-life-guide', type: 'blog', href: '/portal/blog/en/past-life-calculator-birthday.html', icon: '🔮', badge: 'US #1', title: 'Past Life Calculator by Birthday', desc: 'The strongest recent English landing-page cluster.', accent: '#8b5cf6' },
                { key: 'en-past-life', type: 'app', appId: 'past-life', href: '/past-life/?lang=en', icon: '🕰️', badge: 'Try', title: 'Past Life Test', desc: 'Turn curiosity into a quick result flow.', accent: '#a855f7' },
                { key: 'en-mbti', type: 'hub', href: '/portal/mbti/?lang=en', icon: '💞', badge: 'Hub', title: 'MBTI Compatibility Hub', desc: 'A denser follow-up path for relationship intent.', accent: '#ff2d78' },
                { key: 'en-eq', type: 'app', appId: 'eq-test', href: '/eq-test/?lang=en', icon: '🎭', badge: 'EQ', title: 'EQ Test', desc: 'Short self-check with better engagement than the root page.', accent: '#00bcd4' }
            ]
        },
        ko: {
            label: 'Korea',
            title: '한국 인기 추천',
            desc: '한국어 방문자는 MBTI, 성격 테스트, 감정형 테스트로 바로 이동할 때 흐름이 좋습니다.',
            items: [
                { key: 'ko-mbti', type: 'hub', href: '/portal/mbti/?lang=ko', icon: '💞', badge: 'MBTI', title: 'MBTI 궁합 허브', desc: '256가지 궁합표와 후속 테스트로 이어집니다.', accent: '#ff2d78' },
                { key: 'ko-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/?lang=ko', icon: '🦁', badge: 'Hot', title: '동물 성격 테스트', desc: '공유하기 쉬운 결과형 성격 테스트입니다.', accent: '#22c55e' },
                { key: 'ko-brain', type: 'app', appId: 'brain-type', href: '/brain-type/?lang=ko', icon: '🧠', badge: 'Brain', title: '뇌 타입 테스트', desc: '자기이해형 체류를 만들기 좋은 테스트입니다.', accent: '#6366f1' },
                { key: 'ko-eq', type: 'app', appId: 'eq-test', href: '/eq-test/?lang=ko', icon: '🎭', badge: 'EQ', title: 'EQ 감성지능 테스트', desc: '감정/관계 관심을 짧은 테스트로 연결합니다.', accent: '#00bcd4' }
            ]
        },
        global: {
            label: 'Global',
            title: 'Popular around the world',
            desc: 'Start with the highest-retention paths before browsing the full library.',
            items: [
                { key: 'global-animal', type: 'app', appId: 'animal-personality', href: '/animal-personality/', icon: '🦁', badge: 'Hot', title: 'Animal Personality', desc: 'A shareable personality result that keeps users moving.', accent: '#22c55e' },
                { key: 'global-city', type: 'app', appId: 'mbti-city', href: '/mbti-city/', icon: '🏙️', badge: 'Stay', title: 'MBTI City Test', desc: 'A visual MBTI follow-up with strong session depth.', accent: '#1A535C' },
                { key: 'global-attachment', type: 'app', appId: 'attachment-style', href: '/attachment-style/', icon: '💔', badge: 'Deep', title: 'Attachment Style', desc: 'Relationship self-check for high-intent readers.', accent: '#ec4899' },
                { key: 'global-eq', type: 'app', appId: 'eq-test', href: '/eq-test/', icon: '🎭', badge: 'EQ', title: 'EQ Test', desc: 'A short emotional-intelligence flow.', accent: '#00bcd4' }
            ]
        }
    };

    function normalizeMarket(value) {
        if (!value) return '';
        value = String(value).toLowerCase().replace(/[^a-z]/g, '');
        return MARKET_ALIASES[value] || '';
    }

    function getQueryOverride() {
        try {
            var params = new URLSearchParams(window.location.search || '');
            return normalizeMarket(params.get('market') || params.get('country') || params.get('cc'));
        } catch(e) {
            return '';
        }
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
        if (/^ko(?:-|$)/.test(primary) || timezone === 'Asia/Seoul') return 'ko';
        if (/^en(?:-|$)/.test(primary) && /America\//.test(timezone)) return 'en';
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

        el.dataset.detectedMarket = market;
        el.dataset.countryLabel = config.label;
        el.classList.add('is-visible');

        var html = ''
            + '<div class="country-rail-copy">'
            + '<span class="country-rail-kicker">' + escapeHtml(config.label) + '</span>'
            + '<h2 class="country-rail-title">' + escapeHtml(config.title) + '</h2>'
            + '<p class="country-rail-desc">' + escapeHtml(config.desc) + '</p>'
            + '</div>'
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
