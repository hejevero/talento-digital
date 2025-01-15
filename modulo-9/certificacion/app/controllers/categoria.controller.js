const db = require("../models");
const Categoria = db.categoria;

exports.findAll = (where = null) => {
    return Categoria.findAll({
        where: where,
        raw: true,
    }).then((usuario) => {
        return usuario;
    });
};

exports.create = (categoria) => {
    return Categoria.create({
        nombre: categoria.nombre,
    })
        .then((response) => {
            console.log(`Categoria agregada sin problemas.`);
            return response;
        })
        .catch((error) => {
            console.log(`No se pudo agregar la categoria`);
        });
};
