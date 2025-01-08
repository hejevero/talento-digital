import sequelize from "./app/config/db.config.js";
import "./app/models/user.model.js";
import "./app/models/bootcamp.model.js";
import "./app/models/index.js";

const main = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch (error) {
        console.log("Ha ocurrido un error de conexión con la base de datos.", error.message);
    }
};

main();
