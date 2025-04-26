// modules/forms.js
export function setupForms() {
    const contactForm = document.getElementById('contact-form');
    const cotizarForm = document.getElementById('cotizar-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
  
        const formDataObject = {
          Nombre: formData.get('name'),
          Email: formData.get('email'),
          Telefono: formData.get('Telefono'),
          Mensaje: formData.get('message')
        };
  
        await sendForm('https://formspree.io/f/mdkgkebo', formDataObject, contactForm);
      });
    }
  
    if (cotizarForm) {
      cotizarForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(cotizarForm);
  
        // Recolectar servicios seleccionados
        const servicios = formData.getAll('servicios[]');
  
        const formDataObject = {
          Nombre: formData.get('cotizarNombre'),
          Email: formData.get('cotizarEmail'),
          Empresa: formData.get('cotizarEmpresa') || 'No especificada',
          Telefono: formData.get('cotizarTelefono') || 'No especificado',
          Mensaje: formData.get('cotizarMensaje') || 'Sin mensaje adicional',
          Servicios: servicios.length > 0 ? servicios : ['Ninguno seleccionado']
        };
  
        await sendForm('https://formspree.io/f/xqaqapne', formDataObject, cotizarForm);
      });
    }
  
    async function sendForm(url, data, formElement) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          showSuccessModal('Su mensaje ha sido enviado con éxito. Nos pondremos en contacto con usted a la brevedad. ¡Gracias por elegir Bienestar Consultora!');
          formElement.reset();
        } else {
          const errorData = await response.json();
          console.error('Error en el envío:', errorData);
          alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error de red:', error);
        alert('Ocurrió un error de red. Por favor, verifica tu conexión e inténtalo de nuevo.');
      }
    }
  
    function showSuccessModal(message) {
      const modalBody = document.getElementById('successModalBody');
      if (modalBody) {
        modalBody.textContent = message;
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  
        const cotizarModal = bootstrap.Modal.getInstance(document.getElementById('cotizarModal'));
        if (cotizarModal) cotizarModal.hide();
  
        successModal.show();
  
        setTimeout(() => {
          successModal.hide();
          const modalBackdrop = document.querySelector('.modal-backdrop');
          if (modalBackdrop) modalBackdrop.remove();
        }, 4000);
      }
    }
  }
  