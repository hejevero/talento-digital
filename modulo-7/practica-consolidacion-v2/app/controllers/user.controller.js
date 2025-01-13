import User from "../models/user.model.js";
import Bootcamp from "../models/bootcamp.model.js";
import "../models/index.js";

User.createUser = async ({ firstName, lastName, email } = {}) => {
    try {
        const findEmail = await User.findOne({ where: { email } });

        if (findEmail) {
            console.log("*************************************************************************");
            console.log(`El usuario con el email ${email} ya se encuentra registrado.`);
            console.log("*************************************************************************");
            return;
        } else {
            const newUser = await User.create({ firstName, lastName, email });

            if (newUser) {
                console.log("*************************************************************************");
                console.log(`Se ha creado el Usuario: .`, await User.findByPk(newUser.id, { raw: true }));
                console.log("*************************************************************************");
            } else {
                console.log("*************************************************************************");
                console.log("No se pudo guardar el usuario: " + firstName + " " + lastName);
                console.log("*************************************************************************");
            }
        }
    } catch (error) {
        console.log("*************************************************************************");
        console.log("createUser", error.message);
        console.log("*************************************************************************");
    }
};

User.findUserById = async (id) => {
    try {
        const findUser = await User.findByPk(id, {
            include: [
                {
                    model: Bootcamp,
                    as: "bootcamp",
                    attributes: ["id", "title"],
                },
            ],
            raw: true,
        });

        if (!findUser) {
            console.log("*************************************************************************");
            console.log(`No se pudo encontrar el usuario con id: ${id}.`);
            console.log("*************************************************************************");
            return;
        }

        console.log("*************************************************************************");
        console.log(`Usuario con id ${id}:`, findUser);
        console.log("*************************************************************************");
    } catch (error) {
        console.log("*************************************************************************");
        console.log("findUserById", error.message);
        console.log("*************************************************************************");
    }
};

User.findAllUsers = async () => {
    try {
        const allUsers = await User.findAll({
            include: [
                {
                    model: Bootcamp,
                    as: "bootcamp",
                },
            ],
            raw: true,
        });

        console.log("*************************************************************************");
        console.log(`Lista de usuarios: `, allUsers);
        console.log("*************************************************************************");
    } catch (error) {
        console.log("*************************************************************************");
        console.log("findAll", error.message);
        console.log("*************************************************************************");
    }
};

User.updateUserById = async (id, firstName, lastName, email) => {
    try {
        const findUser = await User.findByPk(id);

        if (!findUser) {
            console.log("*************************************************************************");
            console.log("updateUserById", "Usuario no encontrado");
            console.log("*************************************************************************");
            return;
        }

        await User.update(
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
            },
            {
                where: {
                    id: findUser.id,
                },
            }
        );

        console.log("*************************************************************************");
        console.log("El usuario ha sido actualizado sin problemas.");
        console.log("*************************************************************************");
    } catch (error) {
        console.log("*************************************************************************");
        console.log("updateUserById", error.message);
        console.log("*************************************************************************");
    }
};

User.deleteUserById = async (id) => {
    try {
        const findUser = await User.findByPk(id);

        if (!findUser) {
            console.log("*************************************************************************");
            console.log("deleteUserById", "Usuario no encontrado.");
            console.log("*************************************************************************");
            return;
        }

        User.destroy({
            where: {
                id: findUser.id,
            },
        });

        console.log("*************************************************************************");
        console.log("El Usuario ha sido eliminado sin problemas.");
        console.log("*************************************************************************");
    } catch (error) {
        console.log("*************************************************************************");
        console.log("deleteUserById", error.meesage);
        console.log("*************************************************************************");
    }
};

export default User;
