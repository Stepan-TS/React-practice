import React,{useContext}from "react";
import foto from '../img/001.png'
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';
import {AuthContext} from '../context/AuthContext';

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)
    return (
        <div className="navbar">
            <span className="logo">Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>John</span>
                <button onClick={()=>signOut(auth)}>logout</button>
            </div>

        </div>
    )
}

export default Navbar;