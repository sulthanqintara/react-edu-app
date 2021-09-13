import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MyClass from "../../components/fasilitatorMyClass/FasilitatorMyClass";
import Navbar from "../../components/navbar/Navbar";
import "./fasilitatorClass.css"
import { Link } from 'react-router-dom';

function FasilitatorClass() {
    return (
        <>
            <main className="fasilitator d-flex vh-100">
                <Navbar />
                <section className="container-fluid my-class d-flex flex-column pt-4 pb-4 pe-5 ps-5 ms-4 me-5">
                    <div className="mb-2">
                        <h1>Activity</h1>
                        <h2>My Class</h2>
                        <div className="container-fluid table-class ps-4">
                            <div className="header-table d-flex justify-content-start ps-3">
                                <Form.Check aria-label="option 1" />
                                <h3 className="col-2 text-start">Class Name</h3>
                                <h3 className="col-2">Category</h3>
                                <h3 className="col-4 text-start">Description</h3>
                                <h3 className="col-2">Schedule</h3>
                                <h3 className="col-1">Students</h3>
                            </div>
                            <MyClass />
                            <MyClass />
                            <MyClass />
                            <h6 className="text-center mt-3">view all {'>'}</h6>
                        </div>
                    </div>
                    <div className="bd-new-class mt-4">
                        <h2>Create New class</h2>
                        <div className="container-fluid create-class ps-5 pt-4 pe-5 ms-4 me-5">
                            <form>
                                <div className="d-flex mb-4">
                                    <div className="col-6">
                                        <div className="input-name d-flex mb-3">
                                            <p>Class Name</p>
                                            <span>:</span>
                                            <input type="text" />
                                        </div>
                                        <div className="input-categories d-flex">
                                            <p>Categories</p>
                                            <span>:</span>
                                            <select className="form-select" aria-label="Default select example">
                                                <option defaultValue>Open this select menu</option>
                                                <option value="1">Software</option>
                                                <option value="2">History</option>
                                                <option value="3">Finance</option>
                                                <option value="4">Sains</option>
                                                <option value="5">Math</option>
                                                <option value="6">Science</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-price d-flex">
                                            <p>Pricing</p>
                                            <span>:</span>
                                            <Form.Group className="mb-2 d-flex" id="formGridCheckbox">
                                                <Form.Check type="radio" label="Free" />
                                                <Form.Check type="radio" label="Paid" />
                                            </Form.Group>
                                        </div>
                                        <div className="input-schedule d-flex">
                                            <p>Schedule</p>
                                            <span>:</span>
                                            <select className="form-select" aria-label="Default select example">
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
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </div>
                                <div className="text-end">
                                    <Link to="/fasilitator/class-detail">
                                        <Button className="text-right" variant="success">Create</Button>
                                    </Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>


            </main>
        </>
    )
}

export default FasilitatorClass
