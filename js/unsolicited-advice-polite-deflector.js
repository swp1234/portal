/* Unsolicited Advice Polite Deflector & Boundary Scripts
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Unsolicited Advice Polite Deflector & Boundary Scripts | DopaBrain",
    "metaDesc": "Tired of relatives, coworkers, or acquaintances lecturing you on marriage, career, parenting, or health when you never asked? Copy calm, non-defensive pivot lines locally.",
    "kicker": "CALM BOUNDARIES • UNSOLICITED LIFE ADVICE POLITE DEFLECTOR",
    "heroTitle": "Unsolicited Advice Polite Deflector & Boundary Scripts",
    "heroLead": "Tired of relatives, coworkers, or acquaintances lecturing you on marriage, career, parenting, or health when you never asked? Copy calm, non-defensive pivot lines locally.",
    "chip1": "5 Advice Traps",
    "chip2": "Graceful Pivot Lines",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • SPOT WHAT TRIGGERS YOU IN UNSOLICITED ADVICE (1 = EASY, 5 = DRAINING)",
    "step1Title": "Which kind of unsolicited \"helpful\" lecturing wears you down most?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The recurring topic people keep lecturing you about (100% local):",
    "ctaBtn": "Build My Graceful Deflector Lines",
    "resultBadge": "STEP 2 • YOUR ZERO-DEBATE PIVOT PROTOCOL",
    "noteTitle": "Protected Life Topic",
    "meterLabel": "Conversational Peace",
    "scriptTitle": "Warm, Unhookable Deflector + Topic Pivot (Copy)",
    "stepsTitle": "3 Moves That End Unsolicited Lectures in 10 Seconds",
    "stickyTitle": "Do intrusive comments leave your nervous system buzzing for hours?",
    "stickySub": "Take the free 2-Min HSP Sensitivity Check",
    "stickyBtn": "HSP Test →",
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
    "title": "원치 않는 훈수·인생 조언(\"너를 위해서 하는 말인데\") 우아하게 넘기는 답변 키트 | DopaBrain",
    "metaDesc": "물어보지도 않았는데 결혼·이직·육아·건강에 대해 \"다 너 잘되라고 하는 말이야\"라며 훈수 두는 대화에 지치셨나요? 싸우지 않고 우아하게 화제를 돌리는 1줄 방어 멘트를 준비하세요.",
    "kicker": "대화 경계선 · 원치 않는 훈수·오지랖 조언 우아하게 흘려보내는 답변 키트",
    "heroTitle": "원치 않는 훈수·인생 조언(\"너를 위해서 하는 말인데\") 우아하게 넘기는 답변 키트",
    "heroLead": "물어보지도 않았는데 결혼·이직·육아·건강에 대해 \"다 너 잘되라고 하는 말이야\"라며 훈수 두는 대화에 지치셨나요? 싸우지 않고 우아하게 화제를 돌리는 1줄 방어 멘트를 준비하세요.",
    "chip1": "5가지 훈수 패턴",
    "chip2": "우아한 화제 전환",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 원치 않는 조언·훈수 피로 점검 (1 = 무던함, 5 = 매우 지침)",
    "step1Title": "가장 에너지를 빼앗는 원치 않는 훈수·조언 상황은?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 주변에서 자꾸 훈수 두는 단골 주제 1가지 (100% 로컬):",
    "ctaBtn": "우아한 훈수 넘기기 멘트 보기",
    "resultBadge": "2단계 • 논쟁 없이 끝내는 우아한 화제 전환 프로토콜",
    "noteTitle": "보호할 내 영역",
    "meterLabel": "대화 평온 지수",
    "scriptTitle": "상대 기분 상하지 않게 논쟁을 끝내는 1문장",
    "stepsTitle": "10초 만에 훈수 대화를 부드럽게 닫는 3가지 기술",
    "stickyTitle": "타인의 말과 참견이 오래 남는 감각 민감도를 점검해 볼까요?",
    "stickySub": "무료 2분 HSP 민감성 테스트 바로가기",
    "stickyBtn": "HSP 테스트 →",
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
    "title": "礼貌挡回不请自来的说教与人生指导 | DopaBrain",
    "heroTitle": "礼貌挡回不请自来的说教与人生指导",
    "heroLead": "告别无止境辩解，用10秒温和承接加自然转移话题的高情商脚本守住边界。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "頼んでいない説教・アドバイスを上品にかわす台本 | DopaBrain",
    "heroTitle": "頼んでいない説教・アドバイスを上品にかわす台本",
    "heroLead": "言い訳や反論をせず10秒で穏やかに話題を変える大人のバウンダリー文を作ります。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Frases Elegantes Contra Consejos No Pedidos | DopaBrain",
    "heroTitle": "Frases Elegantes Contra Consejos No Pedidos",
    "heroLead": "Cierra sermones en 10 segundos sin discutir usando respuestas amables de cambio de tema.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Frases Educadas Contra Conselhos Não Pedidos | DopaBrain",
    "heroTitle": "Frases Educadas Contra Conselhos Não Pedidos",
    "heroLead": "Encerre palestras indesejadas em 10 segundos sem briga com desvios leves de assunto.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Ungefragte Ratschläge höflich abprallen lassen | DopaBrain",
    "heroTitle": "Ungefragte Ratschläge höflich abprallen lassen",
    "heroLead": "Beende Belehrungen in 10 Sekunden ohne Rechtfertigung mit ruhigen Themenwechseln.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Dévier Poliment les Conseils Non Sollicités | DopaBrain",
    "heroTitle": "Dévier Poliment les Conseils Non Sollicités",
    "heroLead": "Clôturez les leçons de morale en 10 secondes sans débattre grâce à des pivots doux.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Вежливый уход от непрошеных советов (скрипты) | DopaBrain",
    "heroTitle": "Вежливый уход от непрошеных советов (скрипты)",
    "heroLead": "Закрывайте поучения за 10 секунд без оправданий мягким переводом темы локально.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "बिन माँगी सलाह को विनम्रता से टालने की स्क्रिप्ट | DopaBrain",
    "heroTitle": "बिन माँगी सलाह को विनम्रता से टालने की स्क्रिप्ट",
    "heroLead": "बहस या सफ़ाई दिए बिना 10 सेकंड में शालीनता से विषय बदलने के वाक्य बनाएं।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Skrip Sopan Menangkis Nasihat Tanpa Diminta | DopaBrain",
    "heroTitle": "Skrip Sopan Menangkis Nasihat Tanpa Diminta",
    "heroLead": "Akhiri ceramah tak diminta dalam 10 detik tanpa debat dengan pengalihan topik halus.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "İstenmeyen Tavsiyeleri Kibarca Savuşturma Kiti | DopaBrain",
    "heroTitle": "İstenmeyen Tavsiyeleri Kibarca Savuşturma Kiti",
    "heroLead": "Savunmaya geçmeden 10 saniyede konuyu nazikçe değiştiren sınır cümleleri üretin.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "jade_defending",
    "en": "JADE Trap — Justifying, Arguing, Defending, or Explaining your private choices for 20 minutes",
    "ko": "과잉 해명(JADE) — 내 선택이 틀리지 않았다고 20분씩 구구절절 설득하려 애씀"
  },
  {
    "id": "vent_vs_fix",
    "en": "Venting Turned Lecture — Sharing a tiny frustration only to get a 10-step unsolicited fix",
    "ko": "공감 기대→해결 훈수 — 그냥 속상하다고 말했을 뿐인데 10단계 훈수가 돌아옴"
  },
  {
    "id": "for_your_own_good",
    "en": "\"For Your Own Good\" Guilt — Feeling rude if you do not politely pretend to agree",
    "ko": "\"너 잘되라고\" 죄책감 — 맞장구쳐 주지 않으면 내가 예의 없는 사람처럼 느껴짐"
  },
  {
    "id": "repeated_boundary_test",
    "en": "Same Lecture Every Visit — The exact same relative or peer revisiting your choice every month",
    "ko": "매번 같은 레퍼토리 — 만날 때마다 똑같은 인생 주제로 훈수가 반복됨"
  },
  {
    "id": "lingering_rumination",
    "en": "Shower-Argument Replay — Rehearsing sharp comebacks for hours after the conversation ended",
    "ko": "뒷북 반추 — 대화가 끝난 뒤 \"아, 그렇게 말할걸!\" 하며 몇 시간씩 화가 남음"
  }
];
  var TIERS = {
  "low": {
    "enT": "High Lecture Fatigue — Drop Explaining (No JADE) & Use \"Thanks, I’ve Got It Handled + Pivot\"",
    "koT": "훈수 피로 높음 — 해명(JADE)을 멈추고 \"신경 써 줘서 고마워, 내가 잘 결정할게 + 화제 전환\"을 쓰세요",
    "enD": "Debating unsolicited advice only hands the other person more hooks to keep lecturing. A warm 1-sentence acknowledgment followed by an immediate topic question ends the lecture gracefully.",
    "koD": "훈수에 반박하거나 해명할수록 상대에게 대화 꼬투리만 더 주게 됩니다. 짧은 감사 표현 직후 곧바로 상대방 근황 질문으로 화제를 넘기면 10초 만에 깔끔히 끝납니다.",
    "enS": "\"Thanks for caring enough to share your take—we’re happy with the plan we’ve got in place. By the way, how did your [trip/project/weekend] turn out?\"",
    "koS": "\"신경 써서 말씀해 주셔서 감사해요! 이 부분은 제가 충분히 고민해서 제 방식대로 잘 정해 두었습니다. 그나저나 요즘 [여행/취미/근황]은 어떠세요?\"",
    "enL": [
      "Never JADE (Justify, Argue, Defend, Explain)—your life choices do not need committee approval.",
      "Pair a 5-word warm acknowledgment (\"Appreciate the thought—all set!\") with an immediate question about THEM.",
      "When venting to friends, preface with: \"Do you have 2 minutes for just a vent? Not looking for fixes today.\""
    ],
    "koL": [
      "내 선택을 정당화·논쟁·변명·설명(JADE)하지 마세요. 내 인생에 위원회 승인은 필요 없습니다.",
      "\"관심 고마워요, 잘 정리해 뒀어요\" 한 마디 직후 곧장 상대방 이야기를 묻는 질문으로 넘기세요.",
      "가까운 지인에게 하소연할 땐 먼저 \"해결책 말고 2분만 그냥 들어줄래?\"라고 예고하세요."
    ]
  },
  "mid": {
    "enT": "Moderate Friction — Keep 1 Warm Pivot Line Ready & Request Listening Upfront",
    "koT": "중간 피로 — 1줄 화제 전환 멘트를 익히고 \"공감만 필요해\"를 먼저 말하세요",
    "enD": "A lighthearted smile + topic pivot keeps dinners calm without sacrificing your autonomy.",
    "koD": "가벼운 미소와 화제 전환만으로 내 자율성을 지키며 편안한 분위기를 유지할 수 있습니다.",
    "enS": "\"Interesting angle—I’ll keep it in mind! Speaking of which, have you tried that new place yet?\"",
    "koS": "\"그런 관점도 있네요, 참고할게요! 그나저나 최근에 말씀하신 그 일은 잘 되셨어요?\"",
    "enL": [
      "Use neutral curiosity (\"Interesting thought!\") without promising to follow it.",
      "Change the subject with a genuine question.",
      "Share sensitive plans only after they are already decided."
    ],
    "koL": [
      "따르겠다는 약속 없이 \"그런 생각도 있네요\" 정도로 중립 수용하세요.",
      "자연스러운 질문으로 대화 방향을 돌리세요.",
      "민감한 결정은 이미 확정된 뒤에 가볍게 공유하세요."
    ]
  },
  "high": {
    "enT": "Graceful Boundary Composure — Unbothered Autonomy",
    "koT": "우아한 대화 경계 — 흔들리지 않는 자율성",
    "enD": "You filter helpful perspective from intrusive lecturing effortlessly.",
    "koD": "도움 되는 조언과 불필요한 참견을 감정 소모 없이 깔끔히 걸러내고 있습니다.",
    "enS": "\"I can hear an opinion without adopting it.\"",
    "koS": "\"남의 의견을 듣는다고 해서 그대로 따를 의무는 없다.\"",
    "enL": [
      "Keep your 1-line pivot handy for holidays.",
      "Seek advice deliberately only from people whose results you admire.",
      "Release post-chat replaying quickly."
    ],
    "koL": [
      "명절·모임용 1줄 화제 전환 멘트를 간직하세요.",
      "조언은 내가 정말 닮고 싶은 사람에게만 능동적으로 구하세요.",
      "대화 후 잔상은 빠르게 흘려보내세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_unsolicited_advice_v1";
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
      window.gtag('event', "unsolicited_advice_complete", {
        tool_slug: "unsolicited-advice-polite-deflector",
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
      var shareUrl = "https://dopabrain.com/portal/tools/unsolicited-advice-polite-deflector.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "unsolicited-advice-polite-deflector",
        filename: 'dopabrain-unsolicited-advice-polite-deflector-card.png',
        badge: "CALM BOUNDARIES • UNSOLICITED LIFE ADVICE POLITE DEFLECTOR",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#a855f7",
        accent2: "#6366f1"
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
