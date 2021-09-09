import React from "react";
import "../login/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <main className="main-login vh-100">
        <section className="container d-flex vh-100 flex-column justify-content-between">
          <h1 className="m-0">Login</h1>
          <form className="d-flex flex-column align-items-center mt-2">
            <label className="label-username">Username or Email</label>
            <input type="text" placeholder="Please input username or email"></input>
            <label className="label-password">Password</label>
            <input type="password" placeholder="Please input password"></input>
            <Link to="/forget-password">
              <p>Forgot password?</p>
            </Link>
          </form>
          <div className="btn d-flex flex-column">
            <button className="btn-login mb-3" type="submit">
              Login
            </button>
            <button className="btn-login-google d-flex" type="submit">
              <i className="google fab fa-google" />
              <p>Login with Google</p>
            </button>
          </div>
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
