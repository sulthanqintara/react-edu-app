import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Pict1 from "../../assets/img/icon/carousel1.png";
import Profile from "../../assets/img/icon/pp.png";
import Example from "../../assets/img/icon/Vector.png";
import "./home.css"

function Home(props) {

    return (
        <div className="home mh-100">
            <main className="main-home">
                <Navbar />
                <section className="image-carousel mw-100 mt-3">
                    <div className="title-card">
                        <h1>News</h1>
                    </div>
                    <div className="img-card">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={Pict1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>New update for front end development class sylabus!</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={Pict1}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>New update for front end development class sylabus!</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={Pict1}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>New update for front end development class sylabus!</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </section>
                <section className="schedule mw-100">
                    <div className="title-date">
                        <h1>Today, October 16</h1>
                        <i className="far fa-calendar-alt fa-lg"></i>
                    </div>
                    <div className="bg-date">
                        <div className="bg-days d-flex justify-content-around">
                            <h5>Mo</h5>
                            <h5>Tu</h5>
                            <h5>We</h5>
                            <h5>Th</h5>
                            <h5>Fr</h5>
                            <h5>Sa</h5>
                        </div>
                        <div className="bg-number d-flex justify-content-around">
                            <h5>12</h5>
                            <h5>13</h5>
                            <h5>14</h5>
                            <h5>15</h5>
                            <h5>16</h5>
                            <h5>17</h5>
                        </div>
                    </div>
                    <div className="bd-highlight line"></div>
                    <div className="bd-highlight line"></div>
                    <div className="option-schedule d-flex">
                        <h5 className="option-all">All schedule</h5>
                        <h5 className="option-self">For you</h5>
                    </div>
                    <div className="schedule-scroll">
                        <div className="d-flex">
                            <div className="bg-card mt-2">
                                <div className="title-box d-flex justify-content-around pt-3 pb-3 ps-3 pe-3">
                                    <h1>Introduction to Banking Finance</h1>
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                                <div className="subtitle-box d-flex justify-content-between align-item center">
                                    <p>100 minutes</p>
                                    <img src={Example} height={90} width={148} className="pb-3" alt="pict" />
                                </div>
                            </div>
                            <div className="bg-card mt-2">
                                <div className="title-box d-flex justify-content-around pt-3 pb-3 ps-3 pe-3">
                                    <h1>Introduction to Banking Finance</h1>
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                                <div className="subtitle-box d-flex justify-content-between align-item center">
                                    <p>100 minutes</p>
                                    <img src={Example} height={90} width={148} className="pb-3" alt="pict" />
                                </div>
                            </div>                      
                        </div>
                        <div className="d-flex">
                            <div className="bg-card mt-2">
                                <div className="title-box d-flex justify-content-around pt-3 pb-3 ps-3 pe-3">
                                    <h1>Introduction to Banking Finance</h1>
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                                <div className="subtitle-box d-flex justify-content-between align-item center">
                                    <p>100 minutes</p>
                                    <img src={Example} height={90} width={148} className="pb-3" alt="pict" />
                                </div>
                            </div>                 
                            <div className="bg-card mt-2">
                                <div className="title-box d-flex justify-content-around pt-3 pb-3 ps-3 pe-3">
                                    <h1>Introduction to Banking Finance</h1>
                                    <i className="fas fa-ellipsis-h"></i>
                                </div>
                                <div className="subtitle-box d-flex justify-content-between align-item center">
                                    <p>100 minutes</p>
                                    <img src={Example} height={90} width={148} className="pb-3" alt="pict" />
                                </div>
                            </div>                        
                        </div>
                    </div>
                </section>
                <section className="messages mw-100 mt-3">
                    <div className="title-chat">
                        <h1>Messages</h1>
                        <i className="fas fa-plus-circle fa-lg"></i>
                    </div>
                    <div className="box-search mb-4">
                        <i className="fas fa-search"></i>
                        <input className="ps-5" placeholder="Search" />
                    </div>
                    <div className="text-chat">
                        <div className="d-flex justify-content-around align-items-center mt-2 mb-4">
                            <img src={Profile} height={75} width={75} alt="pict" />
                            <div>
                                <h2>Nissa Sabyan</h2>
                                <h5>How about number 3?</h5>
                            </div>
                            10.15 pm
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-4 mb-4">
                            <img src={Profile} height={75} width={75} alt="pict" />
                            <div>
                                <h2>Nissa Sabyan</h2>
                                <h5>How about number 3?</h5>
                            </div>
                            10.15 pm
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-4 mb-4">
                            <img src={Profile} height={75} width={75} alt="pict" />
                            <div>
                                <h2>Nissa Sabyan</h2>
                                <h5>How about number 3?</h5>
                            </div>
                            10.15 pm
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-4 mb-4">
                            <img src={Profile} height={75} width={75} alt="pict" />
                            <div>
                                <h2>Nissa Sabyan</h2>
                                <h5>How about number 3?</h5>
                            </div>
                            10.15 pm
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-4 mb-4">
                            <img src={Profile} height={75} width={75} alt="pict" />
                            <div>
                                <h2>Nissa Sabyan</h2>
                                <h5>How about number 3?</h5>
                            </div>
                            10.15 pm
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-4 mb-4">
                            <img src={Profile} height={75} width={75} alt="pict" />
                            <div>
                                <h2>Nissa Sabyan</h2>
                                <h5>How about number 3?</h5>
                            </div>
                            10.15 pm
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-4 mb-4">
                            <img src={Profile} height={75} width={75} alt="pict" />
                            <div>
                                <h2>Nissa Sabyan</h2>
                                <h5>How about number 3?</h5>
                            </div>
                            10.15 pm
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-4 mb-4">
                            <img src={Profile} height={75} width={75} alt="pict" />
                            <div>
                                <h2>Nissa Sabyan</h2>
                                <h5>How about number 3?</h5>
                            </div>
                            10.15 pm
                        </div>
                        <div className="d-flex justify-content-around align-items-center mt-4 mb-4">
                            <img src={Profile} height={75} width={75} alt="pict" />
                            <div>
                                <h2>Nissa Sabyan</h2>
                                <h5>How about number 3?</h5>
                            </div>
                            10.15 pm
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
