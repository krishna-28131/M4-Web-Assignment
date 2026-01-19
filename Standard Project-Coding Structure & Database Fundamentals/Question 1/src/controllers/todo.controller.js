import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from "../models/todo.model.js";

export const getTodos = (req, res) => {
  try {
    const todos = getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingleTodo = (req, res) => {
  try {
    const todo = getTodoById(req.params.todoId);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addTodo = (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = createTodo(req.body.title);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTodoById = (req, res) => {
  try {
    const updated = updateTodo(req.params.todoId, req.body);

    if (!updated) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTodoById = (req, res) => {
  try {
    const deleted = deleteTodo(req.params.todoId);

    if (!deleted) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
