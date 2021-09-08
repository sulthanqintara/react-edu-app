import React from "react";
import "../login/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <main className="main-login vh-100">
        <section className="container d-flex vh-100 flex-column justify-content-between">
          <h1 className="m-0">Login</h1>
          <form className="d-flex flex-column align-items-center">
            <label className="">Username or Email</label>
            <input type="text" placeholder=""></input>
            <label>Password</label>
            <input type="password" placeholder=""></input>
            <Link to="/">
              <p>Forgot password?</p>
            </Link>
            <button className="btn-login mb-3" type="submit">
              Login
            </button>
            <button className="btn-login-google d-flex" type="submit">
              <i className="google fab fa-google" />
              <p>Login with Google</p>
            </button>
          </form>
          <p className="pb-5 m-0">
            New user?
            <Link to="/register">
              <span> Register</span>
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}

export default Login;
