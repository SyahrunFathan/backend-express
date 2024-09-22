const jwt = require("jsonwebtoken");
const ModelUser = require("../models/ModelUser");

const Authentication = async (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  const token = authHeaders && authHeaders.split(" ")[1];
  if (!token) return res.sendStatus(401);
  if (!req.cookies.token) return res.sendStatus(401);
  if (token !== req.cookies.token.token) return res.sendStatus(403);
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode) => {
    if (err) return res.sendStatus(403);
    req.userId = decode.userId;

    next();
  });
};
const CheckRole = (Array) => {
  return async (req, res, next) => {
    const checkUser = await ModelUser.findByPk(req.cookies.token.userId);
    if (Array.includes(checkUser.role)) {
      next();
    } else {
      return res.sendStatus(403);
    }
  };
};

module.exports = { Authentication, CheckRole };
