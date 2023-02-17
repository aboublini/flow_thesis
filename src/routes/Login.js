import React from 'react';
import LoginComponent from "../components/LoginComponent";
import {ScrollToTop} from "../components/ScrollToTop";

const Login = () => {
    ScrollToTop(0,0);
    return (
        <div>
            <LoginComponent/>
        </div>
    );
};

export default Login;