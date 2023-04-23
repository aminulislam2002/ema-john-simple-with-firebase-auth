import React, { useState } from "react";
import "./SingUp.css";
import { Link } from "react-router-dom";

const SingUp = () => {
  const [error, setError] = useState(" ");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sing Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required />
        </div>
        <input className="btn-submit" type="submit" value="Sing Up" />
      </form>
      <p>
        <small>
          Already have an account? <Link to="/login">Log In</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SingUp;
