/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { connect, useSelector } from "react-redux";
import { withRouter, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { getClassAction } from "../../redux/actionCreators/classes";
import NumberTable from "../tableMyClass/NumberTable";

function TableNewClass(props) {
  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState("");
  const [level, setLevel] = useState(0);
  const [price, setPrice] = useState(0);
  const [page, setPage] = useState(1);
  const dataState = useSelector((state) => state.classes.data);
  const totalData = dataState?.data?.result?.totalData
    ? dataState?.data?.result?.totalData
    : 0;
  const data = dataState?.data?.result?.data;
  const totalPage = dataState?.data?.result?.totalPage
    ? dataState?.data?.result?.totalPage
    : 0;
  const shownData = data ? data.length : 0;
  const limit = 4;
  const switchCategory = (params) => {
    switch (params) {
      case 1:
        return "Software";
      case 2:
        return "History";
      case 3:
        return "Psychology";
      case 4:
        return "Finance";
      case 5:
        return "Math";
      default:
        break;
    }
  };
  const switchLevel = (level) => {
    switch (level) {
      case 1:
        return "Beginner";
      case 2:
        return "Intermediate";
      case 3:
        return "Advanced";

      default:
        break;
    }
  };
  const switchPrice = (price) => {
    switch (price) {
      case 0:
        return "Free";

      default:
        return price;
    }
  };
  const location = useLocation();
  const { getClassAction } = props;

  const newClassHandler = (e) => {
    e?.preventDefault();
    let query = `?&limit=${limit}&page=${page}`;
    if (keyword !== "") query += `&keyword=${keyword}`;
    if (categories !== "") query += `&category_id=${categories}`;
    if (level) query += `&level_id=${level}`;
    switch (price) {
      case "1":
        query = query + `&price=0`;
        break;
      case "2":
        query = query + `&price=${100 * 1000}`;
        break;
      case "3":
        query = query + `&price=${250 * 1000}`;
        break;
      case "4":
        query = query + `&price=${500 * 1000}`;
        break;
      case "5":
        query = query + `&price=${1 * 1000 * 1000}`;
        break;
      case "6":
        query = query + `&price=1000000`;
        break;
      default:
        break;
    }
    props.getClassAction(query);
    props.history.push("/activity" + query);
  };
  useEffect(() => {
    location.search && getClassAction(location.search);
    !location.search && getClassAction(`?&limit=${limit}&page=${page}`);
  }, []);

  let ref2 = useRef(true);
  useEffect(() => {
    console.log("pass2", ref2);
    if (ref2.current) {
      ref2.current = false;
    } else {
      newClassHandler();
    }
  }, [page]);
  console.log(page);
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <h5 className="card-title">New class</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form className="input-group mb-3" onSubmit={newClassHandler}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quick Search"
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                />
                <button
                  className="btn btn-search"
                  type="button"
                  id="button-addon2"
                  onClick={newClassHandler}
                >
                  Search
                </button>
              </form>
              <div className="card card-sorting table-responsive">
                <div className="d-flex flex-row justify-content-between">
                  <select
                    className="class-search-dropdown"
                    defaultValue="0"
                    onChange={(e) => {
                      setCategories(e.target.value);
                    }}
                  >
                    <option value="0" disabled>
                      Categories
                    </option>
                    <option value="4">Finance</option>
                    <option value="2">History</option>
                    <option value="5">Math</option>
                    <option value="3">Psychology</option>
                    <option value="1">Software</option>
                    <option value="">Any</option>
                  </select>
                  <select
                    className="class-search-dropdown"
                    defaultValue="0"
                    onChange={(e) => {
                      setLevel(Number(e.target.value));
                    }}
                  >
                    <option value="0" disabled>
                      Level
                    </option>
                    <option value="1">Beginner</option>
                    <option value="2">Intermediate</option>
                    <option value="3">Expert</option>
                    <option value={0}>Any</option>
                  </select>
                  <select
                    className="class-search-dropdown"
                    defaultValue="default"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  >
                    <option value="default" disabled>
                      Price
                    </option>
                    <option value="1">Free</option>
                    <option value="2">100k and under</option>
                    <option value="3">250k and under</option>
                    <option value="4">500k and under</option>
                    <option value="5">1000k and under</option>
                    <option value="6">Any</option>
                  </select>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table mt-5">
                  <thead>
                    <tr>
                      <th scope="col">
                        <div className="">
                          <input
                            className="form-check-input"
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
                  {props.classes?.data?.data?.result.data.map((data) => {
                    return (
                      <tbody key={data.id}>
                        <tr>
                          <th scope="row ">
                            <div className="">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </th>
                          <td>{data.name}</td>
                          <td>{switchCategory(data.category_id)}</td>
                          <td>{data.description}</td>
                          <td>{switchLevel(data.level_id)}</td>
                          <td>{switchPrice(data.pricing)}</td>
                          <td>
                            <Link
                              to={`/class-detail/${data.id}`}
                              className="btn btn-success"
                              style={{
                                borderRadius: "24px",
                              }}
                            >
                              Register
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
              <div style={{ fontWeight: "600", fontSize: "12px" }}>
                Showing {shownData} out of {totalData}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = ({ classes }) => {
  return {
    classes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getClassAction: (body) => {
      dispatch(getClassAction(body));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TableNewClass));
