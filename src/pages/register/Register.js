import React from "react";
import "../register/register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <main className="main-register vh-100">
        <section className="container d-flex vh-100 flex-column justify-content-between">
          <h1 className="m-0">Register</h1>
          <form className="">
            <label>Username</label>
            <input type="email" placeholder="Please input username"></input>
            <label>Email</label>
            <input type="email" placeholder="Please input email"></input>
            <label>Password</label>
            <input type="password" placeholder="Please input password"></input>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password "></input>
            <button className="btn-register mb-3 mt-5" type="submit">
              Register
            </button>
            <button className="btn-register-google d-flex" type="submit">
              <i className="google fab fa-google" />
              <p>Register with Google</p>
            </button>
          </form>
          <p className="pb-5 mt-5">
            Already have account?
            <Link to="/register">
              <span> login</span>
            </Link>
          </p>
        </section>
      </main>
    </>
  );
}

export default Register;
