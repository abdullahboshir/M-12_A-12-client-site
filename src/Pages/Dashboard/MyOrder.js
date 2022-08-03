import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrderUi from './MyOrderUi';



const MyOrder = () => {
  const [confirmOrder, setConfirmOrder] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://sheltered-garden-04106.herokuapp.com/userOrderData?cutomerEmail=${user.email}`, {
      metho: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if(res.status === 401 || res.status === 403){
          navigate('/')
          signOut(auth)
          localStorage.removeItem('accessToken')
        }
        return res.json()
      })
      .then(data => setConfirmOrder(data))
  }, [confirmOrder, setConfirmOrder, user])
 


  return (
    <div className="overflow-x-auto mt-12 px-8">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Total Prcie</th>
            <th>Email</th>
            <th>Tranzation Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            confirmOrder.map(order => <MyOrderUi index order={order} key={order._id} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;