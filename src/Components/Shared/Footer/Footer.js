import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephoneForward } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineYahoo } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>

          <img className='w-48' src="https://i.ibb.co/TkgS9zP/imajjjjjges-1.png" alt="" />
          <a className="link link-hover text-xs w-48 text-primary">we provide World best services. </a>
          <div className='item'>
                    <p className='flex flex-row items-center my-4'> <HiOutlineLocationMarker className='mr-2 text-xl'/> 914 Nathan Courts Suite 632</p>
                    <p className='flex flex-row items-center my-4'> <BsTelephoneForward className='mr-2 text-xl'/> +1-924-552-4346 </p>
                    <p className='flex flex-row items-center my-4'> <HiOutlineMail className='mr-2 text-xl'/> ralph48@hotmail.com</p>
                    <p className='flex flex-row items-center my-4'> <AiOutlineYahoo className='mr-2 text-2xl'/> ralph48@yahoo.com</p>
                    </div>
        </div> 

        <div>
          <span className="footer-title">Customer Service</span> 
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Track My Order</a>
          <a className="link link-hover">Return Policy</a>
          <a className="link link-hover">Price Match</a>
          <a className="link link-hover">Gift Cards</a>
          <a className="link link-hover">Contacts</a>
        </div> 

        <div>
          <span className="footer-title">Information</span> 
          <a className="link link-hover">Guides and Articles</a>
          <a className="link link-hover">Customer Reviews</a>
          <a className="link link-hover">Service Plus</a>
          <a className="link link-hover">Catalog Category</a>
        </div> 

        <div>
          <span className="footer-title">Instagram</span> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;