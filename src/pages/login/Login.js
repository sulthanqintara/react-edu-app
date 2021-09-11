import React, { useState } from "react";
import "../login/login.css";
import iconGoogle from "../../assets/img/icon/icon-google.svg";
import { Link, withRouter } from "react-router-dom";
import { loginAction } from "../../redux/actionCreators/auth";
import { connect } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    if (email.length < 1) {
      setErrorMessage("Email or Username is Required!");
      setShowMessage(true);
    } else if (password.length < 1) {
      setErrorMessage("Password is Required!");
      setShowMessage(true);
    } else if (password.length < 5) {
      setErrorMessage("Password must have 5 or more characters!");
      setShowMessage(true);
    } else if (props.auth.error) {
      setErrorMessage("Invalid E-mail or Password!");
      setShowMessage(true);
    } else {
      const form = new URLSearchParams();
      form.append("email", email);
      form.append("password", password);
      props.loginAction(form);
      if (props.auth.isLogin) {
        setShowMessage(false);
        props.history.push("/");
      }
    }
  };
  return (
    <>
      <main>
        <section className="auth-page h-auto">
          <div className="container container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1>Login</h1>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-12 col-12">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Username or Email</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <Link to="/forget-password">
                    <p className="text-end mt-0">Forgot password?</p>
                  </Link>
                  {showMessage ? (
                    <p className="m-0" style={{ color: "red" }}>
                      {errorMessage}
                    </p>
                  ) : (
                    ""
                  )}
                  <button className="btn btn-register" onClick={loginHandler}>
                    Login
                  </button>
                  <button className="btn btn-register-google">
                    <img
                      src={iconGoogle}
                      alt=""
                      style={{ marginRight: "13px" }}
                    />
                    Login with Google
                  </button>
                </form>
                <p className="pb-5 mt-5">
                  New user?
                  <Link to="/register">
                    <span> Register</span>
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
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (body) => {
      dispatch(loginAction(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
