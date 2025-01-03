import { api } from "./api.js";

const timeLinePrincipal = document.getElementById("time_line_principal");

const createItemTimeLine = function (start, end) {
    timeLinePrincipal.innerHTML += `
        <div class="single-timeline-area" data-title="${start} - ${end}">
            <div class="timeline-date wow fadeInLeft load-list" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft" data-start="${start}" data-end="${end}">
                <p>${start} - ${end}</p>
            </div>

            <div class="row">
                <div class="col-12 col-md-6 col-lg-4" style="cursor: pointer;">
                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft">
                        <div class="timeline-icon"><i class="d-none fa fa-address-card" aria-hidden="true"></i></div>

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

const app = async () => {
    let response = await api.people();

    if (response) {
        let count = response.count;
        let divider = 5;

        for (let index = 0; index < count / divider; index++) {
            let reference = index * divider;

            if (reference == 1) {
                divider = divider + 1;
            }

            let title = `${reference + 1} - ${reference + divider < count ? reference + divider : count}`;

            createItemTimeLine(reference + 1, reference + divider < count ? reference + divider : count);
        }
    } else {
        toastr.error("No se pudo cargar la API principal por problemas de conexión", "Cargar API");
    }
};

export { app };
