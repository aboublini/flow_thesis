import React from 'react';
import './HelpComponentStyle.css'
import helpVideo from '../visual-material/HelpBackround.mp4';

const HelpComponent = () => {
    return (
        <div className="help-container">
            <video autoPlay loop muted id="help-video">
                <source src={helpVideo} type="video/mp4"/>
            </video>
            <div className="help-content">
                <div className="help-title">
                    <h1>Having trouble with flow?</h1>
                    <p>We've got you covered.</p>
                </div>
            </div>
        </div>
    );
};

export default HelpComponent;