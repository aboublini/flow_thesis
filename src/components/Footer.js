import React from 'react';
import './FooterStyle.css';
import {FaGithub} from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <HiLocationMarker size={30} style={{color: '#000', marginRight: '2rem'}}/>
                        <div>
                            <Link target="_blank" to={"//goo.gl/maps/B4wBubyEPW2Cc6vQ9"}>
                                <p>80, M. Karaoli & A. Dimitriou St., 18534 Piraeus</p>
                                <h4>University Of Piraeus</h4>
                            </Link>
                        </div>
                    </div>
                    <div className="github">
                        <Link target="_blank" to={"//github.com/aboublini"}>
                            <h4><FaGithub size={25} style={{color: '#000', marginRight: '2rem'}}/> Anastasia Boublini (aboublini)</h4>
                        </Link>
                    </div>
                    <div className="email">
                        <a href={"mailto:aboublini@gmail.com"}>
                            <h4><SiGmail size={25} style={{color: '#000', marginRight: '2rem'}}/> aboublini@gmail.com</h4>
                        </a>
                    </div>
                    <div className="right">
                        <h4>About me</h4>
                        <p>Hi my name is Anastasia and welcome to my portfolio. I
                            am currently an undergraduate computer science student
                            at the University of Piraeus. I am interested in frontend technologies
                            and UI/UX technologies.</p>
                        <div className="social">
                            <Link target="_blank" to={"//goo.gl/maps/B4wBubyEPW2Cc6vQ9"}>
                                <HiLocationMarker size={30} style={{color: '#000', marginRight: '1rem'}}/>
                            </Link>
                            <a href={"mailto:aboublini@gmail.com"}>
                                <SiGmail size={30} style={{color: '#000', marginRight: '1rem'}}/>
                            </a>
                            <Link target="_blank" to={"//github.com/aboublini"}>
                                <FaGithub size={30} style={{color: '#000', marginRight: '1rem'}}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;