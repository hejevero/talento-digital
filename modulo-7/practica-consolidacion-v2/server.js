import sequelize from "./app/config/db.config.js";
import User from "./app/controllers/user.controller.js";
import Bootcamp from "./app/models/bootcamp.model.js";
import "./app/models/index.js";

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true, alter: true });

        User.createUser({ firstName: "Mateo", lastName: "Díaz", email: "mateo.diaz@correo.com" });
        User.createUser({ firstName: "Santiago", lastName: "Mejías", email: "santiago.mejias@correo.com" });
        User.createUser({ firstName: "Lucas", lastName: "Rojas", email: "lucas.rojas@correo.com" });
        User.createUser({ firstName: "Facunto", lastName: "Fernandez", email: "facundo.fernandez@correo.com" });
    } catch (error) {
        console.log("Ha ocurrido un error de conexión con la base de datos.", error.message);
    }
};

main();
