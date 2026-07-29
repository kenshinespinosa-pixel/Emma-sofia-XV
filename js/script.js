document.addEventListener("DOMContentLoaded", () => {

  // Ocultar pantalla de carga
  setTimeout(() => {
    const loader = document.getElementById("loader");

    if (loader) {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  }, 2000);


  // Botón para abrir invitación
  const boton = document.getElementById("abrirInvitacion");

  if (boton) {
    boton.addEventListener("click", () => {
      document.querySelector(".mensaje").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

});
