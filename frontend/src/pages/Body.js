import React from "react";
import "./Body.css";
// import Chef from "../Images/Ismange.jpg";
import Chef from "../Images/main_img.png";

const Body = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h3 className="highlight">
          Get Fresh<span>Food</span>in a Easy Way Our{" "}
        </h3>
        <p className="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          reiciendis quaerat nobis deleniti amet non inventore. Reprehenderit
          recusandae voluptatibus minus tenetur itaque numquam cum quos dolorem
          maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Cumque facilis, quaerat cupiditate nulla quibusdam
          quo sunt esse tempore inventore vel voluptate, amet laudantium
          adipisci veniam nihil quam molestiae omnis mollitia.
        </p>
        <button>Explore All Recipes</button>
      </div>
      {/* <div className="main_image">
        <img src="image/main_img.png" />
      </div> */}
      {/* <div className="hero-image">
        <img src={Chef} alt="Chef" />
      </div>{" "} */}
      <div className="main_image">
        <img src={Chef} alt="Chef" />
      </div>{" "}
    </section>
  );
};

export default Body;
