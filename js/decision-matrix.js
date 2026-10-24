(function() {
  'use strict';

  const I18N = {
    en: {
      title: "Dilemma Decision Matrix",
      kicker: "ANALYTICAL CLARITY TOOL · NO ACCOUNT",
      lead: "Overcome analysis paralysis. Score two options across weighted criteria to reveal the mathematically optimal choice.",
      chipPrivate: "100% Private (Local)",
      chipMethod: "Pugh Decision Matrix",
      chipFree: "Free & Unlimited",
      setupTitle: "1. Define Your Dilemma",
      optALabel: "Option A Name",
      optBLabel: "Option B Name",
      optAPlaceholder: "e.g., Take the New Job Offer",
      optBPlaceholder: "e.g., Stay at Current Role",
      criteriaTitle: "2. Weighted Evaluation Criteria",
      criteriaSub: "Set criteria weights (1 = Minor, 5 = Critical) and rate each option (1 = Poor, 10 = Ideal).",
      weightLabel: "Weight:",
      crit1: "Financial & Career Upside",
      crit2: "Mental Wellbeing & Low Stress",
      crit3: "Long-term Growth & Vision",
      crit4: "Daily Energy & Lifestyle Fit",
      calcBtn: "Calculate Weighted Verdict",
      resetBtn: "Reset to Defaults",
      verdictKicker: "WEIGHTED ANALYSIS VERDICT",
      advantageA: "Decisive Edge for",
      advantageB: "Decisive Edge for",
      balanced: "Close Match — Examine Core Differentiators",
      diffLabel: "Score Differential:",
      copyBtn: "Copy Decision Report",
      copied: "Report copied to clipboard!",
      methodKicker: "HOW IT WORKS",
      methodTitle: "The Science of Weighted Decision Matrices",
      m1Title: "1. Weight Importance",
      m1Body: "Not all factors matter equally. Weighting from 1 to 5 ensures crucial priorities dominate minor conveniences.",
      m2Title: "2. Rate Objectively",
      m2Body: "Scoring each option on a 1–10 scale breaks emotional overwhelm into manageable, objective micro-evaluations.",
      m3Title: "3. Eliminate Bias",
      m3Body: "Mathematical aggregation prevents recency bias and fear-driven hesitation from sabotaging high-stakes choices.",
      relStressTitle: "Stress Check",
      relStressDesc: "High decision fatigue? Measure your systemic stress load.",
      relFutureTitle: "Future Self",
      relFutureDesc: "Align this decision with your 5-year future vision.",
      relEmotionTitle: "Emotion Planner",
      relEmotionDesc: "Calm acute anxiety before finalizing your choice.",
      tableCrit: "Criterion",
      tableWeight: "Weight",
      tableOptA: "Option A",
      tableOptB: "Option B"
    },
    ko: {
      title: "딜레마 의사결정 매트릭스",
      kicker: "가중치 기반 결정 분석 도구 · 비로그인",
      lead: "결정 장애와 생각 과부하를 해소하세요. 가중치 매트릭스를 통해 두 선택지 중 수학적으로 가장 현명한 답을 도출합니다.",
      chipPrivate: "100% 브라우저 로컬 연산",
      chipMethod: "퓨(Pugh) 의사결정 매트릭스",
      chipFree: "무료 무제한 이용",
      setupTitle: "1. 비교할 두 선택지 입력",
      optALabel: "선택지 A 명칭",
      optBLabel: "선택지 B 명칭",
      optAPlaceholder: "예: 새로운 이직 제안 수락",
      optBPlaceholder: "예: 현재 직장 잔류 및 전문성 심화",
      criteriaTitle: "2. 가중치별 기준 평가",
      criteriaSub: "중요도 가중치(1=낮음, 5=결정적)를 정하고, 각 선택지에 대해 1~10점 점수를 매기세요.",
      weightLabel: "가중치:",
      crit1: "재정적 보상 및 커리어 가치",
      crit2: "심리적 안정 및 스트레스 경감",
      crit3: "장기적 성장성 및 비전 정렬",
      crit4: "일상 에너지 및 라이프스타일 조화",
      calcBtn: "가중치 결과 계산하기",
      resetBtn: "기본값 초기화",
      verdictKicker: "가중치 분석 최종 판정",
      advantageA: "확실한 우세:",
      advantageB: "확실한 우세:",
      balanced: "호각세(접전) — 핵심 변수 집중 재평가 권장",
      diffLabel: "점수 격차:",
      copyBtn: "결정 보고서 복사",
      copied: "결정 보고서가 클립보드에 복사되었습니다!",
      methodKicker: "의사결정 매트릭스 원리",
      methodTitle: "감정을 배제하고 최적의 결정을 내리는 과학적 원리",
      m1Title: "1. 우선순위 가중치",
      m1Body: "모든 요소가 동등할 수는 없습니다. 1~5점 가중치를 부여해 핵심 기준이 사소한 편의성에 휘둘리지 않게 합니다.",
      m2Title: "2. 객관적 지표 분해",
      m2Body: "각 기준별로 1~10점을 매김으로써 막연한 불안과 복잡한 생각을 단순하고 명료한 수치로 전환합니다.",
      m3Title: "3. 편향과 후회 최소화",
      m3Body: "수학적 합산을 통해 최신 편향이나 손실 회피 심리를 걷어내고 장기적으로 가장 이로운 선택을 확정합니다.",
      relStressTitle: "스트레스 체크",
      relStressDesc: "결정 피로가 극심하다면? 전반적 스트레스 부하를 측정하세요.",
      relFutureTitle: "미래의 나 진단",
      relFutureDesc: "이번 선택이 5년 후 내 미래 자아와 일치하는지 점검하세요.",
      relEmotionTitle: "감정 조절 플래너",
      relEmotionDesc: "최종 확정 전 불안과 충동을 가라앉히는 실행 계획을 세우세요.",
      tableCrit: "평가 기준",
      tableWeight: "가중치",
      tableOptA: "선택지 A",
      tableOptB: "선택지 B"
    },
    ja: {
      title: "ジレンマ意思決定マトリクス",
      kicker: "重み付け意思決定ツール · 登録不要",
      lead: "決断の迷いや思考の堂々巡りを解消。重み付けマトリクスを用いて、2つの選択肢から客観的に最適な結論を導きます。",
      chipPrivate: "100% 完全ローカル処理",
      chipMethod: "ピュー(Pugh)マトリクス",
      chipFree: "無料・回数無制限",
      setupTitle: "1. 2つの選択肢を設定",
      optALabel: "選択肢 A",
      optBLabel: "選択肢 B",
      optAPlaceholder: "例：新しい転職オファーを受ける",
      optBPlaceholder: "例：現在の職場に残って専門性を深める",
      criteriaTitle: "2. 基準ごとの重みと評価",
      criteriaSub: "重要度の重み（1=低、5=最重要）を設定し、各選択肢を1〜10点で採点します。",
      weightLabel: "重み:",
      crit1: "金銭的報酬・キャリアの可能性",
      crit2: "精神的安定・低ストレス",
      crit3: "長期的成長・ビジョンとの合致",
      crit4: "日々のエネルギー・生活との調和",
      calcBtn: "重み付けスコアを計算",
      resetBtn: "デフォルトに戻す",
      verdictKicker: "意思決定の分析結果",
      advantageA: "明確な優位:",
      advantageB: "明確な優位:",
      balanced: "僅差（接戦） — 重要項目の再確認を推奨",
      diffLabel: "スコア差:",
      copyBtn: "レポートをコピー",
      copied: "レポートをコピーしました！",
      methodKicker: "仕組みと科学",
      methodTitle: "感情に流されず最適な決断を下す科学",
      m1Title: "1. 重要度の重み付け",
      m1Body: "すべての項目が同等の重みを持つわけではありません。1〜5の重み付けで真の優先順位を反映します。",
      m2Title: "2. 客観的スコア化",
      m2Body: "1〜10点で個別に評価することで、漠然とした不安を扱いやすい客観的データに分解します。",
      m3Title: "3. 後悔のない決断",
      m3Body: "感情的なバイアスを排除し、長期的視野に立った合理的選択を支援します。",
      relStressTitle: "ストレス診断",
      relStressDesc: "決断疲れを感じていませんか？現在の負荷を測定しましょう。",
      relFutureTitle: "未来の自分診断",
      relFutureDesc: "この決断が長期的な未来像と合致しているか確認します。",
      relEmotionTitle: "感情調整プランナー",
      relEmotionDesc: "決定を実行に移す前に、落ち着きを取り戻す行動カード。",
      tableCrit: "評価項目",
      tableWeight: "重み",
      tableOptA: "選択肢 A",
      tableOptB: "選択肢 B"
    },
    zh: {
      title: "两难决策加权矩阵",
      kicker: "理性选择分析工具 · 无需注册",
      lead: "告别选择困难与精神内耗。通过加权决策矩阵，科学对比两个选项，找出最优解。",
      chipPrivate: "100% 本地计算",
      chipMethod: "普格(Pugh)决策矩阵",
      chipFree: "完全免费",
      setupTitle: "1. 设定两个候选选项",
      optALabel: "选项 A 名称",
      optBLabel: "选项 B 名称",
      optAPlaceholder: "例如：接受新工作机会",
      optBPlaceholder: "例如：留在现有岗位深耕",
      criteriaTitle: "2. 多维度加权评分",
      criteriaSub: "设置各维度权重（1=较低，5=核心），并为每个选项打分（1~10分）。",
      weightLabel: "权重:",
      crit1: "经济回报与职业前景",
      crit2: "心理健康与抗压负荷",
      crit3: "长期个人成长与愿景",
      crit4: "日常精力与生活平衡",
      calcBtn: "计算加权分析结果",
      resetBtn: "恢复默认设置",
      verdictKicker: "加权分析最终结论",
      advantageA: "明显优势：",
      advantageB: "明显优势：",
      balanced: "难分伯仲 — 建议聚焦最核心差异项深入评估",
      diffLabel: "得分差距：",
      copyBtn: "复制决策分析报告",
      copied: "报告已成功复制到剪贴板！",
      methodKicker: "科学决策原理",
      methodTitle: "如何排除情绪干扰，做出无悔抉择",
      m1Title: "1. 明确优先级",
      m1Body: "不同考量权重大不相同。1~5的权重设置确保最在意的核心价值主导决策。",
      m2Title: "2. 化繁为简",
      m2Body: "将盘根错节的焦虑拆解为各个维度的清晰打分，消除决策疲劳。",
      m3Title: "3. 消除认知偏见",
      m3Body: "用数学量化战胜近因效应与损失厌恶，坚定执行最有利的方案。",
      relStressTitle: "压力负荷自测",
      relStressDesc: "决策疲惫？立即测量您当前的整体身心压力水平。",
      relFutureTitle: "未来自我画像",
      relFutureDesc: "检验当前抉择是否与未来的长期目标保持一致。",
      relEmotionTitle: "情绪调节方案",
      relEmotionDesc: "在敲定决策前，平复内心的犹豫与焦虑。",
      tableCrit: "评估指标",
      tableWeight: "权重",
      tableOptA: "选项 A",
      tableOptB: "选项 B"
    },
    es: {
      title: "Matriz de Decisión y Dilemas",
      kicker: "HERRAMIENTA DE CLARIDAD ANALÍTICA",
      lead: "Supera la parálisis por análisis. Evalúa dos opciones con criterios ponderados para tomar la decisión óptima.",
      chipPrivate: "100% Privado (Local)",
      chipMethod: "Matriz de Pugh",
      chipFree: "Gratis e Ilimitado",
      setupTitle: "1. Define tu dilema",
      optALabel: "Opción A",
      optBLabel: "Opción B",
      optAPlaceholder: "Ej: Aceptar nueva oferta laboral",
      optBPlaceholder: "Ej: Quedarse en el rol actual",
      criteriaTitle: "2. Criterios ponderados",
      criteriaSub: "Asigna pesos (1 a 5) y califica cada opción (1 a 10).",
      weightLabel: "Peso:",
      crit1: "Compensación y Carrera",
      crit2: "Bienestar Mental y Menor Estrés",
      crit3: "Crecimiento y Visión a Largo Plazo",
      crit4: "Energía Diaria y Estilo de Vida",
      calcBtn: "Calcular Veredicto Ponderado",
      resetBtn: "Restablecer",
      verdictKicker: "VEREDICTO ANALÍTICO",
      advantageA: "Ventaja decisiva para",
      advantageB: "Ventaja decisiva para",
      balanced: "Empate técnico — Reevaluar factor crítico",
      diffLabel: "Diferencia de puntos:",
      copyBtn: "Copiar Informe",
      copied: "¡Informe copiado al portapapeles!",
      methodKicker: "CÓMO FUNCIONA",
      methodTitle: "Ciencia de la toma de decisiones objetiva",
      m1Title: "1. Ponderación",
      m1Body: "No todos los factores valen lo mismo. Los pesos 1-5 priorizan lo esencial.",
      m2Title: "2. Calificación objetiva",
      m2Body: "Calificar del 1 al 10 disuelve la angustia en números manejables.",
      m3Title: "3. Reducción de sesgos",
      m3Body: "El cálculo neutral evita que el miedo dicte tu camino.",
      relStressTitle: "Test de Estrés",
      relStressDesc: "¿Fatiga de decisión? Mide tu nivel de sobrecarga actual.",
      relFutureTitle: "Yo Futuro",
      relFutureDesc: "Alinea tu decisión con tu visión a 5 años.",
      relEmotionTitle: "Plan Emocional",
      relEmotionDesc: "Calma la ansiedad aguda antes de formalizar tu elección.",
      tableCrit: "Criterio",
      tableWeight: "Peso",
      tableOptA: "Opción A",
      tableOptB: "Opción B"
    },
    de: {
      title: "Dilemma-Entscheidungsmatrix",
      kicker: "ANALYTISCHES ENTSCHEIDUNGSTOOL",
      lead: "Überwinden Sie Analyse-Paralyse. Gewichten Sie Kriterien und bewerten Sie Optionen für eine rationale Entscheidung.",
      chipPrivate: "100% Lokal & Privat",
      chipMethod: "Pugh-Entscheidungsmatrix",
      chipFree: "Kostenlos & Unbegrenzt",
      setupTitle: "1. Optionen definieren",
      optALabel: "Option A",
      optBLabel: "Option B",
      optAPlaceholder: "z.B. Neues Jobangebot annehmen",
      optBPlaceholder: "z.B. In aktueller Position bleiben",
      criteriaTitle: "2. Gewichtete Kriterien",
      criteriaSub: "Gewicht (1–5) und Bewertung (1–10) pro Option vergeben.",
      weightLabel: "Gewicht:",
      crit1: "Finanzen & Karrierechancen",
      crit2: "Mentale Balance & Stressabbau",
      crit3: "Langfristiges Wachstum & Vision",
      crit4: "Alltägliche Energie & Lebensstil",
      calcBtn: "Ergebnis berechnen",
      resetBtn: "Zurücksetzen",
      verdictKicker: "ANALYTISCHES URTEIL",
      advantageA: "Klarer Vorteil für",
      advantageB: "Klarer Vorteil für",
      balanced: "Sehr ausgeglichen — Schlüsselkriterien prüfen",
      diffLabel: "Punktedifferenz:",
      copyBtn: "Bericht kopieren",
      copied: "Bericht in Zwischenablage kopiert!",
      methodKicker: "METHODIK",
      methodTitle: "Entscheidungsfindung ohne emotionale Verzerrung",
      m1Title: "1. Gewichtung",
      m1Body: "Wichtige Faktoren dominieren zweitrangige Bequemlichkeiten.",
      m2Title: "2. Objektive Skala",
      m2Body: "1–10 Punkte verwandeln diffuse Sorgen in klare Kennzahlen.",
      m3Title: "3. Reue vermeiden",
      m3Body: "Mathematische Synthese schützt vor Impulsentscheidungen.",
      relStressTitle: "Stresstest",
      relStressDesc: "Entscheidungsmüde? Testen Sie Ihre aktuelle Belastung.",
      relFutureTitle: "Zukunfts-Ich",
      relFutureDesc: "Prüfen Sie den Einklang mit Ihren Zielen.",
      relEmotionTitle: "Emotionsplaner",
      relEmotionDesc: "Beruhigen Sie Anspannung vor dem finalen Schritt.",
      tableCrit: "Kriterium",
      tableWeight: "Gewicht",
      tableOptA: "Option A",
      tableOptB: "Option B"
    },
    fr: {
      title: "Matrice de Décision & Dilemmes",
      kicker: "OUTIL D'AIDE À LA DÉCISION",
      lead: "Dépassez la paralysie du choix. Évaluez deux options sur des critères pondérés pour révéler la meilleure voie.",
      chipPrivate: "100% Privé (Local)",
      chipMethod: "Matrice de Pugh",
      chipFree: "Gratuit & Illimité",
      setupTitle: "1. Définir le dilemme",
      optALabel: "Option A",
      optBLabel: "Option B",
      optAPlaceholder: "Ex : Accepter l'offre d'emploi",
      optBPlaceholder: "Ex : Rester au poste actuel",
      criteriaTitle: "2. Critères pondérés",
      criteriaSub: "Définissez le poids (1 à 5) et notez chaque option (1 à 10).",
      weightLabel: "Poids :",
      crit1: "Rémunération & Carrière",
      crit2: "Bien-être Mental & Moins de Stress",
      crit3: "Croissance à Long Terme & Vision",
      crit4: "Énergie Quotidienne & Mode de Vie",
      calcBtn: "Calculer le Verdict Pondéré",
      resetBtn: "Réinitialiser",
      verdictKicker: "VERDICT ANALYTIQUE",
      advantageA: "Avantage net pour",
      advantageB: "Avantage net pour",
      balanced: "Égalité serrée — Examiner les critères clés",
      diffLabel: "Écart de points :",
      copyBtn: "Copier le rapport",
      copied: "Rapport copié dans le presse-papiers !",
      methodKicker: "MÉTHODOLOGIE",
      methodTitle: "Décider avec clarté sans biais émotionnel",
      m1Title: "1. Pondération",
      m1Body: "Attribuez un poids pour que l'essentiel prime sur le secondaire.",
      m2Title: "2. Évaluation 1–10",
      m2Body: "Transformer le doute en chiffres concrets et comparables.",
      m3Title: "3. Choix serein",
      m3Body: "La logique mathématique évite les regrets prématurés.",
      relStressTitle: "Test de Stress",
      relStressDesc: "Fatigue décisionnelle ? Évaluez votre niveau de stress.",
      relFutureTitle: "Moi Futur",
      relFutureDesc: "Alignez ce choix sur votre vision à 5 ans.",
      relEmotionTitle: "Plan Émotionnel",
      relEmotionDesc: "Calmez l'anxiété avant de sceller votre décision.",
      tableCrit: "Critère",
      tableWeight: "Poids",
      tableOptA: "Option A",
      tableOptB: "Option B"
    },
    pt: {
      title: "Matriz de Decisão e Dilemas",
      kicker: "FERRAMENTA DE CLAREZA ANALÍTICA",
      lead: "Supere a paralisia da análise. Pontue duas opções em critérios ponderados para revelar a melhor escolha.",
      chipPrivate: "100% Local e Privado",
      chipMethod: "Matriz de Pugh",
      chipFree: "Gratuito e Ilimitado",
      setupTitle: "1. Defina suas opções",
      optALabel: "Opção A",
      optBLabel: "Opção B",
      optAPlaceholder: "Ex: Aceitar nova proposta de emprego",
      optBPlaceholder: "Ex: Continuar na função atual",
      criteriaTitle: "2. Critérios ponderados",
      criteriaSub: "Defina os pesos (1 a 5) e avalie cada opção (1 a 10).",
      weightLabel: "Peso:",
      crit1: "Remuneração e Carreira",
      crit2: "Bem-estar Mental e Baixo Estresse",
      crit3: "Crescimento a Longo Prazo e Visão",
      crit4: "Energia Diária e Estilo de Vida",
      calcBtn: "Calcular Veredito",
      resetBtn: "Redefinir",
      verdictKicker: "VEREDITO ANALÍTICO",
      advantageA: "Vantagem clara para",
      advantageB: "Vantagem clara para",
      balanced: "Empate técnico — Reavalie os pontos críticos",
      diffLabel: "Diferença de pontos:",
      copyBtn: "Copiar Relatório",
      copied: "Relatório copiado para a área de transferência!",
      methodKicker: "METODOLOGIA",
      methodTitle: "A ciência da decisão sem vieses emocionais",
      m1Title: "1. Ponderação",
      m1Body: "Pesos de 1 a 5 garantem que prioridades dominem conveniências.",
      m2Title: "2. Avaliação objetiva",
      m2Body: "Notas de 1 a 10 transformam ansiedade em dados gerenciáveis.",
      m3Title: "3. Decisão segura",
      m3Body: "A análise matemática elimina hesitações movidas pelo medo.",
      relStressTitle: "Teste de Estresse",
      relStressDesc: "Cansaço de decisão? Meça sua sobrecarga atual.",
      relFutureTitle: "Eu do Futuro",
      relFutureDesc: "Alinhe esta escolha com seus objetivos a longo prazo.",
      relEmotionTitle: "Plano Emocional",
      relEmotionDesc: "Acalme a mente antes de finalizar sua decisão.",
      tableCrit: "Critério",
      tableWeight: "Peso",
      tableOptA: "Opção A",
      tableOptB: "Opção B"
    },
    ru: {
      title: "Матрица Принятия Решений",
      kicker: "АНАЛИТИЧЕСКИЙ ИНСТРУМЕНТ",
      lead: "Преодолейте паралич анализа. Оцените два варианта по взвешенным критериям для нахождения оптимального выбора.",
      chipPrivate: "100% Локально и Приватно",
      chipMethod: "Матрица Пью (Pugh)",
      chipFree: "Бесплатно",
      setupTitle: "1. Определите варианты",
      optALabel: "Вариант А",
      optBLabel: "Вариант Б",
      optAPlaceholder: "Напр.: Принять новое предложение о работе",
      optBPlaceholder: "Напр.: Остаться на текущем месте",
      criteriaTitle: "2. Взвешенные критерии",
      criteriaSub: "Задайте вес (1–5) и оценку каждого варианта (1–10).",
      weightLabel: "Вес:",
      crit1: "Финансы и карьерный рост",
      crit2: "Душевное спокойствие и низкий стресс",
      crit3: "Долгосрочный потенциал и цели",
      crit4: "Энергия и баланс жизни",
      calcBtn: "Рассчитать Вердикт",
      resetBtn: "Сбросить",
      verdictKicker: "АНАЛИТИЧЕСКИЙ ВЕРДИКТ",
      advantageA: "Уверенное преимущество у",
      advantageB: "Уверенное преимущество у",
      balanced: "Равные позиции — оцените ключевые различия",
      diffLabel: "Разница баллов:",
      copyBtn: "Копировать отчет",
      copied: "Отчет скопирован в буфер обмена!",
      methodKicker: "МЕТОДОЛОГИЯ",
      methodTitle: "Как принимать решения без эмоций",
      m1Title: "1. Расстановка весов",
      m1Body: "Веса 1–5 не дают второстепенным факторам затмить главное.",
      m2Title: "2. Объективная шкала",
      m2Body: "Оценка 1–10 раскладывает тревогу на ясные цифры.",
      m3Title: "3. Выбор без сожалений",
      m3Body: "Математический расчет защищает от сиюминутных страхов.",
      relStressTitle: "Тест на стресс",
      relStressDesc: "Усталость от сомнений? Измерьте текущий уровень стресса.",
      relFutureTitle: "Будущее «Я»",
      relFutureDesc: "Сверьте выбор с вашими долгосрочными целями.",
      relEmotionTitle: "План эмоций",
      relEmotionDesc: "Успокойте тревогу перед принятием решения.",
      tableCrit: "Критерий",
      tableWeight: "Вес",
      tableOptA: "Вариант А",
      tableOptB: "Вариант Б"
    },
    hi: {
      title: "द्विधा निर्णय मैट्रिक्स (Decision Matrix)",
      kicker: "तार्किक निर्णय उपकरण · बिना लॉगिन",
      lead: "निर्णय लेने की उलझन दूर करें। भारित मानदंडों पर दो विकल्पों का मूल्यांकन कर सर्वोत्तम निर्णय पाएं।",
      chipPrivate: "100% सुरक्षित (लोकल)",
      chipMethod: "प्यू निर्णय मैट्रिक्स",
      chipFree: "मुफ़्त व असीमित",
      setupTitle: "1. दो विकल्पों को परिभाषित करें",
      optALabel: "विकल्प A",
      optBLabel: "विकल्प B",
      optAPlaceholder: "उदा.: नई नौकरी का प्रस्ताव स्वीकार करना",
      optBPlaceholder: "उदा.: वर्तमान पद पर बने रहना",
      criteriaTitle: "2. भारित मानदंड और रेटिंग",
      criteriaSub: "महत्व भार (1 से 5) सेट करें और प्रत्येक विकल्प को 1 से 10 अंक दें।",
      weightLabel: "भार:",
      crit1: "वित्तीय लाभ और करियर",
      crit2: "मानसिक शांति और कम तनाव",
      crit3: "दीर्घकालिक विकास व दृष्टि",
      crit4: "दैनिक ऊर्जा और जीवनशैली संतुलन",
      calcBtn: "भारित स्कोर की गणना करें",
      resetBtn: "रीसेट करें",
      verdictKicker: "विश्लेषणात्मक परिणाम",
      advantageA: "स्पष्ट बढ़त:",
      advantageB: "स्पष्ट बढ़त:",
      balanced: "कड़ा मुकाबला — मुख्य अंतर का पुनर्मूल्यांकन करें",
      diffLabel: "स्कोर अंतर:",
      copyBtn: "रिपोर्ट कॉपी करें",
      copied: "रिपोर्ट क्लिपबोर्ड पर कॉपी हो गई!",
      methodKicker: "कार्यप्रणाली",
      methodTitle: "तार्किक निर्णय लेने का वैज्ञानिक तरीका",
      m1Title: "1. प्राथमिकता भार",
      m1Body: "1 से 5 का भार यह सुनिश्चित करता है कि मुख्य प्राथमिकताएं हावी रहें।",
      m2Title: "2. निष्पक्ष मूल्यांकन",
      m2Body: "1 से 10 रेटिंग जटिल उलझनों को सरल अंकों में बदल देती है।",
      m3Title: "3. बिना पछतावे का फैसला",
      m3Body: "गणितीय परिणाम तात्कालिक डर और पूर्वाग्रहों को दूर रखता है।",
      relStressTitle: "तनाव जांच",
      relStressDesc: "फैसले की थकान? अपने मानसिक तनाव का स्तर मापें।",
      relFutureTitle: "भविष्य का स्व",
      relFutureDesc: "इस निर्णय को अपने 5-वर्षीय विजन से जोड़ें।",
      relEmotionTitle: "भावना योजनाकार",
      relEmotionDesc: "निर्णय पक्का करने से पहले अपनी घबराहट शांत करें।",
      tableCrit: "मानदंड",
      tableWeight: "भार",
      tableOptA: "विकल्प A",
      tableOptB: "विकल्प B"
    },
    id: {
      title: "Matriks Keputusan Dilema",
      kicker: "ALAT ANALISIS KEPUTUSAN",
      lead: "Atasi keraguan dan kelumpuhan analisis. Berikan bobot kriteria untuk menemukan pilihan yang paling optimal secara matematis.",
      chipPrivate: "100% Privat Lokal",
      chipMethod: "Matriks Pugh",
      chipFree: "Gratis Tanpa Batas",
      setupTitle: "1. Tentukan Dua Pilihan",
      optALabel: "Pilihan A",
      optBLabel: "Pilihan B",
      optAPlaceholder: "Contoh: Menerima tawaran kerja baru",
      optBPlaceholder: "Contoh: Bertahan di posisi saat ini",
      criteriaTitle: "2. Kriteria dan Bobot",
      criteriaSub: "Tentukan bobot (1–5) dan beri nilai tiap pilihan (1–10).",
      weightLabel: "Bobot:",
      crit1: "Keuangan & Karier",
      crit2: "Kesehatan Mental & Rendah Stres",
      crit3: "Pertumbuhan Jangka Panjang & Visi",
      crit4: "Energi Harian & Gaya Hidup",
      calcBtn: "Hitung Keputusan Terbobot",
      resetBtn: "Reset Default",
      verdictKicker: "HASIL ANALISIS KEPUTUSAN",
      advantageA: "Keunggulan Jelas untuk",
      advantageB: "Keunggulan Jelas untuk",
      balanced: "Hasil Seimbang — Evaluasi faktor paling krusial",
      diffLabel: "Selisih Skor:",
      copyBtn: "Salin Laporan",
      copied: "Laporan disalin ke papan klip!",
      methodKicker: "METODOLOGI",
      methodTitle: "Sains di Balik Pengambilan Keputusan Objektif",
      m1Title: "1. Pembobotan",
      m1Body: "Bobot 1–5 memastikan prioritas utama tidak terkalahkan hal sepele.",
      m2Title: "2. Penilaian Objektif",
      m2Body: "Skala 1–10 mengubah kecemasan menjadi data terukur.",
      m3Title: "3. Tanpa Penyesalan",
      m3Body: "Perhitungan matematis menyingkirkan bias rasa takut sesaat.",
      relStressTitle: "Cek Stres",
      relStressDesc: "Kelelahan memilih? Ukur beban stres mental Anda.",
      relFutureTitle: "Diri Masa Depan",
      relFutureDesc: "Selaraskan pilihan ini dengan visi hidup 5 tahun ke depan.",
      relEmotionTitle: "Perencana Emosi",
      relEmotionDesc: "Tenangkan kegelisahan sebelum memantapkan keputusan.",
      tableCrit: "Kriteria",
      tableWeight: "Bobot",
      tableOptA: "Pilihan A",
      tableOptB: "Pilihan B"
    },
    tr: {
      title: "İkilem Karar Matrisi",
      kicker: "ANALİTİK KARAR ARACI",
      lead: "Kararsızlığı aşın. İki seçeneği ağırlıklı kriterlere göre puanlayarak matematiksel olarak en doğru tercihi belirleyin.",
      chipPrivate: "%100 Yerel ve Gizli",
      chipMethod: "Pugh Karar Matrisi",
      chipFree: "Ücretsiz ve Sınırsız",
      setupTitle: "1. Seçenekleri Belirleyin",
      optALabel: "Seçenek A",
      optBLabel: "Seçenek B",
      optAPlaceholder: "Örn: Yeni iş teklifini kabul etmek",
      optBPlaceholder: "Örn: Mevcut görevde kalıp uzmanlaşmak",
      criteriaTitle: "2. Ağırlıklı Kriterler",
      criteriaSub: "Ağırlıkları (1-5) belirleyin ve her seçeneğe (1-10) puan verin.",
      weightLabel: "Ağırlık:",
      crit1: "Finansal Getiri ve Kariyer",
      crit2: "Ruh Sağlığı ve Düşük Stres",
      crit3: "Uzun Vadeli Gelişim ve Vizyon",
      crit4: "Günlük Enerji ve Yaşam Dengesi",
      calcBtn: "Ağırlıklı Kararı Hesapla",
      resetBtn: "Sıfırla",
      verdictKicker: "ANALİTİK KARAR SONUCU",
      advantageA: "Net Üstünlük:",
      advantageB: "Net Üstünlük:",
      balanced: "Çok Yakın — En kritik kriteri tekrar değerlendirin",
      diffLabel: "Puan Farkı:",
      copyBtn: "Raporu Kopyala",
      copied: "Rapor panoya kopyalandı!",
      methodKicker: "YÖNTEM",
      methodTitle: "Duygulardan Bağımsız Karar Alma Bilimi",
      m1Title: "1. Ağırlıklandırma",
      m1Body: "1-5 arası ağırlık, kritik önceliklerin belirleyici olmasını sağlar.",
      m2Title: "2. Objektif Puanlama",
      m2Body: "1-10 puanlama, karmaşık endişeleri net verilere dönüştürür.",
      m3Title: "3. Pişmanlığı Önleme",
      m3Body: "Matematiksel analiz, anlık korku ve önyargıları bertaraf eder.",
      relStressTitle: "Stres Testi",
      relStressDesc: "Karar yorgunluğu mu? Genel stres yükünüzü ölçün.",
      relFutureTitle: "Gelecekteki Benlik",
      relFutureDesc: "Bu tercihi uzun vadeli hedeflerinizle hizalayın.",
      relEmotionTitle: "Duygu Planlayıcı",
      relEmotionDesc: "Kararı uygulamadan önce zihninizi sakinleştirin.",
      tableCrit: "Kriter",
      tableWeight: "Ağırlık",
      tableOptA: "Seçenek A",
      tableOptB: "Seçenek B"
    }
  };

  let currentLang = 'en';

  function getLang() {
    const params = new URLSearchParams(window.location.search);
    const qLang = (params.get('lang') || '').toLowerCase();
    if (I18N[qLang]) return qLang;
    const navLang = (navigator.language || 'en').toLowerCase().split('-')[0];
    if (I18N[navLang]) return navLang;
    return 'en';
  }

  function t(key) {
    const dict = I18N[currentLang] || I18N.en;
    return dict[key] || I18N.en[key] || key;
  }

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    document.documentElement.lang = lang;
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (k) el.textContent = t(k);
    });

    // Update placeholders
    const optAInput = document.getElementById('optAName');
    const optBInput = document.getElementById('optBName');
    if (optAInput) optAInput.placeholder = t('optAPlaceholder');
    if (optBInput) optBInput.placeholder = t('optBPlaceholder');

    // Update links with lang
    document.querySelectorAll('.related a').forEach(a => {
      const base = a.getAttribute('data-base-href') || a.getAttribute('href').split('?')[0];
      a.href = `${base}?lang=${lang}&start=1&source=decision_matrix`;
    });
  }

  function initSliders() {
    for (let i = 1; i <= 4; i++) {
      const sliderA = document.getElementById(`scoreA_${i}`);
      const valA = document.getElementById(`valA_${i}`);
      const sliderB = document.getElementById(`scoreB_${i}`);
      const valB = document.getElementById(`valB_${i}`);

      if (sliderA && valA) {
        sliderA.addEventListener('input', () => {
          valA.textContent = sliderA.value;
        });
      }
      if (sliderB && valB) {
        sliderB.addEventListener('input', () => {
          valB.textContent = sliderB.value;
        });
      }
    }
  }

  function calculateVerdict() {
    const optAName = (document.getElementById('optAName')?.value || '').trim() || t('tableOptA');
    const optBName = (document.getElementById('optBName')?.value || '').trim() || t('tableOptB');

    let totalA = 0;
    let totalB = 0;
    let maxPossible = 0;

    const breakdown = [];

    for (let i = 1; i <= 4; i++) {
      const weightEl = document.getElementById(`weight_${i}`);
      const sliderA = document.getElementById(`scoreA_${i}`);
      const sliderB = document.getElementById(`scoreB_${i}`);

      const weight = parseInt(weightEl?.value || '3', 10);
      const scoreA = parseInt(sliderA?.value || '5', 10);
      const scoreB = parseInt(sliderB?.value || '5', 10);

      const weightedA = scoreA * weight;
      const weightedB = scoreB * weight;

      totalA += weightedA;
      totalB += weightedB;
      maxPossible += 10 * weight;

      breakdown.push({
        num: i,
        weight,
        scoreA,
        scoreB,
        weightedA,
        weightedB,
        name: t(`crit${i}`)
      });
    }

    // Display scores
    const scoreValA = document.getElementById('scoreValA');
    const scoreValB = document.getElementById('scoreValB');
    const scoreNameA = document.getElementById('scoreNameA');
    const scoreNameB = document.getElementById('scoreNameB');

    if (scoreValA) scoreValA.textContent = String(totalA);
    if (scoreValB) scoreValB.textContent = String(totalB);
    if (scoreNameA) scoreNameA.textContent = optAName;
    if (scoreNameB) scoreNameB.textContent = optBName;

    // Verdict headline
    const headline = document.getElementById('verdictHeadline');
    const sub = document.getElementById('verdictSub');
    const diff = Math.abs(totalA - totalB);
    const diffPct = maxPossible > 0 ? Math.round((diff / maxPossible) * 100) : 0;

    if (totalA > totalB && diff >= 8) {
      if (headline) headline.textContent = `🎯 ${t('advantageA')} ${optAName}`;
      if (sub) sub.textContent = `${t('diffLabel')} +${diff} pts (${diffPct}% margin)`;
    } else if (totalB > totalA && diff >= 8) {
      if (headline) headline.textContent = `🎯 ${t('advantageB')} ${optBName}`;
      if (sub) sub.textContent = `${t('diffLabel')} +${diff} pts (${diffPct}% margin)`;
    } else {
      if (headline) headline.textContent = `⚖️ ${t('balanced')}`;
      if (sub) sub.textContent = `${t('diffLabel')} ±${diff} pts — ${totalA} vs ${totalB}`;
    }

    // Build Table Body
    const tbody = document.getElementById('tableBody');
    if (tbody) {
      tbody.innerHTML = breakdown.map(item => `
        <tr>
          <td><strong>${item.name}</strong></td>
          <td class="num-col">${item.weight}x</td>
          <td class="num-col">${item.scoreA} (${item.weightedA})</td>
          <td class="num-col">${item.scoreB} (${item.weightedB})</td>
        </tr>
      `).join('');
    }

    // Reveal Result
    const resCard = document.getElementById('resultCard');
    if (resCard) {
      resCard.hidden = false;
      resCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Track technical calculation event (NO private text or scores)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'decision_matrix_calculate', {
        app_name: 'decision-matrix',
        lang: currentLang,
        has_clear_winner: diff >= 8
      });
    }
  }

  function copyReport() {
    const optAName = (document.getElementById('optAName')?.value || '').trim() || t('tableOptA');
    const optBName = (document.getElementById('optBName')?.value || '').trim() || t('tableOptB');
    const scoreValA = document.getElementById('scoreValA')?.textContent || '0';
    const scoreValB = document.getElementById('scoreValB')?.textContent || '0';
    const headline = document.getElementById('verdictHeadline')?.textContent || '';

    const text = [
      `📊 [${t('title')}]`,
      `• Option A: ${optAName} (${scoreValA} pts)`,
      `• Option B: ${optBName} (${scoreValB} pts)`,
      `• Verdict: ${headline}`,
      `🔗 https://dopabrain.com/portal/tools/decision-matrix.html?lang=${currentLang}`
    ].join('\n');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast());
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast();
      } catch (e) {}
      ta.remove();
    }
  }

  function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = t('copied');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function resetInputs() {
    const optA = document.getElementById('optAName');
    const optB = document.getElementById('optBName');
    if (optA) optA.value = '';
    if (optB) optB.value = '';

    for (let i = 1; i <= 4; i++) {
      const w = document.getElementById(`weight_${i}`);
      const sA = document.getElementById(`scoreA_${i}`);
      const sB = document.getElementById(`scoreB_${i}`);
      const vA = document.getElementById(`valA_${i}`);
      const vB = document.getElementById(`valB_${i}`);

      if (w) w.value = '3';
      if (sA) sA.value = '5';
      if (sB) sB.value = '5';
      if (vA) vA.textContent = '5';
      if (vB) vB.textContent = '5';
    }

    const resCard = document.getElementById('resultCard');
    if (resCard) resCard.hidden = true;
  }

  document.addEventListener('DOMContentLoaded', () => {
    currentLang = getLang();
    applyLanguage(currentLang);
    initSliders();

    const langSelect = document.getElementById('langSelect');
    langSelect?.addEventListener('change', (e) => {
      const next = e.target.value;
      const url = new URL(window.location.href);
      url.searchParams.set('lang', next);
      history.replaceState({}, '', url.toString());
      applyLanguage(next);
      const resCard = document.getElementById('resultCard');
      if (resCard && !resCard.hidden) {
        calculateVerdict();
      }
    });

    document.getElementById('calcBtn')?.addEventListener('click', calculateVerdict);
    document.getElementById('resetBtn')?.addEventListener('click', resetInputs);
    document.getElementById('copyBtn')?.addEventListener('click', copyReport);
  });

})();
