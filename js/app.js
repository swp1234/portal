// DopaBrain Portal - Main Application Logic
(function () {
    'use strict';

    // Initialize i18n
    (async function initI18n() {
        await i18n.loadTranslations(i18n.getCurrentLanguage());
        i18n.updateUI();
        const langToggle = document.getElementById('lang-toggle');
        const langMenu = document.getElementById('lang-menu');
        const langOptions = document.querySelectorAll('.lang-option');
        document.querySelector(`[data-lang="${i18n.getCurrentLanguage()}"]`)?.classList.add('active');
        langToggle?.addEventListener('click', () => langMenu.classList.toggle('hidden'));
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) langMenu?.classList.add('hidden');
        });
        langOptions.forEach(opt => {
            opt.addEventListener('click', async () => {
                await i18n.setLanguage(opt.getAttribute('data-lang'));
                langOptions.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                langMenu.classList.add('hidden');
                // Re-render app cards and blog with new language
                filterApps();
                if (typeof renderBlog === 'function') renderBlog();
            });
        });
    })();

    // DOM Elements
    const appGrid = document.getElementById('app-grid');
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const emptyState = document.getElementById('empty-state');
    const resetSearch = document.getElementById('reset-search');
    const catButtons = document.querySelectorAll('.cat-btn');

    let currentCategory = 'all';
    let searchQuery = '';

    // Initialize
    function init() {
        renderApps(APP_DATA);
        bindEvents();
        animateOnScroll();
        trackRecentlyUsed();
    }

    // Render app cards
    function renderApps(apps) {
        if (apps.length === 0) {
            appGrid.classList.add('hidden');
            emptyState.classList.remove('hidden');
            return;
        }

        appGrid.classList.remove('hidden');
        emptyState.classList.add('hidden');

        appGrid.innerHTML = apps.map((app, index) => createAppCard(app, index)).join('');

        // Animate cards with stagger
        requestAnimationFrame(() => {
            const cards = appGrid.querySelectorAll('.app-card');
            cards.forEach((card, i) => {
                card.style.animationDelay = `${i * 0.06}s`;
                card.classList.add('fade-in');
            });
        });
    }

    // Create single app card HTML
    function createAppCard(app, index) {
        const lang = i18n.getCurrentLanguage();
        const name = typeof getAppName === 'function' ? getAppName(app, lang) : app.name;
        const desc = typeof getAppDesc === 'function' ? getAppDesc(app, lang) : app.shortDesc;
        const badges = [];
        if (app.isNew) badges.push('<span class="badge badge-new">NEW</span>');
        if (app.isPopular) badges.push('<span class="badge badge-popular">인기</span>');

        return `
            <a href="${app.url}" class="app-card" data-id="${app.id}"
               style="--card-color: ${app.color}"
               aria-label="${name} - ${desc}">
                <div class="card-glow"></div>
                <div class="card-content">
                    <div class="card-header">
                        <div class="card-icon" style="background: linear-gradient(135deg, ${app.color}33, ${app.color}11);">
                            <span>${app.icon}</span>
                        </div>
                        <div class="card-badges">${badges.join('')}</div>
                    </div>
                    <div class="card-info">
                        <h3 class="card-title">${name}</h3>
                        <p class="card-desc">${desc}</p>
                    </div>
                    <div class="card-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </div>
                </div>
                <div class="card-color-bar" style="background: linear-gradient(90deg, ${app.color}, ${app.color}88);"></div>
            </a>
        `;
    }

    // Filter apps by category and search
    function filterApps() {
        let filtered = APP_DATA;

        // Category filter
        if (currentCategory !== 'all') {
            filtered = filtered.filter(app => app.category === currentCategory);
        }

        // Search filter (searches both Korean and localized text)
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            const lang = i18n.getCurrentLanguage();
            filtered = filtered.filter(app => {
                const name = typeof getAppName === 'function' ? getAppName(app, lang) : app.name;
                const desc = typeof getAppDesc === 'function' ? getAppDesc(app, lang) : app.shortDesc;
                return app.name.toLowerCase().includes(query) ||
                    app.shortDesc.toLowerCase().includes(query) ||
                    app.description.toLowerCase().includes(query) ||
                    app.tags.some(tag => tag.toLowerCase().includes(query)) ||
                    name.toLowerCase().includes(query) ||
                    desc.toLowerCase().includes(query);
            });
        }

        renderApps(filtered);
    }

    // Bind events
    function bindEvents() {
        // Category buttons
        catButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                catButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentCategory = btn.dataset.category;

                // Ripple effect
                createRipple(btn, e);

                filterApps();
            });
        });

        // Search input
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            searchClear.classList.toggle('hidden', !searchQuery);
            filterApps();
        });

        // Search clear
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            searchClear.classList.add('hidden');
            filterApps();
            searchInput.focus();
        });

        // Reset search
        resetSearch.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            currentCategory = 'all';
            searchClear.classList.add('hidden');
            catButtons.forEach(b => b.classList.remove('active'));
            catButtons[0].classList.add('active');
            filterApps();
        });

        // Keyboard shortcut: / to focus search
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
            if (e.key === 'Escape' && document.activeElement === searchInput) {
                searchInput.blur();
            }
        });

        // Card click tracking
        appGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.app-card');
            if (card) {
                trackAppClick(card.dataset.id);
            }
        });
    }

    // Ripple effect on buttons
    function createRipple(element, event) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${(event?.clientX || rect.left + rect.width / 2) - rect.left - size / 2}px`;
        ripple.style.top = `${(event?.clientY || rect.top + rect.height / 2) - rect.top - size / 2}px`;
        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    // Animate elements on scroll
    function animateOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.stats-section, .portal-footer').forEach(el => {
            observer.observe(el);
        });
    }

    // Track recently used apps (localStorage)
    function trackRecentlyUsed() {
        // Load recent apps from localStorage
        try {
            const recent = JSON.parse(localStorage.getItem('dopabrain_recent') || '[]');
            // Could be used for "recently used" section in the future
        } catch (e) {
            // Ignore parse errors
        }
    }

    function trackAppClick(appId) {
        try {
            let recent = JSON.parse(localStorage.getItem('dopabrain_recent') || '[]');
            recent = recent.filter(id => id !== appId);
            recent.unshift(appId);
            recent = recent.slice(0, 5); // Keep last 5
            localStorage.setItem('dopabrain_recent', JSON.stringify(recent));
        } catch (e) {
            // Ignore storage errors
        }
    }

    // Service Worker Registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // SW registration failed, but app still works
        });
    }

    // Start
    document.addEventListener('DOMContentLoaded', init);
})();
