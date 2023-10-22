// Genera el código QR
var qrcode = new QRCode(document.getElementById("codigoQR"), {
    text: "https://docs.google.com/forms/d/e/1FAIpQLScn4XX8yDnpWiQCNUjDuP1r97KlwtBjWp8pTLWqReTqofCiAA/viewform?usp=sf_link", // Puedes cambiar el valor de 'text' según tus necesidades
    width: 128,
    height: 128,
});
