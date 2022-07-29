import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Modal = ({ price, totalPrice, presesQuantity }) => {
  const [user, loading, error] = useAuthState(auth);
  const [blankAddress, setBlankAddress] = useState('')
  const [blankPhone, setBlankPhone] = useState('')

  const handeEmailError = e => {
    const blackAddress = (e.target.value);
    if (blackAddress === '') {
      setBlankAddress('Please Enter Your Address')
    }
    else {
      setBlankAddress('')
    }
  }



  const handePhoneError = e => {
    const blackPhone = (e.target.value);
    if (blackPhone < 0) {
      setBlankPhone('Please Enter Your Phone number')
    }
    else {
      setBlankPhone('')
    }
  }


  const handleClick = () => {
    if (blankPhone < 0) {
      setBlankPhone('Please Enter Your Phone number')
    }
    else if (blankAddress === '') {
      setBlankAddress('Please Enter Your Address')
    }
    else {
      setBlankAddress('');
      setBlankPhone('')
    }
  }

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="text-2xl font-bold mb-6">Confirm your order</h3>

          <div className='flex-col'>
            <input type="text" disabled value={user.displayName} placeholder="Type here" class="input input-bordered input-accent w-full max-w-sm text-base" />

            <input type="text" disabled value={user.email} placeholder="Type here" class="input input-bordered input-accent w-full max-w-sm my-2 text-base" />

            <input required type="text"
              onChange={handeEmailError}
              placeholder='Your Address' class="input input-bordered input-accent w-full max-w-sm" />
            <p className='text-red-500 text-start ml-10 '>{blankAddress}</p>

            <input required onChange={handePhoneError} type="number" placeholder="Phone Number" class="input input-bordered input-accent w-full max-w-sm my-2" />
            <p className='text-red-500 text-start ml-10 '>{blankPhone}</p>
          </div>
          <h3 class="text-xl font-bold text-start ml-10 text-primary">Per Price: ${price}.00</h3>
          <h3 class="text-xl font-bold text-start ml-10 text-primary">Total Products: {presesQuantity} Piece</h3>
          <h3 class="text-xl font-bold text-start ml-10 text-primary">Total Price: ${totalPrice}.00</h3>


          <label onClick={() => handleClick()} for="my-modal-3" class="btn btn-active btn-secondary text-white bg-slate-700 hover:bg-accent hover:border-transparent flex-start flex ml-10  w-40">Purchase</label>
        </div>
      </div>
    </div>
  );
};

export default Modal;