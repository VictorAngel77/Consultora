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
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close hamburger menu after clicking a link in responsive mode
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navbarToggler.getAttribute('aria-expanded') === 'true') {
                navbarToggler.click();
            }
        });
    });

    // Add event listeners or other initialization code here
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
    
            const formData = new FormData(contactForm);
            const formDataObject = {}; // Inicializamos un objeto vacío
    
            // Construir el objeto con el formato deseado
            formDataObject['Nombre'] = formData.get('name');
            formDataObject['Email'] = formData.get('email');
            formDataObject['Telefono'] = formData.get('Telefono');
            formDataObject['Mensaje'] = formData.get('message');
    
            try {
                const response = await fetch('https://formspree.io/f/mnnpglob', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formDataObject)
                });
    
                if (response.ok) {
                    showSuccessModal('¡Mensaje enviado con éxito!');
                    contactForm.reset();
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

 // Cotizar form submission
const cotizarForm = document.getElementById('cotizar-form');

if (cotizarForm) {
    cotizarForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(cotizarForm);
        const formDataObject = {}; // Inicializamos un objeto vacío

        // Recopilar servicios de interés formateados
        const serviciosDeInteres = [];
        formData.forEach((value, key) => {
            if (key.startsWith('servicio') && value === 'on') {
                serviciosDeInteres.push(document.querySelector(`label[for='${key}']`).textContent.trim());
            }
        });

        // Construir el objeto con el formato deseado
        formDataObject['Servicios De Interes'] = serviciosDeInteres.join('\n');

        formDataObject['Nombre'] = formData.get('cotizarNombre');
        formDataObject['Correo'] = formData.get('cotizarEmail');
        formDataObject['Telefono'] = formData.get('cotizarTelefono');
        formDataObject['Empresa'] = formData.get('cotizarEmpresa');
        formDataObject['Mensaje Adicional'] = formData.get('cotizarMensaje');

        try {
            const response = await fetch('https://formspree.io/f/xzzejykl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataObject)
            });

            if (response.ok) {
                showSuccessModal('¡Solicitud de cotización enviada con éxito!');
                cotizarForm.reset();
                const cotizarModal = bootstrap.Modal.getInstance(document.getElementById('cotizarModal'));
                cotizarModal.hide();
            } else {
                const errorData = await response.json();
                console.error('Form submission error:', errorData);
                alert('Hubo un error al enviar la solicitud de cotización. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('Ocurrió un error de red al enviar la solicitud de cotización. Por favor, verifica tu conexión e inténtalo de nuevo.');
        }
    });
} else {
    console.log('Cotizar form not found');
}


    // Function to show the success modal
    function showSuccessModal(message) {
        const modalBody = document.getElementById('successModalBody');
        modalBody.textContent = message;
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
    }

    // WhatsApp button functionality to show modal
    const whatsappButton = document.getElementById('whatsappButton');
    whatsappButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent navigation

        showSuccessModal('Redirigiendo a WhatsApp...');

        setTimeout(() => {
            window.location.href = whatsappButton.href;
        }, 1500);
    });

    // Intersection Observer for "Por qué elegirnos" section animation
    const porQueElegirnosSection = document.getElementById('por-que-elegirnos');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCards();
            }
        });
    }, {
        threshold: 0.5 
    });

    observer.observe(porQueElegirnosSection);

    // Function to animate icons within the cards
    function animateCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('animated');
            const svg = card.querySelector('svg');
            if (svg) {
                triggerSvgAnimation(svg);

                card.addEventListener('mouseover', () => {
                    triggerSvgAnimation(svg);
                });
            }
        });
    }

    // Intersection Observer for "Nuestros Servicios" section animation
    const serviciosSection = document.getElementById('servicios');
    const observerServicios = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observerServicios.unobserve(serviciosSection); // Animate only once
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
                observerIffies.unobserve(iffiesSection); // Animate only once
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is visible
    });

    observerIffies.observe(iffiesSection);

    // Inicialización del carrusel de logos
    let logoCarousel;
    const logoCarouselElement = document.getElementById('logoCarousel');
    if (logoCarouselElement) {
        logoCarousel = new bootstrap.Carousel(logoCarouselElement, {
            interval: 5000, // Cambia cada 5 segundos
            wrap: true // Ciclo continuo
        });
    }

    // Elimina el IntersectionObserver que intentaba inicializar el carrusel
    // const observerIffiesCarousel = new IntersectionObserver((entries) => { ... });
    // observerIffiesCarousel.observe(iffiesSection);

    // Scroll-to-top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Function to show/hide the scroll-to-top button based on scroll position
    function toggleScrollToTopButton() {
        if (document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    // Add event listener to scroll event
    window.addEventListener('scroll', toggleScrollToTopButton);

    // Scroll to top when the button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Function to enable dark mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    // Function to disable dark mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }

    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
        darkModeToggle.checked = true;
    }

    // Listen for changes on the dark mode toggle
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});