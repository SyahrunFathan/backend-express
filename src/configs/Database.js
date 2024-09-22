const { Sequelize } = require("sequelize");
require("dotenv").config();

// Cara 1
const db = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
  host: "localhost",
});

// Cara 2
// const db = new Sequelize("db_test", "root", "", {
//   dialect: "mysql",
//   host: "localhost",
// });

module.exports = db;
