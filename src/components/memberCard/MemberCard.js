import axios from "axios";
import React, { useState } from "react";

function MemberCard({ score, subject, studentId, subjectId }) {
  const [newScore, setNewScore] = useState(null);
  console.log(newScore);
  const token = localStorage.getItem("token");

  const onAddScore = () => {
    const data = new URLSearchParams();
    data.append("user_id", studentId);
    data.append("subject_id", subjectId);
    data.append("score", newScore);
    axios
      .post(`http://localhost:8000/subjects/scoring`, data, {
        headers: { "x-access-token": `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex flex-row justify-content-between px-5 modal-score-card-container">
      <h5>{subject}</h5>
      <button className="btn btn-primary" onClick={onAddScore}>
        Add score
      </button>
      {score > 70 && (
        <h3 className="score text-right" style={{ color: "#51E72B" }}>
          <input
            type="text"
            className="text-end"
            placeholder={score}
            style={{ border: "none" }}
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
          />
        </h3>
      )}
      {score < 70 && score > 50 && (
        <h3 className="score orange text-center">
          {" "}
          <input
            type="text"
            placeholder={score}
            className="text-end"
            style={{ border: "none" }}
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
          />
        </h3>
      )}
      {score < 50 && <h3 className="score red text-center">{score}</h3>}
      {score === null && (
        <>
          <h5 className="score modal-score-unfinished text-center">
            {" "}
            <input
              type="text"
              placeholder="Unfinished"
              className="text-end"
              style={{ border: "none" }}
              value={newScore}
              onChange={(e) => setNewScore(e.target.value)}
            />
          </h5>
        </>
      )}
    </div>
  );
}

export default MemberCard;
