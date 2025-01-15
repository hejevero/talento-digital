const express = require("express");
const eventosRoutes = require("./eventos.routes.js");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", {
        title: "ChileActívate",
        message: "Hola, mundo",
    });
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.use("/eventos", eventosRoutes);

module.exports = router;
