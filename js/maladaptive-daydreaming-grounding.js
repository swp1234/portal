/* Daydreaming Loop & Present-Moment Grounding Kit
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Daydreaming Loop & Present-Moment Grounding Kit | DopaBrain",
    "metaDesc": "Losing hours inside vivid mental movies with music or pacing while real tasks pile up? Map 5 daydream triggers without shame locally and step gently back into the present room.",
    "kicker": "PRESENT-MOMENT RETURN • ZERO-SHAME GROUNDING",
    "heroTitle": "Daydreaming Loop & Present-Moment Grounding Kit",
    "heroLead": "Losing hours inside vivid mental movies with music or pacing while real tasks pile up? Map 5 daydream triggers without shame locally and step gently back into the present room.",
    "chip1": "5 Loop Triggers",
    "chip2": "Gentle Re-Entry",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • NOTICE WHAT PULLS YOU INTO MENTAL MOVIES (1 = RARE, 5 = STRONG)",
    "step1Title": "Which cues most often pull you away from the present moment?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: One tiny 2-minute physical action I will do in the real room right now (100% local):",
    "ctaBtn": "Build Gentle Re-Entry Plan",
    "resultBadge": "STEP 2 • YOUR ZERO-SHAME PRESENT ANCHOR",
    "noteTitle": "My 2-Minute Real-Room Action",
    "meterLabel": "Present-Moment Grounding Anchor",
    "scriptTitle": "Kind Re-Entry Statement (Zero Self-Blame)",
    "stepsTitle": "3 Low-Friction Steps to Step Back Into Now",
    "stickyTitle": "Want a guided 5-4-3-2-1 sensory grounding session right now?",
    "stickySub": "Interactive sensory anchoring & calm breath pacer",
    "stickyBtn": "Open Grounding →",
    "skip": "Skip to Tool",
    "back": "← Mental Wellness Lab",
    "langLabel": "Language:",
    "resetBtn": "Reset",
    "storyBtn": "Save 1080×1920 Summary Card (PNG)",
    "copyBtn": "Copy Script",
    "shareBtn": "Share Tool",
    "faqTitle": "Frequently Asked Questions",
    "refTitle": "Psychological Frameworks & References",
    "discTitle": "Editorial Self-Reflection Disclaimer:",
    "discText": "This interactive workspace is an educational self-reflection tool, not clinical diagnosis or medical treatment.",
    "privacy": "Privacy Policy",
    "terms": "Terms",
    "copied": "Plan script copied!",
    "shared": "Tool link copied!",
    "savedCard": "1080×1920 PNG Summary Card saved!"
  },
  "ko": {
    "title": "공상 루프·현실 감각 복귀 그라운딩 키트 | DopaBrain",
    "metaDesc": "음악을 듣거나 서성이며 머릿속 시나리오에 몇 시간씩 빠져 지내다 현실로 돌아오기 힘든가요? 죄책감 없이 5가지 공상 유발 신호를 점검하고 부드럽게 현재로 돌아오세요.",
    "kicker": "과도한 공상 멈춤 · 현재 감각 복귀 키트",
    "heroTitle": "공상 루프·현실 감각 복귀 그라운딩 키트",
    "heroLead": "음악을 듣거나 서성이며 머릿속 시나리오에 몇 시간씩 빠져 지내다 현실로 돌아오기 힘든가요? 죄책감 없이 5가지 공상 유발 신호를 점검하고 부드럽게 현재로 돌아오세요.",
    "chip1": "5가지 유발 신호",
    "chip2": "부드러운 현실 복귀",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 공상 몰입을 부르는 신호 확인 (1 = 드묾, 5 = 매우 강함)",
    "step1Title": "지금 나를 현실에서 공상 시나리오로 가장 자주 이끄는 계기는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 지금 이 방에서 바로 해볼 2분짜리 작은 현실 행동 1가지 (100% 로컬):",
    "ctaBtn": "부드러운 현실 복귀 플랜 만들기",
    "resultBadge": "2단계 • 죄책감 없는 현재 감각 복귀 플랜",
    "noteTitle": "지금 바로 할 2분 현실 행동",
    "meterLabel": "현재 감각 정착 지수",
    "scriptTitle": "자책 없이 돌아오는 다정한 문장",
    "stepsTitle": "부드럽게 현재로 돌아오는 3단계",
    "stickyTitle": "지금 바로 5-4-3-2-1 오감 그라운딩을 따라 해 볼까요?",
    "stickySub": "오감 앵커링과 호흡 페이서로 현재에 부드럽게 착지",
    "stickyBtn": "그라운딩 열기 →",
    "skip": "도구 본문으로 이동",
    "back": "← 멘탈 웰니스 랩",
    "langLabel": "언어:",
    "resetBtn": "초기화",
    "storyBtn": "1080×1920 요약 카드 저장 (PNG)",
    "copyBtn": "문장 복사",
    "shareBtn": "도구 공유",
    "faqTitle": "자주 묻는 질문",
    "refTitle": "심리학적 프레임워크 및 참고문헌",
    "discTitle": "편집 및 자기성찰 안내:",
    "discText": "본 인터랙티브 도구는 교육용 자기성찰 도구이며 임상 진단이나 의학적 치료가 아닙니다.",
    "privacy": "개인정보처리방침",
    "terms": "이용약관",
    "copied": "맞춤 문장을 복사했습니다!",
    "shared": "도구 링크를 복사했습니다!",
    "savedCard": "1080×1920 요약 카드를 저장했습니다!"
  },
  "zh": {
    "title": "白日梦循环与现实着陆工具包 | DopaBrain",
    "heroTitle": "白日梦循环与现实着陆工具包",
    "heroLead": "无自责排查5大沉浸式幻想诱因，温和切换回当下的感官与行动。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "白昼夢ループ・現実グラウンディング | DopaBrain",
    "heroTitle": "白昼夢ループ・現実グラウンディング",
    "heroLead": "罪悪感なく空想トリガー5要因を整理し、穏やかに「今ここ」へ戻る手順を作成。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Kit de Anclaje contra Ensoñación Excesiva | DopaBrain",
    "heroTitle": "Kit de Anclaje contra Ensoñación Excesiva",
    "heroLead": "Identifica 5 detonantes sin culpa y vuelve suavemente al momento presente en 2 min.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Kit de Aterramento para Devaneio Excessivo | DopaBrain",
    "heroTitle": "Kit de Aterramento para Devaneio Excessivo",
    "heroLead": "Mapeie 5 gatilhos sem culpa e retorne com suavidade ao momento presente em 2 min.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Tagträumen-Stopp & Gegenwarts-Anker | DopaBrain",
    "heroTitle": "Tagträumen-Stopp & Gegenwarts-Anker",
    "heroLead": "Erkenne 5 Auslöser ohne Scham und kehre in 2 Minuten sanft ins Hier und Jetzt zurück.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Kit Ancrage Présent & Rêverie Excessive | DopaBrain",
    "heroTitle": "Kit Ancrage Présent & Rêverie Excessive",
    "heroLead": "Repérez 5 déclencheurs sans culpabilité et revenez doucement dans l’instant présent.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Заземление при навязчивых грёзах | DopaBrain",
    "heroTitle": "Заземление при навязчивых грёзах",
    "heroLead": "Разберите 5 триггеров без чувства вины и мягко вернитесь в реальность за 2 минуты.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "डेड्रीमिंग लूप व प्रेजेंट ग्राउंडिंग किट | DopaBrain",
    "heroTitle": "डेड्रीमिंग लूप व प्रेजेंट ग्राउंडिंग किट",
    "heroLead": "बिना अपराधबोध के 5 ट्रिगर समझें और 2 मिनट में वर्तमान क्षण में शांति से लौटें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Kit Grounding Saat Terjebak Lamunan | DopaBrain",
    "heroTitle": "Kit Grounding Saat Terjebak Lamunan",
    "heroLead": "Kenali 5 pemicu melamun tanpa rasa bersalah dan kembali tenang ke momen sekarang.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Aşırı Hayal Kurma ve Şimdiki An Kiti | DopaBrain",
    "heroTitle": "Aşırı Hayal Kurma ve Şimdiki An Kiti",
    "heroLead": "Suçluluk duymadan 5 tetikleyiciyi fark edin ve 2 dakikada şimdiki ana dönün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "music_trigger",
    "en": "Soundtrack Loop — Earbuds or dramatic playlists automatically launching plotlines",
    "ko": "음악 트리거 — 이어폰이나 특정 플레이리스트만 틀면 자동으로 머릿속 영화 시작"
  },
  {
    "id": "stress_escape",
    "en": "Overwhelm Escape — Drifting into fantasy whenever real-life stress or boredom spikes",
    "ko": "스트레스 회피 — 현실의 압박감·지루함이 올라올 때 상상으로 도피"
  },
  {
    "id": "loneliness_fill",
    "en": "Connection Substitute — Rehearsing ideal conversations when feeling unseen or lonely",
    "ko": "외로움 보완 — 이해받지 못하거나 외로울 때 이상적인 대화를 머릿속에서 반복"
  },
  {
    "id": "pacing_cue",
    "en": "Kinetic Pacing — Walking in circles or lying in dim rooms fueling long episodes",
    "ko": "반복 움직임 — 방 안을 서성이거나 어두운 침대에 누워 장시간 몰입"
  },
  {
    "id": "shame_spiral",
    "en": "Post-Episode Shame — Feeling guilty for lost time, which ironically triggers more escaping",
    "ko": "종료 후 자책 — 흘려보낸 시간을 자책하다 괴로워서 다시 공상으로 회피"
  }
];
  var TIERS = {
  "low": {
    "enT": "Strong Pull Into Mental Movies — Interrupt the Cue Gently, Not With Shame",
    "koT": "공상 몰입 강함 — 자책 대신 \"음악·자세\" 환경 신호를 부드럽게 바꿔보세요",
    "enD": "Vivid daydreaming often starts as a creative soothing habit. Harsh self-criticism increases stress and fuels the loop; changing one physical cue (music, posture, light) breaks it cleanly.",
    "koD": "생생한 공상은 뇌가 지친 마음을 달래려 만든 창의적 습관인 경우가 많습니다. 스스로를 비난하면 스트레스가 커져 다시 도피하게 되므로, 음악·조명·자세 중 1가지만 가볍게 바꿔보세요.",
    "enS": "\"My imagination was trying to soothe me—thank you, brain. Right now I am choosing 5 real minutes in this room without judgment.\"",
    "koS": "\"내 상상력이 지친 나를 달래주려 했던 것뿐이야. 자책하지 않고 지금 딱 5분만 현실의 이 방으로 부드럽게 돌아올게.\"",
    "enL": [
      "Pause emotional/cinematic playlists and switch to silence or neutral ambient sound for 15 minutes.",
      "Change posture and room lighting (sit upright, open curtains, splash cool water on hands).",
      "Give your hands a tangible 2-minute physical task (make tea, tidy one surface, write 3 real lines)."
    ],
    "koL": [
      "감정선이 강한 플레이리스트를 15분만 멈추고 무음이나 중립적인 백색소음으로 바꾸세요.",
      "자세와 조명을 바꾸세요(바르게 앉기, 커튼 열기, 찬물로 손 씻기).",
      "손을 쓰는 2분짜리 현실 동작(차 끓이기, 책상 한 칸 정리, 메모 3줄 적기)을 바로 실행하세요."
    ]
  },
  "mid": {
    "enT": "Noticeable Drift — Schedule a Bounded \"Creative Window\" & Anchor Tasks",
    "koT": "간헐적 몰입 — 정해진 공상·창작 시간과 현실 앵커를 분리해 보세요",
    "enD": "You notice when drifting begins, which is half the win. Giving imagination a purposeful outlet (writing, art, bounded walk) keeps it from overtaking work hours.",
    "koD": "공상에 빠지는 순간을 이미 알아차리고 계십니다. 상상력을 글쓰기나 정해진 산책 시간에 배치하면 일상 집중을 훨씬 잘 지킬 수 있습니다.",
    "enS": "\"I can enjoy my creativity intentionally later; right now I am present for the next 15 minutes.\"",
    "koS": "\"상상력은 이따가 의도적으로 즐길 수 있어—지금 15분은 온전히 현재에 머무를게.\"",
    "enL": [
      "Notice your #1 trigger cue (often headphones or transitioning between tasks) and add a 30-second pause.",
      "Channel vivid ideas onto paper for 5 minutes instead of replaying them in loops.",
      "Start one small real-world task with a visible 10-minute timer."
    ],
    "koL": [
      "가장 잦은 유발 신호(이어폰 착용·업무 전환 순간)에 30초 멈춤 습관을 넣으세요.",
      "반복되는 시나리오는 머릿속 대신 메모장에 5분만 글로 꺼내 적어보세요.",
      "눈에 보이는 10분 타이머를 켜고 작은 현실 과제 하나를 시작하세요."
    ]
  },
  "high": {
    "enT": "Steady Present Awareness — Healthy Balance Between Imagination & Reality",
    "koT": "건강한 현실 감각 유지 중 — 상상력과 일상의 균형이 잘 맞습니다",
    "enD": "You have strong awareness of your mental state and can step back into the room easily. Keep nurturing real-world micro-pleasures and creative outlets.",
    "koD": "현재 감각이 안정적이며 원할 때 쉽게 현실로 돌아올 수 있습니다. 일상의 소소한 즐거움과 건강한 창작 활동을 계속 이어가세요.",
    "enS": "\"My imagination is a creative gift I can visit and leave whenever I choose.\"",
    "koS": "\"상상력은 내가 원할 때 열고 닫을 수 있는 멋진 창의적 도구다.\"",
    "enL": [
      "Keep rewarding real-life routines with enjoyable sensory details (music after tasks, cozy lighting).",
      "Stay connected with real people through low-pressure check-ins.",
      "Use brief sensory check-ins whenever stress rises."
    ],
    "koL": [
      "현실 일상에 기분 좋은 감각 요소(작업 후 좋아하는 음악, 아늑한 조명)를 유지하세요.",
      "부담 없는 짧은 연락으로 현실의 사람들과 꾸준히 연결되세요.",
      "스트레스가 올라오는 날엔 짧은 오감 그라운딩으로 균형을 잡으세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_daydream_ground_v1";
  var state = { lang: 'en', vals: {}, note: '' };
  AXES.forEach(function (a) { state.vals[a.id] = 3; });

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || '';
  }

  function sendSafeEvent(band) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', "daydream_grounding_complete", {
        tool_slug: "maladaptive-daydreaming-grounding",
        result_band: band,
        locale: state.lang
      });
    }
  }

  function buildAxes() {
    var wrap = document.getElementById('axisList');
    if (!wrap) return;
    wrap.textContent = '';
    AXES.forEach(function (ax) {
      var row = document.createElement('div');
      row.className = 'axis-row';
      var head = document.createElement('div');
      head.className = 'axis-head';
      var lbl = document.createElement('label');
      lbl.setAttribute('for', 'ax-' + ax.id);
      lbl.textContent = state.lang === 'ko' ? ax.ko : ax.en;
      var val = document.createElement('span');
      val.className = 'axis-val';
      val.textContent = state.vals[ax.id] + ' / 5';
      head.appendChild(lbl);
      head.appendChild(val);

      var inp = document.createElement('input');
      inp.type = 'range';
      inp.min = '1';
      inp.max = '5';
      inp.value = String(state.vals[ax.id]);
      inp.id = 'ax-' + ax.id;
      inp.className = 'axis-range';
      inp.addEventListener('input', function () {
        state.vals[ax.id] = Number(inp.value);
        val.textContent = inp.value + ' / 5';
        saveLocal();
      });
      row.appendChild(head);
      row.appendChild(inp);
      wrap.appendChild(row);
    });
  }

  function compute() {
    var sum = 0;
    AXES.forEach(function (a) { sum += Number(state.vals[a.id]) || 3; });
    var pct = Math.round(((25 - sum) / 20) * 100);
    var band = pct < 38 ? 'low' : pct < 70 ? 'mid' : 'high';
    return { pct: pct, band: band, tier: TIERS[band] };
  }

  function renderResult(emit) {
    var inp = document.getElementById('noteInput');
    state.note = inp ? inp.value.trim() : '';
    var res = compute();
    var isKo = state.lang === 'ko';

    document.getElementById('verdictTitle').textContent = isKo ? res.tier.koT : res.tier.enT;
    document.getElementById('verdictDesc').textContent = isKo ? res.tier.koD : res.tier.enD;
    document.getElementById('pctOut').textContent = res.pct + '%';
    document.getElementById('pctBar').style.width = res.pct + '%';
    document.getElementById('scriptOut').textContent = isKo ? res.tier.koS : res.tier.enS;

    var nb = document.getElementById('noteBox');
    var no = document.getElementById('noteOut');
    if (state.note) {
      no.textContent = state.note;
      nb.hidden = false;
    } else {
      no.textContent = '';
      nb.hidden = true;
    }

    var ul = document.getElementById('actionList');
    ul.textContent = '';
    (isKo ? res.tier.koL : res.tier.enL).forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });

    document.getElementById('resultCard').hidden = false;
    saveLocal();
    if (emit) sendSafeEvent(res.band);
  }

  function saveLocal() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ vals: state.vals, note: state.note })); } catch (_) {}
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (p.vals && typeof p.vals === 'object') state.vals = Object.assign(state.vals, p.vals);
      if (typeof p.note === 'string') state.note = p.note;
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
    buildAxes();
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
    var ni = document.getElementById('noteInput');
    if (ni && state.note) ni.value = state.note;

    document.getElementById('runBtn').addEventListener('click', function () { renderResult(true); });
    document.getElementById('resetBtn').addEventListener('click', function () {
      AXES.forEach(function (a) { state.vals[a.id] = 3; });
      state.note = '';
      if (ni) ni.value = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      document.getElementById('resultCard').hidden = true;
      buildAxes();
    });
    document.getElementById('copyBtn').addEventListener('click', function () {
      var txt = document.getElementById('scriptOut').textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(function () { showToast(t('copied')); }).catch(function () {});
      }
    });
    document.getElementById('shareBtn').addEventListener('click', function () {
      var shareUrl = "https://dopabrain.com/portal/tools/maladaptive-daydreaming-grounding.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "maladaptive-daydreaming-grounding",
        filename: 'dopabrain-maladaptive-daydreaming-grounding-card.png',
        badge: "PRESENT-MOMENT RETURN • ZERO-SHAME GROUNDING",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#a855f7",
        accent2: "#06b6d4"
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
