//Importar funciones api
import { api } from "./api.js";

//Objeto dom
const timeLinePrincipal = document.getElementById("time_line_principal");

//Funcion para crear elementos de lista
const createItemTimeLine = function (start, end, color = "red") {
    timeLinePrincipal.innerHTML += `
        <div class="single-timeline-area" data-title="${start} - ${end}">
            <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft">
                <p class="load-list" data-start="${start}" data-end="${end}">${start} - ${end}</p>
            </div>

            <div class="row" id="timeline_row_${start}" data-color="${color}">
                <div class="col-12 col-md-6 col-lg-4" style="cursor: pointer;">
                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft">
                        <div class="timeline-icon" style="background-color: ${color} !important;"><i class="d-none fa fa-address-card" aria-hidden="true"></i></div>

                        <div class="timeline-text">
                            <h6>En esta sessión...</h6>
                            <p>Encontrarás información sobre<br>los personajes más populares<br>de las películas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

//Crear elemento del personaje
const createSubItemTimeLine = function (start, id, content) {
    let row = document.getElementById("timeline_row_" + start);

    if (!document.getElementById("timeline_element_" + id)) {
        row.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4" style="cursor: pointer;" id="timeline_element_${id}">
                <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft">
                    <div class="timeline-icon" style="background-color: ${row.dataset.color} !important;"><i class="d-none fa fa-address-card" aria-hidden="true"></i></div>

                    <div class="timeline-text">
                        <h6>${content.properties.name}</h6>

                        <p>Estatura: ${content.properties.height}</p>
                        
                        <p>Peso: ${content.properties.mass != "unkown" ? content.properties.mass : "No especificado"}</p>
                    </div>
                </div>
            </div>
        `;
    }
};

//Funcion principal
const app = {
    initUI: async () => {
        let response = await api.people();

        if (response) {
            let count = response.total_records;
            let divider = 5;

            for (let index = 0; index < count / divider; index++) {
                let reference = index * divider;
                let color = "red";

                if (reference == 1) {
                    divider = divider + 1;
                }

                if (index > 0) {
                    let icon = document.querySelectorAll(".timeline-icon");

                    if (icon[icon.length - 1].style.backgroundColor == "blue") {
                        color = "red";
                    }

                    if (icon[icon.length - 1].style.backgroundColor == "red") {
                        color = "green";
                    }

                    if (icon[icon.length - 1].style.backgroundColor == "green") {
                        color = "blue";
                    }
                }

                createItemTimeLine(reference + 1, reference + divider < count ? reference + divider : count, color);
            }
        } else {
            toastr.error("No se pudo cargar la API principal por problemas de conexión", "Cargar API");
        }
    },
    addCharacter: async (start, id) => {
        if (id) {
            for (let index = id; index < start + 5; index++) {
                if (document.getElementById("timeline_element_" + index)) {
                    id++;
                }
            }

            let character = api.people(id);

            character.then((response) => {
                if (response) {
                    if (response.message == "ok") {
                        createSubItemTimeLine(start, id, response.result);
                    }
                }
            });
        }
    },
};

//Exportar funcion principal
export { app };
