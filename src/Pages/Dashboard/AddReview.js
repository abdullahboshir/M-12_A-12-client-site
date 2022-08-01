import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const possibleRate = [1,2,3,4,5]
    const [comment , setComment] = useState('')
    const [selectedRate , setSelectedRate] = useState(1);

   const localDate =  new Date().toLocaleDateString();


    const selectRate = selectedRate+".00/5.00";
    const reviewPost = {
        name : user?.displayName,
        email : user?.email,
        rating : selectRate,
        body : comment,
        img :user?.photoURL,
        date: localDate

    }

    const handleSubmitReview =async (e)=>{
        e.preventDefault()
       await axios.post(`http://localhost:5000/reviews`,reviewPost )
        .then(res => (res))
        setComment('')
        swal("add to review success");

        setSelectedRate(1)

    }


    return (
        <div className='flex justify-center items-center mt-20 px-5 w-[800px]'>
            <div className='w-full'>
                <span className='text-primary text-2xl mb-3 inline-block'>Give a Review </span>
               <div className='flex my-4'>

                <div className="rating">
                    {
                        possibleRate.map(rate =>  <input onClick={()=> setSelectedRate(rate)}  value='2'  type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />)
                    }
               </div>

               </div>
                <form onSubmit={handleSubmitReview}>
                    <textarea onChange={(e)=> setComment(e.target.value)} value={comment} className="textarea border-2 mb-4  w-full border-primary" placeholder="Bio"></textarea>
                    <button className='bg-secondary text-white font-bold px-4 py-2 rounded-md'>Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;