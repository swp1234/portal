(() => {
  'use strict';
  const LANGS=['ko','en','zh','hi','ru','ja','es','pt','id','tr','de','fr'];
  const en={
    skip:'Skip to diagnosis',settingsLink:'← Server settings console',language:'Language',eyebrow:'PALWORLD SERVER RECOVERY DESK · DOCS 1.0',
    title:'Palworld Server Troubleshooter',lead:'Choose the symptom, environment and last change. Get a prioritized checklist without risking the only copy of your world.',
    chipConnect:'Connection failed',chipSave:'World missing',chipConfig:'Settings ignored',chipMods:'Mod crash',chipLag:'Lag',
    safetyTitle:'First rule: preserve evidence',safetyBody:'If a save appears missing or corrupted, stop the server and copy the entire Saved directory before launching, restoring or changing anything else.',
    back:'Back',recoveryPlan:'RECOVERY PLAN',copyPlan:'Copy checklist',restart:'Start again',ad:'Advertisement',
    quickReference:'QUICK REFERENCE',matrixTitle:'Symptom-to-check matrix',nextStep:'NEXT STEP',consoleTitle:'Repair the configuration safely',
    consoleBody:'Use the companion console to compare presets, generate an INI, search 53 official parameters and copy admin commands.',openConsole:'Open settings console →',
    sourcesTitle:'Official sources and limits',sourcesBody:"This independent decision aid is based on Pocketpair's official Palworld Server Guide 1.0. It cannot inspect your server or files. Keep backups and verify commands before use.",
    connectSource:'Official connection guide ↗',deploySource:'Official deployment guide ↗',modSource:'Official server mod guide ↗',allTools:'← All tools',
    copied:'Checklist copied',step:'Question {current} of {total}',resultTitle:'Your prioritized recovery path',resultSummary:'Work from top to bottom. Stop when the server is stable; do not make several unverified changes at once.',
    riskHigh:'High data-loss risk: preserve the entire Saved directory before attempting recovery.',riskNormal:'Controlled change: keep a known-good save and INI before restarting.',
    qSymptom:'What is the main symptom?',qSymptomHelp:'Choose the failure that blocks you right now.',
    qEnvironment:'Where does the server run?',qEnvironmentHelp:'The active paths and mod support differ by environment.',
    qChanged:'What changed immediately before the problem?',qChangedHelp:'The last change is usually the fastest rollback point.',
    qBackup:'Do you have a known-good backup?',qBackupHelp:'Be conservative if you are not certain.',
    connect:'Players cannot connect',connectDesc:'Timeout, connection failed or unreachable',
    list:'Server is not listed',listDesc:'Community server does not appear',
    settings:'Settings do not apply',settingsDesc:'INI values seem ignored after restart',
    save:'World or character is missing',saveDesc:'Progress disappeared or another world loaded',
    mod:'Crash after adding or updating mods',modDesc:'Server exits, loops or will not load',
    lag:'Severe lag or desync',lagDesc:'Rubber-banding, delayed actions or CPU load',
    windows:'Self-hosted Windows',windowsDesc:'Steam or SteamCMD dedicated server',
    linux:'Self-hosted Linux',linuxDesc:'SteamCMD dedicated server',
    provider:'Hosting provider',providerDesc:'Managed panel or rented server',
    community:'Joining someone else',communityDesc:'You do not control server files',
    update:'Game/server update',updateDesc:'Problem began after an update',
    config:'INI or launch options',configDesc:'A setting or startup command changed',
    mods:'Mod installation or update',modsDesc:'Workshop or server mod changed',
    network:'Router, firewall or IP',networkDesc:'Network environment changed',
    nothing:'No known change',nothingDesc:'Problem appeared without an obvious trigger',
    yes:'Yes, verified',yesDesc:'Backup predates the issue and opens correctly',
    no:'No',noDesc:'No separate known-good copy',
    unknown:'Not sure',unknownDesc:'There are files, but they are unverified'
  };
  const ko={
    skip:'진단으로 이동',settingsLink:'← 서버 설정 콘솔',language:'언어',eyebrow:'팰월드 서버 복구 데스크 · 공식 문서 1.0',
    title:'팰월드 서버 문제 해결 진단기',lead:'증상, 운영 환경, 직전 변경 사항을 선택하면 월드 원본을 위험에 빠뜨리지 않는 우선순위 복구 절차를 만듭니다.',
    chipConnect:'접속 실패',chipSave:'월드 사라짐',chipConfig:'설정 미적용',chipMods:'모드 충돌',chipLag:'렉·동기화 지연',
    safetyTitle:'첫 번째 원칙: 증거부터 보존',safetyBody:'세이브가 사라지거나 손상된 것처럼 보인다면 추가 실행·복원·변경 전에 서버를 멈추고 Saved 폴더 전체를 복사하세요.',
    back:'이전',recoveryPlan:'복구 계획',copyPlan:'체크리스트 복사',restart:'처음부터',ad:'광고',
    quickReference:'빠른 참조',matrixTitle:'증상별 우선 확인표',nextStep:'다음 단계',consoleTitle:'설정을 안전하게 복구하세요',
    consoleBody:'함께 제공되는 콘솔에서 프리셋을 비교하고 INI를 생성하며 공식 파라미터 53개와 관리자 명령어를 검색할 수 있습니다.',openConsole:'설정 콘솔 열기 →',
    sourcesTitle:'공식 출처와 한계',sourcesBody:'이 독립 진단 도구는 Pocketpair 공식 Palworld Server Guide 1.0을 기준으로 합니다. 서버나 파일을 직접 검사하지 않으므로 백업을 유지하고 명령을 확인한 뒤 사용하세요.',
    connectSource:'공식 접속 가이드 ↗',deploySource:'공식 설치 가이드 ↗',modSource:'공식 서버 모드 가이드 ↗',allTools:'← 모든 도구',
    copied:'체크리스트 복사됨',step:'질문 {total}개 중 {current}',resultTitle:'우선순위 복구 경로',resultSummary:'위에서 아래 순서로 진행하세요. 서버가 안정화되면 멈추고, 검증하지 않은 변경을 여러 개 동시에 적용하지 마세요.',
    riskHigh:'데이터 손실 위험이 높습니다. 복구 시도 전에 Saved 폴더 전체를 별도 위치에 보존하세요.',riskNormal:'통제 가능한 변경입니다. 재시작 전에 정상 세이브와 INI를 보관하세요.',
    qSymptom:'가장 큰 증상은 무엇인가요?',qSymptomHelp:'지금 플레이를 막는 문제 하나를 선택하세요.',
    qEnvironment:'서버는 어디에서 실행되나요?',qEnvironmentHelp:'환경에 따라 실제 경로와 모드 지원 조건이 달라집니다.',
    qChanged:'문제 직전에 무엇이 바뀌었나요?',qChangedHelp:'가장 최근 변경이 보통 가장 빠른 롤백 지점입니다.',
    qBackup:'확인된 정상 백업이 있나요?',qBackupHelp:'확실하지 않다면 보수적으로 선택하세요.',
    connect:'플레이어가 접속할 수 없음',connectDesc:'시간 초과, 연결 실패, 서버 도달 불가',
    list:'서버 목록에 표시되지 않음',listDesc:'커뮤니티 서버 검색 결과에 없음',
    settings:'설정이 적용되지 않음',settingsDesc:'재시작 후에도 INI 값이 무시됨',
    save:'월드나 캐릭터가 사라짐',saveDesc:'진행 상황이 없어졌거나 다른 월드가 열림',
    mod:'모드 추가·업데이트 후 충돌',modDesc:'서버 종료, 재시작 반복, 로딩 실패',
    lag:'심한 렉 또는 동기화 지연',lagDesc:'러버밴딩, 행동 지연, 높은 CPU 부하',
    windows:'Windows 직접 운영',windowsDesc:'Steam 또는 SteamCMD 전용 서버',
    linux:'Linux 직접 운영',linuxDesc:'SteamCMD 전용 서버',
    provider:'호스팅 업체',providerDesc:'관리 패널 또는 임대 서버',
    community:'다른 사람 서버 접속',communityDesc:'서버 파일에 접근할 수 없음',
    update:'게임·서버 업데이트',updateDesc:'업데이트 직후부터 발생',
    config:'INI 또는 실행 옵션',configDesc:'설정이나 시작 명령을 변경함',
    mods:'모드 설치 또는 업데이트',modsDesc:'Workshop·서버 모드를 변경함',
    network:'공유기·방화벽·IP',networkDesc:'네트워크 환경을 변경함',
    nothing:'알려진 변경 없음',nothingDesc:'뚜렷한 계기 없이 발생',
    yes:'예, 검증됨',yesDesc:'문제 이전 백업이며 정상적으로 열림',
    no:'없음',noDesc:'별도로 보관한 정상 사본 없음',
    unknown:'확실하지 않음',unknownDesc:'파일은 있지만 정상 여부를 검증하지 않음'
  };
  const titleOverrides={
    zh:'幻兽帕鲁服务器故障排除器',hi:'Palworld सर्वर समस्या निवारक',ru:'Диагностика сервера Palworld',ja:'Palworld サーバートラブル診断',
    es:'Solucionador de problemas del servidor Palworld',pt:'Solucionador de problemas do servidor Palworld',id:'Pemecah Masalah Server Palworld',
    tr:'Palworld Sunucu Sorun Giderici',de:'Palworld-Server-Fehlerdiagnose',fr:'Dépannage du serveur Palworld'
  };
  const locales={en,ko};Object.entries(titleOverrides).forEach(([l,title])=>locales[l]={...en,title});
  const questions=[
    {id:'symptom',title:'qSymptom',help:'qSymptomHelp',options:[['connect','🔌'],['list','📡'],['settings','⚙️'],['save','💾'],['mod','🧩'],['lag','⏱️']]},
    {id:'environment',title:'qEnvironment',help:'qEnvironmentHelp',options:[['windows','🪟'],['linux','🐧'],['provider','☁️'],['community','👥']]},
    {id:'changed',title:'qChanged',help:'qChangedHelp',options:[['update','⬆️'],['config','📝'],['mods','🧩'],['network','🌐'],['nothing','❓']]},
    {id:'backup',title:'qBackup',help:'qBackupHelp',options:[['yes','✅'],['no','⛔'],['unknown','⚠️']]}
  ];
  const actionText={
    preserve:['Preserve the current state','Stop the server. Copy the entire Saved directory and the active INI to a dated folder outside the server directory.','현재 상태 보존','서버를 멈추고 Saved 폴더 전체와 실제 INI를 서버 외부의 날짜별 폴더로 복사합니다.'],
    saveNow:['Do not overwrite the only copy','Do not create a replacement world, repeatedly launch, or restore over the current files until the snapshot is complete.','유일한 사본을 덮어쓰지 않기','스냅샷이 끝날 때까지 대체 월드를 만들거나 반복 실행하거나 현재 파일 위에 복원하지 마세요.'],
    verifyPath:['Verify the active configuration path','Edit PalWorldSettings.ini under Pal/Saved/Config/WindowsServer or LinuxServer. Changes to DefaultPalWorldSettings.ini do not apply.','실제 설정 경로 확인','Pal/Saved/Config/WindowsServer 또는 LinuxServer 아래 PalWorldSettings.ini를 수정하세요. DefaultPalWorldSettings.ini 변경은 적용되지 않습니다.'],
    stopEdit:['Stop before editing','Shut down the server cleanly, edit the active file, then restart once and check the log for parsing errors.','수정 전 서버 중지','서버를 정상 종료하고 실제 파일을 수정한 뒤 한 번만 재시작해 로그의 파싱 오류를 확인합니다.'],
    connectDirect:['Test direct connection first','Use the server IP and port entry below the server list. Test locally, then from an external network to separate server and router failures.','직접 접속부터 시험','서버 목록 아래 IP와 포트 입력란을 사용하세요. 로컬 접속 후 외부 네트워크에서 시험해 서버 문제와 공유기 문제를 분리합니다.'],
    network:['Check the complete network path','Confirm the listen port, PublicIP/PublicPort, router forwarding, host firewall and provider firewall. Do not expose RCON or REST API unless secured.','전체 네트워크 경로 확인','리슨 포트, PublicIP/PublicPort, 공유기 포워딩, OS 방화벽, 호스팅 방화벽을 확인합니다. 보호 없이 RCON·REST API를 노출하지 마세요.'],
    communityList:['Separate listing from reachability','A community listing can fail while direct IP connection still works. Verify direct access before changing world settings.','목록 표시와 접속 가능성 분리','커뮤니티 목록에 없어도 직접 IP 접속은 될 수 있습니다. 월드 설정을 바꾸기 전에 직접 접속을 확인하세요.'],
    rollback:['Roll back the last change only','Restore the previous known-good INI or launch options without changing the save. Start once and compare the log.','마지막 변경만 롤백','세이브는 건드리지 말고 이전 정상 INI 또는 실행 옵션만 복원합니다. 한 번 실행해 로그를 비교하세요.'],
    validate:['Validate the dedicated server files','Run steamcmd +login anonymous +app_update 2394010 validate +quit, then start without extra launch options.','전용 서버 파일 검증','steamcmd +login anonymous +app_update 2394010 validate +quit를 실행한 뒤 추가 실행 옵션 없이 시작합니다.'],
    noMods:['Isolate all mods','Start once with -NoMods. If stable, verify server compatibility, dependencies and Info.json, then restore mods one at a time.','모드 전체 격리','-NoMods로 한 번 시작합니다. 안정적이면 서버 호환성, 의존성, Info.json을 확인하고 모드를 하나씩 복원합니다.'],
    windowsMods:['Use the supported server environment','Official docs currently describe server-side mods for Windows dedicated servers only. Do not treat a Linux client mod setup as equivalent.','지원되는 서버 환경 확인','공식 문서는 현재 서버 측 모드를 Windows 전용 서버로 제한합니다. Linux의 클라이언트 모드 구성을 같은 것으로 보지 마세요.'],
    restore:['Restore to a separate copy first','Test a known-good backup in a separate recovery directory. Keep the current snapshot untouched until the recovered world is verified.','별도 사본에 먼저 복원','정상 백업을 별도 복구 폴더에서 시험합니다. 복원 월드를 확인할 때까지 현재 스냅샷은 건드리지 마세요.'],
    locateSave:['Confirm which save is actually loaded','Compare timestamps and world identifiers in the active Saved path and service panel. A changed working directory can load a different world.','실제로 열린 세이브 확인','실제 Saved 경로와 서비스 패널에서 시간과 월드 식별자를 비교하세요. 작업 디렉터리가 바뀌면 다른 월드가 열릴 수 있습니다.'],
    performance:['Reduce high-load settings temporarily','Return PalSpawnNumRate, BaseCampWorkerMaxNum, base count and building limits toward defaults. Restart and measure before changing another group.','고부하 설정 임시 축소','PalSpawnNumRate, BaseCampWorkerMaxNum, 거점 수, 건축 제한을 기본값 쪽으로 되돌립니다. 다른 묶음을 바꾸기 전에 재시작해 측정하세요.'],
    observe:['Measure before tuning','Watch CPU, memory, disk and network while one player connects. Use logs and timing to identify the saturated resource.','조정 전 측정','플레이어 한 명이 접속할 때 CPU, 메모리, 디스크, 네트워크를 관찰하세요. 로그와 시간대를 이용해 포화 자원을 찾습니다.'],
    contactAdmin:['Send a reproducible report to the owner','Include the exact time, platform, error text and whether direct IP connection works. Only the server owner can inspect files, ports and logs.','관리자에게 재현 가능한 정보 전달','정확한 시간, 플랫폼, 오류 문구, 직접 IP 접속 여부를 보내세요. 서버 파일·포트·로그는 운영자만 확인할 수 있습니다.'],
    backupAuto:['Enable rotating backups after recovery','After the world is stable, set bIsUseBackupSaveData=True and keep an additional off-server backup.','복구 후 순환 백업 활성화','월드가 안정되면 bIsUseBackupSaveData=True로 설정하고 서버 외부 백업을 추가로 유지하세요.']
  };
  const symptomActions={
    connect:['connectDirect','network','validate'],list:['communityList','network','connectDirect'],settings:['verifyPath','stopEdit','rollback'],
    save:['saveNow','locateSave','restore'],mod:['noMods','validate','windowsMods'],lag:['observe','performance','validate']
  };
  const matrixRows=[
    ['Connection failed','Direct IP → listen port → firewall → router/provider','접속 실패','직접 IP → 리슨 포트 → 방화벽 → 공유기·업체'],
    ['Server not listed','Direct access first; then PublicIP/PublicPort and community listing','목록에 없음','직접 접속 먼저 → PublicIP/PublicPort → 커뮤니티 목록'],
    ['Settings ignored','Stop server → active INI path → syntax → single restart','설정 무시','서버 중지 → 실제 INI 경로 → 문법 → 한 번 재시작'],
    ['World missing','Stop → clone Saved → identify active world → restore separately','월드 사라짐','중지 → Saved 복제 → 실제 월드 확인 → 별도 복원'],
    ['Mod crash','Backup → -NoMods → dependencies/Info.json → one-by-one restore','모드 충돌','백업 → -NoMods → 의존성·Info.json → 하나씩 복원'],
    ['Lag/desync','Measure resources → lower spawn/workers/builds → retest','렉·동기화','자원 측정 → 출현·작업 팰·건축 축소 → 재시험']
  ];
  let lang=detectLang(),step=0,answers={};
  const $=id=>document.getElementById(id),t=k=>(locales[lang]||en)[k]||en[k]||k;
  function detectLang(){const p=new URLSearchParams(location.search).get('lang'),s=localStorage.getItem('app_language'),n=(navigator.language||'en').split('-')[0];return LANGS.includes(p||s||n)?p||s||n:'en'}
  function esc(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function event(name,params={}){window.gtag?.('event',name,{content_format:'palworld_server_troubleshooter',language:lang,...params})}
  function localize(){
    document.documentElement.lang=lang;$('language').value=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
    document.querySelectorAll('[data-preserve-lang]').forEach(a=>{const u=new URL(a.href,location.href);u.searchParams.set('lang',lang);a.href=u.href});
    const u=new URL(location.href);u.searchParams.set('lang',lang);document.querySelector('link[rel=canonical]').href=u.href;document.querySelector('meta[property="og:url"]').content=u.href;
    document.title=`${t('title')} · DopaBrain`;
  }
  function renderQuestion(){
    $('questionView').hidden=false;$('resultView').hidden=true;
    const q=questions[step];$('stepLabel').textContent=t('step').replace('{current}',step+1).replace('{total}',questions.length);
    $('questionTitle').textContent=t(q.title);$('questionHelp').textContent=t(q.help);$('progressBar').style.width=`${(step/questions.length)*100+25}%`;
    $('options').innerHTML=q.options.map(([id,icon])=>`<button class="option" type="button" data-value="${id}"><span class="option-icon">${icon}</span><span><strong>${esc(t(id))}</strong><small>${esc(t(id+'Desc'))}</small></span></button>`).join('');
    $('back').hidden=step===0;
  }
  function choose(value){
    const q=questions[step];answers[q.id]=value;event('palworld_troubleshooter_answer',{question:q.id,answer:value});
    if(step<questions.length-1){step++;renderQuestion()}else renderResult();
  }
  function actionKeys(){
    const keys=['preserve',...(symptomActions[answers.symptom]||[])];
    if(answers.changed==='update')keys.push('validate');
    if(answers.changed==='config')keys.push('rollback','verifyPath');
    if(answers.changed==='mods')keys.push('noMods');
    if(answers.changed==='network')keys.push('network');
    if(answers.environment==='community')return ['contactAdmin',...(answers.symptom==='connect'?['connectDirect']:[])];
    if(answers.environment==='linux'&&answers.symptom==='mod')keys.push('windowsMods');
    if(answers.backup==='yes'&&answers.symptom==='save')keys.push('restore');
    if(answers.backup!=='yes')keys.push('backupAuto');
    return [...new Set(keys)].slice(0,7);
  }
  function localizedAction(key){const a=actionText[key];return lang==='ko'?[a[2],a[3]]:[a[0],a[1]]}
  function renderResult(){
    $('questionView').hidden=true;$('resultView').hidden=false;$('progressBar').style.width='100%';
    $('resultTitle').textContent=t('resultTitle');$('resultSummary').textContent=t('resultSummary');
    const high=answers.symptom==='save'||answers.backup!=='yes';$('riskBanner').className=`risk-banner ${high?'high':''}`;$('riskBanner').textContent=t(high?'riskHigh':'riskNormal');
    const keys=actionKeys();$('actionList').innerHTML=keys.map(k=>{const a=localizedAction(k);return `<li data-action="${k}"><strong>${esc(a[0])}</strong>${esc(a[1])}</li>`}).join('');
    event('palworld_troubleshooter_result',{symptom:answers.symptom,environment:answers.environment,last_change:answers.changed,backup:answers.backup,risk:high?'high':'normal',action_count:keys.length});
  }
  function renderMatrix(){$('matrix').innerHTML=matrixRows.map(r=>`<article class="matrix-row"><strong>${esc(lang==='ko'?r[2]:r[0])}</strong><p>${esc(lang==='ko'?r[3]:r[1])}</p></article>`).join('')}
  async function copyPlan(){
    const items=[...$('actionList').querySelectorAll('li')].map((li,i)=>`${i+1}. ${li.innerText.replace(/\n/g,' — ')}`);
    const high=answers.symptom==='save'||answers.backup!=='yes';
    const text=`${t('title')}\n${t(high?'riskHigh':'riskNormal')}\n\n${items.join('\n')}`;
    try{await navigator.clipboard.writeText(text)}catch{const a=document.createElement('textarea');a.value=text;document.body.append(a);a.select();document.execCommand('copy');a.remove()}
    $('toast').textContent=t('copied');$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1600);event('palworld_troubleshooter_copy',{symptom:answers.symptom});
  }
  $('language').addEventListener('change',e=>{const showingResult=!$('resultView').hidden;lang=e.target.value;localStorage.setItem('app_language',lang);const u=new URL(location.href);u.searchParams.set('lang',lang);history.replaceState({},'',u);localize();if(showingResult)renderResult();else renderQuestion();renderMatrix();event('palworld_troubleshooter_language_change')});
  $('options').addEventListener('click',e=>{const b=e.target.closest('[data-value]');if(b)choose(b.dataset.value)});
  $('back').addEventListener('click',()=>{if(step>0){step--;renderQuestion()}});
  $('restart').addEventListener('click',()=>{step=0;answers={};renderQuestion();event('palworld_troubleshooter_restart')});
  $('copyPlan').addEventListener('click',copyPlan);
  document.querySelector('.next-tool a').addEventListener('click',()=>event('palworld_troubleshooter_console_click',{symptom:answers.symptom||'none'}));
  localize();renderQuestion();renderMatrix();event('palworld_troubleshooter_view',{official_docs_version:'1.0'});
})();
