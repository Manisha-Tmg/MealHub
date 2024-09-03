const User = require("../models/user.models");
const Recipe = require("../models/user.models");
const jwt = require("jsonwebtoken");

// user registration

const registerUser = async (req, res) => {
  try {
    //getting data (inputs) from user/frontend
    const { username, email, password } = req.body;

    const newuser = await User.create({
      // Model.create => to create a user
      username,
      email,
      password,
    });
    await newuser.save();

    if (!newuser)
      return res
        .status(400)
        .json({ success: false, message: "Unable to create user." });

    return res
      .status(201)
      .json({ success: true, message: "User create successfully.", newuser });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Something went wrong.", error: error });
  }
};

// user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; //from user/frontend

    //checking wether user exist or not
    const user = await User.find({ email }); // model.find to find from that model
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid email or password " });
    }

    // checking wether password is correct or not

    if (password === user[0].password) {
      // all credientials are true

      const token = jwt.sign(user[0].id, "JWT_SECRET");
      console.log(token);

      return res
        .status(201)
        .json({ success: true, message: "Login Successful", token, user });
    }

    return res
      .status(404)
      .json({ success: false, message: "Invalid email or password" });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Internal Server Error" });
  }
};

//for addrecipe
const recipeUser = async (req, res) => {
  try {
    const { title, description, ingredients, instructions, time } = req.body;
    console.log(req.body);
    const newRecipe = await Recipe.create({
      title,
      description,
      ingredients,
      instructions,
      time,
    });
    await newRecipe.save();

    return res
      .status(201)
      .json({ success: false, message: "Created sucessfully.", newRecipe });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, message: "Unable to add recipe.", error: error });
  }
};
module.exports = {
  registerUser,
  loginUser,
  recipeUser,
};
