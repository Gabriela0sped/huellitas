
// MENÚ RESPONSIVO
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");

    const abierto = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", abierto);
    menuToggle.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
    );
});

// CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
document.querySelectorAll(".nav-links a").forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// SELECCIONAR MASCOTA
const botones = document.querySelectorAll(".adopt-btn");
const selector = document.getElementById("mascota");

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const mascota = boton.getAttribute("data-pet");

        selector.value = mascota;

        document.getElementById("adopcion").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// FORMULARIO DE ADOPCIÓN
const formulario = document.getElementById("adoptionForm");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const mascota = selector.value;
    const respuesta = document.getElementById("respuesta");

    if (nombre === "" || mascota === "") {
        respuesta.textContent =
            "Por favor, completa los campos obligatorios.";
        return;
    }

    respuesta.textContent =
        "¡Gracias, " + nombre +
        "! Tu solicitud para conocer a " +
        mascota + " fue registrada correctamente.";

    formulario.reset();
});

// AÑO AUTOMÁTICO
document.getElementById("year").textContent =
    new Date().getFullYear();
