const supabase = require("../config/supabase");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, password, age, role } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase.from("users").insert([
    { name, email, password: hashedPassword, age, role },
  ]);

  if (error) return res.status(400).json({ error: error.message });

  res.status(201).json({ message: "User created successfully" });
};

exports.getUsers = async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) return res.status(404).json({ message: "User not found" });
  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from("users")
    .update(req.body)
    .eq("id", id);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "User updated successfully" });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "User deleted successfully" });
};
