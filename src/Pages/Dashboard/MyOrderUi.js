import React, { useState } from 'react';
import swal from 'sweetalert';

const MyOrderUi = ({order}) => {
    const [willlDelet, setWillDelete] = useState({});

    const {
        OrderTotalPrice,
        cutomerEmail,
        date,
        _id
    } = order;


const handleCancelOrder = (id) => {
 swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your Order has been deleted!", {
            icon: "success",
          });
          const url = `https://sheltered-garden-04106.herokuapp.com/userOrderData/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              if(data.deletedCount > 0){
                  const reamaining = order.filter(user => user._id !== id);
                  setWillDelete(reamaining); 
              }
          })
        } else {
          swal("Your Order is safe!");
        }
      });
       

}

    return (
        <tr>
        <td></td>
        <td>{date}</td>
        <td>${OrderTotalPrice}.00</td>
        <td>{cutomerEmail}</td>
        <td>Tranzation Id</td>
        <td><button onClick={() => handleCancelOrder(_id)} className='text-secondary mr-4'>Cancel</button>
        <button className='text-green-500 font-bold'>Payment</button>
        </td>
      </tr>
    );
};

export default MyOrderUi;