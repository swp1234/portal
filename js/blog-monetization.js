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

    var TOOL_CHROME_I18N = {
        zh: { skip: '跳至工具', back: '← 心理健康实验室', langLabel: '语言：', chip3: '100% 本地隐私', resetBtn: '重置', storyBtn: '保存 1080×1920 总结卡 (PNG)', copyBtn: '复制内容', shareBtn: '分享工具', faqTitle: '常见问题', refTitle: '心理学框架与参考文献', discTitle: '自我觉察说明：', discText: '本互动工具仅供日常自我觉察与科普参考，不构成临床诊断或医疗建议。', privacy: '隐私政策', terms: '使用条款' },
        ja: { skip: 'ツールへ移動', back: '← ウェルネスラボ', langLabel: '言語：', chip3: '100% ローカル完結', resetBtn: 'リセット', storyBtn: '1080×1920 要約カードを保存 (PNG)', copyBtn: 'コピー', shareBtn: 'ツールを共有', faqTitle: 'よくある質問', refTitle: '心理学的フレームワークと参考文献', discTitle: 'セルフケアに関するご案内：', discText: '本ツールは日常のセルフチェック用であり、医学的診断や治療に代わるものではありません。', privacy: 'プライバシーポリシー', terms: '利用規約' },
        es: { skip: 'Ir a la herramienta', back: '← Laboratorio de Bienestar', langLabel: 'Idioma:', chip3: '100% Privado (Local)', resetBtn: 'Reiniciar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar texto', shareBtn: 'Compartir', faqTitle: 'Preguntas Frecuentes', refTitle: 'Marcos Psicológicos y Referencias', discTitle: 'Aviso de autorreflexión:', discText: 'Esta herramienta interactiva es un recurso educativo de autorreflexión, no un diagnóstico clínico ni tratamiento médico.', privacy: 'Política de Privacidad', terms: 'Términos' },
        pt: { skip: 'Ir para a ferramenta', back: '← Laboratório de Bem-Estar', langLabel: 'Idioma:', chip3: '100% Privado (Local)', resetBtn: 'Redefinir', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar texto', shareBtn: 'Compartilhar', faqTitle: 'Perguntas Frequentes', refTitle: 'Referências Psicológicas', discTitle: 'Aviso de autorreflexão:', discText: 'Esta ferramenta interativa é um recurso educativo de autorreflexão, não diagnóstico clínico nem tratamento médico.', privacy: 'Privacidade', terms: 'Termos' },
        de: { skip: 'Zum Tool springen', back: '← Mental-Wellness-Labor', langLabel: 'Sprache:', chip3: '100% Privat (Lokal)', resetBtn: 'Zurücksetzen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Tool teilen', faqTitle: 'Häufig gestellte Fragen', refTitle: 'Psychologische Grundlagen & Quellen', discTitle: 'Hinweis zur Selbstreflexion:', discText: 'Dieses interaktive Tool dient der eigenen Reflexion im Alltag und ersetzt keine klinische Diagnose oder Therapie.', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
        fr: { skip: 'Aller à l’outil', back: '← Labo Bien-Être Mental', langLabel: 'Langue :', chip3: '100% Privé (Local)', resetBtn: 'Réinitialiser', storyBtn: 'Enregistrer la carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', faqTitle: 'Questions Fréquentes', refTitle: 'Cadres Psychologiques et Références', discTitle: 'Note d’auto-réflexion :', discText: 'Cet espace interactif est un outil éducatif de réflexion personnelle, et non un diagnostic clinique ou traitement médical.', privacy: 'Confidentialité', terms: 'Conditions' },
        id: { skip: 'Lompat ke Alat', back: '← Lab Kesehatan Mental', langLabel: 'Bahasa:', chip3: '100% Privat (Lokal)', resetBtn: 'Atur Ulang', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin Teks', shareBtn: 'Bagikan', faqTitle: 'Pertanyaan Umum', refTitle: 'Kerangka Psikologi & Referensi', discTitle: 'Catatan refleksi diri:', discText: 'Alat interaktif ini adalah sarana refleksi diri edukatif, bukan diagnosis klinis atau perawatan medis.', privacy: 'Kebijakan Privasi', terms: 'Ketentuan' },
        tr: { skip: 'Araca Geç', back: '← Zihinsel Sağlık Labı', langLabel: 'Dil:', chip3: '%100 Gizli (Yerel)', resetBtn: 'Sıfırla', storyBtn: '1080×1920 Özet Kartını Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', faqTitle: 'Sık Sorulan Sorular', refTitle: 'Psikolojik Çerçeveler ve Kaynaklar', discTitle: 'Öz-yansıtma uyarısı:', discText: 'Bu etkileşimli alan günlük farkındalık içindir; klinik tanı veya tıbbi tedavi yerine geçmez.', privacy: 'Gizlilik Politikası', terms: 'Koşullar' },
        hi: { skip: 'टूल पर जाएँ', back: '← मेंटल वेलनेस लैब', langLabel: 'भाषा:', chip3: '100% निजी (लोकल)', resetBtn: 'रीसेट करें', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न', refTitle: 'मनोवैज्ञानिक संदर्भ', discTitle: 'आत्म-चिंतन सूचना:', discText: 'यह इंटरैक्टिव टूल केवल शैक्षिक आत्म-चिंतन के लिए है, यह चिकित्सीय निदान या उपचार नहीं है।', privacy: 'गोपनीयता नीति', terms: 'शर्तें' },
        ru: { skip: 'Перейти к инструменту', back: '← Лаборатория здоровья', langLabel: 'Язык:', chip3: '100% Приватно (Локально)', resetBtn: 'Сбросить', storyBtn: 'Сохранить карточку 1080×1920 (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', faqTitle: 'Частые вопросы', refTitle: 'Психологические основы и источники', discTitle: 'Примечание о самопомощи:', discText: 'Этот интерактивный инструмент предназначен для личной рефлексии и не заменяет клиническую диагностику или терапию.', privacy: 'Конфиденциальность', terms: 'Условия' }
    };

    var EN_CHROME_RE = /^(?:Skip to|←\s*(?:Mental Wellness Lab|Wellness Lab|Tools Catalog|All \d+ Tools)|Language:|100% Private|Reset|Clear All|Save 1080|Copy |Share |Frequently Asked Questions|Psychological Frameworks|Editorial Self-Reflection|This interactive workspace|Privacy Policy|Terms)/i;
    var EN_LEAD_RE = /\b(?:your|locally|browser|private|seconds|minutes|generate|check|rate|identify|calm|build|spot|stop|track|feeling|tired|stuck|find|turn|decode|audit|separate|measure|distinguish|free|anxiety|burnout|stress|boundaries)\b/i;
    var leadsCache = null;
    var leadsPromise = null;

    function getToolSlug() {
        var m = /^\/portal\/tools\/([a-z0-9-]+)\.html$/i.exec(window.location.pathname || '');
        if (!m || m[1] === 'index' || m[1] === 'wellness-lab') return '';
        return m[1].toLowerCase();
    }

    function applyToolLeads(slug, loc) {
        if (!slug || !TOOL_CHROME_I18N[loc]) return;
        function apply(data) {
            if (!data || !data[slug] || !data[slug][loc]) return;
            if (getLocale() !== loc) return;
            var leadText = data[slug][loc];
            var leadEl = document.querySelector('[data-i18n="heroLead"]');
            if (leadEl && EN_LEAD_RE.test((leadEl.textContent || '').trim())) {
                leadEl.textContent = leadText;
            }
            var metaEl = document.querySelector('meta[name="description"]');
            if (metaEl && EN_LEAD_RE.test((metaEl.getAttribute('content') || '').trim())) {
                metaEl.setAttribute('content', leadText);
            }
        }
        if (leadsCache) {
            apply(leadsCache);
            return;
        }
        if (!leadsPromise && typeof window.fetch === 'function') {
            leadsPromise = window.fetch('/portal/js/wellness-lab-leads.json')
                .then(function(r) { return r.ok ? r.json() : null; })
                .then(function(d) { leadsCache = d; return d; })
                .catch(function() { return null; });
        }
        if (leadsPromise) leadsPromise.then(apply);
    }

    function initToolChromeI18n() {
        var slug = getToolSlug();
        if (!slug) return;
        function applyChrome() {
            var loc = getLocale();
            var pack = TOOL_CHROME_I18N[loc];
            if (!pack) return;
            var els = document.querySelectorAll('[data-i18n]');
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                var key = el.getAttribute('data-i18n');
                if (!pack[key] || el.tagName === 'META') continue;
                var cur = (el.textContent || '').trim();
                if (EN_CHROME_RE.test(cur)) {
                    el.textContent = pack[key];
                }
            }
            applyToolLeads(slug, loc);
        }
        applyChrome();
        if (typeof window.MutationObserver === 'function') {
            var obs = new window.MutationObserver(function() {
                window.setTimeout(applyChrome, 0);
            });
            obs.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        }
    }

    function boot() {
        initCuratedCard();
        initStickyCta();
        initQuickCheck();
        initToolBridge();
        initToolChromeI18n();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }
})();
