import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ImGooglePlus2 } from 'react-icons/im';
import useToken from '../../hooks/useToken';
import Loading from '../../Components/Shared/Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false);
    const location = useLocation();
 

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(user)

    const [token] = useToken(user || gUser)
    console.log(token)
    const from = location.state?.from?.pathname || '/';

    useEffect(() =>{
        if(token){
            navigate(from, {replace: true});
        }
    } ,[token, from, navigate])


    const handlesignup = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        createUserWithEmailAndPassword(email, password)
    }


 

    if(gLoading || loading){
        return <Loading/>
    }

    let errorElement;
    if (error) {
        errorElement = <div> <p style={{ color: "red" }}>Error: {error?.message}</p> </div>
    }

   

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  lg:flex-row-reverse flex justify-between px-28">
                <div className="text-center lg:text-left w-[50%] text-center flex flex-col justify-center items-center">
                    <div className="h-[70px] mt-6">
                        <h1 className="text-5xl font-bold text-center">Sign Up Now!</h1>
                        <p className="pt-2 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    </div>
                    <img className='w-[400px]  mt-0 ' src="https://i.ibb.co/2FSTm4z/Developer-activity-bro.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form onSubmit={handlesignup} id="login">

                            <div className="form-control">
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control my-2">
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-2">
                                <input name='confirmPassword' type="password" placeholder="Confirm Password" className="input input-bordered" />
                            </div>

                            <div>
                                <input onClick={() => setAgree(!agree)} type="checkbox" required className='mr-2' />
                                {
                                    <span className={` mr-16 mt-2 ${agree ? "" : "text-red-500"}`}>Accept terms and Conditions</span>
                                }
                            </div>

                            <div className="form-control mt-2">
                                <button disabled={!agree} className="btn bg-teal-600  text-white hover:bg-teal-500 hover:border-transparent mb-2" name="submit">Sign Up</button>

                                <button onClick={() => signInWithGoogle()} className="btn btn-base-500 text-white" name="submit"> <ImGooglePlus2 className="text-18 text-2xl pl-[0] mr-4 text-white text-start" /> Sing in Width Google</button>

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