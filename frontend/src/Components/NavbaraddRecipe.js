import React from "react";
import "../Css/NavbarRecipe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbaraddRecipe = () => {
  return (
    <div className="NavbarRecipe">
      <div className="icons">
        <Link to={"/"}>
          <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        </Link>
        <h2 className="h22">Add New Recipe</h2>{" "}
      </div>
      <div className="bt1">
        <Link to={"/"}>
          {" "}
          <button className="bt" onclick={"/recipes"}>
            Post Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbaraddRecipe;
