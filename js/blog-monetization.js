// DopaBrain Shared Blog & Tool Monetization Telemetry and Sticky CTA Controller
// Strict exact-once 50%-visible exposure tracking; zero private data leakage.
(function() {
    'use strict';

    if (window.__dopabrainBlogMonetizationInit) return;
    window.__dopabrainBlogMonetizationInit = true;

    var DISMISS_KEY = 'db_bm_sticky_dismissed';
    var SCROLL_REVEAL_PX = 260;

    var SUPPORTED_LOCS = { ko: 1, en: 1, zh: 1, hi: 1, ru: 1, ja: 1, es: 1, pt: 1, id: 1, tr: 1, de: 1, fr: 1 };
    var langMutated = false;

    function getLocale() {
        var pathMatch = /^\/portal\/blog\/([a-z]{2})\//i.exec(window.location.pathname || '');
        if (pathMatch && SUPPORTED_LOCS[pathMatch[1].toLowerCase()]) return pathMatch[1].toLowerCase();
        var htmlLang = (document.documentElement.getAttribute('lang') || '').trim().toLowerCase().slice(0, 2);
        if (!langMutated) {
            try {
                var qLang = new URLSearchParams(window.location.search || '').get('lang');
                if (qLang) {
                    var normQ = qLang.trim().toLowerCase().slice(0, 2);
                    if (SUPPORTED_LOCS[normQ] && (!htmlLang || htmlLang === 'en')) return normQ;
                }
            } catch (e) {}
            if (window.i18n && window.i18n.currentLang) {
                var normI = String(window.i18n.currentLang).trim().toLowerCase().slice(0, 2);
                if (SUPPORTED_LOCS[normI]) return normI;
            }
        }
        if (htmlLang) return htmlLang;
        return 'en';
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
                langMutated = true;
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

    var BRIDGE_APP_I18N = {
        en: { badge: '70 FREE WELLNESS LABS', cta: 'Open Free Lab →' },
        ko: { badge: '70개 무료 웰니스 랩', cta: '무료 랩 열기 →' },
        zh: { badge: '70个免费心理实验室', cta: '打开免费工具 →' },
        ja: { badge: '無料70ウェルネスラボ', cta: '無料ラボを開く →' },
        es: { badge: '70 LABOS DE BIENESTAR GRATIS', cta: 'Abrir Labo Gratis →' },
        pt: { badge: '70 LABOS DE BEM-ESTAR GRÁTIS', cta: 'Abrir Labo Grátis →' },
        de: { badge: '70 GRATIS WELLNESS-LABS', cta: 'Gratis-Lab öffnen →' },
        fr: { badge: '70 LABOS BIEN-ÊTRE GRATUITS', cta: 'Ouvrir le Labo →' },
        id: { badge: '70 LAB WELLNESS GRATIS', cta: 'Buka Lab Gratis →' },
        tr: { badge: '70 ÜCRETSİZ WELLNESS LABI', cta: 'Ücretsiz Labı Aç →' },
        hi: { badge: '70 मुफ़्त वेलनेस लैब', cta: 'मुफ़्त लैब खोलें →' },
        ru: { badge: '70 БЕСПЛАТНЫХ ПРАКТИК', cta: 'Открыть практику →' }
    };

    function syncBridgeLocale(bridge, cta) {
        if (!bridge || !cta) return;
        var pathname = window.location.pathname || '';
        if (/^\/portal\/blog\//i.test(pathname)) return;
        var loc = getLocale();
        var pack = BRIDGE_APP_I18N[loc] || BRIDGE_APP_I18N.en;
        var badge = bridge.querySelector('.bm-tool-bridge-badge');
        if (badge && !badge.hasAttribute('data-i18n')) badge.textContent = pack.badge;
        if (!cta.hasAttribute('data-i18n')) cta.textContent = pack.cta;
        var baseHref = cta.getAttribute('data-bm-base-href');
        if (!baseHref) {
            baseHref = cta.getAttribute('href') || '';
            cta.setAttribute('data-bm-base-href', baseHref);
        }
        if (baseHref && baseHref.indexOf('/portal/tools/') === 0) {
            try {
                var u = new URL(baseHref, window.location.origin);
                if (loc && loc !== 'en') u.searchParams.set('lang', loc);
                else u.searchParams.delete('lang');
                cta.setAttribute('href', u.pathname + u.search + u.hash);
            } catch (e) {}
        }
    }

    function initToolBridge() {
        var bridge = document.querySelector('.bm-tool-bridge[data-bm-tool-bridge="1"]');
        if (!bridge) return;
        var kind = bridge.getAttribute('data-tool-slug') || bridge.getAttribute('data-bm-bridge-kind') || 'wellness';
        var cta = bridge.querySelector('a.bm-tool-bridge-cta');

        syncBridgeLocale(bridge, cta);
        if (typeof window.MutationObserver === 'function') {
            var bridgeLangObs = new window.MutationObserver(function() {
                langMutated = true;
                syncBridgeLocale(bridge, cta);
            });
            bridgeLangObs.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        }

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
        zh: { skip: '跳至工具', back: '← 心理健康实验室', langLabel: '语言：', chip3: '100% 本地隐私', step1Sub: '所有输入与评分 100% 仅保存在本地浏览器中。', ctaBtn: '生成我的专属缓解方案', buildBtn: '生成我的专属回应脚本与方案', resetBtn: '重置', resultBadge: '第 2 步 • 你的专属行动方案', meterLabel: '当前身心平衡指数', stepsTitle: '3 个立即可行的舒缓步骤', scriptTitle: '可直接使用的温和回应脚本', noteTitle: '我的私人锚点笔记', storyBtn: '保存 1080×1920 总结卡 (PNG)', copyBtn: '复制内容', shareBtn: '分享工具', faqTitle: '常见问题', refTitle: '心理学框架与参考文献', discTitle: '自我觉察说明：', discText: '本互动工具仅供日常自我觉察与科普参考，不构成临床诊断或医疗建议。', privacy: '隐私政策', terms: '使用条款' },
        ja: { skip: 'ツールへ移動', back: '← ウェルネスラボ', langLabel: '言語：', chip3: '100% ローカル完結', step1Sub: '入力内容と評価は 100% ブラウザ内にのみ保存されます。', ctaBtn: 'あなた専用のリセットプランを作成', buildBtn: '専用スクリプトと行動プランを作成', resetBtn: 'リセット', resultBadge: 'ステップ 2 • あなた専用のアクションプラン', meterLabel: '現在のバランス指標', stepsTitle: '今すぐ試せる 3 つの実践ステップ', scriptTitle: 'そのまま使える落ち着いたフレーズ', noteTitle: 'マイ・プライベートメモ', storyBtn: '1080×1920 要約カードを保存 (PNG)', copyBtn: 'コピー', shareBtn: 'ツールを共有', faqTitle: 'よくある質問', refTitle: '心理学的フレームワークと参考文献', discTitle: 'セルフケアに関するご案内：', discText: '本ツールは日常のセルフチェック用であり、医学的診断や治療に代わるものではありません。', privacy: 'プライバシーポリシー', terms: '利用規約' },
        es: { skip: 'Ir a la herramienta', back: '← Laboratorio de Bienestar', langLabel: 'Idioma:', chip3: '100% Privado (Local)', step1Sub: 'Tus respuestas permanecen 100% privadas en tu navegador.', ctaBtn: 'Generar mi plan personalizado', buildBtn: 'Generar mi guion y plan', resetBtn: 'Reiniciar', resultBadge: 'PASO 2 • TU PLAN DE ACCIÓN PERSONALIZADO', meterLabel: 'Índice actual de equilibrio', stepsTitle: '3 pasos prácticos inmediatos', scriptTitle: 'Guion sereno listo para usar', noteTitle: 'Mi nota personal de anclaje', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar texto', shareBtn: 'Compartir', faqTitle: 'Preguntas Frecuentes', refTitle: 'Marcos Psicológicos y Referencias', discTitle: 'Aviso de autorreflexión:', discText: 'Esta herramienta interactiva es un recurso educativo de autorreflexión, no un diagnóstico clínico ni tratamiento médico.', privacy: 'Política de Privacidad', terms: 'Términos' },
        pt: { skip: 'Ir para a ferramenta', back: '← Laboratório de Bem-Estar', langLabel: 'Idioma:', chip3: '100% Privado (Local)', step1Sub: 'Suas respostas permanecem 100% locais no seu navegador.', ctaBtn: 'Gerar meu plano personalizado', buildBtn: 'Gerar meu roteiro e plano', resetBtn: 'Redefinir', resultBadge: 'PASSO 2 • SEU PLANO DE AÇÃO PERSONALIZADO', meterLabel: 'Índice atual de equilíbrio', stepsTitle: '3 passos práticos imediatos', scriptTitle: 'Roteiro calmo pronto para usar', noteTitle: 'Minha nota pessoal de apoio', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar texto', shareBtn: 'Compartilhar', faqTitle: 'Perguntas Frequentes', refTitle: 'Referências Psicológicas', discTitle: 'Aviso de autorreflexão:', discText: 'Esta ferramenta interativa é um recurso educativo de autorreflexão, não diagnóstico clínico nem tratamento médico.', privacy: 'Privacidade', terms: 'Termos' },
        de: { skip: 'Zum Tool springen', back: '← Mental-Wellness-Labor', langLabel: 'Sprache:', chip3: '100% Privat (Lokal)', step1Sub: 'Deine Angaben bleiben zu 100% lokal in deinem Browser.', ctaBtn: 'Meinen persönlichen Reset-Plan erstellen', buildBtn: 'Persönliches Skript & Plan erstellen', resetBtn: 'Zurücksetzen', resultBadge: 'SCHRITT 2 • DEIN PERSÖNLICHER AKTIONSPLAN', meterLabel: 'Aktueller Stabilitäts-Index', stepsTitle: '3 sofort umsetzbare Schritte', scriptTitle: 'Ruhiges Gesprächsskript zum Kopieren', noteTitle: 'Meine persönliche Anker-Notiz', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Tool teilen', faqTitle: 'Häufig gestellte Fragen', refTitle: 'Psychologische Grundlagen & Quellen', discTitle: 'Hinweis zur Selbstreflexion:', discText: 'Dieses interaktive Tool dient der eigenen Reflexion im Alltag und ersetzt keine klinische Diagnose oder Therapie.', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
        fr: { skip: 'Aller à l’outil', back: '← Labo Bien-Être Mental', langLabel: 'Langue :', chip3: '100% Privé (Local)', step1Sub: 'Vos réponses restent 100% locales dans votre navigateur.', ctaBtn: 'Générer mon plan personnalisé', buildBtn: 'Générer mon script et mon plan', resetBtn: 'Réinitialiser', resultBadge: 'ÉTAPE 2 • VOTRE PLAN D’ACTION PERSONNALISÉ', meterLabel: 'Indice actuel d’équilibre', stepsTitle: '3 gestes pratiques immédiats', scriptTitle: 'Script apaisé prêt à l’emploi', noteTitle: 'Ma note d’ancrage privée', storyBtn: 'Enregistrer la carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', faqTitle: 'Questions Fréquentes', refTitle: 'Cadres Psychologiques et Références', discTitle: 'Note d’auto-réflexion :', discText: 'Cet espace interactif est un outil éducatif de réflexion personnelle, et non un diagnostic clinique ou traitement médical.', privacy: 'Confidentialité', terms: 'Conditions' },
        id: { skip: 'Lompat ke Alat', back: '← Lab Kesehatan Mental', langLabel: 'Bahasa:', chip3: '100% Privat (Lokal)', step1Sub: 'Jawaban Anda tetap 100% privat di browser Anda.', ctaBtn: 'Buat Rencana Pemulihan Saya', buildBtn: 'Buat Skrip & Rencana Saya', resetBtn: 'Atur Ulang', resultBadge: 'LANGKAH 2 • RENCANA AKSI PRIBADI ANDA', meterLabel: 'Indeks Keseimbangan Saat Ini', stepsTitle: '3 Langkah Praktis Segera', scriptTitle: 'Skrip Komunikasi Tenang Siap Pakai', noteTitle: 'Catatan Pribadi Saya', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin Teks', shareBtn: 'Bagikan', faqTitle: 'Pertanyaan Umum', refTitle: 'Kerangka Psikologi & Referensi', discTitle: 'Catatan refleksi diri:', discText: 'Alat interaktif ini adalah sarana refleksi diri edukatif, bukan diagnosis klinis atau perawatan medis.', privacy: 'Kebijakan Privasi', terms: 'Ketentuan' },
        tr: { skip: 'Araca Geç', back: '← Zihinsel Sağlık Labı', langLabel: 'Dil:', chip3: '%100 Gizli (Yerel)', step1Sub: 'Yanıtlarınız %100 tarayıcınızda yerel olarak kalır.', ctaBtn: 'Kişisel Sıfırlama Planımı Oluştur', buildBtn: 'Kişisel Metin ve Planımı Oluştur', resetBtn: 'Sıfırla', resultBadge: 'ADIM 2 • KİŞİSEL EYLEM PLANINIZ', meterLabel: 'Güncel Denge İndeksi', stepsTitle: 'Hemen Uygulanabilir 3 Adım', scriptTitle: 'Kullanıma Hazır Sakin İfade', noteTitle: 'Kişisel Çapa Notum', storyBtn: '1080×1920 Özet Kartını Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', faqTitle: 'Sık Sorulan Sorular', refTitle: 'Psikolojik Çerçeveler ve Kaynaklar', discTitle: 'Öz-yansıtma uyarısı:', discText: 'Bu etkileşimli alan günlük farkındalık içindir; klinik tanı veya tıbbi tedavi yerine geçmez.', privacy: 'Gizlilik Politikası', terms: 'Koşullar' },
        hi: { skip: 'टूल पर जाएँ', back: '← मेंटल वेलनेस लैब', langLabel: 'भाषा:', chip3: '100% निजी (लोकल)', step1Sub: 'आपके उत्तर 100% आपके ब्राउज़र में निजी रहते हैं।', ctaBtn: 'मेरा पर्सनल रीसेट प्लान बनाएं', buildBtn: 'मेरा स्क्रिप्ट और प्लान बनाएं', resetBtn: 'रीसेट करें', resultBadge: 'चरण 2 • आपका पर्सनल एक्शन प्लान', meterLabel: 'वर्तमान संतुलन सूचकांक', stepsTitle: 'तुरंत करने योग्य 3 व्यावहारिक कदम', scriptTitle: 'उपयोग के लिए तैयार शांत संवाद', noteTitle: 'मेरा निजी नोट', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न', refTitle: 'मनोवैज्ञानिक संदर्भ', discTitle: 'आत्म-चिंतन सूचना:', discText: 'यह इंटरैक्टिव टूल केवल शैक्षिक आत्म-चिंतन के लिए है, यह चिकित्सीय निदान या उपचार नहीं है।', privacy: 'गोपनीयता नीति', terms: 'शर्तें' },
        ru: { skip: 'Перейти к инструменту', back: '← Лаборатория здоровья', langLabel: 'Язык:', chip3: '100% Приватно (Локально)', step1Sub: 'Все ваши ответы остаются на 100% локально в браузере.', ctaBtn: 'Создать персональный план', buildBtn: 'Создать фразу и план действий', resetBtn: 'Сбросить', resultBadge: 'ШАГ 2 • ВАШ ПЕРСОНАЛЬНЫЙ ПЛАН ДЕЙСТВИЙ', meterLabel: 'Текущий индекс баланса', stepsTitle: '3 практических шага прямо сейчас', scriptTitle: 'Готовая спокойная фраза', noteTitle: 'Моя личная заметка', storyBtn: 'Сохранить карточку 1080×1920 (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', faqTitle: 'Частые вопросы', refTitle: 'Психологические основы и источники', discTitle: 'Примечание о самопомощи:', discText: 'Этот интерактивный инструмент предназначен для личной рефлексии и не заменяет клиническую диагностику или терапию.', privacy: 'Конфиденциальность', terms: 'Условия' }
    };

    var EN_CHROME_RE = /^(?:Skip to|←\s*(?:Mental Wellness Lab|Wellness Lab|Tools Catalog|All \d+ Tools)|Language:|100% Private|Reset|Clear All|Save 1080|Copy |Share |Frequently Asked Questions|Psychological Frameworks|Editorial Self-Reflection|This interactive workspace|Privacy Policy|Terms)/i;
    var EN_WORK_RE = /\b(?:your|my|the|stays?|browser|device|uploaded|tracked|step\s*[123]|moves|steps|build|generate|calculate|decode|filter|cool\s+down|run\s+safety|rate\s+each|slide\s+|tap\s+every|choose\s+the|pick\s+a|select\s+the|today['’]?s?|grounded|permission|reframe|anchor|protecting|margin|reserve|capacity|freedom|stability|statement|boundary|guilt-free|self-soothing|ready-to-send|zero-pressure|gentle|unfair|honest|present-time|present-room|prefrontal|autonomy|reconnection|emotional|nervous\s+system|friction|blueprint|toolkit)\b/i;
    var WORK_KEYS = { step1Sub: 1, resultBadge: 1, stepsTitle: 1, scriptTitle: 1, noteTitle: 1, meterLabel: 1, ctaBtn: 1, buildBtn: 1 };
    var EN_LEAD_RE = /\b(?:your|locally|browser|private|seconds|minutes|generate|check|rate|identify|calm|build|spot|stop|track|feeling|tired|stuck|find|turn|decode|audit|separate|measure|distinguish|free|anxiety|burnout|stress|boundaries|anger|guilt|loneliness|sunday|monday|pause|reset|plan|script|overwhelm|nervous|emotion|energy|sleep|focus|trigger)\b/i;
    var leadsCache = null;
    var leadsPromise = null;

    function getToolSlug() {
        var m = /^\/portal\/tools\/([a-z0-9-]+)\.html$/i.exec(window.location.pathname || '');
        if (!m || m[1] === 'index' || m[1] === 'wellness-lab') return '';
        return m[1].toLowerCase();
    }

    var NEXT_CHAIN_I18N = {
        en: { kicker: 'CONTINUE YOUR RESET', title: 'Recommended Next 2-Min Labs', open: 'Open Lab →' },
        ko: { kicker: '다음 2분 회복 루틴', title: '이어서 해보면 좋은 맞춤 웰니스 랩', open: '열기 →' },
        zh: { kicker: '继续你的 2 分钟修复', title: '推荐下一步互动心理实验室', open: '打开工具 →' },
        ja: { kicker: '次の2分セルフケア', title: '続けて試したいおすすめラボ', open: '開く →' },
        es: { kicker: 'CONTINÚA TU RESET', title: 'Siguientes Laboratorios Recomendados', open: 'Abrir →' },
        pt: { kicker: 'CONTINUE SEU RESET', title: 'Próximos Laboratórios Recomendados', open: 'Abrir →' },
        de: { kicker: 'WEITERMACHEN (2 MIN.)', title: 'Empfohlene nächste Wellness-Labs', open: 'Öffnen →' },
        fr: { kicker: 'CONTINUER VOTRE RESET', title: 'Prochains Labos Recommandés', open: 'Ouvrir →' },
        id: { kicker: 'LANJUTKAN PEMULIHAN', title: 'Lab Rekomendasi Berikutnya', open: 'Buka →' },
        tr: { kicker: 'SIFIRLAMAYA DEVAM ET', title: 'Önerilen Sonraki 2 Dk Lablar', open: 'Aç →' },
        hi: { kicker: 'अगला 2-मिनट कदम', title: 'अनुशंसित अगले वेलनेस लैब', open: 'खोलें →' },
        ru: { kicker: 'ПРОДОЛЖИТЬ ПРАКТИКУ', title: 'Рекомендуемые следующие практики', open: 'Открыть →' }
    };

    function injectNextChainStyles() {
        if (document.getElementById('dbNextChainStyles')) return;
        var st = document.createElement('style');
        st.id = 'dbNextChainStyles';
        st.textContent = [
            '.db-next-chain{margin:18px 0 0;padding:16px;border-radius:16px;border:1px solid rgba(129,140,248,0.28);background:rgba(15,23,42,0.58);box-sizing:border-box;max-width:100%;overflow:hidden}',
            '.db-next-kicker{font-size:0.72rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#a5b4fc;margin:0 0 4px}',
            '.db-next-title{font-size:0.98rem;font-weight:800;color:#f8fafc;margin:0 0 12px;line-height:1.35}',
            '.db-next-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}',
            '.db-next-card{display:flex;flex-direction:column;justify-content:space-between;gap:6px;min-height:44px;padding:12px 14px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.035);color:#f8fafc;text-decoration:none;box-sizing:border-box;transition:border-color 0.16s ease,background 0.16s ease}',
            '.db-next-card:hover{border-color:rgba(45,212,191,0.55);background:rgba(20,184,166,0.09)}',
            '.db-next-card strong{font-size:0.88rem;line-height:1.35;color:#f8fafc}',
            '.db-next-card span{font-size:0.78rem;line-height:1.4;color:#94a3b8}',
            '.db-next-cta{font-size:0.78rem;font-weight:700;color:#2dd4bf;margin-top:2px}'
        ].join('');
        document.head.appendChild(st);
    }

    function renderNextLabChain(data, slug, loc) {
        var resultCard = document.getElementById('resultCard');
        if (!resultCard || !data || !data[slug]) return;
        var curCat = data[slug].cat;
        if (!curCat) return;
        var siblings = [];
        var keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (data[k] && data[k].cat === curCat) siblings.push(k);
        }
        var idx = siblings.indexOf(slug);
        if (idx === -1 || siblings.length < 2) return;
        var picks = [];
        for (var step = 1; step <= Math.min(3, siblings.length - 1); step++) {
            picks.push(siblings[(idx + step) % siblings.length]);
        }

        injectNextChainStyles();
        var wrap = document.getElementById('nextLabChain');
        if (!wrap) {
            wrap = document.createElement('section');
            wrap.id = 'nextLabChain';
            wrap.className = 'db-next-chain';
            wrap.setAttribute('data-bm-next-chain', '1');
            resultCard.appendChild(wrap);
        }
        var hdr = NEXT_CHAIN_I18N[loc] || NEXT_CHAIN_I18N.en;
        wrap.setAttribute('aria-label', hdr.title);
        wrap.textContent = '';

        var kEl = document.createElement('p');
        kEl.className = 'db-next-kicker';
        kEl.textContent = hdr.kicker;
        var tEl = document.createElement('h3');
        tEl.className = 'db-next-title';
        tEl.textContent = hdr.title;
        var grid = document.createElement('div');
        grid.className = 'db-next-grid';

        for (var p = 0; p < picks.length; p++) {
            var toSlug = picks[p];
            var entry = data[toSlug];
            var pair = Array.isArray(entry[loc]) ? entry[loc] : (Array.isArray(entry.en) ? entry.en : [toSlug, '']);
            var a = document.createElement('a');
            a.className = 'db-next-card';
            a.href = loc === 'en' ? ('/portal/tools/' + toSlug + '.html') : ('/portal/tools/' + toSlug + '.html?lang=' + loc);
            a.setAttribute('data-chain-slug', toSlug);
            var stEl = document.createElement('strong');
            stEl.textContent = (entry.emoji ? entry.emoji + ' ' : '') + pair[0];
            var spEl = document.createElement('span');
            spEl.textContent = pair[1] || '';
            var ctaEl = document.createElement('div');
            ctaEl.className = 'db-next-cta';
            ctaEl.textContent = hdr.open;
            a.appendChild(stEl);
            a.appendChild(spEl);
            a.appendChild(ctaEl);
            (function(targetSlug) {
                a.addEventListener('click', function() {
                    sendEvent('wellness_tool_chain_click', {
                        event_category: 'engagement',
                        from_slug: slug,
                        to_slug: targetSlug,
                        category: curCat
                    });
                });
            })(toSlug);
            grid.appendChild(a);
        }

        wrap.appendChild(kEl);
        wrap.appendChild(tEl);
        wrap.appendChild(grid);
    }

    function applyToolLeads(slug, loc) {
        if (!slug) return;
        function apply(data) {
            if (!data || !data[slug]) return;
            if (getLocale() !== loc) return;
            var raw = data[slug][loc];
            var titleText = Array.isArray(raw) ? raw[0] : '';
            var leadText = Array.isArray(raw) ? raw[1] : (typeof raw === 'string' ? raw : '');

            if (TOOL_CHROME_I18N[loc]) {
                if (titleText) {
                    var h1El = document.querySelector('[data-i18n="heroTitle"]');
                    if (h1El && /^[A-Za-z0-9\s&().,:'’–—/-]+$/.test((h1El.textContent || '').trim())) {
                        h1El.textContent = titleText;
                    }
                    if (/^[A-Za-z0-9\s&().,:'’–—|/+-]+$/.test((document.title || '').trim())) {
                        document.title = titleText + ' | DopaBrain';
                    }
                }
                if (leadText) {
                    var leadEl = document.querySelector('[data-i18n="heroLead"]');
                    if (leadEl && EN_LEAD_RE.test((leadEl.textContent || '').trim())) {
                        leadEl.textContent = leadText;
                    }
                    var metaEl = document.querySelector('meta[name="description"]');
                    if (metaEl && EN_LEAD_RE.test((metaEl.getAttribute('content') || '').trim())) {
                        metaEl.setAttribute('content', leadText);
                    }
                }
            }
            renderNextLabChain(data, slug, loc);
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
            if (pack) {
                var els = document.querySelectorAll('[data-i18n]');
                for (var i = 0; i < els.length; i++) {
                    var el = els[i];
                    var key = el.getAttribute('data-i18n');
                    if (!pack[key] || el.tagName === 'META') continue;
                    var cur = (el.textContent || '').trim();
                    if (EN_CHROME_RE.test(cur) || (WORK_KEYS[key] && EN_WORK_RE.test(cur))) {
                        el.textContent = pack[key];
                    }
                }
            }
            applyToolLeads(slug, loc);
        }
        applyChrome();
        window.setTimeout(applyChrome, 50);
        if (typeof window.MutationObserver === 'function') {
            var obs = new window.MutationObserver(function() {
                window.setTimeout(applyChrome, 0);
            });
            obs.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
        }
    }

    function initToolCalmPacer() {
        var slug = getToolSlug();
        if (!slug || !document.getElementById('resultCard')) return;
        if (document.querySelector('script[src*="/portal/js/tool-calm-pacer.js"]')) return;
        var sc = document.createElement('script');
        sc.src = '/portal/js/tool-calm-pacer.js';
        sc.defer = true;
        document.body.appendChild(sc);
    }

    var MID_JUMP_I18N = {
        en: { kicker: 'FREE INTERACTIVE COMPANION', lab: '70 Free Labs →' },
        ko: { kicker: '무료 인터랙티브 실습 도구', lab: '70개 무료 랩 →' },
        zh: { kicker: '免费互动配套工具', lab: '70个免费工具 →' },
        ja: { kicker: '無料インタラクティブツール', lab: '無料70ラボ →' },
        es: { kicker: 'HERRAMIENTA INTERACTIVA GRATIS', lab: '70 Labos Gratis →' },
        pt: { kicker: 'FERRAMENTA INTERATIVA GRÁTIS', lab: '70 Labos Grátis →' },
        de: { kicker: 'KOSTENLOSES INTERAKTIVES TOOL', lab: '70 Gratis-Labs →' },
        fr: { kicker: 'OUTIL INTERACTIF GRATUIT', lab: '70 Labos Gratuits →' },
        id: { kicker: 'ALAT INTERAKTIF GRATIS', lab: '70 Lab Gratis →' },
        tr: { kicker: 'ÜCRETSİZ ETKİLEŞİMLİ ARAÇ', lab: '70 Ücretsiz Lab →' },
        hi: { kicker: 'मुफ़्त इंटरैक्टिव टूल', lab: '70 मुफ़्त लैब →' },
        ru: { kicker: 'БЕСПЛАТНЫЙ ИНТЕРАКТИВНЫЙ ИНСТРУМЕНТ', lab: '70 практик →' }
    };

    function initMidArticleToolJump() {
        if (!/^\/portal\/blog\//i.test(window.location.pathname || '')) return;
        if (document.querySelector('[data-bm-mid-jump="1"]')) return;
        var bridge = document.querySelector('.bm-tool-bridge[data-bm-tool-bridge="1"]');
        if (!bridge) return;
        var cta = bridge.querySelector('a.bm-tool-bridge-cta');
        var h3 = bridge.querySelector('h3');
        if (!cta || !h3) return;
        var href = cta.getAttribute('href') || '';
        if (!href) return;

        var container = document.querySelector('article') || document.querySelector('main') || bridge.parentNode;
        if (!container) return;
        var headings = container.querySelectorAll('h2');
        if (!headings || headings.length < 3) return;
        var anchorH2 = headings[1];
        if (!anchorH2 || !anchorH2.parentNode) return;
        // Skip if the bottom bridge is already above anchorH2
        if (!(anchorH2.compareDocumentPosition(bridge) & 4)) return;

        var loc = getLocale();
        var pack = MID_JUMP_I18N[loc] || MID_JUMP_I18N.en;
        var kind = bridge.getAttribute('data-tool-slug') || bridge.getAttribute('data-bm-bridge-kind') || 'wellness';
        var labHref = loc === 'en' ? '/portal/tools/wellness-lab.html' : ('/portal/tools/wellness-lab.html?lang=' + loc);

        var bar = document.createElement('aside');
        bar.id = 'bmMidJump';
        bar.className = 'bm-mid-jump';
        bar.setAttribute('data-bm-mid-jump', '1');
        bar.setAttribute('data-tool-slug', kind);
        bar.setAttribute('aria-label', (h3.textContent || '').trim());

        var copy = document.createElement('div');
        copy.className = 'bm-mid-jump-copy';
        var kicker = document.createElement('span');
        kicker.className = 'bm-mid-jump-kicker';
        kicker.textContent = pack.kicker;
        var title = document.createElement('strong');
        title.className = 'bm-mid-jump-title';
        title.textContent = (h3.textContent || '').trim();
        copy.appendChild(kicker);
        copy.appendChild(title);

        var actions = document.createElement('div');
        actions.className = 'bm-mid-jump-actions';
        var primary = document.createElement('a');
        primary.className = 'bm-mid-jump-cta';
        primary.href = href;
        primary.textContent = (cta.textContent || '').trim() || 'Open Tool →';
        primary.addEventListener('click', function() {
            sendEvent('blog_mid_tool_cta_click', {
                event_category: 'engagement',
                bridge_kind: kind,
                surface: 'blog_mid_jump',
                link_url: href
            });
        });

        var secondary = document.createElement('a');
        secondary.className = 'bm-mid-jump-lab';
        secondary.href = labHref;
        secondary.textContent = pack.lab;
        secondary.addEventListener('click', function() {
            sendEvent('blog_mid_tool_cta_click', {
                event_category: 'engagement',
                bridge_kind: 'wellness-lab',
                surface: 'blog_mid_jump',
                link_url: labHref
            });
        });

        actions.appendChild(primary);
        actions.appendChild(secondary);
        bar.appendChild(copy);
        bar.appendChild(actions);

        anchorH2.parentNode.insertBefore(bar, anchorH2);

        observeHalfVisible(bar, function() {
            sendEvent('blog_mid_tool_cta_view', {
                event_category: 'engagement',
                bridge_kind: kind,
                surface: 'blog_mid_jump'
            });
        });
    }

    function boot() {
        initCuratedCard();
        initStickyCta();
        initQuickCheck();
        initToolBridge();
        initMidArticleToolJump();
        initToolChromeI18n();
        initToolCalmPacer();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot, { once: true });
    } else {
        boot();
    }
})();
