// modules/navbar.js

// Ajustar el comportamiento de los enlaces del menú para manejar navegación entre páginas
export function setupNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarCollapse.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    navbarToggler.click(); // Simula un clic para cerrar el menú
                }
            }
        });
    }

    const cotizarButton = document.querySelector('#cotizarButton');
    if (cotizarButton) {
        cotizarButton.addEventListener('click', () => {
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                navbarToggler.click(); // Simula un clic para cerrar el menú
            }
        });
    }

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    event.preventDefault(); 
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
