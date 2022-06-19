import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setTestimonials(data.testimonials))
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000
    };

    return (
        <div className="testimonials">
            <h2>Testimonials</h2>
            <Slider {...settings}>
                {
                    testimonials.map(testimonial => <div className="testimonials-wrapper" key={testimonial.id}>
                        <div className="testimonial-img-area">
                            <img src={testimonial.img} alt="" />
                        </div>
                        <div className="testimonial-text-area">
                            <h4 className="testimonial-title">{testimonial.name}</h4>
                            <blockquote>{testimonial.description}</blockquote>
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default Testimonials;