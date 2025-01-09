import Bootcamp from "../models/bootcamp.model.js";
import User from "../models/user.model.js";
import { QueryTypes } from "sequelize";
import "../models/index.js";

const nuevoBootcamp = {
    title: "Introduciendo El Bootcamp de React",
    cue: 10,
    description: "React es la librería más usada en JavaScript para el desarrollo de interfaces.",
};

const createBootcamp = async () => {
    try {
        const { title, cue, description } = nuevoBootcamp;

        const newBootcamp = await Bootcamp.create({
            title,
            cue,
            description,
        });

        console.log("Bootcamp creado con exito.", newBootcamp);
    } catch (error) {
        console.log(error.message);
    }
};

const addUser = async (userId, bootcampId) => {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            console.log("Usuario no encontrado.");
            return;
        }

        const bootcamp = await Bootcamp.findByPk(bootcampId);

        if (!bootcamp) {
            console.log("Bootcamp no encontrado.");
            return;
        }

        await user.addBootcamp(bootcamp);
    } catch (error) {
        console.log(error.message);
    }
};

const findById = async (id) => {
    try {
        const findBootcamp = await Bootcamp.findByPk(id, {
            raw: true,
        });

        if (!findBootcamp) {
            console.log("No se pudo encontrar el bootcamp");
            return;
        } else {
            return console.log(findBootcamp);
        }
    } catch (error) {
        console.log(error.message);
    }
};
