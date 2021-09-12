import React from 'react'
import Profile from "../assets/img/icon/pp.png";

function ChatMessage() {
    return (
        <div>
            <div className="chat-scroll">
                <div className="d-flex justify-content-around align-items-center mt-2 mb-4">
                    <img src={Profile} height={75} width={75} alt="pict" />
                    <div>
                        <h4>Nissa Sabyan</h4>
                        <h5>How about number 3?</h5>
                    </div>
                    10.15 pm
                </div>
            </div>
        </div>
    )
}

export default ChatMessage
