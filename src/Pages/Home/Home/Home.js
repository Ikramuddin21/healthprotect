import React from 'react';
import Doctors from '../Doctors/Doctors';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import News from '../../Shared/News/News';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Doctors />
            <Testimonials />
            <Gallery />
            <News />
        </>
    );
};

export default Home;