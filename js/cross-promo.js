// Cross-Promotion Widget for DopaBrain Apps
// Include this script in any app: <script src="/portal/js/cross-promo.js" defer></script>
(function() {
    'use strict';

    // Detect current app from URL
    var path = window.location.pathname.replace(/\/$/, '').split('/').pop();
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

    function render(apps) {
        var current = apps.find(function(a) { return a.id === path; });
        if (!current) return;

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
            '@media(max-width:480px){.cp-grid{grid-template-columns:1fr}.cp-section{padding:16px 12px}}'
        ].join('');
        document.head.appendChild(style);

        // Build HTML
        var html = '<div class="cp-section"><div class="cp-title">You might also like</div><div class="cp-grid">';
        picks.forEach(function(app) {
            var url = app.url.replace('https://dopabrain.com', '');
            html += '<a href="' + url + '" class="cp-card">'
                + '<div class="cp-icon" style="background:linear-gradient(135deg,' + app.color + '22,' + app.color + '08)">' + app.icon + '</div>'
                + '<div><div class="cp-name">' + getAppName(app) + '</div>'
                + '<div class="cp-desc">' + getAppDesc(app) + '</div></div></a>';
        });
        html += '</div></div>';

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
            if (card && typeof gtag === 'function') {
                gtag('event', 'cross_promo_click', {
                    event_category: 'engagement',
                    event_label: card.getAttribute('href'),
                    source_app: path
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
