// import React, { useState, useEffect } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import Axios from "axios";

function CardClass() {
    // const [schedule, setSchedule] = useState([])
    // useEffect(() => {
    //     Axios.get("http://localhost:8000/subjects/")
    //         .then(({ data }) => {
    //             setSchedule(data.result)
    //             console.log(data.result)
    //         })
    //         .catch(({ err }) => {
    //             setSchedule(err)
    //         })
    // }, [])
    return (
        <>
            <div>
                <div className="bg-card">
                    <div className="time-classes vh-100 mb-1">
                        <h5>08.00 - 09.40</h5>
                    </div>
                    <div className="bd-title">
                        <div className="title-classes d-flex ms-1 mb-1">
                            <h5>Introduction to Banking Finance</h5>
                            <div style={{ width: 40, height: 40 }}>
                                <CircularProgressbar value={89} text={"89%"} />
                            </div>
                        </div>
                        <div className="title-classes d-flex ms-1 mb-1">
                            <h5>Trygonometry</h5>
                            <div style={{ width: 40, height: 40 }}>
                                <CircularProgressbar value={10} text={"10%"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardClass
