import React, { useState } from "react";
import "../register/register.css";
import iconGoogle from "../../assets/img/icon/icon-google.svg";
import { Link, withRouter } from "react-router-dom";
import { registerAction } from "../../redux/actionCreators/auth";
import { connect } from "react-redux";

function Register(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    if (userName.length < 1) {
      setErrorMessage("Username is Required!");
      setShowMessage(true);
    } else if (userName.length < 5) {
      setErrorMessage("Username must have 5 or more characters!");
      setShowMessage(true);
    } else if (email.length < 1) {
      setErrorMessage("Email is Required!");
      setShowMessage(true);
    } else if (!email.includes("@")) {
      setErrorMessage("Please input a Valid Email!");
      setShowMessage(true);
    } else if (password.length < 1) {
      setErrorMessage("Password is Required!");
      setShowMessage(true);
    } else if (password.length < 5) {
      setErrorMessage("Password must have 5 or more characters!");
      setShowMessage(true);
    } else if (password !== confirmPassword) {
      setErrorMessage("Those password didn't match. Try again.");
      setShowMessage(true);
    } else {
      const form = new URLSearchParams();
      form.append("username", userName);
      form.append("email", email);
      form.append("password", password);
      form.append("role_id", 1);
      props.registerAction(form);
      if (props.auth.error) {
        setErrorMessage("Error");
        setShowMessage(true);
      }
      window.alert("You're now Registerd, let's sign in!");
      props.history.push("/login");
    }
  };

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
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
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
                  <div className="mb-3">
                    <label className="form-label">Confirm password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                  </div>
                  {showMessage ? (
                    <p className="m-0" style={{ color: "red" }}>
                      {errorMessage}
                    </p>
                  ) : (
                    ""
                  )}
                  <button
                    className="btn btn-register"
                    onClick={registerHandler}
                  >
                    Register
                  </button>
                  <button className="btn btn-register-google">
                    <img
                      src={iconGoogle}
                      alt=""
                      style={{ marginRight: "13px" }}
                    />
                    Register with Google
                  </button>
                </form>
                <p className="pb-5 mt-5">
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

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registerAction: (body) => {
      dispatch(registerAction(body));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
