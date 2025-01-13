import User from "../models/user.model.js";
import Bootcamp from "../models/bootcamp.model.js";
import "../models/index.js";

User.createUser = async ({ firstName, lastName, email } = {}) => {
    try {
        const findEmail = await User.findOne({ where: { email } });

        if (findEmail) {
            console.log(`El usuario con el email ${email} ya se encuentra registrado.`);
            return;
        } else {
            const newUser = await User.create({ firstName, lastName, email });

            if (newUser) {
                console.log(`Se ha creado el Usuario: .`, await User.findUserById(newUser.id));
            } else {
                console.log("No se pudo guardar el usuario: " + firstName + " " + lastName);
            }
        }
    } catch (error) {
        console.log("createUser", error.message);
    }
};

User.findUserById = async (id) => {
    try {
        const findUser = User.findByPk(id, {
            include: [
                {
                    model: Bootcamp,
                    as: "bootcamp",
                    attributes: ["id", "title"],
                    raw: true,
                },
            ],
        });

        if (!findUser) {
            console.log(`No se pudo encontrar el usuario con id: ${id}.`);
            return;
        }

        return findUser;
    } catch (error) {
        console.log("findUserById", error.message);
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
        });

        console.log(allUsers);
    } catch (error) {
        console.log("findAll", error.message);
    }
};

User.updateUserById = async (id, firstName, lastName, email) => {
    try {
        const findUser = await User.findByPk(id);

        if (!findUser) {
            console.log("updateUserById", "Usuario no encontrado");
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

        console.log("El usuario ha sido actualizado sin problemas.");
    } catch (error) {
        console.log("updateUserById", error.message);
    }
};

User.deleteUserById = async () => {
    try {
        const findUser = await User.findByPk(id);

        if (!findUser) {
            console.log("deleteUserById", "Usuario no encontrado.");
            return;
        }

        User.destroy({
            where: {
                id: findUser.id,
            },
        });

        console.log("El Usuario ha sido eliminado sin problemas.");
    } catch (error) {
        console.log("deleteUserById", error.meesage);
    }
};

export default User;
