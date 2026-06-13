// =====================
// DRAKO STORE
// =====================

let carrito = 0;

// Añadir producto al carrito
function agregarCarrito() {
    carrito++;

    document.getElementById("contador").textContent = carrito;

    mostrarNotificacion("Producto añadido al carrito");
}

// Notificación
function mostrarNotificacion(texto) {

    const noti = document.createElement("div");

    noti.innerText = texto;

    noti.style.position = "fixed";
    noti.style.bottom = "20px";
    noti.style.right = "20px";
    noti.style.background = "#fff";
    noti.style.color = "#000";
    noti.style.padding = "15px 20px";
    noti.style.borderRadius = "10px";
    noti.style.fontWeight = "bold";
    noti.style.zIndex = "9999";

    document.body.appendChild(noti);

    setTimeout(() => {
        noti.remove();
    }, 2000);
}

// Animación al cargar la página
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 100);
});

// Scroll suave para enlaces
document.querySelectorAll('a[href^="#"]').forEach(enlace => {

    enlace.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});
