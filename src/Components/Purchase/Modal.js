import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Modal = ({price, totalPrice, presesQuantity}) => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div>
{/* <!-- Put this part before </body> tag --> */}
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">Confirm your order</h3>

    <input type="text" disabled value={user.displayName} placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs text-base" />
    <input type="text" disabled value={user.email} placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs my-2 text-base" />
    <input type="text" placeholder="Your Address" class="input input-bordered input-accent w-full max-w-xs" />
    <input type="text" placeholder="Phone Number" class="input input-bordered input-accent w-full max-w-xs my-2" />

    <h3 class="text-lg font-bold">displayName</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
        </div>
    );
};

export default Modal;