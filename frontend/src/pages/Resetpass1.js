import React from "react";
import "./Forgot.css";

const Resetpass1 = () => {
  return (
    <div>
      <form className="form-login">
        <h2 className="h-2">Reset Password</h2>
        <p className="enter">Please reset your password.</p>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Password
          </label>
          <input
            type="Password"
            placeholder=""
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />{" "}
          <label for="exampleInputEmail1" className="form-label">
            Confirm Password
          </label>
          <input
            type="Password"
            placeholder=""
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <button type="submit" className="btn1">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Resetpass1;
