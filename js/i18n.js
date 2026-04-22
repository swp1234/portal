class I18n {
    constructor() {
        this.translations = {};
        this.supportedLanguages = ['ko', 'en', 'ja', 'es', 'pt', 'zh', 'id', 'tr', 'de', 'fr', 'hi', 'ru'];
        this.localeVersion = '20260422b';
        this.currentLang = this.detectLanguage();
    }

    detectLanguage() {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang && this.supportedLanguages.includes(urlLang)) return urlLang;
        const savedLang = localStorage.getItem('app_language');
        if (savedLang && this.supportedLanguages.includes(savedLang)) return savedLang;
        const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
        if (this.supportedLanguages.includes(browserLang)) return browserLang;
        return 'en';
    }

    async loadTranslations(lang) {
        try {
            const response = await fetch(`/portal/js/locales/${lang}.json?v=${this.localeVersion}`, {
                cache: 'reload'
            });
            if (!response.ok) throw new Error('Not found');
            this.translations[lang] = await response.json();
            return true;
        } catch (e) {
            if (lang !== 'en') return this.loadTranslations('en');
            return false;
        }
    }

    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        for (const k of keys) {
            if (value && value[k]) value = value[k];
            else return key;
        }
        return value;
    }

    getSeoHref(lang) {
        const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
        const hrefMap = {};
        alternateLinks.forEach(link => {
            const hreflang = link.getAttribute('hreflang');
            if (hreflang) hrefMap[hreflang] = link.href;
        });
        return hrefMap[lang] || hrefMap['x-default'] || (document.querySelector('link[rel="canonical"]') || {}).href || window.location.href;
    }

    syncSeoState(lang, updateHistory = false) {
        const currentUrl = new URL(window.location.href);
        const currentHasLangParam = currentUrl.searchParams.has('lang');
        const targetHref = this.getSeoHref(updateHistory || currentHasLangParam ? lang : 'x-default');

        if (targetHref) {
            const canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) canonical.href = targetHref;

            const ogUrl = document.querySelector('meta[property="og:url"]');
            if (ogUrl) ogUrl.content = targetHref;

            const twitterUrl = document.querySelector('meta[name="twitter:url"]');
            if (twitterUrl) twitterUrl.content = targetHref;
        }

        const languageMeta = document.querySelector('meta[name="language"]');
        if (languageMeta) languageMeta.content = lang;

        if (updateHistory && targetHref) {
            const nextUrl = new URL(targetHref);
            nextUrl.hash = currentUrl.hash;
            if (currentUrl.pathname !== nextUrl.pathname || currentUrl.search !== nextUrl.search || currentUrl.hash !== nextUrl.hash) {
                window.history.replaceState({}, '', nextUrl.pathname + nextUrl.search + nextUrl.hash);
            }
        }
    }

    async setLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) return false;
        if (!this.translations[lang]) await this.loadTranslations(lang);
        this.currentLang = lang;
        localStorage.setItem('app_language', lang);
        document.documentElement.lang = lang;
        this.updateUI();
        this.syncSeoState(lang, true);
        return true;
    }

    updateUI() {
        document.documentElement.lang = this.currentLang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = this.t(el.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
        });
        document.title = this.t('app.title');
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.content = this.t('app.description');
        this.syncSeoState(this.currentLang);
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    getLanguageName(lang) {
        const names = {
            'ko': '한국어',
            'en': 'English',
            'ja': '日本語',
            'es': 'Español',
            'pt': 'Português',
            'zh': '简体中文',
            'id': 'Bahasa Indonesia',
            'tr': 'Türkçe',
            'de': 'Deutsch',
            'fr': 'Français',
            'hi': 'हिन्दी',
            'ru': 'Русский'
        };
        return names[lang] || lang;
    }
}

const i18n = new I18n();

// Ensure loader transitions properly (CSS must support opacity/visibility)
(function() {
    const appLoader = document.getElementById('app-loader');
    if (appLoader && !appLoader.style.transition) {
        appLoader.style.transition = 'opacity 0.4s ease-out, visibility 0.4s ease-out';
    }
})();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.getRegistration('/portal/').then((registration) => {
            if (registration) {
                registration.update().catch(() => {
                    // Update checks are best-effort only.
                });
            }
        }).catch(() => {
            // Registration lookup failed, but the page still works.
        });
    });
}
