<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];
    
    // Configuración del correo electrónico
    $destinatario = "lautaroperezga@gmail.com";
    $asunto = "Nuevo mensaje del formulario de contacto";
    $cuerpoMensaje = "Nombre: " . $nombre . "\n";
    $cuerpoMensaje .= "Correo electrónico: " . $correo . "\n";
    $cuerpoMensaje .= "Mensaje: " . $mensaje;
    
    // Envío del correo electrónico
    $resultado = mail($destinatario, $asunto, $cuerpoMensaje);
    
    if ($resultado) {
        echo "El mensaje se envió correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
}
?>
