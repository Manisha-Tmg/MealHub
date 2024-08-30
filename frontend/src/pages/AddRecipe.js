import React from "react";
import "./AddRecipe.css";
import NavbarRecipe from "../Components/NavbarRecipe";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const AddRecipe = () => {
  return (
    <div style={{ height: "80vh" }}>
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
      <Footer />
    </div>
  );
};

export default AddRecipe;
