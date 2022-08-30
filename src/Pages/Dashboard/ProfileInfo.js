import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Shared/Loading/Loading';
import { FcBusinessman } from 'react-icons/fc';
import auth from '../../firebase.init';

const ProfileInfo = ({ setModalSwitch }) => {
    const [user, loading] = useAuthState(auth);
    const [profileUpdate, setProfileUpdate] = useState({});
    const {updateEducation, updateLocation, socialLink } = profileUpdate;

    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setProfileUpdate(data))
    }, [user.email, profileUpdate]);

    return (
        <div>
            <div className='text-start flex justify-between items-center w-[800px] mt-16'>
            <div className='w-[300px]'>
            { profileUpdate.UpdateUrl? <img src={profileUpdate.UpdateUrl} alt="" /> : <FcBusinessman className='text-[300px] rounded-full' />}
            </div>
                <div>
                    <h1 className='text-4xl font-bold mb-6'>Profile Informarion</h1>
                    <h2 className='text-2xl font-bold '>Name:</h2>
                    <p>{user && user?.displayName}</p>

                    <h2 className='text-2xl font-bold'>Email:</h2>
                    <p>{user && user?.email}</p>

                    <h2 className='text-2xl font-bold'>Education:</h2>
                    <p>{updateEducation? updateEducation : 'Education Qualification'}</p>

                    <h2 className='text-2xl font-bold'>Location:</h2>
                    <p>{updateLocation? updateLocation : 'Your Location'}</p>

                    <h2 className='text-2xl font-bold'>Social Link:</h2>
                    <p>{socialLink? socialLink : 'Social Link'}</p>

                    <label onClick={() => setModalSwitch(true)} htmlFor="update-modal" className="btn modal-button bg-slate-700 mt-4  text-white hover:bg-secondary hover:border-transparent">Update Your Profile</label>
                   
                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;