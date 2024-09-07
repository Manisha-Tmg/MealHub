import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // State to hold recipe details

  useEffect(() => {
    // Fetch recipe details from API
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/recipes/${id}`);
        const data = await response.json();
        if (response.ok) {
          setRecipe(data.recipe); // Assuming the API returns { recipe: { ... } }
        } else {
          console.error("Error fetching recipe:", data.message);
        }
      } catch (error) {
        console.error("Server error:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>; // Loading state
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
      <p>Cooking Time: {recipe.time} minutes</p>
      <p>Servings: {recipe.servings}</p>
    </div>
  );
};

export default RecipeDetails;
