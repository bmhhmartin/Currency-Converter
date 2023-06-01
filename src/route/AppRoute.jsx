import React from 'react';
import {Routes,Route} from "react-router-dom";
import Homepage from '../pages/HomePage';

const Approute = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    );
}

export default Approute;
