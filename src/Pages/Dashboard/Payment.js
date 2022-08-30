import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LV3NpBVsZQlTL5ZPHnasmh55fH3vnCFSLLgeSDerCBbpqkuCmcdD9pZ3tLee9MJt9ZUM7HkgaDwj7qimoiefLE5002AFLfwwg');


const Payment = () => {
    const { paymentId } = useParams();
    const [payment, setPayment] = useState({});
    const { partsName, customerName, date, totalQuantity, OrderTotalPrice } = payment;

    useEffect(() => {
        fetch(`http://localhost:5000/userOrderData/${paymentId}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [paymentId, payment, setPayment]);

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {customerName}</p>
                    <h2 class="card-title">Please Pay for <span className='text-secondary'>{partsName}</span></h2>
                    <p>Your Order <span className='text-orange-700'>{date}</span> and ${totalQuantity}.00 Pieace </p>
                    <p>Please pay: ${OrderTotalPrice}</p>
                </div>
            </div>
            <div class="card w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                        
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;