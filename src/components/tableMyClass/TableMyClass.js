import React from "react";
import progressBar from "../../assets/img/icon/progress-bar.png";

function TableMyClass() {
  return (
    <>
      <div className="table-responsive my-class">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                </div>
              </th>
              <th scope="col">Class Name</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Progress</th>
              <th scope="col">Status</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row ">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  ></input>
                </div>
              </th>
              <td>Frontend fundamentals</td>
              <td>Software</td>
              <td>Learn the fundamentals of frontend</td>
              <td>
                <img src={progressBar} alt="" />
              </td>
              <td>
                <button
                  className="btn btn-status"
                  style={{
                    borderRadius: "24px",
                    backgroundColor: "#D2DEED",
                    color: "#5784BA",
                  }}
                >
                  ongoing
                </button>
              </td>
              <td className="score">86</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableMyClass;
