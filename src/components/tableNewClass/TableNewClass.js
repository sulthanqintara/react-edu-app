import React from "react";

function TableNewClass() {
  return (
    <>
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
                <button class="btn btn-search" type="button" id="button-addon2">
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
    </>
  );
}

export default TableNewClass;
