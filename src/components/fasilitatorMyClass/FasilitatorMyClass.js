import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FasilitatorMyClass({ data }) {
  const url = process.env.REACT_APP_BASE_URL;
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get(`${url}/classes/${data.class_id}`)
      .then((data) => setStudents(data.data.result));
  }, [data.class_id, url]);
  return (
    <>
      <Link
        to={`/fasilitator/class-detail/${data.class_id}`}
        style={{ overflowX: "auto" }}
      >
        <div className="bd-table d-flex justify-content-start mb-1 ps-3">
          <p className="col-2 text-start">{data.class_name}</p>
          <p className="col-2">{data.category}</p>
          <p className="col-4 text-start">{data.description}</p>
          <p className="col-2">
            {data.day}, {data.start_time.split(":")[0]}:
            {data.start_time.split(":")[1]} - {data.end_time.split(":")[0]}:
            {data.end_time.split(":")[1]}
          </p>
          <p className="col-1">
            {students.length} <i className="fas fa-graduation-cap" />
          </p>
        </div>
      </Link>
    </>
  );
}

export default FasilitatorMyClass;
