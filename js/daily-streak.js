/**
 * Universal Daily Streak & Target System
 * Drop-in retention module for any game.
 *
 * Usage:
 *   <script src="/_common/js/daily-streak.js"></script>
 *   DailyStreak.init({ gameId: 'snake-game', bestScoreKey: 'snake_highscore' });
 *   // On game end:
 *   DailyStreak.report(score);
 */
const DailyStreak = (() => {
  let cfg = { gameId: '', bestScoreKey: '', targetRatio: 0.8, unit: '' };
  const KEY = id => `ds_${id}`;

  function getDayNumber() {
    return Math.floor(Date.now() / 86400000);
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY(cfg.gameId));
      if (!raw) return { streak: 0, maxStreak: 0, lastDay: 0, todayBest: 0, targetMet: false };
      return JSON.parse(raw);
    } catch { return { streak: 0, maxStreak: 0, lastDay: 0, todayBest: 0, targetMet: false }; }
  }

  function save(data) {
    try { localStorage.setItem(KEY(cfg.gameId), JSON.stringify(data)); } catch {}
  }

  function getBestScore() {
    return parseInt(localStorage.getItem(cfg.bestScoreKey) || '0', 10);
  }

  function getTarget() {
    const best = getBestScore();
    return Math.max(Math.floor(best * cfg.targetRatio), cfg.minTarget || 5);
  }

  function checkNewDay(data) {
    const today = getDayNumber();
    if (data.lastDay === today) return data;
    if (data.lastDay === today - 1) {
      data.streak++;
    } else if (data.lastDay > 0) {
      data.streak = 1;
    } else {
      data.streak = 1;
    }
    if (data.streak > (data.maxStreak || 0)) data.maxStreak = data.streak;
    data.lastDay = today;
    data.todayBest = 0;
    data.targetMet = false;
    save(data);
    return data;
  }

  function createWidget() {
    const existing = document.getElementById('ds-widget');
    if (existing) existing.remove();

    const data = checkNewDay(load());
    const target = getTarget();

    const div = document.createElement('div');
    div.id = 'ds-widget';
    div.style.cssText = 'position:fixed;top:8px;left:8px;z-index:9990;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:8px 12px;font-family:system-ui,sans-serif;color:#fff;font-size:12px;pointer-events:none;display:flex;gap:10px;align-items:center;transition:opacity 0.3s;';

    const streakSpan = document.createElement('span');
    streakSpan.id = 'ds-streak';
    streakSpan.style.cssText = 'font-size:14px;font-weight:bold;';
    streakSpan.textContent = data.streak > 0 ? `${data.streak}d` : '0d';

    const targetSpan = document.createElement('span');
    targetSpan.id = 'ds-target';
    targetSpan.style.cssText = 'opacity:0.7;';
    const unit = cfg.unit ? ` ${cfg.unit}` : '';
    if (data.targetMet) {
      targetSpan.innerHTML = '<span style="color:#10b981;">&#10003;</span>';
    } else if (target > 0) {
      targetSpan.textContent = `${data.todayBest}/${target}${unit}`;
    }

    div.appendChild(streakSpan);
    div.appendChild(targetSpan);
    document.body.appendChild(div);

    // Auto-hide after 4 seconds
    setTimeout(() => { div.style.opacity = '0.3'; }, 4000);
    div.addEventListener('mouseenter', () => { div.style.opacity = '1'; });
    div.addEventListener('mouseleave', () => { div.style.opacity = '0.3'; });

    return div;
  }

  function updateWidget(data) {
    const streakEl = document.getElementById('ds-streak');
    const targetEl = document.getElementById('ds-target');
    if (!streakEl || !targetEl) return;

    streakEl.textContent = data.streak > 0 ? `${data.streak}d` : '0d';
    const target = getTarget();
    const unit = cfg.unit ? ` ${cfg.unit}` : '';
    if (data.targetMet) {
      targetEl.innerHTML = '<span style="color:#10b981;">&#10003;</span>';
    } else {
      targetEl.textContent = `${data.todayBest}/${target}${unit}`;
    }
  }

  function showTargetClear() {
    // Haptic celebration
    if (typeof Haptic !== 'undefined') Haptic.success();
    const el = document.createElement('div');
    el.textContent = window.i18n?.t('daily.targetClear') || 'DAILY TARGET CLEAR!';
    el.style.cssText = 'position:fixed;top:35%;left:50%;transform:translateX(-50%);font-size:22px;font-weight:bold;color:#10b981;z-index:9999;pointer-events:none;text-shadow:0 0 15px rgba(16,185,129,0.6);opacity:1;transition:all 1.5s ease-out;font-family:system-ui,sans-serif;';
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.style.top = '25%';
      el.style.opacity = '0';
    });
    setTimeout(() => el.remove(), 1800);
  }

  return {
    /**
     * @param {Object} options
     * @param {string} options.gameId - Unique game identifier
     * @param {string} options.bestScoreKey - localStorage key for best score
     * @param {number} [options.targetRatio=0.8] - Daily target = best * ratio
     * @param {number} [options.minTarget=5] - Minimum target value
     * @param {string} [options.unit=''] - Score unit label (e.g. 'pts', 'WPM')
     */
    init(options) {
      Object.assign(cfg, options);
      createWidget();
    },

    /** Call on game end with the score achieved */
    report(score) {
      const data = checkNewDay(load());
      const target = getTarget();
      const wasMet = data.targetMet;

      if (score > data.todayBest) data.todayBest = score;
      if (!data.targetMet && data.todayBest >= target && target > 0) {
        data.targetMet = true;
      }
      save(data);
      updateWidget(data);

      if (!wasMet && data.targetMet) {
        showTargetClear();
        // Flash widget green
        const w = document.getElementById('ds-widget');
        if (w) {
          w.style.opacity = '1';
          w.style.borderColor = '#10b981';
          setTimeout(() => { w.style.borderColor = 'rgba(255,255,255,0.1)'; }, 2000);
        }
      }
    },

    /** Get current streak data (for external use) */
    getData() {
      return checkNewDay(load());
    }
  };
})();
