const express = require("express");
const { create } = require("express-handlebars");
const db = require("./app/models");
const routes = require("./app/routes/web.js");
const path = require("path");

//Puerto principal de trabajo
const app = express();
const PORT = 3000;

//Middleware express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configurar habldebars para las vistas
const hbs = create({
    extname: ".handlebars",
    defaultLayout: false,
    helpers: {
        get: (obj, prop) => obj[prop],
    },
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./app/views");

//Permitir uso de elementos publico a express
app.use(express.static(path.join(__dirname, "app/public")));

//Inicializar base de datos
const run = async () => {};

//Inicializar el servidor
const main = async () => {
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}: http://localhost:3000`);
    });
};

//Rutas
app.use("/", routes);

//db.sequelize.sync()
db.sequelize
    .sync({
        force: false,
    })
    .then(async () => {
        console.log("Eliminando y resincronizando la base de datos.");
        await run();

        main();
    });
