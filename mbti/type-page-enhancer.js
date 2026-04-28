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
