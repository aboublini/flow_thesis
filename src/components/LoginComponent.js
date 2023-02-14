import './LoginComponentStyle.css';
import './VideoStyle.css'
import colourVideo from "../visual-material/LoginBackround.mp4";
import Logo from '../visual-material/logo.png';
import { useNavigate } from "react-router-dom";


const LoginComponent = () => {

    // Navigation handling (to homepage in our case)
    const navigate = useNavigate();

    const handleLogin = user => {

        user.preventDefault();

        // Check if user info is correct
        if (user.target.username.value === "aboublini" && user.target.password.value === "123") {
            // Clear inputs
            user.target.username.value = "";
            user.target.password.value = "";

            // Redirect to homepage
            navigate("/home");
        } else {
            alert("The credentials you provided are invalid. Please try again.");
            // Clear inputs
            user.target.username.value = "";
            user.target.password.value = "";
        }
    }

    // Function that "resets" password (ideally)
    const ResetPassword = () => {
        let message = prompt("Please enter your registered mail:", "yourmail@example.gr");

        // Check mail inserted
        if (message !== "" && message != null && message !== "yourmail@example.gr") {
            // If the provided email address is correct
            alert("An email has been sent to " + message + " with instructions on how to recover your password.");
        } else if (message == null) { // If user presses cancel
            // Do nothing basically
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
                <form onSubmit={handleLogin} className="login-form">
                    <img className="login-logo" src={Logo} alt=""/>
                    <label>Username</label>
                    <input type="text" name="username" required/>
                    <label>Password</label>
                    <input type="password" name="password" required/>
                    <button className="btn">Login</button>
                    <p>Forgot your password? <u onClick={ResetPassword}>Reset password</u></p>
                </form>
            </div>
        </div>
    );

}

export default LoginComponent;