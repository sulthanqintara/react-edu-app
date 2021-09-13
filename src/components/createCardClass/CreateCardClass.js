import React from 'react'
import "./createCardClass.css"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CreateCardClass() {
    return (
        <div>
            <div className="bg-create-card">
                <div className="time-classes mh-90 vh-100 mb-1">
                    <h5 className="m-0">08.00 - 09.40</h5>
                    <h5 className="m-0">Introduction to Banking Finance</h5>
                    <p className="m-0">24</p>
                    <i className="fas fa-graduation-cap"></i>
                </div>
            </div>
            <div className="btn-class text-center">
                <Link to="/fasilitator/class">
                    <Button><i className="fas fa-plus-circle pe-2"></i>New Task</Button>
                </Link>
            </div>
        </div>
    )
}

export default CreateCardClass
