import React from 'react'
import Form from "react-bootstrap/Form";
import Profile from "../../assets/img/icon/member1.png";
import "./member.css"

function Member() {
    return (
        <>
            <div className="bg-member d-flex justify-content-between align-items-center mb-4 ps-3 pe-3">
                <Form.Check aria-label="option 1" />
                <img src={Profile} height={64} width={64} alt="pict" />
                <p className="col-7 m-0 pt-1 text-center">Deddy Corbuzier</p>
                <i className="col-2 fas fa-ellipsis-v text-end mt-0"></i>
            </div>
        </>
    )
}

export default Member
