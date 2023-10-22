// function generarCodigoQR() {
//     // Redirige a la página que muestra el código QR
//     window.location.href = "generar-codigo-qr.html";
// }
// Función para mostrar el modal
function openQRModal() {
    const modal = document.getElementById("qrModal");
    modal.style.display = "block";
    
    const data = {
        id: "ASY4131",
        materia: "Arquitectura",
        clases: [
          { fecha: "2023-09-01", presente: true },
          { fecha: "2023-09-02", presente: true },
          { fecha: "2023-09-03", presente: true },
          { fecha: "2023-09-04", presente: true },
          { fecha: "2023-09-05", presente: true },
          { fecha: "2023-09-05", presente: false }
        ],
        profesor: "María",
        correo: "maria.rodri@profesorduocuc.cl"
      };
      
      const qr = new QRious({
        element: document.getElementById("qr-canvas"),
        value: JSON.stringify(data) // Convierte el objeto JSON a una cadena y úsala como valor del código QR
      });
      
}

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
