const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index.js");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Pruebas del metodo GET", () => {
    it("Deberia devolver el listado de animes", async () => {
        const res = await chai.request(app).get("/api/anime");
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.equal("Listado de animes.");
    });
});
