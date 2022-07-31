import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import BuyNowUi from './BuyNowUi';

const BuyNow = () => {
    const {partsId} = useParams()
   
    const [singlePart, setSinglePart] = useState({});

    useEffect(() => {
        fetch(`https://sheltered-garden-04106.herokuapp.com/products/${partsId}`)
        .then(res => res.json())
        .then(data => setSinglePart(data))
    }, [singlePart, partsId]) 
   
    return (
        <div>
           <BuyNowUi singlePart = {singlePart} />
        </div>
    );
};

export default BuyNow;