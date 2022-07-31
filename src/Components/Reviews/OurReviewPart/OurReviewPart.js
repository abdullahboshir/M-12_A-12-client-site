import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Reviews from "../Reviews/Reviews";
const OurReviewPart = () => {

 const [reviewsData, setreviewsData] = useState([]);

  useEffect(() => {
      fetch("reviews.json")
      .then(res => res.json())
      .then(data => setreviewsData(data))
  }, [])

  
  return (
    <div className=" bg-white padding">
      <div className="text-center">
        <h2 className="text-4xl font-bold  mb-4">
          Our Clients Reviews
        </h2>

        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => ("slide change")}
          onSwiper={(swiper) => (swiper)}
        >
         <div>
         {reviewsData?.map((item) => (
            <SwiperSlide>
              key={item.id}
              <Reviews item={item} key={item.id} />{" "}
            </SwiperSlide>
          ))}
         </div>
        </Swiper>
      </div>
    </div>
  );
};

export default OurReviewPart;
