/**
 * DopaBrain Imposter Syndrome Archetype Audit & Private Proof Vault
 * 12-language localization, Valerie Young 5 archetypes, XSS-safe local Proof Vault, 1080x1920 story card.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'imposter_audit_v1';
  var SUPPORTED = ['en', 'ko', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
  var Q_MAP = ['perfectionist', 'expert', 'genius', 'soloist', 'superperson'];

  var T = {
    en: {
      title: 'Imposter Syndrome Archetype Audit & Proof Vault | DopaBrain',
      metaDesc: 'Free 12-language Imposter Syndrome self-reflection audit mapping Dr. Valerie Young’s 5 imposter archetypes with a private local Evidence Proof Vault.',
      skip: 'Skip to Imposter Audit', back: '← Tools Catalog', langLabel: 'Language:',
      kicker: 'SELF-WORTH & COMPETENCE AUDIT', heroTitle: 'Imposter Syndrome Audit & Proof Vault',
      heroLead: 'High achievers often attribute real skill to luck. Identify which of the 5 imposter competence rules drives your self-doubt and build a private local Proof Vault.',
      chip1: '5 Imposter Archetypes', chip2: 'Private Proof Vault', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • 5-ARCHETYPE PATTERN CHECK', step1Title: 'How often do these competence thoughts appear?', step1Sub: 'Rate each statement honestly from Rarely to Constantly. All scoring runs strictly locally.',
      calcBtn: 'Identify My Imposter Pattern', resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR PRIMARY IMPOSTER RULE',
      meterIntensity: 'Imposter Friction Load', meterProof: 'Evidence Anchors Logged',
      reframeTitle: 'Grounded Competence Reframe', vaultTitle: 'Private Evidence Proof Vault (Local Only)',
      vaultSub: 'Log 1–3 concrete facts (a hard problem you solved, a skill you learned, or genuine praise) to counter self-doubt:',
      addProofBtn: 'Add Proof', placeholder: 'Example: Shipped the Q3 presentation on time under pressure',
      storyBtn: 'Save 1080×1920 Story Card (PNG)', copyBtn: 'Copy Summary', shareBtn: 'Share Tool',
      copied: 'Summary copied to clipboard!', cardSaved: '1080×1920 Story Card downloaded!',
      opts: ['Rarely (0)', 'Sometimes (1)', 'Often (2)', 'Constantly (3)'],
      qs: [
        '1. Perfectionist Rule: Even a 98% result feels like a failure if I spot one minor flaw.',
        '2. Expert Rule: I hesitate to speak up or apply unless I know 100% of every detail first.',
        '3. Natural Genius Rule: If something takes sustained struggle or practice, I assume I lack real talent.',
        '4. Soloist Rule: Asking for help feels like admitting I am a fraud who cannot handle my role.',
        '5. Superperson Rule: I push myself to outperform in every role simultaneously to prove I belong.'
      ],
      archetypes: {
        perfectionist: ['🎯 The Perfectionist', 'You equate competence with zero mistakes. Minor errors feel like exposure rather than normal iteration.', '“Excellence is built through iterative versions—one flaw never invalidates my capability.”'],
        expert: ['📚 The Expert', 'You measure worth by knowing everything in advance, delaying action to collect endless credentials.', '“Competent professionals learn in real time; knowing where to find answers is mastery.”'],
        genius: ['⚡ The Natural Genius', 'You expect effortless mastery on the first try and interpret normal learning friction as inadequacy.', '“Struggle is how neural pathways strengthen—effort is evidence of growth, not fraudulence.”'],
        soloist: ['🧭 The Soloist', 'You believe true capability means doing everything unaided, treating collaboration as weakness.', '“Leveraging feedback and teammates is a hallmark of senior judgment, not incompetence.”'],
        superperson: ['🔥 The Superperson', 'You overwork to compensate for hidden doubt, tying self-worth strictly to nonstop output.', '“Sustainable impact comes from focused boundaries, not burning out to prove my seat.”']
      },
      bridgeWorkTitle: 'Work Style Test', bridgeWorkDesc: 'Discover your authentic workplace role across 5 team archetypes.',
      bridgeCbtTitle: 'CBT Distortion Reframer', bridgeCbtDesc: 'Catch "Discounting the Positive" and "All-or-Nothing" thought loops.',
      bridgeProcTitle: 'Procrastination 5-Min Sprint', bridgeProcDesc: 'Break perfectionism paralysis with a messy 5-minute draft timer.',
      stickyTitle: 'Discover your authentic work strengths', stickySub: 'Take the 25-scenario Work Style Personality Test', stickyBtn: 'Work Style Test →',
      privacy: 'Privacy Policy', terms: 'Terms'
    },
    ko: {
      title: '가면 증후군 유형 점검 & 성과 증거 금고 | DopaBrain',
      metaDesc: '무료 12개국어 가면 증후군(Imposter Syndrome) 5대 유형 자가점검과 로컬 비공개 성과 증거 금고(Proof Vault).',
      skip: '가면 증후군 점검으로 이동', back: '← 도구 카탈로그', langLabel: '언어:',
      kicker: '자기 효능감 & 유능감 감사', heroTitle: '가면 증후군 점검 & 성과 증거 금고',
      heroLead: '실력으로 이룬 성과를 운으로 돌리고 계신가요? 발레리 영 박사의 5가지 가면 증후군 유형을 분석하고 객관적 성과 증거를 로컬 금고에 기록하세요.',
      chip1: '5대 가면 증후군 유형', chip2: '비공개 성과 증거 금고', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 5가지 유능감 규칙 점검', step1Title: '다음 생각이 얼마나 자주 떠오르나요?', step1Sub: '거의 없음부터 항상 있음까지 선택하세요. 모든 기록은 내 브라우저에만 저장됩니다.',
      calcBtn: '나의 가면 증후군 유형 분석', resetBtn: '초기화',
      resultBadge: '2단계 • 나의 핵심 가면 증후군 패턴',
      meterIntensity: '가면 증후군 마찰 부하', meterProof: '기록된 성과 증거',
      reframeTitle: '현실 기반 유능감 리프레임', vaultTitle: '나만의 비공개 성과 증거 금고 (로컬 저장)',
      vaultSub: '자기 의심이 올라올 때 꺼내 볼 객관적 사실 1~3가지를 기록해 두세요:',
      addProofBtn: '증거 추가', placeholder: '예: 압박 속에서도 분기 보고서를 기한 내에 완성해 긍정적 피드백을 받았다',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)', copyBtn: '요약 복사', shareBtn: '도구 공유',
      copied: '요약이 복사되었습니다!', cardSaved: '1080×1920 스토리 카드가 저장되었습니다!',
      opts: ['거의 없음 (0)', '가끔 (1)', '자주 (2)', '항상 (3)'],
      qs: [
        '1. 완벽주의자 규칙: 98점을 받아도 작은 흠집 하나가 보이면 전체가 실패처럼 느껴진다.',
        '2. 전문가 규칙: 모든 세부 지식을 100% 알기 전에는 발언하거나 지원하는 것이 망설여진다.',
        '3. 타고난 천재 규칙: 처음부터 쉽게 해내지 못하고 연습이 오래 걸리면 재능이 없다고 느낀다.',
        '4. 독고다이 규칙: 도움을 요청하면 실력이 들통나는 것 같아 혼자 끝까지 버티려 한다.',
        '5. 슈퍼휴먼 규칙: 자격이 있음을 증명하려고 모든 역할에서 남들보다 과도하게 애쓴다.'
      ],
      archetypes: {
        perfectionist: ['🎯 완벽주의자형 (Perfectionist)', '무결점을 유능함의 조건으로 삼아 사소한 실수도 자격 부족으로 해석하는 경향입니다.', '“탁월함은 반복 개선으로 만들어집니다. 작은 결점이 내 역량을 무효화하지 않습니다.”'],
        expert: ['📚 전문가형 (Expert)', '사전에 모든 것을 알아야만 자격이 있다고 믿어 준비 단계에 오래 머무는 패턴입니다.', '“진짜 전문가는 모든 답을 외우는 사람이 아니라 실시간으로 찾아 해결하는 사람입니다.”'],
        genius: ['⚡ 타고난 천재형 (Natural Genius)', '노력 없이 단번에 해내야 진짜 실력이라 믿어 정상적인 학습 마찰을 무능으로 오해합니다.', '“어려움은 신경 회로가 성장하는 정상 과정이며, 노력은 가짜가 아니라 성장의 증거입니다.”'],
        soloist: ['🧭 독고다이형 (Soloist)', '도움 없이 혼자 해내야만 진짜 성과라고 생각해 협업을 약점으로 여기는 패턴입니다.', '“적절한 피드백과 협업을 활용하는 능력은 시니어 역량의 핵심입니다.”'],
        superperson: ['🔥 슈퍼휴먼형 (Superperson)', '내면의 의심을 덮기 위해 끊임없는 과로와 성과로 존재 가치를 증명하려 합니다.', '“지속 가능한 영향력은 번아웃이 아니라 건강한 경계와 집중에서 나옵니다.”']
      },
      bridgeWorkTitle: '직장인 업무 스타일 테스트', bridgeWorkDesc: '5가지 팀 역할 중 나의 자연스러운 업무 강점을 확인하세요.',
      bridgeCbtTitle: 'CBT 인지 왜곡 리프레이머', bridgeCbtDesc: '“긍정 격하”와 “흑백 논리” 사고 함정을 60초 만에 재구성하세요.',
      bridgeProcTitle: '미루기 디코더 & 5분 스프린트', bridgeProcDesc: '완벽주의 착수 마비를 엉성한 5분 초안 타이머로 깨뜨립니다.',
      stickyTitle: '나의 진짜 업무 강점 발견하기', stickySub: '25문항 직장인 업무 스타일 테스트 시작', stickyBtn: '업무 스타일 테스트 →',
      privacy: '개인정보처리방침', terms: '이용약관'
    }
  };

  ['zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'].forEach(function (loc) { T[loc] = Object.assign({}, T.en); });
  T.zh.heroTitle = '冒充者综合征自测与成就证据库'; T.zh.calcBtn = '识别我的冒充者类型'; T.zh.back = '← 工具目录';
  T.ja.heroTitle = 'インポスター症候群診断＆実績証拠ボックス'; T.ja.calcBtn = '自分のタイプを分析する'; T.ja.back = '← ツール一覧';
  T.es.heroTitle = 'Auditoría del Síndrome del Impostor y Bóveda de Logros'; T.es.calcBtn = 'Identificar Mi Arquetipo'; T.es.back = '← Catálogo de herramientas';
  T.pt.heroTitle = 'Auditoria da Síndrome do Impostor e Cofre de Provas'; T.pt.calcBtn = 'Identificar Meu Arquétipo'; T.pt.back = '← Catálogo de Ferramentas';
  T.de.heroTitle = 'Hochstapler-Syndrom-Audit & Erfolgs-Tresor'; T.de.calcBtn = 'Mein Muster analysieren'; T.de.back = '← Tool-Katalog';
  T.fr.heroTitle = 'Audit Syndrome de l’Imposteur & Coffre de Preuves'; T.fr.calcBtn = 'Identifier Mon Archétype'; T.fr.back = '← Catalogue d’outils';
  T.ru.heroTitle = 'Аудит синдрома самозванца и хранилище фактов'; T.ru.calcBtn = 'Определить мой архетип'; T.ru.back = '← Каталог инструментов';
  T.hi.heroTitle = 'इम्पोस्टर सिंड्रोम ऑडिट और प्रमाण वॉल्ट'; T.hi.calcBtn = 'मेरा पैटर्न पहचानें'; T.hi.back = '← टूल कैटलॉग';
  T.id.heroTitle = 'Audit Sindrom Penipu & Brankas Bukti Diri'; T.id.calcBtn = 'Identifikasi Pola Saya'; T.id.back = '← Katalog Alat';
  T.tr.heroTitle = 'İmposter Sendromu Denetimi ve Kanıt Kasası'; T.tr.calcBtn = 'Arketipimi Belirle'; T.tr.back = '← Araç Kataloğu';

  var currentLang = 'en';
  var answers = [1, 1, 1, 1, 1];
  var proofs = [];
  var hasCompletedOnce = false;

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
        tool_slug: 'imposter-syndrome-audit',
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

  function renderScenarios() {
    var d = dict(currentLang);
    var container = document.getElementById('scenarioList');
    if (!container) return;
    container.innerHTML = '';
    var qs = d.qs || T.en.qs;
    var opts = d.opts || T.en.opts;
    qs.forEach(function (qText, idx) {
      var card = document.createElement('div'); card.className = 'scenario-item';
      var q = document.createElement('div'); q.className = 'scenario-q'; q.textContent = qText;
      var row = document.createElement('div'); row.className = 'opt-row';
      opts.forEach(function (label, val) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'opt-btn' + (answers[idx] === val ? ' active' : '');
        btn.textContent = label;
        btn.setAttribute('aria-pressed', answers[idx] === val ? 'true' : 'false');
        btn.addEventListener('click', function () {
          answers[idx] = val;
          row.querySelectorAll('.opt-btn').forEach(function (b, bi) {
            b.classList.toggle('active', bi === val);
            b.setAttribute('aria-pressed', bi === val ? 'true' : 'false');
          });
          saveState(false);
        });
        row.appendChild(btn);
      });
      card.appendChild(q); card.appendChild(row);
      container.appendChild(card);
    });
  }

  function renderProofs() {
    var ul = document.getElementById('proofList');
    if (!ul) return;
    ul.innerHTML = '';
    proofs.forEach(function (txt, idx) {
      var li = document.createElement('li');
      li.className = 'proof-item';
      var span = document.createElement('span');
      // XSS-safe textContent only
      span.textContent = '✓ ' + txt;
      var del = document.createElement('button');
      del.type = 'button';
      del.className = 'proof-del';
      del.setAttribute('aria-label', 'Remove proof');
      del.textContent = '×';
      del.addEventListener('click', function () {
        proofs.splice(idx, 1);
        renderProofs();
        syncProofMeter();
        saveState(true);
      });
      li.appendChild(span);
      li.appendChild(del);
      ul.appendChild(li);
    });
    syncProofMeter();
  }

  function syncProofMeter() {
    var countEl = document.getElementById('proofCountText');
    var barEl = document.getElementById('barProof');
    if (countEl) countEl.textContent = String(proofs.length);
    if (barEl) barEl.style.width = Math.min(100, proofs.length * 34) + '%';
  }

  function calculate(isUserAction) {
    var d = dict(currentLang);
    var maxVal = -1, topIdx = 0, sum = 0;
    answers.forEach(function (v, i) {
      var n = Number(v) || 0;
      sum += n;
      if (n > maxVal) { maxVal = n; topIdx = i; }
    });
    var key = Q_MAP[topIdx] || 'perfectionist';
    var info = (d.archetypes && d.archetypes[key]) || T.en.archetypes[key];
    var intensityPct = Math.round((sum / 15) * 100);

    document.getElementById('verdictTitle').textContent = info[0];
    document.getElementById('verdictDesc').textContent = info[1];
    document.getElementById('pctIntensity').textContent = intensityPct + '%';
    document.getElementById('barIntensity').style.width = intensityPct + '%';
    document.getElementById('reframeQuote').textContent = info[2];
    renderProofs();

    var card = document.getElementById('resultCard');
    card.hidden = false;
    if (isUserAction) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (!hasCompletedOnce) {
        hasCompletedOnce = true;
        sendSafeEvent('imposter_audit_complete');
      }
    }
    saveState(true);
  }

  function addProof() {
    var inp = document.getElementById('proofInput');
    if (!inp) return;
    var val = inp.value.trim().slice(0, 180);
    if (!val) return;
    proofs.push(val);
    proofs = proofs.slice(-10);
    inp.value = '';
    renderProofs();
    saveState(true);
  }

  function saveState(completed) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        answers: answers,
        proofs: proofs,
        completed: Boolean(completed || (document.getElementById('resultCard') && !document.getElementById('resultCard').hidden))
      }));
    } catch (e) {}
  }

  function restoreState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (p && Array.isArray(p.answers) && p.answers.length === 5) answers = p.answers.map(function (n) { return Math.max(0, Math.min(3, Number(n) || 0)); });
      if (p && Array.isArray(p.proofs)) proofs = p.proofs.filter(function (s) { return typeof s === 'string'; }).slice(-10);
      renderScenarios();
      if (p && p.completed) calculate(false);
    } catch (e) {}
  }

  function resetAll() {
    answers = [1, 1, 1, 1, 1];
    proofs = [];
    document.getElementById('resultCard').hidden = true;
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    renderScenarios();
    renderProofs();
    sendSafeEvent('imposter_audit_reset');
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
    var inp = document.getElementById('proofInput');
    if (inp) inp.placeholder = d.placeholder;
    document.getElementById('langSelect').value = currentLang;
    document.getElementById('backLink')?.setAttribute('href', '/portal/tools/?lang=' + currentLang);
    document.getElementById('bridgeWork')?.setAttribute('href', '/work-style/?lang=' + currentLang + '&source=imposter_audit_bridge');
    document.getElementById('bridgeCbt')?.setAttribute('href', '/portal/tools/cognitive-distortion-reframer.html?lang=' + currentLang + '&source=imposter_audit_bridge');
    document.getElementById('bridgeProc')?.setAttribute('href', '/portal/tools/procrastination-root-decoder.html?lang=' + currentLang + '&source=imposter_audit_bridge');
    document.querySelector('.revenue-sticky-cta')?.setAttribute('href', '/work-style/?lang=' + currentLang + '&source=imposter_audit_sticky');
    renderScenarios();
    if (!document.getElementById('resultCard').hidden) calculate(false);
  }

  function downloadCard() {
    var d = dict(currentLang);
    if (!window.DopaBrainStoryCard) return;
    var pct = parseInt(document.getElementById('pctIntensity')?.textContent || '50', 10) || 50;
    var ok = window.DopaBrainStoryCard.downloadStoryCard({
      slug: 'imposter-syndrome-audit',
      badge: d.kicker,
      emoji: '🛡️',
      toolName: d.heroTitle,
      headline: document.getElementById('verdictTitle')?.textContent || '',
      subtitle: document.getElementById('verdictDesc')?.textContent || '',
      accent: '#8b5cf6',
      accent2: '#f59e0b',
      metrics: [
        { label: d.meterIntensity, pct: pct, color: '#a78bfa' },
        { label: d.meterProof, pct: Math.min(100, proofs.length * 34), valueText: String(proofs.length), color: '#fbbf24' }
      ],
      takeawayLabel: d.reframeTitle,
      takeaway: document.getElementById('reframeQuote')?.textContent || '',
      footerUrl: 'dopabrain.com/portal/tools/imposter-syndrome-audit.html'
    });
    if (ok) showToast(d.cardSaved);
  }

  function copySummary() {
    var d = dict(currentLang);
    var txt = [d.heroTitle, document.getElementById('verdictTitle')?.textContent || '', document.getElementById('reframeQuote')?.textContent || '', 'https://dopabrain.com/portal/tools/imposter-syndrome-audit.html?lang=' + currentLang].join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { showToast(d.copied); }).catch(function () {});
    else showToast(d.copied);
  }

  function shareTool() {
    var d = dict(currentLang);
    var url = 'https://dopabrain.com/portal/tools/imposter-syndrome-audit.html?lang=' + currentLang;
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
    restoreState();
    sendSafeEvent('imposter_audit_view');

    document.getElementById('langSelect')?.addEventListener('change', function (e) {
      var next = e.target.value;
      try { var u = new URL(window.location.href); u.searchParams.set('lang', next); window.history.replaceState({}, '', u.toString()); } catch (err) {}
      applyLanguage(next);
    });
    document.getElementById('calcBtn')?.addEventListener('click', function () { calculate(true); });
    document.getElementById('resetBtn')?.addEventListener('click', resetAll);
    document.getElementById('addProofBtn')?.addEventListener('click', addProof);
    document.getElementById('storyBtn')?.addEventListener('click', downloadCard);
    document.getElementById('copyBtn')?.addEventListener('click', copySummary);
    document.getElementById('shareBtn')?.addEventListener('click', shareTool);
  });
})();
