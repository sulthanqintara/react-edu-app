import React from 'react'
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';

function FasilitatorMyClass() {
    return (
        <>
            <Link to="/fasilitator/class-detail">
                <div className="bd-table d-flex justify-content-start mb-1 ps-3">
                    <Form.Check aria-label="option 1" />
                    <p className="col-2 text-start">Front-end fundamentals</p>
                    <p className="col-2">Software</p>
                    <p className="col-4 text-start">Learn the fundamentals of front end...</p>
                    <p className="col-2">Friday, 08:00 - 09:40</p>
                    <p className="col-1">24 <i className="fas fa-graduation-cap"></i></p>
                    <i className="col-1 fas fa-ellipsis-v"></i>
                </div>
            </Link>
        </>
    )
}

export default FasilitatorMyClass
