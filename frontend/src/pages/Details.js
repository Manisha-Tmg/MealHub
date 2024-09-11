import React from "react";
import "../Css/Details.css";
import RecipeHeader from "./RecipeHeader";
import RecipeDetails from "./RecipeDetails";
import Instructions from "./Instructions";
import IngredientsList from "./IngredientsList";
import Footer from "../Components/Footer";
import RecipeImage from "./RecipeImage";

const Details = () => {
  return (
    <div>
      <div className="recipe-container">
        <div className="main-recipe">
          <RecipeHeader />
          <RecipeDetails />
          <RecipeImage />
          <IngredientsList />
          <Instructions />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
