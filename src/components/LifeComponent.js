import React from 'react';
import './LifeComponentStyle.css'
import lifeVideo from '../visual-material/LifeBackround.mp4';

const LifeComponent = () => {
    return (
        <div className="life-container">
            <video autoPlay loop muted id="life-video">
                <source src={lifeVideo} type="video/mp4"/>
            </video>
            <div className="life-content">
                <div className="life-title">
                    <h1>Life is different with flow.</h1>
                    <p>Manage your money. Manage your workout.</p>
                </div>
            </div>
        </div>
    );
};

export default LifeComponent;