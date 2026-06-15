// DopaBrain AdSense loader.
// Keeps normal ad loading immediate, but delays the Google script for the
// low-quality SG desktop direct/no-referrer blog segment that diluted RPM.
(function() {
    'use strict';

    var VERSION = '2026-06-15-sg-scan-delay';
    var CLIENT_ID = 'ca-pub-3600813755953882';
    var ADSENSE_SRC = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + CLIENT_ID;
    var startedAt = Date.now();

    window.adsbygoogle = window.adsbygoogle || [];
    window.__dopabrainAdsenseLoadState = window.__dopabrainAdsenseLoadState || {
        version: VERSION,
        startedAt: startedAt,
        delayed: false,
        delayReason: '',
        requested: false,
        loaded: false,
        requestReason: '',
        requestedAfterMs: 0,
        loadedAfterMs: 0,
        error: ''
    };

    if (window.__dopabrainAdsenseLoaderStarted) return;
    window.__dopabrainAdsenseLoaderStarted = true;

    function normalizeMarket(value) {
        value = String(value || '').toLowerCase().replace(/[^a-z]/g, '');
        if (value === 'sg' || value === 'singapore') return 'sg';
        return '';
    }

    function detectMarket() {
        try {
            var params = new URLSearchParams(window.location.search || '');
            var override = normalizeMarket(params.get('market') || params.get('country') || params.get('cc'));
            if (override) return override;
        } catch(e) {}

        try {
            if ((Intl.DateTimeFormat().resolvedOptions().timeZone || '') === 'Asia/Singapore') return 'sg';
        } catch(e) {}

        return '';
    }

    function getDeviceType() {
        if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return 'touch';
        if (window.matchMedia && window.matchMedia('(min-width: 900px)').matches) return 'desktop';
        return 'small_screen';
    }

    function hasAdsenseScript() {
        return !!document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
    }

    function isScanRisk() {
        return window.location.pathname.indexOf('/portal/blog/') === 0 &&
            detectMarket() === 'sg' &&
            getDeviceType() === 'desktop' &&
            !document.referrer;
    }

    function requestAdsense(reason) {
        var state = window.__dopabrainAdsenseLoadState;
        if (state.requested || state.loaded) return;

        if (hasAdsenseScript()) {
            state.requested = true;
            state.loaded = true;
            state.requestReason = 'existing_script';
            state.requestedAfterMs = Math.max(0, Date.now() - startedAt);
            state.loadedAfterMs = state.requestedAfterMs;
            return;
        }

        state.requested = true;
        state.requestReason = reason || 'immediate';
        state.requestedAfterMs = Math.max(0, Date.now() - startedAt);

        var script = document.createElement('script');
        script.async = true;
        script.src = ADSENSE_SRC;
        script.crossOrigin = 'anonymous';
        script.onload = function() {
            state.loaded = true;
            state.loadedAfterMs = Math.max(0, Date.now() - startedAt);
        };
        script.onerror = function() {
            state.error = 'adsense_load_error';
        };
        document.head.appendChild(script);
    }

    function requestWhenVisible(reason) {
        if (!document.hidden) {
            requestAdsense(reason);
            return;
        }
        document.addEventListener('visibilitychange', function onVisible() {
            if (document.hidden) return;
            document.removeEventListener('visibilitychange', onVisible);
            requestAdsense(reason + '_after_visible');
        });
    }

    if (!isScanRisk()) {
        requestAdsense('immediate');
        return;
    }

    window.__dopabrainAdsenseLoadState.delayed = true;
    window.__dopabrainAdsenseLoadState.delayReason = 'sg_desktop_direct_blog';

    document.addEventListener('click', function() {
        requestAdsense('engagement_click');
    }, { once: true, passive: true });
    document.addEventListener('keydown', function() {
        requestAdsense('engagement_key');
    }, { once: true, passive: true });
    document.addEventListener('touchstart', function() {
        requestAdsense('engagement_touch');
    }, { once: true, passive: true });

    window.setTimeout(function() {
        requestWhenVisible('delayed_visible_3000');
    }, 3000);
})();
