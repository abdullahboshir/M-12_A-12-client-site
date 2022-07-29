import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Shared/Loading/Loading';
import auth from '../../firebase.init';
import { FcBusinessman } from 'react-icons/fc';
import UpdateModal from '../../Components/Dashboard-Sections/UpdateModal';



const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [pic, setPic] = useState('');
    const [education, setEducation] = useState('Education Qualification');
    const [location, setLocation] = useState('Your Location');
    const [link, setLink] = useState('Social Link');

    if(error){
        return <Loading/>
    }

    const profileInfo = {
        name: user?.displayName,
        email: user?.email,
        pic: link,
        education: education,
        location: location,
        socialLink: link
    }


    return (
        <div className='text-start flex justify-between items-center w-[800px] mt-16'>
            <FcBusinessman className='text-[300px] rounded-full'/>
           <div>
           <h1 className='text-4xl font-bold mb-6'>Profile Informarion</h1>
            <h2 className='text-2xl font-bold '>Name:</h2>
            <p>{user && user?.displayName}</p>

            <h2 className='text-2xl font-bold'>Email:</h2>
            <p>{user && user?.email}</p>

            <h2 className='text-2xl font-bold'>Education:</h2>
            <p>{education}</p>

            <h2 className='text-2xl font-bold'>Location:</h2>
            <p>{location}</p>

            <h2 className='text-2xl font-bold'>Social Link:</h2>
            <p>{link}</p>

            <label for="update-modal" class="btn modal-button bg-slate-700 py-0 h-0 text-white hover:bg-secondary hover:border-transparent">Update Your Profile</label>
            <UpdateModal/>
           </div>

        </div>
    );
};

export default MyProfile;