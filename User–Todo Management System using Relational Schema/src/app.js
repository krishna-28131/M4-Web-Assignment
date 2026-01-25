const express = require("express");
const app = express();

app.use(express.json());
app.use("/users", require("./routes/user.routes"));
app.use("/todos", require("./routes/todo.routes"));

module.exports = app;
