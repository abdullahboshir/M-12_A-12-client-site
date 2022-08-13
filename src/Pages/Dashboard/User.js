import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';


const User = ({ user, closeToast }) => {
    const { email, role } = user;


    const makeAdmin = () => {
   
        const currentUser = {role : role === 'user'? 'admin': 'user'}

        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => {
                if (res.status === 403) {
                    toast('Failed to make an Admin')

                }
                return res.json()
            })
            .then(data => {
                swal("Are you sure you want to do this user?", {
                    buttons: ["No", "Yes"],
                });
            })
    };


    
    return (
        <tr>
            <td>{email}</td>
            <td>{role === 'admin' ? 'Admin' : 'User'}</td>
            <td>
              <button className={ role === 'admin'? 'bg-secondary btn btn-sm border-none px-5 text-white': 'bg-green-600 btn btn-sm border-none px-4 text-white'} onClick={makeAdmin}>{ role === 'admin'? 'Make User' : 'Make Admin'}</button>
            </td>
        </tr>
    );
};

export default User;