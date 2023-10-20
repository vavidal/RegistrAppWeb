// Genera el código QR
var qrcode = new QRCode(document.getElementById("codigoQR"), {
    text: "https://www.ejemplo.com", // Puedes cambiar el valor de 'text' según tus necesidades
    width: 128,
    height: 128,
});
