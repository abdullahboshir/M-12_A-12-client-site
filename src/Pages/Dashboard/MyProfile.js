import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Shared/Loading/Loading';
import auth from '../../firebase.init';
import { FcBusinessman } from 'react-icons/fc';
import UpdateModal from '../../Components/Dashboard-Sections/UpdateModal';
import ProfileInfo from './ProfileInfo';



const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [pic, setPic] = useState('');
    const [education, setEducation] = useState('Education Qualification');
    const [location, setLocation] = useState('Your Location');
    const [link, setLink] = useState('Social Link');
    const [profileUser, setProfileUser] = useState([])




    useEffect(() => {
        fetch('https://sheltered-garden-04106.herokuapp.com/profile')
        .then(res => res.json())
        .then(data => setProfileUser(data))
       }, [])
     

    if(error){
        return <Loading/>
    }


    return (
       <div>
    
     
            <ProfileInfo user={user} education={education} location={location} link={link}/>
         
     
       </div>
    );
};

export default MyProfile;