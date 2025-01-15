const express = require("express");
const equipoController = require("../../app/controllers/equipo.controller.js");
const { verifySignUp } = require("../middleware/index.js");

const router = express.Router();

router.get("/", async (req, res) => {
    res.render("eventos/index", {
        eventos: await equipoController.findAll(),
    });
});

router.get("/:id", verifySignUp, async (req, res) => {
    //Buscar evento
    let evento = await equipoController.find(req.params.id);

    //Redireccionar si no existe el evento
    if (!evento) {
        res.redirect("/eventos");
    }

    //Retornar vista
    res.render("eventos/show", {
        evento: evento,
    });
});

module.exports = router;
