import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Shared/Loading/Loading';
import { FcBusinessman } from 'react-icons/fc';
import UpdateModal from '../../Components/Dashboard-Sections/UpdateModal';
import auth from '../../firebase.init';

const ProfileInfo = ({ location, education, link, proUser }) => {
    const [user, loading, error] = useAuthState(auth);

    const [updateProfile, setUpdateProfile] = useState({})
    const [matchUpdateProfile, setmatchUpdateProfile] = useState({})

    const updateUser = {
        updateEducation: education,
        updateLocation: location,
        socialLink: link,
        UpdateUrl: '',
        profileUser: user.email
    }


    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user.email}`)
            .then(res => res.json())
            .then(data => setUpdateProfile(data))
    }, [updateProfile])



    useEffect(() => {
        fetch('', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json)
            .then(data => setmatchUpdateProfile(data))
    }, [])



    return (
        <div>
            <div className='text-start flex justify-between items-center w-[800px] mt-16'>
                <FcBusinessman className='text-[300px] rounded-full' />
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

                    <label for="update-modal" class="btn modal-button bg-slate-700 mt-4  text-white hover:bg-secondary hover:border-transparent">Update Your Profile</label>
                    <UpdateModal />
                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;