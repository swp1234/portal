// Cross-Promotion Widget for DopaBrain Apps
// Include this script in any app: <script src="/portal/js/cross-promo.js" defer></script>
(function() {
    'use strict';

    // Detect current app from URL
    var path = window.location.pathname.replace(/\/$/, '').split('/').pop();
    var STORAGE_KEY = 'dopabrain_personalize';
    var MAX_HISTORY = 50;
    var BLOG_BRIDGE_IDS = ['animal-personality', 'mbti-city', 'attachment-style', 'eq-test'];

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

    function sendQualityEvent(name, params) {
        if (typeof gtag !== 'function') return;
        try {
            gtag('event', name, Object.assign({
                event_category: 'traffic_quality',
                path_group: getPathGroup(),
                page_path: window.location.pathname || '/',
                referrer_state: document.referrer ? 'has_referrer' : 'direct_or_empty',
                device_hint: getDeviceType(),
                transport_type: 'beacon'
            }, params || {}));
        } catch(e) {}
    }

    function initTrafficQualitySignals() {
        var startedAt = Date.now();
        var engaged = false;

        sendQualityEvent('traffic_quality_view');

        function markEngaged(reason) {
            if (engaged) return;
            engaged = true;
            sendQualityEvent('traffic_quality_engaged', {
                quality_signal: reason,
                engaged_after_ms: Math.max(0, Date.now() - startedAt)
            });
        }

        function bindOnce(eventName, reason, target) {
            (target || window).addEventListener(eventName, function() {
                markEngaged(reason);
            }, { once: true, passive: true });
        }

        bindOnce('click', 'click', document);
        bindOnce('keydown', 'key', document);
        bindOnce('scroll', 'scroll', window);
        bindOnce('touchstart', 'touch', document);
        window.setTimeout(function() { markEngaged('timer_8s'); }, 8000);
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

    function getAppName(app) {
        var lang = 'en';
        try {
            if (typeof i18n !== 'undefined' && i18n.getCurrentLanguage) {
                lang = i18n.getCurrentLanguage();
            } else {
                lang = (navigator.language || 'en').slice(0, 2);
            }
        } catch(e) {}
        if (lang !== 'ko' && app.i18n && app.i18n[lang] && app.i18n[lang].name) {
            return app.i18n[lang].name;
        }
        return app.name;
    }

    function getAppDesc(app) {
        var lang = 'en';
        try {
            if (typeof i18n !== 'undefined' && i18n.getCurrentLanguage) {
                lang = i18n.getCurrentLanguage();
            } else {
                lang = (navigator.language || 'en').slice(0, 2);
            }
        } catch(e) {}
        if (lang !== 'ko' && app.i18n && app.i18n[lang] && app.i18n[lang].shortDesc) {
            return app.i18n[lang].shortDesc;
        }
        return app.shortDesc;
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
        var picks = [];
        picks = picks.concat(sameCategory.slice(0, 2));
        picks = picks.concat(otherPopular.slice(0, 4 - picks.length));
        if (picks.length < 4) {
            var remaining = apps.filter(function(a) {
                return a.id !== path && picks.indexOf(a) === -1;
            });
            shuffle(remaining);
            picks = picks.concat(remaining.slice(0, 4 - picks.length));
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
        var lang = 'en';
        try { if (typeof i18n !== 'undefined' && i18n.getCurrentLanguage) lang = i18n.getCurrentLanguage(); else lang = (navigator.language || 'en').slice(0, 2); } catch(e) {}
        var title = titles[lang] || titles.en;

        // Build HTML
        var html = '<nav class="cp-section" aria-label="' + title + '"><div class="cp-title">' + title + '</div><div class="cp-grid">';
        picks.forEach(function(app) {
            var url = app.url.replace('https://dopabrain.com', '');
            html += '<a href="' + url + '" class="cp-card" aria-label="' + getAppName(app) + '" data-destination-id="' + app.id + '" data-destination-category="' + app.category + '">'
                + '<div class="cp-icon" style="background:linear-gradient(135deg,' + app.color + '22,' + app.color + '08)">' + app.icon + '</div>'
                + '<div><div class="cp-name">' + getAppName(app) + '</div>'
                + '<div class="cp-desc">' + getAppDesc(app) + '</div></div></a>';
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

        // Track cross-promo clicks
        document.querySelector('.cp-section').addEventListener('click', function(e) {
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
                    destination_path: destinationPath
                });
            }
        });
    }

    function renderBlogBridge(apps) {
        if (window.location.pathname.indexOf('/portal/blog/') !== 0) return;
        if (document.querySelector('.cp-section')) return;

        var picks = BLOG_BRIDGE_IDS
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
            '.cp-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}',
            '.cp-name{font-size:13px;font-weight:700;color:rgba(255,255,255,0.92);line-height:1.3}',
            '.cp-desc{font-size:11px;color:rgba(255,255,255,0.5);margin-top:2px;line-height:1.35}',
            '@media(max-width:560px){.cp-grid{grid-template-columns:1fr}.cp-section{padding:18px 12px}}',
            'html.light-mode .cp-section,[data-theme="light"] .cp-section{border-top-color:rgba(0,0,0,0.08)}',
            'html.light-mode .cp-title,[data-theme="light"] .cp-title{color:rgba(0,0,0,0.52)}',
            'html.light-mode .cp-card,[data-theme="light"] .cp-card{background:rgba(0,0,0,0.03);border-color:rgba(0,0,0,0.07)}',
            'html.light-mode .cp-card:hover,[data-theme="light"] .cp-card:hover{background:rgba(0,0,0,0.06);border-color:rgba(0,0,0,0.12)}',
            'html.light-mode .cp-name,[data-theme="light"] .cp-name{color:rgba(0,0,0,0.85)}',
            'html.light-mode .cp-desc,[data-theme="light"] .cp-desc{color:rgba(0,0,0,0.48)}',
            '.cp-card:focus-visible{outline:3px solid var(--primary,#667eea);outline-offset:2px}'
        ].join('');
        document.head.appendChild(style);

        var title = 'Continue with a quick test';
        var html = '<nav class="cp-section cp-blog-bridge" aria-label="' + title + '"><div class="cp-title">' + title + '</div><div class="cp-grid">';
        picks.forEach(function(app) {
            var url = app.url.replace('https://dopabrain.com', '');
            html += '<a href="' + url + '" class="cp-card" aria-label="' + getAppName(app) + '" data-destination-id="' + app.id + '" data-destination-category="' + app.category + '">'
                + '<div class="cp-icon" style="background:linear-gradient(135deg,' + app.color + '22,' + app.color + '08)">' + app.icon + '</div>'
                + '<div><div class="cp-name">' + getAppName(app) + '</div>'
                + '<div class="cp-desc">' + getAppDesc(app) + '</div></div></a>';
        });
        html += '</div></nav>';

        var anchor = document.querySelector('article') || document.querySelector('main') || document.body;
        anchor.insertAdjacentHTML('beforeend', html);

        document.querySelector('.cp-blog-bridge').addEventListener('click', function(e) {
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
                    surface_name: 'blog_bridge',
                    destination_path: destinationPath
                });
            }
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
