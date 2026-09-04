/**
 * Compatibility adapter used while interactive ad serving is suspended.
 * Existing games may still call init() and showInterstitial(); both remain
 * deterministic and never request, render, or reward an advertisement.
 */
const GameAds = (() => ({
    init() {},

    showInterstitial(options = {}) {
        if (typeof options.onComplete === 'function') options.onComplete();
    },

    isAvailable() {
        return false;
    },

    reset() {}
}))();
