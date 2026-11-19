// DopaBrain Shared Blog & Tool Monetization Telemetry and Sticky CTA Controller
// Strict exact-once 50%-visible exposure tracking; zero private data leakage.
(function() {
    'use strict';

    if (window.__dopabrainBlogMonetizationInit) return;
    window.__dopabrainBlogMonetizationInit = true;

    var DISMISS_KEY = 'db_bm_sticky_dismissed';
    var SCROLL_REVEAL_PX = 260;

    function getLocale() {
        var htmlLang = (document.documentElement.getAttribute('lang') || '').trim().toLowerCase();
        if (htmlLang) return htmlLang.slice(0, 2);
        var match = /^\/portal\/blog\/([a-z]{2})\//i.exec(window.location.pathname || '');
        return match ? match[1].toLowerCase() : 'en';
    }

    function sendEvent(name, params) {
        if (typeof window.gtag !== 'function') return;
        try {
            window.gtag('event', name, Object.assign({
                page_path: window.location.pathname || '/',
                content_locale: getLocale()
            }, params || {}));
        } catch (e) {}
    }

    function observeHalfVisible(el, onVisible) {
        if (!el || typeof onVisible !== 'function') return;
        var fired = false;
        function trigger() {
            if (fired) return;
            fired = true;
            onVisible();
        }
        if (typeof window.IntersectionObserver !== 'function') {
            trigger();
            return;
        }
        var observer = new window.IntersectionObserver(function(entries) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting && entries[i].intersectionRatio >= 0.5) {
                    observer.disconnect();
                    trigger();
                    break;
                }
            }
        }, { threshold: 0.5 });
        observer.observe(el);
    }

    function initCuratedCard() {
        var card = document.querySelector('.curated-resources-card[data-bm-curated="1"]');
        if (!card) return;
        var topic = card.getAttribute('data-bm-topic') || 'general';

        observeHalfVisible(card, function() {
            sendEvent('curated_resource_view', {
                event_category: 'monetization',
                resource_topic: topic,
                surface: 'blog_curated_card'
            });
        });

        var items = card.querySelectorAll('a.curated-item');
        for (var i = 0; i < items.length; i++) {
            (function(link, pos) {
                link.addEventListener('click', function() {
                    sendEvent('curated_resource_click', {
                        event_category: 'monetization',
                        resource_topic: topic,
                        resource_id: link.getAttribute('data-resource-id') || '',
                        resource_position: pos + 1,
                        surface: 'blog_curated_card'
                    });
                });
            })(items[i], i);
        }
    }

    function initStickyCta() {
        var wrap = document.querySelector('.revenue-sticky-cta-wrap[data-bm-sticky="1"]');
        if (!wrap) return;
        var link = wrap.querySelector('a.revenue-sticky-cta');
        var dismissBtn = wrap.querySelector('.revenue-sticky-dismiss');
        if (!link) return;

        var dismissed = false;
        try {
            dismissed = window.sessionStorage.getItem(DISMISS_KEY) === '1';
        } catch (e) {}

        if (dismissed) {
            wrap.classList.add('is-dismissed');
            return;
        }

        var viewTracked = false;
        function reveal() {
            if (wrap.classList.contains('is-dismissed')) return;
            if (!wrap.classList.contains('is-visible')) {
                wrap.classList.add('is-visible');
                document.body.classList.add('has-bm-sticky');
            }
            if (!viewTracked) {
                viewTracked = true;
                sendEvent('content_sticky_cta_view', {
                    event_category: 'content',
                    cta_surface: 'sticky_revenue_cta',
                    target_slug: link.getAttribute('data-target-slug') || ''
                });
            }
        }

        function checkScroll() {
            var scrollY = window.scrollY || window.pageYOffset || 0;
            var docHeight = Math.max(document.documentElement.scrollHeight || 0, document.body ? document.body.scrollHeight : 0);
            if (scrollY >= SCROLL_REVEAL_PX || docHeight <= (window.innerHeight || 800) + SCROLL_REVEAL_PX) {
                reveal();
                window.removeEventListener('scroll', checkScroll);
            }
        }

        window.addEventListener('scroll', checkScroll, { passive: true });
        checkScroll();

        if (dismissBtn) {
            dismissBtn.addEventListener('click', function() {
                wrap.classList.remove('is-visible');
                wrap.classList.add('is-dismissed');
                document.body.classList.remove('has-bm-sticky');
                window.removeEventListener('scroll', checkScroll);
                try {
                    window.sessionStorage.setItem(DISMISS_KEY, '1');
                } catch (e) {}
            });
        }

        // Only emit content_cta_click if page has no native indexingContentTelemetry delegate.
        var hasNativeDelegate = false;
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var txt = scripts[i].textContent || '';
            if (txt.indexOf('indexingContentTelemetry') !== -1 || txt.indexOf('content_cta_click') !== -1) {
                hasNativeDelegate = true;
                break;
            }
        }
        if (!hasNativeDelegate) {
            link.addEventListener('click', function() {
                sendEvent('content_cta_click', {
                    event_category: 'content',
                    cta_surface: 'sticky_revenue_cta',
                    target_slug: link.getAttribute('data-target-slug') || '',
                    link_url: link.href || ''
                });
            });
        }
    }

    function boot() {
        initCuratedCard();
        initStickyCta();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }
})();
