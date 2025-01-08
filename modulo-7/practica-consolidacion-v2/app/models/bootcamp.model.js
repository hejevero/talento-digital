import sequelize from "../config/db.config.js";
import { DataTypes } from "sequelize";

const Bootcamp = sequelize.define("bootcamp", {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    cue: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING(500),
    },
});

export default Bootcamp;
