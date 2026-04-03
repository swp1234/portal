(function () {
  'use strict';

  var config = window.__navOptimizationsConfig || {};
  var selectors = Array.isArray(config.prefetchSelectors)
    ? config.prefetchSelectors.filter(Boolean)
    : [];

  function supportsSpeculationRules() {
    return (
      typeof HTMLScriptElement !== 'undefined' &&
      typeof HTMLScriptElement.supports === 'function' &&
      HTMLScriptElement.supports('speculationrules')
    );
  }

  function installSpeculationRules() {
    if (!supportsSpeculationRules() || selectors.length === 0) {
      return;
    }

    if (document.getElementById('dopabrain-speculation-rules')) {
      return;
    }

    var script = document.createElement('script');
    script.type = 'speculationrules';
    script.id = 'dopabrain-speculation-rules';
    script.textContent = JSON.stringify({
      prefetch: [
        {
          where: {
            selector_matches: selectors.join(', ')
          },
          eagerness: 'moderate'
        }
      ]
    });
    document.head.appendChild(script);
  }

  function trackBfcacheRestore() {
    if (typeof window.gtag !== 'function') {
      return;
    }

    var params = {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      navigation_type: 'back_forward_cache',
      transport_type: 'beacon'
    };

    if (config.hubName) {
      params.hub_name = config.hubName;
    }

    window.gtag('event', 'page_view', params);
  }

  installSpeculationRules();

  window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }

    document.documentElement.setAttribute('data-bfcache-restored', 'true');
    trackBfcacheRestore();
    document.dispatchEvent(
      new CustomEvent('dopabrain:bfcache-restore', {
        detail: {
          navigationType: 'back_forward_cache'
        }
      })
    );
  });

  window.addEventListener('pagehide', function (event) {
    if (!event.persisted) {
      document.documentElement.removeAttribute('data-bfcache-restored');
    }
  });
})();
