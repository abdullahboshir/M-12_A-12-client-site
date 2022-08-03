import React from 'react';
import { DotLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[100vh] w-[98vw]'>
            <DotLoader
                color="#E24459"
                size={100}
            />
        </div>
    );
};

export default Loading;