// ======================================
// PANTALLA DE CARGA
// ======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1800);

});

// ======================================
// BOTÓN ABRIR INVITACIÓN
// ======================================

const abrir = document.getElementById("abrirInvitacion");

if(abrir){

    abrir.addEventListener("click",()=>{

        document.querySelector(".bienvenida").scrollIntoView({

            behavior:"smooth"

        });

    });

}

// ======================================
// CUENTA REGRESIVA
// ======================================

const fechaEvento = new Date("2026-09-26T18:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        return;

    }

    const dias = Math.floor(diferencia/(1000*60*60*24));

    const horas = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((diferencia%(1000*60*60))/(1000*60));

    const segundos = Math.floor((diferencia%(1000*60))/1000);

    document.getElementById("dias").textContent=dias;
    document.getElementById("horas").textContent=horas;
    document.getElementById("minutos").textContent=minutos;
    document.getElementById("segundos").textContent=segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);
