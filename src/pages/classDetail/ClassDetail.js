import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "../classDetail/classDetail.css";
import { withRouter } from "react-router-dom";
import { detailClass, registerClass } from "../../utils/https/classes";
import { useDispatch, useSelector } from "react-redux";

import iconBack from "../../assets/img/icon/icon3.png";
import iconComputer from "../../assets/img/icon/icon-computer.png";
import headerImage from "../../assets/img/icon/header-class.png";

import Navbar from "../../components/navbar/Navbar";
import { getClassByUserAction } from "../../redux/actionCreators/classes";

function ClassDetail(props) {
  const classId = props.match.params.id;
  const userId = useSelector((state) => state.auth.authInfo.user_id);
  const classes = useSelector(
    (state) => state.classes.dataPerUser.data.result.data
  );
  const classesData = classes || [];
  const filtered = classesData?.filter(
    (data) => data.class_id === Number(classId)
  );
  console.log(filtered, "filter");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (classId) {
      detailClass(classId)
        .then((res) => {
          const data = res.data.result[0];
          setName(data.course_name);
          setDescription(data.description);
        })
        .catch((err) => console.log(err));
    }
    let query = `?user_id=${userId}`;
    dispatch(getClassByUserAction(query));
  }, [classId, dispatch, userId]);
  const onRegister = () => {
    const data = new URLSearchParams();
    data.append("user_id", userId);
    data.append("class_id", classId);
    registerClass(data)
      .then((res) => {
        console.log(res);
        return Swal.fire({
          icon: "success",
          title: "Register success!",
          text: "Your has been join with this class!",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main>
        <section className="classDetail-page vh-100">
          <div className="d-flex flex-column flex-xl-row justify-content-between vh-100">
            <Navbar />
            <div className="col-md-9 col-6 content-activity pt-1">
              <div className="container container-fluid">
                <div className="row">
                  <div className="col-1">
                    <Link to="/myclass">
                      <img
                        src={iconBack}
                        alt=""
                        style={{ marginTop: "40px" }}
                      />
                    </Link>
                  </div>
                  <div className="col-6 mb-3">
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
                            {filtered.length === 0 && (
                              <button
                                className="btn btn-register"
                                onClick={() => {
                                  Swal.fire({
                                    title: "Confirm for register",
                                    text: "Are you sure you want to register?",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes",
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                      onRegister();
                                    }
                                  });
                                }}
                              >
                                Register
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="row mt-5 description-link">
                          <div className="col-2 text-end ">
                            <h5>Information</h5>
                          </div>
                          <div className="col-2 text-end ">
                            <Link to={`/class-progress/${classId}`}>
                              <h5>Class Progress</h5>
                            </Link>
                          </div>
                          <div className="col-2 text-end ">
                            <h5>Class Discussion</h5>
                          </div>
                          <div className="col-12 text-start">
                            <hr />
                          </div>
                        </div>
                        <div className="desc-scroll">
                          <div className="row description-information">
                            <div className="col-4 ">
                              <h4 className="text-center ml-5 ">Description</h4>
                            </div>
                            <div className="col-12">
                              <p>{description}</p>
                            </div>
                          </div>
                          {/* <div className="row description-learn">
                            <div className="col-4 ">
                              <h4 className="text-center ">
                                What will i learn
                              </h4>
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
                          </div> */}
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

export default withRouter(ClassDetail);
