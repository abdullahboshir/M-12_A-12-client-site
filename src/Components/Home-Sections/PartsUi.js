import React from 'react';

const PartsUi = ({part}) => {
    const {name, img, price, quantity, minimuQuantity, Features} = part;
    return (
       <div>
         <div class="card rounded-none  bg-base-100 shadow-xl lg:w-96 mb-28">
             <figure><img src={img} alt="Shoes" className='w-60' /></figure>
        <div class="card-body">
          <h2 class="card-title text-2xl">{name}</h2>
          <h2 class="card-title text-lg">Minimum Order Quantity: <span  className='text-secondary'>{minimuQuantity}</span></h2>
          <h2 class="card-title text-lg">Availabe Quantity: <span className='text-secondary'>{quantity}</span></h2>
          <h2 class="card-title text-lg">Features:</h2>
          <h2 className='text-secondary text-lg text-start grid gap-0 grid-cols-2 grid-rows-'>
            <li className='w-48'>{Features.Feature1}</li>
            <li className='w-48'>{Features.Feature2}</li>
            <li className='w-48'>{Features.Feature3}</li>
            <li className='w-48'>{Features.Feature4}</li>
            </h2>

           <div className='flex justify-between items-center mt-12'>
           <h2 class="card-title text-lg">Price: <span className='text-secondary'>${price}.00</span></h2>
           <button class="btn bg-slate-700 py-0 h-0 text-white hover:bg-secondary hover:border-transparent" >Buy Now</button>
           </div>

        </div>
       
      </div>
       </div>
    );
};

export default PartsUi;