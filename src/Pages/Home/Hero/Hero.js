import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import heroInfo from '../../../temp/data.json';
import './Hero.css';

const Hero = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    console.log(heroInfo);
    return (
        <div className="hero">
            <Slider {...settings}>
                {
                    heroInfo.hero.map((info, index) => <div key={index} className="hero-wrapper items-center">
                        <div className="hero-text-area">
                            <h1>{info.title}</h1>
                            <p>{info.description}</p>
                            <button className="appointment-btn">Appointment</button>
                        </div>
                        <div className="hero-img-area">
                            <img src={require(`../../../images/hero${info.img}`)} alt="" />
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default Hero;