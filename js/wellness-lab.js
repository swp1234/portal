/* DopaBrain Interactive Mental Wellness Lab — 12-Language Hub Engine (100% browser-local, zero PII) */
(function () {
  'use strict';

  var SUPPORTED = ['en', 'ko', 'zh', 'ja', 'es', 'pt', 'de', 'fr', 'id', 'tr', 'hi', 'ru'];

  var TOOLS = [
    { slug: 'daily-mind-checkin', cat: 'burnout', emoji: '🧭', tag: '60s Router',
      en: ['Daily 60-Second Mind Check-In', 'Rate energy, tension & fog to get a personalized tool prescription + local 7-day streak.'],
      ko: ['60초 데일리 마음 체크인', '에너지·긴장·브레인포그를 60초 만에 점검하고 맞춤 도구와 7일 스트릭을 확인하세요.'],
      ja: ['60秒デイリー・マインドチェック', 'エネルギー・緊張・脳疲労を60秒で記録し、最適なケアツールを提案します。'],
      zh: ['60秒每日情绪自检', '快速评估精力、紧张度与脑雾，获取个性化工具处方与7天本地打卡。'] },
    { slug: 'overthinking-rumination-breaker', cat: 'anxiety', emoji: '🌀', tag: 'CBT · 90s Shuffle',
      en: ['Overthinking & Rumination Breaker', 'Sort worries via the CBT Worry Tree, park unsolvable loops & run a 90s cognitive shuffle.'],
      ko: ['생각 과부하·반추 브레이커', 'CBT 걱정 트리로 해결 가능/불가능 고민을 분류하고 90초 인지 셔플로 루프를 끊습니다.'],
      ja: ['考えすぎ・反芻ループブレーカー', 'CBT悩みツリーと90秒認知シャッフルで夜の反芻思考をリセットします。'],
      zh: ['过度思考与反刍终结器', '用CBT担忧树拆分纠结念头，并启动90秒认知洗牌打断循环。'] },
    { slug: 'cognitive-distortion-reframer', cat: 'anxiety', emoji: '🪞', tag: 'CBT Reframe',
      en: ['CBT Cognitive Distortion Reframer', 'Spot 10 thinking traps (catastrophizing, mind reading) and craft a balanced thought card.'],
      ko: ['CBT 인지 왜곡 리프레이머', '파국화·독심술 등 10가지 사고 오류를 찾고 균형 잡힌 현실 사고로 재구성합니다.'],
      ja: ['CBT認知の歪みリフレーマー', '10の思考のクセを特定し、現実的で優しい視点へ書き換えます。'],
      zh: ['CBT认知扭曲重构器', '识别10种常见思维陷阱，生成理性平衡的替代想法卡。'] },
    { slug: 'somatic-tension-body-map', cat: 'anxiety', emoji: '🧘', tag: '60s PMR',
      en: ['Somatic Tension Body Map & PMR', 'Tap tight body zones (jaw, shoulders, chest, gut) for targeted unwinding & 60s PMR pacing.'],
      ko: ['신체 긴장 바디맵 & 60초 PMR', '턱·어깨·가슴·복부 긴장 부위를 선택해 맞춤 이완과 60초 점진적 근육 이완을 진행합니다.'],
      ja: ['身体緊張ボディマップ＆60秒PMR', '顎・肩・胸などのこわばりをタップし、60秒筋弛緩法で緊張をほどきます。'],
      zh: ['躯体紧张身体地图与60秒PMR', '点选下颌、肩颈、胸口紧绷区，跟随60秒渐进式肌肉放松呼气减压。'] },
    { slug: 'grounding-exercise', cat: 'anxiety', emoji: '🌿', tag: '5-4-3-2-1',
      en: ['5-4-3-2-1 Sensory Grounding Pacer', 'Guided sensory anchoring and physiological sigh breathing to calm acute spikes fast.'],
      ko: ['5-4-3-2-1 감각 그라운딩 페이서', '불안이 급상승할 때 오감 앵커링과 호흡 페이서로 지금 여기로 안전하게 돌아옵니다.'],
      ja: ['5-4-3-2-1 感覚グラウンディング', '五感アンカリングと呼吸ペーサーで急な不安を素早く落ち着かせます。'],
      zh: ['5-4-3-2-1 感官着陆呼吸引导', '通过五感锚定与节奏呼吸，快速平复突发的焦虑与心慌。'] },
    { slug: 'window-of-tolerance-check', cat: 'anxiety', emoji: '⚖️', tag: 'Nervous System',
      en: ['Window of Tolerance Nervous System Check', 'Detect hyperarousal (fight/flight) vs. hypoarousal (freeze/numb) and get matched regulation.'],
      ko: ['내성 창(Window of Tolerance) 점검', '과각성(불안/초조)과 저각성(무기력/동결)을 구분하고 신경계 안정 루틴을 받으세요.'],
      ja: ['耐性領域（神経系）チェック', '過覚醒と低覚醒を見分け、今の神経状態に合った調整ステップを提案します。'],
      zh: ['情绪耐受窗口神经自检', '区分过度亢奋与冻结麻木状态，匹配对应的神经系统调节动作。'] },
    { slug: 'emotion-regulation-planner', cat: 'anxiety', emoji: '🎛️', tag: 'Action Plan',
      en: ['Emotion Regulation Interactive Planner', 'Build a structured if-then regulation protocol for high-intensity emotional moments.'],
      ko: ['감정 조절 인터랙티브 플래너', '감정이 격해지는 상황별 즉각 대응 프로토콜을 미리 설계해 두세요.'],
      ja: ['感情調整プランナー', '強い感情が揺れた時のための実践的な対処プロトコルを作成します。'],
      zh: ['情绪调节行动规划器', '为高强度情绪波动场景定制清晰可执行的当下应对方案。'] },
    { slug: 'burnout-stress-differential', cat: 'burnout', emoji: '🔥', tag: 'Differential',
      en: ['Burnout vs. Stress Differential Audit', 'Distinguish acute overload from chronic burnout exhaustion and unlock a recovery roadmap.'],
      ko: ['번아웃 vs 스트레스 감별 진단', '일시적 스트레스와 만성 번아웃을 정밀 구분하고 맞춤 회복 로드맵을 받으세요.'],
      ja: ['バーンアウト vs ストレス鑑別', '一時的ストレスと慢性的な燃え尽きを見極め、回復ロードマップを作成します。'],
      zh: ['职业倦怠与压力鉴别自查', '区分短期高压与慢性倦怠枯竭，获取分阶段恢复指南。'] },
    { slug: 'emotional-energy-audit', cat: 'burnout', emoji: '⚡', tag: 'Energy Leaks',
      en: ['Emotional Energy Leak Audit', 'Pinpoint hidden daily energy drains, map restorers & draft a local Stop-Doing boundary card.'],
      ko: ['감정 에너지 누수 감사', '하루 에너지를 갉아먹는 보이지 않는 누수를 찾고 Stop-Doing 경계 카드를 만드세요.'],
      ja: ['感情エネルギー漏れ診断', '見えない消耗源を特定し、「やらないこと」境界線カードを作成します。'],
      zh: ['情绪能量漏洞审计器', '揪出隐形消耗源并配对充能动作，生成专属停止清单边界卡。'] },
    { slug: 'social-battery-recharge-planner', cat: 'burnout', emoji: '🔋', tag: 'Battery %',
      en: ['Social Battery Calculator & Recharge Planner', 'Calculate remaining social battery %, quiet recovery minutes & a warm early-exit script.'],
      ko: ['소셜 배터리 계산기 & 충전 플래너', '남은 대인 에너지(%)와 필요한 혼자만의 충전 시간, 정중한 귀가 멘트를 계산합니다.'],
      ja: ['ソーシャルバッテリー計算機', '残りの対人バッテリー％と回復時間、角が立たない帰宅フレーズを生成します。'],
      zh: ['社交电量计算与回血计划', '测算剩余社交电量百分比、独处回血时长与礼貌提前退场话术。'] },
    { slug: 'cognitive-load-calculator', cat: 'burnout', emoji: '🧮', tag: 'Bandwidth',
      en: ['Cognitive Load & Bandwidth Calculator', 'Quantify open mental loops, context switches & decision fatigue to trim overload today.'],
      ko: ['인지 부하·정신 대역폭 계산기', '열려 있는 일·문맥 전환·결정 피로를 수치화해 오늘 당장 덜어낼 항목을 고릅니다.'],
      ja: ['認知負荷・脳メモリ計算機', '未処理タスクや判断疲れを可視化し、今日手放すべき負荷を特定します。'],
      zh: ['认知负荷与脑力带宽计算器', '量化未闭环事项与决策疲劳，立刻给超载的大脑减负。'] },
    { slug: 'boundary-script-builder', cat: 'relationships', emoji: '🛡️', tag: 'Ready Scripts',
      en: ['Healthy Boundary Script Builder', 'Generate calm, guilt-free boundary scripts across work, family, friends & dating scenarios.'],
      ko: ['건강한 경계선 스크립트 빌더', '직장·가족·친구·연인 상황에서 죄책감 없이 정중하게 거절하는 대화문을 생성합니다.'],
      ja: ['バウンダリー会話スクリプト', '職場・家族・友人に罪悪感なく穏やかに線を引くフレーズを作成します。'],
      zh: ['健康边界话术生成器', '针对职场、家庭、亲密关系生成温和坚定的无愧疚拒绝模板。'] },
    { slug: 'gaslighting-reality-check', cat: 'relationships', emoji: '🔎', tag: 'Grey-Rock',
      en: ['Gaslighting & Manipulation Reality-Check', 'Check 8 recurring distortion patterns, anchor 1 objective fact locally & get Grey-Rock scripts.'],
      ko: ['가스라이팅·조작 현실 점검 로그', '8가지 현실 왜곡·DARVO 패턴을 점검하고 객관적 사실 앵커와 그레이락 문장을 만드세요.'],
      ja: ['ガスライティング現実確認ログ', '8つの心理操作パターンを整理し、事実アンカーと落ち着いた境界フレーズを作成します。'],
      zh: ['煤气灯与操控现实核查日志', '核查8类常见现实扭曲信号，本地锚定客观事实并生成灰岩边界话术。'] },
    { slug: 'codependency-reset-audit', cat: 'relationships', emoji: '🧩', tag: 'Own Lane',
      en: ['Codependency & Interdependence Audit', 'Rate 6 rescuing & mood-scanning habits to build a Detach-With-Love plan & Own-Lane script.'],
      ko: ['공동의존·상호독립 리셋 감사', '타인의 기분을 책임지려는 6가지 과잉배려 습관을 점검하고 건강한 거리 두기를 설계합니다.'],
      ja: ['共依存リセット＆境界線診断', '過度な気遣いや巻き込まれ癖を整理し、健全な相互依存ステップを作ります。'],
      zh: ['共生依赖与健康互赖审计', '评估6项过度负责与迎合习惯，定制温和分离与守住自我边界计划。'] },
    { slug: 'attachment-trigger-decoder', cat: 'relationships', emoji: '🔗', tag: 'Attachment',
      en: ['Attachment Trigger Decoder', 'Decode anxious protest vs. avoidant shutdown triggers and rehearse a secure response.'],
      ko: ['애착 트리거 디코더', '불안형 매달림·회피형 닫힘 방아쇠를 해독하고 안정형 소통 문장을 연습하세요.'],
      ja: ['愛着トリガー・デコーダー', '不安型・回避型の反応パターンを解き明かし、安心感のある伝え方を整えます。'],
      zh: ['依恋触发点解码器', '拆解焦虑索取与回避疏离的触发瞬间，演练安全型沟通回应。'] },
    { slug: 'rsd-coping-audit', cat: 'relationships', emoji: '🫧', tag: 'RSD Relief',
      en: ['Rejection Sensitive Dysphoria (RSD) Audit', 'De-escalate sharp sting from perceived criticism or silence with an evidence reality check.'],
      ko: ['거절 민감성(RSD) 대처 감사', '사소한 비판이나 무응답에 치솟는 거절 통증을 현실 검증 단계로 부드럽게 진정시킵니다.'],
      ja: ['拒絶感受性（RSD）コーピング', '批判や既読無視への強い痛みを、事実チェックで優しくクールダウンします。'],
      zh: ['拒绝敏感焦虑（RSD）应对自查', '用事实核查缓和因轻微批评或沉默引发的强烈委屈与刺痛感。'] },
    { slug: 'inner-critic-compassion-lab', cat: 'relationships', emoji: '💗', tag: 'Compassion',
      en: ['Inner Critic to Self-Compassion Lab', 'Translate harsh perfectionist self-talk into grounded, encouraging coaching statements.'],
      ko: ['내면 비판자 → 자기연민 전환 랩', '가혹한 완벽주의 자기 비난을 따뜻하고 현실적인 코칭 문장으로 바꿉니다.'],
      ja: ['内なる批判者・セルフコンパッション', '厳しい自己批判を、味方になる現実的な声かけへ変換します。'],
      zh: ['内在批评者与自我关怀实验室', '把苛刻的自我指责转化为温和有力量的支持性内在对话。'] },
    { slug: 'perfectionism-loop-decoder', cat: 'focus', emoji: '✨', tag: '80% Ship',
      en: ['Perfectionism & Self-Sabotage Decoder', 'Break all-or-nothing restarts & endless polishing with an 80% Ship Contract & 5m draft timer.'],
      ko: ['완벽주의·자기방해 루프 디코더', '백지 재시작과 끝없는 다듬기를 80% 완료 계약과 5분 못생긴 초안 타이머로 끊어냅니다.'],
      ja: ['完璧主義・自己妨害デコーダー', '完璧主義の止まり癖を80%完了ルールと5分ドラフトタイマーで突破します。'],
      zh: ['完美主义与自我破坏解码器', '用80%交付契约和5分钟丑陋初稿计时器，打破反复推倒与过度打磨循环。'] },
    { slug: 'procrastination-root-decoder', cat: 'focus', emoji: '⏳', tag: 'Micro-Start',
      en: ['Procrastination Root-Cause Decoder', 'Uncover whether delay stems from fear, perfectionism or ambiguity & build a 2-minute start.'],
      ko: ['미루기 근본 원인 디코더', '미루기의 진짜 원인(두려움·완벽주의·모호함)을 찾아 2분 초소형 시작법을 설계합니다.'],
      ja: ['先延ばし根本原因デコーダー', '先延ばしの原因を特定し、2分で動ける最小ステップを作ります。'],
      zh: ['拖延根因解码器', '识别拖延背后的恐惧、完美主义或模糊感，生成2分钟微启动方案。'] },
    { slug: 'adhd-focus-friction-audit', cat: 'focus', emoji: '🎯', tag: 'Executive Function',
      en: ['ADHD Focus Friction & Micro-Start Audit', 'Pinpoint task-initiation blockers and match sensory, body-doubling & chunking aids.'],
      ko: ['ADHD 집중 마찰 & 시작 감사', '작업 시작을 막는 실행 기능 마찰을 찾고 환경·쪼개기·바디더블링 처방을 받으세요.'],
      ja: ['ADHD集中フリクション診断', '着手ハードルの原因を洗い出し、環境調整と細分化の工夫を提案します。'],
      zh: ['ADHD专注阻力与启动审计', '定位任务启动卡点，匹配环境降噪、拆解与陪伴式专注策略。'] },
    { slug: 'dopamine-detox-protocol', cat: 'focus', emoji: '📵', tag: 'Reset Plan',
      en: ['Dopamine Detox Protocol Planner', 'Design a realistic low-stimulation reset window to recover focus from endless scrolling.'],
      ko: ['도파민 디톡스 프로토콜 플래너', '쇼츠·무한 스크롤 피로에서 벗어나 집중력을 되찾는 현실적인 저자극 리셋 계획표.'],
      ja: ['ドーパミンデトックス設計', 'スマホ過刺激から集中力を取り戻す現実的なリセット計画を作ります。'],
      zh: ['多巴胺戒断与专注重置计划', '定制温和可执行的高刺激减量方案，摆脱刷屏疲劳恢复专注力。'] },
    { slug: 'decision-matrix', cat: 'focus', emoji: '📊', tag: 'Clarity',
      en: ['Weighted Decision Matrix Builder', 'Compare complex choices by weighted priorities to end analysis paralysis cleanly.'],
      ko: ['가중치 의사결정 매트릭스', '복잡한 선택지를 핵심 기준별 가중치로 비교해 결정 마비를 깔끔하게 끝냅니다.'],
      ja: ['重み付け意思決定マトリクス', '複数の選択肢を優先度スコアで比較し、迷いをスッキリ整理します。'],
      zh: ['加权决策矩阵生成器', '按核心权重对比备选项，快速走出反复纠结与选择困难。'] },
    { slug: 'sleep-chronotype-reset', cat: 'sleep', emoji: '🌙', tag: 'Circadian',
      en: ['Sleep Chronotype & Wind-Down Reset', 'Find your chronotype window and build a personalized caffeine-cutoff & evening wind-down.'],
      ko: ['수면 크로노타입 & 취침 리셋', '나의 생체 시계 유형에 맞춘 카페인 컷오프와 저녁 진정 루틴을 설계하세요.'],
      ja: ['睡眠クロノタイプ＆入眠リセット', '体内時計タイプに合わせたカフェイン制限と夜のクールダウン設計。'],
      zh: ['睡眠节律与睡前放松重置器', '匹配你的生物钟类型，生成咖啡因截止时间与睡前降噪流程。'] },
    { slug: 'social-anxiety-exposure-ladder', cat: 'anxiety', emoji: '🪜', tag: 'CBT SUDS',
      en: ['Social Anxiety Exposure Ladder', 'Rate 6 social situations (0–100 SUDS) to auto-sort a gentle CBT confidence ladder.'],
      ko: ['사회불안 CBT 노출 사다리', '6가지 대인 상황 긴장도(SUDS 0–100)로 나만의 단계별 자신감 사다리를 자동 정렬합니다.'],
      ja: ['社交不安・自信ステップ階段', '6つの場面をSUDS評価し、無理なく進めるCBT段階ステップを自動作成します。'],
      zh: ['社交焦虑 CBT 渐进暴露阶梯', '为6种社交场景打分(SUDS 0–100)，自动排序温和自信阶梯。'] },
    { slug: 'vagal-nervous-system-reset', cat: 'anxiety', emoji: '🌊', tag: '60s Sigh',
      en: ['Vagal Tone & Nervous System Reset', 'Match Wired, Freeze, or Overstimulated states to somatic resets + a 60s Physiological Sigh pacer.'],
      ko: ['미주신경·신경계 리셋 메뉴', '과각성·동결·감각 과부하에 맞는 3분 신체 리셋과 60초 생리적 한숨 페이서를 제공합니다.'],
      ja: ['迷走神経・自律神経リセット', '過覚醒・フリーズ・感覚過多に合う身体リセットと60秒ため息呼吸ペーサー。'],
      zh: ['迷走神经与神经系统重置菜单', '按亢奋、冻结或感官过载状态匹配躯体放松与60秒生理叹息引导。'] },
    { slug: 'doomscrolling-circuit-breaker', cat: 'focus', emoji: '📵', tag: 'Friction',
      en: ['Doomscrolling Circuit Breaker', 'Calculate annual waking days lost to feeds and stack 4 physical friction locks tonight.'],
      ko: ['둠스크롤링·야간 폰 차단기', '무의식 스크롤이 1년에 빼앗는 일수를 계산하고 4가지 물리 마찰 잠금을 세팅합니다.'],
      ja: ['ドゥームスクロール遮断ツール', '年間で失う時間を計算し、意志力に頼らない4つの物理ブロックを設計します。'],
      zh: ['无意识刷屏断路器', '测算每年被刷屏吞噬的天数，用4道物理摩擦锁替代消耗意志力。'] },
    { slug: 'inner-child-need-decoder', cat: 'relationships', emoji: '💛', tag: 'Reparenting',
      en: ['Inner Child & Core Need Decoder', 'Uncover 5 core unmet emotional needs beneath adult triggers & craft a reparenting anchor.'],
      ko: ['내면아이 핵심 욕구 디코더', '현재 감정 반응 뒤에 숨은 5가지 핵심 욕구를 해독하고 따뜻한 리페어런팅 문장을 만드세요.'],
      ja: ['インナーチャイルド欲求デコーダー', '感情反応の奥にある5つの核心ニーズを解き明かし、優しいセルフケア文を作成します。'],
      zh: ['内在小孩核心需求解码器', '识别成年情绪反应背后的5大核心未满足需求，定制温暖自我滋养锚点。'] },
    { slug: 'decision-fatigue-declutter', cat: 'focus', emoji: '🧹', tag: '3 Defaults',
      en: ['Decision Fatigue Declutter Filter', 'Audit 6 daily micro-decision drains and replace willpower battles with 3 Default Rules.'],
      ko: ['결정 피로·정신 정리 필터', '6가지 반복 미세 결정 누수를 점검하고 오후 에너지를 지키는 3가지 기본값 규칙을 만듭니다.'],
      ja: ['決断疲れ・デフォルト自動化', '毎日の小さな選択疲れを整理し、脳のエネルギーを守る3つのデフォルトルールを設計します。'],
      zh: ['决策疲劳与大脑减负过滤器', '排查6类高频微决策消耗，用3条自动默认规则保卫下午的专注力。'] },
    { slug: 'emotional-flashback-grounding', cat: 'anxiety', emoji: '🧭', tag: '6 Calm Steps',
      en: ['Emotional Flashback Grounding', 'Walk through 6 trauma-informed present-time safety steps + 60s gentle breathing timer.'],
      ko: ['감정 플래시백 6단계 그라운딩', '갑작스러운 오래된 압도감이 밀려올 때 6단계 현재 시점 안전 앵커와 60초 호흡을 안내합니다.'],
      ja: ['感情フラッシュバック・グラウンディング', '急な過去の圧倒感に対して6ステップの現在地アンカーと60秒タイマーで落ち着きます。'],
      zh: ['情绪闪回 6 步当下着陆', '突遇强烈旧情绪波动时，循序完成6步当下安全锚定与60秒温和呼吸。'] },
    { slug: 'imposter-syndrome-audit', cat: 'sleep', emoji: '🏆', tag: 'Evidence Log',
      en: ['Imposter Syndrome Archetype Audit', 'Identify your imposter pattern (Perfectionist, Expert, Soloist) & build a proof anchor.'],
      ko: ['가면 증후군 유형 & 증거 감사', '완벽주의형·전문가형 등 가면 증후군 패턴을 파악하고 객관적 성취 근거를 정리합니다.'],
      ja: ['インポスター症候群診断', '完璧主義型などの傾向を把握し、実力の根拠アンカーを整理します。'],
      zh: ['冒充者综合征类型与证据审计', '识别完美主义或专家型自我怀疑，建立客观能力证据锚点。'] }
  ];

  var UI = {
    en: {
      title: 'Interactive Mental Wellness Lab — 30 Free CBT, Somatic & Self-Regulation Tools | DopaBrain',
      metaDesc: 'Explore 30 free, 100% private interactive psychology tools for anxiety, overthinking, burnout, gaslighting clarity, codependency, perfectionism, ADHD focus, boundaries, and sleep reset in 12 languages.',
      skip: 'Skip to Mental Wellness Lab', back: '← All 72 Tools', langLabel: 'Language:',
      pill: '🧠 30 FREE INTERACTIVE LABS · 100% PRIVATE',
      heroTitle: 'Interactive Mental Wellness Lab',
      heroSub: 'Evidence-informed CBT reframing, somatic unwinding, burnout audits, boundary scripts, ADHD focus tools, and sleep reset planners—100% private in your browser, with downloadable 1080×1920 summary cards.',
      triageTitle: 'Not sure which tool fits right now?',
      triageDesc: 'Rate your energy, physical tension, and mental fog in 60 seconds and get an instant personalized prescription from all 21 labs.',
      triageCta: 'Start 60-Second Check-In →',
      catAll: '✨ All (30)', catAnxiety: '🌊 Anxiety & Overthinking', catBurnout: '🔋 Burnout & Energy',
      catRel: '🛡️ Boundaries & Self', catFocus: '🎯 ADHD & Focus', catSleep: '🌙 Sleep & Confidence',
      showing: 'Showing {n} interactive mental wellness tools', openTool: 'Open Free Tool →',
      trust1T: '🔒 100% Browser-Local', trust1D: 'Your reflections, scores, and check-ins stay strictly on your device—zero account required.',
      trust2T: '🖼️ 1080×1920 Story Cards', trust2D: 'Export crisp summary cards locally for personal journaling, therapy prep, or sharing.',
      trust3T: '🌐 12 Global Languages', trust3D: 'Switch languages once and every tool link automatically preserves your locale.',
      booksTitle: '📚 Evidence-Based Books Behind These Labs',
      booksDesc: 'Foundational CBT, nervous system, boundary, and habit manuals referenced across our interactive tools.',
      booksDisclosure: 'As an Amazon Associate, DopaBrain earns from qualifying purchases at no extra cost to you.',
      faqTitle: 'Frequently Asked Questions',
      faq1Q: 'Which Mental Wellness Lab tool should I try first?',
      faq1A: 'If you are unsure where to start, open the Daily 60-Second Mind Check-In. Rating your energy, physical tension, and mental fog takes under one minute and automatically routes you to the best-matched interactive tool.',
      faq2Q: 'Are my answers and personal reflections private?',
      faq2A: 'Yes. Every tool in the DopaBrain Mental Wellness Lab runs 100% locally inside your browser. Zero personal reflections, ratings, or story cards are ever transmitted to external servers.',
      faq3Q: 'Are these interactive tools a replacement for clinical therapy?',
      faq3A: 'No. These tools translate well-known CBT, somatic grounding, and self-regulation frameworks into free self-guided exercises for daily reflection, not medical diagnosis or crisis care.',
      faq4Q: 'Do all 21 tools support my language and mobile devices?',
      faq4A: 'Yes. The hub and flagship tools support 12 languages, preserve your ?lang= setting across every link, work on 390px mobile screens with zero horizontal scrolling, and let you export crisp 1080×1920 PNG summary cards.',
      moreTitle: 'Explore More DopaBrain Hubs',
      hubTestsT: '🧪 Interactive Psychology Tests', hubTestsD: 'Burnout, HSP, EQ, Attachment, Stress & Trauma assessments',
      hubBlogT: '📖 Evidence-Informed Guides', hubBlogD: '1,200+ practical articles across 12 languages',
      hubMbtiT: '🧬 16 MBTI Profiles', hubMbtiD: 'Type-matched coping strategies & energy habits',
      stickyCta: '🧠 Need a 60s prescription? Open Daily Mind Check-In →'
    },
    ko: {
      title: '인터랙티브 멘탈 웰니스 랩 — 무료 CBT·신체이완·자기조절 도구 30선 | DopaBrain',
      metaDesc: '불안, 생각 과부하, 번아웃, 가스라이팅 점검, 공동의존, 완벽주의, ADHD 집중, 경계선 대화, 수면 리셋까지 브라우저에서 100% 비공개로 사용하는 24가지 무료 심리 도구를 만나보세요.',
      skip: '멘탈 웰니스 랩 바로가기', back: '← 전체 72개 도구', langLabel: '언어:',
      pill: '🧠 무료 인터랙티브 심리 랩 30선 · 100% 비공개',
      heroTitle: '인터랙티브 멘탈 웰니스 랩',
      heroSub: 'CBT 인지 재구성, 신체 긴장 이완, 번아웃 감별, 경계선 스크립트, ADHD 집중 도구, 수면 리셋까지—회원가입 없이 브라우저에서 100% 비공개로 바로 실행하고 1080×1920 요약 카드를 저장하세요.',
      triageTitle: '지금 어떤 도구부터 시작할지 모르겠다면?',
      triageDesc: '60초 동안 에너지·신체 긴장·브레인포그를 체크하면 21개 랩 중 지금 딱 맞는 도구를 바로 처방해 드립니다.',
      triageCta: '60초 마음 체크인 시작 →',
      catAll: '✨ 전체 (30)', catAnxiety: '🌊 불안 · 생각 과부하', catBurnout: '🔋 번아웃 · 에너지',
      catRel: '🛡️ 경계선 · 인간관계', catFocus: '🎯 ADHD · 집중력', catSleep: '🌙 수면 · 자신감',
      showing: '총 {n}개의 인터랙티브 멘탈 웰니스 도구 표시 중', openTool: '무료 도구 열기 →',
      trust1T: '🔒 100% 로컬 비공개', trust1D: '작성한 고민과 점수는 내 기기 안에서만 처리되며 서버로 전송되지 않습니다.',
      trust2T: '🖼️ 1080×1920 요약 카드', trust2D: '결과를 깔끔한 PNG 카드로 저장해 셀프 기록·상담 준비·공유에 활용하세요.',
      trust3T: '🌐 12개 글로벌 언어', trust3D: '언어를 한 번 선택하면 모든 도구 링크에 자동으로 언어가 유지됩니다.',
      booksTitle: '📚 이 랩의 기반이 된 검증된 심리 도서',
      booksDesc: 'CBT, 신경계 회복, 경계선 설정, 습관 설계의 대표 참고 도서입니다.',
      booksDisclosure: '이 링크는 Amazon 제휴 링크를 포함하며, 구매 시 추가 비용 없이 DopaBrain 운영에 도움이 됩니다.',
      faqTitle: '자주 묻는 질문',
      faq1Q: '21개 도구 중 무엇부터 해보는 게 좋을까요?',
      faq1A: '고민된다면 60초 데일리 마음 체크인부터 시작하세요. 에너지·긴장·집중 상태를 1분 만에 평가하면 지금 상태에 가장 잘 맞는 도구를 자동으로 연결해 드립니다.',
      faq2Q: '내가 입력한 내용이나 점수가 저장되나요?',
      faq2A: '모든 도구는 브라우저 로컬에서만 작동합니다. 개인 응답, 메모, 요약 카드는 외부 서버로 일절 전송되지 않습니다.',
      faq3Q: '이 도구가 전문 심리 상담이나 치료를 대체하나요?',
      faq3A: '아니요. 검증된 CBT·신체 이완·자기조절 원리를 일상 속 셀프 케어로 쉽게 풀어낸 도구이며, 의학적 진단이나 위기 개입을 대체하지 않습니다.',
      faq4Q: '모바일에서도 편하게 사용할 수 있나요?',
      faq4A: '네. 모든 도구는 390px 모바일 화면에서 가로 스크롤 없이 작동하며, 12개 언어와 1080×1920 요약 카드 저장을 지원합니다.',
      moreTitle: 'DopaBrain 다른 허브 둘러보기',
      hubTestsT: '🧪 인터랙티브 심리 테스트', hubTestsD: '번아웃·HSP·EQ·애착·스트레스 정밀 테스트',
      hubBlogT: '📖 심리 회복 가이드 블로그', hubBlogD: '12개 언어 1,200편 이상의 실전 회복 아티클',
      hubMbtiT: '🧬 16가지 MBTI 프로필', hubMbtiD: '유형별 스트레스 대처와 에너지 충전 전략',
      stickyCta: '🧠 지금 60초 맞춤 처방 받기 →'
    },
    ja: {
      title: 'インタラクティブ・メンタルウェルネスラボ — 無料CBT・身体緩和ツール30選 | DopaBrain',
      metaDesc: '不安・考えすぎ・燃え尽き・境界線・ADHD集中・睡眠リセットをブラウザ完結・完全プライベートで整える21の無料心理ツール。',
      back: '← 全72ツール', langLabel: '言語:', pill: '🧠 無料インタラクティブツール30選 · 完全プライベート',
      heroTitle: 'インタラクティブ・メンタルウェルネスラボ',
      heroSub: 'CBTリフレーミング、身体緊張の緩和、バーンアウト診断、境界線スクリプト、集中・睡眠リセットまで登録不要で今すぐ使えます。',
      triageTitle: 'どのツールから始めるか迷ったら？', triageDesc: '60秒のチェックインで今の状態に最適なツールを自動提案します。',
      triageCta: '60秒チェックインを開始 →',
      catAll: '✨ すべて (30)', catAnxiety: '🌊 不安・考えすぎ', catBurnout: '🔋 疲労・エネルギー',
      catRel: '🛡️ 境界線・対人関係', catFocus: '🎯 ADHD・集中', catSleep: '🌙 睡眠・自信',
      showing: '{n}個のインタラクティブ・ウェルネスツールを表示中', openTool: '無料ツールを開く →',
      booksTitle: '📚 関連する信頼の心理学書籍', stickyCta: '🧠 60秒マインドチェックインを開く →'
    },
    zh: {
      title: '互动心理健康实验室 — 30款免费CBT、躯体放松与自我调节工具 | DopaBrain',
      metaDesc: '30款100%浏览器本地隐私的免费心理工具，覆盖焦虑反刍、职业倦怠、社交电量、健康边界、ADHD专注力与睡眠节律重置。',
      back: '← 全部72款工具', langLabel: '语言:', pill: '🧠 30款免费互动工具 · 100%本地隐私',
      heroTitle: '互动心理健康实验室',
      heroSub: '涵盖CBT认知重构、躯体放松、倦怠自查、边界话术、ADHD专注与睡眠重置——无需注册，数据不离设备，支持导出1080×1920总结卡。',
      triageTitle: '不确定先用哪一款工具？', triageDesc: '花60秒评估精力、紧张感与脑雾，即刻获得30款工具中的专属匹配推荐。',
      triageCta: '开始60秒情绪自检 →',
      catAll: '✨ 全部 (30)', catAnxiety: '🌊 焦虑与过度思考', catBurnout: '🔋 倦怠与能量',
      catRel: '🛡️ 边界与人际', catFocus: '🎯 ADHD与专注', catSleep: '🌙 睡眠与自信',
      showing: '正在显示 {n} 款互动心理健康工具', openTool: '打开免费工具 →',
      booksTitle: '📚 实验室背后的循证心理学书籍', stickyCta: '🧠 开启60秒每日情绪自检 →'
    },
    es: {
      back: '← Todas las 72 herramientas', heroTitle: 'Laboratorio Interactivo de Bienestar Mental',
      triageTitle: '¿No sabes por cuál empezar?', triageCta: 'Iniciar check-in de 60s →',
      catAll: '✨ Todas (30)', catAnxiety: '🌊 Ansiedad y Pensamientos', catBurnout: '🔋 Agotamiento y Energía',
      catRel: '🛡️ Límites y Relaciones', catFocus: '🎯 TDAH y Enfoque', catSleep: '🌙 Sueño y Confianza',
      showing: 'Mostrando {n} herramientas interactivas de bienestar', openTool: 'Abrir herramienta →',
      stickyCta: '🧠 ¿Receta en 60s? Abrir Check-In Diario →'
    },
    pt: {
      back: '← Todas as 72 ferramentas', heroTitle: 'Laboratório Interativo de Bem-Estar Mental',
      triageTitle: 'Não sabe por onde começar?', triageCta: 'Iniciar check-in de 60s →',
      catAll: '✨ Todas (30)', catAnxiety: '🌊 Ansiedade e Mente Cheia', catBurnout: '🔋 Burnout e Energia',
      catRel: '🛡️ Limites e Relações', catFocus: '🎯 TDAH e Foco', catSleep: '🌙 Sono e Confiança',
      showing: 'Mostrando {n} ferramentas interativas de bem-estar', openTool: 'Abrir ferramenta →',
      stickyCta: '🧠 Check-in de 60s para recomendação →'
    },
    de: {
      back: '← Alle 72 Tools', heroTitle: 'Interaktives Mental-Wellness-Labor',
      triageTitle: 'Unsicher, welches Tool jetzt passt?', triageCta: '60-Sekunden-Check-in starten →',
      catAll: '✨ Alle (30)', catAnxiety: '🌊 Angst & Grübeln', catBurnout: '🔋 Burnout & Energie',
      catRel: '🛡️ Grenzen & Beziehungen', catFocus: '🎯 ADHS & Fokus', catSleep: '🌙 Schlaf & Selbstvertrauen',
      showing: '{n} interaktive Mental-Wellness-Tools angezeigt', openTool: 'Tool öffnen →',
      stickyCta: '🧠 60-Sekunden-Check-in öffnen →'
    },
    fr: {
      back: '← Tous les 72 outils', heroTitle: 'Laboratoire Interactif de Bien-Être Mental',
      triageTitle: 'Vous ne savez pas par où commencer ?', triageCta: 'Lancer le bilan de 60s →',
      catAll: '✨ Tous (30)', catAnxiety: '🌊 Anxiété & Rumination', catBurnout: '🔋 Burn-out & Énergie',
      catRel: '🛡️ Limites & Relations', catFocus: '🎯 TDAH & Focus', catSleep: '🌙 Sommeil & Confiance',
      showing: 'Affichage de {n} outils interactifs de bien-être', openTool: 'Ouvrir l’outil →',
      stickyCta: '🧠 Bilan rapide en 60s →'
    },
    id: {
      back: '← Semua 72 Alat', heroTitle: 'Lab Kesehatan Mental Interaktif',
      triageTitle: 'Bingung mulai dari alat yang mana?', triageCta: 'Mulai Check-In 60 Detik →',
      catAll: '✨ Semua (30)', catAnxiety: '🌊 Cemas & Overthinking', catBurnout: '🔋 Burnout & Energi',
      catRel: '🛡️ Batasan & Relasi', catFocus: '🎯 ADHD & Fokus', catSleep: '🌙 Tidur & Percaya Diri',
      showing: 'Menampilkan {n} alat kesehatan mental interaktif', openTool: 'Buka Alat Gratis →',
      stickyCta: '🧠 Buka Check-In 60 Detik →'
    },
    tr: {
      back: '← Tüm 72 Araç', heroTitle: 'Etkileşimli Zihinsel Sağlık Laboratuvarı',
      triageTitle: 'Hangisinden başlayacağınızdan emin değil misiniz?', triageCta: '60 Saniyelik Kontrolü Başlat →',
      catAll: '✨ Tümü (30)', catAnxiety: '🌊 Kaygı ve Aşırı Düşünme', catBurnout: '🔋 Tükenmişlik ve Enerji',
      catRel: '🛡️ Sınırlar ve İlişkiler', catFocus: '🎯 DEHB ve Odak', catSleep: '🌙 Uyku ve Özgüven',
      showing: '{n} etkileşimli zihinsel sağlık aracı gösteriliyor', openTool: 'Aracı Aç →',
      stickyCta: '🧠 60 Saniyelik Kontrolü Aç →'
    },
    hi: {
      back: '← सभी 72 टूल', heroTitle: 'इंटरैक्टिव मेंटल वेलनेस लैब',
      triageTitle: 'समझ नहीं आ रहा कहाँ से शुरू करें?', triageCta: '60-सेकंड चेक-इन शुरू करें →',
      catAll: '✨ सभी (30)', catAnxiety: '🌊 चिंता व ओवरथिंकिंग', catBurnout: '🔋 बर्नआउट व ऊर्जा',
      catRel: '🛡️ सीमाएँ व रिश्ते', catFocus: '🎯 ADHD व फोकस', catSleep: '🌙 नींद व आत्मविश्वास',
      showing: '{n} इंटरैक्टिव मेंटल वेलनेस टूल दिखाए जा रहे हैं', openTool: 'टूल खोलें →',
      stickyCta: '🧠 60-सेकंड माइंड चेक-इन खोलें →'
    },
    ru: {
      back: '← Все 72 инструмента', heroTitle: 'Интерактивная лаборатория ментального здоровья',
      triageTitle: 'Не знаете, с какого инструмента начать?', triageCta: 'Начать 60-секундный чек-ин →',
      catAll: '✨ Все (30)', catAnxiety: '🌊 Тревога и накручивание', catBurnout: '🔋 Выгорание и энергия',
      catRel: '🛡️ Границы и отношения', catFocus: '🎯 СДВГ и фокус', catSleep: '🌙 Сон и уверенность',
      showing: 'Показано {n} интерактивных инструментов', openTool: 'Открыть инструмент →',
      stickyCta: '🧠 Открыть 60-секундный чек-ин →'
    }
  };

  var currentLang = 'en';
  var currentCat = 'all';

  function detectLang() {
    var p = new URLSearchParams(window.location.search).get('lang');
    if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    try {
      var saved = localStorage.getItem('dopabrain_lang');
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (_) {}
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) {
    return (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || '';
  }

  function toolCopy(item) {
    return item[currentLang] || item.en;
  }

  function withLang(url) {
    if (currentLang === 'en') return url;
    return url + (url.indexOf('?') === -1 ? '?lang=' : '&lang=') + currentLang;
  }

  function track(eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  }

  function renderGrid() {
    var grid = document.getElementById('labGrid');
    var countEl = document.getElementById('labCount');
    if (!grid) return;

    var items = currentCat === 'all' ? TOOLS : TOOLS.filter(function (x) { return x.cat === currentCat; });
    if (countEl) countEl.textContent = t('showing').replace('{n}', String(items.length));

    grid.textContent = '';
    var openLabel = t('openTool');
    items.forEach(function (item) {
      var copy = toolCopy(item);
      var card = document.createElement('a');
      card.className = 'lab-card tool-card';
      card.href = withLang('/portal/tools/' + item.slug + '.html');
      card.dataset.toolSlug = item.slug;
      card.dataset.toolCat = item.cat;

      var top = document.createElement('div');
      top.className = 'lab-card-top';
      var em = document.createElement('span');
      em.className = 'lab-emoji';
      em.setAttribute('aria-hidden', 'true');
      em.textContent = item.emoji;
      var badge = document.createElement('span');
      badge.className = 'lab-badge';
      badge.textContent = item.tag;
      top.appendChild(em);
      top.appendChild(badge);

      var h3 = document.createElement('h3');
      h3.textContent = copy[0];
      var desc = document.createElement('p');
      desc.textContent = copy[1];

      var foot = document.createElement('div');
      foot.className = 'lab-card-foot';
      var cta = document.createElement('span');
      cta.textContent = openLabel;
      foot.appendChild(cta);

      card.appendChild(top);
      card.appendChild(h3);
      card.appendChild(desc);
      card.appendChild(foot);

      card.addEventListener('click', function () {
        track('wellness_lab_tool_click', { tool_slug: item.slug, category: item.cat, lang: currentLang });
      });
      grid.appendChild(card);
    });
  }

  function applyI18n() {
    document.documentElement.lang = currentLang;
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (!val) return;
      if (el.tagName === 'META') el.setAttribute('content', val);
      else el.textContent = val;
    });

    var linkMap = [
      ['backLink', '/portal/tools/'],
      ['triageCta', '/portal/tools/daily-mind-checkin.html'],
      ['stickyCta', '/portal/tools/daily-mind-checkin.html'],
      ['hubTests', '/portal/tests/'],
      ['hubBlog', '/portal/blog/'],
      ['hubMbti', '/portal/mbti/'],
      ['footerHome', '/portal/'],
      ['footerTools', '/portal/tools/']
    ];
    linkMap.forEach(function (pair) {
      var el = document.getElementById(pair[0]);
      if (el) el.setAttribute('href', withLang(pair[1]));
    });

    renderGrid();
  }

  function init() {
    currentLang = detectLang();
    var select = document.getElementById('langSelect');
    if (select) {
      select.value = currentLang;
      select.addEventListener('change', function () {
        currentLang = select.value;
        try { localStorage.setItem('dopabrain_lang', currentLang); } catch (_) {}
        var url = new URL(window.location.href);
        url.searchParams.set('lang', currentLang);
        window.history.replaceState({}, '', url.toString());
        applyI18n();
      });
    }

    document.querySelectorAll('.filter-pill').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentCat = btn.getAttribute('data-cat') || 'all';
        document.querySelectorAll('.filter-pill').forEach(function (b) {
          var active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        renderGrid();
        track('wellness_lab_filter', { category: currentCat, lang: currentLang });
      });
    });

    applyI18n();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
