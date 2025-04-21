<?php
require __DIR__ . '/../PHPMailer/src/PHPMailer.php';
require __DIR__ . '/../PHPMailer/src/SMTP.php';
require __DIR__ . '/../PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function enviarCorreo($asunto, $cuerpo, $fromEmail, $fromName) {
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host       =  'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'victorangelsanchez7@gmail.com'; 
        $mail->Password   = 'assb sdyz xnrl owst';         
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom($_POST['email'] ?? 'no-reply@tusitio.com', $_POST['name'] ?? 'Formulario Web');
        $mail->addAddress('angelitho7777@gmail.com'); // Donde recibís los mensajes

        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje de contacto';

        // Cuerpo del mensaje
        $cuerpo = '<h3>Nuevo mensaje recibido:</h3><ul>';
        foreach ($_POST as $key => $value) {
            $cuerpo .= "<li><strong>" . htmlspecialchars($key) . ":</strong> " . nl2br(htmlspecialchars($value)) . "</li>";
        }
        $cuerpo .= '</ul>';

        $mail->Body    = $cuerpo;
        $mail->AltBody = strip_tags($cuerpo);

        $mail->send();

        // Respuesta JSON si lo querés usar desde fetch
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado con éxito.']);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => "Error al enviar: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}