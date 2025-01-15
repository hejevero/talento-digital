const db = require("../models");
const Categoria = db.categoria;
const Equipo = db.equipo;

exports.find = (id) => {
    return Equipo.findByPk(id, {
        include: {
            model: Categoria,
            as: "categoria",
            attributes: ["nombre"],
        },
        raw: true,
    }).then((equipo) => {
        return equipo;
    });
};

exports.findAll = () => {
    return Equipo.findAll({
        include: {
            model: Categoria,
            as: "categoria",
            attributes: ["nombre"],
        },
        raw: true,
    }).then((equipos) => {
        return equipos;
    });
};
