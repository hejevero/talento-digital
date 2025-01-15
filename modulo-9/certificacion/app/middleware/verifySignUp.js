const jwt = require("jsonwebtoken");
const authConfig = require("../../app/config/auth.config.js");

exports.verifySignUp = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.redirect("/login");
    }

    try {
        const decoded = jwt.decode(token, authConfig);
        req.userId = decoded.userId; // Asignamos el userId del payload al request
        next();
    } catch (err) {
        return res.redirect("/login");
    }
};
