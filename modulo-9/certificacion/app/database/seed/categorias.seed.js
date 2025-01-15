const categoriaController = require("../../controllers/categoria.controller.js");

module.exports = async () => {
    const findCategoria = await categoriaController.findAll();

    if (findCategoria.length == 0) {
        await categoriaController.create({
            nombre: "Fútbol",
        });

        await categoriaController.create({
            nombre: "Básquetbol",
        });

        await categoriaController.create({
            nombre: "Tenis",
        });

        await categoriaController.create({
            nombre: "Voleibol",
        });

        await categoriaController.create({
            nombre: "Natación",
        });
    }
};
