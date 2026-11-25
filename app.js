require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index.js");
const { login, createUser } = require("./controllers/users.js");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(console.error);

app.use(express.json());
app.use(cors());
app.post("/signin", login);
app.post("/signup", createUser);
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log("Server running on PORT => ", PORT);
});

//const routes = require("./routes");
//app.use("/", routes);
// app.use((req, res, next) => {
//   req.user = {
//     _id: "6b0622b54ac73f453eb56e95",
//   };
//   next();
// });
