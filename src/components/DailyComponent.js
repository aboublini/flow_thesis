import React from 'react';
import './DailyComponentStyle.css'
import dailyVideo from '../visual-material/DailyBackround.mp4';

const DailyComponent = () => {
    return (
        <div className="daily-container">
            <video autoPlay loop muted id="daily-video">
                <source src={dailyVideo} type="video/mp4"/>
            </video>
            <div className="daily-content">
                <div className="daily-title">
                    <h1>What is your main goal for today?</h1>
                    <p>Stress less. Organize more:)</p>
                </div>
            </div>
        </div>
    );
};

export default DailyComponent;