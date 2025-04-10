import { loadContent } from './modules/loader.js';
import { setupForms } from './modules/forms.js';
import { setupAnimations } from './modules/animations.js';
import { setupScrollToTop } from './modules/scroll.js';
import { setupNavbar } from './modules/navbar.js';

// Mover la definición de `secciones` al nivel superior para que sea accesible globalmente
const secciones = {
    'navbar-container': 'components/nav.html',
    'header-container': 'components/header.html',
    'section-intro-container': 'components/section-intro.html',
    'section-elegirnos-container': 'components/section-elegirnos.html',
    'section-servicios-container': 'components/section-servicios.html',
    'section-clientes-container': 'components/section-clientes.html',
    'section-contacto-container': 'components/section-contacto.html',
    'whatsapp-button-container': 'components/whatsapp-button.html',
    'footer-container': 'components/footer.html',
    'scroll-to-top-container': 'components/scroll-to-top.html',
    'modal-success-container': 'components/modal-success.html',
    'modal-more-services-container': 'components/modal-more-services.html',
    'modal-cotizar-container': 'components/modal-cotizar.html'
};

document.addEventListener('DOMContentLoaded', () => {
  // Diccionario de secciones a cargar dinámicamente

  // Cargar todas las secciones
  let pendingSections = Object.keys(secciones).length;

  for (const [id, url] of Object.entries(secciones)) {
    loadContent(url, id, () => {
      pendingSections--;
      if (pendingSections === 0) {
        // Inicializar funcionalidades después de cargar todas las secciones
        setupAnimations();
        setupScrollToTop();
        setupNavbar();
        setupForms();
      }
    });
  }

  // Delegación para navegación con data-cargar (opcional si usás enlaces dinámicos)
  document.body.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-cargar]');
    if (link) {
      event.preventDefault();
      const url = link.getAttribute('data-cargar');
      loadContent(url, 'section-intro-container'); // o el contenedor principal dinámico
    }
  });
});

// Detectar si hay un hash en la URL y desplazarse después de cargar todas las secciones dinámicas
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash) {
        const scrollToSection = () => {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Si el elemento aún no está disponible, esperar y volver a intentar
                setTimeout(scrollToSection, 100);
            }
        };

        // Esperar a que todas las secciones dinámicas estén cargadas
        const observer = new MutationObserver(() => {
            const allSectionsLoaded = document.querySelectorAll('[id$="-container"]:not(:empty)').length === Object.keys(secciones).length;
            if (allSectionsLoaded) {
                observer.disconnect();
                scrollToSection();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }
});

// Asegurar que el carrusel se inicialice correctamente
window.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('#logoCarousel');
    if (carouselElement) {
        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 4000, 
            ride: 'carousel' 
        });
    }
});
