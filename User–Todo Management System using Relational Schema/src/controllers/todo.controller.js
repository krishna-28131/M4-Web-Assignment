const supabase = require("../config/supabase");
const { validationResult } = require("express-validator");

exports.addTodo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { title, description, userId } = req.body;

  const { data: user } = await supabase
    .from("users")
    .select("id")
    .eq("id", userId)
    .single();

  if (!user)
    return res.status(404).json({ message: "User not found" });

  const { error } = await supabase.from("todos").insert([
    { title, description, user_id: userId }
  ]);

  if (error)
    return res.status(400).json({ error: error.message });

  res.status(201).json({ message: "Todo created" });
};

exports.getUserTodos = async (req, res) => {
  const { userId } = req.params;

  const { data } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId);

  res.json(data);
};

exports.updateTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await supabase
    .from("todos")
    .update(req.body)
    .eq("id", todoId);

  if (error)
    return res.status(400).json({ error: error.message });

  res.json({ message: "Todo updated" });
};

exports.deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", todoId);

  if (error)
    return res.status(400).json({ error: error.message });

  res.json({ message: "Todo deleted" });
};
