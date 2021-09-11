import React, { useState } from "react";
import { logoutAction } from "../../redux/actionCreators/auth";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import Profile from "../../assets/img/icon/pp.png";

function Sidebar(props) {
  const [activeNotification, setActiveNotification] = useState(false);
  const path = props.location.pathname;

  const clickBellIcon = () => {
    setActiveNotification(true);
  };
  const clickCloseIcon = () => {
    setActiveNotification(false);
  };
  const changeBellIcon = () => {
    if (activeNotification) {
      return <i className="fas fa-bell fa-lg d-none"></i>;
    } else {
      return <i className="fas fa-bell fa-lg " onClick={clickBellIcon}></i>;
    }
  };

  const changeCloseIcon = () => {
    if (activeNotification) {
      return <i className="fas fa-times fa-lg " onClick={clickCloseIcon}></i>;
    } else {
      return <i className="fas fa-times fa-lg d-none"></i>;
    }
  };

  const signOutHandler = () => {
    props.logoutAction();
    !props.auth.isLogin && props.history.push("/login");
  };

  return (
    <>
      {console.log("")}
      <section className="section-sidebar mw-100">
        <Navbar className="" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="flex-column" id="basic-navbar-nav">
            <div className="navbar-profile w-100 ps-5">
              {changeBellIcon()}
              <div className="d-flex flex-column align-items-start text-align-start">
                <img src={Profile} height={56} width={56} alt="pict" />
                <h1>Emir Kharisma</h1>
                <p>online</p>
              </div>
            </div>

            {activeNotification ? (
              <section className="icon-notification">
                {changeCloseIcon()}
                <h1>Notification</h1>
                <div>
                  <h3>Today</h3>
                  <div className="d-flex">
                    <img src={Profile} alt="pict" />
                    <p>There are 10 news update for today. Don’t miss it!</p>
                    <p>2 min</p>
                  </div>
                </div>
                <div>
                  <h3>Yesterday</h3>
                  <div className="d-flex">
                    <img src={Profile} alt="pict" />
                    <p>There are 10 news update for today. Don’t miss it!</p>
                    <p>2 min</p>
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}
            <div className="menu-items w-100 ps-5">
              <Nav className="flex-column align-items-start">
                <Link className={path === "/" ? "active" : ""} to="/">
                  <i className="fab fa-microsoft"></i>
                  Dashboard
                </Link>
                <Link
                  className={path === "/activity" ? "active" : ""}
                  to="/activity"
                >
                  <i className="fas fa-book"></i>
                  Activity
                </Link>
                <Link
                  className={path === "/profile" ? "active" : ""}
                  to="/profile"
                >
                  <i className="fas fa-cog"></i>
                  Setting
                </Link>
                <Link className={path === "/help" ? "active" : ""} to="/help">
                  <i className="fas fa-question-circle"></i>
                  Help
                </Link>
                <Link
                  className={path === "/logout" ? "active" : ""}
                  to="#"
                  onClick={signOutHandler}
                >
                  <span>
                    <i className="fas fa-long-arrow-alt-left"></i>
                    Logout
                  </span>
                </Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </section>
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
    logoutAction: (body) => {
      dispatch(logoutAction(body));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Sidebar));
