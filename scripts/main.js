import { loadContent } from './modules/loader.js';
import { setupForms } from './modules/forms.js';
import { setupAnimations } from './modules/animations.js';
import { setupScrollToTop } from './modules/scroll.js';
import { setupNavbar } from './modules/navbar.js';

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

// Ajustar el desplazamiento al navegar a un ancla con margen adicional
const adjustScrollOffset = (hash) => {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        const additionalOffset = 50;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight - additionalOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};

// Deshabilitar controles del carrusel en pantallas pequeñas
const disableCarouselControlsOnSmallScreens = () => {
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    const updateControlsState = () => {
        if (window.innerWidth <= 768) {
            if (prevButton) {
                prevButton.style.pointerEvents = 'none';
                prevButton.style.opacity = '0.5';
            }
            if (nextButton) {
                nextButton.style.pointerEvents = 'none';
                nextButton.style.opacity = '0.5';
            }
        } else {
            if (prevButton) {
                prevButton.style.pointerEvents = '';
                prevButton.style.opacity = '';
            }
            if (nextButton) {
                nextButton.style.pointerEvents = '';
                nextButton.style.opacity = '';
            }
        }
    };

    updateControlsState();
    window.addEventListener('resize', updateControlsState);
};

document.addEventListener('DOMContentLoaded', () => {
    let pendingSections = Object.keys(secciones).length;

    for (const [id, url] of Object.entries(secciones)) {
        loadContent(url, id, () => {
            pendingSections--;
            if (pendingSections === 0) {
                // Inicializar funcionalidades una vez cargadas todas las secciones
                setupAnimations();
                setupScrollToTop();
                setupNavbar();
                setupForms();
                disableCarouselControlsOnSmallScreens();

                const carouselElement = document.querySelector('#logoCarousel');
                if (carouselElement) {
                    new bootstrap.Carousel(carouselElement, {
                        interval: 4000,
                        ride: 'carousel'
                    });
                }

                const hash = window.location.hash;
                if (hash) {
                    setTimeout(() => {
                        adjustScrollOffset(hash);
                    }, 300);
                }

                // Carrusel draggable
                const carousel = document.querySelector('#logoCarousel .carousel-inner');
                if (carousel) {
                    let isDown = false;
                    let startX, scrollLeft;

                    carousel.addEventListener('mousedown', (e) => {
                        isDown = true;
                        startX = e.pageX;
                        scrollLeft = carousel.scrollLeft;
                        carousel.style.cursor = 'grabbing';
                    });

                    carousel.addEventListener('mouseleave', () => {
                        isDown = false;
                        carousel.style.cursor = 'grab';
                    });

                    carousel.addEventListener('mouseup', () => {
                        isDown = false;
                        carousel.style.cursor = 'grab';
                    });

                    carousel.addEventListener('mousemove', (e) => {
                        if (!isDown) return;
                        e.preventDefault();
                        const x = e.pageX;
                        const walk = (x - startX) * 2;
                        carousel.scrollLeft = scrollLeft - walk;
                    });

                    // Swipe en móviles
                    let touchStartX = 0;
                    let touchEndX = 0;

                    carousel.addEventListener('touchstart', (e) => {
                        touchStartX = e.changedTouches[0].screenX;
                    });

                    carousel.addEventListener('touchend', (e) => {
                        touchEndX = e.changedTouches[0].screenX;
                        const threshold = 50;
                        if (touchEndX < touchStartX - threshold) {
                            document.querySelector('#logoCarousel .carousel-control-next')?.click();
                        }
                        if (touchEndX > touchStartX + threshold) {
                            document.querySelector('#logoCarousel .carousel-control-prev')?.click();
                        }
                    });
                }

                // Reforzar layout reflow
                setTimeout(() => {
                    window.scrollBy(0, 1);
                    window.scrollBy(0, -1);
                }, 100);
            }
        });
    }

    // Delegación para navegación dinámica (si usás enlaces con data-cargar)
    document.body.addEventListener('click', (event) => {
        const link = event.target.closest('a[data-cargar]');
        if (link) {
            event.preventDefault();
            const url = link.getAttribute('data-cargar');
            loadContent(url, 'section-intro-container');
        }
    });
});
