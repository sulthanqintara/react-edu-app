import { useEffect } from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import Profile from "../../assets/img/icon/pp.png";

function Navbar() {

  const animation = () => {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimbottom = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "bottom": itemPosNewAnimbottom.bottom + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimbottom = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "bottom": itemPosNewAnimbottom.bottom + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on('resize', function () {
      setTimeout(function () { animation(); }, 500);
    });

  }, []);

  return (
    <nav className="navbar d-flex navbar-expand-lg navbar-mainbg">
      <img
        src={Profile}
        alt="images"
      />
      <NavLink className="navbar-brand navbar-logo" to="#">
        Erik Kharisma
      </NavLink>
      <p>online</p>
      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () { animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav flex-column ml-auto">

          <div className="hori-selector">
            {/* <div className="left"></div>
              <div className="right"></div> */}
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="#">
              <i
                className="fas fa-tachometer-alt">
              </i>Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              <i
                className="far fa-address-book">
              </i>Activity
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              <i
                className="far fa-clone">
              </i>Setting
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              <i
                className="far fa-chart-bar">
              </i>Help
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link logout" to="#">
              <i
                className="far fa-copy">
              </i>Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;