const equipoController = require("../../controllers/equipo.controller.js");

module.exports = async () => {
    const findEquipo = await equipoController.findAll();

    if (findEquipo.length == 0) {
        await equipoController.create({
            nombre: "Tigres FC",
            tipo_equipo: "Club de Fútbol",
            categoria_id: 1,
            ciudad: "Santiago",
            descripcion: "Equipo de fútbol profesional",
        });

        await equipoController.create({
            nombre: "Águilas Basket",
            tipo_equipo: "Equipo de Básquetbol",
            categoria_id: 2,
            ciudad: "Valparaíso",
            descripcion: "Equipo de básquetbol semi-profesional",
        });

        await equipoController.create({
            nombre: "Los Acuáticos",
            tipo_equipo: "Equipo de Natación",
            categoria_id: 5,
            ciudad: "Concepción",
            descripcion: "Grupo competitivo de natación",
        });

        await equipoController.create({
            nombre: "Voleibol Stars",
            tipo_equipo: "Equipo de Voleibol",
            categoria_id: 4,
            ciudad: "Antofagasta",
            descripcion: "Equipo Regional de voleibol",
        });
    }
};
