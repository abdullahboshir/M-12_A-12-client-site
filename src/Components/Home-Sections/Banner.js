import React from 'react';
import banner1 from '../../Assets/wallpaperflare.com_wallpaper (2).jpg';
import banner2 from '../../Assets/wallpaperflare.com_wallpaper (3).jpg';

const Banner = () => {
    return (
        <div className=' relative  relative w-100vw bg-slate-100' style={{ height: '700px'}}>
            <div style={{ backgroundImage: "url(https://i.ibb.co/XfHJHKt/banner.jpg)", height: '95vh' }} class="hero bg-base-200 ">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content justify-between flex-col lg:flex-row-reverse p-0">
                    <div className='ps-8 mb-4'>
                        <div className='bg-white p-2 rounded-l-lg mb-6'>
                            <img src={banner2} class="max-w-sm rounded-lg shadow-2xl max-w-xs" />
                        </div>
                        <div className='bg-white p-2 rounded-l-lg mb-10'>
                            <img src={banner1} class="max-w-sm rounded-lg shadow-2xl max-w-xs" />
                        </div>
                    </div>
                    <div className='text-white w-3/5 text-start px-6'>
                        <h1 class="text-6xl font-bold text-secondary leading-10">THE WORLD'S
                            <span className='text-white ml-3'>BEST</span> <br /> <span className='text-6xl text-white font-normal'>auto parts</span></h1>
                        <p class="py-4 w-4/5 mt-4 text-slate-300">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <input type="text" placeholder="Search" class="input input-bordered input-accent w-full max-w-xs bg-transparent mb-4" />
                        <button class="btn btn-active btn-secondary mx-4 hover:bg-accent hover:border-transparent">Search</button> <br />
                    </div>
                </div>
            </div>

            <div class="card rounded-none w-4/5 bg-white text-primary-content absolute bottom-16 left-28 shadow-lg">
                <div class="card-body flex justify-center items-center flex-row">
                    <h2 style={{ fontSize: "20px", width: "450px" }} class="card-title text-start ">Subscribe for Updated and Get a Discount. Connected with us for unlimited big Offer.</h2>
                    <div className='flex'>
                        <input type="text" placeholder="Enter Your Email" class="input input-bordered input-accent w-60 max-w-xs bg-transparent" />
                        <button class="btn btn-active bg-slate-700 text-white mx-4 hover:bg-accent hover:border-transparent" style={{ marginTop: "0" }}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;