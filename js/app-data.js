// App data for the portal
// URLs can be updated to GitHub Pages URLs when deployed
const APP_DATA = [
    {
        id: 'quiz-app',
        name: '지식 퀴즈',
        shortDesc: '일반상식 테스트',
        description: '재미있는 지식 퀴즈로 상식을 쌓아보세요! 100개의 다양한 문제에 도전하세요.',
        icon: '🧠',
        color: '#667eea',
        category: 'quiz',
        tags: ['퀴즈', '상식', '교육', '게임'],
        url: 'https://dopabrain.com/quiz-app/',
        isNew: false,
        isPopular: true,
        i18n: {
            en: { name: 'Knowledge Quiz', shortDesc: 'General knowledge test' },
            zh: { name: '知识问答', shortDesc: '常识测试' },
            hi: { name: 'ज्ञान क्विज़', shortDesc: 'सामान्य ज्ञान परीक्षा' },
            ru: { name: 'Викторина', shortDesc: 'Тест на общие знания' }
        }
    },
    {
        id: 'shopping-calc',
        name: '글로벌 쇼핑 계산기',
        shortDesc: '환율/관세/팁 계산',
        description: '해외직구와 여행을 위한 환율, 관세, 팁 계산기. 실시간 환율 API 연동.',
        icon: '🛒',
        color: '#f39c12',
        category: 'tool',
        tags: ['환율', '계산기', '관세', '해외직구', '여행'],
        url: 'https://dopabrain.com/shopping-calc/',
        isNew: false,
        isPopular: true,
        i18n: {
            en: { name: 'Shopping Calculator', shortDesc: 'Currency / duty / tip calc' },
            zh: { name: '全球购物计算器', shortDesc: '汇率/关税/小费计算' },
            hi: { name: 'शॉपिंग कैलकुलेटर', shortDesc: 'मुद्रा/शुल्क/टिप गणना' },
            ru: { name: 'Калькулятор покупок', shortDesc: 'Валюта / пошлина / чаевые' }
        }
    },
    {
        id: 'detox-timer',
        name: '디지털 디톡스 타이머',
        shortDesc: '스마트폰 사용 관리',
        description: '스마트폰 사용 시간을 줄이고 집중력을 높이세요. 통계와 배지 시스템.',
        icon: '⏰',
        color: '#00b894',
        category: 'life',
        tags: ['타이머', '디톡스', '집중', '생산성'],
        url: 'https://dopabrain.com/detox-timer/',
        isNew: false,
        isPopular: false,
        i18n: {
            en: { name: 'Digital Detox Timer', shortDesc: 'Screen time manager' },
            zh: { name: '数字排毒计时器', shortDesc: '手机使用管理' },
            hi: { name: 'डिजिटल डिटॉक्स टाइमर', shortDesc: 'स्क्रीन टाइम प्रबंधन' },
            ru: { name: 'Цифровой детокс', shortDesc: 'Управление экранным временем' }
        }
    },
    {
        id: 'dream-fortune',
        name: '꿈해몽 & 운세',
        shortDesc: 'AI 꿈 해석 & 오늘의 운세',
        description: 'AI 꿈해몽과 오늘의 운세를 확인하세요. 별자리, 타로, 꿈 해석까지!',
        icon: '🔮',
        color: '#9b59b6',
        category: 'fortune',
        tags: ['운세', '꿈해몽', '타로', '별자리'],
        url: 'https://dopabrain.com/dream-fortune/',
        isNew: false,
        isPopular: true,
        i18n: {
            en: { name: 'Dream & Fortune', shortDesc: 'AI dream reading & horoscope' },
            zh: { name: '解梦与运势', shortDesc: 'AI解梦 & 今日运势' },
            hi: { name: 'सपने और भाग्य', shortDesc: 'AI स्वप्न व्याख्या और राशिफल' },
            ru: { name: 'Сны и гороскоп', shortDesc: 'AI толкование снов и гороскоп' }
        }
    },
    {
        id: 'affirmation',
        name: '일일 긍정 확언 카드',
        shortDesc: '매일 새로운 긍정 메시지',
        description: '매일 새로운 긍정 확언으로 하루를 시작하세요. 자존감, 동기부여, 감사.',
        icon: '💖',
        color: '#e91e63',
        category: 'life',
        tags: ['긍정', '확언', '동기부여', '자존감', '명언'],
        url: 'https://dopabrain.com/affirmation/',
        isNew: false,
        isPopular: false,
        i18n: {
            en: { name: 'Daily Affirmation', shortDesc: 'Positive messages every day' },
            zh: { name: '每日正能量卡片', shortDesc: '每天新的正面信息' },
            hi: { name: 'दैनिक सकारात्मक संदेश', shortDesc: 'रोज़ नए प्रेरक संदेश' },
            ru: { name: 'Ежедневные аффирмации', shortDesc: 'Позитивные послания каждый день' }
        }
    },
    {
        id: 'lottery',
        name: '행운의 번호 생성기',
        shortDesc: '로또/연금복권 번호',
        description: '로또 6/45, 연금복권 행운 번호 생성기. 번호 통계 분석, 반자동 모드.',
        icon: '🎰',
        color: '#e74c3c',
        category: 'fortune',
        tags: ['로또', '복권', '번호', '행운', '추첨'],
        url: 'https://dopabrain.com/lottery/',
        isNew: false,
        isPopular: true,
        i18n: {
            en: { name: 'Lucky Number Generator', shortDesc: 'Lottery number picker' },
            zh: { name: '幸运号码生成器', shortDesc: '彩票号码生成' },
            hi: { name: 'लकी नंबर जनरेटर', shortDesc: 'लॉटरी नंबर चयन' },
            ru: { name: 'Генератор чисел', shortDesc: 'Выбор номеров лотереи' }
        }
    },
    {
        id: 'dday-counter',
        name: 'D-Day 카운터',
        shortDesc: '중요한 날짜 카운트다운',
        description: '중요한 날짜를 D-Day로 관리하세요. 생일, 기념일, 시험일 카운트다운.',
        icon: '📅',
        color: '#3498db',
        category: 'tool',
        tags: ['D-Day', '카운트다운', '기념일', '일정'],
        url: 'https://dopabrain.com/dday-counter/',
        isNew: false,
        isPopular: false,
        i18n: {
            en: { name: 'D-Day Counter', shortDesc: 'Date countdown tracker' },
            zh: { name: 'D-Day 倒计时', shortDesc: '重要日期倒计时' },
            hi: { name: 'D-Day काउंटर', shortDesc: 'तारीख काउंटडाउन' },
            ru: { name: 'Счётчик D-Day', shortDesc: 'Обратный отсчёт до даты' }
        }
    },
    {
        id: 'mbti-tips',
        name: 'MBTI 궁합 & 팁',
        shortDesc: 'MBTI 유형별 분석',
        description: 'MBTI 유형별 궁합, 성격 분석, 연애/직장 팁을 확인하세요.',
        icon: '🧩',
        color: '#1abc9c',
        category: 'fortune',
        tags: ['MBTI', '성격', '궁합', '심리테스트'],
        url: 'https://dopabrain.com/mbti-tips/',
        isNew: false,
        isPopular: true,
        i18n: {
            en: { name: 'MBTI Compatibility', shortDesc: 'MBTI type analysis & tips' },
            zh: { name: 'MBTI 配对与建议', shortDesc: 'MBTI类型分析' },
            hi: { name: 'MBTI अनुकूलता', shortDesc: 'MBTI प्रकार विश्लेषण' },
            ru: { name: 'MBTI совместимость', shortDesc: 'Анализ типов MBTI' }
        }
    },
    {
        id: 'white-noise',
        name: '백색소음 플레이어',
        shortDesc: '집중/수면용 배경음',
        description: '집중, 수면, 명상을 위한 백색소음 & 자연소리 플레이어.',
        icon: '🎵',
        color: '#2c3e50',
        category: 'life',
        tags: ['백색소음', '수면', '집중', '명상', 'ASMR'],
        url: 'https://dopabrain.com/white-noise/',
        isNew: false,
        isPopular: false,
        i18n: {
            en: { name: 'White Noise Player', shortDesc: 'Focus & sleep sounds' },
            zh: { name: '白噪音播放器', shortDesc: '专注/睡眠背景音' },
            hi: { name: 'व्हाइट नॉइज़ प्लेयर', shortDesc: 'फोकस और नींद की आवाज़ें' },
            ru: { name: 'Белый шум', shortDesc: 'Звуки для сна и фокуса' }
        }
    },
    {
        id: 'dev-quiz',
        name: '개발자 퀴즈',
        shortDesc: '코딩/IT 전문 퀴즈',
        description: '개발자를 위한 코딩/IT 퀴즈. JavaScript, Python, 네트워크 등.',
        icon: '💻',
        color: '#27ae60',
        category: 'quiz',
        tags: ['개발자', '코딩', 'IT', '프로그래밍', '퀴즈'],
        url: 'https://dopabrain.com/dev-quiz/',
        isNew: false,
        isPopular: false,
        i18n: {
            en: { name: 'Developer Quiz', shortDesc: 'Coding & IT quiz' },
            zh: { name: '开发者测验', shortDesc: '编程/IT专业测验' },
            hi: { name: 'डेवलपर क्विज़', shortDesc: 'कोडिंग और IT क्विज़' },
            ru: { name: 'Квиз разработчика', shortDesc: 'Тест по программированию' }
        }
    },
    {
        id: 'tax-refund-preview',
        name: '연말정산 미리보기',
        shortDesc: '환급액 시뮬레이션',
        description: '연말정산 예상 환급액을 미리 계산해보세요. 소득공제, 세액공제 반영.',
        icon: '💰',
        color: '#3742fa',
        category: 'tool',
        tags: ['연말정산', '환급', '세금', '계산기'],
        url: 'https://dopabrain.com/tax-refund-preview/',
        isNew: true,
        isPopular: false,
        i18n: {
            en: { name: 'Tax Refund Calculator', shortDesc: 'Estimate your tax refund' },
            zh: { name: '退税计算器', shortDesc: '退税金额预估' },
            hi: { name: 'टैक्स रिफंड कैलकुलेटर', shortDesc: 'टैक्स रिफंड अनुमान' },
            ru: { name: 'Калькулятор налогов', shortDesc: 'Расчёт возврата налогов' }
        }
    },
    {
        id: 'unit-converter',
        name: '단위 변환기 Pro',
        shortDesc: '평수, 무게, 온도 변환',
        description: '평수, 무게, 온도, 부피 등 다양한 단위를 실시간으로 변환합니다.',
        icon: '📐',
        color: '#2ed573',
        category: 'tool',
        tags: ['단위', '변환', '평수', '온도', '무게'],
        url: 'https://dopabrain.com/unit-converter/',
        isNew: true,
        isPopular: false,
        i18n: {
            en: { name: 'Unit Converter Pro', shortDesc: 'Length, weight, temp converter' },
            zh: { name: '单位转换器 Pro', shortDesc: '长度/重量/温度转换' },
            hi: { name: 'यूनिट कन्वर्टर Pro', shortDesc: 'लंबाई, वज़न, तापमान रूपांतरण' },
            ru: { name: 'Конвертер величин', shortDesc: 'Длина, вес, температура' }
        }
    },
    {
        id: 'sky-runner',
        name: 'Sky Runner',
        shortDesc: '우주 비행 아케이드 게임',
        description: '우주선을 조종해 장애물을 피하세요! 원탭 조작의 중독성 캐주얼 아케이드 게임.',
        icon: '🚀',
        color: '#5f27cd',
        category: 'quiz',
        tags: ['게임', '아케이드', '우주', '캐주얼', 'Flappy'],
        url: 'https://dopabrain.com/sky-runner/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'Sky Runner', shortDesc: 'Space flight arcade game' },
            zh: { name: 'Sky Runner', shortDesc: '太空飞行街机游戏' },
            hi: { name: 'Sky Runner', shortDesc: 'स्पेस फ्लाइट आर्केड गेम' },
            ru: { name: 'Sky Runner', shortDesc: 'Космическая аркада' }
        }
    },
    {
        id: 'emotion-temp',
        name: '감정 온도계 테스트',
        shortDesc: '나의 감정 온도는 몇 도?',
        description: '10가지 질문으로 알아보는 나의 감정 온도! 16가지 유형 중 당신은? 결과 이미지 저장 & 공유.',
        icon: '🌡️',
        color: '#e07a5f',
        category: 'fortune',
        tags: ['심리테스트', '감정', '성격', '바이럴', 'HSP', '감정온도'],
        url: 'https://dopabrain.com/emotion-temp/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'Emotion Temperature', shortDesc: "What's your emotion temp?" },
            zh: { name: '情绪温度计测试', shortDesc: '你的情绪温度是几度？' },
            hi: { name: 'इमोशन टेम्परेचर', shortDesc: 'आपका भावना तापमान क्या है?' },
            ru: { name: 'Температура эмоций', shortDesc: 'Какова ваша эмоциональная t°?' }
        }
    },
    {
        id: 'mbti-love',
        name: 'MBTI 연애 궁합 테스트',
        shortDesc: '나의 연애 스타일은? 💕',
        description: '12가지 질문으로 알아보는 나의 MBTI 연애 스타일! 16가지 유형과 256가지 궁합표. 나와 찰떡궁합인 유형은?',
        icon: '💕',
        color: '#e74c3c',
        category: 'fortune',
        tags: ['MBTI', '연애', '궁합', '심리테스트', '연애스타일'],
        url: 'https://dopabrain.com/mbti-love/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'MBTI Love Match', shortDesc: "What's your love style? 💕" },
            zh: { name: 'MBTI 恋爱配对', shortDesc: '你的恋爱风格是？💕' },
            hi: { name: 'MBTI लव मैच', shortDesc: 'आपकी प्रेम शैली क्या है? 💕' },
            ru: { name: 'MBTI совместимость', shortDesc: 'Какой ваш стиль любви? 💕' }
        }
    },
    {
        id: 'hsp-test',
        name: 'HSP 민감성 테스트',
        shortDesc: '나는 고감수성자일까?',
        description: '20가지 질문으로 알아보는 HSP 민감도! 5가지 유형과 감각별 분석. 2026 메타센싱 트렌드.',
        icon: '🧠',
        color: '#7c3aed',
        category: 'fortune',
        tags: ['HSP', '민감성', '심리테스트', '메타센싱', '고감수성자', '감정'],
        url: 'https://dopabrain.com/hsp-test/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'HSP Sensitivity Test', shortDesc: 'Are you highly sensitive?' },
            zh: { name: 'HSP 敏感度测试', shortDesc: '你是高敏感人群吗？' },
            hi: { name: 'HSP संवेदनशीलता परीक्षण', shortDesc: 'क्या आप अति संवेदनशील हैं?' },
            ru: { name: 'Тест HSP', shortDesc: 'Вы высокочувствительный человек?' }
        }
    },
    {
        id: 'love-frequency',
        name: '사랑 주파수 테스트',
        shortDesc: '나의 사랑은 몇 Hz?',
        description: '솔페지오 주파수 기반 사랑 유형 테스트! 10문항으로 나의 사랑 주파수를 찾고 실제 주파수 음악도 들어보세요.',
        icon: '💕',
        color: '#e91e63',
        category: 'fortune',
        tags: ['사랑', '주파수', '연애', '심리테스트', '솔페지오', '528Hz', '궁합'],
        url: 'https://dopabrain.com/love-frequency/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'Love Frequency Test', shortDesc: 'What Hz is your love?' },
            zh: { name: '爱情频率测试', shortDesc: '你的爱情是几Hz？' },
            hi: { name: 'लव फ्रीक्वेंसी टेस्ट', shortDesc: 'आपके प्यार की फ्रीक्वेंसी?' },
            ru: { name: 'Частота любви', shortDesc: 'На какой частоте ваша любовь?' }
        }
    },
    {
        id: 'stack-tower',
        name: 'Stack Tower',
        shortDesc: '타이밍 블록 쌓기 게임',
        description: '완벽한 타이밍으로 블록을 쌓아 하늘 끝까지! 5가지 테마와 20개 칭호에 도전하세요.',
        icon: '🏗️',
        color: '#3498db',
        category: 'quiz',
        tags: ['게임', '아케이드', '타이밍', '블록', '캐주얼', '타워'],
        url: 'https://dopabrain.com/stack-tower/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'Stack Tower', shortDesc: 'Timing block stacking game' },
            zh: { name: 'Stack Tower', shortDesc: '计时堆叠方块游戏' },
            hi: { name: 'Stack Tower', shortDesc: 'टाइमिंग ब्लॉक स्टैकिंग गेम' },
            ru: { name: 'Stack Tower', shortDesc: 'Игра с укладкой блоков' }
        }
    },
    {
        id: 'kpop-position',
        name: 'K-POP 포지션 테스트',
        shortDesc: '나의 아이돌 포지션은?',
        description: '12가지 질문으로 알아보는 나의 K-POP 포지션! 메인보컬, 리더, 래퍼, 댄서, 비주얼, 막내, 올라운더 중 당신은?',
        icon: '🎤',
        color: '#ff2d78',
        category: 'fortune',
        tags: ['KPOP', '포지션', '아이돌', '심리테스트', 'BTS', 'BLACKPINK'],
        url: 'https://dopabrain.com/kpop-position/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'K-POP Position Test', shortDesc: "What's your idol position?" },
            zh: { name: 'K-POP 位置测试', shortDesc: '你的偶像位置是？' },
            hi: { name: 'K-POP पोजीशन टेस्ट', shortDesc: 'आपकी आइडल पोजीशन क्या है?' },
            ru: { name: 'K-POP позиция', shortDesc: 'Какая ваша позиция в группе?' }
        }
    },
    {
        id: 'emoji-merge',
        name: '이모지 머지',
        shortDesc: '이모지 진화 퍼즐 게임',
        description: '같은 이모지를 합쳐 진화시키세요! 🥚→🐣→🐥→🦅→🐉→👑 알에서 용까지! 씨앗→세계수, 물방울→은하 4가지 진화 체인.',
        icon: '🧬',
        color: '#f4a261',
        category: 'quiz',
        tags: ['이모지', '머지', '진화', '퍼즐', '게임', '2048', '캐주얼'],
        url: 'https://dopabrain.com/emoji-merge/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'Emoji Merge', shortDesc: 'Emoji evolution puzzle game' },
            zh: { name: 'Emoji 合并', shortDesc: 'Emoji 进化益智游戏' },
            hi: { name: 'Emoji Merge', shortDesc: 'इमोजी इवोल्यूशन पज़ल गेम' },
            ru: { name: 'Emoji Merge', shortDesc: 'Головоломка с эмодзи' }
        }
    },
    {
        id: 'zigzag-runner',
        name: 'Zigzag Runner',
        shortDesc: '방향 전환 아케이드 게임',
        description: '탭 한 번으로 방향 전환! 끝없는 지그재그 길 위에서 코인을 모으며 달리세요. 5가지 테마와 20개 칭호.',
        icon: '🏃',
        color: '#ff6348',
        category: 'quiz',
        tags: ['게임', '아케이드', '지그재그', '러너', '캐주얼', '원탭'],
        url: 'https://dopabrain.com/zigzag-runner/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'Zigzag Runner', shortDesc: 'Direction-switching arcade' },
            zh: { name: 'Zigzag Runner', shortDesc: '方向切换街机游戏' },
            hi: { name: 'Zigzag Runner', shortDesc: 'दिशा बदलने वाला आर्केड गेम' },
            ru: { name: 'Zigzag Runner', shortDesc: 'Аркада со сменой направления' }
        }
    },
    {
        id: 'past-life',
        name: '전생 직업 테스트',
        shortDesc: '나의 전생은 무엇이었을까?',
        description: '10문항으로 알아보는 나의 전생 직업! 기사단장, 해적 선장, 르네상스 화가... 8가지 전생 유형과 궁합까지.',
        icon: '🗡️',
        color: '#C9A96E',
        category: 'fortune',
        tags: ['전생', '심리테스트', '바이럴', '궁합', '전생직업'],
        url: 'https://dopabrain.com/past-life/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'Past Life Job Test', shortDesc: 'What was your past life?' },
            zh: { name: '前世职业测试', shortDesc: '你的前世是什么？' },
            hi: { name: 'पूर्वजन्म परीक्षण', shortDesc: 'आपका पूर्वजन्म क्या था?' },
            ru: { name: 'Тест прошлой жизни', shortDesc: 'Кем вы были в прошлой жизни?' }
        }
    },
    {
        id: 'idle-clicker',
        name: '던전 클리커',
        shortDesc: '방치형 RPG 던전 탐험 게임',
        description: '던전에서 몬스터를 무찌르고 강력한 장비를 장착하세요! 나무 검에서 영웅의 검까지 10단계 장비 수집.',
        icon: '⚔️',
        color: '#8b5cf6',
        category: 'quiz',
        tags: ['게임', '클리커', '방치형', 'RPG', '던전', '캐주얼'],
        url: 'https://dopabrain.com/idle-clicker/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'Dungeon Clicker', shortDesc: 'Idle RPG dungeon game' },
            zh: { name: '地牢点击者', shortDesc: '放置型RPG地牢游戏' },
            hi: { name: 'डंजन क्लिकर', shortDesc: 'आइडल RPG डंजन गेम' },
            ru: { name: 'Данжен Кликер', shortDesc: 'Idle RPG подземелье' }
        }
    },
    {
        id: 'valentine',
        name: '밸런타인 궁합 테스트',
        shortDesc: '우리의 궁합은 몇 %?',
        description: '이름+생일+5가지 질문으로 알아보는 밸런타인 궁합! 이름 획수 궁합, 별자리 궁합, 사랑 유형까지 완벽 분석.',
        icon: '💕',
        color: '#ff4b91',
        category: 'fortune',
        tags: ['밸런타인', '궁합', '커플', '연애', '사랑', '심리테스트'],
        url: 'https://dopabrain.com/valentine/',
        isNew: true,
        isPopular: true,
        i18n: {
            en: { name: 'Valentine Match Test', shortDesc: 'How compatible are you? %' },
            zh: { name: '情人节配对测试', shortDesc: '你们的匹配度是几%？' },
            hi: { name: 'वैलेंटाइन मैच टेस्ट', shortDesc: 'आपकी जोड़ी कितनी परफेक्ट? %' },
            ru: { name: 'Тест совместимости', shortDesc: 'Какова ваша совместимость? %' }
        }
    }
];

