import React from 'react';
import { Routes, Route } from "react-router-dom";
import AboutMe from '../Pages/About Me/AboutMe';
import MakeAdmin from '../Pages/Admin Panel/MakeAdmin';
import Blogs from '../Pages/Blogs/Blogs';
import AddProduct from '../Pages/Dashboard/AddProduct';
import AddReview from '../Pages/Dashboard/AddReview';
import Allusers from '../Pages/Dashboard/Allusers';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ManageProduct from '../Pages/Dashboard/ManageProduct';
import MyOrder from '../Pages/Dashboard/MyOrder';
import MyProfile from '../Pages/Dashboard/MyProfile';
import ProfileInfo from '../Pages/Dashboard/ProfileInfo';
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
                <Route path='blogs' element={<Blogs />} />
                <Route path='aboutMe' element={<AboutMe />} />

                <Route path='dashBoard' element={<Dashboard />}>
                    <Route index element={
                        <RequireAuth>
                            <MyProfile />
                        </RequireAuth>
                    } />
                    <Route path='profileInfo/:profileUser' element={
                        <RequireAuth>
                            <ProfileInfo />
                        </RequireAuth>
                    } />
                    <Route path='myOrder' element={
                        <RequireAuth>
                            <MyOrder />
                        </RequireAuth>
                    } />
                    <Route path='addReview' element={
                        <RequireAuth>
                            <AddReview />
                        </RequireAuth>
                    } />


                    <Route path='AllUsers' element={
                        <RequireAuth>
                            <Allusers />
                        </RequireAuth>
                    } />

                    <Route path='addProduct' element={
                        <RequireAuth>
                            <AddProduct />
                        </RequireAuth>
                    } />

                    <Route path='manageProduct' element={
                        <RequireAuth>
                            <ManageProduct />
                        </RequireAuth>
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