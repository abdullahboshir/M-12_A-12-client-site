import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
const navigate = useNavigate()
const [agree, setAgree] = useState(false);
const location = useLocation();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handlesignup = event => {
        event.preventDefault()
        const firstName = event.target.firsName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        createUserWithEmailAndPassword(email, password)
    }

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <div> <p style={{ color: "red" }}>Error: {error?.message}</p> </div>
    }

    return (
        <form action="" onSubmit={handlesignup} className='login-page'>
             <div className='overlay'></div>
             <img src='https://i.ibb.co/CMqT9PH/hero-img4.jpg' alt="" />
            <div className="signup-container">
                <div className='signup'>
                    <h2>Sign Up</h2>
                    <div className='name'>
                        <input className='firsName' type="text" name='firsName' placeholder='First Name' required />
                        <input className='lastName' type="text" name='lastName' placeholder='Last Name' required />
                    </div>
                    <div className='field'>
                        <input type="email" name='email' placeholder='Your Email' required />
                        <input type="password" name='password' placeholder='Your Password' required />
                        <input type="password" name='confirmPassword' placeholder='Confirm Password' required />
                    </div>
                    <div>
                        <input onClick={() => setAgree(!agree)} type="checkbox" required />{
                             <span  className={`ps-2 ${agree? "" : "text-danger"}`}>Accept terms and Conditions</span>
                        }
                    </div>
                   <div className='register-btn'>
                 <input disabled= {!agree} className='signUp-btn' type="submit" value="Sign Up" />
                 <p>{errorElement}</p>
                    <Link to="/login"><p>You have already an account? </p></Link>
                   </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;