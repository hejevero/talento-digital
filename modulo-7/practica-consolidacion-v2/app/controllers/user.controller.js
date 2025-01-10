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
        console.log(error.message);
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
        console.log(error.message);
    }
};

export default User;
