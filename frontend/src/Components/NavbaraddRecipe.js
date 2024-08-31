import React from "react";
import "../Css/NavbarRecipe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbarRecipes = () => {
  return (
    <div className="NavbarRecipe">
      <div className="icons">
        <Link to={"/"}>
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </Link>
        <h2 className="h22">Add New Recipe</h2>{" "}
      </div>
      <div className="bt1">
        <button className="bt">Post Recipe</button>
      </div>
    </div>
  );
};

export default NavbarRecipes;
