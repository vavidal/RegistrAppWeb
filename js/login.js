document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario_2');
    const iniciarSesionBtn = document.getElementById('iniciarSesionBtn');
  
    formulario.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe
      
      // Obtener los valores ingresados por el usuario
      const emailUsuario = document.getElementById('emailUserIn').value;
      const contrasena = document.getElementById('pwsIngresada').value;
  
      // Realizar una solicitud HTTP para verificar las credenciales
      fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(data => {

            const usuario = data.find(user => (user.email === emailUsuario || user.username === emailUsuario) && user.password === contrasena);
  
            if (usuario) {
                // Las credenciales son válidas, puedes redirigir al usuario a la página de inicio
                window.location.href = 'index.html';
            } else {
                // Las credenciales son inválidas, muestra un mensaje de error
                alert('Nombre de usuario o contraseña incorrectos');
            }
        })
        .catch(error => {
          console.error('Error al recuperar datos:', error);
        });
    });
  });
  