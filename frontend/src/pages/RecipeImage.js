import React from "react";
import chicken from "../Images/pexels-xmtnguyen-699953.jpg";
const RecipeImage = () => {
  return (
    <div className="recipe-image">
      <img src={chicken} alt="Mixed Greens with Sun-Dried Tomato Dressing" />
    </div>
  );
};

export default RecipeImage;
