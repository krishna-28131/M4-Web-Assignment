const router = require("express").Router();
const controller = require("../controllers/todo.controller");
const { createTodoValidation, idValidation } = require("../validations/todo.validation");

router.post("/add-todo", createTodoValidation, controller.addTodo);
router.get("/get-my-todo/:userId", controller.getUserTodos);
router.put("/update-todo/:todoId", idValidation, controller.updateTodo);
router.delete("/delete-todo/:todoId", idValidation, controller.deleteTodo);

module.exports = router;
