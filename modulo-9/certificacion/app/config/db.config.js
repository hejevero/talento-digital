module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Hejevero1993",
    DB: "gestion_deportes",
    dialect: "postgres",
    PORT: 5432,
    define: {
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
