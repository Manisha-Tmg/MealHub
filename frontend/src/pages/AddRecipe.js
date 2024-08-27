import React from "react";
import "./AddRecipe.css";
import NavbarRecipe from "../Components/NavbarRecipe";

const AddRecipe = () => {
  return (
    <div>
      <NavbarRecipe />
      <div className="add">
        <div className="formm">
          <label className="recipee">Recipe Title:</label>
          <img className="cake" src="" alt="Cake.jpeg"></img>
          <input className="input1" type="text"></input>
          <label className="des">Description:</label>
          <input className="input1" type="text"></input>
          <label>Ingredients:</label>
          <input className="input1"></input>{" "}
          <input className="input1" type=""></input>
          <p className="pa">+Add</p>
          <label>Instructions:</label>
          <input className="input1"></input>
          <label>Cooking Time:</label>
          <div className="cook">
            {" "}
            <input></input>
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
