import React, { useState } from "react";
import "../myclass/myclass.css";

import iconBack from "../../assets/img/icon/icon3.png";

import TableMyClass from "../../components/tableMyClass/TableMyClass";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NumberTable from "../../components/tableMyClass/NumberTable";

function MyClass(props) {
  const [keyword, setKeyword] = useState("");
  const [sendKeyword, setSendKeyword] = useState("");
  const [page, setPage] = useState(1);
  const dataPerUser = useSelector((state) => state.classes.dataPerUser);
  const limit = 3;
  const totalData = dataPerUser?.data?.result?.totalData
    ? dataPerUser?.data?.result?.totalData
    : 0;
  const totalPage = dataPerUser?.data?.result?.totalPage
    ? dataPerUser?.data?.result?.totalPage
    : 0;
  const data = dataPerUser?.data?.result?.data;
  const shownData = data ? data.length : 0;
  return (
    <>
      <main>
        <section className="myclass-page vh-100">
          <div className="d-flex flex-column flex-xl-row">
            <Navbar />
            <div className="flex-grow-1" style={{ padding: "5vw" }}>
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
                        onClick={() => {
                          setSendKeyword(keyword);
                        }}
                      >
                        Search
                      </button>
                    </form>
                  </div>
                  <div className="col-12 mt-5">
                    <TableMyClass
                      keyword={sendKeyword}
                      limit={limit}
                      page={page}
                    />
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                      <li className="page-item">
                        <button
                          className="page-link"
                          href="#"
                          to="#"
                          onClick={() => {
                            if (page > 1) setPage(page - 1);
                          }}
                        >
                          &laquo;
                        </button>
                      </li>
                      <NumberTable
                        totalPage={totalPage}
                        page={page}
                        setPage={setPage}
                      />
                      <li className="page-item">
                        <button
                          className="page-link"
                          onClick={() => {
                            if (page < totalPage) setPage(page + 1);
                          }}
                        >
                          &raquo;
                        </button>
                      </li>
                    </ul>
                  </nav>
                  <p style={{ fontWeight: "600", fontSize: "12px" }}>
                    Showing {shownData} out of {totalData}
                  </p>
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
