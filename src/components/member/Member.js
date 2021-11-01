import React, { useEffect, useState } from "react";
import Profile from "../../assets/img/icon/member1.png";
import "./member.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MemberCard from "../memberCard/MemberCard";
import axios from "axios";

function MyVerticallyCenteredModal(props) {
  const classId = props.classId;
  const studentId = props.studentId;
  const [subjects, setSubject] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/subjects/scoring?class_id=${classId}&user_id=${studentId}`
      )
      .then((res) => {
        console.log(res.data.result.scResult);
        setSubject(res.data.result.scResult);
      })
      .catch((err) => console.log(err));
  }, [classId, studentId]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="p-4">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="d-flex flex-row flex-grow-1 align-items-center"
        >
          <img src={props.profile} height={64} width={64} alt="pict" />
          <p className="text-center m-0 ps-4">{props.name}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* MAP DATA DI SINI */}
        {subjects.map((data) => {
          return (
            <MemberCard
              score={data.score}
              subject={data.subject}
              id={data.id}
            />
          );
        })}
        {/* MAP DATA DI SINI */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function Member({ name, studentId, classId }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="bg-member d-flex justify-content-between align-items-center mb-4 ps-3 pe-3">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Set Score
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        profile={Profile}
        studentId={studentId}
        classId={classId}
        name={name}
      />
      <img src={Profile} height={64} className="ms-2" width={64} alt="pict" />
      <p className="col-7 m-0 pt-1 text-center">{name}</p>
      <i className="col-2 fas fa-ellipsis-v text-end mt-0"></i>
    </div>
  );
}

export default Member;
