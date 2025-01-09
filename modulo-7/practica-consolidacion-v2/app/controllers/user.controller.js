import user from "../models/user.model.js";
import { QueryTypes } from "sequelize";
//import sequelize from "../config/db.config.js";

const usuario = {
    firstName: "Helmo",
    lastName: "Velásquez",
    email: "helmo.velasquez@gmail.com",
};

const createUser = async (firstName, lastName, email) => {
    try {
        const findEmail = await user.findOne({ where: { email } });

        if (findEmail) {
            console.log(`El usuario con el email ${email} ya se encuentra registrado.`);
            return;
        } else {
            const newUser = await user.create({ firstName, lastName, email });
            console.log(`El usuario de nombre ${firstName} ${lastName} y email ${email}, se ha registrado con exito.`);
        }
    } catch (error) {
        console.log(error.message);
    }
};

const findUserById = async (id) => {
    try {
        const findUser = User.findByPk(id);

        if (!findUser) {
            console.log(`No se pudo encontrar el usuario con id: ${id}.`);
            return;
        }
    } catch (error) {
        console.log(error.message);
    }
};
