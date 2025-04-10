// modules/scroll.js

// Modificar setupScrollToTop para manejar la carga dinámica del botón
export function setupScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (!scrollToTopBtn) {
        console.log('No se encontró el botón scrollToTopBtn. Esperando a que se cargue...');
        document.addEventListener('DOMContentLoaded', () => {
            const loadedScrollToTopBtn = document.getElementById('scrollToTopBtn');
            if (loadedScrollToTopBtn) {
                initializeScrollToTop(loadedScrollToTopBtn);
            }
        });
        return;
    }

    initializeScrollToTop(scrollToTopBtn);
}

function initializeScrollToTop(button) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
