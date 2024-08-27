const express = require("express");
const app = express();

const cors = require("cors");

const connectDB = require("./database/connectDB");
connectDB();

const port = 4000;

app.use(express.json());
app.use(cors());

const userRouter = require("./routes/user.router");

app.use("/user", userRouter);

app.get("/health", (req, res) => {
  res.send("Your server health is good.");
});

// #listing the server
app.listen(port, console.log(`Server is running on port ${port} 🌐`));
