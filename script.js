// ==========================================
// 1. FUNCIÓN PARA EL MENÚ RESPONSIVE
// ==========================================
function abrirMenu() {
    // Buscamos la lista del menú dentro de la barra de navegación
    let menu = document.querySelector("nav ul");
    // Agregamos o quitamos la clase 'flexNav' para mostrar/ocultar el menú
    menu.classList.toggle("flexNav");
}


// ==========================================
// 2. CALCULADORA DE IMPACTO (BÁSICA)
// ==========================================

// Buscamos los elementos del HTML usando su ID
let inputMonto = document.getElementById("montoDonacion");
let botonCalcular = document.getElementById("calcularImpacto");
let resultadoImpacto = document.getElementById("resultadoImpacto");
let botonHacerDonacion = document.getElementById("hacerDonacion");
let botonCerrar = document.getElementById("cerrar");

// Cuando el usuario hace click en "Calcular"
botonCalcular.addEventListener("click", function () {
    let monto = inputMonto.value;

    // Validación básica: que no esté vacío y sea mayor a cero
    if (monto === "" || monto <= 0) {
        resultadoImpacto.textContent = "Por favor, ingresá un monto válido.";
        return;
    }

    // Costo de cada kit escolar
    let precioKitEscolar = 5000;
    // Cuenta para calcular cuántos kits cubren la donación
    let cantidadKits = monto / precioKitEscolar;

    // Mostramos el resultado en el párrafo (redondeado con Math.floor)
    resultadoImpacto.textContent = "Con tu donación se pueden entregar " + Math.floor(cantidadKits) + " kits escolares.";
});

// Cuando el usuario hace click en "Hacer la donación"
botonHacerDonacion.addEventListener("click", function () {
    alert("¡Muchas gracias por tu compromiso y donación!");
    // Limpiamos los campos
    inputMonto.value = "";
    resultadoImpacto.textContent = "";
});

// Cuando el usuario hace click en "Cerrar" (limpiamos la pantalla de la calculadora)
botonCerrar.addEventListener("click", function () {
    inputMonto.value = "";
    resultadoImpacto.textContent = "";
});
