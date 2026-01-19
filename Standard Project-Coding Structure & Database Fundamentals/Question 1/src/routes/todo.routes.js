import express from "express";
import {
  getTodos,
  getSingleTodo,
  addTodo,
  updateTodoById,
  deleteTodoById
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/:todoId", getSingleTodo);
router.post("/add", addTodo);
router.put("/update/:todoId", updateTodoById);
router.delete("/delete/:todoId", deleteTodoById);

export default router;
