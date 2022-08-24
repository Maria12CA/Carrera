let fondo = document.querySelector('.fondo');
let rueda1 = document.querySelector(".rueda1")
let rueda2 = document.querySelector(".rueda2")
let humo = document.querySelector(".humo")

fondo.addEventListener('click', cambiar)

function cambiar() {
    fondo.classList.add('fondoMovimiento')
    rueda1.classList.add("ruedaMover")
    rueda2.classList.add("ruedaMover")
    humo.classList.remove("ocultar")
    humo.classList.add("cambiarhumo")
}

