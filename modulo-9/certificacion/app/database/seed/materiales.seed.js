const materialController = require("../../controllers/material.controller.js");
const equipoController = require("../../controllers/equipo.controller.js");

module.exports = async () => {
    const findMaterial = await materialController.findAll();

    if (findMaterial.length == 0) {
        await materialController.create({
            nombre: "Pelotas de Fútbol",
            stock: 50,
        });

        await materialController.create({
            nombre: "Camisetas Deportivas",
            stock: 200,
        });

        await materialController.create({
            nombre: "Red de Voleibol",
            stock: 10,
        });

        await materialController.create({
            nombre: "Raquetas de Tenis",
            stock: 30,
        });

        await materialController.create({
            nombre: "Gorros de Natación",
            stock: 40,
        });

        //await equipoController.addMaterial(1, 1);
        //await equipoController.addMaterial(2, 1);
        //await equipoController.addMaterial(3, 4);
        //await equipoController.addMaterial(4, 2);
        //await equipoController.addMaterial(5, 3);
    }
};
