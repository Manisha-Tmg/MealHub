const Recipe = require("../models/recipeModel");

// Get recipe details by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id); // Fetch recipe by ID
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ recipe });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Post a rating
const postRating = async (req, res) => {
  const { rating } = req.body;
  if (!rating || rating < 1 || rating > 5) {
    return res.status(400).json({ message: "Invalid rating value" });
  }

  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    recipe.ratings.push(rating);
    await recipe.save();

    res.status(200).json({ message: "Rating submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Post a review
const postReview = async (req, res) => {
  const { review } = req.body;
  if (!review || review.trim() === "") {
    return res.status(400).json({ message: "Review cannot be empty" });
  }

  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    recipe.reviews.push(review);
    await recipe.save();

    res.status(200).json({ message: "Review submitted successfully", review });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = {
  getRecipeById,
  postRating,
  postReview,
};
