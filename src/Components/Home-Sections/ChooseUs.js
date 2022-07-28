import React from 'react';
import { MdOutlineRateReview } from 'react-icons/md';
import { GiShakingHands } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';
import { FcComboChart } from 'react-icons/fc';
import { FaAward } from 'react-icons/fa';

const ChooseUs = () => {

    return (
        <div style={{ height: "700px", minWidth: "99vw" }} className="bg-white m">

            <div style={{ boxSizing: "border-box", width: "99vw", height: "600px" }} className='mb-16 flex pb-24 justify-center items-center h-4/6 relative shadow-lg bg-primary'>

                <div className='bg-slate-600 absolute left-0 top-0' style={{ width: "99vw", height: "255px" }}><h1 className='xl'></h1></div>

                <div class=" w-56 h-56 rotate-45 rounded-xl bg-base-100 shadow-xl p-0 m-0  ">
                    <div class="card-body -rotate-45 flex justify-center items-center flex-col">
                        <h2 class="text-7xl text-primary card-actions justify-center"><FaTools /></h2>
                        <h2 class="text-2xl font-bold">Tools</h2>
                        <h2 class="text-4xl font-bold text-secondary">70k+</h2>
                    </div>
                </div>

                <div class=" w-56 h-56 rotate-45 rounded-xl bg-base-100 shadow-xl mt-64 ml-0">
                    <div class="card-body -rotate-45 flex justify-center items-center flex-col">
                        <h2 class="text-7xl text-primary card-actions justify-center"><GiShakingHands /></h2>
                        <h2 class="text-2xl font-bold w-52 pr-8">Happy Clients</h2>
                        <h2 class="text-4xl font-bold text-secondary">189k+</h2>
                    </div>
                </div>

                <div class=" w-56 h-56 rotate-45 rounded-xl bg-base-100 shadow-xl">
                    <div class="card-body -rotate-45 flex justify-center items-center flex-col">
                        <h2 class="text-7xl text-primary card-actions justify-center"><FcComboChart /></h2>
                        <h2 class="text-2xl font-bold w-52">Annual revenue</h2>
                        <h2 class="text-4xl font-bold text-secondary">39k+</h2>
                    </div>
                </div>

                <div class="w-56 h-56 rotate-45 rounded-xl bg-base-100 shadow-xl mt-64 ml-0">
                    <div class="card-body -rotate-45 flex justify-center items-center flex-col">
                        <h2 class="text-7xl text-primary card-actions justify-center"><FaAward /></h2>
                        <h2 class="text-2xl font-bold w-52 text-start pr-4">National award</h2>
                        <h2 class="text-4xl font-bold text-secondary">39k+</h2>
                    </div>
                </div>

                <div class=" w-56 h-56 rotate-45 rounded-xl bg-base-100 shadow-xl">
                    <div class="card-body -rotate-45 flex justify-center items-center flex-col">
                        <h2 class="text-7xl text-primary card-actions justify-center"><MdOutlineRateReview /></h2>
                        <h2 class="text-2xl font-bold">Reviews</h2>
                        <h2 class="text-4xl font-bold text-secondary">39k+</h2>
                    </div>
                </div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default ChooseUs;