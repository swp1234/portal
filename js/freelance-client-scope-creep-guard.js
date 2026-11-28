/* Freelance Client Scope-Creep Boundary Guard
 * 100% browser-local, deterministic, XSS-safe (textContent only), privacy-safe, 12 languages.
 */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'];
  var UI = {
  "en": {
    "title": "Freelance Client Scope-Creep Boundary Guard | DopaBrain",
    "metaDesc": "Did a \"quick tiny tweak\" quietly add 8 unpaid hours to your fixed-fee project? Audit 5 scope-leak triggers and copy warm, firm Change-Order scripts locally.",
    "kicker": "INDEPENDENT WORK • FREELANCE CLIENT SCOPE-CREEP BOUNDARY GUARD",
    "heroTitle": "Freelance Client Scope-Creep Boundary Guard",
    "heroLead": "Did a \"quick tiny tweak\" quietly add 8 unpaid hours to your fixed-fee project? Audit 5 scope-leak triggers and copy warm, firm Change-Order scripts locally.",
    "chip1": "5 Scope Leaks",
    "chip2": "Warm Change-Order Script",
    "chip3": "100% Private (Local)",
    "step1Badge": "STEP 1 • AUDIT YOUR CLIENT SCOPE-CREEP TRIGGERS (1 = CLEAR, 5 = LEAKING)",
    "step1Title": "How are unpaid extras sneaking into your current client project?",
    "step1Sub": "Your answers stay 100% private in your local browser—zero personal details are ever sent anywhere.",
    "inputLabel": "Optional: The exact \"small extra\" requested right now (100% local):",
    "ctaBtn": "Generate My Polite Scope Script",
    "resultBadge": "STEP 2 • YOUR WARM CHANGE-ORDER PROTOCOL",
    "noteTitle": "Out-of-Scope Request",
    "meterLabel": "Scope & Margin Protection",
    "scriptTitle": "Warm, Professional \"Yes, And Here Is the Add-On\" Reply",
    "stepsTitle": "3 Habits That Stop Scope Creep Without Awkwardness",
    "stickyTitle": "Is underpaid over-delivery pushing you toward freelance burnout?",
    "stickySub": "Take the free 2-Min Burnout Check",
    "stickyBtn": "Burnout Test →",
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
    "title": "프리랜서 클라이언트 추가 요청(스코프 크립) 정중한 견적·일정 방어 키트 | DopaBrain",
    "metaDesc": "\"간단한 수정 하나만 더요\"가 무료 야근 8시간으로 불어나고 있나요? 5가지 스코프 누수 패턴을 점검하고 관계를 해치지 않는 추가 견적·일정 조율 문장을 만드세요.",
    "kicker": "프리랜서·외주 · 클라이언트 \"딱 하나만 추가\" 스코프 크립 방어 & 견적 안내 키트",
    "heroTitle": "프리랜서 클라이언트 추가 요청(스코프 크립) 정중한 견적·일정 방어 키트",
    "heroLead": "\"간단한 수정 하나만 더요\"가 무료 야근 8시간으로 불어나고 있나요? 5가지 스코프 누수 패턴을 점검하고 관계를 해치지 않는 추가 견적·일정 조율 문장을 만드세요.",
    "chip1": "5가지 범위 누수",
    "chip2": "추가 견적 스크립트",
    "chip3": "100% 로컬 비공개",
    "step1Badge": "1단계 • 외주·클라이언트 범위 누수 점검 (1 = 명확, 5 = 무료 추가 과다)",
    "step1Title": "현재 프로젝트에 계약 외 무료 작업이 스며드는 가장 큰 경로는?",
    "step1Sub": "모든 답변과 메모는 내 브라우저 안에만 저장되며 외부 서버로 전송되지 않습니다.",
    "inputLabel": "선택: 지금 들어온 계약 외 추가 요청 1가지 (100% 로컬):",
    "ctaBtn": "정중한 범위·견적 안내문 보기",
    "resultBadge": "2단계 • 관계를 지키는 스코프·추가 견적 프로토콜",
    "noteTitle": "범위 외 요청 항목",
    "meterLabel": "범위·수익성 보호 지수",
    "scriptTitle": "거절하지 않고 추가 비용·일정을 안내하는 2문장",
    "stepsTitle": "어색함 없이 무료 추가 작업을 막는 3가지 습관",
    "stickyTitle": "반복되는 무료 추가 작업이 번아웃을 키우고 있는지 확인해 볼까요?",
    "stickySub": "무료 2분 번아웃 테스트 바로가기",
    "stickyBtn": "번아웃 테스트 →",
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
    "title": "自由职业防需求蔓延与礼貌加价脚本 | DopaBrain",
    "heroTitle": "自由职业防需求蔓延与礼貌加价脚本",
    "heroLead": "把“顺手改一下”转化为专业的A/B增项报价与排期确认，不伤客户关系。",
    "back": "← Wellness Lab"
  },
  "ja": {
    "title": "フリーランス追加依頼（スコープクリープ）防衛キット | DopaBrain",
    "heroTitle": "フリーランス追加依頼（スコープクリープ）防衛キット",
    "heroLead": "「ちょっとだけ修正」の無償対応を防ぎ、角を立てずに追加見積・納期調整を提案します。",
    "back": "← Wellness Lab"
  },
  "es": {
    "title": "Escudo Contra Scope Creep Freelance | DopaBrain",
    "heroTitle": "Escudo Contra Scope Creep Freelance",
    "heroLead": "Convierte “pequeños favores” sin pagar en opciones claras de presupuesto adicional.",
    "back": "← Wellness Lab"
  },
  "pt": {
    "title": "Escudo Contra Scope Creep Freelance | DopaBrain",
    "heroTitle": "Escudo Contra Scope Creep Freelance",
    "heroLead": "Transforme “ajustezinhos” grátis em propostas educadas de aditivo sem clima chato.",
    "back": "← Wellness Lab"
  },
  "de": {
    "title": "Freelance Scope-Creep-Schutz & Zusatzangebot | DopaBrain",
    "heroTitle": "Freelance Scope-Creep-Schutz & Zusatzangebot",
    "heroLead": "Wandle unbezahlte „kleine Extras“ höflich in klare Option-A/B-Zusatzangebote um.",
    "back": "← Wellness Lab"
  },
  "fr": {
    "title": "Bouclier Scope Creep Freelance & Avenant | DopaBrain",
    "heroTitle": "Bouclier Scope Creep Freelance & Avenant",
    "heroLead": "Transformez les « petits ajouts gratuits » en options A/B claires et professionnelles.",
    "back": "← Wellness Lab"
  },
  "ru": {
    "title": "Защита фрилансера от бесплатных доработок | DopaBrain",
    "heroTitle": "Защита фрилансера от бесплатных доработок",
    "heroLead": "Переведите «маленькие правки» в вежливое допсоглашение с вариантами А/Б локально.",
    "back": "← Wellness Lab"
  },
  "hi": {
    "title": "फ्रीलांस क्लाइंट स्कोप-क्रीप बाउंड्री गार्ड | DopaBrain",
    "heroTitle": "फ्रीलांस क्लाइंट स्कोप-क्रीप बाउंड्री गार्ड",
    "heroLead": "बिना भुगतान के \"छोटे बदलाव\" को विनम्र A/B ऐड-ऑन कोट स्क्रिप्ट में बदलें।",
    "back": "← Wellness Lab"
  },
  "id": {
    "title": "Pelindung Scope Creep Klien Freelance | DopaBrain",
    "heroTitle": "Pelindung Scope Creep Klien Freelance",
    "heroLead": "Ubah revisi gratis diam-diam menjadi opsi tambahan biaya A/B yang sopan dan jelas.",
    "back": "← Wellness Lab"
  },
  "tr": {
    "title": "Freelance Kapsam Kayması (Scope Creep) Kalkanı | DopaBrain",
    "heroTitle": "Freelance Kapsam Kayması (Scope Creep) Kalkanı",
    "heroLead": "Ücretsiz “ufak dokunuş” isteklerini kibar A/B ek teklif seçeneğine dönüştürün.",
    "back": "← Wellness Lab"
  }
};
  var AXES = [
  {
    "id": "unpriced_quick_favor",
    "en": "\"Quick Favor\" Reflex — Absorbing 2-hour tweaks for free because quoting feels awkward",
    "ko": "\"잠깐이면 되니까\" 반사 — 견적 말하기 어색해서 2시간짜리 수정을 그냥 해 줌"
  },
  {
    "id": "unlimited_revision_fog",
    "en": "Vague Revision Cap — No written line separating Round 2 polish from brand-new direction",
    "ko": "수정 횟수 모호 — 단순 보완과 전면 방향 변경의 경계가 문서에 없음"
  },
  {
    "id": "verbal_call_additions",
    "en": "Unlogged Call Requests — Agreeing verbally on Zoom without recapping scope impact in email",
    "ko": "통화 중 구두 수락 — 미팅에서 즉석 요청을 받고 메일로 범위 변경을 기록하지 않음"
  },
  {
    "id": "fear_of_losing_client",
    "en": "Client-Loss Anxiety — Over-giving out of fear they will not rehire you if you price add-ons",
    "ko": "재계약 불안 — 추가 비용을 말하면 다음 프로젝트가 끊길까 봐 과잉 헌신함"
  },
  {
    "id": "deadline_compression",
    "en": "Unchanged Deadline — Accepting extra deliverables without pushing the delivery date",
    "ko": "마감일 고정 — 분량은 늘었는데 납기일을 그대로 두어 야근으로 메움"
  }
];
  var TIERS = {
  "low": {
    "enT": "Active Scope Creep — Switch to \"Happy to Add That + Option A / Option B\"",
    "koT": "스코프 누수 진행 중 — \"기꺼이 가능합니다 + A안/B안 선택\" 화법으로 전환하세요",
    "enD": "Good clients respect clear business boundaries; framing extras as an enthusiastic paid add-on (\"Yes, and...\") protects both trust and your hourly margin.",
    "koD": "좋은 클라이언트는 명확한 범위 안내를 신뢰합니다. 거절 대신 \"기꺼이 추가 가능합니다 + 일정/비용 옵션\"으로 안내하면 관계와 수익성을 모두 지킵니다.",
    "enS": "\"Love this idea! Since these extra sections sit outside our Phase 1 agreement, we can either (A) add them as a quick Phase 1B add-on (+$X / +2 days) or (B) ship Phase 1 on schedule Friday and queue these for Phase 2—which do you prefer?\"",
    "koS": "\"좋은 아이디어입니다! 요청 주신 항목은 1차 계약 범위 외 신규 분량이라, (A) 추가 옵션(+X원 / +2일)으로 바로 포함하거나 (B) 기존 일정대로 1차 납품 후 2차로 진행하는 방법 중 편하신 쪽을 선택해 주시겠어요?\"",
    "enL": [
      "Always answer scope additions with warmth first (\"Great idea!\"), then offer Option A (paid add-on) vs Option B (Phase 2).",
      "Send a 3-bullet email recap after every call listing agreed deliverables and revision rounds.",
      "Include an explicit \"Additional revisions/features billed at $X/hr\" line in every future proposal."
    ],
    "koL": [
      "추가 요청에는 먼저 긍정(\"좋은 방향입니다!\") 후 A안(추가 견적+일정)과 B안(2차 이월) 중 선택권을 드리세요.",
      "모든 미팅 직후 합의된 납품 항목과 수정 횟수를 3줄 메일로 기록하세요.",
      "다음 견적서부터 \"범위 외 추가 항목은 시간/건당 별도 협의\" 문구를 기본 삽입하세요."
    ]
  },
  "mid": {
    "enT": "Occasional Drift — Add a 2-Option Add-On Template to Your Replies",
    "koT": "간헐적 범위 확대 — A안/B안 선택 템플릿만 답장에 기본 장착하세요",
    "enD": "A brief Phase 1 vs Phase 2 recap catches 80% of accidental client requests kindly.",
    "koD": "1차 완료 후 2차 추가 안내 한 줄만으로도 의도치 않은 추가 요청의 80%가 깔끔히 정리됩니다.",
    "enS": "\"Happy to include this as a small Phase 2 add-on once we wrap Friday’s milestone!\"",
    "koS": "\"금요일 1차 마감 완료 후 2차 추가 옵션으로 깔끔하게 진행해 드리겠습니다!\"",
    "enL": [
      "Log every out-of-scope ask in a visible \"Phase 2 Parking Lot\" list.",
      "Tie any extra deliverable to a proportional timeline shift.",
      "Review revision count before starting Round 3."
    ],
    "koL": [
      "범위 외 아이디어는 \"2차 후보 목록\"에 모아 시각화하세요.",
      "작업량이 늘면 마감일도 반드시 비례 조정하세요.",
      "2차 수정 완료 시점에 잔여 수정 횟수를 부드럽게 공유하세요."
    ]
  },
  "high": {
    "enT": "Clean Scope Governance — Sustainable Independent Margin",
    "koT": "명확한 범위 관리 — 지속 가능한 프리랜서 수익 구조",
    "enD": "Clear proposals and calm change-order options keep clients happy and evenings free.",
    "koD": "명확한 견적 기준과 차분한 옵션 제시로 신뢰와 저녁 시간을 모두 지키고 있습니다.",
    "enS": "\"Clear scope makes great client partnerships last.\"",
    "koS": "\"명확한 범위 합의가 오래가는 파트너십을 만든다.\"",
    "enL": [
      "Reuse your winning scope-summary header on every quote.",
      "Keep a standing Phase 2 upsell menu.",
      "Protect buffer days between client sprints."
    ],
    "koL": [
      "검증된 범위 요약 헤더를 모든 견적서에 재사용하세요.",
      "2차 고도화 업셀 메뉴를 상시 준비해 두세요.",
      "프로젝트 사이에 최소 1~2일 버퍼를 확보하세요."
    ]
  }
};
  var STORAGE_KEY = "dopabrain_scope_creep_v1";
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
      window.gtag('event', "scope_creep_guard_complete", {
        tool_slug: "freelance-client-scope-creep-guard",
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
      var shareUrl = "https://dopabrain.com/portal/tools/freelance-client-scope-creep-guard.html" + (state.lang === 'en' ? '' : '?lang=' + state.lang);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(function () { showToast(t('shared')); }).catch(function () {});
      }
    });
    document.getElementById('storyCardBtn').addEventListener('click', function () {
      if (!window.DopaBrainStoryCard) return;
      var res = compute();
      var isKo = state.lang === 'ko';
      window.DopaBrainStoryCard.downloadStoryCard({
        slug: "freelance-client-scope-creep-guard",
        filename: 'dopabrain-freelance-client-scope-creep-guard-card.png',
        badge: "INDEPENDENT WORK • FREELANCE CLIENT SCOPE-CREEP BOUNDARY GUARD",
        headline: isKo ? res.tier.koT : res.tier.enT,
        subtitle: t('meterLabel') + ': ' + res.pct + '%',
        metrics: [
          { label: 'Index', value: res.pct + '%' },
          { label: 'Mode', value: res.band.toUpperCase() }
        ],
        quote: isKo ? res.tier.koS : res.tier.enS,
        accent: "#10b981",
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
