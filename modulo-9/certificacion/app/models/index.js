const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,

    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.acquire,
        idle: dbConfig.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require("./usuario.model")(sequelize, Sequelize);
db.categoria = require("./categoria.model")(sequelize, Sequelize);
db.equipo = require("./equipo.model")(sequelize, Sequelize);
db.material = require("./material.model")(sequelize, Sequelize);
db.materialEquipo = require("./materialEquipo.model")(sequelize, Sequelize);

db.equipo.belongsTo(db.categoria, {
    as: "categoria",
    foreignKey: "categoria_id",
});
db.equipo.belongsToMany(db.material, {
    through: "materiales_equipo",
    as: "materiales",
    foreignKey: "equipo_id",
});
db.material.belongsToMany(db.equipo, {
    through: "materiales_equipo",
    as: "equipos",
    foreignKey: "material_id",
});

module.exports = db;
