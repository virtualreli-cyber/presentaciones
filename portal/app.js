// Estado de la aplicación
const state = {
  curriculum: [],
  activeCourseId: 'all',
  searchQuery: '',
  modalTheme: null,
  modalCourse: null,
  selectedLang: 'castellano',
  selectedSessionSlide: 1
};

// Elementos del DOM
const courseTabsEl = document.getElementById('courseTabs');
const decksGridEl = document.getElementById('decksGrid');
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

// Cargar catálogo
async function loadCurriculum() {
  try {
    const res = await fetch('data/curriculum.json');
    if (!res.ok) throw new Error('No se pudo cargar curriculum.json');
    state.curriculum = await res.json();
  } catch (err) {
    console.warn('Fallback interno:', err.message);
    state.curriculum = getFallbackCurriculum();
  } finally {
    loadingStateEl.style.display = 'none';
    renderCourseTabs();
    renderDecks();
  }
}

function setupEventListeners() {
  // Buscador discreto
  searchInputEl.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchEl.style.display = state.searchQuery ? 'block' : 'none';
    renderDecks();
  });

  clearSearchEl.addEventListener('click', () => {
    searchInputEl.value = '';
    state.searchQuery = '';
    clearSearchEl.style.display = 'none';
    searchInputEl.focus();
    renderDecks();
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

// Renderizar tabs compactos
function renderCourseTabs() {
  let html = `
    <button class="course-tab-btn ${state.activeCourseId === 'all' ? 'active' : ''}" data-course="all">
      Todos
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
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCourseId = btn.getAttribute('data-course');
      renderDecks();
    });
  });
}

// Renderizar tarjetas de presentaciones compactas
function renderDecks() {
  decksGridEl.innerHTML = '';
  let matchCount = 0;

  for (const curso of state.curriculum) {
    if (state.activeCourseId !== 'all' && state.activeCourseId !== curso.id) {
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

      cardEl.innerHTML = `
        <div class="deck-header">
          <span class="deck-course-tag">${curso.nombre}</span>
          <span class="deck-theme-num">Tema ${tema.numeroTema}</span>
        </div>
        <div class="deck-title">${tema.titulo}</div>
        <div class="deck-footer">
          <div class="deck-meta">
            <span>${tema.castellano.sessions.length} sesiones</span>
            <span>•</span>
            <span>AVL</span>
          </div>
          <button class="btn-play">
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
  const url = `${tema.deckBase}#${slideNum}`;

  window.open(url, '_blank');
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
