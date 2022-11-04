import React from "react";
import clip from '../img/clip.png';
import file from '../img/file.png';
const Input = () => {
    return (
        <div className="input">
        <input type="text" placeholder="Type something..." />
        <div className="send">
            <img src={clip} alt="" />
            <input type="file" style={{display:"none"}} id="file"/>
            <label className='ff' htmlFor="file">
                <img  src={file} alt=""/>
            </label>
            <button>Send</button>
        </div>
        </div>
    )
}

export default Input;