import React from "react";
import './reviewsUi.css';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';

const Reviews = ({ item }) => {
  const blankImage = 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg';
  
  const { img, name, date, body, rating, postId ,  id } = item;
  const ratingParse = parseInt(rating)

  
  return (
    <div className='reviews text-black'>
    <div className='img-rating-star'>
 <div className='img-rating'>
    <div><img src={img} alt="" /></div>

    <div className='rating flex flex-col'>
    {
       rating === '4.50/5.00' ?
        <div className="flex flex-row text-black">
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <BsStarHalf/>
        {/* <AiOutlineStar /> */}
        </div>
       : rating === '4.00/5.00' ?
         <div  className="flex flex-row text-black" >
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiOutlineStar />
      </div>
      : <div  className="flex flex-row text-black">
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
    </div>
    }
    <p>{rating}</p>

  </div>
  </div>
  <div>
    <h5>{name} <br></br> <p>By reviewed</p></h5>
  </div>
  </div>

  <h3 className="text-[19px] text-start font-semibold mt-6">{body.length > 30? body.slice(0, 30) + "." : ""}</h3>

  <div className='comment-details text-start mt-2'>
   <p className="mb-6 text-black" title={body}>
   {body.length > 20? body.slice(0, 100) + "..." : body} </p>
   <small>Review date: {date}</small>
  </div>
  </div>
  );
};

export default Reviews;
