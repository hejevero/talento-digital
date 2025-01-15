module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define(
        "categorias",
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
        },
        {
            timestamps: false,
        }
    );

    return Categoria;
};
