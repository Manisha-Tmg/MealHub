import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Signin.css";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    console.log(email, username, password);
    try {
      const res = await fetch("http://localhost:4000/user/register-user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const userData = await res.json();
      if (userData.success) {
        alert("User created sucessfully");
        navigate("/login");
      } else {
        alert(userData.message);
      }
    } catch (error) {
      console.log("errorrrr 404", error);
    }
  };
  return (
    <div className="body-signin">
      <form className="form-sign" onSubmit={handleSignup}>
        <h2 className="h-22">SIGN UP</h2>

        <div className="m-3">
          <label for="exampleInputEmail1" className="form-label">
            Username{" "}
          </label>
          <input
            type="username"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div class="m-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn11" onClick={handleSignup}>
            Signup
          </button>
          <label className=" account1" for="exampleCheck1">
            Already have an account?{" "}
            <Link to={"/Login"} className="log">
              Login
            </Link>{" "}
          </label>
        </div>
      </form>
    </div>
  );
};

export default Signin;
