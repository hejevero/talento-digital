const { DataTypes } = require("sequelize");
const sequelize = require("index");

const user = sequelize.define(
    "user",
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        timestamps: true,
        freezeTableName: true,
    }
);

module.exports = user;
