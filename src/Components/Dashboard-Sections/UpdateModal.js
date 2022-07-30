import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';

const UpdateModal = () => {

    const [user, loading, error] = useAuthState(auth);
    const [UpdateUrl, setUpdateUrl] = useState('')
    const [updateEducation, setUpdateEducation] = useState('')
    const [updateLocation, setUpdateLocation] = useState('')
    const [socialLink, setSocialLink] = useState('')


    useEffect(() => {
        setUpdateEducation(updateEducation);
        setUpdateLocation(updateLocation);
        setSocialLink(socialLink);
        setUpdateUrl(UpdateUrl);
    }, [updateEducation, updateLocation, socialLink, UpdateUrl])


    const handleUpdateUser =  (e) => {
        e.preventDefault()

        const updateUserInfo = {
            updateEducation,
            updateLocation,
            socialLink,
            UpdateUrl,
            profileUser: user.email
        }



        try{ 
            fetch('http://localhost:5000/profile', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                },
                body: JSON.stringify(updateUserInfo)
            })
            .then(res => res.json())
            .then(data => {

                swal("Success update your Profile")
            })
        }
        catch(error){
            console.log(error)
        }

        try{
            fetch('http://localhost:5000/profile')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            
        } catch(error){
            console.log(error)
        }

       ;
    }



    return (
        <div>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-2xl font-bold mb-6">Confirm your order</h3>

                    <div className='flex-col'>

                        <form onSubmit={handleUpdateUser}>
                            <input type="text" disabled value={user?.displayName} placeholder="Type here" class="input input-bordered input-accent w-full max-w-sm text-base" />

                            <input type="text" disabled value={user?.email} placeholder="Type here" class="input input-bordered input-accent w-full max-w-sm my-2 text-base" />

                            <input onChange={(e) => setUpdateUrl(e.target.value)} type="text" required
                                placeholder='Profile Image URL' class="input input-bordered input-accent w-full max-w-sm" />

                            <input onChange={(e => setUpdateEducation(e.target.value))} required type="text"
                                placeholder='Education Qualification' class="input input-bordered input-accent w-full max-w-sm my-2" />

                            <input onChange={(e => setUpdateLocation(e.target.value))} required type="text" placeholder="Your Location" class="input input-bordered input-accent w-full max-w-sm " />
                            

                            <input onChange={(e => setSocialLink(e.target.value))} required type="text" placeholder="Social Link" class="input input-bordered input-accent w-full max-w-sm my-2" />
                           

                            <button class="btn btn-active btn-secondary text-white bg-slate-700 hover:bg-accent hover:border-transparent flex-start flex mt-4  w-40 ">Purchase</button>
                           
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateModal;