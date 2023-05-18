import React from 'react';
import Banner from './HomeCompo/Banner';
import Gallery from './HomeCompo/Gallery';
import ShopByCategory from './HomeCompo/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            
        </div>
    );
};

export default Home;