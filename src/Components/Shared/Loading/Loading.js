import React from 'react';
import { DotLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[100vh] w-[100vw]'>
            <DotLoader
                color="#312b99"
                size={100}
            />
        </div>
    );
};

export default Loading;