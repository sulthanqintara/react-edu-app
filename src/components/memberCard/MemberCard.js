import React from "react";

function MemberCard({ score }) {
  return (
    <div className="d-flex flex-row justify-content-between px-5 modal-score-card-container">
      <h5>HTML Essential Training</h5>
      {score > 70 && (
        <h3 className="score text-center" style={{ color: "#51E72B" }}>
          {score}
        </h3>
      )}
      {score < 70 && score > 50 && (
        <h3 className="score orange text-center">{score}</h3>
      )}
      {score < 50 && <h3 className="score red text-center">{score}</h3>}
      {score === null && (
        <>
          <h5 className="score modal-score-unfinished text-center">
            Unfinished
          </h5>
        </>
      )}
    </div>
  );
}

export default MemberCard;
