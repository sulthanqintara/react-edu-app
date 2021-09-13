import React from "react";
import "../activity/activity.css";
import { Link } from "react-router-dom";

import TableMyClass from "../../components/tableMyClass/TableMyClass";
import Navbar from "../../components/navbar/Navbar";
import TableNewClass from "../../components/tableNewClass/TableNewClass";

function Activity() {
  return (
    <>
      <main>
        <section className="activity-page vh-100">
          <div className="d-flex flex-column flex-xl-row justify-content-between vh-100">
            <Navbar />
            <div className="col-11 col-md-9 content-activity ">
              <div className="row">
                <div className="col">
                  <h3>Activity</h3>
                </div>
              </div>
              <div className="container container-fluid">
                <h4>My class</h4>
                <div className="col-12 mt-5">
                  <TableMyClass />
                  <Link to="/myclass">
                    <p
                      className="text-center"
                      style={{ color: "black", fontWeight: "500" }}
                    >
                      view all
                    </p>
                  </Link>
                </div>
                <TableNewClass />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Activity;
