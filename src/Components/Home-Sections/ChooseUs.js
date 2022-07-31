import React from 'react';
import { MdOutlineRateReview } from 'react-icons/md';
import { GiShakingHands } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';
import { FcComboChart } from 'react-icons/fc';
import { FaAward } from 'react-icons/fa';

const ChooseUs = () => {

    return (
        <div style={{ height: "695px", minWidth: "100%" }} className="bg-white flex justify-center items-center">

            <div style={{ boxSizing: "border-box", width: "100%", height: "600px" }} className='mb-24 flex pb-24 justify-center items-center h-4/6 relative shadow-lg bg-primary'>

                <div className='bg-slate-600 absolute left-0 top-0' style={{ width: "100%", height: "254px" }}></div>

                <div className=" w-52 h-52 rotate-45 rounded-xl bg-base-100 shadow-xl p-0 m-0  ">
                    <div className="card-body -rotate-45 flex justify-center items-center flex-col">
                        <h2 className="text-7xl text-primary card-actions justify-center"><FaTools /></h2>
                        <h2 className="text-2xl font-bold">Tools</h2>
                        <h2 className="text-4xl font-bold text-secondary">70k+</h2>
                    </div>
                </div>

                <div className=" w-52 h-52 rotate-45 rounded-xl bg-base-100 shadow-xl mt-64 ml-0">
                    <div className="card-body -rotate-45 flex justify-center items-center flex-col">
                        <h2 className="text-7xl text-primary card-actions justify-center"><GiShakingHands /></h2>
                        <h2 className="text-2xl font-bold w-52 ">Happy Clients</h2>
                        <h2 className="text-4xl font-bold text-secondary">189k+</h2>
                    </div>
                </div>

                <div className=" w-52 h-52 rotate-45 rounded-xl bg-base-100 shadow-xl">
                    <div className="card-body -rotate-45 flex justify-center items-center flex-col">
                        <h2 className="text-7xl text-primary card-actions justify-center"><FcComboChart /></h2>
                        <h2 className="text-2xl font-bold w-52">Annual revenue</h2>
                        <h2 className="text-4xl font-bold text-secondary ml-2">39k+</h2>
                    </div>
                </div>

                <div className="w-52 h-52 rotate-45 rounded-xl bg-base-100 shadow-xl mt-64 ml-0">
                    <div className="card-body -rotate-45 flex justify-center items-center flex-col">
                        <h2 className="text-7xl text-primary card-actions justify-center"><FaAward /></h2>
                        <h2 className="text-2xl font-bold w-52 text-start ml-2">National award</h2>
                        <h2 className="text-4xl font-bold text-secondary ml-2">39k+</h2>
                    </div>
                </div>

                <div className=" w-52 h-52 rotate-45 rounded-xl bg-base-100 shadow-xl">
                    <div className="card-body -rotate-45 flex justify-center items-center flex-col ml-2">
                        <h2 className="text-7xl text-primary card-actions justify-center"><MdOutlineRateReview /></h2>
                        <h2 className="text-2xl font-bold">Reviews</h2>
                        <h2 className="text-4xl font-bold text-secondary ml-2">39k+</h2>
                    </div>
                </div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default ChooseUs;