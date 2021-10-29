import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MyClass from "../../components/fasilitatorMyClass/FasilitatorMyClass";
import Navbar from "../../components/navbar/Navbar";
import "./fasilitatorClass.css";
import { useSelector } from "react-redux";
import { createClass } from "../../utils/https/classes";
import Swal from "sweetalert2";
import axios from "axios";

function FasilitatorClass() {
  const faciliator_id = useSelector((state) => state.auth.authInfo.user_id);
  const [className, setClassName] = useState("");
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");
  const [level, setLevel] = useState("");
  const [schedule, setSchedule] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const url = process.env.REACT_APP_BASE_URL;
  const [data, setData] = useState([]);

  const onCreate = () => {
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
    data.append("category_id", category);
    data.append("description", description);
    data.append("day", schedule);
    data.append("level_id", level);
    data.append("start_date", date);
    data.append("start_time", startTime);
    data.append("end_time", endTime);
    data.append("facilitator_id", faciliator_id);
    data.append("pricing", pricing);

    createClass(data)
      .then((res) => {
        console.log(res);
        return Swal.fire({
          icon: "success",
          title: "Success create class",
          text: "Your class has been created!",
        });
      })
      .catch((err) => {
        console.log(err);
        return Swal.fire({
          icon: "error",
          title: "Your input not valid",
          text: "Please check your input again.",
        });
      });
  };
  useEffect(() => {
    axios
      .get(
        `${url}/users/facilitator-classes?facilitator_id=${faciliator_id}&page=1&limit=10`
      )
      .then((data) => {
        setData(data.data.result);
      });
  }, [faciliator_id, url]);

  return (
    <>
      <main className="fasilitator d-flex">
        <Navbar />
        <section className="container-fluid my-class d-flex flex-column facilitator-activity-container">
          <div style={{ overflowX: "auto" }}>
            <h1>Activity</h1>
            <h2>My Class</h2>
            <div className="container-fluid ps-4 facilitator-table-container">
              <div className="header-table d-flex justify-content-start ps-3">
                <h3 className="col-2 text-start">Class Name</h3>
                <h3 className="col-2">Category</h3>
                <h3 className="col-4 text-start">Description</h3>
                <h3 className="col-2">Schedule</h3>
                <h3 className="col-1">Students</h3>
              </div>
              {data?.data?.map((mappedData) => {
                return <MyClass data={mappedData} key={mappedData.class_id} />;
              })}
            </div>
          </div>
          <div className="bd-new-class mt-4">
            <h2>Create New class</h2>
            <div className="container-fluid create-class ps-5 pt-4 pe-5 ms-4 me-5">
              <form>
                <div className="d-flex flex-column flex-lg-row mb-4">
                  <div className="flex-grow-1">
                    <div className="input-name d-flex mb-3">
                      <p>Class Name</p>
                      <span>:</span>
                      <input
                        type="text"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                      />
                    </div>
                    <div className="input-categories d-flex">
                      <p>Categories</p>
                      <span>:</span>
                      <select
                        className="form-select"
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
                    <div className="input-categories d-flex mt-4">
                      <p>Level</p>
                      <span>:</span>
                      <select
                        className="form-select"
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
                  </div>
                  <div className="flex-grow-1">
                    <div className="input-schedule flex-column flex-sm-row d-flex mt-4">
                      <div className="d-flex">
                        <p>Schedule</p>
                        <span>:</span>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={schedule}
                          onChange={(e) => setSchedule(e.target.value)}
                        >
                          <option hidden>Open this select menu</option>
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
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                    <div className="input-categories d-flex mt-4">
                      <p>Pricing</p>
                      <span>:</span>
                      <select
                        className="form-select"
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
                <div className="input-description">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="text-end">
                  <Button
                    className="text-right"
                    variant="success"
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure you want to create class?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, create it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          onCreate();
                        }
                      });
                    }}
                  >
                    Create
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default FasilitatorClass;
