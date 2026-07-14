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
        zh: ['hsp-test', 'brain-type', 'dopamine-type', 'eq-test'],
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
        zh: ['hsp-test', 'brain-type', 'dopamine-type', 'eq-test'],
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
            'attachment-style': { name: '依恋类型测试', shortDesc: '确认你的关系模式' }
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
        return appId === 'hsp-test' || appId === 'brain-type';
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
            '.cp-sticky-sprint{position:fixed;left:12px;right:12px;bottom:max(12px,env(safe-area-inset-bottom));z-index:2147483000;display:flex;align-items:center;gap:10px;max-width:680px;margin:0 auto;padding:10px 10px 10px 12px;border:1px solid rgba(124,58,237,0.28);border-radius:8px;background:rgba(17,24,39,0.94);box-shadow:0 12px 32px rgba(0,0,0,0.28);backdrop-filter:blur(12px)}',
            '.cp-sticky-copy{min-width:0;flex:1}',
            '.cp-sticky-kicker{font-size:11px;font-weight:800;color:rgba(255,255,255,0.58);text-transform:uppercase;letter-spacing:0}',
            '.cp-sticky-name{font-size:14px;font-weight:800;color:#fff;line-height:1.25;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
            '.cp-sticky-link{flex:0 0 auto;padding:10px 12px;border-radius:8px;background:#7c3aed;color:#fff;text-decoration:none;font-size:13px;font-weight:800;line-height:1}',
            '.cp-sticky-close{width:32px;height:32px;border:0;border-radius:8px;background:rgba(255,255,255,0.08);color:#fff;font-size:18px;line-height:1;cursor:pointer}',
            '.cp-sticky-link:focus-visible,.cp-sticky-close:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:2px}',
            '@media(min-width:900px){.cp-sticky-sprint{display:none}}',
            '.cp-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}',
            '.cp-name{font-size:13px;font-weight:700;color:rgba(255,255,255,0.92);line-height:1.3}',
            '.cp-desc{font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px;line-height:1.35}',
            '@media(max-width:720px){.cp-mobile-sprint .cp-grid,.cp-revenue-recovery .cp-grid,.cp-scan-recovery .cp-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}',
            '@media(max-width:560px){.cp-grid{grid-template-columns:1fr}.cp-section{padding:18px 12px}.cp-mobile-sprint .cp-grid,.cp-revenue-recovery .cp-grid,.cp-scan-recovery .cp-grid{grid-template-columns:1fr}}',
            'html.light-mode .cp-section,[data-theme="light"] .cp-section{border-top-color:rgba(0,0,0,0.08)}',
            'html.light-mode .cp-title,[data-theme="light"] .cp-title{color:rgba(0,0,0,0.52)}',
            'html.light-mode .cp-card,[data-theme="light"] .cp-card{background:rgba(0,0,0,0.03);border-color:rgba(0,0,0,0.07)}',
            'html.light-mode .cp-card:hover,[data-theme="light"] .cp-card:hover{background:rgba(0,0,0,0.06);border-color:rgba(0,0,0,0.12)}',
            'html.light-mode .cp-name,[data-theme="light"] .cp-name{color:rgba(0,0,0,0.85)}',
            'html.light-mode .cp-desc,[data-theme="light"] .cp-desc{color:rgba(0,0,0,0.48)}',
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

        function mountStickySprint(revenueSprint, itemList) {
            if (!revenueSprint || !itemList || !itemList.length) return;
            if (isScanRiskVisit(bridge.market) || getDeviceType() === 'desktop') return;
            if (document.querySelector('.cp-sticky-sprint')) return;
            try {
                if (sessionStorage.getItem('dopabrain_sticky_sprint_dismissed') === '1') return;
            } catch(e) {}

            var app = itemList[0];
            var copy = getStickySprintCopy(bridge.locale);
            var destinationPath = withLangParam(app.url.replace('https://dopabrain.com', ''), bridge.locale);
            if (shouldAutoStartFromSticky(app.id)) {
                destinationPath = withParam(destinationPath, 'start', '1');
                destinationPath = withParam(destinationPath, 'surface', 'blog_sticky_sprint');
            }
            var label = getAppName(app, bridge.locale);
            var html = '<aside class="cp-sticky-sprint" data-detected-market="' + bridge.market + '" data-content-locale="' + bridge.locale + '" data-surface-name="blog_sticky_sprint" data-topic-strategy="' + revenueSprint.topicKey + '" data-bridge-strategy="' + revenueSprint.ids.join(',') + '" data-revenue-goal="daily_0_20">'
                + '<div class="cp-sticky-copy"><div class="cp-sticky-kicker">' + copy.kicker + '</div><div class="cp-sticky-name">' + label + '</div></div>'
                + '<a class="cp-sticky-link" href="' + destinationPath + '" data-destination-id="' + app.id + '" data-destination-category="' + app.category + '">' + copy.action + '</a>'
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
                        item_count: 1,
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
                    var link = e.target.closest('.cp-sticky-link');
                    if (!link) return;
                    rememberAppClick(link.getAttribute('data-destination-id'), link.getAttribute('data-destination-category'));
                    if (typeof gtag === 'function') {
                        gtag('event', 'cross_promo_click', {
                            event_category: 'engagement',
                            event_label: destinationPath,
                            source_app: 'blog',
                            surface_type: 'cross_promo',
                            surface_name: 'blog_sticky_sprint',
                            destination_path: destinationPath,
                            destination_id: app.id,
                            destination_category: app.category,
                            detected_market: bridge.market,
                            content_locale: bridge.locale,
                            topic_strategy: revenueSprint.topicKey,
                            bridge_strategy: revenueSprint.ids.join(','),
                            revenue_goal: 'daily_0_20'
                        });
                    }
                });
            }, 1400);
        }

        var anchor = document.querySelector('article') || document.querySelector('main') || document.body;
        var hasQuickRail = !!document.querySelector('.quick-actions,[data-content-surface="quick_rail"]');
        var scanRecovery = isScanRiskVisit(bridge.market) && !hasQuickRail;
        var revenueSprint = getRevenueSprintStrategy(bridge);
        var sprintPicks = revenueSprint ? revenueSprint.ids
            .map(function(id) { return apps.find(function(app) { return app.id === id; }); })
            .filter(Boolean) : [];
        var earlyRecovery = !scanRecovery && (bridge.market === 'zh' || bridge.topicKey !== 'market');

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
