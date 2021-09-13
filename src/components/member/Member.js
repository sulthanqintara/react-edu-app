import React from 'react'
import { Link } from "react-router-dom";
import Profile from "../../assets/img/icon/member1.png";
import "./member.css"

function Member() {
    return (
        <>
            <div className="member container-fluid mt-3 mb-3 ms-5 ps-5">
                <Link className="d-flex align-items-center" to="#">
                    <img src={Profile} height={64} width={64} alt="pict" />
                    <p className="col-10 ps-4 mb-0">Deddy Corbuzier</p>
                    <i className="col-1 fas fa-ellipsis-v text-end mt-0 pe-4"></i>
                </Link>
            </div>
        </>
    )
}

export default Member
