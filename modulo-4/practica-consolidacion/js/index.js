//Importar funciones principales
import { app } from "./app.js";

var generador = null;
var start = null;
var end = null;

//Funcion para mostrar personajes
function* characters() {
    let i = start;

    while (i <= end) {
        yield i++;
    }
}

//Esperar carga del DOM
document.addEventListener("DOMContentLoaded", function () {
    //Ejecutar funciones principales
    app.initUI();

    //Funciones con el mouse
    document.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("load-list")) {
            if (event.target.dataset.start != start) {
                start = parseInt(event.target.dataset.start);
                end = parseInt(event.target.dataset.end);

                generador = characters();
            }

            app.addCharacter(start, generador.next().value);
        }
    });
});
