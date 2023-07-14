import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Whitening from './pages/whitening/Whitening';
import Home from './pages/home/Home';
import Appointments from './pages/appointments/Appointments';
import Cavities from './pages/cavities/Cavities';
import Navigation from './components/navigation/Navigation';

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tanden-bleken" element={<Whitening/>}/>
                <Route path="/afspraken" element={<Appointments/>} />
                <Route path="/gaatjes" element={<Cavities/>}/>
            </Routes>
        </>
    );
}

export default App;