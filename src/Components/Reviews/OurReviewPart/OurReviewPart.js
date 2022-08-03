import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Reviews from "../Reviews/Reviews";
const OurReviewPart = () => {

 const [reviewsData, setreviewsData] = useState([]);

  useEffect(() => {
      fetch("https://sheltered-garden-04106.herokuapp.com/reviews")
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
         {reviewsData?.map((item) => (
            <SwiperSlide>
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
