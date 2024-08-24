/* **************************************************
 * Archivo js principal de del index
 * **************************************************
 * 1.0: 23-08-2024
 * **************************************************
 * HV
 * **************************************************/
var inputNombre = document.getElementById("nombre");
var inputTelefono = document.getElementById("telefono");
var inputEmail = document.getElementById("email");

function validarFormulario() {
    if (inputNombre.value.length > 0 && inputTelefono.value.length > 0 && inputEmail.value.length > 0) {
        alert(`Gracias por contactarte ${inputNombre.value}, ¡Seguiremos en contacto!`);

        inputNombre.value = "";
        inputTelefono.value = "";
        inputEmail.value = "";
    } else {
        alert("Debe rellenar el formulario para poder continuar");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (elemento) {
        if (elemento.target.id == "boton_enviar_formulario") {
            validarFormulario();
        }
    });

    document.addEventListener("keypress", function (evento) {
        if (evento.code == "Enter") {
            if (document.activeElement.id == "nombre" || document.activeElement.id == "telefono" || document.activeElement.id == "email") {
                validarFormulario();
            }
        }
    });
});
