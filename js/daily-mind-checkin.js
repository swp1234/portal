/**
 * DopaBrain Daily 60-Second Mind Check-In & Personalized Wellness Router
 * 12-language localization, private local 7-day streak sparkline, dynamic 3-tool routing, 1080x1920 story card.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'daily_mind_checkin_v1';
  var SUPPORTED = ['en', 'ko', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
  var FRICTION_IDS = ['overthinking', 'burnout', 'social_hurt', 'task_freeze', 'sleepless', 'relationship'];

  var ROUTES = {
    overthinking: [
      { url: '/portal/tools/cognitive-distortion-reframer.html', icon: '💡', en: ['CBT Distortion Reframer', 'Catch automatic loops & build Socratic reframes.'], ko: ['CBT 인지 왜곡 리프레이머', '자동적 사고 함정을 60초 만에 재구성하세요.'] },
      { url: '/portal/tools/grounding-exercise.html', icon: '🌊', en: ['5-4-3-2-1 Grounding', 'Interrupt racing thoughts with cyclic sigh breathing.'], ko: ['5-4-3-2-1 그라운딩', '생리적 한숨 호흡으로 생각 폭주를 멈추세요.'] },
      { url: '/stress-check/', icon: '📊', en: ['Full Stress Check', 'Measure cognitive & emotional tension load.'], ko: ['스트레스 정밀 체크', '인지·감정 긴장도를 5개 축으로 측정하세요.'] }
    ],
    burnout: [
      { url: '/portal/tools/burnout-stress-differential.html', icon: '🔥', en: ['Burnout vs Stress Matrix', 'Separate acute tension from chronic exhaustion.'], ko: ['번아웃 vs 스트레스 매트릭스', '일시적 스트레스와 만성 탈진을 구분하세요.'] },
      { url: '/portal/tools/cognitive-load-calculator.html', icon: '🧠', en: ['Cognitive Load Calculator', 'Audit mental RAM saturation & open loops.'], ko: ['인지 부하 계산기', '열린 할 일과 두뇌 RAM 과부하를 측정하세요.'] },
      { url: '/hsp-test/', icon: '🌿', en: ['HSP Sensitivity Test', 'Check if sensory overstimulation is draining energy.'], ko: ['HSP 민감성 테스트', '감각 과부하가 에너지 고갈의 원인인지 점검하세요.'] }
    ],
    social_hurt: [
      { url: '/portal/tools/rsd-coping-audit.html', icon: '🫧', en: ['RSD Sensitivity Audit', 'Run the 90-second somatic cool-down protocol.'], ko: ['거절 민감성(RSD) 점검', '90초 신경계 쿨다운 타이머와 답장 스크립트.'] },
      { url: '/portal/tools/imposter-syndrome-audit.html', icon: '🛡️', en: ['Imposter Syndrome Audit', 'Log concrete self-worth proof & spot archetypes.'], ko: ['가면 증후군 자가점검', '5가지 유형을 분석하고 객관적 성과 증거를 기록하세요.'] },
      { url: '/portal/tools/emotion-regulation-planner.html', icon: '🧭', en: ['Emotion Regulation Planner', 'Build a 5-stage Gross process calm plan.'], ko: ['감정 조절 플래너', '그로스 5단계 모델 기반 실행 스크립트를 만드세요.'] }
    ],
    task_freeze: [
      { url: '/portal/tools/procrastination-root-decoder.html', icon: '🚀', en: ['Procrastination 5-Min Sprint', 'Decode the emotional block & start a 5-min timer.'], ko: ['미루기 디코더 & 5분 스프린트', '감정 마찰 원인을 풀고 5분 착수 타이머 시작.'] },
      { url: '/portal/tools/dopamine-detox-protocol.html', icon: '⚡', en: ['Dopamine Reset Protocol', 'Replace passive scrolling with compound focus.'], ko: ['도파민 리셋 프로토콜', '저자극 집중 메뉴와 24시간 리셋 계획을 받으세요.'] },
      { url: '/pomodoro-timer/', icon: '🍅', en: ['Pomodoro Focus Timer', 'Lock in a clean 25-minute deep work sprint.'], ko: ['포모도로 집중 타이머', '방해 없는 25분 몰입 타이머를 바로 시작하세요.'] }
    ],
    sleepless: [
      { url: '/portal/tools/sleep-chronotype-reset.html', icon: '🌙', en: ['Sleep Cycle & Circadian Reset', 'Calculate 90-min bedtimes & caffeine cutoff.'], ko: ['수면 사이클 리셋 계산기', '90분 최적 취침 시각과 카페인 마감을 계산하세요.'] },
      { url: '/white-noise/', icon: '🌧️', en: ['White Noise Player', 'Mask night noise with brown noise & rain.'], ko: ['백색소음 플레이어', '브라운 노이즈와 빗소리로 깊은 입면을 돕습니다.'] },
      { url: '/portal/tools/grounding-exercise.html', icon: '🌊', en: ['5-4-3-2-1 Grounding', 'Calm nighttime sympathetic arousal before bed.'], ko: ['5-4-3-2-1 그라운딩', '취침 전 교감신경 과각성을 부드럽게 낮추세요.'] }
    ],
    relationship: [
      { url: '/portal/tools/attachment-trigger-decoder.html', icon: '🤝', en: ['Attachment Script Builder', 'Turn anxious or avoidant triggers into calm boundaries.'], ko: ['애착 트리거 안전 스크립트', '불안·회피 충동을 비난 없는 대화 문장으로 변환.'] },
      { url: '/attachment-style/', icon: '💛', en: ['Attachment Reflection', 'Explore your 10-scenario attachment tendencies.'], ko: ['애착 반응 성찰 테스트', '10가지 관계 시나리오로 애착 패턴을 확인하세요.'] },
      { url: '/portal/tools/decision-matrix.html', icon: '⚖️', en: ['Dilemma Decision Matrix', 'Weigh relationship or life choices objectively.'], ko: ['딜레마 의사결정 매트릭스', '중요한 선택지를 가중치 기준으로 객관 비교하세요.'] }
    ]
  };

  var T = {
    en: {
      title: 'Daily 60-Second Mind Check-In & Wellness Router | DopaBrain',
      metaDesc: 'Free 12-language 60-second daily mental check-in with local 7-day streak tracking and personalized interactive wellness tool prescriptions.',
      skip: 'Skip to Daily Check-In', back: '← Tools Catalog', langLabel: 'Language:',
      kicker: 'DAILY 60-SECOND MIND PULSE', heroTitle: 'Daily Mind Check-In & Tool Router',
      heroLead: 'Check your energy, somatic tension, and mental clarity in 60 seconds. Track your private local streak and get matched to the exact 3 DopaBrain tools you need right now.',
      chip1: '3-Axis Daily Pulse', chip2: 'Local 7-Day Streak', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • 3-AXIS PULSE CHECK', step1Title: 'How does your nervous system feel right now?', step1Sub: 'Slide each bar honestly from 1 (low) to 10 (high). Everything stays strictly on your device.',
      energyLabel: '⚡ Mental & Physical Energy', tensionLabel: '🔥 Somatic Stress & Tension', fogLabel: '🌫️ Brain Fog & Open Loops',
      step2Badge: 'STEP 2 • PRIMARY FRICTION TODAY', logBtn: 'Save Today’s Check-In & Route Tools', resetBtn: 'Reset',
      resultBadge: 'TODAY’S PERSONALIZED TOOLKIT', meterReadiness: 'Readiness Index', meterRecovery: 'Recovery Priority',
      rxTitle: 'Your 3-Step Matched DopaBrain Prescription',
      storyBtn: 'Save 1080×1920 Story Card (PNG)', copyBtn: 'Copy Check-In', shareBtn: 'Share Tool',
      copied: 'Daily check-in copied!', cardSaved: '1080×1920 Story Card downloaded!',
      streakSuffix: '-Day Local Check-In Streak', streakSub: 'Saved privately in this browser (last 7 check-ins shown)',
      vHigh: 'High Readiness & Clear Bandwidth', vMid: 'Moderate Load — Targeted Reset Recommended', vLow: 'Recovery-First Mode — Lighten Load Today',
      frictions: {
        overthinking: ['💭 Racing Thoughts / Rumination', 'Looping worries or mental replays.'],
        burnout: ['🔥 Exhaustion / Sensory Drain', 'Feeling depleted or overstimulated.'],
        social_hurt: ['🫧 Criticism / Self-Doubt', 'Stung by feedback or feeling like a fraud.'],
        task_freeze: ['🚀 Procrastination / Task Freeze', 'Stuck starting an important task.'],
        sleepless: ['🌙 Sleep Debt / Late Scrolling', 'Tired body, wired mind at night.'],
        relationship: ['🤝 Relationship Tension', 'Triggered by silence, conflict, or boundaries.']
      },
      stickyTitle: 'Need a deeper stress breakdown?', stickySub: 'Run our full 5-category PSS-10 Stress Check in 2 minutes', stickyBtn: 'Stress Check →',
      privacy: 'Privacy Policy', terms: 'Terms'
    },
    ko: {
      title: '하루 60초 마음 체크인 & 맞춤 웰니스 라우터 | DopaBrain',
      metaDesc: '무료 12개국어 60초 일일 마음 체크인, 로컬 7일 연속 스트릭, 현재 상태에 딱 맞는 3가지 웰니스 도구 자동 처방.',
      skip: '일일 체크인으로 이동', back: '← 도구 카탈로그', langLabel: '언어:',
      kicker: '하루 60초 마음 상태 펄스', heroTitle: '데일리 마인드 체크인 & 도구 라우터',
      heroLead: '에너지·긴장도·브레인포그 3가지 지표로 60초 만에 오늘의 컨디션을 기록하고, 지금 당장 필요한 DopaBrain 인터랙티브 도구 3가지를 처방받으세요.',
      chip1: '3축 컨디션 펄스', chip2: '로컬 7일 연속 기록', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 3축 신경계 펄스 점검', step1Title: '지금 내 몸과 마음의 상태는 어떤가요?', step1Sub: '1(낮음)부터 10(높음)까지 솔직하게 맞춰보세요. 기록은 오직 내 기기에만 저장됩니다.',
      energyLabel: '⚡ 신체·정신 에너지', tensionLabel: '🔥 스트레스·신체 긴장', fogLabel: '🌫️ 브레인포그·열린 할 일',
      step2Badge: '2단계 • 오늘 가장 큰 마찰 선택', logBtn: '오늘 체크인 저장 & 맞춤 도구 처방', resetBtn: '초기화',
      resultBadge: '오늘의 맞춤 웰니스 툴킷', meterReadiness: '컨디션 준비도', meterRecovery: '회복 우선순위',
      rxTitle: '지금 상태에 맞춘 3단계 추천 도구',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)', copyBtn: '체크인 요약 복사', shareBtn: '도구 공유',
      copied: '일일 체크인 요약이 복사되었습니다!', cardSaved: '1080×1920 스토리 카드가 저장되었습니다!',
      streakSuffix: '일 연속 로컬 체크인', streakSub: '브라우저 로컬에 비공개 저장됨 (최근 7회 표시)',
      vHigh: '높은 준비도 & 맑은 집중 상태', vMid: '보통 부하 — 맞춤형 짧은 리셋 권장', vLow: '회복 우선 모드 — 오늘은 부하를 줄이세요',
      frictions: {
        overthinking: ['💭 생각 폭주 / 반추', '걱정이나 대화가 머릿속에서 반복됨.'],
        burnout: ['🔥 탈진 / 감각 소진', '에너지가 바닥나거나 자극에 지침.'],
        social_hurt: ['🫧 비판 민감 / 자기 의심', '피드백에 위축되거나 자신감이 흔들림.'],
        task_freeze: ['🚀 미루기 / 착수 마비', '중요한 일 앞에서 손이 안 떨어짐.'],
        sleepless: ['🌙 수면 부족 / 야간 스크롤', '몸은 피곤한데 밤에 잠이 안 옴.'],
        relationship: ['🤝 관계 긴장 / 경계 고민', '연락 지연·갈등·거절로 마음이 흔들림.']
      },
      stickyTitle: '더 깊은 스트레스 정밀 분석이 필요하신가요?', stickySub: '2분 만에 5개 영역 PSS-10 스트레스 체크 완료', stickyBtn: '스트레스 체크 →',
      privacy: '개인정보처리방침', terms: '이용약관'
    }
  };

  ['zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'].forEach(function (loc) { T[loc] = Object.assign({}, T.en); });
  T.zh.heroTitle = '每日 60 秒心理打卡与工具匹配'; T.zh.logBtn = '保存今日打卡并匹配工具'; T.zh.back = '← 工具目录';
  T.ja.heroTitle = '毎日60秒マインドチェックイン＆ツール処方'; T.ja.logBtn = '今日のチェックインを保存'; T.ja.back = '← ツール一覧';
  T.es.heroTitle = 'Check-In Mental Diario de 60 Segundos'; T.es.logBtn = 'Guardar Check-In y Ver Herramientas'; T.es.back = '← Catálogo de herramientas';
  T.pt.heroTitle = 'Check-In Mental Diário de 60 Segundos'; T.pt.logBtn = 'Salvar Check-In e Ver Ferramentas'; T.pt.back = '← Catálogo de Ferramentas';
  T.de.heroTitle = 'Täglicher 60-Sekunden-Mind-Check-In'; T.de.logBtn = 'Check-In speichern & Tools anzeigen'; T.de.back = '← Tool-Katalog';
  T.fr.heroTitle = 'Bilan Mental Quotidien en 60 Secondes'; T.fr.logBtn = 'Enregistrer le Bilan & Outils'; T.fr.back = '← Catalogue d’outils';
  T.ru.heroTitle = 'Ежедневный 60-секундный чек-ин состояния'; T.ru.logBtn = 'Сохранить чек-ин и подобрать инструменты'; T.ru.back = '← Каталог инструментов';
  T.hi.heroTitle = 'दैनिक 60-सेकंड माइंड चेक-इन व टूल राउटर'; T.hi.logBtn = 'आज का चेक-इन सेव करें'; T.hi.back = '← टूल कैटलॉग';
  T.id.heroTitle = 'Check-In Pikiran Harian 60 Detik'; T.id.logBtn = 'Simpan Check-In & Lihat Alat'; T.id.back = '← Katalog Alat';
  T.tr.heroTitle = 'Günlük 60 Saniyelik Zihin Kontrolü'; T.tr.logBtn = 'Kontrolü Kaydet & Araçları Gör'; T.tr.back = '← Araç Kataloğu';

  var currentLang = 'en';
  var selectedFriction = 'overthinking';
  var hasLoggedOnce = false;

  function detectLang() {
    try {
      var p = new URLSearchParams(window.location.search).get('lang');
      if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    } catch (e) {}
    return 'en';
  }
  function dict(lang) { return T[lang] || T.en; }

  function sendSafeEvent(name) {
    if (typeof window.gtag !== 'function') return;
    try {
      window.gtag('event', name, {
        event_category: 'engagement',
        tool_slug: 'daily-mind-checkin',
        content_locale: currentLang
      });
    } catch (e) {}
  }

  function showToast(msg) {
    var old = document.getElementById('wlToast');
    if (old) old.remove();
    var el = document.createElement('div');
    el.id = 'wlToast';
    el.className = 'wl-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    window.setTimeout(function () { if (el && el.parentNode) el.remove(); }, 2600);
  }

  function todayKey() {
    var now = new Date();
    return now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  }

  function loadHistory() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr.slice(-7) : [];
    } catch (e) { return []; }
  }

  function saveEntry(readiness) {
    var hist = loadHistory();
    var day = todayKey();
    var idx = hist.findIndex(function (x) { return x && x.day === day; });
    var entry = { day: day, readiness: readiness, friction: selectedFriction };
    if (idx >= 0) hist[idx] = entry;
    else hist.push(entry);
    hist = hist.slice(-7);
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(hist)); } catch (e) {}
    return hist;
  }

  function renderFrictions() {
    var d = dict(currentLang);
    var grid = document.getElementById('frictionGrid');
    if (!grid) return;
    grid.innerHTML = '';
    FRICTION_IDS.forEach(function (id) {
      var info = (d.frictions && d.frictions[id]) || T.en.frictions[id];
      var isOn = selectedFriction === id;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toggle-card' + (isOn ? ' is-selected' : '');
      btn.setAttribute('data-friction', id);
      btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
      var t1 = document.createElement('span'); t1.className = 'toggle-card-title'; t1.textContent = info[0];
      var t2 = document.createElement('span'); t2.className = 'toggle-card-desc'; t2.textContent = info[1];
      btn.appendChild(t1); btn.appendChild(t2);
      btn.addEventListener('click', function () {
        selectedFriction = id;
        renderFrictions();
      });
      grid.appendChild(btn);
    });
  }

  function syncSliders() {
    document.getElementById('energyVal').textContent = document.getElementById('energySlider').value + ' / 10';
    document.getElementById('tensionVal').textContent = document.getElementById('tensionSlider').value + ' / 10';
    document.getElementById('fogVal').textContent = document.getElementById('fogSlider').value + ' / 10';
  }

  function renderCheckin(isUserAction) {
    var d = dict(currentLang);
    var energy = parseInt(document.getElementById('energySlider').value, 10) || 6;
    var tension = parseInt(document.getElementById('tensionSlider').value, 10) || 5;
    var fog = parseInt(document.getElementById('fogSlider').value, 10) || 5;

    var readiness = Math.max(10, Math.min(100, Math.round(((energy + (11 - tension) + (11 - fog)) / 30) * 100)));
    var recovery = Math.max(10, 100 - readiness);

    var hist = isUserAction ? saveEntry(readiness) : loadHistory();
    if (hist.length === 0) hist = [{ day: todayKey(), readiness: readiness, friction: selectedFriction }];

    document.getElementById('verdictTitle').textContent = readiness >= 70 ? d.vHigh : (readiness >= 45 ? d.vMid : d.vLow);
    document.getElementById('verdictDesc').textContent = 'Energy ' + energy + '/10 • Tension ' + tension + '/10 • Mental Fog ' + fog + '/10';
    document.getElementById('pctReadiness').textContent = readiness + '%';
    document.getElementById('barReadiness').style.width = readiness + '%';
    document.getElementById('pctRecovery').textContent = recovery + '%';
    document.getElementById('barRecovery').style.width = recovery + '%';

    document.getElementById('streakHeadline').textContent = hist.length + (d.streakSuffix || '-Day Local Check-In Streak');
    document.getElementById('streakSub').textContent = d.streakSub;

    var barsEl = document.getElementById('streakBars');
    barsEl.innerHTML = '';
    hist.forEach(function (item) {
      var bar = document.createElement('div');
      bar.className = 'streak-bar';
      bar.style.height = Math.max(10, Math.round((Number(item.readiness) || 50) * 0.56)) + 'px';
      barsEl.appendChild(bar);
    });

    var rxGrid = document.getElementById('rxGrid');
    rxGrid.innerHTML = '';
    var list = ROUTES[selectedFriction] || ROUTES.overthinking;
    list.forEach(function (item) {
      var copy = (currentLang === 'ko' && item.ko) ? item.ko : item.en;
      var a = document.createElement('a');
      a.className = 'bridge-card';
      a.setAttribute('href', item.url + '?lang=' + currentLang + '&source=daily_mind_checkin');
      var st = document.createElement('strong');
      st.textContent = item.icon + ' ' + copy[0];
      var sp = document.createElement('span');
      sp.textContent = copy[1];
      a.appendChild(st);
      a.appendChild(sp);
      rxGrid.appendChild(a);
    });

    var card = document.getElementById('resultCard');
    card.hidden = false;
    if (isUserAction) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (!hasLoggedOnce) {
        hasLoggedOnce = true;
        sendSafeEvent('daily_checkin_complete');
      }
    }
  }

  function resetAll() {
    document.getElementById('energySlider').value = '6';
    document.getElementById('tensionSlider').value = '5';
    document.getElementById('fogSlider').value = '5';
    selectedFriction = 'overthinking';
    syncSliders();
    renderFrictions();
    document.getElementById('resultCard').hidden = true;
    sendSafeEvent('daily_checkin_reset');
  }

  function applyLanguage(lang) {
    currentLang = SUPPORTED.indexOf(lang) !== -1 ? lang : 'en';
    document.documentElement.lang = currentLang;
    var d = dict(currentLang);
    document.title = d.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', d.metaDesc);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (d[k] && typeof d[k] === 'string') {
        if (el.tagName === 'META') el.setAttribute('content', d[k]);
        else el.textContent = d[k];
      }
    });
    document.getElementById('langSelect').value = currentLang;
    document.getElementById('backLink')?.setAttribute('href', '/portal/tools/?lang=' + currentLang);
    document.querySelector('.revenue-sticky-cta')?.setAttribute('href', '/stress-check/?lang=' + currentLang + '&source=daily_checkin_sticky');
    renderFrictions();
    if (!document.getElementById('resultCard').hidden) renderCheckin(false);
  }

  function downloadCard() {
    var d = dict(currentLang);
    if (!window.DopaBrainStoryCard) return;
    var ready = parseInt(document.getElementById('pctReadiness')?.textContent || '60', 10) || 60;
    var rec = parseInt(document.getElementById('pctRecovery')?.textContent || '40', 10) || 40;
    var ok = window.DopaBrainStoryCard.downloadStoryCard({
      slug: 'daily-mind-checkin',
      badge: d.kicker,
      emoji: '🧭',
      toolName: d.heroTitle,
      headline: document.getElementById('verdictTitle')?.textContent || '',
      subtitle: document.getElementById('streakHeadline')?.textContent || '',
      accent: '#14b8a6',
      accent2: '#6366f1',
      metrics: [
        { label: d.meterReadiness, pct: ready, color: '#2dd4bf' },
        { label: d.meterRecovery, pct: rec, color: '#818cf8' }
      ],
      takeawayLabel: d.rxTitle,
      takeaway: (document.querySelector('#rxGrid strong') || {}).textContent || '',
      footerUrl: 'dopabrain.com/portal/tools/daily-mind-checkin.html'
    });
    if (ok) showToast(d.cardSaved);
  }

  function copyCheckin() {
    var d = dict(currentLang);
    var txt = [d.heroTitle, document.getElementById('verdictTitle')?.textContent || '', document.getElementById('streakHeadline')?.textContent || '', 'https://dopabrain.com/portal/tools/daily-mind-checkin.html?lang=' + currentLang].join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { showToast(d.copied); }).catch(function () {});
    else showToast(d.copied);
  }

  function shareTool() {
    var d = dict(currentLang);
    var url = 'https://dopabrain.com/portal/tools/daily-mind-checkin.html?lang=' + currentLang;
    if (navigator.share) navigator.share({ title: d.heroTitle, text: d.heroLead, url: url }).catch(function () {});
    else if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(function () { showToast(d.copied); }).catch(function () {});
  }

  window.i18n = {
    getLanguage: function () { return currentLang; },
    setLanguage: function (lang) { applyLanguage(lang); },
    t: function (key) { return (dict(currentLang)[key] || T.en[key] || key); },
    supportedLanguages: SUPPORTED
  };

  document.addEventListener('DOMContentLoaded', function () {
    currentLang = detectLang();
    applyLanguage(currentLang);
    syncSliders();
    sendSafeEvent('daily_checkin_view');

    ['energySlider', 'tensionSlider', 'fogSlider'].forEach(function (id) {
      document.getElementById(id)?.addEventListener('input', syncSliders);
    });
    document.getElementById('langSelect')?.addEventListener('change', function (e) {
      var next = e.target.value;
      try { var u = new URL(window.location.href); u.searchParams.set('lang', next); window.history.replaceState({}, '', u.toString()); } catch (err) {}
      applyLanguage(next);
    });
    document.getElementById('logBtn')?.addEventListener('click', function () { renderCheckin(true); });
    document.getElementById('resetBtn')?.addEventListener('click', resetAll);
    document.getElementById('storyBtn')?.addEventListener('click', downloadCard);
    document.getElementById('copyBtn')?.addEventListener('click', copyCheckin);
    document.getElementById('shareBtn')?.addEventListener('click', shareTool);
  });
})();
