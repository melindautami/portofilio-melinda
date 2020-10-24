import React, {useContext} from 'react';
import {appsContext} from '../App'; 
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage() {

    const {apps} = useContext(appsContext);

    return(
        <div>
            <Hero title={apps.home.title} subTitle={apps.home.subTitle} text={apps.home.text} />
            <Carousel />
        </div>
    );

}

export default HomePage;