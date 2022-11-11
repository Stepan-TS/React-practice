import React,{useState} from 'react';
import foto from '../photo.jpg';
import {CiLocationOn} from "react-icons/ci";
import { Rating } from 'react-simple-star-rating';

function JobValue() {
        const [rating, setRating] = useState(0);
        
        const handleRating = (rate: number) => {
          setRating(rate)
        }
        
        const onPointerEnter = () => console.log('Enter')
        const onPointerLeave = () => console.log('Leave')
        const onPointerMove = (value: number, index: number) => console.log(value, index)
    
    return (
            <div className="jobValue">
               <div className="mainBox">
                    <div className="image">
                        <img src={foto} alt=''></img>
                    </div>
                    <div className="mainText">
                        <p className='title'>Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)</p>
                        <p className='name'>Department name •  Allgemeines Krankenhaus der Stadt Wien - AKH</p>
                        <div className='location'>
                            <p className='icon'><CiLocationOn/></p>
                            <p className='locationText'>Vienna, Austria</p>
                        </div>
                    </div>
            
                    <div className="ratingBox">
                    
                    <Rating
                        onClick={handleRating}
                        onPointerEnter={onPointerEnter}
                        onPointerLeave={onPointerLeave}
                        onPointerMove={onPointerMove}
                        size={15}
                        fillColor={"#38415D"}
                        /* Available Props */
                    />
                    
                    </div>
                    <div className='dateBox'>
                        <p>Posted 2 days ago</p>
                    </div>   
                   
                </div>
            </div>
    )
}

export default JobValue;