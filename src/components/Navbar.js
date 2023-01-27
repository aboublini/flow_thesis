import React, {useState} from 'react';
import './NavbarStyle.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import Logo from "../visual-material/logo.png";


const Navbar = () => {
    const [Click, setClick] = useState(false);
    const handleClick = () => setClick(!Click);

    return (
        <div className="header">
            <Link to="/home"><img src={Logo} className="nav-logo" alt=""/></Link>
            <ul className={Click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/daily">Daily Goals</Link>
                </li>
                <li>
                    <Link to="/life">Manage Life</Link>
                </li>
                <li>
                    <Link to="/notes">Notes</Link>
                </li>
                <li>
                    <Link to="">About Flow</Link>
                </li>
                <li>
                    <Link to="">Help</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {Click ? (<FaTimes size={20} style={{color: '#000'}}/>) : (<FaBars size={20} style={{color: '#000'}}/>)}


            </div>
        </div>
    );
};

export default Navbar;