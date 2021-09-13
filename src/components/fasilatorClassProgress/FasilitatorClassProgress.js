import React from 'react'
import Form from "react-bootstrap/Form"
import "./fasilitatorClassProgress.css"

function FasilitatorClassProgress() {
    return (
        <>
            <div className="bg-progress d-flex justify-content-between align-items-center mb-1 ps-3 pe-3">
                <Form.Check aria-label="option 1" />
                <h2 className="m-0">Front-end fundamentals</h2>
                <p className="m-0 pt-1 text-center">Completed</p>
            </div>

        </>
    )
}

export default FasilitatorClassProgress
