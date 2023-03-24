import React, {useState} from 'react';
import './NavbarStyle.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import Logo from "../visual-material/logo.png";


const Navbar = () => {
    // Set nav
    const [Click, setClick] = useState(false);
    const handleClick = () => setClick(!Click);

    // Change navbar color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to="/home"><img src={Logo} className="nav-logo" alt=""/></Link>
            <ul className={Click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/daily">Daily Goals</Link>
                </li>
                <li>
                    <Link to="/life">Budget Manager</Link>
                </li>
                <li>
                    <Link to="/notes">Notes</Link>
                </li>
                <li className="dropdown">
                    <button className="dropbtn">More</button>
                    <div className="dropdown-content">
                        <Link to="/help">FAQs</Link>
                        <Link to="/about">About Flow</Link>
                        <Link to="/">Logout</Link>
                    </div>
                </li>
                <li className="burger">
                    <Link to="/help">FAQs</Link>
                </li>
                <li className="burger">
                    <Link to="/about">About Flow</Link>
                </li>
                <li className="burger">
                    <Link to="/">Logout</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {Click ? (<FaTimes size={20} style={{color: '#000'}}/>) : (<FaBars size={20} style={{color: '#000'}}/>)}


            </div>
        </div>
    );
};

export default Navbar;