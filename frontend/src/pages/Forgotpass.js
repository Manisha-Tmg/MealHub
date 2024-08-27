import React from "react";
import "./Forgot.css";

const Forgotpass = () => {
  return (
    <div>
      <form className="form-login">
        <h2 className="h-2">Forgot Password</h2>
        <p className="enter">
          Enter your phone number to receive your password reset instructions.
        </p>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="Numbers"
            placeholder="Enter your number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <button type="submit" className="btn1">
            Recover Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forgotpass;
