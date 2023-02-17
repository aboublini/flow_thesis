import React from 'react';
import './AboutInfoComponentStyle.css'
import {Link} from "react-router-dom";
import unipi from '../visual-material/unipi-logo.png';
import tools from '../visual-material/tools-image.png';

const AboutInfoComponent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>What is flow?</h1>
                <p>I am currently studying Computer Science at the department of
                    Informatics of University of Piraeus.
                    I have taken classes relative to Web Development, AI,
                    Design Patterns, UI/UX, Data Structures, Algorithms, Cryptography etc.
                    My academic interests include web and desktop frontend technologies,
                    cryptographic algorithms, cloud design patterns and Information Systems.
                </p>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className='image-stack top'>
                        <img src={tools} className="img-logo" alt=""/>
                    </div>
                </div>
            </div>
            <div className="left">
                <h1>Bachelor Thesis</h1>
                <p>I am currently studying Computer Science at the department of
                    Informatics of University of Piraeus.
                    I have taken classes relative to Web Development, AI,
                    Design Patterns, UI/UX, Data Structures, Algorithms, Cryptography etc.
                    My academic interests include web and desktop frontend technologies,
                    cryptographic algorithms, cloud design patterns and Information Systems.
                </p>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className='image-stack top'>
                        <Link target="_blank" to={"//www.cs.unipi.gr/index.php?lang=el"}> <img src={unipi} className="img-logo" alt=""/> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInfoComponent;