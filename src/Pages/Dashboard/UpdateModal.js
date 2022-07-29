import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UpdateModal = () => {

    const [user, loading, error] = useAuthState(auth);
    const [UpdateUrl, setUpdateUrl] = useState(null)
    const [updateEducation, setUpdateEducation] = useState('')
    const [updateLocation, setUpdateLocation] = useState('')
    const [socialLink, setSocialLink] = useState('')


    useEffect(() => {
        setUpdateEducation(updateEducation);
        setUpdateLocation(updateLocation);
        setSocialLink(socialLink);
    } ,[updateEducation, updateLocation, socialLink])


    const handleUpdateUser = e => {
        e.preventDefault()
        
        const updateUserInfo = {
            UpdateUrl,
            updateEducation,
            updateLocation,
            socialLink
        }
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

                            <input onChange={(e) => setUpdateUrl(e.target.files[0])} type="file" required
                                placeholder='Profile Image URL' class="input input-bordered input-accent w-full max-w-sm" />

                            <input onChange={(e => setUpdateEducation(e.target.value))} required type="text"
                                placeholder='Education Qualification' class="input input-bordered input-accent w-full max-w-sm my-2" />

                            <input  onChange={(e => setUpdateLocation(e.target.value))}  required type="number" placeholder="Your Location" class="input input-bordered input-accent w-full max-w-sm " />

                            <input onChange={(e => setSocialLink(e.target.value))}   required type="number" placeholder="Social Link" class="input input-bordered input-accent w-full max-w-sm my-2" />

                            <button class="btn btn-active btn-secondary text-white bg-slate-700 hover:bg-accent hover:border-transparent flex-start flex ml-10  w-40">Purchase</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateModal;