import React from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import { AiOutlineLeft } from "react-icons/ai";
import {CiLocationOn} from "react-icons/ci";
import {BsFillShareFill} from "react-icons/bs";
import {BsBookmark} from "react-icons/bs";
import MapConteiner from '../MapConteiner/MapConteiner';

function JobDetailedValue(props) {
    const {state} = useLocation();
    const {name, email, phone, title, salary, 
        address, benefits, latitude, longitude, 
        pictures, createdAt, description, 
        employment_type} = state;

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
    function NewlineText(props) {
        const text = props.text;
        return <div id="id">{text}</div>;
    }
    const lat:number = latitude;
    const lng:number = longitude;
    return (
        <div className='jobDetailedValue'>
            <header className='header'>
                <div className='text'>
                    <div className='upper'>
                        <p className="jobDetails">Job Details</p>
                        <p className='saveIcon'><BsBookmark/></p>
                        <p className='save'>Save</p>
                        <p className='shareIcon'><BsFillShareFill/></p>
                        <p className='share'>Share</p>
                    </div>
                    <button type='submit' placeholder='APPLY NOW'>APPLY NOW</button>
                    <div className='titleBox'>
                        <p className='mainText'>{title}</p>
                        <p className='price'>{salary}</p>
                    </div>
                    <p className='date'>{getTime()}</p>
                </div>
                <div className='map'>
                    <div className="mapText">
                        <p className="mapTitle">{name}</p>
                        <p className="mapAddress"><CiLocationOn/>{address}</p>
                        <p className="mapContact">{phone}</p>
                        <p className="mapContactMail">{email}</p>
                    <MapConteiner lat={lat} lng={lng}/>
                    </div>
                </div>
            </header>
            <main className='main'>
                <p className='description'>
                    <NewlineText text={description} />
                </p>
                <button type='submit' placeholder='APPLY NOW'>APPLY NOW</button>
            </main>
            <footer className="footer">
                <p className='footerTitle'>Additional info</p>
                <p className='employ'>Employment type</p>
                <div className='employValue'>
                    {employment_type.map(i => <p>{i}</p>)}
                </div>
                <p className='benefits'>Benefits</p>
                <div className='benefitsValue'>
                    {benefits.map(i => <p>{i}</p>)}
                </div>
                <p className='imgTitle'>Attached images</p>
                <div className="images"> 
                    {pictures.map(i=> <img src={i} alt=""></img>)}
                </div>
                
                <button type='submit' onClick={()=>navigate("/")}><AiOutlineLeft/>RETURN TO JOB BOARD</button>
            </footer>
        </div>
    )
}

export default JobDetailedValue;