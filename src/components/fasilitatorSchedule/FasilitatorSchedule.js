import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../pages/home/home.css";

function FasilitatorSchedule(props) {
  const url = process.env.REACT_APP_BASE_URL;
  const [countUser, setCountUser] = useState("");
  const { dataArray } = props;
  useEffect(() => {
    axios
      .get(`${url}/classes/students/${dataArray?.id}}`)
      .then((data) => {
        setCountUser(data.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataArray?.id, url]);

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
          <p className="capacity m-0">{countUser.length}</p>
          <i className="icon fas fa-graduation-cap"></i>
        </div>
      </div>
    </div>
  );
}

export default FasilitatorSchedule;
