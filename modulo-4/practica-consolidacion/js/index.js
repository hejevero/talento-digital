import { app } from "./app.js";

function* characters(start, end) {
    let i = start;

    while (i <= end) {
        yield i;
        i++;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    app();

    document.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("load-list")) {
            characters();
        }
    });
});
