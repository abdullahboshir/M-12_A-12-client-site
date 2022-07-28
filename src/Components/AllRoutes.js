import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp';
import Navbar from './Header/Navbar';
import RequireAuth from './Login/RequireAuth';
import BuyNow from './Purchase/BuyNow';
import Footer from './Shared/Footer/Footer';
import NotFount from './Shared/NotFount/NotFount';

const AllRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='signUp' element={<SignUp />} />
                <Route path='dashBoart' element={<Dashboard />} />
                <Route path='buyNow/:partsId' element={
                <RequireAuth>
                    <BuyNow/>
                </RequireAuth>
                } />
                <Route path='*' element={<NotFount />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default AllRoutes;