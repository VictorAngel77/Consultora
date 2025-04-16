// modules/animations.js

// Importar anime.js
import anime from 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.es.js';

// Agregar animaciones a las secciones
export function setupAnimations() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
        anime({
            targets: section,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            delay: index * 200,
            easing: 'easeOutQuad',
        });
    });

    ajustarFuenteH3(); // Ajustar fuentes en la animación inicial también
}

// Animaciones para la sección "Por qué elegirnos"
export function animateElegirnos() {
    const cards = document.querySelectorAll('#section-elegirnos-container .card');
    anime({
        targets: cards,
        opacity: [0, 1],
        translateY: [50, 0],
        delay: anime.stagger(200), // Retraso escalonado entre las tarjetas
        duration: 1000,
        easing: 'easeOutQuad',
    });
}

// Animaciones para la sección "Servicios"
export function animateServicios() {
    const serviceCards = document.querySelectorAll('#section-servicios-container .service-card');
    anime({
        targets: serviceCards,
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(200), // Retraso escalonado entre las tarjetas
        duration: 1000,
        easing: 'easeOutElastic(1, .8)',
    });
}

export function animateIconsOnView() {
    const icons = document.querySelectorAll('#por-que-elegirnos .card-image');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const icon = entry.target;
                icon.classList.add('animate'); // Agrega una clase para la animación
                observer.unobserve(icon); // Deja de observar después de la primera animación
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% del ícono es visible

    icons.forEach(icon => observer.observe(icon));
}

function ajustarFuenteH3() {
    const h3s = document.querySelectorAll('h3');

    h3s.forEach(h3 => {
        const containerWidth = h3.parentElement.offsetWidth;
        let fontSize = 24; // tamaño inicial

        h3.style.fontSize = fontSize + 'px';
        h3.style.whiteSpace = 'nowrap';
        h3.style.display = 'inline-block';
        h3.style.width = 'auto';

        // Reducir el tamaño hasta que el contenido entre en el contenedor
        while (h3.scrollWidth > containerWidth && fontSize > 12) {
            fontSize--;
            h3.style.fontSize = fontSize + 'px';
        }

        // Restaurar propiedades para que quede bien visualmente
        h3.style.display = '';
        h3.style.whiteSpace = '';
        h3.style.width = '100%';
    });
}

// Ejecutar cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    animateIconsOnView();
    ajustarFuenteH3(); // Por si se cargan títulos dinámicamente
});

// También ajustar cuando se redimensiona la ventana
window.addEventListener('resize', ajustarFuenteH3);
