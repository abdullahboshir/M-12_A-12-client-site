import React, { useEffect, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';

const UpdateModal = ({setModalSwitch}) => {

    const [user, loading] = useAuthState(auth);


    const handleUpdateUser =  (e) => {
        e.preventDefault();
        const photoUrl = e.target.picture.value;
        const education = e.target.education.value;
        const location = e.target.location.value;
        const socialLink = e.target.socialLink.value;

        const updateUserInfo = {
            updateEducation: education,
            updateLocation: location,
            socialLink: socialLink,
            UpdateUrl: photoUrl,
            profileUser: user.email
        }
  
        try{
        fetch(`http://localhost:5000/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUserInfo)
        })
            .then(res => res.json)
            .then(data => {
                swal("Success update your Profile")
                setModalSwitch(false)
            })
        }
        catch(error){
            console.log(error)
        } 
    };



    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold mb-6">Confirm your order</h3>

                    <div className='flex-col'>

                        <form onSubmit={handleUpdateUser}>
                            <input type="text" disabled value={user?.displayName} placeholder="Type here" className="input input-bordered input-accent w-full max-w-sm text-base" />

                            <input type="text" disabled value={user?.email} placeholder="Type here" className="input input-bordered input-accent w-full max-w-sm my-2 text-base" />

                            <input name='picture' type="text" required
                                placeholder='Profile Image URL' className="input input-bordered input-accent w-full max-w-sm" />

                            <input name='education' required type="text"
                                placeholder='Education Qualification' className="input input-bordered input-accent w-full max-w-sm my-2" />

                            <input name='location'required type="text" placeholder="Your Location" className="input input-bordered input-accent w-full max-w-sm " />
                            

                            <input name='socialLink' required type="text" placeholder="Social Link" className="input input-bordered input-accent w-full max-w-sm my-2" />
                           

                            <button className="btn btn-active btn-secondary text-white bg-slate-700 hover:bg-accent hover:border-transparent flex-start flex mt-4  w-40 ml-10">Update</button>
                           
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateModal;