// ETAPA 3: JavaScript de Clothes Brand

document.addEventListener("DOMContentLoaded", () => {
    // Menú hamburguesa: funciona en pantallas móviles.
    const botonMenu = document.querySelector(".menu-toggle");
    const navegacion = document.querySelector("header nav");

    if (botonMenu && navegacion) {
        botonMenu.addEventListener("click", () => {
            const abierto = navegacion.classList.toggle("menu-abierto");
            botonMenu.setAttribute("aria-expanded", String(abierto));
            botonMenu.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
            botonMenu.textContent = abierto ? "✕" : "☰";
        });

        navegacion.querySelectorAll("a").forEach(enlace => {
            enlace.addEventListener("click", () => {
                navegacion.classList.remove("menu-abierto");
                botonMenu.setAttribute("aria-expanded", "false");
                botonMenu.setAttribute("aria-label", "Abrir menú");
                botonMenu.textContent = "☰";
            });
        });
    }

    // Validación del formulario de contacto antes de aceptar el envío.
    const formulario = document.querySelector("#form-contacto");
    if (!formulario) return;

    const mensaje = document.querySelector("#mensaje-formulario");
    const camposObligatorios = Array.from(formulario.querySelectorAll("[required]"));

    function mostrarError(campo, texto) {
        campo.classList.add("campo-invalido");
        campo.setAttribute("aria-invalid", "true");

        let error = campo.parentElement.querySelector(`[data-error-for="${campo.id}"]`);
        if (!error) {
            error = document.createElement("span");
            error.className = "error-campo";
            error.dataset.errorFor = campo.id;
            error.id = `${campo.id}-error`;
            campo.insertAdjacentElement("afterend", error);
        }
        error.textContent = texto;
        campo.setAttribute("aria-describedby", error.id);
    }

    function limpiarError(campo) {
        campo.classList.remove("campo-invalido");
        campo.removeAttribute("aria-invalid");
        campo.removeAttribute("aria-describedby");
        const error = campo.parentElement.querySelector(`[data-error-for="${campo.id}"]`);
        if (error) error.remove();
    }

    camposObligatorios.forEach(campo => {
        campo.addEventListener("input", () => limpiarError(campo));
        campo.addEventListener("change", () => limpiarError(campo));
    });

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        let primerCampoInvalido = null;
        camposObligatorios.forEach(campo => limpiarError(campo));

        camposObligatorios.forEach(campo => {
            const valor = campo.value.trim();
            let error = "";

            if (!valor) {
                error = "Este campo es obligatorio.";
            } else if (campo.id === "correo" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)) {
                error = "Escribe un correo válido, por ejemplo nombre@gmail.com.";
            } else if (campo.id === "telefono" &&
                !/^(\+52\s?)?\d{10}$/.test(valor.replace(/[\s-]/g, ""))) {
                error = "Ingresa un teléfono válido de 10 dígitos.";
            } else if (campo.id === "contrasena" && valor.length < 6) {
                error = "La contraseña debe tener al menos 6 caracteres.";
            } else if (campo.id === "cantidad" &&
                (!Number.isInteger(Number(valor)) || Number(valor) < 1 || Number(valor) > 20)) {
                error = "La cantidad debe ser un número entre 1 y 20.";
            }

            if (error) {
                mostrarError(campo, error);
                if (!primerCampoInvalido) primerCampoInvalido = campo;
            }
        });

        if (primerCampoInvalido) {
            mensaje.textContent = "Revisa los campos señalados antes de continuar.";
            mensaje.className = "mensaje-formulario error";
            primerCampoInvalido.focus();
            alert("Hay datos incorrectos o campos vacíos. Revisa los mensajes del formulario.");
            return;
        }

        mensaje.textContent = "¡Validación correcta! Tus datos están completos. Este proyecto es una demostración: para recibir pedidos realmente se necesita conectar un servidor.";
        mensaje.className = "mensaje-formulario exito";
        alert("¡Formulario validado correctamente!");
        formulario.reset();
    });
});
