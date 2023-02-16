import React from 'react';
import './DailyComponentStyle.css'
import dailyImage from '../visual-material/DailyBackround.jpg';

const DailyComponent = () => {
    
    return (
        <div className="daily-container">
            {/*<video autoPlay loop muted id="daily-video">*/}
            {/*    <source src={dailyVideo} type="image/jpg"/>*/}
            {/*</video>*/}

            <img src={dailyImage} id="daily-image" alt="daily-background"/>

            <div className="daily-content">
                <div className="daily-title">
                    <h1>What is your main goal for today?</h1>
                    <p>Stress less. Organize more.</p>
                </div>
            </div>
        </div>
    );
};

export default DailyComponent;