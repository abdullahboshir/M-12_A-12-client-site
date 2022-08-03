import React, { useEffect, useState } from 'react';

import Loading from '../../Components/Shared/Loading/Loading';
import User from './User';

const Allusers = () => {
  const [users, setUsers] = useState([])
const closeToast = 'ggg';


    // useEffect(() => {
    //     fetch('https://sheltered-garden-04106.herokuapp.com/users', {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // }, [users, setUsers])
    
  
    // return (
    //     <div>
    //         <h1 className='text-2xl '>All Users {users.length} </h1>
    //         <div className="overflow-x-auto mt-12 px-8">
    //   <table className="table w-full">
    //     {/* <!-- head --> */}
    //     <thead>
    //       <tr>
    //         <th></th>
    //         <th>Email</th>
    //         <th>Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {
       
    //          users.map(user => <User index user={user} key={user._id} closeToast={closeToast} />)
    //       }
    //     </tbody>
    //   </table>
    // </div>
    //     </div>
    // );
};

export default Allusers;