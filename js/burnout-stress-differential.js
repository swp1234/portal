/**
 * DopaBrain Burnout vs Stress Differential Matrix
 * 12-Language Support & 2D Quadrant Engine
 */
(function () {
  'use strict';

  const translations = {
    en: {
      title: "Burnout vs Stress Differential Matrix | DopaBrain",
      metaDesc: "Free Burnout vs Stress Differential Assessment. Map your fatigue on a 2D tension vs exhaustion matrix to discover tailored recovery protocols.",
      kicker: "FATIGUE DIFFERENTIAL ASSESSMENT",
      heroTitle: "Burnout vs Stress Differential Matrix",
      heroLead: "Is it acute situational stress, or chronic systemic burnout? Map your emotional and physiological friction across a 2D tension vs. exhaustion coordinate.",
      chip1: "6 Target Scenarios",
      chip2: "2D Coordinate Quadrant",
      chip3: "100% Private (Local)",
      screenTitle: "Symptom Self-Assessment",
      screenSub: "Select how frequently you experience each response pattern over the past 2 weeks.",
      badgeStress: "Stress (Tension)",
      badgeBurnout: "Burnout (Exhaustion)",
      opt0: "Rarely (0)",
      opt1: "Sometimes (1)",
      opt2: "Often (2)",
      opt3: "Constantly (3)",
      q1: "1. Urgency & Racing Thoughts: I feel frantic pressure to fix everything immediately.",
      q2: "2. Emotional Depletion: Rest and weekends no longer recharge my energy.",
      q3: "3. Physical Hyper-Arousal: Muscle clenching, shallow breathing, or jittery impatience.",
      q4: "4. Cynicism & Detachment: I feel emotionally numb, disconnected, or irritable toward work.",
      q5: "5. Emotional Reactivity: I care excessively about outcomes, leading to anxiety and agitation.",
      q6: "6. Helplessness & Inefficacy: \"Nothing I do matters anymore\" or feeling completely drained.",
      calcBtn: "Calculate Fatigue Coordinate",
      resetBtn: "Reset",
      verdictBadge: "DIFFERENTIAL VERDICT",
      quadCrisis: "🔥 Crisis Overload",
      quadCrisisSub: "High Stress + High Burnout",
      quadStress: "⚡ Acute Stress Zone",
      quadStressSub: "High Tension, Low Burnout",
      quadBurnout: "🧊 Chronic Burnout Zone",
      quadBurnoutSub: "High Exhaustion, Low Tension",
      quadHealthy: "🌱 Balanced Adaptation",
      quadHealthySub: "Manageable Strain, Good Recovery",
      stressMeterLabel: "Situational Tension (Stress)",
      burnoutMeterLabel: "Systemic Depletion (Burnout)",
      protocolTitle: "Recommended Recovery Protocols:",
      copyBtn: "Copy Assessment Summary",
      copied: "Assessment summary copied to clipboard!",
      shareBtn: "Share Verdict",
      bridgeStressTitle: "Full Stress Check",
      bridgeStressDesc: "Explore 5 stress categories with private 7-day recovery decompression plan.",
      bridgeGroundingTitle: "5-4-3-2-1 Grounding Tool",
      bridgeGroundingDesc: "Somatic anxiety and panic de-escalation with guided physiological sigh.",
      bridgeMatrixTitle: "Dilemma Matrix",
      bridgeMatrixDesc: "Resolve decision paralysis and make weighted choices without emotional overwhelm.",
      discTitle: "Editorial Boundary & Scientific Disclaimer:",
      discText: "This assessment is an educational self-reflection matrix comparing acute sympathetic nervous system tension (PSS-10 framework) with chronic occupational exhaustion (MBI framework). It does not provide medical diagnosis, treatment, or clinical assessment. If distress interferes with daily life, consult a healthcare provider.",
      vCrisisTitle: "Crisis Overload (Double Burden)",
      vCrisisDesc: "Your nervous system is experiencing acute physiological tension on top of deep systemic emotional exhaustion. Urgent decompression is essential.",
      vCrisisProtocols: [
        "Enforce strict non-negotiable downtime; immediately halt non-essential commitments.",
        "Practice 5 minutes of cyclic physiological sighing (two quick inhales, long exhale) to downregulate emergency arousal.",
        "Consider discussing workload restructuring with trusted mentors or licensed healthcare professionals."
      ],
      vStressTitle: "Acute Stress Dominant",
      vStressDesc: "High sympathetic arousal, racing urgency, and physical tension—but your core motivation and emotional capacity remain largely intact.",
      vStressProtocols: [
        "Your fatigue is situational: implement structured task triage using the Eisenhower matrix.",
        "Incorporate 10-minute somatic decompression breaks between high-intensity cognitive blocks.",
        "Check your baseline tension categories in our private Stress Check."
      ],
      vBurnoutTitle: "Chronic Burnout Dominant",
      vBurnoutDesc: "Low acute anxiety, but profound emotional depletion, detachment, and cynicism. Rest alone is insufficient without systemic boundary shifts.",
      vBurnoutProtocols: [
        "Address root cynicism by identifying energy-draining interactions and establishing firm psychological boundaries.",
        "Re-anchor personal efficacy with micro-wins rather than major overhauls.",
        "Take the 6-type Burnout assessment to pinpoint the specific friction domain."
      ],
      vHealthyTitle: "Balanced Cognitive Adaptation",
      vHealthyDesc: "Both acute tension and chronic exhaustion are within healthy, sustainable parameters. Recovery mechanisms are functioning effectively.",
      vHealthyProtocols: [
        "Maintain existing rest, exercise, and sleep hygiene practices.",
        "Protect restorative buffer zones to prevent gradual creep into acute stress.",
        "Use cognitive decision tools proactively before complex life transitions."
      ],
      back: "← Tools Catalog",
      skip: "Skip to Assessment",
      langLabel: "Language:",
      privacy: "Privacy Policy",
      terms: "Terms"
    },
    ko: {
      title: "번아웃 vs 스트레스 구분 매트릭스 | DopaBrain",
      metaDesc: "무료 번아웃 vs 스트레스 차이 정밀 자가진단. 2D 긴장도 vs 탈진도 매트릭스로 현재 피로 유형을 판정하고 맞춤 해소법을 확인하세요.",
      kicker: "피로 유형 정밀 감별 진단",
      heroTitle: "번아웃 vs 스트레스 구분 매트릭스",
      heroLead: "지금 겪는 피로가 일시적 상황 스트레스일까요, 아니면 만성적 시스템 번아웃일까요? 2차원 긴장도(Stress)와 탈진도(Burnout) 축으로 나의 상태를 정확히 매핑해보세요.",
      chip1: "6개 핵심 감별 문항",
      chip2: "2D 좌표계 매트릭스",
      chip3: "100% 로컬 연산 (비공개)",
      screenTitle: "증상 자가진단",
      screenSub: "지난 2주간 각 반응을 얼마나 자주 경험했는지 선택하세요.",
      badgeStress: "스트레스 (긴장)",
      badgeBurnout: "번아웃 (탈진)",
      opt0: "거의 없음 (0)",
      opt1: "가끔 있음 (1)",
      opt2: "자주 있음 (2)",
      opt3: "항상 있음 (3)",
      q1: "1. 조급함과 생각의 폭주: 모든 문제를 즉시 해결해야 한다는 강한 압박감을 느낍니다.",
      q2: "2. 감정적 바닥남: 주말에 쉬어도 피로와 무기력감이 전혀 회복되지 않습니다.",
      q3: "3. 신체적 과각성: 어깨 근육 경직, 얕은 호흡, 초조한 안절부절못함이 있습니다.",
      q4: "4. 냉소와 거리두기: 일이나 사람에 대해 감정적으로 무감각해지거나 짜증이 납니다.",
      q5: "5. 과도한 감정 몰입: 결과에 너무 예민하게 집착하여 불안과 초조가 심합니다.",
      q6: "6. 무력감과 효능감 저하: '내가 뭘 해도 달라질 게 없다'는 체념이 듭니다.",
      calcBtn: "피로 좌표 계산하기",
      resetBtn: "초기화",
      verdictBadge: "정밀 감별 결과",
      quadCrisis: "🔥 복합 위기 과부하",
      quadCrisisSub: "고긴장 + 고탈진 (즉각 개입 필요)",
      quadStress: "⚡ 급성 스트레스 영역",
      quadStressSub: "긴장도는 높으나 에너지 회복력 유지",
      quadBurnout: "🧊 만성 번아웃 영역",
      quadBurnoutSub: "정서적 고갈 및 냉소주의 우세",
      quadHealthy: "🌱 균형 잡힌 적응",
      quadHealthySub: "관리 가능한 긴장 및 양호한 회복",
      stressMeterLabel: "상황적 긴장도 (Stress)",
      burnoutMeterLabel: "시스템적 탈진도 (Burnout)",
      protocolTitle: "권장 맞춤 회복 프로토콜:",
      copyBtn: "진단 결과 요약 복사",
      copied: "진단 결과가 클립보드에 복사되었습니다!",
      shareBtn: "결과 공유하기",
      bridgeStressTitle: "스트레스 자가진단",
      bridgeStressDesc: "5개 영역별 스트레스 지수를 측정하고 7일 리셋 계획을 세우세요.",
      bridgeGroundingTitle: "5-4-3-2-1 신체 그라운딩",
      bridgeGroundingDesc: "생리적 한숨(Cyclic Sigh) 호흡과 5감각 인지로 급성 불안과 과각성을 가라앉히세요.",
      bridgeMatrixTitle: "딜레마 결정 매트릭스",
      bridgeMatrixDesc: "결정 장애를 해소하고 가중치 기반으로 후회 없는 선택을 내리세요.",
      discTitle: "편집 기준 및 과학적 고지:",
      discText: "본 도구는 교감신경계 급성 긴장(PSS-10 프레임워크)과 만성 직무 탈진(MBI 프레임워크)을 비교하는 교육용 자기성찰 매트릭스입니다. 의학적 진단이나 치료를 대신하지 않으며, 일상에 심각한 지장이 있다면 전문 의료진과 상담하세요.",
      vCrisisTitle: "복합 위기 과부하 (이중 부담)",
      vCrisisDesc: "극심한 신경계 긴장감과 심각한 정서적 고갈이 동시에 겹친 상태입니다. 즉각적인 업무 덜어내기와 휴식이 절실합니다.",
      vCrisisProtocols: [
        "비필수적인 약속과 업무를 즉시 보류하고 절대적인 휴식 시간을 확보하세요.",
        "생리학적 한숨(두 번 깊게 들이쉬고 길게 내쉬기)을 하루 5분간 실천해 급성 과각성을 가라앉히세요.",
        "신뢰할 수 있는 멘토나 정신건강 전문의와의 상담을 적극 권장합니다."
      ],
      vStressTitle: "급성 스트레스 우세",
      vStressDesc: "긴장도와 과각성은 높지만, 아직 일에 대한 의욕과 정서적 기반은 살아있습니다. 상황적 대처가 핵심입니다.",
      vStressProtocols: [
        "아이젠하워 매트릭스로 업무의 우선순위를 재정비하고 불필요한 과몰입을 차단하세요.",
        "집중 근무 사이에 10분간의 신체 이완 스트레칭을 의무화하세요.",
        "스트레스 체크 도구로 나의 가장 취약한 스트레스 영역을 파악해보세요."
      ],
      vBurnoutTitle: "만성 번아웃 우세",
      vBurnoutDesc: "급성 불안은 덜하지만 정서적 바닥남, 일에 대한 냉소, 무기력감이 지배적입니다. 단순 휴식 이상의 심리적 경계 재설정이 필요합니다.",
      vBurnoutProtocols: [
        "내 에너지를 고갈시키는 대인관계 및 업무 요구에 '건강한 거절' 경계를 세우세요.",
        "거창한 성취 대신 아주 작은 일상의 마이크로 성공 경험으로 효능감을 되살리세요.",
        "번아웃 유형 테스트로 6가지 원인 중 어떤 패턴인지 정밀 점검해보세요."
      ],
      vHealthyTitle: "균형 잡힌 적응 상태",
      vHealthyDesc: "스트레스 긴장도와 탈진도 모두 건강하고 관리 가능한 범위 내에 있습니다. 회복 시스템이 안정적입니다.",
      vHealthyProtocols: [
        "현재의 규칙적인 수면, 운동, 휴식 루틴을 변함없이 유지하세요.",
        "무리한 일정 확장을 피하여 스트레스가 누적되지 않도록 예방 버퍼를 두세요.",
        "중요한 결정을 앞두고 있을 때는 딜레마 결정 매트릭스를 미리 활용해보세요."
      ],
      back: "← 도구 카탈로그",
      skip: "진단으로 바로가기",
      langLabel: "언어 선택:",
      privacy: "개인정보처리방침",
      terms: "이용약관"
    },
    ja: {
      title: "バーンアウト vs ストレス識別マトリクス | DopaBrain",
      metaDesc: "バーンアウトとストレスの違いを判定する2D疲労診断ツール。緊張度と消耗度の座標から最適な回復法を導き出します。",
      kicker: "疲労タイプ判別アセスメント",
      heroTitle: "バーンアウト vs ストレス識別マトリクス",
      heroLead: "その疲労は一時的なストレスですか？それとも慢性的バーンアウトですか？2次元の緊張と消耗座標で現状を客観的に可視化します。",
      chip1: "6つの判別質問",
      chip2: "2D座標マトリクス",
      chip3: "完全無料・端末内完結",
      screenTitle: "症状セルフチェック",
      screenSub: "過去2週間の状態に最も当てはまる頻度を選択してください。",
      badgeStress: "ストレス (緊張)",
      badgeBurnout: "バーンアウト (消耗)",
      opt0: "滅多にない (0)",
      opt1: "たまにある (1)",
      opt2: "よくある (2)",
      opt3: "常にある (3)",
      q1: "1. 焦燥感と思考の暴走: すべてを直ちに解決しなければという強い切迫感がある。",
      q2: "2. 感情の枯渇: 週末や休暇をとっても、気力や活力がまったく回復しない。",
      q3: "3. 身体の過覚醒: 筋肉のこわばり、浅い呼吸、落ち着かないそわそわ感がある。",
      q4: "4. 冷淡とシニシズム: 仕事や周囲に対して感情が麻痺し、無関心や苛立ちを感じる。",
      q5: "5. 過剰な感情の入れ込み: 結果に執着しすぎて、強い不安や焦りを抱く。",
      q6: "6. 無力感と自己効力感の低下: 「何をしても無駄だ」という諦めの気持ちがある。",
      calcBtn: "疲労座標を計算する",
      resetBtn: "リセット",
      verdictBadge: "識別判定結果",
      quadCrisis: "🔥 複合危機オーバーロード",
      quadCrisisSub: "高ストレス ＋ 高バーンアウト",
      quadStress: "⚡ 急性ストレス領域",
      quadStressSub: "緊張度は高いがエネルギー基盤は維持",
      quadBurnout: "🧊 慢性バーンアウト領域",
      quadBurnoutSub: "情緒的枯渇と脱人格化が優勢",
      quadHealthy: "🌱 健全な適応状態",
      quadHealthySub: "管理可能な負荷、良好な回復サイクル",
      stressMeterLabel: "状況的緊張度 (Stress)",
      burnoutMeterLabel: "系統的消耗度 (Burnout)",
      protocolTitle: "推奨される回復アクション:",
      copyBtn: "診断結果レポートをコピー",
      copied: "レポートをクリップボードにコピーしました！",
      shareBtn: "結果を共有",
      bridgeStressTitle: "ストレス測定テスト",
      bridgeStressDesc: "5領域のストレスをチェックし、7日間のリセット計画を作成。",
      bridgeGroundingTitle: "5-4-3-2-1 グラウンディング",
      bridgeGroundingDesc: "五感の認知と生理的ため息呼吸法で、急性の不安や過覚醒を落ち着かせます。",
      bridgeMatrixTitle: "意思決定マトリクス",
      bridgeMatrixDesc: "選択肢を重み付け評価し、分析麻痺を解消するツール。",
      discTitle: "科学的根拠と注意事項:",
      discText: "本ツールは急性の交感神経緊張と慢性的消耗を比較するセルフリフレクションツールです。医療診断を代替するものではありません。",
      vCrisisTitle: "複合危機オーバーロード",
      vCrisisDesc: "急性緊張と慢性枯渇が同時に重なっています。至急、休息と業務の棚卸しが必要です。",
      vCrisisProtocols: ["不要不急のタスクを直ちに停止し、休息時間を確保してください。", "生理的ため息を1日5分間実践し、過覚醒を落ち着かせましょう。", "医療専門家や信頼できる相談相手への相談をおすすめします。"],
      vStressTitle: "急性ストレス優勢",
      vStressDesc: "緊張は高いものの、活力は残っています。優先順位の整理と身体的リラクゼーションが有効です。",
      vStressProtocols: ["アイゼンハワーマトリクスで優先順位を整理し、過剰な介入を減らしましょう。", "作業合間に10分のストレッチや散歩を取り入れてください。", "ストレスチェックで一番負荷の高い領域を特定しましょう。"],
      vBurnoutTitle: "慢性バーンアウト優勢",
      vBurnoutDesc: "焦燥感よりも情緒的枯渇や無力感が前面に出ています。境界線の再設定が必要です。",
      vBurnoutProtocols: ["気力を奪う関係やタスクに対して適切な「断る境界線」を引きましょう。", "小さな日常の達成感を積み重ね、効力感を回復させましょう。", "バーンアウトテストで具体的な要因を深掘りしてください。"],
      vHealthyTitle: "健全な適応状態",
      vHealthyDesc: "緊張度・消耗度ともに健康な範囲内にあります。回復サイクルがうまく機能しています。",
      vHealthyProtocols: ["現在の規則正しい生活リズムと休息習慣を継続してください。", "負荷の増大に備え、適度な余白をスケジュールに残しましょう。", "大きな決断がある際は意思決定マトリクスをご活用ください。"],
      back: "← ツール一覧",
      skip: "診断へスキップ",
      langLabel: "言語選択:",
      privacy: "プライバシーポリシー",
      terms: "利用規約"
    },
    zh: {
      title: "职业倦怠与压力鉴别矩阵 | DopaBrain",
      metaDesc: "免费职业倦怠(Burnout)与急性压力(Stress)鉴别工具。在2D紧张度与精疲力竭度坐标系中精准定位疲劳类型，获取专属恢复方案。",
      kicker: "疲劳状态深度鉴别",
      heroTitle: "职业倦怠与压力鉴别矩阵",
      heroLead: "当前的疲劳是暂时的急性情境压力，还是慢性的系统性职业倦怠？通过2D紧张度与枯竭度坐标系，看清身心真实的消耗状态。",
      chip1: "6大核心鉴别题",
      chip2: "2D象限坐标系",
      chip3: "100% 本地运算 (隐私保护)",
      screenTitle: "症状自评测试",
      screenSub: "请根据过去两周内的实际感受选择符合的频率。",
      badgeStress: "压力 (紧张)",
      badgeBurnout: "倦怠 (枯竭)",
      opt0: "极少 (0)",
      opt1: "有时 (1)",
      opt2: "经常 (2)",
      opt3: "总是 (3)",
      q1: "1. 紧迫感与思绪飞转：总感到必须立刻解决所有事情的巨大压力。",
      q2: "2. 情感枯竭：周末和休息已经无法恢复身心能量。",
      q3: "3. 躯体过度唤醒：肌肉紧绷、呼吸急促或焦虑坐立不安。",
      q4: "4. 冷漠与疏离：对工作和人际感到情感麻木、厌倦或易怒。",
      q5: "5. 过度情感投入：对结果过度纠结，产生强烈的焦虑。",
      q6: "6. 无助感与无力感：觉得“做什么都无济于事”，完全丧失动力。",
      calcBtn: "计算身心坐标",
      resetBtn: "重置",
      verdictBadge: "鉴别诊断结果",
      quadCrisis: "🔥 复合危机超载",
      quadCrisisSub: "高压力 + 高倦怠 (需即刻干预)",
      quadStress: "⚡ 急性压力区域",
      quadStressSub: "高紧张度，但能量基底尚存",
      quadBurnout: "🧊 慢性倦怠区域",
      quadBurnoutSub: "情感耗竭与冷漠疏离占主导",
      quadHealthy: "🌱 健康平衡适应",
      quadHealthySub: "负荷在可控范围，恢复机制良好",
      stressMeterLabel: "情境紧张度 (Stress)",
      burnoutMeterLabel: "系统耗竭度 (Burnout)",
      protocolTitle: "推荐的科学恢复方案:",
      copyBtn: "复制诊断报告",
      copied: "报告已成功复制到剪贴板！",
      shareBtn: "分享结论",
      bridgeStressTitle: "压力深度测试",
      bridgeStressDesc: "全面测算5大生活维度的压力负荷与7天重置计划。",
      bridgeGroundingTitle: "5-4-3-2-1 身心着陆工具",
      bridgeGroundingDesc: "运用五感认知和生理性叹息呼吸，迅速平息急性焦虑与神经超载。",
      bridgeMatrixTitle: "决策抉择矩阵",
      bridgeMatrixDesc: "用加权数学评分摆脱纠结，化解选择困难症。",
      discTitle: "专业声明与边界说明:",
      discText: "本工具仅用于对比交感神经急性紧张与慢性职业耗竭的科普自我探索，不构成任何临床医学诊断。",
      vCrisisTitle: "复合危机超载 (双重重负)",
      vCrisisDesc: "急性神经系统紧张与深度慢性情感耗竭同时叠加，亟需暂停非核心事务，进行深层身心休整。",
      vCrisisProtocols: ["立即暂停非核心事务，坚决确保充分休息。", "练习双吸长呼法（生理性叹息）5分钟，平复应激反应。", "积极考虑向心理健康专业人士或值得信赖的导师倾诉。"],
      vStressTitle: "急性压力主导",
      vStressDesc: "虽然处于高度紧张状态，但内在活力与意愿依然存在。核心在于优先级管理与躯体放松。",
      vStressProtocols: ["运用艾森豪威尔矩阵对事项断舍离，减少过度参与。", "在高强度工作间隙强制执行10分钟拉伸与散步。", "利用压力测评工具找出发动应激的核心源头。"],
      vBurnoutTitle: "慢性倦怠主导",
      vBurnoutDesc: "急性焦虑相对较轻，但情感耗竭、冷漠和习得性无助显著。单靠睡眠无法根本恢复，需重设心理边界。",
      vBurnoutProtocols: ["对无节制消耗能量的人与事建立清晰拒绝边界。", "用微小的每日成就感重建自我效能感。", "完成倦怠类型测试，精准剖析背后的深层动力。"],
      vHealthyTitle: "健康平衡适应",
      vHealthyDesc: "压力与倦怠均在良好可控区间内，身心自我调节系统运转平稳。",
      vHealthyProtocols: ["继续维持当前良好的作息与运动习惯。", "在日程中预留缓冲弹性，防止隐性压力累积。", "面对重要权衡时，可提前使用决策矩阵理清思路。"],
      back: "← 工具目录",
      skip: "跳转至测试",
      langLabel: "选择语言:",
      privacy: "隐私政策",
      terms: "服务条款"
    },
    es: {
      title: "Matriz Diferencial: Burnout vs Estrés | DopaBrain",
      metaDesc: "Evaluación gratuita para diferenciar entre estrés situacional y agotamiento crónico (burnout). Mapea tu fatiga en un cuadrante 2D.",
      kicker: "EVALUACIÓN DIFERENCIAL DE FATIGA",
      heroTitle: "Matriz Diferencial: Burnout vs Estrés",
      heroLead: "¿Tu cansancio es estrés agudo o agotamiento crónico sistémico? Descúbrelo ubicando tu tensión y agotamiento en un cuadrante 2D interactivo.",
      chip1: "6 Preguntas Clave",
      chip2: "Cuadrante 2D",
      chip3: "100% Privado y Local",
      screenTitle: "Autoevaluación de Síntomas",
      screenSub: "Selecciona la frecuencia con la que experimentaste cada patrón en las últimas 2 semanas.",
      badgeStress: "Estrés (Tensión)",
      badgeBurnout: "Burnout (Agotamiento)",
      opt0: "Rara vez (0)",
      opt1: "A veces (1)",
      opt2: "A menudo (2)",
      opt3: "Siempre (3)",
      q1: "1. Urgencia y pensamientos acelerados: Siento una presión urgente por resolverlo todo de inmediato.",
      q2: "2. Agotamiento emocional: Los fines de semana y el descanso ya no me devuelven la energía.",
      q3: "3. Hiperactivación física: Tensión muscular, respiración corta o impaciencia constante.",
      q4: "4. Cinismo y desapego: Siento desconexión emocional, apatía o irritabilidad hacia el trabajo.",
      q5: "5. Sobreinvolucramiento: Me preocupo excesivamente por los resultados, causándome ansiedad.",
      q6: "6. Desesperanza e ineficacia: Siento que \"nada de lo que haga importa ya\".",
      calcBtn: "Calcular Coordenada",
      resetBtn: "Restablecer",
      verdictBadge: "VEREDICTO DIFERENCIAL",
      quadCrisis: "🔥 Sobrecarga de Crisis",
      quadCrisisSub: "Alto Estrés + Alto Burnout",
      quadStress: "⚡ Zona de Estrés Agudo",
      quadStressSub: "Alta Tensión, Energía Preservada",
      quadBurnout: "🧊 Zona de Burnout Crónico",
      quadBurnoutSub: "Agotamiento Alto, Cinismo Dominante",
      quadHealthy: "🌱 Adaptación Saludable",
      quadHealthySub: "Carga Manejable, Buena Recuperación",
      stressMeterLabel: "Tensión Situacional (Estrés)",
      burnoutMeterLabel: "Agotamiento Sistémico (Burnout)",
      protocolTitle: "Protocolos de Recuperación Recomendados:",
      copyBtn: "Copiar Informe",
      copied: "¡Informe copiado al portapapeles!",
      shareBtn: "Compartir Veredicto",
      bridgeStressTitle: "Test de Estrés Completo",
      bridgeStressDesc: "Analiza 5 dimensiones de estrés con plan de descompresión de 7 días.",
      bridgeGroundingTitle: "Herramienta de Anclaje 5-4-3-2-1",
      bridgeGroundingDesc: "Desescalada somática de ansiedad y pánico con suspiro fisiológico guiado.",
      bridgeMatrixTitle: "Matriz de Decisiones",
      bridgeMatrixDesc: "Supera la parálisis por análisis y toma decisiones óptimas ponderadas.",
      discTitle: "Aviso Científico y Editorial:",
      discText: "Esta herramienta educativa compara tensión nerviosa aguda con agotamiento crónico ocupacional. No constituye un diagnóstico médico.",
      vCrisisTitle: "Sobrecarga de Crisis (Doble Carga)",
      vCrisisDesc: "Tensión simpática extrema combinada con agotamiento emocional profundo. Se requiere descompresión urgente.",
      vCrisisProtocols: ["Pausa tareas secundarias y asegura descanso absoluto.", "Practica suspiro fisiológico durante 5 minutos para calmar el sistema.", "Consulta con un profesional de la salud o terapeuta de confianza."],
      vStressTitle: "Estrés Agudo Dominante",
      vStressDesc: "Tensión física y urgencia altas, pero tu motivación y capacidad base siguen intactas.",
      vStressProtocols: ["Aplica la matriz Eisenhower para priorizar y delegar.", "Haz pausas somáticas de 10 minutos entre bloques de trabajo.", "Explora tus fuentes de estrés con nuestro Test de Estrés."],
      vBurnoutTitle: "Burnout Crónico Dominante",
      vBurnoutDesc: "Poca ansiedad aguda, pero agotamiento emocional y desconexión severos. Necesitas límites firmes.",
      vBurnoutProtocols: ["Establece límites claros ante demandas que drenan tu energía.", "Reconstruye tu eficacia con micro-éxitos cotidianos.", "Haz el Test de Burnout para identificar el patrón exacto."],
      vHealthyTitle: "Adaptación Saludable",
      vHealthyDesc: "Tu tensión y agotamiento se encuentran en niveles seguros y sostenibles.",
      vHealthyProtocols: ["Mantén tus hábitos de descanso, ejercicio y límites.", "Conserva tiempo de margen en tu agenda.", "Usa nuestra Matriz de Decisiones para transiciones importantes."],
      back: "← Catálogo de Herramientas",
      skip: "Saltar al Test",
      langLabel: "Idioma:",
      privacy: "Privacidad",
      terms: "Términos"
    },
    de: {
      title: "Burnout vs. Stress Differenzial-Matrix | DopaBrain",
      metaDesc: "Kostenlose Differenzial-Analyse: Akuter Stress oder chronisches Burnout? Bestimmen Sie Ihre 2D-Koordinaten aus Anspannung und Erschöpfung.",
      kicker: "DIFFERENZIAL-DIAGNOSTIK FÜR ERSCHÖPFUNG",
      heroTitle: "Burnout vs. Stress Differenzial-Matrix",
      heroLead: "Handelt es sich um situativen Stress oder chronisches Burnout? Verorten Sie Ihre emotionale Belastung im interaktiven 2D-Quadranten.",
      chip1: "6 Schlüsselfragen",
      chip2: "2D-Koordinatensystem",
      chip3: "100% Lokal & Privat",
      screenTitle: "Symptom-Selbsteinschätzung",
      screenSub: "Wie oft traten diese Muster in den letzten 2 Wochen bei Ihnen auf?",
      badgeStress: "Stress (Anspannung)",
      badgeBurnout: "Burnout (Erschöpfung)",
      opt0: "Selten (0)",
      opt1: "Manchmal (1)",
      opt2: "Oft (2)",
      opt3: "Ständig (3)",
      q1: "1. Dringlichkeit & Gedankenrasen: Ich verspüre massiven Druck, alles sofort zu lösen.",
      q2: "2. Emotionale Leere: Wochenenden und Schlaf reichen nicht mehr aus, um Energie aufzubauen.",
      q3: "3. Körperliche Übererregung: Muskelverspannungen, flacher Atem oder innere Unruhe.",
      q4: "4. Zynismus & Distanzierung: Ich fühle mich emotional abgestumpft und reizbar gegenüber der Arbeit.",
      q5: "5. Übermäßige Involviertheit: Ich sorge mich extrem um Ergebnisse, was zu Unruhe führt.",
      q6: "6. Hilflosigkeit: Das Gefühl, dass meine Bemühungen ohnehin nichts mehr bewirken.",
      calcBtn: "Erschöpfungskoordinate berechnen",
      resetBtn: "Zurücksetzen",
      verdictBadge: "DIFFERENZIAL-VERDIKT",
      quadCrisis: "🔥 Krisen-Überlastung",
      quadCrisisSub: "Hoher Stress + Hohes Burnout",
      quadStress: "⚡ Akute Stresszone",
      quadStressSub: "Hohe Anspannung, Grundenergie intakt",
      quadBurnout: "🧊 Chronische Burnoutzone",
      quadBurnoutSub: "Tiefe Erschöpfung, Zynismus dominiert",
      quadHealthy: "🌱 Ausgeglichene Anpassung",
      quadHealthySub: "Beherrschbare Belastung, gute Erholung",
      stressMeterLabel: "Situative Anspannung (Stress)",
      burnoutMeterLabel: "Systemische Erschöpfung (Burnout)",
      protocolTitle: "Empfohlene Erholungs-Maßnahmen:",
      copyBtn: "Bericht kopieren",
      copied: "Bericht in die Zwischenablage kopiert!",
      shareBtn: "Ergebnis teilen",
      bridgeStressTitle: "Ausführlicher Stresstest",
      bridgeStressDesc: "Analysieren Sie 5 Stresskategorien mit 7-Tage-Entlastungsplan.",
      bridgeGroundingTitle: "5-4-3-2-1 Grounding-Übung",
      bridgeGroundingDesc: "Somatische Deeskalation von akuter Angst und Panik mit physiologischem Seufzen.",
      bridgeMatrixTitle: "Entscheidungsmatrix",
      bridgeMatrixDesc: "Lösen Sie Entscheidungsparalyse durch objektive Kriterienanalyse.",
      discTitle: "Wissenschaftlicher Hinweis:",
      discText: "Dieses Tool dient der pädagogischen Selbstreflexion und ersetzt keine ärztliche Diagnose.",
      vCrisisTitle: "Krisen-Überlastung (Doppelbelastung)",
      vCrisisDesc: "Akute Anspannung trifft auf chronische Erschöpfung. Sofortige Entlastung ist erforderlich.",
      vCrisisProtocols: ["Nicht-essenzielle Aufgaben sofort stoppen.", "Täglich 5 Minuten physiologisches Seufzen anwenden.", "Professionelle therapeutische Unterstützung in Betracht ziehen."],
      vStressTitle: "Akuter Stress dominant",
      vStressDesc: "Hohe Anspannung, aber Motivation und Ressourcen sind erhalten.",
      vStressProtocols: ["Eisenhower-Prinzip zur Aufgabenreduktion anwenden.", "10-minütige Bewegungspausen fest einplanen.", "Belastungsfaktoren im Stresstest prüfen."],
      vBurnoutTitle: "Chronisches Burnout dominant",
      vBurnoutDesc: "Wenig akute Unruhe, aber tiefe Erschöpfung und Distanzierung. Klare Grenzen nötig.",
      vBurnoutProtocols: ["Gesunde 'Nein'-Grenzen gegenüber Energieräubern setzen.", "Selbstwirksamkeit durch Mikrosiege schrittweise stärken.", "Ursachen im Burnout-Test vertiefen."],
      vHealthyTitle: "Ausgeglichene Anpassung",
      vHealthyDesc: "Anspannung und Erschöpfung befinden sich in einem stabilen Bereich.",
      vHealthyProtocols: ["Bestehende Schlafgewohnheiten und Hobbys beibehalten.", "Pufferzeiten im Kalender reservieren.", "Entscheidungsmatrix bei größeren Weichenstellungen nutzen."],
      back: "← Tool-Katalog",
      skip: "Direkt zum Test",
      langLabel: "Sprache:",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen"
    },
    fr: {
      title: "Matrice Différentielle : Burnout vs Stress | DopaBrain",
      metaDesc: "Évaluez si votre fatigue relève du stress aigu ou de l'épuisement professionnel (burnout) grâce à notre matrice 2D tension vs épuisement.",
      kicker: "ÉVALUATION DIFFÉRENTIELLE DE LA FATIGUE",
      heroTitle: "Matrice Différentielle : Burnout vs Stress",
      heroLead: "Simple coup de stress ou véritable épuisement professionnel ? Identifiez vos coordonnées émotionnelles sur un cadran 2D interactif.",
      chip1: "6 Questions Ciblées",
      chip2: "Quadrant 2D",
      chip3: "100% Local & Confidentiel",
      screenTitle: "Auto-évaluation des Symptômes",
      screenSub: "Indiquez la fréquence ressentie au cours des 2 dernières semaines.",
      badgeStress: "Stress (Tension)",
      badgeBurnout: "Burnout (Épuisement)",
      opt0: "Rarement (0)",
      opt1: "Parfois (1)",
      opt2: "Souvent (2)",
      opt3: "Constamment (3)",
      q1: "1. Sentiment d'urgence : J'ai l'impression de devoir tout régler sur-le-champ.",
      q2: "2. Épuisement émotionnel : Les week-ends et le repos ne suffisent plus à me recharger.",
      q3: "3. Hyperactivation physique : Tensions musculaires, souffle court, fébrilité constante.",
      q4: "4. Cynisme et détachement : Je ressens un engourdissement ou de l'irritabilité face au travail.",
      q5: "5. Surinvestissement anxieux : Je m'inquiète excessivement des résultats et des jugements.",
      q6: "6. Impuissance et perte de sens : L'impression que mes efforts ne servent plus à rien.",
      calcBtn: "Calculer les coordonnées",
      resetBtn: "Réinitialiser",
      verdictBadge: "VERDICT DIFFÉRENTIEL",
      quadCrisis: "🔥 Surcharge de Crise",
      quadCrisisSub: "Stress Élevé + Burnout Élevé",
      quadStress: "⚡ Zone de Stress Aigu",
      quadStressSub: "Forte Tension, Énergie Préservée",
      quadBurnout: "🧊 Zone de Burnout Chronique",
      quadBurnoutSub: "Épuisement Sévère, Cynisme",
      quadHealthy: "🌱 Adaptation Équilibrée",
      quadHealthySub: "Charge Maîtrisée, Bonne Récupération",
      stressMeterLabel: "Tension Situationnelle (Stress)",
      burnoutMeterLabel: "Épuisement Systémique (Burnout)",
      protocolTitle: "Protocoles de Récupération Recommandés :",
      copyBtn: "Copier le bilan",
      copied: "Bilan copié dans le presse-papiers !",
      shareBtn: "Partager le verdict",
      bridgeStressTitle: "Bilan Complet du Stress",
      bridgeStressDesc: "Évaluez vos 5 sources de stress et planifiez 7 jours de décompression.",
      bridgeGroundingTitle: "Outil d'Ancrage 5-4-3-2-1",
      bridgeGroundingDesc: "Désescalade somatique de l'anxiété avec soupir physiologique guidé.",
      bridgeMatrixTitle: "Matrice de Décision",
      bridgeMatrixDesc: "Tranchez vos dilemmes complexes sans surcharge mentale grâce au calcul pondéré.",
      discTitle: "Avertissement Scientifique :",
      discText: "Cet outil éducatif ne remplace aucun avis médical ou diagnostic clinique.",
      vCrisisTitle: "Surcharge de Crise (Double Poids)",
      vCrisisDesc: "Tension nerveuse aiguë et épuisement émotionnel profond se cumulent. Repos immédiat impératif.",
      vCrisisProtocols: ["Stoppez immédiatement les obligations secondaires.", "Pratiquez le soupir physiologique 5 min par jour pour apaiser l'organisme.", "Consultez un professionnel de santé qualifié."],
      vStressTitle: "Stress Aigu Dominant",
      vStressDesc: "Tension élevée mais motivation intacte. Priorisez l'organisation et la relaxation corporelle.",
      vStressProtocols: ["Triez vos priorités via la matrice d'Eisenhower.", "Planifiez des pauses corporelles de 10 minutes.", "Identifiez vos déclencheurs avec notre test de stress."],
      vBurnoutTitle: "Burnout Chronique Dominant",
      vBurnoutDesc: "Moins d'agitation, mais une fatigue émotionnelle et un détachement profonds. Posez des limites.",
      vBurnoutProtocols: ["Posez des limites claires et refusez les sollicitations excessives.", "Retrouvez confiance par de petites micro-victoires concrètes.", "Approfondissez votre analyse avec le test de burnout."],
      vHealthyTitle: "Adaptation Équilibrée",
      vHealthyDesc: "Vos niveaux de tension et de fatigue sont dans des seuils sains et durables.",
      vHealthyProtocols: ["Préservez vos rythmes de sommeil et de déconnexion.", "Gardez des marges de sécurité dans votre emploi du temps.", "Utilisez notre matrice décisionnelle lors des choix majeurs."],
      back: "← Catalogue d'outils",
      skip: "Passer au test",
      langLabel: "Langue :",
      privacy: "Confidentialité",
      terms: "Conditions"
    },
    pt: {
      title: "Matriz Diferencial: Burnout vs Estresse | DopaBrain",
      metaDesc: "Avaliação gratuita: estresse situacional ou esgotamento crônico (burnout)? Mapeie sua fadiga em um quadrante 2D interativo.",
      kicker: "AVALIAÇÃO DIFERENCIAL DE FADIGA",
      heroTitle: "Matriz Diferencial: Burnout vs Estresse",
      heroLead: "Seu cansaço é estresse agudo ou esgotamento crônico? Descubra mapeando sua tensão e exaustão em um quadrante 2D.",
      chip1: "6 Questões Essenciais",
      chip2: "Quadrante 2D",
      chip3: "100% Local e Privado",
      screenTitle: "Autoavaliação de Sintomas",
      screenSub: "Indique a frequência com que vivenciou cada reação nas últimas 2 semanas.",
      badgeStress: "Estresse (Tensão)",
      badgeBurnout: "Burnout (Exaustão)",
      opt0: "Raramente (0)",
      opt1: "Às vezes (1)",
      opt2: "Frequentemente (2)",
      opt3: "Constantemente (3)",
      q1: "1. Urgência e pensamentos acelerados: Sinto pressão para resolver tudo imediatamente.",
      q2: "2. Exaustão emocional: Fins de semana e sono não recarregam mais minha energia.",
      q3: "3. Hiperativação física: Tensão muscular, respiração curta ou agitação constante.",
      q4: "4. Cinismo e distanciamento: Sinto frieza, desconexão ou irritabilidade com o trabalho.",
      q5: "5. Sobreinvestimento ansioso: Preocupo-me excessivamente com resultados e cobranças.",
      q6: "6. Sensação de ineficácia: Sinto que \"nada do que faço tem valor ou efeito\".",
      calcBtn: "Calcular Coordenada",
      resetBtn: "Redefinir",
      verdictBadge: "VEREDITO DIFERENCIAL",
      quadCrisis: "🔥 Sobrecarga de Crise",
      quadCrisisSub: "Alto Estresse + Alto Burnout",
      quadStress: "⚡ Zona de Estresse Agudo",
      quadStressSub: "Alta Tensão, Energia Mantida",
      quadBurnout: "🧊 Zona de Burnout Crônico",
      quadBurnoutSub: "Exaustão Severa, Cinismo",
      quadHealthy: "🌱 Adaptação Saudável",
      quadHealthySub: "Carga Manejável, Boa Recuperação",
      stressMeterLabel: "Tensão Situacional (Estresse)",
      burnoutMeterLabel: "Esgotamento Sistêmico (Burnout)",
      protocolTitle: "Protocolos de Recuperação Recomendados:",
      copyBtn: "Copiar Relatório",
      copied: "Relatório copiado para a área de transferência!",
      shareBtn: "Compartilhar Veredito",
      bridgeStressTitle: "Check-up de Estresse",
      bridgeStressDesc: "Analise 5 áreas de estresse com plano prático de descompressão.",
      bridgeGroundingTitle: "Ferramenta de Aterramento 5-4-3-2-1",
      bridgeGroundingDesc: "Desescalada somática de ansiedade e pânico com suspiro fisiológico guiado.",
      bridgeMatrixTitle: "Matriz de Decisão",
      bridgeMatrixDesc: "Resolva dilemas difíceis com pontuação ponderada sem sobrecarga.",
      discTitle: "Aviso Legal & Científico:",
      discText: "Ferramenta reflexiva educacional. Não substitui consulta médica ou diagnóstico formal.",
      vCrisisTitle: "Sobrecarga de Crise",
      vCrisisDesc: "Tensão aguda e esgotamento profundo sobrepostos. Desaceleração urgente necessária.",
      vCrisisProtocols: ["Pause tarefas secundárias imediatamente.", "Faça o suspiro fisiológico por 5 min ao dia.", "Busque acompanhamento com um profissional de saúde mental."],
      vStressTitle: "Estresse Agudo Predominante",
      vStressDesc: "Tensão alta, mas motivação preservada. Foque em organização e relaxamento corporal.",
      vStressProtocols: ["Organize prioridades na matriz de Eisenhower.", "Faça pausas corporais de 10 minutos.", "Mapeie os gatilhos no teste de estresse."],
      vBurnoutTitle: "Burnout Crônico Predominante",
      vBurnoutDesc: "Pouca ansiedade aguda, mas exaustão e cinismo profundos. Defina limites claros.",
      vBurnoutProtocols: ["Estabeleça limites firmes contra demandas que drenam energia.", "Restabeleça a autoconfiança com microvitórias.", "Aprofunde no teste de perfil de burnout."],
      vHealthyTitle: "Adaptação Saudável",
      vHealthyDesc: "Níveis equilibrados e sustentáveis de estresse e energia.",
      vHealthyProtocols: ["Mantenha sua rotina regular de sono e lazer.", "Mantenha margens livres na agenda.", "Utilize a matriz decisória ao planejar novos passos."],
      back: "← Catálogo de Ferramentas",
      skip: "Pular para o teste",
      langLabel: "Idioma:",
      privacy: "Privacidade",
      terms: "Termos"
    },
    ru: {
      title: "Выгорание или стресс: дифференциальная матрица | DopaBrain",
      metaDesc: "Бесплатный тест различия выгорания и стресса. Определите свой уровень истощения и напряжения в 2D-системе координат.",
      kicker: "ДИФФЕРЕНЦИАЛЬНЫЙ ТЕСТ УСТАЛОСТИ",
      heroTitle: "Выгорание или стресс: матрица различий",
      heroLead: "Это ситуативный стресс или системное эмоциональное выгорание? Узнайте точное положение на 2D-матрице напряжения и истощения.",
      chip1: "6 Ключевых Вопросов",
      chip2: "2D-Координаты",
      chip3: "100% Локально и Анонимно",
      screenTitle: "Самооценка Симптомов",
      screenSub: "Как часто за последние 2 недели вы ощущали следующие проявления?",
      badgeStress: "Стресс (Напряжение)",
      badgeBurnout: "Выгорание (Истощение)",
      opt0: "Редко (0)",
      opt1: "Иногда (1)",
      opt2: "Часто (2)",
      opt3: "Постоянно (3)",
      q1: "1. Спешка и навязчивые мысли: Чувствую давление решить всё немедленно.",
      q2: "2. Эмоциональное истощение: Выходные и сон больше не восстанавливают силы.",
      q3: "3. Физическое перевозбуждение: Мышечные спазмы, поверхностное дыхание, тревога.",
      q4: "4. Цинизм и отстраненность: Чувствую онемение, раздражение или равнодушие к работе.",
      q5: "5. Чрезмерная включенность: Слишком переживаю за результат, испытывая сильный стресс.",
      q6: "6. Бессилие: Кажется, будто любые усилия бессмысленны.",
      calcBtn: "Рассчитать координаты",
      resetBtn: "Сброс",
      verdictBadge: "ДИФФЕРЕНЦИАЛЬНЫЙ ВЕРДИКТ",
      quadCrisis: "🔥 Кризисная Перегрузка",
      quadCrisisSub: "Высокий Стресс + Сильное Выгорание",
      quadStress: "⚡ Зона Острого Стресса",
      quadStressSub: "Высокое Напряжение, Энергия Сохранена",
      quadBurnout: "🧊 Зона Хронического Выгорания",
      quadBurnoutSub: "Глубокое Истощение, Цинизм",
      quadHealthy: "🌱 Сбалансированная Адаптация",
      quadHealthySub: "Контролируемая Нагрузка, Хороший Отдых",
      stressMeterLabel: "Ситуативное Напряжение (Стресс)",
      burnoutMeterLabel: "Системное Истощение (Выгорание)",
      protocolTitle: "Рекомендуемые Шаги Восстановления:",
      copyBtn: "Копировать отчет",
      copied: "Отчет скопирован в буфер обмена!",
      shareBtn: "Поделиться вердиктом",
      bridgeStressTitle: "Тест на Стресс",
      bridgeStressDesc: "Оцените 5 сфер напряжения и составьте план декомпрессии на 7 дней.",
      bridgeGroundingTitle: "Техника Заземления 5-4-3-2-1",
      bridgeGroundingDesc: "Соматическое снятие тревоги и паники с помощью физиологического вздоха.",
      bridgeMatrixTitle: "Матрица Решений",
      bridgeMatrixDesc: "Преодолейте аналитический паралич с помощью взвешенной математической оценки.",
      discTitle: "Научное Предупреждение:",
      discText: "Инструмент предназначен для самопознания и не заменяет медицинскую консультацию.",
      vCrisisTitle: "Кризисная Перегрузка",
      vCrisisDesc: "Наложение острого мышечно-нервного стресса на глубокое эмоциональное выгорание. Нужен срочный отдых.",
      vCrisisProtocols: ["Немедленно отложите некритичные дела.", "Выполняйте технику физиологического вздоха 5 минут в день.", "Обратитесь за поддержкой к специалисту."],
      vStressTitle: "Доминирует Острый Стресс",
      vStressDesc: "Высокая тревожность, но жизненные ресурсы и мотивация в порядке.",
      vStressProtocols: ["Используйте матрицу Эйзенхауэра для расстановки приоритетов.", "Внедрите 10-минутные физические перерывы.", "Пройдите тест на стресс для точечной работы."],
      vBurnoutTitle: "Доминирует Хроническое Выгорание",
      vBurnoutDesc: "Меньше паники, но преобладает опустошение и цинизм. Нужны жесткие границы.",
      vBurnoutProtocols: ["Установите границы в общении и научитесь говорить 'нет'.", "Возвращайте веру в себя через микроуспехи.", "Определите первопричину в тесте выгорания."],
      vHealthyTitle: "Сбалансированная Адаптация",
      vHealthyDesc: "Показатели в норме, защитные механизмы психики справляются отлично.",
      vHealthyProtocols: ["Поддерживайте текущий режим сна и отдыха.", "Оставляйте свободные окна в расписании.", "Используйте матрицу решений при планировании шагов."],
      back: "← Каталог инструментов",
      skip: "Перейти к тесту",
      langLabel: "Язык:",
      privacy: "Конфиденциальность",
      terms: "Условия"
    },
    hi: {
      title: "बर्नआउट बनाम तनाव अंतर मैट्रिक्स | DopaBrain",
      metaDesc: "निःशुल्क बर्नआउट बनाम तनाव अंतर मूल्यांकन। 2D मैट्रिक्स पर अपनी थकान को मापें और सही समाधान पाएं।",
      kicker: "थकान अंतर मूल्यांकन",
      heroTitle: "बर्नआउट बनाम तनाव अंतर मैट्रिक्स",
      heroLead: "क्या यह सामान्य तनाव है या गहरा बर्नआउट? 2D तनाव और थकान निर्देशांक पर अपनी वास्तविक स्थिति जानें।",
      chip1: "6 प्रमुख प्रश्न",
      chip2: "2D निर्देशांक ग्रिड",
      chip3: "100% निजी व सुरक्षित",
      screenTitle: "लक्षण स्व-मूल्यांकन",
      screenSub: "पिछले 2 हफ्तों में अपने अनुभवों के आधार पर चुनें।",
      badgeStress: "तनाव (दबाव)",
      badgeBurnout: "बर्नआउट (थकान)",
      opt0: "शायद ही कभी (0)",
      opt1: "कभी-कभी (1)",
      opt2: "अक्सर (2)",
      opt3: "हमेशा (3)",
      q1: "1. जल्दबाजी और बेचैनी: सब कुछ तुरंत ठीक करने का तीव्र दबाव महसूस होना।",
      q2: "2. भावनात्मक खालीपन: सप्ताहांत और नींद के बाद भी ऊर्जा न लौटना।",
      q3: "3. शारीरिक खिंचाव: मांसपेशियों में तनाव, उथली सांसें या अधीरता।",
      q4: "4. अलगाव और उदासीनता: काम या लोगों के प्रति सुन्नता या चिड़चिड़ापन महसूस होना।",
      q5: "5. अत्यधिक चिंता: परिणामों को लेकर अत्यधिक परेशान रहना।",
      q6: "6. लाचारी: ऐसा लगना कि मेरे किसी प्रयास का कोई असर नहीं हो रहा।",
      calcBtn: "निर्देशांक की गणना करें",
      resetBtn: "रीसेट",
      verdictBadge: "अंतर परिणाम",
      quadCrisis: "🔥 संकट अधिभार",
      quadCrisisSub: "उच्च तनाव + गहरा बर्नआउट",
      quadStress: "⚡ तीव्र तनाव क्षेत्र",
      quadStressSub: "उच्च खिंचाव, ऊर्जा बरकरार",
      quadBurnout: "🧊 क्रोनिक बर्नआउट क्षेत्र",
      quadBurnoutSub: "गहरी थकान, उदासीनता हावी",
      quadHealthy: "🌱 संतुलित अनुकूलन",
      quadHealthySub: "नियंत्रणीय तनाव, अच्छा सुधार",
      stressMeterLabel: "परिस्थितिजन्य तनाव (Stress)",
      burnoutMeterLabel: "प्रणालीगत थकान (Burnout)",
      protocolTitle: "सुझाए गए सुधार कदम:",
      copyBtn: "रिपोर्ट कॉपी करें",
      copied: "रिपोर्ट क्लिपबोर्ड पर कॉपी हो गई!",
      shareBtn: "निर्णय साझा करें",
      bridgeStressTitle: "पूर्ण तनाव जांच",
      bridgeStressDesc: "5 तनाव क्षेत्रों का विश्लेषण करें और 7-दिवसीय रीसेट योजना बनाएं।",
      bridgeGroundingTitle: "5-4-3-2-1 ग्राउंडिंग टूल",
      bridgeGroundingDesc: "निर्देशित शारीरिक श्वास तकनीक से तीव्र चिंता और घबराहट को शांत करें।",
      bridgeMatrixTitle: "निर्णय मैट्रिक्स",
      bridgeMatrixDesc: "तनाव मुक्त होकर भारित मूल्यांकन के साथ सही विकल्प चुनें।",
      discTitle: "वैज्ञानिक सूचना:",
      discText: "यह एक शैक्षणिक उपकरण है और किसी चिकित्सकीय निदान का विकल्प नहीं है।",
      vCrisisTitle: "संकट अधिभार (दोहरा बोझ)",
      vCrisisDesc: "तीव्र तनाव और गहरी भावनात्मक थकावट एक साथ। तत्काल आराम और ठहराव आवश्यक है।",
      vCrisisProtocols: ["गैर-जरूरी कामों को तुरंत रोकें।", "दिन में 5 मिनट फिजियोलॉजिकल सांस लेने का अभ्यास करें।", "किसी विशेषज्ञ से परामर्श लेने पर विचार करें।"],
      vStressTitle: "तीव्र तनाव प्रमुख",
      vStressDesc: "तनाव अधिक है, लेकिन आपकी मूल ऊर्जा और काम करने की इच्छा अभी भी मौजूद है।",
      vStressProtocols: ["आइजनहावर मैट्रिक्स के साथ प्राथमिकताओं को व्यवस्थित करें।", "काम के बीच 10 मिनट का शारीरिक ब्रेक लें।", "तनाव परीक्षण से मुख्य कारणों को पहचानें।"],
      vBurnoutTitle: "क्रोनिक बर्नआउट प्रमुख",
      vBurnoutDesc: "चिंता कम है, लेकिन भावनात्मक खालीपन और उदासीनता अधिक है। सीमाएं तय करना आवश्यक है।",
      vBurnoutProtocols: ["ऊर्जा सोखने वाले कार्यों और लोगों से स्पष्ट सीमाएं बनाएं।", "छोटी-छोटी जीतों के साथ अपना आत्मविश्वास वापस पाएं।", "बर्नआउट टेस्ट से मूल कारण की जांच करें।"],
      vHealthyTitle: "संतुलित अनुकूलन",
      vHealthyDesc: "तनाव और थकान दोनों सामान्य और स्वस्थ सीमा के भीतर हैं।",
      vHealthyProtocols: ["अपनी नींद और आराम की दिनचर्या बनाए रखें।", "शेड्यूल में खाली समय अवश्य रखें।", "बड़े निर्णयों के लिए निर्णय मैट्रिक्स का उपयोग करें।"],
      back: "← उपकरण सूची",
      skip: "परीक्षण पर जाएं",
      langLabel: "भाषा:",
      privacy: "गोपनीयता",
      terms: "नियम"
    },
    id: {
      title: "Matriks Perbedaan Burnout vs Stres | DopaBrain",
      metaDesc: "Kuis interaktif gratis: Stres situasional atau burnout kronis? Petakan kelelahan Anda pada kuadran 2D ketegangan vs keletihan.",
      kicker: "ASESMEN DIFERENSIAL KELELAHAN",
      heroTitle: "Matriks Perbedaan Burnout vs Stres",
      heroLead: "Apakah kelelahan Anda merupakan stres situasional akut atau burnout sistemik kronis? Petakan ketegangan dan keletihan Anda pada kuadran 2D.",
      chip1: "6 Pertanyaan Kunci",
      chip2: "Kuadran 2D",
      chip3: "100% Lokal & Privat",
      screenTitle: "Penilaian Mandiri Gejala",
      screenSub: "Pilih seberapa sering Anda mengalami pola ini dalam 2 minggu terakhir.",
      badgeStress: "Stres (Ketegangan)",
      badgeBurnout: "Burnout (Keletihan)",
      opt0: "Jarang (0)",
      opt1: "Kadang (1)",
      opt2: "Sering (2)",
      opt3: "Selalu (3)",
      q1: "1. Ketergesaan & Pikiran Berpacu: Merasa tekanan mendesak untuk menyelesaikan semuanya segera.",
      q2: "2. Kehabisan Emosional: Akhir pekan dan tidur tidak lagi memulihkan energi saya.",
      q3: "3. Ketegangan Fisik: Otot tegang, napas pendek, atau gelisah tak menentu.",
      q4: "4. Sinisme & Menjauh: Merasa mati rasa secara emosional atau mudah kesal pada pekerjaan.",
      q5: "5. Terlalu Emosional: Sangat cemas memikirkan hasil hingga gelisah.",
      q6: "6. Ketidakberdayaan: Merasa bahwa \"apapun yang saya lakukan tidak lagi berguna\".",
      calcBtn: "Hitung Titik Koordinat",
      resetBtn: "Reset",
      verdictBadge: "HASIL DIFERENSIAL",
      quadCrisis: "🔥 Beban Krisis Berlebih",
      quadCrisisSub: "Stres Tinggi + Burnout Tinggi",
      quadStress: "⚡ Zona Stres Akut",
      quadStressSub: "Ketegangan Tinggi, Energi Terjaga",
      quadBurnout: "🧊 Zona Burnout Kronis",
      quadBurnoutSub: "Keletihan Parah, Sinisme Mendominasi",
      quadHealthy: "🌱 Adaptasi Seimbang",
      quadHealthySub: "Beban Terkendali, Pemulihan Baik",
      stressMeterLabel: "Ketegangan Situasional (Stres)",
      burnoutMeterLabel: "Keletihan Sistemik (Burnout)",
      protocolTitle: "Protokol Pemulihan yang Disarankan:",
      copyBtn: "Salin Laporan",
      copied: "Laporan berhasil disalin ke papan klip!",
      shareBtn: "Bagikan Hasil",
      bridgeStressTitle: "Tes Stres Lengkap",
      bridgeStressDesc: "Analisis 5 kategori stres dengan rencana dekompresi 7 hari.",
      bridgeGroundingTitle: "Alat Grounding 5-4-3-2-1",
      bridgeGroundingDesc: "Meredakan kecemasan dan panik somatik dengan teknik pernapasan terpandu.",
      bridgeMatrixTitle: "Matriks Keputusan",
      bridgeMatrixDesc: "Atasi kelumpuhan analisis dan buat keputusan berbobot dengan tenang.",
      discTitle: "Batasan Ilmiah:",
      discText: "Alat ini ditujukan untuk refleksi diri edukatif dan bukan pengganti diagnosis medis.",
      vCrisisTitle: "Beban Krisis Berlebih",
      vCrisisDesc: "Ketegangan saraf akut dan keletihan emosional mendalam terjadi bersamaan. Wajib istirahat darurat.",
      vCrisisProtocols: ["Hentikan segera tugas-tugas non-esensial.", "Lakukan desahan fisiologis 5 menit sehari.", "Pertimbangkan berkonsultasi dengan profesional kesehatan mental."],
      vStressTitle: "Stres Akut Mendominasi",
      vStressDesc: "Ketegangan tinggi tetapi motivasi dan cadangan energi masih bertahan.",
      vStressProtocols: ["Gunakan matriks Eisenhower untuk menyaring prioritas.", "Selipkan jeda fisik 10 menit di sela kerja.", "Periksa pemicu spesifik di tes stres."],
      vBurnoutTitle: "Burnout Kronis Mendominasi",
      vBurnoutDesc: "Kecemasan tidak terlalu kentara, tetapi kehabisan emosi dan keputusasaan sangat kuat.",
      vBurnoutProtocols: ["Terapkan batasan tegas terhadap tuntutan yang menguras energi.", "Bangun kembali rasa percaya diri melalui kemenangan-kemenangan kecil.", "Periksa faktor penyebabnya di tes burnout."],
      vHealthyTitle: "Adaptasi Seimbang",
      vHealthyDesc: "Ketegangan dan keletihan berada dalam ambang batas normal dan sehat.",
      vHealthyProtocols: ["Pertahankan pola tidur dan istirahat Anda saat ini.", "Sediakan waktu luang di jadwal harian.", "Gunakan matriks keputusan saat menghadapi pilihan besar."],
      back: "← Katalog Alat",
      skip: "Langsung ke Tes",
      langLabel: "Pilih Bahasa:",
      privacy: "Privasi",
      terms: "Syarat Ketentuan"
    },
    tr: {
      title: "Tükenmişlik vs Stres Ayırıcı Matris | DopaBrain",
      metaDesc: "Ücretsiz tükenmişlik (burnout) ve stres ayrım testi. Yorgunluğunuzu 2D gerilim ve tükenme matrisinde konumlandırın.",
      kicker: "YORGUNLUK AYIRICI DEĞERLENDİRME",
      heroTitle: "Tükenmişlik vs Stres Ayırıcı Matris",
      heroLead: "Yaşadığınız şey geçici akut stres mi yoksa kronik tükenmişlik mi? 2D koordinat sisteminde gerilim ve tükenmişlik düzeyinizi keşfedin.",
      chip1: "6 Temel Soru",
      chip2: "2D Koordinat Sistemi",
      chip3: "%100 Yerel ve Gizli",
      screenTitle: "Belirti Öz Değerlendirmesi",
      screenSub: "Son 2 haftadaki deneyimlerinize göre uygun sıklığı seçin.",
      badgeStress: "Stres (Gerilim)",
      badgeBurnout: "Tükenmişlik (Tükenme)",
      opt0: "Nadiren (0)",
      opt1: "Bazen (1)",
      opt2: "Sık sık (2)",
      opt3: "Sürekli (3)",
      q1: "1. Acele ve Düşünce Fırtınası: Her şeyi anında çözmem gerektiğine dair yoğun bir baskı hissediyorum.",
      q2: "2. Duygusal Boşalma: Hafta sonları ve uyku artık enerjimi geri kazandırmıyor.",
      q3: "3. Fiziksel Aşırı Uyarılma: Kas gerginliği, sığ nefes alma veya huzursuzluk.",
      q4: "4. Duyarsızlaşma & Alaycılık: İşe karşı duygusal olarak uyuşmuş veya tahammülsüz hissediyorum.",
      q5: "5. Aşırı Kaygı: Sonuçlar hakkında aşırı derecede endişelenmek.",
      q6: "6. Çaresizlik: \"Ne yaparsam yapayım hiçbir şey değişmeyecek\" hissi.",
      calcBtn: "Koordinatları Hesapla",
      resetBtn: "Sıfırla",
      verdictBadge: "AYIRICI SONUÇ",
      quadCrisis: "🔥 Kriz Aşırı Yüklenmesi",
      quadCrisisSub: "Yüksek Stres + Yüksek Tükenmişlik",
      quadStress: "⚡ Akut Stres Bölgesi",
      quadStressSub: "Yüksek Gerilim, Enerji Korunuyor",
      quadBurnout: "🧊 Kronik Tükenmişlik Bölgesi",
      quadBurnoutSub: "Derin Tükenme, Duyarsızlaşma Hakim",
      quadHealthy: "🌱 Dengeli Uyum",
      quadHealthySub: "Yönetilebilir Yük, İyi Toparlanma",
      stressMeterLabel: "Durumsal Gerilim (Stres)",
      burnoutMeterLabel: "Sistemik Tükenme (Tükenmişlik)",
      protocolTitle: "Önerilen İyileşme Adımları:",
      copyBtn: "Raporu Kopyala",
      copied: "Rapor panoya kopyalandı!",
      shareBtn: "Kararı Paylaş",
      bridgeStressTitle: "Kapsamlı Stres Testi",
      bridgeStressDesc: "5 stres kategorisini inceleyin ve 7 günlük rahatlama planı oluşturun.",
      bridgeGroundingTitle: "5-4-3-2-1 Topraklama Aracı",
      bridgeGroundingDesc: "Rehberli fizyolojik iç çekme ile panik ve somatik kaygıyı yatıştırın.",
      bridgeMatrixTitle: "Karar Matrisi",
      bridgeMatrixDesc: "Analiz felcini aşın ve ağırlıklı puanlamayla net kararlar alın.",
      discTitle: "Bilimsel Bilgilendirme:",
      discText: "Bu araç eğitsel amaçlı bir öz değerlendirmedir; tıbbi tanı veya tedavi yerine geçmez.",
      vCrisisTitle: "Kriz Aşırı Yüklenmesi",
      vCrisisDesc: "Akut sinir sistemi gerilimi ile kronik duygusal tükenmişlik üst üste binmiş durumda. Acil dinlenme şart.",
      vCrisisProtocols: ["Zorunlu olmayan tüm görevleri hemen durdurun.", "Günde 5 dakika fizyolojik iç çekme nefes egzersizi yapın.", "Bir sağlık uzmanından destek almayı değerlendirin."],
      vStressTitle: "Akut Stres Hakim",
      vStressDesc: "Gerilim yüksek ancak motivasyon ve temel enerji rezervleriniz hala sağlam.",
      vStressProtocols: ["Eisenhower matrisiyle öncelikleri netleştirin.", "İş aralarında 10 dakikalık fiziksel esneme molaları verin.", "Stres testi ile tetikleyici alanları tespit edin."],
      vBurnoutTitle: "Kronik Tükenmişlik Hakim",
      vBurnoutDesc: "Kaygı daha az ama derin bir tükenme ve kopukluk var. Sınırlar koymak elzemdir.",
      vBurnoutProtocols: ["Enerjinizi tüketen taleplere karşı net 'hayır' sınırları çizin.", "Küçük başarılarla özgüveninizi yeniden inşa edin.", "Tükenmişlik testiyle kök nedeni inceleyin."],
      vHealthyTitle: "Dengeli Uyum",
      vHealthyDesc: "Gerilim ve tükenmişlik sağlıklı ve dengeli sınırlar içinde.",
      vHealthyProtocols: ["Mevcut uyku ve dinlenme alışkanlıklarınızı sürdürün.", "Takviminizde esneklik payı bırakın.", "Büyük kararlarda karar matrisimizi kullanın."],
      back: "← Araç Kataloğu",
      skip: "Teste Git",
      langLabel: "Dil Seçimi:",
      privacy: "Gizlilik",
      terms: "Şartlar"
    }
  };

  const userAnswers = { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null };
  let currentLang = 'en';

  function detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam && translations[langParam]) return langParam;
    const userLang = (navigator.language || '').slice(0, 2).toLowerCase();
    if (translations[userLang]) return userLang;
    return 'en';
  }

  function t(key) {
    const dict = translations[currentLang] || translations.en;
    return dict[key] !== undefined ? dict[key] : (translations.en[key] || key);
  }

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (Array.isArray(val)) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });

    // Update document title & meta tags
    document.title = t('title');
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', t('metaDesc'));

    // Update Language Select
    const select = document.getElementById('langSelect');
    if (select) select.value = lang;

    // Decorate bridge links with current language
    const bridgeStress = document.getElementById('bridgeStress');
    const bridgeGrounding = document.getElementById('bridgeGrounding');
    const bridgeMatrix = document.getElementById('bridgeMatrix');

    if (bridgeStress) bridgeStress.href = `/stress-check/${lang !== 'ko' ? '?lang=' + lang : ''}`;
    if (bridgeGrounding) bridgeGrounding.href = `/portal/tools/grounding-exercise.html?lang=${encodeURIComponent(lang)}`;
    if (bridgeMatrix) bridgeMatrix.href = `/portal/tools/decision-matrix.html?lang=${lang}`;

    // If result is already showing, re-render verdict copy
    const resCard = document.getElementById('resultCard');
    if (resCard && !resCard.hidden) {
      calculateResult(false);
    }
  }

  function initOptions() {
    document.querySelectorAll('.q-options').forEach(group => {
      const qid = group.getAttribute('data-qid');
      const isStress = qid === '1' || qid === '3' || qid === '5';

      group.querySelectorAll('.opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          group.querySelectorAll('.opt-btn').forEach(b => {
            b.classList.remove('active', 'stress-opt');
          });
          btn.classList.add('active');
          if (isStress) btn.classList.add('stress-opt');
          userAnswers[qid] = parseInt(btn.getAttribute('data-val'), 10);
        });
      });
    });
  }

  function calculateResult(isUserAction = true) {
    // Fill unselected answers with 0
    for (let i = 1; i <= 6; i++) {
      if (userAnswers[i] === null) userAnswers[i] = 1; // Default to mild if not clicked
    }

    const stressScore = (userAnswers[1] || 0) + (userAnswers[3] || 0) + (userAnswers[5] || 0); // max 9
    const burnoutScore = (userAnswers[2] || 0) + (userAnswers[4] || 0) + (userAnswers[6] || 0); // max 9

    const stressPct = Math.round((stressScore / 9) * 100);
    const burnoutPct = Math.round((burnoutScore / 9) * 100);

    const stressFill = document.getElementById('stressFill');
    const burnoutFill = document.getElementById('burnoutFill');
    const stressPctText = document.getElementById('stressPctText');
    const burnoutPctText = document.getElementById('burnoutPctText');

    if (stressFill) stressFill.style.width = stressPct + '%';
    if (burnoutFill) burnoutFill.style.width = burnoutPct + '%';
    if (stressPctText) stressPctText.textContent = `${stressPct}% (${stressScore}/9)`;
    if (burnoutPctText) burnoutPctText.textContent = `${burnoutPct}% (${burnoutScore}/9)`;

    // Clear quadrant highlights
    const qCells = ['qCrisis', 'qStress', 'qBurnout', 'qHealthy'];
    qCells.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = 'q-cell';
    });

    let verdictKey = 'Healthy';
    const isHighStress = stressScore >= 5;
    const isHighBurnout = burnoutScore >= 5;

    let activeCellId = 'qHealthy';
    let extraClass = 'healthy-active';

    if (isHighStress && isHighBurnout) {
      verdictKey = 'Crisis';
      activeCellId = 'qCrisis';
      extraClass = '';
    } else if (isHighStress && !isHighBurnout) {
      verdictKey = 'Stress';
      activeCellId = 'qStress';
      extraClass = 'stress-active';
    } else if (!isHighStress && isHighBurnout) {
      verdictKey = 'Burnout';
      activeCellId = 'qBurnout';
      extraClass = '';
    }

    const activeCell = document.getElementById(activeCellId);
    if (activeCell) {
      activeCell.classList.add('active-quadrant');
      if (extraClass) activeCell.classList.add(extraClass);
    }

    const verdictTitle = document.getElementById('verdictTitle');
    const verdictDesc = document.getElementById('verdictDesc');
    const protocolList = document.getElementById('protocolList');

    if (verdictTitle) verdictTitle.textContent = t(`v${verdictKey}Title`);
    if (verdictDesc) verdictDesc.textContent = t(`v${verdictKey}Desc`);

    const protocols = t(`v${verdictKey}Protocols`);
    if (protocolList && Array.isArray(protocols)) {
      protocolList.innerHTML = protocols.map(p => `<li>${p}</li>`).join('');
    }

    const resCard = document.getElementById('resultCard');
    if (resCard) {
      resCard.hidden = false;
      if (isUserAction) {
        resCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    if (isUserAction && typeof window.gtag === 'function') {
      window.gtag('event', 'burnout_stress_calculate', {
        app_name: 'burnout-stress-differential',
        lang: currentLang,
        verdict: verdictKey
      });
    }
  }

  function resetForm() {
    for (let i = 1; i <= 6; i++) userAnswers[i] = null;
    document.querySelectorAll('.opt-btn').forEach(btn => {
      btn.classList.remove('active', 'stress-opt');
    });
    const resCard = document.getElementById('resultCard');
    if (resCard) resCard.hidden = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function copyReport() {
    const verdictTitle = document.getElementById('verdictTitle')?.textContent || '';
    const stressPct = document.getElementById('stressPctText')?.textContent || '0%';
    const burnoutPct = document.getElementById('burnoutPctText')?.textContent || '0%';

    const text = [
      `📊 [${t('heroTitle')}]`,
      `• Verdict: ${verdictTitle}`,
      `• Situational Tension (Stress): ${stressPct}`,
      `• Systemic Exhaustion (Burnout): ${burnoutPct}`,
      `🔗 https://dopabrain.com/portal/tools/burnout-stress-differential.html?lang=${currentLang}`
    ].join('\n');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(t('copied'));
      });
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(t('copied'));
    }
  }

  function shareVerdict() {
    const verdictTitle = document.getElementById('verdictTitle')?.textContent || '';
    const stressPct = document.getElementById('stressPctText')?.textContent || '0%';
    const burnoutPct = document.getElementById('burnoutPctText')?.textContent || '0%';

    const text = [
      `📊 [${t('heroTitle')}]`,
      `• Result: ${verdictTitle}`,
      `• Stress: ${stressPct} | Burnout: ${burnoutPct}`,
      `🔗 https://dopabrain.com/portal/tools/burnout-stress-differential.html?lang=${currentLang}`
    ].join('\n');

    if (navigator.share) {
      navigator.share({
        title: t('heroTitle'),
        text: text,
        url: `https://dopabrain.com/portal/tools/burnout-stress-differential.html?lang=${currentLang}`
      }).catch(() => {});
    } else {
      copyReport();
    }
  }

  function showToast(msg) {
    const existing = document.getElementById('diffToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'diffToast';
    toast.textContent = msg;
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#10b981';
    toast.style.color = '#fff';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '999px';
    toast.style.fontWeight = '700';
    toast.style.fontSize = '0.95rem';
    toast.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    toast.style.zIndex = '9999';
    toast.style.animation = 'fadeIn 0.2s ease-out';
    document.body.appendChild(toast);

    setTimeout(() => {
      if (toast && toast.parentNode) toast.remove();
    }, 2800);
  }

  document.addEventListener('DOMContentLoaded', () => {
    currentLang = detectLanguage();
    applyLanguage(currentLang);
    initOptions();

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        const next = e.target.value;
        const url = new URL(window.location.href);
        url.searchParams.set('lang', next);
        history.replaceState({}, '', url.toString());
        applyLanguage(next);
      });
    }

    document.getElementById('calcBtn')?.addEventListener('click', () => calculateResult(true));
    document.getElementById('resetBtn')?.addEventListener('click', resetForm);
    document.getElementById('copyBtn')?.addEventListener('click', copyReport);
    document.getElementById('shareBtn')?.addEventListener('click', shareVerdict);
  });
})();
