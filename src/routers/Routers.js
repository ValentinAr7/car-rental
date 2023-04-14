import React from "react";
import { Routes, Route, Navigate   } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import NotFound from '../pages/NotFound'


const Routers = () => {

    return (
        <Routes>
            <Route path='/' element={Home}> </Route>
            <Route path='/home' element={Home}> </Route>
            <Route path='/about' element={About}> </Route>
            <Route path='/cars' element={CarListing}> </Route>
            <Route path='/cars/:slug' element={CarDetails}> </Route>
            <Route path='*' element={NotFound}> </Route>

        </Routes>
    )
}

export default Routers