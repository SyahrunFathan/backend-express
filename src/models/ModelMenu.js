const { DataTypes } = require("sequelize");
const db = require("../configs/Database");

const ModelMenu = db.define(
  "tb_menu",
  {
    id_menu: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      validate: {
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    recommended: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = ModelMenu;
