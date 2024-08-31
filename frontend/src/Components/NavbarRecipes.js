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
      </div>
    </div>
  );
};

export default NavbarRecipes;
