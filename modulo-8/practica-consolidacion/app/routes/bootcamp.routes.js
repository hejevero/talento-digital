const express = require("express");

const router = express.Router();

router.post("/", () => {
    console.log("/");
});

router.post("/adduser", () => {
    console.log("/");
});

router.get("/:id", () => {
    console.log("/");
});

router.get("/", () => {
    console.log("/");
});

module.exports = router;
