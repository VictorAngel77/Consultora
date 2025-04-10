// modules/forms.js

export function setupForms() {
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

    // Asegurar que el formulario se configure después de cargar dinámicamente el contenido
    const cotizarForm = document.getElementById('cotizar-form');

    if (cotizarForm) {
        cotizarForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(cotizarForm);
            const formDataObject = {};

            // Recopilar datos del formulario
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

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
                    showSuccessModal('¡Solicitud enviada con éxito!');
                    cotizarForm.reset();
                } else {
                    alert('Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.');
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                alert('Ocurrió un error al enviar la solicitud. Por favor, verifica tu conexión.');
            }
        });
    } else {
        console.log('Cotizar form not found. Asegúrate de que el contenido del modal se haya cargado correctamente.');

        // Reintentar configurar el formulario después de un breve retraso
        setTimeout(() => {
            const retryForm = document.getElementById('cotizar-form');
            if (retryForm) {
                retryForm.addEventListener('submit', async (event) => {
                    event.preventDefault();

                    const formData = new FormData(retryForm);
                    const formDataObject = {};

                    formData.forEach((value, key) => {
                        formDataObject[key] = value;
                    });

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
                            showSuccessModal('¡Solicitud enviada con éxito!');
                            retryForm.reset();
                        } else {
                            alert('Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.');
                        }
                    } catch (error) {
                        console.error('Error al enviar el formulario:', error);
                        alert('Ocurrió un error al enviar la solicitud. Por favor, verifica tu conexión.');
                    }
                });
            }
        }, 1000); // Reintentar después de 1 segundo
    }

    // Modificar la función showSuccessModal para asegurar que el modal se cierre correctamente
    function showSuccessModal(message) {
        const modalBody = document.getElementById('successModalBody');
        modalBody.textContent = message;
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));

        successModal.show();

        // Asegurar que el modal se cierre correctamente después de un tiempo
        setTimeout(() => {
            successModal.hide();
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
                modalBackdrop.remove();
            }
        }, 3000); // Cerrar el modal después de 3 segundos
    }
}
