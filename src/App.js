import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from "./routes/Login";
import Home from "./routes/Home";
import Life from "./routes/Life";
import DailyGoals from "./routes/DailyGoals";
import Notes from "./routes/Notes";


function App() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/daily' element={<DailyGoals/>}/>
            <Route path='/life' element={<Life/>}/>
            <Route path='/notes' element={<Notes/>}/>
        </Routes>
    );
}

export default App;