const db = require("../models");
const Categoria = db.categoria;
const Equipo = db.equipo;
const Material = db.material;

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

exports.create = (item) => {
    return Equipo.create({
        nombre: item.nombre,
        tipo_equipo: item.tipo_equipo,
        categoria_id: item.categoria_id,
        ciudad: item.ciudad,
        descripcion: item.descripcion,
    }).then((response) => {
        console.log(`Equipo agregado sin problemas`);
        return response;
    });
};

exports.addMaterial = (materialId, equipoId) => {
    return Equipo.findByPk(equipoId).then((equipo) => {
        if (equipo) {
            return Material.findByPk(materialId).then((material) => {
                equipo.addMaterial(material);
                return Equipo;
            });
        } else {
            console.log(`Ocurrio un error y no se pudo agregar el material al equipo.`);
        }
    });
};
