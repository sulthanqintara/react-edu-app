/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { withRouter, useHistory, useLocation, Link } from "react-router-dom";
import { connect } from "react-redux";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { getClassByUserAction } from "../../redux/actionCreators/classes";
import axios from "axios";

function TableMyClass(props) {
  const { getClassByUserAction } = props;
  const [averageScore, setAverageScore] = useState([]);

  const getAverage = () => {
    const url = process.env.REACT_APP_BASE_URL;
    axios
      .get(
        `${url}/subjects/scoring?class_id=${2}&user_id=${
          props.auth.authInfo.user_id
        }`
      )
      .then((res) => {
        return setAverageScore(res.data.result.scResult);
      });
  };
  const averageScoreHandler = averageScore.reduce(
    (acc, curr, idx) => acc + curr.score,
    0
  );
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getAverage();
    let query = `?user_id=${props.auth.authInfo.user_id}`;
    if (props.keyword) query = query + `&keyword=${props.keyword}`;
    getClassByUserAction(query);
    if (location.search) return history.push(`${location.search}`);
  }, [getClassByUserAction, props.auth.authInfo.user_id, props.keyword]);

  return (
    <>
      <div className="table-responsive my-class">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
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

          {props.classes.dataPerUser?.data?.result.data.map((data) => {
            return (
              <tbody key={data.class_id}>
                <tr>
                  <th scope="row ">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      ></input>
                    </div>
                  </th>
                  <td>{data.class_name}</td>
                  <td>{data.category}</td>
                  <td>{data.description}</td>
                  <td>
                    <div style={{ width: 35, height: 35 }}>
                      <CircularProgressbar
                        value={50}
                        text="50%"
                        styles={buildStyles({ textSize: "1.5rem" })}
                      />
                    </div>
                  </td>
                  <td>
                    <Link
                      to={`/class-detail/${data.class_id}`}
                      className="btn btn-status"
                      style={{
                        borderRadius: "24px",
                        backgroundColor: "#D2DEED",
                        color: "#5784BA",
                      }}
                    >
                      ongoing
                    </Link>
                  </td>
                  <td className="score">
                    {averageScoreHandler / averageScore.length}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

const mapStateToProps = ({ classes, auth }) => {
  return {
    auth,
    classes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getClassByUserAction: (body) => {
      dispatch(getClassByUserAction(body));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TableMyClass));
