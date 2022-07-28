import { useEffect, useState } from "react";


const Reviews = () => {
    const [reviewsData, setreviewsData] = useState([]);
    useEffect(() => {
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setreviewsData(data))
    }, [])
   return [reviewsData, setreviewsData];
};


export default Reviews;