const router = require("express").Router();
const controller = require("../controllers/user.controller");
const { signupValidation } = require("../validations/user.validation");

router.post("/signup", signupValidation, controller.signup);
router.delete("/:id", controller.deleteUser);

module.exports = router;
