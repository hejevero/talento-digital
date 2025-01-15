const db = require("../models");
const MaterialEquipo = db.materialEquipo;

exports.findAll = (where = null) => {
    return MaterialEquipo.findAll({
        where: where,
        raw: true,
    }).then((response) => {
        return response;
    });
};

exports.create = (item) => {
    return MaterialEquipo.create({
        material_id: item.material_id,
        equipo_id: item.equipo_id,
    }).then((response) => {
        console.log(`Relación material y equipo agregada sin problemas.`);
        return response;
    });
};
