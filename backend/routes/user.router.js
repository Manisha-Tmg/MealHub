const express = require("express");
const router = express.Router(); // for creating routes

const {
  registerUser,
  loginUser,
  userSignin,
} = require("../controllers/user.controller");

//routes
router.post("/register-user", registerUser);
router.post("/login-user", loginUser);

module.exports = router;
