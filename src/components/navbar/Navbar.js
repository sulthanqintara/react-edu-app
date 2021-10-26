import React, { useState, useEffect } from "react";
import { logoutAction } from "../../redux/actionCreators/auth";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import Profile from "../../assets/img/icon/pp.png";
import { useSelector } from "react-redux";

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
      return <i className="fas fa-times-circle" onClick={clickCloseIcon}></i>;
    } else {
      return <i className="fas fa-times-circle fa-lg d-none"></i>;
    }
  };

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return windowWidth;
  };

  const signOutHandler = () => {
    props.logoutAction();
    !props.auth.isLogin && props.history.push("/login");
  };

  const userInfo = useSelector((reduxState) => reduxState.auth);
  const image = userInfo.authInfo.image
    ? `http://localhost:8000${userInfo.authInfo.image}`
    : Profile;
  console.log(image);
  const name = userInfo.authInfo.name;

  return (
    <>
      {useWindowWidth() < 1200 ? (
        <Navbar className="navbar-resize" expand="lg">
          <Navbar.Brand>
            <Link className="link-profile" to="/profile">
              <img
                src={image}
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
        <section className="col-3 pt-3 pb-3 ps-4">
          <Navbar className="navbar-large w-100">
            <Navbar.Collapse
              className="flex-column h-100 vw-100"
              id="basic-navbar-nav"
            >
              <div className="navbar-profile w-100">
                {changeBellIcon()}
                <div className="d-flex flex-column">
                  <Link className="link-profile" to="/profile">
                    <img
                      src={image}
                      height={56}
                      width={56}
                      className="rounded-circle"
                      alt="pict"
                    />
                  </Link>
                  <h1>{name}</h1>
                  <p>online</p>
                </div>
              </div>
              {activeNotification ? (
                <section className="open-notification">
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
              <div className="menu-items flex-fill">
                <Nav className="flex-column align-items-start">
                  <Link className={path === "/" ? "active" : ""} to="/">
                    <i className="fab fa-microsoft"></i>
                    Dashboard
                  </Link>
                  {userInfo.authInfo.role_id === 1 ? (
                    <Link
                      className={path === "/fasilitator/class" ? "active" : ""}
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
                  <Link className={path === "/help" ? "active" : ""} to="/help">
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
            </Navbar.Collapse>
          </Navbar>
        </section>
      )}

      {/* windowHandlers ? 
        (
          <Navbar className="navbar-resize vw-100" expand="lg">
            <Navbar.Brand>
              <Link className="link-profile" to="/profile">
                <img src={Profile} height={56} width={56} alt="pict" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
  
              <Nav className="">


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
<<<<<<< HEAD
                  <span><i className="fas fa-long-arrow-alt-left"></i>
                    Logout</span>
=======
                  <span>
                    <i className="fas fa-long-arrow-alt-left"></i>
                    Logout
                  </span>
>>>>>>> b809b7c55e4d5f17c3f54e840aaaf80121a00b2b
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        ) : (
          <section className="col-2 pt-3 pb-3 ps-4">
            <Navbar className="navbar-large w-100 h-100">
              <Navbar.Collapse className="flex-column vw-100" id="basic-navbar-nav">
                <div className="navbar-profile w-100">
                  {changeBellIcon()}
                  <div className="d-flex flex-column">
                    <Link className="link-profile" to="/profile">
                      <img src={Profile} height={56} width={56} alt="pict" />
                    </Link>
                    <h1>Emir Kharisma</h1>
                    <p>online</p>
                  </div>
                </div>
                {activeNotification ?
                  (
                    <section className="open-notification">
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
                  )
                }
                <div className="menu-items w-100" >
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
                    <Link
                      className={path === "/help" ? "active" : ""}
                      to="/help"
                    >
                      <i className="fas fa-question-circle"></i>
                      Help
                    </Link>
                    <Link
                      className={path === "/logout" ? "active" : ""}
                      to="/logout"
                    >
                      <span><i className="fas fa-long-arrow-alt-left"></i>
                        Logout</span>
                    </Link>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </section>
        )
              */}
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
