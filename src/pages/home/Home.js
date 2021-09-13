import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Pict1 from "../../assets/img/icon/carousel1.png";
import ChatMessage from "../../components/ChatMessage";

import CardSchedule from "../../components/cardSchedule/CardSchedule";
import "./home.css"

function Home(props) {
  const windows = window.innerWidth;

    return (
        <div>
            <main className="main-home vh-100 vw-100">
                <Navbar />
                <section className="column-middle col-10 col-sm-10 col-md-4 col-lg-4 col-xl-4">
                    <div className="bd-slider ">
                        <div className="title-slider">
                            <h1>News</h1>
                        </div>
                        <div className="img-slider">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Pict1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption className="carousel-captions">
                                        <h3>New update for front end development class sylabus!</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="bd-schedule">
                        <div className="title-date">
                            <h1>Today, October 16</h1>
                            <i className="far fa-calendar-alt fa-lg"></i>
                        </div>
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
                        <div className="option-schedule">
                            <h5 className="option-all me-1">All schedule</h5>
                            <h5 className="option-self ms-1">For you</h5>
                        </div>
                        <div className="schedule-scroll">
                            <div className="bg-card mt-2">
                                <div className="time-classes mb-1">
                                    <h5>08.00 - 09.40</h5>
                                </div>
                                <CardSchedule/>
                                <div className="time-classes mb-1">
                                    <h5>08.00 - 09.40</h5>
                                </div>
                                <CardSchedule/>
                                <br/>               
                            </div>

                        </div>
                    </div>
                </section>
                {windows <= 1200 ?
                    (
                        <i class="fas fa-envelope"></i>
                    ) : (
                        <section className="messages col-3 col-sm-10 col-md-3 col-lg-3 col-xl-3 mt-3">
                            <div className="title-chat">
                                <h1>Messages</h1>
                                <i className="fas fa-plus-circle fa-lg"></i>
                            </div>
                            <div className="box-search mb-4">
                                <i className="fas fa-search"></i>
                                <input className="ps-5" placeholder="Search" />
                            </div>
                            <ChatMessage/>
                        </section>
                    )
                }
            </main>
        </div >
    )

}

export default Home;
