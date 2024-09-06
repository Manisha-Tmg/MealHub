import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Forgotpass from "./pages/Forgotpass";
import Resetpass1 from "./pages/Resetpass1";
import Details from "./pages/Details";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/AddRecipe" element={<AddRecipe />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signin />} />
            <Route path="/Recoverpassword" element={<Forgotpass />} />
            <Route path="/Resetpassword" element={<Resetpass1 />} />
            {/* <Route path="/Details" element={<Details />} /> */}
            <Route path="/recipe/:id" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
