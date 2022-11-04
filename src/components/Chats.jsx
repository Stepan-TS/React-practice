import React from "react";
import foto from '../img/001.png'
const Chats = () => {
    return (
        <div className="chats">
             <div className="userChat">
                <img 
                src={foto} 
                alt="" 
                />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="userChat">
                <img 
                src={foto} 
                alt="" 
                />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="userChat">
                <img 
                src={foto} 
                alt="" 
                />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>hello</p>
                </div>
            </div>
        </div>
    )
} 

export default Chats;