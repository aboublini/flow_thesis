import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from "./routes/Login";
import Home from "./routes/Home";


function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    );
}

export default App;