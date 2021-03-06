import axios from "axios";
import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ColumnMyClass({ data }) {
  const [averageScoreData, setAverageScoreData] = useState([]);
  const [subjectsTotal, setSubjectsTotal] = useState([]);
  const [averageScore, setAverageScore] = useState([]);
  const authState = useSelector((state) => state.auth.authInfo);

  const progress = (averageScoreData / subjectsTotal.length) * 100;
  useEffect(() => {
    const url = process.env.REACT_APP_BASE_URL;
    axios
      .get(`${url}/subjects/classes/${data.class_id}`)
      .then((res) => setSubjectsTotal(res.data.result));
    return axios
      .get(
        `${url}/subjects/scoring?class_id=${data.class_id}&user_id=${authState.user_id}`
      )
      .then((res) => {
        setAverageScoreData(res.data.result.finishedClass);
        setAverageScore(
          res.data.result.avgResult ? res.data.result.avgResult : 0
        );
      });
  }, [authState.user_id, data.class_id]);
  return (
    <tbody key={data.class_id}>
      <tr>
        <th scope="row ">
          <div className="">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
        </th>
        <td>{data.class_name}</td>
        <td>{data.category}</td>
        <td>{data.description}</td>
        <td>
          <div style={{ width: 35, height: 35 }}>
            <CircularProgressbar
              value={progress ? progress : 0}
              text={progress ? progress + "%" : "0%"}
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
            {progress === 100 ? "complete" : "ongoing"}
          </Link>
        </td>
        {averageScore > 70 && (
          <td className="score text-center">{averageScore}</td>
        )}
        {averageScore < 70 && averageScore > 50 && (
          <td className="score orange text-center">{averageScore}</td>
        )}
        {averageScore < 50 && (
          <td className="score red text-center">{averageScore}</td>
        )}
      </tr>
    </tbody>
  );
}

export default ColumnMyClass;
