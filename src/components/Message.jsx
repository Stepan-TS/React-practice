import React from "react";
import avatar from '../img/001.png';
const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img
                  src={avatar}
                  alt=""
                  />
                  <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img
                  src={avatar}
                  alt=""
                  />
                  <span>just now</span>
                
                  
            </div>
        </div>
    )
}

export default Message;