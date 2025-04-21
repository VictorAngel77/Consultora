// modules/forms.js

export function setupForms() {
    document.addEventListener("DOMContentLoaded", function () {
        const formulario = document.getElementById("formulario-contacto");
      
        formulario.addEventListener("submit", async function (e) {
          e.preventDefault(); // Prevenimos el envío normal
      
          const formData = new FormData(formulario);
      
          try {
            const response = await fetch(formulario.action, {
              method: "POST",
              body: formData,
            });
      
            const resultado = await response.json();
      
            if (resultado.success) {
              showSuccessModal(); // Tu función de modal de éxito
              formulario.reset();
            } else {
              alert("Error: " + resultado.message);
            }
          } catch (error) {
            alert("Error inesperado al enviar el formulario.");
            console.error("Error al enviar:", error);
          }
        });
      });
      

    function showSuccessModal(message) {
        const modalBody = document.getElementById('successModalBody');
        modalBody.textContent = message;
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    
        const cotizarModal = bootstrap.Modal.getInstance(document.getElementById('cotizarModal'));
        if (cotizarModal) {
            cotizarModal.hide();
        }
    
        successModal.show();
    
        setTimeout(() => {
            successModal.hide();
            const modalBackdrop = document.querySelector('.modal-backdrop');
            if (modalBackdrop) {
                modalBackdrop.remove();
            }
        }, 4000); 
    }
    
}
