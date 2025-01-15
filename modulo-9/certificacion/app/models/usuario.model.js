module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        "usuarios",
        {
            nombre: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "El nombre del usuario es obligatorio.",
                    },
                },
            },
            rut: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "El rut del usuario es obligatorio.",
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "El correo del usuario es obligatorio.",
                    },
                    isEmail: {
                        args: true,
                        msg: "Formato de correo invalido",
                    },
                },
                unique: {
                    args: true,
                    msg: "correo electronico actualmente registrado en la base de datos!",
                },
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "La contraseña de usuario es obligatoria.",
                    },
                },
            },
            role: {
                type: DataTypes.INTEGER,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "El rol del usuario es obligatorio.",
                    },
                },
            },
        },
        {
            timestamps: false,
        }
    );

    return Usuario;
};
