// Estado de la aplicación
const state = {
  curriculum: [],
  activeCourseId: null, // null = Vista de inicio de Cursos
  searchQuery: '',
  modalTheme: null,
  modalCourse: null,
  selectedLang: 'castellano',
  selectedSessionSlide: 1
};

// Elementos del DOM
const courseTabsEl = document.getElementById('courseTabs');
const coursesViewEl = document.getElementById('coursesView');
const coursesGridEl = document.getElementById('coursesGrid');
const topicsViewEl = document.getElementById('topicsView');
const decksGridEl = document.getElementById('decksGrid');
const btnBackToCoursesEl = document.getElementById('btnBackToCourses');
const currentCourseIconEl = document.getElementById('currentCourseIcon');
const currentCourseTitleEl = document.getElementById('currentCourseTitle');
const currentCourseCountEl = document.getElementById('currentCourseCount');

const searchInputEl = document.getElementById('searchInput');
const clearSearchEl = document.getElementById('clearSearch');
const loadingStateEl = document.getElementById('loadingState');
const emptyStateEl = document.getElementById('emptyState');

// Modal
const launchModalEl = document.getElementById('launchModal');
const modalCourseBadgeEl = document.getElementById('modalCourseBadge');
const modalTitleEl = document.getElementById('modalTitle');
const modalCloseBtnEl = document.getElementById('modalCloseBtn');
const btnCancelLaunchEl = document.getElementById('btnCancelLaunch');
const btnConfirmLaunchEl = document.getElementById('btnConfirmLaunch');
const btnLangESEl = document.getElementById('btnLangES');
const btnLangVALEl = document.getElementById('btnLangVAL');
const sessionsSelectorEl = document.getElementById('sessionsSelector');

// Inicio
document.addEventListener('DOMContentLoaded', async () => {
  setupEventListeners();
  await loadCurriculum();
});

// Cargar catálogo con prevención de caché
async function loadCurriculum() {
  try {
    const res = await fetch(`data/curriculum.json?t=${Date.now()}`, { cache: 'no-cache' });
    if (!res.ok) throw new Error('No se pudo cargar curriculum.json');
    state.curriculum = await res.json();
  } catch (err) {
    console.warn('Fallback interno:', err.message);
    state.curriculum = getFallbackCurriculum();
  } finally {
    loadingStateEl.style.display = 'none';
    renderCourseTabs();
    updateView();
  }
}

