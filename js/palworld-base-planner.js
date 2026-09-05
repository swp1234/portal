(() => {
  'use strict';
  const LANGS=['ko','en','zh','hi','ru','ja','es','pt','id','tr','de','fr'];
  const en={
    skip:'Skip to base planner',fieldGuide:'← Field guide',language:'Language',eyebrow:'PALWORLD BASE OPERATIONS BOARD',
    title:'Palworld Base Workforce Planner',lead:'Choose a production goal, worker capacity and bottleneck. Get a role allocation and layout plan built around flow—not a patch-sensitive Pal tier list.',
    chipRoles:'Role allocation',chipZones:'Layout zones',chipFlow:'Bottleneck fixes',chipChecklist:'Copyable checklist',
    principleTitle:'Plan capacity, then choose Pals',principleBody:'One Pal can cover several work suitabilities, but too many competing jobs can make behavior unpredictable. Use the role counts as capacity targets, not rigid one-Pal assignments.',
    inputsKicker:'BASE INPUTS',inputsTitle:'Describe the base you want',goalLabel:'Primary goal',workersLabel:'Worker capacity',
    workersHelp:'Official server configuration supports up to 50, but higher counts can increase server load.',paceLabel:'Operating style',bottleneckLabel:'Current bottleneck',
    buildPlan:'Build base plan',resultKicker:'WORKFORCE BLUEPRINT',copyPlan:'Copy plan',zoneTitle:'Four-zone layout',checkTitle:'Workflow checks',ad:'Advertisement',
    whyKicker:'WHY BASES STALL',whyTitle:'Work speed is only one part of throughput',through1Title:'Input',through1Body:'Raw materials and farm outputs must arrive before stations become idle.',
    through2Title:'Process',through2Body:'The correct work suitability and station capacity turn inputs into useful outputs.',through3Title:'Move',through3Body:'Transport and short paths keep finished goods from blocking stations.',
    through4Title:'Recover',through4Body:'Food, beds and unobstructed access protect worker uptime.',fieldGuideCard:'Field Guide',fieldGuideCardDesc:'24 tactics and six session plans',
    serverCard:'Server Settings',serverCardDesc:'Set worker and base limits safely',troubleCard:'Troubleshooter',troubleCardDesc:'Fix lag, settings, saves and mods',
    sourcesTitle:'Source basis and limits',sourcesBody:'The game officially includes Pal-powered production, farming and automation. Server documentation lists BaseCampWorkerMaxNum with a maximum of 50 and warns that larger values increase processing load. This planner models workflow roles; it does not calculate hidden game AI or guarantee output rates.',
    officialConfig:'Official server parameters ↗',officialGame:'Official game page ↗',allTools:'← All tools',copied:'Base plan copied',
    balanced:'Balanced hub',balancedDesc:'General survival and crafting',materials:'Materials',materialsDesc:'Ore, wood and raw inputs',food:'Food & farming',foodDesc:'Stable food production',
    crafting:'Crafting line',craftingDesc:'Processing and manufacturing',breeding:'Breeding support',breedingDesc:'Food, ranch and egg loop',defense:'Expedition support',defenseDesc:'Supplies, repairs and reserves',
    casual:'Casual / visits',casualDesc:'Production while nearby',continuous:'Continuous',continuousDesc:'Long unattended cycles',
    input:'Inputs run dry',inputDesc:'Not enough raw material',transport:'Transport stalls',transportDesc:'Stations or storage fill up',foodBottleneck:'Food shortage',foodBottleneckDesc:'Workers stop to eat or recover',
    path:'Pathing problems',pathDesc:'Workers get stuck or walk far',recovery:'Low uptime',recoveryDesc:'Frequent rest or interruptions',unknown:'Not sure',unknownDesc:'Diagnose the whole loop',
    resultTitle:'{goal} · {workers}-worker blueprint',resultSummary:'This is a capacity model. Fill each role with available Pals and consolidate compatible work suitabilities when slots are limited.',
    loadHigh:'Performance note: more than 20 active workers can increase server load. Measure CPU, pathing and task delay before adding more.',
    loadNormal:'Keep one known-good layout and change one assignment or station at a time so the real bottleneck stays visible.'
  };
  const ko={
    skip:'거점 플래너로 이동',fieldGuide:'← 필드 가이드',language:'언어',eyebrow:'팰월드 거점 운영 보드',
    title:'팰월드 거점 인력 배치 플래너',lead:'생산 목표, 작업 팰 수, 현재 병목을 선택하면 패치에 흔들리는 팰 티어표가 아닌 흐름 중심 역할 배치와 레이아웃을 만듭니다.',
    chipRoles:'역할 배치',chipZones:'레이아웃 구역',chipFlow:'병목 해결',chipChecklist:'복사 가능한 계획',
    principleTitle:'역할 용량을 정한 뒤 팰을 고르세요',principleBody:'팰 하나가 여러 작업 적성을 맡을 수 있지만 경쟁 작업이 너무 많으면 행동이 불안정해질 수 있습니다. 역할 수를 고정 배치가 아니라 필요한 작업 용량으로 사용하세요.',
    inputsKicker:'거점 입력',inputsTitle:'원하는 거점을 설명하세요',goalLabel:'주요 목표',workersLabel:'작업 팰 수',
    workersHelp:'공식 서버 설정은 최대 50까지 지원하지만 수가 많아질수록 서버 부하가 증가할 수 있습니다.',paceLabel:'운영 방식',bottleneckLabel:'현재 병목',
    buildPlan:'거점 계획 만들기',resultKicker:'인력 청사진',copyPlan:'계획 복사',zoneTitle:'4구역 레이아웃',checkTitle:'작업 흐름 점검',ad:'광고',
    whyKicker:'거점이 멈추는 이유',whyTitle:'작업 속도는 처리량의 일부일 뿐입니다',through1Title:'입력',through1Body:'시설이 쉬지 않으려면 원재료와 농장 산출물이 먼저 도착해야 합니다.',
    through2Title:'가공',through2Body:'올바른 작업 적성과 시설 용량이 입력을 유용한 출력으로 바꿉니다.',through3Title:'이동',through3Body:'운반과 짧은 경로가 완제품으로 시설이 막히는 것을 방지합니다.',
    through4Title:'회복',through4Body:'먹이, 침대, 막히지 않은 접근이 작업 지속시간을 지킵니다.',fieldGuideCard:'필드 가이드',fieldGuideCardDesc:'전술 24개와 세션 계획 6종',
    serverCard:'서버 설정',serverCardDesc:'작업 팰·거점 제한 안전 설정',troubleCard:'문제 해결기',troubleCardDesc:'렉·설정·세이브·모드 복구',
    sourcesTitle:'출처 기준과 한계',sourcesBody:'공식 게임에는 팰을 활용한 생산, 농사, 자동화가 포함됩니다. 공식 서버 문서는 BaseCampWorkerMaxNum을 최대 50으로 설명하고 높은 값이 처리 부하를 높인다고 경고합니다. 이 플래너는 작업 흐름 역할을 모델링하며 숨겨진 AI나 실제 산출량을 계산하지 않습니다.',
    officialConfig:'공식 서버 파라미터 ↗',officialGame:'공식 게임 페이지 ↗',allTools:'← 모든 도구',copied:'거점 계획 복사됨',
    balanced:'균형 거점',balancedDesc:'일반 생존·제작',materials:'재료 생산',materialsDesc:'광석·목재·원재료',food:'식량·농사',foodDesc:'안정적인 식량 생산',
    crafting:'제작 라인',craftingDesc:'가공·제조 중심',breeding:'교배 지원',breedingDesc:'식량·목장·알 루프',defense:'원정 지원',defenseDesc:'보급·수리·예비 인력',
    casual:'간헐 운영',casualDesc:'근처에 있을 때 생산',continuous:'연속 운영',continuousDesc:'장시간 무인 주기',
    input:'입력 재료 부족',inputDesc:'원재료가 충분하지 않음',transport:'운반 정체',transportDesc:'시설·저장소가 가득 참',foodBottleneck:'식량 부족',foodBottleneckDesc:'먹이·회복 때문에 작업 중단',
    path:'경로 문제',pathDesc:'팰이 끼이거나 멀리 이동',recovery:'낮은 가동률',recoveryDesc:'잦은 휴식·중단',unknown:'잘 모르겠음',unknownDesc:'전체 루프 진단',
    resultTitle:'{goal} · 작업 팰 {workers}마리 청사진',resultSummary:'이 결과는 작업 용량 모델입니다. 보유 팰로 각 역할을 채우고 슬롯이 적으면 호환되는 작업 적성을 통합하세요.',
    loadHigh:'성능 참고: 활성 작업 팰이 20마리를 넘으면 서버 부하가 커질 수 있습니다. 더 늘리기 전에 CPU, 경로, 작업 지연을 측정하세요.',
    loadNormal:'정상 레이아웃 하나를 보관하고 배치나 시설을 한 번에 하나만 바꿔 실제 병목이 보이게 하세요.'
  };
  const titles={zh:'幻兽帕鲁据点人员规划器',hi:'Palworld बेस वर्कफोर्स प्लानर',ru:'Планировщик базы Palworld',ja:'Palworld 拠点人員プランナー',es:'Planificador de base Palworld',pt:'Planejador de base Palworld',id:'Perencana Tenaga Kerja Basis Palworld',tr:'Palworld Üs İş Gücü Planlayıcı',de:'Palworld-Basis-Personalplaner',fr:'Planificateur de base Palworld'};
  const locales={en,ko};Object.entries(titles).forEach(([l,title])=>locales[l]={...en,title});
  const roles={
    gather:['Gathering','Gather raw inputs','채집','원재료 수집','🧺'],mining:['Mining','Ore and stone','채광','광석·돌','⛏️'],lumber:['Lumbering','Wood supply','벌목','목재 공급','🪵'],
    planting:['Planting','Start crop cycles','파종','작물 주기 시작','🌱'],watering:['Watering','Grow and process','관개','작물 성장·가공','💧'],harvest:['Gather crops','Move farm output','수확','농장 산출물 회수','🌾'],
    transport:['Transport','Move inputs and outputs','운반','입출력 이동','📦'],handiwork:['Handiwork','Build and craft','수작업','건축·제작','🔧'],kindling:['Kindling','Cook and smelt','불 피우기','조리·제련','🔥'],
    cooling:['Cooling','Protect cold storage','냉각','저온 저장 유지','❄️'],electric:['Electricity','Power advanced lines','발전','고급 라인 전력','⚡'],ranch:['Ranching','Produce ranch inputs','목장','목장 재료 생산','🐑'],
    reserve:['Reserve / recovery','Cover breaks and spikes','예비·회복','휴식·수요 급증 대응','🛏️']
  };
  const goalWeights={
    balanced:{gather:2,mining:2,lumber:1,planting:1,watering:1,harvest:1,transport:3,handiwork:2,kindling:1,reserve:1},
    materials:{gather:2,mining:4,lumber:3,transport:4,handiwork:2,kindling:1,reserve:1},
    food:{planting:3,watering:2,harvest:2,transport:3,kindling:2,ranch:2,cooling:1,reserve:1},
    crafting:{gather:1,mining:3,lumber:2,transport:3,handiwork:4,kindling:2,electric:1,reserve:1},
    breeding:{planting:2,watering:2,harvest:1,ranch:3,transport:2,kindling:2,cooling:1,handiwork:1,reserve:2},
    defense:{gather:1,mining:2,lumber:1,planting:1,watering:1,transport:2,handiwork:3,kindling:1,reserve:4}
  };
  const choices={
    goals:[['balanced','⚖️'],['materials','⛏️'],['food','🌾'],['crafting','🏭'],['breeding','🥚'],['defense','🛡️']],
    paces:[['casual','☀️'],['continuous','🌙']],
    bottlenecks:[['input','🧺'],['transport','📦'],['foodBottleneck','🍲'],['path','🧭'],['recovery','🛏️'],['unknown','❓']]
  };
  const zoneText=[
    ['Input edge','Place raw-material drop points and farm collection where resources enter.','입력 구역','원재료 투입 지점과 농장 회수 지점을 자원이 들어오는 쪽에 둡니다.'],
    ['Processing core','Group stations by shared inputs while preserving clear approach paths.','가공 중심','공통 입력을 쓰는 시설을 묶되 접근 경로는 비워 둡니다.'],
    ['Output storage','Put dedicated output storage beside the final station, not across the base.','출력 저장','완제품 저장소를 거점 반대편이 아니라 최종 시설 옆에 둡니다.'],
    ['Recovery lane','Keep food, beds and recovery access outside busy transport crossings.','회복 구역','먹이·침대·회복 경로를 혼잡한 운반 교차로 밖에 둡니다.']
  ];
  const baseChecks=[
    ['Watch one full cycle before changing assignments.','배치를 바꾸기 전에 전체 작업 주기 한 번을 관찰합니다.'],
    ['Check whether inputs are empty or outputs are full when a station stops.','시설이 멈출 때 입력이 비었는지 출력이 가득 찼는지 확인합니다.'],
    ['Keep frequently moved storage within a short, unobstructed route.','자주 이동하는 저장소를 짧고 막히지 않은 경로에 둡니다.'],
    ['Change one Pal, station or route at a time and measure again.','팰·시설·경로 중 하나만 바꾸고 다시 측정합니다.']
  ];
  const bottleneckCheck={
    input:['Increase gathering capacity or shorten the raw-material route before adding processors.','가공 시설을 늘리기 전에 채집 용량이나 원재료 경로부터 개선합니다.'],
    transport:['Add transport capacity and split input storage from finished-goods storage.','운반 용량을 늘리고 입력 저장소와 완제품 저장소를 분리합니다.'],
    foodBottleneck:['Move food access closer, stabilize farming, and check whether recovery trips cross production routes.','먹이를 가깝게 두고 농사를 안정화하며 회복 이동이 생산 경로를 가로지르는지 확인합니다.'],
    path:['Widen corners, remove elevation conflicts and watch the exact point where a worker turns back.','모서리를 넓히고 높이 충돌을 없애며 작업 팰이 되돌아가는 정확한 지점을 관찰합니다.'],
    recovery:['Add reserve capacity and fix food, bed or access interruptions before increasing work speed.','작업 속도를 높이기 전에 예비 용량과 먹이·침대·접근 중단을 해결합니다.'],
    unknown:['Time one full loop from input arrival to stored output; the longest wait is the first target.','입력 도착부터 출력 저장까지 한 주기를 재고 가장 긴 대기부터 해결합니다.']
  };
  let lang=detectLang(),goal='balanced',pace='casual',bottleneck='unknown',lastAllocation=null;
  const $=id=>document.getElementById(id),t=k=>(locales[lang]||en)[k]||en[k]||k;
  function detectLang(){const p=new URLSearchParams(location.search).get('lang'),s=localStorage.getItem('app_language'),n=(navigator.language||'en').split('-')[0];return LANGS.includes(p||s||n)?p||s||n:'en'}
  function esc(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function event(name,params={}){window.gtag?.('event',name,{content_format:'palworld_base_planner',language:lang,...params})}
  function localize(){document.documentElement.lang=lang;$('language').value=lang;document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));document.querySelectorAll('[data-preserve-lang]').forEach(a=>{const u=new URL(a.href,location.href);u.searchParams.set('lang',lang);a.href=u.href});const u=new URL(location.href);u.searchParams.set('lang',lang);document.querySelector('link[rel=canonical]').href=u.href;document.querySelector('meta[property=\"og:url\"]').content=u.href;document.title=`${t('title')} · DopaBrain`}
  function renderChoices(){
    $('goalOptions').innerHTML=choices.goals.map(([id,icon])=>choiceHtml(id,icon,goal===id,'goal')).join('');
    $('paceOptions').innerHTML=choices.paces.map(([id,icon])=>choiceHtml(id,icon,pace===id,'pace')).join('');
    $('bottleneckOptions').innerHTML=choices.bottlenecks.map(([id,icon])=>choiceHtml(id,icon,bottleneck===id,'bottleneck')).join('');
  }
  function choiceHtml(id,icon,active,type){return `<button class=\"choice ${active?'active':''}\" type=\"button\" data-choice=\"${type}\" data-value=\"${id}\"><span>${icon}</span><span><strong>${esc(t(id))}</strong><small>${esc(t(id+'Desc'))}</small></span></button>`}
  function allocate(slots){
    const w={...goalWeights[goal]};if(pace==='continuous'){w.reserve=(w.reserve||0)+2;w.transport=(w.transport||0)+1}
    if(bottleneck==='transport')w.transport=(w.transport||0)+3;
    if(bottleneck==='input'){w.gather=(w.gather||0)+1;w.mining=(w.mining||0)+1;w.lumber=(w.lumber||0)+1}
    if(bottleneck==='foodBottleneck'){w.planting=(w.planting||0)+1;w.watering=(w.watering||0)+1;w.kindling=(w.kindling||0)+1}
    if(bottleneck==='recovery')w.reserve=(w.reserve||0)+3;
    const total=Object.values(w).reduce((a,b)=>a+b,0),raw=Object.entries(w).map(([id,weight])=>({id,raw:weight/total*slots,count:Math.floor(weight/total*slots)}));
    let remaining=slots-raw.reduce((a,b)=>a+b.count,0);raw.sort((a,b)=>(b.raw-b.count)-(a.raw-a.count));for(let i=0;i<remaining;i++)raw[i%raw.length].count++;
    return raw.filter(x=>x.count>0).sort((a,b)=>b.count-a.count||a.id.localeCompare(b.id));
  }
  function roleText(id){const r=roles[id];return lang==='ko'?[r[2],r[3],r[4]]:[r[0],r[1],r[4]]}
  function buildPlan(){
    const slots=Number($('workers').value),alloc=allocate(slots);lastAllocation={slots,alloc};
    $('result').hidden=false;$('resultTitle').textContent=t('resultTitle').replace('{goal}',t(goal)).replace('{workers}',slots);$('resultSummary').textContent=t('resultSummary');
    $('allocation').innerHTML=alloc.map(x=>{const r=roleText(x.id);return `<article class=\"role-card\" data-role=\"${x.id}\"><span>${r[2]}</span><div><strong>${esc(r[0])}</strong><small>${esc(r[1])}</small></div><b>${x.count}</b></article>`}).join('');
    $('zoneList').innerHTML=zoneText.map(z=>`<li><strong>${esc(lang==='ko'?z[2]:z[0])}</strong> — ${esc(lang==='ko'?z[3]:z[1])}</li>`).join('');
    const checks=[...baseChecks,bottleneckCheck[bottleneck]];$('checkList').innerHTML=checks.map(c=>`<li>${esc(lang==='ko'?c[1]:c[0])}</li>`).join('');
    $('loadWarning').textContent=t(slots>20?'loadHigh':'loadNormal');$('result').scrollIntoView({behavior:'smooth',block:'start'});
    event('palworld_base_plan_generate',{goal,pace,bottleneck,worker_slots:slots,role_count:alloc.length,load_band:slots>20?'high':'normal'});
  }
  async function copyPlan(){
    if(!lastAllocation)return;const lines=lastAllocation.alloc.map(x=>{const r=roleText(x.id);return `- ${r[0]}: ${x.count}`}),zones=zoneText.map((z,i)=>`${i+1}. ${lang==='ko'?z[2]:z[0]} — ${lang==='ko'?z[3]:z[1]}`);
    const text=`${t('title')}\n${t(goal)} · ${lastAllocation.slots}\n\n${lines.join('\n')}\n\n${t('zoneTitle')}\n${zones.join('\n')}`;
    try{await navigator.clipboard.writeText(text)}catch{const a=document.createElement('textarea');a.value=text;document.body.append(a);a.select();document.execCommand('copy');a.remove()}
    $('toast').textContent=t('copied');$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1500);event('palworld_base_plan_copy',{goal,worker_slots:lastAllocation.slots});
  }
  document.addEventListener('click',e=>{const b=e.target.closest('[data-choice]');if(!b)return;const type=b.dataset.choice,value=b.dataset.value;if(type==='goal')goal=value;if(type==='pace')pace=value;if(type==='bottleneck')bottleneck=value;renderChoices();event('palworld_base_choice',{choice_type:type,choice_value:value})});
  $('workers').addEventListener('input',e=>$('workerOutput').textContent=e.target.value);$('buildPlan').addEventListener('click',buildPlan);$('copyPlan').addEventListener('click',copyPlan);
  $('language').addEventListener('change',e=>{const had=!$('result').hidden;lang=e.target.value;localStorage.setItem('app_language',lang);const u=new URL(location.href);u.searchParams.set('lang',lang);history.replaceState({},'',u);localize();renderChoices();if(had)buildPlan();event('palworld_base_language_change')});
  document.querySelectorAll('.palworld-suite a').forEach(a=>a.addEventListener('click',()=>event('palworld_suite_click',{source:'base_planner',destination:a.href.split('/').pop().split('?')[0]})));
  localize();renderChoices();event('palworld_base_planner_view',{official_worker_max:50});
})();
