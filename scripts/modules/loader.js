import { setupForms } from './forms.js';

// Reaplicar estilos después de cargar contenido dinámico
function applyStyles(containerId) {
  const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
  linkElements.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.includes('styles/')) {
      const newLink = link.cloneNode();
      newLink.onload = () => console.log(`Estilos reaplicados para ${containerId}`);
      link.parentNode.replaceChild(newLink, link);
    }
  });
}

// Debugging function to log loaded content
function debugLoadedContent(containerId, html) {
  console.log(`Content loaded into #${containerId}:`, html);
}

// Debugging function to check if styles are loaded
function checkStylesLoaded() {
  const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
  linkElements.forEach((link) => {
    console.log(`Checking style: ${link.href}`);
    fetch(link.href)
      .then((response) => {
        if (response.ok) {
          console.log(`Style loaded successfully: ${link.href}`);
        } else {
          console.error(`Failed to load style: ${link.href}`);
        }
      })
      .catch((error) => {
        console.error(`Error loading style: ${link.href}`, error);
      });
  });
}

// modules/loader.js
export async function loadContent(url, containerId, callback = null) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
      debugLoadedContent(containerId, html); // Log the loaded content
      if (callback) callback();

      // Reaplicar estilos después de cargar contenido dinámico
      applyStyles(containerId);

      // Verificar si los estilos están cargados
      checkStylesLoaded();

      // Ejecutar setupForms si se cargan formularios dinámicamente
      if (containerId === 'modal-cotizar-container' || containerId === 'section-contacto-container') {
        setupForms();
      }

      // Asegurar que setupForms se ejecute después de que el contenido esté completamente cargado
      if (containerId === 'modal-cotizar-container') {
        setupForms();
        const modalElement = document.getElementById('cotizarModal');
        if (modalElement) {
          modalElement.addEventListener('shown.bs.modal', () => {
            setupForms();
          });
        }
      }
    }
  } catch (error) {
    console.error('Error al cargar contenido:', error);
  }
}
