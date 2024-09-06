import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Details = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch recipe data by ID from your backend
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`http://localhost:4000/user/recipe-user/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-details-page">
      <Navbar />
      <div className="recipe-details">
        <h1>{recipe.title}</h1>
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
        <h4>Cooking Time: {recipe.time} minutes</h4>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
