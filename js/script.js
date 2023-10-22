// function generarCodigoQR() {
//     // Redirige a la página que muestra el código QR
//     window.location.href = "generar-codigo-qr.html";
// }
// Función para mostrar el modal
// Función para mostrar el modal
function openQRModal() {
    const modal = document.getElementById("qrModal");
    modal.style.display = "block";

    fetch('http://localhost:3000/asistencia/ASY4131')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const asistencia = data.clases; // Debes asignar "data.clases" a una variable, no "data1"
            const qr = new QRious({
                element: document.getElementById("qr-canvas"),
                value: JSON.stringify(asistencia) // Utiliza la variable "asistencia" en lugar de "data1"
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
