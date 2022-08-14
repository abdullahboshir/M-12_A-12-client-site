import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const MyOrderUi = ({ order, index }) => {

  const {
    OrderTotalPrice,
    cutomerEmail,
    date,
    _id
  } = order;


  const handleCancelOrder = (id) => {
    console.log( _id)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your Order has been deleted!", {
            icon: "success",
          });
          const url = `http://localhost:5000/userOrderData/${id}`;
          fetch(url, {
            method: 'DELETE',
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
              const cancelPayment = Array.isArray(order)? order.filter(user => user._id !== id) : [];
            
              }
            })
        } else {
          swal("Your Order is safe!");
        }
      });


  }

  return (
    <tr>
      <td>{index}</td>
      <td>{date}</td>
      <td>${OrderTotalPrice}.00</td>
      <td>{cutomerEmail}</td>
      <td>Transaction  Id</td>
      <td><button onClick={() => handleCancelOrder(_id)} className='text-secondary mr-4'>Cancel</button>

     <Link to={`/dashBoard/payment/${_id}`}><button className='text-green-500 font-bold'>Payment</button></Link>
      </td>
    </tr>
  );
};

export default MyOrderUi;