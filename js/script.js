// function generarCodigoQR() {
//     // Redirige a la página que muestra el código QR
//     window.location.href = "generar-codigo-qr.html";
// }
// Función para mostrar el modal
// Función para mostrar el modal

var nombre = localStorage.getItem('nombre');
var carrera = localStorage.getItem('carrera');
var email = localStorage.getItem('email');

document.getElementById("nombreProfesor").textContent = nombre;
document.getElementById("nombreCarrera").textContent = carrera;
document.getElementById("emailProfesor").textContent = email;

function openQRModal() {
    // Extraer siglas de asignatura
    const codigo = localStorage.getItem('materia');

    // URL personalizada
    const url = `http://localhost:3000/asistencia/${codigo}`;

    const modal = document.getElementById("qrModal");
    modal.style.display = "block";

    // Opciones personalizadas para el QR
    const qrOptions = {
        element: document.getElementById("qr-canvas"),
        value: "" // Inicialmente vacío
    };

    const qr = new QRious(qrOptions);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extraer materia + asistencia 
            const materia = data.materia;
            const asistencia = data.clases;

            // Crear una lista de strings representando la asistencia con indicadores de presente/ausente
            const asistenciaStrings = asistencia.map(clase => {
                const estado = clase.presente ? 'Presente' : 'Ausente';
                return `|${clase.fecha}/${estado} `;
            });


            const dataMateria = `${materia}`;
            const dataAsistencia = asistenciaStrings.join('');
            const datosQR = `Materia: ${dataMateria} Asistencia:${dataAsistencia}`;

            // Concatenar datos


            // Actualizar el valor del QR
            qr.set({
                value: datosQR
            });

        })
        .catch(error => {
            console.error('Error al recuperar datos:', error);
        });
}






// Resto del código (asociar eventos y cerrar modal) sigue igual


// Función para cerrar el modal
function closeQRModal() {
    const modal = document.getElementById("qrModal");
    modal.style.display = "none";
}

// Asocia las funciones a los botones
document.getElementById("showQRButton").addEventListener("click", openQRModal);
document.getElementById("closeQR").addEventListener("click", closeQRModal);

// Cierra el modal si el usuario hace clic fuera del contenido
window.addEventListener("click", (event) => {
    const modal = document.getElementById("qrModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function cerrarSesionBtn(){
    localStorage.clear();
    window.location.href = 'login.html';
  }