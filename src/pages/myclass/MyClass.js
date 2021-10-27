import React, { useState } from "react";
import "../myclass/myclass.css";

import iconBack from "../../assets/img/icon/icon3.png";

import TableMyClass from "../../components/tableMyClass/TableMyClass";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

function MyClass() {
  const [keyword, setKeyword] = useState("");
  const [sendKeyword, setSendKeyword] = useState("");

  return (
    <>
      <main>
        <section className="myclass-page vh-100">
          <div className="d-flex flex-column flex-xl-row">
            <Navbar />
            <div className="mx-auto mt-3 container container-fluid pt-5">
              <div className="">
                <div className="row">
                  <div className="d-flex flex-row align-items-center">
                    <Link to="/activity">
                      <img src={iconBack} alt="" />
                    </Link>
                    <h4 className="ms-5">My class</h4>
                  </div>
                  <div className="col-9">
                    <form
                      className="input-group mb-3"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSendKeyword(keyword);
                      }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Quick search"
                        onChange={(e) => {
                          setKeyword(e.target.value);
                        }}
                      />
                      <button
                        className="btn btn-search"
                        type="button"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                  <div className="col-12 mt-5">
                    <TableMyClass keyword={sendKeyword} />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <p style={{ fontWeight: "600", fontSize: "12px" }}>
                        Showing out 10 of 21
                      </p>
                    </div>
                    <div className="col-6">
                      <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                          <li className="page-item disabled">
                            <Link
                              className="page-link"
                              href="#"
                              aria-disabled="true"
                              to="#"
                            >
                              &laquo;
                            </Link>
                          </li>
                          <li className="page-item  ">
                            <Link className="page-link" to="#">
                              1
                            </Link>
                          </li>
                          <li className="page-item active">
                            <Link className="page-link" to="#">
                              2
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              3
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              &raquo;
                            </Link>
                          </li>
                        </ul>
                      </nav>
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

export default MyClass;
