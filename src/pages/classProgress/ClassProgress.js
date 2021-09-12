import React from "react";
import { Link } from "react-router-dom";
import "../classProgress/classProgress.css";

import iconBack from "../../assets/img/icon/icon3.png";
import iconComputer from "../../assets/img/icon/icon-computer.png";
import headerImage from "../../assets/img/icon/header-class.png";

import Navbar from "../../components/navbar/Navbar";
import TableMyClass from "../../components/tableMyClass/TableMyClass";

function ClassProgress() {
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
                    <h4>Front-end Fundamentals</h4>
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
                            />
                          </div>
                          <div className="col-5 description-class">
                            <h4>frontend Fundamentals</h4>
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
                            <p>Your Score</p>
                            <p className="score-progress text-start">86</p>
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
                        <div className="row"></div>
                        <div className="col-12 mt-5">
                          <TableMyClass />
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

export default ClassProgress;
