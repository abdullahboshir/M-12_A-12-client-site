import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Reviews from "../Reviews/Reviews";
const OurReviewPart = () => {

 const [reviewsData, setreviewsData] = useState([]);

  useEffect(() => {
      fetch("http://localhost:5000/reviews")
      .then(res => res.json())
      .then(data => setreviewsData(data))
  }, [reviewsData, setreviewsData])

  
  return (
    <div className=" bg-white padding">
      <div className="text-center">
        <h2 className="text-4xl font-bold  mb-6 text-primary">
          Our Clients Reviews
        </h2>

        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => ("slide change")}
          onSwiper={(swiper) => (swiper)}
        >
         <div>
         {reviewsData?.map((item, index) => (
            <SwiperSlide key={index}>
              <Reviews item={item} key={index} />{" "}
            </SwiperSlide>
          ))}
         </div>
        </Swiper>
      </div>
    </div>
  );
};

export default OurReviewPart;
