import React from "react";
import post1 from "../Images/strawberry.jpg";
import post2 from "../Images/Pastaa.jpeg";
import post3 from "../Images/baked.jpeg";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="rpost">Recent Posts From our users</h2>
      <div className="blogid">
        <div className="blog-post">
          <img src={post1} alt="Blog Post 1" />
          <h3>Greek Pasta salad With Cucumber and Carrots</h3>
          <p>Start your part of the day with this tasty recipe.</p>
        </div>
        <div className="blog-post">
          <img src={post2} alt="Blog Post 2" />
          <h3>Strawberry Salad With avocado</h3>
          <p>Start your part of the day with this tasty recipe.</p>
        </div>
        <div className="blog-post">
          <img src={post3} alt="Blog Post 2" />
          <h3>How to make the best baked sweet potatoes</h3>
          <p>Start your part of the day with this tasty recipe.</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Blog;
