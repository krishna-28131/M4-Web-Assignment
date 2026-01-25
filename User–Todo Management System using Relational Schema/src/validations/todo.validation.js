const { body, param } = require("express-validator");

exports.createTodoValidation = [
  body("title").notEmpty().withMessage("Title required"),
  body("userId").isUUID().withMessage("Invalid user ID"),
];

exports.idValidation = [
  param("todoId").isUUID().withMessage("Invalid todo ID"),
];
