(function () {
  var typeMatch = location.pathname.match(/\/portal\/mbti\/([a-z]{4})\.html$/);
  if (!typeMatch) return;

  var mbtiType = typeMatch[1].toUpperCase();
  var hero = document.querySelector('.hero');
  var heroTags = document.querySelector('.hero-tags');
  if (!hero || !heroTags || document.querySelector('.type-action-rail')) return;

  var currentLang = new URLSearchParams(location.search).get('lang') || 'en';
  var safeLang = /^(ko|en|zh|hi|ru|ja|es|pt|id|tr|de|fr)$/.test(currentLang) ? currentLang : 'en';

  function track(name, params) {
    if (typeof gtag !== 'function') return;
    gtag('event', name, Object.assign({
      content_group: 'mbti_type',
      mbti_type: mbtiType,
      page_path: location.pathname
    }, params || {}));
  }

  var heroStrip = document.createElement('div');
  heroStrip.className = 'type-hero-strip';
  heroStrip.setAttribute('aria-label', mbtiType + ' fast actions');
  heroStrip.innerHTML = [
    '<a href="/attachment-style/?lang=' + safeLang + '&start=1&source=mbti_hero_strip" data-hero-action="love_match">Attachment style</a>',
    '<a href="/future-self/?lang=' + safeLang + '&start=1&source=mbti_hero_strip" data-hero-action="career_fit">Future path</a>',
    '<a href="/portal/mbti/" data-hero-action="all_types">All 16 types</a>'
  ].join('');
  heroTags.insertAdjacentElement('afterend', heroStrip);

  var rail = document.createElement('section');
  rail.className = 'type-action-rail';
  rail.setAttribute('aria-label', mbtiType + ' next steps');
  rail.innerHTML = [
    '<div class="type-action-kicker">Next step for ' + mbtiType + '</div>',
    '<h2 class="type-action-title">Turn this type profile into a real answer</h2>',
    '<div class="type-action-grid">',
    '<a class="type-action-link primary" href="/attachment-style/?lang=' + safeLang + '&start=1&source=mbti_action_rail" data-type-action="love_match">',
    '<span class="type-action-label">Check attachment style</span>',
    '<span class="type-action-copy">See how your type connects, clashes, and communicates in relationships.</span>',
    '</a>',
    '<a class="type-action-link" href="/future-self/?lang=' + safeLang + '&start=1&source=mbti_action_rail" data-type-action="career_fit">',
    '<span class="type-action-label">Explore future path</span>',
    '<span class="type-action-copy">Map your strengths to roles, work style, and better daily energy.</span>',
    '</a>',
    '<a class="type-action-link" href="/portal/mbti/" data-type-action="compatibility_chart">',
    '<span class="type-action-label">Compare all types</span>',
    '<span class="type-action-copy">Jump to the full MBTI chart and scan your best-fit pairings.</span>',
    '</a>',
    '</div>'
  ].join('');
  hero.insertAdjacentElement('afterend', rail);

  track('mbti_type_view', { surface: 'type_page' });
  track('mbti_type_hero_strip_view', { surface: 'hero_fast_actions' });

  heroStrip.querySelectorAll('[data-hero-action]').forEach(function (link) {
    link.addEventListener('click', function () {
      track('mbti_type_hero_click', {
        surface: 'hero_fast_actions',
        target_slug: link.dataset.heroAction || '',
        link_url: link.getAttribute('href') || ''
      });
      if (typeof gtag === 'function') {
        gtag('event', 'content_cta_click', {
          event_category: 'engagement',
          page_path: location.pathname,
          target_url: link.getAttribute('href') || '',
          link_id: 'mbti_hero_' + (link.dataset.heroAction || 'link')
        });
      }
    });
  });

  function sendRailView() {
    if (rail.dataset.viewed === '1') return;
    rail.dataset.viewed = '1';
    track('mbti_type_rail_view', { surface: 'top_action_rail' });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      if (entries.some(function (entry) { return entry.isIntersecting; })) {
        sendRailView();
        observer.disconnect();
      }
    }, { threshold: 0.45 });
    observer.observe(rail);
  } else {
    sendRailView();
  }

  rail.querySelectorAll('[data-type-action]').forEach(function (link) {
    link.addEventListener('click', function () {
      track('mbti_type_cta_click', {
        surface: 'top_action_rail',
        target_slug: link.dataset.typeAction || '',
        link_url: link.getAttribute('href') || ''
      });
      if (typeof gtag === 'function') {
        gtag('event', 'content_cta_click', {
          event_category: 'engagement',
          page_path: location.pathname,
          target_url: link.getAttribute('href') || '',
          link_id: 'mbti_rail_' + (link.dataset.typeAction || 'link')
        });
      }
    });
  });

  document.querySelectorAll('.cta-section .cta-btn').forEach(function (link, index) {
    var rawHref = link.getAttribute('href') || '';
    if (rawHref === '/attachment-style/') {
      link.setAttribute('href', '/attachment-style/?lang=' + safeLang + '&start=1&source=mbti_bottom_cta');
    } else if (rawHref === '/animal-personality/') {
      link.setAttribute('href', '/animal-personality/?lang=' + safeLang + '&start=1&source=mbti_bottom_cta');
    }
    link.dataset.typeAction = link.dataset.typeAction || 'bottom_cta_' + (index + 1);
    link.addEventListener('click', function () {
      track('mbti_type_cta_click', {
        surface: 'bottom_cta',
        target_slug: link.dataset.typeAction,
        link_url: link.getAttribute('href') || ''
      });
      if (typeof gtag === 'function') {
        gtag('event', 'content_cta_click', {
          event_category: 'engagement',
          page_path: location.pathname,
          target_url: link.getAttribute('href') || '',
          link_id: 'mbti_bottom_' + (link.dataset.typeAction || 'cta')
        });
      }
    });
  });

  document.querySelectorAll('.type-link').forEach(function (link) {
    link.addEventListener('click', function () {
      track('mbti_type_link_click', {
        surface: 'all_types_nav',
        target_type: (link.textContent || '').trim(),
        link_url: link.getAttribute('href') || ''
      });
    });
  });

  document.querySelectorAll('.compat-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var card = link.closest('.compat-card');
      track('mbti_type_link_click', {
        surface: 'compatibility_card',
        target_type: card ? (card.querySelector('.compat-type') || {}).textContent || '' : '',
        link_url: link.getAttribute('href') || ''
      });
    });
  });

  document.querySelectorAll('.faq-item .faq-q').forEach(function (button) {
    button.addEventListener('click', function () {
      var item = button.closest('.faq-item');
      if (item && item.classList.contains('open') && item.dataset.trackedOpen !== '1') {
        item.dataset.trackedOpen = '1';
        track('mbti_type_faq_open', {
          surface: 'faq',
          question: (button.textContent || '').trim().slice(0, 80)
        });
      }
    });
  });

  // Curated MBTI & Relationship Reading + Interactive Tool Bridge (affiliate compliant, >=44px touch)
  var ctaSection = document.querySelector('.cta-section');
  if (ctaSection && !document.querySelector('.mbti-curated-card')) {
    var styleEl = document.createElement('style');
    styleEl.textContent = [
      '.mbti-curated-card{max-width:860px;margin:28px auto;padding:22px 20px;border-radius:18px;border:1px solid rgba(255,255,255,0.12);background:rgba(15,23,42,0.72);color:#f1f5f9}',
      '.mbti-curated-kicker{font-size:11px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#38bdf8;margin-bottom:6px}',
      '.mbti-curated-title{font-size:1.15rem;font-weight:800;margin-bottom:14px}',
      '.mbti-curated-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}',
      '.mbti-curated-item{display:flex;flex-direction:column;justify-content:space-between;gap:8px;min-height:84px;min-width:0;padding:14px;border-radius:14px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.04);color:#f8fafc;text-decoration:none;word-break:break-word;transition:border-color 0.2s,transform 0.15s}',
      '.mbti-curated-item:hover{border-color:#38bdf8;transform:translateY(-2px)}',
      '.mbti-curated-item strong{font-size:0.95rem;line-height:1.35}',
      '.mbti-curated-item span{font-size:0.82rem;color:#94a3b8;line-height:1.45}',
      '.mbti-curated-pill{display:inline-flex;align-items:center;min-height:44px;font-size:0.84rem;font-weight:700;color:#38bdf8}',
      '.mbti-curated-tools{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}',
      '.mbti-tool-chip{display:inline-flex;align-items:center;justify-content:center;min-height:44px;min-width:44px;padding:10px 16px;border-radius:10px;border:1px solid rgba(56,189,248,0.35);background:rgba(56,189,248,0.1);color:#e0f2fe;font-size:0.86rem;font-weight:700;text-decoration:none}',
      '.mbti-curated-note{font-size:0.78rem;color:#94a3b8;margin-top:12px}',
      '@media(max-width:640px){.mbti-curated-grid{grid-template-columns:minmax(0,1fr)}}'
    ].join('');
    document.head.appendChild(styleEl);

    var isIntrovert = mbtiType.charAt(0) === 'I';
    var clusterTool = (mbtiType.indexOf('NT') !== -1)
      ? { slug: 'perfectionism-loop-decoder', label: 'Perfectionism Loop Decoder →' }
      : (mbtiType.indexOf('NF') !== -1)
        ? { slug: 'people-pleasing-fawn-decoder', label: 'People-Pleasing Decoder →' }
        : (mbtiType.charAt(1) === 'S' && mbtiType.charAt(3) === 'J')
          ? { slug: 'sunday-scaries-week-reset', label: 'Sunday Scaries Reset →' }
          : { slug: 'adhd-focus-friction-audit', label: 'Focus Friction Audit →' };
    var primaryBook = isIntrovert
      ? { id: '0307352153', title: 'Quiet: The Power of Introverts', desc: 'Susan Cain • Thriving with deep focus, recharge rituals, and calm leadership for ' + mbtiType + ' minds.' }
      : { id: '1250179947', title: 'Surrounded by Idiots', desc: 'Thomas Erikson • Decoding behavioral communication styles for expressive ' + mbtiType + ' personalities.' };

    var card = document.createElement('section');
    card.className = 'mbti-curated-card';
    card.setAttribute('data-bm-curated', '1');
    card.setAttribute('data-bm-topic', 'mbti_personality');
    card.setAttribute('aria-label', mbtiType + ' curated books and tools');
    card.innerHTML = [
      '<div class="mbti-curated-kicker">CURATED READING FOR ' + mbtiType + '</div>',
      '<h2 class="mbti-curated-title">Evidence-Based Books &amp; Interactive Tools</h2>',
      '<div class="mbti-curated-grid">',
      '<a class="mbti-curated-item" href="https://www.amazon.com/dp/' + primaryBook.id + '?tag=dopabrain-20" target="_blank" rel="noopener noreferrer nofollow sponsored" data-resource-id="' + primaryBook.id + '">',
      '<strong>' + primaryBook.title + '</strong>',
      '<span>' + primaryBook.desc + '</span>',
      '<span class="mbti-curated-pill">View on Amazon ↗</span>',
      '</a>',
      '<a class="mbti-curated-item" href="https://www.amazon.com/dp/1585429139?tag=dopabrain-20" target="_blank" rel="noopener noreferrer nofollow sponsored" data-resource-id="1585429139">',
      '<strong>Attached: The New Science of Adult Attachment</strong>',
      '<span>Amir Levine &amp; Rachel Heller • Turn ' + mbtiType + ' relationship patterns into secure communication.</span>',
      '<span class="mbti-curated-pill">View on Amazon ↗</span>',
      '</a>',
      '</div>',
      '<div class="mbti-curated-tools">',
      '<a class="mbti-tool-chip" href="/portal/tools/attachment-trigger-decoder.html?lang=' + safeLang + '&source=mbti_curated_tool">Attachment Script Builder →</a>',
      (isIntrovert
        ? '<a class="mbti-tool-chip" href="/portal/tools/social-battery-recharge-planner.html?lang=' + safeLang + '&source=mbti_curated_tool">Social Battery Calculator →</a>'
        : '<a class="mbti-tool-chip" href="/portal/tools/boundary-script-builder.html?lang=' + safeLang + '&source=mbti_curated_tool">Boundary Script Generator →</a>'),
      '<a class="mbti-tool-chip" href="/portal/tools/' + clusterTool.slug + '.html?lang=' + safeLang + '&source=mbti_curated_tool">' + clusterTool.label + '</a>',
      '<a class="mbti-tool-chip" href="/portal/tools/wellness-lab.html?lang=' + safeLang + '&source=mbti_curated_tool">All 80 Mental Wellness Labs →</a>',
      '</div>',
      '<p class="mbti-curated-note">Editorial note: Hand-picked books relevant to ' + mbtiType + ' profiles. Amazon links use affiliate tag dopabrain-20 at no extra cost.</p>'
    ].join('');
    ctaSection.insertAdjacentElement('beforebegin', card);

    var curatedViewed = false;
    function sendCuratedView() {
      if (curatedViewed) return;
      curatedViewed = true;
      track('curated_resource_view', {
        event_category: 'monetization',
        resource_topic: 'mbti_personality',
        surface: 'mbti_type_curated'
      });
    }
    if ('IntersectionObserver' in window) {
      var curObs = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting && e.intersectionRatio >= 0.5; })) {
          curObs.disconnect();
          sendCuratedView();
        }
      }, { threshold: 0.5 });
      curObs.observe(card);
    } else {
      sendCuratedView();
    }

    card.querySelectorAll('a.mbti-curated-item').forEach(function (link, idx) {
      link.addEventListener('click', function () {
        track('curated_resource_click', {
          event_category: 'monetization',
          resource_topic: 'mbti_personality',
          resource_id: link.getAttribute('data-resource-id') || '',
          resource_position: idx + 1,
          surface: 'mbti_type_curated'
        });
      });
    });
  }
})();
