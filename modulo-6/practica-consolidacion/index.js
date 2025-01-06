const express = require("express");
const anime = require("./anime.json");
const fs = require("fs/promises");

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Get a url base
app.get("/", async (req, res) => {
    res.send({ code: 200, message: "Para ver mas utiliza la api/anime." });
});

//Get a url base de la api
app.get("/api/anime", async (req, res) => {
    res.send({ code: 200, message: "Listado de animes.", data: anime });
});

//Get funcion buscar Buscar
app.get("/api/anime/:parametro", (req, res) => {
    try {
        const parametro = req.params.parametro.toLocaleLowerCase();

        const animeItem =
            anime[parametro] ||
            Object.values(anime).find((aniObj) => {
                aniObj.nombre.toLocaleLowerCase() == parametro;
            });

        if (animeItem) {
            console.log(animeItem);
            res.send({ code: 200, message: `Detalle anime`, data: animeItem });
        } else {
            res.status(400).send({ code: 400, message: `Anime no encontrado.` });
        }
    } catch (error) {
        res.status(500).send({ code: 500, message: `Error interno del servidor.` });
    }
});

//Get funcion actualizar anime
app.put("/api/anime/:id", async (req, res) => {
    try {
        const data = await fs.readFile("./anime.json", "utf8");
        const animeData = JSON.parse(data);

        const idActualizar = req.params.id;
        const actualizar = req.body;

        if (animeData[idActualizar]) {
            Object.keys(actualizar).forEach((key) => {
                animeData[idActualizar][key] = actualizar[key];
            });

            await fs.writeFile("./anime.json", JSON.stringify(animeData, null, 2));

            res.status(200).send({ code: 200, message: `Anime modificado sin problemas` });
        } else {
            res.status(400).send({ code: 400, message: `Anime no encontrado.` });
        }
    } catch (error) {
        res.status(500).send({ code: 500, message: `Error interno del servidor.`, data: error.message });
    }
});

//Get funcion agregar anime
app.post("/api/anime", async (req, res) => {
    try {
        const nuevoAnime = req.body;
        const data = await fs.readFile("./anime.json", "utf8");
        const animeData = JSON.parse(data);

        const numeroMayor = Math.max(...Object.keys(animeData).map(Number));
        const proximoNumero = numeroMayor + 1;
        animeData[proximoNumero] = nuevoAnime;

        await fs.writeFile("./anime.json", JSON.stringify(animeData, null, 2), "utf8");

        res.status(200).send({ code: 200, message: `Anime creado exitosamente.` });
    } catch (error) {
        res.status(500).send({ code: 500, message: `Error interno del servidor.`, data: error.message });
    }
});

//Get funcion eliminar anime
app.delete("/api/anime/:id", async (req, res) => {
    try {
        const data = await fs.readFile("./anime.json", "utf8");
        const animeData = JSON.parse(data);

        let id = req.params.id;

        if (animeData[id]) {
            delete animeData[id];
            await fs.writeFile("./anime.json", JSON.stringify(animeData, null, 2), "utf8");

            res.send({ code: 200, message: `Anime borrado con exito.` });
        } else {
            res.status(404).send({ code: 404, message: `Anime no encontrado` });
        }
    } catch (error) {
        res.status(500).send({ code: 500, message: `Error interno del servidor.` });
    }
});

//Exportar contenido
module.exports = app;
