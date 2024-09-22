const express = require("express");
const { CheckRole, Authentication } = require("../middleware/Auth");
const {
  getMenu,
  createMenu,
  updateMenu,
  deleteMenu,
} = require("../controllers/menu.controllers");

const router = express.Router();

router.get("/", getMenu);
router.post(
  "/",
  [Authentication, CheckRole(["Owner", "Manager", "Super Admin"])],
  createMenu
);
router.put("/:id", [
  Authentication,
  CheckRole(["Owner", "Manager", "Super Admin"]),
  updateMenu,
]);
router.delete("/:id", [
  Authentication,
  CheckRole(["Owner", "Manager", "Super Admin"]),
  deleteMenu,
]);

module.exports = router;
