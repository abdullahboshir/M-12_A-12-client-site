import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ImGooglePlus2 } from 'react-icons/im';
import auth from '../../firebase.init';


const Login = () => {

    const location = useLocation();
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    let errorElement;
    if (error) {
        errorElement = <div> <p style={{ color: "red" }}>Error: {error?.message}</p> </div>
    }


    const from = location.state?.from?.pathname || '/';

    useEffect(() =>{
        if(user){
            navigate(from, {replace: true});
        }
    } ,[user, from, navigate])


    const handleLoginBlur = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  lg:flex-row-reverse flex justify-between px-28">
                <div className="text-center lg:text-left w-[50%] text-center flex flex-col justify-center items-center">
                    <div className="h-[70px] mt-10">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <p className="pt-2 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    </div>
                    <img className='w-[400px]  mt-0 ' src="https://i.ibb.co/0mN6whz/Security-On-bro.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handleLoginBlur} id= "login">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-2">
                                <button className="btn bg-teal-600  text-white hover:bg-teal-500 hover:border-transparent mb-2" name="submit">Login</button>

                                <button onClick={() => signInWithGoogle()} className="btn btn-base-500 text-white" name="submit"> <ImGooglePlus2 className="text-18 text-2xl pl-[0] mr-4 text-white text-start"/> Sing in Width Google</button>
                                <p className='text-red-500 text-start'>{errorElement}</p>
                                <Link className='text-start mt-2 hover:underline' to="/signup"><p>Create a new Account</p></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

};

export default Login;