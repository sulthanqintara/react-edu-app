/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { useSelector } from "react-redux";

function TableClassProgress(props) {
  const { id } = props;
  const [subjectClass, setSubjectClass] = useState([]);
  const userId = useSelector((state) => state.auth.authInfo.user_id);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/subjects/classes/${id}`)
  //     .then((res) => {
  //       // console.log(res.data.result);
  //       setSubjectClass(res.data.result);
  //     })
  //     .catch((err) => console.log(err));
  // }, [id]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/subjects/scoring?class_id=${id}&user_id=${userId}`
      )
      .then((res) => {
        // console.log(res.data.result.scResult);
        setSubjectClass(res.data.result.scResult);
      })
      .catch((err) => console.log(err));
  }, [userId]);
  return (
    <>
      <div className="table-responsive my-class">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">
                <div className="">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <th scope="col">Class Name</th>
              <th scope="col">Schedule </th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          {subjectClass.map((data) => {
            const day = new Date(data.date);
            console.log(day);
            return (
              <tbody key={data.id}>
                <tr>
                  <th scope="col">
                    <div className="">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </th>
                  <td>{data.subject}</td>
                  <td>{day.toLocaleString().slice(0, 11).split(",")}</td>
                  <td className="score-progress-table">{data.score}</td>
                </tr>
              </tbody>
            );
          })}

          {/* {props.classes.dataPerUser?.data?.result?.data.map((data) => {
            return <ColumnMyClass data={data} key={data.class_id} />;
          })} */}
        </table>
        {/* {!props.classes.dataPerUser?.data?.result?.data && <text>No data</text>} */}
      </div>
    </>
  );
}

// const mapStateToProps = ({ classes, auth }) => {
//   return {
//     auth,
//     classes,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getClassByUserAction: (body) => {
//       dispatch(getClassByUserAction(body));
//     },
//   };
// };

export default withRouter(TableClassProgress);
