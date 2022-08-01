import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BuyModal from './BuyModal';

const BuyNowUi = ({ singlePart }) => {
    const [updateQuantity, setUpdateQuantity] = useState();
    const [quantityError, setQuantityError] = useState();
    const buyDate = format(new Date() , 'PP')

    const { _id, name, img, price, quantity, minimuQuantity, Features, descirption } = singlePart;


    const minQuan = minimuQuantity;

    useEffect(() => {
        setPresesQuantity(minQuan)
    }, [minQuan])

    const [presesQuantity, setPresesQuantity] = useState(minimuQuantity)

    const handleQuantity = e => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
            setPresesQuantity(e.target.value);
        }
    }

    useEffect(() => {
        if(  parseInt(presesQuantity) < minimuQuantity){
            setQuantityError(`Must order more then[${minQuan}]`)
        }
        else if(parseInt(presesQuantity) > quantity){
            setQuantityError(`You can order maximum [${quantity}]`)
        }else if(presesQuantity === ""){
            setQuantityError('Please input Quantity amount')
        }
        else{
            setQuantityError('')
        }
    }, [presesQuantity])

    const totalPrice = price * presesQuantity;

    return (
        <div className='flex justify-center items-center h-screen w-100vw'>
            <div className="card rounded-none  bg-base-100 shadow-xl lg:w-4/5 flex flex-row justify-between items-center p-12">
                <figure><img src={img} alt="Shoes" className='w-80' /></figure>
                <div className="w-3/5">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className='text-start' href="">{descirption}</p>

                    <h2 className="card-title text-lg">Minimum Order Quantity: <span className='text-secondary'>{minimuQuantity}</span></h2>

                    <h2 className="card-title text-lg">Availabe Quantity: <span className='text-secondary'>{quantity}</span></h2>

                    <h2 className="card-title text-lg">Price: <span className='text-secondary'>${price}.00</span></h2>

                    <div>
                        <h1 className='card-title text-2xl mt-6'>Order Summary</h1>
                        <input
                            type="number"
                            value={presesQuantity}
                            onChange={handleQuantity}
                            placeholder="Amount of Quantity"
                            className="input input-bordered input-accent w-full max-w-xs flex flex-start mt-4" />
                            <p className='text-start text-red-500 mt-2'>{quantityError}</p>
                        <h1 className='text-lg card-title mt-2'>
                        Total Price:
                            <span className='text-primary'>${totalPrice}.00</span>
                            </h1>
                    </div>

                    <div className='flex justify-end items-center mt-12'>

                        <label disabled={presesQuantity < minQuan || presesQuantity > quantity } for="my-modal-3" className="btn modal-button bg-slate-700 py-0 h-0 text-white hover:bg-secondary hover:border-transparent">Buy Now</label>
                        <BuyModal price={price} totalPrice={totalPrice} presesQuantity={presesQuantity} minQuan={minQuan} quantity={quantity}/>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default BuyNowUi;