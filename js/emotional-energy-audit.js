/* Emotional Energy Leak Audit & 80/20 Priority Protector
 * 100% client-side, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];

  var UI = {
    en: {
      title: 'Emotional Energy Leak Audit & 80/20 Priority Protector | DopaBrain',
      metaDesc: 'Free 12-language Emotional Energy Audit. Compare 6 invisible energy leaks against 4 daily restorers and lock in one high-leverage Stop-Doing boundary.',
      skip: 'Skip to Energy Leak Audit',
      back: '← Tools Catalog',
      langLabel: 'Language:',
      kicker: '80/20 ENERGY & BURNOUT PROTECTION',
      heroTitle: 'Emotional Energy Leak Audit',
      heroLead: 'Exhausted despite working hard? Audit 6 invisible emotional leaks against 4 daily restorers to measure your net energy ratio and lock in one liberating Stop-Doing commitment locally.',
      chip1: '6 Invisible Leaks',
      chip2: '4 Daily Restorers',
      chip3: '100% Private (Local)',
      step1Badge: "STEP 1 • AUDIT THIS WEEK'S ENERGY LEAKS",
      step1Title: 'Which invisible leaks drained your week?',
      step1Sub: 'Tap every recurring drain you noticed over the past 7 days.',
      step2Badge: 'STEP 2 • CHECK YOUR ACTIVE RESTORERS',
      step2Title: 'Which genuine energy restorers happened this week?',
      step2Sub: 'Select the recharging anchors you actually protected recently.',
      stopLabel: 'Optional: 1 low-value drain I will STOP doing this week (stays 100% local):',
      auditBtn: 'Calculate Net Energy Balance',
      resetBtn: 'Reset',
      resultBadge: 'STEP 3 • YOUR 80/20 ENERGY PROTECTION PLAN',
      stopCardTitle: 'My 1 Stop-Doing Boundary This Week',
      meterLeak: 'Energy Leak Pressure',
      meterRestore: 'Restoration Reserve',
      planTitle: '3 High-Leverage Energy Protections',
      storyBtn: 'Save 1080×1920 Story Card (PNG)',
      copyBtn: 'Copy Energy Plan',
      shareBtn: 'Share Tool',
      bridgeBurnoutTitle: 'Burnout vs. Stress Check',
      bridgeBurnoutDesc: 'Check whether exhaustion is temporary overload or deep burnout.',
      bridgeBoundaryTitle: 'Boundary Script Generator',
      bridgeBoundaryDesc: 'Say no cleanly to energy-draining requests without guilt.',
      bridgeDecisionTitle: 'Weighted Decision Matrix',
      bridgeDecisionDesc: 'Cut low-ROI commitments objectively in 2 minutes.',
      refTitle: 'Scientific Frameworks & References',
      discTitle: 'Editorial Self-Reflection Disclaimer',
      discText: 'This personal energy audit is an educational productivity and burnout-prevention reflection aid, not medical or psychological diagnosis.',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      stickyTitle: 'Check for hidden burnout depletion',
      stickySub: 'Run our 2-minute Burnout vs. Stress Differential Matrix',
      stickyBtn: 'Burnout Matrix →',
      copied: '80/20 energy protection plan copied!',
      shared: 'Tool link copied!',
      savedCard: '1080×1920 Energy Audit Card saved!'
    },
    ko: {
      title: '감정 에너지 누수 감사 & 80/20 중단 목록 빌더 | DopaBrain',
      metaDesc: '6가지 보이지 않는 감정 에너지 누수와 4가지 회복 앵커를 비교해 순에너지 균형을 계산하고, 이번 주 당장 멈출 1가지 중단 경계를 설계하세요.',
      skip: '감정 에너지 누수 감사로 이동',
      back: '← 도구 목록',
      langLabel: '언어:',
      kicker: '80/20 에너지 & 번아웃 방어 랩',
      heroTitle: '감정 에너지 누수 감사',
      heroLead: '열심히 사는데도 늘 방전된 느낌인가요? 이번 주 나를 갉아먹은 보이지 않는 누수 6가지와 회복 습관 4가지를 대조하고, 에너지를 되찾을 1가지 "안 하기(Stop-Doing)" 약속을 정하세요.',
      chip1: '6가지 보이지 않는 누수',
      chip2: '4가지 회복 앵커',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 이번 주 감정 에너지 누수 점검',
      step1Title: '이번 주 어떤 보이지 않는 누수가 에너지를 깎아먹었나요?',
      step1Sub: '최근 7일 동안 반복적으로 나를 지치게 만든 요인을 모두 선택하세요.',
      step2Badge: '2단계 • 실제로 작동한 회복 앵커 체크',
      step2Title: '이번 주 나를 진짜 충전시켜 준 회복 습관은 무엇인가요?',
      step2Sub: '실제로 지켰던 회복 활동을 선택하세요.',
      stopLabel: '선택: 이번 주부터 당장 멈출(Stop-Doing) 저가치 소모 1가지 (100% 로컬):',
      auditBtn: '순에너지 균형 계산하기',
      resetBtn: '초기화',
      resultBadge: '3단계 • 나의 80/20 에너지 방어 플랜',
      stopCardTitle: '이번 주 나의 1가지 중단(Stop-Doing) 경계',
      meterLeak: '에너지 누수 압력',
      meterRestore: '에너지 회복 예비력',
      planTitle: '가장 효과 큰 에너지 방어 전략 3가지',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)',
      copyBtn: '전략 복사',
      shareBtn: '도구 공유',
      bridgeBurnoutTitle: '번아웃 vs 스트레스 감별',
      bridgeBurnoutDesc: '일시적 과부하인지 만성 번아웃 고갈인지 2분 만에 구분합니다.',
      bridgeBoundaryTitle: '거절·경계선 스크립트 빌더',
      bridgeBoundaryDesc: '에너지를 뺏는 부탁을 죄책감 없이 정중하고 단호하게 거절합니다.',
      bridgeDecisionTitle: '가중치 의사결정 매트릭스',
      bridgeDecisionDesc: '저효율 일정과 과제를 2분 만에 객관적으로 정리합니다.',
      refTitle: '과학적 프레임워크 및 참고문헌',
      discTitle: '편집 및 자기성찰 안내',
      discText: '본 에너지 누수 감사는 교육용 생산성·번아웃 예방 자기성찰 도구이며 의학적 또는 심리학적 진단이 아닙니다.',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      stickyTitle: '숨은 번아웃 고갈 여부를 확인해 보세요',
      stickySub: '2분 번아웃 vs 스트레스 감별 매트릭스로 회복 방향을 잡으세요',
      stickyBtn: '번아웃 매트릭스 →',
      copied: '80/20 에너지 방어 플랜을 복사했습니다!',
      shared: '도구 링크를 복사했습니다!',
      savedCard: '1080×1920 에너지 감사 카드를 저장했습니다!'
    },
    zh: { title: '情绪能量泄漏审计与 80/20 止损清单 | DopaBrain', heroTitle: '情绪能量泄漏审计', auditBtn: '计算净能量平衡', resetBtn: '重置', storyBtn: '保存 1080×1920 卡片 (PNG)', copyBtn: '复制计划', shareBtn: '分享', back: '← 工具目录', stickyBtn: '倦怠鉴别 →' },
    ja: { title: '感情エネルギー漏れ診断＆80/20やらないことリスト | DopaBrain', heroTitle: '感情エネルギー漏れ診断', auditBtn: 'エネルギー収支を計算', resetBtn: 'リセット', storyBtn: '1080×1920 カード保存 (PNG)', copyBtn: 'コピー', shareBtn: '共有', back: '← ツール一覧', stickyBtn: 'バーンアウト診断 →' },
    es: { title: 'Auditoría de Fugas de Energía Emocional (80/20) | DopaBrain', heroTitle: 'Auditoría de Fugas de Energía', auditBtn: 'Calcular balance energético', resetBtn: 'Reiniciar', storyBtn: 'Guardar tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartir', back: '← Catálogo', stickyBtn: 'Matriz Burnout →' },
    pt: { title: 'Auditoria de Vazamentos de Energia Emocional | DopaBrain', heroTitle: 'Auditoria de Vazamentos de Energia', auditBtn: 'Calcular saldo de energia', resetBtn: 'Redefinir', storyBtn: 'Salvar cartão 1080×1920 (PNG)', copyBtn: 'Copiar', shareBtn: 'Compartilhar', back: '← Catálogo', stickyBtn: 'Matriz Burnout →' },
    de: { title: 'Emotionales Energie-Leck-Audit & 80/20-Schutz | DopaBrain', heroTitle: 'Energie-Leck-Audit (80/20)', auditBtn: 'Energiebilanz berechnen', resetBtn: 'Zurücksetzen', storyBtn: '1080×1920 Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen', back: '← Katalog', stickyBtn: 'Burnout-Matrix →' },
    fr: { title: 'Audit des Fuites d’Énergie Émotionnelle (80/20) | DopaBrain', heroTitle: 'Audit des Fuites d’Énergie', auditBtn: 'Calculer mon bilan d’énergie', resetBtn: 'Réinitialiser', storyBtn: 'Enregistrer carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager', back: '← Catalogue', stickyBtn: 'Matrice Burnout →' },
    ru: { title: 'Аудит утечек эмоциональной энергии (80/20) | DopaBrain', heroTitle: 'Аудит утечек энергии', auditBtn: 'Рассчитать баланс энергии', resetBtn: 'Сбросить', storyBtn: 'Сохранить карточку (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться', back: '← Каталог', stickyBtn: 'Матрица выгорания →' },
    hi: { title: 'इमोशनल एनर्जी लीक ऑडिट और 80/20 प्रोटेक्टर | DopaBrain', heroTitle: 'एनर्जी लीक ऑडिट (80/20)', auditBtn: 'ऊर्जा संतुलन देखें', resetBtn: 'रीसेट', storyBtn: '1080×1920 कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें', back: '← कैटलॉग', stickyBtn: 'बर्नआउट मैट्रिक्स →' },
    id: { title: 'Audit Kebocoran Energi Emosional & Prioritas 80/20 | DopaBrain', heroTitle: 'Audit Kebocoran Energi (80/20)', auditBtn: 'Hitung Saldo Energi', resetBtn: 'Reset', storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin', shareBtn: 'Bagikan', back: '← Katalog', stickyBtn: 'Matriks Burnout →' },
    tr: { title: 'Duygusal Enerji Sızıntısı Denetimi (80/20) | DopaBrain', heroTitle: 'Enerji Sızıntısı Denetimi', auditBtn: 'Net Enerji Dengesini Hesapla', resetBtn: 'Sıfırla', storyBtn: '1080×1920 Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş', back: '← Katalog', stickyBtn: 'Tükenmişlik Matrisi →' }
  };

  var LEAKS = [
    { id: 'open_loops', emoji: '📂', enName: 'Unfinished Open Loops', koName: '미결 업무·열린 탭 누적', enSub: 'Half-done tasks silently draining background RAM', koSub: '끝내지 못한 자잘한 일들이 계속 머릿속 RAM 점유' },
    { id: 'obligations', emoji: '🤝', enName: 'Guilt-Driven "Yes" Commitments', koName: '죄책감 때문에 수락한 일정', enSub: 'Low-value favors or meetings accepted to avoid friction', koSub: '거절하기 미안해서 떠안은 저효율 부탁·회의' },
    { id: 'notifications', emoji: '📱', enName: 'Always-On Notifications & Feeds', koName: '상시 알림·피드 확인 습관', enSub: 'Fragmented attention across chat, email, and short-form feeds', koSub: '메신저·이메일·숏폼에 잘게 쪼개진 주의력' },
    { id: 'conflict', emoji: '⚡', enName: 'Unspoken Resentment / Friction', koName: '말하지 못한 서운함·관계 마찰', enSub: 'Rehearsing conversations without setting a clean limit', koSub: '경계를 세우지 못한 채 속으로만 곱씹는 갈등' },
    { id: 'perfection', emoji: '🔍', enName: 'Over-Polishing Low-Impact Work', koName: '중요도 낮은 일에 완벽주의 과투자', enSub: 'Spending 80% effort on 20%-value tweaks', koSub: '핵심이 아닌 디테일에 에너지를 80% 소진함' },
    { id: 'sleep_debt', emoji: '🌙', enName: 'Late-Night Revenge Scrolling', koName: '야간 보복성 취침 미루기', enSub: 'Trading tomorrow\'s baseline energy for late screen time', koSub: '내일 에너지를 당겨 써서 밤늦게 화면 보는 습관' }
  ];

  var RESTORERS = [
    { id: 'deep_sleep', emoji: '😴', enName: 'Consistent 7–8h Sleep Window', koName: '규칙적인 7~8시간 숙면', enSub: 'Protected bedtime without phone-in-bed doomscrolling', koSub: '침대 위 스마트폰 없이 지킨 안정적 수면 리듬' },
    { id: 'movement', emoji: '🚶', enName: 'Daily Sunlight Walk / Movement', koName: '햇빛 산책 또는 가벼운 신체 활동', enSub: '20+ minutes outdoors resetting stress hormones', koSub: '코르티솔을 낮추는 20분 이상 야외 걷기·운동' },
    { id: 'solitude', emoji: '🧘', enName: 'Unplugged Quiet / Deep Focus', koName: '방해 없는 고요한 몰입·휴식 시간', enSub: 'Zero-notification block for rest or meaningful craft', koSub: '알림을 끄고 온전히 쉬거나 핵심 과제에 몰입한 시간' },
    { id: 'connection', emoji: '💛', enName: 'Low-Masking Safe Connection', koName: '눈치 보지 않는 편안한 대화·교류', enSub: 'Time with people who refill rather than drain energy', koSub: '에너지를 뺏지 않고 채워주는 사람과의 따뜻한 시간' }
  ];

  var currentLang = 'en';
  var leaks = { open_loops: true, notifications: true, obligations: true };
  var restorers = { movement: true };
  var currentResult = null;

  function detectLang() {
    try {
      var sp = new URLSearchParams(window.location.search);
      var q = (sp.get('lang') || '').toLowerCase().slice(0, 2);
      if (SUPPORTED.indexOf(q) !== -1) return q;
      var saved = (localStorage.getItem('dopabrain_lang') || '').toLowerCase().slice(0, 2);
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
      var nav = (navigator.language || 'en').toLowerCase().slice(0, 2);
      if (SUPPORTED.indexOf(nav) !== -1) return nav;
    } catch (e) {}
    return 'en';
  }

  function t(key) { return (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || key; }
  function isKo() { return currentLang === 'ko'; }

  function updateLinks() {
    var anchors = document.querySelectorAll('a[href^="/"]');
    for (var i = 0; i < anchors.length; i++) {
      var a = anchors[i];
      var raw = a.getAttribute('href');
      if (!raw || raw.indexOf('#') === 0) continue;
      try {
        var u = new URL(raw, window.location.origin);
        u.searchParams.set('lang', currentLang);
        a.setAttribute('href', u.pathname + u.search + u.hash);
      } catch (e) {}
    }
  }

  function renderGrids() {
    var lGrid = document.getElementById('leakGrid');
    if (lGrid) {
      lGrid.textContent = '';
      for (var i = 0; i < LEAKS.length; i++) {
        (function (lk) {
          var on = Boolean(leaks[lk.id]);
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'toggle-card' + (on ? ' active' : '');
          btn.setAttribute('data-leak', lk.id);
          btn.setAttribute('aria-pressed', on ? 'true' : 'false');
          var s = document.createElement('strong');
          s.textContent = lk.emoji + ' ' + (isKo() ? lk.koName : lk.enName);
          var sp = document.createElement('span');
          sp.textContent = isKo() ? lk.koSub : lk.enSub;
          btn.appendChild(s);
          btn.appendChild(sp);
          btn.addEventListener('click', function () { leaks[lk.id] = !leaks[lk.id]; renderGrids(); });
          lGrid.appendChild(btn);
        })(LEAKS[i]);
      }
    }

    var rGrid = document.getElementById('restoreGrid');
    if (rGrid) {
      rGrid.textContent = '';
      for (var j = 0; j < RESTORERS.length; j++) {
        (function (rs) {
          var on = Boolean(restorers[rs.id]);
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'toggle-card' + (on ? ' active' : '');
          btn.setAttribute('data-restore', rs.id);
          btn.setAttribute('aria-pressed', on ? 'true' : 'false');
          var s = document.createElement('strong');
          s.textContent = rs.emoji + ' ' + (isKo() ? rs.koName : rs.enName);
          var sp = document.createElement('span');
          sp.textContent = isKo() ? rs.koSub : rs.enSub;
          btn.appendChild(s);
          btn.appendChild(sp);
          btn.addEventListener('click', function () { restorers[rs.id] = !restorers[rs.id]; renderGrids(); });
          rGrid.appendChild(btn);
        })(RESTORERS[j]);
      }
    }
  }

  function toast(msg) {
    var el = document.createElement('div');
    el.className = 'wl-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 2600);
  }

  function runAudit() {
    var leakCount = LEAKS.filter(function (x) { return Boolean(leaks[x.id]); }).length;
    var restCount = RESTORERS.filter(function (x) { return Boolean(restorers[x.id]); }).length;
    var leakPct = Math.round((leakCount / LEAKS.length) * 100);
    var restorePct = Math.round((restCount / RESTORERS.length) * 100);
    var rawStop = (document.getElementById('stopDoingInput')?.value || '').trim();

    var tier = (leakPct - restorePct >= 25) ? 'deficit' : ((leakPct > 40) ? 'strained' : 'balanced');
    currentResult = { leakPct: leakPct, restorePct: restorePct, tier: tier, stopText: rawStop };
    renderResult();

    var card = document.getElementById('resultCard');
    if (card) {
      card.hidden = false;
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'energy_audit_complete', {
          event_category: 'wellness_tool',
          tool_slug: 'emotional-energy-audit',
          language: currentLang
        });
      } catch (e) {}
    }
  }

  function getPlanCopy(res) {
    if (res.tier === 'deficit') {
      return {
        title: isKo() ? '에너지 적자 구간 — 새 습관보다 누수 차단 최우선' : 'Energy Deficit — Plug Top Leaks Before Adding Goals',
        desc: isKo() ? '충전 속도보다 누수 속도가 훨씬 빠릅니다. 이번 주에는 새로운 생산성 목표를 추가하지 말고 가장 큰 에너지 구멍 1~2개를 막는 데 집중하세요.' : 'Energy is draining faster than it refills. Do not add another productivity system this week — subtract 1–2 high-drain leaks first.',
        steps: isKo() ? [
          '15분 열린 루프 청산: 미결 업무 3개를 고른 뒤 "지금 2분 완료 / 내일 일정 고정 / 아예 삭제" 중 하나로 강제 정리하세요.',
          '알림 일괄 끄기: 긴급 연락처 외 모든 앱 푸시 알림을 48시간 동안 꺼서 배경 피로를 즉시 30% 낮추세요.',
          '저가치 약속 1개 취소: 이번 주 가장 부담되는 비필수 일정 1개를 경계선 스크립트로 정중히 미루세요.'
        ] : [
          '15-Minute Open-Loop Sweep: Pick 3 nagging unfinished items and either finish in 2 minutes, schedule a date, or delete them.',
          '48-Hour Notification Freeze: Mute all non-urgent app pings to cut silent context-switching fatigue immediately.',
          'Cancel 1 Non-Essential Commitment: Reclaim one draining hour this week using a brief, guilt-free boundary.'
        ]
      };
    }
    if (res.tier === 'strained') {
      return {
        title: isKo() ? '균형 흔들림 — 80/20 에너지 보호 장치 필요' : 'Strained Balance — Protect Your Core 20% Priorities',
        desc: isKo() ? '회복 습관이 버텨주고 있지만 누수 압력도 만만치 않습니다. 중요한 20%에 에너지를 몰아주고 나머지 잡음을 줄일 시점입니다.' : 'Your restorers are buffering stress, but recurring leaks are capping your peak clarity. Tighten boundaries around your top 20% priorities.',
        steps: isKo() ? [
          '오전 90분 방어선: 하루 중 가장 맑은 첫 90분은 메신저와 회의를 닫고 핵심 과제 1개에만 투자하세요.',
          '80점 완료 규칙: 중요도가 낮은 반복 업무에는 완벽주의 대신 "80점이면 즉시 완료" 기준을 적용하세요.',
          '저녁 디지털 선셋: 취침 60분 전 화면을 내려놓아 내일의 회복 예비력을 지키세요.'
        ] : [
          'Protect the First 90 Minutes: Guard your clearest morning block for your single highest-leverage work before opening chat.',
          'Apply the 80% Good-Enough Rule: Stop over-polishing low-impact tasks so energy stays reserved for what truly matters.',
          'Lock One Restorer on Calendar: Treat your walk, quiet hour, or bedtime like an unmovable appointment.'
        ]
      };
    }
    return {
      title: isKo() ? '건전한 순에너지 흑자 — 지속 가능한 페이싱 유지' : 'Sustainable Energy Surplus — Keep Your Rhythm Protected',
      desc: isKo() ? '누수 관리와 회복 앵커가 조화롭게 작동 중입니다. 지금의 경계선과 회복 루틴을 유지하며 높은 임팩트의 일에 여유 있게 집중하세요.' : 'Your restorers outpace your drains — a rare, sustainable foundation for creative depth and calm leadership.',
      steps: isKo() ? [
        '주간 5분 점검 유지: 매주 일요일 저녁 5분만 투자해 새로운 에너지 누수가 슬그머니 들어오지 않았는지 확인하세요.',
        '핵심 회복 앵커 사수: 바빠질수록 가장 먼저 포기하기 쉬운 수면·산책·혼자만의 시간을 끝까지 지켜내세요.',
        '여유 에너지의 의도적 투자: 남은 에너지를 무의식적 소비 대신 정말 즐겁고 의미 있는 프로젝트에 배치하세요.'
      ] : [
        'Keep a 5-Minute Sunday Audit: Catch stealth obligations early before they compound into burnout.',
        'Guard Your Anchor Restorers: Never trade away your sleep or quiet walks when a busy sprint arrives.',
        'Invest Surplus Intentionally: Channel spare bandwidth into high-joy craft or relationships rather than filler tasks.'
      ]
    };
  }

  function renderResult() {
    if (!currentResult) return;
    var copy = getPlanCopy(currentResult);

    var titleEl = document.getElementById('verdictTitle');
    var descEl = document.getElementById('verdictDesc');
    if (titleEl) titleEl.textContent = copy.title;
    if (descEl) descEl.textContent = copy.desc;

    var sBox = document.getElementById('stopBox');
    var sOut = document.getElementById('stopDoingOut');
    if (sBox && sOut) {
      if (currentResult.stopText) {
        sBox.hidden = false;
        sOut.textContent = currentResult.stopText; // XSS-safe textContent!
      } else {
        sBox.hidden = true;
        sOut.textContent = '';
      }
    }

    var lPct = document.getElementById('leakPct');
    var lFill = document.getElementById('leakFill');
    var rPct = document.getElementById('restorePct');
    var rFill = document.getElementById('restoreFill');
    if (lPct) lPct.textContent = currentResult.leakPct + '%';
    if (lFill) lFill.style.width = currentResult.leakPct + '%';
    if (rPct) rPct.textContent = currentResult.restorePct + '%';
    if (rFill) rFill.style.width = currentResult.restorePct + '%';

    var list = document.getElementById('planList');
    if (list) {
      list.textContent = '';
      for (var i = 0; i < copy.steps.length; i++) {
        var li = document.createElement('li');
        li.textContent = copy.steps[i];
        list.appendChild(li);
      }
    }
  }

  function applyLang(lang) {
    currentLang = SUPPORTED.indexOf(lang) !== -1 ? lang : 'en';
    document.documentElement.lang = currentLang;
    try { localStorage.setItem('dopabrain_lang', currentLang); } catch (e) {}

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.tagName === 'META') el.setAttribute('content', val);
      else if (el.tagName === 'TITLE') document.title = val;
      else el.textContent = val;
    }
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = currentLang;
    updateLinks();
    renderGrids();
    if (currentResult) renderResult();
  }

  window.i18n = {
    getLanguage: function () { return currentLang; },
    setLanguage: function (l) { applyLang(l); },
    t: t
  };

  function bindEvents() {
    var sel = document.getElementById('langSelect');
    if (sel) {
      sel.addEventListener('change', function () {
        applyLang(sel.value);
        try {
          var u = new URL(window.location.href);
          u.searchParams.set('lang', currentLang);
          window.history.replaceState({}, '', u.toString());
        } catch (e) {}
      });
    }

    var auditBtn = document.getElementById('auditBtn');
    if (auditBtn) auditBtn.addEventListener('click', runAudit);

    var resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        leaks = { open_loops: true, notifications: true, obligations: true };
        restorers = { movement: true };
        currentResult = null;
        var inp = document.getElementById('stopDoingInput');
        if (inp) inp.value = '';
        renderGrids();
        var card = document.getElementById('resultCard');
        if (card) card.hidden = true;
      });
    }

    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        if (!currentResult) return;
        var copy = getPlanCopy(currentResult);
        var txt = copy.title + '\n\n' + copy.steps.join('\n');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(txt).then(function () { toast(t('copied')); }).catch(function () { toast(t('copied')); });
        } else {
          toast(t('copied'));
        }
      });
    }

    var shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', function () {
        var shareUrl = 'https://dopabrain.com/portal/tools/emotional-energy-audit.html?lang=' + currentLang;
        if (navigator.share) {
          navigator.share({ title: document.title, url: shareUrl }).catch(function () {});
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(shareUrl).then(function () { toast(t('shared')); }).catch(function () { toast(t('shared')); });
        } else {
          toast(t('shared'));
        }
      });
    }

    var storyBtn = document.getElementById('storyBtn');
    if (storyBtn) {
      storyBtn.addEventListener('click', function () {
        if (!currentResult || !window.DopaBrainStoryCard) return;
        var copy = getPlanCopy(currentResult);
        var ok = window.DopaBrainStoryCard.downloadStoryCard({
          slug: 'emotional-energy-audit',
          badge: t('kicker'),
          emoji: '⚖️',
          toolName: t('heroTitle'),
          headline: copy.title,
          subtitle: copy.desc,
          accent: '#f97316',
          accent2: '#eab308',
          metrics: [
            { label: t('meterLeak'), pct: currentResult.leakPct, color: '#f97316' },
            { label: t('meterRestore'), pct: currentResult.restorePct, color: '#10b981' }
          ],
          takeawayLabel: t('planTitle'),
          takeaway: copy.steps[0] || '',
          footerUrl: 'dopabrain.com/portal/tools/emotional-energy-audit.html'
        });
        if (ok) toast(t('savedCard'));
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(detectLang());
    bindEvents();
  });
})();
