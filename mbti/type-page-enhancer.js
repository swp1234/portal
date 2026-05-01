(function () {
  var typeMatch = location.pathname.match(/\/portal\/mbti\/([a-z]{4})\.html$/);
  if (!typeMatch) return;

  var mbtiType = typeMatch[1].toUpperCase();
  var hero = document.querySelector('.hero');
  var heroTags = document.querySelector('.hero-tags');
  if (!hero || !heroTags || document.querySelector('.type-action-rail')) return;

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
    '<a href="/mbti-love/" data-hero-action="love_match">Love match</a>',
    '<a href="/mbti-career/" data-hero-action="career_fit">Career fit</a>',
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
    '<a class="type-action-link primary" href="/mbti-love/" data-type-action="love_match">',
    '<span class="type-action-label">Check love match</span>',
    '<span class="type-action-copy">See how your type connects, clashes, and communicates in relationships.</span>',
    '</a>',
    '<a class="type-action-link" href="/mbti-career/" data-type-action="career_fit">',
    '<span class="type-action-label">Find career fit</span>',
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
    });
  });

  function injectInlineAd() {
    if (document.querySelector('.type-inline-ad')) return;

    var overview = document.querySelector('.overview-text');
    if (!overview || !overview.parentNode) return;

    var afterNode = overview;
    while (afterNode.nextElementSibling && afterNode.nextElementSibling.classList.contains('overview-text')) {
      afterNode = afterNode.nextElementSibling;
    }

    var ad = document.createElement('aside');
    ad.className = 'type-inline-ad';
    ad.dataset.adSurface = 'after_overview_ad';
    ad.setAttribute('aria-label', 'Sponsored');
    ad.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3600813755953882" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true"></ins>';
    afterNode.insertAdjacentElement('afterend', ad);

    track('mbti_type_ad_impression', {
      surface: 'after_overview_ad',
      ad_slot: 'auto'
    });

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      ad.dataset.adError = '1';
    }
  }

  injectInlineAd();

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
    });
  });

  document.querySelectorAll('.cta-section .cta-btn').forEach(function (link, index) {
    link.dataset.typeAction = link.dataset.typeAction || 'bottom_cta_' + (index + 1);
    link.addEventListener('click', function () {
      track('mbti_type_cta_click', {
        surface: 'bottom_cta',
        target_slug: link.dataset.typeAction,
        link_url: link.getAttribute('href') || ''
      });
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
})();