function setupEventListeners() {
  // Volver a vista de cursos
  btnBackToCoursesEl.addEventListener('click', () => {
    selectCourse(null);
  });

  // Clic en el logo del encabezado vuelve a cursos
  document.querySelector('.brand')?.addEventListener('click', () => {
    selectCourse(null);
  });

  // Buscador
  searchInputEl.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchEl.style.display = state.searchQuery ? 'block' : 'none';
    updateView();
  });

  clearSearchEl.addEventListener('click', () => {
    searchInputEl.value = '';
    state.searchQuery = '';
    clearSearchEl.style.display = 'none';
    searchInputEl.focus();
    updateView();
  });

  // Idiomas en modal
  btnLangESEl.addEventListener('click', () => setModalLanguage('castellano'));
  btnLangVALEl.addEventListener('click', () => setModalLanguage('valenciano'));

  // Lanzar presentación
  btnConfirmLaunchEl.addEventListener('click', launchPresentation);
  modalCloseBtnEl.addEventListener('click', closeModal);
  btnCancelLaunchEl.addEventListener('click', closeModal);

  launchModalEl.addEventListener('click', (e) => {
    if (e.target === launchModalEl) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Seleccionar curso o volver a inicio
function selectCourse(cursoId) {
  state.activeCourseId = cursoId;
  state.searchQuery = '';
  searchInputEl.value = '';
  clearSearchEl.style.display = 'none';
  renderCourseTabs();
  updateView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Actualizar la vista (Cursos o Temas)
function updateView() {
  emptyStateEl.style.display = 'none';

  // Si hay búsqueda activa, mostrar resultados filtrados en topicsView
  if (state.searchQuery) {
    coursesViewEl.style.display = 'none';
    topicsViewEl.style.display = 'block';
    currentCourseIconEl.textContent = '🔍';
    currentCourseTitleEl.textContent = `Búsqueda`;
    btnBackToCoursesEl.style.display = 'inline-flex';
    renderDecks();
    return;
  }

  // Vista de inicio: Todas las tarjetas de Cursos
  if (state.activeCourseId === null) {
    topicsViewEl.style.display = 'none';
    coursesViewEl.style.display = 'block';
    renderCourses();
    return;
  }

  // Vista de un Curso concreto
  const curso = state.curriculum.find(c => c.id === state.activeCourseId);
  if (curso) {
    coursesViewEl.style.display = 'none';
    topicsViewEl.style.display = 'block';
    btnBackToCoursesEl.style.display = 'inline-flex';
    currentCourseIconEl.textContent = curso.icon;
    currentCourseTitleEl.textContent = curso.nombre;
    const total = curso.temas.length;
    currentCourseCountEl.textContent = `${total} presentación${total === 1 ? '' : 'es'}`;
    renderDecks();
  }
}

// Renderizar tarjetas de Cursos (Home)
function renderCourses() {
  coursesGridEl.innerHTML = '';

  for (const curso of state.curriculum) {
    const cardEl = document.createElement('div');
    cardEl.className = 'course-card';
    cardEl.style.setProperty('--course-color', curso.color || 'var(--primary)');

    const count = curso.temas.length;
    const badgeText = curso.id === '1bach' ? 'Bachillerato' : 'ESO';

    cardEl.innerHTML = `
      <div>
        <div class="course-card-top">
          <span class="course-card-icon">${curso.icon}</span>
          <span class="course-card-badge">${badgeText}</span>
        </div>
        <h2 class="course-card-title">${curso.nombre}</h2>
        <p class="course-card-stage">${curso.etapa}</p>
      </div>
      <div class="course-card-footer">
        <span class="course-card-count">${count} tema${count === 1 ? '' : 's'} disponible${count === 1 ? '' : 's'}</span>
        <span class="course-card-action">
          <span>Ver temas</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
      </div>
    `;

    cardEl.addEventListener('click', () => selectCourse(curso.id));
    coursesGridEl.appendChild(cardEl);
  }
}

// Renderizar barra superior de tabs compactos
function renderCourseTabs() {
  let html = `
    <button class="course-tab-btn ${state.activeCourseId === null ? 'active' : ''}" data-course="home">
      Cursos
    </button>
  `;

  for (const curso of state.curriculum) {
    const isActive = state.activeCourseId === curso.id;
    html += `
      <button class="course-tab-btn ${isActive ? 'active' : ''}" data-course="${curso.id}">
        ${curso.nombre}
      </button>
    `;
  }

  courseTabsEl.innerHTML = html;

  const tabButtons = courseTabsEl.querySelectorAll('.course-tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.getAttribute('data-course');
      selectCourse(courseId === 'home' ? null : courseId);
    });
  });
}

// Renderizar tarjetas de presentaciones de un curso o búsqueda
function renderDecks() {
  decksGridEl.innerHTML = '';
  let matchCount = 0;

  for (const curso of state.curriculum) {
    if (!state.searchQuery && state.activeCourseId && state.activeCourseId !== curso.id) {
      continue;
    }

    const filteredTemas = curso.temas.filter(tema => {
      if (!state.searchQuery) return true;
      const q = state.searchQuery;
      return tema.titulo.toLowerCase().includes(q) ||
             curso.nombre.toLowerCase().includes(q) ||
             tema.slug.toLowerCase().includes(q);
    });

    for (const tema of filteredTemas) {
      matchCount++;
      const cardEl = document.createElement('div');
      cardEl.className = 'deck-card';

      const sesionesCount = tema.castellano?.sessions?.length || 0;

      cardEl.innerHTML = `
        <div class="deck-header">
          <span class="deck-course-tag">${curso.nombre}</span>
          <span class="deck-theme-num">Tema ${tema.numeroTema}</span>
        </div>
        <div class="deck-title">${tema.titulo}</div>
        <div class="deck-footer">
          <div class="deck-meta">
            <span>${sesionesCount} sesiones</span>
            <span>•</span>
            <span>AVL</span>
          </div>
          <button class="btn-play" type="button">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <span>Proyectar</span>
          </button>
        </div>
      `;

      cardEl.addEventListener('click', () => openLaunchModal(curso, tema));
      decksGridEl.appendChild(cardEl);
    }
  }

  if (state.searchQuery) {
    currentCourseCountEl.textContent = `${matchCount} resultado${matchCount === 1 ? '' : 's'}`;
  }

  emptyStateEl.style.display = matchCount === 0 ? 'block' : 'none';
}

