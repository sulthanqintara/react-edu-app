import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Pict1 from "../../assets/img/icon/carousel1.png";
import Pict2 from "../../assets/img/icon/carousel2.png";
import Pict3 from "../../assets/img/icon/carousel3.jpg";
import ChatMessage from "../../components/ChatMessage";
import AllSchedule from "../../components/allSchedule/AllSchedule";
import MySchedule from "../../components/mySchedule/MySchedule";
import FasilitatorClass from "../../components/fasilitatorSchedule/FasilitatorSchedule";
import { useSelector } from "react-redux";
import "./home.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

function Home(props) {
  const url = process.env.REACT_APP_BASE_URL;
  const newMonth = new Date();
  const dateNow = new Date(Date.now());
  const [active, setActive] = useState(0);
  const [data, setData] = useState([]);
  const [changeSchedule, setChangeSchedule] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [openMessage, setOpenMessage] = useState(false);
  const auth = useSelector((reduxState) => reduxState.auth);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const imageProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false,
  };

  const fadeImages = [
    {
      url: Pict1,
      caption: "New update for front end development class sylabus!",
    },
    {
      url: Pict2,
      caption: "New update for front end development class sylabus!e",
    },
    {
      url: Pict3,
      caption: "New update for front end development class sylabus!e",
    },
  ];

  const whatDate = (day) => {
    const dateNow = new Date(Date.now());
    const dayNow = dateNow.getDay();
    if (day === dayNow) {
      return dateNow.getDate(); //day sama, return dateNow
    }
    if (day < dayNow) {
      //day lebih lama dari day sekarang, ambil date dari day sebelumnya
      const daysAgo = new Date(
        Date.now() - (dayNow - day) * 24 * 60 * 60 * 1000
      );
      return daysAgo.getDate();
    }
    if (day > dayNow) {
      //day lebih cepat dari day sekarang, ambil date dari day setelahnya
      const daysAgo = new Date(
        Date.now() + (day - dayNow) * 24 * 60 * 60 * 1000
      );
      return daysAgo.getDate();
    }
  };
  const getByDay = (filter) => {
    axios
      .get(`${url}/classes/day-others?day=${filter}`)
      .then(({ data }) => {
        setData(data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getClassByUser = (filter, id) => {
    axios
      .get(`${url}/classes/day?day=${filter}&user_id=${id}`)
      .then(({ data }) => {
        console.log(data);
        setData(data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getClassByFasilitator = (filter, id) => {
    axios
      .get(`${url}/classes/day?day=${filter}&facilitator_id=${id}`)
      .then(({ data }) => {
        setData(data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dataClass = (filter, id) => {
    if (auth?.authInfo?.role_id === 1) {
      return getClassByFasilitator(filter, id);
    } else {
      return getClassByUser(filter, id);
    }
  };

  useEffect(() => {
    const date = dateNow.getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setActive(date);
    getByDay(days[date]);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <main className="main-home">
        <Navbar />
        <section className="column-middle col-6 col-sm-6 col-md-6 col-lg-5 col-xl-5">
          <div className="bd-slider ">
            <div className="title-slider">
              <h1>News</h1>
            </div>
            <div className="slide-container">
              <Fade {...imageProperties}>
                {fadeImages.map((fadeImage, index) => (
                  <div className="each-fade" key={index}>
                    <h2 className="slider-caption">{fadeImage.caption}</h2>
                    <img
                      src={fadeImage.url}
                      alt="First slide"
                      className="image-item"
                    />
                  </div>
                ))}
              </Fade>
            </div>
          </div>
          <div className="bd-schedule">
            {auth.authInfo.role_id === 1 ? (
              <div className="mb-4">
                <div className="title-date">
                  <h1>My Class</h1>
                  <i className="far fa-calendar-alt fa-lg"></i>
                </div>
                <div className="text-center">
                  <h4>{monthNames[newMonth.getMonth()]} 2016</h4>
                </div>
              </div>
            ) : (
              <div className="title-date">
                <h1>
                  Today, {monthNames[newMonth.getMonth()]} {dateNow.getDate()}
                </h1>
                <i className="far fa-calendar-alt fa-lg"></i>
              </div>
            )}

            <div className="select-date">
              <div
                className={active === 1 ? "click-day" : "non-click"}
                onClick={() => {
                  setActive(1);
                  changeSchedule
                    ? getByDay("Monday")
                    : dataClass("Monday", auth.authInfo.user_id);
                }}
              >
                <h5>Mo</h5>
                <h5>{whatDate(1)}</h5>
              </div>
              <div
                className={active === 2 ? "click-day" : "non-click"}
                onClick={() => {
                  setActive(2);
                  changeSchedule
                    ? getByDay("Tuesday")
                    : dataClass("Tuesday", auth.authInfo.user_id);
                }}
              >
                <h5>To</h5>
                <h5>{whatDate(2)}</h5>
              </div>
              <div
                className={active === 3 ? "click-day" : "non-click"}
                onClick={() => {
                  setActive(3);
                  changeSchedule
                    ? getByDay("Wednesday")
                    : dataClass("Wednesday", auth.authInfo.user_id);
                }}
              >
                <h5>We</h5>
                <h5>{whatDate(3)}</h5>
              </div>
              <div
                className={active === 4 ? "click-day" : "non-click"}
                onClick={() => {
                  setActive(4);
                  changeSchedule
                    ? getByDay("Thursday")
                    : dataClass("Thursday", auth.authInfo.user_id);
                }}
              >
                <h5>Th</h5>
                <h5>{whatDate(4)}</h5>
              </div>
              <div
                className={active === 5 ? "click-day" : "non-click"}
                onClick={() => {
                  setActive(5);
                  changeSchedule
                    ? getByDay("Friday")
                    : dataClass("Friday", auth.authInfo.user_id);
                }}
              >
                <h5>Fr</h5>
                <h5>{whatDate(5)}</h5>
              </div>
              <div
                className={active === 6 ? "click-day" : "non-click"}
                onClick={() => {
                  setActive(6);
                  changeSchedule
                    ? getByDay("Saturday")
                    : dataClass("Saturday", auth.authInfo.user_id);
                }}
              >
                <h5>Sa</h5>
                <h5>{whatDate(6)}</h5>
              </div>
              <div
                className={active === 0 ? "click-day" : "non-click"}
                onClick={() => {
                  setActive(0);
                  changeSchedule === false
                    ? getByDay("Sunday")
                    : dataClass("Sunday", auth.authInfo.user_id);
                }}
              >
                <h5>Su</h5>
                <h5>{whatDate(0)}</h5>
              </div>
            </div>
            {auth.authInfo.role_id === 1 ? (
              <div className="mb-4"></div>
            ) : (
              <div className="option-schedule">
                <h5
                  className={
                    changeSchedule === false ? "option-all me-1" : "me-1"
                  }
                  onClick={() => setChangeSchedule(false)}
                >
                  All schedule
                </h5>
                <h5
                  className={
                    changeSchedule === true ? "option-all me-1" : "me-1"
                  }
                  onClick={() => setChangeSchedule(true)}
                >
                  For you
                </h5>
              </div>
            )}
            {changeSchedule === false ? (
              <div className="schedule-scroll">
                {auth.authInfo.role_id === 1 ? (
                  <>
                    {data?.map((data, index) => {
                      return <FasilitatorClass dataArray={data} key={index} />;
                    })}
                  </>
                ) : (
                  <>
                    {data?.map((data, index) => {
                      return <AllSchedule dataArray={data} key={index} />;
                    })}
                  </>
                )}
              </div>
            ) : (
              <div className="schedule-scroll">
                {data?.map((data, index) => {
                  return <MySchedule dataArray={data} key={index} />;
                })}
              </div>
            )}

            {auth.authInfo.role_id === 1 ? (
              <div className="btn-class text-center">
                <Link to="/fasilitator/class">
                  <Button>
                    <i className="fas fa-plus-circle pe-2"></i>New Task
                  </Button>
                </Link>
              </div>
            ) : null}
          </div>
        </section>
        {width < 1200 ? (
          <>
            <i
              className="icon-message far fa-comment-dots"
              onClick={() => setOpenMessage(true)}
            ></i>
            {openMessage === false ? null : (
              <>
                <div className="message-container"></div>
                <section className="messages col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                  <div className="bg-messages">
                    <div className="title-chat">
                      <h1>Messages</h1>
                      <i
                        className="fas fa-plus-circle fa-lg"
                        onClick={() => setOpenMessage(false)}
                      ></i>
                    </div>
                    <div className="box-search mb-4">
                      <i className="fas fa-search"></i>
                      <input className="ps-5" placeholder="Search" />
                    </div>
                    <ChatMessage />
                  </div>
                </section>
              </>
            )}
          </>
        ) : (
          <section className="messages col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <div className="bg-messages">
              <div className="title-chat">
                <h1>Messages</h1>
                <i className="fas fa-plus-circle fa-lg"></i>
              </div>
              <div className="box-search mb-4">
                <i className="fas fa-search"></i>
                <input className="ps-5" placeholder="Search" />
              </div>
              <ChatMessage />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Home;
