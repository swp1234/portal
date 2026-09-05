(function () {
  'use strict';

  var STORAGE_KEY = 'palworld_breeding_notebook_v1';
  var LOCALES = ['en', 'ko', 'zh', 'hi', 'ru', 'ja', 'es', 'pt', 'id', 'tr', 'de', 'fr'];
  var EN = {
    pageTitle: 'Palworld Breeding Notebook: Parent, Trait & Egg Tracker',
    pageDescription: 'Track Palworld breeding projects, parent pairs, target traits and egg progress privately in your browser.',
    skip: 'Skip to new project', fieldGuide: '← Field guide', language: 'Language',
    eyebrow: 'PALWORLD BREEDING LAB · LOCAL NOTEBOOK', title: 'Palworld Breeding Experiment Notebook',
    lead: 'Track parent pairs, target traits, planned eggs and results. Your project text stays in this browser and can be exported as a backup.',
    chipParents: 'Parent pairs', chipTraits: 'Target traits', chipProgress: 'Egg progress', chipBackup: 'JSON backup',
    privacyTitle: 'Private by design', privacyBody: 'Notes are saved only in local browser storage. They are not placed in the URL or sent with analytics. Export a backup before clearing browser data.',
    projects: 'Projects', active: 'Active', hatched: 'Eggs logged', progress: 'Progress',
    newKicker: 'NEW EXPERIMENT', newTitle: 'Record a breeding goal', projectName: 'Project name',
    projectPlaceholder: 'Fast travel mount line', parentA: 'Parent A', parentB: 'Parent B',
    parentPlaceholder: 'Pal name / identifier', traits: 'Target traits', traitsPlaceholder: 'Comma-separated goals',
    plannedEggs: 'Planned eggs', status: 'Status', paused: 'Paused', complete: 'Complete',
    notes: 'Experiment note', notesPlaceholder: 'Why this pair, what to keep, what to change next…',
    addProject: 'Add project', ad: 'Advertisement', notebookKicker: 'EXPERIMENT NOTEBOOK',
    notebookTitle: 'Breeding projects', export: 'Export JSON', import: 'Import JSON', all: 'All',
    searchPlaceholder: 'Search projects…', emptyTitle: 'No experiments yet',
    emptyBody: 'Add a parent pair above. Your notebook will appear here.',
    noMatchTitle: 'No matching projects', noMatchBody: 'Try another filter or search.',
    workflowKicker: 'REPEATABLE WORKFLOW', workflowTitle: 'Turn breeding into an experiment',
    flow1Title: 'Define one target', flow1Body: 'A role and a small trait set make each batch interpretable.',
    flow2Title: 'Record the parents', flow2Body: 'Names or identifiers let you repeat a promising line.',
    flow3Title: 'Log every batch', flow3Body: 'Count eggs and note which result changes the next attempt.',
    flow4Title: 'Export the evidence', flow4Body: 'Keep a JSON backup outside the browser before major changes.',
    fieldCard: 'Field Guide', fieldCardDesc: 'Breeding principles and 24 tactics',
    baseCard: 'Base Planner', baseCardDesc: 'Plan the ranch, food and transport loop',
    serverCard: 'Server Settings', serverCardDesc: 'Adjust egg time and worker limits',
    allTools: '← All tools', eggs: 'eggs', target: 'Target', copy: 'Copy summary',
    duplicate: 'Duplicate', delete: 'Delete', changeStatus: 'Change status', noTraits: 'No target traits',
    copied: 'Summary copied', copyFailed: 'Could not copy the summary', added: 'Project added',
    duplicated: 'Project duplicated', deleted: 'Project deleted', exported: 'Backup exported',
    imported: 'projects imported', importFailed: 'This file is not a valid notebook backup',
    deleteConfirm: 'Delete this breeding project?', statusChanged: 'Status updated'
  };
  var KO = {
    pageTitle: '팰월드 교배 실험 노트: 부모·특성·알 추적기',
    pageDescription: '팰월드 교배 프로젝트와 부모 조합, 목표 특성, 알 진행률을 브라우저에 비공개로 기록하세요.',
    skip: '새 프로젝트로 이동', fieldGuide: '← 필드 가이드', language: '언어',
    eyebrow: '팰월드 교배 실험실 · 로컬 노트', title: '팰월드 교배 실험 노트',
    lead: '부모 조합, 목표 특성, 예정 알 수와 결과를 기록하세요. 프로젝트 내용은 이 브라우저에만 저장되며 백업 파일로 내보낼 수 있습니다.',
    chipParents: '부모 조합', chipTraits: '목표 특성', chipProgress: '알 진행률', chipBackup: 'JSON 백업',
    privacyTitle: '기기 안에만 저장', privacyBody: '노트는 현재 브라우저의 로컬 저장소에만 보관됩니다. URL이나 분석 데이터에 포함되지 않습니다. 브라우저 데이터를 지우기 전 백업하세요.',
    projects: '프로젝트', active: '진행 중', hatched: '기록한 알', progress: '전체 진행률',
    newKicker: '새 실험', newTitle: '교배 목표 기록', projectName: '프로젝트 이름',
    projectPlaceholder: '빠른 이동 탈것 계통', parentA: '부모 A', parentB: '부모 B',
    parentPlaceholder: '팰 이름 / 식별자', traits: '목표 특성', traitsPlaceholder: '쉼표로 목표 구분',
    plannedEggs: '예정 알 수', status: '상태', paused: '일시 중지', complete: '완료',
    notes: '실험 메모', notesPlaceholder: '이 조합을 고른 이유와 다음에 바꿀 점…',
    addProject: '프로젝트 추가', ad: '광고', notebookKicker: '실험 노트',
    notebookTitle: '교배 프로젝트', export: 'JSON 내보내기', import: 'JSON 가져오기', all: '전체',
    searchPlaceholder: '프로젝트 검색…', emptyTitle: '아직 실험이 없습니다',
    emptyBody: '위에서 부모 조합을 추가하면 이곳에 기록됩니다.',
    noMatchTitle: '조건에 맞는 프로젝트가 없습니다', noMatchBody: '필터나 검색어를 바꿔보세요.',
    workflowKicker: '반복 가능한 절차', workflowTitle: '교배를 실험으로 바꾸기',
    flow1Title: '목표 하나 정의', flow1Body: '역할과 소수의 특성만 정하면 각 결과를 해석하기 쉽습니다.',
    flow2Title: '부모 기록', flow2Body: '이름이나 식별자를 남기면 유망한 계통을 다시 만들 수 있습니다.',
    flow3Title: '배치마다 기록', flow3Body: '알 수와 다음 시도를 바꿀 결과를 메모하세요.',
    flow4Title: '증거 내보내기', flow4Body: '큰 변경 전 브라우저 밖에 JSON 백업을 보관하세요.',
    fieldCard: '필드 가이드', fieldCardDesc: '교배 원칙과 24가지 전술',
    baseCard: '거점 플래너', baseCardDesc: '목장·먹이·운반 흐름 설계',
    serverCard: '서버 설정', serverCardDesc: '알 시간과 작업 인원 조절',
    allTools: '← 모든 도구', eggs: '개 알', target: '목표', copy: '요약 복사',
    duplicate: '복제', delete: '삭제', changeStatus: '상태 변경', noTraits: '목표 특성 없음',
    copied: '요약을 복사했습니다', copyFailed: '요약을 복사하지 못했습니다', added: '프로젝트를 추가했습니다',
    duplicated: '프로젝트를 복제했습니다', deleted: '프로젝트를 삭제했습니다', exported: '백업을 내보냈습니다',
    imported: '개 프로젝트를 가져왔습니다', importFailed: '올바른 노트 백업 파일이 아닙니다',
    deleteConfirm: '이 교배 프로젝트를 삭제할까요?', statusChanged: '상태를 변경했습니다'
  };
  var TITLES = {
    zh: '幻兽帕鲁配种实验笔记', hi: 'Palworld प्रजनन प्रयोग नोटबुक',
    ru: 'Журнал экспериментов по разведению Palworld', ja: 'Palworld 配合実験ノート',
    es: 'Cuaderno de cría de Palworld', pt: 'Caderno de reprodução de Palworld',
    id: 'Catatan eksperimen breeding Palworld', tr: 'Palworld yetiştirme deney defteri',
    de: 'Palworld-Zuchtexperiment-Notizbuch', fr: 'Carnet d’expériences d’élevage Palworld'
  };

  var params = new URLSearchParams(location.search);
  var requested = params.get('lang');
  var stored = '';
  try { stored = localStorage.getItem('app_language') || ''; } catch (ignore) {}
  var browserLocale = (navigator.language || 'en').toLowerCase().split('-')[0];
  var locale = LOCALES.indexOf(requested) >= 0 ? requested : (LOCALES.indexOf(stored) >= 0 ? stored : (LOCALES.indexOf(browserLocale) >= 0 ? browserLocale : 'en'));
  var copy = locale === 'ko' ? KO : Object.assign({}, EN, TITLES[locale] ? { title: TITLES[locale], pageTitle: TITLES[locale] + ' | DopaBrain' } : {});
  var projects = loadProjects();
  var filter = 'all';

  var elements = {
    form: document.getElementById('projectForm'), list: document.getElementById('projectList'),
    empty: document.getElementById('emptyState'), filters: document.getElementById('filters'),
    search: document.getElementById('search'), language: document.getElementById('language'),
    importFile: document.getElementById('importFile'), toast: document.getElementById('toast')
  };

  function clamp(value, min, max) { return Math.min(max, Math.max(min, Number(value) || 0)); }
  function clean(value, max) { return String(value == null ? '' : value).trim().slice(0, max); }
  function id() { return 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 9); }
  function normalize(raw, newId) {
    if (!raw || typeof raw !== 'object') return null;
    var name = clean(raw.name, 60);
    var parentA = clean(raw.parentA, 50);
    var parentB = clean(raw.parentB, 50);
    if (!name || !parentA || !parentB) return null;
    var planned = clamp(raw.planned, 1, 999);
    var hatched = clamp(raw.hatched, 0, planned);
    var validStatus = ['active', 'paused', 'complete'].indexOf(raw.status) >= 0 ? raw.status : 'active';
    if (hatched >= planned) validStatus = 'complete';
    var traits = Array.isArray(raw.traits) ? raw.traits : String(raw.traits || '').split(',');
    return {
      id: newId ? id() : clean(raw.id, 80) || id(), name: name, parentA: parentA, parentB: parentB,
      traits: traits.map(function (item) { return clean(item, 50); }).filter(Boolean).slice(0, 12),
      planned: planned, hatched: hatched, status: validStatus, notes: clean(raw.notes, 500),
      createdAt: clean(raw.createdAt, 40) || new Date().toISOString(),
      updatedAt: clean(raw.updatedAt, 40) || new Date().toISOString()
    };
  }
  function loadProjects() {
    try {
      var parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return (Array.isArray(parsed) ? parsed : []).slice(0, 200).map(function (item) { return normalize(item, false); }).filter(Boolean);
    } catch (ignore) { return []; }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); } catch (ignore) {}
  }
  function track(name, data) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, Object.assign({
      event_category: 'engagement', source_app: 'palworld_breeding_notebook',
      surface_name: 'palworld_breeding_notebook', content_locale: locale, revenue_goal: 'daily_0_10'
    }, data || {}));
  }
  function toast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { elements.toast.classList.remove('show'); }, 2200);
  }
  function node(tag, className, textValue) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (textValue != null) el.textContent = textValue;
    return el;
  }
  function button(textValue, action, className) {
    var el = node('button', className || '', textValue);
    el.type = 'button'; el.dataset.action = action;
    return el;
  }
  function renderStats() {
    var planned = projects.reduce(function (sum, project) { return sum + project.planned; }, 0);
    var hatched = projects.reduce(function (sum, project) { return sum + project.hatched; }, 0);
    document.getElementById('statProjects').textContent = String(projects.length);
    document.getElementById('statActive').textContent = String(projects.filter(function (project) { return project.status === 'active'; }).length);
    document.getElementById('statEggs').textContent = String(hatched);
    document.getElementById('statRate').textContent = (planned ? Math.round(hatched / planned * 100) : 0) + '%';
  }
  function summary(project) {
    var lines = [project.name, project.parentA + ' × ' + project.parentB];
    if (project.traits.length) lines.push(copy.target + ': ' + project.traits.join(', '));
    lines.push(project.hatched + '/' + project.planned + ' ' + copy.eggs + ' · ' + copy[project.status]);
    if (project.notes) lines.push(project.notes);
    return lines.join('\n');
  }
  function projectCard(project) {
    var card = node('article', 'project-card');
    card.dataset.id = project.id;
    var head = node('div', 'project-card-head');
    head.appendChild(node('h3', '', project.name));
    head.appendChild(node('span', 'status-pill ' + project.status, copy[project.status]));
    card.appendChild(head);
    card.appendChild(node('p', 'pair', project.parentA + ' × ' + project.parentB));
    var traits = node('div', 'trait-list');
    (project.traits.length ? project.traits : [copy.noTraits]).forEach(function (trait) { traits.appendChild(node('span', '', trait)); });
    card.appendChild(traits);
    if (project.notes) card.appendChild(node('p', 'project-note', project.notes));
    var row = node('div', 'progress-row');
    var controls = node('div', 'progress-controls');
    controls.appendChild(button('−', 'minus'));
    controls.appendChild(button('+', 'plus'));
    row.appendChild(controls);
    var trackEl = node('div', 'progress-track');
    var fill = node('span'); fill.style.width = Math.round(project.hatched / project.planned * 100) + '%';
    trackEl.appendChild(fill); row.appendChild(trackEl);
    row.appendChild(node('span', 'progress-label', project.hatched + ' / ' + project.planned + ' ' + copy.eggs));
    card.appendChild(row);
    var actions = node('div', 'card-actions');
    actions.appendChild(button(copy.changeStatus, 'status'));
    actions.appendChild(button(copy.copy, 'copy'));
    actions.appendChild(button(copy.duplicate, 'duplicate'));
    actions.appendChild(button(copy.delete, 'delete', 'delete'));
    card.appendChild(actions);
    return card;
  }
  function render() {
    renderStats();
    var query = elements.search.value.trim().toLowerCase();
    var visible = projects.filter(function (project) {
      var matchesFilter = filter === 'all' || project.status === filter;
      var haystack = [project.name, project.parentA, project.parentB, project.traits.join(' '), project.notes].join(' ').toLowerCase();
      return matchesFilter && (!query || haystack.indexOf(query) >= 0);
    });
    elements.list.replaceChildren();
    visible.forEach(function (project) { elements.list.appendChild(projectCard(project)); });
    elements.empty.hidden = visible.length > 0;
    elements.empty.querySelector('h3').textContent = projects.length ? copy.noMatchTitle : copy.emptyTitle;
    elements.empty.querySelector('p').textContent = projects.length ? copy.noMatchBody : copy.emptyBody;
  }
  function applyLocale() {
    document.documentElement.lang = locale;
    document.title = copy.pageTitle;
    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = copy.pageDescription;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = copy[el.dataset.i18n]; if (value) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var value = copy[el.dataset.i18nPlaceholder]; if (value) el.placeholder = value;
    });
    elements.language.value = locale;
    var canonicalUrl = 'https://dopabrain.com/portal/tools/palworld-breeding-notebook.html' + (locale === 'en' ? '' : '?lang=' + locale);
    document.querySelector('link[rel="canonical"]').href = canonicalUrl;
    document.querySelector('meta[property="og:url"]').content = canonicalUrl;
    document.querySelector('meta[property="og:title"]').content = copy.title;
    document.querySelectorAll('[data-preserve-lang]').forEach(function (link) {
      var url = new URL(link.href, location.href); url.searchParams.set('lang', locale); link.href = url.pathname + url.search;
    });
    render();
  }

  elements.form.addEventListener('submit', function (event) {
    event.preventDefault();
    var now = new Date().toISOString();
    var project = normalize({
      name: document.getElementById('projectName').value,
      parentA: document.getElementById('parentA').value,
      parentB: document.getElementById('parentB').value,
      traits: document.getElementById('traits').value,
      planned: document.getElementById('plannedEggs').value,
      hatched: 0, status: document.getElementById('status').value,
      notes: document.getElementById('notes').value, createdAt: now, updatedAt: now
    }, true);
    if (!project) return;
    projects.unshift(project); save(); elements.form.reset();
    document.getElementById('plannedEggs').value = '20'; render(); toast(copy.added);
    track('palworld_breeding_project_add', { planned_eggs: project.planned, trait_count: project.traits.length, project_count: projects.length });
  });
  elements.list.addEventListener('click', function (event) {
    var actionEl = event.target.closest('[data-action]');
    var card = event.target.closest('.project-card');
    if (!actionEl || !card) return;
    var index = projects.findIndex(function (project) { return project.id === card.dataset.id; });
    if (index < 0) return;
    var project = projects[index], action = actionEl.dataset.action;
    if (action === 'minus' || action === 'plus') {
      var delta = action === 'plus' ? 1 : -1;
      project.hatched = clamp(project.hatched + delta, 0, project.planned);
      if (project.hatched >= project.planned) project.status = 'complete';
      else if (project.status === 'complete') project.status = 'active';
      project.updatedAt = new Date().toISOString(); save(); render();
      track('palworld_breeding_progress_update', { direction: action, hatched_count: project.hatched, planned_eggs: project.planned, completion_percent: Math.round(project.hatched / project.planned * 100) });
    } else if (action === 'status') {
      var next = { active: 'paused', paused: 'complete', complete: 'active' };
      project.status = next[project.status]; project.updatedAt = new Date().toISOString(); save(); render(); toast(copy.statusChanged);
      track('palworld_breeding_status_change', { project_status: project.status });
    } else if (action === 'copy') {
      var content = summary(project);
      var copied = navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(content) : Promise.reject();
      copied.then(function () { toast(copy.copied); }).catch(function () {
        var area = document.createElement('textarea'); area.value = content; area.style.position = 'fixed'; area.style.opacity = '0';
        document.body.appendChild(area); area.select();
        try { document.execCommand('copy'); toast(copy.copied); } catch (ignore) { toast(copy.copyFailed); }
        area.remove();
      });
      track('palworld_breeding_project_copy', { project_status: project.status, trait_count: project.traits.length });
    } else if (action === 'duplicate') {
      var duplicate = normalize(Object.assign({}, project, { name: project.name + ' (copy)', hatched: 0, status: 'active' }), true);
      projects.splice(index + 1, 0, duplicate); save(); render(); toast(copy.duplicated);
      track('palworld_breeding_project_duplicate', { project_count: projects.length });
    } else if (action === 'delete' && window.confirm(copy.deleteConfirm)) {
      projects.splice(index, 1); save(); render(); toast(copy.deleted);
      track('palworld_breeding_project_delete', { project_count: projects.length });
    }
  });
  elements.filters.addEventListener('click', function (event) {
    var target = event.target.closest('[data-filter]'); if (!target) return;
    filter = target.dataset.filter;
    elements.filters.querySelectorAll('button').forEach(function (buttonEl) { buttonEl.classList.toggle('active', buttonEl === target); });
    render(); track('palworld_breeding_filter', { filter_name: filter });
  });
  elements.search.addEventListener('input', render);
  elements.language.addEventListener('change', function () {
    locale = LOCALES.indexOf(elements.language.value) >= 0 ? elements.language.value : 'en';
    copy = locale === 'ko' ? KO : Object.assign({}, EN, TITLES[locale] ? { title: TITLES[locale], pageTitle: TITLES[locale] + ' | DopaBrain' } : {});
    try { localStorage.setItem('app_language', locale); } catch (ignore) {}
    var url = new URL(location.href); url.searchParams.set('lang', locale); history.replaceState({}, '', url.pathname + url.search);
    applyLocale(); track('palworld_breeding_language_change', { selected_locale: locale });
  });
  document.getElementById('exportData').addEventListener('click', function () {
    var blob = new Blob([JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), projects: projects }, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob), link = document.createElement('a');
    link.href = url; link.download = 'palworld-breeding-notebook.json'; link.click(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    toast(copy.exported); track('palworld_breeding_export', { project_count: projects.length });
  });
  document.getElementById('importButton').addEventListener('click', function () { elements.importFile.click(); });
  elements.importFile.addEventListener('change', function () {
    var file = elements.importFile.files && elements.importFile.files[0]; if (!file) return;
    file.text().then(function (textValue) {
      var parsed = JSON.parse(textValue);
      var source = Array.isArray(parsed) ? parsed : parsed.projects;
      if (!Array.isArray(source)) throw new Error('invalid');
      var imported = source.slice(0, Math.max(0, 200 - projects.length)).map(function (item) { return normalize(item, true); }).filter(Boolean);
      projects = imported.concat(projects).slice(0, 200); save(); render();
      toast(imported.length + ' ' + copy.imported); track('palworld_breeding_import', { imported_count: imported.length, project_count: projects.length });
    }).catch(function () { toast(copy.importFailed); }).finally(function () { elements.importFile.value = ''; });
  });
  document.querySelectorAll('.palworld-suite a').forEach(function (link, position) {
    link.addEventListener('click', function () { track('palworld_suite_click', { destination_position: position + 1, destination_path: link.pathname }); });
  });
  applyLocale();
  track('palworld_breeding_notebook_view', { project_count: projects.length });
}());
