import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ payment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { OrderTotalPrice, customerName, cutomerEmail, _id } = payment;


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ OrderTotalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [OrderTotalPrice]);
   

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '');
        setSuccess('')
        setProcessing(true)
        // confirm card payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customerName,
                        email: cutomerEmail
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false)
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats! your payment is completed.');

            const payment = {
                OrderId: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/userOrderData/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log('this is respose', data)
                setProcessing(false)
             
            })
        }

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-green btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500 text-bold'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-500 '>{success}</p>
                    <p className='text-orange-500'>Your transaction Id: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;