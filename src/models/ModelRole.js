const { DataTypes } = require("sequelize");
const db = require("../configs/Database");

const ModelRole = db.define(
  "tb_role",
  {
    id_role: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = ModelRole;
