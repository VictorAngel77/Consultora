document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is fully loaded');

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add event listeners or other initialization code here
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const formDataObject = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('https://formspree.io/f/xyyqznyq', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formDataObject)
                });

                if (response.ok) {
                    alert('¡Mensaje enviado con éxito!');
                    contactForm.reset(); // Clear the form
                } else {
                    const errorData = await response.json();
                    console.error('Form submission error:', errorData);
                    alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                console.error('Network error:', error);
                alert('Ocurrió un error de red. Por favor, verifica tu conexión e inténtalo de nuevo.');
            }
        });
    } else {
        console.log('Contact form not found');
    }

    // Intersection Observer for "Por qué elegirnos" section animation
    const porQueElegirnosSection = document.getElementById('por-que-elegirnos');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                porQueElegirnosSection.classList.add('animate');
                // Trigger icon animations here after section animation
                animateIcons();
            } else {
                porQueElegirnosSection.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    observer.observe(porQueElegirnosSection);

    // Function to animate icons within the cards
    function animateIcons() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const svg = card.querySelector('svg');
            if (svg) {
                // Trigger animation for each SVG icon
                triggerSvgAnimation(svg);

                // Reset animation on mouse hover
                card.addEventListener('mouseover', () => {
                    triggerSvgAnimation(svg);
                });
            }
        });
    }

    // Function to trigger SVG animation
    function triggerSvgAnimation(svg) {
        // For now, let's just log a message, replace with actual animation logic
        console.log('Animating SVG:', svg);

        // Check if the SVG has a GSAP timeline associated with it
        if (svg.animationTimeline) {
            // Restart existing timeline if one is present
            svg.animationTimeline.restart();
        } else {
            // Create and store a new GSAP timeline
            svg.animationTimeline = gsap.timeline({ repeat: 0 });

            // Example animation: scaling and rotating
            svg.animationTimeline.to(svg, { duration: 1, scale: 1.2, rotate: 360, ease: "power2.out" });
            svg.animationTimeline.to(svg, { duration: 0.5, scale: 1, rotate: 0, ease: "elastic.out(1, 0.3)" });
        }
    }

    // Intersection Observer for "Nuestros Servicios" section animation
    const serviciosSection = document.getElementById('servicios');
    const observerServicios = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                serviciosSection.classList.add('animate');
                observerServicios.unobserve(serviciosSection); // Animate only once
            } else {
                serviciosSection.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is visible
    });

    observerServicios.observe(serviciosSection);

    // Intersection Observer for "Ellos confían en nosotros" section animation
    const iffiesSection = document.getElementById('iffies');
    const observerIffies = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iffiesSection.classList.add('animate');
                observerIffies.unobserve(iffiesSection); // Animate only once
            } else {
                iffiesSection.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is visible
    });

    observerIffies.observe(iffiesSection);
});