document.addEventListener('DOMContentLoaded', function() {

  const formulario = document.getElementById('formulario_2');
  const iniciarSesionBtn = document.getElementById('iniciarSesionBtn');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Obtener los valores ingresados por el usuario
    const emailUsuario = document.getElementById('emailUserIn').value;
    const contrasena = document.getElementById('pwsIngresada').value;

    // Realizar una solicitud HTTP para verificar las credenciales
    const url = 'http://localhost:3000/profesor';

    fetch(url)
      .then(response => response.json())
      .then(data => {

          const usuario = data.find(profesor => (profesor.email === emailUsuario || profesor.username === emailUsuario) && profesor.password === contrasena);
          
          if (usuario) {
              // Las credenciales son válidas, puedes redirigir al usuario a la página de inicio
              const materia = usuario.siglas;
              console.log (materia);
              localStorage.setItem ('materia', materia);
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

