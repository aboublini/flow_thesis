import React from 'react';
import './HomeComponentStyle.css'
import homeVideo from '../visual-material/HomeBackround.mp4';
import Logo from "../visual-material/logo.png";

const HomeComponent = () => {
    return (
        <div className="container">
            <video autoPlay loop muted id="video">
                <source src={homeVideo} type="video/mp4"/>
            </video>
            <div className="content">
                <div className="welcome">
                    <img src={Logo} className="img" alt=""/>
                    <p>Your productivity app.</p>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;