import React from 'react';
import './LifeComponentStyle.css'
import lifeImage from '../visual-material/LifeBackround.jpg';

const LifeComponent = () => {
    return (
        <div className="life-container">

            <img src={lifeImage} id="life-image" alt="life-background"/>

            <div className="life-content">
                <div className="life-title">
                    <h1>Flow's budget manager.</h1>
                    <p>Simple, easy and responsible.</p>
                </div>
            </div>
        </div>
    );
};

export default LifeComponent;