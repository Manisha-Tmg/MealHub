const express = require("express");
const router = express.Router(); // for creating routes

const {
  registerUser,
  loginUser,
  recipeUser,
} = require("../controllers/user.controller");

//routes
router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
router.post("/recipe-user", recipeUser);

module.exports = router;
