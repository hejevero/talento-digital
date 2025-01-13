import Bootcamp from "../models/bootcamp.model.js";
import User from "../models/user.model.js";
import "../models/index.js";

Bootcamp.createBootcamp = async ({ title, cue, description } = {}) => {
    try {
        const newBootcamp = await Bootcamp.create({
            title,
            cue,
            description,
        });

        const findBootcamp = await Bootcamp.findByPk(newBootcamp.id, { raw: true });

        console.log("*************************************************************************");
        console.log("Bootcamp creado con exito.", findBootcamp);
        console.log("*************************************************************************");
    } catch (error) {
        console.log("*************************************************************************");
        console.log(error.message);
        console.log("*************************************************************************");
    }
};

Bootcamp.addUser = async (userId, bootcampId) => {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            console.log("*************************************************************************");
            console.log(`El Usuario ${userId} no encontrado.`);
            console.log("*************************************************************************");
            return;
        }

        const bootcamp = await Bootcamp.findByPk(bootcampId);

        if (!bootcamp) {
            console.log("*************************************************************************");
            console.log(`El Bootcamp ${bootcampId} no encontrado.`);
            console.log("*************************************************************************");
            return;
        }

        await user.addBootcamp(bootcamp);

        console.log("*************************************************************************");
        console.log(`Agregado el usuario ${userId} al bootcamp ${bootcampId} sin problemas.`);
        console.log("*************************************************************************");
    } catch (error) {
        console.log("*************************************************************************");
        console.log(error.message);
        console.log("*************************************************************************");
    }
};

Bootcamp.findById = async (id) => {
    try {
        const findBootcamp = await Bootcamp.findByPk(id, {
            raw: true,
        });

        if (!findBootcamp) {
            console.log("*************************************************************************");
            console.log("No se pudo encontrar el bootcamp");
            console.log("*************************************************************************");
            return;
        } else {
            console.log("*************************************************************************");
            console.log(findBootcamp);
            console.log("*************************************************************************");
            return;
        }
    } catch (error) {
        console.log("*************************************************************************");
        console.log(error.message);
        console.log("*************************************************************************");
    }
};

Bootcamp.findAllBootcamps = async () => {
    try {
        const bootcamps = await Bootcamp.findAll({
            include: [
                {
                    model: User,
                    as: "users",
                },
            ],
            raw: true,
        });

        console.log("*************************************************************************");
        console.log("Lista de bootcamp: ", bootcamps);
        console.log("*************************************************************************");
    } catch (error) {
        console.log("*************************************************************************");
        console.log(`findAllBootcamp`, error.message);
        console.log("*************************************************************************");
    }
};

export default Bootcamp;
