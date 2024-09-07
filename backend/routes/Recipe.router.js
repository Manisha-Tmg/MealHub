const express = require("express");
const router = express.Router();
const {
  getRecipeById,
  postRating,
  postReview,
} = require("../controllers/recipeController");

// Route to get recipe details by ID
router.get("/:id", getRecipeById);

// Route to submit a rating
router.post("/:id/rate", postRating);

// Route to submit a review
router.post("/:id/review", postReview);

module.exports = router;
