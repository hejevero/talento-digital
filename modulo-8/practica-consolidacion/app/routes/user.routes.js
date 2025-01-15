const express = require("express");

const router = express.Router();

router.get("/", () => {
    console.log("/");
});

router.get("/:id", () => {
    console.log("/");
});

router.put("/:id", () => {
    console.log("/");
});

router.delete("/:id", () => {
    console.log("/");
});

module.exports = router;
