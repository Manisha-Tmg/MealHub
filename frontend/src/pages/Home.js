import React from "react";
import Body from "../pages/Body";
import Recipe from "../pages/Recipe";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div style={{ height: "80vh" }}>
      <Body />
      <Recipe />
      <Footer />
    </div>
  );
};

export default Home;
