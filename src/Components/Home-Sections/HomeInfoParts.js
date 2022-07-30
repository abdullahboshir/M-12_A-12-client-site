import React from 'react';

const HomeInfoParts = () => {
    return (
        <div className='flex justify-between items-center h-full w-sreen px-16 mt-8 mb-28'>
          
            <div className='w-[600px] text-start'>
                <h1 class="text-5xl font-bold mb-4 text-secondary">Our stack is available</h1>
                <p>
                    If you’re looking for a simple fixes like replacing wipers or light bulbs, we have what you need. Looking for tune-up items like belts and spark plugs? We have those too. We also have car parts for more serious issues like a bad battery, a malfunctioning starter, or even body work. If something is wrong with your vehicle, take a quick trip to AutoZone for any car, SUV, or truck auto parts you need.
                </p>
                <button class="btn btn-active  mt-5 hover:bg-accent hover:border-transparent text-white ">learn More</button>
            </div>

            <div>
                <img className='w-[450px]  mt-0 ' src="https://i.ibb.co/HYXrzPS/istockphoto-1145446454-612x612.jpg" alt="" />
            </div>


        </div>

    )
};

export default HomeInfoParts;