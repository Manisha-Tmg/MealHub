import React, { useState } from "react";
import "../Css/AddRecipe.css";
import NavbaraddRecipe from "../Components/NavbaraddRecipe";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState();
  const [instructions, setInstructions] = useState();
  const [time, setTime] = useState();
  const navigate = useNavigate();

  return (
    <div style={{ height: "80vh" }}>
      <Navbar />
      <NavbaraddRecipe />
      <div className="add">
        <div className="formm">
          <label className="recipee">Recipe Title:</label>
          {/* <img className="cake" src="" alt="Cake.jpeg"></img> */}
          <input className="input1" type="text" value={title}></input>
          <label className="des">Description:</label>
          <input className="input1" type="text" value={description}></input>
          <label>Ingredients:</label>
          <input className="input1"></input>{" "}
          <input className="input1" type="" value={ingredients}></input>
          <p className="pa">+Add</p>
          <label>Instructions:</label>
          <input className="input1" value={instructions}></input>
          <label>Cooking Time:</label>
          <div className="cook">
            <input value={time}></input>
            <input value={time}></input>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddRecipe;
