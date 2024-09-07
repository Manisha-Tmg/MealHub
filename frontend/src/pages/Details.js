import React from "react";
import "../Css/Details.css";
import RecipeHeader from "./RecipeHeader";
import RecipeDetails from "./RecipeDetails";
import Instructions from "./Instructions";
import IngredientsList from "./IngredientsList";
import Footer from "../Components/Footer";
import RelatedRecipes from "./RelatedRecipes";

const Details = () => {
  return (
    <div className="recipe-container">
      <div className="main-recipe">
        <RecipeHeader />
        <RecipeDetails />
        <RecipeDetails />
        <Instructions />
        <IngredientsList />
      </div>
      <div className="related-recipes">
        <RelatedRecipes />
        <Footer />
      </div>
    </div>
  );
};

export default Details;
