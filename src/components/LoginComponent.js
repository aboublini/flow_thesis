//import React, {useState} from 'react';
import './LoginComponentStyle.css';
import './VideoStyle.css'
import colourVideo from "../visual-material/LoginBackround.mp4";
//import {Link} from "react-router-dom";

const LoginComponent = () => {
    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);
    //
    // // User Login info
    // const database = [
    //     {
    //         username: "aboublini",
    //         password: "pass"
    //     },
    //     {
    //         username: "user",
    //         password: "pass2"
    //     }
    // ];
    //
    // const error = {
    //     incorrectCredentials: "The credentials you provided are invalid.",
    // };
    //
    // const handleLogin = (event) => {
    //     //Prevent page reload
    //     event.preventDefault();
    //
    //     const {uname, pass} = document.forms[0];
    //
    //     // Find user login info
    //     const userData = database.find((user) => user.username === uname.value);
    //
    //     // Compare user info
    //     if (userData) {
    //         if ((userData.password !== pass.value) || (userData.username !== uname.value)) {
    //             // Invalid password
    //             setErrorMessages({ name: "incorrectCredentials", message: error.incorrectCredentials });
    //         } else {
    //             setIsSubmitted(true);
    //         }
    //     }
    // };
    //
    // const renderErrorMessage = (name) =>
    //     name === errorMessages.name && (
    //         <div className="error">{errorMessages.message}</div>
    //     );

    return (
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={colourVideo} type="video/mp4"/>
            </video>
            <div className="content">
                <form>
                    <h1>Login</h1>
                    <label>Username</label>
                    <input type="text" name="uname" required></input>
                    <label>Password</label>
                    <input type="password" name="pass" required></input>
                    <button className="btn">Login</button>
                    <p>Don't have an account? Sign up</p>
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;