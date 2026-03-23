/**
 * Result Card Image Generator
 * Generates a shareable canvas-based result card for quiz/test apps.
 *
 * Usage:
 *   ResultCard.generate({
 *     appName: 'EQ Test',
 *     typeName: 'EQ Master',
 *     typeEmoji: '🧠',
 *     score: '25/30',
 *     dimensions: [
 *       { label: 'Self-Awareness', pct: 85, color: '#4dd0e1' },
 *       { label: 'Empathy', pct: 72, color: '#81c784' },
 *     ],
 *     primaryColor: '#00bcd4',
 *     tagline: 'dopabrain.com/eq-test',
 *   });
 *
 * Returns: Promise<Blob> (PNG image)
 * Also provides ResultCard.download(...) and ResultCard.addButton(container, config)
 */
(function () {
  'use strict';

  const W = 1080, H = 1350; // Instagram story ratio
  const DPR = 1;

  function createCanvas() {
    var c = document.createElement('canvas');
    c.width = W * DPR;
    c.height = H * DPR;
    return c;
  }

  function hexToRgb(hex) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return { r: r, g: g, b: b };
  }

  function drawRoundedRect(ctx, x, y, w, h, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function generate(config) {
    var canvas = createCanvas();
    var ctx = canvas.getContext('2d');
    var pc = config.primaryColor || '#00bcd4';
    var rgb = hexToRgb(pc);

    // Background gradient
    var bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#0a0a0a');
    bgGrad.addColorStop(0.5, '#111111');
    bgGrad.addColorStop(1, '#0a0a0a');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Decorative glow circle top
    var glowGrad = ctx.createRadialGradient(W / 2, 180, 0, W / 2, 180, 400);
    glowGrad.addColorStop(0, 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0.15)');
    glowGrad.addColorStop(1, 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0)');
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, W, 600);

    // App name top
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '600 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(config.appName || 'DopaBrain', W / 2, 80);

    // Emoji
    ctx.font = '120px serif';
    ctx.textAlign = 'center';
    ctx.fillText(config.typeEmoji || '🧠', W / 2, 240);

    // Type name
    ctx.fillStyle = pc;
    ctx.font = '800 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(config.typeName || 'Your Result', W / 2, 340);

    // Score
    if (config.score) {
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.font = '600 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.fillText(config.score, W / 2, 400);
    }

    // Description (optional, max 2 lines)
    if (config.description) {
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = '400 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      var words = config.description.split(' ');
      var lines = [];
      var currentLine = '';
      for (var i = 0; i < words.length; i++) {
        var testLine = currentLine ? currentLine + ' ' + words[i] : words[i];
        if (ctx.measureText(testLine).width > W - 160) {
          lines.push(currentLine);
          currentLine = words[i];
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) lines.push(currentLine);
      lines = lines.slice(0, 2);
      var descY = 450;
      for (var j = 0; j < lines.length; j++) {
        ctx.fillText(lines[j], W / 2, descY + j * 34);
      }
    }

    // Dimension bars
    var dims = config.dimensions || [];
    var barStartY = config.description ? 530 : 470;
    var barX = 100;
    var barW = W - 200;
    var barH = 28;
    var barGap = 72;

    for (var d = 0; d < dims.length; d++) {
      var dim = dims[d];
      var y = barStartY + d * barGap;
      var dimColor = dim.color || pc;
      var dimRgb = hexToRgb(dimColor);

      // Label
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.font = '500 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(dim.label, barX, y);

      // Percentage
      ctx.fillStyle = dimColor;
      ctx.font = '700 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(dim.pct + '%', barX + barW, y);

      // Bar track
      drawRoundedRect(ctx, barX, y + 10, barW, barH, barH / 2);
      ctx.fillStyle = 'rgba(255,255,255,0.08)';
      ctx.fill();

      // Bar fill
      var fillW = Math.max(barH, (dim.pct / 100) * barW);
      drawRoundedRect(ctx, barX, y + 10, fillW, barH, barH / 2);
      var barGr = ctx.createLinearGradient(barX, 0, barX + fillW, 0);
      barGr.addColorStop(0, 'rgba(' + dimRgb.r + ',' + dimRgb.g + ',' + dimRgb.b + ',0.7)');
      barGr.addColorStop(1, dimColor);
      ctx.fillStyle = barGr;
      ctx.fill();
    }

    // Bottom card area
    var cardY = H - 220;

    // Divider line
    ctx.strokeStyle = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(100, cardY);
    ctx.lineTo(W - 100, cardY);
    ctx.stroke();

    // Tagline / URL
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '400 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(config.tagline || 'dopabrain.com', W / 2, cardY + 50);

    // CTA
    drawRoundedRect(ctx, W / 2 - 200, cardY + 80, 400, 64, 32);
    var ctaGrad = ctx.createLinearGradient(W / 2 - 200, 0, W / 2 + 200, 0);
    ctaGrad.addColorStop(0, pc);
    ctaGrad.addColorStop(1, 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',0.8)');
    ctx.fillStyle = ctaGrad;
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = '700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(config.ctaText || 'Take the Test →', W / 2, cardY + 120);

    // Branding
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font = '400 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillText('DopaBrain', W / 2, H - 30);

    return new Promise(function (resolve) {
      canvas.toBlob(function (blob) {
        resolve(blob);
      }, 'image/png');
    });
  }

  function download(config, filename) {
    return generate(config).then(function (blob) {
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename || 'my-result.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'result_card_download', { app: config.appName || 'unknown' });
      }
    });
  }

  function addButton(container, config, options) {
    var opts = options || {};
    var btn = document.createElement('button');
    btn.className = opts.className || 'share-btn';
    btn.textContent = opts.label || '📸 Save Result Card';
    btn.style.cssText = opts.style || '';
    btn.addEventListener('click', function () {
      btn.textContent = '⏳ Generating...';
      btn.disabled = true;
      download(config, opts.filename).then(function () {
        btn.textContent = '✅ Saved!';
        setTimeout(function () {
          btn.textContent = opts.label || '📸 Save Result Card';
          btn.disabled = false;
        }, 2000);
      });
    });
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    if (container) container.appendChild(btn);
    return btn;
  }

  window.ResultCard = {
    generate: generate,
    download: download,
    addButton: addButton
  };
})();
