const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
const {
  createUserValidation,
  idValidation,
} = require("../validations/user.validation");

router.post("/", createUserValidation, controller.createUser);
router.get("/", controller.getUsers);
router.get("/:id", idValidation, controller.getUserById);
router.put("/:id", idValidation, controller.updateUser);
router.delete("/:id", idValidation, controller.deleteUser);

module.exports = router;
