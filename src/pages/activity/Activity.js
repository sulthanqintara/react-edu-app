import React from "react";
import "../activity/activity.css";
import { Link } from "react-router-dom";

import TableMyClass from "../../components/tableMyClass/TableMyClass";
import Navbar from "../../components/navbar/Navbar";
import TableNewClass from "../../components/tableNewClass/TableNewClass";

function Activity() {
  return (
    <>
      {console.log(window.innerWidth)}
      <main>
        <section className="activity-page">
          <div className="d-flex flex-column flex-xl-row">
            <div className="col-md-2 col-6 flex-grow-1">
              <Navbar className=" flex-grow-1" />
            </div>
            <div className="col-md-9 col-6 content-activity ">
              <div className="row">
                <div className="col">
                  <h3>Activity</h3>
                </div>
              </div>
              <div className="container container-fluid">
                <div className="row">
                  <div className="col-12">
                    <h4>My class</h4>
                  </div>
                  <div className="col-12 mt-5">
                    <TableMyClass />
                    <Link to="#">
                      <p
                        className="text-center"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        view all
                      </p>
                    </Link>
                  </div>
                  <div className="col-12">
                    <TableNewClass />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Activity;
