/**
 * DopaBrain Attachment Trigger Decoder & Secure Script Builder
 * 12-language localization, XSS-safe custom note, 1080x1920 story card, zero private telemetry.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'attachment_decoder_v1';
  var SUPPORTED = ['en', 'ko', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
  var TRIGGER_IDS = ['silence', 'conflict', 'space', 'expectation', 'repair', 'boundary'];
  var IMPULSE_IDS = ['anxious', 'avoidant', 'disorganized', 'secure'];

  var METERS = {
    anxious: [88, 28],
    avoidant: [30, 86],
    disorganized: [82, 80],
    secure: [54, 58]
  };

  var T = {
    en: {
      title: 'Attachment Trigger Decoder & Secure Script Builder | DopaBrain',
      metaDesc: 'Free 12-language attachment trigger decoder and secure communication script builder. Translate anxious protest or avoidant withdrawal into calm, clear relationship boundaries.',
      skip: 'Skip to Script Builder', back: '← Tools Catalog', langLabel: 'Language:',
      kicker: 'SECURE COMMUNICATION WORKSPACE', heroTitle: 'Attachment Trigger Decoder & Script Builder',
      heroLead: 'Pause before chasing or shutting down. Decode the nervous-system need behind your trigger and generate a clear, non-blaming secure message in seconds.',
      chip1: '6 Core Triggers', chip2: '4 Attachment Impulses', chip3: '100% Private (Local)',
      step1Badge: 'STEP 1 • IDENTIFY THE TRIGGER', step1Title: 'What just happened in the relationship?', step1Sub: 'Choose the moment that activated tension right now.',
      step2Badge: 'STEP 2 • SPOT YOUR AUTOMATIC IMPULSE', step2Title: 'What does your protective instinct want to do?', step2Sub: 'Recognize whether your nervous system is leaning toward protest, deactivation, push-pull, or calm repair.',
      contextLabel: 'Optional private note (e.g., topic — stays strictly in this browser):',
      contextPlaceholder: 'Example: weekend plans / delayed text',
      generateBtn: 'Build Secure Repair Script', resetBtn: 'Reset',
      resultBadge: 'STEP 3 • SECURE COMMUNICATION BLUEPRINT',
      meterConnect: 'Connection Urgency', meterAutonomy: 'Autonomy Protection',
      needTitle: 'Underlying Nervous-System Need', scriptTitle: 'Ready-to-Send Secure Script', stepsTitle: '3 Grounded Regulation Steps',
      storyBtn: 'Save 1080×1920 Story Card (PNG)', copyBtn: 'Copy Secure Script', shareBtn: 'Share Tool',
      copied: 'Secure script copied to clipboard!', cardSaved: '1080×1920 Story Card downloaded!',
      topicPrefix: 'Regarding ',
      triggers: {
        silence: ['⏳ Delayed Reply / Silence', 'Messages went quiet longer than expected.'],
        conflict: ['⚡ Sudden Conflict Spike', 'Tension escalated fast during a disagreement.'],
        space: ['🌿 Partner Asked for Space', 'Someone needed solo time to recharge.'],
        expectation: ['🧩 Unspoken Expectation', 'Feeling unseen without having stated the need clearly.'],
        repair: ['🤝 Post-Argument Repair', 'Wanting to reconnect calmly after a rough exchange.'],
        boundary: ['🛡️ Setting a Clear Boundary', 'Needing to say no while preserving warmth.']
      },
      impulses: {
        anxious: ['🔥 Anxious Protest', 'Urge to double-text, demand instant reassurance, or test loyalty.'],
        avoidant: ['🧊 Avoidant Deactivation', 'Urge to go silent, minimize feelings, or detach emotionally.'],
        disorganized: ['🌪️ Push-Pull Overload', 'Wanting closeness desperately while fearing getting hurt.'],
        secure: ['🌱 Calm Secure Repair', 'Ready to name facts, feelings, and a clear next step.']
      },
      profiles: {
        anxious: ['Anxious Protest → Clear Direct Request', 'Your alarm system fears disconnection and pushes for immediate certainty. Replacing hints or tests with one warm, direct request lowers friction for both sides.', 'Your nervous system is asking for predictable emotional reassurance—not perfection.', ['Put the phone down for 3 slow exhales before typing.', 'Name your own feeling ("I felt uneasy") instead of accusing intent.', 'Make one concrete, low-pressure request with a clear timeframe.']],
        avoidant: ['Avoidant Deactivation → Transparent Breathing Room', 'Your system protects autonomy by shutting down when pressure rises. Naming when you will return keeps space from feeling like abandonment.', 'Your nervous system needs unpressured autonomy without losing mutual trust.', ['Notice the urge to vanish without explaining—give a brief time anchor instead.', 'State that you care about the relationship AND need a short reset.', 'Follow through at the time you promised to rebuild reliability.']],
        disorganized: ['Push-Pull Overload → Slow Safe Anchoring', 'Both closeness and distance feel intense right now. Slowing the pace and anchoring on one small factual step prevents whiplash.', 'Your nervous system needs emotional safety and predictable pacing.', ['Pause both chasing and shutting down for 10 minutes.', 'Share one honest sentence about feeling overwhelmed without blaming.', 'Agree on a calm check-in time rather than forcing instant resolution.']],
        secure: ['Grounded Secure Alignment', 'You are ready to balance warmth with clear boundaries. Keep the message concise, specific, and collaborative.', 'Mutual respect, clarity, and steady emotional safety.', ['Lead with appreciation or shared intent.', 'State the specific observation and request in 2 sentences.', 'Invite their perspective openly.']]
      },
      scripts: {
        silence: '“Hey, I noticed I started overthinking while it was quiet. No rush at all—when you have a moment, could you let me know when you’re free to catch up?”',
        conflict: '“I care about us and don’t want us to talk past each other while heated. Can we take a 20-minute breather and come back at [time] to work this through calmly?”',
        space: '“Thanks for letting me know you need time to recharge. Take the space you need, and let’s check in tonight or tomorrow when you’re ready.”',
        expectation: '“I realized I kept hoping you’d notice what I needed instead of saying it directly. What would really help me feel supported right now is [specific action].”',
        repair: '“I’ve had time to cool down and want to repair rather than stay distant. I’m sorry for my part in escalating—are you open to a calm reset talk?”',
        boundary: '“I value our connection and want to show up well, so I need to say no to this today so I can protect my energy. Here’s what I can do instead.”'
      },
      bridgeAttachTitle: 'Attachment Response Reflection', bridgeAttachDesc: 'Explore your 10-scenario attachment response tendencies privately.',
      bridgeRsdTitle: 'RSD Sensitivity Audit', bridgeRsdDesc: 'Calm rejection alarm spikes with a guided 90-second cool-down.',
      bridgeCbtTitle: 'CBT Distortion Reframer', bridgeCbtDesc: 'Separate observable relationship facts from mind-reading stories.',
      stickyTitle: 'Explore your attachment response pattern', stickySub: 'Take the free 10-scenario private attachment reflection', stickyBtn: 'Attachment Reflection →',
      privacy: 'Privacy Policy', terms: 'Terms'
    },
    ko: {
      title: '애착 트리거 디코더 & 안전 대화 스크립트 빌더 | DopaBrain',
      metaDesc: '무료 12개국어 애착 트리거 분석 및 안정형 대화 스크립트 생성기. 불안형 추격이나 회피형 잠수 충동을 차분하고 명확한 관계 경계 문장으로 바꿔줍니다.',
      skip: '스크립트 빌더로 이동', back: '← 도구 카탈로그', langLabel: '언어:',
      kicker: '안정형 관계 소통 워크스페이스', heroTitle: '애착 트리거 디코더 & 안전 스크립트',
      heroLead: '추격하거나 입을 닫기 전에 잠시 멈추세요. 트리거 이면의 신경계 욕구를 해석하고 비난 없는 명확한 안정형 대화 문장을 바로 만들어 드립니다.',
      chip1: '6가지 관계 트리거', chip2: '4가지 애착 충동', chip3: '100% 로컬 비공개',
      step1Badge: '1단계 • 관계 트리거 선택', step1Title: '지금 관계에서 어떤 순간이 긴장을 일으켰나요?', step1Sub: '현재 마음을 흔든 상황을 선택하세요.',
      step2Badge: '2단계 • 자동 보호 충동 포착', step2Title: '지금 내 보호 본능은 어떻게 반응하려 하나요?', step2Sub: '불안 추격, 회피 차단, 혼란 밀당, 안정 회복 중 가장 가까운 반응을 고르세요.',
      contextLabel: '선택 메모 (예: 대화 주제 — 브라우저 밖으로 전송되지 않습니다):',
      contextPlaceholder: '예: 주말 약속 / 늦은 답장',
      generateBtn: '안정형 대화 스크립트 생성', resetBtn: '초기화',
      resultBadge: '3단계 • 안정형 소통 설계도',
      meterConnect: '연결 확인 욕구', meterAutonomy: '자율성 보호 욕구',
      needTitle: '신경계가 진짜로 원하는 핵심 욕구', scriptTitle: '바로 보낼 수 있는 안정형 스크립트', stepsTitle: '차분한 조절 3단계',
      storyBtn: '1080×1920 스토리 카드 저장 (PNG)', copyBtn: '스크립트 복사', shareBtn: '도구 공유',
      copied: '안정형 스크립트가 클립보드에 복사되었습니다!', cardSaved: '1080×1920 스토리 카드가 저장되었습니다!',
      topicPrefix: '주제: ',
      triggers: {
        silence: ['⏳ 답장 지연 / 침묵', '예상보다 연락이 길어져 불안하거나 답답함.'],
        conflict: ['⚡ 갑작스러운 갈등 고조', '의견 충돌 중 감정이 빠르게 격해짐.'],
        space: ['🌿 상대의 혼자만의 시간 요청', '상대가 재충전할 거리를 요청함.'],
        expectation: ['🧩 말하지 못한 기대', '직접 말하지 않았는데 알아주길 바라며 서운함.'],
        repair: ['🤝 다툼 후 화해 시도', '어색해진 분위기를 건강하게 회복하고 싶음.'],
        boundary: ['🛡️ 건강한 경계선 설정', '관계를 지키면서 무리한 요청을 거절해야 함.']
      },
      impulses: {
        anxious: ['🔥 불안형 추격 충동', '연속 메시지, 즉각 확신 요구, 상대 마음 떠보기 충동.'],
        avoidant: ['🧊 회피형 차단 충동', '잠수 타기, 감정 축소, 혼자 닫아버리고 싶은 충동.'],
        disorganized: ['🌪️ 혼란형 밀당 과부하', '가까워지고 싶으면서도 상처받을까 봐 밀어내는 충동.'],
        secure: ['🌱 안정형 차분한 회복', '사실과 감정, 구체적 요청을 균형 있게 전할 준비됨.']
      },
      profiles: {
        anxious: ['불안형 추격 → 명확한 직접 요청으로 전환', '단절 공포가 즉각적 확신을 재촉하고 있습니다. 떠보기 대신 따뜻하고 구체적인 한 문장 요청이 갈등을 크게 줄입니다.', '완벽함이 아니라 예측 가능한 정서적 연결 확인이 필요한 상태입니다.', ['입력 전 스마트폰을 내려놓고 3번 길게 숨을 내쉬세요.', '상대 의도 추측 대신 내 감정("내가 조금 불안해졌어")만 말하세요.', '부담 없는 구체적 요청과 시간 기준을 1가지만 전하세요.']],
        avoidant: ['회피형 차단 → 복귀 시점을 알리는 건강한 여백', '압박이 커질 때 자율성을 지키려 소통을 닫는 패턴입니다. 언제 돌아올지 알려주면 거리가 단절로 오해되지 않습니다.', '관계를 망치지 않으면서 숨 돌릴 수 있는 자율적 여백이 필요합니다.', ['말없이 사라지는 대신 복귀 시점("저녁 8시에 다시 얘기하자")을 먼저 알리세요.', '관계를 소중히 여긴다는 뜻과 짧은 휴식 필요를 함께 말하세요.', '약속한 시간에 먼저 연락해 신뢰를 지키세요.']],
        disorganized: ['혼란형 밀당 과부하 → 안전한 속도 조절', '가까움과 거리감 모두 부담스럽게 느껴지는 상태입니다. 속도를 늦추고 작은 사실 하나에 집중하세요.', '예측 가능한 속도와 비난 없는 정서적 안전감이 필요합니다.', ['10분간 추격과 차단을 모두 멈추세요.', '상대를 탓하지 않고 "지금 조금 벅차서 천천히 말하고 싶어"라고 전하세요.', '당장 결론내기보다 차분히 다시 이야기할 시간을 합의하세요.']],
        secure: ['안정형 균형 조율', '따뜻함과 분명한 경계를 함께 전달할 준비가 되어 있습니다. 간결하고 협력적인 문장을 유지하세요.', '상호 존중, 명확한 기대 공유, 안정적 연결감.', ['상대에 대한 존중이나 공동 목표로 대화를 여세요.', '구체적 관찰과 희망 사항을 두 문장으로 표현하세요.', '상대의 생각도 편하게 들을 여지를 열어두세요.']]
      },
      scripts: {
        silence: '“연락이 뜸해서 나 혼자 조금 앞서 생각한 것 같아. 급한 건 아니니까 시간 될 때 언제쯤 편하게 통화나 대화 가능할지 알려줄래?”',
        conflict: '“우리 사이가 소중해서 감정 격한 상태로 상처 주고 싶지 않아. 20분만 각자 숨 고르고 [시간]에 차분하게 다시 얘기해 볼까?”',
        space: '“혼자 재충전할 시간이 필요하다고 솔직히 말해줘서 고마워. 편하게 쉬고 준비될 때 오늘 저녁이나 내일 가볍게 연락하자.”',
        expectation: '“내가 직접 말하지 않고 알아주길 바랐던 것 같아. 지금 내가 가장 지지받는다고 느낄 부분은 [구체적 행동]이야.”',
        repair: '“조금 진정하고 나니 거리 두기보다 잘 풀고 싶다는 마음이 커. 아까 날카롭게 반응했던 내 부분은 미안해. 편할 때 차분히 이야기할 수 있을까?”',
        boundary: '“너와의 관계가 소중하고 오래 잘 지내고 싶어서 솔직히 말할게. 오늘은 내 에너지가 부족해서 이 부분은 어렵고, 대신 [대안]은 가능해.”'
      },
      bridgeAttachTitle: '애착 반응 성찰 테스트', bridgeAttachDesc: '10가지 관계 시나리오로 나의 애착 반응 경향을 비공개 점검하세요.',
      bridgeRsdTitle: '거절 민감성(RSD) 점검', bridgeRsdDesc: '90초 쿨다운 타이머로 거절 경보 반응을 부드럽게 진정시키세요.',
      bridgeCbtTitle: 'CBT 인지 왜곡 리프레이머', bridgeCbtDesc: '관찰 가능한 사실과 독심술 추측을 명쾌하게 분리합니다.',
      stickyTitle: '나의 애착 반응 패턴 점검하기', stickySub: '무료 10문항 비공개 애착 성찰 테스트', stickyBtn: '애착 성찰 테스트 →',
      privacy: '개인정보처리방침', terms: '이용약관'
    },
    ja: {
      title: '愛着トリガー解説＆安心スクリプト作成 | DopaBrain',
      metaDesc: '無料12言語対応の愛着トリガー解説＆安心コミュニケーション作成ツール。不安型の追いかけや回避型のシャットダウンを落ち着いた境界線メッセージへ変換します。',
      skip: 'スクリプト作成へ', back: '← ツール一覧', langLabel: '言語:',
      kicker: '安心コミュニケーション・ワークスペース', heroTitle: '愛着トリガー解説＆安心スクリプト',
      heroLead: '追いかけたり心を閉ざす前に一呼吸。トリガーの裏にある神経系のニーズを読み解き、責めない安心メッセージを数秒で作成します。',
      chip1: '6つの関係トリガー', chip2: '4つの愛着衝動', chip3: '100%ローカル非公開',
      step1Badge: 'STEP 1 • トリガーを選ぶ', step1Title: '今、関係の中で何が起きましたか？', step1Sub: '緊張を引き起こした場面を選んでください。',
      step2Badge: 'STEP 2 • 防衛衝動に気づく', step2Title: '今どんな反応をしたくなっていますか？', step2Sub: '不安な追及、回避の遮断、混乱の押し引き、安心な修復から選んでください。',
      contextLabel: '任意のメモ（話題など・ブラウザ内のみ保持）:', contextPlaceholder: '例：週末の予定 / 返信の遅れ',
      generateBtn: '安心スクリプトを作成', resetBtn: 'リセット',
      resultBadge: 'STEP 3 • 安心コミュニケーション設計',
      meterConnect: 'つながり確認の切迫感', meterAutonomy: '自律性保護の衝動',
      needTitle: '神経系が本当に求めているニーズ', scriptTitle: 'そのまま送れる安心スクリプト', stepsTitle: '落ち着いた調整の3ステップ',
      storyBtn: '1080×1920 ストーリーカード保存 (PNG)', copyBtn: 'スクリプトをコピー', shareBtn: 'ツールを共有',
      copied: '安心スクリプトをコピーしました！', cardSaved: '1080×1920 ストーリーカードを保存しました！',
      topicPrefix: 'テーマ：',
      triggers: {
        silence: ['⏳ 返信の遅れ・沈黙', '予想より連絡が空いて落ち着かない。'],
        conflict: ['⚡ 急な対立・口論', 'すれ違いで感情が一気に高ぶった。'],
        space: ['🌿 相手が一人の時間を希望', '距離や休息を求められて戸惑う。'],
        expectation: ['🧩 言えていない期待', '察してほしいのに伝わらずモヤモヤする。'],
        repair: ['🤝 ケンカ後の修復', '気まずい空気を穏やかに整えたい。'],
        boundary: ['🛡️ 健全な境界線を伝える', '関係を大切にしながら無理な頼みを断りたい。']
      },
      impulses: {
        anxious: ['🔥 不安型の追及衝動', '連投したり即時の安心確認を求めたくなったりする。'],
        avoidant: ['🧊 回避型の遮断衝動', '黙り込んだり感情を切り離して距離を取りたくなる。'],
        disorganized: ['🌪️ 押し引きの過負荷', '近づきたいのに傷つくのが怖く両方の衝動がぶつかる。'],
        secure: ['🌱 穏やかな安心修復', '事実と気持ち、具体的な希望を落ち着いて伝える準備がある。']
      },
      profiles: {
        anxious: ['不安型の追及 → 素直で短いリクエストへ', '孤立への恐れが即答を急かしています。試し行動ではなく、温かく具体的な一言が摩擦を減らします。', '完璧さではなく「予測できる安心感」を求めています。', ['打つ前にスマホを置いて3回長く息を吐きます。', '相手の意図を責めず「少し心細くなった」と自分の気持ちを伝えます。', '負担の少ない具体的な提案を1つだけ添えます。']],
        avoidant: ['回避型の遮断 → 戻る時間を添えた安心な余白', '圧力を感じると自立を守るためにシャットダウンしやすくなります。戻る目安を伝えると見捨てられ不安を防げます。', '関係を壊さずに息をつける自律的な余白が必要です。', ['無言で消える代わりに「今夜8時にまた話そう」と目安を伝えます。', '関係は大切だと添えた上で短い休息を求めます。', '約束した時間にこちらから連絡し信頼を保ちます。']],
        disorganized: ['押し引き過負荷 → ゆっくり安全なペース調整', '近さも距離も強く刺激される状態です。結論を急がず小さな一歩に絞りましょう。', '予測可能なペースと責められない安全感が必要です。', ['10分間、追いかけることも閉じることも保留にします。', '相手を責めず「少し気持ちがいっぱいだからゆっくり話したい」と伝えます。', '今すぐ解決せず落ち着いて話す時間を決めます。']],
        secure: ['安定した安心アラインメント', '温かさと明確な境界線を両立できる状態です。簡潔で協力的な表現を保ちましょう。', '相互尊重、明確な期待共有、穏やかな安全感。', ['感謝や共通の目的から話し始めます。', '具体的な事実と希望を2文で伝えます。', '相手の視点も開かれた姿勢で受け取ります。']]
      },
      scripts: {
        silence: '「連絡が空いて少し考えすぎてしまったみたい。急ぎではないので、落ち着いたら話せそうなタイミングを教えてもらえる？」',
        conflict: '「大切な関係だからこそ感情的なまま話したくないんだ。20分だけクールダウンして[時間]に落ち着いて話し直さない？」',
        space: '「一人の時間が必要だと正直に伝えてくれてありがとう。ゆっくり休んで、準備ができたら今夜か明日にでも連絡してね。」',
        expectation: '「言わずに察してほしいと期待してしまっていたかも。今いちばん支えに感じるのは[具体的な行動]なんだ。」',
        repair: '「少し落ち着いたら距離を置くより仲直りしたいと思ったよ。きつい言い方をしてごめんね。落ち着いて話せる時間はある？」',
        boundary: '「これからも良い関係でいたいから正直に伝えるね。今日はエネルギーが足りなくて難しいけれど、代わりに[代替案]ならできるよ。」'
      },
      bridgeAttachTitle: '愛着反応セルフチェック', bridgeAttachDesc: '10の場面であなたの愛着反応パターンを非公開で振り返ります。',
      bridgeRsdTitle: 'RSD拒絶感受性チェック', bridgeRsdDesc: '90秒クールダウンで拒絶アラームを穏やかに整えます。',
      bridgeCbtTitle: 'CBT認知の歪みリフレーマー', bridgeCbtDesc: '事実と心の読みすぎをソクラテス質問で整理します。',
      stickyTitle: '自分の愛着反応パターンを知る', stickySub: '無料10問の非公開愛着セルフチェック', stickyBtn: '愛着チェック →',
      privacy: 'プライバシーポリシー', terms: '利用規約'
    },
    zh: {
      title: '依恋触发解码器与安全沟通脚本 | DopaBrain',
      metaDesc: '免费 12 语言依恋触发解码与安全型对话脚本生成器。将焦虑追问或回避退缩转化为清晰、不指责的关系边界表达。',
      skip: '跳转到脚本生成器', back: '← 工具目录', langLabel: '语言：',
      kicker: '安全型关系沟通工作台', heroTitle: '依恋触发解码与安全脚本',
      heroLead: '在追问或冷战之前先停一下。读懂触发背后的神经系统需求，几秒内生成冷静清晰的非指责沟通语句。',
      chip1: '6 大关系触发点', chip2: '4 种依恋冲动', chip3: '100% 本地私密',
      step1Badge: '第 1 步 • 识别触发情境', step1Title: '刚才关系中发生了什么？', step1Sub: '选择此刻引发紧张的时刻。',
      step2Badge: '第 2 步 • 察觉自动保护冲动', step2Title: '你的防御本能现在想做什么？', step2Sub: '辨认是焦虑抗议、回避抽离、推拉过载还是安全修复。',
      contextLabel: '可选私密备注（如讨论主题——仅保存在本地浏览器）：', contextPlaceholder: '例如：周末安排 / 回复延迟',
      generateBtn: '生成安全修复脚本', resetBtn: '重置',
      resultBadge: '第 3 步 • 安全型沟通蓝图',
      meterConnect: '连接确认紧迫度', meterAutonomy: '自主边界保护度',
      needTitle: '底层神经系统需求', scriptTitle: '可直接发送的安全脚本', stepsTitle: '3 步稳态调节建议',
      storyBtn: '保存 1080×1920 分享卡片 (PNG)', copyBtn: '复制脚本', shareBtn: '分享工具',
      copied: '安全沟通脚本已复制！', cardSaved: '1080×1920 分享卡片已下载！',
      topicPrefix: '关于：',
      triggers: {
        silence: ['⏳ 回复延迟 / 沉默', '消息比平时安静得更久。'],
        conflict: ['⚡ 冲突骤然升级', '分歧中情绪迅速紧张。'],
        space: ['🌿 对方需要独处空间', '对方提出需要时间独自充电。'],
        expectation: ['🧩 未说出口的期待', '希望被理解却尚未明确表达需求。'],
        repair: ['🤝 争吵后温和修复', '想在摩擦之后重新建立平静连接。'],
        boundary: ['🛡️ 设立清晰健康边界', '在保持善意的同时温和拒绝。']
      },
      impulses: {
        anxious: ['🔥 焦虑型追问冲动', '想连发消息、立刻要确认或试探对方态度。'],
        avoidant: ['🧊 回避型抽离冲动', '想突然沉默、淡化感受或关闭情感通道。'],
        disorganized: ['🌪️ 推拉过载', '既渴望靠近又害怕受伤，两种冲动拉扯。'],
        secure: ['🌱 平静安全修复', '准备好表达事实、感受与清晰请求。']
      },
      profiles: {
        anxious: ['焦虑追问 → 温和直接的请求', '断联恐惧正在催促你立刻得到确定感。用一句坦诚温和的请求替代试探，能大幅减少摩擦。', '你的神经系统渴望可预期的情感安抚，而非完美回应。', ['发消息前先放下手机缓慢呼气 3 次。', '表达自身感受（“我刚才有点不安”）而非指责动机。', '提出一个具体、低压力且有时间参考的小请求。']],
        avoidant: ['回避抽离 → 附带回归时间的呼吸空间', '压力升高时，你习惯通过沉默保护自主权。说明何时回来能让空间不再像抛弃。', '你需要不受压迫的自主喘息，同时保住彼此信任。', ['用简短的回归时间锚点替代突然消失。', '同时说明你在乎这段关系，且需要短暂整理。', '在约定时间主动联系以强化安全感。']],
        disorganized: ['推拉过载 → 放慢节奏建立安全锚点', '靠近与距离此刻都带来强烈刺激。放慢速度，聚焦一个微小事实步骤即可避免情绪过山车。', '你需要不带指责的情绪安全与可预期节奏。', ['暂停追问与抽离各 10 分钟。', '诚实表达自己有点过载，但不责怪对方。', '约定平静沟通的时间，不强求立刻解决。']],
        secure: ['稳健安全对齐', '你已准备好兼顾温暖与清晰边界。保持简短、具体、合作的表达。', '相互尊重、清晰期待与稳定安全感。', ['先肯定关系或共同目标。', '用两句话清晰描述事实与请求。', '开放邀请对方分享视角。']]
      },
      scripts: {
        silence: '“嗨，刚才安静了一阵我发现自己有点多想。完全不急，你忙完方便时告诉我什么时候有空聊两句就好。”',
        conflict: '“我很在乎我们，不想在情绪上头时互相伤害。我们先各自冷静 20 分钟，[时间] 再平和地聊可以吗？”',
        space: '“谢谢你坦诚告诉我需要空间充电。你安心休息，准备好时今晚或明天再联系我。”',
        expectation: '“我意识到自己一直在等对方猜我的想法。现在最能让我感到被支持的是 [具体做法]。”',
        repair: '“冷静下来后，我想修复而不是疏远。刚才我语气急了抱歉，你方便时我们心平气和聊聊好吗？”',
        boundary: '“我很珍惜我们的关系，所以想坦诚说明：今天我精力有限没法答应这件事，不过我可以做到 [替代方案]。”'
      },
      bridgeAttachTitle: '依恋反应自测', bridgeAttachDesc: '通过 10 个情境私密探索你的依恋反应模式。',
      bridgeRsdTitle: '拒绝敏感 (RSD) 自测', bridgeRsdDesc: '用 90 秒躯体降温计时器缓和拒绝警报。',
      bridgeCbtTitle: 'CBT 认知扭曲重构器', bridgeCbtDesc: '将关系事实与读心术猜测清晰分开。',
      stickyTitle: '探索你的依恋反应模式', stickySub: '免费 10 题私密依恋反思测试', stickyBtn: '依恋自测 →',
      privacy: '隐私政策', terms: '使用条款'
    }
  };

  var EXTRA_LOC = {
    es: {
      title: 'Decodificador de Disparadores de Apego y Guiones Seguros | DopaBrain',
      metaDesc: 'Traduce la urgencia ansiosa o la distancia evitativa en mensajes claros y seguros en 12 idiomas.',
      skip: 'Ir al generador de guiones', back: '← Catálogo de herramientas', langLabel: 'Idioma:',
      kicker: 'COMUNICACIÓN DE APEGO SEGURO', heroTitle: 'Decodificador de Apego y Guiones',
      heroLead: 'Haz una pausa antes de perseguir o desconectarte. Traduce tu disparador en un mensaje claro y sin reproches.',
      chip1: '6 Disparadores Clave', chip2: '4 Impulsos de Apego', chip3: '100% Privado (Local)',
      step1Badge: 'PASO 1 • IDENTIFICA EL DISPARADOR', step1Title: '¿Qué ocurrió en la relación?', step1Sub: 'Elige el momento que activó la tensión.',
      step2Badge: 'PASO 2 • DETECTA TU IMPULSO', step2Title: '¿Qué quiere hacer tu instinto protector?', step2Sub: 'Reconoce protesta ansiosa, desactivación evitativa, vaivén o reparación calma.',
      contextLabel: 'Nota privada opcional (solo en este navegador):', contextPlaceholder: 'Ejemplo: planes del fin de semana',
      generateBtn: 'Crear Guion Seguro', resetBtn: 'Reiniciar',
      resultBadge: 'PASO 3 • PLAN DE COMUNICACIÓN SEGURA', meterConnect: 'Urgencia de Conexión', meterAutonomy: 'Protección de Autonomía',
      needTitle: 'Necesidad del Sistema Nervioso', scriptTitle: 'Guion Seguro Listo para Enviar', stepsTitle: '3 Pasos de Regulación',
      storyBtn: 'Guardar Tarjeta 1080×1920 (PNG)', copyBtn: 'Copiar Guion', shareBtn: 'Compartir',
      copied: '¡Guion seguro copiado!', cardSaved: '¡Tarjeta 1080×1920 descargada!', topicPrefix: 'Sobre: ',
      bridgeAttachTitle: 'Reflexión de Estilo de Apego', bridgeAttachDesc: 'Explora 10 escenarios privados de apego.',
      bridgeRsdTitle: 'Auditoría RSD', bridgeRsdDesc: 'Calma picos de rechazo con pausa de 90 segundos.',
      bridgeCbtTitle: 'Reencuadre CBT', bridgeCbtDesc: 'Separa hechos reales de la lectura de mente.',
      stickyTitle: 'Explora tu patrón de apego', stickySub: 'Reflexión gratuita de 10 escenarios', stickyBtn: 'Reflexión Apego →',
      privacy: 'Privacidad', terms: 'Términos'
    },
    pt: {
      title: 'Decodificador de Gatilhos de Apego e Scripts Seguros | DopaBrain',
      metaDesc: 'Transforme protesto ansioso ou afastamento evitativo em mensagens claras e seguras localmente.',
      skip: 'Ir para o criador de scripts', back: '← Catálogo de Ferramentas', langLabel: 'Idioma:',
      kicker: 'COMUNICAÇÃO DE APEGO SEGURO', heroTitle: 'Decodificador de Gatilhos de Apego',
      heroLead: 'Pause antes de insistir ou se fechar. Decodifique sua necessidade emocional e gere uma mensagem segura.',
      chip1: '6 Gatilhos Centrais', chip2: '4 Impulsos de Apego', chip3: '100% Privado (Local)',
      step1Badge: 'PASSO 1 • IDENTIFIQUE O GATILHO', step1Title: 'O que aconteceu no relacionamento?', step1Sub: 'Escolha o momento que ativou a tensão.',
      step2Badge: 'PASSO 2 • NOTE SEU IMPULSO', step2Title: 'O que seu instinto protetor quer fazer?', step2Sub: 'Identifique protesto ansioso, desativação evitativa, vai-e-vem ou reparo.',
      contextLabel: 'Nota privada opcional (fica no navegador):', contextPlaceholder: 'Exemplo: planos de fim de semana',
      generateBtn: 'Gerar Script Seguro', resetBtn: 'Reiniciar',
      resultBadge: 'PASSO 3 • ROTEIRO DE COMUNICAÇÃO SEGURA', meterConnect: 'Urgência de Conexão', meterAutonomy: 'Proteção de Autonomia',
      needTitle: 'Necessidade Emocional Subjacente', scriptTitle: 'Script Seguro Pronto para Enviar', stepsTitle: '3 Passos de Regulação',
      storyBtn: 'Salvar Cartão 1080×1920 (PNG)', copyBtn: 'Copiar Script', shareBtn: 'Compartilhar',
      copied: 'Script seguro copiado!', cardSaved: 'Cartão 1080×1920 baixado!', topicPrefix: 'Sobre: ',
      bridgeAttachTitle: 'Reflexão de Apego', bridgeAttachDesc: 'Explore 10 cenários privados de apego.',
      bridgeRsdTitle: 'Auditoria RSD', bridgeRsdDesc: 'Acalme gatilhos de rejeição em 90 segundos.',
      bridgeCbtTitle: 'Reenquadramento TCC', bridgeCbtDesc: 'Separe fatos de suposições mentais.',
      stickyTitle: 'Explore seu padrão de apego', stickySub: 'Reflexão privada gratuita de 10 cenários', stickyBtn: 'Reflexão Apego →',
      privacy: 'Privacidade', terms: 'Termos'
    },
    de: {
      title: 'Bindungs-Trigger-Decoder & Sichere Skripte | DopaBrain',
      metaDesc: 'Wandle ängstlichen Protest oder vermeidenden Rückzug in klare, ruhige Bindungs-Botschaften um.',
      skip: 'Zum Skript-Builder', back: '← Tool-Katalog', langLabel: 'Sprache:',
      kicker: 'SICHERE BEZIEHUNGSKOMMUNIKATION', heroTitle: 'Bindungs-Trigger-Decoder & Skripte',
      heroLead: 'Halte inne, bevor du nachhakst oder dich verschließt. Erkenne das Bedürfnis hinter dem Trigger und erstelle eine ruhige Nachricht.',
      chip1: '6 Kern-Trigger', chip2: '4 Bindungs-Impulse', chip3: '100% Privat (Lokal)',
      step1Badge: 'SCHRITT 1 • TRIGGER ERKENNEN', step1Title: 'Was ist gerade in der Beziehung passiert?', step1Sub: 'Wähle die Situation, die Spannung ausgelöst hat.',
      step2Badge: 'SCHRITT 2 • SCHUTZIMPULS SPÜREN', step2Title: 'Was will dein Schutzinstinkt jetzt tun?', step2Sub: 'Erkenne Protest, Rückzug, Hin-und-Her oder ruhige Klärung.',
      contextLabel: 'Optionale private Notiz (bleibt lokal):', contextPlaceholder: 'Beispiel: Wochenendpläne',
      generateBtn: 'Sicheres Skript erstellen', resetBtn: 'Zurücksetzen',
      resultBadge: 'SCHRITT 3 • SICHERER KOMMUNIKATIONSPLAN', meterConnect: 'Verbindungsdrang', meterAutonomy: 'Autonomieschutz',
      needTitle: 'Zugrundeliegendes Bedürfnis', scriptTitle: 'Versandbereites sicheres Skript', stepsTitle: '3 Erdungs-Schritte',
      storyBtn: '1080×1920 Story-Karte speichern (PNG)', copyBtn: 'Skript kopieren', shareBtn: 'Teilen',
      copied: 'Skript kopiert!', cardSaved: '1080×1920 Story-Karte heruntergeladen!', topicPrefix: 'Thema: ',
      bridgeAttachTitle: 'Bindungs-Reflexion', bridgeAttachDesc: 'Entdecke dein Bindungsmuster in 10 Szenarien.',
      bridgeRsdTitle: 'RSD-Sensitivitäts-Audit', bridgeRsdDesc: 'Beruhige Ablehnungsstress in 90 Sekunden.',
      bridgeCbtTitle: 'KVT-Reframer', bridgeCbtDesc: 'Trenne Fakten klar vom Gedankenlesen.',
      stickyTitle: 'Prüfe dein Bindungsmuster', stickySub: 'Kostenlose 10-Szenarien-Reflexion', stickyBtn: 'Bindungstest →',
      privacy: 'Datenschutz', terms: 'Nutzungsbedingungen'
    },
    fr: {
      title: 'Décodeur de Déclencheurs d’Attachement & Scripts | DopaBrain',
      metaDesc: 'Transformez la protestation anxieuse ou le retrait évitant en messages clairs et sécurisants.',
      skip: 'Aller aux scripts', back: '← Catalogue d’outils', langLabel: 'Langue :',
      kicker: 'COMMUNICATION SÉCURE', heroTitle: 'Décodeur d’Attachement & Scripts',
      heroLead: 'Faites une pause avant d’insister ou de vous fermer. Décodez le besoin sous-jacent et formulez un message apaisé.',
      chip1: '6 Déclencheurs Clés', chip2: '4 Réflexes d’Attachement', chip3: '100% Privé (Local)',
      step1Badge: 'ÉTAPE 1 • IDENTIFIER LE DÉCLENCHEUR', step1Title: 'Que vient-il de se passer ?', step1Sub: 'Choisissez le moment qui a déclenché la tension.',
      step2Badge: 'ÉTAPE 2 • REPÉRER L’IMPULSION', step2Title: 'Que veut faire votre instinct protecteur ?', step2Sub: 'Repérez protestation anxieuse, retrait évitant, va-et-vient ou réparation.',
      contextLabel: 'Note privée facultative (reste locale) :', contextPlaceholder: 'Exemple : plans du week-end',
      generateBtn: 'Créer un Script Sécure', resetBtn: 'Réinitialiser',
      resultBadge: 'ÉTAPE 3 • PLAN DE COMMUNICATION SÉCURE', meterConnect: 'Urgence de Connexion', meterAutonomy: 'Protection d’Autonomie',
      needTitle: 'Besoin Fondamental', scriptTitle: 'Script Sécure Prêt à Envoyer', stepsTitle: '3 Étapes de Régulation',
      storyBtn: 'Enregistrer Carte 1080×1920 (PNG)', copyBtn: 'Copier le Script', shareBtn: 'Partager',
      copied: 'Script copié !', cardSaved: 'Carte 1080×1920 téléchargée !', topicPrefix: 'Sujet : ',
      bridgeAttachTitle: 'Réflexion d’Attachement', bridgeAttachDesc: 'Explorez 10 scénarios privés d’attachement.',
      bridgeRsdTitle: 'Audit RSD', bridgeRsdDesc: 'Apaisez les pics de rejet en 90 secondes.',
      bridgeCbtTitle: 'Recadrage TCC', bridgeCbtDesc: 'Séparez faits observables et lecture de pensée.',
      stickyTitle: 'Explorez votre style d’attachement', stickySub: 'Réflexion gratuite en 10 scénarios', stickyBtn: 'Test Attachement →',
      privacy: 'Confidentialité', terms: 'Conditions'
    },
    ru: {
      title: 'Декодер триггеров привязанности и скрипты общения | DopaBrain',
      metaDesc: 'Превратите тревожную погоню или избегающее молчание в спокойные и ясные сообщения.',
      skip: 'К конструктору скриптов', back: '← Каталог инструментов', langLabel: 'Язык:',
      kicker: 'НАДЕЖНАЯ КОММУНИКАЦИЯ', heroTitle: 'Декодер триггеров привязанности',
      heroLead: 'Остановитесь перед навязчивыми сообщениями или уходом в тишину. Получите спокойный скрипт без обвинений.',
      chip1: '6 ключевых триггеров', chip2: '4 импульса привязанности', chip3: '100% приватно',
      step1Badge: 'ШАГ 1 • ВЫБЕРИТЕ ТРИГГЕР', step1Title: 'Что произошло в отношениях?', step1Sub: 'Выберите момент, вызвавший напряжение.',
      step2Badge: 'ШАГ 2 • ЗАМЕТЬТЕ ИМПУЛЬС', step2Title: 'Что хочет сделать защитная реакция?', step2Sub: 'Определите тревожный протест, избегание, качели или спокойный диалог.',
      contextLabel: 'Личная заметка (только в браузере):', contextPlaceholder: 'Пример: планы на выходные',
      generateBtn: 'Создать надежный скрипт', resetBtn: 'Сбросить',
      resultBadge: 'ШАГ 3 • СХЕМА НАДЕЖНОГО ДИАЛОГА', meterConnect: 'Потребность в близости', meterAutonomy: 'Защита автономии',
      needTitle: 'Глубинная потребность нервной системы', scriptTitle: 'Готовый спокойный скрипт', stepsTitle: '3 шага саморегуляции',
      storyBtn: 'Сохранить карточку 1080×1920 (PNG)', copyBtn: 'Копировать скрипт', shareBtn: 'Поделиться',
      copied: 'Скрипт скопирован!', cardSaved: 'Карточка 1080×1920 сохранена!', topicPrefix: 'Тема: ',
      bridgeAttachTitle: 'Рефлексия типа привязанности', bridgeAttachDesc: '10 приватных сценариев оценки реакций.',
      bridgeRsdTitle: 'Аудит RSD', bridgeRsdDesc: '90-секундная пауза при остром чувстве отказа.',
      bridgeCbtTitle: 'КПТ-рефреймер', bridgeCbtDesc: 'Отделите факты от «чтения мыслей».',
      stickyTitle: 'Изучите свой паттерн привязанности', stickySub: 'Бесплатный разбор 10 сценариев', stickyBtn: 'Тест привязанности →',
      privacy: 'Конфиденциальность', terms: 'Условия'
    },
    hi: {
      title: 'अटैचमेंट ट्रिगर डिकोडर और सुरक्षित स्क्रिप्ट बिल्डर | DopaBrain',
      metaDesc: 'रिश्तों में बेचैनी या दूरी को शांत, स्पष्ट और सुरक्षित संवाद स्क्रिप्ट में बदलें।',
      skip: 'स्क्रिप्ट बिल्डर पर जाएं', back: '← टूल कैटलॉग', langLabel: 'भाषा:',
      kicker: 'सुरक्षित संवाद कार्यक्षेत्र', heroTitle: 'अटैचमेंट ट्रिगर डिकोडर और स्क्रिप्ट',
      heroLead: 'पीछा करने या चुप होने से पहले रुकें। ट्रिगर के पीछे की भावनात्मक ज़रूरत समझें और शांत संदेश बनाएं।',
      chip1: '6 मुख्य ट्रिगर', chip2: '4 अटैचमेंट आवेग', chip3: '100% निजी (लोकल)',
      step1Badge: 'चरण 1 • ट्रिगर पहचानें', step1Title: 'रिश्ते में अभी क्या हुआ?', step1Sub: 'तनाव पैदा करने वाला क्षण चुनें।',
      step2Badge: 'चरण 2 • स्वतः आवेग पहचानें', step2Title: 'आपकी रक्षात्मक प्रतिक्रिया क्या करना चाहती है?', step2Sub: 'चिंता, दूरी, उलझन या शांत सुधार चुनें।',
      contextLabel: 'वैकल्पिक निजी नोट (केवल ब्राउज़र में):', contextPlaceholder: 'उदाहरण: सप्ताहांत की योजना',
      generateBtn: 'सुरक्षित स्क्रिप्ट बनाएं', resetBtn: 'रीसेट',
      resultBadge: 'चरण 3 • सुरक्षित संवाद योजना', meterConnect: 'जुड़ाव की तात्कालिकता', meterAutonomy: 'स्वतंत्रता संरक्षण',
      needTitle: 'मूल भावनात्मक आवश्यकता', scriptTitle: 'भेजने के लिए तैयार सुरक्षित स्क्रिप्ट', stepsTitle: '3 शांत अभ्यास कदम',
      storyBtn: '1080×1920 स्टोरी कार्ड सेव करें (PNG)', copyBtn: 'स्क्रिप्ट कॉपी करें', shareBtn: 'शेयर करें',
      copied: 'स्क्रिप्ट कॉपी हो गई!', cardSaved: '1080×1920 कार्ड डाउनलोड हो गया!', topicPrefix: 'विषय: ',
      bridgeAttachTitle: 'अटैचमेंट रिफ़्लेक्शन', bridgeAttachDesc: '10 निजी परिदृश्यों से अपनी शैली समझें।',
      bridgeRsdTitle: 'RSD ऑडिट', bridgeRsdDesc: '90 सेकंड के शांत टाइमर से घबराहट कम करें।',
      bridgeCbtTitle: 'CBT विकृति रीफ़्रेमर', bridgeCbtDesc: 'तथ्यों को अनुमान से अलग करें।',
      stickyTitle: 'अपना अटैचमेंट पैटर्न जानें', stickySub: 'निःशुल्क 10-परिदृश्य निजी मूल्यांकन', stickyBtn: 'अटैचमेंट टेस्ट →',
      privacy: 'गोपनीयता नीति', terms: 'नियम'
    },
    id: {
      title: 'Dekoder Pemicu Kelekatan & Pembuat Skrip Aman | DopaBrain',
      metaDesc: 'Ubah dorongan cemas atau menarik diri menjadi pesan batasan hubungan yang jelas dan tenang.',
      skip: 'Lanjut ke Pembuat Skrip', back: '← Katalog Alat', langLabel: 'Bahasa:',
      kicker: 'RUANG KOMUNIKASI AMAN', heroTitle: 'Dekoder Pemicu Kelekatan & Skrip',
      heroLead: 'Berhenti sejenak sebelum mengejar atau menutup diri. Pahami kebutuhan sistem saraf Anda dan susun pesan aman.',
      chip1: '6 Pemicu Inti', chip2: '4 Impuls Kelekatan', chip3: '100% Privat (Lokal)',
      step1Badge: 'LANGKAH 1 • KENALI PEMICU', step1Title: 'Apa yang baru terjadi dalam hubungan?', step1Sub: 'Pilih momen yang memicu ketegangan.',
      step2Badge: 'LANGKAH 2 • AMATI IMPULS', step2Title: 'Apa yang ingin dilakukan insting perlindungan Anda?', step2Sub: 'Kenali protes cemas, menarik diri, tarik-ulur, atau perbaikan tenang.',
      contextLabel: 'Catatan pribadi opsional (tetap lokal):', contextPlaceholder: 'Contoh: rencana akhir pekan',
      generateBtn: 'Buat Skrip Aman', resetBtn: 'Reset',
      resultBadge: 'LANGKAH 3 • RANCANGAN KOMUNIKASI AMAN', meterConnect: 'Urgensi Koneksi', meterAutonomy: 'Perlindungan Otonomi',
      needTitle: 'Kebutuhan Sistem Saraf Mendasar', scriptTitle: 'Skrip Aman Siap Kirim', stepsTitle: '3 Langkah Regulasi',
      storyBtn: 'Simpan Kartu 1080×1920 (PNG)', copyBtn: 'Salin Skrip', shareBtn: 'Bagikan',
      copied: 'Skrip aman disalin!', cardSaved: 'Kartu 1080×1920 diunduh!', topicPrefix: 'Topik: ',
      bridgeAttachTitle: 'Refleksi Gaya Kelekatan', bridgeAttachDesc: 'Jelajahi 10 skenario respons kelekatan secara privat.',
      bridgeRsdTitle: 'Audit RSD', bridgeRsdDesc: 'Redakan alarm penolakan dengan timer 90 detik.',
      bridgeCbtTitle: 'Reframer Distorsi CBT', bridgeCbtDesc: 'Pisahkan fakta dari asumsi membaca pikiran.',
      stickyTitle: 'Kenali pola kelekatan Anda', stickySub: 'Refleksi privat gratis 10 skenario', stickyBtn: 'Tes Kelekatan →',
      privacy: 'Kebijakan Privasi', terms: 'Ketentuan'
    },
    tr: {
      title: 'Bağlanma Tetikleyici Çözücü ve Güvenli Mesaj Oluşturucu | DopaBrain',
      metaDesc: 'Kaygılı ısrarı veya kaçıngan geri çekilmeyi sakin, net ve güvenli iletişim metinlerine dönüştürün.',
      skip: 'Metin Oluşturucuya Geç', back: '← Araç Kataloğu', langLabel: 'Dil:',
      kicker: 'GÜVENLİ İLETİŞİM ALANI', heroTitle: 'Bağlanma Tetikleyici Çözücü',
      heroLead: 'Israr etmeden ya da kapanmadan önce durun. Tetikleyicinin ardındaki ihtiyacı çözün ve sakin bir mesaj oluşturun.',
      chip1: '6 Temel Tetikleyici', chip2: '4 Bağlanma Dürtüsü', chip3: '%100 Gizli (Yerel)',
      step1Badge: 'ADIM 1 • TETİKLEYİCİYİ SEÇİN', step1Title: 'İlişkide az önce ne oldu?', step1Sub: 'Gerilimi başlatan anı seçin.',
      step2Badge: 'ADIM 2 • DÜRTÜYÜ FARK EDİN', step2Title: 'Koruyucu içgüdünüz ne yapmak istiyor?', step2Sub: 'Kaygılı protesto, kaçıngan kapanma, it-çek veya sakin onarımı seçin.',
      contextLabel: 'İsteğe bağlı özel not (yerel kalır):', contextPlaceholder: 'Örn: hafta sonu planı',
      generateBtn: 'Güvenli Mesaj Oluştur', resetBtn: 'Sıfırla',
      resultBadge: 'ADIM 3 • GÜVENLİ İLETİŞİM PLANI', meterConnect: 'Bağlantı Aciliyeti', meterAutonomy: 'Özerklik Koruması',
      needTitle: 'Altta Yatan Sinir Sistemi İhtiyacı', scriptTitle: 'Göndermeye Hazır Güvenli Metin', stepsTitle: '3 Sakinleşme Adımı',
      storyBtn: '1080×1920 Hikaye Kartı Kaydet (PNG)', copyBtn: 'Metni Kopyala', shareBtn: 'Paylaş',
      copied: 'Güvenli metin kopyalandı!', cardSaved: '1080×1920 Hikaye Kartı indirildi!', topicPrefix: 'Konu: ',
      bridgeAttachTitle: 'Bağlanma Tepki Testi', bridgeAttachDesc: '10 senaryoda bağlanma eğilimlerinizi keşfedin.',
      bridgeRsdTitle: 'RSD Denetimi', bridgeRsdDesc: '90 saniyelik somatik mola ile reddedilme alarmını yatıştırın.',
      bridgeCbtTitle: 'BDT Çarpıtma Yeniden Çerçeveleyici', bridgeCbtDesc: 'Gerçekleri zihin okumadan ayırın.',
      stickyTitle: 'Bağlanma tepki kalıbınızı keşfedin', stickySub: 'Ücretsiz 10 senaryolu gizli değerlendirme', stickyBtn: 'Bağlanma Testi →',
      privacy: 'Gizlilik Politikası', terms: 'Koşullar'
    }
  };

  Object.keys(EXTRA_LOC).forEach(function (k) {
    T[k] = Object.assign({}, T.en, EXTRA_LOC[k]);
  });

  var currentLang = 'en';
  var selectedTrigger = 'silence';
  var selectedImpulse = 'anxious';
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
        tool_slug: 'attachment-trigger-decoder',
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

  function renderGrids() {
    var d = dict(currentLang);
    var tGrid = document.getElementById('triggerGrid');
    var iGrid = document.getElementById('impulseGrid');
    if (tGrid) {
      tGrid.innerHTML = '';
      TRIGGER_IDS.forEach(function (id) {
        var info = (d.triggers && d.triggers[id]) || T.en.triggers[id];
        var isOn = selectedTrigger === id;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'toggle-card' + (isOn ? ' is-selected' : '');
        btn.setAttribute('data-trigger', id);
        btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
        var t1 = document.createElement('span'); t1.className = 'toggle-card-title'; t1.textContent = info[0];
        var t2 = document.createElement('span'); t2.className = 'toggle-card-desc'; t2.textContent = info[1];
        btn.appendChild(t1); btn.appendChild(t2);
        btn.addEventListener('click', function () {
          selectedTrigger = id;
          renderGrids();
          saveState(false);
        });
        tGrid.appendChild(btn);
      });
    }
    if (iGrid) {
      iGrid.innerHTML = '';
      IMPULSE_IDS.forEach(function (id) {
        var info = (d.impulses && d.impulses[id]) || T.en.impulses[id];
        var isOn = selectedImpulse === id;
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'toggle-card' + (isOn ? ' is-selected' : '');
        btn.setAttribute('data-impulse', id);
        btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
        var t1 = document.createElement('span'); t1.className = 'toggle-card-title'; t1.textContent = info[0];
        var t2 = document.createElement('span'); t2.className = 'toggle-card-desc'; t2.textContent = info[1];
        btn.appendChild(t1); btn.appendChild(t2);
        btn.addEventListener('click', function () {
          selectedImpulse = id;
          renderGrids();
          saveState(false);
        });
        iGrid.appendChild(btn);
      });
    }
  }

  function updateLinks() {
    var lang = currentLang;
    var back = document.getElementById('backLink');
    if (back) back.setAttribute('href', '/portal/tools/?lang=' + lang);
    [
      ['bridgeAttach', '/attachment-style/?lang=' + lang + '&source=attachment_decoder_bridge'],
      ['bridgeRsd', '/portal/tools/rsd-coping-audit.html?lang=' + lang + '&source=attachment_decoder_bridge'],
      ['bridgeCbt', '/portal/tools/cognitive-distortion-reframer.html?lang=' + lang + '&source=attachment_decoder_bridge']
    ].forEach(function (pair) {
      var el = document.getElementById(pair[0]);
      if (el) el.setAttribute('href', pair[1]);
    });
    var sticky = document.querySelector('.revenue-sticky-cta');
    if (sticky) sticky.setAttribute('href', '/attachment-style/?lang=' + lang + '&source=attachment_decoder_sticky');
  }

  function buildScript(isUserAction) {
    var d = dict(currentLang);
    var prof = (d.profiles && d.profiles[selectedImpulse]) || T.en.profiles[selectedImpulse];
    var baseScript = (d.scripts && d.scripts[selectedTrigger]) || T.en.scripts[selectedTrigger];
    var meters = METERS[selectedImpulse] || [50, 50];
    var note = (document.getElementById('contextInput')?.value || '').trim();

    document.getElementById('verdictTitle').textContent = prof[0];
    document.getElementById('verdictDesc').textContent = prof[1];
    document.getElementById('pctConnect').textContent = meters[0] + '%';
    document.getElementById('barConnect').style.width = meters[0] + '%';
    document.getElementById('pctAutonomy').textContent = meters[1] + '%';
    document.getElementById('barAutonomy').style.width = meters[1] + '%';
    document.getElementById('needText').textContent = prof[2];

    // XSS-safe: textContent only
    var fullScript = note ? ('[' + (d.topicPrefix || 'Regarding ') + note + '] ' + baseScript) : baseScript;
    document.getElementById('secureScript').textContent = fullScript;

    var ul = document.getElementById('stepsList');
    ul.innerHTML = '';
    prof[3].forEach(function (s) {
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
        sendSafeEvent('attachment_decoder_complete');
      }
    }
    saveState(true);
  }

  function saveState(completed) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        trigger: selectedTrigger,
        impulse: selectedImpulse,
        note: (document.getElementById('contextInput')?.value || '').slice(0, 120),
        completed: Boolean(completed || (document.getElementById('resultCard') && !document.getElementById('resultCard').hidden))
      }));
    } catch (e) {}
  }

  function restoreState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      if (parsed && TRIGGER_IDS.indexOf(parsed.trigger) !== -1) selectedTrigger = parsed.trigger;
      if (parsed && IMPULSE_IDS.indexOf(parsed.impulse) !== -1) selectedImpulse = parsed.impulse;
      if (parsed && typeof parsed.note === 'string') {
        var inp = document.getElementById('contextInput');
        if (inp) inp.value = parsed.note;
      }
      renderGrids();
      if (parsed && parsed.completed) buildScript(false);
    } catch (e) {}
  }

  function resetAll() {
    selectedTrigger = 'silence';
    selectedImpulse = 'anxious';
    var inp = document.getElementById('contextInput');
    if (inp) inp.value = '';
    var card = document.getElementById('resultCard');
    if (card) card.hidden = true;
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    renderGrids();
    sendSafeEvent('attachment_decoder_reset');
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
    var inp = document.getElementById('contextInput');
    if (inp) inp.placeholder = d.contextPlaceholder;
    var sel = document.getElementById('langSelect');
    if (sel) sel.value = currentLang;

    renderGrids();
    updateLinks();
    var card = document.getElementById('resultCard');
    if (card && !card.hidden) buildScript(false);
  }

  function downloadCard() {
    var d = dict(currentLang);
    if (!window.DopaBrainStoryCard) return;
    var meters = METERS[selectedImpulse] || [50, 50];
    var ok = window.DopaBrainStoryCard.downloadStoryCard({
      slug: 'attachment-trigger-decoder',
      badge: d.kicker,
      emoji: '🤝',
      toolName: d.heroTitle,
      headline: document.getElementById('verdictTitle')?.textContent || '',
      subtitle: document.getElementById('needText')?.textContent || '',
      accent: '#10b981',
      accent2: '#3b82f6',
      metrics: [
        { label: d.meterConnect, pct: meters[0], color: '#34d399' },
        { label: d.meterAutonomy, pct: meters[1], color: '#60a5fa' }
      ],
      takeawayLabel: d.scriptTitle,
      takeaway: document.getElementById('secureScript')?.textContent || '',
      footerUrl: 'dopabrain.com/portal/tools/attachment-trigger-decoder.html'
    });
    if (ok) showToast(d.cardSaved);
  }

  function copyScript() {
    var d = dict(currentLang);
    var text = document.getElementById('secureScript')?.textContent || '';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { showToast(d.copied); }).catch(function () {});
    } else {
      showToast(d.copied);
    }
  }

  function shareTool() {
    var d = dict(currentLang);
    var url = 'https://dopabrain.com/portal/tools/attachment-trigger-decoder.html?lang=' + currentLang;
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
    sendSafeEvent('attachment_decoder_view');

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

    document.getElementById('generateBtn')?.addEventListener('click', function () { buildScript(true); });
    document.getElementById('resetBtn')?.addEventListener('click', resetAll);
    document.getElementById('storyBtn')?.addEventListener('click', downloadCard);
    document.getElementById('copyBtn')?.addEventListener('click', copyScript);
    document.getElementById('shareBtn')?.addEventListener('click', shareTool);
  });
})();
