import React from "react";
import Navbar from "../../components/navbar/Navbar";
// import Carousel from "react-bootstrap/Carousel";
import Pict1 from "../../assets/img/icon/carousel1.png";
import Pict2 from "../../assets/img/icon/carousel2.png";
import Pict3 from "../../assets/img/icon/carousel3.jpg";
import ChatMessage from "../../components/ChatMessage";
import CardSchedule from "../../components/cardSchedule/CardSchedule";
import CreateClass from "../../components/createCardClass/CreateCardClass";
import { useSelector } from "react-redux";
import "./home.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Home() {
  const userInfo = useSelector((reduxState) => reduxState.auth);
  const windows = window.innerWidth;
  // const [roleId, setRoleId] = useState(userInfo.authInfo.role_id);
  // const [profle, setProfile] = useState(userInfo.authInfo.image);
  // const [name, setName] = useState(null);
  // const fasilitator = false
  // useEffect(() => {
  //     setRoleId(roleId)
  //     console.log(userInfo.authInfo.role_id)

  // }, [])

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
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: false,
  };
  //   console.log(fadeImages);
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
              <Fade {...zoomOutProperties}>
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
            {userInfo.authInfo.role_id === 1 ? (
              <div className="mb-4">
                <div className="title-date">
                  <h1>My Class</h1>
                  <i className="far fa-calendar-alt fa-lg"></i>
                </div>
                <div className="text-center">
                  <h4>October 2016</h4>
                </div>
              </div>
            ) : (
              <div className="title-date">
                <h1>Today, October 16</h1>
                <i className="far fa-calendar-alt fa-lg"></i>
              </div>
            )}

            <div className="select-date">
              <div className="click-day ">
                <h5>Mo</h5>
                <h6>12</h6>
              </div>
              <div className="click-day ">
                <h5>To</h5>
                <h5>13</h5>
              </div>
              <div className="click-day ">
                <h5>We</h5>
                <h5>14</h5>
              </div>
              <div className="click-day ">
                <h5>Th</h5>
                <h5>15</h5>
              </div>
              <div className="click-day ">
                <h5>Fr</h5>
                <h5>16</h5>
              </div>
              <div className="click-day ">
                <h5>Sa</h5>
                <h5>17</h5>
              </div>
              <div className="click-day ">
                <h5>Su</h5>
                <h5>18</h5>
              </div>
            </div>
            {userInfo.authInfo.role_id === 2 ? (
              <div className="mb-4"></div>
            ) : (
              <div className="option-schedule">
                <h5 className="option-all me-1">All schedule</h5>
                <h5 className="option-self ms-1">For you</h5>
              </div>
            )}
            <div className="schedule-scroll">
              {userInfo.authInfo.role_id === 1 ? (
                <CreateClass />
              ) : (
                <CardSchedule />
              )}
            </div>
          </div>
        </section>
        {/* {windows <= 1200 ? (
          <i class="fas fa-envelope"></i>
        ) : ( */}
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
      </main>
    </div>
  );
}

export default Home;
