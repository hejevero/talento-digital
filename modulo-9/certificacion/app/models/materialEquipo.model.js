module.exports = (sequelize, DataTypes) => {
    const Material = sequelize.define("materiales_equipo", {
        material_id: { type: DataTypes.INTEGER, validate: { notEmpty: { args: true, msg: "Campo obligatorio" } } },
        equipo_id: { type: DataTypes.INTEGER, validate: { notEmpty: { args: true, msg: "Campo obligatorio" } } },
    });
};
