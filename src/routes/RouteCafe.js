const express = require("express");
const { Authentication, CheckRole } = require("../middleware/Auth");
const {
  createCafe,
  updateCafe,
  deleteCafe,
  getCafe,
} = require("../controllers/cafe.conterollers");

const router = express.Router();

router.post(
  "/",
  [Authentication, CheckRole(["Owner", "Super Admin"])],
  createCafe
);
router.put(
  "/:id",
  [Authentication, CheckRole(["Owner", "Super Admin"])],
  updateCafe
);
router.delete(
  "/:id",
  [Authentication, CheckRole(["Owner", "Super Admin"])],
  deleteCafe
);
router.get("/", getCafe);

module.exports = router;
