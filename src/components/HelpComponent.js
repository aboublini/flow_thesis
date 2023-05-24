import React from 'react';
import './HelpComponentStyle.css'
import helpVideo from '../visual-material/HelpBackround.mp4';
import manual from '../visual-material/UserManual.pdf';

const HelpComponent = () => {

    return (
        <div className="help-container">
            <video autoPlay loop muted id="help-video">
                <source src={helpVideo} type="video/mp4"/>
            </video>
            <div className="help-content">
                <div className="help-title">
                    <h1>Having trouble with Flow?</h1>
                    <p>We've got you covered. Download our user manual.</p>
                    <br/><br/>

                    <a href={manual} target="_blank"
                       rel="noreferrer">
                        <button className="btn-help">Download User Manual</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HelpComponent;