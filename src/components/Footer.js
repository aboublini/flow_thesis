import React from 'react';
import './FooterStyle.css';
import {FaGithub} from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import {Link} from "react-router-dom";
import Logo from "../visual-material/logo.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <img src={Logo} className="footer-logo" alt=""/>
                    <div className="right">
                        <p>
                            Hello, my name is Anastasia and I would like to introduce you to Flow.
                            I am an undergraduate computer science student at the University of
                            Piraeus and Flow is a key component of my diploma thesis titled
                            "Gendered UI/UX: A Comparative Study of Gender-Specific and
                            Gender-Neutral Web Design".
                        </p>
                        <br/><br/>
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