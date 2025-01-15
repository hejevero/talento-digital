const db = require("../models");
const Material = db.material;

exports.findAll = (where = null) => {
    return Material.findAll({
        where: where,
        raw: true,
    }).then((usuario) => {
        return usuario;
    });
};

exports.create = (material) => {
    return Material.create({
        nombre: material.nombre,
        stock: material.stock,
    })
        .then((response) => {
            console.log(`Material agregada sin problemas.`);
            return response;
        })
        .catch((error) => {
            console.log(`No se pudo agregar la material`);
        });
};
