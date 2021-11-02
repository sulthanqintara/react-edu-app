import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MemberClass from "../../components/member/Member";
import "./fasilitatorClassDetail.css";
import ClassProgress from "../../components/fasilatorClassProgress/FasilitatorClassProgress";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";
import { detailClass, updateClass } from "../../utils/https/classes";
import axios from "axios";

function Member(props) {
  // Class
  const id = props.match.params.id;
  const [className, setClassName] = useState("");
  const faciliator_id = useSelector((state) => state.auth.authInfo.user_id);
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");
  const [level, setLevel] = useState("");
  const [schedule, setSchedule] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  // Students
  const [students, setStudent] = useState([]);
  const url = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(`${url}/classes/students/${id}`)
      .then((res) => {
        // console.log(res.data.result);
        const data = res.data.result;
        setStudent(data);
      })
      .catch((err) => console.log(err));
  }, [id, url]);

  useEffect(() => {
    detailClass(id)
      .then((res) => {
        // console.log(res.data.result[0]);
        const data = res.data.result[0];
        setClassName(data.name);
        setSchedule(data.day);
        setLevel(data.level);
        setPricing(data.pricing);
        setDescription(data.description);
        setStartTime(data.start_time);
        setEndTime(data.end_time);
        setCategory(data.category_id);
        setLevel(data.level_id);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onSave = () => {
    if (className === "") {
      return Swal.fire({
        icon: "error",
        title: "Invalid class name",
        text: "Class name are required!",
      });
    }
    if (category === "") {
      return Swal.fire({
        icon: "error",
        title: "Invalid category class",
        text: "Category are required!",
      });
    }
    if (level === "") {
      return Swal.fire({
        icon: "error",
        title: "Invalid level class",
        text: "Level are required!",
      });
    }
    if (schedule === "") {
      return Swal.fire({
        icon: "error",
        title: "Invalid schedule",
        text: "Schedule are required!",
      });
    }
    if (startTime === "") {
      return Swal.fire({
        icon: "error",
        title: "Invalid start time",
        text: "Start time are required!",
      });
    }
    if (endTime === "") {
      return Swal.fire({
        icon: "error",
        title: "Invalid end time",
        text: "End time are required!",
      });
    }
    if (date === "") {
      return Swal.fire({
        icon: "error",
        title: "Invalid start date",
        text: "Start date are required!",
      });
    }
    if (pricing === "") {
      return Swal.fire({
        icon: "error",
        title: "Invalid pricing",
        text: "Pricing are required!",
      });
    }
    if (description === "") {
      return Swal.fire({
        icon: "error",
        title: "Invalid description",
        text: "Description are required!",
      });
    }

    const data = new URLSearchParams();
    data.append("name", className);
    data.append("start_time", startTime);
    data.append("end_time", endTime);
    data.append("day", schedule);
    data.append("category_id", category);
    data.append("description", description);
    data.append("level_id", level);
    data.append("pricing", pricing);
    data.append("facilitator_id", faciliator_id);

    updateClass(id, data)
      .then((res) => {
        console.log(res);
        return Swal.fire({
          icon: "success",
          title: "Success edit class",
          text: "Your class has been changed!",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main className="main-class-detail vh-100 vw-100">
        <Navbar />
        <section className="column-middle col-10 col-sm-10 col-md-4 col-lg-4 col-xl-4">
          <div className="icon-back col-8 mb-3 mt-4">
            <Link to="/fasilitator/class">
              <h1>
                <i className="fas fa-chevron-left pe-3 user-select-auto"></i>
                Front-end Fundamentals
              </h1>
            </Link>
          </div>
          <div className="bd-edit">
            <div className="container-body">
              <div className="title-edit">
                <h1>Edit info</h1>
              </div>
              <form>
                <div className="d-flex mb-4">
                  <div className="col-12">
                    <div className="input-name d-flex mb-3 ">
                      <p>Class Name</p>
                      <span>:</span>
                      <input
                        type="text"
                        value={className}
                        className="ms-2"
                        onChange={(e) => setClassName(e.target.value)}
                      />
                    </div>
                    <div className="input-categories d-flex">
                      <p>Categories</p>
                      <span>:</span>
                      <select
                        className="form-select ms-2"
                        aria-label="Default select example"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                      >
                        <option hidden>Open this select menu</option>
                        <option value="1">Software</option>
                        <option value="2">History</option>
                        <option value="3">Psychology</option>
                        <option value="4">Finance</option>
                        <option value="5">Math</option>
                      </select>
                    </div>
                    <div className="flex-grow-1">
                      <div className="input-schedule flex-column flex-sm-row d-flex mt-4">
                        <div className="d-flex">
                          <p>Schedule</p>
                          <span>:</span>
                          <select
                            className="form-select ms-2"
                            aria-label="Default select example"
                            value={schedule}
                            onChange={(e) => setSchedule(e.target.value)}
                          >
                            {/* <option defaultValue>Open this select menu</option> */}
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                          </select>
                        </div>
                        <input
                          type="time"
                          className="mx-1 my-1"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                        />
                        <input
                          className="mx-1 my-1"
                          type="time"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                        />
                      </div>

                      <div className="input-name d-flex mt-4">
                        <p>Start Date </p>
                        <span>:</span>
                        <input
                          type="date"
                          value={date}
                          className="ms-2"
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      <div className="input-categories d-flex mt-4">
                        <p>Level</p>
                        <span>:</span>
                        <select
                          className="form-select ms-2"
                          aria-label="Default select example"
                          onChange={(e) => setLevel(e.target.value)}
                          value={level}
                        >
                          <option hidden>Open this select menu</option>
                          <option value="1">Beginner</option>
                          <option value="2">Intermediate</option>
                          <option value="3">Advanced</option>
                        </select>
                      </div>
                      <div className="input-categories d-flex mt-4">
                        <p>Pricing</p>
                        <span>:</span>
                        <select
                          className="form-select ms-2"
                          aria-label="Default select example"
                          onChange={(e) => setPricing(e.target.value)}
                          value={pricing}
                        >
                          <option hidden>Open this select menu</option>
                          <option value="0">Free : Rp. 0</option>
                          <option value="60000">Paid : Rp. 60.000</option>
                          <option value="40000">Paid : Rp. 40.000</option>
                          <option value="80000">Paid : Rp. 80.000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-description">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description :</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={description}
                      rows={3}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="text-center">
                  <Button
                    className="text-right"
                    variant="success"
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure you want to edit class?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          onSave();
                        }
                      });
                    }}
                  >
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="bd-progress" style={{ marginTop: "120px" }}>
            <h1>Class Progress</h1>
            <div className="progress-scroll ">
              <ClassProgress />
              <ClassProgress />
              <ClassProgress />
              <ClassProgress />
              <ClassProgress />
              <ClassProgress />
            </div>
          </div>
        </section>
        <section className="bd-member col-3 col-sm-10 col-md-3 col-lg-3 col-xl-3 mt-3 me-3 pe-3 ps-3">
          <h1>Class Member</h1>
          <div className="bg-select d-flex justify-content-start align-items-center mb-4 ps-5 pe-5">
            <Form.Check aria-label="option 1" />
            <p className="col-10 m-0 text-start">Select All</p>
            <i className="col-1 fas fa-ellipsis-v text-end mt-0 pe-1"></i>
          </div>
          <div className="member-scroll ">
            {students.map((data) => {
              return (
                <MemberClass
                  name={data.student_name}
                  studentId={data.student_id}
                  classId={id}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default withRouter(Member);
