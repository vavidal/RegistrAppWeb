document.addEventListener('DOMContentLoaded', function() {

  const formulario = document.getElementById('formulario_2');

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

        //Validación de credenciales.
        const usuario = data.find(profesor => (profesor.email === emailUsuario || profesor.username === emailUsuario) && profesor.password === contrasena);
        
        if (usuario) {
            //Extraer las siglas de materia del profesor.
            const materia = usuario.siglas;
            const email = usuario.email;
            const nombre = usuario.username;
            const carrera = usuario.carrera;

            localStorage.setItem ('materia', materia);
            localStorage.setItem ('email', email);
            localStorage.setItem ('nombre', nombre);
            localStorage.setItem ('carrera', carrera);
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

