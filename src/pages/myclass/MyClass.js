import React from "react";
import "../myclass/myclass.css";

import iconBack from "../../assets/img/icon/icon3.png";

import TableMyClass from "../../components/tableMyClass/TableMyClass";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

function MyClass() {
  return (
    <>
      <main>
        <section className="myclass-page vh-100">
          <div className="d-flex flex-column flex-xl-row justify-content-between vh-100">
            <Navbar />
            <div className="col-md-9 col-6 content-activity ">
              <div className="container container-fluid">
                <div className="row">
                  <div className="row">
                    <div className="col-1">
                      <Link to="/activity">
                        <img
                          src={iconBack}
                          alt=""
                          style={{ marginTop: "40px" }}
                        />
                      </Link>
                    </div>
                    <div className="col-2">
                      <h4>My class</h4>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Quick search"
                      ></input>
                      <button
                        className="btn btn-search"
                        type="button"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                  <div className="col-12 mt-5">
                    <TableMyClass />
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

export default MyClass;
