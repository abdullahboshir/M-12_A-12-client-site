import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephoneForward } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineYahoo } from 'react-icons/ai';


const Footer = () => {
    return (
        <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>

          <img className='w-48' src="https://i.ibb.co/cL4K5NX/kindpng-5437823.png" alt="" />
          <a class="link link-hover text-xs w-48 text-primary">we provide World best services. </a>
          <div className='item'>
                    <p className='flex flex-row items-center my-4'> <HiOutlineLocationMarker className='mr-2 text-xl'/> 914 Nathan Courts Suite 632</p>
                    <p className='flex flex-row items-center my-4'> <BsTelephoneForward className='mr-2 text-xl'/> +1-924-552-4346 </p>
                    <p className='flex flex-row items-center my-4'> <HiOutlineMail className='mr-2 text-xl'/> ralph48@hotmail.com</p>
                    <p className='flex flex-row items-center my-4'> <AiOutlineYahoo className='mr-2 text-2xl'/> ralph48@yahoo.com</p>
                    </div>
        </div> 

        <div>
          <span class="footer-title">Customer Service</span> 
          <a class="link link-hover">Help Center</a>
          <a class="link link-hover">Track My Order</a>
          <a class="link link-hover">Return Policy</a>
          <a class="link link-hover">Price Match</a>
          <a class="link link-hover">Gift Cards</a>
          <a class="link link-hover">Contacts</a>
        </div> 

        <div>
          <span class="footer-title">Information</span> 
          <a class="link link-hover">Guides and Articles</a>
          <a class="link link-hover">Customer Reviews</a>
          <a class="link link-hover">Service Plus</a>
          <a class="link link-hover">Catalog Category</a>
        </div> 

        <div>
          <span class="footer-title">Instagram</span> 
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
    );
};

export default Footer;