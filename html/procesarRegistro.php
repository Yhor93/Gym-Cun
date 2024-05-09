<?php
// Verificar si se están recibiendo datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Imprimir los datos recibidos
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
} else {
    // Si no se están recibiendo datos por POST, mostrar un mensaje de error
    echo "No se han recibido datos del formulario.";
}
?>

<?php
// Incluir el archivo de conexión
include 'conexion.php';

// Verificar si se recibieron datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar los datos del formulario
    $usuario = $_POST["usuario"];
    $nombre = $_POST["nombre"];
    $password = $_POST["password"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $plan = $_POST["plan"];
    
    // Insertar los datos en la base de datos
    $sql = "INSERT INTO Usuario (NombreUsuario, NombreApellido, Contraseña, CorreoElectronico, Telefono, Plan) VALUES ('$usuario', '$nombre', '$password', '$correo', '$telefono', '$plan')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar el usuario: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>