import React from 'react';
import Banner from './HomeCompo/Banner';
import Gallery from './HomeCompo/Gallery';
import ShopByCategory from './HomeCompo/ShopByCategory';
import Testimonials from './HomeCompo/Testimonials';
import InfoBlog from './HomeCompo/InfoBlog';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <InfoBlog/>
            <Testimonials/>
            
        </div>
    );
};

export default Home;