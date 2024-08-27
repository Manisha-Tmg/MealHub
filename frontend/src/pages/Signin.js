import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
const Signin = () => {
  return (
    <form className="form-sign">
      <h2 className="h-22">Sign up</h2>

      <div className="m-3">
        <label for="exampleInputEmail1" className="form-label">
          Username{" "}
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        <div class="m-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="remember-forgot">
          <Link id="forgot1" to={"#"}>
            Forgot Password?
          </Link>
        </div>
        <button type="submit" className="btn11">
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
  );
};

export default Signin;
