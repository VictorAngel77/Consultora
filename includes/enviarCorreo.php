<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // -------------------------------------------------------------------------
    // Configuración del correo electrónico
    // -------------------------------------------------------------------------
    $destinatario = "victorangelsanchez7@gmail.com";
    $asunto_cotizacion = "Nueva Solicitud de Cotización";
    $asunto_contacto = "Nuevo Mensaje de Contacto";

    // -------------------------------------------------------------------------
    // Procesamiento del formulario de Cotización (si los campos existen)
    // -------------------------------------------------------------------------
    if (isset($_POST['cotizarNombre']) && isset($_POST['cotizarEmail'])) {
        $nombre = strip_tags($_POST['cotizarNombre']);
        $email = filter_var($_POST['cotizarEmail'], FILTER_SANITIZE_EMAIL);
        $empresa = isset($_POST['cotizarEmpresa']) ? strip_tags($_POST['cotizarEmpresa']) : 'No especificada';
        $telefono = isset($_POST['cotizarTelefono']) ? strip_tags($_POST['cotizarTelefono']) : 'No especificado';
        $mensaje = isset($_POST['cotizarMensaje']) ? strip_tags($_POST['cotizarMensaje']) : 'Sin mensaje';

        // Procesar los servicios de interés
        $servicios = [];
        for ($i = 1; $i <= 10; $i++) {
            if (isset($_POST["servicio$i"]) && $_POST["servicio$i"] == 'on') {
                // Aquí podrías tener un array asociativo para los nombres de los servicios
                switch ($i) {
                    case 1:
                        $servicios[] = "Habilitaciones y Certificaciones";
                        break;
                    case 2:
                        $servicios[] = "Asesoramiento y Supervisión Externa";
                        break;
                    case 3:
                        $servicios[] = "Medición y Estudios Anuales";
                        break;
                    case 4:
                        $servicios[] = "Investigación de Accidentes y Prevención";
                        break;
                    case 5:
                        $servicios[] = "Plan Estratégico de Seguridad";
                        break;
                    case 6:
                        $servicios[] = "Capacitaciones Personalizadas";
                        break;
                    case 7:
                        $servicios[] = "Indumentaria Laboral";
                        break;
                    case 8:
                        $servicios[] = "Desarrollo de Software";
                        break;
                    case 9:
                        $servicios[] = "Recursos Humanos";
                        break;
                    case 10:
                        $servicios[] = "Medio Ambiente";
                        break;
                }
            }
        }
        $servicios_interes = implode(", ", $servicios);
        if (empty($servicios_interes)) {
            $servicios_interes = "No se seleccionaron servicios";
        }

        // Construir el cuerpo del correo electrónico para cotización
        $cuerpo_cotizacion = "Solicitud de Cotización:\n\n";
        $cuerpo_cotizacion .= "Nombre: $nombre\n";
        $cuerpo_cotizacion .= "Email: $email\n";
        $cuerpo_cotizacion .= "Empresa: $empresa\n";
        $cuerpo_cotizacion .= "Teléfono: $telefono\n";
        $cuerpo_cotizacion .= "Servicios de Interés: $servicios_interes\n";
        $cuerpo_cotizacion .= "Mensaje Adicional:\n$mensaje\n";

        // Encabezados para el correo electrónico
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Enviar el correo electrónico de cotización
        if (mail($destinatario, $asunto_cotizacion, $cuerpo_cotizacion, $headers)) {
            // Éxito al enviar el correo de cotización
            header("Location: ../index.html?cotizacion_enviada=true#contacto"); // Redirige con un mensaje de éxito
            exit();
        } else {
            // Error al enviar el correo de cotización
            header("Location: ../index.html?error_cotizacion=true#contacto"); // Redirige con un mensaje de error
            exit();
        }
    }

    // -------------------------------------------------------------------------
    // Procesamiento del formulario de Contacto (si los campos existen)
    // -------------------------------------------------------------------------
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {
        $nombre_contacto = strip_tags($_POST['name']);
        $email_contacto = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $telefono_contacto = isset($_POST['Telefono']) ? strip_tags($_POST['Telefono']) : 'No especificado';
        $mensaje_contacto = strip_tags($_POST['message']);

        // Construir el cuerpo del correo electrónico para contacto
        $cuerpo_contacto = "Nuevo Mensaje de Contacto:\n\n";
        $cuerpo_contacto .= "Nombre: $nombre_contacto\n";
        $cuerpo_contacto .= "Email: $email_contacto\n";
        $cuerpo_contacto .= "Teléfono: $telefono_contacto\n";
        $cuerpo_contacto .= "Mensaje:\n$mensaje_contacto\n";

        // Encabezados para el correo electrónico
        $headers_contacto = "From: $email_contacto\r\n";
        $headers_contacto .= "Reply-To: $email_contacto\r\n";
        $headers_contacto .= "MIME-Version: 1.0\r\n";
        $headers_contacto .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Enviar el correo electrónico de contacto
        if (mail($destinatario, $asunto_contacto, $cuerpo_contacto, $headers_contacto)) {
            // Éxito al enviar el correo de contacto
            header("Location: ../index.html?contacto_enviado=true#contacto"); // Redirige con un mensaje de éxito
            exit();
        } else {
            // Error al enviar el correo de contacto
            header("Location: ../index.html?error_contacto=true#contacto"); // Redirige con un mensaje de error
            exit();
        }
    }
} else {
    // Si se intenta acceder al script directamente
    header("HTTP/1.0 403 Forbidden");
    exit();
}
?>