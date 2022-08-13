import React from 'react';
import { useNavigate } from "react-router-dom";

const PartsUi = ({part}) => {
  
  const navigate = useNavigate()
  const {_id, name, img, price, quantity, minimuQuantity, Features} = part;

  const handleBuyNow = id => {
    navigate(`/buyNow/${id}`)
  }
   

    return ( 
       <div>
         <div className="card rounded-none  bg-base-100 shadow-xl lg:w-96">
             <figure><img src={img} alt="Shoes" className='w-60' /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <h2 className="card-title text-lg">Minimum Order Quantity: <span  className='text-secondary'>{minimuQuantity}</span></h2>
          <h2 className="card-title text-lg">Availabe Quantity: <span className='text-secondary'>{quantity}</span></h2>
          <h2 className="card-title text-lg">Features:</h2>
          <h2 className='text-secondary text-lg text-start grid gap-0 grid-cols-2 grid-rows-'>
            <li className='w-48'>{Features.Feature1}</li>
            <li className='w-48'>{Features.Feature2}</li>
            <li className='w-48'>{Features.Feature3}</li>
            <li className='w-48'>{Features.Feature4}</li>
            </h2>

           <div className='flex justify-between items-center mt-10'>
           <h2 className="card-title text-lg">Price: <span className='text-secondary'>${price}.00</span></h2>
           <button className="btn bg-slate-700 py-0 h-0 text-white hover:bg-secondary hover:border-transparent" onClick={() => handleBuyNow(_id)}>Buy Now</button>
           </div>

        </div>
       
      </div>
       </div>
    );
};

export default PartsUi;