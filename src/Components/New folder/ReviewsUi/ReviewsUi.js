// import React, { useState } from 'react';
import './reviewsUi.css';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const ReviewsUi = ({reviewDetails}) => {

    const {name, date, img, body, rating} = reviewDetails;

    // const [h , setH] = useState(true)
    // let j = rating

    return (
          <div className='reviews'>
            <div className='img-rating-star'>
         <div className='img-rating'>
            <div><img src={img} alt="" /></div>

            <div className='rating'>
            {
               rating === '4.50/5.00' ?
                <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <BsStarHalf/>
                {/* <AiOutlineStar /> */}
                </div>
               : rating === '4.00/5.00' ?
                 <div  >
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar />
              </div>
              : <div>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
            </div>
            }
            {rating}

          </div>
          </div>
          <div>
            <h5>{name} <br></br> <p>By reviewed</p></h5>
          </div>
          </div>

          <h3>{body.length > 30? body.slice(0, 30) + "." : ""}</h3>

          <div className='comment-details'>
           <p title={body}>
           {body.length > 20? body.slice(0, 100) + "..." : body} </p>
           <small>Review date: {date}</small>
          </div>
          </div>
    );
};

export default ReviewsUi;
