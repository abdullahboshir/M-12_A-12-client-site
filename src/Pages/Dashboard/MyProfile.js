import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Shared/Loading/Loading';
import auth from '../../firebase.init';
import UpdateModal from '../../Components/Dashboard-Sections/UpdateModal';
import ProfileInfo from './ProfileInfo';



const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [modalSwitch, setModalSwitch] = useState(true);

    if(error){
        return <Loading/>
    }

    return (
       <div>
          <div>
          <ProfileInfo  setModalSwitch={setModalSwitch} />
          </div>
            <div>
            {modalSwitch && <UpdateModal setModalSwitch={setModalSwitch} />}
            </div>
       </div>
    );
};

export default MyProfile;