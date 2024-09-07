import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Details = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details from the backend API
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/recipes/${id}`);
        const data = await response.json();
        if (response.ok) {
          setRecipe(data.recipe);
        } else {
          console.log("Error fetching recipe:", data.message);
        }
      } catch (error) {
        console.log("Server error:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <p>Cooking Time: {recipe.time} minutes</p>
      <h3>Reviews</h3>
      <ul>
        {recipe.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <h3>Ratings</h3>
      <p>
        Average Rating:{" "}
        {recipe.ratings.reduce((a, b) => a + b, 0) / recipe.ratings.length}
      </p>
      <Footer />
    </div>
  );
};

export default Details;
