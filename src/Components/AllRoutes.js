import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutMe from '../Pages/About Me/AboutMe';
import Blogs from '../Pages/Blogs/Blogs';
import AddProduct from '../Pages/Dashboard/AddProduct';
import AddReview from '../Pages/Dashboard/AddReview';
import Allusers from '../Pages/Dashboard/Allusers';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ManageProduct from '../Pages/Dashboard/ManageProduct';
import MyOrder from '../Pages/Dashboard/MyOrder';
import MyProfile from '../Pages/Dashboard/MyProfile';
import Payment from '../Pages/Dashboard/Payment';
import ProfileInfo from '../Pages/Dashboard/ProfileInfo';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import RequireAdmin from '../Pages/Login/RequireAdmin';
import RequireAuth from '../Pages/Login/RequireAuth';
import SignUp from '../Pages/Login/SignUp';
import Navbar from './Header/Navbar';
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
                <Route path='blogs' element={<Blogs />} />
                <Route path='aboutMe' element={<AboutMe />} />

                <Route path='dashBoard' element={<RequireAuth><Dashboard /></RequireAuth>}>
                    <Route index element={
                        <MyProfile />
                    } />

                    <Route path='profileInfo/:profileUser' element={
                        <ProfileInfo />
                    } />

                    <Route path='myOrder' element={
                        <MyOrder />
                    } />

                    <Route path='addReview' element={
                        <AddReview />
                    } />

                    <Route path='AllUsers' element={
                        <Allusers />
                    } />

                    <Route path='addProduct' element={
                        <AddProduct />
                    } />

                    <Route path='manageProduct' element={
                        <ManageProduct />
                    } />

                    <Route path='payment/:paymentId' element={
                        <Payment />
                    } />
                </Route>

                <Route path='buyNow/:partsId' element={
                    <RequireAuth>
                        <BuyNow />
                    </RequireAuth>
                } />


                <Route path='*' element={<NotFount />} />

            </Routes>
            <Footer />
        </div>
    );
};

export default AllRoutes;