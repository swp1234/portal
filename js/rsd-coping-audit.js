/**
 * DopaBrain Rejection Sensitivity (RSD) Audit & 90-Second Somatic Cool-Down
 * 12-language localization, 4-axis profile, interactive 90s timer, 1080x1920 story card, zero private telemetry.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'rsd_coping_audit_v1';
  var SUPPORTED = ['en', 'ko', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
  var AXES = ['radar', 'somatic', 'rumination', 'fawn', 'radar', 'somatic', 'rumination', 'fawn'];

  var T = {
    en: {
      title: 'Rejection Sensitivity (RSD) Audit & 90s Reset Protocol | DopaBrain',
      metaDesc: 'Free 12-language Rejection Sensitivity (RSD) self-reflection audit with a 4-axis trigger profile, 90-second somatic cool-down timer, and calm reply scripts.',
      skip: 'Skip to RSD Audit', back: '← Tools Catalog', langLabel: 'Language:',
      kicker: 'REJECTION SENSITIVITY SELF-AUDIT', heroTitle: 'RSD Trigger Audit & 90s Cool-Down',
      heroLead: 'Does a short text, mild feedback, or delayed reply feel like an instant emotional shockwave? Map your 4 rejection-sensitivity axes and practice a 90-second somatic reset.',
      chip1: '8 Real-Life Triggers', chip2: '90s Somatic Cool-Down', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • 4-AXIS TRIGGER CHECK', step1Title: 'Rate how strongly each moment hits you',
      step1Sub: 'Select your typical response intensity over the past month. Every calculation runs privately in your browser.',
      calcBtn: 'Map My RSD Profile', resetBtn: 'Reset',
      resultBadge: 'STEP 2 • YOUR RSD PROFILE & DE-ESCALATION PROTOCOL',
      axisRadar: 'Social Threat Radar', axisSomatic: 'Somatic Emotional Surge', axisRumination: 'Rumination Loop', axisFawn: 'Avoidance / Fawning',
      opts: ['Rarely (0)', 'Mild (1)', 'Strong (2)', 'Intense (3)'],
      qs: [
        '1. Ambiguous Tone: A brief message like "OK" or a neutral expression makes me instantly wonder if they are upset with me.',
        '2. Somatic Drop: Constructive criticism triggers a sudden physical jolt in my chest, throat, or stomach.',
        '3. Replay Loop: After a social misunderstanding, I replay every word for hours trying to decode hidden disapproval.',
        '4. People-Pleasing Override: I say yes to draining requests just to avoid disappointing someone.',
        '5. Delayed Replies: When someone takes longer than usual to respond, my mind jumps straight to rejection.',
        '6. Flash Defensive Urge: Perceived slights spark an immediate urge to either over-explain or shut down completely.',
        '7. Shame Spiral: Even a minor correction feels like proof that I am fundamentally flawed.',
        '8. Preemptive Withdrawal: I pull away or stop trying before others have the chance to reject me.'
      ],
      timerBadge: '90-SECOND NEUROCHEMICAL WAVE RESET',
      timerReady: 'Before sending an urgent text or withdrawing, ride out the 90-second autonomic surge with slow exhales.',
      timerStart: 'Start 90s Cool-Down', timerPause: 'Pause Timer', timerReset: 'Reset Timer',
      timerPhases: [
        'Phase 1 (90–61s): Drop your shoulders, unclench your jaw, and take two slow inhales followed by a long sigh.',
        'Phase 2 (60–31s): Name 1 observable fact ("They sent a brief text") vs 1 story ("They must hate me").',
        'Phase 3 (30–1s): Feel the adrenaline peak fade. Choose one calm, curious response instead of urgent defense.'
      ],
      timerDone: '90 seconds complete! Notice how the sharpest urgency has softened before you decide your next step.',
      protocolTitle: 'Tailored De-Escalation Steps', scriptTitle: 'Calm Reality-Check Reply Script',
      storyBtn: 'Save 1080×1920 Story Card (PNG)', copyBtn: 'Copy Summary', shareBtn: 'Share Tool',
      copied: 'Summary copied to clipboard!', cardSaved: '1080×1920 Story Card downloaded!',
      verdicts: {
        low: ['Steady Social Anchor', 'Your rejection sensitivity stays mostly grounded. Occasional stings pass without hijacking your self-worth.', ['Keep separating tone from intent during stressful weeks.', 'Use direct clarifying questions when messages feel brief.', 'Protect restorative rest so emotional bandwidth stays high.'], '“Thanks for the note—quick check-in when you have a moment so I make sure we’re aligned.”'],
        mid: ['Alert Signal Sensitivity', 'You read social cues rapidly and feel criticism deeply, especially when tired or uncertain.', ['Run the 90-second timer before replying to ambiguous texts.', 'Write down 2 neutral explanations (busy, distracted) before assuming disapproval.', 'Set one small boundary this week without over-apologizing.'], '“I appreciate the feedback—let me take a minute to process it and come back with a clear next step.”'],
        high: ['High-Voltage RSD Sensitivity', 'Perceived rejection triggers a swift somatic wave, intense rumination, or urgent pull to fawn or withdraw.', ['Freeze outbound replies for 90 seconds—never negotiate mid-adrenaline wave.', 'Anchor in body sensation first (cold water or cyclic sigh), then test facts vs. mind-reading.', 'Share a simple expectation cue with trusted people so silence feels less threatening.'], '“I noticed my mind jumping to conclusions—are we good, or is there anything you’d like me to adjust when you’re free?”']
      },
      bridgeHspTitle: 'HSP Sensitivity Test', bridgeHspDesc: 'Explore Elaine Aron’s DOES sensitivity model across 5 sensory channels.',
      bridgeCbtTitle: 'CBT Distortion Reframer', bridgeCbtDesc: 'Challenge mind-reading and catastrophizing with Socratic questions.',
      bridgeAttachTitle: 'Attachment Trigger Decoder', bridgeAttachDesc: 'Turn relationship panic or withdrawal into secure boundary scripts.',
      stickyTitle: 'Explore your sensory sensitivity profile', stickySub: 'Take the free 12-language HSP DOES self-assessment', stickyBtn: 'HSP Test →',
      privacy: 'Privacy Policy', terms: 'Terms'
    },
    ko: {
      title: '거절 민감성(RSD) 자가점검 & 90초 진정 프로토콜 | DopaBrain',
      metaDesc: '무료 12개국어 거절 민감성(RSD) 4축 트리거 점검, 90초 신경계 진정 타이머 및 차분한 답장 스크립트.',
      skip: 'RSD 점검으로 이동', back: '← 도구 카탈로그', langLabel: '언어:',
      kicker: '거절 민감성(RSD) 자기점검', heroTitle: 'RSD 트리거 점검 & 90초 쿨다운',
      heroLead: '짧은 답장, 가벼운 피드백, 읽씹이 순간적인 감정 충격처럼 다가오나요? 4개 축으로 나의 반응 패턴을 확인하고 90초 신체 진정 루틴을 실천하세요.',
      chip1: '8가지 일상 트리거', chip2: '90초 신체 쿨다운', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 4축 트리거 강도 점검', step1Title: '각 순간이 나에게 얼마나 강하게 다가오나요?',
      step1Sub: '최근 한 달간의 평소 반응 강도를 선택하세요. 모든 계산은 브라우저 로컬에서 비공개로 처리됩니다.',
      calcBtn: '나의 RSD 프로필 분석', resetBtn: '초기화',
      resultBadge: '2단계 • 나의 RSD 프로필 & 진정 프로토콜',
      axisRadar: '사회적 위협 레이더', axisSomatic: '신체·감정 급등 반응', axisRumination: '반추 사고 루프', axisFawn: '회피 / 과잉 순응',
      opts: ['거의 없음 (0)', '약함 (1)', '강함 (2)', '매우 강함 (3)'],
      qs: [
        '1. 모호한 말투: "알겠어" 같은 짧은 답장이나 무표정을 보면 나에게 화가 났는지 즉시 신경이 쓰인다.',
        '2. 신체적 충격파: 가벼운 지적이나 피드백에도 가슴이 철렁하거나 속이 굳는 신체 반응이 온다.',
        '3. 대화 무한 재생: 어색한 순간이 지나간 뒤 몇 시간이고 말투와 표정을 되감으며 거절 신호를 찾는다.',
        '4. 과잉 배려(눈치): 상대가 실망할까 봐 무리한 부탁도 거절하지 못하고 수락해 버린다.',
        '5. 답장 지연 불안: 평소보다 연락이 늦어지면 내가 뭔가 잘못했을 거라는 생각이 먼저 든다.',
        '6. 즉각 방어 충동: 서운함이 느껴지면 장문으로 해명하거나 아예 벽을 치고 닫아버리고 싶다.',
        '7. 수치심 폭주: 작은 실수 지적도 "나는 근본적으로 부족해"라는 자기 비난으로 번진다.',
        '8. 선제적 거리두기: 상처받거나 거절당하기 전에 내가 먼저 관계를 멀리하거나 포기한다.'
      ],
      timerBadge: '90초 신경화학 파동 쿨다운 타이머',
      timerReady: '성급한 답장을 보내거나 잠수하기 전, 천천히 숨을 내쉬며 90초 급성 각성 파동을 흘려보내세요.',
      timerStart: '90초 쿨다운 시작', timerPause: '일시정지', timerReset: '타이머 리셋',
      timerPhases: [
        '1구간 (90~61초): 어깨 힘을 빼고 턱 긴장을 풀며 두 번 짧게 들이쉬고 길게 한숨 쉬듯 내쉬세요.',
        '2구간 (60~31초): 관찰된 사실 1가지("답장이 짧았다")와 머릿속 해석("나를 싫어한다")을 분리해 보세요.',
        '3구간 (30~1초): 아드레날린 파동이 가라앉는 감각을 느끼며 차분한 확인 문장을 선택하세요.'
      ],
      timerDone: '90초 완료! 가장 날카로웠던 감정 압박이 한결 누그러진 상태에서 다음 행동을 결정하세요.',
      protocolTitle: '맞춤 진정 단계', scriptTitle: '차분한 현실 확인 답장 스크립트',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)', copyBtn: '요약 복사', shareBtn: '도구 공유',
      copied: '요약이 클립보드에 복사되었습니다!', cardSaved: '1080×1920 스토리 카드가 저장되었습니다!',
      verdicts: {
        low: ['안정적 관계 균형형', '거절 민감성이 비교적 안정적으로 조절되고 있습니다. 일시적 서운함이 자존감 전체를 흔들지 않습니다.', ['피곤한 날에도 상대의 말투와 의도를 분리해 바라보세요.', '모호한 메시지는 추측 대신 짧은 확인 질문으로 해소하세요.', '충분한 휴식으로 정서적 여유를 유지하세요.'], '“메시지 고마워요! 시간 될 때 서로 방향만 짧게 맞춰보면 좋겠어요.”'],
        mid: ['민감 신호 포착형', '타인의 미세한 변화와 피드백을 빠르게 감지하며, 컨디션이 낮을 때 감정 소모가 커집니다.', ['모호한 메시지를 받으면 답장 전 90초 타이머를 먼저 켜세요.', '부정적 추측 전 중립적 이유(바쁨, 이동 중) 2가지를 적어보세요.', '이번 주 과도한 사과 없이 작은 경계선 1개를 연습해 보세요.'], '“피드백 고마워요. 잠깐 정리해 보고 다음 단계 의견 드릴게요.”'],
        high: ['고강도 RSD 민감 반응형', '사소한 거절 신호에도 즉각적인 신체 충격, 반추 루프, 과잉 순응 또는 선제적 회피가 강하게 작동합니다.', ['감정 파동 중 90초간 답장 전송을 멈추세요—급성 각성 상태에서는 대화하지 않습니다.', '찬물 세수나 긴 날숨으로 신체를 먼저 가라앉힌 뒤 사실과 독심술을 분리하세요.', '신뢰하는 사람과는 답장 지연에 대한 간단한 신호 약속을 정해두면 불안이 크게 줄어듭니다.'], '“내가 혼자 앞서 생각한 걸 수도 있는데, 괜찮은 거 맞지? 시간 될 때 편하게 알려줘.”']
      },
      bridgeHspTitle: 'HSP 민감성 테스트', bridgeHspDesc: '일레인 아론의 DOES 모델로 5대 감각 민감도를 측정하세요.',
      bridgeCbtTitle: 'CBT 인지 왜곡 리프레이머', bridgeCbtDesc: '독심술과 파국화를 소크라테스 질문으로 차분히 재구성하세요.',
      bridgeAttachTitle: '애착 트리거 & 안전 스크립트', bridgeAttachDesc: '관계 불안이나 회피 충동을 건강한 대화 문장으로 바꿔줍니다.',
      stickyTitle: '나의 감각 민감도(HSP) 확인하기', stickySub: '무료 12개국어 HSP DOES 자가진단 시작하기', stickyBtn: 'HSP 테스트 →',
      privacy: '개인정보처리방침', terms: '이용약관'
    },
    ja: {
      title: '拒絶感受性(RSD)チェック＆90秒クールダウン | DopaBrain',
      metaDesc: '無料12言語対応の拒絶感受性(RSD)セルフチェック。4軸トリガー分析、90秒クールダウンタイマー、落ち着いた返信スクリプト付き。',
      skip: 'RSDチェックへ', back: '← ツール一覧', langLabel: '言語:',
      kicker: '拒絶感受性(RSD)セルフ監査', heroTitle: 'RSDトリガー診断＆90秒リセット',
      heroLead: '短い返信や軽い指摘に瞬間的なショックを感じませんか？4つの軸で反応パターンを可視化し、90秒の身体クールダウンを実践できます。',
      chip1: '8つの日常トリガー', chip2: '90秒身体クールダウン', chip3: '100%ローカル非公開',
      step1Badge: 'STEP 1 • 4軸トリガー強度チェック', step1Title: '各場面がどれくらい強く響きますか？',
      step1Sub: '直近1か月の反応の強さを選んでください。計算はすべてブラウザ内で完結します。',
      calcBtn: 'RSDプロフィールを作成', resetBtn: 'リセット',
      resultBadge: 'STEP 2 • あなたのRSD傾向とクールダウン手順',
      axisRadar: '社会的脅威レーダー', axisSomatic: '身体・感情ショック波', axisRumination: '反芻ループ', axisFawn: '回避・過剰迎合',
      opts: ['ほぼない (0)', 'ややある (1)', '強い (2)', '非常に強い (3)'],
      qs: [
        '1. 曖昧な口調：「了解」など短い返信や無表情を見ると、怒らせたのではとすぐ不安になる。',
        '2. 身体の衝撃：軽い指摘でも胸や胃がギュッと締まる感覚が一瞬で走る。',
        '3. 反芻ループ：気まずい場面の後、何時間も言葉や表情を頭の中で再生してしまう。',
        '4. 過剰な気遣い：相手を失望させたくなくて、無理な頼みも断れず引き受けてしまう。',
        '5. 返信遅延の不安：いつもより返信が遅いだけで、嫌われたのではと結論づけてしまう。',
        '6. 防衛衝動：拒絶を感じると、長文で弁明するか急に心を閉ざしたくなる。',
        '7. 羞恥スパイラル：小さなミス指摘でも「自分は根本的にダメだ」と感じてしまう。',
        '8. 先回り回避：傷つく前に自分から距離を取ったり挑戦をやめたりする。'
      ],
      timerBadge: '90秒 神経化学ウェーブ・リセット',
      timerReady: '衝動的な返信や既読スルーの前に、長い呼気で90秒の感情の波をやり過ごしましょう。',
      timerStart: '90秒クールダウン開始', timerPause: '一時停止', timerReset: 'タイマーリセット',
      timerPhases: [
        'フェーズ1 (90–61秒)：肩と顎の力を抜き、2回吸って長く息を吐き出します。',
        'フェーズ2 (60–31秒)：事実（「返信が短かった」）と解釈（「嫌われた」）を言葉で分けます。',
        'フェーズ3 (30–1秒)：衝動が引く感覚を確かめ、落ち着いた確認メッセージを選びます。'
      ],
      timerDone: '90秒完了！最も強い焦りが和らいだ状態で次の一歩を選べます。',
      protocolTitle: 'おすすめクールダウン手順', scriptTitle: '落ち着いた確認返信スクリプト',
      storyBtn: '1080×1920 ストーリーカード保存 (PNG)', copyBtn: '要約をコピー', shareBtn: 'ツールを共有',
      copied: '要約をコピーしました！', cardSaved: '1080×1920 ストーリーカードを保存しました！',
      verdicts: {
        low: ['安定した対人バランス型', '拒絶への過敏さは穏やかに保たれています。一時的な違和感も自己価値を揺るがしにくい状態です。', ['忙しい週ほど口調と意図を切り分けて受け止めましょう。', '曖昧な連絡は推測せず短く確認すると安心です。', '休息を確保して心の余裕を維持しましょう。'], '「ご連絡ありがとうございます！お時間のある時に方向性だけ軽く確認できたら嬉しいです。」'],
        mid: ['繊細シグナル察知型', '相手の細かな変化や評価を素早く察知しやすく、疲れている時ほど反応が強まりやすい傾向です。', ['曖昧な返信を見たら、返す前に90秒タイマーを回しましょう。', '否定と決める前に中立的な理由（多忙・移動中）を2つ挙げます。', '今週は謝りすぎずに小さな境界線を1つ練習してみましょう。'], '「フィードバックありがとうございます。少し整理してから次の進め方を共有しますね。」'],
        high: ['高感度RSDリアクション型', 'わずかな拒絶サインで身体ショック、反芻、過剰迎合や先回り回避が同時に起きやすい状態です。', ['感情の波の最中は90秒間送信ボタンを押さないルールを作りましょう。', '冷水や長い呼気で体を先に落ち着かせ、事実と心の読みすぎを切り離します。', '信頼できる相手とは「忙しい時は短文になる」などの合図を共有すると安心です。'], '「少し考えすぎてしまったかも。お時間のある時で大丈夫なので、気になる点があれば教えてもらえますか？」']
      },
      bridgeHspTitle: 'HSP繊細さん診断', bridgeHspDesc: 'アーロン博士のDOESモデルで5つの感覚感度を診断。',
      bridgeCbtTitle: 'CBT認知の歪みリフレーマー', bridgeCbtDesc: '心の読みすぎや破局視をソクラテス質問で整えます。',
      bridgeAttachTitle: '愛着トリガー＆安心スクリプト', bridgeAttachDesc: '恋愛や対人の不安・回避衝動を安心対話へ変換します。',
      stickyTitle: 'HSP感覚の繊細さをチェック', stickySub: '無料12言語対応のHSP DOESセルフ診断へ', stickyBtn: 'HSP診断 →',
      privacy: 'プライバシーポリシー', terms: '利用規約'
    },
    zh: {
      title: '拒绝敏感 (RSD) 自测与 90 秒躯体降温协议 | DopaBrain',
      metaDesc: '免费 12 语言拒绝敏感 (RSD) 四维触发自测，内置 90 秒神经降温计时器与冷静回复脚本。',
      skip: '跳转到 RSD 自测', back: '← 工具目录', langLabel: '语言：',
      kicker: '拒绝敏感 (RSD) 自我审计', heroTitle: 'RSD 触发自测与 90 秒降温',
      heroLead: '一句简短回复、轻微反馈或已读不回是否让你瞬间感到情绪冲击？通过 4 个维度定位敏感模式并启动 90 秒躯体降温。',
      chip1: '8 个日常触发情境', chip2: '90 秒躯体降温', chip3: '100% 本地私密',
      step1Badge: '第 1 步 • 四维触发强度自测', step1Title: '评估以下时刻对你的冲击强度',
      step1Sub: '选择过去一个月你的常见反应强度，所有运算仅在浏览器本地完成。',
      calcBtn: '生成我的 RSD 画像', resetBtn: '重置',
      resultBadge: '第 2 步 • 你的 RSD 画像与降温协议',
      axisRadar: '社交威胁雷达', axisSomatic: '躯体情绪冲击', axisRumination: '反刍思绪循环', axisFawn: '回避 / 讨好反应',
      opts: ['几乎没有 (0)', '轻微 (1)', '较强 (2)', '非常强烈 (3)'],
      qs: [
        '1. 模糊语气：“好的”等简短回复或平静表情会让我立刻怀疑对方在生我的气。',
        '2. 躯体下沉感：哪怕是建设性批评，胸口、喉咙或胃部也会瞬间发紧。',
        '3. 反复回放：尴尬互动后会连续数小时回想每句话，试图寻找被否定的线索。',
        '4. 过度讨好：为了不让别人失望，我常勉强答应消耗精力的请求。',
        '5. 回复延迟焦虑：对方回复比平时慢，我脑中第一反应就是被冷落或拒绝。',
        '6. 瞬间防御冲动：感到被轻视时，立刻想长篇解释或直接彻底关闭沟通。',
        '7. 羞耻螺旋：一次微小纠正就会演变成“我根本不够好”的全面自我否定。',
        '8. 先发制人退缩：在别人可能拒绝我之前，我先主动疏远或放弃尝试。'
      ],
      timerBadge: '90 秒神经化学波动重置',
      timerReady: '在发出急切消息或突然退缩前，先用缓慢呼气度过 90 秒急性生理冲击波。',
      timerStart: '启动 90 秒降温', timerPause: '暂停计时', timerReset: '重置计时器',
      timerPhases: [
        '阶段 1 (90–61秒)：放松双肩与下颌，轻吸两口气后缓慢长呼。',
        '阶段 2 (60–31秒)：区分事实（“对方回复简短”）与脑补故事（“对方讨厌我”）。',
        '阶段 3 (30–1秒)：感受肾上腺素高峰回落，选择冷静好奇而非防御的回应。'
      ],
      timerDone: '90 秒完成！在最急迫的冲动缓和后，再决定你的下一步。',
      protocolTitle: '定制降温步骤', scriptTitle: '冷静事实核查回复脚本',
      storyBtn: '保存 1080×1920 分享卡片 (PNG)', copyBtn: '复制摘要', shareBtn: '分享工具',
      copied: '摘要已复制到剪贴板！', cardSaved: '1080×1920 分享卡片已下载！',
      verdicts: {
        low: ['稳健社交锚点型', '你的拒绝敏感度整体平稳，偶发的不适不会轻易动摇自我价值感。', ['高压周里继续区分语气与真实意图。', '信息模糊时用简短礼貌的确认替代猜测。', '保持规律休息，守住情绪缓冲空间。'], '“收到谢谢！有空时我们简短对齐一下下一步就好。”'],
        mid: ['敏锐信号雷达型', '你能快速捕捉人际微妙变化并深感批评冲击，尤其在疲惫或不确定时。', ['看到模糊消息先启动 90 秒计时器再回复。', '假设被否定前先写出 2 个中性原因（忙碌、开会）。', '本周练习不带过度道歉地设立一个小边界。'], '“谢谢反馈，我稍微消化一下再回复你清晰计划。”'],
        high: ['高能 RSD 敏感波动型', '微小拒绝信号容易触发强烈躯体反应、长时间反刍以及讨好或抽离冲动。', ['急性波动 90 秒内暂停发送消息——不在肾上腺素高峰期沟通。', '先用冷水或长呼气安抚身体，再区分事实与读心术。', '与信任的人约定忙碌简短回复信号，减少沉默带来的威胁感。'], '“我刚发现自己有点多想了——我们这边没问题吧？你方便时告诉我是否需要调整。”']
      },
      bridgeHspTitle: 'HSP 高敏感测试', bridgeHspDesc: '基于艾伦 DOES 模型全面评估 5 大感官敏感度。',
      bridgeCbtTitle: 'CBT 认知扭曲重构器', bridgeCbtDesc: '用苏格拉底式提问化解读心术与灾难化思维。',
      bridgeAttachTitle: '依恋触发与安全脚本', bridgeAttachDesc: '将关系焦虑或回避冲动转化为安全沟通语句。',
      stickyTitle: '探索你的高敏感 (HSP) 画像', stickySub: '免费 12 语言 HSP DOES 自我评估', stickyBtn: 'HSP 测试 →',
      privacy: '隐私政策', terms: '使用条款'
    }
  };

  // Native fallback pack for remaining 8 locales (es, pt, de, fr, ru, hi, id, tr)
  var EXTRA_LOC = {
    es: {
      title: 'Auditoría de Sensibilidad al Rechazo (RSD) y Pausa 90s | DopaBrain',
      metaDesc: 'Autoevaluación gratuita de RSD en 4 ejes con temporizador somático de 90 segundos y guiones calmados.',
      skip: 'Ir a auditoría RSD', back: '← Catálogo de herramientas', langLabel: 'Idioma:',
      kicker: 'AUDITORÍA DE SENSIBILIDAD AL RECHAZO', heroTitle: 'Auditoría RSD y Pausa de 90s',
      heroLead: '¿Un mensaje corto o una crítica leve se siente como un golpe emocional? Mide tus 4 ejes de sensibilidad al rechazo y practica un reinicio de 90 segundos.',
      chip1: '8 Disparadores Reales', chip2: 'Pausa Somática 90s', chip3: '100% Privado (Local)',
      step1Badge: 'PASO 1 • EVALUACIÓN EN 4 EJES', step1Title: '¿Con qué intensidad te impacta cada situación?',
      step1Sub: 'Elige tu nivel habitual durante el último mes. Todo se calcula localmente.',
      calcBtn: 'Ver Mi Perfil RSD', resetBtn: 'Reiniciar',
      resultBadge: 'PASO 2 • TU PERFIL RSD Y PROTOCOLO DE CALMA',
      axisRadar: 'Radar de Amenaza Social', axisSomatic: 'Oleada Somática', axisRumination: 'Bucle de Rumiación', axisFawn: 'Evitación / Complacencia',
      opts: ['Rara vez (0)', 'Leve (1)', 'Fuerte (2)', 'Intenso (3)'],
      timerBadge: 'REINICIO NEUROQUÍMICO DE 90 SEGUNDOS',
      timerReady: 'Antes de responder con urgencia o alejarte, deja pasar la oleada de 90 segundos respirando lento.',
      timerStart: 'Iniciar Pausa 90s', timerPause: 'Pausar', timerReset: 'Reiniciar',
      protocolTitle: 'Pasos de Desescalada Recomendados', scriptTitle: 'Guion de Respuesta Calmada',
      storyBtn: 'Guardar Tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar Resumen', shareBtn: 'Compartir',
      copied: '¡Resumen copiado!', cardSaved: '¡Tarjeta 1080×1920 descargada!',
      bridgeHspTitle: 'Test de Sensibilidad HSP', bridgeHspDesc: 'Explora el modelo DOES de Elaine Aron en 5 canales.',
      bridgeCbtTitle: 'Reencuadre CBT', bridgeCbtDesc: 'Desafía lectura de mente y catastrofismo con preguntas socráticas.',
      bridgeAttachTitle: 'Decodificador de Apego', bridgeAttachDesc: 'Convierte ansiedad o distancia en límites seguros.',
      stickyTitle: 'Explora tu perfil de sensibilidad HSP', stickySub: 'Realiza la evaluación gratuita HSP DOES', stickyBtn: 'Test HSP →',
      privacy: 'Privacidad', terms: 'Términos'
    },
    pt: {
      title: 'Auditoria de Sensibilidade à Rejeição (RSD) e Pausa 90s | DopaBrain',
      metaDesc: 'Autoavaliação gratuita de RSD em 4 eixos com cronômetro somático de 90 segundos e roteiros calmos.',
      skip: 'Ir para auditoria RSD', back: '← Catálogo de Ferramentas', langLabel: 'Idioma:',
      kicker: 'AUDITORIA DE SENSIBILIDADE À REJEIÇÃO', heroTitle: 'Auditoria RSD e Pausa de 90s',
      heroLead: 'Uma resposta curta ou crítica leve parece um choque emocional imediato? Mapeie 4 eixos de RSD e pratique o reset de 90 segundos.',
      chip1: '8 Gatilhos Reais', chip2: 'Reset Somático 90s', chip3: '100% Privado (Local)',
      step1Badge: 'PASSO 1 • CHECK DE 4 EIXOS', step1Title: 'Com que força cada momento atinge você?',
      step1Sub: 'Escolha sua intensidade típica no último mês. Tudo fica no seu navegador.',
      calcBtn: 'Mapear Meu Perfil RSD', resetBtn: 'Reiniciar',
      resultBadge: 'PASSO 2 • SEU PERFIL RSD E PROTOCOLO',
      axisRadar: 'Radar de Ameaça Social', axisSomatic: 'Onda Somática', axisRumination: 'Loop de Ruminação', axisFawn: 'Evitação / Agradar Demais',
      opts: ['Raramente (0)', 'Leve (1)', 'Forte (2)', 'Intenso (3)'],
      timerBadge: 'RESET NEUROQUÍMICO DE 90 SEGUNDOS',
      timerReady: 'Antes de responder no impulso ou se afastar, atravesse a onda de 90 segundos expirando devagar.',
      timerStart: 'Iniciar Pausa 90s', timerPause: 'Pausar', timerReset: 'Resetar',
      protocolTitle: 'Passos de Desescalada', scriptTitle: 'Roteiro de Resposta Calma',
      storyBtn: 'Salvar Cartão 1080×1920 (PNG)', copyBtn: 'Copiar Resumo', shareBtn: 'Compartilhar',
      copied: 'Resumo copiado!', cardSaved: 'Cartão 1080×1920 baixado!',
      bridgeHspTitle: 'Teste de Sensibilidade HSP', bridgeHspDesc: 'Explore o modelo DOES de Elaine Aron.',
      bridgeCbtTitle: 'Reenquadramento TCC', bridgeCbtDesc: 'Desafie leitura mental com perguntas socráticas.',
      bridgeAttachTitle: 'Decodificador de Apego', bridgeAttachDesc: 'Transforme gatilhos afetivos em scripts seguros.',
      stickyTitle: 'Explore seu perfil HSP', stickySub: 'Faça a autoavaliação gratuita HSP DOES', stickyBtn: 'Teste HSP →',
      privacy: 'Privacidade', terms: 'Termos'
    },
    de: {
      title: 'RSD-Sensitivitäts-Audit & 90-Sekunden-Reset | DopaBrain',
      metaDesc: 'Kostenloses RSD-Selbsteinschätzungs-Tool mit 4 Achsen, 90-Sekunden-Reset-Timer und ruhigen Antwort-Skripten.',
      skip: 'Zum RSD-Audit', back: '← Tool-Katalog', langLabel: 'Sprache:',
      kicker: 'ABLEHNUNGSSENSITIVITÄT (RSD) AUDIT', heroTitle: 'RSD-Trigger-Audit & 90s-Reset',
      heroLead: 'Fühlt sich eine kurze Nachricht oder milde Kritik wie ein Schock an? Erfasse 4 RSD-Achsen und nutze den 90-Sekunden-Reset.',
      chip1: '8 Alltags-Trigger', chip2: '90s-Reset-Timer', chip3: '100% Privat (Lokal)',
      step1Badge: 'SCHRITT 1 • 4-ACHSEN-CHECK', step1Title: 'Wie stark trifft dich jeder Moment?',
      step1Sub: 'Wähle deine typische Reaktion im letzten Monat. Alles bleibt lokal.',
      calcBtn: 'RSD-Profil berechnen', resetBtn: 'Zurücksetzen',
      resultBadge: 'SCHRITT 2 • DEIN RSD-PROFIL & RESET-PROTOKOLL',
      axisRadar: 'Soziales Gefahren-Radar', axisSomatic: 'Körperliche Welle', axisRumination: 'Grübelschleife', axisFawn: 'Rückzug / Überanpassung',
      opts: ['Selten (0)', 'Leicht (1)', 'Stark (2)', 'Sehr stark (3)'],
      timerBadge: '90-SEKUNDEN-WELLEN-RESET',
      timerReady: 'Bevor du impulsiv antwortest oder dich zurückziehst, atme 90 Sekunden ruhig aus.',
      timerStart: '90s-Reset starten', timerPause: 'Pause', timerReset: 'Reset',
      protocolTitle: 'Empfohlene Deeskalations-Schritte', scriptTitle: 'Ruhiges Realitäts-Check-Skript',
      storyBtn: '1080×1920 Story-Karte speichern (PNG)', copyBtn: 'Kopieren', shareBtn: 'Teilen',
      copied: 'Zusammenfassung kopiert!', cardSaved: '1080×1920 Story-Karte heruntergeladen!',
      bridgeHspTitle: 'HSP-Sensitivitätstest', bridgeHspDesc: 'Entdecke Elaine Arons DOES-Modell in 5 Kanälen.',
      bridgeCbtTitle: 'KVT-Reframer', bridgeCbtDesc: 'Entkräfte Gedankenlesen mit sokratischen Fragen.',
      bridgeAttachTitle: 'Bindungs-Trigger-Decoder', bridgeAttachDesc: 'Verwandle Beziehungsstress in sichere Grenzen.',
      stickyTitle: 'Prüfe dein HSP-Sensitivitätsprofil', stickySub: 'Kostenloser 12-Sprachen HSP-Test', stickyBtn: 'HSP-Test →',
      privacy: 'Datenschutz', terms: 'Nutzungsbedingungen'
    },
    fr: {
      title: 'Audit Sensibilité au Rejet (RSD) & Pause 90s | DopaBrain',
      metaDesc: 'Auto-évaluation gratuite RSD en 4 axes avec minuteur somatique de 90 secondes et scripts calmes.',
      skip: 'Aller à l’audit RSD', back: '← Catalogue d’outils', langLabel: 'Langue :',
      kicker: 'AUDIT SENSIBILITÉ AU REJET (RSD)', heroTitle: 'Audit RSD & Pause de 90s',
      heroLead: 'Un message bref ou une remarque légère déclenche-t-il une vague intense ? Cartographiez 4 axes RSD et pratiquez la pause de 90 secondes.',
      chip1: '8 Déclencheurs Réels', chip2: 'Pause Somatique 90s', chip3: '100% Privé (Local)',
      step1Badge: 'ÉTAPE 1 • BILAN EN 4 AXES', step1Title: 'Quelle intensité ressentez-vous dans chaque situation ?',
      step1Sub: 'Évaluez votre réaction habituelle ce mois-ci. Calcul 100% local.',
      calcBtn: 'Afficher Mon Profil RSD', resetBtn: 'Réinitialiser',
      resultBadge: 'ÉTAPE 2 • VOTRE PROFIL RSD ET PROTOCOLE',
      axisRadar: 'Radar de Menace Sociale', axisSomatic: 'Vague Somatique', axisRumination: 'Boucle de Rumination', axisFawn: 'Évitement / Suradaptation',
      opts: ['Rarement (0)', 'Léger (1)', 'Fort (2)', 'Intense (3)'],
      timerBadge: 'RÉINITIALISATION NEUROCHIMIQUE DE 90s',
      timerReady: 'Avant de répondre à chaud ou de vous replier, traversez la vague de 90 secondes en expirant lentement.',
      timerStart: 'Lancer 90s', timerPause: 'Pause', timerReset: 'Réinitialiser',
      protocolTitle: 'Étapes d’Apaisement', scriptTitle: 'Script de Réponse Calme',
      storyBtn: 'Enregistrer Carte 1080×1920 (PNG)', copyBtn: 'Copier', shareBtn: 'Partager',
      copied: 'Résumé copié !', cardSaved: 'Carte 1080×1920 téléchargée !',
      bridgeHspTitle: 'Test Hypersensibilité HSP', bridgeHspDesc: 'Explorez le modèle DOES d’Elaine Aron.',
      bridgeCbtTitle: 'Recadrage TCC', bridgeCbtDesc: 'Questionnez la lecture de pensée avec la méthode socratique.',
      bridgeAttachTitle: 'Décodeur d’Attachement', bridgeAttachDesc: 'Transformez les déclencheurs relationnels en scripts sûrs.',
      stickyTitle: 'Explorez votre profil HSP', stickySub: 'Passez l’auto-évaluation HSP DOES gratuite', stickyBtn: 'Test HSP →',
      privacy: 'Confidentialité', terms: 'Conditions'
    },
    ru: {
      title: 'Аудит чувствительности к отказу (RSD) и пауза 90с | DopaBrain',
      metaDesc: 'Бесплатный тест RSD по 4 осям с таймером 90-секундного успокоения и спокойными скриптами ответа.',
      skip: 'К аудиту RSD', back: '← Каталог инструментов', langLabel: 'Язык:',
      kicker: 'САМОПРОВЕРКА RSD', heroTitle: 'Аудит RSD и пауза 90 секунд',
      heroLead: 'Короткое сообщение или мягкое замечание вызывают мгновенный эмоциональный удар? Проверьте 4 оси и пройдите 90-секундную перезагрузку.',
      chip1: '8 жизненных триггеров', chip2: 'Пауза 90 секунд', chip3: '100% приватно',
      step1Badge: 'ШАГ 1 • ОЦЕНКА ПО 4 ОСЯМ', step1Title: 'Насколько сильно вас задевает каждая ситуация?',
      step1Sub: 'Выберите типичную реакцию за последний месяц. Всё считается локально.',
      calcBtn: 'Построить профиль RSD', resetBtn: 'Сбросить',
      resultBadge: 'ШАГ 2 • ВАШ ПРОФИЛЬ RSD И ПРОТОКОЛ',
      axisRadar: 'Радар социальной угрозы', axisSomatic: 'Телесная волна', axisRumination: 'Цикл руминации', axisFawn: 'Избегание / угождение',
      opts: ['Редко (0)', 'Слабо (1)', 'Сильно (2)', 'Очень сильно (3)'],
      timerBadge: '90-СЕКУНДНАЯ ПАУЗА УСПОКОЕНИЯ',
      timerReady: 'Перед импульсивным ответом или уходом в тишину переждите 90-секундную волну с плавным выдохом.',
      timerStart: 'Старт 90 сек', timerPause: 'Пауза', timerReset: 'Сброс',
      protocolTitle: 'Шаги деэскалации', scriptTitle: 'Спокойный скрипт ответа',
      storyBtn: 'Сохранить карточку 1080×1920 (PNG)', copyBtn: 'Копировать', shareBtn: 'Поделиться',
      copied: 'Сводка скопирована!', cardSaved: 'Карточка 1080×1920 сохранена!',
      bridgeHspTitle: 'Тест чувствительности HSP', bridgeHspDesc: 'Модель DOES Элейн Эйрон по 5 сенсорным каналам.',
      bridgeCbtTitle: 'КПТ-рефреймер', bridgeCbtDesc: 'Проверьте «чтение мыслей» сократическими вопросами.',
      bridgeAttachTitle: 'Декодер триггеров привязанности', bridgeAttachDesc: 'Переведите тревогу в спокойные границы.',
      stickyTitle: 'Узнайте свой профиль HSP', stickySub: 'Бесплатная самооценка HSP DOES', stickyBtn: 'Тест HSP →',
      privacy: 'Конфиденциальность', terms: 'Условия'
    },
    hi: {
      title: 'अस्वीकृति संवेदनशीलता (RSD) ऑडिट और 90s रीसेट | DopaBrain',
      metaDesc: 'निःशुल्क 4-अक्ष RSD स्व-जाँच, 90-सेकंड शांत टाइमर और शांत उत्तर स्क्रिप्ट।',
      skip: 'RSD ऑडिट पर जाएं', back: '← टूल कैटलॉग', langLabel: 'भाषा:',
      kicker: 'अस्वीकृति संवेदनशीलता (RSD) ऑडिट', heroTitle: 'RSD ट्रिगर ऑडिट व 90s कूल-डाउन',
      heroLead: 'क्या छोटा संदेश या हल्की आलोचना तुरंत भावनात्मक झटका देती है? अपने 4 अक्ष मापें और 90 सेकंड शांत अभ्यास करें।',
      chip1: '8 वास्तविक ट्रिगर', chip2: '90s शांत टाइमर', chip3: '100% निजी (लोकल)',
      step1Badge: 'चरण 1 • 4-अक्ष जाँच', step1Title: 'प्रत्येक स्थिति आपको कितनी तीव्र लगती है?',
      step1Sub: 'पिछले महीने की अपनी सामान्य प्रतिक्रिया चुनें।',
      calcBtn: 'मेरा RSD प्रोफ़ाइल देखें', resetBtn: 'रीसेट',
      resultBadge: 'चरण 2 • आपका RSD प्रोफ़ाइल और प्रोटोकॉल',
      axisRadar: 'सामाजिक खतरा रडार', axisSomatic: 'शारीरिक भावनात्मक लहर', axisRumination: 'विचार दोहराव चक्र', axisFawn: 'बचाव / अधिक खुश करना',
      opts: ['शायद ही (0)', 'हल्का (1)', 'तेज़ (2)', 'अत्यधिक (3)'],
      timerBadge: '90-सेकंड न्यूरोकेमिकल रीसेट',
      timerReady: 'जल्दबाज़ी में जवाब देने से पहले धीमी साँस के साथ 90 सेकंड की लहर शांत होने दें।',
      timerStart: '90s कूल-डाउन शुरू करें', timerPause: 'रोकें', timerReset: 'रीसेट',
      protocolTitle: 'सुझाए गए शांत कदम', scriptTitle: 'शांत उत्तर स्क्रिप्ट',
      storyBtn: '1080×1920 स्टोरी कार्ड सेव करें (PNG)', copyBtn: 'कॉपी करें', shareBtn: 'शेयर करें',
      copied: 'सारांश कॉपी हो गया!', cardSaved: '1080×1920 स्टोरी कार्ड डाउनलोड हो गया!',
      bridgeHspTitle: 'HSP संवेदनशीलता टेस्ट', bridgeHspDesc: 'एलेन एरोन के DOES मॉडल से संवेदनशीलता जानें।',
      bridgeCbtTitle: 'CBT विकृति रीफ़्रेमर', bridgeCbtDesc: 'सुकराती प्रश्नों से मन पढ़ने की आदत जांचें।',
      bridgeAttachTitle: 'अटैचमेंट ट्रिगर डिकोडर', bridgeAttachDesc: 'रिश्ते के तनाव को सुरक्षित संवाद में बदलें।',
      stickyTitle: 'अपना HSP प्रोफ़ाइल जानें', stickySub: 'निःशुल्क 12-भाषा HSP DOES मूल्यांकन', stickyBtn: 'HSP टेस्ट →',
      privacy: 'गोपनीयता नीति', terms: 'नियम'
    },
    id: {
      title: 'Audit Sensitivitas Penolakan (RSD) & Reset 90 Detik | DopaBrain',
      metaDesc: 'Audit mandiri RSD 4-sumbu gratis dengan timer pendinginan somatik 90 detik dan skrip balasan tenang.',
      skip: 'Lanjut ke Audit RSD', back: '← Katalog Alat', langLabel: 'Bahasa:',
      kicker: 'AUDIT SENSITIVITAS PENOLAKAN (RSD)', heroTitle: 'Audit Pemicu RSD & Pendinginan 90d',
      heroLead: 'Apakah pesan singkat atau kritik ringan terasa seperti gelombang kejut emosi? Petakan 4 sumbu RSD dan praktikkan reset 90 detik.',
      chip1: '8 Pemicu Nyata', chip2: 'Timer Pendinginan 90d', chip3: '100% Privat (Lokal)',
      step1Badge: 'LANGKAH 1 • CEK 4 SUMBU', step1Title: 'Seberapa kuat tiap momen terasa bagi Anda?',
      step1Sub: 'Pilih intensitas reaksi khas Anda bulan lalu. Semua dihitung secara lokal.',
      calcBtn: 'Petakan Profil RSD Saya', resetBtn: 'Reset',
      resultBadge: 'LANGKAH 2 • PROFIL RSD & PROTOKOL',
      axisRadar: 'Radar Ancaman Sosial', axisSomatic: 'Lonjakan Somatik', axisRumination: 'Loop Ruminasi', axisFawn: 'Menghindar / Memuaskan',
      opts: ['Jarang (0)', 'Ringan (1)', 'Kuat (2)', 'Sangat Kuat (3)'],
      timerBadge: 'RESET GELOMBANG NEUROKIMIA 90 DETIK',
      timerReady: 'Sebelum membalas terburu-buru atau menjauh, lewati gelombang 90 detik dengan hembusan napas pelan.',
      timerStart: 'Mulai Pendinginan 90d', timerPause: 'Jeda', timerReset: 'Reset Timer',
      protocolTitle: 'Langkah Penenangan', scriptTitle: 'Skrip Balasan Tenang',
      storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin Ringkasan', shareBtn: 'Bagikan',
      copied: 'Ringkasan disalin!', cardSaved: 'Kartu 1080×1920 diunduh!',
      bridgeHspTitle: 'Tes Sensitivitas HSP', bridgeHspDesc: 'Jelajahi model DOES Elaine Aron di 5 saluran indra.',
      bridgeCbtTitle: 'Reframer Distorsi CBT', bridgeCbtDesc: 'Uji kebiasaan membaca pikiran dengan pertanyaan Sokrates.',
      bridgeAttachTitle: 'Dekoder Pemicu Kelekatan', bridgeAttachDesc: 'Ubah panik relasi menjadi skrip batasan aman.',
      stickyTitle: 'Cek profil sensitivitas HSP Anda', stickySub: 'Ikuti asesmen HSP DOES gratis 12 bahasa', stickyBtn: 'Tes HSP →',
      privacy: 'Kebijakan Privasi', terms: 'Ketentuan'
    },
    tr: {
      title: 'Reddedilme Duyarlılığı (RSD) Denetimi ve 90sn Reset | DopaBrain',
      metaDesc: 'Ücretsiz 4 eksenli RSD öz-değerlendirme, 90 saniyelik somatik sakinleşme zamanlayıcısı ve sakin yanıt metinleri.',
      skip: 'RSD Denetimine Geç', back: '← Araç Kataloğu', langLabel: 'Dil:',
      kicker: 'REDDEDİLME DUYARLILIĞI (RSD) DENETİMİ', heroTitle: 'RSD Tetikleyici Denetimi & 90sn Mola',
      heroLead: 'Kısa bir mesaj veya hafif bir eleştiri anlık duygusal şok gibi mi hissettiriyor? 4 RSD eksenini ölçün ve 90 saniyelik reset uygulayın.',
      chip1: '8 Gerçek Tetikleyici', chip2: '90sn Somatik Mola', chip3: '%100 Gizli (Yerel)',
      step1Badge: 'ADIM 1 • 4 EKSENLİ KONTROL', step1Title: 'Her bir an sizi ne kadar güçlü etkiliyor?',
      step1Sub: 'Son bir aydaki tipik tepki yoğunluğunuzu seçin. Hesaplama tamamen yereldir.',
      calcBtn: 'RSD Profilimi Oluştur', resetBtn: 'Sıfırla',
      resultBadge: 'ADIM 2 • RSD PROFİLİNİZ VE PROTOKOL',
      axisRadar: 'Sosyal Tehdit Radarı', axisSomatic: 'Somatik Dalga', axisRumination: 'Ruminasyon Döngüsü', axisFawn: 'Kaçınma / Aşırı Uyum',
      opts: ['Nadiren (0)', 'Hafif (1)', 'Güçlü (2)', 'Yoğun (3)'],
      timerBadge: '90 SANİYELİK NÖROKİMYASAL RESET',
      timerReady: 'Acele mesaj atmadan veya geri çekilmeden önce yavaş nefesle 90 saniyelik dalgayı geçirin.',
      timerStart: '90sn Molayı Başlat', timerPause: 'Duraklat', timerReset: 'Sıfırla',
      protocolTitle: 'Önerilen Sakinleşme Adımları', scriptTitle: 'Sakin Gerçeklik Kontrolü Yanıtı',
      storyBtn: '1080×1920 Hikaye Kartı Kaydet (PNG)', copyBtn: 'Özeti Kopyala', shareBtn: 'Paylaş',
      copied: 'Özet kopyalandı!', cardSaved: '1080×1920 Hikaye Kartı indirildi!',
      bridgeHspTitle: 'HSP Duyarlılık Testi', bridgeHspDesc: 'Elaine Aron’un DOES modelini 5 duyusal kanalda keşfedin.',
      bridgeCbtTitle: 'BDT Çarpıtma Yeniden Çerçeveleyici', bridgeCbtDesc: 'Zihin okumayı Sokratik sorularla test edin.',
      bridgeAttachTitle: 'Bağlanma Tetikleyici Çözücü', bridgeAttachDesc: 'İlişki kaygısını güvenli sınır cümlelerine dönüştürün.',
      stickyTitle: 'HSP duyarlılık profilinizi keşfedin', stickySub: 'Ücretsiz 12 dilli HSP DOES değerlendirmesi', stickyBtn: 'HSP Testi →',
      privacy: 'Gizlilik Politikası', terms: 'Koşullar'
    }
  };

  Object.keys(EXTRA_LOC).forEach(function (k) {
    T[k] = Object.assign({}, T.en, EXTRA_LOC[k]);
  });

  var currentLang = 'en';
  var answers = [1, 1, 1, 1, 1, 1, 1, 1];
  var hasCompletedOnce = false;
  var timerSec = 90;
  var timerId = null;

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
        tool_slug: 'rsd-coping-audit',
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

  function renderScenarios() {
    var d = dict(currentLang);
    var container = document.getElementById('scenarioList');
    if (!container) return;
    container.innerHTML = '';
    var qs = d.qs || T.en.qs;
    var opts = d.opts || T.en.opts;

    qs.forEach(function (qText, idx) {
      var card = document.createElement('div');
      card.className = 'scenario-item';

      var q = document.createElement('div');
      q.className = 'scenario-q';
      q.textContent = qText;

      var row = document.createElement('div');
      row.className = 'opt-row';

      opts.forEach(function (label, val) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'opt-btn' + (answers[idx] === val ? ' active' : '');
        btn.textContent = label;
        btn.setAttribute('aria-pressed', answers[idx] === val ? 'true' : 'false');
        btn.addEventListener('click', function () {
          answers[idx] = val;
          row.querySelectorAll('.opt-btn').forEach(function (b, bi) {
            b.classList.toggle('active', bi === val);
            b.setAttribute('aria-pressed', bi === val ? 'true' : 'false');
          });
          saveState(false);
        });
        row.appendChild(btn);
      });

      card.appendChild(q);
      card.appendChild(row);
      container.appendChild(card);
    });
  }

  function updateLinks() {
    var lang = currentLang;
    var back = document.getElementById('backLink');
    if (back) back.setAttribute('href', '/portal/tools/?lang=' + lang);
    [
      ['bridgeHsp', '/hsp-test/?lang=' + lang + '&source=rsd_audit_bridge'],
      ['bridgeCbt', '/portal/tools/cognitive-distortion-reframer.html?lang=' + lang + '&source=rsd_audit_bridge'],
      ['bridgeAttach', '/portal/tools/attachment-trigger-decoder.html?lang=' + lang + '&source=rsd_audit_bridge']
    ].forEach(function (pair) {
      var el = document.getElementById(pair[0]);
      if (el) el.setAttribute('href', pair[1]);
    });
    var sticky = document.querySelector('.revenue-sticky-cta');
    if (sticky) sticky.setAttribute('href', '/hsp-test/?lang=' + lang + '&source=rsd_audit_sticky');
  }

  function formatClock(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  function renderTimerDisplay() {
    var d = dict(currentLang);
    var clock = document.getElementById('timerClock');
    var phase = document.getElementById('timerPhase');
    var btn = document.getElementById('timerStartBtn');
    if (clock) clock.textContent = formatClock(timerSec);
    if (phase) {
      if (timerSec === 90 && !timerId) phase.textContent = d.timerReady;
      else if (timerSec <= 0) phase.textContent = d.timerDone;
      else if (timerSec > 60) phase.textContent = (d.timerPhases || T.en.timerPhases)[0];
      else if (timerSec > 30) phase.textContent = (d.timerPhases || T.en.timerPhases)[1];
      else phase.textContent = (d.timerPhases || T.en.timerPhases)[2];
    }
    if (btn) btn.textContent = timerId ? d.timerPause : d.timerStart;
  }

  function toggleTimer() {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
      renderTimerDisplay();
      return;
    }
    if (timerSec <= 0) timerSec = 90;
    sendSafeEvent('rsd_cooldown_start');
    timerId = window.setInterval(function () {
      timerSec = Math.max(0, timerSec - 1);
      if (timerSec === 0) {
        window.clearInterval(timerId);
        timerId = null;
      }
      renderTimerDisplay();
    }, 1000);
    renderTimerDisplay();
  }

  function resetTimer() {
    if (timerId) {
      window.clearInterval(timerId);
      timerId = null;
    }
    timerSec = 90;
    renderTimerDisplay();
  }

  function computeMetrics() {
    var sums = { radar: 0, somatic: 0, rumination: 0, fawn: 0 };
    answers.forEach(function (val, i) { sums[AXES[i]] += Number(val) || 0; });
    var pcts = {
      radar: Math.round((sums.radar / 6) * 100),
      somatic: Math.round((sums.somatic / 6) * 100),
      rumination: Math.round((sums.rumination / 6) * 100),
      fawn: Math.round((sums.fawn / 6) * 100)
    };
    var total = sums.radar + sums.somatic + sums.rumination + sums.fawn;
    var tier = total <= 8 ? 'low' : (total <= 16 ? 'mid' : 'high');
    return { pcts: pcts, total: total, tier: tier };
  }

  function renderResult(isUserAction) {
    var d = dict(currentLang);
    var res = computeMetrics();
    var v = (d.verdicts && d.verdicts[res.tier]) || T.en.verdicts[res.tier];

    document.getElementById('verdictTitle').textContent = v[0];
    document.getElementById('verdictDesc').textContent = v[1];

    var map = [
      ['pctRadar', 'barRadar', res.pcts.radar],
      ['pctSomatic', 'barSomatic', res.pcts.somatic],
      ['pctRumination', 'barRumination', res.pcts.rumination],
      ['pctFawn', 'barFawn', res.pcts.fawn]
    ];
    map.forEach(function (row) {
      document.getElementById(row[0]).textContent = row[2] + '%';
      document.getElementById(row[1]).style.width = row[2] + '%';
    });

    var listEl = document.getElementById('protocolList');
    listEl.innerHTML = '';
    v[2].forEach(function (step) {
      var li = document.createElement('li');
      li.textContent = step;
      listEl.appendChild(li);
    });
    document.getElementById('replyScript').textContent = v[3];

    var card = document.getElementById('resultCard');
    card.hidden = false;
    if (isUserAction) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if (!hasCompletedOnce) {
        hasCompletedOnce = true;
        sendSafeEvent('rsd_audit_complete');
      }
    }
    saveState(true);
  }

  function saveState(completed) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        answers: answers,
        completed: Boolean(completed || (document.getElementById('resultCard') && !document.getElementById('resultCard').hidden))
      }));
    } catch (e) {}
  }

  function restoreState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.answers) && parsed.answers.length === 8) {
        answers = parsed.answers.map(function (v) { return Math.max(0, Math.min(3, Number(v) || 0)); });
      }
      renderScenarios();
      if (parsed && parsed.completed) renderResult(false);
    } catch (e) {}
  }

  function resetAll() {
    answers = [1, 1, 1, 1, 1, 1, 1, 1];
    resetTimer();
    var card = document.getElementById('resultCard');
    if (card) card.hidden = true;
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    renderScenarios();
    sendSafeEvent('rsd_audit_reset');
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

    var sel = document.getElementById('langSelect');
    if (sel) sel.value = currentLang;

    renderScenarios();
    renderTimerDisplay();
    updateLinks();

    var card = document.getElementById('resultCard');
    if (card && !card.hidden) renderResult(false);
  }

  function downloadCard() {
    var d = dict(currentLang);
    if (!window.DopaBrainStoryCard) return;
    var res = computeMetrics();
    var ok = window.DopaBrainStoryCard.downloadStoryCard({
      slug: 'rsd-coping-audit',
      badge: d.kicker,
      emoji: '🫧',
      toolName: d.heroTitle,
      headline: document.getElementById('verdictTitle')?.textContent || '',
      subtitle: document.getElementById('verdictDesc')?.textContent || '',
      accent: '#ec4899',
      accent2: '#8b5cf6',
      metrics: [
        { label: d.axisRadar, pct: res.pcts.radar, color: '#f472b6' },
        { label: d.axisSomatic, pct: res.pcts.somatic, color: '#c084fc' },
        { label: d.axisRumination, pct: res.pcts.rumination, color: '#818cf8' },
        { label: d.axisFawn, pct: res.pcts.fawn, color: '#38bdf8' }
      ],
      takeawayLabel: d.scriptTitle,
      takeaway: document.getElementById('replyScript')?.textContent || '',
      footerUrl: 'dopabrain.com/portal/tools/rsd-coping-audit.html'
    });
    if (ok) showToast(d.cardSaved);
  }

  function copySummary() {
    var d = dict(currentLang);
    var text = [
      '[' + d.heroTitle + ']',
      document.getElementById('verdictTitle')?.textContent || '',
      document.getElementById('replyScript')?.textContent || '',
      'https://dopabrain.com/portal/tools/rsd-coping-audit.html?lang=' + currentLang
    ].join('\n');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { showToast(d.copied); }).catch(function () {});
    } else {
      showToast(d.copied);
    }
  }

  function shareTool() {
    var d = dict(currentLang);
    var url = 'https://dopabrain.com/portal/tools/rsd-coping-audit.html?lang=' + currentLang;
    if (navigator.share) {
      navigator.share({ title: d.heroTitle, text: d.heroLead, url: url }).catch(function () {});
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () { showToast(d.copied); }).catch(function () {});
    }
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
    sendSafeEvent('rsd_audit_view');

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

    document.getElementById('calcBtn')?.addEventListener('click', function () { renderResult(true); });
    document.getElementById('resetBtn')?.addEventListener('click', resetAll);
    document.getElementById('timerStartBtn')?.addEventListener('click', toggleTimer);
    document.getElementById('timerResetBtn')?.addEventListener('click', resetTimer);
    document.getElementById('storyBtn')?.addEventListener('click', downloadCard);
    document.getElementById('copyBtn')?.addEventListener('click', copySummary);
    document.getElementById('shareBtn')?.addEventListener('click', shareTool);
  });
})();
