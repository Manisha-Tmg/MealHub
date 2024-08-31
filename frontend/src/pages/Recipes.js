import React from "react";
import "../Css/Recipe.css";

import recipe1 from "../Images/Sprout.jpg";
import recipe2 from "../Images/Chicken.jpg";
import recipe3 from "../Images/vegetable.jpg";
import recipe4 from "../Images/Cake.jpeg";
import RecipeCard from "../Components/RecipeCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import NavbarRecipes from "../Components/NavbarRecipes";
const Recipe = () => {
  return (
    <div style={{ height: "80vh" }}>
      <Navbar />
      <NavbarRecipes />
      <section className="recipe-list1">
        <div className="menu">
          <h1>
            Our<span>Recipe</span>
          </h1>
        </div>
        <div className="recipe-list">
          <RecipeCard
            image={recipe1}
            title="Sprout Salad "
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />

          <RecipeCard
            image={recipe2}
            title="Chicken Curry"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
          <RecipeCard
            image={recipe3}
            title="Vegetable Salad"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />

          <RecipeCard
            image={recipe4}
            title="Chocolate Cake"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Recipe;
