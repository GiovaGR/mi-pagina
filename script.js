const boton = document.getElementById("btnSaludo");

if (boton) {
    boton.addEventListener("click", () => {
        document.getElementById("mensaje").textContent =
            "¡Funciona correctamente!";
    });
}
