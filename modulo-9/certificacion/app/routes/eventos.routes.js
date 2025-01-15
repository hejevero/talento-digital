const express = require("express");
const equipoController = require("../../app/controllers/equipo.controller.js");

const router = express.Router();

router.get("/", async (req, res) => {
    res.render("eventos/index", {
        eventos: await equipoController.findAll(),
    });
});

router.get("/:id", async (req, res) => {
    let evento = await equipoController.find(req.params.id);

    if (!evento) {
        res.redirect("/eventos");
    }

    res.render("eventos/show", {
        evento: evento,
    });
});

module.exports = router;
