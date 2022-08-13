import React, { useEffect, useState } from 'react';
import User from './User';
 
const Allusers = () => {
  const [users, setUsers] = useState([])
const closeToast = 'ggg';


    useEffect(() => {
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [users, setUsers])

  
    return (
        <div>
            <h1 className='text-2xl '>All Users {users.length} </h1>
            <div className="overflow-x-auto mt-12 px-8">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Email</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(users) ?
             users.map(user => <User index user={user} key={user._id} closeToast={closeToast} />) : null
          }
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default Allusers;