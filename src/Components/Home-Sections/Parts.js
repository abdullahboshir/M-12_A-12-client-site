import React, { useEffect, useState } from 'react';
import PartsInfo from '../../hooks/partsData';
import PartsUi from './PartsUi';

const Parts = () => {
    const [partsData] = PartsInfo([])
  
    return (
        <div className='bg-slate-100 pt-12 flex flex-col justify-center items-center pb-28 '>
             <h1 className='text-5xl font-bold'>CHECK OUR PARTS</h1>
            <div className='grid grid-cols-3 gap-6 bg-slate-100 pt-10'>
            {
                partsData.map(part => <PartsUi key={part._id} part={part} />)
            }
        </div>
        </div>
    );
};

export default Parts;