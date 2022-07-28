import React from 'react';
import Banner from '../../Components/Home-Sections/Banner';
import ChooseUs from '../../Components/Home-Sections/ChooseUs';
import Parts from '../../Components/Home-Sections/Parts';
import OurReviewPart from '../../Components/New folder/OurReviewPart/OurReviewPart';


const Home = () => {
    return (
        <div>
           <Banner/>
           <Parts/>
           <ChooseUs/>
           <OurReviewPart />
        </div>
    );
};

export default Home;