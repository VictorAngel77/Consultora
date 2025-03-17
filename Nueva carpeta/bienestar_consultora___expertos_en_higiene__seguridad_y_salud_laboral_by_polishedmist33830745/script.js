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
                    // Show success modal
                    showSuccessModal('¡Mensaje enviado con éxito!');
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

        // Show success modal before redirecting
        showSuccessModal('Redirigiendo a WhatsApp...');

        // Redirect after a short delay to allow modal to show
        setTimeout(() => {
            window.location.href = whatsappButton.href; // Redirect to WhatsApp
        }, 1500); // Adjust delay as needed
    });

    // Intersection Observer for "Por qué elegirnos" section animation
    const porQueElegirnosSection = document.getElementById('por-que-elegirnos');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger icon animations here after section animation
                animateCards();
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    observer.observe(porQueElegirnosSection);

    // Function to animate icons within the cards
    function animateCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('animated'); // Add class to trigger CSS animation
            const svg = card.querySelector('svg');
            if (svg) {
                // Trigger animation for each SVG icon
                //triggerSvgAnimation(svg);

                // Reset animation on mouse hover
                /*card.addEventListener('mouseover', () => {
                    triggerSvgAnimation(svg);
                });*/
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

    let logoCarousel;

    // Function to initialize carousel if it is not already initialized
    function initializeCarousel() {
        if (!logoCarousel) {
            logoCarousel = new bootstrap.Carousel(document.getElementById('logoCarousel'), {
                interval: 5000, // Change every 5 seconds
                wrap: true // Cycle continuously
            });
        }
    }

    // Intersection Observer for "Ellos confían en nosotros" section animation
    const observerIffiesCarousel = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Initialize carousel when the section is in view
                initializeCarousel();
                observerIffiesCarousel.unobserve(iffiesSection); // Animate only once
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the section is visible
    });

    observerIffiesCarousel.observe(iffiesSection);

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