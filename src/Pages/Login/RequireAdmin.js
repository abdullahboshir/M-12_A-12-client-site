import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Shared/Loading/Loading';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();
    console.log('ReauireAuth Admin', admin)


    if(loading || adminLoading){
        return <Loading/>
    };

    if(user || !admin){
        return  <Navigate to='/login' state={{from: location}} replace></Navigate>
    }


    return (
        children
    );
};

export default RequireAdmin;