(function() {
  'use strict';

  const I18N = {
    en: {
      title: "Cognitive Load & Brain Fog Calculator | DopaBrain",
      metaDesc: "Free Cognitive Load & Brain Fog Assessment. Measure mental RAM usage, working memory strain, and prefrontal fatigue with actionable neural decompression protocols.",
      skip: "Skip to Assessment",
      back: "← Tools Catalog",
      langLabel: "Language:",
      kicker: "NEURAL CAPACITY & WORKING MEMORY SCREENER",
      heroTitle: "Cognitive Load & Brain Fog Calculator",
      heroLead: "Is your brain out of RAM? Measure executive friction, context-switching fatigue, and working memory saturation with real-time capacity diagnostics.",
      chip1: "6 Cognitive Vectors",
      chip2: "Live RAM & Battery Telemetry",
      chip3: "Sweller CLT Framework",
      ramLabel: "Mental RAM Usage:",
      batteryLabel: "Cognitive Battery:",
      q1Title: "Task Fragmentation & Open Tabs",
      q1Opt1: "1-3 focused windows",
      q1Opt2: "Moderate multi-tasking",
      q1Opt3: "15+ tabs & rapid switching",
      q1Opt4: "Severe tab paralysis & chaos",
      q2Title: "Focus Retention & Mental Fog",
      q2Opt1: "Crisp, fluid attention",
      q2Opt2: "Occasional rereading",
      q2Opt3: "Dense fog & rapid drift",
      q2Opt4: "Cannot hold a single thought",
      q3Title: "Working Memory Holding Capacity",
      q3Opt1: "Hold details easily",
      q3Opt2: "Forget small errands",
      q3Opt3: "Lose train of thought mid-sentence",
      q3Opt4: "Severe buffer overflow",
      q4Title: "Decision Friction & Micro-Choices",
      q4Opt1: "Decisive and effortless",
      q4Opt2: "Minor hesitation on options",
      q4Opt3: "Trivial choices feel exhausting",
      q4Opt4: "Total analysis paralysis",
      q5Title: "Sensory & Notification Strain",
      q5Opt1: "Calm background environment",
      q5Opt2: "Noticeable alerts & pings",
      q5Opt3: "Auditory & visual irritation",
      q5Opt4: "Complete sensory flooding",
      q6Title: "Task Initiation Resistance (ADHD Friction)",
      q6Opt1: "Start immediately on demand",
      q6Opt2: "Needs brief ramp-up warm up",
      q6Opt3: "Severe staring & dread",
      q6Opt4: "Frozen: cannot click start",
      verdictBadge: "COGNITIVE LOAD DIAGNOSIS",
      m1Title: "Mental RAM Saturation",
      m2Title: "Cognitive Battery Reserve",
      m3Title: "Estimated Reset Latency",
      protocolTitle: "Targeted Neural RAM Decompression Protocols:",
      copyBtn: "Copy Assessment Summary",
      copied: "Diagnosis summary copied to clipboard!",
      shareBtn: "Share Diagnosis",
      bridgeGroundingTitle: "5-4-3-2-1 Sensory Grounding",
      bridgeGroundingDesc: "Discharge acute sympathetic flooding with physiological sigh breathing.",
      bridgeDopamineTitle: "Dopamine Reset Protocol",
      bridgeDopamineDesc: "Eliminate cheap digital stimulation and rebuild sustainable focus momentum.",
      bridgeStressTitle: "Comprehensive Stress Check",
      bridgeStressDesc: "Map autonomic stress severity with a private 7-day decompression roadmap.",
      discTitle: "Scientific Boundary & Methodological Notice:",
      discText: "This assessment is an educational self-reflection utility based on John Sweller's Cognitive Load Theory (CLT) and George Miller's working memory capacity model. It does not provide medical, psychiatric, or neurodevelopmental diagnosis. If cognitive fatigue is accompanied by clinical symptoms, consult a qualified healthcare professional.",
      privacy: "Privacy Policy",
      terms: "Terms",
      vCrashTitle: "Critical Neural RAM Overflow (System Crash)",
      vCrashDesc: "Your prefrontal cortex buffer is completely saturated by task fragmentation and sensory flooding. Executive functioning and working memory are severely throttled.",
      vCrashProtocols: [
        "Initiate emergency 'Tab Bankruptcy': Bookmark and close all open tabs immediately to clear extrinsic cognitive load.",
        "Practice 3 minutes of Cyclic Physiological Sighing (two deep inhales, long unforced exhale) to downregulate autonomic arousal.",
        "Enforce a 20-minute zero-input window: eyes closed, zero screen illumination, zero background podcast audio."
      ],
      vHighTitle: "High Working Memory Saturation (Heavy Throttling)",
      vHighDesc: "Your mental RAM is running above 75% capacity. While you can still complete tasks, you are paying heavy context-switching taxes with noticeable cognitive drag.",
      vHighProtocols: [
        "Implement external cognitive scaffolding: Write your immediate single next micro-action on physical analog paper.",
        "Block all notification chimes and browser banners for the next 90 minutes.",
        "Hydrate and step into natural daylight for 5 minutes to reset adenosine receptor friction."
      ],
      vModTitle: "Moderate Cognitive Load (Sub-Optimal Drift)",
      vModDesc: "Your cognitive battery is at reasonable levels, but minor task switching and attentional fragmentation are slowly draining your reserve.",
      vModProtocols: [
        "Adopt strict 25/5 Pomodoro rhythm: 25 minutes of single-tab focus followed by 5 minutes of physical movement.",
        "Batch micro-decisions (emails, Slack messages, trivial choices) into a designated 20-minute end-of-day block."
      ],
      vClearTitle: "Optimal Neural Clarity (Clean Buffer Flow)",
      vClearDesc: "Your working memory buffer is operating with minimal friction. Attentional drift is low, and your cognitive reserve is well primed for deep creative synthesis.",
      vClearProtocols: [
        "Capitalize on this high-clarity window by tackling your most cognitively demanding priority first.",
        "Protect this state by keeping ambient distractions and digital notifications minimized."
      ]
    },
    ko: {
      title: "인지 과부하 및 뇌 피로도 계산기 | DopaBrain",
      metaDesc: "무료 인지 과부하 및 뇌 피로도 측정기. 작업 기억(Working Memory) 포화도와 정신적 RAM 소모량을 진단하고 즉각적인 신경계 감압 프로토콜을 확인하세요.",
      skip: "진단으로 건너뛰기",
      back: "← 도구 목록",
      langLabel: "언어 선택:",
      kicker: "신경계 인지 용량 및 작업 기억 진단",
      heroTitle: "인지 과부하 & 뇌 피로도 계산기",
      heroLead: "내 뇌의 RAM이 가득 찼을까요? 실시간 용량 측정기로 실행 기능 마찰, 작업 전환 피로, 작업 기억 포화도를 정밀 진단하세요.",
      chip1: "6대 인지 벡터",
      chip2: "실시간 RAM 및 배터리 계측",
      chip3: "Sweller 인지 부하 이론 기반",
      ramLabel: "정신적 RAM 사용량:",
      batteryLabel: "인지 배터리 잔여량:",
      q1Title: "작업 파편화 및 열린 탭 개수",
      q1Opt1: "1-3개의 집중된 창",
      q1Opt2: "가벼운 멀티태스킹",
      q1Opt3: "15개 이상 열린 탭과 잦은 전환",
      q1Opt4: "심각한 탭 마비와 혼돈",
      q2Title: "집중 지속력 및 브레인 포그",
      q2Opt1: "맑고 명쾌한 집중 상태",
      q2Opt2: "가끔 문장을 다시 읽음",
      q2Opt3: "짙은 안개와 잦은 딴생각",
      q2Opt4: "한 가지 생각도 붙잡기 힘듦",
      q3Title: "작업 기억 유지 용량",
      q3Opt1: "세부 사항을 쉽게 기억",
      q3Opt2: "사소한 심부름을 깜빡함",
      q3Opt3: "말하는 도중 생각의 흐름을 놓침",
      q3Opt4: "심각한 기억 버퍼 오버플로",
      q4Title: "의사결정 피로 및 선택 마찰",
      q4Opt1: "신속하고 편안한 결정",
      q4Opt2: "사소한 망설임",
      q4Opt3: "작은 선택도 큰 부담으로 느껴짐",
      q4Opt4: "극심한 결정 장애와 분석 마비",
      q5Title: "감각 및 알림 자극 부하",
      q5Opt1: "차분하고 조용한 환경",
      q5Opt2: "알림과 소음이 다소 거슬림",
      q5Opt3: "시각적/청각적 피로와 짜증",
      q5Opt4: "감각 과부하로 압도된 상태",
      q6Title: "작업 착수 저항 (ADHD 마찰)",
      q6Opt1: "필요할 때 즉각 시작 가능",
      q6Opt2: "약간의 워밍업 시간이 필요",
      q6Opt3: "시작하기 전 극심한 두려움과 멍함",
      q6Opt4: "완전한 마비: 시작 버튼을 못 누름",
      verdictBadge: "인지 과부하 진단 결과",
      m1Title: "정신적 RAM 포화도",
      m2Title: "인지 배터리 잔여량",
      m3Title: "예상 리셋 소요 시간",
      protocolTitle: "맞춤형 신경계 RAM 감압 프로토콜:",
      copyBtn: "진단 요약 복사하기",
      copied: "진단 결과 요약이 클립보드에 복사되었습니다!",
      shareBtn: "결과 공유하기",
      bridgeGroundingTitle: "5-4-3-2-1 신체 감각 그라운딩",
      bridgeGroundingDesc: "생리적 한숨 호흡으로 급성 교감신경 과각성을 즉각 완화하세요.",
      bridgeDopamineTitle: "도파민 디톡스 프로토콜",
      bridgeDopamineDesc: "저가 디지털 자극을 차단하고 지속 가능한 몰입력을 회복하세요.",
      bridgeStressTitle: "정밀 스트레스 검사",
      bridgeStressDesc: "자율신경계 긴장도를 측정하고 7일 감압 로드맵을 확인하세요.",
      discTitle: "과학적 한계 및 주의사항:",
      discText: "본 도구는 John Sweller의 인지 부하 이론(CLT)과 George Miller의 작업 기억 용량 모델을 기반으로 한 교육용 자기성찰 도구입니다. 의학적, 정신과적 진단을 대체할 수 없습니다.",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      vCrashTitle: "임계 인지 RAM 오버플로 (시스템 다운)",
      vCrashDesc: "작업 파편화와 감각 과부하로 전두엽 버퍼가 한계에 달했습니다. 즉각적인 외부 자극 차단과 감압이 필요합니다.",
      vCrashProtocols: [
        "'탭 파산 선언': 열려있는 브라우저 탭을 북마크 폴더에 넣고 즉시 모두 닫으세요.",
        "생리적 한숨(두 번 깊게 들이쉬고 길게 내쉬기)을 3분간 진행하여 신경계를 안정화하세요.",
        "20분간 화면과 오디오를 완전히 끄고 눈을 감은 채 암전 휴식을 취하세요."
      ],
      vHighTitle: "높은 작업 기억 포화 (성능 저하 상태)",
      vHighDesc: "정신적 RAM이 75% 이상 소모되었습니다. 작업은 가능하지만 잦은 전환 비용으로 심한 인지적 피로를 겪고 있습니다.",
      vHighProtocols: [
        "외재적 보조 장치 활용: 지금 당장 할 단 1가지 행동을 아날로그 종이에 손으로 적으세요.",
        "앞으로 90분간 모든 메신저 알림과 브라우저 배너를 끄세요.",
        "물 한 잔을 마시고 5분간 자연광을 쬐어 아데노신 피로 물질을 환기하세요."
      ],
      vModTitle: "중등도 인지 부하 (가벼운 집중 분산)",
      vModDesc: "인지 배터리는 유지되고 있으나, 작은 작업 전환과 자극들이 서서히 집중력을 갉아먹고 있습니다.",
      vModProtocols: [
        "25분 단일 작업 후 5분 신체 움직임(포모도로 기법)을 엄격히 적용하세요.",
        "이메일, 메시지 확인 등 사소한 결정 작업은 하루 끝 20분에 한꺼번에 처리하세요."
      ],
      vClearTitle: "최적의 뇌 버퍼 상태 (클린 플로우)",
      vClearDesc: "작업 기억 버퍼가 쾌적하고 맑은 상태입니다. 깊은 몰입과 창의적인 복합 사고에 가장 적합한 골든 아워입니다.",
      vClearProtocols: [
        "가장 난이도가 높고 깊은 생각이 필요한 핵심 업무를 지금 즉시 해결하세요.",
        "외부 알림을 최소화하여 이 최적의 몰입 흐름을 최대한 오래 유지하세요."
      ]
    },
    ja: {
      title: "認知過負荷＆脳疲労（ブレインフォグ）計算機 | DopaBrain",
      metaDesc: "無料の認知負荷・ブレインフォグ診断。作業記憶の飽和度と精神的RAM消費量を測定し、即効性のある神経減圧プロトコルを提供します。",
      skip: "診断へスキップ",
      back: "← ツール一覧",
      langLabel: "言語選択:",
      kicker: "神経容量＆作業記憶スクリーナー",
      heroTitle: "認知過負荷＆脳疲労計算機",
      heroLead: "脳のRAMが不足していませんか？実行機能の摩擦、作業切り替え疲労、作業記憶の飽和度をリアルタイムに診断します。",
      chip1: "6つの認知ベクトル",
      chip2: "リアルタイムRAM＆バッテリー計測",
      chip3: "Sweller認知負荷理論準拠",
      ramLabel: "精神的RAM使用率:",
      batteryLabel: "認知バッテリー残量:",
      q1Title: "タスクの断片化と開いたタブ数",
      q1Opt1: "1〜3個の集中したウィンドウ",
      q1Opt2: "適度なマルチタスク",
      q1Opt3: "15個以上のタブと頻繁な切り替え",
      q1Opt4: "深刻なタブ麻痺と混乱",
      q2Title: "集中維持力とブレインフォグ",
      q2Opt1: "明晰で流れるような集中",
      q2Opt2: "たまに読み返しが必要",
      q2Opt3: "濃い霧と急速な意識散漫",
      q2Opt4: "一つの思考も保持できない",
      q3Title: "作業記憶の保持容量",
      q3Opt1: "詳細を容易に保持できる",
      q3Opt2: "些細な用事を忘れがち",
      q3Opt3: "話している途中で考えを見失う",
      q3Opt4: "深刻なバッファオーバーフロー",
      q4Title: "意思決定の摩擦と選択疲れ",
      q4Opt1: "即決でストレスなし",
      q4Opt2: "選択肢に少し迷う",
      q4Opt3: "些細な選択すら重労働に感じる",
      q4Opt4: "完全な分析麻痺と先延ばし",
      q5Title: "感覚と通知の刺激負荷",
      q5Opt1: "静かで落ち着いた環境",
      q5Opt2: "通知音や光が気になる",
      q5Opt3: "視覚・聴覚的な刺激にイライラする",
      q5Opt4: "感覚過負荷で圧倒されている",
      q6Title: "着手抵抗（ADHDフリクション）",
      q6Opt1: "指示通りすぐに行動可能",
      q6Opt2: "少し助走期間が必要",
      q6Opt3: "強い躊躇と恐怖で固まる",
      q6Opt4: "完全な凍結：開始ボタンを押せない",
      verdictBadge: "認知負荷診断結果",
      m1Title: "精神的RAM飽和度",
      m2Title: "認知バッテリー残量",
      m3Title: "推定リセット所要時間",
      protocolTitle: "推奨される神経RAM減圧プロトコル:",
      copyBtn: "診断サマリーをコピー",
      copied: "クリップボードにコピーしました！",
      shareBtn: "結果をシェア",
      bridgeGroundingTitle: "5-4-3-2-1 グラウンディング",
      bridgeGroundingDesc: "生理的ため息呼吸法で交感神経の過剰興奮を鎮静化します。",
      bridgeDopamineTitle: "ドーパミンリセットプロトコル",
      bridgeDopamineDesc: "安価な刺激を断ち、持続可能な深い集中力を再構築します。",
      bridgeStressTitle: "詳細ストレスチェック",
      bridgeStressDesc: "自律神経の緊張度を測定し、7日間の減圧計画を確認します。",
      discTitle: "科学的根拠と注意事項:",
      discText: "本ツールはSwellerの認知負荷理論に基づく教育用セルフチェックであり、医学的診断を代替するものではありません。",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      vCrashTitle: "神経RAM臨界オーバーフロー（システムクラッシュ）",
      vCrashDesc: "タスクの断片化と過剰な刺激により、作業記憶バッファが完全に飽和しています。今すぐ減圧が必要です。",
      vCrashProtocols: [
        "「タブ破産」の実行：開いているタブを全ブックマークして即座に全終了してください。",
        "生理的ため息（2回吸って長く吐く）を3分間行い、自律神経を鎮静化させます。",
        "20分間、画面と音声を遮断して目を閉じた休息をとってください。"
      ],
      vHighTitle: "高い作業記憶飽和（パフォーマンス低下状態）",
      vHighDesc: "RAMが75%以上消費されています。作業は可能ですが、文脈切り替えコストにより重い疲労が生じています。",
      vHighProtocols: [
        "外付けメモリの活用：次にやるべき単一の行動を紙に手書きしてください。",
        "今後90分間、すべての通知とチャットをミュートに設定してください。"
      ],
      vModTitle: "中等度の認知負荷（集中散漫傾向）",
      vModDesc: "バッテリーは残っていますが、細かな作業切り替えが徐々に脳の余力を削っています。",
      vModProtocols: [
        "25分集中＋5分休憩のポモドーロリズムを徹底してください。"
      ],
      vClearTitle: "最適な脳バッファ状態（クリーンフロー）",
      vClearDesc: "作業記憶がクリアで快適な状態です。深い思考や創造的な業務に取り組む最高のタイミングです。",
      vClearProtocols: [
        "最も難易度が高く重要なタスクに今すぐ着手してください。"
      ]
    },
    zh: {
      title: "认知负荷与脑雾计算器 | DopaBrain",
      metaDesc: "免费认知负荷与脑雾评估工具。测量大脑运行内存（RAM）占用率与工作记忆饱和度，获取立即可行的大脑减压方案。",
      skip: "跳转至评估",
      back: "← 工具目录",
      langLabel: "语言选择:",
      kicker: "神经认知容量与工作记忆筛查",
      heroTitle: "认知负荷与脑雾计算器",
      heroLead: "你的大脑内存不足了吗？实时测量执行功能摩擦、多任务切换疲劳与工作记忆饱和度。",
      chip1: "6大认知维度",
      chip2: "实时RAM与电量监测",
      chip3: "Sweller认知负荷理论",
      ramLabel: "大脑RAM占用率:",
      batteryLabel: "认知电量剩余:",
      q1Title: "任务碎片化与打开标签页",
      q1Opt1: "1-3个专注窗口",
      q1Opt2: "适度多任务处理",
      q1Opt3: "15个以上标签页频繁切换",
      q1Opt4: "标签页严重瘫痪与混乱",
      q2Title: "注意力保持与脑雾感",
      q2Opt1: "注意力清晰流畅",
      q2Opt2: "偶有走神需重新阅读",
      q2Opt3: "思维浑浊如浓雾",
      q2Opt4: "无法聚焦于单一念头",
      q3Title: "工作记忆暂存容量",
      q3Opt1: "轻松记住细节步骤",
      q3Opt2: "遗忘琐碎小事",
      q3Opt3: "话说到一半突然卡壳",
      q3Opt4: "记忆缓冲区严重溢出",
      q4Title: "决策阻力与微选择疲劳",
      q4Opt1: "果断轻松做决定",
      q4Opt2: "对选项稍有纠结",
      q4Opt3: "连微小选择都令人精疲力竭",
      q4Opt4: "陷入彻底的分析瘫痪",
      q5Title: "感官与数字通知负荷",
      q5Opt1: "平静无干扰的背景环境",
      q5Opt2: "提示音偶有打扰",
      q5Opt3: "视听刺激引发烦躁",
      q5Opt4: "感官完全过载被淹没",
      q6Title: "行动启动阻力 (ADHD执行摩擦)",
      q6Opt1: "指令一下立即开始",
      q6Opt2: "需要短暂停顿热身",
      q6Opt3: "严重拖延，凝视屏幕发呆",
      q6Opt4: "思维冻结：无法点击开始",
      verdictBadge: "认知负荷诊断报告",
      m1Title: "大脑RAM饱和度",
      m2Title: "认知电量储备",
      m3Title: "预计重置耗时",
      protocolTitle: "定向神经RAM减压方案:",
      copyBtn: "复制诊断摘要",
      copied: "诊断摘要已复制至剪贴板！",
      shareBtn: "分享诊断结果",
      bridgeGroundingTitle: "5-4-3-2-1 身心着陆练习",
      bridgeGroundingDesc: "用生理性叹息呼吸迅速平息交感神经急性超载。",
      bridgeDopamineTitle: "多巴胺神经重置日程",
      bridgeDopamineDesc: "切断廉价数字刺激，重建可持续的深度专注力。",
      bridgeStressTitle: "全维度压力测试",
      bridgeStressDesc: "评估自主神经紧张度，获取专属7天减压日程。",
      discTitle: "专业声明与边界提示:",
      discText: "本工具基于认知负荷理论开发，用于自我探索与心智反思，不构成临床医学诊断。",
      privacy: "隐私政策",
      terms: "用户条款",
      vCrashTitle: "认知RAM严重溢出 (系统临界死机)",
      vCrashDesc: "任务碎片化与感官轰炸已彻底占满你的前额叶缓冲区，执行功能与工作记忆严重受阻。",
      vCrashProtocols: [
        "执行“标签页破产”：将所有标签页加入书签并全部关闭，立即清理外在认知负荷。",
        "进行3分钟生理性叹息呼吸（双吸单长呼），降低自主神经亢奋状态。",
        "开启20分钟完全暗室静息：闭眼、屏蔽一切屏幕光线与音频。"
      ],
      vHighTitle: "工作记忆高度饱和 (高耗能节流状态)",
      vHighDesc: "你的大脑内存占用超过75%，虽能勉强运转，但多任务切换税正大量消耗你的精力。",
      vHighProtocols: [
        "使用外部认知支架：在实体纸上写下当前唯一需要执行的微动作。",
        "在接下来的90分钟内静音所有即时通讯通知与弹窗。"
      ],
      vModTitle: "中度认知负荷 (注意力轻度分散)",
      vModDesc: "电量尚可，但琐碎任务切换正在持续侵蚀你的深度思考储备。",
      vModProtocols: [
        "严格执行25分钟专注+5分钟活动的番茄时钟节奏。"
      ],
      vClearTitle: "极佳脑内存状态 (心流清空通道)",
      vClearDesc: "工作记忆缓冲区通畅无阻，注意力损耗极低，是处理高难度复杂任务的黄金窗口。",
      vClearProtocols: [
        "立即利用当下的清晰状态攻克最具挑战性的核心难题。"
      ]
    },
    es: {
      title: "Calculadora de Carga Cognitiva y Niebla Mental | DopaBrain",
      metaDesc: "Evaluación gratuita de carga cognitiva y niebla mental. Mide el uso de RAM mental, saturación de memoria de trabajo y fatiga prefrontal con protocolos de descompresión.",
      skip: "Saltar a la Evaluación",
      back: "← Catálogo de Herramientas",
      langLabel: "Idioma:",
      kicker: "CAPACIDAD NEURAL Y CRIBADO DE MEMORIA DE TRABAJO",
      heroTitle: "Calculadora de Carga Cognitiva y Niebla Mental",
      heroLead: "¿Tu cerebro se quedó sin RAM? Mide la fricción ejecutiva, la fatiga por cambio de contexto y la saturación de memoria con diagnósticos en tiempo real.",
      chip1: "6 Vectores Cognitivos",
      chip2: "Telemetría en Vivo de RAM y Batería",
      chip3: "Modelo CLT de Sweller",
      ramLabel: "Uso de RAM Mental:",
      batteryLabel: "Batería Cognitiva:",
      q1Title: "Fragmentación de Tareas y Pestañas Abiertas",
      q1Opt1: "1-3 ventanas enfocadas",
      q1Opt2: "Multitarea moderada",
      q1Opt3: "15+ pestañas y cambios rápidos",
      q1Opt4: "Parálisis severa y caos de pestañas",
      q2Title: "Retención de Foco y Niebla Mental",
      q2Opt1: "Atención nítida y fluida",
      q2Opt2: "Relectura ocasional",
      q2Opt3: "Niebla densa y distracción rápida",
      q2Opt4: "Incapaz de retener un pensamiento",
      q3Title: "Capacidad de la Memoria de Trabajo",
      q3Opt1: "Retiene detalles fácilmente",
      q3Opt2: "Olvida tareas pequeñas",
      q3Opt3: "Pierde el hilo a mitad de frase",
      q3Opt4: "Desbordamiento grave del búfer",
      q4Title: "Fricción en Decisiones y Microelecciones",
      q4Opt1: "Decisivo y sin esfuerzo",
      q4Opt2: "Ligera vacilación",
      q4Opt3: "Decisiones triviales resultan agotadoras",
      q4Opt4: "Parálisis total por análisis",
      q5Title: "Tensión Sensorial y por Notificaciones",
      q5Opt1: "Entorno tranquilo de fondo",
      q5Opt2: "Alertas y sonidos notables",
      q5Opt3: "Irritación visual y auditiva",
      q5Opt4: "Sobrecarga sensorial total",
      q6Title: "Resistencia al Inicio de Tareas (ADHD)",
      q6Opt1: "Empieza de inmediato bajo demanda",
      q6Opt2: "Requiere breve calentamiento",
      q6Opt3: "Mirada fija y bloqueo inicial",
      q6Opt4: "Congelado: no puede dar click a iniciar",
      verdictBadge: "DIAGNÓSTICO DE CARGA COGNITIVA",
      m1Title: "Saturación de RAM Mental",
      m2Title: "Reserva de Batería Cognitiva",
      m3Title: "Latencia Estimada de Reseteo",
      protocolTitle: "Protocolos de Descompresión de RAM Neural:",
      copyBtn: "Copiar Resumen",
      copied: "¡Resumen copiado al portapapeles!",
      shareBtn: "Compartir Diagnóstico",
      bridgeGroundingTitle: "Anclaje Sensorial 5-4-3-2-1",
      bridgeGroundingDesc: "Desescala la sobrecarga simpática con respiración de suspiro fisiológico.",
      bridgeDopamineTitle: "Protocolo de Reseteo de Dopamina",
      bridgeDopamineDesc: "Elimina la estimulación digital barata y recupera el foco profundo.",
      bridgeStressTitle: "Chequeo Integral de Estrés",
      bridgeStressDesc: "Mide la severidad del estrés autonómico con una guía de 7 días.",
      discTitle: "Aviso de Límites Científicos:",
      discText: "Herramienta educativa de autorreflexión basada en la Teoría de Carga Cognitiva de Sweller. No sustituye diagnóstico médico.",
      privacy: "Privacidad",
      terms: "Términos",
      vCrashTitle: "Desbordamiento Crítico de RAM Neural",
      vCrashDesc: "Tu búfer prefrontal está totalmente saturado por fragmentación de tareas y bombardeo sensorial.",
      vCrashProtocols: [
        "Declara la 'Bancarrota de Pestañas': Guarda en favoritos y cierra todas las pestañas de golpe.",
        "Practica 3 minutos de Suspiro Fisiológico Cíclico para regular el sistema nervioso.",
        "Aplica una ventana de 20 minutos sin pantallas ni estímulos en penumbra."
      ],
      vHighTitle: "Alta Saturación de Memoria de Trabajo",
      vHighDesc: "Tu RAM opera a más del 75%. El constante cambio de contexto te causa una gran lentitud cognitiva.",
      vHighProtocols: [
        "Apunta en papel físico la única microacción que harás a continuación.",
        "Silencia todas las notificaciones durante los próximos 90 minutos."
      ],
      vModTitle: "Carga Cognitiva Moderada",
      vModDesc: "Tienes energía pero las microinterrupciones están desgastando tus reservas.",
      vModProtocols: [
        "Aplica bloques Pomodoro de 25 minutos con 5 de descanso físico."
      ],
      vClearTitle: "Claridad Neural Óptima (Búfer Limpio)",
      vClearDesc: "Tu memoria de trabajo funciona sin fricción. Es el momento perfecto para tareas complejas.",
      vClearProtocols: [
        "Aborda tu tarea más desafiante ahora mismo para aprovechar este estado de flujo."
      ]
    },
    de: {
      title: "Kognitive Belastung & Brain-Fog-Rechner | DopaBrain",
      metaDesc: "Kostenlose Analyse der kognitiven Belastung und Gehirnnebel. Messen Sie mentale RAM-Auslastung und Arbeitsspeichersättigung mit Dekompressionsprotokollen.",
      skip: "Zum Test springen",
      back: "← Werkzeugkatalog",
      langLabel: "Sprache:",
      kicker: "NEURALE KAPAZITÄT & ARBEITSSPEICHER-ANALYSE",
      heroTitle: "Kognitive Belastung & Brain-Fog-Rechner",
      heroLead: "Ist der RAM Ihres Gehirns voll? Messen Sie Reibung der Exekutivfunktionen, Kontextwechsel-Ermüdung und Arbeitsspeicher-Sättigung in Echtzeit.",
      chip1: "6 Kognitive Vektoren",
      chip2: "Echtzeit-RAM & Akkumessung",
      chip3: "Sweller CLT-Framework",
      ramLabel: "Mentaler RAM-Verbrauch:",
      batteryLabel: "Kognitiver Akku:",
      q1Title: "Aufgabenfragmentierung & Offene Tabs",
      q1Opt1: "1-3 fokussierte Fenster",
      q1Opt2: "Mäßiges Multitasking",
      q1Opt3: "15+ Tabs und schnelle Wechsel",
      q1Opt4: "Schwere Tab-Lähmung und Chaos",
      q2Title: "Fokus-Retention & Mentaler Nebel",
      q2Opt1: "Klarer, flüssiger Fokus",
      q2Opt2: "Gelegentliches Nachlesen",
      q2Opt3: "Dichter Nebel & schnelles Abdriften",
      q2Opt4: "Kann keinen Gedanken halten",
      q3Title: "Arbeitsspeicher-Haltekapazität",
      q3Opt1: "Details leicht behalten",
      q3Opt2: "Kleine Besorgungen vergessen",
      q3Opt3: "Faden mitten im Satz verlieren",
      q3Opt4: "Schwerer Pufferüberlauf",
      q4Title: "Entscheidungsreibung & Mikro-Wahl",
      q4Opt1: "Entschlossen und mühelos",
      q4Opt2: "Geringes Zögern",
      q4Opt3: "Triviale Wahlen erschöpfen",
      q4Opt4: "Totale Analyse-Lähmung",
      q5Title: "Sensorische & Benachrichtigungs-Belastung",
      q5Opt1: "Ruhige Umgebung",
      q5Opt2: "Spürbare Pings & Töne",
      q5Opt3: "Visuelle/akustische Reizung",
      q5Opt4: "Völlige sensorische Überflutung",
      q6Title: "Aufgaben-Startwiderstand (ADHS-Reibung)",
      q6Opt1: "Sofortiger Start auf Knopfdruck",
      q6Opt2: "Kurze Aufwärmphase nötig",
      q6Opt3: "Langes Starren & Unbehagen",
      q6Opt4: "Eingefroren: Kann Startknopf nicht drücken",
      verdictBadge: "DIAGNOSE DER KOGNITIVEN LAST",
      m1Title: "Mentale RAM-Sättigung",
      m2Title: "Kognitive Akku-Reserve",
      m3Title: "Geschätzte Reset-Latenz",
      protocolTitle: "Gezielte neurale RAM-Dekompressionsprotokolle:",
      copyBtn: "Zusammenfassung kopieren",
      copied: "In Zwischenablage kopiert!",
      shareBtn: "Diagnose teilen",
      bridgeGroundingTitle: "5-4-3-2-1 Grounding-Übung",
      bridgeGroundingDesc: "Senken Sie akute sympathische Überregung mit physiologischem Seufzen.",
      bridgeDopamineTitle: "Dopamin-Reset-Protokoll",
      bridgeDopamineDesc: "Eliminieren Sie billige Reize und bauen Sie nachhaltigen Fokus auf.",
      bridgeStressTitle: "Ausführlicher Stresstest",
      bridgeStressDesc: "Analysieren Sie autonome Anspannung mit einem 7-Tage-Plan.",
      discTitle: "Wissenschaftlicher Rahmen:",
      discText: "Pädagogisches Selbstreflexions-Tool basierend auf Swellers Cognitive Load Theory. Kein Ersatz für medizinische Diagnostik.",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      vCrashTitle: "Kritischer neuraler RAM-Überlauf (System-Crash)",
      vCrashDesc: "Ihr präfrontaler Puffer ist durch Multitasking und Reizflut vollständig erschöpft.",
      vCrashProtocols: [
        "Erklären Sie den 'Tab-Bankrott': Speichern Sie alle Tabs und schließen Sie sie sofort.",
        "Führen Sie 3 Minuten physiologisches Seufzen durch, um das Nervensystem zu beruhigen.",
        "Gönnen Sie sich 20 Minuten reizfreie Pause ohne Bildschirme mit geschlossenen Augen."
      ],
      vHighTitle: "Hohe Arbeitsspeichersättigung",
      vHighDesc: "Ihr mentaler RAM läuft über 75%. Ständige Kontextwechsel kosten enorme Energie.",
      vHighProtocols: [
        "Notieren Sie die allernächste Mikro-Aktion handschriftlich auf Papier.",
        "Stummschalten Sie für die nächsten 90 Minuten alle Benachrichtigungen."
      ],
      vModTitle: "Moderate kognitive Last",
      vModDesc: "Akkustand ist in Ordnung, aber kleine Unterbrechungen schwächen Ihren Fokus.",
      vModProtocols: [
        "Nutzen Sie den Pomodoro-Rhythmus: 25 Minuten Fokus, 5 Minuten Bewegung."
      ],
      vClearTitle: "Optimale neuronale Klarheit (Freier Puffer)",
      vClearDesc: "Ihr Arbeitsspeicher läuft reibungslos. Ideales Zeitfenster für anspruchsvolle Aufgaben.",
      vClearProtocols: [
        "Nutzen Sie diesen Flow-Zustand, um Ihre wichtigste Aufgabe direkt anzugehen."
      ]
    },
    fr: {
      title: "Calculateur de Charge Cognitive et Brouillard Mental | DopaBrain",
      metaDesc: "Évaluation gratuite de la charge cognitive et du brouillard cérébral. Mesurez l'utilisation de votre RAM mentale et la saturation de votre mémoire de travail.",
      skip: "Aller à l'évaluation",
      back: "← Catalogue d'outils",
      langLabel: "Langue :",
      kicker: "CAPACITÉ NEURONALE & DÉPISTAGE DE MÉMOIRE DE TRAVAIL",
      heroTitle: "Calculateur de Charge Cognitive & Brouillard Mental",
      heroLead: "Votre cerveau manque-t-il de RAM ? Mesurez la friction exécutive, la fatigue liée au changement de contexte et la saturation de mémoire en temps réel.",
      chip1: "6 Vecteurs Cognitifs",
      chip2: "Télémétrie RAM et Batterie en Direct",
      chip3: "Théorie CLT de Sweller",
      ramLabel: "Utilisation RAM Mentale :",
      batteryLabel: "Batterie Cognitive :",
      q1Title: "Fragmentation des Tâches et Onglets Ouverts",
      q1Opt1: "1 à 3 fenêtres ciblées",
      q1Opt2: "Multitâche modéré",
      q1Opt3: "15+ onglets et alternance rapide",
      q1Opt4: "Paralysie et chaos total des onglets",
      q2Title: "Rétention de Focus et Brouillard Mental",
      q2Opt1: "Attention nette et fluide",
      q2Opt2: "Relecture occasionnelle",
      q2Opt3: "Brouillard épais et dérive rapide",
      q2Opt4: "Incapable de retenir une pensée",
      q3Title: "Capacité de Rétention de la Mémoire de Travail",
      q3Opt1: "Retient les détails sans effort",
      q3Opt2: "Oubli de petites tâches",
      q3Opt3: "Perte du fil au milieu d'une phrase",
      q3Opt4: "Surcharge sévère du tampon",
      q4Title: "Friction Décisionnelle et Micro-Choix",
      q4Opt1: "Décision rapide et fluide",
      q4Opt2: "Légère hésitation",
      q4Opt3: "Les choix simples épuisent",
      q4Opt4: "Paralysie complète par analyse",
      q5Title: "Tension Sensorielle et Notifications",
      q5Opt1: "Environnement calme",
      q5Opt2: "Alertes et bips perceptibles",
      q5Opt3: "Agacement auditif et visuel",
      q5Opt4: "Submersion sensorielle totale",
      q6Title: "Résistance au Démarrage (Friction TDAH)",
      q6Opt1: "Démarrage immédiat",
      q6Opt2: "Besoin d'un bref échauffement",
      q6Opt3: "Blocage et appréhension",
      q6Opt4: "Figé : impossible de cliquer pour commencer",
      verdictBadge: "DIAGNOSTIC DE CHARGE COGNITIVE",
      m1Title: "Saturation RAM Mentale",
      m2Title: "Réserve Batterie Cognitive",
      m3Title: "Temps Estimé de Réinitialisation",
      protocolTitle: "Protocoles de Décompression Cérébrale :",
      copyBtn: "Copier le résumé",
      copied: "Copié dans le presse-papiers !",
      shareBtn: "Partager le diagnostic",
      bridgeGroundingTitle: "Outil d'Ancrage 5-4-3-2-1",
      bridgeGroundingDesc: "Atténuez la surcharge avec le soupir physiologique guidé.",
      bridgeDopamineTitle: "Protocole Détox Dopamine",
      bridgeDopamineDesc: "Coupez les stimulations numériques faciles et restaurez votre flow.",
      bridgeStressTitle: "Bilan Complet du Stress",
      bridgeStressDesc: "Évaluez votre tension nerveuse avec un plan de décompression sur 7 jours.",
      discTitle: "Cadre Scientifique :",
      discText: "Outil éducatif d'autoréflexion basé sur la théorie de la charge cognitive. Ne remplace pas un avis médical.",
      privacy: "Confidentialité",
      terms: "Conditions",
      vCrashTitle: "Débordement Critique de RAM (Crash Système)",
      vCrashDesc: "Votre mémoire de travail est saturée par le multitâche et les stimulations continues.",
      vCrashProtocols: [
        "Faites la 'faillite des onglets' : enregistrez tout et fermez immédiatement chaque fenêtre.",
        "Effectuez 3 minutes de soupirs physiologiques pour réguler votre système nerveux.",
        "Prenez 20 minutes de pause dans le noir, les yeux fermés et sans écran."
      ],
      vHighTitle: "Forte Saturation de Mémoire de Travail",
      vHighDesc: "Votre RAM tourne à plus de 75%. Le coût de changement de contexte vous ralentit considérablement.",
      vHighProtocols: [
        "Notez sur papier la prochaine micro-action unique à accomplir.",
        "Coupez toutes les notifications pendant les 90 prochaines minutes."
      ],
      vModTitle: "Charge Cognitive Modérée",
      vModDesc: "La batterie est correcte mais les petites interruptions rongent votre concentration.",
      vModProtocols: [
        "Appliquez la méthode Pomodoro : 25 min de focus et 5 min de pause physique."
      ],
      vClearTitle: "Clarté Neuronale Optimale (Tampon Libre)",
      vClearDesc: "Votre mémoire de travail est dégagée. C'est le moment idéal pour les tâches complexes.",
      vClearProtocols: [
        "Attaquez dès maintenant votre tâche la plus prioritaire et exigeante."
      ]
    },
    pt: {
      title: "Calculadora de Carga Cognitiva e Névoa Mental | DopaBrain",
      metaDesc: "Avaliação gratuita de carga cognitiva e névoa mental. Meça o uso da RAM mental e a saturação da memória de trabalho com protocolos práticos.",
      skip: "Ir para a Avaliação",
      back: "← Catálogo de Ferramentas",
      langLabel: "Idioma:",
      kicker: "CAPACIDADE NEURAL E TRIAGEM DE MEMÓRIA",
      heroTitle: "Calculadora de Carga Cognitiva e Névoa Mental",
      heroLead: "Seu cérebro ficou sem RAM? Meça atrito executivo, cansaço por troca de contexto e sobrecarga de memória em tempo real.",
      chip1: "6 Vetores Cognitivos",
      chip2: "Telemetria de RAM e Bateria em Tempo Real",
      chip3: "Modelo CLT de Sweller",
      ramLabel: "Uso de RAM Mental:",
      batteryLabel: "Bateria Cognitiva:",
      q1Title: "Fragmentação de Tarefas e Abas Abertas",
      q1Opt1: "1-3 janelas com foco",
      q1Opt2: "Multitarefa moderada",
      q1Opt3: "15+ abas e alternância rápida",
      q1Opt4: "Paralisia grave por abas e caos",
      q2Title: "Retenção de Foco e Névoa Mental",
      q2Opt1: "Atenção nítida e fluida",
      q2Opt2: "Releitura ocasional",
      q2Opt3: "Névoa densa e dispersão rápida",
      q2Opt4: "Incapaz de reter um pensamento",
      q3Title: "Capacidade de Retenção da Memória de Trabalho",
      q3Opt1: "Lembra detalhes com facilidade",
      q3Opt2: "Esquece pequenas tarefas",
      q3Opt3: "Perde o raciocínio no meio da frase",
      q3Opt4: "Sobrecarga severa no buffer",
      q4Title: "Atrito em Decisões e Microescolhas",
      q4Opt1: "Decisivo e sem esforço",
      q4Opt2: "Pequena hesitação",
      q4Opt3: "Escolhas simples parecem exaustivas",
      q4Opt4: "Paralisia total por análise",
      q5Title: "Tensão Sensorial e Notificações",
      q5Opt1: "Ambiente calmo ao fundo",
      q5Opt2: "Alertas e toques perceptíveis",
      q5Opt3: "Irritação visual e sonora",
      q5Opt4: "Sobrecarga sensorial completa",
      q6Title: "Resistência ao Início (Atrito TDAH)",
      q6Opt1: "Começa imediatamente",
      q6Opt2: "Precisa de breve aquecimento",
      q6Opt3: "Olhar vago e apreensão",
      q6Opt4: "Congelado: incapaz de iniciar",
      verdictBadge: "DIAGNÓSTICO DE CARGA COGNITIVA",
      m1Title: "Saturação da RAM Mental",
      m2Title: "Reserva de Bateria Cognitiva",
      m3Title: "Tempo Estimado de Reset",
      protocolTitle: "Protocolos de Descompressão da RAM Neural:",
      copyBtn: "Copiar Resumo",
      copied: "Copiado para a área de transferência!",
      shareBtn: "Compartilhar Diagnóstico",
      bridgeGroundingTitle: "Aterramento Sensorial 5-4-3-2-1",
      bridgeGroundingDesc: "Acalme a sobrecarga com o suspiro fisiológico guiado.",
      bridgeDopamineTitle: "Protocolo de Reset de Dopamina",
      bridgeDopamineDesc: "Elimine estímulos digitais fáceis e reconstrua o foco profundo.",
      bridgeStressTitle: "Check-up de Estresse",
      bridgeStressDesc: "Mapeie a tensão autonômica com um plano de 7 dias.",
      discTitle: "Aviso Científico:",
      discText: "Ferramenta de autorreflexão educativa baseada na Teoria da Carga Cognitiva de Sweller. Não substitui diagnóstico médico.",
      privacy: "Privacidade",
      terms: "Termos",
      vCrashTitle: "Sobrecarga Crítica de RAM (Pane no Sistema)",
      vCrashDesc: "Sua memória de trabalho está esgotada pela alternância de abas e estímulos constantes.",
      vCrashProtocols: [
        "Declare 'Falência de Abas': Salve tudo nos favoritos e feche todas as abas agora.",
        "Pratique 3 minutos de Suspiro Fisiológico para acalmar o sistema nervoso.",
        "Faça uma pausa de 20 minutos no escuro, de olhos fechados e sem telas."
      ],
      vHighTitle: "Alta Saturação de Memória de Trabalho",
      vHighDesc: "Sua RAM opera acima de 75%. O custo de troca de contexto drena suas forças.",
      vHighProtocols: [
        "Escreva em papel físico a única microação que fará em seguida.",
        "Silencie todas as notificações pelos próximos 90 minutos."
      ],
      vModTitle: "Carga Cognitiva Moderada",
      vModDesc: "A bateria está razoável, mas microinterrupções continuam desgastando o foco.",
      vModProtocols: [
        "Adote o ritmo Pomodoro de 25 min com 5 min de pausa física."
      ],
      vClearTitle: "Clareza Neural Ideal (Buffer Limpo)",
      vClearDesc: "Sua memória de trabalho opera sem atrito. Momento perfeito para tarefas complexas.",
      vClearProtocols: [
        "Aproveite este estado de clareza para resolver sua tarefa mais exigente."
      ]
    },
    ru: {
      title: "Калькулятор Когнитивной Нагрузки и Мозгового Тумана | DopaBrain",
      metaDesc: "Бесплатная оценка когнитивной перегрузки и мозгового тумана. Измерьте использование оперативной памяти мозга и истощение исполнительных функций.",
      skip: "Перейти к тесту",
      back: "← Каталог инструментов",
      langLabel: "Язык:",
      kicker: "СКРИНИНГ НЕЙРОННОЙ ЕМКОСТИ И ПАМЯТИ",
      heroTitle: "Калькулятор Когнитивной Нагрузки и Мозгового Тумана",
      heroLead: "Закончилась оперативная память мозга? Измерьте исполнительное трение, усталость от переключения контекста и перегрузку рабочей памяти в реальном времени.",
      chip1: "6 Когнитивных Векторов",
      chip2: "Телеметрия RAM и Батареи",
      chip3: "Теория Когнитивной Нагрузки Sweller",
      ramLabel: "Загрузка RAM Мозга:",
      batteryLabel: "Когнитивная Батарея:",
      q1Title: "Фрагментация Задач и Вкладки",
      q1Opt1: "1-3 сфокусированных окна",
      q1Opt2: "Умеренная многозадачность",
      q1Opt3: "15+ вкладок и частые переключения",
      q1Opt4: "Хаос и полный паралич от вкладок",
      q2Title: "Удержание Внимания и Мозговой Туман",
      q2Opt1: "Четкий, ясный фокус",
      q2Opt2: "Иногда нужно перечитывать",
      q2Opt3: "Густой туман и быстрое угасание",
      q2Opt4: "Невозможно удержать мысль",
      q3Title: "Емкость Рабочей Памяти",
      q3Opt1: "Легко держу детали в уме",
      q3Opt2: "Забываю мелкие поручения",
      q3Opt3: "Теряю нить разговора на полуслове",
      q3Opt4: "Тяжелое переполнение буфера",
      q4Title: "Трение при Принятии Решений",
      q4Opt1: "Легкие и быстрые решения",
      q4Opt2: "Небольшие колебания",
      q4Opt3: "Банальный выбор выматывает",
      q4Opt4: "Тотальный паралич анализа",
      q5Title: "Сенсорное и Цифровое Перенапряжение",
      q5Opt1: "Спокойная рабочая среда",
      q5Opt2: "Оповещения немного отвлекают",
      q5Opt3: "Зрительное и звуковое раздражение",
      q5Opt4: "Полный сенсорный перегруз",
      q6Title: "Сопротивление Старта (Трение СДВГ)",
      q6Opt1: "Начинаю работу моментально",
      q6Opt2: "Требуется короткий разгон",
      q6Opt3: "Ступор и взгляд в одну точку",
      q6Opt4: "Заморожен: не могу нажать 'старт'",
      verdictBadge: "ДИАГНОЗ КОГНИТИВНОЙ НАГРУЗКИ",
      m1Title: "Насыщение RAM Мозга",
      m2Title: "Запас Когнитивной Батареи",
      m3Title: "Время на Перезагрузку",
      protocolTitle: "Протоколы Разгрузки Нейронного Буфера:",
      copyBtn: "Копировать результат",
      copied: "Скопировано в буфер обмена!",
      shareBtn: "Поделиться диагнозом",
      bridgeGroundingTitle: "Техника Заземления 5-4-3-2-1",
      bridgeGroundingDesc: "Снимите гипервозбуждение с помощью физиологического вздоха.",
      bridgeDopamineTitle: "Дофаминовый Детокс Протокол",
      bridgeDopamineDesc: "Исключите дешевые стимулы и верните способность к глубокому фокусу.",
      bridgeStressTitle: "Тест на Стресс",
      bridgeStressDesc: "Оцените 5 сфер напряжения и составьте план декомпрессии.",
      discTitle: "Научные Границы:",
      discText: "Инструмент предназначен для образовательного самопознания на основе CLT теории Свеллера. Не является медицинским диагнозом.",
      privacy: "Конфиденциальность",
      terms: "Условия",
      vCrashTitle: "Критическое Переполнение RAM (Сбой Системы)",
      vCrashDesc: "Буфер префронтальной коры полностью заблокирован переключением задач и сенсорным шумом.",
      vCrashProtocols: [
        "Объявите 'банкротство вкладок': закройте все окна прямо сейчас.",
        "Сделайте 3 минуты физиологических вздохов для успокоения нервной системы.",
        "Устройте 20 минут полной темноты с закрытыми глазами без экранов."
      ],
      vHighTitle: "Высокая Загрузка Рабочей Памяти",
      vHighDesc: "RAM загружена более чем на 75%. Переключение контекста отнимает почти все ресурсы.",
      vHighProtocols: [
        "Запишите на бумаге одно следующее микродействие.",
        "Отключите все уведомления на 90 минут."
      ],
      vModTitle: "Умеренная Когнитивная Нагрузка",
      vModDesc: "Энергия есть, но микропаузы и шум постепенно истощают ваши запасы.",
      vModProtocols: [
        "Используйте метод Pomodoro: 25 минут фокуса и 5 минут отдыха."
      ],
      vClearTitle: "Оптимальная Ясность Мозга (Чистый Буфер)",
      vClearDesc: "Память работает без задержек. Идеальный момент для самых трудных задач.",
      vClearProtocols: [
        "Приступайте к главному и сложному делу прямо сейчас."
      ]
    },
    hi: {
      title: "संज्ञानात्मक भार और ब्रेन फॉग कैलकुलेटर | DopaBrain",
      metaDesc: "मुफ़्त संज्ञानात्मक भार और ब्रेन फॉग आकलन। मस्तिष्क की रैम खपत और कार्यकारी थकान मापें।",
      skip: "सीधे परीक्षण पर जाएं",
      back: "← टूल कैटलॉग",
      langLabel: "भाषा:",
      kicker: "तंत्रिका क्षमता और कार्यशील स्मृति जांच",
      heroTitle: "संज्ञानात्मक भार और ब्रेन फॉग कैलकुलेटर",
      heroLead: "क्या आपके मस्तिष्क की रैम भर चुकी है? कार्यकारी घर्षण, टास्क स्विचिंग थकान और स्मृति संतृप्ति को मापें।",
      chip1: "6 संज्ञानात्मक आयाम",
      chip2: "लाइव रैम और बैटरी माप",
      chip3: "स्वेल्लर CLT मॉडल",
      ramLabel: "मानसिक रैम उपयोग:",
      batteryLabel: "संज्ञानात्मक बैटरी:",
      q1Title: "कार्यों का बिखराव और खुले टैब",
      q1Opt1: "1-3 केंद्रित विंडो",
      q1Opt2: "मध्यम मल्टीटास्किंग",
      q1Opt3: "15+ टैब और तेज़ अदला-बदली",
      q1Opt4: "गंभीर भ्रम और टैब अराजकता",
      q2Title: "ध्यान टिकना और मानसिक धुंध",
      q2Opt1: "स्पष्ट और सहज ध्यान",
      q2Opt2: "कभी-कभार दोबारा पढ़ना",
      q2Opt3: "गहरा मानसिक कोहरा",
      q2Opt4: "एक विचार भी टिक नहीं पाता",
      q3Title: "कार्यशील स्मृति धारण क्षमता",
      q3Opt1: "विवरण आसानी से याद रहते हैं",
      q3Opt2: "छोटे काम भूल जाना",
      q3Opt3: "बात करते हुए विचार खो जाना",
      q3Opt4: "गंभीर बफर ओवरफ्लो",
      q4Title: "निर्णय लेने में घर्षण",
      q4Opt1: "त्वरित और सहज निर्णय",
      q4Opt2: "मामूली झिझक",
      q4Opt3: "छोटे विकल्प भी थका देते हैं",
      q4Opt4: "पूर्ण निर्णय पक्षाघात",
      q5Title: "संवेदी और डिजिटल तनाव",
      q5Opt1: "शांत वातावरण",
      q5Opt2: "अलर्ट और आवाज़ें परेशान करती हैं",
      q5Opt3: "दृश्य और ध्वनि से चिड़चिड़ापन",
      q5Opt4: "पूरी तरह से अभिभूत स्थिति",
      q6Title: "कार्य शुरू करने में प्रतिरोध (ADHD घर्षण)",
      q6Opt1: "तुरंत शुरू कर सकते हैं",
      q6Opt2: "थोड़ा वार्म-अप चाहिए",
      q6Opt3: "शुरू करने से पहले भारी झिझक",
      q6Opt4: "पूरी तरह जकड़ जाना",
      verdictBadge: "संज्ञानात्मक भार निदान",
      m1Title: "मानसिक रैम संतृप्ति",
      m2Title: "संज्ञानात्मक बैटरी शेष",
      m3Title: "अनुमानित रीसेट समय",
      protocolTitle: "मस्तिष्क रैम डीकंप्रेशन प्रोटोकॉल:",
      copyBtn: "सारांश कॉपी करें",
      copied: "क्लिपबोर्ड पर कॉपी किया गया!",
      shareBtn: "निदान साझा करें",
      bridgeGroundingTitle: "5-4-3-2-1 ग्राउंडिंग टूल",
      bridgeGroundingDesc: "निर्देशित शारीरिक श्वास तकनीक से घबराहट शांत करें।",
      bridgeDopamineTitle: "डोपामाइन रीसेट प्रोटोकॉल",
      bridgeDopamineDesc: "सस्ते डिजिटल आकर्षण रोकें और गहरा ध्यान वापस पाएं।",
      bridgeStressTitle: "तनाव स्तर परीक्षण",
      bridgeStressDesc: "तनाव का स्तर मापें और 7-दिवसीय योजना प्राप्त करें।",
      discTitle: "वैज्ञानिक दायरा:",
      discText: "यह एक शैक्षणिक आत्म-चिंतन उपकरण है। यह चिकित्सीय निदान का विकल्प नहीं है।",
      privacy: "गोपनीयता नीति",
      terms: "नियम",
      vCrashTitle: "गंभीर रैम ओवरफ्लो (सिस्टम क्रैश)",
      vCrashDesc: "कार्य बिखराव और संवेदी बमबारी ने आपकी कार्यशील स्मृति को पूरी तरह भर दिया है।",
      vCrashProtocols: [
        "सभी खुले ब्राउज़र टैब तुरंत बंद करें।",
        "3 मिनट के लिए गहरी सांस लेने का अभ्यास करें।",
        "20 मिनट बिना स्क्रीन के शांत कमरे में आंखें बंद करके आराम करें।"
      ],
      vHighTitle: "उच्च कार्यशील स्मृति संतृप्ति",
      vHighDesc: "आपकी रैम 75% से अधिक भरी है। कार्य बदलना आपकी ऊर्जा सोख रहा है।",
      vHighProtocols: [
        "कागज पर अगला एक छोटा कदम हाथ से लिखें।",
        "अगले 90 मिनट के लिए सभी सूचनाएं बंद करें।"
      ],
      vModTitle: "मध्यम संज्ञानात्मक भार",
      vModDesc: "बैटरी ठीक है लेकिन बार-बार ध्यान भटकने से थकान बढ़ रही है।",
      vModProtocols: [
        "25 मिनट काम और 5 मिनट ब्रेक की तकनीक अपनाएं।"
      ],
      vClearTitle: "उत्कृष्ट मानसिक स्पष्टता",
      vClearDesc: "आपकी कार्यशील स्मृति खाली और तैयार है। कठिन काम करने का सबसे अच्छा समय।",
      vClearProtocols: [
        "अपनी सबसे महत्वपूर्ण चुनौती को अभी हल करें।"
      ]
    },
    id: {
      title: "Kalkulator Beban Kognitif & Brain Fog | DopaBrain",
      metaDesc: "Evaluasi gratis beban kognitif dan kabut otak. Ukur penggunaan RAM mental dan kejenuhan memori kerja dengan protokol neural.",
      skip: "Lewati ke Penilaian",
      back: "← Katalog Alat",
      langLabel: "Bahasa:",
      kicker: "KAPASITAS SARAF & SKRINING MEMORI KERJA",
      heroTitle: "Kalkulator Beban Kognitif & Brain Fog",
      heroLead: "Apakah RAM otak Anda habis? Ukur gesekan eksekutif, kelelahan ganti konteks, dan saturasi memori secara real-time.",
      chip1: "6 Vektor Kognitif",
      chip2: "Telemetri RAM & Baterai Langsung",
      chip3: "Kerangka CLT Sweller",
      ramLabel: "Penggunaan RAM Mental:",
      batteryLabel: "Baterai Kognitif:",
      q1Title: "Fragmentasi Tugas & Tab Terbuka",
      q1Opt1: "1-3 jendela fokus",
      q1Opt2: "Multitasking moderat",
      q1Opt3: "15+ tab dan pergantian cepat",
      q1Opt4: "Kelumpuhan tab parah & kekacauan",
      q2Title: "Retensi Fokus & Kabut Otak",
      q2Opt1: "Perhatian tajam dan lancar",
      q2Opt2: "Sesekali membaca ulang",
      q2Opt3: "Kabut tebal & mudah buyar",
      q2Opt4: "Tak mampu menahan satu pikiran",
      q3Title: "Kapasitas Retensi Memori Kerja",
      q3Opt1: "Mengingat detail dengan mudah",
      q3Opt2: "Lupa tugas-tugas kecil",
      q3Opt3: "Kehilangan kata di tengah kalimat",
      q3Opt4: "Buffer memori meluap parah",
      q4Title: "Gesekan Keputusan & Pilihan Mikro",
      q4Opt1: "Tegas dan tanpa beban",
      q4Opt2: "Sedikit ragu pada opsi",
      q4Opt3: "Pilihan sepele terasa melelahkan",
      q4Opt4: "Kelumpuhan analisis total",
      q5Title: "Ketegangan Sensorik & Notifikasi",
      q5Opt1: "Lingkungan tenang",
      q5Opt2: "Pemberitahuan cukup mengganggu",
      q5Opt3: "Iritasi visual & suara",
      q5Opt4: "Banjir sensorik total",
      q6Title: "Resistensi Memulai Tugas (ADHD)",
      q6Opt1: "Mulai seketika saat dibutuhkan",
      q6Opt2: "Butuh sedikit pemanasan",
      q6Opt3: "Menatap kosong & enggan mulai",
      q6Opt4: "Membeku: tak bisa klik mulai",
      verdictBadge: "DIAGNOSIS BEBAN KOGNITIF",
      m1Title: "Saturasi RAM Mental",
      m2Title: "Cadangan Baterai Kognitif",
      m3Title: "Estimasi Waktu Reset",
      protocolTitle: "Protokol Dekompresi RAM Saraf:",
      copyBtn: "Salin Ringkasan",
      copied: "Disalin ke papan klip!",
      shareBtn: "Bagikan Diagnosis",
      bridgeGroundingTitle: "Grounding Sensorik 5-4-3-2-1",
      bridgeGroundingDesc: "Meredakan kecemasan somatik dengan teknik pernapasan terpandu.",
      bridgeDopamineTitle: "Protokol Reset Dopamin",
      bridgeDopamineDesc: "Hentikan stimulasi digital murah dan bangun kembali fokus mendalam.",
      bridgeStressTitle: "Pemeriksaan Tingkat Stres",
      bridgeStressDesc: "Ketahui tingkat stres Anda dengan panduan 7 hari.",
      discTitle: "Batasan Ilmiah:",
      discText: "Alat refleksi edukatif berbasis Teori Beban Kognitif Sweller. Bukan pengganti diagnosis medis.",
      privacy: "Kebijakan Privasi",
      terms: "Ketentuan",
      vCrashTitle: "Kelebihan Beban RAM Kritis (Sistem Crash)",
      vCrashDesc: "Buffer memori kerja Anda tersumbat total oleh perpindahan tugas dan banjir sensorik.",
      vCrashProtocols: [
        "Lakukan 'kebangkrutan tab': bookmark dan tutup semua tab peramban seketika.",
        "Lakukan pernapasan dalam terpandu selama 3 menit untuk menenangkan saraf.",
        "Istirahat 20 menit di ruangan gelap dengan mata tertutup tanpa layar."
      ],
      vHighTitle: "Saturasi Memori Kerja Tinggi",
      vHighDesc: "RAM beroperasi di atas 75%. Pergantian fokus terus-menerus menguras energi Anda.",
      vHighProtocols: [
        "Tuliskan satu tindakan mikro berikutnya di atas kertas fisik.",
        "Matikan semua notifikasi selama 90 menit ke depan."
      ],
      vModTitle: "Beban Kognitif Sedang",
      vModDesc: "Baterai cukup baik tetapi gangguan kecil mengikis cadangan fokus Anda.",
      vModProtocols: [
        "Gunakan teknik Pomodoro: 25 menit kerja fokus dan 5 menit bergerak."
      ],
      vClearTitle: "Kejernihan Saraf Optimal (Buffer Bersih)",
      vClearDesc: "Memori kerja Anda berjalan lancar. Waktu terbaik untuk tugas-tugas rumit.",
      vClearProtocols: [
        "Gunakan momen ini untuk menuntaskan tugas prioritas tersulit Anda."
      ]
    },
    tr: {
      title: "Bilişsel Yük ve Beyin Sisi Hesaplayıcı | DopaBrain",
      metaDesc: "Ücretsiz bilişsel yük ve beyin sisi testi. Zihinsel RAM kullanımını ve çalışma belleği tükenmesini ölçün, dekompresyon protokollerini uygulayın.",
      skip: "Değerlendirmeye Geç",
      back: "← Araç Kataloğu",
      langLabel: "Dil Seçimi:",
      kicker: "NÖRAL KAPASİTE VE ÇALIŞMA BELLEĞİ TARAMASI",
      heroTitle: "Bilişsel Yük ve Beyin Sisi Hesaplayıcı",
      heroLead: "Beyninizin RAM'i mi tükendi? Yönetici işlev sürtünmesini, görev geçişi yorgunluğunu ve çalışma belleği doyumunu gerçek zamanlı ölçün.",
      chip1: "6 Bilişsel Vektör",
      chip2: "Canlı RAM ve Pil Telemetrisi",
      chip3: "Sweller CLT Modeli",
      ramLabel: "Zihinsel RAM Kullanımı:",
      batteryLabel: "Bilişsel Pil:",
      q1Title: "Görev Parçalanması ve Açık Sekmeler",
      q1Opt1: "1-3 odaklanmış pencere",
      q1Opt2: "Ilımlı çoklu görev",
      q1Opt3: "15+ sekme ve hızlı geçişler",
      q1Opt4: "Şiddetli sekme felci ve kaos",
      q2Title: "Odak Koruma ve Zihin Sisi",
      q2Opt1: "Net ve akıcı dikkat",
      q2Opt2: "Ara sıra yeniden okuma",
      q2Opt3: "Yoğun sis ve hızlı dağılma",
      q2Opt4: "Tek bir düşünceyi bile tutamama",
      q3Title: "Çalışma Belleği Tutma Kapasitesi",
      q3Opt1: "Ayrıntıları kolayca aklında tutar",
      q3Opt2: "Küçük işleri unutur",
      q3Opt3: "Cümlenin ortasında konuyu unutur",
      q3Opt4: "Ağır bellek tamponu taşması",
      q4Title: "Karar Sürtünmesi ve Mikro Tercihler",
      q4Opt1: "Kararlı ve zahmetsiz",
      q4Opt2: "Seçeneklerde hafif tereddüt",
      q4Opt3: "Önemsiz seçimler bile tüketir",
      q4Opt4: "Tam analiz felci",
      q5Title: "Duyusal ve Bildirim Gerilimi",
      q5Opt1: "Sakin arka plan",
      q5Opt2: "Bildirimler hafif rahatsız eder",
      q5Opt3: "Görsel ve işitsel tahriş",
      q5Opt4: "Tam duyusal aşırı yüklenme",
      q6Title: "Göreve Başlama Direnci (DEHB Sürtünmesi)",
      q6Opt1: "Hemen başlayabilir",
      q6Opt2: "Kısa bir ısınma gerekir",
      q6Opt3: "Uzun süre bakakalma ve çekince",
      q6Opt4: "Donup kalma: başla düğmesine basamama",
      verdictBadge: "BİLİŞSEL YÜK TEŞHİSİ",
      m1Title: "Zihinsel RAM Doyumu",
      m2Title: "Bilişsel Pil Rezervi",
      m3Title: "Tahmini Sıfırlama Gecikmesi",
      protocolTitle: "Hedefli Nöral RAM Dekompresyon Protokolleri:",
      copyBtn: "Özeti Kopyala",
      copied: "Panoya kopyalandı!",
      shareBtn: "Teşhisi Paylaş",
      bridgeGroundingTitle: "5-4-3-2-1 Topraklama Aracı",
      bridgeGroundingDesc: "Fizyolojik iç çekme nefesiyle sempatik uyarılmayı yatıştırın.",
      bridgeDopamineTitle: "Dopamin Sıfırlama Protokolü",
      bridgeDopamineDesc: "Ucuz dijital uyarımları kesin ve derin odaklanmayı yeniden kurun.",
      bridgeStressTitle: "Kapsamlı Stres Testi",
      bridgeStressDesc: "Stres seviyenizi 7 günlük rehberle değerlendirin.",
      discTitle: "Bilimsel Sınırlar:",
      discText: "Sweller'ın Bilişsel Yük Teorisine dayalı eğitici bir öz değerlendirmedir. Tıbbi teşhis yerine geçmez.",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Şartları",
      vCrashTitle: "Kritik Nöral RAM Taşması (Sistem Çökmesi)",
      vCrashDesc: "Görev parçalanması ve duyusal bombardıman çalışma belleğinizi tamamen tıkadı.",
      vCrashProtocols: [
        "Sekme İflası İlan Edin: Tüm açık sekmeleri yer imlerine alıp derhal kapatın.",
        "Sinir sistemini sakinleştirmek için 3 dakika derin iç çekme nefesi uygulayın.",
        "Ekranlardan uzak, karanlık bir ortamda 20 dakika gözleriniz kapalı dinlenin."
      ],
      vHighTitle: "Yüksek Çalışma Belleği Doyumu",
      vHighDesc: "RAM'iniz %75'in üzerinde çalışıyor. Sürekli bağlam değişimi enerjinizi tüketiyor.",
      vHighProtocols: [
        "Yapacağınız bir sonraki mikro eylemi fiziksel bir kağıda yazın.",
        "Önümüzdeki 90 dakika boyunca tüm bildirimleri kapatın."
      ],
      vModTitle: "Orta Düzey Bilişsel Yük",
      vModDesc: "Pil durumu fena değil ancak küçük dikkat dağıtıcılar rezervinizi kemiriyor.",
      vModProtocols: [
        "25 dakika odak ve 5 dakika mola içeren Pomodoro yöntemini uygulayın."
      ],
      vClearTitle: "Optimal Nöral Berraklık (Temiz Tampon)",
      vClearDesc: "Çalışma belleğiniz sürtünmesiz çalışıyor. Zorlu görevler için en ideal an.",
      vClearProtocols: [
        "Bu akış halinden yararlanarak en zorlu görevinizi hemen tamamlayın."
      ]
    }
  };

  const userAnswers = {};
  let currentLang = 'en';

  function detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('lang');
    if (queryLang && I18N[queryLang]) return queryLang;

    const navLang = (navigator.language || '').slice(0, 2).toLowerCase();
    if (I18N[navLang]) return navLang;

    return 'en';
  }

  function t(key) {
    const dict = I18N[currentLang] || I18N.en;
    return dict[key] !== undefined ? dict[key] : (I18N.en[key] || '');
  }

  function setLanguage(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update query param without reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());

    // Update static DOM texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      const val = t(k);
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.value = val;
        else el.textContent = val;
      }
    });

    // Update Page Meta
    document.title = t('title');
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', t('metaDesc'));

    // Update Language Select
    const select = document.getElementById('langSelect');
    if (select) select.value = lang;

    // Decorate bridge links with current language
    const bridgeGrounding = document.getElementById('bridgeGrounding');
    const bridgeDopamine = document.getElementById('bridgeDopamine');
    const bridgeStress = document.getElementById('bridgeStress');

    if (bridgeGrounding) bridgeGrounding.href = `/portal/tools/grounding-exercise.html?lang=${encodeURIComponent(lang)}`;
    if (bridgeDopamine) bridgeDopamine.href = `/portal/tools/dopamine-detox-protocol.html?lang=${encodeURIComponent(lang)}`;
    if (bridgeStress) bridgeStress.href = `/stress-check/${lang !== 'ko' ? '?lang=' + encodeURIComponent(lang) : ''}`;

    // Recalculate if result card is already visible
    const resCard = document.getElementById('resultCard');
    if (resCard && !resCard.hidden) {
      calculateResult(false);
    }
  }

  function updateDashboard() {
    const answeredKeys = Object.keys(userAnswers);
    if (answeredKeys.length === 0) {
      document.getElementById('ramText').textContent = '0%';
      document.getElementById('ramFill').style.width = '0%';
      document.getElementById('batteryText').textContent = '100%';
      document.getElementById('batteryFill').style.width = '100%';
      return;
    }

    let sum = 0;
    answeredKeys.forEach(k => { sum += userAnswers[k]; });
    const maxPossibleSoFar = answeredKeys.length * 4;
    const minPossibleSoFar = answeredKeys.length * 1;

    // Normalized to 0-100%
    const ramPct = Math.round(((sum - minPossibleSoFar) / (maxPossibleSoFar - minPossibleSoFar || 1)) * 100);
    const batPct = Math.max(0, 100 - ramPct);

    document.getElementById('ramText').textContent = `${ramPct}%`;
    document.getElementById('ramFill').style.width = `${ramPct}%`;

    document.getElementById('batteryText').textContent = `${batPct}%`;
    document.getElementById('batteryFill').style.width = `${batPct}%`;

    // Dynamic color tuning
    const ramText = document.getElementById('ramText');
    if (ramPct >= 75) ramText.style.color = 'var(--danger)';
    else if (ramPct >= 45) ramText.style.color = 'var(--warning)';
    else ramText.style.color = 'var(--accent)';
  }

  function calculateResult(shouldScroll = true) {
    let totalScore = 0;
    for (let i = 1; i <= 6; i++) {
      totalScore += (userAnswers[i] || 2);
    }

    // Min: 6, Max: 24
    const ramPct = Math.round(((totalScore - 6) / 18) * 100);
    const batPct = Math.max(0, 100 - ramPct);
    const resetMins = Math.round(5 + (ramPct / 100) * 25);

    let verdictKey = 'vClear';
    let badgeColor = 'var(--success)';
    if (totalScore >= 20) {
      verdictKey = 'vCrash';
      badgeColor = 'var(--danger)';
    } else if (totalScore >= 15) {
      verdictKey = 'vHigh';
      badgeColor = 'var(--warning)';
    } else if (totalScore >= 11) {
      verdictKey = 'vMod';
      badgeColor = 'var(--accent)';
    }

    const resCard = document.getElementById('resultCard');
    const verdictTitle = document.getElementById('verdictTitle');
    const verdictDesc = document.getElementById('verdictDesc');
    const verdictBadge = document.getElementById('verdictBadge');

    verdictTitle.textContent = t(`${verdictKey}Title`);
    verdictDesc.textContent = t(`${verdictKey}Desc`);
    verdictBadge.style.color = badgeColor;
    verdictBadge.style.borderColor = badgeColor;

    document.getElementById('mRamVal').textContent = `${ramPct}%`;
    document.getElementById('mBatVal').textContent = `${batPct}%`;
    document.getElementById('mLatencyVal').textContent = `${resetMins} mins`;

    // Populate protocols
    const protocolList = document.getElementById('protocolList');
    protocolList.innerHTML = '';
    const protocols = (I18N[currentLang] || I18N.en)[`${verdictKey}Protocols`] || I18N.en[`${verdictKey}Protocols`];
    protocols.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      protocolList.appendChild(li);
    });

    resCard.hidden = false;

    if (shouldScroll) {
      resCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // GA4 Telemetry (Safe: zero PII or test results leak, purely technical target)
    if (typeof gtag === 'function') {
      gtag('event', 'tool_calculate', {
        tool_name: 'cognitive_load_calculator',
        verdict_key: verdictKey
      });
    }
  }

  function initOptions() {
    document.querySelectorAll('.q-options').forEach(group => {
      const qid = group.getAttribute('data-qid');
      group.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          group.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          userAnswers[qid] = parseInt(btn.getAttribute('data-val'), 10);

          updateDashboard();

          // Check if all 6 answered
          if (Object.keys(userAnswers).length === 6) {
            calculateResult(true);
          }
        });
      });
    });
  }

  function initActions() {
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const title = document.getElementById('verdictTitle').textContent;
        const ram = document.getElementById('mRamVal').textContent;
        const bat = document.getElementById('mBatVal').textContent;
        const summary = `DopaBrain Cognitive Load Report:\nStatus: ${title}\nMental RAM: ${ram}\nCognitive Battery: ${bat}\nMeasure yours: https://dopabrain.com/portal/tools/cognitive-load-calculator.html?lang=${currentLang}`;

        navigator.clipboard.writeText(summary).then(() => {
          const orig = copyBtn.textContent;
          copyBtn.textContent = t('copied');
          setTimeout(() => { copyBtn.textContent = orig; }, 2500);
        }).catch(() => {});
      });
    }

    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        const title = document.getElementById('verdictTitle').textContent;
        if (navigator.share) {
          navigator.share({
            title: document.title,
            text: `My Cognitive Load Diagnosis: ${title}`,
            url: window.location.href
          }).catch(() => {});
        } else {
          if (copyBtn) copyBtn.click();
        }
      });
    }

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initOptions();
    initActions();
    setLanguage(detectLanguage());
  });
})();
