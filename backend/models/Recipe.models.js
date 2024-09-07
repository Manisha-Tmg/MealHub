const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // array of strings for ingredients
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true, // cooking time in minutes
  },
  imageUrl: {
    type: String, // store image URL or path
    required: true,
  },
  ratings: {
    type: [Number], // stores individual ratings
    default: [],
  },
  reviews: {
    type: [String], // stores reviews as array of strings
    default: [],
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
