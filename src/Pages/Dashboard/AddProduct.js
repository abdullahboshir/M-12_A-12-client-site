import React, { useEffect, useState } from 'react';

const AddProduct =  () => {

    const [quan, setQuan] =  useState(0);
    const [minimum, setMinimum] = useState(0);
    const [error, setError] = useState('')

// useEffect(() => {
//     setQuan(quan);
//     setMinimum(minimum);
//     if( parseInt(quan < minimum)){
//         setError('Please enter the minimum amount less then the amount')
//     }
// }, [quan, minimum])


    const handleProductAdd = e => {
        e.preventDefault();
        const inputName = e.target.ProductName.value;
        const inputPrice = parseInt(e.target.price.value);
        const inputImg = e.target.productUrl.value;
        const inputQuantity = parseInt(e.target.quantity.value);
        const inputMinQuantity = parseInt(e.target.minQuantity.value);
        const inputFeature1 = e.target.feature1.value;
        const inputFeature2 = e.target.feature2.value;
        const inputFeature3 = e.target.feature3.value;
        const inputFeature4 = e.target.feature4.value;
        const inputDescirption = e.target.productDescription.value;


        const addProduct = {
            name: inputName,
            price: inputPrice,
            img: inputImg,
            quantity: inputQuantity,
            minimuQuantity: inputMinQuantity,
            Features: {
                Feature1: inputFeature1,
                Feature2: inputFeature2,
                Feature3: inputFeature3,
                Feature4: inputFeature4
            },
            descirption: inputDescirption
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addProduct)
        })

    };



    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="card flex-shrink-0 w-full max-w-[500px] shadow-2xl bg-base-100">
                <form onSubmit={handleProductAdd}>
                    <div class="card-body">

                        <div class="form-control">
                            <input name='ProductName' type="text" placeholder="Product Name" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <input name='productUrl' type="text" placeholder="Product Url" class="input input-bordered" />
                        </div>

                        <div class="form-control flex flex-row justify-between">
                            <input name='price' type="number" placeholder="Price" class="input input-bordered  w-[138px]" />
                            <input onChange={(e) => setQuan(e.target.value)} name='quantity' type="number" placeholder="Quantity" class="input input-bordered w-[138px]" />
                            <input onChange={(e) => setMinimum(e.target.value)} name='minQuantity' type="number" placeholder="Min Quantity" class="input input-bordered  w-[138px]" />
                        </div>
                        {
                            <small>{error}</small>
                        }

                        <div class="form-control flex flex-row justify-between">
                            <input name='feature1' type="text" placeholder="Feature One" class="input input-bordered  w-[212px]" />
                            <input name='feature2' type="text" placeholder="Feature Two" class="input input-bordered w-[212px]" />
                        </div>

                        <div class="form-control flex flex-row justify-between">
                            <input name='feature3' type="text" placeholder="Feature Tree" class="input input-bordered  w-[212px]" />
                            <input name='feature4' type="text" placeholder="Feature Four" class="input input-bordered w-[212px]" />
                        </div>

                        <textarea name='productDescription' class="textarea textarea-bordered" placeholder="Product Description"></textarea>

                        <div class="form-control mt-6">
                            <button disabled={quan < minimum} type='submit' class="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;