import React from "react";
import "./NavbarRecipe.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NavbarRecipe = () => {
  return (
    <div className="NavbarRecipe">
      <div className="icons">
        <FontAwesomeIcon className="icon" icon={faArrowLeft} />{" "}
        <h2 className="h22">Add New Recipe</h2>{" "}
      </div>
      <div className="bt1">
        <button className="bt">Post Recipe</button>
      </div>
    </div>
  );
};

export default NavbarRecipe;
