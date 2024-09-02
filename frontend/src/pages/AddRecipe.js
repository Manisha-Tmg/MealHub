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
  const handleRecipe = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/user/recipe-user", {
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
    <div className="mainn" style={{ height: "80vh" }}>
      <Navbar />

      <div className="add">
        <NavbaraddRecipe />

        <div className="formm" onSubmit={handleRecipe}>
          <label className="recipee">Recipe Title:</label>
          {/* <img className="cake" src="" alt="Cake.jpeg"></img> */}
          <input
            className="input1"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <label className="des">Description:</label>
          <input
            className="input1"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
          <label>Ingredients:</label>
          <input className="input1"></input>{" "}
          <input
            className="input1"
            type=""
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></input>
          <p className="pa">+Add</p>
          <label>Instructions:</label>
          <input
            className="input1"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></input>
          <label>Cooking Time:</label>
          <div className="cook">
            <input
              className="in"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            ></input>
            <input
              className="in"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="bt1">
          <button className="btt" onClick={handleRecipe}>
            Post Recipe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddRecipe;
