import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating';
import {CiLocationOn} from "react-icons/ci";
import {useNavigate} from 'react-router-dom'

function Post (props) {
    const {name, email, phone, title, salary, address, benefits, location, pictures, createdAt, updatedAt, description, employment_type} = props;
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate)
    }
        
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value: number, index: number) => console.log(value, index)
    
    const navigate = useNavigate();
            
    function dateToHowManyAgo(stringDate){
        const currDate = new Date();
        const diffMs = currDate.getTime() - new Date(stringDate).getTime();
        const sec:number = diffMs/1000;
        if(sec<60)
            return Math.floor(sec)+' second'+(Math.floor(sec)>1?'s':'')+' ago';
        const min=sec/60;
        if(min<60)
            return Math.floor(min)+' minute'+(Math.floor(min)>1?'s':'')+' ago';
        const h=min/60;
        if(h<24)
            return Math.floor(h)+' hour'+(Math.floor(h)>1?'s':'')+' ago';
        const d=h/24;
        if(d<30)
            return Math.floor(d)+' day'+(Math.floor(d)>1?'s':'')+' ago';
        const m=d/30;
        if(m<12)
            return Math.floor(m)+' month'+(Math.floor(m)>1?'s':'')+' ago';
        const y=m/12;
        return Math.floor(y)+' year'+(Math.floor(y)>1?'s':'')+' ago';
    }
    function getTime() {
        return (dateToHowManyAgo(createdAt));
    }
    const latitude = location.lat
    const longitude = location.long
    return (
        <div className="jobValue">
            <div className="mainBox">
                <div className="image">
                    <img src={pictures[2]} alt=''></img>
                </div>
                <div className="mainText" onClick={()=>{navigate('/details',
                {state:{
                title:title, salary:salary,description:description, 
                employment_type:employment_type, pictures:pictures, 
                createdAt:createdAt, name:name, phone:phone, email:email, 
                address:address, latitude:latitude, longitude:longitude, 
                benefits:benefits
                }})}}>
                    <p className='title'>{title}</p>
                    <p className='name'>{name}</p>
                    <div className='location'>
                        <p className='icon'><CiLocationOn/></p>
                        <p className='locationText'>{address}</p>
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
                   <p>{getTime()}</p> 
                </div>   
            </div>
        </div>
    )
}

export default Post;