const materialEquipoController = require("../../controllers/materiales_equipo.controller.js");
const equipoController = require("../../controllers/equipo.controller.js");

module.exports = async () => {
    const findMaterialEquipo = await materialEquipoController.findAll();

    if (findMaterialEquipo.length == 0) {
        await materialEquipoController.create({
            material_id: 1,
            equipo_id: 1,
        });

        await materialEquipoController.create({
            material_id: 2,
            equipo_id: 1,
        });

        await materialEquipoController.create({
            material_id: 3,
            equipo_id: 4,
        });

        await materialEquipoController.create({
            material_id: 4,
            equipo_id: 2,
        });

        await materialEquipoController.create({
            material_id: 5,
            equipo_id: 3,
        });
    }
};
