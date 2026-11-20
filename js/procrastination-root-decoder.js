/**
 * DopaBrain Procrastination Root-Cause Decoder & 5-Minute Micro-Sprint Timer
 * 12-language localization, XSS-safe private task input, 5-min timer, 1080x1920 story card.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'procrastination_decoder_v1';
  var SUPPORTED = ['en', 'ko', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
  var ROOT_IDS = ['perfectionism', 'overwhelm', 'vague', 'low_energy'];

  var T = {
    en: {
      title: 'Procrastination Root Decoder & 5-Min Sprint Timer | DopaBrain',
      metaDesc: 'Free 12-language procrastination root-cause decoder and 5-minute micro-sprint starter. Identify emotional task blocks and start privately.',
      skip: 'Skip to Procrastination Decoder', back: '← Tools Catalog', langLabel: 'Language:',
      kicker: 'EMOTION-REGULATION TASK STARTER', heroTitle: 'Procrastination Root Decoder & 5-Min Sprint',
      heroLead: 'Procrastination is rarely laziness—it is emotional friction. Identify the exact block behind your avoided task and break inertia with a zero-pressure 5-minute micro-sprint.',
      chip1: '4 Emotional Roots', chip2: '5-Min Micro-Sprint Timer', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • NAME THE AVOIDED TASK', step1Title: 'Which task feels oddly heavy to start?', step1Sub: 'Choose a quick preset or enter your own private task (never leaves your browser).',
      taskLabel: 'Task you are putting off (optional):', placeholder: 'Example: Reply to difficult email / write first slide',
      step2Badge: 'STEP 2 • PINPOINT THE EMOTIONAL BLOCK', step2Title: 'Which friction feels truest right now?', step2Sub: 'Matching the right unblock tactic to the right emotional root removes resistance immediately.',
      decodeBtn: 'Unlock My 5-Min Micro-Plan', resetBtn: 'Reset',
      resultBadge: 'STEP 3 • ZERO-FRICTION START PROTOCOL', targetTaskTitle: 'Active Micro-Target',
      timerBadge: '5-MINUTE RULE MICRO-SPRINT', sprintReady: 'You have full permission to stop after 5 minutes. Just open the file and take the tiniest first action.',
      sprintStart: 'Start 5-Min Sprint', sprintPause: 'Pause Sprint', sprintReset: 'Reset Timer',
      sprintRunning: 'Sprint active! Ignore quality—focus only on tiny forward motion until the timer chimes.',
      sprintDone: '5-minute barrier broken! You can stop guilt-free OR ride this momentum into a Pomodoro session.',
      stepsTitle: '3 Micro-Unblocking Moves',
      storyBtn: 'Save 1080×1920 Story Card (PNG)', copyBtn: 'Copy Micro-Plan', shareBtn: 'Share Tool',
      copied: 'Micro-plan copied to clipboard!', cardSaved: '1080×1920 Story Card downloaded!',
      defaultTask: 'Start the first messy draft for 5 minutes',
      presets: ['Write an overdue email or message', 'Start a report or slide deck', 'Organize finances or paperwork', 'Study a dense chapter or code bug'],
      roots: {
        perfectionism: ['🎯 Perfectionism & Fear of Judgment', 'Waiting until you can do it flawlessly, so starting feels risky.', 'Perfectionism Freeze → Intentional Messy Draft', 'Lower the bar to an intentionally bad Version 0.1 so your critic turns off.', ['Write the ugliest 3 bullet points possible—editing is banned for 5 minutes.', 'Remind yourself: a rough draft beats an invisible masterpiece.', 'Set a 5-minute cap so your brain stops treating this like a final exam.']],
        overwhelm: ['🌊 Scope Overwhelm', 'The task feels massive and endless, triggering threat paralysis.', 'Overwhelm Paralysis → 1% Slice Isolation', 'Shrink the entire project into one visible 3-minute micro-slice.', ['Hide every step except opening the document and writing line #1.', 'Close unrelated browser tabs to free working memory.', 'Treat this 5-minute sprint purely as setup—not completion.']],
        vague: ['🌫️ Unclear Next Physical Step', 'You know the goal, but your brain cannot picture the exact first click.', 'Ambiguity Fog → Concrete First Verb', 'Replace abstract labels ("Work on project") with one physical verb.', ['Define the exact physical verb: "Open X file and list 3 headings."', 'Time-box 2 minutes to pick only ONE missing question to answer.', 'Leave a breadcrumb note at minute 5 so resuming later is effortless.']],
        low_energy: ['🔋 Low Energy / Dopamine Deficit', 'The task feels dull or draining compared to easy scrolling.', 'Dopamine Friction → Low-Stimulation Ignition', 'Pair a tiny physical anchor with zero-guilt momentum.', ['Put your phone in another room for just 5 minutes.', 'Play steady ambient sound or brown noise to bridge focus friction.', 'Start with the easiest mechanical sub-task (formatting, renaming, outline) to trigger momentum.']]
      },
      bridgePomoTitle: 'Pomodoro Focus Timer', bridgePomoDesc: 'Keep your momentum rolling with a clean 25-minute deep focus block.',
      bridgeCogTitle: 'Cognitive Load Calculator', bridgeCogDesc: 'Check if open loops and mental RAM saturation are causing paralysis.',
      bridgeDopaTitle: 'Dopamine Reset Protocol', bridgeDopaDesc: 'Shift from cheap scrolling hits back to compound task focus.',
      stickyTitle: 'Ready for a full 25-minute flow session?', stickySub: 'Launch our distraction-free Pomodoro Focus Timer', stickyBtn: 'Pomodoro Timer →',
      privacy: 'Privacy Policy', terms: 'Terms'
    },
    ko: {
      title: '미루기 근본 원인 디코더 & 5분 착수 타이머 | DopaBrain',
      metaDesc: '무료 12개국어 미루기 원인 분석 및 5분 마이크로 스프린트 타이머. 완벽주의·압도감·모호함·에너지 저하 중 원인을 찾고 부담 없이 시작하세요.',
      skip: '미루기 디코더로 이동', back: '← 도구 카탈로그', langLabel: '언어:',
      kicker: '감정 조절 기반 착수 워크스페이스', heroTitle: '미루기 원인 디코더 & 5분 스프린트',
      heroLead: '미루기는 게으름이 아니라 감정적 마찰입니다. 지금 일을 가로막는 4가지 정서적 원인 중 핵심을 짚고 5분 타이머로 시작 장벽을 깨뜨리세요.',
      chip1: '4가지 미루기 원인', chip2: '5분 착수 타이머', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 미루고 있는 일 적기', step1Title: '유독 손이 안 가는 일은 무엇인가요?', step1Sub: '예시를 고르거나 직접 입력하세요(브라우저 밖으로 전송되지 않습니다).',
      taskLabel: '지금 미루고 있는 일 (선택):', placeholder: '예: 답장하기 부담스러운 메일 쓰기 / 보고서 첫 페이지 열기',
      step2Badge: '2단계 • 감정적 막힘 원인 선택', step2Title: '지금 가장 크게 느껴지는 마찰은 무엇인가요?', step2Sub: '원인에 딱 맞는 착수 전략을 연결하면 저항감이 즉시 낮아집니다.',
      decodeBtn: '5분 마이크로 착수 플랜 생성', resetBtn: '초기화',
      resultBadge: '3단계 • 무저항 착수 프로토콜', targetTaskTitle: '지금 착수할 마이크로 목표',
      timerBadge: '5분 법칙 마이크로 스프린트', sprintReady: '딱 5분만 하고 멈춰도 괜찮습니다. 파일만 열고 가장 작은 첫 동작을 시작하세요.',
      sprintStart: '5분 스프린트 시작', sprintPause: '일시정지', sprintReset: '타이머 리셋',
      sprintRunning: '스프린트 진행 중! 완성도는 잊고 타이머가 울릴 때까지 아주 작은 진전만 만드세요.',
      sprintDone: '5분 장벽 돌파 완료! 죄책감 없이 멈추거나, 이 탄력으로 포모도로 집중을 이어가세요.',
      stepsTitle: '저항을 깨는 3가지 마이크로 행동',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)', copyBtn: '플랜 복사', shareBtn: '도구 공유',
      copied: '5분 착수 플랜이 복사되었습니다!', cardSaved: '1080×1920 스토리 카드가 저장되었습니다!',
      defaultTask: '5분 동안 엉성한 초안 첫 줄 작성하기',
      presets: ['미뤄둔 어려운 메일/메시지 답장', '보고서나 발표 첫 슬라이드 시작', '밀린 영수증·서류 정리', '어려운 공부 챕터나 코드 버그 열기'],
      roots: {
        perfectionism: ['🎯 완벽주의 & 평가 불안', '완벽하게 해내야 한다는 부담 때문에 시작 자체가 위험하게 느껴짐.', '완벽주의 마비 → 의도적 엉성한 초안(v0.1)', '기준을 의도적으로 낮춰 내면의 검열관을 끄는 것이 핵심입니다.', ['5분간 수정 금지! 가장 대충 쓴 핵심 줄글 3줄만 적어보세요.', '보이지 않는 걸작보다 눈앞의 엉성한 초안이 100배 낫습니다.', '최종 시험이 아니라 5분 워밍업이라고 뇌에 알려주세요.']],
        overwhelm: ['🌊 규모 압도감', '할 일이 너무 거대해 보여 뇌가 위협으로 인식하고 멈춤.', '압도감 마비 → 1% 초소형 조각 분리', '전체 프로젝트를 단 3분짜리 단일 조각으로 축소하세요.', ['문서 열기와 첫 문장 쓰기 외의 모든 단계를 시야에서 가리세요.', '관련 없는 브라우저 탭을 닫아 작업 기억 여유를 확보하세요.', '이번 5분은 완성이 아니라 오직 "세팅"만 하는 시간입니다.']],
        vague: ['🌫️ 첫 물리적 행동의 모호함', '목표는 아는데 당장 어떤 클릭부터 해야 할지 그려지지 않음.', '모호함 안개 → 구체적 동사 1개 지정', '추상적 라벨("프로젝트 진행")을 손이 움직일 물리적 동사로 바꾸세요.', ['"파일 X를 열고 소제목 3개 적기"처럼 손 동작으로 적으세요.', '딱 2분만 써서 가장 막힌 질문 1개만 정하세요.', '5분이 끝나면 다음 번에 바로 이어갈 메모 1줄을 남기세요.']],
        low_energy: ['🔋 에너지·도파민 부족', '스마트폰 자극에 비해 과제가 지루하고 무겁게 느껴짐.', '도파민 마찰 → 저자극 시동 걸기', '가장 쉬운 기계적 동작으로 시동 마찰만 넘기세요.', ['딱 5분만 스마트폰을 손 닿지 않는 곳에 두세요.', '백색소음이나 잔잔한 배경음으로 지루함 장벽을 낮추세요.', '서식 맞추기·파일명 정리 같은 가장 쉬운 동작으로 탄력을 붙이세요.']]
      },
      bridgePomoTitle: '포모도로 집중 타이머', bridgePomoDesc: '5분 착수 탄력을 25분 딥워크 블록으로 자연스럽게 이어가세요.',
      bridgeCogTitle: '인지 부하 계산기', bridgeCogDesc: '열린 할 일 과부하가 실행 마비를 부르고 있는지 점검합니다.',
      bridgeDopaTitle: '도파민 리셋 프로토콜', bridgeDopaDesc: '짧은 스크롤 자극에서 몰입형 집중 보상으로 전환하세요.',
      stickyTitle: '25분 본격 집중으로 이어갈까요?', stickySub: '방해 없는 무료 포모도로 집중 타이머 열기', stickyBtn: '포모도로 타이머 →',
      privacy: '개인정보처리방침', terms: '이용약관'
    },
    ja: {
      title: '先延ばし原因デコーダー＆5分スプリントタイマー | DopaBrain',
      metaDesc: '無料12言語対応の先延ばし原因分析＆5分ルールタイマー。完璧主義・圧倒感・曖昧さ・エネルギー不足を見抜き軽やかに着手できます。',
      skip: '先延ばしデコーダーへ', back: '← ツール一覧', langLabel: '言語:',
      kicker: '感情調整ベースのタスク着手ツール', heroTitle: '先延ばし原因デコーダー＆5分タイマー',
      heroLead: '先延ばしは怠けではなく感情の摩擦です。手が止まる4つの原因から核心を選び、プレッシャーゼロの5分タイマーで最初の一歩を踏み出しましょう。',
      chip1: '4つの感情ブロック', chip2: '5分スプリントタイマー', chip3: '100%ローカル非公開',
      step1Badge: 'STEP 1 • 先延ばし中のタスクを書く', step1Title: 'なぜか重く感じるタスクは何ですか？', step1Sub: '例を選ぶか自由に入力してください（ブラウザ外には送信されません）。',
      taskLabel: '先延ばししているタスク（任意）:', placeholder: '例：返信しづらいメールを書く / 資料の1枚目を開く',
      step2Badge: 'STEP 2 • 感情ブロックを特定', step2Title: '今の抵抗感に最も近いものは？', step2Sub: '原因に合った一手を選ぶと抵抗がすっと軽くなります。',
      decodeBtn: '5分マイクロ計画を作成', resetBtn: 'リセット',
      resultBadge: 'STEP 3 • ゼロ摩擦スタート手順', targetTaskTitle: '今回のマイクロ目標',
      timerBadge: '5分ルール・マイクロスプリント', sprintReady: '5分でやめてOKです。ファイルを開いて最小の一歩だけ踏み出しましょう。',
      sprintStart: '5分スプリント開始', sprintPause: '一時停止', sprintReset: 'リセット',
      sprintRunning: 'スプリント実行中！質は気にせず小さな前進だけに集中しましょう。',
      sprintDone: '5分の壁を突破しました！ここで終えても、そのままポモドーロへ進んでもOKです。',
      stepsTitle: '抵抗をほどく3つのマイクロ行動',
      storyBtn: '1080×1920 ストーリーカード保存 (PNG)', copyBtn: '計画をコピー', shareBtn: 'ツールを共有',
      copied: 'マイクロ計画をコピーしました！', cardSaved: '1080×1920 ストーリーカードを保存しました！',
      defaultTask: '5分間だけ雑な下書きを1行書く',
      presets: ['気重いメール・連絡への返信', '資料やレポートの最初の1行', '溜まった書類や家計の整理', '難しい学習章やバグ修正を開く'],
      roots: {
        perfectionism: ['🎯 完璧主義・評価不安', '最初から完璧にやろうとして着手が怖くなる。', '完璧主義フリーズ → わざと雑なv0.1下書き', 'ハードルを極限まで下げて完璧主義のブレーキを外しましょう。', ['5分間は編集禁止！雑な箇条書きを3つだけ出します。', '頭の中の傑作より目の前の粗い下書きが前進を生みます。', '本番ではなく5分ウォームアップと位置づけます。']],
        overwhelm: ['🌊 規模への圧倒感', '全体が大きすぎて脳が脅威と感じて止まる。', '圧倒フリーズ → 1%スライス切り出し', '全体像を隠し、3分で終わる最小パーツだけ見ます。', ['ファイルを開いて1行目を書く以外の工程を視界から消します。', '無関係なタブを閉じてワーキングメモリを空けます。', '最初の5分は「準備だけ」と割り切ります。']],
        vague: ['🌫️ 最初の一手が曖昧', 'ゴールはあるが具体的な最初のクリックが浮かばない。', '曖昧モヤ → 具体的な動作動詞1つ', '抽象的なタスク名を具体的な手の動きに変換します。', ['「ファイルXを開いて見出しを3つ書く」と具体化します。', '2分だけ使って不明点を1つだけメモします。', '5分終了時に次の一手を1行残します。']],
        low_energy: ['🔋 エネルギー・ドーパミン不足', 'スマホ刺激に比べて作業が退屈で重く感じる。', '低エネルギー摩擦 → 低負荷イグニッション', '最も簡単な機械的作業から勢いをつけます。', ['5分間だけスマホを別室に置きます。', 'ホワイトノイズや雨音で集中の助走を作ります。', 'ファイル名整理など一番簡単な準備から着手します。']]
      },
      bridgePomoTitle: 'ポモドーロ集中タイマー', bridgePomoDesc: '5分の勢いをそのまま25分集中ブロックへつなげます。',
      bridgeCogTitle: '認知負荷計算機', bridgeCogDesc: '頭の中の未完了ループが停止原因かチェック。',
      bridgeDopaTitle: 'ドーパミンリセット', bridgeDopaDesc: '受動スクロールから深い集中へ切り替えます。',
      stickyTitle: 'そのまま25分集中へ進みますか？', stickySub: '無料のポモドーロ集中タイマーを開く', stickyBtn: 'ポモドーロ →',
      privacy: 'プライバシーポリシー', terms: '利用規約'
    },
    zh: {
      title: '拖延根源解码器与 5 分钟微冲刺计时器 | DopaBrain',
      metaDesc: '免费 12 语言拖延情绪根源解码与 5 分钟启动计时器。识别完美主义、压迫感、模糊或低能量阻碍并轻松启动。',
      skip: '跳转到拖延解码器', back: '← 工具目录', langLabel: '语言：',
      kicker: '情绪调节型启动工作台', heroTitle: '拖延根源解码与 5 分钟冲刺',
      heroLead: '拖延很少是因为懒惰，而是情绪摩擦。识别阻挡行动的 4 大情绪根源，用零压力的 5 分钟微冲刺打破惯性。',
      chip1: '4 大情绪根源', chip2: '5 分钟启动计时器', chip3: '100% 本地私密',
      step1Badge: '第 1 步 • 写下正在回避的任务', step1Title: '哪项任务让你觉得格外难开口或动手？', step1Sub: '选择预设或私密输入（仅保存在本地浏览器）。',
      taskLabel: '你正在推迟的任务（可选）：', placeholder: '例如：回复一封棘手邮件 / 写第一页大纲',
      step2Badge: '第 2 步 • 定位情绪阻碍', step2Title: '此刻哪种阻力最贴合你的感受？', step2Sub: '对症匹配启动策略，立刻降低心理门槛。',
      decodeBtn: '解锁 5 分钟启动方案', resetBtn: '重置',
      resultBadge: '第 3 步 • 零阻力启动协议', targetTaskTitle: '当前微行动目标',
      timerBadge: '5 分钟法则微冲刺', sprintReady: '满 5 分钟就可以毫无负罪感地停下。现在只需打开文件迈出最小一步。',
      sprintStart: '开始 5 分钟冲刺', sprintPause: '暂停计时', sprintReset: '重置计时器',
      sprintRunning: '冲刺进行中！别管质量，只专注于微小的向前推进。',
      sprintDone: '成功突破 5 分钟启动壁垒！你可以安心休息，或顺势进入番茄钟专注。',
      stepsTitle: '3 个微型破冰动作',
      storyBtn: '保存 1080×1920 分享卡片 (PNG)', copyBtn: '复制微计划', shareBtn: '分享工具',
      copied: '5 分钟微计划已复制！', cardSaved: '1080×1920 分享卡片已下载！',
      defaultTask: '先写 5 分钟粗糙草稿第一段',
      presets: ['回复一封拖延已久的邮件', '开始写报告或演示第一页', '整理账单或积压文件', '打开难懂章节或代码问题'],
      roots: {
        perfectionism: ['🎯 完美主义与评判恐惧', '想一次做到最好，导致开始显得压力巨大。', '完美主义冻结 → 故意写一份粗糙 0.1 版', '主动降低标准，关闭内在挑剔声音。', ['5 分钟内禁止修改，只写最随意的 3 条要点。', '粗糙的草稿远胜脑海里看不见的杰作。', '把这 5 分钟当成热身而非终考。']],
        overwhelm: ['🌊 规模压迫感', '任务看起来庞大无边，大脑触发退缩保护。', '压迫冻结 → 切出 1% 超微切片', '隐藏整体工程，只聚焦 3 分钟可见小动作。', ['只保留打开文档写第一行，其余步骤先移出视线。', '关闭无关标签页释放工作记忆。', '这 5 分钟只负责“摆好桌面”，不要求完成。']],
        vague: ['🌫️ 下一步动作模糊', '知道最终目标，却想不出此刻具体点击什么。', '模糊迷雾 → 明确一个物理动词', '把抽象任务替换成看得见的具体动作。', ['写成具体动词：“打开 X 文件列出 3 个小标题”。', '花 2 分钟只挑出 1 个最关键待解问题。', '第 5 分钟留下续写提示，方便下次无缝继续。']],
        low_energy: ['🔋 能量 / 多巴胺偏低', '相比轻松刷手机，当前任务显得枯燥费力。', '多巴胺摩擦 → 低刺激点火启动', '从最简单的机械整理动作借力起跑。', ['先把手机放到另一间屋 5 分钟。', '打开白噪音或轻柔背景音过渡专注阻力。', '从重命名、排版或列目录等轻松小动作切入。']]
      },
      bridgePomoTitle: '番茄钟专注计时器', bridgePomoDesc: '顺着 5 分钟惯性进入 25 分钟深度专注块。',
      bridgeCogTitle: '认知负荷计算器', bridgeCogDesc: '排查是否因脑内待办过载导致执行瘫痪。',
      bridgeDopaTitle: '多巴胺重置协议', bridgeDopaDesc: '从廉价刷屏刺激切换回复利型深度专注。',
      stickyTitle: '准备好开启 25 分钟心流专注了吗？', stickySub: '打开无干扰免费番茄钟计时器', stickyBtn: '番茄钟 →',
      privacy: '隐私政策', terms: '使用条款'
    }
  };

  ['es', 'pt', 'de', 'fr', 'ru', 'hi', 'id', 'tr'].forEach(function (loc) {
    T[loc] = Object.assign({}, T.en);
  });
  T.es.heroTitle = 'Decodificador de Procrastinación y Sprint 5 Min'; T.es.decodeBtn = 'Crear Micro-Plan 5 Min'; T.es.back = '← Catálogo de herramientas';
  T.pt.heroTitle = 'Decodificador de Procrastinação e Sprint 5 Min'; T.pt.decodeBtn = 'Criar Micro-Plano 5 Min'; T.pt.back = '← Catálogo de Ferramentas';
  T.de.heroTitle = 'Prokrastinations-Decoder & 5-Min-Sprint'; T.de.decodeBtn = '5-Min-Mikroplan erstellen'; T.de.back = '← Tool-Katalog';
  T.fr.heroTitle = 'Décodeur de Procrastination & Sprint 5 Min'; T.fr.decodeBtn = 'Créer Mon Micro-Plan'; T.fr.back = '← Catalogue d’outils';
  T.ru.heroTitle = 'Декодер прокрастинации и спринт 5 минут'; T.ru.decodeBtn = 'Создать микро-план'; T.ru.back = '← Каталог инструментов';
  T.hi.heroTitle = 'टालमटोल कारण डिकोडर व 5-मिनट स्प्रिंट'; T.hi.decodeBtn = '5-मिनट योजना बनाएं'; T.hi.back = '← टूल कैटलॉग';
  T.id.heroTitle = 'Dekoder Penundaan & Sprint 5 Menit'; T.id.decodeBtn = 'Buat Rencana 5 Menit'; T.id.back = '← Katalog Alat';
  T.tr.heroTitle = 'Erteleme Kök Çözücü ve 5 Dk Sprint'; T.tr.decodeBtn = '5 Dk Mikro Plan Oluştur'; T.tr.back = '← Araç Kataloğu';

  var currentLang = 'en';
  var selectedRoot = 'perfectionism';
  var hasCompletedOnce = false;
  var sprintSec = 300;
  var sprintTimer = null;

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
        tool_slug: 'procrastination-root-decoder',
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

  function fmtClock(sec) {
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function renderTimer() {
    var d = dict(currentLang);
    document.getElementById('sprintClock').textContent = fmtClock(sprintSec);
    var phase = document.getElementById('sprintPhase');
    var btn = document.getElementById('sprintStartBtn');
    if (sprintSec <= 0) phase.textContent = d.sprintDone;
    else if (sprintTimer) phase.textContent = d.sprintRunning;
    else phase.textContent = d.sprintReady;
    if (btn) btn.textContent = sprintTimer ? d.sprintPause : d.sprintStart;
  }

  function toggleSprint() {
    if (sprintTimer) {
      window.clearInterval(sprintTimer);
      sprintTimer = null;
      renderTimer();
      return;
    }
    if (sprintSec <= 0) sprintSec = 300;
    sendSafeEvent('procrastination_sprint_start');
    sprintTimer = window.setInterval(function () {
      sprintSec = Math.max(0, sprintSec - 1);
      if (sprintSec === 0) {
        window.clearInterval(sprintTimer);
        sprintTimer = null;
      }
      renderTimer();
    }, 1000);
    renderTimer();
  }

  function resetSprint() {
    if (sprintTimer) { window.clearInterval(sprintTimer); sprintTimer = null; }
    sprintSec = 300;
    renderTimer();
  }

  function renderPresets() {
    var d = dict(currentLang);
    var grid = document.getElementById('presetGrid');
    var inp = document.getElementById('taskInput');
    if (!grid) return;
    grid.innerHTML = '';
    (d.presets || T.en.presets).forEach(function (txt) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'preset-btn';
      btn.textContent = txt;
      btn.addEventListener('click', function () {
        if (inp) inp.value = txt;
        grid.querySelectorAll('.preset-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        saveState(false);
      });
      grid.appendChild(btn);
    });
  }

  function renderRoots() {
    var d = dict(currentLang);
    var grid = document.getElementById('rootGrid');
    if (!grid) return;
    grid.innerHTML = '';
    ROOT_IDS.forEach(function (id) {
      var info = (d.roots && d.roots[id]) || T.en.roots[id];
      var isOn = selectedRoot === id;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toggle-card' + (isOn ? ' is-selected' : '');
      btn.setAttribute('data-root', id);
      btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
      var t1 = document.createElement('span'); t1.className = 'toggle-card-title'; t1.textContent = info[0];
      var t2 = document.createElement('span'); t2.className = 'toggle-card-desc'; t2.textContent = info[1];
      btn.appendChild(t1); btn.appendChild(t2);
      btn.addEventListener('click', function () {
        selectedRoot = id;
        renderRoots();
        saveState(false);
      });
      grid.appendChild(btn);
    });
  }

  function decode(isUserAction) {
    var d = dict(currentLang);
    var info = (d.roots && d.roots[selectedRoot]) || T.en.roots[selectedRoot];
    var rawTask = (document.getElementById('taskInput')?.value || '').trim() || d.defaultTask;

    document.getElementById('verdictTitle').textContent = info[2];
    document.getElementById('verdictDesc').textContent = info[3];
    // XSS-safe textContent only
    document.getElementById('targetTaskOut').textContent = rawTask;

    var ul = document.getElementById('microSteps');
    ul.innerHTML = '';
    info[4].forEach(function (s) {
      var li = document.createElement('li');
      li.textContent = s;
      ul.appendChild(li);
    });

    var card = document.getElementById('resultCard');
    card.hidden = false;
    if (isUserAction) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (!hasCompletedOnce) {
        hasCompletedOnce = true;
        sendSafeEvent('procrastination_decoder_complete');
      }
    }
    saveState(true);
  }

  function saveState(completed) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        task: (document.getElementById('taskInput')?.value || '').slice(0, 160),
        root: selectedRoot,
        completed: Boolean(completed || (document.getElementById('resultCard') && !document.getElementById('resultCard').hidden))
      }));
    } catch (e) {}
  }

  function restoreState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var p = JSON.parse(raw);
      if (p && typeof p.task === 'string') document.getElementById('taskInput').value = p.task;
      if (p && ROOT_IDS.indexOf(p.root) !== -1) selectedRoot = p.root;
      renderRoots();
      if (p && p.completed) decode(false);
    } catch (e) {}
  }

  function resetAll() {
    selectedRoot = 'perfectionism';
    document.getElementById('taskInput').value = '';
    resetSprint();
    document.getElementById('resultCard').hidden = true;
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    renderRoots();
    sendSafeEvent('procrastination_decoder_reset');
  }

  function updateLinks() {
    var lang = currentLang;
    document.getElementById('backLink')?.setAttribute('href', '/portal/tools/?lang=' + lang);
    document.getElementById('bridgePomo')?.setAttribute('href', '/pomodoro-timer/?lang=' + lang + '&source=procrastination_decoder_bridge');
    document.getElementById('bridgeCog')?.setAttribute('href', '/portal/tools/cognitive-load-calculator.html?lang=' + lang + '&source=procrastination_decoder_bridge');
    document.getElementById('bridgeDopa')?.setAttribute('href', '/portal/tools/dopamine-detox-protocol.html?lang=' + lang + '&source=procrastination_decoder_bridge');
    document.querySelector('.revenue-sticky-cta')?.setAttribute('href', '/pomodoro-timer/?lang=' + lang + '&source=procrastination_decoder_sticky');
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
    var inp = document.getElementById('taskInput');
    if (inp) inp.placeholder = d.placeholder;
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = currentLang;
    renderPresets();
    renderRoots();
    renderTimer();
    updateLinks();
    if (!document.getElementById('resultCard').hidden) decode(false);
  }

  function downloadCard() {
    var d = dict(currentLang);
    if (!window.DopaBrainStoryCard) return;
    var ok = window.DopaBrainStoryCard.downloadStoryCard({
      slug: 'procrastination-root-decoder',
      badge: d.kicker,
      emoji: '🚀',
      toolName: d.heroTitle,
      headline: document.getElementById('verdictTitle')?.textContent || '',
      subtitle: document.getElementById('verdictDesc')?.textContent || '',
      accent: '#f59e0b',
      accent2: '#10b981',
      metrics: [
        { label: '5-Min Barrier Rule', pct: 100, valueText: '05:00 Sprint', color: '#f59e0b' },
        { label: 'Action Clarity', pct: 95, valueText: '3 Micro-Steps', color: '#10b981' }
      ],
      takeawayLabel: d.stepsTitle,
      takeaway: (document.querySelector('#microSteps li') || {}).textContent || '',
      footerUrl: 'dopabrain.com/portal/tools/procrastination-root-decoder.html'
    });
    if (ok) showToast(d.cardSaved);
  }

  function copyPlan() {
    var d = dict(currentLang);
    var txt = [d.heroTitle, document.getElementById('verdictTitle')?.textContent || '', (document.querySelector('#microSteps li') || {}).textContent || '', 'https://dopabrain.com/portal/tools/procrastination-root-decoder.html?lang=' + currentLang].join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { showToast(d.copied); }).catch(function () {});
    else showToast(d.copied);
  }

  function shareTool() {
    var d = dict(currentLang);
    var url = 'https://dopabrain.com/portal/tools/procrastination-root-decoder.html?lang=' + currentLang;
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
    sendSafeEvent('procrastination_decoder_view');

    document.getElementById('langSelect')?.addEventListener('change', function (e) {
      var next = e.target.value;
      try { var u = new URL(window.location.href); u.searchParams.set('lang', next); window.history.replaceState({}, '', u.toString()); } catch (err) {}
      applyLanguage(next);
    });
    document.getElementById('decodeBtn')?.addEventListener('click', function () { decode(true); });
    document.getElementById('resetBtn')?.addEventListener('click', resetAll);
    document.getElementById('sprintStartBtn')?.addEventListener('click', toggleSprint);
    document.getElementById('sprintResetBtn')?.addEventListener('click', resetSprint);
    document.getElementById('storyBtn')?.addEventListener('click', downloadCard);
    document.getElementById('copyBtn')?.addEventListener('click', copyPlan);
    document.getElementById('shareBtn')?.addEventListener('click', shareTool);
  });
})();
