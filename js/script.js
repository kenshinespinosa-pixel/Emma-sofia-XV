alert("JavaScript cargó correctamente");
console.log("Script funcionando");
// ===================================
// PANTALLA DE CARGA
// ===================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 800);

    }, 1500);

});

// ===================================
// BOTÓN ABRIR INVITACIÓN
// ===================================
const boton = document.getElementById("abrirInvitacion");

if (boton) {

    boton.addEventListener("click", () => {

        window.scrollTo({
            top: document.querySelector(".mensaje").offsetTop,
            behavior: "smooth"
        });

    });

}


// ===================================
// CUENTA REGRESIVA
// ===================================

const fechaEvento = new Date("September 26, 2026 18:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}, 1000);
