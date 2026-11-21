/**
 * DopaBrain Shared 12-Language 60-Second Physiological Sigh Calm Pacer
 * Auto-mounts cleanly inside #resultCard on Wellness Lab tools without a native timer.
 * 100% browser-local; emits only categorical start/complete engagement events (zero PII).
 */
(function (global) {
  'use strict';

  var I18N = {
    en: {
      kicker: '60-SECOND NERVOUS SYSTEM RESET',
      title: 'Physiological Sigh Pacer (Double Inhale + Long Exhale)',
      sub: 'Clinically studied double-inhale breathing lowers acute heart rate in 6 calm cycles.',
      ready: 'Ready · Tap Start to begin 60s guided pacing',
      inhale1: 'Inhale gently through your nose…',
      inhale2: 'Short top-up sip of air…',
      exhale: 'Long, slow exhale through your mouth…',
      done: '60s Reset Complete — notice your shoulders softening.',
      start: 'Start 60s Calm Pacer',
      pause: 'Pause',
      resume: 'Resume',
      reset: 'Reset'
    },
    ko: {
      kicker: '60초 자율신경 안정 페이서',
      title: '생리적 한숨 호흡 (두 번 들이쉬고 길게 내쉬기)',
      sub: '짧게 두 번 들이마시고 길게 내쉬는 6회 사이클로 심박수와 긴장을 부드럽게 낮춥니다.',
      ready: '준비됨 · 시작 버튼을 눌러 60초 호흡을 따라가세요',
      inhale1: '코로 천천히 들이마세요…',
      inhale2: '짧게 한 모금 더 들이마세요…',
      exhale: '입으로 길고 부드럽게 내쉬세요…',
      done: '60초 리셋 완료 — 어깨와 턱의 힘이 풀리는 느낌을 확인해 보세요.',
      start: '60초 안정 호흡 시작',
      pause: '일시정지',
      resume: '계속하기',
      reset: '초기화'
    },
    zh: {
      kicker: '60秒神经系统舒缓节拍器',
      title: '生理性叹息呼吸（两次吸气 + 长呼气）',
      sub: '经研究验证的双吸长呼节律，在6个温和循环中快速放慢心率。',
      ready: '已就绪 · 点击开始60秒引导呼吸',
      inhale1: '用鼻子缓慢吸气…',
      inhale2: '再轻吸一小口空气…',
      exhale: '用嘴缓慢而悠长地呼气…',
      done: '60秒重置完成 — 感受双肩渐渐放松。',
      start: '开始60秒舒缓呼吸',
      pause: '暂停',
      resume: '继续',
      reset: '重置'
    },
    ja: {
      kicker: '60秒・自律神経リセットペーサー',
      title: '生理的ため息呼吸（2回吸って長く吐く）',
      sub: '2回吸って長く吐く6サイクルの呼吸で、高ぶった心拍と緊張を穏やかに整えます。',
      ready: '準備完了 · スタートを押して60秒ガイドを開始',
      inhale1: '鼻からゆっくり吸い込んで…',
      inhale2: 'もうひと吸い小さく足して…',
      exhale: '口から長く細く吐き出します…',
      done: '60秒リセット完了 — 肩の力が少し抜けた感覚を確かめてください。',
      start: '60秒呼吸ガイドを開始',
      pause: '一時停止',
      resume: '再開',
      reset: 'リセット'
    },
    es: {
      kicker: 'REINICIO NERVIOSO DE 60 SEGUNDOS',
      title: 'Suspiro Fisiológico Guiado (Doble Inhalación + Exhalación Larga)',
      sub: 'Seis ciclos suaves de doble inhalación ayudan a bajar la activación física rápidamente.',
      ready: 'Listo · Pulsa Iniciar para 60s de respiración guiada',
      inhale1: 'Inhala suave por la nariz…',
      inhale2: 'Un pequeño sorbo extra de aire…',
      exhale: 'Exhala largo y despacio por la boca…',
      done: 'Reinicio de 60s completado — nota cómo se aflojan tus hombros.',
      start: 'Iniciar Pausa de 60s',
      pause: 'Pausar',
      resume: 'Continuar',
      reset: 'Reiniciar'
    },
    pt: {
      kicker: 'RESET DO SISTEMA NERVOSO EM 60s',
      title: 'Suspiro Fisiológico Guiado (Inspiração Dupla + Expiração Longa)',
      sub: 'Seis ciclos calmos de respiração dupla ajudam a reduzir a tensão física em 1 minuto.',
      ready: 'Pronto · Toque em Iniciar para 60s de respiração guiada',
      inhale1: 'Inspire devagar pelo nariz…',
      inhale2: 'Mais um pequeno gole de ar…',
      exhale: 'Expire longo e devagar pela boca…',
      done: 'Reset de 60s concluído — perceba seus ombros relaxando.',
      start: 'Iniciar Guia de 60s',
      pause: 'Pausar',
      resume: 'Retomar',
      reset: 'Redefinir'
    },
    de: {
      kicker: '60-SEKUNDEN-NERVENSYSTEM-RESET',
      title: 'Physiologischer Seufzer (Doppelt einatmen + lang ausatmen)',
      sub: 'Sechs ruhige Zyklen dieser Atemtechnik senken akute körperliche Anspannung spürbar.',
      ready: 'Bereit · Tippe auf Start für 60s geführte Atmung',
      inhale1: 'Ruhig durch die Nase einatmen…',
      inhale2: 'Kurz noch etwas Luft nachziehen…',
      exhale: 'Lang und sanft durch den Mund ausatmen…',
      done: '60s-Reset abgeschlossen — spüre, wie deine Schultern weicher werden.',
      start: '60s Atem-Guide starten',
      pause: 'Pause',
      resume: 'Fortsetzen',
      reset: 'Zurücksetzen'
    },
    fr: {
      kicker: 'RESET NERVEUX DE 60 SECONDES',
      title: 'Soupir Physiologique (Double Inspiration + Longue Expiration)',
      sub: 'Six cycles apaisants de double inspiration aident à ralentir rapidement la tension.',
      ready: 'Prêt · Appuyez sur Démarrer pour 60s de respiration guidée',
      inhale1: 'Inspirez doucement par le nez…',
      inhale2: 'Une petite gorgée d’air en plus…',
      exhale: 'Expirez longuement par la bouche…',
      done: 'Reset de 60s terminé — sentez vos épaules se relâcher.',
      start: 'Démarrer le guide 60s',
      pause: 'Pause',
      resume: 'Reprendre',
      reset: 'Réinitialiser'
    },
    id: {
      kicker: 'RESET SISTEM SARAF 60 DETIK',
      title: 'Napas Desahan Fisiologis (Tarik Ganda + Hembus Panjang)',
      sub: 'Enam siklus pernapasan tenang membantu menurunkan detak jantung dan ketegangan.',
      ready: 'Siap · Ketuk Mulai untuk panduan napas 60 detik',
      inhale1: 'Tarik napas pelan lewat hidung…',
      inhale2: 'Tambah tarikan napas singkat…',
      exhale: 'Hembuskan panjang dan lembut lewat mulut…',
      done: 'Reset 60 detik selesai — rasakan bahu Anda mulai rileks.',
      start: 'Mulai Panduan 60d',
      pause: 'Jeda',
      resume: 'Lanjutkan',
      reset: 'Atur Ulang'
    },
    tr: {
      kicker: '60 SANİYELİK SİNİR SİSTEMİ SIFIRLAMA',
      title: 'Fizyolojik İç Çekme (Çift Nefes Al + Uzun Ver)',
      sub: 'Altı sakin döngüde ani gerginliği ve kalp ritmini doğal olarak yatıştırır.',
      ready: 'Hazır · 60 saniyelik rehber için Başlat’a dokunun',
      inhale1: 'Burundan yavaşça nefes alın…',
      inhale2: 'Kısa bir ek nefes daha alın…',
      exhale: 'Ağızdan uzun ve yumuşak şekilde verin…',
      done: '60 saniyelik sıfırlama tamamlandı — omuzlarınızın gevşediğini fark edin.',
      start: '60s Nefes Rehberini Başlat',
      pause: 'Duraklat',
      resume: 'Devam Et',
      reset: 'Sıfırla'
    },
    hi: {
      kicker: '60-सेकंड नर्वस सिस्टम रीसेट',
      title: 'फिजियोलॉजिकल साई (दोहरी श्वास + लंबा उच्छ्वास)',
      sub: '6 शांत चक्रों में यह श्वास तकनीक तनाव और तेज धड़कन को स्वाभाविक रूप से शांत करती है।',
      ready: 'तैयार · 60 सेकंड गाइडेड ब्रीदिंग के लिए शुरू करें',
      inhale1: 'नाक से धीरे-धीरे सांस अंदर लें…',
      inhale2: 'एक छोटी अतिरिक्त सांस और लें…',
      exhale: 'मुंह से धीरे और लंबा सांस छोड़ें…',
      done: '60 सेकंड रीसेट पूरा हुआ — अपने कंधों को ढीला महसूस करें।',
      start: '60 सेकंड शांत श्वास शुरू करें',
      pause: 'रोकें',
      resume: 'जारी रखें',
      reset: 'रीसेट'
    },
    ru: {
      kicker: '60-СЕКУНДНАЯ ПЕРЕЗАГРУЗКА',
      title: 'Физиологический вздох (двойной вдох + долгий выдох)',
      sub: '6 спокойных циклов мягко снижают телесное напряжение и выравнивают пульс.',
      ready: 'Готово · Нажмите «Старт» для 60-секундной практики',
      inhale1: 'Плавно вдохните через нос…',
      inhale2: 'Короткий дополнительный довдох…',
      exhale: 'Долгий спокойный выдох через рот…',
      done: '60 секунд завершены — почувствуйте, как расслабились плечи.',
      start: 'Запустить практику (60с)',
      pause: 'Пауза',
      resume: 'Продолжить',
      reset: 'Сбросить'
    }
  };

  var EXISTING_TIMER_SELECTORS = [
    '#sighClock', '#waveClock', '#groundClock', '#pmrClock',
    '#sprintClock', '#shuffleClock', '#pacerClock', '#breathClock',
    '#timerBtn', '#sighStartBtn', '#waveBtn', '#pmrBtn', '#calmPacerBox'
  ];

  function getLocale() {
    var l = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
    return I18N[l] ? l : 'en';
  }

  function getToolSlug() {
    var m = /^\/portal\/tools\/([a-z0-9-]+)\.html$/i.exec(global.location.pathname || '');
    return m ? m[1].toLowerCase() : 'wellness-tool';
  }

  function track(evName, slug) {
    if (typeof global.gtag === 'function') {
      try {
        global.gtag('event', evName, {
          event_category: 'engagement',
          tool_slug: slug,
          content_locale: getLocale()
        });
      } catch (_) {}
    }
  }

  function injectStyles() {
    if (document.getElementById('dbCalmPacerStyles')) return;
    var st = document.createElement('style');
    st.id = 'dbCalmPacerStyles';
    st.textContent = [
      '.db-pacer-box{margin:18px 0 0;padding:16px 18px;border-radius:16px;border:1px solid rgba(45,212,191,0.32);background:linear-gradient(135deg,rgba(20,184,166,0.11),rgba(99,102,241,0.1));box-sizing:border-box;max-width:100%;overflow:hidden}',
      '.db-pacer-kicker{font-size:0.74rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#2dd4bf;margin:0 0 4px}',
      '.db-pacer-title{font-size:1rem;font-weight:800;color:#f8fafc;margin:0 0 4px;line-height:1.35}',
      '.db-pacer-sub{font-size:0.84rem;color:#cbd5e1;margin:0 0 14px;line-height:1.45}',
      '.db-pacer-stage{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:12px}',
      '.db-pacer-ring{width:64px;height:64px;border-radius:50%;flex:0 0 64px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.95rem;color:#f0fdfa;background:radial-gradient(circle,rgba(45,212,191,0.36),rgba(15,23,42,0.82));border:2px solid rgba(45,212,191,0.6);transition:transform 0.9s ease,border-color 0.4s ease,box-shadow 0.4s ease}',
      '.db-pacer-ring.is-in1{transform:scale(1.1);border-color:#2dd4bf;box-shadow:0 0 20px rgba(45,212,191,0.35)}',
      '.db-pacer-ring.is-in2{transform:scale(1.18);border-color:#818cf8;box-shadow:0 0 24px rgba(129,140,248,0.45)}',
      '.db-pacer-ring.is-out{transform:scale(0.94);border-color:#38bdf8;box-shadow:0 0 12px rgba(56,189,248,0.2)}',
      '.db-pacer-phase{flex:1 1 180px;font-size:0.92rem;font-weight:700;color:#f8fafc;line-height:1.4;margin:0}',
      '.db-pacer-actions{display:flex;flex-wrap:wrap;gap:8px}',
      '.db-pacer-btn{min-height:44px;min-width:44px;padding:10px 16px;border-radius:12px;font:inherit;font-size:0.88rem;font-weight:700;cursor:pointer;border:1px solid rgba(45,212,191,0.45);background:rgba(20,184,166,0.2);color:#f0fdfa}',
      '.db-pacer-btn.secondary{background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.16);color:#cbd5e1}',
      '@media (prefers-reduced-motion:reduce){.db-pacer-ring{transition:none;transform:none!important}}'
    ].join('');
    document.head.appendChild(st);
  }

  function formatSec(sec) {
    var s = Math.max(0, sec);
    return '00:' + (s < 10 ? '0' + s : String(s));
  }

  function mountPacer() {
    var resultCard = document.getElementById('resultCard');
    if (!resultCard) return;
    for (var i = 0; i < EXISTING_TIMER_SELECTORS.length; i++) {
      if (document.querySelector(EXISTING_TIMER_SELECTORS[i])) return;
    }

    injectStyles();
    var slug = getToolSlug();
    var totalSec = 60;
    var remaining = totalSec;
    var running = false;
    var completed = false;
    var timerId = null;

    var box = document.createElement('div');
    box.id = 'calmPacerBox';
    box.className = 'db-pacer-box';
    box.setAttribute('data-calm-pacer', '1');

    var kicker = document.createElement('p');
    kicker.className = 'db-pacer-kicker';
    var title = document.createElement('h3');
    title.className = 'db-pacer-title';
    var sub = document.createElement('p');
    sub.className = 'db-pacer-sub';

    var stage = document.createElement('div');
    stage.className = 'db-pacer-stage';
    var ring = document.createElement('div');
    ring.className = 'db-pacer-ring';
    ring.id = 'calmPacerClock';
    ring.textContent = formatSec(remaining);
    var phase = document.createElement('p');
    phase.className = 'db-pacer-phase';
    phase.setAttribute('aria-live', 'polite');
    stage.appendChild(ring);
    stage.appendChild(phase);

    var actions = document.createElement('div');
    actions.className = 'db-pacer-actions';
    var startBtn = document.createElement('button');
    startBtn.type = 'button';
    startBtn.id = 'calmPacerStartBtn';
    startBtn.className = 'db-pacer-btn';
    var resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.id = 'calmPacerResetBtn';
    resetBtn.className = 'db-pacer-btn secondary';
    actions.appendChild(startBtn);
    actions.appendChild(resetBtn);

    box.appendChild(kicker);
    box.appendChild(title);
    box.appendChild(sub);
    box.appendChild(stage);
    box.appendChild(actions);

    var anchor = resultCard.querySelector('.action-row, .btn-row, .actions');
    if (anchor && anchor.parentNode === resultCard) {
      resultCard.insertBefore(box, anchor);
    } else {
      resultCard.appendChild(box);
    }

    function phaseKeyFor(elapsed) {
      var step = elapsed % 10;
      if (step < 4) return 'inhale1';
      if (step === 4) return 'inhale2';
      return 'exhale';
    }

    function syncUI() {
      var pack = I18N[getLocale()] || I18N.en;
      kicker.textContent = pack.kicker;
      title.textContent = pack.title;
      sub.textContent = pack.sub;
      ring.textContent = formatSec(remaining);
      resetBtn.textContent = pack.reset;

      ring.classList.remove('is-in1', 'is-in2', 'is-out');
      if (completed) {
        phase.textContent = pack.done;
        startBtn.textContent = pack.start;
      } else if (running) {
        var pk = phaseKeyFor(totalSec - remaining);
        phase.textContent = pack[pk];
        ring.classList.add(pk === 'inhale1' ? 'is-in1' : (pk === 'inhale2' ? 'is-in2' : 'is-out'));
        startBtn.textContent = pack.pause;
      } else if (remaining < totalSec) {
        phase.textContent = pack[phaseKeyFor(totalSec - remaining)];
        startBtn.textContent = pack.resume;
      } else {
        phase.textContent = pack.ready;
        startBtn.textContent = pack.start;
      }
    }

    function stopTimer() {
      if (timerId) {
        global.clearInterval(timerId);
        timerId = null;
      }
      running = false;
    }

    startBtn.addEventListener('click', function () {
      if (running) {
        stopTimer();
        syncUI();
        return;
      }
      if (completed || remaining <= 0) {
        remaining = totalSec;
        completed = false;
      }
      var isFreshStart = remaining === totalSec;
      running = true;
      if (isFreshStart) track('wellness_pacer_start', slug);
      syncUI();
      timerId = global.setInterval(function () {
        remaining -= 1;
        if (remaining <= 0) {
          remaining = 0;
          completed = true;
          stopTimer();
          track('wellness_pacer_complete', slug);
        }
        syncUI();
      }, 1000);
    });

    resetBtn.addEventListener('click', function () {
      stopTimer();
      remaining = totalSec;
      completed = false;
      syncUI();
    });

    if (typeof global.MutationObserver === 'function') {
      var mo = new global.MutationObserver(syncUI);
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    }

    syncUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountPacer, { once: true });
  } else {
    mountPacer();
  }

  global.DopaBrainCalmPacer = { version: '2026-11-21', mount: mountPacer };
})(window);
