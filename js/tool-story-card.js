/**
 * DopaBrain Shared 1080x1920 Viral Story Card Generator (Client-Side HTML5 Canvas)
 * Privacy-first: renders locally in browser; never transmits private scores or text to analytics.
 */
(function (global) {
  'use strict';

  function roundRect(ctx, x, y, w, h, r) {
    var radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
  }

  function wrapText(ctx, text, maxWidth, maxLines) {
    var raw = String(text || '').replace(/\s+/g, ' ').trim();
    if (!raw) return [];
    var hasSpaces = raw.indexOf(' ') !== -1;
    var tokens = hasSpaces ? raw.split(' ') : Array.from(raw);
    var joiner = hasSpaces ? ' ' : '';
    var lines = [];
    var current = '';

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var candidate = current ? current + joiner + token : token;
      if (ctx.measureText(candidate).width <= maxWidth) {
        current = candidate;
      } else {
        if (current) {
          lines.push(current);
          if (maxLines && lines.length >= maxLines) {
            var last = lines[lines.length - 1];
            lines[lines.length - 1] = last.length > 2 ? last.slice(0, -1) + '…' : last + '…';
            return lines;
          }
        }
        // Fallback character split for very long words
        if (ctx.measureText(token).width > maxWidth) {
          var chars = Array.from(token);
          current = '';
          for (var c = 0; c < chars.length; c++) {
            var nextChar = current + chars[c];
            if (ctx.measureText(nextChar).width > maxWidth && current) {
              lines.push(current);
              current = chars[c];
              if (maxLines && lines.length >= maxLines) {
                lines[lines.length - 1] = lines[lines.length - 1].slice(0, -1) + '…';
                return lines;
              }
            } else {
              current = nextChar;
            }
          }
        } else {
          current = token;
        }
      }
    }
    if (current) lines.push(current);
    return maxLines ? lines.slice(0, maxLines) : lines;
  }

  function renderStoryCanvas(config) {
    var opts = config || {};
    var width = 1080;
    var height = 1920;
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    if (!ctx) return null;

    var accent = opts.accent || '#6366f1';
    var accent2 = opts.accent2 || '#10b981';
    var fontStack = '"Outfit", "Noto Sans KR", "Noto Sans JP", "Noto Sans SC", system-ui, -apple-system, sans-serif';

    // 1. Background base + atmospheric radial glows
    var bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#070b14');
    bgGrad.addColorStop(0.5, '#0d1324');
    bgGrad.addColorStop(1, '#060911');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    var glow1 = ctx.createRadialGradient(220, 260, 20, 220, 260, 620);
    glow1.addColorStop(0, accent + '40');
    glow1.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow1;
    ctx.fillRect(0, 0, width, height);

    var glow2 = ctx.createRadialGradient(860, 1520, 20, 860, 1520, 640);
    glow2.addColorStop(0, accent2 + '36');
    glow2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow2;
    ctx.fillRect(0, 0, width, height);

    // 2. Outer glass card frame
    var padX = 72;
    var cardY = 120;
    var cardW = width - padX * 2;
    var cardH = 1640;
    roundRect(ctx, padX, cardY, cardW, cardH, 44);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.78)';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
    ctx.stroke();

    // 3. Top kicker badge
    var badgeText = String(opts.badge || 'DOPABRAIN WELLNESS').toUpperCase();
    ctx.font = '700 28px ' + fontStack;
    var badgeWidth = Math.min(cardW - 120, ctx.measureText(badgeText).width + 72);
    var badgeX = (width - badgeWidth) / 2;
    var badgeY = cardY + 72;
    roundRect(ctx, badgeX, badgeY, badgeWidth, 64, 32);
    ctx.fillStyle = accent + '26';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = accent + '88';
    ctx.stroke();

    ctx.fillStyle = '#f8fafc';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(badgeText, width / 2, badgeY + 33);

    // 4. Emoji / Emblem circle
    var cursorY = badgeY + 130;
    if (opts.emoji) {
      ctx.beginPath();
      ctx.arc(width / 2, cursorY + 46, 56, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.stroke();
      ctx.font = '56px ' + fontStack;
      ctx.fillText(opts.emoji, width / 2, cursorY + 50);
      cursorY += 140;
    }

    // 5. Tool Title + Verdict Title
    var innerW = cardW - 120;
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 32px ' + fontStack;
    ctx.fillText(String(opts.toolName || 'DopaBrain Tool'), width / 2, cursorY);
    cursorY += 66;

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 62px ' + fontStack;
    var titleLines = wrapText(ctx, opts.headline || 'Self-Reflection Snapshot', innerW, 3);
    for (var t = 0; t < titleLines.length; t++) {
      ctx.fillText(titleLines[t], width / 2, cursorY);
      cursorY += 76;
    }

    // 6. Subtitle / Description
    if (opts.subtitle) {
      cursorY += 12;
      ctx.fillStyle = '#cbd5e1';
      ctx.font = '400 33px ' + fontStack;
      var subLines = wrapText(ctx, opts.subtitle, innerW, 3);
      for (var s = 0; s < subLines.length; s++) {
        ctx.fillText(subLines[s], width / 2, cursorY);
        cursorY += 48;
      }
    }

    // 7. Metrics bars panel
    var metrics = Array.isArray(opts.metrics) ? opts.metrics.slice(0, 4) : [];
    if (metrics.length > 0) {
      cursorY += 36;
      var panelX = padX + 56;
      var panelW = cardW - 112;
      var rowH = 112;
      var panelH = metrics.length * rowH + 56;
      roundRect(ctx, panelX, cursorY, panelW, panelH, 28);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.stroke();

      var barY = cursorY + 48;
      var barX = panelX + 40;
      var barW = panelW - 80;
      for (var m = 0; m < metrics.length; m++) {
        var item = metrics[m] || {};
        var pct = Math.max(0, Math.min(100, Number(item.pct) || 0));
        var valueLabel = item.valueText != null ? String(item.valueText) : (Math.round(pct) + '%');

        ctx.textAlign = 'left';
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '600 30px ' + fontStack;
        ctx.fillText(String(item.label || ''), barX, barY);

        ctx.textAlign = 'right';
        ctx.fillStyle = item.color || accent2;
        ctx.font = '800 30px ' + fontStack;
        ctx.fillText(valueLabel, barX + barW, barY);

        roundRect(ctx, barX, barY + 26, barW, 24, 12);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fill();

        if (pct > 0) {
          var fillW = Math.max(24, (barW * pct) / 100);
          roundRect(ctx, barX, barY + 26, fillW, 24, 12);
          var barGrad = ctx.createLinearGradient(barX, 0, barX + fillW, 0);
          barGrad.addColorStop(0, item.color || accent);
          barGrad.addColorStop(1, accent2);
          ctx.fillStyle = barGrad;
          ctx.fill();
        }
        barY += rowH;
      }
      cursorY += panelH + 40;
    }

    // 8. Takeaway / Action callout box
    if (opts.takeaway) {
      var boxX = padX + 56;
      var boxW = cardW - 112;
      var remainingH = Math.min(300, Math.max(180, cardY + cardH - 210 - cursorY));
      if (remainingH >= 150) {
        roundRect(ctx, boxX, cursorY, boxW, remainingH, 28);
        ctx.fillStyle = accent + '1a';
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = accent + '55';
        ctx.stroke();

        ctx.textAlign = 'left';
        ctx.fillStyle = '#f8fafc';
        ctx.font = '700 26px ' + fontStack;
        ctx.fillText(String(opts.takeawayLabel || 'KEY TAKEAWAY').toUpperCase(), boxX + 36, cursorY + 46);

        ctx.fillStyle = '#e2e8f0';
        ctx.font = '500 31px ' + fontStack;
        var qLines = wrapText(ctx, opts.takeaway, boxW - 72, 4);
        var qY = cursorY + 98;
        for (var q = 0; q < qLines.length; q++) {
          ctx.fillText(qLines[q], boxX + 36, qY);
          qY += 44;
        }
      }
    }

    // 9. Footer watermark
    var footerY = cardY + cardH - 120;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(padX + 56, footerY - 36);
    ctx.lineTo(padX + cardW - 56, footerY - 36);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 34px ' + fontStack;
    ctx.fillText('DopaBrain', width / 2, footerY + 12);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 26px ' + fontStack;
    ctx.fillText(String(opts.footerUrl || 'dopabrain.com/portal/tools/'), width / 2, footerY + 56);

    return canvas;
  }

  function downloadStoryCard(config) {
    var opts = config || {};
    var canvas = renderStoryCanvas(opts);
    if (!canvas) return false;

    var slug = String(opts.slug || 'dopabrain-tool').replace(/[^a-z0-9-_]/gi, '-').toLowerCase();
    var filename = slug + '-story-card.png';
    var dataUrl = canvas.toDataURL('image/png');

    var link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (typeof global.gtag === 'function') {
      try {
        global.gtag('event', 'tool_story_card_download', {
          event_category: 'engagement',
          tool_slug: slug,
          content_locale: (document.documentElement.getAttribute('lang') || 'en').slice(0, 2)
        });
      } catch (e) {}
    }
    return true;
  }

  var BTN_LABELS = {
    en: 'Save 1080×1920 Story Card (PNG)',
    ko: '1080×1920 스토리 카드 저장 (PNG)',
    zh: '保存 1080×1920 分享卡片 (PNG)',
    ja: '1080×1920 ストーリーカード保存 (PNG)',
    es: 'Guardar Tarjeta 1080×1920 (PNG)',
    pt: 'Salvar Cartão 1080×1920 (PNG)',
    de: '1080×1920 Story-Karte speichern (PNG)',
    fr: 'Enregistrer Carte 1080×1920 (PNG)',
    ru: 'Сохранить карточку 1080×1920 (PNG)',
    hi: '1080×1920 स्टोरी कार्ड सेव करें (PNG)',
    id: 'Simpan Kartu 1080×1920 (PNG)',
    tr: '1080×1920 Hikaye Kartı Kaydet (PNG)'
  };

  function getText(id) {
    var el = document.getElementById(id);
    return el ? String(el.textContent || '').trim() : '';
  }

  function parsePct(str) {
    var m = String(str || '').match(/(\d+(?:\.\d+)?)/);
    return m ? Math.max(0, Math.min(100, Number(m[1]))) : 0;
  }

  function extractToolPayload(slug) {
    var h1 = (document.querySelector('h1') || {}).textContent || 'DopaBrain Tool';
    var kicker = (document.querySelector('.kicker') || {}).textContent || 'DOPABRAIN WELLNESS';
    var base = {
      slug: slug,
      badge: kicker.trim(),
      toolName: h1.trim(),
      footerUrl: 'dopabrain.com/portal/tools/' + slug + '.html'
    };

    if (slug === 'burnout-stress-differential') {
      var sTxt = getText('stressPctText') || '50%';
      var bTxt = getText('burnoutPctText') || '50%';
      var firstLi = (document.querySelector('#protocolList li') || {}).textContent || '';
      return Object.assign(base, {
        emoji: '🔥',
        accent: '#f43f5e',
        accent2: '#f59e0b',
        headline: getText('verdictTitle') || h1,
        subtitle: getText('verdictDesc'),
        metrics: [
          { label: getText('stressMeterLabel') || 'Stress', pct: parsePct(sTxt), valueText: sTxt, color: '#f59e0b' },
          { label: getText('burnoutMeterLabel') || 'Burnout', pct: parsePct(bTxt), valueText: bTxt, color: '#f43f5e' }
        ],
        takeawayLabel: 'NEXT PROTOCOL',
        takeaway: firstLi.trim()
      });
    }
    if (slug === 'cognitive-load-calculator') {
      var ram = getText('mRamVal') || getText('ramText') || '60%';
      var firstCog = (document.querySelector('#protocolList li') || {}).textContent || '';
      return Object.assign(base, {
        emoji: '🧠',
        accent: '#8b5cf6',
        accent2: '#06b6d4',
        headline: getText('verdictTitle') || h1,
        subtitle: getText('verdictDesc'),
        metrics: [
          { label: 'Mental RAM', pct: parsePct(ram), valueText: ram, color: '#a78bfa' },
          { label: 'Available Headroom', pct: Math.max(0, 100 - parsePct(ram)), valueText: Math.max(0, 100 - parsePct(ram)) + '%', color: '#22d3ee' }
        ],
        takeawayLabel: 'DECOMPRESSION STEP',
        takeaway: firstCog.trim()
      });
    }
    if (slug === 'decision-matrix') {
      var sA = parseFloat(getText('scoreValA')) || 0;
      var sB = parseFloat(getText('scoreValB')) || 0;
      var maxS = Math.max(sA, sB, 1);
      return Object.assign(base, {
        emoji: '⚖️',
        accent: '#10b981',
        accent2: '#3b82f6',
        headline: getText('verdictHeadline') || h1,
        subtitle: getText('verdictSub'),
        metrics: [
          { label: getText('scoreNameA') || 'Option A', pct: Math.round((sA / maxS) * 100), valueText: String(sA), color: '#34d399' },
          { label: getText('scoreNameB') || 'Option B', pct: Math.round((sB / maxS) * 100), valueText: String(sB), color: '#60a5fa' }
        ],
        takeawayLabel: 'DECISION CLARITY',
        takeaway: getText('verdictSub') || h1
      });
    }
    if (slug === 'dopamine-detox-protocol') {
      var cheap = getText('cheapVal') || getText('cheapPct') || '50%';
      var comp = getText('compoundVal') || getText('compoundPct') || '50%';
      return Object.assign(base, {
        emoji: '⚡',
        accent: '#f59e0b',
        accent2: '#10b981',
        headline: getText('verdictTitle') || h1,
        subtitle: getText('verdictDesc'),
        metrics: [
          { label: 'Cheap Stimulation', pct: parsePct(cheap), valueText: cheap, color: '#f59e0b' },
          { label: 'Compound Focus', pct: parsePct(comp), valueText: comp, color: '#10b981' }
        ],
        takeawayLabel: '24H RESET FOCUS',
        takeaway: getText('verdictDesc')
      });
    }
    if (slug === 'grounding-exercise') {
      return Object.assign(base, {
        emoji: '🌊',
        accent: '#06b6d4',
        accent2: '#10b981',
        headline: '5-4-3-2-1 Grounding Complete',
        subtitle: getText('stageDesc') || 'Nervous system anchored back to present sensory cues.',
        metrics: [
          { label: 'Sensory Anchors Logged', pct: 100, valueText: '15 / 15', color: '#38bdf8' },
          { label: 'Autonomic Calm Shift', pct: 95, valueText: 'Restored', color: '#34d399' }
        ],
        takeawayLabel: 'SOMATIC ANCHOR',
        takeaway: 'Two slow inhales + one long cyclic sigh lowers acute heart rate in under 60 seconds.'
      });
    }
    return Object.assign(base, {
      emoji: '✨',
      headline: getText('verdictTitle') || h1,
      subtitle: getText('verdictDesc')
    });
  }

  function autoBind() {
    var btn = document.getElementById('storyCardBtn');
    if (!btn || btn.dataset.storyBound === '1') return;
    btn.dataset.storyBound = '1';
    var slug = btn.getAttribute('data-story-tool') || 'dopabrain-tool';

    function syncLabel() {
      var lang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
      btn.textContent = BTN_LABELS[lang] || BTN_LABELS.en;
    }
    syncLabel();

    if (typeof MutationObserver === 'function') {
      var mo = new MutationObserver(syncLabel);
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }

    btn.addEventListener('click', function () {
      downloadStoryCard(extractToolPayload(slug));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoBind, { once: true });
  } else {
    autoBind();
  }

  global.DopaBrainStoryCard = {
    version: '2026-11-20',
    renderStoryCanvas: renderStoryCanvas,
    downloadStoryCard: downloadStoryCard,
    autoBind: autoBind
  };
})(window);
