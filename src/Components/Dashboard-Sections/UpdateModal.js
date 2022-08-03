import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import swal from 'sweetalert';

const UpdateModal = ({setLink, setPic, setEducation, setLocation, pic, education, location, link, profileUser}) => {

    const [user, loading, error] = useAuthState(auth);
    const [UpdateUrl, setUpdateUrl] = useState('')
    const [updateEducation, setUpdateEducation] = useState('')
    const [updateLocation, setUpdateLocation] = useState('')
    const [socialLink, setSocialLink] = useState('')
    const [UpdateProfile,setUpdateProfile] = useState()


    // useEffect(() => {
    //     setUpdateEducation(updateEducation);
    //     setUpdateLocation(updateLocation);
    //     setSocialLink(socialLink);
    //     setUpdateUrl(UpdateUrl);
    // }, [updateEducation, updateLocation, socialLink, UpdateUrl])


    const handleUpdateUser =  (e) => {
        e.preventDefault()

        const updateUserInfo = {
            updateEducation: education,
            updateLocation: location,
            socialLink: link,
            UpdateUrl: pic,
            profileUser: user.email
        }

        // try{ 
        //     fetch('https://sheltered-garden-04106.herokuapp.com/profile', {
        //         method: 'POST',
        //         headers: {
        //             'content-type' : 'application/json',
        //         },
        //         body: JSON.stringify(updateUserInfo)
        //     })
        //     .then(res => res.json())
        //     .then(data => {

        //         swal("Success update your Profile")
        //     })
        // }
        // catch(error){
        //     console.log(error)
        // }
        
        try{
        fetch(`https://sheltered-garden-04106.herokuapp.com/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUserInfo)
        })
            .then(res => res.json)
            .then(data => {
                swal("Success update your Profile")
                console.log(data)
            })
        }
        catch(error){
            console.log(error)
        }

       
    }



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

                            <input onChange={(e) => setPic(e.target.value)} type="text" required
                                placeholder='Profile Image URL' className="input input-bordered input-accent w-full max-w-sm" />

                            <input onChange={(e => setEducation(e.target.value))} required type="text"
                                placeholder='Education Qualification' className="input input-bordered input-accent w-full max-w-sm my-2" />

                            <input onChange={(e => setLocation(e.target.value))} required type="text" placeholder="Your Location" className="input input-bordered input-accent w-full max-w-sm " />
                            

                            <input onChange={(e => setLink(e.target.value))} required type="text" placeholder="Social Link" className="input input-bordered input-accent w-full max-w-sm my-2" />
                           

                            <button className="btn btn-active btn-secondary text-white bg-slate-700 hover:bg-accent hover:border-transparent flex-start flex mt-4  w-40 ">Purchase</button>
                           
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpdateModal;