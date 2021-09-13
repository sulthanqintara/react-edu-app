import React from "react";
import { Link } from "react-router-dom";
import "../classDetail/classDetail.css";
import iconComputer from "../../assets/img/icon/icon-computer.png";
import headerImage from "../../assets/img/icon/header-class.png";
import Navbar from "../../components/navbar/Navbar";
import NavbarClass from "../../components/navbarClassDetail/NavbarClassDetail";
import Information from "../../components/InformationClass";

function FasilitatorClassDetail() {

    return (
        <div>
            <main>
                <section className="classDetail-page vh-100">
                    <div className="d-flex flex-column flex-xl-row justify-content-between vh-100">
                        <Navbar />
                        <div className="col-md-9 col-6 content-activity pt-1">
                            <div className="container container-fluid">
                                <div className="row">
                                    <div className="icon-back col-6 mb-3">
                                        <Link to="/fasilitator/class">
                                            <h4><i className="fas fa-chevron-left pe-3 user-select-auto"></i>Front-end Fundamentals</h4>
                                        </Link>
                                    </div>
                                    <div className="col-12">
                                        <div className="card">
                                            <img src={headerImage} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-4 text-center icon-computer mb-5">
                                                        <img
                                                            src={iconComputer}
                                                            alt=""
                                                            className="img-fluid"
                                                        //   style={{ marginTop: "-30vh" }}
                                                        />
                                                    </div>
                                                    <div className="col-5 description-classDetail">
                                                        <h4>Know More Javascript</h4>
                                                        <div className="row ">
                                                            <div className="col-4">
                                                                <h5>Level : Beginner</h5>
                                                            </div>
                                                            <div className="col-5">
                                                                <h5>Category : Software</h5>
                                                            </div>
                                                            <div className="col-3">
                                                                <h5>Price : Free</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <NavbarClass />
                                                <div className="desc-scroll">
                                                    <Information />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default FasilitatorClassDetail
