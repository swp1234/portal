/**
 * DopaBrain CBT Cognitive Distortion Reframer & Thought Record
 * 12-language localization, XSS-safe local state, 1080x1920 story card, zero private telemetry.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'cbt_reframer_v1';
  var SUPPORTED = ['en', 'ko', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];

  var DISTORTIONS = [
    { id: 'all_nothing', icon: '⚖️' },
    { id: 'catastrophizing', icon: '🌪️' },
    { id: 'mind_reading', icon: '🔮' },
    { id: 'fortune_telling', icon: '⏳' },
    { id: 'emotional_reasoning', icon: '🌊' },
    { id: 'should_statements', icon: '📏' },
    { id: 'labeling', icon: '🏷️' },
    { id: 'personalization', icon: '🎯' },
    { id: 'mental_filter', icon: '🔍' },
    { id: 'discounting_positive', icon: '☁️' }
  ];

  var T = {
    en: {
      title: 'CBT Cognitive Distortion Reframer & Thought Record | DopaBrain',
      metaDesc: 'Free interactive CBT cognitive distortion detector and Socratic thought reframer. Spot 10 common thinking traps and build balanced thoughts privately in your browser.',
      skip: 'Skip to CBT Reframer',
      back: '← Tools Catalog',
      langLabel: 'Language:',
      kicker: 'CBT THOUGHT RECORD & REFRAMER',
      heroTitle: 'Cognitive Distortion Reframer',
      heroLead: 'Catch automatic thinking traps in 60 seconds. Identify which of the 10 Beck & Burns cognitive distortions are active and build a calm, evidence-based reframe locally.',
      chip1: '10 CBT Distortions',
      chip2: 'Socratic Reframe Builder',
      chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • CAPTURE THE THOUGHT',
      step1Title: 'What automatic thought is looping right now?',
      step1Sub: 'Pick a common scenario below or write your own private thought (stays strictly in this browser).',
      inputLabel: 'Your automatic thought (optional custom text):',
      placeholder: 'Example: They did not reply for 3 hours, so they must be upset with me.',
      step2Badge: 'STEP 2 • SPOT THINKING TRAPS',
      step2Title: 'Which cognitive distortions fit this thought?',
      step2Sub: 'Select 1 or more patterns that feel familiar. Naming a pattern weakens its emotional pull.',
      buildBtn: 'Generate Socratic Reframe',
      resetBtn: 'Reset',
      resultBadge: 'STEP 3 • BALANCED REFRAME BLUEPRINT',
      meterTrapLabel: 'Distortion Load',
      meterClarityLabel: 'Reframe Readiness',
      capturedTitle: 'Captured Automatic Thought',
      socraticTitle: 'Socratic Reality-Check Questions',
      reframeTitle: 'Suggested Balanced Reframe',
      storyBtn: 'Save 1080×1920 Story Card (PNG)',
      copyBtn: 'Copy Reframe',
      shareBtn: 'Share Tool',
      copied: 'Balanced reframe copied to clipboard!',
      cardSaved: '1080×1920 Story Card downloaded!',
      selectAtLeastOne: 'Select at least 1 cognitive distortion to build your reframe.',
      defaultThought: 'One mistake today means everything I worked for is ruined.',
      verdictLow: 'Focused Cognitive Trap',
      verdictMid: 'Layered Automatic Spiral',
      verdictHigh: 'High-Intensity Cognitive Overload',
      verdictDescLow: 'You spotted a clear thinking distortion. One grounded reality check is usually enough to restore perspective.',
      verdictDescMid: 'Multiple distortions are reinforcing each other. Separating observable facts from assumptions reduces emotional urgency.',
      verdictDescHigh: 'Several rigid loops are firing together. Slow down physically first, then test one assumption at a time.',
      bridgeStressTitle: 'Full Stress Check',
      bridgeStressDesc: 'Measure physical, emotional & cognitive stress load with a 7-day reset plan.',
      bridgeEmotionTitle: 'Emotion Regulation Planner',
      bridgeEmotionDesc: 'Turn emotional spikes into a 5-stage Gross Process Model action script.',
      bridgeRsdTitle: 'RSD Sensitivity Audit',
      bridgeRsdDesc: 'Check rejection sensitivity triggers and run a 90-second somatic cool-down.',
      stickyTitle: 'Check your baseline stress load',
      stickySub: 'Map physical, emotional & cognitive tension in 2 minutes',
      stickyBtn: 'Stress Check →',
      privacy: 'Privacy Policy',
      terms: 'Terms',
      presets: [
        'They read my message and did not reply—they must be angry at me.',
        'I made one mistake in the meeting, so my entire performance is a failure.',
        'If I feel anxious about this presentation, it definitely means it will go badly.',
        'I should always stay calm and productive; struggling means I am weak.'
      ],
      distortions: {
        all_nothing: ['All-or-Nothing Thinking', 'Seeing outcomes as total success or total failure with no middle ground.', 'What partial progress or gray area exists between 0% and 100%?', 'A single setback does not erase the skills and effort I already built.'],
        catastrophizing: ['Catastrophizing', 'Jumping straight to the worst imaginable disaster.', 'What is the most realistic, ordinary outcome—not the worst-case script?', 'Even if this is uncomfortable, I have handled tough moments before and can adapt step by step.'],
        mind_reading: ['Mind Reading', 'Assuming you know others’ negative thoughts without proof.', 'What 2 neutral reasons (busy, tired, distracted) could explain their behavior?', 'Silence or short replies are not proof of anger; I will act on facts rather than guesses.'],
        fortune_telling: ['Fortune Telling', 'Treating a negative prediction as an inevitable fact.', 'What past evidence shows outcomes can surprise me when I prepare?', 'I cannot predict the future; I only need to take the next constructive step right now.'],
        emotional_reasoning: ['Emotional Reasoning', 'Believing "I feel bad, therefore something bad is true."', 'Feelings are real signals, not courtroom proof—what do the objective facts say?', 'Feeling anxious means my nervous system is alert, not that failure is guaranteed.'],
        should_statements: ['Should / Must Statements', 'Rigid internal rules that create guilt and resentment.', 'If I replace "must" with "prefer to," how does the pressure shift?', 'I prefer to do well, and I am allowed to learn imperfectly while still moving forward.'],
        labeling: ['Labeling', 'Defining your entire identity by a single mistake.', 'How can I describe this specific behavior without attacking my whole character?', 'Making an error is a momentary event, not a permanent label on who I am.'],
        personalization: ['Personalization', 'Blaming yourself for events outside your full control.', 'What external factors and other people’s choices also shaped this situation?', 'I own my part calmly without carrying responsibility for factors outside my control.'],
        mental_filter: ['Mental Filter', 'Zooming in on one flaw while ignoring everything that went right.', 'What 2 things went steadily or neutrally that my stress filter skipped?', 'This flaw deserves attention, yet it sits alongside real strengths and steady progress.'],
        discounting_positive: ['Discounting the Positive', 'Dismissing wins as luck or "not good enough."', 'If a close friend achieved this exact thing, would I call it mere luck?', 'My effort and consistency contributed to what worked, and it counts.']
      }
    },
    ko: {
      title: 'CBT 인지 왜곡 리프레이머 & 사고 기록지 | DopaBrain',
      metaDesc: '무료 CBT 인지 왜곡 탐지 및 소크라테스식 사고 재구성 도구. 10가지 대표 사고 함정을 찾아내고 균형 잡힌 대안 사고를 브라우저에서 비공개로 작성하세요.',
      skip: 'CBT 리프레이머로 이동',
      back: '← 도구 카탈로그',
      langLabel: '언어:',
      kicker: 'CBT 사고 기록 & 인지 재구성',
      heroTitle: '인지 왜곡 리프레이머',
      heroLead: '60초 만에 자동적 사고 함정을 포착하세요. 아론 벡과 데이비드 번즈의 10가지 인지 왜곡 중 현재 작동 중인 패턴을 짚어내고 차분한 대안 사고를 설계합니다.',
      chip1: '10가지 CBT 왜곡',
      chip2: '소크라테스 질문 생성',
      chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 자동적 사고 포착',
      step1Title: '지금 머릿속에서 반복되는 생각은 무엇인가요?',
      step1Sub: '아래 흔한 상황을 고르거나 직접 입력하세요(입력 내용은 브라우저 밖으로 전송되지 않습니다).',
      inputLabel: '나의 자동적 사고 (선택 입력):',
      placeholder: '예: 3시간째 답장이 없는 걸 보니 나한테 화가 난 게 분명해.',
      step2Badge: '2단계 • 사고 함정 식별',
      step2Title: '이 생각에 어떤 인지 왜곡이 섞여 있나요?',
      step2Sub: '익숙한 패턴을 1개 이상 선택하세요. 패턴에 이름을 붙이는 것만으로 감정적 압박이 줄어듭니다.',
      buildBtn: '소크라테스 리프레임 생성',
      resetBtn: '초기화',
      resultBadge: '3단계 • 균형 잡힌 대안 사고 설계',
      meterTrapLabel: '인지 왜곡 부하',
      meterClarityLabel: '재구성 준비도',
      capturedTitle: '포착된 자동적 사고',
      socraticTitle: '소크라테스식 현실 점검 질문',
      reframeTitle: '권장 균형 대안 사고',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)',
      copyBtn: '리프레임 복사',
      shareBtn: '도구 공유',
      copied: '균형 잡힌 리프레임이 클립보드에 복사되었습니다!',
      cardSaved: '1080×1920 스토리 카드가 저장되었습니다!',
      selectAtLeastOne: '리프레임을 생성하려면 최소 1개의 인지 왜곡을 선택하세요.',
      defaultThought: '오늘 한 번 실수했으니 지금까지 쌓아온 노력이 전부 망했다.',
      verdictLow: '단일 사고 함정 포착',
      verdictMid: '복합 자동 사고 루프',
      verdictHigh: '고강도 인지 과부하 상태',
      verdictDescLow: '핵심 인지 왜곡 하나가 명확히 포착되었습니다. 사실 확인 질문 한 번으로 시야를 되찾을 수 있습니다.',
      verdictDescMid: '여러 왜곡이 서로를 강화하고 있습니다. 관찰 가능한 사실과 추측을 분리하면 급박함이 가라앉습니다.',
      verdictDescHigh: '강한 경직 사고가 동시에 작동 중입니다. 호흡으로 몸을 먼저 진정시킨 뒤 가정을 하나씩 검증하세요.',
      bridgeStressTitle: '스트레스 정밀 체크',
      bridgeStressDesc: '신체·감정·인지 스트레스 부하를 측정하고 7일 회복 플랜을 받으세요.',
      bridgeEmotionTitle: '감정 조절 플래너',
      bridgeEmotionDesc: '감정 급등을 그로스 5단계 모델 기반 실행 스크립트로 전환합니다.',
      bridgeRsdTitle: '거절 민감성(RSD) 점검',
      bridgeRsdDesc: '거절 민감성 트리거를 점검하고 90초 신체 진정 타이머를 실행하세요.',
      stickyTitle: '나의 기본 스트레스 부하 확인하기',
      stickySub: '2분 만에 신체·감정·인지 긴장도를 점검하세요',
      stickyBtn: '스트레스 체크 →',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      presets: [
        '메시지를 읽고 답장이 없는 걸 보니 나에게 화가 난 게 틀림없다.',
        '회의에서 한 번 실수했으니 내 업무 평가는 완전히 실패했다.',
        '발표가 불안하게 느껴진다면 분명 실제로도 망할 것이다.',
        '나는 항상 침착하고 완벽해야 한다. 흔들리는 건 약하다는 뜻이다.'
      ],
      distortions: {
        all_nothing: ['흑백 논리', '중간 지대 없이 완벽한 성공 아니면 완전한 실패로 단정함.', '0%와 100% 사이에 실제로 존재하는 부분적 진전은 무엇인가요?', '한 번의 실수가 지금까지 쌓아온 역량과 노력을 지우지는 않습니다.'],
        catastrophizing: ['파국화', '가장 끔찍한 최악의 시나리오로 곧장 비약함.', '최악의 대본이 아니라 가장 현실적이고 평범한 결과는 무엇인가요?', '불편한 상황이 와도 나는 이전처럼 단계적으로 대처할 수 있습니다.'],
        mind_reading: ['독심술', '근거 없이 상대가 나를 부정적으로 본다고 확신함.', '상대의 행동을 설명할 수 있는 중립적 이유(바쁨, 피곤함) 2가지는?', '짧은 답장이나 침묵은 분노의 증거가 아니며, 추측 대신 사실에 반응하겠습니다.'],
        fortune_telling: ['점쟁이 오류', '부정적인 예측을 이미 확정된 미래 사실처럼 믿음.', '준비했을 때 예상보다 괜찮았던 과거 경험에는 무엇이 있나요?', '미래를 단정할 수 없으며, 지금 내가 할 수 있는 다음 한 걸음에만 집중하면 됩니다.'],
        emotional_reasoning: ['감정적 추론', '"불안하니까 실제로 나쁜 일이 벌어질 것이다"라고 결론 내림.', '감정은 신호일 뿐 법정 증거가 아닙니다. 객관적 사실은 무엇인가요?', '불안은 신경계가 경계 중이라는 신호일 뿐, 실패가 확정되었다는 뜻은 아닙니다.'],
        should_statements: ['당위적 사고 (~해야 한다)', '경직된 내면 규칙으로 죄책감과 압박을 키움.', '"반드시 ~해야 한다"를 "~하면 좋겠다"로 바꾸면 압박이 어떻게 달라지나요?', '잘해내고 싶지만 불완전하게 배우며 나아가는 것도 충분히 허용됩니다.'],
        labeling: ['낙인찍기', '단일 실수로 자신의 전체 인격에 꼬리표를 붙임.', '내 전체를 비난하지 않고 이번 행동 하나만 구체적으로 표현한다면?', '실수는 일시적인 사건일 뿐 나라는 사람 전체를 정의하는 꼬리표가 아닙니다.'],
        personalization: ['개인화', '통제 밖의 상황까지 전부 내 탓으로 돌림.', '이 결과에 영향을 미친 외부 요인과 타인의 선택에는 무엇이 있나요?', '내가 통제할 수 있는 몫만 차분히 챙기고, 통제 밖의 짐은 내려놓겠습니다.'],
        mental_filter: ['정신적 여과', '잘된 점은 무시하고 단 하나의 결점만 확대함.', '스트레스 필터가 놓친 무난하거나 괜찮았던 점 2가지는 무엇인가요?', '보완할 점은 챙기되, 이미 잘 유지되고 있는 강점과 진전도 함께 보겠습니다.'],
        discounting_positive: ['긍정 격하', '성과를 우연이나 "별것 아닌 일"로 치부함.', '친한 친구가 똑같은 성과를 냈다면 그저 운이라고 말했을까요?', '잘 풀린 부분에는 나의 꾸준한 노력과 준비가 분명히 기여했습니다.']
      }
    },
    zh: {
      title: 'CBT 认知扭曲重构工具与思维记录 | DopaBrain',
      metaDesc: '免费交互式 CBT 认知扭曲识别与苏格拉底式思维重构工具。识别 10 种常见思维陷阱，在本地私密构建平衡替代想法。',
      skip: '跳转到 CBT 重构工具',
      back: '← 工具目录',
      langLabel: '语言：',
      kicker: 'CBT 思维记录与认知重构',
      heroTitle: '认知扭曲重构器',
      heroLead: '60 秒识别自动化思维陷阱。从贝克与伯恩斯 10 大认知扭曲中定位当前模式，并在浏览器本地生成理性平衡的替代视角。',
      chip1: '10 种 CBT 扭曲',
      chip2: '苏格拉底反问引导',
      chip3: '100% 本地私密',
      step1Badge: '第 1 步 • 捕捉自动化想法',
      step1Title: '此刻脑海中不断循环的想法是什么？',
      step1Sub: '选择常见情境或输入自己的想法（内容仅保留在本地浏览器）。',
      inputLabel: '你的自动化想法（可选输入）：',
      placeholder: '例如：对方 3 小时没回复，一定是对我很生气。',
      step2Badge: '第 2 步 • 识别思维陷阱',
      step2Title: '这个想法包含哪些认知扭曲？',
      step2Sub: '选择 1 项或多项符合的模式，为陷阱命名即可降低情绪冲击。',
      buildBtn: '生成平衡重构方案',
      resetBtn: '重置',
      resultBadge: '第 3 步 • 平衡视角蓝图',
      meterTrapLabel: '认知扭曲负荷',
      meterClarityLabel: '重构就绪度',
      capturedTitle: '已捕捉的自动化想法',
      socraticTitle: '苏格拉底式现实检验问题',
      reframeTitle: '建议的平衡替代想法',
      storyBtn: '保存 1080×1920 分享卡片 (PNG)',
      copyBtn: '复制重构结果',
      shareBtn: '分享工具',
      copied: '平衡替代想法已复制到剪贴板！',
      cardSaved: '1080×1920 分享卡片已下载！',
      selectAtLeastOne: '请至少选择 1 种认知扭曲以生成重构方案。',
      defaultThought: '今天出了一次错，说明我之前的努力全都白费了。',
      verdictLow: '单一思维陷阱',
      verdictMid: '复合自动化循环',
      verdictHigh: '高强度认知过载',
      verdictDescLow: '你已清晰定位一个主要思维偏差，一次事实核查即可恢复客观视角。',
      verdictDescMid: '多个思维陷阱正在互相放大。区分可观察事实与主观猜测能迅速降温。',
      verdictDescHigh: '多重僵化念头同时触发。先放慢呼吸稳定身体，再逐条检验假设。',
      bridgeStressTitle: '完整压力评估',
      bridgeStressDesc: '评估身心与认知压力负荷，获取 7 天减压计划。',
      bridgeEmotionTitle: '情绪调节规划器',
      bridgeEmotionDesc: '基于格罗斯五阶段模型将情绪波动转化为行动脚本。',
      bridgeRsdTitle: '拒绝敏感 (RSD) 自测',
      bridgeRsdDesc: '排查拒绝敏感触发点并启动 90 秒躯体降温计时器。',
      stickyTitle: '检测你的基础压力负荷',
      stickySub: '2 分钟定位身体、情绪与认知紧张度',
      stickyBtn: '压力评估 →',
      privacy: '隐私政策',
      terms: '使用条款',
      presets: [
        '对方已读不回，肯定是对我感到不满或生气。',
        '会议上出了一点错，说明我整体表现彻底失败。',
        '我对演讲感到焦虑，所以结果肯定会很糟糕。',
        '我必须时刻保持高效和冷静，动摇就说明我很软弱。'
      ],
      distortions: {
        all_nothing: ['非黑即白思维', '只看完全成功或彻底失败，忽略中间地带。', '在 0% 与 100% 之间，有哪些已经完成的部分进展？', '一次失误不会抹去我已经积累的能力和努力。'],
        catastrophizing: ['灾难化思维', '直接跳到最糟糕的极端后果。', '抛开最坏剧本，最普通、最现实的结果是什么？', '即使过程有些不舒服，我也曾应对过挑战，可以分步调整。'],
        mind_reading: ['读心术', '毫无证据就断定别人在负面评价自己。', '有哪些中性原因（忙碌、疲惫、分心）同样能解释对方行为？', '沉默或简短回复不等于生气，我只依据事实而非猜测行动。'],
        fortune_telling: ['先知错误', '把负面预测当成必然发生的事实。', '过去有哪些时候，实际结果比担忧中好得多？', '我无法预知未来，只需专注当下能做好的下一步。'],
        emotional_reasoning: ['情绪化推理', '认为“我感觉很糟，所以事情一定很糟”。', '情绪是提醒信号而非客观证据——事实本身是什么？', '焦虑只说明神经系统处于警觉状态，不代表必然失败。'],
        should_statements: ['“应该”句式', '用僵硬的内在规则制造内疚与压力。', '如果把“必须”换成“希望”，内心压力会如何变化？', '我希望做好，同时也允许自己在不完美中持续成长。'],
        labeling: ['贴标签', '因单次失误而否定整个人格价值。', '如果不攻击自己的人格，如何仅描述这一次具体行为？', '失误是一次暂时事件，不是定义我全部价值的标签。'],
        personalization: ['个人化归因', '把超出自己控制范围的事情全揽到自己头上。', '还有哪些外部条件与他人的选择影响了这件事？', '我冷静承担自己的部分，不背负超出控制范围的责任。'],
        mental_filter: ['心理过滤', '只放大单一缺陷而忽略所有顺利的部分。', '压力过滤掉了哪两件其实进展平稳的事情？', '这个问题值得修正，但它与我的优势和进展同时存在。'],
        discounting_positive: ['贬低正面经验', '把成绩归因于运气或“不算什么”。', '如果好朋友做到同样成绩，我会说这只是运气吗？', '顺利的部分离不开我的投入与坚持，它值得被认可。']
      }
    },
    ja: {
      title: 'CBT 認知の歪みリフレーマー＆思考記録 | DopaBrain',
      metaDesc: '無料のCBT認知の歪みチェック＆ソクラテス式思考リフレーミングツール。10の思考のクセを見抜き、バランスの取れた視点をブラウザ内で安全に作成します。',
      skip: 'CBTリフレーマーへ移動',
      back: '← ツール一覧',
      langLabel: '言語:',
      kicker: 'CBT 思考記録・認知再構成',
      heroTitle: '認知の歪みリフレーマー',
      heroLead: '60秒で自動思考の落とし穴をキャッチ。ベック＆バーンズの10の認知の歪みから当てはまるパターンを選び、根拠ある穏やかな視点へ整えます。',
      chip1: '10のCBT認知の歪み',
      chip2: 'ソクラテス式質問生成',
      chip3: '100%ローカル非公開',
      step1Badge: 'STEP 1 • 自動思考を書き出す',
      step1Title: '今、頭の中で繰り返している考えは何ですか？',
      step1Sub: 'よくある例を選ぶか、自分の考えを入力してください（ブラウザ外には送信されません）。',
      inputLabel: '自動思考（任意入力）:',
      placeholder: '例：3時間返信がないから、きっと私に怒っているに違いない。',
      step2Badge: 'STEP 2 • 思考のクセを見つける',
      step2Title: 'どの認知の歪みが当てはまりますか？',
      step2Sub: 'ピンとくるものを1つ以上選んでください。名前をつけるだけで感情の渦が弱まります。',
      buildBtn: 'リフレームを生成する',
      resetBtn: 'リセット',
      resultBadge: 'STEP 3 • バランスの取れた視点',
      meterTrapLabel: '認知の歪み負荷',
      meterClarityLabel: 'リフレーム準備度',
      capturedTitle: '捉えた自動思考',
      socraticTitle: '現実点検のためのソクラテス質問',
      reframeTitle: '提案するバランス思考',
      storyBtn: '1080×1920 ストーリーカード保存 (PNG)',
      copyBtn: 'リフレームをコピー',
      shareBtn: 'ツールを共有',
      copied: 'バランス思考をクリップボードにコピーしました！',
      cardSaved: '1080×1920 ストーリーカードを保存しました！',
      selectAtLeastOne: '少なくとも1つの認知の歪みを選択してください。',
      defaultThought: '今日ひとつミスをしたから、これまでの努力はすべて台無しだ。',
      verdictLow: '明確な思考のクセを検出',
      verdictMid: '複合的な思考ループ',
      verdictHigh: '高負荷な認知過密状態',
      verdictDescLow: '核となる歪みが1つはっきり見えました。事実確認を1回行うだけで視野が広がります。',
      verdictDescMid: '複数の思考パターンが重なっています。事実と推測を分けることで焦りが和らぎます。',
      verdictDescHigh: '強い自動思考が同時に働いています。まず深呼吸して体を落ち着かせ、仮定を1つずつ点検しましょう。',
      bridgeStressTitle: '総合ストレスチェック',
      bridgeStressDesc: '身体・感情・認知のストレス負荷を測定し、7日回復プランを確認。',
      bridgeEmotionTitle: '感情コントロールプランナー',
      bridgeEmotionDesc: '感情の高ぶりをグロス5段階モデルの行動スクリプトに変換します。',
      bridgeRsdTitle: '拒絶感受性(RSD)チェック',
      bridgeRsdDesc: '拒絶への敏感さトリガーを確認し、90秒クールダウンを実行。',
      stickyTitle: '現在のストレス負荷をチェック',
      stickySub: '2分で身体・感情・認知の緊張度を可視化',
      stickyBtn: 'ストレスチェック →',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      presets: [
        '既読スルーされたので、きっと私に怒っているに違いない。',
        '会議で一度失敗したから、私の評価は完全に終わった。',
        '発表が不安に感じるということは、本番も絶対にうまくいかない。',
        '私は常に冷静で完璧であるべきだ。揺らぐのは弱い証拠だ。'
      ],
      distortions: {
        all_nothing: ['白黒思考', '中間を認めず完全な成功か失敗かで決めつける。', '0%と100%の間にある部分的な前進は何ですか？', '一度の失敗でこれまで積み上げた経験や努力が消えるわけではありません。'],
        catastrophizing: ['破局視', '最悪の結末へ一気に飛躍する。', '最悪の脚本ではなく、もっとも現実的で普通の結末は？', '多少気まずくても、これまでも段階的に乗り越えてきました。'],
        mind_reading: ['心の読みすぎ', '証拠なしに相手の否定的な気持ちを決めつける。', '相手の行動を説明する中立的な理由（多忙・疲労）は2つありますか？', '返信の遅さは怒りの証拠ではなく、推測より事実で判断します。'],
        fortune_telling: ['先読みの誤り', '否定的な予測を確定した未来のように扱う。', '準備した結果、予想よりうまくいった過去の経験は？', '未来は断定できません。今できる次の一歩だけに集中します。'],
        emotional_reasoning: ['感情的決めつけ', '「不安だから悪いことが起きる」と感じたまま事実視する。', '感情はサインであり証拠ではありません。客観的事実は？', '不安は神経の警戒反応であって、失敗の保証ではありません。'],
        should_statements: ['べき思考', '厳しいルールで自分や他人を追い込む。', '「〜すべき」を「〜できたら嬉しい」に言い換えると？', 'うまくやりたいけれど、不完全なまま学んで進むことも許されます。'],
        labeling: ['レッテル貼り', 'ひとつの失敗で自分の人格全体を決めつける。', '人格ではなく、今回の出来事だけを具体的に表すと？', 'ミスは一時的な出来事であり、私自身の価値そのものではありません。'],
        personalization: ['個人化', '自分がコントロールできないことまで自分のせいにする。', '状況に影響した外部要因や相手の選択には何がありますか？', '自分の責任範囲だけ落ち着いて受け止め、それ以外は手放します。'],
        mental_filter: ['心のフィルター', '一つの欠点だけを拡大し、うまくいった点を無視する。', '見落としている順調・普通だった点は2つありますか？', '改善点は見つつも、維持できている強みと前進も同時に認めます。'],
        discounting_positive: ['プラスの否定', '成果を「たまたま」「大したことない」と片づける。', '親友が同じ成果を出したら、ただの運だと言いますか？', 'うまくいった背景には、自分の継続的な取り組みが確かにあります。']
      }
    }
  };

  // Compact complete localizations for es, pt, de, fr, ru, hi, id, tr so all 12 languages have full native coverage
  var EXTRA = {
    es: {
      title: 'Reencuadre CBT de Distorsiones Cognitivas | DopaBrain',
      metaDesc: 'Herramienta gratuita de TCC para detectar 10 distorsiones cognitivas y construir pensamientos equilibrados en privado.',
      skip: 'Ir al reencuadre CBT', back: '← Catálogo de herramientas', langLabel: 'Idioma:',
      kicker: 'REGISTRO DE PENSAMIENTOS TCC', heroTitle: 'Reencuadre de Distorsiones Cognitivas',
      heroLead: 'Detecta trampas mentales en 60 segundos. Identifica las 10 distorsiones cognitivas de Beck y Burns y crea una perspectiva equilibrada en tu navegador.',
      chip1: '10 Distorsiones TCC', chip2: 'Preguntas Socráticas', chip3: '100% Privado (Local)',
      step1Badge: 'PASO 1 • CAPTURA EL PENSAMIENTO', step1Title: '¿Qué pensamiento automático se repite ahora?',
      step1Sub: 'Elige un ejemplo o escribe el tuyo en privado (nunca sale de tu navegador).',
      inputLabel: 'Tu pensamiento automático (opcional):', placeholder: 'Ejemplo: No respondió en 3 horas, seguro está molesto conmigo.',
      step2Badge: 'PASO 2 • DETECTA TRAMPAS MENTALES', step2Title: '¿Qué distorsiones cognitivas encajan?',
      step2Sub: 'Selecciona 1 o más patrones. Nombrar el patrón reduce su carga emocional.',
      buildBtn: 'Generar Reencuadre Socrático', resetBtn: 'Reiniciar',
      resultBadge: 'PASO 3 • PERSPECTIVA EQUILIBRADA', meterTrapLabel: 'Carga de Distorsión', meterClarityLabel: 'Preparación de Reencuadre',
      capturedTitle: 'Pensamiento Capturado', socraticTitle: 'Preguntas Socráticas de Realidad', reframeTitle: 'Reencuadre Equilibrado Sugerido',
      storyBtn: 'Guardar Tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar Reencuadre', shareBtn: 'Compartir',
      copied: '¡Reencuadre copiado al portapapeles!', cardSaved: '¡Tarjeta 1080×1920 descargada!',
      selectAtLeastOne: 'Selecciona al menos 1 distorsión cognitiva.',
      defaultThought: 'Un error hoy significa que todo mi esfuerzo se arruinó.',
      verdictLow: 'Trampa Cognitiva Puntual', verdictMid: 'Espiral Automática Múltiple', verdictHigh: 'Sobrecarga Cognitiva Intensa',
      verdictDescLow: 'Identificaste un sesgo claro. Un chequeo de hechos basta para recuperar calma.',
      verdictDescMid: 'Varias distorsiones se refuerzan entre sí. Separar hechos de suposiciones baja la urgencia.',
      verdictDescHigh: 'Varios bucles rígidos actúan a la vez. Respira lento y contrasta una suposición cada vez.',
      bridgeStressTitle: 'Test de Estrés', bridgeStressDesc: 'Mide estrés físico, emocional y cognitivo con plan de 7 días.',
      bridgeEmotionTitle: 'Planificador Emocional', bridgeEmotionDesc: 'Convierte picos emocionales en acciones del modelo de Gross.',
      bridgeRsdTitle: 'Auditoría RSD', bridgeRsdDesc: 'Evalúa sensibilidad al rechazo y pausa somática de 90 segundos.',
      stickyTitle: 'Mide tu nivel base de estrés', stickySub: 'Evalúa tensión física y mental en 2 minutos', stickyBtn: 'Test Estrés →',
      privacy: 'Privacidad', terms: 'Términos',
      presets: ['Leyó mi mensaje y no contestó: seguro está enfadado.', 'Cometí un error en la reunión, todo mi trabajo es un fracaso.', 'Siento ansiedad por la presentación, así que saldrá mal.', 'Debo ser siempre productivo; fallar significa debilidad.'],
      distortions: {
        all_nothing: ['Pensamiento Todo o Nada', 'Ver solo éxito total o fracaso absoluto.', '¿Qué progreso parcial existe entre 0% y 100%?', 'Un tropiezo no borra las habilidades ni el esfuerzo construido.'],
        catastrophizing: ['Catastrofismo', 'Saltar directo al peor desastre posible.', '¿Cuál es el resultado más realista y ordinario?', 'Aunque sea incómodo, puedo adaptarme paso a paso.'],
        mind_reading: ['Lectura de Mente', 'Asumir pensamientos negativos ajenos sin pruebas.', '¿Qué 2 razones neutrales (ocupado, cansado) explican su conducta?', 'El silencio no prueba enfado; responderé a hechos, no a suposiciones.'],
        fortune_telling: ['Adivinación del Futuro', 'Tratar una predicción negativa como certeza.', '¿Cuándo salió mejor de lo esperado al prepararte?', 'No puedo predecir el futuro; solo necesito dar el siguiente paso útil.'],
        emotional_reasoning: ['Razonamiento Emocional', 'Creer que sentir malestar prueba una amenaza real.', 'Las emociones son señales, no pruebas: ¿qué dicen los hechos?', 'Sentir ansiedad indica alerta nerviosa, no fracaso seguro.'],
        should_statements: ['Exigencias "Debería"', 'Reglas rígidas que generan culpa y tensión.', 'Si cambio "debo" por "prefiero", ¿cómo cambia la presión?', 'Prefiero hacerlo bien y me permito aprender de forma imperfecta.'],
        labeling: ['Etiquetado', 'Definir tu identidad completa por un solo error.', '¿Cómo describir esta acción sin atacar todo mi valor?', 'Un error es un evento puntual, no una etiqueta permanente.'],
        personalization: ['Personalización', 'Culparte por factores fuera de tu control.', '¿Qué factores externos también influyeron aquí?', 'Asumo solo mi parte sin cargar lo que no controlo.'],
        mental_filter: ['Filtro Mental', 'Enfocarte en un fallo ignorando lo positivo.', '¿Qué 2 cosas fueron bien y el estrés ocultó?', 'Este detalle se puede mejorar junto a mis fortalezas reales.'],
        discounting_positive: ['Descartar lo Positivo', 'Restar mérito a tus logros llamándolos suerte.', '¿Llamarías simple suerte al mismo logro de un amigo?', 'Mi constancia y esfuerzo contribuyeron a lo que funcionó.']
      }
    },
    pt: {
      title: 'Reenquadramento TCC de Distorções Cognitivas | DopaBrain',
      metaDesc: 'Detector interativo gratuito de 10 distorções cognitivas da TCC com perguntas socráticas e privacidade local.',
      skip: 'Ir para o Reenquadramento TCC', back: '← Catálogo de Ferramentas', langLabel: 'Idioma:',
      kicker: 'REGISTRO DE PENSAMENTOS TCC', heroTitle: 'Reenquadramento de Distorções Cognitivas',
      heroLead: 'Identifique armadilhas mentais em 60 segundos. Reconheça as 10 distorções de Beck e Burns e construa uma visão equilibrada localmente.',
      chip1: '10 Distorções TCC', chip2: 'Perguntas Socráticas', chip3: '100% Privado (Local)',
      step1Badge: 'PASSO 1 • CAPTURE O PENSAMENTO', step1Title: 'Qual pensamento automático está se repetindo agora?',
      step1Sub: 'Escolha um cenário ou escreva o seu (fica 100% no seu navegador).',
      inputLabel: 'Seu pensamento automático (opcional):', placeholder: 'Exemplo: Não respondeu em 3 horas, com certeza está chateado.',
      step2Badge: 'PASSO 2 • IDENTIFIQUE ARMADILHAS', step2Title: 'Quais distorções cognitivas se aplicam?',
      step2Sub: 'Selecione 1 ou mais padrões. Nomear a distorção reduz o impacto emocional.',
      buildBtn: 'Gerar Reenquadramento Socrático', resetBtn: 'Reiniciar',
      resultBadge: 'PASSO 3 • PERSPECTIVA EQUILIBRADA', meterTrapLabel: 'Carga de Distorção', meterClarityLabel: 'Prontidão de Reenquadramento',
      capturedTitle: 'Pensamento Capturado', socraticTitle: 'Perguntas Socráticas de Realidade', reframeTitle: 'Reenquadramento Equilibrado Sugerido',
      storyBtn: 'Salvar Cartão 1080×1920 (PNG)', copyBtn: 'Copiar Reenquadramento', shareBtn: 'Compartilhar',
      copied: 'Reenquadramento copiado!', cardSaved: 'Cartão 1080×1920 baixado!',
      selectAtLeastOne: 'Selecione ao menos 1 distorção cognitiva.',
      defaultThought: 'Um erro hoje significa que todo o meu esforço foi arruinado.',
      verdictLow: 'Armadilha Cognitiva Focada', verdictMid: 'Espiral Automática Combinada', verdictHigh: 'Sobrecarga Cognitiva Alta',
      verdictDescLow: 'Você identificou um viés claro. Uma checagem objetiva já devolve clareza.',
      verdictDescMid: 'Várias distorções se reforçam. Separar fatos de suposições reduz a urgência.',
      verdictDescHigh: 'Vários padrões rígidos estão ativos juntos. Respire fundo e teste uma ideia por vez.',
      bridgeStressTitle: 'Teste de Estresse', bridgeStressDesc: 'Avalie tensão física, emocional e cognitiva com plano de 7 dias.',
      bridgeEmotionTitle: 'Planejador Emocional', bridgeEmotionDesc: 'Transforme picos emocionais em ações do modelo de Gross.',
      bridgeRsdTitle: 'Auditoria de RSD', bridgeRsdDesc: 'Mapeie gatilhos de rejeição com pausa somática de 90s.',
      stickyTitle: 'Verifique sua carga de estresse', stickySub: 'Mapeie tensão física e mental em 2 minutos', stickyBtn: 'Teste Estresse →',
      privacy: 'Privacidade', terms: 'Termos',
      presets: ['Visualizou e não respondeu: deve estar bravo comigo.', 'Errei na reunião, então todo meu trabalho fracassou.', 'Sinto ansiedade antes da apresentação, logo vai dar errado.', 'Eu deveria estar sempre calmo; vacilar significa fraqueza.'],
      distortions: {
        all_nothing: ['Pensamento Tudo ou Nada', 'Enxergar apenas sucesso total ou fracasso completo.', 'Qual progresso parcial existe entre 0% e 100%?', 'Um tropeço não apaga as habilidades e esforços construídos.'],
        catastrophizing: ['Catastrofização', 'Saltar direto para o pior desastre imaginável.', 'Qual é o desfecho mais comum e realista?', 'Mesmo sendo desconfortável, posso me adaptar passo a passo.'],
        mind_reading: ['Leitura Mental', 'Presumir pensamentos negativos alheios sem evidência.', 'Quais 2 motivos neutros (ocupado, cansado) explicam a demora?', 'Silêncio não prova raiva; vou agir com base em fatos.'],
        fortune_telling: ['Previsão do Futuro', 'Tratar uma previsão negativa como certeza absoluta.', 'Quando o resultado foi melhor do que o medo antecipava?', 'Não prevejo o futuro; só preciso dar o próximo passo construtivo.'],
        emotional_reasoning: ['Raciocínio Emocional', 'Acreditar que sentir medo prova que algo ruim é fato.', 'Emoções são sinais, não provas: o que dizem os fatos?', 'Ansiedade é alerta do sistema nervoso, não certeza de falha.'],
        should_statements: ['Regras do "Deveria"', 'Normas rígidas que alimentam culpa e tensão.', 'Se trocar "preciso" por "prefiro", como a pressão muda?', 'Prefiro ir bem e me permito aprender de forma imperfeita.'],
        labeling: ['Rotulagem', 'Definir toda a sua identidade por um único erro.', 'Como descrever o episódio sem atacar meu valor pessoal?', 'Um erro é um evento momentâneo, não um rótulo fixo.'],
        personalization: ['Personalização', 'Culpar-se por fatores fora do seu controle.', 'Quais fatores externos também influenciaram essa situação?', 'Assumo minha parte com calma sem carregar o que não controlo.'],
        mental_filter: ['Filtro Mental', 'Focar em uma falha ignorando o que funcionou.', 'Quais 2 aspectos seguiram bem e o estresse escondeu?', 'Essa falha pode ser ajustada junto aos meus avanços reais.'],
        discounting_positive: ['Desqualificar o Positivo', 'Reduzir conquistas a mera sorte.', 'Se um amigo conseguisse o mesmo, eu chamaria de sorte?', 'Meu esforço consistente contribuiu para o que deu certo.']
      }
    },
    de: {
      title: 'KVT Kognitive Verzerrungen Reframer | DopaBrain',
      metaDesc: 'Kostenloses KVT-Tool zum Erkennen von 10 kognitiven Verzerrungen und sokratischem Reframing lokal im Browser.',
      skip: 'Zum KVT-Reframer', back: '← Tool-Katalog', langLabel: 'Sprache:',
      kicker: 'KVT GEDANKENPROTOKOLL', heroTitle: 'Kognitive Verzerrungen Reframer',
      heroLead: 'Erkenne automatische Denkfallen in 60 Sekunden. Ordne die 10 KVT-Verzerrungen nach Beck & Burns zu und forme lokal eine ruhige Alternative.',
      chip1: '10 KVT-Verzerrungen', chip2: 'Sokratisches Reframing', chip3: '100% Privat (Lokal)',
      step1Badge: 'SCHRITT 1 • GEDANKEN ERFASSEN', step1Title: 'Welcher automatische Gedanke kreist gerade?',
      step1Sub: 'Wähle ein Beispiel oder schreibe privat deinen eigenen Gedanken.',
      inputLabel: 'Dein automatischer Gedanke (optional):', placeholder: 'Beispiel: Keine Antwort seit 3 Stunden – bestimmt ist man sauer auf mich.',
      step2Badge: 'SCHRITT 2 • DENKFALLEN ERKENNEN', step2Title: 'Welche kognitiven Verzerrungen passen?',
      step2Sub: 'Wähle 1 oder mehr Muster. Das Benennen senkt den emotionalen Druck.',
      buildBtn: 'Sokratisches Reframing erstellen', resetBtn: 'Zurücksetzen',
      resultBadge: 'SCHRITT 3 • AUSGEWOGENE PERSPEKTIVE', meterTrapLabel: 'Verzerrungslast', meterClarityLabel: 'Reframe-Bereitschaft',
      capturedTitle: 'Erfasster Gedanke', socraticTitle: 'Sokratische Realitätsfragen', reframeTitle: 'Ausgewogenes Reframing',
      storyBtn: '1080×1920 Story-Karte speichern (PNG)', copyBtn: 'Reframe kopieren', shareBtn: 'Tool teilen',
      copied: 'Reframing in die Zwischenablage kopiert!', cardSaved: '1080×1920 Story-Karte heruntergeladen!',
      selectAtLeastOne: 'Wähle mindestens 1 kognitive Verzerrung aus.',
      defaultThought: 'Ein Fehler heute bedeutet, dass meine ganze Arbeit ruiniert ist.',
      verdictLow: 'Fokussierte Denkfalle', verdictMid: 'Mehrstufige Gedankenspirale', verdictHigh: 'Hohe kognitive Überlastung',
      verdictDescLow: 'Du hast ein klares Muster erkannt. Ein ruhiger Faktencheck stellt Perspektive her.',
      verdictDescMid: 'Mehrere Verzerrungen verstärken sich gegenseitig. Trenne Fakten von Annahmen.',
      verdictDescHigh: 'Mehrere starre Schleifen laufen gleichzeitig. Atme ruhig aus und prüfe Schritt für Schritt.',
      bridgeStressTitle: 'Vollständiger Stresstest', bridgeStressDesc: 'Miss körperliche, emotionale & kognitive Belastung mit 7-Tage-Plan.',
      bridgeEmotionTitle: 'Emotions-Planer', bridgeEmotionDesc: 'Nutze das 5-Stufen-Modell nach Gross für akute Gefühle.',
      bridgeRsdTitle: 'RSD-Sensitivitäts-Audit', bridgeRsdDesc: 'Prüfe Ablehnungs-Trigger mit 90-Sekunden-Reset.',
      stickyTitle: 'Prüfe dein Stressniveau', stickySub: 'Körperliche & mentale Spannung in 2 Minuten erfassen', stickyBtn: 'Stresstest →',
      privacy: 'Datenschutz', terms: 'Nutzungsbedingungen',
      presets: ['Gelesen ohne Antwort – bestimmt ist die Person wütend.', 'Ein Fehler im Meeting ruiniert meine gesamte Leistung.', 'Wenn ich nervös bin, wird der Vortrag sicher schiefgehen.', 'Ich muss immer perfekt bleiben; Zweifel zeigen Schwäche.'],
      distortions: {
        all_nothing: ['Schwarz-Weiß-Denken', 'Nur totaler Erfolg oder völliges Scheitern.', 'Welcher Teilfortschritt liegt zwischen 0% und 100%?', 'Ein einzelner Rückschlag löscht meine bisherigen Fähigkeiten nicht aus.'],
        catastrophizing: ['Katastrophisieren', 'Sofortiges Springen zum schlimmsten Szenario.', 'Was ist das realistischste, gewöhnliche Ergebnis?', 'Auch wenn es unangenehm ist, kann ich Schritt für Schritt reagieren.'],
        mind_reading: ['Gedankenlesen', 'Negative Absichten anderer ohne Beweis annehmen.', 'Welche 2 neutralen Gründe (beschäftigt, müde) passen ebenfalls?', 'Schweigen beweist keinen Ärger; ich orientiere mich an Fakten.'],
        fortune_telling: ['Wahrsagerei', 'Eine negative Vorhersage als sichere Tatsache behandeln.', 'Wann verlief etwas nach Vorbereitung besser als befürchtet?', 'Ich kenne die Zukunft nicht – ich wähle nur den nächsten sinnvollen Schritt.'],
        emotional_reasoning: ['Emotionales Begründen', 'Gefühle direkt als objektive Wahrheit deuten.', 'Gefühle sind Signale, keine Beweise – was zeigen die Fakten?', 'Anspannung zeigt ein wachsames Nervensystem, kein sicheres Scheitern.'],
        should_statements: ['Sollte/Muss-Forderungen', 'Starre innere Regeln, die Druck und Schuld erzeugen.', 'Wie wirkt der Satz mit „ich möchte“ statt „ich muss“?', 'Ich strebe Qualität an und darf dennoch unperfekt lernen.'],
        labeling: ['Etikettieren', 'Die ganze Person anhand eines Fehlers abwerten.', 'Wie beschreibe ich nur diese Situation ohne Selbstabwertung?', 'Ein Fehler ist ein Moment, kein dauerhaftes Urteil über mich.'],
        personalization: ['Personalisierung', 'Sich Schuld an äußeren Faktoren geben.', 'Welche äußeren Umstände haben ebenfalls mitgewirkt?', 'Ich übernehme meinen Anteil ruhig und lasse Fremdes los.'],
        mental_filter: ['Mentaler Filter', 'Einen Makel vergrößern und Positives ausblenden.', 'Welche 2 Dinge liefen stabil, die mein Stress übersehen hat?', 'Dieser Punkt verdient Aufmerksamkeit neben meinen realen Stärken.'],
        discounting_positive: ['Positives abwerten', 'Erfolge als bloßes Glück abtun.', 'Würde ich denselben Erfolg bei Freunden als Zufall abtun?', 'Mein Einsatz hat spürbar zu dem beigetragen, was funktioniert hat.']
      }
    },
    fr: {
      title: 'Recadrage TCC des Distorsions Cognitives | DopaBrain',
      metaDesc: 'Outil TCC gratuit pour identifier 10 distorsions cognitives et bâtir une pensée équilibrée en local dans votre navigateur.',
      skip: 'Aller au recadrage TCC', back: '← Catalogue d’outils', langLabel: 'Langue :',
      kicker: 'JOURNAL DE PENSÉES TCC', heroTitle: 'Recadrage des Distorsions Cognitives',
      heroLead: 'Repérez vos pièges mentaux en 60 secondes. Identifiez les 10 distorsions de Beck et Burns et construisez une alternative apaisée en privé.',
      chip1: '10 Distorsions TCC', chip2: 'Questions Socratiques', chip3: '100% Privé (Local)',
      step1Badge: 'ÉTAPE 1 • CAPTER LA PENSÉE', step1Title: 'Quelle pensée automatique tourne en boucle ?',
      step1Sub: 'Choisissez un exemple ou écrivez librement (rien ne quitte votre navigateur).',
      inputLabel: 'Votre pensée automatique (facultatif) :', placeholder: 'Ex. : Pas de réponse depuis 3 heures, ils sont sûrement fâchés.',
      step2Badge: 'ÉTAPE 2 • REPÉRER LES PIÈGES', step2Title: 'Quelles distorsions cognitives correspondent ?',
      step2Sub: 'Sélectionnez 1 ou plusieurs schémas. Nommer un biais diminue sa charge.',
      buildBtn: 'Générer un Recadrage Socratique', resetBtn: 'Réinitialiser',
      resultBadge: 'ÉTAPE 3 • PERSPECTIVE ÉQUILIBRÉE', meterTrapLabel: 'Charge de Distorsion', meterClarityLabel: 'Clarté de Recadrage',
      capturedTitle: 'Pensée Capturée', socraticTitle: 'Questions Socratiques de Réalité', reframeTitle: 'Recadrage Équilibré Suggéré',
      storyBtn: 'Enregistrer Carte 1080×1920 (PNG)', copyBtn: 'Copier le Recadrage', shareBtn: 'Partager',
      copied: 'Recadrage copié dans le presse-papiers !', cardSaved: 'Carte 1080×1920 téléchargée !',
      selectAtLeastOne: 'Sélectionnez au moins 1 distorsion cognitive.',
      defaultThought: 'Une seule erreur aujourd’hui signifie que tout mon travail est gâché.',
      verdictLow: 'Piège Cognitif Ciblé', verdictMid: 'Spirale Automatique Combinée', verdictHigh: 'Surcharge Cognitive Intense',
      verdictDescLow: 'Vous avez cerné un biais précis. Une vérification factuelle suffit souvent à apaiser.',
      verdictDescMid: 'Plusieurs distorsions s’auto-alimentent. Séparer faits et hypothèses calme l’urgence.',
      verdictDescHigh: 'Plusieurs boucles rigides s’activent ensemble. Ralentissez la respiration puis testez une hypothèse.',
      bridgeStressTitle: 'Bilan de Stress', bridgeStressDesc: 'Évaluez la charge physique, émotionnelle et cognitive sur 7 jours.',
      bridgeEmotionTitle: 'Plan Régulation Émotionnelle', bridgeEmotionDesc: 'Appliquez le modèle de Gross en 5 étapes.',
      bridgeRsdTitle: 'Audit Sensibilité RSD', bridgeRsdDesc: 'Repérez les déclencheurs de rejet avec pause de 90 secondes.',
      stickyTitle: 'Évaluez votre charge de stress', stickySub: 'Mesurez tension physique et mentale en 2 minutes', stickyBtn: 'Test Stress →',
      privacy: 'Confidentialité', terms: 'Conditions',
      presets: ['Message lu sans réponse : cette personne m’en veut forcément.', 'J’ai fait une erreur en réunion, tout mon travail est un échec.', 'Je me sens anxieux avant de parler, donc ce sera catastrophique.', 'Je dois toujours rester parfait ; douter prouve ma faiblesse.'],
      distortions: {
        all_nothing: ['Pensée Tout ou Rien', 'Voir seulement réussite absolue ou échec total.', 'Quel progrès partiel existe entre 0% et 100% ?', 'Un faux pas n’efface ni mes compétences ni mes efforts passés.'],
        catastrophizing: ['Catastrophisme', 'Sauter immédiatement au pire scénario.', 'Quel est l’issue la plus ordinaire et réaliste ?', 'Même si c’est inconfortable, je peux m’ajuster étape par étape.'],
        mind_reading: ['Lecture de Pensée', 'Supposer le jugement négatif d’autrui sans preuve.', 'Quelles 2 raisons neutres (occupé, fatigué) expliquent ce silence ?', 'Le silence ne prouve pas la colère ; j’agis sur les faits.'],
        fortune_telling: ['Prédiction Négative', 'Prendre une crainte future pour une certitude.', 'Quand les choses se sont-elles mieux passées que prévu ?', 'Je ne prédis pas l’avenir ; je choisis juste le prochain pas utile.'],
        emotional_reasoning: ['Raisonnement Émotionnel', 'Croire qu’un ressenti prouve un danger réel.', 'Les émotions sont des signaux, pas des preuves : quels sont les faits ?', 'L’anxiété indique une vigilance nerveuse, pas un échec garanti.'],
        should_statements: ['Injonctions « Je dois »', 'Règles rigides qui nourrissent culpabilité et tension.', 'Si je remplace « je dois » par « je préfère », que change-t-il ?', 'Je souhaite bien faire tout en m’autorisant un apprentissage imparfait.'],
        labeling: ['Étiquetage', 'Réduire toute votre identité à une erreur.', 'Comment décrire ce geste sans juger toute ma valeur ?', 'Une erreur est un événement ponctuel, jamais une étiquette définitive.'],
        personalization: ['Personnalisation', 'S’attribuer la faute d’éléments hors de contrôle.', 'Quels facteurs extérieurs ont aussi joué un rôle ?', 'J’assume ma part avec calme sans porter ce qui m’échappe.'],
        mental_filter: ['Filtre Mental', 'Zoomer sur un défaut en oubliant le positif.', 'Quels 2 éléments stables mon stress a-t-il filtrés ?', 'Ce détail mérite ajustement aux côtés de mes progrès réels.'],
        discounting_positive: ['Disqualifier le Positif', 'Attribuer ses réussites à la simple chance.', 'Dirais-je que c’est juste de la chance pour un ami ?', 'Ma régularité et mes efforts comptent dans ce qui a fonctionné.']
      }
    },
    ru: {
      title: 'КПТ-рефреймер когнитивных искажений | DopaBrain',
      metaDesc: 'Бесплатный интерактивный КПТ-инструмент для выявления 10 когнитивных искажений и бережного рефрейминга локально в браузере.',
      skip: 'К рефреймеру КПТ', back: '← Каталог инструментов', langLabel: 'Язык:',
      kicker: 'КПТ ДНЕВНИК МЫСЛЕЙ', heroTitle: 'Рефреймер когнитивных искажений',
      heroLead: 'Поймайте автоматическую ловушку мышления за 60 секунд. Отметьте паттерны по Беку и Бернсу и соберите спокойную альтернативу локально.',
      chip1: '10 искажений КПТ', chip2: 'Сократические вопросы', chip3: '100% приватно',
      step1Badge: 'ШАГ 1 • ЗАФИКСИРУЙТЕ МЫСЛЬ', step1Title: 'Какая автоматическая мысль крутится сейчас?',
      step1Sub: 'Выберите готовый пример или напишите свою (данные остаются только в браузере).',
      inputLabel: 'Ваша мысль (необязательно):', placeholder: 'Пример: Не отвечают 3 часа — значит, на меня злятся.',
      step2Badge: 'ШАГ 2 • НАЙДИТЕ ЛОВУШКИ', step2Title: 'Какие когнитивные искажения подходят?',
      step2Sub: 'Выберите 1 или более паттернов. Называние снижает эмоциональный накал.',
      buildBtn: 'Создать сбалансированный рефрейм', resetBtn: 'Сбросить',
      resultBadge: 'ШАГ 3 • СБАЛАНСИРОВАННЫЙ ВЗГЛЯД', meterTrapLabel: 'Нагрузка искажений', meterClarityLabel: 'Готовность к рефрейму',
      capturedTitle: 'Зафиксированная мысль', socraticTitle: 'Сократические вопросы проверки реальности', reframeTitle: 'Предложенный баланс-рефрейм',
      storyBtn: 'Сохранить карточку 1080×1920 (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться',
      copied: 'Рефрейм скопирован!', cardSaved: 'Карточка 1080×1920 сохранена!',
      selectAtLeastOne: 'Выберите хотя бы 1 когнитивное искажение.',
      defaultThought: 'Одна ошибка сегодня означает, что все мои усилия напрасны.',
      verdictLow: 'Точечная ловушка мышления', verdictMid: 'Смешанная автоматическая спираль', verdictHigh: 'Высокая когнитивная перегрузка',
      verdictDescLow: 'Вы точно назвали искажение. Одной проверки фактов обычно достаточно для ясности.',
      verdictDescMid: 'Несколько искажений усиливают друг друга. Отделите факты от догадок.',
      verdictDescHigh: 'Активны сразу несколько жестких циклов. Сначала замедлите дыхание, затем проверьте одну мысль.',
      bridgeStressTitle: 'Полный тест стресса', bridgeStressDesc: 'Оцените физическую и когнитивную нагрузку с планом на 7 дней.',
      bridgeEmotionTitle: 'План регуляции эмоций', bridgeEmotionDesc: '5-шаговый скрипт по модели Джеймса Гросса.',
      bridgeRsdTitle: 'Аудит чувствительности к отказу (RSD)', bridgeRsdDesc: 'Проверьте триггеры и пройдите 90-секундную паузу.',
      stickyTitle: 'Проверьте базовый уровень стресса', stickySub: 'Оценка напряжения за 2 минуты', stickyBtn: 'Тест стресса →',
      privacy: 'Конфиденциальность', terms: 'Условия',
      presets: ['Сообщение прочитано без ответа — точно на меня обиделись.', 'Я ошибся на встрече, значит вся работа провалена.', 'Я тревожусь перед выступлением, значит оно точно провалится.', 'Я обязан всегда быть идеальным; усталость — признак слабости.'],
      distortions: {
        all_nothing: ['Черно-белое мышление', 'Только полный успех или полный провал.', 'Какой частичный прогресс есть между 0% и 100%?', 'Одна ошибка не перечеркивает мой опыт и усилия.'],
        catastrophizing: ['Катастрофизация', 'Мгновенный прыжок к худшему сценарию.', 'Какой исход наиболее обычен и реалистичен?', 'Даже если будет неловко, я справлюсь шаг за шагом.'],
        mind_reading: ['Чтение мыслей', 'Уверенность в чужом негативе без доказательств.', 'Какие 2 нейтральные причины (занятость, усталость) возможны?', 'Молчание не доказывает злость; я опираюсь на факты.'],
        fortune_telling: ['Предсказание будущего', 'Восприятие тревожного прогноза как факта.', 'Когда реальность оказывалась мягче ожиданий?', 'Я не предсказываю будущее, а делаю следующий разумный шаг.'],
        emotional_reasoning: ['Эмоциональное обоснование', '«Мне тревожно, значит угроза реальна».', 'Эмоция — сигнал, а не доказательство: что говорят факты?', 'Тревога показывает напряжение нервной системы, а не неизбежный провал.'],
        should_statements: ['Долженствование', 'Жесткие правила, вызывающие вину и давление.', 'Как изменится давление, если заменить «обязан» на «хочу»?', 'Я стремлюсь к качеству и имею право учиться неидеально.'],
        labeling: ['Навешивание ярлыков', 'Оценка всей личности по одной ошибке.', 'Как описать конкретный поступок без осуждения себя целиком?', 'Ошибка — это эпизод, а не ярлык на всю личность.'],
        personalization: ['Персонализация', 'Обвинение себя в том, что вне вашего контроля.', 'Какие внешние факторы также повлияли на ситуацию?', 'Я спокойно беру свою долю ответственности, не чужую.'],
        mental_filter: ['Ментальный фильтр', 'Фокус на одном минусе при игнорировании плюсов.', 'Какие 2 спокойных момента отфильтровал стресс?', 'Минус можно исправить, не забывая о реальных сильных сторонах.'],
        discounting_positive: ['Обесценивание позитива', 'Списывание успехов на случайность.', 'Назвал бы я такой же успех друга простой удачей?', 'Мои усилия и регулярность реально повлияли на результат.']
      }
    },
    hi: {
      title: 'CBT संज्ञानात्मक विकृति रीफ़्रेमर | DopaBrain',
      metaDesc: 'निःशुल्क CBT टूल: 10 सामान्य सोच के जाल पहचानें और ब्राउज़र में निजी रूप से संतुलित विचार बनाएं।',
      skip: 'CBT रीफ़्रेमर पर जाएं', back: '← टूल कैटलॉग', langLabel: 'भाषा:',
      kicker: 'CBT विचार रिकॉर्ड और रीफ़्रेमर', heroTitle: 'संज्ञानात्मक विकृति रीफ़्रेमर',
      heroLead: '60 सेकंड में स्वचालित सोच के जाल पकड़ें। 10 CBT विकृतियों की पहचान करें और शांत, तथ्य-आधारित दृष्टिकोण बनाएं।',
      chip1: '10 CBT विकृतियाँ', chip2: 'सुकराती प्रश्न', chip3: '100% निजी (लोकल)',
      step1Badge: 'चरण 1 • विचार पकड़ें', step1Title: 'अभी मन में कौन-सा विचार बार-बार चल रहा है?',
      step1Sub: 'नीचे से एक उदाहरण चुनें या अपना निजी विचार लिखें।',
      inputLabel: 'आपका स्वचालित विचार (वैकल्पिक):', placeholder: 'उदाहरण: 3 घंटे से जवाब नहीं आया, वे ज़रूर मुझसे नाराज़ हैं।',
      step2Badge: 'चरण 2 • सोच के जाल पहचानें', step2Title: 'कौन-सी संज्ञानात्मक विकृतियाँ मेल खाती हैं?',
      step2Sub: '1 या अधिक पैटर्न चुनें। पैटर्न को नाम देने से तनाव घटता है।',
      buildBtn: 'संतुलित रीफ़्रेम बनाएं', resetBtn: 'रीसेट',
      resultBadge: 'चरण 3 • संतुलित दृष्टिकोण', meterTrapLabel: 'विकृति भार', meterClarityLabel: 'रीफ़्रेम तैयारी',
      capturedTitle: 'दर्ज स्वचालित विचार', socraticTitle: 'सुकराती वास्तविकता जाँच प्रश्न', reframeTitle: 'सुझाया गया संतुलित विचार',
      storyBtn: '1080×1920 स्टोरी कार्ड सेव करें (PNG)', copyBtn: 'रीफ़्रेम कॉपी करें', shareBtn: 'शेयर करें',
      copied: 'संतुलित विचार कॉपी हो गया!', cardSaved: '1080×1920 स्टोरी कार्ड डाउनलोड हो गया!',
      selectAtLeastOne: 'कृपया कम से कम 1 संज्ञानात्मक विकृति चुनें।',
      defaultThought: 'आज एक गलती हुई मतलब मेरी सारी मेहनत बेकार हो गई।',
      verdictLow: 'केंद्रित सोच का जाल', verdictMid: 'मिश्रित विचार चक्र', verdictHigh: 'उच्च संज्ञानात्मक दबाव',
      verdictDescLow: 'आपने एक स्पष्ट पैटर्न पहचाना है। एक शांत तथ्य जाँच संतुलन लौटा सकती है।',
      verdictDescMid: 'कई विकृतियाँ साथ काम कर रही हैं। तथ्य और अनुमान को अलग करें।',
      verdictDescHigh: 'कई कड़े विचार एक साथ चल रहे हैं। पहले गहरी साँस लें और एक-एक अनुमान परखें।',
      bridgeStressTitle: 'पूर्ण तनाव जाँच', bridgeStressDesc: 'शारीरिक, भावनात्मक और मानसिक तनाव मापें।',
      bridgeEmotionTitle: 'भावना नियंत्रण प्लानर', bridgeEmotionDesc: 'ग्रॉस के 5-चरणीय मॉडल से एक्शन स्क्रिप्ट बनाएं।',
      bridgeRsdTitle: 'RSD संवेदनशीलता जाँच', bridgeRsdDesc: 'अस्वीकृति संवेदनशीलता और 90-सेकंड शांत टाइमर।',
      stickyTitle: 'अपना तनाव स्तर जांचें', stickySub: '2 मिनट में तनाव और रिकवरी योजना देखें', stickyBtn: 'स्ट्रेस चेक →',
      privacy: 'गोपनीयता नीति', terms: 'नियम',
      presets: ['मैसेज पढ़ा पर जवाब नहीं दिया—वे मुझसे नाराज़ हैं।', 'मीटिंग में एक गलती से पूरा काम खराब हो गया।', 'मुझे घबराहट हो रही है, मतलब प्रस्तुति ज़रूर बिगड़ेगी।', 'मुझे हमेशा परफ़ेक्ट रहना चाहिए; थकना कमज़ोरी है।'],
      distortions: {
        all_nothing: ['सब या कुछ नहीं सोच', 'बीच के रास्ते के बिना पूर्ण सफलता या विफलता देखना।', '0% और 100% के बीच कौन-सी आंशिक प्रगति मौजूद है?', 'एक चूक मेरे पूरे कौशल और प्रयास को नहीं मिटाती।'],
        catastrophizing: ['आपदाकरण', 'सीधे सबसे बुरे परिणाम की कल्पना करना।', 'सबसे यथार्थवादी और सामान्य परिणाम क्या है?', 'असहज होने पर भी मैं कदम-दर-कदम संभाल सकता हूँ।'],
        mind_reading: ['मन पढ़ना', 'बिना सबूत दूसरों के नकारात्मक विचार मान लेना।', 'उनके व्यवहार के 2 तटस्थ कारण (व्यस्त, थका) क्या हो सकते हैं?', 'चुप्पी नाराज़गी का सबूत नहीं है; मैं तथ्यों पर चलूँगा।'],
        fortune_telling: ['भविष्यवाणी त्रुटि', 'नकारात्मक अनुमान को पक्का सच मान लेना।', 'तैयारी करने पर परिणाम कब उम्मीद से बेहतर रहे हैं?', 'मैं भविष्य नहीं जानता; अभी केवल अगला सही कदम उठाना है।'],
        emotional_reasoning: ['भावनात्मक तर्क', '“बुरा लग रहा है इसलिए कुछ बुरा सच है” मानना।', 'भावनाएँ संकेत हैं, सबूत नहीं—तथ्य क्या कहते हैं?', 'चिंता सतर्कता का संकेत है, विफलता की गारंटी नहीं।'],
        should_statements: ['“चाहिए” नियम', 'कठोर नियम जो अपराधबोध और दबाव बढ़ाते हैं।', '“ज़रूर करना है” को “चाहता हूँ” बदलने से क्या अंतर आता है?', 'मैं अच्छा करना चाहता हूँ और सीखते हुए आगे बढ़ सकता हूँ।'],
        labeling: ['लेबल लगाना', 'एक गलती से पूरे व्यक्तित्व को आँकना।', 'पूरे स्वयं पर हमला किए बिना इस घटना को कैसे कहें?', 'गलती एक पल की घटना है, मेरी स्थायी पहचान नहीं।'],
        personalization: ['व्यक्तिगत दोषारोपण', 'नियंत्रण से बाहर की बातों का दोष खुद पर लेना।', 'इसमें कौन-से बाहरी कारक भी शामिल थे?', 'मैं केवल अपना हिस्सा शांत भाव से संभालता हूँ।'],
        mental_filter: ['मानसिक फ़िल्टर', 'अच्छी बातें अनदेखी कर एक कमी पर अटकना।', 'कौन-सी 2 बातें ठीक रहीं जिन्हें तनाव ने छिपा दिया?', 'सुधार के साथ मेरी वास्तविक ताकत और प्रगति भी मौजूद है।'],
        discounting_positive: ['सकारात्मक को नकारना', 'सफलता को केवल किस्मत कहकर खारिज करना।', 'क्या किसी मित्र की यही उपलब्धि मैं केवल किस्मत कहता?', 'जो सफल हुआ उसमें मेरे निरंतर प्रयास का योगदान है।']
      }
    },
    id: {
      title: 'Reframer Distorsi Kognitif CBT | DopaBrain',
      metaDesc: 'Alat CBT interaktif gratis untuk mengenali 10 distorsi kognitif dan membangun pikiran seimbang secara privat di browser.',
      skip: 'Lanjut ke Reframer CBT', back: '← Katalog Alat', langLabel: 'Bahasa:',
      kicker: 'CATATAN PIKIRAN CBT', heroTitle: 'Reframer Distorsi Kognitif',
      heroLead: 'Tangkap jebakan pikiran otomatis dalam 60 detik. Kenali 10 distorsi kognitif Beck & Burns lalu susun perspektif seimbang secara lokal.',
      chip1: '10 Distorsi CBT', chip2: 'Pertanyaan Sokrates', chip3: '100% Privat (Lokal)',
      step1Badge: 'LANGKAH 1 • TANGKAP PIKIRAN', step1Title: 'Pikiran otomatis apa yang terus berputar sekarang?',
      step1Sub: 'Pilih contoh umum atau tulis sendiri secara privat di browser ini.',
      inputLabel: 'Pikiran otomatis Anda (opsional):', placeholder: 'Contoh: Tidak membalas 3 jam berarti mereka pasti marah padaku.',
      step2Badge: 'LANGKAH 2 • KENALI JEBAKAN PIKIRAN', step2Title: 'Distorsi kognitif mana yang cocok?',
      step2Sub: 'Pilih 1 atau lebih pola. Menamai pola membantu meredakan tekanan emosi.',
      buildBtn: 'Buat Reframe Seimbang', resetBtn: 'Reset',
      resultBadge: 'LANGKAH 3 • RANCANGAN PERSPEKTIF', meterTrapLabel: 'Beban Distorsi', meterClarityLabel: 'Kesiapan Reframe',
      capturedTitle: 'Pikiran yang Ditangkap', socraticTitle: 'Pertanyaan Uji Realitas Sokrates', reframeTitle: 'Saran Perspektif Seimbang',
      storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin Reframe', shareBtn: 'Bagikan',
      copied: 'Reframe disalin ke papan klip!', cardSaved: 'Kartu 1080×1920 berhasil diunduh!',
      selectAtLeastOne: 'Pilih minimal 1 distorsi kognitif.',
      defaultThought: 'Satu kesalahan hari ini berarti semua usahaku hancur.',
      verdictLow: 'Jebakan Pikiran Terfokus', verdictMid: 'Spiral Otomatis Berlapis', verdictHigh: 'Beban Kognitif Tinggi',
      verdictDescLow: 'Anda menemukan satu bias yang jelas. Satu cek fakta sudah membantu menenangkan pikiran.',
      verdictDescMid: 'Beberapa distorsi saling menguatkan. Pisahkan fakta dari asumsi.',
      verdictDescHigh: 'Beberapa pola kaku aktif bersamaan. Tenangkan napas dulu lalu uji satu per satu.',
      bridgeStressTitle: 'Cek Stres Lengkap', bridgeStressDesc: 'Ukur stres fisik, emosi & kognitif dengan rencana 7 hari.',
      bridgeEmotionTitle: 'Perencana Regulasi Emosi', bridgeEmotionDesc: 'Ubah lonjakan emosi menjadi langkah Model Gross 5 tahap.',
      bridgeRsdTitle: 'Audit Sensitivitas RSD', bridgeRsdDesc: 'Cek pemicu penolakan dengan timer pendinginan 90 detik.',
      stickyTitle: 'Cek tingkat stres dasar Anda', stickySub: 'Petakan ketegangan fisik & mental dalam 2 menit', stickyBtn: 'Cek Stres →',
      privacy: 'Kebijakan Privasi', terms: 'Ketentuan',
      presets: ['Pesan dibaca tapi tak dibalas—pasti mereka kesal padaku.', 'Satu kesalahan di rapat membuat seluruh kinerjaku gagal.', 'Aku merasa cemas, berarti presentasinya pasti kacau.', 'Aku harus selalu tenang dan sempurna; goyah berarti lemah.'],
      distortions: {
        all_nothing: ['Pola Pikir Hitam-Putih', 'Hanya melihat sukses total atau gagal total.', 'Kemajuan parsial apa yang ada antara 0% dan 100%?', 'Satu kekeliruan tidak menghapus usaha dan kemampuan yang sudah kubangun.'],
        catastrophizing: ['Katastrofisasi', 'Langsung melompat ke skenario bencana terburuk.', 'Apa hasil paling wajar dan realistis?', 'Meski tidak nyaman, aku bisa beradaptasi selangkah demi selangkah.'],
        mind_reading: ['Membaca Pikiran', 'Mengasumsikan penilaian negatif orang lain tanpa bukti.', 'Apa 2 alasan netral (sibuk, lelah) yang mungkin terjadi?', 'Diam bukan bukti marah; aku bertindak berdasarkan fakta.'],
        fortune_telling: ['Meramal Masa Depan', 'Menganggap prediksi negatif sebagai kepastian.', 'Kapan hasil ternyata lebih baik dari kekhawatiranku?', 'Aku tidak bisa meramal masa depan; fokus pada langkah konstruktif berikutnya.'],
        emotional_reasoning: ['Penalaran Emosional', 'Mengira perasaan buruk berarti kenyataan pasti buruk.', 'Emosi adalah sinyal, bukan bukti—apa fakta objektifnya?', 'Cemas menandakan sistem saraf waspada, bukan kegagalan pasti.'],
        should_statements: ['Aturan "Harus"', 'Tuntutan kaku yang memicu rasa bersalah.', 'Jika "harus" diganti "ingin", bagaimana tekanan berubah?', 'Aku ingin melakukan yang terbaik sambil tetap boleh belajar secara bertahap.'],
        labeling: ['Memberi Label', 'Menilai seluruh diri dari satu kesalahan.', 'Bagaimana menjelaskan kejadian ini tanpa menyerang diriku?', 'Kesalahan adalah peristiwa sesaat, bukan label permanen diriku.'],
        personalization: ['Personalisasi', 'Menyalahkan diri atas hal di luar kendali.', 'Faktor luar apa lagi yang ikut memengaruhi situasi ini?', 'Aku mengambil bagianku dengan tenang tanpa memikul hal di luar kendaliku.'],
        mental_filter: ['Filter Mental', 'Hanya fokus pada satu kekurangan.', 'Apa 2 hal stabil yang terlewat oleh filter stresku?', 'Kekurangan ini bisa diperbaiki berdampingan dengan kemajuan nyataku.'],
        discounting_positive: ['Meremehkan Hal Positif', 'Menganggap keberhasilan sekadar kebetulan.', 'Apakah aku akan menyebut pencapaian teman sebagai kebetulan semata?', 'Usaha konsistenku berperan nyata pada hal yang berjalan baik.']
      }
    },
    tr: {
      title: 'BDT Bilişsel Çarpıtma Yeniden Çerçeveleyici | DopaBrain',
      metaDesc: 'Ücretsiz BDT aracıyla 10 bilişsel çarpıtmayı fark edin ve tarayıcınızda gizlice dengeli düşünceler oluşturun.',
      skip: 'BDT Aracına Geç', back: '← Araç Kataloğu', langLabel: 'Dil:',
      kicker: 'BDT DÜŞÜNCE KAYDI', heroTitle: 'Bilişsel Çarpıtma Yeniden Çerçeveleyici',
      heroLead: '60 saniyede otomatik düşünce tuzaklarını yakalayın. Beck ve Burns’ün 10 bilişsel çarpıtmasını seçin ve dengeli bir bakış açısı oluşturun.',
      chip1: '10 BDT Çarpıtması', chip2: 'Sokratik Sorular', chip3: '%100 Gizli (Yerel)',
      step1Badge: 'ADIM 1 • DÜŞÜNCEYİ YAKALA', step1Title: 'Şu an zihninizde hangi otomatik düşünce dönüyor?',
      step1Sub: 'Bir örnek seçin veya kendi düşüncenizi gizlice yazın.',
      inputLabel: 'Otomatik düşünceniz (isteğe bağlı):', placeholder: 'Örn: 3 saattir cevap vermedi, kesin bana kızgın.',
      step2Badge: 'ADIM 2 • TUZAKLARI FARK ET', step2Title: 'Hangi bilişsel çarpıtmalar uyuyor?',
      step2Sub: '1 veya daha fazla kalıp seçin. Adlandırmak duygusal baskıyı azaltır.',
      buildBtn: 'Dengeli Yeniden Çerçeve Oluştur', resetBtn: 'Sıfırla',
      resultBadge: 'ADIM 3 • DENGELİ BAKIŞ AÇISI', meterTrapLabel: 'Çarpıtma Yükü', meterClarityLabel: 'Yeniden Çerçeve Hazırlığı',
      capturedTitle: 'Yakalanan Düşünce', socraticTitle: 'Sokratik Gerçeklik Soruları', reframeTitle: 'Önerilen Dengeli Düşünce',
      storyBtn: '1080×1920 Hikaye Kartı Kaydet (PNG)', copyBtn: 'Kopyala', shareBtn: 'Paylaş',
      copied: 'Dengeli düşünce kopyalandı!', cardSaved: '1080×1920 Hikaye Kartı indirildi!',
      selectAtLeastOne: 'Lütfen en az 1 bilişsel çarpıtma seçin.',
      defaultThought: 'Bugün tek bir hata yapmam tüm emeğimin boşa gittiği anlamına geliyor.',
      verdictLow: 'Odaklı Düşünce Tuzağı', verdictMid: 'Katmanlı Otomatik Döngü', verdictHigh: 'Yüksek Bilişsel Aşırı Yük',
      verdictDescLow: 'Net bir düşünce kalıbını yakaladınız. Kısa bir gerçeklik kontrolü dengeyi geri getirir.',
      verdictDescMid: 'Birden fazla çarpıtma birbirini besliyor. Gerçekleri varsayımlardan ayırın.',
      verdictDescHigh: 'Birkaç katı döngü birlikte çalışıyor. Önce nefesinizi yavaşlatın, sonra tek tek test edin.',
      bridgeStressTitle: 'Tam Stres Testi', bridgeStressDesc: 'Fiziksel, duygusal ve bilişsel stres yükünü ölçün.',
      bridgeEmotionTitle: 'Duygu Düzenleme Planlayıcı', bridgeEmotionDesc: 'Gross 5 aşamalı modeliyle eylem planı oluşturun.',
      bridgeRsdTitle: 'RSD Duyarlılık Denetimi', bridgeRsdDesc: 'Reddedilme tetikleyicileri ve 90 saniyelik sakinleşme.',
      stickyTitle: 'Temel stres yükünüzü ölçün', stickySub: '2 dakikada zihinsel ve fiziksel gerilimi görün', stickyBtn: 'Stres Testi →',
      privacy: 'Gizlilik Politikası', terms: 'Koşullar',
      presets: ['Mesajımı gördü ama yazmadı—kesin bana kızdı.', 'Toplantıda hata yaptım, tüm performansım başarısız.', 'Sunum için kaygılıyım, demek ki kesin kötü geçecek.', 'Her zaman sakin ve kusursuz olmalıyım; zorlanmak zayıflıktır.'],
      distortions: {
        all_nothing: ['Ya Hep Ya Hiç', 'Ara ton olmadan tam başarı ya da tam başarısızlık görmek.', '%0 ile %100 arasında hangi kısmi ilerleme var?', 'Tek bir aksaklık biriktirdiğim beceri ve emeği silmez.'],
        catastrophizing: ['Felaketleştirme', 'Doğrudan en kötü senaryoya atlamak.', 'En sıradan ve gerçekçi sonuç nedir?', 'Rahatsız edici olsa bile adım adım uyum sağlayabilirim.'],
        mind_reading: ['Zihin Okuma', 'Kanıtsız biçimde başkalarının olumsuz düşündüğünü varsaymak.', 'Davranışı açıklayabilecek 2 nötr neden (meşgul, yorgun) nedir?', 'Sessizlik öfke kanıtı değildir; varsayım yerine gerçeğe bakarım.'],
        fortune_telling: ['Falcılık', 'Olumsuz bir tahmini kesin gerçek saymak.', 'Hazırlandığımda sonuçların beklenenden iyi olduğu zamanlar neler?', 'Geleceği bilemem; sadece şu anki yapıcı adıma odaklanabilirim.'],
        emotional_reasoning: ['Duygusal Akıl Yürütme', '“Kötü hissediyorum, o halde kötü bir şey doğru” demek.', 'Duygular sinyaldir, kanıt değil—nesnel gerçekler ne diyor?', 'Kaygı sinir sisteminin uyarısıdır, kesin başarısızlık değildir.'],
        should_statements: ['“-meli / -malı” Kuralları', 'Suçluluk ve baskı yaratan katı iç kurallar.', '“Zorundayım” yerine “tercih ediyorum” dersem ne değişir?', 'İyi iş çıkarmak isterim ama kusursuz olmadan da öğrenebilirim.'],
        labeling: ['Etiketleme', 'Tek hatayla tüm benliği tanımlamak.', 'Kendime saldırmadan yalnızca bu olayı nasıl tarif ederim?', 'Hata geçici bir olaydır, kalıcı kimlik etiketim değildir.'],
        personalization: ['Kişiselleştirme', 'Kontrol dışı olayları tamamen üstlenmek.', 'Bu durumda hangi dış etkenler de rol oynadı?', 'Kendi payımı sakince alır, kontrolüm dışındakini bırakırım.'],
        mental_filter: ['Zihinsel Filtre', 'Tek bir kusura odaklanıp olumluları yok saymak.', 'Stresimin gizlediği yolunda giden 2 şey nedir?', 'Bu detay geliştirilebilir ama gerçek güçlerim de yerinde duruyor.'],
        discounting_positive: ['Olumluyu Küçümseme', 'Başarıları yalnızca şans diye silmek.', 'Yakın bir arkadaşım aynı şeyi başarsa sadece şans der miydim?', 'İstikrarlı emeğim yolunda giden sonuçlara katkı sağladı.']
      }
    }
  };

  Object.keys(EXTRA).forEach(function (k) { T[k] = EXTRA[k]; });

  var currentLang = 'en';
  var selectedIds = {};
  var hasCompletedOnce = false;

  function detectLang() {
    try {
      var p = new URLSearchParams(window.location.search).get('lang');
      if (p && SUPPORTED.indexOf(p.toLowerCase()) !== -1) return p.toLowerCase();
    } catch (e) {}
    return 'en';
  }

  function dict(lang) {
    return T[lang] || T.en;
  }

  function sendSafeEvent(name) {
    if (typeof window.gtag !== 'function') return;
    try {
      window.gtag('event', name, {
        event_category: 'engagement',
        tool_slug: 'cognitive-distortion-reframer',
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
    window.setTimeout(function () {
      if (el && el.parentNode) el.remove();
    }, 2600);
  }

  function renderPresets() {
    var d = dict(currentLang);
    var grid = document.getElementById('presetGrid');
    var input = document.getElementById('thoughtInput');
    if (!grid) return;
    grid.innerHTML = '';
    (d.presets || T.en.presets).forEach(function (text) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'preset-btn';
      btn.textContent = text;
      btn.addEventListener('click', function () {
        if (input) input.value = text;
        grid.querySelectorAll('.preset-btn').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        saveState();
      });
      grid.appendChild(btn);
    });
  }

  function renderDistortions() {
    var d = dict(currentLang);
    var grid = document.getElementById('distortionGrid');
    if (!grid) return;
    grid.innerHTML = '';
    DISTORTIONS.forEach(function (item) {
      var info = (d.distortions && d.distortions[item.id]) || T.en.distortions[item.id];
      var isOn = Boolean(selectedIds[item.id]);
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'toggle-card' + (isOn ? ' is-selected' : '');
      btn.setAttribute('data-distortion', item.id);
      btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');

      var title = document.createElement('span');
      title.className = 'toggle-card-title';
      title.textContent = item.icon + ' ' + info[0];

      var desc = document.createElement('span');
      desc.className = 'toggle-card-desc';
      desc.textContent = info[1];

      btn.appendChild(title);
      btn.appendChild(desc);
      btn.addEventListener('click', function () {
        selectedIds[item.id] = !selectedIds[item.id];
        btn.classList.toggle('is-selected', Boolean(selectedIds[item.id]));
        btn.setAttribute('aria-pressed', selectedIds[item.id] ? 'true' : 'false');
        saveState();
      });
      grid.appendChild(btn);
    });
  }

  function updateLinks() {
    var lang = currentLang;
    var back = document.getElementById('backLink');
    if (back) back.setAttribute('href', '/portal/tools/?lang=' + lang);
    var links = [
      ['bridgeStress', '/stress-check/?lang=' + lang + '&source=cbt_reframer_bridge'],
      ['bridgeEmotion', '/portal/tools/emotion-regulation-planner.html?lang=' + lang + '&source=cbt_reframer_bridge'],
      ['bridgeRsd', '/portal/tools/rsd-coping-audit.html?lang=' + lang + '&source=cbt_reframer_bridge']
    ];
    links.forEach(function (pair) {
      var el = document.getElementById(pair[0]);
      if (el) el.setAttribute('href', pair[1]);
    });
    var sticky = document.querySelector('.revenue-sticky-cta');
    if (sticky) sticky.setAttribute('href', '/stress-check/?lang=' + lang + '&source=cbt_reframer_sticky');
  }

  function applyLanguage(lang) {
    currentLang = SUPPORTED.indexOf(lang) !== -1 ? lang : 'en';
    document.documentElement.lang = currentLang;
    var d = dict(currentLang);
    document.title = d.title;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', d.metaDesc);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (d[key] && typeof d[key] === 'string') {
        if (el.tagName === 'META') el.setAttribute('content', d[key]);
        else el.textContent = d[key];
      }
    });

    var input = document.getElementById('thoughtInput');
    if (input) input.placeholder = d.placeholder;

    var sel = document.getElementById('langSelect');
    if (sel) sel.value = currentLang;

    renderPresets();
    renderDistortions();
    updateLinks();

    var resCard = document.getElementById('resultCard');
    if (resCard && !resCard.hidden) {
      buildReframe(false);
    }
  }

  function activeDistortionList() {
    return DISTORTIONS.map(function (x) { return x.id; }).filter(function (id) { return Boolean(selectedIds[id]); });
  }

  function buildReframe(isUserAction) {
    var d = dict(currentLang);
    var active = activeDistortionList();
    if (active.length === 0) {
      if (isUserAction) showToast(d.selectAtLeastOne);
      return;
    }

    var input = document.getElementById('thoughtInput');
    var rawThought = (input && input.value.trim()) ? input.value.trim() : d.defaultThought;

    var trapPct = Math.min(100, Math.round((active.length / 5) * 100));
    var clarityPct = Math.min(98, 62 + Math.min(active.length, 4) * 9);

    var verdictTitle = active.length === 1 ? d.verdictLow : (active.length <= 3 ? d.verdictMid : d.verdictHigh);
    var verdictDesc = active.length === 1 ? d.verdictDescLow : (active.length <= 3 ? d.verdictDescMid : d.verdictDescHigh);

    document.getElementById('verdictTitle').textContent = verdictTitle;
    document.getElementById('verdictDesc').textContent = verdictDesc;
    document.getElementById('trapPctText').textContent = trapPct + '%';
    document.getElementById('trapBar').style.width = trapPct + '%';
    document.getElementById('clarityPctText').textContent = clarityPct + '%';
    document.getElementById('clarityBar').style.width = clarityPct + '%';

    // XSS-safe: textContent only
    document.getElementById('capturedThought').textContent = rawThought;

    var listEl = document.getElementById('socraticList');
    listEl.innerHTML = '';
    var reframes = [];
    active.forEach(function (id) {
      var info = (d.distortions && d.distortions[id]) || T.en.distortions[id];
      var li = document.createElement('li');
      li.textContent = info[0] + ': ' + info[2];
      listEl.appendChild(li);
      reframes.push(info[3]);
    });

    document.getElementById('reframeOutput').textContent = reframes.slice(0, 3).join(' ');

    var resCard = document.getElementById('resultCard');
    resCard.hidden = false;
    if (isUserAction) {
      resCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (!hasCompletedOnce) {
        hasCompletedOnce = true;
        sendSafeEvent('cbt_reframer_complete');
      }
    }
    saveState(true);
  }

  function saveState(completed) {
    try {
      var input = document.getElementById('thoughtInput');
      var payload = {
        thought: input ? input.value.slice(0, 280) : '',
        selected: activeDistortionList(),
        completed: Boolean(completed || (document.getElementById('resultCard') && !document.getElementById('resultCard').hidden))
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {}
  }

  function restoreState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed.thought === 'string') {
        var input = document.getElementById('thoughtInput');
        if (input) input.value = parsed.thought;
      }
      if (parsed && Array.isArray(parsed.selected)) {
        selectedIds = {};
        parsed.selected.forEach(function (id) { selectedIds[id] = true; });
      }
      renderDistortions();
      if (parsed && parsed.completed && activeDistortionList().length > 0) {
        buildReframe(false);
      }
    } catch (e) {}
  }

  function resetAll() {
    selectedIds = {};
    var input = document.getElementById('thoughtInput');
    if (input) input.value = '';
    var resCard = document.getElementById('resultCard');
    if (resCard) resCard.hidden = true;
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    renderDistortions();
    document.querySelectorAll('.preset-btn').forEach(function (b) { b.classList.remove('active'); });
    sendSafeEvent('cbt_reframer_reset');
  }

  function copyReframe() {
    var d = dict(currentLang);
    var out = document.getElementById('reframeOutput')?.textContent || '';
    var text = [
      '[' + d.heroTitle + ']',
      out,
      'https://dopabrain.com/portal/tools/cognitive-distortion-reframer.html?lang=' + currentLang
    ].join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { showToast(d.copied); }).catch(function () {});
    } else {
      showToast(d.copied);
    }
  }

  function shareTool() {
    var d = dict(currentLang);
    var url = 'https://dopabrain.com/portal/tools/cognitive-distortion-reframer.html?lang=' + currentLang;
    if (navigator.share) {
      navigator.share({ title: d.heroTitle, text: d.heroLead, url: url }).catch(function () {});
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { showToast(d.copied); }).catch(function () {});
    }
  }

  function downloadCard() {
    var d = dict(currentLang);
    if (!window.DopaBrainStoryCard) return;
    var active = activeDistortionList();
    var trapPct = Math.min(100, Math.round((active.length / 5) * 100));
    var clarityPct = Math.min(98, 62 + Math.min(active.length, 4) * 9);
    var ok = window.DopaBrainStoryCard.downloadStoryCard({
      slug: 'cognitive-distortion-reframer',
      badge: d.kicker,
      emoji: '🧠',
      toolName: d.heroTitle,
      headline: document.getElementById('verdictTitle')?.textContent || d.verdictLow,
      subtitle: document.getElementById('verdictDesc')?.textContent || '',
      accent: '#6366f1',
      accent2: '#06b6d4',
      metrics: [
        { label: d.meterTrapLabel, pct: trapPct, color: '#818cf8' },
        { label: d.meterClarityLabel, pct: clarityPct, color: '#22d3ee' }
      ],
      takeawayLabel: d.reframeTitle,
      takeaway: document.getElementById('reframeOutput')?.textContent || '',
      footerUrl: 'dopabrain.com/portal/tools/cognitive-distortion-reframer.html'
    });
    if (ok) showToast(d.cardSaved);
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
    sendSafeEvent('cbt_reframer_view');

    var sel = document.getElementById('langSelect');
    if (sel) {
      sel.addEventListener('change', function (e) {
        var next = e.target.value;
        try {
          var u = new URL(window.location.href);
          u.searchParams.set('lang', next);
          window.history.replaceState({}, '', u.toString());
        } catch (err) {}
        applyLanguage(next);
      });
    }

    document.getElementById('buildBtn')?.addEventListener('click', function () { buildReframe(true); });
    document.getElementById('resetBtn')?.addEventListener('click', resetAll);
    document.getElementById('copyBtn')?.addEventListener('click', copyReframe);
    document.getElementById('shareBtn')?.addEventListener('click', shareTool);
    document.getElementById('storyBtn')?.addEventListener('click', downloadCard);
  });
})();
