import React, { useEffect, useState } from 'react';
import PartsInfo from '../../hooks/partsData';
import PartsUi from './PartsUi';

const Parts = () => {
    const [partsData, setPartsData] = PartsInfo([])
  
    return (
        <div className='bg-slate-100 pt-12'>
             <h1 className='text-5xl font-bold'>CHECK OUR PARTS</h1>
            <div className='flex justify-evenly bg-slate-100 pt-10'>
            {
                partsData.map(part => <PartsUi key={part.id} part={part} />)
            }
        </div>
        </div>
    );
};

export default Parts;