const CATEGORIES = {
    all: { name: '전체', icon: '🏠', i18n: { en: 'All', zh: '全部', hi: 'सभी', ru: 'Все' } },
    quiz: { name: '퀴즈/게임', icon: '🎮', i18n: { en: 'Games', zh: '游戏', hi: 'गेम्स', ru: 'Игры' } },
    fortune: { name: '운세/테스트', icon: '🔮', i18n: { en: 'Tests', zh: '测试', hi: 'टेस्ट', ru: 'Тесты' } },
    tool: { name: '계산기/도구', icon: '🧮', i18n: { en: 'Tools', zh: '工具', hi: 'टूल्स', ru: 'Инструменты' } },
    life: { name: '라이프', icon: '🧘', i18n: { en: 'Life', zh: '生活', hi: 'लाइफ', ru: 'Жизнь' } }
};

// Helper: get localized app name/desc
function getAppName(app, lang) {
    if (lang && lang !== 'ko' && app.i18n && app.i18n[lang]) return app.i18n[lang].name || app.name;
    return app.name;
}
function getAppDesc(app, lang) {
    if (lang && lang !== 'ko' && app.i18n && app.i18n[lang]) return app.i18n[lang].shortDesc || app.shortDesc;
    return app.shortDesc;
}
function getCategoryName(catKey, lang) {
    var cat = CATEGORIES[catKey];
    if (!cat) return catKey;
    if (lang && lang !== 'ko' && cat.i18n && cat.i18n[lang]) return cat.i18n[lang];
    return cat.name;
}