// Modal de proyección
function openLaunchModal(curso, tema) {
  state.modalCourse = curso;
  state.modalTheme = tema;

  modalCourseBadgeEl.textContent = `${curso.nombre} · Tema ${tema.numeroTema}`;
  modalTitleEl.textContent = tema.titulo;

  setModalLanguage(state.selectedLang || 'castellano');
  launchModalEl.style.display = 'flex';
}

function setModalLanguage(lang) {
  state.selectedLang = lang;

  if (lang === 'castellano') {
    btnLangESEl.classList.add('active');
    btnLangVALEl.classList.remove('active');
  } else {
    btnLangVALEl.classList.add('active');
    btnLangESEl.classList.remove('active');
  }

  renderModalSessions();
}

function renderModalSessions() {
  const tema = state.modalTheme;
  if (!tema) return;

  const sessionList = state.selectedLang === 'castellano' 
    ? tema.castellano.sessions 
    : tema.valenciano.sessions;

  const defaultSlide = state.selectedLang === 'castellano' 
    ? tema.castellano.startSlide 
    : tema.valenciano.startSlide;

  state.selectedSessionSlide = sessionList[0]?.slideNumber || defaultSlide;

  let html = '';
  sessionList.forEach((s) => {
    const isSelected = s.slideNumber === state.selectedSessionSlide;
    const isProject = s.tipo === 'proyecto';
    const icon = isProject ? '🎯' : '📖';

    html += `
      <div class="session-item ${isSelected ? 'active' : ''}" data-slide="${s.slideNumber}">
        <div class="session-item-title">
          <span>${icon}</span>
          <span>${s.titulo}</span>
        </div>
        <span class="session-item-slide">Slide #${s.slideNumber}</span>
      </div>
    `;
  });

  sessionsSelectorEl.innerHTML = html;

  const items = sessionsSelectorEl.querySelectorAll('.session-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      state.selectedSessionSlide = parseInt(item.getAttribute('data-slide'), 10);
    });
  });
}

function launchPresentation() {
  const tema = state.modalTheme;
  if (!tema) return;

  const slideNum = state.selectedSessionSlide;
  const baseUrl = window.location.href.split('#')[0].split('?')[0];
  const deckBaseUrl = new URL(tema.deckBase, normalizedBase).href;
  const targetUrl = `${deckBaseUrl}?t=${Date.now()}#${slideNum}`;

  window.open(targetUrl, '_blank');
  closeModal();
}

function closeModal() {
  launchModalEl.style.display = 'none';
  state.modalTheme = null;
}

function getFallbackCurriculum() {
  return [
    {
      id: "1eso",
      nombre: "1º de ESO",
      temas: [
        {
          id: "1eso-tema-01",
          numeroTema: 1,
          titulo: "La Creación y la Casa Común",
          deckBase: "decks/1eso-tema-01/",
          castellano: { startSlide: 1, sessions: [{ titulo: "Sesión 1", slideNumber: 1 }, { titulo: "Sesión 2", slideNumber: 4 }, { titulo: "Proyecto Final", tipo: "proyecto", slideNumber: 6 }] },
          valenciano: { startSlide: 11, sessions: [{ titulo: "Sessió 1", slideNumber: 11 }, { titulo: "Sessió 2", slideNumber: 14 }, { titulo: "Projecte Final", tipo: "proyecto", slideNumber: 16 }] }
        }
      ]
    }
  ];
}
