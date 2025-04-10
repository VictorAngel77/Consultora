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
