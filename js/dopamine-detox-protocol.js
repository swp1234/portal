// DopaBrain Dopamine Detox & Reset Protocol Planner
(function () {
  'use strict';

  var I18N = {
    en: {
      kicker: "NEURAL REWARD RESET PROTOCOL",
      heroTitle: "Dopamine Detox & Reset Protocol Planner",
      heroLead: "Measure your digital stimulation ratio (cheap dopamine vs. compound dopamine), identify hidden overstimulation triggers, and generate a customized 24-hour neural reset schedule.",
      chip1: "8 Scientific Habit Metrics",
      chip2: "Cheap vs. Compound Ratio",
      chip3: "100% Client-Side & Private",
      skip: "Skip to Protocol Planner",
      back: "← Tools Catalog",
      langLabel: "Language:",
      screenTitle: "Daily Stimulation Self-Assessment",
      screenSub: "Rate how frequently each stimulus pattern applies to your routine over the past 2 weeks.",
      bannerCheapTitle: "1. Hyper-Stimulating Cheap Dopamine Drivers",
      bannerCheapDesc: "Activities with high algorithmic novelty, instant gratification, and low physical effort.",
      bannerCompTitle: "2. Grounded Compound Dopamine Baseline",
      bannerCompDesc: "Activities requiring patience, physical embodiment, and high long-term intrinsic reward.",
      q1: "1. Infinite Scroll & Short-Form Video: Bingeing Reels, TikTok, or Shorts without an intentional stop cue.",
      q2: "2. Second-Screen Multitasking: Keeping YouTube/podcasts playing while eating, gaming, or working.",
      q3: "3. Compulsive Notification Reflex: Unlocking phone within 5 min of waking, or checking reflexively without reason.",
      q4: "4. Late-Night Digital Dopamine: Using screens in bed, delaying sleep for 'one more video or game'.",
      q5: "5. Sustained Deep Work or Reading: Engaging in uninterrupted focus (>30 minutes) on a challenging craft or book.",
      q6: "6. Headphone-Free Movement: Walking outdoors, running, or exercising without podcasts or music stimulation.",
      q7: "7. Screen-Free Mindful Nutrition: Preparing and eating meals without watching a screen or scrolling.",
      q8: "8. Unstructured Stillness / Reflection: Spending 10+ minutes alone with thoughts or journaling without digital devices.",
      badgeCheap: "Cheap Dopamine",
      badgeComp: "Compound Dopamine",
      opt0: "Rarely (0)",
      opt1: "Sometimes (1)",
      opt2: "Often (2)",
      opt3: "Daily (3)",
      calcBtn: "Calculate Reset Protocol",
      resetBtn: "Reset",
      verdictBadge: "NEURAL RECEPTOR VERDICT",
      titleSevere: "Severe Hyper-Stimulation (Desensitized Baseline)",
      descSevere: "Your reward system is heavily habituated to instant algorithmic stimulation. Baseline everyday tasks feel painfully dull or unmotivating.",
      titleModerate: "Moderate Digital Fatigue (Attention Fragmentation)",
      descModerate: "Noticeable friction starting deep tasks due to digital multitasking, though your recovery capacity remains responsive.",
      titleBalanced: "Balanced Dopamine Homeostasis",
      descBalanced: "Healthy regulation between instant digital stimulus and compound deep focus. Your baseline attention control is resilient.",
      specRatio: "Dopamine Friction Ratio",
      specCheapLabel: "Cheap Stimulus Load",
      specCompLabel: "Compound Focus Baseline",
      protocolHead: "Customized 24-Hour Reset Schedule",
      t1Time: "08:00 - 10:00",
      t1Title: "Morning Cortisol & Dopamine Fast",
      t1Desc: "Zero screens for the first 60 minutes after waking. Get 10-15 minutes of natural sunlight and drink 500ml water before any notification check.",
      t2Time: "13:00 - 14:00",
      t2Title: "Sensory-Silent Lunch",
      t2Desc: "Consume lunch without phone, podcasts, or video. Re-anchor your nervous system by focusing purely on food texture, taste, and breath.",
      t3Time: "17:30 - 18:30",
      t3Title: "Headphone-Free Somatic Discharge",
      t3Desc: "Take a 30-minute walk or exercise outdoors with zero headphones. Allow your brain to enter open-monitoring daydream mode.",
      t4Time: "21:00 - Bedtime",
      t4Title: "Digital Sunset Shutdown",
      t4Desc: "Dock devices in another room. Switch to soft analog light, gentle journaling, or fiction reading to let dopamine baseline restore overnight.",
      menuHead: "ADHD-Friendly 'Dopamine Menu' Substitutes",
      menuAppTitle: "🥗 Appetizers (5-10 min)",
      menuAppList: "• Cold water splash on face\n• 5 physiological deep sighs\n• Stretching shoulders & neck\n• Step outside for direct sunlight",
      menuEntreeTitle: "🍲 Entrees (30-60 min)",
      menuEntreeList: "• Outdoor walking with zero audio\n• Preparing a cooked meal from scratch\n• Reading physical paperback book\n• Tidying one physical space / desk",
      menuDessertTitle: "🍰 Mindful Treats (15 min)",
      menuDessertList: "• Herbal tea brewed slowly\n• Aromatherapy or scented candle\n• Listening to ambient music eyes closed\n• Calling a close friend for a chat",
      copyBtn: "Copy Protocol Summary",
      shareBtn: "Share Protocol Card",
      copiedToast: "Protocol summary copied to clipboard!",
      bridgeStressTitle: "Autonomic Stress Check",
      bridgeStressDesc: "Measure how sympathetic nervous tension is driving your urge to seek instant digital comfort.",
      bridgeFutureTitle: "Future Self Continuity",
      bridgeFutureDesc: "Bridge temporal discounting and align immediate choices with long-term compound life vision.",
      bridgeBurnoutTitle: "Burnout vs Stress Matrix",
      bridgeBurnoutDesc: "Determine whether your exhaustion is situational acute stress or chronic systemic burnout.",
      discTitle: "Scientific Boundary & Disclaimer:",
      discText: "This planner is an educational behavioral tool modeled on neurobiological principles of receptor down-regulation, digital habituation, and cognitive behavioral stimulus control. It does not provide medical or psychiatric diagnoses.",
      privacy: "Privacy Policy",
      terms: "Terms"
    },
    ko: {
      kicker: "신경 보상 회로 리셋 프로토콜",
      heroTitle: "도파민 디톡스 & 리셋 프로토콜 플래너",
      heroLead: "나의 디지털 자극 비율(인스턴트 저가 도파민 vs 지속성 복리 도파민)을 측정하고, 무의식적 과자극 트리거를 감별하여 나만의 24시간 신경계 리셋 일정을 설계하세요.",
      chip1: "8가지 핵심 자극 지표",
      chip2: "저가 vs 복리 도파민 비율",
      chip3: "100% 브라우저 로컬 비공개",
      skip: "플래너로 바로 이동",
      back: "← 도구 목록으로",
      langLabel: "언어 설정:",
      screenTitle: "일상 자극 자가진단",
      screenSub: "지난 2주간 본인의 일상 습관에 해당하는 빈도를 선택해 주세요.",
      bannerCheapTitle: "1. 과자극 유발 인스턴트 도파민 (Cheap Dopamine)",
      bannerCheapDesc: "알고리즘 기반 빠른 도파민 분비, 즉각적 쾌락, 신체적 노력 없는 수동적 자극.",
      bannerCompTitle: "2. 내적 회복을 돕는 복리 도파민 (Compound Dopamine)",
      bannerCompDesc: "인내심과 몰입, 신체적 참여가 필요하며 장기적으로 뇌 건강을 회복시키는 자극.",
      q1: "1. 숏폼 및 무한 스크롤: 릴스, 틱톡, 쇼츠를 의도한 시간보다 길게 무의식적으로 시청한다.",
      q2: "2. 세컨드 스크린 멀티태스킹: 식사, 게임, 작업 중에도 유튜브/팟캐스트를 배경음으로 켜둔다.",
      q3: "3. 기상 직후 알림 강박: 아침에 눈뜨자마자 5분 이내에 스마트폰을 확인하거나 습관적으로 잠금을 해제한다.",
      q4: "4. 심야 디지털 자극: 잠자리에 누워서도 스마트폰을 보며 수면을 미룬다 (취침 지연).",
      q5: "5. 지속적인 딥워크/독서: 30분 이상 방해받지 않고 책이나 고난도 업무에 온전히 몰입한다.",
      q6: "6. 이어폰 없는 야외 걷기: 팟캐스트나 음악 없이 자연의 소리를 들으며 산책하거나 운동한다.",
      q7: "7. 화면 없는 식사: 스마트폰이나 영상 시청 없이 음식의 맛과 식감에만 집중해 식사한다.",
      q8: "8. 디지털 없는 멍때리기/성찰: 전자기기 없이 10분 이상 조용히 생각을 정리하거나 일기를 쓴다.",
      badgeCheap: "인스턴트 도파민",
      badgeComp: "복리 도파민",
      opt0: "거의 없음 (0)",
      opt1: "가끔 (1)",
      opt2: "자주 (2)",
      opt3: "매일 (3)",
      calcBtn: "도파민 리셋 프로토콜 생성",
      resetBtn: "다시 측정하기",
      verdictBadge: "신경 수용체 판정 결과",
      titleSevere: "심각한 과자극 상태 (도파민 수용체 둔감화)",
      descSevere: "인스턴트 디지털 자극에 뇌가 강하게 적응되어 일상적인 과업이나 독서, 휴식이 지나치게 지루하고 무기력하게 느껴질 수 있습니다.",
      titleModerate: "중등도 디지털 피로 (주의력 분절 상태)",
      descModerate: "멀티태스킹으로 인해 깊은 몰입을 시작할 때 저항감이 크지만, 의도적인 스크린 차단으로 빠르게 회복 가능한 수준입니다.",
      titleBalanced: "균형 잡힌 도파민 항상성",
      descBalanced: "디지털 자극과 복리 몰입 사이의 조절 능력이 건강하게 유지되고 있습니다. 현재의 일상 리듬을 지켜나가세요.",
      specRatio: "도파민 자극 마찰 비율",
      specCheapLabel: "인스턴트 자극 부하",
      specCompLabel: "복리 몰입 기초 체력",
      protocolHead: "맞춤형 24시간 도파민 리셋 일정표",
      t1Time: "08:00 - 10:00",
      t1Title: "아침 코르티솔 & 도파민 단식",
      t1Desc: "기상 후 첫 60분간 스마트폰 보지 않기. 창문을 열고 10분간 자연광 쬐기 및 미온수 500ml 섭취로 자연스러운 각성 유도.",
      t2Time: "13:00 - 14:00",
      t2Title: "감각 고요 점심 식사",
      t2Desc: "영상 시청 없이 식사하기. 음식의 온도, 질감, 씹는 행위에 감각을 온전히 집중하여 부교감 신경 활성화.",
      t3Time: "17:30 - 18:30",
      t3Title: "이어폰 없는 야외 환기 산책",
      t3Desc: "30분간 이어폰 없이 걷기. 뇌의 디폴트 모드 네트워크(DMN)를 가동하여 얽힌 생각과 피로를 자연 방전.",
      t4Time: "21:00 - 취침",
      t4Title: "디지털 일몰 (Digital Sunset)",
      t4Desc: "잠자리에서 전자기기 치우기. 주황색 간접 조명 아래에서 손글씨 일기나 종이책을 읽으며 도파민 수용체 밤샘 재감작.",
      menuHead: "ADHD/집중력 저하 완화를 위한 '도파민 메뉴'",
      menuAppTitle: "🥗 에피타이저 (5-10분)",
      menuAppList: "• 찬물로 세수하기\n• 5번의 깊은 생리학적 한숨 호흡\n• 목과 어깨 가벼운 스트레칭\n• 베란다나 창가에서 바깥 풍경 보기",
      menuEntreeTitle: "🍲 메인 코스 (30-60분)",
      menuEntreeList: "• 이어폰 없이 동네 한 바퀴 산책\n• 재료를 직접 손질하여 요리하기\n• 종이책 한 챕터 끝까지 읽기\n• 책상이나 서랍 한 칸 깔끔하게 정리",
      menuDessertTitle: "🍰 감각 디저트 (15분)",
      menuDessertList: "• 따뜻한 무카페인 허브차 천천히 음미\n• 은은한 캔들이나 아로마 향 맡기\n• 눈 감고 잔잔한 앰비언트 음악 감상\n• 소중한 친구에게 짧은 안부 전화",
      copyBtn: "프로토콜 결과 복사",
      shareBtn: "결과 카드 공유하기",
      copiedToast: "도파민 리셋 프로토콜이 클립보드에 복사되었습니다!",
      bridgeStressTitle: "자율신경 스트레스 측정",
      bridgeStressDesc: "자율신경계 긴장도가 스마트폰 즉각 도피 충동을 얼마나 유발하는지 확인해보세요.",
      bridgeFutureTitle: "미래의 나 연속성 테스트",
      bridgeFutureDesc: "지금의 충동적 선택을 10년 후 장기적인 복리 성장과 정렬시키는 심리 시뮬레이션.",
      bridgeBurnoutTitle: "번아웃 vs 스트레스 감별 매트릭스",
      bridgeBurnoutDesc: "단순한 일시적 과부하인지, 회복이 필요한 만성 번아웃인지 2D 좌표로 감별하세요.",
      discTitle: "학술적 경계 및 안내 사항:",
      discText: "본 도구는 신경생물학의 수용체 하향조절(down-regulation) 원리와 인지행동 자극 통제 이론을 기반으로 한 교육용 행동 설계 도구이며, 의학적/정신과적 진단을 대체하지 않습니다.",
      privacy: "개인정보처리방침",
      terms: "이용약관"
    },
    ja: {
      kicker: "神経報酬系リセットプロトコル",
      heroTitle: "ドーパミンデトックス＆リセット計画ツール",
      heroLead: "デジタル刺激比率（即時ドーパミン vs 持続的ドーパミン）を測定し、無意識の過剰刺激を特定して24時間リセット計画を作成します。",
      chip1: "8つの生活習慣指標",
      chip2: "即時 vs 持続比率",
      chip3: "完全端末内プライベート処理",
      skip: "プランナーへスキップ",
      back: "← ツール一覧",
      langLabel: "言語:",
      screenTitle: "日常刺激のセルフチェック",
      screenSub: "過去2週間の習慣に該当する頻度を選択してください。",
      bannerCheapTitle: "1. 過剰刺激を引き起こす即時ドーパミン",
      bannerCheapDesc: "アルゴリズムによる速い刺激、即時報酬、努力不要の受動的エンタメ。",
      bannerCompTitle: "2. 内面的回復を支える持続的ドーパミン",
      bannerCompDesc: "忍耐や集中を要し、長期的な脳の健康と自己効力感を高める行動。",
      q1: "1. ショート動画・無限スクロール: ReelsやTikTok、Shortsを目的なくスクロールし続ける。",
      q2: "2. ながら視聴（セカンドスクリーン）: 食事や作業中もYouTubeや動画を常に流している。",
      q3: "3. 起床直後の通知確認: 朝起きて5分以内にスマホを開く、理由なくロック解除を繰り返す。",
      q4: "4. 深夜の画面刺激: ベッドに入ってからもスマホを見続け、就寝を先延ばしにする。",
      q5: "5. 持続的な読書や深層集中: 30分以上中断されずに読書や高度な作業に没頭できる。",
      q6: "6. イヤホンなしでの運動・散歩: 音声刺激なしで外を歩いたり運動したりする。",
      q7: "7. 画面を見ない食事: スマホやテレビなしで、食事の味や食感だけに集中して食べる。",
      q8: "8. 電子機器なしの静寂・内省: スマホなしで10分以上静かに思考を整理したり日記を書く。",
      badgeCheap: "即時ドーパミン",
      badgeComp: "持続ドーパミン",
      opt0: "ほとんどない (0)",
      opt1: "時々 (1)",
      opt2: "よくある (2)",
      opt3: "毎日 (3)",
      calcBtn: "リセット計画を計算する",
      resetBtn: "リセット",
      verdictBadge: "受容体診断結果",
      titleSevere: "重度の過剰刺激（受容体の感受性低下）",
      descSevere: "即時刺激に慣れすぎており、日常の課題や読書、静かな休息がひどく退屈に感じられます。",
      titleModerate: "中等度のデジタル疲労（集中力分散）",
      descModerate: "マルチタスクにより深い集中への抵抗感がありますが、計画的な画面遮断で迅速に回復可能です。",
      titleBalanced: "健康的なドーパミン恒常性",
      descBalanced: "刺激と集中のバランスが保たれており、自己制御能力が良好です。",
      specRatio: "刺激摩擦比率",
      specCheapLabel: "即時刺激負荷",
      specCompLabel: "持続集中力ベースライン",
      protocolHead: "個別化された24時間リセットスケジュール",
      t1Time: "08:00 - 10:00",
      t1Title: "朝のドーパミン断食",
      t1Desc: "起床後60分間は画面を見ない。自然光を浴びて水を飲み、生体リズムを整える。",
      t2Time: "13:00 - 14:00",
      t2Title: "静寂ランチ",
      t2Desc: "動画なしで食事。味や食感、呼吸に意識を向け、副交感神経を活性化。",
      t3Time: "17:30 - 18:30",
      t3Title: "イヤホンなしの散歩",
      t3Desc: "30分間イヤホンを外して歩く。脳のデフォルトモードネットワークを活性化し脳疲労を解消。",
      t4Time: "21:00 - 就寝",
      t4Title: "デジタル日没",
      t4Desc: "寝室からスマホを離し、間接照明で紙の本を読んだり日記を書いて受容体を回復させる。",
      menuHead: "ADHD・集中力回復用ドーパミンメニュー",
      menuAppTitle: "🥗 前菜 (5-10分)",
      menuAppList: "• 冷水で顔を洗う\n• 5回の深呼吸\n• 首と肩のストレッチ\n• 窓から外の景色を眺める",
      menuEntreeTitle: "🍲 メイン (30-60分)",
      menuEntreeList: "• 音声なしで近所を散歩\n• 手作りで料理を作る\n• 紙の本を1章読む\n• 机の引き出しを整理する",
      menuDessertTitle: "🍰 デザート (15分)",
      menuDessertList: "• カフェインレスハーブティー\n• アロマやお香を焚く\n• 目を閉じて環境音を聞く\n• 親しい友人に電話する",
      copyBtn: "結果をコピー",
      shareBtn: "カードを共有",
      copiedToast: "結果がクリップボードにコピーされました！",
      bridgeStressTitle: "自律神経ストレス測定",
      bridgeStressDesc: "自律神経の緊張がデジタル逃避を促していないか測定します。",
      bridgeFutureTitle: "未来の自分テスト",
      bridgeFutureDesc: "目先の衝動を長期的な目標と結びつける心理シミュレーション。",
      bridgeBurnoutTitle: "バーンアウト感別マトリクス",
      bridgeBurnoutDesc: "一時的なストレスか慢性的燃え尽き症候群かを2D座標で判定します。",
      discTitle: "免責事項:",
      discText: "本ツールは神経生物学的受容体調節と行動変容理論に基づく自己管理ツールであり、医療的診断を行うものではありません。",
      privacy: "プライバシーポリシー",
      terms: "利用規約"
    },
    zh: {
      kicker: "神经奖赏回路重置方案",
      heroTitle: "多巴胺排毒与神经重置规划器",
      heroLead: "测算您的数字刺激比率（即时廉价多巴胺 vs 复利深度多巴胺），识别隐性过度刺激源，定制您的24小时神经重置日程。",
      chip1: "8项核心习惯评估",
      chip2: "廉价 vs 复利多巴胺比例",
      chip3: "100% 浏览器本地隐私保护",
      skip: "跳转至规划器",
      back: "← 返回工具库",
      langLabel: "语言设置:",
      screenTitle: "日常刺激自我评估",
      screenSub: "请根据过去两周内的真实生活习惯选择发生频率。",
      bannerCheapTitle: "1. 导致过度刺激的廉价多巴胺 (Cheap Dopamine)",
      bannerCheapDesc: "算法喂养、即时满足、无需付出身体努力的被动刺激。",
      bannerCompTitle: "2. 构筑长效专注的复利多巴胺 (Compound Dopamine)",
      bannerCompDesc: "需要耐心与专注，能带来长期心流与神经修复的内在充实活动。",
      q1: "1. 短视频与无休止滑动：无意识长时间刷短视频（Reels/TikTok/Shorts）。",
      q2: "2. 双屏多任务处理：吃饭、打游戏或工作时，背景必须挂着播客或视频。",
      q3: "3. 醒后强迫看手机：早晨睁眼5分钟内必看手机，或频繁无理由解锁。",
      q4: "4. 深夜数字依赖：躺在床上继续看屏幕，不断推迟入睡时间。",
      q5: "5. 持续深度工作/阅读：不受打扰地连续30分钟以上专注于书籍或高难度工作。",
      q6: "6. 无耳机户外运动：不戴耳机听播客或音乐，单纯感受自然声音散步或锻炼。",
      q7: "7. 无屏幕正念进食：不看手机或电视，全神贯注于食物的味道与口感。",
      q8: "8. 远离电子设备的独处反思：完全不用手机，安静放空或写日记10分钟以上。",
      badgeCheap: "廉价多巴胺",
      badgeComp: "复利多巴胺",
      opt0: "极少 (0)",
      opt1: "偶尔 (1)",
      opt2: "经常 (2)",
      opt3: "每天 (3)",
      calcBtn: "生成多巴胺重置方案",
      resetBtn: "重置",
      verdictBadge: "受体状态评估",
      titleSevere: "严重过度刺激（受体脱敏）",
      descSevere: "您的大脑高度适应了即时强刺激，导致日常任务、深度阅读或安静休息显得枯燥乏味。",
      titleModerate: "中度数字疲劳（注意力碎片化）",
      descModerate: "多任务习惯导致进入深度专注时阻力明显，但通过有规律的屏幕切断可快速恢复。",
      titleBalanced: "健康多巴胺动态平衡",
      descBalanced: "即时刺激与深度专注平衡良好，保持着健康的自我调节与执行控制能力。",
      specRatio: "多巴胺摩擦比率",
      specCheapLabel: "廉价刺激负荷",
      specCompLabel: "复利专注基线",
      protocolHead: "定制24小时多巴胺重置时间表",
      t1Time: "08:00 - 10:00",
      t1Title: "晨间多巴胺断食",
      t1Desc: "醒后首个60分钟不碰屏幕。接触自然阳光10分钟并饮水500ml，唤醒天然清醒节律。",
      t2Time: "13:00 - 14:00",
      t2Title: "静音正念午餐",
      t2Desc: "关掉视频与播客用餐。全神贯注于咀嚼与食物香气，激活副交感神经系统。",
      t3Time: "17:30 - 18:30",
      t3Title: "脱下耳机的释放漫步",
      t3Desc: "不带耳机散步30分钟，启动大脑默认模式网络(DMN)，释放淤积的注意力疲劳。",
      t4Time: "21:00 - 睡前",
      t4Title: "数字日落 (Digital Sunset)",
      t4Desc: "电子设备放回书房。在柔和暖光下翻阅纸质书或纸笔反思，让受体通宵重新敏化。",
      menuHead: "注意力恢复'多巴胺功能菜单'",
      menuAppTitle: "🥗 开胃轻食 (5-10分钟)",
      menuAppList: "• 冷水洗脸物理提神\n• 5次深长生理叹气呼吸\n• 肩颈舒展拉伸\n• 站在阳台或窗前远眺",
      menuEntreeTitle: "🍲 营养正餐 (30-60分钟)",
      menuEntreeList: "• 不带耳机漫步街区\n• 亲手准备一顿饭菜\n• 读完纸质书一个章节\n• 整理一个桌面或抽屉",
      menuDessertTitle: "🍰 精神甜点 (15分钟)",
      menuDessertList: "• 慢慢品尝一杯无咖啡因花草茶\n• 点燃香薰或精油\n• 闭目聆听白噪音\n• 给好友打个简短问候电话",
      copyBtn: "复制重置方案",
      shareBtn: "分享结果卡片",
      copiedToast: "多巴胺重置方案已复制到剪贴板！",
      bridgeStressTitle: "自主神经压力测试",
      bridgeStressDesc: "测算交感神经紧张度是否正在驱使您向即时数字刺激逃避。",
      bridgeFutureTitle: "未来自我连续性测试",
      bridgeFutureDesc: "连接长远人生目标，破除当下短视冲动的心理模拟工具。",
      bridgeBurnoutTitle: "职业倦怠 vs 压力鉴别矩阵",
      bridgeBurnoutDesc: "通过2D象限坐标分辨急性压力与慢性身心耗竭。",
      discTitle: "科学声明与免责提示：",
      discText: "本工具基于神经生物学受体下调原理与刺激控制理论设计，用于教育与个人习惯反思，不构成任何医疗或临床诊断。",
      privacy: "隐私政策",
      terms: "用户协议"
    },
    es: {
      kicker: "PROTOCOLO DE REINICIO NEURONAL",
      heroTitle: "Planificador de Ayuno y Detox de Dopamina",
      heroLead: "Mide tu ratio de estimulación digital (dopamina barata vs. dopamina compuesta) y genera un horario personalizado de reinicio en 24 horas.",
      chip1: "8 Métricas de Hábitos",
      chip2: "Ratio Barata vs Compuesta",
      chip3: "100% Local y Privado",
      skip: "Saltar al planificador",
      back: "← Catálogo de Herramientas",
      langLabel: "Idioma:",
      screenTitle: "Autoevaluación de Estimulación Diaria",
      screenSub: "Califica la frecuencia de estos patrones en tus últimas 2 semanas.",
      bannerCheapTitle: "1. Disparadores de Dopamina Barata e Instantánea",
      bannerCheapDesc: "Alta novedad algorítmica, gratificación inmediata y nulo esfuerzo físico.",
      bannerCompTitle: "2. Base de Dopamina Compuesta y Saludable",
      bannerCompDesc: "Actividades que requieren presencia, paciencia y generan recompensa intrínseca duradera.",
      q1: "1. Scroll infinito y videos cortos: Ver Reels/TikTok sin límite de tiempo consciente.",
      q2: "2. Multitarea con pantalla secundaria: Vídeos o podcasts mientras comes o trabajas.",
      q3: "3. Reflejo compulsivo de notificaciones: Mirar el móvil a los 5 min de despertar o sin motivo.",
      q4: "4. Dopamina nocturna en cama: Usar pantallas antes de dormir, retrasando el descanso.",
      q5: "5. Trabajo o lectura profunda: Estar más de 30 minutos concentrado en una tarea sin distracciones.",
      q6: "6. Movimiento sin auriculares: Caminar al aire libre o hacer ejercicio sin música ni podcasts.",
      q7: "7. Alimentación consciente sin pantallas: Comer saboreando los alimentos sin mirar el teléfono.",
      q8: "8. Quietud y reflexión sin pantallas: Pasar 10+ minutos a solas con tus pensamientos o escribiendo.",
      badgeCheap: "Dopamina Barata",
      badgeComp: "Dopamina Compuesta",
      opt0: "Raras veces (0)",
      opt1: "A veces (1)",
      opt2: "A menudo (2)",
      opt3: "Diario (3)",
      calcBtn: "Calcular Protocolo de Reinicio",
      resetBtn: "Reiniciar",
      verdictBadge: "DICTAMEN DEL RECEPTOR",
      titleSevere: "Sobrestimulación Severa (Desensibilización)",
      descSevere: "Tu sistema de recompensa está habituado a la estimulación instantánea. Las tareas cotidianas se sienten aburridas.",
      titleModerate: "Fatiga Digital Moderada (Atención Fragmentada)",
      descModerate: "Hay resistencia al iniciar el trabajo profundo, pero con desconexión programada te recuperarás rápido.",
      titleBalanced: "Homeostasis de Dopamina Saludable",
      descBalanced: "Buen equilibrio entre estímulo digital y enfoque compuesto. Tu control ejecutivo es resiliente.",
      specRatio: "Ratio de Fricción de Dopamina",
      specCheapLabel: "Carga de Estímulo Barato",
      specCompLabel: "Base de Enfoque Compuesto",
      protocolHead: "Horario Personalizado de 24 Horas",
      t1Time: "08:00 - 10:00",
      t1Title: "Ayuno Matutino de Pantallas",
      t1Desc: "Cero pantallas los primeros 60 minutos. Sal al sol 10 minutos y bebe 500ml de agua.",
      t2Time: "13:00 - 14:00",
      t2Title: "Almuerzo en Silencio Sensorial",
      t2Desc: "Come sin podcast ni móvil, prestando atención a textura y sabor de la comida.",
      t3Time: "17:30 - 18:30",
      t3Title: "Paseo Somático Sin Auriculares",
      t3Desc: "Camina 30 minutos sin auriculares para activar la red neuronal por defecto y despejar la mente.",
      t4Time: "21:00 - Dormir",
      t4Title: "Puesta de Sol Digital",
      t4Desc: "Deja el teléfono fuera del dormitorio y lee en papel bajo luz tenue para resensibilizar receptores.",
      menuHead: "Menú de Dopamina Sustitutivo (Amigable con TDAH)",
      menuAppTitle: "🥗 Entrantes (5-10 min)",
      menuAppList: "• Agua fría en la cara\n• 5 suspiros fisiológicos profundos\n• Estiramientos de hombros y cuello\n• Mirar por la ventana a lo lejos",
      menuEntreeTitle: "🍲 Platos Principales (30-60 min)",
      menuEntreeList: "• Paseo por el barrio sin audio\n• Cocinar una comida desde cero\n• Leer un capítulo en papel\n• Ordenar un cajón o escritorio",
      menuDessertTitle: "🍰 Postres Conscientes (15 min)",
      menuDessertList: "• Infusión caliente sin cafeína\n• Vela o aroma relajante\n• Cerrar los ojos con sonido ambiente\n• Llamar a un buen amigo",
      copyBtn: "Copiar Resumen",
      shareBtn: "Compartir Tarjeta",
      copiedToast: "¡Resumen copiado al portapapeles!",
      bridgeStressTitle: "Test de Estrés Autónomo",
      bridgeStressDesc: "Comprueba cómo la tensión de tu sistema nervioso influye en la adicción digital.",
      bridgeFutureTitle: "Continuidad del Yo Futuro",
      bridgeFutureDesc: "Alinea las decisiones impulsivas de hoy con tus metas vitales a largo plazo.",
      bridgeBurnoutTitle: "Matriz Burnout vs Estrés",
      bridgeBurnoutDesc: "Distingue entre sobrecarga aguda momentánea y agotamiento crónico.",
      discTitle: "Límites Científicos y Aviso:",
      discText: "Herramienta de autoreflexión basada en control de estímulos y neurobiología de receptores. No sustituye la atención médica.",
      privacy: "Política de Privacidad",
      terms: "Términos"
    }
  };

  // Fallback for remaining languages (de, fr, pt, ru, hi, id, tr) mapping to en or standard
  ['de', 'fr', 'pt', 'ru', 'hi', 'id', 'tr'].forEach(function(code) {
    if (!I18N[code]) {
      I18N[code] = Object.assign({}, I18N.en);
    }
  });

  var currentLang = 'en';
  var answers = {
    1: null, 2: null, 3: null, 4: null,
    5: null, 6: null, 7: null, 8: null
  };

  function detectInitialLang() {
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    if (urlLang && I18N[urlLang]) return urlLang;
    var stored = localStorage.getItem('dopabrain_lang');
    if (stored && I18N[stored]) return stored;
    var navLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
    if (I18N[navLang]) return navLang;
    return 'en';
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('dopabrain_lang', lang);
    document.documentElement.lang = lang;
    var dict = I18N[lang] || I18N.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    var select = document.getElementById('langSelect');
    if (select) select.value = lang;

    // Update cross-funnel links
    var bridgeStress = document.getElementById('bridgeStress');
    if (bridgeStress) bridgeStress.href = '/stress-check/?lang=' + lang;
    var bridgeFuture = document.getElementById('bridgeFuture');
    if (bridgeFuture) bridgeFuture.href = '/future-self/?lang=' + lang;
    var bridgeBurnout = document.getElementById('bridgeBurnout');
    if (bridgeBurnout) bridgeBurnout.href = '/portal/tools/burnout-stress-differential.html?lang=' + lang;

    if (!document.getElementById('resultCard').hidden) {
      calculateProtocol();
    }
  }

  function handleOptionClick(e) {
    var btn = e.target.closest('.opt-btn');
    if (!btn) return;
    var container = btn.closest('.q-options');
    var qid = parseInt(container.getAttribute('data-qid'), 10);
    var val = parseInt(btn.getAttribute('data-val'), 10);

    container.querySelectorAll('.opt-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    answers[qid] = val;
  }

  function calculateProtocol() {
    var dict = I18N[currentLang] || I18N.en;

    // Default unanswered questions to 1
    for (var i = 1; i <= 8; i++) {
      if (answers[i] === null) {
        answers[i] = 1;
        var opt = document.querySelector('.q-options[data-qid="' + i + '"] .opt-btn[data-val="1"]');
        if (opt) opt.classList.add('active');
      }
    }

    var cheapSum = (answers[1] + answers[2] + answers[3] + answers[4]); // max 12
    var compSum = (answers[5] + answers[6] + answers[7] + answers[8]);   // max 12

    var cheapPct = Math.round((cheapSum / 12) * 100);
    var compPct = Math.round((compSum / 12) * 100);

    var total = cheapSum + compSum;
    var ratio = total > 0 ? Math.round((cheapSum / total) * 100) : 50;

    var titleEl = document.getElementById('verdictTitle');
    var descEl = document.getElementById('verdictDesc');
    var barCheap = document.getElementById('barCheap');
    var barComp = document.getElementById('barComp');
    var cheapValText = document.getElementById('cheapValText');
    var compValText = document.getElementById('compValText');
    var resultCard = document.getElementById('resultCard');

    if (ratio >= 65) {
      titleEl.textContent = dict.titleSevere;
      descEl.textContent = dict.descSevere;
    } else if (ratio >= 42) {
      titleEl.textContent = dict.titleModerate;
      descEl.textContent = dict.descModerate;
    } else {
      titleEl.textContent = dict.titleBalanced;
      descEl.textContent = dict.descBalanced;
    }

    barCheap.style.width = ratio + '%';
    barComp.style.width = (100 - ratio) + '%';
    cheapValText.textContent = ratio + '% (' + dict.specCheapLabel + ')';
    compValText.textContent = (100 - ratio) + '% (' + dict.specCompLabel + ')';

    resultCard.hidden = false;
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function resetAssessment() {
    for (var i = 1; i <= 8; i++) {
      answers[i] = null;
    }
    document.querySelectorAll('.opt-btn').forEach(function (btn) {
      btn.classList.remove('active');
    });
    document.getElementById('resultCard').hidden = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function getShareText() {
    var dict = I18N[currentLang] || I18N.en;
    var title = document.getElementById('verdictTitle').textContent;
    var cheapSum = (answers[1] || 1) + (answers[2] || 1) + (answers[3] || 1) + (answers[4] || 1);
    var compSum = (answers[5] || 1) + (answers[6] || 1) + (answers[7] || 1) + (answers[8] || 1);
    var total = cheapSum + compSum;
    var ratio = total > 0 ? Math.round((cheapSum / total) * 100) : 50;

    return "🧠 DopaBrain Dopamine Detox & Reset Protocol\n" +
      "Verdict: " + title + "\n" +
      "Cheap Stimulus Friction: " + ratio + "%\n" +
      "Compound Focus Baseline: " + (100 - ratio) + "%\n" +
      "Check your digital reward ratio: " + window.location.origin + "/portal/tools/dopamine-detox-protocol.html?lang=" + currentLang;
  }

  function copySummary() {
    var text = getShareText();
    var dict = I18N[currentLang] || I18N.en;
    navigator.clipboard.writeText(text).then(function () {
      var copyBtn = document.getElementById('copyBtn');
      var orig = copyBtn.textContent;
      copyBtn.textContent = "✓ " + dict.copiedToast;
      setTimeout(function () {
        copyBtn.textContent = orig;
      }, 2500);
    }).catch(function () {
      alert(text);
    });
  }

  function shareResult() {
    var text = getShareText();
    if (navigator.share) {
      navigator.share({
        title: "DopaBrain Dopamine Detox Protocol",
        text: text,
        url: window.location.origin + "/portal/tools/dopamine-detox-protocol.html?lang=" + currentLang
      }).catch(function () {});
    } else {
      copySummary();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    try {
      var initial = detectInitialLang();
      applyLanguage(initial);

      document.getElementById('langSelect').addEventListener('change', function (e) {
        applyLanguage(e.target.value);
      });

      document.getElementById('diffMain').addEventListener('click', handleOptionClick);
      document.getElementById('calcBtn').addEventListener('click', calculateProtocol);
      document.getElementById('resetBtn').addEventListener('click', resetAssessment);
      document.getElementById('copyBtn').addEventListener('click', copySummary);
      document.getElementById('shareBtn').addEventListener('click', shareResult);
    } catch (err) {
      console.error('Dopamine detox tool init error:', err);
    }
  });
})();
