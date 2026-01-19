const express = require("express");
const usersRouter = require("./routes/users.routes");

require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
