import React from "react";
import Body from "../pages/Body";
import Recipe from "../pages/Recipe";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Recipe />
      <Footer />
    </div>
  );
};

export default Home;
