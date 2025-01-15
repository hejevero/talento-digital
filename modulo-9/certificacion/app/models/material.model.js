module.exports = (sequelize, DataTypes) => {
    const Material = sequelize.define(
        "materiales",
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
            stock: {
                type: DataTypes.INTEGER,
            },
        },
        {
            timestamps: false,
        }
    );

    return Material;
};
