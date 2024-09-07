import React from "react";
import "../Css/Details.css"
import RecipeHeader from "./RecipeHeader";
import RecipeDetails from "./RecipeDetails";

const Details = () => {
  return (
    <div className="recipe-container">
      <div className="main-recipe">
        <RecipeHeader />
        <RecipeDetails />
        <RecipeDetails />
        <I
        <Instructions />
        <NutritionFacts />
      </div>
      <div className="related-recipes">
        <RelatedRecipes />
      </div>
    </div>
  );
};

export default Details;
