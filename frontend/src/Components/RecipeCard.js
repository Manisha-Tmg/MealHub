import React from "react";
import "./RecipeCard.css";

function RecipeCard({ image, title, description, time, difficulty, servings }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="recipe-info">
        <span>{time}</span>
        <span>{difficulty}</span>
        <span>{servings}</span>
      </div>

      <button className="button">See Full Details</button>
    </div>
  );
}

export default RecipeCard;
