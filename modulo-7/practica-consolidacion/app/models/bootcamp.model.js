const { DataTypes } = require("sequelize");
const sequelize = require("index");

const bootcamp = sequelize.define(
    "bootcamp",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cue: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        freezeTableName: true,
    }
);

module.exports = bootcamp;
