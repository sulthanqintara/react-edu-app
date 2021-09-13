import React from 'react'
import "./navbarClassDetail.css"
import { Link, withRouter } from "react-router-dom";

function NavbarClassDetail(props) {
    const path = props.location.pathname;
    return (
        <>
            <div className="row mt-5 description-link">
                <div className="col-2 text-end ">
                    <Link className={path === "/fasilitator/class-detail" ? "active" : ""} to="/fasilitator/class-detail">
                        <h5>Information</h5>
                    </Link>
                </div>
                <div className="col-2 text-end ">
                    <Link to="#">
                        <h5>Class Progress</h5>
                    </Link>
                </div>
                <div className="col-2 text-end ">
                    <Link to="#">
                        <h5>Class Discussion</h5>
                    </Link>
                </div>
                <div className="col-2 text-center ">
                    <Link className={path === "/activity" ? "active" : ""} to="/member">
                        <h5>Member</h5>
                    </Link>
                </div>
                <div className="bg-line ">
                </div>
            </div>
        </>
    )
}

export default withRouter(NavbarClassDetail)
