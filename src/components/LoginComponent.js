import './LoginComponentStyle.css';
import './VideoStyle.css'
import colourVideo from "../visual-material/LoginBackround.mp4";
import Logo from '../visual-material/logo.png';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const LoginComponent = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        if (username === "aboublini" && password === "123") {
            setUsername('');
            setPassword('');
            navigate("/home");
        } else {
            alert("The credentials you provided are invalid. Please try again.");
            setUsername('');
            setPassword('');
        }
    }

    const ResetPassword = () => {
        let message = prompt("Please enter your registered mail:", "yourmail@example.gr");

        if (message !== "" && message != null && message !== "yourmail@example.gr") {
            alert("An email has been sent to " + message + " with instructions on how to recover your password.");
        } else if (message == null) {
            // Do nothing basically
        } else {
            alert("Please insert a valid email address or press Cancel.");
            ResetPassword();
        }
    }

    return (
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={colourVideo} type="video/mp4"/>
            </video>
            <div className="content">
                <form onSubmit={handleLogin} className="login-form">
                    <img className="login-logo" src={Logo} alt=""/>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required/>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    <button className="btn">Login</button>
                    <p>Forgot your password? <u onClick={ResetPassword}>Reset password</u></p>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;
