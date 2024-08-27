import React from "react";
import "./Body.css";
import Chef from "../Images/Imange.jpg";

const Body = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h2>Cook Like a Pro with </h2>
        <h3 className="highlight">
          Our <h3 className="easy">Easy</h3> and <h3 className="easy">Tasty</h3>{" "}
          Recipes
        </h3>
        <p className="p">
          From quick and easy meals to gourmet delights, we have something for
          every taste and occasion.
        </p>
        <button>Explore All Recipes</button>
      </div>
      <div className="hero-image">
        <img src={Chef} alt="Chef" />
      </div>{" "}
    </section>
  );
};

export default Body;
