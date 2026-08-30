(() => {
  'use strict';

  const LANGS = ['ko','en','zh','hi','ru','ja','es','pt','id','tr','de','fr'];
  const en = {
    skip:'Skip to generator',back:'← All tools',language:'Language',eyebrow:'PALWORLD SERVER CONTROL DESK · DOCS 1.0.3',
    title:'Palworld Server Settings Generator',lead:'Build an INI safely, compare play styles, and keep the commands and recovery steps you actually need in one place.',
    chipGenerator:'INI generator',chipParameters:'Parameter finder',chipCommands:'Admin commands',chipOps:'Backup & mods',
    verified:'Verified against official server documentation',earlyTitle:'Before changing a live world',
    earlyBody:'Palworld is actively updated. Stop the server, back up the world, change one group of settings at a time, and keep your previous INI.',
    step1:'STEP 1',generatorTitle:'Choose a server profile',presetLead:'Start with the closest profile. You can copy it immediately, then tune individual values only if needed.',reset:'Reset',step2:'STEP 2',outputTitle:'Copy your starter settings',copyIni:'Copy starter INI',
    activeFile:'Active file:',generatorNote:'This generator covers common settings, not every reserved or deprecated key. Merge the generated values into the OptionSettings line of your active file.',
    optional:'OPTIONAL',settingsTitle:'Tune individual values',settingsLead:'Every change updates the starter block above. Back up the active file before replacing values.',
    pvpRequirement:'PvP requires all three official flags. This preset enables them together; PvP remains an unsupported trial feature.',
    ad:'Advertisement',reference:'REFERENCE',parametersTitle:'Official parameter finder',parametersLead:'Search the key name or meaning. Performance warnings are highlighted.',
    searchPlaceholder:'Search: backup, PvP, capture, voice…',allCategories:'All categories',results:'{count} parameters',
    commandsTitle:'Admin command desk',commandsLead:'Set AdminPassword first, then authenticate in chat. Click any command to copy it.',
    runbook:'RUNBOOK',operationsTitle:'Setup, backup, mods and recovery',setupTitle:'First-time setup',
    setup1:'Install Palworld Dedicated Server through Steam or SteamCMD.',setup2:'Start it once so the configuration directories are created.',
    setup3:'Copy DefaultPalWorldSettings.ini to the active WindowsServer or LinuxServer folder.',setup4:'Stop the server, edit the active file, then restart and verify.',
    backupTitle:'Backup before every change',backup1:'Use /Save and wait for completion before stopping.',backup2:'Copy the Saved directory to a dated folder outside the server directory.',
    backup3:'Enable bIsUseBackupSaveData=True for automatic rotating backups.',backup4:'Keep at least one known-good INI together with the save.',
    modsTitle:'Server mod checklist',mods1:'Official docs currently limit server-side mods to Windows dedicated servers.',mods2:'Confirm Info.json contains a server-compatible install rule and all dependencies.',
    mods3:'Back up first: incompatible mods can cause crashes or save corruption.',mods4:'Restart to deploy changes; use -NoMods to isolate a mod-related failure.',
    troubleTitle:'Fast troubleshooting order',trouble1:'Validate server files and confirm the active INI path.',trouble2:'Restore the last known-good INI and remove outdated mods.',
    trouble3:'Check ports, firewall, PublicIP/PublicPort and allowed platforms.',trouble4:'Change one setting group at a time and inspect logs after each restart.',
    sourcesTitle:'Official sources and scope',sourcesBody:"Setting names and operational notes are based on Pocketpair's official Palworld Server Guide version 1.0.3. This independent tool is not affiliated with Pocketpair. Game updates may change defaults or behavior.",
    sourceConfig:'Official configuration parameters ↗',sourceCommands:'Official commands ↗',sourcePvp:'Official PvP requirements ↗',sourceMods:'Official server mod guide ↗',
    copied:'Copied',copy:'Copy',performance:'May affect performance',none:'No matching parameters',
    casual:'Casual',casualDesc:'Faster progress',balanced:'Balanced',balancedDesc:'Close to default',hard:'Hard survival',hardDesc:'Slower and riskier',
    performancePreset:'Performance',performanceDesc:'Lighter server load',pvp:'PvP trial',pvpDesc:'All 3 required flags',
    management:'Management',feature:'Features',balance:'Game balance',performanceCat:'Performance'
  };
  const ko = {
    skip:'설정 생성기로 이동',back:'← 모든 도구',language:'언어',eyebrow:'팰월드 서버 컨트롤 데스크 · 공식 문서 1.0.3',
    title:'팰월드 서버 설정 생성기',lead:'플레이 방식별 설정을 비교하고, 안전하게 INI를 만들며, 꼭 필요한 명령어와 복구 절차를 한곳에서 확인하세요.',
    chipGenerator:'INI 생성기',chipParameters:'파라미터 검색',chipCommands:'관리자 명령어',chipOps:'백업·모드',
    verified:'공식 서버 문서 기준 검증',earlyTitle:'운영 중인 월드를 변경하기 전에',
    earlyBody:'팰월드는 계속 업데이트됩니다. 서버를 멈추고 월드를 백업한 뒤 설정 묶음을 하나씩 바꾸고, 이전 INI를 보관하세요.',
    step1:'1단계',generatorTitle:'서버 프로필 선택',presetLead:'가장 가까운 프로필부터 고르세요. 바로 복사한 뒤 필요한 값만 조정할 수 있습니다.',reset:'초기화',step2:'2단계',outputTitle:'시작 설정 복사',copyIni:'시작 INI 복사',
    activeFile:'실제 적용 파일:',generatorNote:'이 생성기는 자주 쓰는 설정을 다룹니다. 예약·폐기된 키까지 모두 포함하지는 않습니다. 생성값을 실제 파일의 OptionSettings 줄에 병합하세요.',
    optional:'선택 사항',settingsTitle:'개별 값 조정',settingsLead:'값을 바꿀 때마다 위 시작 설정이 갱신됩니다. 실제 파일의 값을 교체하기 전에 반드시 백업하세요.',
    pvpRequirement:'PvP에는 공식 플래그 3개가 모두 필요합니다. 이 프리셋은 세 플래그를 함께 켜며, PvP는 아직 지원 대상이 아닌 시험 기능입니다.',
    ad:'광고',reference:'빠른 참조',parametersTitle:'공식 파라미터 검색기',parametersLead:'키 이름이나 의미로 검색하세요. 서버 성능에 영향을 줄 수 있는 값은 따로 표시됩니다.',
    searchPlaceholder:'검색: 백업, PvP, 포획, 음성…',allCategories:'모든 분류',results:'파라미터 {count}개',
    commandsTitle:'관리자 명령어 데스크',commandsLead:'먼저 AdminPassword를 설정하고 채팅에서 인증하세요. 명령어를 누르면 복사됩니다.',
    runbook:'운영 절차',operationsTitle:'설치·백업·모드·복구',setupTitle:'최초 설치 순서',
    setup1:'Steam 또는 SteamCMD로 Palworld Dedicated Server를 설치합니다.',setup2:'한 번 실행해 설정 폴더가 생성되게 합니다.',
    setup3:'DefaultPalWorldSettings.ini를 WindowsServer 또는 LinuxServer의 실제 설정 폴더로 복사합니다.',setup4:'서버를 멈추고 실제 파일을 수정한 뒤 재시작해 확인합니다.',
    backupTitle:'변경 전 백업',backup1:'중지 전 /Save를 실행하고 완료될 때까지 기다립니다.',backup2:'Saved 폴더를 서버 밖의 날짜별 폴더로 복사합니다.',
    backup3:'bIsUseBackupSaveData=True로 자동 순환 백업을 켭니다.',backup4:'정상 작동이 확인된 INI를 세이브와 함께 한 벌 이상 보관합니다.',
    modsTitle:'서버 모드 체크리스트',mods1:'공식 문서상 서버 측 모드는 현재 Windows 전용 서버에서만 지원됩니다.',mods2:'Info.json의 서버 호환 설치 규칙과 모든 의존성을 확인합니다.',
    mods3:'호환되지 않는 모드는 충돌이나 세이브 손상을 일으킬 수 있으므로 먼저 백업합니다.',mods4:'재시작해야 변경이 배포됩니다. -NoMods로 모드 관련 장애를 분리할 수 있습니다.',
    troubleTitle:'빠른 문제 해결 순서',trouble1:'서버 파일을 검증하고 실제 INI 경로를 확인합니다.',trouble2:'마지막 정상 INI를 복원하고 오래된 모드를 제거합니다.',
    trouble3:'포트, 방화벽, PublicIP/PublicPort, 허용 플랫폼을 확인합니다.',trouble4:'설정 묶음을 하나씩 바꾸고 재시작마다 로그를 확인합니다.',
    sourcesTitle:'공식 출처와 범위',sourcesBody:'설정 이름과 운영 정보는 Pocketpair 공식 Palworld Server Guide 1.0.3을 기준으로 했습니다. 이 독립 도구는 Pocketpair와 제휴하지 않았으며 업데이트에 따라 기본값이나 동작이 달라질 수 있습니다.',
    sourceConfig:'공식 설정 파라미터 ↗',sourceCommands:'공식 명령어 ↗',sourcePvp:'공식 PvP 요구사항 ↗',sourceMods:'공식 서버 모드 가이드 ↗',
    copied:'복사됨',copy:'복사',performance:'성능에 영향을 줄 수 있음',none:'일치하는 파라미터가 없습니다',
    casual:'캐주얼',casualDesc:'빠른 성장',balanced:'균형',balancedDesc:'기본값 중심',hard:'하드 생존',hardDesc:'느리고 위험하게',
    performancePreset:'성능 우선',performanceDesc:'서버 부하 감소',pvp:'PvP 시험',pvpDesc:'필수 플래그 3개',
    management:'서버 관리',feature:'기능',balance:'게임 밸런스',performanceCat:'성능'
  };
  const small = {
    zh:{title:'幻兽帕鲁服务器设置生成器',lead:'安全生成 INI，比较玩法预设，并快速查找命令、备份和模组信息。',copyIni:'复制 INI',parametersTitle:'官方参数搜索',commandsTitle:'管理员命令',operationsTitle:'设置、备份、模组与恢复',allCategories:'全部分类',copied:'已复制'},
    hi:{title:'Palworld सर्वर सेटिंग जेनरेटर',lead:'INI सुरक्षित रूप से बनाएँ और कमांड, बैकअप तथा मॉड जानकारी पाएँ।',copyIni:'INI कॉपी करें',parametersTitle:'आधिकारिक पैरामीटर खोज',commandsTitle:'एडमिन कमांड',operationsTitle:'सेटअप, बैकअप, मॉड और रिकवरी',allCategories:'सभी श्रेणियाँ',copied:'कॉपी किया'},
    ru:{title:'Генератор настроек сервера Palworld',lead:'Создавайте INI, сравнивайте профили и находите команды, резервные копии и моды.',copyIni:'Копировать INI',parametersTitle:'Поиск параметров',commandsTitle:'Команды администратора',operationsTitle:'Установка, резервные копии, моды и восстановление',allCategories:'Все категории',copied:'Скопировано'},
    ja:{title:'Palworld サーバー設定ジェネレーター',lead:'INIを安全に作成し、プリセット、コマンド、バックアップ、MOD情報をまとめて確認できます。',copyIni:'INIをコピー',parametersTitle:'公式パラメータ検索',commandsTitle:'管理者コマンド',operationsTitle:'セットアップ・バックアップ・MOD・復旧',allCategories:'すべての分類',copied:'コピーしました'},
    es:{title:'Generador de ajustes de servidor Palworld',lead:'Crea el INI, compara perfiles y consulta comandos, copias de seguridad y mods.',copyIni:'Copiar INI',parametersTitle:'Buscador de parámetros',commandsTitle:'Comandos de administrador',operationsTitle:'Instalación, copias, mods y recuperación',allCategories:'Todas las categorías',copied:'Copiado'},
    pt:{title:'Gerador de configurações do servidor Palworld',lead:'Crie o INI, compare perfis e consulte comandos, backups e mods.',copyIni:'Copiar INI',parametersTitle:'Busca de parâmetros',commandsTitle:'Comandos de administrador',operationsTitle:'Instalação, backup, mods e recuperação',allCategories:'Todas as categorias',copied:'Copiado'},
    id:{title:'Generator Pengaturan Server Palworld',lead:'Buat INI, bandingkan profil, dan temukan perintah, cadangan, serta info mod.',copyIni:'Salin INI',parametersTitle:'Pencari parameter',commandsTitle:'Perintah admin',operationsTitle:'Penyiapan, cadangan, mod, dan pemulihan',allCategories:'Semua kategori',copied:'Disalin'},
    tr:{title:'Palworld Sunucu Ayarları Oluşturucu',lead:'INI oluşturun; profilleri, komutları, yedekleme ve mod bilgilerini karşılaştırın.',copyIni:"INI'yi kopyala",parametersTitle:'Parametre bulucu',commandsTitle:'Yönetici komutları',operationsTitle:'Kurulum, yedekleme, modlar ve kurtarma',allCategories:'Tüm kategoriler',copied:'Kopyalandı'},
    de:{title:'Palworld-Servereinstellungen-Generator',lead:'INI erstellen, Profile vergleichen und Befehle, Backups sowie Mods nachschlagen.',copyIni:'INI kopieren',parametersTitle:'Parameter-Suche',commandsTitle:'Admin-Befehle',operationsTitle:'Einrichtung, Backups, Mods und Wiederherstellung',allCategories:'Alle Kategorien',copied:'Kopiert'},
    fr:{title:'Générateur de paramètres serveur Palworld',lead:'Créez le fichier INI, comparez les profils et consultez commandes, sauvegardes et mods.',copyIni:"Copier l’INI",parametersTitle:'Recherche de paramètres',commandsTitle:'Commandes administrateur',operationsTitle:'Installation, sauvegardes, mods et récupération',allCategories:'Toutes les catégories',copied:'Copié'}
  };
  const locales = {en,ko};
  Object.entries(small).forEach(([key,value]) => { locales[key] = {...en,...value}; });

  const settingDefs = [
    ['ServerName','text','DopaBrain Palworld','Server name','서버 이름'],
    ['ServerPlayerMaxNum','number',16,'Maximum connected players','최대 접속 인원',2,32,1],
    ['ExpRate','number',1,'Experience gain multiplier','경험치 획득 배율',0.1,20,0.1],
    ['PalCaptureRate','number',1,'Pal capture multiplier','팰 포획 배율',0.1,20,0.1],
    ['CollectionDropRate','number',1,'Gatherable item multiplier','채집 아이템 배율',0.1,20,0.1],
    ['PalSpawnNumRate','number',1,'Pal spawn multiplier','팰 출현 배율',0.5,3,0.1,'warn'],
    ['PalDamageRateAttack','number',1,'Damage dealt by Pals','팰이 주는 피해 배율',0.1,5,0.1],
    ['PlayerDamageRateAttack','number',1,'Damage dealt by players','플레이어가 주는 피해 배율',0.1,5,0.1],
    ['PlayerDamageRateDefense','number',1,'Damage taken by players','플레이어가 받는 피해 배율',0.1,5,0.1],
    ['PalEggDefaultHatchingTime','number',72,'Huge Egg hatching hours','거대 알 부화 시간',0,240,1],
    ['BaseCampWorkerMaxNum','number',15,'Pals working at each base (max 50)','거점별 작업 팰 수(최대 50)',1,50,1,'warn'],
    ['BaseCampMaxNumInGuild','number',4,'Bases per guild (max 10)','길드별 거점 수(최대 10)',1,10,1,'warn'],
    ['MaxBuildingLimitNum','number',0,'Building cap per player; 0 is unlimited','플레이어별 건축 제한(0은 무제한)',0,10000,100,'warn'],
    ['bIsUseBackupSaveData','boolean',true,'Automatic rotating world backups','자동 순환 월드 백업'],
    ['bEnableVoiceChat','boolean',false,'In-game voice chat','게임 내 음성 채팅'],
    ['bEnableFastTravel','boolean',true,'Enable fast travel','빠른 이동 허용'],
    ['bEnableInvaderEnemy','boolean',true,'Enable base invasions','거점 습격 허용'],
    ['bIsPvP','boolean',false,'Enable trial PvP rules','시험적 PvP 활성화'],
    ['bEnablePlayerToPlayerDamage','boolean',false,'Allow players to damage each other in PvP','PvP에서 플레이어 간 피해 허용'],
    ['bEnableDefenseOtherGuildPlayer','boolean',false,'Let base Pals defend against hostile guild players','거점 팰이 적대 길드 플레이어를 방어']
  ];
  const presets = {
    casual:{ExpRate:2.5,PalCaptureRate:2,CollectionDropRate:2,PalEggDefaultHatchingTime:12,PlayerDamageRateDefense:.7},
    balanced:{},
    hard:{ExpRate:.6,PalCaptureRate:.7,CollectionDropRate:.7,PlayerDamageRateDefense:1.5,PalEggDefaultHatchingTime:96},
    performance:{PalSpawnNumRate:.7,BaseCampWorkerMaxNum:10,BaseCampMaxNumInGuild:2,MaxBuildingLimitNum:1000,bEnableVoiceChat:false},
    pvp:{bIsPvP:true,bEnablePlayerToPlayerDamage:true,bEnableDefenseOtherGuildPlayer:true,BaseCampMaxNumInGuild:2,MaxBuildingLimitNum:1000,bEnableFastTravel:true,PlayerDamageRateAttack:1,PlayerDamageRateDefense:1}
  };
  const parameters = [
    ['BaseCampMaxNum','performanceCat','Total bases across the server','서버 전체 거점 수',1],
    ['BaseCampMaxNumInGuild','performanceCat','Bases allowed per guild; official max 10','길드별 거점 수, 공식 최대 10',1],
    ['BaseCampWorkerMaxNum','performanceCat','Working Pals per base; official max 50','거점별 작업 팰 수, 공식 최대 50',1],
    ['ItemContainerForceMarkDirtyInterval','performanceCat','Container resync interval in seconds','컨테이너 강제 재동기화 간격(초)',1],
    ['MaxBuildingLimitNum','performanceCat','Per-player building cap; 0 means unlimited','플레이어별 건축 수 제한, 0은 무제한',1],
    ['PhysicsActiveDropItemMaxNum','performanceCat','Physics-enabled dropped item limit','물리 연산이 적용되는 드롭 아이템 제한',1],
    ['ServerReplicatePawnCullDistance','performanceCat','Pal sync distance, 5000–15000 cm','팰 동기화 거리, 5000~15000cm',1],
    ['AdminPassword','management','Password required for admin privileges','관리자 권한 인증 비밀번호'],
    ['bAllowClientMod','management','Allow clients using mods to connect','모드를 사용한 클라이언트 접속 허용'],
    ['bEnableBuildingPlayerUIdDisplay','management','Show the creator ID on structures','건축물에 제작자 ID 표시'],
    ['bIsShowJoinLeftMessage','management','Show player join and leave messages','플레이어 입장·퇴장 메시지 표시'],
    ['bIsUseBackupSaveData','management','Create automatic rotating world backups','자동 순환 월드 백업 생성'],
    ['ChatPostLimitPerMinute','management','Maximum chat posts per minute','분당 최대 채팅 수'],
    ['CrossplayPlatforms','management','Allowed platforms; default Steam, Xbox, PS5, Mac','허용 플랫폼, 기본 Steam·Xbox·PS5·Mac'],
    ['LogFormatType','management','Server log format: Text or Json','서버 로그 형식: Text 또는 Json'],
    ['PublicIP','management','External IP shown for a community server','커뮤니티 서버에 표시할 외부 IP'],
    ['PublicPort','management','External public port; does not change listen port','외부 공개 포트, 실제 리슨 포트는 바꾸지 않음'],
    ['RCONEnabled','management','Enable remote console access','원격 콘솔 접속 활성화'],
    ['RCONPort','management','Remote console port','원격 콘솔 포트'],
    ['RESTAPIEnabled','management','Enable the server REST API','서버 REST API 활성화'],
    ['RESTAPIPort','management','REST API listening port','REST API 리슨 포트'],
    ['ServerDescription','management','Description displayed for the server','서버에 표시할 설명'],
    ['ServerName','management','Displayed server name','표시할 서버 이름'],
    ['ServerPassword','management','Password players need to join','플레이어 접속 비밀번호'],
    ['ServerPlayerMaxNum','management','Maximum simultaneous players','최대 동시 접속 인원'],
    ['bAllowGlobalPalboxExport','feature','Allow saving to the Global Palbox','글로벌 팰 상자로 내보내기 허용'],
    ['bAllowGlobalPalboxImport','feature','Allow loading from the Global Palbox','글로벌 팰 상자에서 불러오기 허용'],
    ['bAutoResetGuildNoOnlinePlayers','feature','Delete inactive guild structures and base Pals','비활성 길드의 건축물과 거점 팰 자동 삭제'],
    ['bBuildAreaLimit','feature','Prevent building near protected structures','보호 구조물 주변 건축 제한'],
    ['bEnableFastTravel','feature','Enable fast travel','빠른 이동 허용'],
    ['bEnableFastTravelOnlyBaseCamp','feature','Limit fast travel to bases','빠른 이동을 거점 사이로 제한'],
    ['bEnableVoiceChat','feature','Enable in-game voice chat','게임 내 음성 채팅 활성화'],
    ['bHardcore','feature','Hardcore mode; no respawn after death','하드코어 모드, 사망 후 부활 불가'],
    ['bIsPvP','feature','Enable the trial PvP feature','시험적 PvP 기능 활성화'],
    ['bIsRandomizerPalLevelRandom','feature','Fully randomize wild Pal levels','야생 팰 레벨 완전 무작위화'],
    ['RandomizerSeed','feature','Seed for randomized Pal spawns','팰 무작위 출현 시드'],
    ['RandomizerType','feature','Pal spawn randomization: None, Region or All','팰 출현 무작위화: None, Region, All'],
    ['VoiceChatMaxVolumeDistance','feature','Distance before voice volume starts falling','음성 볼륨 감쇠가 시작되는 거리'],
    ['VoiceChatZeroVolumeDistance','feature','Distance where voice becomes inaudible','음성이 들리지 않게 되는 거리'],
    ['BuildObjectDamageRate','balance','Damage multiplier to structures','건축물이 받는 피해 배율'],
    ['BuildObjectDeteriorationDamageRate','balance','Building decay speed multiplier','건축물 노후화 속도 배율'],
    ['CollectionDropRate','balance','Gatherable item quantity multiplier','채집 아이템 수량 배율'],
    ['CollectionObjectRespawnSpeedRate','balance','Gatherable object respawn interval','채집 오브젝트 재생성 간격'],
    ['DayTimeSpeedRate','balance','Day progression speed','낮 시간 진행 속도'],
    ['DeathPenalty','balance','Death drops: None, Item, ItemAndEquipment or All','사망 드롭: None, Item, ItemAndEquipment, All'],
    ['DenyTechnologyList','balance','Disable selected technology IDs','선택한 기술 ID 비활성화'],
    ['ExpRate','balance','Experience gain multiplier','경험치 획득 배율'],
    ['ItemWeightRate','balance','Item weight multiplier','아이템 무게 배율'],
    ['NightTimeSpeedRate','balance','Night progression speed','밤 시간 진행 속도'],
    ['PalCaptureRate','balance','Pal capture chance multiplier','팰 포획 확률 배율'],
    ['PalEggDefaultHatchingTime','balance','Hours required for a Huge Egg','거대 알 부화에 필요한 시간'],
    ['PalSpawnNumRate','balance','Pal spawn multiplier; affects performance','팰 출현 배율, 성능에 영향',1],
    ['SupplyDropSpan','balance','Meteorite and supply drop interval in minutes','운석·보급품 투하 간격(분)']
  ];
  const commands = [
    ['/AdminPassword <password>','Authenticate as administrator','관리자로 인증'],
    ['/Save','Save world data','월드 데이터 저장'],
    ['/Info','Show server information','서버 정보 표시'],
    ['/ShowPlayers','List connected players','접속 플레이어 목록'],
    ['/Broadcast <message>','Message every player','전체 공지 전송'],
    ['/Shutdown <seconds> <message>','Graceful delayed shutdown','안내 후 지연 종료'],
    ['/DoExit','Force the server to stop','서버 강제 종료'],
    ['/KickPlayer <SteamID>','Remove a player from the server','플레이어 내보내기'],
    ['/BanPlayer <SteamID>','Ban a player','플레이어 차단'],
    ['/UnBanPlayer <SteamID>','Remove a player ban','플레이어 차단 해제'],
    ['/TeleportToPlayer <SteamID>','Teleport yourself to a player','해당 플레이어에게 이동'],
    ['/TeleportToMe <SteamID>','Teleport a player to you','해당 플레이어를 내게 이동'],
    ['/ToggleSpectate','Toggle spectator mode','관전자 모드 전환']
  ];

  let lang = detectLanguage();
  let values = {};
  let activePreset = 'balanced';
  let generatorViewSent = false;
  let generatorViewTimer = 0;
  const changedSettings = new Set();
  const $ = id => document.getElementById(id);
  const t = key => (locales[lang] || en)[key] || en[key] || key;
  const event = (name, params={}) => window.gtag?.('event', name, {content_format:'palworld_server_console',language:lang,...params});

  function detectLanguage() {
    const query = new URLSearchParams(location.search).get('lang');
    const stored = localStorage.getItem('app_language');
    const candidate = query || stored || navigator.language.split('-')[0];
    return LANGS.includes(candidate) ? candidate : 'en';
  }
  function localize() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    $('language').value = lang;
    const url = new URL(location.pathname, location.origin);
    if (lang !== 'en' || new URLSearchParams(location.search).has('lang')) url.searchParams.set('lang',lang);
    document.querySelector('link[rel=canonical]').href = url.href;
    document.querySelector('meta[property="og:url"]').content = url.href;
    document.title = `${t('title')} (1.0.3)`;
  }
  function defaultValues() {
    values = Object.fromEntries(settingDefs.map(d => [d[0],d[2]]));
  }
  function applyPreset(name) {
    defaultValues();
    Object.assign(values,presets[name]);
    activePreset = name;
    renderPresets(); renderSettings(); renderOutput();
    event('palworld_preset_select',{preset:name});
  }
  function renderPresets() {
    $('presets').innerHTML = Object.keys(presets).map(name =>
      `<button class="preset ${name===activePreset?'active':''}" type="button" data-preset="${name}"><strong>${escapeHtml(t(name==='performance'?'performancePreset':name))}</strong><span>${escapeHtml(t(name+'Desc'))}</span></button>`
    ).join('');
    $('pvpRequirement').hidden = activePreset !== 'pvp';
  }
  function renderSettings() {
    $('settings').innerHTML = settingDefs.map(d => {
      const [key,type,,enDesc,koDesc,min,max,step,warn] = d;
      const desc = lang === 'ko' ? koDesc : enDesc;
      const control = type === 'boolean'
        ? `<input data-key="${key}" type="checkbox" ${values[key]?'checked':''} aria-label="${escapeHtml(key)}">`
        : `<input data-key="${key}" type="${type}" value="${escapeHtml(values[key])}" ${type==='number'?`min="${min}" max="${max}" step="${step}"`:''} aria-label="${escapeHtml(key)}">`;
      return `<label class="setting"><span><strong>${escapeHtml(key)}</strong><small>${escapeHtml(desc)}${warn?` · <span class="warning">${escapeHtml(t('performance'))}</span>`:''}</small></span>${control}</label>`;
    }).join('');
  }
  function iniValue(value) {
    if (typeof value === 'boolean') return value ? 'True' : 'False';
    if (typeof value === 'number') return String(value);
    return `"${String(value).replace(/\\/g,'\\\\').replace(/"/g,'\\"')}"`;
  }
  function renderOutput() {
    const settings = settingDefs.map(d => `${d[0]}=${iniValue(values[d[0]])}`).join(',');
    $('iniOutput').textContent = `[/Script/Pal.PalGameWorldSettings]\nOptionSettings=(${settings})`;
  }
  function renderFilters() {
    const categories = ['allCategories','performanceCat','management','feature','balance'];
    $('categoryFilter').innerHTML = categories.map(c => `<option value="${c}">${escapeHtml(t(c))}</option>`).join('');
  }
  function renderParameters() {
    const q = $('parameterSearch').value.trim().toLowerCase();
    const cat = $('categoryFilter').value;
    const filtered = parameters.filter(p => (cat==='allCategories'||p[1]===cat) && (!q || `${p[0]} ${p[2]} ${p[3]}`.toLowerCase().includes(q)));
    $('resultCount').textContent = t('results').replace('{count}',filtered.length);
    $('parameterList').innerHTML = filtered.length ? filtered.map(p =>
      `<article class="parameter"><header><code>${escapeHtml(p[0])}</code><span class="tag">${escapeHtml(t(p[1]))}</span></header><p>${escapeHtml(lang==='ko'?p[3]:p[2])}</p>${p[4]?`<p class="warning">⚠ ${escapeHtml(t('performance'))}</p>`:''}</article>`
    ).join('') : `<p>${escapeHtml(t('none'))}</p>`;
  }
  function renderCommands() {
    $('commandList').innerHTML = commands.map((c,i) =>
      `<button class="command" type="button" data-command="${i}"><span><code>${escapeHtml(c[0])}</code><small>${escapeHtml(lang==='ko'?c[2]:c[1])}</small></span><b>${escapeHtml(t('copy'))}</b></button>`
    ).join('');
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  async function copy(text, surface) {
    try { await navigator.clipboard.writeText(text); }
    catch { const area=document.createElement('textarea');area.value=text;document.body.append(area);area.select();document.execCommand('copy');area.remove(); }
    $('toast').textContent=t('copied');$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1500);
    event('palworld_copy',{surface});
  }
  function rerender() {
    localize(); renderPresets(); renderSettings(); renderOutput(); renderFilters(); renderParameters(); renderCommands();
  }

  function observeGenerator() {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.some(entry => entry.isIntersecting && entry.intersectionRatio >= 0.5);
      clearTimeout(generatorViewTimer);
      if (!visible || generatorViewSent) return;
      generatorViewTimer = setTimeout(() => {
        generatorViewSent = true;
        event('palworld_generator_view',{official_docs_version:'1.0.3'});
        observer.disconnect();
      }, 500);
    }, {threshold:[0.5]});
    observer.observe($('presets'));
  }

  $('language').addEventListener('change', e => {
    lang = e.target.value; localStorage.setItem('app_language',lang);
    const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState({},'',url);
    rerender(); event('palworld_language_change');
  });
  $('presets').addEventListener('click', e => { const b=e.target.closest('[data-preset]');if(b)applyPreset(b.dataset.preset); });
  $('settings').addEventListener('input', e => {
    const input=e.target.closest('[data-key]');if(!input)return;
    if (input.type === 'number') {
      if (input.value === '') return;
      const definition = settingDefs.find(item => item[0] === input.dataset.key);
      const numeric = Number(input.value);
      if (!Number.isFinite(numeric)) return;
      values[input.dataset.key] = Math.min(definition[6], Math.max(definition[5], numeric));
      if (Number(input.value) !== values[input.dataset.key]) input.value = String(values[input.dataset.key]);
    } else {
      values[input.dataset.key]=input.type==='checkbox'?input.checked:input.value;
    }
    activePreset='custom';renderPresets();renderOutput();
    if (!changedSettings.has(input.dataset.key)) {
      changedSettings.add(input.dataset.key);
      event('palworld_setting_change',{setting:input.dataset.key});
    }
  });
  $('reset').addEventListener('click',()=>applyPreset('balanced'));
  $('copyIni').addEventListener('click',()=>copy($('iniOutput').textContent,'ini'));
  $('parameterSearch').addEventListener('input',()=>{renderParameters();event('palworld_parameter_search');});
  $('categoryFilter').addEventListener('change',renderParameters);
  $('commandList').addEventListener('click',e=>{const b=e.target.closest('[data-command]');if(b)copy(commands[Number(b.dataset.command)][0],'command');});
  document.querySelector('.suite-links').addEventListener('click',e=>{
    const link=e.target.closest('a');
    if(link)event('palworld_guide_click',{destination:new URL(link.href,location.href).pathname.split('/').pop()});
  });

  defaultValues(); rerender();
  observeGenerator();
  event('palworld_server_tool_view',{official_docs_version:'1.0.3'});
})();
