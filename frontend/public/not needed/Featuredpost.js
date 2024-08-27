import React from "react";
import food1 from "../Images/pexels-xmtnguyen-699953.jpg";
import food2 from "../Images/Mexican.jpg";
import food3 from "../Images/Chinese.jpeg";
import "./Featuredpost.css";

const Featuredpost = () => {
  return (
    <div className="main">
      <div className="Food1">
        <h2 className="h0"> Featured posts</h2>{" "}
        <div className="food">
          <img src={food2} alt=""></img>
          <img src={food3} alt=""></img>
        </div>{" "}
      </div>

      <div className="Food1">
        <img src={food1} alt=""></img>
        <h3 className="h9">
          Healthy Breakfast Ideas When There's No Time To Eat
        </h3>{" "}
        <p className="date">On 30 October 2021</p>
      </div>
    </div>
  );
};

export default Featuredpost;
