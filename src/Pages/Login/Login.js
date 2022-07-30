import './login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
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


    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }


    const handleLoginBlur = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
    }



    return (
        // <div>
        //     <form className='login-page' onSubmit={handleLoginBlur} id= "login">
        //         <div className='overlay'></div>
        //     <img src='https://i.ibb.co/CMqT9PH/hero-img4.jpg' alt="" />
        //     <div className="login-container">
        //         <div className='login'>
        //             <h2>Login</h2>
        //             <div>
        //                 <div className="social login-social-container">
        //                     < AiOutlineGoogle onClick={() => signInWithGoogle()} className='social-icon login-social' style={{ color: "white", marginBottom: "7px" }} />
        //                     < AiFillGithub onClick={() => signInWithGithub()} className='social-icon login-social' style={{ color: "white", marginBottom: "7px" }} />
        //                     < AiFillFacebook className='social-icon login-social' style={{ color: "white", marginBottom: "7px" }} />
        //                     < AiFillInstagram className='social-icon login-social' style={{ color: "white", marginBottom: "7px" }} />
        //                     <hr style={{ color: "white" }} />
        //                 </div>
        //             </div>

        //             <input  type="email" name='email' placeholder='Email' style={{ marginTop: "0" }} />

        //             <input  type="password" name='password' placeholder='Password' />
        //             <div>

        //              <Link to="#"><p>Forgoten passeord</p></Link>
        //             </div>
        //             <div className='login-btn'>
        //                 <input type="submit" name="submit" value="Login" />
        //                 <p>{errorElement}</p>
        //                 <Link to="/signup"><p>Create a new Account</p></Link>
        //             </div>
        //         </div>
        //     </div>
        // </form>
        // </div>



        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content  lg:flex-row-reverse flex justify-between px-28">
                <div class="text-center lg:text-left w-[50%] text-center flex flex-col justify-center items-center">
                    <div className="h-[70px] mt-10">
                    <h1 class="text-5xl font-bold text-center">Login now!</h1>
                    <p class="pt-2 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    </div>
                    <img className='w-[400px]  mt-0 ' src="https://i.ibb.co/0mN6whz/Security-On-bro.png" alt="" />
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">

                        <form onSubmit={handleLoginBlur} id= "login">

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" class="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" class="input input-bordered" />
                            </div>

                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div class="form-control mt-2">
                                <button class="btn bg-teal-600  text-white hover:bg-teal-500 hover:border-transparent" name="submit">Login</button>
                                <button onClick={() => signInWithGoogle()} class="btn btn-base-500 text-white" name="submit"> <ImGooglePlus2 className="text-18 text-2xl pl-[0] mr-4 text-white text-start"/> Sing in Width Google</button>
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