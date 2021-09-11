import React from "react";
import { Link } from "react-router-dom";
import "../classDetail/classDetail.css";

import iconBack from "../../assets/img/icon/icon3.png";
import iconComputer from "../../assets/img/icon/icon-computer.png";
import headerImage from "../../assets/img/icon/header-class.png";

import Navbar from "../../components/navbar/Navbar";

function ClassDetail() {
  return (
    <>
      <main>
        <section className="classDetail-page">
          <div className="d-flex flex-column flex-xl-row">
            <div className="col-md-2 col-6 flex-grow-1">
              <Navbar className=" flex-grow-1" />
            </div>
            <div className="col-md-9 col-6 content-activity ">
              <div className="container container-fluid">
                <div className="row">
                  <div className="col-1">
                    <Link>
                      <img
                        src={iconBack}
                        alt=""
                        style={{ marginTop: "40px" }}
                      />
                    </Link>
                  </div>
                  <div className="col-6">
                    <h4>Know more Javacript</h4>
                  </div>
                  <div className="col-12">
                    <div class="card">
                      <img src={headerImage} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <div className="row">
                          <div className="col-4 text-center icon-computer">
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
                          <div className="col-3">
                            <button className="btn btn-register">
                              Register
                            </button>
                          </div>
                        </div>
                        <div className="row mt-5 description-link">
                          <div className="col-2 text-end ">
                            <h5>Information</h5>
                          </div>
                          <div className="col-2 text-end ">
                            <h5>Class Progress</h5>
                          </div>
                          <div className="col-2 text-end ">
                            <h5>Class Discussion</h5>
                          </div>
                          <div className="col-12 text-start">
                            <hr />
                          </div>
                        </div>
                        <div className="row description-information">
                          <div className="col-4 ">
                            <h4 className="text-center ml-5 ">Description</h4>
                          </div>
                          <div className="col-12">
                            <p>
                              Javascript from the basic for beginner. JavaScript
                              is a programming language that adds interactivity
                              to your website. This happens in games, in the
                              behavior of responses when buttons are pressed or
                              with data entry on forms; with dynamic styling;
                              with animation, etc. This class helps you get
                              started with JavaScript and furthers your
                              understanding of what is possible.
                            </p>
                          </div>
                        </div>
                        <div className="row description-learn">
                          <div className="col-4 ">
                            <h4 className="text-center ">What will i learn</h4>
                          </div>
                          <div className="col-12">
                            <ul>
                              <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Numquam necessitatibus
                                repudiandae tenetur iusto eaque, id vero! At
                                earum illo unde omnis laborum quae, molestiae
                                numquam excepturi vel iste dicta perspiciatis!
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="row description-content">
                          <div className="col-4 ">
                            <h4 className="text-center  ">Content 2</h4>
                          </div>
                          <div className="col-12">
                            <ul>
                              <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Blanditiis ex nesciunt magni
                                rerum libero eaque et ab quaerat expedita
                                veritatis. Praesentium earum soluta distinctio
                                veniam optio, consequatur ducimus maiores
                                itaque?
                              </li>
                            </ul>
                          </div>
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
    </>
  );
}

export default ClassDetail;
