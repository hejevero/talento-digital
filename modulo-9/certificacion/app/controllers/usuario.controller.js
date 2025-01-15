const db = require("../models");
const Usuario = db.usuario;

exports.find = (id) => {
    return Usuario.findByPk(id).then((usuario) => {
        return usuario;
    });
};

exports.findAll = (where = null) => {
    return Usuario.findAll({
        where: where,
        raw: true,
    }).then((usuario) => {
        return usuario;
    });
};

exports.create = (user) => {
    return Usuario.create({
        nombre: user.nombre,
        rut: user.rut,
        email: user.email,
        password: user.password,
        role: user.role,
    })
        .then((response) => {
            console.log(`Usuario agregado sin problemas.`);
            return response;
        })
        .catch((error) => {
            console.log(`No se pudo agregar el usuario`);
        });
};
