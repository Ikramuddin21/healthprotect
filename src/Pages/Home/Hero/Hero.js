import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {

    const [heroInfo, setHeroInfo] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setHeroInfo(data.hero))
    }, []);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="hero">
            <Slider {...settings}>
                {
                    heroInfo.map((info, index) => <div key={index} className="hero-wrapper items-center">
                        <div className="hero-text-area">
                            <h1>{info.title}</h1>
                            <p>{info.description}</p>
                            <Link to="/appointment">
                                <button className="appointment-btn">Appointment</button>
                            </Link>
                        </div>
                        <div className="hero-img-area">
                            <img src={info.img} alt="" />
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default Hero;