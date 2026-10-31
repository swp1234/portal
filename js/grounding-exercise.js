// DopaBrain 5-4-3-2-1 Sensory Grounding & Panic Reset Engine
(function () {
  'use strict';

  var I18N = {
    en: {
      kicker: "ACUTE SOMATIC REGULATION PROTOCOL",
      heroTitle: "5-4-3-2-1 Sensory Grounding Tool",
      heroLead: "Anchor your nervous system during acute anxiety, panic spikes, or sensory overstimulation. Walk through 5 sensory checkpoints to bring your brain back to the present moment.",
      chip1: "5 Sensory Checkpoints",
      chip2: "Guided Physiological Sigh",
      chip3: "100% Client-Side & Private",
      skip: "Skip to Grounding Exercise",
      back: "← Tools Catalog",
      langLabel: "Language:",
      pulseLabel: "Breathe gently with the pulse • Inhale and Exhale",
      step5: "5 • See",
      step4: "4 • Touch",
      step3: "3 • Hear",
      step2: "2 • Smell",
      step1: "1 • Taste & Sigh",
      stage5Title: "5 Things You Can See Around You",
      stage5Desc: "Look around your space right now. Notice small details your brain usually ignores (shadows, reflections, colors). Tap each item as you locate it:",
      s5Item1: "1. A distinct color accent in the room",
      s5Item2: "2. The way light or shadow hits a surface",
      s5Item3: "3. A texture on an object nearby",
      s5Item4: "4. A small item you haven't looked at in a while",
      s5Item5: "5. A shape in the distance (window, corner, wall)",
      stage4Title: "4 Things You Can Physically Touch",
      stage4Desc: "Shift attention from racing thoughts to physical contact points with the earth. Tap each item as you consciously feel it:",
      s4Item1: "1. The firm pressure of your feet anchored to the floor",
      s4Item2: "2. The sensation of your clothing resting on your skin",
      s4Item3: "3. The temperature of your hands or desktop surface",
      s4Item4: "4. The back of your chair supporting your posture",
      stage3Title: "3 Things You Can Hear Right Now",
      stage3Desc: "Listen closely beyond immediate thoughts. Pay attention to subtle ambient layers. Tap each sound as you register it:",
      s3Item1: "1. A faint ambient sound (fan, AC, distant traffic)",
      s3Item2: "2. The sound of your own quiet breathing",
      s3Item3: "3. The silence or subtle room acoustic behind noises",
      stage2Title: "2 Things You Can Smell",
      stage2Desc: "Take two gentle inhales through your nose. Pay attention to the air around you. Tap as you notice:",
      s2Item1: "1. The subtle scent of the air, clothing, or surroundings",
      s2Item2: "2. The neutral sensation of cool air entering your nostrils",
      stage1Title: "1 Thing You Can Taste & 1 Physiological Cyclic Sigh",
      stage1Desc: "Notice any lingering taste in your mouth, or swallow once mindfully. Then perform one physiological sigh to signal safety to your brainstem.",
      s1Item1: "1. Notice the current neutral taste in your mouth and relax your jaw",
      sighTitle: "Guided Physiological Cyclic Sigh",
      sighInstr1: "Double Inhale: Inhale deeply through nose (4s) + top-up inhale (1s)...",
      sighInstr2: "Long Exhale: Release slowly through mouth (6s)...",
      sighInstrReady: "Tap Start Sigh to trigger calming vagal tone",
      startSighBtn: "Start Guided Cyclic Sigh",
      nextBtn: "Next Sensory Step →",
      prevBtn: "← Previous Step",
      finishBtn: "Complete Grounding Session",
      resetBtn: "Start New Session",
      compBadge: "SOMATIC GROUNDING COMPLETE",
      compTitle: "Your Nervous System Is Re-Anchored",
      compDesc: "You have engaged all 5 sensory pathways and signaled physiological safety to your amygdala. Blood pressure and heart rate variability are returning to baseline.",
      copyBtn: "Copy Grounding Log",
      shareBtn: "Share Calming Log",
      copiedToast: "Grounding log copied to clipboard!",
      bridgeStressTitle: "Full Stress Check",
      bridgeStressDesc: "Measure chronic autonomic strain and view personalized multi-day recovery plans.",
      bridgeResetTitle: "HSP Sensory Reset",
      bridgeResetDesc: "Low-stimulation auditory neural reset card for deep sensory recovery.",
      bridgeDiffTitle: "Burnout vs Stress Matrix",
      bridgeDiffDesc: "Distinguish between acute tension spikes and chronic systemic burnout.",
      discTitle: "Scientific Boundary & Disclaimer:",
      discText: "The 5-4-3-2-1 technique is an evidence-based cognitive behavioral grounding intervention used in trauma recovery and panic management. It is not a substitute for clinical psychiatric intervention.",
      privacy: "Privacy Policy",
      terms: "Terms"
    },
    ko: {
      kicker: "급성 자율신경 조절 프로토콜",
      heroTitle: "5-4-3-2-1 오감 그라운딩 & 진정 도구",
      heroLead: "급작스러운 불안, 공황 발작, 과도한 생각의 소용돌이에서 신경계를 즉각 현실로 되돌립니다. 5가지 감각 관문을 순차적으로 통과하며 뇌에 안전 신호를 전달하세요.",
      chip1: "5단계 오감 체크포인트",
      chip2: "생리학적 한숨(Cyclic Sigh) 유도",
      chip3: "100% 브라우저 로컬 비공개",
      skip: "그라운딩 도구로 바로 이동",
      back: "← 도구 목록으로",
      langLabel: "언어 설정:",
      pulseLabel: "원형 펄스에 맞춰 편안하게 호흡하세요 • 들이쉬고 내쉬기",
      step5: "5 • 시각",
      step4: "4 • 촉각",
      step3: "3 • 청각",
      step2: "2 • 후각",
      step1: "1 • 미각 & 한숨",
      stage5Title: "주변에서 눈에 보이는 5가지 찾기 (시각)",
      stage5Desc: "주변을 천천히 둘러보세요. 뇌가 평소 무심코 지나치던 사물의 그림자, 색상, 형태에 시선을 두고 하나씩 탭하세요:",
      s5Item1: "1. 방 안에서 눈에 띄는 고유한 색상 하나",
      s5Item2: "2. 빛이나 그림자가 바닥/벽에 닿는 모양",
      s5Item3: "3. 손 닿는 거리 사물의 독특한 질감이나 무늬",
      s5Item4: "4. 평소 의식하지 않았던 작은 물건",
      s5Item5: "5. 창문이나 방 모서리의 뚜렷한 경계선",
      stage4Title: "몸으로 느껴지는 4가지 감각 (촉각)",
      stage4Desc: "머릿속 생각에서 빠져나와 몸이 닿아 있는 물리적 접촉점에 의식을 집중하세요. 감각을 느끼며 탭하세요:",
      s4Item1: "1. 발바닥이 바닥을 단단히 디디고 있는 무게감",
      s4Item2: "2. 옷감이 살갗에 닿아 있는 촉감과 온도",
      s4Item3: "3. 책상이나 의자 표면의 매끄러움 또는 차가움",
      s4Item4: "4. 등받이가 허리와 등을 지탱해 주는 안정감",
      stage3Title: "지금 귀에 들리는 3가지 소리 (청각)",
      stage3Desc: "머릿속 목소리를 끄고 주변 공간의 미세한 소리에 귀를 기울여 보세요. 소리를 인지하며 탭하세요:",
      s3Item1: "1. 아주 미세한 배경 소음 (환풍기, 바람, 원거리 소음)",
      s3Item2: "2. 조용히 오르내리는 나의 숨소리",
      s3Item3: "3. 소리와 소리 사이의 잔잔한 고요함",
      stage2Title: "코로 맡을 수 있는 2가지 냄새 (후각)",
      stage2Desc: "코로 천천히 공기를 들이마셔 보세요. 주변 공기의 냄새를 의식하며 탭하세요:",
      s2Item1: "1. 옷, 방, 종이 등에서 나는 은은한 냄새",
      s2Item2: "2. 콧속으로 들어오는 시원하고 상쾌한 공기의 감각",
      stage1Title: "입안의 1가지 감각 & 생리학적 한숨 (미각/호흡)",
      stage1Desc: "입안에 남아 있는 맛을 느끼거나 침을 한 번 삼킨 뒤, 뇌간에 즉각 안전 신호를 전달하는 생리학적 한숨을 1회 진행합니다.",
      s1Item1: "1. 입안의 편안한 상태를 느끼고 턱과 어깨의 힘을 툭 빼기",
      sighTitle: "가이드 생리학적 한숨 (Physiological Sigh)",
      sighInstr1: "코로 깊게 들이쉬고(4초) + 한 번 더 쪼개 들이쉬기(1초)...",
      sighInstr2: "입으로 가늘고 길게 끝까지 내쉬기(6초)...",
      sighInstrReady: "한숨 가이드 시작 버튼을 누르면 카운트가 시작됩니다",
      startSighBtn: "가이드 한숨 호흡 시작하기",
      nextBtn: "다음 감각 단계로 →",
      prevBtn: "← 이전 단계",
      finishBtn: "그라운딩 완료하기",
      resetBtn: "처음부터 다시 하기",
      compBadge: "신체 그라운딩 완료",
      compTitle: "당신의 신경계가 현실로 돌아왔습니다",
      compDesc: "5가지 감각 경로를 모두 활성화하여 편도체(불안 중추)에 안전 신호를 전달했습니다. 심박수와 호흡이 안정되고 차분한 집중력이 회복됩니다.",
      copyBtn: "진정 기록 복사하기",
      shareBtn: "진정 결과 카드 공유하기",
      copiedToast: "그라운딩 기록이 클립보드에 복사되었습니다!",
      bridgeStressTitle: "자율신경 스트레스 측정",
      bridgeStressDesc: "만성적인 신경계 긴장도를 확인하고 7일 회복 플랜을 확인하세요.",
      bridgeResetTitle: "HSP 감각 리셋 카드",
      bridgeResetDesc: "감각 과부하를 위한 저자극 청각 신경 리셋 세션.",
      bridgeDiffTitle: "번아웃 vs 스트레스 감별 매트릭스",
      bridgeDiffDesc: "일시적인 급성 긴장인지, 회복이 필요한 만성 소진인지 좌표로 판별하세요.",
      discTitle: "학술적 경계 및 안내 사항:",
      discText: "5-4-3-2-1 그라운딩 기법은 인지행동치료(CBT) 및 트라우마 회복에서 널리 활용되는 과학적 신체 감각 주의전환 기법이며, 전문적인 의학적 치료를 대체하지 않습니다.",
      privacy: "개인정보처리방침",
      terms: "이용약관"
    },
    ja: {
      kicker: "自律神経リセットプロトコル",
      heroTitle: "5-4-3-2-1 五感グラウンディングツール",
      heroLead: "急な不安、パニック、思考の渦から神経系を今この瞬間に引き戻します。5つの感覚チェックポイントを順に辿り、脳に安全信号を伝達します。",
      chip1: "5段階の五感ステップ",
      chip2: "生理的ため息（Cyclic Sigh）誘導",
      chip3: "完全端末内プライベート処理",
      skip: "ツールへスキップ",
      back: "← ツール一覧",
      langLabel: "言語:",
      pulseLabel: "円形パルスに合わせて呼吸してください • 吸って・吐いて",
      step5: "5 • 視覚",
      step4: "4 • 触覚",
      step3: "3 • 聴覚",
      step2: "2 • 嗅覚",
      step1: "1 • 味覚＆呼吸",
      stage5Title: "目に見える5つのものを探す（視覚）",
      stage5Desc: "周りをゆっくり見渡してください。普段見過ごしている小さな詳細をタップします：",
      s5Item1: "1. 部屋の中で目立つ色",
      s5Item2: "2. 光や影が落ちている形",
      s5Item3: "3. 手の届く物体の質感や模様",
      s5Item4: "4. 普段意識していない小さな物",
      s5Item5: "5. 窓や部屋の角の明確な境界線",
      stage4Title: "触れている4つの感覚（触覚）",
      stage4Desc: "思考から離れ、身体が触れている物理的な接触点に意識を向けます：",
      s4Item1: "1. 足の裏が床をしっかり踏みしめている感覚",
      s4Item2: "2. 衣服が肌に触れている感触と温度",
      s4Item3: "3. 机や椅子の表面の滑らかさや冷たさ",
      s4Item4: "4. 背もたれが体を支えている安定感",
      stage3Title: "耳に聞こえる3つの音（聴覚）",
      stage3Desc: "頭の中の声を止め、周囲の空間にあるかすかな音に耳を澄ませます：",
      s3Item1: "1. かすかな環境音（空調、風、遠くの音）",
      s3Item2: "2. 静かに繰り返される自分の呼吸音",
      s3Item3: "3. 音と音の間の静寂",
      stage2Title: "鼻で感じる2つの匂い（嗅覚）",
      stage2Desc: "鼻からゆっくり空気を吸い込み、周囲の香りを意識します：",
      s2Item1: "1. 衣服や部屋のほのかな香り",
      s2Item2: "2. 鼻を通る冷たく新鮮な空気の感覚",
      stage1Title: "1つの味覚 ＆ 生理的ため息（呼吸）",
      stage1Desc: "口の中の感覚に意識を向け、脳に安全信号を送る生理的ため息を1回行います。",
      s1Item1: "1. 口の中の力を抜き、顎と肩の緊張を緩める",
      sighTitle: "生理的ため息ガイド",
      sighInstr1: "鼻から深く吸い(4秒) ＋ さらに少し吸い足す(1秒)...",
      sighInstr2: "口から細く長く最後まで吐き出す(6秒)...",
      sighInstrReady: "開始ボタンを押すとガイドが始まります",
      startSighBtn: "ため息呼吸ガイドを開始",
      nextBtn: "次の感覚ステップへ →",
      prevBtn: "← 前のステップ",
      finishBtn: "グラウンディングを完了",
      resetBtn: "最初からやり直す",
      compBadge: "グラウンディング完了",
      compTitle: "神経系が今この瞬間に戻りました",
      compDesc: "5つの感覚経路を活性化し、扁桃体に安全信号を伝えました。心拍数が安定し、穏やかな集中力が回復します。",
      copyBtn: "記録をコピー",
      shareBtn: "カードを共有",
      copiedToast: "記録がクリップボードにコピーされました！",
      bridgeStressTitle: "ストレスチェック",
      bridgeStressDesc: "自律神経の緊張度を測り、回復プランを確認します。",
      bridgeResetTitle: "感覚リセットカード",
      bridgeResetDesc: "感覚過負荷のための低刺激神経リセットセッション。",
      bridgeDiffTitle: "バーンアウト感別マトリクス",
      bridgeDiffDesc: "一時的なストレスか慢性的燃え尽きかを判定します。",
      discTitle: "免責事項:",
      discText: "本ツールは認知行動療法に基づくリラクゼーション手法であり、医療診断を代替するものではありません。",
      privacy: "プライバシーポリシー",
      terms: "利用規約"
    },
    zh: {
      kicker: "急性自主神经调节工具",
      heroTitle: "5-4-3-2-1 五感着陆法与焦虑平复工具",
      heroLead: "在急性焦虑、惊恐或思绪过载时，立即将神经系统拉回当下。按顺序走通5个感官关口，向大脑传递平静安全的神经信号。",
      chip1: "5个五感检查点",
      chip2: "生理性叹息呼吸引导",
      chip3: "100% 浏览器本地隐私保护",
      skip: "跳转至着陆工具",
      back: "← 返回工具库",
      langLabel: "语言设置:",
      pulseLabel: "配合圆形呼吸节奏 • 缓缓吸气与呼气",
      step5: "5 • 视觉",
      step4: "4 • 触觉",
      step3: "3 • 听觉",
      step2: "2 • 嗅觉",
      step1: "1 • 味觉与呼吸",
      stage5Title: "寻找身边能看到的5样事物 (视觉)",
      stage5Desc: "缓慢环顾四周，留意大脑平时忽略的细微之处（光影、颜色、形状），找到后依次点击：",
      s5Item1: "1. 房间里一种醒目的独特颜色",
      s5Item2: "2. 光线或阴影落在物体上的形状",
      s5Item3: "3. 身旁某样物品独特的材质或纹理",
      s5Item4: "4. 平时未曾仔细注意过的小物件",
      s5Item5: "5. 窗户或墙角分明的轮廓线",
      stage4Title: "感受身体接触的4种触感 (触觉)",
      stage4Desc: "将注意力从奔涌的思绪转移到身体与地面的真实接触点上：",
      s4Item1: "1. 双脚平踩地面传来的扎实支撑感",
      s4Item2: "2. 衣物轻贴皮肤的触感与温度",
      s4Item3: "3. 桌面或椅子表面的平滑与微凉",
      s4Item4: "4. 椅背托住后背的承重与稳定感",
      stage3Title: "细听耳边传来的3种声音 (听觉)",
      stage3Desc: "关闭脑海里的自我批判，倾听环境中原本存在的声音层次：",
      s3Item1: "1. 极其微弱的环境白噪音（风声、电器微鸣）",
      s3Item2: "2. 自己平缓进出的呼吸声音",
      s3Item3: "3. 声音退去后的静谧感",
      stage2Title: "用鼻子感受的2种气味 (嗅觉)",
      stage2Desc: "用鼻子缓缓吸气，感受空气中的微弱气息：",
      s2Item1: "1. 衣物、空间或纸张淡淡的气息",
      s2Item2: "2. 清凉空气涌入鼻腔的清新体感",
      stage1Title: "1种味觉与1次生理性叹息呼吸",
      stage1Desc: "感受口腔里的味道并吞咽一次，随后进行一次生理性叹息呼吸，直接向脑干注入平静信号。",
      s1Item1: "1. 放松舌头与下颌，舒展肩颈肌肉",
      sighTitle: "生理性叹息呼吸引导 (Physiological Sigh)",
      sighInstr1: "鼻吸两下：深吸气4秒 ＋ 补吸一口1秒...",
      sighInstr2: "嘴巴长呼：用嘴极慢、彻底地吐出空气6秒...",
      sighInstrReady: "点击下方按钮开始呼吸倒计时",
      startSighBtn: "开始引导叹息呼吸",
      nextBtn: "前往下一个感官 →",
      prevBtn: "← 上一个感官",
      finishBtn: "完成着陆练习",
      resetBtn: "重新开始",
      compBadge: "神经系统着陆完成",
      compTitle: "您已重新扎根于当下",
      compDesc: "通过调动全部5个感觉通道，您已成功向杏仁核（恐惧中枢）传递了安全信号。心率与呼吸正逐渐回归健康平稳基线。",
      copyBtn: "复制平复日志",
      shareBtn: "分享结果卡片",
      copiedToast: "平复日志已复制到剪贴板！",
      bridgeStressTitle: "自主神经压力测试",
      bridgeStressDesc: "测算慢性交感神经过载程度并获取应对指南。",
      bridgeResetTitle: "HSP 感官重置卡片",
      bridgeResetDesc: "针对过度刺激的低负荷听觉神经重置练习。",
      bridgeDiffTitle: "职业倦怠 vs 压力鉴别矩阵",
      bridgeDiffDesc: "通过2D坐标辨别当下是急性负荷还是深度耗竭。",
      discTitle: "科学声明与免责提示：",
      discText: "5-4-3-2-1 着陆法是认知行为治疗（CBT）中广泛运用的体感锚定工具，用于自我安抚，不构成医疗处方。",
      privacy: "隐私政策",
      terms: "用户协议"
    },
    es: {
      kicker: "PROTOCOLO DE REGULACIÓN SOMÁTICA",
      heroTitle: "Herramienta de Grounding 5-4-3-2-1",
      heroLead: "Ancla tu sistema nervioso durante picos de ansiedad, pánico o sobreestimulación sensorial. Conecta con el momento presente a través de 5 puntos sensoriales.",
      chip1: "5 Puntos Sensoriales",
      chip2: "Suspiro Fisiológico Guiado",
      chip3: "100% Local y Privado",
      skip: "Saltar a la herramienta",
      back: "← Catálogo de Herramientas",
      langLabel: "Idioma:",
      pulseLabel: "Respira suavemente con el pulso • Inhala y exhala",
      step5: "5 • Ver",
      step4: "4 • Tocar",
      step3: "3 • Oír",
      step2: "2 • Oler",
      step1: "1 • Saborear y Suspirar",
      stage5Title: "5 Cosas que Puedes Ver a Tu Alrededor",
      stage5Desc: "Mira a tu alrededor. Nota pequeños detalles que tu mente suele ignorar (sombras, reflejos, colores). Pulsa cada elemento:",
      s5Item1: "1. Un color distintivo en la habitación",
      s5Item2: "2. La forma en que la luz o sombra incide en una superficie",
      s5Item3: "3. La textura de un objeto cercano",
      s5Item4: "4. Un objeto pequeño que hace tiempo no mirabas",
      s5Item5: "5. Una línea o borde en la distancia",
      stage4Title: "4 Cosas que Puedes Tocar Físicamente",
      stage4Desc: "Lleva la atención a los puntos de contacto de tu cuerpo con la tierra:",
      s4Item1: "1. La presión firme de tus pies apoyados en el suelo",
      s4Item2: "2. La sensación de tu ropa rozando tu piel",
      s4Item3: "3. La temperatura de tus manos o de la mesa",
      s4Item4: "4. El respaldo de la silla sosteniendo tu espalda",
      stage3Title: "3 Cosas que Puedes Oír Ahora Mismo",
      stage3Desc: "Escucha más allá de tus pensamientos inmediatos:",
      s3Item1: "1. Un sonido ambiental tenue (ventilador, aire, tráfico lejano)",
      s3Item2: "2. El sonido suave de tu propia respiración",
      s3Item3: "3. La quietud entre cada sonido",
      stage2Title: "2 Cosas que Puedes Oler",
      stage2Desc: "Inhala suavemente por la nariz y nota el aire:",
      s2Item1: "1. El aroma sutil de tu ropa o del entorno",
      s2Item2: "2. La sensación de aire fresco entrando por la nariz",
      stage1Title: "1 Sabor y 1 Suspiro Fisiológico Guiado",
      stage1Desc: "Siente el sabor neutro en tu boca y relaja la mandíbula. Realiza un suspiro fisiológico para indicar seguridad a tu cerebro.",
      s1Item1: "1. Relajar lengua y mandíbula, soltar los hombros",
      sighTitle: "Suspiro Fisiológico Guiado",
      sighInstr1: "Doble Inhalación: Inhala profundo por la nariz (4s) + inhala un extra (1s)...",
      sighInstr2: "Exhalación Lenta: Suelta el aire despacio por la boca (6s)...",
      sighInstrReady: "Pulsa el botón para iniciar la respiración guiada",
      startSighBtn: "Iniciar Suspiro Guiado",
      nextBtn: "Siguiente Sentido →",
      prevBtn: "← Sentido Anterior",
      finishBtn: "Completar Ejercicio",
      resetBtn: "Reiniciar Sesión",
      compBadge: "GROUNDING COMPLETADO",
      compTitle: "Tu Sistema Nervioso Está Reanclado",
      compDesc: "Has activado tus 5 vías sensoriales y comunicado calma a la amígdala. El ritmo cardíaco y la respiración vuelven a su línea base.",
      copyBtn: "Copiar Registro",
      shareBtn: "Compartir Tarjeta",
      copiedToast: "¡Registro copiado al portapapeles!",
      bridgeStressTitle: "Test de Estrés Autónomo",
      bridgeStressDesc: "Mide tu tensión nerviosa y visualiza planes de recuperación.",
      bridgeResetTitle: "Reinicio Sensorial PAS",
      bridgeResetDesc: "Sesión auditiva de baja estimulación para calmar la sobrecarga.",
      bridgeDiffTitle: "Matriz Burnout vs Estrés",
      bridgeDiffDesc: "Distingue entre pico de estrés agudo y agotamiento crónico.",
      discTitle: "Aviso Científico:",
      discText: "Técnica de enraizamiento basada en terapia cognitivo-conductual. No sustituye la intervención médica.",
      privacy: "Política de Privacidad",
      terms: "Términos"
    }
  };

  // Fallback for remaining languages
  ['de', 'fr', 'pt', 'ru', 'hi', 'id', 'tr'].forEach(function (code) {
    if (!I18N[code]) {
      I18N[code] = Object.assign({}, I18N.en);
    }
  });

  var currentLang = 'en';
  var currentStage = 5; // 5 -> 4 -> 3 -> 2 -> 1 -> complete (0)
  var startTime = Date.now();
  var checkedState = {
    5: [false, false, false, false, false],
    4: [false, false, false, false],
    3: [false, false, false],
    2: [false, false],
    1: [false]
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

    // Cross-funnel links
    var bridgeStress = document.getElementById('bridgeStress');
    if (bridgeStress) bridgeStress.href = '/stress-check/?lang=' + encodeURIComponent(lang) + '&source=grounding_tool';
    var bridgeReset = document.getElementById('bridgeReset');
    if (bridgeReset) bridgeReset.href = '/hsp-test/reset.html?lang=' + encodeURIComponent(lang) + '&source=grounding_tool';
    var bridgeDiff = document.getElementById('bridgeDiff');
    if (bridgeDiff) bridgeDiff.href = '/portal/tools/burnout-stress-differential.html?lang=' + encodeURIComponent(lang) + '&source=grounding_tool';

    renderStage();
  }

  function renderStage() {
    var dict = I18N[currentLang] || I18N.en;
    var stageCard = document.getElementById('stageCard');
    var completeCard = document.getElementById('completeCard');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');

    if (currentStage === 0) {
      // Completed state
      stageCard.hidden = true;
      completeCard.hidden = false;
      document.querySelectorAll('.step-indicator').forEach(function (el) {
        el.classList.remove('active');
        el.classList.add('completed');
      });
      if (typeof gtag === 'function') {
        gtag('event', 'grounding_session_complete', {
          tool_name: '54321_grounding',
          duration_seconds: Math.round((Date.now() - startTime) / 1000)
        });
      }
      return;
    }

    stageCard.hidden = false;
    completeCard.hidden = true;

    // Update progress steps
    for (var s = 5; s >= 1; s--) {
      var ind = document.getElementById('stepInd' + s);
      if (!ind) continue;
      ind.classList.remove('active', 'completed');
      if (s > currentStage) {
        ind.classList.add('completed');
      } else if (s === currentStage) {
        ind.classList.add('active');
      }
    }

    // Set stage texts
    var iconMap = { 5: '👁️', 4: '✋', 3: '👂', 2: '👃', 1: '👅' };
    document.getElementById('stageIcon').textContent = iconMap[currentStage];
    document.getElementById('stageTitle').textContent = dict['stage' + currentStage + 'Title'];
    document.getElementById('stageDesc').textContent = dict['stage' + currentStage + 'Desc'];

    // Render items list
    var list = document.getElementById('itemsList');
    list.innerHTML = '';
    var itemCount = currentStage;
    var allChecked = true;

    for (var i = 0; i < itemCount; i++) {
      var isChecked = checkedState[currentStage][i];
      if (!isChecked) allChecked = false;

      var item = document.createElement('div');
      item.className = 'check-item' + (isChecked ? ' checked' : '');
      item.setAttribute('data-idx', i);

      var box = document.createElement('div');
      box.className = 'check-box';
      box.textContent = isChecked ? '✓' : '';

      var text = document.createElement('div');
      text.className = 'check-text';
      text.textContent = dict['s' + currentStage + 'Item' + (i + 1)];

      item.appendChild(box);
      item.appendChild(text);
      list.appendChild(item);
    }

    // Sigh guide visibility for Stage 1
    var sighBox = document.getElementById('sighBox');
    if (sighBox) {
      sighBox.hidden = (currentStage !== 1);
    }

    // Buttons
    prevBtn.disabled = (currentStage === 5);
    if (currentStage === 1) {
      nextBtn.textContent = dict.finishBtn;
    } else {
      nextBtn.textContent = dict.nextBtn;
    }
  }

  function handleItemClick(e) {
    var item = e.target.closest('.check-item');
    if (!item) return;
    var idx = parseInt(item.getAttribute('data-idx'), 10);
    checkedState[currentStage][idx] = !checkedState[currentStage][idx];

    // Gentle tactile vibration on supported mobile devices
    if (navigator.vibrate) {
      navigator.vibrate(20);
    }

    renderStage();
  }

  function goNext() {
    // If not all items checked, auto-check them to keep friction low
    for (var i = 0; i < currentStage; i++) {
      checkedState[currentStage][i] = true;
    }

    if (currentStage > 1) {
      currentStage--;
    } else {
      currentStage = 0; // complete
    }
    renderStage();
  }

  function goPrev() {
    if (currentStage < 5 && currentStage > 0) {
      currentStage++;
      renderStage();
    }
  }

  function runCyclicSigh() {
    var dict = I18N[currentLang] || I18N.en;
    var instr = document.getElementById('sighInstruction');
    var fill = document.getElementById('sighTimerFill');
    var btn = document.getElementById('startSighBtn');
    btn.disabled = true;

    // Phase 1: Inhale 4s + 1s top-up = 5s
    instr.textContent = dict.sighInstr1;
    fill.style.transition = 'width 5s ease-in-out';
    fill.style.width = '100%';

    setTimeout(function () {
      // Phase 2: Long Exhale 6s
      instr.textContent = dict.sighInstr2;
      fill.style.transition = 'width 6s linear';
      fill.style.width = '0%';

      setTimeout(function () {
        instr.textContent = "✓ " + dict.compBadge;
        btn.disabled = false;
        checkedState[1][0] = true;
        renderStage();
      }, 6100);
    }, 5100);
  }

  function resetSession() {
    currentStage = 5;
    startTime = Date.now();
    for (var s = 5; s >= 1; s--) {
      for (var i = 0; i < s; i++) {
        checkedState[s][i] = false;
      }
    }
    renderStage();
  }

  function getShareText() {
    var dict = I18N[currentLang] || I18N.en;
    var duration = Math.round((Date.now() - startTime) / 1000);
    var mins = Math.floor(duration / 60);
    var secs = duration % 60;
    var timeStr = (mins > 0 ? mins + "m " : "") + secs + "s";

    return "🌿 DopaBrain 5-4-3-2-1 Sensory Grounding\n" +
      "Session complete in " + timeStr + "\n" +
      "Nervous system anchored • 5 Senses engaged • Calm restored\n" +
      "Try the interactive grounding tool: " + window.location.origin + "/portal/tools/grounding-exercise.html?lang=" + currentLang;
  }

  function copyLog() {
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

  function shareLog() {
    var text = getShareText();
    if (navigator.share) {
      navigator.share({
        title: "DopaBrain 5-4-3-2-1 Grounding Session",
        text: text,
        url: window.location.origin + "/portal/tools/grounding-exercise.html?lang=" + currentLang
      }).catch(function () {});
    } else {
      copyLog();
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    try {
      var initial = detectInitialLang();
      applyLanguage(initial);

      document.getElementById('langSelect').addEventListener('change', function (e) {
        applyLanguage(e.target.value);
      });

      document.getElementById('itemsList').addEventListener('click', handleItemClick);
      document.getElementById('nextBtn').addEventListener('click', goNext);
      document.getElementById('prevBtn').addEventListener('click', goPrev);
      document.getElementById('startSighBtn').addEventListener('click', runCyclicSigh);
      document.getElementById('resetBtn').addEventListener('click', resetSession);
      document.getElementById('copyBtn').addEventListener('click', copyLog);
      document.getElementById('shareBtn').addEventListener('click', shareLog);
      document.querySelectorAll('.bridge-card').forEach(function (card) {
        card.addEventListener('click', function () {
          if (typeof gtag === 'function') {
            gtag('event', 'content_cta_click', {
              event_category: 'engagement',
              page_path: location.pathname,
              target_url: card.href,
              link_id: card.id || 'bridge_card'
            });
          }
        });
      });
    } catch (err) {
      console.error('Grounding tool init error:', err);
    }
  });
})();
