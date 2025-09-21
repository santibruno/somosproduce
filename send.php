<?php
// Configuración de email de destino
$to      = "santib1502@gmail.com"; // 📌 Cambiá esto por tu casilla real
$subject = "Nuevo mensaje desde el sitio web";

// Validar que existan datos
if (
    !isset($_POST['name']) || 
    !isset($_POST['email']) || 
    !isset($_POST['message'])
) {
    http_response_code(400);
    echo json_encode(["status" => "error", "msg" => "Faltan campos"]);
    exit;
}

$name    = strip_tags(trim($_POST['name']));
$email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$message = strip_tags(trim($_POST['message']));

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "msg" => "Email inválido"]);
    exit;
}

// Armar cuerpo del mail
$body = "
Nuevo mensaje desde el formulario de contacto:

Nombre: $name
Email: $email

Mensaje:
$message
";

// Cabeceras
$headers  = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviar mail
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["status" => "success"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "msg" => "No se pudo enviar"]);
}
?>
