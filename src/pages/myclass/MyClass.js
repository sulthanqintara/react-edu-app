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
                        <ul class="pagination justify-content-end">
                          <li class="page-item disabled">
                            <Link
                              class="page-link"
                              href="#"
                              tabindex="-1"
                              aria-disabled="true"
                            >
                              &laquo;
                            </Link>
                          </li>
                          <li class="page-item  ">
                            <Link class="page-link" href="#">
                              1
                            </Link>
                          </li>
                          <li class="page-item active">
                            <Link class="page-link" href="#">
                              2
                            </Link>
                          </li>
                          <li class="page-item">
                            <Link class="page-link" href="#">
                              3
                            </Link>
                          </li>
                          <li class="page-item">
                            <Link class="page-link" href="#">
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
