import React from "react";
import foto from '../img/001.png'
const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user"/>
            </div>
            <div className="userChat">
                <img src={foto} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search;