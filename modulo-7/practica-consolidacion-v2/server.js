import sequelize from "./app/config/db.config.js";
import User from "./app/controllers/user.controller.js";
import Bootcamp from "./app/controllers/bootcamp.controller.js";
import "./app/models/index.js";

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true, alter: true });

        //Crear usuarios
        await User.createUser({ firstName: "Mateo", lastName: "Díaz", email: "mateo.diaz@correo.com" });
        await User.createUser({ firstName: "Santiago", lastName: "Mejías", email: "santiago.mejias@correo.com" });
        await User.createUser({ firstName: "Lucas", lastName: "Rojas", email: "lucas.rojas@correo.com" });
        await User.createUser({ firstName: "Facunto", lastName: "Fernandez", email: "facundo.fernandez@correo.com" });

        //Buscar todos los usuarios
        await User.findAllUsers();

        //Buscar usuario por id especifico
        await User.findUserById(2);

        //Actualizar uno de los usuarios
        await User.updateUserById(2, "Santiago Jesus", "Mejías Mejías", "sjmm@correo.com");

        //Confirmar cambios
        await User.findUserById(2);

        //Confirmar que ya no existe el usuario
        await User.findUserById(2);

        //Crear bootcamps
        await Bootcamp.createBootcamp({
            title: "Introduciendo El Bootcamp De React.",
            cue: 10,
            description: "React es la librería más usada en JavaScript para el desarrollo de interfaces.",
        });

        await Bootcamp.createBootcamp({
            title: "Bootcamp Desarrollo Web Full Stack.",
            cue: 12,
            description: "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.",
        });

        await Bootcamp.createBootcamp({
            title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning.",
            cue: 18,
            description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.",
        });

        //Buscar bootcamps
        await Bootcamp.findAllBootcamps();

        //Agregar usuarios a los bootcamp
        await Bootcamp.addUser(1, 1);
        await Bootcamp.addUser(2, 1);
        await Bootcamp.addUser(1, 2);
        await Bootcamp.addUser(1, 3);
        await Bootcamp.addUser(2, 3);
        await Bootcamp.addUser(3, 3);

        //Confirmar usuarios agregados a los bootcamp
        await Bootcamp.findAllBootcamps();

        //Confirmar a usuarios con bootcamp
        await User.findAllUsers();

        //Confirmar por usuario
        await User.findUserById(1);

        //Eliminar usuario
        await User.deleteUserById(2);
    } catch (error) {
        console.log("*************************************************************************");
        console.log("Ha ocurrido un error de conexión con la base de datos.", error.message);
        console.log("*************************************************************************");
    }
};

main();
