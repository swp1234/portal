// DopaBrain Personalization Engine
// Tracks user behavior (LocalStorage) + time/season context to reorder apps
(function () {
    'use strict';

    var STORAGE_KEY = 'dopabrain_personalize';
    var MAX_HISTORY = 50;

    // ─── Storage helpers ──────────────────────────────────────
    function loadData() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || createDefault();
        } catch (e) {
            return createDefault();
        }
    }

    function saveData(data) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) { /* quota exceeded - ignore */ }
    }

    function createDefault() {
        return { clicks: {}, recent: [], catClicks: {}, firstVisit: Date.now() };
    }

    // ─── Click Tracking ───────────────────────────────────────
    function trackClick(appId, category) {
        var data = loadData();

        // Total click count per app
        data.clicks[appId] = (data.clicks[appId] || 0) + 1;

        // Category click count
        if (category) {
            data.catClicks[category] = (data.catClicks[category] || 0) + 1;
        }

        // Recent history (ordered, no duplicates)
        data.recent = data.recent.filter(function (id) { return id !== appId; });
        data.recent.unshift(appId);
        if (data.recent.length > MAX_HISTORY) data.recent = data.recent.slice(0, MAX_HISTORY);

        saveData(data);
    }

    // ─── Time-based Recommendations ──────────────────────────
    function getTimeContext() {
        var now = new Date();
        var hour = now.getHours();
        var month = now.getMonth() + 1; // 1-12
        var day = now.getDate();
        var dow = now.getDay(); // 0=Sun

        var context = {
            period: 'day', // morning, afternoon, evening, night
            season: '',    // seasonal event key
            boostIds: [],  // app IDs to boost
            boostCats: []  // categories to boost
        };

        // Time of day
        if (hour >= 6 && hour < 12) context.period = 'morning';
        else if (hour >= 12 && hour < 18) context.period = 'afternoon';
        else if (hour >= 18 && hour < 22) context.period = 'evening';
        else context.period = 'night';

        // Night: boost relaxation / sleep apps
        if (context.period === 'night') {
            context.boostIds.push('white-noise', 'detox-timer', 'emotion-temp');
            context.boostCats.push('life');
        }

        // Morning: boost fortune / motivation
        if (context.period === 'morning') {
            context.boostIds.push('dream-fortune', 'affirmation');
            context.boostCats.push('fortune');
        }

        // Monday morning: extra boost for fortune / tests
        if (dow === 1 && context.period === 'morning') {
            context.boostIds.push('hsp-test', 'mbti-love');
        }

        // Friday evening / weekend: games & fun
        if ((dow === 5 && hour >= 17) || dow === 0 || dow === 6) {
            context.boostIds.push('stack-tower', 'zigzag-runner', 'love-frequency', 'emoji-merge');
            context.boostCats.push('quiz');
        }

        // Seasonal events
        // Year-end tax season (Nov-Jan)
        if (month === 11 || month === 12 || month === 1) {
            context.season = 'yearend';
            context.boostIds.push('tax-refund-preview');
        }

        // Valentine's (Feb 1-14)
        if (month === 2 && day <= 14) {
            context.season = 'valentine';
            context.boostIds.push('love-frequency', 'valentine', 'mbti-love', 'mbti-tips');
        }

        // Lunar New Year (late Jan ~ early Feb, approximate)
        if ((month === 1 && day >= 20) || (month === 2 && day <= 10)) {
            context.boostIds.push('dream-fortune', 'lottery', 'past-life');
        }

        // Summer (Jul-Aug): light/fun content
        if (month === 7 || month === 8) {
            context.boostCats.push('quiz');
            context.boostIds.push('sky-runner', 'idle-clicker');
        }

        // Chuseok / Thanksgiving area (Sep)
        if (month === 9) {
            context.boostIds.push('dream-fortune', 'past-life');
        }

        return context;
    }

    // ─── Score Calculation ─────────────────────────────────────
    // Returns a sorted copy of the apps array based on personalization score
    function scoreApps(apps) {
        var data = loadData();
        var timeCtx = getTimeContext();
        var isNewUser = data.recent.length === 0;

        // For new users, return default order (isNew/isPopular priority)
        if (isNewUser) return null;

        var boostSet = {};
        timeCtx.boostIds.forEach(function (id) { boostSet[id] = true; });

        var boostCatSet = {};
        timeCtx.boostCats.forEach(function (cat) { boostCatSet[cat] = true; });

        // Find user's favorite category
        var favCat = null;
        var maxCatClicks = 0;
        Object.keys(data.catClicks).forEach(function (cat) {
            if (data.catClicks[cat] > maxCatClicks) {
                maxCatClicks = data.catClicks[cat];
                favCat = cat;
            }
        });

        var scored = apps.map(function (app) {
            var score = 0;

            // 1. Click frequency (max +30)
            var clicks = data.clicks[app.id] || 0;
            score += Math.min(clicks * 3, 30);

            // 2. Recency bonus (max +20)
            var recentIdx = data.recent.indexOf(app.id);
            if (recentIdx >= 0) {
                score += Math.max(20 - recentIdx * 2, 0);
            }

            // 3. Favorite category bonus (+10)
            if (favCat && app.category === favCat) {
                score += 10;
            }

            // 4. Time-based boost (+15)
            if (boostSet[app.id]) {
                score += 15;
            }

            // 5. Time-based category boost (+8)
            if (boostCatSet[app.category]) {
                score += 8;
            }

            // 6. isNew / isPopular base priority (so they don't completely disappear)
            if (app.isNew) score += 5;
            if (app.isPopular) score += 3;

            // 7. Discovery bonus: apps never clicked get a small bump
            //    so the user sees variety (avoid filter bubble)
            if (clicks === 0 && recentIdx < 0) {
                score += 2;
            }

            return { app: app, score: score };
        });

        scored.sort(function (a, b) { return b.score - a.score; });
        return scored.map(function (s) { return s.app; });
    }

    // ─── Get Recently Used Apps ───────────────────────────────
    function getRecentApps(apps, limit) {
        var data = loadData();
        if (!data.recent || data.recent.length === 0) return [];

        var appMap = {};
        apps.forEach(function (app) { appMap[app.id] = app; });

        var result = [];
        for (var i = 0; i < data.recent.length && result.length < (limit || 5); i++) {
            if (appMap[data.recent[i]]) {
                result.push(appMap[data.recent[i]]);
            }
        }
        return result;
    }

    // ─── Get Recommended Apps (time + behavior) ───────────────
    function getRecommended(apps, limit) {
        var data = loadData();
        var timeCtx = getTimeContext();
        var recentSet = {};
        (data.recent || []).slice(0, 3).forEach(function (id) { recentSet[id] = true; });

        // Combine time-based boosts with user preference
        var boostSet = {};
        timeCtx.boostIds.forEach(function (id) { boostSet[id] = true; });

        var appMap = {};
        apps.forEach(function (app) { appMap[app.id] = app; });

        var candidates = [];

        // Time-boosted apps that user hasn't used recently
        timeCtx.boostIds.forEach(function (id) {
            if (appMap[id] && !recentSet[id]) {
                candidates.push(appMap[id]);
            }
        });

        // If not enough, add popular apps user hasn't tried
        if (candidates.length < (limit || 4)) {
            apps.forEach(function (app) {
                if ((app.isPopular || app.isNew) && !recentSet[app.id] && candidates.indexOf(app) < 0) {
                    candidates.push(app);
                }
            });
        }

        return candidates.slice(0, limit || 4);
    }

    // ─── Get Greeting by Time ─────────────────────────────────
    function getTimeGreeting(lang) {
        var ctx = getTimeContext();
        var greetings = {
            ko: { morning: '좋은 아침이에요!', afternoon: '좋은 오후예요!', evening: '좋은 저녁이에요!', night: '편안한 밤 되세요' },
            en: { morning: 'Good morning!', afternoon: 'Good afternoon!', evening: 'Good evening!', night: 'Good night!' },
            zh: { morning: '早上好!', afternoon: '下午好!', evening: '晚上好!', night: '晚安!' },
            hi: { morning: 'सुप्रभात!', afternoon: 'शुभ दोपहर!', evening: 'शुभ संध्या!', night: 'शुभ रात्रि!' },
            ru: { morning: 'Доброе утро!', afternoon: 'Добрый день!', evening: 'Добрый вечер!', night: 'Доброй ночи!' },
            ja: { morning: 'おはようございます!', afternoon: 'こんにちは!', evening: 'こんばんは!', night: 'おやすみなさい!' },
            es: { morning: '!Buenos dias!', afternoon: '!Buenas tardes!', evening: '!Buenas noches!', night: '!Buenas noches!' },
            pt: { morning: 'Bom dia!', afternoon: 'Boa tarde!', evening: 'Boa noite!', night: 'Boa noite!' },
            id: { morning: 'Selamat pagi!', afternoon: 'Selamat siang!', evening: 'Selamat sore!', night: 'Selamat malam!' },
            tr: { morning: 'Gunaydin!', afternoon: 'Iyi gunler!', evening: 'Iyi aksamlar!', night: 'Iyi geceler!' },
            de: { morning: 'Guten Morgen!', afternoon: 'Guten Tag!', evening: 'Guten Abend!', night: 'Gute Nacht!' },
            fr: { morning: 'Bonjour !', afternoon: 'Bon apres-midi !', evening: 'Bonsoir !', night: 'Bonne nuit !' }
        };
        var g = greetings[lang] || greetings.en;
        return g[ctx.period] || g.morning;
    }

    // ─── Section Labels ───────────────────────────────────────
    var SECTION_LABELS = {
        recent: { ko: '최근 사용', en: 'Recently Used', zh: '最近使用', hi: 'हाल ही में उपयोग', ru: 'Недавние', ja: '最近使用', es: 'Usados recientemente', pt: 'Usados recentemente', id: 'Baru digunakan', tr: 'Son kullanilanlar', de: 'Zuletzt verwendet', fr: 'Utilises recemment' },
        recommended: { ko: '지금 추천', en: 'Recommended', zh: '为你推荐', hi: 'आपके लिए', ru: 'Рекомендации', ja: 'おすすめ', es: 'Recomendados', pt: 'Recomendados', id: 'Rekomendasi', tr: 'Onerilen', de: 'Empfohlen', fr: 'Recommandes' },
        forYou: { ko: '맞춤 추천', en: 'For You', zh: '个性化推荐', hi: 'आपके लिए सुझाव', ru: 'Для вас', ja: 'あなたへ', es: 'Para ti', pt: 'Para voce', id: 'Untuk kamu', tr: 'Senin icin', de: 'Fur dich', fr: 'Pour vous' }
    };

    function getSectionLabel(key, lang) {
        var labels = SECTION_LABELS[key];
        if (!labels) return key;
        return labels[lang] || labels.en;
    }

    // ─── Has personalization data? ────────────────────────────
    function hasData() {
        var data = loadData();
        return data.recent && data.recent.length > 0;
    }

    // ─── Public API ───────────────────────────────────────────
    window.Personalize = {
        trackClick: trackClick,
        scoreApps: scoreApps,
        getRecentApps: getRecentApps,
        getRecommended: getRecommended,
        getTimeContext: getTimeContext,
        getTimeGreeting: getTimeGreeting,
        getSectionLabel: getSectionLabel,
        hasData: hasData
    };
})();
