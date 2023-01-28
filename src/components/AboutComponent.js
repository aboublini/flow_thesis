import React from 'react';
import './AboutComponentStyle.css'
import aboutVideo from '../visual-material/AboutBackround.mp4';

const AboutComponent = () => {
    return (
        <div className="about-container">
            <video autoPlay loop muted id="about-video">
                <source src={aboutVideo} type="video/mp4"/>
            </video>
            <div className="about-content">
                <div className="about-title">
                    <h1>About flow.</h1>
                    <p>The idea behind productivity.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;