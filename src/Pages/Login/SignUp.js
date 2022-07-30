import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ImGooglePlus2 } from 'react-icons/im';

const SignUp = () => {
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false);
    const location = useLocation();
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handlesignup = event => {
        event.preventDefault()
        const name = event.target.name.value;
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
        // <form action="" onSubmit={handlesignup} className='login-page'>
        //      <div className='overlay'></div>
        //      <img src='https://i.ibb.co/CMqT9PH/hero-img4.jpg' alt="" />
        //     <div className="signup-container">
        //         <div className='signup'>
        //             <h2>Sign Up</h2>
        //             <div className='name'>
        //                 <input className='firsName' type="text" name='name' placeholder='First Name' required />
        //                 <input className='lastName' type="text" name='lastName' placeholder='Last Name' required />
        //             </div>
        //             <div className='field'>
        //                 <input type="email" name='email' placeholder='Your Email' required />
        //                 <input type="password" name='password' placeholder='Your Password' required />
        //                 <input type="password" name='confirmPassword' placeholder='Confirm Password' required />
        //             </div>
        //             <div>
        //                 <input onClick={() => setAgree(!agree)} type="checkbox" required />{
        //                      <span  className={`ps-2 ${agree? "" : "text-danger"}`}>Accept terms and Conditions</span>
        //                 }
        //             </div>
        //            <div className='register-btn'>
        //          <input disabled= {!agree} className='signUp-btn' type="submit" value="Sign Up" />
        //          <p>{errorElement}</p>
        //             <Link to="/login"><p>You have already an account? </p></Link>
        //            </div>
        //         </div>
        //     </div>
        // </form>




        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content  lg:flex-row-reverse flex justify-between px-28">
                <div class="text-center lg:text-left w-[50%] text-center flex flex-col justify-center items-center">
                    <div className="h-[70px] mt-6">
                        <h1 class="text-5xl font-bold text-center">Sign Up Now!</h1>
                        <p class="pt-2 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    </div>
                    <img className='w-[400px]  mt-0 ' src="https://i.ibb.co/2FSTm4z/Developer-activity-bro.png" alt="" />
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">

                        <form onSubmit={handlesignup} id="login">

                            <div class="form-control">
                                <input type="text" name='name' placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control my-2">
                                <input type="email" name='email' placeholder="email" class="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <input name='password' type="password" placeholder="password" class="input input-bordered" />
                            </div>

                            <div className="form-control mt-2">
                                <input name='confirmPassword' type="password" placeholder="Confirm Password" class="input input-bordered" />
                            </div>

                            <div>
                                <input onClick={() => setAgree(!agree)} type="checkbox" required className='mr-2' />
                                {
                                    <span className={` mr-16 mt-2 ${agree ? "" : "text-red-500"}`}>Accept terms and Conditions</span>
                                }
                            </div>

                            <div class="form-control mt-2">
                                <button onClick={() => signInWithGoogle()} disabled={!agree} class="btn bg-teal-600  text-white hover:bg-teal-500 hover:border-transparent mb-2" name="submit">Sign Up</button>

                                <button class="btn btn-base-500 text-white" name="submit"> <ImGooglePlus2 className="text-18 text-2xl pl-[0] mr-4 text-white text-start" /> Sing in Width Google</button>

                                <p className='text-red-500 text-start'>{errorElement}</p>
                                <Link className='text-start mt-2 hover:underline' to="/login"><p>Already have an Account</p></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;