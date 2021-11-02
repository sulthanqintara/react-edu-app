import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../classProgress/classProgress.css";
import { withRouter } from "react-router-dom";

import iconBack from "../../assets/img/icon/icon3.png";
import iconComputer from "../../assets/img/icon/icon-computer.png";
import headerImage from "../../assets/img/icon/header-class.png";

import Navbar from "../../components/navbar/Navbar";
import TableClassProgress from "../../components/tableClassProgress/TableClassProgress";
import { detailClass } from "../../utils/https/classes";
import axios from "axios";
import { useSelector } from "react-redux";

function ClassProgress(props) {
  const classId = props.match.params.id;
  const userId = useSelector((state) => state.auth.authInfo.user_id);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [average, setAverage] = useState("");
  const url = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    if (classId) {
      detailClass(classId)
        .then((res) => {
          const data = res.data.result[0];
          setName(data.course_name);
          setLevel(data.level);
          setCategory(data.category);
          setPrice(data.pricing);
        })
        .catch((err) => console.log(err));
    }
  }, [classId]);

  useEffect(() => {
    axios
      .get(`${url}/subjects/scoring?class_id=${classId}&user_id=${userId}`)
      .then((res) => {
        console.log(res);
        setAverage(res.data.result.avgResult);
      })
      .catch((err) => console.log(err));
  }, [classId, url, userId]);

  return (
    <>
      <main>
        <section className="classProgres-page vh-100">
          <div className="d-flex flex-column flex-xl-row vh-100">
            <Navbar />
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
                    <h4>{name}</h4>
                  </div>
                  <div className="col-12">
                    <div className="card">
                      <img
                        src={headerImage}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="row">
                          <div className="col-4 text-center icon-computer">
                            <img
                              src={iconComputer}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-5 description-class">
                            <h4>{name}</h4>
                            <div className="row ">
                              <div className="col-4">
                                <h5>Level : {level}</h5>
                              </div>
                              <div className="col-5">
                                <h5>Category : {category}</h5>
                              </div>
                              <div className="col-3">
                                <h5>Price : {price === 0 ? "Free" : price}</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            <p>Your Score</p>
                            <p className="score-progress text-start">
                              {average}
                            </p>
                          </div>
                        </div>
                        <div
                          className="row description-link"
                          style={{ marginTop: "7vh" }}
                        >
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
                          <TableClassProgress id={classId} />
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

export default withRouter(ClassProgress);
