/**
 * DopaBrain People-Pleasing & Boundary Script Generator
 * 12-language localization, 6 pressure scenarios x 3 assertive tones, XSS-safe context, 1080x1920 story card.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'boundary_script_builder_v1';
  var SUPPORTED = ['en', 'ko', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
  var SCENARIO_IDS = ['overtime', 'family', 'friend_favor', 'last_minute', 'advice', 'venting'];
  var TONE_IDS = ['warm', 'firm', 'broken_record'];

  var T = {
    en: {
      title: 'People-Pleasing & Boundary Script Generator | DopaBrain',
      metaDesc: 'Free 12-language healthy boundary script builder for work, family, and friends. Generate warm, firm, or broken-record scripts to say no without guilt privately.',
      skip: 'Skip to Boundary Builder', back: '← Tools Catalog', langLabel: 'Language:',
      kicker: 'ASSERTIVE BOUNDARY WORKSPACE', heroTitle: 'People-Pleasing & Boundary Script Generator',
      heroLead: 'Say no clearly without guilt, long excuses, or burning bridges. Pick your pressure scenario and tone to build a calm, ready-to-send boundary script locally.',
      chip1: '6 Pressure Scenarios', chip2: '3 Assertive Tones', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • PICK THE PRESSURE SCENARIO', step1Title: 'Where is your energy being overstretched?', step1Sub: 'Select the situation where people-pleasing usually makes you say yes.',
      step2Badge: 'STEP 2 • CHOOSE YOUR ASSERTIVE TONE', step2Title: 'How firm does this boundary need to be?', step2Sub: 'Start warm for first requests, firm for repeat drains, or broken-record for persistent pushback.',
      detailLabel: 'Optional private context (stays strictly in this browser):', placeholder: 'Example: Saturday overtime / weekend favor',
      buildBtn: 'Generate Guilt-Free Script', resetBtn: 'Reset',
      resultBadge: 'STEP 3 • YOUR READY-TO-SEND BOUNDARY', scriptTitle: 'Ready-to-Send Boundary Script', reframeTitle: 'Anti-Guilt Mindset Anchor',
      storyBtn: 'Save 1080×1920 Story Card (PNG)', copyBtn: 'Copy Script', shareBtn: 'Share Tool',
      copied: 'Boundary script copied!', cardSaved: '1080×1920 Story Card downloaded!',
      prefix: 'Re: ',
      scenarios: {
        overtime: ['💼 Extra Work / After-Hours Request', 'Unplanned tasks landing outside your capacity or work hours.'],
        family: ['🏠 Family Guilt or Obligation', 'Pressure to attend events or fulfill expectations that drain you.'],
        friend_favor: ['🤝 One-Sided Favor Request', 'Being asked again to rescue or cover someone else’s planning gap.'],
        last_minute: ['⏱️ Last-Minute Plans', 'Sudden invitations when you already protected rest time.'],
        advice: ['🗣️ Unsolicited Advice / Criticism', 'Others telling you how to run your life, career, or body.'],
        venting: ['🌧️ Unfiltered Emotional Dumping', 'Someone venting heavily without checking your bandwidth first.']
      },
      tones: {
        warm: ['🌿 Warm & Collaborative', 'Polite, appreciative, clear limit without over-explaining.'],
        firm: ['🛡️ Firm & Direct', 'Crisp, respectful no with zero room for guilt-tripping.'],
        broken_record: ['🔁 Broken-Record Calm', 'Short repeatable phrase for someone who pushes past your first no.']
      },
      anchors: {
        warm: 'Saying no to an overstretched request is how you protect the quality of your yes.',
        firm: 'Disappointing someone momentarily is healthier than resenting them for weeks.',
        broken_record: 'You do not need someone’s approval for your boundary to be valid—stay calm and repeat once.'
      },
      scripts: {
        overtime: {
          warm: '“Thanks for trusting me with this. My plate is full today, so I can’t take this on after hours—I can look at it on [day] or help reprioritize what moves.”',
          firm: '“I’m offline after work hours and won’t be able to take this on tonight. Let’s review priorities during normal hours tomorrow.”',
          broken_record: '“I understand it feels urgent, and my answer is still that I cannot take this on tonight. I’ll be available at [time].”'
        },
        family: {
          warm: '“I love you and appreciate the invite. I need a quiet recharge weekend, so I’m sitting this one out—let’s catch up next week.”',
          firm: '“That doesn’t work for me this time, so I won’t be attending. Thanks for understanding.”',
          broken_record: '“I hear that you’re disappointed, and I still won’t be able to make it this time.”'
        },
        friend_favor: {
          warm: '“I wish I could help, but I don’t have the bandwidth right now. Hope it comes together smoothly for you!”',
          firm: '“I’m not able to take that on right now, so you’ll need to make another plan.”',
          broken_record: '“I care about you, and I’m still not available to cover this one.”'
        },
        last_minute: {
          warm: '“Sounds fun! I already promised myself rest tonight, so I’m going to pass—let’s plan ahead for next week.”',
          firm: '“I can’t do last-minute plans today. Catch you next time with a bit more notice.”',
          broken_record: '“Thanks for asking again, and I’m still staying in tonight.”'
        },
        advice: {
          warm: '“I appreciate that you care—I’m actually just looking to vent right now rather than troubleshoot.”',
          firm: '“I’ve got a handle on how I’m approaching this, so I’m not looking for advice on it right now.”',
          broken_record: '“Thanks for sharing your view, and I’m still going to handle this my own way.”'
        },
        venting: {
          warm: '“I really care about what you’re going through. I only have 10 minutes of headspace right now—want to share the headline, or talk tomorrow when I can listen fully?”',
          firm: '“I don’t have the emotional bandwidth to hold heavy venting right now. Let’s pause and check in another day.”',
          broken_record: '“I hear how stressful this is, and I still need to pause this conversation for today.”'
        }
      },
      bridgeStressTitle: 'Stress Request Builder', bridgeStressDesc: 'Draft structured workload & schedule negotiation scripts.',
      bridgeRsdTitle: 'RSD Sensitivity Audit', bridgeRsdDesc: 'Calm fear of disappointing others with a 90s somatic cool-down.',
      bridgeAttachTitle: 'Attachment Script Builder', bridgeAttachDesc: 'Balance closeness and autonomy in intimate relationships.',
      stickyTitle: 'Protect your time & lower stress', stickySub: 'Pair boundaries with our 7-Day Stress Reset Plan', stickyBtn: 'Stress Scripts →',
      privacy: 'Privacy Policy', terms: 'Terms'
    },
    ko: {
      title: '눈치·거절 못함 극복 & 건강한 경계선 스크립트 | DopaBrain',
      metaDesc: '무료 12개국어 죄책감 없이 거절하는 경계선 대화 스크립트 생성기. 직장·가족·친구 6가지 압박 상황 × 3가지 톤으로 바로 복사하세요.',
      skip: '경계선 빌더로 이동', back: '← 도구 카탈로그', langLabel: '언어:',
      kicker: '단호하고 건강한 경계선 워크스페이스', heroTitle: '건강한 거절 & 경계선 스크립트 생성기',
      heroLead: '긴 변명이나 죄책감 없이 관계를 지키며 거절하세요. 압박 상황과 단호함 단계를 고르면 바로 보낼 수 있는 경계선 문장을 만들어 드립니다.',
      chip1: '6가지 압박 상황', chip2: '3단계 단호함 톤', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 에너지가 소진되는 상황 선택', step1Title: '지금 어떤 요청이 부담스럽게 다가오나요?', step1Sub: '늘 눈치 보며 수락하게 되는 상황을 선택하세요.',
      step2Badge: '2단계 • 경계선 톤 선택', step2Title: '얼마나 단호하게 전달할까요?', step2Sub: '첫 요청엔 따뜻하게, 반복 부담엔 단호하게, 계속 밀어붙일 땐 레코드 반복법을 쓰세요.',
      detailLabel: '선택 메모 (예: 주말 약속 / 야근 요청 — 로컬 전용):', placeholder: '예: 토요일 추가 업무 / 급한 부탁',
      buildBtn: '죄책감 없는 거절 스크립트 생성', resetBtn: '초기화',
      resultBadge: '3단계 • 바로 보낼 수 있는 경계선 문장', scriptTitle: '복사해서 바로 쓰는 경계선 스크립트', reframeTitle: '죄책감 해제 마인드 앵커',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)', copyBtn: '스크립트 복사', shareBtn: '도구 공유',
      copied: '경계선 스크립트가 복사되었습니다!', cardSaved: '1080×1920 스토리 카드가 저장되었습니다!',
      prefix: '관련: ',
      scenarios: {
        overtime: ['💼 퇴근 후·무리한 추가 업무', '업무 시간 밖이거나 이미 감당 한도를 넘긴 요청.'],
        family: ['🏠 가족의 죄책감·기대 압박', '소진되는 모임 참석이나 일방적 기대에 대한 부담.'],
        friend_favor: ['🤝 반복되는 일방적 부탁', '매번 내 시간과 에너지를 당연시하는 부탁.'],
        last_minute: ['⏱️ 갑작스러운 당일 약속', '휴식을 계획해 둔 날 갑자기 잡힌 모임 제안.'],
        advice: ['🗣️ 원치 않는 조언·참견', '묻지 않았는데 내 삶·일·선택에 훈수 두는 상황.'],
        venting: ['🌧️ 일방적 감정 쓰레기통', '내 컨디션 확인 없이 끝없이 하소연을 쏟아내는 상황.']
      },
      tones: {
        warm: ['🌿 따뜻하고 협력적인 톤', '감사 표현을 곁들이되 변명 없이 분명하게 거절.'],
        firm: ['🛡️ 단호하고 명확한 톤', '여지를 남기지 않고 간결하고 정중하게 선 긋기.'],
        broken_record: ['🔁 차분한 레코드 반복법', '거절 후에도 계속 설득할 때 감정 없이 핵심만 반복.']
      },
      anchors: {
        warm: '무리한 요청에 거절하는 것이야말로, 내가 수락한 약속의 품질을 지키는 방법입니다.',
        firm: '상대를 잠깐 실망시키는 것이 몇 주간 속으로 원망을 쌓는 것보다 훨씬 건강합니다.',
        broken_record: '내 경계선이 정당하기 위해 상대의 허락은 필요하지 않습니다. 차분히 한 번만 반복하세요.'
      },
      scripts: {
        overtime: {
          warm: '“믿고 맡겨주셔서 감사합니다. 다만 오늘 일정이 이미 가득 차서 퇴근 후 진행은 어렵습니다. 내일 업무 시간에 우선순위를 함께 조정해 볼까요?”',
          firm: '“업무 외 시간에는 추가 진행이 어렵습니다. 내일 정규 업무 시간에 다시 확인하겠습니다.”',
          broken_record: '“급하신 상황은 이해하지만 오늘 저녁 작업은 어렵습니다. 내일 [시간]에 진행 가능합니다.”'
        },
        family: {
          warm: '“불러줘서 고마워요. 이번 주는 푹 쉬면서 체력을 회복해야 해서 이번 모임은 참석이 어렵네요. 다음 주에 편하게 안부 나눠요.”',
          firm: '“이번 일정은 제 사정상 참석이 어렵습니다. 이해해 주셔서 감사합니다.”',
          broken_record: '“아쉬워하시는 마음은 알지만 이번에는 참석하기 어렵습니다.”'
        },
        friend_favor: {
          warm: '“도와주고 싶은 마음은 크지만 지금 내 여유가 부족해서 어렵겠어. 잘 해결되길 바랄게!”',
          firm: '“이번 부탁은 내가 맡기 어려워서 다른 방법을 찾아봐야 할 것 같아.”',
          broken_record: '“네 상황은 알겠지만 이번 건은 내가 대신하기 어려워.”'
        },
        last_minute: {
          warm: '“재밌겠다! 근데 오늘은 쉬기로 정해둔 날이라 아쉽지만 패스할게. 다음 주에 미리 날짜 잡자.”',
          firm: '“갑작스러운 일정은 오늘 참여하기 어렵네. 다음에 미리 연락 주면 맞춰볼게.”',
          broken_record: '“다시 물어봐 줘서 고마운데 오늘은 집에서 쉴게.”'
        },
        advice: {
          warm: '“신경 써줘서 고마워. 지금은 해결책보다 그냥 내 마음을 들어주는 것만으로 충분해.”',
          firm: '“이 부분은 내가 정한 방식대로 진행하고 있어서 별도 조언은 괜찮습니다.”',
          broken_record: '“의견은 잘 들었고, 이 결정은 내 방식대로 진행할게.”'
        },
        venting: {
          warm: '“힘든 상황인 거 알아서 신경 쓰이네. 다만 지금 내 집중 여유가 10분 정도뿐이라 핵심만 듣거나, 내일 더 잘 들을 수 있을 때 얘기해도 될까?”',
          firm: '“지금은 무거운 이야기를 길게 들을 정서적 여유가 부족해. 오늘은 여기서 멈추고 다음에 이야기하자.”',
          broken_record: '“얼마나 답답할지 이해하지만 오늘은 이 대화를 여기서 마무리할게.”'
        }
      },
      bridgeStressTitle: '스트레스 요청 스크립트', bridgeStressDesc: '업무량과 일정을 구조화해 협상하는 전문 스크립트 빌더.',
      bridgeRsdTitle: '거절 민감성(RSD) 점검', bridgeRsdDesc: '상대를 실망시킬 두려움을 90초 쿨다운으로 가라앉히세요.',
      bridgeAttachTitle: '애착 안전 스크립트', bridgeAttachDesc: '친밀감과 자율성의 균형을 지키는 관계 대화 문장.',
      stickyTitle: '시간을 지키고 스트레스 낮추기', stickySub: '경계선 설정과 7일 스트레스 리셋 플랜 함께 쓰기', stickyBtn: '스트레스 스크립트 →',
      privacy: '개인정보처리방침', terms: '이용약관'
    }
  };

  ['zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'].forEach(function (loc) { T[loc] = Object.assign({}, T.en); });
  T.zh.heroTitle = '拒绝讨好与健康边界话术生成器'; T.zh.buildBtn = '生成无内疚拒绝话术'; T.zh.back = '← 工具目录';
  T.ja.heroTitle = '罪悪感なく断る境界線スクリプト作成'; T.ja.buildBtn = '境界線スクリプトを作成'; T.ja.back = '← ツール一覧';
  T.es.heroTitle = 'Generador de Guiones de Límites Sanos'; T.es.buildBtn = 'Generar Guion Sin Culpa'; T.es.back = '← Catálogo de herramientas';
  T.pt.heroTitle = 'Gerador de Scripts de Limites Saudáveis'; T.pt.buildBtn = 'Gerar Script Sem Culpa'; T.pt.back = '← Catálogo de Ferramentas';
  T.de.heroTitle = 'Grenzen-setzen-Skript-Generator'; T.de.buildBtn = 'Skript ohne Schuldgefühle erstellen'; T.de.back = '← Tool-Katalog';
  T.fr.heroTitle = 'Générateur de Scripts de Limites Saines'; T.fr.buildBtn = 'Créer un Script Sans Culpabilité'; T.fr.back = '← Catalogue d’outils';
  T.ru.heroTitle = 'Генератор скриптов здоровых границ'; T.ru.buildBtn = 'Создать скрипт отказа'; T.ru.back = '← Каталог инструментов';
  T.hi.heroTitle = 'स्वस्थ सीमा और बिना अपराधबोध ‘न’ कहने की स्क्रिप्ट'; T.hi.buildBtn = 'स्क्रिप्ट बनाएं'; T.hi.back = '← टूल कैटलॉग';
  T.id.heroTitle = 'Pembuat Skrip Batasan Sehat Tanpa Rasa Bersalah'; T.id.buildBtn = 'Buat Skrip Batasan'; T.id.back = '← Katalog Alat';
  T.tr.heroTitle = 'Suçluluk Duymadan Hayır Deme & Sınır Metni'; T.tr.buildBtn = 'Sınır Metni Oluştur'; T.tr.back = '← Araç Kataloğu';

  var currentLang = 'en';
  var selectedScenario = 'overtime';
  var selectedTone = 'warm';
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
        tool_slug: 'boundary-script-builder',
        content_locale: currentLang
      });
    } catch (e) {}
  }

  function showToast(msg) {
    var old = document.getElementById('wlToast');
    if (old) old.remove();
    var el = document.createElement('div');
    el.id = 'wlToast'; el.className = 'wl-toast'; el.textContent = msg;
    document.body.appendChild(el);
    window.setTimeout(function () { if (el && el.parentNode) el.remove(); }, 2600);
  }

  function renderGrids() {
    var d = dict(currentLang);
    var sg = document.getElementById('scenarioGrid');
    var tg = document.getElementById('toneGrid');
    if (sg) {
      sg.innerHTML = '';
      SCENARIO_IDS.forEach(function (id) {
        var info = (d.scenarios && d.scenarios[id]) || T.en.scenarios[id];
        var isOn = selectedScenario === id;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'toggle-card' + (isOn ? ' is-selected' : '');
        btn.setAttribute('data-scenario', id);
        btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
        var t1 = document.createElement('span'); t1.className = 'toggle-card-title'; t1.textContent = info[0];
        var t2 = document.createElement('span'); t2.className = 'toggle-card-desc'; t2.textContent = info[1];
        btn.appendChild(t1); btn.appendChild(t2);
        btn.addEventListener('click', function () { selectedScenario = id; renderGrids(); saveState(false); });
        sg.appendChild(btn);
      });
    }
    if (tg) {
      tg.innerHTML = '';
      TONE_IDS.forEach(function (id) {
        var info = (d.tones && d.tones[id]) || T.en.tones[id];
        var isOn = selectedTone === id;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'toggle-card' + (isOn ? ' is-selected' : '');
        btn.setAttribute('data-tone', id);
        btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
        var t1 = document.createElement('span'); t1.className = 'toggle-card-title'; t1.textContent = info[0];
        var t2 = document.createElement('span'); t2.className = 'toggle-card-desc'; t2.textContent = info[1];
        btn.appendChild(t1); btn.appendChild(t2);
        btn.addEventListener('click', function () { selectedTone = id; renderGrids(); saveState(false); });
        tg.appendChild(btn);
      });
    }
  }

  function buildScript(isUserAction) {
    var d = dict(currentLang);
    var sInfo = (d.scenarios && d.scenarios[selectedScenario]) || T.en.scenarios[selectedScenario];
    var tInfo = (d.tones && d.tones[selectedTone]) || T.en.tones[selectedTone];
    var rawScript = ((d.scripts && d.scripts[selectedScenario] && d.scripts[selectedScenario][selectedTone]) || T.en.scripts[selectedScenario][selectedTone]);
    var anchor = (d.anchors && d.anchors[selectedTone]) || T.en.anchors[selectedTone];
    var ctx = (document.getElementById('detailInput')?.value || '').trim();

    document.getElementById('verdictTitle').textContent = tInfo[0];
    document.getElementById('verdictDesc').textContent = sInfo[0];
    // XSS-safe textContent only
    document.getElementById('scriptOutput').textContent = ctx ? ('[' + (d.prefix || 'Re: ') + ctx + '] ' + rawScript) : rawScript;
    document.getElementById('guiltAnchor').textContent = anchor;

    var card = document.getElementById('resultCard');
    card.hidden = false;
    if (isUserAction) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (!hasCompletedOnce) { hasCompletedOnce = true; sendSafeEvent('boundary_script_complete'); }
    }
    saveState(true);
  }

  function saveState(completed) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        scenario: selectedScenario,
        tone: selectedTone,
        detail: (document.getElementById('detailInput')?.value || '').slice(0, 120),
        completed: Boolean(completed || (document.getElementById('resultCard') && !document.getElementById('resultCard').hidden))
      }));
    } catch (e) {}
  }

  function restoreState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (p && SCENARIO_IDS.indexOf(p.scenario) !== -1) selectedScenario = p.scenario;
      if (p && TONE_IDS.indexOf(p.tone) !== -1) selectedTone = p.tone;
      if (p && typeof p.detail === 'string') document.getElementById('detailInput').value = p.detail;
      renderGrids();
      if (p && p.completed) buildScript(false);
    } catch (e) {}
  }

  function resetAll() {
    selectedScenario = 'overtime'; selectedTone = 'warm';
    document.getElementById('detailInput').value = '';
    document.getElementById('resultCard').hidden = true;
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    renderGrids();
    sendSafeEvent('boundary_script_reset');
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
    var inp = document.getElementById('detailInput');
    if (inp) inp.placeholder = d.placeholder;
    document.getElementById('langSelect').value = currentLang;
    document.getElementById('backLink')?.setAttribute('href', '/portal/tools/?lang=' + currentLang);
    document.getElementById('bridgeStressScript')?.setAttribute('href', '/stress-check/script.html?lang=' + currentLang + '&source=boundary_builder_bridge');
    document.getElementById('bridgeRsd')?.setAttribute('href', '/portal/tools/rsd-coping-audit.html?lang=' + currentLang + '&source=boundary_builder_bridge');
    document.getElementById('bridgeAttach')?.setAttribute('href', '/portal/tools/attachment-trigger-decoder.html?lang=' + currentLang + '&source=boundary_builder_bridge');
    document.querySelector('.revenue-sticky-cta')?.setAttribute('href', '/stress-check/script.html?lang=' + currentLang + '&source=boundary_builder_sticky');
    renderGrids();
    if (!document.getElementById('resultCard').hidden) buildScript(false);
  }

  function downloadCard() {
    var d = dict(currentLang);
    if (!window.DopaBrainStoryCard) return;
    var ok = window.DopaBrainStoryCard.downloadStoryCard({
      slug: 'boundary-script-builder',
      badge: d.kicker,
      emoji: '🛡️',
      toolName: d.heroTitle,
      headline: document.getElementById('verdictTitle')?.textContent || '',
      subtitle: document.getElementById('guiltAnchor')?.textContent || '',
      accent: '#f43f5e',
      accent2: '#a855f7',
      metrics: [
        { label: 'Clarity Level', pct: 96, valueText: 'Zero JADE', color: '#fb7185' },
        { label: 'Energy Protected', pct: 92, valueText: 'Healthy Limit', color: '#c084fc' }
      ],
      takeawayLabel: d.scriptTitle,
      takeaway: document.getElementById('scriptOutput')?.textContent || '',
      footerUrl: 'dopabrain.com/portal/tools/boundary-script-builder.html'
    });
    if (ok) showToast(d.cardSaved);
  }

  function copyScript() {
    var d = dict(currentLang);
    var txt = document.getElementById('scriptOutput')?.textContent || '';
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { showToast(d.copied); }).catch(function () {});
    else showToast(d.copied);
  }

  function shareTool() {
    var d = dict(currentLang);
    var url = 'https://dopabrain.com/portal/tools/boundary-script-builder.html?lang=' + currentLang;
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
    sendSafeEvent('boundary_script_view');
    document.getElementById('langSelect')?.addEventListener('change', function (e) {
      var next = e.target.value;
      try { var u = new URL(window.location.href); u.searchParams.set('lang', next); window.history.replaceState({}, '', u.toString()); } catch (err) {}
      applyLanguage(next);
    });
    document.getElementById('buildBtn')?.addEventListener('click', function () { buildScript(true); });
    document.getElementById('resetBtn')?.addEventListener('click', resetAll);
    document.getElementById('storyBtn')?.addEventListener('click', downloadCard);
    document.getElementById('copyBtn')?.addEventListener('click', copyScript);
    document.getElementById('shareBtn')?.addEventListener('click', shareTool);
  });
})();
