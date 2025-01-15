module.exports = (sequelize, DataTypes) => {
    const Equipo = sequelize.define(
        "equipos",
        {
            nombre: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "El campo nombre es obligatorio.",
                    },
                },
            },
            tipo_equipo: {
                type: DataTypes.STRING,
            },
            categoria_id: {
                type: DataTypes.INTEGER,
            },
            ciudad: {
                type: DataTypes.STRING,
            },
            descripcion: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
        }
    );

    return Equipo;
};
