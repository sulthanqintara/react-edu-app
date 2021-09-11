import React from "react";
import "../activity/activity.css";
import progressBar from "../../assets/img/icon/progress-bar.png";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

function Activity() {
  return (
    <>
      {console.log(window.innerWidth)}
      <main>
        <section className="activity-page">
          <div className="d-flex flex-column flex-xl-row">
            <div className="col-md-2 col-6 flex-grow-1">
              <Navbar className=" flex-grow-1" />
            </div>
            <div className="col-md-9 col-6 content-activity ">
              <div className="row">
                <div className="col">
                  <h3>Activity</h3>
                </div>
              </div>
              <div className="container container-fluid">
                <div className="row">
                  <div className="col-12">
                    <h4>My class</h4>
                  </div>
                  <div className="col-12 mt-5">
                    <div className="table-responsive my-class">
                      <table class="table ">
                        <thead>
                          <tr>
                            <th scope="col">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                ></input>
                              </div>
                            </th>
                            <th scope="col">Class Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Progress</th>
                            <th scope="col">Status</th>
                            <th scope="col">Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row ">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                ></input>
                              </div>
                            </th>
                            <td>Frontend fundamentals</td>
                            <td>Software</td>
                            <td>Learn the fundamentals of frontend</td>
                            <td>
                              <img src={progressBar} alt="" />
                            </td>
                            <td>
                              <button
                                className="btn btn-status"
                                style={{
                                  borderRadius: "24px",
                                  backgroundColor: "#D2DEED",
                                  color: "#5784BA",
                                }}
                              >
                                ongoing
                              </button>
                            </td>
                            <td className="score">86</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <Link to="#">
                      <p
                        className="text-center"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        view all
                      </p>
                    </Link>
                  </div>
                  <div className="col-12">
                    <div class="card">
                      <div class="card-body">
                        <div className="row">
                          <div className="col-12">
                            <h5 class="card-title">New class</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div class="input-group mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Quick Search"
                              ></input>
                              <button
                                class="btn btn-search"
                                type="button"
                                id="button-addon2"
                              >
                                Button
                              </button>
                            </div>
                            <div class="card card-sorting">
                              <div class="card-body">
                                <div className="row">
                                  <div className="col-md-4 col-4">
                                    <p>Categories</p>
                                  </div>
                                  <div className="col-md-4 col-4">
                                    <p>Level</p>
                                  </div>
                                  <div className="col-md-4 col-4">
                                    <p>Pricing</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="table-responsive">
                              <table class="table mt-5">
                                <thead>
                                  <tr>
                                    <th scope="col">
                                      <div class="form-check">
                                        <input
                                          class="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        ></input>
                                      </div>
                                    </th>
                                    <th scope="col">Class Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Level</th>
                                    <th scope="col">Pricing</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row ">
                                      <div class="form-check">
                                        <input
                                          class="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        ></input>
                                      </div>
                                    </th>
                                    <td>Frontend fundamentals</td>
                                    <td>Software</td>
                                    <td>Learn the fundamentals of frontend</td>
                                    <td>Beginner</td>
                                    <td>Free</td>
                                    <td>
                                      <button
                                        className="btn btn-success"
                                        style={{
                                          borderRadius: "24px",
                                        }}
                                      >
                                        Register
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
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

export default Activity;
