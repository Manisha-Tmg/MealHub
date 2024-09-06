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
  const [image, setImage] = useState(null); // New state for the image
  const navigate = useNavigate();

  const handleRecipe = async (event) => {
    event.preventDefault();

    const formData = new FormData(); // Create form data to send both text and image
    formData.append("title", title);
    formData.append("description", description);
    formData.append("ingredients", ingredients);
    formData.append("instructions", instructions);
    formData.append("time", time);
    if (image) {
      formData.append("image", image); // Append the image if available
    }

    try {
      const res = await fetch("http://localhost:4000/user/recipe-user", {
        method: "POST",
        body: formData, // Send formData instead of JSON
      });

      const recipeData = await res.json();
      if (recipeData.success) {
        alert("Recipe added successfully");
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
          <label className="label1">Recipe Title:</label>
          <input
            className="input1"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <label className="label1">Recipe Image:</label>
          <input
            className="input1"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <label className="label1">Description:</label>
          <input
            className="input1"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
          <label className="label1">Ingredients:</label>
          <input className="input1"></input>
          <input
            className="input1"
            type=""
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          ></input>
          <p className="pa">+Add</p>
          <label className="label1">Instructions:</label>
          <input
            className="input1"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></input>
          <label className="label1">Cooking Time:</label>
          <div className="cook">
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
