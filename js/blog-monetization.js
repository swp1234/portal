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

    var CURATED_I18N = {
        en: { badge: 'RECOMMENDED READING', title: 'Curated Evidence-Based Books', pill: 'View on Amazon ↗', disc: 'Editorial note: Hand-picked resources relevant to this topic. Amazon links use affiliate tag dopabrain-20 and support free tools at no extra cost.' },
        ko: { badge: '추천 심리 도서', title: '검증된 심리·회복 추천 도서', pill: 'Amazon에서 보기 ↗', disc: '안내: 주제와 관련된 엄선된 참고 도서입니다. Amazon 제휴 링크(dopabrain-20)를 포함하며 추가 비용 없이 무료 도구 운영에 도움이 됩니다.' },
        zh: { badge: '循证推荐书单', title: '精选心理学与自我成长书籍', pill: '在亚马逊查看 ↗', disc: '说明：本页精选相关主题参考书籍，包含 Amazon 联盟标签（dopabrain-20），不影响您的购买价格。' },
        ja: { badge: 'おすすめの心理学書籍', title: '厳選・根拠に基づく関連書籍', pill: 'Amazonで見る ↗', disc: '注記：テーマに関連する厳選書籍です。Amazonアソシエイト（dopabrain-20）を含み、追加費用なしで無料ツールの運営を支えます。' },
        es: { badge: 'LECTURA RECOMENDADA', title: 'Libros Seleccionados Basados en Evidencia', pill: 'Ver en Amazon ↗', disc: 'Nota editorial: Libros seleccionados sobre este tema. Los enlaces de Amazon usan la etiqueta de afiliado dopabrain-20 sin coste extra.' },
        pt: { badge: 'LEITURA RECOMENDADA', title: 'Livros Selecionados Baseados em Evidências', pill: 'Ver na Amazon ↗', disc: 'Nota editorial: Livros selecionados sobre este tema. Links da Amazon usam a tag de afiliado dopabrain-20 sem custo extra.' },
        de: { badge: 'BUCHEMPFEHLUNGEN', title: 'Kuratierte evidenzbasierte Fachbücher', pill: 'Auf Amazon ansehen ↗', disc: 'Hinweis: Handverlesene Literatur zum Thema. Amazon-Links nutzen den Partner-Tag dopabrain-20 ohne Mehrkosten für dich.' },
        fr: { badge: 'LECTURES RECOMMANDÉES', title: 'Livres Sélectionnés Fondés sur les Preuves', pill: 'Voir sur Amazon ↗', disc: 'Note éditoriale : Ouvrages sélectionnés sur ce thème. Les liens Amazon utilisent le tag affilié dopabrain-20 sans frais supplémentaires.' },
        id: { badge: 'BACAAN REKOMENDASI', title: 'Buku Psikologi Pilihan Berbasis Bukti', pill: 'Lihat di Amazon ↗', disc: 'Catatan editorial: Buku pilihan yang relevan dengan topik ini. Tautan Amazon memakai tag afiliasi dopabrain-20 tanpa biaya tambahan.' },
        tr: { badge: 'ÖNERİLEN KİTAPLAR', title: 'Kanıta Dayalı Seçkin Psikoloji Kitapları', pill: 'Amazon’da İncele ↗', disc: 'Editör notu: Konuyla ilgili seçkin kaynaklar. Amazon bağlantıları ek ücret olmadan dopabrain-20 satış ortaklığı etiketini kullanır.' },
        hi: { badge: 'अनुशंसित पुस्तकें', title: 'चुनी हुई प्रमाण-आधारित मनोविज्ञान पुस्तकें', pill: 'Amazon पर देखें ↗', disc: 'संपादकीय नोट: इस विषय से जुड़ी चुनिंदा पुस्तकें। Amazon लिंक बिना अतिरिक्त शुल्क के dopabrain-20 एफिलिएट टैग का उपयोग करते हैं।' },
        ru: { badge: 'РЕКОМЕНДУЕМЫЕ КНИГИ', title: 'Подборка научно обоснованных книг', pill: 'Смотреть на Amazon ↗', disc: 'Примечание: отобранная литература по теме. Ссылки Amazon содержат партнёрский тег dopabrain-20 без доплаты для вас.' }
    };

    function localizeCuratedCard(card) {
        if (!card) return;
        var loc = getLocale();
        var copy = CURATED_I18N[loc];
        if (!copy) return;
        var badge = card.querySelector('.curated-badge');
        if (badge && !badge.hasAttribute('data-i18n')) badge.textContent = copy.badge;
        var title = card.querySelector('.curated-title');
        if (title && !title.hasAttribute('data-i18n')) {
            var origTitle = title.getAttribute('data-bm-orig-title');
            if (origTitle === null) {
                origTitle = (title.textContent || '').trim();
                title.setAttribute('data-bm-orig-title', origTitle);
            }
            if (/^Curated Evidence-Based Books$/i.test(origTitle)) {
                title.textContent = copy.title;
            }
        }
        var pills = card.querySelectorAll('.curated-ext-pill');
        for (var p = 0; p < pills.length; p++) {
            pills[p].textContent = copy.pill;
        }
        var disc = card.querySelector('.curated-disclosure');
        if (disc && !disc.hasAttribute('data-i18n')) disc.textContent = copy.disc;
    }

    function initCuratedCard() {
        var card = document.querySelector('.curated-resources-card[data-bm-curated="1"]');
        if (!card) return;
        var topic = card.getAttribute('data-bm-topic') || 'general';
        localizeCuratedCard(card);

        if (typeof window.MutationObserver === 'function') {
            var langObs = new window.MutationObserver(function() {
                localizeCuratedCard(card);
            });
            langObs.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        }

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

    function initQuickCheck() {
        var widgets = document.querySelectorAll('.bm-quick-check[data-bm-check="1"]');
        if (!widgets.length) return;

        for (var w = 0; w < widgets.length; w++) {
            (function(widget) {
                var topic = widget.getAttribute('data-bm-topic') || 'general';
                var items = widget.querySelectorAll('button.bm-qc-item[role="checkbox"]');
                var countEl = widget.querySelector('.bm-qc-count');
                var verdictEl = widget.querySelector('.bm-qc-verdict');
                if (!items.length || !countEl || !verdictEl) return;

                var interacted = false;
                var msg0 = widget.getAttribute('data-msg-0') || verdictEl.textContent || '';
                var msgLow = widget.getAttribute('data-msg-low') || msg0;
                var msgMid = widget.getAttribute('data-msg-mid') || msgLow;
                var msgHigh = widget.getAttribute('data-msg-high') || msgMid;

                function update() {
                    var checked = 0;
                    for (var i = 0; i < items.length; i++) {
                        var isOn = items[i].getAttribute('aria-checked') === 'true';
                        if (isOn) {
                            checked++;
                            items[i].classList.add('is-checked');
                        } else {
                            items[i].classList.remove('is-checked');
                        }
                    }
                    countEl.textContent = checked + ' / ' + items.length;
                    if (checked === 0) verdictEl.textContent = msg0;
                    else if (checked === 1) verdictEl.textContent = msgLow;
                    else if (checked <= 2) verdictEl.textContent = msgMid;
                    else verdictEl.textContent = msgHigh;

                    if (!interacted && checked > 0) {
                        interacted = true;
                        sendEvent('blog_quick_check_interact', {
                            event_category: 'engagement',
                            check_topic: topic,
                            surface: 'blog_quick_check'
                        });
                    }
                }

                for (var i = 0; i < items.length; i++) {
                    (function(btn) {
                        btn.addEventListener('click', function() {
                            var next = btn.getAttribute('aria-checked') !== 'true';
                            btn.setAttribute('aria-checked', next ? 'true' : 'false');
                            update();
                        });
                    })(items[i]);
                }
            })(widgets[w]);
        }
    }

    function initToolBridge() {
        var bridge = document.querySelector('.bm-tool-bridge[data-bm-tool-bridge="1"]');
        if (!bridge) return;
        var kind = bridge.getAttribute('data-tool-slug') || bridge.getAttribute('data-bm-bridge-kind') || 'wellness';
        var cta = bridge.querySelector('a.bm-tool-bridge-cta');

        observeHalfVisible(bridge, function() {
            sendEvent('blog_tool_bridge_view', {
                event_category: 'engagement',
                bridge_kind: kind,
                surface: 'blog_tool_bridge'
            });
        });

        if (cta) {
            cta.addEventListener('click', function() {
                sendEvent('blog_tool_bridge_click', {
                    event_category: 'engagement',
                    bridge_kind: kind,
                    surface: 'blog_tool_bridge',
                    link_url: cta.getAttribute('href') || ''
                });
            });
        }
    }

    function boot() {
        initCuratedCard();
        initStickyCta();
        initQuickCheck();
        initToolBridge();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }
})();
