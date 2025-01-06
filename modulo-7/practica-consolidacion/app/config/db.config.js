const { Client } = require("pg");

const cliente = new Client({
    user: "hejevero",
    host: "localhost",
    database: "",
    password: "Hejevero1993",
    port: 5432,
});

cliente.connect();
