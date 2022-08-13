import React from 'react';
import { Link } from 'react-router-dom';

const ManageProductUi = ({ parts, index }) => {
    const { name, img, price, _id } = parts;

    const handleDelete = () => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log('delete')
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td><img className='w-28' src={img} alt="auto parts" /></td>
            <td>{name}</td>
            <td>${price}.00</td>
            <td>
                <div className='flex flex-col'>

                  <Link to='/dashBoard/addProduct'>  <button className='bg-green-600 btn btn-sm border-none text-white w-44'>Add Product</button></Link>
                    <button onClick={handleDelete} className='bg-secondary btn btn-sm border-none mt-2 w-44 text-white'>Delete Product</button>
                </div>
            </td>
        </tr>
    );
};

export default ManageProductUi;