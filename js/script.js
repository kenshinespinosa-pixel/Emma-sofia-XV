/*=========================================
  XV AÑOS EMMA SOFÍA
  script.js - Versión 1.0
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // Loader
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";
            loader.style.transition = "opacity 1s";

            setTimeout(() => {
                loader.style.display = "none";
            }, 1000);
        }
    }, 2000);

    // Botón Abrir Invitación
    const boton = document.getElementById("abrirInvitacion");

    if (boton) {
        boton.addEventListener("click", () => {

            const mensaje = document.querySelector(".mensaje");

            if (mensaje) {
                mensaje.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    }

});
