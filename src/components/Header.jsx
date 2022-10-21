import React from "react";
import './Header.css'
import netflixLogo from '../assets/netflix-logo.png'
import UserImg from '../assets/img-user.png'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={netflixLogo} alt="" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={UserImg} alt="Usúario" />
                </a>
            </div>
        </header>
    )
}