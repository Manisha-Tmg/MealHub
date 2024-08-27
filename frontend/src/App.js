import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Recipes from "./pages/Recipes";
import Forgotpass from "./pages/Forgotpass";
import Resetpass1 from "./pages/Resetpass1";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/AddRecipe" element={<AddRecipe />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signin />} />
            {/* <Route path="/Signin" element={<Forgotpass />} />
            <Route path="/Signinn" element={<Resetpass1 />} /> */}
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
