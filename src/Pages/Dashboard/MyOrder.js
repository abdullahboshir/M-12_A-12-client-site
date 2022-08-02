import React, { useEffect, useState } from 'react';
import MyOrderUi from './MyOrderUi';



const MyOrder = () => {
  const [confirmOrder, setConfirmOrder] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/userOrderData')
      .then(res => res.json())
      .then(data => setConfirmOrder(data))
  }, [confirmOrder, setConfirmOrder])


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