const supabase = require("../config/supabase");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const { error } = await supabase.from("users").insert([
    { name, email, password: hashed }
  ]);

  if (error)
    return res.status(400).json({ error: error.message });

  res.status(201).json({ message: "User registered successfully" });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("users").delete().eq("id", id);

  if (error)
    return res.status(400).json({ error: error.message });

  res.json({ message: "User and related todos deleted (CASCADE)" });
};
