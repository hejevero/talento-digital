const app = require("./index.js");

const PORT = 3000;

const main = () => {
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}: http://localhost:${PORT}`);
    });
};

main();
