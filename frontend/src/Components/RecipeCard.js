import React from "react";
import "../Css/RecipeCard.css";
import { Link } from "react-router-dom";

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

      <Link to={"/recipe/:id"}>
        <button className="button">See Full Details</button>
      </Link>
    </div>
  );
}

export default RecipeCard;
