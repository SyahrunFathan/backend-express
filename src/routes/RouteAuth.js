const express = require("express");
const {
  AuthLogin,
  createUser,
  RemoveToken,
} = require("../controllers/auth.controllers");
const { Authentication, CheckRole } = require("../middleware/Auth");

const router = express.Router();

router.post("/", AuthLogin);
router.post(
  "/create",
  [Authentication, CheckRole(["Owner", "Super Admin"])],
  createUser
);
router.delete("/:id", [Authentication], RemoveToken);

module.exports = router;
