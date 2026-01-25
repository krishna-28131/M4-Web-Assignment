const { body, param } = require("express-validator");

exports.createUserValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
  body("age")
    .optional()
    .isInt({ min: 18 })
    .withMessage("Age must be 18 or above"),
];

exports.idValidation = [
  param("id").isUUID().withMessage("Invalid user ID"),
];
