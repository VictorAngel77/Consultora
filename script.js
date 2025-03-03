  $(document).ready(function () {
    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 59 // Correct for header height
        }, 800);
      }
    });

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Cuando se hace clic en el icono de hamburguesa, se activa o desactiva el menú
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el evento se propague a document
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Cierra el menú cuando se hace clic fuera del menú
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });

  // Cierra el menú al hacer clic en un enlace del menú
  const menuLinks = document.querySelectorAll('.nav-links a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
  
    // Scroll to top animation
    $('#scrollToTopBtn').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });

    // Form submission handling
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
      var formData = $(this).serialize();
      $.ajax({
        url: 'https://formspree.io/f/YOUR_FORM_ID', // Replace with your Formspree endpoint
        type: 'POST',
        data: formData,
        dataType: 'json',
        beforeSend: function () {
          $('#contactForm button[type="submit"]').prop('disabled', true).text('Enviando...');
        },
        success: function (data) {
          $('#contactForm button[type="submit"]').prop('disabled', false).text('Mensaje Enviado');
          $('#contactForm')[0].reset();
          alert('¡Gracias! Su mensaje ha sido enviado.');
        },
        error: function (xhr, status, error) {
          $('#contactForm button[type="submit"]').prop('disabled', false).text('Enviar Mensaje');
          alert('Error: ' + error);
        }
      });
    });
  });

  // Theme toggle function
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }

  // Check for saved theme
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  