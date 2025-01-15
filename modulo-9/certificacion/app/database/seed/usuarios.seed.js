const usuarioController = require("../../controllers/usuario.controller.js");

module.exports = async () => {
    const findUsuarios = await usuarioController.findAll();

    if (findUsuarios.length == 0) {
        await usuarioController.create({
            nombre: "admin",
            rut: "11.111.111-1",
            email: "admin@deportes.com",
            password: "admin123",
            role: 1,
        });
    }
};
