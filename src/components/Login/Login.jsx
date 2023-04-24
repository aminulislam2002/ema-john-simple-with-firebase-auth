import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [show, setShow] = useState(false);

  const { singIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, email, password);

    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Log In</h1>
      <form onSubmit={handleLogIn}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type={show ? "text" : "password"} name="password" id="password" required />
          <p onClick={() => setShow(!show)}>
            <small>{show ? <span>Hide Password</span> : <span>Show Password</span>}</small>
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New to Ema-John? <Link to="/singup">Create new account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
