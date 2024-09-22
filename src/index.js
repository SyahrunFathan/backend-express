const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./configs/Database");
require("dotenv").config();
// const createModel = require("./models/ModelUser");
const RouteMenu = require("./routes/RouteMenu");
const RouteAuth = require("./routes/RouteAuth");
const RouteCafe = require("./routes/RouteCafe");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

try {
  db.authenticate();
  console.log("Database connected....");

  // createModel.sync();
} catch (error) {
  console.log(error);
}

app.use("/menu", RouteMenu);
app.use("/auth", RouteAuth);
app.use("/cafe", RouteCafe);

app.listen(5001, () => console.log("Server running..."));
