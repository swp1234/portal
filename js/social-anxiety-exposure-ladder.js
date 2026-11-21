/* Social Anxiety & CBT Exposure Ladder Builder
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Social Anxiety & CBT Exposure Ladder Builder | DopaBrain',
      metaDesc: 'Free 12-language CBT Social Anxiety Exposure Ladder Builder. Rate 6 social situations on a 0-100 SUDS scale to auto-sort a gentle step-by-step confidence ladder.',
      skip: 'Skip to Exposure Ladder', back: '← Mental Wellness Lab', langLabel: 'Language:',
      kicker: 'CBT GRADUAL CONFIDENCE LADDER', heroTitle: 'Social Anxiety & Exposure Ladder Builder',
      heroLead: 'Build social ease one manageable rung at a time. Rate 6 everyday social situations from 0 to 100 (SUDS) to auto-sort your gentle CBT confidence ladder and pick 1 low-pressure micro-rep for this week.',
      chip1: '0–100 SUDS Scale', chip2: 'Auto-Sorted Ladder', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • RATE ANXIETY LEVEL (SUDS 0–100)',
      step1Title: 'How intense does each social situation feel right now?',
      step1Sub: '0 = totally relaxed, 100 = peak dread. Everything stays private on your device.',
      repLabel: 'Optional: 1 tiny, low-pressure social rep I will try this week (stays 100% local):',
      buildBtn: 'Build My Sorted Confidence Ladder', resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR PERSONALIZED CBT EXPOSURE HIERARCHY',
      repBoxTitle: 'My 1 Gentle Social Rep This Week',
      ladderTitle: 'Your Auto-Sorted Ladder (Easiest → Stretch Goal)',
      anchorTitle: '30-Second Pre-Event Spotlight Shift',
      storyBtn: 'Save 1080×1920 Ladder Card (PNG)', copyBtn: 'Copy Ladder Summary', shareBtn: 'Share Tool',
      bridgeRsdTitle: 'RSD Coping Audit', bridgeRsdDesc: 'Cool down sharp fear of awkwardness or rejection in 90 seconds.',
      bridgeBatTitle: 'Social Battery Calculator', bridgeBatDesc: 'Plan quiet decompression time and a polite early-exit line.',
      bridgeVagalTitle: 'Vagal Nervous System Reset', bridgeVagalDesc: 'Lower heart rate before walking into a room with 60s cyclic sighing.',
      faqTitle: 'Frequently Asked Questions', refTitle: 'Psychological Frameworks & References',
      discTitle: 'Editorial Self-Reflection Disclaimer:',
      discText: 'This CBT exposure ladder builder is an educational confidence-planning aid, not clinical therapy or medical diagnosis.',
      privacy: 'Privacy Policy', terms: 'Terms',
      stickyTitle: 'Heart racing before a social event?',
      stickySub: 'Use our 60-second Vagal Reset & Physiological Sigh pacer',
      stickyBtn: 'Vagal Reset →',
      copied: 'Exposure ladder summary copied!', shared: 'Tool link copied!', savedCard: '1080×1920 Confidence Ladder Card saved!'
    },
    ko: {
      title: '사회불안 CBT 점진적 노출 사다리 빌더 (SUDS 0–100) | DopaBrain',
      metaDesc: '6가지 대인 상황의 긴장도(SUDS 0–100)를 로컬에서 평가하면 가장 부담 적은 1단계부터 도전 목표까지 나만의 CBT 자신감 사다리를 자동 정렬해 드립니다.',
      skip: '노출 사다리로 이동', back: '← 멘탈 웰니스 랩', langLabel: '언어:',
      kicker: 'CBT 점진적 자신감 사다리', heroTitle: '사회불안 노출 사다리 빌더',
      heroLead: '무작정 큰 자리에 뛰어들지 마세요. 일상적인 대인 상황 6가지를 0~100점(SUDS)으로 평가하면 가장 편안한 첫 계단부터 단계별 CBT 자신감 사다리를 자동으로 정렬해 드립니다.',
      chip1: '0–100 SUDS 척도', chip2: '자동 단계 정렬', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 상황별 긴장도 평가 (SUDS 0–100)',
      step1Title: '각 대인 상황이 지금 얼마나 긴장되나요?',
      step1Sub: '0 = 완전히 편안함, 100 = 극도의 긴장. 모든 점수는 내 기기 안에서만 처리됩니다.',
      repLabel: '선택: 이번 주 가볍게 시도할 초소형 대인 연습 1가지 (100% 로컬):',
      buildBtn: '나만의 자신감 사다리 자동 정렬하기', resetBtn: '초기화',
      resultBadge: '2단계 • 나의 맞춤형 CBT 점진적 노출 사다리',
      repBoxTitle: '이번 주 나의 가벼운 대인 연습 1가지',
      ladderTitle: '자동 정렬된 자신감 사다리 (가장 쉬움 → 도전 목표)',
      anchorTitle: '입장 전 30초 "조명 효과" 시선 전환 문장',
      storyBtn: '1080×1920 사다리 카드 저장 (PNG)', copyBtn: '사다리 요약 복사', shareBtn: '도구 공유',
      bridgeRsdTitle: '거절 민감성(RSD) 감사', bridgeRsdDesc: '어색함이나 평가에 대한 따가운 불안을 90초 안에 진정시킵니다.',
      bridgeBatTitle: '소셜 배터리 계산기', bridgeBatDesc: '모임 후 필요한 혼자만의 회복 시간과 정중한 귀가 멘트를 준비합니다.',
      bridgeVagalTitle: '미주신경·신경계 리셋', bridgeVagalDesc: '입장 전 60초 생리적 한숨 호흡으로 심박수를 빠르게 낮춥니다.',
      faqTitle: '자주 묻는 질문', refTitle: '심리학적 프레임워크 및 참고문헌',
      discTitle: '편집 및 자기성찰 안내:',
      discText: '본 CBT 노출 사다리 도구는 교육용 자기성찰 계획 도구이며 임상 치료나 의학적 진단이 아닙니다.',
      privacy: '개인정보처리방침', terms: '이용약관',
      stickyTitle: '모임 직전 심장이 빠르게 뛰나요?',
      stickySub: '60초 미주신경 리셋과 생리적 한숨 페이서로 먼저 진정하세요',
      stickyBtn: '신경계 리셋 →',
      copied: '노출 사다리 요약을 복사했습니다!', shared: '도구 링크를 복사했습니다!', savedCard: '1080×1920 자신감 사다리 카드를 저장했습니다!'
    },
    zh: { title: '社交焦虑 CBT 渐进暴露阶梯生成器 | DopaBrain', heroTitle: '社交焦虑暴露阶梯生成器', buildBtn: '生成我的渐进自信阶梯', resetBtn: '重置', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制', shareBtn: '分享', back: '← 心理实验室', stickyBtn: '迷走神经重置 →' },
    ja: { title: '社交不安 CBT エクスポージャー階段ビルダー | DopaBrain', heroTitle: '社交不安・自信ステップ階段', buildBtn: 'ステップ階段を自動作成', resetBtn: 'リセット', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ウェルネスラボ', stickyBtn: '神経リセット →' },
    es: { title: 'Constructor de Escalera de Exposición CBT (Ansiedad Social) | DopaBrain', heroTitle: 'Escalera de Exposición Social', buildBtn: 'Ordenar mi escalera', resetBtn: 'Reiniciar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Laboratorio', stickyBtn: 'Reset Vagal →' },
    pt: { title: 'Construtor de Escada de Exposição (Ansiedade Social) | DopaBrain', heroTitle: 'Escada de Confiança Social', buildBtn: 'Montar minha escada', resetBtn: 'Redefinir', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Laboratório', stickyBtn: 'Reset Vagal →' },
    de: { title: 'Soziale Angst CBT-Expositionsleiter Builder | DopaBrain', heroTitle: 'CBT-Expositionsleiter (Soziale Angst)', buildBtn: 'Leiter automatisch sortieren', resetBtn: 'Zurücksetzen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Wellness-Lab', stickyBtn: 'Vagus-Reset →' },
    fr: { title: 'Échelle d’Exposition TCC (Anxiété Sociale) | DopaBrain', heroTitle: 'Échelle de Confiance Sociale', buildBtn: 'Créer mon échelle triée', resetBtn: 'Réinitialiser', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Laboratoire', stickyBtn: 'Reset Vagal →' },
    ru: { title: 'Лестница экспозиции КПТ при социофобии | DopaBrain', heroTitle: 'Лестница социальной уверенности', buildBtn: 'Построить лестницу', resetBtn: 'Сбросить', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Лаборатория', stickyBtn: 'Сброс нервов →' },
    hi: { title: 'सोशल एंग्ज़ायटी CBT एक्सपोज़र लैडर बिल्डर | DopaBrain', heroTitle: 'सोशल एंग्ज़ायटी कॉन्फिडेंस लैडर', buildBtn: 'मेरी सीढ़ी बनाएँ', resetBtn: 'रीसेट', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← वेलनेस लैब', stickyBtn: 'वैगल रीसेट →' },
    id: { title: 'Pembuat Tangga Eksposur CBT Kecemasan Sosial | DopaBrain', heroTitle: 'Tangga Kepercayaan Sosial CBT', buildBtn: 'Susun Tangga Saya', resetBtn: 'Reset', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Lab Kesehatan', stickyBtn: 'Reset Vagal →' },
    tr: { title: 'Sosyal Kaygı BDT Maruz Kalma Merdiveni | DopaBrain', heroTitle: 'Sosyal Güven Merdiveni (BDT)', buildBtn: 'Merdivenimi Sırala', resetBtn: 'Sıfırla', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Laboratuvar', stickyBtn: 'Vagal Sıfırlama →' }
  };

  var SCENARIOS = [
    { id: 'cashier', en: 'Brief eye contact & "thank you" with a barista or cashier', ko: '카페·계산대에서 눈 맞추고 짧게 인사하기' },
    { id: 'message', en: 'Sending a casual check-in text to a friend first', ko: '지인이나 친구에게 먼저 가벼운 안부 메시지 보내기' },
    { id: 'smalltalk', en: '2-minute small talk with a coworker or neighbor', ko: '동료·이웃과 2분 정도 가벼운 일상 대화 나누기' },
    { id: 'meeting', en: 'Asking one brief question in a group meeting or class', ko: '회의나 모임에서 짧은 질문 1가지 하기' },
    { id: 'phone', en: 'Making an unplanned phone call (appointment or inquiry)', ko: '예약·문의 등 직접 전화 걸어 용건 말하기' },
    { id: 'event', en: 'Attending a social gathering for 45 minutes & chatting with 1 new person', ko: '모임에 45분 참석해 새로운 사람 1명과 대화하기' }
  ];

  var STORAGE_KEY = 'dopabrain_social_ladder_v1';
  var state = {
    lang: 'en',
    suds: { cashier: 20, message: 30, smalltalk: 45, meeting: 60, phone: 55, event: 75 },
    rep: ''
  };

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function sendSafeEvent(avgBand) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'social_ladder_complete', {
        tool_slug: 'social-anxiety-exposure-ladder',
        suds_band: avgBand,
        locale: state.lang
      });
    }
  }

  function buildSliders() {
    var list = document.getElementById('sudsList');
    if (!list) return;
    list.textContent = '';
    SCENARIOS.forEach(function (sc) {
      var row = document.createElement('div');
      row.className = 'suds-row';
      var head = document.createElement('div');
      head.className = 'suds-head';
      var lbl = document.createElement('label');
      lbl.setAttribute('for', 'suds-' + sc.id);
      lbl.textContent = state.lang === 'ko' ? sc.ko : sc.en;
      var val = document.createElement('span');
      val.className = 'suds-val';
      val.textContent = state.suds[sc.id] + ' / 100';
      head.appendChild(lbl);
      head.appendChild(val);

      var inp = document.createElement('input');
      inp.type = 'range';
      inp.min = '0';
      inp.max = '100';
      inp.step = '5';
      inp.value = String(state.suds[sc.id]);
      inp.id = 'suds-' + sc.id;
      inp.className = 'suds-range';
      inp.addEventListener('input', function () {
        state.suds[sc.id] = Number(inp.value);
        val.textContent = inp.value + ' / 100';
        saveLocal();
      });

      row.appendChild(head);
      row.appendChild(inp);
      list.appendChild(row);
    });
  }

  function getSortedLadder() {
    return SCENARIOS.map(function (sc) {
      return {
        id: sc.id,
        label: state.lang === 'ko' ? sc.ko : sc.en,
        suds: Number(state.suds[sc.id]) || 0
      };
    }).sort(function (a, b) { return a.suds - b.suds; });
  }

  function renderResult(emit) {
    var inp = document.getElementById('repInput');
    state.rep = inp ? inp.value.trim() : '';
    var sorted = getSortedLadder();
    var avg = Math.round(sorted.reduce(function (a, b) { return a + b.suds; }, 0) / sorted.length);
    var band = avg >= 65 ? 'high' : avg >= 35 ? 'moderate' : 'mild';
    var isKo = state.lang === 'ko';

    document.getElementById('verdictTitle').textContent = isKo
      ? '1단계("가장 낮은 계단")부터 가볍게 성공 경험을 쌓으세요'
      : 'Start on Rung #1 — Train Safety Through Small Reps';
    document.getElementById('verdictDesc').textContent = isKo
      ? '평균 긴장도는 ' + avg + '/100입니다. 25~45점 구간의 계단을 주 2~3회 반복해 뇌가 "어색해도 안전하다"는 데이터를 쌓으면 다음 계단이 훨씬 쉬워집니다.'
      : 'Your average SUDS rating is ' + avg + '/100. Repeat your easiest 1–2 rungs twice this week until distress drops by half before climbing to the next rung.';

    var repBox = document.getElementById('repBox');
    var repOut = document.getElementById('repOut');
    if (state.rep) {
      repOut.textContent = state.rep;
      repBox.hidden = false;
    } else {
      repOut.textContent = '';
      repBox.hidden = true;
    }

    var ol = document.getElementById('ladderList');
    ol.textContent = '';
    sorted.forEach(function (item, idx) {
      var li = document.createElement('li');
      li.className = 'ladder-rung';
      var txt = document.createElement('span');
      txt.textContent = (idx + 1) + '. ' + item.label;
      var pill = document.createElement('span');
      pill.className = 'rung-pill';
      pill.textContent = 'SUDS ' + item.suds;
      li.appendChild(txt);
      li.appendChild(pill);
      ol.appendChild(li);
    });

    document.getElementById('anchorScript').textContent = isKo
      ? '"사람들은 내가 생각하는 것보다 자기 자신에게 훨씬 더 집중해 있다. 완벽하게 말할 필요 없고, 호기심으로 질문 1개만 던지면 충분하다."'
      : '"Other people are mostly thinking about themselves, not grading me. My only goal is curiosity—not a flawless performance."';

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emit) sendSafeEvent(band);
  }

  function saveLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ suds: state.suds, rep: state.rep })); } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (p.suds && typeof p.suds === 'object') state.suds = Object.assign(state.suds, p.suds);
      if (typeof p.rep === 'string') state.rep = p.rep;
    } catch (_) {}
  }

  function applyI18n() {
    document.documentElement.lang = state.lang;
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (!val) return;
      if (el.tagName === 'META') el.setAttribute('content', val);
      else el.textContent = val;
    });
    var back = document.getElementById('backLink');
    if (back) back.href = state.lang === 'en' ? '/portal/tools/wellness-lab.html' : '/portal/tools/wellness-lab.html?lang=' + state.lang;
    buildSliders();
    if (!document.getElementById('resultCard').hidden) renderResult(false);
  }

  function showToast(msg) {
    var toast = document.getElementById('statusToast');
    if (toast) toast.textContent = msg;
  }

  function init() {
    state.lang = detectLang();
    loadLocal();
    var select = document.getElementById('langSelect');
    if (select) {
      select.value = state.lang;
      select.addEventListener('change', function () {
        state.lang = select.value;
        var u = new URL(window.location.href);
        u.searchParams.set('lang', state.lang);
        window.history.replaceState({}, '', u.toString());
        applyI18n();
      });
    }
    var repInput = document.getElementById('repInput');
    if (repInput && state.rep) repInput.value = state.rep;

    document.getElementById('buildBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('resetBtn').addEventListener('click', function () {
      state.suds = { cashier: 20, message: 30, smalltalk: 45, meeting: 60, phone: 55, event: 75 };
      state.rep = '';
      if (repInput) repInput.value = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      buildSliders();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var lines = getSortedLadder().map(function (it, i) { return (i + 1) + '. [' + it.suds + '] ' + it.label; }).join('\n');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(lines).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = 'https://dopabrain.com/portal/tools/social-anxiety-exposure-ladder.html' + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var sorted = getSortedLadder();
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: 'social-anxiety-exposure-ladder',
        filename: 'dopabrain-confidence-ladder-card.png',
        badge: 'CBT CONFIDENCE LADDER',
        headline: 'Rung #1: ' + sorted[0].label.slice(0, 44),
        subtitle: 'Gentle Step-by-Step SUDS Hierarchy',
        metrics: [
          { label: 'Start SUDS', value: String(sorted[0].suds) },
          { label: 'Stretch', value: String(sorted[sorted.length - 1].suds) }
        ],
        quote: document.getElementById('anchorScript').textContent,
        accent: '#6366f1',
        accent2: '#06b6d4'
      });
      showToast(t('savedCard'));
    });

    window.i18n = {
      getLanguage: function () { return state.lang; },
      setLanguage: function (l) { if (SUPPORTED.indexOf(l) !== -1) { state.lang = l; applyI18n(); } },
      t: t
    };

    applyI18n();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
