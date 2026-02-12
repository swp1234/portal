// PWA Install Prompt - dopabrain.com
(function() {
    'use strict';

    // Don't show if already installed or dismissed
    if (window.matchMedia('(display-mode: standalone)').matches) return;
    if (window.navigator.standalone) return;
    if (localStorage.getItem('pwa-install-dismissed')) return;

    let deferredPrompt = null;

    window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        deferredPrompt = e;

        // Show banner after 30s engagement
        setTimeout(showInstallBanner, 30000);
    });

    function getLabel(key, fallback) {
        if (window.i18n && typeof window.i18n.t === 'function') {
            var val = window.i18n.t(key);
            return val !== key ? val : fallback;
        }
        return fallback;
    }

    function showInstallBanner() {
        if (!deferredPrompt) return;

        // Inject styles
        var style = document.createElement('style');
        style.textContent = [
            '.pwa-install-banner {',
            '    position: fixed;',
            '    bottom: 16px;',
            '    left: 50%;',
            '    transform: translateX(-50%);',
            '    background: rgba(30, 30, 40, 0.95);',
            '    backdrop-filter: blur(12px);',
            '    -webkit-backdrop-filter: blur(12px);',
            '    border: 1px solid rgba(255,255,255,0.1);',
            '    border-radius: 16px;',
            '    padding: 12px 20px;',
            '    display: flex;',
            '    align-items: center;',
            '    gap: 12px;',
            '    z-index: 99999;',
            '    box-shadow: 0 8px 32px rgba(0,0,0,0.4);',
            '    animation: pwa-slide-up 0.3s ease-out;',
            '    max-width: 90vw;',
            '    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;',
            '}',
            '.pwa-install-banner .pwa-text {',
            '    color: rgba(255,255,255,0.9);',
            '    font-size: 14px;',
            '    white-space: nowrap;',
            '}',
            '.pwa-install-banner .pwa-btn {',
            '    min-height: 44px;',
            '    min-width: 44px;',
            '    padding: 8px 16px;',
            '    border: none;',
            '    border-radius: 10px;',
            '    font-size: 14px;',
            '    font-weight: 600;',
            '    cursor: pointer;',
            '    white-space: nowrap;',
            '}',
            '.pwa-install-banner .pwa-btn-install {',
            '    background: linear-gradient(135deg, #667eea, #764ba2);',
            '    color: #fff;',
            '}',
            '.pwa-install-banner .pwa-btn-dismiss {',
            '    background: rgba(255,255,255,0.1);',
            '    color: rgba(255,255,255,0.7);',
            '}',
            '@keyframes pwa-slide-up {',
            '    from { transform: translateX(-50%) translateY(100px); opacity: 0; }',
            '    to { transform: translateX(-50%) translateY(0); opacity: 1; }',
            '}',
            '@media (prefers-reduced-motion: reduce) {',
            '    .pwa-install-banner { animation: none; }',
            '}'
        ].join('\n');
        document.head.appendChild(style);

        var banner = document.createElement('div');
        banner.className = 'pwa-install-banner';
        banner.setAttribute('role', 'alert');
        banner.innerHTML = '<span class="pwa-text">' + getLabel('pwa.installApp', 'Install this app') + '</span>' +
            '<button class="pwa-btn pwa-btn-install">' + getLabel('pwa.install', 'Install') + '</button>' +
            '<button class="pwa-btn pwa-btn-dismiss">' + getLabel('pwa.dismiss', 'No thanks') + '</button>';
        document.body.appendChild(banner);

        banner.querySelector('.pwa-btn-install').addEventListener('click', function() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(function(result) {
                    if (result.outcome === 'accepted') {
                        if (typeof gtag !== 'undefined') gtag('event', 'pwa_install');
                    }
                    deferredPrompt = null;
                });
            }
            banner.remove();
        });

        banner.querySelector('.pwa-btn-dismiss').addEventListener('click', function() {
            localStorage.setItem('pwa-install-dismissed', Date.now());
            banner.remove();
        });

        // Auto-hide after 10s
        setTimeout(function() { if (banner.parentNode) banner.remove(); }, 10000);
    }
})();
