import React from "react";
import "./SingUp.css";
import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Sing Up</h1>
      <form>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="confirm" id="password" required />
        </div>
        <input className="btn-submit" type="submit" value="Sing Up" />
      </form>
      <p>
        <small>
          Already have an account? <Link to="/login">Log In</Link>
        </small>
      </p>
    </div>
  );
};

export default SingUp;
