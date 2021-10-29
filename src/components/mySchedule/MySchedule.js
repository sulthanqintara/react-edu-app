import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../pages/home/home.css";
import { useSelector } from "react-redux";
import axios from "axios";

function MySchedule(props) {
  const url = process.env.REACT_APP_BASE_URL;
  const reduxAuth = useSelector((reduxState) => reduxState.auth);
  const [subject, setSubject] = useState([]);
  const [subjectFinish, setSubjectFinish] = useState(0);
  const { dataArray } = props;
  // console.log(dataArray)
  useEffect(() => {
    axios
      .get(
        `${url}/subjects/scoring?class_id=${dataArray?.id}&user_id=${reduxAuth.authInfo.user_id}`
      )
      .then((data) => {
        setSubject(data.data.result.scResult);
        setSubjectFinish(data.data.result.finishedClass);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataArray?.id, reduxAuth.authInfo.user_id, url]);
  const progress = (subjectFinish / subject.length) * 100;
  return (
    <div>
      <div className="schedule-class">
        <div className="schedule-container mb-1">
          <h5 className="time m-0">
            {dataArray.start_time.slice(0, 5) +
              " - " +
              dataArray.end_time.slice(0, 5)}
          </h5>
          <h5 className="class m-0">{dataArray.name}</h5>
          <CircularProgressbar
            value={progress ? progress : 0}
            text={progress ? `${progress}%` : "0%"}
            className="circle-bar"
          />
        </div>
      </div>

      {/* <div className="loader">
        // <Loader type="TailSpin" color="#ffcd61" height={80} width={80} />
        //{" "}
      </div> */}
    </div>
  );
}

export default MySchedule;
