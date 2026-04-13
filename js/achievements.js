/**
 * Universal Achievement System
 * Drop-in milestone module for any game.
 *
 * Usage:
 *   1. Load this file from your game page.
 *   2. Initialize the achievement module with a `gameId` and milestone definitions.
 *   3. After each run, send updated stats to the module so it can unlock milestones.
 */
const GameAchievements = (() => {
  let cfg = { gameId: '', defs: [] };
  const KEY = id => `ach_${id}`;
  let toastQueue = [];
  let activeToast = null;
  let toastTimer = 0;
  let toastEl = null;
  const TOAST_MS = 3000;

  function load() {
    try {
      const raw = localStorage.getItem(KEY(cfg.gameId));
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  }

  function save(data) {
    try { localStorage.setItem(KEY(cfg.gameId), JSON.stringify(data)); } catch {}
  }

  function createToastEl() {
    if (toastEl) return;
    toastEl = document.createElement('div');
    toastEl.className = 'ach-toast';
    toastEl.setAttribute('aria-live', 'polite');
    Object.assign(toastEl.style, {
      position: 'fixed', top: '12px', left: '50%', transform: 'translateX(-50%) translateY(-80px)',
      zIndex: '99999', padding: '10px 20px', borderRadius: '12px',
      background: 'rgba(16,185,129,0.95)', color: '#fff', fontFamily: 'system-ui, sans-serif',
      fontSize: '14px', fontWeight: '700', textAlign: 'center',
      boxShadow: '0 4px 20px rgba(16,185,129,0.4)', transition: 'transform 0.4s ease',
      pointerEvents: 'none', whiteSpace: 'nowrap'
    });
    document.body.appendChild(toastEl);
  }

  function showNextToast() {
    if (activeToast || toastQueue.length === 0) return;
    activeToast = toastQueue.shift();
    createToastEl();
    toastEl.textContent = `${activeToast.icon || '\uD83C\uDFC6'} ${activeToast.name || activeToast.id}`;
    toastEl.style.transform = 'translateX(-50%) translateY(0)';
    if (typeof Haptic !== 'undefined') Haptic.success();
    setTimeout(() => {
      toastEl.style.transform = 'translateX(-50%) translateY(-80px)';
      setTimeout(() => { activeToast = null; showNextToast(); }, 400);
    }, TOAST_MS);
  }

  return {
    init(options) {
      cfg = { gameId: options.gameId || '', defs: options.defs || [] };
    },

    report(stats) {
      const unlocked = load();
      const newlyUnlocked = [];
      for (const def of cfg.defs) {
        if (unlocked[def.id]) continue;
        const val = stats[def.stat] || 0;
        if (val >= def.target) {
          unlocked[def.id] = Date.now();
          newlyUnlocked.push(def);
        }
      }
      if (newlyUnlocked.length > 0) {
        save(unlocked);
        toastQueue.push(...newlyUnlocked);
        showNextToast();
      }
      return newlyUnlocked;
    },

    getProgress() {
      const unlocked = load();
      let done = 0;
      for (const def of cfg.defs) {
        if (unlocked[def.id]) done++;
      }
      return { done, total: cfg.defs.length };
    },

    isUnlocked(id) {
      const unlocked = load();
      return !!unlocked[id];
    },

    getAll(stats) {
      const unlocked = load();
      return cfg.defs.map(d => ({
        ...d,
        current: (stats && stats[d.stat]) || 0,
        done: !!unlocked[d.id]
      }));
    }
  };
})();
