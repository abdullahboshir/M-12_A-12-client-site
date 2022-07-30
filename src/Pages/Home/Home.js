import React from 'react';
import Banner from '../../Components/Home-Sections/Banner';
import ChooseUs from '../../Components/Home-Sections/ChooseUs';
import HomeInfoParts from '../../Components/Home-Sections/HomeInfoParts';
import Parts from '../../Components/Home-Sections/Parts';
import OurReviewPart from '../../Components/Reviews/OurReviewPart/OurReviewPart';


const Home = () => {
    return (
        <div>
           <Banner/>
           <Parts/>
           <ChooseUs/>
           <HomeInfoParts/>
           <OurReviewPart />
        </div>
    );
};

export default Home;