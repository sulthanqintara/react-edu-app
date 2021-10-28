import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MemberClass from "../../components/member/Member";
import "./fasilitatorClassDetail.css";
import ClassProgress from "../../components/fasilatorClassProgress/FasilitatorClassProgress";
import Navbar from "../../components/navbar/Navbar";

function Member() {
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
                    <div className="input-edit-name d-flex justify-content-between mb-3">
                      <p className="m-0">
                        Class Name <span>:</span>
                      </p>
                      <input type="text" />
                    </div>
                    <div className="input-edit-schedule d-flex justify-content-between align-items-center">
                      <p className="m-0">
                        Schedule <span>:</span>
                      </p>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Open this select menu</option>
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                        <option value="7">Sunday</option>
                      </select>
                      <input type="time" className="me-2" />
                      <input type="time" />
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
                      placeholder="Front end development manages everything that users visually see first in their browser or application. Front end developers are responsible for the look and feel of a site."
                      rows={3}
                    />
                  </Form.Group>
                </div>
                <div className="text-center">
                  <Link to="/">
                    <Button className="text-right" variant="success">
                      Save
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="bd-progress">
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
            <MemberClass />
            <MemberClass />
            <MemberClass />
            <MemberClass />
            <MemberClass />
            <MemberClass />
            <MemberClass />
            <MemberClass />
            <MemberClass />
            <MemberClass />
            <MemberClass />
          </div>
        </section>
      </main>
    </>
  );
}

export default Member;
