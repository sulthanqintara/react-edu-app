import React from "react";
import "../register/register.css";
import iconGoogle from "../../assets/img/icon/icon-google.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <main>
        <section className="auth-page ">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1>Register</h1>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-12 col-12">
                <form>
                  <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input type="text" class="form-control"></input>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control"></input>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control"></input>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Confirm password</label>
                    <input type="password" class="form-control"></input>
                  </div>
                  <button className="btn btn-register">Register</button>
                  <button className="btn btn-register-google">
                    <img
                      src={iconGoogle}
                      alt=""
                      style={{ marginRight: "13px" }}
                    />
                    Register with Google
                  </button>
                </form>
                <p className="pb-5">
                  Already have account?
                  <Link to="/login">
                    <span> login</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
