import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import defaultPicture from "../../assets/img/icon/pp.png";
import { useSelector } from "react-redux";
import { logoutAction } from "../../redux/actionCreators/auth";

function Sidebar(props) {
  const reduxState = useSelector((reduxState) => reduxState.auth);
  const [activeNotification, setActiveNotification] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const path = props.location.pathname;

  const clickBellIcon = () => {
    setActiveNotification(true);
    setChangeIcon(true);
  };

  const clickCloseIcon = () => {
    setActiveNotification(false);
    setChangeIcon(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  const signOutHandler = () => {
    props.logoutAction();
    !props.auth.isLogin && props.history.push("/login");
  };

  return (
    <>
      {width < 1200 ? (
        <Navbar className="navbar-resize" expand="lg">
          <Navbar.Brand>
            <Link className="link-profile" to="/profile">
              <img
                src={`http://localhost:8000${reduxState.authInfo.image}`}
                height={56}
                width={56}
                className="rounded-circle"
                alt="pict"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
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
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <section className="sidebar col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <Navbar
            className={
              activeNotification === false
                ? "full-border h-100 w-100"
                : "half-border h-100 w-100"
            }
          >
            <Navbar.Collapse className="h-100 w-100" id="basic-navbar-nav">
              <div className="navbar-container">
                <div className="navbar-image">
                  {changeIcon ? (
                    <i className="fas fa-bell fa-lg"></i>
                  ) : (
                    <i
                      className="fas fa-bell fa-lg"
                      onClick={clickBellIcon}
                    ></i>
                  )}
                  <div>
                    <Link className="link-profile" to="/profile">
                      {reduxState.authInfo.image ? (
                        <img
                          src={`http://localhost:8000${reduxState.authInfo.image}`}
                          height={56}
                          width={56}
                          className="rounded-circle"
                          alt="pict"
                        />
                      ) : (
                        <img
                          src={defaultPicture}
                          height={56}
                          width={56}
                          className="rounded-circle"
                          alt="pict"
                        />
                      )}
                    </Link>
                    <h1>
                      {reduxState.authInfo.name
                        ? reduxState.authInfo.name
                        : reduxState.authInfo.username}
                    </h1>
                    <p>online</p>
                  </div>
                </div>
                {activeNotification ? (
                  <section className="notification-container">
                    <div className="bg-notification">
                      {changeIcon ? (
                        <i
                          className="fas fa-times-circle"
                          onClick={clickCloseIcon}
                        ></i>
                      ) : (
                        <i className="fas fa-times-circle d-none"></i>
                      )}
                      <h1 className="title">Notification</h1>
                      <div>
                        <h3 className="date-duration">Today</h3>
                        <div className="body d-flex">
                          <img
                            src={defaultPicture}
                            alt="pict"
                            className="image"
                          />
                          <p className="text m-0">
                            There are 10 news update for today. Don’t miss it!
                          </p>
                          <p className="time m-0">2 min</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="date-duration">Yesterday</h3>
                        <div className="body d-flex">
                          <img
                            src={defaultPicture}
                            alt="pict"
                            className="image"
                          />
                          <p className="text m-0">
                            6 new messages from Discussion Group 21
                          </p>
                          <p className="time m-0">Yesterday</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="date-duration">This Week</h3>
                        <div className="body d-flex">
                          <img
                            src={defaultPicture}
                            alt="pict"
                            className="image"
                          />
                          <p className="text m-0">
                            There are 10 news update for today. Don’t miss it!
                          </p>
                          <p className="time m-0">8/10</p>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : (
                  ""
                )}
                <div className="menu-items">
                  <Nav className="item flex-column align-items-start">
                    <Link className={path === "/" ? "active" : ""} to="/">
                      <i className="fab fa-microsoft"></i>
                      Dashboard
                    </Link>
                    {reduxState.authInfo.role_id === 1 ? (
                      <Link
                        className={
                          path === "/fasilitator/class" ? "active" : ""
                        }
                        to="/fasilitator/class"
                      >
                        <i className="fas fa-book"></i>
                        Activity
                      </Link>
                    ) : (
                      <Link
                        className={path === "/activity" ? "active" : ""}
                        to="/activity"
                      >
                        <i className="fas fa-book"></i>
                        Activity
                      </Link>
                    )}
                    <Link
                      className={path === "/profile" ? "active" : ""}
                      to="/profile"
                    >
                      <i className="fas fa-cog"></i>
                      Setting
                    </Link>
                    <Link
                      className={path === "/help" ? "active" : ""}
                      to="/help"
                    >
                      <i className="fas fa-question-circle"></i>
                      Help
                    </Link>
                    <Link
                      className={path === "/logout" ? "active" : ""}
                      to=""
                      onClick={signOutHandler}
                    >
                      <span>
                        <i className="fas fa-long-arrow-alt-left"></i>
                        Logout
                      </span>
                    </Link>
                  </Nav>
                </div>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </section>
      )}
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
