import React from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';


const User = ({ user, closeToast }) => {
    // const { email, role } = user;



    // const makeAdmin = () => {
    //     fetch(`https://sheltered-garden-04106.herokuapp.com/users/admin/${email}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => {
    //             if (res.status === 403) {
    //                 toast('Failed to make an Admin')
                  
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             console.log(data)
    //             swal("Are you sure you want to do this user?", {
    //                 buttons: ["No", "Yes"],
    //             });


    //         })
    // }

    // return (
    //     <div>
    //         <tr>
    //             <td>{email}</td>
    //             <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-sm">Make Admin</button>}</td>
    //             <td><button class="btn btn-sm">Make User</button></td>
    //         </tr>
    //     </div>
    // );
};

export default User;