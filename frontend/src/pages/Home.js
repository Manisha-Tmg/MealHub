import React from "react";
import Body from "../pages/Body";
import Services from "../pages/Services";
import Recipe from "../pages/Recipe";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Body />

      <div className="menu">
        <h1>
          Our<span>Recipe</span>
        </h1>
      </div>

      <Recipe />
      <Services />
    </div>
  );
};

export default Home;
