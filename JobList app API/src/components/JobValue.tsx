import React from 'react';
import foto from './001.png';

function JobValue() {
    return (
        
        <div>
            <div className="jobValue">
                <div className="image">
                    <img src={foto} alt=''></img>
                </div>
                <div className="mainText">
                    <div className='title'>some long text about this work,some long text about this work,some long text about this work, some long text about this work </div>
                    <div className='name'>name</div>
                    <div className='location'>location</div>
                </div>
                <div className="dataText">
                    <p>09.11.2022</p>
                </div>
                
            </div>
        </div>
    )
}

export default JobValue;