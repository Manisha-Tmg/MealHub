import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      const res = await fetch("http://localhost:4000/user/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Login successful");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error occurred", error);
    }
  };

  return (
    <div className="body-login">
      <form className="form-login" onSubmit={handleLogin}>
        <h2 className="h-2">LOG IN</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="remember-forgot">
          <Link id="forgot" to={"/Recoverpassword"}>
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="btn1" onClick={handleLogin}>
          Login
        </button>

        <label className="account" htmlFor="exampleCheck1">
          Don't have an account?{" "}
          <Link to={"/register"} className="sign">
            Sign Up
          </Link>{" "}
        </label>
      </form>
    </div>
  );
};

export default Login;
