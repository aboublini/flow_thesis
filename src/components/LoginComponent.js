import './LoginComponentStyle.css';
import './VideoStyle.css'
import colourVideo from "../visual-material/LoginBackround.mp4";
import Logo from '../visual-material/logo.png';
//import {Link} from "react-router-dom";

const LoginComponent = () => {
    const handleLogin = user => {

        user.preventDefault();

        // Check if user info is correct
        if (user.target.username.value === "aboublini" && user.target.password.value === "password") {
            alert("Successful login!");
            // Clear inputs
            user.target.username.value = "";
            user.target.password.value = "";
        } else {
            alert("The credentials you provided are invalid. Please try again.");
            // Clear inputs
            user.target.username.value = "";
            user.target.password.value = "";
        }
    }

    const ResetPassword = () => {
        let message = prompt("Please enter your registered mail:", "yourmail@example.gr");

        // If inserts a mail something and presses okay
        if (message !== "" && message != null && message !== "yourmail@example.gr") {

            // If the provided email address is correct
            alert("An email has been sent to " + message + " with instructions on how to recover your password.");

        } else if (message == null) { // If user presses cancel

            // Do nothing

        } else {
            // If the provided email address is wrong
            alert("Please insert a valid email address or press Cancel.");
            ResetPassword();

        }
    }

    // Render the login form
    return (
        <div className="hero">
            <video autoPlay loop muted id="video">
                <source src={colourVideo} type="video/mp4"/>
            </video>
            <div className="content">
                <form onSubmit={handleLogin}>
                    <img src={Logo} className="img" alt=""/>
                    <label>Username</label>
                    <input type="text" name="username" required/>
                    <label>Password</label>
                    <input type="password" name="password" required/>
                    <button className="btn">Login</button>
                    <p>Forgot your password? <u onClick={ResetPassword}>Reset my password</u></p>
                </form>
            </div>
        </div>
    );

}

export default LoginComponent;