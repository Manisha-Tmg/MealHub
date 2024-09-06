import React from "react";
import Body from "../pages/Body";
import Recipe from "../pages/Recipe";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div style={{ height: "80vh" }}>
      {/* <Navbar /> */}
      <Body />
      <Recipe />
      <Footer />
    </div>
  );
};

export default Home;
