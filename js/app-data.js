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
        url: 'https://swp1234.github.io/quiz-app/',
        isNew: false,
        isPopular: true
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
        url: 'https://swp1234.github.io/shopping-calc/',
        isNew: false,
        isPopular: true
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
        url: 'https://swp1234.github.io/detox-timer/',
        isNew: false,
        isPopular: false
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
        url: 'https://swp1234.github.io/dream-fortune/',
        isNew: false,
        isPopular: true
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
        url: 'https://swp1234.github.io/affirmation/',
        isNew: false,
        isPopular: false
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
        url: 'https://swp1234.github.io/lottery/',
        isNew: false,
        isPopular: true
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
        url: 'https://swp1234.github.io/dday-counter/',
        isNew: false,
        isPopular: false
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
        url: 'https://swp1234.github.io/mbti-tips/',
        isNew: false,
        isPopular: true
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
        url: 'https://swp1234.github.io/white-noise/',
        isNew: false,
        isPopular: false
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
        url: 'https://swp1234.github.io/dev-quiz/',
        isNew: false,
        isPopular: false
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
        url: 'https://swp1234.github.io/tax-refund-preview/',
        isNew: true,
        isPopular: false
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
        url: 'https://swp1234.github.io/unit-converter/',
        isNew: true,
        isPopular: false
    }
];

const CATEGORIES = {
    all: { name: '전체', icon: '🏠' },
    quiz: { name: '퀴즈/게임', icon: '🎮' },
    fortune: { name: '운세/테스트', icon: '🔮' },
    tool: { name: '계산기/도구', icon: '🧮' },
    life: { name: '라이프', icon: '🧘' }
};
