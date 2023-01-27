import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from "./routes/Login";
import Home from "./routes/Home";
import Life from "./routes/Life";
import DailyGoals from "./routes/DailyGoals";


function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/daily' element={<DailyGoals/>}/>
            <Route path='/life' element={<Life/>}/>
        </Routes>
    );
}

export default App;