/**
 * DopaBrain Sleep Cycle & Circadian Rhythm Reset Calculator
 * 12-language localization, 90-minute ultradian windows, caffeine/screen cutoffs, 1080x1920 story card.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'sleep_circadian_v1';
  var SUPPORTED = ['en', 'ko', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
  var HABIT_IDS = ['caffeine', 'screens', 'late_meal', 'irregular_wake'];

  var T = {
    en: {
      title: 'Sleep Cycle & Circadian Reset Calculator | DopaBrain',
      metaDesc: 'Free 12-language 90-minute sleep cycle and circadian rhythm reset calculator. Compute optimal bedtime windows, caffeine cutoff, and digital sunset privately in your browser.',
      skip: 'Skip to Sleep Calculator', back: '← Tools Catalog', langLabel: 'Language:',
      kicker: 'ULTRADIAN SLEEP & CIRCADIAN PLANNER', heroTitle: 'Sleep Cycle & Circadian Reset',
      heroLead: 'Wake up refreshed between 90-minute sleep cycles. Compute your ideal bedtime windows, caffeine cutoff, digital sunset, and circadian anchor cues locally.',
      chip1: '90-Min Sleep Cycles', chip2: 'Caffeine & Screen Cutoffs', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • WAKE TARGET & SLEEP LATENCY', step1Title: 'When do you want to wake up?', step1Sub: 'Set your target wake time and average minutes needed to fall asleep.',
      wakeLabel: 'Target Wake-Up Time:', latencyLabel: 'Time to Fall Asleep:',
      step2Badge: 'STEP 2 • EVENING CIRCADIAN FRICTION CHECK', step2Sub: 'Toggle any habits currently disrupting your evening wind-down:',
      calcBtn: 'Calculate Circadian Blueprint', resetBtn: 'Reset',
      resultBadge: 'YOUR PERSONALIZED CIRCADIAN BLUEPRINT',
      meterAlign: 'Circadian Alignment', meterCutoff: 'Caffeine / Screen Cutoff',
      protocolTitle: 'Tonight’s Sleep Architecture Protocol',
      storyBtn: 'Save 1080×1920 Story Card (PNG)', copyBtn: 'Copy Sleep Schedule', shareBtn: 'Share Tool',
      copied: 'Sleep schedule copied to clipboard!', cardSaved: '1080×1920 Story Card downloaded!',
      c6: '6 Cycles (9h Deep Recovery)', c5: '5 Cycles (7.5h Optimal ★)', c4: '4 Cycles (6h Minimum)',
      verdictGood: 'Strong Circadian Foundation', verdictMid: 'Moderate Evening Drift', verdictHigh: 'High Sleep-Architecture Friction',
      habits: {
        caffeine: ['☕ Caffeine After 2 PM', 'Late coffee, tea, or energy drinks lingering in adenosine receptors.'],
        screens: ['📱 Bright Screens in Bed', 'Short-wavelength blue light & algorithmic scrolling delaying melatonin.'],
        late_meal: ['🍽️ Heavy Meal Within 3h', 'Elevated core body temperature slowing deep slow-wave onset.'],
        irregular_wake: ['⏰ Variable Weekend Wake Time', 'Social jetlag shifting your circadian anchor by 90+ minutes.']
      },
      bridgeNoiseTitle: 'White Noise Player', bridgeNoiseDesc: 'Mask night noise with rain, brown noise, and calming ambient soundscapes.',
      bridgeStressTitle: 'Stress Check', bridgeStressDesc: 'Check if nighttime hyperarousal is driven by elevated daily stress load.',
      bridgeGroundTitle: '5-4-3-2-1 Grounding', bridgeGroundDesc: 'Slow racing bedtime thoughts with cyclic physiological sigh breathing.',
      stickyTitle: 'Wind down faster tonight', stickySub: 'Open our free brown noise, rain & sleep soundscape player', stickyBtn: 'White Noise →',
      privacy: 'Privacy Policy', terms: 'Terms'
    },
    ko: {
      title: '수면 사이클 & 생체리듬 리셋 계산기 | DopaBrain',
      metaDesc: '무료 12개국어 90분 수면 사이클 및 생체리듬 리셋 계산기. 최적 취침 시간, 카페인 컷오프, 디지털 선셋 시간을 로컬에서 즉시 계산하세요.',
      skip: '수면 계산기로 이동', back: '← 도구 카탈로그', langLabel: '언어:',
      kicker: '90분 수면 주기 & 생체시계 플래너', heroTitle: '수면 사이클 & 생체리듬 리셋',
      heroLead: '90분 수면 사이클 경계에서 개운하게 기상하세요. 목표 기상 시간에 맞춘 최적 취침 창구, 카페인 마감, 스마트폰 끄기 시각을 자동 설계합니다.',
      chip1: '90분 수면 주기 계산', chip2: '카페인·스크린 마감', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 목표 기상 시각 & 입면 시간', step1Title: '몇 시에 기상하고 싶으신가요?', step1Sub: '기상 목표 시각과 평소 잠드는 데 걸리는 평균 시간을 선택하세요.',
      wakeLabel: '목표 기상 시각:', latencyLabel: '평균 입면 소요 시간:',
      step2Badge: '2단계 • 저녁 생체리듬 방해 요인 체크', step2Sub: '최근 수면을 방해하는 저녁 습관을 선택하세요:',
      calcBtn: '맞춤 수면 리셋 시간표 계산', resetBtn: '초기화',
      resultBadge: '오늘 밤 맞춤 생체리듬 설계도',
      meterAlign: '생체리듬 정렬도', meterCutoff: '카페인 / 스크린 마감',
      protocolTitle: '오늘 밤 숙면 프로토콜',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)', copyBtn: '수면 시간표 복사', shareBtn: '도구 공유',
      copied: '수면 시간표가 클립보드에 복사되었습니다!', cardSaved: '1080×1920 스토리 카드가 저장되었습니다!',
      c6: '6사이클 (9시간 깊은 회복)', c5: '5사이클 (7.5시간 최적 ★)', c4: '4사이클 (6시간 최소 확보)',
      verdictGood: '안정적 생체리듬 기반', verdictMid: '보통 수준의 저녁 리듬 지연', verdictHigh: '높은 수면 방해 부하',
      habits: {
        caffeine: ['☕ 오후 2시 이후 카페인', '아데노신 수용체에 남아 깊은 서파 수면을 방해함.'],
        screens: ['📱 침대 속 스마트폰 시청', '블루라이트와 자극적 피드가 멜라토닌 분비를 늦춤.'],
        late_meal: ['🍽️ 취침 3시간 이내 야식', '심부 체온 상승으로 입면과 깊은 잠이 지연됨.'],
        irregular_wake: ['⏰ 주말 기상 시각 불규칙', '사회적 시차(90분 이상)로 월요일 피로 누적.']
      },
      bridgeNoiseTitle: '백색소음 플레이어', bridgeNoiseDesc: '빗소리·브라운 노이즈로 밤 소음을 덮고 입면을 돕습니다.',
      bridgeStressTitle: '스트레스 정밀 체크', bridgeStressDesc: '야간 각성이 주간 스트레스 누적 때문인지 점검하세요.',
      bridgeGroundTitle: '5-4-3-2-1 그라운딩', bridgeGroundDesc: '생리적 한숨 호흡으로 잠들기 전 잡념을 가라앉히세요.',
      stickyTitle: '오늘 밤 더 편안하게 잠들기', stickySub: '무료 브라운 노이즈·빗소리 수면 사운드 열기', stickyBtn: '백색소음 →',
      privacy: '개인정보처리방침', terms: '이용약관'
    },
    ja: {
      title: '睡眠サイクル＆体内時計リセット計算機 | DopaBrain',
      metaDesc: '無料12言語対応の90分睡眠サイクル計算機。最適な就寝時間、カフェイン制限時刻、デジタルサンセットをブラウザ内で計算します。',
      skip: '睡眠計算機へ', back: '← ツール一覧', langLabel: '言語:',
      kicker: '90分睡眠サイクル＆サーカディアン設計', heroTitle: '睡眠サイクル＆体内時計リセット',
      heroLead: '90分サイクルの区切りでスッキリ目覚めましょう。起床目標から最適な就寝時刻・カフェイン締切・デジタルサンセットを自動算出します。',
      chip1: '90分睡眠サイクル', chip2: 'カフェイン＆画面締切', chip3: '100%ローカル非公開',
      step1Badge: 'STEP 1 • 起床目標と入眠時間', step1Title: '何時に起きたいですか？', step1Sub: '目標起床時刻と普段寝つくまでの時間を選んでください。',
      wakeLabel: '目標起床時刻:', latencyLabel: '入眠までの目安:',
      step2Badge: 'STEP 2 • 夜の睡眠リズム阻害チェック', step2Sub: '当てはまる夜の習慣を選択してください：',
      calcBtn: '睡眠ブループリントを計算', resetBtn: 'リセット',
      resultBadge: '今夜のサーカディアン設計図',
      meterAlign: '体内時計アラインメント', meterCutoff: 'カフェイン / 画面締切',
      protocolTitle: '今夜の快眠プロトコル',
      storyBtn: '1080×1920 ストーリーカード保存 (PNG)', copyBtn: '時間割をコピー', shareBtn: 'ツールを共有',
      copied: '睡眠スケジュールをコピーしました！', cardSaved: '1080×1920 ストーリーカードを保存しました！',
      c6: '6サイクル (9時間 深い回復)', c5: '5サイクル (7.5時間 最適 ★)', c4: '4サイクル (6時間 最低ライン)',
      verdictGood: '良好なサーカディアン基盤', verdictMid: 'やや夜型シフト傾向', verdictHigh: '高い睡眠アーキテクチャ負荷',
      habits: {
        caffeine: ['☕ 14時以降のカフェイン', 'アデノシン受容体に残り深いノンレム睡眠を妨げます。'],
        screens: ['📱 布団でのスマホ視聴', '強い光と刺激がメラトニン分泌を遅らせます。'],
        late_meal: ['🍽️ 就寝3時間以内の食事', '深部体温が下がりにくく入眠が遅れます。'],
        irregular_wake: ['⏰ 休日の起床ズレ', '社会的時差ボケで体内時計が乱れやすくなります。']
      },
      bridgeNoiseTitle: 'ホワイトノイズ再生', bridgeNoiseDesc: '雨音やブラウンノイズで夜の雑音を優しくマスクします。',
      bridgeStressTitle: 'ストレスチェック', bridgeStressDesc: '寝つきの悪さが日中のストレス蓄積か確認しましょう。',
      bridgeGroundTitle: '5-4-3-2-1 グラウンディング', bridgeGroundDesc: '生理的ため息呼吸で夜の思考ループを鎮めます。',
      stickyTitle: '今夜もっとスムーズに眠る', stickySub: '無料のブラウンノイズ＆雨音プレイヤーを開く', stickyBtn: 'ホワイトノイズ →',
      privacy: 'プライバシーポリシー', terms: '利用規約'
    },
    zh: {
      title: '90分钟睡眠周期与昼夜节律重置计算器 | DopaBrain',
      metaDesc: '免费 12 语言 90 分钟睡眠周期计算器，自动生成最佳入睡窗口、咖啡因截止时间与睡前数字日落计划。',
      skip: '跳转到睡眠计算器', back: '← 工具目录', langLabel: '语言：',
      kicker: '90分钟超日睡眠与昼夜节律规划', heroTitle: '睡眠周期与昼夜节律重置',
      heroLead: '在 90 分钟睡眠周期切换点自然醒来。根据起床目标自动计算最佳入睡时间、咖啡因截止点与数字日落提示。',
      chip1: '90分钟睡眠周期', chip2: '咖啡因与屏幕截止', chip3: '100% 本地私密',
      step1Badge: '第 1 步 • 起床目标与入睡耗时', step1Title: '你希望几点醒来？', step1Sub: '设定目标起床时间与平均入睡所需分钟数。',
      wakeLabel: '目标起床时间：', latencyLabel: '平均入睡耗时：',
      step2Badge: '第 2 步 • 晚间昼夜节律干扰项', step2Sub: '勾选目前影响你晚间放松的习惯：',
      calcBtn: '生成昼夜节律蓝图', resetBtn: '重置',
      resultBadge: '你的专属睡眠节律蓝图',
      meterAlign: '节律对齐度', meterCutoff: '咖啡因 / 屏幕截止',
      protocolTitle: '今晚深度睡眠协议',
      storyBtn: '保存 1080×1920 分享卡片 (PNG)', copyBtn: '复制睡眠时间表', shareBtn: '分享工具',
      copied: '睡眠时间表已复制！', cardSaved: '1080×1920 分享卡片已下载！',
      c6: '6 周期 (9小时 深度修复)', c5: '5 周期 (7.5小时 黄金推荐 ★)', c4: '4 周期 (6小时 底线)',
      verdictGood: '稳健昼夜节律基础', verdictMid: '轻中度晚间节律偏移', verdictHigh: '较高睡眠结构干扰',
      habits: {
        caffeine: ['☕ 下午 2 点后摄入咖啡因', '残留咖啡因持续阻断腺苷，压缩深睡比例。'],
        screens: ['📱 床上刷手机屏幕', '蓝光与算法刺激延迟褪黑素分泌。'],
        late_meal: ['🍽️ 睡前 3 小时内进大餐', '核心体温偏高减缓入睡速度。'],
        irregular_wake: ['⏰ 周末起床时间波动大', '社交时差打乱生物钟锚点。']
      },
      bridgeNoiseTitle: '白噪音助眠播放器', bridgeNoiseDesc: '用雨声与粉红/棕噪音遮蔽夜间干扰。',
      bridgeStressTitle: '压力综合评估', bridgeStressDesc: '检查夜间思绪活跃是否源于日间高压。',
      bridgeGroundTitle: '5-4-3-2-1 感官着陆', bridgeGroundDesc: '用生理叹息呼吸快速放缓睡前焦虑。',
      stickyTitle: '今晚更快进入深度放松', stickySub: '打开免费雨声与棕噪音助眠播放器', stickyBtn: '白噪音 →',
      privacy: '隐私政策', terms: '使用条款'
    }
  };

  ['es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'].forEach(function (loc) {
    T[loc] = Object.assign({}, T.en);
  });
  T.es.heroTitle = 'Calculadora de Ciclos de Sueño y Ritmo Circadiano'; T.es.calcBtn = 'Calcular Plan Circadiano'; T.es.back = '← Catálogo de herramientas';
  T.pt.heroTitle = 'Calculadora de Ciclos de Sono e Ritmo Circadiano'; T.pt.calcBtn = 'Calcular Plano Circadiano'; T.pt.back = '← Catálogo de Ferramentas';
  T.de.heroTitle = 'Schlafzyklus- & Zirkadianer Reset-Rechner'; T.de.calcBtn = 'Schlafplan berechnen'; T.de.back = '← Tool-Katalog';
  T.fr.heroTitle = 'Calculateur de Cycles de Sommeil & Rythme Circadien'; T.fr.calcBtn = 'Calculer Mon Plan Sommeil'; T.fr.back = '← Catalogue d’outils';
  T.ru.heroTitle = 'Калькулятор циклов сна и циркадного ритма'; T.ru.calcBtn = 'Рассчитать график сна'; T.ru.back = '← Каталог инструментов';
  T.hi.heroTitle = 'नींद चक्र और सर्कैडियन रीसेट कैलकुलेटर'; T.hi.calcBtn = 'नींद योजना बनाएं'; T.hi.back = '← टूल कैटलॉग';
  T.id.heroTitle = 'Kalkulator Siklus Tidur & Reset Sirkadian'; T.id.calcBtn = 'Hitung Jadwal Tidur'; T.id.back = '← Katalog Alat';
  T.tr.heroTitle = 'Uyku Döngüsü ve Sirkadiyen Ritim Hesaplayıcı'; T.tr.calcBtn = 'Uyku Planını Hesapla'; T.tr.back = '← Araç Kataloğu';

  var currentLang = 'en';
  var activeHabits = {};
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
        tool_slug: 'sleep-chronotype-reset',
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

  function fmtMins(totalMins) {
    var m = ((totalMins % 1440) + 1440) % 1440;
    var hh = Math.floor(m / 60);
    var mm = m % 60;
    return (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm;
  }

  function parseWakeMins() {
    var val = (document.getElementById('wakeTime')?.value || '07:00').split(':');
    var h = Math.max(0, Math.min(23, parseInt(val[0], 10) || 7));
    var m = Math.max(0, Math.min(59, parseInt(val[1], 10) || 0));
    return h * 60 + m;
  }

  function renderHabits() {
    var d = dict(currentLang);
    var grid = document.getElementById('habitGrid');
    if (!grid) return;
    grid.innerHTML = '';
    HABIT_IDS.forEach(function (id) {
      var info = (d.habits && d.habits[id]) || T.en.habits[id];
      var isOn = Boolean(activeHabits[id]);
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toggle-card' + (isOn ? ' is-selected' : '');
      btn.setAttribute('data-habit', id);
      btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
      var t1 = document.createElement('span'); t1.className = 'toggle-card-title'; t1.textContent = info[0];
      var t2 = document.createElement('span'); t2.className = 'toggle-card-desc'; t2.textContent = info[1];
      btn.appendChild(t1); btn.appendChild(t2);
      btn.addEventListener('click', function () {
        activeHabits[id] = !activeHabits[id];
        btn.classList.toggle('is-selected', Boolean(activeHabits[id]));
        btn.setAttribute('aria-pressed', activeHabits[id] ? 'true' : 'false');
        saveState(false);
      });
      grid.appendChild(btn);
    });
  }

  function calculate(isUserAction) {
    var d = dict(currentLang);
    var wake = parseWakeMins();
    var lat = parseInt(document.getElementById('latencySelect')?.value || '15', 10) || 15;
    var bed6 = fmtMins(wake - 540 - lat);
    var bed5 = fmtMins(wake - 450 - lat);
    var bed4 = fmtMins(wake - 360 - lat);
    var caffeineCut = fmtMins(wake - 450 - lat - 540);
    var screenCut = fmtMins(wake - 450 - lat - 60);

    var frictionCount = HABIT_IDS.filter(function (id) { return Boolean(activeHabits[id]); }).length;
    var alignPct = Math.max(32, 96 - frictionCount * 16);

    var vTitle = frictionCount === 0 ? d.verdictGood : (frictionCount <= 2 ? d.verdictMid : d.verdictHigh);
    document.getElementById('verdictTitle').textContent = vTitle + ' • ' + bed5;
    document.getElementById('verdictDesc').textContent = '5 cycles (7.5h) → ' + bed5 + ' | Caffeine cutoff: ' + caffeineCut + ' | Digital sunset: ' + screenCut;
    document.getElementById('pctAlign').textContent = alignPct + '%';
    document.getElementById('barAlign').style.width = alignPct + '%';
    document.getElementById('cutoffText').textContent = caffeineCut + ' / ' + screenCut;

    var grid = document.getElementById('cycleGrid');
    grid.innerHTML = '';
    [
      { label: d.c6, time: bed6, best: false },
      { label: d.c5, time: bed5, best: true },
      { label: d.c4, time: bed4, best: false }
    ].forEach(function (c) {
      var box = document.createElement('div');
      box.className = 'cycle-card' + (c.best ? ' is-best' : '');
      var l = document.createElement('div'); l.className = 'cycle-meta'; l.textContent = c.label;
      var tm = document.createElement('div'); tm.className = 'cycle-time'; tm.textContent = c.time;
      box.appendChild(l); box.appendChild(tm);
      grid.appendChild(box);
    });

    var ul = document.getElementById('protocolList');
    ul.innerHTML = '';
    [
      'Caffeine cutoff at ' + caffeineCut + ' (9h before your 5-cycle target bedtime ' + bed5 + ').',
      'Digital sunset at ' + screenCut + ' (dim overhead lights and switch to low-arousal audio).',
      'Morning light anchor within 30 minutes of ' + fmtMins(wake) + ' to lock your circadian clock.'
    ].forEach(function (line) {
      var li = document.createElement('li');
      li.textContent = line;
      ul.appendChild(li);
    });

    var card = document.getElementById('resultCard');
    card.hidden = false;
    if (isUserAction) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (!hasCompletedOnce) {
        hasCompletedOnce = true;
        sendSafeEvent('sleep_reset_complete');
      }
    }
    saveState(true);
  }

  function saveState(completed) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        wake: document.getElementById('wakeTime')?.value || '07:00',
        lat: document.getElementById('latencySelect')?.value || '15',
        habits: HABIT_IDS.filter(function (id) { return Boolean(activeHabits[id]); }),
        completed: Boolean(completed || (document.getElementById('resultCard') && !document.getElementById('resultCard').hidden))
      }));
    } catch (e) {}
  }

  function restoreState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (p && p.wake) document.getElementById('wakeTime').value = p.wake;
      if (p && p.lat) document.getElementById('latencySelect').value = String(p.lat);
      if (p && Array.isArray(p.habits)) {
        activeHabits = {};
        p.habits.forEach(function (id) { activeHabits[id] = true; });
      }
      renderHabits();
      if (p && p.completed) calculate(false);
    } catch (e) {}
  }

  function resetAll() {
    activeHabits = {};
    document.getElementById('wakeTime').value = '07:00';
    document.getElementById('latencySelect').value = '15';
    document.getElementById('resultCard').hidden = true;
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    renderHabits();
    sendSafeEvent('sleep_reset_clear');
  }

  function updateLinks() {
    var lang = currentLang;
    document.getElementById('backLink')?.setAttribute('href', '/portal/tools/?lang=' + lang);
    document.getElementById('bridgeNoise')?.setAttribute('href', '/white-noise/?lang=' + lang + '&source=sleep_reset_bridge');
    document.getElementById('bridgeStress')?.setAttribute('href', '/stress-check/?lang=' + lang + '&source=sleep_reset_bridge');
    document.getElementById('bridgeGround')?.setAttribute('href', '/portal/tools/grounding-exercise.html?lang=' + lang + '&source=sleep_reset_bridge');
    document.querySelector('.revenue-sticky-cta')?.setAttribute('href', '/white-noise/?lang=' + lang + '&source=sleep_reset_sticky');
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
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = currentLang;
    renderHabits();
    updateLinks();
    if (!document.getElementById('resultCard').hidden) calculate(false);
  }

  function downloadCard() {
    var d = dict(currentLang);
    if (!window.DopaBrainStoryCard) return;
    var align = parseInt(document.getElementById('pctAlign')?.textContent || '80', 10) || 80;
    var ok = window.DopaBrainStoryCard.downloadStoryCard({
      slug: 'sleep-chronotype-reset',
      badge: d.kicker,
      emoji: '🌙',
      toolName: d.heroTitle,
      headline: document.getElementById('verdictTitle')?.textContent || '',
      subtitle: document.getElementById('verdictDesc')?.textContent || '',
      accent: '#38bdf8',
      accent2: '#818cf8',
      metrics: [
        { label: d.meterAlign, pct: align, color: '#38bdf8' },
        { label: d.meterCutoff, pct: 100, valueText: document.getElementById('cutoffText')?.textContent || '', color: '#818cf8' }
      ],
      takeawayLabel: d.protocolTitle,
      takeaway: (document.querySelector('#protocolList li') || {}).textContent || '',
      footerUrl: 'dopabrain.com/portal/tools/sleep-chronotype-reset.html'
    });
    if (ok) showToast(d.cardSaved);
  }

  function copySchedule() {
    var d = dict(currentLang);
    var txt = [d.heroTitle, document.getElementById('verdictDesc')?.textContent || '', 'https://dopabrain.com/portal/tools/sleep-chronotype-reset.html?lang=' + currentLang].join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { showToast(d.copied); }).catch(function () {});
    } else showToast(d.copied);
  }

  function shareTool() {
    var d = dict(currentLang);
    var url = 'https://dopabrain.com/portal/tools/sleep-chronotype-reset.html?lang=' + currentLang;
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
    sendSafeEvent('sleep_reset_view');

    document.getElementById('langSelect')?.addEventListener('change', function (e) {
      var next = e.target.value;
      try { var u = new URL(window.location.href); u.searchParams.set('lang', next); window.history.replaceState({}, '', u.toString()); } catch (err) {}
      applyLanguage(next);
    });
    document.getElementById('calcBtn')?.addEventListener('click', function () { calculate(true); });
    document.getElementById('resetBtn')?.addEventListener('click', resetAll);
    document.getElementById('storyBtn')?.addEventListener('click', downloadCard);
    document.getElementById('copyBtn')?.addEventListener('click', copySchedule);
    document.getElementById('shareBtn')?.addEventListener('click', shareTool);
  });
})();
