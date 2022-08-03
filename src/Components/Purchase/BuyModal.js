import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import swal from "sweetalert";
import { format } from 'date-fns';



const Modal = ({ price, totalPrice, presesQuantity, setModalSwitch }) => {
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(new Date() , 'PP')
 


  const handleOrder = async (e) => {
    e.preventDefault()
    const customerName = user.displayName;
    const cutomerEmail = user.email;
    const customerAddress = e.target.address.value;
    const customerNumber = e.target.number.value;
    const totalQuantity = presesQuantity;
    const OrderTotalPrice = totalPrice;
    

    const customerOderInfo = {
      customerName,
      cutomerEmail,
      customerAddress,
      customerNumber,
      totalQuantity,
      OrderTotalPrice, 
      date: formattedDate
    }

    await axios.post('https://sheltered-garden-04106.herokuapp.com/userOrderData', customerOderInfo)
    .then(res => (res))
    swal('Your Order is Success')
    setModalSwitch(null)
  }


  return (
     <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-2xl font-bold mb-6">Confirm your order</h3>
          <form onSubmit={handleOrder}>
          <div className='flex-col'>
            <input type="text" disabled value={user.displayName} placeholder="Type here" className="input input-bordered input-accent w-full max-w-sm text-base" />

            <input type="text" disabled value={user.email} placeholder="Type here" className="input input-bordered input-accent w-full max-w-sm my-2 text-base" />

            <input required name='address' type="text"
              placeholder='Your Address' className="input input-bordered input-accent w-full max-w-sm" />
            <input required  name='number'  type="number" placeholder="Phone Number" className="input input-bordered input-accent w-full max-w-sm my-2" />
            <p className='text-red-500 text-start ml-10 '></p>
          </div>
          <h3 className="text-xl font-bold text-start ml-10 text-primary">Per Price: ${price}.00</h3>
          <h3 className="text-xl font-bold text-start ml-10 text-primary">Total Products: {presesQuantity} Piece</h3>
          <h3 className="text-xl font-bold text-start ml-10 text-primary">Total Price: ${totalPrice}.00</h3>

          <button  className="btn btn-active btn-secondary text-white bg-slate-700 hover:bg-accent hover:border-transparent flex ml-10 mt-2  w-40">Purchase</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;