import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MakeAdmin = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default MakeAdmin;