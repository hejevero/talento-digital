const express = require("express");
const eventosRoutes = require("./eventos.routes.js");
const usuarioController = require("../../app/controllers/usuario.controller.js");
const authConfig = require("../config/auth.config.js");
const jwt = require("jwt-simple");

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

router.post("/login", async (req, res) => {
    const { log_in_email, log_in_password } = req.body;

    const findUsuario = await usuarioController.findAll({ email: log_in_email });

    if (findUsuario.length == 0 || findUsuario.password != log_in_password) {
        res.redirect("/login");
    }

    const token = jwt.encode({ userId: findUsuario.id }, authConfig);

    if (findUsuario == 1) {
        res.redirect("/admin");
    } else {
        res.redirect("/");
    }
});

router.use("/eventos", eventosRoutes);

module.exports = router;
