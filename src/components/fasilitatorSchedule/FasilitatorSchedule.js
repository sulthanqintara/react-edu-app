import React from "react";
import "../../pages/home/home.css";

function FasilitatorSchedule(props) {
  const {dataArray} = props
  console.log(dataArray)
  return (
    <div>
      <div className="schedule-class">
        <div className="schedule-container mb-1">
          <h5 className="time m-0">{dataArray.start_time.slice(0, 5) +
              " - " +
              dataArray.end_time.slice(0, 5)}</h5>
          <h5 className="class m-0">{dataArray.name}</h5>
          <p className="capacity m-0">20</p>
          <i className="icon fas fa-graduation-cap"></i>
        </div>
      </div>
    </div>
  );
}

export default FasilitatorSchedule;
