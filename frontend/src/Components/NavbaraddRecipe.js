import React, { useState } from "react";
import "../Css/NavbarRecipe.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbaraddRecipe = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState();
  const [instructions, setInstructions] = useState();
  const [time, setTime] = useState();
  const navigate = useNavigate();
  const handleRecipe = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/recipe-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          ingredients,
          instructions,
          time,
        }),
      });

      const recipeData = await res.json();
      if (recipeData.success) {
        alert("Recipe added sucessfully");
        navigate("/");
      } else {
        alert(recipeData.message);
      }
    } catch (error) {
      console.log("Error occurred", error);
    }
  };
  return (
    <div className="NavbarRecipe">
      <div className="icons">
        <Link to={"/"}>
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </Link>
        <h2 className="h22">Add New Recipe</h2>{" "}
      </div>
      <div className="bt1">
        <button className="bt" onclick={handleRecipe}>
          Post Recipe
        </button>
      </div>
    </div>
  );
};

export default NavbaraddRecipe;
